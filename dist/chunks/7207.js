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
                default: () => Fl
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
                y = n(68055),
                x = n(76553),
                Z = n(6811),
                k = n(64687),
                N = n.n(k),
                I = n(83505),
                O = n(67294),
                C = n(32981),
                S = n(89250),
                j = n(79655),
                A = n(69699),
                M = n(23138),
                T = n(86646),
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
                F = n(70265),
                D = n(5702),
                X = n(78439),
                _ = n(47810),
                J = n(95305),
                B = n(35773),
                $ = n(60766),
                V = n(23149),
                W = n(3126),
                Y = n(30776),
                H = n(83024),
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
                de = n(83807),
                pe = n(93261),
                ge = n(45697),
                fe = n.n(ge),
                Ee = n(27484),
                ve = n.n(Ee),
                be = n(1646),
                he = n.n(be),
                we = n(84110),
                ye = n.n(we),
                xe = n(64358);
            ve().extend(he()), ve().extend(ye());
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
                return O.createElement(ke, null, O.createElement(le.JX, {
                    className: "tw-columns-3"
                }, O.createElement(le.pw, {
                    className: "tw-justify-self-start tw-my-2",
                    fitToCover: !0,
                    alt: i,
                    imageId: (0, xe.oQ)(a || o),
                    width: "100px",
                    height: "100px"
                })), O.createElement(le.JX, {
                    className: "tw-flex-[1_1_128px] tw-columns-6"
                }, O.createElement(j.rU, {
                    className: "tw-justify-self-start tw-text-2xl",
                    to: "/home/user/".concat(c)
                }, i), O.createElement("h4", {
                    className: "tw-justify-self-start"
                }, "Joined ".concat(m)), O.createElement("p", {
                    className: "tw-justify-self-start tw-text-[#737372] tw-text-[16px]"
                }, "Member")), O.createElement(le.JX, {
                    className: "tw-flex tw-flex-row tw-flex-[1_1_32px] tw-justify-center tw-items-center tw-columns-3"
                }, O.createElement(le.zx, {
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

            function Ie(e) {
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
            var Oe = function(e) {
                var t, n, r, a = e.group,
                    o = void 0 === a ? {} : a,
                    i = e.isOpen,
                    c = e.cancelCallback,
                    s = e.isGroupMemberOnly,
                    u = void 0 !== s && s,
                    m = e.memberSelectCallback,
                    d = e.isSelecting,
                    p = void 0 !== d && d,
                    g = (0, O.useRef)(null),
                    f = (0, O.useState)(""),
                    E = (0, l.Z)(f, 2),
                    v = E[0],
                    b = E[1],
                    h = (0, O.useState)(1),
                    w = (0, l.Z)(h, 2),
                    y = w[0],
                    x = w[1],
                    Z = (0, de.Nr)(v),
                    k = (0, O.useState)([
                        [],
                        []
                    ]),
                    N = (0, l.Z)(k, 2),
                    I = N[0],
                    C = N[1],
                    S = (0, ne.XC)().data,
                    j = null == o ? void 0 : o.id,
                    A = null == o ? void 0 : o.ownerId,
                    M = null == o ? void 0 : o.myMember,
                    T = (0, pe.Pv)(),
                    P = (0, l.Z)(T, 2),
                    R = P[0],
                    L = P[1],
                    U = L.data,
                    z = L.error,
                    G = L.isLoading,
                    F = (null == U || null === (t = U.members) || void 0 === t ? void 0 : t.length) < 25;
                O.useEffect((function() {
                    ee(0)
                }), []), O.useEffect((function() {
                    var e = (0, q.Z)(I);
                    if (U) {
                        var t;
                        if (U.page <= 0 && !v) e[0] = [null != o && o.myMember ? Ie(Ie({}, M), {}, {
                            userId: S.id,
                            user: Ie(Ie({}, S), {}, {
                                thumbnailUrl: null !== (t = S.profilePicOverride) && void 0 !== t ? t : S.currentAvatarImageUrl
                            })
                        }) : null].concat((0, q.Z)(U.members));
                        else e[U.page] = U.members;
                        C(e)
                    }
                }), [U]), (0, O.useEffect)((function() {
                    setTimeout((function() {
                        i && null != g && g.current && g.current.focus()
                    }), 300)
                }), [i, g]), (0, O.useEffect)((function() {
                    x(1)
                }), [v]), (0, O.useEffect)((function() {
                    b("")
                }), [i]);
                var D = (0, pe.Pi)({
                        groupId: j,
                        pageValue: y,
                        searchTerm: Z,
                        n: 25
                    }, {
                        skip: "" === Z || !i || Z.length < 3 || !u
                    }),
                    X = D.data,
                    _ = D.error,
                    J = D.isError,
                    B = D.isFetching,
                    $ = D.isSuccess,
                    V = (0, re.hi)({
                        pageValue: y,
                        searchTerm: Z,
                        n: 25
                    }, {
                        skip: "" === Z || !i || Z.length < 3 || u
                    }),
                    W = V.data,
                    Y = V.error,
                    H = V.isError,
                    Q = V.isFetching,
                    K = V.isSuccess,
                    ee = function(e) {
                        R({
                            groupId: j,
                            perPage: 25,
                            page: e
                        }), x(e + 1)
                    },
                    te = null == I ? void 0 : I.map((function(e, t) {
                        var n;
                        return null === (n = (0, q.Z)(e)) || void 0 === n || null === (n = n.sort((function(e) {
                            return e.userId === A ? -1 : 0
                        }))) || void 0 === n || null === (n = n.filter((function(e, t, n) {
                            return n.findIndex((function(t) {
                                return t.userId === e.userId
                            })) === t
                        }))) || void 0 === n ? void 0 : n.map((function(e) {
                            return e.userId === A ? null : O.createElement(Ze, {
                                key: e.id,
                                member: e,
                                onSelectCallback: function(e) {
                                    return m(e)
                                }
                            })
                        }))
                    }));
                return O.createElement(me.oA, {
                    role: "dialog",
                    isOpen: i,
                    toggle: c,
                    keyboard: !0,
                    autoFocus: !1,
                    size: "lg"
                }, O.createElement(me.eb, {
                    tag: "h4",
                    close: O.createElement(oe.Z, {
                        onClick: c
                    }),
                    toggle: c
                }, u ? "Group Members Search" : "Users Search"), O.createElement(me.vc, null, O.createElement(me.T_, null, O.createElement(le.II, {
                    id: "search-product-list",
                    onChange: function(e) {
                        return b(e.target.value)
                    },
                    placeholder: u ? "Search Group Members..." : "Search for users...",
                    ref: g,
                    type: "text",
                    value: v
                }), (J || H) && O.createElement("p", {
                    className: "text-center m-5 text-warning h-25"
                }, "Something went wrong with the search, please try again later!", O.createElement("br", null), J && O.createElement("code", null, null == _ || null === (n = _.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), H && O.createElement("code", null, null == Y || null === (r = Y.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message)), B || p && O.createElement(me.Um, null, O.createElement("div", {
                    className: "text-center m-5 text-secondary h-25"
                }, O.createElement(ie.Z, null))), !$ && !B && !J && u && O.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "Search for members in your group."), $ && !B && u && O.createElement(me.Um, null, X.results.map((function(e) {
                    return O.createElement(Ze, {
                        key: e.id,
                        member: e,
                        onSelectCallback: function(e) {
                            return m(e)
                        }
                    })
                })), 0 === X.results.length && O.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "We couldn't find anything with that search.")), !K && !Q && !H && !u && O.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "Search for users on VRChat."), K && O.createElement(me.Um, null, 0 === W.results.length && O.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "We couldn't find anything with that search.")), G ? O.createElement(le.UU, {
                    height: "200px"
                }) : O.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, te), O.createElement("div", {
                    className: "p-2",
                    style: {
                        margin: "2px auto 0",
                        textAlign: "center"
                    }
                }, O.createElement(le.zx, {
                    onClick: function() {
                        return ee(page)
                    },
                    disabled: G || z || F,
                    loading: G
                }, z || F ? "No more members..." : "List More Members")), ($ || K) && O.createElement(me.Gz, null, O.createElement(me.IT, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return x(y - 1)
                    },
                    disabled: 1 === y || B || Q
                }, O.createElement(le.$1, {
                    icon: ue.A3
                })), O.createElement("span", null, y), O.createElement(me.UV, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return x(y + 1)
                    },
                    disabled: (null == X ? void 0 : X.isLastPage) || (null == W ? void 0 : W.isLastPage) || B || Q
                }, O.createElement(le.$1, {
                    icon: se._t
                }))))))
            };
            Oe.propTypes = {
                group: fe().object,
                isOpen: fe().bool.isRequired,
                cancelCallback: fe().func.isRequired,
                memberEditCallback: fe().func,
                memberSelectCallback: fe().func
            };
            const Ce = Oe;
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
                return O.createElement(O.Fragment, null, O.createElement(le.oI, {
                    className: "mt-2"
                }, O.createElement("h4", {
                    className: "text-center"
                }, "Group Ownership Transfer")), O.createElement(le.Ao, null, c || p || !d || !i ? O.createElement("div", {
                    className: "full-width text-center"
                }, O.createElement(ie.Z, null)) : O.createElement(O.Fragment, null, s && O.createElement(le.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == u || null === (t = u.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), g && O.createElement(le.qX, {
                    type: "error",
                    title: "Error Fetching New Group Owner Data"
                }, (null == f || null === (n = f.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unkown error fetching New Group Owner Data"), O.createElement(le.X2, null, O.createElement("span", {
                    className: "full-width text-center"
                }, "You can choose to cancel the transfer")), O.createElement(le.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, O.createElement(le.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, O.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "Current Owner"), O.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, O.createElement(le.$1, {
                    className: "tw-mr-2",
                    icon: Se.nm
                }), null == i ? void 0 : i.displayName)), O.createElement(le.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, O.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "New Owner"), d && O.createElement(le.X2, {
                    className: "tw-flex tw-m-1 tw-font-bold gx-0 gap-1"
                }, O.createElement(le.pw, {
                    width: 24,
                    style: {
                        maxWidth: "24px",
                        objectFit: "cover"
                    },
                    imageId: (d.thumbnailUrl || d.currentAvatarThumbnailImageUrl).match("(?!/)file_[^/]+")[0],
                    alt: null == d ? void 0 : d.displayName
                }), null == d ? void 0 : d.displayName))), a ? O.createElement("div", {
                    className: "full-width text-center"
                }, O.createElement(ie.Z, null)) : O.createElement("div", {
                    className: (0, I.iv)({
                        name: "pc0kie",
                        styles: ">*{margin-top:15px;}"
                    })
                }, O.createElement(le.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, O.createElement(le.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, O.createElement(le.zx, {
                    onClick: function() {
                        return l()
                    },
                    danger: !0,
                    className: "tw-max-w-[100%]"
                }, "Cancel Transfer")))))))
            };
            var Ae = n(57982);
            const Me = function(e) {
                var t = e.isOpen,
                    n = e.cancelCallback;
                return O.createElement(me.oA, {
                    role: "dialog",
                    isOpen: t,
                    toggle: n,
                    keyboard: !0,
                    autoFocus: !1,
                    size: "lg"
                }, O.createElement(me.eb, {
                    tag: "h4",
                    close: O.createElement(oe.Z, {
                        onClick: n
                    }),
                    toggle: n
                }, "About Group Ownership Transfer"), O.createElement(me.vc, null, O.createElement("h4", null, "You can transfer your group ownership to another member of the group. the target member and the group must meet the requirements below."), O.createElement(me.T_, null, O.createElement("ul", null, O.createElement("li", null, "The target member has verified their email address ", "(", "check the Email section via", " ", O.createElement(j.rU, {
                    className: "tw-text-link-highlight",
                    to: "/home/profile",
                    target: "_blank"
                }, "account settings"), ")"), O.createElement("li", null, "The target member has an active VRC Plus subscription"), O.createElement("li", null, "The target member can still own more groups ", "(", "each user can own up to 5 groups", ")"), O.createElement("li", null, "The group is not monetized")))))
            };
            var Te = function(e) {
                var t, n, r = e.group,
                    a = e.onButtonClick,
                    o = e.isLoading,
                    i = O.useState(!1),
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
                    y = O.useMemo((function() {
                        return null == v || !v.requirements || !v.requirements.groupNotMonetized
                    }), [v, h]);
                return O.createElement(O.Fragment, null, s && O.createElement(Me, {
                    isOpen: s,
                    cancelCallback: function() {
                        return u(!1)
                    }
                }), O.createElement(le.oI, {
                    className: "mt-2"
                }, O.createElement("h4", {
                    className: "text-center"
                }, "Group Ownership Transfer")), O.createElement(le.Ao, null, p || b ? O.createElement("div", {
                    className: "full-width text-center"
                }, O.createElement(ie.Z, null)) : O.createElement(O.Fragment, null, g && O.createElement(le.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == f || null === (t = f.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), h && O.createElement(le.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == w || null === (n = w.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unkown error fetching Group Owner Requirements Data"), y && !h ? O.createElement("span", {
                    className: "tw-mb-2"
                }, O.createElement(le.qX, {
                    type: "error"
                }, "Your group is not qualified for ownership transfer because it is currently being monetized.", " ", O.createElement("button", {
                    type: "button",
                    className: "tw-text-[#1FD1ED] tw-cursor-pointer tw-border-none tw-bg-transparent tw-p-0 tw-m-0",
                    onClick: function() {
                        return u(!0)
                    }
                }, "Learn more about Group Ownership Transfer"), ".")) : O.createElement("span", {
                    className: "tw-mb-2"
                }, "You can transfer your group ownership to another member of the group, this cannot be undone once the transfer is complete. The target member and the group must meet", " ", O.createElement("button", {
                    type: "button",
                    className: "tw-text-[#1FD1ED] tw-cursor-pointer tw-border-none tw-bg-transparent tw-p-0 tw-m-0",
                    onClick: function() {
                        return u(!0)
                    }
                }, "these requirements"), " ", "to qualify for the transfer."), O.createElement(le.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, O.createElement(le.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, O.createElement("p", null, "Current Owner"), O.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, O.createElement(le.$1, {
                    className: "tw-mr-2",
                    icon: Se.nm
                }), null == d ? void 0 : d.displayName)), O.createElement(le.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, O.createElement("p", null, "New Owner"), O.createElement(le.zx, {
                    className: "tw-max-w-[250px]",
                    onClick: function() {
                        return a()
                    },
                    disabled: o || h || y,
                    loading: o
                }, O.createElement(le.$1, {
                    className: "tw-mr-2",
                    icon: Ae.faMagnifyingGlass
                }), "Search Group Members"))))))
            };
            Te.propTypes = {
                group: fe().object.isRequired,
                onButtonClick: fe().func.isRequired,
                isLoading: fe().bool.isRequired
            };
            const Pe = Te;
            var Re, Le = "hasVerifiedEmail",
                Ue = "targetCanOwnMoreGroups",
                qe = "targetIsGroupMember",
                ze = "hasVRCPlus",
                Ge = "groupNotMonetized",
                Fe = (Re = {}, (0, U.Z)(Re, Le, "Email address has not been verified"), (0, U.Z)(Re, Ue, "Already owns maximum nubmer of groups per user"), (0, U.Z)(Re, qe, "Is not a valid member of the group"), (0, U.Z)(Re, ze, "Does not have an active VRChat Plus subscription"), (0, U.Z)(Re, Ge, "Group is not valid because it is monetized"), Re);
            const De = function(e) {
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
                return O.createElement(O.Fragment, null, O.createElement(le.sm, {
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
                }, c || m ? O.createElement("div", {
                    className: "tw-full-width tw-text-center"
                }, O.createElement(ie.Z, null)) : O.createElement("div", null, d && O.createElement(le.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == p || null === (t = p.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), !(null != r && r.valid) && (null == r ? void 0 : r.reasons) && O.createElement(le.qX, {
                    type: "error",
                    title: "Oops, it seems the selected member does not meet the following requirement(s)"
                }, r.reasons.map((function(e) {
                    var t;
                    return O.createElement("p", null, "• ".concat(null !== (t = Fe[e]) && void 0 !== t ? t : "Unknown Validity Reason"))
                }))), O.createElement(le.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-mt-2"
                }, O.createElement("span", {
                    className: "tw-full-width tw-text-center"
                }, "Are you sure you want to transfer your group ownership?")), O.createElement(le.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-bg-[#252a30] tw-px-8 tw-text-[16px] tw-rounded-lg tw-border-current tw-transition tw-ease-in-out tw-delay-150 tw-bg-[#252a30] tw-mt-2"
                }, O.createElement(le.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, O.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "Current Owner"), O.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, O.createElement(le.$1, {
                    className: "tw-mr-2",
                    icon: Se.nm
                }), null == u ? void 0 : u.displayName)), O.createElement(le.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, O.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "New Owner"), (null == l ? void 0 : l.user) && O.createElement(le.X2, {
                    className: "tw-flex tw-m-1 tw-font-bold gx-0 gap-1"
                }, O.createElement(le.pw, {
                    width: 24,
                    style: {
                        maxWidth: "24px",
                        objectFit: "cover"
                    },
                    imageId: (0, xe.oQ)(l.user.thumbnailUrl || l.user.currentAvatarThumbnailImageUrl),
                    alt: l.user.displayName
                }), l.user.displayName))), O.createElement(le.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-mt-2"
                }, O.createElement("span", {
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
                    i = O.useState(null !== (t = null == n ? void 0 : n[o]) && void 0 !== t ? t : ""),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = O.useState(!1),
                    d = (0, l.Z)(m, 2),
                    p = d[0],
                    g = d[1],
                    f = O.useState(s),
                    E = (0, l.Z)(f, 2),
                    v = E[0],
                    b = E[1],
                    h = O.useState(!0),
                    w = (0, l.Z)(h, 2),
                    y = w[0],
                    x = w[1],
                    Z = null != n ? n : [],
                    k = function() {
                        g(!0), x(!1)
                    },
                    I = function() {
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
                return p ? O.createElement("div", {
                    className: "w-100 p-2 p-l-0"
                }, O.createElement("div", {
                    className: "input-group"
                }, O.createElement("input", {
                    placeholder: "https://",
                    onChange: function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        if ("" === n) return u(""), void x(!1);
                        try {
                            var r = new URL(n);
                            u(n), x("https:" !== r.protocol && "http:" !== r.protocol)
                        } catch (e) {
                            u(n), x(!0)
                        }
                    },
                    onKeyUp: function(e) {
                        13 === e.keyCode && !1 === y && I()
                    },
                    className: "form-control",
                    value: s,
                    maxLength: 1e3
                }), O.createElement("div", {
                    className: "input-group-append"
                }, O.createElement("span", {
                    className: "input-group-text",
                    id: "basic-addon1"
                }, O.createElement(Je.QZ, {
                    url: s,
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                })))), O.createElement(Xe.Z, {
                    onClick: function() {
                        g(!1), u(v)
                    }
                }, "Cancel"), O.createElement(Xe.Z, {
                    onClick: I,
                    disabled: y,
                    color: "primary"
                }, "Ok")) : o > 0 && null == s ? O.createElement("div", null) : !(o > 0) || "" !== s && null != s || "" !== Z[o - 1] && null != Z[o - 1] ? null == s || "" === s ? O.createElement("div", null, O.createElement("div", {
                    className: "btn-group w-100 p-2 p-l-0"
                }, O.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "btn btn-outline-light btn-block",
                    style: {
                        whiteSpace: "normal"
                    },
                    onClick: k
                }, "Link"))) : O.createElement("div", null, O.createElement(_e.Z, {
                    className: "p-2 w-100 p-l-0"
                }, O.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "btn btn-outline-light",
                    style: {
                        width: "255px",
                        overflow: "hidden"
                    },
                    onClick: k
                }, Z[o]), O.createElement($e, {
                    className: "btn btn-outline-danger h-100 ratio-1x1",
                    "aria-label": "Close",
                    onClick: C
                }, O.createElement("span", {
                    "aria-hidden": "true"
                }, "×")))) : O.createElement("div", null)
            };
            var $e = (0, a.Z)(Xe.Z, {
                    target: "e1a3rjxi0"
                })({
                    name: "1234s8l",
                    styles: "width:40px;max-width:40px"
                }),
                Ve = n(71421),
                We = n(18461);
            var Ye = function() {
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
                    u = O.useState(!1),
                    m = (0, l.Z)(u, 2),
                    d = m[0],
                    p = m[1],
                    g = O.useState([]),
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
                O.useEffect((function() {
                    var e = [];
                    null == E || E.forEach((function(t) {
                        return e.push(null == t ? void 0 : t.value)
                    })), s(e)
                }), [E]), O.useEffect((function() {
                    E.length !== i.length && v(i)
                }), [i]);
                var h = O.useMemo((function() {
                    return i.length === E.length ? "View All" : "".concat(E.length, " selected")
                }), [i, E]);
                return O.createElement(et, {
                    className: "mb-2",
                    role: "radiogroup",
                    "aria-label": n.ariaLabel,
                    onMouseLeave: function() {
                        d && p(!1)
                    }
                }, O.createElement(rt, {
                    disabled: a,
                    expanded: d
                }, O.createElement(lt, {
                    type: "button",
                    "aria-label": "Expand Options",
                    disabled: a,
                    onClick: function(e) {
                        e.stopPropagation(), e.preventDefault(), p(!d)
                    }
                }, !!n && O.createElement(Ke, null, n.labelValue), O.createElement(Qe, {
                    className: "tw-gap-2 tw-text-center tw-justify-center"
                }, h), O.createElement(T.Z, {
                    icon: Ve.eW,
                    color: "white",
                    className: "ms-3"
                })), d && i.length > 0 && O.createElement(at, {
                    className: "tw-px-[10px] tw-gap-1 tw-py-1"
                }, i.map((function(e, t) {
                    var n, r;
                    return O.createElement(We.Z, {
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
            Ye.propTypes = {
                labelProps: fe().shape({
                    ariaLabel: fe().string.isRequired,
                    labelValue: fe().string.isRequired
                }).isRequired,
                disabled: fe().bool.isRequired,
                options: fe().array.isRequired,
                onTriggerUpdate: fe().func
            };
            const He = Ye;
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
                return e.isLoading ? O.createElement(it, {
                    className: "justify-content-center"
                }, O.createElement("div", {
                    className: "spinner-border"
                })) : O.createElement(it, null, O.createElement(ct, null, ve()(t.created_at).format("MM/DD/YYYY hh:mm A")), t.description)
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
                    r = O.useState(25),
                    a = (0, l.Z)(r, 2),
                    o = a[0],
                    i = a[1],
                    c = O.useState(0),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = O.useState(0),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = O.useState([]),
                    v = (0, l.Z)(E, 2),
                    b = v[0],
                    h = v[1],
                    w = O.useState([]),
                    y = (0, l.Z)(w, 2),
                    x = y[0],
                    Z = y[1],
                    k = O.useState([]),
                    N = (0, l.Z)(k, 2),
                    I = N[0],
                    C = N[1],
                    S = (0, pe.hg)(),
                    j = (0, l.Z)(S, 2),
                    A = j[0],
                    M = j[1],
                    T = M.data,
                    P = M.isFetching,
                    R = M.isError,
                    L = (0, pe.rw)({
                        groupId: n.id
                    }, {
                        skip: !n
                    }),
                    U = L.data,
                    z = L.isFetching,
                    G = L.isError;
                O.useEffect((function() {
                    C(x.map((function(e) {
                        return e.value
                    })))
                }), [x]), O.useEffect((function() {
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
                        h(e), 0 === x.length && Z(e.map((function(e) {
                            return e.value
                        })))
                    }
                    u < 0 ? m(0) : A({
                        groupId: n.id,
                        perPage: o,
                        offset: u,
                        eventTypes: I ? (0, q.Z)(I) : []
                    })
                }), [o, u, U, I, x]), O.useEffect((function() {
                    null != T && T.totalCount && f(T.totalCount)
                }), [T]);
                var F = O.createElement(dt, null, O.createElement(pt, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u - o)
                    },
                    disabled: 0 === u
                }, O.createElement(le.$1, {
                    icon: ue.A3
                })), O.createElement("span", null, "(", u, " - ", g < o + u ? g : o + u, ") / ", g), O.createElement(gt, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u + o)
                    },
                    disabled: g < o + u
                }, O.createElement(le.$1, {
                    icon: se._t
                })));
                return O.createElement("div", null, R && O.createElement(le.qX, {
                    title: "Error",
                    type: "error",
                    className: "mb-2"
                }, "There was an error loading the audit log."), G && !z && O.createElement(le.qX, {
                    title: "Error",
                    type: "error",
                    className: "mb-2"
                }, "There was an error loading the filterable audit log types."), O.createElement(le.oI, null, O.createElement("h4", {
                    className: "text-center"
                }, "Audit Log")), O.createElement(le.Ao, null, O.createElement(le.X2, {
                    className: "tw-flex-row tw-justify-evenly"
                }, !!b.length && O.createElement(He, {
                    labelProps: {
                        ariaLabel: "LogTypes",
                        labelValue: "Filter Log Types: "
                    },
                    disabled: !n,
                    options: b,
                    onTriggerUpdate: function(e) {
                        return C(e)
                    }
                }), O.createElement(mt, {
                    label: "Items per-page",
                    onChange: i,
                    options: st,
                    value: o,
                    className: "mb-2"
                })), F, O.createElement("div", {
                    className: "audit-log"
                }, (null !== (t = null == T ? void 0 : T.results) && void 0 !== t ? t : Array(o).fill({})).map((function(e, t) {
                    var n;
                    return O.createElement(ot, {
                        key: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "log-".concat(t),
                        log: e,
                        n: o,
                        offset: u,
                        isLoading: P
                    })
                }))), F))
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
            const yt = function(e) {
                var t, n, a, o, i = e.groupId,
                    c = (0, C.I0)(),
                    s = (0, S.s0)(),
                    u = (0, ne.XC)(),
                    m = u.data,
                    d = u.isLoading,
                    p = u.error,
                    g = u.isError,
                    f = O.useState(),
                    E = (0, l.Z)(f, 2),
                    v = E[0],
                    b = E[1],
                    h = O.useState(!0),
                    w = (0, l.Z)(h, 2),
                    y = w[0],
                    x = w[1],
                    Z = O.useState(!0),
                    k = (0, l.Z)(Z, 2),
                    I = k[0],
                    j = k[1],
                    A = O.useState(!1),
                    M = (0, l.Z)(A, 2),
                    T = M[0],
                    P = M[1],
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
                    F = G.data,
                    D = G.isLoading,
                    X = G.error,
                    _ = G.isError;
                (0, O.useEffect)((function() {
                    var e;
                    if (F && L) {
                        L.privacy === ht.TW.DEFAULT && F.visibility !== v && b(F.visibility);
                        var t = (null == F ? void 0 : F.isSubscribedToAnnouncements) || (null == F ? void 0 : F.isSubscribedToPosts);
                        x(t);
                        var n = null === (e = null == F ? void 0 : F.isSubscribedToEventAnnouncements) || void 0 === e || e;
                        j(n)
                    }
                }), [L, F]);
                var J = d || U || D,
                    B = (null == L ? void 0 : L.ownerId) === (null == F ? void 0 : F.userId),
                    $ = (0, pe.uX)(),
                    V = (0, l.Z)($, 2),
                    H = V[0],
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
                return g ? O.createElement(bt.Z, {
                    error: p,
                    statusCode: p.status
                }) : z ? O.createElement(bt.Z, {
                    error: q,
                    statusCode: q.status
                }) : _ ? O.createElement(bt.Z, {
                    error: X,
                    statusCode: X.status
                }) : O.createElement(O.Fragment, null, O.createElement(le.oI, null, O.createElement("h4", {
                    className: "text-center"
                }, "Membership Preferences")), O.createElement(le.Ao, null, J ? O.createElement(le.UU, {
                    height: "250px"
                }) : O.createElement(O.Fragment, null, oe && O.createElement(le.qX, {
                    type: "success",
                    title: "Updated preferences",
                    slim: !0
                }, "Your preferences were saved successfully"), re && O.createElement(le.qX, {
                    type: "error",
                    title: "Error updating preferences"
                }, ee.status, " : ", null !== (t = null === (n = ee.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : ""), L.privacy === ht.TW.DEFAULT && O.createElement(W.Z, null, "Visibility ", O.createElement(le.Lt, {
                    onChange: b,
                    value: v,
                    options: wt
                }), O.createElement("small", null, "Do you want everyone to see this group on your profile, just your friends to see it, or to keep it secret? This only affects your own profile.")), O.createElement("div", {
                    className: "my-2"
                }, O.createElement(ae.Z, {
                    label: "Subscribe to Posts",
                    value: "isSubscribedToPosts",
                    defaultChecked: y,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        x(t)
                    }
                }), O.createElement(Y.Z, null, "Tick this to hear all the latest news and goss from this group")), O.createElement("div", {
                    className: "my-2"
                }, O.createElement(ae.Z, {
                    label: "Subscribe to Event Announcements",
                    value: "isSubscribedToEventAnnouncements",
                    defaultChecked: I,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        j(t)
                    }
                }), O.createElement(Y.Z, null, "Tick this to receive notifications about events from this group")), O.createElement(le.zx, {
                    onClick: function() {
                        H({
                            groupId: i,
                            userId: m.id,
                            visibility: v,
                            isSubscribedToPosts: y,
                            isSubscribedToEventAnnouncements: I
                        })
                    },
                    loading: K,
                    disabled: K
                }, O.createElement(le.$1, {
                    icon: Et.r6
                }), " Save Preferences"))), O.createElement(le.oI, {
                    className: "mt-2"
                }, O.createElement("h4", {
                    className: "text-center"
                }, "Leave Group")), O.createElement(le.Ao, null, J ? O.createElement(le.UU, {
                    height: "100px",
                    delay: 50
                }) : O.createElement(O.Fragment, null, ge && O.createElement(le.qX, {
                    type: "error",
                    title: "Error leaving group"
                }, de.status, " : ", null !== (a = null === (o = de.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : ""), O.createElement(le.sm, {
                    headerText: "Leave Group",
                    bodyText: "Are you sure you want to leave this group?",
                    confirmText: "Yes, Leave Group",
                    confirmCallback: fe,
                    cancelText: "Never Mind!",
                    cancelCallback: function() {
                        P(!1)
                    },
                    isOpen: T
                }), B ? O.createElement(le.qX, {
                    type: "warning",
                    title: "You own this group!"
                }, "You can't leave your own group, but you can delete the group over in General settings.") : O.createElement("p", null, "This group not your thing anymore? No problem."), O.createElement(le.zx, {
                    warning: !0,
                    onClick: function() {
                        P(!0)
                    },
                    loading: me,
                    disabled: B || me
                }, O.createElement(le.$1, {
                    icon: ft.HE
                }), " Leave Group"))))
            };
            var xt = n(41145),
                Zt = n(62228),
                kt = n(609),
                Nt = n(16869),
                It = n(67978),
                Ot = n(81780),
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
            var Mt = {
                id: "new",
                name: "",
                description: "",
                isSelfAssignable: !1,
                permissions: []
            };
            const Tt = function(e) {
                var t, n, a, o, i, s, u = e.group,
                    m = e.changeRoleLocalOrder,
                    d = e.changeRoleOffset,
                    p = e.roleOffset,
                    g = e.isGroupOwner,
                    f = (0, C.I0)(),
                    E = (0, S.s0)(),
                    v = (0, S.UO)(),
                    b = (0, O.useRef)(!0),
                    h = (0, de.pc)(),
                    y = O.useMemo((function() {
                        var e;
                        return "new" === v.roleId ? At(At({}, Mt), {}, {
                            requiresPurchase: "paid" === v.newRoleType
                        }, "paid" === v.newRoleType && {
                            productPriceTokens: St.nk,
                            productDuration: 1,
                            productDurationType: "months"
                        }) : null == u || null === (e = u.roles) || void 0 === e ? void 0 : e.find((function(e) {
                            return e.id === v.roleId
                        }))
                    }), [u, v]),
                    Z = O.useState({}),
                    k = (0, l.Z)(Z, 2),
                    I = k[0],
                    M = k[1],
                    P = O.useState(null),
                    L = (0, l.Z)(P, 2),
                    G = L[0],
                    F = L[1],
                    D = O.useState({}),
                    X = (0, l.Z)(D, 2),
                    _ = X[0],
                    V = X[1],
                    H = O.useState(null != y && y.defaultRole ? "permissions" : "general"),
                    Q = (0, l.Z)(H, 2),
                    K = Q[0],
                    ee = Q[1],
                    ne = O.useState(null == y ? void 0 : y.requiresTwoFactor),
                    re = (0, l.Z)(ne, 2),
                    oe = re[0],
                    ie = re[1],
                    se = O.useState(null == y ? void 0 : y.isAddedOnJoin),
                    ue = (0, l.Z)(se, 2),
                    me = ue[0],
                    ge = ue[1],
                    fe = O.useState(null == y ? void 0 : y.isSelfAssignable),
                    Ee = (0, l.Z)(fe, 2),
                    ve = Ee[0],
                    be = Ee[1],
                    he = O.useState((null == u ? void 0 : u.joinState) === ht.wN.OPEN),
                    we = (0, l.Z)(he, 2),
                    ye = we[0],
                    Ze = we[1],
                    ke = O.useState(!1),
                    Ne = (0, l.Z)(ke, 2),
                    Ie = Ne[0],
                    Oe = Ne[1],
                    Ce = O.useState((null == y ? void 0 : y.permissions) || []),
                    Se = (0, l.Z)(Ce, 2),
                    je = Se[0],
                    Ae = Se[1],
                    Me = O.useState(!1),
                    Te = (0, l.Z)(Me, 2),
                    Pe = Te[0],
                    Re = Te[1],
                    Le = O.useState(null),
                    Ue = (0, l.Z)(Le, 2),
                    qe = Ue[0],
                    ze = Ue[1],
                    Ge = O.useState(null),
                    Fe = (0, l.Z)(Ge, 2),
                    De = Fe[0],
                    Xe = Fe[1],
                    _e = (0, pe.mt)({
                        groupId: u.id
                    }),
                    Je = _e.data,
                    Be = _e.isLoading,
                    $e = _e.isError,
                    Ve = (0, pe.Pt)(),
                    We = (0, l.Z)(Ve, 2),
                    Ye = We[0],
                    He = We[1],
                    Qe = He.isLoading,
                    Ke = He.isError,
                    et = He.error,
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
                    wt = (0, It.lZ)({
                        productId: null == y ? void 0 : y.productId
                    }, {
                        skip: !(null != y && y.productId),
                        refetchOnMountOrArgChange: !0
                    }),
                    yt = wt.data,
                    jt = wt.isFetching,
                    Tt = wt.isUninitialized,
                    Pt = (0, Nt.Ul)({
                        userId: null == u ? void 0 : u.ownerId,
                        groupId: null == u ? void 0 : u.id,
                        active: !0
                    }, {
                        skip: !u || !(null != y && y.productId),
                        refetchOnMountOrArgChange: !0
                    }),
                    Rt = Pt.data,
                    Lt = void 0 === Rt ? [] : Rt,
                    Ut = Pt.isFetching,
                    qt = Pt.isUninitialized,
                    zt = O.useMemo((function() {
                        var e;
                        return (null === (e = qt ? [] : Lt) || void 0 === e ? void 0 : e.filter((function(e) {
                            var t, n = e.id,
                                r = e.active,
                                l = e.archived;
                            return r && !l && !Tt && (null == yt || null === (t = yt.parentListings) || void 0 === t ? void 0 : t.includes(n))
                        }))) || []
                    }), [yt, Tt, Lt, qt]),
                    Gt = Qe || lt || ft || Be || jt || Ut,
                    Ft = (null == u ? void 0 : u.joinState) === ht.wN.OPEN ? "Your group is already set to Free Join, so enabling this option won’t have any effect. Subscribers will still join automatically." : "When enabled, anyone can purchase this role and join the group, regardless of the group’s join rules. This option overrides standard join settings.";
                (0, O.useEffect)((function() {
                    if (yt) {
                        if (Oe(yt.groupAccessRemove), (null == u ? void 0 : u.joinState) === ht.wN.OPEN) return Ze(!0), void F(At(At({}, G), {}, {
                            groupAccess: !0
                        }));
                        Ze(yt.groupAccess)
                    }
                }), [yt]);
                var Dt = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = {};
                    "new" === (null == y ? void 0 : y.id) && (t = At({}, y)), e || (ie(null == y ? void 0 : y.requiresTwoFactor), ge(null == y ? void 0 : y.isAddedOnJoin), be(null == y ? void 0 : y.isSelfAssignable), Ae((null == y ? void 0 : y.permissions) || [])), d(0), M(t), F(null)
                };
                (0, O.useEffect)((function() {
                    Dt(), ee(null != y && y.defaultRole ? "permissions" : "general")
                }), [u, v]), (0, O.useEffect)((function() {
                    b.current ? b.current = !1 : ((null == y ? void 0 : y.requiresTwoFactor) !== oe && M(At(At({}, I), {}, {
                        requiresTwoFactor: oe
                    })), (null == y ? void 0 : y.isAddedOnJoin) !== me && M(At(At({}, I), {}, {
                        isAddedOnJoin: me
                    })), (null == y ? void 0 : y.isSelfAssignable) !== ve && M(At(At({}, I), {}, {
                        isSelfAssignable: ve
                    })), (null == y ? void 0 : y.permissions) !== je && M(At(At({}, I), {}, {
                        permissions: je
                    })))
                }), [oe, me, ve, je]), (0, O.useEffect)((function() {
                    0 !== p && M(At(At({}, I), {}, {
                        order: p + y.order
                    }))
                }), [p]);
                var Xt = (0, de._b)(Je),
                    _t = O.useMemo((function() {
                        return (0, xe.Ps)({
                            permissionName: qe,
                            permissionsMap: Xt
                        })
                    }), [qe, Xt]);
                if ((0, O.useEffect)((function() {
                        if (je.length > 0 && Xt && Object.keys(Xt).length > 0) {
                            var e = je.filter((function(e) {
                                return !e.includes("*") && !Xt[e]
                            }));
                            e.length > 0 && Xe(e)
                        }
                    }), [je, Xt]), !y || Be || $e) return null;
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
                        M(At(At({}, I), {}, (0, U.Z)({}, n, r))), V(At(At({}, _), {}, (0, U.Z)({}, n, e.target.checkValidity())))
                    },
                    Bt = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var t, n, r, l, a;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("new" !== (t = At({}, I)).id) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 4, Ye({
                                            groupId: u.id,
                                            data: t
                                        }).unwrap();
                                    case 4:
                                        !(n = e.sent).error && null != n && n.id && E("../roles/".concat(null == n ? void 0 : n.id)), e.next = 13;
                                        break;
                                    case 8:
                                        if (!(Object.keys(I).length > 0)) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 11, st({
                                            groupId: u.id,
                                            roleId: y.id,
                                            productId: (null == yt ? void 0 : yt.id) || null,
                                            productData: G,
                                            roleData: t
                                        });
                                    case 11:
                                        (r = e.sent).error ? f((0, te.d)({
                                            title: "Failed to update role",
                                            icon: x.eH,
                                            message: null !== (l = null === (a = r.error.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== l ? l : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        })) : Dt(!0);
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
                                        if ("new" === y.id) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.prev = 2, e.next = 5, pt({
                                            groupId: u.id,
                                            roleId: y.id,
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
                    Vt = 0 === y.order,
                    Wt = "new" === y.id,
                    Yt = y.requiresPurchase && !g,
                    Ht = R({
                        groupMember: null == u ? void 0 : u.myMember,
                        permission: "group-default-role-manage"
                    }),
                    Qt = R({
                        groupMember: null == u ? void 0 : u.myMember,
                        permission: "group-roles-assign"
                    }),
                    Kt = y.defaultRole && !Ht,
                    en = !y.requiresPurchase && !y.defaultRole && !Vt,
                    tn = !y.defaultRole && !Vt,
                    nn = tn && !Wt;
                return O.createElement("div", null, at && O.createElement(le.qX, {
                    title: "Error updating role",
                    type: "error"
                }, "Failed to update role: ", null == ot || null === (t = ot.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), Ke && O.createElement(le.qX, {
                    title: "Error creating role",
                    type: "error"
                }, "Failed to create role: ", null == et || null === (n = et.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), O.createElement(A.Z, {
                    isOpen: Pe
                }, O.createElement(le.oI, {
                    className: "text-center"
                }, O.createElement("h4", null, "Are you sure?")), O.createElement(le.Ao, null, O.createElement($.Z, null, vt && O.createElement(le.qX, {
                    title: "Error deleting role",
                    type: "error"
                }, "Failed to delete role: ", null !== (a = null == bt || null === (o = bt.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : "Unexpected error occurred"), O.createElement("p", null, "This will delete the role and all members with this role will be demoted to the lowest role. This action cannot be undone.")), O.createElement("div", {
                    className: "d-flex flex-row justify-content-md-center"
                }, O.createElement(le.zx, {
                    danger: !0,
                    onClick: function() {
                        $t(!0)
                    },
                    loading: ft,
                    expand: !0
                }, O.createElement(le.$1, {
                    icon: z.$
                }), " Yes, Delete"), " ", O.createElement(le.zx, {
                    onClick: function() {
                        Re(!1)
                    },
                    disabled: ft,
                    expand: !0
                }, "Cancel")))), null == y ? O.createElement("div", null, O.createElement("p", null, "Pick a role to edit.")) : O.createElement("div", null, Wt ? O.createElement("h6", {
                    className: "text-center"
                }, "New", y.requiresPurchase && " Paid", " Role") : O.createElement("h6", {
                    className: "text-center"
                }, Yt ? "Viewing" : "Editing", " - ", y.name), function() {
                    var e;
                    if (null == y || !y.createdAt || !y.requiresPurchase || zt.length) return null;
                    var t = "activate its associated subscription";
                    return O.createElement(le.qX, {
                        type: "info",
                        title: "No Active Subscriptions"
                    }, "Before people can buy this role, ", g ? "you'll" : "the group owner will", " need to", " ", g && !Tt && null != yt && null !== (e = yt.parentListings) && void 0 !== e && e.length ? O.createElement(j.rU, {
                        to: "/home/marketplace/storefront/subscriptions"
                    }, t) : t, " ", "in ", g ? "your" : "their", " Store. ", g ? "You" : "The Group Owner", " can also give the product and listing their own images, descriptions and other details from there.")
                }(), !y.defaultRole && O.createElement(B.Z, null, O.createElement(ce.Z, {
                    tabs: [{
                        name: "General",
                        id: "general",
                        icon: c.b7,
                        condition: !(null != y && y.defaultRole)
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
                })), O.createElement(Ot.Z, {
                    activeTab: K
                }, O.createElement(Ct.Z, {
                    tabId: "general"
                }, nn && !Yt && O.createElement(O.Fragment, null, O.createElement(B.Z, null, O.createElement("h6", {
                    className: "text-center"
                }, "Change role order"), O.createElement("div", {
                    className: "d-flex flex-row justify-content-md-center"
                }, O.createElement(le.zx, {
                    onClick: function() {
                        m({
                            offset: -1,
                            roleId: y.id
                        })
                    },
                    expand: !0
                }, O.createElement(le.$1, {
                    icon: Zt.mT
                }), " Move Up"), " ", O.createElement(le.zx, {
                    onClick: function() {
                        m({
                            offset: 1,
                            roleId: y.id
                        })
                    },
                    expand: !0
                }, O.createElement(le.$1, {
                    icon: xt.pt
                }), " Move Down"))), " ", " "), O.createElement(B.Z, {
                    className: "mb-2"
                }, O.createElement(J.Z, null, O.createElement(le.II, {
                    type: "text",
                    name: "name",
                    value: null != I.name ? I.name : y.name,
                    onChange: Jt,
                    maxLength: 64,
                    required: !0,
                    disabled: Yt || y.defaultRole,
                    placeholder: "Enter Role's Name"
                }), !1 === _.name && O.createElement(W.Z, null, "Must be between 1 and 64 characters."))), O.createElement(B.Z, {
                    className: "mb-3"
                }, O.createElement(J.Z, null, O.createElement(le.gx, {
                    type: "textarea",
                    name: "description",
                    value: null != I.description ? I.description : y.description,
                    onChange: Jt,
                    maxLength: 256,
                    disabled: Yt || y.defaultRole,
                    placeholder: "Enter Role's Description",
                    inputStyle: {
                        height: "100px"
                    }
                }), !1 === _.description && O.createElement(W.Z, null, "Must be 256 characters or less."))), tn && !y.requiresPurchase && Qt && O.createElement(B.Z, {
                    className: "my-2"
                }, O.createElement(ae.Z, {
                    label: "Assign On Join",
                    value: "isAddedOnJoin",
                    defaultChecked: null != I.isAddedOnJoin ? I.isAddedOnJoin : y.isAddedOnJoin,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        ge(t)
                    }
                }), O.createElement(Y.Z, null, "If enabled, new members will be assigned this role when they join the group. This will not affect existing members.")), en && O.createElement(B.Z, {
                    className: "my-2"
                }, O.createElement(ae.Z, {
                    label: "Self Assignable",
                    value: "isSelfAssignable",
                    defaultChecked: ve,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        be(t)
                    }
                }), O.createElement(Y.Z, null, "Allows members of the group to assign this role to themselves.")), O.createElement(B.Z, {
                    className: "my-3"
                }, O.createElement(ae.Z, {
                    label: "Require Two-Factor Authentication",
                    value: "requiresTwoFactor",
                    defaultChecked: oe,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        return ie(t)
                    }
                }), O.createElement(Y.Z, null, "Requires members to have 2FA before permissions apply.")), y.requiresPurchase && O.createElement(O.Fragment, null, O.createElement(B.Z, {
                    className: "my-2"
                }, O.createElement(ae.Z, {
                    label: "Enable Free Join for Subscribers",
                    value: "productGroupAccess",
                    defaultChecked: ye,
                    onChangeCallback: function(e) {
                        var t, n, r, l = e.checked;
                        t = l, n = At(At({}, I), {}, {
                            productGroupAccess: t
                        }), r = At(At({}, G), {}, {
                            groupAccess: t
                        }), t || (n.productGroupAccessRemove = void 0, r.groupAccessRemove = !1, Oe(!1)), Ze(t), M(n), F(r)
                    },
                    disabled: (null == u ? void 0 : u.joinState) === ht.wN.OPEN
                }), O.createElement(Y.Z, null, Ft)), (null != I.productGroupAccess ? I.productGroupAccess : ye) && O.createElement(B.Z, {
                    className: "my-2"
                }, O.createElement(ae.Z, {
                    label: "Remove Members After Expiration",
                    value: "productGroupAccessRemove",
                    defaultChecked: null != I.productGroupAccessRemove ? I.productGroupAccessRemove : Ie,
                    onChangeCallback: function(e) {
                        var t, n = e.checked;
                        Oe(t = n), M(At(At({}, I), {}, {
                            productGroupAccessRemove: t
                        })), F(At(At({}, G), {}, {
                            groupAccessRemove: t
                        }))
                    }
                }), O.createElement(Y.Z, null, "If enabled, group members with this role are removed from the group entirely when their subscription ends. Note that this will remove any member whose subscription ends, whether they bought their way in or not."))), y.requiresPurchase && Wt && O.createElement(B.Z, null, O.createElement(J.Z, null, O.createElement(W.Z, {
                    htmlFor: "productPriceTokens"
                }, "Credits", "forevers" === y.productDurationType ? "" : " per ".concat(1 === y.productDuration ? y.productDurationType.replace(/s$/, "") : "".concat(y.productDuration, " ").concat(y.productDurationType)))), O.createElement(J.Z, null, O.createElement(le.II, {
                    type: "number",
                    name: "productPriceTokens",
                    value: null != I.productPriceTokens ? I.productPriceTokens : y.productPriceTokens,
                    onChange: Jt,
                    required: !0,
                    step: "1",
                    min: St.nk,
                    max: St.A1
                }), !1 === _.productPriceTokens && O.createElement(W.Z, null, "Must be a whole number between ", O.createElement(le.b5, null), St.nk.toLocaleString(), " and ", O.createElement(le.b5, null), St.A1.toLocaleString(), "."))), y.productId && O.createElement("p", null, O.createElement("small", null, g ? "You" : "The Group Owner", " can manage details and subscription behaviour of this role's", " ", O.createElement(j.rU, {
                    to: "/home/marketplace/storefront/products#".concat(y.productId)
                }, "associated product"), !Tt && null != yt && null !== (i = yt.parentListings) && void 0 !== i && i.length ? O.createElement(O.Fragment, null, ", and the details, price and availability of the product's", " ", O.createElement(j.rU, {
                    to: "/home/marketplace/storefront/listings#".concat(yt.parentListings[0])
                }, "associated listing"), " ") : " ", g ? "in your Store" : "in their Store", "."))), O.createElement(Ct.Z, {
                    tabId: "permissions"
                }, $e && O.createElement(le.qX, {
                    title: "Error",
                    type: "error"
                }, "There was an error loading permissions."), (null == y ? void 0 : y.defaultRole) && O.createElement(O.Fragment, null, O.createElement("p", null, y.description), O.createElement("hr", null)), Vt || Kt ? O.createElement("p", null, "You can't edit the ", Vt ? "Group Owner" : "default", " role.", " ", Vt ? "It must always have all" : "You lack the required", " permissions.") : y.requiresPurchase && !g ? O.createElement("p", null, "You can't edit a paid role if you are not the group owner.") : O.createElement("div", null, Je.map((function(e) {
                    var t = e.name,
                        n = Xt[t],
                        r = function(e) {
                            var t = e.permission,
                                n = e.role;
                            return !h && (n.requiresPurchase && !t.isManagementPermission ? "You cannot add a management permission to a paid role." : !t.allowedToAdd && "You do not have this permission.")
                        }({
                            permission: n,
                            role: y
                        });
                    return O.createElement("div", {
                        key: n.name,
                        className: "mb-2"
                    }, O.createElement(ae.Z, {
                        label: n.displayName,
                        value: n.name,
                        defaultChecked: je.includes(n.name),
                        disabled: !!r,
                        onChangeCallback: function(e) {
                            var t = e.checked;
                            ! function(e, t) {
                                var n;
                                if (t) {
                                    var r = (0, xe.QZ)({
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
                    }), (n.help || n.dependsOn) && O.createElement(Y.Z, null, n.help, n.help && n.dependsOn && " ", n.dependsOn && O.createElement(O.Fragment, null, "Requires ", (0, q.Z)(n.dependsOn).map((function(e) {
                        return "“".concat(Xt[e].displayName || e, "”")
                    })).join(", "), "."), r && O.createElement("div", null, r)))
                }))))), !Kt && (Yt ? O.createElement("p", null, O.createElement("small", null, "Only the Group Owner can edit paid roles.")) : O.createElement("div", {
                    className: "d-flex flex-row align-content-center mt-1\n                  ".concat(Wt || Vt || y.defaultRole ? "justify-content-end" : "justify-content-between")
                }, !Wt && !Vt && !y.defaultRole && O.createElement(le.zx, {
                    danger: !0,
                    onClick: function() {
                        $t(!1)
                    },
                    disabled: Gt
                }, O.createElement(T.Z, {
                    icon: z.$
                }), " Delete"), O.createElement("div", {
                    className: "d-flex flex-row"
                }, O.createElement(le.zx, {
                    neutral: !0,
                    onClick: function() {
                        Dt()
                    },
                    disabled: Gt || 0 === Object.keys(I).length
                }, O.createElement(T.Z, {
                    icon: w.NB
                }), " ", Wt ? "Clear" : "Cancel"), " ", O.createElement(le.zx, {
                    loading: Gt && !ft,
                    disabled: Gt || 0 === Object.keys(I).length || Object.values(_).includes(!1),
                    onClick: Bt
                }, O.createElement(T.Z, {
                    icon: Et.r6
                }), " Save"))))), O.createElement(le.sm, {
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
                }, O.createElement("div", null, O.createElement("p", null, "Turning off “", null === (s = Xt[qe]) || void 0 === s ? void 0 : s.displayName, "” will also turn off permissions that currently require it:"), O.createElement("ul", null, (0, q.Z)(_t).filter((function(e) {
                    return je.includes(e)
                })).map((function(e) {
                    var t = Xt[e];
                    return O.createElement("li", {
                        key: e
                    }, "“", t.displayName, "”")
                }))), O.createElement("strong", null, "Are you sure you want to turn this off?"))), O.createElement(le.sm, {
                    isOpen: !!De,
                    confirmCallback: function() {
                        return Ae(je.filter((function(e) {
                            return !De.includes(e)
                        }))), void Xe(null)
                    },
                    cancelCallback: function() {
                        return Xe(null)
                    },
                    headerText: "Invalid Permissions Detected",
                    confirmText: "Remove Permissions",
                    cancelText: "Keep Permissions"
                }, O.createElement("div", null, O.createElement("p", null, "This role contains permissions that no longer exist or are unavailable for your group."), O.createElement("p", null, "These permissions will be removed from the role: ", O.createElement("strong", null, null == De ? void 0 : De.join(", "))))))
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
                    u = O.useMemo((function() {
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
                        0 === e.order ? (l.push(O.createElement(qt, {
                            key: "management-header"
                        }, "Management Roles")), a = O.createElement(O.Fragment, null, O.createElement(le.$1, {
                            icon: Se.nm,
                            title: "Management Role"
                        }), " ")) : e.permissions.includes("group-instance-moderate") ? a = O.createElement(O.Fragment, null, O.createElement(le.$1, {
                            icon: Rt.U7,
                            title: "Instance Moderator Role"
                        }), " ") : e.requiresPurchase ? a = O.createElement(O.Fragment, null, O.createElement(le.$1, {
                            icon: Lt.default,
                            title: "Paid Role"
                        }), " ") : e.defaultRole && (l.push(O.createElement(qt, {
                            key: "default-header"
                        }, "Default Role")), a = O.createElement(O.Fragment, null, O.createElement(le.$1, {
                            icon: Pt.Z3,
                            title: "Default Role"
                        }), " ")), e.isManagementRole || e.defaultRole || null === (n = f[t - 1]) || void 0 === n || !n.isManagementRole || l.push(O.createElement(qt, {
                            key: "member-header"
                        }, "Member Roles"));
                        var i = (0 === (null == r ? void 0 : r.memberRank) || "new" === e.id || e.order > (null == r ? void 0 : r.memberRank)) && (v.includes("*") || 0 === e.permissions.filter((function(e) {
                            return !v.includes(e)
                        })).length);
                        return l.push(o || i ? O.createElement(Ft, null, O.createElement(Xt, {
                            key: e.id,
                            to: "/home/group/".concat(r.id, "/settings/roles/").concat(e.id),
                            className: e.id === u ? "selected" : ""
                        }, a, e.name + ("new" === e.id ? " (unsaved new role)" : ""))) : O.createElement(Gt, {
                            key: e.id
                        }, a, e.name + ("new" === e.id ? " (unsaved new role)" : ""))), l
                    }));
                return O.createElement(O.Fragment, null, E && O.createElement(M.Z, {
                    role: "alert",
                    color: "warning"
                }, "This group has reached maximum number of roles"), O.createElement(zt, null, b, O.createElement("li", null, O.createElement(Dt, {
                    to: "/home/group/".concat(r.id, "/settings/roles/new"),
                    end: !0,
                    disabled: E
                }, "Create Role")), a && p && O.createElement("li", null, g ? O.createElement(Dt, {
                    to: "/home/group/".concat(r.id, "/settings/roles/new/paid"),
                    end: !0,
                    disabled: E
                }, "Create Paid Role") : O.createElement(le.qX, {
                    slim: !0
                }, "Want to create a paid role? Find out more and sign up", " ", O.createElement(j.rU, {
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
                Ft = (0, a.Z)("li", {
                    target: "e1hiny752"
                })({
                    name: "1hcx8jb",
                    styles: "padding:0"
                }),
                Dt = (0, a.Z)(j.OL, {
                    target: "e1hiny751"
                })({
                    name: "1ekamc",
                    styles: "display:inline-block;padding:5px;margin-bottom:8px;border-radius:4px;width:100%;color:inherit;background-color:#064b5c;border:#064b5c solid 2px;text-align:center;flex:1;:hover{background-color:#064b5c;border-color:#086c84;text-decoration:none;}&.active{background-color:#454b54;}"
                }),
                Xt = (0, a.Z)(Dt, {
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
                    a = O.useState(0),
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
                O.useEffect((function() {
                    c(0)
                }), [r]);
                return O.createElement(_t.Z, {
                    loading: !t.roles
                }, s && O.createElement(le.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: s.message
                }), O.createElement(le.oI, null, O.createElement("h4", {
                    className: "text-center"
                }, "Roles")), O.createElement(le.Ao, null, O.createElement(Bt, null, O.createElement($t, null, O.createElement(Ut, {
                    group: t,
                    roleLocalOffset: i,
                    isGroupOwner: d
                })), O.createElement(Tt, {
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
            var Yt = O.lazy((function() {
                    return Promise.all([n.e(123), n.e(786), n.e(4444), n.e(9908), n.e(229), n.e(3294), n.e(527), n.e(4814)]).then(n.bind(n, 40527))
                })),
                Ht = [{
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
                    y = null !== (t = null == h ? void 0 : h.transferTargetId) && void 0 !== t ? t : null,
                    k = (0, C.I0)(),
                    j = (0, S.s0)(),
                    M = O.useState({
                        name: h.name,
                        shortCode: h.shortCode,
                        description: h.description,
                        isSearchable: h.isSearchable,
                        joinState: h.joinState,
                        allowGroupJoinPrompt: h.allowGroupJoinPrompt,
                        language: h.languages,
                        rules: h.rules
                    }),
                    P = (0, l.Z)(M, 2),
                    se = P[0],
                    ue = P[1],
                    me = O.useState(!1),
                    de = (0, l.Z)(me, 2),
                    ge = de[0],
                    fe = de[1],
                    Ee = O.useState(!1),
                    ve = (0, l.Z)(Ee, 2),
                    be = ve[0],
                    he = ve[1],
                    we = O.useState(!1),
                    ye = (0, l.Z)(we, 2),
                    xe = ye[0],
                    Ze = ye[1],
                    ke = O.useState(!1),
                    Ne = (0, l.Z)(ke, 2),
                    Ie = Ne[0],
                    Oe = Ne[1],
                    Se = O.useState(null),
                    Ae = (0, l.Z)(Se, 2),
                    Me = Ae[0],
                    Te = Ae[1],
                    Re = O.useState(!1),
                    Le = (0, l.Z)(Re, 2),
                    Ue = Le[0],
                    qe = Le[1],
                    ze = O.useState(!1),
                    Ge = (0, l.Z)(ze, 2),
                    Fe = Ge[0],
                    Xe = Ge[1],
                    _e = O.useState(null),
                    Je = (0, l.Z)(_e, 2),
                    $e = Je[0],
                    Ve = Je[1],
                    We = O.useState(!1),
                    Ye = (0, l.Z)(We, 2),
                    He = Ye[0],
                    Qe = Ye[1],
                    Ke = O.useState(!1),
                    et = (0, l.Z)(Ke, 2),
                    tt = et[0],
                    nt = et[1],
                    rt = O.useState(!1),
                    lt = (0, l.Z)(rt, 2),
                    at = lt[0],
                    ot = lt[1],
                    it = O.useState(null),
                    ct = (0, l.Z)(it, 2),
                    st = ct[0],
                    mt = ct[1],
                    dt = O.useState(null),
                    pt = (0, l.Z)(dt, 2),
                    gt = (pt[0], pt[1]),
                    ft = O.useState(!1),
                    Et = (0, l.Z)(ft, 2),
                    vt = Et[0],
                    bt = Et[1],
                    wt = O.useState(null !== (n = h.languages) && void 0 !== n ? n : []),
                    xt = (0, l.Z)(wt, 2),
                    Zt = xt[0],
                    kt = xt[1],
                    Nt = O.useState(null !== (a = h.links) && void 0 !== a ? a : []),
                    It = (0, l.Z)(Nt, 2),
                    Ot = It[0],
                    Ct = It[1],
                    St = O.useState(null),
                    jt = (0, l.Z)(St, 2),
                    At = jt[0],
                    Mt = jt[1],
                    Tt = O.useState(null),
                    Pt = (0, l.Z)(Tt, 2),
                    Rt = (Pt[0], Pt[1]),
                    Lt = (0, C.v9)((function(e) {
                        return e.currentUser.isMod
                    })),
                    Ut = (null == h ? void 0 : h.ownerId) === (null == w ? void 0 : w.id),
                    qt = (0, pe.mA)(),
                    zt = (0, l.Z)(qt, 2),
                    Gt = zt[0],
                    Ft = zt[1],
                    Dt = Ft.isError,
                    Xt = Ft.isLoading,
                    _t = Ft.error,
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
                    un = (null == $e || null === (c = $e.user) || void 0 === c ? void 0 : c.id) && (null == h ? void 0 : h.id) && null === y,
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
                    En = null !== y,
                    vn = (0, re.GR)(y, {
                        skip: !En,
                        refetchOnMountOrArgChange: !0
                    }),
                    bn = vn.data,
                    hn = vn.isFetching,
                    wn = vn.isError,
                    yn = vn.error,
                    xn = (0, pe.HT)(),
                    Zn = (0, l.Z)(xn, 2),
                    kn = Zn[0],
                    Nn = Zn[1],
                    In = (Nn.data, Nn.isFetching),
                    On = Nn.isError,
                    Cn = Nn.error,
                    Sn = (0, pe.rq)(),
                    jn = (0, l.Z)(Sn, 2),
                    An = jn[0],
                    Mn = jn[1],
                    Tn = (Mn.data, Mn.isFetching),
                    Pn = Mn.isError,
                    Rn = Mn.error;
                O.useEffect((function() {
                    rn ? j("/home/groups") : (Qe(!1), fe(!1))
                }), [tn]), O.useEffect((function() {
                    if (xe && $e && pn && Oe(!0), !pn && xe && dn && !gn) {
                        Oe(!1);
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
                        Te(e), Ze(!1), he(!1), qe(!0)
                    }
                    var t;
                    !pn && xe && gn && (Oe(!1), Ze(!1), Ve(null), k((0, te.d)({
                        title: "Error Validating Group Transfer",
                        icon: x.eH,
                        message: "".concat(null == fn || null === (t = fn.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                        color: "error",
                        timeout: 3e3
                    })))
                }), [xe, $e, pn, gn, dn]), O.useEffect((function() {
                    var e;
                    (hn || wn || !bn || Ve({
                        user: bn
                    }), !hn && wn) && k((0, te.d)({
                        title: "Error Fetching New Owner Data",
                        icon: x.eH,
                        message: "".concat(null == yn || null === (e = yn.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message),
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
                                        On && (Xe(!1), qe(!1), Ve(null), k((0, te.d)({
                                            title: "Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null == Cn || null === (n = Cn.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 6e3
                                        }))), On || k((0, te.d)({
                                            title: "Group Transfer Initiated",
                                            icon: Z.f8,
                                            color: "success",
                                            timeout: 6e3
                                        })), Xe(!1), qe(!1), e.next = 16;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(1), Xe(!1), qe(!1), Ve(null), k((0, te.d)({
                                            title: "Group Transfer Error",
                                            icon: x.eH,
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
                                            icon: x.eH,
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
                                            icon: x.eH,
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
                    Fn = function(e) {
                        Ct(e), ue(Wt(Wt({}, se), {}, {
                            links: e
                        }))
                    },
                    Dn = function(e, t) {
                        var n = (0, q.Z)(Zt);
                        n[e] = t, n = n.filter((function(e) {
                            return "none" !== e
                        })), kt(n), ue(Wt(Wt({}, se), {}, {
                            languages: n
                        }))
                    },
                    Xn = an.includes("permission-user-gallery"),
                    _n = an.includes("permission-user-icons"),
                    Jn = Xt || tn || In || Tn;
                return O.createElement("div", null, O.createElement(J.Z, {
                    className: "mt-4"
                }, O.createElement(ce.Z, {
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
                        icon: D.aC,
                        condition: Lt || R({
                            groupMember: null == h ? void 0 : h.myMember,
                            permission: "group-roles-manage"
                        })
                    }, {
                        name: "Logs",
                        to: "logs",
                        icon: F.tx,
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
                })), O.createElement(S.Z5, null, O.createElement(S.AW, {
                    path: "/",
                    element: Lt || R({
                        groupMember: null == h ? void 0 : h.myMember,
                        permission: "group-data-manage"
                    }) ? O.createElement(O.Fragment, null, O.createElement(B.Z, null, O.createElement(A.Z, {
                        isOpen: at,
                        className: (0, I.iv)({
                            name: "1ul0gzp",
                            styles: "max-width:1500px!important"
                        })
                    }, O.createElement($.Z, null, O.createElement(Yt, {
                        isSelector: !0,
                        selectedCallback: function(e, t) {
                            mt(e), gt(t), ot(!1)
                        },
                        selectedId: null != st ? st : "",
                        activeTab: "photos"
                    })), O.createElement(V.Z, null, O.createElement(le.zx, {
                        onClick: function() {
                            ot(!1), k((0, ee.b9)())
                        }
                    }, "Cancel"))), O.createElement(A.Z, {
                        isOpen: vt,
                        className: (0, I.iv)({
                            name: "1ul0gzp",
                            styles: "max-width:1500px!important"
                        })
                    }, O.createElement($.Z, null, O.createElement(Yt, {
                        isSelector: !0,
                        selectedCallback: function(e, t) {
                            Mt(e), Rt(t), bt(!1)
                        },
                        selectedId: null != At ? At : "",
                        activeTab: "icons"
                    })), O.createElement(V.Z, null, O.createElement(le.zx, {
                        onClick: function() {
                            bt(!1), k((0, ee.LC)())
                        }
                    }, "Cancel"))), O.createElement(J.Z, null, Dt ? O.createElement(le.qX, {
                        type: "error",
                        title: "An error occurred",
                        message: (null == _t || null === (u = _t.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message) || "Something went wrong updating the group"
                    }) : null, O.createElement(le.oI, null, O.createElement("h4", {
                        className: "text-center"
                    }, "General")), O.createElement(le.Ao, null, O.createElement("div", null, O.createElement(B.Z, {
                        className: "mb-1"
                    }, O.createElement(J.Z, null, O.createElement(W.Z, {
                        for: "name"
                    }, "Name")), O.createElement(J.Z, null, O.createElement(le.II, {
                        type: "text",
                        name: "name",
                        className: "full-width",
                        value: se.name,
                        onChange: Ln
                    }))), O.createElement(B.Z, {
                        className: "mb-1"
                    }, O.createElement(J.Z, null, O.createElement(W.Z, {
                        for: "shortCode"
                    }, "Short Code (3-6 letters/numbers)")), O.createElement(J.Z, null, O.createElement(le.II, {
                        type: "text",
                        name: "shortCode",
                        className: "full-width",
                        value: se.shortCode,
                        maxLength: 6,
                        onChange: Ln
                    }))), O.createElement(B.Z, {
                        className: "mb-1"
                    }, O.createElement(J.Z, null, O.createElement(W.Z, {
                        for: "description"
                    }, "Description")), O.createElement(J.Z, null, O.createElement(Kt, {
                        name: "description",
                        className: "full-width",
                        value: null !== (m = se.description) && void 0 !== m ? m : "",
                        onChange: Ln
                    }))), O.createElement(B.Z, null, O.createElement(J.Z, null, O.createElement(W.Z, {
                        for: "description"
                    }, "Rules")), O.createElement(J.Z, null, O.createElement(Kt, {
                        name: "rules",
                        className: "full-width",
                        value: null !== (d = se.rules) && void 0 !== d ? d : "",
                        onChange: Ln
                    }))), O.createElement("div", null, !1, O.createElement(B.Z, {
                        className: "mt-2"
                    }, O.createElement(J.Z, null, O.createElement(W.Z, {
                        for: "isJoinable"
                    }, "Open to New Members")), O.createElement(J.Z, null, O.createElement(le.Lt, {
                        onChange: function(e) {
                            var t = e === ht.wN.OPEN;
                            ue(Wt(Wt({}, se), {}, {
                                joinState: e,
                                allowGroupJoinPrompt: t
                            }))
                        },
                        value: null !== (p = se.joinState) && void 0 !== p ? p : "",
                        name: "joinState",
                        options: Ht
                    }))), O.createElement("br", null), O.createElement("div", {
                        className: "mt-2"
                    }, O.createElement(ae.Z, {
                        label: "Automatic Group Invites",
                        value: "allowGroupJoinPrompt",
                        disabled: se.joinState !== ht.wN.OPEN,
                        defaultChecked: null !== (g = se.allowGroupJoinPrompt) && void 0 !== g ? g : se.joinState === ht.wN.OPEN,
                        onChangeCallback: function(e) {
                            var t = e.checked;
                            ue(Wt(Wt({}, se), {}, {
                                allowGroupJoinPrompt: t
                            }))
                        }
                    }), O.createElement(Y.Z, null, "Automatically send group invites to non-members who’ve spent over 5 minutes in this group’s instances or made a friend there. Only available to Open groups.")), O.createElement(B.Z, {
                        className: "mt-2"
                    }, O.createElement(J.Z, null, O.createElement(W.Z, {
                        for: "languages"
                    }, "Languages")), O.createElement(J.Z, null, Zt.length >= 0 && O.createElement(le.Lt, {
                        onChange: function(e) {
                            Dn(0, e)
                        },
                        value: null !== (f = null == Zt ? void 0 : Zt[0]) && void 0 !== f ? f : "none",
                        name: "languages",
                        options: sn,
                        className: "mb-1"
                    }), Zt.length >= 1 && O.createElement(le.Lt, {
                        onChange: function(e) {
                            Dn(1, e)
                        },
                        value: null !== (E = null == Zt ? void 0 : Zt[1]) && void 0 !== E ? E : "none",
                        name: "languages",
                        options: sn,
                        className: "mb-1"
                    }), Zt.length >= 2 && O.createElement(le.Lt, {
                        onChange: function(e) {
                            Dn(2, e)
                        },
                        value: null !== (v = null == Zt ? void 0 : Zt[2]) && void 0 !== v ? v : "none",
                        name: "languages",
                        options: sn,
                        className: "mb-1"
                    }))), O.createElement("br", null), O.createElement(B.Z, {
                        className: "mt-2"
                    }, O.createElement(J.Z, null, O.createElement(W.Z, {
                        for: "links"
                    }, "Group Links")), O.createElement(J.Z, null, O.createElement(Be, {
                        groupBioLinks: Ot,
                        callback: Fn,
                        index: 0
                    }), O.createElement(Be, {
                        groupBioLinks: Ot,
                        callback: Fn,
                        index: 1
                    }), O.createElement(Be, {
                        groupBioLinks: Ot,
                        callback: Fn,
                        index: 2
                    }))), O.createElement("br", null), O.createElement(B.Z, null, O.createElement(J.Z, null), O.createElement(J.Z, null, st && O.createElement("div", null, O.createElement("span", null, "Replacing banner with: ", st), O.createElement("br", null), O.createElement(le.zx, {
                        onClick: function() {
                            mt(null), gt(null)
                        }
                    }, "Clear banner selection")), At && O.createElement("div", null, O.createElement("span", null, "Replacing icon with: ", At), O.createElement("br", null), O.createElement(le.zx, {
                        onClick: function() {
                            Rt(null), Mt(null)
                        }
                    }, "Clear icon selection")))), O.createElement("br", null), O.createElement(B.Z, null, O.createElement(J.Z, null), O.createElement(J.Z, null, Xn && O.createElement(le.zx, {
                        color: "primary",
                        onClick: function() {
                            ot(!0)
                        }
                    }, "Update Group Banner"), " ", _n && O.createElement(le.zx, {
                        color: "primary",
                        onClick: function() {
                            bt(!0)
                        }
                    }, "Update Group Icon")))), O.createElement(B.Z, {
                        className: "mt-4"
                    }, O.createElement(le.zx, {
                        neutral: !0,
                        onClick: Un,
                        disabled: Jn,
                        loading: Jn
                    }, "Save")))))), Ut && !y && O.createElement(O.Fragment, null, O.createElement(Ce, {
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
                        isSelecting: Ie
                    }), (null == $e ? void 0 : $e.user) && Ue && O.createElement(De, {
                        group: h,
                        validity: Me,
                        prospectiveNewOwner: $e,
                        onTransfer: function() {
                            return qn()
                        },
                        onCancel: function() {
                            return qe(!1)
                        },
                        isOpen: Ue,
                        isTransferring: Fe
                    }), O.createElement(Pe, {
                        group: h,
                        onButtonClick: function() {
                            return he(!0)
                        },
                        isLoading: Jn || !1
                    })), Ut && y && O.createElement(je, {
                        group: h,
                        onClickCallback: function() {
                            return zn()
                        },
                        isDeleting: tt || !1
                    }), Ut && O.createElement(O.Fragment, null, en ? O.createElement(le.qX, {
                        type: "error",
                        title: "Could not delete group",
                        message: (null == nn || null === (b = nn.data) || void 0 === b || null === (b = b.error) || void 0 === b ? void 0 : b.message) || "Something went wrong deleting the group"
                    }) : null, O.createElement(le.oI, {
                        className: "mt-2"
                    }, O.createElement("h4", {
                        className: "text-center"
                    }, "Delete Group")), O.createElement(le.Ao, null, O.createElement("p", null, "You can delete this group as long as it has no other members. This cannot be undone."), O.createElement(A.Z, {
                        isOpen: ge
                    }, O.createElement(H.Z, {
                        close: O.createElement(oe.Z, {
                            onClick: function() {
                                fe(!1)
                            }
                        })
                    }, O.createElement("h4", null, "Delete Group?")), O.createElement($.Z, {
                        className: (0, I.iv)({
                            name: "1bpq7li",
                            styles: "padding:30px;padding-top:0"
                        })
                    }, He ? O.createElement("div", {
                        className: "full-width text-center"
                    }, O.createElement(ie.Z, null)) : O.createElement("div", {
                        className: (0, I.iv)({
                            name: "pc0kie",
                            styles: ">*{margin-top:15px;}"
                        })
                    }, O.createElement(B.Z, null, O.createElement("span", {
                        className: "full-width text-center"
                    }, "Hey! This can't be undone! Only do this if you ", O.createElement("strong", null, "KNOW"), " what you're doing!")), O.createElement(B.Z, null, O.createElement(le.zx, {
                        onClick: Gn,
                        danger: !0,
                        className: "full-width"
                    }, "DELETE IT!")), O.createElement(B.Z, null, O.createElement(le.zx, {
                        className: "full-width",
                        onClick: function() {
                            fe(!1)
                        }
                    }, "Get me outta here!"))))), O.createElement(J.Z, null, O.createElement(le.zx, {
                        danger: !0,
                        onClick: function() {
                            fe(!0)
                        },
                        disabled: Jn,
                        loading: Jn
                    }, O.createElement(T.Z, {
                        icon: z.$
                    }), " Delete Group"))))) : O.createElement(yt, {
                        groupId: null == h ? void 0 : h.id
                    })
                }), O.createElement(S.AW, {
                    path: "/me",
                    element: null != h && h.myMember ? O.createElement(yt, {
                        groupId: null == h ? void 0 : h.id
                    }) : O.createElement(L.Z, {
                        to: ".."
                    })
                }), O.createElement(S.AW, {
                    path: "/roles/:roleId?/:newRoleType?",
                    element: Lt || R({
                        groupMember: null == h ? void 0 : h.myMember,
                        permission: "group-roles-manage"
                    }) ? O.createElement(Jt, {
                        group: h
                    }) : O.createElement(L.Z, {
                        to: ".."
                    })
                }), O.createElement(S.AW, {
                    path: "/logs",
                    element: Lt || R({
                        groupMember: null == h ? void 0 : h.myMember,
                        permission: "group-audit-view"
                    }) ? O.createElement(ut, {
                        group: h
                    }) : O.createElement(L.Z, {
                        to: ".."
                    })
                }), O.createElement(S.AW, {
                    path: "/ageverificationbeta",
                    element: h.tags.includes("admin_age_verification_enabled") && (Lt || (null == h ? void 0 : h.myMember.userId) === h.ownerId) ? O.createElement(B.Z, null, O.createElement(J.Z, null, O.createElement(le.oI, null, O.createElement("h4", {
                        className: "text-center"
                    }, "Age Verification Beta")), O.createElement(le.Ao, null, O.createElement(B.Z, {
                        className: "mb-1"
                    }, O.createElement(J.Z, null, O.createElement(W.Z, null, "Beta Slots Remaining")), O.createElement(J.Z, null, h.ageVerificationBetaSlots)), O.createElement(B.Z, {
                        className: "mb-1"
                    }, O.createElement(J.Z, null, O.createElement(W.Z, null, "Verification Link")), O.createElement(J.Z, null, O.createElement("a", {
                        href: "https://vrchat.com/home/group/".concat(h.id, "/ageverification/").concat(h.ageVerificationBetaCode)
                    }, "https://vrchat.com/home/group/", h.id, "/ageverification/", h.ageVerificationBetaCode)))))) : O.createElement(L.Z, {
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
                return O.createElement(nn, null, O.createElement(en.Z, {
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
                }), O.createElement(rn, null, n && O.createElement("span", null, O.createElement(T.Z, {
                    icon: Se.nm,
                    width: 25
                }), " "), O.createElement("h4", null, h)))
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
                    E = O.useState(!1),
                    v = (0, l.Z)(E, 2),
                    b = v[0],
                    h = v[1],
                    w = O.useState(!1),
                    y = (0, l.Z)(w, 2),
                    x = y[0],
                    Z = y[1],
                    k = O.useState({}),
                    N = (0, l.Z)(k, 2),
                    I = N[0],
                    C = N[1],
                    S = (0, pe.r5)({
                        groupId: s.groupId
                    }),
                    j = S.data,
                    A = S.isLoading,
                    M = S.isError,
                    P = S.error,
                    L = (0, pe.xm)({
                        groupId: s.groupId,
                        userId: s.userId
                    }),
                    q = L.data,
                    z = L.isLoading,
                    G = L.isError,
                    F = L.error,
                    D = (0, pe.uX)(),
                    X = (0, l.Z)(D, 2),
                    _ = X[0],
                    J = (X[1].isLoading, (0, pe.dl)()),
                    B = (0, l.Z)(J, 2),
                    $ = B[0],
                    V = (B[1].isLoading, (0, pe.LA)()),
                    Y = (0, l.Z)(V, 2),
                    H = Y[0],
                    Q = (Y[1].isLoading, (0, pe.FW)()),
                    K = (0, l.Z)(Q, 2),
                    ee = K[0],
                    te = (K[1].isLoading, (0, pe.l5)()),
                    ne = (0, l.Z)(te, 2),
                    re = ne[0],
                    ae = (ne[1].isLoading, (0, de.pc)()),
                    oe = A || z,
                    ie = G || M;
                if (O.useEffect((function() {
                        m()
                    }), []), ie) return O.createElement(O.Fragment, null, O.createElement(le.oI, null, O.createElement("h4", null, "Managing Member")), O.createElement(le.Ao, null, O.createElement("div", null, O.createElement("div", {
                    className: "text-center mb-4"
                }, O.createElement(T.Z, {
                    icon: an.faTriangleExclamation,
                    size: "xl"
                })), O.createElement("h4", {
                    className: "text-center mb-4"
                }, "We have encountered a problem."), P && O.createElement("p", {
                    className: "text-center text-danger"
                }, null == P || null === (o = P.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message), F && O.createElement("p", {
                    className: "text-center text-danger"
                }, null == F || null === (c = F.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message))));
                if (oe) return null;
                var ce = function() {
                        h(!b)
                    },
                    se = function() {
                        Z(!x)
                    };
                if (null == q) return O.createElement("div", null);
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
                    Ee = null != I.managerNotes ? I.managerNotes : q.managerNotes,
                    ve = (null == q ? void 0 : q.roleIds) || [],
                    be = ve.map((function(e) {
                        var t = j.roles.find((function(t) {
                                return t.id === e
                            })),
                            n = (null == t ? void 0 : t.order) > (null == j ? void 0 : j.memberRank) && ((null == t ? void 0 : t.isSelfAssignable) && 0 !== (null == t ? void 0 : t.order) || me);
                        return t ? O.createElement(O.Fragment, null, O.createElement(pn, {
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
                        return O.createElement(pn, {
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
                return O.createElement(_t.Z, {
                    loading: oe
                }, O.createElement(le.oI, null, O.createElement("h4", null, "Managing ", null == s || null === (n = s.user) || void 0 === n ? void 0 : n.displayName)), O.createElement(le.Ao, null, x && O.createElement("div", null, O.createElement("h4", {
                    className: "text-center mb-4"
                }, "Are you sure you want to kick ", null == q || null === (r = q.user) || void 0 === r ? void 0 : r.displayName, "?!?!"), O.createElement(le.X2, null, O.createElement(le.zx, {
                    warning: !0,
                    onClick: function() {
                        se(), H({
                            groupId: q.groupId,
                            userId: q.userId,
                            fromPage: f
                        }), p()
                    },
                    expand: !0
                }, O.createElement(le.$1, {
                    icon: ln.uM
                }), " Get 'em outta here!"), " ", O.createElement(le.zx, {
                    neutral: !0,
                    onClick: se,
                    expand: !0
                }, "Cancel"))), b && O.createElement("div", null, O.createElement("h4", {
                    className: "text-center mb-4"
                }, "Are you sure you want to ban ", null == q || null === (a = q.user) || void 0 === a ? void 0 : a.displayName, "?!?!"), O.createElement(le.X2, null, O.createElement(le.zx, {
                    danger: !0,
                    onClick: function() {
                        ce(), $({
                            groupId: q.groupId,
                            userId: q.userId,
                            fromPage: f
                        }), p()
                    },
                    expand: !0
                }, O.createElement(le.$1, {
                    icon: i.JH
                }), " And stay out!"), " ", O.createElement(le.zx, {
                    neutral: !0,
                    onClick: ce,
                    expand: !0
                }, "Cancel"))), !(x || b) && O.createElement(O.Fragment, null, (me || ae || fe) && O.createElement(un, null, O.createElement(mn, null, O.createElement("h6", null, "Available Roles"), O.createElement(dn, null, he)), O.createElement(gn, null, O.createElement("h6", null, "Assigned Roles"), O.createElement(fn, null, be))), O.createElement(le.X2, null, (ue || ae) && O.createElement("div", {
                    className: "setting mb-2 flex-1"
                }, O.createElement(W.Z, null, "Notes"), O.createElement(le.gx, {
                    name: "managerNotes",
                    className: "notes-input full-width",
                    value: Ee,
                    onChange: function(e) {
                        var t = e.target.name,
                            n = "checkbox" === e.target.getAttribute("type") ? e.target.checked : e.target.value;
                        C(cn(cn({}, I), {}, (0, U.Z)({}, t, n)))
                    }
                }))), O.createElement(le.X2, null, O.createElement(le.zx, {
                    expand: !0,
                    color: "primary",
                    onClick: function() {
                        ! function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = cn(cn({}, I), e);
                            Object.keys(t).length > 0 && _(cn({
                                groupId: q.groupId,
                                userId: q.userId
                            }, t)), p()
                        }()
                    }
                }, O.createElement(le.$1, {
                    icon: Et.r6
                }), " Save"), " ", O.createElement(le.zx, {
                    expand: !0,
                    neutral: !0,
                    onClick: p
                }, "Close"), ((null == j ? void 0 : j.memberRank) < g && ue || ae) && O.createElement(O.Fragment, null, " ", O.createElement(le.zx, {
                    expand: !0,
                    warning: !0,
                    onClick: se
                }, O.createElement(T.Z, {
                    icon: ln.uM
                }), "  Kick"), " ", (ge || ae) && O.createElement(le.zx, {
                    expand: !0,
                    danger: !0,
                    onClick: ce
                }, O.createElement(T.Z, {
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
                        c = (0, O.useState)(!0),
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
                                                icon: x.eH,
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
                        y = function() {
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
                                                icon: x.eH,
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
                    return O.createElement(me.Wm, {
                        className: "flex-row my-1"
                    }, O.createElement("div", {
                        className: "container-fluid p-0"
                    }, O.createElement(B.Z, null, O.createElement(J.Z, {
                        xs: 12,
                        sm: 2,
                        className: "pe-0"
                    }, O.createElement(j.rU, {
                        to: "/home/user/".concat(n.id),
                        title: n.displayName,
                        target: "_blank"
                    }, O.createElement(me.D2, {
                        image: (null == n ? void 0 : n.iconUrl) || (null == n ? void 0 : n.thumbnailUrl) || (null == n ? void 0 : n.userIcon) || (null == n ? void 0 : n.currentAvatarThumbnailImageUrl)
                    }))), O.createElement(J.Z, null, O.createElement(En.Z, {
                        className: "d-flex flex-row justify-content-between py-1"
                    }, O.createElement("div", {
                        className: "container p-0"
                    }, O.createElement(B.Z, null, O.createElement(J.Z, {
                        xs: 12,
                        sm: 7,
                        className: "p-1"
                    }, O.createElement(j.rU, {
                        to: "/home/user/".concat(n.id),
                        title: n.displayName,
                        target: "_blank"
                    }, O.createElement(me.Hz, {
                        tag: "h5"
                    }, n.displayName)), O.createElement(vn.Z, {
                        className: "mb-2 text-muted text-truncate tw-capitalize",
                        tag: "h6"
                    }, n.status)), O.createElement(J.Z, null, O.createElement("div", {
                        className: "tw-flex tw-col tw-justify-end"
                    }, O.createElement("div", {
                        className: "tw-justify-end"
                    }, O.createElement(le.zx, {
                        onClick: u ? w : y,
                        disabled: h || f,
                        loading: h || f,
                        className: "tw-w-fit tw-px-4"
                    }, O.createElement(le.$1, {
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
                yn = n(73104),
                xn = function(e) {
                    var t = e.member,
                        n = void 0 === t ? null : t,
                        r = e.groupRoles,
                        l = e.memberEditCallback;
                    if (null === n) return null;
                    var a = n.user;
                    return O.createElement(me.Wm, {
                        className: "flex-row my-1"
                    }, O.createElement("div", {
                        className: "container-fluid p-0"
                    }, O.createElement(B.Z, null, O.createElement(J.Z, {
                        xs: 12,
                        sm: 2,
                        className: "pe-0"
                    }, O.createElement(j.rU, {
                        to: "/home/user/".concat(a.id),
                        title: a.displayName,
                        target: "_blank"
                    }, O.createElement(me.D2, {
                        image: a.iconUrl || a.thumbnailUrl
                    }))), O.createElement(J.Z, null, O.createElement(En.Z, {
                        className: "d-flex flex-row justify-content-between py-1"
                    }, O.createElement("div", {
                        className: "container p-0"
                    }, O.createElement(B.Z, null, O.createElement(J.Z, {
                        xs: 12,
                        sm: 7,
                        className: "p-1"
                    }, O.createElement(j.rU, {
                        to: "/home/user/".concat(a.id),
                        title: a.displayName,
                        target: "_blank"
                    }, O.createElement(me.Hz, {
                        tag: "h5"
                    }, a.displayName)), O.createElement(vn.Z, {
                        className: "mb-2 text-muted text-truncate",
                        tag: "h6"
                    }, "Joined ", ve()(n.joinedAt).fromNow()), O.createElement(yn.Z, {
                        className: "text-truncate text-secondary"
                    }, (0, xe.wz)({
                        member: n,
                        groupRoles: r
                    }).join(", "))), O.createElement(J.Z, null, O.createElement(me.$, null, O.createElement(le.zx, {
                        onClick: function() {
                            return l(n, (0, xe.H)({
                                member: n,
                                groupRoles: r
                            }), null)
                        }
                    }, O.createElement(le.$1, {
                        width: 20,
                        icon: wn.Iw
                    })))))))))))
                };
            xn.propTypes = {
                member: fe().object.isRequired,
                groupRoles: fe().array.isRequired,
                memberEditCallback: fe().func.isRequired
            };
            const Zn = xn;
            var kn = function(e) {
                var t, n, r, a = e.groupId,
                    o = e.isOpen,
                    i = e.cancelCallback,
                    c = e.isGroupMemberOnly,
                    s = void 0 !== c && c,
                    u = e.memberEditCallback,
                    m = (0, O.useRef)(null),
                    d = (0, O.useState)(""),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = (0, O.useState)(1),
                    v = (0, l.Z)(E, 2),
                    b = v[0],
                    h = v[1],
                    w = (0, de.Nr)(g);
                (0, O.useEffect)((function() {
                    setTimeout((function() {
                        o && null != m && m.current && m.current.focus()
                    }), 300)
                }), [o, m]), (0, O.useEffect)((function() {
                    h(1)
                }), [g]), (0, O.useEffect)((function() {
                    f("")
                }), [o]);
                var y = (0, pe.Vc)({
                        groupId: a
                    }, {
                        skip: !s
                    }),
                    x = y.data,
                    Z = y.isSuccess,
                    k = y.isError,
                    N = y.error,
                    I = (0, pe.Pi)({
                        groupId: a,
                        pageValue: b,
                        searchTerm: w,
                        n: 25
                    }, {
                        skip: "" === w || !o || w.length < 3 || !s
                    }),
                    C = I.data,
                    S = I.error,
                    j = I.isError,
                    A = I.isFetching,
                    M = I.isSuccess,
                    T = (0, re.hi)({
                        pageValue: b,
                        searchTerm: w,
                        n: 25
                    }, {
                        skip: "" === w || !o || w.length < 3 || s
                    }),
                    P = T.data,
                    R = T.error,
                    L = T.isError,
                    U = T.isFetching,
                    q = T.isSuccess;
                return O.createElement(me.Xv, {
                    role: "dialog",
                    isOpen: o,
                    toggle: i,
                    keyboard: !0,
                    autoFocus: !1
                }, O.createElement(me.eb, {
                    tag: "h4",
                    close: O.createElement(oe.Z, {
                        onClick: i
                    }),
                    toggle: i
                }, s ? "Group Members Search" : "Users Search"), O.createElement(me.vc, null, O.createElement(me.T_, null, O.createElement(le.II, {
                    id: "search-product-list",
                    onChange: function(e) {
                        return f(e.target.value)
                    },
                    placeholder: s ? "Search Group Members..." : "Search for users...",
                    ref: m,
                    type: "text",
                    value: g
                }), (j || k || L) && O.createElement("p", {
                    className: "text-center m-5 text-warning h-25"
                }, "Something went wrong with the search, please try again later!", O.createElement("br", null), j && O.createElement("code", null, null == S || null === (t = S.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), k && O.createElement("code", null, null == N || null === (n = N.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), L && O.createElement("code", null, null == R || null === (r = R.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message)), A && O.createElement(me.Um, null, O.createElement("div", {
                    className: "text-center m-5 text-secondary h-25"
                }, O.createElement(ie.Z, null))), !M && !A && !j && s && O.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "Search for members in your group."), M && !A && Z && s && O.createElement(me.Um, null, C.results.map((function(e) {
                    return O.createElement(Zn, {
                        key: e.id,
                        member: e,
                        groupRoles: x,
                        memberEditCallback: u
                    })
                })), 0 === C.results.length && O.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "We couldn't find anything with that search.")), !q && !U && !L && !s && O.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "Search for users on VRChat."), q && O.createElement(me.Um, null, P.results.map((function(e) {
                    return O.createElement(hn, {
                        key: e.id,
                        user: e,
                        groupId: a
                    })
                })), 0 === P.results.length && O.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "We couldn't find anything with that search.")), (M || q) && O.createElement(me.Gz, null, O.createElement(me.IT, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return h(b - 1)
                    },
                    disabled: 1 === b || A || U
                }, O.createElement(le.$1, {
                    icon: ue.A3
                })), O.createElement("span", null, b), O.createElement(me.UV, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return h(b + 1)
                    },
                    disabled: (null == C ? void 0 : C.isLastPage) || (null == P ? void 0 : P.isLastPage) || A || U
                }, O.createElement(le.$1, {
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

            function In(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function On(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? In(Object(n), !0).forEach((function(t) {
                        (0, U.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : In(Object(n)).forEach((function(t) {
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
                    r = O.useState(!1),
                    a = (0, l.Z)(r, 2),
                    o = a[0],
                    i = a[1],
                    c = O.useState(!1),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = O.useState(null),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = O.useState(null),
                    v = (0, l.Z)(E, 2),
                    b = v[0],
                    h = v[1],
                    w = O.useState(null),
                    y = (0, l.Z)(w, 2),
                    x = y[0],
                    Z = y[1],
                    k = O.useState(""),
                    N = (0, l.Z)(k, 2),
                    C = N[0],
                    S = (N[1], O.useState(null)),
                    j = (0, l.Z)(S, 2),
                    M = j[0],
                    T = j[1],
                    P = O.useState(null),
                    L = (0, l.Z)(P, 2),
                    U = L[0],
                    z = L[1],
                    G = (0, ne.XC)().data,
                    F = (0, de.pc)(),
                    D = (0, O.useState)([
                        [],
                        []
                    ]),
                    X = (0, l.Z)(D, 2),
                    _ = X[0],
                    J = X[1],
                    B = null == n ? void 0 : n.myMember,
                    $ = (0, O.useState)(0),
                    V = (0, l.Z)($, 2),
                    W = V[0],
                    Y = V[1],
                    H = (0, O.useState)(25),
                    Q = (0, l.Z)(H, 1)[0],
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
                O.useEffect((function() {
                    ge(Q, 0)
                }), []), O.useEffect((function() {
                    var e = (0, q.Z)(_);
                    if (ae) {
                        var t;
                        if (ae.page <= 0 && !C && null === M && null === U && null != n && n.myMember) e[0] = [On(On({}, B), {}, {
                            userId: G.id,
                            user: On(On({}, G), {}, {
                                thumbnailUrl: null !== (t = G.profilePicOverride) && void 0 !== t ? t : G.currentAvatarImageUrl
                            })
                        })].concat((0, q.Z)(ae.members));
                        else e[ae.page] = ae.members;
                        J(e)
                    }
                }), [ae]);
                O.useEffect((function() {}), [C]), O.useEffect((function() {
                    Y(0), J([
                        [],
                        []
                    ]), ge(Q, 0)
                }), [M, U]);
                var ge = function(e, t) {
                        te({
                            groupId: n.id,
                            perPage: e,
                            page: t,
                            sort: M,
                            roleId: U
                        }), Y(t + 1)
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
                        return !!F || (!(!ve && !Ee || !a) || (!(!ve && !Ee || !o) || !(!i || !o)))
                    };
                if (ue) return O.createElement(le.UU, {
                    height: "200px"
                });
                var we = null == _ ? void 0 : _.map((function(e, t) {
                        var r;
                        return null === (r = (0, q.Z)(e)) || void 0 === r || null === (r = r.sort((function(e) {
                            return null === M && null === U && e.userId === n.ownerId ? -1 : 0
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
                            return O.createElement(tn, {
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
                    ye = [{
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
                return O.createElement(O.Fragment, null, O.createElement(le.oI, null, O.createElement("h4", {
                    className: "text-center font-weight-bolder"
                }, "Members ", !Ee && !be && "(Friends only)")), O.createElement(le.Ao, null, O.createElement("div", {
                    className: (0, I.iv)({
                        name: "8osrbx",
                        styles: "background-color:var(--dark);padding:0 20px 20px 20px"
                    })
                }, Ee && O.createElement(le.JX, null, O.createElement("h6", null, "Filters:"), O.createElement(le.X2, {
                    className: "flex-wrap"
                }, O.createElement(jn, {
                    label: "Filter role",
                    onChange: z,
                    options: ye,
                    value: U,
                    className: "mb-2 mx-2"
                }), O.createElement(jn, {
                    label: "Join order",
                    onChange: T,
                    options: Cn,
                    value: M,
                    className: "mb-2 mx-2"
                }))), O.createElement(A.Z, {
                    isOpen: o,
                    toggle: function() {
                        i(!1)
                    }
                }, O.createElement(sn, {
                    groupMember: g,
                    memberRank: null != x ? x : 0,
                    closeCallback: function() {
                        i(!1)
                    },
                    memberListPage: b
                })), Ee && O.createElement("div", {
                    className: "p-2"
                }, O.createElement(le.zx, {
                    onClick: function() {
                        m(!0)
                    }
                }, O.createElement(le.$1, {
                    color: "white",
                    icon: Ae.faMagnifyingGlass
                }), "  Search Group Members")), O.createElement(Nn, {
                    isOpen: u,
                    groupId: n.id,
                    cancelCallback: function() {
                        return m(!1)
                    },
                    memberEditCallback: fe,
                    isGroupMemberOnly: !0
                }), ie ? O.createElement(le.UU, {
                    height: "200px"
                }) : O.createElement(An, null, we), O.createElement("div", {
                    className: "p-2",
                    style: {
                        margin: "20px auto 0",
                        textAlign: "center"
                    }
                }, O.createElement(le.zx, {
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
                Mn = n(61244);
            const Tn = function(e) {
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
                return O.createElement(qn, null, O.createElement(zn, null, O.createElement(Pn, null, "Languages")), O.createElement(Gn, null, i.length > 0 ? i.map((function(e) {
                    var t, n;
                    return O.createElement(Un, {
                        key: e,
                        title: null !== (t = e.title) && void 0 !== t ? t : o[e]
                    }, null !== (n = e.abbreviation) && void 0 !== n ? n : e.toUpperCase())
                })) : O.createElement("h4", {
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
            const Fn = function(e) {
                var t = e.links;
                return O.createElement($n, null, O.createElement(Vn, null, O.createElement(Dn, null, "Links")), O.createElement(Wn, null, t.length > 0 ? t.map((function(e) {
                    return O.createElement(Bn, {
                        key: e
                    }, O.createElement(Je.QZ, {
                        url: e,
                        style: {
                            height: "70px",
                            width: "70px"
                        },
                        target: "_blank"
                    }))
                })) : O.createElement("h4", {
                    className: "align-self-center"
                }, "None added")))
            };
            var Dn = (0, a.Z)("h2", {
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
                Yn = n(87261),
                Hn = n(88233);

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
            var er = O.lazy((function() {
                return Promise.all([n.e(123), n.e(786), n.e(4444), n.e(9908), n.e(229), n.e(3294), n.e(527), n.e(4814)]).then(n.bind(n, 40527))
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
                    d = O.useState(!1),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = O.useState(null),
                    v = (0, l.Z)(E, 2),
                    b = v[0],
                    h = (v[1], O.useState(null)),
                    w = (0, l.Z)(h, 2),
                    y = w[0],
                    x = w[1],
                    Z = O.useState(null),
                    k = (0, l.Z)(Z, 2),
                    N = k[0],
                    S = k[1],
                    j = O.useState(!1),
                    M = (0, l.Z)(j, 2),
                    T = M[0],
                    P = M[1],
                    L = O.useState({
                        name: i.name,
                        description: i.description,
                        membersOnly: i.membersOnly
                    }),
                    q = (0, l.Z)(L, 2),
                    z = q[0],
                    G = q[1],
                    F = O.useState(!1),
                    D = (0, l.Z)(F, 2),
                    X = D[0],
                    J = D[1],
                    B = O.useState(15),
                    Y = (0, l.Z)(B, 1)[0],
                    H = O.useState(1),
                    Q = (0, l.Z)(H, 2),
                    K = Q[0],
                    te = Q[1],
                    ne = O.useState(!0),
                    re = (0, l.Z)(ne, 2),
                    ae = re[0],
                    oe = re[1],
                    ie = (0, pe.d3)({
                        groupId: a.id,
                        galleryId: i.id,
                        n: Y,
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
                    ye = (0, l.Z)(we, 2),
                    xe = ye[0],
                    Ze = ye[1],
                    ke = (Ze.isLoading, Ze.isSuccess),
                    Ne = (0, pe.jP)(),
                    Ie = (0, l.Z)(Ne, 2),
                    Oe = Ie[0];
                Ie[1].isLoading;
                O.useEffect((function() {
                    document.getElementById(i.id) && s && !X && (document.getElementById(i.id).scrollIntoView({
                        behavior: "smooth"
                    }), J(!0))
                })), O.useEffect((function() {
                    ke && P(!1)
                }), [ke]), O.useEffect((function() {
                    de && oe((null == ce ? void 0 : ce.totalCount) >= 100)
                }), [de]);
                var Ce = function(e) {
                    var t = "checkbox" === e.target.getAttribute("type") ? !e.target.checked : e.target.value;
                    G(Kn(Kn({}, z), {}, (0, U.Z)({}, e.target.name, t)))
                };
                if (me) return O.createElement(le.UU, {
                    className: "mt-3",
                    width: "100%",
                    height: "300px"
                });
                var Se = R({
                        groupMember: null == a ? void 0 : a.myMember,
                        permission: "group-galleries-manage"
                    }),
                    je = ce.totalCount,
                    Ae = (K - 1) * Y,
                    Me = O.createElement(lr, null, O.createElement(ar, {
                        className: "d-flex flex-row align-items-center justify-content-center",
                        onClick: function() {
                            return te(K - 1)
                        },
                        disabled: 0 === Ae
                    }, O.createElement(le.$1, {
                        icon: ue.A3
                    })), O.createElement("span", null, K, " / ", Math.ceil(je / Y), " ", O.createElement("small", null, je > 0 && "(".concat(je, "/").concat(100, ")"))), O.createElement(or, {
                        className: "d-flex flex-row align-items-center justify-content-center",
                        onClick: function() {
                            return te(K + 1)
                        },
                        disabled: Ae + Y >= je
                    }, O.createElement(le.$1, {
                        icon: se._t
                    })));
                return O.createElement("div", {
                    className: "my-2",
                    id: i.id
                }, O.createElement(Hn.Z, {
                    imageUrl: y,
                    closeCallback: function() {
                        x(null)
                    },
                    nextCallback: null !== (t = ce.results) && void 0 !== t && t[N + 1] ? function() {
                        x(ce.results[N + 1].imageUrl), S(N + 1)
                    } : null,
                    prevCallback: null !== (n = ce.results) && void 0 !== n && n[N - 1] ? function() {
                        x(ce.results[N - 1].imageUrl), S(N - 1)
                    } : null
                }), O.createElement(A.Z, {
                    isOpen: g,
                    className: (0, I.iv)({
                        name: "1ul0gzp",
                        styles: "max-width:1500px!important"
                    })
                }, O.createElement($.Z, null, O.createElement(er, {
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
                })), O.createElement(V.Z, null, O.createElement(le.zx, {
                    onClick: function() {
                        f(!1), u((0, ee.b9)())
                    }
                }, "Cancel"))), O.createElement(le.oI, null, O.createElement("h4", null, i.name), O.createElement("span", null, i.description)), O.createElement(le.Ao, null, 0 !== je && Me, T ? O.createElement(le.JX, {
                    className: "w-100"
                }, O.createElement(W.Z, null, "Gallery name", O.createElement(le.II, {
                    value: z.name,
                    name: "name",
                    onChange: Ce,
                    disabled: m,
                    maxLength: 64
                })), " ", O.createElement(W.Z, null, "Gallery description", O.createElement(le.II, {
                    value: z.description,
                    name: "description",
                    onChange: Ce,
                    disabled: m,
                    maxLength: 512
                })), " ", O.createElement(le.X2, null, O.createElement(W.Z, null, "Is this gallery public?", " ", O.createElement(Yn.Z, {
                    type: "checkbox",
                    name: "membersOnly",
                    checked: !z.membersOnly,
                    onChange: Ce,
                    disabled: m
                }))), O.createElement(le.X2, null, O.createElement(le.zx, {
                    expand: !0,
                    onClick: function() {
                        xe({
                            groupId: a.id,
                            galleryId: i.id,
                            data: Kn({}, z)
                        })
                    },
                    disabled: m
                }, "Update"), " ", O.createElement(le.zx, {
                    expand: !0,
                    neutral: !0,
                    disabled: m,
                    onClick: function() {
                        P(!1)
                    }
                }, "Cancel"), " ", O.createElement(le.zx, {
                    expand: !0,
                    danger: !0,
                    disabled: m,
                    onClick: function() {
                        Oe({
                            groupId: a.id,
                            galleryId: i.id,
                            confirm: !0
                        })
                    }
                }, "Delete"))) : O.createElement(O.Fragment, null, O.createElement(nr, null, (null === (r = ce.results) || void 0 === r ? void 0 : r.length) > 0 ? ce.results.map((function(e, t) {
                    return O.createElement(en.Z, {
                        key: e.id,
                        image: e.imageUrl,
                        disableManagement: m,
                        onClick: function() {
                            S(t),
                                function(e) {
                                    x(e)
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
                })) : O.createElement("p", {
                    className: "m-0"
                }, "There are no pictures here... yet!")), Se && O.createElement(rr, null, O.createElement(le.zx, {
                    className: "m-2",
                    disabled: ae,
                    onClick: function() {
                        f(!0)
                    }
                }, ae ? "Gallery is full" : O.createElement(O.Fragment, null, O.createElement(le.$1, {
                    icon: o.r8
                }), " Post an Image")), O.createElement(le.zx, {
                    neutral: !0,
                    onClick: function() {
                        P(!0)
                    }
                }, O.createElement(le.$1, {
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
                    a = O.useState({
                        name: "",
                        description: "",
                        membersOnly: !1
                    }),
                    i = (0, l.Z)(a, 2),
                    c = i[0],
                    s = i[1],
                    u = O.useState(!1),
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
                    y = v.isError,
                    x = v.error;
                O.useEffect((function() {
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
                    I = null;
                return R({
                    groupMember: null == n ? void 0 : n.myMember,
                    permission: "group-galleries-manage"
                }) && (I = d ? O.createElement(O.Fragment, null, O.createElement(le.oI, null, O.createElement("h4", null, "Create Gallery")), O.createElement(le.Ao, null, O.createElement(W.Z, null, "Gallery name", O.createElement(le.II, {
                    value: c.name,
                    name: "name",
                    onChange: Z,
                    disabled: h,
                    maxLength: 64
                })), " ", O.createElement(W.Z, null, "Gallery description", O.createElement(le.II, {
                    value: c.description,
                    name: "description",
                    onChange: Z,
                    disabled: h,
                    maxLength: 512
                })), " ", O.createElement(le.X2, null, O.createElement(W.Z, null, "Is this gallery public?", " ", O.createElement(Yn.Z, {
                    type: "checkbox",
                    name: "membersOnly",
                    checked: !c.membersOnly,
                    onChange: Z,
                    disabled: h
                }))), O.createElement(le.X2, null, O.createElement(le.zx, {
                    expand: !0,
                    onClick: k,
                    disabled: h,
                    loading: h
                }, "Create"), " ", O.createElement(le.zx, {
                    expand: !0,
                    neutral: !0,
                    onClick: function() {
                        p(!1)
                    },
                    disabled: h
                }, "Cancel")))) : O.createElement(le.zx, {
                    onClick: function() {
                        p(!0)
                    },
                    disabled: h,
                    loading: h
                }, O.createElement(le.$1, {
                    icon: o.r8
                }), " Create Gallery")), O.createElement("div", null, y && O.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == x || null === (t = x.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred while creating the gallery."), I, n.galleries.length > 0 ? n.galleries.map((function(e) {
                    return (e.membersOnly && (null == n ? void 0 : n.myMember) || !e.membersOnly) && O.createElement(tr, {
                        key: e.id,
                        group: n,
                        gallery: e,
                        justAdded: w && (null == b ? void 0 : b.id) === e.id
                    })
                })) : O.createElement(ur, null, "There aren't any galleries here!"))
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
                    p = O.useState([]),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = (0, pe.dj)({
                        userId: null == i ? void 0 : i.id
                    }),
                    b = v.data,
                    h = v.isLoading,
                    w = (0, K.y)(),
                    y = w.data,
                    x = 0;
                w.isSuccess && (x = y.constants.GROUPS.MAX_JOINED), O.useEffect((function() {
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
                var Z, k = O.useMemo((function() {
                    var e;
                    return null == f || null === (e = f.sort((function(e, t) {
                        var n = e.users,
                            r = t.users;
                        return n.length === r.length ? 0 : n.length > r.length ? -1 : 1
                    }))) || void 0 === e ? void 0 : e.map((function(e) {
                        return O.createElement(dr.Z, {
                            key: "location-".concat(e.location),
                            className: "mb-4",
                            location: e,
                            isForGroup: !0,
                            currentGroup: t
                        })
                    }))
                }), [f]);
                if (d || c || h) return O.createElement(le.UU, {
                    width: "100%",
                    height: "200px"
                });
                var N = t.membershipStatus;
                if (t.memberCount < ht.qH && (b.length < x || i.tagsSet.has("admin_uncap_owned_groups")))
                    if (N === ht.oq.REQUESTED || N === ht.oq.INVITED || N === ht.oq.USER_BLOCKED) Z = null;
                    else if (t.myMember) Z = null;
                else switch (t.joinState) {
                    case ht.wN.OPEN:
                        Z = O.createElement(le.zx, {
                            onClick: n,
                            className: "tw-w-full tw-mb-3"
                        }, O.createElement(le.$1, {
                            icon: o.r8,
                            className: "tw-mr-1"
                        }), "Join this group to view all instances");
                        break;
                    case ht.wN.REQUEST:
                        Z = O.createElement(le.zx, {
                            onClick: n,
                            className: "tw-w-full tw-mb-3"
                        }, O.createElement(le.$1, {
                            icon: s.FU,
                            className: "tw-mr-1"
                        }), "Request to join to view all instances");
                        break;
                    default:
                        Z = null
                }
                return O.createElement(O.Fragment, null, Z, O.createElement(le.oI, null, O.createElement("h4", {
                    className: "text-center"
                }, "Instances")), O.createElement(le.Ao, null, null != k && k.length ? k : O.createElement("p", {
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
                    x = h.isSuccess,
                    Z = h.isError,
                    k = h.error,
                    N = d || w,
                    I = g || Z,
                    C = f || k;
                return O.useEffect((function() {
                    I && a(C)
                }), [I, C]), O.createElement("div", {
                    className: "mt-2 mb-2 d-flex flex-column justify-content-center"
                }, O.createElement(vr.Z, {
                    className: "mb-0",
                    userId: n.id,
                    openLinksInNewTab: !0
                }), "invite" === i && O.createElement(le.zx, {
                    disabled: p || N,
                    loading: N,
                    onClick: function() {
                        return u({
                            groupId: t.id,
                            userId: n.id
                        })
                    },
                    color: p ? "success" : void 0
                }, p && O.createElement(le.$1, {
                    icon: y.LE,
                    className: "mx-2"
                }), "Invite", p && "d", " ", n.displayName), "ban" === i && O.createElement(le.zx, {
                    disabled: x || N,
                    loading: N,
                    onClick: function() {
                        return b({
                            groupId: t.id,
                            userId: n.id
                        })
                    },
                    color: x ? "success" : void 0
                }, x && O.createElement(le.$1, {
                    icon: y.LE,
                    className: "mx-2"
                }), "ban", x && "ned", " ", n.displayName))
            };
            var hr = n(25411),
                wr = n(12227);
            const yr = function(e) {
                var t = e.group,
                    n = e.mode,
                    r = void 0 === n ? "invite" : n,
                    a = (0, C.I0)(),
                    o = (0, de.pc)(),
                    i = O.useState(""),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, de.Nr)(s),
                    d = (0, C.v9)((function(e) {
                        return e.search
                    })).userResults,
                    p = O.useState(""),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = o && !1;
                O.useEffect((function() {
                    E(""), "" !== m && a((0, hr.pz)({
                        searchTerm: m,
                        n: wr.En,
                        isInternalVariant: v
                    }))
                }), [m]);
                var b = function(e) {
                    e && E(e.data.error.message)
                };
                return O.createElement(O.Fragment, null, O.createElement(Er.Z, {
                    searchString: u,
                    placeholder: "Search users..."
                }), f && O.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "px-4",
                    message: f
                }), d.map((function(e) {
                    return O.createElement(br, {
                        mode: r,
                        key: e.id,
                        group: t,
                        user: e,
                        errorCallback: b
                    })
                })))
            };
            var xr = n(37599),
                Zr = n(61509);
            const kr = function(e) {
                var t, n, r, a, o, c, s, u, m = e.group,
                    d = (0, C.I0)(),
                    p = O.useState(!1),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = O.useState(!1),
                    b = (0, l.Z)(v, 2),
                    h = b[0],
                    w = b[1],
                    y = O.useState(null),
                    x = (0, l.Z)(y, 2),
                    Z = x[0],
                    k = x[1],
                    N = (0, pe.Sp)({
                        groupId: m.id
                    }),
                    I = N.data,
                    j = N.isError,
                    M = N.isLoading,
                    T = (0, pe.dZ)({
                        groupId: m.id
                    }),
                    P = T.data,
                    L = T.isError,
                    U = T.error,
                    q = T.isLoading,
                    z = (0, pe.dZ)({
                        groupId: m.id,
                        blocked: !0
                    }),
                    G = z.data,
                    F = z.isError,
                    D = z.error,
                    X = (z.isFetching, (0, pe.dt)()),
                    _ = (0, l.Z)(X, 2),
                    J = _[0],
                    B = _[1],
                    V = (B.isLoading, B.isError, B.error, (0, pe.MQ)()),
                    W = (0, l.Z)(V, 2),
                    Y = W[0],
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
                    ye = he.error,
                    xe = (0, pe.XK)(),
                    Ze = (0, l.Z)(xe, 2),
                    ke = Ze[0],
                    Ne = Ze[1],
                    Ie = (Ne.isLoading, Ne.isError),
                    Oe = Ne.error;
                (0, S.s0)(), (0, de.pc)();
                O.useEffect((function() {
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
                return O.createElement("div", null, O.createElement(A.Z, {
                    isOpen: h && !!Z,
                    toggle: Ce
                }, O.createElement(le.oI, null, O.createElement("h4", {
                    className: "text-center text-break"
                }, "Ban ", null == Z ? void 0 : Z.displayName, "?!?!")), O.createElement(le.Ao, null, O.createElement("div", null, O.createElement(le.X2, null, O.createElement(le.zx, {
                    danger: !0,
                    onClick: function() {
                        var e;
                        e = null == Z ? void 0 : Z.id, be({
                            groupId: m.id,
                            userId: e
                        }), Ce()
                    },
                    expand: !0
                }, O.createElement(le.$1, {
                    icon: i.JH
                }), " And stay out!"), " ", O.createElement(le.zx, {
                    neutral: !0,
                    onClick: Ce,
                    expand: !0
                }, "Cancel"))))), O.createElement(A.Z, {
                    isOpen: f
                }, O.createElement(H.Z, {
                    close: O.createElement(oe.Z, {
                        onClick: function() {
                            E(!1)
                        }
                    })
                }, O.createElement("h4", {
                    className: "m-0"
                }, "Invite Somebody")), O.createElement($.Z, null, O.createElement(yr, {
                    group: m,
                    mode: "invite"
                }))), O.createElement(le.zx, {
                    className: "mb-2",
                    color: "primary",
                    onClick: function() {
                        E(!0)
                    }
                }, "Invite Somebody"), O.createElement(xr.Z, {
                    title: "Join Requests",
                    collapseOpen: !0
                }, we && O.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == ye || null === (t = ye.data) || void 0 === t ? void 0 : t.error.message) || "There was an error banning the user."), L && O.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == U || null === (n = U.data) || void 0 === n ? void 0 : n.error.message) || "There was an error loading the join requests."), re && O.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == ae || null === (r = ae.data) || void 0 === r ? void 0 : r.error.message) || "There was an error rejecting the join request."), ge && O.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == fe || null === (a = fe.data) || void 0 === a ? void 0 : a.error.message) || "There was an error accepting the join request."), O.createElement(le.oI, null, O.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Applicants")), O.createElement(le.Ao, {
                    className: "mb-2"
                }, q ? O.createElement(le.UU, {
                    width: "100%",
                    height: "75px"
                }) : O.createElement(Nr, null, 0 === (null == P ? void 0 : P.length) ? O.createElement("p", {
                    className: "m-0"
                }, "Nobody is waiting to join!") : null, null == P ? void 0 : P.map((function(e) {
                    return O.createElement("div", {
                        className: "mb-2"
                    }, O.createElement(tn, {
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
                }))))), O.createElement(xr.Z, {
                    title: "Sent Invites"
                }, j && O.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == U || null === (o = U.data) || void 0 === o ? void 0 : o.error.message) || "There was an error loading the invites."), Ie && O.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == Oe || null === (c = Oe.data) || void 0 === c ? void 0 : c.error.message) || "There was an error deleting the invite."), O.createElement(le.oI, null, O.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Invites")), O.createElement(le.Ao, {
                    className: "mb-2"
                }, M ? O.createElement(le.UU, {
                    width: "100%",
                    height: "75px"
                }) : O.createElement(Nr, null, 0 === (null == I ? void 0 : I.length) ? O.createElement("p", {
                    className: "m-0"
                }, "Nobody has been invited to this group!") : null, null == I ? void 0 : I.map((function(e) {
                    return O.createElement("div", {
                        className: "mb-2"
                    }, O.createElement(tn, {
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
                }))))), O.createElement(xr.Z, {
                    title: "Blocked Requests"
                }, F && O.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == D || null === (s = D.data) || void 0 === s ? void 0 : s.error.message) || "There was an error loading the invites."), Ie && O.createElement(le.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == Oe || null === (u = Oe.data) || void 0 === u ? void 0 : u.error.message) || "There was an error deleting the invite."), O.createElement(le.oI, null, O.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Blocked Applicants")), O.createElement(le.Ao, {
                    className: "mb-2"
                }, M ? O.createElement(le.UU, {
                    width: "100%",
                    height: "75px"
                }) : O.createElement(Nr, null, 0 === (null == G ? void 0 : G.length) ? O.createElement("p", {
                    className: "m-0"
                }, "Nobody has been blocked from joining the group!") : null, null == G ? void 0 : G.map((function(e) {
                    return O.createElement("div", {
                        className: "mb-2"
                    }, O.createElement(tn, {
                        member: e,
                        onUnblock: function() {
                            Y({
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
                Ir = n(87462),
                Or = n(66736),
                Cr = n(73647),
                Sr = n(68791),
                jr = n(40067),
                Ar = n(7701),
                Mr = n(50352),
                Tr = n(77708);
            const Pr = function(e) {
                var t, n, r, a, o, i = e.group,
                    c = (0, C.I0)(),
                    s = (0, de.pc)(),
                    u = (0, C.v9)((function(e) {
                        return e.listingRow.modals.subscriptionCancellation
                    })),
                    m = (0, C.v9)((function(e) {
                        return e.listingRow.modals.rules
                    })),
                    d = (0, C.v9)((function(e) {
                        return e.listingRow.modals.purchaseConfirmation
                    })),
                    p = (0, C.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    g = (0, ne.XC)(),
                    f = g.data,
                    E = g.isLoading,
                    v = (0, Or.mb)({
                        storeId: null == i ? void 0 : i.storeId,
                        hydrateListings: !0
                    }, {
                        skip: !(null != i && i.storeId),
                        refetchOnMountOrArgChange: !0
                    }),
                    b = v.data,
                    h = v.isFetching,
                    w = v.isError,
                    y = v.error,
                    x = (0, Or.CE)({
                        receiverId: f.id,
                        sellerId: i.ownerId,
                        active: !0,
                        mostRecent: !0
                    }, {
                        skip: !f || !(null != b && null !== (t = b.listings) && void 0 !== t && t.length),
                        refetchOnMountOrArgChange: !0
                    }),
                    Z = x.data,
                    k = void 0 === Z ? [] : Z,
                    N = x.isLoading,
                    I = x.isError,
                    S = x.error,
                    j = O.useMemo((function() {
                        var e;
                        return null == b || null === (e = b.listings) || void 0 === e ? void 0 : e.map((function(e) {
                            return {
                                listing: e,
                                purchase: k.find((function(t) {
                                    return t.listingId === e.id
                                }))
                            }
                        }))
                    }), [k, b]),
                    A = (0, Or.M3)(),
                    M = A.data,
                    T = void 0 === M ? {
                        economyOnline: !1,
                        plannedOfflineWindowStart: null,
                        plannedOfflineWindowEnd: null,
                        offlineReason: null,
                        economyState: null,
                        shadowBreaker: null,
                        ledgerMode: null
                    } : M,
                    P = T.economyOnline,
                    R = T.plannedOfflineWindowStart,
                    L = T.plannedOfflineWindowEnd,
                    U = T.offlineReason,
                    q = T.economyState,
                    z = (T.shadowBreaker, T.ledgerMode, A.isFetching),
                    G = A.isError,
                    F = A.error,
                    D = (0, Or.Fi)({
                        userId: f.id
                    }, {
                        skip: !f,
                        refetchOnMountOrArgChange: !0
                    }),
                    X = D.data,
                    _ = (void 0 === X ? {
                        balance: 0
                    } : X).balance,
                    J = D.isLoading,
                    B = D.isError,
                    $ = O.useCallback((function(e) {
                        var t = e.currentUserId,
                            n = e.listingId,
                            r = e.listing,
                            l = e.purchase;
                        c((0, Cr.zy)({
                            currentUserId: t,
                            listingId: n,
                            listing: r,
                            purchase: l
                        }))
                    })),
                    V = O.useCallback((function(e, t) {
                        var n = t.listing,
                            r = t.purchase,
                            l = t.totalPrice,
                            a = t.includesGroupAccess,
                            o = t.includesGroupAccessRemove,
                            s = t.enteredPurchaseQuantity,
                            u = t.selectedPurchaseQuantity,
                            m = t.quantity;
                        c(e ? (0, Cr.DF)({
                            listing: n,
                            purchase: r,
                            group: i,
                            totalPrice: l,
                            tokenBalance: _,
                            includesGroupAccess: a,
                            includesGroupAccessRemove: o,
                            quantity: m,
                            enteredPurchaseQuantity: s,
                            selectedPurchaseQuantity: u
                        }) : (0, Cr.Li)({
                            listing: n,
                            purchase: r,
                            group: i,
                            totalPrice: l,
                            tokenBalance: _,
                            includesGroupAccess: a,
                            includesGroupAccessRemove: o,
                            quantity: m,
                            enteredPurchaseQuantity: s,
                            selectedPurchaseQuantity: u
                        }))
                    }), [_, i]),
                    W = O.useState(!1),
                    Y = (0, l.Z)(W, 2),
                    H = Y[0],
                    Q = Y[1];
                if (E || N || h || z || J) return O.createElement(le.UU, {
                    width: "100%",
                    height: "200px"
                });
                var K = function(e) {
                        return null == k ? void 0 : k.some((function(t) {
                            return t.listingId === e
                        }))
                    },
                    ee = H ? null == j ? void 0 : j.filter((function(e) {
                        return K(e.listing.id)
                    })) : null == j ? void 0 : j.filter((function(e) {
                        return !K(e.listing.id)
                    })),
                    te = (0, xe.dj)(R);
                return O.createElement(O.Fragment, null, O.createElement(le.oI, {
                    className: "flex-row justify-content-center align-items-center"
                }, O.createElement("h4", {
                    className: "text-center flex-grow-1"
                }, "Store")), O.createElement(le.Ao, null, G && O.createElement(le.qX, {
                    type: "error",
                    title: "Something strange happened"
                }, O.createElement("p", {
                    className: "m-0"
                }, "Error getting Tilia online status: ", F.status, " ", null !== (n = null === (r = F.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : "Unknown error")), !P && !G && O.createElement(le.qX, {
                    type: "warn",
                    title: "Store Maintenance"
                }, O.createElement(O.Fragment, null, O.createElement("p", {
                    className: "m-0"
                }, "Store Currently Offline: ", null != U ? U : "Unknown Reason"), O.createElement("p", {
                    className: "m-0"
                }, "Projected Service Return: ", (0, xe.M4)(L)))), I && O.createElement(le.qX, {
                    type: "error",
                    title: "Error loading purchases"
                }, null == S || null === (a = S.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message), w && O.createElement(le.qX, {
                    type: "error",
                    title: "Error loading listings"
                }, null == y || null === (o = y.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message), te && P && O.createElement(le.qX, {
                    type: "warn",
                    title: "Store Maintenance"
                }, O.createElement("p", {
                    className: "m-0"
                }, "Starts: ", (0, xe.M4)(R)), O.createElement("p", {
                    className: "m-0"
                }, "Ends: ", (0, xe.M4)(L))), O.createElement(ce.Z, {
                    tabs: [{
                        name: "Available Subscriptions",
                        id: "available",
                        condition: !0
                    }, {
                        name: "Your Subscriptions",
                        id: "your",
                        condition: !0
                    }],
                    selected: H ? "your" : "available",
                    onChange: function(e) {
                        return Q("your" === e)
                    },
                    justify: "left"
                }), null != ee && ee.length ? null == ee ? void 0 : ee.map((function(e, t) {
                    return O.createElement(Sr.Z, (0, Ir.Z)({
                        key: e.listing.id
                    }, e, {
                        group: i,
                        tokenBalance: !B && _,
                        index: t,
                        economyOnline: P,
                        economyState: q,
                        isMod: s,
                        onCancel: $,
                        onPurchase: V
                    }))
                })) : O.createElement("p", null, H ? "You have no current subscriptions to this group!" : "There are no subscription options here!"), u.isOpen && O.createElement(jr.Z, null), m.isOpen && O.createElement(Tr.Z, null), d.isOpen && O.createElement(Ar.Z, {
                    groupData: i
                }), p.isOpen && O.createElement(Mr.Z, null)))
            };
            var Rr = n(28764),
                Lr = n(96427),
                Ur = n(42137),
                qr = n(9230);
            const zr = function(e) {
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
                    g = (0, O.useState)(!1),
                    f = (0, l.Z)(g, 2),
                    E = f[0],
                    v = f[1],
                    b = n.createdAt,
                    h = n.imageUrl,
                    w = void 0 === h ? null : h,
                    y = n.title,
                    x = n.text,
                    Z = void 0 === x ? "" : x,
                    k = n.roleIds,
                    N = void 0 === k ? [] : k,
                    I = n.visibility,
                    C = null !== w && "" !== w,
                    S = a.roleIds,
                    j = (null === (t = Z.match(/[^\n]*\n[^\n]*/gi)) || void 0 === t ? void 0 : t.length) || 0,
                    A = (0, O.useMemo)((function() {
                        if (!E && j > 3) {
                            var e = [];
                            return (0, q.Z)(Z).forEach((function(t, n) {
                                "\n" !== t && "\r" !== t || e.push(n)
                            })), "".concat(Z.substring(0, e[3]), "... ")
                        }
                        return !E && Z.length > 400 ? "".concat(Z.substring(0, 400), "... ") : Z
                    }), [E, Z]),
                    M = (0, O.useMemo)((function() {
                        return !E && (Z.length > 400 || j > 3)
                    }), [E, Z]);
                return O.createElement("div", {
                    className: "d-flex align-items-center"
                }, O.createElement(Fr, {
                    isExpanded: E,
                    ref: i,
                    className: "container-fluid p-0"
                }, O.createElement("div", {
                    className: "row"
                }, O.createElement("div", {
                    className: "col-12 d-flex align-items-center d-sm-none"
                }, O.createElement(Wr, {
                    src: w
                })), O.createElement("div", {
                    className: "".concat(C ? " col-sm-6 col-md-6 col-lg-7 col-xl-7 col-12" : "col-12")
                }, O.createElement(Dr, null, O.createElement(_r, null, y), function() {
                    if (0 === N.length) return O.createElement(Jr, null, O.createElement("div", null, O.createElement(le.$1, {
                        icon: Ur.SZ
                    }), " ", (0, xe.h4)(b), O.createElement(le.$1, {
                        className: "ms-2",
                        icon: qr.iO
                    }), " ", "public" === I ? "Public" : "Group"));
                    var e = (0, q.Z)(N).sort((function(e, t) {
                        return S.includes(t) ? 1 : -1
                    }));
                    return O.createElement(Jr, null, O.createElement("div", null, O.createElement(le.$1, {
                        icon: Ur.SZ
                    }), " ", (0, xe.h4)(b)), O.createElement($r, null, O.createElement(le.$1, {
                        icon: Lr.Aq
                    }), " Only Seen By", " ", e.map((function(e) {
                        var t = p.find((function(t) {
                                return t.id === e
                            })),
                            n = !(null == t || !t.productId);
                        return t ? O.createElement(Br, {
                            id: t.id,
                            hasRole: S.includes(t.id)
                        }, n ? O.createElement(O.Fragment, null, O.createElement(le.$1, {
                            icon: Rr.n7,
                            className: "me-1"
                        }), t.name) : t.name) : null
                    }))))
                }(), O.createElement(Xr, {
                    hasImage: C,
                    isExpanded: E
                }, A, O.createElement(Vr, {
                    showReadMore: M,
                    onClick: function() {
                        return v(!0)
                    }
                }, "Read More")))), C && O.createElement("div", {
                    className: "col-12 col-sm-6 col-md-6 col-lg-5 col-xl-5 d-none d-sm-flex align-items-center"
                }, O.createElement(Wr, {
                    src: w
                })))), s && O.createElement("div", {
                    className: "ps-5 pe-4"
                }, O.createElement(Gr, {
                    color: "danger",
                    onClick: function() {
                        return m(n)
                    }
                }, O.createElement(le.$1, {
                    icon: z.$
                }))))
            };
            var Gr = (0, a.Z)(Xe.Z, {
                    target: "ewr2sfy9"
                })({
                    name: "3891qj",
                    styles: "border-radius:50px;color:white"
                }),
                Fr = (0, a.Z)("div", {
                    target: "ewr2sfy8"
                })({
                    name: "m9gplg",
                    styles: "background-color:#0a0a0d;border-radius:10px;color:#bababa;margin-bottom:20px;overflow:hidden;transition:all 0.3s ease-in-out"
                }),
                Dr = (0, a.Z)("div", {
                    target: "ewr2sfy7"
                })({
                    name: "1yjx7km",
                    styles: "padding:20px"
                }),
                Xr = (0, a.Z)("p", {
                    target: "ewr2sfy6"
                })({
                    name: "n4pob0",
                    styles: "font-size:18px;flex-grow:1;word-wrap:break-word;white-space:pre-wrap;display:inline-block;overflow:auto;margin-bottom:0;min-height:auto;font-size:16px;margin-top:14px;width:100%"
                }),
                _r = (0, a.Z)("h4", {
                    target: "ewr2sfy5"
                })({
                    name: "1ji90xs",
                    styles: "text-align:start;color:#fff;word-break:normal;font-size:20px"
                }),
                Jr = (0, a.Z)("h4", {
                    target: "ewr2sfy4"
                })({
                    name: "1rmpetc",
                    styles: "color:#737372;font-size:12px;font-weight:500;line-height:1.3em;display:inline-block"
                }),
                Br = (0, a.Z)("div", {
                    target: "ewr2sfy3"
                })("color:#dadada;background-color:#575757;padding:0.4em;border-radius:10rem;display:inline-block;font-size:12px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;font-weight:normal;margin-right:5px;opacity:", (function(e) {
                    return e.hasRole ? 1 : .7
                }), ";"),
                $r = (0, a.Z)("div", {
                    target: "ewr2sfy2"
                })({
                    name: "1mcu3c1",
                    styles: "line-height:2em;margin-top:4px"
                }),
                Vr = (0, a.Z)("span", {
                    target: "ewr2sfy1"
                })("color:#fff;cursor:pointer;display:", (function(e) {
                    return e.showReadMore ? "inline-block" : "none"
                }), ";"),
                Wr = (0, a.Z)("img", {
                    target: "ewr2sfy0"
                })({
                    name: "k8r326",
                    styles: "max-height:25vh;margin:0 auto"
                });
            var Yr = function(e) {
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
                return O.createElement(Qr, null, O.createElement("h6", null, "Management Roles"), O.createElement("div", {
                    className: "d-flex flex-wrap"
                }, a.map((function(e) {
                    return O.createElement(le.vc, {
                        id: e.id,
                        label: i(e) ? O.createElement(O.Fragment, null, O.createElement(le.$1, {
                            icon: Rr.n7,
                            className: "me-1"
                        }), e.name) : e.name,
                        value: e.id,
                        checked: l.includes(e.id),
                        onChange: function(e) {
                            return n(e)
                        }
                    })
                }))), O.createElement("h6", {
                    className: "mt-2"
                }, "Member Roles"), O.createElement("div", {
                    className: "d-flex flex-wrap"
                }, o.map((function(e) {
                    return O.createElement(le.vc, {
                        id: e.id,
                        label: i(e) ? O.createElement(O.Fragment, null, O.createElement(le.$1, {
                            icon: Rr.n7,
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
            Yr.propTypes = {
                group: fe().object.isRequired,
                onChange: fe().func.isRequired,
                selectedRoles: fe().array.isRequired
            };
            const Hr = Yr;
            var Qr = (0, a.Z)("div", {
                target: "e1qh7s420"
            })({
                name: "kq62ql",
                styles: "background-color:#000000;border-radius:5px;padding:16px 20px"
            });
            var Kr = O.lazy((function() {
                    return Promise.all([n.e(123), n.e(786), n.e(4444), n.e(9908), n.e(229), n.e(3294), n.e(527), n.e(4814)]).then(n.bind(n, 40527))
                })),
                el = (0, a.Z)(le.gx, {
                    target: "e37d6q30"
                })({
                    name: "tz9wht",
                    styles: ">textarea{min-height:250px;}"
                });
            const tl = function(e) {
                var t = e.group,
                    n = (0, C.I0)(),
                    a = O.useState(""),
                    o = (0, l.Z)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = O.useState(""),
                    u = (0, l.Z)(s, 2),
                    m = u[0],
                    d = u[1],
                    p = O.useState("group"),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = O.useState([]),
                    b = (0, l.Z)(v, 2),
                    h = b[0],
                    w = b[1],
                    y = O.useState(null),
                    x = (0, l.Z)(y, 2),
                    Z = x[0],
                    k = x[1],
                    S = O.useState(!0),
                    j = (0, l.Z)(S, 2),
                    M = j[0],
                    T = j[1],
                    P = O.useState(!1),
                    R = (0, l.Z)(P, 2),
                    L = R[0],
                    U = R[1],
                    z = O.useState(""),
                    G = (0, l.Z)(z, 2),
                    F = G[0],
                    D = G[1],
                    X = (0, ne.q7)().data,
                    _ = void 0 === X ? [] : X,
                    J = (0, pe.t$)(),
                    B = (0, l.Z)(J, 2),
                    H = B[0],
                    Q = B[1].isLoading;
                (0, O.useEffect)((function() {
                    "selectedRoles" !== f && w([])
                }), [f]);
                var K = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var n;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(n = H({
                                                groupId: t.id,
                                                title: m,
                                                text: i,
                                                imageId: Z,
                                                sendNotification: M,
                                                roleIds: h,
                                                visibility: "public" === f ? "public" : "group"
                                            }).unwrap()).error) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return", console.error("Failed to create post:", n.error));
                                    case 3:
                                        c(""), d(""), k(null), T(!0), D(""), w([]), E("group");
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
                        label: O.createElement(le.X2, {
                            className: "d-flex flex-column"
                        }, O.createElement(W.Z, {
                            className: "mb-0"
                        }, "Public"), O.createElement("small", null, "Non-Group members can view this post")),
                        selectedLabel: "Public",
                        value: "public"
                    }, {
                        label: O.createElement(le.X2, {
                            className: "d-flex flex-column"
                        }, O.createElement(W.Z, {
                            className: "mb-0"
                        }, "All Group Members"), O.createElement("small", null, "All group members can view this post")),
                        selectedLabel: "Group",
                        value: "group"
                    }, {
                        label: O.createElement(le.X2, {
                            className: "d-flex flex-column"
                        }, O.createElement(W.Z, {
                            className: "mb-0"
                        }, "Selected Roles"), O.createElement("small", null, "Select the group roles who can view this post")),
                        selectedLabel: "Selected Roles",
                        value: "selectedRoles"
                    }];
                return O.createElement(le.JX, {
                    className: "w-100"
                }, O.createElement(A.Z, {
                    isOpen: L,
                    className: (0, I.iv)({
                        name: "1ul0gzp",
                        styles: "max-width:1500px!important"
                    })
                }, O.createElement($.Z, null, O.createElement(Kr, {
                    isSelector: !0,
                    activeTab: "photos",
                    selectedCallback: function(e, t) {
                        k(e), D(t), U(!1)
                    },
                    selectedId: null != Z ? Z : null
                })), O.createElement(V.Z, null, O.createElement(le.zx, {
                    onClick: function() {
                        U(!1), n((0, ee.b9)())
                    }
                }, "Cancel"))), O.createElement("div", {
                    className: "mb-3"
                }, O.createElement(W.Z, null, "Post title"), O.createElement(le.II, {
                    type: "text",
                    value: m,
                    onChange: function(e) {
                        return d(e.target.value)
                    },
                    maxLength: 128
                })), O.createElement("div", {
                    className: "mb-3"
                }, O.createElement(W.Z, null, "Post message"), O.createElement(el, {
                    name: "post",
                    value: i,
                    onChange: function(e) {
                        return c(e.target.value)
                    },
                    maxLength: 2048,
                    required: !0,
                    className: "w-100"
                })), O.createElement("div", {
                    className: "mb-3"
                }, O.createElement(ae.Z, {
                    label: "Send notification",
                    value: "sendNotification",
                    defaultChecked: M,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        T(t)
                    }
                }), O.createElement(Y.Z, null, "If on, a notification of this post will be sent to all members of the group!")), O.createElement("div", {
                    className: "mb-3"
                }, O.createElement(W.Z, null, "Who can see this post"), O.createElement(le.Lt, {
                    options: oe,
                    className: "flex-grow-1",
                    value: f,
                    onChange: function(e) {
                        return E(e)
                    },
                    trimToLength: !0
                })), "selectedRoles" === f && O.createElement("div", {
                    className: "mb-3"
                }, O.createElement(Hr, {
                    group: t,
                    onChange: function(e) {
                        var t, n;
                        return null != e && null !== (t = e.target) && void 0 !== t && t.checked ? w([].concat((0, q.Z)(h), [null == e || null === (n = e.target) || void 0 === n ? void 0 : n.value])) : w(h.filter((function(t) {
                            var n;
                            return t !== (null == e || null === (n = e.target) || void 0 === n ? void 0 : n.value)
                        })))
                    },
                    selectedRoles: h
                })), O.createElement(le.X2, {
                    className: "w-100"
                }, re && O.createElement(O.Fragment, null, O.createElement(le.zx, {
                    neutral: !0,
                    expand: !0,
                    disabled: Q,
                    loading: Q,
                    onClick: function() {
                        U(!0)
                    }
                }, "Select an Image"), " "), O.createElement(le.zx, {
                    disabled: te || Q,
                    loading: Q,
                    expand: !0,
                    onClick: K
                }, "Create Post")), " ", O.createElement(zr, {
                    postData: {
                        text: i,
                        title: m,
                        imageUrl: F,
                        roleIds: h
                    },
                    groupRoles: t.roles
                }))
            };
            var nl = n(78158);
            const rl = function(e) {
                var t = e.group,
                    n = e.showBlockModal,
                    r = e.onClose,
                    a = (0, pe.WG)(),
                    o = (0, l.Z)(a, 2),
                    c = o[0],
                    s = o[1].isSuccess;
                return O.useEffect((function() {
                    s && r()
                }), [s]), O.createElement(A.Z, {
                    className: "text-center text-break",
                    isOpen: n,
                    toggle: function() {
                        r()
                    }
                }, O.createElement(le.oI, null, O.createElement("h4", null, "Block ", null == t ? void 0 : t.name, "?")), O.createElement(le.Ao, null, O.createElement("p", null, "Are you sure you want to block ", null == t ? void 0 : t.name, "?", O.createElement("br", null), " You will no longer be able to:", O.createElement("br", null), O.createElement("br", null), "• Join this group.", O.createElement("br", null), "• Get invites from this group. 💔"), O.createElement(le.X2, null, O.createElement(le.zx, {
                    danger: !0,
                    expand: !0,
                    onClick: function() {
                        c({
                            groupId: null == t ? void 0 : t.id
                        })
                    }
                }, O.createElement(le.$1, {
                    icon: i.JH
                }), "   Block"), " ", O.createElement(le.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: r
                }, "Cancel"))))
            };
            const ll = function() {
                return O.createElement(O.Fragment, null, O.createElement(le.oI, {
                    className: "text-center"
                }, O.createElement("h2", null, "You've Blocked this Group!")), O.createElement(le.Ao, {
                    className: "text-center"
                }, "You won't get any invites from this group, and you can't join it.", O.createElement("br", null), O.createElement("br", null), "If you want to join this group or get invites from it, you have to unblock it first."))
            };
            var al = n(9970);
            var ol = function(e) {
                var t = e.group,
                    n = e.currentUser,
                    r = e.targetUser,
                    l = e.onAccept,
                    a = e.onCancel,
                    o = e.isLoading,
                    i = t.transferTargetId === (null == n ? void 0 : n.id),
                    c = (null == t ? void 0 : t.ownerId) === (null == n ? void 0 : n.id);
                return O.createElement(cl, null, o ? O.createElement(le.UU, {
                    width: "100%",
                    height: "30px",
                    className: "mt-4"
                }) : O.createElement(le.X2, {
                    className: "tw-justify-between"
                }, O.createElement(le.JX, {
                    className: "gap-1"
                }, O.createElement(le.X2, null, O.createElement(le.$1, {
                    className: "tw-mt-[8px]",
                    icon: f.qm,
                    width: 20
                }), i ? O.createElement("span", {
                    className: "tw-mt-[6px]"
                }, O.createElement(j.rU, {
                    to: "/home/user/".concat(r.id)
                }, r.displayName), " has initiated a transfer of ownership to you") : O.createElement("span", {
                    className: "tw-mt-[6px]"
                }, c ? "You have initiated an ownership transfer to " : "Ownership transfer has been initiated to ", O.createElement(j.rU, {
                    to: "/home/user/".concat(r.id)
                }, r.displayName)))), O.createElement(le.JX, {
                    className: "gap-1"
                }, O.createElement(le.X2, {
                    className: "tw-gap-[12px]"
                }, i && O.createElement(le.zx, {
                    success: !0,
                    onClick: function() {
                        return l()
                    }
                }, O.createElement(le.$1, {
                    icon: y.LE
                }), "  Accept"), O.createElement(le.zx, {
                    danger: !0,
                    onClick: function() {
                        return a()
                    }
                }, O.createElement(le.$1, {
                    icon: al.EO
                }), " ", i ? "Decline" : "Cancel")))))
            };
            ol.propTypes = {
                group: fe().object.isRequired,
                currentUser: fe().object.isRequired,
                targetUser: fe().object.isRequired,
                onCancel: fe().func.isRequired,
                inAccept: fe().func,
                isLoading: fe().bool
            };
            const il = ol;
            var cl = (0, a.Z)("div", {
                    target: "ean9tdl0"
                })({
                    name: "1sccrd7",
                    styles: "display:flex;flex-direction:column;background-color:#252A30;margin-top:10px;margin-bottom:10px;border-radius:3px;padding:10px;border-left:3px solid #252A30"
                }),
                sl = n(5276),
                ul = n(84090);
            var ml = function(e) {
                var t = e.group,
                    n = void 0 === t ? null : t,
                    r = e.isEditMode,
                    a = (0, O.useState)(1),
                    o = (0, l.Z)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = (0, O.useState)(!1),
                    u = (0, l.Z)(s, 2),
                    m = u[0],
                    d = u[1],
                    p = (0, O.useState)(!1),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = (0, O.useState)(!1),
                    b = (0, l.Z)(v, 2),
                    h = b[0],
                    w = b[1],
                    y = n.id,
                    x = n.roles,
                    Z = n.myMember,
                    k = 10,
                    N = Math.ceil((i + 1) / k),
                    I = (0, pe.Aw)(),
                    C = (0, l.Z)(I, 2),
                    S = C[0],
                    j = C[1],
                    A = j.isLoading,
                    M = j.isSuccess,
                    T = (0, sl.Y)({
                        rootMargin: "50px 0px",
                        onEnter: function(e) {
                            (0, e.unobserve)(), c(i + 1)
                        }
                    }),
                    P = T.observe,
                    R = (0, sl.Y)({
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
                        groupId: y,
                        publicOnly: !Z
                    }, {
                        skip: 1 === i,
                        refetchOnMountOrArgChange: !0
                    }),
                    U = (0, pe._n)({
                        pageValue: i,
                        n: k,
                        groupId: y,
                        publicOnly: !Z
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    z = (0, pe._n)({
                        pageValue: i + 1,
                        n: k,
                        groupId: y,
                        publicOnly: !Z
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    G = (0, O.useMemo)((function() {
                        var e = new Array(k * (N + 1)).fill(null);
                        return (0, q.Z)(new Set([L.data, U.data, z.data])).map((function(t) {
                            return null != t && t.posts ? e.splice.apply(e, [t.offset, t.posts.length].concat((0, q.Z)(t.posts))) : []
                        })), e.filter((function(e) {
                            return null !== e
                        }))
                    }), [k, L.data, U.data, z.data]);
                (0, O.useEffect)((function() {
                    d(G.some((function(e) {
                        return null !== e
                    })))
                }), [G]), (0, O.useEffect)((function() {
                    M && E(!1)
                }), [M]);
                var F = function(e) {
                        w(e), E(!0)
                    },
                    D = (0, O.useMemo)((function() {
                        return m ? G.map((function(e, t) {
                            return null !== e ? O.createElement("div", {
                                key: e.id
                            }, O.createElement(zr, {
                                myMember: Z,
                                postData: e,
                                observe: t === G.length - 1 ? P : 0 === t && 1 !== i ? R : null,
                                isEditMode: r,
                                deleteCallback: F,
                                groupRoles: x
                            })) : null
                        })) : null
                    }), [G, m]);
                return m ? O.createElement("div", {
                    className: "py-4"
                }, O.createElement(ul.Z, {
                    isOpen: f,
                    bodyText: "Are you sure you want to delete this post?",
                    cancelCallback: function() {
                        return E(!1)
                    },
                    confirmCallback: function() {
                        return S({
                            groupId: y,
                            postId: h.id
                        })
                    },
                    isLoading: A
                }), O.createElement(gl, null, O.createElement(El, null, O.createElement(fl, null, "Posts")), O.createElement(vl, null, O.createElement(pl, null, O.createElement("div", {
                    className: "col"
                }, D))))) : null
            };
            ml.propTypes = {};
            const dl = ml;
            var pl = (0, a.Z)("div", {
                    target: "emafa4s4"
                })({
                    name: "1s65yl6",
                    styles: "max-height:450px;margin-top:15px;margin-bottom:10px;overflow:auto"
                }),
                gl = (0, a.Z)("div", {
                    target: "emafa4s3"
                })({
                    name: "11po3a3",
                    styles: "display:flex;flex-direction:column;align-items:start;justify-content:start;border-radius:8px;overflow:hidden;background:#2a2e34"
                }),
                fl = (0, a.Z)("h2", {
                    target: "emafa4s2"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                El = (0, a.Z)(me.JX, {
                    target: "emafa4s1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                vl = (0, a.Z)(El, {
                    target: "emafa4s0"
                })({
                    name: "18clcmv",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto"
                });
            const bl = function(e) {
                var t, n, r, a = e.group,
                    o = (void 0 === a ? null : a).id,
                    i = (0, S.s0)(),
                    c = O.useState(0),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = O.useState(!1),
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
                    y = (0, pe.Rx)(),
                    x = (0, l.Z)(y, 2),
                    Z = x[0],
                    k = x[1],
                    N = k.error,
                    I = k.isSuccess,
                    C = k.isError,
                    j = k.isLoading,
                    A = null !== (t = null == v ? void 0 : v.filter((function(e) {
                        return !!e.user
                    }))) && void 0 !== t ? t : [],
                    M = b ? O.createElement(hl, {
                        height: "130px"
                    }) : O.createElement(O.Fragment, null, null != A && A.length ? O.createElement(wl, null, null == A ? void 0 : A.slice(0, 50).map((function(e) {
                        return O.createElement(tn, {
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
                    }))) : O.createElement("p", {
                        className: "text-center"
                    }, "Nobody is banned from this group. Everyone's on their best behavior!"));
                return O.createElement(O.Fragment, null, O.createElement(Nn, {
                    isOpen: g,
                    cancelCallback: function() {
                        return f(!1)
                    },
                    groupId: o,
                    isGroupMemberOnly: !1
                }), O.createElement(le.zx, {
                    className: "mb-2",
                    color: "primary",
                    onClick: function() {
                        f(!0)
                    }
                }, "Ban Somebody"), O.createElement(le.oI, null, O.createElement("h4", {
                    className: "text-center"
                }, "Banned Users")), O.createElement(le.Ao, null, h && O.createElement(le.qX, {
                    type: "error",
                    title: "Something went wrong"
                }, "We couldn't load the list of banned users. Please try again later!"), I && O.createElement(le.qX, {
                    slim: !0,
                    type: "success"
                }, "User unbanned. They can now be invited back in if you like."), C && O.createElement(le.qX, {
                    type: "error",
                    title: "Failed to unban user"
                }, null !== (n = null === (r = N.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : N.data.error), M, O.createElement(yl, null, O.createElement(xl, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u - 50)
                    },
                    disabled: b || 0 === u
                }, O.createElement(le.$1, {
                    icon: ue.A3
                })), O.createElement(Zl, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u + 50)
                    },
                    disabled: b || !w
                }, O.createElement(le.$1, {
                    icon: se._t
                })))))
            };
            var hl = (0, a.Z)(le.UU, {
                    target: "eqx7h3n4"
                })({
                    name: "2cp9od",
                    styles: "margin:8px"
                }),
                wl = (0, a.Z)("div", {
                    target: "eqx7h3n3"
                })({
                    name: "j9stxx",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;>*{width:300px;margin:8px;}"
                }),
                yl = (0, a.Z)("div", {
                    target: "eqx7h3n2"
                })({
                    name: "1vtota4",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-bottom:8px"
                }),
                xl = (0, a.Z)(le.zx, {
                    target: "eqx7h3n1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                Zl = (0, a.Z)(le.zx, {
                    target: "eqx7h3n0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                kl = n(37024);
            const Nl = function(e) {
                var t = e.group,
                    n = e.event,
                    r = (e.isEvents, e.isAdmin),
                    l = void 0 !== r && r;
                return O.createElement(le.JX, {
                    className: "tw-mb-4"
                }, O.createElement(le.oI, null, O.createElement("h4", null, "Upcoming Event")), O.createElement(le.Ao, {
                    className: "tw-items-center"
                }, !n && O.createElement("p", {
                    className: "align-self-center tw-mb-5 tw-text-placeholder-text"
                }, "No upcoming or ongoing events"), n ? O.createElement(kl.ZP, {
                    event: n,
                    className: "tw-mb-5"
                }) : null, n && O.createElement(j.rU, {
                    to: "/home/group/".concat(t.id, "/events"),
                    className: "tw-w-full"
                }, O.createElement(le.zx, {
                    neutral: !0
                }, "See All Events")), l && !n && O.createElement(j.rU, {
                    to: "/home/group/".concat(t.id, "/events"),
                    className: "tw-w-full"
                }, O.createElement(le.zx, {
                    primary: !0
                }, "Create Event"))))
            };
            var Il = n(88081),
                Ol = n(75727),
                Cl = n(24752),
                Sl = n(29841),
                jl = [{
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
                Al = [{
                    key: 0,
                    label: "Newest First",
                    value: "NEWEST"
                }, {
                    key: 1,
                    label: "Oldest First",
                    value: "OLDEST"
                }];
            const Ml = function(e) {
                var t, n = e.onSearchUpdate,
                    r = void 0 === n ? function() {} : n,
                    a = e.onDisplayStateChange,
                    o = void 0 === a ? function() {} : a,
                    i = e.onOrderChange,
                    c = void 0 === i ? function() {} : i,
                    s = e.gridToggle,
                    u = e.hideSearch,
                    m = void 0 !== u && u,
                    d = O.useState(""),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = O.useState("UPCOMING"),
                    v = (0, l.Z)(E, 2),
                    b = v[0],
                    h = v[1],
                    w = O.useState("NEWEST"),
                    y = (0, l.Z)(w, 2),
                    x = y[0],
                    Z = y[1],
                    k = function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        f(n), r(n)
                    };
                return O.createElement(le.X2, {
                    className: (0, I.cx)("tw-@container tw-w-full tw-flex-wrap tw-gap-2 tw-z-20", m && "tw-justify-between")
                }, O.createElement(le.X2, {
                    className: (0, I.cx)("tw-gap-2 tw-flex-wrap", !m && "@sm:tw-flex-1 tw-w-full")
                }, O.createElement(le.Lt, {
                    label: "Display",
                    options: jl,
                    value: b,
                    onChange: function(e) {
                        h(e), o(e)
                    }
                }), O.createElement(le.Lt, {
                    label: "Order",
                    options: Al,
                    value: x,
                    onChange: function(e) {
                        Z(e), c(e)
                    }
                })), O.createElement(le.X2, {
                    className: (0, I.cx)("tw-gap-2 tw-justify-end", !m && "@sm:tw-flex-1 tw-w-full", m && "tw-flex-none")
                }, !m && O.createElement(le.II, {
                    className: "tw-w-full @sm:tw-max-w-[360px]",
                    type: "text",
                    placeholder: "Search by event name or url",
                    value: g,
                    onChange: k,
                    onKeyDown: (t = k, function(e) {
                        "Enter" === e.key && (e.preventDefault(), t(e))
                    })
                }), s && O.createElement(le.zx, {
                    className: "tw-w-9 tw-h-10",
                    onClick: function() {
                        s()
                    }
                }, O.createElement(le.$1, {
                    icon: Sl.QR
                }))))
            };

            function Tl(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Pl(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Tl(Object(n), !0).forEach((function(t) {
                        (0, U.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tl(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Rl = (0, O.lazy)((function() {
                return Promise.resolve().then(n.bind(n, 41568))
            }));
            const Ll = function(e) {
                var t = e.group,
                    n = e.isCreate,
                    r = void 0 !== n && n,
                    a = (0, de.Tu)(),
                    o = a.user,
                    i = a.isFetching,
                    c = (0, de.pc)() && !1,
                    s = O.useState(!1),
                    u = (0, l.Z)(s, 2),
                    m = u[0],
                    d = u[1],
                    p = O.useState(r),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = O.useState(!1),
                    b = (0, l.Z)(v, 2),
                    h = b[0],
                    w = b[1],
                    y = O.useState(Cl.P.CREATE),
                    x = (0, l.Z)(y, 2),
                    Z = x[0],
                    k = x[1],
                    N = O.useState(null),
                    C = (0, l.Z)(N, 2),
                    S = C[0],
                    j = C[1],
                    A = O.useState("NEWEST"),
                    M = (0, l.Z)(A, 2),
                    T = M[0],
                    L = M[1],
                    U = O.useState("UPCOMING"),
                    q = (0, l.Z)(U, 2),
                    z = q[0],
                    G = q[1],
                    F = R({
                        groupMember: null == t ? void 0 : t.myMember,
                        permission: "group-calendar-manage"
                    }),
                    D = P({
                        group: t,
                        groupMember: null == t ? void 0 : t.myMember
                    }),
                    X = F || D,
                    _ = O.useState(ve()()),
                    J = (0, l.Z)(_, 2),
                    B = J[0],
                    $ = J[1],
                    V = O.useMemo((function() {
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
                    W = O.useMemo((function() {
                        return "OLDEST" === T ? {
                            sort: "startTime_descending"
                        } : {
                            sort: "startTime_ascending"
                        }
                    }), [T]),
                    Y = (0, Il.Is)(Pl(Pl({
                        ownerId: t.id
                    }, V), W), {
                        skip: !t.id
                    }),
                    H = Y.data,
                    Q = Y.hasNextPage,
                    K = Y.fetchNextPage,
                    ee = Y.isLoading,
                    te = Y.isFetching,
                    ne = O.useMemo((function() {
                        return ((null == H ? void 0 : H.pages) || []).flatMap((function(e) {
                            return e.results
                        })).filter((function(e) {
                            return !e.deletedAt || c
                        }))
                    }), [H, c]),
                    re = function() {
                        E(!1), j(null), k(Cl.P.CREATE)
                    },
                    ae = function(e) {
                        j(e), E(!0), k(Cl.P.EDIT)
                    },
                    oe = function(e) {
                        j(e), E(!0), k(Cl.P.REVIVE)
                    },
                    ie = function(e) {
                        j(e), w(!0), k(Cl.P.DELETE)
                    },
                    ce = ee || i || !H || !o;
                return O.createElement(O.Fragment, null, O.createElement("div", {
                    className: "tw-py-4"
                }, X && O.createElement(le.zx, {
                    "aria-label": "Create Event",
                    className: "tw-mb-4",
                    onClick: function() {
                        E(!0)
                    }
                }, "+ Create Event"), O.createElement(Ul, null, O.createElement(zl, null, O.createElement(ql, null, "Events")), O.createElement(Gl, {
                    className: "tw-flex-col tw-gap-5 tw-items-center tw-pt-5"
                }, O.createElement(Ml, {
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
                }), ce && O.createElement(le.UU, null), !ce && (null != ne && ne.length ? O.createElement(le.JX, {
                    className: (0, I.cx)("tw-@container tw-w-full tw-flex-wrap tw-gap-4", m && "tw-flex-row")
                }, ne.map((function(e) {
                    return O.createElement(kl.ZP, {
                        key: e.id,
                        event: e,
                        isGrid: m,
                        onEditCallback: ae,
                        onDeleteCallback: ie,
                        onReviveCallback: oe,
                        isGroupAdmin: X
                    })
                }))) : O.createElement("div", null, "No events found")), !(null == ne || !ne.length) && O.createElement(le.zx, {
                    onClick: K,
                    disabled: !Q || te
                }, te ? "Loading More…" : Q ? "Load More…" : "That's all of them!")))), O.createElement(le.u_, {
                    title: Z.label,
                    isVisible: f,
                    onClose: re,
                    className: "tw-w-full",
                    slim: !0,
                    width: "100%"
                }, O.createElement(O.Suspense, {
                    fallback: O.createElement("div", null, "Loading...")
                }, O.createElement(Rl, {
                    event: S || void 0,
                    isEditMode: "edit" === Z.value,
                    isReviveMode: "revive" === Z.value,
                    group: t,
                    isGroupAdmin: X,
                    closeModalCallback: re
                }))), S && "delete" === Z.value && O.createElement(Ol.Z, {
                    event: S,
                    isOpen: h,
                    onCloseCallBack: function() {
                        w(!1), j(null), k(Cl.P.CREATE)
                    }
                }))
            };
            var Ul = (0, a.Z)("div", {
                    target: "e1bz3ytt3"
                })({
                    name: "144akkd",
                    styles: "display:flex;flex-direction:column;align-items:start;justify-content:start;border-radius:8px;background:#2a2e34"
                }),
                ql = (0, a.Z)("h2", {
                    target: "e1bz3ytt2"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                zl = (0, a.Z)(le.JX, {
                    target: "e1bz3ytt1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                Gl = (0, a.Z)(zl, {
                    target: "e1bz3ytt0"
                })({
                    name: "j2vksd",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;display:flex;justify-content:space-around;height:auto!important"
                });
            const Fl = function() {
                var e, t, n, a = O.useState(!1),
                    k = (0, l.Z)(a, 2),
                    P = k[0],
                    U = k[1],
                    q = O.useState(!1),
                    z = (0, l.Z)(q, 2),
                    G = z[0],
                    F = z[1],
                    D = O.useState(!1),
                    X = (0, l.Z)(D, 2),
                    _ = X[0],
                    J = X[1],
                    B = O.useState(!1),
                    $ = (0, l.Z)(B, 2),
                    V = $[0],
                    W = $[1],
                    Y = O.useState(!1),
                    H = (0, l.Z)(Y, 2),
                    Q = H[0],
                    ee = H[1],
                    ae = O.useState(!1),
                    oe = (0, l.Z)(ae, 2),
                    ie = oe[0],
                    se = oe[1],
                    ue = O.useState(!1),
                    me = (0, l.Z)(ue, 2),
                    ge = me[0],
                    fe = me[1],
                    Ee = O.useState(!1),
                    ve = (0, l.Z)(Ee, 2),
                    be = ve[0],
                    he = ve[1],
                    we = O.useState(!1),
                    ye = (0, l.Z)(we, 2),
                    xe = ye[0],
                    Ze = ye[1],
                    ke = (0, ne.q7)().data,
                    Ne = void 0 === ke ? [] : ke,
                    Ie = (0, C.I0)(),
                    Oe = (0, K.y)(),
                    Ce = Oe.data,
                    Se = Oe.isLoading,
                    je = 0,
                    Ae = 0;
                Oe.isSuccess && (je = Ce.constants.GROUPS.MAX_JOINED, Ae = Ce.constants.GROUPS.MAX_JOINED_PLUS), Ne.includes("permission-extra-group-count") && (je = Math.max(je, Ae || 0));
                var Me = (0, S.UO)().groupId,
                    Te = (0, ne.XC)().data,
                    Pe = (0, pe.r5)({
                        groupId: Me,
                        purpose: "group"
                    }),
                    Re = Pe.data,
                    Le = Pe.isSuccess,
                    Ue = Pe.isFetching,
                    qe = Pe.isError,
                    ze = Pe.error,
                    Ge = (0, de.pc)(),
                    Fe = (0, pe.dj)({
                        userId: null == Te ? void 0 : Te.id
                    }),
                    De = Fe.data,
                    Xe = Fe.isLoading,
                    _e = (0, pe.xI)(),
                    Je = (0, l.Z)(_e, 2),
                    Be = Je[0],
                    $e = Je[1],
                    Ve = $e.isLoading,
                    Ye = $e.isError,
                    He = $e.error,
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
                    vt = (0, Il.mW)({
                        ownerId: Me
                    }, {
                        skip: !Me
                    }),
                    bt = vt.data;
                vt.isLoading;
                O.useEffect((function() {
                    Re && !Ue && F(!0)
                }), [Re, Ue]), O.useEffect((function() {
                    pt && fe(!1)
                }), [pt]);
                var wt, yt, xt = O.useMemo((function() {
                        return !!G && (null !== Re.transferTargetId || void 0 !== Re.transferTargetId)
                    }), [G]),
                    Zt = (null == Re ? void 0 : Re.transferTargetId) === (null == Te ? void 0 : Te.id) ? null == Re ? void 0 : Re.ownerId : null == Re ? void 0 : Re.transferTargetId,
                    kt = (0, re.GR)(Zt, {
                        skip: null == Re || Ue || !xt || !Zt,
                        refetchOnMountOrArgChange: !0
                    }),
                    It = kt.data,
                    Ot = kt.isFetching,
                    Ct = kt.isError,
                    St = kt.error,
                    jt = (0, pe.HT)(),
                    At = (0, l.Z)(jt, 2),
                    Mt = At[0],
                    Tt = At[1],
                    Pt = Tt.data,
                    Rt = (Tt.isFetching, Tt.isError),
                    Lt = Tt.error,
                    Ut = (0, pe.rq)(),
                    qt = (0, l.Z)(Ut, 2),
                    zt = qt[0],
                    Gt = qt[1],
                    Ft = Gt.data,
                    Dt = (Gt.isFetching, Gt.isError),
                    Xt = (Gt.error, function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var t, n;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return he(!0), e.prev = 1, e.next = 4, Mt({
                                            groupId: Re.id,
                                            transferTargetId: Re.transferTargetId
                                        }).unwrap();
                                    case 4:
                                        Rt && Ie((0, te.d)({
                                            title: "Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null == Lt || null === (t = Lt.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), he(!1)), !Rt && Pt && Ie((0, te.d)({
                                            title: "Group Transfer Accepted",
                                            icon: Z.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }), he(!1)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Ie((0, te.d)({
                                            title: "Group Transfer Error",
                                            icon: x.eH,
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
                                        Dt && Ie((0, te.d)({
                                            title: "Cancel Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null == Ft || null === (t = Ft.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), he(!1)), !Dt && Ft && Ie((0, te.d)({
                                            title: "Cancel Group Transfer Success",
                                            icon: Z.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }), he(!1)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Ie((0, te.d)({
                                            title: "Cancel Group Transfer Error",
                                            icon: x.eH,
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
                if (!Re || Ue || Et || at || tt || Ve || Xe || Se) return (ie || Q) && (ee(!1), se(!1)), xt && !It || Ot ? O.createElement(le.UU, {
                    width: "100%",
                    height: "200px",
                    className: "mt-4"
                }) : !Ct || qe || Ot ? qe ? O.createElement(O.Fragment, null, O.createElement(le.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: "Something went wrong with getting this group! (".concat(null == ze || null === (wt = ze.data) || void 0 === wt || null === (wt = wt.error) || void 0 === wt ? void 0 : wt.message, ")")
                }), O.createElement("div", {
                    className: "text-center"
                }, O.createElement(j.rU, {
                    to: "/home/groups"
                }, "Go Back! 😭"))) : O.createElement(O.Fragment, null, O.createElement(le.UU, {
                    width: "100%",
                    height: "200px",
                    className: "mt-4"
                }), O.createElement(le.UU, {
                    width: "100%",
                    height: "500px",
                    className: "mt-5"
                })) : O.createElement(le.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: "Something went wrong with getting target user! (".concat(null == St || null === (yt = St.data) || void 0 === yt || null === (yt = yt.error) || void 0 === yt ? void 0 : yt.message, ")")
                });
                var Jt, Bt = function() {
                        J(!1), Be({
                            groupId: Me
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
                if (Re.memberCount < ht.qH && (De.length < je || Te.tagsSet.has("admin_uncap_owned_groups"))) {
                    if (Wt === ht.oq.REQUESTED) Jt = O.createElement(le.zx, {
                        danger: !0,
                        onClick: function() {
                            return et({
                                groupId: Me
                            })
                        },
                        disabled: Ve,
                        loading: Ve
                    }, O.createElement(T.Z, {
                        icon: w.NB
                    }), "  Cancel Join Request");
                    else if (Wt === ht.oq.INVITED) Jt = O.createElement(le.zx, {
                        success: !0,
                        onClick: Bt
                    }, O.createElement(T.Z, {
                        icon: y.LE
                    }), "  Accept Invite");
                    else if (Wt === ht.oq.USER_BLOCKED) Jt = null;
                    else if (!Re.myMember) switch (Re.joinState) {
                        case ht.wN.OPEN:
                            Jt = O.createElement(le.zx, {
                                onClick: $t,
                                disabled: Ve,
                                loading: Ve
                            }, O.createElement(T.Z, {
                                icon: o.r8
                            }), "  Join Group");
                            break;
                        case ht.wN.REQUEST:
                            Jt = O.createElement(le.zx, {
                                onClick: $t
                            }, O.createElement(T.Z, {
                                icon: s.FU
                            }), " Request to Join");
                            break;
                        default:
                            Jt = O.createElement(le.zx, {
                                disabled: !0
                            }, "Closed to New Members")
                    }
                } else De.length >= je && !Te.tagsSet.has("admin_uncap_owned_groups") ? Jt = O.createElement(le.zx, {
                    disabled: !0
                }, "You can't join more than ", je, " groups!") : Re.myMember || (Jt = O.createElement(le.zx, {
                    disabled: !0
                }, "Group is Full"));
                if (!Re.id) return null;
                var Yt = Wt === ht.oq.USER_BLOCKED;
                return O.createElement(O.Fragment, null, O.createElement(le.$4, null, null !== (e = null == Re ? void 0 : Re.name) && void 0 !== e ? e : "Group"), O.createElement(A.Z, {
                    isOpen: V,
                    toggle: function() {
                        W(!1)
                    }
                }, O.createElement(Xl, null, O.createElement("h4", {
                    className: "text-center"
                }, "Unblock this Group?")), O.createElement(_l, null, O.createElement(le.JX, null, O.createElement("div", {
                    className: "p-3 text-center"
                }, "Are you sure you want to unblock ", O.createElement("strong", null, Re.name), "?"), O.createElement("div", {
                    className: "p-3"
                }, O.createElement(le.X2, null, O.createElement(le.zx, {
                    expand: !0,
                    onClick: function() {
                        W(!1), lt({
                            groupId: Me,
                            userId: Te.id
                        })
                    }
                }, O.createElement(T.Z, {
                    icon: y.LE
                }), "  Unblock Group"), " ", O.createElement(le.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        W(!1)
                    }
                }, O.createElement(T.Z, {
                    icon: w.NB
                }), "  Cancel")))))), O.createElement(A.Z, {
                    isOpen: _,
                    toggle: function() {
                        J(!1)
                    }
                }, O.createElement(Xl, null, O.createElement("h4", {
                    className: "text-center"
                }, "Rules")), O.createElement(_l, null, O.createElement(le.JX, null, O.createElement("div", {
                    className: "p-3"
                }, O.createElement("p", null, "By joining this group, you agree to the following rules:"), O.createElement(Bl, null, Re.rules)), O.createElement("div", {
                    className: "p-3"
                }, O.createElement(le.X2, null, O.createElement(le.zx, {
                    expand: !0,
                    onClick: Bt,
                    disabled: Ve,
                    loading: Ve
                }, Re.joinState === ht.wN.OPEN ? O.createElement(O.Fragment, null, O.createElement(T.Z, {
                    icon: o.r8
                }), "  Join Group") : O.createElement(O.Fragment, null, O.createElement(T.Z, {
                    icon: s.FU
                }), "  Request to Join")), " ", O.createElement(le.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        J(!1)
                    }
                }, O.createElement(T.Z, {
                    icon: w.NB
                }), "  Cancel")))))), O.createElement(A.Z, {
                    isOpen: ge,
                    toggle: function() {
                        return fe(!1)
                    }
                }, O.createElement(Xl, null, O.createElement("h4", {
                    className: "text-center"
                }, "Decline Group Invite?")), O.createElement(_l, null, O.createElement(le.JX, null, O.createElement("div", {
                    className: "p-3 text-center"
                }, "Are you sure you want to decline invite to ", O.createElement("strong", null, Re.name), "?"), O.createElement("div", {
                    className: "px-3 text-center d-flex justify-content-center"
                }, O.createElement(We.Z, {
                    id: "block-invites",
                    checked: xe,
                    onChange: function(e) {
                        return Ze(e.target.checked)
                    },
                    label: "Block this group, preventing further invites",
                    htmlFor: "block-invites"
                })), O.createElement("div", {
                    className: "p-3"
                }, O.createElement(le.X2, null, O.createElement(le.zx, {
                    expand: !0,
                    danger: !0,
                    onClick: function() {
                        return ct({
                            groupId: Me,
                            block: xe
                        })
                    },
                    loading: ut
                }, O.createElement(T.Z, {
                    icon: y.LE
                }), "  Decline Invite"), " ", O.createElement(le.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        fe(!1)
                    }
                }, O.createElement(T.Z, {
                    icon: w.NB
                }), "  Cancel")))))), O.createElement(rl, {
                    group: Re,
                    showBlockModal: ie,
                    onClose: function() {
                        se(!1)
                    }
                }), O.createElement("div", {
                    className: (0, I.iv)({
                        name: "g46w8s",
                        styles: "margin-bottom:30px"
                    })
                }, O.createElement(le.X2, {
                    className: "mb-2 justify-content-end"
                }, (null == Re ? void 0 : Re.ownerId) !== Te.id && O.createElement(O.Fragment, null, O.createElement(le.zx, {
                    neutral: !0,
                    onClick: function() {
                        ee(!0)
                    }
                }, O.createElement(le.$1, {
                    icon: i.JH
                }), " Report"), O.createElement(Mn.Z, {
                    cancelCallback: function() {
                        return ee(!1)
                    },
                    isOpen: Q,
                    type: "group",
                    contentId: null == Re ? void 0 : Re.id,
                    contentName: null == Re ? void 0 : Re.name,
                    hasStore: null == Re ? void 0 : Re.storeId
                }), "userblocked" !== (null == Re ? void 0 : Re.membershipStatus) && !(null != Re && Re.myMember) && O.createElement(O.Fragment, null, " ", O.createElement(le.zx, {
                    danger: !0,
                    onClick: function() {
                        se(!0)
                    }
                }, O.createElement(le.$1, {
                    icon: h.jA
                }), " Block")), "userblocked" === (null == Re ? void 0 : Re.membershipStatus) && O.createElement(O.Fragment, null, " ", O.createElement(le.zx, {
                    danger: !0,
                    onClick: function() {
                        W(!0)
                    }
                }, O.createElement(T.Z, {
                    icon: b.faBan
                }), " Unblock")))), O.createElement(nl.Z, {
                    group: Re
                }), Vt && O.createElement(le.X2, null, O.createElement(M.Z, {
                    color: "warning"
                }, "Your VRChat account does not have 2FA enabled. Your role '", Vt.name, "' in ", Re.name, " requires this. Until you enable 2FA, your ability to manage ", Re.name, " will be limited.")), Ge && gt && O.createElement(le.X2, null, O.createElement($l, null, " THIS GROUP HAS BEEN DELETED ")), Ye && O.createElement(le.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: (null == He || null === (t = He.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred while trying to join ".concat(null == Re ? void 0 : Re.name, ".")
                }), mt && O.createElement(le.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: (null == dt || null === (n = dt.data) || void 0 === n ? void 0 : n.error.message) || "An error occurred while trying to decline group invitation."
                }), O.createElement("div", {
                    className: "d-flex flex-row justify-content-center align-content-center mb-2"
                }, Jt, Wt === ht.oq.INVITED && O.createElement(le.zx, {
                    danger: !0,
                    onClick: function() {
                        return fe(!0)
                    },
                    className: "mx-2"
                }, O.createElement(T.Z, {
                    icon: v.YI
                }), "  Decline Invite")), Yt ? O.createElement(ll, null) : O.createElement(O.Fragment, null, xt && !Ot && Zt && O.createElement(il, {
                    group: Re,
                    currentUser: Te,
                    targetUser: It,
                    onAccept: Xt,
                    onCancel: _t,
                    isLoading: be
                }), O.createElement(ce.Z, {
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
                }), O.createElement(S.Z5, null, O.createElement(S.AW, {
                    path: "/",
                    element: O.createElement(O.Fragment, null, Le && O.createElement(dl, {
                        group: Re
                    }), Le && O.createElement(Nl, {
                        group: Re,
                        event: bt,
                        isAdmin: Ge || R({
                            groupMember: null == Re ? void 0 : Re.myMember,
                            permission: "group-members-manage"
                        })
                    }), O.createElement(Dl, null, O.createElement(le.JX, {
                        className: "m-1"
                    }, O.createElement(Tn, {
                        langs: Re.languages
                    })), O.createElement(le.JX, {
                        className: "m-1"
                    }, O.createElement(Fn, {
                        links: Re.links
                    }))), O.createElement(Dl, null, O.createElement(le.JX, {
                        className: "m-1 mt-2 mw-100"
                    }, O.createElement(Xl, null, O.createElement("h4", null, "About This Group")), O.createElement(Jl, null, O.createElement("p", {
                        className: "w-100 text-break"
                    }, Re.description))), Re.rules && O.createElement(O.Fragment, null, O.createElement(le.JX, {
                        className: "m-1 mt-2 mw-100"
                    }, O.createElement(Xl, null, O.createElement("h4", null, "Rules")), O.createElement(Jl, null, O.createElement("p", {
                        className: "w-100 text-break"
                    }, Re.rules))))))
                }), O.createElement(S.AW, {
                    path: "/posts",
                    element: (Ge || R({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-announcement-manage"
                    })) && Le ? O.createElement(O.Fragment, null, P ? O.createElement(le.X2, null, O.createElement(le.JX, {
                        className: "w-100"
                    }, O.createElement(le.oI, null, O.createElement("h4", {
                        className: "text-center"
                    }, "Create Post")), O.createElement(le.Ao, null, O.createElement(le.JX, {
                        className: "w-100"
                    }, O.createElement(tl, {
                        group: Re
                    }), O.createElement(le.zx, {
                        onClick: function() {
                            return U(!1)
                        }
                    }, "Cancel"))))) : O.createElement(le.zx, {
                        onClick: function() {
                            return U(!0)
                        }
                    }, O.createElement(le.$1, {
                        icon: o.r8
                    }), " Create Post"), O.createElement(dl, {
                        isEditMode: !0,
                        group: Re
                    })) : O.createElement(L.Z, {
                        to: ".."
                    })
                }), O.createElement(S.AW, {
                    path: "/events",
                    element: O.createElement(Ll, {
                        group: Re
                    })
                }), O.createElement(S.AW, {
                    path: "/events/create",
                    element: O.createElement(Ll, {
                        group: Re,
                        isCreate: !0
                    })
                }), O.createElement(S.AW, {
                    path: "/galleries/*",
                    element: O.createElement(sr, {
                        group: Re
                    })
                }), O.createElement(S.AW, {
                    path: "/subscribe",
                    element: O.createElement(L.Z, {
                        to: "store"
                    })
                }), O.createElement(S.AW, {
                    path: "/store",
                    element: O.createElement(Pr, {
                        group: Re
                    })
                }), O.createElement(S.AW, {
                    path: "/instances",
                    element: O.createElement(fr, {
                        group: Re,
                        onJoinButtonClick: $t
                    })
                }), O.createElement(S.AW, {
                    path: "/invites/*",
                    element: Ge || R({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-invites-manage"
                    }) ? O.createElement(kr, {
                        group: Re
                    }) : O.createElement(L.Z, {
                        to: ".."
                    })
                }), O.createElement(S.AW, {
                    path: "/members",
                    element: Ge || null != Re && Re.myMember ? O.createElement(Sn, {
                        group: Re
                    }) : O.createElement(L.Z, {
                        to: ".."
                    })
                }), O.createElement(S.AW, {
                    path: "/settings/*",
                    element: Ge || null != Re && Re.myMember || R({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-data-manage"
                    }) || R({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-roles-manage"
                    }) ? O.createElement(Qt, {
                        group: Re
                    }) : O.createElement(L.Z, {
                        to: ".."
                    })
                }), O.createElement(S.AW, {
                    path: "/bans",
                    element: Ge || R({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-members-manage"
                    }) ? O.createElement(bl, {
                        group: Re
                    }) : O.createElement(L.Z, {
                        to: ".."
                    })
                })))))
            };
            var Dl = (0, a.Z)(le.X2, {
                    target: "e7n20a25"
                })("flex-wrap:wrap;margin:-0.25rem;>", le.JX, "{min-width:300px;flex:1;}"),
                Xl = (0, a.Z)(le.JX, {
                    target: "e7n20a24"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                _l = (0, a.Z)(Xl, {
                    target: "e7n20a23"
                })({
                    name: "vnq3j7",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto;white-space:pre-line"
                }),
                Jl = (0, a.Z)(_l, {
                    target: "e7n20a22"
                })({
                    name: "di36rf",
                    styles: "overflow-y:auto;white-space:pre-line;max-height:300px"
                }),
                Bl = (0, a.Z)("p", {
                    target: "e7n20a21"
                })({
                    name: "votlfh",
                    styles: "overflow-y:auto;white-space:pre-line;max-height:400px;background:#252a30;padding:0.5rem;border-radius:8px"
                }),
                $l = (0, a.Z)("h3", {
                    target: "e7n20a20"
                })({
                    name: "bbnlne",
                    styles: "margin:14px auto;color:#ffd866;text-align:center;font-weight:bold"
                })
        }
    }
]);
//# sourceMappingURL=8bfdb8c0876e2f02340e306431f9a20dda5a0ab52dcdaafab7ed7394946c774a.js.map