"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [5939], {
        29104: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(67294),
                l = n(45697),
                a = n.n(l),
                o = n(60006),
                i = function(e) {
                    var t = e.label,
                        n = e.value,
                        l = e.onChangeCallback,
                        a = void 0 === l ? function() {} : l,
                        i = e.defaultChecked,
                        c = void 0 !== i && i,
                        s = e.className,
                        u = e.disabled;
                    return r.createElement(o.W7, {
                        htmlFor: n,
                        className: s
                    }, r.createElement("span", null, t), r.createElement(o.D4, {
                        id: n,
                        name: n,
                        type: "checkbox",
                        onChange: function(e) {
                            return function(e) {
                                a({
                                    value: n,
                                    checked: e.target.checked
                                })
                            }(e)
                        },
                        checked: c,
                        disabled: u
                    }), r.createElement(o.Tg, null))
                };
            i.propTypes = {
                className: a().string,
                label: a().string,
                onChangeCallback: a().func,
                value: a().string,
                disabled: a().bool
            };
            const c = i
        },
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
                p = n(92512),
                g = n(67992),
                f = n(41259),
                E = n(68149),
                v = n(35117),
                h = n(68214),
                b = n(59545),
                y = n(68055),
                x = n(76553),
                w = n(6811),
                Z = n(64687),
                k = n.n(Z),
                I = n(83505),
                N = n(67294),
                C = n(32981),
                O = n(89250),
                S = n(79655),
                T = n(69699),
                j = n(23138),
                A = n(86646),
                M = function(e) {
                    var t, n, r, l = e.groupMember,
                        a = e.permission;
                    return (null == l || null === (t = l.permissions) || void 0 === t ? void 0 : t.includes("*")) || null !== (n = null == l || null === (r = l.permissions) || void 0 === r ? void 0 : r.includes(a)) && void 0 !== n && n
                },
                L = n(46320),
                P = n(4942),
                R = n(42138),
                U = n(42619),
                q = n(70265),
                G = n(5702),
                z = n(78439),
                F = n(47810),
                X = n(95305),
                D = n(35773),
                _ = n(60766),
                B = n(23149),
                J = n(3126),
                $ = n(83024),
                V = n(21464),
                W = n(17219),
                H = n(5513),
                Y = n(64258),
                Q = n(22202),
                K = n(62437),
                ee = n(34226),
                te = n(89421),
                ne = n(43862),
                re = n(72998),
                le = n(65394),
                ae = n(85020),
                oe = n(60006),
                ie = n(80873),
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
                return N.createElement(be, null, N.createElement(ee.JX, {
                    className: "tw-columns-3"
                }, N.createElement(ee.pw, {
                    className: "tw-justify-self-start tw-my-2",
                    fitToCover: !0,
                    alt: i,
                    imageId: (0, ve.oQ)(a || o),
                    width: "100px",
                    height: "100px"
                })), N.createElement(ee.JX, {
                    className: "tw-flex-[1_1_128px] tw-columns-6"
                }, N.createElement(S.rU, {
                    className: "tw-justify-self-start tw-text-2xl",
                    to: "/home/user/".concat(c)
                }, i), N.createElement("h4", {
                    className: "tw-justify-self-start"
                }, "Joined ".concat(m)), N.createElement("p", {
                    className: "tw-justify-self-start tw-text-[#737372] tw-text-[16px]"
                }, "Member")), N.createElement(ee.JX, {
                    className: "tw-flex tw-flex-row tw-flex-[1_1_32px] tw-justify-center tw-items-center tw-columns-3"
                }, N.createElement(ee.zx, {
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

            function ye(e, t) {
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
                    t % 2 ? ye(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ye(Object(n)).forEach((function(t) {
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
                    g = (0, N.useRef)(null),
                    f = (0, N.useState)(""),
                    E = (0, l.Z)(f, 2),
                    v = E[0],
                    h = E[1],
                    b = (0, N.useState)(1),
                    y = (0, l.Z)(b, 2),
                    x = y[0],
                    w = y[1],
                    Z = (0, ie.Nr)(v),
                    k = (0, N.useState)([
                        [],
                        []
                    ]),
                    I = (0, l.Z)(k, 2),
                    C = I[0],
                    O = I[1],
                    S = (0, Q.XC)().data,
                    T = null == o ? void 0 : o.id,
                    j = null == o ? void 0 : o.ownerId,
                    A = null == o ? void 0 : o.myMember,
                    M = (0, ce.Pv)(),
                    L = (0, l.Z)(M, 2),
                    P = L[0],
                    U = L[1],
                    q = U.data,
                    G = U.error,
                    z = U.isLoading,
                    F = (null == q || null === (t = q.members) || void 0 === t ? void 0 : t.length) < 25;
                N.useEffect((function() {
                    ue(0)
                }), []), N.useEffect((function() {
                    var e = (0, R.Z)(C);
                    if (q) {
                        var t;
                        if (q.page <= 0 && !v) e[0] = [null != o && o.myMember ? xe(xe({}, A), {}, {
                            userId: S.id,
                            user: xe(xe({}, S), {}, {
                                thumbnailUrl: null !== (t = S.profilePicOverride) && void 0 !== t ? t : S.currentAvatarImageUrl
                            })
                        }) : null].concat((0, R.Z)(q.members));
                        else e[q.page] = q.members;
                        O(e)
                    }
                }), [q]), (0, N.useEffect)((function() {
                    setTimeout((function() {
                        i && null != g && g.current && g.current.focus()
                    }), 300)
                }), [i, g]), (0, N.useEffect)((function() {
                    w(1)
                }), [v]), (0, N.useEffect)((function() {
                    h("")
                }), [i]);
                var X = (0, ce.Pi)({
                        groupId: T,
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
                            groupId: T,
                            perPage: 25,
                            page: e
                        }), w(e + 1)
                    },
                    me = null == C ? void 0 : C.map((function(e, t) {
                        var n;
                        return null === (n = (0, R.Z)(e)) || void 0 === n || null === (n = n.sort((function(e) {
                            return e.userId === j ? -1 : 0
                        }))) || void 0 === n || null === (n = n.filter((function(e, t, n) {
                            return n.findIndex((function(t) {
                                return t.userId === e.userId
                            })) === t
                        }))) || void 0 === n ? void 0 : n.map((function(e) {
                            return e.userId === j ? null : N.createElement(he, {
                                key: e.id,
                                member: e,
                                onSelectCallback: function(e) {
                                    return m(e)
                                }
                            })
                        }))
                    }));
                return N.createElement(oe.oA, {
                    role: "dialog",
                    isOpen: i,
                    toggle: c,
                    keyboard: !0,
                    autoFocus: !1,
                    size: "lg"
                }, N.createElement(oe.eb, {
                    tag: "h4",
                    close: N.createElement(te.Z, {
                        onClick: c
                    }),
                    toggle: c
                }, u ? "Group Members Search" : "Users Search"), N.createElement(oe.vc, null, N.createElement(oe.T_, null, N.createElement(ee.II, {
                    id: "search-product-list",
                    onChange: function(e) {
                        return h(e.target.value)
                    },
                    placeholder: u ? "Search Group Members..." : "Search for users...",
                    ref: g,
                    type: "text",
                    value: v
                }), (B || Y) && N.createElement("p", {
                    className: "text-center m-5 text-warning h-25"
                }, "Something went wrong with the search, please try again later!", N.createElement("br", null), B && N.createElement("code", null, null == _ || null === (n = _.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), Y && N.createElement("code", null, null == H || null === (r = H.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message)), J || p && N.createElement(oe.Um, null, N.createElement("div", {
                    className: "text-center m-5 text-secondary h-25"
                }, N.createElement(ne.Z, null))), !$ && !J && !B && u && N.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "Search for members in your group."), $ && !J && u && N.createElement(oe.Um, null, D.results.map((function(e) {
                    return N.createElement(he, {
                        key: e.id,
                        member: e,
                        onSelectCallback: function(e) {
                            return m(e)
                        }
                    })
                })), 0 === D.results.length && N.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "We couldn't find anything with that search.")), !se && !re && !Y && !u && N.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "Search for users on VRChat."), se && N.createElement(oe.Um, null, 0 === W.results.length && N.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "We couldn't find anything with that search.")), z ? N.createElement(ee.UU, {
                    height: "200px"
                }) : N.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, me), N.createElement("div", {
                    className: "p-2",
                    style: {
                        margin: "2px auto 0",
                        textAlign: "center"
                    }
                }, N.createElement(ee.zx, {
                    onClick: function() {
                        return ue(page)
                    },
                    disabled: z || G || F,
                    loading: z
                }, G || F ? "No more members..." : "List More Members")), ($ || se) && N.createElement(oe.Gz, null, N.createElement(oe.IT, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return w(x - 1)
                    },
                    disabled: 1 === x || J || re
                }, N.createElement(ee.$1, {
                    icon: ae.A3
                })), N.createElement("span", null, x), N.createElement(oe.UV, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return w(x + 1)
                    },
                    disabled: (null == D ? void 0 : D.isLastPage) || (null == W ? void 0 : W.isLastPage) || J || re
                }, N.createElement(ee.$1, {
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
            const Ie = function(e) {
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
                return N.createElement(N.Fragment, null, N.createElement(ee.oI, {
                    className: "mt-2"
                }, N.createElement("h4", {
                    className: "text-center"
                }, "Group Ownership Transfer")), N.createElement(ee.Ao, null, c || p || !d || !i ? N.createElement("div", {
                    className: "full-width text-center"
                }, N.createElement(ne.Z, null)) : N.createElement(N.Fragment, null, s && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == u || null === (t = u.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), g && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error Fetching New Group Owner Data"
                }, (null == f || null === (n = f.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unkown error fetching New Group Owner Data"), N.createElement(ee.X2, null, N.createElement("span", {
                    className: "full-width text-center"
                }, "You can choose to cancel the transfer")), N.createElement(ee.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, N.createElement(ee.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, N.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "Current Owner"), N.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, N.createElement(ee.$1, {
                    className: "tw-mr-2",
                    icon: ke.nm
                }), null == i ? void 0 : i.displayName)), N.createElement(ee.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, N.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "New Owner"), d && N.createElement(ee.X2, {
                    className: "tw-flex tw-m-1 tw-font-bold gx-0 gap-1"
                }, N.createElement(ee.pw, {
                    width: 24,
                    style: {
                        maxWidth: "24px",
                        objectFit: "cover"
                    },
                    imageId: (d.thumbnailUrl || d.currentAvatarThumbnailImageUrl).match("(?!/)file_[^/]+")[0],
                    alt: null == d ? void 0 : d.displayName
                }), null == d ? void 0 : d.displayName))), a ? N.createElement("div", {
                    className: "full-width text-center"
                }, N.createElement(ne.Z, null)) : N.createElement("div", {
                    className: (0, I.iv)({
                        name: "pc0kie",
                        styles: ">*{margin-top:15px;}"
                    })
                }, N.createElement(ee.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, N.createElement(ee.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, N.createElement(ee.zx, {
                    onClick: function() {
                        return l()
                    },
                    danger: !0,
                    className: "tw-max-w-[100%]"
                }, "Cancel Transfer")))))))
            };
            var Ne = n(57982);
            const Ce = function(e) {
                var t = e.isOpen,
                    n = e.cancelCallback;
                return N.createElement(oe.oA, {
                    role: "dialog",
                    isOpen: t,
                    toggle: n,
                    keyboard: !0,
                    autoFocus: !1,
                    size: "lg"
                }, N.createElement(oe.eb, {
                    tag: "h4",
                    close: N.createElement(te.Z, {
                        onClick: n
                    }),
                    toggle: n
                }, "About Group Ownership Transfer"), N.createElement(oe.vc, null, N.createElement("h4", null, "You can transfer your group ownership to another member of the group. the target member and the group must meet the requirements below."), N.createElement(oe.T_, null, N.createElement("ul", null, N.createElement("li", null, "The target member has verified their email address ", "(", "check the Email section via", " ", N.createElement(S.rU, {
                    className: "tw-text-link-highlight",
                    to: "/home/profile",
                    target: "_blank"
                }, "account settings"), ")"), N.createElement("li", null, "The target member has an active VRC Plus subscription"), N.createElement("li", null, "The target member can still own more groups ", "(", "each user can own up to 5 groups", ")"), N.createElement("li", null, "The group is not monetized")))))
            };
            var Oe = function(e) {
                var t, n, r = e.group,
                    a = e.onButtonClick,
                    o = e.isLoading,
                    i = N.useState(!1),
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
                    y = E.error,
                    x = N.useMemo((function() {
                        return null == v || !v.requirements || !v.requirements.groupNotMonetized
                    }), [v, b]);
                return N.createElement(N.Fragment, null, s && N.createElement(Ce, {
                    isOpen: s,
                    cancelCallback: function() {
                        return u(!1)
                    }
                }), N.createElement(ee.oI, {
                    className: "mt-2"
                }, N.createElement("h4", {
                    className: "text-center"
                }, "Group Ownership Transfer")), N.createElement(ee.Ao, null, p || h ? N.createElement("div", {
                    className: "full-width text-center"
                }, N.createElement(ne.Z, null)) : N.createElement(N.Fragment, null, g && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == f || null === (t = f.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), b && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == y || null === (n = y.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unkown error fetching Group Owner Requirements Data"), x && !b ? N.createElement("span", {
                    className: "tw-mb-2"
                }, N.createElement(ee.qX, {
                    type: "error"
                }, "Your group is not qualified for ownership transfer because it is currently being monetized.", " ", N.createElement("button", {
                    type: "button",
                    className: "tw-text-[#1FD1ED] tw-cursor-pointer tw-border-none tw-bg-transparent tw-p-0 tw-m-0",
                    onClick: function() {
                        return u(!0)
                    }
                }, "Learn more about Group Ownership Transfer"), ".")) : N.createElement("span", {
                    className: "tw-mb-2"
                }, "You can transfer your group ownership to another member of the group, this cannot be undone once the transfer is complete. The target member and the group must meet", " ", N.createElement("button", {
                    type: "button",
                    className: "tw-text-[#1FD1ED] tw-cursor-pointer tw-border-none tw-bg-transparent tw-p-0 tw-m-0",
                    onClick: function() {
                        return u(!0)
                    }
                }, "these requirements"), " ", "to qualify for the transfer."), N.createElement(ee.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, N.createElement(ee.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, N.createElement("p", null, "Current Owner"), N.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, N.createElement(ee.$1, {
                    className: "tw-mr-2",
                    icon: ke.nm
                }), null == d ? void 0 : d.displayName)), N.createElement(ee.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, N.createElement("p", null, "New Owner"), N.createElement(ee.zx, {
                    className: "tw-max-w-[250px]",
                    onClick: function() {
                        return a()
                    },
                    disabled: o || b || x,
                    loading: o
                }, N.createElement(ee.$1, {
                    className: "tw-mr-2",
                    icon: Ne.faMagnifyingGlass
                }), "Search Group Members"))))))
            };
            Oe.propTypes = {
                group: ue().object.isRequired,
                onButtonClick: ue().func.isRequired,
                isLoading: ue().bool.isRequired
            };
            const Se = Oe;
            var Te, je = "hasVerifiedEmail",
                Ae = "targetCanOwnMoreGroups",
                Me = "targetIsGroupMember",
                Le = "hasVRCPlus",
                Pe = "groupNotMonetized",
                Re = (Te = {}, (0, P.Z)(Te, je, "Email address has not been verified"), (0, P.Z)(Te, Ae, "Already owns maximum nubmer of groups per user"), (0, P.Z)(Te, Me, "Is not a valid member of the group"), (0, P.Z)(Te, Le, "Does not have an active VRChat Plus subscription"), (0, P.Z)(Te, Pe, "Group is not valid because it is monetized"), Te);
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
                return N.createElement(N.Fragment, null, N.createElement(ee.sm, {
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
                }, c || m ? N.createElement("div", {
                    className: "tw-full-width tw-text-center"
                }, N.createElement(ne.Z, null)) : N.createElement("div", null, d && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == p || null === (t = p.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), !(null != r && r.valid) && (null == r ? void 0 : r.reasons) && N.createElement(ee.qX, {
                    type: "error",
                    title: "Oops, it seems the selected member does not meet the following requirement(s)"
                }, r.reasons.map((function(e) {
                    var t;
                    return N.createElement("p", null, "• ".concat(null !== (t = Re[e]) && void 0 !== t ? t : "Unknown Validity Reason"))
                }))), N.createElement(ee.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-mt-2"
                }, N.createElement("span", {
                    className: "tw-full-width tw-text-center"
                }, "Are you sure you want to transfer your group ownership?")), N.createElement(ee.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-bg-[#252a30] tw-px-8 tw-text-[16px] tw-rounded-lg tw-border-current tw-transition tw-ease-in-out tw-delay-150 tw-bg-[#252a30] tw-mt-2"
                }, N.createElement(ee.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, N.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "Current Owner"), N.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, N.createElement(ee.$1, {
                    className: "tw-mr-2",
                    icon: ke.nm
                }), null == u ? void 0 : u.displayName)), N.createElement(ee.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, N.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "New Owner"), (null == l ? void 0 : l.user) && N.createElement(ee.X2, {
                    className: "tw-flex tw-m-1 tw-font-bold gx-0 gap-1"
                }, N.createElement(ee.pw, {
                    width: 24,
                    style: {
                        maxWidth: "24px",
                        objectFit: "cover"
                    },
                    imageId: (0, ve.oQ)(l.user.thumbnailUrl || l.user.currentAvatarThumbnailImageUrl),
                    alt: l.user.displayName
                }), l.user.displayName))), N.createElement(ee.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-mt-2"
                }, N.createElement("span", {
                    className: "tw-full-width tw-text-center"
                }, "This cannot be undone once the transfer is complete.")))))
            };
            var qe = n(34698),
                Ge = n(58877),
                ze = n(25402);
            const Fe = function(e) {
                var t, n = e.groupBioLinks,
                    a = e.callback,
                    o = e.index,
                    i = N.useState(null !== (t = null == n ? void 0 : n[o]) && void 0 !== t ? t : ""),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = N.useState(!1),
                    d = (0, l.Z)(m, 2),
                    p = d[0],
                    g = d[1],
                    f = N.useState(s),
                    E = (0, l.Z)(f, 2),
                    v = E[0],
                    h = E[1],
                    b = N.useState(!0),
                    y = (0, l.Z)(b, 2),
                    x = y[0],
                    w = y[1],
                    Z = null != n ? n : [],
                    I = function() {
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
                return p ? N.createElement("div", {
                    className: "w-100 p-2 p-l-0"
                }, N.createElement("div", {
                    className: "input-group"
                }, N.createElement("input", {
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
                        13 === e.keyCode && !1 === x && C()
                    },
                    className: "form-control",
                    value: s,
                    maxLength: 1e3
                }), N.createElement("div", {
                    className: "input-group-append"
                }, N.createElement("span", {
                    className: "input-group-text",
                    id: "basic-addon1"
                }, N.createElement(ze.QZ, {
                    url: s,
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                })))), N.createElement(qe.Z, {
                    onClick: function() {
                        g(!1), u(v)
                    }
                }, "Cancel"), N.createElement(qe.Z, {
                    onClick: C,
                    disabled: x,
                    color: "primary"
                }, "Ok")) : o > 0 && null == s ? N.createElement("div", null) : !(o > 0) || "" !== s && null != s || "" !== Z[o - 1] && null != Z[o - 1] ? null == s || "" === s ? N.createElement("div", null, N.createElement("div", {
                    className: "btn-group w-100 p-2 p-l-0"
                }, N.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "btn btn-outline-light btn-block",
                    style: {
                        whiteSpace: "normal"
                    },
                    onClick: I
                }, "Link"))) : N.createElement("div", null, N.createElement(Ge.Z, {
                    className: "p-2 w-100 p-l-0"
                }, N.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "btn btn-outline-light",
                    style: {
                        width: "255px",
                        overflow: "hidden"
                    },
                    onClick: I
                }, Z[o]), N.createElement(Xe, {
                    className: "btn btn-outline-danger h-100 ratio-1x1",
                    "aria-label": "Close",
                    onClick: O
                }, N.createElement("span", {
                    "aria-hidden": "true"
                }, "×")))) : N.createElement("div", null)
            };
            var Xe = (0, a.Z)(qe.Z, {
                    target: "e1a3rjxi0"
                })({
                    name: "1234s8l",
                    styles: "width:40px;max-width:40px"
                }),
                De = n(71421),
                _e = n(18461);
            var Be = function() {
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
                    u = N.useState(!1),
                    m = (0, l.Z)(u, 2),
                    d = m[0],
                    p = m[1],
                    g = N.useState([]),
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
                            }))) : v([].concat((0, R.Z)(E), [e]))
                        }
                    };
                N.useEffect((function() {
                    var e = [];
                    null == E || E.forEach((function(t) {
                        return e.push(null == t ? void 0 : t.value)
                    })), s(e)
                }), [E]), N.useEffect((function() {
                    E.length !== i.length && v(i)
                }), [i]);
                var b = N.useMemo((function() {
                    return i.length === E.length ? "View All" : "".concat(E.length, " selected")
                }), [i, E]);
                return N.createElement(We, {
                    className: "mb-2",
                    role: "radiogroup",
                    "aria-label": n.ariaLabel,
                    onMouseLeave: function() {
                        d && p(!1)
                    }
                }, N.createElement(Qe, {
                    disabled: a,
                    expanded: d
                }, N.createElement(Ke, {
                    type: "button",
                    "aria-label": "Expand Options",
                    disabled: a,
                    onClick: function(e) {
                        e.stopPropagation(), e.preventDefault(), p(!d)
                    }
                }, !!n && N.createElement(Ve, null, n.labelValue), N.createElement($e, {
                    className: "tw-gap-2 tw-text-center tw-justify-center"
                }, b), N.createElement(A.Z, {
                    icon: De.eW,
                    color: "white",
                    className: "ms-3"
                })), d && i.length > 0 && N.createElement(et, {
                    className: "tw-px-[10px] tw-gap-1 tw-py-1"
                }, i.map((function(e, t) {
                    var n, r;
                    return N.createElement(_e.Z, {
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
            Be.propTypes = {
                labelProps: ue().shape({
                    ariaLabel: ue().string.isRequired,
                    labelValue: ue().string.isRequired
                }).isRequired,
                disabled: ue().bool.isRequired,
                options: ue().array.isRequired,
                onTriggerUpdate: ue().func
            };
            const Je = Be;
            var $e = (0, a.Z)("div", {
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
                return e.isLoading ? N.createElement(nt, {
                    className: "justify-content-center"
                }, N.createElement("div", {
                    className: "spinner-border"
                })) : N.createElement(nt, null, N.createElement(rt, null, de()(t.created_at).format("MM/DD/YYYY hh:mm A")), t.description)
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
                    r = N.useState(25),
                    a = (0, l.Z)(r, 2),
                    o = a[0],
                    i = a[1],
                    c = N.useState(0),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = N.useState(0),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = N.useState([]),
                    v = (0, l.Z)(E, 2),
                    h = v[0],
                    b = v[1],
                    y = N.useState([]),
                    x = (0, l.Z)(y, 2),
                    w = x[0],
                    Z = x[1],
                    k = N.useState([]),
                    I = (0, l.Z)(k, 2),
                    C = I[0],
                    O = I[1],
                    S = (0, ce.hg)(),
                    T = (0, l.Z)(S, 2),
                    j = T[0],
                    A = T[1],
                    M = A.data,
                    L = A.isFetching,
                    P = A.isError,
                    U = (0, ce.rw)({
                        groupId: n.id
                    }, {
                        skip: !n
                    }),
                    q = U.data,
                    G = U.isFetching,
                    z = U.isError;
                N.useEffect((function() {
                    O(w.map((function(e) {
                        return e.value
                    })))
                }), [w]), N.useEffect((function() {
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
                        b(e), 0 === w.length && Z(e.map((function(e) {
                            return e.value
                        })))
                    }
                    u < 0 ? m(0) : j({
                        groupId: n.id,
                        perPage: o,
                        offset: u,
                        eventTypes: C ? (0, R.Z)(C) : []
                    })
                }), [o, u, q, C, w]), N.useEffect((function() {
                    null != M && M.totalCount && f(M.totalCount)
                }), [M]);
                var F = N.createElement(it, null, N.createElement(ct, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u - o)
                    },
                    disabled: 0 === u
                }, N.createElement(ee.$1, {
                    icon: ae.A3
                })), N.createElement("span", null, "(", u, " - ", g < o + u ? g : o + u, ") / ", g), N.createElement(st, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u + o)
                    },
                    disabled: g < o + u
                }, N.createElement(ee.$1, {
                    icon: le._t
                })));
                return N.createElement("div", null, P && N.createElement(ee.qX, {
                    title: "Error",
                    type: "error",
                    className: "mb-2"
                }, "There was an error loading the audit log."), z && !G && N.createElement(ee.qX, {
                    title: "Error",
                    type: "error",
                    className: "mb-2"
                }, "There was an error loading the filterable audit log types."), N.createElement(ee.oI, null, N.createElement("h4", {
                    className: "text-center"
                }, "Audit Log")), N.createElement(ee.Ao, null, N.createElement(ee.X2, {
                    className: "tw-flex-row tw-justify-evenly"
                }, !!h.length && N.createElement(Je, {
                    labelProps: {
                        ariaLabel: "LogTypes",
                        labelValue: "Filter Log Types: "
                    },
                    disabled: !n,
                    options: h,
                    onTriggerUpdate: function(e) {
                        return O(e)
                    }
                }), N.createElement(ot, {
                    label: "Items per-page",
                    onChange: i,
                    options: lt,
                    value: o,
                    className: "mb-2"
                })), F, N.createElement("div", {
                    className: "audit-log"
                }, (null !== (t = null == M ? void 0 : M.results) && void 0 !== t ? t : Array(o).fill({})).map((function(e, t) {
                    var n;
                    return N.createElement(tt, {
                        key: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "log-".concat(t),
                        log: e,
                        n: o,
                        offset: u,
                        isLoading: L
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
                    f = N.useState(),
                    E = (0, l.Z)(f, 2),
                    v = E[0],
                    h = E[1],
                    b = N.useState(!0),
                    y = (0, l.Z)(b, 2),
                    x = y[0],
                    w = y[1],
                    Z = N.useState(!1),
                    I = (0, l.Z)(Z, 2),
                    S = I[0],
                    T = I[1],
                    j = (0, ce.r5)({
                        groupId: i
                    }, {
                        skip: !m.id
                    }),
                    A = j.data,
                    M = j.isLoading,
                    L = j.error,
                    P = j.isError,
                    R = (0, ce.xm)({
                        groupId: i,
                        userId: m.id
                    }, {
                        skip: !m.id
                    }),
                    U = R.data,
                    q = R.isLoading,
                    G = R.error,
                    z = R.isError;
                (0, N.useEffect)((function() {
                    if (U && A) {
                        A.privacy === Et.TW.DEFAULT && U.visibility !== v && h(U.visibility);
                        var e = (null == U ? void 0 : U.isSubscribedToAnnouncements) || (null == U ? void 0 : U.isSubscribedToPosts);
                        w(e)
                    }
                }), [A, U]);
                var F = d || M || q,
                    X = (null == A ? void 0 : A.ownerId) === (null == U ? void 0 : U.userId),
                    D = (0, ce.uX)(),
                    _ = (0, l.Z)(D, 2),
                    B = _[0],
                    $ = _[1],
                    V = $.isLoading,
                    W = $.error,
                    H = $.isError,
                    K = $.isSuccess,
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
                                        return T(!1), e.next = 3, re({
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
                return g ? N.createElement(ft.Z, {
                    error: p,
                    statusCode: p.status
                }) : P ? N.createElement(ft.Z, {
                    error: L,
                    statusCode: L.status
                }) : z ? N.createElement(ft.Z, {
                    error: G,
                    statusCode: G.status
                }) : N.createElement(N.Fragment, null, N.createElement(ee.oI, null, N.createElement("h4", {
                    className: "text-center"
                }, "Membership Preferences")), N.createElement(ee.Ao, null, F ? N.createElement(ee.UU, {
                    height: "250px"
                }) : N.createElement(N.Fragment, null, K && N.createElement(ee.qX, {
                    type: "success",
                    title: "Updated preferences",
                    slim: !0
                }, "Your preferences were saved successfully"), H && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error updating preferences"
                }, W.status, " : ", null !== (t = null === (n = W.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : ""), A.privacy === Et.TW.DEFAULT && N.createElement(J.Z, null, "Visibility ", N.createElement(ee.Lt, {
                    onChange: h,
                    value: v,
                    options: vt
                }), N.createElement("small", null, "Do you want everyone to see this group on your profile, just your friends to see it, or to keep it secret? This only affects your own profile.")), N.createElement("div", {
                    className: "my-2"
                }, N.createElement(gt.Z, {
                    label: "Subscribe to Posts",
                    value: "isSubscribedToPosts",
                    defaultChecked: x,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        w(t)
                    }
                }), N.createElement(pt.Z, null, "Tick this to hear all the latest news and goss from this group")), N.createElement(ee.zx, {
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
                }, N.createElement(ee.$1, {
                    icon: mt.r6
                }), " Save Preferences"))), N.createElement(ee.oI, {
                    className: "mt-2"
                }, N.createElement("h4", {
                    className: "text-center"
                }, "Leave Group")), N.createElement(ee.Ao, null, F ? N.createElement(ee.UU, {
                    height: "100px",
                    delay: 50
                }) : N.createElement(N.Fragment, null, ie && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error leaving group"
                }, oe.status, " : ", null !== (a = null === (o = oe.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : ""), N.createElement(ee.sm, {
                    headerText: "Leave Group",
                    bodyText: "Are you sure you want to leave this group?",
                    confirmText: "Yes, Leave Group",
                    confirmCallback: se,
                    cancelText: "Never Mind!",
                    cancelCallback: function() {
                        T(!1)
                    },
                    isOpen: S
                }), X ? N.createElement(ee.qX, {
                    type: "warning",
                    title: "You own this group!"
                }, "You can't leave your own group, but you can delete the group over in General settings.") : N.createElement("p", null, "This group not your thing anymore? No problem."), N.createElement(ee.zx, {
                    warning: !0,
                    onClick: function() {
                        T(!0)
                    },
                    loading: ae,
                    disabled: X || ae
                }, N.createElement(ee.$1, {
                    icon: ut.HE
                }), " Leave Group"))))
            };
            var bt = n(93682),
                yt = n(3163),
                xt = n(50249);
            const wt = function(e) {
                var t, n = e.group,
                    r = e.roleLocalOffset,
                    l = e.isGroupOwner,
                    a = (0, ie.pc)(),
                    o = (0, O.TH)(),
                    i = (0, O.UO)(),
                    c = N.useMemo((function() {
                        return "new" !== i.roleId && i.roleId
                    }), [i]),
                    s = (0, Q.q7)().data,
                    u = void 0 === s ? [] : s,
                    m = u.includes("permission-creator-preview"),
                    d = u.includes("permission-can-sell-products"),
                    p = (0, R.Z)(null == n ? void 0 : n.roles).sort((function(e, t) {
                        var n = e.order,
                            l = t.order;
                        return e.id === c ? (n += r) === t.order && (r > 0 ? n += 1 : n -= 1) : t.id === c && (l += r) === e.order && (r > 0 ? l += 1 : l -= 1), n < l ? -1 : 1
                    })) || [],
                    g = p.length >= Et.Mw,
                    f = null == n || null === (t = n.myMember) || void 0 === t ? void 0 : t.permissions,
                    E = p.map((function(e, t) {
                        var r, l = [],
                            o = null;
                        0 === e.order ? (l.push(N.createElement(Zt, {
                            key: "management-header"
                        }, "Management Roles")), o = N.createElement(N.Fragment, null, N.createElement(ee.$1, {
                            icon: ke.nm,
                            title: "Management Role"
                        }), " ")) : e.permissions.includes("group-instance-moderate") ? o = N.createElement(N.Fragment, null, N.createElement(ee.$1, {
                            icon: yt.U7,
                            title: "Instance Moderator Role"
                        }), " ") : e.requiresPurchase ? o = N.createElement(N.Fragment, null, N.createElement(ee.$1, {
                            icon: xt.Z,
                            title: "Paid Role"
                        }), " ") : e.defaultRole && (l.push(N.createElement(Zt, {
                            key: "default-header"
                        }, "Default Role")), o = N.createElement(N.Fragment, null, N.createElement(ee.$1, {
                            icon: bt.Z3,
                            title: "Default Role"
                        }), " ")), e.isManagementRole || e.defaultRole || null === (r = p[t - 1]) || void 0 === r || !r.isManagementRole || l.push(N.createElement(Zt, {
                            key: "member-header"
                        }, "Member Roles"));
                        var i = (0 === (null == n ? void 0 : n.memberRank) || "new" === e.id || e.order > (null == n ? void 0 : n.memberRank)) && (f.includes("*") || 0 === e.permissions.filter((function(e) {
                            return !f.includes(e)
                        })).length);
                        return l.push(a || i ? N.createElement(Nt, null, N.createElement(Ot, {
                            key: e.id,
                            to: "/home/group/".concat(n.id, "/settings/roles/").concat(e.id),
                            className: e.id === c ? "selected" : ""
                        }, o, e.name + ("new" === e.id ? " (unsaved new role)" : ""))) : N.createElement(It, {
                            key: e.id
                        }, o, e.name + ("new" === e.id ? " (unsaved new role)" : ""))), l
                    }));
                return N.createElement(N.Fragment, null, g && N.createElement(j.Z, {
                    role: "alert",
                    color: "warning"
                }, "This group has reached maximum number of roles"), N.createElement(kt, null, E, N.createElement("li", null, N.createElement(Ct, {
                    to: "/home/group/".concat(n.id, "/settings/roles/new"),
                    end: !0,
                    disabled: g
                }, "Create Role")), l && m && N.createElement("li", null, d ? N.createElement(Ct, {
                    to: "/home/group/".concat(n.id, "/settings/roles/new/paid"),
                    end: !0,
                    disabled: g
                }, "Create Paid Role") : N.createElement(ee.qX, {
                    slim: !0
                }, "Want to create a paid role? Find out more and sign up", " ", N.createElement(S.rU, {
                    to: "/home/marketplace/wallet",
                    state: {
                        redirectTo: o.pathname
                    }
                }, "in your Wallet"), "."))))
            };
            var Zt = (0, a.Z)("h5", {
                    target: "e1hiny755"
                })({
                    name: "1gttmjq",
                    styles: "margin:0;padding:0;font-size:1.2rem;font-weight:bold"
                }),
                kt = (0, a.Z)("ul", {
                    target: "e1hiny754"
                })({
                    name: "wghgqz",
                    styles: "list-style-type:none;padding:0;margin-bottom:0"
                }),
                It = (0, a.Z)("li", {
                    target: "e1hiny753"
                })({
                    name: "12guyxn",
                    styles: "padding:8px;margin-bottom:8px;border-radius:4px;background-color:#141519;opacity:0.3"
                }),
                Nt = (0, a.Z)("li", {
                    target: "e1hiny752"
                })({
                    name: "1hcx8jb",
                    styles: "padding:0"
                }),
                Ct = (0, a.Z)(S.OL, {
                    target: "e1hiny751"
                })({
                    name: "1ekamc",
                    styles: "display:inline-block;padding:5px;margin-bottom:8px;border-radius:4px;width:100%;color:inherit;background-color:#064b5c;border:#064b5c solid 2px;text-align:center;flex:1;:hover{background-color:#064b5c;border-color:#086c84;text-decoration:none;}&.active{background-color:#454b54;}"
                }),
                Ot = (0, a.Z)(Ct, {
                    target: "e1hiny750"
                })({
                    name: "hlgyoz",
                    styles: "background-color:transparent;border-color:transparent;text-align:left;:hover{background-color:#282b31;border-color:#282b31;}&.active{background-color:#454b54;border-color:#454b54;}"
                }),
                St = n(41145),
                Tt = n(62228),
                jt = n(609),
                At = n(16869),
                Mt = n(67978),
                Lt = n(81780),
                Pt = n(33073),
                Rt = n(11976);

            function Ut(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function qt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ut(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ut(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Gt = function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.permissionName,
                        r = t.permissionsMap,
                        l = t.depth,
                        a = void 0 === l ? 0 : l,
                        o = new Set;
                    if (a > 10) throw new Error("computeNestedDependedOnByFor has reached the maximum depth of ".concat(10));
                    if (n) {
                        var i = r[n];
                        i.computedDependedOnBy && (0, R.Z)(i.computedDependedOnBy).forEach((function(t) {
                            o.add(t), (0, R.Z)(e({
                                permissionName: t,
                                permissionsMap: r,
                                depth: a + 1
                            })).forEach((function(e) {
                                return o.add(e)
                            }))
                        }))
                    }
                    return o
                },
                zt = function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.permissionName,
                        r = t.permissionsMap,
                        l = t.depth,
                        a = void 0 === l ? 0 : l,
                        o = new Set;
                    if (a > 10) throw new Error("computeNestedDependsOnFor has reached the maximum depth of ".concat(10));
                    if (n) {
                        var i = r[n];
                        i.dependsOn && (0, R.Z)(i.dependsOn).forEach((function(t) {
                            o.add(t), (0, R.Z)(e({
                                permissionName: t,
                                permissionsMap: r,
                                depth: a + 1
                            })).forEach((function(e) {
                                return o.add(e)
                            }))
                        }))
                    }
                    return o
                },
                Ft = {
                    id: "new",
                    name: "",
                    description: "",
                    isSelfAssignable: !1,
                    permissions: []
                };
            const Xt = function(e) {
                var t, n, a, o, i, s, u = e.group,
                    m = e.changeRoleLocalOrder,
                    d = e.changeRoleOffset,
                    p = e.roleOffset,
                    g = e.isGroupOwner,
                    f = (0, O.s0)(),
                    E = (0, O.UO)(),
                    v = (0, N.useRef)(!0),
                    h = (0, ie.pc)(),
                    y = N.useMemo((function() {
                        var e;
                        return "new" === E.roleId ? qt(qt({}, Ft), {}, {
                            requiresPurchase: "paid" === E.newRoleType
                        }, "paid" === E.newRoleType && {
                            productPriceTokens: Rt.nk,
                            productDuration: 1,
                            productDurationType: "months"
                        }) : null == u || null === (e = u.roles) || void 0 === e ? void 0 : e.find((function(e) {
                            return e.id === E.roleId
                        }))
                    }), [u, E]),
                    x = N.useState({}),
                    w = (0, l.Z)(x, 2),
                    Z = w[0],
                    I = w[1],
                    C = N.useState({}),
                    j = (0, l.Z)(C, 2),
                    L = j[0],
                    q = j[1],
                    G = N.useState(null != y && y.defaultRole ? "permissions" : "general"),
                    z = (0, l.Z)(G, 2),
                    F = z[0],
                    B = z[1],
                    $ = N.useState(null == y ? void 0 : y.requiresTwoFactor),
                    V = (0, l.Z)($, 2),
                    W = V[0],
                    H = V[1],
                    Y = N.useState(null == y ? void 0 : y.isAddedOnJoin),
                    Q = (0, l.Z)(Y, 2),
                    K = Q[0],
                    te = Q[1],
                    ne = N.useState(null == y ? void 0 : y.isSelfAssignable),
                    le = (0, l.Z)(ne, 2),
                    ae = le[0],
                    oe = le[1],
                    se = N.useState((null == y ? void 0 : y.permissions) || []),
                    ue = (0, l.Z)(se, 2),
                    me = ue[0],
                    de = ue[1],
                    pe = N.useState(!1),
                    ge = (0, l.Z)(pe, 2),
                    fe = ge[0],
                    Ee = ge[1],
                    ve = N.useState(null),
                    he = (0, l.Z)(ve, 2),
                    be = he[0],
                    ye = he[1],
                    xe = (0, ce.mt)({
                        groupId: u.id
                    }),
                    we = xe.data,
                    Ze = xe.isLoading,
                    ke = xe.isError,
                    Ie = (0, ce.Pt)(),
                    Ne = (0, l.Z)(Ie, 2),
                    Ce = Ne[0],
                    Oe = Ne[1],
                    Se = Oe.isLoading,
                    Te = Oe.isError,
                    je = Oe.error,
                    Ae = (0, ce.hE)(),
                    Me = (0, l.Z)(Ae, 2),
                    Le = Me[0],
                    Pe = Me[1],
                    Re = Pe.isLoading,
                    Ue = Pe.isError,
                    qe = Pe.error,
                    Ge = (0, ce.VF)(),
                    ze = (0, l.Z)(Ge, 2),
                    Fe = ze[0],
                    Xe = ze[1],
                    De = Xe.isLoading,
                    _e = Xe.isError,
                    Be = Xe.error,
                    Je = (0, Mt.lZ)({
                        productId: null == y ? void 0 : y.productId
                    }, {
                        skip: !(null != y && y.productId),
                        refetchOnMountOrArgChange: !0
                    }),
                    $e = Je.data,
                    Ve = Je.isFetching,
                    We = Je.isUninitialized,
                    He = (0, At.Ul)({
                        userId: null == u ? void 0 : u.ownerId,
                        groupId: null == u ? void 0 : u.id,
                        active: !0
                    }, {
                        skip: !u || !(null != y && y.productId),
                        refetchOnMountOrArgChange: !0
                    }),
                    Ye = He.data,
                    Qe = void 0 === Ye ? [] : Ye,
                    Ke = He.isFetching,
                    et = He.isUninitialized,
                    tt = N.useMemo((function() {
                        var e;
                        return (null === (e = et ? [] : Qe) || void 0 === e ? void 0 : e.filter((function(e) {
                            var t, n = e.id,
                                r = e.active,
                                l = e.archived;
                            return r && !l && !We && (null == $e || null === (t = $e.parentListings) || void 0 === t ? void 0 : t.includes(n))
                        }))) || []
                    }), [$e, We, Qe, et]),
                    nt = Se || Re || De || Ze || Ve || Ke,
                    rt = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = {};
                        "new" === (null == y ? void 0 : y.id) && (t = qt({}, y)), e || (H(null == y ? void 0 : y.requiresTwoFactor), te(null == y ? void 0 : y.isAddedOnJoin), oe(null == y ? void 0 : y.isSelfAssignable), de((null == y ? void 0 : y.permissions) || [])), d(0), I(t)
                    };
                N.useEffect((function() {
                    rt(), B(null != y && y.defaultRole ? "permissions" : "general")
                }), [u, E]), N.useEffect((function() {
                    v.current ? v.current = !1 : ((null == y ? void 0 : y.requiresTwoFactor) !== W && I(qt(qt({}, Z), {}, {
                        requiresTwoFactor: W
                    })), (null == y ? void 0 : y.isAddedOnJoin) !== K && I(qt(qt({}, Z), {}, {
                        isAddedOnJoin: K
                    })), (null == y ? void 0 : y.isSelfAssignable) !== ae && I(qt(qt({}, Z), {}, {
                        isSelfAssignable: ae
                    })), (null == y ? void 0 : y.permissions) !== me && I(qt(qt({}, Z), {}, {
                        permissions: me
                    })))
                }), [W, K, ae, me]), N.useEffect((function() {
                    0 !== p && I(qt(qt({}, Z), {}, {
                        order: p + y.order
                    }))
                }), [p]);
                var lt = N.useMemo((function() {
                        var e = {},
                            t = {};
                        return null == we || we.forEach((function(n) {
                            e[n.name] = qt({}, n), n.dependsOn && (e[n.name].dependsOn = new Set(n.dependsOn), n.dependsOn.forEach((function(e) {
                                t[e] || (t[e] = new Set), t[e].add(n.name)
                            })))
                        })), Object.entries(t).forEach((function(t) {
                            var n = (0, l.Z)(t, 2),
                                r = n[0],
                                a = n[1];
                            e[r].computedDependedOnBy = a
                        })), e
                    }), [we]),
                    at = N.useMemo((function() {
                        return Gt({
                            permissionName: be,
                            permissionsMap: lt
                        })
                    }), [be, lt]);
                if (!y || Ze || ke) return null;
                var ot = function(e) {
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
                        I(qt(qt({}, Z), {}, (0, P.Z)({}, n, r))), q(qt(qt({}, L), {}, (0, P.Z)({}, n, e.target.checkValidity())))
                    },
                    it = function(e, t) {
                        var n;
                        if (t) {
                            var r = zt({
                                permissionName: e,
                                permissionsMap: lt
                            });
                            return de([].concat((0, R.Z)(me), [e], (0, R.Z)(r)))
                        }
                        var l = lt[e];
                        if (null !== (n = l.computedDependedOnBy) && void 0 !== n && n.size && me.some((function(e) {
                                return l.computedDependedOnBy.has(e)
                            }))) return ye(e);
                        de(me.filter((function(t) {
                            return t !== e
                        })))
                    },
                    ct = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var t, n;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("new" !== (t = qt({}, Z)).id) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 4, Ce({
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
                                        return e.next = 11, Le({
                                            groupId: u.id,
                                            roleId: y.id,
                                            data: t
                                        }).unwrap();
                                    case 11:
                                        e.sent.error || rt(!0);
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
                    st = function() {
                        var e = (0, r.Z)(k().mark((function e(t) {
                            return k().wrap((function(e) {
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
                                        return e.prev = 2, e.next = 5, Fe({
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
                                        Ee(!1), f("../roles"), e.next = 15;
                                        break;
                                    case 14:
                                        Ee(!0);
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
                    ut = 0 === y.order,
                    dt = "new" === y.id,
                    ft = y.requiresPurchase && !g,
                    Et = M({
                        groupMember: null == u ? void 0 : u.myMember,
                        permission: "group-default-role-manage"
                    }),
                    vt = M({
                        groupMember: null == u ? void 0 : u.myMember,
                        permission: "group-roles-assign"
                    }),
                    ht = y.defaultRole && !Et,
                    bt = !y.requiresPurchase && !y.defaultRole && !ut,
                    yt = !y.defaultRole && !ut,
                    xt = yt && !dt;
                return N.createElement("div", null, Ue && N.createElement(ee.qX, {
                    title: "Error updating role",
                    type: "error"
                }, "Failed to update role: ", null == qe || null === (t = qe.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), Te && N.createElement(ee.qX, {
                    title: "Error creating role",
                    type: "error"
                }, "Failed to create role: ", null == je || null === (n = je.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), N.createElement(T.Z, {
                    isOpen: fe
                }, N.createElement(ee.oI, {
                    className: "text-center"
                }, N.createElement("h4", null, "Are you sure?")), N.createElement(ee.Ao, null, N.createElement(_.Z, null, _e && N.createElement(ee.qX, {
                    title: "Error deleting role",
                    type: "error"
                }, "Failed to delete role: ", null !== (a = null == Be || null === (o = Be.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : "Unexpected error occurred"), N.createElement("p", null, "This will delete the role and all members with this role will be demoted to the lowest role. This action cannot be undone.")), N.createElement("div", {
                    className: "d-flex flex-row justify-content-md-center"
                }, N.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        st(!0)
                    },
                    loading: De,
                    expand: !0
                }, N.createElement(ee.$1, {
                    icon: U.$
                }), " Yes, Delete"), " ", N.createElement(ee.zx, {
                    onClick: function() {
                        Ee(!1)
                    },
                    disabled: De,
                    expand: !0
                }, "Cancel")))), null == y ? N.createElement("div", null, N.createElement("p", null, "Pick a role to edit.")) : N.createElement("div", null, dt ? N.createElement("h6", {
                    className: "text-center"
                }, "New", y.requiresPurchase && " Paid", " Role") : N.createElement("h6", {
                    className: "text-center"
                }, ft ? "Viewing" : "Editing", " - ", y.name), function() {
                    var e;
                    if (null == y || !y.createdAt || !y.requiresPurchase || tt.length) return null;
                    var t = "activate its associated listing";
                    return N.createElement(ee.qX, {
                        type: "info",
                        title: "No Active Listings"
                    }, "Before people can buy this role, ", g ? "you'll" : "the group owner will", " need to", " ", g && !We && null != $e && null !== (e = $e.parentListings) && void 0 !== e && e.length ? N.createElement(S.rU, {
                        to: "/home/marketplace/storefront/listings#".concat($e.parentListings[0])
                    }, t) : t, " ", "in ", g ? "your" : "their", " Store. ", g ? "You" : "The Group Owner", " can also give the product and listing their own images, descriptions and other details from there.")
                }(), !y.defaultRole && N.createElement(D.Z, null, N.createElement(re.Z, {
                    tabs: [{
                        name: "General",
                        id: "general",
                        icon: c.b7,
                        condition: !(null != y && y.defaultRole)
                    }, {
                        name: "Permissions",
                        id: "permissions",
                        icon: jt.by,
                        condition: !0
                    }],
                    selected: F,
                    onChange: function(e) {
                        B(e)
                    }
                })), N.createElement(Lt.Z, {
                    activeTab: F
                }, N.createElement(Pt.Z, {
                    tabId: "general"
                }, xt && !ft && N.createElement(N.Fragment, null, N.createElement(D.Z, null, N.createElement("h6", {
                    className: "text-center"
                }, "Change role order"), N.createElement("div", {
                    className: "d-flex flex-row justify-content-md-center"
                }, N.createElement(ee.zx, {
                    onClick: function() {
                        m({
                            offset: -1,
                            roleId: y.id
                        })
                    },
                    expand: !0
                }, N.createElement(ee.$1, {
                    icon: Tt.mT
                }), " Move Up"), " ", N.createElement(ee.zx, {
                    onClick: function() {
                        m({
                            offset: 1,
                            roleId: y.id
                        })
                    },
                    expand: !0
                }, N.createElement(ee.$1, {
                    icon: St.pt
                }), " Move Down"))), " ", " "), N.createElement(D.Z, {
                    className: "mb-2"
                }, N.createElement(X.Z, null, N.createElement(ee.II, {
                    type: "text",
                    name: "name",
                    value: null != Z.name ? Z.name : y.name,
                    onChange: ot,
                    maxLength: 64,
                    required: !0,
                    disabled: ft || y.defaultRole,
                    placeholder: "Enter Role's Name"
                }), !1 === L.name && N.createElement(J.Z, null, "Must be between 1 and 64 characters."))), N.createElement(D.Z, {
                    className: "mb-3"
                }, N.createElement(X.Z, null, N.createElement(ee.gx, {
                    type: "textarea",
                    name: "description",
                    value: null != Z.description ? Z.description : y.description,
                    onChange: ot,
                    maxLength: 256,
                    disabled: ft || y.defaultRole,
                    placeholder: "Enter Role's Description",
                    inputStyle: {
                        height: "100px"
                    }
                }), !1 === L.description && N.createElement(J.Z, null, "Must be 256 characters or less."))), yt && !y.requiresPurchase && vt && N.createElement(D.Z, {
                    className: "my-2"
                }, N.createElement(gt.Z, {
                    label: "Assign On Join",
                    value: "isAddedOnJoin",
                    defaultChecked: null != Z.isAddedOnJoin ? Z.isAddedOnJoin : y.isAddedOnJoin,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        te(t)
                    }
                }), N.createElement(pt.Z, null, "If enabled, new members will be assigned this role when they join the group. This will not affect existing members.")), bt && N.createElement(D.Z, {
                    className: "my-2"
                }, N.createElement(gt.Z, {
                    label: "Self Assignable",
                    value: "isSelfAssignable",
                    defaultChecked: ae,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        oe(t)
                    }
                }), N.createElement(pt.Z, null, "Allows members of the group to assign this role to themselves.")), N.createElement(D.Z, {
                    className: "my-3"
                }, N.createElement(gt.Z, {
                    label: "Requires 2FA",
                    value: "requiresTwoFactor",
                    defaultChecked: W,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        return H(t)
                    }
                }), N.createElement(pt.Z, null, "Requires members to have 2FA before permissions apply.")), y.requiresPurchase && dt && N.createElement(N.Fragment, null, N.createElement(D.Z, null, N.createElement(X.Z, null, N.createElement(J.Z, {
                    for: "productPriceTokens"
                }, "Credits", "forevers" === y.productDurationType ? "" : " per ".concat(1 === y.productDuration ? y.productDurationType.replace(/s$/, "") : "".concat(y.productDuration, " ").concat(y.productDurationType)))), N.createElement(X.Z, null, N.createElement(ee.II, {
                    type: "number",
                    name: "productPriceTokens",
                    value: null != Z.productPriceTokens ? Z.productPriceTokens : y.productPriceTokens,
                    onChange: ot,
                    required: !0,
                    min: Rt.nk,
                    max: Rt.A1
                }), !1 === L.productPriceTokens && N.createElement(J.Z, null, "Must be a whole number between ", N.createElement(ee.b5, null), Rt.nk.toLocaleString(), " and ", N.createElement(ee.b5, null), Rt.A1.toLocaleString(), "."))), N.createElement(D.Z, {
                    className: "my-2"
                }, N.createElement(gt.Z, {
                    label: "Bypass Join Rules",
                    value: "productGroupAccess",
                    defaultChecked: null != Z.productGroupAccess ? Z.productGroupAccess : y.productGroupAccess,
                    onChangeCallback: function(e) {
                        var t, n, r = e.checked;
                        t = r, n = qt(qt({}, Z), {}, {
                            productGroupAccess: t
                        }), t || (n.productGroupAccessRemove = void 0), I(n)
                    }
                }), N.createElement(pt.Z, null, "If enabled, any user in VRChat can purchase this role and be added to the group, no matter what the group's join rules are.")), (null != Z.productGroupAccess ? Z.productGroupAccess : y.productGroupAccess) && N.createElement(D.Z, {
                    className: "my-2"
                }, N.createElement(gt.Z, {
                    label: "Remove Members After Expiration",
                    value: "productGroupAccessRemove",
                    defaultChecked: null != Z.productGroupAccessRemove ? Z.productGroupAccessRemove : y.productGroupAccessRemove,
                    onChangeCallback: function(e) {
                        var t, n = e.checked;
                        t = n, I(qt(qt({}, Z), {}, {
                            productGroupAccessRemove: t
                        }))
                    }
                }), N.createElement(pt.Z, null, "If enabled, group members with this role are removed from the group entirely when their subscription ends. Note that this will remove any member whose subscription ends, whether they bought their way in or not."))), y.productId && N.createElement("p", null, N.createElement("small", null, g ? "You" : "The Group Owner", " can manage details and subscription behaviour of this role's", " ", N.createElement(S.rU, {
                    to: "/home/marketplace/storefront/products#".concat(y.productId)
                }, "associated product"), !We && null != $e && null !== (i = $e.parentListings) && void 0 !== i && i.length ? N.createElement(N.Fragment, null, ", and the details, price and availability of the product's", " ", N.createElement(S.rU, {
                    to: "/home/marketplace/storefront/listings#".concat($e.parentListings[0])
                }, "associated listing"), " ") : " ", g ? "in your Store" : "in their Store", "."))), N.createElement(Pt.Z, {
                    tabId: "permissions"
                }, ke && N.createElement(ee.qX, {
                    title: "Error",
                    type: "error"
                }, "There was an error loading permissions."), (null == y ? void 0 : y.defaultRole) && N.createElement(N.Fragment, null, N.createElement("p", null, y.description), N.createElement("hr", null)), ut || ht ? N.createElement("p", null, "You can't edit the ", ut ? "Group Owner" : "default", " role.", " ", ut ? "It must always have all" : "You lack the required", " permissions.") : N.createElement("div", null, we.filter((function(e) {
                    var t;
                    return h || (!y.requiresPurchase || !e.isManagementPermission) && e.allowedToAdd && (0 === (null == u ? void 0 : u.memberRank) || (null == u || null === (t = u.myMember) || void 0 === t ? void 0 : t.permissions.includes(e.name)))
                })).map((function(e) {
                    var t = e.name,
                        n = lt[t];
                    return N.createElement("div", {
                        key: n.name,
                        className: "mb-2"
                    }, N.createElement(gt.Z, {
                        label: n.displayName,
                        value: n.name,
                        defaultChecked: me.includes(n.name),
                        disabled: y.requiresPurchase && !g,
                        onChangeCallback: function(e) {
                            var t = e.checked;
                            it(n.name, t)
                        }
                    }), (n.help || n.dependsOn) && N.createElement(pt.Z, null, n.help, n.help && n.dependsOn && " ", n.dependsOn && N.createElement(N.Fragment, null, "Requires", " ", (0, R.Z)(n.dependsOn).map((function(e) {
                        return "“".concat(lt[e].displayName || e, "”")
                    })).join(", "), ".")))
                }))))), !ht && (ft ? N.createElement("p", null, N.createElement("small", null, "Only the Group Owner can edit paid roles.")) : N.createElement("div", {
                    className: "d-flex flex-row align-content-center mt-1\n                  ".concat(dt || ut || y.defaultRole ? "justify-content-end" : "justify-content-between")
                }, !dt && !ut && !y.defaultRole && N.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        st(!1)
                    },
                    disabled: nt
                }, N.createElement(A.Z, {
                    icon: U.$
                }), " Delete"), N.createElement("div", {
                    className: "d-flex flex-row"
                }, N.createElement(ee.zx, {
                    neutral: !0,
                    onClick: function() {
                        rt()
                    },
                    disabled: nt || 0 === Object.keys(Z).length
                }, N.createElement(A.Z, {
                    icon: b.NB
                }), " ", dt ? "Clear" : "Cancel"), " ", N.createElement(ee.zx, {
                    loading: nt && !De,
                    disabled: nt || 0 === Object.keys(Z).length || Object.values(L).includes(!1),
                    onClick: ct
                }, N.createElement(A.Z, {
                    icon: mt.r6
                }), " Save"))))), N.createElement(ee.sm, {
                    isOpen: !!be,
                    confirmCallback: function() {
                        return de(me.filter((function(e) {
                            return e !== be && !at.has(e)
                        }))), void ye(null)
                    },
                    cancelCallback: function() {
                        return ye(null)
                    },
                    headerText: "Role Permission Dependencies",
                    confirmText: "Turn Off",
                    cancelText: "Go Back"
                }, N.createElement("div", null, N.createElement("p", null, "Turning off “", null === (s = lt[be]) || void 0 === s ? void 0 : s.displayName, "” will also turn off permissions that currently require it:"), N.createElement("ul", null, (0, R.Z)(at).filter((function(e) {
                    return me.includes(e)
                })).map((function(e) {
                    var t = lt[e];
                    return N.createElement("li", {
                        key: e
                    }, "“", t.displayName, "”")
                }))), N.createElement("strong", null, "Are you sure you want to turn this off?"))))
            };
            var Dt = n(98185);
            const _t = function(e) {
                var t = e.group,
                    n = (0, ie.pc)(),
                    r = (0, O.TH)(),
                    a = N.useState(0),
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
                N.useEffect((function() {
                    c(0)
                }), [r]);
                return N.createElement(Dt.Z, {
                    loading: !t.roles
                }, s && N.createElement(ee.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: s.message
                }), N.createElement(ee.oI, null, N.createElement("h4", {
                    className: "text-center"
                }, "Roles")), N.createElement(ee.Ao, null, N.createElement(Bt, null, N.createElement(Jt, null, N.createElement(wt, {
                    group: t,
                    roleLocalOffset: i,
                    isGroupOwner: d
                })), N.createElement(Xt, {
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
            var Bt = (0, a.Z)(ee.X2, {
                    target: "eaqb3yw1"
                })({
                    name: "ikx90a",
                    styles: "display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:stretch;>*{flex:1;}"
                }),
                Jt = (0, a.Z)("div", {
                    target: "eaqb3yw0"
                })({
                    name: "1jwryq8",
                    styles: "margin-right:15px"
                });

            function $t(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Vt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $t(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $t(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Wt = N.lazy((function() {
                    return Promise.all([n.e(8744), n.e(430), n.e(6681), n.e(4444), n.e(9908), n.e(229), n.e(2045)]).then(n.bind(n, 52045))
                })),
                Ht = [{
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
            const Yt = function(e) {
                var t, n, a, o, i, c, s, u, m, d, p, g, f, E, v, h = e.group,
                    b = (0, Q.IB)().data,
                    y = null !== (t = null == h ? void 0 : h.transferTargetId) && void 0 !== t ? t : null,
                    Z = (0, C.I0)(),
                    S = (0, O.s0)(),
                    j = N.useState({
                        name: h.name,
                        shortCode: h.shortCode,
                        description: h.description,
                        isSearchable: h.isSearchable,
                        joinState: h.joinState,
                        language: h.languages,
                        rules: h.rules
                    }),
                    le = (0, l.Z)(j, 2),
                    ae = le[0],
                    oe = le[1],
                    ie = N.useState(!1),
                    se = (0, l.Z)(ie, 2),
                    ue = se[0],
                    me = se[1],
                    de = N.useState(!1),
                    pe = (0, l.Z)(de, 2),
                    ge = pe[0],
                    fe = pe[1],
                    Ee = N.useState(!1),
                    ve = (0, l.Z)(Ee, 2),
                    he = ve[0],
                    be = ve[1],
                    ye = N.useState(!1),
                    xe = (0, l.Z)(ye, 2),
                    we = xe[0],
                    ke = xe[1],
                    Ne = N.useState(null),
                    Ce = (0, l.Z)(Ne, 2),
                    Oe = Ce[0],
                    Te = Ce[1],
                    je = N.useState(!1),
                    Ae = (0, l.Z)(je, 2),
                    Me = Ae[0],
                    Le = Ae[1],
                    Pe = N.useState(!1),
                    Re = (0, l.Z)(Pe, 2),
                    qe = Re[0],
                    Ge = Re[1],
                    ze = N.useState(null),
                    Xe = (0, l.Z)(ze, 2),
                    De = Xe[0],
                    _e = Xe[1],
                    Be = N.useState(!1),
                    Je = (0, l.Z)(Be, 2),
                    $e = Je[0],
                    Ve = Je[1],
                    We = N.useState(!1),
                    He = (0, l.Z)(We, 2),
                    Ye = He[0],
                    Qe = He[1],
                    Ke = N.useState(!1),
                    et = (0, l.Z)(Ke, 2),
                    tt = et[0],
                    nt = et[1],
                    rt = N.useState(null),
                    lt = (0, l.Z)(rt, 2),
                    ot = lt[0],
                    it = lt[1],
                    ct = N.useState(null),
                    st = (0, l.Z)(ct, 2),
                    ut = (st[0], st[1]),
                    mt = N.useState(!1),
                    dt = (0, l.Z)(mt, 2),
                    pt = dt[0],
                    gt = dt[1],
                    ft = N.useState(null !== (n = h.languages) && void 0 !== n ? n : []),
                    Et = (0, l.Z)(ft, 2),
                    vt = Et[0],
                    bt = Et[1],
                    yt = N.useState(null !== (a = h.links) && void 0 !== a ? a : []),
                    xt = (0, l.Z)(yt, 2),
                    wt = xt[0],
                    Zt = xt[1],
                    kt = N.useState(null),
                    It = (0, l.Z)(kt, 2),
                    Nt = It[0],
                    Ct = It[1],
                    Ot = N.useState(null),
                    St = (0, l.Z)(Ot, 2),
                    Tt = (St[0], St[1]),
                    jt = (0, C.v9)((function(e) {
                        return e.currentUser.isMod
                    })),
                    At = (null == h ? void 0 : h.ownerId) === (null == b ? void 0 : b.id),
                    Mt = (0, ce.mA)(),
                    Lt = (0, l.Z)(Mt, 2),
                    Pt = Lt[0],
                    Rt = Lt[1],
                    Ut = Rt.isError,
                    qt = Rt.isLoading,
                    Gt = Rt.error,
                    zt = (0, ce.CL)(),
                    Ft = (0, l.Z)(zt, 2),
                    Xt = Ft[0],
                    Dt = Ft[1],
                    Bt = Dt.isError,
                    Jt = Dt.isLoading,
                    $t = Dt.error,
                    Yt = Dt.isSuccess,
                    Kt = (0, Q.q7)().data,
                    en = void 0 === Kt ? [] : Kt,
                    tn = (0, W.y)().data,
                    nn = null !== (o = null == tn || null === (i = tn.constants) || void 0 === i || null === (i = i.LANGUAGE) || void 0 === i ? void 0 : i.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== o ? o : V.O,
                    rn = [{
                        value: "none",
                        label: "none"
                    }].concat((0, R.Z)(Object.keys(nn).map((function(e) {
                        return {
                            value: e,
                            label: nn[e]
                        }
                    })))),
                    ln = (null == De || null === (c = De.user) || void 0 === c ? void 0 : c.id) && (null == h ? void 0 : h.id) && null === y,
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
                    mn = null !== y,
                    dn = (0, K.GR)(y, {
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
                    yn = hn[1],
                    xn = (yn.data, yn.isFetching),
                    wn = yn.isError,
                    Zn = yn.error,
                    kn = (0, ce.rq)(),
                    In = (0, l.Z)(kn, 2),
                    Nn = In[0],
                    Cn = In[1],
                    On = (Cn.data, Cn.isFetching),
                    Sn = Cn.isError,
                    Tn = Cn.error;
                N.useEffect((function() {
                    Yt ? S("/home/groups") : (Ve(!1), me(!1))
                }), [Jt]), N.useEffect((function() {
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
                        Te(e), be(!1), fe(!1), Le(!0)
                    }
                    var t;
                    !cn && he && sn && (ke(!1), be(!1), _e(null), Z((0, Y.d)({
                        title: "Error Validating Group Transfer",
                        icon: x.eH,
                        message: "".concat(null == un || null === (t = un.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                        color: "error",
                        timeout: 3e3
                    })))
                }), [he, De, cn, sn, on]), N.useEffect((function() {
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
                var jn = function(e) {
                        var t = e.target.name,
                            n = "checkbox" === e.target.getAttribute("type") ? e.target.checked : e.target.value;
                        oe(Vt(Vt({}, ae), {}, (0, P.Z)({}, t, "shortCode" === t ? n.toUpperCase() : n)))
                    },
                    An = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        ot && (ae.bannerId = ot), Nt && (ae.iconId = Nt), Pt({
                                            groupId: h.id,
                                            data: Vt({}, ae)
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
                    Mn = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var t, n, r;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return Ge(!0), e.prev = 1, e.next = 4, bn({
                                            groupId: h.id,
                                            transferTargetId: null == De || null === (t = De.user) || void 0 === t ? void 0 : t.id
                                        }).unwrap();
                                    case 4:
                                        wn && (Ge(!1), Le(!1), _e(null), Z((0, Y.d)({
                                            title: "Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null == Zn || null === (n = Zn.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 6e3
                                        }))), wn || Z((0, Y.d)({
                                            title: "Group Transfer Initiated",
                                            icon: w.f8,
                                            color: "success",
                                            timeout: 6e3
                                        })), Ge(!1), Le(!1), e.next = 16;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(1), Ge(!1), Le(!1), _e(null), Z((0, Y.d)({
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
                    Ln = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var t, n, r;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return Qe(!0), e.prev = 1, e.next = 4, Nn({
                                            groupId: h.id,
                                            transferTargetId: null == De || null === (t = De.user) || void 0 === t ? void 0 : t.id
                                        }).unwrap();
                                    case 4:
                                        Qe(!1), Sn && Z((0, Y.d)({
                                            title: "Cancel Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null == Tn || null === (n = Tn.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
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
                                        Ve(!0), Xt({
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
                    Rn = function(e) {
                        Zt(e), oe(Vt(Vt({}, ae), {}, {
                            links: e
                        }))
                    },
                    Un = function(e, t) {
                        var n = (0, R.Z)(vt);
                        n[e] = t, n = n.filter((function(e) {
                            return "none" !== e
                        })), bt(n), oe(Vt(Vt({}, ae), {}, {
                            languages: n
                        }))
                    },
                    qn = en.includes("permission-user-gallery"),
                    Gn = en.includes("permission-user-icons"),
                    zn = qt || Jt || xn || On;
                return N.createElement("div", null, N.createElement(X.Z, {
                    className: "mt-4"
                }, N.createElement(re.Z, {
                    tabs: [{
                        name: "General",
                        to: "/home/group/".concat(h.id, "/settings"),
                        end: !0,
                        icon: F.Kb,
                        condition: jt || M({
                            groupMember: null == h ? void 0 : h.myMember,
                            permission: "group-data-manage"
                        })
                    }, {
                        name: "My Membership",
                        to: jt || M({
                            groupMember: null == h ? void 0 : h.myMember,
                            permission: "group-data-manage"
                        }) ? "me" : "/home/group/".concat(h.id, "/settings"),
                        icon: z.xK,
                        condition: null == h ? void 0 : h.myMember
                    }, {
                        name: "Roles",
                        to: "roles",
                        icon: G.aC,
                        condition: jt || M({
                            groupMember: null == h ? void 0 : h.myMember,
                            permission: "group-roles-manage"
                        })
                    }, {
                        name: "Logs",
                        to: "logs",
                        icon: q.tx,
                        condition: jt || M({
                            groupMember: null == h ? void 0 : h.myMember,
                            permission: "group-audit-view"
                        })
                    }]
                })), N.createElement(O.Z5, null, N.createElement(O.AW, {
                    path: "/",
                    element: jt || M({
                        groupMember: null == h ? void 0 : h.myMember,
                        permission: "group-data-manage"
                    }) ? N.createElement(N.Fragment, null, N.createElement(D.Z, null, N.createElement(T.Z, {
                        isOpen: tt,
                        className: (0, I.iv)({
                            name: "1ul0gzp",
                            styles: "max-width:1500px!important"
                        })
                    }, N.createElement(_.Z, null, N.createElement(Wt, {
                        isSelector: !0,
                        selectedCallback: function(e, t) {
                            it(e), ut(t), nt(!1)
                        },
                        selectedId: null != ot ? ot : "",
                        activeTab: "photos"
                    })), N.createElement(B.Z, null, N.createElement(ee.zx, {
                        onClick: function() {
                            nt(!1), Z((0, H.b9)())
                        }
                    }, "Cancel"))), N.createElement(T.Z, {
                        isOpen: pt,
                        className: (0, I.iv)({
                            name: "1ul0gzp",
                            styles: "max-width:1500px!important"
                        })
                    }, N.createElement(_.Z, null, N.createElement(Wt, {
                        isSelector: !0,
                        selectedCallback: function(e, t) {
                            Ct(e), Tt(t), gt(!1)
                        },
                        selectedId: null != Nt ? Nt : "",
                        activeTab: "icons"
                    })), N.createElement(B.Z, null, N.createElement(ee.zx, {
                        onClick: function() {
                            gt(!1), Z((0, H.LC)())
                        }
                    }, "Cancel"))), N.createElement(X.Z, null, Ut ? N.createElement(ee.qX, {
                        type: "error",
                        title: "An error occurred",
                        message: (null == Gt || null === (u = Gt.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message) || "Something went wrong updating the group"
                    }) : null, N.createElement(ee.oI, null, N.createElement("h4", {
                        className: "text-center"
                    }, "General")), N.createElement(ee.Ao, null, N.createElement("div", null, N.createElement(D.Z, {
                        className: "mb-1"
                    }, N.createElement(X.Z, null, N.createElement(J.Z, {
                        for: "name"
                    }, "Name")), N.createElement(X.Z, null, N.createElement(ee.II, {
                        type: "text",
                        name: "name",
                        className: "full-width",
                        value: ae.name,
                        onChange: jn
                    }))), N.createElement(D.Z, {
                        className: "mb-1"
                    }, N.createElement(X.Z, null, N.createElement(J.Z, {
                        for: "shortCode"
                    }, "Short Code (3-6 letters/numbers)")), N.createElement(X.Z, null, N.createElement(ee.II, {
                        type: "text",
                        name: "shortCode",
                        className: "full-width",
                        value: ae.shortCode,
                        maxLength: 6,
                        onChange: jn
                    }))), N.createElement(D.Z, {
                        className: "mb-1"
                    }, N.createElement(X.Z, null, N.createElement(J.Z, {
                        for: "description"
                    }, "Description")), N.createElement(X.Z, null, N.createElement(Qt, {
                        name: "description",
                        className: "full-width",
                        value: null !== (m = ae.description) && void 0 !== m ? m : "",
                        onChange: jn
                    }))), N.createElement(D.Z, null, N.createElement(X.Z, null, N.createElement(J.Z, {
                        for: "description"
                    }, "Rules")), N.createElement(X.Z, null, N.createElement(Qt, {
                        name: "rules",
                        className: "full-width",
                        value: null !== (d = ae.rules) && void 0 !== d ? d : "",
                        onChange: jn
                    }))), N.createElement("div", null, !1, N.createElement(D.Z, {
                        className: "mt-2"
                    }, N.createElement(X.Z, null, N.createElement(J.Z, {
                        for: "isJoinable"
                    }, "Open to New Members")), N.createElement(X.Z, null, N.createElement(ee.Lt, {
                        onChange: function(e) {
                            oe(Vt(Vt({}, ae), {}, {
                                joinState: e
                            }))
                        },
                        value: null !== (p = ae.joinState) && void 0 !== p ? p : "",
                        name: "joinState",
                        options: Ht
                    }))), N.createElement("br", null), N.createElement(D.Z, {
                        className: "mt-2"
                    }, N.createElement(X.Z, null, N.createElement(J.Z, {
                        for: "languages"
                    }, "Languages")), N.createElement(X.Z, null, vt.length >= 0 && N.createElement(ee.Lt, {
                        onChange: function(e) {
                            Un(0, e)
                        },
                        value: null !== (g = null == vt ? void 0 : vt[0]) && void 0 !== g ? g : "none",
                        name: "languages",
                        options: rn,
                        className: "mb-1"
                    }), vt.length >= 1 && N.createElement(ee.Lt, {
                        onChange: function(e) {
                            Un(1, e)
                        },
                        value: null !== (f = null == vt ? void 0 : vt[1]) && void 0 !== f ? f : "none",
                        name: "languages",
                        options: rn,
                        className: "mb-1"
                    }), vt.length >= 2 && N.createElement(ee.Lt, {
                        onChange: function(e) {
                            Un(2, e)
                        },
                        value: null !== (E = null == vt ? void 0 : vt[2]) && void 0 !== E ? E : "none",
                        name: "languages",
                        options: rn,
                        className: "mb-1"
                    }))), N.createElement("br", null), N.createElement(D.Z, {
                        className: "mt-2"
                    }, N.createElement(X.Z, null, N.createElement(J.Z, {
                        for: "links"
                    }, "Group Links")), N.createElement(X.Z, null, N.createElement(Fe, {
                        groupBioLinks: wt,
                        callback: Rn,
                        index: 0
                    }), N.createElement(Fe, {
                        groupBioLinks: wt,
                        callback: Rn,
                        index: 1
                    }), N.createElement(Fe, {
                        groupBioLinks: wt,
                        callback: Rn,
                        index: 2
                    }))), N.createElement("br", null), N.createElement(D.Z, null, N.createElement(X.Z, null), N.createElement(X.Z, null, ot && N.createElement("div", null, N.createElement("span", null, "Replacing banner with: ", ot), N.createElement("br", null), N.createElement(ee.zx, {
                        onClick: function() {
                            it(null), ut(null)
                        }
                    }, "Clear banner selection")), Nt && N.createElement("div", null, N.createElement("span", null, "Replacing icon with: ", Nt), N.createElement("br", null), N.createElement(ee.zx, {
                        onClick: function() {
                            Tt(null), Ct(null)
                        }
                    }, "Clear icon selection")))), N.createElement("br", null), N.createElement(D.Z, null, N.createElement(X.Z, null), N.createElement(X.Z, null, qn && N.createElement(ee.zx, {
                        color: "primary",
                        onClick: function() {
                            nt(!0)
                        }
                    }, "Update Group Banner"), " ", Gn && N.createElement(ee.zx, {
                        color: "primary",
                        onClick: function() {
                            gt(!0)
                        }
                    }, "Update Group Icon")))), N.createElement(D.Z, {
                        className: "mt-4"
                    }, N.createElement(ee.zx, {
                        neutral: !0,
                        onClick: An,
                        disabled: zn,
                        loading: zn
                    }, "Save")))))), At && !y && N.createElement(N.Fragment, null, N.createElement(Ze, {
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
                    }), (null == De ? void 0 : De.user) && Me && N.createElement(Ue, {
                        group: h,
                        validity: Oe,
                        prospectiveNewOwner: De,
                        onTransfer: function() {
                            return Mn()
                        },
                        onCancel: function() {
                            return Le(!1)
                        },
                        isOpen: Me,
                        isTransferring: qe
                    }), N.createElement(Se, {
                        group: h,
                        onButtonClick: function() {
                            return fe(!0)
                        },
                        isLoading: zn || !1
                    })), At && y && N.createElement(Ie, {
                        group: h,
                        onClickCallback: function() {
                            return Ln()
                        },
                        isDeleting: Ye || !1
                    }), At && N.createElement(N.Fragment, null, Bt ? N.createElement(ee.qX, {
                        type: "error",
                        title: "Could not delete group",
                        message: (null == $t || null === (v = $t.data) || void 0 === v || null === (v = v.error) || void 0 === v ? void 0 : v.message) || "Something went wrong deleting the group"
                    }) : null, N.createElement(ee.oI, {
                        className: "mt-2"
                    }, N.createElement("h4", {
                        className: "text-center"
                    }, "Delete Group")), N.createElement(ee.Ao, null, N.createElement("p", null, "You can delete this group as long as it has no other members. This cannot be undone."), N.createElement(T.Z, {
                        isOpen: ue
                    }, N.createElement($.Z, {
                        close: N.createElement(te.Z, {
                            onClick: function() {
                                me(!1)
                            }
                        })
                    }, N.createElement("h4", null, "Delete Group?")), N.createElement(_.Z, {
                        className: (0, I.iv)({
                            name: "1bpq7li",
                            styles: "padding:30px;padding-top:0"
                        })
                    }, $e ? N.createElement("div", {
                        className: "full-width text-center"
                    }, N.createElement(ne.Z, null)) : N.createElement("div", {
                        className: (0, I.iv)({
                            name: "pc0kie",
                            styles: ">*{margin-top:15px;}"
                        })
                    }, N.createElement(D.Z, null, N.createElement("span", {
                        className: "full-width text-center"
                    }, "Hey! This can't be undone! Only do this if you ", N.createElement("strong", null, "KNOW"), " what you're doing!")), N.createElement(D.Z, null, N.createElement(ee.zx, {
                        onClick: Pn,
                        danger: !0,
                        className: "full-width"
                    }, "DELETE IT!")), N.createElement(D.Z, null, N.createElement(ee.zx, {
                        className: "full-width",
                        onClick: function() {
                            me(!1)
                        }
                    }, "Get me outta here!"))))), N.createElement(X.Z, null, N.createElement(ee.zx, {
                        danger: !0,
                        onClick: function() {
                            me(!0)
                        },
                        disabled: zn,
                        loading: zn
                    }, N.createElement(A.Z, {
                        icon: U.$
                    }), " Delete Group"))))) : N.createElement(ht, {
                        groupId: null == h ? void 0 : h.id
                    })
                }), N.createElement(O.AW, {
                    path: "/me",
                    element: null != h && h.myMember ? N.createElement(ht, {
                        groupId: null == h ? void 0 : h.id
                    }) : N.createElement(L.Z, {
                        to: ".."
                    })
                }), N.createElement(O.AW, {
                    path: "/roles/:roleId?/:newRoleType?",
                    element: jt || M({
                        groupMember: null == h ? void 0 : h.myMember,
                        permission: "group-roles-manage"
                    }) ? N.createElement(_t, {
                        group: h
                    }) : N.createElement(L.Z, {
                        to: ".."
                    })
                }), N.createElement(O.AW, {
                    path: "/logs",
                    element: jt || M({
                        groupMember: null == h ? void 0 : h.myMember,
                        permission: "group-audit-view"
                    }) ? N.createElement(at, {
                        group: h
                    }) : N.createElement(L.Z, {
                        to: ".."
                    })
                })))
            };
            var Qt = (0, a.Z)(ee.gx, {
                    target: "e3uj5bu0"
                })({
                    name: "1vp1ylf",
                    styles: ">textarea{height:200px;}"
                }),
                Kt = n(50347);
            const en = function(e) {
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
                return N.createElement(tn, null, N.createElement(Kt.Z, {
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
                }), N.createElement(nn, null, n && N.createElement("span", null, N.createElement(A.Z, {
                    icon: ke.nm,
                    width: 25
                }), " "), N.createElement("h4", null, b)))
            };
            var tn = (0, a.Z)("div", {
                    target: "e1ml2klq1"
                })({
                    name: "9flrez",
                    styles: "position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;>div:first-of-type{margin:0;border-bottom-right-radius:0;border-bottom-left-radius:0;}"
                }),
                nn = (0, a.Z)("div", {
                    target: "e1ml2klq0"
                })({
                    name: "7foox8",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:center;border:4px solid #252a30;background-color:#252a30;text-align:center;width:100%;border-bottom-right-radius:8px;border-bottom-left-radius:8px"
                }),
                rn = n(27003),
                ln = n(53359);

            function an(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function on(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? an(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : an(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const cn = function(e) {
                var t, n, r, a, o, c, s = e.groupMember,
                    u = e.onEditFinished,
                    m = void 0 === u ? function() {} : u,
                    d = e.closeCallback,
                    p = void 0 === d ? function() {} : d,
                    g = e.memberRank,
                    f = e.memberListPage,
                    E = N.useState(!1),
                    v = (0, l.Z)(E, 2),
                    h = v[0],
                    b = v[1],
                    y = N.useState(!1),
                    x = (0, l.Z)(y, 2),
                    w = x[0],
                    Z = x[1],
                    k = N.useState({}),
                    I = (0, l.Z)(k, 2),
                    C = I[0],
                    O = I[1],
                    S = (0, ce.r5)({
                        groupId: s.groupId
                    }),
                    T = S.data,
                    j = S.isLoading,
                    L = S.isError,
                    R = S.error,
                    U = (0, ce.xm)({
                        groupId: s.groupId,
                        userId: s.userId
                    }),
                    q = U.data,
                    G = U.isLoading,
                    z = U.isError,
                    F = U.error,
                    X = (0, ce.uX)(),
                    D = (0, l.Z)(X, 2),
                    _ = D[0],
                    B = (D[1].isLoading, (0, ce.dl)()),
                    $ = (0, l.Z)(B, 2),
                    V = $[0],
                    W = ($[1].isLoading, (0, ce.LA)()),
                    H = (0, l.Z)(W, 2),
                    Y = H[0],
                    Q = (H[1].isLoading, (0, ce.FW)()),
                    K = (0, l.Z)(Q, 2),
                    te = K[0],
                    ne = (K[1].isLoading, (0, ce.l5)()),
                    re = (0, l.Z)(ne, 2),
                    le = re[0],
                    ae = (re[1].isLoading, (0, ie.pc)()),
                    oe = j || G,
                    se = z || L;
                if (N.useEffect((function() {
                        m()
                    }), []), se) return N.createElement(N.Fragment, null, N.createElement(ee.oI, null, N.createElement("h4", null, "Managing Member")), N.createElement(ee.Ao, null, N.createElement("div", null, N.createElement("div", {
                    className: "text-center mb-4"
                }, N.createElement(A.Z, {
                    icon: ln.faTriangleExclamation,
                    size: "xl"
                })), N.createElement("h4", {
                    className: "text-center mb-4"
                }, "We have encountered a problem."), R && N.createElement("p", {
                    className: "text-center text-danger"
                }, null == R || null === (o = R.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message), F && N.createElement("p", {
                    className: "text-center text-danger"
                }, null == F || null === (c = F.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message))));
                if (oe) return null;
                var ue = function() {
                        b(!h)
                    },
                    me = function() {
                        Z(!w)
                    };
                if (null == q) return N.createElement("div", null);
                var de = M({
                        groupMember: null == T ? void 0 : T.myMember,
                        permission: "group-members-manage"
                    }),
                    pe = M({
                        groupMember: null == T ? void 0 : T.myMember,
                        permission: "group-roles-assign"
                    }),
                    ge = M({
                        groupMember: null == T ? void 0 : T.myMember,
                        permission: "group-bans-manage"
                    }),
                    fe = (null == T || null === (t = T.myMember) || void 0 === t ? void 0 : t.id) === q.id,
                    Ee = null != C.managerNotes ? C.managerNotes : q.managerNotes,
                    ve = (null == q ? void 0 : q.roleIds) || [],
                    he = ve.map((function(e) {
                        var t = T.roles.find((function(t) {
                                return t.id === e
                            })),
                            n = (null == t ? void 0 : t.order) > (null == T ? void 0 : T.memberRank) && ((null == t ? void 0 : t.isSelfAssignable) && 0 !== (null == t ? void 0 : t.order) || pe);
                        return t ? N.createElement(N.Fragment, null, N.createElement(dn, {
                            key: t.id,
                            roleid: t.id,
                            canInteract: n,
                            onClick: function() {
                                n && function(e) {
                                    T.roles.find((function(t) {
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
                    be = T.roles.filter((function(e) {
                        return !ve.includes(e.id) && (0 !== (null == e ? void 0 : e.order) && ((null == e || !e.requiresPurchase) && ((null == e || !e.defaultRole) && (!(!pe && !ae) || !(!fe || !e.isSelfAssignable)))))
                    })).map((function(e) {
                        var t = (null == e ? void 0 : e.order) > (null == T ? void 0 : T.memberRank) && ((null == e ? void 0 : e.isSelfAssignable) && 0 !== (null == e ? void 0 : e.order) || pe);
                        return N.createElement(dn, {
                            key: e.id,
                            roleid: e.id,
                            canInteract: t,
                            onClick: function() {
                                var n;
                                t && (n = e.id, T.roles.find((function(e) {
                                    return e.id === n
                                })) && te({
                                    groupId: q.groupId,
                                    userId: q.userId,
                                    roleId: n
                                }))
                            }
                        }, e.name)
                    }));
                return N.createElement(Dt.Z, {
                    loading: oe
                }, N.createElement(ee.oI, null, N.createElement("h4", null, "Managing ", null == s || null === (n = s.user) || void 0 === n ? void 0 : n.displayName)), N.createElement(ee.Ao, null, w && N.createElement("div", null, N.createElement("h4", {
                    className: "text-center mb-4"
                }, "Are you sure you want to kick ", null == q || null === (r = q.user) || void 0 === r ? void 0 : r.displayName, "?!?!"), N.createElement(ee.X2, null, N.createElement(ee.zx, {
                    warning: !0,
                    onClick: function() {
                        me(), Y({
                            groupId: q.groupId,
                            userId: q.userId,
                            fromPage: f
                        }), p()
                    },
                    expand: !0
                }, N.createElement(ee.$1, {
                    icon: rn.uM
                }), " Get 'em outta here!"), " ", N.createElement(ee.zx, {
                    neutral: !0,
                    onClick: me,
                    expand: !0
                }, "Cancel"))), h && N.createElement("div", null, N.createElement("h4", {
                    className: "text-center mb-4"
                }, "Are you sure you want to ban ", null == q || null === (a = q.user) || void 0 === a ? void 0 : a.displayName, "?!?!"), N.createElement(ee.X2, null, N.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        ue(), V({
                            groupId: q.groupId,
                            userId: q.userId,
                            fromPage: f
                        }), p()
                    },
                    expand: !0
                }, N.createElement(ee.$1, {
                    icon: i.JH
                }), " And stay out!"), " ", N.createElement(ee.zx, {
                    neutral: !0,
                    onClick: ue,
                    expand: !0
                }, "Cancel"))), !(w || h) && N.createElement(N.Fragment, null, (pe || ae || fe) && N.createElement(sn, null, N.createElement(un, null, N.createElement("h6", null, "Available Roles"), N.createElement(mn, null, be)), N.createElement(pn, null, N.createElement("h6", null, "Assigned Roles"), N.createElement(gn, null, he))), N.createElement(ee.X2, null, (de || ae) && N.createElement("div", {
                    className: "setting mb-2 flex-1"
                }, N.createElement(J.Z, null, "Notes"), N.createElement(ee.gx, {
                    name: "managerNotes",
                    className: "notes-input full-width",
                    value: Ee,
                    onChange: function(e) {
                        var t = e.target.name,
                            n = "checkbox" === e.target.getAttribute("type") ? e.target.checked : e.target.value;
                        O(on(on({}, C), {}, (0, P.Z)({}, t, n)))
                    }
                }))), N.createElement(ee.X2, null, N.createElement(ee.zx, {
                    expand: !0,
                    color: "primary",
                    onClick: function() {
                        ! function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = on(on({}, C), e);
                            Object.keys(t).length > 0 && _(on({
                                groupId: q.groupId,
                                userId: q.userId
                            }, t)), p()
                        }()
                    }
                }, N.createElement(ee.$1, {
                    icon: mt.r6
                }), " Save"), " ", N.createElement(ee.zx, {
                    expand: !0,
                    neutral: !0,
                    onClick: p
                }, "Close"), ((null == T ? void 0 : T.memberRank) < g && de || ae) && N.createElement(N.Fragment, null, " ", N.createElement(ee.zx, {
                    expand: !0,
                    warning: !0,
                    onClick: me
                }, N.createElement(A.Z, {
                    icon: rn.uM
                }), "  Kick"), " ", (ge || ae) && N.createElement(ee.zx, {
                    expand: !0,
                    danger: !0,
                    onClick: ue
                }, N.createElement(A.Z, {
                    icon: i.JH
                }), "  Ban"))))))
            };
            var sn = (0, a.Z)("div", {
                    target: "emzwbrv5"
                })({
                    name: "sh46e2",
                    styles: "display:flex;flex-direction:row;align-items:start;justify-content:space-around;margin-bottom:15px"
                }),
                un = (0, a.Z)("div", {
                    target: "emzwbrv4"
                })({
                    name: "1fx61ax",
                    styles: "display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;margin-right:10px"
                }),
                mn = (0, a.Z)("ul", {
                    target: "emzwbrv3"
                })({
                    name: "1uhpukn",
                    styles: "list-style-type:none;padding:0;margin:0;width:100%;max-height:200px;height:200px;overflow-y:auto;overflow-x:hidden;background:#0d0d10;border-radius:5px"
                }),
                dn = (0, a.Z)("li", {
                    target: "emzwbrv2"
                })("padding:8px;border-radius:4px;", (function(e) {
                    return !e.canInteract && "\n    background-color: #0d0d10;\n    opacity: 0.2;\n    "
                }), " &.not-a-role{background-color:unset;}&:hover{", (function(e) {
                    return e.canInteract && "\n        background-color: #282b31;\n        cursor: pointer;\n    "
                }), ";}"),
                pn = (0, a.Z)("div", {
                    target: "emzwbrv1"
                })({
                    name: "d50b5r",
                    styles: "display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;margin-left:10px"
                }),
                gn = (0, a.Z)("ul", {
                    target: "emzwbrv0"
                })({
                    name: "1uhpukn",
                    styles: "list-style-type:none;padding:0;margin:0;width:100%;max-height:200px;height:200px;overflow-y:auto;overflow-x:hidden;background:#0d0d10;border-radius:5px"
                }),
                fn = n(54610),
                En = n(38653),
                vn = function(e) {
                    var t = e.user,
                        n = void 0 === t ? null : t,
                        a = e.groupId,
                        o = (0, C.I0)(),
                        c = (0, N.useState)(!0),
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
                    var y = function() {
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
                                                icon: w.f8,
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
                    return N.createElement(oe.Wm, {
                        className: "flex-row my-1"
                    }, N.createElement("div", {
                        className: "container-fluid p-0"
                    }, N.createElement(D.Z, null, N.createElement(X.Z, {
                        xs: 12,
                        sm: 2,
                        className: "pe-0"
                    }, N.createElement(S.rU, {
                        to: "/home/user/".concat(n.id),
                        title: n.displayName,
                        target: "_blank"
                    }, N.createElement(oe.D2, {
                        image: (null == n ? void 0 : n.iconUrl) || (null == n ? void 0 : n.thumbnailUrl) || (null == n ? void 0 : n.userIcon) || (null == n ? void 0 : n.currentAvatarThumbnailImageUrl)
                    }))), N.createElement(X.Z, null, N.createElement(fn.Z, {
                        className: "d-flex flex-row justify-content-between py-1"
                    }, N.createElement("div", {
                        className: "container p-0"
                    }, N.createElement(D.Z, null, N.createElement(X.Z, {
                        xs: 12,
                        sm: 7,
                        className: "p-1"
                    }, N.createElement(S.rU, {
                        to: "/home/user/".concat(n.id),
                        title: n.displayName,
                        target: "_blank"
                    }, N.createElement(oe.Hz, {
                        tag: "h5"
                    }, n.displayName)), N.createElement(En.Z, {
                        className: "mb-2 text-muted text-truncate tw-capitalize",
                        tag: "h6"
                    }, n.status)), N.createElement(X.Z, null, N.createElement("div", {
                        className: "tw-flex tw-col tw-justify-end"
                    }, N.createElement("div", {
                        className: "tw-justify-end"
                    }, N.createElement(ee.zx, {
                        onClick: u ? y : Z,
                        disabled: b || f,
                        loading: b || f,
                        className: "tw-w-fit tw-px-4"
                    }, N.createElement(ee.$1, {
                        width: 20,
                        icon: i.JH
                    }), u ? " Ban" : " Unban")))))))))))
                };
            vn.propTypes = {
                user: ue().object,
                groupId: ue().string.isRequired
            };
            const hn = vn;
            var bn = n(7371),
                yn = n(73104),
                xn = function(e) {
                    var t = e.member,
                        n = void 0 === t ? null : t,
                        r = e.groupRoles,
                        l = e.memberEditCallback;
                    if (null === n) return null;
                    var a = n.user;
                    return N.createElement(oe.Wm, {
                        className: "flex-row my-1"
                    }, N.createElement("div", {
                        className: "container-fluid p-0"
                    }, N.createElement(D.Z, null, N.createElement(X.Z, {
                        xs: 12,
                        sm: 2,
                        className: "pe-0"
                    }, N.createElement(S.rU, {
                        to: "/home/user/".concat(a.id),
                        title: a.displayName,
                        target: "_blank"
                    }, N.createElement(oe.D2, {
                        image: a.iconUrl || a.thumbnailUrl
                    }))), N.createElement(X.Z, null, N.createElement(fn.Z, {
                        className: "d-flex flex-row justify-content-between py-1"
                    }, N.createElement("div", {
                        className: "container p-0"
                    }, N.createElement(D.Z, null, N.createElement(X.Z, {
                        xs: 12,
                        sm: 7,
                        className: "p-1"
                    }, N.createElement(S.rU, {
                        to: "/home/user/".concat(a.id),
                        title: a.displayName,
                        target: "_blank"
                    }, N.createElement(oe.Hz, {
                        tag: "h5"
                    }, a.displayName)), N.createElement(En.Z, {
                        className: "mb-2 text-muted text-truncate",
                        tag: "h6"
                    }, "Joined ", de()(n.joinedAt).fromNow()), N.createElement(yn.Z, {
                        className: "text-truncate text-secondary"
                    }, (0, ve.wz)({
                        member: n,
                        groupRoles: r
                    }).join(", "))), N.createElement(X.Z, null, N.createElement(oe.$, null, N.createElement(ee.zx, {
                        onClick: function() {
                            return l(n, (0, ve.H)({
                                member: n,
                                groupRoles: r
                            }), null)
                        }
                    }, N.createElement(ee.$1, {
                        width: 20,
                        icon: bn.Iw
                    })))))))))))
                };
            xn.propTypes = {
                member: ue().object.isRequired,
                groupRoles: ue().array.isRequired,
                memberEditCallback: ue().func.isRequired
            };
            const wn = xn;
            var Zn = function(e) {
                var t, n, r, a = e.groupId,
                    o = e.isOpen,
                    i = e.cancelCallback,
                    c = e.isGroupMemberOnly,
                    s = void 0 !== c && c,
                    u = e.memberEditCallback,
                    m = (0, N.useRef)(null),
                    d = (0, N.useState)(""),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = (0, N.useState)(1),
                    v = (0, l.Z)(E, 2),
                    h = v[0],
                    b = v[1],
                    y = (0, ie.Nr)(g);
                (0, N.useEffect)((function() {
                    setTimeout((function() {
                        o && null != m && m.current && m.current.focus()
                    }), 300)
                }), [o, m]), (0, N.useEffect)((function() {
                    b(1)
                }), [g]), (0, N.useEffect)((function() {
                    f("")
                }), [o]);
                var x = (0, ce.Vc)({
                        groupId: a
                    }, {
                        skip: !s
                    }),
                    w = x.data,
                    Z = x.isSuccess,
                    k = x.isError,
                    I = x.error,
                    C = (0, ce.Pi)({
                        groupId: a,
                        pageValue: h,
                        searchTerm: y,
                        n: 25
                    }, {
                        skip: "" === y || !o || y.length < 3 || !s
                    }),
                    O = C.data,
                    S = C.error,
                    T = C.isError,
                    j = C.isFetching,
                    A = C.isSuccess,
                    M = (0, K.hi)({
                        pageValue: h,
                        searchTerm: y,
                        n: 25
                    }, {
                        skip: "" === y || !o || y.length < 3 || s
                    }),
                    L = M.data,
                    P = M.error,
                    R = M.isError,
                    U = M.isFetching,
                    q = M.isSuccess;
                return N.createElement(oe.Xv, {
                    role: "dialog",
                    isOpen: o,
                    toggle: i,
                    keyboard: !0,
                    autoFocus: !1
                }, N.createElement(oe.eb, {
                    tag: "h4",
                    close: N.createElement(te.Z, {
                        onClick: i
                    }),
                    toggle: i
                }, s ? "Group Members Search" : "Users Search"), N.createElement(oe.vc, null, N.createElement(oe.T_, null, N.createElement(ee.II, {
                    id: "search-product-list",
                    onChange: function(e) {
                        return f(e.target.value)
                    },
                    placeholder: s ? "Search Group Members..." : "Search for users...",
                    ref: m,
                    type: "text",
                    value: g
                }), (T || k || R) && N.createElement("p", {
                    className: "text-center m-5 text-warning h-25"
                }, "Something went wrong with the search, please try again later!", N.createElement("br", null), T && N.createElement("code", null, null == S || null === (t = S.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), k && N.createElement("code", null, null == I || null === (n = I.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), R && N.createElement("code", null, null == P || null === (r = P.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message)), j && N.createElement(oe.Um, null, N.createElement("div", {
                    className: "text-center m-5 text-secondary h-25"
                }, N.createElement(ne.Z, null))), !A && !j && !T && s && N.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "Search for members in your group."), A && !j && Z && s && N.createElement(oe.Um, null, O.results.map((function(e) {
                    return N.createElement(wn, {
                        key: e.id,
                        member: e,
                        groupRoles: w,
                        memberEditCallback: u
                    })
                })), 0 === O.results.length && N.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "We couldn't find anything with that search.")), !q && !U && !R && !s && N.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "Search for users on VRChat."), q && N.createElement(oe.Um, null, L.results.map((function(e) {
                    return N.createElement(hn, {
                        key: e.id,
                        user: e,
                        groupId: a
                    })
                })), 0 === L.results.length && N.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "We couldn't find anything with that search.")), (A || q) && N.createElement(oe.Gz, null, N.createElement(oe.IT, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return b(h - 1)
                    },
                    disabled: 1 === h || j || U
                }, N.createElement(ee.$1, {
                    icon: ae.A3
                })), N.createElement("span", null, h), N.createElement(oe.UV, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return b(h + 1)
                    },
                    disabled: (null == O ? void 0 : O.isLastPage) || (null == L ? void 0 : L.isLastPage) || j || U
                }, N.createElement(ee.$1, {
                    icon: le._t
                }))))))
            };
            Zn.propTypes = {
                groupId: ue().string,
                isOpen: ue().bool.isRequired,
                cancelCallback: ue().func.isRequired,
                memberEditCallback: ue().func
            };
            const kn = Zn;

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

            function Nn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? In(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
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
            const On = function(e) {
                var t, n = e.group,
                    r = N.useState(!1),
                    a = (0, l.Z)(r, 2),
                    o = a[0],
                    i = a[1],
                    c = N.useState(!1),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = N.useState(null),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = N.useState(null),
                    v = (0, l.Z)(E, 2),
                    h = v[0],
                    b = v[1],
                    y = N.useState(null),
                    x = (0, l.Z)(y, 2),
                    w = x[0],
                    Z = x[1],
                    k = N.useState(""),
                    C = (0, l.Z)(k, 2),
                    O = C[0],
                    S = (C[1], N.useState(null)),
                    j = (0, l.Z)(S, 2),
                    A = j[0],
                    L = j[1],
                    P = N.useState(null),
                    U = (0, l.Z)(P, 2),
                    q = U[0],
                    G = U[1],
                    z = (0, Q.XC)().data,
                    F = (0, ie.pc)(),
                    X = (0, N.useState)([
                        [],
                        []
                    ]),
                    D = (0, l.Z)(X, 2),
                    _ = D[0],
                    B = D[1],
                    J = null == n ? void 0 : n.myMember,
                    $ = (0, N.useState)(0),
                    V = (0, l.Z)($, 2),
                    W = V[0],
                    H = V[1],
                    Y = (0, N.useState)(25),
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
                N.useEffect((function() {
                    ge(K, 0)
                }), []), N.useEffect((function() {
                    var e = (0, R.Z)(_);
                    if (ae) {
                        var t;
                        if (ae.page <= 0 && !O && null === A && null === q && null != n && n.myMember) e[0] = [Nn(Nn({}, J), {}, {
                            userId: z.id,
                            user: Nn(Nn({}, z), {}, {
                                thumbnailUrl: null !== (t = z.profilePicOverride) && void 0 !== t ? t : z.currentAvatarImageUrl
                            })
                        })].concat((0, R.Z)(ae.members));
                        else e[ae.page] = ae.members;
                        B(e)
                    }
                }), [ae]);
                N.useEffect((function() {}), [O]), N.useEffect((function() {
                    H(0), B([
                        [],
                        []
                    ]), ge(K, 0)
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
                    Ee = M({
                        groupMember: null == n ? void 0 : n.myMember,
                        permission: "group-members-manage"
                    }),
                    ve = M({
                        groupMember: null == n ? void 0 : n.myMember,
                        permission: "group-roles-assign"
                    }),
                    he = M({
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
                if (de) return N.createElement(ee.UU, {
                    height: "200px"
                });
                var ye = null == _ ? void 0 : _.map((function(e, t) {
                        var r;
                        return null === (r = (0, R.Z)(e)) || void 0 === r || null === (r = r.sort((function(e) {
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
                            return N.createElement(en, {
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
                return N.createElement(N.Fragment, null, N.createElement(ee.oI, null, N.createElement("h4", {
                    className: "text-center font-weight-bolder"
                }, "Members ", !Ee && !he && "(Friends only)")), N.createElement(ee.Ao, null, N.createElement("div", {
                    className: (0, I.iv)({
                        name: "8osrbx",
                        styles: "background-color:var(--dark);padding:0 20px 20px 20px"
                    })
                }, Ee && N.createElement(ee.JX, null, N.createElement("h6", null, "Filters:"), N.createElement(ee.X2, {
                    className: "flex-wrap"
                }, N.createElement(Sn, {
                    label: "Filter role",
                    onChange: G,
                    options: xe,
                    value: q,
                    className: "mb-2 mx-2"
                }), N.createElement(Sn, {
                    label: "Join order",
                    onChange: L,
                    options: Cn,
                    value: A,
                    className: "mb-2 mx-2"
                }))), N.createElement(T.Z, {
                    isOpen: o,
                    toggle: function() {
                        i(!1)
                    }
                }, N.createElement(cn, {
                    groupMember: g,
                    memberRank: null != w ? w : 0,
                    closeCallback: function() {
                        i(!1)
                    },
                    memberListPage: h
                })), Ee && N.createElement("div", {
                    className: "p-2"
                }, N.createElement(ee.zx, {
                    onClick: function() {
                        m(!0)
                    }
                }, N.createElement(ee.$1, {
                    color: "white",
                    icon: Ne.faMagnifyingGlass
                }), "  Search Group Members")), N.createElement(kn, {
                    isOpen: u,
                    groupId: n.id,
                    cancelCallback: function() {
                        return m(!1)
                    },
                    memberEditCallback: fe,
                    isGroupMemberOnly: !0
                }), se ? N.createElement(ee.UU, {
                    height: "200px"
                }) : N.createElement(Tn, null, ye), N.createElement("div", {
                    className: "p-2",
                    style: {
                        margin: "20px auto 0",
                        textAlign: "center"
                    }
                }, N.createElement(ee.zx, {
                    onClick: function() {
                        ge(K, W)
                    },
                    disabled: se || oe || pe,
                    loading: se
                }, oe || pe ? "No more members..." : "List More Members")))))
            };
            var Sn = (0, a.Z)(ee.Lt, {
                    target: "egqvjul1"
                })({
                    name: "1w9pskj",
                    styles: "width:300px;min-width:200px"
                }),
                Tn = (0, a.Z)("div", {
                    target: "egqvjul0"
                })({
                    name: "rmjg9v",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;>*{width:300px;margin-top:8px;}"
                });
            const jn = function(e) {
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
                return N.createElement(Rn, null, N.createElement(Un, null, N.createElement(An, null, "Languages")), N.createElement(qn, null, i.length > 0 ? i.map((function(e) {
                    var t, n;
                    return N.createElement(Pn, {
                        key: e,
                        title: null !== (t = e.title) && void 0 !== t ? t : o[e]
                    }, null !== (n = e.abbreviation) && void 0 !== n ? n : e.toUpperCase())
                })) : N.createElement("h4", {
                    className: "align-self-center"
                }, "None added")))
            };
            var An = (0, a.Z)("h2", {
                    target: "e8rhb6u6"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                Mn = (0, a.Z)("div", {
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
                Pn = (0, a.Z)(Ln, {
                    target: "e8rhb6u3"
                })({
                    name: "77x4h6",
                    styles: "font-size:1.7rem;font-weight:bold;color:#54b5c5"
                }),
                Rn = (0, a.Z)(Mn, {
                    target: "e8rhb6u2"
                })({
                    name: "u5t5ke",
                    styles: "flex:1;min-width:350px;min-height:136px"
                }),
                Un = (0, a.Z)(oe.JX, {
                    target: "e8rhb6u1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                qn = (0, a.Z)(Un, {
                    target: "e8rhb6u0"
                })({
                    name: "18clcmv",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto"
                });
            const Gn = function(e) {
                var t = e.links;
                return N.createElement(Bn, null, N.createElement(Jn, null, N.createElement(zn, null, "Links")), N.createElement($n, null, t.length > 0 ? t.map((function(e) {
                    return N.createElement(_n, {
                        key: e
                    }, N.createElement(ze.QZ, {
                        url: e,
                        style: {
                            height: "70px",
                            width: "70px"
                        },
                        target: "_blank"
                    }))
                })) : N.createElement("h4", {
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
                Xn = (0, a.Z)("div", {
                    target: "e19ri8nl5"
                })({
                    name: "r0ww0u",
                    styles: "background-color:#181b1f;border:5px solid #252a30;min-width:100px;min-height:100px;width:100px;height:100px;border-radius:50%;margin:10px;display:flex;justify-content:center;align-items:center;transition:transform 0.1s ease-in"
                }),
                Dn = (0, a.Z)(Xn, {
                    target: "e19ri8nl4"
                })({
                    name: "jrwc5p",
                    styles: ":hover{transform:scale(1.1);cursor:pointer;}"
                }),
                _n = (0, a.Z)(Dn, {
                    target: "e19ri8nl3"
                })(""),
                Bn = (0, a.Z)(Fn, {
                    target: "e19ri8nl2"
                })({
                    name: "u5t5ke",
                    styles: "flex:1;min-width:350px;min-height:136px"
                }),
                Jn = (0, a.Z)(oe.JX, {
                    target: "e19ri8nl1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                $n = (0, a.Z)(Jn, {
                    target: "e19ri8nl0"
                })({
                    name: "18clcmv",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto"
                }),
                Vn = n(87261),
                Wn = n(88233);

            function Hn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Yn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Hn(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Qn = N.lazy((function() {
                return Promise.all([n.e(8744), n.e(430), n.e(6681), n.e(4444), n.e(9908), n.e(229), n.e(2045)]).then(n.bind(n, 52045))
            }));
            const Kn = function(e) {
                var t, n, r, a = e.group,
                    i = e.gallery,
                    c = e.justAdded,
                    s = void 0 !== c && c,
                    u = (0, C.I0)(),
                    m = (0, C.v9)((function(e) {
                        var t;
                        return null === (t = e.group) || void 0 === t || null === (t = t.galleries) || void 0 === t ? void 0 : t.isLoading
                    })),
                    d = N.useState(!1),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = N.useState(null),
                    v = (0, l.Z)(E, 2),
                    h = v[0],
                    b = (v[1], N.useState(null)),
                    y = (0, l.Z)(b, 2),
                    x = y[0],
                    w = y[1],
                    Z = N.useState(null),
                    k = (0, l.Z)(Z, 2),
                    O = k[0],
                    S = k[1],
                    j = N.useState(!1),
                    A = (0, l.Z)(j, 2),
                    L = A[0],
                    R = A[1],
                    U = N.useState({
                        name: i.name,
                        description: i.description,
                        membersOnly: i.membersOnly
                    }),
                    q = (0, l.Z)(U, 2),
                    G = q[0],
                    z = q[1],
                    X = N.useState(!1),
                    D = (0, l.Z)(X, 2),
                    $ = D[0],
                    V = D[1],
                    W = N.useState(15),
                    Y = (0, l.Z)(W, 1)[0],
                    Q = N.useState(1),
                    K = (0, l.Z)(Q, 2),
                    te = K[0],
                    ne = K[1],
                    re = N.useState(!0),
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
                    ye = (he[1].isLoading, (0, ce.pI)()),
                    xe = (0, l.Z)(ye, 2),
                    we = xe[0],
                    Ze = xe[1],
                    ke = (Ze.isLoading, Ze.isSuccess),
                    Ie = (0, ce.jP)(),
                    Ne = (0, l.Z)(Ie, 2),
                    Ce = Ne[0];
                Ne[1].isLoading;
                N.useEffect((function() {
                    document.getElementById(i.id) && s && !$ && (document.getElementById(i.id).scrollIntoView({
                        behavior: "smooth"
                    }), V(!0))
                })), N.useEffect((function() {
                    ke && R(!1)
                }), [ke]), N.useEffect((function() {
                    pe && se((null == me ? void 0 : me.totalCount) >= 100)
                }), [pe]);
                var Oe = function(e) {
                    var t = "checkbox" === e.target.getAttribute("type") ? !e.target.checked : e.target.value;
                    z(Yn(Yn({}, G), {}, (0, P.Z)({}, e.target.name, t)))
                };
                if (de) return N.createElement(ee.UU, {
                    className: "mt-3",
                    width: "100%",
                    height: "300px"
                });
                var Se = M({
                        groupMember: null == a ? void 0 : a.myMember,
                        permission: "group-galleries-manage"
                    }),
                    Te = me.totalCount,
                    je = (te - 1) * Y,
                    Ae = N.createElement(nr, null, N.createElement(rr, {
                        className: "d-flex flex-row align-items-center justify-content-center",
                        onClick: function() {
                            return ne(te - 1)
                        },
                        disabled: 0 === je
                    }, N.createElement(ee.$1, {
                        icon: ae.A3
                    })), N.createElement("span", null, te, " / ", Math.ceil(Te / Y), " ", N.createElement("small", null, Te > 0 && "(".concat(Te, "/").concat(100, ")"))), N.createElement(lr, {
                        className: "d-flex flex-row align-items-center justify-content-center",
                        onClick: function() {
                            return ne(te + 1)
                        },
                        disabled: je + Y >= Te
                    }, N.createElement(ee.$1, {
                        icon: le._t
                    })));
                return N.createElement("div", {
                    className: "my-2",
                    id: i.id
                }, N.createElement(Wn.Z, {
                    imageUrl: x,
                    closeCallback: function() {
                        w(null)
                    },
                    nextCallback: null !== (t = me.results) && void 0 !== t && t[O + 1] ? function() {
                        w(me.results[O + 1].imageUrl), S(O + 1)
                    } : null,
                    prevCallback: null !== (n = me.results) && void 0 !== n && n[O - 1] ? function() {
                        w(me.results[O - 1].imageUrl), S(O - 1)
                    } : null
                }), N.createElement(T.Z, {
                    isOpen: g,
                    className: (0, I.iv)({
                        name: "1ul0gzp",
                        styles: "max-width:1500px!important"
                    })
                }, N.createElement(_.Z, null, N.createElement(Qn, {
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
                })), N.createElement(B.Z, null, N.createElement(ee.zx, {
                    onClick: function() {
                        f(!1), u((0, H.b9)())
                    }
                }, "Cancel"))), N.createElement(ee.oI, null, N.createElement("h4", null, i.name), N.createElement("span", null, i.description)), N.createElement(ee.Ao, null, 0 !== Te && Ae, L ? N.createElement(ee.JX, {
                    className: "w-100"
                }, N.createElement(J.Z, null, "Gallery name", N.createElement(ee.II, {
                    value: G.name,
                    name: "name",
                    onChange: Oe,
                    disabled: m,
                    maxLength: 64
                })), " ", N.createElement(J.Z, null, "Gallery description", N.createElement(ee.II, {
                    value: G.description,
                    name: "description",
                    onChange: Oe,
                    disabled: m,
                    maxLength: 512
                })), " ", N.createElement(ee.X2, null, N.createElement(J.Z, null, "Is this gallery public?", " ", N.createElement(Vn.Z, {
                    type: "checkbox",
                    name: "membersOnly",
                    checked: !G.membersOnly,
                    onChange: Oe,
                    disabled: m
                }))), N.createElement(ee.X2, null, N.createElement(ee.zx, {
                    expand: !0,
                    onClick: function() {
                        we({
                            groupId: a.id,
                            galleryId: i.id,
                            data: Yn({}, G)
                        })
                    },
                    disabled: m
                }, "Update"), " ", N.createElement(ee.zx, {
                    expand: !0,
                    neutral: !0,
                    disabled: m,
                    onClick: function() {
                        R(!1)
                    }
                }, "Cancel"), " ", N.createElement(ee.zx, {
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
                }, "Delete"))) : N.createElement(N.Fragment, null, N.createElement(er, null, (null === (r = me.results) || void 0 === r ? void 0 : r.length) > 0 ? me.results.map((function(e, t) {
                    return N.createElement(Kt.Z, {
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
                })) : N.createElement("p", {
                    className: "m-0"
                }, "There are no pictures here... yet!")), Se && N.createElement(tr, null, N.createElement(ee.zx, {
                    className: "m-2",
                    disabled: ie,
                    onClick: function() {
                        f(!0)
                    }
                }, ie ? "Gallery is full" : N.createElement(N.Fragment, null, N.createElement(ee.$1, {
                    icon: o.r8
                }), " Post an Image")), N.createElement(ee.zx, {
                    neutral: !0,
                    onClick: function() {
                        R(!0)
                    }
                }, N.createElement(ee.$1, {
                    icon: F.Kb
                }), " Manage Gallery")))))
            };
            var er = (0, a.Z)("div", {
                    target: "e5pi12i4"
                })({
                    name: "1kra7du",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;align-items:center;margin:10px 0;width:100%"
                }),
                tr = (0, a.Z)("div", {
                    target: "e5pi12i3"
                })({
                    name: "198unna",
                    styles: "display:flex;flex-direction:row;justify-content:left;align-items:center;width:100%"
                }),
                nr = (0, a.Z)("div", {
                    target: "e5pi12i2"
                })({
                    name: "1vtota4",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-bottom:8px"
                }),
                rr = (0, a.Z)(ee.zx, {
                    target: "e5pi12i1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                lr = (0, a.Z)(ee.zx, {
                    target: "e5pi12i0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                });

            function ar(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function or(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ar(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ar(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const ir = function(e) {
                var t, n = e.group,
                    a = N.useState({
                        name: "",
                        description: "",
                        membersOnly: !1
                    }),
                    i = (0, l.Z)(a, 2),
                    c = i[0],
                    s = i[1],
                    u = N.useState(!1),
                    m = (0, l.Z)(u, 2),
                    d = m[0],
                    p = m[1],
                    g = (0, ce.Eg)(),
                    f = (0, l.Z)(g, 2),
                    E = f[0],
                    v = f[1],
                    h = v.data,
                    b = v.isLoading,
                    y = v.isSuccess,
                    x = v.isError,
                    w = v.error;
                N.useEffect((function() {
                    y && p(!1)
                }), [y]);
                var Z = function(e) {
                        var t = "checkbox" === e.target.getAttribute("type") ? !e.target.checked : e.target.value;
                        s(or(or({}, c), {}, (0, P.Z)({}, e.target.name, t)))
                    },
                    I = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        E(or({
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
                return M({
                    groupMember: null == n ? void 0 : n.myMember,
                    permission: "group-galleries-manage"
                }) && (C = d ? N.createElement(N.Fragment, null, N.createElement(ee.oI, null, N.createElement("h4", null, "Create Gallery")), N.createElement(ee.Ao, null, N.createElement(J.Z, null, "Gallery name", N.createElement(ee.II, {
                    value: c.name,
                    name: "name",
                    onChange: Z,
                    disabled: b,
                    maxLength: 64
                })), " ", N.createElement(J.Z, null, "Gallery description", N.createElement(ee.II, {
                    value: c.description,
                    name: "description",
                    onChange: Z,
                    disabled: b,
                    maxLength: 512
                })), " ", N.createElement(ee.X2, null, N.createElement(J.Z, null, "Is this gallery public?", " ", N.createElement(Vn.Z, {
                    type: "checkbox",
                    name: "membersOnly",
                    checked: !c.membersOnly,
                    onChange: Z,
                    disabled: b
                }))), N.createElement(ee.X2, null, N.createElement(ee.zx, {
                    expand: !0,
                    onClick: I,
                    disabled: b,
                    loading: b
                }, "Create"), " ", N.createElement(ee.zx, {
                    expand: !0,
                    neutral: !0,
                    onClick: function() {
                        p(!1)
                    },
                    disabled: b
                }, "Cancel")))) : N.createElement(ee.zx, {
                    onClick: function() {
                        p(!0)
                    },
                    disabled: b,
                    loading: b
                }, N.createElement(ee.$1, {
                    icon: o.r8
                }), " Create Gallery")), N.createElement("div", null, x && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == w || null === (t = w.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred while creating the gallery."), C, n.galleries.length > 0 ? n.galleries.map((function(e) {
                    return (e.membersOnly && (null == n ? void 0 : n.myMember) || !e.membersOnly) && N.createElement(Kn, {
                        key: e.id,
                        group: n,
                        gallery: e,
                        justAdded: y && (null == h ? void 0 : h.id) === e.id
                    })
                })) : N.createElement(cr, null, "There aren't any galleries here!"))
            };
            var cr = (0, a.Z)(ee.oI, {
                    target: "e7nydss0"
                })({
                    name: "es1q9a",
                    styles: "border-radius:6px;text-align:center;font-size:1.2rem;font-weight:bold;justify-content:center;align-items:center;padding:3rem 1rem;margin-top:0.5rem"
                }),
                sr = n(59923),
                ur = n(9186);

            function mr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function dr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? mr(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const pr = function(e) {
                var t = e.group,
                    n = (0, ur.Z)().sortedLocations,
                    r = (0, ce.w$)({
                        groupId: t.id
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    a = r.data,
                    o = r.isLoading,
                    i = N.useState([]),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1];
                N.useEffect((function() {
                    var e;
                    if (!o) {
                        var t = null == n ? void 0 : n.map((function(e) {
                            return e.instanceId
                        }));
                        u(null === (e = (0, R.Z)(a)) || void 0 === e || null === (e = e.sort((function(e, t) {
                            var n = e.memberCount;
                            return t.memberCount - n
                        }))) || void 0 === e ? void 0 : e.map((function(e) {
                            return t.includes(e.instanceId) ? dr(dr({}, e), {}, {
                                users: n.find((function(t) {
                                    return t.instanceId === e.instanceId
                                })).users
                            }) : dr(dr({}, e), {}, {
                                users: []
                            })
                        })))
                    }
                }), [a, n]);
                var m = N.useMemo((function() {
                    var e;
                    return null == s || null === (e = s.sort((function(e, t) {
                        var n = e.users,
                            r = t.users;
                        return n.length === r.length ? 0 : n.length > r.length ? -1 : 1
                    }))) || void 0 === e ? void 0 : e.map((function(e) {
                        return N.createElement(sr.Z, {
                            key: "location-".concat(e.location),
                            className: "mb-4",
                            location: e,
                            isForGroup: !0,
                            currentGroup: t
                        })
                    }))
                }), [s]);
                return o ? N.createElement(ee.UU, {
                    width: "100%",
                    height: "200px"
                }) : N.createElement(N.Fragment, null, N.createElement(ee.oI, null, N.createElement("h4", {
                    className: "text-center"
                }, "Instances")), N.createElement(ee.Ao, null, null != m && m.length ? m : N.createElement("p", {
                    className: "text-center"
                }, "Nothing to see here!")))
            };
            var gr = n(73670),
                fr = n(47716);
            const Er = function(e) {
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
                    w = b.isSuccess,
                    Z = b.isError,
                    k = b.error,
                    I = d || x,
                    C = g || Z,
                    O = f || k;
                return N.useEffect((function() {
                    C && a(O)
                }), [C, O]), N.createElement("div", {
                    className: "mt-2 mb-2 d-flex flex-column justify-content-center"
                }, N.createElement(fr.Z, {
                    className: "mb-0",
                    userId: n.id,
                    openLinksInNewTab: !0
                }), "invite" === i && N.createElement(ee.zx, {
                    disabled: p || I,
                    loading: I,
                    onClick: function() {
                        return u({
                            groupId: t.id,
                            userId: n.id
                        })
                    },
                    color: p ? "success" : void 0
                }, p && N.createElement(ee.$1, {
                    icon: y.LE,
                    className: "mx-2"
                }), "Invite", p && "d", " ", n.displayName), "ban" === i && N.createElement(ee.zx, {
                    disabled: w || I,
                    loading: I,
                    onClick: function() {
                        return h({
                            groupId: t.id,
                            userId: n.id
                        })
                    },
                    color: w ? "success" : void 0
                }, w && N.createElement(ee.$1, {
                    icon: y.LE,
                    className: "mx-2"
                }), "ban", w && "ned", " ", n.displayName))
            };
            var vr = n(25411),
                hr = n(12227);
            const br = function(e) {
                var t = e.group,
                    n = e.mode,
                    r = void 0 === n ? "invite" : n,
                    a = (0, C.I0)(),
                    o = (0, ie.pc)(),
                    i = N.useState(""),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, ie.Nr)(s),
                    d = (0, C.v9)((function(e) {
                        return e.search
                    })).userResults,
                    p = N.useState(""),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = o && !1;
                N.useEffect((function() {
                    E(""), "" !== m && a((0, vr.pz)({
                        searchTerm: m,
                        n: hr.En,
                        isInternalVariant: v
                    }))
                }), [m]);
                var h = function(e) {
                    e && E(e.data.error.message)
                };
                return N.createElement(N.Fragment, null, N.createElement(gr.Z, {
                    searchString: u,
                    placeholder: "Search users..."
                }), f && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "px-4",
                    message: f
                }), d.map((function(e) {
                    return N.createElement(Er, {
                        mode: r,
                        key: e.id,
                        group: t,
                        user: e,
                        errorCallback: h
                    })
                })))
            };
            var yr = n(37599),
                xr = n(61509);
            const wr = function(e) {
                var t, n, r, a, o, c, s, u, m = e.group,
                    d = (0, C.I0)(),
                    p = N.useState(!1),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = N.useState(!1),
                    h = (0, l.Z)(v, 2),
                    b = h[0],
                    y = h[1],
                    x = N.useState(null),
                    w = (0, l.Z)(x, 2),
                    Z = w[0],
                    k = w[1],
                    I = (0, ce.Sp)({
                        groupId: m.id
                    }),
                    S = I.data,
                    j = I.isError,
                    A = I.isLoading,
                    L = (0, ce.dZ)({
                        groupId: m.id
                    }),
                    P = L.data,
                    R = L.isError,
                    U = L.error,
                    q = L.isLoading,
                    G = (0, ce.dZ)({
                        groupId: m.id,
                        blocked: !0
                    }),
                    z = G.data,
                    F = G.isError,
                    X = G.error,
                    D = (G.isFetching, (0, ce.dt)()),
                    B = (0, l.Z)(D, 2),
                    J = B[0],
                    V = B[1],
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
                    ye = (be.isLoading, be.isError),
                    xe = be.error,
                    we = (0, ce.XK)(),
                    Ze = (0, l.Z)(we, 2),
                    ke = Ze[0],
                    Ie = Ze[1],
                    Ne = (Ie.isLoading, Ie.isError),
                    Ce = Ie.error;
                (0, O.s0)(), (0, ie.pc)();
                N.useEffect((function() {
                    pe && d(xr.S.util.updateQueryData("getGroupById", {
                        groupId: m.id
                    }, (function(e) {
                        e.memberCount += 1
                    })))
                }), [pe]);
                var Oe = function() {
                    y(!1), k(null)
                };
                M({
                    groupMember: null == m ? void 0 : m.myMember,
                    permission: "group-members-manage"
                });
                return N.createElement("div", null, N.createElement(T.Z, {
                    isOpen: b && !!Z,
                    toggle: Oe
                }, N.createElement(ee.oI, null, N.createElement("h4", {
                    className: "text-center text-break"
                }, "Ban ", null == Z ? void 0 : Z.displayName, "?!?!")), N.createElement(ee.Ao, null, N.createElement("div", null, N.createElement(ee.X2, null, N.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        var e;
                        e = null == Z ? void 0 : Z.id, he({
                            groupId: m.id,
                            userId: e
                        }), Oe()
                    },
                    expand: !0
                }, N.createElement(ee.$1, {
                    icon: i.JH
                }), " And stay out!"), " ", N.createElement(ee.zx, {
                    neutral: !0,
                    onClick: Oe,
                    expand: !0
                }, "Cancel"))))), N.createElement(T.Z, {
                    isOpen: f
                }, N.createElement($.Z, {
                    close: N.createElement(te.Z, {
                        onClick: function() {
                            E(!1)
                        }
                    })
                }, N.createElement("h4", {
                    className: "m-0"
                }, "Invite Somebody")), N.createElement(_.Z, null, N.createElement(br, {
                    group: m,
                    mode: "invite"
                }))), N.createElement(ee.zx, {
                    className: "mb-2",
                    color: "primary",
                    onClick: function() {
                        E(!0)
                    }
                }, "Invite Somebody"), N.createElement(yr.Z, {
                    title: "Join Requests",
                    collapseOpen: !0
                }, ye && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == xe || null === (t = xe.data) || void 0 === t ? void 0 : t.error.message) || "There was an error banning the user."), R && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == U || null === (n = U.data) || void 0 === n ? void 0 : n.error.message) || "There was an error loading the join requests."), ae && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == oe || null === (r = oe.data) || void 0 === r ? void 0 : r.error.message) || "There was an error rejecting the join request."), ge && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == fe || null === (a = fe.data) || void 0 === a ? void 0 : a.error.message) || "There was an error accepting the join request."), N.createElement(ee.oI, null, N.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Applicants")), N.createElement(ee.Ao, {
                    className: "mb-2"
                }, q ? N.createElement(ee.UU, {
                    width: "100%",
                    height: "75px"
                }) : N.createElement(Zr, null, 0 === (null == P ? void 0 : P.length) ? N.createElement("p", {
                    className: "m-0"
                }, "Nobody is waiting to join!") : null, null == P ? void 0 : P.map((function(e) {
                    return N.createElement("div", {
                        className: "mb-2"
                    }, N.createElement(en, {
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
                }))))), N.createElement(yr.Z, {
                    title: "Sent Invites"
                }, j && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == U || null === (o = U.data) || void 0 === o ? void 0 : o.error.message) || "There was an error loading the invites."), Ne && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == Ce || null === (c = Ce.data) || void 0 === c ? void 0 : c.error.message) || "There was an error deleting the invite."), N.createElement(ee.oI, null, N.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Invites")), N.createElement(ee.Ao, {
                    className: "mb-2"
                }, A ? N.createElement(ee.UU, {
                    width: "100%",
                    height: "75px"
                }) : N.createElement(Zr, null, 0 === (null == S ? void 0 : S.length) ? N.createElement("p", {
                    className: "m-0"
                }, "Nobody has been invited to this group!") : null, null == S ? void 0 : S.map((function(e) {
                    return N.createElement("div", {
                        className: "mb-2"
                    }, N.createElement(en, {
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
                }))))), N.createElement(yr.Z, {
                    title: "Blocked Requests"
                }, F && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == X || null === (s = X.data) || void 0 === s ? void 0 : s.error.message) || "There was an error loading the invites."), Ne && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == Ce || null === (u = Ce.data) || void 0 === u ? void 0 : u.error.message) || "There was an error deleting the invite."), N.createElement(ee.oI, null, N.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Blocked Applicants")), N.createElement(ee.Ao, {
                    className: "mb-2"
                }, A ? N.createElement(ee.UU, {
                    width: "100%",
                    height: "75px"
                }) : N.createElement(Zr, null, 0 === (null == z ? void 0 : z.length) ? N.createElement("p", {
                    className: "m-0"
                }, "Nobody has been blocked from joining the group!") : null, null == z ? void 0 : z.map((function(e) {
                    return N.createElement("div", {
                        className: "mb-2"
                    }, N.createElement(en, {
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
            var Zr = (0, a.Z)("div", {
                    target: "e1hocgvc0"
                })({
                    name: "1fx10vo",
                    styles: "display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:space-around"
                }),
                kr = n(87462),
                Ir = n(7452),
                Nr = n(66736),
                Cr = n(6655),
                Or = n(73647),
                Sr = n(68791),
                Tr = n(40067),
                jr = n(77708),
                Ar = n(7701),
                Mr = n(50352);
            const Lr = function(e) {
                var t, n, a, o, i, c, s = e.group,
                    u = (0, C.I0)(),
                    m = (0, C.v9)((function(e) {
                        return e.listingRow.modals.cancellation
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
                    f = (0, Q.XC)(),
                    E = f.data,
                    v = f.isLoading,
                    h = N.useState(!0),
                    b = (0, l.Z)(h, 2),
                    y = (b[0], b[1], (0, At.Ul)({
                        userId: s.ownerId,
                        groupId: s.id,
                        active: !0,
                        hydrate: !0
                    }, {
                        skip: !s,
                        refetchOnMountOrArgChange: !0
                    })),
                    x = y.data,
                    w = void 0 === x ? [] : x,
                    Z = y.isLoading,
                    I = y.isError,
                    O = y.error,
                    S = (0, Nr.CE)({
                        receiverId: E.id,
                        sellerId: s.ownerId,
                        active: !0,
                        mostRecent: !0
                    }, {
                        skip: !E || !(null != w && w.length),
                        refetchOnMountOrArgChange: !0
                    }),
                    T = S.data,
                    j = void 0 === T ? [] : T,
                    A = S.isLoading,
                    M = S.isError,
                    L = S.error,
                    P = N.useMemo((function() {
                        return w.map((function(e) {
                            return {
                                listing: e,
                                purchase: j.find((function(t) {
                                    return t.listingId === e.id
                                }))
                            }
                        }))
                    }), [j, w]),
                    R = (0, Cr.En)(),
                    U = R.data,
                    q = void 0 === U ? {
                        economyOnline: !1,
                        plannedOfflineWindowStart: null,
                        plannedOfflineWindowEnd: null,
                        offlineReason: null
                    } : U,
                    G = q.economyOnline,
                    z = q.plannedOfflineWindowStart,
                    F = q.plannedOfflineWindowEnd,
                    X = q.offlineReason,
                    D = R.isFetching,
                    _ = R.isError,
                    B = R.error,
                    J = (0, Cr.v$)({
                        userId: E.id
                    }, {
                        skip: !E || !G,
                        refetchOnMountOrArgChange: !0
                    }),
                    $ = J.data,
                    V = J.isLoading,
                    W = J.isError,
                    H = J.error,
                    Y = (0, Cr.pp)({
                        userId: E.id
                    }, {
                        skip: !E,
                        refetchOnMountOrArgChange: !0
                    }),
                    K = Y.data,
                    te = (void 0 === K ? {
                        balance: 0
                    } : K).balance,
                    ne = Y.isLoading,
                    le = Y.isError,
                    ae = (0, Cr.gI)(),
                    oe = (0, l.Z)(ae, 2),
                    ie = oe[0],
                    ce = oe[1],
                    se = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var t, n;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ie({
                                            userId: E.id,
                                            flow: "tos",
                                            returnUrl: window.location.href
                                        }).unwrap();
                                    case 2:
                                        t = e.sent, n = t.redirect, window.location.assign(n);
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
                    ue = null == $ ? void 0 : $.signed_tos,
                    me = N.useCallback((function(e) {
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
                    de = N.useCallback((function(e, t) {
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
                            tiliaTokenBalance: te,
                            tiliaTosAccepted: ue,
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
                            tiliaTokenBalance: te,
                            tiliaTosAccepted: ue,
                            includesGroupAccess: a,
                            includesGroupAccessRemove: o,
                            quantity: m,
                            enteredPurchaseQuantity: i,
                            selectedPurchaseQuantity: c
                        }))
                    }), [te, ue, s]),
                    pe = N.useState(!1),
                    ge = (0, l.Z)(pe, 2),
                    fe = ge[0],
                    Ee = ge[1];
                if (v || A || Z || D || V || ne) return N.createElement(ee.UU, {
                    width: "100%",
                    height: "200px"
                });
                var he = function(e) {
                        return null == j ? void 0 : j.some((function(t) {
                            return t.listingId === e
                        }))
                    },
                    be = fe ? null == P ? void 0 : P.filter((function(e) {
                        return he(e.listing.id)
                    })) : null == P ? void 0 : P.filter((function(e) {
                        return !he(e.listing.id)
                    })),
                    ye = (0, ve.dj)(z);
                return N.createElement(N.Fragment, null, N.createElement(ee.oI, {
                    className: "flex-row justify-content-center align-items-center"
                }, N.createElement("h4", {
                    className: "text-center flex-grow-1"
                }, "Store")), N.createElement(ee.Ao, null, _ && N.createElement(ee.qX, {
                    type: "error",
                    title: "Something strange happened"
                }, N.createElement("p", {
                    className: "m-0"
                }, "Error getting Tilia online status: ", B.status, " ", null !== (t = null === (n = B.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Unknown error")), !G && !_ && N.createElement(ee.qX, {
                    type: "warn",
                    title: "Store Maintenance"
                }, N.createElement(N.Fragment, null, N.createElement("p", {
                    className: "m-0"
                }, "Store Currently Offline: ", null != X ? X : "Unknown Reason"), N.createElement("p", {
                    className: "m-0"
                }, "Projected Service Return: ", (0, ve.M4)(F)))), W && G && N.createElement(ee.qX, {
                    type: "error",
                    title: "Something strange happened"
                }, "Error looking up Tilia ToS acceptance: ", H.status, " ", null !== (a = null === (o = H.data) || void 0 === o ? void 0 : o.error.message) && void 0 !== a ? a : "Unknown error"), M && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error loading purchases"
                }, null == L || null === (i = L.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message), I && N.createElement(ee.qX, {
                    type: "error",
                    title: "Error loading listings"
                }, null == O || null === (c = O.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message), !ue && G && N.createElement(ee.qX, {
                    type: "error",
                    title: "Before you support ".concat(s.name)
                }, "You'll need to accept the Terms of Service for our payment partner, Tilia.", N.createElement(ee.zx, {
                    "aria-label": "Review Tilia Terms",
                    onClick: se,
                    disabled: ce.isLoading,
                    loading: ce.isLoading,
                    className: "mt-2"
                }, N.createElement(ee.$1, {
                    icon: Ir.cw
                }), " Review Tilia Terms")), ye && G && N.createElement(ee.qX, {
                    type: "warn",
                    title: "Store Maintenance"
                }, N.createElement("p", {
                    className: "m-0"
                }, "Starts: ", (0, ve.M4)(z)), N.createElement("p", {
                    className: "m-0"
                }, "Ends: ", (0, ve.M4)(F))), N.createElement(re.Z, {
                    tabs: [{
                        name: "Available Subscriptions",
                        id: "available",
                        condition: !0
                    }, {
                        name: "Your Subscriptions",
                        id: "your",
                        condition: !0
                    }],
                    selected: fe ? "your" : "available",
                    onChange: function(e) {
                        return Ee("your" === e)
                    },
                    justify: "left"
                }), null != be && be.length ? null == be ? void 0 : be.map((function(e, t) {
                    return N.createElement(Sr.Z, (0, kr.Z)({
                        key: e.listing.id
                    }, e, {
                        group: s,
                        tiliaTokenBalance: !le && te,
                        tiliaTosAccepted: ue,
                        index: t,
                        economyOnline: G,
                        onCancel: me,
                        onPurchase: de
                    }))
                })) : N.createElement("p", null, "There are no subscription options here!"), m.isOpen && N.createElement(Tr.Z, null), d.isOpen && N.createElement(jr.Z, null), p.isOpen && N.createElement(Ar.Z, null), g.isOpen && N.createElement(Mr.Z, null)))
            };
            var Pr = n(28764),
                Rr = n(96427),
                Ur = n(42137),
                qr = n(9230);
            const Gr = function(e) {
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
                    g = (0, N.useState)(!1),
                    f = (0, l.Z)(g, 2),
                    E = f[0],
                    v = f[1],
                    h = n.createdAt,
                    b = n.imageUrl,
                    y = void 0 === b ? null : b,
                    x = n.title,
                    w = n.text,
                    Z = void 0 === w ? "" : w,
                    k = n.roleIds,
                    I = void 0 === k ? [] : k,
                    C = n.visibility,
                    O = null !== y && "" !== y,
                    S = a.roleIds,
                    T = (null === (t = Z.match(/[^\n]*\n[^\n]*/gi)) || void 0 === t ? void 0 : t.length) || 0,
                    j = (0, N.useMemo)((function() {
                        if (!E && T > 3) {
                            var e = [];
                            return (0, R.Z)(Z).forEach((function(t, n) {
                                "\n" !== t && "\r" !== t || e.push(n)
                            })), "".concat(Z.substring(0, e[3]), "... ")
                        }
                        return !E && Z.length > 400 ? "".concat(Z.substring(0, 400), "... ") : Z
                    }), [E, Z]),
                    A = (0, N.useMemo)((function() {
                        return !E && (Z.length > 400 || T > 3)
                    }), [E, Z]);
                return N.createElement("div", {
                    className: "d-flex align-items-center"
                }, N.createElement(Fr, {
                    isExpanded: E,
                    ref: i,
                    className: "container-fluid p-0"
                }, N.createElement("div", {
                    className: "row"
                }, N.createElement("div", {
                    className: "col-12 d-flex align-items-center d-sm-none"
                }, N.createElement(Wr, {
                    src: y
                })), N.createElement("div", {
                    className: "".concat(O ? " col-sm-6 col-md-6 col-lg-7 col-xl-7 col-12" : "col-12")
                }, N.createElement(Xr, null, N.createElement(_r, null, x), function() {
                    if (0 === I.length) return N.createElement(Br, null, N.createElement("div", null, N.createElement(ee.$1, {
                        icon: Ur.SZ
                    }), " ", (0, ve.h4)(h), N.createElement(ee.$1, {
                        className: "ms-2",
                        icon: qr.iO
                    }), " ", "public" === C ? "Public" : "Group"));
                    var e = (0, R.Z)(I).sort((function(e, t) {
                        return S.includes(t) ? 1 : -1
                    }));
                    return N.createElement(Br, null, N.createElement("div", null, N.createElement(ee.$1, {
                        icon: Ur.SZ
                    }), " ", (0, ve.h4)(h)), N.createElement($r, null, N.createElement(ee.$1, {
                        icon: Rr.Aq
                    }), " Only Seen By", " ", e.map((function(e) {
                        var t = p.find((function(t) {
                                return t.id === e
                            })),
                            n = !(null == t || !t.productId);
                        return t ? N.createElement(Jr, {
                            id: t.id,
                            hasRole: S.includes(t.id)
                        }, n ? N.createElement(N.Fragment, null, N.createElement(ee.$1, {
                            icon: Pr.n7,
                            className: "me-1"
                        }), t.name) : t.name) : null
                    }))))
                }(), N.createElement(Dr, {
                    hasImage: O,
                    isExpanded: E
                }, j, N.createElement(Vr, {
                    showReadMore: A,
                    onClick: function() {
                        return v(!0)
                    }
                }, "Read More")))), O && N.createElement("div", {
                    className: "col-12 col-sm-6 col-md-6 col-lg-5 col-xl-5 d-none d-sm-flex align-items-center"
                }, N.createElement(Wr, {
                    src: y
                })))), s && N.createElement("div", {
                    className: "ps-5 pe-4"
                }, N.createElement(zr, {
                    color: "danger",
                    onClick: function() {
                        return m(n)
                    }
                }, N.createElement(ee.$1, {
                    icon: U.$
                }))))
            };
            var zr = (0, a.Z)(qe.Z, {
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
                Xr = (0, a.Z)("div", {
                    target: "ewr2sfy7"
                })({
                    name: "1yjx7km",
                    styles: "padding:20px"
                }),
                Dr = (0, a.Z)("p", {
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
                Br = (0, a.Z)("h4", {
                    target: "ewr2sfy4"
                })({
                    name: "1rmpetc",
                    styles: "color:#737372;font-size:12px;font-weight:500;line-height:1.3em;display:inline-block"
                }),
                Jr = (0, a.Z)("div", {
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
            var Hr = function(e) {
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
                return N.createElement(Qr, null, N.createElement("h6", null, "Management Roles"), N.createElement("div", {
                    className: "d-flex flex-wrap"
                }, a.map((function(e) {
                    return N.createElement(ee.vc, {
                        id: e.id,
                        label: i(e) ? N.createElement(N.Fragment, null, N.createElement(ee.$1, {
                            icon: Pr.n7,
                            className: "me-1"
                        }), e.name) : e.name,
                        value: e.id,
                        checked: l.includes(e.id),
                        onChange: function(e) {
                            return n(e)
                        }
                    })
                }))), N.createElement("h6", {
                    className: "mt-2"
                }, "Member Roles"), N.createElement("div", {
                    className: "d-flex flex-wrap"
                }, o.map((function(e) {
                    return N.createElement(ee.vc, {
                        id: e.id,
                        label: i(e) ? N.createElement(N.Fragment, null, N.createElement(ee.$1, {
                            icon: Pr.n7,
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
            Hr.propTypes = {
                group: ue().object.isRequired,
                onChange: ue().func.isRequired,
                selectedRoles: ue().array.isRequired
            };
            const Yr = Hr;
            var Qr = (0, a.Z)("div", {
                target: "e1qh7s420"
            })({
                name: "kq62ql",
                styles: "background-color:#000000;border-radius:5px;padding:16px 20px"
            });
            var Kr = N.lazy((function() {
                    return Promise.all([n.e(8744), n.e(430), n.e(6681), n.e(4444), n.e(9908), n.e(229), n.e(2045)]).then(n.bind(n, 52045))
                })),
                el = (0, a.Z)(ee.gx, {
                    target: "e37d6q30"
                })({
                    name: "tz9wht",
                    styles: ">textarea{min-height:250px;}"
                });
            const tl = function(e) {
                var t = e.group,
                    n = (0, C.I0)(),
                    a = N.useState(""),
                    o = (0, l.Z)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = N.useState(""),
                    u = (0, l.Z)(s, 2),
                    m = u[0],
                    d = u[1],
                    p = N.useState("group"),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = N.useState([]),
                    h = (0, l.Z)(v, 2),
                    b = h[0],
                    y = h[1],
                    x = N.useState(null),
                    w = (0, l.Z)(x, 2),
                    Z = w[0],
                    O = w[1],
                    S = N.useState(!0),
                    j = (0, l.Z)(S, 2),
                    A = j[0],
                    M = j[1],
                    L = N.useState(!1),
                    P = (0, l.Z)(L, 2),
                    U = P[0],
                    q = P[1],
                    G = N.useState(""),
                    z = (0, l.Z)(G, 2),
                    F = z[0],
                    X = z[1],
                    D = (0, Q.q7)().data,
                    $ = void 0 === D ? [] : D,
                    V = (0, ce.t$)(),
                    W = (0, l.Z)(V, 2),
                    Y = W[0],
                    K = W[1].isLoading;
                (0, N.useEffect)((function() {
                    "selectedRoles" !== f && y([])
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
                                                sendNotification: A,
                                                roleIds: b,
                                                visibility: "public" === f ? "public" : "group"
                                            }).unwrap()).error) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return", console.error("Failed to create post:", n.error));
                                    case 3:
                                        c(""), d(""), O(null), M(!0), X(""), y([]), E("group");
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
                    re = $.includes("permission-user-gallery"),
                    le = [{
                        label: N.createElement(ee.X2, {
                            className: "d-flex flex-column"
                        }, N.createElement(J.Z, {
                            className: "mb-0"
                        }, "Public"), N.createElement("small", null, "Non-Group members can view this post")),
                        selectedLabel: "Public",
                        value: "public"
                    }, {
                        label: N.createElement(ee.X2, {
                            className: "d-flex flex-column"
                        }, N.createElement(J.Z, {
                            className: "mb-0"
                        }, "All Group Members"), N.createElement("small", null, "All group members can view this post")),
                        selectedLabel: "Group",
                        value: "group"
                    }, {
                        label: N.createElement(ee.X2, {
                            className: "d-flex flex-column"
                        }, N.createElement(J.Z, {
                            className: "mb-0"
                        }, "Selected Roles"), N.createElement("small", null, "Select the group roles who can view this post")),
                        selectedLabel: "Selected Roles",
                        value: "selectedRoles"
                    }];
                return N.createElement(ee.JX, {
                    className: "w-100"
                }, N.createElement(T.Z, {
                    isOpen: U,
                    className: (0, I.iv)({
                        name: "1ul0gzp",
                        styles: "max-width:1500px!important"
                    })
                }, N.createElement(_.Z, null, N.createElement(Kr, {
                    isSelector: !0,
                    activeTab: "photos",
                    selectedCallback: function(e, t) {
                        O(e), X(t), q(!1)
                    },
                    selectedId: null != Z ? Z : null
                })), N.createElement(B.Z, null, N.createElement(ee.zx, {
                    onClick: function() {
                        q(!1), n((0, H.b9)())
                    }
                }, "Cancel"))), N.createElement("div", {
                    className: "mb-3"
                }, N.createElement(J.Z, null, "Post title"), N.createElement(ee.II, {
                    type: "text",
                    value: m,
                    onChange: function(e) {
                        return d(e.target.value)
                    },
                    maxLength: 128
                })), N.createElement("div", {
                    className: "mb-3"
                }, N.createElement(J.Z, null, "Post message"), N.createElement(el, {
                    name: "post",
                    value: i,
                    onChange: function(e) {
                        return c(e.target.value)
                    },
                    maxLength: 2048,
                    required: !0,
                    className: "w-100"
                })), N.createElement("div", {
                    className: "mb-3"
                }, N.createElement(gt.Z, {
                    label: "Send notification",
                    value: "sendNotification",
                    defaultChecked: A,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        M(t)
                    }
                }), N.createElement(pt.Z, null, "If on, a notification of this post will be sent to all members of the group!")), N.createElement("div", {
                    className: "mb-3"
                }, N.createElement(J.Z, null, "Who can see this post"), N.createElement(ee.Lt, {
                    options: le,
                    className: "flex-grow-1",
                    value: f,
                    onChange: function(e) {
                        return E(e)
                    },
                    trimToLength: !0
                })), "selectedRoles" === f && N.createElement("div", {
                    className: "mb-3"
                }, N.createElement(Yr, {
                    group: t,
                    onChange: function(e) {
                        var t, n;
                        return null != e && null !== (t = e.target) && void 0 !== t && t.checked ? y([].concat((0, R.Z)(b), [null == e || null === (n = e.target) || void 0 === n ? void 0 : n.value])) : y(b.filter((function(t) {
                            var n;
                            return t !== (null == e || null === (n = e.target) || void 0 === n ? void 0 : n.value)
                        })))
                    },
                    selectedRoles: b
                })), N.createElement(ee.X2, {
                    className: "w-100"
                }, re && N.createElement(N.Fragment, null, N.createElement(ee.zx, {
                    neutral: !0,
                    expand: !0,
                    disabled: K,
                    loading: K,
                    onClick: function() {
                        q(!0)
                    }
                }, "Select an Image"), " "), N.createElement(ee.zx, {
                    disabled: ne || K,
                    loading: K,
                    expand: !0,
                    onClick: te
                }, "Create Post")), " ", N.createElement(Gr, {
                    postData: {
                        text: i,
                        title: m,
                        imageUrl: F,
                        roleIds: b
                    },
                    groupRoles: t.roles
                }))
            };
            var nl = n(78158);
            const rl = function(e) {
                var t = e.groupId,
                    n = e.showReportModal,
                    r = e.onClose,
                    a = (0, Q.XC)().data,
                    o = N.useState([]),
                    c = (0, l.Z)(o, 2),
                    s = c[0],
                    u = c[1],
                    m = N.useState([]),
                    d = (0, l.Z)(m, 2),
                    p = d[0],
                    g = d[1],
                    f = N.useState(""),
                    E = (0, l.Z)(f, 2),
                    v = E[0],
                    h = E[1],
                    y = (0, ce.A4)({
                        groupId: t,
                        userId: null == a ? void 0 : a.id
                    }, {
                        skip: !a
                    }),
                    x = y.data,
                    w = y.isLoading,
                    Z = (0, ce.gx)(),
                    k = (0, l.Z)(Z, 2),
                    I = k[0],
                    C = k[1].isLoading,
                    O = function(e, t) {
                        u(t ? [].concat((0, R.Z)(s), [e]) : s.filter((function(t) {
                            return t !== e
                        })))
                    },
                    S = function(e, t) {
                        g(t ? [].concat((0, R.Z)(p), [e]) : p.filter((function(t) {
                            return t !== e
                        })))
                    },
                    j = (null == x ? void 0 : x.results.length) > 0;
                return N.createElement(T.Z, {
                    isOpen: n && !w,
                    contentClassName: "tw-rounded-xl",
                    toggle: function() {
                        r()
                    }
                }, N.createElement(ee.oI, null, N.createElement("h4", null, "Report Group")), N.createElement(ee.Ao, null, N.createElement(ee.JX, null, N.createElement("div", {
                    className: "mb-2"
                }, N.createElement("p", {
                    className: "text-center"
                }, N.createElement("strong", null, s.length <= 0 ? "Why are you reporting this group?" : "Where is the offending content?"), " Select all that apply."), N.createElement(ll, null, N.createElement(al, null, N.createElement("h6", null, "Why:"), N.createElement("h6", null, "Where:")), N.createElement(al, null, N.createElement(ol, {
                    label: "Hateful",
                    disabled: j,
                    onChange: function(e) {
                        O("hateful", e.target.checked)
                    }
                }), N.createElement(ol, {
                    label: "Behaviour",
                    disabled: s.length <= 0,
                    onChange: function(e) {
                        S("group_user_behaviour", e.target.checked)
                    }
                })), N.createElement(al, null, N.createElement(ol, {
                    label: "Malicious",
                    disabled: j,
                    onChange: function(e) {
                        O("malicious", e.target.checked)
                    }
                }), N.createElement(ol, {
                    label: "Imagery",
                    disabled: s.length <= 0,
                    onChange: function(e) {
                        S("image_banner_gallery_icon", e.target.checked)
                    }
                })), N.createElement(al, null, N.createElement(ol, {
                    label: "Abusive/Disruptive",
                    disabled: j,
                    onChange: function(e) {
                        O("abusive_disruptive", e.target.checked)
                    }
                }), N.createElement(ol, {
                    label: "Name",
                    disabled: s.length <= 0,
                    onChange: function(e) {
                        S("group_name", e.target.checked)
                    }
                })), N.createElement(al, null, N.createElement(ol, {
                    label: "Inappropriate",
                    disabled: j,
                    onChange: function(e) {
                        O("inappropriate", e.target.checked)
                    }
                }), N.createElement(ol, {
                    label: "Description",
                    disabled: s.length <= 0,
                    onChange: function(e) {
                        S("group_description", e.target.checked)
                    }
                })))), s.length > 0 && p.length > 0 && N.createElement("div", {
                    className: "mt-2"
                }, N.createElement(ee.gx, {
                    placeholder: "What happened? (optional)",
                    onChange: function(e) {
                        h(e.target.value)
                    },
                    disabled: j
                })), j && N.createElement("div", {
                    className: "mt-2 text-center"
                }, N.createElement("p", null, "Thank you for filing a report.", N.createElement("br", null), "Your report is under review.")), N.createElement("div", {
                    className: "p-3"
                }, N.createElement(ee.X2, null, N.createElement(ee.zx, {
                    expand: !0,
                    danger: !0,
                    onClick: function() {
                        I({
                            groupId: t,
                            reasons: s,
                            locations: p,
                            description: v
                        }), u([]), g([]), h(""), r()
                    },
                    disabled: C || j || p.length <= 0 || s.length <= 0,
                    loading: C
                }, N.createElement(A.Z, {
                    icon: i.JH
                }), "  Submit"), " ", N.createElement(ee.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        r()
                    }
                }, N.createElement(A.Z, {
                    icon: b.NB
                }), "  Cancel"))))))
            };
            var ll = (0, a.Z)("div", {
                    target: "e1k7r1d32"
                })({
                    name: "8g59bk",
                    styles: "display:flex;flex-direction:column;justify-content:start;align-items:start;height:100%;width:100%;padding:0.5rem;background:#252a30;border-radius:8px;margin-bottom:15px"
                }),
                al = (0, a.Z)("div", {
                    target: "e1k7r1d31"
                })({
                    name: "u9ra9s",
                    styles: "display:flex;flex-direction:row;justify-content:space-around;align-items:start;height:100%;width:100%;padding:0.5rem;>*{flex:1;}"
                }),
                ol = (0, a.Z)(ee.XZ, {
                    target: "e1k7r1d30"
                })({
                    name: "18dr3x4",
                    styles: "margin:0.5rem"
                });
            const il = function(e) {
                var t = e.group,
                    n = e.showBlockModal,
                    r = e.onClose,
                    a = (0, ce.WG)(),
                    o = (0, l.Z)(a, 2),
                    c = o[0],
                    s = o[1].isSuccess;
                return N.useEffect((function() {
                    s && r()
                }), [s]), N.createElement(T.Z, {
                    className: "text-center text-break",
                    isOpen: n,
                    toggle: function() {
                        r()
                    }
                }, N.createElement(ee.oI, null, N.createElement("h4", null, "Block ", null == t ? void 0 : t.name, "?")), N.createElement(ee.Ao, null, N.createElement("p", null, "Are you sure you want to block ", null == t ? void 0 : t.name, "?", N.createElement("br", null), " You will no longer be able to:", N.createElement("br", null), N.createElement("br", null), "• Join this group.", N.createElement("br", null), "• Get invites from this group. 💔"), N.createElement(ee.X2, null, N.createElement(ee.zx, {
                    danger: !0,
                    expand: !0,
                    onClick: function() {
                        c({
                            groupId: null == t ? void 0 : t.id
                        })
                    }
                }, N.createElement(ee.$1, {
                    icon: i.JH
                }), "   Block"), " ", N.createElement(ee.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: r
                }, "Cancel"))))
            };
            const cl = function() {
                return N.createElement(N.Fragment, null, N.createElement(ee.oI, {
                    className: "text-center"
                }, N.createElement("h2", null, "You've Blocked this Group!")), N.createElement(ee.Ao, {
                    className: "text-center"
                }, "You won't get any invites from this group, and you can't join it.", N.createElement("br", null), N.createElement("br", null), "If you want to join this group or get invites from it, you have to unblock it first."))
            };
            var sl = n(9970);
            var ul = function(e) {
                var t = e.group,
                    n = e.currentUser,
                    r = e.targetUser,
                    l = e.onAccept,
                    a = e.onCancel,
                    o = e.isLoading,
                    i = t.transferTargetId === (null == n ? void 0 : n.id),
                    c = (null == t ? void 0 : t.ownerId) === (null == n ? void 0 : n.id);
                return N.createElement(dl, null, o ? N.createElement(ee.UU, {
                    width: "100%",
                    height: "30px",
                    className: "mt-4"
                }) : N.createElement(ee.X2, {
                    className: "tw-justify-between"
                }, N.createElement(ee.JX, {
                    className: "gap-1"
                }, N.createElement(ee.X2, null, N.createElement(ee.$1, {
                    className: "tw-mt-[8px]",
                    icon: g.qm,
                    width: 20
                }), i ? N.createElement("span", {
                    className: "tw-mt-[6px]"
                }, N.createElement(S.rU, {
                    to: "/home/user/".concat(r.id)
                }, r.displayName), " has initiated a transfer of ownership to you") : N.createElement("span", {
                    className: "tw-mt-[6px]"
                }, c ? "You have initiated an ownership transfer to " : "Ownership transfer has been initiated to ", N.createElement(S.rU, {
                    to: "/home/user/".concat(r.id)
                }, r.displayName)))), N.createElement(ee.JX, {
                    className: "gap-1"
                }, N.createElement(ee.X2, {
                    className: "tw-gap-[12px]"
                }, i && N.createElement(ee.zx, {
                    success: !0,
                    onClick: function() {
                        return l()
                    }
                }, N.createElement(ee.$1, {
                    icon: y.LE
                }), "  Accept"), N.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        return a()
                    }
                }, N.createElement(ee.$1, {
                    icon: sl.EO
                }), " ", i ? "Decline" : "Cancel")))))
            };
            ul.propTypes = {
                group: ue().object.isRequired,
                currentUser: ue().object.isRequired,
                targetUser: ue().object.isRequired,
                onCancel: ue().func.isRequired,
                inAccept: ue().func,
                isLoading: ue().bool
            };
            const ml = ul;
            var dl = (0, a.Z)("div", {
                    target: "ean9tdl0"
                })({
                    name: "1sccrd7",
                    styles: "display:flex;flex-direction:column;background-color:#252A30;margin-top:10px;margin-bottom:10px;border-radius:3px;padding:10px;border-left:3px solid #252A30"
                }),
                pl = n(5276),
                gl = n(84090);
            var fl = function(e) {
                var t = e.group,
                    n = void 0 === t ? null : t,
                    r = e.isEditMode,
                    a = (0, N.useState)(1),
                    o = (0, l.Z)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = (0, N.useState)(!1),
                    u = (0, l.Z)(s, 2),
                    m = u[0],
                    d = u[1],
                    p = (0, N.useState)(!1),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = (0, N.useState)(!1),
                    h = (0, l.Z)(v, 2),
                    b = h[0],
                    y = h[1],
                    x = n.id,
                    w = n.roles,
                    Z = n.myMember,
                    k = 10,
                    I = Math.ceil((i + 1) / k),
                    C = (0, ce.Aw)(),
                    O = (0, l.Z)(C, 2),
                    S = O[0],
                    T = O[1],
                    j = T.isLoading,
                    A = T.isSuccess,
                    M = (0, pl.Y)({
                        rootMargin: "50px 0px",
                        onEnter: function(e) {
                            (0, e.unobserve)(), c(i + 1)
                        }
                    }),
                    L = M.observe,
                    P = (0, pl.Y)({
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
                    G = (0, ce._n)({
                        pageValue: i + 1,
                        n: k,
                        groupId: x,
                        publicOnly: !Z
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    z = (0, N.useMemo)((function() {
                        var e = new Array(k * (I + 1)).fill(null);
                        return (0, R.Z)(new Set([U.data, q.data, G.data])).map((function(t) {
                            return null != t && t.posts ? e.splice.apply(e, [t.offset, t.posts.length].concat((0, R.Z)(t.posts))) : []
                        })), e.filter((function(e) {
                            return null !== e
                        }))
                    }), [k, U.data, q.data, G.data]);
                (0, N.useEffect)((function() {
                    d(z.some((function(e) {
                        return null !== e
                    })))
                }), [z]), (0, N.useEffect)((function() {
                    A && E(!1)
                }), [A]);
                var F = function(e) {
                        y(e), E(!0)
                    },
                    X = (0, N.useMemo)((function() {
                        return m ? z.map((function(e, t) {
                            return null !== e ? N.createElement("div", {
                                key: e.id
                            }, N.createElement(Gr, {
                                myMember: Z,
                                postData: e,
                                observe: t === z.length - 1 ? L : 0 === t && 1 !== i ? P : null,
                                isEditMode: r,
                                deleteCallback: F,
                                groupRoles: w
                            })) : null
                        })) : null
                    }), [z, m]);
                return m ? N.createElement("div", {
                    className: "py-4"
                }, N.createElement(gl.Z, {
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
                    isLoading: j
                }), N.createElement(hl, null, N.createElement(yl, null, N.createElement(bl, null, "Posts")), N.createElement(xl, null, N.createElement(vl, null, N.createElement("div", {
                    className: "col"
                }, X))))) : null
            };
            fl.propTypes = {};
            const El = fl;
            var vl = (0, a.Z)("div", {
                    target: "emafa4s4"
                })({
                    name: "1s65yl6",
                    styles: "max-height:450px;margin-top:15px;margin-bottom:10px;overflow:auto"
                }),
                hl = (0, a.Z)("div", {
                    target: "emafa4s3"
                })({
                    name: "11po3a3",
                    styles: "display:flex;flex-direction:column;align-items:start;justify-content:start;border-radius:8px;overflow:hidden;background:#2a2e34"
                }),
                bl = (0, a.Z)("h2", {
                    target: "emafa4s2"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                yl = (0, a.Z)(oe.JX, {
                    target: "emafa4s1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                xl = (0, a.Z)(yl, {
                    target: "emafa4s0"
                })({
                    name: "18clcmv",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto"
                });
            const wl = function(e) {
                var t, n, r, a = e.group,
                    o = (void 0 === a ? null : a).id,
                    i = (0, O.s0)(),
                    c = N.useState(0),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = N.useState(!1),
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
                    y = (null == v ? void 0 : v.length) > 50,
                    x = (0, ce.Rx)(),
                    w = (0, l.Z)(x, 2),
                    Z = w[0],
                    k = w[1],
                    I = k.error,
                    C = k.isSuccess,
                    S = k.isError,
                    T = k.isLoading,
                    j = null !== (t = null == v ? void 0 : v.filter((function(e) {
                        return !!e.user
                    }))) && void 0 !== t ? t : [],
                    A = h ? N.createElement(Zl, {
                        height: "130px"
                    }) : N.createElement(N.Fragment, null, null != j && j.length ? N.createElement(kl, null, null == j ? void 0 : j.slice(0, 50).map((function(e) {
                        return N.createElement(en, {
                            key: e.id,
                            member: e,
                            onDelete: function() {
                                Z({
                                    groupId: e.groupId,
                                    userId: e.userId
                                })
                            },
                            deleteButtonTitle: "Unban ".concat(e.user.displayName),
                            disableManagement: T,
                            onClick: function() {
                                i("/home/user/".concat(e.userId))
                            },
                            showView: !1
                        })
                    }))) : N.createElement("p", {
                        className: "text-center"
                    }, "Nobody is banned from this group. Everyone's on their best behavior!"));
                return N.createElement(N.Fragment, null, N.createElement(kn, {
                    isOpen: g,
                    cancelCallback: function() {
                        return f(!1)
                    },
                    groupId: o,
                    isGroupMemberOnly: !1
                }), N.createElement(ee.zx, {
                    className: "mb-2",
                    color: "primary",
                    onClick: function() {
                        f(!0)
                    }
                }, "Ban Somebody"), N.createElement(ee.oI, null, N.createElement("h4", {
                    className: "text-center"
                }, "Banned Users")), N.createElement(ee.Ao, null, b && N.createElement(ee.qX, {
                    type: "error",
                    title: "Something went wrong"
                }, "We couldn't load the list of banned users. Please try again later!"), C && N.createElement(ee.qX, {
                    slim: !0,
                    type: "success"
                }, "User unbanned. They can now be invited back in if you like."), S && N.createElement(ee.qX, {
                    type: "error",
                    title: "Failed to unban user"
                }, null !== (n = null === (r = I.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : I.data.error), A, N.createElement(Il, null, N.createElement(Nl, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u - 50)
                    },
                    disabled: h || 0 === u
                }, N.createElement(ee.$1, {
                    icon: ae.A3
                })), N.createElement(Cl, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u + 50)
                    },
                    disabled: h || !y
                }, N.createElement(ee.$1, {
                    icon: le._t
                })))))
            };
            var Zl = (0, a.Z)(ee.UU, {
                    target: "eqx7h3n4"
                })({
                    name: "2cp9od",
                    styles: "margin:8px"
                }),
                kl = (0, a.Z)("div", {
                    target: "eqx7h3n3"
                })({
                    name: "j9stxx",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;>*{width:300px;margin:8px;}"
                }),
                Il = (0, a.Z)("div", {
                    target: "eqx7h3n2"
                })({
                    name: "1vtota4",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-bottom:8px"
                }),
                Nl = (0, a.Z)(ee.zx, {
                    target: "eqx7h3n1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                Cl = (0, a.Z)(ee.zx, {
                    target: "eqx7h3n0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                });
            const Ol = function() {
                var e, t, n, a = N.useState(!1),
                    Z = (0, l.Z)(a, 2),
                    P = Z[0],
                    R = Z[1],
                    U = N.useState(!1),
                    q = (0, l.Z)(U, 2),
                    G = q[0],
                    z = q[1],
                    F = N.useState(!1),
                    X = (0, l.Z)(F, 2),
                    D = X[0],
                    _ = X[1],
                    B = N.useState(!1),
                    J = (0, l.Z)(B, 2),
                    $ = J[0],
                    V = J[1],
                    H = N.useState(!1),
                    te = (0, l.Z)(H, 2),
                    ne = te[0],
                    le = te[1],
                    ae = N.useState(!1),
                    oe = (0, l.Z)(ae, 2),
                    se = oe[0],
                    ue = oe[1],
                    me = N.useState(!1),
                    de = (0, l.Z)(me, 2),
                    pe = de[0],
                    ge = de[1],
                    fe = N.useState(!1),
                    Ee = (0, l.Z)(fe, 2),
                    ve = Ee[0],
                    he = Ee[1],
                    be = N.useState(!1),
                    ye = (0, l.Z)(be, 2),
                    xe = ye[0],
                    we = ye[1],
                    Ze = (0, Q.q7)().data,
                    ke = void 0 === Ze ? [] : Ze,
                    Ie = (0, C.I0)(),
                    Ne = (0, W.y)(),
                    Ce = Ne.data,
                    Oe = Ne.isLoading,
                    Se = 0,
                    Te = 0;
                Ne.isSuccess && (Se = Ce.constants.GROUPS.MAX_JOINED, Te = Ce.constants.GROUPS.MAX_JOINED_PLUS), ke.includes("permission-extra-group-count") && (Se = Math.max(Se, Te || 0));
                var je = (0, O.UO)().groupId,
                    Ae = (0, Q.XC)().data,
                    Me = (0, ce.r5)({
                        groupId: je,
                        purpose: "group"
                    }),
                    Le = Me.data,
                    Pe = Me.isSuccess,
                    Re = Me.isFetching,
                    Ue = Me.isError,
                    qe = Me.error,
                    Ge = (0, ie.pc)(),
                    ze = (0, ce.dj)({
                        userId: null == Ae ? void 0 : Ae.id
                    }),
                    Fe = ze.data,
                    Xe = ze.isLoading,
                    De = (0, ce.xI)(),
                    Be = (0, l.Z)(De, 2),
                    Je = Be[0],
                    $e = Be[1],
                    Ve = $e.isLoading,
                    We = $e.isError,
                    He = $e.error,
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
                    pt = null !== (null == Le ? void 0 : Le.deletedAt),
                    gt = (0, At.Ul)({
                        userId: null == Le ? void 0 : Le.ownerId,
                        groupId: null == Le ? void 0 : Le.id,
                        active: !0
                    }, {
                        skip: !Le
                    }),
                    ft = gt.data,
                    vt = void 0 === ft ? [] : ft,
                    ht = gt.isLoading;
                N.useEffect((function() {
                    Le && !Re && z(!0)
                }), [Le, Re]), N.useEffect((function() {
                    dt && ge(!1)
                }), [dt]);
                var bt, yt, xt = N.useMemo((function() {
                        return !!G && (null !== Le.transferTargetId || void 0 !== Le.transferTargetId)
                    }), [G]),
                    wt = (null == Le ? void 0 : Le.transferTargetId) === (null == Ae ? void 0 : Ae.id) ? null == Le ? void 0 : Le.ownerId : null == Le ? void 0 : Le.transferTargetId,
                    Zt = (0, K.GR)(wt, {
                        skip: null == Le || Re || !xt || !wt,
                        refetchOnMountOrArgChange: !0
                    }),
                    kt = Zt.data,
                    It = Zt.isFetching,
                    Nt = Zt.isError,
                    Ct = Zt.error,
                    Ot = (0, ce.HT)(),
                    St = (0, l.Z)(Ot, 2),
                    Tt = St[0],
                    jt = St[1],
                    Mt = jt.data,
                    Lt = (jt.isFetching, jt.isError),
                    Pt = jt.error,
                    Rt = (0, ce.rq)(),
                    Ut = (0, l.Z)(Rt, 2),
                    qt = Ut[0],
                    Gt = Ut[1],
                    zt = Gt.data,
                    Ft = (Gt.isFetching, Gt.isError),
                    Xt = (Gt.error, function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var t, n;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return he(!0), e.prev = 1, e.next = 4, Tt({
                                            groupId: Le.id,
                                            transferTargetId: Le.transferTargetId
                                        }).unwrap();
                                    case 4:
                                        Lt && Ie((0, Y.d)({
                                            title: "Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null == Pt || null === (t = Pt.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), he(!1)), !Lt && Mt && Ie((0, Y.d)({
                                            title: "Group Transfer Accepted",
                                            icon: w.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }), he(!1)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Ie((0, Y.d)({
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
                    Dt = function() {
                        var e = (0, r.Z)(k().mark((function e() {
                            var t, n;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return he(!0), e.prev = 1, e.next = 4, qt({
                                            groupId: Le.id,
                                            transferTargetId: null == Le ? void 0 : Le.transferTargetId
                                        }).unwrap();
                                    case 4:
                                        Ft && Ie((0, Y.d)({
                                            title: "Cancel Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null == zt || null === (t = zt.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), he(!1)), !Ft && zt && Ie((0, Y.d)({
                                            title: "Cancel Group Transfer Success",
                                            icon: w.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }), he(!1)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Ie((0, Y.d)({
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
                if (!Le || Re || ht || lt || et || Ve || Xe || Oe) return (se || ne) && (le(!1), ue(!1)), xt && !kt || It ? N.createElement(ee.UU, {
                    width: "100%",
                    height: "200px",
                    className: "mt-4"
                }) : !Nt || Ue || It ? Ue ? N.createElement(N.Fragment, null, N.createElement(ee.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: "Something went wrong with getting this group! (".concat(null == qe || null === (bt = qe.data) || void 0 === bt || null === (bt = bt.error) || void 0 === bt ? void 0 : bt.message, ")")
                }), N.createElement("div", {
                    className: "text-center"
                }, N.createElement(S.rU, {
                    to: "/home/groups"
                }, "Go Back! 😭"))) : N.createElement(N.Fragment, null, N.createElement(ee.UU, {
                    width: "100%",
                    height: "200px",
                    className: "mt-4"
                }), N.createElement(ee.UU, {
                    width: "100%",
                    height: "500px",
                    className: "mt-5"
                })) : N.createElement(ee.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: "Something went wrong with getting target user! (".concat(null == Ct || null === (yt = Ct.data) || void 0 === yt || null === (yt = yt.error) || void 0 === yt ? void 0 : yt.message, ")")
                });
                var _t, Bt = function() {
                        _(!1), Je({
                            groupId: je
                        })
                    },
                    Jt = function() {
                        V(!1), Le.rules ? _(!0) : Bt()
                    },
                    $t = Pe && Le.myMember && Le.myMember.roleIds.reduce((function(e, t) {
                        if (e) return e;
                        var n = Le.roles.find((function(e) {
                            return e.id === t
                        }));
                        return !(null == n || !n.requiresTwoFactor || !1 !== Le.myMember.has2FA) && n
                    }), !1),
                    Vt = Le.membershipStatus;
                if (Le.memberCount < Et.qH && (Fe.length < Se || Ae.tagsSet.has("admin_uncap_owned_groups"))) {
                    if (Vt === Et.oq.REQUESTED) _t = N.createElement(ee.zx, {
                        danger: !0,
                        onClick: function() {
                            return Ke({
                                groupId: je
                            })
                        },
                        disabled: Ve,
                        loading: Ve
                    }, N.createElement(A.Z, {
                        icon: b.NB
                    }), "  Cancel Join Request");
                    else if (Vt === Et.oq.INVITED) _t = N.createElement(ee.zx, {
                        success: !0,
                        onClick: Bt
                    }, N.createElement(A.Z, {
                        icon: y.LE
                    }), "  Accept Invite");
                    else if (Vt === Et.oq.USER_BLOCKED) _t = null;
                    else if (!Le.myMember) switch (Le.joinState) {
                        case Et.wN.OPEN:
                            _t = N.createElement(ee.zx, {
                                onClick: Jt,
                                disabled: Ve,
                                loading: Ve
                            }, N.createElement(A.Z, {
                                icon: o.r8
                            }), "  Join Group");
                            break;
                        case Et.wN.REQUEST:
                            _t = N.createElement(ee.zx, {
                                onClick: Jt
                            }, N.createElement(A.Z, {
                                icon: s.FU
                            }), " Request to Join");
                            break;
                        default:
                            _t = N.createElement(ee.zx, {
                                disabled: !0
                            }, "Closed to New Members")
                    }
                    Le.joinState !== Et.wN.INVITE || Le.myMember || (_t = N.createElement(ee.zx, {
                        disabled: !0
                    }, "Closed to New Members"))
                } else Fe.length >= Se && !Ae.tagsSet.has("admin_uncap_owned_groups") ? _t = N.createElement(ee.zx, {
                    disabled: !0
                }, "You can't join more than ", Se, " groups!") : Le.myMember || (_t = N.createElement(ee.zx, {
                    disabled: !0
                }, "Group is Full"));
                if (!Le.id) return null;
                var Wt = Vt === Et.oq.USER_BLOCKED;
                return N.createElement(N.Fragment, null, N.createElement(ee.$4, null, null !== (e = null == Le ? void 0 : Le.name) && void 0 !== e ? e : "Group"), N.createElement(T.Z, {
                    isOpen: $,
                    toggle: function() {
                        V(!1)
                    }
                }, N.createElement(Tl, null, N.createElement("h4", {
                    className: "text-center"
                }, "Unblock this Group?")), N.createElement(jl, null, N.createElement(ee.JX, null, N.createElement("div", {
                    className: "p-3 text-center"
                }, "Are you sure you want to unblock ", N.createElement("strong", null, Le.name), "?"), N.createElement("div", {
                    className: "p-3"
                }, N.createElement(ee.X2, null, N.createElement(ee.zx, {
                    expand: !0,
                    onClick: function() {
                        V(!1), rt({
                            groupId: je,
                            userId: Ae.id
                        })
                    }
                }, N.createElement(A.Z, {
                    icon: y.LE
                }), "  Unblock Group"), " ", N.createElement(ee.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        V(!1)
                    }
                }, N.createElement(A.Z, {
                    icon: b.NB
                }), "  Cancel")))))), N.createElement(T.Z, {
                    isOpen: D,
                    toggle: function() {
                        _(!1)
                    }
                }, N.createElement(Tl, null, N.createElement("h4", {
                    className: "text-center"
                }, "Rules")), N.createElement(jl, null, N.createElement(ee.JX, null, N.createElement("div", {
                    className: "p-3"
                }, N.createElement("p", null, "By joining this group, you agree to the following rules:"), N.createElement(Ml, null, Le.rules)), N.createElement("div", {
                    className: "p-3"
                }, N.createElement(ee.X2, null, N.createElement(ee.zx, {
                    expand: !0,
                    onClick: Bt,
                    disabled: Ve,
                    loading: Ve
                }, Le.joinState === Et.wN.OPEN ? N.createElement(N.Fragment, null, N.createElement(A.Z, {
                    icon: o.r8
                }), "  Join Group") : N.createElement(N.Fragment, null, N.createElement(A.Z, {
                    icon: s.FU
                }), "  Request to Join")), " ", N.createElement(ee.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        _(!1)
                    }
                }, N.createElement(A.Z, {
                    icon: b.NB
                }), "  Cancel")))))), N.createElement(T.Z, {
                    isOpen: pe,
                    toggle: function() {
                        return ge(!1)
                    }
                }, N.createElement(Tl, null, N.createElement("h4", {
                    className: "text-center"
                }, "Decline Group Invite?")), N.createElement(jl, null, N.createElement(ee.JX, null, N.createElement("div", {
                    className: "p-3 text-center"
                }, "Are you sure you want to decline invite to ", N.createElement("strong", null, Le.name), "?"), N.createElement("div", {
                    className: "px-3 text-center d-flex justify-content-center"
                }, N.createElement(_e.Z, {
                    id: "block-invites",
                    checked: xe,
                    onChange: function(e) {
                        return we(e.target.checked)
                    },
                    label: "Block this group, preventing further invites",
                    htmlFor: "block-invites"
                })), N.createElement("div", {
                    className: "p-3"
                }, N.createElement(ee.X2, null, N.createElement(ee.zx, {
                    expand: !0,
                    danger: !0,
                    onClick: function() {
                        return it({
                            groupId: je,
                            block: xe
                        })
                    },
                    loading: st
                }, N.createElement(A.Z, {
                    icon: y.LE
                }), "  Decline Invite"), " ", N.createElement(ee.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        ge(!1)
                    }
                }, N.createElement(A.Z, {
                    icon: b.NB
                }), "  Cancel")))))), N.createElement(rl, {
                    groupId: je,
                    showReportModal: ne,
                    onClose: function() {
                        le(!1)
                    }
                }), N.createElement(il, {
                    group: Le,
                    showBlockModal: se,
                    onClose: function() {
                        ue(!1)
                    }
                }), N.createElement("div", {
                    className: (0, I.iv)({
                        name: "g46w8s",
                        styles: "margin-bottom:30px"
                    })
                }, N.createElement(ee.X2, {
                    className: "mb-2 justify-content-end"
                }, (null == Le ? void 0 : Le.ownerId) !== Ae.id && N.createElement(N.Fragment, null, N.createElement(ee.zx, {
                    neutral: !0,
                    onClick: function() {
                        le(!0)
                    }
                }, N.createElement(ee.$1, {
                    icon: i.JH
                }), " Report"), "userblocked" !== (null == Le ? void 0 : Le.membershipStatus) && !(null != Le && Le.myMember) && N.createElement(N.Fragment, null, " ", N.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        ue(!0)
                    }
                }, N.createElement(ee.$1, {
                    icon: h.jA
                }), " Block")), "userblocked" === (null == Le ? void 0 : Le.membershipStatus) && N.createElement(N.Fragment, null, " ", N.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        V(!0)
                    }
                }, N.createElement(A.Z, {
                    icon: v.faBan
                }), " Unblock")))), N.createElement(nl.Z, {
                    group: Le
                }), $t && N.createElement(ee.X2, null, N.createElement(j.Z, {
                    color: "warning"
                }, "Your VRChat account does not have 2FA enabled. Your role '", $t.name, "' in ", Le.name, " requires this. Until you enable 2FA, your ability to manage ", Le.name, " will be limited.")), Ge && pt && N.createElement(ee.X2, null, N.createElement(Ll, null, " THIS GROUP HAS BEEN DELETED ")), We && N.createElement(ee.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: (null == He || null === (t = He.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred while trying to join ".concat(null == Le ? void 0 : Le.name, ".")
                }), ut && N.createElement(ee.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: (null == mt || null === (n = mt.data) || void 0 === n ? void 0 : n.error.message) || "An error occurred while trying to decline group invitation."
                }), N.createElement("div", {
                    className: "d-flex flex-row justify-content-center align-content-center mb-2"
                }, _t, Vt === Et.oq.INVITED && N.createElement(ee.zx, {
                    danger: !0,
                    onClick: function() {
                        return ge(!0)
                    },
                    className: "mx-2"
                }, N.createElement(A.Z, {
                    icon: E.YI
                }), "  Decline Invite")), Wt ? N.createElement(cl, null) : N.createElement(N.Fragment, null, xt && !It && wt && N.createElement(ml, {
                    group: Le,
                    currentUser: Ae,
                    targetUser: kt,
                    onAccept: Xt,
                    onCancel: Dt,
                    isLoading: ve
                }), N.createElement(re.Z, {
                    tabs: [{
                        name: "Overview",
                        to: "/home/group/".concat(Le.id),
                        end: !0,
                        icon: f.X8,
                        condition: !0
                    }, {
                        name: "Posts",
                        to: "posts",
                        icon: g.qm,
                        condition: M({
                            groupMember: null == Le ? void 0 : Le.myMember,
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
                        condition: null == Le ? void 0 : Le.myMember
                    }, {
                        name: "Gallery",
                        to: "galleries",
                        icon: m.l9,
                        condition: !0
                    }, {
                        name: "Members",
                        to: "members",
                        icon: u.r$,
                        condition: null == Le ? void 0 : Le.myMember
                    }, {
                        name: "Invites",
                        to: "invites",
                        icon: s.FU,
                        condition: Ge || M({
                            groupMember: null == Le ? void 0 : Le.myMember,
                            permission: "group-invites-manage"
                        })
                    }, {
                        name: "Settings",
                        to: "settings",
                        icon: c.b7,
                        condition: Ge || (null == Le ? void 0 : Le.myMember) || M({
                            groupMember: null == Le ? void 0 : Le.myMember,
                            permission: "group-data-manage"
                        }) || M({
                            groupMember: null == Le ? void 0 : Le.myMember,
                            permission: "group-roles-manage"
                        })
                    }, {
                        name: "Banned Users",
                        to: "bans",
                        icon: i.JH,
                        condition: Ge || M({
                            groupMember: null == Le ? void 0 : Le.myMember,
                            permission: "group-bans-manage"
                        })
                    }]
                }), N.createElement(O.Z5, null, N.createElement(O.AW, {
                    path: "/",
                    element: N.createElement(N.Fragment, null, Pe && N.createElement(El, {
                        group: Le
                    }), N.createElement(Sl, null, N.createElement(ee.JX, {
                        className: "m-1"
                    }, N.createElement(jn, {
                        langs: Le.languages
                    })), N.createElement(ee.JX, {
                        className: "m-1"
                    }, N.createElement(Gn, {
                        links: Le.links
                    }))), N.createElement(Sl, null, N.createElement(ee.JX, {
                        className: "m-1 mt-2 mw-100"
                    }, N.createElement(Tl, null, N.createElement("h4", null, "About This Group")), N.createElement(Al, null, N.createElement("p", {
                        className: "w-100 text-break"
                    }, Le.description))), Le.rules && N.createElement(N.Fragment, null, N.createElement(ee.JX, {
                        className: "m-1 mt-2 mw-100"
                    }, N.createElement(Tl, null, N.createElement("h4", null, "Rules")), N.createElement(Al, null, N.createElement("p", {
                        className: "w-100 text-break"
                    }, Le.rules))))))
                }), N.createElement(O.AW, {
                    path: "/posts",
                    element: (Ge || M({
                        groupMember: null == Le ? void 0 : Le.myMember,
                        permission: "group-announcement-manage"
                    })) && Pe ? N.createElement(N.Fragment, null, P ? N.createElement(ee.X2, null, N.createElement(ee.JX, {
                        className: "w-100"
                    }, N.createElement(ee.oI, null, N.createElement("h4", {
                        className: "text-center"
                    }, "Create Post")), N.createElement(ee.Ao, null, N.createElement(ee.JX, {
                        className: "w-100"
                    }, N.createElement(tl, {
                        group: Le
                    }), N.createElement(ee.zx, {
                        onClick: function() {
                            return R(!1)
                        }
                    }, "Cancel"))))) : N.createElement(ee.zx, {
                        onClick: function() {
                            return R(!0)
                        }
                    }, N.createElement(ee.$1, {
                        icon: o.r8
                    }), " Create Post"), N.createElement(El, {
                        isEditMode: !0,
                        group: Le
                    })) : N.createElement(L.Z, {
                        to: ".."
                    })
                }), N.createElement(O.AW, {
                    path: "/galleries/*",
                    element: N.createElement(ir, {
                        group: Le
                    })
                }), N.createElement(O.AW, {
                    path: "/subscribe",
                    element: N.createElement(L.Z, {
                        to: "store"
                    })
                }), N.createElement(O.AW, {
                    path: "/store",
                    element: N.createElement(Lr, {
                        group: Le
                    })
                }), N.createElement(O.AW, {
                    path: "/instances",
                    element: N.createElement(pr, {
                        group: Le
                    })
                }), N.createElement(O.AW, {
                    path: "/invites/*",
                    element: Ge || M({
                        groupMember: null == Le ? void 0 : Le.myMember,
                        permission: "group-invites-manage"
                    }) ? N.createElement(wr, {
                        group: Le
                    }) : N.createElement(L.Z, {
                        to: ".."
                    })
                }), N.createElement(O.AW, {
                    path: "/members",
                    element: N.createElement(On, {
                        group: Le
                    })
                }), N.createElement(O.AW, {
                    path: "/settings/*",
                    element: Ge || null != Le && Le.myMember || M({
                        groupMember: null == Le ? void 0 : Le.myMember,
                        permission: "group-data-manage"
                    }) || M({
                        groupMember: null == Le ? void 0 : Le.myMember,
                        permission: "group-roles-manage"
                    }) ? N.createElement(Yt, {
                        group: Le
                    }) : N.createElement(L.Z, {
                        to: ".."
                    })
                }), N.createElement(O.AW, {
                    path: "/bans",
                    element: Ge || M({
                        groupMember: null == Le ? void 0 : Le.myMember,
                        permission: "group-members-manage"
                    }) ? N.createElement(wl, {
                        group: Le
                    }) : N.createElement(L.Z, {
                        to: ".."
                    })
                })))))
            };
            var Sl = (0, a.Z)(ee.X2, {
                    target: "e7n20a25"
                })("flex-wrap:wrap;margin:-0.25rem;>", ee.JX, "{min-width:300px;flex:1;}"),
                Tl = (0, a.Z)(ee.JX, {
                    target: "e7n20a24"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                jl = (0, a.Z)(Tl, {
                    target: "e7n20a23"
                })({
                    name: "vnq3j7",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto;white-space:pre-line"
                }),
                Al = (0, a.Z)(jl, {
                    target: "e7n20a22"
                })({
                    name: "di36rf",
                    styles: "overflow-y:auto;white-space:pre-line;max-height:300px"
                }),
                Ml = (0, a.Z)("p", {
                    target: "e7n20a21"
                })({
                    name: "votlfh",
                    styles: "overflow-y:auto;white-space:pre-line;max-height:400px;background:#252a30;padding:0.5rem;border-radius:8px"
                }),
                Ll = (0, a.Z)("h3", {
                    target: "e7n20a20"
                })({
                    name: "bbnlne",
                    styles: "margin:14px auto;color:#ffd866;text-align:center;font-weight:bold"
                })
        },
        16869: (e, t, n) => {
            n.d(t, {
                Cb: () => m,
                G4: () => i,
                Ij: () => c,
                Jr: () => u,
                Ul: () => a,
                mr: () => o,
                oy: () => s
            });
            var r = n(42138),
                l = n(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getUserListings: e.query({
                                query: function(e) {
                                    var t = e.userId,
                                        n = e.n,
                                        r = void 0 === n ? 50 : n,
                                        l = e.offset,
                                        a = void 0 === l ? 0 : l,
                                        o = e.groupId,
                                        i = e.active,
                                        c = e.archived,
                                        s = e.hydrate;
                                    return {
                                        url: "user/".concat(t, "/listings"),
                                        params: {
                                            n: r,
                                            offset: a,
                                            groupId: o,
                                            active: i,
                                            archived: c,
                                            hydrate: s
                                        }
                                    }
                                },
                                providesTags: function(e, t, n) {
                                    var l = n.userId;
                                    return [].concat((0, r.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Listing",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "UserListings",
                                        id: l
                                    }])
                                }
                            }),
                            getListing: e.query({
                                query: function(e) {
                                    var t = e.listingId,
                                        n = e.hydrate;
                                    return {
                                        url: "listing/".concat(t),
                                        params: {
                                            hydrate: n
                                        }
                                    }
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "Listing",
                                        id: n.listingId
                                    }]
                                }
                            }),
                            createListing: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "listing",
                                        method: "POST",
                                        body: {
                                            displayName: e.displayName,
                                            description: e.description,
                                            tags: e.tags,
                                            listingVariants: e.listingVariants,
                                            imageId: e.imageId,
                                            productType: e.productType,
                                            products: e.products,
                                            priceTokens: e.priceTokens,
                                            duration: e.duration,
                                            durationType: e.durationType,
                                            active: e.active,
                                            groupId: e.groupId,
                                            permanent: e.permanent,
                                            instant: e.instant,
                                            stackable: e.stackable,
                                            recurrable: e.recurrable
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    var l = n.ownerId;
                                    return [].concat((0, r.Z)(e ? [{
                                        type: "Listing",
                                        id: e.id
                                    }] : []), [{
                                        type: "UserListings",
                                        id: l
                                    }])
                                }
                            }),
                            updateListing: e.mutation({
                                query: function(e) {
                                    var t = e.listingId,
                                        n = e.displayName,
                                        r = e.description,
                                        l = e.tags,
                                        a = e.listingVariants,
                                        o = e.imageId,
                                        i = e.products,
                                        c = e.priceTokens,
                                        s = e.duration,
                                        u = e.durationType,
                                        m = e.active,
                                        d = e.groupId,
                                        p = e.archive,
                                        g = e.permanent,
                                        f = e.instant,
                                        E = e.stackable,
                                        v = e.recurrable;
                                    return {
                                        url: "listing/".concat(t),
                                        method: "PUT",
                                        body: {
                                            displayName: n,
                                            description: r,
                                            tags: l,
                                            listingVariants: a,
                                            imageId: o,
                                            products: i,
                                            priceTokens: c,
                                            duration: s,
                                            durationType: u,
                                            active: m,
                                            groupId: d,
                                            archive: p,
                                            permanent: g,
                                            instant: f,
                                            stackable: E,
                                            recurrable: v
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "Listing",
                                        id: n.listingId
                                    }, {
                                        type: "UserListings",
                                        id: n.ownerId
                                    }]
                                }
                            }),
                            activateListing: e.mutation({
                                query: function(e) {
                                    var t = e.listingId;
                                    return {
                                        url: "listing/".concat(t, "/activate"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "Listing",
                                        id: n.listingId
                                    }, {
                                        type: "UserListings",
                                        id: n.ownerId
                                    }]
                                }
                            }),
                            deactivateListing: e.mutation({
                                query: function(e) {
                                    var t = e.listingId;
                                    return {
                                        url: "listing/".concat(t, "/deactivate"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "Listing",
                                        id: n.listingId
                                    }, {
                                        type: "UserListings",
                                        id: n.ownerId
                                    }]
                                }
                            }),
                            deleteListing: e.mutation({
                                query: function(e) {
                                    var t = e.listingId,
                                        n = e.force;
                                    return {
                                        url: "listing/".concat(t),
                                        method: "DELETE",
                                        params: {
                                            force: n
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "Listing",
                                        id: n.listingId
                                    }, {
                                        type: "UserListings",
                                        id: n.ownerId
                                    }]
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["UserListings", "Listing"]
                }),
                a = l.useGetUserListingsQuery,
                o = l.useGetListingQuery,
                i = l.useCreateListingMutation,
                c = l.useUpdateListingMutation,
                s = l.useActivateListingMutation,
                u = l.useDeactivateListingMutation,
                m = l.useDeleteListingMutation
        },
        67978: (e, t, n) => {
            n.d(t, {
                lZ: () => u,
                qX: () => m,
                rP: () => c,
                wE: () => d,
                x3: () => s,
                xq: () => p
            });
            var r = n(15861),
                l = n(42138),
                a = n(64687),
                o = n.n(a),
                i = n(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getUserProducts: e.query({
                                query: function(e) {
                                    var t = e.userId,
                                        n = e.n,
                                        r = void 0 === n ? 100 : n,
                                        l = e.offset,
                                        a = void 0 === l ? 0 : l,
                                        o = e.archived;
                                    return {
                                        url: "user/".concat(t, "/products"),
                                        params: {
                                            n: r,
                                            offset: a,
                                            archived: o
                                        }
                                    }
                                },
                                providesTags: function(e, t, n) {
                                    var r = n.userId;
                                    return [].concat((0, l.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Product",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "UserProducts",
                                        id: "PARTIAL-LIST:".concat(r)
                                    }])
                                }
                            }),
                            getAllUserProducts: e.query({
                                queryFn: (t = (0, r.Z)(o().mark((function e(t, n, r, a) {
                                    var i, c, s, u, m;
                                    return o().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                i = t.userId, c = t.archived, s = [], u = 0;
                                            case 3:
                                                return e.next = 6, a({
                                                    url: "user/".concat(i, "/products"),
                                                    params: {
                                                        archived: c,
                                                        n: 100,
                                                        offset: u
                                                    }
                                                });
                                            case 6:
                                                if (!(m = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: m.error
                                                });
                                            case 9:
                                                if (!(m.data.length > 0)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return s.push.apply(s, (0, l.Z)(m.data)), u += 100, e.abrupt("continue", 3);
                                            case 13:
                                                return e.abrupt("break", 16);
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: s
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, n, r, l) {
                                    return t.apply(this, arguments)
                                }),
                                providesTags: function(e, t, n) {
                                    var r = n.userId;
                                    return [].concat((0, l.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Product",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "UserProducts",
                                        id: "LIST:".concat(r)
                                    }])
                                }
                            }),
                            getListingProducts: e.query({
                                query: function(e) {
                                    var t = e.listingId;
                                    return "listing/".concat(t, "/products")
                                },
                                providesTags: function(e, t, n) {
                                    var r = n.listingId;
                                    return [].concat((0, l.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Product",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "ListingProducts",
                                        id: r
                                    }])
                                }
                            }),
                            getProduct: e.query({
                                query: function(e) {
                                    var t = e.productId;
                                    return "products/".concat(t)
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "Product",
                                        id: n.productId
                                    }]
                                }
                            }),
                            createProduct: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "products",
                                        method: "POST",
                                        body: {
                                            displayName: e.displayName,
                                            description: e.description,
                                            tags: e.tags,
                                            imageId: e.imageId,
                                            productType: e.productType,
                                            useForSubscriberList: e.useForSubscriberList,
                                            generateListing: e.generateListing,
                                            priceTokens: e.priceTokens,
                                            duration: e.duration,
                                            durationType: e.durationType,
                                            permanent: e.permanent,
                                            instant: e.instant
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    var r = n.ownerId;
                                    return [].concat((0, l.Z)(e ? [{
                                        type: "Product",
                                        id: e.id
                                    }] : []), [{
                                        type: "UserProducts",
                                        id: "PARTIAL-LIST:".concat(r)
                                    }, {
                                        type: "UserProducts",
                                        id: "LIST:".concat(r)
                                    }])
                                }
                            }),
                            updateProduct: e.mutation({
                                query: function(e) {
                                    var t = e.productId,
                                        n = e.displayName,
                                        r = e.description,
                                        l = e.tags,
                                        a = e.imageId,
                                        o = e.groupAccess,
                                        i = e.groupAccessRemove,
                                        c = e.useForSubscriberList;
                                    return {
                                        url: "products/".concat(t),
                                        method: "PUT",
                                        body: {
                                            displayName: n,
                                            description: r,
                                            tags: l,
                                            imageId: a,
                                            groupAccess: o,
                                            groupAccessRemove: i,
                                            useForSubscriberList: c
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    var r = n.productId,
                                        l = n.ownerId;
                                    return [{
                                        type: "Product",
                                        id: r
                                    }, {
                                        type: "UserProducts",
                                        id: "PARTIAL-LIST:".concat(l)
                                    }, {
                                        type: "UserProducts",
                                        id: "LIST:".concat(l)
                                    }]
                                }
                            }),
                            deleteProduct: e.mutation({
                                query: function(e) {
                                    var t = e.productId,
                                        n = e.force;
                                    return {
                                        url: "products/".concat(t),
                                        method: "DELETE",
                                        params: {
                                            force: n
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    var r = n.productId,
                                        l = n.ownerId;
                                    return [{
                                        type: "Product",
                                        id: r
                                    }, {
                                        type: "UserProducts",
                                        id: "PARTIAL-LIST:".concat(l)
                                    }, {
                                        type: "UserProducts",
                                        id: "LIST:".concat(l)
                                    }]
                                }
                            })
                        };
                        var t
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["ListingProducts", "UserProducts", "Product"]
                }),
                c = i.useGetUserProductsQuery,
                s = i.useGetAllUserProductsQuery,
                u = (i.useGetListingProductsQuery, i.useGetProductQuery),
                m = i.useCreateProductMutation,
                d = i.useUpdateProductMutation,
                p = i.useDeleteProductMutation
        },
        67263: (e, t, n) => {
            e.exports = n.p + "b42ff4cbb4e7012a20aa17c9311521f1c9346698fce51c44e30a12a4fdb6127d.png"
        }
    }
]);
//# sourceMappingURL=981e8a8da2fb3bd9c78419d687ca7560ea5418c1a4dd014c55fa45e668a8b794.js.map