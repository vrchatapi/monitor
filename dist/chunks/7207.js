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
                default: () => Jl
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
                I = n(83505),
                O = n(67294),
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
                H = n(83024),
                Y = n(21464),
                Q = n(17219),
                K = n(5513),
                ee = n(64258),
                te = n(22202),
                ne = n(62437),
                re = n(96985),
                le = n(89421),
                ae = n(43862),
                oe = n(72998),
                ie = n(65394),
                ce = n(85020),
                se = n(60006),
                ue = n(17383),
                me = n(93261),
                de = n(45697),
                pe = n.n(de),
                ge = n(27484),
                fe = n.n(ge),
                Ee = n(1646),
                ve = n.n(Ee),
                be = n(84110),
                he = n.n(be),
                we = n(64358);
            fe().extend(ve()), fe().extend(he());
            const xe = function(e) {
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
                    m = fe().duration(fe()(u).diff(fe()())).humanize(!0);
                return O.createElement(ye, null, O.createElement(re.JX, {
                    className: "tw-columns-3"
                }, O.createElement(re.pw, {
                    className: "tw-justify-self-start tw-my-2",
                    fitToCover: !0,
                    alt: i,
                    imageId: (0, we.oQ)(a || o),
                    width: "100px",
                    height: "100px"
                })), O.createElement(re.JX, {
                    className: "tw-flex-[1_1_128px] tw-columns-6"
                }, O.createElement(j.rU, {
                    className: "tw-justify-self-start tw-text-2xl",
                    to: "/home/user/".concat(c)
                }, i), O.createElement("h4", {
                    className: "tw-justify-self-start"
                }, "Joined ".concat(m)), O.createElement("p", {
                    className: "tw-justify-self-start tw-text-[#737372] tw-text-[16px]"
                }, "Member")), O.createElement(re.JX, {
                    className: "tw-flex tw-flex-row tw-flex-[1_1_32px] tw-justify-center tw-items-center tw-columns-3"
                }, O.createElement(re.zx, {
                    expand: !0,
                    title: "Select New Owner",
                    onClick: function() {
                        n(t)
                    }
                }, "Select")))
            };
            var ye = (0, a.Z)(re.X2, {
                target: "e12tzkfr0"
            })("margin:0.4rem 0;padding:0.5rem;background-color:#252a30;border:3px solid #252a30;transition:border-color 0.2s ease-in-out;border-radius:8px;flex-wrap:wrap;justify-content:center;&:hover{border-color:#054d5e;}&>*{margin:0.5rem;}&>", re.JX, ">p:last-child,&>", re.JX, ">ul:last-child{margin:0;}");

            function Ze(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ke(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ze(Object(n), !0).forEach((function(t) {
                        (0, U.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ze(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ne = function(e) {
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
                    x = w[0],
                    y = w[1],
                    Z = (0, ue.Nr)(v),
                    k = (0, O.useState)([
                        [],
                        []
                    ]),
                    N = (0, l.Z)(k, 2),
                    I = N[0],
                    C = N[1],
                    S = (0, te.XC)().data,
                    j = null == o ? void 0 : o.id,
                    A = null == o ? void 0 : o.ownerId,
                    T = null == o ? void 0 : o.myMember,
                    M = (0, me.Pv)(),
                    P = (0, l.Z)(M, 2),
                    R = P[0],
                    L = P[1],
                    U = L.data,
                    z = L.error,
                    G = L.isLoading,
                    D = (null == U || null === (t = U.members) || void 0 === t ? void 0 : t.length) < 25;
                O.useEffect((function() {
                    ee(0)
                }), []), O.useEffect((function() {
                    var e = (0, q.Z)(I);
                    if (U) {
                        var t;
                        if (U.page <= 0 && !v) e[0] = [null != o && o.myMember ? ke(ke({}, T), {}, {
                            userId: S.id,
                            user: ke(ke({}, S), {}, {
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
                    y(1)
                }), [v]), (0, O.useEffect)((function() {
                    b("")
                }), [i]);
                var F = (0, me.Pi)({
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
                    V = (0, ne.hi)({
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
                    oe = null == I ? void 0 : I.map((function(e, t) {
                        var n;
                        return null === (n = (0, q.Z)(e)) || void 0 === n || null === (n = n.sort((function(e) {
                            return e.userId === A ? -1 : 0
                        }))) || void 0 === n || null === (n = n.filter((function(e, t, n) {
                            return n.findIndex((function(t) {
                                return t.userId === e.userId
                            })) === t
                        }))) || void 0 === n ? void 0 : n.map((function(e) {
                            return e.userId === A ? null : O.createElement(xe, {
                                key: e.id,
                                member: e,
                                onSelectCallback: function(e) {
                                    return m(e)
                                }
                            })
                        }))
                    }));
                return O.createElement(se.oA, {
                    role: "dialog",
                    isOpen: i,
                    toggle: c,
                    keyboard: !0,
                    autoFocus: !1,
                    size: "lg"
                }, O.createElement(se.eb, {
                    tag: "h4",
                    close: O.createElement(le.Z, {
                        onClick: c
                    }),
                    toggle: c
                }, u ? "Group Members Search" : "Users Search"), O.createElement(se.vc, null, O.createElement(se.T_, null, O.createElement(re.II, {
                    id: "search-product-list",
                    onChange: function(e) {
                        return b(e.target.value)
                    },
                    placeholder: u ? "Search Group Members..." : "Search for users...",
                    ref: g,
                    type: "text",
                    value: v
                }), (J || Y) && O.createElement("p", {
                    className: "text-center m-5 text-warning h-25"
                }, "Something went wrong with the search, please try again later!", O.createElement("br", null), J && O.createElement("code", null, null == _ || null === (n = _.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), Y && O.createElement("code", null, null == H || null === (r = H.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message)), B || p && O.createElement(se.Um, null, O.createElement("div", {
                    className: "text-center m-5 text-secondary h-25"
                }, O.createElement(ae.Z, null))), !$ && !B && !J && u && O.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "Search for members in your group."), $ && !B && u && O.createElement(se.Um, null, X.results.map((function(e) {
                    return O.createElement(xe, {
                        key: e.id,
                        member: e,
                        onSelectCallback: function(e) {
                            return m(e)
                        }
                    })
                })), 0 === X.results.length && O.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "We couldn't find anything with that search.")), !K && !Q && !Y && !u && O.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "Search for users on VRChat."), K && O.createElement(se.Um, null, 0 === W.results.length && O.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "We couldn't find anything with that search.")), G ? O.createElement(re.UU, {
                    height: "200px"
                }) : O.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, oe), O.createElement("div", {
                    className: "p-2",
                    style: {
                        margin: "2px auto 0",
                        textAlign: "center"
                    }
                }, O.createElement(re.zx, {
                    onClick: function() {
                        return ee(page)
                    },
                    disabled: G || z || D,
                    loading: G
                }, z || D ? "No more members..." : "List More Members")), ($ || K) && O.createElement(se.Gz, null, O.createElement(se.IT, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return y(x - 1)
                    },
                    disabled: 1 === x || B || Q
                }, O.createElement(re.$1, {
                    icon: ce.A3
                })), O.createElement("span", null, x), O.createElement(se.UV, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return y(x + 1)
                    },
                    disabled: (null == X ? void 0 : X.isLastPage) || (null == W ? void 0 : W.isLastPage) || B || Q
                }, O.createElement(re.$1, {
                    icon: ie._t
                }))))))
            };
            Ne.propTypes = {
                group: pe().object,
                isOpen: pe().bool.isRequired,
                cancelCallback: pe().func.isRequired,
                memberEditCallback: pe().func,
                memberSelectCallback: pe().func
            };
            const Ie = Ne;
            var Oe = n(46027);
            const Ce = function(e) {
                var t, n, r = e.group,
                    l = e.onClickCallback,
                    a = e.isDeleting,
                    o = (0, ne.GR)(null == r ? void 0 : r.ownerId, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    i = o.data,
                    c = o.isFetching,
                    s = o.isError,
                    u = o.error,
                    m = (0, ne.GR)(null == r ? void 0 : r.transferTargetId, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    d = m.data,
                    p = m.isFetching,
                    g = m.isError,
                    f = m.error;
                return O.createElement(O.Fragment, null, O.createElement(re.oI, {
                    className: "mt-2"
                }, O.createElement("h4", {
                    className: "text-center"
                }, "Group Ownership Transfer")), O.createElement(re.Ao, null, c || p || !d || !i ? O.createElement("div", {
                    className: "full-width text-center"
                }, O.createElement(ae.Z, null)) : O.createElement(O.Fragment, null, s && O.createElement(re.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == u || null === (t = u.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), g && O.createElement(re.qX, {
                    type: "error",
                    title: "Error Fetching New Group Owner Data"
                }, (null == f || null === (n = f.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unkown error fetching New Group Owner Data"), O.createElement(re.X2, null, O.createElement("span", {
                    className: "full-width text-center"
                }, "You can choose to cancel the transfer")), O.createElement(re.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, O.createElement(re.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, O.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "Current Owner"), O.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, O.createElement(re.$1, {
                    className: "tw-mr-2",
                    icon: Oe.nm
                }), null == i ? void 0 : i.displayName)), O.createElement(re.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, O.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "New Owner"), d && O.createElement(re.X2, {
                    className: "tw-flex tw-m-1 tw-font-bold gx-0 gap-1"
                }, O.createElement(re.pw, {
                    width: 24,
                    style: {
                        maxWidth: "24px",
                        objectFit: "cover"
                    },
                    imageId: (d.thumbnailUrl || d.currentAvatarThumbnailImageUrl).match("(?!/)file_[^/]+")[0],
                    alt: null == d ? void 0 : d.displayName
                }), null == d ? void 0 : d.displayName))), a ? O.createElement("div", {
                    className: "full-width text-center"
                }, O.createElement(ae.Z, null)) : O.createElement("div", {
                    className: (0, I.iv)({
                        name: "pc0kie",
                        styles: ">*{margin-top:15px;}"
                    })
                }, O.createElement(re.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, O.createElement(re.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, O.createElement(re.zx, {
                    onClick: function() {
                        return l()
                    },
                    danger: !0,
                    className: "tw-max-w-[100%]"
                }, "Cancel Transfer")))))))
            };
            var Se = n(57982);
            const je = function(e) {
                var t = e.isOpen,
                    n = e.cancelCallback;
                return O.createElement(se.oA, {
                    role: "dialog",
                    isOpen: t,
                    toggle: n,
                    keyboard: !0,
                    autoFocus: !1,
                    size: "lg"
                }, O.createElement(se.eb, {
                    tag: "h4",
                    close: O.createElement(le.Z, {
                        onClick: n
                    }),
                    toggle: n
                }, "About Group Ownership Transfer"), O.createElement(se.vc, null, O.createElement("h4", null, "You can transfer your group ownership to another member of the group. the target member and the group must meet the requirements below."), O.createElement(se.T_, null, O.createElement("ul", null, O.createElement("li", null, "The target member has verified their email address ", "(", "check the Email section via", " ", O.createElement(j.rU, {
                    className: "tw-text-link-highlight",
                    to: "/home/profile",
                    target: "_blank"
                }, "account settings"), ")"), O.createElement("li", null, "The target member has an active VRC Plus subscription"), O.createElement("li", null, "The target member can still own more groups ", "(", "each user can own up to 5 groups", ")"), O.createElement("li", null, "The group is not monetized")))))
            };
            var Ae = function(e) {
                var t, n, r = e.group,
                    a = e.onButtonClick,
                    o = e.isLoading,
                    i = O.useState(!1),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, ne.GR)(null == r ? void 0 : r.ownerId, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    d = m.data,
                    p = m.isFetching,
                    g = m.isError,
                    f = m.error,
                    E = (0, me.ek)({
                        groupId: r.id
                    }, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    v = E.data,
                    b = E.isFetching,
                    h = E.isError,
                    w = E.error,
                    x = O.useMemo((function() {
                        return null == v || !v.requirements || !v.requirements.groupNotMonetized
                    }), [v, h]);
                return O.createElement(O.Fragment, null, s && O.createElement(je, {
                    isOpen: s,
                    cancelCallback: function() {
                        return u(!1)
                    }
                }), O.createElement(re.oI, {
                    className: "mt-2"
                }, O.createElement("h4", {
                    className: "text-center"
                }, "Group Ownership Transfer")), O.createElement(re.Ao, null, p || b ? O.createElement("div", {
                    className: "full-width text-center"
                }, O.createElement(ae.Z, null)) : O.createElement(O.Fragment, null, g && O.createElement(re.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == f || null === (t = f.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), h && O.createElement(re.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == w || null === (n = w.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unkown error fetching Group Owner Requirements Data"), x && !h ? O.createElement("span", {
                    className: "tw-mb-2"
                }, O.createElement(re.qX, {
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
                }, "these requirements"), " ", "to qualify for the transfer."), O.createElement(re.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, O.createElement(re.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, O.createElement("p", null, "Current Owner"), O.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, O.createElement(re.$1, {
                    className: "tw-mr-2",
                    icon: Oe.nm
                }), null == d ? void 0 : d.displayName)), O.createElement(re.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, O.createElement("p", null, "New Owner"), O.createElement(re.zx, {
                    className: "tw-max-w-[250px]",
                    onClick: function() {
                        return a()
                    },
                    disabled: o || h || x,
                    loading: o
                }, O.createElement(re.$1, {
                    className: "tw-mr-2",
                    icon: Se.faMagnifyingGlass
                }), "Search Group Members"))))))
            };
            Ae.propTypes = {
                group: pe().object.isRequired,
                onButtonClick: pe().func.isRequired,
                isLoading: pe().bool.isRequired
            };
            const Te = Ae;
            var Me, Pe = "hasVerifiedEmail",
                Re = "targetCanOwnMoreGroups",
                Le = "targetIsGroupMember",
                Ue = "hasVRCPlus",
                qe = "groupNotMonetized",
                ze = (Me = {}, (0, U.Z)(Me, Pe, "Email address has not been verified"), (0, U.Z)(Me, Re, "Already owns maximum nubmer of groups per user"), (0, U.Z)(Me, Le, "Is not a valid member of the group"), (0, U.Z)(Me, Ue, "Does not have an active VRChat Plus subscription"), (0, U.Z)(Me, qe, "Group is not valid because it is monetized"), Me);
            const Ge = function(e) {
                var t, n = e.group,
                    r = e.validity,
                    l = e.prospectiveNewOwner,
                    a = e.onTransfer,
                    o = e.onCancel,
                    i = e.isOpen,
                    c = e.isTransferring,
                    s = (0, ne.GR)(null == n ? void 0 : n.ownerId, {
                        skip: !n,
                        refetchOnMountOrArgChange: !0
                    }),
                    u = s.data,
                    m = s.isFetching,
                    d = s.isError,
                    p = s.error;
                return O.createElement(O.Fragment, null, O.createElement(re.sm, {
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
                }, O.createElement(ae.Z, null)) : O.createElement("div", null, d && O.createElement(re.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == p || null === (t = p.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), !(null != r && r.valid) && (null == r ? void 0 : r.reasons) && O.createElement(re.qX, {
                    type: "error",
                    title: "Oops, it seems the selected member does not meet the following requirement(s)"
                }, r.reasons.map((function(e) {
                    var t;
                    return O.createElement("p", null, "• ".concat(null !== (t = ze[e]) && void 0 !== t ? t : "Unknown Validity Reason"))
                }))), O.createElement(re.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-mt-2"
                }, O.createElement("span", {
                    className: "tw-full-width tw-text-center"
                }, "Are you sure you want to transfer your group ownership?")), O.createElement(re.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-bg-[#252a30] tw-px-8 tw-text-[16px] tw-rounded-lg tw-border-current tw-transition tw-ease-in-out tw-delay-150 tw-bg-[#252a30] tw-mt-2"
                }, O.createElement(re.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, O.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "Current Owner"), O.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, O.createElement(re.$1, {
                    className: "tw-mr-2",
                    icon: Oe.nm
                }), null == u ? void 0 : u.displayName)), O.createElement(re.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, O.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "New Owner"), (null == l ? void 0 : l.user) && O.createElement(re.X2, {
                    className: "tw-flex tw-m-1 tw-font-bold gx-0 gap-1"
                }, O.createElement(re.pw, {
                    width: 24,
                    style: {
                        maxWidth: "24px",
                        objectFit: "cover"
                    },
                    imageId: (0, we.oQ)(l.user.thumbnailUrl || l.user.currentAvatarThumbnailImageUrl),
                    alt: l.user.displayName
                }), l.user.displayName))), O.createElement(re.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-mt-2"
                }, O.createElement("span", {
                    className: "tw-full-width tw-text-center"
                }, "This cannot be undone once the transfer is complete.")))))
            };
            var De = n(34698),
                Fe = n(58877),
                Xe = n(25402);
            const _e = function(e) {
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
                    x = w[0],
                    y = w[1],
                    Z = null != n ? n : [],
                    k = function() {
                        g(!0), y(!1)
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
                        if ("" === n) return u(""), void y(!1);
                        try {
                            var r = new URL(n);
                            u(n), y("https:" !== r.protocol && "http:" !== r.protocol)
                        } catch (e) {
                            u(n), y(!0)
                        }
                    },
                    onKeyUp: function(e) {
                        13 === e.keyCode && !1 === x && I()
                    },
                    className: "form-control",
                    value: s,
                    maxLength: 1e3
                }), O.createElement("div", {
                    className: "input-group-append"
                }, O.createElement("span", {
                    className: "input-group-text",
                    id: "basic-addon1"
                }, O.createElement(Xe.QZ, {
                    url: s,
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                })))), O.createElement(De.Z, {
                    onClick: function() {
                        g(!1), u(v)
                    }
                }, "Cancel"), O.createElement(De.Z, {
                    onClick: I,
                    disabled: x,
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
                }, "Link"))) : O.createElement("div", null, O.createElement(Fe.Z, {
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
                }, Z[o]), O.createElement(Je, {
                    className: "btn btn-outline-danger h-100 ratio-1x1",
                    "aria-label": "Close",
                    onClick: C
                }, O.createElement("span", {
                    "aria-hidden": "true"
                }, "×")))) : O.createElement("div", null)
            };
            var Je = (0, a.Z)(De.Z, {
                    target: "e1a3rjxi0"
                })({
                    name: "1234s8l",
                    styles: "width:40px;max-width:40px"
                }),
                Be = n(71421),
                $e = n(18461);
            var Ve = function() {
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
                return O.createElement(Qe, {
                    className: "mb-2",
                    role: "radiogroup",
                    "aria-label": n.ariaLabel,
                    onMouseLeave: function() {
                        d && p(!1)
                    }
                }, O.createElement(tt, {
                    disabled: a,
                    expanded: d
                }, O.createElement(nt, {
                    type: "button",
                    "aria-label": "Expand Options",
                    disabled: a,
                    onClick: function(e) {
                        e.stopPropagation(), e.preventDefault(), p(!d)
                    }
                }, !!n && O.createElement(Ye, null, n.labelValue), O.createElement(He, {
                    className: "tw-gap-2 tw-text-center tw-justify-center"
                }, h), O.createElement(M.Z, {
                    icon: Be.eW,
                    color: "white",
                    className: "ms-3"
                })), d && i.length > 0 && O.createElement(rt, {
                    className: "tw-px-[10px] tw-gap-1 tw-py-1"
                }, i.map((function(e, t) {
                    var n, r;
                    return O.createElement($e.Z, {
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
            Ve.propTypes = {
                labelProps: pe().shape({
                    ariaLabel: pe().string.isRequired,
                    labelValue: pe().string.isRequired
                }).isRequired,
                disabled: pe().bool.isRequired,
                options: pe().array.isRequired,
                onTriggerUpdate: pe().func
            };
            const We = Ve;
            var He = (0, a.Z)("div", {
                    target: "e1476vl15"
                })({
                    name: "jyvlna",
                    styles: "display:flex;align-items:center;max-width:75%"
                }),
                Ye = (0, a.Z)("div", {
                    target: "e1476vl14"
                })({
                    name: "qcoia9",
                    styles: "font-size:0.8em;margin-right:10px;color:hsla(0, 0%, 100%, 0.6);white-space:nowrap;max-width:100%"
                }),
                Qe = (0, a.Z)("div", {
                    target: "e1476vl13"
                })({
                    name: "sss5sy",
                    styles: "display:flex;z-index:4;max-width:400px;min-width:200px"
                }),
                Ke = {
                    name: "4u0b5g",
                    styles: "border:hsl(0, 0%, 20%) solid 2px;background:hsl(0, 0%, 20%);color:hsl(0, 0%, 60%);&:hover{border:hsl(0, 0%, 20%) solid 2px;background:hsl(0, 0%, 20%);color:hsl(0, 0%, 60%);}"
                },
                et = {
                    name: "1ll5w29",
                    styles: "border-bottom-color:'#07343f'"
                },
                tt = (0, a.Z)("div", {
                    target: "e1476vl12"
                })("text-align:center;background-color:#064b5c;padding:5px 11px 5px 11px;border:#064b5c solid 2px;color:#ffffff;border-radius:3px;transition:background-color 0.2s ease-in-out;position:relative;display:flex;flex:1;border-radius:", (function(e) {
                    return e.expanded ? "3px 3px 0 0" : 3
                }), "px;max-width:100%;&:hover{background-color:#064b5c;border-color:#086c84;}", (function(e) {
                    return e.expanded ? et : ""
                }), " ", (function(e) {
                    return e.disabled ? Ke : ""
                }), ";"),
                nt = (0, a.Z)("button", {
                    target: "e1476vl11"
                })({
                    name: "118t6pa",
                    styles: "border:none;background:transparent;outline:none!important;display:flex;flex:1;flex-direction:row;align-items:center;justify-content:space-between;position:relative;max-width:100%"
                }),
                rt = (0, a.Z)("div", {
                    target: "e1476vl10"
                })({
                    name: "1lt6ba7",
                    styles: "position:absolute;z-index:4;top:100%;left:-2px;width:calc(100% + 4px);background-color:#07343f;display:flex;flex-direction:column;border-radius:0 0 3px 3px;border:#086c84 solid 2px;border-top-width:0;text-align:left;max-width:calc(100% + 4px)"
                });
            const lt = function(e) {
                var t = e.log;
                return e.isLoading ? O.createElement(at, {
                    className: "justify-content-center"
                }, O.createElement("div", {
                    className: "spinner-border"
                })) : O.createElement(at, null, O.createElement(ot, null, fe()(t.created_at).format("MM/DD/YYYY hh:mm A")), t.description)
            };
            var at = (0, a.Z)("div", {
                    target: "evg8j501"
                })({
                    name: "kv8vyc",
                    styles: "background-color:#252a30;border-radius:12px;padding:8px;margin-bottom:8px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;transition:background-color 0.2s ease-in-out;:hover{background-color:#353c45;}"
                }),
                ot = (0, a.Z)("div", {
                    target: "evg8j500"
                })({
                    name: "hbayc1",
                    styles: "font-size:14px;font-weight:lighter;font-style:italic;margin-bottom:8px"
                });
            var it = [{
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
            const ct = function(e) {
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
                    x = (0, l.Z)(w, 2),
                    y = x[0],
                    Z = x[1],
                    k = O.useState([]),
                    N = (0, l.Z)(k, 2),
                    I = N[0],
                    C = N[1],
                    S = (0, me.hg)(),
                    j = (0, l.Z)(S, 2),
                    A = j[0],
                    T = j[1],
                    M = T.data,
                    P = T.isFetching,
                    R = T.isError,
                    L = (0, me.rw)({
                        groupId: n.id
                    }, {
                        skip: !n
                    }),
                    U = L.data,
                    z = L.isFetching,
                    G = L.isError;
                O.useEffect((function() {
                    C(y.map((function(e) {
                        return e.value
                    })))
                }), [y]), O.useEffect((function() {
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
                        eventTypes: I ? (0, q.Z)(I) : []
                    })
                }), [o, u, U, I, y]), O.useEffect((function() {
                    null != M && M.totalCount && f(M.totalCount)
                }), [M]);
                var D = O.createElement(ut, null, O.createElement(mt, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u - o)
                    },
                    disabled: 0 === u
                }, O.createElement(re.$1, {
                    icon: ce.A3
                })), O.createElement("span", null, "(", u, " - ", g < o + u ? g : o + u, ") / ", g), O.createElement(dt, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u + o)
                    },
                    disabled: g < o + u
                }, O.createElement(re.$1, {
                    icon: ie._t
                })));
                return O.createElement("div", null, R && O.createElement(re.qX, {
                    title: "Error",
                    type: "error",
                    className: "mb-2"
                }, "There was an error loading the audit log."), G && !z && O.createElement(re.qX, {
                    title: "Error",
                    type: "error",
                    className: "mb-2"
                }, "There was an error loading the filterable audit log types."), O.createElement(re.oI, null, O.createElement("h4", {
                    className: "text-center"
                }, "Audit Log")), O.createElement(re.Ao, null, O.createElement(re.X2, {
                    className: "tw-flex-row tw-justify-evenly"
                }, !!b.length && O.createElement(We, {
                    labelProps: {
                        ariaLabel: "LogTypes",
                        labelValue: "Filter Log Types: "
                    },
                    disabled: !n,
                    options: b,
                    onTriggerUpdate: function(e) {
                        return C(e)
                    }
                }), O.createElement(st, {
                    label: "Items per-page",
                    onChange: i,
                    options: it,
                    value: o,
                    className: "mb-2"
                })), D, O.createElement("div", {
                    className: "audit-log"
                }, (null !== (t = null == M ? void 0 : M.results) && void 0 !== t ? t : Array(o).fill({})).map((function(e, t) {
                    var n;
                    return O.createElement(lt, {
                        key: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "log-".concat(t),
                        log: e,
                        n: o,
                        offset: u,
                        isLoading: P
                    })
                }))), D))
            };
            var st = (0, a.Z)(re.Lt, {
                    target: "e88tm0e3"
                })({
                    name: "1lsto0t",
                    styles: "max-width:250px"
                }),
                ut = (0, a.Z)("div", {
                    target: "e88tm0e2"
                })({
                    name: "1vtota4",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-bottom:8px"
                }),
                mt = (0, a.Z)(re.zx, {
                    target: "e88tm0e1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                dt = (0, a.Z)(re.zx, {
                    target: "e88tm0e0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                pt = n(91054),
                gt = n(27149),
                ft = n(59895),
                Et = n(30776),
                vt = n(29104),
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
                    u = (0, te.XC)(),
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
                    x = w[0],
                    y = w[1],
                    Z = O.useState(!0),
                    k = (0, l.Z)(Z, 2),
                    I = k[0],
                    j = k[1],
                    A = O.useState(!1),
                    T = (0, l.Z)(A, 2),
                    M = T[0],
                    P = T[1],
                    R = (0, me.r5)({
                        groupId: i
                    }, {
                        skip: !m.id
                    }),
                    L = R.data,
                    U = R.isLoading,
                    q = R.error,
                    z = R.isError,
                    G = (0, me.xm)({
                        groupId: i,
                        userId: m.id
                    }, {
                        skip: !m.id
                    }),
                    D = G.data,
                    F = G.isLoading,
                    X = G.error,
                    _ = G.isError;
                (0, O.useEffect)((function() {
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
                    $ = (0, me.uX)(),
                    V = (0, l.Z)($, 2),
                    H = V[0],
                    Y = V[1],
                    Q = Y.isLoading,
                    K = Y.error,
                    ne = Y.isError,
                    le = Y.isSuccess,
                    ae = (0, me.nm)(),
                    oe = (0, l.Z)(ae, 2),
                    ie = oe[0],
                    ce = oe[1],
                    se = ce.isLoading,
                    ue = ce.error,
                    de = ce.isError,
                    pe = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return P(!1), e.next = 3, ie({
                                            groupId: i,
                                            userId: m.id
                                        });
                                    case 3:
                                        e.sent.error || (c((0, ee.d)({
                                            title: "You left the group",
                                            icon: ft.u8,
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
                }) : O.createElement(O.Fragment, null, O.createElement(re.oI, null, O.createElement("h4", {
                    className: "text-center"
                }, "Membership Preferences")), O.createElement(re.Ao, null, J ? O.createElement(re.UU, {
                    height: "250px"
                }) : O.createElement(O.Fragment, null, le && O.createElement(re.qX, {
                    type: "success",
                    title: "Updated preferences",
                    slim: !0
                }, "Your preferences were saved successfully"), ne && O.createElement(re.qX, {
                    type: "error",
                    title: "Error updating preferences"
                }, K.status, " : ", null !== (t = null === (n = K.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : ""), L.privacy === ht.TW.DEFAULT && O.createElement(W.Z, null, "Visibility ", O.createElement(re.Lt, {
                    onChange: b,
                    value: v,
                    options: wt
                }), O.createElement("small", null, "Do you want everyone to see this group on your profile, just your friends to see it, or to keep it secret? This only affects your own profile.")), O.createElement("div", {
                    className: "my-2"
                }, O.createElement(vt.Z, {
                    label: "Subscribe to Posts",
                    value: "isSubscribedToPosts",
                    defaultChecked: x,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        y(t)
                    }
                }), O.createElement(Et.Z, null, "Tick this to hear all the latest news and goss from this group")), O.createElement("div", {
                    className: "my-2"
                }, O.createElement(vt.Z, {
                    label: "Subscribe to Event Announcements",
                    value: "isSubscribedToEventAnnouncements",
                    defaultChecked: I,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        j(t)
                    }
                }), O.createElement(Et.Z, null, "Tick this to receive notifications about events from this group")), O.createElement(re.zx, {
                    onClick: function() {
                        H({
                            groupId: i,
                            userId: m.id,
                            visibility: v,
                            isSubscribedToPosts: x,
                            isSubscribedToEventAnnouncements: I
                        })
                    },
                    loading: Q,
                    disabled: Q
                }, O.createElement(re.$1, {
                    icon: gt.r6
                }), " Save Preferences"))), O.createElement(re.oI, {
                    className: "mt-2"
                }, O.createElement("h4", {
                    className: "text-center"
                }, "Leave Group")), O.createElement(re.Ao, null, J ? O.createElement(re.UU, {
                    height: "100px",
                    delay: 50
                }) : O.createElement(O.Fragment, null, de && O.createElement(re.qX, {
                    type: "error",
                    title: "Error leaving group"
                }, ue.status, " : ", null !== (a = null === (o = ue.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : ""), O.createElement(re.sm, {
                    headerText: "Leave Group",
                    bodyText: "Are you sure you want to leave this group?",
                    confirmText: "Yes, Leave Group",
                    confirmCallback: pe,
                    cancelText: "Never Mind!",
                    cancelCallback: function() {
                        P(!1)
                    },
                    isOpen: M
                }), B ? O.createElement(re.qX, {
                    type: "warning",
                    title: "You own this group!"
                }, "You can't leave your own group, but you can delete the group over in General settings.") : O.createElement("p", null, "This group not your thing anymore? No problem."), O.createElement(re.zx, {
                    warning: !0,
                    onClick: function() {
                        P(!0)
                    },
                    loading: se,
                    disabled: B || se
                }, O.createElement(re.$1, {
                    icon: pt.HE
                }), " Leave Group"))))
            };
            var yt = n(41145),
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
                    b = (0, O.useRef)(!0),
                    h = (0, ue.pc)(),
                    x = O.useMemo((function() {
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
                    Z = O.useState({}),
                    k = (0, l.Z)(Z, 2),
                    I = k[0],
                    T = k[1],
                    P = O.useState(null),
                    L = (0, l.Z)(P, 2),
                    G = L[0],
                    D = L[1],
                    F = O.useState({}),
                    X = (0, l.Z)(F, 2),
                    _ = X[0],
                    V = X[1],
                    H = O.useState(null != x && x.defaultRole ? "permissions" : "general"),
                    Y = (0, l.Z)(H, 2),
                    Q = Y[0],
                    K = Y[1],
                    te = O.useState(null == x ? void 0 : x.requiresTwoFactor),
                    ne = (0, l.Z)(te, 2),
                    le = ne[0],
                    ae = ne[1],
                    ie = O.useState(null == x ? void 0 : x.isAddedOnJoin),
                    ce = (0, l.Z)(ie, 2),
                    se = ce[0],
                    de = ce[1],
                    pe = O.useState(null == x ? void 0 : x.isSelfAssignable),
                    ge = (0, l.Z)(pe, 2),
                    fe = ge[0],
                    Ee = ge[1],
                    ve = O.useState((null == u ? void 0 : u.joinState) === ht.wN.OPEN),
                    be = (0, l.Z)(ve, 2),
                    he = be[0],
                    xe = be[1],
                    ye = O.useState(!1),
                    Ze = (0, l.Z)(ye, 2),
                    ke = Ze[0],
                    Ne = Ze[1],
                    Ie = O.useState((null == x ? void 0 : x.permissions) || []),
                    Oe = (0, l.Z)(Ie, 2),
                    Ce = Oe[0],
                    Se = Oe[1],
                    je = O.useState(!1),
                    Ae = (0, l.Z)(je, 2),
                    Te = Ae[0],
                    Me = Ae[1],
                    Pe = O.useState(null),
                    Re = (0, l.Z)(Pe, 2),
                    Le = Re[0],
                    Ue = Re[1],
                    qe = O.useState(null),
                    ze = (0, l.Z)(qe, 2),
                    Ge = ze[0],
                    De = ze[1],
                    Fe = (0, me.mt)({
                        groupId: u.id
                    }),
                    Xe = Fe.data,
                    _e = Fe.isLoading,
                    Je = Fe.isError,
                    Be = (0, me.Pt)(),
                    $e = (0, l.Z)(Be, 2),
                    Ve = $e[0],
                    We = $e[1],
                    He = We.isLoading,
                    Ye = We.isError,
                    Qe = We.error,
                    Ke = (0, me.hE)(),
                    et = (0, l.Z)(Ke, 2),
                    tt = (et[0], et[1]),
                    nt = tt.isLoading,
                    rt = tt.isError,
                    lt = tt.error,
                    at = (0, me.ci)(),
                    ot = (0, l.Z)(at, 2),
                    it = ot[0],
                    ct = ot[1],
                    st = (ct.isLoading, ct.isError, ct.error, (0, me.VF)()),
                    ut = (0, l.Z)(st, 2),
                    mt = ut[0],
                    dt = ut[1],
                    pt = dt.isLoading,
                    ft = dt.isError,
                    bt = dt.error,
                    wt = (0, It.lZ)({
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
                    zt = O.useMemo((function() {
                        var e;
                        return (null === (e = qt ? [] : Lt) || void 0 === e ? void 0 : e.filter((function(e) {
                            var t, n = e.id,
                                r = e.active,
                                l = e.archived;
                            return r && !l && !Mt && (null == xt || null === (t = xt.parentListings) || void 0 === t ? void 0 : t.includes(n))
                        }))) || []
                    }), [xt, Mt, Lt, qt]),
                    Gt = He || nt || pt || _e || jt || Ut,
                    Dt = (null == u ? void 0 : u.joinState) === ht.wN.OPEN ? "Your group is already set to Free Join, so enabling this option won’t have any effect. Subscribers will still join automatically." : "When enabled, anyone can purchase this role and join the group, regardless of the group’s join rules. This option overrides standard join settings.";
                (0, O.useEffect)((function() {
                    if (xt) {
                        if (Ne(xt.groupAccessRemove), (null == u ? void 0 : u.joinState) === ht.wN.OPEN) return xe(!0), void D(At(At({}, G), {}, {
                            groupAccess: !0
                        }));
                        xe(xt.groupAccess)
                    }
                }), [xt]);
                var Ft = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = {};
                    "new" === (null == x ? void 0 : x.id) && (t = At({}, x)), e || (ae(null == x ? void 0 : x.requiresTwoFactor), de(null == x ? void 0 : x.isAddedOnJoin), Ee(null == x ? void 0 : x.isSelfAssignable), Se((null == x ? void 0 : x.permissions) || [])), d(0), T(t), D(null)
                };
                (0, O.useEffect)((function() {
                    Ft(), K(null != x && x.defaultRole ? "permissions" : "general")
                }), [u, v]), (0, O.useEffect)((function() {
                    b.current ? b.current = !1 : ((null == x ? void 0 : x.requiresTwoFactor) !== le && T(At(At({}, I), {}, {
                        requiresTwoFactor: le
                    })), (null == x ? void 0 : x.isAddedOnJoin) !== se && T(At(At({}, I), {}, {
                        isAddedOnJoin: se
                    })), (null == x ? void 0 : x.isSelfAssignable) !== fe && T(At(At({}, I), {}, {
                        isSelfAssignable: fe
                    })), (null == x ? void 0 : x.permissions) !== Ce && T(At(At({}, I), {}, {
                        permissions: Ce
                    })))
                }), [le, se, fe, Ce]), (0, O.useEffect)((function() {
                    0 !== p && T(At(At({}, I), {}, {
                        order: p + x.order
                    }))
                }), [p]);
                var Xt = (0, ue._b)(Xe),
                    _t = O.useMemo((function() {
                        return (0, we.Ps)({
                            permissionName: Le,
                            permissionsMap: Xt
                        })
                    }), [Le, Xt]);
                if ((0, O.useEffect)((function() {
                        if (Ce.length > 0 && Xt && Object.keys(Xt).length > 0) {
                            var e = Ce.filter((function(e) {
                                return !e.includes("*") && !Xt[e]
                            }));
                            e.length > 0 && De(e)
                        }
                    }), [Ce, Xt]), !x || _e || Je) return null;
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
                        T(At(At({}, I), {}, (0, U.Z)({}, n, r))), V(At(At({}, _), {}, (0, U.Z)({}, n, e.target.checkValidity())))
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
                                        return e.next = 4, Ve({
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
                                        return e.next = 11, it({
                                            groupId: u.id,
                                            roleId: x.id,
                                            productId: (null == xt ? void 0 : xt.id) || null,
                                            productData: G,
                                            roleData: t
                                        });
                                    case 11:
                                        (r = e.sent).error ? f((0, ee.d)({
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
                                        return e.prev = 2, e.next = 5, mt({
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
                                        Me(!1), E("../roles"), e.next = 15;
                                        break;
                                    case 14:
                                        Me(!0);
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
                return O.createElement("div", null, rt && O.createElement(re.qX, {
                    title: "Error updating role",
                    type: "error"
                }, "Failed to update role: ", null == lt || null === (t = lt.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), Ye && O.createElement(re.qX, {
                    title: "Error creating role",
                    type: "error"
                }, "Failed to create role: ", null == Qe || null === (n = Qe.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), O.createElement(A.Z, {
                    isOpen: Te
                }, O.createElement(re.oI, {
                    className: "text-center"
                }, O.createElement("h4", null, "Are you sure?")), O.createElement(re.Ao, null, O.createElement($.Z, null, ft && O.createElement(re.qX, {
                    title: "Error deleting role",
                    type: "error"
                }, "Failed to delete role: ", null !== (a = null == bt || null === (o = bt.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : "Unexpected error occurred"), O.createElement("p", null, "This will delete the role and all members with this role will be demoted to the lowest role. This action cannot be undone.")), O.createElement("div", {
                    className: "d-flex flex-row justify-content-md-center"
                }, O.createElement(re.zx, {
                    danger: !0,
                    onClick: function() {
                        $t(!0)
                    },
                    loading: pt,
                    expand: !0
                }, O.createElement(re.$1, {
                    icon: z.$
                }), " Yes, Delete"), " ", O.createElement(re.zx, {
                    onClick: function() {
                        Me(!1)
                    },
                    disabled: pt,
                    expand: !0
                }, "Cancel")))), null == x ? O.createElement("div", null, O.createElement("p", null, "Pick a role to edit.")) : O.createElement("div", null, Wt ? O.createElement("h6", {
                    className: "text-center"
                }, "New", x.requiresPurchase && " Paid", " Role") : O.createElement("h6", {
                    className: "text-center"
                }, Ht ? "Viewing" : "Editing", " - ", x.name), function() {
                    var e;
                    if (null == x || !x.createdAt || !x.requiresPurchase || zt.length) return null;
                    var t = "activate its associated subscription";
                    return O.createElement(re.qX, {
                        type: "info",
                        title: "No Active Subscriptions"
                    }, "Before people can buy this role, ", g ? "you'll" : "the group owner will", " need to", " ", g && !Mt && null != xt && null !== (e = xt.parentListings) && void 0 !== e && e.length ? O.createElement(j.rU, {
                        to: "/home/marketplace/storefront/subscriptions"
                    }, t) : t, " ", "in ", g ? "your" : "their", " Store. ", g ? "You" : "The Group Owner", " can also give the product and listing their own images, descriptions and other details from there.")
                }(), !x.defaultRole && O.createElement(B.Z, null, O.createElement(oe.Z, {
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
                    selected: Q,
                    onChange: function(e) {
                        K(e)
                    }
                })), O.createElement(Ot.Z, {
                    activeTab: Q
                }, O.createElement(Ct.Z, {
                    tabId: "general"
                }, nn && !Ht && O.createElement(O.Fragment, null, O.createElement(B.Z, null, O.createElement("h6", {
                    className: "text-center"
                }, "Change role order"), O.createElement("div", {
                    className: "d-flex flex-row justify-content-md-center"
                }, O.createElement(re.zx, {
                    onClick: function() {
                        m({
                            offset: -1,
                            roleId: x.id
                        })
                    },
                    expand: !0
                }, O.createElement(re.$1, {
                    icon: Zt.mT
                }), " Move Up"), " ", O.createElement(re.zx, {
                    onClick: function() {
                        m({
                            offset: 1,
                            roleId: x.id
                        })
                    },
                    expand: !0
                }, O.createElement(re.$1, {
                    icon: yt.pt
                }), " Move Down"))), " ", " "), O.createElement(B.Z, {
                    className: "mb-2"
                }, O.createElement(J.Z, null, O.createElement(re.II, {
                    type: "text",
                    name: "name",
                    value: null != I.name ? I.name : x.name,
                    onChange: Jt,
                    maxLength: 64,
                    required: !0,
                    disabled: Ht || x.defaultRole,
                    placeholder: "Enter Role's Name"
                }), !1 === _.name && O.createElement(W.Z, null, "Must be between 1 and 64 characters."))), O.createElement(B.Z, {
                    className: "mb-3"
                }, O.createElement(J.Z, null, O.createElement(re.gx, {
                    type: "textarea",
                    name: "description",
                    value: null != I.description ? I.description : x.description,
                    onChange: Jt,
                    maxLength: 256,
                    disabled: Ht || x.defaultRole,
                    placeholder: "Enter Role's Description",
                    inputStyle: {
                        height: "100px"
                    }
                }), !1 === _.description && O.createElement(W.Z, null, "Must be 256 characters or less."))), tn && !x.requiresPurchase && Qt && O.createElement(B.Z, {
                    className: "my-2"
                }, O.createElement(vt.Z, {
                    label: "Assign On Join",
                    value: "isAddedOnJoin",
                    defaultChecked: null != I.isAddedOnJoin ? I.isAddedOnJoin : x.isAddedOnJoin,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        de(t)
                    }
                }), O.createElement(Et.Z, null, "If enabled, new members will be assigned this role when they join the group. This will not affect existing members.")), en && O.createElement(B.Z, {
                    className: "my-2"
                }, O.createElement(vt.Z, {
                    label: "Self Assignable",
                    value: "isSelfAssignable",
                    defaultChecked: fe,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        Ee(t)
                    }
                }), O.createElement(Et.Z, null, "Allows members of the group to assign this role to themselves.")), O.createElement(B.Z, {
                    className: "my-3"
                }, O.createElement(vt.Z, {
                    label: "Require Two-Factor Authentication",
                    value: "requiresTwoFactor",
                    defaultChecked: le,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        return ae(t)
                    }
                }), O.createElement(Et.Z, null, "Requires members to have 2FA before permissions apply.")), x.requiresPurchase && O.createElement(O.Fragment, null, O.createElement(B.Z, {
                    className: "my-2"
                }, O.createElement(vt.Z, {
                    label: "Enable Free Join for Subscribers",
                    value: "productGroupAccess",
                    defaultChecked: he,
                    onChangeCallback: function(e) {
                        var t, n, r, l = e.checked;
                        t = l, n = At(At({}, I), {}, {
                            productGroupAccess: t
                        }), r = At(At({}, G), {}, {
                            groupAccess: t
                        }), t || (n.productGroupAccessRemove = void 0, r.groupAccessRemove = !1, Ne(!1)), xe(t), T(n), D(r)
                    },
                    disabled: (null == u ? void 0 : u.joinState) === ht.wN.OPEN
                }), O.createElement(Et.Z, null, Dt)), (null != I.productGroupAccess ? I.productGroupAccess : he) && O.createElement(B.Z, {
                    className: "my-2"
                }, O.createElement(vt.Z, {
                    label: "Remove Members After Expiration",
                    value: "productGroupAccessRemove",
                    defaultChecked: null != I.productGroupAccessRemove ? I.productGroupAccessRemove : ke,
                    onChangeCallback: function(e) {
                        var t, n = e.checked;
                        Ne(t = n), T(At(At({}, I), {}, {
                            productGroupAccessRemove: t
                        })), D(At(At({}, G), {}, {
                            groupAccessRemove: t
                        }))
                    }
                }), O.createElement(Et.Z, null, "If enabled, group members with this role are removed from the group entirely when their subscription ends. Note that this will remove any member whose subscription ends, whether they bought their way in or not."))), x.requiresPurchase && Wt && O.createElement(O.Fragment, null, O.createElement(B.Z, null, O.createElement(J.Z, null, O.createElement(W.Z, {
                    htmlFor: "productPriceTokens"
                }, "Credits", "forevers" === x.productDurationType ? "" : " per ".concat(1 === x.productDuration ? x.productDurationType.replace(/s$/, "") : "".concat(x.productDuration, " ").concat(x.productDurationType)))), O.createElement(J.Z, null, O.createElement(re.II, {
                    type: "number",
                    name: "productPriceTokens",
                    value: null != I.productPriceTokens ? I.productPriceTokens : x.productPriceTokens,
                    onChange: Jt,
                    required: !0,
                    step: "1",
                    min: St.nk,
                    max: St.A1
                }), !1 === _.productPriceTokens && O.createElement(W.Z, null, "Must be a whole number between ", O.createElement(re.b5, null), St.nk.toLocaleString(), " and ", O.createElement(re.b5, null), St.A1.toLocaleString(), ".")))), x.productId && O.createElement("p", null, O.createElement("small", null, g ? "You" : "The Group Owner", " can manage details and subscription behaviour of this role's", " ", O.createElement(j.rU, {
                    to: "/home/marketplace/storefront/products#".concat(x.productId)
                }, "associated product"), !Mt && null != xt && null !== (i = xt.parentListings) && void 0 !== i && i.length ? O.createElement(O.Fragment, null, ", and the details, price and availability of the product's", " ", O.createElement(j.rU, {
                    to: "/home/marketplace/storefront/listings#".concat(xt.parentListings[0])
                }, "associated listing"), " ") : " ", g ? "in your Store" : "in their Store", "."))), O.createElement(Ct.Z, {
                    tabId: "permissions"
                }, Je && O.createElement(re.qX, {
                    title: "Error",
                    type: "error"
                }, "There was an error loading permissions."), (null == x ? void 0 : x.defaultRole) && O.createElement(O.Fragment, null, O.createElement("p", null, x.description), O.createElement("hr", null)), Vt || Kt ? O.createElement("p", null, "You can't edit the ", Vt ? "Group Owner" : "default", " role.", " ", Vt ? "It must always have all" : "You lack the required", " permissions.") : O.createElement("div", null, Xe.filter((function(e) {
                    var t;
                    return h || (!x.requiresPurchase || !e.isManagementPermission) && e.allowedToAdd && (0 === (null == u ? void 0 : u.memberRank) || (null == u || null === (t = u.myMember) || void 0 === t ? void 0 : t.permissions.includes(e.name)))
                })).map((function(e) {
                    var t = e.name,
                        n = Xt[t];
                    return O.createElement("div", {
                        key: n.name,
                        className: "mb-2"
                    }, O.createElement(vt.Z, {
                        label: n.displayName,
                        value: n.name,
                        defaultChecked: Ce.includes(n.name),
                        disabled: x.requiresPurchase && !g,
                        onChangeCallback: function(e) {
                            var t = e.checked;
                            ! function(e, t) {
                                var n;
                                if (t) {
                                    var r = (0, we.QZ)({
                                        permissionName: e,
                                        permissionsMap: Xt
                                    });
                                    return Se([].concat((0, q.Z)(Ce), [e], (0, q.Z)(r)))
                                }
                                var l = Xt[e];
                                if (null !== (n = l.computedDependedOnBy) && void 0 !== n && n.size && Ce.some((function(e) {
                                        return l.computedDependedOnBy.has(e)
                                    }))) return Ue(e);
                                Se(Ce.filter((function(t) {
                                    return t !== e
                                })))
                            }(n.name, t)
                        }
                    }), (n.help || n.dependsOn) && O.createElement(Et.Z, null, n.help, n.help && n.dependsOn && " ", n.dependsOn && O.createElement(O.Fragment, null, "Requires", " ", (0, q.Z)(n.dependsOn).map((function(e) {
                        return "“".concat(Xt[e].displayName || e, "”")
                    })).join(", "), ".")))
                }))))), !Kt && (Ht ? O.createElement("p", null, O.createElement("small", null, "Only the Group Owner can edit paid roles.")) : O.createElement("div", {
                    className: "d-flex flex-row align-content-center mt-1\n                  ".concat(Wt || Vt || x.defaultRole ? "justify-content-end" : "justify-content-between")
                }, !Wt && !Vt && !x.defaultRole && O.createElement(re.zx, {
                    danger: !0,
                    onClick: function() {
                        $t(!1)
                    },
                    disabled: Gt
                }, O.createElement(M.Z, {
                    icon: z.$
                }), " Delete"), O.createElement("div", {
                    className: "d-flex flex-row"
                }, O.createElement(re.zx, {
                    neutral: !0,
                    onClick: function() {
                        Ft()
                    },
                    disabled: Gt || 0 === Object.keys(I).length
                }, O.createElement(M.Z, {
                    icon: w.NB
                }), " ", Wt ? "Clear" : "Cancel"), " ", O.createElement(re.zx, {
                    loading: Gt && !pt,
                    disabled: Gt || 0 === Object.keys(I).length || Object.values(_).includes(!1),
                    onClick: Bt
                }, O.createElement(M.Z, {
                    icon: gt.r6
                }), " Save"))))), O.createElement(re.sm, {
                    isOpen: !!Le,
                    confirmCallback: function() {
                        return Se(Ce.filter((function(e) {
                            return e !== Le && !_t.has(e)
                        }))), void Ue(null)
                    },
                    cancelCallback: function() {
                        return Ue(null)
                    },
                    headerText: "Role Permission Dependencies",
                    confirmText: "Turn Off",
                    cancelText: "Go Back"
                }, O.createElement("div", null, O.createElement("p", null, "Turning off “", null === (s = Xt[Le]) || void 0 === s ? void 0 : s.displayName, "” will also turn off permissions that currently require it:"), O.createElement("ul", null, (0, q.Z)(_t).filter((function(e) {
                    return Ce.includes(e)
                })).map((function(e) {
                    var t = Xt[e];
                    return O.createElement("li", {
                        key: e
                    }, "“", t.displayName, "”")
                }))), O.createElement("strong", null, "Are you sure you want to turn this off?"))), O.createElement(re.sm, {
                    isOpen: !!Ge,
                    confirmCallback: function() {
                        return Se(Ce.filter((function(e) {
                            return !Ge.includes(e)
                        }))), void De(null)
                    },
                    cancelCallback: function() {
                        return De(null)
                    },
                    headerText: "Invalid Permissions Detected",
                    confirmText: "Remove Permissions",
                    cancelText: "Keep Permissions"
                }, O.createElement("div", null, O.createElement("p", null, "This role contains permissions that no longer exist or are unavailable for your group."), O.createElement("p", null, "These permissions will be removed from the role: ", O.createElement("strong", null, null == Ge ? void 0 : Ge.join(", "))))))
            };
            var Pt = n(93682),
                Rt = n(3163),
                Lt = n(50249);
            const Ut = function(e) {
                var t, n, r = e.group,
                    l = e.roleLocalOffset,
                    a = e.isGroupOwner,
                    o = (0, ue.pc)(),
                    i = (0, S.TH)(),
                    c = (0, S.UO)(),
                    s = (0, ue.Tu)({
                        withEconomyAccount: !0
                    }).user,
                    u = O.useMemo((function() {
                        return "new" !== c.roleId && c.roleId
                    }), [c]),
                    m = (0, te.q7)().data,
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
                        }, "Management Roles")), a = O.createElement(O.Fragment, null, O.createElement(re.$1, {
                            icon: Oe.nm,
                            title: "Management Role"
                        }), " ")) : e.permissions.includes("group-instance-moderate") ? a = O.createElement(O.Fragment, null, O.createElement(re.$1, {
                            icon: Rt.U7,
                            title: "Instance Moderator Role"
                        }), " ") : e.requiresPurchase ? a = O.createElement(O.Fragment, null, O.createElement(re.$1, {
                            icon: Lt.default,
                            title: "Paid Role"
                        }), " ") : e.defaultRole && (l.push(O.createElement(qt, {
                            key: "default-header"
                        }, "Default Role")), a = O.createElement(O.Fragment, null, O.createElement(re.$1, {
                            icon: Pt.Z3,
                            title: "Default Role"
                        }), " ")), e.isManagementRole || e.defaultRole || null === (n = f[t - 1]) || void 0 === n || !n.isManagementRole || l.push(O.createElement(qt, {
                            key: "member-header"
                        }, "Member Roles"));
                        var i = (0 === (null == r ? void 0 : r.memberRank) || "new" === e.id || e.order > (null == r ? void 0 : r.memberRank)) && (v.includes("*") || 0 === e.permissions.filter((function(e) {
                            return !v.includes(e)
                        })).length);
                        return l.push(o || i ? O.createElement(Dt, null, O.createElement(Xt, {
                            key: e.id,
                            to: "/home/group/".concat(r.id, "/settings/roles/").concat(e.id),
                            className: e.id === u ? "selected" : ""
                        }, a, e.name + ("new" === e.id ? " (unsaved new role)" : ""))) : O.createElement(Gt, {
                            key: e.id
                        }, a, e.name + ("new" === e.id ? " (unsaved new role)" : ""))), l
                    }));
                return O.createElement(O.Fragment, null, E && O.createElement(T.Z, {
                    role: "alert",
                    color: "warning"
                }, "This group has reached maximum number of roles"), O.createElement(zt, null, b, O.createElement("li", null, O.createElement(Ft, {
                    to: "/home/group/".concat(r.id, "/settings/roles/new"),
                    end: !0,
                    disabled: E
                }, "Create Role")), a && p && O.createElement("li", null, g ? O.createElement(Ft, {
                    to: "/home/group/".concat(r.id, "/settings/roles/new/paid"),
                    end: !0,
                    disabled: E
                }, "Create Paid Role") : O.createElement(re.qX, {
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
                    n = (0, ue.pc)(),
                    r = (0, S.TH)(),
                    a = O.useState(0),
                    o = (0, l.Z)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = (0, C.v9)((function(e) {
                        var t;
                        return null === (t = e.group) || void 0 === t || null === (t = t.role) || void 0 === t ? void 0 : t.error
                    })),
                    u = (0, te.XC)(),
                    m = u.data,
                    d = (u.isLoading, u.isError, u.error, (null == t ? void 0 : t.ownerId) === (null == m ? void 0 : m.id));
                O.useEffect((function() {
                    c(0)
                }), [r]);
                return O.createElement(_t.Z, {
                    loading: !t.roles
                }, s && O.createElement(re.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: s.message
                }), O.createElement(re.oI, null, O.createElement("h4", {
                    className: "text-center"
                }, "Roles")), O.createElement(re.Ao, null, O.createElement(Bt, null, O.createElement($t, null, O.createElement(Ut, {
                    group: t,
                    roleLocalOffset: i,
                    isGroupOwner: d
                })), O.createElement(Mt, {
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
            var Bt = (0, a.Z)(re.X2, {
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
            var Ht = O.lazy((function() {
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
                var t, n, a, o, i, c, s, u, m, d, p, g, f, E, v, b = e.group,
                    h = (0, te.IB)().data,
                    w = null !== (t = null == b ? void 0 : b.transferTargetId) && void 0 !== t ? t : null,
                    x = (0, C.I0)(),
                    k = (0, S.s0)(),
                    j = O.useState({
                        name: b.name,
                        shortCode: b.shortCode,
                        description: b.description,
                        isSearchable: b.isSearchable,
                        joinState: b.joinState,
                        language: b.languages,
                        rules: b.rules
                    }),
                    T = (0, l.Z)(j, 2),
                    P = T[0],
                    ie = T[1],
                    ce = O.useState(!1),
                    se = (0, l.Z)(ce, 2),
                    ue = se[0],
                    de = se[1],
                    pe = O.useState(!1),
                    ge = (0, l.Z)(pe, 2),
                    fe = ge[0],
                    Ee = ge[1],
                    ve = O.useState(!1),
                    be = (0, l.Z)(ve, 2),
                    he = be[0],
                    we = be[1],
                    xe = O.useState(!1),
                    ye = (0, l.Z)(xe, 2),
                    Ze = ye[0],
                    ke = ye[1],
                    Ne = O.useState(null),
                    Oe = (0, l.Z)(Ne, 2),
                    Se = Oe[0],
                    je = Oe[1],
                    Ae = O.useState(!1),
                    Me = (0, l.Z)(Ae, 2),
                    Pe = Me[0],
                    Re = Me[1],
                    Le = O.useState(!1),
                    Ue = (0, l.Z)(Le, 2),
                    qe = Ue[0],
                    ze = Ue[1],
                    De = O.useState(null),
                    Fe = (0, l.Z)(De, 2),
                    Xe = Fe[0],
                    Je = Fe[1],
                    Be = O.useState(!1),
                    $e = (0, l.Z)(Be, 2),
                    Ve = $e[0],
                    We = $e[1],
                    He = O.useState(!1),
                    Ye = (0, l.Z)(He, 2),
                    Qe = Ye[0],
                    Ke = Ye[1],
                    et = O.useState(!1),
                    tt = (0, l.Z)(et, 2),
                    nt = tt[0],
                    rt = tt[1],
                    lt = O.useState(null),
                    at = (0, l.Z)(lt, 2),
                    ot = at[0],
                    it = at[1],
                    st = O.useState(null),
                    ut = (0, l.Z)(st, 2),
                    mt = (ut[0], ut[1]),
                    dt = O.useState(!1),
                    pt = (0, l.Z)(dt, 2),
                    gt = pt[0],
                    ft = pt[1],
                    Et = O.useState(null !== (n = b.languages) && void 0 !== n ? n : []),
                    vt = (0, l.Z)(Et, 2),
                    bt = vt[0],
                    ht = vt[1],
                    wt = O.useState(null !== (a = b.links) && void 0 !== a ? a : []),
                    yt = (0, l.Z)(wt, 2),
                    Zt = yt[0],
                    kt = yt[1],
                    Nt = O.useState(null),
                    It = (0, l.Z)(Nt, 2),
                    Ot = It[0],
                    Ct = It[1],
                    St = O.useState(null),
                    jt = (0, l.Z)(St, 2),
                    At = (jt[0], jt[1]),
                    Tt = (0, C.v9)((function(e) {
                        return e.currentUser.isMod
                    })),
                    Mt = (null == b ? void 0 : b.ownerId) === (null == h ? void 0 : h.id),
                    Pt = (0, me.mA)(),
                    Rt = (0, l.Z)(Pt, 2),
                    Lt = Rt[0],
                    Ut = Rt[1],
                    qt = Ut.isError,
                    zt = Ut.isLoading,
                    Gt = Ut.error,
                    Dt = (0, me.CL)(),
                    Ft = (0, l.Z)(Dt, 2),
                    Xt = Ft[0],
                    _t = Ft[1],
                    Bt = _t.isError,
                    $t = _t.isLoading,
                    Vt = _t.error,
                    Qt = _t.isSuccess,
                    en = (0, te.q7)().data,
                    tn = void 0 === en ? [] : en,
                    nn = (0, Q.y)().data,
                    rn = null !== (o = null == nn || null === (i = nn.constants) || void 0 === i || null === (i = i.LANGUAGE) || void 0 === i ? void 0 : i.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== o ? o : Y.O,
                    ln = [{
                        value: "none",
                        label: "none"
                    }].concat((0, q.Z)(Object.keys(rn).map((function(e) {
                        return {
                            value: e,
                            label: rn[e]
                        }
                    })))),
                    an = (null == Xe || null === (c = Xe.user) || void 0 === c ? void 0 : c.id) && (null == b ? void 0 : b.id) && null === w,
                    on = (0, me.ek)({
                        groupId: null == b ? void 0 : b.id,
                        transferTargetId: null == Xe || null === (s = Xe.user) || void 0 === s ? void 0 : s.id
                    }, {
                        skip: !an,
                        refetchOnMountOrArgChange: !0
                    }),
                    cn = on.data,
                    sn = on.isFetching,
                    un = on.isError,
                    mn = on.error,
                    dn = null !== w,
                    pn = (0, ne.GR)(w, {
                        skip: !dn,
                        refetchOnMountOrArgChange: !0
                    }),
                    gn = pn.data,
                    fn = pn.isFetching,
                    En = pn.isError,
                    vn = pn.error,
                    bn = (0, me.HT)(),
                    hn = (0, l.Z)(bn, 2),
                    wn = hn[0],
                    xn = hn[1],
                    yn = (xn.data, xn.isFetching),
                    Zn = xn.isError,
                    kn = xn.error,
                    Nn = (0, me.rq)(),
                    In = (0, l.Z)(Nn, 2),
                    On = In[0],
                    Cn = In[1],
                    Sn = (Cn.data, Cn.isFetching),
                    jn = Cn.isError,
                    An = Cn.error;
                O.useEffect((function() {
                    Qt ? k("/home/groups") : (We(!1), de(!1))
                }), [$t]), O.useEffect((function() {
                    if (he && Xe && sn && ke(!0), !sn && he && cn && !un) {
                        ke(!1);
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
                        }(cn.requirements);
                        je(e), we(!1), Ee(!1), Re(!0)
                    }
                    var t;
                    !sn && he && un && (ke(!1), we(!1), Je(null), x((0, ee.d)({
                        title: "Error Validating Group Transfer",
                        icon: y.eH,
                        message: "".concat(null == mn || null === (t = mn.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                        color: "error",
                        timeout: 3e3
                    })))
                }), [he, Xe, sn, un, cn]), O.useEffect((function() {
                    var e;
                    (fn || En || !gn || Je({
                        user: gn
                    }), !fn && En) && x((0, ee.d)({
                        title: "Error Fetching New Owner Data",
                        icon: y.eH,
                        message: "".concat(null == vn || null === (e = vn.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message),
                        color: "error",
                        timeout: 3e3
                    }))
                }), [fn, gn, En]);
                var Tn = function(e) {
                        var t = e.target.name,
                            n = "checkbox" === e.target.getAttribute("type") ? e.target.checked : e.target.value;
                        ie(Wt(Wt({}, P), {}, (0, U.Z)({}, t, "shortCode" === t ? n.toUpperCase() : n)))
                    },
                    Mn = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        ot && (P.bannerId = ot), Ot && (P.iconId = Ot), Lt({
                                            groupId: b.id,
                                            data: Wt({}, P)
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
                    Pn = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var t, n, r;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return ze(!0), e.prev = 1, e.next = 4, wn({
                                            groupId: b.id,
                                            transferTargetId: null == Xe || null === (t = Xe.user) || void 0 === t ? void 0 : t.id
                                        }).unwrap();
                                    case 4:
                                        Zn && (ze(!1), Re(!1), Je(null), x((0, ee.d)({
                                            title: "Group Transfer Error",
                                            icon: y.eH,
                                            message: "".concat(null == kn || null === (n = kn.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 6e3
                                        }))), Zn || x((0, ee.d)({
                                            title: "Group Transfer Initiated",
                                            icon: Z.f8,
                                            color: "success",
                                            timeout: 6e3
                                        })), ze(!1), Re(!1), e.next = 16;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(1), ze(!1), Re(!1), Je(null), x((0, ee.d)({
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
                    Rn = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var t, n, r;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return Ke(!0), e.prev = 1, e.next = 4, On({
                                            groupId: b.id,
                                            transferTargetId: null == Xe || null === (t = Xe.user) || void 0 === t ? void 0 : t.id
                                        }).unwrap();
                                    case 4:
                                        Ke(!1), jn && x((0, ee.d)({
                                            title: "Cancel Group Transfer Error",
                                            icon: y.eH,
                                            message: "".concat(null == An || null === (n = An.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 3e3
                                        })), jn || x((0, ee.d)({
                                            title: "Delete Group Transfer Success",
                                            icon: Z.f8,
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(1), Ke(!1), x((0, ee.d)({
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
                    Ln = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        We(!0), Xt({
                                            groupId: b.id,
                                            ownerId: b.ownerId
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
                    Un = function(e) {
                        kt(e), ie(Wt(Wt({}, P), {}, {
                            links: e
                        }))
                    },
                    qn = function(e, t) {
                        var n = (0, q.Z)(bt);
                        n[e] = t, n = n.filter((function(e) {
                            return "none" !== e
                        })), ht(n), ie(Wt(Wt({}, P), {}, {
                            languages: n
                        }))
                    },
                    zn = tn.includes("permission-user-gallery"),
                    Gn = tn.includes("permission-user-icons"),
                    Dn = zt || $t || yn || Sn;
                return O.createElement("div", null, O.createElement(J.Z, {
                    className: "mt-4"
                }, O.createElement(oe.Z, {
                    tabs: [{
                        name: "General",
                        to: "/home/group/".concat(b.id, "/settings"),
                        end: !0,
                        icon: _.Kb,
                        condition: Tt || R({
                            groupMember: null == b ? void 0 : b.myMember,
                            permission: "group-data-manage"
                        })
                    }, {
                        name: "My Membership",
                        to: Tt || R({
                            groupMember: null == b ? void 0 : b.myMember,
                            permission: "group-data-manage"
                        }) ? "me" : "/home/group/".concat(b.id, "/settings"),
                        icon: X.xK,
                        condition: null == b ? void 0 : b.myMember
                    }, {
                        name: "Roles",
                        to: "roles",
                        icon: F.aC,
                        condition: Tt || R({
                            groupMember: null == b ? void 0 : b.myMember,
                            permission: "group-roles-manage"
                        })
                    }, {
                        name: "Logs",
                        to: "logs",
                        icon: D.tx,
                        condition: Tt || R({
                            groupMember: null == b ? void 0 : b.myMember,
                            permission: "group-audit-view"
                        })
                    }, {
                        name: "Age Verification Beta",
                        to: "ageverificationbeta",
                        icon: G.Uk,
                        condition: b.tags.includes("admin_age_verification_enabled") && (Tt || (null == b ? void 0 : b.myMember.userId) === b.ownerId)
                    }]
                })), O.createElement(S.Z5, null, O.createElement(S.AW, {
                    path: "/",
                    element: Tt || R({
                        groupMember: null == b ? void 0 : b.myMember,
                        permission: "group-data-manage"
                    }) ? O.createElement(O.Fragment, null, O.createElement(B.Z, null, O.createElement(A.Z, {
                        isOpen: nt,
                        className: (0, I.iv)({
                            name: "1ul0gzp",
                            styles: "max-width:1500px!important"
                        })
                    }, O.createElement($.Z, null, O.createElement(Ht, {
                        isSelector: !0,
                        selectedCallback: function(e, t) {
                            it(e), mt(t), rt(!1)
                        },
                        selectedId: null != ot ? ot : "",
                        activeTab: "photos"
                    })), O.createElement(V.Z, null, O.createElement(re.zx, {
                        onClick: function() {
                            rt(!1), x((0, K.b9)())
                        }
                    }, "Cancel"))), O.createElement(A.Z, {
                        isOpen: gt,
                        className: (0, I.iv)({
                            name: "1ul0gzp",
                            styles: "max-width:1500px!important"
                        })
                    }, O.createElement($.Z, null, O.createElement(Ht, {
                        isSelector: !0,
                        selectedCallback: function(e, t) {
                            Ct(e), At(t), ft(!1)
                        },
                        selectedId: null != Ot ? Ot : "",
                        activeTab: "icons"
                    })), O.createElement(V.Z, null, O.createElement(re.zx, {
                        onClick: function() {
                            ft(!1), x((0, K.LC)())
                        }
                    }, "Cancel"))), O.createElement(J.Z, null, qt ? O.createElement(re.qX, {
                        type: "error",
                        title: "An error occurred",
                        message: (null == Gt || null === (u = Gt.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message) || "Something went wrong updating the group"
                    }) : null, O.createElement(re.oI, null, O.createElement("h4", {
                        className: "text-center"
                    }, "General")), O.createElement(re.Ao, null, O.createElement("div", null, O.createElement(B.Z, {
                        className: "mb-1"
                    }, O.createElement(J.Z, null, O.createElement(W.Z, {
                        for: "name"
                    }, "Name")), O.createElement(J.Z, null, O.createElement(re.II, {
                        type: "text",
                        name: "name",
                        className: "full-width",
                        value: P.name,
                        onChange: Tn
                    }))), O.createElement(B.Z, {
                        className: "mb-1"
                    }, O.createElement(J.Z, null, O.createElement(W.Z, {
                        for: "shortCode"
                    }, "Short Code (3-6 letters/numbers)")), O.createElement(J.Z, null, O.createElement(re.II, {
                        type: "text",
                        name: "shortCode",
                        className: "full-width",
                        value: P.shortCode,
                        maxLength: 6,
                        onChange: Tn
                    }))), O.createElement(B.Z, {
                        className: "mb-1"
                    }, O.createElement(J.Z, null, O.createElement(W.Z, {
                        for: "description"
                    }, "Description")), O.createElement(J.Z, null, O.createElement(Kt, {
                        name: "description",
                        className: "full-width",
                        value: null !== (m = P.description) && void 0 !== m ? m : "",
                        onChange: Tn
                    }))), O.createElement(B.Z, null, O.createElement(J.Z, null, O.createElement(W.Z, {
                        for: "description"
                    }, "Rules")), O.createElement(J.Z, null, O.createElement(Kt, {
                        name: "rules",
                        className: "full-width",
                        value: null !== (d = P.rules) && void 0 !== d ? d : "",
                        onChange: Tn
                    }))), O.createElement("div", null, !1, O.createElement(B.Z, {
                        className: "mt-2"
                    }, O.createElement(J.Z, null, O.createElement(W.Z, {
                        for: "isJoinable"
                    }, "Open to New Members")), O.createElement(J.Z, null, O.createElement(re.Lt, {
                        onChange: function(e) {
                            ie(Wt(Wt({}, P), {}, {
                                joinState: e
                            }))
                        },
                        value: null !== (p = P.joinState) && void 0 !== p ? p : "",
                        name: "joinState",
                        options: Yt
                    }))), O.createElement("br", null), O.createElement(B.Z, {
                        className: "mt-2"
                    }, O.createElement(J.Z, null, O.createElement(W.Z, {
                        for: "languages"
                    }, "Languages")), O.createElement(J.Z, null, bt.length >= 0 && O.createElement(re.Lt, {
                        onChange: function(e) {
                            qn(0, e)
                        },
                        value: null !== (g = null == bt ? void 0 : bt[0]) && void 0 !== g ? g : "none",
                        name: "languages",
                        options: ln,
                        className: "mb-1"
                    }), bt.length >= 1 && O.createElement(re.Lt, {
                        onChange: function(e) {
                            qn(1, e)
                        },
                        value: null !== (f = null == bt ? void 0 : bt[1]) && void 0 !== f ? f : "none",
                        name: "languages",
                        options: ln,
                        className: "mb-1"
                    }), bt.length >= 2 && O.createElement(re.Lt, {
                        onChange: function(e) {
                            qn(2, e)
                        },
                        value: null !== (E = null == bt ? void 0 : bt[2]) && void 0 !== E ? E : "none",
                        name: "languages",
                        options: ln,
                        className: "mb-1"
                    }))), O.createElement("br", null), O.createElement(B.Z, {
                        className: "mt-2"
                    }, O.createElement(J.Z, null, O.createElement(W.Z, {
                        for: "links"
                    }, "Group Links")), O.createElement(J.Z, null, O.createElement(_e, {
                        groupBioLinks: Zt,
                        callback: Un,
                        index: 0
                    }), O.createElement(_e, {
                        groupBioLinks: Zt,
                        callback: Un,
                        index: 1
                    }), O.createElement(_e, {
                        groupBioLinks: Zt,
                        callback: Un,
                        index: 2
                    }))), O.createElement("br", null), O.createElement(B.Z, null, O.createElement(J.Z, null), O.createElement(J.Z, null, ot && O.createElement("div", null, O.createElement("span", null, "Replacing banner with: ", ot), O.createElement("br", null), O.createElement(re.zx, {
                        onClick: function() {
                            it(null), mt(null)
                        }
                    }, "Clear banner selection")), Ot && O.createElement("div", null, O.createElement("span", null, "Replacing icon with: ", Ot), O.createElement("br", null), O.createElement(re.zx, {
                        onClick: function() {
                            At(null), Ct(null)
                        }
                    }, "Clear icon selection")))), O.createElement("br", null), O.createElement(B.Z, null, O.createElement(J.Z, null), O.createElement(J.Z, null, zn && O.createElement(re.zx, {
                        color: "primary",
                        onClick: function() {
                            rt(!0)
                        }
                    }, "Update Group Banner"), " ", Gn && O.createElement(re.zx, {
                        color: "primary",
                        onClick: function() {
                            ft(!0)
                        }
                    }, "Update Group Icon")))), O.createElement(B.Z, {
                        className: "mt-4"
                    }, O.createElement(re.zx, {
                        neutral: !0,
                        onClick: Mn,
                        disabled: Dn,
                        loading: Dn
                    }, "Save")))))), Mt && !w && O.createElement(O.Fragment, null, O.createElement(Ie, {
                        isOpen: fe,
                        group: b,
                        cancelCallback: function() {
                            return Ee(!1)
                        },
                        memberSelectCallback: function(e) {
                            ! function(e) {
                                Je(e), we(!0)
                            }(e)
                        },
                        isGroupMemberOnly: !0,
                        isSelecting: Ze
                    }), (null == Xe ? void 0 : Xe.user) && Pe && O.createElement(Ge, {
                        group: b,
                        validity: Se,
                        prospectiveNewOwner: Xe,
                        onTransfer: function() {
                            return Pn()
                        },
                        onCancel: function() {
                            return Re(!1)
                        },
                        isOpen: Pe,
                        isTransferring: qe
                    }), O.createElement(Te, {
                        group: b,
                        onButtonClick: function() {
                            return Ee(!0)
                        },
                        isLoading: Dn || !1
                    })), Mt && w && O.createElement(Ce, {
                        group: b,
                        onClickCallback: function() {
                            return Rn()
                        },
                        isDeleting: Qe || !1
                    }), Mt && O.createElement(O.Fragment, null, Bt ? O.createElement(re.qX, {
                        type: "error",
                        title: "Could not delete group",
                        message: (null == Vt || null === (v = Vt.data) || void 0 === v || null === (v = v.error) || void 0 === v ? void 0 : v.message) || "Something went wrong deleting the group"
                    }) : null, O.createElement(re.oI, {
                        className: "mt-2"
                    }, O.createElement("h4", {
                        className: "text-center"
                    }, "Delete Group")), O.createElement(re.Ao, null, O.createElement("p", null, "You can delete this group as long as it has no other members. This cannot be undone."), O.createElement(A.Z, {
                        isOpen: ue
                    }, O.createElement(H.Z, {
                        close: O.createElement(le.Z, {
                            onClick: function() {
                                de(!1)
                            }
                        })
                    }, O.createElement("h4", null, "Delete Group?")), O.createElement($.Z, {
                        className: (0, I.iv)({
                            name: "1bpq7li",
                            styles: "padding:30px;padding-top:0"
                        })
                    }, Ve ? O.createElement("div", {
                        className: "full-width text-center"
                    }, O.createElement(ae.Z, null)) : O.createElement("div", {
                        className: (0, I.iv)({
                            name: "pc0kie",
                            styles: ">*{margin-top:15px;}"
                        })
                    }, O.createElement(B.Z, null, O.createElement("span", {
                        className: "full-width text-center"
                    }, "Hey! This can't be undone! Only do this if you ", O.createElement("strong", null, "KNOW"), " what you're doing!")), O.createElement(B.Z, null, O.createElement(re.zx, {
                        onClick: Ln,
                        danger: !0,
                        className: "full-width"
                    }, "DELETE IT!")), O.createElement(B.Z, null, O.createElement(re.zx, {
                        className: "full-width",
                        onClick: function() {
                            de(!1)
                        }
                    }, "Get me outta here!"))))), O.createElement(J.Z, null, O.createElement(re.zx, {
                        danger: !0,
                        onClick: function() {
                            de(!0)
                        },
                        disabled: Dn,
                        loading: Dn
                    }, O.createElement(M.Z, {
                        icon: z.$
                    }), " Delete Group"))))) : O.createElement(xt, {
                        groupId: null == b ? void 0 : b.id
                    })
                }), O.createElement(S.AW, {
                    path: "/me",
                    element: null != b && b.myMember ? O.createElement(xt, {
                        groupId: null == b ? void 0 : b.id
                    }) : O.createElement(L.Z, {
                        to: ".."
                    })
                }), O.createElement(S.AW, {
                    path: "/roles/:roleId?/:newRoleType?",
                    element: Tt || R({
                        groupMember: null == b ? void 0 : b.myMember,
                        permission: "group-roles-manage"
                    }) ? O.createElement(Jt, {
                        group: b
                    }) : O.createElement(L.Z, {
                        to: ".."
                    })
                }), O.createElement(S.AW, {
                    path: "/logs",
                    element: Tt || R({
                        groupMember: null == b ? void 0 : b.myMember,
                        permission: "group-audit-view"
                    }) ? O.createElement(ct, {
                        group: b
                    }) : O.createElement(L.Z, {
                        to: ".."
                    })
                }), O.createElement(S.AW, {
                    path: "/ageverificationbeta",
                    element: b.tags.includes("admin_age_verification_enabled") && (Tt || (null == b ? void 0 : b.myMember.userId) === b.ownerId) ? O.createElement(B.Z, null, O.createElement(J.Z, null, O.createElement(re.oI, null, O.createElement("h4", {
                        className: "text-center"
                    }, "Age Verification Beta")), O.createElement(re.Ao, null, O.createElement(B.Z, {
                        className: "mb-1"
                    }, O.createElement(J.Z, null, O.createElement(W.Z, null, "Beta Slots Remaining")), O.createElement(J.Z, null, b.ageVerificationBetaSlots)), O.createElement(B.Z, {
                        className: "mb-1"
                    }, O.createElement(J.Z, null, O.createElement(W.Z, null, "Verification Link")), O.createElement(J.Z, null, O.createElement("a", {
                        href: "https://vrchat.com/home/group/".concat(b.id, "/ageverification/").concat(b.ageVerificationBetaCode)
                    }, "https://vrchat.com/home/group/", b.id, "/ageverification/", b.ageVerificationBetaCode)))))) : O.createElement(L.Z, {
                        to: ".."
                    })
                })))
            };
            var Kt = (0, a.Z)(re.gx, {
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
                }), O.createElement(rn, null, n && O.createElement("span", null, O.createElement(M.Z, {
                    icon: Oe.nm,
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
                    x = (0, l.Z)(w, 2),
                    y = x[0],
                    Z = x[1],
                    k = O.useState({}),
                    N = (0, l.Z)(k, 2),
                    I = N[0],
                    C = N[1],
                    S = (0, me.r5)({
                        groupId: s.groupId
                    }),
                    j = S.data,
                    A = S.isLoading,
                    T = S.isError,
                    P = S.error,
                    L = (0, me.xm)({
                        groupId: s.groupId,
                        userId: s.userId
                    }),
                    q = L.data,
                    z = L.isLoading,
                    G = L.isError,
                    D = L.error,
                    F = (0, me.uX)(),
                    X = (0, l.Z)(F, 2),
                    _ = X[0],
                    J = (X[1].isLoading, (0, me.dl)()),
                    B = (0, l.Z)(J, 2),
                    $ = B[0],
                    V = (B[1].isLoading, (0, me.LA)()),
                    H = (0, l.Z)(V, 2),
                    Y = H[0],
                    Q = (H[1].isLoading, (0, me.FW)()),
                    K = (0, l.Z)(Q, 2),
                    ee = K[0],
                    te = (K[1].isLoading, (0, me.l5)()),
                    ne = (0, l.Z)(te, 2),
                    le = ne[0],
                    ae = (ne[1].isLoading, (0, ue.pc)()),
                    oe = A || z,
                    ie = G || T;
                if (O.useEffect((function() {
                        m()
                    }), []), ie) return O.createElement(O.Fragment, null, O.createElement(re.oI, null, O.createElement("h4", null, "Managing Member")), O.createElement(re.Ao, null, O.createElement("div", null, O.createElement("div", {
                    className: "text-center mb-4"
                }, O.createElement(M.Z, {
                    icon: an.faTriangleExclamation,
                    size: "xl"
                })), O.createElement("h4", {
                    className: "text-center mb-4"
                }, "We have encountered a problem."), P && O.createElement("p", {
                    className: "text-center text-danger"
                }, null == P || null === (o = P.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message), D && O.createElement("p", {
                    className: "text-center text-danger"
                }, null == D || null === (c = D.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message))));
                if (oe) return null;
                var ce = function() {
                        h(!b)
                    },
                    se = function() {
                        Z(!y)
                    };
                if (null == q) return O.createElement("div", null);
                var de = R({
                        groupMember: null == j ? void 0 : j.myMember,
                        permission: "group-members-manage"
                    }),
                    pe = R({
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
                            n = (null == t ? void 0 : t.order) > (null == j ? void 0 : j.memberRank) && ((null == t ? void 0 : t.isSelfAssignable) && 0 !== (null == t ? void 0 : t.order) || pe);
                        return t ? O.createElement(O.Fragment, null, O.createElement(pn, {
                            key: t.id,
                            roleid: t.id,
                            canInteract: n,
                            onClick: function() {
                                n && function(e) {
                                    j.roles.find((function(t) {
                                        return t.id === e
                                    })) && le({
                                        groupId: q.groupId,
                                        userId: q.userId,
                                        roleId: e
                                    })
                                }(t.id)
                            }
                        }, t.name)) : null
                    })),
                    he = j.roles.filter((function(e) {
                        return !ve.includes(e.id) && (0 !== (null == e ? void 0 : e.order) && ((null == e || !e.requiresPurchase) && ((null == e || !e.defaultRole) && (!(!pe && !ae) || !(!fe || !e.isSelfAssignable)))))
                    })).map((function(e) {
                        var t = (null == e ? void 0 : e.order) > (null == j ? void 0 : j.memberRank) && ((null == e ? void 0 : e.isSelfAssignable) && 0 !== (null == e ? void 0 : e.order) || pe);
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
                }, O.createElement(re.oI, null, O.createElement("h4", null, "Managing ", null == s || null === (n = s.user) || void 0 === n ? void 0 : n.displayName)), O.createElement(re.Ao, null, y && O.createElement("div", null, O.createElement("h4", {
                    className: "text-center mb-4"
                }, "Are you sure you want to kick ", null == q || null === (r = q.user) || void 0 === r ? void 0 : r.displayName, "?!?!"), O.createElement(re.X2, null, O.createElement(re.zx, {
                    warning: !0,
                    onClick: function() {
                        se(), Y({
                            groupId: q.groupId,
                            userId: q.userId,
                            fromPage: f
                        }), p()
                    },
                    expand: !0
                }, O.createElement(re.$1, {
                    icon: ln.uM
                }), " Get 'em outta here!"), " ", O.createElement(re.zx, {
                    neutral: !0,
                    onClick: se,
                    expand: !0
                }, "Cancel"))), b && O.createElement("div", null, O.createElement("h4", {
                    className: "text-center mb-4"
                }, "Are you sure you want to ban ", null == q || null === (a = q.user) || void 0 === a ? void 0 : a.displayName, "?!?!"), O.createElement(re.X2, null, O.createElement(re.zx, {
                    danger: !0,
                    onClick: function() {
                        ce(), $({
                            groupId: q.groupId,
                            userId: q.userId,
                            fromPage: f
                        }), p()
                    },
                    expand: !0
                }, O.createElement(re.$1, {
                    icon: i.JH
                }), " And stay out!"), " ", O.createElement(re.zx, {
                    neutral: !0,
                    onClick: ce,
                    expand: !0
                }, "Cancel"))), !(y || b) && O.createElement(O.Fragment, null, (pe || ae || fe) && O.createElement(un, null, O.createElement(mn, null, O.createElement("h6", null, "Available Roles"), O.createElement(dn, null, he)), O.createElement(gn, null, O.createElement("h6", null, "Assigned Roles"), O.createElement(fn, null, be))), O.createElement(re.X2, null, (de || ae) && O.createElement("div", {
                    className: "setting mb-2 flex-1"
                }, O.createElement(W.Z, null, "Notes"), O.createElement(re.gx, {
                    name: "managerNotes",
                    className: "notes-input full-width",
                    value: Ee,
                    onChange: function(e) {
                        var t = e.target.name,
                            n = "checkbox" === e.target.getAttribute("type") ? e.target.checked : e.target.value;
                        C(cn(cn({}, I), {}, (0, U.Z)({}, t, n)))
                    }
                }))), O.createElement(re.X2, null, O.createElement(re.zx, {
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
                }, O.createElement(re.$1, {
                    icon: gt.r6
                }), " Save"), " ", O.createElement(re.zx, {
                    expand: !0,
                    neutral: !0,
                    onClick: p
                }, "Close"), ((null == j ? void 0 : j.memberRank) < g && de || ae) && O.createElement(O.Fragment, null, " ", O.createElement(re.zx, {
                    expand: !0,
                    warning: !0,
                    onClick: se
                }, O.createElement(M.Z, {
                    icon: ln.uM
                }), "  Kick"), " ", (ge || ae) && O.createElement(re.zx, {
                    expand: !0,
                    danger: !0,
                    onClick: ce
                }, O.createElement(M.Z, {
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
                        d = (0, me.Rx)(),
                        p = (0, l.Z)(d, 2),
                        g = p[0],
                        f = p[1].isLoading,
                        E = (0, me.dl)(),
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
                                            o((0, ee.d)({
                                                icon: Z.f8,
                                                message: "".concat(n.displayName, " is banned!"),
                                                color: "success",
                                                timeout: 3e3
                                            })), m(!1), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), o((0, ee.d)({
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
                                            o((0, ee.d)({
                                                icon: Z.f8,
                                                message: "".concat(n.displayName, " is un-banned!"),
                                                color: "success",
                                                timeout: 3e3
                                            })), m(!0), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), o((0, ee.d)({
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
                    return O.createElement(se.Wm, {
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
                    }, O.createElement(se.D2, {
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
                    }, O.createElement(se.Hz, {
                        tag: "h5"
                    }, n.displayName)), O.createElement(vn.Z, {
                        className: "mb-2 text-muted text-truncate tw-capitalize",
                        tag: "h6"
                    }, n.status)), O.createElement(J.Z, null, O.createElement("div", {
                        className: "tw-flex tw-col tw-justify-end"
                    }, O.createElement("div", {
                        className: "tw-justify-end"
                    }, O.createElement(re.zx, {
                        onClick: u ? w : x,
                        disabled: h || f,
                        loading: h || f,
                        className: "tw-w-fit tw-px-4"
                    }, O.createElement(re.$1, {
                        width: 20,
                        icon: i.JH
                    }), u ? " Ban" : " Unban")))))))))))
                };
            bn.propTypes = {
                user: pe().object,
                groupId: pe().string.isRequired
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
                    return O.createElement(se.Wm, {
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
                    }, O.createElement(se.D2, {
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
                    }, O.createElement(se.Hz, {
                        tag: "h5"
                    }, a.displayName)), O.createElement(vn.Z, {
                        className: "mb-2 text-muted text-truncate",
                        tag: "h6"
                    }, "Joined ", fe()(n.joinedAt).fromNow()), O.createElement(xn.Z, {
                        className: "text-truncate text-secondary"
                    }, (0, we.wz)({
                        member: n,
                        groupRoles: r
                    }).join(", "))), O.createElement(J.Z, null, O.createElement(se.$, null, O.createElement(re.zx, {
                        onClick: function() {
                            return l(n, (0, we.H)({
                                member: n,
                                groupRoles: r
                            }), null)
                        }
                    }, O.createElement(re.$1, {
                        width: 20,
                        icon: wn.Iw
                    })))))))))))
                };
            yn.propTypes = {
                member: pe().object.isRequired,
                groupRoles: pe().array.isRequired,
                memberEditCallback: pe().func.isRequired
            };
            const Zn = yn;
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
                    w = (0, ue.Nr)(g);
                (0, O.useEffect)((function() {
                    setTimeout((function() {
                        o && null != m && m.current && m.current.focus()
                    }), 300)
                }), [o, m]), (0, O.useEffect)((function() {
                    h(1)
                }), [g]), (0, O.useEffect)((function() {
                    f("")
                }), [o]);
                var x = (0, me.Vc)({
                        groupId: a
                    }, {
                        skip: !s
                    }),
                    y = x.data,
                    Z = x.isSuccess,
                    k = x.isError,
                    N = x.error,
                    I = (0, me.Pi)({
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
                    T = I.isSuccess,
                    M = (0, ne.hi)({
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
                return O.createElement(se.Xv, {
                    role: "dialog",
                    isOpen: o,
                    toggle: i,
                    keyboard: !0,
                    autoFocus: !1
                }, O.createElement(se.eb, {
                    tag: "h4",
                    close: O.createElement(le.Z, {
                        onClick: i
                    }),
                    toggle: i
                }, s ? "Group Members Search" : "Users Search"), O.createElement(se.vc, null, O.createElement(se.T_, null, O.createElement(re.II, {
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
                }, "Something went wrong with the search, please try again later!", O.createElement("br", null), j && O.createElement("code", null, null == S || null === (t = S.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), k && O.createElement("code", null, null == N || null === (n = N.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), L && O.createElement("code", null, null == R || null === (r = R.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message)), A && O.createElement(se.Um, null, O.createElement("div", {
                    className: "text-center m-5 text-secondary h-25"
                }, O.createElement(ae.Z, null))), !T && !A && !j && s && O.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "Search for members in your group."), T && !A && Z && s && O.createElement(se.Um, null, C.results.map((function(e) {
                    return O.createElement(Zn, {
                        key: e.id,
                        member: e,
                        groupRoles: y,
                        memberEditCallback: u
                    })
                })), 0 === C.results.length && O.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "We couldn't find anything with that search.")), !q && !U && !L && !s && O.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "Search for users on VRChat."), q && O.createElement(se.Um, null, P.results.map((function(e) {
                    return O.createElement(hn, {
                        key: e.id,
                        user: e,
                        groupId: a
                    })
                })), 0 === P.results.length && O.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "We couldn't find anything with that search.")), (T || q) && O.createElement(se.Gz, null, O.createElement(se.IT, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return h(b - 1)
                    },
                    disabled: 1 === b || A || U
                }, O.createElement(re.$1, {
                    icon: ce.A3
                })), O.createElement("span", null, b), O.createElement(se.UV, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return h(b + 1)
                    },
                    disabled: (null == C ? void 0 : C.isLastPage) || (null == P ? void 0 : P.isLastPage) || A || U
                }, O.createElement(re.$1, {
                    icon: ie._t
                }))))))
            };
            kn.propTypes = {
                groupId: pe().string,
                isOpen: pe().bool.isRequired,
                cancelCallback: pe().func.isRequired,
                memberEditCallback: pe().func
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
                    x = (0, l.Z)(w, 2),
                    y = x[0],
                    Z = x[1],
                    k = O.useState(""),
                    N = (0, l.Z)(k, 2),
                    C = N[0],
                    S = (N[1], O.useState(null)),
                    j = (0, l.Z)(S, 2),
                    T = j[0],
                    M = j[1],
                    P = O.useState(null),
                    L = (0, l.Z)(P, 2),
                    U = L[0],
                    z = L[1],
                    G = (0, te.XC)().data,
                    D = (0, ue.pc)(),
                    F = (0, O.useState)([
                        [],
                        []
                    ]),
                    X = (0, l.Z)(F, 2),
                    _ = X[0],
                    J = X[1],
                    B = null == n ? void 0 : n.myMember,
                    $ = (0, O.useState)(0),
                    V = (0, l.Z)($, 2),
                    W = V[0],
                    H = V[1],
                    Y = (0, O.useState)(25),
                    Q = (0, l.Z)(Y, 1)[0],
                    K = (0, me.Pv)(),
                    ee = (0, l.Z)(K, 2),
                    ne = ee[0],
                    le = ee[1],
                    ae = le.data,
                    oe = le.error,
                    ie = le.isLoading,
                    ce = (0, me.Vc)({
                        groupId: null == n ? void 0 : n.id
                    }),
                    se = ce.data,
                    de = ce.isFetching,
                    pe = (null == ae || null === (t = ae.members) || void 0 === t ? void 0 : t.length) < Q;
                O.useEffect((function() {
                    ge(Q, 0)
                }), []), O.useEffect((function() {
                    var e = (0, q.Z)(_);
                    if (ae) {
                        var t;
                        if (ae.page <= 0 && !C && null === T && null === U && null != n && n.myMember) e[0] = [On(On({}, B), {}, {
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
                    H(0), J([
                        [],
                        []
                    ]), ge(Q, 0)
                }), [T, U]);
                var ge = function(e, t) {
                        ne({
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
                if (de) return O.createElement(re.UU, {
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
                return O.createElement(O.Fragment, null, O.createElement(re.oI, null, O.createElement("h4", {
                    className: "text-center font-weight-bolder"
                }, "Members ", !Ee && !be && "(Friends only)")), O.createElement(re.Ao, null, O.createElement("div", {
                    className: (0, I.iv)({
                        name: "8osrbx",
                        styles: "background-color:var(--dark);padding:0 20px 20px 20px"
                    })
                }, Ee && O.createElement(re.JX, null, O.createElement("h6", null, "Filters:"), O.createElement(re.X2, {
                    className: "flex-wrap"
                }, O.createElement(jn, {
                    label: "Filter role",
                    onChange: z,
                    options: xe,
                    value: U,
                    className: "mb-2 mx-2"
                }), O.createElement(jn, {
                    label: "Join order",
                    onChange: M,
                    options: Cn,
                    value: T,
                    className: "mb-2 mx-2"
                }))), O.createElement(A.Z, {
                    isOpen: o,
                    toggle: function() {
                        i(!1)
                    }
                }, O.createElement(sn, {
                    groupMember: g,
                    memberRank: null != y ? y : 0,
                    closeCallback: function() {
                        i(!1)
                    },
                    memberListPage: b
                })), Ee && O.createElement("div", {
                    className: "p-2"
                }, O.createElement(re.zx, {
                    onClick: function() {
                        m(!0)
                    }
                }, O.createElement(re.$1, {
                    color: "white",
                    icon: Se.faMagnifyingGlass
                }), "  Search Group Members")), O.createElement(Nn, {
                    isOpen: u,
                    groupId: n.id,
                    cancelCallback: function() {
                        return m(!1)
                    },
                    memberEditCallback: fe,
                    isGroupMemberOnly: !0
                }), ie ? O.createElement(re.UU, {
                    height: "200px"
                }) : O.createElement(An, null, we), O.createElement("div", {
                    className: "p-2",
                    style: {
                        margin: "20px auto 0",
                        textAlign: "center"
                    }
                }, O.createElement(re.zx, {
                    onClick: function() {
                        ge(Q, W)
                    },
                    disabled: ie || oe || pe,
                    loading: ie
                }, oe || pe ? "No more members..." : "List More Members")))))
            };
            var jn = (0, a.Z)(re.Lt, {
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
                    a = (0, Q.y)().data,
                    o = null !== (t = null == a || null === (n = a.constants) || void 0 === n || null === (n = n.LANGUAGE) || void 0 === n ? void 0 : n.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== t ? t : Y.O,
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
                zn = (0, a.Z)(se.JX, {
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
                return O.createElement($n, null, O.createElement(Vn, null, O.createElement(Fn, null, "Links")), O.createElement(Wn, null, t.length > 0 ? t.map((function(e) {
                    return O.createElement(Bn, {
                        key: e
                    }, O.createElement(Xe.QZ, {
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
                Vn = (0, a.Z)(se.JX, {
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
            var er = O.lazy((function() {
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
                    d = O.useState(!1),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = O.useState(null),
                    v = (0, l.Z)(E, 2),
                    b = v[0],
                    h = (v[1], O.useState(null)),
                    w = (0, l.Z)(h, 2),
                    x = w[0],
                    y = w[1],
                    Z = O.useState(null),
                    k = (0, l.Z)(Z, 2),
                    N = k[0],
                    S = k[1],
                    j = O.useState(!1),
                    T = (0, l.Z)(j, 2),
                    M = T[0],
                    P = T[1],
                    L = O.useState({
                        name: i.name,
                        description: i.description,
                        membersOnly: i.membersOnly
                    }),
                    q = (0, l.Z)(L, 2),
                    z = q[0],
                    G = q[1],
                    D = O.useState(!1),
                    F = (0, l.Z)(D, 2),
                    X = F[0],
                    J = F[1],
                    B = O.useState(15),
                    H = (0, l.Z)(B, 1)[0],
                    Y = O.useState(1),
                    Q = (0, l.Z)(Y, 2),
                    ee = Q[0],
                    te = Q[1],
                    ne = O.useState(!0),
                    le = (0, l.Z)(ne, 2),
                    ae = le[0],
                    oe = le[1],
                    se = (0, me.d3)({
                        groupId: a.id,
                        galleryId: i.id,
                        n: H,
                        page: ee
                    }),
                    ue = se.data,
                    de = se.isLoading,
                    pe = se.isSuccess,
                    ge = (0, me.zv)(),
                    fe = (0, l.Z)(ge, 2),
                    Ee = fe[0],
                    ve = (fe[1].isLoading, (0, me.E8)()),
                    be = (0, l.Z)(ve, 2),
                    he = be[0],
                    we = (be[1].isLoading, (0, me.pI)()),
                    xe = (0, l.Z)(we, 2),
                    ye = xe[0],
                    Ze = xe[1],
                    ke = (Ze.isLoading, Ze.isSuccess),
                    Ne = (0, me.jP)(),
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
                    pe && oe((null == ue ? void 0 : ue.totalCount) >= 100)
                }), [pe]);
                var Ce = function(e) {
                    var t = "checkbox" === e.target.getAttribute("type") ? !e.target.checked : e.target.value;
                    G(Kn(Kn({}, z), {}, (0, U.Z)({}, e.target.name, t)))
                };
                if (de) return O.createElement(re.UU, {
                    className: "mt-3",
                    width: "100%",
                    height: "300px"
                });
                var Se = R({
                        groupMember: null == a ? void 0 : a.myMember,
                        permission: "group-galleries-manage"
                    }),
                    je = ue.totalCount,
                    Ae = (ee - 1) * H,
                    Te = O.createElement(lr, null, O.createElement(ar, {
                        className: "d-flex flex-row align-items-center justify-content-center",
                        onClick: function() {
                            return te(ee - 1)
                        },
                        disabled: 0 === Ae
                    }, O.createElement(re.$1, {
                        icon: ce.A3
                    })), O.createElement("span", null, ee, " / ", Math.ceil(je / H), " ", O.createElement("small", null, je > 0 && "(".concat(je, "/").concat(100, ")"))), O.createElement(or, {
                        className: "d-flex flex-row align-items-center justify-content-center",
                        onClick: function() {
                            return te(ee + 1)
                        },
                        disabled: Ae + H >= je
                    }, O.createElement(re.$1, {
                        icon: ie._t
                    })));
                return O.createElement("div", {
                    className: "my-2",
                    id: i.id
                }, O.createElement(Yn.Z, {
                    imageUrl: x,
                    closeCallback: function() {
                        y(null)
                    },
                    nextCallback: null !== (t = ue.results) && void 0 !== t && t[N + 1] ? function() {
                        y(ue.results[N + 1].imageUrl), S(N + 1)
                    } : null,
                    prevCallback: null !== (n = ue.results) && void 0 !== n && n[N - 1] ? function() {
                        y(ue.results[N - 1].imageUrl), S(N - 1)
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
                })), O.createElement(V.Z, null, O.createElement(re.zx, {
                    onClick: function() {
                        f(!1), u((0, K.b9)())
                    }
                }, "Cancel"))), O.createElement(re.oI, null, O.createElement("h4", null, i.name), O.createElement("span", null, i.description)), O.createElement(re.Ao, null, 0 !== je && Te, M ? O.createElement(re.JX, {
                    className: "w-100"
                }, O.createElement(W.Z, null, "Gallery name", O.createElement(re.II, {
                    value: z.name,
                    name: "name",
                    onChange: Ce,
                    disabled: m,
                    maxLength: 64
                })), " ", O.createElement(W.Z, null, "Gallery description", O.createElement(re.II, {
                    value: z.description,
                    name: "description",
                    onChange: Ce,
                    disabled: m,
                    maxLength: 512
                })), " ", O.createElement(re.X2, null, O.createElement(W.Z, null, "Is this gallery public?", " ", O.createElement(Hn.Z, {
                    type: "checkbox",
                    name: "membersOnly",
                    checked: !z.membersOnly,
                    onChange: Ce,
                    disabled: m
                }))), O.createElement(re.X2, null, O.createElement(re.zx, {
                    expand: !0,
                    onClick: function() {
                        ye({
                            groupId: a.id,
                            galleryId: i.id,
                            data: Kn({}, z)
                        })
                    },
                    disabled: m
                }, "Update"), " ", O.createElement(re.zx, {
                    expand: !0,
                    neutral: !0,
                    disabled: m,
                    onClick: function() {
                        P(!1)
                    }
                }, "Cancel"), " ", O.createElement(re.zx, {
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
                }, "Delete"))) : O.createElement(O.Fragment, null, O.createElement(nr, null, (null === (r = ue.results) || void 0 === r ? void 0 : r.length) > 0 ? ue.results.map((function(e, t) {
                    return O.createElement(en.Z, {
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
                })) : O.createElement("p", {
                    className: "m-0"
                }, "There are no pictures here... yet!")), Se && O.createElement(rr, null, O.createElement(re.zx, {
                    className: "m-2",
                    disabled: ae,
                    onClick: function() {
                        f(!0)
                    }
                }, ae ? "Gallery is full" : O.createElement(O.Fragment, null, O.createElement(re.$1, {
                    icon: o.r8
                }), " Post an Image")), O.createElement(re.zx, {
                    neutral: !0,
                    onClick: function() {
                        P(!0)
                    }
                }, O.createElement(re.$1, {
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
                ar = (0, a.Z)(re.zx, {
                    target: "e5pi12i1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                or = (0, a.Z)(re.zx, {
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
                    g = (0, me.Eg)(),
                    f = (0, l.Z)(g, 2),
                    E = f[0],
                    v = f[1],
                    b = v.data,
                    h = v.isLoading,
                    w = v.isSuccess,
                    x = v.isError,
                    y = v.error;
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
                }) && (I = d ? O.createElement(O.Fragment, null, O.createElement(re.oI, null, O.createElement("h4", null, "Create Gallery")), O.createElement(re.Ao, null, O.createElement(W.Z, null, "Gallery name", O.createElement(re.II, {
                    value: c.name,
                    name: "name",
                    onChange: Z,
                    disabled: h,
                    maxLength: 64
                })), " ", O.createElement(W.Z, null, "Gallery description", O.createElement(re.II, {
                    value: c.description,
                    name: "description",
                    onChange: Z,
                    disabled: h,
                    maxLength: 512
                })), " ", O.createElement(re.X2, null, O.createElement(W.Z, null, "Is this gallery public?", " ", O.createElement(Hn.Z, {
                    type: "checkbox",
                    name: "membersOnly",
                    checked: !c.membersOnly,
                    onChange: Z,
                    disabled: h
                }))), O.createElement(re.X2, null, O.createElement(re.zx, {
                    expand: !0,
                    onClick: k,
                    disabled: h,
                    loading: h
                }, "Create"), " ", O.createElement(re.zx, {
                    expand: !0,
                    neutral: !0,
                    onClick: function() {
                        p(!1)
                    },
                    disabled: h
                }, "Cancel")))) : O.createElement(re.zx, {
                    onClick: function() {
                        p(!0)
                    },
                    disabled: h,
                    loading: h
                }, O.createElement(re.$1, {
                    icon: o.r8
                }), " Create Gallery")), O.createElement("div", null, x && O.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == y || null === (t = y.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred while creating the gallery."), I, n.galleries.length > 0 ? n.galleries.map((function(e) {
                    return (e.membersOnly && (null == n ? void 0 : n.myMember) || !e.membersOnly) && O.createElement(tr, {
                        key: e.id,
                        group: n,
                        gallery: e,
                        justAdded: w && (null == b ? void 0 : b.id) === e.id
                    })
                })) : O.createElement(ur, null, "There aren't any galleries here!"))
            };
            var ur = (0, a.Z)(re.oI, {
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
                    a = (0, te.XC)(),
                    i = a.data,
                    c = a.isLoading,
                    u = (0, me.w$)({
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
                    v = (0, me.dj)({
                        userId: null == i ? void 0 : i.id
                    }),
                    b = v.data,
                    h = v.isLoading,
                    w = (0, Q.y)(),
                    x = w.data,
                    y = 0;
                w.isSuccess && (y = x.constants.GROUPS.MAX_JOINED), O.useEffect((function() {
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
                if (d || c || h) return O.createElement(re.UU, {
                    width: "100%",
                    height: "200px"
                });
                var N = t.membershipStatus;
                if (t.memberCount < ht.qH && (b.length < y || i.tagsSet.has("admin_uncap_owned_groups")))
                    if (N === ht.oq.REQUESTED || N === ht.oq.INVITED || N === ht.oq.USER_BLOCKED) Z = null;
                    else if (t.myMember) Z = null;
                else switch (t.joinState) {
                    case ht.wN.OPEN:
                        Z = O.createElement(re.zx, {
                            onClick: n,
                            className: "tw-w-full tw-mb-3"
                        }, O.createElement(re.$1, {
                            icon: o.r8,
                            className: "tw-mr-1"
                        }), "Join this group to view all instances");
                        break;
                    case ht.wN.REQUEST:
                        Z = O.createElement(re.zx, {
                            onClick: n,
                            className: "tw-w-full tw-mb-3"
                        }, O.createElement(re.$1, {
                            icon: s.FU,
                            className: "tw-mr-1"
                        }), "Request to join to view all instances");
                        break;
                    default:
                        Z = null
                }
                return O.createElement(O.Fragment, null, Z, O.createElement(re.oI, null, O.createElement("h4", {
                    className: "text-center"
                }, "Instances")), O.createElement(re.Ao, null, null != k && k.length ? k : O.createElement("p", {
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
                    c = (0, me.vb)(),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = m.isLoading,
                    p = m.isSuccess,
                    g = m.isError,
                    f = m.error,
                    E = (0, me.dl)(),
                    v = (0, l.Z)(E, 2),
                    b = v[0],
                    h = v[1],
                    w = h.isLoading,
                    y = h.isSuccess,
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
                }), "invite" === i && O.createElement(re.zx, {
                    disabled: p || N,
                    loading: N,
                    onClick: function() {
                        return u({
                            groupId: t.id,
                            userId: n.id
                        })
                    },
                    color: p ? "success" : void 0
                }, p && O.createElement(re.$1, {
                    icon: x.LE,
                    className: "mx-2"
                }), "Invite", p && "d", " ", n.displayName), "ban" === i && O.createElement(re.zx, {
                    disabled: y || N,
                    loading: N,
                    onClick: function() {
                        return b({
                            groupId: t.id,
                            userId: n.id
                        })
                    },
                    color: y ? "success" : void 0
                }, y && O.createElement(re.$1, {
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
                    o = (0, ue.pc)(),
                    i = O.useState(""),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, ue.Nr)(s),
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
                }), f && O.createElement(re.qX, {
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
            var yr = n(37599),
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
                    x = O.useState(null),
                    y = (0, l.Z)(x, 2),
                    Z = y[0],
                    k = y[1],
                    N = (0, me.Sp)({
                        groupId: m.id
                    }),
                    I = N.data,
                    j = N.isError,
                    T = N.isLoading,
                    M = (0, me.dZ)({
                        groupId: m.id
                    }),
                    P = M.data,
                    L = M.isError,
                    U = M.error,
                    q = M.isLoading,
                    z = (0, me.dZ)({
                        groupId: m.id,
                        blocked: !0
                    }),
                    G = z.data,
                    D = z.isError,
                    F = z.error,
                    X = (z.isFetching, (0, me.dt)()),
                    _ = (0, l.Z)(X, 2),
                    J = _[0],
                    B = _[1],
                    V = (B.isLoading, B.isError, B.error, (0, me.MQ)()),
                    W = (0, l.Z)(V, 2),
                    Y = W[0],
                    Q = W[1],
                    K = (Q.isLoading, Q.isError, Q.error, (0, me.M7)()),
                    ee = (0, l.Z)(K, 2),
                    te = ee[0],
                    ne = ee[1],
                    ae = (ne.isLoading, ne.isError),
                    oe = ne.error,
                    ie = (0, me.tN)(),
                    ce = (0, l.Z)(ie, 2),
                    se = ce[0],
                    de = ce[1],
                    pe = (de.isLoading, de.isSuccess),
                    ge = de.isError,
                    fe = de.error,
                    Ee = (0, me.QA)(),
                    ve = (0, l.Z)(Ee, 2),
                    be = ve[0],
                    he = ve[1],
                    we = (he.isLoading, he.isError),
                    xe = he.error,
                    ye = (0, me.XK)(),
                    Ze = (0, l.Z)(ye, 2),
                    ke = Ze[0],
                    Ne = Ze[1],
                    Ie = (Ne.isLoading, Ne.isError),
                    Oe = Ne.error;
                (0, S.s0)(), (0, ue.pc)();
                O.useEffect((function() {
                    pe && d(Zr.S.util.updateQueryData("getGroupById", {
                        groupId: m.id
                    }, (function(e) {
                        e.memberCount += 1
                    })))
                }), [pe]);
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
                }, O.createElement(re.oI, null, O.createElement("h4", {
                    className: "text-center text-break"
                }, "Ban ", null == Z ? void 0 : Z.displayName, "?!?!")), O.createElement(re.Ao, null, O.createElement("div", null, O.createElement(re.X2, null, O.createElement(re.zx, {
                    danger: !0,
                    onClick: function() {
                        var e;
                        e = null == Z ? void 0 : Z.id, be({
                            groupId: m.id,
                            userId: e
                        }), Ce()
                    },
                    expand: !0
                }, O.createElement(re.$1, {
                    icon: i.JH
                }), " And stay out!"), " ", O.createElement(re.zx, {
                    neutral: !0,
                    onClick: Ce,
                    expand: !0
                }, "Cancel"))))), O.createElement(A.Z, {
                    isOpen: f
                }, O.createElement(H.Z, {
                    close: O.createElement(le.Z, {
                        onClick: function() {
                            E(!1)
                        }
                    })
                }, O.createElement("h4", {
                    className: "m-0"
                }, "Invite Somebody")), O.createElement($.Z, null, O.createElement(xr, {
                    group: m,
                    mode: "invite"
                }))), O.createElement(re.zx, {
                    className: "mb-2",
                    color: "primary",
                    onClick: function() {
                        E(!0)
                    }
                }, "Invite Somebody"), O.createElement(yr.Z, {
                    title: "Join Requests",
                    collapseOpen: !0
                }, we && O.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == xe || null === (t = xe.data) || void 0 === t ? void 0 : t.error.message) || "There was an error banning the user."), L && O.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == U || null === (n = U.data) || void 0 === n ? void 0 : n.error.message) || "There was an error loading the join requests."), ae && O.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == oe || null === (r = oe.data) || void 0 === r ? void 0 : r.error.message) || "There was an error rejecting the join request."), ge && O.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == fe || null === (a = fe.data) || void 0 === a ? void 0 : a.error.message) || "There was an error accepting the join request."), O.createElement(re.oI, null, O.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Applicants")), O.createElement(re.Ao, {
                    className: "mb-2"
                }, q ? O.createElement(re.UU, {
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
                }))))), O.createElement(yr.Z, {
                    title: "Sent Invites"
                }, j && O.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == U || null === (o = U.data) || void 0 === o ? void 0 : o.error.message) || "There was an error loading the invites."), Ie && O.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == Oe || null === (c = Oe.data) || void 0 === c ? void 0 : c.error.message) || "There was an error deleting the invite."), O.createElement(re.oI, null, O.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Invites")), O.createElement(re.Ao, {
                    className: "mb-2"
                }, T ? O.createElement(re.UU, {
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
                }))))), O.createElement(yr.Z, {
                    title: "Blocked Requests"
                }, D && O.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == F || null === (s = F.data) || void 0 === s ? void 0 : s.error.message) || "There was an error loading the invites."), Ie && O.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == Oe || null === (u = Oe.data) || void 0 === u ? void 0 : u.error.message) || "There was an error deleting the invite."), O.createElement(re.oI, null, O.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Blocked Applicants")), O.createElement(re.Ao, {
                    className: "mb-2"
                }, T ? O.createElement(re.UU, {
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
                Or = n(19933),
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
                    f = (0, te.XC)(),
                    E = f.data,
                    v = f.isLoading,
                    b = O.useState(!0),
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
                    I = N.data,
                    S = void 0 === I ? [] : I,
                    j = N.isLoading,
                    A = N.isError,
                    T = N.error,
                    M = O.useMemo((function() {
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
                    ne = (0, l.Z)(ee, 2),
                    le = (ne[0], ne[1], null == J ? void 0 : J.signed_tos),
                    ae = O.useCallback((function(e) {
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
                    ie = O.useCallback((function(e, t) {
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
                            tiliaTosAccepted: le,
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
                            tiliaTosAccepted: le,
                            includesGroupAccess: a,
                            includesGroupAccessRemove: o,
                            quantity: m,
                            enteredPurchaseQuantity: i,
                            selectedPurchaseQuantity: c
                        }))
                    }), [Y, le, s]),
                    ce = O.useState(!1),
                    se = (0, l.Z)(ce, 2),
                    ue = se[0],
                    me = se[1];
                if (v || j || y || D || B || Q) return O.createElement(re.UU, {
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
                    ge = (0, we.dj)(q);
                return O.createElement(O.Fragment, null, U && O.createElement(Or.Z, {
                    isTiliaTOSAccepted: le,
                    returnPath: "/home/group/".concat(s.id, "/store"),
                    termsOfServiceMessage: "Tilia's Terms of Service have been changed. Please accept them before supporting ".concat(s.name, ".")
                }), O.createElement(re.oI, {
                    className: "flex-row justify-content-center align-items-center"
                }, O.createElement("h4", {
                    className: "text-center flex-grow-1"
                }, "Store")), O.createElement(re.Ao, null, F && O.createElement(re.qX, {
                    type: "error",
                    title: "Something strange happened"
                }, O.createElement("p", {
                    className: "m-0"
                }, "Error getting Tilia online status: ", X.status, " ", null !== (n = null === (r = X.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : "Unknown error")), !U && !F && O.createElement(re.qX, {
                    type: "warn",
                    title: "Store Maintenance"
                }, O.createElement(O.Fragment, null, O.createElement("p", {
                    className: "m-0"
                }, "Store Currently Offline: ", null != G ? G : "Unknown Reason"), O.createElement("p", {
                    className: "m-0"
                }, "Projected Service Return: ", (0, we.M4)(z)))), $ && U && O.createElement(re.qX, {
                    type: "error",
                    title: "Something strange happened"
                }, "Error looking up Tilia ToS acceptance: ", V.status, " ", null !== (a = null === (o = V.data) || void 0 === o ? void 0 : o.error.message) && void 0 !== a ? a : "Unknown error"), A && O.createElement(re.qX, {
                    type: "error",
                    title: "Error loading purchases"
                }, null == T || null === (i = T.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message), Z && O.createElement(re.qX, {
                    type: "error",
                    title: "Error loading listings"
                }, null == k || null === (c = k.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message), ge && U && O.createElement(re.qX, {
                    type: "warn",
                    title: "Store Maintenance"
                }, O.createElement("p", {
                    className: "m-0"
                }, "Starts: ", (0, we.M4)(q)), O.createElement("p", {
                    className: "m-0"
                }, "Ends: ", (0, we.M4)(z))), O.createElement(oe.Z, {
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
                    return O.createElement(Ar.Z, (0, Ir.Z)({
                        key: e.listing.id
                    }, e, {
                        group: s,
                        tiliaTokenBalance: !K && Y,
                        tiliaTosAccepted: le,
                        index: t,
                        economyOnline: U,
                        onCancel: ae,
                        onPurchase: ie
                    }))
                })) : O.createElement("p", null, ue ? "You have no current subscriptions to this group!" : "There are no subscription options here!"), m.isOpen && O.createElement(Tr.Z, null), d.isOpen && O.createElement(Rr.Z, null), p.isOpen && O.createElement(Mr.Z, {
                    groupData: s
                }), g.isOpen && O.createElement(Pr.Z, null)))
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
                    g = (0, O.useState)(!1),
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
                    T = (0, O.useMemo)((function() {
                        return !E && (Z.length > 400 || j > 3)
                    }), [E, Z]);
                return O.createElement("div", {
                    className: "d-flex align-items-center"
                }, O.createElement(Xr, {
                    isExpanded: E,
                    ref: i,
                    className: "container-fluid p-0"
                }, O.createElement("div", {
                    className: "row"
                }, O.createElement("div", {
                    className: "col-12 d-flex align-items-center d-sm-none"
                }, O.createElement(Yr, {
                    src: w
                })), O.createElement("div", {
                    className: "".concat(C ? " col-sm-6 col-md-6 col-lg-7 col-xl-7 col-12" : "col-12")
                }, O.createElement(_r, null, O.createElement(Br, null, x), function() {
                    if (0 === N.length) return O.createElement($r, null, O.createElement("div", null, O.createElement(re.$1, {
                        icon: zr.SZ
                    }), " ", (0, we.h4)(b), O.createElement(re.$1, {
                        className: "ms-2",
                        icon: Gr.iO
                    }), " ", "public" === I ? "Public" : "Group"));
                    var e = (0, q.Z)(N).sort((function(e, t) {
                        return S.includes(t) ? 1 : -1
                    }));
                    return O.createElement($r, null, O.createElement("div", null, O.createElement(re.$1, {
                        icon: zr.SZ
                    }), " ", (0, we.h4)(b)), O.createElement(Wr, null, O.createElement(re.$1, {
                        icon: qr.Aq
                    }), " Only Seen By", " ", e.map((function(e) {
                        var t = p.find((function(t) {
                                return t.id === e
                            })),
                            n = !(null == t || !t.productId);
                        return t ? O.createElement(Vr, {
                            id: t.id,
                            hasRole: S.includes(t.id)
                        }, n ? O.createElement(O.Fragment, null, O.createElement(re.$1, {
                            icon: Ur.n7,
                            className: "me-1"
                        }), t.name) : t.name) : null
                    }))))
                }(), O.createElement(Jr, {
                    hasImage: C,
                    isExpanded: E
                }, A, O.createElement(Hr, {
                    showReadMore: T,
                    onClick: function() {
                        return v(!0)
                    }
                }, "Read More")))), C && O.createElement("div", {
                    className: "col-12 col-sm-6 col-md-6 col-lg-5 col-xl-5 d-none d-sm-flex align-items-center"
                }, O.createElement(Yr, {
                    src: w
                })))), s && O.createElement("div", {
                    className: "ps-5 pe-4"
                }, O.createElement(Fr, {
                    color: "danger",
                    onClick: function() {
                        return m(n)
                    }
                }, O.createElement(re.$1, {
                    icon: z.$
                }))))
            };
            var Fr = (0, a.Z)(De.Z, {
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
                return O.createElement(el, null, O.createElement("h6", null, "Management Roles"), O.createElement("div", {
                    className: "d-flex flex-wrap"
                }, a.map((function(e) {
                    return O.createElement(re.vc, {
                        id: e.id,
                        label: i(e) ? O.createElement(O.Fragment, null, O.createElement(re.$1, {
                            icon: Ur.n7,
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
                    return O.createElement(re.vc, {
                        id: e.id,
                        label: i(e) ? O.createElement(O.Fragment, null, O.createElement(re.$1, {
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
                group: pe().object.isRequired,
                onChange: pe().func.isRequired,
                selectedRoles: pe().array.isRequired
            };
            const Kr = Qr;
            var el = (0, a.Z)("div", {
                target: "e1qh7s420"
            })({
                name: "kq62ql",
                styles: "background-color:#000000;border-radius:5px;padding:16px 20px"
            });
            var tl = O.lazy((function() {
                    return Promise.all([n.e(123), n.e(1541), n.e(4444), n.e(9908), n.e(229), n.e(3294), n.e(527), n.e(4814)]).then(n.bind(n, 40527))
                })),
                nl = (0, a.Z)(re.gx, {
                    target: "e37d6q30"
                })({
                    name: "tz9wht",
                    styles: ">textarea{min-height:250px;}"
                });
            const rl = function(e) {
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
                    x = O.useState(null),
                    y = (0, l.Z)(x, 2),
                    Z = y[0],
                    k = y[1],
                    S = O.useState(!0),
                    j = (0, l.Z)(S, 2),
                    T = j[0],
                    M = j[1],
                    P = O.useState(!1),
                    R = (0, l.Z)(P, 2),
                    L = R[0],
                    U = R[1],
                    z = O.useState(""),
                    G = (0, l.Z)(z, 2),
                    D = G[0],
                    F = G[1],
                    X = (0, te.q7)().data,
                    _ = void 0 === X ? [] : X,
                    J = (0, me.t$)(),
                    B = (0, l.Z)(J, 2),
                    H = B[0],
                    Y = B[1].isLoading;
                (0, O.useEffect)((function() {
                    "selectedRoles" !== f && w([])
                }), [f]);
                var Q = function() {
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
                    ee = "" === i.trim() || "" === m.trim(),
                    ne = _.includes("permission-user-gallery"),
                    le = [{
                        label: O.createElement(re.X2, {
                            className: "d-flex flex-column"
                        }, O.createElement(W.Z, {
                            className: "mb-0"
                        }, "Public"), O.createElement("small", null, "Non-Group members can view this post")),
                        selectedLabel: "Public",
                        value: "public"
                    }, {
                        label: O.createElement(re.X2, {
                            className: "d-flex flex-column"
                        }, O.createElement(W.Z, {
                            className: "mb-0"
                        }, "All Group Members"), O.createElement("small", null, "All group members can view this post")),
                        selectedLabel: "Group",
                        value: "group"
                    }, {
                        label: O.createElement(re.X2, {
                            className: "d-flex flex-column"
                        }, O.createElement(W.Z, {
                            className: "mb-0"
                        }, "Selected Roles"), O.createElement("small", null, "Select the group roles who can view this post")),
                        selectedLabel: "Selected Roles",
                        value: "selectedRoles"
                    }];
                return O.createElement(re.JX, {
                    className: "w-100"
                }, O.createElement(A.Z, {
                    isOpen: L,
                    className: (0, I.iv)({
                        name: "1ul0gzp",
                        styles: "max-width:1500px!important"
                    })
                }, O.createElement($.Z, null, O.createElement(tl, {
                    isSelector: !0,
                    activeTab: "photos",
                    selectedCallback: function(e, t) {
                        k(e), F(t), U(!1)
                    },
                    selectedId: null != Z ? Z : null
                })), O.createElement(V.Z, null, O.createElement(re.zx, {
                    onClick: function() {
                        U(!1), n((0, K.b9)())
                    }
                }, "Cancel"))), O.createElement("div", {
                    className: "mb-3"
                }, O.createElement(W.Z, null, "Post title"), O.createElement(re.II, {
                    type: "text",
                    value: m,
                    onChange: function(e) {
                        return d(e.target.value)
                    },
                    maxLength: 128
                })), O.createElement("div", {
                    className: "mb-3"
                }, O.createElement(W.Z, null, "Post message"), O.createElement(nl, {
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
                }, O.createElement(vt.Z, {
                    label: "Send notification",
                    value: "sendNotification",
                    defaultChecked: T,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        M(t)
                    }
                }), O.createElement(Et.Z, null, "If on, a notification of this post will be sent to all members of the group!")), O.createElement("div", {
                    className: "mb-3"
                }, O.createElement(W.Z, null, "Who can see this post"), O.createElement(re.Lt, {
                    options: le,
                    className: "flex-grow-1",
                    value: f,
                    onChange: function(e) {
                        return E(e)
                    },
                    trimToLength: !0
                })), "selectedRoles" === f && O.createElement("div", {
                    className: "mb-3"
                }, O.createElement(Kr, {
                    group: t,
                    onChange: function(e) {
                        var t, n;
                        return null != e && null !== (t = e.target) && void 0 !== t && t.checked ? w([].concat((0, q.Z)(h), [null == e || null === (n = e.target) || void 0 === n ? void 0 : n.value])) : w(h.filter((function(t) {
                            var n;
                            return t !== (null == e || null === (n = e.target) || void 0 === n ? void 0 : n.value)
                        })))
                    },
                    selectedRoles: h
                })), O.createElement(re.X2, {
                    className: "w-100"
                }, ne && O.createElement(O.Fragment, null, O.createElement(re.zx, {
                    neutral: !0,
                    expand: !0,
                    disabled: Y,
                    loading: Y,
                    onClick: function() {
                        U(!0)
                    }
                }, "Select an Image"), " "), O.createElement(re.zx, {
                    disabled: ee || Y,
                    loading: Y,
                    expand: !0,
                    onClick: Q
                }, "Create Post")), " ", O.createElement(Dr, {
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
                    a = (0, me.WG)(),
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
                }, O.createElement(re.oI, null, O.createElement("h4", null, "Block ", null == t ? void 0 : t.name, "?")), O.createElement(re.Ao, null, O.createElement("p", null, "Are you sure you want to block ", null == t ? void 0 : t.name, "?", O.createElement("br", null), " You will no longer be able to:", O.createElement("br", null), O.createElement("br", null), "• Join this group.", O.createElement("br", null), "• Get invites from this group. 💔"), O.createElement(re.X2, null, O.createElement(re.zx, {
                    danger: !0,
                    expand: !0,
                    onClick: function() {
                        c({
                            groupId: null == t ? void 0 : t.id
                        })
                    }
                }, O.createElement(re.$1, {
                    icon: i.JH
                }), "   Block"), " ", O.createElement(re.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: r
                }, "Cancel"))))
            };
            const ol = function() {
                return O.createElement(O.Fragment, null, O.createElement(re.oI, {
                    className: "text-center"
                }, O.createElement("h2", null, "You've Blocked this Group!")), O.createElement(re.Ao, {
                    className: "text-center"
                }, "You won't get any invites from this group, and you can't join it.", O.createElement("br", null), O.createElement("br", null), "If you want to join this group or get invites from it, you have to unblock it first."))
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
                return O.createElement(ul, null, o ? O.createElement(re.UU, {
                    width: "100%",
                    height: "30px",
                    className: "mt-4"
                }) : O.createElement(re.X2, {
                    className: "tw-justify-between"
                }, O.createElement(re.JX, {
                    className: "gap-1"
                }, O.createElement(re.X2, null, O.createElement(re.$1, {
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
                }, r.displayName)))), O.createElement(re.JX, {
                    className: "gap-1"
                }, O.createElement(re.X2, {
                    className: "tw-gap-[12px]"
                }, i && O.createElement(re.zx, {
                    success: !0,
                    onClick: function() {
                        return l()
                    }
                }, O.createElement(re.$1, {
                    icon: x.LE
                }), "  Accept"), O.createElement(re.zx, {
                    danger: !0,
                    onClick: function() {
                        return a()
                    }
                }, O.createElement(re.$1, {
                    icon: il.EO
                }), " ", i ? "Decline" : "Cancel")))))
            };
            cl.propTypes = {
                group: pe().object.isRequired,
                currentUser: pe().object.isRequired,
                targetUser: pe().object.isRequired,
                onCancel: pe().func.isRequired,
                inAccept: pe().func,
                isLoading: pe().bool
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
                    x = n.id,
                    y = n.roles,
                    Z = n.myMember,
                    k = 10,
                    N = Math.ceil((i + 1) / k),
                    I = (0, me.Aw)(),
                    C = (0, l.Z)(I, 2),
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
                    L = (0, me._n)({
                        pageValue: i - 1,
                        n: k,
                        groupId: x,
                        publicOnly: !Z
                    }, {
                        skip: 1 === i,
                        refetchOnMountOrArgChange: !0
                    }),
                    U = (0, me._n)({
                        pageValue: i,
                        n: k,
                        groupId: x,
                        publicOnly: !Z
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    z = (0, me._n)({
                        pageValue: i + 1,
                        n: k,
                        groupId: x,
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
                    T && E(!1)
                }), [T]);
                var D = function(e) {
                        w(e), E(!0)
                    },
                    F = (0, O.useMemo)((function() {
                        return m ? G.map((function(e, t) {
                            return null !== e ? O.createElement("div", {
                                key: e.id
                            }, O.createElement(Dr, {
                                myMember: Z,
                                postData: e,
                                observe: t === G.length - 1 ? P : 0 === t && 1 !== i ? R : null,
                                isEditMode: r,
                                deleteCallback: D,
                                groupRoles: y
                            })) : null
                        })) : null
                    }), [G, m]);
                return m ? O.createElement("div", {
                    className: "py-4"
                }, O.createElement(dl.Z, {
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
                }), O.createElement(El, null, O.createElement(bl, null, O.createElement(vl, null, "Posts")), O.createElement(hl, null, O.createElement(fl, null, O.createElement("div", {
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
                bl = (0, a.Z)(se.JX, {
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
                    c = O.useState(0),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = O.useState(!1),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = (0, me.V3)({
                        groupId: o,
                        perPage: 51,
                        offset: u
                    }),
                    v = E.data,
                    b = E.isLoading,
                    h = E.isError,
                    w = (null == v ? void 0 : v.length) > 50,
                    x = (0, me.Rx)(),
                    y = (0, l.Z)(x, 2),
                    Z = y[0],
                    k = y[1],
                    N = k.error,
                    I = k.isSuccess,
                    C = k.isError,
                    j = k.isLoading,
                    A = null !== (t = null == v ? void 0 : v.filter((function(e) {
                        return !!e.user
                    }))) && void 0 !== t ? t : [],
                    T = b ? O.createElement(xl, {
                        height: "130px"
                    }) : O.createElement(O.Fragment, null, null != A && A.length ? O.createElement(yl, null, null == A ? void 0 : A.slice(0, 50).map((function(e) {
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
                }), O.createElement(re.zx, {
                    className: "mb-2",
                    color: "primary",
                    onClick: function() {
                        f(!0)
                    }
                }, "Ban Somebody"), O.createElement(re.oI, null, O.createElement("h4", {
                    className: "text-center"
                }, "Banned Users")), O.createElement(re.Ao, null, h && O.createElement(re.qX, {
                    type: "error",
                    title: "Something went wrong"
                }, "We couldn't load the list of banned users. Please try again later!"), I && O.createElement(re.qX, {
                    slim: !0,
                    type: "success"
                }, "User unbanned. They can now be invited back in if you like."), C && O.createElement(re.qX, {
                    type: "error",
                    title: "Failed to unban user"
                }, null !== (n = null === (r = N.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : N.data.error), T, O.createElement(Zl, null, O.createElement(kl, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u - 50)
                    },
                    disabled: b || 0 === u
                }, O.createElement(re.$1, {
                    icon: ce.A3
                })), O.createElement(Nl, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u + 50)
                    },
                    disabled: b || !w
                }, O.createElement(re.$1, {
                    icon: ie._t
                })))))
            };
            var xl = (0, a.Z)(re.UU, {
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
                kl = (0, a.Z)(re.zx, {
                    target: "eqx7h3n1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                Nl = (0, a.Z)(re.zx, {
                    target: "eqx7h3n0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                Il = n(37024);
            const Ol = function(e) {
                var t = e.group,
                    n = e.event,
                    r = (e.isEvents, e.isAdmin),
                    l = void 0 !== r && r;
                return O.createElement(re.JX, {
                    className: "tw-mb-4"
                }, O.createElement(re.oI, null, O.createElement("h4", null, "Upcoming Event")), O.createElement(re.Ao, {
                    className: "tw-items-center"
                }, !n && O.createElement("p", {
                    className: "align-self-center tw-mb-5 tw-text-placeholder-text"
                }, "No upcoming or ongoing events"), n ? O.createElement(Il.ZP, {
                    event: n,
                    className: "tw-mb-5"
                }) : null, n && O.createElement(j.rU, {
                    to: "/home/group/".concat(t.id, "/events"),
                    className: "tw-w-full"
                }, O.createElement(re.zx, {
                    neutral: !0
                }, "See All Events")), l && !n && O.createElement(j.rU, {
                    to: "/home/group/".concat(t.id, "/events"),
                    className: "tw-w-full"
                }, O.createElement(re.zx, {
                    primary: !0
                }, "Create Event"))))
            };
            var Cl = n(88081),
                Sl = n(79212),
                jl = n.n(Sl),
                Al = n(37412),
                Tl = n.n(Al),
                Ml = n(75727),
                Pl = n(24752),
                Rl = n(29841),
                Ll = [{
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
                Ul = [{
                    key: 0,
                    label: "Newest First",
                    value: "NEWEST"
                }, {
                    key: 1,
                    label: "Oldest First",
                    value: "OLDEST"
                }];
            const ql = function(e) {
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
                    x = (0, l.Z)(w, 2),
                    y = x[0],
                    Z = x[1],
                    k = function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        f(n), r(n)
                    };
                return O.createElement(re.X2, {
                    className: (0, I.cx)("tw-@container tw-w-full tw-flex-wrap tw-gap-2 tw-z-20", m && "tw-justify-between")
                }, O.createElement(re.X2, {
                    className: (0, I.cx)("tw-gap-2 tw-flex-wrap", !m && "@sm:tw-flex-1 tw-w-full")
                }, O.createElement(re.Lt, {
                    label: "Display",
                    options: Ll,
                    value: b,
                    onChange: function(e) {
                        h(e), o(e)
                    }
                }), O.createElement(re.Lt, {
                    label: "Order",
                    options: Ul,
                    value: y,
                    onChange: function(e) {
                        Z(e), c(e)
                    }
                })), O.createElement(re.X2, {
                    className: (0, I.cx)("tw-gap-2 tw-justify-end", !m && "@sm:tw-flex-1 tw-w-full", m && "tw-flex-none")
                }, !m && O.createElement(re.II, {
                    className: "tw-w-full @sm:tw-max-w-[360px]",
                    type: "text",
                    placeholder: "Search by event name or url",
                    value: g,
                    onChange: k,
                    onKeyDown: (t = k, function(e) {
                        "Enter" === e.key && (e.preventDefault(), t(e))
                    })
                }), s && O.createElement(re.zx, {
                    className: "tw-w-9 tw-h-10",
                    onClick: function() {
                        s()
                    }
                }, O.createElement(re.$1, {
                    icon: Rl.QR
                }))))
            };
            fe().extend(Tl()), fe().extend(jl());
            var zl = (0, O.lazy)((function() {
                return Promise.resolve().then(n.bind(n, 41568))
            }));
            const Gl = function(e) {
                var t = e.group,
                    n = e.isCreate,
                    r = void 0 !== n && n,
                    a = (0, ue.Tu)(),
                    o = a.user,
                    i = a.isFetching,
                    c = (0, ue.pc)() && !1,
                    s = O.useState(!0),
                    u = (0, l.Z)(s, 2),
                    m = u[0],
                    d = u[1],
                    p = O.useState(!1),
                    g = (0, l.Z)(p, 2),
                    f = (g[0], g[1], O.useState(!1)),
                    E = (0, l.Z)(f, 2),
                    v = E[0],
                    b = E[1],
                    h = O.useState(""),
                    w = (0, l.Z)(h, 2),
                    x = w[0],
                    y = (w[1], O.useState(r)),
                    Z = (0, l.Z)(y, 2),
                    k = Z[0],
                    N = Z[1],
                    C = O.useState(!1),
                    S = (0, l.Z)(C, 2),
                    j = S[0],
                    A = S[1],
                    T = O.useState(Pl.P.CREATE),
                    M = (0, l.Z)(T, 2),
                    L = M[0],
                    U = M[1],
                    z = O.useState(null),
                    G = (0, l.Z)(z, 2),
                    D = G[0],
                    F = G[1],
                    X = O.useState([]),
                    _ = (0, l.Z)(X, 2),
                    J = _[0],
                    B = _[1],
                    $ = O.useState("NEWEST"),
                    V = (0, l.Z)($, 2),
                    W = V[0],
                    H = V[1],
                    Y = O.useState("UPCOMING"),
                    Q = (0, l.Z)(Y, 2),
                    K = Q[0],
                    ee = Q[1],
                    te = ((0, ue.Nr)(x), R({
                        groupMember: null == t ? void 0 : t.myMember,
                        permission: "group-calendar-manage"
                    })),
                    ne = P({
                        group: t,
                        groupMember: null == t ? void 0 : t.myMember
                    }),
                    le = te || ne,
                    ae = (0, Cl.kg)({
                        ownerId: t.id
                    }, {
                        skip: !t.id
                    }),
                    oe = ae.data,
                    ie = ae.isLoading;
                O.useMemo((function() {
                    oe && se(K)
                }), [oe]);
                var ce = function() {
                    N(!1), F(null), U(Pl.P.CREATE)
                };

                function se() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "UPCOMING";
                    ee(e);
                    var t = fe()(),
                        n = (oe.results || oe || []).filter((function(e) {
                            return !e.deletedAt || c
                        })),
                        r = function() {
                            switch (e) {
                                case "UPCOMING":
                                    return n.filter((function(e) {
                                        return fe()(e.endsAt).isAfter(t)
                                    }));
                                case "PAST":
                                    return n.filter((function(e) {
                                        return fe()(e.endsAt).isBefore(t)
                                    }));
                                case "ONGOING":
                                    return n.filter((function(e) {
                                        return fe()(e.startsAt).isBefore(t) && fe()(e.endsAt).isAfter(t)
                                    }));
                                default:
                                    return n
                            }
                        }();
                    me(W, r)
                }

                function me(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : J;
                    H(e);
                    var n = (0, q.Z)(t).sort((function(t, n) {
                        return "NEWEST" === e ? new Date(t.startsAt) - new Date(n.startsAt) : new Date(n.startsAt) - new Date(t.startsAt)
                    }));
                    B(n)
                }
                var de = function(e) {
                        F(e), N(!0), U(Pl.P.EDIT)
                    },
                    pe = function(e) {
                        F(e), N(!0), U(Pl.P.REVIVE)
                    },
                    ge = function(e) {
                        F(e), A(!0), U(Pl.P.DELETE)
                    };
                return O.useEffect((function() {
                    !ie && !i && oe && o && d(!1)
                }), [ie, oe, i, o]), O.createElement(O.Fragment, null, O.createElement("div", {
                    className: "tw-py-4"
                }, le && O.createElement(re.zx, {
                    "aria-label": "Create Event",
                    className: "tw-mb-4",
                    onClick: function() {
                        N(!0)
                    }
                }, "+ Create Event"), O.createElement(Dl, null, O.createElement(Xl, null, O.createElement(Fl, null, "Events")), O.createElement(_l, {
                    className: "tw-flex-col tw-gap-5 tw-items-center tw-pt-5"
                }, O.createElement(ql, {
                    hideSearch: !0,
                    gridToggle: function() {
                        b(!v)
                    },
                    onDisplayStateChange: se,
                    onOrderChange: me
                }), m && O.createElement(re.UU, null), !m && 0 === J.length && O.createElement("div", null, "No events found"), !m && O.createElement(re.JX, {
                    className: (0, I.cx)("tw-@container tw-w-full tw-flex-wrap tw-gap-4", v && "tw-flex-row")
                }, J.map((function(e) {
                    return O.createElement(Il.ZP, {
                        key: e.id,
                        event: e,
                        isGrid: v,
                        onEditCallback: de,
                        onDeleteCallback: ge,
                        onReviveCallback: pe,
                        isGroupAdmin: le
                    })
                })))))), O.createElement(re.u_, {
                    title: L.label,
                    isVisible: k,
                    onClose: ce,
                    className: "tw-w-full",
                    slim: !0,
                    width: "100%"
                }, O.createElement(O.Suspense, {
                    fallback: O.createElement("div", null, "Loading...")
                }, O.createElement(zl, {
                    event: D || void 0,
                    isEditMode: "edit" === L.value,
                    isReviveMode: "revive" === L.value,
                    group: t,
                    isGroupAdmin: le,
                    closeModalCallback: ce
                }))), D && "delete" === L.value && O.createElement(Ml.Z, {
                    event: D,
                    isOpen: j,
                    onCloseCallBack: function() {
                        A(!1), F(null), U(Pl.P.CREATE)
                    }
                }))
            };
            var Dl = (0, a.Z)("div", {
                    target: "e1bz3ytt3"
                })({
                    name: "144akkd",
                    styles: "display:flex;flex-direction:column;align-items:start;justify-content:start;border-radius:8px;background:#2a2e34"
                }),
                Fl = (0, a.Z)("h2", {
                    target: "e1bz3ytt2"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                Xl = (0, a.Z)(re.JX, {
                    target: "e1bz3ytt1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                _l = (0, a.Z)(Xl, {
                    target: "e1bz3ytt0"
                })({
                    name: "j2vksd",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;display:flex;justify-content:space-around;height:auto!important"
                });
            const Jl = function() {
                var e, t, n, a = O.useState(!1),
                    k = (0, l.Z)(a, 2),
                    P = k[0],
                    U = k[1],
                    q = O.useState(!1),
                    z = (0, l.Z)(q, 2),
                    G = z[0],
                    D = z[1],
                    F = O.useState(!1),
                    X = (0, l.Z)(F, 2),
                    _ = X[0],
                    J = X[1],
                    B = O.useState(!1),
                    $ = (0, l.Z)(B, 2),
                    V = $[0],
                    W = $[1],
                    H = O.useState(!1),
                    Y = (0, l.Z)(H, 2),
                    K = Y[0],
                    le = Y[1],
                    ae = O.useState(!1),
                    ie = (0, l.Z)(ae, 2),
                    ce = ie[0],
                    se = ie[1],
                    de = O.useState(!1),
                    pe = (0, l.Z)(de, 2),
                    ge = pe[0],
                    fe = pe[1],
                    Ee = O.useState(!1),
                    ve = (0, l.Z)(Ee, 2),
                    be = ve[0],
                    he = ve[1],
                    we = O.useState(!1),
                    xe = (0, l.Z)(we, 2),
                    ye = xe[0],
                    Ze = xe[1],
                    ke = (0, te.q7)().data,
                    Ne = void 0 === ke ? [] : ke,
                    Ie = (0, C.I0)(),
                    Oe = (0, Q.y)(),
                    Ce = Oe.data,
                    Se = Oe.isLoading,
                    je = 0,
                    Ae = 0;
                Oe.isSuccess && (je = Ce.constants.GROUPS.MAX_JOINED, Ae = Ce.constants.GROUPS.MAX_JOINED_PLUS), Ne.includes("permission-extra-group-count") && (je = Math.max(je, Ae || 0));
                var Te = (0, S.UO)().groupId,
                    Me = (0, te.XC)().data,
                    Pe = (0, me.r5)({
                        groupId: Te,
                        purpose: "group"
                    }),
                    Re = Pe.data,
                    Le = Pe.isSuccess,
                    Ue = Pe.isFetching,
                    qe = Pe.isError,
                    ze = Pe.error,
                    Ge = (0, ue.pc)(),
                    De = (0, me.dj)({
                        userId: null == Me ? void 0 : Me.id
                    }),
                    Fe = De.data,
                    Xe = De.isLoading,
                    _e = (0, me.xI)(),
                    Je = (0, l.Z)(_e, 2),
                    Be = Je[0],
                    Ve = Je[1],
                    We = Ve.isLoading,
                    He = Ve.isError,
                    Ye = Ve.error,
                    Qe = (0, me.i2)(),
                    Ke = (0, l.Z)(Qe, 2),
                    et = Ke[0],
                    tt = Ke[1].isLoading,
                    nt = (0, me.MQ)(),
                    rt = (0, l.Z)(nt, 2),
                    lt = rt[0],
                    at = rt[1].isLoading,
                    ot = (0, me.DU)(),
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
                O.useEffect((function() {
                    Re && !Ue && D(!0)
                }), [Re, Ue]), O.useEffect((function() {
                    pt && fe(!1)
                }), [pt]);
                var wt, xt, yt = O.useMemo((function() {
                        return !!G && (null !== Re.transferTargetId || void 0 !== Re.transferTargetId)
                    }), [G]),
                    Zt = (null == Re ? void 0 : Re.transferTargetId) === (null == Me ? void 0 : Me.id) ? null == Re ? void 0 : Re.ownerId : null == Re ? void 0 : Re.transferTargetId,
                    kt = (0, ne.GR)(Zt, {
                        skip: null == Re || Ue || !yt || !Zt,
                        refetchOnMountOrArgChange: !0
                    }),
                    It = kt.data,
                    Ot = kt.isFetching,
                    Ct = kt.isError,
                    St = kt.error,
                    jt = (0, me.HT)(),
                    At = (0, l.Z)(jt, 2),
                    Tt = At[0],
                    Mt = At[1],
                    Pt = Mt.data,
                    Rt = (Mt.isFetching, Mt.isError),
                    Lt = Mt.error,
                    Ut = (0, me.rq)(),
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
                                        Rt && Ie((0, ee.d)({
                                            title: "Group Transfer Error",
                                            icon: y.eH,
                                            message: "".concat(null == Lt || null === (t = Lt.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), he(!1)), !Rt && Pt && Ie((0, ee.d)({
                                            title: "Group Transfer Accepted",
                                            icon: Z.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }), he(!1)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Ie((0, ee.d)({
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
                                        Ft && Ie((0, ee.d)({
                                            title: "Cancel Group Transfer Error",
                                            icon: y.eH,
                                            message: "".concat(null == Dt || null === (t = Dt.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), he(!1)), !Ft && Dt && Ie((0, ee.d)({
                                            title: "Cancel Group Transfer Success",
                                            icon: Z.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }), he(!1)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Ie((0, ee.d)({
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
                if (!Re || Ue || Et || at || tt || We || Xe || Se) return (ce || K) && (le(!1), se(!1)), yt && !It || Ot ? O.createElement(re.UU, {
                    width: "100%",
                    height: "200px",
                    className: "mt-4"
                }) : !Ct || qe || Ot ? qe ? O.createElement(O.Fragment, null, O.createElement(re.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: "Something went wrong with getting this group! (".concat(null == ze || null === (wt = ze.data) || void 0 === wt || null === (wt = wt.error) || void 0 === wt ? void 0 : wt.message, ")")
                }), O.createElement("div", {
                    className: "text-center"
                }, O.createElement(j.rU, {
                    to: "/home/groups"
                }, "Go Back! 😭"))) : O.createElement(O.Fragment, null, O.createElement(re.UU, {
                    width: "100%",
                    height: "200px",
                    className: "mt-4"
                }), O.createElement(re.UU, {
                    width: "100%",
                    height: "500px",
                    className: "mt-5"
                })) : O.createElement(re.qX, {
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
                    if (Wt === ht.oq.REQUESTED) Jt = O.createElement(re.zx, {
                        danger: !0,
                        onClick: function() {
                            return et({
                                groupId: Te
                            })
                        },
                        disabled: We,
                        loading: We
                    }, O.createElement(M.Z, {
                        icon: w.NB
                    }), "  Cancel Join Request");
                    else if (Wt === ht.oq.INVITED) Jt = O.createElement(re.zx, {
                        success: !0,
                        onClick: Bt
                    }, O.createElement(M.Z, {
                        icon: x.LE
                    }), "  Accept Invite");
                    else if (Wt === ht.oq.USER_BLOCKED) Jt = null;
                    else if (!Re.myMember) switch (Re.joinState) {
                        case ht.wN.OPEN:
                            Jt = O.createElement(re.zx, {
                                onClick: $t,
                                disabled: We,
                                loading: We
                            }, O.createElement(M.Z, {
                                icon: o.r8
                            }), "  Join Group");
                            break;
                        case ht.wN.REQUEST:
                            Jt = O.createElement(re.zx, {
                                onClick: $t
                            }, O.createElement(M.Z, {
                                icon: s.FU
                            }), " Request to Join");
                            break;
                        default:
                            Jt = O.createElement(re.zx, {
                                disabled: !0
                            }, "Closed to New Members")
                    }
                } else Fe.length >= je && !Me.tagsSet.has("admin_uncap_owned_groups") ? Jt = O.createElement(re.zx, {
                    disabled: !0
                }, "You can't join more than ", je, " groups!") : Re.myMember || (Jt = O.createElement(re.zx, {
                    disabled: !0
                }, "Group is Full"));
                if (!Re.id) return null;
                var Ht = Wt === ht.oq.USER_BLOCKED;
                return O.createElement(O.Fragment, null, O.createElement(re.$4, null, null !== (e = null == Re ? void 0 : Re.name) && void 0 !== e ? e : "Group"), O.createElement(A.Z, {
                    isOpen: V,
                    toggle: function() {
                        W(!1)
                    }
                }, O.createElement($l, null, O.createElement("h4", {
                    className: "text-center"
                }, "Unblock this Group?")), O.createElement(Vl, null, O.createElement(re.JX, null, O.createElement("div", {
                    className: "p-3 text-center"
                }, "Are you sure you want to unblock ", O.createElement("strong", null, Re.name), "?"), O.createElement("div", {
                    className: "p-3"
                }, O.createElement(re.X2, null, O.createElement(re.zx, {
                    expand: !0,
                    onClick: function() {
                        W(!1), lt({
                            groupId: Te,
                            userId: Me.id
                        })
                    }
                }, O.createElement(M.Z, {
                    icon: x.LE
                }), "  Unblock Group"), " ", O.createElement(re.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        W(!1)
                    }
                }, O.createElement(M.Z, {
                    icon: w.NB
                }), "  Cancel")))))), O.createElement(A.Z, {
                    isOpen: _,
                    toggle: function() {
                        J(!1)
                    }
                }, O.createElement($l, null, O.createElement("h4", {
                    className: "text-center"
                }, "Rules")), O.createElement(Vl, null, O.createElement(re.JX, null, O.createElement("div", {
                    className: "p-3"
                }, O.createElement("p", null, "By joining this group, you agree to the following rules:"), O.createElement(Hl, null, Re.rules)), O.createElement("div", {
                    className: "p-3"
                }, O.createElement(re.X2, null, O.createElement(re.zx, {
                    expand: !0,
                    onClick: Bt,
                    disabled: We,
                    loading: We
                }, Re.joinState === ht.wN.OPEN ? O.createElement(O.Fragment, null, O.createElement(M.Z, {
                    icon: o.r8
                }), "  Join Group") : O.createElement(O.Fragment, null, O.createElement(M.Z, {
                    icon: s.FU
                }), "  Request to Join")), " ", O.createElement(re.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        J(!1)
                    }
                }, O.createElement(M.Z, {
                    icon: w.NB
                }), "  Cancel")))))), O.createElement(A.Z, {
                    isOpen: ge,
                    toggle: function() {
                        return fe(!1)
                    }
                }, O.createElement($l, null, O.createElement("h4", {
                    className: "text-center"
                }, "Decline Group Invite?")), O.createElement(Vl, null, O.createElement(re.JX, null, O.createElement("div", {
                    className: "p-3 text-center"
                }, "Are you sure you want to decline invite to ", O.createElement("strong", null, Re.name), "?"), O.createElement("div", {
                    className: "px-3 text-center d-flex justify-content-center"
                }, O.createElement($e.Z, {
                    id: "block-invites",
                    checked: ye,
                    onChange: function(e) {
                        return Ze(e.target.checked)
                    },
                    label: "Block this group, preventing further invites",
                    htmlFor: "block-invites"
                })), O.createElement("div", {
                    className: "p-3"
                }, O.createElement(re.X2, null, O.createElement(re.zx, {
                    expand: !0,
                    danger: !0,
                    onClick: function() {
                        return ct({
                            groupId: Te,
                            block: ye
                        })
                    },
                    loading: ut
                }, O.createElement(M.Z, {
                    icon: x.LE
                }), "  Decline Invite"), " ", O.createElement(re.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        fe(!1)
                    }
                }, O.createElement(M.Z, {
                    icon: w.NB
                }), "  Cancel")))))), O.createElement(al, {
                    group: Re,
                    showBlockModal: ce,
                    onClose: function() {
                        se(!1)
                    }
                }), O.createElement("div", {
                    className: (0, I.iv)({
                        name: "g46w8s",
                        styles: "margin-bottom:30px"
                    })
                }, O.createElement(re.X2, {
                    className: "mb-2 justify-content-end"
                }, (null == Re ? void 0 : Re.ownerId) !== Me.id && O.createElement(O.Fragment, null, O.createElement(re.zx, {
                    neutral: !0,
                    onClick: function() {
                        le(!0)
                    }
                }, O.createElement(re.$1, {
                    icon: i.JH
                }), " Report"), O.createElement(Tn.Z, {
                    cancelCallback: function() {
                        return le(!1)
                    },
                    isOpen: K,
                    type: "group",
                    contentId: null == Re ? void 0 : Re.id,
                    contentName: null == Re ? void 0 : Re.name,
                    hasStore: null == Re ? void 0 : Re.storeId
                }), "userblocked" !== (null == Re ? void 0 : Re.membershipStatus) && !(null != Re && Re.myMember) && O.createElement(O.Fragment, null, " ", O.createElement(re.zx, {
                    danger: !0,
                    onClick: function() {
                        se(!0)
                    }
                }, O.createElement(re.$1, {
                    icon: h.jA
                }), " Block")), "userblocked" === (null == Re ? void 0 : Re.membershipStatus) && O.createElement(O.Fragment, null, " ", O.createElement(re.zx, {
                    danger: !0,
                    onClick: function() {
                        W(!0)
                    }
                }, O.createElement(M.Z, {
                    icon: b.faBan
                }), " Unblock")))), O.createElement(ll.Z, {
                    group: Re
                }), Vt && O.createElement(re.X2, null, O.createElement(T.Z, {
                    color: "warning"
                }, "Your VRChat account does not have 2FA enabled. Your role '", Vt.name, "' in ", Re.name, " requires this. Until you enable 2FA, your ability to manage ", Re.name, " will be limited.")), Ge && gt && O.createElement(re.X2, null, O.createElement(Yl, null, " THIS GROUP HAS BEEN DELETED ")), He && O.createElement(re.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: (null == Ye || null === (t = Ye.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred while trying to join ".concat(null == Re ? void 0 : Re.name, ".")
                }), mt && O.createElement(re.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: (null == dt || null === (n = dt.data) || void 0 === n ? void 0 : n.error.message) || "An error occurred while trying to decline group invitation."
                }), O.createElement("div", {
                    className: "d-flex flex-row justify-content-center align-content-center mb-2"
                }, Jt, Wt === ht.oq.INVITED && O.createElement(re.zx, {
                    danger: !0,
                    onClick: function() {
                        return fe(!0)
                    },
                    className: "mx-2"
                }, O.createElement(M.Z, {
                    icon: v.YI
                }), "  Decline Invite")), Ht ? O.createElement(ol, null) : O.createElement(O.Fragment, null, yt && !Ot && Zt && O.createElement(sl, {
                    group: Re,
                    currentUser: Me,
                    targetUser: It,
                    onAccept: Xt,
                    onCancel: _t,
                    isLoading: be
                }), O.createElement(oe.Z, {
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
                    element: O.createElement(O.Fragment, null, Le && O.createElement(gl, {
                        group: Re
                    }), Le && O.createElement(Ol, {
                        group: Re,
                        event: bt,
                        isAdmin: Ge || R({
                            groupMember: null == Re ? void 0 : Re.myMember,
                            permission: "group-members-manage"
                        })
                    }), O.createElement(Bl, null, O.createElement(re.JX, {
                        className: "m-1"
                    }, O.createElement(Mn, {
                        langs: Re.languages
                    })), O.createElement(re.JX, {
                        className: "m-1"
                    }, O.createElement(Dn, {
                        links: Re.links
                    }))), O.createElement(Bl, null, O.createElement(re.JX, {
                        className: "m-1 mt-2 mw-100"
                    }, O.createElement($l, null, O.createElement("h4", null, "About This Group")), O.createElement(Wl, null, O.createElement("p", {
                        className: "w-100 text-break"
                    }, Re.description))), Re.rules && O.createElement(O.Fragment, null, O.createElement(re.JX, {
                        className: "m-1 mt-2 mw-100"
                    }, O.createElement($l, null, O.createElement("h4", null, "Rules")), O.createElement(Wl, null, O.createElement("p", {
                        className: "w-100 text-break"
                    }, Re.rules))))))
                }), O.createElement(S.AW, {
                    path: "/posts",
                    element: (Ge || R({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-announcement-manage"
                    })) && Le ? O.createElement(O.Fragment, null, P ? O.createElement(re.X2, null, O.createElement(re.JX, {
                        className: "w-100"
                    }, O.createElement(re.oI, null, O.createElement("h4", {
                        className: "text-center"
                    }, "Create Post")), O.createElement(re.Ao, null, O.createElement(re.JX, {
                        className: "w-100"
                    }, O.createElement(rl, {
                        group: Re
                    }), O.createElement(re.zx, {
                        onClick: function() {
                            return U(!1)
                        }
                    }, "Cancel"))))) : O.createElement(re.zx, {
                        onClick: function() {
                            return U(!0)
                        }
                    }, O.createElement(re.$1, {
                        icon: o.r8
                    }), " Create Post"), O.createElement(gl, {
                        isEditMode: !0,
                        group: Re
                    })) : O.createElement(L.Z, {
                        to: ".."
                    })
                }), O.createElement(S.AW, {
                    path: "/events",
                    element: O.createElement(Gl, {
                        group: Re
                    })
                }), O.createElement(S.AW, {
                    path: "/events/create",
                    element: O.createElement(Gl, {
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
                    element: O.createElement(Lr, {
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
                    }) ? O.createElement(wl, {
                        group: Re
                    }) : O.createElement(L.Z, {
                        to: ".."
                    })
                })))))
            };
            var Bl = (0, a.Z)(re.X2, {
                    target: "e7n20a25"
                })("flex-wrap:wrap;margin:-0.25rem;>", re.JX, "{min-width:300px;flex:1;}"),
                $l = (0, a.Z)(re.JX, {
                    target: "e7n20a24"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                Vl = (0, a.Z)($l, {
                    target: "e7n20a23"
                })({
                    name: "vnq3j7",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto;white-space:pre-line"
                }),
                Wl = (0, a.Z)(Vl, {
                    target: "e7n20a22"
                })({
                    name: "di36rf",
                    styles: "overflow-y:auto;white-space:pre-line;max-height:300px"
                }),
                Hl = (0, a.Z)("p", {
                    target: "e7n20a21"
                })({
                    name: "votlfh",
                    styles: "overflow-y:auto;white-space:pre-line;max-height:400px;background:#252a30;padding:0.5rem;border-radius:8px"
                }),
                Yl = (0, a.Z)("h3", {
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
                    I = k[1],
                    O = (0, d.gI)(),
                    C = (0, a.Z)(O, 2),
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
                                    return t.preventDefault(), I(!0), n = new URL(A, window.location.href), e.next = 5, S(h(h({}, p.$Z.TOS), {}, {
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
                    (null != j && j.isLoading || x) && I(!0), null != j && j.isError && I(!1)
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
//# sourceMappingURL=84550fe1fef0a8de3a04ffdbd693d361bc9071322934d8cad355b86aa4faeefb.js.map