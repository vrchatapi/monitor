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
                w = n(68055),
                x = n(76553),
                y = n(6811),
                Z = n(64687),
                k = n.n(Z),
                N = n(83505),
                I = n(67294),
                O = n(32981),
                C = n(89250),
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
                U = n(42619),
                q = n(70265),
                z = n(5702),
                F = n(78439),
                G = n(47810),
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

            function we(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function xe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? we(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : we(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ye = function(e) {
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
                    w = (0, l.Z)(b, 2),
                    x = w[0],
                    y = w[1],
                    Z = (0, ie.Nr)(v),
                    k = (0, I.useState)([
                        [],
                        []
                    ]),
                    N = (0, l.Z)(k, 2),
                    O = N[0],
                    C = N[1],
                    S = (0, Q.XC)().data,
                    j = null == o ? void 0 : o.id,
                    A = null == o ? void 0 : o.ownerId,
                    M = null == o ? void 0 : o.myMember,
                    T = (0, ce.Pv)(),
                    R = (0, l.Z)(T, 2),
                    P = R[0],
                    U = R[1],
                    q = U.data,
                    z = U.error,
                    F = U.isLoading,
                    G = (null == q || null === (t = q.members) || void 0 === t ? void 0 : t.length) < 25;
                I.useEffect((function() {
                    ue(0)
                }), []), I.useEffect((function() {
                    var e = (0, L.Z)(O);
                    if (q) {
                        var t;
                        if (q.page <= 0 && !v) e[0] = [null != o && o.myMember ? xe(xe({}, M), {}, {
                            userId: S.id,
                            user: xe(xe({}, S), {}, {
                                thumbnailUrl: null !== (t = S.profilePicOverride) && void 0 !== t ? t : S.currentAvatarImageUrl
                            })
                        }) : null].concat((0, L.Z)(q.members));
                        else e[q.page] = q.members;
                        C(e)
                    }
                }), [q]), (0, I.useEffect)((function() {
                    setTimeout((function() {
                        i && null != g && g.current && g.current.focus()
                    }), 300)
                }), [i, g]), (0, I.useEffect)((function() {
                    y(1)
                }), [v]), (0, I.useEffect)((function() {
                    h("")
                }), [i]);
                var X = (0, ce.Pi)({
                        groupId: j,
                        pageValue: x,
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
                        pageValue: x,
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
                        }), y(e + 1)
                    },
                    me = null == O ? void 0 : O.map((function(e, t) {
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
                }, "We couldn't find anything with that search.")), F ? I.createElement(ee.UU, {
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
                    disabled: F || z || G,
                    loading: F
                }, z || G ? "No more members..." : "List More Members")), (B || se) && I.createElement(oe.Gz, null, I.createElement(oe.IT, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return y(x - 1)
                    },
                    disabled: 1 === x || $ || re
                }, I.createElement(ee.$1, {
                    icon: ae.A3
                })), I.createElement("span", null, x), I.createElement(oe.UV, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return y(x + 1)
                    },
                    disabled: (null == D ? void 0 : D.isLastPage) || (null == W ? void 0 : W.isLastPage) || $ || re
                }, I.createElement(ee.$1, {
                    icon: le._t
                }))))))
            };
            ye.propTypes = {
                group: ue().object,
                isOpen: ue().bool.isRequired,
                cancelCallback: ue().func.isRequired,
                memberEditCallback: ue().func,
                memberSelectCallback: ue().func
            };
            const Ze = ye;
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
            const Oe = function(e) {
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
            var Ce = function(e) {
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
                    w = E.error,
                    x = I.useMemo((function() {
                        return null == v || !v.requirements || !v.requirements.groupNotMonetized
                    }), [v, b]);
                return I.createElement(I.Fragment, null, s && I.createElement(Oe, {
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
                }, (null == w || null === (n = w.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unkown error fetching Group Owner Requirements Data"), x && !b ? I.createElement("span", {
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
                    disabled: o || b || x,
                    loading: o
                }, I.createElement(ee.$1, {
                    className: "tw-mr-2",
                    icon: Ie.faMagnifyingGlass
                }), "Search Group Members"))))))
            };
            Ce.propTypes = {
                group: ue().object.isRequired,
                onButtonClick: ue().func.isRequired,
                isLoading: ue().bool.isRequired
            };
            const Se = Ce;
            var je, Ae = "hasVerifiedEmail",
                Me = "targetCanOwnMoreGroups",
                Te = "targetIsGroupMember",
                Re = "hasVRCPlus",
                Pe = "groupNotMonetized",
                Le = (je = {}, (0, P.Z)(je, Ae, "Email address has not been verified"), (0, P.Z)(je, Me, "Already owns maximum nubmer of groups per user"), (0, P.Z)(je, Te, "Is not a valid member of the group"), (0, P.Z)(je, Re, "Does not have an active VRChat Plus subscription"), (0, P.Z)(je, Pe, "Group is not valid because it is monetized"), je);
            const Ue = function(e) {
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
            var qe = n(34698),
                ze = n(58877),
                Fe = n(25402);
            const Ge = function(e) {
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
                    w = (0, l.Z)(b, 2),
                    x = w[0],
                    y = w[1],
                    Z = null != n ? n : [],
                    N = function() {
                        g(!0), y(!1)
                    },
                    O = function() {
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
                    C = function() {
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
                }, I.createElement(Fe.QZ, {
                    url: s,
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                })))), I.createElement(qe.Z, {
                    onClick: function() {
                        g(!1), u(v)
                    }
                }, "Cancel"), I.createElement(qe.Z, {
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
                    onClick: C
                }, I.createElement("span", {
                    "aria-hidden": "true"
                }, "×")))) : I.createElement("div", null)
            };
            var Xe = (0, a.Z)(qe.Z, {
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
                    w = I.useState([]),
                    x = (0, l.Z)(w, 2),
                    y = x[0],
                    Z = x[1],
                    k = I.useState([]),
                    N = (0, l.Z)(k, 2),
                    O = N[0],
                    C = N[1],
                    S = (0, ce.hg)(),
                    j = (0, l.Z)(S, 2),
                    A = j[0],
                    M = j[1],
                    T = M.data,
                    R = M.isFetching,
                    P = M.isError,
                    U = (0, ce.rw)({
                        groupId: n.id
                    }, {
                        skip: !n
                    }),
                    q = U.data,
                    z = U.isFetching,
                    F = U.isError;
                I.useEffect((function() {
                    C(y.map((function(e) {
                        return e.value
                    })))
                }), [y]), I.useEffect((function() {
                    if (q && 0 === h.length) {
                        var e = q.map((function(e, t) {
                            var n = e.split(".").map((function(e) {
                                return e.charAt(0).toUpperCase() + e.slice(1)
                            })).join(" ");
                            return console.log(n), {
                                key: t,
                                label: n,
                                value: e
                            }
                        }));
                        b(e), 0 === y.length && Z(e.map((function(e) {
                            return e.value
                        })))
                    }
                    u < 0 ? m(0) : A({
                        groupId: n.id,
                        perPage: o,
                        offset: u,
                        eventTypes: O ? (0, L.Z)(O) : []
                    })
                }), [o, u, q, O, y]), I.useEffect((function() {
                    null != T && T.totalCount && f(T.totalCount)
                }), [T]);
                var G = I.createElement(it, null, I.createElement(ct, {
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
                }, "There was an error loading the audit log."), F && !z && I.createElement(ee.qX, {
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
                        return C(e)
                    }
                }), I.createElement(ot, {
                    label: "Items per-page",
                    onChange: i,
                    options: lt,
                    value: o,
                    className: "mb-2"
                })), G, I.createElement("div", {
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
                }))), G))
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
                    c = (0, O.I0)(),
                    s = (0, C.s0)(),
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
                    w = (0, l.Z)(b, 2),
                    x = w[0],
                    y = w[1],
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
                    U = L.data,
                    q = L.isLoading,
                    z = L.error,
                    F = L.isError;
                (0, I.useEffect)((function() {
                    if (U && M) {
                        M.privacy === Et.TW.DEFAULT && U.visibility !== v && h(U.visibility);
                        var e = (null == U ? void 0 : U.isSubscribedToAnnouncements) || (null == U ? void 0 : U.isSubscribedToPosts);
                        y(e)
                    }
                }), [M, U]);
                var G = d || T || q,
                    X = (null == M ? void 0 : M.ownerId) === (null == U ? void 0 : U.userId),
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
                }) : F ? I.createElement(ft.Z, {
                    error: z,
                    statusCode: z.status
                }) : I.createElement(I.Fragment, null, I.createElement(ee.oI, null, I.createElement("h4", {
                    className: "text-center"
                }, "Membership Preferences")), I.createElement(ee.Ao, null, G ? I.createElement(ee.UU, {
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
                    defaultChecked: x,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        y(t)
                    }
                }), I.createElement(pt.Z, null, "Tick this to hear all the latest news and goss from this group")), I.createElement(ee.zx, {
                    onClick: function() {
                        J({
                            groupId: i,
                            userId: m.id,
                            visibility: v,
                            isSubscribedToPosts: x
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
                }, "Leave Group")), I.createElement(ee.Ao, null, G ? I.createElement(ee.UU, {
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
                wt = n(62228),
                xt = n(609),
                yt = n(16869),
                Zt = n(67978),
                kt = n(81780),
                Nt = n(33073),
                It = n(95896);

            function Ot(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ct(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ot(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ot(Object(n)).forEach((function(t) {
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
                    f = (0, C.s0)(),
                    E = (0, C.UO)(),
                    v = (0, I.useRef)(!0),
                    h = (0, ie.pc)(),
                    w = I.useMemo((function() {
                        var e;
                        return "new" === E.roleId ? Ct(Ct({}, St), {}, {
                            requiresPurchase: "paid" === E.newRoleType
                        }, "paid" === E.newRoleType && {
                            productPriceTokens: It.nk,
                            productDuration: 1,
                            productDurationType: "months"
                        }) : null == u || null === (e = u.roles) || void 0 === e ? void 0 : e.find((function(e) {
                            return e.id === E.roleId
                        }))
                    }), [u, E]),
                    x = I.useState({}),
                    y = (0, l.Z)(x, 2),
                    Z = y[0],
                    N = y[1],
                    O = I.useState(null),
                    A = (0, l.Z)(O, 2),
                    R = A[0],
                    q = A[1],
                    z = I.useState({}),
                    F = (0, l.Z)(z, 2),
                    G = F[0],
                    J = F[1],
                    B = I.useState(null != w && w.defaultRole ? "permissions" : "general"),
                    V = (0, l.Z)(B, 2),
                    W = V[0],
                    H = V[1],
                    Y = I.useState(null == w ? void 0 : w.requiresTwoFactor),
                    Q = (0, l.Z)(Y, 2),
                    K = Q[0],
                    te = Q[1],
                    ne = I.useState(null == w ? void 0 : w.isAddedOnJoin),
                    le = (0, l.Z)(ne, 2),
                    ae = le[0],
                    oe = le[1],
                    se = I.useState(null == w ? void 0 : w.isSelfAssignable),
                    ue = (0, l.Z)(se, 2),
                    me = ue[0],
                    de = ue[1],
                    pe = I.useState((null == u ? void 0 : u.joinState) === Et.wN.OPEN),
                    ge = (0, l.Z)(pe, 2),
                    fe = ge[0],
                    Ee = ge[1],
                    he = I.useState(!1),
                    be = (0, l.Z)(he, 2),
                    we = be[0],
                    xe = be[1],
                    ye = I.useState((null == w ? void 0 : w.permissions) || []),
                    Ze = (0, l.Z)(ye, 2),
                    ke = Ze[0],
                    Ne = Ze[1],
                    Ie = I.useState(!1),
                    Oe = (0, l.Z)(Ie, 2),
                    Ce = Oe[0],
                    Se = Oe[1],
                    je = I.useState(null),
                    Ae = (0, l.Z)(je, 2),
                    Me = Ae[0],
                    Te = Ae[1],
                    Re = (0, ce.mt)({
                        groupId: u.id
                    }),
                    Pe = Re.data,
                    Le = Re.isLoading,
                    Ue = Re.isError,
                    qe = (0, ce.Pt)(),
                    ze = (0, l.Z)(qe, 2),
                    Fe = ze[0],
                    Ge = ze[1],
                    Xe = Ge.isLoading,
                    De = Ge.isError,
                    _e = Ge.error,
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
                        productId: null == w ? void 0 : w.productId
                    }, {
                        skip: !(null != w && w.productId),
                        refetchOnMountOrArgChange: !0
                    }),
                    st = ct.data,
                    ut = ct.isFetching,
                    dt = ct.isUninitialized,
                    ft = (0, yt.Ul)({
                        userId: null == u ? void 0 : u.ownerId,
                        groupId: null == u ? void 0 : u.id,
                        active: !0
                    }, {
                        skip: !u || !(null != w && w.productId),
                        refetchOnMountOrArgChange: !0
                    }),
                    vt = ft.data,
                    ht = void 0 === vt ? [] : vt,
                    Ot = ft.isFetching,
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
                    Mt = Xe || Ve || at || Le || ut || Ot,
                    Tt = (null == u ? void 0 : u.joinState) === Et.wN.OPEN ? "Your group is already set to Free Join, so enabling this option won’t have any effect. Subscribers will still join automatically." : "When enabled, anyone can purchase this role and join the group, regardless of the group’s join rules. This option overrides standard join settings.";
                (0, I.useEffect)((function() {
                    if (st) {
                        if (xe(st.groupAccessRemove), (null == u ? void 0 : u.joinState) === Et.wN.OPEN) return Ee(!0), void q(Ct(Ct({}, R), {}, {
                            groupAccess: !0
                        }));
                        Ee(st.groupAccess)
                    }
                }), [st]);
                var Rt = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = {};
                    "new" === (null == w ? void 0 : w.id) && (t = Ct({}, w)), e || (te(null == w ? void 0 : w.requiresTwoFactor), oe(null == w ? void 0 : w.isAddedOnJoin), de(null == w ? void 0 : w.isSelfAssignable), Ne((null == w ? void 0 : w.permissions) || [])), d(0), N(t), q(null)
                };
                (0, I.useEffect)((function() {
                    Rt(), H(null != w && w.defaultRole ? "permissions" : "general")
                }), [u, E]), (0, I.useEffect)((function() {
                    v.current ? v.current = !1 : ((null == w ? void 0 : w.requiresTwoFactor) !== K && N(Ct(Ct({}, Z), {}, {
                        requiresTwoFactor: K
                    })), (null == w ? void 0 : w.isAddedOnJoin) !== ae && N(Ct(Ct({}, Z), {}, {
                        isAddedOnJoin: ae
                    })), (null == w ? void 0 : w.isSelfAssignable) !== me && N(Ct(Ct({}, Z), {}, {
                        isSelfAssignable: me
                    })), (null == w ? void 0 : w.permissions) !== ke && N(Ct(Ct({}, Z), {}, {
                        permissions: ke
                    })))
                }), [K, ae, me, ke]), (0, I.useEffect)((function() {
                    0 !== p && N(Ct(Ct({}, Z), {}, {
                        order: p + w.order
                    }))
                }), [p]);
                var Pt = (0, ie._b)(Pe),
                    Lt = I.useMemo((function() {
                        return (0, ve.Ps)({
                            permissionName: Me,
                            permissionsMap: Pt
                        })
                    }), [Me, Pt]);
                if (!w || Le || Ue) return null;
                var Ut = function(e) {
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
                        N(Ct(Ct({}, Z), {}, (0, P.Z)({}, n, r))), J(Ct(Ct({}, G), {}, (0, P.Z)({}, n, e.target.checkValidity())))
                    },
                    qt = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var t, n;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("new" !== (t = Ct({}, Z)).id) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 4, Fe({
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
                                            roleId: w.id,
                                            productId: (null == st ? void 0 : st.id) || null,
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
                                        if ("new" === w.id) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.prev = 2, e.next = 5, rt({
                                            groupId: u.id,
                                            roleId: w.id,
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
                    Ft = 0 === w.order,
                    Gt = "new" === w.id,
                    Xt = w.requiresPurchase && !g,
                    Dt = T({
                        groupMember: null == u ? void 0 : u.myMember,
                        permission: "group-default-role-manage"
                    }),
                    _t = T({
                        groupMember: null == u ? void 0 : u.myMember,
                        permission: "group-roles-assign"
                    }),
                    Jt = w.defaultRole && !Dt,
                    $t = !w.requiresPurchase && !w.defaultRole && !Ft,
                    Bt = !w.defaultRole && !Ft,
                    Vt = Bt && !Gt;
                return I.createElement("div", null, We && I.createElement(ee.qX, {
                    title: "Error updating role",
                    type: "error"
                }, "Failed to update role: ", null == He || null === (t = He.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), De && I.createElement(ee.qX, {
                    title: "Error creating role",
                    type: "error"
                }, "Failed to create role: ", null == _e || null === (n = _e.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), I.createElement(j.Z, {
                    isOpen: Ce
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
                    icon: U.$
                }), " Yes, Delete"), " ", I.createElement(ee.zx, {
                    onClick: function() {
                        Se(!1)
                    },
                    disabled: at,
                    expand: !0
                }, "Cancel")))), null == w ? I.createElement("div", null, I.createElement("p", null, "Pick a role to edit.")) : I.createElement("div", null, Gt ? I.createElement("h6", {
                    className: "text-center"
                }, "New", w.requiresPurchase && " Paid", " Role") : I.createElement("h6", {
                    className: "text-center"
                }, Xt ? "Viewing" : "Editing", " - ", w.name), function() {
                    var e;
                    if (null == w || !w.createdAt || !w.requiresPurchase || At.length) return null;
                    var t = "activate its associated subscription";
                    return I.createElement(ee.qX, {
                        type: "info",
                        title: "No Active Subscriptions"
                    }, "Before people can buy this role, ", g ? "you'll" : "the group owner will", " need to", " ", g && !dt && null != st && null !== (e = st.parentListings) && void 0 !== e && e.length ? I.createElement(S.rU, {
                        to: "/home/marketplace/storefront/subscriptions"
                    }, t) : t, " ", "in ", g ? "your" : "their", " Store. ", g ? "You" : "The Group Owner", " can also give the product and listing their own images, descriptions and other details from there.")
                }(), !w.defaultRole && I.createElement(D.Z, null, I.createElement(re.Z, {
                    tabs: [{
                        name: "General",
                        id: "general",
                        icon: c.b7,
                        condition: !(null != w && w.defaultRole)
                    }, {
                        name: "Permissions",
                        id: "permissions",
                        icon: xt.by,
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
                            roleId: w.id
                        })
                    },
                    expand: !0
                }, I.createElement(ee.$1, {
                    icon: wt.mT
                }), " Move Up"), " ", I.createElement(ee.zx, {
                    onClick: function() {
                        m({
                            offset: 1,
                            roleId: w.id
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
                    value: null != Z.name ? Z.name : w.name,
                    onChange: Ut,
                    maxLength: 64,
                    required: !0,
                    disabled: Xt || w.defaultRole,
                    placeholder: "Enter Role's Name"
                }), !1 === G.name && I.createElement($.Z, null, "Must be between 1 and 64 characters."))), I.createElement(D.Z, {
                    className: "mb-3"
                }, I.createElement(X.Z, null, I.createElement(ee.gx, {
                    type: "textarea",
                    name: "description",
                    value: null != Z.description ? Z.description : w.description,
                    onChange: Ut,
                    maxLength: 256,
                    disabled: Xt || w.defaultRole,
                    placeholder: "Enter Role's Description",
                    inputStyle: {
                        height: "100px"
                    }
                }), !1 === G.description && I.createElement($.Z, null, "Must be 256 characters or less."))), Bt && !w.requiresPurchase && _t && I.createElement(D.Z, {
                    className: "my-2"
                }, I.createElement(gt.Z, {
                    label: "Assign On Join",
                    value: "isAddedOnJoin",
                    defaultChecked: null != Z.isAddedOnJoin ? Z.isAddedOnJoin : w.isAddedOnJoin,
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
                }), I.createElement(pt.Z, null, "Requires members to have 2FA before permissions apply.")), w.requiresPurchase && I.createElement(I.Fragment, null, I.createElement(D.Z, {
                    className: "my-2"
                }, I.createElement(gt.Z, {
                    label: "Enable Free Join for Subscribers",
                    value: "productGroupAccess",
                    defaultChecked: fe,
                    onChangeCallback: function(e) {
                        var t, n, r, l = e.checked;
                        t = l, n = Ct(Ct({}, Z), {}, {
                            productGroupAccess: t
                        }), r = Ct(Ct({}, R), {}, {
                            groupAccess: t
                        }), t || (n.productGroupAccessRemove = void 0, r.groupAccessRemove = !1, xe(!1)), Ee(t), N(n), q(r)
                    },
                    disabled: (null == u ? void 0 : u.joinState) === Et.wN.OPEN
                }), I.createElement(pt.Z, null, Tt)), (null != Z.productGroupAccess ? Z.productGroupAccess : fe) && I.createElement(D.Z, {
                    className: "my-2"
                }, I.createElement(gt.Z, {
                    label: "Remove Members After Expiration",
                    value: "productGroupAccessRemove",
                    defaultChecked: null != Z.productGroupAccessRemove ? Z.productGroupAccessRemove : we,
                    onChangeCallback: function(e) {
                        var t, n = e.checked;
                        xe(t = n), N(Ct(Ct({}, Z), {}, {
                            productGroupAccessRemove: t
                        })), q(Ct(Ct({}, R), {}, {
                            groupAccessRemove: t
                        }))
                    }
                }), I.createElement(pt.Z, null, "If enabled, group members with this role are removed from the group entirely when their subscription ends. Note that this will remove any member whose subscription ends, whether they bought their way in or not."))), w.requiresPurchase && Gt && I.createElement(I.Fragment, null, I.createElement(D.Z, null, I.createElement(X.Z, null, I.createElement($.Z, {
                    htmlFor: "productPriceTokens"
                }, "Credits", "forevers" === w.productDurationType ? "" : " per ".concat(1 === w.productDuration ? w.productDurationType.replace(/s$/, "") : "".concat(w.productDuration, " ").concat(w.productDurationType)))), I.createElement(X.Z, null, I.createElement(ee.II, {
                    type: "number",
                    name: "productPriceTokens",
                    value: null != Z.productPriceTokens ? Z.productPriceTokens : w.productPriceTokens,
                    onChange: Ut,
                    required: !0,
                    step: "1",
                    min: It.nk,
                    max: It.A1
                }), !1 === G.productPriceTokens && I.createElement($.Z, null, "Must be a whole number between ", I.createElement(ee.b5, null), It.nk.toLocaleString(), " and ", I.createElement(ee.b5, null), It.A1.toLocaleString(), ".")))), w.productId && I.createElement("p", null, I.createElement("small", null, g ? "You" : "The Group Owner", " can manage details and subscription behaviour of this role's", " ", I.createElement(S.rU, {
                    to: "/home/marketplace/storefront/products#".concat(w.productId)
                }, "associated product"), !dt && null != st && null !== (i = st.parentListings) && void 0 !== i && i.length ? I.createElement(I.Fragment, null, ", and the details, price and availability of the product's", " ", I.createElement(S.rU, {
                    to: "/home/marketplace/storefront/listings#".concat(st.parentListings[0])
                }, "associated listing"), " ") : " ", g ? "in your Store" : "in their Store", "."))), I.createElement(Nt.Z, {
                    tabId: "permissions"
                }, Ue && I.createElement(ee.qX, {
                    title: "Error",
                    type: "error"
                }, "There was an error loading permissions."), (null == w ? void 0 : w.defaultRole) && I.createElement(I.Fragment, null, I.createElement("p", null, w.description), I.createElement("hr", null)), Ft || Jt ? I.createElement("p", null, "You can't edit the ", Ft ? "Group Owner" : "default", " role.", " ", Ft ? "It must always have all" : "You lack the required", " permissions.") : I.createElement("div", null, Pe.filter((function(e) {
                    var t;
                    return h || (!w.requiresPurchase || !e.isManagementPermission) && e.allowedToAdd && (0 === (null == u ? void 0 : u.memberRank) || (null == u || null === (t = u.myMember) || void 0 === t ? void 0 : t.permissions.includes(e.name)))
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
                        disabled: w.requiresPurchase && !g,
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
                    className: "d-flex flex-row align-content-center mt-1\n                  ".concat(Gt || Ft || w.defaultRole ? "justify-content-end" : "justify-content-between")
                }, !Gt && !Ft && !w.defaultRole && I.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        zt(!1)
                    },
                    disabled: Mt
                }, I.createElement(M.Z, {
                    icon: U.$
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
                }), " ", Gt ? "Clear" : "Cancel"), " ", I.createElement(ee.zx, {
                    loading: Mt && !at,
                    disabled: Mt || 0 === Object.keys(Z).length || Object.values(G).includes(!1),
                    onClick: qt
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
                    o = (0, C.TH)(),
                    i = (0, C.UO)(),
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
                        return l.push(a || i ? I.createElement(qt, null, I.createElement(Ft, {
                            key: e.id,
                            to: "/home/group/".concat(n.id, "/settings/roles/").concat(e.id),
                            className: e.id === c ? "selected" : ""
                        }, o, e.name + ("new" === e.id ? " (unsaved new role)" : ""))) : I.createElement(Ut, {
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
                Ut = (0, a.Z)("li", {
                    target: "e1hiny753"
                })({
                    name: "12guyxn",
                    styles: "padding:8px;margin-bottom:8px;border-radius:4px;background-color:#141519;opacity:0.3"
                }),
                qt = (0, a.Z)("li", {
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
                Ft = (0, a.Z)(zt, {
                    target: "e1hiny750"
                })({
                    name: "hlgyoz",
                    styles: "background-color:transparent;border-color:transparent;text-align:left;:hover{background-color:#282b31;border-color:#282b31;}&.active{background-color:#454b54;border-color:#454b54;}"
                }),
                Gt = n(98185);
            const Xt = function(e) {
                var t = e.group,
                    n = (0, ie.pc)(),
                    r = (0, C.TH)(),
                    a = I.useState(0),
                    o = (0, l.Z)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = (0, O.v9)((function(e) {
                        var t;
                        return null === (t = e.group) || void 0 === t || null === (t = t.role) || void 0 === t ? void 0 : t.error
                    })),
                    u = (0, Q.XC)(),
                    m = u.data,
                    d = (u.isLoading, u.isError, u.error, (null == t ? void 0 : t.ownerId) === (null == m ? void 0 : m.id));
                I.useEffect((function() {
                    c(0)
                }), [r]);
                return I.createElement(Gt.Z, {
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
                    w = null !== (t = null == h ? void 0 : h.transferTargetId) && void 0 !== t ? t : null,
                    Z = (0, O.I0)(),
                    S = (0, C.s0)(),
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
                    we = I.useState(!1),
                    xe = (0, l.Z)(we, 2),
                    ye = xe[0],
                    ke = xe[1],
                    Ie = I.useState(null),
                    Oe = (0, l.Z)(Ie, 2),
                    Ce = Oe[0],
                    je = Oe[1],
                    Ae = I.useState(!1),
                    Me = (0, l.Z)(Ae, 2),
                    Te = Me[0],
                    Re = Me[1],
                    Pe = I.useState(!1),
                    Le = (0, l.Z)(Pe, 2),
                    qe = Le[0],
                    ze = Le[1],
                    Fe = I.useState(null),
                    Xe = (0, l.Z)(Fe, 2),
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
                    wt = I.useState(null !== (a = h.links) && void 0 !== a ? a : []),
                    xt = (0, l.Z)(wt, 2),
                    yt = xt[0],
                    Zt = xt[1],
                    kt = I.useState(null),
                    Nt = (0, l.Z)(kt, 2),
                    It = Nt[0],
                    Ot = Nt[1],
                    Ct = I.useState(null),
                    St = (0, l.Z)(Ct, 2),
                    jt = (St[0], St[1]),
                    At = (0, O.v9)((function(e) {
                        return e.currentUser.isMod
                    })),
                    Mt = (null == h ? void 0 : h.ownerId) === (null == b ? void 0 : b.id),
                    Tt = (0, ce.mA)(),
                    Rt = (0, l.Z)(Tt, 2),
                    Pt = Rt[0],
                    Lt = Rt[1],
                    Ut = Lt.isError,
                    qt = Lt.isLoading,
                    zt = Lt.error,
                    Ft = (0, ce.CL)(),
                    Gt = (0, l.Z)(Ft, 2),
                    Dt = Gt[0],
                    _t = Gt[1],
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
                    ln = (null == De || null === (c = De.user) || void 0 === c ? void 0 : c.id) && (null == h ? void 0 : h.id) && null === w,
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
                    mn = null !== w,
                    dn = (0, K.GR)(w, {
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
                    wn = hn[1],
                    xn = (wn.data, wn.isFetching),
                    yn = wn.isError,
                    Zn = wn.error,
                    kn = (0, ce.rq)(),
                    Nn = (0, l.Z)(kn, 2),
                    In = Nn[0],
                    On = Nn[1],
                    Cn = (On.data, On.isFetching),
                    Sn = On.isError,
                    jn = On.error;
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
                        icon: x.eH,
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
                        icon: x.eH,
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
                                        yn && (ze(!1), Re(!1), _e(null), Z((0, Y.d)({
                                            title: "Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null == Zn || null === (n = Zn.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 6e3
                                        }))), yn || Z((0, Y.d)({
                                            title: "Group Transfer Initiated",
                                            icon: y.f8,
                                            color: "success",
                                            timeout: 6e3
                                        })), ze(!1), Re(!1), e.next = 16;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(1), ze(!1), Re(!1), _e(null), Z((0, Y.d)({
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
                                            icon: x.eH,
                                            message: "".concat(null == jn || null === (n = jn.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 3e3
                                        })), Sn || Z((0, Y.d)({
                                            title: "Delete Group Transfer Success",
                                            icon: y.f8,
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(1), Qe(!1), Z((0, Y.d)({
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
                    Un = function(e, t) {
                        var n = (0, L.Z)(vt);
                        n[e] = t, n = n.filter((function(e) {
                            return "none" !== e
                        })), bt(n), oe($t($t({}, ae), {}, {
                            languages: n
                        }))
                    },
                    qn = en.includes("permission-user-gallery"),
                    zn = en.includes("permission-user-icons"),
                    Fn = qt || Wt || xn || Cn;
                return I.createElement("div", null, I.createElement(X.Z, {
                    className: "mt-4"
                }, I.createElement(re.Z, {
                    tabs: [{
                        name: "General",
                        to: "/home/group/".concat(h.id, "/settings"),
                        end: !0,
                        icon: G.Kb,
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
                        icon: F.xK,
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
                        icon: q.tx,
                        condition: At || T({
                            groupMember: null == h ? void 0 : h.myMember,
                            permission: "group-audit-view"
                        })
                    }]
                })), I.createElement(C.Z5, null, I.createElement(C.AW, {
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
                            Ot(e), jt(t), gt(!1)
                        },
                        selectedId: null != It ? It : "",
                        activeTab: "icons"
                    })), I.createElement(J.Z, null, I.createElement(ee.zx, {
                        onClick: function() {
                            gt(!1), Z((0, H.LC)())
                        }
                    }, "Cancel"))), I.createElement(X.Z, null, Ut ? I.createElement(ee.qX, {
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
                            Un(0, e)
                        },
                        value: null !== (g = null == vt ? void 0 : vt[0]) && void 0 !== g ? g : "none",
                        name: "languages",
                        options: rn,
                        className: "mb-1"
                    }), vt.length >= 1 && I.createElement(ee.Lt, {
                        onChange: function(e) {
                            Un(1, e)
                        },
                        value: null !== (f = null == vt ? void 0 : vt[1]) && void 0 !== f ? f : "none",
                        name: "languages",
                        options: rn,
                        className: "mb-1"
                    }), vt.length >= 2 && I.createElement(ee.Lt, {
                        onChange: function(e) {
                            Un(2, e)
                        },
                        value: null !== (E = null == vt ? void 0 : vt[2]) && void 0 !== E ? E : "none",
                        name: "languages",
                        options: rn,
                        className: "mb-1"
                    }))), I.createElement("br", null), I.createElement(D.Z, {
                        className: "mt-2"
                    }, I.createElement(X.Z, null, I.createElement($.Z, {
                        for: "links"
                    }, "Group Links")), I.createElement(X.Z, null, I.createElement(Ge, {
                        groupBioLinks: yt,
                        callback: Ln,
                        index: 0
                    }), I.createElement(Ge, {
                        groupBioLinks: yt,
                        callback: Ln,
                        index: 1
                    }), I.createElement(Ge, {
                        groupBioLinks: yt,
                        callback: Ln,
                        index: 2
                    }))), I.createElement("br", null), I.createElement(D.Z, null, I.createElement(X.Z, null), I.createElement(X.Z, null, ot && I.createElement("div", null, I.createElement("span", null, "Replacing banner with: ", ot), I.createElement("br", null), I.createElement(ee.zx, {
                        onClick: function() {
                            it(null), ut(null)
                        }
                    }, "Clear banner selection")), It && I.createElement("div", null, I.createElement("span", null, "Replacing icon with: ", It), I.createElement("br", null), I.createElement(ee.zx, {
                        onClick: function() {
                            jt(null), Ot(null)
                        }
                    }, "Clear icon selection")))), I.createElement("br", null), I.createElement(D.Z, null, I.createElement(X.Z, null), I.createElement(X.Z, null, qn && I.createElement(ee.zx, {
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
                        disabled: Fn,
                        loading: Fn
                    }, "Save")))))), Mt && !w && I.createElement(I.Fragment, null, I.createElement(Ze, {
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
                        isSelecting: ye
                    }), (null == De ? void 0 : De.user) && Te && I.createElement(Ue, {
                        group: h,
                        validity: Ce,
                        prospectiveNewOwner: De,
                        onTransfer: function() {
                            return Tn()
                        },
                        onCancel: function() {
                            return Re(!1)
                        },
                        isOpen: Te,
                        isTransferring: qe
                    }), I.createElement(Se, {
                        group: h,
                        onButtonClick: function() {
                            return fe(!0)
                        },
                        isLoading: Fn || !1
                    })), Mt && w && I.createElement(Ne, {
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
                        disabled: Fn,
                        loading: Fn
                    }, I.createElement(M.Z, {
                        icon: U.$
                    }), " Delete Group"))))) : I.createElement(ht, {
                        groupId: null == h ? void 0 : h.id
                    })
                }), I.createElement(C.AW, {
                    path: "/me",
                    element: null != h && h.myMember ? I.createElement(ht, {
                        groupId: null == h ? void 0 : h.id
                    }) : I.createElement(R.Z, {
                        to: ".."
                    })
                }), I.createElement(C.AW, {
                    path: "/roles/:roleId?/:newRoleType?",
                    element: At || T({
                        groupMember: null == h ? void 0 : h.myMember,
                        permission: "group-roles-manage"
                    }) ? I.createElement(Xt, {
                        group: h
                    }) : I.createElement(R.Z, {
                        to: ".."
                    })
                }), I.createElement(C.AW, {
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
                    w = I.useState(!1),
                    x = (0, l.Z)(w, 2),
                    y = x[0],
                    Z = x[1],
                    k = I.useState({}),
                    N = (0, l.Z)(k, 2),
                    O = N[0],
                    C = N[1],
                    S = (0, ce.r5)({
                        groupId: s.groupId
                    }),
                    j = S.data,
                    A = S.isLoading,
                    R = S.isError,
                    L = S.error,
                    U = (0, ce.xm)({
                        groupId: s.groupId,
                        userId: s.userId
                    }),
                    q = U.data,
                    z = U.isLoading,
                    F = U.isError,
                    G = U.error,
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
                    se = F || R;
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
                }, null == L || null === (o = L.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message), G && I.createElement("p", {
                    className: "text-center text-danger"
                }, null == G || null === (c = G.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message))));
                if (oe) return null;
                var ue = function() {
                        b(!h)
                    },
                    me = function() {
                        Z(!y)
                    };
                if (null == q) return I.createElement("div", null);
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
                    fe = (null == j || null === (t = j.myMember) || void 0 === t ? void 0 : t.id) === q.id,
                    Ee = null != O.managerNotes ? O.managerNotes : q.managerNotes,
                    ve = (null == q ? void 0 : q.roleIds) || [],
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
                                        groupId: q.groupId,
                                        userId: q.userId,
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
                                    groupId: q.groupId,
                                    userId: q.userId,
                                    roleId: n
                                }))
                            }
                        }, e.name)
                    }));
                return I.createElement(Gt.Z, {
                    loading: oe
                }, I.createElement(ee.oI, null, I.createElement("h4", null, "Managing ", null == s || null === (n = s.user) || void 0 === n ? void 0 : n.displayName)), I.createElement(ee.Ao, null, y && I.createElement("div", null, I.createElement("h4", {
                    className: "text-center mb-4"
                }, "Are you sure you want to kick ", null == q || null === (r = q.user) || void 0 === r ? void 0 : r.displayName, "?!?!"), I.createElement(ee.X2, null, I.createElement(ee.zx, {
                    warning: !0,
                    onClick: function() {
                        me(), Y({
                            groupId: q.groupId,
                            userId: q.userId,
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
                }, "Are you sure you want to ban ", null == q || null === (a = q.user) || void 0 === a ? void 0 : a.displayName, "?!?!"), I.createElement(ee.X2, null, I.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        ue(), V({
                            groupId: q.groupId,
                            userId: q.userId,
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
                }, "Cancel"))), !(y || h) && I.createElement(I.Fragment, null, (pe || ae || fe) && I.createElement(on, null, I.createElement(cn, null, I.createElement("h6", null, "Available Roles"), I.createElement(sn, null, be)), I.createElement(mn, null, I.createElement("h6", null, "Assigned Roles"), I.createElement(dn, null, he))), I.createElement(ee.X2, null, (de || ae) && I.createElement("div", {
                    className: "setting mb-2 flex-1"
                }, I.createElement($.Z, null, "Notes"), I.createElement(ee.gx, {
                    name: "managerNotes",
                    className: "notes-input full-width",
                    value: Ee,
                    onChange: function(e) {
                        var t = e.target.name,
                            n = "checkbox" === e.target.getAttribute("type") ? e.target.checked : e.target.value;
                        C(ln(ln({}, O), {}, (0, P.Z)({}, t, n)))
                    }
                }))), I.createElement(ee.X2, null, I.createElement(ee.zx, {
                    expand: !0,
                    color: "primary",
                    onClick: function() {
                        ! function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = ln(ln({}, O), e);
                            Object.keys(t).length > 0 && _(ln({
                                groupId: q.groupId,
                                userId: q.userId
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
                        o = (0, O.I0)(),
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
                    var w = function() {
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
                                                icon: y.f8,
                                                message: "".concat(n.displayName, " is banned!"),
                                                color: "success",
                                                timeout: 3e3
                                            })), m(!1), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), o((0, Y.d)({
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
                                                icon: y.f8,
                                                message: "".concat(n.displayName, " is un-banned!"),
                                                color: "success",
                                                timeout: 3e3
                                            })), m(!0), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), o((0, Y.d)({
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
                        onClick: u ? w : Z,
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
            const wn = bn;
            var xn = function(e) {
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
                    w = (0, ie.Nr)(g);
                (0, I.useEffect)((function() {
                    setTimeout((function() {
                        o && null != m && m.current && m.current.focus()
                    }), 300)
                }), [o, m]), (0, I.useEffect)((function() {
                    b(1)
                }), [g]), (0, I.useEffect)((function() {
                    f("")
                }), [o]);
                var x = (0, ce.Vc)({
                        groupId: a
                    }, {
                        skip: !s
                    }),
                    y = x.data,
                    Z = x.isSuccess,
                    k = x.isError,
                    N = x.error,
                    O = (0, ce.Pi)({
                        groupId: a,
                        pageValue: h,
                        searchTerm: w,
                        n: 25
                    }, {
                        skip: "" === w || !o || w.length < 3 || !s
                    }),
                    C = O.data,
                    S = O.error,
                    j = O.isError,
                    A = O.isFetching,
                    M = O.isSuccess,
                    T = (0, K.hi)({
                        pageValue: h,
                        searchTerm: w,
                        n: 25
                    }, {
                        skip: "" === w || !o || w.length < 3 || s
                    }),
                    R = T.data,
                    P = T.error,
                    L = T.isError,
                    U = T.isFetching,
                    q = T.isSuccess;
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
                }, "Search for members in your group."), M && !A && Z && s && I.createElement(oe.Um, null, C.results.map((function(e) {
                    return I.createElement(wn, {
                        key: e.id,
                        member: e,
                        groupRoles: y,
                        memberEditCallback: u
                    })
                })), 0 === C.results.length && I.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "We couldn't find anything with that search.")), !q && !U && !L && !s && I.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "Search for users on VRChat."), q && I.createElement(oe.Um, null, R.results.map((function(e) {
                    return I.createElement(En, {
                        key: e.id,
                        user: e,
                        groupId: a
                    })
                })), 0 === R.results.length && I.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "We couldn't find anything with that search.")), (M || q) && I.createElement(oe.Gz, null, I.createElement(oe.IT, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return b(h - 1)
                    },
                    disabled: 1 === h || A || U
                }, I.createElement(ee.$1, {
                    icon: ae.A3
                })), I.createElement("span", null, h), I.createElement(oe.UV, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return b(h + 1)
                    },
                    disabled: (null == C ? void 0 : C.isLastPage) || (null == R ? void 0 : R.isLastPage) || A || U
                }, I.createElement(ee.$1, {
                    icon: le._t
                }))))))
            };
            xn.propTypes = {
                groupId: ue().string,
                isOpen: ue().bool.isRequired,
                cancelCallback: ue().func.isRequired,
                memberEditCallback: ue().func
            };
            const yn = xn;

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
                    w = I.useState(null),
                    x = (0, l.Z)(w, 2),
                    y = x[0],
                    Z = x[1],
                    k = I.useState(""),
                    O = (0, l.Z)(k, 2),
                    C = O[0],
                    S = (O[1], I.useState(null)),
                    A = (0, l.Z)(S, 2),
                    M = A[0],
                    R = A[1],
                    P = I.useState(null),
                    U = (0, l.Z)(P, 2),
                    q = U[0],
                    z = U[1],
                    F = (0, Q.XC)().data,
                    G = (0, ie.pc)(),
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
                        if (ae.page <= 0 && !C && null === M && null === q && null != n && n.myMember) e[0] = [kn(kn({}, $), {}, {
                            userId: F.id,
                            user: kn(kn({}, F), {}, {
                                thumbnailUrl: null !== (t = F.profilePicOverride) && void 0 !== t ? t : F.currentAvatarImageUrl
                            })
                        })].concat((0, L.Z)(ae.members));
                        else e[ae.page] = ae.members;
                        J(e)
                    }
                }), [ae]);
                I.useEffect((function() {}), [C]), I.useEffect((function() {
                    H(0), J([
                        [],
                        []
                    ]), ge(K, 0)
                }), [M, q]);
                var ge = function(e, t) {
                        re({
                            groupId: n.id,
                            perPage: e,
                            page: t,
                            sort: M,
                            roleId: q
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
                        return !!G || (!(!ve && !Ee || !a) || (!(!ve && !Ee || !o) || !(!i || !o)))
                    };
                if (de) return I.createElement(ee.UU, {
                    height: "200px"
                });
                var we = null == _ ? void 0 : _.map((function(e, t) {
                        var r;
                        return null === (r = (0, L.Z)(e)) || void 0 === r || null === (r = r.sort((function(e) {
                            return null === M && null === q && e.userId === n.ownerId ? -1 : 0
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
                    xe = [{
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
                }, I.createElement(On, {
                    label: "Filter role",
                    onChange: z,
                    options: xe,
                    value: q,
                    className: "mb-2 mx-2"
                }), I.createElement(On, {
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
                    memberRank: null != y ? y : 0,
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
                }), "  Search Group Members")), I.createElement(yn, {
                    isOpen: u,
                    groupId: n.id,
                    cancelCallback: function() {
                        return m(!1)
                    },
                    memberEditCallback: fe,
                    isGroupMemberOnly: !0
                }), se ? I.createElement(ee.UU, {
                    height: "200px"
                }) : I.createElement(Cn, null, we), I.createElement("div", {
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
            var On = (0, a.Z)(ee.Lt, {
                    target: "egqvjul1"
                })({
                    name: "1w9pskj",
                    styles: "width:300px;min-width:200px"
                }),
                Cn = (0, a.Z)("div", {
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
            const Un = function(e) {
                var t = e.links;
                return I.createElement(Dn, null, I.createElement(_n, null, I.createElement(qn, null, "Links")), I.createElement(Jn, null, t.length > 0 ? t.map((function(e) {
                    return I.createElement(Xn, {
                        key: e
                    }, I.createElement(Fe.QZ, {
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
            var qn = (0, a.Z)("h2", {
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
                Fn = (0, a.Z)("div", {
                    target: "e19ri8nl5"
                })({
                    name: "r0ww0u",
                    styles: "background-color:#181b1f;border:5px solid #252a30;min-width:100px;min-height:100px;width:100px;height:100px;border-radius:50%;margin:10px;display:flex;justify-content:center;align-items:center;transition:transform 0.1s ease-in"
                }),
                Gn = (0, a.Z)(Fn, {
                    target: "e19ri8nl4"
                })({
                    name: "jrwc5p",
                    styles: ":hover{transform:scale(1.1);cursor:pointer;}"
                }),
                Xn = (0, a.Z)(Gn, {
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
                    u = (0, O.I0)(),
                    m = (0, O.v9)((function(e) {
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
                    w = (0, l.Z)(b, 2),
                    x = w[0],
                    y = w[1],
                    Z = I.useState(null),
                    k = (0, l.Z)(Z, 2),
                    C = k[0],
                    S = k[1],
                    A = I.useState(!1),
                    M = (0, l.Z)(A, 2),
                    R = M[0],
                    L = M[1],
                    U = I.useState({
                        name: i.name,
                        description: i.description,
                        membersOnly: i.membersOnly
                    }),
                    q = (0, l.Z)(U, 2),
                    z = q[0],
                    F = q[1],
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
                    we = (he[1].isLoading, (0, ce.pI)()),
                    xe = (0, l.Z)(we, 2),
                    ye = xe[0],
                    Ze = xe[1],
                    ke = (Ze.isLoading, Ze.isSuccess),
                    Ne = (0, ce.jP)(),
                    Ie = (0, l.Z)(Ne, 2),
                    Oe = Ie[0];
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
                var Ce = function(e) {
                    var t = "checkbox" === e.target.getAttribute("type") ? !e.target.checked : e.target.value;
                    F(Wn(Wn({}, z), {}, (0, P.Z)({}, e.target.name, t)))
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
                    imageUrl: x,
                    closeCallback: function() {
                        y(null)
                    },
                    nextCallback: null !== (t = me.results) && void 0 !== t && t[C + 1] ? function() {
                        y(me.results[C + 1].imageUrl), S(C + 1)
                    } : null,
                    prevCallback: null !== (n = me.results) && void 0 !== n && n[C - 1] ? function() {
                        y(me.results[C - 1].imageUrl), S(C - 1)
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
                    onChange: Ce,
                    disabled: m,
                    maxLength: 64
                })), " ", I.createElement($.Z, null, "Gallery description", I.createElement(ee.II, {
                    value: z.description,
                    name: "description",
                    onChange: Ce,
                    disabled: m,
                    maxLength: 512
                })), " ", I.createElement(ee.X2, null, I.createElement($.Z, null, "Is this gallery public?", " ", I.createElement($n.Z, {
                    type: "checkbox",
                    name: "membersOnly",
                    checked: !z.membersOnly,
                    onChange: Ce,
                    disabled: m
                }))), I.createElement(ee.X2, null, I.createElement(ee.zx, {
                    expand: !0,
                    onClick: function() {
                        ye({
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
                        Oe({
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
                                    y(e)
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
                    icon: G.Kb
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
                    w = v.isSuccess,
                    x = v.isError,
                    y = v.error;
                I.useEffect((function() {
                    w && p(!1)
                }), [w]);
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
                    O = null;
                return T({
                    groupMember: null == n ? void 0 : n.myMember,
                    permission: "group-galleries-manage"
                }) && (O = d ? I.createElement(I.Fragment, null, I.createElement(ee.oI, null, I.createElement("h4", null, "Create Gallery")), I.createElement(ee.Ao, null, I.createElement($.Z, null, "Gallery name", I.createElement(ee.II, {
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
                }), " Create Gallery")), I.createElement("div", null, x && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == y || null === (t = y.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred while creating the gallery."), O, n.galleries.length > 0 ? n.galleries.map((function(e) {
                    return (e.membersOnly && (null == n ? void 0 : n.myMember) || !e.membersOnly) && I.createElement(Yn, {
                        key: e.id,
                        group: n,
                        gallery: e,
                        justAdded: w && (null == h ? void 0 : h.id) === e.id
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
                    x = b.isLoading,
                    y = b.isSuccess,
                    Z = b.isError,
                    k = b.error,
                    N = d || x,
                    O = g || Z,
                    C = f || k;
                return I.useEffect((function() {
                    O && a(C)
                }), [O, C]), I.createElement("div", {
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
                    icon: w.LE,
                    className: "mx-2"
                }), "Invite", p && "d", " ", n.displayName), "ban" === i && I.createElement(ee.zx, {
                    disabled: y || N,
                    loading: N,
                    onClick: function() {
                        return h({
                            groupId: t.id,
                            userId: n.id
                        })
                    },
                    color: y ? "success" : void 0
                }, y && I.createElement(ee.$1, {
                    icon: w.LE,
                    className: "mx-2"
                }), "ban", y && "ned", " ", n.displayName))
            };
            var fr = n(25411),
                Er = n(12227);
            const vr = function(e) {
                var t = e.group,
                    n = e.mode,
                    r = void 0 === n ? "invite" : n,
                    a = (0, O.I0)(),
                    o = (0, ie.pc)(),
                    i = I.useState(""),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, ie.Nr)(s),
                    d = (0, O.v9)((function(e) {
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
            const wr = function(e) {
                var t, n, r, a, o, c, s, u, m = e.group,
                    d = (0, O.I0)(),
                    p = I.useState(!1),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = I.useState(!1),
                    h = (0, l.Z)(v, 2),
                    b = h[0],
                    w = h[1],
                    x = I.useState(null),
                    y = (0, l.Z)(x, 2),
                    Z = y[0],
                    k = y[1],
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
                    U = R.error,
                    q = R.isLoading,
                    z = (0, ce.dZ)({
                        groupId: m.id,
                        blocked: !0
                    }),
                    F = z.data,
                    G = z.isError,
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
                    we = (be.isLoading, be.isError),
                    xe = be.error,
                    ye = (0, ce.XK)(),
                    Ze = (0, l.Z)(ye, 2),
                    ke = Ze[0],
                    Ne = Ze[1],
                    Ie = (Ne.isLoading, Ne.isError),
                    Oe = Ne.error;
                (0, C.s0)(), (0, ie.pc)();
                I.useEffect((function() {
                    pe && d(br.S.util.updateQueryData("getGroupById", {
                        groupId: m.id
                    }, (function(e) {
                        e.memberCount += 1
                    })))
                }), [pe]);
                var Ce = function() {
                    w(!1), k(null)
                };
                T({
                    groupMember: null == m ? void 0 : m.myMember,
                    permission: "group-members-manage"
                });
                return I.createElement("div", null, I.createElement(j.Z, {
                    isOpen: b && !!Z,
                    toggle: Ce
                }, I.createElement(ee.oI, null, I.createElement("h4", {
                    className: "text-center text-break"
                }, "Ban ", null == Z ? void 0 : Z.displayName, "?!?!")), I.createElement(ee.Ao, null, I.createElement("div", null, I.createElement(ee.X2, null, I.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        var e;
                        e = null == Z ? void 0 : Z.id, he({
                            groupId: m.id,
                            userId: e
                        }), Ce()
                    },
                    expand: !0
                }, I.createElement(ee.$1, {
                    icon: i.JH
                }), " And stay out!"), " ", I.createElement(ee.zx, {
                    neutral: !0,
                    onClick: Ce,
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
                }, we && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == xe || null === (t = xe.data) || void 0 === t ? void 0 : t.error.message) || "There was an error banning the user."), L && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == U || null === (n = U.data) || void 0 === n ? void 0 : n.error.message) || "There was an error loading the join requests."), ae && I.createElement(ee.qX, {
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
                }, q ? I.createElement(ee.UU, {
                    width: "100%",
                    height: "75px"
                }) : I.createElement(xr, null, 0 === (null == P ? void 0 : P.length) ? I.createElement("p", {
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
                }, (null == U || null === (o = U.data) || void 0 === o ? void 0 : o.error.message) || "There was an error loading the invites."), Ie && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == Oe || null === (c = Oe.data) || void 0 === c ? void 0 : c.error.message) || "There was an error deleting the invite."), I.createElement(ee.oI, null, I.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Invites")), I.createElement(ee.Ao, {
                    className: "mb-2"
                }, M ? I.createElement(ee.UU, {
                    width: "100%",
                    height: "75px"
                }) : I.createElement(xr, null, 0 === (null == S ? void 0 : S.length) ? I.createElement("p", {
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
                }, G && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == X || null === (s = X.data) || void 0 === s ? void 0 : s.error.message) || "There was an error loading the invites."), Ie && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == Oe || null === (u = Oe.data) || void 0 === u ? void 0 : u.error.message) || "There was an error deleting the invite."), I.createElement(ee.oI, null, I.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Blocked Applicants")), I.createElement(ee.Ao, {
                    className: "mb-2"
                }, M ? I.createElement(ee.UU, {
                    width: "100%",
                    height: "75px"
                }) : I.createElement(xr, null, 0 === (null == F ? void 0 : F.length) ? I.createElement("p", {
                    className: "m-0"
                }, "Nobody has been blocked from joining the group!") : null, null == F ? void 0 : F.map((function(e) {
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
            var xr = (0, a.Z)("div", {
                    target: "e1hocgvc0"
                })({
                    name: "1fx10vo",
                    styles: "display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:space-around"
                }),
                yr = n(87462),
                Zr = n(19933),
                kr = n(66736),
                Nr = n(6655),
                Ir = n(73647),
                Or = n(68791),
                Cr = n(40067),
                Sr = n(7701),
                jr = n(50352),
                Ar = n(77708);
            const Mr = function(e) {
                var t, n, r, a, o, i, c, s = e.group,
                    u = (0, O.I0)(),
                    m = (0, O.v9)((function(e) {
                        return e.listingRow.modals.cancellation
                    })),
                    d = (0, O.v9)((function(e) {
                        return e.listingRow.modals.rules
                    })),
                    p = (0, O.v9)((function(e) {
                        return e.listingRow.modals.purchaseConfirmation
                    })),
                    g = (0, O.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    f = (0, Q.XC)(),
                    E = f.data,
                    v = f.isLoading,
                    h = I.useState(!0),
                    b = (0, l.Z)(h, 2),
                    w = (b[0], b[1], (0, kr.mb)({
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
                    N = (0, kr.CE)({
                        receiverId: E.id,
                        sellerId: s.ownerId,
                        active: !0,
                        mostRecent: !0
                    }, {
                        skip: !E || !(null != x && null !== (t = x.listings) && void 0 !== t && t.length),
                        refetchOnMountOrArgChange: !0
                    }),
                    C = N.data,
                    S = void 0 === C ? [] : C,
                    j = N.isLoading,
                    A = N.isError,
                    M = N.error,
                    T = I.useMemo((function() {
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
                    R = (0, Nr.En)(),
                    P = R.data,
                    L = void 0 === P ? {
                        economyOnline: !1,
                        plannedOfflineWindowStart: null,
                        plannedOfflineWindowEnd: null,
                        offlineReason: null
                    } : P,
                    U = L.economyOnline,
                    q = L.plannedOfflineWindowStart,
                    z = L.plannedOfflineWindowEnd,
                    F = L.offlineReason,
                    G = R.isFetching,
                    X = R.isError,
                    D = R.error,
                    _ = (0, Nr.v$)({
                        userId: E.id
                    }, {
                        skip: !E || !U,
                        refetchOnMountOrArgChange: !0
                    }),
                    J = _.data,
                    $ = _.isLoading,
                    B = _.isError,
                    V = _.error,
                    W = (0, Nr.pp)({
                        userId: E.id
                    }, {
                        skip: !E,
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
                        u((0, Ir.zy)({
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
                            c = t.selectedPurchaseQuantity,
                            m = t.quantity;
                        u(e ? (0, Ir.DF)({
                            listing: n,
                            purchase: r,
                            group: s,
                            totalPrice: l,
                            tiliaTokenBalance: Y,
                            tiliaTosAccepted: ae,
                            includesGroupAccess: a,
                            includesGroupAccessRemove: o,
                            quantity: m,
                            enteredPurchaseQuantity: i,
                            selectedPurchaseQuantity: c
                        }) : (0, Ir.Li)({
                            listing: n,
                            purchase: r,
                            group: s,
                            totalPrice: l,
                            tiliaTokenBalance: Y,
                            tiliaTosAccepted: ae,
                            includesGroupAccess: a,
                            includesGroupAccessRemove: o,
                            quantity: m,
                            enteredPurchaseQuantity: i,
                            selectedPurchaseQuantity: c
                        }))
                    }), [Y, ae, s]),
                    ce = I.useState(!1),
                    se = (0, l.Z)(ce, 2),
                    ue = se[0],
                    me = se[1];
                if (v || j || y || G || $ || K) return I.createElement(ee.UU, {
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
                    ge = (0, ve.dj)(q);
                return I.createElement(I.Fragment, null, U && I.createElement(Zr.Z, {
                    isTiliaTOSAccepted: ae,
                    returnPath: "/home/group/".concat(s.id, "/store"),
                    termsOfServiceMessage: "Tilia's Terms of Service have been changed. Please accept them before supporting ".concat(s.name, ".")
                }), I.createElement(ee.oI, {
                    className: "flex-row justify-content-center align-items-center"
                }, I.createElement("h4", {
                    className: "text-center flex-grow-1"
                }, "Store")), I.createElement(ee.Ao, null, X && I.createElement(ee.qX, {
                    type: "error",
                    title: "Something strange happened"
                }, I.createElement("p", {
                    className: "m-0"
                }, "Error getting Tilia online status: ", D.status, " ", null !== (n = null === (r = D.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : "Unknown error")), !U && !X && I.createElement(ee.qX, {
                    type: "warn",
                    title: "Store Maintenance"
                }, I.createElement(I.Fragment, null, I.createElement("p", {
                    className: "m-0"
                }, "Store Currently Offline: ", null != F ? F : "Unknown Reason"), I.createElement("p", {
                    className: "m-0"
                }, "Projected Service Return: ", (0, ve.M4)(z)))), B && U && I.createElement(ee.qX, {
                    type: "error",
                    title: "Something strange happened"
                }, "Error looking up Tilia ToS acceptance: ", V.status, " ", null !== (a = null === (o = V.data) || void 0 === o ? void 0 : o.error.message) && void 0 !== a ? a : "Unknown error"), A && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error loading purchases"
                }, null == M || null === (i = M.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message), Z && I.createElement(ee.qX, {
                    type: "error",
                    title: "Error loading listings"
                }, null == k || null === (c = k.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message), ge && U && I.createElement(ee.qX, {
                    type: "warn",
                    title: "Store Maintenance"
                }, I.createElement("p", {
                    className: "m-0"
                }, "Starts: ", (0, ve.M4)(q)), I.createElement("p", {
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
                    return I.createElement(Or.Z, (0, yr.Z)({
                        key: e.listing.id
                    }, e, {
                        group: s,
                        tiliaTokenBalance: !te && Y,
                        tiliaTosAccepted: ae,
                        index: t,
                        economyOnline: U,
                        onCancel: oe,
                        onPurchase: ie
                    }))
                })) : I.createElement("p", null, ue ? "You have no current subscriptions to this group!" : "There are no subscription options here!"), m.isOpen && I.createElement(Cr.Z, null), d.isOpen && I.createElement(Ar.Z, null), p.isOpen && I.createElement(Sr.Z, {
                    groupData: s
                }), g.isOpen && I.createElement(jr.Z, null)))
            };
            var Tr = n(28764),
                Rr = n(96427),
                Pr = n(42137),
                Lr = n(9230);
            const Ur = function(e) {
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
                    w = void 0 === b ? null : b,
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
                    src: w
                })), I.createElement("div", {
                    className: "".concat(C ? " col-sm-6 col-md-6 col-lg-7 col-xl-7 col-12" : "col-12")
                }, I.createElement(Fr, null, I.createElement(Xr, null, x), function() {
                    if (0 === N.length) return I.createElement(Dr, null, I.createElement("div", null, I.createElement(ee.$1, {
                        icon: Pr.SZ
                    }), " ", (0, ve.h4)(h), I.createElement(ee.$1, {
                        className: "ms-2",
                        icon: Lr.iO
                    }), " ", "public" === O ? "Public" : "Group"));
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
                }(), I.createElement(Gr, {
                    hasImage: C,
                    isExpanded: E
                }, A, I.createElement($r, {
                    showReadMore: M,
                    onClick: function() {
                        return v(!0)
                    }
                }, "Read More")))), C && I.createElement("div", {
                    className: "col-12 col-sm-6 col-md-6 col-lg-5 col-xl-5 d-none d-sm-flex align-items-center"
                }, I.createElement(Br, {
                    src: w
                })))), s && I.createElement("div", {
                    className: "ps-5 pe-4"
                }, I.createElement(qr, {
                    color: "danger",
                    onClick: function() {
                        return m(n)
                    }
                }, I.createElement(ee.$1, {
                    icon: U.$
                }))))
            };
            var qr = (0, a.Z)(qe.Z, {
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
                Fr = (0, a.Z)("div", {
                    target: "ewr2sfy7"
                })({
                    name: "1yjx7km",
                    styles: "padding:20px"
                }),
                Gr = (0, a.Z)("p", {
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
                    n = (0, O.I0)(),
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
                    w = h[1],
                    x = I.useState(null),
                    y = (0, l.Z)(x, 2),
                    Z = y[0],
                    C = y[1],
                    S = I.useState(!0),
                    A = (0, l.Z)(S, 2),
                    M = A[0],
                    T = A[1],
                    R = I.useState(!1),
                    P = (0, l.Z)(R, 2),
                    U = P[0],
                    q = P[1],
                    z = I.useState(""),
                    F = (0, l.Z)(z, 2),
                    G = F[0],
                    X = F[1],
                    D = (0, Q.q7)().data,
                    B = void 0 === D ? [] : D,
                    V = (0, ce.t$)(),
                    W = (0, l.Z)(V, 2),
                    Y = W[0],
                    K = W[1].isLoading;
                (0, I.useEffect)((function() {
                    "selectedRoles" !== f && w([])
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
                                        c(""), d(""), C(null), T(!0), X(""), w([]), E("group");
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
                    isOpen: U,
                    className: (0, N.iv)({
                        name: "1ul0gzp",
                        styles: "max-width:1500px!important"
                    })
                }, I.createElement(_.Z, null, I.createElement(Yr, {
                    isSelector: !0,
                    activeTab: "photos",
                    selectedCallback: function(e, t) {
                        C(e), X(t), q(!1)
                    },
                    selectedId: null != Z ? Z : null
                })), I.createElement(J.Z, null, I.createElement(ee.zx, {
                    onClick: function() {
                        q(!1), n((0, H.b9)())
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
                        return null != e && null !== (t = e.target) && void 0 !== t && t.checked ? w([].concat((0, L.Z)(b), [null == e || null === (n = e.target) || void 0 === n ? void 0 : n.value])) : w(b.filter((function(t) {
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
                        q(!0)
                    }
                }, "Select an Image"), " "), I.createElement(ee.zx, {
                    disabled: ne || K,
                    loading: K,
                    expand: !0,
                    onClick: te
                }, "Create Post")), " ", I.createElement(Ur, {
                    postData: {
                        text: i,
                        title: m,
                        imageUrl: G,
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
                    w = (0, ce.A4)({
                        groupId: t,
                        userId: null == a ? void 0 : a.id
                    }, {
                        skip: !a
                    }),
                    x = w.data,
                    y = w.isLoading,
                    Z = (0, ce.gx)(),
                    k = (0, l.Z)(Z, 2),
                    N = k[0],
                    O = k[1].isLoading,
                    C = function(e, t) {
                        u(t ? [].concat((0, L.Z)(s), [e]) : s.filter((function(t) {
                            return t !== e
                        })))
                    },
                    S = function(e, t) {
                        g(t ? [].concat((0, L.Z)(p), [e]) : p.filter((function(t) {
                            return t !== e
                        })))
                    },
                    A = (null == x ? void 0 : x.results.length) > 0;
                return I.createElement(j.Z, {
                    isOpen: n && !y,
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
                        C("hateful", e.target.checked)
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
                        C("malicious", e.target.checked)
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
                        C("abusive_disruptive", e.target.checked)
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
                        C("inappropriate", e.target.checked)
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
                    disabled: O || A || p.length <= 0 || s.length <= 0,
                    loading: O
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
                    icon: w.LE
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
                    w = h[1],
                    x = n.id,
                    y = n.roles,
                    Z = n.myMember,
                    k = 10,
                    N = Math.ceil((i + 1) / k),
                    O = (0, ce.Aw)(),
                    C = (0, l.Z)(O, 2),
                    S = C[0],
                    j = C[1],
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
                    U = (0, ce._n)({
                        pageValue: i - 1,
                        n: k,
                        groupId: x,
                        publicOnly: !Z
                    }, {
                        skip: 1 === i,
                        refetchOnMountOrArgChange: !0
                    }),
                    q = (0, ce._n)({
                        pageValue: i,
                        n: k,
                        groupId: x,
                        publicOnly: !Z
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    z = (0, ce._n)({
                        pageValue: i + 1,
                        n: k,
                        groupId: x,
                        publicOnly: !Z
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    F = (0, I.useMemo)((function() {
                        var e = new Array(k * (N + 1)).fill(null);
                        return (0, L.Z)(new Set([U.data, q.data, z.data])).map((function(t) {
                            return null != t && t.posts ? e.splice.apply(e, [t.offset, t.posts.length].concat((0, L.Z)(t.posts))) : []
                        })), e.filter((function(e) {
                            return null !== e
                        }))
                    }), [k, U.data, q.data, z.data]);
                (0, I.useEffect)((function() {
                    d(F.some((function(e) {
                        return null !== e
                    })))
                }), [F]), (0, I.useEffect)((function() {
                    M && E(!1)
                }), [M]);
                var G = function(e) {
                        w(e), E(!0)
                    },
                    X = (0, I.useMemo)((function() {
                        return m ? F.map((function(e, t) {
                            return null !== e ? I.createElement("div", {
                                key: e.id
                            }, I.createElement(Ur, {
                                myMember: Z,
                                postData: e,
                                observe: t === F.length - 1 ? R : 0 === t && 1 !== i ? P : null,
                                isEditMode: r,
                                deleteCallback: G,
                                groupRoles: y
                            })) : null
                        })) : null
                    }), [F, m]);
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
            const wl = function(e) {
                var t, n, r, a = e.group,
                    o = (void 0 === a ? null : a).id,
                    i = (0, C.s0)(),
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
                    w = (null == v ? void 0 : v.length) > 50,
                    x = (0, ce.Rx)(),
                    y = (0, l.Z)(x, 2),
                    Z = y[0],
                    k = y[1],
                    N = k.error,
                    O = k.isSuccess,
                    S = k.isError,
                    j = k.isLoading,
                    A = null !== (t = null == v ? void 0 : v.filter((function(e) {
                        return !!e.user
                    }))) && void 0 !== t ? t : [],
                    M = h ? I.createElement(xl, {
                        height: "130px"
                    }) : I.createElement(I.Fragment, null, null != A && A.length ? I.createElement(yl, null, null == A ? void 0 : A.slice(0, 50).map((function(e) {
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
                return I.createElement(I.Fragment, null, I.createElement(yn, {
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
                }, "We couldn't load the list of banned users. Please try again later!"), O && I.createElement(ee.qX, {
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
                    disabled: h || !w
                }, I.createElement(ee.$1, {
                    icon: le._t
                })))))
            };
            var xl = (0, a.Z)(ee.UU, {
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
                    U = I.useState(!1),
                    q = (0, l.Z)(U, 2),
                    z = q[0],
                    F = q[1],
                    G = I.useState(!1),
                    X = (0, l.Z)(G, 2),
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
                    we = (0, l.Z)(be, 2),
                    xe = we[0],
                    ye = we[1],
                    Ze = (0, Q.q7)().data,
                    ke = void 0 === Ze ? [] : Ze,
                    Ne = (0, O.I0)(),
                    Ie = (0, W.y)(),
                    Oe = Ie.data,
                    Ce = Ie.isLoading,
                    Se = 0,
                    je = 0;
                Ie.isSuccess && (Se = Oe.constants.GROUPS.MAX_JOINED, je = Oe.constants.GROUPS.MAX_JOINED_PLUS), ke.includes("permission-extra-group-count") && (Se = Math.max(Se, je || 0));
                var Ae = (0, C.UO)().groupId,
                    Me = (0, Q.XC)().data,
                    Te = (0, ce.r5)({
                        groupId: Ae,
                        purpose: "group"
                    }),
                    Re = Te.data,
                    Pe = Te.isSuccess,
                    Le = Te.isFetching,
                    Ue = Te.isError,
                    qe = Te.error,
                    ze = (0, ie.pc)(),
                    Fe = (0, ce.dj)({
                        userId: null == Me ? void 0 : Me.id
                    }),
                    Ge = Fe.data,
                    Xe = Fe.isLoading,
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
                    gt = (0, yt.Ul)({
                        userId: null == Re ? void 0 : Re.ownerId,
                        groupId: null == Re ? void 0 : Re.id,
                        active: !0
                    }, {
                        skip: !Re
                    }),
                    ft = (gt.data, gt.isLoading);
                I.useEffect((function() {
                    Re && !Le && F(!0)
                }), [Re, Le]), I.useEffect((function() {
                    dt && ge(!1)
                }), [dt]);
                var vt, ht, bt = I.useMemo((function() {
                        return !!z && (null !== Re.transferTargetId || void 0 !== Re.transferTargetId)
                    }), [z]),
                    wt = (null == Re ? void 0 : Re.transferTargetId) === (null == Me ? void 0 : Me.id) ? null == Re ? void 0 : Re.ownerId : null == Re ? void 0 : Re.transferTargetId,
                    xt = (0, K.GR)(wt, {
                        skip: null == Re || Le || !bt || !wt,
                        refetchOnMountOrArgChange: !0
                    }),
                    Zt = xt.data,
                    kt = xt.isFetching,
                    Nt = xt.isError,
                    It = xt.error,
                    Ot = (0, ce.HT)(),
                    Ct = (0, l.Z)(Ot, 2),
                    St = Ct[0],
                    jt = Ct[1],
                    At = jt.data,
                    Mt = (jt.isFetching, jt.isError),
                    Tt = jt.error,
                    Rt = (0, ce.rq)(),
                    Pt = (0, l.Z)(Rt, 2),
                    Lt = Pt[0],
                    Ut = Pt[1],
                    qt = Ut.data,
                    zt = (Ut.isFetching, Ut.isError),
                    Ft = (Ut.error, function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var t, n;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return he(!0), e.prev = 1, e.next = 4, St({
                                            groupId: Re.id,
                                            transferTargetId: Re.transferTargetId
                                        }).unwrap();
                                    case 4:
                                        Mt && Ne((0, Y.d)({
                                            title: "Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null == Tt || null === (t = Tt.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), he(!1)), !Mt && At && Ne((0, Y.d)({
                                            title: "Group Transfer Accepted",
                                            icon: y.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }), he(!1)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Ne((0, Y.d)({
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
                    Gt = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var t, n;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return he(!0), e.prev = 1, e.next = 4, Lt({
                                            groupId: Re.id,
                                            transferTargetId: null == Re ? void 0 : Re.transferTargetId
                                        }).unwrap();
                                    case 4:
                                        zt && Ne((0, Y.d)({
                                            title: "Cancel Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null == qt || null === (t = qt.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), he(!1)), !zt && qt && Ne((0, Y.d)({
                                            title: "Cancel Group Transfer Success",
                                            icon: y.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }), he(!1)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Ne((0, Y.d)({
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
                if (!Re || Le || ft || lt || et || Ve || Xe || Ce) return (se || ne) && (le(!1), ue(!1)), bt && !Zt || kt ? I.createElement(ee.UU, {
                    width: "100%",
                    height: "200px",
                    className: "mt-4"
                }) : !Nt || Ue || kt ? Ue ? I.createElement(I.Fragment, null, I.createElement(ee.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: "Something went wrong with getting this group! (".concat(null == qe || null === (vt = qe.data) || void 0 === vt || null === (vt = vt.error) || void 0 === vt ? void 0 : vt.message, ")")
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
                    message: "Something went wrong with getting target user! (".concat(null == It || null === (ht = It.data) || void 0 === ht || null === (ht = ht.error) || void 0 === ht ? void 0 : ht.message, ")")
                });
                var Xt, Dt = function() {
                        _(!1), $e({
                            groupId: Ae
                        })
                    },
                    _t = function() {
                        V(!1), Re.rules ? _(!0) : Dt()
                    },
                    Jt = Pe && Re.myMember && Re.myMember.roleIds.reduce((function(e, t) {
                        if (e) return e;
                        var n = Re.roles.find((function(e) {
                            return e.id === t
                        }));
                        return !(null == n || !n.requiresTwoFactor || !1 !== Re.myMember.has2FA) && n
                    }), !1),
                    $t = Re.membershipStatus;
                if (Re.memberCount < Et.qH && (Ge.length < Se || Me.tagsSet.has("admin_uncap_owned_groups"))) {
                    if ($t === Et.oq.REQUESTED) Xt = I.createElement(ee.zx, {
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
                    else if ($t === Et.oq.INVITED) Xt = I.createElement(ee.zx, {
                        success: !0,
                        onClick: Dt
                    }, I.createElement(M.Z, {
                        icon: w.LE
                    }), "  Accept Invite");
                    else if ($t === Et.oq.USER_BLOCKED) Xt = null;
                    else if (!Re.myMember) switch (Re.joinState) {
                        case Et.wN.OPEN:
                            Xt = I.createElement(ee.zx, {
                                onClick: _t,
                                disabled: Ve,
                                loading: Ve
                            }, I.createElement(M.Z, {
                                icon: o.r8
                            }), "  Join Group");
                            break;
                        case Et.wN.REQUEST:
                            Xt = I.createElement(ee.zx, {
                                onClick: _t
                            }, I.createElement(M.Z, {
                                icon: s.FU
                            }), " Request to Join");
                            break;
                        default:
                            Xt = I.createElement(ee.zx, {
                                disabled: !0
                            }, "Closed to New Members")
                    }
                    Re.joinState !== Et.wN.INVITE || Re.myMember || (Xt = I.createElement(ee.zx, {
                        disabled: !0
                    }, "Closed to New Members"))
                } else Ge.length >= Se && !Me.tagsSet.has("admin_uncap_owned_groups") ? Xt = I.createElement(ee.zx, {
                    disabled: !0
                }, "You can't join more than ", Se, " groups!") : Re.myMember || (Xt = I.createElement(ee.zx, {
                    disabled: !0
                }, "Group is Full"));
                if (!Re.id) return null;
                var Bt = $t === Et.oq.USER_BLOCKED;
                return I.createElement(I.Fragment, null, I.createElement(ee.$4, null, null !== (e = null == Re ? void 0 : Re.name) && void 0 !== e ? e : "Group"), I.createElement(j.Z, {
                    isOpen: B,
                    toggle: function() {
                        V(!1)
                    }
                }, I.createElement(Cl, null, I.createElement("h4", {
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
                    icon: w.LE
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
                }, I.createElement(Cl, null, I.createElement("h4", {
                    className: "text-center"
                }, "Rules")), I.createElement(Sl, null, I.createElement(ee.JX, null, I.createElement("div", {
                    className: "p-3"
                }, I.createElement("p", null, "By joining this group, you agree to the following rules:"), I.createElement(Al, null, Re.rules)), I.createElement("div", {
                    className: "p-3"
                }, I.createElement(ee.X2, null, I.createElement(ee.zx, {
                    expand: !0,
                    onClick: Dt,
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
                }, I.createElement(Cl, null, I.createElement("h4", {
                    className: "text-center"
                }, "Decline Group Invite?")), I.createElement(Sl, null, I.createElement(ee.JX, null, I.createElement("div", {
                    className: "p-3 text-center"
                }, "Are you sure you want to decline invite to ", I.createElement("strong", null, Re.name), "?"), I.createElement("div", {
                    className: "px-3 text-center d-flex justify-content-center"
                }, I.createElement(_e.Z, {
                    id: "block-invites",
                    checked: xe,
                    onChange: function(e) {
                        return ye(e.target.checked)
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
                            block: xe
                        })
                    },
                    loading: st
                }, I.createElement(M.Z, {
                    icon: w.LE
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
                }), Jt && I.createElement(ee.X2, null, I.createElement(A.Z, {
                    color: "warning"
                }, "Your VRChat account does not have 2FA enabled. Your role '", Jt.name, "' in ", Re.name, " requires this. Until you enable 2FA, your ability to manage ", Re.name, " will be limited.")), ze && pt && I.createElement(ee.X2, null, I.createElement(Ml, null, " THIS GROUP HAS BEEN DELETED ")), We && I.createElement(ee.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: (null == He || null === (t = He.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred while trying to join ".concat(null == Re ? void 0 : Re.name, ".")
                }), ut && I.createElement(ee.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: (null == mt || null === (n = mt.data) || void 0 === n ? void 0 : n.error.message) || "An error occurred while trying to decline group invitation."
                }), I.createElement("div", {
                    className: "d-flex flex-row justify-content-center align-content-center mb-2"
                }, Xt, $t === Et.oq.INVITED && I.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        return ge(!0)
                    },
                    className: "mx-2"
                }, I.createElement(M.Z, {
                    icon: E.YI
                }), "  Decline Invite")), Bt ? I.createElement(ol, null) : I.createElement(I.Fragment, null, bt && !kt && wt && I.createElement(sl, {
                    group: Re,
                    currentUser: Me,
                    targetUser: Zt,
                    onAccept: Ft,
                    onCancel: Gt,
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
                        condition: null == Re ? void 0 : Re.storeId
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
                }), I.createElement(C.Z5, null, I.createElement(C.AW, {
                    path: "/",
                    element: I.createElement(I.Fragment, null, Pe && I.createElement(gl, {
                        group: Re
                    }), I.createElement(Ol, null, I.createElement(ee.JX, {
                        className: "m-1"
                    }, I.createElement(Sn, {
                        langs: Re.languages
                    })), I.createElement(ee.JX, {
                        className: "m-1"
                    }, I.createElement(Un, {
                        links: Re.links
                    }))), I.createElement(Ol, null, I.createElement(ee.JX, {
                        className: "m-1 mt-2 mw-100"
                    }, I.createElement(Cl, null, I.createElement("h4", null, "About This Group")), I.createElement(jl, null, I.createElement("p", {
                        className: "w-100 text-break"
                    }, Re.description))), Re.rules && I.createElement(I.Fragment, null, I.createElement(ee.JX, {
                        className: "m-1 mt-2 mw-100"
                    }, I.createElement(Cl, null, I.createElement("h4", null, "Rules")), I.createElement(jl, null, I.createElement("p", {
                        className: "w-100 text-break"
                    }, Re.rules))))))
                }), I.createElement(C.AW, {
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
                }), I.createElement(C.AW, {
                    path: "/galleries/*",
                    element: I.createElement(ar, {
                        group: Re
                    })
                }), I.createElement(C.AW, {
                    path: "/subscribe",
                    element: I.createElement(R.Z, {
                        to: "store"
                    })
                }), I.createElement(C.AW, {
                    path: "/store",
                    element: I.createElement(Mr, {
                        group: Re
                    })
                }), I.createElement(C.AW, {
                    path: "/instances",
                    element: I.createElement(mr, {
                        group: Re
                    })
                }), I.createElement(C.AW, {
                    path: "/invites/*",
                    element: ze || T({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-invites-manage"
                    }) ? I.createElement(wr, {
                        group: Re
                    }) : I.createElement(R.Z, {
                        to: ".."
                    })
                }), I.createElement(C.AW, {
                    path: "/members",
                    element: I.createElement(In, {
                        group: Re
                    })
                }), I.createElement(C.AW, {
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
                }), I.createElement(C.AW, {
                    path: "/bans",
                    element: ze || T({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-members-manage"
                    }) ? I.createElement(wl, {
                        group: Re
                    }) : I.createElement(R.Z, {
                        to: ".."
                    })
                })))))
            };
            var Ol = (0, a.Z)(ee.X2, {
                    target: "e7n20a25"
                })("flex-wrap:wrap;margin:-0.25rem;>", ee.JX, "{min-width:300px;flex:1;}"),
                Cl = (0, a.Z)(ee.JX, {
                    target: "e7n20a24"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                Sl = (0, a.Z)(Cl, {
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
                u = n(14411),
                m = n(22202),
                d = n(6655),
                p = n(64358),
                g = n(45697),
                f = n.n(g),
                E = n(67294),
                v = n(89250);

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
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
                    h = (0, m.XC)(),
                    w = h.data,
                    x = h.isLoading,
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
                var M = function() {
                    var e = (0, l.Z)(s().mark((function e(t) {
                        var n, r, l;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t.preventDefault(), I(!0), n = new URL(A, window.location.href), e.next = 5, S(b(b({}, p.$Z.TOS), {}, {
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
                        return M(e)
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
//# sourceMappingURL=4909f66418b17c4bdda5ccfb0d4b49ef4e1a775220c87363f6cb3cfb99853ef9.js.map