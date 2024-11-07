"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3261], {
        93261: (e, r, u) => {
            u.d(r, {
                A4: () => J,
                Aw: () => h,
                CL: () => L,
                DU: () => z,
                E8: () => P,
                Eg: () => b,
                FW: () => l,
                G_: () => _,
                HT: () => ge,
                LA: () => K,
                M7: () => ue,
                MQ: () => ae,
                Pi: () => C,
                Pt: () => M,
                Pv: () => Y,
                QA: () => G,
                Rx: () => ne,
                Sp: () => Q,
                V3: () => O,
                VF: () => U,
                Vc: () => x,
                WG: () => v,
                XK: () => E,
                _n: () => A,
                d3: () => w,
                dZ: () => j,
                dj: () => V,
                dl: () => y,
                dt: () => m,
                ek: () => ce,
                gx: () => q,
                hE: () => de,
                hg: () => $,
                i2: () => I,
                jP: () => R,
                l5: () => te,
                mA: () => pe,
                mN: () => T,
                mm: () => F,
                mt: () => N,
                nm: () => re,
                nz: () => H,
                pI: () => se,
                r5: () => D,
                rq: () => le,
                rw: () => W,
                t$: () => f,
                tN: () => g,
                uX: () => ie,
                v5: () => S,
                vb: () => Z,
                w$: () => k,
                xI: () => X,
                xS: () => ee,
                xm: () => B,
                zv: () => oe
            });
            var t = u(4942),
                o = u(15861),
                n = u(64687),
                a = u.n(n),
                s = u(64358),
                i = u(61509);

            function p(e, r) {
                var u = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), u.push.apply(u, t)
                }
                return u
            }

            function d(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var u = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? p(Object(u), !0).forEach((function(r) {
                        (0, t.Z)(e, r, u[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(u)) : p(Object(u)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(u, r))
                    }))
                }
                return e
            }
            var c = i.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getGroupById: e.query({
                                queryFn: function(e, r, u, t) {
                                    return (0, o.Z)(a().mark((function r() {
                                        var u, n, s, i, p, c, g, l, y, G, m;
                                        return a().wrap((function(r) {
                                            for (;;) switch (r.prev = r.next) {
                                                case 0:
                                                    return u = e.groupId, n = e.includeRoles, s = void 0 === n || n, i = e.purpose, p = void 0 === i ? "other" : i, r.next = 3, t({
                                                        url: "/groups/".concat(u),
                                                        params: {
                                                            includeRoles: s,
                                                            purpose: p
                                                        }
                                                    });
                                                case 3:
                                                    if (!(c = r.sent).error) {
                                                        r.next = 6;
                                                        break
                                                    }
                                                    return r.abrupt("return", {
                                                        error: c.error
                                                    });
                                                case 6:
                                                    return g = c.data, l = "softdeleted" === g.membershipStatus, y = 3 === Object.keys(g).length, G = function() {
                                                        var e = (0, o.Z)(a().mark((function e() {
                                                            var r, u;
                                                            return a().wrap((function(e) {
                                                                for (;;) switch (e.prev = e.next) {
                                                                    case 0:
                                                                        if (!y) {
                                                                            e.next = 2;
                                                                            break
                                                                        }
                                                                        return e.abrupt("return", null);
                                                                    case 2:
                                                                        return e.next = 4, t("users/".concat(g.ownerId));
                                                                    case 4:
                                                                        if (!(r = e.sent).error) {
                                                                            e.next = 7;
                                                                            break
                                                                        }
                                                                        return e.abrupt("return", {
                                                                            error: r.error
                                                                        });
                                                                    case 7:
                                                                        return u = r.data, e.abrupt("return", d(d({}, u), {}, {
                                                                            joinedAt: g.createdAt
                                                                        }));
                                                                    case 9:
                                                                    case "end":
                                                                        return e.stop()
                                                                }
                                                            }), e)
                                                        })));
                                                        return function() {
                                                            return e.apply(this, arguments)
                                                        }
                                                    }(), m = function() {
                                                        var e;
                                                        return null != g && g.myMember && null != g && g.roles ? null == g || null === (e = g.roles) || void 0 === e ? void 0 : e.map((function(e) {
                                                            var r;
                                                            return null != g && null !== (r = g.myMember) && void 0 !== r && null !== (r = r.roleIds) && void 0 !== r && r.includes(e.id) ? e.order : Number.MAX_SAFE_INTEGER
                                                        })).sort((function(e, r) {
                                                            return e - r
                                                        }))[0] : Number.MAX_SAFE_INTEGER
                                                    }, r.t0 = d, r.t1 = d({}, g), r.t2 = {}, r.t3 = l, r.t4 = y, r.t5 = m(), r.next = 19, G();
                                                case 19:
                                                    return r.t6 = r.sent, r.t7 = {
                                                        isSoftDeleted: r.t3,
                                                        isSoftDeleting: r.t4,
                                                        memberRank: r.t5,
                                                        ownerData: r.t6
                                                    }, r.t8 = (0, r.t0)(r.t1, r.t2, r.t7), r.abrupt("return", {
                                                        data: r.t8
                                                    });
                                                case 23:
                                                case "end":
                                                    return r.stop()
                                            }
                                        }), r)
                                    })))()
                                },
                                providesTags: function(e, r, u) {
                                    return [{
                                        type: "Group",
                                        id: u.groupId
                                    }]
                                }
                            }),
                            getGroupsForUser: e.query({
                                query: function(e) {
                                    var r = e.userId;
                                    return "/users/".concat(r, "/groups")
                                },
                                providesTags: function(e, r, u) {
                                    return [{
                                        type: "UserGroups",
                                        id: u.userId
                                    }]
                                }
                            }),
                            getGroupPosts: e.query({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.n,
                                        t = e.pageValue,
                                        o = e.publicOnly;
                                    return {
                                        url: "/groups/".concat(r, "/posts"),
                                        method: "GET",
                                        params: d(d({}, (0, s.ue)({
                                            n: u,
                                            pageValue: t
                                        })), {}, {
                                            publicOnly: o
                                        })
                                    }
                                },
                                transformResponse: function(e, r, u) {
                                    var t, o = u.pageValue,
                                        n = u.n;
                                    return d(d({}, e), {}, {
                                        offset: (0, s.ue)({
                                            n,
                                            pageValue: o
                                        }).offset,
                                        isLastPage: (0, s.L6)({
                                            n,
                                            pageResultsLength: null === (t = e.posts) || void 0 === t ? void 0 : t.length,
                                            pageValue: o,
                                            total: e.total
                                        })
                                    })
                                },
                                providesTags: function(e, r, u) {
                                    return [{
                                        type: "GroupPosts",
                                        id: u.groupId
                                    }]
                                }
                            }),
                            createGroupPost: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.text,
                                        t = e.title,
                                        o = e.imageId,
                                        n = e.sendNotification,
                                        a = void 0 === n || n,
                                        s = e.roleIds,
                                        i = void 0 === s ? [] : s,
                                        p = e.visibility,
                                        d = void 0 === p ? "group" : p;
                                    return {
                                        url: "/groups/".concat(r, "/posts"),
                                        method: "POST",
                                        body: {
                                            text: u,
                                            title: t,
                                            imageId: o,
                                            sendNotification: a,
                                            roleIds: i,
                                            visibility: d
                                        }
                                    }
                                },
                                invalidatesTags: function(e, r, u) {
                                    return [{
                                        type: "GroupPosts",
                                        id: u.groupId
                                    }]
                                }
                            }),
                            deleteGroupPost: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.postId;
                                    return {
                                        url: "/groups/".concat(r, "/posts/").concat(u),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: function(e, r, u) {
                                    return [{
                                        type: "GroupPosts",
                                        id: u.groupId
                                    }]
                                }
                            }),
                            getGroupActiveInstances: e.query({
                                query: function(e) {
                                    var r = e.groupId;
                                    return "/groups/".concat(r, "/instances")
                                },
                                providesTags: function(e, r, u) {
                                    return [{
                                        type: "GroupActiveInstances",
                                        id: u.groupId
                                    }]
                                }
                            }),
                            getGroupsPermissions: e.query({
                                query: function(e) {
                                    var r = e.groupId;
                                    return "/groups/".concat(r, "/permissions")
                                },
                                providesTags: function(e, r, u) {
                                    return [{
                                        type: "GroupPermissions",
                                        id: u.groupId
                                    }]
                                }
                            }),
                            getAllUserGroupsPermissions: e.query({
                                query: function(e) {
                                    var r = e.userId;
                                    return "/users/".concat(r, "/groups/permissions")
                                },
                                providesTags: function(e, r, u) {
                                    return [{
                                        type: "UserGroupsPermissions",
                                        id: u.userId
                                    }]
                                }
                            }),
                            getGroupReports: e.query({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.userId;
                                    return {
                                        url: "/users/".concat(u, "/feedback?contentId=").concat(r, "&metadata=true")
                                    }
                                },
                                providesTags: function(e, r, u) {
                                    return [{
                                        type: "GroupFeedback",
                                        id: u.groupId
                                    }]
                                }
                            }),
                            createGroupReports: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.reasons,
                                        t = e.locations,
                                        o = e.description;
                                    return {
                                        url: "/feedbacks/group/".concat(r),
                                        method: "POST",
                                        body: {
                                            type: "report",
                                            reasons: u,
                                            locations: t,
                                            description: o
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    return [{
                                        type: "GroupFeedback",
                                        id: e.groupId
                                    }]
                                }))
                            }),
                            updateGroupTags: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.tags;
                                    return {
                                        url: "/groups/".concat(r),
                                        method: "PUT",
                                        body: {
                                            tags: u
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId;
                                    return [{
                                        type: "Group",
                                        id: r
                                    }, {
                                        type: "GroupAuditLogs",
                                        id: r
                                    }]
                                }))
                            }),
                            removeGroupIconAndBanner: e.mutation({
                                query: function(e) {
                                    var r = e.groupId;
                                    return {
                                        url: "/groups/".concat(r),
                                        method: "PUT",
                                        body: {
                                            bannerId: null,
                                            iconId: null
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId;
                                    return [{
                                        type: "Group",
                                        id: r
                                    }, {
                                        type: "GroupAuditLogs",
                                        id: r
                                    }]
                                }))
                            }),
                            updateGroup: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.data;
                                    return {
                                        url: "/groups/".concat(r),
                                        method: "PUT",
                                        body: d({}, u)
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId;
                                    return [{
                                        type: "Group",
                                        id: r
                                    }, {
                                        type: "GroupAuditLogs",
                                        id: r
                                    }]
                                }))
                            }),
                            deleteGroup: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.hardDelete,
                                        t = void 0 !== u && u;
                                    return {
                                        url: "/groups/".concat(r),
                                        method: "DELETE",
                                        params: {
                                            hardDelete: t
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId,
                                        u = e.ownerId;
                                    return [{
                                        type: "Group",
                                        id: r
                                    }, {
                                        type: "GroupAuditLogs",
                                        id: r
                                    }, {
                                        type: "UserGroups",
                                        id: u
                                    }, {
                                        type: "UserListings",
                                        id: u
                                    }, {
                                        type: "UserProducts",
                                        id: u
                                    }]
                                }))
                            }),
                            getGroupMembers: e.query({
                                queryFn: function(e, r, u, t) {
                                    return (0, o.Z)(a().mark((function r() {
                                        var u, o, n, s, i, p, c, g, l, y, G;
                                        return a().wrap((function(r) {
                                            for (;;) switch (r.prev = r.next) {
                                                case 0:
                                                    return u = e.groupId, o = e.perPage, n = void 0 === o ? 25 : o, s = e.page, i = void 0 === s ? 0 : s, p = e.roleId, c = void 0 === p ? null : p, g = e.sort, l = void 0 === g ? null : g, r.next = 3, t({
                                                        url: "/groups/".concat(u, "/members"),
                                                        params: {
                                                            n,
                                                            offset: i * n,
                                                            roleId: null !== c ? c : void 0,
                                                            sort: null !== l ? l : void 0
                                                        }
                                                    });
                                                case 3:
                                                    if (!(y = r.sent).error) {
                                                        r.next = 6;
                                                        break
                                                    }
                                                    return r.abrupt("return", {
                                                        error: y.error
                                                    });
                                                case 6:
                                                    return G = {
                                                        members: y.data,
                                                        isLastPage: y.data.length < n
                                                    }, r.abrupt("return", {
                                                        data: d({
                                                            page: i
                                                        }, G)
                                                    });
                                                case 8:
                                                case "end":
                                                    return r.stop()
                                            }
                                        }), r)
                                    })))()
                                },
                                providesTags: function(e, r, u) {
                                    var t = u.groupId;
                                    return [{
                                        type: "GroupMembers",
                                        id: t
                                    }, {
                                        type: "GroupMemberPage",
                                        id: "".concat(t, "-").concat(null == e ? void 0 : e.page)
                                    }]
                                }
                            }),
                            getSearchGroupMembers: e.query({
                                query: function(e) {
                                    return {
                                        url: "/groups/".concat(e.groupId, "/members/search"),
                                        params: (0, s.Ld)(e)
                                    }
                                },
                                providesTags: function(e, r, u) {
                                    u.groupId;
                                    return [{
                                        type: "GroupMembersSearch"
                                    }]
                                },
                                transformResponse: function(e, r, u) {
                                    var t, o = u.pageValue,
                                        n = u.n;
                                    return d(d({}, e), {}, {
                                        isLastPage: (0, s.L6)({
                                            n,
                                            pageResultsLength: null === (t = e.results) || void 0 === t ? void 0 : t.length,
                                            pageValue: o,
                                            total: e.total
                                        })
                                    })
                                }
                            }),
                            joinGroup: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.inviteId,
                                        t = e.confirmOverrideBlock,
                                        o = void 0 !== t && t;
                                    return {
                                        url: "/groups/".concat(r, "/join?confirmOverrideBlock=").concat(o),
                                        method: "POST",
                                        body: {
                                            inviteId: u
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId;
                                    return [{
                                        type: "GroupMembers",
                                        id: r
                                    }, {
                                        type: "Group",
                                        id: r
                                    }, {
                                        type: "UserGroups:invited"
                                    }]
                                }))
                            }),
                            cancelGroupJoinRequest: e.mutation({
                                query: function(e) {
                                    var r = e.groupId;
                                    return {
                                        url: "/groups/".concat(r, "/requests"),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    return [{
                                        type: "Group",
                                        id: e.groupId
                                    }]
                                }))
                            }),
                            getGroupMemberByUserId: e.query({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.userId;
                                    return {
                                        url: "/groups/".concat(r, "/members/").concat(u)
                                    }
                                },
                                providesTags: function(e, r, u) {
                                    var t = u.groupId,
                                        o = u.userId;
                                    return [{
                                        type: "GroupMember",
                                        id: t + (void 0 === o ? "" : o)
                                    }]
                                }
                            }),
                            getGroupBannedMembers: e.query({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.perPage,
                                        t = void 0 === u ? 100 : u,
                                        o = e.offset,
                                        n = void 0 === o ? 0 : o;
                                    return {
                                        url: "/groups/".concat(r, "/bans"),
                                        params: {
                                            n: t,
                                            offset: n
                                        }
                                    }
                                },
                                providesTags: function(e, r, u) {
                                    return [{
                                        type: "GroupBannedMembers",
                                        id: u.groupId
                                    }]
                                }
                            }),
                            banGroupMember: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.userId;
                                    return {
                                        url: "/groups/".concat(r, "/bans"),
                                        method: "POST",
                                        body: {
                                            userId: u
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId,
                                        u = e.userId,
                                        t = void 0 === u ? "" : u,
                                        o = e.fromPage;
                                    return [{
                                        type: "GroupMembersSearch"
                                    }, {
                                        type: "GroupBannedMembers",
                                        id: r
                                    }, {
                                        type: "GroupMember",
                                        id: r + t
                                    }, {
                                        type: "GroupMemberPage",
                                        id: "".concat(r, "-").concat(o)
                                    }]
                                }))
                            }),
                            unbanGroupMember: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.userId;
                                    return {
                                        url: "/groups/".concat(r, "/bans/").concat(u),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId,
                                        u = e.userId;
                                    return [{
                                        type: "GroupMembers",
                                        id: r
                                    }, {
                                        type: "GroupBannedMembers",
                                        id: r
                                    }, {
                                        type: "GroupMember",
                                        id: r + (void 0 === u ? "" : u)
                                    }]
                                }))
                            }),
                            kickGroupMember: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.userId;
                                    return {
                                        url: "/groups/".concat(r, "/members/").concat(u),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId,
                                        u = e.userId,
                                        t = void 0 === u ? "" : u,
                                        o = e.fromPage;
                                    return [{
                                        type: "GroupMembersSearch"
                                    }, {
                                        type: "GroupMember",
                                        id: r + t
                                    }, {
                                        type: "GroupMemberPage",
                                        id: "".concat(r, "-").concat(o)
                                    }]
                                }))
                            }),
                            unblockGroup: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.userId;
                                    return {
                                        url: "/groups/".concat(r, "/members/").concat(u),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId;
                                    return [{
                                        type: "Group",
                                        id: r
                                    }, {
                                        type: "UserGroups:userblocked"
                                    }, {
                                        type: "GroupJoinRequests",
                                        id: r
                                    }]
                                }))
                            }),
                            blockGroup: e.mutation({
                                query: function(e) {
                                    var r = e.groupId;
                                    return {
                                        url: "/groups/".concat(r, "/block"),
                                        method: "POST"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    return [{
                                        type: "Group",
                                        id: e.groupId
                                    }, {
                                        type: "UserGroups:userblocked"
                                    }]
                                }))
                            }),
                            leaveGroup: e.mutation({
                                query: function(e) {
                                    var r = e.groupId;
                                    return {
                                        url: "/groups/".concat(r, "/leave"),
                                        method: "POST"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId,
                                        u = e.userId;
                                    return [{
                                        type: "GroupMembers",
                                        id: r
                                    }, {
                                        type: "GroupMember",
                                        id: r + (void 0 === u ? "" : u)
                                    }, {
                                        type: "Group",
                                        id: r
                                    }]
                                }))
                            }),
                            deleteGroupMember: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.userId;
                                    return {
                                        url: "/groups/".concat(r, "/members/").concat(u),
                                        method: "DELETE"
                                    }
                                }
                            }),
                            getGroupInvites: e.query({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.perPage,
                                        t = void 0 === u ? 100 : u,
                                        o = e.offset,
                                        n = void 0 === o ? 0 : o;
                                    return {
                                        url: "/groups/".concat(r, "/invites"),
                                        params: {
                                            n: t,
                                            offset: n
                                        }
                                    }
                                },
                                providesTags: function(e, r, u) {
                                    return [{
                                        type: "GroupInvites",
                                        id: u.groupId
                                    }]
                                }
                            }),
                            inviteGroupMember: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.userId;
                                    return {
                                        url: "/groups/".concat(r, "/invites"),
                                        method: "POST",
                                        body: {
                                            userId: u
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId;
                                    return [{
                                        type: "GroupInvites",
                                        id: r
                                    }, {
                                        type: "GroupJoinRequests",
                                        id: r
                                    }]
                                }))
                            }),
                            deleteGroupInvite: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.userId;
                                    return {
                                        url: "/groups/".concat(r, "/invites/").concat(u),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    return [{
                                        type: "GroupInvites",
                                        id: e.groupId
                                    }]
                                }))
                            }),
                            getGroupJoinRequests: e.query({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.perPage,
                                        t = void 0 === u ? 100 : u,
                                        o = e.offset,
                                        n = void 0 === o ? 0 : o,
                                        a = e.blocked,
                                        s = void 0 !== a && a;
                                    return {
                                        url: "/groups/".concat(r, "/requests"),
                                        params: {
                                            n: t,
                                            offset: n,
                                            blocked: s
                                        }
                                    }
                                },
                                providesTags: function(e, r, u) {
                                    return [{
                                        type: "GroupJoinRequests",
                                        id: u.groupId
                                    }]
                                }
                            }),
                            acceptGroupJoinRequest: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.userId;
                                    return {
                                        url: "/groups/".concat(r, "/requests/").concat(u),
                                        method: "PUT",
                                        body: {
                                            action: "accept"
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId;
                                    return [{
                                        type: "GroupJoinRequests",
                                        id: r
                                    }, {
                                        type: "GroupMembers",
                                        id: r
                                    }]
                                }))
                            }),
                            rejectGroupJoinRequest: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.userId;
                                    return {
                                        url: "/groups/".concat(r, "/requests/").concat(u),
                                        method: "PUT",
                                        body: {
                                            action: "reject"
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId;
                                    return [{
                                        type: "GroupJoinRequests",
                                        id: r
                                    }, {
                                        type: "GroupMembers",
                                        id: r
                                    }]
                                }))
                            }),
                            blockGroupJoinRequest: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.userId;
                                    return {
                                        url: "/groups/".concat(r, "/requests/").concat(u),
                                        method: "PUT",
                                        body: {
                                            action: "reject",
                                            block: !0
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId;
                                    return [{
                                        type: "GroupJoinRequests",
                                        id: r
                                    }, {
                                        type: "GroupMembers",
                                        id: r
                                    }]
                                }))
                            }),
                            banUserFromGroupJoinRequest: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.userId;
                                    return {
                                        url: "/groups/".concat(r, "/bans"),
                                        method: "POST",
                                        body: {
                                            userId: u
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId;
                                    return [{
                                        type: "GroupJoinRequests",
                                        id: r
                                    }, {
                                        type: "GroupBannedMembers",
                                        id: r
                                    }]
                                }))
                            }),
                            getGroupMembershipStatus: e.query({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.perPage,
                                        t = void 0 === u ? 100 : u,
                                        o = e.offset,
                                        n = void 0 === o ? 0 : o,
                                        a = e.membershipStatus,
                                        s = void 0 === a ? "invited" : a;
                                    return {
                                        url: "/groups/".concat(r, "/").concat(s),
                                        params: {
                                            n: t,
                                            offset: n
                                        }
                                    }
                                }
                            }),
                            getGroupRoles: e.query({
                                query: function(e) {
                                    var r = e.groupId;
                                    return {
                                        url: "/groups/".concat(r, "/roles")
                                    }
                                },
                                providesTags: function(e, r, u) {
                                    return [{
                                        type: "GroupRoles",
                                        id: u.groupId
                                    }]
                                }
                            }),
                            createGroupRole: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.data;
                                    return {
                                        url: "/groups/".concat(r, "/roles"),
                                        method: "POST",
                                        body: d({}, u)
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId,
                                        u = e.ownerId;
                                    return [{
                                        type: "GroupRoles",
                                        id: r
                                    }, {
                                        type: "Group",
                                        id: r
                                    }, {
                                        type: "GroupAuditLogs",
                                        id: r
                                    }, {
                                        type: "UserListings",
                                        id: u
                                    }, {
                                        type: "UserProducts",
                                        id: u
                                    }]
                                }))
                            }),
                            updateGroupRole: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.roleId,
                                        t = e.data;
                                    return {
                                        url: "/groups/".concat(r, "/roles/").concat(u),
                                        method: "PUT",
                                        body: d({}, t)
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId;
                                    return [{
                                        type: "GroupRoles",
                                        id: r
                                    }, {
                                        type: "Group",
                                        id: r
                                    }, {
                                        type: "GroupAuditLogs",
                                        id: r
                                    }]
                                }))
                            }),
                            deleteGroupRole: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.roleId,
                                        t = e.confirm;
                                    return {
                                        url: "/groups/".concat(r, "/roles/").concat(u),
                                        method: "DELETE",
                                        params: {
                                            confirm: t
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId,
                                        u = e.ownerId;
                                    return [{
                                        type: "GroupRoles",
                                        id: r
                                    }, {
                                        type: "Group",
                                        id: r
                                    }, {
                                        type: "GroupAuditLogs",
                                        id: r
                                    }, {
                                        type: "UserListings",
                                        id: u
                                    }, {
                                        type: "UserProducts",
                                        id: u
                                    }]
                                }))
                            }),
                            updateGroupMember: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.userId,
                                        t = e.visibility,
                                        o = e.isSubscribedToPosts,
                                        n = e.managerNotes;
                                    return {
                                        url: "/groups/".concat(r, "/members/").concat(u),
                                        method: "PUT",
                                        body: {
                                            visibility: t,
                                            isSubscribedToAnnouncements: o,
                                            managerNotes: n
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId,
                                        u = e.userId;
                                    return [{
                                        type: "GroupMember",
                                        id: r + (void 0 === u ? "" : u)
                                    }, {
                                        type: "GroupMembersSearch"
                                    }]
                                }))
                            }),
                            addRoleToMember: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.userId,
                                        t = e.roleId;
                                    return {
                                        url: "/groups/".concat(r, "/members/").concat(u, "/roles/").concat(t),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId,
                                        u = e.userId;
                                    return [{
                                        type: "GroupMember",
                                        id: r + (void 0 === u ? "" : u)
                                    }, {
                                        type: "GroupMembersSearch"
                                    }]
                                }))
                            }),
                            removeRoleFromMember: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.userId,
                                        t = e.roleId;
                                    return {
                                        url: "/groups/".concat(r, "/members/").concat(u, "/roles/").concat(t),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId,
                                        u = e.userId;
                                    return [{
                                        type: "GroupMember",
                                        id: r + (void 0 === u ? "" : u)
                                    }, {
                                        type: "GroupMembersSearch"
                                    }]
                                }))
                            }),
                            getGroupAuditLogTypes: e.query({
                                query: function(e) {
                                    var r = e.groupId;
                                    return {
                                        url: "/groups/".concat(r, "/auditLogTypes")
                                    }
                                },
                                providesTags: function(e, r, u) {
                                    return [{
                                        type: "GroupAuditLogTypes",
                                        id: u.groupId
                                    }]
                                }
                            }),
                            getGroupAuditLogs: e.query({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.eventTypes,
                                        t = void 0 === u ? [] : u,
                                        o = e.perPage,
                                        n = void 0 === o ? 1 : o,
                                        a = e.offset,
                                        s = e.startDate,
                                        i = e.endDate;
                                    return {
                                        url: "/groups/".concat(r, "/auditLogs"),
                                        params: {
                                            n,
                                            offset: a,
                                            startDate: s,
                                            endDate: i,
                                            eventTypes: t
                                        }
                                    }
                                },
                                providesTags: function(e, r, u) {
                                    return [{
                                        type: "GroupAuditLogs",
                                        id: u.groupId
                                    }]
                                }
                            }),
                            getGroupGalleries: e.query({
                                query: function(e) {
                                    var r = e.groupId;
                                    return {
                                        url: "/groups/".concat(r, "/galleries")
                                    }
                                },
                                providesTags: function(e, r, u) {
                                    return [{
                                        type: "GroupGalleries",
                                        id: u.groupId
                                    }]
                                }
                            }),
                            getGroupGalleryImages: e.query({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.galleryId,
                                        t = e.n,
                                        o = e.page,
                                        n = void 0 === o ? 1 : o;
                                    return {
                                        url: "/groups/".concat(r, "/galleries/").concat(u),
                                        params: {
                                            v: 2,
                                            n: t,
                                            offset: (n - 1) * t
                                        }
                                    }
                                },
                                providesTags: function(e, r, u) {
                                    return [{
                                        type: "GroupGalleryImages",
                                        id: u.groupId + u.galleryId
                                    }]
                                }
                            }),
                            createGroupGallery: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.name,
                                        t = e.description,
                                        o = e.membersOnly;
                                    return {
                                        url: "/groups/".concat(r, "/galleries"),
                                        method: "POST",
                                        body: {
                                            name: u,
                                            description: t,
                                            membersOnly: o
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId;
                                    return [{
                                        type: "GroupGalleries",
                                        id: r
                                    }, {
                                        type: "Group",
                                        id: r
                                    }]
                                }))
                            }),
                            updateGroupGallery: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.galleryId,
                                        t = e.data;
                                    return {
                                        url: "/groups/".concat(r, "/galleries/").concat(u),
                                        method: "PUT",
                                        body: d({}, t)
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId;
                                    return [{
                                        type: "GroupGalleryImages",
                                        id: r + e.galleryId
                                    }, {
                                        type: "GroupGalleries",
                                        id: r
                                    }, {
                                        type: "Group",
                                        id: r
                                    }]
                                }))
                            }),
                            deleteGroupGallery: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.galleryId,
                                        t = e.confirm;
                                    return {
                                        url: "/groups/".concat(r, "/galleries/").concat(u, "?confirm=").concat(t),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: function(e) {
                                    var r = e.groupId;
                                    return [{
                                        type: "GroupGalleryImages",
                                        id: r + e.galleryId
                                    }, {
                                        type: "GroupGalleries",
                                        id: r
                                    }, {
                                        type: "Group",
                                        id: r
                                    }]
                                }
                            }),
                            deleteGroupGalleryImage: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.galleryId,
                                        t = e.imageId;
                                    return {
                                        url: "/groups/".concat(r, "/galleries/").concat(u, "/images/").concat(t),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId;
                                    return [{
                                        type: "GroupGalleryImages",
                                        id: r + e.galleryId
                                    }, {
                                        type: "GroupGalleries",
                                        id: r
                                    }, {
                                        type: "Group",
                                        id: r
                                    }]
                                }))
                            }),
                            submitGroupGalleryImage: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.galleryId,
                                        t = e.fileId;
                                    return {
                                        url: "/groups/".concat(r, "/galleries/").concat(u, "/images"),
                                        method: "POST",
                                        body: {
                                            fileId: t
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var r = e.groupId;
                                    return [{
                                        type: "GroupGalleryImages",
                                        id: r + e.galleryId
                                    }, {
                                        type: "GroupGalleries",
                                        id: r
                                    }, {
                                        type: "Group",
                                        id: r
                                    }]
                                }))
                            }),
                            getGroupRoleTemplates: e.query({
                                query: function() {
                                    return {
                                        url: "/groups/roleTemplates"
                                    }
                                }
                            }),
                            searchGroups: e.query({
                                query: function(e) {
                                    return {
                                        url: "/groups",
                                        params: {
                                            query: e.query,
                                            n: 100
                                        }
                                    }
                                }
                            }),
                            createGroupInstance: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "/instances",
                                        method: "POST",
                                        body: {
                                            worldId: e.worldId,
                                            ownerId: e.groupId,
                                            type: e.instanceType,
                                            groupAccessType: e.groupAccessType,
                                            region: e.region,
                                            queueEnabled: e.queueEnabled,
                                            roleIds: e.roleIds || []
                                        }
                                    }
                                },
                                invalidatesTags: function(e, r, u) {
                                    return [{
                                        type: "Group",
                                        id: u.groupId
                                    }]
                                }
                            }),
                            getUserGroupsByMembershipStatus: e.query({
                                query: function(e) {
                                    var r = e.userId,
                                        u = e.membershipStatus;
                                    return {
                                        url: "/users/".concat(r, "/groups/").concat(u)
                                    }
                                },
                                providesTags: function(e, r, u) {
                                    var t = u.membershipStatus;
                                    return [{
                                        type: "UserGroups:".concat(t)
                                    }]
                                }
                            }),
                            declineGroupInvite: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.block,
                                        t = void 0 !== u && u;
                                    return {
                                        url: "groups/".concat(r, "/invites"),
                                        method: "PUT",
                                        body: {
                                            block: t
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    return [{
                                        type: "UserGroups:invited"
                                    }, {
                                        type: "Group",
                                        id: e.groupId
                                    }]
                                }))
                            }),
                            getTransferGroupValidity: e.query({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.transferTargetId;
                                    return {
                                        url: "groups/".concat(r, "/transfer"),
                                        method: "GET",
                                        params: {
                                            transferTargetId: u
                                        }
                                    }
                                },
                                providesTags: function(e) {
                                    return [{
                                        type: "GroupTransfer",
                                        id: e.groupId
                                    }]
                                }
                            }),
                            acceptGroupTransfer: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.transferTargetId;
                                    return {
                                        url: "groups/".concat(r, "/transfer"),
                                        method: "POST",
                                        body: {
                                            transferTargetId: u
                                        }
                                    }
                                },
                                invalidatesTags: function(e, r, u) {
                                    var t = u.groupId;
                                    return [{
                                        type: "Group",
                                        id: t
                                    }, {
                                        type: "GroupTransfer",
                                        id: t
                                    }]
                                }
                            }),
                            deleteGroupTransfer: e.mutation({
                                query: function(e) {
                                    var r = e.groupId,
                                        u = e.transferTargetId;
                                    return {
                                        url: "groups/".concat(r, "/transfer"),
                                        method: "DELETE",
                                        body: {
                                            transferTargetId: u
                                        }
                                    }
                                },
                                invalidatesTags: function(e, r, u) {
                                    var t = u.groupId;
                                    return [{
                                        type: "Group",
                                        id: t
                                    }, {
                                        type: "GroupTransfer",
                                        id: t
                                    }]
                                }
                            })
                        }
                    }
                }).enhanceEndpoints({
                    addTagTypes: ["Group", "GroupActiveInstances", "GroupPost", "GroupAuditLogs", "GroupAuditLogTypes", "GroupBannedMembers", "GroupFeedback", "GroupInvites", "GroupJoinRequests", "GroupMember", "GroupMembersSearch", "GroupPermissions", "GroupRoles", "UserGroups:userblocked", "UserGroups:invited", "UserGroups", "UserGroupsPermissions"]
                }),
                g = c.useAcceptGroupJoinRequestMutation,
                l = c.useAddRoleToMemberMutation,
                y = c.useBanGroupMemberMutation,
                G = c.useBanUserFromGroupJoinRequestMutation,
                m = c.useBlockGroupJoinRequestMutation,
                v = c.useBlockGroupMutation,
                I = c.useCancelGroupJoinRequestMutation,
                f = c.useCreateGroupPostMutation,
                b = c.useCreateGroupGalleryMutation,
                T = c.useCreateGroupInstanceMutation,
                q = c.useCreateGroupReportsMutation,
                M = c.useCreateGroupRoleMutation,
                h = c.useDeleteGroupPostMutation,
                P = c.useDeleteGroupGalleryImageMutation,
                R = c.useDeleteGroupGalleryMutation,
                E = c.useDeleteGroupInviteMutation,
                L = (c.useDeleteGroupMemberMutation, c.useDeleteGroupMutation),
                U = c.useDeleteGroupRoleMutation,
                S = c.useGetAllUserGroupsPermissionsQuery,
                k = c.useGetGroupActiveInstancesQuery,
                A = c.useGetGroupPostsQuery,
                O = c.useGetGroupBannedMembersQuery,
                D = c.useGetGroupByIdQuery,
                w = (c.useGetGroupGalleriesQuery, c.useGetGroupGalleryImagesQuery),
                Q = c.useGetGroupInvitesQuery,
                j = c.useGetGroupJoinRequestsQuery,
                B = c.useGetGroupMemberByUserIdQuery,
                J = (c.useGetGroupMembershipStatusQuery, c.useGetGroupReportsQuery),
                x = c.useGetGroupRolesQuery,
                F = c.useGetGroupRoleTemplatesQuery,
                V = c.useGetGroupsForUserQuery,
                N = c.useGetGroupsPermissionsQuery,
                C = c.useGetSearchGroupMembersQuery,
                _ = c.useGetUserGroupsByMembershipStatusQuery,
                z = c.useDeclineGroupInviteMutation,
                Z = c.useInviteGroupMemberMutation,
                X = c.useJoinGroupMutation,
                K = c.useKickGroupMemberMutation,
                W = c.useGetGroupAuditLogTypesQuery,
                $ = c.useLazyGetGroupAuditLogsQuery,
                H = c.useLazyGetGroupByIdQuery,
                Y = c.useLazyGetGroupMembersQuery,
                ee = (c.useLazyGetGroupRolesQuery, c.useLazySearchGroupsQuery),
                re = c.useLeaveGroupMutation,
                ue = c.useRejectGroupJoinRequestMutation,
                te = (c.useRemoveGroupIconAndBannerMutation, c.useRemoveRoleFromMemberMutation),
                oe = c.useSubmitGroupGalleryImageMutation,
                ne = c.useUnbanGroupMemberMutation,
                ae = c.useUnblockGroupMutation,
                se = c.useUpdateGroupGalleryMutation,
                ie = c.useUpdateGroupMemberMutation,
                pe = c.useUpdateGroupMutation,
                de = c.useUpdateGroupRoleMutation,
                ce = (c.useUpdateGroupTagsMutation, c.useGetTransferGroupValidityQuery),
                ge = c.useAcceptGroupTransferMutation,
                le = c.useDeleteGroupTransferMutation
        }
    }
]);
//# sourceMappingURL=1015f53edb6c044203fc29e291a8ebc29c03a1cf42fc16b6c296a1cd79c73d2c.js.map