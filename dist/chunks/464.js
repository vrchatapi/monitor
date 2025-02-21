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
                default: () => Ol
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
                M = n(23138),
                A = n(86646),
                T = function(e) {
                    var t, n, r, l = e.groupMember,
                        a = e.permission;
                    return (null == l || null === (t = l.permissions) || void 0 === t ? void 0 : t.includes("*")) || null !== (n = null == l || null === (r = l.permissions) || void 0 === r ? void 0 : r.includes(a)) && void 0 !== n && n
                },
                R = n(46320),
                P = n(4942),
                L = n(42138),
                U = n(42619),
                q = n(26375),
                z = n(70265),
                F = n(5702),
                G = n(78439),
                X = n(47810),
                D = n(95305),
                _ = n(35773),
                B = n(60766),
                J = n(23149),
                $ = n(3126),
                V = n(83024),
                W = n(21464),
                H = n(17219),
                Y = n(5513),
                Q = n(64258),
                K = n(22202),
                ee = n(62437),
                te = n(14411),
                ne = n(89421),
                re = n(43862),
                le = n(72998),
                ae = n(65394),
                oe = n(85020),
                ie = n(60006),
                ce = n(12752),
                se = n(93261),
                ue = n(45697),
                me = n.n(ue),
                de = n(27484),
                pe = n.n(de),
                ge = n(1646),
                fe = n.n(ge),
                Ee = n(84110),
                ve = n.n(Ee),
                he = n(64358);
            pe().extend(fe()), pe().extend(ve());
            const be = function(e) {
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
                    m = pe().duration(pe()(u).diff(pe()())).humanize(!0);
                return I.createElement(we, null, I.createElement(te.JX, {
                    className: "tw-columns-3"
                }, I.createElement(te.pw, {
                    className: "tw-justify-self-start tw-my-2",
                    fitToCover: !0,
                    alt: i,
                    imageId: (0, he.oQ)(a || o),
                    width: "100px",
                    height: "100px"
                })), I.createElement(te.JX, {
                    className: "tw-flex-[1_1_128px] tw-columns-6"
                }, I.createElement(S.rU, {
                    className: "tw-justify-self-start tw-text-2xl",
                    to: "/home/user/".concat(c)
                }, i), I.createElement("h4", {
                    className: "tw-justify-self-start"
                }, "Joined ".concat(m)), I.createElement("p", {
                    className: "tw-justify-self-start tw-text-[#737372] tw-text-[16px]"
                }, "Member")), I.createElement(te.JX, {
                    className: "tw-flex tw-flex-row tw-flex-[1_1_32px] tw-justify-center tw-items-center tw-columns-3"
                }, I.createElement(te.zx, {
                    expand: !0,
                    title: "Select New Owner",
                    onClick: function() {
                        n(t)
                    }
                }, "Select")))
            };
            var we = (0, a.Z)(te.X2, {
                target: "e12tzkfr0"
            })("margin:0.4rem 0;padding:0.5rem;background-color:#252a30;border:3px solid #252a30;transition:border-color 0.2s ease-in-out;border-radius:8px;flex-wrap:wrap;justify-content:center;&:hover{border-color:#054d5e;}&>*{margin:0.5rem;}&>", te.JX, ">p:last-child,&>", te.JX, ">ul:last-child{margin:0;}");

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
            var Ze = function(e) {
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
                    Z = (0, ce.Nr)(v),
                    k = (0, I.useState)([
                        [],
                        []
                    ]),
                    N = (0, l.Z)(k, 2),
                    O = N[0],
                    C = N[1],
                    S = (0, K.XC)().data,
                    j = null == o ? void 0 : o.id,
                    M = null == o ? void 0 : o.ownerId,
                    A = null == o ? void 0 : o.myMember,
                    T = (0, se.Pv)(),
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
                        if (q.page <= 0 && !v) e[0] = [null != o && o.myMember ? ye(ye({}, A), {}, {
                            userId: S.id,
                            user: ye(ye({}, S), {}, {
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
                var X = (0, se.Pi)({
                        groupId: j,
                        pageValue: x,
                        searchTerm: Z,
                        n: 25
                    }, {
                        skip: "" === Z || !i || Z.length < 3 || !u
                    }),
                    D = X.data,
                    _ = X.error,
                    B = X.isError,
                    J = X.isFetching,
                    $ = X.isSuccess,
                    V = (0, ee.hi)({
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
                    le = V.isSuccess,
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
                            return e.userId === M ? -1 : 0
                        }))) || void 0 === n || null === (n = n.filter((function(e, t, n) {
                            return n.findIndex((function(t) {
                                return t.userId === e.userId
                            })) === t
                        }))) || void 0 === n ? void 0 : n.map((function(e) {
                            return e.userId === M ? null : I.createElement(be, {
                                key: e.id,
                                member: e,
                                onSelectCallback: function(e) {
                                    return m(e)
                                }
                            })
                        }))
                    }));
                return I.createElement(ie.oA, {
                    role: "dialog",
                    isOpen: i,
                    toggle: c,
                    keyboard: !0,
                    autoFocus: !1,
                    size: "lg"
                }, I.createElement(ie.eb, {
                    tag: "h4",
                    close: I.createElement(ne.Z, {
                        onClick: c
                    }),
                    toggle: c
                }, u ? "Group Members Search" : "Users Search"), I.createElement(ie.vc, null, I.createElement(ie.T_, null, I.createElement(te.II, {
                    id: "search-product-list",
                    onChange: function(e) {
                        return h(e.target.value)
                    },
                    placeholder: u ? "Search Group Members..." : "Search for users...",
                    ref: g,
                    type: "text",
                    value: v
                }), (B || Y) && I.createElement("p", {
                    className: "text-center m-5 text-warning h-25"
                }, "Something went wrong with the search, please try again later!", I.createElement("br", null), B && I.createElement("code", null, null == _ || null === (n = _.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), Y && I.createElement("code", null, null == H || null === (r = H.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message)), J || p && I.createElement(ie.Um, null, I.createElement("div", {
                    className: "text-center m-5 text-secondary h-25"
                }, I.createElement(re.Z, null))), !$ && !J && !B && u && I.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "Search for members in your group."), $ && !J && u && I.createElement(ie.Um, null, D.results.map((function(e) {
                    return I.createElement(be, {
                        key: e.id,
                        member: e,
                        onSelectCallback: function(e) {
                            return m(e)
                        }
                    })
                })), 0 === D.results.length && I.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "We couldn't find anything with that search.")), !le && !Q && !Y && !u && I.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "Search for users on VRChat."), le && I.createElement(ie.Um, null, 0 === W.results.length && I.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "We couldn't find anything with that search.")), F ? I.createElement(te.UU, {
                    height: "200px"
                }) : I.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, me), I.createElement("div", {
                    className: "p-2",
                    style: {
                        margin: "2px auto 0",
                        textAlign: "center"
                    }
                }, I.createElement(te.zx, {
                    onClick: function() {
                        return ue(page)
                    },
                    disabled: F || z || G,
                    loading: F
                }, z || G ? "No more members..." : "List More Members")), ($ || le) && I.createElement(ie.Gz, null, I.createElement(ie.IT, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return y(x - 1)
                    },
                    disabled: 1 === x || J || Q
                }, I.createElement(te.$1, {
                    icon: oe.A3
                })), I.createElement("span", null, x), I.createElement(ie.UV, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return y(x + 1)
                    },
                    disabled: (null == D ? void 0 : D.isLastPage) || (null == W ? void 0 : W.isLastPage) || J || Q
                }, I.createElement(te.$1, {
                    icon: ae._t
                }))))))
            };
            Ze.propTypes = {
                group: me().object,
                isOpen: me().bool.isRequired,
                cancelCallback: me().func.isRequired,
                memberEditCallback: me().func,
                memberSelectCallback: me().func
            };
            const ke = Ze;
            var Ne = n(46027);
            const Ie = function(e) {
                var t, n, r = e.group,
                    l = e.onClickCallback,
                    a = e.isDeleting,
                    o = (0, ee.GR)(null == r ? void 0 : r.ownerId, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    i = o.data,
                    c = o.isFetching,
                    s = o.isError,
                    u = o.error,
                    m = (0, ee.GR)(null == r ? void 0 : r.transferTargetId, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    d = m.data,
                    p = m.isFetching,
                    g = m.isError,
                    f = m.error;
                return I.createElement(I.Fragment, null, I.createElement(te.oI, {
                    className: "mt-2"
                }, I.createElement("h4", {
                    className: "text-center"
                }, "Group Ownership Transfer")), I.createElement(te.Ao, null, c || p || !d || !i ? I.createElement("div", {
                    className: "full-width text-center"
                }, I.createElement(re.Z, null)) : I.createElement(I.Fragment, null, s && I.createElement(te.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == u || null === (t = u.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), g && I.createElement(te.qX, {
                    type: "error",
                    title: "Error Fetching New Group Owner Data"
                }, (null == f || null === (n = f.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unkown error fetching New Group Owner Data"), I.createElement(te.X2, null, I.createElement("span", {
                    className: "full-width text-center"
                }, "You can choose to cancel the transfer")), I.createElement(te.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, I.createElement(te.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "Current Owner"), I.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, I.createElement(te.$1, {
                    className: "tw-mr-2",
                    icon: Ne.nm
                }), null == i ? void 0 : i.displayName)), I.createElement(te.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "New Owner"), d && I.createElement(te.X2, {
                    className: "tw-flex tw-m-1 tw-font-bold gx-0 gap-1"
                }, I.createElement(te.pw, {
                    width: 24,
                    style: {
                        maxWidth: "24px",
                        objectFit: "cover"
                    },
                    imageId: (d.thumbnailUrl || d.currentAvatarThumbnailImageUrl).match("(?!/)file_[^/]+")[0],
                    alt: null == d ? void 0 : d.displayName
                }), null == d ? void 0 : d.displayName))), a ? I.createElement("div", {
                    className: "full-width text-center"
                }, I.createElement(re.Z, null)) : I.createElement("div", {
                    className: (0, N.iv)({
                        name: "pc0kie",
                        styles: ">*{margin-top:15px;}"
                    })
                }, I.createElement(te.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, I.createElement(te.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement(te.zx, {
                    onClick: function() {
                        return l()
                    },
                    danger: !0,
                    className: "tw-max-w-[100%]"
                }, "Cancel Transfer")))))))
            };
            var Oe = n(57982);
            const Ce = function(e) {
                var t = e.isOpen,
                    n = e.cancelCallback;
                return I.createElement(ie.oA, {
                    role: "dialog",
                    isOpen: t,
                    toggle: n,
                    keyboard: !0,
                    autoFocus: !1,
                    size: "lg"
                }, I.createElement(ie.eb, {
                    tag: "h4",
                    close: I.createElement(ne.Z, {
                        onClick: n
                    }),
                    toggle: n
                }, "About Group Ownership Transfer"), I.createElement(ie.vc, null, I.createElement("h4", null, "You can transfer your group ownership to another member of the group. the target member and the group must meet the requirements below."), I.createElement(ie.T_, null, I.createElement("ul", null, I.createElement("li", null, "The target member has verified their email address ", "(", "check the Email section via", " ", I.createElement(S.rU, {
                    className: "tw-text-link-highlight",
                    to: "/home/profile",
                    target: "_blank"
                }, "account settings"), ")"), I.createElement("li", null, "The target member has an active VRC Plus subscription"), I.createElement("li", null, "The target member can still own more groups ", "(", "each user can own up to 5 groups", ")"), I.createElement("li", null, "The group is not monetized")))))
            };
            var Se = function(e) {
                var t, n, r = e.group,
                    a = e.onButtonClick,
                    o = e.isLoading,
                    i = I.useState(!1),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, ee.GR)(null == r ? void 0 : r.ownerId, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    d = m.data,
                    p = m.isFetching,
                    g = m.isError,
                    f = m.error,
                    E = (0, se.ek)({
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
                return I.createElement(I.Fragment, null, s && I.createElement(Ce, {
                    isOpen: s,
                    cancelCallback: function() {
                        return u(!1)
                    }
                }), I.createElement(te.oI, {
                    className: "mt-2"
                }, I.createElement("h4", {
                    className: "text-center"
                }, "Group Ownership Transfer")), I.createElement(te.Ao, null, p || h ? I.createElement("div", {
                    className: "full-width text-center"
                }, I.createElement(re.Z, null)) : I.createElement(I.Fragment, null, g && I.createElement(te.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == f || null === (t = f.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), b && I.createElement(te.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == w || null === (n = w.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unkown error fetching Group Owner Requirements Data"), x && !b ? I.createElement("span", {
                    className: "tw-mb-2"
                }, I.createElement(te.qX, {
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
                }, "these requirements"), " ", "to qualify for the transfer."), I.createElement(te.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, I.createElement(te.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement("p", null, "Current Owner"), I.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, I.createElement(te.$1, {
                    className: "tw-mr-2",
                    icon: Ne.nm
                }), null == d ? void 0 : d.displayName)), I.createElement(te.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement("p", null, "New Owner"), I.createElement(te.zx, {
                    className: "tw-max-w-[250px]",
                    onClick: function() {
                        return a()
                    },
                    disabled: o || b || x,
                    loading: o
                }, I.createElement(te.$1, {
                    className: "tw-mr-2",
                    icon: Oe.faMagnifyingGlass
                }), "Search Group Members"))))))
            };
            Se.propTypes = {
                group: me().object.isRequired,
                onButtonClick: me().func.isRequired,
                isLoading: me().bool.isRequired
            };
            const je = Se;
            var Me, Ae = "hasVerifiedEmail",
                Te = "targetCanOwnMoreGroups",
                Re = "targetIsGroupMember",
                Pe = "hasVRCPlus",
                Le = "groupNotMonetized",
                Ue = (Me = {}, (0, P.Z)(Me, Ae, "Email address has not been verified"), (0, P.Z)(Me, Te, "Already owns maximum nubmer of groups per user"), (0, P.Z)(Me, Re, "Is not a valid member of the group"), (0, P.Z)(Me, Pe, "Does not have an active VRChat Plus subscription"), (0, P.Z)(Me, Le, "Group is not valid because it is monetized"), Me);
            const qe = function(e) {
                var t, n = e.group,
                    r = e.validity,
                    l = e.prospectiveNewOwner,
                    a = e.onTransfer,
                    o = e.onCancel,
                    i = e.isOpen,
                    c = e.isTransferring,
                    s = (0, ee.GR)(null == n ? void 0 : n.ownerId, {
                        skip: !n,
                        refetchOnMountOrArgChange: !0
                    }),
                    u = s.data,
                    m = s.isFetching,
                    d = s.isError,
                    p = s.error;
                return I.createElement(I.Fragment, null, I.createElement(te.sm, {
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
                }, I.createElement(re.Z, null)) : I.createElement("div", null, d && I.createElement(te.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == p || null === (t = p.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), !(null != r && r.valid) && (null == r ? void 0 : r.reasons) && I.createElement(te.qX, {
                    type: "error",
                    title: "Oops, it seems the selected member does not meet the following requirement(s)"
                }, r.reasons.map((function(e) {
                    var t;
                    return I.createElement("p", null, "• ".concat(null !== (t = Ue[e]) && void 0 !== t ? t : "Unknown Validity Reason"))
                }))), I.createElement(te.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-mt-2"
                }, I.createElement("span", {
                    className: "tw-full-width tw-text-center"
                }, "Are you sure you want to transfer your group ownership?")), I.createElement(te.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-bg-[#252a30] tw-px-8 tw-text-[16px] tw-rounded-lg tw-border-current tw-transition tw-ease-in-out tw-delay-150 tw-bg-[#252a30] tw-mt-2"
                }, I.createElement(te.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "Current Owner"), I.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, I.createElement(te.$1, {
                    className: "tw-mr-2",
                    icon: Ne.nm
                }), null == u ? void 0 : u.displayName)), I.createElement(te.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, I.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "New Owner"), (null == l ? void 0 : l.user) && I.createElement(te.X2, {
                    className: "tw-flex tw-m-1 tw-font-bold gx-0 gap-1"
                }, I.createElement(te.pw, {
                    width: 24,
                    style: {
                        maxWidth: "24px",
                        objectFit: "cover"
                    },
                    imageId: (0, he.oQ)(l.user.thumbnailUrl || l.user.currentAvatarThumbnailImageUrl),
                    alt: l.user.displayName
                }), l.user.displayName))), I.createElement(te.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-mt-2"
                }, I.createElement("span", {
                    className: "tw-full-width tw-text-center"
                }, "This cannot be undone once the transfer is complete.")))))
            };
            var ze = n(34698),
                Fe = n(58877),
                Ge = n(25402);
            const Xe = function(e) {
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
                }, I.createElement(Ge.QZ, {
                    url: s,
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                })))), I.createElement(ze.Z, {
                    onClick: function() {
                        g(!1), u(v)
                    }
                }, "Cancel"), I.createElement(ze.Z, {
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
                }, "Link"))) : I.createElement("div", null, I.createElement(Fe.Z, {
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
                }, Z[o]), I.createElement(De, {
                    className: "btn btn-outline-danger h-100 ratio-1x1",
                    "aria-label": "Close",
                    onClick: C
                }, I.createElement("span", {
                    "aria-hidden": "true"
                }, "×")))) : I.createElement("div", null)
            };
            var De = (0, a.Z)(ze.Z, {
                    target: "e1a3rjxi0"
                })({
                    name: "1234s8l",
                    styles: "width:40px;max-width:40px"
                }),
                _e = n(71421),
                Be = n(18461);
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
                return I.createElement(He, {
                    className: "mb-2",
                    role: "radiogroup",
                    "aria-label": n.ariaLabel,
                    onMouseLeave: function() {
                        d && p(!1)
                    }
                }, I.createElement(Ke, {
                    disabled: a,
                    expanded: d
                }, I.createElement(et, {
                    type: "button",
                    "aria-label": "Expand Options",
                    disabled: a,
                    onClick: function(e) {
                        e.stopPropagation(), e.preventDefault(), p(!d)
                    }
                }, !!n && I.createElement(We, null, n.labelValue), I.createElement(Ve, {
                    className: "tw-gap-2 tw-text-center tw-justify-center"
                }, b), I.createElement(A.Z, {
                    icon: _e.eW,
                    color: "white",
                    className: "ms-3"
                })), d && i.length > 0 && I.createElement(tt, {
                    className: "tw-px-[10px] tw-gap-1 tw-py-1"
                }, i.map((function(e, t) {
                    var n, r;
                    return I.createElement(Be.Z, {
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
                labelProps: me().shape({
                    ariaLabel: me().string.isRequired,
                    labelValue: me().string.isRequired
                }).isRequired,
                disabled: me().bool.isRequired,
                options: me().array.isRequired,
                onTriggerUpdate: me().func
            };
            const $e = Je;
            var Ve = (0, a.Z)("div", {
                    target: "e1476vl15"
                })({
                    name: "jyvlna",
                    styles: "display:flex;align-items:center;max-width:75%"
                }),
                We = (0, a.Z)("div", {
                    target: "e1476vl14"
                })({
                    name: "qcoia9",
                    styles: "font-size:0.8em;margin-right:10px;color:hsla(0, 0%, 100%, 0.6);white-space:nowrap;max-width:100%"
                }),
                He = (0, a.Z)("div", {
                    target: "e1476vl13"
                })({
                    name: "sss5sy",
                    styles: "display:flex;z-index:4;max-width:400px;min-width:200px"
                }),
                Ye = {
                    name: "4u0b5g",
                    styles: "border:hsl(0, 0%, 20%) solid 2px;background:hsl(0, 0%, 20%);color:hsl(0, 0%, 60%);&:hover{border:hsl(0, 0%, 20%) solid 2px;background:hsl(0, 0%, 20%);color:hsl(0, 0%, 60%);}"
                },
                Qe = {
                    name: "1ll5w29",
                    styles: "border-bottom-color:'#07343f'"
                },
                Ke = (0, a.Z)("div", {
                    target: "e1476vl12"
                })("text-align:center;background-color:#064b5c;padding:5px 11px 5px 11px;border:#064b5c solid 2px;color:#ffffff;border-radius:3px;transition:background-color 0.2s ease-in-out;position:relative;display:flex;flex:1;border-radius:", (function(e) {
                    return e.expanded ? "3px 3px 0 0" : 3
                }), "px;max-width:100%;&:hover{background-color:#064b5c;border-color:#086c84;}", (function(e) {
                    return e.expanded ? Qe : ""
                }), " ", (function(e) {
                    return e.disabled ? Ye : ""
                }), ";"),
                et = (0, a.Z)("button", {
                    target: "e1476vl11"
                })({
                    name: "118t6pa",
                    styles: "border:none;background:transparent;outline:none!important;display:flex;flex:1;flex-direction:row;align-items:center;justify-content:space-between;position:relative;max-width:100%"
                }),
                tt = (0, a.Z)("div", {
                    target: "e1476vl10"
                })({
                    name: "1lt6ba7",
                    styles: "position:absolute;z-index:4;top:100%;left:-2px;width:calc(100% + 4px);background-color:#07343f;display:flex;flex-direction:column;border-radius:0 0 3px 3px;border:#086c84 solid 2px;border-top-width:0;text-align:left;max-width:calc(100% + 4px)"
                });
            const nt = function(e) {
                var t = e.log;
                return e.isLoading ? I.createElement(rt, {
                    className: "justify-content-center"
                }, I.createElement("div", {
                    className: "spinner-border"
                })) : I.createElement(rt, null, I.createElement(lt, null, pe()(t.created_at).format("MM/DD/YYYY hh:mm A")), t.description)
            };
            var rt = (0, a.Z)("div", {
                    target: "evg8j501"
                })({
                    name: "kv8vyc",
                    styles: "background-color:#252a30;border-radius:12px;padding:8px;margin-bottom:8px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;transition:background-color 0.2s ease-in-out;:hover{background-color:#353c45;}"
                }),
                lt = (0, a.Z)("div", {
                    target: "evg8j500"
                })({
                    name: "hbayc1",
                    styles: "font-size:14px;font-weight:lighter;font-style:italic;margin-bottom:8px"
                });
            var at = [{
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
            const ot = function(e) {
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
                    S = (0, se.hg)(),
                    j = (0, l.Z)(S, 2),
                    M = j[0],
                    A = j[1],
                    T = A.data,
                    R = A.isFetching,
                    P = A.isError,
                    U = (0, se.rw)({
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
                    u < 0 ? m(0) : M({
                        groupId: n.id,
                        perPage: o,
                        offset: u,
                        eventTypes: O ? (0, L.Z)(O) : []
                    })
                }), [o, u, q, O, y]), I.useEffect((function() {
                    null != T && T.totalCount && f(T.totalCount)
                }), [T]);
                var G = I.createElement(ct, null, I.createElement(st, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u - o)
                    },
                    disabled: 0 === u
                }, I.createElement(te.$1, {
                    icon: oe.A3
                })), I.createElement("span", null, "(", u, " - ", g < o + u ? g : o + u, ") / ", g), I.createElement(ut, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u + o)
                    },
                    disabled: g < o + u
                }, I.createElement(te.$1, {
                    icon: ae._t
                })));
                return I.createElement("div", null, P && I.createElement(te.qX, {
                    title: "Error",
                    type: "error",
                    className: "mb-2"
                }, "There was an error loading the audit log."), F && !z && I.createElement(te.qX, {
                    title: "Error",
                    type: "error",
                    className: "mb-2"
                }, "There was an error loading the filterable audit log types."), I.createElement(te.oI, null, I.createElement("h4", {
                    className: "text-center"
                }, "Audit Log")), I.createElement(te.Ao, null, I.createElement(te.X2, {
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
                }), I.createElement(it, {
                    label: "Items per-page",
                    onChange: i,
                    options: at,
                    value: o,
                    className: "mb-2"
                })), G, I.createElement("div", {
                    className: "audit-log"
                }, (null !== (t = null == T ? void 0 : T.results) && void 0 !== t ? t : Array(o).fill({})).map((function(e, t) {
                    var n;
                    return I.createElement(nt, {
                        key: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "log-".concat(t),
                        log: e,
                        n: o,
                        offset: u,
                        isLoading: R
                    })
                }))), G))
            };
            var it = (0, a.Z)(te.Lt, {
                    target: "e88tm0e3"
                })({
                    name: "1lsto0t",
                    styles: "max-width:250px"
                }),
                ct = (0, a.Z)("div", {
                    target: "e88tm0e2"
                })({
                    name: "1vtota4",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-bottom:8px"
                }),
                st = (0, a.Z)(te.zx, {
                    target: "e88tm0e1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                ut = (0, a.Z)(te.zx, {
                    target: "e88tm0e0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                mt = n(91054),
                dt = n(27149),
                pt = n(59895),
                gt = n(30776),
                ft = n(29104),
                Et = n(81362),
                vt = n(63221),
                ht = [{
                    label: "Visible",
                    value: vt.iI.VISIBLE
                }, {
                    label: "Friends Only",
                    value: vt.iI.FRIENDS
                }, {
                    label: "Hidden",
                    value: vt.iI.HIDDEN
                }];
            const bt = function(e) {
                var t, n, a, o, i = e.groupId,
                    c = (0, O.I0)(),
                    s = (0, C.s0)(),
                    u = (0, K.XC)(),
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
                    M = (0, se.r5)({
                        groupId: i
                    }, {
                        skip: !m.id
                    }),
                    A = M.data,
                    T = M.isLoading,
                    R = M.error,
                    P = M.isError,
                    L = (0, se.xm)({
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
                    if (U && A) {
                        A.privacy === vt.TW.DEFAULT && U.visibility !== v && h(U.visibility);
                        var e = (null == U ? void 0 : U.isSubscribedToAnnouncements) || (null == U ? void 0 : U.isSubscribedToPosts);
                        y(e)
                    }
                }), [A, U]);
                var G = d || T || q,
                    X = (null == A ? void 0 : A.ownerId) === (null == U ? void 0 : U.userId),
                    D = (0, se.uX)(),
                    _ = (0, l.Z)(D, 2),
                    B = _[0],
                    J = _[1],
                    V = J.isLoading,
                    W = J.error,
                    H = J.isError,
                    Y = J.isSuccess,
                    ee = (0, se.nm)(),
                    ne = (0, l.Z)(ee, 2),
                    re = ne[0],
                    le = ne[1],
                    ae = le.isLoading,
                    oe = le.error,
                    ie = le.isError,
                    ce = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return j(!1), e.next = 3, re({
                                            groupId: i,
                                            userId: m.id
                                        });
                                    case 3:
                                        e.sent.error || (c((0, Q.d)({
                                            title: "You left the group",
                                            icon: pt.u8,
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
                return g ? I.createElement(Et.Z, {
                    error: p,
                    statusCode: p.status
                }) : P ? I.createElement(Et.Z, {
                    error: R,
                    statusCode: R.status
                }) : F ? I.createElement(Et.Z, {
                    error: z,
                    statusCode: z.status
                }) : I.createElement(I.Fragment, null, I.createElement(te.oI, null, I.createElement("h4", {
                    className: "text-center"
                }, "Membership Preferences")), I.createElement(te.Ao, null, G ? I.createElement(te.UU, {
                    height: "250px"
                }) : I.createElement(I.Fragment, null, Y && I.createElement(te.qX, {
                    type: "success",
                    title: "Updated preferences",
                    slim: !0
                }, "Your preferences were saved successfully"), H && I.createElement(te.qX, {
                    type: "error",
                    title: "Error updating preferences"
                }, W.status, " : ", null !== (t = null === (n = W.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : ""), A.privacy === vt.TW.DEFAULT && I.createElement($.Z, null, "Visibility ", I.createElement(te.Lt, {
                    onChange: h,
                    value: v,
                    options: ht
                }), I.createElement("small", null, "Do you want everyone to see this group on your profile, just your friends to see it, or to keep it secret? This only affects your own profile.")), I.createElement("div", {
                    className: "my-2"
                }, I.createElement(ft.Z, {
                    label: "Subscribe to Posts",
                    value: "isSubscribedToPosts",
                    defaultChecked: x,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        y(t)
                    }
                }), I.createElement(gt.Z, null, "Tick this to hear all the latest news and goss from this group")), I.createElement(te.zx, {
                    onClick: function() {
                        B({
                            groupId: i,
                            userId: m.id,
                            visibility: v,
                            isSubscribedToPosts: x
                        })
                    },
                    loading: V,
                    disabled: V
                }, I.createElement(te.$1, {
                    icon: dt.r6
                }), " Save Preferences"))), I.createElement(te.oI, {
                    className: "mt-2"
                }, I.createElement("h4", {
                    className: "text-center"
                }, "Leave Group")), I.createElement(te.Ao, null, G ? I.createElement(te.UU, {
                    height: "100px",
                    delay: 50
                }) : I.createElement(I.Fragment, null, ie && I.createElement(te.qX, {
                    type: "error",
                    title: "Error leaving group"
                }, oe.status, " : ", null !== (a = null === (o = oe.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : ""), I.createElement(te.sm, {
                    headerText: "Leave Group",
                    bodyText: "Are you sure you want to leave this group?",
                    confirmText: "Yes, Leave Group",
                    confirmCallback: ce,
                    cancelText: "Never Mind!",
                    cancelCallback: function() {
                        j(!1)
                    },
                    isOpen: S
                }), X ? I.createElement(te.qX, {
                    type: "warning",
                    title: "You own this group!"
                }, "You can't leave your own group, but you can delete the group over in General settings.") : I.createElement("p", null, "This group not your thing anymore? No problem."), I.createElement(te.zx, {
                    warning: !0,
                    onClick: function() {
                        j(!0)
                    },
                    loading: ae,
                    disabled: X || ae
                }, I.createElement(te.$1, {
                    icon: mt.HE
                }), " Leave Group"))))
            };
            var wt = n(41145),
                xt = n(62228),
                yt = n(609),
                Zt = n(16869),
                kt = n(67978),
                Nt = n(81780),
                It = n(33073),
                Ot = n(95896);

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

            function St(e) {
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
            var jt = {
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
                    f = (0, C.s0)(),
                    E = (0, C.UO)(),
                    v = (0, I.useRef)(!0),
                    h = (0, ce.pc)(),
                    w = I.useMemo((function() {
                        var e;
                        return "new" === E.roleId ? St(St({}, jt), {}, {
                            requiresPurchase: "paid" === E.newRoleType
                        }, "paid" === E.newRoleType && {
                            productPriceTokens: Ot.nk,
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
                    M = (0, l.Z)(O, 2),
                    R = M[0],
                    q = M[1],
                    z = I.useState({}),
                    F = (0, l.Z)(z, 2),
                    G = F[0],
                    X = F[1],
                    J = I.useState(null != w && w.defaultRole ? "permissions" : "general"),
                    V = (0, l.Z)(J, 2),
                    W = V[0],
                    H = V[1],
                    Y = I.useState(null == w ? void 0 : w.requiresTwoFactor),
                    Q = (0, l.Z)(Y, 2),
                    K = Q[0],
                    ee = Q[1],
                    ne = I.useState(null == w ? void 0 : w.isAddedOnJoin),
                    re = (0, l.Z)(ne, 2),
                    ae = re[0],
                    oe = re[1],
                    ie = I.useState(null == w ? void 0 : w.isSelfAssignable),
                    ue = (0, l.Z)(ie, 2),
                    me = ue[0],
                    de = ue[1],
                    pe = I.useState((null == u ? void 0 : u.joinState) === vt.wN.OPEN),
                    ge = (0, l.Z)(pe, 2),
                    fe = ge[0],
                    Ee = ge[1],
                    ve = I.useState(!1),
                    be = (0, l.Z)(ve, 2),
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
                    Me = (0, l.Z)(je, 2),
                    Ae = Me[0],
                    Te = Me[1],
                    Re = (0, se.mt)({
                        groupId: u.id
                    }),
                    Pe = Re.data,
                    Le = Re.isLoading,
                    Ue = Re.isError,
                    qe = (0, se.Pt)(),
                    ze = (0, l.Z)(qe, 2),
                    Fe = ze[0],
                    Ge = ze[1],
                    Xe = Ge.isLoading,
                    De = Ge.isError,
                    _e = Ge.error,
                    Be = (0, se.hE)(),
                    Je = (0, l.Z)(Be, 2),
                    $e = (Je[0], Je[1]),
                    Ve = $e.isLoading,
                    We = $e.isError,
                    He = $e.error,
                    Ye = (0, se.ci)(),
                    Qe = (0, l.Z)(Ye, 2),
                    Ke = Qe[0],
                    et = Qe[1],
                    tt = (et.isLoading, et.isError, et.error, (0, se.VF)()),
                    nt = (0, l.Z)(tt, 2),
                    rt = nt[0],
                    lt = nt[1],
                    at = lt.isLoading,
                    ot = lt.isError,
                    it = lt.error,
                    ct = (0, kt.lZ)({
                        productId: null == w ? void 0 : w.productId
                    }, {
                        skip: !(null != w && w.productId),
                        refetchOnMountOrArgChange: !0
                    }),
                    st = ct.data,
                    ut = ct.isFetching,
                    mt = ct.isUninitialized,
                    pt = (0, Zt.Ul)({
                        userId: null == u ? void 0 : u.ownerId,
                        groupId: null == u ? void 0 : u.id,
                        active: !0
                    }, {
                        skip: !u || !(null != w && w.productId),
                        refetchOnMountOrArgChange: !0
                    }),
                    Et = pt.data,
                    ht = void 0 === Et ? [] : Et,
                    bt = pt.isFetching,
                    Ct = pt.isUninitialized,
                    Mt = I.useMemo((function() {
                        var e;
                        return (null === (e = Ct ? [] : ht) || void 0 === e ? void 0 : e.filter((function(e) {
                            var t, n = e.id,
                                r = e.active,
                                l = e.archived;
                            return r && !l && !mt && (null == st || null === (t = st.parentListings) || void 0 === t ? void 0 : t.includes(n))
                        }))) || []
                    }), [st, mt, ht, Ct]),
                    At = Xe || Ve || at || Le || ut || bt,
                    Tt = (null == u ? void 0 : u.joinState) === vt.wN.OPEN ? "Your group is already set to Free Join, so enabling this option won’t have any effect. Subscribers will still join automatically." : "When enabled, anyone can purchase this role and join the group, regardless of the group’s join rules. This option overrides standard join settings.";
                (0, I.useEffect)((function() {
                    if (st) {
                        if (xe(st.groupAccessRemove), (null == u ? void 0 : u.joinState) === vt.wN.OPEN) return Ee(!0), void q(St(St({}, R), {}, {
                            groupAccess: !0
                        }));
                        Ee(st.groupAccess)
                    }
                }), [st]);
                var Rt = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = {};
                    "new" === (null == w ? void 0 : w.id) && (t = St({}, w)), e || (ee(null == w ? void 0 : w.requiresTwoFactor), oe(null == w ? void 0 : w.isAddedOnJoin), de(null == w ? void 0 : w.isSelfAssignable), Ne((null == w ? void 0 : w.permissions) || [])), d(0), N(t), q(null)
                };
                (0, I.useEffect)((function() {
                    Rt(), H(null != w && w.defaultRole ? "permissions" : "general")
                }), [u, E]), (0, I.useEffect)((function() {
                    v.current ? v.current = !1 : ((null == w ? void 0 : w.requiresTwoFactor) !== K && N(St(St({}, Z), {}, {
                        requiresTwoFactor: K
                    })), (null == w ? void 0 : w.isAddedOnJoin) !== ae && N(St(St({}, Z), {}, {
                        isAddedOnJoin: ae
                    })), (null == w ? void 0 : w.isSelfAssignable) !== me && N(St(St({}, Z), {}, {
                        isSelfAssignable: me
                    })), (null == w ? void 0 : w.permissions) !== ke && N(St(St({}, Z), {}, {
                        permissions: ke
                    })))
                }), [K, ae, me, ke]), (0, I.useEffect)((function() {
                    0 !== p && N(St(St({}, Z), {}, {
                        order: p + w.order
                    }))
                }), [p]);
                var Pt = (0, ce._b)(Pe),
                    Lt = I.useMemo((function() {
                        return (0, he.Ps)({
                            permissionName: Ae,
                            permissionsMap: Pt
                        })
                    }), [Ae, Pt]);
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
                        N(St(St({}, Z), {}, (0, P.Z)({}, n, r))), X(St(St({}, G), {}, (0, P.Z)({}, n, e.target.checkValidity())))
                    },
                    qt = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var t, n;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("new" !== (t = St({}, Z)).id) {
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
                    Bt = w.defaultRole && !Dt,
                    Jt = !w.requiresPurchase && !w.defaultRole && !Ft,
                    $t = !w.defaultRole && !Ft,
                    Vt = $t && !Gt;
                return I.createElement("div", null, We && I.createElement(te.qX, {
                    title: "Error updating role",
                    type: "error"
                }, "Failed to update role: ", null == He || null === (t = He.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), De && I.createElement(te.qX, {
                    title: "Error creating role",
                    type: "error"
                }, "Failed to create role: ", null == _e || null === (n = _e.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), I.createElement(j.Z, {
                    isOpen: Ce
                }, I.createElement(te.oI, {
                    className: "text-center"
                }, I.createElement("h4", null, "Are you sure?")), I.createElement(te.Ao, null, I.createElement(B.Z, null, ot && I.createElement(te.qX, {
                    title: "Error deleting role",
                    type: "error"
                }, "Failed to delete role: ", null !== (a = null == it || null === (o = it.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : "Unexpected error occurred"), I.createElement("p", null, "This will delete the role and all members with this role will be demoted to the lowest role. This action cannot be undone.")), I.createElement("div", {
                    className: "d-flex flex-row justify-content-md-center"
                }, I.createElement(te.zx, {
                    danger: !0,
                    onClick: function() {
                        zt(!0)
                    },
                    loading: at,
                    expand: !0
                }, I.createElement(te.$1, {
                    icon: U.$
                }), " Yes, Delete"), " ", I.createElement(te.zx, {
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
                    if (null == w || !w.createdAt || !w.requiresPurchase || Mt.length) return null;
                    var t = "activate its associated subscription";
                    return I.createElement(te.qX, {
                        type: "info",
                        title: "No Active Subscriptions"
                    }, "Before people can buy this role, ", g ? "you'll" : "the group owner will", " need to", " ", g && !mt && null != st && null !== (e = st.parentListings) && void 0 !== e && e.length ? I.createElement(S.rU, {
                        to: "/home/marketplace/storefront/subscriptions"
                    }, t) : t, " ", "in ", g ? "your" : "their", " Store. ", g ? "You" : "The Group Owner", " can also give the product and listing their own images, descriptions and other details from there.")
                }(), !w.defaultRole && I.createElement(_.Z, null, I.createElement(le.Z, {
                    tabs: [{
                        name: "General",
                        id: "general",
                        icon: c.b7,
                        condition: !(null != w && w.defaultRole)
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
                })), I.createElement(Nt.Z, {
                    activeTab: W
                }, I.createElement(It.Z, {
                    tabId: "general"
                }, Vt && !Xt && I.createElement(I.Fragment, null, I.createElement(_.Z, null, I.createElement("h6", {
                    className: "text-center"
                }, "Change role order"), I.createElement("div", {
                    className: "d-flex flex-row justify-content-md-center"
                }, I.createElement(te.zx, {
                    onClick: function() {
                        m({
                            offset: -1,
                            roleId: w.id
                        })
                    },
                    expand: !0
                }, I.createElement(te.$1, {
                    icon: xt.mT
                }), " Move Up"), " ", I.createElement(te.zx, {
                    onClick: function() {
                        m({
                            offset: 1,
                            roleId: w.id
                        })
                    },
                    expand: !0
                }, I.createElement(te.$1, {
                    icon: wt.pt
                }), " Move Down"))), " ", " "), I.createElement(_.Z, {
                    className: "mb-2"
                }, I.createElement(D.Z, null, I.createElement(te.II, {
                    type: "text",
                    name: "name",
                    value: null != Z.name ? Z.name : w.name,
                    onChange: Ut,
                    maxLength: 64,
                    required: !0,
                    disabled: Xt || w.defaultRole,
                    placeholder: "Enter Role's Name"
                }), !1 === G.name && I.createElement($.Z, null, "Must be between 1 and 64 characters."))), I.createElement(_.Z, {
                    className: "mb-3"
                }, I.createElement(D.Z, null, I.createElement(te.gx, {
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
                }), !1 === G.description && I.createElement($.Z, null, "Must be 256 characters or less."))), $t && !w.requiresPurchase && _t && I.createElement(_.Z, {
                    className: "my-2"
                }, I.createElement(ft.Z, {
                    label: "Assign On Join",
                    value: "isAddedOnJoin",
                    defaultChecked: null != Z.isAddedOnJoin ? Z.isAddedOnJoin : w.isAddedOnJoin,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        oe(t)
                    }
                }), I.createElement(gt.Z, null, "If enabled, new members will be assigned this role when they join the group. This will not affect existing members.")), Jt && I.createElement(_.Z, {
                    className: "my-2"
                }, I.createElement(ft.Z, {
                    label: "Self Assignable",
                    value: "isSelfAssignable",
                    defaultChecked: me,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        de(t)
                    }
                }), I.createElement(gt.Z, null, "Allows members of the group to assign this role to themselves.")), I.createElement(_.Z, {
                    className: "my-3"
                }, I.createElement(ft.Z, {
                    label: "Require Two-Factor Authentication",
                    value: "requiresTwoFactor",
                    defaultChecked: K,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        return ee(t)
                    }
                }), I.createElement(gt.Z, null, "Requires members to have 2FA before permissions apply.")), w.requiresPurchase && I.createElement(I.Fragment, null, I.createElement(_.Z, {
                    className: "my-2"
                }, I.createElement(ft.Z, {
                    label: "Enable Free Join for Subscribers",
                    value: "productGroupAccess",
                    defaultChecked: fe,
                    onChangeCallback: function(e) {
                        var t, n, r, l = e.checked;
                        t = l, n = St(St({}, Z), {}, {
                            productGroupAccess: t
                        }), r = St(St({}, R), {}, {
                            groupAccess: t
                        }), t || (n.productGroupAccessRemove = void 0, r.groupAccessRemove = !1, xe(!1)), Ee(t), N(n), q(r)
                    },
                    disabled: (null == u ? void 0 : u.joinState) === vt.wN.OPEN
                }), I.createElement(gt.Z, null, Tt)), (null != Z.productGroupAccess ? Z.productGroupAccess : fe) && I.createElement(_.Z, {
                    className: "my-2"
                }, I.createElement(ft.Z, {
                    label: "Remove Members After Expiration",
                    value: "productGroupAccessRemove",
                    defaultChecked: null != Z.productGroupAccessRemove ? Z.productGroupAccessRemove : we,
                    onChangeCallback: function(e) {
                        var t, n = e.checked;
                        xe(t = n), N(St(St({}, Z), {}, {
                            productGroupAccessRemove: t
                        })), q(St(St({}, R), {}, {
                            groupAccessRemove: t
                        }))
                    }
                }), I.createElement(gt.Z, null, "If enabled, group members with this role are removed from the group entirely when their subscription ends. Note that this will remove any member whose subscription ends, whether they bought their way in or not."))), w.requiresPurchase && Gt && I.createElement(I.Fragment, null, I.createElement(_.Z, null, I.createElement(D.Z, null, I.createElement($.Z, {
                    htmlFor: "productPriceTokens"
                }, "Credits", "forevers" === w.productDurationType ? "" : " per ".concat(1 === w.productDuration ? w.productDurationType.replace(/s$/, "") : "".concat(w.productDuration, " ").concat(w.productDurationType)))), I.createElement(D.Z, null, I.createElement(te.II, {
                    type: "number",
                    name: "productPriceTokens",
                    value: null != Z.productPriceTokens ? Z.productPriceTokens : w.productPriceTokens,
                    onChange: Ut,
                    required: !0,
                    step: "1",
                    min: Ot.nk,
                    max: Ot.A1
                }), !1 === G.productPriceTokens && I.createElement($.Z, null, "Must be a whole number between ", I.createElement(te.b5, null), Ot.nk.toLocaleString(), " and ", I.createElement(te.b5, null), Ot.A1.toLocaleString(), ".")))), w.productId && I.createElement("p", null, I.createElement("small", null, g ? "You" : "The Group Owner", " can manage details and subscription behaviour of this role's", " ", I.createElement(S.rU, {
                    to: "/home/marketplace/storefront/products#".concat(w.productId)
                }, "associated product"), !mt && null != st && null !== (i = st.parentListings) && void 0 !== i && i.length ? I.createElement(I.Fragment, null, ", and the details, price and availability of the product's", " ", I.createElement(S.rU, {
                    to: "/home/marketplace/storefront/listings#".concat(st.parentListings[0])
                }, "associated listing"), " ") : " ", g ? "in your Store" : "in their Store", "."))), I.createElement(It.Z, {
                    tabId: "permissions"
                }, Ue && I.createElement(te.qX, {
                    title: "Error",
                    type: "error"
                }, "There was an error loading permissions."), (null == w ? void 0 : w.defaultRole) && I.createElement(I.Fragment, null, I.createElement("p", null, w.description), I.createElement("hr", null)), Ft || Bt ? I.createElement("p", null, "You can't edit the ", Ft ? "Group Owner" : "default", " role.", " ", Ft ? "It must always have all" : "You lack the required", " permissions.") : I.createElement("div", null, Pe.filter((function(e) {
                    var t;
                    return h || (!w.requiresPurchase || !e.isManagementPermission) && e.allowedToAdd && (0 === (null == u ? void 0 : u.memberRank) || (null == u || null === (t = u.myMember) || void 0 === t ? void 0 : t.permissions.includes(e.name)))
                })).map((function(e) {
                    var t = e.name,
                        n = Pt[t];
                    return I.createElement("div", {
                        key: n.name,
                        className: "mb-2"
                    }, I.createElement(ft.Z, {
                        label: n.displayName,
                        value: n.name,
                        defaultChecked: ke.includes(n.name),
                        disabled: w.requiresPurchase && !g,
                        onChangeCallback: function(e) {
                            var t = e.checked;
                            ! function(e, t) {
                                var n;
                                if (t) {
                                    var r = (0, he.QZ)({
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
                    }), (n.help || n.dependsOn) && I.createElement(gt.Z, null, n.help, n.help && n.dependsOn && " ", n.dependsOn && I.createElement(I.Fragment, null, "Requires", " ", (0, L.Z)(n.dependsOn).map((function(e) {
                        return "“".concat(Pt[e].displayName || e, "”")
                    })).join(", "), ".")))
                }))))), !Bt && (Xt ? I.createElement("p", null, I.createElement("small", null, "Only the Group Owner can edit paid roles.")) : I.createElement("div", {
                    className: "d-flex flex-row align-content-center mt-1\n                  ".concat(Gt || Ft || w.defaultRole ? "justify-content-end" : "justify-content-between")
                }, !Gt && !Ft && !w.defaultRole && I.createElement(te.zx, {
                    danger: !0,
                    onClick: function() {
                        zt(!1)
                    },
                    disabled: At
                }, I.createElement(A.Z, {
                    icon: U.$
                }), " Delete"), I.createElement("div", {
                    className: "d-flex flex-row"
                }, I.createElement(te.zx, {
                    neutral: !0,
                    onClick: function() {
                        Rt()
                    },
                    disabled: At || 0 === Object.keys(Z).length
                }, I.createElement(A.Z, {
                    icon: b.NB
                }), " ", Gt ? "Clear" : "Cancel"), " ", I.createElement(te.zx, {
                    loading: At && !at,
                    disabled: At || 0 === Object.keys(Z).length || Object.values(G).includes(!1),
                    onClick: qt
                }, I.createElement(A.Z, {
                    icon: dt.r6
                }), " Save"))))), I.createElement(te.sm, {
                    isOpen: !!Ae,
                    confirmCallback: function() {
                        return Ne(ke.filter((function(e) {
                            return e !== Ae && !Lt.has(e)
                        }))), void Te(null)
                    },
                    cancelCallback: function() {
                        return Te(null)
                    },
                    headerText: "Role Permission Dependencies",
                    confirmText: "Turn Off",
                    cancelText: "Go Back"
                }, I.createElement("div", null, I.createElement("p", null, "Turning off “", null === (s = Pt[Ae]) || void 0 === s ? void 0 : s.displayName, "” will also turn off permissions that currently require it:"), I.createElement("ul", null, (0, L.Z)(Lt).filter((function(e) {
                    return ke.includes(e)
                })).map((function(e) {
                    var t = Pt[e];
                    return I.createElement("li", {
                        key: e
                    }, "“", t.displayName, "”")
                }))), I.createElement("strong", null, "Are you sure you want to turn this off?"))))
            };
            var At = n(93682),
                Tt = n(3163),
                Rt = n(50249);
            const Pt = function(e) {
                var t, n = e.group,
                    r = e.roleLocalOffset,
                    l = e.isGroupOwner,
                    a = (0, ce.pc)(),
                    o = (0, C.TH)(),
                    i = (0, C.UO)(),
                    c = I.useMemo((function() {
                        return "new" !== i.roleId && i.roleId
                    }), [i]),
                    s = (0, K.q7)().data,
                    u = void 0 === s ? [] : s,
                    m = u.includes("permission-creator-preview"),
                    d = u.includes("permission-can-sell-products"),
                    p = (0, L.Z)(null == n ? void 0 : n.roles).sort((function(e, t) {
                        var n = e.order,
                            l = t.order;
                        return e.id === c ? (n += r) === t.order && (r > 0 ? n += 1 : n -= 1) : t.id === c && (l += r) === e.order && (r > 0 ? l += 1 : l -= 1), n < l ? -1 : 1
                    })) || [],
                    g = p.length >= vt.Mw,
                    f = null == n || null === (t = n.myMember) || void 0 === t ? void 0 : t.permissions,
                    E = p.map((function(e, t) {
                        var r, l = [],
                            o = null;
                        0 === e.order ? (l.push(I.createElement(Lt, {
                            key: "management-header"
                        }, "Management Roles")), o = I.createElement(I.Fragment, null, I.createElement(te.$1, {
                            icon: Ne.nm,
                            title: "Management Role"
                        }), " ")) : e.permissions.includes("group-instance-moderate") ? o = I.createElement(I.Fragment, null, I.createElement(te.$1, {
                            icon: Tt.U7,
                            title: "Instance Moderator Role"
                        }), " ") : e.requiresPurchase ? o = I.createElement(I.Fragment, null, I.createElement(te.$1, {
                            icon: Rt.Z,
                            title: "Paid Role"
                        }), " ") : e.defaultRole && (l.push(I.createElement(Lt, {
                            key: "default-header"
                        }, "Default Role")), o = I.createElement(I.Fragment, null, I.createElement(te.$1, {
                            icon: At.Z3,
                            title: "Default Role"
                        }), " ")), e.isManagementRole || e.defaultRole || null === (r = p[t - 1]) || void 0 === r || !r.isManagementRole || l.push(I.createElement(Lt, {
                            key: "member-header"
                        }, "Member Roles"));
                        var i = (0 === (null == n ? void 0 : n.memberRank) || "new" === e.id || e.order > (null == n ? void 0 : n.memberRank)) && (f.includes("*") || 0 === e.permissions.filter((function(e) {
                            return !f.includes(e)
                        })).length);
                        return l.push(a || i ? I.createElement(zt, null, I.createElement(Gt, {
                            key: e.id,
                            to: "/home/group/".concat(n.id, "/settings/roles/").concat(e.id),
                            className: e.id === c ? "selected" : ""
                        }, o, e.name + ("new" === e.id ? " (unsaved new role)" : ""))) : I.createElement(qt, {
                            key: e.id
                        }, o, e.name + ("new" === e.id ? " (unsaved new role)" : ""))), l
                    }));
                return I.createElement(I.Fragment, null, g && I.createElement(M.Z, {
                    role: "alert",
                    color: "warning"
                }, "This group has reached maximum number of roles"), I.createElement(Ut, null, E, I.createElement("li", null, I.createElement(Ft, {
                    to: "/home/group/".concat(n.id, "/settings/roles/new"),
                    end: !0,
                    disabled: g
                }, "Create Role")), l && m && I.createElement("li", null, d ? I.createElement(Ft, {
                    to: "/home/group/".concat(n.id, "/settings/roles/new/paid"),
                    end: !0,
                    disabled: g
                }, "Create Paid Role") : I.createElement(te.qX, {
                    slim: !0
                }, "Want to create a paid role? Find out more and sign up", " ", I.createElement(S.rU, {
                    to: "/home/marketplace/wallet",
                    state: {
                        redirectTo: o.pathname
                    }
                }, "in your Wallet"), "."))))
            };
            var Lt = (0, a.Z)("h5", {
                    target: "e1hiny755"
                })({
                    name: "1gttmjq",
                    styles: "margin:0;padding:0;font-size:1.2rem;font-weight:bold"
                }),
                Ut = (0, a.Z)("ul", {
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
                zt = (0, a.Z)("li", {
                    target: "e1hiny752"
                })({
                    name: "1hcx8jb",
                    styles: "padding:0"
                }),
                Ft = (0, a.Z)(S.OL, {
                    target: "e1hiny751"
                })({
                    name: "1ekamc",
                    styles: "display:inline-block;padding:5px;margin-bottom:8px;border-radius:4px;width:100%;color:inherit;background-color:#064b5c;border:#064b5c solid 2px;text-align:center;flex:1;:hover{background-color:#064b5c;border-color:#086c84;text-decoration:none;}&.active{background-color:#454b54;}"
                }),
                Gt = (0, a.Z)(Ft, {
                    target: "e1hiny750"
                })({
                    name: "hlgyoz",
                    styles: "background-color:transparent;border-color:transparent;text-align:left;:hover{background-color:#282b31;border-color:#282b31;}&.active{background-color:#454b54;border-color:#454b54;}"
                }),
                Xt = n(98185);
            const Dt = function(e) {
                var t = e.group,
                    n = (0, ce.pc)(),
                    r = (0, C.TH)(),
                    a = I.useState(0),
                    o = (0, l.Z)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = (0, O.v9)((function(e) {
                        var t;
                        return null === (t = e.group) || void 0 === t || null === (t = t.role) || void 0 === t ? void 0 : t.error
                    })),
                    u = (0, K.XC)(),
                    m = u.data,
                    d = (u.isLoading, u.isError, u.error, (null == t ? void 0 : t.ownerId) === (null == m ? void 0 : m.id));
                I.useEffect((function() {
                    c(0)
                }), [r]);
                return I.createElement(Xt.Z, {
                    loading: !t.roles
                }, s && I.createElement(te.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: s.message
                }), I.createElement(te.oI, null, I.createElement("h4", {
                    className: "text-center"
                }, "Roles")), I.createElement(te.Ao, null, I.createElement(_t, null, I.createElement(Bt, null, I.createElement(Pt, {
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
            var _t = (0, a.Z)(te.X2, {
                    target: "eaqb3yw1"
                })({
                    name: "ikx90a",
                    styles: "display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:stretch;>*{flex:1;}"
                }),
                Bt = (0, a.Z)("div", {
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
            var Vt = I.lazy((function() {
                    return Promise.all([n.e(123), n.e(2150), n.e(4444), n.e(8890), n.e(9908), n.e(3294), n.e(9375), n.e(4814)]).then(n.bind(n, 59375))
                })),
                Wt = [{
                    label: "Open",
                    value: vt.wN.OPEN
                }, {
                    label: "Closed",
                    value: vt.wN.CLOSED
                }, {
                    label: "Invite Only",
                    value: vt.wN.INVITE
                }, {
                    label: "Request Invite",
                    value: vt.wN.REQUEST
                }];
            const Ht = function(e) {
                var t, n, a, o, i, c, s, u, m, d, p, g, f, E, v, h = e.group,
                    b = (0, K.IB)().data,
                    w = null !== (t = null == h ? void 0 : h.transferTargetId) && void 0 !== t ? t : null,
                    Z = (0, O.I0)(),
                    S = (0, C.s0)(),
                    M = I.useState({
                        name: h.name,
                        shortCode: h.shortCode,
                        description: h.description,
                        isSearchable: h.isSearchable,
                        joinState: h.joinState,
                        language: h.languages,
                        rules: h.rules
                    }),
                    ae = (0, l.Z)(M, 2),
                    oe = ae[0],
                    ie = ae[1],
                    ce = I.useState(!1),
                    ue = (0, l.Z)(ce, 2),
                    me = ue[0],
                    de = ue[1],
                    pe = I.useState(!1),
                    ge = (0, l.Z)(pe, 2),
                    fe = ge[0],
                    Ee = ge[1],
                    ve = I.useState(!1),
                    he = (0, l.Z)(ve, 2),
                    be = he[0],
                    we = he[1],
                    xe = I.useState(!1),
                    ye = (0, l.Z)(xe, 2),
                    Ze = ye[0],
                    Ne = ye[1],
                    Oe = I.useState(null),
                    Ce = (0, l.Z)(Oe, 2),
                    Se = Ce[0],
                    Me = Ce[1],
                    Ae = I.useState(!1),
                    Te = (0, l.Z)(Ae, 2),
                    Re = Te[0],
                    Pe = Te[1],
                    Le = I.useState(!1),
                    Ue = (0, l.Z)(Le, 2),
                    ze = Ue[0],
                    Fe = Ue[1],
                    Ge = I.useState(null),
                    De = (0, l.Z)(Ge, 2),
                    _e = De[0],
                    Be = De[1],
                    Je = I.useState(!1),
                    $e = (0, l.Z)(Je, 2),
                    Ve = $e[0],
                    We = $e[1],
                    He = I.useState(!1),
                    Ye = (0, l.Z)(He, 2),
                    Qe = Ye[0],
                    Ke = Ye[1],
                    et = I.useState(!1),
                    tt = (0, l.Z)(et, 2),
                    nt = tt[0],
                    rt = tt[1],
                    lt = I.useState(null),
                    at = (0, l.Z)(lt, 2),
                    it = at[0],
                    ct = at[1],
                    st = I.useState(null),
                    ut = (0, l.Z)(st, 2),
                    mt = (ut[0], ut[1]),
                    dt = I.useState(!1),
                    pt = (0, l.Z)(dt, 2),
                    gt = pt[0],
                    ft = pt[1],
                    Et = I.useState(null !== (n = h.languages) && void 0 !== n ? n : []),
                    vt = (0, l.Z)(Et, 2),
                    ht = vt[0],
                    wt = vt[1],
                    xt = I.useState(null !== (a = h.links) && void 0 !== a ? a : []),
                    yt = (0, l.Z)(xt, 2),
                    Zt = yt[0],
                    kt = yt[1],
                    Nt = I.useState(null),
                    It = (0, l.Z)(Nt, 2),
                    Ot = It[0],
                    Ct = It[1],
                    St = I.useState(null),
                    jt = (0, l.Z)(St, 2),
                    Mt = (jt[0], jt[1]),
                    At = (0, O.v9)((function(e) {
                        return e.currentUser.isMod
                    })),
                    Tt = (null == h ? void 0 : h.ownerId) === (null == b ? void 0 : b.id),
                    Rt = (0, se.mA)(),
                    Pt = (0, l.Z)(Rt, 2),
                    Lt = Pt[0],
                    Ut = Pt[1],
                    qt = Ut.isError,
                    zt = Ut.isLoading,
                    Ft = Ut.error,
                    Gt = (0, se.CL)(),
                    Xt = (0, l.Z)(Gt, 2),
                    _t = Xt[0],
                    Bt = Xt[1],
                    Jt = Bt.isError,
                    Ht = Bt.isLoading,
                    Qt = Bt.error,
                    Kt = Bt.isSuccess,
                    en = (0, K.q7)().data,
                    tn = void 0 === en ? [] : en,
                    nn = (0, H.y)().data,
                    rn = null !== (o = null == nn || null === (i = nn.constants) || void 0 === i || null === (i = i.LANGUAGE) || void 0 === i ? void 0 : i.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== o ? o : W.O,
                    ln = [{
                        value: "none",
                        label: "none"
                    }].concat((0, L.Z)(Object.keys(rn).map((function(e) {
                        return {
                            value: e,
                            label: rn[e]
                        }
                    })))),
                    an = (null == _e || null === (c = _e.user) || void 0 === c ? void 0 : c.id) && (null == h ? void 0 : h.id) && null === w,
                    on = (0, se.ek)({
                        groupId: null == h ? void 0 : h.id,
                        transferTargetId: null == _e || null === (s = _e.user) || void 0 === s ? void 0 : s.id
                    }, {
                        skip: !an,
                        refetchOnMountOrArgChange: !0
                    }),
                    cn = on.data,
                    sn = on.isFetching,
                    un = on.isError,
                    mn = on.error,
                    dn = null !== w,
                    pn = (0, ee.GR)(w, {
                        skip: !dn,
                        refetchOnMountOrArgChange: !0
                    }),
                    gn = pn.data,
                    fn = pn.isFetching,
                    En = pn.isError,
                    vn = pn.error,
                    hn = (0, se.HT)(),
                    bn = (0, l.Z)(hn, 2),
                    wn = bn[0],
                    xn = bn[1],
                    yn = (xn.data, xn.isFetching),
                    Zn = xn.isError,
                    kn = xn.error,
                    Nn = (0, se.rq)(),
                    In = (0, l.Z)(Nn, 2),
                    On = In[0],
                    Cn = In[1],
                    Sn = (Cn.data, Cn.isFetching),
                    jn = Cn.isError,
                    Mn = Cn.error;
                I.useEffect((function() {
                    Kt ? S("/home/groups") : (We(!1), de(!1))
                }), [Ht]), I.useEffect((function() {
                    if (be && _e && sn && Ne(!0), !sn && be && cn && !un) {
                        Ne(!1);
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
                        Me(e), we(!1), Ee(!1), Pe(!0)
                    }
                    var t;
                    !sn && be && un && (Ne(!1), we(!1), Be(null), Z((0, Q.d)({
                        title: "Error Validating Group Transfer",
                        icon: x.eH,
                        message: "".concat(null == mn || null === (t = mn.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                        color: "error",
                        timeout: 3e3
                    })))
                }), [be, _e, sn, un, cn]), I.useEffect((function() {
                    var e;
                    (fn || En || !gn || Be({
                        user: gn
                    }), !fn && En) && Z((0, Q.d)({
                        title: "Error Fetching New Owner Data",
                        icon: x.eH,
                        message: "".concat(null == vn || null === (e = vn.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message),
                        color: "error",
                        timeout: 3e3
                    }))
                }), [fn, gn, En]);
                var An = function(e) {
                        var t = e.target.name,
                            n = "checkbox" === e.target.getAttribute("type") ? e.target.checked : e.target.value;
                        ie($t($t({}, oe), {}, (0, P.Z)({}, t, "shortCode" === t ? n.toUpperCase() : n)))
                    },
                    Tn = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        it && (oe.bannerId = it), Ot && (oe.iconId = Ot), Lt({
                                            groupId: h.id,
                                            data: $t({}, oe)
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
                    Rn = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var t, n, r;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return Fe(!0), e.prev = 1, e.next = 4, wn({
                                            groupId: h.id,
                                            transferTargetId: null == _e || null === (t = _e.user) || void 0 === t ? void 0 : t.id
                                        }).unwrap();
                                    case 4:
                                        Zn && (Fe(!1), Pe(!1), Be(null), Z((0, Q.d)({
                                            title: "Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null == kn || null === (n = kn.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 6e3
                                        }))), Zn || Z((0, Q.d)({
                                            title: "Group Transfer Initiated",
                                            icon: y.f8,
                                            color: "success",
                                            timeout: 6e3
                                        })), Fe(!1), Pe(!1), e.next = 16;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(1), Fe(!1), Pe(!1), Be(null), Z((0, Q.d)({
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
                    Pn = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var t, n, r;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return Ke(!0), e.prev = 1, e.next = 4, On({
                                            groupId: h.id,
                                            transferTargetId: null == _e || null === (t = _e.user) || void 0 === t ? void 0 : t.id
                                        }).unwrap();
                                    case 4:
                                        Ke(!1), jn && Z((0, Q.d)({
                                            title: "Cancel Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null == Mn || null === (n = Mn.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 3e3
                                        })), jn || Z((0, Q.d)({
                                            title: "Delete Group Transfer Success",
                                            icon: y.f8,
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(1), Ke(!1), Z((0, Q.d)({
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
                    Ln = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        We(!0), _t({
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
                    Un = function(e) {
                        kt(e), ie($t($t({}, oe), {}, {
                            links: e
                        }))
                    },
                    qn = function(e, t) {
                        var n = (0, L.Z)(ht);
                        n[e] = t, n = n.filter((function(e) {
                            return "none" !== e
                        })), wt(n), ie($t($t({}, oe), {}, {
                            languages: n
                        }))
                    },
                    zn = tn.includes("permission-user-gallery"),
                    Fn = tn.includes("permission-user-icons"),
                    Gn = zt || Ht || yn || Sn;
                return I.createElement("div", null, I.createElement(D.Z, {
                    className: "mt-4"
                }, I.createElement(le.Z, {
                    tabs: [{
                        name: "General",
                        to: "/home/group/".concat(h.id, "/settings"),
                        end: !0,
                        icon: X.Kb,
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
                        icon: F.aC,
                        condition: At || T({
                            groupMember: null == h ? void 0 : h.myMember,
                            permission: "group-roles-manage"
                        })
                    }, {
                        name: "Logs",
                        to: "logs",
                        icon: z.tx,
                        condition: At || T({
                            groupMember: null == h ? void 0 : h.myMember,
                            permission: "group-audit-view"
                        })
                    }, {
                        name: "Age Verification Beta",
                        to: "ageverificationbeta",
                        icon: q.Uk,
                        condition: h.tags.includes("admin_age_verification_enabled") && (At || (null == h ? void 0 : h.myMember.userId) === h.ownerId)
                    }]
                })), I.createElement(C.Z5, null, I.createElement(C.AW, {
                    path: "/",
                    element: At || T({
                        groupMember: null == h ? void 0 : h.myMember,
                        permission: "group-data-manage"
                    }) ? I.createElement(I.Fragment, null, I.createElement(_.Z, null, I.createElement(j.Z, {
                        isOpen: nt,
                        className: (0, N.iv)({
                            name: "1ul0gzp",
                            styles: "max-width:1500px!important"
                        })
                    }, I.createElement(B.Z, null, I.createElement(Vt, {
                        isSelector: !0,
                        selectedCallback: function(e, t) {
                            ct(e), mt(t), rt(!1)
                        },
                        selectedId: null != it ? it : "",
                        activeTab: "photos"
                    })), I.createElement(J.Z, null, I.createElement(te.zx, {
                        onClick: function() {
                            rt(!1), Z((0, Y.b9)())
                        }
                    }, "Cancel"))), I.createElement(j.Z, {
                        isOpen: gt,
                        className: (0, N.iv)({
                            name: "1ul0gzp",
                            styles: "max-width:1500px!important"
                        })
                    }, I.createElement(B.Z, null, I.createElement(Vt, {
                        isSelector: !0,
                        selectedCallback: function(e, t) {
                            Ct(e), Mt(t), ft(!1)
                        },
                        selectedId: null != Ot ? Ot : "",
                        activeTab: "icons"
                    })), I.createElement(J.Z, null, I.createElement(te.zx, {
                        onClick: function() {
                            ft(!1), Z((0, Y.LC)())
                        }
                    }, "Cancel"))), I.createElement(D.Z, null, qt ? I.createElement(te.qX, {
                        type: "error",
                        title: "An error occurred",
                        message: (null == Ft || null === (u = Ft.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message) || "Something went wrong updating the group"
                    }) : null, I.createElement(te.oI, null, I.createElement("h4", {
                        className: "text-center"
                    }, "General")), I.createElement(te.Ao, null, I.createElement("div", null, I.createElement(_.Z, {
                        className: "mb-1"
                    }, I.createElement(D.Z, null, I.createElement($.Z, {
                        for: "name"
                    }, "Name")), I.createElement(D.Z, null, I.createElement(te.II, {
                        type: "text",
                        name: "name",
                        className: "full-width",
                        value: oe.name,
                        onChange: An
                    }))), I.createElement(_.Z, {
                        className: "mb-1"
                    }, I.createElement(D.Z, null, I.createElement($.Z, {
                        for: "shortCode"
                    }, "Short Code (3-6 letters/numbers)")), I.createElement(D.Z, null, I.createElement(te.II, {
                        type: "text",
                        name: "shortCode",
                        className: "full-width",
                        value: oe.shortCode,
                        maxLength: 6,
                        onChange: An
                    }))), I.createElement(_.Z, {
                        className: "mb-1"
                    }, I.createElement(D.Z, null, I.createElement($.Z, {
                        for: "description"
                    }, "Description")), I.createElement(D.Z, null, I.createElement(Yt, {
                        name: "description",
                        className: "full-width",
                        value: null !== (m = oe.description) && void 0 !== m ? m : "",
                        onChange: An
                    }))), I.createElement(_.Z, null, I.createElement(D.Z, null, I.createElement($.Z, {
                        for: "description"
                    }, "Rules")), I.createElement(D.Z, null, I.createElement(Yt, {
                        name: "rules",
                        className: "full-width",
                        value: null !== (d = oe.rules) && void 0 !== d ? d : "",
                        onChange: An
                    }))), I.createElement("div", null, !1, I.createElement(_.Z, {
                        className: "mt-2"
                    }, I.createElement(D.Z, null, I.createElement($.Z, {
                        for: "isJoinable"
                    }, "Open to New Members")), I.createElement(D.Z, null, I.createElement(te.Lt, {
                        onChange: function(e) {
                            ie($t($t({}, oe), {}, {
                                joinState: e
                            }))
                        },
                        value: null !== (p = oe.joinState) && void 0 !== p ? p : "",
                        name: "joinState",
                        options: Wt
                    }))), I.createElement("br", null), I.createElement(_.Z, {
                        className: "mt-2"
                    }, I.createElement(D.Z, null, I.createElement($.Z, {
                        for: "languages"
                    }, "Languages")), I.createElement(D.Z, null, ht.length >= 0 && I.createElement(te.Lt, {
                        onChange: function(e) {
                            qn(0, e)
                        },
                        value: null !== (g = null == ht ? void 0 : ht[0]) && void 0 !== g ? g : "none",
                        name: "languages",
                        options: ln,
                        className: "mb-1"
                    }), ht.length >= 1 && I.createElement(te.Lt, {
                        onChange: function(e) {
                            qn(1, e)
                        },
                        value: null !== (f = null == ht ? void 0 : ht[1]) && void 0 !== f ? f : "none",
                        name: "languages",
                        options: ln,
                        className: "mb-1"
                    }), ht.length >= 2 && I.createElement(te.Lt, {
                        onChange: function(e) {
                            qn(2, e)
                        },
                        value: null !== (E = null == ht ? void 0 : ht[2]) && void 0 !== E ? E : "none",
                        name: "languages",
                        options: ln,
                        className: "mb-1"
                    }))), I.createElement("br", null), I.createElement(_.Z, {
                        className: "mt-2"
                    }, I.createElement(D.Z, null, I.createElement($.Z, {
                        for: "links"
                    }, "Group Links")), I.createElement(D.Z, null, I.createElement(Xe, {
                        groupBioLinks: Zt,
                        callback: Un,
                        index: 0
                    }), I.createElement(Xe, {
                        groupBioLinks: Zt,
                        callback: Un,
                        index: 1
                    }), I.createElement(Xe, {
                        groupBioLinks: Zt,
                        callback: Un,
                        index: 2
                    }))), I.createElement("br", null), I.createElement(_.Z, null, I.createElement(D.Z, null), I.createElement(D.Z, null, it && I.createElement("div", null, I.createElement("span", null, "Replacing banner with: ", it), I.createElement("br", null), I.createElement(te.zx, {
                        onClick: function() {
                            ct(null), mt(null)
                        }
                    }, "Clear banner selection")), Ot && I.createElement("div", null, I.createElement("span", null, "Replacing icon with: ", Ot), I.createElement("br", null), I.createElement(te.zx, {
                        onClick: function() {
                            Mt(null), Ct(null)
                        }
                    }, "Clear icon selection")))), I.createElement("br", null), I.createElement(_.Z, null, I.createElement(D.Z, null), I.createElement(D.Z, null, zn && I.createElement(te.zx, {
                        color: "primary",
                        onClick: function() {
                            rt(!0)
                        }
                    }, "Update Group Banner"), " ", Fn && I.createElement(te.zx, {
                        color: "primary",
                        onClick: function() {
                            ft(!0)
                        }
                    }, "Update Group Icon")))), I.createElement(_.Z, {
                        className: "mt-4"
                    }, I.createElement(te.zx, {
                        neutral: !0,
                        onClick: Tn,
                        disabled: Gn,
                        loading: Gn
                    }, "Save")))))), Tt && !w && I.createElement(I.Fragment, null, I.createElement(ke, {
                        isOpen: fe,
                        group: h,
                        cancelCallback: function() {
                            return Ee(!1)
                        },
                        memberSelectCallback: function(e) {
                            ! function(e) {
                                Be(e), we(!0)
                            }(e)
                        },
                        isGroupMemberOnly: !0,
                        isSelecting: Ze
                    }), (null == _e ? void 0 : _e.user) && Re && I.createElement(qe, {
                        group: h,
                        validity: Se,
                        prospectiveNewOwner: _e,
                        onTransfer: function() {
                            return Rn()
                        },
                        onCancel: function() {
                            return Pe(!1)
                        },
                        isOpen: Re,
                        isTransferring: ze
                    }), I.createElement(je, {
                        group: h,
                        onButtonClick: function() {
                            return Ee(!0)
                        },
                        isLoading: Gn || !1
                    })), Tt && w && I.createElement(Ie, {
                        group: h,
                        onClickCallback: function() {
                            return Pn()
                        },
                        isDeleting: Qe || !1
                    }), Tt && I.createElement(I.Fragment, null, Jt ? I.createElement(te.qX, {
                        type: "error",
                        title: "Could not delete group",
                        message: (null == Qt || null === (v = Qt.data) || void 0 === v || null === (v = v.error) || void 0 === v ? void 0 : v.message) || "Something went wrong deleting the group"
                    }) : null, I.createElement(te.oI, {
                        className: "mt-2"
                    }, I.createElement("h4", {
                        className: "text-center"
                    }, "Delete Group")), I.createElement(te.Ao, null, I.createElement("p", null, "You can delete this group as long as it has no other members. This cannot be undone."), I.createElement(j.Z, {
                        isOpen: me
                    }, I.createElement(V.Z, {
                        close: I.createElement(ne.Z, {
                            onClick: function() {
                                de(!1)
                            }
                        })
                    }, I.createElement("h4", null, "Delete Group?")), I.createElement(B.Z, {
                        className: (0, N.iv)({
                            name: "1bpq7li",
                            styles: "padding:30px;padding-top:0"
                        })
                    }, Ve ? I.createElement("div", {
                        className: "full-width text-center"
                    }, I.createElement(re.Z, null)) : I.createElement("div", {
                        className: (0, N.iv)({
                            name: "pc0kie",
                            styles: ">*{margin-top:15px;}"
                        })
                    }, I.createElement(_.Z, null, I.createElement("span", {
                        className: "full-width text-center"
                    }, "Hey! This can't be undone! Only do this if you ", I.createElement("strong", null, "KNOW"), " what you're doing!")), I.createElement(_.Z, null, I.createElement(te.zx, {
                        onClick: Ln,
                        danger: !0,
                        className: "full-width"
                    }, "DELETE IT!")), I.createElement(_.Z, null, I.createElement(te.zx, {
                        className: "full-width",
                        onClick: function() {
                            de(!1)
                        }
                    }, "Get me outta here!"))))), I.createElement(D.Z, null, I.createElement(te.zx, {
                        danger: !0,
                        onClick: function() {
                            de(!0)
                        },
                        disabled: Gn,
                        loading: Gn
                    }, I.createElement(A.Z, {
                        icon: U.$
                    }), " Delete Group"))))) : I.createElement(bt, {
                        groupId: null == h ? void 0 : h.id
                    })
                }), I.createElement(C.AW, {
                    path: "/me",
                    element: null != h && h.myMember ? I.createElement(bt, {
                        groupId: null == h ? void 0 : h.id
                    }) : I.createElement(R.Z, {
                        to: ".."
                    })
                }), I.createElement(C.AW, {
                    path: "/roles/:roleId?/:newRoleType?",
                    element: At || T({
                        groupMember: null == h ? void 0 : h.myMember,
                        permission: "group-roles-manage"
                    }) ? I.createElement(Dt, {
                        group: h
                    }) : I.createElement(R.Z, {
                        to: ".."
                    })
                }), I.createElement(C.AW, {
                    path: "/logs",
                    element: At || T({
                        groupMember: null == h ? void 0 : h.myMember,
                        permission: "group-audit-view"
                    }) ? I.createElement(ot, {
                        group: h
                    }) : I.createElement(R.Z, {
                        to: ".."
                    })
                }), I.createElement(C.AW, {
                    path: "/ageverificationbeta",
                    element: h.tags.includes("admin_age_verification_enabled") && (At || (null == h ? void 0 : h.myMember.userId) === h.ownerId) ? I.createElement(_.Z, null, I.createElement(D.Z, null, I.createElement(te.oI, null, I.createElement("h4", {
                        className: "text-center"
                    }, "Age Verification Beta")), I.createElement(te.Ao, null, I.createElement(_.Z, {
                        className: "mb-1"
                    }, I.createElement(D.Z, null, I.createElement($.Z, null, "Beta Slots Remaining")), I.createElement(D.Z, null, h.ageVerificationBetaSlots)), I.createElement(_.Z, {
                        className: "mb-1"
                    }, I.createElement(D.Z, null, I.createElement($.Z, null, "Verification Link")), I.createElement(D.Z, null, I.createElement("a", {
                        href: "https://vrchat.com/home/group/".concat(h.id, "/ageverification/").concat(h.ageVerificationBetaCode)
                    }, "https://vrchat.com/home/group/", h.id, "/ageverification/", h.ageVerificationBetaCode)))))) : I.createElement(R.Z, {
                        to: ".."
                    })
                })))
            };
            var Yt = (0, a.Z)(te.gx, {
                    target: "e3uj5bu0"
                })({
                    name: "1vp1ylf",
                    styles: ">textarea{height:200px;}"
                }),
                Qt = n(50347);
            const Kt = function(e) {
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
                return I.createElement(en, null, I.createElement(Qt.Z, {
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
                }), I.createElement(tn, null, n && I.createElement("span", null, I.createElement(A.Z, {
                    icon: Ne.nm,
                    width: 25
                }), " "), I.createElement("h4", null, b)))
            };
            var en = (0, a.Z)("div", {
                    target: "e1ml2klq1"
                })({
                    name: "9flrez",
                    styles: "position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;>div:first-of-type{margin:0;border-bottom-right-radius:0;border-bottom-left-radius:0;}"
                }),
                tn = (0, a.Z)("div", {
                    target: "e1ml2klq0"
                })({
                    name: "7foox8",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:center;border:4px solid #252a30;background-color:#252a30;text-align:center;width:100%;border-bottom-right-radius:8px;border-bottom-left-radius:8px"
                }),
                nn = n(27003),
                rn = n(53359);

            function ln(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function an(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ln(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ln(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const on = function(e) {
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
                    S = (0, se.r5)({
                        groupId: s.groupId
                    }),
                    j = S.data,
                    M = S.isLoading,
                    R = S.isError,
                    L = S.error,
                    U = (0, se.xm)({
                        groupId: s.groupId,
                        userId: s.userId
                    }),
                    q = U.data,
                    z = U.isLoading,
                    F = U.isError,
                    G = U.error,
                    X = (0, se.uX)(),
                    D = (0, l.Z)(X, 2),
                    _ = D[0],
                    B = (D[1].isLoading, (0, se.dl)()),
                    J = (0, l.Z)(B, 2),
                    V = J[0],
                    W = (J[1].isLoading, (0, se.LA)()),
                    H = (0, l.Z)(W, 2),
                    Y = H[0],
                    Q = (H[1].isLoading, (0, se.FW)()),
                    K = (0, l.Z)(Q, 2),
                    ee = K[0],
                    ne = (K[1].isLoading, (0, se.l5)()),
                    re = (0, l.Z)(ne, 2),
                    le = re[0],
                    ae = (re[1].isLoading, (0, ce.pc)()),
                    oe = M || z,
                    ie = F || R;
                if (I.useEffect((function() {
                        m()
                    }), []), ie) return I.createElement(I.Fragment, null, I.createElement(te.oI, null, I.createElement("h4", null, "Managing Member")), I.createElement(te.Ao, null, I.createElement("div", null, I.createElement("div", {
                    className: "text-center mb-4"
                }, I.createElement(A.Z, {
                    icon: rn.faTriangleExclamation,
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
                        return t ? I.createElement(I.Fragment, null, I.createElement(mn, {
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
                        return I.createElement(mn, {
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
                return I.createElement(Xt.Z, {
                    loading: oe
                }, I.createElement(te.oI, null, I.createElement("h4", null, "Managing ", null == s || null === (n = s.user) || void 0 === n ? void 0 : n.displayName)), I.createElement(te.Ao, null, y && I.createElement("div", null, I.createElement("h4", {
                    className: "text-center mb-4"
                }, "Are you sure you want to kick ", null == q || null === (r = q.user) || void 0 === r ? void 0 : r.displayName, "?!?!"), I.createElement(te.X2, null, I.createElement(te.zx, {
                    warning: !0,
                    onClick: function() {
                        me(), Y({
                            groupId: q.groupId,
                            userId: q.userId,
                            fromPage: f
                        }), p()
                    },
                    expand: !0
                }, I.createElement(te.$1, {
                    icon: nn.uM
                }), " Get 'em outta here!"), " ", I.createElement(te.zx, {
                    neutral: !0,
                    onClick: me,
                    expand: !0
                }, "Cancel"))), h && I.createElement("div", null, I.createElement("h4", {
                    className: "text-center mb-4"
                }, "Are you sure you want to ban ", null == q || null === (a = q.user) || void 0 === a ? void 0 : a.displayName, "?!?!"), I.createElement(te.X2, null, I.createElement(te.zx, {
                    danger: !0,
                    onClick: function() {
                        ue(), V({
                            groupId: q.groupId,
                            userId: q.userId,
                            fromPage: f
                        }), p()
                    },
                    expand: !0
                }, I.createElement(te.$1, {
                    icon: i.JH
                }), " And stay out!"), " ", I.createElement(te.zx, {
                    neutral: !0,
                    onClick: ue,
                    expand: !0
                }, "Cancel"))), !(y || h) && I.createElement(I.Fragment, null, (pe || ae || fe) && I.createElement(cn, null, I.createElement(sn, null, I.createElement("h6", null, "Available Roles"), I.createElement(un, null, be)), I.createElement(dn, null, I.createElement("h6", null, "Assigned Roles"), I.createElement(pn, null, he))), I.createElement(te.X2, null, (de || ae) && I.createElement("div", {
                    className: "setting mb-2 flex-1"
                }, I.createElement($.Z, null, "Notes"), I.createElement(te.gx, {
                    name: "managerNotes",
                    className: "notes-input full-width",
                    value: Ee,
                    onChange: function(e) {
                        var t = e.target.name,
                            n = "checkbox" === e.target.getAttribute("type") ? e.target.checked : e.target.value;
                        C(an(an({}, O), {}, (0, P.Z)({}, t, n)))
                    }
                }))), I.createElement(te.X2, null, I.createElement(te.zx, {
                    expand: !0,
                    color: "primary",
                    onClick: function() {
                        ! function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = an(an({}, O), e);
                            Object.keys(t).length > 0 && _(an({
                                groupId: q.groupId,
                                userId: q.userId
                            }, t)), p()
                        }()
                    }
                }, I.createElement(te.$1, {
                    icon: dt.r6
                }), " Save"), " ", I.createElement(te.zx, {
                    expand: !0,
                    neutral: !0,
                    onClick: p
                }, "Close"), ((null == j ? void 0 : j.memberRank) < g && de || ae) && I.createElement(I.Fragment, null, " ", I.createElement(te.zx, {
                    expand: !0,
                    warning: !0,
                    onClick: me
                }, I.createElement(A.Z, {
                    icon: nn.uM
                }), "  Kick"), " ", (ge || ae) && I.createElement(te.zx, {
                    expand: !0,
                    danger: !0,
                    onClick: ue
                }, I.createElement(A.Z, {
                    icon: i.JH
                }), "  Ban"))))))
            };
            var cn = (0, a.Z)("div", {
                    target: "emzwbrv5"
                })({
                    name: "sh46e2",
                    styles: "display:flex;flex-direction:row;align-items:start;justify-content:space-around;margin-bottom:15px"
                }),
                sn = (0, a.Z)("div", {
                    target: "emzwbrv4"
                })({
                    name: "1fx61ax",
                    styles: "display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;margin-right:10px"
                }),
                un = (0, a.Z)("ul", {
                    target: "emzwbrv3"
                })({
                    name: "1uhpukn",
                    styles: "list-style-type:none;padding:0;margin:0;width:100%;max-height:200px;height:200px;overflow-y:auto;overflow-x:hidden;background:#0d0d10;border-radius:5px"
                }),
                mn = (0, a.Z)("li", {
                    target: "emzwbrv2"
                })("padding:8px;border-radius:4px;", (function(e) {
                    return !e.canInteract && "\n    background-color: #0d0d10;\n    opacity: 0.2;\n    "
                }), " &.not-a-role{background-color:unset;}&:hover{", (function(e) {
                    return e.canInteract && "\n        background-color: #282b31;\n        cursor: pointer;\n    "
                }), ";}"),
                dn = (0, a.Z)("div", {
                    target: "emzwbrv1"
                })({
                    name: "d50b5r",
                    styles: "display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;margin-left:10px"
                }),
                pn = (0, a.Z)("ul", {
                    target: "emzwbrv0"
                })({
                    name: "1uhpukn",
                    styles: "list-style-type:none;padding:0;margin:0;width:100%;max-height:200px;height:200px;overflow-y:auto;overflow-x:hidden;background:#0d0d10;border-radius:5px"
                }),
                gn = n(54610),
                fn = n(38653),
                En = function(e) {
                    var t = e.user,
                        n = void 0 === t ? null : t,
                        a = e.groupId,
                        o = (0, O.I0)(),
                        c = (0, I.useState)(!0),
                        s = (0, l.Z)(c, 2),
                        u = s[0],
                        m = s[1],
                        d = (0, se.Rx)(),
                        p = (0, l.Z)(d, 2),
                        g = p[0],
                        f = p[1].isLoading,
                        E = (0, se.dl)(),
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
                                            o((0, Q.d)({
                                                icon: y.f8,
                                                message: "".concat(n.displayName, " is banned!"),
                                                color: "success",
                                                timeout: 3e3
                                            })), m(!1), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), o((0, Q.d)({
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
                                            o((0, Q.d)({
                                                icon: y.f8,
                                                message: "".concat(n.displayName, " is un-banned!"),
                                                color: "success",
                                                timeout: 3e3
                                            })), m(!0), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), o((0, Q.d)({
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
                    return I.createElement(ie.Wm, {
                        className: "flex-row my-1"
                    }, I.createElement("div", {
                        className: "container-fluid p-0"
                    }, I.createElement(_.Z, null, I.createElement(D.Z, {
                        xs: 12,
                        sm: 2,
                        className: "pe-0"
                    }, I.createElement(S.rU, {
                        to: "/home/user/".concat(n.id),
                        title: n.displayName,
                        target: "_blank"
                    }, I.createElement(ie.D2, {
                        image: (null == n ? void 0 : n.iconUrl) || (null == n ? void 0 : n.thumbnailUrl) || (null == n ? void 0 : n.userIcon) || (null == n ? void 0 : n.currentAvatarThumbnailImageUrl)
                    }))), I.createElement(D.Z, null, I.createElement(gn.Z, {
                        className: "d-flex flex-row justify-content-between py-1"
                    }, I.createElement("div", {
                        className: "container p-0"
                    }, I.createElement(_.Z, null, I.createElement(D.Z, {
                        xs: 12,
                        sm: 7,
                        className: "p-1"
                    }, I.createElement(S.rU, {
                        to: "/home/user/".concat(n.id),
                        title: n.displayName,
                        target: "_blank"
                    }, I.createElement(ie.Hz, {
                        tag: "h5"
                    }, n.displayName)), I.createElement(fn.Z, {
                        className: "mb-2 text-muted text-truncate tw-capitalize",
                        tag: "h6"
                    }, n.status)), I.createElement(D.Z, null, I.createElement("div", {
                        className: "tw-flex tw-col tw-justify-end"
                    }, I.createElement("div", {
                        className: "tw-justify-end"
                    }, I.createElement(te.zx, {
                        onClick: u ? w : Z,
                        disabled: b || f,
                        loading: b || f,
                        className: "tw-w-fit tw-px-4"
                    }, I.createElement(te.$1, {
                        width: 20,
                        icon: i.JH
                    }), u ? " Ban" : " Unban")))))))))))
                };
            En.propTypes = {
                user: me().object,
                groupId: me().string.isRequired
            };
            const vn = En;
            var hn = n(7371),
                bn = n(73104),
                wn = function(e) {
                    var t = e.member,
                        n = void 0 === t ? null : t,
                        r = e.groupRoles,
                        l = e.memberEditCallback;
                    if (null === n) return null;
                    var a = n.user;
                    return I.createElement(ie.Wm, {
                        className: "flex-row my-1"
                    }, I.createElement("div", {
                        className: "container-fluid p-0"
                    }, I.createElement(_.Z, null, I.createElement(D.Z, {
                        xs: 12,
                        sm: 2,
                        className: "pe-0"
                    }, I.createElement(S.rU, {
                        to: "/home/user/".concat(a.id),
                        title: a.displayName,
                        target: "_blank"
                    }, I.createElement(ie.D2, {
                        image: a.iconUrl || a.thumbnailUrl
                    }))), I.createElement(D.Z, null, I.createElement(gn.Z, {
                        className: "d-flex flex-row justify-content-between py-1"
                    }, I.createElement("div", {
                        className: "container p-0"
                    }, I.createElement(_.Z, null, I.createElement(D.Z, {
                        xs: 12,
                        sm: 7,
                        className: "p-1"
                    }, I.createElement(S.rU, {
                        to: "/home/user/".concat(a.id),
                        title: a.displayName,
                        target: "_blank"
                    }, I.createElement(ie.Hz, {
                        tag: "h5"
                    }, a.displayName)), I.createElement(fn.Z, {
                        className: "mb-2 text-muted text-truncate",
                        tag: "h6"
                    }, "Joined ", pe()(n.joinedAt).fromNow()), I.createElement(bn.Z, {
                        className: "text-truncate text-secondary"
                    }, (0, he.wz)({
                        member: n,
                        groupRoles: r
                    }).join(", "))), I.createElement(D.Z, null, I.createElement(ie.$, null, I.createElement(te.zx, {
                        onClick: function() {
                            return l(n, (0, he.H)({
                                member: n,
                                groupRoles: r
                            }), null)
                        }
                    }, I.createElement(te.$1, {
                        width: 20,
                        icon: hn.Iw
                    })))))))))))
                };
            wn.propTypes = {
                member: me().object.isRequired,
                groupRoles: me().array.isRequired,
                memberEditCallback: me().func.isRequired
            };
            const xn = wn;
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
                    w = (0, ce.Nr)(g);
                (0, I.useEffect)((function() {
                    setTimeout((function() {
                        o && null != m && m.current && m.current.focus()
                    }), 300)
                }), [o, m]), (0, I.useEffect)((function() {
                    b(1)
                }), [g]), (0, I.useEffect)((function() {
                    f("")
                }), [o]);
                var x = (0, se.Vc)({
                        groupId: a
                    }, {
                        skip: !s
                    }),
                    y = x.data,
                    Z = x.isSuccess,
                    k = x.isError,
                    N = x.error,
                    O = (0, se.Pi)({
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
                    M = O.isFetching,
                    A = O.isSuccess,
                    T = (0, ee.hi)({
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
                return I.createElement(ie.Xv, {
                    role: "dialog",
                    isOpen: o,
                    toggle: i,
                    keyboard: !0,
                    autoFocus: !1
                }, I.createElement(ie.eb, {
                    tag: "h4",
                    close: I.createElement(ne.Z, {
                        onClick: i
                    }),
                    toggle: i
                }, s ? "Group Members Search" : "Users Search"), I.createElement(ie.vc, null, I.createElement(ie.T_, null, I.createElement(te.II, {
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
                }, "Something went wrong with the search, please try again later!", I.createElement("br", null), j && I.createElement("code", null, null == S || null === (t = S.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), k && I.createElement("code", null, null == N || null === (n = N.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), L && I.createElement("code", null, null == P || null === (r = P.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message)), M && I.createElement(ie.Um, null, I.createElement("div", {
                    className: "text-center m-5 text-secondary h-25"
                }, I.createElement(re.Z, null))), !A && !M && !j && s && I.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "Search for members in your group."), A && !M && Z && s && I.createElement(ie.Um, null, C.results.map((function(e) {
                    return I.createElement(xn, {
                        key: e.id,
                        member: e,
                        groupRoles: y,
                        memberEditCallback: u
                    })
                })), 0 === C.results.length && I.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "We couldn't find anything with that search.")), !q && !U && !L && !s && I.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "Search for users on VRChat."), q && I.createElement(ie.Um, null, R.results.map((function(e) {
                    return I.createElement(vn, {
                        key: e.id,
                        user: e,
                        groupId: a
                    })
                })), 0 === R.results.length && I.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "We couldn't find anything with that search.")), (A || q) && I.createElement(ie.Gz, null, I.createElement(ie.IT, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return b(h - 1)
                    },
                    disabled: 1 === h || M || U
                }, I.createElement(te.$1, {
                    icon: oe.A3
                })), I.createElement("span", null, h), I.createElement(ie.UV, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return b(h + 1)
                    },
                    disabled: (null == C ? void 0 : C.isLastPage) || (null == R ? void 0 : R.isLastPage) || M || U
                }, I.createElement(te.$1, {
                    icon: ae._t
                }))))))
            };
            yn.propTypes = {
                groupId: me().string,
                isOpen: me().bool.isRequired,
                cancelCallback: me().func.isRequired,
                memberEditCallback: me().func
            };
            const Zn = yn;

            function kn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Nn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? kn(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var In = [{
                label: "None",
                value: null
            }, {
                label: "Ascending",
                value: "joinedAt:asc"
            }, {
                label: "Descending",
                value: "joinedAt:desc"
            }];
            const On = function(e) {
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
                    M = (0, l.Z)(S, 2),
                    A = M[0],
                    R = M[1],
                    P = I.useState(null),
                    U = (0, l.Z)(P, 2),
                    q = U[0],
                    z = U[1],
                    F = (0, K.XC)().data,
                    G = (0, ce.pc)(),
                    X = (0, I.useState)([
                        [],
                        []
                    ]),
                    D = (0, l.Z)(X, 2),
                    _ = D[0],
                    B = D[1],
                    J = null == n ? void 0 : n.myMember,
                    $ = (0, I.useState)(0),
                    V = (0, l.Z)($, 2),
                    W = V[0],
                    H = V[1],
                    Y = (0, I.useState)(25),
                    Q = (0, l.Z)(Y, 1)[0],
                    ee = (0, se.Pv)(),
                    ne = (0, l.Z)(ee, 2),
                    re = ne[0],
                    le = ne[1],
                    ae = le.data,
                    oe = le.error,
                    ie = le.isLoading,
                    ue = (0, se.Vc)({
                        groupId: null == n ? void 0 : n.id
                    }),
                    me = ue.data,
                    de = ue.isFetching,
                    pe = (null == ae || null === (t = ae.members) || void 0 === t ? void 0 : t.length) < Q;
                I.useEffect((function() {
                    ge(Q, 0)
                }), []), I.useEffect((function() {
                    var e = (0, L.Z)(_);
                    if (ae) {
                        var t;
                        if (ae.page <= 0 && !C && null === A && null === q && null != n && n.myMember) e[0] = [Nn(Nn({}, J), {}, {
                            userId: F.id,
                            user: Nn(Nn({}, F), {}, {
                                thumbnailUrl: null !== (t = F.profilePicOverride) && void 0 !== t ? t : F.currentAvatarImageUrl
                            })
                        })].concat((0, L.Z)(ae.members));
                        else e[ae.page] = ae.members;
                        B(e)
                    }
                }), [ae]);
                I.useEffect((function() {}), [C]), I.useEffect((function() {
                    H(0), B([
                        [],
                        []
                    ]), ge(Q, 0)
                }), [A, q]);
                var ge = function(e, t) {
                        re({
                            groupId: n.id,
                            perPage: e,
                            page: t,
                            sort: A,
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
                if (de) return I.createElement(te.UU, {
                    height: "200px"
                });
                var we = null == _ ? void 0 : _.map((function(e, t) {
                        var r;
                        return null === (r = (0, L.Z)(e)) || void 0 === r || null === (r = r.sort((function(e) {
                            return null === A && null === q && e.userId === n.ownerId ? -1 : 0
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
                            return I.createElement(Kt, {
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
                return I.createElement(I.Fragment, null, I.createElement(te.oI, null, I.createElement("h4", {
                    className: "text-center font-weight-bolder"
                }, "Members ", !Ee && !he && "(Friends only)")), I.createElement(te.Ao, null, I.createElement("div", {
                    className: (0, N.iv)({
                        name: "8osrbx",
                        styles: "background-color:var(--dark);padding:0 20px 20px 20px"
                    })
                }, Ee && I.createElement(te.JX, null, I.createElement("h6", null, "Filters:"), I.createElement(te.X2, {
                    className: "flex-wrap"
                }, I.createElement(Cn, {
                    label: "Filter role",
                    onChange: z,
                    options: xe,
                    value: q,
                    className: "mb-2 mx-2"
                }), I.createElement(Cn, {
                    label: "Join order",
                    onChange: R,
                    options: In,
                    value: A,
                    className: "mb-2 mx-2"
                }))), I.createElement(j.Z, {
                    isOpen: o,
                    toggle: function() {
                        i(!1)
                    }
                }, I.createElement(on, {
                    groupMember: g,
                    memberRank: null != y ? y : 0,
                    closeCallback: function() {
                        i(!1)
                    },
                    memberListPage: h
                })), Ee && I.createElement("div", {
                    className: "p-2"
                }, I.createElement(te.zx, {
                    onClick: function() {
                        m(!0)
                    }
                }, I.createElement(te.$1, {
                    color: "white",
                    icon: Oe.faMagnifyingGlass
                }), "  Search Group Members")), I.createElement(Zn, {
                    isOpen: u,
                    groupId: n.id,
                    cancelCallback: function() {
                        return m(!1)
                    },
                    memberEditCallback: fe,
                    isGroupMemberOnly: !0
                }), ie ? I.createElement(te.UU, {
                    height: "200px"
                }) : I.createElement(Sn, null, we), I.createElement("div", {
                    className: "p-2",
                    style: {
                        margin: "20px auto 0",
                        textAlign: "center"
                    }
                }, I.createElement(te.zx, {
                    onClick: function() {
                        ge(Q, W)
                    },
                    disabled: ie || oe || pe,
                    loading: ie
                }, oe || pe ? "No more members..." : "List More Members")))))
            };
            var Cn = (0, a.Z)(te.Lt, {
                    target: "egqvjul1"
                })({
                    name: "1w9pskj",
                    styles: "width:300px;min-width:200px"
                }),
                Sn = (0, a.Z)("div", {
                    target: "egqvjul0"
                })({
                    name: "rmjg9v",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;>*{width:300px;margin-top:8px;}"
                });
            const jn = function(e) {
                var t, n, r = e.langs,
                    l = e.tags,
                    a = (0, H.y)().data,
                    o = null !== (t = null == a || null === (n = a.constants) || void 0 === n || null === (n = n.LANGUAGE) || void 0 === n ? void 0 : n.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== t ? t : W.O,
                    i = null != r ? r : l.filter((function(e) {
                        return e.startsWith("language")
                    })).map((function(e) {
                        var t = e.split("_")[1];
                        return {
                            abbreviation: t.toUpperCase(),
                            title: o[t]
                        }
                    }));
                return I.createElement(Pn, null, I.createElement(Ln, null, I.createElement(Mn, null, "Languages")), I.createElement(Un, null, i.length > 0 ? i.map((function(e) {
                    var t, n;
                    return I.createElement(Rn, {
                        key: e,
                        title: null !== (t = e.title) && void 0 !== t ? t : o[e]
                    }, null !== (n = e.abbreviation) && void 0 !== n ? n : e.toUpperCase())
                })) : I.createElement("h4", {
                    className: "align-self-center"
                }, "None added")))
            };
            var Mn = (0, a.Z)("h2", {
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
                Tn = (0, a.Z)("div", {
                    target: "e8rhb6u4"
                })({
                    name: "r0ww0u",
                    styles: "background-color:#181b1f;border:5px solid #252a30;min-width:100px;min-height:100px;width:100px;height:100px;border-radius:50%;margin:10px;display:flex;justify-content:center;align-items:center;transition:transform 0.1s ease-in"
                }),
                Rn = (0, a.Z)(Tn, {
                    target: "e8rhb6u3"
                })({
                    name: "77x4h6",
                    styles: "font-size:1.7rem;font-weight:bold;color:#54b5c5"
                }),
                Pn = (0, a.Z)(An, {
                    target: "e8rhb6u2"
                })({
                    name: "u5t5ke",
                    styles: "flex:1;min-width:350px;min-height:136px"
                }),
                Ln = (0, a.Z)(ie.JX, {
                    target: "e8rhb6u1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                Un = (0, a.Z)(Ln, {
                    target: "e8rhb6u0"
                })({
                    name: "18clcmv",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto"
                });
            const qn = function(e) {
                var t = e.links;
                return I.createElement(_n, null, I.createElement(Bn, null, I.createElement(zn, null, "Links")), I.createElement(Jn, null, t.length > 0 ? t.map((function(e) {
                    return I.createElement(Dn, {
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
            var zn = (0, a.Z)("h2", {
                    target: "e19ri8nl7"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                Fn = (0, a.Z)("div", {
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
                Xn = (0, a.Z)(Gn, {
                    target: "e19ri8nl4"
                })({
                    name: "jrwc5p",
                    styles: ":hover{transform:scale(1.1);cursor:pointer;}"
                }),
                Dn = (0, a.Z)(Xn, {
                    target: "e19ri8nl3"
                })(""),
                _n = (0, a.Z)(Fn, {
                    target: "e19ri8nl2"
                })({
                    name: "u5t5ke",
                    styles: "flex:1;min-width:350px;min-height:136px"
                }),
                Bn = (0, a.Z)(ie.JX, {
                    target: "e19ri8nl1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                Jn = (0, a.Z)(Bn, {
                    target: "e19ri8nl0"
                })({
                    name: "18clcmv",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto"
                }),
                $n = n(87261),
                Vn = n(88233);

            function Wn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Hn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Wn(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Yn = I.lazy((function() {
                return Promise.all([n.e(123), n.e(2150), n.e(4444), n.e(8890), n.e(9908), n.e(3294), n.e(9375), n.e(4814)]).then(n.bind(n, 59375))
            }));
            const Qn = function(e) {
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
                    M = I.useState(!1),
                    A = (0, l.Z)(M, 2),
                    R = A[0],
                    L = A[1],
                    U = I.useState({
                        name: i.name,
                        description: i.description,
                        membersOnly: i.membersOnly
                    }),
                    q = (0, l.Z)(U, 2),
                    z = q[0],
                    F = q[1],
                    G = I.useState(!1),
                    D = (0, l.Z)(G, 2),
                    _ = D[0],
                    V = D[1],
                    W = I.useState(15),
                    H = (0, l.Z)(W, 1)[0],
                    Q = I.useState(1),
                    K = (0, l.Z)(Q, 2),
                    ee = K[0],
                    ne = K[1],
                    re = I.useState(!0),
                    le = (0, l.Z)(re, 2),
                    ie = le[0],
                    ce = le[1],
                    ue = (0, se.d3)({
                        groupId: a.id,
                        galleryId: i.id,
                        n: H,
                        page: ee
                    }),
                    me = ue.data,
                    de = ue.isLoading,
                    pe = ue.isSuccess,
                    ge = (0, se.zv)(),
                    fe = (0, l.Z)(ge, 2),
                    Ee = fe[0],
                    ve = (fe[1].isLoading, (0, se.E8)()),
                    he = (0, l.Z)(ve, 2),
                    be = he[0],
                    we = (he[1].isLoading, (0, se.pI)()),
                    xe = (0, l.Z)(we, 2),
                    ye = xe[0],
                    Ze = xe[1],
                    ke = (Ze.isLoading, Ze.isSuccess),
                    Ne = (0, se.jP)(),
                    Ie = (0, l.Z)(Ne, 2),
                    Oe = Ie[0];
                Ie[1].isLoading;
                I.useEffect((function() {
                    document.getElementById(i.id) && s && !_ && (document.getElementById(i.id).scrollIntoView({
                        behavior: "smooth"
                    }), V(!0))
                })), I.useEffect((function() {
                    ke && L(!1)
                }), [ke]), I.useEffect((function() {
                    pe && ce((null == me ? void 0 : me.totalCount) >= 100)
                }), [pe]);
                var Ce = function(e) {
                    var t = "checkbox" === e.target.getAttribute("type") ? !e.target.checked : e.target.value;
                    F(Hn(Hn({}, z), {}, (0, P.Z)({}, e.target.name, t)))
                };
                if (de) return I.createElement(te.UU, {
                    className: "mt-3",
                    width: "100%",
                    height: "300px"
                });
                var Se = T({
                        groupMember: null == a ? void 0 : a.myMember,
                        permission: "group-galleries-manage"
                    }),
                    je = me.totalCount,
                    Me = (ee - 1) * H,
                    Ae = I.createElement(tr, null, I.createElement(nr, {
                        className: "d-flex flex-row align-items-center justify-content-center",
                        onClick: function() {
                            return ne(ee - 1)
                        },
                        disabled: 0 === Me
                    }, I.createElement(te.$1, {
                        icon: oe.A3
                    })), I.createElement("span", null, ee, " / ", Math.ceil(je / H), " ", I.createElement("small", null, je > 0 && "(".concat(je, "/").concat(100, ")"))), I.createElement(rr, {
                        className: "d-flex flex-row align-items-center justify-content-center",
                        onClick: function() {
                            return ne(ee + 1)
                        },
                        disabled: Me + H >= je
                    }, I.createElement(te.$1, {
                        icon: ae._t
                    })));
                return I.createElement("div", {
                    className: "my-2",
                    id: i.id
                }, I.createElement(Vn.Z, {
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
                }, I.createElement(B.Z, null, I.createElement(Yn, {
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
                })), I.createElement(J.Z, null, I.createElement(te.zx, {
                    onClick: function() {
                        f(!1), u((0, Y.b9)())
                    }
                }, "Cancel"))), I.createElement(te.oI, null, I.createElement("h4", null, i.name), I.createElement("span", null, i.description)), I.createElement(te.Ao, null, 0 !== je && Ae, R ? I.createElement(te.JX, {
                    className: "w-100"
                }, I.createElement($.Z, null, "Gallery name", I.createElement(te.II, {
                    value: z.name,
                    name: "name",
                    onChange: Ce,
                    disabled: m,
                    maxLength: 64
                })), " ", I.createElement($.Z, null, "Gallery description", I.createElement(te.II, {
                    value: z.description,
                    name: "description",
                    onChange: Ce,
                    disabled: m,
                    maxLength: 512
                })), " ", I.createElement(te.X2, null, I.createElement($.Z, null, "Is this gallery public?", " ", I.createElement($n.Z, {
                    type: "checkbox",
                    name: "membersOnly",
                    checked: !z.membersOnly,
                    onChange: Ce,
                    disabled: m
                }))), I.createElement(te.X2, null, I.createElement(te.zx, {
                    expand: !0,
                    onClick: function() {
                        ye({
                            groupId: a.id,
                            galleryId: i.id,
                            data: Hn({}, z)
                        })
                    },
                    disabled: m
                }, "Update"), " ", I.createElement(te.zx, {
                    expand: !0,
                    neutral: !0,
                    disabled: m,
                    onClick: function() {
                        L(!1)
                    }
                }, "Cancel"), " ", I.createElement(te.zx, {
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
                }, "Delete"))) : I.createElement(I.Fragment, null, I.createElement(Kn, null, (null === (r = me.results) || void 0 === r ? void 0 : r.length) > 0 ? me.results.map((function(e, t) {
                    return I.createElement(Qt.Z, {
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
                }, "There are no pictures here... yet!")), Se && I.createElement(er, null, I.createElement(te.zx, {
                    className: "m-2",
                    disabled: ie,
                    onClick: function() {
                        f(!0)
                    }
                }, ie ? "Gallery is full" : I.createElement(I.Fragment, null, I.createElement(te.$1, {
                    icon: o.r8
                }), " Post an Image")), I.createElement(te.zx, {
                    neutral: !0,
                    onClick: function() {
                        L(!0)
                    }
                }, I.createElement(te.$1, {
                    icon: X.Kb
                }), " Manage Gallery")))))
            };
            var Kn = (0, a.Z)("div", {
                    target: "e5pi12i4"
                })({
                    name: "1kra7du",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;align-items:center;margin:10px 0;width:100%"
                }),
                er = (0, a.Z)("div", {
                    target: "e5pi12i3"
                })({
                    name: "198unna",
                    styles: "display:flex;flex-direction:row;justify-content:left;align-items:center;width:100%"
                }),
                tr = (0, a.Z)("div", {
                    target: "e5pi12i2"
                })({
                    name: "1vtota4",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-bottom:8px"
                }),
                nr = (0, a.Z)(te.zx, {
                    target: "e5pi12i1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                rr = (0, a.Z)(te.zx, {
                    target: "e5pi12i0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                });

            function lr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ar(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? lr(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const or = function(e) {
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
                    g = (0, se.Eg)(),
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
                        s(ar(ar({}, c), {}, (0, P.Z)({}, e.target.name, t)))
                    },
                    N = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        E(ar({
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
                }) && (O = d ? I.createElement(I.Fragment, null, I.createElement(te.oI, null, I.createElement("h4", null, "Create Gallery")), I.createElement(te.Ao, null, I.createElement($.Z, null, "Gallery name", I.createElement(te.II, {
                    value: c.name,
                    name: "name",
                    onChange: Z,
                    disabled: b,
                    maxLength: 64
                })), " ", I.createElement($.Z, null, "Gallery description", I.createElement(te.II, {
                    value: c.description,
                    name: "description",
                    onChange: Z,
                    disabled: b,
                    maxLength: 512
                })), " ", I.createElement(te.X2, null, I.createElement($.Z, null, "Is this gallery public?", " ", I.createElement($n.Z, {
                    type: "checkbox",
                    name: "membersOnly",
                    checked: !c.membersOnly,
                    onChange: Z,
                    disabled: b
                }))), I.createElement(te.X2, null, I.createElement(te.zx, {
                    expand: !0,
                    onClick: N,
                    disabled: b,
                    loading: b
                }, "Create"), " ", I.createElement(te.zx, {
                    expand: !0,
                    neutral: !0,
                    onClick: function() {
                        p(!1)
                    },
                    disabled: b
                }, "Cancel")))) : I.createElement(te.zx, {
                    onClick: function() {
                        p(!0)
                    },
                    disabled: b,
                    loading: b
                }, I.createElement(te.$1, {
                    icon: o.r8
                }), " Create Gallery")), I.createElement("div", null, x && I.createElement(te.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == y || null === (t = y.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred while creating the gallery."), O, n.galleries.length > 0 ? n.galleries.map((function(e) {
                    return (e.membersOnly && (null == n ? void 0 : n.myMember) || !e.membersOnly) && I.createElement(Qn, {
                        key: e.id,
                        group: n,
                        gallery: e,
                        justAdded: w && (null == h ? void 0 : h.id) === e.id
                    })
                })) : I.createElement(ir, null, "There aren't any galleries here!"))
            };
            var ir = (0, a.Z)(te.oI, {
                    target: "e7nydss0"
                })({
                    name: "es1q9a",
                    styles: "border-radius:6px;text-align:center;font-size:1.2rem;font-weight:bold;justify-content:center;align-items:center;padding:3rem 1rem;margin-top:0.5rem"
                }),
                cr = n(59923),
                sr = n(9186);

            function ur(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function mr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ur(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ur(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const dr = function(e) {
                var t = e.group,
                    n = (0, sr.Z)().sortedLocations,
                    r = (0, se.w$)({
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
                            return t.includes(e.instanceId) ? mr(mr({}, e), {}, {
                                users: n.find((function(t) {
                                    return t.instanceId === e.instanceId
                                })).users
                            }) : mr(mr({}, e), {}, {
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
                        return I.createElement(cr.Z, {
                            key: "location-".concat(e.location),
                            className: "mb-4",
                            location: e,
                            isForGroup: !0,
                            currentGroup: t
                        })
                    }))
                }), [s]);
                return o ? I.createElement(te.UU, {
                    width: "100%",
                    height: "200px"
                }) : I.createElement(I.Fragment, null, I.createElement(te.oI, null, I.createElement("h4", {
                    className: "text-center"
                }, "Instances")), I.createElement(te.Ao, null, null != m && m.length ? m : I.createElement("p", {
                    className: "text-center"
                }, "Nothing to see here!")))
            };
            var pr = n(73670),
                gr = n(47716);
            const fr = function(e) {
                var t = e.group,
                    n = e.user,
                    r = e.errorCallback,
                    a = void 0 === r ? function() {} : r,
                    o = e.mode,
                    i = void 0 === o ? "invite" : o,
                    c = (0, se.vb)(),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = m.isLoading,
                    p = m.isSuccess,
                    g = m.isError,
                    f = m.error,
                    E = (0, se.dl)(),
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
                }, I.createElement(gr.Z, {
                    className: "mb-0",
                    userId: n.id,
                    openLinksInNewTab: !0
                }), "invite" === i && I.createElement(te.zx, {
                    disabled: p || N,
                    loading: N,
                    onClick: function() {
                        return u({
                            groupId: t.id,
                            userId: n.id
                        })
                    },
                    color: p ? "success" : void 0
                }, p && I.createElement(te.$1, {
                    icon: w.LE,
                    className: "mx-2"
                }), "Invite", p && "d", " ", n.displayName), "ban" === i && I.createElement(te.zx, {
                    disabled: y || N,
                    loading: N,
                    onClick: function() {
                        return h({
                            groupId: t.id,
                            userId: n.id
                        })
                    },
                    color: y ? "success" : void 0
                }, y && I.createElement(te.$1, {
                    icon: w.LE,
                    className: "mx-2"
                }), "ban", y && "ned", " ", n.displayName))
            };
            var Er = n(25411),
                vr = n(12227);
            const hr = function(e) {
                var t = e.group,
                    n = e.mode,
                    r = void 0 === n ? "invite" : n,
                    a = (0, O.I0)(),
                    o = (0, ce.pc)(),
                    i = I.useState(""),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, ce.Nr)(s),
                    d = (0, O.v9)((function(e) {
                        return e.search
                    })).userResults,
                    p = I.useState(""),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = o && !1;
                I.useEffect((function() {
                    E(""), "" !== m && a((0, Er.pz)({
                        searchTerm: m,
                        n: vr.En,
                        isInternalVariant: v
                    }))
                }), [m]);
                var h = function(e) {
                    e && E(e.data.error.message)
                };
                return I.createElement(I.Fragment, null, I.createElement(pr.Z, {
                    searchString: u,
                    placeholder: "Search users..."
                }), f && I.createElement(te.qX, {
                    type: "error",
                    title: "Error",
                    className: "px-4",
                    message: f
                }), d.map((function(e) {
                    return I.createElement(fr, {
                        mode: r,
                        key: e.id,
                        group: t,
                        user: e,
                        errorCallback: h
                    })
                })))
            };
            var br = n(37599),
                wr = n(61509);
            const xr = function(e) {
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
                    N = (0, se.Sp)({
                        groupId: m.id
                    }),
                    S = N.data,
                    M = N.isError,
                    A = N.isLoading,
                    R = (0, se.dZ)({
                        groupId: m.id
                    }),
                    P = R.data,
                    L = R.isError,
                    U = R.error,
                    q = R.isLoading,
                    z = (0, se.dZ)({
                        groupId: m.id,
                        blocked: !0
                    }),
                    F = z.data,
                    G = z.isError,
                    X = z.error,
                    D = (z.isFetching, (0, se.dt)()),
                    _ = (0, l.Z)(D, 2),
                    J = _[0],
                    $ = _[1],
                    W = ($.isLoading, $.isError, $.error, (0, se.MQ)()),
                    H = (0, l.Z)(W, 2),
                    Y = H[0],
                    Q = H[1],
                    K = (Q.isLoading, Q.isError, Q.error, (0, se.M7)()),
                    ee = (0, l.Z)(K, 2),
                    re = ee[0],
                    le = ee[1],
                    ae = (le.isLoading, le.isError),
                    oe = le.error,
                    ie = (0, se.tN)(),
                    ue = (0, l.Z)(ie, 2),
                    me = ue[0],
                    de = ue[1],
                    pe = (de.isLoading, de.isSuccess),
                    ge = de.isError,
                    fe = de.error,
                    Ee = (0, se.QA)(),
                    ve = (0, l.Z)(Ee, 2),
                    he = ve[0],
                    be = ve[1],
                    we = (be.isLoading, be.isError),
                    xe = be.error,
                    ye = (0, se.XK)(),
                    Ze = (0, l.Z)(ye, 2),
                    ke = Ze[0],
                    Ne = Ze[1],
                    Ie = (Ne.isLoading, Ne.isError),
                    Oe = Ne.error;
                (0, C.s0)(), (0, ce.pc)();
                I.useEffect((function() {
                    pe && d(wr.S.util.updateQueryData("getGroupById", {
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
                }, I.createElement(te.oI, null, I.createElement("h4", {
                    className: "text-center text-break"
                }, "Ban ", null == Z ? void 0 : Z.displayName, "?!?!")), I.createElement(te.Ao, null, I.createElement("div", null, I.createElement(te.X2, null, I.createElement(te.zx, {
                    danger: !0,
                    onClick: function() {
                        var e;
                        e = null == Z ? void 0 : Z.id, he({
                            groupId: m.id,
                            userId: e
                        }), Ce()
                    },
                    expand: !0
                }, I.createElement(te.$1, {
                    icon: i.JH
                }), " And stay out!"), " ", I.createElement(te.zx, {
                    neutral: !0,
                    onClick: Ce,
                    expand: !0
                }, "Cancel"))))), I.createElement(j.Z, {
                    isOpen: f
                }, I.createElement(V.Z, {
                    close: I.createElement(ne.Z, {
                        onClick: function() {
                            E(!1)
                        }
                    })
                }, I.createElement("h4", {
                    className: "m-0"
                }, "Invite Somebody")), I.createElement(B.Z, null, I.createElement(hr, {
                    group: m,
                    mode: "invite"
                }))), I.createElement(te.zx, {
                    className: "mb-2",
                    color: "primary",
                    onClick: function() {
                        E(!0)
                    }
                }, "Invite Somebody"), I.createElement(br.Z, {
                    title: "Join Requests",
                    collapseOpen: !0
                }, we && I.createElement(te.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == xe || null === (t = xe.data) || void 0 === t ? void 0 : t.error.message) || "There was an error banning the user."), L && I.createElement(te.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == U || null === (n = U.data) || void 0 === n ? void 0 : n.error.message) || "There was an error loading the join requests."), ae && I.createElement(te.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == oe || null === (r = oe.data) || void 0 === r ? void 0 : r.error.message) || "There was an error rejecting the join request."), ge && I.createElement(te.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == fe || null === (a = fe.data) || void 0 === a ? void 0 : a.error.message) || "There was an error accepting the join request."), I.createElement(te.oI, null, I.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Applicants")), I.createElement(te.Ao, {
                    className: "mb-2"
                }, q ? I.createElement(te.UU, {
                    width: "100%",
                    height: "75px"
                }) : I.createElement(yr, null, 0 === (null == P ? void 0 : P.length) ? I.createElement("p", {
                    className: "m-0"
                }, "Nobody is waiting to join!") : null, null == P ? void 0 : P.map((function(e) {
                    return I.createElement("div", {
                        className: "mb-2"
                    }, I.createElement(Kt, {
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
                            J({
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
                }))))), I.createElement(br.Z, {
                    title: "Sent Invites"
                }, M && I.createElement(te.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == U || null === (o = U.data) || void 0 === o ? void 0 : o.error.message) || "There was an error loading the invites."), Ie && I.createElement(te.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == Oe || null === (c = Oe.data) || void 0 === c ? void 0 : c.error.message) || "There was an error deleting the invite."), I.createElement(te.oI, null, I.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Invites")), I.createElement(te.Ao, {
                    className: "mb-2"
                }, A ? I.createElement(te.UU, {
                    width: "100%",
                    height: "75px"
                }) : I.createElement(yr, null, 0 === (null == S ? void 0 : S.length) ? I.createElement("p", {
                    className: "m-0"
                }, "Nobody has been invited to this group!") : null, null == S ? void 0 : S.map((function(e) {
                    return I.createElement("div", {
                        className: "mb-2"
                    }, I.createElement(Kt, {
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
                }))))), I.createElement(br.Z, {
                    title: "Blocked Requests"
                }, G && I.createElement(te.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == X || null === (s = X.data) || void 0 === s ? void 0 : s.error.message) || "There was an error loading the invites."), Ie && I.createElement(te.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == Oe || null === (u = Oe.data) || void 0 === u ? void 0 : u.error.message) || "There was an error deleting the invite."), I.createElement(te.oI, null, I.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Blocked Applicants")), I.createElement(te.Ao, {
                    className: "mb-2"
                }, A ? I.createElement(te.UU, {
                    width: "100%",
                    height: "75px"
                }) : I.createElement(yr, null, 0 === (null == F ? void 0 : F.length) ? I.createElement("p", {
                    className: "m-0"
                }, "Nobody has been blocked from joining the group!") : null, null == F ? void 0 : F.map((function(e) {
                    return I.createElement("div", {
                        className: "mb-2"
                    }, I.createElement(Kt, {
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
                Zr = n(87462),
                kr = n(19933),
                Nr = n(66736),
                Ir = n(6655),
                Or = n(73647),
                Cr = n(68791),
                Sr = n(40067),
                jr = n(7701),
                Mr = n(50352),
                Ar = n(77708);
            const Tr = function(e) {
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
                    f = (0, K.XC)(),
                    E = f.data,
                    v = f.isLoading,
                    h = I.useState(!0),
                    b = (0, l.Z)(h, 2),
                    w = (b[0], b[1], (0, Nr.mb)({
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
                    N = (0, Nr.CE)({
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
                    M = N.isError,
                    A = N.error,
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
                    R = (0, Ir.En)(),
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
                    _ = (0, Ir.v$)({
                        userId: E.id
                    }, {
                        skip: !E || !U,
                        refetchOnMountOrArgChange: !0
                    }),
                    B = _.data,
                    J = _.isLoading,
                    $ = _.isError,
                    V = _.error,
                    W = (0, Ir.pp)({
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
                    ee = W.isError,
                    ne = (0, Ir.gI)(),
                    re = (0, l.Z)(ne, 2),
                    ae = (re[0], re[1], null == B ? void 0 : B.signed_tos),
                    oe = I.useCallback((function(e) {
                        var t = e.currentUserId,
                            n = e.listingId,
                            r = e.listing,
                            l = e.purchase;
                        u((0, Or.zy)({
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
                        u(e ? (0, Or.DF)({
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
                        }) : (0, Or.Li)({
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
                if (v || j || y || G || J || Q) return I.createElement(te.UU, {
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
                    ge = (0, he.dj)(q);
                return I.createElement(I.Fragment, null, U && I.createElement(kr.Z, {
                    isTiliaTOSAccepted: ae,
                    returnPath: "/home/group/".concat(s.id, "/store"),
                    termsOfServiceMessage: "Tilia's Terms of Service have been changed. Please accept them before supporting ".concat(s.name, ".")
                }), I.createElement(te.oI, {
                    className: "flex-row justify-content-center align-items-center"
                }, I.createElement("h4", {
                    className: "text-center flex-grow-1"
                }, "Store")), I.createElement(te.Ao, null, X && I.createElement(te.qX, {
                    type: "error",
                    title: "Something strange happened"
                }, I.createElement("p", {
                    className: "m-0"
                }, "Error getting Tilia online status: ", D.status, " ", null !== (n = null === (r = D.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : "Unknown error")), !U && !X && I.createElement(te.qX, {
                    type: "warn",
                    title: "Store Maintenance"
                }, I.createElement(I.Fragment, null, I.createElement("p", {
                    className: "m-0"
                }, "Store Currently Offline: ", null != F ? F : "Unknown Reason"), I.createElement("p", {
                    className: "m-0"
                }, "Projected Service Return: ", (0, he.M4)(z)))), $ && U && I.createElement(te.qX, {
                    type: "error",
                    title: "Something strange happened"
                }, "Error looking up Tilia ToS acceptance: ", V.status, " ", null !== (a = null === (o = V.data) || void 0 === o ? void 0 : o.error.message) && void 0 !== a ? a : "Unknown error"), M && I.createElement(te.qX, {
                    type: "error",
                    title: "Error loading purchases"
                }, null == A || null === (i = A.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message), Z && I.createElement(te.qX, {
                    type: "error",
                    title: "Error loading listings"
                }, null == k || null === (c = k.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message), ge && U && I.createElement(te.qX, {
                    type: "warn",
                    title: "Store Maintenance"
                }, I.createElement("p", {
                    className: "m-0"
                }, "Starts: ", (0, he.M4)(q)), I.createElement("p", {
                    className: "m-0"
                }, "Ends: ", (0, he.M4)(z))), I.createElement(le.Z, {
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
                    return I.createElement(Cr.Z, (0, Zr.Z)({
                        key: e.listing.id
                    }, e, {
                        group: s,
                        tiliaTokenBalance: !ee && Y,
                        tiliaTosAccepted: ae,
                        index: t,
                        economyOnline: U,
                        onCancel: oe,
                        onPurchase: ie
                    }))
                })) : I.createElement("p", null, ue ? "You have no current subscriptions to this group!" : "There are no subscription options here!"), m.isOpen && I.createElement(Sr.Z, null), d.isOpen && I.createElement(Ar.Z, null), p.isOpen && I.createElement(jr.Z, {
                    groupData: s
                }), g.isOpen && I.createElement(Mr.Z, null)))
            };
            var Rr = n(28764),
                Pr = n(96427),
                Lr = n(42137),
                Ur = n(9230);
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
                    M = (0, I.useMemo)((function() {
                        if (!E && j > 3) {
                            var e = [];
                            return (0, L.Z)(Z).forEach((function(t, n) {
                                "\n" !== t && "\r" !== t || e.push(n)
                            })), "".concat(Z.substring(0, e[3]), "... ")
                        }
                        return !E && Z.length > 400 ? "".concat(Z.substring(0, 400), "... ") : Z
                    }), [E, Z]),
                    A = (0, I.useMemo)((function() {
                        return !E && (Z.length > 400 || j > 3)
                    }), [E, Z]);
                return I.createElement("div", {
                    className: "d-flex align-items-center"
                }, I.createElement(Fr, {
                    isExpanded: E,
                    ref: i,
                    className: "container-fluid p-0"
                }, I.createElement("div", {
                    className: "row"
                }, I.createElement("div", {
                    className: "col-12 d-flex align-items-center d-sm-none"
                }, I.createElement(Vr, {
                    src: w
                })), I.createElement("div", {
                    className: "".concat(C ? " col-sm-6 col-md-6 col-lg-7 col-xl-7 col-12" : "col-12")
                }, I.createElement(Gr, null, I.createElement(Dr, null, x), function() {
                    if (0 === N.length) return I.createElement(_r, null, I.createElement("div", null, I.createElement(te.$1, {
                        icon: Lr.SZ
                    }), " ", (0, he.h4)(h), I.createElement(te.$1, {
                        className: "ms-2",
                        icon: Ur.iO
                    }), " ", "public" === O ? "Public" : "Group"));
                    var e = (0, L.Z)(N).sort((function(e, t) {
                        return S.includes(t) ? 1 : -1
                    }));
                    return I.createElement(_r, null, I.createElement("div", null, I.createElement(te.$1, {
                        icon: Lr.SZ
                    }), " ", (0, he.h4)(h)), I.createElement(Jr, null, I.createElement(te.$1, {
                        icon: Pr.Aq
                    }), " Only Seen By", " ", e.map((function(e) {
                        var t = p.find((function(t) {
                                return t.id === e
                            })),
                            n = !(null == t || !t.productId);
                        return t ? I.createElement(Br, {
                            id: t.id,
                            hasRole: S.includes(t.id)
                        }, n ? I.createElement(I.Fragment, null, I.createElement(te.$1, {
                            icon: Rr.n7,
                            className: "me-1"
                        }), t.name) : t.name) : null
                    }))))
                }(), I.createElement(Xr, {
                    hasImage: C,
                    isExpanded: E
                }, M, I.createElement($r, {
                    showReadMore: A,
                    onClick: function() {
                        return v(!0)
                    }
                }, "Read More")))), C && I.createElement("div", {
                    className: "col-12 col-sm-6 col-md-6 col-lg-5 col-xl-5 d-none d-sm-flex align-items-center"
                }, I.createElement(Vr, {
                    src: w
                })))), s && I.createElement("div", {
                    className: "ps-5 pe-4"
                }, I.createElement(zr, {
                    color: "danger",
                    onClick: function() {
                        return m(n)
                    }
                }, I.createElement(te.$1, {
                    icon: U.$
                }))))
            };
            var zr = (0, a.Z)(ze.Z, {
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
                Gr = (0, a.Z)("div", {
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
                Dr = (0, a.Z)("h4", {
                    target: "ewr2sfy5"
                })({
                    name: "1ji90xs",
                    styles: "text-align:start;color:#fff;word-break:normal;font-size:20px"
                }),
                _r = (0, a.Z)("h4", {
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
                Vr = (0, a.Z)("img", {
                    target: "ewr2sfy0"
                })({
                    name: "k8r326",
                    styles: "max-height:25vh;margin:0 auto"
                });
            var Wr = function(e) {
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
                return I.createElement(Yr, null, I.createElement("h6", null, "Management Roles"), I.createElement("div", {
                    className: "d-flex flex-wrap"
                }, a.map((function(e) {
                    return I.createElement(te.vc, {
                        id: e.id,
                        label: i(e) ? I.createElement(I.Fragment, null, I.createElement(te.$1, {
                            icon: Rr.n7,
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
                    return I.createElement(te.vc, {
                        id: e.id,
                        label: i(e) ? I.createElement(I.Fragment, null, I.createElement(te.$1, {
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
            Wr.propTypes = {
                group: me().object.isRequired,
                onChange: me().func.isRequired,
                selectedRoles: me().array.isRequired
            };
            const Hr = Wr;
            var Yr = (0, a.Z)("div", {
                target: "e1qh7s420"
            })({
                name: "kq62ql",
                styles: "background-color:#000000;border-radius:5px;padding:16px 20px"
            });
            var Qr = I.lazy((function() {
                    return Promise.all([n.e(123), n.e(2150), n.e(4444), n.e(8890), n.e(9908), n.e(3294), n.e(9375), n.e(4814)]).then(n.bind(n, 59375))
                })),
                Kr = (0, a.Z)(te.gx, {
                    target: "e37d6q30"
                })({
                    name: "tz9wht",
                    styles: ">textarea{min-height:250px;}"
                });
            const el = function(e) {
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
                    M = (0, l.Z)(S, 2),
                    A = M[0],
                    T = M[1],
                    R = I.useState(!1),
                    P = (0, l.Z)(R, 2),
                    U = P[0],
                    q = P[1],
                    z = I.useState(""),
                    F = (0, l.Z)(z, 2),
                    G = F[0],
                    X = F[1],
                    D = (0, K.q7)().data,
                    _ = void 0 === D ? [] : D,
                    V = (0, se.t$)(),
                    W = (0, l.Z)(V, 2),
                    H = W[0],
                    Q = W[1].isLoading;
                (0, I.useEffect)((function() {
                    "selectedRoles" !== f && w([])
                }), [f]);
                var ee = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var n;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(n = H({
                                                groupId: t.id,
                                                title: m,
                                                text: i,
                                                imageId: Z,
                                                sendNotification: A,
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
                    re = _.includes("permission-user-gallery"),
                    le = [{
                        label: I.createElement(te.X2, {
                            className: "d-flex flex-column"
                        }, I.createElement($.Z, {
                            className: "mb-0"
                        }, "Public"), I.createElement("small", null, "Non-Group members can view this post")),
                        selectedLabel: "Public",
                        value: "public"
                    }, {
                        label: I.createElement(te.X2, {
                            className: "d-flex flex-column"
                        }, I.createElement($.Z, {
                            className: "mb-0"
                        }, "All Group Members"), I.createElement("small", null, "All group members can view this post")),
                        selectedLabel: "Group",
                        value: "group"
                    }, {
                        label: I.createElement(te.X2, {
                            className: "d-flex flex-column"
                        }, I.createElement($.Z, {
                            className: "mb-0"
                        }, "Selected Roles"), I.createElement("small", null, "Select the group roles who can view this post")),
                        selectedLabel: "Selected Roles",
                        value: "selectedRoles"
                    }];
                return I.createElement(te.JX, {
                    className: "w-100"
                }, I.createElement(j.Z, {
                    isOpen: U,
                    className: (0, N.iv)({
                        name: "1ul0gzp",
                        styles: "max-width:1500px!important"
                    })
                }, I.createElement(B.Z, null, I.createElement(Qr, {
                    isSelector: !0,
                    activeTab: "photos",
                    selectedCallback: function(e, t) {
                        C(e), X(t), q(!1)
                    },
                    selectedId: null != Z ? Z : null
                })), I.createElement(J.Z, null, I.createElement(te.zx, {
                    onClick: function() {
                        q(!1), n((0, Y.b9)())
                    }
                }, "Cancel"))), I.createElement("div", {
                    className: "mb-3"
                }, I.createElement($.Z, null, "Post title"), I.createElement(te.II, {
                    type: "text",
                    value: m,
                    onChange: function(e) {
                        return d(e.target.value)
                    },
                    maxLength: 128
                })), I.createElement("div", {
                    className: "mb-3"
                }, I.createElement($.Z, null, "Post message"), I.createElement(Kr, {
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
                }, I.createElement(ft.Z, {
                    label: "Send notification",
                    value: "sendNotification",
                    defaultChecked: A,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        T(t)
                    }
                }), I.createElement(gt.Z, null, "If on, a notification of this post will be sent to all members of the group!")), I.createElement("div", {
                    className: "mb-3"
                }, I.createElement($.Z, null, "Who can see this post"), I.createElement(te.Lt, {
                    options: le,
                    className: "flex-grow-1",
                    value: f,
                    onChange: function(e) {
                        return E(e)
                    },
                    trimToLength: !0
                })), "selectedRoles" === f && I.createElement("div", {
                    className: "mb-3"
                }, I.createElement(Hr, {
                    group: t,
                    onChange: function(e) {
                        var t, n;
                        return null != e && null !== (t = e.target) && void 0 !== t && t.checked ? w([].concat((0, L.Z)(b), [null == e || null === (n = e.target) || void 0 === n ? void 0 : n.value])) : w(b.filter((function(t) {
                            var n;
                            return t !== (null == e || null === (n = e.target) || void 0 === n ? void 0 : n.value)
                        })))
                    },
                    selectedRoles: b
                })), I.createElement(te.X2, {
                    className: "w-100"
                }, re && I.createElement(I.Fragment, null, I.createElement(te.zx, {
                    neutral: !0,
                    expand: !0,
                    disabled: Q,
                    loading: Q,
                    onClick: function() {
                        q(!0)
                    }
                }, "Select an Image"), " "), I.createElement(te.zx, {
                    disabled: ne || Q,
                    loading: Q,
                    expand: !0,
                    onClick: ee
                }, "Create Post")), " ", I.createElement(qr, {
                    postData: {
                        text: i,
                        title: m,
                        imageUrl: G,
                        roleIds: b
                    },
                    groupRoles: t.roles
                }))
            };
            var tl = n(78158);
            const nl = function(e) {
                var t = e.groupId,
                    n = e.showReportModal,
                    r = e.onClose,
                    a = (0, K.XC)().data,
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
                    w = (0, se.A4)({
                        groupId: t,
                        userId: null == a ? void 0 : a.id
                    }, {
                        skip: !a
                    }),
                    x = w.data,
                    y = w.isLoading,
                    Z = (0, se.gx)(),
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
                    M = (null == x ? void 0 : x.results.length) > 0;
                return I.createElement(j.Z, {
                    isOpen: n && !y,
                    contentClassName: "tw-rounded-xl",
                    toggle: function() {
                        r()
                    }
                }, I.createElement(te.oI, null, I.createElement("h4", null, "Report Group")), I.createElement(te.Ao, null, I.createElement(te.JX, null, I.createElement("div", {
                    className: "mb-2"
                }, I.createElement("p", {
                    className: "text-center"
                }, I.createElement("strong", null, s.length <= 0 ? "Why are you reporting this group?" : "Where is the offending content?"), " Select all that apply."), I.createElement(rl, null, I.createElement(ll, null, I.createElement("h6", null, "Why:"), I.createElement("h6", null, "Where:")), I.createElement(ll, null, I.createElement(al, {
                    label: "Hateful",
                    disabled: M,
                    onChange: function(e) {
                        C("hateful", e.target.checked)
                    }
                }), I.createElement(al, {
                    label: "Behaviour",
                    disabled: s.length <= 0,
                    onChange: function(e) {
                        S("group_user_behaviour", e.target.checked)
                    }
                })), I.createElement(ll, null, I.createElement(al, {
                    label: "Malicious",
                    disabled: M,
                    onChange: function(e) {
                        C("malicious", e.target.checked)
                    }
                }), I.createElement(al, {
                    label: "Imagery",
                    disabled: s.length <= 0,
                    onChange: function(e) {
                        S("image_banner_gallery_icon", e.target.checked)
                    }
                })), I.createElement(ll, null, I.createElement(al, {
                    label: "Abusive/Disruptive",
                    disabled: M,
                    onChange: function(e) {
                        C("abusive_disruptive", e.target.checked)
                    }
                }), I.createElement(al, {
                    label: "Name",
                    disabled: s.length <= 0,
                    onChange: function(e) {
                        S("group_name", e.target.checked)
                    }
                })), I.createElement(ll, null, I.createElement(al, {
                    label: "Inappropriate",
                    disabled: M,
                    onChange: function(e) {
                        C("inappropriate", e.target.checked)
                    }
                }), I.createElement(al, {
                    label: "Description",
                    disabled: s.length <= 0,
                    onChange: function(e) {
                        S("group_description", e.target.checked)
                    }
                })))), s.length > 0 && p.length > 0 && I.createElement("div", {
                    className: "mt-2"
                }, I.createElement(te.gx, {
                    placeholder: "What happened? (optional)",
                    onChange: function(e) {
                        h(e.target.value)
                    },
                    disabled: M
                })), M && I.createElement("div", {
                    className: "mt-2 text-center"
                }, I.createElement("p", null, "Thank you for filing a report.", I.createElement("br", null), "Your report is under review.")), I.createElement("div", {
                    className: "p-3"
                }, I.createElement(te.X2, null, I.createElement(te.zx, {
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
                    disabled: O || M || p.length <= 0 || s.length <= 0,
                    loading: O
                }, I.createElement(A.Z, {
                    icon: i.JH
                }), "  Submit"), " ", I.createElement(te.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        r()
                    }
                }, I.createElement(A.Z, {
                    icon: b.NB
                }), "  Cancel"))))))
            };
            var rl = (0, a.Z)("div", {
                    target: "e1k7r1d32"
                })({
                    name: "8g59bk",
                    styles: "display:flex;flex-direction:column;justify-content:start;align-items:start;height:100%;width:100%;padding:0.5rem;background:#252a30;border-radius:8px;margin-bottom:15px"
                }),
                ll = (0, a.Z)("div", {
                    target: "e1k7r1d31"
                })({
                    name: "u9ra9s",
                    styles: "display:flex;flex-direction:row;justify-content:space-around;align-items:start;height:100%;width:100%;padding:0.5rem;>*{flex:1;}"
                }),
                al = (0, a.Z)(te.XZ, {
                    target: "e1k7r1d30"
                })({
                    name: "18dr3x4",
                    styles: "margin:0.5rem"
                });
            const ol = function(e) {
                var t = e.group,
                    n = e.showBlockModal,
                    r = e.onClose,
                    a = (0, se.WG)(),
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
                }, I.createElement(te.oI, null, I.createElement("h4", null, "Block ", null == t ? void 0 : t.name, "?")), I.createElement(te.Ao, null, I.createElement("p", null, "Are you sure you want to block ", null == t ? void 0 : t.name, "?", I.createElement("br", null), " You will no longer be able to:", I.createElement("br", null), I.createElement("br", null), "• Join this group.", I.createElement("br", null), "• Get invites from this group. 💔"), I.createElement(te.X2, null, I.createElement(te.zx, {
                    danger: !0,
                    expand: !0,
                    onClick: function() {
                        c({
                            groupId: null == t ? void 0 : t.id
                        })
                    }
                }, I.createElement(te.$1, {
                    icon: i.JH
                }), "   Block"), " ", I.createElement(te.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: r
                }, "Cancel"))))
            };
            const il = function() {
                return I.createElement(I.Fragment, null, I.createElement(te.oI, {
                    className: "text-center"
                }, I.createElement("h2", null, "You've Blocked this Group!")), I.createElement(te.Ao, {
                    className: "text-center"
                }, "You won't get any invites from this group, and you can't join it.", I.createElement("br", null), I.createElement("br", null), "If you want to join this group or get invites from it, you have to unblock it first."))
            };
            var cl = n(9970);
            var sl = function(e) {
                var t = e.group,
                    n = e.currentUser,
                    r = e.targetUser,
                    l = e.onAccept,
                    a = e.onCancel,
                    o = e.isLoading,
                    i = t.transferTargetId === (null == n ? void 0 : n.id),
                    c = (null == t ? void 0 : t.ownerId) === (null == n ? void 0 : n.id);
                return I.createElement(ml, null, o ? I.createElement(te.UU, {
                    width: "100%",
                    height: "30px",
                    className: "mt-4"
                }) : I.createElement(te.X2, {
                    className: "tw-justify-between"
                }, I.createElement(te.JX, {
                    className: "gap-1"
                }, I.createElement(te.X2, null, I.createElement(te.$1, {
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
                }, r.displayName)))), I.createElement(te.JX, {
                    className: "gap-1"
                }, I.createElement(te.X2, {
                    className: "tw-gap-[12px]"
                }, i && I.createElement(te.zx, {
                    success: !0,
                    onClick: function() {
                        return l()
                    }
                }, I.createElement(te.$1, {
                    icon: w.LE
                }), "  Accept"), I.createElement(te.zx, {
                    danger: !0,
                    onClick: function() {
                        return a()
                    }
                }, I.createElement(te.$1, {
                    icon: cl.EO
                }), " ", i ? "Decline" : "Cancel")))))
            };
            sl.propTypes = {
                group: me().object.isRequired,
                currentUser: me().object.isRequired,
                targetUser: me().object.isRequired,
                onCancel: me().func.isRequired,
                inAccept: me().func,
                isLoading: me().bool
            };
            const ul = sl;
            var ml = (0, a.Z)("div", {
                    target: "ean9tdl0"
                })({
                    name: "1sccrd7",
                    styles: "display:flex;flex-direction:column;background-color:#252A30;margin-top:10px;margin-bottom:10px;border-radius:3px;padding:10px;border-left:3px solid #252A30"
                }),
                dl = n(5276),
                pl = n(84090);
            var gl = function(e) {
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
                    O = (0, se.Aw)(),
                    C = (0, l.Z)(O, 2),
                    S = C[0],
                    j = C[1],
                    M = j.isLoading,
                    A = j.isSuccess,
                    T = (0, dl.Y)({
                        rootMargin: "50px 0px",
                        onEnter: function(e) {
                            (0, e.unobserve)(), c(i + 1)
                        }
                    }),
                    R = T.observe,
                    P = (0, dl.Y)({
                        rootMargin: "0px 0px",
                        onEnter: function(e) {
                            var t = e.scrollDirection,
                                n = e.unobserve;
                            "down" === t.vertical && (n(), c(i - 1))
                        }
                    }).observe,
                    U = (0, se._n)({
                        pageValue: i - 1,
                        n: k,
                        groupId: x,
                        publicOnly: !Z
                    }, {
                        skip: 1 === i,
                        refetchOnMountOrArgChange: !0
                    }),
                    q = (0, se._n)({
                        pageValue: i,
                        n: k,
                        groupId: x,
                        publicOnly: !Z
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    z = (0, se._n)({
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
                    A && E(!1)
                }), [A]);
                var G = function(e) {
                        w(e), E(!0)
                    },
                    X = (0, I.useMemo)((function() {
                        return m ? F.map((function(e, t) {
                            return null !== e ? I.createElement("div", {
                                key: e.id
                            }, I.createElement(qr, {
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
                }, I.createElement(pl.Z, {
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
                    isLoading: M
                }), I.createElement(vl, null, I.createElement(bl, null, I.createElement(hl, null, "Posts")), I.createElement(wl, null, I.createElement(El, null, I.createElement("div", {
                    className: "col"
                }, X))))) : null
            };
            gl.propTypes = {};
            const fl = gl;
            var El = (0, a.Z)("div", {
                    target: "emafa4s4"
                })({
                    name: "1s65yl6",
                    styles: "max-height:450px;margin-top:15px;margin-bottom:10px;overflow:auto"
                }),
                vl = (0, a.Z)("div", {
                    target: "emafa4s3"
                })({
                    name: "11po3a3",
                    styles: "display:flex;flex-direction:column;align-items:start;justify-content:start;border-radius:8px;overflow:hidden;background:#2a2e34"
                }),
                hl = (0, a.Z)("h2", {
                    target: "emafa4s2"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                bl = (0, a.Z)(ie.JX, {
                    target: "emafa4s1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                wl = (0, a.Z)(bl, {
                    target: "emafa4s0"
                })({
                    name: "18clcmv",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto"
                });
            const xl = function(e) {
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
                    E = (0, se.V3)({
                        groupId: o,
                        perPage: 51,
                        offset: u
                    }),
                    v = E.data,
                    h = E.isLoading,
                    b = E.isError,
                    w = (null == v ? void 0 : v.length) > 50,
                    x = (0, se.Rx)(),
                    y = (0, l.Z)(x, 2),
                    Z = y[0],
                    k = y[1],
                    N = k.error,
                    O = k.isSuccess,
                    S = k.isError,
                    j = k.isLoading,
                    M = null !== (t = null == v ? void 0 : v.filter((function(e) {
                        return !!e.user
                    }))) && void 0 !== t ? t : [],
                    A = h ? I.createElement(yl, {
                        height: "130px"
                    }) : I.createElement(I.Fragment, null, null != M && M.length ? I.createElement(Zl, null, null == M ? void 0 : M.slice(0, 50).map((function(e) {
                        return I.createElement(Kt, {
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
                return I.createElement(I.Fragment, null, I.createElement(Zn, {
                    isOpen: g,
                    cancelCallback: function() {
                        return f(!1)
                    },
                    groupId: o,
                    isGroupMemberOnly: !1
                }), I.createElement(te.zx, {
                    className: "mb-2",
                    color: "primary",
                    onClick: function() {
                        f(!0)
                    }
                }, "Ban Somebody"), I.createElement(te.oI, null, I.createElement("h4", {
                    className: "text-center"
                }, "Banned Users")), I.createElement(te.Ao, null, b && I.createElement(te.qX, {
                    type: "error",
                    title: "Something went wrong"
                }, "We couldn't load the list of banned users. Please try again later!"), O && I.createElement(te.qX, {
                    slim: !0,
                    type: "success"
                }, "User unbanned. They can now be invited back in if you like."), S && I.createElement(te.qX, {
                    type: "error",
                    title: "Failed to unban user"
                }, null !== (n = null === (r = N.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : N.data.error), A, I.createElement(kl, null, I.createElement(Nl, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u - 50)
                    },
                    disabled: h || 0 === u
                }, I.createElement(te.$1, {
                    icon: oe.A3
                })), I.createElement(Il, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u + 50)
                    },
                    disabled: h || !w
                }, I.createElement(te.$1, {
                    icon: ae._t
                })))))
            };
            var yl = (0, a.Z)(te.UU, {
                    target: "eqx7h3n4"
                })({
                    name: "2cp9od",
                    styles: "margin:8px"
                }),
                Zl = (0, a.Z)("div", {
                    target: "eqx7h3n3"
                })({
                    name: "j9stxx",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;>*{width:300px;margin:8px;}"
                }),
                kl = (0, a.Z)("div", {
                    target: "eqx7h3n2"
                })({
                    name: "1vtota4",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-bottom:8px"
                }),
                Nl = (0, a.Z)(te.zx, {
                    target: "eqx7h3n1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                Il = (0, a.Z)(te.zx, {
                    target: "eqx7h3n0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                });
            const Ol = function() {
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
                    B = I.useState(!1),
                    J = (0, l.Z)(B, 2),
                    $ = J[0],
                    V = J[1],
                    W = I.useState(!1),
                    Y = (0, l.Z)(W, 2),
                    ne = Y[0],
                    re = Y[1],
                    ae = I.useState(!1),
                    oe = (0, l.Z)(ae, 2),
                    ie = oe[0],
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
                    Ze = (0, K.q7)().data,
                    ke = void 0 === Ze ? [] : Ze,
                    Ne = (0, O.I0)(),
                    Ie = (0, H.y)(),
                    Oe = Ie.data,
                    Ce = Ie.isLoading,
                    Se = 0,
                    je = 0;
                Ie.isSuccess && (Se = Oe.constants.GROUPS.MAX_JOINED, je = Oe.constants.GROUPS.MAX_JOINED_PLUS), ke.includes("permission-extra-group-count") && (Se = Math.max(Se, je || 0));
                var Me = (0, C.UO)().groupId,
                    Ae = (0, K.XC)().data,
                    Te = (0, se.r5)({
                        groupId: Me,
                        purpose: "group"
                    }),
                    Re = Te.data,
                    Pe = Te.isSuccess,
                    Le = Te.isFetching,
                    Ue = Te.isError,
                    qe = Te.error,
                    ze = (0, ce.pc)(),
                    Fe = (0, se.dj)({
                        userId: null == Ae ? void 0 : Ae.id
                    }),
                    Ge = Fe.data,
                    Xe = Fe.isLoading,
                    De = (0, se.xI)(),
                    _e = (0, l.Z)(De, 2),
                    Je = _e[0],
                    $e = _e[1],
                    Ve = $e.isLoading,
                    We = $e.isError,
                    He = $e.error,
                    Ye = (0, se.i2)(),
                    Qe = (0, l.Z)(Ye, 2),
                    Ke = Qe[0],
                    et = Qe[1].isLoading,
                    tt = (0, se.MQ)(),
                    nt = (0, l.Z)(tt, 2),
                    rt = nt[0],
                    lt = nt[1].isLoading,
                    at = (0, se.DU)(),
                    ot = (0, l.Z)(at, 2),
                    it = ot[0],
                    ct = ot[1],
                    st = ct.isLoading,
                    ut = ct.isError,
                    mt = ct.error,
                    dt = ct.isSuccess,
                    pt = null !== (null == Re ? void 0 : Re.deletedAt),
                    gt = (0, Zt.Ul)({
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
                var Et, ht, bt = I.useMemo((function() {
                        return !!z && (null !== Re.transferTargetId || void 0 !== Re.transferTargetId)
                    }), [z]),
                    wt = (null == Re ? void 0 : Re.transferTargetId) === (null == Ae ? void 0 : Ae.id) ? null == Re ? void 0 : Re.ownerId : null == Re ? void 0 : Re.transferTargetId,
                    xt = (0, ee.GR)(wt, {
                        skip: null == Re || Le || !bt || !wt,
                        refetchOnMountOrArgChange: !0
                    }),
                    yt = xt.data,
                    kt = xt.isFetching,
                    Nt = xt.isError,
                    It = xt.error,
                    Ot = (0, se.HT)(),
                    Ct = (0, l.Z)(Ot, 2),
                    St = Ct[0],
                    jt = Ct[1],
                    Mt = jt.data,
                    At = (jt.isFetching, jt.isError),
                    Tt = jt.error,
                    Rt = (0, se.rq)(),
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
                                        At && Ne((0, Q.d)({
                                            title: "Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null == Tt || null === (t = Tt.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), he(!1)), !At && Mt && Ne((0, Q.d)({
                                            title: "Group Transfer Accepted",
                                            icon: y.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }), he(!1)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Ne((0, Q.d)({
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
                                        zt && Ne((0, Q.d)({
                                            title: "Cancel Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null == qt || null === (t = qt.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), he(!1)), !zt && qt && Ne((0, Q.d)({
                                            title: "Cancel Group Transfer Success",
                                            icon: y.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }), he(!1)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Ne((0, Q.d)({
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
                if (!Re || Le || ft || lt || et || Ve || Xe || Ce) return (ie || ne) && (re(!1), ue(!1)), bt && !yt || kt ? I.createElement(te.UU, {
                    width: "100%",
                    height: "200px",
                    className: "mt-4"
                }) : !Nt || Ue || kt ? Ue ? I.createElement(I.Fragment, null, I.createElement(te.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: "Something went wrong with getting this group! (".concat(null == qe || null === (Et = qe.data) || void 0 === Et || null === (Et = Et.error) || void 0 === Et ? void 0 : Et.message, ")")
                }), I.createElement("div", {
                    className: "text-center"
                }, I.createElement(S.rU, {
                    to: "/home/groups"
                }, "Go Back! 😭"))) : I.createElement(I.Fragment, null, I.createElement(te.UU, {
                    width: "100%",
                    height: "200px",
                    className: "mt-4"
                }), I.createElement(te.UU, {
                    width: "100%",
                    height: "500px",
                    className: "mt-5"
                })) : I.createElement(te.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: "Something went wrong with getting target user! (".concat(null == It || null === (ht = It.data) || void 0 === ht || null === (ht = ht.error) || void 0 === ht ? void 0 : ht.message, ")")
                });
                var Xt, Dt = function() {
                        _(!1), Je({
                            groupId: Me
                        })
                    },
                    _t = function() {
                        V(!1), Re.rules ? _(!0) : Dt()
                    },
                    Bt = Pe && Re.myMember && Re.myMember.roleIds.reduce((function(e, t) {
                        if (e) return e;
                        var n = Re.roles.find((function(e) {
                            return e.id === t
                        }));
                        return !(null == n || !n.requiresTwoFactor || !1 !== Re.myMember.has2FA) && n
                    }), !1),
                    Jt = Re.membershipStatus;
                if (Re.memberCount < vt.qH && (Ge.length < Se || Ae.tagsSet.has("admin_uncap_owned_groups"))) {
                    if (Jt === vt.oq.REQUESTED) Xt = I.createElement(te.zx, {
                        danger: !0,
                        onClick: function() {
                            return Ke({
                                groupId: Me
                            })
                        },
                        disabled: Ve,
                        loading: Ve
                    }, I.createElement(A.Z, {
                        icon: b.NB
                    }), "  Cancel Join Request");
                    else if (Jt === vt.oq.INVITED) Xt = I.createElement(te.zx, {
                        success: !0,
                        onClick: Dt
                    }, I.createElement(A.Z, {
                        icon: w.LE
                    }), "  Accept Invite");
                    else if (Jt === vt.oq.USER_BLOCKED) Xt = null;
                    else if (!Re.myMember) switch (Re.joinState) {
                        case vt.wN.OPEN:
                            Xt = I.createElement(te.zx, {
                                onClick: _t,
                                disabled: Ve,
                                loading: Ve
                            }, I.createElement(A.Z, {
                                icon: o.r8
                            }), "  Join Group");
                            break;
                        case vt.wN.REQUEST:
                            Xt = I.createElement(te.zx, {
                                onClick: _t
                            }, I.createElement(A.Z, {
                                icon: s.FU
                            }), " Request to Join");
                            break;
                        default:
                            Xt = I.createElement(te.zx, {
                                disabled: !0
                            }, "Closed to New Members")
                    }
                    Re.joinState !== vt.wN.INVITE || Re.myMember || (Xt = I.createElement(te.zx, {
                        disabled: !0
                    }, "Closed to New Members"))
                } else Ge.length >= Se && !Ae.tagsSet.has("admin_uncap_owned_groups") ? Xt = I.createElement(te.zx, {
                    disabled: !0
                }, "You can't join more than ", Se, " groups!") : Re.myMember || (Xt = I.createElement(te.zx, {
                    disabled: !0
                }, "Group is Full"));
                if (!Re.id) return null;
                var $t = Jt === vt.oq.USER_BLOCKED;
                return I.createElement(I.Fragment, null, I.createElement(te.$4, null, null !== (e = null == Re ? void 0 : Re.name) && void 0 !== e ? e : "Group"), I.createElement(j.Z, {
                    isOpen: $,
                    toggle: function() {
                        V(!1)
                    }
                }, I.createElement(Sl, null, I.createElement("h4", {
                    className: "text-center"
                }, "Unblock this Group?")), I.createElement(jl, null, I.createElement(te.JX, null, I.createElement("div", {
                    className: "p-3 text-center"
                }, "Are you sure you want to unblock ", I.createElement("strong", null, Re.name), "?"), I.createElement("div", {
                    className: "p-3"
                }, I.createElement(te.X2, null, I.createElement(te.zx, {
                    expand: !0,
                    onClick: function() {
                        V(!1), rt({
                            groupId: Me,
                            userId: Ae.id
                        })
                    }
                }, I.createElement(A.Z, {
                    icon: w.LE
                }), "  Unblock Group"), " ", I.createElement(te.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        V(!1)
                    }
                }, I.createElement(A.Z, {
                    icon: b.NB
                }), "  Cancel")))))), I.createElement(j.Z, {
                    isOpen: D,
                    toggle: function() {
                        _(!1)
                    }
                }, I.createElement(Sl, null, I.createElement("h4", {
                    className: "text-center"
                }, "Rules")), I.createElement(jl, null, I.createElement(te.JX, null, I.createElement("div", {
                    className: "p-3"
                }, I.createElement("p", null, "By joining this group, you agree to the following rules:"), I.createElement(Al, null, Re.rules)), I.createElement("div", {
                    className: "p-3"
                }, I.createElement(te.X2, null, I.createElement(te.zx, {
                    expand: !0,
                    onClick: Dt,
                    disabled: Ve,
                    loading: Ve
                }, Re.joinState === vt.wN.OPEN ? I.createElement(I.Fragment, null, I.createElement(A.Z, {
                    icon: o.r8
                }), "  Join Group") : I.createElement(I.Fragment, null, I.createElement(A.Z, {
                    icon: s.FU
                }), "  Request to Join")), " ", I.createElement(te.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        _(!1)
                    }
                }, I.createElement(A.Z, {
                    icon: b.NB
                }), "  Cancel")))))), I.createElement(j.Z, {
                    isOpen: pe,
                    toggle: function() {
                        return ge(!1)
                    }
                }, I.createElement(Sl, null, I.createElement("h4", {
                    className: "text-center"
                }, "Decline Group Invite?")), I.createElement(jl, null, I.createElement(te.JX, null, I.createElement("div", {
                    className: "p-3 text-center"
                }, "Are you sure you want to decline invite to ", I.createElement("strong", null, Re.name), "?"), I.createElement("div", {
                    className: "px-3 text-center d-flex justify-content-center"
                }, I.createElement(Be.Z, {
                    id: "block-invites",
                    checked: xe,
                    onChange: function(e) {
                        return ye(e.target.checked)
                    },
                    label: "Block this group, preventing further invites",
                    htmlFor: "block-invites"
                })), I.createElement("div", {
                    className: "p-3"
                }, I.createElement(te.X2, null, I.createElement(te.zx, {
                    expand: !0,
                    danger: !0,
                    onClick: function() {
                        return it({
                            groupId: Me,
                            block: xe
                        })
                    },
                    loading: st
                }, I.createElement(A.Z, {
                    icon: w.LE
                }), "  Decline Invite"), " ", I.createElement(te.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        ge(!1)
                    }
                }, I.createElement(A.Z, {
                    icon: b.NB
                }), "  Cancel")))))), I.createElement(nl, {
                    groupId: Me,
                    showReportModal: ne,
                    onClose: function() {
                        re(!1)
                    }
                }), I.createElement(ol, {
                    group: Re,
                    showBlockModal: ie,
                    onClose: function() {
                        ue(!1)
                    }
                }), I.createElement("div", {
                    className: (0, N.iv)({
                        name: "g46w8s",
                        styles: "margin-bottom:30px"
                    })
                }, I.createElement(te.X2, {
                    className: "mb-2 justify-content-end"
                }, (null == Re ? void 0 : Re.ownerId) !== Ae.id && I.createElement(I.Fragment, null, I.createElement(te.zx, {
                    neutral: !0,
                    onClick: function() {
                        re(!0)
                    }
                }, I.createElement(te.$1, {
                    icon: i.JH
                }), " Report"), "userblocked" !== (null == Re ? void 0 : Re.membershipStatus) && !(null != Re && Re.myMember) && I.createElement(I.Fragment, null, " ", I.createElement(te.zx, {
                    danger: !0,
                    onClick: function() {
                        ue(!0)
                    }
                }, I.createElement(te.$1, {
                    icon: h.jA
                }), " Block")), "userblocked" === (null == Re ? void 0 : Re.membershipStatus) && I.createElement(I.Fragment, null, " ", I.createElement(te.zx, {
                    danger: !0,
                    onClick: function() {
                        V(!0)
                    }
                }, I.createElement(A.Z, {
                    icon: v.faBan
                }), " Unblock")))), I.createElement(tl.Z, {
                    group: Re
                }), Bt && I.createElement(te.X2, null, I.createElement(M.Z, {
                    color: "warning"
                }, "Your VRChat account does not have 2FA enabled. Your role '", Bt.name, "' in ", Re.name, " requires this. Until you enable 2FA, your ability to manage ", Re.name, " will be limited.")), ze && pt && I.createElement(te.X2, null, I.createElement(Tl, null, " THIS GROUP HAS BEEN DELETED ")), We && I.createElement(te.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: (null == He || null === (t = He.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred while trying to join ".concat(null == Re ? void 0 : Re.name, ".")
                }), ut && I.createElement(te.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: (null == mt || null === (n = mt.data) || void 0 === n ? void 0 : n.error.message) || "An error occurred while trying to decline group invitation."
                }), I.createElement("div", {
                    className: "d-flex flex-row justify-content-center align-content-center mb-2"
                }, Xt, Jt === vt.oq.INVITED && I.createElement(te.zx, {
                    danger: !0,
                    onClick: function() {
                        return ge(!0)
                    },
                    className: "mx-2"
                }, I.createElement(A.Z, {
                    icon: E.YI
                }), "  Decline Invite")), $t ? I.createElement(il, null) : I.createElement(I.Fragment, null, bt && !kt && wt && I.createElement(ul, {
                    group: Re,
                    currentUser: Ae,
                    targetUser: yt,
                    onAccept: Ft,
                    onCancel: Gt,
                    isLoading: ve
                }), I.createElement(le.Z, {
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
                        condition: ze || T({
                            groupMember: null == Re ? void 0 : Re.myMember,
                            permission: "group-members-viewall"
                        }) || T({
                            groupMember: null == Re ? void 0 : Re.myMember,
                            permission: "group-members-manage"
                        })
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
                    element: I.createElement(I.Fragment, null, Pe && I.createElement(fl, {
                        group: Re
                    }), I.createElement(Cl, null, I.createElement(te.JX, {
                        className: "m-1"
                    }, I.createElement(jn, {
                        langs: Re.languages
                    })), I.createElement(te.JX, {
                        className: "m-1"
                    }, I.createElement(qn, {
                        links: Re.links
                    }))), I.createElement(Cl, null, I.createElement(te.JX, {
                        className: "m-1 mt-2 mw-100"
                    }, I.createElement(Sl, null, I.createElement("h4", null, "About This Group")), I.createElement(Ml, null, I.createElement("p", {
                        className: "w-100 text-break"
                    }, Re.description))), Re.rules && I.createElement(I.Fragment, null, I.createElement(te.JX, {
                        className: "m-1 mt-2 mw-100"
                    }, I.createElement(Sl, null, I.createElement("h4", null, "Rules")), I.createElement(Ml, null, I.createElement("p", {
                        className: "w-100 text-break"
                    }, Re.rules))))))
                }), I.createElement(C.AW, {
                    path: "/posts",
                    element: (ze || T({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-announcement-manage"
                    })) && Pe ? I.createElement(I.Fragment, null, P ? I.createElement(te.X2, null, I.createElement(te.JX, {
                        className: "w-100"
                    }, I.createElement(te.oI, null, I.createElement("h4", {
                        className: "text-center"
                    }, "Create Post")), I.createElement(te.Ao, null, I.createElement(te.JX, {
                        className: "w-100"
                    }, I.createElement(el, {
                        group: Re
                    }), I.createElement(te.zx, {
                        onClick: function() {
                            return L(!1)
                        }
                    }, "Cancel"))))) : I.createElement(te.zx, {
                        onClick: function() {
                            return L(!0)
                        }
                    }, I.createElement(te.$1, {
                        icon: o.r8
                    }), " Create Post"), I.createElement(fl, {
                        isEditMode: !0,
                        group: Re
                    })) : I.createElement(R.Z, {
                        to: ".."
                    })
                }), I.createElement(C.AW, {
                    path: "/galleries/*",
                    element: I.createElement(or, {
                        group: Re
                    })
                }), I.createElement(C.AW, {
                    path: "/subscribe",
                    element: I.createElement(R.Z, {
                        to: "store"
                    })
                }), I.createElement(C.AW, {
                    path: "/store",
                    element: I.createElement(Tr, {
                        group: Re
                    })
                }), I.createElement(C.AW, {
                    path: "/instances",
                    element: I.createElement(dr, {
                        group: Re
                    })
                }), I.createElement(C.AW, {
                    path: "/invites/*",
                    element: ze || T({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-invites-manage"
                    }) ? I.createElement(xr, {
                        group: Re
                    }) : I.createElement(R.Z, {
                        to: ".."
                    })
                }), I.createElement(C.AW, {
                    path: "/members",
                    element: ze || T({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-members-viewall"
                    }) || T({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-members-manage"
                    }) ? I.createElement(On, {
                        group: Re
                    }) : I.createElement(R.Z, {
                        to: ".."
                    })
                }), I.createElement(C.AW, {
                    path: "/settings/*",
                    element: ze || null != Re && Re.myMember || T({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-data-manage"
                    }) || T({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-roles-manage"
                    }) ? I.createElement(Ht, {
                        group: Re
                    }) : I.createElement(R.Z, {
                        to: ".."
                    })
                }), I.createElement(C.AW, {
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
            var Cl = (0, a.Z)(te.X2, {
                    target: "e7n20a25"
                })("flex-wrap:wrap;margin:-0.25rem;>", te.JX, "{min-width:300px;flex:1;}"),
                Sl = (0, a.Z)(te.JX, {
                    target: "e7n20a24"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                jl = (0, a.Z)(Sl, {
                    target: "e7n20a23"
                })({
                    name: "vnq3j7",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto;white-space:pre-line"
                }),
                Ml = (0, a.Z)(jl, {
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
                Tl = (0, a.Z)("h3", {
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
                    M = (0, v.oQ)("".concat(c).concat(null != f && null !== (t = f.state) && void 0 !== t && t.redirectTo ? "?redirectTo=".concat(encodeURIComponent(f.state.redirectTo)) : ""));
                if (r) return null;
                var A = function() {
                    var e = (0, l.Z)(s().mark((function e(t) {
                        var n, r, l;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t.preventDefault(), I(!0), n = new URL(M, window.location.href), e.next = 5, S(b(b({}, p.$Z.TOS), {}, {
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
                        return A(e)
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
//# sourceMappingURL=57d31264d243deaaf5643929d224ff0564b88d986d3d9a925b81318058835316.js.map