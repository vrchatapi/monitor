"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7207], {
        37599: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(54546),
                l = n(45573),
                a = n(27003),
                o = n(67294),
                i = n(34698),
                c = n(65706),
                s = n(86646);
            const u = function(e) {
                var t = e.collapseOpen,
                    n = e.toggle,
                    u = e.title,
                    m = e.size,
                    d = void 0 === m ? "md" : m,
                    p = e.children,
                    g = e.onToggleCallback,
                    f = void 0 === g ? function() {} : g,
                    E = o.useState(t || !1),
                    v = (0, r.Z)(E, 2),
                    b = v[0],
                    h = v[1];
                o.useEffect((function() {
                    h(t)
                }), [t]);
                return o.createElement("div", null, o.createElement("h3", null, o.createElement(i.Z, {
                    "aria-label": "".concat(u, " Toggle"),
                    size: d,
                    onClick: function() {
                        n ? n() : (f(!b), h(!b))
                    },
                    color: b ? "primary" : "secondary"
                }, b && o.createElement(s.Z, {
                    icon: a.uM
                }), !b && o.createElement(s.Z, {
                    icon: l.Kt
                })), " ", u), o.createElement(c.Z, {
                    isOpen: b
                }, p), "sm" !== d && o.createElement("br", null))
            }
        },
        17207: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => Xl
            });
            var r = n(15861),
                l = n(54546),
                a = n(4965),
                o = n(40098),
                i = n(47947),
                c = n(26433),
                s = n(81511),
                u = n(92481),
                m = n(59660),
                d = n(42494),
                p = n(68335),
                g = n(54326),
                f = n(67992),
                E = n(41259),
                v = n(68149),
                b = n(35117),
                h = n(68214),
                w = n(59545),
                x = n(68055),
                y = n(76553),
                Z = n(6811),
                k = n(64687),
                N = n.n(k),
                O = n(83505),
                I = n(67294),
                C = n(32981),
                S = n(89250),
                j = n(79655),
                A = n(69699),
                T = n(23138),
                M = n(86646),
                P = function(e) {
                    var t, n = e.group,
                        r = e.groupMember,
                        l = null === (t = n.roles) || void 0 === t ? void 0 : t.find((function(e) {
                            return 0 === e.order
                        }));
                    return null != l && null != r && r.roleIds.includes(l.id)
                },
                R = function(e) {
                    var t, n, r, l = e.groupMember,
                        a = e.permission;
                    return (null == l || null === (t = l.permissions) || void 0 === t ? void 0 : t.includes("*")) || null !== (n = null == l || null === (r = l.permissions) || void 0 === r ? void 0 : r.includes(a)) && void 0 !== n && n
                },
                L = n(46320),
                U = n(4942),
                q = n(42138),
                z = n(42619),
                G = n(26375),
                D = n(70265),
                F = n(5702),
                X = n(78439),
                _ = n(47810),
                J = n(95305),
                B = n(35773),
                $ = n(60766),
                V = n(23149),
                W = n(3126),
                H = n(30776),
                Y = n(83024),
                Q = n(21464),
                K = n(17219),
                ee = n(5513),
                te = n(64258),
                ne = n(22202),
                re = n(62437),
                le = n(96985),
                ae = n(29104),
                oe = n(89421),
                ie = n(43862),
                ce = n(72998),
                se = n(65394),
                ue = n(85020),
                me = n(60006),
                de = n(95168),
                pe = n(93261),
                ge = n(45697),
                fe = n.n(ge),
                Ee = n(27484),
                ve = n.n(Ee),
                be = n(1646),
                he = n.n(be),
                we = n(84110),
                xe = n.n(we),
                ye = n(64358);
            ve().extend(he()), ve().extend(xe());
            const Ze = function(e) {
                var t = e.member,
                    n = e.onSelectCallback,
                    r = t.user,
                    l = void 0 === r ? {} : r,
                    a = l.thumbnailUrl,
                    o = l.currentAvatarThumbnailImageUrl,
                    i = l.displayName,
                    c = l.id,
                    s = t.joinedAt,
                    u = void 0 === s ? "" : s,
                    m = ve().duration(ve()(u).diff(ve()())).humanize(!0);
                return I.createElement(ke, null, I.createElement(le.JX, {
                    className: "tw-columns-3"
                }, I.createElement(le.pw, {
                    className: "tw-justify-self-start tw-my-2",
                    fitToCover: !0,
                    alt: i,
                    imageId: (0, ye.oQ)(a || o),
                    width: "100px",
                    height: "100px"
                })), I.createElement(le.JX, {
                    className: "tw-flex-[1_1_128px] tw-columns-6"
                }, I.createElement(j.rU, {
                    className: "tw-justify-self-start tw-text-2xl",
                    to: "/home/user/".concat(c)
                }, i), I.createElement("h4", {
                    className: "tw-justify-self-start"
                }, "Joined ".concat(m)), I.createElement("p", {
                    className: "tw-justify-self-start tw-text-[#737372] tw-text-[16px]"
                }, "Member")), I.createElement(le.JX, {
                    className: "tw-flex tw-flex-row tw-flex-[1_1_32px] tw-justify-center tw-items-center tw-columns-3"
                }, I.createElement(le.zx, {
                    expand: !0,
                    title: "Select New Owner",
                    onClick: function() {
                        n(t)
                    }
                }, "Select")))
            };
            var ke = (0, a.Z)(le.X2, {
                target: "e12tzkfr0"
            })("margin:0.4rem 0;padding:0.5rem;background-color:#252a30;border:3px solid #252a30;transition:border-color 0.2s ease-in-out;border-radius:8px;flex-wrap:wrap;justify-content:center;&:hover{border-color:#054d5e;}&>*{margin:0.5rem;}&>", le.JX, ">p:last-child,&>", le.JX, ">ul:last-child{margin:0;}");

            function Ne(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ne(Object(n), !0).forEach((function(t) {
                        (0, U.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ie = function(e) {
                var t, n, r, a = e.group,
                    o = void 0 === a ? {} : a,
                    i = e.isOpen,
                    c = e.cancelCallback,
                    s = e.isGroupMemberOnly,
                    u = void 0 !== s && s,
                    m = e.memberSelectCallback,
                    d = e.isSelecting,
                    p = void 0 !== d && d,
                    g = (0, I.useRef)(null),
                    f = (0, I.useState)(""),
                    E = (0, l.Z)(f, 2),
                    v = E[0],
                    b = E[1],
                    h = (0, I.useState)(1),
                    w = (0, l.Z)(h, 2),
                    x = w[0],
                    y = w[1],
                    Z = (0, de.Nr)(v),
                    k = (0, I.useState)([
                        [],
                        []
                    ]),
                    N = (0, l.Z)(k, 2),
                    O = N[0],
                    C = N[1],
                    S = (0, ne.XC)().data,
                    j = null == o ? void 0 : o.id,
                    A = null == o ? void 0 : o.ownerId,
                    T = null == o ? void 0 : o.myMember,
                    M = (0, pe.Pv)(),
                    P = (0, l.Z)(M, 2),
                    R = P[0],
                    L = P[1],
                    U = L.data,
                    z = L.error,
                    G = L.isLoading,
                    D = (null == U || null === (t = U.members) || void 0 === t ? void 0 : t.length) < 25;
                I.useEffect((function() {
                    ee(0)
                }), []), I.useEffect((function() {
                    var e = (0, q.Z)(O);
                    if (U) {
                        var t;
                        if (U.page <= 0 && !v) e[0] = [null != o && o.myMember ? Oe(Oe({}, T), {}, {
                            userId: S.id,
                            user: Oe(Oe({}, S), {}, {
                                thumbnailUrl: null !== (t = S.profilePicOverride) && void 0 !== t ? t : S.currentAvatarImageUrl
                            })
                        }) : null].concat((0, q.Z)(U.members));
                        else e[U.page] = U.members;
                        C(e)
                    }
                }), [U]), (0, I.useEffect)((function() {
                    setTimeout((function() {
                        i && null != g && g.current && g.current.focus()
                    }), 300)
                }), [i, g]), (0, I.useEffect)((function() {
                    y(1)
                }), [v]), (0, I.useEffect)((function() {
                    b("")
                }), [i]);
                var F = (0, pe.Pi)({
                        groupId: j,
                        pageValue: x,
                        searchTerm: Z,
                        n: 25
                    }, {
                        skip: "" === Z || !i || Z.length < 3 || !u
                    }),
                    X = F.data,
                    _ = F.error,
                    J = F.isError,
                    B = F.isFetching,
                    $ = F.isSuccess,
                    V = (0, re.hi)({
                        pageValue: x,
                        searchTerm: Z,
                        n: 25
                    }, {
                        skip: "" === Z || !i || Z.length < 3 || u
                    }),
                    W = V.data,
                    H = V.error,
                    Y = V.isError,
                    Q = V.isFetching,
                    K = V.isSuccess,
                    ee = function(e) {
                        R({
                            groupId: j,
                            perPage: 25,
                            page: e
                        }), y(e + 1)
                    },
                    te = null == O ? void 0 : O.map((function(e, t) {
                        var n;
                        return null === (n = (0, q.Z)(e)) || void 0 === n || null === (n = n.sort((function(e) {
                            return e.userId === A ? -1 : 0
                        }))) || void 0 === n || null === (n = n.filter((function(e, t, n) {
                            return n.findIndex((function(t) {
                                return t.userId === e.userId
                            })) === t
                        }))) || void 0 === n ? void 0 : n.map((function(e) {
                            return e.userId === A ? null : I.createElement(Ze, {
                                key: e.id,
                                member: e,
                                onSelectCallback: function(e) {
                                    return m(e)
                                }
                            })
                        }))
                    }));
                return I.createElement(me.oA, {
                    role: "dialog",
                    isOpen: i,
                    toggle: c,
                    keyboard: !0,
                    autoFocus: !1,
                    size: "lg"
                }, I.createElement(me.eb, {
                    tag: "h4",
                    close: I.createElement(oe.Z, {
                        onClick: c
                    }),
                    toggle: c
                }, u ? "Group Members Search" : "Users Search"), I.createElement(me.vc, null, I.createElement(me.T_, null, I.createElement(le.II, {
                    id: "search-product-list",
                    onChange: function(e) {
                        return b(e.target.value)
                    },
                    placeholder: u ? "Search Group Members..." : "Search for users...",
                    ref: g,
                    type: "text",
                    value: v
                }), (J || Y) && I.createElement("p", {
                    className: "text-center m-5 text-warning h-25"
                }, "Something went wrong with the search, please try again later!", I.createElement("br", null), J && I.createElement("code", null, null == _ || null === (n = _.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), Y && I.createElement("code", null, null == H || null === (r = H.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message)), B || p && I.createElement(me.Um, null, I.createElement("div", {
                    className: "text-center m-5 text-secondary h-25"
                }, I.createElement(ie.Z, null))), !$ && !B && !J && u && I.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "Search for members in your group."), $ && !B && u && I.createElement(me.Um, null, X.results.map((function(e) {
                    return I.createElement(Ze, {
                        key: e.id,
                        member: e,
                        onSelectCallback: function(e) {
                            return m(e)
                        }
                    })
                })), 0 === X.results.length && I.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "We couldn't find anything with that search.")), !K && !Q && !Y && !u && I.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "Search for users on VRChat."), K && I.createElement(me.Um, null, 0 === W.results.length && I.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "We couldn't find anything with that search.")), G ? I.createElement(le.UU, {
                    height: "200px"
                }) : I.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, te), I.createElement("div", {
                    className: "p-2",
                    style: {
                        margin: "2px auto 0",
                        textAlign: "center"
                    }
                }, I.createElement(le.zx, {
                    onClick: function() {
                        return ee(page)
                    },
                    disabled: G || z || D,
                    loading: G
                }, z || D ? "No more members..." : "List More Members")), ($ || K) && I.createElement(me.Gz, null, I.createElement(me.IT, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return y(x - 1)
                    },
                    disabled: 1 === x || B || Q
                }, I.createElement(le.$1, {
                    icon: ue.A3
                })), I.createElement("span", null, x), I.createElement(me.UV, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return y(x + 1)
                    },
                    disabled: (null == X ? void 0 : X.isLastPage) || (null == W ? void 0 : W.isLastPage) || B || Q
                }, I.createElement(le.$1, {
                    icon: se._t
                }))))))
            };
            Ie.propTypes = {
                group: fe().object,
                isOpen: fe().bool.isRequired,
                cancelCallback: fe().func.isRequired,
                memberEditCallback: fe().func,
                memberSelectCallback: fe().func
            };
            const Ce = Ie;
            var Se = n(46027);
            const je = function(e) {
                var t, n, r = e.group,
                    l = e.onClickCallback,
                    a = e.isDeleting,
                    o = (0, re.GR)(null == r ? void 0 : r.ownerId, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    i = o.data,
                    c = o.isFetching,
                    s = o.isError,
                    u = o.error,
                    m = (0, re.GR)(null == r ? void 0 : r.transferTargetId, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    d = m.data,
                    p = m.isFetching,
                    g = m.isError,
                    f = m.error;
                return I.createElement(I.Fragment, null, I.createElement(le.oI, {
                    className: "mt-2"
                }, I.createElement("h4", {
                    className: "text-center"
                }, "Group Ownership Transfer")), I.createElement(le.Ao, null, c || p || !d || !i ? I.createElement("div", {
                    className: "full-width text-center"
                }, I.createElement(ie.Z, null)) : I.createElement(I.Fragment, null, s && I.createElement(le.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == u || null === (t = u.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), g && I.createElement(le.qX, {
                    type: "error",
                    title: "Error Fetching New Group Owner Data"
                }, (null == f || null === (n = f.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unkown error fetching New Group Owner Data"), I.createElement(le.X2, null, I.createElement("span", {
                    className: "full-width text-center"
                }, "You can choose to cancel the transfer")), I.createElement(le.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, I.createElement(le.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "Current Owner"), I.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, I.createElement(le.$1, {
                    className: "tw-mr-2",
                    icon: Se.nm
                }), null == i ? void 0 : i.displayName)), I.createElement(le.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "New Owner"), d && I.createElement(le.X2, {
                    className: "tw-flex tw-m-1 tw-font-bold gx-0 gap-1"
                }, I.createElement(le.pw, {
                    width: 24,
                    style: {
                        maxWidth: "24px",
                        objectFit: "cover"
                    },
                    imageId: (d.thumbnailUrl || d.currentAvatarThumbnailImageUrl).match("(?!/)file_[^/]+")[0],
                    alt: null == d ? void 0 : d.displayName
                }), null == d ? void 0 : d.displayName))), a ? I.createElement("div", {
                    className: "full-width text-center"
                }, I.createElement(ie.Z, null)) : I.createElement("div", {
                    className: (0, O.iv)({
                        name: "pc0kie",
                        styles: ">*{margin-top:15px;}"
                    })
                }, I.createElement(le.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, I.createElement(le.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement(le.zx, {
                    onClick: function() {
                        return l()
                    },
                    danger: !0,
                    className: "tw-max-w-[100%]"
                }, "Cancel Transfer")))))))
            };
            var Ae = n(57982);
            const Te = function(e) {
                var t = e.isOpen,
                    n = e.cancelCallback;
                return I.createElement(me.oA, {
                    role: "dialog",
                    isOpen: t,
                    toggle: n,
                    keyboard: !0,
                    autoFocus: !1,
                    size: "lg"
                }, I.createElement(me.eb, {
                    tag: "h4",
                    close: I.createElement(oe.Z, {
                        onClick: n
                    }),
                    toggle: n
                }, "About Group Ownership Transfer"), I.createElement(me.vc, null, I.createElement("h4", null, "You can transfer your group ownership to another member of the group. the target member and the group must meet the requirements below."), I.createElement(me.T_, null, I.createElement("ul", null, I.createElement("li", null, "The target member has verified their email address ", "(", "check the Email section via", " ", I.createElement(j.rU, {
                    className: "tw-text-link-highlight",
                    to: "/home/profile",
                    target: "_blank"
                }, "account settings"), ")"), I.createElement("li", null, "The target member has an active VRC Plus subscription"), I.createElement("li", null, "The target member can still own more groups ", "(", "each user can own up to 5 groups", ")"), I.createElement("li", null, "The group is not monetized")))))
            };
            var Me = function(e) {
                var t, n, r = e.group,
                    a = e.onButtonClick,
                    o = e.isLoading,
                    i = I.useState(!1),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, re.GR)(null == r ? void 0 : r.ownerId, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    d = m.data,
                    p = m.isFetching,
                    g = m.isError,
                    f = m.error,
                    E = (0, pe.ek)({
                        groupId: r.id
                    }, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    v = E.data,
                    b = E.isFetching,
                    h = E.isError,
                    w = E.error,
                    x = I.useMemo((function() {
                        return null == v || !v.requirements || !v.requirements.groupNotMonetized
                    }), [v, h]);
                return I.createElement(I.Fragment, null, s && I.createElement(Te, {
                    isOpen: s,
                    cancelCallback: function() {
                        return u(!1)
                    }
                }), I.createElement(le.oI, {
                    className: "mt-2"
                }, I.createElement("h4", {
                    className: "text-center"
                }, "Group Ownership Transfer")), I.createElement(le.Ao, null, p || b ? I.createElement("div", {
                    className: "full-width text-center"
                }, I.createElement(ie.Z, null)) : I.createElement(I.Fragment, null, g && I.createElement(le.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == f || null === (t = f.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), h && I.createElement(le.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == w || null === (n = w.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unkown error fetching Group Owner Requirements Data"), x && !h ? I.createElement("span", {
                    className: "tw-mb-2"
                }, I.createElement(le.qX, {
                    type: "error"
                }, "Your group is not qualified for ownership transfer because it is currently being monetized.", " ", I.createElement("button", {
                    type: "button",
                    className: "tw-text-[#1FD1ED] tw-cursor-pointer tw-border-none tw-bg-transparent tw-p-0 tw-m-0",
                    onClick: function() {
                        return u(!0)
                    }
                }, "Learn more about Group Ownership Transfer"), ".")) : I.createElement("span", {
                    className: "tw-mb-2"
                }, "You can transfer your group ownership to another member of the group, this cannot be undone once the transfer is complete. The target member and the group must meet", " ", I.createElement("button", {
                    type: "button",
                    className: "tw-text-[#1FD1ED] tw-cursor-pointer tw-border-none tw-bg-transparent tw-p-0 tw-m-0",
                    onClick: function() {
                        return u(!0)
                    }
                }, "these requirements"), " ", "to qualify for the transfer."), I.createElement(le.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, I.createElement(le.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement("p", null, "Current Owner"), I.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, I.createElement(le.$1, {
                    className: "tw-mr-2",
                    icon: Se.nm
                }), null == d ? void 0 : d.displayName)), I.createElement(le.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement("p", null, "New Owner"), I.createElement(le.zx, {
                    className: "tw-max-w-[250px]",
                    onClick: function() {
                        return a()
                    },
                    disabled: o || h || x,
                    loading: o
                }, I.createElement(le.$1, {
                    className: "tw-mr-2",
                    icon: Ae.faMagnifyingGlass
                }), "Search Group Members"))))))
            };
            Me.propTypes = {
                group: fe().object.isRequired,
                onButtonClick: fe().func.isRequired,
                isLoading: fe().bool.isRequired
            };
            const Pe = Me;
            var Re, Le = "hasVerifiedEmail",
                Ue = "targetCanOwnMoreGroups",
                qe = "targetIsGroupMember",
                ze = "hasVRCPlus",
                Ge = "groupNotMonetized",
                De = (Re = {}, (0, U.Z)(Re, Le, "Email address has not been verified"), (0, U.Z)(Re, Ue, "Already owns maximum nubmer of groups per user"), (0, U.Z)(Re, qe, "Is not a valid member of the group"), (0, U.Z)(Re, ze, "Does not have an active VRChat Plus subscription"), (0, U.Z)(Re, Ge, "Group is not valid because it is monetized"), Re);
            const Fe = function(e) {
                var t, n = e.group,
                    r = e.validity,
                    l = e.prospectiveNewOwner,
                    a = e.onTransfer,
                    o = e.onCancel,
                    i = e.isOpen,
                    c = e.isTransferring,
                    s = (0, re.GR)(null == n ? void 0 : n.ownerId, {
                        skip: !n,
                        refetchOnMountOrArgChange: !0
                    }),
                    u = s.data,
                    m = s.isFetching,
                    d = s.isError,
                    p = s.error;
                return I.createElement(I.Fragment, null, I.createElement(le.sm, {
                    className: "tw-max-width-[600px]",
                    isOpen: i,
                    confirmDisabled: !r.valid,
                    confirmCallback: function() {
                        return a()
                    },
                    cancelCallback: function() {
                        return o()
                    },
                    headerText: "Group Ownership Transfer",
                    confirmText: "Transfer",
                    cancelText: "Cancel"
                }, c || m ? I.createElement("div", {
                    className: "tw-full-width tw-text-center"
                }, I.createElement(ie.Z, null)) : I.createElement("div", null, d && I.createElement(le.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == p || null === (t = p.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), !(null != r && r.valid) && (null == r ? void 0 : r.reasons) && I.createElement(le.qX, {
                    type: "error",
                    title: "Oops, it seems the selected member does not meet the following requirement(s)"
                }, r.reasons.map((function(e) {
                    var t;
                    return I.createElement("p", null, "• ".concat(null !== (t = De[e]) && void 0 !== t ? t : "Unknown Validity Reason"))
                }))), I.createElement(le.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-mt-2"
                }, I.createElement("span", {
                    className: "tw-full-width tw-text-center"
                }, "Are you sure you want to transfer your group ownership?")), I.createElement(le.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-bg-[#252a30] tw-px-8 tw-text-[16px] tw-rounded-lg tw-border-current tw-transition tw-ease-in-out tw-delay-150 tw-bg-[#252a30] tw-mt-2"
                }, I.createElement(le.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "Current Owner"), I.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, I.createElement(le.$1, {
                    className: "tw-mr-2",
                    icon: Se.nm
                }), null == u ? void 0 : u.displayName)), I.createElement(le.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "New Owner"), (null == l ? void 0 : l.user) && I.createElement(le.X2, {
                    className: "tw-flex tw-m-1 tw-font-bold gx-0 gap-1"
                }, I.createElement(le.pw, {
                    width: 24,
                    style: {
                        maxWidth: "24px",
                        objectFit: "cover"
                    },
                    imageId: (0, ye.oQ)(l.user.thumbnailUrl || l.user.currentAvatarThumbnailImageUrl),
                    alt: l.user.displayName
                }), l.user.displayName))), I.createElement(le.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-mt-2"
                }, I.createElement("span", {
                    className: "tw-full-width tw-text-center"
                }, "This cannot be undone once the transfer is complete.")))))
            };
            var Xe = n(34698),
                _e = n(58877),
                Je = n(25402);
            const Be = function(e) {
                var t, n = e.groupBioLinks,
                    a = e.callback,
                    o = e.index,
                    i = I.useState(null !== (t = null == n ? void 0 : n[o]) && void 0 !== t ? t : ""),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = I.useState(!1),
                    d = (0, l.Z)(m, 2),
                    p = d[0],
                    g = d[1],
                    f = I.useState(s),
                    E = (0, l.Z)(f, 2),
                    v = E[0],
                    b = E[1],
                    h = I.useState(!0),
                    w = (0, l.Z)(h, 2),
                    x = w[0],
                    y = w[1],
                    Z = null != n ? n : [],
                    k = function() {
                        g(!0), y(!1)
                    },
                    O = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var t;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        (t = [].concat(Z))[o] = s, a(t), g(!1), b(s);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    C = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var t;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        (t = [].concat(Z))[o] = "", a(t), g(!1), u(""), b("");
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return p ? I.createElement("div", {
                    className: "w-100 p-2 p-l-0"
                }, I.createElement("div", {
                    className: "input-group"
                }, I.createElement("input", {
                    placeholder: "https://",
                    onChange: function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        if ("" === n) return u(""), void y(!1);
                        try {
                            var r = new URL(n);
                            u(n), y("https:" !== r.protocol && "http:" !== r.protocol)
                        } catch (e) {
                            u(n), y(!0)
                        }
                    },
                    onKeyUp: function(e) {
                        13 === e.keyCode && !1 === x && O()
                    },
                    className: "form-control",
                    value: s,
                    maxLength: 1e3
                }), I.createElement("div", {
                    className: "input-group-append"
                }, I.createElement("span", {
                    className: "input-group-text",
                    id: "basic-addon1"
                }, I.createElement(Je.QZ, {
                    url: s,
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                })))), I.createElement(Xe.Z, {
                    onClick: function() {
                        g(!1), u(v)
                    }
                }, "Cancel"), I.createElement(Xe.Z, {
                    onClick: O,
                    disabled: x,
                    color: "primary"
                }, "Ok")) : o > 0 && null == s ? I.createElement("div", null) : !(o > 0) || "" !== s && null != s || "" !== Z[o - 1] && null != Z[o - 1] ? null == s || "" === s ? I.createElement("div", null, I.createElement("div", {
                    className: "btn-group w-100 p-2 p-l-0"
                }, I.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "btn btn-outline-light btn-block",
                    style: {
                        whiteSpace: "normal"
                    },
                    onClick: k
                }, "Link"))) : I.createElement("div", null, I.createElement(_e.Z, {
                    className: "p-2 w-100 p-l-0"
                }, I.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "btn btn-outline-light",
                    style: {
                        width: "255px",
                        overflow: "hidden"
                    },
                    onClick: k
                }, Z[o]), I.createElement($e, {
                    className: "btn btn-outline-danger h-100 ratio-1x1",
                    "aria-label": "Close",
                    onClick: C
                }, I.createElement("span", {
                    "aria-hidden": "true"
                }, "×")))) : I.createElement("div", null)
            };
            var $e = (0, a.Z)(Xe.Z, {
                    target: "e1a3rjxi0"
                })({
                    name: "1234s8l",
                    styles: "width:40px;max-width:40px"
                }),
                Ve = n(71421),
                We = n(18461);
            var He = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.labelProps,
                    n = void 0 === t ? {
                        ariaLabel: "Types",
                        labelValue: "Filter Types"
                    } : t,
                    r = e.disabled,
                    a = void 0 === r || r,
                    o = e.options,
                    i = void 0 === o ? [] : o,
                    c = e.onTriggerUpdate,
                    s = void 0 === c ? function() {} : c,
                    u = I.useState(!1),
                    m = (0, l.Z)(u, 2),
                    d = m[0],
                    p = m[1],
                    g = I.useState([]),
                    f = (0, l.Z)(g, 2),
                    E = f[0],
                    v = f[1],
                    b = function(e) {
                        return function(t) {
                            var n;
                            t.stopPropagation(), t.preventDefault(), null != E && null !== (n = E.filter((function(t) {
                                var n = t.key;
                                return (null == e ? void 0 : e.key) === n
                            }))) && void 0 !== n && n[0] ? v(null == E ? void 0 : E.filter((function(t) {
                                var n = t.key;
                                return (null == e ? void 0 : e.key) !== n
                            }))) : v([].concat((0, q.Z)(E), [e]))
                        }
                    };
                I.useEffect((function() {
                    var e = [];
                    null == E || E.forEach((function(t) {
                        return e.push(null == t ? void 0 : t.value)
                    })), s(e)
                }), [E]), I.useEffect((function() {
                    E.length !== i.length && v(i)
                }), [i]);
                var h = I.useMemo((function() {
                    return i.length === E.length ? "View All" : "".concat(E.length, " selected")
                }), [i, E]);
                return I.createElement(et, {
                    className: "mb-2",
                    role: "radiogroup",
                    "aria-label": n.ariaLabel,
                    onMouseLeave: function() {
                        d && p(!1)
                    }
                }, I.createElement(rt, {
                    disabled: a,
                    expanded: d
                }, I.createElement(lt, {
                    type: "button",
                    "aria-label": "Expand Options",
                    disabled: a,
                    onClick: function(e) {
                        e.stopPropagation(), e.preventDefault(), p(!d)
                    }
                }, !!n && I.createElement(Ke, null, n.labelValue), I.createElement(Qe, {
                    className: "tw-gap-2 tw-text-center tw-justify-center"
                }, h), I.createElement(M.Z, {
                    icon: Ve.eW,
                    color: "white",
                    className: "ms-3"
                })), d && i.length > 0 && I.createElement(at, {
                    className: "tw-px-[10px] tw-gap-1 tw-py-1"
                }, i.map((function(e, t) {
                    var n, r;
                    return I.createElement(We.Z, {
                        checked: E.some((function(e) {
                            var n = e.key;
                            return t === n
                        })),
                        id: null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : "option-".concat(t),
                        "aria-checked": E.some((function(e) {
                            var n = e.key;
                            return t === n
                        })),
                        key: null !== (r = null == e ? void 0 : e.value) && void 0 !== r ? r : "option-key-".concat(t),
                        className: "tw-w-4 tw-h-4 tw-mr-2",
                        onClick: b(e),
                        tabIndex: t,
                        label: null == e ? void 0 : e.label
                    })
                })))))
            };
            He.propTypes = {
                labelProps: fe().shape({
                    ariaLabel: fe().string.isRequired,
                    labelValue: fe().string.isRequired
                }).isRequired,
                disabled: fe().bool.isRequired,
                options: fe().array.isRequired,
                onTriggerUpdate: fe().func
            };
            const Ye = He;
            var Qe = (0, a.Z)("div", {
                    target: "e1476vl15"
                })({
                    name: "jyvlna",
                    styles: "display:flex;align-items:center;max-width:75%"
                }),
                Ke = (0, a.Z)("div", {
                    target: "e1476vl14"
                })({
                    name: "qcoia9",
                    styles: "font-size:0.8em;margin-right:10px;color:hsla(0, 0%, 100%, 0.6);white-space:nowrap;max-width:100%"
                }),
                et = (0, a.Z)("div", {
                    target: "e1476vl13"
                })({
                    name: "sss5sy",
                    styles: "display:flex;z-index:4;max-width:400px;min-width:200px"
                }),
                tt = {
                    name: "4u0b5g",
                    styles: "border:hsl(0, 0%, 20%) solid 2px;background:hsl(0, 0%, 20%);color:hsl(0, 0%, 60%);&:hover{border:hsl(0, 0%, 20%) solid 2px;background:hsl(0, 0%, 20%);color:hsl(0, 0%, 60%);}"
                },
                nt = {
                    name: "1ll5w29",
                    styles: "border-bottom-color:'#07343f'"
                },
                rt = (0, a.Z)("div", {
                    target: "e1476vl12"
                })("text-align:center;background-color:#064b5c;padding:5px 11px 5px 11px;border:#064b5c solid 2px;color:#ffffff;border-radius:3px;transition:background-color 0.2s ease-in-out;position:relative;display:flex;flex:1;border-radius:", (function(e) {
                    return e.expanded ? "3px 3px 0 0" : 3
                }), "px;max-width:100%;&:hover{background-color:#064b5c;border-color:#086c84;}", (function(e) {
                    return e.expanded ? nt : ""
                }), " ", (function(e) {
                    return e.disabled ? tt : ""
                }), ";"),
                lt = (0, a.Z)("button", {
                    target: "e1476vl11"
                })({
                    name: "118t6pa",
                    styles: "border:none;background:transparent;outline:none!important;display:flex;flex:1;flex-direction:row;align-items:center;justify-content:space-between;position:relative;max-width:100%"
                }),
                at = (0, a.Z)("div", {
                    target: "e1476vl10"
                })({
                    name: "1lt6ba7",
                    styles: "position:absolute;z-index:4;top:100%;left:-2px;width:calc(100% + 4px);background-color:#07343f;display:flex;flex-direction:column;border-radius:0 0 3px 3px;border:#086c84 solid 2px;border-top-width:0;text-align:left;max-width:calc(100% + 4px)"
                });
            const ot = function(e) {
                var t = e.log;
                return e.isLoading ? I.createElement(it, {
                    className: "justify-content-center"
                }, I.createElement("div", {
                    className: "spinner-border"
                })) : I.createElement(it, null, I.createElement(ct, null, ve()(t.created_at).format("MM/DD/YYYY hh:mm A")), t.description)
            };
            var it = (0, a.Z)("div", {
                    target: "evg8j501"
                })({
                    name: "kv8vyc",
                    styles: "background-color:#252a30;border-radius:12px;padding:8px;margin-bottom:8px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;transition:background-color 0.2s ease-in-out;:hover{background-color:#353c45;}"
                }),
                ct = (0, a.Z)("div", {
                    target: "evg8j500"
                })({
                    name: "hbayc1",
                    styles: "font-size:14px;font-weight:lighter;font-style:italic;margin-bottom:8px"
                });
            var st = [{
                label: "10",
                value: 10
            }, {
                label: "25",
                value: 25
            }, {
                label: "50",
                value: 50
            }, {
                label: "100",
                value: 100
            }];
            const ut = function(e) {
                var t, n = e.group,
                    r = I.useState(25),
                    a = (0, l.Z)(r, 2),
                    o = a[0],
                    i = a[1],
                    c = I.useState(0),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = I.useState(0),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = I.useState([]),
                    v = (0, l.Z)(E, 2),
                    b = v[0],
                    h = v[1],
                    w = I.useState([]),
                    x = (0, l.Z)(w, 2),
                    y = x[0],
                    Z = x[1],
                    k = I.useState([]),
                    N = (0, l.Z)(k, 2),
                    O = N[0],
                    C = N[1],
                    S = (0, pe.hg)(),
                    j = (0, l.Z)(S, 2),
                    A = j[0],
                    T = j[1],
                    M = T.data,
                    P = T.isFetching,
                    R = T.isError,
                    L = (0, pe.rw)({
                        groupId: n.id
                    }, {
                        skip: !n
                    }),
                    U = L.data,
                    z = L.isFetching,
                    G = L.isError;
                I.useEffect((function() {
                    C(y.map((function(e) {
                        return e.value
                    })))
                }), [y]), I.useEffect((function() {
                    if (U && 0 === b.length) {
                        var e = U.map((function(e, t) {
                            var n = e.split(".").map((function(e) {
                                return e.charAt(0).toUpperCase() + e.slice(1)
                            })).join(" ");
                            return console.log(n), {
                                key: t,
                                label: n,
                                value: e
                            }
                        }));
                        h(e), 0 === y.length && Z(e.map((function(e) {
                            return e.value
                        })))
                    }
                    u < 0 ? m(0) : A({
                        groupId: n.id,
                        perPage: o,
                        offset: u,
                        eventTypes: O ? (0, q.Z)(O) : []
                    })
                }), [o, u, U, O, y]), I.useEffect((function() {
                    null != M && M.totalCount && f(M.totalCount)
                }), [M]);
                var D = I.createElement(dt, null, I.createElement(pt, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u - o)
                    },
                    disabled: 0 === u
                }, I.createElement(le.$1, {
                    icon: ue.A3
                })), I.createElement("span", null, "(", u, " - ", g < o + u ? g : o + u, ") / ", g), I.createElement(gt, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u + o)
                    },
                    disabled: g < o + u
                }, I.createElement(le.$1, {
                    icon: se._t
                })));
                return I.createElement("div", null, R && I.createElement(le.qX, {
                    title: "Error",
                    type: "error",
                    className: "mb-2"
                }, "There was an error loading the audit log."), G && !z && I.createElement(le.qX, {
                    title: "Error",
                    type: "error",
                    className: "mb-2"
                }, "There was an error loading the filterable audit log types."), I.createElement(le.oI, null, I.createElement("h4", {
                    className: "text-center"
                }, "Audit Log")), I.createElement(le.Ao, null, I.createElement(le.X2, {
                    className: "tw-flex-row tw-justify-evenly"
                }, !!b.length && I.createElement(Ye, {
                    labelProps: {
                        ariaLabel: "LogTypes",
                        labelValue: "Filter Log Types: "
                    },
                    disabled: !n,
                    options: b,
                    onTriggerUpdate: function(e) {
                        return C(e)
                    }
                }), I.createElement(mt, {
                    label: "Items per-page",
                    onChange: i,
                    options: st,
                    value: o,
                    className: "mb-2"
                })), D, I.createElement("div", {
                    className: "audit-log"
                }, (null !== (t = null == M ? void 0 : M.results) && void 0 !== t ? t : Array(o).fill({})).map((function(e, t) {
                    var n;
                    return I.createElement(ot, {
                        key: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "log-".concat(t),
                        log: e,
                        n: o,
                        offset: u,
                        isLoading: P
                    })
                }))), D))
            };
            var mt = (0, a.Z)(le.Lt, {
                    target: "e88tm0e3"
                })({
                    name: "1lsto0t",
                    styles: "max-width:250px"
                }),
                dt = (0, a.Z)("div", {
                    target: "e88tm0e2"
                })({
                    name: "1vtota4",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-bottom:8px"
                }),
                pt = (0, a.Z)(le.zx, {
                    target: "e88tm0e1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                gt = (0, a.Z)(le.zx, {
                    target: "e88tm0e0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                ft = n(91054),
                Et = n(27149),
                vt = n(59895),
                bt = n(81362),
                ht = n(63221),
                wt = [{
                    label: "Visible",
                    value: ht.iI.VISIBLE
                }, {
                    label: "Friends Only",
                    value: ht.iI.FRIENDS
                }, {
                    label: "Hidden",
                    value: ht.iI.HIDDEN
                }];
            const xt = function(e) {
                var t, n, a, o, i = e.groupId,
                    c = (0, C.I0)(),
                    s = (0, S.s0)(),
                    u = (0, ne.XC)(),
                    m = u.data,
                    d = u.isLoading,
                    p = u.error,
                    g = u.isError,
                    f = I.useState(),
                    E = (0, l.Z)(f, 2),
                    v = E[0],
                    b = E[1],
                    h = I.useState(!0),
                    w = (0, l.Z)(h, 2),
                    x = w[0],
                    y = w[1],
                    Z = I.useState(!0),
                    k = (0, l.Z)(Z, 2),
                    O = k[0],
                    j = k[1],
                    A = I.useState(!1),
                    T = (0, l.Z)(A, 2),
                    M = T[0],
                    P = T[1],
                    R = (0, pe.r5)({
                        groupId: i
                    }, {
                        skip: !m.id
                    }),
                    L = R.data,
                    U = R.isLoading,
                    q = R.error,
                    z = R.isError,
                    G = (0, pe.xm)({
                        groupId: i,
                        userId: m.id
                    }, {
                        skip: !m.id
                    }),
                    D = G.data,
                    F = G.isLoading,
                    X = G.error,
                    _ = G.isError;
                (0, I.useEffect)((function() {
                    var e;
                    if (D && L) {
                        L.privacy === ht.TW.DEFAULT && D.visibility !== v && b(D.visibility);
                        var t = (null == D ? void 0 : D.isSubscribedToAnnouncements) || (null == D ? void 0 : D.isSubscribedToPosts);
                        y(t);
                        var n = null === (e = null == D ? void 0 : D.isSubscribedToEventAnnouncements) || void 0 === e || e;
                        j(n)
                    }
                }), [L, D]);
                var J = d || U || F,
                    B = (null == L ? void 0 : L.ownerId) === (null == D ? void 0 : D.userId),
                    $ = (0, pe.uX)(),
                    V = (0, l.Z)($, 2),
                    Y = V[0],
                    Q = V[1],
                    K = Q.isLoading,
                    ee = Q.error,
                    re = Q.isError,
                    oe = Q.isSuccess,
                    ie = (0, pe.nm)(),
                    ce = (0, l.Z)(ie, 2),
                    se = ce[0],
                    ue = ce[1],
                    me = ue.isLoading,
                    de = ue.error,
                    ge = ue.isError,
                    fe = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return P(!1), e.next = 3, se({
                                            groupId: i,
                                            userId: m.id
                                        });
                                    case 3:
                                        e.sent.error || (c((0, te.d)({
                                            title: "You left the group",
                                            icon: vt.u8,
                                            message: "You are no longer a member",
                                            color: "success",
                                            timeout: 8e3
                                        })), s("/home/groups"));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return g ? I.createElement(bt.Z, {
                    error: p,
                    statusCode: p.status
                }) : z ? I.createElement(bt.Z, {
                    error: q,
                    statusCode: q.status
                }) : _ ? I.createElement(bt.Z, {
                    error: X,
                    statusCode: X.status
                }) : I.createElement(I.Fragment, null, I.createElement(le.oI, null, I.createElement("h4", {
                    className: "text-center"
                }, "Membership Preferences")), I.createElement(le.Ao, null, J ? I.createElement(le.UU, {
                    height: "250px"
                }) : I.createElement(I.Fragment, null, oe && I.createElement(le.qX, {
                    type: "success",
                    title: "Updated preferences",
                    slim: !0
                }, "Your preferences were saved successfully"), re && I.createElement(le.qX, {
                    type: "error",
                    title: "Error updating preferences"
                }, ee.status, " : ", null !== (t = null === (n = ee.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : ""), L.privacy === ht.TW.DEFAULT && I.createElement(W.Z, null, "Visibility ", I.createElement(le.Lt, {
                    onChange: b,
                    value: v,
                    options: wt
                }), I.createElement("small", null, "Do you want everyone to see this group on your profile, just your friends to see it, or to keep it secret? This only affects your own profile.")), I.createElement("div", {
                    className: "my-2"
                }, I.createElement(ae.Z, {
                    label: "Subscribe to Posts",
                    value: "isSubscribedToPosts",
                    defaultChecked: x,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        y(t)
                    }
                }), I.createElement(H.Z, null, "Tick this to hear all the latest news and goss from this group")), I.createElement("div", {
                    className: "my-2"
                }, I.createElement(ae.Z, {
                    label: "Subscribe to Event Announcements",
                    value: "isSubscribedToEventAnnouncements",
                    defaultChecked: O,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        j(t)
                    }
                }), I.createElement(H.Z, null, "Tick this to receive notifications about events from this group")), I.createElement(le.zx, {
                    onClick: function() {
                        Y({
                            groupId: i,
                            userId: m.id,
                            visibility: v,
                            isSubscribedToPosts: x,
                            isSubscribedToEventAnnouncements: O
                        })
                    },
                    loading: K,
                    disabled: K
                }, I.createElement(le.$1, {
                    icon: Et.r6
                }), " Save Preferences"))), I.createElement(le.oI, {
                    className: "mt-2"
                }, I.createElement("h4", {
                    className: "text-center"
                }, "Leave Group")), I.createElement(le.Ao, null, J ? I.createElement(le.UU, {
                    height: "100px",
                    delay: 50
                }) : I.createElement(I.Fragment, null, ge && I.createElement(le.qX, {
                    type: "error",
                    title: "Error leaving group"
                }, de.status, " : ", null !== (a = null === (o = de.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : ""), I.createElement(le.sm, {
                    headerText: "Leave Group",
                    bodyText: "Are you sure you want to leave this group?",
                    confirmText: "Yes, Leave Group",
                    confirmCallback: fe,
                    cancelText: "Never Mind!",
                    cancelCallback: function() {
                        P(!1)
                    },
                    isOpen: M
                }), B ? I.createElement(le.qX, {
                    type: "warning",
                    title: "You own this group!"
                }, "You can't leave your own group, but you can delete the group over in General settings.") : I.createElement("p", null, "This group not your thing anymore? No problem."), I.createElement(le.zx, {
                    warning: !0,
                    onClick: function() {
                        P(!0)
                    },
                    loading: me,
                    disabled: B || me
                }, I.createElement(le.$1, {
                    icon: ft.HE
                }), " Leave Group"))))
            };
            var yt = n(41145),
                Zt = n(62228),
                kt = n(609),
                Nt = n(16869),
                Ot = n(67978),
                It = n(81780),
                Ct = n(33073),
                St = n(95896);

            function jt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function At(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? jt(Object(n), !0).forEach((function(t) {
                        (0, U.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Tt = {
                id: "new",
                name: "",
                description: "",
                isSelfAssignable: !1,
                permissions: []
            };
            const Mt = function(e) {
                var t, n, a, o, i, s, u = e.group,
                    m = e.changeRoleLocalOrder,
                    d = e.changeRoleOffset,
                    p = e.roleOffset,
                    g = e.isGroupOwner,
                    f = (0, C.I0)(),
                    E = (0, S.s0)(),
                    v = (0, S.UO)(),
                    b = (0, I.useRef)(!0),
                    h = (0, de.pc)(),
                    x = I.useMemo((function() {
                        var e;
                        return "new" === v.roleId ? At(At({}, Tt), {}, {
                            requiresPurchase: "paid" === v.newRoleType
                        }, "paid" === v.newRoleType && {
                            productPriceTokens: St.nk,
                            productDuration: 1,
                            productDurationType: "months"
                        }) : null == u || null === (e = u.roles) || void 0 === e ? void 0 : e.find((function(e) {
                            return e.id === v.roleId
                        }))
                    }), [u, v]),
                    Z = I.useState({}),
                    k = (0, l.Z)(Z, 2),
                    O = k[0],
                    T = k[1],
                    P = I.useState(null),
                    L = (0, l.Z)(P, 2),
                    G = L[0],
                    D = L[1],
                    F = I.useState({}),
                    X = (0, l.Z)(F, 2),
                    _ = X[0],
                    V = X[1],
                    Y = I.useState(null != x && x.defaultRole ? "permissions" : "general"),
                    Q = (0, l.Z)(Y, 2),
                    K = Q[0],
                    ee = Q[1],
                    ne = I.useState(null == x ? void 0 : x.requiresTwoFactor),
                    re = (0, l.Z)(ne, 2),
                    oe = re[0],
                    ie = re[1],
                    se = I.useState(null == x ? void 0 : x.isAddedOnJoin),
                    ue = (0, l.Z)(se, 2),
                    me = ue[0],
                    ge = ue[1],
                    fe = I.useState(null == x ? void 0 : x.isSelfAssignable),
                    Ee = (0, l.Z)(fe, 2),
                    ve = Ee[0],
                    be = Ee[1],
                    he = I.useState((null == u ? void 0 : u.joinState) === ht.wN.OPEN),
                    we = (0, l.Z)(he, 2),
                    xe = we[0],
                    Ze = we[1],
                    ke = I.useState(!1),
                    Ne = (0, l.Z)(ke, 2),
                    Oe = Ne[0],
                    Ie = Ne[1],
                    Ce = I.useState((null == x ? void 0 : x.permissions) || []),
                    Se = (0, l.Z)(Ce, 2),
                    je = Se[0],
                    Ae = Se[1],
                    Te = I.useState(!1),
                    Me = (0, l.Z)(Te, 2),
                    Pe = Me[0],
                    Re = Me[1],
                    Le = I.useState(null),
                    Ue = (0, l.Z)(Le, 2),
                    qe = Ue[0],
                    ze = Ue[1],
                    Ge = I.useState(null),
                    De = (0, l.Z)(Ge, 2),
                    Fe = De[0],
                    Xe = De[1],
                    _e = (0, pe.mt)({
                        groupId: u.id
                    }),
                    Je = _e.data,
                    Be = _e.isLoading,
                    $e = _e.isError,
                    Ve = (0, pe.Pt)(),
                    We = (0, l.Z)(Ve, 2),
                    He = We[0],
                    Ye = We[1],
                    Qe = Ye.isLoading,
                    Ke = Ye.isError,
                    et = Ye.error,
                    tt = (0, pe.hE)(),
                    nt = (0, l.Z)(tt, 2),
                    rt = (nt[0], nt[1]),
                    lt = rt.isLoading,
                    at = rt.isError,
                    ot = rt.error,
                    it = (0, pe.ci)(),
                    ct = (0, l.Z)(it, 2),
                    st = ct[0],
                    ut = ct[1],
                    mt = (ut.isLoading, ut.isError, ut.error, (0, pe.VF)()),
                    dt = (0, l.Z)(mt, 2),
                    pt = dt[0],
                    gt = dt[1],
                    ft = gt.isLoading,
                    vt = gt.isError,
                    bt = gt.error,
                    wt = (0, Ot.lZ)({
                        productId: null == x ? void 0 : x.productId
                    }, {
                        skip: !(null != x && x.productId),
                        refetchOnMountOrArgChange: !0
                    }),
                    xt = wt.data,
                    jt = wt.isFetching,
                    Mt = wt.isUninitialized,
                    Pt = (0, Nt.Ul)({
                        userId: null == u ? void 0 : u.ownerId,
                        groupId: null == u ? void 0 : u.id,
                        active: !0
                    }, {
                        skip: !u || !(null != x && x.productId),
                        refetchOnMountOrArgChange: !0
                    }),
                    Rt = Pt.data,
                    Lt = void 0 === Rt ? [] : Rt,
                    Ut = Pt.isFetching,
                    qt = Pt.isUninitialized,
                    zt = I.useMemo((function() {
                        var e;
                        return (null === (e = qt ? [] : Lt) || void 0 === e ? void 0 : e.filter((function(e) {
                            var t, n = e.id,
                                r = e.active,
                                l = e.archived;
                            return r && !l && !Mt && (null == xt || null === (t = xt.parentListings) || void 0 === t ? void 0 : t.includes(n))
                        }))) || []
                    }), [xt, Mt, Lt, qt]),
                    Gt = Qe || lt || ft || Be || jt || Ut,
                    Dt = (null == u ? void 0 : u.joinState) === ht.wN.OPEN ? "Your group is already set to Free Join, so enabling this option won’t have any effect. Subscribers will still join automatically." : "When enabled, anyone can purchase this role and join the group, regardless of the group’s join rules. This option overrides standard join settings.";
                (0, I.useEffect)((function() {
                    if (xt) {
                        if (Ie(xt.groupAccessRemove), (null == u ? void 0 : u.joinState) === ht.wN.OPEN) return Ze(!0), void D(At(At({}, G), {}, {
                            groupAccess: !0
                        }));
                        Ze(xt.groupAccess)
                    }
                }), [xt]);
                var Ft = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = {};
                    "new" === (null == x ? void 0 : x.id) && (t = At({}, x)), e || (ie(null == x ? void 0 : x.requiresTwoFactor), ge(null == x ? void 0 : x.isAddedOnJoin), be(null == x ? void 0 : x.isSelfAssignable), Ae((null == x ? void 0 : x.permissions) || [])), d(0), T(t), D(null)
                };
                (0, I.useEffect)((function() {
                    Ft(), ee(null != x && x.defaultRole ? "permissions" : "general")
                }), [u, v]), (0, I.useEffect)((function() {
                    b.current ? b.current = !1 : ((null == x ? void 0 : x.requiresTwoFactor) !== oe && T(At(At({}, O), {}, {
                        requiresTwoFactor: oe
                    })), (null == x ? void 0 : x.isAddedOnJoin) !== me && T(At(At({}, O), {}, {
                        isAddedOnJoin: me
                    })), (null == x ? void 0 : x.isSelfAssignable) !== ve && T(At(At({}, O), {}, {
                        isSelfAssignable: ve
                    })), (null == x ? void 0 : x.permissions) !== je && T(At(At({}, O), {}, {
                        permissions: je
                    })))
                }), [oe, me, ve, je]), (0, I.useEffect)((function() {
                    0 !== p && T(At(At({}, O), {}, {
                        order: p + x.order
                    }))
                }), [p]);
                var Xt = (0, de._b)(Je),
                    _t = I.useMemo((function() {
                        return (0, ye.Ps)({
                            permissionName: qe,
                            permissionsMap: Xt
                        })
                    }), [qe, Xt]);
                if ((0, I.useEffect)((function() {
                        if (je.length > 0 && Xt && Object.keys(Xt).length > 0) {
                            var e = je.filter((function(e) {
                                return !e.includes("*") && !Xt[e]
                            }));
                            e.length > 0 && Xe(e)
                        }
                    }), [je, Xt]), !x || Be || $e) return null;
                var Jt = function(e) {
                        var t, n = null !== (t = e.target.name) && void 0 !== t ? t : e.name,
                            r = function(e) {
                                var t;
                                switch (e.getAttribute("type")) {
                                    case "checkbox":
                                        return e.checked;
                                    case "number":
                                        return null !== (t = e.value) && void 0 !== t ? t : Number(e.value);
                                    default:
                                        return e.value
                                }
                            }(e.target);
                        T(At(At({}, O), {}, (0, U.Z)({}, n, r))), V(At(At({}, _), {}, (0, U.Z)({}, n, e.target.checkValidity())))
                    },
                    Bt = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var t, n, r, l, a;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("new" !== (t = At({}, O)).id) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 4, He({
                                            groupId: u.id,
                                            data: t
                                        }).unwrap();
                                    case 4:
                                        !(n = e.sent).error && null != n && n.id && E("../roles/".concat(null == n ? void 0 : n.id)), e.next = 13;
                                        break;
                                    case 8:
                                        if (!(Object.keys(O).length > 0)) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 11, st({
                                            groupId: u.id,
                                            roleId: x.id,
                                            productId: (null == xt ? void 0 : xt.id) || null,
                                            productData: G,
                                            roleData: t
                                        });
                                    case 11:
                                        (r = e.sent).error ? f((0, te.d)({
                                            title: "Failed to update role",
                                            icon: y.eH,
                                            message: null !== (l = null === (a = r.error.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== l ? l : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        })) : Ft(!0);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    $t = function() {
                        var e = (0, r.Z)(N().mark((function e(t) {
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t) {
                                            e.next = 14;
                                            break
                                        }
                                        if ("new" === x.id) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.prev = 2, e.next = 5, pt({
                                            groupId: u.id,
                                            roleId: x.id,
                                            ownerId: u.ownerId,
                                            confirm: t
                                        }).unwrap();
                                    case 5:
                                        e.next = 10;
                                        break;
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(2), e.abrupt("return");
                                    case 10:
                                        Re(!1), E("../roles"), e.next = 15;
                                        break;
                                    case 14:
                                        Re(!0);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 7]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Vt = 0 === x.order,
                    Wt = "new" === x.id,
                    Ht = x.requiresPurchase && !g,
                    Yt = R({
                        groupMember: null == u ? void 0 : u.myMember,
                        permission: "group-default-role-manage"
                    }),
                    Qt = R({
                        groupMember: null == u ? void 0 : u.myMember,
                        permission: "group-roles-assign"
                    }),
                    Kt = x.defaultRole && !Yt,
                    en = !x.requiresPurchase && !x.defaultRole && !Vt,
                    tn = !x.defaultRole && !Vt,
                    nn = tn && !Wt;
                return I.createElement("div", null, at && I.createElement(le.qX, {
                    title: "Error updating role",
                    type: "error"
                }, "Failed to update role: ", null == ot || null === (t = ot.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), Ke && I.createElement(le.qX, {
                    title: "Error creating role",
                    type: "error"
                }, "Failed to create role: ", null == et || null === (n = et.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), I.createElement(A.Z, {
                    isOpen: Pe
                }, I.createElement(le.oI, {
                    className: "text-center"
                }, I.createElement("h4", null, "Are you sure?")), I.createElement(le.Ao, null, I.createElement($.Z, null, vt && I.createElement(le.qX, {
                    title: "Error deleting role",
                    type: "error"
                }, "Failed to delete role: ", null !== (a = null == bt || null === (o = bt.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : "Unexpected error occurred"), I.createElement("p", null, "This will delete the role and all members with this role will be demoted to the lowest role. This action cannot be undone.")), I.createElement("div", {
                    className: "d-flex flex-row justify-content-md-center"
                }, I.createElement(le.zx, {
                    danger: !0,
                    onClick: function() {
                        $t(!0)
                    },
                    loading: ft,
                    expand: !0
                }, I.createElement(le.$1, {
                    icon: z.$
                }), " Yes, Delete"), " ", I.createElement(le.zx, {
                    onClick: function() {
                        Re(!1)
                    },
                    disabled: ft,
                    expand: !0
                }, "Cancel")))), null == x ? I.createElement("div", null, I.createElement("p", null, "Pick a role to edit.")) : I.createElement("div", null, Wt ? I.createElement("h6", {
                    className: "text-center"
                }, "New", x.requiresPurchase && " Paid", " Role") : I.createElement("h6", {
                    className: "text-center"
                }, Ht ? "Viewing" : "Editing", " - ", x.name), function() {
                    var e;
                    if (null == x || !x.createdAt || !x.requiresPurchase || zt.length) return null;
                    var t = "activate its associated subscription";
                    return I.createElement(le.qX, {
                        type: "info",
                        title: "No Active Subscriptions"
                    }, "Before people can buy this role, ", g ? "you'll" : "the group owner will", " need to", " ", g && !Mt && null != xt && null !== (e = xt.parentListings) && void 0 !== e && e.length ? I.createElement(j.rU, {
                        to: "/home/marketplace/storefront/subscriptions"
                    }, t) : t, " ", "in ", g ? "your" : "their", " Store. ", g ? "You" : "The Group Owner", " can also give the product and listing their own images, descriptions and other details from there.")
                }(), !x.defaultRole && I.createElement(B.Z, null, I.createElement(ce.Z, {
                    tabs: [{
                        name: "General",
                        id: "general",
                        icon: c.b7,
                        condition: !(null != x && x.defaultRole)
                    }, {
                        name: "Permissions",
                        id: "permissions",
                        icon: kt.by,
                        condition: !0
                    }],
                    selected: K,
                    onChange: function(e) {
                        ee(e)
                    }
                })), I.createElement(It.Z, {
                    activeTab: K
                }, I.createElement(Ct.Z, {
                    tabId: "general"
                }, nn && !Ht && I.createElement(I.Fragment, null, I.createElement(B.Z, null, I.createElement("h6", {
                    className: "text-center"
                }, "Change role order"), I.createElement("div", {
                    className: "d-flex flex-row justify-content-md-center"
                }, I.createElement(le.zx, {
                    onClick: function() {
                        m({
                            offset: -1,
                            roleId: x.id
                        })
                    },
                    expand: !0
                }, I.createElement(le.$1, {
                    icon: Zt.mT
                }), " Move Up"), " ", I.createElement(le.zx, {
                    onClick: function() {
                        m({
                            offset: 1,
                            roleId: x.id
                        })
                    },
                    expand: !0
                }, I.createElement(le.$1, {
                    icon: yt.pt
                }), " Move Down"))), " ", " "), I.createElement(B.Z, {
                    className: "mb-2"
                }, I.createElement(J.Z, null, I.createElement(le.II, {
                    type: "text",
                    name: "name",
                    value: null != O.name ? O.name : x.name,
                    onChange: Jt,
                    maxLength: 64,
                    required: !0,
                    disabled: Ht || x.defaultRole,
                    placeholder: "Enter Role's Name"
                }), !1 === _.name && I.createElement(W.Z, null, "Must be between 1 and 64 characters."))), I.createElement(B.Z, {
                    className: "mb-3"
                }, I.createElement(J.Z, null, I.createElement(le.gx, {
                    type: "textarea",
                    name: "description",
                    value: null != O.description ? O.description : x.description,
                    onChange: Jt,
                    maxLength: 256,
                    disabled: Ht || x.defaultRole,
                    placeholder: "Enter Role's Description",
                    inputStyle: {
                        height: "100px"
                    }
                }), !1 === _.description && I.createElement(W.Z, null, "Must be 256 characters or less."))), tn && !x.requiresPurchase && Qt && I.createElement(B.Z, {
                    className: "my-2"
                }, I.createElement(ae.Z, {
                    label: "Assign On Join",
                    value: "isAddedOnJoin",
                    defaultChecked: null != O.isAddedOnJoin ? O.isAddedOnJoin : x.isAddedOnJoin,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        ge(t)
                    }
                }), I.createElement(H.Z, null, "If enabled, new members will be assigned this role when they join the group. This will not affect existing members.")), en && I.createElement(B.Z, {
                    className: "my-2"
                }, I.createElement(ae.Z, {
                    label: "Self Assignable",
                    value: "isSelfAssignable",
                    defaultChecked: ve,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        be(t)
                    }
                }), I.createElement(H.Z, null, "Allows members of the group to assign this role to themselves.")), I.createElement(B.Z, {
                    className: "my-3"
                }, I.createElement(ae.Z, {
                    label: "Require Two-Factor Authentication",
                    value: "requiresTwoFactor",
                    defaultChecked: oe,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        return ie(t)
                    }
                }), I.createElement(H.Z, null, "Requires members to have 2FA before permissions apply.")), x.requiresPurchase && I.createElement(I.Fragment, null, I.createElement(B.Z, {
                    className: "my-2"
                }, I.createElement(ae.Z, {
                    label: "Enable Free Join for Subscribers",
                    value: "productGroupAccess",
                    defaultChecked: xe,
                    onChangeCallback: function(e) {
                        var t, n, r, l = e.checked;
                        t = l, n = At(At({}, O), {}, {
                            productGroupAccess: t
                        }), r = At(At({}, G), {}, {
                            groupAccess: t
                        }), t || (n.productGroupAccessRemove = void 0, r.groupAccessRemove = !1, Ie(!1)), Ze(t), T(n), D(r)
                    },
                    disabled: (null == u ? void 0 : u.joinState) === ht.wN.OPEN
                }), I.createElement(H.Z, null, Dt)), (null != O.productGroupAccess ? O.productGroupAccess : xe) && I.createElement(B.Z, {
                    className: "my-2"
                }, I.createElement(ae.Z, {
                    label: "Remove Members After Expiration",
                    value: "productGroupAccessRemove",
                    defaultChecked: null != O.productGroupAccessRemove ? O.productGroupAccessRemove : Oe,
                    onChangeCallback: function(e) {
                        var t, n = e.checked;
                        Ie(t = n), T(At(At({}, O), {}, {
                            productGroupAccessRemove: t
                        })), D(At(At({}, G), {}, {
                            groupAccessRemove: t
                        }))
                    }
                }), I.createElement(H.Z, null, "If enabled, group members with this role are removed from the group entirely when their subscription ends. Note that this will remove any member whose subscription ends, whether they bought their way in or not."))), x.requiresPurchase && Wt && I.createElement(B.Z, null, I.createElement(J.Z, null, I.createElement(W.Z, {
                    htmlFor: "productPriceTokens"
                }, "Credits", "forevers" === x.productDurationType ? "" : " per ".concat(1 === x.productDuration ? x.productDurationType.replace(/s$/, "") : "".concat(x.productDuration, " ").concat(x.productDurationType)))), I.createElement(J.Z, null, I.createElement(le.II, {
                    type: "number",
                    name: "productPriceTokens",
                    value: null != O.productPriceTokens ? O.productPriceTokens : x.productPriceTokens,
                    onChange: Jt,
                    required: !0,
                    step: "1",
                    min: St.nk,
                    max: St.A1
                }), !1 === _.productPriceTokens && I.createElement(W.Z, null, "Must be a whole number between ", I.createElement(le.b5, null), St.nk.toLocaleString(), " and ", I.createElement(le.b5, null), St.A1.toLocaleString(), "."))), x.productId && I.createElement("p", null, I.createElement("small", null, g ? "You" : "The Group Owner", " can manage details and subscription behaviour of this role's", " ", I.createElement(j.rU, {
                    to: "/home/marketplace/storefront/products#".concat(x.productId)
                }, "associated product"), !Mt && null != xt && null !== (i = xt.parentListings) && void 0 !== i && i.length ? I.createElement(I.Fragment, null, ", and the details, price and availability of the product's", " ", I.createElement(j.rU, {
                    to: "/home/marketplace/storefront/listings#".concat(xt.parentListings[0])
                }, "associated listing"), " ") : " ", g ? "in your Store" : "in their Store", "."))), I.createElement(Ct.Z, {
                    tabId: "permissions"
                }, $e && I.createElement(le.qX, {
                    title: "Error",
                    type: "error"
                }, "There was an error loading permissions."), (null == x ? void 0 : x.defaultRole) && I.createElement(I.Fragment, null, I.createElement("p", null, x.description), I.createElement("hr", null)), Vt || Kt ? I.createElement("p", null, "You can't edit the ", Vt ? "Group Owner" : "default", " role.", " ", Vt ? "It must always have all" : "You lack the required", " permissions.") : x.requiresPurchase && !g ? I.createElement("p", null, "You can't edit a paid role if you are not the group owner.") : I.createElement("div", null, Je.map((function(e) {
                    var t = e.name,
                        n = Xt[t],
                        r = function(e) {
                            var t = e.permission,
                                n = e.role;
                            return !h && (n.requiresPurchase && !t.isManagementPermission ? "You cannot add a management permission to a paid role." : !t.allowedToAdd && "You do not have this permission.")
                        }({
                            permission: n,
                            role: x
                        });
                    return I.createElement("div", {
                        key: n.name,
                        className: "mb-2"
                    }, I.createElement(ae.Z, {
                        label: n.displayName,
                        value: n.name,
                        defaultChecked: je.includes(n.name),
                        disabled: !!r,
                        onChangeCallback: function(e) {
                            var t = e.checked;
                            ! function(e, t) {
                                var n;
                                if (t) {
                                    var r = (0, ye.QZ)({
                                        permissionName: e,
                                        permissionsMap: Xt
                                    });
                                    return Ae([].concat((0, q.Z)(je), [e], (0, q.Z)(r)))
                                }
                                var l = Xt[e];
                                if (null !== (n = l.computedDependedOnBy) && void 0 !== n && n.size && je.some((function(e) {
                                        return l.computedDependedOnBy.has(e)
                                    }))) return ze(e);
                                Ae(je.filter((function(t) {
                                    return t !== e
                                })))
                            }(n.name, t)
                        }
                    }), (n.help || n.dependsOn) && I.createElement(H.Z, null, n.help, n.help && n.dependsOn && " ", n.dependsOn && I.createElement(I.Fragment, null, "Requires ", (0, q.Z)(n.dependsOn).map((function(e) {
                        return "“".concat(Xt[e].displayName || e, "”")
                    })).join(", "), "."), r && I.createElement("div", null, r)))
                }))))), !Kt && (Ht ? I.createElement("p", null, I.createElement("small", null, "Only the Group Owner can edit paid roles.")) : I.createElement("div", {
                    className: "d-flex flex-row align-content-center mt-1\n                  ".concat(Wt || Vt || x.defaultRole ? "justify-content-end" : "justify-content-between")
                }, !Wt && !Vt && !x.defaultRole && I.createElement(le.zx, {
                    danger: !0,
                    onClick: function() {
                        $t(!1)
                    },
                    disabled: Gt
                }, I.createElement(M.Z, {
                    icon: z.$
                }), " Delete"), I.createElement("div", {
                    className: "d-flex flex-row"
                }, I.createElement(le.zx, {
                    neutral: !0,
                    onClick: function() {
                        Ft()
                    },
                    disabled: Gt || 0 === Object.keys(O).length
                }, I.createElement(M.Z, {
                    icon: w.NB
                }), " ", Wt ? "Clear" : "Cancel"), " ", I.createElement(le.zx, {
                    loading: Gt && !ft,
                    disabled: Gt || 0 === Object.keys(O).length || Object.values(_).includes(!1),
                    onClick: Bt
                }, I.createElement(M.Z, {
                    icon: Et.r6
                }), " Save"))))), I.createElement(le.sm, {
                    isOpen: !!qe,
                    confirmCallback: function() {
                        return Ae(je.filter((function(e) {
                            return e !== qe && !_t.has(e)
                        }))), void ze(null)
                    },
                    cancelCallback: function() {
                        return ze(null)
                    },
                    headerText: "Role Permission Dependencies",
                    confirmText: "Turn Off",
                    cancelText: "Go Back"
                }, I.createElement("div", null, I.createElement("p", null, "Turning off “", null === (s = Xt[qe]) || void 0 === s ? void 0 : s.displayName, "” will also turn off permissions that currently require it:"), I.createElement("ul", null, (0, q.Z)(_t).filter((function(e) {
                    return je.includes(e)
                })).map((function(e) {
                    var t = Xt[e];
                    return I.createElement("li", {
                        key: e
                    }, "“", t.displayName, "”")
                }))), I.createElement("strong", null, "Are you sure you want to turn this off?"))), I.createElement(le.sm, {
                    isOpen: !!Fe,
                    confirmCallback: function() {
                        return Ae(je.filter((function(e) {
                            return !Fe.includes(e)
                        }))), void Xe(null)
                    },
                    cancelCallback: function() {
                        return Xe(null)
                    },
                    headerText: "Invalid Permissions Detected",
                    confirmText: "Remove Permissions",
                    cancelText: "Keep Permissions"
                }, I.createElement("div", null, I.createElement("p", null, "This role contains permissions that no longer exist or are unavailable for your group."), I.createElement("p", null, "These permissions will be removed from the role: ", I.createElement("strong", null, null == Fe ? void 0 : Fe.join(", "))))))
            };
            var Pt = n(93682),
                Rt = n(3163),
                Lt = n(50249);
            const Ut = function(e) {
                var t, n, r = e.group,
                    l = e.roleLocalOffset,
                    a = e.isGroupOwner,
                    o = (0, de.pc)(),
                    i = (0, S.TH)(),
                    c = (0, S.UO)(),
                    s = (0, de.Tu)({
                        withEconomyAccount: !0
                    }).user,
                    u = I.useMemo((function() {
                        return "new" !== c.roleId && c.roleId
                    }), [c]),
                    m = (0, ne.q7)().data,
                    d = void 0 === m ? [] : m,
                    p = (null == s || null === (t = s.economyAccount) || void 0 === t ? void 0 : t.accountSellerStatus) === St.dd.INVITED,
                    g = d.includes("permission-can-sell-products"),
                    f = (0, q.Z)(null != r && r.roles ? r.roles : []).sort((function(e, t) {
                        var n = e.order,
                            r = t.order;
                        return e.id === u ? (n += l) === t.order && (l > 0 ? n += 1 : n -= 1) : t.id === u && (r += l) === e.order && (l > 0 ? r += 1 : r -= 1), n < r ? -1 : 1
                    })) || [],
                    E = f.length >= ht.Mw,
                    v = null == r || null === (n = r.myMember) || void 0 === n ? void 0 : n.permissions,
                    b = f.map((function(e, t) {
                        var n, l = [],
                            a = null;
                        0 === e.order ? (l.push(I.createElement(qt, {
                            key: "management-header"
                        }, "Management Roles")), a = I.createElement(I.Fragment, null, I.createElement(le.$1, {
                            icon: Se.nm,
                            title: "Management Role"
                        }), " ")) : e.permissions.includes("group-instance-moderate") ? a = I.createElement(I.Fragment, null, I.createElement(le.$1, {
                            icon: Rt.U7,
                            title: "Instance Moderator Role"
                        }), " ") : e.requiresPurchase ? a = I.createElement(I.Fragment, null, I.createElement(le.$1, {
                            icon: Lt.default,
                            title: "Paid Role"
                        }), " ") : e.defaultRole && (l.push(I.createElement(qt, {
                            key: "default-header"
                        }, "Default Role")), a = I.createElement(I.Fragment, null, I.createElement(le.$1, {
                            icon: Pt.Z3,
                            title: "Default Role"
                        }), " ")), e.isManagementRole || e.defaultRole || null === (n = f[t - 1]) || void 0 === n || !n.isManagementRole || l.push(I.createElement(qt, {
                            key: "member-header"
                        }, "Member Roles"));
                        var i = (0 === (null == r ? void 0 : r.memberRank) || "new" === e.id || e.order > (null == r ? void 0 : r.memberRank)) && (v.includes("*") || 0 === e.permissions.filter((function(e) {
                            return !v.includes(e)
                        })).length);
                        return l.push(o || i ? I.createElement(Dt, null, I.createElement(Xt, {
                            key: e.id,
                            to: "/home/group/".concat(r.id, "/settings/roles/").concat(e.id),
                            className: e.id === u ? "selected" : ""
                        }, a, e.name + ("new" === e.id ? " (unsaved new role)" : ""))) : I.createElement(Gt, {
                            key: e.id
                        }, a, e.name + ("new" === e.id ? " (unsaved new role)" : ""))), l
                    }));
                return I.createElement(I.Fragment, null, E && I.createElement(T.Z, {
                    role: "alert",
                    color: "warning"
                }, "This group has reached maximum number of roles"), I.createElement(zt, null, b, I.createElement("li", null, I.createElement(Ft, {
                    to: "/home/group/".concat(r.id, "/settings/roles/new"),
                    end: !0,
                    disabled: E
                }, "Create Role")), a && p && I.createElement("li", null, g ? I.createElement(Ft, {
                    to: "/home/group/".concat(r.id, "/settings/roles/new/paid"),
                    end: !0,
                    disabled: E
                }, "Create Paid Role") : I.createElement(le.qX, {
                    slim: !0
                }, "Want to create a paid role? Find out more and sign up", " ", I.createElement(j.rU, {
                    to: "/home/marketplace/wallet",
                    state: {
                        redirectTo: i.pathname
                    }
                }, "in your Wallet"), "."))))
            };
            var qt = (0, a.Z)("h5", {
                    target: "e1hiny755"
                })({
                    name: "1gttmjq",
                    styles: "margin:0;padding:0;font-size:1.2rem;font-weight:bold"
                }),
                zt = (0, a.Z)("ul", {
                    target: "e1hiny754"
                })({
                    name: "wghgqz",
                    styles: "list-style-type:none;padding:0;margin-bottom:0"
                }),
                Gt = (0, a.Z)("li", {
                    target: "e1hiny753"
                })({
                    name: "12guyxn",
                    styles: "padding:8px;margin-bottom:8px;border-radius:4px;background-color:#141519;opacity:0.3"
                }),
                Dt = (0, a.Z)("li", {
                    target: "e1hiny752"
                })({
                    name: "1hcx8jb",
                    styles: "padding:0"
                }),
                Ft = (0, a.Z)(j.OL, {
                    target: "e1hiny751"
                })({
                    name: "1ekamc",
                    styles: "display:inline-block;padding:5px;margin-bottom:8px;border-radius:4px;width:100%;color:inherit;background-color:#064b5c;border:#064b5c solid 2px;text-align:center;flex:1;:hover{background-color:#064b5c;border-color:#086c84;text-decoration:none;}&.active{background-color:#454b54;}"
                }),
                Xt = (0, a.Z)(Ft, {
                    target: "e1hiny750"
                })({
                    name: "hlgyoz",
                    styles: "background-color:transparent;border-color:transparent;text-align:left;:hover{background-color:#282b31;border-color:#282b31;}&.active{background-color:#454b54;border-color:#454b54;}"
                }),
                _t = n(98185);
            const Jt = function(e) {
                var t = e.group,
                    n = (0, de.pc)(),
                    r = (0, S.TH)(),
                    a = I.useState(0),
                    o = (0, l.Z)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = (0, C.v9)((function(e) {
                        var t;
                        return null === (t = e.group) || void 0 === t || null === (t = t.role) || void 0 === t ? void 0 : t.error
                    })),
                    u = (0, ne.XC)(),
                    m = u.data,
                    d = (u.isLoading, u.isError, u.error, (null == t ? void 0 : t.ownerId) === (null == m ? void 0 : m.id));
                I.useEffect((function() {
                    c(0)
                }), [r]);
                return I.createElement(_t.Z, {
                    loading: !t.roles
                }, s && I.createElement(le.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: s.message
                }), I.createElement(le.oI, null, I.createElement("h4", {
                    className: "text-center"
                }, "Roles")), I.createElement(le.Ao, null, I.createElement(Bt, null, I.createElement($t, null, I.createElement(Ut, {
                    group: t,
                    roleLocalOffset: i,
                    isGroupOwner: d
                })), I.createElement(Mt, {
                    group: t,
                    changeRoleLocalOrder: function(e) {
                        var r = e.roleId,
                            l = e.offset,
                            a = t.roles.find((function(e) {
                                return e.id === r
                            }));
                        if (!a) return console.error("Role ".concat(r, " not found when reordering")), 0;
                        var o = t.roles.find((function(e) {
                                return e.order === a.order + (i + l)
                            })),
                            s = i + l;
                        return 0 !== (null == o ? void 0 : o.order) && (a.isManagementRole || null == o || !o.isManagementRole) && (!a.isManagementRole || null != o && o.isManagementRole) && (a.order + s > (null == t ? void 0 : t.memberRank) || n) && a.order + s < t.roles.length ? (c(s), s) : i
                    },
                    changeRoleOffset: c,
                    roleOffset: i,
                    isGroupOwner: d
                }))))
            };
            var Bt = (0, a.Z)(le.X2, {
                    target: "eaqb3yw1"
                })({
                    name: "ikx90a",
                    styles: "display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:stretch;>*{flex:1;}"
                }),
                $t = (0, a.Z)("div", {
                    target: "eaqb3yw0"
                })({
                    name: "1jwryq8",
                    styles: "margin-right:15px"
                });

            function Vt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Wt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Vt(Object(n), !0).forEach((function(t) {
                        (0, U.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ht = I.lazy((function() {
                    return Promise.all([n.e(123), n.e(1541), n.e(4444), n.e(9908), n.e(229), n.e(3294), n.e(527), n.e(4814)]).then(n.bind(n, 40527))
                })),
                Yt = [{
                    label: "Open",
                    value: ht.wN.OPEN
                }, {
                    label: "Closed",
                    value: ht.wN.CLOSED
                }, {
                    label: "Invite Only",
                    value: ht.wN.INVITE
                }, {
                    label: "Request Invite",
                    value: ht.wN.REQUEST
                }];
            const Qt = function(e) {
                var t, n, a, o, i, c, s, u, m, d, p, g, f, E, v, b, h = e.group,
                    w = (0, ne.IB)().data,
                    x = null !== (t = null == h ? void 0 : h.transferTargetId) && void 0 !== t ? t : null,
                    k = (0, C.I0)(),
                    j = (0, S.s0)(),
                    T = I.useState({
                        name: h.name,
                        shortCode: h.shortCode,
                        description: h.description,
                        isSearchable: h.isSearchable,
                        joinState: h.joinState,
                        allowGroupJoinPrompt: h.allowGroupJoinPrompt,
                        language: h.languages,
                        rules: h.rules
                    }),
                    P = (0, l.Z)(T, 2),
                    se = P[0],
                    ue = P[1],
                    me = I.useState(!1),
                    de = (0, l.Z)(me, 2),
                    ge = de[0],
                    fe = de[1],
                    Ee = I.useState(!1),
                    ve = (0, l.Z)(Ee, 2),
                    be = ve[0],
                    he = ve[1],
                    we = I.useState(!1),
                    xe = (0, l.Z)(we, 2),
                    ye = xe[0],
                    Ze = xe[1],
                    ke = I.useState(!1),
                    Ne = (0, l.Z)(ke, 2),
                    Oe = Ne[0],
                    Ie = Ne[1],
                    Se = I.useState(null),
                    Ae = (0, l.Z)(Se, 2),
                    Te = Ae[0],
                    Me = Ae[1],
                    Re = I.useState(!1),
                    Le = (0, l.Z)(Re, 2),
                    Ue = Le[0],
                    qe = Le[1],
                    ze = I.useState(!1),
                    Ge = (0, l.Z)(ze, 2),
                    De = Ge[0],
                    Xe = Ge[1],
                    _e = I.useState(null),
                    Je = (0, l.Z)(_e, 2),
                    $e = Je[0],
                    Ve = Je[1],
                    We = I.useState(!1),
                    He = (0, l.Z)(We, 2),
                    Ye = He[0],
                    Qe = He[1],
                    Ke = I.useState(!1),
                    et = (0, l.Z)(Ke, 2),
                    tt = et[0],
                    nt = et[1],
                    rt = I.useState(!1),
                    lt = (0, l.Z)(rt, 2),
                    at = lt[0],
                    ot = lt[1],
                    it = I.useState(null),
                    ct = (0, l.Z)(it, 2),
                    st = ct[0],
                    mt = ct[1],
                    dt = I.useState(null),
                    pt = (0, l.Z)(dt, 2),
                    gt = (pt[0], pt[1]),
                    ft = I.useState(!1),
                    Et = (0, l.Z)(ft, 2),
                    vt = Et[0],
                    bt = Et[1],
                    wt = I.useState(null !== (n = h.languages) && void 0 !== n ? n : []),
                    yt = (0, l.Z)(wt, 2),
                    Zt = yt[0],
                    kt = yt[1],
                    Nt = I.useState(null !== (a = h.links) && void 0 !== a ? a : []),
                    Ot = (0, l.Z)(Nt, 2),
                    It = Ot[0],
                    Ct = Ot[1],
                    St = I.useState(null),
                    jt = (0, l.Z)(St, 2),
                    At = jt[0],
                    Tt = jt[1],
                    Mt = I.useState(null),
                    Pt = (0, l.Z)(Mt, 2),
                    Rt = (Pt[0], Pt[1]),
                    Lt = (0, C.v9)((function(e) {
                        return e.currentUser.isMod
                    })),
                    Ut = (null == h ? void 0 : h.ownerId) === (null == w ? void 0 : w.id),
                    qt = (0, pe.mA)(),
                    zt = (0, l.Z)(qt, 2),
                    Gt = zt[0],
                    Dt = zt[1],
                    Ft = Dt.isError,
                    Xt = Dt.isLoading,
                    _t = Dt.error,
                    Bt = (0, pe.CL)(),
                    $t = (0, l.Z)(Bt, 2),
                    Vt = $t[0],
                    Qt = $t[1],
                    en = Qt.isError,
                    tn = Qt.isLoading,
                    nn = Qt.error,
                    rn = Qt.isSuccess,
                    ln = (0, ne.q7)().data,
                    an = void 0 === ln ? [] : ln,
                    on = (0, K.y)().data,
                    cn = null !== (o = null == on || null === (i = on.constants) || void 0 === i || null === (i = i.LANGUAGE) || void 0 === i ? void 0 : i.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== o ? o : Q.O,
                    sn = [{
                        value: "none",
                        label: "none"
                    }].concat((0, q.Z)(Object.keys(cn).map((function(e) {
                        return {
                            value: e,
                            label: cn[e]
                        }
                    })))),
                    un = (null == $e || null === (c = $e.user) || void 0 === c ? void 0 : c.id) && (null == h ? void 0 : h.id) && null === x,
                    mn = (0, pe.ek)({
                        groupId: null == h ? void 0 : h.id,
                        transferTargetId: null == $e || null === (s = $e.user) || void 0 === s ? void 0 : s.id
                    }, {
                        skip: !un || !(null != h && h.id),
                        refetchOnMountOrArgChange: !0
                    }),
                    dn = mn.data,
                    pn = mn.isFetching,
                    gn = mn.isError,
                    fn = mn.error,
                    En = null !== x,
                    vn = (0, re.GR)(x, {
                        skip: !En,
                        refetchOnMountOrArgChange: !0
                    }),
                    bn = vn.data,
                    hn = vn.isFetching,
                    wn = vn.isError,
                    xn = vn.error,
                    yn = (0, pe.HT)(),
                    Zn = (0, l.Z)(yn, 2),
                    kn = Zn[0],
                    Nn = Zn[1],
                    On = (Nn.data, Nn.isFetching),
                    In = Nn.isError,
                    Cn = Nn.error,
                    Sn = (0, pe.rq)(),
                    jn = (0, l.Z)(Sn, 2),
                    An = jn[0],
                    Tn = jn[1],
                    Mn = (Tn.data, Tn.isFetching),
                    Pn = Tn.isError,
                    Rn = Tn.error;
                I.useEffect((function() {
                    rn ? j("/home/groups") : (Qe(!1), fe(!1))
                }), [tn]), I.useEffect((function() {
                    if (ye && $e && pn && Ie(!0), !pn && ye && dn && !gn) {
                        Ie(!1);
                        var e = function(e) {
                            var t = {
                                valid: !1,
                                reasons: []
                            };
                            if (e) {
                                for (var n, r = 0, a = Object.entries(e); r < a.length; r++) {
                                    var o = (0, l.Z)(a[r], 2),
                                        i = o[0];
                                    !1 === o[1] && t.reasons.push(i)
                                }
                                t.valid = !((null === (n = t.reasons) || void 0 === n ? void 0 : n.length) > 0)
                            }
                            return t
                        }(dn.requirements);
                        Me(e), Ze(!1), he(!1), qe(!0)
                    }
                    var t;
                    !pn && ye && gn && (Ie(!1), Ze(!1), Ve(null), k((0, te.d)({
                        title: "Error Validating Group Transfer",
                        icon: y.eH,
                        message: "".concat(null == fn || null === (t = fn.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                        color: "error",
                        timeout: 3e3
                    })))
                }), [ye, $e, pn, gn, dn]), I.useEffect((function() {
                    var e;
                    (hn || wn || !bn || Ve({
                        user: bn
                    }), !hn && wn) && k((0, te.d)({
                        title: "Error Fetching New Owner Data",
                        icon: y.eH,
                        message: "".concat(null == xn || null === (e = xn.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message),
                        color: "error",
                        timeout: 3e3
                    }))
                }), [hn, bn, wn]);
                var Ln = function(e) {
                        var t = e.target.name,
                            n = "checkbox" === e.target.getAttribute("type") ? e.target.checked : e.target.value;
                        ue(Wt(Wt({}, se), {}, (0, U.Z)({}, t, "shortCode" === t ? n.toUpperCase() : n)))
                    },
                    Un = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        st && (se.bannerId = st), At && (se.iconId = At), Gt({
                                            groupId: h.id,
                                            data: Wt({}, se)
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
                    qn = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var t, n, r;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return Xe(!0), e.prev = 1, e.next = 4, kn({
                                            groupId: h.id,
                                            transferTargetId: null == $e || null === (t = $e.user) || void 0 === t ? void 0 : t.id
                                        }).unwrap();
                                    case 4:
                                        In && (Xe(!1), qe(!1), Ve(null), k((0, te.d)({
                                            title: "Group Transfer Error",
                                            icon: y.eH,
                                            message: "".concat(null == Cn || null === (n = Cn.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 6e3
                                        }))), In || k((0, te.d)({
                                            title: "Group Transfer Initiated",
                                            icon: Z.f8,
                                            color: "success",
                                            timeout: 6e3
                                        })), Xe(!1), qe(!1), e.next = 16;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(1), Xe(!1), qe(!1), Ve(null), k((0, te.d)({
                                            title: "Group Transfer Error",
                                            icon: y.eH,
                                            message: "".concat(null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message),
                                            color: "error",
                                            timeout: 6e3
                                        }));
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 10]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    zn = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var t, n, r;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return nt(!0), e.prev = 1, e.next = 4, An({
                                            groupId: h.id,
                                            transferTargetId: null == $e || null === (t = $e.user) || void 0 === t ? void 0 : t.id
                                        }).unwrap();
                                    case 4:
                                        nt(!1), Pn && k((0, te.d)({
                                            title: "Cancel Group Transfer Error",
                                            icon: y.eH,
                                            message: "".concat(null == Rn || null === (n = Rn.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 3e3
                                        })), Pn || k((0, te.d)({
                                            title: "Delete Group Transfer Success",
                                            icon: Z.f8,
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(1), nt(!1), k((0, te.d)({
                                            title: "Delete Group Transfer Error",
                                            icon: y.eH,
                                            message: "".concat(null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message),
                                            color: "error",
                                            timeout: 3e3
                                        }));
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 9]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Gn = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        Qe(!0), Vt({
                                            groupId: h.id,
                                            ownerId: h.ownerId
                                        });
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Dn = function(e) {
                        Ct(e), ue(Wt(Wt({}, se), {}, {
                            links: e
                        }))
                    },
                    Fn = function(e, t) {
                        var n = (0, q.Z)(Zt);
                        n[e] = t, n = n.filter((function(e) {
                            return "none" !== e
                        })), kt(n), ue(Wt(Wt({}, se), {}, {
                            languages: n
                        }))
                    },
                    Xn = an.includes("permission-user-gallery"),
                    _n = an.includes("permission-user-icons"),
                    Jn = Xt || tn || On || Mn;
                return I.createElement("div", null, I.createElement(J.Z, {
                    className: "mt-4"
                }, I.createElement(ce.Z, {
                    tabs: [{
                        name: "General",
                        to: "/home/group/".concat(h.id, "/settings"),
                        end: !0,
                        icon: _.Kb,
                        condition: Lt || R({
                            groupMember: null == h ? void 0 : h.myMember,
                            permission: "group-data-manage"
                        })
                    }, {
                        name: "My Membership",
                        to: Lt || R({
                            groupMember: null == h ? void 0 : h.myMember,
                            permission: "group-data-manage"
                        }) ? "me" : "/home/group/".concat(h.id, "/settings"),
                        icon: X.xK,
                        condition: null == h ? void 0 : h.myMember
                    }, {
                        name: "Roles",
                        to: "roles",
                        icon: F.aC,
                        condition: Lt || R({
                            groupMember: null == h ? void 0 : h.myMember,
                            permission: "group-roles-manage"
                        })
                    }, {
                        name: "Logs",
                        to: "logs",
                        icon: D.tx,
                        condition: Lt || R({
                            groupMember: null == h ? void 0 : h.myMember,
                            permission: "group-audit-view"
                        })
                    }, {
                        name: "Age Verification Beta",
                        to: "ageverificationbeta",
                        icon: G.Uk,
                        condition: h.tags.includes("admin_age_verification_enabled") && (Lt || (null == h ? void 0 : h.myMember.userId) === h.ownerId)
                    }]
                })), I.createElement(S.Z5, null, I.createElement(S.AW, {
                    path: "/",
                    element: Lt || R({
                        groupMember: null == h ? void 0 : h.myMember,
                        permission: "group-data-manage"
                    }) ? I.createElement(I.Fragment, null, I.createElement(B.Z, null, I.createElement(A.Z, {
                        isOpen: at,
                        className: (0, O.iv)({
                            name: "1ul0gzp",
                            styles: "max-width:1500px!important"
                        })
                    }, I.createElement($.Z, null, I.createElement(Ht, {
                        isSelector: !0,
                        selectedCallback: function(e, t) {
                            mt(e), gt(t), ot(!1)
                        },
                        selectedId: null != st ? st : "",
                        activeTab: "photos"
                    })), I.createElement(V.Z, null, I.createElement(le.zx, {
                        onClick: function() {
                            ot(!1), k((0, ee.b9)())
                        }
                    }, "Cancel"))), I.createElement(A.Z, {
                        isOpen: vt,
                        className: (0, O.iv)({
                            name: "1ul0gzp",
                            styles: "max-width:1500px!important"
                        })
                    }, I.createElement($.Z, null, I.createElement(Ht, {
                        isSelector: !0,
                        selectedCallback: function(e, t) {
                            Tt(e), Rt(t), bt(!1)
                        },
                        selectedId: null != At ? At : "",
                        activeTab: "icons"
                    })), I.createElement(V.Z, null, I.createElement(le.zx, {
                        onClick: function() {
                            bt(!1), k((0, ee.LC)())
                        }
                    }, "Cancel"))), I.createElement(J.Z, null, Ft ? I.createElement(le.qX, {
                        type: "error",
                        title: "An error occurred",
                        message: (null == _t || null === (u = _t.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message) || "Something went wrong updating the group"
                    }) : null, I.createElement(le.oI, null, I.createElement("h4", {
                        className: "text-center"
                    }, "General")), I.createElement(le.Ao, null, I.createElement("div", null, I.createElement(B.Z, {
                        className: "mb-1"
                    }, I.createElement(J.Z, null, I.createElement(W.Z, {
                        for: "name"
                    }, "Name")), I.createElement(J.Z, null, I.createElement(le.II, {
                        type: "text",
                        name: "name",
                        className: "full-width",
                        value: se.name,
                        onChange: Ln
                    }))), I.createElement(B.Z, {
                        className: "mb-1"
                    }, I.createElement(J.Z, null, I.createElement(W.Z, {
                        for: "shortCode"
                    }, "Short Code (3-6 letters/numbers)")), I.createElement(J.Z, null, I.createElement(le.II, {
                        type: "text",
                        name: "shortCode",
                        className: "full-width",
                        value: se.shortCode,
                        maxLength: 6,
                        onChange: Ln
                    }))), I.createElement(B.Z, {
                        className: "mb-1"
                    }, I.createElement(J.Z, null, I.createElement(W.Z, {
                        for: "description"
                    }, "Description")), I.createElement(J.Z, null, I.createElement(Kt, {
                        name: "description",
                        className: "full-width",
                        value: null !== (m = se.description) && void 0 !== m ? m : "",
                        onChange: Ln
                    }))), I.createElement(B.Z, null, I.createElement(J.Z, null, I.createElement(W.Z, {
                        for: "description"
                    }, "Rules")), I.createElement(J.Z, null, I.createElement(Kt, {
                        name: "rules",
                        className: "full-width",
                        value: null !== (d = se.rules) && void 0 !== d ? d : "",
                        onChange: Ln
                    }))), I.createElement("div", null, !1, I.createElement(B.Z, {
                        className: "mt-2"
                    }, I.createElement(J.Z, null, I.createElement(W.Z, {
                        for: "isJoinable"
                    }, "Open to New Members")), I.createElement(J.Z, null, I.createElement(le.Lt, {
                        onChange: function(e) {
                            var t = e == ht.wN.OPEN;
                            ue(Wt(Wt({}, se), {}, {
                                joinState: e,
                                allowGroupJoinPrompt: t
                            }))
                        },
                        value: null !== (p = se.joinState) && void 0 !== p ? p : "",
                        name: "joinState",
                        options: Yt
                    }))), I.createElement("br", null), I.createElement("div", {
                        className: "mt-2"
                    }, I.createElement(ae.Z, {
                        label: "Automatic Group Invites",
                        value: "allowGroupJoinPrompt",
                        disabled: se.joinState !== ht.wN.OPEN,
                        defaultChecked: null !== (g = se.allowGroupJoinPrompt) && void 0 !== g ? g : se.joinState == ht.wN.OPEN,
                        onChangeCallback: function(e) {
                            var t = e.checked;
                            ue(Wt(Wt({}, se), {}, {
                                allowGroupJoinPrompt: t
                            }))
                        }
                    }), I.createElement(H.Z, null, "Automatically send group invites to non-members who’ve spent over 5 minutes in this group’s instances or made a friend there. Only available to Open groups.")), I.createElement(B.Z, {
                        className: "mt-2"
                    }, I.createElement(J.Z, null, I.createElement(W.Z, {
                        for: "languages"
                    }, "Languages")), I.createElement(J.Z, null, Zt.length >= 0 && I.createElement(le.Lt, {
                        onChange: function(e) {
                            Fn(0, e)
                        },
                        value: null !== (f = null == Zt ? void 0 : Zt[0]) && void 0 !== f ? f : "none",
                        name: "languages",
                        options: sn,
                        className: "mb-1"
                    }), Zt.length >= 1 && I.createElement(le.Lt, {
                        onChange: function(e) {
                            Fn(1, e)
                        },
                        value: null !== (E = null == Zt ? void 0 : Zt[1]) && void 0 !== E ? E : "none",
                        name: "languages",
                        options: sn,
                        className: "mb-1"
                    }), Zt.length >= 2 && I.createElement(le.Lt, {
                        onChange: function(e) {
                            Fn(2, e)
                        },
                        value: null !== (v = null == Zt ? void 0 : Zt[2]) && void 0 !== v ? v : "none",
                        name: "languages",
                        options: sn,
                        className: "mb-1"
                    }))), I.createElement("br", null), I.createElement(B.Z, {
                        className: "mt-2"
                    }, I.createElement(J.Z, null, I.createElement(W.Z, {
                        for: "links"
                    }, "Group Links")), I.createElement(J.Z, null, I.createElement(Be, {
                        groupBioLinks: It,
                        callback: Dn,
                        index: 0
                    }), I.createElement(Be, {
                        groupBioLinks: It,
                        callback: Dn,
                        index: 1
                    }), I.createElement(Be, {
                        groupBioLinks: It,
                        callback: Dn,
                        index: 2
                    }))), I.createElement("br", null), I.createElement(B.Z, null, I.createElement(J.Z, null), I.createElement(J.Z, null, st && I.createElement("div", null, I.createElement("span", null, "Replacing banner with: ", st), I.createElement("br", null), I.createElement(le.zx, {
                        onClick: function() {
                            mt(null), gt(null)
                        }
                    }, "Clear banner selection")), At && I.createElement("div", null, I.createElement("span", null, "Replacing icon with: ", At), I.createElement("br", null), I.createElement(le.zx, {
                        onClick: function() {
                            Rt(null), Tt(null)
                        }
                    }, "Clear icon selection")))), I.createElement("br", null), I.createElement(B.Z, null, I.createElement(J.Z, null), I.createElement(J.Z, null, Xn && I.createElement(le.zx, {
                        color: "primary",
                        onClick: function() {
                            ot(!0)
                        }
                    }, "Update Group Banner"), " ", _n && I.createElement(le.zx, {
                        color: "primary",
                        onClick: function() {
                            bt(!0)
                        }
                    }, "Update Group Icon")))), I.createElement(B.Z, {
                        className: "mt-4"
                    }, I.createElement(le.zx, {
                        neutral: !0,
                        onClick: Un,
                        disabled: Jn,
                        loading: Jn
                    }, "Save")))))), Ut && !x && I.createElement(I.Fragment, null, I.createElement(Ce, {
                        isOpen: be,
                        group: h,
                        cancelCallback: function() {
                            return he(!1)
                        },
                        memberSelectCallback: function(e) {
                            ! function(e) {
                                Ve(e), Ze(!0)
                            }(e)
                        },
                        isGroupMemberOnly: !0,
                        isSelecting: Oe
                    }), (null == $e ? void 0 : $e.user) && Ue && I.createElement(Fe, {
                        group: h,
                        validity: Te,
                        prospectiveNewOwner: $e,
                        onTransfer: function() {
                            return qn()
                        },
                        onCancel: function() {
                            return qe(!1)
                        },
                        isOpen: Ue,
                        isTransferring: De
                    }), I.createElement(Pe, {
                        group: h,
                        onButtonClick: function() {
                            return he(!0)
                        },
                        isLoading: Jn || !1
                    })), Ut && x && I.createElement(je, {
                        group: h,
                        onClickCallback: function() {
                            return zn()
                        },
                        isDeleting: tt || !1
                    }), Ut && I.createElement(I.Fragment, null, en ? I.createElement(le.qX, {
                        type: "error",
                        title: "Could not delete group",
                        message: (null == nn || null === (b = nn.data) || void 0 === b || null === (b = b.error) || void 0 === b ? void 0 : b.message) || "Something went wrong deleting the group"
                    }) : null, I.createElement(le.oI, {
                        className: "mt-2"
                    }, I.createElement("h4", {
                        className: "text-center"
                    }, "Delete Group")), I.createElement(le.Ao, null, I.createElement("p", null, "You can delete this group as long as it has no other members. This cannot be undone."), I.createElement(A.Z, {
                        isOpen: ge
                    }, I.createElement(Y.Z, {
                        close: I.createElement(oe.Z, {
                            onClick: function() {
                                fe(!1)
                            }
                        })
                    }, I.createElement("h4", null, "Delete Group?")), I.createElement($.Z, {
                        className: (0, O.iv)({
                            name: "1bpq7li",
                            styles: "padding:30px;padding-top:0"
                        })
                    }, Ye ? I.createElement("div", {
                        className: "full-width text-center"
                    }, I.createElement(ie.Z, null)) : I.createElement("div", {
                        className: (0, O.iv)({
                            name: "pc0kie",
                            styles: ">*{margin-top:15px;}"
                        })
                    }, I.createElement(B.Z, null, I.createElement("span", {
                        className: "full-width text-center"
                    }, "Hey! This can't be undone! Only do this if you ", I.createElement("strong", null, "KNOW"), " what you're doing!")), I.createElement(B.Z, null, I.createElement(le.zx, {
                        onClick: Gn,
                        danger: !0,
                        className: "full-width"
                    }, "DELETE IT!")), I.createElement(B.Z, null, I.createElement(le.zx, {
                        className: "full-width",
                        onClick: function() {
                            fe(!1)
                        }
                    }, "Get me outta here!"))))), I.createElement(J.Z, null, I.createElement(le.zx, {
                        danger: !0,
                        onClick: function() {
                            fe(!0)
                        },
                        disabled: Jn,
                        loading: Jn
                    }, I.createElement(M.Z, {
                        icon: z.$
                    }), " Delete Group"))))) : I.createElement(xt, {
                        groupId: null == h ? void 0 : h.id
                    })
                }), I.createElement(S.AW, {
                    path: "/me",
                    element: null != h && h.myMember ? I.createElement(xt, {
                        groupId: null == h ? void 0 : h.id
                    }) : I.createElement(L.Z, {
                        to: ".."
                    })
                }), I.createElement(S.AW, {
                    path: "/roles/:roleId?/:newRoleType?",
                    element: Lt || R({
                        groupMember: null == h ? void 0 : h.myMember,
                        permission: "group-roles-manage"
                    }) ? I.createElement(Jt, {
                        group: h
                    }) : I.createElement(L.Z, {
                        to: ".."
                    })
                }), I.createElement(S.AW, {
                    path: "/logs",
                    element: Lt || R({
                        groupMember: null == h ? void 0 : h.myMember,
                        permission: "group-audit-view"
                    }) ? I.createElement(ut, {
                        group: h
                    }) : I.createElement(L.Z, {
                        to: ".."
                    })
                }), I.createElement(S.AW, {
                    path: "/ageverificationbeta",
                    element: h.tags.includes("admin_age_verification_enabled") && (Lt || (null == h ? void 0 : h.myMember.userId) === h.ownerId) ? I.createElement(B.Z, null, I.createElement(J.Z, null, I.createElement(le.oI, null, I.createElement("h4", {
                        className: "text-center"
                    }, "Age Verification Beta")), I.createElement(le.Ao, null, I.createElement(B.Z, {
                        className: "mb-1"
                    }, I.createElement(J.Z, null, I.createElement(W.Z, null, "Beta Slots Remaining")), I.createElement(J.Z, null, h.ageVerificationBetaSlots)), I.createElement(B.Z, {
                        className: "mb-1"
                    }, I.createElement(J.Z, null, I.createElement(W.Z, null, "Verification Link")), I.createElement(J.Z, null, I.createElement("a", {
                        href: "https://vrchat.com/home/group/".concat(h.id, "/ageverification/").concat(h.ageVerificationBetaCode)
                    }, "https://vrchat.com/home/group/", h.id, "/ageverification/", h.ageVerificationBetaCode)))))) : I.createElement(L.Z, {
                        to: ".."
                    })
                })))
            };
            var Kt = (0, a.Z)(le.gx, {
                    target: "e3uj5bu0"
                })({
                    name: "1vp1ylf",
                    styles: ">textarea{height:200px;}"
                }),
                en = n(50347);
            const tn = function(e) {
                var t = e.member,
                    n = e.isOwner,
                    r = e.isEditable,
                    l = e.onEditCallback,
                    a = e.onAccept,
                    o = e.onDelete,
                    i = e.deleteButtonTitle,
                    c = e.onClick,
                    s = e.showView,
                    u = e.onBan,
                    m = e.onBlock,
                    d = e.onReject,
                    p = e.onUnblock,
                    g = e.navigate,
                    f = t.user,
                    E = void 0 === f ? {} : f,
                    v = E.thumbnailUrl,
                    b = E.currentAvatarThumbnailImageUrl,
                    h = E.displayName;
                return I.createElement(nn, null, I.createElement(en.Z, {
                    image: v || b,
                    onEdit: r ? function() {
                        l ? l(t.id) : console.warn("Edit button in member card clicked, but no onEdit callback has been specified.")
                    } : null,
                    onSelect: a,
                    onClick: c,
                    navigate: g,
                    showViewButton: s,
                    onDelete: o,
                    onBan: u,
                    onBlock: m,
                    onReject: d,
                    onUnblock: p,
                    deleteButtonTitle: i,
                    confirmDelete: !1,
                    width: 300
                }), I.createElement(rn, null, n && I.createElement("span", null, I.createElement(M.Z, {
                    icon: Se.nm,
                    width: 25
                }), " "), I.createElement("h4", null, h)))
            };
            var nn = (0, a.Z)("div", {
                    target: "e1ml2klq1"
                })({
                    name: "9flrez",
                    styles: "position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;>div:first-of-type{margin:0;border-bottom-right-radius:0;border-bottom-left-radius:0;}"
                }),
                rn = (0, a.Z)("div", {
                    target: "e1ml2klq0"
                })({
                    name: "7foox8",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:center;border:4px solid #252a30;background-color:#252a30;text-align:center;width:100%;border-bottom-right-radius:8px;border-bottom-left-radius:8px"
                }),
                ln = n(27003),
                an = n(53359);

            function on(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function cn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? on(Object(n), !0).forEach((function(t) {
                        (0, U.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : on(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const sn = function(e) {
                var t, n, r, a, o, c, s = e.groupMember,
                    u = e.onEditFinished,
                    m = void 0 === u ? function() {} : u,
                    d = e.closeCallback,
                    p = void 0 === d ? function() {} : d,
                    g = e.memberRank,
                    f = e.memberListPage,
                    E = I.useState(!1),
                    v = (0, l.Z)(E, 2),
                    b = v[0],
                    h = v[1],
                    w = I.useState(!1),
                    x = (0, l.Z)(w, 2),
                    y = x[0],
                    Z = x[1],
                    k = I.useState({}),
                    N = (0, l.Z)(k, 2),
                    O = N[0],
                    C = N[1],
                    S = (0, pe.r5)({
                        groupId: s.groupId
                    }),
                    j = S.data,
                    A = S.isLoading,
                    T = S.isError,
                    P = S.error,
                    L = (0, pe.xm)({
                        groupId: s.groupId,
                        userId: s.userId
                    }),
                    q = L.data,
                    z = L.isLoading,
                    G = L.isError,
                    D = L.error,
                    F = (0, pe.uX)(),
                    X = (0, l.Z)(F, 2),
                    _ = X[0],
                    J = (X[1].isLoading, (0, pe.dl)()),
                    B = (0, l.Z)(J, 2),
                    $ = B[0],
                    V = (B[1].isLoading, (0, pe.LA)()),
                    H = (0, l.Z)(V, 2),
                    Y = H[0],
                    Q = (H[1].isLoading, (0, pe.FW)()),
                    K = (0, l.Z)(Q, 2),
                    ee = K[0],
                    te = (K[1].isLoading, (0, pe.l5)()),
                    ne = (0, l.Z)(te, 2),
                    re = ne[0],
                    ae = (ne[1].isLoading, (0, de.pc)()),
                    oe = A || z,
                    ie = G || T;
                if (I.useEffect((function() {
                        m()
                    }), []), ie) return I.createElement(I.Fragment, null, I.createElement(le.oI, null, I.createElement("h4", null, "Managing Member")), I.createElement(le.Ao, null, I.createElement("div", null, I.createElement("div", {
                    className: "text-center mb-4"
                }, I.createElement(M.Z, {
                    icon: an.faTriangleExclamation,
                    size: "xl"
                })), I.createElement("h4", {
                    className: "text-center mb-4"
                }, "We have encountered a problem."), P && I.createElement("p", {
                    className: "text-center text-danger"
                }, null == P || null === (o = P.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message), D && I.createElement("p", {
                    className: "text-center text-danger"
                }, null == D || null === (c = D.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message))));
                if (oe) return null;
                var ce = function() {
                        h(!b)
                    },
                    se = function() {
                        Z(!y)
                    };
                if (null == q) return I.createElement("div", null);
                var ue = R({
                        groupMember: null == j ? void 0 : j.myMember,
                        permission: "group-members-manage"
                    }),
                    me = R({
                        groupMember: null == j ? void 0 : j.myMember,
                        permission: "group-roles-assign"
                    }),
                    ge = R({
                        groupMember: null == j ? void 0 : j.myMember,
                        permission: "group-bans-manage"
                    }),
                    fe = (null == j || null === (t = j.myMember) || void 0 === t ? void 0 : t.id) === q.id,
                    Ee = null != O.managerNotes ? O.managerNotes : q.managerNotes,
                    ve = (null == q ? void 0 : q.roleIds) || [],
                    be = ve.map((function(e) {
                        var t = j.roles.find((function(t) {
                                return t.id === e
                            })),
                            n = (null == t ? void 0 : t.order) > (null == j ? void 0 : j.memberRank) && ((null == t ? void 0 : t.isSelfAssignable) && 0 !== (null == t ? void 0 : t.order) || me);
                        return t ? I.createElement(I.Fragment, null, I.createElement(pn, {
                            key: t.id,
                            roleid: t.id,
                            canInteract: n,
                            onClick: function() {
                                n && function(e) {
                                    j.roles.find((function(t) {
                                        return t.id === e
                                    })) && re({
                                        groupId: q.groupId,
                                        userId: q.userId,
                                        roleId: e
                                    })
                                }(t.id)
                            }
                        }, t.name)) : null
                    })),
                    he = j.roles.filter((function(e) {
                        return !ve.includes(e.id) && (0 !== (null == e ? void 0 : e.order) && ((null == e || !e.requiresPurchase) && ((null == e || !e.defaultRole) && (!(!me && !ae) || !(!fe || !e.isSelfAssignable)))))
                    })).map((function(e) {
                        var t = (null == e ? void 0 : e.order) > (null == j ? void 0 : j.memberRank) && ((null == e ? void 0 : e.isSelfAssignable) && 0 !== (null == e ? void 0 : e.order) || me);
                        return I.createElement(pn, {
                            key: e.id,
                            roleid: e.id,
                            canInteract: t,
                            onClick: function() {
                                var n;
                                t && (n = e.id, j.roles.find((function(e) {
                                    return e.id === n
                                })) && ee({
                                    groupId: q.groupId,
                                    userId: q.userId,
                                    roleId: n
                                }))
                            }
                        }, e.name)
                    }));
                return I.createElement(_t.Z, {
                    loading: oe
                }, I.createElement(le.oI, null, I.createElement("h4", null, "Managing ", null == s || null === (n = s.user) || void 0 === n ? void 0 : n.displayName)), I.createElement(le.Ao, null, y && I.createElement("div", null, I.createElement("h4", {
                    className: "text-center mb-4"
                }, "Are you sure you want to kick ", null == q || null === (r = q.user) || void 0 === r ? void 0 : r.displayName, "?!?!"), I.createElement(le.X2, null, I.createElement(le.zx, {
                    warning: !0,
                    onClick: function() {
                        se(), Y({
                            groupId: q.groupId,
                            userId: q.userId,
                            fromPage: f
                        }), p()
                    },
                    expand: !0
                }, I.createElement(le.$1, {
                    icon: ln.uM
                }), " Get 'em outta here!"), " ", I.createElement(le.zx, {
                    neutral: !0,
                    onClick: se,
                    expand: !0
                }, "Cancel"))), b && I.createElement("div", null, I.createElement("h4", {
                    className: "text-center mb-4"
                }, "Are you sure you want to ban ", null == q || null === (a = q.user) || void 0 === a ? void 0 : a.displayName, "?!?!"), I.createElement(le.X2, null, I.createElement(le.zx, {
                    danger: !0,
                    onClick: function() {
                        ce(), $({
                            groupId: q.groupId,
                            userId: q.userId,
                            fromPage: f
                        }), p()
                    },
                    expand: !0
                }, I.createElement(le.$1, {
                    icon: i.JH
                }), " And stay out!"), " ", I.createElement(le.zx, {
                    neutral: !0,
                    onClick: ce,
                    expand: !0
                }, "Cancel"))), !(y || b) && I.createElement(I.Fragment, null, (me || ae || fe) && I.createElement(un, null, I.createElement(mn, null, I.createElement("h6", null, "Available Roles"), I.createElement(dn, null, he)), I.createElement(gn, null, I.createElement("h6", null, "Assigned Roles"), I.createElement(fn, null, be))), I.createElement(le.X2, null, (ue || ae) && I.createElement("div", {
                    className: "setting mb-2 flex-1"
                }, I.createElement(W.Z, null, "Notes"), I.createElement(le.gx, {
                    name: "managerNotes",
                    className: "notes-input full-width",
                    value: Ee,
                    onChange: function(e) {
                        var t = e.target.name,
                            n = "checkbox" === e.target.getAttribute("type") ? e.target.checked : e.target.value;
                        C(cn(cn({}, O), {}, (0, U.Z)({}, t, n)))
                    }
                }))), I.createElement(le.X2, null, I.createElement(le.zx, {
                    expand: !0,
                    color: "primary",
                    onClick: function() {
                        ! function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = cn(cn({}, O), e);
                            Object.keys(t).length > 0 && _(cn({
                                groupId: q.groupId,
                                userId: q.userId
                            }, t)), p()
                        }()
                    }
                }, I.createElement(le.$1, {
                    icon: Et.r6
                }), " Save"), " ", I.createElement(le.zx, {
                    expand: !0,
                    neutral: !0,
                    onClick: p
                }, "Close"), ((null == j ? void 0 : j.memberRank) < g && ue || ae) && I.createElement(I.Fragment, null, " ", I.createElement(le.zx, {
                    expand: !0,
                    warning: !0,
                    onClick: se
                }, I.createElement(M.Z, {
                    icon: ln.uM
                }), "  Kick"), " ", (ge || ae) && I.createElement(le.zx, {
                    expand: !0,
                    danger: !0,
                    onClick: ce
                }, I.createElement(M.Z, {
                    icon: i.JH
                }), "  Ban"))))))
            };
            var un = (0, a.Z)("div", {
                    target: "emzwbrv5"
                })({
                    name: "sh46e2",
                    styles: "display:flex;flex-direction:row;align-items:start;justify-content:space-around;margin-bottom:15px"
                }),
                mn = (0, a.Z)("div", {
                    target: "emzwbrv4"
                })({
                    name: "1fx61ax",
                    styles: "display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;margin-right:10px"
                }),
                dn = (0, a.Z)("ul", {
                    target: "emzwbrv3"
                })({
                    name: "1uhpukn",
                    styles: "list-style-type:none;padding:0;margin:0;width:100%;max-height:200px;height:200px;overflow-y:auto;overflow-x:hidden;background:#0d0d10;border-radius:5px"
                }),
                pn = (0, a.Z)("li", {
                    target: "emzwbrv2"
                })("padding:8px;border-radius:4px;", (function(e) {
                    return !e.canInteract && "\n    background-color: #0d0d10;\n    opacity: 0.2;\n    "
                }), " &.not-a-role{background-color:unset;}&:hover{", (function(e) {
                    return e.canInteract && "\n        background-color: #282b31;\n        cursor: pointer;\n    "
                }), ";}"),
                gn = (0, a.Z)("div", {
                    target: "emzwbrv1"
                })({
                    name: "d50b5r",
                    styles: "display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;margin-left:10px"
                }),
                fn = (0, a.Z)("ul", {
                    target: "emzwbrv0"
                })({
                    name: "1uhpukn",
                    styles: "list-style-type:none;padding:0;margin:0;width:100%;max-height:200px;height:200px;overflow-y:auto;overflow-x:hidden;background:#0d0d10;border-radius:5px"
                }),
                En = n(54610),
                vn = n(38653),
                bn = function(e) {
                    var t = e.user,
                        n = void 0 === t ? null : t,
                        a = e.groupId,
                        o = (0, C.I0)(),
                        c = (0, I.useState)(!0),
                        s = (0, l.Z)(c, 2),
                        u = s[0],
                        m = s[1],
                        d = (0, pe.Rx)(),
                        p = (0, l.Z)(d, 2),
                        g = p[0],
                        f = p[1].isLoading,
                        E = (0, pe.dl)(),
                        v = (0, l.Z)(E, 2),
                        b = v[0],
                        h = v[1].isLoading;
                    if (null === n) return null;
                    var w = function() {
                            var e = (0, r.Z)(N().mark((function e() {
                                var t, r;
                                return N().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, b({
                                                groupId: a,
                                                userId: n.id
                                            }).unwrap();
                                        case 3:
                                            o((0, te.d)({
                                                icon: Z.f8,
                                                message: "".concat(n.displayName, " is banned!"),
                                                color: "success",
                                                timeout: 3e3
                                            })), m(!1), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), o((0, te.d)({
                                                icon: y.eH,
                                                message: null !== (t = null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== t ? t : "Failed to ban ".concat(n.displayName, "!"),
                                                color: "danger",
                                                timeout: 3e3
                                            }));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        x = function() {
                            var e = (0, r.Z)(N().mark((function e() {
                                var t, r;
                                return N().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, g({
                                                groupId: a,
                                                userId: n.id
                                            }).unwrap();
                                        case 3:
                                            o((0, te.d)({
                                                icon: Z.f8,
                                                message: "".concat(n.displayName, " is un-banned!"),
                                                color: "success",
                                                timeout: 3e3
                                            })), m(!0), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), o((0, te.d)({
                                                icon: y.eH,
                                                message: null !== (t = null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== t ? t : "Failed to un-ban ".concat(n.displayName, "!"),
                                                color: "danger",
                                                timeout: 3e3
                                            }));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return I.createElement(me.Wm, {
                        className: "flex-row my-1"
                    }, I.createElement("div", {
                        className: "container-fluid p-0"
                    }, I.createElement(B.Z, null, I.createElement(J.Z, {
                        xs: 12,
                        sm: 2,
                        className: "pe-0"
                    }, I.createElement(j.rU, {
                        to: "/home/user/".concat(n.id),
                        title: n.displayName,
                        target: "_blank"
                    }, I.createElement(me.D2, {
                        image: (null == n ? void 0 : n.iconUrl) || (null == n ? void 0 : n.thumbnailUrl) || (null == n ? void 0 : n.userIcon) || (null == n ? void 0 : n.currentAvatarThumbnailImageUrl)
                    }))), I.createElement(J.Z, null, I.createElement(En.Z, {
                        className: "d-flex flex-row justify-content-between py-1"
                    }, I.createElement("div", {
                        className: "container p-0"
                    }, I.createElement(B.Z, null, I.createElement(J.Z, {
                        xs: 12,
                        sm: 7,
                        className: "p-1"
                    }, I.createElement(j.rU, {
                        to: "/home/user/".concat(n.id),
                        title: n.displayName,
                        target: "_blank"
                    }, I.createElement(me.Hz, {
                        tag: "h5"
                    }, n.displayName)), I.createElement(vn.Z, {
                        className: "mb-2 text-muted text-truncate tw-capitalize",
                        tag: "h6"
                    }, n.status)), I.createElement(J.Z, null, I.createElement("div", {
                        className: "tw-flex tw-col tw-justify-end"
                    }, I.createElement("div", {
                        className: "tw-justify-end"
                    }, I.createElement(le.zx, {
                        onClick: u ? w : x,
                        disabled: h || f,
                        loading: h || f,
                        className: "tw-w-fit tw-px-4"
                    }, I.createElement(le.$1, {
                        width: 20,
                        icon: i.JH
                    }), u ? " Ban" : " Unban")))))))))))
                };
            bn.propTypes = {
                user: fe().object,
                groupId: fe().string.isRequired
            };
            const hn = bn;
            var wn = n(7371),
                xn = n(73104),
                yn = function(e) {
                    var t = e.member,
                        n = void 0 === t ? null : t,
                        r = e.groupRoles,
                        l = e.memberEditCallback;
                    if (null === n) return null;
                    var a = n.user;
                    return I.createElement(me.Wm, {
                        className: "flex-row my-1"
                    }, I.createElement("div", {
                        className: "container-fluid p-0"
                    }, I.createElement(B.Z, null, I.createElement(J.Z, {
                        xs: 12,
                        sm: 2,
                        className: "pe-0"
                    }, I.createElement(j.rU, {
                        to: "/home/user/".concat(a.id),
                        title: a.displayName,
                        target: "_blank"
                    }, I.createElement(me.D2, {
                        image: a.iconUrl || a.thumbnailUrl
                    }))), I.createElement(J.Z, null, I.createElement(En.Z, {
                        className: "d-flex flex-row justify-content-between py-1"
                    }, I.createElement("div", {
                        className: "container p-0"
                    }, I.createElement(B.Z, null, I.createElement(J.Z, {
                        xs: 12,
                        sm: 7,
                        className: "p-1"
                    }, I.createElement(j.rU, {
                        to: "/home/user/".concat(a.id),
                        title: a.displayName,
                        target: "_blank"
                    }, I.createElement(me.Hz, {
                        tag: "h5"
                    }, a.displayName)), I.createElement(vn.Z, {
                        className: "mb-2 text-muted text-truncate",
                        tag: "h6"
                    }, "Joined ", ve()(n.joinedAt).fromNow()), I.createElement(xn.Z, {
                        className: "text-truncate text-secondary"
                    }, (0, ye.wz)({
                        member: n,
                        groupRoles: r
                    }).join(", "))), I.createElement(J.Z, null, I.createElement(me.$, null, I.createElement(le.zx, {
                        onClick: function() {
                            return l(n, (0, ye.H)({
                                member: n,
                                groupRoles: r
                            }), null)
                        }
                    }, I.createElement(le.$1, {
                        width: 20,
                        icon: wn.Iw
                    })))))))))))
                };
            yn.propTypes = {
                member: fe().object.isRequired,
                groupRoles: fe().array.isRequired,
                memberEditCallback: fe().func.isRequired
            };
            const Zn = yn;
            var kn = function(e) {
                var t, n, r, a = e.groupId,
                    o = e.isOpen,
                    i = e.cancelCallback,
                    c = e.isGroupMemberOnly,
                    s = void 0 !== c && c,
                    u = e.memberEditCallback,
                    m = (0, I.useRef)(null),
                    d = (0, I.useState)(""),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = (0, I.useState)(1),
                    v = (0, l.Z)(E, 2),
                    b = v[0],
                    h = v[1],
                    w = (0, de.Nr)(g);
                (0, I.useEffect)((function() {
                    setTimeout((function() {
                        o && null != m && m.current && m.current.focus()
                    }), 300)
                }), [o, m]), (0, I.useEffect)((function() {
                    h(1)
                }), [g]), (0, I.useEffect)((function() {
                    f("")
                }), [o]);
                var x = (0, pe.Vc)({
                        groupId: a
                    }, {
                        skip: !s
                    }),
                    y = x.data,
                    Z = x.isSuccess,
                    k = x.isError,
                    N = x.error,
                    O = (0, pe.Pi)({
                        groupId: a,
                        pageValue: b,
                        searchTerm: w,
                        n: 25
                    }, {
                        skip: "" === w || !o || w.length < 3 || !s
                    }),
                    C = O.data,
                    S = O.error,
                    j = O.isError,
                    A = O.isFetching,
                    T = O.isSuccess,
                    M = (0, re.hi)({
                        pageValue: b,
                        searchTerm: w,
                        n: 25
                    }, {
                        skip: "" === w || !o || w.length < 3 || s
                    }),
                    P = M.data,
                    R = M.error,
                    L = M.isError,
                    U = M.isFetching,
                    q = M.isSuccess;
                return I.createElement(me.Xv, {
                    role: "dialog",
                    isOpen: o,
                    toggle: i,
                    keyboard: !0,
                    autoFocus: !1
                }, I.createElement(me.eb, {
                    tag: "h4",
                    close: I.createElement(oe.Z, {
                        onClick: i
                    }),
                    toggle: i
                }, s ? "Group Members Search" : "Users Search"), I.createElement(me.vc, null, I.createElement(me.T_, null, I.createElement(le.II, {
                    id: "search-product-list",
                    onChange: function(e) {
                        return f(e.target.value)
                    },
                    placeholder: s ? "Search Group Members..." : "Search for users...",
                    ref: m,
                    type: "text",
                    value: g
                }), (j || k || L) && I.createElement("p", {
                    className: "text-center m-5 text-warning h-25"
                }, "Something went wrong with the search, please try again later!", I.createElement("br", null), j && I.createElement("code", null, null == S || null === (t = S.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), k && I.createElement("code", null, null == N || null === (n = N.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), L && I.createElement("code", null, null == R || null === (r = R.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message)), A && I.createElement(me.Um, null, I.createElement("div", {
                    className: "text-center m-5 text-secondary h-25"
                }, I.createElement(ie.Z, null))), !T && !A && !j && s && I.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "Search for members in your group."), T && !A && Z && s && I.createElement(me.Um, null, C.results.map((function(e) {
                    return I.createElement(Zn, {
                        key: e.id,
                        member: e,
                        groupRoles: y,
                        memberEditCallback: u
                    })
                })), 0 === C.results.length && I.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "We couldn't find anything with that search.")), !q && !U && !L && !s && I.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "Search for users on VRChat."), q && I.createElement(me.Um, null, P.results.map((function(e) {
                    return I.createElement(hn, {
                        key: e.id,
                        user: e,
                        groupId: a
                    })
                })), 0 === P.results.length && I.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "We couldn't find anything with that search.")), (T || q) && I.createElement(me.Gz, null, I.createElement(me.IT, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return h(b - 1)
                    },
                    disabled: 1 === b || A || U
                }, I.createElement(le.$1, {
                    icon: ue.A3
                })), I.createElement("span", null, b), I.createElement(me.UV, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return h(b + 1)
                    },
                    disabled: (null == C ? void 0 : C.isLastPage) || (null == P ? void 0 : P.isLastPage) || A || U
                }, I.createElement(le.$1, {
                    icon: se._t
                }))))))
            };
            kn.propTypes = {
                groupId: fe().string,
                isOpen: fe().bool.isRequired,
                cancelCallback: fe().func.isRequired,
                memberEditCallback: fe().func
            };
            const Nn = kn;

            function On(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function In(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? On(Object(n), !0).forEach((function(t) {
                        (0, U.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : On(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Cn = [{
                label: "None",
                value: null
            }, {
                label: "Ascending",
                value: "joinedAt:asc"
            }, {
                label: "Descending",
                value: "joinedAt:desc"
            }];
            const Sn = function(e) {
                var t, n = e.group,
                    r = I.useState(!1),
                    a = (0, l.Z)(r, 2),
                    o = a[0],
                    i = a[1],
                    c = I.useState(!1),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = I.useState(null),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = I.useState(null),
                    v = (0, l.Z)(E, 2),
                    b = v[0],
                    h = v[1],
                    w = I.useState(null),
                    x = (0, l.Z)(w, 2),
                    y = x[0],
                    Z = x[1],
                    k = I.useState(""),
                    N = (0, l.Z)(k, 2),
                    C = N[0],
                    S = (N[1], I.useState(null)),
                    j = (0, l.Z)(S, 2),
                    T = j[0],
                    M = j[1],
                    P = I.useState(null),
                    L = (0, l.Z)(P, 2),
                    U = L[0],
                    z = L[1],
                    G = (0, ne.XC)().data,
                    D = (0, de.pc)(),
                    F = (0, I.useState)([
                        [],
                        []
                    ]),
                    X = (0, l.Z)(F, 2),
                    _ = X[0],
                    J = X[1],
                    B = null == n ? void 0 : n.myMember,
                    $ = (0, I.useState)(0),
                    V = (0, l.Z)($, 2),
                    W = V[0],
                    H = V[1],
                    Y = (0, I.useState)(25),
                    Q = (0, l.Z)(Y, 1)[0],
                    K = (0, pe.Pv)(),
                    ee = (0, l.Z)(K, 2),
                    te = ee[0],
                    re = ee[1],
                    ae = re.data,
                    oe = re.error,
                    ie = re.isLoading,
                    ce = (0, pe.Vc)({
                        groupId: null == n ? void 0 : n.id
                    }),
                    se = ce.data,
                    ue = ce.isFetching,
                    me = (null == ae || null === (t = ae.members) || void 0 === t ? void 0 : t.length) < Q;
                I.useEffect((function() {
                    ge(Q, 0)
                }), []), I.useEffect((function() {
                    var e = (0, q.Z)(_);
                    if (ae) {
                        var t;
                        if (ae.page <= 0 && !C && null === T && null === U && null != n && n.myMember) e[0] = [In(In({}, B), {}, {
                            userId: G.id,
                            user: In(In({}, G), {}, {
                                thumbnailUrl: null !== (t = G.profilePicOverride) && void 0 !== t ? t : G.currentAvatarImageUrl
                            })
                        })].concat((0, q.Z)(ae.members));
                        else e[ae.page] = ae.members;
                        J(e)
                    }
                }), [ae]);
                I.useEffect((function() {}), [C]), I.useEffect((function() {
                    H(0), J([
                        [],
                        []
                    ]), ge(Q, 0)
                }), [T, U]);
                var ge = function(e, t) {
                        te({
                            groupId: n.id,
                            perPage: e,
                            page: t,
                            sort: T,
                            roleId: U
                        }), H(t + 1)
                    },
                    fe = function(e, t, n) {
                        f(e), Z(t), h(n), i(!0)
                    },
                    Ee = R({
                        groupMember: null == n ? void 0 : n.myMember,
                        permission: "group-members-manage"
                    }),
                    ve = R({
                        groupMember: null == n ? void 0 : n.myMember,
                        permission: "group-roles-assign"
                    }),
                    be = R({
                        groupMember: null == n ? void 0 : n.myMember,
                        permission: "group-members-viewall"
                    }),
                    he = function(e) {
                        var t, r = e.memberRank,
                            l = e.member,
                            a = n.memberRank < r,
                            o = l.id === (null == n || null === (t = n.myMember) || void 0 === t ? void 0 : t.id),
                            i = null == n ? void 0 : n.roles.some((function(e) {
                                return !0 === e.isSelfAssignable
                            }));
                        return !!D || (!(!ve && !Ee || !a) || (!(!ve && !Ee || !o) || !(!i || !o)))
                    };
                if (ue) return I.createElement(le.UU, {
                    height: "200px"
                });
                var we = null == _ ? void 0 : _.map((function(e, t) {
                        var r;
                        return null === (r = (0, q.Z)(e)) || void 0 === r || null === (r = r.sort((function(e) {
                            return null === T && null === U && e.userId === n.ownerId ? -1 : 0
                        }))) || void 0 === r || null === (r = r.filter((function(e, t, n) {
                            return n.findIndex((function(t) {
                                return t.userId === e.userId
                            })) === t
                        }))) || void 0 === r ? void 0 : r.map((function(e) {
                            var r, l = null === (r = n.roles) || void 0 === r ? void 0 : r.map((function(t) {
                                var n;
                                return null != e && null !== (n = e.roleIds) && void 0 !== n && n.includes(t.id) ? t.order : 9999
                            })).sort((function(e, t) {
                                return e - t
                            }))[0];
                            return I.createElement(tn, {
                                key: e.id,
                                member: e,
                                isOwner: e.userId === n.ownerId,
                                isEditable: he({
                                    memberRank: l,
                                    member: e
                                }),
                                onEditCallback: function() {
                                    null != e && e.id && fe(e, l, t)
                                },
                                navigate: "/home/user/".concat(e.userId),
                                showView: !1
                            })
                        }))
                    })),
                    xe = [{
                        label: "Everyone",
                        value: null
                    }, {
                        label: "Users with no role",
                        value: ""
                    }].concat(null == se ? void 0 : se.map((function(e) {
                        return {
                            label: e.name,
                            value: e.id
                        }
                    })));
                return I.createElement(I.Fragment, null, I.createElement(le.oI, null, I.createElement("h4", {
                    className: "text-center font-weight-bolder"
                }, "Members ", !Ee && !be && "(Friends only)")), I.createElement(le.Ao, null, I.createElement("div", {
                    className: (0, O.iv)({
                        name: "8osrbx",
                        styles: "background-color:var(--dark);padding:0 20px 20px 20px"
                    })
                }, Ee && I.createElement(le.JX, null, I.createElement("h6", null, "Filters:"), I.createElement(le.X2, {
                    className: "flex-wrap"
                }, I.createElement(jn, {
                    label: "Filter role",
                    onChange: z,
                    options: xe,
                    value: U,
                    className: "mb-2 mx-2"
                }), I.createElement(jn, {
                    label: "Join order",
                    onChange: M,
                    options: Cn,
                    value: T,
                    className: "mb-2 mx-2"
                }))), I.createElement(A.Z, {
                    isOpen: o,
                    toggle: function() {
                        i(!1)
                    }
                }, I.createElement(sn, {
                    groupMember: g,
                    memberRank: null != y ? y : 0,
                    closeCallback: function() {
                        i(!1)
                    },
                    memberListPage: b
                })), Ee && I.createElement("div", {
                    className: "p-2"
                }, I.createElement(le.zx, {
                    onClick: function() {
                        m(!0)
                    }
                }, I.createElement(le.$1, {
                    color: "white",
                    icon: Ae.faMagnifyingGlass
                }), "  Search Group Members")), I.createElement(Nn, {
                    isOpen: u,
                    groupId: n.id,
                    cancelCallback: function() {
                        return m(!1)
                    },
                    memberEditCallback: fe,
                    isGroupMemberOnly: !0
                }), ie ? I.createElement(le.UU, {
                    height: "200px"
                }) : I.createElement(An, null, we), I.createElement("div", {
                    className: "p-2",
                    style: {
                        margin: "20px auto 0",
                        textAlign: "center"
                    }
                }, I.createElement(le.zx, {
                    onClick: function() {
                        ge(Q, W)
                    },
                    disabled: ie || oe || me,
                    loading: ie
                }, oe || me ? "No more members..." : "List More Members")))))
            };
            var jn = (0, a.Z)(le.Lt, {
                    target: "egqvjul1"
                })({
                    name: "1w9pskj",
                    styles: "width:300px;min-width:200px"
                }),
                An = (0, a.Z)("div", {
                    target: "egqvjul0"
                })({
                    name: "rmjg9v",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;>*{width:300px;margin-top:8px;}"
                }),
                Tn = n(61244);
            const Mn = function(e) {
                var t, n, r = e.langs,
                    l = e.tags,
                    a = (0, K.y)().data,
                    o = null !== (t = null == a || null === (n = a.constants) || void 0 === n || null === (n = n.LANGUAGE) || void 0 === n ? void 0 : n.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== t ? t : Q.O,
                    i = null != r ? r : l.filter((function(e) {
                        return e.startsWith("language")
                    })).map((function(e) {
                        var t = e.split("_")[1];
                        return {
                            abbreviation: t.toUpperCase(),
                            title: o[t]
                        }
                    }));
                return I.createElement(qn, null, I.createElement(zn, null, I.createElement(Pn, null, "Languages")), I.createElement(Gn, null, i.length > 0 ? i.map((function(e) {
                    var t, n;
                    return I.createElement(Un, {
                        key: e,
                        title: null !== (t = e.title) && void 0 !== t ? t : o[e]
                    }, null !== (n = e.abbreviation) && void 0 !== n ? n : e.toUpperCase())
                })) : I.createElement("h4", {
                    className: "align-self-center"
                }, "None added")))
            };
            var Pn = (0, a.Z)("h2", {
                    target: "e8rhb6u6"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                Rn = (0, a.Z)("div", {
                    target: "e8rhb6u5"
                })({
                    name: "11po3a3",
                    styles: "display:flex;flex-direction:column;align-items:start;justify-content:start;border-radius:8px;overflow:hidden;background:#2a2e34"
                }),
                Ln = (0, a.Z)("div", {
                    target: "e8rhb6u4"
                })({
                    name: "r0ww0u",
                    styles: "background-color:#181b1f;border:5px solid #252a30;min-width:100px;min-height:100px;width:100px;height:100px;border-radius:50%;margin:10px;display:flex;justify-content:center;align-items:center;transition:transform 0.1s ease-in"
                }),
                Un = (0, a.Z)(Ln, {
                    target: "e8rhb6u3"
                })({
                    name: "77x4h6",
                    styles: "font-size:1.7rem;font-weight:bold;color:#54b5c5"
                }),
                qn = (0, a.Z)(Rn, {
                    target: "e8rhb6u2"
                })({
                    name: "u5t5ke",
                    styles: "flex:1;min-width:350px;min-height:136px"
                }),
                zn = (0, a.Z)(me.JX, {
                    target: "e8rhb6u1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                Gn = (0, a.Z)(zn, {
                    target: "e8rhb6u0"
                })({
                    name: "18clcmv",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto"
                });
            const Dn = function(e) {
                var t = e.links;
                return I.createElement($n, null, I.createElement(Vn, null, I.createElement(Fn, null, "Links")), I.createElement(Wn, null, t.length > 0 ? t.map((function(e) {
                    return I.createElement(Bn, {
                        key: e
                    }, I.createElement(Je.QZ, {
                        url: e,
                        style: {
                            height: "70px",
                            width: "70px"
                        },
                        target: "_blank"
                    }))
                })) : I.createElement("h4", {
                    className: "align-self-center"
                }, "None added")))
            };
            var Fn = (0, a.Z)("h2", {
                    target: "e19ri8nl7"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                Xn = (0, a.Z)("div", {
                    target: "e19ri8nl6"
                })({
                    name: "11po3a3",
                    styles: "display:flex;flex-direction:column;align-items:start;justify-content:start;border-radius:8px;overflow:hidden;background:#2a2e34"
                }),
                _n = (0, a.Z)("div", {
                    target: "e19ri8nl5"
                })({
                    name: "r0ww0u",
                    styles: "background-color:#181b1f;border:5px solid #252a30;min-width:100px;min-height:100px;width:100px;height:100px;border-radius:50%;margin:10px;display:flex;justify-content:center;align-items:center;transition:transform 0.1s ease-in"
                }),
                Jn = (0, a.Z)(_n, {
                    target: "e19ri8nl4"
                })({
                    name: "jrwc5p",
                    styles: ":hover{transform:scale(1.1);cursor:pointer;}"
                }),
                Bn = (0, a.Z)(Jn, {
                    target: "e19ri8nl3"
                })(""),
                $n = (0, a.Z)(Xn, {
                    target: "e19ri8nl2"
                })({
                    name: "u5t5ke",
                    styles: "flex:1;min-width:350px;min-height:136px"
                }),
                Vn = (0, a.Z)(me.JX, {
                    target: "e19ri8nl1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                Wn = (0, a.Z)(Vn, {
                    target: "e19ri8nl0"
                })({
                    name: "18clcmv",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto"
                }),
                Hn = n(87261),
                Yn = n(88233);

            function Qn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Kn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Qn(Object(n), !0).forEach((function(t) {
                        (0, U.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var er = I.lazy((function() {
                return Promise.all([n.e(123), n.e(1541), n.e(4444), n.e(9908), n.e(229), n.e(3294), n.e(527), n.e(4814)]).then(n.bind(n, 40527))
            }));
            const tr = function(e) {
                var t, n, r, a = e.group,
                    i = e.gallery,
                    c = e.justAdded,
                    s = void 0 !== c && c,
                    u = (0, C.I0)(),
                    m = (0, C.v9)((function(e) {
                        var t;
                        return null === (t = e.group) || void 0 === t || null === (t = t.galleries) || void 0 === t ? void 0 : t.isLoading
                    })),
                    d = I.useState(!1),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = I.useState(null),
                    v = (0, l.Z)(E, 2),
                    b = v[0],
                    h = (v[1], I.useState(null)),
                    w = (0, l.Z)(h, 2),
                    x = w[0],
                    y = w[1],
                    Z = I.useState(null),
                    k = (0, l.Z)(Z, 2),
                    N = k[0],
                    S = k[1],
                    j = I.useState(!1),
                    T = (0, l.Z)(j, 2),
                    M = T[0],
                    P = T[1],
                    L = I.useState({
                        name: i.name,
                        description: i.description,
                        membersOnly: i.membersOnly
                    }),
                    q = (0, l.Z)(L, 2),
                    z = q[0],
                    G = q[1],
                    D = I.useState(!1),
                    F = (0, l.Z)(D, 2),
                    X = F[0],
                    J = F[1],
                    B = I.useState(15),
                    H = (0, l.Z)(B, 1)[0],
                    Y = I.useState(1),
                    Q = (0, l.Z)(Y, 2),
                    K = Q[0],
                    te = Q[1],
                    ne = I.useState(!0),
                    re = (0, l.Z)(ne, 2),
                    ae = re[0],
                    oe = re[1],
                    ie = (0, pe.d3)({
                        groupId: a.id,
                        galleryId: i.id,
                        n: H,
                        page: K
                    }),
                    ce = ie.data,
                    me = ie.isLoading,
                    de = ie.isSuccess,
                    ge = (0, pe.zv)(),
                    fe = (0, l.Z)(ge, 2),
                    Ee = fe[0],
                    ve = (fe[1].isLoading, (0, pe.E8)()),
                    be = (0, l.Z)(ve, 2),
                    he = be[0],
                    we = (be[1].isLoading, (0, pe.pI)()),
                    xe = (0, l.Z)(we, 2),
                    ye = xe[0],
                    Ze = xe[1],
                    ke = (Ze.isLoading, Ze.isSuccess),
                    Ne = (0, pe.jP)(),
                    Oe = (0, l.Z)(Ne, 2),
                    Ie = Oe[0];
                Oe[1].isLoading;
                I.useEffect((function() {
                    document.getElementById(i.id) && s && !X && (document.getElementById(i.id).scrollIntoView({
                        behavior: "smooth"
                    }), J(!0))
                })), I.useEffect((function() {
                    ke && P(!1)
                }), [ke]), I.useEffect((function() {
                    de && oe((null == ce ? void 0 : ce.totalCount) >= 100)
                }), [de]);
                var Ce = function(e) {
                    var t = "checkbox" === e.target.getAttribute("type") ? !e.target.checked : e.target.value;
                    G(Kn(Kn({}, z), {}, (0, U.Z)({}, e.target.name, t)))
                };
                if (me) return I.createElement(le.UU, {
                    className: "mt-3",
                    width: "100%",
                    height: "300px"
                });
                var Se = R({
                        groupMember: null == a ? void 0 : a.myMember,
                        permission: "group-galleries-manage"
                    }),
                    je = ce.totalCount,
                    Ae = (K - 1) * H,
                    Te = I.createElement(lr, null, I.createElement(ar, {
                        className: "d-flex flex-row align-items-center justify-content-center",
                        onClick: function() {
                            return te(K - 1)
                        },
                        disabled: 0 === Ae
                    }, I.createElement(le.$1, {
                        icon: ue.A3
                    })), I.createElement("span", null, K, " / ", Math.ceil(je / H), " ", I.createElement("small", null, je > 0 && "(".concat(je, "/").concat(100, ")"))), I.createElement(or, {
                        className: "d-flex flex-row align-items-center justify-content-center",
                        onClick: function() {
                            return te(K + 1)
                        },
                        disabled: Ae + H >= je
                    }, I.createElement(le.$1, {
                        icon: se._t
                    })));
                return I.createElement("div", {
                    className: "my-2",
                    id: i.id
                }, I.createElement(Yn.Z, {
                    imageUrl: x,
                    closeCallback: function() {
                        y(null)
                    },
                    nextCallback: null !== (t = ce.results) && void 0 !== t && t[N + 1] ? function() {
                        y(ce.results[N + 1].imageUrl), S(N + 1)
                    } : null,
                    prevCallback: null !== (n = ce.results) && void 0 !== n && n[N - 1] ? function() {
                        y(ce.results[N - 1].imageUrl), S(N - 1)
                    } : null
                }), I.createElement(A.Z, {
                    isOpen: g,
                    className: (0, O.iv)({
                        name: "1ul0gzp",
                        styles: "max-width:1500px!important"
                    })
                }, I.createElement($.Z, null, I.createElement(er, {
                    isSelector: !0,
                    activeTab: "photos",
                    selectedCallback: function(e) {
                        var t;
                        t = e, Ee({
                            groupId: a.id,
                            galleryId: i.id,
                            fileId: t
                        }), f(!1)
                    },
                    selectedId: null != b ? b : ""
                })), I.createElement(V.Z, null, I.createElement(le.zx, {
                    onClick: function() {
                        f(!1), u((0, ee.b9)())
                    }
                }, "Cancel"))), I.createElement(le.oI, null, I.createElement("h4", null, i.name), I.createElement("span", null, i.description)), I.createElement(le.Ao, null, 0 !== je && Te, M ? I.createElement(le.JX, {
                    className: "w-100"
                }, I.createElement(W.Z, null, "Gallery name", I.createElement(le.II, {
                    value: z.name,
                    name: "name",
                    onChange: Ce,
                    disabled: m,
                    maxLength: 64
                })), " ", I.createElement(W.Z, null, "Gallery description", I.createElement(le.II, {
                    value: z.description,
                    name: "description",
                    onChange: Ce,
                    disabled: m,
                    maxLength: 512
                })), " ", I.createElement(le.X2, null, I.createElement(W.Z, null, "Is this gallery public?", " ", I.createElement(Hn.Z, {
                    type: "checkbox",
                    name: "membersOnly",
                    checked: !z.membersOnly,
                    onChange: Ce,
                    disabled: m
                }))), I.createElement(le.X2, null, I.createElement(le.zx, {
                    expand: !0,
                    onClick: function() {
                        ye({
                            groupId: a.id,
                            galleryId: i.id,
                            data: Kn({}, z)
                        })
                    },
                    disabled: m
                }, "Update"), " ", I.createElement(le.zx, {
                    expand: !0,
                    neutral: !0,
                    disabled: m,
                    onClick: function() {
                        P(!1)
                    }
                }, "Cancel"), " ", I.createElement(le.zx, {
                    expand: !0,
                    danger: !0,
                    disabled: m,
                    onClick: function() {
                        Ie({
                            groupId: a.id,
                            galleryId: i.id,
                            confirm: !0
                        })
                    }
                }, "Delete"))) : I.createElement(I.Fragment, null, I.createElement(nr, null, (null === (r = ce.results) || void 0 === r ? void 0 : r.length) > 0 ? ce.results.map((function(e, t) {
                    return I.createElement(en.Z, {
                        key: e.id,
                        image: e.imageUrl,
                        disableManagement: m,
                        onClick: function() {
                            S(t),
                                function(e) {
                                    y(e)
                                }(e.imageUrl)
                        },
                        showDeleteButton: Se,
                        onDelete: function() {
                            return function(e) {
                                he({
                                    groupId: a.id,
                                    galleryId: i.id,
                                    imageId: e.id
                                })
                            }(e)
                        }
                    })
                })) : I.createElement("p", {
                    className: "m-0"
                }, "There are no pictures here... yet!")), Se && I.createElement(rr, null, I.createElement(le.zx, {
                    className: "m-2",
                    disabled: ae,
                    onClick: function() {
                        f(!0)
                    }
                }, ae ? "Gallery is full" : I.createElement(I.Fragment, null, I.createElement(le.$1, {
                    icon: o.r8
                }), " Post an Image")), I.createElement(le.zx, {
                    neutral: !0,
                    onClick: function() {
                        P(!0)
                    }
                }, I.createElement(le.$1, {
                    icon: _.Kb
                }), " Manage Gallery")))))
            };
            var nr = (0, a.Z)("div", {
                    target: "e5pi12i4"
                })({
                    name: "1kra7du",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;align-items:center;margin:10px 0;width:100%"
                }),
                rr = (0, a.Z)("div", {
                    target: "e5pi12i3"
                })({
                    name: "198unna",
                    styles: "display:flex;flex-direction:row;justify-content:left;align-items:center;width:100%"
                }),
                lr = (0, a.Z)("div", {
                    target: "e5pi12i2"
                })({
                    name: "1vtota4",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-bottom:8px"
                }),
                ar = (0, a.Z)(le.zx, {
                    target: "e5pi12i1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                or = (0, a.Z)(le.zx, {
                    target: "e5pi12i0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                });

            function ir(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function cr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ir(Object(n), !0).forEach((function(t) {
                        (0, U.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ir(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const sr = function(e) {
                var t, n = e.group,
                    a = I.useState({
                        name: "",
                        description: "",
                        membersOnly: !1
                    }),
                    i = (0, l.Z)(a, 2),
                    c = i[0],
                    s = i[1],
                    u = I.useState(!1),
                    m = (0, l.Z)(u, 2),
                    d = m[0],
                    p = m[1],
                    g = (0, pe.Eg)(),
                    f = (0, l.Z)(g, 2),
                    E = f[0],
                    v = f[1],
                    b = v.data,
                    h = v.isLoading,
                    w = v.isSuccess,
                    x = v.isError,
                    y = v.error;
                I.useEffect((function() {
                    w && p(!1)
                }), [w]);
                var Z = function(e) {
                        var t = "checkbox" === e.target.getAttribute("type") ? !e.target.checked : e.target.value;
                        s(cr(cr({}, c), {}, (0, U.Z)({}, e.target.name, t)))
                    },
                    k = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        E(cr({
                                            groupId: n.id
                                        }, c));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    O = null;
                return R({
                    groupMember: null == n ? void 0 : n.myMember,
                    permission: "group-galleries-manage"
                }) && (O = d ? I.createElement(I.Fragment, null, I.createElement(le.oI, null, I.createElement("h4", null, "Create Gallery")), I.createElement(le.Ao, null, I.createElement(W.Z, null, "Gallery name", I.createElement(le.II, {
                    value: c.name,
                    name: "name",
                    onChange: Z,
                    disabled: h,
                    maxLength: 64
                })), " ", I.createElement(W.Z, null, "Gallery description", I.createElement(le.II, {
                    value: c.description,
                    name: "description",
                    onChange: Z,
                    disabled: h,
                    maxLength: 512
                })), " ", I.createElement(le.X2, null, I.createElement(W.Z, null, "Is this gallery public?", " ", I.createElement(Hn.Z, {
                    type: "checkbox",
                    name: "membersOnly",
                    checked: !c.membersOnly,
                    onChange: Z,
                    disabled: h
                }))), I.createElement(le.X2, null, I.createElement(le.zx, {
                    expand: !0,
                    onClick: k,
                    disabled: h,
                    loading: h
                }, "Create"), " ", I.createElement(le.zx, {
                    expand: !0,
                    neutral: !0,
                    onClick: function() {
                        p(!1)
                    },
                    disabled: h
                }, "Cancel")))) : I.createElement(le.zx, {
                    onClick: function() {
                        p(!0)
                    },
                    disabled: h,
                    loading: h
                }, I.createElement(le.$1, {
                    icon: o.r8
                }), " Create Gallery")), I.createElement("div", null, x && I.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == y || null === (t = y.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred while creating the gallery."), O, n.galleries.length > 0 ? n.galleries.map((function(e) {
                    return (e.membersOnly && (null == n ? void 0 : n.myMember) || !e.membersOnly) && I.createElement(tr, {
                        key: e.id,
                        group: n,
                        gallery: e,
                        justAdded: w && (null == b ? void 0 : b.id) === e.id
                    })
                })) : I.createElement(ur, null, "There aren't any galleries here!"))
            };
            var ur = (0, a.Z)(le.oI, {
                    target: "e7nydss0"
                })({
                    name: "es1q9a",
                    styles: "border-radius:6px;text-align:center;font-size:1.2rem;font-weight:bold;justify-content:center;align-items:center;padding:3rem 1rem;margin-top:0.5rem"
                }),
                mr = n(9186),
                dr = n(59923);

            function pr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function gr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? pr(Object(n), !0).forEach((function(t) {
                        (0, U.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const fr = function(e) {
                var t = e.group,
                    n = e.onJoinButtonClick,
                    r = (0, mr.Z)().sortedLocations,
                    a = (0, ne.XC)(),
                    i = a.data,
                    c = a.isLoading,
                    u = (0, pe.w$)({
                        userId: null == i ? void 0 : i.id,
                        groupId: t.id
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    m = u.data,
                    d = u.isLoading,
                    p = I.useState([]),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = (0, pe.dj)({
                        userId: null == i ? void 0 : i.id
                    }),
                    b = v.data,
                    h = v.isLoading,
                    w = (0, K.y)(),
                    x = w.data,
                    y = 0;
                w.isSuccess && (y = x.constants.GROUPS.MAX_JOINED), I.useEffect((function() {
                    var e;
                    if (!d) {
                        var t = null == r ? void 0 : r.map((function(e) {
                            return e.instanceId
                        }));
                        E(null === (e = (0, q.Z)(m)) || void 0 === e || null === (e = e.sort((function(e, t) {
                            var n = e.memberCount;
                            return t.memberCount - n
                        }))) || void 0 === e ? void 0 : e.map((function(e) {
                            return t.includes(e.instanceId) ? gr(gr({}, e), {}, {
                                users: r.find((function(t) {
                                    return t.instanceId === e.instanceId
                                })).users
                            }) : gr(gr({}, e), {}, {
                                users: []
                            })
                        })))
                    }
                }), [m, r]);
                var Z, k = I.useMemo((function() {
                    var e;
                    return null == f || null === (e = f.sort((function(e, t) {
                        var n = e.users,
                            r = t.users;
                        return n.length === r.length ? 0 : n.length > r.length ? -1 : 1
                    }))) || void 0 === e ? void 0 : e.map((function(e) {
                        return I.createElement(dr.Z, {
                            key: "location-".concat(e.location),
                            className: "mb-4",
                            location: e,
                            isForGroup: !0,
                            currentGroup: t
                        })
                    }))
                }), [f]);
                if (d || c || h) return I.createElement(le.UU, {
                    width: "100%",
                    height: "200px"
                });
                var N = t.membershipStatus;
                if (t.memberCount < ht.qH && (b.length < y || i.tagsSet.has("admin_uncap_owned_groups")))
                    if (N === ht.oq.REQUESTED || N === ht.oq.INVITED || N === ht.oq.USER_BLOCKED) Z = null;
                    else if (t.myMember) Z = null;
                else switch (t.joinState) {
                    case ht.wN.OPEN:
                        Z = I.createElement(le.zx, {
                            onClick: n,
                            className: "tw-w-full tw-mb-3"
                        }, I.createElement(le.$1, {
                            icon: o.r8,
                            className: "tw-mr-1"
                        }), "Join this group to view all instances");
                        break;
                    case ht.wN.REQUEST:
                        Z = I.createElement(le.zx, {
                            onClick: n,
                            className: "tw-w-full tw-mb-3"
                        }, I.createElement(le.$1, {
                            icon: s.FU,
                            className: "tw-mr-1"
                        }), "Request to join to view all instances");
                        break;
                    default:
                        Z = null
                }
                return I.createElement(I.Fragment, null, Z, I.createElement(le.oI, null, I.createElement("h4", {
                    className: "text-center"
                }, "Instances")), I.createElement(le.Ao, null, null != k && k.length ? k : I.createElement("p", {
                    className: "text-center"
                }, "Nothing to see here!")))
            };
            var Er = n(73670),
                vr = n(47716);
            const br = function(e) {
                var t = e.group,
                    n = e.user,
                    r = e.errorCallback,
                    a = void 0 === r ? function() {} : r,
                    o = e.mode,
                    i = void 0 === o ? "invite" : o,
                    c = (0, pe.vb)(),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = m.isLoading,
                    p = m.isSuccess,
                    g = m.isError,
                    f = m.error,
                    E = (0, pe.dl)(),
                    v = (0, l.Z)(E, 2),
                    b = v[0],
                    h = v[1],
                    w = h.isLoading,
                    y = h.isSuccess,
                    Z = h.isError,
                    k = h.error,
                    N = d || w,
                    O = g || Z,
                    C = f || k;
                return I.useEffect((function() {
                    O && a(C)
                }), [O, C]), I.createElement("div", {
                    className: "mt-2 mb-2 d-flex flex-column justify-content-center"
                }, I.createElement(vr.Z, {
                    className: "mb-0",
                    userId: n.id,
                    openLinksInNewTab: !0
                }), "invite" === i && I.createElement(le.zx, {
                    disabled: p || N,
                    loading: N,
                    onClick: function() {
                        return u({
                            groupId: t.id,
                            userId: n.id
                        })
                    },
                    color: p ? "success" : void 0
                }, p && I.createElement(le.$1, {
                    icon: x.LE,
                    className: "mx-2"
                }), "Invite", p && "d", " ", n.displayName), "ban" === i && I.createElement(le.zx, {
                    disabled: y || N,
                    loading: N,
                    onClick: function() {
                        return b({
                            groupId: t.id,
                            userId: n.id
                        })
                    },
                    color: y ? "success" : void 0
                }, y && I.createElement(le.$1, {
                    icon: x.LE,
                    className: "mx-2"
                }), "ban", y && "ned", " ", n.displayName))
            };
            var hr = n(25411),
                wr = n(12227);
            const xr = function(e) {
                var t = e.group,
                    n = e.mode,
                    r = void 0 === n ? "invite" : n,
                    a = (0, C.I0)(),
                    o = (0, de.pc)(),
                    i = I.useState(""),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, de.Nr)(s),
                    d = (0, C.v9)((function(e) {
                        return e.search
                    })).userResults,
                    p = I.useState(""),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = o && !1;
                I.useEffect((function() {
                    E(""), "" !== m && a((0, hr.pz)({
                        searchTerm: m,
                        n: wr.En,
                        isInternalVariant: v
                    }))
                }), [m]);
                var b = function(e) {
                    e && E(e.data.error.message)
                };
                return I.createElement(I.Fragment, null, I.createElement(Er.Z, {
                    searchString: u,
                    placeholder: "Search users..."
                }), f && I.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "px-4",
                    message: f
                }), d.map((function(e) {
                    return I.createElement(br, {
                        mode: r,
                        key: e.id,
                        group: t,
                        user: e,
                        errorCallback: b
                    })
                })))
            };
            var yr = n(37599),
                Zr = n(61509);
            const kr = function(e) {
                var t, n, r, a, o, c, s, u, m = e.group,
                    d = (0, C.I0)(),
                    p = I.useState(!1),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = I.useState(!1),
                    b = (0, l.Z)(v, 2),
                    h = b[0],
                    w = b[1],
                    x = I.useState(null),
                    y = (0, l.Z)(x, 2),
                    Z = y[0],
                    k = y[1],
                    N = (0, pe.Sp)({
                        groupId: m.id
                    }),
                    O = N.data,
                    j = N.isError,
                    T = N.isLoading,
                    M = (0, pe.dZ)({
                        groupId: m.id
                    }),
                    P = M.data,
                    L = M.isError,
                    U = M.error,
                    q = M.isLoading,
                    z = (0, pe.dZ)({
                        groupId: m.id,
                        blocked: !0
                    }),
                    G = z.data,
                    D = z.isError,
                    F = z.error,
                    X = (z.isFetching, (0, pe.dt)()),
                    _ = (0, l.Z)(X, 2),
                    J = _[0],
                    B = _[1],
                    V = (B.isLoading, B.isError, B.error, (0, pe.MQ)()),
                    W = (0, l.Z)(V, 2),
                    H = W[0],
                    Q = W[1],
                    K = (Q.isLoading, Q.isError, Q.error, (0, pe.M7)()),
                    ee = (0, l.Z)(K, 2),
                    te = ee[0],
                    ne = ee[1],
                    re = (ne.isLoading, ne.isError),
                    ae = ne.error,
                    ie = (0, pe.tN)(),
                    ce = (0, l.Z)(ie, 2),
                    se = ce[0],
                    ue = ce[1],
                    me = (ue.isLoading, ue.isSuccess),
                    ge = ue.isError,
                    fe = ue.error,
                    Ee = (0, pe.QA)(),
                    ve = (0, l.Z)(Ee, 2),
                    be = ve[0],
                    he = ve[1],
                    we = (he.isLoading, he.isError),
                    xe = he.error,
                    ye = (0, pe.XK)(),
                    Ze = (0, l.Z)(ye, 2),
                    ke = Ze[0],
                    Ne = Ze[1],
                    Oe = (Ne.isLoading, Ne.isError),
                    Ie = Ne.error;
                (0, S.s0)(), (0, de.pc)();
                I.useEffect((function() {
                    me && d(Zr.S.util.updateQueryData("getGroupById", {
                        groupId: m.id
                    }, (function(e) {
                        e.memberCount += 1
                    })))
                }), [me]);
                var Ce = function() {
                    w(!1), k(null)
                };
                R({
                    groupMember: null == m ? void 0 : m.myMember,
                    permission: "group-members-manage"
                });
                return I.createElement("div", null, I.createElement(A.Z, {
                    isOpen: h && !!Z,
                    toggle: Ce
                }, I.createElement(le.oI, null, I.createElement("h4", {
                    className: "text-center text-break"
                }, "Ban ", null == Z ? void 0 : Z.displayName, "?!?!")), I.createElement(le.Ao, null, I.createElement("div", null, I.createElement(le.X2, null, I.createElement(le.zx, {
                    danger: !0,
                    onClick: function() {
                        var e;
                        e = null == Z ? void 0 : Z.id, be({
                            groupId: m.id,
                            userId: e
                        }), Ce()
                    },
                    expand: !0
                }, I.createElement(le.$1, {
                    icon: i.JH
                }), " And stay out!"), " ", I.createElement(le.zx, {
                    neutral: !0,
                    onClick: Ce,
                    expand: !0
                }, "Cancel"))))), I.createElement(A.Z, {
                    isOpen: f
                }, I.createElement(Y.Z, {
                    close: I.createElement(oe.Z, {
                        onClick: function() {
                            E(!1)
                        }
                    })
                }, I.createElement("h4", {
                    className: "m-0"
                }, "Invite Somebody")), I.createElement($.Z, null, I.createElement(xr, {
                    group: m,
                    mode: "invite"
                }))), I.createElement(le.zx, {
                    className: "mb-2",
                    color: "primary",
                    onClick: function() {
                        E(!0)
                    }
                }, "Invite Somebody"), I.createElement(yr.Z, {
                    title: "Join Requests",
                    collapseOpen: !0
                }, we && I.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == xe || null === (t = xe.data) || void 0 === t ? void 0 : t.error.message) || "There was an error banning the user."), L && I.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == U || null === (n = U.data) || void 0 === n ? void 0 : n.error.message) || "There was an error loading the join requests."), re && I.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == ae || null === (r = ae.data) || void 0 === r ? void 0 : r.error.message) || "There was an error rejecting the join request."), ge && I.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == fe || null === (a = fe.data) || void 0 === a ? void 0 : a.error.message) || "There was an error accepting the join request."), I.createElement(le.oI, null, I.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Applicants")), I.createElement(le.Ao, {
                    className: "mb-2"
                }, q ? I.createElement(le.UU, {
                    width: "100%",
                    height: "75px"
                }) : I.createElement(Nr, null, 0 === (null == P ? void 0 : P.length) ? I.createElement("p", {
                    className: "m-0"
                }, "Nobody is waiting to join!") : null, null == P ? void 0 : P.map((function(e) {
                    return I.createElement("div", {
                        className: "mb-2"
                    }, I.createElement(tn, {
                        member: e,
                        navigate: "/home/user/".concat(e.userId),
                        onAccept: function() {
                            var t;
                            t = e.userId, se({
                                groupId: m.id,
                                userId: t
                            })
                        },
                        onBlock: function() {
                            J({
                                groupId: m.id,
                                userId: e.userId
                            })
                        },
                        onReject: function() {
                            var t;
                            t = e.userId, te({
                                groupId: m.id,
                                userId: t
                            })
                        },
                        showView: !1
                    }))
                }))))), I.createElement(yr.Z, {
                    title: "Sent Invites"
                }, j && I.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == U || null === (o = U.data) || void 0 === o ? void 0 : o.error.message) || "There was an error loading the invites."), Oe && I.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == Ie || null === (c = Ie.data) || void 0 === c ? void 0 : c.error.message) || "There was an error deleting the invite."), I.createElement(le.oI, null, I.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Invites")), I.createElement(le.Ao, {
                    className: "mb-2"
                }, T ? I.createElement(le.UU, {
                    width: "100%",
                    height: "75px"
                }) : I.createElement(Nr, null, 0 === (null == O ? void 0 : O.length) ? I.createElement("p", {
                    className: "m-0"
                }, "Nobody has been invited to this group!") : null, null == O ? void 0 : O.map((function(e) {
                    return I.createElement("div", {
                        className: "mb-2"
                    }, I.createElement(tn, {
                        member: e,
                        onDelete: function() {
                            var t;
                            t = e.userId, ke({
                                groupId: m.id,
                                userId: t
                            })
                        },
                        navigate: "/home/user/".concat(e.userId),
                        showView: !1
                    }))
                }))))), I.createElement(yr.Z, {
                    title: "Blocked Requests"
                }, D && I.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == F || null === (s = F.data) || void 0 === s ? void 0 : s.error.message) || "There was an error loading the invites."), Oe && I.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == Ie || null === (u = Ie.data) || void 0 === u ? void 0 : u.error.message) || "There was an error deleting the invite."), I.createElement(le.oI, null, I.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Blocked Applicants")), I.createElement(le.Ao, {
                    className: "mb-2"
                }, T ? I.createElement(le.UU, {
                    width: "100%",
                    height: "75px"
                }) : I.createElement(Nr, null, 0 === (null == G ? void 0 : G.length) ? I.createElement("p", {
                    className: "m-0"
                }, "Nobody has been blocked from joining the group!") : null, null == G ? void 0 : G.map((function(e) {
                    return I.createElement("div", {
                        className: "mb-2"
                    }, I.createElement(tn, {
                        member: e,
                        onUnblock: function() {
                            H({
                                groupId: m.id,
                                userId: e.userId
                            })
                        },
                        navigate: "/home/user/".concat(e.userId),
                        showView: !1
                    }))
                }))))))
            };
            var Nr = (0, a.Z)("div", {
                    target: "e1hocgvc0"
                })({
                    name: "1fx10vo",
                    styles: "display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:space-around"
                }),
                Or = n(87462),
                Ir = n(19933),
                Cr = n(66736),
                Sr = n(6655),
                jr = n(73647),
                Ar = n(68791),
                Tr = n(40067),
                Mr = n(7701),
                Pr = n(50352),
                Rr = n(77708);
            const Lr = function(e) {
                var t, n, r, a, o, i, c, s = e.group,
                    u = (0, C.I0)(),
                    m = (0, C.v9)((function(e) {
                        return e.listingRow.modals.subscriptionCancellation
                    })),
                    d = (0, C.v9)((function(e) {
                        return e.listingRow.modals.rules
                    })),
                    p = (0, C.v9)((function(e) {
                        return e.listingRow.modals.purchaseConfirmation
                    })),
                    g = (0, C.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    f = (0, ne.XC)(),
                    E = f.data,
                    v = f.isLoading,
                    b = I.useState(!0),
                    h = (0, l.Z)(b, 2),
                    w = (h[0], h[1], (0, Cr.mb)({
                        storeId: null == s ? void 0 : s.storeId,
                        hydrateListings: !0
                    }, {
                        skip: !(null != s && s.storeId),
                        refetchOnMountOrArgChange: !0
                    })),
                    x = w.data,
                    y = w.isFetching,
                    Z = w.isError,
                    k = w.error,
                    N = (0, Cr.CE)({
                        receiverId: E.id,
                        sellerId: s.ownerId,
                        active: !0,
                        mostRecent: !0
                    }, {
                        skip: !E || !(null != x && null !== (t = x.listings) && void 0 !== t && t.length),
                        refetchOnMountOrArgChange: !0
                    }),
                    O = N.data,
                    S = void 0 === O ? [] : O,
                    j = N.isLoading,
                    A = N.isError,
                    T = N.error,
                    M = I.useMemo((function() {
                        var e;
                        return null == x || null === (e = x.listings) || void 0 === e ? void 0 : e.map((function(e) {
                            return {
                                listing: e,
                                purchase: S.find((function(t) {
                                    return t.listingId === e.id
                                }))
                            }
                        }))
                    }), [S, x]),
                    P = (0, Sr.En)(),
                    R = P.data,
                    L = void 0 === R ? {
                        economyOnline: !1,
                        plannedOfflineWindowStart: null,
                        plannedOfflineWindowEnd: null,
                        offlineReason: null
                    } : R,
                    U = L.economyOnline,
                    q = L.plannedOfflineWindowStart,
                    z = L.plannedOfflineWindowEnd,
                    G = L.offlineReason,
                    D = P.isFetching,
                    F = P.isError,
                    X = P.error,
                    _ = (0, Sr.v$)({
                        userId: E.id
                    }, {
                        skip: !E || !U,
                        refetchOnMountOrArgChange: !0
                    }),
                    J = _.data,
                    B = _.isLoading,
                    $ = _.isError,
                    V = _.error,
                    W = (0, Sr.pp)({
                        userId: E.id
                    }, {
                        skip: !E,
                        refetchOnMountOrArgChange: !0
                    }),
                    H = W.data,
                    Y = (void 0 === H ? {
                        balance: 0
                    } : H).balance,
                    Q = W.isLoading,
                    K = W.isError,
                    ee = (0, Sr.gI)(),
                    te = (0, l.Z)(ee, 2),
                    re = (te[0], te[1], null == J ? void 0 : J.signed_tos),
                    ae = I.useCallback((function(e) {
                        var t = e.currentUserId,
                            n = e.listingId,
                            r = e.listing,
                            l = e.purchase;
                        u((0, jr.zy)({
                            currentUserId: t,
                            listingId: n,
                            listing: r,
                            purchase: l
                        }))
                    })),
                    oe = I.useCallback((function(e, t) {
                        var n = t.listing,
                            r = t.purchase,
                            l = t.totalPrice,
                            a = t.includesGroupAccess,
                            o = t.includesGroupAccessRemove,
                            i = t.enteredPurchaseQuantity,
                            c = t.selectedPurchaseQuantity,
                            m = t.quantity;
                        u(e ? (0, jr.DF)({
                            listing: n,
                            purchase: r,
                            group: s,
                            totalPrice: l,
                            tiliaTokenBalance: Y,
                            tiliaTosAccepted: re,
                            includesGroupAccess: a,
                            includesGroupAccessRemove: o,
                            quantity: m,
                            enteredPurchaseQuantity: i,
                            selectedPurchaseQuantity: c
                        }) : (0, jr.Li)({
                            listing: n,
                            purchase: r,
                            group: s,
                            totalPrice: l,
                            tiliaTokenBalance: Y,
                            tiliaTosAccepted: re,
                            includesGroupAccess: a,
                            includesGroupAccessRemove: o,
                            quantity: m,
                            enteredPurchaseQuantity: i,
                            selectedPurchaseQuantity: c
                        }))
                    }), [Y, re, s]),
                    ie = I.useState(!1),
                    se = (0, l.Z)(ie, 2),
                    ue = se[0],
                    me = se[1];
                if (v || j || y || D || B || Q) return I.createElement(le.UU, {
                    width: "100%",
                    height: "200px"
                });
                var de = function(e) {
                        return null == S ? void 0 : S.some((function(t) {
                            return t.listingId === e
                        }))
                    },
                    pe = ue ? null == M ? void 0 : M.filter((function(e) {
                        return de(e.listing.id)
                    })) : null == M ? void 0 : M.filter((function(e) {
                        return !de(e.listing.id)
                    })),
                    ge = (0, ye.dj)(q);
                return I.createElement(I.Fragment, null, U && I.createElement(Ir.Z, {
                    isTiliaTOSAccepted: re,
                    returnPath: "/home/group/".concat(s.id, "/store"),
                    termsOfServiceMessage: "Tilia's Terms of Service have been changed. Please accept them before supporting ".concat(s.name, ".")
                }), I.createElement(le.oI, {
                    className: "flex-row justify-content-center align-items-center"
                }, I.createElement("h4", {
                    className: "text-center flex-grow-1"
                }, "Store")), I.createElement(le.Ao, null, F && I.createElement(le.qX, {
                    type: "error",
                    title: "Something strange happened"
                }, I.createElement("p", {
                    className: "m-0"
                }, "Error getting Tilia online status: ", X.status, " ", null !== (n = null === (r = X.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : "Unknown error")), !U && !F && I.createElement(le.qX, {
                    type: "warn",
                    title: "Store Maintenance"
                }, I.createElement(I.Fragment, null, I.createElement("p", {
                    className: "m-0"
                }, "Store Currently Offline: ", null != G ? G : "Unknown Reason"), I.createElement("p", {
                    className: "m-0"
                }, "Projected Service Return: ", (0, ye.M4)(z)))), $ && U && I.createElement(le.qX, {
                    type: "error",
                    title: "Something strange happened"
                }, "Error looking up Tilia ToS acceptance: ", V.status, " ", null !== (a = null === (o = V.data) || void 0 === o ? void 0 : o.error.message) && void 0 !== a ? a : "Unknown error"), A && I.createElement(le.qX, {
                    type: "error",
                    title: "Error loading purchases"
                }, null == T || null === (i = T.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message), Z && I.createElement(le.qX, {
                    type: "error",
                    title: "Error loading listings"
                }, null == k || null === (c = k.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message), ge && U && I.createElement(le.qX, {
                    type: "warn",
                    title: "Store Maintenance"
                }, I.createElement("p", {
                    className: "m-0"
                }, "Starts: ", (0, ye.M4)(q)), I.createElement("p", {
                    className: "m-0"
                }, "Ends: ", (0, ye.M4)(z))), I.createElement(ce.Z, {
                    tabs: [{
                        name: "Available Subscriptions",
                        id: "available",
                        condition: !0
                    }, {
                        name: "Your Subscriptions",
                        id: "your",
                        condition: !0
                    }],
                    selected: ue ? "your" : "available",
                    onChange: function(e) {
                        return me("your" === e)
                    },
                    justify: "left"
                }), null != pe && pe.length ? null == pe ? void 0 : pe.map((function(e, t) {
                    return I.createElement(Ar.Z, (0, Or.Z)({
                        key: e.listing.id
                    }, e, {
                        group: s,
                        tiliaTokenBalance: !K && Y,
                        tiliaTosAccepted: re,
                        index: t,
                        economyOnline: U,
                        onCancel: ae,
                        onPurchase: oe
                    }))
                })) : I.createElement("p", null, ue ? "You have no current subscriptions to this group!" : "There are no subscription options here!"), m.isOpen && I.createElement(Tr.Z, null), d.isOpen && I.createElement(Rr.Z, null), p.isOpen && I.createElement(Mr.Z, {
                    groupData: s
                }), g.isOpen && I.createElement(Pr.Z, null)))
            };
            var Ur = n(28764),
                qr = n(96427),
                zr = n(42137),
                Gr = n(9230);
            const Dr = function(e) {
                var t, n = e.postData,
                    r = e.myMember,
                    a = void 0 === r ? {
                        roleIds: []
                    } : r,
                    o = e.observe,
                    i = void 0 === o ? null : o,
                    c = e.isEditMode,
                    s = void 0 !== c && c,
                    u = e.deleteCallback,
                    m = void 0 === u ? function() {} : u,
                    d = e.groupRoles,
                    p = void 0 === d ? [] : d,
                    g = (0, I.useState)(!1),
                    f = (0, l.Z)(g, 2),
                    E = f[0],
                    v = f[1],
                    b = n.createdAt,
                    h = n.imageUrl,
                    w = void 0 === h ? null : h,
                    x = n.title,
                    y = n.text,
                    Z = void 0 === y ? "" : y,
                    k = n.roleIds,
                    N = void 0 === k ? [] : k,
                    O = n.visibility,
                    C = null !== w && "" !== w,
                    S = a.roleIds,
                    j = (null === (t = Z.match(/[^\n]*\n[^\n]*/gi)) || void 0 === t ? void 0 : t.length) || 0,
                    A = (0, I.useMemo)((function() {
                        if (!E && j > 3) {
                            var e = [];
                            return (0, q.Z)(Z).forEach((function(t, n) {
                                "\n" !== t && "\r" !== t || e.push(n)
                            })), "".concat(Z.substring(0, e[3]), "... ")
                        }
                        return !E && Z.length > 400 ? "".concat(Z.substring(0, 400), "... ") : Z
                    }), [E, Z]),
                    T = (0, I.useMemo)((function() {
                        return !E && (Z.length > 400 || j > 3)
                    }), [E, Z]);
                return I.createElement("div", {
                    className: "d-flex align-items-center"
                }, I.createElement(Xr, {
                    isExpanded: E,
                    ref: i,
                    className: "container-fluid p-0"
                }, I.createElement("div", {
                    className: "row"
                }, I.createElement("div", {
                    className: "col-12 d-flex align-items-center d-sm-none"
                }, I.createElement(Yr, {
                    src: w
                })), I.createElement("div", {
                    className: "".concat(C ? " col-sm-6 col-md-6 col-lg-7 col-xl-7 col-12" : "col-12")
                }, I.createElement(_r, null, I.createElement(Br, null, x), function() {
                    if (0 === N.length) return I.createElement($r, null, I.createElement("div", null, I.createElement(le.$1, {
                        icon: zr.SZ
                    }), " ", (0, ye.h4)(b), I.createElement(le.$1, {
                        className: "ms-2",
                        icon: Gr.iO
                    }), " ", "public" === O ? "Public" : "Group"));
                    var e = (0, q.Z)(N).sort((function(e, t) {
                        return S.includes(t) ? 1 : -1
                    }));
                    return I.createElement($r, null, I.createElement("div", null, I.createElement(le.$1, {
                        icon: zr.SZ
                    }), " ", (0, ye.h4)(b)), I.createElement(Wr, null, I.createElement(le.$1, {
                        icon: qr.Aq
                    }), " Only Seen By", " ", e.map((function(e) {
                        var t = p.find((function(t) {
                                return t.id === e
                            })),
                            n = !(null == t || !t.productId);
                        return t ? I.createElement(Vr, {
                            id: t.id,
                            hasRole: S.includes(t.id)
                        }, n ? I.createElement(I.Fragment, null, I.createElement(le.$1, {
                            icon: Ur.n7,
                            className: "me-1"
                        }), t.name) : t.name) : null
                    }))))
                }(), I.createElement(Jr, {
                    hasImage: C,
                    isExpanded: E
                }, A, I.createElement(Hr, {
                    showReadMore: T,
                    onClick: function() {
                        return v(!0)
                    }
                }, "Read More")))), C && I.createElement("div", {
                    className: "col-12 col-sm-6 col-md-6 col-lg-5 col-xl-5 d-none d-sm-flex align-items-center"
                }, I.createElement(Yr, {
                    src: w
                })))), s && I.createElement("div", {
                    className: "ps-5 pe-4"
                }, I.createElement(Fr, {
                    color: "danger",
                    onClick: function() {
                        return m(n)
                    }
                }, I.createElement(le.$1, {
                    icon: z.$
                }))))
            };
            var Fr = (0, a.Z)(Xe.Z, {
                    target: "ewr2sfy9"
                })({
                    name: "3891qj",
                    styles: "border-radius:50px;color:white"
                }),
                Xr = (0, a.Z)("div", {
                    target: "ewr2sfy8"
                })({
                    name: "m9gplg",
                    styles: "background-color:#0a0a0d;border-radius:10px;color:#bababa;margin-bottom:20px;overflow:hidden;transition:all 0.3s ease-in-out"
                }),
                _r = (0, a.Z)("div", {
                    target: "ewr2sfy7"
                })({
                    name: "1yjx7km",
                    styles: "padding:20px"
                }),
                Jr = (0, a.Z)("p", {
                    target: "ewr2sfy6"
                })({
                    name: "n4pob0",
                    styles: "font-size:18px;flex-grow:1;word-wrap:break-word;white-space:pre-wrap;display:inline-block;overflow:auto;margin-bottom:0;min-height:auto;font-size:16px;margin-top:14px;width:100%"
                }),
                Br = (0, a.Z)("h4", {
                    target: "ewr2sfy5"
                })({
                    name: "1ji90xs",
                    styles: "text-align:start;color:#fff;word-break:normal;font-size:20px"
                }),
                $r = (0, a.Z)("h4", {
                    target: "ewr2sfy4"
                })({
                    name: "1rmpetc",
                    styles: "color:#737372;font-size:12px;font-weight:500;line-height:1.3em;display:inline-block"
                }),
                Vr = (0, a.Z)("div", {
                    target: "ewr2sfy3"
                })("color:#dadada;background-color:#575757;padding:0.4em;border-radius:10rem;display:inline-block;font-size:12px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;font-weight:normal;margin-right:5px;opacity:", (function(e) {
                    return e.hasRole ? 1 : .7
                }), ";"),
                Wr = (0, a.Z)("div", {
                    target: "ewr2sfy2"
                })({
                    name: "1mcu3c1",
                    styles: "line-height:2em;margin-top:4px"
                }),
                Hr = (0, a.Z)("span", {
                    target: "ewr2sfy1"
                })("color:#fff;cursor:pointer;display:", (function(e) {
                    return e.showReadMore ? "inline-block" : "none"
                }), ";"),
                Yr = (0, a.Z)("img", {
                    target: "ewr2sfy0"
                })({
                    name: "k8r326",
                    styles: "max-height:25vh;margin:0 auto"
                });
            var Qr = function(e) {
                var t = e.group,
                    n = e.onChange,
                    r = e.selectedRoles,
                    l = void 0 === r ? [] : r,
                    a = t.roles.filter((function(e) {
                        return !0 === e.isManagementRole && !t.defaultRole
                    })),
                    o = t.roles.filter((function(e) {
                        return !1 === e.isManagementRole && !t.defaultRole
                    })),
                    i = function(e) {
                        return !(null == e || !e.productId)
                    };
                return I.createElement(el, null, I.createElement("h6", null, "Management Roles"), I.createElement("div", {
                    className: "d-flex flex-wrap"
                }, a.map((function(e) {
                    return I.createElement(le.vc, {
                        id: e.id,
                        label: i(e) ? I.createElement(I.Fragment, null, I.createElement(le.$1, {
                            icon: Ur.n7,
                            className: "me-1"
                        }), e.name) : e.name,
                        value: e.id,
                        checked: l.includes(e.id),
                        onChange: function(e) {
                            return n(e)
                        }
                    })
                }))), I.createElement("h6", {
                    className: "mt-2"
                }, "Member Roles"), I.createElement("div", {
                    className: "d-flex flex-wrap"
                }, o.map((function(e) {
                    return I.createElement(le.vc, {
                        id: e.id,
                        label: i(e) ? I.createElement(I.Fragment, null, I.createElement(le.$1, {
                            icon: Ur.n7,
                            className: "me-1"
                        }), e.name) : e.name,
                        value: e.id,
                        checked: l.includes(e.id),
                        onChange: function(e) {
                            return n(e)
                        }
                    })
                }))))
            };
            Qr.propTypes = {
                group: fe().object.isRequired,
                onChange: fe().func.isRequired,
                selectedRoles: fe().array.isRequired
            };
            const Kr = Qr;
            var el = (0, a.Z)("div", {
                target: "e1qh7s420"
            })({
                name: "kq62ql",
                styles: "background-color:#000000;border-radius:5px;padding:16px 20px"
            });
            var tl = I.lazy((function() {
                    return Promise.all([n.e(123), n.e(1541), n.e(4444), n.e(9908), n.e(229), n.e(3294), n.e(527), n.e(4814)]).then(n.bind(n, 40527))
                })),
                nl = (0, a.Z)(le.gx, {
                    target: "e37d6q30"
                })({
                    name: "tz9wht",
                    styles: ">textarea{min-height:250px;}"
                });
            const rl = function(e) {
                var t = e.group,
                    n = (0, C.I0)(),
                    a = I.useState(""),
                    o = (0, l.Z)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = I.useState(""),
                    u = (0, l.Z)(s, 2),
                    m = u[0],
                    d = u[1],
                    p = I.useState("group"),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = I.useState([]),
                    b = (0, l.Z)(v, 2),
                    h = b[0],
                    w = b[1],
                    x = I.useState(null),
                    y = (0, l.Z)(x, 2),
                    Z = y[0],
                    k = y[1],
                    S = I.useState(!0),
                    j = (0, l.Z)(S, 2),
                    T = j[0],
                    M = j[1],
                    P = I.useState(!1),
                    R = (0, l.Z)(P, 2),
                    L = R[0],
                    U = R[1],
                    z = I.useState(""),
                    G = (0, l.Z)(z, 2),
                    D = G[0],
                    F = G[1],
                    X = (0, ne.q7)().data,
                    _ = void 0 === X ? [] : X,
                    J = (0, pe.t$)(),
                    B = (0, l.Z)(J, 2),
                    Y = B[0],
                    Q = B[1].isLoading;
                (0, I.useEffect)((function() {
                    "selectedRoles" !== f && w([])
                }), [f]);
                var K = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var n;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(n = Y({
                                                groupId: t.id,
                                                title: m,
                                                text: i,
                                                imageId: Z,
                                                sendNotification: T,
                                                roleIds: h,
                                                visibility: "public" === f ? "public" : "group"
                                            }).unwrap()).error) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return", console.error("Failed to create post:", n.error));
                                    case 3:
                                        c(""), d(""), k(null), M(!0), F(""), w([]), E("group");
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    te = "" === i.trim() || "" === m.trim(),
                    re = _.includes("permission-user-gallery"),
                    oe = [{
                        label: I.createElement(le.X2, {
                            className: "d-flex flex-column"
                        }, I.createElement(W.Z, {
                            className: "mb-0"
                        }, "Public"), I.createElement("small", null, "Non-Group members can view this post")),
                        selectedLabel: "Public",
                        value: "public"
                    }, {
                        label: I.createElement(le.X2, {
                            className: "d-flex flex-column"
                        }, I.createElement(W.Z, {
                            className: "mb-0"
                        }, "All Group Members"), I.createElement("small", null, "All group members can view this post")),
                        selectedLabel: "Group",
                        value: "group"
                    }, {
                        label: I.createElement(le.X2, {
                            className: "d-flex flex-column"
                        }, I.createElement(W.Z, {
                            className: "mb-0"
                        }, "Selected Roles"), I.createElement("small", null, "Select the group roles who can view this post")),
                        selectedLabel: "Selected Roles",
                        value: "selectedRoles"
                    }];
                return I.createElement(le.JX, {
                    className: "w-100"
                }, I.createElement(A.Z, {
                    isOpen: L,
                    className: (0, O.iv)({
                        name: "1ul0gzp",
                        styles: "max-width:1500px!important"
                    })
                }, I.createElement($.Z, null, I.createElement(tl, {
                    isSelector: !0,
                    activeTab: "photos",
                    selectedCallback: function(e, t) {
                        k(e), F(t), U(!1)
                    },
                    selectedId: null != Z ? Z : null
                })), I.createElement(V.Z, null, I.createElement(le.zx, {
                    onClick: function() {
                        U(!1), n((0, ee.b9)())
                    }
                }, "Cancel"))), I.createElement("div", {
                    className: "mb-3"
                }, I.createElement(W.Z, null, "Post title"), I.createElement(le.II, {
                    type: "text",
                    value: m,
                    onChange: function(e) {
                        return d(e.target.value)
                    },
                    maxLength: 128
                })), I.createElement("div", {
                    className: "mb-3"
                }, I.createElement(W.Z, null, "Post message"), I.createElement(nl, {
                    name: "post",
                    value: i,
                    onChange: function(e) {
                        return c(e.target.value)
                    },
                    maxLength: 2048,
                    required: !0,
                    className: "w-100"
                })), I.createElement("div", {
                    className: "mb-3"
                }, I.createElement(ae.Z, {
                    label: "Send notification",
                    value: "sendNotification",
                    defaultChecked: T,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        M(t)
                    }
                }), I.createElement(H.Z, null, "If on, a notification of this post will be sent to all members of the group!")), I.createElement("div", {
                    className: "mb-3"
                }, I.createElement(W.Z, null, "Who can see this post"), I.createElement(le.Lt, {
                    options: oe,
                    className: "flex-grow-1",
                    value: f,
                    onChange: function(e) {
                        return E(e)
                    },
                    trimToLength: !0
                })), "selectedRoles" === f && I.createElement("div", {
                    className: "mb-3"
                }, I.createElement(Kr, {
                    group: t,
                    onChange: function(e) {
                        var t, n;
                        return null != e && null !== (t = e.target) && void 0 !== t && t.checked ? w([].concat((0, q.Z)(h), [null == e || null === (n = e.target) || void 0 === n ? void 0 : n.value])) : w(h.filter((function(t) {
                            var n;
                            return t !== (null == e || null === (n = e.target) || void 0 === n ? void 0 : n.value)
                        })))
                    },
                    selectedRoles: h
                })), I.createElement(le.X2, {
                    className: "w-100"
                }, re && I.createElement(I.Fragment, null, I.createElement(le.zx, {
                    neutral: !0,
                    expand: !0,
                    disabled: Q,
                    loading: Q,
                    onClick: function() {
                        U(!0)
                    }
                }, "Select an Image"), " "), I.createElement(le.zx, {
                    disabled: te || Q,
                    loading: Q,
                    expand: !0,
                    onClick: K
                }, "Create Post")), " ", I.createElement(Dr, {
                    postData: {
                        text: i,
                        title: m,
                        imageUrl: D,
                        roleIds: h
                    },
                    groupRoles: t.roles
                }))
            };
            var ll = n(78158);
            const al = function(e) {
                var t = e.group,
                    n = e.showBlockModal,
                    r = e.onClose,
                    a = (0, pe.WG)(),
                    o = (0, l.Z)(a, 2),
                    c = o[0],
                    s = o[1].isSuccess;
                return I.useEffect((function() {
                    s && r()
                }), [s]), I.createElement(A.Z, {
                    className: "text-center text-break",
                    isOpen: n,
                    toggle: function() {
                        r()
                    }
                }, I.createElement(le.oI, null, I.createElement("h4", null, "Block ", null == t ? void 0 : t.name, "?")), I.createElement(le.Ao, null, I.createElement("p", null, "Are you sure you want to block ", null == t ? void 0 : t.name, "?", I.createElement("br", null), " You will no longer be able to:", I.createElement("br", null), I.createElement("br", null), "• Join this group.", I.createElement("br", null), "• Get invites from this group. 💔"), I.createElement(le.X2, null, I.createElement(le.zx, {
                    danger: !0,
                    expand: !0,
                    onClick: function() {
                        c({
                            groupId: null == t ? void 0 : t.id
                        })
                    }
                }, I.createElement(le.$1, {
                    icon: i.JH
                }), "   Block"), " ", I.createElement(le.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: r
                }, "Cancel"))))
            };
            const ol = function() {
                return I.createElement(I.Fragment, null, I.createElement(le.oI, {
                    className: "text-center"
                }, I.createElement("h2", null, "You've Blocked this Group!")), I.createElement(le.Ao, {
                    className: "text-center"
                }, "You won't get any invites from this group, and you can't join it.", I.createElement("br", null), I.createElement("br", null), "If you want to join this group or get invites from it, you have to unblock it first."))
            };
            var il = n(9970);
            var cl = function(e) {
                var t = e.group,
                    n = e.currentUser,
                    r = e.targetUser,
                    l = e.onAccept,
                    a = e.onCancel,
                    o = e.isLoading,
                    i = t.transferTargetId === (null == n ? void 0 : n.id),
                    c = (null == t ? void 0 : t.ownerId) === (null == n ? void 0 : n.id);
                return I.createElement(ul, null, o ? I.createElement(le.UU, {
                    width: "100%",
                    height: "30px",
                    className: "mt-4"
                }) : I.createElement(le.X2, {
                    className: "tw-justify-between"
                }, I.createElement(le.JX, {
                    className: "gap-1"
                }, I.createElement(le.X2, null, I.createElement(le.$1, {
                    className: "tw-mt-[8px]",
                    icon: f.qm,
                    width: 20
                }), i ? I.createElement("span", {
                    className: "tw-mt-[6px]"
                }, I.createElement(j.rU, {
                    to: "/home/user/".concat(r.id)
                }, r.displayName), " has initiated a transfer of ownership to you") : I.createElement("span", {
                    className: "tw-mt-[6px]"
                }, c ? "You have initiated an ownership transfer to " : "Ownership transfer has been initiated to ", I.createElement(j.rU, {
                    to: "/home/user/".concat(r.id)
                }, r.displayName)))), I.createElement(le.JX, {
                    className: "gap-1"
                }, I.createElement(le.X2, {
                    className: "tw-gap-[12px]"
                }, i && I.createElement(le.zx, {
                    success: !0,
                    onClick: function() {
                        return l()
                    }
                }, I.createElement(le.$1, {
                    icon: x.LE
                }), "  Accept"), I.createElement(le.zx, {
                    danger: !0,
                    onClick: function() {
                        return a()
                    }
                }, I.createElement(le.$1, {
                    icon: il.EO
                }), " ", i ? "Decline" : "Cancel")))))
            };
            cl.propTypes = {
                group: fe().object.isRequired,
                currentUser: fe().object.isRequired,
                targetUser: fe().object.isRequired,
                onCancel: fe().func.isRequired,
                inAccept: fe().func,
                isLoading: fe().bool
            };
            const sl = cl;
            var ul = (0, a.Z)("div", {
                    target: "ean9tdl0"
                })({
                    name: "1sccrd7",
                    styles: "display:flex;flex-direction:column;background-color:#252A30;margin-top:10px;margin-bottom:10px;border-radius:3px;padding:10px;border-left:3px solid #252A30"
                }),
                ml = n(5276),
                dl = n(84090);
            var pl = function(e) {
                var t = e.group,
                    n = void 0 === t ? null : t,
                    r = e.isEditMode,
                    a = (0, I.useState)(1),
                    o = (0, l.Z)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = (0, I.useState)(!1),
                    u = (0, l.Z)(s, 2),
                    m = u[0],
                    d = u[1],
                    p = (0, I.useState)(!1),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = (0, I.useState)(!1),
                    b = (0, l.Z)(v, 2),
                    h = b[0],
                    w = b[1],
                    x = n.id,
                    y = n.roles,
                    Z = n.myMember,
                    k = 10,
                    N = Math.ceil((i + 1) / k),
                    O = (0, pe.Aw)(),
                    C = (0, l.Z)(O, 2),
                    S = C[0],
                    j = C[1],
                    A = j.isLoading,
                    T = j.isSuccess,
                    M = (0, ml.Y)({
                        rootMargin: "50px 0px",
                        onEnter: function(e) {
                            (0, e.unobserve)(), c(i + 1)
                        }
                    }),
                    P = M.observe,
                    R = (0, ml.Y)({
                        rootMargin: "0px 0px",
                        onEnter: function(e) {
                            var t = e.scrollDirection,
                                n = e.unobserve;
                            "down" === t.vertical && (n(), c(i - 1))
                        }
                    }).observe,
                    L = (0, pe._n)({
                        pageValue: i - 1,
                        n: k,
                        groupId: x,
                        publicOnly: !Z
                    }, {
                        skip: 1 === i,
                        refetchOnMountOrArgChange: !0
                    }),
                    U = (0, pe._n)({
                        pageValue: i,
                        n: k,
                        groupId: x,
                        publicOnly: !Z
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    z = (0, pe._n)({
                        pageValue: i + 1,
                        n: k,
                        groupId: x,
                        publicOnly: !Z
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    G = (0, I.useMemo)((function() {
                        var e = new Array(k * (N + 1)).fill(null);
                        return (0, q.Z)(new Set([L.data, U.data, z.data])).map((function(t) {
                            return null != t && t.posts ? e.splice.apply(e, [t.offset, t.posts.length].concat((0, q.Z)(t.posts))) : []
                        })), e.filter((function(e) {
                            return null !== e
                        }))
                    }), [k, L.data, U.data, z.data]);
                (0, I.useEffect)((function() {
                    d(G.some((function(e) {
                        return null !== e
                    })))
                }), [G]), (0, I.useEffect)((function() {
                    T && E(!1)
                }), [T]);
                var D = function(e) {
                        w(e), E(!0)
                    },
                    F = (0, I.useMemo)((function() {
                        return m ? G.map((function(e, t) {
                            return null !== e ? I.createElement("div", {
                                key: e.id
                            }, I.createElement(Dr, {
                                myMember: Z,
                                postData: e,
                                observe: t === G.length - 1 ? P : 0 === t && 1 !== i ? R : null,
                                isEditMode: r,
                                deleteCallback: D,
                                groupRoles: y
                            })) : null
                        })) : null
                    }), [G, m]);
                return m ? I.createElement("div", {
                    className: "py-4"
                }, I.createElement(dl.Z, {
                    isOpen: f,
                    bodyText: "Are you sure you want to delete this post?",
                    cancelCallback: function() {
                        return E(!1)
                    },
                    confirmCallback: function() {
                        return S({
                            groupId: x,
                            postId: h.id
                        })
                    },
                    isLoading: A
                }), I.createElement(El, null, I.createElement(bl, null, I.createElement(vl, null, "Posts")), I.createElement(hl, null, I.createElement(fl, null, I.createElement("div", {
                    className: "col"
                }, F))))) : null
            };
            pl.propTypes = {};
            const gl = pl;
            var fl = (0, a.Z)("div", {
                    target: "emafa4s4"
                })({
                    name: "1s65yl6",
                    styles: "max-height:450px;margin-top:15px;margin-bottom:10px;overflow:auto"
                }),
                El = (0, a.Z)("div", {
                    target: "emafa4s3"
                })({
                    name: "11po3a3",
                    styles: "display:flex;flex-direction:column;align-items:start;justify-content:start;border-radius:8px;overflow:hidden;background:#2a2e34"
                }),
                vl = (0, a.Z)("h2", {
                    target: "emafa4s2"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                bl = (0, a.Z)(me.JX, {
                    target: "emafa4s1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                hl = (0, a.Z)(bl, {
                    target: "emafa4s0"
                })({
                    name: "18clcmv",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto"
                });
            const wl = function(e) {
                var t, n, r, a = e.group,
                    o = (void 0 === a ? null : a).id,
                    i = (0, S.s0)(),
                    c = I.useState(0),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = I.useState(!1),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = (0, pe.V3)({
                        groupId: o,
                        perPage: 51,
                        offset: u
                    }),
                    v = E.data,
                    b = E.isLoading,
                    h = E.isError,
                    w = (null == v ? void 0 : v.length) > 50,
                    x = (0, pe.Rx)(),
                    y = (0, l.Z)(x, 2),
                    Z = y[0],
                    k = y[1],
                    N = k.error,
                    O = k.isSuccess,
                    C = k.isError,
                    j = k.isLoading,
                    A = null !== (t = null == v ? void 0 : v.filter((function(e) {
                        return !!e.user
                    }))) && void 0 !== t ? t : [],
                    T = b ? I.createElement(xl, {
                        height: "130px"
                    }) : I.createElement(I.Fragment, null, null != A && A.length ? I.createElement(yl, null, null == A ? void 0 : A.slice(0, 50).map((function(e) {
                        return I.createElement(tn, {
                            key: e.id,
                            member: e,
                            onDelete: function() {
                                Z({
                                    groupId: e.groupId,
                                    userId: e.userId
                                })
                            },
                            deleteButtonTitle: "Unban ".concat(e.user.displayName),
                            disableManagement: j,
                            onClick: function() {
                                i("/home/user/".concat(e.userId))
                            },
                            showView: !1
                        })
                    }))) : I.createElement("p", {
                        className: "text-center"
                    }, "Nobody is banned from this group. Everyone's on their best behavior!"));
                return I.createElement(I.Fragment, null, I.createElement(Nn, {
                    isOpen: g,
                    cancelCallback: function() {
                        return f(!1)
                    },
                    groupId: o,
                    isGroupMemberOnly: !1
                }), I.createElement(le.zx, {
                    className: "mb-2",
                    color: "primary",
                    onClick: function() {
                        f(!0)
                    }
                }, "Ban Somebody"), I.createElement(le.oI, null, I.createElement("h4", {
                    className: "text-center"
                }, "Banned Users")), I.createElement(le.Ao, null, h && I.createElement(le.qX, {
                    type: "error",
                    title: "Something went wrong"
                }, "We couldn't load the list of banned users. Please try again later!"), O && I.createElement(le.qX, {
                    slim: !0,
                    type: "success"
                }, "User unbanned. They can now be invited back in if you like."), C && I.createElement(le.qX, {
                    type: "error",
                    title: "Failed to unban user"
                }, null !== (n = null === (r = N.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : N.data.error), T, I.createElement(Zl, null, I.createElement(kl, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u - 50)
                    },
                    disabled: b || 0 === u
                }, I.createElement(le.$1, {
                    icon: ue.A3
                })), I.createElement(Nl, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u + 50)
                    },
                    disabled: b || !w
                }, I.createElement(le.$1, {
                    icon: se._t
                })))))
            };
            var xl = (0, a.Z)(le.UU, {
                    target: "eqx7h3n4"
                })({
                    name: "2cp9od",
                    styles: "margin:8px"
                }),
                yl = (0, a.Z)("div", {
                    target: "eqx7h3n3"
                })({
                    name: "j9stxx",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;>*{width:300px;margin:8px;}"
                }),
                Zl = (0, a.Z)("div", {
                    target: "eqx7h3n2"
                })({
                    name: "1vtota4",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-bottom:8px"
                }),
                kl = (0, a.Z)(le.zx, {
                    target: "eqx7h3n1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                Nl = (0, a.Z)(le.zx, {
                    target: "eqx7h3n0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                Ol = n(37024);
            const Il = function(e) {
                var t = e.group,
                    n = e.event,
                    r = (e.isEvents, e.isAdmin),
                    l = void 0 !== r && r;
                return I.createElement(le.JX, {
                    className: "tw-mb-4"
                }, I.createElement(le.oI, null, I.createElement("h4", null, "Upcoming Event")), I.createElement(le.Ao, {
                    className: "tw-items-center"
                }, !n && I.createElement("p", {
                    className: "align-self-center tw-mb-5 tw-text-placeholder-text"
                }, "No upcoming or ongoing events"), n ? I.createElement(Ol.ZP, {
                    event: n,
                    className: "tw-mb-5"
                }) : null, n && I.createElement(j.rU, {
                    to: "/home/group/".concat(t.id, "/events"),
                    className: "tw-w-full"
                }, I.createElement(le.zx, {
                    neutral: !0
                }, "See All Events")), l && !n && I.createElement(j.rU, {
                    to: "/home/group/".concat(t.id, "/events"),
                    className: "tw-w-full"
                }, I.createElement(le.zx, {
                    primary: !0
                }, "Create Event"))))
            };
            var Cl = n(88081),
                Sl = n(75727),
                jl = n(24752),
                Al = n(29841),
                Tl = [{
                    key: 0,
                    label: "All",
                    value: "ALL"
                }, {
                    key: 1,
                    label: "Upcoming",
                    value: "UPCOMING"
                }, {
                    key: 2,
                    label: "Past",
                    value: "PAST"
                }, {
                    key: 3,
                    label: "Ongoing",
                    value: "ONGOING"
                }],
                Ml = [{
                    key: 0,
                    label: "Newest First",
                    value: "NEWEST"
                }, {
                    key: 1,
                    label: "Oldest First",
                    value: "OLDEST"
                }];
            const Pl = function(e) {
                var t, n = e.onSearchUpdate,
                    r = void 0 === n ? function() {} : n,
                    a = e.onDisplayStateChange,
                    o = void 0 === a ? function() {} : a,
                    i = e.onOrderChange,
                    c = void 0 === i ? function() {} : i,
                    s = e.gridToggle,
                    u = e.hideSearch,
                    m = void 0 !== u && u,
                    d = I.useState(""),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = I.useState("UPCOMING"),
                    v = (0, l.Z)(E, 2),
                    b = v[0],
                    h = v[1],
                    w = I.useState("NEWEST"),
                    x = (0, l.Z)(w, 2),
                    y = x[0],
                    Z = x[1],
                    k = function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        f(n), r(n)
                    };
                return I.createElement(le.X2, {
                    className: (0, O.cx)("tw-@container tw-w-full tw-flex-wrap tw-gap-2 tw-z-20", m && "tw-justify-between")
                }, I.createElement(le.X2, {
                    className: (0, O.cx)("tw-gap-2 tw-flex-wrap", !m && "@sm:tw-flex-1 tw-w-full")
                }, I.createElement(le.Lt, {
                    label: "Display",
                    options: Tl,
                    value: b,
                    onChange: function(e) {
                        h(e), o(e)
                    }
                }), I.createElement(le.Lt, {
                    label: "Order",
                    options: Ml,
                    value: y,
                    onChange: function(e) {
                        Z(e), c(e)
                    }
                })), I.createElement(le.X2, {
                    className: (0, O.cx)("tw-gap-2 tw-justify-end", !m && "@sm:tw-flex-1 tw-w-full", m && "tw-flex-none")
                }, !m && I.createElement(le.II, {
                    className: "tw-w-full @sm:tw-max-w-[360px]",
                    type: "text",
                    placeholder: "Search by event name or url",
                    value: g,
                    onChange: k,
                    onKeyDown: (t = k, function(e) {
                        "Enter" === e.key && (e.preventDefault(), t(e))
                    })
                }), s && I.createElement(le.zx, {
                    className: "tw-w-9 tw-h-10",
                    onClick: function() {
                        s()
                    }
                }, I.createElement(le.$1, {
                    icon: Al.QR
                }))))
            };

            function Rl(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ll(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Rl(Object(n), !0).forEach((function(t) {
                        (0, U.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rl(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ul = (0, I.lazy)((function() {
                return Promise.resolve().then(n.bind(n, 41568))
            }));
            const ql = function(e) {
                var t = e.group,
                    n = e.isCreate,
                    r = void 0 !== n && n,
                    a = (0, de.Tu)(),
                    o = a.user,
                    i = a.isFetching,
                    c = (0, de.pc)() && !1,
                    s = I.useState(!1),
                    u = (0, l.Z)(s, 2),
                    m = u[0],
                    d = u[1],
                    p = I.useState(r),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = I.useState(!1),
                    b = (0, l.Z)(v, 2),
                    h = b[0],
                    w = b[1],
                    x = I.useState(jl.P.CREATE),
                    y = (0, l.Z)(x, 2),
                    Z = y[0],
                    k = y[1],
                    N = I.useState(null),
                    C = (0, l.Z)(N, 2),
                    S = C[0],
                    j = C[1],
                    A = I.useState("NEWEST"),
                    T = (0, l.Z)(A, 2),
                    M = T[0],
                    L = T[1],
                    U = I.useState("UPCOMING"),
                    q = (0, l.Z)(U, 2),
                    z = q[0],
                    G = q[1],
                    D = R({
                        groupMember: null == t ? void 0 : t.myMember,
                        permission: "group-calendar-manage"
                    }),
                    F = P({
                        group: t,
                        groupMember: null == t ? void 0 : t.myMember
                    }),
                    X = D || F,
                    _ = I.useState(ve()()),
                    J = (0, l.Z)(_, 2),
                    B = J[0],
                    $ = J[1],
                    V = I.useMemo((function() {
                        switch (z) {
                            case "UPCOMING":
                                return {
                                    after: B.toISOString()
                                };
                            case "PAST":
                                return {
                                    before: B.toISOString()
                                };
                            case "ONGOING":
                                return {
                                    live: !0
                                };
                            default:
                                return {}
                        }
                    }), [z, B]),
                    W = I.useMemo((function() {
                        return "OLDEST" === M ? {
                            sort: "startTime_descending"
                        } : {
                            sort: "startTime_ascending"
                        }
                    }), [M]),
                    H = (0, Cl.Is)(Ll(Ll({
                        ownerId: t.id
                    }, V), W), {
                        skip: !t.id
                    }),
                    Y = H.data,
                    Q = H.hasNextPage,
                    K = H.fetchNextPage,
                    ee = H.isLoading,
                    te = H.isFetching,
                    ne = I.useMemo((function() {
                        return ((null == Y ? void 0 : Y.pages) || []).flatMap((function(e) {
                            return e.results
                        })).filter((function(e) {
                            return !e.deletedAt || c
                        }))
                    }), [Y, c]),
                    re = function() {
                        E(!1), j(null), k(jl.P.CREATE)
                    },
                    ae = function(e) {
                        j(e), E(!0), k(jl.P.EDIT)
                    },
                    oe = function(e) {
                        j(e), E(!0), k(jl.P.REVIVE)
                    },
                    ie = function(e) {
                        j(e), w(!0), k(jl.P.DELETE)
                    },
                    ce = ee || i || !Y || !o;
                return I.createElement(I.Fragment, null, I.createElement("div", {
                    className: "tw-py-4"
                }, X && I.createElement(le.zx, {
                    "aria-label": "Create Event",
                    className: "tw-mb-4",
                    onClick: function() {
                        E(!0)
                    }
                }, "+ Create Event"), I.createElement(zl, null, I.createElement(Dl, null, I.createElement(Gl, null, "Events")), I.createElement(Fl, {
                    className: "tw-flex-col tw-gap-5 tw-items-center tw-pt-5"
                }, I.createElement(Pl, {
                    hideSearch: !0,
                    gridToggle: function() {
                        d(!m)
                    },
                    onDisplayStateChange: function(e) {
                        e !== z && $(ve()()), G(e)
                    },
                    onOrderChange: function(e) {
                        L(e)
                    }
                }), ce && I.createElement(le.UU, null), !ce && (null != ne && ne.length ? I.createElement(le.JX, {
                    className: (0, O.cx)("tw-@container tw-w-full tw-flex-wrap tw-gap-4", m && "tw-flex-row")
                }, ne.map((function(e) {
                    return I.createElement(Ol.ZP, {
                        key: e.id,
                        event: e,
                        isGrid: m,
                        onEditCallback: ae,
                        onDeleteCallback: ie,
                        onReviveCallback: oe,
                        isGroupAdmin: X
                    })
                }))) : I.createElement("div", null, "No events found")), !(null == ne || !ne.length) && I.createElement(le.zx, {
                    onClick: K,
                    disabled: !Q || te
                }, te ? "Loading More…" : Q ? "Load More…" : "That's all of them!")))), I.createElement(le.u_, {
                    title: Z.label,
                    isVisible: f,
                    onClose: re,
                    className: "tw-w-full",
                    slim: !0,
                    width: "100%"
                }, I.createElement(I.Suspense, {
                    fallback: I.createElement("div", null, "Loading...")
                }, I.createElement(Ul, {
                    event: S || void 0,
                    isEditMode: "edit" === Z.value,
                    isReviveMode: "revive" === Z.value,
                    group: t,
                    isGroupAdmin: X,
                    closeModalCallback: re
                }))), S && "delete" === Z.value && I.createElement(Sl.Z, {
                    event: S,
                    isOpen: h,
                    onCloseCallBack: function() {
                        w(!1), j(null), k(jl.P.CREATE)
                    }
                }))
            };
            var zl = (0, a.Z)("div", {
                    target: "e1bz3ytt3"
                })({
                    name: "144akkd",
                    styles: "display:flex;flex-direction:column;align-items:start;justify-content:start;border-radius:8px;background:#2a2e34"
                }),
                Gl = (0, a.Z)("h2", {
                    target: "e1bz3ytt2"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                Dl = (0, a.Z)(le.JX, {
                    target: "e1bz3ytt1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                Fl = (0, a.Z)(Dl, {
                    target: "e1bz3ytt0"
                })({
                    name: "j2vksd",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;display:flex;justify-content:space-around;height:auto!important"
                });
            const Xl = function() {
                var e, t, n, a = I.useState(!1),
                    k = (0, l.Z)(a, 2),
                    P = k[0],
                    U = k[1],
                    q = I.useState(!1),
                    z = (0, l.Z)(q, 2),
                    G = z[0],
                    D = z[1],
                    F = I.useState(!1),
                    X = (0, l.Z)(F, 2),
                    _ = X[0],
                    J = X[1],
                    B = I.useState(!1),
                    $ = (0, l.Z)(B, 2),
                    V = $[0],
                    W = $[1],
                    H = I.useState(!1),
                    Y = (0, l.Z)(H, 2),
                    Q = Y[0],
                    ee = Y[1],
                    ae = I.useState(!1),
                    oe = (0, l.Z)(ae, 2),
                    ie = oe[0],
                    se = oe[1],
                    ue = I.useState(!1),
                    me = (0, l.Z)(ue, 2),
                    ge = me[0],
                    fe = me[1],
                    Ee = I.useState(!1),
                    ve = (0, l.Z)(Ee, 2),
                    be = ve[0],
                    he = ve[1],
                    we = I.useState(!1),
                    xe = (0, l.Z)(we, 2),
                    ye = xe[0],
                    Ze = xe[1],
                    ke = (0, ne.q7)().data,
                    Ne = void 0 === ke ? [] : ke,
                    Oe = (0, C.I0)(),
                    Ie = (0, K.y)(),
                    Ce = Ie.data,
                    Se = Ie.isLoading,
                    je = 0,
                    Ae = 0;
                Ie.isSuccess && (je = Ce.constants.GROUPS.MAX_JOINED, Ae = Ce.constants.GROUPS.MAX_JOINED_PLUS), Ne.includes("permission-extra-group-count") && (je = Math.max(je, Ae || 0));
                var Te = (0, S.UO)().groupId,
                    Me = (0, ne.XC)().data,
                    Pe = (0, pe.r5)({
                        groupId: Te,
                        purpose: "group"
                    }),
                    Re = Pe.data,
                    Le = Pe.isSuccess,
                    Ue = Pe.isFetching,
                    qe = Pe.isError,
                    ze = Pe.error,
                    Ge = (0, de.pc)(),
                    De = (0, pe.dj)({
                        userId: null == Me ? void 0 : Me.id
                    }),
                    Fe = De.data,
                    Xe = De.isLoading,
                    _e = (0, pe.xI)(),
                    Je = (0, l.Z)(_e, 2),
                    Be = Je[0],
                    $e = Je[1],
                    Ve = $e.isLoading,
                    He = $e.isError,
                    Ye = $e.error,
                    Qe = (0, pe.i2)(),
                    Ke = (0, l.Z)(Qe, 2),
                    et = Ke[0],
                    tt = Ke[1].isLoading,
                    nt = (0, pe.MQ)(),
                    rt = (0, l.Z)(nt, 2),
                    lt = rt[0],
                    at = rt[1].isLoading,
                    ot = (0, pe.DU)(),
                    it = (0, l.Z)(ot, 2),
                    ct = it[0],
                    st = it[1],
                    ut = st.isLoading,
                    mt = st.isError,
                    dt = st.error,
                    pt = st.isSuccess,
                    gt = null !== (null == Re ? void 0 : Re.deletedAt),
                    ft = (0, Nt.Ul)({
                        userId: null == Re ? void 0 : Re.ownerId,
                        groupId: null == Re ? void 0 : Re.id,
                        active: !0
                    }, {
                        skip: !Re
                    }),
                    Et = (ft.data, ft.isLoading),
                    vt = (0, Cl.mW)({
                        ownerId: Te
                    }, {
                        skip: !Te
                    }),
                    bt = vt.data;
                vt.isLoading;
                I.useEffect((function() {
                    Re && !Ue && D(!0)
                }), [Re, Ue]), I.useEffect((function() {
                    pt && fe(!1)
                }), [pt]);
                var wt, xt, yt = I.useMemo((function() {
                        return !!G && (null !== Re.transferTargetId || void 0 !== Re.transferTargetId)
                    }), [G]),
                    Zt = (null == Re ? void 0 : Re.transferTargetId) === (null == Me ? void 0 : Me.id) ? null == Re ? void 0 : Re.ownerId : null == Re ? void 0 : Re.transferTargetId,
                    kt = (0, re.GR)(Zt, {
                        skip: null == Re || Ue || !yt || !Zt,
                        refetchOnMountOrArgChange: !0
                    }),
                    Ot = kt.data,
                    It = kt.isFetching,
                    Ct = kt.isError,
                    St = kt.error,
                    jt = (0, pe.HT)(),
                    At = (0, l.Z)(jt, 2),
                    Tt = At[0],
                    Mt = At[1],
                    Pt = Mt.data,
                    Rt = (Mt.isFetching, Mt.isError),
                    Lt = Mt.error,
                    Ut = (0, pe.rq)(),
                    qt = (0, l.Z)(Ut, 2),
                    zt = qt[0],
                    Gt = qt[1],
                    Dt = Gt.data,
                    Ft = (Gt.isFetching, Gt.isError),
                    Xt = (Gt.error, function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var t, n;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return he(!0), e.prev = 1, e.next = 4, Tt({
                                            groupId: Re.id,
                                            transferTargetId: Re.transferTargetId
                                        }).unwrap();
                                    case 4:
                                        Rt && Oe((0, te.d)({
                                            title: "Group Transfer Error",
                                            icon: y.eH,
                                            message: "".concat(null == Lt || null === (t = Lt.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), he(!1)), !Rt && Pt && Oe((0, te.d)({
                                            title: "Group Transfer Accepted",
                                            icon: Z.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }), he(!1)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Oe((0, te.d)({
                                            title: "Group Transfer Error",
                                            icon: y.eH,
                                            message: "".concat(null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), he(!1));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 8]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()),
                    _t = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var t, n;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return he(!0), e.prev = 1, e.next = 4, zt({
                                            groupId: Re.id,
                                            transferTargetId: null == Re ? void 0 : Re.transferTargetId
                                        }).unwrap();
                                    case 4:
                                        Ft && Oe((0, te.d)({
                                            title: "Cancel Group Transfer Error",
                                            icon: y.eH,
                                            message: "".concat(null == Dt || null === (t = Dt.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), he(!1)), !Ft && Dt && Oe((0, te.d)({
                                            title: "Cancel Group Transfer Success",
                                            icon: Z.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }), he(!1)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Oe((0, te.d)({
                                            title: "Cancel Group Transfer Error",
                                            icon: y.eH,
                                            message: "".concat(null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), he(!1));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 8]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                if (!Re || Ue || Et || at || tt || Ve || Xe || Se) return (ie || Q) && (ee(!1), se(!1)), yt && !Ot || It ? I.createElement(le.UU, {
                    width: "100%",
                    height: "200px",
                    className: "mt-4"
                }) : !Ct || qe || It ? qe ? I.createElement(I.Fragment, null, I.createElement(le.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: "Something went wrong with getting this group! (".concat(null == ze || null === (wt = ze.data) || void 0 === wt || null === (wt = wt.error) || void 0 === wt ? void 0 : wt.message, ")")
                }), I.createElement("div", {
                    className: "text-center"
                }, I.createElement(j.rU, {
                    to: "/home/groups"
                }, "Go Back! 😭"))) : I.createElement(I.Fragment, null, I.createElement(le.UU, {
                    width: "100%",
                    height: "200px",
                    className: "mt-4"
                }), I.createElement(le.UU, {
                    width: "100%",
                    height: "500px",
                    className: "mt-5"
                })) : I.createElement(le.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: "Something went wrong with getting target user! (".concat(null == St || null === (xt = St.data) || void 0 === xt || null === (xt = xt.error) || void 0 === xt ? void 0 : xt.message, ")")
                });
                var Jt, Bt = function() {
                        J(!1), Be({
                            groupId: Te
                        })
                    },
                    $t = function() {
                        W(!1), Re.rules ? J(!0) : Bt()
                    },
                    Vt = Le && Re.myMember && Re.myMember.roleIds.reduce((function(e, t) {
                        if (e) return e;
                        var n = Re.roles.find((function(e) {
                            return e.id === t
                        }));
                        return !(null == n || !n.requiresTwoFactor || !1 !== Re.myMember.has2FA) && n
                    }), !1),
                    Wt = Re.membershipStatus;
                if (Re.memberCount < ht.qH && (Fe.length < je || Me.tagsSet.has("admin_uncap_owned_groups"))) {
                    if (Wt === ht.oq.REQUESTED) Jt = I.createElement(le.zx, {
                        danger: !0,
                        onClick: function() {
                            return et({
                                groupId: Te
                            })
                        },
                        disabled: Ve,
                        loading: Ve
                    }, I.createElement(M.Z, {
                        icon: w.NB
                    }), "  Cancel Join Request");
                    else if (Wt === ht.oq.INVITED) Jt = I.createElement(le.zx, {
                        success: !0,
                        onClick: Bt
                    }, I.createElement(M.Z, {
                        icon: x.LE
                    }), "  Accept Invite");
                    else if (Wt === ht.oq.USER_BLOCKED) Jt = null;
                    else if (!Re.myMember) switch (Re.joinState) {
                        case ht.wN.OPEN:
                            Jt = I.createElement(le.zx, {
                                onClick: $t,
                                disabled: Ve,
                                loading: Ve
                            }, I.createElement(M.Z, {
                                icon: o.r8
                            }), "  Join Group");
                            break;
                        case ht.wN.REQUEST:
                            Jt = I.createElement(le.zx, {
                                onClick: $t
                            }, I.createElement(M.Z, {
                                icon: s.FU
                            }), " Request to Join");
                            break;
                        default:
                            Jt = I.createElement(le.zx, {
                                disabled: !0
                            }, "Closed to New Members")
                    }
                } else Fe.length >= je && !Me.tagsSet.has("admin_uncap_owned_groups") ? Jt = I.createElement(le.zx, {
                    disabled: !0
                }, "You can't join more than ", je, " groups!") : Re.myMember || (Jt = I.createElement(le.zx, {
                    disabled: !0
                }, "Group is Full"));
                if (!Re.id) return null;
                var Ht = Wt === ht.oq.USER_BLOCKED;
                return I.createElement(I.Fragment, null, I.createElement(le.$4, null, null !== (e = null == Re ? void 0 : Re.name) && void 0 !== e ? e : "Group"), I.createElement(A.Z, {
                    isOpen: V,
                    toggle: function() {
                        W(!1)
                    }
                }, I.createElement(Jl, null, I.createElement("h4", {
                    className: "text-center"
                }, "Unblock this Group?")), I.createElement(Bl, null, I.createElement(le.JX, null, I.createElement("div", {
                    className: "p-3 text-center"
                }, "Are you sure you want to unblock ", I.createElement("strong", null, Re.name), "?"), I.createElement("div", {
                    className: "p-3"
                }, I.createElement(le.X2, null, I.createElement(le.zx, {
                    expand: !0,
                    onClick: function() {
                        W(!1), lt({
                            groupId: Te,
                            userId: Me.id
                        })
                    }
                }, I.createElement(M.Z, {
                    icon: x.LE
                }), "  Unblock Group"), " ", I.createElement(le.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        W(!1)
                    }
                }, I.createElement(M.Z, {
                    icon: w.NB
                }), "  Cancel")))))), I.createElement(A.Z, {
                    isOpen: _,
                    toggle: function() {
                        J(!1)
                    }
                }, I.createElement(Jl, null, I.createElement("h4", {
                    className: "text-center"
                }, "Rules")), I.createElement(Bl, null, I.createElement(le.JX, null, I.createElement("div", {
                    className: "p-3"
                }, I.createElement("p", null, "By joining this group, you agree to the following rules:"), I.createElement(Vl, null, Re.rules)), I.createElement("div", {
                    className: "p-3"
                }, I.createElement(le.X2, null, I.createElement(le.zx, {
                    expand: !0,
                    onClick: Bt,
                    disabled: Ve,
                    loading: Ve
                }, Re.joinState === ht.wN.OPEN ? I.createElement(I.Fragment, null, I.createElement(M.Z, {
                    icon: o.r8
                }), "  Join Group") : I.createElement(I.Fragment, null, I.createElement(M.Z, {
                    icon: s.FU
                }), "  Request to Join")), " ", I.createElement(le.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        J(!1)
                    }
                }, I.createElement(M.Z, {
                    icon: w.NB
                }), "  Cancel")))))), I.createElement(A.Z, {
                    isOpen: ge,
                    toggle: function() {
                        return fe(!1)
                    }
                }, I.createElement(Jl, null, I.createElement("h4", {
                    className: "text-center"
                }, "Decline Group Invite?")), I.createElement(Bl, null, I.createElement(le.JX, null, I.createElement("div", {
                    className: "p-3 text-center"
                }, "Are you sure you want to decline invite to ", I.createElement("strong", null, Re.name), "?"), I.createElement("div", {
                    className: "px-3 text-center d-flex justify-content-center"
                }, I.createElement(We.Z, {
                    id: "block-invites",
                    checked: ye,
                    onChange: function(e) {
                        return Ze(e.target.checked)
                    },
                    label: "Block this group, preventing further invites",
                    htmlFor: "block-invites"
                })), I.createElement("div", {
                    className: "p-3"
                }, I.createElement(le.X2, null, I.createElement(le.zx, {
                    expand: !0,
                    danger: !0,
                    onClick: function() {
                        return ct({
                            groupId: Te,
                            block: ye
                        })
                    },
                    loading: ut
                }, I.createElement(M.Z, {
                    icon: x.LE
                }), "  Decline Invite"), " ", I.createElement(le.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        fe(!1)
                    }
                }, I.createElement(M.Z, {
                    icon: w.NB
                }), "  Cancel")))))), I.createElement(al, {
                    group: Re,
                    showBlockModal: ie,
                    onClose: function() {
                        se(!1)
                    }
                }), I.createElement("div", {
                    className: (0, O.iv)({
                        name: "g46w8s",
                        styles: "margin-bottom:30px"
                    })
                }, I.createElement(le.X2, {
                    className: "mb-2 justify-content-end"
                }, (null == Re ? void 0 : Re.ownerId) !== Me.id && I.createElement(I.Fragment, null, I.createElement(le.zx, {
                    neutral: !0,
                    onClick: function() {
                        ee(!0)
                    }
                }, I.createElement(le.$1, {
                    icon: i.JH
                }), " Report"), I.createElement(Tn.Z, {
                    cancelCallback: function() {
                        return ee(!1)
                    },
                    isOpen: Q,
                    type: "group",
                    contentId: null == Re ? void 0 : Re.id,
                    contentName: null == Re ? void 0 : Re.name,
                    hasStore: null == Re ? void 0 : Re.storeId
                }), "userblocked" !== (null == Re ? void 0 : Re.membershipStatus) && !(null != Re && Re.myMember) && I.createElement(I.Fragment, null, " ", I.createElement(le.zx, {
                    danger: !0,
                    onClick: function() {
                        se(!0)
                    }
                }, I.createElement(le.$1, {
                    icon: h.jA
                }), " Block")), "userblocked" === (null == Re ? void 0 : Re.membershipStatus) && I.createElement(I.Fragment, null, " ", I.createElement(le.zx, {
                    danger: !0,
                    onClick: function() {
                        W(!0)
                    }
                }, I.createElement(M.Z, {
                    icon: b.faBan
                }), " Unblock")))), I.createElement(ll.Z, {
                    group: Re
                }), Vt && I.createElement(le.X2, null, I.createElement(T.Z, {
                    color: "warning"
                }, "Your VRChat account does not have 2FA enabled. Your role '", Vt.name, "' in ", Re.name, " requires this. Until you enable 2FA, your ability to manage ", Re.name, " will be limited.")), Ge && gt && I.createElement(le.X2, null, I.createElement(Wl, null, " THIS GROUP HAS BEEN DELETED ")), He && I.createElement(le.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: (null == Ye || null === (t = Ye.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred while trying to join ".concat(null == Re ? void 0 : Re.name, ".")
                }), mt && I.createElement(le.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: (null == dt || null === (n = dt.data) || void 0 === n ? void 0 : n.error.message) || "An error occurred while trying to decline group invitation."
                }), I.createElement("div", {
                    className: "d-flex flex-row justify-content-center align-content-center mb-2"
                }, Jt, Wt === ht.oq.INVITED && I.createElement(le.zx, {
                    danger: !0,
                    onClick: function() {
                        return fe(!0)
                    },
                    className: "mx-2"
                }, I.createElement(M.Z, {
                    icon: v.YI
                }), "  Decline Invite")), Ht ? I.createElement(ol, null) : I.createElement(I.Fragment, null, yt && !It && Zt && I.createElement(sl, {
                    group: Re,
                    currentUser: Me,
                    targetUser: Ot,
                    onAccept: Xt,
                    onCancel: _t,
                    isLoading: be
                }), I.createElement(ce.Z, {
                    tabs: [{
                        name: "Overview",
                        to: "/home/group/".concat(Re.id),
                        end: !0,
                        icon: E.X8,
                        condition: !0
                    }, {
                        name: "Posts",
                        to: "posts",
                        icon: f.qm,
                        condition: R({
                            groupMember: null == Re ? void 0 : Re.myMember,
                            permission: "group-announcement-manage"
                        })
                    }, {
                        name: "Events",
                        to: "events",
                        icon: g.IV,
                        condition: !0
                    }, {
                        name: "Store",
                        to: "store",
                        icon: p.vJ,
                        condition: null == Re ? void 0 : Re.storeId
                    }, {
                        name: "Instances",
                        to: "instances",
                        icon: d.FG,
                        condition: !0
                    }, {
                        name: "Gallery",
                        to: "galleries",
                        icon: m.l9,
                        condition: !0
                    }, {
                        name: "Members",
                        to: "members",
                        icon: u.r$,
                        condition: null == Re ? void 0 : Re.myMember
                    }, {
                        name: "Invites",
                        to: "invites",
                        icon: s.FU,
                        condition: Ge || R({
                            groupMember: null == Re ? void 0 : Re.myMember,
                            permission: "group-invites-manage"
                        })
                    }, {
                        name: "Settings",
                        to: "settings",
                        icon: c.b7,
                        condition: Ge || (null == Re ? void 0 : Re.myMember) || R({
                            groupMember: null == Re ? void 0 : Re.myMember,
                            permission: "group-data-manage"
                        }) || R({
                            groupMember: null == Re ? void 0 : Re.myMember,
                            permission: "group-roles-manage"
                        })
                    }, {
                        name: "Banned Users",
                        to: "bans",
                        icon: i.JH,
                        condition: Ge || R({
                            groupMember: null == Re ? void 0 : Re.myMember,
                            permission: "group-bans-manage"
                        })
                    }]
                }), I.createElement(S.Z5, null, I.createElement(S.AW, {
                    path: "/",
                    element: I.createElement(I.Fragment, null, Le && I.createElement(gl, {
                        group: Re
                    }), Le && I.createElement(Il, {
                        group: Re,
                        event: bt,
                        isAdmin: Ge || R({
                            groupMember: null == Re ? void 0 : Re.myMember,
                            permission: "group-members-manage"
                        })
                    }), I.createElement(_l, null, I.createElement(le.JX, {
                        className: "m-1"
                    }, I.createElement(Mn, {
                        langs: Re.languages
                    })), I.createElement(le.JX, {
                        className: "m-1"
                    }, I.createElement(Dn, {
                        links: Re.links
                    }))), I.createElement(_l, null, I.createElement(le.JX, {
                        className: "m-1 mt-2 mw-100"
                    }, I.createElement(Jl, null, I.createElement("h4", null, "About This Group")), I.createElement($l, null, I.createElement("p", {
                        className: "w-100 text-break"
                    }, Re.description))), Re.rules && I.createElement(I.Fragment, null, I.createElement(le.JX, {
                        className: "m-1 mt-2 mw-100"
                    }, I.createElement(Jl, null, I.createElement("h4", null, "Rules")), I.createElement($l, null, I.createElement("p", {
                        className: "w-100 text-break"
                    }, Re.rules))))))
                }), I.createElement(S.AW, {
                    path: "/posts",
                    element: (Ge || R({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-announcement-manage"
                    })) && Le ? I.createElement(I.Fragment, null, P ? I.createElement(le.X2, null, I.createElement(le.JX, {
                        className: "w-100"
                    }, I.createElement(le.oI, null, I.createElement("h4", {
                        className: "text-center"
                    }, "Create Post")), I.createElement(le.Ao, null, I.createElement(le.JX, {
                        className: "w-100"
                    }, I.createElement(rl, {
                        group: Re
                    }), I.createElement(le.zx, {
                        onClick: function() {
                            return U(!1)
                        }
                    }, "Cancel"))))) : I.createElement(le.zx, {
                        onClick: function() {
                            return U(!0)
                        }
                    }, I.createElement(le.$1, {
                        icon: o.r8
                    }), " Create Post"), I.createElement(gl, {
                        isEditMode: !0,
                        group: Re
                    })) : I.createElement(L.Z, {
                        to: ".."
                    })
                }), I.createElement(S.AW, {
                    path: "/events",
                    element: I.createElement(ql, {
                        group: Re
                    })
                }), I.createElement(S.AW, {
                    path: "/events/create",
                    element: I.createElement(ql, {
                        group: Re,
                        isCreate: !0
                    })
                }), I.createElement(S.AW, {
                    path: "/galleries/*",
                    element: I.createElement(sr, {
                        group: Re
                    })
                }), I.createElement(S.AW, {
                    path: "/subscribe",
                    element: I.createElement(L.Z, {
                        to: "store"
                    })
                }), I.createElement(S.AW, {
                    path: "/store",
                    element: I.createElement(Lr, {
                        group: Re
                    })
                }), I.createElement(S.AW, {
                    path: "/instances",
                    element: I.createElement(fr, {
                        group: Re,
                        onJoinButtonClick: $t
                    })
                }), I.createElement(S.AW, {
                    path: "/invites/*",
                    element: Ge || R({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-invites-manage"
                    }) ? I.createElement(kr, {
                        group: Re
                    }) : I.createElement(L.Z, {
                        to: ".."
                    })
                }), I.createElement(S.AW, {
                    path: "/members",
                    element: Ge || null != Re && Re.myMember ? I.createElement(Sn, {
                        group: Re
                    }) : I.createElement(L.Z, {
                        to: ".."
                    })
                }), I.createElement(S.AW, {
                    path: "/settings/*",
                    element: Ge || null != Re && Re.myMember || R({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-data-manage"
                    }) || R({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-roles-manage"
                    }) ? I.createElement(Qt, {
                        group: Re
                    }) : I.createElement(L.Z, {
                        to: ".."
                    })
                }), I.createElement(S.AW, {
                    path: "/bans",
                    element: Ge || R({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-members-manage"
                    }) ? I.createElement(wl, {
                        group: Re
                    }) : I.createElement(L.Z, {
                        to: ".."
                    })
                })))))
            };
            var _l = (0, a.Z)(le.X2, {
                    target: "e7n20a25"
                })("flex-wrap:wrap;margin:-0.25rem;>", le.JX, "{min-width:300px;flex:1;}"),
                Jl = (0, a.Z)(le.JX, {
                    target: "e7n20a24"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                Bl = (0, a.Z)(Jl, {
                    target: "e7n20a23"
                })({
                    name: "vnq3j7",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto;white-space:pre-line"
                }),
                $l = (0, a.Z)(Bl, {
                    target: "e7n20a22"
                })({
                    name: "di36rf",
                    styles: "overflow-y:auto;white-space:pre-line;max-height:300px"
                }),
                Vl = (0, a.Z)("p", {
                    target: "e7n20a21"
                })({
                    name: "votlfh",
                    styles: "overflow-y:auto;white-space:pre-line;max-height:400px;background:#252a30;padding:0.5rem;border-radius:8px"
                }),
                Wl = (0, a.Z)("h3", {
                    target: "e7n20a20"
                })({
                    name: "bbnlne",
                    styles: "margin:14px auto;color:#ffd866;text-align:center;font-weight:bold"
                })
        },
        19933: (e, t, n) => {
            n.d(t, {
                Z: () => x
            });
            var r = n(4942),
                l = n(15861),
                a = n(54546),
                o = n(68055),
                i = n(76553),
                c = n(64687),
                s = n.n(c),
                u = n(96985),
                m = n(22202),
                d = n(6655),
                p = n(64358),
                g = n(45697),
                f = n.n(g),
                E = n(67294),
                v = n(89250);

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var w = function(e) {
                var t, n = e.isTiliaTOSAccepted,
                    r = void 0 === n || n,
                    c = e.returnPath,
                    g = e.termsOfServiceMessage,
                    f = (0, v.TH)(),
                    b = (0, m.XC)(),
                    w = b.data,
                    x = b.isLoading,
                    y = null == w ? void 0 : w.id,
                    Z = (0, E.useState)(!1),
                    k = (0, a.Z)(Z, 2),
                    N = k[0],
                    O = k[1],
                    I = (0, d.gI)(),
                    C = (0, a.Z)(I, 2),
                    S = C[0],
                    j = C[1],
                    A = (0, v.oQ)("".concat(c).concat(null != f && null !== (t = f.state) && void 0 !== t && t.redirectTo ? "?redirectTo=".concat(encodeURIComponent(f.state.redirectTo)) : ""));
                if (r) return null;
                var T = function() {
                    var e = (0, l.Z)(s().mark((function e(t) {
                        var n, r, l;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t.preventDefault(), O(!0), n = new URL(A, window.location.href), e.next = 5, S(h(h({}, p.$Z.TOS), {}, {
                                        userId: y,
                                        returnUrl: n
                                    })).unwrap();
                                case 5:
                                    r = e.sent, l = r.redirect, window.location.assign(l);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
                return (0, E.useEffect)((function() {
                    (null != j && j.isLoading || x) && O(!0), null != j && j.isError && O(!1)
                }), [j, x]), E.createElement("div", {
                    className: "tw-flex tw-flex-col sm:tw-flex-row tw-bg-warning-bg tw-rounded-lg tw-border-orange tw-border-solid tw-border-0 tw-border-l-4 tw-mb-4 tw-p-3 tw-justify-between tw-items-center"
                }, E.createElement("div", {
                    className: "tw-flex tw-flex-row"
                }, E.createElement(u.$1, {
                    icon: i.eH,
                    size: "1x",
                    className: "tw-text-orange tw-mt-1 tw-mr-2"
                }), E.createElement("div", {
                    className: "tw-flex tw-flex-col tw-justify-start tw-items-start"
                }, E.createElement("h2", {
                    className: "tw-text-xl"
                }, "Update to the Tilia Terms of Service"), E.createElement("p", {
                    className: "tw-mb-0 tw-text-base"
                }, g))), E.createElement("div", {
                    className: "tw-h-full tw-flex tw-flex-col tw-justify-center tw-mt-4 sm:tw-mt-0"
                }, E.createElement(u.zx, {
                    icon: o.LE,
                    onClick: function(e) {
                        return T(e)
                    },
                    className: "tw-bg-white tw-border-white tw-text-[#1A2026]",
                    loading: N,
                    disabled: N
                }, "Review Tilia's Terms")))
            };
            w.propTypes = {
                isTiliaTOSAccepted: f().bool,
                returnPath: f().string,
                termsOfServiceMessage: f().string.isRequired
            };
            const x = w
        }
    }
]);
//# sourceMappingURL=64b28e985fd289e54eb34286c1ce94341fa6215b95cbac240952650bd0372a7f.js.map