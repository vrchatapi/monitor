"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [464], {
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
                    h = v[0],
                    b = v[1];
                o.useEffect((function() {
                    b(t)
                }), [t]);
                return o.createElement("div", null, o.createElement("h3", null, o.createElement(i.Z, {
                    "aria-label": "".concat(u, " Toggle"),
                    size: d,
                    onClick: function() {
                        n ? n() : (f(!h), b(!h))
                    },
                    color: h ? "primary" : "secondary"
                }, h && o.createElement(s.Z, {
                    icon: a.uM
                }), !h && o.createElement(s.Z, {
                    icon: l.Kt
                })), " ", u), o.createElement(c.Z, {
                    isOpen: h
                }, p), "sm" !== d && o.createElement("br", null))
            }
        },
        50464: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => Il
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
                p = n(34604),
                g = n(67992),
                f = n(41259),
                E = n(68149),
                v = n(35117),
                h = n(68214),
                b = n(59545),
                x = n(68055),
                y = n(76553),
                w = n(6811),
                Z = n(64687),
                k = n.n(Z),
                N = n(83505),
                I = n(67294),
                C = n(32981),
                O = n(89250),
                S = n(79655),
                j = n(69699),
                A = n(23138),
                M = n(86646),
                T = function(e) {
                    var t, n, r, l = e.groupMember,
                        a = e.permission;
                    return (null == l || null === (t = l.permissions) || void 0 === t ? void 0 : t.includes("*")) || null !== (n = null == l || null === (r = l.permissions) || void 0 === r ? void 0 : r.includes(a)) && void 0 !== n && n
                },
                R = n(46320),
                P = n(4942),
                L = n(42138),
                q = n(42619),
                U = n(70265),
                z = n(5702),
                G = n(78439),
                F = n(47810),
                X = n(95305),
                D = n(35773),
                _ = n(60766),
                J = n(23149),
                $ = n(3126),
                B = n(83024),
                V = n(21464),
                W = n(17219),
                H = n(5513),
                Y = n(64258),
                Q = n(22202),
                K = n(62437),
                ee = n(14411),
                te = n(89421),
                ne = n(43862),
                re = n(72998),
                le = n(65394),
                ae = n(85020),
                oe = n(60006),
                ie = n(12752),
                ce = n(93261),
                se = n(45697),
                ue = n.n(se),
                me = n(27484),
                de = n.n(me),
                pe = n(1646),
                ge = n.n(pe),
                fe = n(84110),
                Ee = n.n(fe),
                ve = n(64358);
            de().extend(ge()), de().extend(Ee());
            const he = function(e) {
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
                    m = de().duration(de()(u).diff(de()())).humanize(!0);
                return I.createElement(be, null, I.createElement(ee.JX, {
                    className: "tw-columns-3"
                }, I.createElement(ee.pw, {
                    className: "tw-justify-self-start tw-my-2",
                    fitToCover: !0,
                    alt: i,
                    imageId: (0, ve.oQ)(a || o),
                    width: "100px",
                    height: "100px"
                })), I.createElement(ee.JX, {
                    className: "tw-flex-[1_1_128px] tw-columns-6"
                }, I.createElement(S.rU, {
                    className: "tw-justify-self-start tw-text-2xl",
                    to: "/home/user/".concat(c)
                }, i), I.createElement("h4", {
                    className: "tw-justify-self-start"
                }, "Joined ".concat(m)), I.createElement("p", {
                    className: "tw-justify-self-start tw-text-[#737372] tw-text-[16px]"
                }, "Member")), I.createElement(ee.JX, {
                    className: "tw-flex tw-flex-row tw-flex-[1_1_32px] tw-justify-center tw-items-center tw-columns-3"
                }, I.createElement(ee.zx, {
                    expand: !0,
                    title: "Select New Owner",
                    onClick: function() {
                        n(t)
                    }
                }, "Select")))
            };
            var be = (0, a.Z)(ee.X2, {
                target: "e12tzkfr0"
            })("margin:0.4rem 0;padding:0.5rem;background-color:#252a30;border:3px solid #252a30;transition:border-color 0.2s ease-in-out;border-radius:8px;flex-wrap:wrap;justify-content:center;&:hover{border-color:#054d5e;}&>*{margin:0.5rem;}&>", ee.JX, ">p:last-child,&>", ee.JX, ">ul:last-child{margin:0;}");

            function xe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ye(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? xe(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var we = function(e) {
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
                    h = E[1],
                    b = (0, I.useState)(1),
                    x = (0, l.Z)(b, 2),
                    y = x[0],
                    w = x[1],
                    Z = (0, ie.Nr)(v),
                    k = (0, I.useState)([
                        [],
                        []
                    ]),
                    N = (0, l.Z)(k, 2),
                    C = N[0],
                    O = N[1],
                    S = (0, Q.XC)().data,
                    j = null == o ? void 0 : o.id,
                    A = null == o ? void 0 : o.ownerId,
                    M = null == o ? void 0 : o.myMember,
                    T = (0, ce.Pv)(),
                    R = (0, l.Z)(T, 2),
                    P = R[0],
                    q = R[1],
                    U = q.data,
                    z = q.error,
                    G = q.isLoading,
                    F = (null == U || null === (t = U.members) || void 0 === t ? void 0 : t.length) < 25;
                I.useEffect((function() {
                    ue(0)
                }), []), I.useEffect((function() {
                    var e = (0, L.Z)(C);
                    if (U) {
                        var t;
                        if (U.page <= 0 && !v) e[0] = [null != o && o.myMember ? ye(ye({}, M), {}, {
                            userId: S.id,
                            user: ye(ye({}, S), {}, {
                                thumbnailUrl: null !== (t = S.profilePicOverride) && void 0 !== t ? t : S.currentAvatarImageUrl
                            })
                        }) : null].concat((0, L.Z)(U.members));
                        else e[U.page] = U.members;
                        O(e)
                    }
                }), [U]), (0, I.useEffect)((function() {
                    setTimeout((function() {
                        i && null != g && g.current && g.current.focus()
                    }), 300)
                }), [i, g]), (0, I.useEffect)((function() {
                    w(1)
                }), [v]), (0, I.useEffect)((function() {
                    h("")
                }), [i]);
                var X = (0, ce.Pi)({
                        groupId: j,
                        pageValue: y,
                        searchTerm: Z,
                        n: 25
                    }, {
                        skip: "" === Z || !i || Z.length < 3 || !u
                    }),
                    D = X.data,
                    _ = X.error,
                    J = X.isError,
                    $ = X.isFetching,
                    B = X.isSuccess,
                    V = (0, K.hi)({
                        pageValue: y,
                        searchTerm: Z,
                        n: 25
                    }, {
                        skip: "" === Z || !i || Z.length < 3 || u
                    }),
                    W = V.data,
                    H = V.error,
                    Y = V.isError,
                    re = V.isFetching,
                    se = V.isSuccess,
                    ue = function(e) {
                        P({
                            groupId: j,
                            perPage: 25,
                            page: e
                        }), w(e + 1)
                    },
                    me = null == C ? void 0 : C.map((function(e, t) {
                        var n;
                        return null === (n = (0, L.Z)(e)) || void 0 === n || null === (n = n.sort((function(e) {
                            return e.userId === A ? -1 : 0
                        }))) || void 0 === n || null === (n = n.filter((function(e, t, n) {
                            return n.findIndex((function(t) {
                                return t.userId === e.userId
                            })) === t
                        }))) || void 0 === n ? void 0 : n.map((function(e) {
                            return e.userId === A ? null : I.createElement(he, {
                                key: e.id,
                                member: e,
                                onSelectCallback: function(e) {
                                    return m(e)
                                }
                            })
                        }))
                    }));
                return I.createElement(oe.oA, {
                    role: "dialog",
                    isOpen: i,
                    toggle: c,
                    keyboard: !0,
                    autoFocus: !1,
                    size: "lg"
                }, I.createElement(oe.eb, {
                    tag: "h4",
                    close: I.createElement(te.Z, {
                        onClick: c
                    }),
                    toggle: c
                }, u ? "Group Members Search" : "Users Search"), I.createElement(oe.vc, null, I.createElement(oe.T_, null, I.createElement(ee.II, {
                    id: "search-product-list",
                    onChange: function(e) {
                        return h(e.target.value)
                    },
                    placeholder: u ? "Search Group Members..." : "Search for users...",
                    ref: g,
                    type: "text",
                    value: v
                }), (J || Y) && I.createElement("p", {
                    className: "text-center m-5 text-warning h-25"
                }, "Something went wrong with the search, please try again later!", I.createElement("br", null), J && I.createElement("code", null, null == _ || null === (n = _.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), Y && I.createElement("code", null, null == H || null === (r = H.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message)), $ || p && I.createElement(oe.Um, null, I.createElement("div", {
                    className: "text-center m-5 text-secondary h-25"
                }, I.createElement(ne.Z, null))), !B && !$ && !J && u && I.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "Search for members in your group."), B && !$ && u && I.createElement(oe.Um, null, D.results.map((function(e) {
                    return I.createElement(he, {
                        key: e.id,
                        member: e,
                        onSelectCallback: function(e) {
                            return m(e)
                        }
                    })
                })), 0 === D.results.length && I.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "We couldn't find anything with that search.")), !se && !re && !Y && !u && I.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "Search for users on VRChat."), se && I.createElement(oe.Um, null, 0 === W.results.length && I.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "We couldn't find anything with that search.")), G ? I.createElement(ee.UU, {
                    height: "200px"
                }) : I.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, me), I.createElement("div", {
                    className: "p-2",
                    style: {
                        margin: "2px auto 0",
                        textAlign: "center"
                    }
                }, I.createElement(ee.zx, {
                    onClick: function() {
                        return ue(page)
                    },
                    disabled: G || z || F,
                    loading: G
                }, z || F ? "No more members..." : "List More Members")), (B || se) && I.createElement(oe.Gz, null, I.createElement(oe.IT, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return w(y - 1)
                    },
                    disabled: 1 === y || $ || re
                }, I.createElement(ee.$1, {
                    icon: ae.A3
                })), I.createElement("span", null, y), I.createElement(oe.UV, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return w(y + 1)
                    },
                    disabled: (null == D ? void 0 : D.isLastPage) || (null == W ? void 0 : W.isLastPage) || $ || re
                }, I.createElement(ee.$1, {
                    icon: le._t
                }))))))
            };
            we.propTypes = {
                group: ue().object,
                isOpen: ue().bool.isRequired,
                cancelCallback: ue().func.isRequired,
                memberEditCallback: ue().func,
                memberSelectCallback: ue().func
            };
            const Ze = we;
            var ke = n(46027);
            const Ne = function(e) {
                var t, n, r = e.group,
                    l = e.onClickCallback,
                    a = e.isDeleting,
                    o = (0, K.GR)(null == r ? void 0 : r.ownerId, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    i = o.data,
                    c = o.isFetching,
                    s = o.isError,
                    u = o.error,
                    m = (0, K.GR)(null == r ? void 0 : r.transferTargetId, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    d = m.data,
                    p = m.isFetching,
                    g = m.isError,
                    f = m.error;
                return I.createElement(I.Fragment, null, I.createElement(ee.oI, {
                    className: "mt-2"
                }, I.createElement("h4", {
                    className: "text-center"
                }, "Group Ownership Transfer")), I.createElement(ee.Ao, null, c || p || !d || !i ? I.createElement("div", {
                    className: "full-width text-center"
                }, I.createElement(ne.Z, null)) : I.createElement(I.Fragment, null, s && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == u || null === (t = u.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), g && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error Fetching New Group Owner Data"
                }, (null == f || null === (n = f.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unkown error fetching New Group Owner Data"), I.createElement(ee.X2, null, I.createElement("span", {
                    className: "full-width text-center"
                }, "You can choose to cancel the transfer")), I.createElement(ee.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, I.createElement(ee.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "Current Owner"), I.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, I.createElement(ee.$1, {
                    className: "tw-mr-2",
                    icon: ke.nm
                }), null == i ? void 0 : i.displayName)), I.createElement(ee.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "New Owner"), d && I.createElement(ee.X2, {
                    className: "tw-flex tw-m-1 tw-font-bold gx-0 gap-1"
                }, I.createElement(ee.pw, {
                    width: 24,
                    style: {
                        maxWidth: "24px",
                        objectFit: "cover"
                    },
                    imageId: (d.thumbnailUrl || d.currentAvatarThumbnailImageUrl).match("(?!/)file_[^/]+")[0],
                    alt: null == d ? void 0 : d.displayName
                }), null == d ? void 0 : d.displayName))), a ? I.createElement("div", {
                    className: "full-width text-center"
                }, I.createElement(ne.Z, null)) : I.createElement("div", {
                    className: (0, N.iv)({
                        name: "pc0kie",
                        styles: ">*{margin-top:15px;}"
                    })
                }, I.createElement(ee.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, I.createElement(ee.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement(ee.zx, {
                    onClick: function() {
                        return l()
                    },
                    danger: !0,
                    className: "tw-max-w-[100%]"
                }, "Cancel Transfer")))))))
            };
            var Ie = n(57982);
            const Ce = function(e) {
                var t = e.isOpen,
                    n = e.cancelCallback;
                return I.createElement(oe.oA, {
                    role: "dialog",
                    isOpen: t,
                    toggle: n,
                    keyboard: !0,
                    autoFocus: !1,
                    size: "lg"
                }, I.createElement(oe.eb, {
                    tag: "h4",
                    close: I.createElement(te.Z, {
                        onClick: n
                    }),
                    toggle: n
                }, "About Group Ownership Transfer"), I.createElement(oe.vc, null, I.createElement("h4", null, "You can transfer your group ownership to another member of the group. the target member and the group must meet the requirements below."), I.createElement(oe.T_, null, I.createElement("ul", null, I.createElement("li", null, "The target member has verified their email address ", "(", "check the Email section via", " ", I.createElement(S.rU, {
                    className: "tw-text-link-highlight",
                    to: "/home/profile",
                    target: "_blank"
                }, "account settings"), ")"), I.createElement("li", null, "The target member has an active VRC Plus subscription"), I.createElement("li", null, "The target member can still own more groups ", "(", "each user can own up to 5 groups", ")"), I.createElement("li", null, "The group is not monetized")))))
            };
            var Oe = function(e) {
                var t, n, r = e.group,
                    a = e.onButtonClick,
                    o = e.isLoading,
                    i = I.useState(!1),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, K.GR)(null == r ? void 0 : r.ownerId, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    d = m.data,
                    p = m.isFetching,
                    g = m.isError,
                    f = m.error,
                    E = (0, ce.ek)({
                        groupId: r.id
                    }, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    v = E.data,
                    h = E.isFetching,
                    b = E.isError,
                    x = E.error,
                    y = I.useMemo((function() {
                        return null == v || !v.requirements || !v.requirements.groupNotMonetized
                    }), [v, b]);
                return I.createElement(I.Fragment, null, s && I.createElement(Ce, {
                    isOpen: s,
                    cancelCallback: function() {
                        return u(!1)
                    }
                }), I.createElement(ee.oI, {
                    className: "mt-2"
                }, I.createElement("h4", {
                    className: "text-center"
                }, "Group Ownership Transfer")), I.createElement(ee.Ao, null, p || h ? I.createElement("div", {
                    className: "full-width text-center"
                }, I.createElement(ne.Z, null)) : I.createElement(I.Fragment, null, g && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == f || null === (t = f.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), b && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == x || null === (n = x.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unkown error fetching Group Owner Requirements Data"), y && !b ? I.createElement("span", {
                    className: "tw-mb-2"
                }, I.createElement(ee.qX, {
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
                }, "these requirements"), " ", "to qualify for the transfer."), I.createElement(ee.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, I.createElement(ee.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement("p", null, "Current Owner"), I.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, I.createElement(ee.$1, {
                    className: "tw-mr-2",
                    icon: ke.nm
                }), null == d ? void 0 : d.displayName)), I.createElement(ee.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement("p", null, "New Owner"), I.createElement(ee.zx, {
                    className: "tw-max-w-[250px]",
                    onClick: function() {
                        return a()
                    },
                    disabled: o || b || y,
                    loading: o
                }, I.createElement(ee.$1, {
                    className: "tw-mr-2",
                    icon: Ie.faMagnifyingGlass
                }), "Search Group Members"))))))
            };
            Oe.propTypes = {
                group: ue().object.isRequired,
                onButtonClick: ue().func.isRequired,
                isLoading: ue().bool.isRequired
            };
            const Se = Oe;
            var je, Ae = "hasVerifiedEmail",
                Me = "targetCanOwnMoreGroups",
                Te = "targetIsGroupMember",
                Re = "hasVRCPlus",
                Pe = "groupNotMonetized",
                Le = (je = {}, (0, P.Z)(je, Ae, "Email address has not been verified"), (0, P.Z)(je, Me, "Already owns maximum nubmer of groups per user"), (0, P.Z)(je, Te, "Is not a valid member of the group"), (0, P.Z)(je, Re, "Does not have an active VRChat Plus subscription"), (0, P.Z)(je, Pe, "Group is not valid because it is monetized"), je);
            const qe = function(e) {
                var t, n = e.group,
                    r = e.validity,
                    l = e.prospectiveNewOwner,
                    a = e.onTransfer,
                    o = e.onCancel,
                    i = e.isOpen,
                    c = e.isTransferring,
                    s = (0, K.GR)(null == n ? void 0 : n.ownerId, {
                        skip: !n,
                        refetchOnMountOrArgChange: !0
                    }),
                    u = s.data,
                    m = s.isFetching,
                    d = s.isError,
                    p = s.error;
                return I.createElement(I.Fragment, null, I.createElement(ee.sm, {
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
                }, I.createElement(ne.Z, null)) : I.createElement("div", null, d && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == p || null === (t = p.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), !(null != r && r.valid) && (null == r ? void 0 : r.reasons) && I.createElement(ee.qX, {
                    type: "error",
                    title: "Oops, it seems the selected member does not meet the following requirement(s)"
                }, r.reasons.map((function(e) {
                    var t;
                    return I.createElement("p", null, "• ".concat(null !== (t = Le[e]) && void 0 !== t ? t : "Unknown Validity Reason"))
                }))), I.createElement(ee.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-mt-2"
                }, I.createElement("span", {
                    className: "tw-full-width tw-text-center"
                }, "Are you sure you want to transfer your group ownership?")), I.createElement(ee.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-bg-[#252a30] tw-px-8 tw-text-[16px] tw-rounded-lg tw-border-current tw-transition tw-ease-in-out tw-delay-150 tw-bg-[#252a30] tw-mt-2"
                }, I.createElement(ee.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "Current Owner"), I.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, I.createElement(ee.$1, {
                    className: "tw-mr-2",
                    icon: ke.nm
                }), null == u ? void 0 : u.displayName)), I.createElement(ee.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "New Owner"), (null == l ? void 0 : l.user) && I.createElement(ee.X2, {
                    className: "tw-flex tw-m-1 tw-font-bold gx-0 gap-1"
                }, I.createElement(ee.pw, {
                    width: 24,
                    style: {
                        maxWidth: "24px",
                        objectFit: "cover"
                    },
                    imageId: (0, ve.oQ)(l.user.thumbnailUrl || l.user.currentAvatarThumbnailImageUrl),
                    alt: l.user.displayName
                }), l.user.displayName))), I.createElement(ee.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-mt-2"
                }, I.createElement("span", {
                    className: "tw-full-width tw-text-center"
                }, "This cannot be undone once the transfer is complete.")))))
            };
            var Ue = n(34698),
                ze = n(58877),
                Ge = n(25402);
            const Fe = function(e) {
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
                    h = E[1],
                    b = I.useState(!0),
                    x = (0, l.Z)(b, 2),
                    y = x[0],
                    w = x[1],
                    Z = null != n ? n : [],
                    N = function() {
                        g(!0), w(!1)
                    },
                    C = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var t;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        (t = [].concat(Z))[o] = s, a(t), g(!1), h(s);
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
                    O = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var t;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        (t = [].concat(Z))[o] = "", a(t), g(!1), u(""), h("");
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
                        if ("" === n) return u(""), void w(!1);
                        try {
                            var r = new URL(n);
                            u(n), w("https:" !== r.protocol && "http:" !== r.protocol)
                        } catch (e) {
                            u(n), w(!0)
                        }
                    },
                    onKeyUp: function(e) {
                        13 === e.keyCode && !1 === y && C()
                    },
                    className: "form-control",
                    value: s,
                    maxLength: 1e3
                }), I.createElement("div", {
                    className: "input-group-append"
                }, I.createElement("span", {
                    className: "input-group-text",
                    id: "basic-addon1"
                }, I.createElement(Ge.QZ, {
                    url: s,
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                })))), I.createElement(Ue.Z, {
                    onClick: function() {
                        g(!1), u(v)
                    }
                }, "Cancel"), I.createElement(Ue.Z, {
                    onClick: C,
                    disabled: y,
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
                    onClick: N
                }, "Link"))) : I.createElement("div", null, I.createElement(ze.Z, {
                    className: "p-2 w-100 p-l-0"
                }, I.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "btn btn-outline-light",
                    style: {
                        width: "255px",
                        overflow: "hidden"
                    },
                    onClick: N
                }, Z[o]), I.createElement(Xe, {
                    className: "btn btn-outline-danger h-100 ratio-1x1",
                    "aria-label": "Close",
                    onClick: O
                }, I.createElement("span", {
                    "aria-hidden": "true"
                }, "×")))) : I.createElement("div", null)
            };
            var Xe = (0, a.Z)(Ue.Z, {
                    target: "e1a3rjxi0"
                })({
                    name: "1234s8l",
                    styles: "width:40px;max-width:40px"
                }),
                De = n(71421),
                _e = n(18461);
            var Je = function() {
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
                    h = function(e) {
                        return function(t) {
                            var n;
                            t.stopPropagation(), t.preventDefault(), null != E && null !== (n = E.filter((function(t) {
                                var n = t.key;
                                return (null == e ? void 0 : e.key) === n
                            }))) && void 0 !== n && n[0] ? v(null == E ? void 0 : E.filter((function(t) {
                                var n = t.key;
                                return (null == e ? void 0 : e.key) !== n
                            }))) : v([].concat((0, L.Z)(E), [e]))
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
                var b = I.useMemo((function() {
                    return i.length === E.length ? "View All" : "".concat(E.length, " selected")
                }), [i, E]);
                return I.createElement(We, {
                    className: "mb-2",
                    role: "radiogroup",
                    "aria-label": n.ariaLabel,
                    onMouseLeave: function() {
                        d && p(!1)
                    }
                }, I.createElement(Qe, {
                    disabled: a,
                    expanded: d
                }, I.createElement(Ke, {
                    type: "button",
                    "aria-label": "Expand Options",
                    disabled: a,
                    onClick: function(e) {
                        e.stopPropagation(), e.preventDefault(), p(!d)
                    }
                }, !!n && I.createElement(Ve, null, n.labelValue), I.createElement(Be, {
                    className: "tw-gap-2 tw-text-center tw-justify-center"
                }, b), I.createElement(M.Z, {
                    icon: De.eW,
                    color: "white",
                    className: "ms-3"
                })), d && i.length > 0 && I.createElement(et, {
                    className: "tw-px-[10px] tw-gap-1 tw-py-1"
                }, i.map((function(e, t) {
                    var n, r;
                    return I.createElement(_e.Z, {
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
                        onClick: h(e),
                        tabIndex: t,
                        label: null == e ? void 0 : e.label
                    })
                })))))
            };
            Je.propTypes = {
                labelProps: ue().shape({
                    ariaLabel: ue().string.isRequired,
                    labelValue: ue().string.isRequired
                }).isRequired,
                disabled: ue().bool.isRequired,
                options: ue().array.isRequired,
                onTriggerUpdate: ue().func
            };
            const $e = Je;
            var Be = (0, a.Z)("div", {
                    target: "e1476vl15"
                })({
                    name: "jyvlna",
                    styles: "display:flex;align-items:center;max-width:75%"
                }),
                Ve = (0, a.Z)("div", {
                    target: "e1476vl14"
                })({
                    name: "qcoia9",
                    styles: "font-size:0.8em;margin-right:10px;color:hsla(0, 0%, 100%, 0.6);white-space:nowrap;max-width:100%"
                }),
                We = (0, a.Z)("div", {
                    target: "e1476vl13"
                })({
                    name: "sss5sy",
                    styles: "display:flex;z-index:4;max-width:400px;min-width:200px"
                }),
                He = {
                    name: "4u0b5g",
                    styles: "border:hsl(0, 0%, 20%) solid 2px;background:hsl(0, 0%, 20%);color:hsl(0, 0%, 60%);&:hover{border:hsl(0, 0%, 20%) solid 2px;background:hsl(0, 0%, 20%);color:hsl(0, 0%, 60%);}"
                },
                Ye = {
                    name: "1ll5w29",
                    styles: "border-bottom-color:'#07343f'"
                },
                Qe = (0, a.Z)("div", {
                    target: "e1476vl12"
                })("text-align:center;background-color:#064b5c;padding:5px 11px 5px 11px;border:#064b5c solid 2px;color:#ffffff;border-radius:3px;transition:background-color 0.2s ease-in-out;position:relative;display:flex;flex:1;border-radius:", (function(e) {
                    return e.expanded ? "3px 3px 0 0" : 3
                }), "px;max-width:100%;&:hover{background-color:#064b5c;border-color:#086c84;}", (function(e) {
                    return e.expanded ? Ye : ""
                }), " ", (function(e) {
                    return e.disabled ? He : ""
                }), ";"),
                Ke = (0, a.Z)("button", {
                    target: "e1476vl11"
                })({
                    name: "118t6pa",
                    styles: "border:none;background:transparent;outline:none!important;display:flex;flex:1;flex-direction:row;align-items:center;justify-content:space-between;position:relative;max-width:100%"
                }),
                et = (0, a.Z)("div", {
                    target: "e1476vl10"
                })({
                    name: "1lt6ba7",
                    styles: "position:absolute;z-index:4;top:100%;left:-2px;width:calc(100% + 4px);background-color:#07343f;display:flex;flex-direction:column;border-radius:0 0 3px 3px;border:#086c84 solid 2px;border-top-width:0;text-align:left;max-width:calc(100% + 4px)"
                });
            const tt = function(e) {
                var t = e.log;
                return e.isLoading ? I.createElement(nt, {
                    className: "justify-content-center"
                }, I.createElement("div", {
                    className: "spinner-border"
                })) : I.createElement(nt, null, I.createElement(rt, null, de()(t.created_at).format("MM/DD/YYYY hh:mm A")), t.description)
            };
            var nt = (0, a.Z)("div", {
                    target: "evg8j501"
                })({
                    name: "kv8vyc",
                    styles: "background-color:#252a30;border-radius:12px;padding:8px;margin-bottom:8px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;transition:background-color 0.2s ease-in-out;:hover{background-color:#353c45;}"
                }),
                rt = (0, a.Z)("div", {
                    target: "evg8j500"
                })({
                    name: "hbayc1",
                    styles: "font-size:14px;font-weight:lighter;font-style:italic;margin-bottom:8px"
                });
            var lt = [{
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
            const at = function(e) {
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
                    h = v[0],
                    b = v[1],
                    x = I.useState([]),
                    y = (0, l.Z)(x, 2),
                    w = y[0],
                    Z = y[1],
                    k = I.useState([]),
                    N = (0, l.Z)(k, 2),
                    C = N[0],
                    O = N[1],
                    S = (0, ce.hg)(),
                    j = (0, l.Z)(S, 2),
                    A = j[0],
                    M = j[1],
                    T = M.data,
                    R = M.isFetching,
                    P = M.isError,
                    q = (0, ce.rw)({
                        groupId: n.id
                    }, {
                        skip: !n
                    }),
                    U = q.data,
                    z = q.isFetching,
                    G = q.isError;
                I.useEffect((function() {
                    O(w.map((function(e) {
                        return e.value
                    })))
                }), [w]), I.useEffect((function() {
                    if (U && 0 === h.length) {
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
                        b(e), 0 === w.length && Z(e.map((function(e) {
                            return e.value
                        })))
                    }
                    u < 0 ? m(0) : A({
                        groupId: n.id,
                        perPage: o,
                        offset: u,
                        eventTypes: C ? (0, L.Z)(C) : []
                    })
                }), [o, u, U, C, w]), I.useEffect((function() {
                    null != T && T.totalCount && f(T.totalCount)
                }), [T]);
                var F = I.createElement(it, null, I.createElement(ct, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u - o)
                    },
                    disabled: 0 === u
                }, I.createElement(ee.$1, {
                    icon: ae.A3
                })), I.createElement("span", null, "(", u, " - ", g < o + u ? g : o + u, ") / ", g), I.createElement(st, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u + o)
                    },
                    disabled: g < o + u
                }, I.createElement(ee.$1, {
                    icon: le._t
                })));
                return I.createElement("div", null, P && I.createElement(ee.qX, {
                    title: "Error",
                    type: "error",
                    className: "mb-2"
                }, "There was an error loading the audit log."), G && !z && I.createElement(ee.qX, {
                    title: "Error",
                    type: "error",
                    className: "mb-2"
                }, "There was an error loading the filterable audit log types."), I.createElement(ee.oI, null, I.createElement("h4", {
                    className: "text-center"
                }, "Audit Log")), I.createElement(ee.Ao, null, I.createElement(ee.X2, {
                    className: "tw-flex-row tw-justify-evenly"
                }, !!h.length && I.createElement($e, {
                    labelProps: {
                        ariaLabel: "LogTypes",
                        labelValue: "Filter Log Types: "
                    },
                    disabled: !n,
                    options: h,
                    onTriggerUpdate: function(e) {
                        return O(e)
                    }
                }), I.createElement(ot, {
                    label: "Items per-page",
                    onChange: i,
                    options: lt,
                    value: o,
                    className: "mb-2"
                })), F, I.createElement("div", {
                    className: "audit-log"
                }, (null !== (t = null == T ? void 0 : T.results) && void 0 !== t ? t : Array(o).fill({})).map((function(e, t) {
                    var n;
                    return I.createElement(tt, {
                        key: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "log-".concat(t),
                        log: e,
                        n: o,
                        offset: u,
                        isLoading: R
                    })
                }))), F))
            };
            var ot = (0, a.Z)(ee.Lt, {
                    target: "e88tm0e3"
                })({
                    name: "1lsto0t",
                    styles: "max-width:250px"
                }),
                it = (0, a.Z)("div", {
                    target: "e88tm0e2"
                })({
                    name: "1vtota4",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-bottom:8px"
                }),
                ct = (0, a.Z)(ee.zx, {
                    target: "e88tm0e1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                st = (0, a.Z)(ee.zx, {
                    target: "e88tm0e0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                ut = n(91054),
                mt = n(27149),
                dt = n(59895),
                pt = n(30776),
                gt = n(29104),
                ft = n(81362),
                Et = n(63221),
                vt = [{
                    label: "Visible",
                    value: Et.iI.VISIBLE
                }, {
                    label: "Friends Only",
                    value: Et.iI.FRIENDS
                }, {
                    label: "Hidden",
                    value: Et.iI.HIDDEN
                }];
            const ht = function(e) {
                var t, n, a, o, i = e.groupId,
                    c = (0, C.I0)(),
                    s = (0, O.s0)(),
                    u = (0, Q.XC)(),
                    m = u.data,
                    d = u.isLoading,
                    p = u.error,
                    g = u.isError,
                    f = I.useState(),
                    E = (0, l.Z)(f, 2),
                    v = E[0],
                    h = E[1],
                    b = I.useState(!0),
                    x = (0, l.Z)(b, 2),
                    y = x[0],
                    w = x[1],
                    Z = I.useState(!1),
                    N = (0, l.Z)(Z, 2),
                    S = N[0],
                    j = N[1],
                    A = (0, ce.r5)({
                        groupId: i
                    }, {
                        skip: !m.id
                    }),
                    M = A.data,
                    T = A.isLoading,
                    R = A.error,
                    P = A.isError,
                    L = (0, ce.xm)({
                        groupId: i,
                        userId: m.id
                    }, {
                        skip: !m.id
                    }),
                    q = L.data,
                    U = L.isLoading,
                    z = L.error,
                    G = L.isError;
                (0, I.useEffect)((function() {
                    if (q && M) {
                        M.privacy === Et.TW.DEFAULT && q.visibility !== v && h(q.visibility);
                        var e = (null == q ? void 0 : q.isSubscribedToAnnouncements) || (null == q ? void 0 : q.isSubscribedToPosts);
                        w(e)
                    }
                }), [M, q]);
                var F = d || T || U,
                    X = (null == M ? void 0 : M.ownerId) === (null == q ? void 0 : q.userId),
                    D = (0, ce.uX)(),
                    _ = (0, l.Z)(D, 2),
                    J = _[0],
                    B = _[1],
                    V = B.isLoading,
                    W = B.error,
                    H = B.isError,
                    K = B.isSuccess,
                    te = (0, ce.nm)(),
                    ne = (0, l.Z)(te, 2),
                    re = ne[0],
                    le = ne[1],
                    ae = le.isLoading,
                    oe = le.error,
                    ie = le.isError,
                    se = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return j(!1), e.next = 3, re({
                                            groupId: i,
                                            userId: m.id
                                        });
                                    case 3:
                                        e.sent.error || (c((0, Y.d)({
                                            title: "You left the group",
                                            icon: dt.u8,
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
                return g ? I.createElement(ft.Z, {
                    error: p,
                    statusCode: p.status
                }) : P ? I.createElement(ft.Z, {
                    error: R,
                    statusCode: R.status
                }) : G ? I.createElement(ft.Z, {
                    error: z,
                    statusCode: z.status
                }) : I.createElement(I.Fragment, null, I.createElement(ee.oI, null, I.createElement("h4", {
                    className: "text-center"
                }, "Membership Preferences")), I.createElement(ee.Ao, null, F ? I.createElement(ee.UU, {
                    height: "250px"
                }) : I.createElement(I.Fragment, null, K && I.createElement(ee.qX, {
                    type: "success",
                    title: "Updated preferences",
                    slim: !0
                }, "Your preferences were saved successfully"), H && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error updating preferences"
                }, W.status, " : ", null !== (t = null === (n = W.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : ""), M.privacy === Et.TW.DEFAULT && I.createElement($.Z, null, "Visibility ", I.createElement(ee.Lt, {
                    onChange: h,
                    value: v,
                    options: vt
                }), I.createElement("small", null, "Do you want everyone to see this group on your profile, just your friends to see it, or to keep it secret? This only affects your own profile.")), I.createElement("div", {
                    className: "my-2"
                }, I.createElement(gt.Z, {
                    label: "Subscribe to Posts",
                    value: "isSubscribedToPosts",
                    defaultChecked: y,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        w(t)
                    }
                }), I.createElement(pt.Z, null, "Tick this to hear all the latest news and goss from this group")), I.createElement(ee.zx, {
                    onClick: function() {
                        J({
                            groupId: i,
                            userId: m.id,
                            visibility: v,
                            isSubscribedToPosts: y
                        })
                    },
                    loading: V,
                    disabled: V
                }, I.createElement(ee.$1, {
                    icon: mt.r6
                }), " Save Preferences"))), I.createElement(ee.oI, {
                    className: "mt-2"
                }, I.createElement("h4", {
                    className: "text-center"
                }, "Leave Group")), I.createElement(ee.Ao, null, F ? I.createElement(ee.UU, {
                    height: "100px",
                    delay: 50
                }) : I.createElement(I.Fragment, null, ie && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error leaving group"
                }, oe.status, " : ", null !== (a = null === (o = oe.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : ""), I.createElement(ee.sm, {
                    headerText: "Leave Group",
                    bodyText: "Are you sure you want to leave this group?",
                    confirmText: "Yes, Leave Group",
                    confirmCallback: se,
                    cancelText: "Never Mind!",
                    cancelCallback: function() {
                        j(!1)
                    },
                    isOpen: S
                }), X ? I.createElement(ee.qX, {
                    type: "warning",
                    title: "You own this group!"
                }, "You can't leave your own group, but you can delete the group over in General settings.") : I.createElement("p", null, "This group not your thing anymore? No problem."), I.createElement(ee.zx, {
                    warning: !0,
                    onClick: function() {
                        j(!0)
                    },
                    loading: ae,
                    disabled: X || ae
                }, I.createElement(ee.$1, {
                    icon: ut.HE
                }), " Leave Group"))))
            };
            var bt = n(41145),
                xt = n(62228),
                yt = n(609),
                wt = n(16869),
                Zt = n(67978),
                kt = n(81780),
                Nt = n(33073),
                It = n(95896);

            function Ct(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ot(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ct(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ct(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var St = {
                id: "new",
                name: "",
                description: "",
                isSelfAssignable: !1,
                permissions: []
            };
            const jt = function(e) {
                var t, n, a, o, i, s, u = e.group,
                    m = e.changeRoleLocalOrder,
                    d = e.changeRoleOffset,
                    p = e.roleOffset,
                    g = e.isGroupOwner,
                    f = (0, O.s0)(),
                    E = (0, O.UO)(),
                    v = (0, I.useRef)(!0),
                    h = (0, ie.pc)(),
                    x = I.useMemo((function() {
                        var e;
                        return "new" === E.roleId ? Ot(Ot({}, St), {}, {
                            requiresPurchase: "paid" === E.newRoleType
                        }, "paid" === E.newRoleType && {
                            productPriceTokens: It.nk,
                            productDuration: 1,
                            productDurationType: "months"
                        }) : null == u || null === (e = u.roles) || void 0 === e ? void 0 : e.find((function(e) {
                            return e.id === E.roleId
                        }))
                    }), [u, E]),
                    y = I.useState({}),
                    w = (0, l.Z)(y, 2),
                    Z = w[0],
                    N = w[1],
                    C = I.useState({}),
                    A = (0, l.Z)(C, 2),
                    R = A[0],
                    U = A[1],
                    z = I.useState({}),
                    G = (0, l.Z)(z, 2),
                    F = G[0],
                    J = G[1],
                    B = I.useState(null != x && x.defaultRole ? "permissions" : "general"),
                    V = (0, l.Z)(B, 2),
                    W = V[0],
                    H = V[1],
                    Y = I.useState(null == x ? void 0 : x.requiresTwoFactor),
                    Q = (0, l.Z)(Y, 2),
                    K = Q[0],
                    te = Q[1],
                    ne = I.useState(null == x ? void 0 : x.isAddedOnJoin),
                    le = (0, l.Z)(ne, 2),
                    ae = le[0],
                    oe = le[1],
                    se = I.useState(null == x ? void 0 : x.isSelfAssignable),
                    ue = (0, l.Z)(se, 2),
                    me = ue[0],
                    de = ue[1],
                    pe = I.useState((null == u ? void 0 : u.joinState) === Et.wN.OPEN),
                    ge = (0, l.Z)(pe, 2),
                    fe = ge[0],
                    Ee = ge[1],
                    he = I.useState(!1),
                    be = (0, l.Z)(he, 2),
                    xe = be[0],
                    ye = be[1],
                    we = I.useState((null == x ? void 0 : x.permissions) || []),
                    Ze = (0, l.Z)(we, 2),
                    ke = Ze[0],
                    Ne = Ze[1],
                    Ie = I.useState(!1),
                    Ce = (0, l.Z)(Ie, 2),
                    Oe = Ce[0],
                    Se = Ce[1],
                    je = I.useState(null),
                    Ae = (0, l.Z)(je, 2),
                    Me = Ae[0],
                    Te = Ae[1],
                    Re = (0, ce.mt)({
                        groupId: u.id
                    }),
                    Pe = Re.data,
                    Le = Re.isLoading,
                    qe = Re.isError,
                    Ue = (0, ce.Pt)(),
                    ze = (0, l.Z)(Ue, 2),
                    Ge = ze[0],
                    Fe = ze[1],
                    Xe = Fe.isLoading,
                    De = Fe.isError,
                    _e = Fe.error,
                    Je = (0, ce.hE)(),
                    $e = (0, l.Z)(Je, 2),
                    Be = ($e[0], $e[1]),
                    Ve = Be.isLoading,
                    We = Be.isError,
                    He = Be.error,
                    Ye = (0, ce.ci)(),
                    Qe = (0, l.Z)(Ye, 2),
                    Ke = Qe[0],
                    et = Qe[1],
                    tt = (et.isLoading, et.isError, et.error, (0, ce.VF)()),
                    nt = (0, l.Z)(tt, 2),
                    rt = nt[0],
                    lt = nt[1],
                    at = lt.isLoading,
                    ot = lt.isError,
                    it = lt.error,
                    ct = (0, Zt.lZ)({
                        productId: null == x ? void 0 : x.productId
                    }, {
                        skip: !(null != x && x.productId),
                        refetchOnMountOrArgChange: !0
                    }),
                    st = ct.data,
                    ut = ct.isFetching,
                    dt = ct.isUninitialized,
                    ft = (0, wt.Ul)({
                        userId: null == u ? void 0 : u.ownerId,
                        groupId: null == u ? void 0 : u.id,
                        active: !0
                    }, {
                        skip: !u || !(null != x && x.productId),
                        refetchOnMountOrArgChange: !0
                    }),
                    vt = ft.data,
                    ht = void 0 === vt ? [] : vt,
                    Ct = ft.isFetching,
                    jt = ft.isUninitialized,
                    At = I.useMemo((function() {
                        var e;
                        return (null === (e = jt ? [] : ht) || void 0 === e ? void 0 : e.filter((function(e) {
                            var t, n = e.id,
                                r = e.active,
                                l = e.archived;
                            return r && !l && !dt && (null == st || null === (t = st.parentListings) || void 0 === t ? void 0 : t.includes(n))
                        }))) || []
                    }), [st, dt, ht, jt]),
                    Mt = Xe || Ve || at || Le || ut || Ct,
                    Tt = (null == u ? void 0 : u.joinState) === Et.wN.OPEN ? "Your group is already set to Free Join, so enabling this option won’t have any effect. Subscribers will still join automatically." : "When enabled, anyone can purchase this role and join the group, regardless of the group’s join rules. This option overrides standard join settings.";
                (0, I.useEffect)((function() {
                    if (st) {
                        if (ye(st.groupAccessRemove), (null == u ? void 0 : u.joinState) === Et.wN.OPEN) return Ee(!0), void U(Ot(Ot({}, R), {}, {
                            groupAccess: !0
                        }));
                        Ee(st.groupAccess)
                    }
                }), [st]);
                var Rt = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = {};
                    "new" === (null == x ? void 0 : x.id) && (t = Ot({}, x)), e || (te(null == x ? void 0 : x.requiresTwoFactor), oe(null == x ? void 0 : x.isAddedOnJoin), de(null == x ? void 0 : x.isSelfAssignable), Ne((null == x ? void 0 : x.permissions) || [])), d(0), N(t), U({})
                };
                (0, I.useEffect)((function() {
                    Rt(), H(null != x && x.defaultRole ? "permissions" : "general")
                }), [u, E]), (0, I.useEffect)((function() {
                    v.current ? v.current = !1 : ((null == x ? void 0 : x.requiresTwoFactor) !== K && N(Ot(Ot({}, Z), {}, {
                        requiresTwoFactor: K
                    })), (null == x ? void 0 : x.isAddedOnJoin) !== ae && N(Ot(Ot({}, Z), {}, {
                        isAddedOnJoin: ae
                    })), (null == x ? void 0 : x.isSelfAssignable) !== me && N(Ot(Ot({}, Z), {}, {
                        isSelfAssignable: me
                    })), (null == x ? void 0 : x.permissions) !== ke && N(Ot(Ot({}, Z), {}, {
                        permissions: ke
                    })))
                }), [K, ae, me, ke]), (0, I.useEffect)((function() {
                    0 !== p && N(Ot(Ot({}, Z), {}, {
                        order: p + x.order
                    }))
                }), [p]);
                var Pt = (0, ie._b)(Pe),
                    Lt = I.useMemo((function() {
                        return (0, ve.Ps)({
                            permissionName: Me,
                            permissionsMap: Pt
                        })
                    }), [Me, Pt]);
                if (!x || Le || qe) return null;
                var qt = function(e) {
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
                        N(Ot(Ot({}, Z), {}, (0, P.Z)({}, n, r))), J(Ot(Ot({}, F), {}, (0, P.Z)({}, n, e.target.checkValidity())))
                    },
                    Ut = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var t, n;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("new" !== (t = Ot({}, Z)).id) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 4, Ge({
                                            groupId: u.id,
                                            data: t
                                        }).unwrap();
                                    case 4:
                                        !(n = e.sent).error && null != n && n.id && f("../roles/".concat(null == n ? void 0 : n.id)), e.next = 13;
                                        break;
                                    case 8:
                                        if (!(Object.keys(Z).length > 0)) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 11, Ke({
                                            groupId: u.id,
                                            roleId: x.id,
                                            productId: st.id,
                                            productData: R,
                                            roleData: t
                                        }).unwrap();
                                    case 11:
                                        e.sent.error || Rt(!0);
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
                    zt = function() {
                        var e = (0, r.Z)(k().mark((function e(t) {
                            return k().wrap((function(e) {
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
                                        return e.prev = 2, e.next = 5, rt({
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
                                        Se(!1), f("../roles"), e.next = 15;
                                        break;
                                    case 14:
                                        Se(!0);
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
                    Gt = 0 === x.order,
                    Ft = "new" === x.id,
                    Xt = x.requiresPurchase && !g,
                    Dt = T({
                        groupMember: null == u ? void 0 : u.myMember,
                        permission: "group-default-role-manage"
                    }),
                    _t = T({
                        groupMember: null == u ? void 0 : u.myMember,
                        permission: "group-roles-assign"
                    }),
                    Jt = x.defaultRole && !Dt,
                    $t = !x.requiresPurchase && !x.defaultRole && !Gt,
                    Bt = !x.defaultRole && !Gt,
                    Vt = Bt && !Ft;
                return I.createElement("div", null, We && I.createElement(ee.qX, {
                    title: "Error updating role",
                    type: "error"
                }, "Failed to update role: ", null == He || null === (t = He.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), De && I.createElement(ee.qX, {
                    title: "Error creating role",
                    type: "error"
                }, "Failed to create role: ", null == _e || null === (n = _e.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), I.createElement(j.Z, {
                    isOpen: Oe
                }, I.createElement(ee.oI, {
                    className: "text-center"
                }, I.createElement("h4", null, "Are you sure?")), I.createElement(ee.Ao, null, I.createElement(_.Z, null, ot && I.createElement(ee.qX, {
                    title: "Error deleting role",
                    type: "error"
                }, "Failed to delete role: ", null !== (a = null == it || null === (o = it.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : "Unexpected error occurred"), I.createElement("p", null, "This will delete the role and all members with this role will be demoted to the lowest role. This action cannot be undone.")), I.createElement("div", {
                    className: "d-flex flex-row justify-content-md-center"
                }, I.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        zt(!0)
                    },
                    loading: at,
                    expand: !0
                }, I.createElement(ee.$1, {
                    icon: q.$
                }), " Yes, Delete"), " ", I.createElement(ee.zx, {
                    onClick: function() {
                        Se(!1)
                    },
                    disabled: at,
                    expand: !0
                }, "Cancel")))), null == x ? I.createElement("div", null, I.createElement("p", null, "Pick a role to edit.")) : I.createElement("div", null, Ft ? I.createElement("h6", {
                    className: "text-center"
                }, "New", x.requiresPurchase && " Paid", " Role") : I.createElement("h6", {
                    className: "text-center"
                }, Xt ? "Viewing" : "Editing", " - ", x.name), function() {
                    var e;
                    if (null == x || !x.createdAt || !x.requiresPurchase || At.length) return null;
                    var t = "activate its associated subscription";
                    return I.createElement(ee.qX, {
                        type: "info",
                        title: "No Active Subscriptions"
                    }, "Before people can buy this role, ", g ? "you'll" : "the group owner will", " need to", " ", g && !dt && null != st && null !== (e = st.parentListings) && void 0 !== e && e.length ? I.createElement(S.rU, {
                        to: "/home/marketplace/storefront/subscriptions"
                    }, t) : t, " ", "in ", g ? "your" : "their", " Store. ", g ? "You" : "The Group Owner", " can also give the product and listing their own images, descriptions and other details from there.")
                }(), !x.defaultRole && I.createElement(D.Z, null, I.createElement(re.Z, {
                    tabs: [{
                        name: "General",
                        id: "general",
                        icon: c.b7,
                        condition: !(null != x && x.defaultRole)
                    }, {
                        name: "Permissions",
                        id: "permissions",
                        icon: yt.by,
                        condition: !0
                    }],
                    selected: W,
                    onChange: function(e) {
                        H(e)
                    }
                })), I.createElement(kt.Z, {
                    activeTab: W
                }, I.createElement(Nt.Z, {
                    tabId: "general"
                }, Vt && !Xt && I.createElement(I.Fragment, null, I.createElement(D.Z, null, I.createElement("h6", {
                    className: "text-center"
                }, "Change role order"), I.createElement("div", {
                    className: "d-flex flex-row justify-content-md-center"
                }, I.createElement(ee.zx, {
                    onClick: function() {
                        m({
                            offset: -1,
                            roleId: x.id
                        })
                    },
                    expand: !0
                }, I.createElement(ee.$1, {
                    icon: xt.mT
                }), " Move Up"), " ", I.createElement(ee.zx, {
                    onClick: function() {
                        m({
                            offset: 1,
                            roleId: x.id
                        })
                    },
                    expand: !0
                }, I.createElement(ee.$1, {
                    icon: bt.pt
                }), " Move Down"))), " ", " "), I.createElement(D.Z, {
                    className: "mb-2"
                }, I.createElement(X.Z, null, I.createElement(ee.II, {
                    type: "text",
                    name: "name",
                    value: null != Z.name ? Z.name : x.name,
                    onChange: qt,
                    maxLength: 64,
                    required: !0,
                    disabled: Xt || x.defaultRole,
                    placeholder: "Enter Role's Name"
                }), !1 === F.name && I.createElement($.Z, null, "Must be between 1 and 64 characters."))), I.createElement(D.Z, {
                    className: "mb-3"
                }, I.createElement(X.Z, null, I.createElement(ee.gx, {
                    type: "textarea",
                    name: "description",
                    value: null != Z.description ? Z.description : x.description,
                    onChange: qt,
                    maxLength: 256,
                    disabled: Xt || x.defaultRole,
                    placeholder: "Enter Role's Description",
                    inputStyle: {
                        height: "100px"
                    }
                }), !1 === F.description && I.createElement($.Z, null, "Must be 256 characters or less."))), Bt && !x.requiresPurchase && _t && I.createElement(D.Z, {
                    className: "my-2"
                }, I.createElement(gt.Z, {
                    label: "Assign On Join",
                    value: "isAddedOnJoin",
                    defaultChecked: null != Z.isAddedOnJoin ? Z.isAddedOnJoin : x.isAddedOnJoin,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        oe(t)
                    }
                }), I.createElement(pt.Z, null, "If enabled, new members will be assigned this role when they join the group. This will not affect existing members.")), $t && I.createElement(D.Z, {
                    className: "my-2"
                }, I.createElement(gt.Z, {
                    label: "Self Assignable",
                    value: "isSelfAssignable",
                    defaultChecked: me,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        de(t)
                    }
                }), I.createElement(pt.Z, null, "Allows members of the group to assign this role to themselves.")), I.createElement(D.Z, {
                    className: "my-3"
                }, I.createElement(gt.Z, {
                    label: "Require Two-Factor Authentication",
                    value: "requiresTwoFactor",
                    defaultChecked: K,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        return te(t)
                    }
                }), I.createElement(pt.Z, null, "Requires members to have 2FA before permissions apply.")), x.requiresPurchase && I.createElement(I.Fragment, null, I.createElement(D.Z, {
                    className: "my-2"
                }, I.createElement(gt.Z, {
                    label: "Enable Free Join for Subscribers",
                    value: "productGroupAccess",
                    defaultChecked: fe,
                    onChangeCallback: function(e) {
                        var t, n, r, l = e.checked;
                        t = l, n = Ot(Ot({}, Z), {}, {
                            productGroupAccess: t
                        }), r = Ot(Ot({}, R), {}, {
                            groupAccess: t
                        }), t || (n.productGroupAccessRemove = void 0, r.groupAccessRemove = !1, ye(!1)), Ee(t), N(n), U(r)
                    },
                    disabled: (null == u ? void 0 : u.joinState) === Et.wN.OPEN
                }), I.createElement(pt.Z, null, Tt)), (null != Z.productGroupAccess ? Z.productGroupAccess : fe) && I.createElement(D.Z, {
                    className: "my-2"
                }, I.createElement(gt.Z, {
                    label: "Remove Members After Expiration",
                    value: "productGroupAccessRemove",
                    defaultChecked: null != Z.productGroupAccessRemove ? Z.productGroupAccessRemove : xe,
                    onChangeCallback: function(e) {
                        var t, n = e.checked;
                        ye(t = n), N(Ot(Ot({}, Z), {}, {
                            productGroupAccessRemove: t
                        })), U(Ot(Ot({}, R), {}, {
                            groupAccessRemove: t
                        }))
                    }
                }), I.createElement(pt.Z, null, "If enabled, group members with this role are removed from the group entirely when their subscription ends. Note that this will remove any member whose subscription ends, whether they bought their way in or not."))), x.requiresPurchase && Ft && I.createElement(I.Fragment, null, I.createElement(D.Z, null, I.createElement(X.Z, null, I.createElement($.Z, {
                    htmlFor: "productPriceTokens"
                }, "Credits", "forevers" === x.productDurationType ? "" : " per ".concat(1 === x.productDuration ? x.productDurationType.replace(/s$/, "") : "".concat(x.productDuration, " ").concat(x.productDurationType)))), I.createElement(X.Z, null, I.createElement(ee.II, {
                    type: "number",
                    name: "productPriceTokens",
                    value: null != Z.productPriceTokens ? Z.productPriceTokens : x.productPriceTokens,
                    onChange: qt,
                    required: !0,
                    step: "1",
                    min: It.nk,
                    max: It.A1
                }), !1 === F.productPriceTokens && I.createElement($.Z, null, "Must be a whole number between ", I.createElement(ee.b5, null), It.nk.toLocaleString(), " and ", I.createElement(ee.b5, null), It.A1.toLocaleString(), ".")))), x.productId && I.createElement("p", null, I.createElement("small", null, g ? "You" : "The Group Owner", " can manage details and subscription behaviour of this role's", " ", I.createElement(S.rU, {
                    to: "/home/marketplace/storefront/products#".concat(x.productId)
                }, "associated product"), !dt && null != st && null !== (i = st.parentListings) && void 0 !== i && i.length ? I.createElement(I.Fragment, null, ", and the details, price and availability of the product's", " ", I.createElement(S.rU, {
                    to: "/home/marketplace/storefront/listings#".concat(st.parentListings[0])
                }, "associated listing"), " ") : " ", g ? "in your Store" : "in their Store", "."))), I.createElement(Nt.Z, {
                    tabId: "permissions"
                }, qe && I.createElement(ee.qX, {
                    title: "Error",
                    type: "error"
                }, "There was an error loading permissions."), (null == x ? void 0 : x.defaultRole) && I.createElement(I.Fragment, null, I.createElement("p", null, x.description), I.createElement("hr", null)), Gt || Jt ? I.createElement("p", null, "You can't edit the ", Gt ? "Group Owner" : "default", " role.", " ", Gt ? "It must always have all" : "You lack the required", " permissions.") : I.createElement("div", null, Pe.filter((function(e) {
                    var t;
                    return h || (!x.requiresPurchase || !e.isManagementPermission) && e.allowedToAdd && (0 === (null == u ? void 0 : u.memberRank) || (null == u || null === (t = u.myMember) || void 0 === t ? void 0 : t.permissions.includes(e.name)))
                })).map((function(e) {
                    var t = e.name,
                        n = Pt[t];
                    return I.createElement("div", {
                        key: n.name,
                        className: "mb-2"
                    }, I.createElement(gt.Z, {
                        label: n.displayName,
                        value: n.name,
                        defaultChecked: ke.includes(n.name),
                        disabled: x.requiresPurchase && !g,
                        onChangeCallback: function(e) {
                            var t = e.checked;
                            ! function(e, t) {
                                var n;
                                if (t) {
                                    var r = (0, ve.QZ)({
                                        permissionName: e,
                                        permissionsMap: Pt
                                    });
                                    return Ne([].concat((0, L.Z)(ke), [e], (0, L.Z)(r)))
                                }
                                var l = Pt[e];
                                if (null !== (n = l.computedDependedOnBy) && void 0 !== n && n.size && ke.some((function(e) {
                                        return l.computedDependedOnBy.has(e)
                                    }))) return Te(e);
                                Ne(ke.filter((function(t) {
                                    return t !== e
                                })))
                            }(n.name, t)
                        }
                    }), (n.help || n.dependsOn) && I.createElement(pt.Z, null, n.help, n.help && n.dependsOn && " ", n.dependsOn && I.createElement(I.Fragment, null, "Requires", " ", (0, L.Z)(n.dependsOn).map((function(e) {
                        return "“".concat(Pt[e].displayName || e, "”")
                    })).join(", "), ".")))
                }))))), !Jt && (Xt ? I.createElement("p", null, I.createElement("small", null, "Only the Group Owner can edit paid roles.")) : I.createElement("div", {
                    className: "d-flex flex-row align-content-center mt-1\n                  ".concat(Ft || Gt || x.defaultRole ? "justify-content-end" : "justify-content-between")
                }, !Ft && !Gt && !x.defaultRole && I.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        zt(!1)
                    },
                    disabled: Mt
                }, I.createElement(M.Z, {
                    icon: q.$
                }), " Delete"), I.createElement("div", {
                    className: "d-flex flex-row"
                }, I.createElement(ee.zx, {
                    neutral: !0,
                    onClick: function() {
                        Rt()
                    },
                    disabled: Mt || 0 === Object.keys(Z).length
                }, I.createElement(M.Z, {
                    icon: b.NB
                }), " ", Ft ? "Clear" : "Cancel"), " ", I.createElement(ee.zx, {
                    loading: Mt && !at,
                    disabled: Mt || 0 === Object.keys(Z).length || Object.values(F).includes(!1),
                    onClick: Ut
                }, I.createElement(M.Z, {
                    icon: mt.r6
                }), " Save"))))), I.createElement(ee.sm, {
                    isOpen: !!Me,
                    confirmCallback: function() {
                        return Ne(ke.filter((function(e) {
                            return e !== Me && !Lt.has(e)
                        }))), void Te(null)
                    },
                    cancelCallback: function() {
                        return Te(null)
                    },
                    headerText: "Role Permission Dependencies",
                    confirmText: "Turn Off",
                    cancelText: "Go Back"
                }, I.createElement("div", null, I.createElement("p", null, "Turning off “", null === (s = Pt[Me]) || void 0 === s ? void 0 : s.displayName, "” will also turn off permissions that currently require it:"), I.createElement("ul", null, (0, L.Z)(Lt).filter((function(e) {
                    return ke.includes(e)
                })).map((function(e) {
                    var t = Pt[e];
                    return I.createElement("li", {
                        key: e
                    }, "“", t.displayName, "”")
                }))), I.createElement("strong", null, "Are you sure you want to turn this off?"))))
            };
            var At = n(93682),
                Mt = n(3163),
                Tt = n(50249);
            const Rt = function(e) {
                var t, n = e.group,
                    r = e.roleLocalOffset,
                    l = e.isGroupOwner,
                    a = (0, ie.pc)(),
                    o = (0, O.TH)(),
                    i = (0, O.UO)(),
                    c = I.useMemo((function() {
                        return "new" !== i.roleId && i.roleId
                    }), [i]),
                    s = (0, Q.q7)().data,
                    u = void 0 === s ? [] : s,
                    m = u.includes("permission-creator-preview"),
                    d = u.includes("permission-can-sell-products"),
                    p = (0, L.Z)(null == n ? void 0 : n.roles).sort((function(e, t) {
                        var n = e.order,
                            l = t.order;
                        return e.id === c ? (n += r) === t.order && (r > 0 ? n += 1 : n -= 1) : t.id === c && (l += r) === e.order && (r > 0 ? l += 1 : l -= 1), n < l ? -1 : 1
                    })) || [],
                    g = p.length >= Et.Mw,
                    f = null == n || null === (t = n.myMember) || void 0 === t ? void 0 : t.permissions,
                    E = p.map((function(e, t) {
                        var r, l = [],
                            o = null;
                        0 === e.order ? (l.push(I.createElement(Pt, {
                            key: "management-header"
                        }, "Management Roles")), o = I.createElement(I.Fragment, null, I.createElement(ee.$1, {
                            icon: ke.nm,
                            title: "Management Role"
                        }), " ")) : e.permissions.includes("group-instance-moderate") ? o = I.createElement(I.Fragment, null, I.createElement(ee.$1, {
                            icon: Mt.U7,
                            title: "Instance Moderator Role"
                        }), " ") : e.requiresPurchase ? o = I.createElement(I.Fragment, null, I.createElement(ee.$1, {
                            icon: Tt.Z,
                            title: "Paid Role"
                        }), " ") : e.defaultRole && (l.push(I.createElement(Pt, {
                            key: "default-header"
                        }, "Default Role")), o = I.createElement(I.Fragment, null, I.createElement(ee.$1, {
                            icon: At.Z3,
                            title: "Default Role"
                        }), " ")), e.isManagementRole || e.defaultRole || null === (r = p[t - 1]) || void 0 === r || !r.isManagementRole || l.push(I.createElement(Pt, {
                            key: "member-header"
                        }, "Member Roles"));
                        var i = (0 === (null == n ? void 0 : n.memberRank) || "new" === e.id || e.order > (null == n ? void 0 : n.memberRank)) && (f.includes("*") || 0 === e.permissions.filter((function(e) {
                            return !f.includes(e)
                        })).length);
                        return l.push(a || i ? I.createElement(Ut, null, I.createElement(Gt, {
                            key: e.id,
                            to: "/home/group/".concat(n.id, "/settings/roles/").concat(e.id),
                            className: e.id === c ? "selected" : ""
                        }, o, e.name + ("new" === e.id ? " (unsaved new role)" : ""))) : I.createElement(qt, {
                            key: e.id
                        }, o, e.name + ("new" === e.id ? " (unsaved new role)" : ""))), l
                    }));
                return I.createElement(I.Fragment, null, g && I.createElement(A.Z, {
                    role: "alert",
                    color: "warning"
                }, "This group has reached maximum number of roles"), I.createElement(Lt, null, E, I.createElement("li", null, I.createElement(zt, {
                    to: "/home/group/".concat(n.id, "/settings/roles/new"),
                    end: !0,
                    disabled: g
                }, "Create Role")), l && m && I.createElement("li", null, d ? I.createElement(zt, {
                    to: "/home/group/".concat(n.id, "/settings/roles/new/paid"),
                    end: !0,
                    disabled: g
                }, "Create Paid Role") : I.createElement(ee.qX, {
                    slim: !0
                }, "Want to create a paid role? Find out more and sign up", " ", I.createElement(S.rU, {
                    to: "/home/marketplace/wallet",
                    state: {
                        redirectTo: o.pathname
                    }
                }, "in your Wallet"), "."))))
            };
            var Pt = (0, a.Z)("h5", {
                    target: "e1hiny755"
                })({
                    name: "1gttmjq",
                    styles: "margin:0;padding:0;font-size:1.2rem;font-weight:bold"
                }),
                Lt = (0, a.Z)("ul", {
                    target: "e1hiny754"
                })({
                    name: "wghgqz",
                    styles: "list-style-type:none;padding:0;margin-bottom:0"
                }),
                qt = (0, a.Z)("li", {
                    target: "e1hiny753"
                })({
                    name: "12guyxn",
                    styles: "padding:8px;margin-bottom:8px;border-radius:4px;background-color:#141519;opacity:0.3"
                }),
                Ut = (0, a.Z)("li", {
                    target: "e1hiny752"
                })({
                    name: "1hcx8jb",
                    styles: "padding:0"
                }),
                zt = (0, a.Z)(S.OL, {
                    target: "e1hiny751"
                })({
                    name: "1ekamc",
                    styles: "display:inline-block;padding:5px;margin-bottom:8px;border-radius:4px;width:100%;color:inherit;background-color:#064b5c;border:#064b5c solid 2px;text-align:center;flex:1;:hover{background-color:#064b5c;border-color:#086c84;text-decoration:none;}&.active{background-color:#454b54;}"
                }),
                Gt = (0, a.Z)(zt, {
                    target: "e1hiny750"
                })({
                    name: "hlgyoz",
                    styles: "background-color:transparent;border-color:transparent;text-align:left;:hover{background-color:#282b31;border-color:#282b31;}&.active{background-color:#454b54;border-color:#454b54;}"
                }),
                Ft = n(98185);
            const Xt = function(e) {
                var t = e.group,
                    n = (0, ie.pc)(),
                    r = (0, O.TH)(),
                    a = I.useState(0),
                    o = (0, l.Z)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = (0, C.v9)((function(e) {
                        var t;
                        return null === (t = e.group) || void 0 === t || null === (t = t.role) || void 0 === t ? void 0 : t.error
                    })),
                    u = (0, Q.XC)(),
                    m = u.data,
                    d = (u.isLoading, u.isError, u.error, (null == t ? void 0 : t.ownerId) === (null == m ? void 0 : m.id));
                I.useEffect((function() {
                    c(0)
                }), [r]);
                return I.createElement(Ft.Z, {
                    loading: !t.roles
                }, s && I.createElement(ee.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: s.message
                }), I.createElement(ee.oI, null, I.createElement("h4", {
                    className: "text-center"
                }, "Roles")), I.createElement(ee.Ao, null, I.createElement(Dt, null, I.createElement(_t, null, I.createElement(Rt, {
                    group: t,
                    roleLocalOffset: i,
                    isGroupOwner: d
                })), I.createElement(jt, {
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
            var Dt = (0, a.Z)(ee.X2, {
                    target: "eaqb3yw1"
                })({
                    name: "ikx90a",
                    styles: "display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:stretch;>*{flex:1;}"
                }),
                _t = (0, a.Z)("div", {
                    target: "eaqb3yw0"
                })({
                    name: "1jwryq8",
                    styles: "margin-right:15px"
                });

            function Jt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function $t(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Jt(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Bt = I.lazy((function() {
                    return Promise.all([n.e(8744), n.e(2150), n.e(4444), n.e(8890), n.e(9908), n.e(2045)]).then(n.bind(n, 52045))
                })),
                Vt = [{
                    label: "Open",
                    value: Et.wN.OPEN
                }, {
                    label: "Closed",
                    value: Et.wN.CLOSED
                }, {
                    label: "Invite Only",
                    value: Et.wN.INVITE
                }, {
                    label: "Request Invite",
                    value: Et.wN.REQUEST
                }];
            const Wt = function(e) {
                var t, n, a, o, i, c, s, u, m, d, p, g, f, E, v, h = e.group,
                    b = (0, Q.IB)().data,
                    x = null !== (t = null == h ? void 0 : h.transferTargetId) && void 0 !== t ? t : null,
                    Z = (0, C.I0)(),
                    S = (0, O.s0)(),
                    A = I.useState({
                        name: h.name,
                        shortCode: h.shortCode,
                        description: h.description,
                        isSearchable: h.isSearchable,
                        joinState: h.joinState,
                        language: h.languages,
                        rules: h.rules
                    }),
                    le = (0, l.Z)(A, 2),
                    ae = le[0],
                    oe = le[1],
                    ie = I.useState(!1),
                    se = (0, l.Z)(ie, 2),
                    ue = se[0],
                    me = se[1],
                    de = I.useState(!1),
                    pe = (0, l.Z)(de, 2),
                    ge = pe[0],
                    fe = pe[1],
                    Ee = I.useState(!1),
                    ve = (0, l.Z)(Ee, 2),
                    he = ve[0],
                    be = ve[1],
                    xe = I.useState(!1),
                    ye = (0, l.Z)(xe, 2),
                    we = ye[0],
                    ke = ye[1],
                    Ie = I.useState(null),
                    Ce = (0, l.Z)(Ie, 2),
                    Oe = Ce[0],
                    je = Ce[1],
                    Ae = I.useState(!1),
                    Me = (0, l.Z)(Ae, 2),
                    Te = Me[0],
                    Re = Me[1],
                    Pe = I.useState(!1),
                    Le = (0, l.Z)(Pe, 2),
                    Ue = Le[0],
                    ze = Le[1],
                    Ge = I.useState(null),
                    Xe = (0, l.Z)(Ge, 2),
                    De = Xe[0],
                    _e = Xe[1],
                    Je = I.useState(!1),
                    $e = (0, l.Z)(Je, 2),
                    Be = $e[0],
                    Ve = $e[1],
                    We = I.useState(!1),
                    He = (0, l.Z)(We, 2),
                    Ye = He[0],
                    Qe = He[1],
                    Ke = I.useState(!1),
                    et = (0, l.Z)(Ke, 2),
                    tt = et[0],
                    nt = et[1],
                    rt = I.useState(null),
                    lt = (0, l.Z)(rt, 2),
                    ot = lt[0],
                    it = lt[1],
                    ct = I.useState(null),
                    st = (0, l.Z)(ct, 2),
                    ut = (st[0], st[1]),
                    mt = I.useState(!1),
                    dt = (0, l.Z)(mt, 2),
                    pt = dt[0],
                    gt = dt[1],
                    ft = I.useState(null !== (n = h.languages) && void 0 !== n ? n : []),
                    Et = (0, l.Z)(ft, 2),
                    vt = Et[0],
                    bt = Et[1],
                    xt = I.useState(null !== (a = h.links) && void 0 !== a ? a : []),
                    yt = (0, l.Z)(xt, 2),
                    wt = yt[0],
                    Zt = yt[1],
                    kt = I.useState(null),
                    Nt = (0, l.Z)(kt, 2),
                    It = Nt[0],
                    Ct = Nt[1],
                    Ot = I.useState(null),
                    St = (0, l.Z)(Ot, 2),
                    jt = (St[0], St[1]),
                    At = (0, C.v9)((function(e) {
                        return e.currentUser.isMod
                    })),
                    Mt = (null == h ? void 0 : h.ownerId) === (null == b ? void 0 : b.id),
                    Tt = (0, ce.mA)(),
                    Rt = (0, l.Z)(Tt, 2),
                    Pt = Rt[0],
                    Lt = Rt[1],
                    qt = Lt.isError,
                    Ut = Lt.isLoading,
                    zt = Lt.error,
                    Gt = (0, ce.CL)(),
                    Ft = (0, l.Z)(Gt, 2),
                    Dt = Ft[0],
                    _t = Ft[1],
                    Jt = _t.isError,
                    Wt = _t.isLoading,
                    Yt = _t.error,
                    Qt = _t.isSuccess,
                    Kt = (0, Q.q7)().data,
                    en = void 0 === Kt ? [] : Kt,
                    tn = (0, W.y)().data,
                    nn = null !== (o = null == tn || null === (i = tn.constants) || void 0 === i || null === (i = i.LANGUAGE) || void 0 === i ? void 0 : i.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== o ? o : V.O,
                    rn = [{
                        value: "none",
                        label: "none"
                    }].concat((0, L.Z)(Object.keys(nn).map((function(e) {
                        return {
                            value: e,
                            label: nn[e]
                        }
                    })))),
                    ln = (null == De || null === (c = De.user) || void 0 === c ? void 0 : c.id) && (null == h ? void 0 : h.id) && null === x,
                    an = (0, ce.ek)({
                        groupId: null == h ? void 0 : h.id,
                        transferTargetId: null == De || null === (s = De.user) || void 0 === s ? void 0 : s.id
                    }, {
                        skip: !ln,
                        refetchOnMountOrArgChange: !0
                    }),
                    on = an.data,
                    cn = an.isFetching,
                    sn = an.isError,
                    un = an.error,
                    mn = null !== x,
                    dn = (0, K.GR)(x, {
                        skip: !mn,
                        refetchOnMountOrArgChange: !0
                    }),
                    pn = dn.data,
                    gn = dn.isFetching,
                    fn = dn.isError,
                    En = dn.error,
                    vn = (0, ce.HT)(),
                    hn = (0, l.Z)(vn, 2),
                    bn = hn[0],
                    xn = hn[1],
                    yn = (xn.data, xn.isFetching),
                    wn = xn.isError,
                    Zn = xn.error,
                    kn = (0, ce.rq)(),
                    Nn = (0, l.Z)(kn, 2),
                    In = Nn[0],
                    Cn = Nn[1],
                    On = (Cn.data, Cn.isFetching),
                    Sn = Cn.isError,
                    jn = Cn.error;
                I.useEffect((function() {
                    Qt ? S("/home/groups") : (Ve(!1), me(!1))
                }), [Wt]), I.useEffect((function() {
                    if (he && De && cn && ke(!0), !cn && he && on && !sn) {
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
                        }(on.requirements);
                        je(e), be(!1), fe(!1), Re(!0)
                    }
                    var t;
                    !cn && he && sn && (ke(!1), be(!1), _e(null), Z((0, Y.d)({
                        title: "Error Validating Group Transfer",
                        icon: y.eH,
                        message: "".concat(null == un || null === (t = un.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                        color: "error",
                        timeout: 3e3
                    })))
                }), [he, De, cn, sn, on]), I.useEffect((function() {
                    var e;
                    (gn || fn || !pn || _e({
                        user: pn
                    }), !gn && fn) && Z((0, Y.d)({
                        title: "Error Fetching New Owner Data",
                        icon: y.eH,
                        message: "".concat(null == En || null === (e = En.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message),
                        color: "error",
                        timeout: 3e3
                    }))
                }), [gn, pn, fn]);
                var An = function(e) {
                        var t = e.target.name,
                            n = "checkbox" === e.target.getAttribute("type") ? e.target.checked : e.target.value;
                        oe($t($t({}, ae), {}, (0, P.Z)({}, t, "shortCode" === t ? n.toUpperCase() : n)))
                    },
                    Mn = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        ot && (ae.bannerId = ot), It && (ae.iconId = It), Pt({
                                            groupId: h.id,
                                            data: $t({}, ae)
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
                    Tn = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var t, n, r;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return ze(!0), e.prev = 1, e.next = 4, bn({
                                            groupId: h.id,
                                            transferTargetId: null == De || null === (t = De.user) || void 0 === t ? void 0 : t.id
                                        }).unwrap();
                                    case 4:
                                        wn && (ze(!1), Re(!1), _e(null), Z((0, Y.d)({
                                            title: "Group Transfer Error",
                                            icon: y.eH,
                                            message: "".concat(null == Zn || null === (n = Zn.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 6e3
                                        }))), wn || Z((0, Y.d)({
                                            title: "Group Transfer Initiated",
                                            icon: w.f8,
                                            color: "success",
                                            timeout: 6e3
                                        })), ze(!1), Re(!1), e.next = 16;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(1), ze(!1), Re(!1), _e(null), Z((0, Y.d)({
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
                        var e = (0, r.Z)(k().mark((function e() {
                            var t, n, r;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return Qe(!0), e.prev = 1, e.next = 4, In({
                                            groupId: h.id,
                                            transferTargetId: null == De || null === (t = De.user) || void 0 === t ? void 0 : t.id
                                        }).unwrap();
                                    case 4:
                                        Qe(!1), Sn && Z((0, Y.d)({
                                            title: "Cancel Group Transfer Error",
                                            icon: y.eH,
                                            message: "".concat(null == jn || null === (n = jn.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 3e3
                                        })), Sn || Z((0, Y.d)({
                                            title: "Delete Group Transfer Success",
                                            icon: w.f8,
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(1), Qe(!1), Z((0, Y.d)({
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
                    Pn = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        Ve(!0), Dt({
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
                    Ln = function(e) {
                        Zt(e), oe($t($t({}, ae), {}, {
                            links: e
                        }))
                    },
                    qn = function(e, t) {
                        var n = (0, L.Z)(vt);
                        n[e] = t, n = n.filter((function(e) {
                            return "none" !== e
                        })), bt(n), oe($t($t({}, ae), {}, {
                            languages: n
                        }))
                    },
                    Un = en.includes("permission-user-gallery"),
                    zn = en.includes("permission-user-icons"),
                    Gn = Ut || Wt || yn || On;
                return I.createElement("div", null, I.createElement(X.Z, {
                    className: "mt-4"
                }, I.createElement(re.Z, {
                    tabs: [{
                        name: "General",
                        to: "/home/group/".concat(h.id, "/settings"),
                        end: !0,
                        icon: F.Kb,
                        condition: At || T({
                            groupMember: null == h ? void 0 : h.myMember,
                            permission: "group-data-manage"
                        })
                    }, {
                        name: "My Membership",
                        to: At || T({
                            groupMember: null == h ? void 0 : h.myMember,
                            permission: "group-data-manage"
                        }) ? "me" : "/home/group/".concat(h.id, "/settings"),
                        icon: G.xK,
                        condition: null == h ? void 0 : h.myMember
                    }, {
                        name: "Roles",
                        to: "roles",
                        icon: z.aC,
                        condition: At || T({
                            groupMember: null == h ? void 0 : h.myMember,
                            permission: "group-roles-manage"
                        })
                    }, {
                        name: "Logs",
                        to: "logs",
                        icon: U.tx,
                        condition: At || T({
                            groupMember: null == h ? void 0 : h.myMember,
                            permission: "group-audit-view"
                        })
                    }]
                })), I.createElement(O.Z5, null, I.createElement(O.AW, {
                    path: "/",
                    element: At || T({
                        groupMember: null == h ? void 0 : h.myMember,
                        permission: "group-data-manage"
                    }) ? I.createElement(I.Fragment, null, I.createElement(D.Z, null, I.createElement(j.Z, {
                        isOpen: tt,
                        className: (0, N.iv)({
                            name: "1ul0gzp",
                            styles: "max-width:1500px!important"
                        })
                    }, I.createElement(_.Z, null, I.createElement(Bt, {
                        isSelector: !0,
                        selectedCallback: function(e, t) {
                            it(e), ut(t), nt(!1)
                        },
                        selectedId: null != ot ? ot : "",
                        activeTab: "photos"
                    })), I.createElement(J.Z, null, I.createElement(ee.zx, {
                        onClick: function() {
                            nt(!1), Z((0, H.b9)())
                        }
                    }, "Cancel"))), I.createElement(j.Z, {
                        isOpen: pt,
                        className: (0, N.iv)({
                            name: "1ul0gzp",
                            styles: "max-width:1500px!important"
                        })
                    }, I.createElement(_.Z, null, I.createElement(Bt, {
                        isSelector: !0,
                        selectedCallback: function(e, t) {
                            Ct(e), jt(t), gt(!1)
                        },
                        selectedId: null != It ? It : "",
                        activeTab: "icons"
                    })), I.createElement(J.Z, null, I.createElement(ee.zx, {
                        onClick: function() {
                            gt(!1), Z((0, H.LC)())
                        }
                    }, "Cancel"))), I.createElement(X.Z, null, qt ? I.createElement(ee.qX, {
                        type: "error",
                        title: "An error occurred",
                        message: (null == zt || null === (u = zt.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message) || "Something went wrong updating the group"
                    }) : null, I.createElement(ee.oI, null, I.createElement("h4", {
                        className: "text-center"
                    }, "General")), I.createElement(ee.Ao, null, I.createElement("div", null, I.createElement(D.Z, {
                        className: "mb-1"
                    }, I.createElement(X.Z, null, I.createElement($.Z, {
                        for: "name"
                    }, "Name")), I.createElement(X.Z, null, I.createElement(ee.II, {
                        type: "text",
                        name: "name",
                        className: "full-width",
                        value: ae.name,
                        onChange: An
                    }))), I.createElement(D.Z, {
                        className: "mb-1"
                    }, I.createElement(X.Z, null, I.createElement($.Z, {
                        for: "shortCode"
                    }, "Short Code (3-6 letters/numbers)")), I.createElement(X.Z, null, I.createElement(ee.II, {
                        type: "text",
                        name: "shortCode",
                        className: "full-width",
                        value: ae.shortCode,
                        maxLength: 6,
                        onChange: An
                    }))), I.createElement(D.Z, {
                        className: "mb-1"
                    }, I.createElement(X.Z, null, I.createElement($.Z, {
                        for: "description"
                    }, "Description")), I.createElement(X.Z, null, I.createElement(Ht, {
                        name: "description",
                        className: "full-width",
                        value: null !== (m = ae.description) && void 0 !== m ? m : "",
                        onChange: An
                    }))), I.createElement(D.Z, null, I.createElement(X.Z, null, I.createElement($.Z, {
                        for: "description"
                    }, "Rules")), I.createElement(X.Z, null, I.createElement(Ht, {
                        name: "rules",
                        className: "full-width",
                        value: null !== (d = ae.rules) && void 0 !== d ? d : "",
                        onChange: An
                    }))), I.createElement("div", null, !1, I.createElement(D.Z, {
                        className: "mt-2"
                    }, I.createElement(X.Z, null, I.createElement($.Z, {
                        for: "isJoinable"
                    }, "Open to New Members")), I.createElement(X.Z, null, I.createElement(ee.Lt, {
                        onChange: function(e) {
                            oe($t($t({}, ae), {}, {
                                joinState: e
                            }))
                        },
                        value: null !== (p = ae.joinState) && void 0 !== p ? p : "",
                        name: "joinState",
                        options: Vt
                    }))), I.createElement("br", null), I.createElement(D.Z, {
                        className: "mt-2"
                    }, I.createElement(X.Z, null, I.createElement($.Z, {
                        for: "languages"
                    }, "Languages")), I.createElement(X.Z, null, vt.length >= 0 && I.createElement(ee.Lt, {
                        onChange: function(e) {
                            qn(0, e)
                        },
                        value: null !== (g = null == vt ? void 0 : vt[0]) && void 0 !== g ? g : "none",
                        name: "languages",
                        options: rn,
                        className: "mb-1"
                    }), vt.length >= 1 && I.createElement(ee.Lt, {
                        onChange: function(e) {
                            qn(1, e)
                        },
                        value: null !== (f = null == vt ? void 0 : vt[1]) && void 0 !== f ? f : "none",
                        name: "languages",
                        options: rn,
                        className: "mb-1"
                    }), vt.length >= 2 && I.createElement(ee.Lt, {
                        onChange: function(e) {
                            qn(2, e)
                        },
                        value: null !== (E = null == vt ? void 0 : vt[2]) && void 0 !== E ? E : "none",
                        name: "languages",
                        options: rn,
                        className: "mb-1"
                    }))), I.createElement("br", null), I.createElement(D.Z, {
                        className: "mt-2"
                    }, I.createElement(X.Z, null, I.createElement($.Z, {
                        for: "links"
                    }, "Group Links")), I.createElement(X.Z, null, I.createElement(Fe, {
                        groupBioLinks: wt,
                        callback: Ln,
                        index: 0
                    }), I.createElement(Fe, {
                        groupBioLinks: wt,
                        callback: Ln,
                        index: 1
                    }), I.createElement(Fe, {
                        groupBioLinks: wt,
                        callback: Ln,
                        index: 2
                    }))), I.createElement("br", null), I.createElement(D.Z, null, I.createElement(X.Z, null), I.createElement(X.Z, null, ot && I.createElement("div", null, I.createElement("span", null, "Replacing banner with: ", ot), I.createElement("br", null), I.createElement(ee.zx, {
                        onClick: function() {
                            it(null), ut(null)
                        }
                    }, "Clear banner selection")), It && I.createElement("div", null, I.createElement("span", null, "Replacing icon with: ", It), I.createElement("br", null), I.createElement(ee.zx, {
                        onClick: function() {
                            jt(null), Ct(null)
                        }
                    }, "Clear icon selection")))), I.createElement("br", null), I.createElement(D.Z, null, I.createElement(X.Z, null), I.createElement(X.Z, null, Un && I.createElement(ee.zx, {
                        color: "primary",
                        onClick: function() {
                            nt(!0)
                        }
                    }, "Update Group Banner"), " ", zn && I.createElement(ee.zx, {
                        color: "primary",
                        onClick: function() {
                            gt(!0)
                        }
                    }, "Update Group Icon")))), I.createElement(D.Z, {
                        className: "mt-4"
                    }, I.createElement(ee.zx, {
                        neutral: !0,
                        onClick: Mn,
                        disabled: Gn,
                        loading: Gn
                    }, "Save")))))), Mt && !x && I.createElement(I.Fragment, null, I.createElement(Ze, {
                        isOpen: ge,
                        group: h,
                        cancelCallback: function() {
                            return fe(!1)
                        },
                        memberSelectCallback: function(e) {
                            ! function(e) {
                                _e(e), be(!0)
                            }(e)
                        },
                        isGroupMemberOnly: !0,
                        isSelecting: we
                    }), (null == De ? void 0 : De.user) && Te && I.createElement(qe, {
                        group: h,
                        validity: Oe,
                        prospectiveNewOwner: De,
                        onTransfer: function() {
                            return Tn()
                        },
                        onCancel: function() {
                            return Re(!1)
                        },
                        isOpen: Te,
                        isTransferring: Ue
                    }), I.createElement(Se, {
                        group: h,
                        onButtonClick: function() {
                            return fe(!0)
                        },
                        isLoading: Gn || !1
                    })), Mt && x && I.createElement(Ne, {
                        group: h,
                        onClickCallback: function() {
                            return Rn()
                        },
                        isDeleting: Ye || !1
                    }), Mt && I.createElement(I.Fragment, null, Jt ? I.createElement(ee.qX, {
                        type: "error",
                        title: "Could not delete group",
                        message: (null == Yt || null === (v = Yt.data) || void 0 === v || null === (v = v.error) || void 0 === v ? void 0 : v.message) || "Something went wrong deleting the group"
                    }) : null, I.createElement(ee.oI, {
                        className: "mt-2"
                    }, I.createElement("h4", {
                        className: "text-center"
                    }, "Delete Group")), I.createElement(ee.Ao, null, I.createElement("p", null, "You can delete this group as long as it has no other members. This cannot be undone."), I.createElement(j.Z, {
                        isOpen: ue
                    }, I.createElement(B.Z, {
                        close: I.createElement(te.Z, {
                            onClick: function() {
                                me(!1)
                            }
                        })
                    }, I.createElement("h4", null, "Delete Group?")), I.createElement(_.Z, {
                        className: (0, N.iv)({
                            name: "1bpq7li",
                            styles: "padding:30px;padding-top:0"
                        })
                    }, Be ? I.createElement("div", {
                        className: "full-width text-center"
                    }, I.createElement(ne.Z, null)) : I.createElement("div", {
                        className: (0, N.iv)({
                            name: "pc0kie",
                            styles: ">*{margin-top:15px;}"
                        })
                    }, I.createElement(D.Z, null, I.createElement("span", {
                        className: "full-width text-center"
                    }, "Hey! This can't be undone! Only do this if you ", I.createElement("strong", null, "KNOW"), " what you're doing!")), I.createElement(D.Z, null, I.createElement(ee.zx, {
                        onClick: Pn,
                        danger: !0,
                        className: "full-width"
                    }, "DELETE IT!")), I.createElement(D.Z, null, I.createElement(ee.zx, {
                        className: "full-width",
                        onClick: function() {
                            me(!1)
                        }
                    }, "Get me outta here!"))))), I.createElement(X.Z, null, I.createElement(ee.zx, {
                        danger: !0,
                        onClick: function() {
                            me(!0)
                        },
                        disabled: Gn,
                        loading: Gn
                    }, I.createElement(M.Z, {
                        icon: q.$
                    }), " Delete Group"))))) : I.createElement(ht, {
                        groupId: null == h ? void 0 : h.id
                    })
                }), I.createElement(O.AW, {
                    path: "/me",
                    element: null != h && h.myMember ? I.createElement(ht, {
                        groupId: null == h ? void 0 : h.id
                    }) : I.createElement(R.Z, {
                        to: ".."
                    })
                }), I.createElement(O.AW, {
                    path: "/roles/:roleId?/:newRoleType?",
                    element: At || T({
                        groupMember: null == h ? void 0 : h.myMember,
                        permission: "group-roles-manage"
                    }) ? I.createElement(Xt, {
                        group: h
                    }) : I.createElement(R.Z, {
                        to: ".."
                    })
                }), I.createElement(O.AW, {
                    path: "/logs",
                    element: At || T({
                        groupMember: null == h ? void 0 : h.myMember,
                        permission: "group-audit-view"
                    }) ? I.createElement(at, {
                        group: h
                    }) : I.createElement(R.Z, {
                        to: ".."
                    })
                })))
            };
            var Ht = (0, a.Z)(ee.gx, {
                    target: "e3uj5bu0"
                })({
                    name: "1vp1ylf",
                    styles: ">textarea{height:200px;}"
                }),
                Yt = n(50347);
            const Qt = function(e) {
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
                    h = E.currentAvatarThumbnailImageUrl,
                    b = E.displayName;
                return I.createElement(Kt, null, I.createElement(Yt.Z, {
                    image: v || h,
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
                }), I.createElement(en, null, n && I.createElement("span", null, I.createElement(M.Z, {
                    icon: ke.nm,
                    width: 25
                }), " "), I.createElement("h4", null, b)))
            };
            var Kt = (0, a.Z)("div", {
                    target: "e1ml2klq1"
                })({
                    name: "9flrez",
                    styles: "position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;>div:first-of-type{margin:0;border-bottom-right-radius:0;border-bottom-left-radius:0;}"
                }),
                en = (0, a.Z)("div", {
                    target: "e1ml2klq0"
                })({
                    name: "7foox8",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:center;border:4px solid #252a30;background-color:#252a30;text-align:center;width:100%;border-bottom-right-radius:8px;border-bottom-left-radius:8px"
                }),
                tn = n(27003),
                nn = n(53359);

            function rn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ln(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? rn(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const an = function(e) {
                var t, n, r, a, o, c, s = e.groupMember,
                    u = e.onEditFinished,
                    m = void 0 === u ? function() {} : u,
                    d = e.closeCallback,
                    p = void 0 === d ? function() {} : d,
                    g = e.memberRank,
                    f = e.memberListPage,
                    E = I.useState(!1),
                    v = (0, l.Z)(E, 2),
                    h = v[0],
                    b = v[1],
                    x = I.useState(!1),
                    y = (0, l.Z)(x, 2),
                    w = y[0],
                    Z = y[1],
                    k = I.useState({}),
                    N = (0, l.Z)(k, 2),
                    C = N[0],
                    O = N[1],
                    S = (0, ce.r5)({
                        groupId: s.groupId
                    }),
                    j = S.data,
                    A = S.isLoading,
                    R = S.isError,
                    L = S.error,
                    q = (0, ce.xm)({
                        groupId: s.groupId,
                        userId: s.userId
                    }),
                    U = q.data,
                    z = q.isLoading,
                    G = q.isError,
                    F = q.error,
                    X = (0, ce.uX)(),
                    D = (0, l.Z)(X, 2),
                    _ = D[0],
                    J = (D[1].isLoading, (0, ce.dl)()),
                    B = (0, l.Z)(J, 2),
                    V = B[0],
                    W = (B[1].isLoading, (0, ce.LA)()),
                    H = (0, l.Z)(W, 2),
                    Y = H[0],
                    Q = (H[1].isLoading, (0, ce.FW)()),
                    K = (0, l.Z)(Q, 2),
                    te = K[0],
                    ne = (K[1].isLoading, (0, ce.l5)()),
                    re = (0, l.Z)(ne, 2),
                    le = re[0],
                    ae = (re[1].isLoading, (0, ie.pc)()),
                    oe = A || z,
                    se = G || R;
                if (I.useEffect((function() {
                        m()
                    }), []), se) return I.createElement(I.Fragment, null, I.createElement(ee.oI, null, I.createElement("h4", null, "Managing Member")), I.createElement(ee.Ao, null, I.createElement("div", null, I.createElement("div", {
                    className: "text-center mb-4"
                }, I.createElement(M.Z, {
                    icon: nn.faTriangleExclamation,
                    size: "xl"
                })), I.createElement("h4", {
                    className: "text-center mb-4"
                }, "We have encountered a problem."), L && I.createElement("p", {
                    className: "text-center text-danger"
                }, null == L || null === (o = L.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message), F && I.createElement("p", {
                    className: "text-center text-danger"
                }, null == F || null === (c = F.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message))));
                if (oe) return null;
                var ue = function() {
                        b(!h)
                    },
                    me = function() {
                        Z(!w)
                    };
                if (null == U) return I.createElement("div", null);
                var de = T({
                        groupMember: null == j ? void 0 : j.myMember,
                        permission: "group-members-manage"
                    }),
                    pe = T({
                        groupMember: null == j ? void 0 : j.myMember,
                        permission: "group-roles-assign"
                    }),
                    ge = T({
                        groupMember: null == j ? void 0 : j.myMember,
                        permission: "group-bans-manage"
                    }),
                    fe = (null == j || null === (t = j.myMember) || void 0 === t ? void 0 : t.id) === U.id,
                    Ee = null != C.managerNotes ? C.managerNotes : U.managerNotes,
                    ve = (null == U ? void 0 : U.roleIds) || [],
                    he = ve.map((function(e) {
                        var t = j.roles.find((function(t) {
                                return t.id === e
                            })),
                            n = (null == t ? void 0 : t.order) > (null == j ? void 0 : j.memberRank) && ((null == t ? void 0 : t.isSelfAssignable) && 0 !== (null == t ? void 0 : t.order) || pe);
                        return t ? I.createElement(I.Fragment, null, I.createElement(un, {
                            key: t.id,
                            roleid: t.id,
                            canInteract: n,
                            onClick: function() {
                                n && function(e) {
                                    j.roles.find((function(t) {
                                        return t.id === e
                                    })) && le({
                                        groupId: U.groupId,
                                        userId: U.userId,
                                        roleId: e
                                    })
                                }(t.id)
                            }
                        }, t.name)) : null
                    })),
                    be = j.roles.filter((function(e) {
                        return !ve.includes(e.id) && (0 !== (null == e ? void 0 : e.order) && ((null == e || !e.requiresPurchase) && ((null == e || !e.defaultRole) && (!(!pe && !ae) || !(!fe || !e.isSelfAssignable)))))
                    })).map((function(e) {
                        var t = (null == e ? void 0 : e.order) > (null == j ? void 0 : j.memberRank) && ((null == e ? void 0 : e.isSelfAssignable) && 0 !== (null == e ? void 0 : e.order) || pe);
                        return I.createElement(un, {
                            key: e.id,
                            roleid: e.id,
                            canInteract: t,
                            onClick: function() {
                                var n;
                                t && (n = e.id, j.roles.find((function(e) {
                                    return e.id === n
                                })) && te({
                                    groupId: U.groupId,
                                    userId: U.userId,
                                    roleId: n
                                }))
                            }
                        }, e.name)
                    }));
                return I.createElement(Ft.Z, {
                    loading: oe
                }, I.createElement(ee.oI, null, I.createElement("h4", null, "Managing ", null == s || null === (n = s.user) || void 0 === n ? void 0 : n.displayName)), I.createElement(ee.Ao, null, w && I.createElement("div", null, I.createElement("h4", {
                    className: "text-center mb-4"
                }, "Are you sure you want to kick ", null == U || null === (r = U.user) || void 0 === r ? void 0 : r.displayName, "?!?!"), I.createElement(ee.X2, null, I.createElement(ee.zx, {
                    warning: !0,
                    onClick: function() {
                        me(), Y({
                            groupId: U.groupId,
                            userId: U.userId,
                            fromPage: f
                        }), p()
                    },
                    expand: !0
                }, I.createElement(ee.$1, {
                    icon: tn.uM
                }), " Get 'em outta here!"), " ", I.createElement(ee.zx, {
                    neutral: !0,
                    onClick: me,
                    expand: !0
                }, "Cancel"))), h && I.createElement("div", null, I.createElement("h4", {
                    className: "text-center mb-4"
                }, "Are you sure you want to ban ", null == U || null === (a = U.user) || void 0 === a ? void 0 : a.displayName, "?!?!"), I.createElement(ee.X2, null, I.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        ue(), V({
                            groupId: U.groupId,
                            userId: U.userId,
                            fromPage: f
                        }), p()
                    },
                    expand: !0
                }, I.createElement(ee.$1, {
                    icon: i.JH
                }), " And stay out!"), " ", I.createElement(ee.zx, {
                    neutral: !0,
                    onClick: ue,
                    expand: !0
                }, "Cancel"))), !(w || h) && I.createElement(I.Fragment, null, (pe || ae || fe) && I.createElement(on, null, I.createElement(cn, null, I.createElement("h6", null, "Available Roles"), I.createElement(sn, null, be)), I.createElement(mn, null, I.createElement("h6", null, "Assigned Roles"), I.createElement(dn, null, he))), I.createElement(ee.X2, null, (de || ae) && I.createElement("div", {
                    className: "setting mb-2 flex-1"
                }, I.createElement($.Z, null, "Notes"), I.createElement(ee.gx, {
                    name: "managerNotes",
                    className: "notes-input full-width",
                    value: Ee,
                    onChange: function(e) {
                        var t = e.target.name,
                            n = "checkbox" === e.target.getAttribute("type") ? e.target.checked : e.target.value;
                        O(ln(ln({}, C), {}, (0, P.Z)({}, t, n)))
                    }
                }))), I.createElement(ee.X2, null, I.createElement(ee.zx, {
                    expand: !0,
                    color: "primary",
                    onClick: function() {
                        ! function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = ln(ln({}, C), e);
                            Object.keys(t).length > 0 && _(ln({
                                groupId: U.groupId,
                                userId: U.userId
                            }, t)), p()
                        }()
                    }
                }, I.createElement(ee.$1, {
                    icon: mt.r6
                }), " Save"), " ", I.createElement(ee.zx, {
                    expand: !0,
                    neutral: !0,
                    onClick: p
                }, "Close"), ((null == j ? void 0 : j.memberRank) < g && de || ae) && I.createElement(I.Fragment, null, " ", I.createElement(ee.zx, {
                    expand: !0,
                    warning: !0,
                    onClick: me
                }, I.createElement(M.Z, {
                    icon: tn.uM
                }), "  Kick"), " ", (ge || ae) && I.createElement(ee.zx, {
                    expand: !0,
                    danger: !0,
                    onClick: ue
                }, I.createElement(M.Z, {
                    icon: i.JH
                }), "  Ban"))))))
            };
            var on = (0, a.Z)("div", {
                    target: "emzwbrv5"
                })({
                    name: "sh46e2",
                    styles: "display:flex;flex-direction:row;align-items:start;justify-content:space-around;margin-bottom:15px"
                }),
                cn = (0, a.Z)("div", {
                    target: "emzwbrv4"
                })({
                    name: "1fx61ax",
                    styles: "display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;margin-right:10px"
                }),
                sn = (0, a.Z)("ul", {
                    target: "emzwbrv3"
                })({
                    name: "1uhpukn",
                    styles: "list-style-type:none;padding:0;margin:0;width:100%;max-height:200px;height:200px;overflow-y:auto;overflow-x:hidden;background:#0d0d10;border-radius:5px"
                }),
                un = (0, a.Z)("li", {
                    target: "emzwbrv2"
                })("padding:8px;border-radius:4px;", (function(e) {
                    return !e.canInteract && "\n    background-color: #0d0d10;\n    opacity: 0.2;\n    "
                }), " &.not-a-role{background-color:unset;}&:hover{", (function(e) {
                    return e.canInteract && "\n        background-color: #282b31;\n        cursor: pointer;\n    "
                }), ";}"),
                mn = (0, a.Z)("div", {
                    target: "emzwbrv1"
                })({
                    name: "d50b5r",
                    styles: "display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;margin-left:10px"
                }),
                dn = (0, a.Z)("ul", {
                    target: "emzwbrv0"
                })({
                    name: "1uhpukn",
                    styles: "list-style-type:none;padding:0;margin:0;width:100%;max-height:200px;height:200px;overflow-y:auto;overflow-x:hidden;background:#0d0d10;border-radius:5px"
                }),
                pn = n(54610),
                gn = n(38653),
                fn = function(e) {
                    var t = e.user,
                        n = void 0 === t ? null : t,
                        a = e.groupId,
                        o = (0, C.I0)(),
                        c = (0, I.useState)(!0),
                        s = (0, l.Z)(c, 2),
                        u = s[0],
                        m = s[1],
                        d = (0, ce.Rx)(),
                        p = (0, l.Z)(d, 2),
                        g = p[0],
                        f = p[1].isLoading,
                        E = (0, ce.dl)(),
                        v = (0, l.Z)(E, 2),
                        h = v[0],
                        b = v[1].isLoading;
                    if (null === n) return null;
                    var x = function() {
                            var e = (0, r.Z)(k().mark((function e() {
                                var t, r;
                                return k().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, h({
                                                groupId: a,
                                                userId: n.id
                                            }).unwrap();
                                        case 3:
                                            o((0, Y.d)({
                                                icon: w.f8,
                                                message: "".concat(n.displayName, " is banned!"),
                                                color: "success",
                                                timeout: 3e3
                                            })), m(!1), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), o((0, Y.d)({
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
                        Z = function() {
                            var e = (0, r.Z)(k().mark((function e() {
                                var t, r;
                                return k().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, g({
                                                groupId: a,
                                                userId: n.id
                                            }).unwrap();
                                        case 3:
                                            o((0, Y.d)({
                                                icon: w.f8,
                                                message: "".concat(n.displayName, " is un-banned!"),
                                                color: "success",
                                                timeout: 3e3
                                            })), m(!0), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), o((0, Y.d)({
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
                    return I.createElement(oe.Wm, {
                        className: "flex-row my-1"
                    }, I.createElement("div", {
                        className: "container-fluid p-0"
                    }, I.createElement(D.Z, null, I.createElement(X.Z, {
                        xs: 12,
                        sm: 2,
                        className: "pe-0"
                    }, I.createElement(S.rU, {
                        to: "/home/user/".concat(n.id),
                        title: n.displayName,
                        target: "_blank"
                    }, I.createElement(oe.D2, {
                        image: (null == n ? void 0 : n.iconUrl) || (null == n ? void 0 : n.thumbnailUrl) || (null == n ? void 0 : n.userIcon) || (null == n ? void 0 : n.currentAvatarThumbnailImageUrl)
                    }))), I.createElement(X.Z, null, I.createElement(pn.Z, {
                        className: "d-flex flex-row justify-content-between py-1"
                    }, I.createElement("div", {
                        className: "container p-0"
                    }, I.createElement(D.Z, null, I.createElement(X.Z, {
                        xs: 12,
                        sm: 7,
                        className: "p-1"
                    }, I.createElement(S.rU, {
                        to: "/home/user/".concat(n.id),
                        title: n.displayName,
                        target: "_blank"
                    }, I.createElement(oe.Hz, {
                        tag: "h5"
                    }, n.displayName)), I.createElement(gn.Z, {
                        className: "mb-2 text-muted text-truncate tw-capitalize",
                        tag: "h6"
                    }, n.status)), I.createElement(X.Z, null, I.createElement("div", {
                        className: "tw-flex tw-col tw-justify-end"
                    }, I.createElement("div", {
                        className: "tw-justify-end"
                    }, I.createElement(ee.zx, {
                        onClick: u ? x : Z,
                        disabled: b || f,
                        loading: b || f,
                        className: "tw-w-fit tw-px-4"
                    }, I.createElement(ee.$1, {
                        width: 20,
                        icon: i.JH
                    }), u ? " Ban" : " Unban")))))))))))
                };
            fn.propTypes = {
                user: ue().object,
                groupId: ue().string.isRequired
            };
            const En = fn;
            var vn = n(7371),
                hn = n(73104),
                bn = function(e) {
                    var t = e.member,
                        n = void 0 === t ? null : t,
                        r = e.groupRoles,
                        l = e.memberEditCallback;
                    if (null === n) return null;
                    var a = n.user;
                    return I.createElement(oe.Wm, {
                        className: "flex-row my-1"
                    }, I.createElement("div", {
                        className: "container-fluid p-0"
                    }, I.createElement(D.Z, null, I.createElement(X.Z, {
                        xs: 12,
                        sm: 2,
                        className: "pe-0"
                    }, I.createElement(S.rU, {
                        to: "/home/user/".concat(a.id),
                        title: a.displayName,
                        target: "_blank"
                    }, I.createElement(oe.D2, {
                        image: a.iconUrl || a.thumbnailUrl
                    }))), I.createElement(X.Z, null, I.createElement(pn.Z, {
                        className: "d-flex flex-row justify-content-between py-1"
                    }, I.createElement("div", {
                        className: "container p-0"
                    }, I.createElement(D.Z, null, I.createElement(X.Z, {
                        xs: 12,
                        sm: 7,
                        className: "p-1"
                    }, I.createElement(S.rU, {
                        to: "/home/user/".concat(a.id),
                        title: a.displayName,
                        target: "_blank"
                    }, I.createElement(oe.Hz, {
                        tag: "h5"
                    }, a.displayName)), I.createElement(gn.Z, {
                        className: "mb-2 text-muted text-truncate",
                        tag: "h6"
                    }, "Joined ", de()(n.joinedAt).fromNow()), I.createElement(hn.Z, {
                        className: "text-truncate text-secondary"
                    }, (0, ve.wz)({
                        member: n,
                        groupRoles: r
                    }).join(", "))), I.createElement(X.Z, null, I.createElement(oe.$, null, I.createElement(ee.zx, {
                        onClick: function() {
                            return l(n, (0, ve.H)({
                                member: n,
                                groupRoles: r
                            }), null)
                        }
                    }, I.createElement(ee.$1, {
                        width: 20,
                        icon: vn.Iw
                    })))))))))))
                };
            bn.propTypes = {
                member: ue().object.isRequired,
                groupRoles: ue().array.isRequired,
                memberEditCallback: ue().func.isRequired
            };
            const xn = bn;
            var yn = function(e) {
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
                    h = v[0],
                    b = v[1],
                    x = (0, ie.Nr)(g);
                (0, I.useEffect)((function() {
                    setTimeout((function() {
                        o && null != m && m.current && m.current.focus()
                    }), 300)
                }), [o, m]), (0, I.useEffect)((function() {
                    b(1)
                }), [g]), (0, I.useEffect)((function() {
                    f("")
                }), [o]);
                var y = (0, ce.Vc)({
                        groupId: a
                    }, {
                        skip: !s
                    }),
                    w = y.data,
                    Z = y.isSuccess,
                    k = y.isError,
                    N = y.error,
                    C = (0, ce.Pi)({
                        groupId: a,
                        pageValue: h,
                        searchTerm: x,
                        n: 25
                    }, {
                        skip: "" === x || !o || x.length < 3 || !s
                    }),
                    O = C.data,
                    S = C.error,
                    j = C.isError,
                    A = C.isFetching,
                    M = C.isSuccess,
                    T = (0, K.hi)({
                        pageValue: h,
                        searchTerm: x,
                        n: 25
                    }, {
                        skip: "" === x || !o || x.length < 3 || s
                    }),
                    R = T.data,
                    P = T.error,
                    L = T.isError,
                    q = T.isFetching,
                    U = T.isSuccess;
                return I.createElement(oe.Xv, {
                    role: "dialog",
                    isOpen: o,
                    toggle: i,
                    keyboard: !0,
                    autoFocus: !1
                }, I.createElement(oe.eb, {
                    tag: "h4",
                    close: I.createElement(te.Z, {
                        onClick: i
                    }),
                    toggle: i
                }, s ? "Group Members Search" : "Users Search"), I.createElement(oe.vc, null, I.createElement(oe.T_, null, I.createElement(ee.II, {
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
                }, "Something went wrong with the search, please try again later!", I.createElement("br", null), j && I.createElement("code", null, null == S || null === (t = S.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), k && I.createElement("code", null, null == N || null === (n = N.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), L && I.createElement("code", null, null == P || null === (r = P.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message)), A && I.createElement(oe.Um, null, I.createElement("div", {
                    className: "text-center m-5 text-secondary h-25"
                }, I.createElement(ne.Z, null))), !M && !A && !j && s && I.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "Search for members in your group."), M && !A && Z && s && I.createElement(oe.Um, null, O.results.map((function(e) {
                    return I.createElement(xn, {
                        key: e.id,
                        member: e,
                        groupRoles: w,
                        memberEditCallback: u
                    })
                })), 0 === O.results.length && I.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "We couldn't find anything with that search.")), !U && !q && !L && !s && I.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "Search for users on VRChat."), U && I.createElement(oe.Um, null, R.results.map((function(e) {
                    return I.createElement(En, {
                        key: e.id,
                        user: e,
                        groupId: a
                    })
                })), 0 === R.results.length && I.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "We couldn't find anything with that search.")), (M || U) && I.createElement(oe.Gz, null, I.createElement(oe.IT, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return b(h - 1)
                    },
                    disabled: 1 === h || A || q
                }, I.createElement(ee.$1, {
                    icon: ae.A3
                })), I.createElement("span", null, h), I.createElement(oe.UV, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return b(h + 1)
                    },
                    disabled: (null == O ? void 0 : O.isLastPage) || (null == R ? void 0 : R.isLastPage) || A || q
                }, I.createElement(ee.$1, {
                    icon: le._t
                }))))))
            };
            yn.propTypes = {
                groupId: ue().string,
                isOpen: ue().bool.isRequired,
                cancelCallback: ue().func.isRequired,
                memberEditCallback: ue().func
            };
            const wn = yn;

            function Zn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function kn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Zn(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Nn = [{
                label: "None",
                value: null
            }, {
                label: "Ascending",
                value: "joinedAt:asc"
            }, {
                label: "Descending",
                value: "joinedAt:desc"
            }];
            const In = function(e) {
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
                    h = v[0],
                    b = v[1],
                    x = I.useState(null),
                    y = (0, l.Z)(x, 2),
                    w = y[0],
                    Z = y[1],
                    k = I.useState(""),
                    C = (0, l.Z)(k, 2),
                    O = C[0],
                    S = (C[1], I.useState(null)),
                    A = (0, l.Z)(S, 2),
                    M = A[0],
                    R = A[1],
                    P = I.useState(null),
                    q = (0, l.Z)(P, 2),
                    U = q[0],
                    z = q[1],
                    G = (0, Q.XC)().data,
                    F = (0, ie.pc)(),
                    X = (0, I.useState)([
                        [],
                        []
                    ]),
                    D = (0, l.Z)(X, 2),
                    _ = D[0],
                    J = D[1],
                    $ = null == n ? void 0 : n.myMember,
                    B = (0, I.useState)(0),
                    V = (0, l.Z)(B, 2),
                    W = V[0],
                    H = V[1],
                    Y = (0, I.useState)(25),
                    K = (0, l.Z)(Y, 1)[0],
                    te = (0, ce.Pv)(),
                    ne = (0, l.Z)(te, 2),
                    re = ne[0],
                    le = ne[1],
                    ae = le.data,
                    oe = le.error,
                    se = le.isLoading,
                    ue = (0, ce.Vc)({
                        groupId: null == n ? void 0 : n.id
                    }),
                    me = ue.data,
                    de = ue.isFetching,
                    pe = (null == ae || null === (t = ae.members) || void 0 === t ? void 0 : t.length) < K;
                I.useEffect((function() {
                    ge(K, 0)
                }), []), I.useEffect((function() {
                    var e = (0, L.Z)(_);
                    if (ae) {
                        var t;
                        if (ae.page <= 0 && !O && null === M && null === U && null != n && n.myMember) e[0] = [kn(kn({}, $), {}, {
                            userId: G.id,
                            user: kn(kn({}, G), {}, {
                                thumbnailUrl: null !== (t = G.profilePicOverride) && void 0 !== t ? t : G.currentAvatarImageUrl
                            })
                        })].concat((0, L.Z)(ae.members));
                        else e[ae.page] = ae.members;
                        J(e)
                    }
                }), [ae]);
                I.useEffect((function() {}), [O]), I.useEffect((function() {
                    H(0), J([
                        [],
                        []
                    ]), ge(K, 0)
                }), [M, U]);
                var ge = function(e, t) {
                        re({
                            groupId: n.id,
                            perPage: e,
                            page: t,
                            sort: M,
                            roleId: U
                        }), H(t + 1)
                    },
                    fe = function(e, t, n) {
                        f(e), Z(t), b(n), i(!0)
                    },
                    Ee = T({
                        groupMember: null == n ? void 0 : n.myMember,
                        permission: "group-members-manage"
                    }),
                    ve = T({
                        groupMember: null == n ? void 0 : n.myMember,
                        permission: "group-roles-assign"
                    }),
                    he = T({
                        groupMember: null == n ? void 0 : n.myMember,
                        permission: "group-members-viewall"
                    }),
                    be = function(e) {
                        var t, r = e.memberRank,
                            l = e.member,
                            a = n.memberRank < r,
                            o = l.id === (null == n || null === (t = n.myMember) || void 0 === t ? void 0 : t.id),
                            i = null == n ? void 0 : n.roles.some((function(e) {
                                return !0 === e.isSelfAssignable
                            }));
                        return !!F || (!(!ve && !Ee || !a) || (!(!ve && !Ee || !o) || !(!i || !o)))
                    };
                if (de) return I.createElement(ee.UU, {
                    height: "200px"
                });
                var xe = null == _ ? void 0 : _.map((function(e, t) {
                        var r;
                        return null === (r = (0, L.Z)(e)) || void 0 === r || null === (r = r.sort((function(e) {
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
                            return I.createElement(Qt, {
                                key: e.id,
                                member: e,
                                isOwner: e.userId === n.ownerId,
                                isEditable: be({
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
                    }].concat(null == me ? void 0 : me.map((function(e) {
                        return {
                            label: e.name,
                            value: e.id
                        }
                    })));
                return I.createElement(I.Fragment, null, I.createElement(ee.oI, null, I.createElement("h4", {
                    className: "text-center font-weight-bolder"
                }, "Members ", !Ee && !he && "(Friends only)")), I.createElement(ee.Ao, null, I.createElement("div", {
                    className: (0, N.iv)({
                        name: "8osrbx",
                        styles: "background-color:var(--dark);padding:0 20px 20px 20px"
                    })
                }, Ee && I.createElement(ee.JX, null, I.createElement("h6", null, "Filters:"), I.createElement(ee.X2, {
                    className: "flex-wrap"
                }, I.createElement(Cn, {
                    label: "Filter role",
                    onChange: z,
                    options: ye,
                    value: U,
                    className: "mb-2 mx-2"
                }), I.createElement(Cn, {
                    label: "Join order",
                    onChange: R,
                    options: Nn,
                    value: M,
                    className: "mb-2 mx-2"
                }))), I.createElement(j.Z, {
                    isOpen: o,
                    toggle: function() {
                        i(!1)
                    }
                }, I.createElement(an, {
                    groupMember: g,
                    memberRank: null != w ? w : 0,
                    closeCallback: function() {
                        i(!1)
                    },
                    memberListPage: h
                })), Ee && I.createElement("div", {
                    className: "p-2"
                }, I.createElement(ee.zx, {
                    onClick: function() {
                        m(!0)
                    }
                }, I.createElement(ee.$1, {
                    color: "white",
                    icon: Ie.faMagnifyingGlass
                }), "  Search Group Members")), I.createElement(wn, {
                    isOpen: u,
                    groupId: n.id,
                    cancelCallback: function() {
                        return m(!1)
                    },
                    memberEditCallback: fe,
                    isGroupMemberOnly: !0
                }), se ? I.createElement(ee.UU, {
                    height: "200px"
                }) : I.createElement(On, null, xe), I.createElement("div", {
                    className: "p-2",
                    style: {
                        margin: "20px auto 0",
                        textAlign: "center"
                    }
                }, I.createElement(ee.zx, {
                    onClick: function() {
                        ge(K, W)
                    },
                    disabled: se || oe || pe,
                    loading: se
                }, oe || pe ? "No more members..." : "List More Members")))))
            };
            var Cn = (0, a.Z)(ee.Lt, {
                    target: "egqvjul1"
                })({
                    name: "1w9pskj",
                    styles: "width:300px;min-width:200px"
                }),
                On = (0, a.Z)("div", {
                    target: "egqvjul0"
                })({
                    name: "rmjg9v",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;>*{width:300px;margin-top:8px;}"
                });
            const Sn = function(e) {
                var t, n, r = e.langs,
                    l = e.tags,
                    a = (0, W.y)().data,
                    o = null !== (t = null == a || null === (n = a.constants) || void 0 === n || null === (n = n.LANGUAGE) || void 0 === n ? void 0 : n.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== t ? t : V.O,
                    i = null != r ? r : l.filter((function(e) {
                        return e.startsWith("language")
                    })).map((function(e) {
                        var t = e.split("_")[1];
                        return {
                            abbreviation: t.toUpperCase(),
                            title: o[t]
                        }
                    }));
                return I.createElement(Rn, null, I.createElement(Pn, null, I.createElement(jn, null, "Languages")), I.createElement(Ln, null, i.length > 0 ? i.map((function(e) {
                    var t, n;
                    return I.createElement(Tn, {
                        key: e,
                        title: null !== (t = e.title) && void 0 !== t ? t : o[e]
                    }, null !== (n = e.abbreviation) && void 0 !== n ? n : e.toUpperCase())
                })) : I.createElement("h4", {
                    className: "align-self-center"
                }, "None added")))
            };
            var jn = (0, a.Z)("h2", {
                    target: "e8rhb6u6"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                An = (0, a.Z)("div", {
                    target: "e8rhb6u5"
                })({
                    name: "11po3a3",
                    styles: "display:flex;flex-direction:column;align-items:start;justify-content:start;border-radius:8px;overflow:hidden;background:#2a2e34"
                }),
                Mn = (0, a.Z)("div", {
                    target: "e8rhb6u4"
                })({
                    name: "r0ww0u",
                    styles: "background-color:#181b1f;border:5px solid #252a30;min-width:100px;min-height:100px;width:100px;height:100px;border-radius:50%;margin:10px;display:flex;justify-content:center;align-items:center;transition:transform 0.1s ease-in"
                }),
                Tn = (0, a.Z)(Mn, {
                    target: "e8rhb6u3"
                })({
                    name: "77x4h6",
                    styles: "font-size:1.7rem;font-weight:bold;color:#54b5c5"
                }),
                Rn = (0, a.Z)(An, {
                    target: "e8rhb6u2"
                })({
                    name: "u5t5ke",
                    styles: "flex:1;min-width:350px;min-height:136px"
                }),
                Pn = (0, a.Z)(oe.JX, {
                    target: "e8rhb6u1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                Ln = (0, a.Z)(Pn, {
                    target: "e8rhb6u0"
                })({
                    name: "18clcmv",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto"
                });
            const qn = function(e) {
                var t = e.links;
                return I.createElement(Dn, null, I.createElement(_n, null, I.createElement(Un, null, "Links")), I.createElement(Jn, null, t.length > 0 ? t.map((function(e) {
                    return I.createElement(Xn, {
                        key: e
                    }, I.createElement(Ge.QZ, {
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
            var Un = (0, a.Z)("h2", {
                    target: "e19ri8nl7"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                zn = (0, a.Z)("div", {
                    target: "e19ri8nl6"
                })({
                    name: "11po3a3",
                    styles: "display:flex;flex-direction:column;align-items:start;justify-content:start;border-radius:8px;overflow:hidden;background:#2a2e34"
                }),
                Gn = (0, a.Z)("div", {
                    target: "e19ri8nl5"
                })({
                    name: "r0ww0u",
                    styles: "background-color:#181b1f;border:5px solid #252a30;min-width:100px;min-height:100px;width:100px;height:100px;border-radius:50%;margin:10px;display:flex;justify-content:center;align-items:center;transition:transform 0.1s ease-in"
                }),
                Fn = (0, a.Z)(Gn, {
                    target: "e19ri8nl4"
                })({
                    name: "jrwc5p",
                    styles: ":hover{transform:scale(1.1);cursor:pointer;}"
                }),
                Xn = (0, a.Z)(Fn, {
                    target: "e19ri8nl3"
                })(""),
                Dn = (0, a.Z)(zn, {
                    target: "e19ri8nl2"
                })({
                    name: "u5t5ke",
                    styles: "flex:1;min-width:350px;min-height:136px"
                }),
                _n = (0, a.Z)(oe.JX, {
                    target: "e19ri8nl1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                Jn = (0, a.Z)(_n, {
                    target: "e19ri8nl0"
                })({
                    name: "18clcmv",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto"
                }),
                $n = n(87261),
                Bn = n(88233);

            function Vn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Wn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Vn(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Hn = I.lazy((function() {
                return Promise.all([n.e(8744), n.e(2150), n.e(4444), n.e(8890), n.e(9908), n.e(2045)]).then(n.bind(n, 52045))
            }));
            const Yn = function(e) {
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
                    h = v[0],
                    b = (v[1], I.useState(null)),
                    x = (0, l.Z)(b, 2),
                    y = x[0],
                    w = x[1],
                    Z = I.useState(null),
                    k = (0, l.Z)(Z, 2),
                    O = k[0],
                    S = k[1],
                    A = I.useState(!1),
                    M = (0, l.Z)(A, 2),
                    R = M[0],
                    L = M[1],
                    q = I.useState({
                        name: i.name,
                        description: i.description,
                        membersOnly: i.membersOnly
                    }),
                    U = (0, l.Z)(q, 2),
                    z = U[0],
                    G = U[1],
                    X = I.useState(!1),
                    D = (0, l.Z)(X, 2),
                    B = D[0],
                    V = D[1],
                    W = I.useState(15),
                    Y = (0, l.Z)(W, 1)[0],
                    Q = I.useState(1),
                    K = (0, l.Z)(Q, 2),
                    te = K[0],
                    ne = K[1],
                    re = I.useState(!0),
                    oe = (0, l.Z)(re, 2),
                    ie = oe[0],
                    se = oe[1],
                    ue = (0, ce.d3)({
                        groupId: a.id,
                        galleryId: i.id,
                        n: Y,
                        page: te
                    }),
                    me = ue.data,
                    de = ue.isLoading,
                    pe = ue.isSuccess,
                    ge = (0, ce.zv)(),
                    fe = (0, l.Z)(ge, 2),
                    Ee = fe[0],
                    ve = (fe[1].isLoading, (0, ce.E8)()),
                    he = (0, l.Z)(ve, 2),
                    be = he[0],
                    xe = (he[1].isLoading, (0, ce.pI)()),
                    ye = (0, l.Z)(xe, 2),
                    we = ye[0],
                    Ze = ye[1],
                    ke = (Ze.isLoading, Ze.isSuccess),
                    Ne = (0, ce.jP)(),
                    Ie = (0, l.Z)(Ne, 2),
                    Ce = Ie[0];
                Ie[1].isLoading;
                I.useEffect((function() {
                    document.getElementById(i.id) && s && !B && (document.getElementById(i.id).scrollIntoView({
                        behavior: "smooth"
                    }), V(!0))
                })), I.useEffect((function() {
                    ke && L(!1)
                }), [ke]), I.useEffect((function() {
                    pe && se((null == me ? void 0 : me.totalCount) >= 100)
                }), [pe]);
                var Oe = function(e) {
                    var t = "checkbox" === e.target.getAttribute("type") ? !e.target.checked : e.target.value;
                    G(Wn(Wn({}, z), {}, (0, P.Z)({}, e.target.name, t)))
                };
                if (de) return I.createElement(ee.UU, {
                    className: "mt-3",
                    width: "100%",
                    height: "300px"
                });
                var Se = T({
                        groupMember: null == a ? void 0 : a.myMember,
                        permission: "group-galleries-manage"
                    }),
                    je = me.totalCount,
                    Ae = (te - 1) * Y,
                    Me = I.createElement(er, null, I.createElement(tr, {
                        className: "d-flex flex-row align-items-center justify-content-center",
                        onClick: function() {
                            return ne(te - 1)
                        },
                        disabled: 0 === Ae
                    }, I.createElement(ee.$1, {
                        icon: ae.A3
                    })), I.createElement("span", null, te, " / ", Math.ceil(je / Y), " ", I.createElement("small", null, je > 0 && "(".concat(je, "/").concat(100, ")"))), I.createElement(nr, {
                        className: "d-flex flex-row align-items-center justify-content-center",
                        onClick: function() {
                            return ne(te + 1)
                        },
                        disabled: Ae + Y >= je
                    }, I.createElement(ee.$1, {
                        icon: le._t
                    })));
                return I.createElement("div", {
                    className: "my-2",
                    id: i.id
                }, I.createElement(Bn.Z, {
                    imageUrl: y,
                    closeCallback: function() {
                        w(null)
                    },
                    nextCallback: null !== (t = me.results) && void 0 !== t && t[O + 1] ? function() {
                        w(me.results[O + 1].imageUrl), S(O + 1)
                    } : null,
                    prevCallback: null !== (n = me.results) && void 0 !== n && n[O - 1] ? function() {
                        w(me.results[O - 1].imageUrl), S(O - 1)
                    } : null
                }), I.createElement(j.Z, {
                    isOpen: g,
                    className: (0, N.iv)({
                        name: "1ul0gzp",
                        styles: "max-width:1500px!important"
                    })
                }, I.createElement(_.Z, null, I.createElement(Hn, {
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
                    selectedId: null != h ? h : ""
                })), I.createElement(J.Z, null, I.createElement(ee.zx, {
                    onClick: function() {
                        f(!1), u((0, H.b9)())
                    }
                }, "Cancel"))), I.createElement(ee.oI, null, I.createElement("h4", null, i.name), I.createElement("span", null, i.description)), I.createElement(ee.Ao, null, 0 !== je && Me, R ? I.createElement(ee.JX, {
                    className: "w-100"
                }, I.createElement($.Z, null, "Gallery name", I.createElement(ee.II, {
                    value: z.name,
                    name: "name",
                    onChange: Oe,
                    disabled: m,
                    maxLength: 64
                })), " ", I.createElement($.Z, null, "Gallery description", I.createElement(ee.II, {
                    value: z.description,
                    name: "description",
                    onChange: Oe,
                    disabled: m,
                    maxLength: 512
                })), " ", I.createElement(ee.X2, null, I.createElement($.Z, null, "Is this gallery public?", " ", I.createElement($n.Z, {
                    type: "checkbox",
                    name: "membersOnly",
                    checked: !z.membersOnly,
                    onChange: Oe,
                    disabled: m
                }))), I.createElement(ee.X2, null, I.createElement(ee.zx, {
                    expand: !0,
                    onClick: function() {
                        we({
                            groupId: a.id,
                            galleryId: i.id,
                            data: Wn({}, z)
                        })
                    },
                    disabled: m
                }, "Update"), " ", I.createElement(ee.zx, {
                    expand: !0,
                    neutral: !0,
                    disabled: m,
                    onClick: function() {
                        L(!1)
                    }
                }, "Cancel"), " ", I.createElement(ee.zx, {
                    expand: !0,
                    danger: !0,
                    disabled: m,
                    onClick: function() {
                        Ce({
                            groupId: a.id,
                            galleryId: i.id,
                            confirm: !0
                        })
                    }
                }, "Delete"))) : I.createElement(I.Fragment, null, I.createElement(Qn, null, (null === (r = me.results) || void 0 === r ? void 0 : r.length) > 0 ? me.results.map((function(e, t) {
                    return I.createElement(Yt.Z, {
                        key: e.id,
                        image: e.imageUrl,
                        disableManagement: m,
                        onClick: function() {
                            S(t),
                                function(e) {
                                    w(e)
                                }(e.imageUrl)
                        },
                        showDeleteButton: Se,
                        onDelete: function() {
                            return function(e) {
                                be({
                                    groupId: a.id,
                                    galleryId: i.id,
                                    imageId: e.id
                                })
                            }(e)
                        }
                    })
                })) : I.createElement("p", {
                    className: "m-0"
                }, "There are no pictures here... yet!")), Se && I.createElement(Kn, null, I.createElement(ee.zx, {
                    className: "m-2",
                    disabled: ie,
                    onClick: function() {
                        f(!0)
                    }
                }, ie ? "Gallery is full" : I.createElement(I.Fragment, null, I.createElement(ee.$1, {
                    icon: o.r8
                }), " Post an Image")), I.createElement(ee.zx, {
                    neutral: !0,
                    onClick: function() {
                        L(!0)
                    }
                }, I.createElement(ee.$1, {
                    icon: F.Kb
                }), " Manage Gallery")))))
            };
            var Qn = (0, a.Z)("div", {
                    target: "e5pi12i4"
                })({
                    name: "1kra7du",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;align-items:center;margin:10px 0;width:100%"
                }),
                Kn = (0, a.Z)("div", {
                    target: "e5pi12i3"
                })({
                    name: "198unna",
                    styles: "display:flex;flex-direction:row;justify-content:left;align-items:center;width:100%"
                }),
                er = (0, a.Z)("div", {
                    target: "e5pi12i2"
                })({
                    name: "1vtota4",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-bottom:8px"
                }),
                tr = (0, a.Z)(ee.zx, {
                    target: "e5pi12i1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                nr = (0, a.Z)(ee.zx, {
                    target: "e5pi12i0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                });

            function rr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function lr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? rr(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const ar = function(e) {
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
                    g = (0, ce.Eg)(),
                    f = (0, l.Z)(g, 2),
                    E = f[0],
                    v = f[1],
                    h = v.data,
                    b = v.isLoading,
                    x = v.isSuccess,
                    y = v.isError,
                    w = v.error;
                I.useEffect((function() {
                    x && p(!1)
                }), [x]);
                var Z = function(e) {
                        var t = "checkbox" === e.target.getAttribute("type") ? !e.target.checked : e.target.value;
                        s(lr(lr({}, c), {}, (0, P.Z)({}, e.target.name, t)))
                    },
                    N = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        E(lr({
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
                    C = null;
                return T({
                    groupMember: null == n ? void 0 : n.myMember,
                    permission: "group-galleries-manage"
                }) && (C = d ? I.createElement(I.Fragment, null, I.createElement(ee.oI, null, I.createElement("h4", null, "Create Gallery")), I.createElement(ee.Ao, null, I.createElement($.Z, null, "Gallery name", I.createElement(ee.II, {
                    value: c.name,
                    name: "name",
                    onChange: Z,
                    disabled: b,
                    maxLength: 64
                })), " ", I.createElement($.Z, null, "Gallery description", I.createElement(ee.II, {
                    value: c.description,
                    name: "description",
                    onChange: Z,
                    disabled: b,
                    maxLength: 512
                })), " ", I.createElement(ee.X2, null, I.createElement($.Z, null, "Is this gallery public?", " ", I.createElement($n.Z, {
                    type: "checkbox",
                    name: "membersOnly",
                    checked: !c.membersOnly,
                    onChange: Z,
                    disabled: b
                }))), I.createElement(ee.X2, null, I.createElement(ee.zx, {
                    expand: !0,
                    onClick: N,
                    disabled: b,
                    loading: b
                }, "Create"), " ", I.createElement(ee.zx, {
                    expand: !0,
                    neutral: !0,
                    onClick: function() {
                        p(!1)
                    },
                    disabled: b
                }, "Cancel")))) : I.createElement(ee.zx, {
                    onClick: function() {
                        p(!0)
                    },
                    disabled: b,
                    loading: b
                }, I.createElement(ee.$1, {
                    icon: o.r8
                }), " Create Gallery")), I.createElement("div", null, y && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == w || null === (t = w.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred while creating the gallery."), C, n.galleries.length > 0 ? n.galleries.map((function(e) {
                    return (e.membersOnly && (null == n ? void 0 : n.myMember) || !e.membersOnly) && I.createElement(Yn, {
                        key: e.id,
                        group: n,
                        gallery: e,
                        justAdded: x && (null == h ? void 0 : h.id) === e.id
                    })
                })) : I.createElement(or, null, "There aren't any galleries here!"))
            };
            var or = (0, a.Z)(ee.oI, {
                    target: "e7nydss0"
                })({
                    name: "es1q9a",
                    styles: "border-radius:6px;text-align:center;font-size:1.2rem;font-weight:bold;justify-content:center;align-items:center;padding:3rem 1rem;margin-top:0.5rem"
                }),
                ir = n(59923),
                cr = n(9186);

            function sr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ur(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? sr(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const mr = function(e) {
                var t = e.group,
                    n = (0, cr.Z)().sortedLocations,
                    r = (0, ce.w$)({
                        groupId: t.id
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    a = r.data,
                    o = r.isLoading,
                    i = I.useState([]),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1];
                I.useEffect((function() {
                    var e;
                    if (!o) {
                        var t = null == n ? void 0 : n.map((function(e) {
                            return e.instanceId
                        }));
                        u(null === (e = (0, L.Z)(a)) || void 0 === e || null === (e = e.sort((function(e, t) {
                            var n = e.memberCount;
                            return t.memberCount - n
                        }))) || void 0 === e ? void 0 : e.map((function(e) {
                            return t.includes(e.instanceId) ? ur(ur({}, e), {}, {
                                users: n.find((function(t) {
                                    return t.instanceId === e.instanceId
                                })).users
                            }) : ur(ur({}, e), {}, {
                                users: []
                            })
                        })))
                    }
                }), [a, n]);
                var m = I.useMemo((function() {
                    var e;
                    return null == s || null === (e = s.sort((function(e, t) {
                        var n = e.users,
                            r = t.users;
                        return n.length === r.length ? 0 : n.length > r.length ? -1 : 1
                    }))) || void 0 === e ? void 0 : e.map((function(e) {
                        return I.createElement(ir.Z, {
                            key: "location-".concat(e.location),
                            className: "mb-4",
                            location: e,
                            isForGroup: !0,
                            currentGroup: t
                        })
                    }))
                }), [s]);
                return o ? I.createElement(ee.UU, {
                    width: "100%",
                    height: "200px"
                }) : I.createElement(I.Fragment, null, I.createElement(ee.oI, null, I.createElement("h4", {
                    className: "text-center"
                }, "Instances")), I.createElement(ee.Ao, null, null != m && m.length ? m : I.createElement("p", {
                    className: "text-center"
                }, "Nothing to see here!")))
            };
            var dr = n(73670),
                pr = n(47716);
            const gr = function(e) {
                var t = e.group,
                    n = e.user,
                    r = e.errorCallback,
                    a = void 0 === r ? function() {} : r,
                    o = e.mode,
                    i = void 0 === o ? "invite" : o,
                    c = (0, ce.vb)(),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = m.isLoading,
                    p = m.isSuccess,
                    g = m.isError,
                    f = m.error,
                    E = (0, ce.dl)(),
                    v = (0, l.Z)(E, 2),
                    h = v[0],
                    b = v[1],
                    y = b.isLoading,
                    w = b.isSuccess,
                    Z = b.isError,
                    k = b.error,
                    N = d || y,
                    C = g || Z,
                    O = f || k;
                return I.useEffect((function() {
                    C && a(O)
                }), [C, O]), I.createElement("div", {
                    className: "mt-2 mb-2 d-flex flex-column justify-content-center"
                }, I.createElement(pr.Z, {
                    className: "mb-0",
                    userId: n.id,
                    openLinksInNewTab: !0
                }), "invite" === i && I.createElement(ee.zx, {
                    disabled: p || N,
                    loading: N,
                    onClick: function() {
                        return u({
                            groupId: t.id,
                            userId: n.id
                        })
                    },
                    color: p ? "success" : void 0
                }, p && I.createElement(ee.$1, {
                    icon: x.LE,
                    className: "mx-2"
                }), "Invite", p && "d", " ", n.displayName), "ban" === i && I.createElement(ee.zx, {
                    disabled: w || N,
                    loading: N,
                    onClick: function() {
                        return h({
                            groupId: t.id,
                            userId: n.id
                        })
                    },
                    color: w ? "success" : void 0
                }, w && I.createElement(ee.$1, {
                    icon: x.LE,
                    className: "mx-2"
                }), "ban", w && "ned", " ", n.displayName))
            };
            var fr = n(25411),
                Er = n(12227);
            const vr = function(e) {
                var t = e.group,
                    n = e.mode,
                    r = void 0 === n ? "invite" : n,
                    a = (0, C.I0)(),
                    o = (0, ie.pc)(),
                    i = I.useState(""),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, ie.Nr)(s),
                    d = (0, C.v9)((function(e) {
                        return e.search
                    })).userResults,
                    p = I.useState(""),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = o && !1;
                I.useEffect((function() {
                    E(""), "" !== m && a((0, fr.pz)({
                        searchTerm: m,
                        n: Er.En,
                        isInternalVariant: v
                    }))
                }), [m]);
                var h = function(e) {
                    e && E(e.data.error.message)
                };
                return I.createElement(I.Fragment, null, I.createElement(dr.Z, {
                    searchString: u,
                    placeholder: "Search users..."
                }), f && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "px-4",
                    message: f
                }), d.map((function(e) {
                    return I.createElement(gr, {
                        mode: r,
                        key: e.id,
                        group: t,
                        user: e,
                        errorCallback: h
                    })
                })))
            };
            var hr = n(37599),
                br = n(61509);
            const xr = function(e) {
                var t, n, r, a, o, c, s, u, m = e.group,
                    d = (0, C.I0)(),
                    p = I.useState(!1),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = I.useState(!1),
                    h = (0, l.Z)(v, 2),
                    b = h[0],
                    x = h[1],
                    y = I.useState(null),
                    w = (0, l.Z)(y, 2),
                    Z = w[0],
                    k = w[1],
                    N = (0, ce.Sp)({
                        groupId: m.id
                    }),
                    S = N.data,
                    A = N.isError,
                    M = N.isLoading,
                    R = (0, ce.dZ)({
                        groupId: m.id
                    }),
                    P = R.data,
                    L = R.isError,
                    q = R.error,
                    U = R.isLoading,
                    z = (0, ce.dZ)({
                        groupId: m.id,
                        blocked: !0
                    }),
                    G = z.data,
                    F = z.isError,
                    X = z.error,
                    D = (z.isFetching, (0, ce.dt)()),
                    J = (0, l.Z)(D, 2),
                    $ = J[0],
                    V = J[1],
                    W = (V.isLoading, V.isError, V.error, (0, ce.MQ)()),
                    H = (0, l.Z)(W, 2),
                    Y = H[0],
                    Q = H[1],
                    K = (Q.isLoading, Q.isError, Q.error, (0, ce.M7)()),
                    ne = (0, l.Z)(K, 2),
                    re = ne[0],
                    le = ne[1],
                    ae = (le.isLoading, le.isError),
                    oe = le.error,
                    se = (0, ce.tN)(),
                    ue = (0, l.Z)(se, 2),
                    me = ue[0],
                    de = ue[1],
                    pe = (de.isLoading, de.isSuccess),
                    ge = de.isError,
                    fe = de.error,
                    Ee = (0, ce.QA)(),
                    ve = (0, l.Z)(Ee, 2),
                    he = ve[0],
                    be = ve[1],
                    xe = (be.isLoading, be.isError),
                    ye = be.error,
                    we = (0, ce.XK)(),
                    Ze = (0, l.Z)(we, 2),
                    ke = Ze[0],
                    Ne = Ze[1],
                    Ie = (Ne.isLoading, Ne.isError),
                    Ce = Ne.error;
                (0, O.s0)(), (0, ie.pc)();
                I.useEffect((function() {
                    pe && d(br.S.util.updateQueryData("getGroupById", {
                        groupId: m.id
                    }, (function(e) {
                        e.memberCount += 1
                    })))
                }), [pe]);
                var Oe = function() {
                    x(!1), k(null)
                };
                T({
                    groupMember: null == m ? void 0 : m.myMember,
                    permission: "group-members-manage"
                });
                return I.createElement("div", null, I.createElement(j.Z, {
                    isOpen: b && !!Z,
                    toggle: Oe
                }, I.createElement(ee.oI, null, I.createElement("h4", {
                    className: "text-center text-break"
                }, "Ban ", null == Z ? void 0 : Z.displayName, "?!?!")), I.createElement(ee.Ao, null, I.createElement("div", null, I.createElement(ee.X2, null, I.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        var e;
                        e = null == Z ? void 0 : Z.id, he({
                            groupId: m.id,
                            userId: e
                        }), Oe()
                    },
                    expand: !0
                }, I.createElement(ee.$1, {
                    icon: i.JH
                }), " And stay out!"), " ", I.createElement(ee.zx, {
                    neutral: !0,
                    onClick: Oe,
                    expand: !0
                }, "Cancel"))))), I.createElement(j.Z, {
                    isOpen: f
                }, I.createElement(B.Z, {
                    close: I.createElement(te.Z, {
                        onClick: function() {
                            E(!1)
                        }
                    })
                }, I.createElement("h4", {
                    className: "m-0"
                }, "Invite Somebody")), I.createElement(_.Z, null, I.createElement(vr, {
                    group: m,
                    mode: "invite"
                }))), I.createElement(ee.zx, {
                    className: "mb-2",
                    color: "primary",
                    onClick: function() {
                        E(!0)
                    }
                }, "Invite Somebody"), I.createElement(hr.Z, {
                    title: "Join Requests",
                    collapseOpen: !0
                }, xe && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == ye || null === (t = ye.data) || void 0 === t ? void 0 : t.error.message) || "There was an error banning the user."), L && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == q || null === (n = q.data) || void 0 === n ? void 0 : n.error.message) || "There was an error loading the join requests."), ae && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == oe || null === (r = oe.data) || void 0 === r ? void 0 : r.error.message) || "There was an error rejecting the join request."), ge && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == fe || null === (a = fe.data) || void 0 === a ? void 0 : a.error.message) || "There was an error accepting the join request."), I.createElement(ee.oI, null, I.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Applicants")), I.createElement(ee.Ao, {
                    className: "mb-2"
                }, U ? I.createElement(ee.UU, {
                    width: "100%",
                    height: "75px"
                }) : I.createElement(yr, null, 0 === (null == P ? void 0 : P.length) ? I.createElement("p", {
                    className: "m-0"
                }, "Nobody is waiting to join!") : null, null == P ? void 0 : P.map((function(e) {
                    return I.createElement("div", {
                        className: "mb-2"
                    }, I.createElement(Qt, {
                        member: e,
                        navigate: "/home/user/".concat(e.userId),
                        onAccept: function() {
                            var t;
                            t = e.userId, me({
                                groupId: m.id,
                                userId: t
                            })
                        },
                        onBlock: function() {
                            $({
                                groupId: m.id,
                                userId: e.userId
                            })
                        },
                        onReject: function() {
                            var t;
                            t = e.userId, re({
                                groupId: m.id,
                                userId: t
                            })
                        },
                        showView: !1
                    }))
                }))))), I.createElement(hr.Z, {
                    title: "Sent Invites"
                }, A && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == q || null === (o = q.data) || void 0 === o ? void 0 : o.error.message) || "There was an error loading the invites."), Ie && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == Ce || null === (c = Ce.data) || void 0 === c ? void 0 : c.error.message) || "There was an error deleting the invite."), I.createElement(ee.oI, null, I.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Invites")), I.createElement(ee.Ao, {
                    className: "mb-2"
                }, M ? I.createElement(ee.UU, {
                    width: "100%",
                    height: "75px"
                }) : I.createElement(yr, null, 0 === (null == S ? void 0 : S.length) ? I.createElement("p", {
                    className: "m-0"
                }, "Nobody has been invited to this group!") : null, null == S ? void 0 : S.map((function(e) {
                    return I.createElement("div", {
                        className: "mb-2"
                    }, I.createElement(Qt, {
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
                }))))), I.createElement(hr.Z, {
                    title: "Blocked Requests"
                }, F && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == X || null === (s = X.data) || void 0 === s ? void 0 : s.error.message) || "There was an error loading the invites."), Ie && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == Ce || null === (u = Ce.data) || void 0 === u ? void 0 : u.error.message) || "There was an error deleting the invite."), I.createElement(ee.oI, null, I.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Blocked Applicants")), I.createElement(ee.Ao, {
                    className: "mb-2"
                }, M ? I.createElement(ee.UU, {
                    width: "100%",
                    height: "75px"
                }) : I.createElement(yr, null, 0 === (null == G ? void 0 : G.length) ? I.createElement("p", {
                    className: "m-0"
                }, "Nobody has been blocked from joining the group!") : null, null == G ? void 0 : G.map((function(e) {
                    return I.createElement("div", {
                        className: "mb-2"
                    }, I.createElement(Qt, {
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
            var yr = (0, a.Z)("div", {
                    target: "e1hocgvc0"
                })({
                    name: "1fx10vo",
                    styles: "display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:space-around"
                }),
                wr = n(87462),
                Zr = n(19933),
                kr = n(66736),
                Nr = n(6655),
                Ir = n(73647),
                Cr = n(68791),
                Or = n(40067),
                Sr = n(7701),
                jr = n(50352),
                Ar = n(77708);
            const Mr = function(e) {
                var t, n, r, a, o, i, c = e.group,
                    s = (0, C.I0)(),
                    u = (0, C.v9)((function(e) {
                        return e.listingRow.modals.cancellation
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
                    g = (0, Q.XC)(),
                    f = g.data,
                    E = g.isLoading,
                    v = I.useState(!0),
                    h = (0, l.Z)(v, 2),
                    b = (h[0], h[1], (0, wt.Ul)({
                        userId: c.ownerId,
                        groupId: c.id,
                        active: !0,
                        hydrate: !0
                    }, {
                        skip: !c,
                        refetchOnMountOrArgChange: !0
                    })),
                    x = b.data,
                    y = void 0 === x ? [] : x,
                    w = b.isLoading,
                    Z = b.isError,
                    k = b.error,
                    N = (0, kr.CE)({
                        receiverId: f.id,
                        sellerId: c.ownerId,
                        active: !0,
                        mostRecent: !0
                    }, {
                        skip: !f || !(null != y && y.length),
                        refetchOnMountOrArgChange: !0
                    }),
                    O = N.data,
                    S = void 0 === O ? [] : O,
                    j = N.isLoading,
                    A = N.isError,
                    M = N.error,
                    T = I.useMemo((function() {
                        return y.map((function(e) {
                            return {
                                listing: e,
                                purchase: S.find((function(t) {
                                    return t.listingId === e.id
                                }))
                            }
                        }))
                    }), [S, y]),
                    R = (0, Nr.En)(),
                    P = R.data,
                    L = void 0 === P ? {
                        economyOnline: !1,
                        plannedOfflineWindowStart: null,
                        plannedOfflineWindowEnd: null,
                        offlineReason: null
                    } : P,
                    q = L.economyOnline,
                    U = L.plannedOfflineWindowStart,
                    z = L.plannedOfflineWindowEnd,
                    G = L.offlineReason,
                    F = R.isFetching,
                    X = R.isError,
                    D = R.error,
                    _ = (0, Nr.v$)({
                        userId: f.id
                    }, {
                        skip: !f || !q,
                        refetchOnMountOrArgChange: !0
                    }),
                    J = _.data,
                    $ = _.isLoading,
                    B = _.isError,
                    V = _.error,
                    W = (0, Nr.pp)({
                        userId: f.id
                    }, {
                        skip: !f,
                        refetchOnMountOrArgChange: !0
                    }),
                    H = W.data,
                    Y = (void 0 === H ? {
                        balance: 0
                    } : H).balance,
                    K = W.isLoading,
                    te = W.isError,
                    ne = (0, Nr.gI)(),
                    le = (0, l.Z)(ne, 2),
                    ae = (le[0], le[1], null == J ? void 0 : J.signed_tos),
                    oe = I.useCallback((function(e) {
                        var t = e.currentUserId,
                            n = e.listingId,
                            r = e.listing,
                            l = e.purchase;
                        s((0, Ir.zy)({
                            currentUserId: t,
                            listingId: n,
                            listing: r,
                            purchase: l
                        }))
                    })),
                    ie = I.useCallback((function(e, t) {
                        var n = t.listing,
                            r = t.purchase,
                            l = t.totalPrice,
                            a = t.includesGroupAccess,
                            o = t.includesGroupAccessRemove,
                            i = t.enteredPurchaseQuantity,
                            u = t.selectedPurchaseQuantity,
                            m = t.quantity;
                        s(e ? (0, Ir.DF)({
                            listing: n,
                            purchase: r,
                            group: c,
                            totalPrice: l,
                            tiliaTokenBalance: Y,
                            tiliaTosAccepted: ae,
                            includesGroupAccess: a,
                            includesGroupAccessRemove: o,
                            quantity: m,
                            enteredPurchaseQuantity: i,
                            selectedPurchaseQuantity: u
                        }) : (0, Ir.Li)({
                            listing: n,
                            purchase: r,
                            group: c,
                            totalPrice: l,
                            tiliaTokenBalance: Y,
                            tiliaTosAccepted: ae,
                            includesGroupAccess: a,
                            includesGroupAccessRemove: o,
                            quantity: m,
                            enteredPurchaseQuantity: i,
                            selectedPurchaseQuantity: u
                        }))
                    }), [Y, ae, c]),
                    ce = I.useState(!1),
                    se = (0, l.Z)(ce, 2),
                    ue = se[0],
                    me = se[1];
                if (E || j || w || F || $ || K) return I.createElement(ee.UU, {
                    width: "100%",
                    height: "200px"
                });
                var de = function(e) {
                        return null == S ? void 0 : S.some((function(t) {
                            return t.listingId === e
                        }))
                    },
                    pe = ue ? null == T ? void 0 : T.filter((function(e) {
                        return de(e.listing.id)
                    })) : null == T ? void 0 : T.filter((function(e) {
                        return !de(e.listing.id)
                    })),
                    ge = (0, ve.dj)(U);
                return I.createElement(I.Fragment, null, q && I.createElement(Zr.Z, {
                    isTiliaTOSAccepted: ae,
                    returnPath: window.location.href,
                    termsOfServiceMessage: "Tilia's Terms of Service have been changed. Please accept them before supporting ".concat(c.name, ".")
                }), I.createElement(ee.oI, {
                    className: "flex-row justify-content-center align-items-center"
                }, I.createElement("h4", {
                    className: "text-center flex-grow-1"
                }, "Store")), I.createElement(ee.Ao, null, X && I.createElement(ee.qX, {
                    type: "error",
                    title: "Something strange happened"
                }, I.createElement("p", {
                    className: "m-0"
                }, "Error getting Tilia online status: ", D.status, " ", null !== (t = null === (n = D.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Unknown error")), !q && !X && I.createElement(ee.qX, {
                    type: "warn",
                    title: "Store Maintenance"
                }, I.createElement(I.Fragment, null, I.createElement("p", {
                    className: "m-0"
                }, "Store Currently Offline: ", null != G ? G : "Unknown Reason"), I.createElement("p", {
                    className: "m-0"
                }, "Projected Service Return: ", (0, ve.M4)(z)))), B && q && I.createElement(ee.qX, {
                    type: "error",
                    title: "Something strange happened"
                }, "Error looking up Tilia ToS acceptance: ", V.status, " ", null !== (r = null === (a = V.data) || void 0 === a ? void 0 : a.error.message) && void 0 !== r ? r : "Unknown error"), A && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error loading purchases"
                }, null == M || null === (o = M.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message), Z && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error loading listings"
                }, null == k || null === (i = k.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message), ge && q && I.createElement(ee.qX, {
                    type: "warn",
                    title: "Store Maintenance"
                }, I.createElement("p", {
                    className: "m-0"
                }, "Starts: ", (0, ve.M4)(U)), I.createElement("p", {
                    className: "m-0"
                }, "Ends: ", (0, ve.M4)(z))), I.createElement(re.Z, {
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
                    return I.createElement(Cr.Z, (0, wr.Z)({
                        key: e.listing.id
                    }, e, {
                        group: c,
                        tiliaTokenBalance: !te && Y,
                        tiliaTosAccepted: ae,
                        index: t,
                        economyOnline: q,
                        onCancel: oe,
                        onPurchase: ie
                    }))
                })) : I.createElement("p", null, "There are no subscription options here!"), u.isOpen && I.createElement(Or.Z, null), m.isOpen && I.createElement(Ar.Z, null), d.isOpen && I.createElement(Sr.Z, {
                    groupData: c
                }), p.isOpen && I.createElement(jr.Z, null)))
            };
            var Tr = n(28764),
                Rr = n(96427),
                Pr = n(42137),
                Lr = n(9230);
            const qr = function(e) {
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
                    h = n.createdAt,
                    b = n.imageUrl,
                    x = void 0 === b ? null : b,
                    y = n.title,
                    w = n.text,
                    Z = void 0 === w ? "" : w,
                    k = n.roleIds,
                    N = void 0 === k ? [] : k,
                    C = n.visibility,
                    O = null !== x && "" !== x,
                    S = a.roleIds,
                    j = (null === (t = Z.match(/[^\n]*\n[^\n]*/gi)) || void 0 === t ? void 0 : t.length) || 0,
                    A = (0, I.useMemo)((function() {
                        if (!E && j > 3) {
                            var e = [];
                            return (0, L.Z)(Z).forEach((function(t, n) {
                                "\n" !== t && "\r" !== t || e.push(n)
                            })), "".concat(Z.substring(0, e[3]), "... ")
                        }
                        return !E && Z.length > 400 ? "".concat(Z.substring(0, 400), "... ") : Z
                    }), [E, Z]),
                    M = (0, I.useMemo)((function() {
                        return !E && (Z.length > 400 || j > 3)
                    }), [E, Z]);
                return I.createElement("div", {
                    className: "d-flex align-items-center"
                }, I.createElement(zr, {
                    isExpanded: E,
                    ref: i,
                    className: "container-fluid p-0"
                }, I.createElement("div", {
                    className: "row"
                }, I.createElement("div", {
                    className: "col-12 d-flex align-items-center d-sm-none"
                }, I.createElement(Br, {
                    src: x
                })), I.createElement("div", {
                    className: "".concat(O ? " col-sm-6 col-md-6 col-lg-7 col-xl-7 col-12" : "col-12")
                }, I.createElement(Gr, null, I.createElement(Xr, null, y), function() {
                    if (0 === N.length) return I.createElement(Dr, null, I.createElement("div", null, I.createElement(ee.$1, {
                        icon: Pr.SZ
                    }), " ", (0, ve.h4)(h), I.createElement(ee.$1, {
                        className: "ms-2",
                        icon: Lr.iO
                    }), " ", "public" === C ? "Public" : "Group"));
                    var e = (0, L.Z)(N).sort((function(e, t) {
                        return S.includes(t) ? 1 : -1
                    }));
                    return I.createElement(Dr, null, I.createElement("div", null, I.createElement(ee.$1, {
                        icon: Pr.SZ
                    }), " ", (0, ve.h4)(h)), I.createElement(Jr, null, I.createElement(ee.$1, {
                        icon: Rr.Aq
                    }), " Only Seen By", " ", e.map((function(e) {
                        var t = p.find((function(t) {
                                return t.id === e
                            })),
                            n = !(null == t || !t.productId);
                        return t ? I.createElement(_r, {
                            id: t.id,
                            hasRole: S.includes(t.id)
                        }, n ? I.createElement(I.Fragment, null, I.createElement(ee.$1, {
                            icon: Tr.n7,
                            className: "me-1"
                        }), t.name) : t.name) : null
                    }))))
                }(), I.createElement(Fr, {
                    hasImage: O,
                    isExpanded: E
                }, A, I.createElement($r, {
                    showReadMore: M,
                    onClick: function() {
                        return v(!0)
                    }
                }, "Read More")))), O && I.createElement("div", {
                    className: "col-12 col-sm-6 col-md-6 col-lg-5 col-xl-5 d-none d-sm-flex align-items-center"
                }, I.createElement(Br, {
                    src: x
                })))), s && I.createElement("div", {
                    className: "ps-5 pe-4"
                }, I.createElement(Ur, {
                    color: "danger",
                    onClick: function() {
                        return m(n)
                    }
                }, I.createElement(ee.$1, {
                    icon: q.$
                }))))
            };
            var Ur = (0, a.Z)(Ue.Z, {
                    target: "ewr2sfy9"
                })({
                    name: "3891qj",
                    styles: "border-radius:50px;color:white"
                }),
                zr = (0, a.Z)("div", {
                    target: "ewr2sfy8"
                })({
                    name: "m9gplg",
                    styles: "background-color:#0a0a0d;border-radius:10px;color:#bababa;margin-bottom:20px;overflow:hidden;transition:all 0.3s ease-in-out"
                }),
                Gr = (0, a.Z)("div", {
                    target: "ewr2sfy7"
                })({
                    name: "1yjx7km",
                    styles: "padding:20px"
                }),
                Fr = (0, a.Z)("p", {
                    target: "ewr2sfy6"
                })({
                    name: "n4pob0",
                    styles: "font-size:18px;flex-grow:1;word-wrap:break-word;white-space:pre-wrap;display:inline-block;overflow:auto;margin-bottom:0;min-height:auto;font-size:16px;margin-top:14px;width:100%"
                }),
                Xr = (0, a.Z)("h4", {
                    target: "ewr2sfy5"
                })({
                    name: "1ji90xs",
                    styles: "text-align:start;color:#fff;word-break:normal;font-size:20px"
                }),
                Dr = (0, a.Z)("h4", {
                    target: "ewr2sfy4"
                })({
                    name: "1rmpetc",
                    styles: "color:#737372;font-size:12px;font-weight:500;line-height:1.3em;display:inline-block"
                }),
                _r = (0, a.Z)("div", {
                    target: "ewr2sfy3"
                })("color:#dadada;background-color:#575757;padding:0.4em;border-radius:10rem;display:inline-block;font-size:12px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;font-weight:normal;margin-right:5px;opacity:", (function(e) {
                    return e.hasRole ? 1 : .7
                }), ";"),
                Jr = (0, a.Z)("div", {
                    target: "ewr2sfy2"
                })({
                    name: "1mcu3c1",
                    styles: "line-height:2em;margin-top:4px"
                }),
                $r = (0, a.Z)("span", {
                    target: "ewr2sfy1"
                })("color:#fff;cursor:pointer;display:", (function(e) {
                    return e.showReadMore ? "inline-block" : "none"
                }), ";"),
                Br = (0, a.Z)("img", {
                    target: "ewr2sfy0"
                })({
                    name: "k8r326",
                    styles: "max-height:25vh;margin:0 auto"
                });
            var Vr = function(e) {
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
                return I.createElement(Hr, null, I.createElement("h6", null, "Management Roles"), I.createElement("div", {
                    className: "d-flex flex-wrap"
                }, a.map((function(e) {
                    return I.createElement(ee.vc, {
                        id: e.id,
                        label: i(e) ? I.createElement(I.Fragment, null, I.createElement(ee.$1, {
                            icon: Tr.n7,
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
                    return I.createElement(ee.vc, {
                        id: e.id,
                        label: i(e) ? I.createElement(I.Fragment, null, I.createElement(ee.$1, {
                            icon: Tr.n7,
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
            Vr.propTypes = {
                group: ue().object.isRequired,
                onChange: ue().func.isRequired,
                selectedRoles: ue().array.isRequired
            };
            const Wr = Vr;
            var Hr = (0, a.Z)("div", {
                target: "e1qh7s420"
            })({
                name: "kq62ql",
                styles: "background-color:#000000;border-radius:5px;padding:16px 20px"
            });
            var Yr = I.lazy((function() {
                    return Promise.all([n.e(8744), n.e(2150), n.e(4444), n.e(8890), n.e(9908), n.e(2045)]).then(n.bind(n, 52045))
                })),
                Qr = (0, a.Z)(ee.gx, {
                    target: "e37d6q30"
                })({
                    name: "tz9wht",
                    styles: ">textarea{min-height:250px;}"
                });
            const Kr = function(e) {
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
                    h = (0, l.Z)(v, 2),
                    b = h[0],
                    x = h[1],
                    y = I.useState(null),
                    w = (0, l.Z)(y, 2),
                    Z = w[0],
                    O = w[1],
                    S = I.useState(!0),
                    A = (0, l.Z)(S, 2),
                    M = A[0],
                    T = A[1],
                    R = I.useState(!1),
                    P = (0, l.Z)(R, 2),
                    q = P[0],
                    U = P[1],
                    z = I.useState(""),
                    G = (0, l.Z)(z, 2),
                    F = G[0],
                    X = G[1],
                    D = (0, Q.q7)().data,
                    B = void 0 === D ? [] : D,
                    V = (0, ce.t$)(),
                    W = (0, l.Z)(V, 2),
                    Y = W[0],
                    K = W[1].isLoading;
                (0, I.useEffect)((function() {
                    "selectedRoles" !== f && x([])
                }), [f]);
                var te = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var n;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(n = Y({
                                                groupId: t.id,
                                                title: m,
                                                text: i,
                                                imageId: Z,
                                                sendNotification: M,
                                                roleIds: b,
                                                visibility: "public" === f ? "public" : "group"
                                            }).unwrap()).error) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return", console.error("Failed to create post:", n.error));
                                    case 3:
                                        c(""), d(""), O(null), T(!0), X(""), x([]), E("group");
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
                    ne = "" === i.trim() || "" === m.trim(),
                    re = B.includes("permission-user-gallery"),
                    le = [{
                        label: I.createElement(ee.X2, {
                            className: "d-flex flex-column"
                        }, I.createElement($.Z, {
                            className: "mb-0"
                        }, "Public"), I.createElement("small", null, "Non-Group members can view this post")),
                        selectedLabel: "Public",
                        value: "public"
                    }, {
                        label: I.createElement(ee.X2, {
                            className: "d-flex flex-column"
                        }, I.createElement($.Z, {
                            className: "mb-0"
                        }, "All Group Members"), I.createElement("small", null, "All group members can view this post")),
                        selectedLabel: "Group",
                        value: "group"
                    }, {
                        label: I.createElement(ee.X2, {
                            className: "d-flex flex-column"
                        }, I.createElement($.Z, {
                            className: "mb-0"
                        }, "Selected Roles"), I.createElement("small", null, "Select the group roles who can view this post")),
                        selectedLabel: "Selected Roles",
                        value: "selectedRoles"
                    }];
                return I.createElement(ee.JX, {
                    className: "w-100"
                }, I.createElement(j.Z, {
                    isOpen: q,
                    className: (0, N.iv)({
                        name: "1ul0gzp",
                        styles: "max-width:1500px!important"
                    })
                }, I.createElement(_.Z, null, I.createElement(Yr, {
                    isSelector: !0,
                    activeTab: "photos",
                    selectedCallback: function(e, t) {
                        O(e), X(t), U(!1)
                    },
                    selectedId: null != Z ? Z : null
                })), I.createElement(J.Z, null, I.createElement(ee.zx, {
                    onClick: function() {
                        U(!1), n((0, H.b9)())
                    }
                }, "Cancel"))), I.createElement("div", {
                    className: "mb-3"
                }, I.createElement($.Z, null, "Post title"), I.createElement(ee.II, {
                    type: "text",
                    value: m,
                    onChange: function(e) {
                        return d(e.target.value)
                    },
                    maxLength: 128
                })), I.createElement("div", {
                    className: "mb-3"
                }, I.createElement($.Z, null, "Post message"), I.createElement(Qr, {
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
                }, I.createElement(gt.Z, {
                    label: "Send notification",
                    value: "sendNotification",
                    defaultChecked: M,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        T(t)
                    }
                }), I.createElement(pt.Z, null, "If on, a notification of this post will be sent to all members of the group!")), I.createElement("div", {
                    className: "mb-3"
                }, I.createElement($.Z, null, "Who can see this post"), I.createElement(ee.Lt, {
                    options: le,
                    className: "flex-grow-1",
                    value: f,
                    onChange: function(e) {
                        return E(e)
                    },
                    trimToLength: !0
                })), "selectedRoles" === f && I.createElement("div", {
                    className: "mb-3"
                }, I.createElement(Wr, {
                    group: t,
                    onChange: function(e) {
                        var t, n;
                        return null != e && null !== (t = e.target) && void 0 !== t && t.checked ? x([].concat((0, L.Z)(b), [null == e || null === (n = e.target) || void 0 === n ? void 0 : n.value])) : x(b.filter((function(t) {
                            var n;
                            return t !== (null == e || null === (n = e.target) || void 0 === n ? void 0 : n.value)
                        })))
                    },
                    selectedRoles: b
                })), I.createElement(ee.X2, {
                    className: "w-100"
                }, re && I.createElement(I.Fragment, null, I.createElement(ee.zx, {
                    neutral: !0,
                    expand: !0,
                    disabled: K,
                    loading: K,
                    onClick: function() {
                        U(!0)
                    }
                }, "Select an Image"), " "), I.createElement(ee.zx, {
                    disabled: ne || K,
                    loading: K,
                    expand: !0,
                    onClick: te
                }, "Create Post")), " ", I.createElement(qr, {
                    postData: {
                        text: i,
                        title: m,
                        imageUrl: F,
                        roleIds: b
                    },
                    groupRoles: t.roles
                }))
            };
            var el = n(78158);
            const tl = function(e) {
                var t = e.groupId,
                    n = e.showReportModal,
                    r = e.onClose,
                    a = (0, Q.XC)().data,
                    o = I.useState([]),
                    c = (0, l.Z)(o, 2),
                    s = c[0],
                    u = c[1],
                    m = I.useState([]),
                    d = (0, l.Z)(m, 2),
                    p = d[0],
                    g = d[1],
                    f = I.useState(""),
                    E = (0, l.Z)(f, 2),
                    v = E[0],
                    h = E[1],
                    x = (0, ce.A4)({
                        groupId: t,
                        userId: null == a ? void 0 : a.id
                    }, {
                        skip: !a
                    }),
                    y = x.data,
                    w = x.isLoading,
                    Z = (0, ce.gx)(),
                    k = (0, l.Z)(Z, 2),
                    N = k[0],
                    C = k[1].isLoading,
                    O = function(e, t) {
                        u(t ? [].concat((0, L.Z)(s), [e]) : s.filter((function(t) {
                            return t !== e
                        })))
                    },
                    S = function(e, t) {
                        g(t ? [].concat((0, L.Z)(p), [e]) : p.filter((function(t) {
                            return t !== e
                        })))
                    },
                    A = (null == y ? void 0 : y.results.length) > 0;
                return I.createElement(j.Z, {
                    isOpen: n && !w,
                    contentClassName: "tw-rounded-xl",
                    toggle: function() {
                        r()
                    }
                }, I.createElement(ee.oI, null, I.createElement("h4", null, "Report Group")), I.createElement(ee.Ao, null, I.createElement(ee.JX, null, I.createElement("div", {
                    className: "mb-2"
                }, I.createElement("p", {
                    className: "text-center"
                }, I.createElement("strong", null, s.length <= 0 ? "Why are you reporting this group?" : "Where is the offending content?"), " Select all that apply."), I.createElement(nl, null, I.createElement(rl, null, I.createElement("h6", null, "Why:"), I.createElement("h6", null, "Where:")), I.createElement(rl, null, I.createElement(ll, {
                    label: "Hateful",
                    disabled: A,
                    onChange: function(e) {
                        O("hateful", e.target.checked)
                    }
                }), I.createElement(ll, {
                    label: "Behaviour",
                    disabled: s.length <= 0,
                    onChange: function(e) {
                        S("group_user_behaviour", e.target.checked)
                    }
                })), I.createElement(rl, null, I.createElement(ll, {
                    label: "Malicious",
                    disabled: A,
                    onChange: function(e) {
                        O("malicious", e.target.checked)
                    }
                }), I.createElement(ll, {
                    label: "Imagery",
                    disabled: s.length <= 0,
                    onChange: function(e) {
                        S("image_banner_gallery_icon", e.target.checked)
                    }
                })), I.createElement(rl, null, I.createElement(ll, {
                    label: "Abusive/Disruptive",
                    disabled: A,
                    onChange: function(e) {
                        O("abusive_disruptive", e.target.checked)
                    }
                }), I.createElement(ll, {
                    label: "Name",
                    disabled: s.length <= 0,
                    onChange: function(e) {
                        S("group_name", e.target.checked)
                    }
                })), I.createElement(rl, null, I.createElement(ll, {
                    label: "Inappropriate",
                    disabled: A,
                    onChange: function(e) {
                        O("inappropriate", e.target.checked)
                    }
                }), I.createElement(ll, {
                    label: "Description",
                    disabled: s.length <= 0,
                    onChange: function(e) {
                        S("group_description", e.target.checked)
                    }
                })))), s.length > 0 && p.length > 0 && I.createElement("div", {
                    className: "mt-2"
                }, I.createElement(ee.gx, {
                    placeholder: "What happened? (optional)",
                    onChange: function(e) {
                        h(e.target.value)
                    },
                    disabled: A
                })), A && I.createElement("div", {
                    className: "mt-2 text-center"
                }, I.createElement("p", null, "Thank you for filing a report.", I.createElement("br", null), "Your report is under review.")), I.createElement("div", {
                    className: "p-3"
                }, I.createElement(ee.X2, null, I.createElement(ee.zx, {
                    expand: !0,
                    danger: !0,
                    onClick: function() {
                        N({
                            groupId: t,
                            reasons: s,
                            locations: p,
                            description: v
                        }), u([]), g([]), h(""), r()
                    },
                    disabled: C || A || p.length <= 0 || s.length <= 0,
                    loading: C
                }, I.createElement(M.Z, {
                    icon: i.JH
                }), "  Submit"), " ", I.createElement(ee.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        r()
                    }
                }, I.createElement(M.Z, {
                    icon: b.NB
                }), "  Cancel"))))))
            };
            var nl = (0, a.Z)("div", {
                    target: "e1k7r1d32"
                })({
                    name: "8g59bk",
                    styles: "display:flex;flex-direction:column;justify-content:start;align-items:start;height:100%;width:100%;padding:0.5rem;background:#252a30;border-radius:8px;margin-bottom:15px"
                }),
                rl = (0, a.Z)("div", {
                    target: "e1k7r1d31"
                })({
                    name: "u9ra9s",
                    styles: "display:flex;flex-direction:row;justify-content:space-around;align-items:start;height:100%;width:100%;padding:0.5rem;>*{flex:1;}"
                }),
                ll = (0, a.Z)(ee.XZ, {
                    target: "e1k7r1d30"
                })({
                    name: "18dr3x4",
                    styles: "margin:0.5rem"
                });
            const al = function(e) {
                var t = e.group,
                    n = e.showBlockModal,
                    r = e.onClose,
                    a = (0, ce.WG)(),
                    o = (0, l.Z)(a, 2),
                    c = o[0],
                    s = o[1].isSuccess;
                return I.useEffect((function() {
                    s && r()
                }), [s]), I.createElement(j.Z, {
                    className: "text-center text-break",
                    isOpen: n,
                    toggle: function() {
                        r()
                    }
                }, I.createElement(ee.oI, null, I.createElement("h4", null, "Block ", null == t ? void 0 : t.name, "?")), I.createElement(ee.Ao, null, I.createElement("p", null, "Are you sure you want to block ", null == t ? void 0 : t.name, "?", I.createElement("br", null), " You will no longer be able to:", I.createElement("br", null), I.createElement("br", null), "• Join this group.", I.createElement("br", null), "• Get invites from this group. 💔"), I.createElement(ee.X2, null, I.createElement(ee.zx, {
                    danger: !0,
                    expand: !0,
                    onClick: function() {
                        c({
                            groupId: null == t ? void 0 : t.id
                        })
                    }
                }, I.createElement(ee.$1, {
                    icon: i.JH
                }), "   Block"), " ", I.createElement(ee.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: r
                }, "Cancel"))))
            };
            const ol = function() {
                return I.createElement(I.Fragment, null, I.createElement(ee.oI, {
                    className: "text-center"
                }, I.createElement("h2", null, "You've Blocked this Group!")), I.createElement(ee.Ao, {
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
                return I.createElement(ul, null, o ? I.createElement(ee.UU, {
                    width: "100%",
                    height: "30px",
                    className: "mt-4"
                }) : I.createElement(ee.X2, {
                    className: "tw-justify-between"
                }, I.createElement(ee.JX, {
                    className: "gap-1"
                }, I.createElement(ee.X2, null, I.createElement(ee.$1, {
                    className: "tw-mt-[8px]",
                    icon: g.qm,
                    width: 20
                }), i ? I.createElement("span", {
                    className: "tw-mt-[6px]"
                }, I.createElement(S.rU, {
                    to: "/home/user/".concat(r.id)
                }, r.displayName), " has initiated a transfer of ownership to you") : I.createElement("span", {
                    className: "tw-mt-[6px]"
                }, c ? "You have initiated an ownership transfer to " : "Ownership transfer has been initiated to ", I.createElement(S.rU, {
                    to: "/home/user/".concat(r.id)
                }, r.displayName)))), I.createElement(ee.JX, {
                    className: "gap-1"
                }, I.createElement(ee.X2, {
                    className: "tw-gap-[12px]"
                }, i && I.createElement(ee.zx, {
                    success: !0,
                    onClick: function() {
                        return l()
                    }
                }, I.createElement(ee.$1, {
                    icon: x.LE
                }), "  Accept"), I.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        return a()
                    }
                }, I.createElement(ee.$1, {
                    icon: il.EO
                }), " ", i ? "Decline" : "Cancel")))))
            };
            cl.propTypes = {
                group: ue().object.isRequired,
                currentUser: ue().object.isRequired,
                targetUser: ue().object.isRequired,
                onCancel: ue().func.isRequired,
                inAccept: ue().func,
                isLoading: ue().bool
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
                    h = (0, l.Z)(v, 2),
                    b = h[0],
                    x = h[1],
                    y = n.id,
                    w = n.roles,
                    Z = n.myMember,
                    k = 10,
                    N = Math.ceil((i + 1) / k),
                    C = (0, ce.Aw)(),
                    O = (0, l.Z)(C, 2),
                    S = O[0],
                    j = O[1],
                    A = j.isLoading,
                    M = j.isSuccess,
                    T = (0, ml.Y)({
                        rootMargin: "50px 0px",
                        onEnter: function(e) {
                            (0, e.unobserve)(), c(i + 1)
                        }
                    }),
                    R = T.observe,
                    P = (0, ml.Y)({
                        rootMargin: "0px 0px",
                        onEnter: function(e) {
                            var t = e.scrollDirection,
                                n = e.unobserve;
                            "down" === t.vertical && (n(), c(i - 1))
                        }
                    }).observe,
                    q = (0, ce._n)({
                        pageValue: i - 1,
                        n: k,
                        groupId: y,
                        publicOnly: !Z
                    }, {
                        skip: 1 === i,
                        refetchOnMountOrArgChange: !0
                    }),
                    U = (0, ce._n)({
                        pageValue: i,
                        n: k,
                        groupId: y,
                        publicOnly: !Z
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    z = (0, ce._n)({
                        pageValue: i + 1,
                        n: k,
                        groupId: y,
                        publicOnly: !Z
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    G = (0, I.useMemo)((function() {
                        var e = new Array(k * (N + 1)).fill(null);
                        return (0, L.Z)(new Set([q.data, U.data, z.data])).map((function(t) {
                            return null != t && t.posts ? e.splice.apply(e, [t.offset, t.posts.length].concat((0, L.Z)(t.posts))) : []
                        })), e.filter((function(e) {
                            return null !== e
                        }))
                    }), [k, q.data, U.data, z.data]);
                (0, I.useEffect)((function() {
                    d(G.some((function(e) {
                        return null !== e
                    })))
                }), [G]), (0, I.useEffect)((function() {
                    M && E(!1)
                }), [M]);
                var F = function(e) {
                        x(e), E(!0)
                    },
                    X = (0, I.useMemo)((function() {
                        return m ? G.map((function(e, t) {
                            return null !== e ? I.createElement("div", {
                                key: e.id
                            }, I.createElement(qr, {
                                myMember: Z,
                                postData: e,
                                observe: t === G.length - 1 ? R : 0 === t && 1 !== i ? P : null,
                                isEditMode: r,
                                deleteCallback: F,
                                groupRoles: w
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
                            groupId: y,
                            postId: b.id
                        })
                    },
                    isLoading: A
                }), I.createElement(El, null, I.createElement(hl, null, I.createElement(vl, null, "Posts")), I.createElement(bl, null, I.createElement(fl, null, I.createElement("div", {
                    className: "col"
                }, X))))) : null
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
                hl = (0, a.Z)(oe.JX, {
                    target: "emafa4s1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                bl = (0, a.Z)(hl, {
                    target: "emafa4s0"
                })({
                    name: "18clcmv",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto"
                });
            const xl = function(e) {
                var t, n, r, a = e.group,
                    o = (void 0 === a ? null : a).id,
                    i = (0, O.s0)(),
                    c = I.useState(0),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = I.useState(!1),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = (0, ce.V3)({
                        groupId: o,
                        perPage: 51,
                        offset: u
                    }),
                    v = E.data,
                    h = E.isLoading,
                    b = E.isError,
                    x = (null == v ? void 0 : v.length) > 50,
                    y = (0, ce.Rx)(),
                    w = (0, l.Z)(y, 2),
                    Z = w[0],
                    k = w[1],
                    N = k.error,
                    C = k.isSuccess,
                    S = k.isError,
                    j = k.isLoading,
                    A = null !== (t = null == v ? void 0 : v.filter((function(e) {
                        return !!e.user
                    }))) && void 0 !== t ? t : [],
                    M = h ? I.createElement(yl, {
                        height: "130px"
                    }) : I.createElement(I.Fragment, null, null != A && A.length ? I.createElement(wl, null, null == A ? void 0 : A.slice(0, 50).map((function(e) {
                        return I.createElement(Qt, {
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
                return I.createElement(I.Fragment, null, I.createElement(wn, {
                    isOpen: g,
                    cancelCallback: function() {
                        return f(!1)
                    },
                    groupId: o,
                    isGroupMemberOnly: !1
                }), I.createElement(ee.zx, {
                    className: "mb-2",
                    color: "primary",
                    onClick: function() {
                        f(!0)
                    }
                }, "Ban Somebody"), I.createElement(ee.oI, null, I.createElement("h4", {
                    className: "text-center"
                }, "Banned Users")), I.createElement(ee.Ao, null, b && I.createElement(ee.qX, {
                    type: "error",
                    title: "Something went wrong"
                }, "We couldn't load the list of banned users. Please try again later!"), C && I.createElement(ee.qX, {
                    slim: !0,
                    type: "success"
                }, "User unbanned. They can now be invited back in if you like."), S && I.createElement(ee.qX, {
                    type: "error",
                    title: "Failed to unban user"
                }, null !== (n = null === (r = N.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : N.data.error), M, I.createElement(Zl, null, I.createElement(kl, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u - 50)
                    },
                    disabled: h || 0 === u
                }, I.createElement(ee.$1, {
                    icon: ae.A3
                })), I.createElement(Nl, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u + 50)
                    },
                    disabled: h || !x
                }, I.createElement(ee.$1, {
                    icon: le._t
                })))))
            };
            var yl = (0, a.Z)(ee.UU, {
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
                Zl = (0, a.Z)("div", {
                    target: "eqx7h3n2"
                })({
                    name: "1vtota4",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-bottom:8px"
                }),
                kl = (0, a.Z)(ee.zx, {
                    target: "eqx7h3n1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                Nl = (0, a.Z)(ee.zx, {
                    target: "eqx7h3n0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                });
            const Il = function() {
                var e, t, n, a = I.useState(!1),
                    Z = (0, l.Z)(a, 2),
                    P = Z[0],
                    L = Z[1],
                    q = I.useState(!1),
                    U = (0, l.Z)(q, 2),
                    z = U[0],
                    G = U[1],
                    F = I.useState(!1),
                    X = (0, l.Z)(F, 2),
                    D = X[0],
                    _ = X[1],
                    J = I.useState(!1),
                    $ = (0, l.Z)(J, 2),
                    B = $[0],
                    V = $[1],
                    H = I.useState(!1),
                    te = (0, l.Z)(H, 2),
                    ne = te[0],
                    le = te[1],
                    ae = I.useState(!1),
                    oe = (0, l.Z)(ae, 2),
                    se = oe[0],
                    ue = oe[1],
                    me = I.useState(!1),
                    de = (0, l.Z)(me, 2),
                    pe = de[0],
                    ge = de[1],
                    fe = I.useState(!1),
                    Ee = (0, l.Z)(fe, 2),
                    ve = Ee[0],
                    he = Ee[1],
                    be = I.useState(!1),
                    xe = (0, l.Z)(be, 2),
                    ye = xe[0],
                    we = xe[1],
                    Ze = (0, Q.q7)().data,
                    ke = void 0 === Ze ? [] : Ze,
                    Ne = (0, C.I0)(),
                    Ie = (0, W.y)(),
                    Ce = Ie.data,
                    Oe = Ie.isLoading,
                    Se = 0,
                    je = 0;
                Ie.isSuccess && (Se = Ce.constants.GROUPS.MAX_JOINED, je = Ce.constants.GROUPS.MAX_JOINED_PLUS), ke.includes("permission-extra-group-count") && (Se = Math.max(Se, je || 0));
                var Ae = (0, O.UO)().groupId,
                    Me = (0, Q.XC)().data,
                    Te = (0, ce.r5)({
                        groupId: Ae,
                        purpose: "group"
                    }),
                    Re = Te.data,
                    Pe = Te.isSuccess,
                    Le = Te.isFetching,
                    qe = Te.isError,
                    Ue = Te.error,
                    ze = (0, ie.pc)(),
                    Ge = (0, ce.dj)({
                        userId: null == Me ? void 0 : Me.id
                    }),
                    Fe = Ge.data,
                    Xe = Ge.isLoading,
                    De = (0, ce.xI)(),
                    Je = (0, l.Z)(De, 2),
                    $e = Je[0],
                    Be = Je[1],
                    Ve = Be.isLoading,
                    We = Be.isError,
                    He = Be.error,
                    Ye = (0, ce.i2)(),
                    Qe = (0, l.Z)(Ye, 2),
                    Ke = Qe[0],
                    et = Qe[1].isLoading,
                    tt = (0, ce.MQ)(),
                    nt = (0, l.Z)(tt, 2),
                    rt = nt[0],
                    lt = nt[1].isLoading,
                    at = (0, ce.DU)(),
                    ot = (0, l.Z)(at, 2),
                    it = ot[0],
                    ct = ot[1],
                    st = ct.isLoading,
                    ut = ct.isError,
                    mt = ct.error,
                    dt = ct.isSuccess,
                    pt = null !== (null == Re ? void 0 : Re.deletedAt),
                    gt = (0, wt.Ul)({
                        userId: null == Re ? void 0 : Re.ownerId,
                        groupId: null == Re ? void 0 : Re.id,
                        active: !0
                    }, {
                        skip: !Re
                    }),
                    ft = gt.data,
                    vt = void 0 === ft ? [] : ft,
                    ht = gt.isLoading;
                I.useEffect((function() {
                    Re && !Le && G(!0)
                }), [Re, Le]), I.useEffect((function() {
                    dt && ge(!1)
                }), [dt]);
                var bt, xt, yt = I.useMemo((function() {
                        return !!z && (null !== Re.transferTargetId || void 0 !== Re.transferTargetId)
                    }), [z]),
                    Zt = (null == Re ? void 0 : Re.transferTargetId) === (null == Me ? void 0 : Me.id) ? null == Re ? void 0 : Re.ownerId : null == Re ? void 0 : Re.transferTargetId,
                    kt = (0, K.GR)(Zt, {
                        skip: null == Re || Le || !yt || !Zt,
                        refetchOnMountOrArgChange: !0
                    }),
                    Nt = kt.data,
                    It = kt.isFetching,
                    Ct = kt.isError,
                    Ot = kt.error,
                    St = (0, ce.HT)(),
                    jt = (0, l.Z)(St, 2),
                    At = jt[0],
                    Mt = jt[1],
                    Tt = Mt.data,
                    Rt = (Mt.isFetching, Mt.isError),
                    Pt = Mt.error,
                    Lt = (0, ce.rq)(),
                    qt = (0, l.Z)(Lt, 2),
                    Ut = qt[0],
                    zt = qt[1],
                    Gt = zt.data,
                    Ft = (zt.isFetching, zt.isError),
                    Xt = (zt.error, function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var t, n;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return he(!0), e.prev = 1, e.next = 4, At({
                                            groupId: Re.id,
                                            transferTargetId: Re.transferTargetId
                                        }).unwrap();
                                    case 4:
                                        Rt && Ne((0, Y.d)({
                                            title: "Group Transfer Error",
                                            icon: y.eH,
                                            message: "".concat(null == Pt || null === (t = Pt.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), he(!1)), !Rt && Tt && Ne((0, Y.d)({
                                            title: "Group Transfer Accepted",
                                            icon: w.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }), he(!1)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Ne((0, Y.d)({
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
                    Dt = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var t, n;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return he(!0), e.prev = 1, e.next = 4, Ut({
                                            groupId: Re.id,
                                            transferTargetId: null == Re ? void 0 : Re.transferTargetId
                                        }).unwrap();
                                    case 4:
                                        Ft && Ne((0, Y.d)({
                                            title: "Cancel Group Transfer Error",
                                            icon: y.eH,
                                            message: "".concat(null == Gt || null === (t = Gt.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), he(!1)), !Ft && Gt && Ne((0, Y.d)({
                                            title: "Cancel Group Transfer Success",
                                            icon: w.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }), he(!1)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Ne((0, Y.d)({
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
                if (!Re || Le || ht || lt || et || Ve || Xe || Oe) return (se || ne) && (le(!1), ue(!1)), yt && !Nt || It ? I.createElement(ee.UU, {
                    width: "100%",
                    height: "200px",
                    className: "mt-4"
                }) : !Ct || qe || It ? qe ? I.createElement(I.Fragment, null, I.createElement(ee.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: "Something went wrong with getting this group! (".concat(null == Ue || null === (bt = Ue.data) || void 0 === bt || null === (bt = bt.error) || void 0 === bt ? void 0 : bt.message, ")")
                }), I.createElement("div", {
                    className: "text-center"
                }, I.createElement(S.rU, {
                    to: "/home/groups"
                }, "Go Back! 😭"))) : I.createElement(I.Fragment, null, I.createElement(ee.UU, {
                    width: "100%",
                    height: "200px",
                    className: "mt-4"
                }), I.createElement(ee.UU, {
                    width: "100%",
                    height: "500px",
                    className: "mt-5"
                })) : I.createElement(ee.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: "Something went wrong with getting target user! (".concat(null == Ot || null === (xt = Ot.data) || void 0 === xt || null === (xt = xt.error) || void 0 === xt ? void 0 : xt.message, ")")
                });
                var _t, Jt = function() {
                        _(!1), $e({
                            groupId: Ae
                        })
                    },
                    $t = function() {
                        V(!1), Re.rules ? _(!0) : Jt()
                    },
                    Bt = Pe && Re.myMember && Re.myMember.roleIds.reduce((function(e, t) {
                        if (e) return e;
                        var n = Re.roles.find((function(e) {
                            return e.id === t
                        }));
                        return !(null == n || !n.requiresTwoFactor || !1 !== Re.myMember.has2FA) && n
                    }), !1),
                    Vt = Re.membershipStatus;
                if (Re.memberCount < Et.qH && (Fe.length < Se || Me.tagsSet.has("admin_uncap_owned_groups"))) {
                    if (Vt === Et.oq.REQUESTED) _t = I.createElement(ee.zx, {
                        danger: !0,
                        onClick: function() {
                            return Ke({
                                groupId: Ae
                            })
                        },
                        disabled: Ve,
                        loading: Ve
                    }, I.createElement(M.Z, {
                        icon: b.NB
                    }), "  Cancel Join Request");
                    else if (Vt === Et.oq.INVITED) _t = I.createElement(ee.zx, {
                        success: !0,
                        onClick: Jt
                    }, I.createElement(M.Z, {
                        icon: x.LE
                    }), "  Accept Invite");
                    else if (Vt === Et.oq.USER_BLOCKED) _t = null;
                    else if (!Re.myMember) switch (Re.joinState) {
                        case Et.wN.OPEN:
                            _t = I.createElement(ee.zx, {
                                onClick: $t,
                                disabled: Ve,
                                loading: Ve
                            }, I.createElement(M.Z, {
                                icon: o.r8
                            }), "  Join Group");
                            break;
                        case Et.wN.REQUEST:
                            _t = I.createElement(ee.zx, {
                                onClick: $t
                            }, I.createElement(M.Z, {
                                icon: s.FU
                            }), " Request to Join");
                            break;
                        default:
                            _t = I.createElement(ee.zx, {
                                disabled: !0
                            }, "Closed to New Members")
                    }
                    Re.joinState !== Et.wN.INVITE || Re.myMember || (_t = I.createElement(ee.zx, {
                        disabled: !0
                    }, "Closed to New Members"))
                } else Fe.length >= Se && !Me.tagsSet.has("admin_uncap_owned_groups") ? _t = I.createElement(ee.zx, {
                    disabled: !0
                }, "You can't join more than ", Se, " groups!") : Re.myMember || (_t = I.createElement(ee.zx, {
                    disabled: !0
                }, "Group is Full"));
                if (!Re.id) return null;
                var Ht = Vt === Et.oq.USER_BLOCKED;
                return I.createElement(I.Fragment, null, I.createElement(ee.$4, null, null !== (e = null == Re ? void 0 : Re.name) && void 0 !== e ? e : "Group"), I.createElement(j.Z, {
                    isOpen: B,
                    toggle: function() {
                        V(!1)
                    }
                }, I.createElement(Ol, null, I.createElement("h4", {
                    className: "text-center"
                }, "Unblock this Group?")), I.createElement(Sl, null, I.createElement(ee.JX, null, I.createElement("div", {
                    className: "p-3 text-center"
                }, "Are you sure you want to unblock ", I.createElement("strong", null, Re.name), "?"), I.createElement("div", {
                    className: "p-3"
                }, I.createElement(ee.X2, null, I.createElement(ee.zx, {
                    expand: !0,
                    onClick: function() {
                        V(!1), rt({
                            groupId: Ae,
                            userId: Me.id
                        })
                    }
                }, I.createElement(M.Z, {
                    icon: x.LE
                }), "  Unblock Group"), " ", I.createElement(ee.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        V(!1)
                    }
                }, I.createElement(M.Z, {
                    icon: b.NB
                }), "  Cancel")))))), I.createElement(j.Z, {
                    isOpen: D,
                    toggle: function() {
                        _(!1)
                    }
                }, I.createElement(Ol, null, I.createElement("h4", {
                    className: "text-center"
                }, "Rules")), I.createElement(Sl, null, I.createElement(ee.JX, null, I.createElement("div", {
                    className: "p-3"
                }, I.createElement("p", null, "By joining this group, you agree to the following rules:"), I.createElement(Al, null, Re.rules)), I.createElement("div", {
                    className: "p-3"
                }, I.createElement(ee.X2, null, I.createElement(ee.zx, {
                    expand: !0,
                    onClick: Jt,
                    disabled: Ve,
                    loading: Ve
                }, Re.joinState === Et.wN.OPEN ? I.createElement(I.Fragment, null, I.createElement(M.Z, {
                    icon: o.r8
                }), "  Join Group") : I.createElement(I.Fragment, null, I.createElement(M.Z, {
                    icon: s.FU
                }), "  Request to Join")), " ", I.createElement(ee.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        _(!1)
                    }
                }, I.createElement(M.Z, {
                    icon: b.NB
                }), "  Cancel")))))), I.createElement(j.Z, {
                    isOpen: pe,
                    toggle: function() {
                        return ge(!1)
                    }
                }, I.createElement(Ol, null, I.createElement("h4", {
                    className: "text-center"
                }, "Decline Group Invite?")), I.createElement(Sl, null, I.createElement(ee.JX, null, I.createElement("div", {
                    className: "p-3 text-center"
                }, "Are you sure you want to decline invite to ", I.createElement("strong", null, Re.name), "?"), I.createElement("div", {
                    className: "px-3 text-center d-flex justify-content-center"
                }, I.createElement(_e.Z, {
                    id: "block-invites",
                    checked: ye,
                    onChange: function(e) {
                        return we(e.target.checked)
                    },
                    label: "Block this group, preventing further invites",
                    htmlFor: "block-invites"
                })), I.createElement("div", {
                    className: "p-3"
                }, I.createElement(ee.X2, null, I.createElement(ee.zx, {
                    expand: !0,
                    danger: !0,
                    onClick: function() {
                        return it({
                            groupId: Ae,
                            block: ye
                        })
                    },
                    loading: st
                }, I.createElement(M.Z, {
                    icon: x.LE
                }), "  Decline Invite"), " ", I.createElement(ee.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        ge(!1)
                    }
                }, I.createElement(M.Z, {
                    icon: b.NB
                }), "  Cancel")))))), I.createElement(tl, {
                    groupId: Ae,
                    showReportModal: ne,
                    onClose: function() {
                        le(!1)
                    }
                }), I.createElement(al, {
                    group: Re,
                    showBlockModal: se,
                    onClose: function() {
                        ue(!1)
                    }
                }), I.createElement("div", {
                    className: (0, N.iv)({
                        name: "g46w8s",
                        styles: "margin-bottom:30px"
                    })
                }, I.createElement(ee.X2, {
                    className: "mb-2 justify-content-end"
                }, (null == Re ? void 0 : Re.ownerId) !== Me.id && I.createElement(I.Fragment, null, I.createElement(ee.zx, {
                    neutral: !0,
                    onClick: function() {
                        le(!0)
                    }
                }, I.createElement(ee.$1, {
                    icon: i.JH
                }), " Report"), "userblocked" !== (null == Re ? void 0 : Re.membershipStatus) && !(null != Re && Re.myMember) && I.createElement(I.Fragment, null, " ", I.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        ue(!0)
                    }
                }, I.createElement(ee.$1, {
                    icon: h.jA
                }), " Block")), "userblocked" === (null == Re ? void 0 : Re.membershipStatus) && I.createElement(I.Fragment, null, " ", I.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        V(!0)
                    }
                }, I.createElement(M.Z, {
                    icon: v.faBan
                }), " Unblock")))), I.createElement(el.Z, {
                    group: Re
                }), Bt && I.createElement(ee.X2, null, I.createElement(A.Z, {
                    color: "warning"
                }, "Your VRChat account does not have 2FA enabled. Your role '", Bt.name, "' in ", Re.name, " requires this. Until you enable 2FA, your ability to manage ", Re.name, " will be limited.")), ze && pt && I.createElement(ee.X2, null, I.createElement(Ml, null, " THIS GROUP HAS BEEN DELETED ")), We && I.createElement(ee.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: (null == He || null === (t = He.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred while trying to join ".concat(null == Re ? void 0 : Re.name, ".")
                }), ut && I.createElement(ee.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: (null == mt || null === (n = mt.data) || void 0 === n ? void 0 : n.error.message) || "An error occurred while trying to decline group invitation."
                }), I.createElement("div", {
                    className: "d-flex flex-row justify-content-center align-content-center mb-2"
                }, _t, Vt === Et.oq.INVITED && I.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        return ge(!0)
                    },
                    className: "mx-2"
                }, I.createElement(M.Z, {
                    icon: E.YI
                }), "  Decline Invite")), Ht ? I.createElement(ol, null) : I.createElement(I.Fragment, null, yt && !It && Zt && I.createElement(sl, {
                    group: Re,
                    currentUser: Me,
                    targetUser: Nt,
                    onAccept: Xt,
                    onCancel: Dt,
                    isLoading: ve
                }), I.createElement(re.Z, {
                    tabs: [{
                        name: "Overview",
                        to: "/home/group/".concat(Re.id),
                        end: !0,
                        icon: f.X8,
                        condition: !0
                    }, {
                        name: "Posts",
                        to: "posts",
                        icon: g.qm,
                        condition: T({
                            groupMember: null == Re ? void 0 : Re.myMember,
                            permission: "group-announcement-manage"
                        })
                    }, {
                        name: "Store",
                        to: "store",
                        icon: p.m6,
                        condition: null == vt ? void 0 : vt.length
                    }, {
                        name: "Instances",
                        to: "instances",
                        icon: d.FG,
                        condition: null == Re ? void 0 : Re.myMember
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
                        condition: ze || T({
                            groupMember: null == Re ? void 0 : Re.myMember,
                            permission: "group-invites-manage"
                        })
                    }, {
                        name: "Settings",
                        to: "settings",
                        icon: c.b7,
                        condition: ze || (null == Re ? void 0 : Re.myMember) || T({
                            groupMember: null == Re ? void 0 : Re.myMember,
                            permission: "group-data-manage"
                        }) || T({
                            groupMember: null == Re ? void 0 : Re.myMember,
                            permission: "group-roles-manage"
                        })
                    }, {
                        name: "Banned Users",
                        to: "bans",
                        icon: i.JH,
                        condition: ze || T({
                            groupMember: null == Re ? void 0 : Re.myMember,
                            permission: "group-bans-manage"
                        })
                    }]
                }), I.createElement(O.Z5, null, I.createElement(O.AW, {
                    path: "/",
                    element: I.createElement(I.Fragment, null, Pe && I.createElement(gl, {
                        group: Re
                    }), I.createElement(Cl, null, I.createElement(ee.JX, {
                        className: "m-1"
                    }, I.createElement(Sn, {
                        langs: Re.languages
                    })), I.createElement(ee.JX, {
                        className: "m-1"
                    }, I.createElement(qn, {
                        links: Re.links
                    }))), I.createElement(Cl, null, I.createElement(ee.JX, {
                        className: "m-1 mt-2 mw-100"
                    }, I.createElement(Ol, null, I.createElement("h4", null, "About This Group")), I.createElement(jl, null, I.createElement("p", {
                        className: "w-100 text-break"
                    }, Re.description))), Re.rules && I.createElement(I.Fragment, null, I.createElement(ee.JX, {
                        className: "m-1 mt-2 mw-100"
                    }, I.createElement(Ol, null, I.createElement("h4", null, "Rules")), I.createElement(jl, null, I.createElement("p", {
                        className: "w-100 text-break"
                    }, Re.rules))))))
                }), I.createElement(O.AW, {
                    path: "/posts",
                    element: (ze || T({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-announcement-manage"
                    })) && Pe ? I.createElement(I.Fragment, null, P ? I.createElement(ee.X2, null, I.createElement(ee.JX, {
                        className: "w-100"
                    }, I.createElement(ee.oI, null, I.createElement("h4", {
                        className: "text-center"
                    }, "Create Post")), I.createElement(ee.Ao, null, I.createElement(ee.JX, {
                        className: "w-100"
                    }, I.createElement(Kr, {
                        group: Re
                    }), I.createElement(ee.zx, {
                        onClick: function() {
                            return L(!1)
                        }
                    }, "Cancel"))))) : I.createElement(ee.zx, {
                        onClick: function() {
                            return L(!0)
                        }
                    }, I.createElement(ee.$1, {
                        icon: o.r8
                    }), " Create Post"), I.createElement(gl, {
                        isEditMode: !0,
                        group: Re
                    })) : I.createElement(R.Z, {
                        to: ".."
                    })
                }), I.createElement(O.AW, {
                    path: "/galleries/*",
                    element: I.createElement(ar, {
                        group: Re
                    })
                }), I.createElement(O.AW, {
                    path: "/subscribe",
                    element: I.createElement(R.Z, {
                        to: "store"
                    })
                }), I.createElement(O.AW, {
                    path: "/store",
                    element: I.createElement(Mr, {
                        group: Re
                    })
                }), I.createElement(O.AW, {
                    path: "/instances",
                    element: I.createElement(mr, {
                        group: Re
                    })
                }), I.createElement(O.AW, {
                    path: "/invites/*",
                    element: ze || T({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-invites-manage"
                    }) ? I.createElement(xr, {
                        group: Re
                    }) : I.createElement(R.Z, {
                        to: ".."
                    })
                }), I.createElement(O.AW, {
                    path: "/members",
                    element: I.createElement(In, {
                        group: Re
                    })
                }), I.createElement(O.AW, {
                    path: "/settings/*",
                    element: ze || null != Re && Re.myMember || T({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-data-manage"
                    }) || T({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-roles-manage"
                    }) ? I.createElement(Wt, {
                        group: Re
                    }) : I.createElement(R.Z, {
                        to: ".."
                    })
                }), I.createElement(O.AW, {
                    path: "/bans",
                    element: ze || T({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-members-manage"
                    }) ? I.createElement(xl, {
                        group: Re
                    }) : I.createElement(R.Z, {
                        to: ".."
                    })
                })))))
            };
            var Cl = (0, a.Z)(ee.X2, {
                    target: "e7n20a25"
                })("flex-wrap:wrap;margin:-0.25rem;>", ee.JX, "{min-width:300px;flex:1;}"),
                Ol = (0, a.Z)(ee.JX, {
                    target: "e7n20a24"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                Sl = (0, a.Z)(Ol, {
                    target: "e7n20a23"
                })({
                    name: "vnq3j7",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto;white-space:pre-line"
                }),
                jl = (0, a.Z)(Sl, {
                    target: "e7n20a22"
                })({
                    name: "di36rf",
                    styles: "overflow-y:auto;white-space:pre-line;max-height:300px"
                }),
                Al = (0, a.Z)("p", {
                    target: "e7n20a21"
                })({
                    name: "votlfh",
                    styles: "overflow-y:auto;white-space:pre-line;max-height:400px;background:#252a30;padding:0.5rem;border-radius:8px"
                }),
                Ml = (0, a.Z)("h3", {
                    target: "e7n20a20"
                })({
                    name: "bbnlne",
                    styles: "margin:14px auto;color:#ffd866;text-align:center;font-weight:bold"
                })
        }
    }
]);
//# sourceMappingURL=6c68c77b4b8a428c8dcdcba826959ca2c10c6aaed2e1c5ef2427386404e5b761.js.map