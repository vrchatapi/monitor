"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4631], {
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
        4751: (e, t, n) => {
            n.d(t, {
                Z: () => I
            });
            var r = n(42138),
                l = n(4942),
                a = n(15861),
                o = n(54546),
                i = n(57310),
                c = n(21707),
                s = n(64687),
                u = n.n(s),
                m = n(67294),
                d = n(79655),
                p = n(17219),
                g = n(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getReports: e.query({
                                query: function(e) {
                                    return {
                                        url: "/moderationReports",
                                        params: {
                                            contentId: e.contentId
                                        }
                                    }
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "Reports",
                                        id: n.contentId
                                    }]
                                }
                            }),
                            createReport: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "/moderationReports",
                                        method: "POST",
                                        body: {
                                            type: e.type,
                                            category: e.category,
                                            reason: e.reason,
                                            contentId: e.contentId,
                                            description: e.description,
                                            details: e.details
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "Reports",
                                        id: n.contentId
                                    }]
                                }
                            })
                        }
                    }
                }),
                f = g.useGetReportsQuery,
                E = g.useCreateReportMutation,
                v = n(69116),
                h = n(80988),
                b = n(89421),
                w = n(11121),
                y = n(43862),
                x = n(76225),
                k = n(60006);

            function Z(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Z(Object(n), !0).forEach((function(t) {
                        (0, l.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Z(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const I = function(e) {
                var t, n, l = e.isOpen,
                    s = e.cancelCallback,
                    g = e.type,
                    Z = e.contentId,
                    I = e.contentName,
                    C = e.marketplace,
                    O = e.hasStore,
                    S = m.useState(""),
                    j = (0, o.Z)(S, 2),
                    M = j[0],
                    A = j[1],
                    P = m.useState(""),
                    T = (0, o.Z)(P, 2),
                    R = T[0],
                    L = T[1],
                    U = m.useState(""),
                    q = (0, o.Z)(U, 2),
                    z = q[0],
                    G = q[1],
                    D = m.useState([]),
                    F = (0, o.Z)(D, 2),
                    X = F[0],
                    _ = F[1],
                    $ = m.useState(!1),
                    J = (0, o.Z)($, 2),
                    B = J[0],
                    V = J[1],
                    W = (0, v.Tu)().user,
                    Y = (0, p.y)({}, {
                        skip: !l
                    }),
                    H = Y.data,
                    Q = Y.isLoading,
                    K = f({
                        contentId: Z
                    }, {
                        skip: !l
                    }),
                    ee = K.data,
                    te = K.isLoading,
                    ne = E(),
                    re = (0, o.Z)(ne, 2),
                    le = re[0],
                    ae = re[1],
                    oe = ae.isFetching,
                    ie = ae.isError,
                    ce = ae.isSuccess,
                    se = ae.reset;
                m.useEffect((function() {
                    M && L("")
                }), [M]), m.useEffect((function() {
                    "warnings" === R && G("")
                }), [R]), m.useEffect((function() {
                    l || setTimeout((function() {
                        se(), A(""), L(""), G(""), _([])
                    }), 500)
                }), [l]);
                var ue = function() {
                        var e = (0, a.Z)(u().mark((function e() {
                            var t, n;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, le(N({
                                            type: g,
                                            category: M,
                                            reason: R,
                                            contentId: Z,
                                            description: z
                                        }, X.length ? {
                                            details: {
                                                suggestedWarnings: X
                                            }
                                        } : {}));
                                    case 2:
                                        t = e.sent, (n = t.data) && V(n.supportRequired);
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
                    me = Q || te || oe,
                    de = m.useMemo((function() {
                        var e, t;
                        return Object.keys(null !== (e = null == H || null === (t = H.reportOptions) || void 0 === t ? void 0 : t[g]) && void 0 !== e ? e : {}).sort((function(e, t) {
                            var n, r;
                            return (null === (n = H.reportCategories) || void 0 === n || null === (n = n[e]) || void 0 === n ? void 0 : n.order) - (null === (r = H.reportCategories) || void 0 === r || null === (r = r[t]) || void 0 === r ? void 0 : r.order)
                        })).filter((function(e) {
                            return !e.endsWith("store") || O
                        })).map((function(e) {
                            var t, n, r, l, a, o;
                            return {
                                value: e,
                                label: null !== (t = null === (n = H.reportCategories) || void 0 === n || null === (n = n[e]) || void 0 === n ? void 0 : n.title) && void 0 !== t ? t : null === (r = H.reportCategories) || void 0 === r || null === (r = r[e]) || void 0 === r ? void 0 : r.text,
                                description: null !== (l = null === (a = H.reportCategories) || void 0 === a || null === (a = a[e]) || void 0 === a ? void 0 : a.description) && void 0 !== l ? l : null === (o = H.reportCategories) || void 0 === o || null === (o = o[e]) || void 0 === o ? void 0 : o.tooltip
                            }
                        }))
                    }), [g, H, O]);
                return m.useEffect((function() {
                    1 !== de.length || M || A(de[0].value)
                }), [de, M]), m.createElement(k.oA, {
                    role: "dialog",
                    type: "default",
                    isOpen: l,
                    toggle: s
                }, ce ? m.createElement(m.Fragment, null, B ? m.createElement(m.Fragment, null, m.createElement(k.eb, {
                    tag: "h4",
                    close: m.createElement(b.Z, {
                        onClick: s,
                        disabled: me
                    }),
                    toggle: s
                }, "Contact Support"), m.createElement(k.vc, {
                    className: "tw-flex tw-flex-col tw-justify-center tw-text-center tw-gap-1 tw-px-10"
                }, m.createElement(h.$1, {
                    icon: c.e7,
                    size: "4x",
                    className: "tw-mt-5 tw-mb-5"
                }), m.createElement("h4", {
                    className: "tw-mb-4"
                }, "Support Team Required"), m.createElement("strong", null, "It looks like you are trying to report an issue that requires our support team."), m.createElement("p", null, "Please provide us with information about your issue using our web form so we can provide you with assistance.")), m.createElement(k.tc, {
                    className: "tw-justify-center"
                }, m.createElement(k.Qj, {
                    to: "https://help.vrchat.com/hc/en-us/requests/new?ticket_form_id=360006750513&tf_360057451993=".concat(null == W ? void 0 : W.id, "&tf_subject=").concat(R, "%20").concat(M, "%20By%20").concat(g, "%20").concat(I, "&tf_description=").concat(z),
                    target: "_blank"
                }, "Open Support Form"))) : m.createElement(m.Fragment, null, m.createElement(k.eb, {
                    tag: "h4",
                    close: m.createElement(b.Z, {
                        onClick: s,
                        disabled: me
                    }),
                    toggle: s
                }, "Report Submitted"), m.createElement(k.vc, {
                    className: "tw-flex tw-flex-col tw-justify-center tw-text-center tw-gap-1 tw-px-10"
                }, m.createElement(h.$1, {
                    icon: i.XC,
                    size: "4x",
                    className: "tw-mt-5 tw-mb-5"
                }), m.createElement("h4", {
                    className: "tw-mb-4"
                }, "Your report is in - we've got it!"), m.createElement("strong", null, "Thanks for helping us keep things safe!"), m.createElement("p", null, "Your report has been received and will be reviewed by our moderation team.")), m.createElement(k.tc, {
                    className: "tw-justify-center"
                }, m.createElement(h.zx, {
                    color: "primary",
                    onClick: s,
                    className: "tw-px-20 tw-py-1"
                }, "Done")))) : m.createElement(m.Fragment, null, m.createElement(k.eb, {
                    className: "tw-capitalize",
                    tag: "h4",
                    close: m.createElement(b.Z, {
                        onClick: s,
                        disabled: me
                    }),
                    toggle: s
                }, "Report ", g), m.createElement(k.vc, null, Q ? m.createElement("div", {
                    className: "tw-text-center"
                }, m.createElement(y.Z, {
                    size: "3x"
                })) : m.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, ie && m.createElement(h.qX, {
                    type: "error",
                    title: "Error"
                }, "An error occurred while trying to submit the report."), m.createElement("p", null, "What are you reporting?"), m.createElement(x.Z, {
                    value: M,
                    onChange: function(e) {
                        return A(e.target.value)
                    },
                    options: de
                }), m.createElement("label", {
                    className: "tw-mt-5"
                }, "Reason", m.createElement(h.Lt, {
                    className: "tw-mt-2",
                    value: R,
                    onChange: L,
                    disabled: !M,
                    options: (null !== (t = null == H || null === (n = H.reportOptions) || void 0 === n || null === (n = n[g]) || void 0 === n ? void 0 : n[M]) && void 0 !== t ? t : []).map((function(e) {
                        var t;
                        return {
                            value: e,
                            label: null === (t = H.reportReasons) || void 0 === t || null === (t = t[e]) || void 0 === t ? void 0 : t.text
                        }
                    }))
                })), m.createElement("small", {
                    className: "tw-text-light-grey tw-mt-2"
                }, "Don't see your issue listed here?", m.createElement("a", {
                    href: C ? "https://vrch.at/marketplace-help" : "https://vrch.at/support",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "tw-ml-1"
                }, "Contact us")), "copyright" === R ? m.createElement(h.qX, {
                    type: "warn"
                }, "We take copyright seriously. Copyright infringement reports are handled differently from standard reports. If you own this content or are authorized to act on behalf of the owner,", m.createElement(d.rU, {
                    to: "/home/profile?dmcaClaimForm=true&dmcaTarget=".concat(Z),
                    className: "tw-ml-1"
                }, "submit a DMCA Claim"), ".") : "warnings" === R ? m.createElement(m.Fragment, null, m.createElement("label", {
                    className: "tw-mt-5 tw-mb-2"
                }, "Suggest Content Warnings"), m.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-2"
                }, m.createElement(w.Z, {
                    tags: X,
                    onSelectValues: function(e) {
                        return _([].concat((0, r.Z)(X), (0, r.Z)(e)))
                    },
                    onRemoveValue: function(e) {
                        return _(X.filter((function(t) {
                            return t !== e
                        })))
                    }
                }))) : null != ee && ee.results.some((function(e) {
                    return e.type === g && e.category === M && e.reason === R
                })) ? m.createElement(h.qX, {
                    type: "warn",
                    title: "You already have a pending report for this."
                }) : m.createElement("label", {
                    className: "tw-mt-5 tw-flex tw-flex-col tw-gap-2"
                }, "Notes", m.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Provide specific details to help moderators resolve the issue promptly."), m.createElement(h.gx, {
                    value: z,
                    onChange: function(e) {
                        return G(e.target.value)
                    },
                    maxLength: 5e3,
                    styleOverride: {
                        height: "90px"
                    }
                })))), m.createElement(k.tc, null, m.createElement(h.zx, {
                    disabled: me,
                    neutral: !0,
                    onClick: s,
                    className: "px-2",
                    expand: !0
                }, "Cancel"), m.createElement(h.zx, {
                    color: "primary",
                    loading: oe,
                    disabled: me || !M || !R || !z && "warnings" !== R || "copyright" === R || "warnings" === R && !X.length,
                    onClick: ue,
                    className: "px-2",
                    expand: !0
                }, "Send"))))
            }
        },
        76225: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(4965),
                l = n(67294);
            var a = (0, r.Z)("fieldset", {
                target: "e1hq0emc0"
            })({
                name: "13vf8go",
                styles: 'display:flex;flex-direction:column;gap:12px;label{cursor:pointer;font-size:16px;user-select:none;display:flex;gap:8px;align-items:center;.check{content:"";width:20px;height:20px;border:2px solid #677079;border-radius:50%;background-color:#333333;position:relative;}&:has(input[type=radio]:checked){.check{border-color:#1FD1ED;&::before{content:"";position:absolute;left:2px;top:2px;width:12px;height:12px;border-radius:50%;background-color:#1FD1ED;}}}input[type=radio]{display:none;}span small{display:block;font-size:12px;color:#9C9C9C;}}'
            });
            const o = function(e) {
                var t = e.value,
                    n = e.options,
                    r = e.onChange;
                return l.createElement(a, {
                    role: "radiogroup"
                }, (null != n ? n : []).map((function(e) {
                    return l.createElement("label", {
                        key: e.label
                    }, l.createElement("div", {
                        className: "check"
                    }), l.createElement("input", {
                        type: "radio",
                        value: e.value,
                        checked: t === e.value,
                        onChange: r
                    }), l.createElement("span", null, e.label, e.description && l.createElement("small", null, e.description)))
                })))
            }
        },
        94631: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => $l
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
                h = n(35117),
                b = n(68214),
                w = n(59545),
                y = n(68055),
                x = n(76553),
                k = n(6811),
                Z = n(64687),
                N = n.n(Z),
                I = n(83505),
                C = n(67294),
                O = n(32981),
                S = n(89250),
                j = n(79655),
                M = n(69699),
                A = n(23138),
                P = function(e) {
                    var t, n = e.group,
                        r = e.groupMember,
                        l = null === (t = n.roles) || void 0 === t ? void 0 : t.find((function(e) {
                            return 0 === e.order
                        }));
                    return null != l && null != r && r.roleIds.includes(l.id)
                },
                T = function(e) {
                    var t, n, r, l = e.groupMember,
                        a = e.permission;
                    return (null == l || null === (t = l.permissions) || void 0 === t ? void 0 : t.includes("*")) || null !== (n = null == l || null === (r = l.permissions) || void 0 === r ? void 0 : r.includes(a)) && void 0 !== n && n
                },
                R = n(46320),
                L = n(4942),
                U = n(42138),
                q = n(42619),
                z = n(26375),
                G = n(70265),
                D = n(5702),
                F = n(78439),
                X = n(47810),
                _ = n(95305),
                $ = n(35773),
                J = n(60766),
                B = n(23149),
                V = n(3126),
                W = n(30776),
                Y = n(83024),
                H = n(21464),
                Q = n(17219),
                K = n(5513),
                ee = n(64258),
                te = n(22202),
                ne = n(62437),
                re = n(80988),
                le = n(86646),
                ae = n(29104),
                oe = n(89421),
                ie = n(43862),
                ce = n(72998),
                se = n(65394),
                ue = n(85020),
                me = n(60006),
                de = n(69116),
                pe = n(93261),
                ge = n(45697),
                fe = n.n(ge),
                Ee = n(27484),
                ve = n.n(Ee),
                he = n(1646),
                be = n.n(he),
                we = n(84110),
                ye = n.n(we),
                xe = n(64358);
            ve().extend(be()), ve().extend(ye());
            const ke = function(e) {
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
                return C.createElement(Ze, null, C.createElement(re.JX, {
                    className: "tw-columns-3"
                }, C.createElement(re.pw, {
                    className: "tw-justify-self-start tw-my-2",
                    fitToCover: !0,
                    alt: i,
                    imageId: (0, xe.oQ)(a || o),
                    width: "100px",
                    height: "100px"
                })), C.createElement(re.JX, {
                    className: "tw-flex-[1_1_128px] tw-columns-6"
                }, C.createElement(j.rU, {
                    className: "tw-justify-self-start tw-text-2xl",
                    to: "/home/user/".concat(c)
                }, i), C.createElement("h4", {
                    className: "tw-justify-self-start"
                }, "Joined ".concat(m)), C.createElement("p", {
                    className: "tw-justify-self-start tw-text-[#737372] tw-text-[16px]"
                }, "Member")), C.createElement(re.JX, {
                    className: "tw-flex tw-flex-row tw-flex-[1_1_32px] tw-justify-center tw-items-center tw-columns-3"
                }, C.createElement(re.zx, {
                    expand: !0,
                    title: "Select New Owner",
                    onClick: function() {
                        n(t)
                    }
                }, "Select")))
            };
            var Ze = (0, a.Z)(re.X2, {
                target: "e12tzkfr0"
            })("margin:0.4rem 0;padding:0.5rem;background-color:#252a30;border:3px solid #252a30;transition:border-color 0.2s ease-in-out;border-radius:8px;flex-wrap:wrap;justify-content:center;&:hover{border-color:#054d5e;}&>*{margin:0.5rem;}&>", re.JX, ">p:last-child,&>", re.JX, ">ul:last-child{margin:0;}");

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
                        (0, L.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ce = function(e) {
                var t, n, r, a = e.group,
                    o = void 0 === a ? {} : a,
                    i = e.isOpen,
                    c = e.cancelCallback,
                    s = e.isGroupMemberOnly,
                    u = void 0 !== s && s,
                    m = e.memberSelectCallback,
                    d = e.isSelecting,
                    p = void 0 !== d && d,
                    g = (0, C.useRef)(null),
                    f = (0, C.useState)(""),
                    E = (0, l.Z)(f, 2),
                    v = E[0],
                    h = E[1],
                    b = (0, C.useState)(1),
                    w = (0, l.Z)(b, 2),
                    y = w[0],
                    x = w[1],
                    k = (0, de.Nr)(v),
                    Z = (0, C.useState)([
                        [],
                        []
                    ]),
                    N = (0, l.Z)(Z, 2),
                    I = N[0],
                    O = N[1],
                    S = (0, te.XC)().data,
                    j = null == o ? void 0 : o.id,
                    M = null == o ? void 0 : o.ownerId,
                    A = null == o ? void 0 : o.myMember,
                    P = (0, pe.Pv)(),
                    T = (0, l.Z)(P, 2),
                    R = T[0],
                    L = T[1],
                    q = L.data,
                    z = L.error,
                    G = L.isLoading,
                    D = (null == q || null === (t = q.members) || void 0 === t ? void 0 : t.length) < 25;
                C.useEffect((function() {
                    ee(0)
                }), []), C.useEffect((function() {
                    var e = (0, U.Z)(I);
                    if (q) {
                        var t;
                        if (q.page <= 0 && !v) e[0] = [null != o && o.myMember ? Ie(Ie({}, A), {}, {
                            userId: S.id,
                            user: Ie(Ie({}, S), {}, {
                                thumbnailUrl: null !== (t = S.profilePicOverride) && void 0 !== t ? t : S.currentAvatarImageUrl
                            })
                        }) : null].concat((0, U.Z)(q.members));
                        else e[q.page] = q.members;
                        O(e)
                    }
                }), [q]), (0, C.useEffect)((function() {
                    setTimeout((function() {
                        i && null != g && g.current && g.current.focus()
                    }), 300)
                }), [i, g]), (0, C.useEffect)((function() {
                    x(1)
                }), [v]), (0, C.useEffect)((function() {
                    h("")
                }), [i]);
                var F = (0, pe.Pi)({
                        groupId: j,
                        pageValue: y,
                        searchTerm: k,
                        n: 25
                    }, {
                        skip: "" === k || !i || k.length < 3 || !u
                    }),
                    X = F.data,
                    _ = F.error,
                    $ = F.isError,
                    J = F.isFetching,
                    B = F.isSuccess,
                    V = (0, ne.hi)({
                        pageValue: y,
                        searchTerm: k,
                        n: 25
                    }, {
                        skip: "" === k || !i || k.length < 3 || u
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
                    le = null == I ? void 0 : I.map((function(e, t) {
                        var n;
                        return null === (n = (0, U.Z)(e)) || void 0 === n || null === (n = n.sort((function(e) {
                            return e.userId === M ? -1 : 0
                        }))) || void 0 === n || null === (n = n.filter((function(e, t, n) {
                            return n.findIndex((function(t) {
                                return t.userId === e.userId
                            })) === t
                        }))) || void 0 === n ? void 0 : n.map((function(e) {
                            return e.userId === M ? null : C.createElement(ke, {
                                key: e.id,
                                member: e,
                                onSelectCallback: function(e) {
                                    return m(e)
                                }
                            })
                        }))
                    }));
                return C.createElement(me.oA, {
                    role: "dialog",
                    isOpen: i,
                    toggle: c,
                    keyboard: !0,
                    autoFocus: !1,
                    size: "lg"
                }, C.createElement(me.eb, {
                    tag: "h4",
                    close: C.createElement(oe.Z, {
                        onClick: c
                    }),
                    toggle: c
                }, u ? "Group Members Search" : "Users Search"), C.createElement(me.vc, null, C.createElement(me.T_, null, C.createElement(re.II, {
                    id: "search-product-list",
                    onChange: function(e) {
                        return h(e.target.value)
                    },
                    placeholder: u ? "Search Group Members..." : "Search for users...",
                    ref: g,
                    type: "text",
                    value: v
                }), ($ || H) && C.createElement("p", {
                    className: "text-center m-5 text-warning h-25"
                }, "Something went wrong with the search, please try again later!", C.createElement("br", null), $ && C.createElement("code", null, null == _ || null === (n = _.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), H && C.createElement("code", null, null == Y || null === (r = Y.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message)), J || p && C.createElement(me.Um, null, C.createElement("div", {
                    className: "text-center m-5 text-secondary h-25"
                }, C.createElement(ie.Z, null))), !B && !J && !$ && u && C.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "Search for members in your group."), B && !J && u && C.createElement(me.Um, null, X.results.map((function(e) {
                    return C.createElement(ke, {
                        key: e.id,
                        member: e,
                        onSelectCallback: function(e) {
                            return m(e)
                        }
                    })
                })), 0 === X.results.length && C.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "We couldn't find anything with that search.")), !K && !Q && !H && !u && C.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "Search for users on VRChat."), K && C.createElement(me.Um, null, 0 === W.results.length && C.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "We couldn't find anything with that search.")), G ? C.createElement(re.UU, {
                    height: "200px"
                }) : C.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, le), C.createElement("div", {
                    className: "p-2",
                    style: {
                        margin: "2px auto 0",
                        textAlign: "center"
                    }
                }, C.createElement(re.zx, {
                    onClick: function() {
                        return ee(page)
                    },
                    disabled: G || z || D,
                    loading: G
                }, z || D ? "No more members..." : "List More Members")), (B || K) && C.createElement(me.Gz, null, C.createElement(me.IT, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return x(y - 1)
                    },
                    disabled: 1 === y || J || Q
                }, C.createElement(re.$1, {
                    icon: ue.A3
                })), C.createElement("span", null, y), C.createElement(me.UV, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return x(y + 1)
                    },
                    disabled: (null == X ? void 0 : X.isLastPage) || (null == W ? void 0 : W.isLastPage) || J || Q
                }, C.createElement(re.$1, {
                    icon: se._t
                }))))))
            };
            Ce.propTypes = {
                group: fe().object,
                isOpen: fe().bool.isRequired,
                cancelCallback: fe().func.isRequired,
                memberEditCallback: fe().func,
                memberSelectCallback: fe().func
            };
            const Oe = Ce;
            var Se = n(46027);
            const je = function(e) {
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
                return C.createElement(C.Fragment, null, C.createElement(re.oI, {
                    className: "mt-2"
                }, C.createElement("h4", {
                    className: "text-center"
                }, "Group Ownership Transfer")), C.createElement(re.Ao, null, c || p || !d || !i ? C.createElement("div", {
                    className: "full-width text-center"
                }, C.createElement(ie.Z, null)) : C.createElement(C.Fragment, null, s && C.createElement(re.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == u || null === (t = u.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), g && C.createElement(re.qX, {
                    type: "error",
                    title: "Error Fetching New Group Owner Data"
                }, (null == f || null === (n = f.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unkown error fetching New Group Owner Data"), C.createElement(re.X2, null, C.createElement("span", {
                    className: "full-width text-center"
                }, "You can choose to cancel the transfer")), C.createElement(re.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, C.createElement(re.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, C.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "Current Owner"), C.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, C.createElement(re.$1, {
                    className: "tw-mr-2",
                    icon: Se.nm
                }), null == i ? void 0 : i.displayName)), C.createElement(re.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, C.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "New Owner"), d && C.createElement(re.X2, {
                    className: "tw-flex tw-m-1 tw-font-bold gx-0 gap-1"
                }, C.createElement(re.pw, {
                    width: 24,
                    style: {
                        maxWidth: "24px",
                        objectFit: "cover"
                    },
                    imageId: (d.thumbnailUrl || d.currentAvatarThumbnailImageUrl).match("(?!/)file_[^/]+")[0],
                    alt: null == d ? void 0 : d.displayName
                }), null == d ? void 0 : d.displayName))), a ? C.createElement("div", {
                    className: "full-width text-center"
                }, C.createElement(ie.Z, null)) : C.createElement("div", {
                    className: (0, I.iv)({
                        name: "pc0kie",
                        styles: ">*{margin-top:15px;}"
                    })
                }, C.createElement(re.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, C.createElement(re.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, C.createElement(re.zx, {
                    onClick: function() {
                        return l()
                    },
                    danger: !0,
                    className: "tw-max-w-[100%]"
                }, "Cancel Transfer")))))))
            };
            var Me = n(57982);
            const Ae = function(e) {
                var t = e.isOpen,
                    n = e.cancelCallback;
                return C.createElement(me.oA, {
                    role: "dialog",
                    isOpen: t,
                    toggle: n,
                    keyboard: !0,
                    autoFocus: !1,
                    size: "lg"
                }, C.createElement(me.eb, {
                    tag: "h4",
                    close: C.createElement(oe.Z, {
                        onClick: n
                    }),
                    toggle: n
                }, "About Group Ownership Transfer"), C.createElement(me.vc, null, C.createElement("h4", null, "You can transfer your group ownership to another member of the group. the target member and the group must meet the requirements below."), C.createElement(me.T_, null, C.createElement("ul", null, C.createElement("li", null, "The target member has verified their email address ", "(", "check the Email section via", " ", C.createElement(j.rU, {
                    className: "tw-text-link-highlight",
                    to: "/home/profile",
                    target: "_blank"
                }, "account settings"), ")"), C.createElement("li", null, "The target member has an active VRC Plus subscription"), C.createElement("li", null, "The target member can still own more groups ", "(", "each user can own up to 5 groups", ")"), C.createElement("li", null, "The group is not monetized")))))
            };
            var Pe = function(e) {
                var t, n, r = e.group,
                    a = e.onButtonClick,
                    o = e.isLoading,
                    i = C.useState(!1),
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
                    E = (0, pe.ek)({
                        groupId: r.id
                    }, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    v = E.data,
                    h = E.isFetching,
                    b = E.isError,
                    w = E.error,
                    y = C.useMemo((function() {
                        return null == v || !v.requirements || !v.requirements.groupNotMonetized
                    }), [v, b]);
                return C.createElement(C.Fragment, null, s && C.createElement(Ae, {
                    isOpen: s,
                    cancelCallback: function() {
                        return u(!1)
                    }
                }), C.createElement(re.oI, {
                    className: "mt-2"
                }, C.createElement("h4", {
                    className: "text-center"
                }, "Group Ownership Transfer")), C.createElement(re.Ao, null, p || h ? C.createElement("div", {
                    className: "full-width text-center"
                }, C.createElement(ie.Z, null)) : C.createElement(C.Fragment, null, g && C.createElement(re.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == f || null === (t = f.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), b && C.createElement(re.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == w || null === (n = w.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unkown error fetching Group Owner Requirements Data"), y && !b ? C.createElement("span", {
                    className: "tw-mb-2"
                }, C.createElement(re.qX, {
                    type: "error"
                }, "Your group is not qualified for ownership transfer because it is currently being monetized.", " ", C.createElement("button", {
                    type: "button",
                    className: "tw-text-[#1FD1ED] tw-cursor-pointer tw-border-none tw-bg-transparent tw-p-0 tw-m-0",
                    onClick: function() {
                        return u(!0)
                    }
                }, "Learn more about Group Ownership Transfer"), ".")) : C.createElement("span", {
                    className: "tw-mb-2"
                }, "You can transfer your group ownership to another member of the group, this cannot be undone once the transfer is complete. The target member and the group must meet", " ", C.createElement("button", {
                    type: "button",
                    className: "tw-text-[#1FD1ED] tw-cursor-pointer tw-border-none tw-bg-transparent tw-p-0 tw-m-0",
                    onClick: function() {
                        return u(!0)
                    }
                }, "these requirements"), " ", "to qualify for the transfer."), C.createElement(re.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, C.createElement(re.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, C.createElement("p", null, "Current Owner"), C.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, C.createElement(re.$1, {
                    className: "tw-mr-2",
                    icon: Se.nm
                }), null == d ? void 0 : d.displayName)), C.createElement(re.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, C.createElement("p", null, "New Owner"), C.createElement(re.zx, {
                    className: "tw-max-w-[250px]",
                    onClick: function() {
                        return a()
                    },
                    disabled: o || b || y,
                    loading: o
                }, C.createElement(re.$1, {
                    className: "tw-mr-2",
                    icon: Me.faMagnifyingGlass
                }), "Search Group Members"))))))
            };
            Pe.propTypes = {
                group: fe().object.isRequired,
                onButtonClick: fe().func.isRequired,
                isLoading: fe().bool.isRequired
            };
            const Te = Pe;
            var Re, Le = "hasVerifiedEmail",
                Ue = "targetCanOwnMoreGroups",
                qe = "targetIsGroupMember",
                ze = "hasVRCPlus",
                Ge = "groupNotMonetized",
                De = (Re = {}, (0, L.Z)(Re, Le, "Email address has not been verified"), (0, L.Z)(Re, Ue, "Already owns maximum nubmer of groups per user"), (0, L.Z)(Re, qe, "Is not a valid member of the group"), (0, L.Z)(Re, ze, "Does not have an active VRChat Plus subscription"), (0, L.Z)(Re, Ge, "Group is not valid because it is monetized"), Re);
            const Fe = function(e) {
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
                return C.createElement(C.Fragment, null, C.createElement(re.sm, {
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
                }, c || m ? C.createElement("div", {
                    className: "tw-full-width tw-text-center"
                }, C.createElement(ie.Z, null)) : C.createElement("div", null, d && C.createElement(re.qX, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == p || null === (t = p.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), !(null != r && r.valid) && (null == r ? void 0 : r.reasons) && C.createElement(re.qX, {
                    type: "error",
                    title: "Oops, it seems the selected member does not meet the following requirement(s)"
                }, r.reasons.map((function(e) {
                    var t;
                    return C.createElement("p", null, "• ".concat(null !== (t = De[e]) && void 0 !== t ? t : "Unknown Validity Reason"))
                }))), C.createElement(re.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-mt-2"
                }, C.createElement("span", {
                    className: "tw-full-width tw-text-center"
                }, "Are you sure you want to transfer your group ownership?")), C.createElement(re.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-bg-[#252a30] tw-px-8 tw-text-[16px] tw-rounded-lg tw-border-current tw-transition tw-ease-in-out tw-delay-150 tw-bg-[#252a30] tw-mt-2"
                }, C.createElement(re.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, C.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "Current Owner"), C.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, C.createElement(re.$1, {
                    className: "tw-mr-2",
                    icon: Se.nm
                }), null == u ? void 0 : u.displayName)), C.createElement(re.JX, {
                    className: "tw-flex-[1_0_0%]"
                }, C.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "New Owner"), (null == l ? void 0 : l.user) && C.createElement(re.X2, {
                    className: "tw-flex tw-m-1 tw-font-bold gx-0 gap-1"
                }, C.createElement(re.pw, {
                    width: 24,
                    style: {
                        maxWidth: "24px",
                        objectFit: "cover"
                    },
                    imageId: (0, xe.oQ)(l.user.thumbnailUrl || l.user.currentAvatarThumbnailImageUrl),
                    alt: l.user.displayName
                }), l.user.displayName))), C.createElement(re.X2, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-mt-2"
                }, C.createElement("span", {
                    className: "tw-full-width tw-text-center"
                }, "This cannot be undone once the transfer is complete.")))))
            };
            var Xe = n(34698),
                _e = n(58877),
                $e = n(25402);
            const Je = function(e) {
                var t, n = e.groupBioLinks,
                    a = e.callback,
                    o = e.index,
                    i = C.useState(null !== (t = null == n ? void 0 : n[o]) && void 0 !== t ? t : ""),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = C.useState(!1),
                    d = (0, l.Z)(m, 2),
                    p = d[0],
                    g = d[1],
                    f = C.useState(s),
                    E = (0, l.Z)(f, 2),
                    v = E[0],
                    h = E[1],
                    b = C.useState(!0),
                    w = (0, l.Z)(b, 2),
                    y = w[0],
                    x = w[1],
                    k = null != n ? n : [],
                    Z = function() {
                        g(!0), x(!1)
                    },
                    I = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var t;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        (t = [].concat(k))[o] = s, a(t), g(!1), h(s);
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
                        var e = (0, r.Z)(N().mark((function e() {
                            var t;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        (t = [].concat(k))[o] = "", a(t), g(!1), u(""), h("");
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
                return p ? C.createElement("div", {
                    className: "w-100 p-2 p-l-0"
                }, C.createElement("div", {
                    className: "input-group"
                }, C.createElement("input", {
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
                }), C.createElement("div", {
                    className: "input-group-append"
                }, C.createElement("span", {
                    className: "input-group-text",
                    id: "basic-addon1"
                }, C.createElement($e.QZ, {
                    url: s,
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                })))), C.createElement(Xe.Z, {
                    onClick: function() {
                        g(!1), u(v)
                    }
                }, "Cancel"), C.createElement(Xe.Z, {
                    onClick: I,
                    disabled: y,
                    color: "primary"
                }, "Ok")) : o > 0 && null == s ? C.createElement("div", null) : !(o > 0) || "" !== s && null != s || "" !== k[o - 1] && null != k[o - 1] ? null == s || "" === s ? C.createElement("div", null, C.createElement("div", {
                    className: "btn-group w-100 p-2 p-l-0"
                }, C.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "btn btn-outline-light btn-block",
                    style: {
                        whiteSpace: "normal"
                    },
                    onClick: Z
                }, "Link"))) : C.createElement("div", null, C.createElement(_e.Z, {
                    className: "p-2 w-100 p-l-0"
                }, C.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "btn btn-outline-light",
                    style: {
                        width: "255px",
                        overflow: "hidden"
                    },
                    onClick: Z
                }, k[o]), C.createElement(Be, {
                    className: "btn btn-outline-danger h-100 ratio-1x1",
                    "aria-label": "Close",
                    onClick: O
                }, C.createElement("span", {
                    "aria-hidden": "true"
                }, "×")))) : C.createElement("div", null)
            };
            var Be = (0, a.Z)(Xe.Z, {
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
                    u = C.useState(!1),
                    m = (0, l.Z)(u, 2),
                    d = m[0],
                    p = m[1],
                    g = C.useState([]),
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
                            }))) : v([].concat((0, U.Z)(E), [e]))
                        }
                    };
                C.useEffect((function() {
                    var e = [];
                    null == E || E.forEach((function(t) {
                        return e.push(null == t ? void 0 : t.value)
                    })), s(e)
                }), [E]), C.useEffect((function() {
                    E.length !== i.length && v(i)
                }), [i]);
                var b = C.useMemo((function() {
                    return i.length === E.length ? "View All" : "".concat(E.length, " selected")
                }), [i, E]);
                return C.createElement(et, {
                    className: "mb-2",
                    role: "radiogroup",
                    "aria-label": n.ariaLabel,
                    onMouseLeave: function() {
                        d && p(!1)
                    }
                }, C.createElement(rt, {
                    disabled: a,
                    expanded: d
                }, C.createElement(lt, {
                    type: "button",
                    "aria-label": "Expand Options",
                    disabled: a,
                    onClick: function(e) {
                        e.stopPropagation(), e.preventDefault(), p(!d)
                    }
                }, !!n && C.createElement(Ke, null, n.labelValue), C.createElement(Qe, {
                    className: "tw-gap-2 tw-text-center tw-justify-center"
                }, b), C.createElement(le.Z, {
                    icon: Ve.eW,
                    color: "white",
                    className: "ms-3"
                })), d && i.length > 0 && C.createElement(at, {
                    className: "tw-px-[10px] tw-gap-1 tw-py-1"
                }, i.map((function(e, t) {
                    var n, r;
                    return C.createElement(We.Z, {
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
                return e.isLoading ? C.createElement(it, {
                    className: "justify-content-center"
                }, C.createElement("div", {
                    className: "spinner-border"
                })) : C.createElement(it, null, C.createElement(ct, null, ve()(t.created_at).format("MM/DD/YYYY hh:mm A")), t.description)
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
                    r = C.useState(25),
                    a = (0, l.Z)(r, 2),
                    o = a[0],
                    i = a[1],
                    c = C.useState(0),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = C.useState(0),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = C.useState([]),
                    v = (0, l.Z)(E, 2),
                    h = v[0],
                    b = v[1],
                    w = C.useState([]),
                    y = (0, l.Z)(w, 2),
                    x = y[0],
                    k = y[1],
                    Z = C.useState([]),
                    N = (0, l.Z)(Z, 2),
                    I = N[0],
                    O = N[1],
                    S = (0, pe.hg)(),
                    j = (0, l.Z)(S, 2),
                    M = j[0],
                    A = j[1],
                    P = A.data,
                    T = A.isFetching,
                    R = A.isError,
                    L = (0, pe.rw)({
                        groupId: n.id
                    }, {
                        skip: !n
                    }),
                    q = L.data,
                    z = L.isFetching,
                    G = L.isError;
                C.useEffect((function() {
                    O(x.map((function(e) {
                        return e.value
                    })))
                }), [x]), C.useEffect((function() {
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
                        b(e), 0 === x.length && k(e.map((function(e) {
                            return e.value
                        })))
                    }
                    u < 0 ? m(0) : M({
                        groupId: n.id,
                        perPage: o,
                        offset: u,
                        eventTypes: I ? (0, U.Z)(I) : []
                    })
                }), [o, u, q, I, x]), C.useEffect((function() {
                    null != P && P.totalCount && f(P.totalCount)
                }), [P]);
                var D = C.createElement(dt, null, C.createElement(pt, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u - o)
                    },
                    disabled: 0 === u
                }, C.createElement(re.$1, {
                    icon: ue.A3
                })), C.createElement("span", null, "(", u, " - ", g < o + u ? g : o + u, ") / ", g), C.createElement(gt, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u + o)
                    },
                    disabled: g < o + u
                }, C.createElement(re.$1, {
                    icon: se._t
                })));
                return C.createElement("div", null, R && C.createElement(re.qX, {
                    title: "Error",
                    type: "error",
                    className: "mb-2"
                }, "There was an error loading the audit log."), G && !z && C.createElement(re.qX, {
                    title: "Error",
                    type: "error",
                    className: "mb-2"
                }, "There was an error loading the filterable audit log types."), C.createElement(re.oI, null, C.createElement("h4", {
                    className: "text-center"
                }, "Audit Log")), C.createElement(re.Ao, null, C.createElement(re.X2, {
                    className: "tw-flex-row tw-justify-evenly"
                }, !!h.length && C.createElement(He, {
                    labelProps: {
                        ariaLabel: "LogTypes",
                        labelValue: "Filter Log Types: "
                    },
                    disabled: !n,
                    options: h,
                    onTriggerUpdate: function(e) {
                        return O(e)
                    }
                }), C.createElement(mt, {
                    label: "Items per-page",
                    onChange: i,
                    options: st,
                    value: o,
                    className: "mb-2"
                })), D, C.createElement("div", {
                    className: "audit-log"
                }, (null !== (t = null == P ? void 0 : P.results) && void 0 !== t ? t : Array(o).fill({})).map((function(e, t) {
                    var n;
                    return C.createElement(ot, {
                        key: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "log-".concat(t),
                        log: e,
                        n: o,
                        offset: u,
                        isLoading: T
                    })
                }))), D))
            };
            var mt = (0, a.Z)(re.Lt, {
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
                pt = (0, a.Z)(re.zx, {
                    target: "e88tm0e1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                gt = (0, a.Z)(re.zx, {
                    target: "e88tm0e0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                ft = n(91054),
                Et = n(27149),
                vt = n(59895),
                ht = n(81362),
                bt = n(63221),
                wt = [{
                    label: "Visible",
                    value: bt.iI.VISIBLE
                }, {
                    label: "Friends Only",
                    value: bt.iI.FRIENDS
                }, {
                    label: "Hidden",
                    value: bt.iI.HIDDEN
                }];
            const yt = function(e) {
                var t, n, a, o, i = e.groupId,
                    c = (0, O.I0)(),
                    s = (0, S.s0)(),
                    u = (0, te.XC)(),
                    m = u.data,
                    d = u.isLoading,
                    p = u.error,
                    g = u.isError,
                    f = C.useState(),
                    E = (0, l.Z)(f, 2),
                    v = E[0],
                    h = E[1],
                    b = C.useState(!0),
                    w = (0, l.Z)(b, 2),
                    y = w[0],
                    x = w[1],
                    k = C.useState(!0),
                    Z = (0, l.Z)(k, 2),
                    I = Z[0],
                    j = Z[1],
                    M = C.useState(!1),
                    A = (0, l.Z)(M, 2),
                    P = A[0],
                    T = A[1],
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
                (0, C.useEffect)((function() {
                    var e;
                    if (D && L) {
                        L.privacy === bt.TW.DEFAULT && D.visibility !== v && h(D.visibility);
                        var t = (null == D ? void 0 : D.isSubscribedToAnnouncements) || (null == D ? void 0 : D.isSubscribedToPosts);
                        x(t);
                        var n = null === (e = null == D ? void 0 : D.isSubscribedToEventAnnouncements) || void 0 === e || e;
                        j(n)
                    }
                }), [L, D]);
                var $ = d || U || F,
                    J = (null == L ? void 0 : L.ownerId) === (null == D ? void 0 : D.userId),
                    B = (0, pe.uX)(),
                    Y = (0, l.Z)(B, 2),
                    H = Y[0],
                    Q = Y[1],
                    K = Q.isLoading,
                    ne = Q.error,
                    le = Q.isError,
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
                                        return T(!1), e.next = 3, se({
                                            groupId: i,
                                            userId: m.id
                                        });
                                    case 3:
                                        e.sent.error || (c((0, ee.d)({
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
                return g ? C.createElement(ht.Z, {
                    error: p,
                    statusCode: p.status
                }) : z ? C.createElement(ht.Z, {
                    error: q,
                    statusCode: q.status
                }) : _ ? C.createElement(ht.Z, {
                    error: X,
                    statusCode: X.status
                }) : C.createElement(C.Fragment, null, C.createElement(re.oI, null, C.createElement("h4", {
                    className: "text-center"
                }, "Membership Preferences")), C.createElement(re.Ao, null, $ ? C.createElement(re.UU, {
                    height: "250px"
                }) : C.createElement(C.Fragment, null, oe && C.createElement(re.qX, {
                    type: "success",
                    title: "Updated preferences",
                    slim: !0
                }, "Your preferences were saved successfully"), le && C.createElement(re.qX, {
                    type: "error",
                    title: "Error updating preferences"
                }, ne.status, " : ", null !== (t = null === (n = ne.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : ""), L.privacy === bt.TW.DEFAULT && C.createElement(V.Z, null, "Visibility ", C.createElement(re.Lt, {
                    onChange: h,
                    value: v,
                    options: wt
                }), C.createElement("small", null, "Do you want everyone to see this group on your profile, just your friends to see it, or to keep it secret? This only affects your own profile.")), C.createElement("div", {
                    className: "my-2"
                }, C.createElement(ae.Z, {
                    label: "Subscribe to Posts",
                    value: "isSubscribedToPosts",
                    defaultChecked: y,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        x(t)
                    }
                }), C.createElement(W.Z, null, "Tick this to hear all the latest news and goss from this group")), C.createElement("div", {
                    className: "my-2"
                }, C.createElement(ae.Z, {
                    label: "Subscribe to Event Announcements",
                    value: "isSubscribedToEventAnnouncements",
                    defaultChecked: I,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        j(t)
                    }
                }), C.createElement(W.Z, null, "Tick this to receive notifications about events from this group")), C.createElement(re.zx, {
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
                }, C.createElement(re.$1, {
                    icon: Et.r6
                }), " Save Preferences"))), C.createElement(re.oI, {
                    className: "mt-2"
                }, C.createElement("h4", {
                    className: "text-center"
                }, "Leave Group")), C.createElement(re.Ao, null, $ ? C.createElement(re.UU, {
                    height: "100px",
                    delay: 50
                }) : C.createElement(C.Fragment, null, ge && C.createElement(re.qX, {
                    type: "error",
                    title: "Error leaving group"
                }, de.status, " : ", null !== (a = null === (o = de.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : ""), C.createElement(re.sm, {
                    headerText: "Leave Group",
                    bodyText: "Are you sure you want to leave this group?",
                    confirmText: "Yes, Leave Group",
                    confirmCallback: fe,
                    cancelText: "Never Mind!",
                    cancelCallback: function() {
                        T(!1)
                    },
                    isOpen: P
                }), J ? C.createElement(re.qX, {
                    type: "warning",
                    title: "You own this group!"
                }, "You can't leave your own group, but you can delete the group over in General settings.") : C.createElement("p", null, "This group not your thing anymore? No problem."), C.createElement(re.zx, {
                    warning: !0,
                    onClick: function() {
                        T(!0)
                    },
                    loading: me,
                    disabled: J || me
                }, C.createElement(re.$1, {
                    icon: ft.HE
                }), " Leave Group"))))
            };
            var xt = n(41145),
                kt = n(62228),
                Zt = n(609),
                Nt = n(90068),
                It = n(16869),
                Ct = n(67978),
                Ot = n(81780),
                St = n(33073),
                jt = n(95896);

            function Mt(e, t) {
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
                    t % 2 ? Mt(Object(n), !0).forEach((function(t) {
                        (0, L.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Pt = {
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
                    f = (0, O.I0)(),
                    E = (0, S.s0)(),
                    v = (0, S.UO)(),
                    h = (0, C.useRef)(!0),
                    b = (0, de.pc)(),
                    y = C.useMemo((function() {
                        var e;
                        return "new" === v.roleId ? At(At({}, Pt), {}, {
                            requiresPurchase: "paid" === v.newRoleType
                        }, "paid" === v.newRoleType && {
                            productPriceTokens: jt.nk,
                            productDuration: 1,
                            productDurationType: "months"
                        }) : null == u || null === (e = u.roles) || void 0 === e ? void 0 : e.find((function(e) {
                            return e.id === v.roleId
                        }))
                    }), [u, v]),
                    k = C.useState({}),
                    Z = (0, l.Z)(k, 2),
                    I = Z[0],
                    A = Z[1],
                    P = C.useState(null),
                    R = (0, l.Z)(P, 2),
                    z = R[0],
                    G = R[1],
                    D = C.useState({}),
                    F = (0, l.Z)(D, 2),
                    X = F[0],
                    B = F[1],
                    Y = C.useState(null != y && y.defaultRole ? "permissions" : "general"),
                    H = (0, l.Z)(Y, 2),
                    Q = H[0],
                    K = H[1],
                    te = C.useState(null == y ? void 0 : y.requiresTwoFactor),
                    ne = (0, l.Z)(te, 2),
                    oe = ne[0],
                    ie = ne[1],
                    se = C.useState(null == y ? void 0 : y.isAddedOnJoin),
                    ue = (0, l.Z)(se, 2),
                    me = ue[0],
                    ge = ue[1],
                    fe = C.useState(null == y ? void 0 : y.isSelfAssignable),
                    Ee = (0, l.Z)(fe, 2),
                    ve = Ee[0],
                    he = Ee[1],
                    be = C.useState((null == u ? void 0 : u.joinState) === bt.wN.OPEN),
                    we = (0, l.Z)(be, 2),
                    ye = we[0],
                    ke = we[1],
                    Ze = C.useState(!1),
                    Ne = (0, l.Z)(Ze, 2),
                    Ie = Ne[0],
                    Ce = Ne[1],
                    Oe = C.useState((null == y ? void 0 : y.permissions) || []),
                    Se = (0, l.Z)(Oe, 2),
                    je = Se[0],
                    Me = Se[1],
                    Ae = C.useState(!1),
                    Pe = (0, l.Z)(Ae, 2),
                    Te = Pe[0],
                    Re = Pe[1],
                    Le = C.useState(null),
                    Ue = (0, l.Z)(Le, 2),
                    qe = Ue[0],
                    ze = Ue[1],
                    Ge = C.useState(null),
                    De = (0, l.Z)(Ge, 2),
                    Fe = De[0],
                    Xe = De[1],
                    _e = (0, pe.mt)({
                        groupId: u.id
                    }),
                    $e = _e.data,
                    Je = _e.isLoading,
                    Be = _e.isError,
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
                    ht = gt.error,
                    wt = (0, Nt.P2)(),
                    yt = C.useState(!1),
                    Mt = (0, l.Z)(yt, 2),
                    Tt = Mt[0],
                    Rt = Mt[1],
                    Lt = (0, Ct.lZ)({
                        productId: null == y ? void 0 : y.productId
                    }, {
                        skip: !(null != y && y.productId),
                        refetchOnMountOrArgChange: !0
                    }),
                    Ut = Lt.data,
                    qt = Lt.isFetching,
                    zt = Lt.isUninitialized,
                    Gt = (0, It.Ul)({
                        userId: null == u ? void 0 : u.ownerId,
                        groupId: null == u ? void 0 : u.id,
                        active: !0
                    }, {
                        skip: !u || !(null != y && y.productId),
                        refetchOnMountOrArgChange: !0
                    }),
                    Dt = Gt.data,
                    Ft = void 0 === Dt ? [] : Dt,
                    Xt = Gt.isFetching,
                    _t = Gt.isUninitialized,
                    $t = C.useMemo((function() {
                        var e;
                        return (null === (e = _t ? [] : Ft) || void 0 === e ? void 0 : e.filter((function(e) {
                            var t, n = e.id,
                                r = e.active,
                                l = e.archived;
                            return r && !l && !zt && (null == Ut || null === (t = Ut.parentListings) || void 0 === t ? void 0 : t.includes(n))
                        }))) || []
                    }), [Ut, zt, Ft, _t]),
                    Jt = Qe || lt || ft || Je || qt || Xt,
                    Bt = (null == u ? void 0 : u.joinState) === bt.wN.OPEN ? "Your group is already set to Free Join, so enabling this option won’t have any effect. Subscribers will still join automatically." : "When enabled, anyone can purchase this role and join the group, regardless of the group’s join rules. This option overrides standard join settings.";
                (0, C.useEffect)((function() {
                    if (Ut) {
                        if (Ce(Ut.groupAccessRemove), (null == u ? void 0 : u.joinState) === bt.wN.OPEN) return ke(!0), void G(At(At({}, z), {}, {
                            groupAccess: !0
                        }));
                        ke(Ut.groupAccess)
                    }
                }), [Ut]);
                var Vt = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = {};
                    "new" === (null == y ? void 0 : y.id) && (t = At({}, y)), e || (ie(null == y ? void 0 : y.requiresTwoFactor), ge(null == y ? void 0 : y.isAddedOnJoin), he(null == y ? void 0 : y.isSelfAssignable), Me((null == y ? void 0 : y.permissions) || [])), d(0), A(t), G(null)
                };
                (0, C.useEffect)((function() {
                    Vt(), K(null != y && y.defaultRole ? "permissions" : "general")
                }), [u, v]), (0, C.useEffect)((function() {
                    h.current ? h.current = !1 : ((null == y ? void 0 : y.requiresTwoFactor) !== oe && A(At(At({}, I), {}, {
                        requiresTwoFactor: oe
                    })), (null == y ? void 0 : y.isAddedOnJoin) !== me && A(At(At({}, I), {}, {
                        isAddedOnJoin: me
                    })), (null == y ? void 0 : y.isSelfAssignable) !== ve && A(At(At({}, I), {}, {
                        isSelfAssignable: ve
                    })), (null == y ? void 0 : y.permissions) !== je && A(At(At({}, I), {}, {
                        permissions: je
                    })))
                }), [oe, me, ve, je]), (0, C.useEffect)((function() {
                    0 !== p && A(At(At({}, I), {}, {
                        order: p + y.order
                    }))
                }), [p]);
                var Wt = (0, de._b)($e),
                    Yt = C.useMemo((function() {
                        return (0, xe.Ps)({
                            permissionName: qe,
                            permissionsMap: Wt
                        })
                    }), [qe, Wt]);
                if ((0, C.useEffect)((function() {
                        if (je.length > 0 && Wt && Object.keys(Wt).length > 0) {
                            var e = je.filter((function(e) {
                                return !e.includes("*") && !Wt[e]
                            }));
                            e.length > 0 && Xe(e)
                        }
                    }), [je, Wt]), !y || Je || Be) return null;
                var Ht = function(e) {
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
                        A(At(At({}, I), {}, (0, L.Z)({}, n, r))), B(At(At({}, X), {}, (0, L.Z)({}, n, e.target.checkValidity())))
                    },
                    Qt = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var t, n, r, l;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (Rt(!1), "new" !== (t = At({}, I)).id) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.prev = 3, e.next = 6, Ye({
                                            groupId: u.id,
                                            data: t
                                        }).unwrap();
                                    case 6:
                                        !(n = e.sent).error && null != n && n.id && E("../roles/".concat(null == n ? void 0 : n.id)), e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(3), wt({
                                            error: e.t0
                                        }) && Rt(!0);
                                    case 13:
                                        e.next = 28;
                                        break;
                                    case 15:
                                        if (!(Object.keys(I).length > 0)) {
                                            e.next = 28;
                                            break
                                        }
                                        return e.prev = 16, e.next = 19, st({
                                            groupId: u.id,
                                            roleId: y.id,
                                            productId: (null == Ut ? void 0 : Ut.id) || null,
                                            productData: z,
                                            roleData: t
                                        }).unwrap();
                                    case 19:
                                        Vt(!0), e.next = 28;
                                        break;
                                    case 22:
                                        if (e.prev = 22, e.t1 = e.catch(16), !wt({
                                                error: e.t1
                                            })) {
                                            e.next = 27;
                                            break
                                        }
                                        return Rt(!0), e.abrupt("return");
                                    case 27:
                                        f((0, ee.d)({
                                            title: "Failed to update role",
                                            icon: x.eH,
                                            message: null !== (r = null === (l = e.t1.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 28:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 10],
                                [16, 22]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Kt = function() {
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
                    en = 0 === y.order,
                    tn = "new" === y.id,
                    nn = y.requiresPurchase && !g,
                    rn = T({
                        groupMember: null == u ? void 0 : u.myMember,
                        permission: "group-default-role-manage"
                    }),
                    ln = T({
                        groupMember: null == u ? void 0 : u.myMember,
                        permission: "group-roles-assign"
                    }),
                    an = y.defaultRole && !rn,
                    on = !y.requiresPurchase && !y.defaultRole && !en,
                    cn = !y.defaultRole && !en,
                    sn = cn && !tn;
                return C.createElement("div", null, at && !Tt && C.createElement(re.qX, {
                    title: "Error updating role",
                    type: "error"
                }, "Failed to update role: ", null == ot || null === (t = ot.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), Ke && !Tt && C.createElement(re.qX, {
                    title: "Error creating role",
                    type: "error"
                }, "Failed to create role: ", null == et || null === (n = et.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), C.createElement(M.Z, {
                    isOpen: Te
                }, C.createElement(re.oI, {
                    className: "text-center"
                }, C.createElement("h4", null, "Are you sure?")), C.createElement(re.Ao, null, C.createElement(J.Z, null, vt && C.createElement(re.qX, {
                    title: "Error deleting role",
                    type: "error"
                }, "Failed to delete role: ", null !== (a = null == ht || null === (o = ht.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : "Unexpected error occurred"), C.createElement("p", null, "This will delete the role and all members with this role will be demoted to the lowest role. This action cannot be undone.")), C.createElement("div", {
                    className: "d-flex flex-row justify-content-md-center"
                }, C.createElement(re.zx, {
                    danger: !0,
                    onClick: function() {
                        Kt(!0)
                    },
                    loading: ft,
                    expand: !0
                }, C.createElement(re.$1, {
                    icon: q.$
                }), " Yes, Delete"), " ", C.createElement(re.zx, {
                    onClick: function() {
                        Re(!1)
                    },
                    disabled: ft,
                    expand: !0
                }, "Cancel")))), null == y ? C.createElement("div", null, C.createElement("p", null, "Pick a role to edit.")) : C.createElement("div", null, tn ? C.createElement("h6", {
                    className: "text-center"
                }, "New", y.requiresPurchase && " Paid", " Role") : C.createElement("h6", {
                    className: "text-center"
                }, nn ? "Viewing" : "Editing", " - ", y.name), function() {
                    var e;
                    if (null == y || !y.createdAt || !y.requiresPurchase || $t.length) return null;
                    var t = "activate its associated subscription";
                    return C.createElement(re.qX, {
                        type: "info",
                        title: "No Active Subscriptions"
                    }, "Before people can buy this role, ", g ? "you'll" : "the group owner will", " need to", " ", g && !zt && null != Ut && null !== (e = Ut.parentListings) && void 0 !== e && e.length ? C.createElement(j.rU, {
                        to: "/home/marketplace/storefront/subscriptions"
                    }, t) : t, " ", "in ", g ? "your" : "their", " Store. ", g ? "You" : "The Group Owner", " can also give the product and listing their own images, descriptions and other details from there.")
                }(), !y.defaultRole && C.createElement($.Z, null, C.createElement(ce.Z, {
                    tabs: [{
                        name: "General",
                        id: "general",
                        icon: c.b7,
                        condition: !(null != y && y.defaultRole)
                    }, {
                        name: "Permissions",
                        id: "permissions",
                        icon: Zt.by,
                        condition: !0
                    }],
                    selected: Q,
                    onChange: function(e) {
                        K(e)
                    }
                })), C.createElement(Ot.Z, {
                    activeTab: Q
                }, C.createElement(St.Z, {
                    tabId: "general"
                }, sn && !nn && C.createElement(C.Fragment, null, C.createElement($.Z, null, C.createElement("h6", {
                    className: "text-center"
                }, "Change role order"), C.createElement("div", {
                    className: "d-flex flex-row justify-content-md-center"
                }, C.createElement(re.zx, {
                    onClick: function() {
                        m({
                            offset: -1,
                            roleId: y.id
                        })
                    },
                    expand: !0
                }, C.createElement(re.$1, {
                    icon: kt.mT
                }), " Move Up"), " ", C.createElement(re.zx, {
                    onClick: function() {
                        m({
                            offset: 1,
                            roleId: y.id
                        })
                    },
                    expand: !0
                }, C.createElement(re.$1, {
                    icon: xt.pt
                }), " Move Down"))), " ", " "), C.createElement($.Z, {
                    className: "mb-2"
                }, C.createElement(_.Z, null, C.createElement(re.II, {
                    type: "text",
                    name: "name",
                    value: null != I.name ? I.name : y.name,
                    onChange: Ht,
                    maxLength: 64,
                    required: !0,
                    disabled: nn || y.defaultRole,
                    placeholder: "Enter Role's Name"
                }), !1 === X.name && C.createElement(V.Z, null, "Must be between 1 and 64 characters."))), C.createElement($.Z, {
                    className: "mb-3"
                }, C.createElement(_.Z, null, C.createElement(re.gx, {
                    type: "textarea",
                    name: "description",
                    value: null != I.description ? I.description : y.description,
                    onChange: Ht,
                    maxLength: 256,
                    disabled: nn || y.defaultRole,
                    placeholder: "Enter Role's Description",
                    inputStyle: {
                        height: "100px"
                    }
                }), !1 === X.description && C.createElement(V.Z, null, "Must be 256 characters or less."))), cn && !y.requiresPurchase && ln && C.createElement($.Z, {
                    className: "my-2"
                }, C.createElement(ae.Z, {
                    label: "Assign On Join",
                    value: "isAddedOnJoin",
                    defaultChecked: null != I.isAddedOnJoin ? I.isAddedOnJoin : y.isAddedOnJoin,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        ge(t)
                    }
                }), C.createElement(W.Z, null, "If enabled, new members will be assigned this role when they join the group. This will not affect existing members.")), on && C.createElement($.Z, {
                    className: "my-2"
                }, C.createElement(ae.Z, {
                    label: "Self Assignable",
                    value: "isSelfAssignable",
                    defaultChecked: ve,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        he(t)
                    }
                }), C.createElement(W.Z, null, "Allows members of the group to assign this role to themselves.")), C.createElement($.Z, {
                    className: "my-3"
                }, C.createElement(ae.Z, {
                    label: "Require Two-Factor Authentication",
                    value: "requiresTwoFactor",
                    defaultChecked: oe,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        return ie(t)
                    }
                }), C.createElement(W.Z, null, "Requires members to have 2FA before permissions apply.")), y.requiresPurchase && C.createElement(C.Fragment, null, C.createElement($.Z, {
                    className: "my-2"
                }, C.createElement(ae.Z, {
                    label: "Enable Free Join for Subscribers",
                    value: "productGroupAccess",
                    defaultChecked: ye,
                    onChangeCallback: function(e) {
                        var t, n, r, l = e.checked;
                        t = l, n = At(At({}, I), {}, {
                            productGroupAccess: t
                        }), r = At(At({}, z), {}, {
                            groupAccess: t
                        }), t || (n.productGroupAccessRemove = void 0, r.groupAccessRemove = !1, Ce(!1)), ke(t), A(n), G(r)
                    },
                    disabled: (null == u ? void 0 : u.joinState) === bt.wN.OPEN
                }), C.createElement(W.Z, null, Bt)), (null != I.productGroupAccess ? I.productGroupAccess : ye) && C.createElement($.Z, {
                    className: "my-2"
                }, C.createElement(ae.Z, {
                    label: "Remove Members After Expiration",
                    value: "productGroupAccessRemove",
                    defaultChecked: null != I.productGroupAccessRemove ? I.productGroupAccessRemove : Ie,
                    onChangeCallback: function(e) {
                        var t, n = e.checked;
                        Ce(t = n), A(At(At({}, I), {}, {
                            productGroupAccessRemove: t
                        })), G(At(At({}, z), {}, {
                            groupAccessRemove: t
                        }))
                    }
                }), C.createElement(W.Z, null, "If enabled, group members with this role are removed from the group entirely when their subscription ends. Note that this will remove any member whose subscription ends, whether they bought their way in or not."))), y.requiresPurchase && tn && C.createElement($.Z, null, C.createElement(_.Z, null, C.createElement(V.Z, {
                    htmlFor: "productPriceTokens"
                }, "Credits", "forevers" === y.productDurationType ? "" : " per ".concat(1 === y.productDuration ? y.productDurationType.replace(/s$/, "") : "".concat(y.productDuration, " ").concat(y.productDurationType)))), C.createElement(_.Z, null, C.createElement(re.II, {
                    type: "number",
                    name: "productPriceTokens",
                    value: null != I.productPriceTokens ? I.productPriceTokens : y.productPriceTokens,
                    onChange: Ht,
                    required: !0,
                    step: "1",
                    min: jt.nk,
                    max: jt.A1
                }), !1 === X.productPriceTokens && C.createElement(V.Z, null, "Must be a whole number between ", C.createElement(re.b5, null), jt.nk.toLocaleString(), " and ", C.createElement(re.b5, null), jt.A1.toLocaleString(), "."))), y.productId && C.createElement("p", null, C.createElement("small", null, g ? "You" : "The Group Owner", " can manage details and subscription behaviour of this role's", " ", C.createElement(j.rU, {
                    to: "/home/marketplace/storefront/products#".concat(y.productId)
                }, "associated product"), !zt && null != Ut && null !== (i = Ut.parentListings) && void 0 !== i && i.length ? C.createElement(C.Fragment, null, ", and the details, price and availability of the product's", " ", C.createElement(j.rU, {
                    to: "/home/marketplace/storefront/listings#".concat(Ut.parentListings[0])
                }, "associated listing"), " ") : " ", g ? "in your Store" : "in their Store", "."))), C.createElement(St.Z, {
                    tabId: "permissions"
                }, Be && C.createElement(re.qX, {
                    title: "Error",
                    type: "error"
                }, "There was an error loading permissions."), (null == y ? void 0 : y.defaultRole) && C.createElement(C.Fragment, null, C.createElement("p", null, y.description), C.createElement("hr", null)), en || an ? C.createElement("p", null, "You can't edit the ", en ? "Group Owner" : "default", " role.", " ", en ? "It must always have all" : "You lack the required", " permissions.") : y.requiresPurchase && !g ? C.createElement("p", null, "You can't edit a paid role if you are not the group owner.") : C.createElement("div", null, $e.map((function(e) {
                    var t = e.name,
                        n = Wt[t],
                        r = function(e) {
                            var t = e.permission,
                                n = e.role;
                            return !b && (n.requiresPurchase && !t.isManagementPermission ? "You cannot add a management permission to a paid role." : !t.allowedToAdd && "You do not have this permission.")
                        }({
                            permission: n,
                            role: y
                        });
                    return C.createElement("div", {
                        key: n.name,
                        className: "mb-2"
                    }, C.createElement(ae.Z, {
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
                                        permissionsMap: Wt
                                    });
                                    return Me([].concat((0, U.Z)(je), [e], (0, U.Z)(r)))
                                }
                                var l = Wt[e];
                                if (null !== (n = l.computedDependedOnBy) && void 0 !== n && n.size && je.some((function(e) {
                                        return l.computedDependedOnBy.has(e)
                                    }))) return ze(e);
                                Me(je.filter((function(t) {
                                    return t !== e
                                })))
                            }(n.name, t)
                        }
                    }), (n.help || n.dependsOn) && C.createElement(W.Z, null, n.help, n.help && n.dependsOn && " ", n.dependsOn && C.createElement(C.Fragment, null, "Requires ", (0, U.Z)(n.dependsOn).map((function(e) {
                        return "“".concat(Wt[e].displayName || e, "”")
                    })).join(", "), "."), r && C.createElement("div", null, r)))
                }))))), !an && (nn ? C.createElement("p", null, C.createElement("small", null, "Only the Group Owner can edit paid roles.")) : C.createElement("div", {
                    className: "d-flex flex-row align-content-center mt-1\n                  ".concat(tn || en || y.defaultRole ? "justify-content-end" : "justify-content-between")
                }, !tn && !en && !y.defaultRole && C.createElement(re.zx, {
                    danger: !0,
                    onClick: function() {
                        Kt(!1)
                    },
                    disabled: Jt
                }, C.createElement(le.Z, {
                    icon: q.$
                }), " Delete"), C.createElement("div", {
                    className: "d-flex flex-row"
                }, C.createElement(re.zx, {
                    neutral: !0,
                    onClick: function() {
                        Vt()
                    },
                    disabled: Jt || 0 === Object.keys(I).length
                }, C.createElement(le.Z, {
                    icon: w.NB
                }), " ", tn ? "Clear" : "Cancel"), " ", C.createElement(re.zx, {
                    loading: Jt && !ft,
                    disabled: Jt || 0 === Object.keys(I).length || Object.values(X).includes(!1),
                    onClick: Qt
                }, C.createElement(le.Z, {
                    icon: Et.r6
                }), " Save"))))), C.createElement(re.sm, {
                    isOpen: !!qe,
                    confirmCallback: function() {
                        return Me(je.filter((function(e) {
                            return e !== qe && !Yt.has(e)
                        }))), void ze(null)
                    },
                    cancelCallback: function() {
                        return ze(null)
                    },
                    headerText: "Role Permission Dependencies",
                    confirmText: "Turn Off",
                    cancelText: "Go Back"
                }, C.createElement("div", null, C.createElement("p", null, "Turning off “", null === (s = Wt[qe]) || void 0 === s ? void 0 : s.displayName, "” will also turn off permissions that currently require it:"), C.createElement("ul", null, (0, U.Z)(Yt).filter((function(e) {
                    return je.includes(e)
                })).map((function(e) {
                    var t = Wt[e];
                    return C.createElement("li", {
                        key: e
                    }, "“", t.displayName, "”")
                }))), C.createElement("strong", null, "Are you sure you want to turn this off?"))), C.createElement(re.sm, {
                    isOpen: !!Fe,
                    confirmCallback: function() {
                        return Me(je.filter((function(e) {
                            return !Fe.includes(e)
                        }))), void Xe(null)
                    },
                    cancelCallback: function() {
                        return Xe(null)
                    },
                    headerText: "Invalid Permissions Detected",
                    confirmText: "Remove Permissions",
                    cancelText: "Keep Permissions"
                }, C.createElement("div", null, C.createElement("p", null, "This role contains permissions that no longer exist or are unavailable for your group."), C.createElement("p", null, "These permissions will be removed from the role: ", C.createElement("strong", null, null == Fe ? void 0 : Fe.join(", "))))))
            };
            var Rt = n(93682),
                Lt = n(3163),
                Ut = n(50249);
            const qt = function(e) {
                var t, n, r = e.group,
                    l = e.roleLocalOffset,
                    a = e.isGroupOwner,
                    o = (0, de.pc)(),
                    i = (0, S.TH)(),
                    c = (0, S.UO)(),
                    s = (0, de.Tu)({
                        withEconomyAccount: !0
                    }).user,
                    u = C.useMemo((function() {
                        return "new" !== c.roleId && c.roleId
                    }), [c]),
                    m = (0, te.q7)().data,
                    d = void 0 === m ? [] : m,
                    p = (null == s || null === (t = s.economyAccount) || void 0 === t ? void 0 : t.accountSellerStatus) === jt.dd.INVITED,
                    g = d.includes("permission-can-sell-products"),
                    f = (0, U.Z)(null != r && r.roles ? r.roles : []).sort((function(e, t) {
                        var n = e.order,
                            r = t.order;
                        return e.id === u ? (n += l) === t.order && (l > 0 ? n += 1 : n -= 1) : t.id === u && (r += l) === e.order && (l > 0 ? r += 1 : r -= 1), n < r ? -1 : 1
                    })) || [],
                    E = f.length >= bt.Mw,
                    v = null == r || null === (n = r.myMember) || void 0 === n ? void 0 : n.permissions,
                    h = f.map((function(e, t) {
                        var n, l = [],
                            a = null;
                        0 === e.order ? (l.push(C.createElement(zt, {
                            key: "management-header"
                        }, "Management Roles")), a = C.createElement(C.Fragment, null, C.createElement(re.$1, {
                            icon: Se.nm,
                            title: "Management Role"
                        }), " ")) : e.permissions.includes("group-instance-moderate") ? a = C.createElement(C.Fragment, null, C.createElement(re.$1, {
                            icon: Lt.U7,
                            title: "Instance Moderator Role"
                        }), " ") : e.requiresPurchase ? a = C.createElement(C.Fragment, null, C.createElement(re.$1, {
                            icon: Ut.default,
                            title: "Paid Role"
                        }), " ") : e.defaultRole && (l.push(C.createElement(zt, {
                            key: "default-header"
                        }, "Default Role")), a = C.createElement(C.Fragment, null, C.createElement(re.$1, {
                            icon: Rt.Z3,
                            title: "Default Role"
                        }), " ")), e.isManagementRole || e.defaultRole || null === (n = f[t - 1]) || void 0 === n || !n.isManagementRole || l.push(C.createElement(zt, {
                            key: "member-header"
                        }, "Member Roles"));
                        var i = (0 === (null == r ? void 0 : r.memberRank) || "new" === e.id || e.order > (null == r ? void 0 : r.memberRank)) && (v.includes("*") || 0 === e.permissions.filter((function(e) {
                            return !v.includes(e)
                        })).length);
                        return l.push(o || i ? C.createElement(Ft, null, C.createElement(_t, {
                            key: e.id,
                            to: "/home/group/".concat(r.id, "/settings/roles/").concat(e.id),
                            className: e.id === u ? "selected" : ""
                        }, a, e.name + ("new" === e.id ? " (unsaved new role)" : ""))) : C.createElement(Dt, {
                            key: e.id
                        }, a, e.name + ("new" === e.id ? " (unsaved new role)" : ""))), l
                    }));
                return C.createElement(C.Fragment, null, E && C.createElement(A.Z, {
                    role: "alert",
                    color: "warning"
                }, "This group has reached maximum number of roles"), C.createElement(Gt, null, h, C.createElement("li", null, C.createElement(Xt, {
                    to: "/home/group/".concat(r.id, "/settings/roles/new"),
                    end: !0,
                    disabled: E
                }, "Create Role")), a && p && C.createElement("li", null, g ? C.createElement(Xt, {
                    to: "/home/group/".concat(r.id, "/settings/roles/new/paid"),
                    end: !0,
                    disabled: E
                }, "Create Paid Role") : C.createElement(re.qX, {
                    slim: !0
                }, "Want to create a paid role? Find out more and sign up", " ", C.createElement(j.rU, {
                    to: "/home/marketplace/wallet",
                    state: {
                        redirectTo: i.pathname
                    }
                }, "in your Wallet"), "."))))
            };
            var zt = (0, a.Z)("h5", {
                    target: "e1hiny755"
                })({
                    name: "1gttmjq",
                    styles: "margin:0;padding:0;font-size:1.2rem;font-weight:bold"
                }),
                Gt = (0, a.Z)("ul", {
                    target: "e1hiny754"
                })({
                    name: "wghgqz",
                    styles: "list-style-type:none;padding:0;margin-bottom:0"
                }),
                Dt = (0, a.Z)("li", {
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
                Xt = (0, a.Z)(j.OL, {
                    target: "e1hiny751"
                })({
                    name: "1ekamc",
                    styles: "display:inline-block;padding:5px;margin-bottom:8px;border-radius:4px;width:100%;color:inherit;background-color:#064b5c;border:#064b5c solid 2px;text-align:center;flex:1;:hover{background-color:#064b5c;border-color:#086c84;text-decoration:none;}&.active{background-color:#454b54;}"
                }),
                _t = (0, a.Z)(Xt, {
                    target: "e1hiny750"
                })({
                    name: "hlgyoz",
                    styles: "background-color:transparent;border-color:transparent;text-align:left;:hover{background-color:#282b31;border-color:#282b31;}&.active{background-color:#454b54;border-color:#454b54;}"
                }),
                $t = n(98185);
            const Jt = function(e) {
                var t = e.group,
                    n = (0, de.pc)(),
                    r = (0, S.TH)(),
                    a = C.useState(0),
                    o = (0, l.Z)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = (0, O.v9)((function(e) {
                        var t;
                        return null === (t = e.group) || void 0 === t || null === (t = t.role) || void 0 === t ? void 0 : t.error
                    })),
                    u = (0, te.XC)(),
                    m = u.data,
                    d = (u.isLoading, u.isError, u.error, (null == t ? void 0 : t.ownerId) === (null == m ? void 0 : m.id));
                C.useEffect((function() {
                    c(0)
                }), [r]);
                return C.createElement($t.Z, {
                    loading: !t.roles
                }, s && C.createElement(re.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: s.message
                }), C.createElement(re.oI, null, C.createElement("h4", {
                    className: "text-center"
                }, "Roles")), C.createElement(re.Ao, null, C.createElement(Bt, null, C.createElement(Vt, null, C.createElement(qt, {
                    group: t,
                    roleLocalOffset: i,
                    isGroupOwner: d
                })), C.createElement(Tt, {
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
                Vt = (0, a.Z)("div", {
                    target: "eaqb3yw0"
                })({
                    name: "1jwryq8",
                    styles: "margin-right:15px"
                });

            function Wt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Yt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Wt(Object(n), !0).forEach((function(t) {
                        (0, L.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ht = C.lazy((function() {
                    return Promise.all([n.e(123), n.e(786), n.e(4444), n.e(9908), n.e(229), n.e(3294), n.e(527), n.e(4814)]).then(n.bind(n, 40527))
                })),
                Qt = [{
                    label: "Open",
                    value: bt.wN.OPEN
                }, {
                    label: "Closed",
                    value: bt.wN.CLOSED
                }, {
                    label: "Invite Only",
                    value: bt.wN.INVITE
                }, {
                    label: "Request Invite",
                    value: bt.wN.REQUEST
                }];
            const Kt = function(e) {
                var t, n, a, o, i, c, s, u, m, d, p, g, f, E, v, h, b = e.group,
                    w = (0, te.IB)().data,
                    y = null !== (t = null == b ? void 0 : b.transferTargetId) && void 0 !== t ? t : null,
                    Z = (0, O.I0)(),
                    j = (0, S.s0)(),
                    A = C.useState({
                        name: b.name,
                        shortCode: b.shortCode,
                        description: b.description,
                        isSearchable: b.isSearchable,
                        joinState: b.joinState,
                        allowGroupJoinPrompt: b.allowGroupJoinPrompt,
                        language: b.languages,
                        rules: b.rules
                    }),
                    P = (0, l.Z)(A, 2),
                    se = P[0],
                    ue = P[1],
                    me = C.useState(!1),
                    de = (0, l.Z)(me, 2),
                    ge = de[0],
                    fe = de[1],
                    Ee = C.useState(!1),
                    ve = (0, l.Z)(Ee, 2),
                    he = ve[0],
                    be = ve[1],
                    we = C.useState(!1),
                    ye = (0, l.Z)(we, 2),
                    xe = ye[0],
                    ke = ye[1],
                    Ze = C.useState(!1),
                    Ne = (0, l.Z)(Ze, 2),
                    Ie = Ne[0],
                    Ce = Ne[1],
                    Se = C.useState(null),
                    Me = (0, l.Z)(Se, 2),
                    Ae = Me[0],
                    Pe = Me[1],
                    Re = C.useState(!1),
                    Le = (0, l.Z)(Re, 2),
                    Ue = Le[0],
                    qe = Le[1],
                    ze = C.useState(!1),
                    Ge = (0, l.Z)(ze, 2),
                    De = Ge[0],
                    Xe = Ge[1],
                    _e = C.useState(null),
                    $e = (0, l.Z)(_e, 2),
                    Be = $e[0],
                    Ve = $e[1],
                    We = C.useState(!1),
                    Ye = (0, l.Z)(We, 2),
                    He = Ye[0],
                    Qe = Ye[1],
                    Ke = C.useState(!1),
                    et = (0, l.Z)(Ke, 2),
                    tt = et[0],
                    nt = et[1],
                    rt = C.useState(!1),
                    lt = (0, l.Z)(rt, 2),
                    at = lt[0],
                    ot = lt[1],
                    it = C.useState(null),
                    ct = (0, l.Z)(it, 2),
                    st = ct[0],
                    mt = ct[1],
                    dt = C.useState(null),
                    pt = (0, l.Z)(dt, 2),
                    gt = (pt[0], pt[1]),
                    ft = C.useState(!1),
                    Et = (0, l.Z)(ft, 2),
                    vt = Et[0],
                    ht = Et[1],
                    wt = C.useState(null !== (n = b.languages) && void 0 !== n ? n : []),
                    xt = (0, l.Z)(wt, 2),
                    kt = xt[0],
                    Zt = xt[1],
                    It = C.useState(null !== (a = b.links) && void 0 !== a ? a : []),
                    Ct = (0, l.Z)(It, 2),
                    Ot = Ct[0],
                    St = Ct[1],
                    jt = C.useState(null),
                    Mt = (0, l.Z)(jt, 2),
                    At = Mt[0],
                    Pt = Mt[1],
                    Tt = C.useState(null),
                    Rt = (0, l.Z)(Tt, 2),
                    Lt = (Rt[0], Rt[1]),
                    Ut = (0, O.v9)((function(e) {
                        return e.currentUser.isMod
                    })),
                    qt = (null == b ? void 0 : b.ownerId) === (null == w ? void 0 : w.id),
                    zt = (0, pe.mA)(),
                    Gt = (0, l.Z)(zt, 2),
                    Dt = Gt[0],
                    Ft = Gt[1],
                    Xt = Ft.isError,
                    _t = Ft.isLoading,
                    $t = Ft.error,
                    Bt = (0, Nt.P2)(),
                    Vt = C.useState(!1),
                    Wt = (0, l.Z)(Vt, 2),
                    Kt = Wt[0],
                    tn = Wt[1],
                    nn = (0, pe.CL)(),
                    rn = (0, l.Z)(nn, 2),
                    ln = rn[0],
                    an = rn[1],
                    on = an.isError,
                    cn = an.isLoading,
                    sn = an.error,
                    un = an.isSuccess,
                    mn = (0, te.q7)().data,
                    dn = void 0 === mn ? [] : mn,
                    pn = (0, Q.y)().data,
                    gn = null !== (o = null == pn || null === (i = pn.constants) || void 0 === i || null === (i = i.LANGUAGE) || void 0 === i ? void 0 : i.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== o ? o : H.O,
                    fn = [{
                        value: "none",
                        label: "none"
                    }].concat((0, U.Z)(Object.keys(gn).map((function(e) {
                        return {
                            value: e,
                            label: gn[e]
                        }
                    })))),
                    En = (null == Be || null === (c = Be.user) || void 0 === c ? void 0 : c.id) && (null == b ? void 0 : b.id) && null === y,
                    vn = (0, pe.ek)({
                        groupId: null == b ? void 0 : b.id,
                        transferTargetId: null == Be || null === (s = Be.user) || void 0 === s ? void 0 : s.id
                    }, {
                        skip: !En || !(null != b && b.id),
                        refetchOnMountOrArgChange: !0
                    }),
                    hn = vn.data,
                    bn = vn.isFetching,
                    wn = vn.isError,
                    yn = vn.error,
                    xn = null !== y,
                    kn = (0, ne.GR)(y, {
                        skip: !xn,
                        refetchOnMountOrArgChange: !0
                    }),
                    Zn = kn.data,
                    Nn = kn.isFetching,
                    In = kn.isError,
                    Cn = kn.error,
                    On = (0, pe.HT)(),
                    Sn = (0, l.Z)(On, 2),
                    jn = Sn[0],
                    Mn = Sn[1],
                    An = (Mn.data, Mn.isFetching),
                    Pn = Mn.isError,
                    Tn = Mn.error,
                    Rn = (0, pe.rq)(),
                    Ln = (0, l.Z)(Rn, 2),
                    Un = Ln[0],
                    qn = Ln[1],
                    zn = (qn.data, qn.isFetching),
                    Gn = qn.isError,
                    Dn = qn.error;
                C.useEffect((function() {
                    un ? j("/home/groups") : (Qe(!1), fe(!1))
                }), [cn]), C.useEffect((function() {
                    if (xe && Be && bn && Ce(!0), !bn && xe && hn && !wn) {
                        Ce(!1);
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
                        }(hn.requirements);
                        Pe(e), ke(!1), be(!1), qe(!0)
                    }
                    var t;
                    !bn && xe && wn && (Ce(!1), ke(!1), Ve(null), Z((0, ee.d)({
                        title: "Error Validating Group Transfer",
                        icon: x.eH,
                        message: "".concat(null == yn || null === (t = yn.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                        color: "error",
                        timeout: 3e3
                    })))
                }), [xe, Be, bn, wn, hn]), C.useEffect((function() {
                    var e;
                    (Nn || In || !Zn || Ve({
                        user: Zn
                    }), !Nn && In) && Z((0, ee.d)({
                        title: "Error Fetching New Owner Data",
                        icon: x.eH,
                        message: "".concat(null == Cn || null === (e = Cn.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message),
                        color: "error",
                        timeout: 3e3
                    }))
                }), [Nn, Zn, In]);
                var Fn = function(e) {
                        var t = e.target.name,
                            n = "checkbox" === e.target.getAttribute("type") ? e.target.checked : e.target.value;
                        ue(Yt(Yt({}, se), {}, (0, L.Z)({}, t, "shortCode" === t ? n.toUpperCase() : n)))
                    },
                    Xn = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var t;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return st && (se.bannerId = st), At && (se.iconId = At), tn(!1), e.prev = 3, e.next = 6, Dt({
                                            groupId: b.id,
                                            data: Yt({}, se)
                                        }).unwrap();
                                    case 6:
                                        mt(null), gt(null), Pt(null), Lt(null), Z((0, ee.d)({
                                            title: "Group Updated Successfully",
                                            icon: k.f8,
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 16;
                                        break;
                                    case 10:
                                        if (e.prev = 10, e.t0 = e.catch(3), !Bt({
                                                error: e.t0
                                            })) {
                                            e.next = 15;
                                            break
                                        }
                                        return tn(!0), e.abrupt("return");
                                    case 15:
                                        Z((0, ee.d)({
                                            title: "Group Update Failed",
                                            icon: x.eH,
                                            message: "".concat(null === e.t0 || void 0 === e.t0 || null === (t = e.t0.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 5e3
                                        }));
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 10]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    _n = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var t, n, r;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return Xe(!0), e.prev = 1, e.next = 4, jn({
                                            groupId: b.id,
                                            transferTargetId: null == Be || null === (t = Be.user) || void 0 === t ? void 0 : t.id
                                        }).unwrap();
                                    case 4:
                                        Pn && (Xe(!1), qe(!1), Ve(null), Z((0, ee.d)({
                                            title: "Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null == Tn || null === (n = Tn.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 6e3
                                        }))), Pn || Z((0, ee.d)({
                                            title: "Group Transfer Initiated",
                                            icon: k.f8,
                                            color: "success",
                                            timeout: 6e3
                                        })), Xe(!1), qe(!1), e.next = 16;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(1), Xe(!1), qe(!1), Ve(null), Z((0, ee.d)({
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
                    $n = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var t, n, r;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return nt(!0), e.prev = 1, e.next = 4, Un({
                                            groupId: b.id,
                                            transferTargetId: null == Be || null === (t = Be.user) || void 0 === t ? void 0 : t.id
                                        }).unwrap();
                                    case 4:
                                        nt(!1), Gn && Z((0, ee.d)({
                                            title: "Cancel Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null == Dn || null === (n = Dn.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 3e3
                                        })), Gn || Z((0, ee.d)({
                                            title: "Delete Group Transfer Success",
                                            icon: k.f8,
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(1), nt(!1), Z((0, ee.d)({
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
                    Jn = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        Qe(!0), ln({
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
                    Bn = function(e) {
                        St(e), ue(Yt(Yt({}, se), {}, {
                            links: e
                        }))
                    },
                    Vn = function(e, t) {
                        var n = (0, U.Z)(kt);
                        n[e] = t, n = n.filter((function(e) {
                            return "none" !== e
                        })), Zt(n), ue(Yt(Yt({}, se), {}, {
                            languages: n
                        }))
                    },
                    Wn = dn.includes("permission-user-gallery"),
                    Yn = dn.includes("permission-user-icons"),
                    Hn = _t || cn || An || zn;
                return C.createElement("div", null, C.createElement(_.Z, {
                    className: "mt-4"
                }, C.createElement(ce.Z, {
                    tabs: [{
                        name: "General",
                        to: "/home/group/".concat(b.id, "/settings"),
                        end: !0,
                        icon: X.Kb,
                        condition: Ut || T({
                            groupMember: null == b ? void 0 : b.myMember,
                            permission: "group-data-manage"
                        })
                    }, {
                        name: "My Membership",
                        to: Ut || T({
                            groupMember: null == b ? void 0 : b.myMember,
                            permission: "group-data-manage"
                        }) ? "me" : "/home/group/".concat(b.id, "/settings"),
                        icon: F.xK,
                        condition: null == b ? void 0 : b.myMember
                    }, {
                        name: "Roles",
                        to: "roles",
                        icon: D.aC,
                        condition: Ut || T({
                            groupMember: null == b ? void 0 : b.myMember,
                            permission: "group-roles-manage"
                        })
                    }, {
                        name: "Logs",
                        to: "logs",
                        icon: G.tx,
                        condition: Ut || T({
                            groupMember: null == b ? void 0 : b.myMember,
                            permission: "group-audit-view"
                        })
                    }, {
                        name: "Age Verification Beta",
                        to: "ageverificationbeta",
                        icon: z.Uk,
                        condition: b.tags.includes("admin_age_verification_enabled") && (Ut || (null == b ? void 0 : b.myMember.userId) === b.ownerId)
                    }]
                })), C.createElement(S.Z5, null, C.createElement(S.AW, {
                    path: "/",
                    element: Ut || T({
                        groupMember: null == b ? void 0 : b.myMember,
                        permission: "group-data-manage"
                    }) ? C.createElement(C.Fragment, null, C.createElement($.Z, null, C.createElement(M.Z, {
                        isOpen: at,
                        className: (0, I.iv)({
                            name: "1ul0gzp",
                            styles: "max-width:1500px!important"
                        })
                    }, C.createElement(J.Z, null, C.createElement(Ht, {
                        isSelector: !0,
                        selectedCallback: function(e, t) {
                            mt(e), gt(t), ot(!1)
                        },
                        selectedId: null != st ? st : "",
                        activeTab: "photos"
                    })), C.createElement(B.Z, null, C.createElement(re.zx, {
                        onClick: function() {
                            ot(!1), Z((0, K.b9)())
                        }
                    }, "Cancel"))), C.createElement(M.Z, {
                        isOpen: vt,
                        className: (0, I.iv)({
                            name: "1ul0gzp",
                            styles: "max-width:1500px!important"
                        })
                    }, C.createElement(J.Z, null, C.createElement(Ht, {
                        isSelector: !0,
                        selectedCallback: function(e, t) {
                            Pt(e), Lt(t), ht(!1)
                        },
                        selectedId: null != At ? At : "",
                        activeTab: "icons"
                    })), C.createElement(B.Z, null, C.createElement(re.zx, {
                        onClick: function() {
                            ht(!1), Z((0, K.LC)())
                        }
                    }, "Cancel"))), C.createElement(_.Z, null, Xt && !Kt ? C.createElement(re.qX, {
                        type: "error",
                        title: "An error occurred",
                        message: (null == $t || null === (u = $t.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message) || "Something went wrong updating the group"
                    }) : null, C.createElement(re.oI, null, C.createElement("h4", {
                        className: "text-center"
                    }, "General")), C.createElement(re.Ao, null, C.createElement("div", null, C.createElement($.Z, {
                        className: "mb-1"
                    }, C.createElement(_.Z, null, C.createElement(V.Z, {
                        for: "name"
                    }, "Name")), C.createElement(_.Z, null, C.createElement(re.II, {
                        type: "text",
                        name: "name",
                        className: "full-width",
                        value: se.name,
                        onChange: Fn
                    }))), C.createElement($.Z, {
                        className: "mb-1"
                    }, C.createElement(_.Z, null, C.createElement(V.Z, {
                        for: "shortCode"
                    }, "Short Code (3-6 letters/numbers)")), C.createElement(_.Z, null, C.createElement(re.II, {
                        type: "text",
                        name: "shortCode",
                        className: "full-width",
                        value: se.shortCode,
                        maxLength: 6,
                        onChange: Fn
                    }))), C.createElement($.Z, {
                        className: "mb-1"
                    }, C.createElement(_.Z, null, C.createElement(V.Z, {
                        for: "description"
                    }, "Description")), C.createElement(_.Z, null, C.createElement(en, {
                        name: "description",
                        className: "full-width",
                        value: null !== (m = se.description) && void 0 !== m ? m : "",
                        onChange: Fn
                    }))), C.createElement($.Z, null, C.createElement(_.Z, null, C.createElement(V.Z, {
                        for: "description"
                    }, "Rules")), C.createElement(_.Z, null, C.createElement(en, {
                        name: "rules",
                        className: "full-width",
                        value: null !== (d = se.rules) && void 0 !== d ? d : "",
                        onChange: Fn
                    }))), C.createElement("div", null, !1, C.createElement($.Z, {
                        className: "mt-2"
                    }, C.createElement(_.Z, null, C.createElement(V.Z, {
                        for: "isJoinable"
                    }, "Open to New Members")), C.createElement(_.Z, null, C.createElement(re.Lt, {
                        onChange: function(e) {
                            var t = e === bt.wN.OPEN;
                            ue(Yt(Yt({}, se), {}, {
                                joinState: e,
                                allowGroupJoinPrompt: t
                            }))
                        },
                        value: null !== (p = se.joinState) && void 0 !== p ? p : "",
                        name: "joinState",
                        options: Qt
                    }))), C.createElement("br", null), C.createElement("div", {
                        className: "mt-2"
                    }, C.createElement(ae.Z, {
                        label: "Automatic Group Invites",
                        value: "allowGroupJoinPrompt",
                        disabled: se.joinState !== bt.wN.OPEN,
                        defaultChecked: null !== (g = se.allowGroupJoinPrompt) && void 0 !== g ? g : se.joinState === bt.wN.OPEN,
                        onChangeCallback: function(e) {
                            var t = e.checked;
                            ue(Yt(Yt({}, se), {}, {
                                allowGroupJoinPrompt: t
                            }))
                        }
                    }), C.createElement(W.Z, null, "Automatically send group invites to non-members who’ve spent over 5 minutes in this group’s instances or made a friend there. Only available to Open groups.")), C.createElement($.Z, {
                        className: "mt-2"
                    }, C.createElement(_.Z, null, C.createElement(V.Z, {
                        for: "languages"
                    }, "Languages")), C.createElement(_.Z, null, kt.length >= 0 && C.createElement(re.Lt, {
                        onChange: function(e) {
                            Vn(0, e)
                        },
                        value: null !== (f = null == kt ? void 0 : kt[0]) && void 0 !== f ? f : "none",
                        name: "languages",
                        options: fn,
                        className: "mb-1"
                    }), kt.length >= 1 && C.createElement(re.Lt, {
                        onChange: function(e) {
                            Vn(1, e)
                        },
                        value: null !== (E = null == kt ? void 0 : kt[1]) && void 0 !== E ? E : "none",
                        name: "languages",
                        options: fn,
                        className: "mb-1"
                    }), kt.length >= 2 && C.createElement(re.Lt, {
                        onChange: function(e) {
                            Vn(2, e)
                        },
                        value: null !== (v = null == kt ? void 0 : kt[2]) && void 0 !== v ? v : "none",
                        name: "languages",
                        options: fn,
                        className: "mb-1"
                    }))), C.createElement("br", null), C.createElement($.Z, {
                        className: "mt-2"
                    }, C.createElement(_.Z, null, C.createElement(V.Z, {
                        for: "links"
                    }, "Group Links")), C.createElement(_.Z, null, C.createElement(Je, {
                        groupBioLinks: Ot,
                        callback: Bn,
                        index: 0
                    }), C.createElement(Je, {
                        groupBioLinks: Ot,
                        callback: Bn,
                        index: 1
                    }), C.createElement(Je, {
                        groupBioLinks: Ot,
                        callback: Bn,
                        index: 2
                    }))), C.createElement("br", null), C.createElement($.Z, null, C.createElement(_.Z, null), C.createElement(_.Z, null, st && C.createElement("div", null, C.createElement("span", null, "Replacing banner with: ", st), C.createElement("br", null), C.createElement(re.zx, {
                        onClick: function() {
                            mt(null), gt(null)
                        }
                    }, "Clear banner selection")), At && C.createElement("div", null, C.createElement("span", null, "Replacing icon with: ", At), C.createElement("br", null), C.createElement(re.zx, {
                        onClick: function() {
                            Lt(null), Pt(null)
                        }
                    }, "Clear icon selection")))), C.createElement("br", null), C.createElement($.Z, null, C.createElement(_.Z, null), C.createElement(_.Z, null, Wn && C.createElement(re.zx, {
                        color: "primary",
                        onClick: function() {
                            ot(!0)
                        }
                    }, "Update Group Banner"), " ", Yn && C.createElement(re.zx, {
                        color: "primary",
                        onClick: function() {
                            ht(!0)
                        }
                    }, "Update Group Icon")))), C.createElement($.Z, {
                        className: "mt-4"
                    }, C.createElement(re.zx, {
                        neutral: !0,
                        onClick: Xn,
                        disabled: Hn,
                        loading: Hn
                    }, "Save")))))), qt && !y && C.createElement(C.Fragment, null, C.createElement(Oe, {
                        isOpen: he,
                        group: b,
                        cancelCallback: function() {
                            return be(!1)
                        },
                        memberSelectCallback: function(e) {
                            ! function(e) {
                                Ve(e), ke(!0)
                            }(e)
                        },
                        isGroupMemberOnly: !0,
                        isSelecting: Ie
                    }), (null == Be ? void 0 : Be.user) && Ue && C.createElement(Fe, {
                        group: b,
                        validity: Ae,
                        prospectiveNewOwner: Be,
                        onTransfer: function() {
                            return _n()
                        },
                        onCancel: function() {
                            return qe(!1)
                        },
                        isOpen: Ue,
                        isTransferring: De
                    }), C.createElement(Te, {
                        group: b,
                        onButtonClick: function() {
                            return be(!0)
                        },
                        isLoading: Hn || !1
                    })), qt && y && C.createElement(je, {
                        group: b,
                        onClickCallback: function() {
                            return $n()
                        },
                        isDeleting: tt || !1
                    }), qt && C.createElement(C.Fragment, null, on ? C.createElement(re.qX, {
                        type: "error",
                        title: "Could not delete group",
                        message: (null == sn || null === (h = sn.data) || void 0 === h || null === (h = h.error) || void 0 === h ? void 0 : h.message) || "Something went wrong deleting the group"
                    }) : null, C.createElement(re.oI, {
                        className: "mt-2"
                    }, C.createElement("h4", {
                        className: "text-center"
                    }, "Delete Group")), C.createElement(re.Ao, null, C.createElement("p", null, "You can delete this group as long as it has no other members. This cannot be undone."), C.createElement(M.Z, {
                        isOpen: ge
                    }, C.createElement(Y.Z, {
                        close: C.createElement(oe.Z, {
                            onClick: function() {
                                fe(!1)
                            }
                        })
                    }, C.createElement("h4", null, "Delete Group?")), C.createElement(J.Z, {
                        className: (0, I.iv)({
                            name: "1bpq7li",
                            styles: "padding:30px;padding-top:0"
                        })
                    }, He ? C.createElement("div", {
                        className: "full-width text-center"
                    }, C.createElement(ie.Z, null)) : C.createElement("div", {
                        className: (0, I.iv)({
                            name: "pc0kie",
                            styles: ">*{margin-top:15px;}"
                        })
                    }, C.createElement($.Z, null, C.createElement("span", {
                        className: "full-width text-center"
                    }, "Hey! This can't be undone! Only do this if you ", C.createElement("strong", null, "KNOW"), " what you're doing!")), C.createElement($.Z, null, C.createElement(re.zx, {
                        onClick: Jn,
                        danger: !0,
                        className: "full-width"
                    }, "DELETE IT!")), C.createElement($.Z, null, C.createElement(re.zx, {
                        className: "full-width",
                        onClick: function() {
                            fe(!1)
                        }
                    }, "Get me outta here!"))))), C.createElement(_.Z, null, C.createElement(re.zx, {
                        danger: !0,
                        onClick: function() {
                            fe(!0)
                        },
                        disabled: Hn,
                        loading: Hn
                    }, C.createElement(le.Z, {
                        icon: q.$
                    }), " Delete Group"))))) : C.createElement(yt, {
                        groupId: null == b ? void 0 : b.id
                    })
                }), C.createElement(S.AW, {
                    path: "/me",
                    element: null != b && b.myMember ? C.createElement(yt, {
                        groupId: null == b ? void 0 : b.id
                    }) : C.createElement(R.Z, {
                        to: ".."
                    })
                }), C.createElement(S.AW, {
                    path: "/roles/:roleId?/:newRoleType?",
                    element: Ut || T({
                        groupMember: null == b ? void 0 : b.myMember,
                        permission: "group-roles-manage"
                    }) ? C.createElement(Jt, {
                        group: b
                    }) : C.createElement(R.Z, {
                        to: ".."
                    })
                }), C.createElement(S.AW, {
                    path: "/logs",
                    element: Ut || T({
                        groupMember: null == b ? void 0 : b.myMember,
                        permission: "group-audit-view"
                    }) ? C.createElement(ut, {
                        group: b
                    }) : C.createElement(R.Z, {
                        to: ".."
                    })
                }), C.createElement(S.AW, {
                    path: "/ageverificationbeta",
                    element: b.tags.includes("admin_age_verification_enabled") && (Ut || (null == b ? void 0 : b.myMember.userId) === b.ownerId) ? C.createElement($.Z, null, C.createElement(_.Z, null, C.createElement(re.oI, null, C.createElement("h4", {
                        className: "text-center"
                    }, "Age Verification Beta")), C.createElement(re.Ao, null, C.createElement($.Z, {
                        className: "mb-1"
                    }, C.createElement(_.Z, null, C.createElement(V.Z, null, "Beta Slots Remaining")), C.createElement(_.Z, null, b.ageVerificationBetaSlots)), C.createElement($.Z, {
                        className: "mb-1"
                    }, C.createElement(_.Z, null, C.createElement(V.Z, null, "Verification Link")), C.createElement(_.Z, null, C.createElement("a", {
                        href: "https://vrchat.com/home/group/".concat(b.id, "/ageverification/").concat(b.ageVerificationBetaCode)
                    }, "https://vrchat.com/home/group/", b.id, "/ageverification/", b.ageVerificationBetaCode)))))) : C.createElement(R.Z, {
                        to: ".."
                    })
                })))
            };
            var en = (0, a.Z)(re.gx, {
                    target: "e3uj5bu0"
                })({
                    name: "1vp1ylf",
                    styles: ">textarea{height:200px;}"
                }),
                tn = n(50141),
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
                        (0, L.Z)(e, t, n[t])
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
                    E = C.useState(!1),
                    v = (0, l.Z)(E, 2),
                    h = v[0],
                    b = v[1],
                    w = C.useState(!1),
                    y = (0, l.Z)(w, 2),
                    x = y[0],
                    k = y[1],
                    Z = C.useState({}),
                    N = (0, l.Z)(Z, 2),
                    I = N[0],
                    O = N[1],
                    S = (0, pe.r5)({
                        groupId: s.groupId
                    }),
                    j = S.data,
                    M = S.isLoading,
                    A = S.isError,
                    P = S.error,
                    R = (0, pe.xm)({
                        groupId: s.groupId,
                        userId: s.userId
                    }),
                    U = R.data,
                    q = R.isLoading,
                    z = R.isError,
                    G = R.error,
                    D = (0, pe.uX)(),
                    F = (0, l.Z)(D, 2),
                    X = F[0],
                    _ = (F[1].isLoading, (0, pe.dl)()),
                    $ = (0, l.Z)(_, 2),
                    J = $[0],
                    B = ($[1].isLoading, (0, pe.LA)()),
                    W = (0, l.Z)(B, 2),
                    Y = W[0],
                    H = (W[1].isLoading, (0, pe.FW)()),
                    Q = (0, l.Z)(H, 2),
                    K = Q[0],
                    ee = (Q[1].isLoading, (0, pe.l5)()),
                    te = (0, l.Z)(ee, 2),
                    ne = te[0],
                    ae = (te[1].isLoading, (0, de.pc)()),
                    oe = M || q,
                    ie = z || A;
                if (C.useEffect((function() {
                        m()
                    }), []), ie) return C.createElement(C.Fragment, null, C.createElement(re.oI, null, C.createElement("h4", null, "Managing Member")), C.createElement(re.Ao, null, C.createElement("div", null, C.createElement("div", {
                    className: "text-center mb-4"
                }, C.createElement(le.Z, {
                    icon: rn.faTriangleExclamation,
                    size: "xl"
                })), C.createElement("h4", {
                    className: "text-center mb-4"
                }, "We have encountered a problem."), P && C.createElement("p", {
                    className: "text-center text-danger"
                }, null == P || null === (o = P.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message), G && C.createElement("p", {
                    className: "text-center text-danger"
                }, null == G || null === (c = G.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message))));
                if (oe) return null;
                var ce = function() {
                        b(!h)
                    },
                    se = function() {
                        k(!x)
                    };
                if (null == U) return C.createElement("div", null);
                var ue = T({
                        groupMember: null == j ? void 0 : j.myMember,
                        permission: "group-members-manage"
                    }),
                    me = T({
                        groupMember: null == j ? void 0 : j.myMember,
                        permission: "group-roles-assign"
                    }),
                    ge = T({
                        groupMember: null == j ? void 0 : j.myMember,
                        permission: "group-bans-manage"
                    }),
                    fe = (null == j || null === (t = j.myMember) || void 0 === t ? void 0 : t.id) === U.id,
                    Ee = null != I.managerNotes ? I.managerNotes : U.managerNotes,
                    ve = (null == U ? void 0 : U.roleIds) || [],
                    he = ve.map((function(e) {
                        var t = j.roles.find((function(t) {
                                return t.id === e
                            })),
                            n = (null == t ? void 0 : t.order) > (null == j ? void 0 : j.memberRank) && ((null == t ? void 0 : t.isSelfAssignable) && 0 !== (null == t ? void 0 : t.order) || me);
                        return t ? C.createElement(C.Fragment, null, C.createElement(mn, {
                            key: t.id,
                            roleid: t.id,
                            canInteract: n,
                            onClick: function() {
                                n && function(e) {
                                    j.roles.find((function(t) {
                                        return t.id === e
                                    })) && ne({
                                        groupId: U.groupId,
                                        userId: U.userId,
                                        roleId: e
                                    })
                                }(t.id)
                            }
                        }, t.name)) : null
                    })),
                    be = j.roles.filter((function(e) {
                        return !ve.includes(e.id) && (0 !== (null == e ? void 0 : e.order) && ((null == e || !e.requiresPurchase) && ((null == e || !e.defaultRole) && (!(!me && !ae) || !(!fe || !e.isSelfAssignable)))))
                    })).map((function(e) {
                        var t = (null == e ? void 0 : e.order) > (null == j ? void 0 : j.memberRank) && ((null == e ? void 0 : e.isSelfAssignable) && 0 !== (null == e ? void 0 : e.order) || me);
                        return C.createElement(mn, {
                            key: e.id,
                            roleid: e.id,
                            canInteract: t,
                            onClick: function() {
                                var n;
                                t && (n = e.id, j.roles.find((function(e) {
                                    return e.id === n
                                })) && K({
                                    groupId: U.groupId,
                                    userId: U.userId,
                                    roleId: n
                                }))
                            }
                        }, e.name)
                    }));
                return C.createElement($t.Z, {
                    loading: oe
                }, C.createElement(re.oI, null, C.createElement("h4", null, "Managing ", null == s || null === (n = s.user) || void 0 === n ? void 0 : n.displayName)), C.createElement(re.Ao, null, x && C.createElement("div", null, C.createElement("h4", {
                    className: "text-center mb-4"
                }, "Are you sure you want to kick ", null == U || null === (r = U.user) || void 0 === r ? void 0 : r.displayName, "?!?!"), C.createElement(re.X2, null, C.createElement(re.zx, {
                    warning: !0,
                    onClick: function() {
                        se(), Y({
                            groupId: U.groupId,
                            userId: U.userId,
                            fromPage: f
                        }), p()
                    },
                    expand: !0
                }, C.createElement(re.$1, {
                    icon: nn.uM
                }), " Get 'em outta here!"), " ", C.createElement(re.zx, {
                    neutral: !0,
                    onClick: se,
                    expand: !0
                }, "Cancel"))), h && C.createElement("div", null, C.createElement("h4", {
                    className: "text-center mb-4"
                }, "Are you sure you want to ban ", null == U || null === (a = U.user) || void 0 === a ? void 0 : a.displayName, "?!?!"), C.createElement(re.X2, null, C.createElement(re.zx, {
                    danger: !0,
                    onClick: function() {
                        ce(), J({
                            groupId: U.groupId,
                            userId: U.userId,
                            fromPage: f
                        }), p()
                    },
                    expand: !0
                }, C.createElement(re.$1, {
                    icon: i.JH
                }), " And stay out!"), " ", C.createElement(re.zx, {
                    neutral: !0,
                    onClick: ce,
                    expand: !0
                }, "Cancel"))), !(x || h) && C.createElement(C.Fragment, null, (me || ae || fe) && C.createElement(cn, null, C.createElement(sn, null, C.createElement("h6", null, "Available Roles"), C.createElement(un, null, be)), C.createElement(dn, null, C.createElement("h6", null, "Assigned Roles"), C.createElement(pn, null, he))), C.createElement(re.X2, null, (ue || ae) && C.createElement("div", {
                    className: "setting mb-2 flex-1"
                }, C.createElement(V.Z, null, "Notes"), C.createElement(re.gx, {
                    name: "managerNotes",
                    className: "notes-input full-width",
                    value: Ee,
                    onChange: function(e) {
                        var t = e.target.name,
                            n = "checkbox" === e.target.getAttribute("type") ? e.target.checked : e.target.value;
                        O(an(an({}, I), {}, (0, L.Z)({}, t, n)))
                    }
                }))), C.createElement(re.X2, null, C.createElement(re.zx, {
                    expand: !0,
                    color: "primary",
                    onClick: function() {
                        ! function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = an(an({}, I), e);
                            Object.keys(t).length > 0 && X(an({
                                groupId: U.groupId,
                                userId: U.userId
                            }, t)), p()
                        }()
                    }
                }, C.createElement(re.$1, {
                    icon: Et.r6
                }), " Save"), " ", C.createElement(re.zx, {
                    expand: !0,
                    neutral: !0,
                    onClick: p
                }, "Close"), ((null == j ? void 0 : j.memberRank) < g && ue || ae) && C.createElement(C.Fragment, null, " ", C.createElement(re.zx, {
                    expand: !0,
                    warning: !0,
                    onClick: se
                }, C.createElement(le.Z, {
                    icon: nn.uM
                }), "  Kick"), " ", (ge || ae) && C.createElement(re.zx, {
                    expand: !0,
                    danger: !0,
                    onClick: ce
                }, C.createElement(le.Z, {
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
                        c = (0, C.useState)(!0),
                        s = (0, l.Z)(c, 2),
                        u = s[0],
                        m = s[1],
                        d = (0, pe.Rx)(),
                        p = (0, l.Z)(d, 2),
                        g = p[0],
                        f = p[1].isLoading,
                        E = (0, pe.dl)(),
                        v = (0, l.Z)(E, 2),
                        h = v[0],
                        b = v[1].isLoading;
                    if (null === n) return null;
                    var w = function() {
                            var e = (0, r.Z)(N().mark((function e() {
                                var t, r;
                                return N().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, h({
                                                groupId: a,
                                                userId: n.id
                                            }).unwrap();
                                        case 3:
                                            o((0, ee.d)({
                                                icon: k.f8,
                                                message: "".concat(n.displayName, " is banned!"),
                                                color: "success",
                                                timeout: 3e3
                                            })), m(!1), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), o((0, ee.d)({
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
                                            o((0, ee.d)({
                                                icon: k.f8,
                                                message: "".concat(n.displayName, " is un-banned!"),
                                                color: "success",
                                                timeout: 3e3
                                            })), m(!0), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), o((0, ee.d)({
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
                    return C.createElement(me.Wm, {
                        className: "flex-row my-1"
                    }, C.createElement("div", {
                        className: "container-fluid p-0"
                    }, C.createElement($.Z, null, C.createElement(_.Z, {
                        xs: 12,
                        sm: 2,
                        className: "pe-0"
                    }, C.createElement(j.rU, {
                        to: "/home/user/".concat(n.id),
                        title: n.displayName,
                        target: "_blank"
                    }, C.createElement(me.D2, {
                        image: (null == n ? void 0 : n.iconUrl) || (null == n ? void 0 : n.thumbnailUrl) || (null == n ? void 0 : n.userIcon) || (null == n ? void 0 : n.currentAvatarThumbnailImageUrl)
                    }))), C.createElement(_.Z, null, C.createElement(gn.Z, {
                        className: "d-flex flex-row justify-content-between py-1"
                    }, C.createElement("div", {
                        className: "container p-0"
                    }, C.createElement($.Z, null, C.createElement(_.Z, {
                        xs: 12,
                        sm: 7,
                        className: "p-1"
                    }, C.createElement(j.rU, {
                        to: "/home/user/".concat(n.id),
                        title: n.displayName,
                        target: "_blank"
                    }, C.createElement(me.Hz, {
                        tag: "h5"
                    }, n.displayName)), C.createElement(fn.Z, {
                        className: "mb-2 text-muted text-truncate tw-capitalize",
                        tag: "h6"
                    }, n.status)), C.createElement(_.Z, null, C.createElement("div", {
                        className: "tw-flex tw-col tw-justify-end"
                    }, C.createElement("div", {
                        className: "tw-justify-end"
                    }, C.createElement(re.zx, {
                        onClick: u ? w : y,
                        disabled: b || f,
                        loading: b || f,
                        className: "tw-w-fit tw-px-4"
                    }, C.createElement(re.$1, {
                        width: 20,
                        icon: i.JH
                    }), u ? " Ban" : " Unban")))))))))))
                };
            En.propTypes = {
                user: fe().object,
                groupId: fe().string.isRequired
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
                    return C.createElement(me.Wm, {
                        className: "flex-row my-1"
                    }, C.createElement("div", {
                        className: "container-fluid p-0"
                    }, C.createElement($.Z, null, C.createElement(_.Z, {
                        xs: 12,
                        sm: 2,
                        className: "pe-0"
                    }, C.createElement(j.rU, {
                        to: "/home/user/".concat(a.id),
                        title: a.displayName,
                        target: "_blank"
                    }, C.createElement(me.D2, {
                        image: a.iconUrl || a.thumbnailUrl
                    }))), C.createElement(_.Z, null, C.createElement(gn.Z, {
                        className: "d-flex flex-row justify-content-between py-1"
                    }, C.createElement("div", {
                        className: "container p-0"
                    }, C.createElement($.Z, null, C.createElement(_.Z, {
                        xs: 12,
                        sm: 7,
                        className: "p-1"
                    }, C.createElement(j.rU, {
                        to: "/home/user/".concat(a.id),
                        title: a.displayName,
                        target: "_blank"
                    }, C.createElement(me.Hz, {
                        tag: "h5"
                    }, a.displayName)), C.createElement(fn.Z, {
                        className: "mb-2 text-muted text-truncate",
                        tag: "h6"
                    }, "Joined ", ve()(n.joinedAt).fromNow()), C.createElement(bn.Z, {
                        className: "text-truncate text-secondary"
                    }, (0, xe.wz)({
                        member: n,
                        groupRoles: r
                    }).join(", "))), C.createElement(_.Z, null, C.createElement(me.$, null, C.createElement(re.zx, {
                        onClick: function() {
                            return l(n, (0, xe.H)({
                                member: n,
                                groupRoles: r
                            }), null)
                        }
                    }, C.createElement(re.$1, {
                        width: 20,
                        icon: hn.Iw
                    })))))))))))
                };
            wn.propTypes = {
                member: fe().object.isRequired,
                groupRoles: fe().array.isRequired,
                memberEditCallback: fe().func.isRequired
            };
            const yn = wn;
            var xn = function(e) {
                var t, n, r, a = e.groupId,
                    o = e.isOpen,
                    i = e.cancelCallback,
                    c = e.isGroupMemberOnly,
                    s = void 0 !== c && c,
                    u = e.memberEditCallback,
                    m = (0, C.useRef)(null),
                    d = (0, C.useState)(""),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = (0, C.useState)(1),
                    v = (0, l.Z)(E, 2),
                    h = v[0],
                    b = v[1],
                    w = (0, de.Nr)(g);
                (0, C.useEffect)((function() {
                    setTimeout((function() {
                        o && null != m && m.current && m.current.focus()
                    }), 300)
                }), [o, m]), (0, C.useEffect)((function() {
                    b(1)
                }), [g]), (0, C.useEffect)((function() {
                    f("")
                }), [o]);
                var y = (0, pe.Vc)({
                        groupId: a
                    }, {
                        skip: !s
                    }),
                    x = y.data,
                    k = y.isSuccess,
                    Z = y.isError,
                    N = y.error,
                    I = (0, pe.Pi)({
                        groupId: a,
                        pageValue: h,
                        searchTerm: w,
                        n: 25
                    }, {
                        skip: "" === w || !o || w.length < 3 || !s
                    }),
                    O = I.data,
                    S = I.error,
                    j = I.isError,
                    M = I.isFetching,
                    A = I.isSuccess,
                    P = (0, ne.hi)({
                        pageValue: h,
                        searchTerm: w,
                        n: 25
                    }, {
                        skip: "" === w || !o || w.length < 3 || s
                    }),
                    T = P.data,
                    R = P.error,
                    L = P.isError,
                    U = P.isFetching,
                    q = P.isSuccess;
                return C.createElement(me.Xv, {
                    role: "dialog",
                    isOpen: o,
                    toggle: i,
                    keyboard: !0,
                    autoFocus: !1
                }, C.createElement(me.eb, {
                    tag: "h4",
                    close: C.createElement(oe.Z, {
                        onClick: i
                    }),
                    toggle: i
                }, s ? "Group Members Search" : "Users Search"), C.createElement(me.vc, null, C.createElement(me.T_, null, C.createElement(re.II, {
                    id: "search-product-list",
                    onChange: function(e) {
                        return f(e.target.value)
                    },
                    placeholder: s ? "Search Group Members..." : "Search for users...",
                    ref: m,
                    type: "text",
                    value: g
                }), (j || Z || L) && C.createElement("p", {
                    className: "text-center m-5 text-warning h-25"
                }, "Something went wrong with the search, please try again later!", C.createElement("br", null), j && C.createElement("code", null, null == S || null === (t = S.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), Z && C.createElement("code", null, null == N || null === (n = N.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), L && C.createElement("code", null, null == R || null === (r = R.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message)), M && C.createElement(me.Um, null, C.createElement("div", {
                    className: "text-center m-5 text-secondary h-25"
                }, C.createElement(ie.Z, null))), !A && !M && !j && s && C.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "Search for members in your group."), A && !M && k && s && C.createElement(me.Um, null, O.results.map((function(e) {
                    return C.createElement(yn, {
                        key: e.id,
                        member: e,
                        groupRoles: x,
                        memberEditCallback: u
                    })
                })), 0 === O.results.length && C.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "We couldn't find anything with that search.")), !q && !U && !L && !s && C.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "Search for users on VRChat."), q && C.createElement(me.Um, null, T.results.map((function(e) {
                    return C.createElement(vn, {
                        key: e.id,
                        user: e,
                        groupId: a
                    })
                })), 0 === T.results.length && C.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "We couldn't find anything with that search.")), (A || q) && C.createElement(me.Gz, null, C.createElement(me.IT, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return b(h - 1)
                    },
                    disabled: 1 === h || M || U
                }, C.createElement(re.$1, {
                    icon: ue.A3
                })), C.createElement("span", null, h), C.createElement(me.UV, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return b(h + 1)
                    },
                    disabled: (null == O ? void 0 : O.isLastPage) || (null == T ? void 0 : T.isLastPage) || M || U
                }, C.createElement(re.$1, {
                    icon: se._t
                }))))))
            };
            xn.propTypes = {
                groupId: fe().string,
                isOpen: fe().bool.isRequired,
                cancelCallback: fe().func.isRequired,
                memberEditCallback: fe().func
            };
            const kn = xn;

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

            function Nn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Zn(Object(n), !0).forEach((function(t) {
                        (0, L.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zn(Object(n)).forEach((function(t) {
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
            const Cn = function(e) {
                var t, n = e.group,
                    r = C.useState(!1),
                    a = (0, l.Z)(r, 2),
                    o = a[0],
                    i = a[1],
                    c = C.useState(!1),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = C.useState(null),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = C.useState(null),
                    v = (0, l.Z)(E, 2),
                    h = v[0],
                    b = v[1],
                    w = C.useState(null),
                    y = (0, l.Z)(w, 2),
                    x = y[0],
                    k = y[1],
                    Z = C.useState(""),
                    N = (0, l.Z)(Z, 2),
                    O = N[0],
                    S = (N[1], C.useState(null)),
                    j = (0, l.Z)(S, 2),
                    A = j[0],
                    P = j[1],
                    R = C.useState(null),
                    L = (0, l.Z)(R, 2),
                    q = L[0],
                    z = L[1],
                    G = (0, te.XC)().data,
                    D = (0, de.pc)(),
                    F = (0, C.useState)([
                        [],
                        []
                    ]),
                    X = (0, l.Z)(F, 2),
                    _ = X[0],
                    $ = X[1],
                    J = null == n ? void 0 : n.myMember,
                    B = (0, C.useState)(0),
                    V = (0, l.Z)(B, 2),
                    W = V[0],
                    Y = V[1],
                    H = (0, C.useState)(25),
                    Q = (0, l.Z)(H, 1)[0],
                    K = (0, pe.Pv)(),
                    ee = (0, l.Z)(K, 2),
                    ne = ee[0],
                    le = ee[1],
                    ae = le.data,
                    oe = le.error,
                    ie = le.isLoading,
                    ce = (0, pe.Vc)({
                        groupId: null == n ? void 0 : n.id
                    }),
                    se = ce.data,
                    ue = ce.isFetching,
                    me = (null == ae || null === (t = ae.members) || void 0 === t ? void 0 : t.length) < Q;
                C.useEffect((function() {
                    ge(Q, 0)
                }), []), C.useEffect((function() {
                    var e = (0, U.Z)(_);
                    if (ae) {
                        var t;
                        if (ae.page <= 0 && !O && null === A && null === q && null != n && n.myMember) e[0] = [Nn(Nn({}, J), {}, {
                            userId: G.id,
                            user: Nn(Nn({}, G), {}, {
                                thumbnailUrl: null !== (t = G.profilePicOverride) && void 0 !== t ? t : G.currentAvatarImageUrl
                            })
                        })].concat((0, U.Z)(ae.members));
                        else e[ae.page] = ae.members;
                        $(e)
                    }
                }), [ae]);
                C.useEffect((function() {}), [O]), C.useEffect((function() {
                    Y(0), $([
                        [],
                        []
                    ]), ge(Q, 0)
                }), [A, q]);
                var ge = function(e, t) {
                        ne({
                            groupId: n.id,
                            perPage: e,
                            page: t,
                            sort: A,
                            roleId: q
                        }), Y(t + 1)
                    },
                    fe = function(e, t, n) {
                        f(e), k(t), b(n), i(!0)
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
                        return !!D || (!(!ve && !Ee || !a) || (!(!ve && !Ee || !o) || !(!i || !o)))
                    };
                if (ue) return C.createElement(re.UU, {
                    height: "200px"
                });
                var we = null == _ ? void 0 : _.map((function(e, t) {
                        var r;
                        return null === (r = (0, U.Z)(e)) || void 0 === r || null === (r = r.sort((function(e) {
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
                            return C.createElement("button", {
                                className: "tw-border-none tw-bg-transparent tw-rounded-2xl tw-p-0",
                                key: e.id,
                                type: "button",
                                onClick: function() {
                                    null != e && e.id && fe(e, l, t)
                                },
                                disabled: !be({
                                    memberRank: l,
                                    member: e
                                })
                            }, C.createElement(tn.Z, {
                                userId: e.userId,
                                isCard: !0
                            }))
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
                return C.createElement(C.Fragment, null, C.createElement(re.oI, null, C.createElement("h4", {
                    className: "text-center font-weight-bolder"
                }, "Members ", !Ee && !he && "(Friends only)")), C.createElement(re.Ao, null, C.createElement("div", {
                    className: (0, I.iv)({
                        name: "8osrbx",
                        styles: "background-color:var(--dark);padding:0 20px 20px 20px"
                    })
                }, Ee && C.createElement(re.JX, null, C.createElement("h6", null, "Filters:"), C.createElement(re.X2, {
                    className: "flex-wrap"
                }, C.createElement(On, {
                    label: "Filter role",
                    onChange: z,
                    options: ye,
                    value: q,
                    className: "mb-2 mx-2"
                }), C.createElement(On, {
                    label: "Join order",
                    onChange: P,
                    options: In,
                    value: A,
                    className: "mb-2 mx-2"
                }))), C.createElement(M.Z, {
                    isOpen: o,
                    toggle: function() {
                        i(!1)
                    }
                }, C.createElement(on, {
                    groupMember: g,
                    memberRank: null != x ? x : 0,
                    closeCallback: function() {
                        i(!1)
                    },
                    memberListPage: h
                })), Ee && C.createElement("div", {
                    className: "p-2"
                }, C.createElement(re.zx, {
                    onClick: function() {
                        m(!0)
                    }
                }, C.createElement(re.$1, {
                    color: "white",
                    icon: Me.faMagnifyingGlass
                }), "  Search Group Members")), C.createElement(kn, {
                    isOpen: u,
                    groupId: n.id,
                    cancelCallback: function() {
                        return m(!1)
                    },
                    memberEditCallback: fe,
                    isGroupMemberOnly: !0
                }), ie ? C.createElement(re.UU, {
                    height: "200px"
                }) : C.createElement(Sn, null, we), C.createElement("div", {
                    className: "p-2",
                    style: {
                        margin: "20px auto 0",
                        textAlign: "center"
                    }
                }, C.createElement(re.zx, {
                    onClick: function() {
                        ge(Q, W)
                    },
                    disabled: ie || oe || me,
                    loading: ie
                }, oe || me ? "No more members..." : "List More Members")))))
            };
            var On = (0, a.Z)(re.Lt, {
                    target: "egqvjul1"
                })({
                    name: "1w9pskj",
                    styles: "width:300px;min-width:200px"
                }),
                Sn = (0, a.Z)("div", {
                    target: "egqvjul0"
                })({
                    name: "np9ciw",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;gap:24px;justify-content:space-evenly;>*{width:300px;margin-top:8px;}"
                }),
                jn = n(4751);
            const Mn = function(e) {
                var t, n, r = e.langs,
                    l = e.tags,
                    a = (0, Q.y)().data,
                    o = null !== (t = null == a || null === (n = a.constants) || void 0 === n || null === (n = n.LANGUAGE) || void 0 === n ? void 0 : n.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== t ? t : H.O,
                    i = null != r ? r : l.filter((function(e) {
                        return e.startsWith("language")
                    })).map((function(e) {
                        var t = e.split("_")[1];
                        return {
                            abbreviation: t.toUpperCase(),
                            title: o[t]
                        }
                    }));
                return C.createElement(Ln, null, C.createElement(Un, null, C.createElement(An, null, "Languages")), C.createElement(qn, null, i.length > 0 ? i.map((function(e) {
                    var t, n;
                    return C.createElement(Rn, {
                        key: e,
                        title: null !== (t = e.title) && void 0 !== t ? t : o[e]
                    }, null !== (n = e.abbreviation) && void 0 !== n ? n : e.toUpperCase())
                })) : C.createElement("h4", {
                    className: "align-self-center"
                }, "None added")))
            };
            var An = (0, a.Z)("h2", {
                    target: "e8rhb6u6"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                Pn = (0, a.Z)("div", {
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
                Ln = (0, a.Z)(Pn, {
                    target: "e8rhb6u2"
                })({
                    name: "u5t5ke",
                    styles: "flex:1;min-width:350px;min-height:136px"
                }),
                Un = (0, a.Z)(me.JX, {
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
            const zn = function(e) {
                var t = e.links;
                return C.createElement($n, null, C.createElement(Jn, null, C.createElement(Gn, null, "Links")), C.createElement(Bn, null, t.length > 0 ? t.map((function(e) {
                    return C.createElement(_n, {
                        key: e
                    }, C.createElement($e.QZ, {
                        url: e,
                        style: {
                            height: "70px",
                            width: "70px"
                        },
                        target: "_blank"
                    }))
                })) : C.createElement("h4", {
                    className: "align-self-center"
                }, "None added")))
            };
            var Gn = (0, a.Z)("h2", {
                    target: "e19ri8nl7"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                Dn = (0, a.Z)("div", {
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
                Xn = (0, a.Z)(Fn, {
                    target: "e19ri8nl4"
                })({
                    name: "jrwc5p",
                    styles: ":hover{transform:scale(1.1);cursor:pointer;}"
                }),
                _n = (0, a.Z)(Xn, {
                    target: "e19ri8nl3"
                })(""),
                $n = (0, a.Z)(Dn, {
                    target: "e19ri8nl2"
                })({
                    name: "u5t5ke",
                    styles: "flex:1;min-width:350px;min-height:136px"
                }),
                Jn = (0, a.Z)(me.JX, {
                    target: "e19ri8nl1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                Bn = (0, a.Z)(Jn, {
                    target: "e19ri8nl0"
                })({
                    name: "18clcmv",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto"
                }),
                Vn = n(87261),
                Wn = n(50347),
                Yn = n(88233);

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

            function Qn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Hn(Object(n), !0).forEach((function(t) {
                        (0, L.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Kn = C.lazy((function() {
                return Promise.all([n.e(123), n.e(786), n.e(4444), n.e(9908), n.e(229), n.e(3294), n.e(527), n.e(4814)]).then(n.bind(n, 40527))
            }));
            const er = function(e) {
                var t, n, a, i = e.group,
                    c = e.gallery,
                    s = e.justAdded,
                    u = void 0 !== s && s,
                    m = (0, O.I0)(),
                    d = (0, O.v9)((function(e) {
                        var t;
                        return null === (t = e.group) || void 0 === t || null === (t = t.galleries) || void 0 === t ? void 0 : t.isLoading
                    })),
                    p = C.useState(!1),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = C.useState(null),
                    h = (0, l.Z)(v, 2),
                    b = h[0],
                    w = (h[1], C.useState(null)),
                    y = (0, l.Z)(w, 2),
                    x = y[0],
                    k = y[1],
                    Z = C.useState(null),
                    S = (0, l.Z)(Z, 2),
                    j = S[0],
                    A = S[1],
                    P = C.useState(!1),
                    R = (0, l.Z)(P, 2),
                    U = R[0],
                    q = R[1],
                    z = C.useState({
                        name: c.name,
                        description: c.description,
                        membersOnly: c.membersOnly
                    }),
                    G = (0, l.Z)(z, 2),
                    D = G[0],
                    F = G[1],
                    _ = C.useState(!1),
                    $ = (0, l.Z)(_, 2),
                    W = $[0],
                    Y = $[1],
                    H = C.useState(15),
                    Q = (0, l.Z)(H, 1)[0],
                    ee = C.useState(1),
                    te = (0, l.Z)(ee, 2),
                    ne = te[0],
                    le = te[1],
                    ae = C.useState(!0),
                    oe = (0, l.Z)(ae, 2),
                    ie = oe[0],
                    ce = oe[1],
                    me = (0, pe.d3)({
                        groupId: i.id,
                        galleryId: c.id,
                        n: Q,
                        page: ne
                    }),
                    de = me.data,
                    ge = me.isLoading,
                    fe = me.isSuccess,
                    Ee = (0, pe.zv)(),
                    ve = (0, l.Z)(Ee, 2),
                    he = ve[0],
                    be = (ve[1].isLoading, (0, pe.E8)()),
                    we = (0, l.Z)(be, 2),
                    ye = we[0],
                    xe = (we[1].isLoading, (0, pe.pI)()),
                    ke = (0, l.Z)(xe, 2),
                    Ze = ke[0],
                    Ne = ke[1],
                    Ie = (Ne.isLoading, Ne.isSuccess),
                    Ce = (0, pe.jP)(),
                    Oe = (0, l.Z)(Ce, 2),
                    Se = Oe[0],
                    je = (Oe[1].isLoading, (0, Nt.P2)());
                C.useEffect((function() {
                    document.getElementById(c.id) && u && !W && (document.getElementById(c.id).scrollIntoView({
                        behavior: "smooth"
                    }), Y(!0))
                })), C.useEffect((function() {
                    Ie && q(!1)
                }), [Ie]), C.useEffect((function() {
                    fe && ce((null == de ? void 0 : de.totalCount) >= 100)
                }), [fe]);
                var Me = function(e) {
                        var t = "checkbox" === e.target.getAttribute("type") ? !e.target.checked : e.target.value;
                        F(Qn(Qn({}, D), {}, (0, L.Z)({}, e.target.name, t)))
                    },
                    Ae = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, Ze({
                                            groupId: i.id,
                                            galleryId: c.id,
                                            data: Qn({}, D)
                                        }).unwrap();
                                    case 3:
                                        e.next = 8;
                                        break;
                                    case 5:
                                        e.prev = 5, e.t0 = e.catch(0), je({
                                            error: e.t0
                                        });
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 5]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                if (ge) return C.createElement(re.UU, {
                    className: "mt-3",
                    width: "100%",
                    height: "300px"
                });
                var Pe = T({
                        groupMember: null == i ? void 0 : i.myMember,
                        permission: "group-galleries-manage"
                    }),
                    Te = de.totalCount,
                    Re = (ne - 1) * Q,
                    Le = C.createElement(rr, null, C.createElement(lr, {
                        className: "d-flex flex-row align-items-center justify-content-center",
                        onClick: function() {
                            return le(ne - 1)
                        },
                        disabled: 0 === Re
                    }, C.createElement(re.$1, {
                        icon: ue.A3
                    })), C.createElement("span", null, ne, " / ", Math.ceil(Te / Q), " ", C.createElement("small", null, Te > 0 && "(".concat(Te, "/").concat(100, ")"))), C.createElement(ar, {
                        className: "d-flex flex-row align-items-center justify-content-center",
                        onClick: function() {
                            return le(ne + 1)
                        },
                        disabled: Re + Q >= Te
                    }, C.createElement(re.$1, {
                        icon: se._t
                    })));
                return C.createElement("div", {
                    className: "my-2",
                    id: c.id
                }, C.createElement(Yn.Z, {
                    imageUrl: x,
                    closeCallback: function() {
                        k(null)
                    },
                    nextCallback: null !== (t = de.results) && void 0 !== t && t[j + 1] ? function() {
                        k(de.results[j + 1].imageUrl), A(j + 1)
                    } : null,
                    prevCallback: null !== (n = de.results) && void 0 !== n && n[j - 1] ? function() {
                        k(de.results[j - 1].imageUrl), A(j - 1)
                    } : null
                }), C.createElement(M.Z, {
                    isOpen: f,
                    className: (0, I.iv)({
                        name: "1ul0gzp",
                        styles: "max-width:1500px!important"
                    })
                }, C.createElement(J.Z, null, C.createElement(Kn, {
                    isSelector: !0,
                    activeTab: "photos",
                    selectedCallback: function(e) {
                        var t;
                        t = e, he({
                            groupId: i.id,
                            galleryId: c.id,
                            fileId: t
                        }), E(!1)
                    },
                    selectedId: null != b ? b : ""
                })), C.createElement(B.Z, null, C.createElement(re.zx, {
                    onClick: function() {
                        E(!1), m((0, K.b9)())
                    }
                }, "Cancel"))), C.createElement(re.oI, null, C.createElement("h4", null, c.name), C.createElement("span", null, c.description)), C.createElement(re.Ao, null, 0 !== Te && Le, U ? C.createElement(re.JX, {
                    className: "w-100"
                }, C.createElement(V.Z, null, "Gallery name", C.createElement(re.II, {
                    value: D.name,
                    name: "name",
                    onChange: Me,
                    disabled: d,
                    maxLength: 64
                })), " ", C.createElement(V.Z, null, "Gallery description", C.createElement(re.II, {
                    value: D.description,
                    name: "description",
                    onChange: Me,
                    disabled: d,
                    maxLength: 512
                })), " ", C.createElement(re.X2, null, C.createElement(V.Z, null, "Is this gallery public?", " ", C.createElement(Vn.Z, {
                    type: "checkbox",
                    name: "membersOnly",
                    checked: !D.membersOnly,
                    onChange: Me,
                    disabled: d
                }))), C.createElement(re.X2, null, C.createElement(re.zx, {
                    expand: !0,
                    onClick: Ae,
                    disabled: d
                }, "Update"), " ", C.createElement(re.zx, {
                    expand: !0,
                    neutral: !0,
                    disabled: d,
                    onClick: function() {
                        q(!1)
                    }
                }, "Cancel"), " ", C.createElement(re.zx, {
                    expand: !0,
                    danger: !0,
                    disabled: d,
                    onClick: function() {
                        Se({
                            groupId: i.id,
                            galleryId: c.id,
                            confirm: !0
                        })
                    }
                }, "Delete"))) : C.createElement(C.Fragment, null, C.createElement(tr, null, (null === (a = de.results) || void 0 === a ? void 0 : a.length) > 0 ? de.results.map((function(e, t) {
                    return C.createElement(Wn.Z, {
                        key: e.id,
                        image: e.imageUrl,
                        disableManagement: d,
                        onClick: function() {
                            A(t),
                                function(e) {
                                    k(e)
                                }(e.imageUrl)
                        },
                        showDeleteButton: Pe,
                        onDelete: function() {
                            return function(e) {
                                ye({
                                    groupId: i.id,
                                    galleryId: c.id,
                                    imageId: e.id
                                })
                            }(e)
                        }
                    })
                })) : C.createElement("p", {
                    className: "m-0"
                }, "There are no pictures here... yet!")), Pe && C.createElement(nr, null, C.createElement(re.zx, {
                    className: "m-2",
                    disabled: ie,
                    onClick: function() {
                        E(!0)
                    }
                }, ie ? "Gallery is full" : C.createElement(C.Fragment, null, C.createElement(re.$1, {
                    icon: o.r8
                }), " Post an Image")), C.createElement(re.zx, {
                    neutral: !0,
                    onClick: function() {
                        q(!0)
                    }
                }, C.createElement(re.$1, {
                    icon: X.Kb
                }), " Manage Gallery")))))
            };
            var tr = (0, a.Z)("div", {
                    target: "e5pi12i4"
                })({
                    name: "1kra7du",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;align-items:center;margin:10px 0;width:100%"
                }),
                nr = (0, a.Z)("div", {
                    target: "e5pi12i3"
                })({
                    name: "198unna",
                    styles: "display:flex;flex-direction:row;justify-content:left;align-items:center;width:100%"
                }),
                rr = (0, a.Z)("div", {
                    target: "e5pi12i2"
                })({
                    name: "1vtota4",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-bottom:8px"
                }),
                lr = (0, a.Z)(re.zx, {
                    target: "e5pi12i1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                ar = (0, a.Z)(re.zx, {
                    target: "e5pi12i0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                });

            function or(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ir(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? or(Object(n), !0).forEach((function(t) {
                        (0, L.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : or(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const cr = function(e) {
                var t, n = e.group,
                    a = C.useState({
                        name: "",
                        description: "",
                        membersOnly: !1
                    }),
                    i = (0, l.Z)(a, 2),
                    c = i[0],
                    s = i[1],
                    u = C.useState(!1),
                    m = (0, l.Z)(u, 2),
                    d = m[0],
                    p = m[1],
                    g = (0, pe.Eg)(),
                    f = (0, l.Z)(g, 2),
                    E = f[0],
                    v = f[1],
                    h = v.data,
                    b = v.isLoading,
                    w = v.isSuccess,
                    y = v.isError,
                    x = v.error,
                    k = (0, Nt.P2)(),
                    Z = C.useState(!1),
                    I = (0, l.Z)(Z, 2),
                    O = I[0],
                    S = I[1];
                C.useEffect((function() {
                    w && p(!1)
                }), [w]);
                var j = function(e) {
                        var t = "checkbox" === e.target.getAttribute("type") ? !e.target.checked : e.target.value;
                        s(ir(ir({}, c), {}, (0, L.Z)({}, e.target.name, t)))
                    },
                    M = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return S(!1), e.prev = 1, e.next = 4, E(ir({
                                            groupId: n.id
                                        }, c)).unwrap();
                                    case 4:
                                        e.next = 9;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), k({
                                            error: e.t0
                                        }) && S(!0);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    A = null;
                return T({
                    groupMember: null == n ? void 0 : n.myMember,
                    permission: "group-galleries-manage"
                }) && (A = d ? C.createElement(C.Fragment, null, C.createElement(re.oI, null, C.createElement("h4", null, "Create Gallery")), C.createElement(re.Ao, null, C.createElement(V.Z, null, "Gallery name", C.createElement(re.II, {
                    value: c.name,
                    name: "name",
                    onChange: j,
                    disabled: b,
                    maxLength: 64
                })), " ", C.createElement(V.Z, null, "Gallery description", C.createElement(re.II, {
                    value: c.description,
                    name: "description",
                    onChange: j,
                    disabled: b,
                    maxLength: 512
                })), " ", C.createElement(re.X2, null, C.createElement(V.Z, null, "Is this gallery public?", " ", C.createElement(Vn.Z, {
                    type: "checkbox",
                    name: "membersOnly",
                    checked: !c.membersOnly,
                    onChange: j,
                    disabled: b
                }))), C.createElement(re.X2, null, C.createElement(re.zx, {
                    expand: !0,
                    onClick: M,
                    disabled: b,
                    loading: b
                }, "Create"), " ", C.createElement(re.zx, {
                    expand: !0,
                    neutral: !0,
                    onClick: function() {
                        p(!1)
                    },
                    disabled: b
                }, "Cancel")))) : C.createElement(re.zx, {
                    onClick: function() {
                        p(!0)
                    },
                    disabled: b,
                    loading: b
                }, C.createElement(re.$1, {
                    icon: o.r8
                }), " Create Gallery")), C.createElement("div", null, y && !O && C.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == x || null === (t = x.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred while creating the gallery."), A, n.galleries.length > 0 ? n.galleries.map((function(e) {
                    return (e.membersOnly && (null == n ? void 0 : n.myMember) || !e.membersOnly) && C.createElement(er, {
                        key: e.id,
                        group: n,
                        gallery: e,
                        justAdded: w && (null == h ? void 0 : h.id) === e.id
                    })
                })) : C.createElement(sr, null, "There aren't any galleries here!"))
            };
            var sr = (0, a.Z)(re.oI, {
                    target: "e7nydss0"
                })({
                    name: "es1q9a",
                    styles: "border-radius:6px;text-align:center;font-size:1.2rem;font-weight:bold;justify-content:center;align-items:center;padding:3rem 1rem;margin-top:0.5rem"
                }),
                ur = n(9186),
                mr = n(64509);

            function dr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function pr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? dr(Object(n), !0).forEach((function(t) {
                        (0, L.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const gr = function(e) {
                var t = e.group,
                    n = e.onJoinButtonClick,
                    r = (0, ur.Z)().sortedLocations,
                    a = (0, te.XC)(),
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
                    p = C.useState([]),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = (0, pe.dj)({
                        userId: null == i ? void 0 : i.id
                    }),
                    h = v.data,
                    b = v.isLoading,
                    w = (0, Q.y)(),
                    y = w.data,
                    x = 0;
                w.isSuccess && (x = y.constants.GROUPS.MAX_JOINED), C.useEffect((function() {
                    var e;
                    if (!d) {
                        var t = null == r ? void 0 : r.map((function(e) {
                            return e.instanceId
                        }));
                        E(null === (e = (0, U.Z)(m)) || void 0 === e || null === (e = e.sort((function(e, t) {
                            var n = e.memberCount;
                            return t.memberCount - n
                        }))) || void 0 === e ? void 0 : e.map((function(e) {
                            return t.includes(e.instanceId) ? pr(pr({}, e), {}, {
                                users: r.find((function(t) {
                                    return t.instanceId === e.instanceId
                                })).users
                            }) : pr(pr({}, e), {}, {
                                users: []
                            })
                        })))
                    }
                }), [m, r]);
                var k, Z = C.useMemo((function() {
                    var e;
                    return null == f || null === (e = f.sort((function(e, t) {
                        var n = e.users,
                            r = t.users;
                        return n.length === r.length ? 0 : n.length > r.length ? -1 : 1
                    }))) || void 0 === e ? void 0 : e.map((function(e) {
                        return C.createElement(mr.Z, {
                            key: "location-".concat(e.location),
                            className: "mb-4",
                            location: e,
                            isForGroup: !0,
                            currentGroup: t
                        })
                    }))
                }), [f]);
                if (d || c || b) return C.createElement(re.UU, {
                    width: "100%",
                    height: "200px"
                });
                var N = t.membershipStatus;
                if (t.memberCount < bt.qH && (h.length < x || i.tagsSet.has("admin_uncap_owned_groups")))
                    if (N === bt.oq.REQUESTED || N === bt.oq.INVITED || N === bt.oq.USER_BLOCKED) k = null;
                    else if (t.myMember) k = null;
                else switch (t.joinState) {
                    case bt.wN.OPEN:
                        k = C.createElement(re.zx, {
                            onClick: n,
                            className: "tw-w-full tw-mb-3"
                        }, C.createElement(re.$1, {
                            icon: o.r8,
                            className: "tw-mr-1"
                        }), "Join this group to view all instances");
                        break;
                    case bt.wN.REQUEST:
                        k = C.createElement(re.zx, {
                            onClick: n,
                            className: "tw-w-full tw-mb-3"
                        }, C.createElement(re.$1, {
                            icon: s.FU,
                            className: "tw-mr-1"
                        }), "Request to join to view all instances");
                        break;
                    default:
                        k = null
                }
                return C.createElement(C.Fragment, null, k, C.createElement(re.oI, null, C.createElement("h4", {
                    className: "text-center"
                }, "Instances")), C.createElement(re.Ao, null, null != Z && Z.length ? Z : C.createElement("p", {
                    className: "text-center"
                }, "Nothing to see here!")))
            };
            const fr = function(e) {
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
                return C.createElement(Er, null, C.createElement(Wn.Z, {
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
                }), C.createElement(vr, null, n && C.createElement("span", null, C.createElement(le.Z, {
                    icon: Se.nm,
                    width: 25
                }), " "), C.createElement("h4", null, b)))
            };
            var Er = (0, a.Z)("div", {
                    target: "e1ml2klq1"
                })({
                    name: "9flrez",
                    styles: "position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;>div:first-of-type{margin:0;border-bottom-right-radius:0;border-bottom-left-radius:0;}"
                }),
                vr = (0, a.Z)("div", {
                    target: "e1ml2klq0"
                })({
                    name: "7foox8",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:center;border:4px solid #252a30;background-color:#252a30;text-align:center;width:100%;border-bottom-right-radius:8px;border-bottom-left-radius:8px"
                }),
                hr = n(73670),
                br = n(15574);
            const wr = function(e) {
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
                    h = v[0],
                    b = v[1],
                    w = b.isLoading,
                    x = b.isSuccess,
                    k = b.isError,
                    Z = b.error,
                    N = d || w,
                    I = g || k,
                    O = f || Z;
                return C.useEffect((function() {
                    I && a(O)
                }), [I, O]), C.createElement("div", {
                    className: "mt-2 mb-2 d-flex flex-column justify-content-center"
                }, C.createElement(br.Z, {
                    className: "mb-0",
                    userId: n.id,
                    openLinksInNewTab: !0
                }), "invite" === i && C.createElement(re.zx, {
                    disabled: p || N,
                    loading: N,
                    onClick: function() {
                        return u({
                            groupId: t.id,
                            userId: n.id
                        })
                    },
                    color: p ? "success" : void 0
                }, p && C.createElement(re.$1, {
                    icon: y.LE,
                    className: "mx-2"
                }), "Invite", p && "d", " ", n.displayName), "ban" === i && C.createElement(re.zx, {
                    disabled: x || N,
                    loading: N,
                    onClick: function() {
                        return h({
                            groupId: t.id,
                            userId: n.id
                        })
                    },
                    color: x ? "success" : void 0
                }, x && C.createElement(re.$1, {
                    icon: y.LE,
                    className: "mx-2"
                }), "ban", x && "ned", " ", n.displayName))
            };
            var yr = n(25411),
                xr = n(12227);
            const kr = function(e) {
                var t = e.group,
                    n = e.mode,
                    r = void 0 === n ? "invite" : n,
                    a = (0, O.I0)(),
                    o = (0, de.pc)(),
                    i = C.useState(""),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, de.Nr)(s),
                    d = (0, O.v9)((function(e) {
                        return e.search
                    })).userResults,
                    p = C.useState(""),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = o && !1;
                C.useEffect((function() {
                    E(""), "" !== m && a((0, yr.pz)({
                        searchTerm: m,
                        n: xr.En,
                        isInternalVariant: v
                    }))
                }), [m]);
                var h = function(e) {
                    e && E(e.data.error.message)
                };
                return C.createElement(C.Fragment, null, C.createElement(hr.Z, {
                    searchString: u,
                    placeholder: "Search users..."
                }), f && C.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "px-4",
                    message: f
                }), d.map((function(e) {
                    return C.createElement(wr, {
                        mode: r,
                        key: e.id,
                        group: t,
                        user: e,
                        errorCallback: h
                    })
                })))
            };
            var Zr = n(37599),
                Nr = n(61509);
            const Ir = function(e) {
                var t, n, r, a, o, c, s, u, m = e.group,
                    d = (0, O.I0)(),
                    p = C.useState(!1),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = C.useState(!1),
                    h = (0, l.Z)(v, 2),
                    b = h[0],
                    w = h[1],
                    y = C.useState(null),
                    x = (0, l.Z)(y, 2),
                    k = x[0],
                    Z = x[1],
                    N = (0, pe.Sp)({
                        groupId: m.id
                    }),
                    I = N.data,
                    j = N.isError,
                    A = N.isLoading,
                    P = (0, pe.dZ)({
                        groupId: m.id
                    }),
                    R = P.data,
                    L = P.isError,
                    U = P.error,
                    q = P.isLoading,
                    z = (0, pe.dZ)({
                        groupId: m.id,
                        blocked: !0
                    }),
                    G = z.data,
                    D = z.isError,
                    F = z.error,
                    X = (z.isFetching, (0, pe.dt)()),
                    _ = (0, l.Z)(X, 2),
                    $ = _[0],
                    B = _[1],
                    V = (B.isLoading, B.isError, B.error, (0, pe.MQ)()),
                    W = (0, l.Z)(V, 2),
                    H = W[0],
                    Q = W[1],
                    K = (Q.isLoading, Q.isError, Q.error, (0, pe.M7)()),
                    ee = (0, l.Z)(K, 2),
                    te = ee[0],
                    ne = ee[1],
                    le = (ne.isLoading, ne.isError),
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
                    he = ve[0],
                    be = ve[1],
                    we = (be.isLoading, be.isError),
                    ye = be.error,
                    xe = (0, pe.XK)(),
                    ke = (0, l.Z)(xe, 2),
                    Ze = ke[0],
                    Ne = ke[1],
                    Ie = (Ne.isLoading, Ne.isError),
                    Ce = Ne.error;
                (0, S.s0)(), (0, de.pc)();
                C.useEffect((function() {
                    me && d(Nr.S.util.updateQueryData("getGroupById", {
                        groupId: m.id
                    }, (function(e) {
                        e.memberCount += 1
                    })))
                }), [me]);
                var Oe = function() {
                    w(!1), Z(null)
                };
                T({
                    groupMember: null == m ? void 0 : m.myMember,
                    permission: "group-members-manage"
                });
                return C.createElement("div", null, C.createElement(M.Z, {
                    isOpen: b && !!k,
                    toggle: Oe
                }, C.createElement(re.oI, null, C.createElement("h4", {
                    className: "text-center text-break"
                }, "Ban ", null == k ? void 0 : k.displayName, "?!?!")), C.createElement(re.Ao, null, C.createElement("div", null, C.createElement(re.X2, null, C.createElement(re.zx, {
                    danger: !0,
                    onClick: function() {
                        var e;
                        e = null == k ? void 0 : k.id, he({
                            groupId: m.id,
                            userId: e
                        }), Oe()
                    },
                    expand: !0
                }, C.createElement(re.$1, {
                    icon: i.JH
                }), " And stay out!"), " ", C.createElement(re.zx, {
                    neutral: !0,
                    onClick: Oe,
                    expand: !0
                }, "Cancel"))))), C.createElement(M.Z, {
                    isOpen: f
                }, C.createElement(Y.Z, {
                    close: C.createElement(oe.Z, {
                        onClick: function() {
                            E(!1)
                        }
                    })
                }, C.createElement("h4", {
                    className: "m-0"
                }, "Invite Somebody")), C.createElement(J.Z, null, C.createElement(kr, {
                    group: m,
                    mode: "invite"
                }))), C.createElement(re.zx, {
                    className: "mb-2",
                    color: "primary",
                    onClick: function() {
                        E(!0)
                    }
                }, "Invite Somebody"), C.createElement(Zr.Z, {
                    title: "Join Requests",
                    collapseOpen: !0
                }, we && C.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == ye || null === (t = ye.data) || void 0 === t ? void 0 : t.error.message) || "There was an error banning the user."), L && C.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == U || null === (n = U.data) || void 0 === n ? void 0 : n.error.message) || "There was an error loading the join requests."), le && C.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == ae || null === (r = ae.data) || void 0 === r ? void 0 : r.error.message) || "There was an error rejecting the join request."), ge && C.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == fe || null === (a = fe.data) || void 0 === a ? void 0 : a.error.message) || "There was an error accepting the join request."), C.createElement(re.oI, null, C.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Applicants")), C.createElement(re.Ao, {
                    className: "mb-2"
                }, q ? C.createElement(re.UU, {
                    width: "100%",
                    height: "75px"
                }) : C.createElement(Cr, null, 0 === (null == R ? void 0 : R.length) ? C.createElement("p", {
                    className: "m-0"
                }, "Nobody is waiting to join!") : null, null == R ? void 0 : R.map((function(e) {
                    return C.createElement("div", {
                        className: "mb-2"
                    }, C.createElement(fr, {
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
                            $({
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
                }))))), C.createElement(Zr.Z, {
                    title: "Sent Invites"
                }, j && C.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == U || null === (o = U.data) || void 0 === o ? void 0 : o.error.message) || "There was an error loading the invites."), Ie && C.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == Ce || null === (c = Ce.data) || void 0 === c ? void 0 : c.error.message) || "There was an error deleting the invite."), C.createElement(re.oI, null, C.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Invites")), C.createElement(re.Ao, {
                    className: "mb-2"
                }, A ? C.createElement(re.UU, {
                    width: "100%",
                    height: "75px"
                }) : C.createElement(Cr, null, 0 === (null == I ? void 0 : I.length) ? C.createElement("p", {
                    className: "m-0"
                }, "Nobody has been invited to this group!") : null, null == I ? void 0 : I.map((function(e) {
                    return C.createElement("div", {
                        className: "mb-2"
                    }, C.createElement(fr, {
                        member: e,
                        onDelete: function() {
                            var t;
                            t = e.userId, Ze({
                                groupId: m.id,
                                userId: t
                            })
                        },
                        navigate: "/home/user/".concat(e.userId),
                        showView: !1
                    }))
                }))))), C.createElement(Zr.Z, {
                    title: "Blocked Requests"
                }, D && C.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == F || null === (s = F.data) || void 0 === s ? void 0 : s.error.message) || "There was an error loading the invites."), Ie && C.createElement(re.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == Ce || null === (u = Ce.data) || void 0 === u ? void 0 : u.error.message) || "There was an error deleting the invite."), C.createElement(re.oI, null, C.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Blocked Applicants")), C.createElement(re.Ao, {
                    className: "mb-2"
                }, A ? C.createElement(re.UU, {
                    width: "100%",
                    height: "75px"
                }) : C.createElement(Cr, null, 0 === (null == G ? void 0 : G.length) ? C.createElement("p", {
                    className: "m-0"
                }, "Nobody has been blocked from joining the group!") : null, null == G ? void 0 : G.map((function(e) {
                    return C.createElement("div", {
                        className: "mb-2"
                    }, C.createElement(fr, {
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
            var Cr = (0, a.Z)("div", {
                    target: "e1hocgvc0"
                })({
                    name: "1fx10vo",
                    styles: "display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:space-around"
                }),
                Or = n(87462),
                Sr = n(66736),
                jr = n(73647),
                Mr = n(68791),
                Ar = n(40067),
                Pr = n(7701),
                Tr = n(50352),
                Rr = n(77708);
            const Lr = function(e) {
                var t, n, r, a, o, i = e.group,
                    c = (0, O.I0)(),
                    s = (0, de.pc)(),
                    u = (0, O.v9)((function(e) {
                        return e.listingRow.modals.subscriptionCancellation
                    })),
                    m = (0, O.v9)((function(e) {
                        return e.listingRow.modals.rules
                    })),
                    d = (0, O.v9)((function(e) {
                        return e.listingRow.modals.purchaseConfirmation
                    })),
                    p = (0, O.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    g = (0, te.XC)(),
                    f = g.data,
                    E = g.isLoading,
                    v = (0, Sr.mb)({
                        storeId: null == i ? void 0 : i.storeId,
                        hydrateListings: !0
                    }, {
                        skip: !(null != i && i.storeId),
                        refetchOnMountOrArgChange: !0
                    }),
                    h = v.data,
                    b = v.isFetching,
                    w = v.isError,
                    y = v.error,
                    x = (0, Sr.CE)({
                        receiverId: f.id,
                        sellerId: i.ownerId,
                        active: !0,
                        mostRecent: !0
                    }, {
                        skip: !f || !(null != h && null !== (t = h.listings) && void 0 !== t && t.length),
                        refetchOnMountOrArgChange: !0
                    }),
                    k = x.data,
                    Z = void 0 === k ? [] : k,
                    N = x.isLoading,
                    I = x.isError,
                    S = x.error,
                    j = C.useMemo((function() {
                        var e;
                        return null == h || null === (e = h.listings) || void 0 === e ? void 0 : e.map((function(e) {
                            return {
                                listing: e,
                                purchase: Z.find((function(t) {
                                    return t.listingId === e.id
                                }))
                            }
                        }))
                    }), [Z, h]),
                    M = (0, Sr.M3)(),
                    A = M.data,
                    P = void 0 === A ? {
                        economyOnline: !1,
                        plannedOfflineWindowStart: null,
                        plannedOfflineWindowEnd: null,
                        offlineReason: null,
                        economyState: null,
                        shadowBreaker: null,
                        ledgerMode: null
                    } : A,
                    T = P.economyOnline,
                    R = P.plannedOfflineWindowStart,
                    L = P.plannedOfflineWindowEnd,
                    U = P.offlineReason,
                    q = P.economyState,
                    z = (P.shadowBreaker, P.ledgerMode, M.isFetching),
                    G = M.isError,
                    D = M.error,
                    F = (0, Sr.Fi)({
                        userId: f.id
                    }, {
                        skip: !f,
                        refetchOnMountOrArgChange: !0
                    }),
                    X = F.data,
                    _ = (void 0 === X ? {
                        balance: 0
                    } : X).balance,
                    $ = F.isLoading,
                    J = F.isError,
                    B = C.useCallback((function(e) {
                        var t = e.currentUserId,
                            n = e.listingId,
                            r = e.listing,
                            l = e.purchase;
                        c((0, jr.zy)({
                            currentUserId: t,
                            listingId: n,
                            listing: r,
                            purchase: l
                        }))
                    })),
                    V = C.useCallback((function(e, t) {
                        var n = t.listing,
                            r = t.purchase,
                            l = t.totalPrice,
                            a = t.includesGroupAccess,
                            o = t.includesGroupAccessRemove,
                            s = t.enteredPurchaseQuantity,
                            u = t.selectedPurchaseQuantity,
                            m = t.quantity;
                        c(e ? (0, jr.DF)({
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
                        }) : (0, jr.Li)({
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
                    W = C.useState(!1),
                    Y = (0, l.Z)(W, 2),
                    H = Y[0],
                    Q = Y[1];
                if (E || N || b || z || $) return C.createElement(re.UU, {
                    width: "100%",
                    height: "200px"
                });
                var K = function(e) {
                        return null == Z ? void 0 : Z.some((function(t) {
                            return t.listingId === e
                        }))
                    },
                    ee = H ? null == j ? void 0 : j.filter((function(e) {
                        return K(e.listing.id)
                    })) : null == j ? void 0 : j.filter((function(e) {
                        return !K(e.listing.id)
                    })),
                    ne = (0, xe.dj)(R);
                return C.createElement(C.Fragment, null, C.createElement(re.oI, {
                    className: "flex-row justify-content-center align-items-center"
                }, C.createElement("h4", {
                    className: "text-center flex-grow-1"
                }, "Store")), C.createElement(re.Ao, null, G && C.createElement(re.qX, {
                    type: "error",
                    title: "Something strange happened"
                }, C.createElement("p", {
                    className: "m-0"
                }, "Error getting Tilia online status: ", D.status, " ", null !== (n = null === (r = D.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : "Unknown error")), !T && !G && C.createElement(re.qX, {
                    type: "warn",
                    title: "Store Maintenance"
                }, C.createElement(C.Fragment, null, C.createElement("p", {
                    className: "m-0"
                }, "Store Currently Offline: ", null != U ? U : "Unknown Reason"), C.createElement("p", {
                    className: "m-0"
                }, "Projected Service Return: ", (0, xe.M4)(L)))), I && C.createElement(re.qX, {
                    type: "error",
                    title: "Error loading purchases"
                }, null == S || null === (a = S.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message), w && C.createElement(re.qX, {
                    type: "error",
                    title: "Error loading listings"
                }, null == y || null === (o = y.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message), ne && T && C.createElement(re.qX, {
                    type: "warn",
                    title: "Store Maintenance"
                }, C.createElement("p", {
                    className: "m-0"
                }, "Starts: ", (0, xe.M4)(R)), C.createElement("p", {
                    className: "m-0"
                }, "Ends: ", (0, xe.M4)(L))), C.createElement(ce.Z, {
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
                    return C.createElement(Mr.Z, (0, Or.Z)({
                        key: e.listing.id
                    }, e, {
                        group: i,
                        tokenBalance: !J && _,
                        index: t,
                        economyOnline: T,
                        economyState: q,
                        isMod: s,
                        onCancel: B,
                        onPurchase: V
                    }))
                })) : C.createElement("p", null, H ? "You have no current subscriptions to this group!" : "There are no subscription options here!"), u.isOpen && C.createElement(Ar.Z, null), m.isOpen && C.createElement(Rr.Z, null), d.isOpen && C.createElement(Pr.Z, {
                    groupData: i
                }), p.isOpen && C.createElement(Tr.Z, null)))
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
                    g = (0, C.useState)(!1),
                    f = (0, l.Z)(g, 2),
                    E = f[0],
                    v = f[1],
                    h = n.createdAt,
                    b = n.imageUrl,
                    w = void 0 === b ? null : b,
                    y = n.title,
                    x = n.text,
                    k = void 0 === x ? "" : x,
                    Z = n.roleIds,
                    N = void 0 === Z ? [] : Z,
                    I = n.visibility,
                    O = null !== w && "" !== w,
                    S = a.roleIds,
                    j = (null === (t = k.match(/[^\n]*\n[^\n]*/gi)) || void 0 === t ? void 0 : t.length) || 0,
                    M = (0, C.useMemo)((function() {
                        if (!E && j > 3) {
                            var e = [];
                            return (0, U.Z)(k).forEach((function(t, n) {
                                "\n" !== t && "\r" !== t || e.push(n)
                            })), "".concat(k.substring(0, e[3]), "... ")
                        }
                        return !E && k.length > 400 ? "".concat(k.substring(0, 400), "... ") : k
                    }), [E, k]),
                    A = (0, C.useMemo)((function() {
                        return !E && (k.length > 400 || j > 3)
                    }), [E, k]);
                return C.createElement("div", {
                    className: "d-flex align-items-center"
                }, C.createElement(Xr, {
                    isExpanded: E,
                    ref: i,
                    className: "container-fluid p-0"
                }, C.createElement("div", {
                    className: "row"
                }, C.createElement("div", {
                    className: "col-12 d-flex align-items-center d-sm-none"
                }, C.createElement(Hr, {
                    src: w
                })), C.createElement("div", {
                    className: "".concat(O ? " col-sm-6 col-md-6 col-lg-7 col-xl-7 col-12" : "col-12")
                }, C.createElement(_r, null, C.createElement(Jr, null, y), function() {
                    if (0 === N.length) return C.createElement(Br, null, C.createElement("div", null, C.createElement(re.$1, {
                        icon: zr.SZ
                    }), " ", (0, xe.h4)(h), C.createElement(re.$1, {
                        className: "ms-2",
                        icon: Gr.iO
                    }), " ", "public" === I ? "Public" : "Group"));
                    var e = (0, U.Z)(N).sort((function(e, t) {
                        return S.includes(t) ? 1 : -1
                    }));
                    return C.createElement(Br, null, C.createElement("div", null, C.createElement(re.$1, {
                        icon: zr.SZ
                    }), " ", (0, xe.h4)(h)), C.createElement(Wr, null, C.createElement(re.$1, {
                        icon: qr.Aq
                    }), " Only Seen By", " ", e.map((function(e) {
                        var t = p.find((function(t) {
                                return t.id === e
                            })),
                            n = !(null == t || !t.productId);
                        return t ? C.createElement(Vr, {
                            id: t.id,
                            hasRole: S.includes(t.id)
                        }, n ? C.createElement(C.Fragment, null, C.createElement(re.$1, {
                            icon: Ur.n7,
                            className: "me-1"
                        }), t.name) : t.name) : null
                    }))))
                }(), C.createElement($r, {
                    hasImage: O,
                    isExpanded: E
                }, M, C.createElement(Yr, {
                    showReadMore: A,
                    onClick: function() {
                        return v(!0)
                    }
                }, "Read More")))), O && C.createElement("div", {
                    className: "col-12 col-sm-6 col-md-6 col-lg-5 col-xl-5 d-none d-sm-flex align-items-center"
                }, C.createElement(Hr, {
                    src: w
                })))), s && C.createElement("div", {
                    className: "ps-5 pe-4"
                }, C.createElement(Fr, {
                    color: "danger",
                    onClick: function() {
                        return m(n)
                    }
                }, C.createElement(re.$1, {
                    icon: q.$
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
                $r = (0, a.Z)("p", {
                    target: "ewr2sfy6"
                })({
                    name: "n4pob0",
                    styles: "font-size:18px;flex-grow:1;word-wrap:break-word;white-space:pre-wrap;display:inline-block;overflow:auto;margin-bottom:0;min-height:auto;font-size:16px;margin-top:14px;width:100%"
                }),
                Jr = (0, a.Z)("h4", {
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
                Yr = (0, a.Z)("span", {
                    target: "ewr2sfy1"
                })("color:#fff;cursor:pointer;display:", (function(e) {
                    return e.showReadMore ? "inline-block" : "none"
                }), ";"),
                Hr = (0, a.Z)("img", {
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
                return C.createElement(el, null, C.createElement("h6", null, "Management Roles"), C.createElement("div", {
                    className: "d-flex flex-wrap"
                }, a.map((function(e) {
                    return C.createElement(re.vc, {
                        id: e.id,
                        label: i(e) ? C.createElement(C.Fragment, null, C.createElement(re.$1, {
                            icon: Ur.n7,
                            className: "me-1"
                        }), e.name) : e.name,
                        value: e.id,
                        checked: l.includes(e.id),
                        onChange: function(e) {
                            return n(e)
                        }
                    })
                }))), C.createElement("h6", {
                    className: "mt-2"
                }, "Member Roles"), C.createElement("div", {
                    className: "d-flex flex-wrap"
                }, o.map((function(e) {
                    return C.createElement(re.vc, {
                        id: e.id,
                        label: i(e) ? C.createElement(C.Fragment, null, C.createElement(re.$1, {
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
            var tl = C.lazy((function() {
                    return Promise.all([n.e(123), n.e(786), n.e(4444), n.e(9908), n.e(229), n.e(3294), n.e(527), n.e(4814)]).then(n.bind(n, 40527))
                })),
                nl = (0, a.Z)(re.gx, {
                    target: "e37d6q30"
                })({
                    name: "tz9wht",
                    styles: ">textarea{min-height:250px;}"
                });
            const rl = function(e) {
                var t = e.group,
                    n = (0, O.I0)(),
                    a = C.useState(""),
                    o = (0, l.Z)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = C.useState(""),
                    u = (0, l.Z)(s, 2),
                    m = u[0],
                    d = u[1],
                    p = C.useState("group"),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = C.useState([]),
                    h = (0, l.Z)(v, 2),
                    b = h[0],
                    w = h[1],
                    y = C.useState(null),
                    x = (0, l.Z)(y, 2),
                    k = x[0],
                    Z = x[1],
                    S = C.useState(!0),
                    j = (0, l.Z)(S, 2),
                    A = j[0],
                    P = j[1],
                    T = C.useState(!1),
                    R = (0, l.Z)(T, 2),
                    L = R[0],
                    q = R[1],
                    z = C.useState(""),
                    G = (0, l.Z)(z, 2),
                    D = G[0],
                    F = G[1],
                    X = (0, te.q7)().data,
                    _ = void 0 === X ? [] : X,
                    $ = (0, pe.t$)(),
                    Y = (0, l.Z)($, 2),
                    H = Y[0],
                    Q = Y[1].isLoading,
                    ee = (0, Nt.P2)();
                (0, C.useEffect)((function() {
                    "selectedRoles" !== f && w([])
                }), [f]);
                var ne = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, H({
                                            groupId: t.id,
                                            title: m,
                                            text: i,
                                            imageId: k,
                                            sendNotification: A,
                                            roleIds: b,
                                            visibility: "public" === f ? "public" : "group"
                                        }).unwrap();
                                    case 3:
                                        c(""), d(""), Z(null), P(!0), F(""), w([]), E("group"), e.next = 11;
                                        break;
                                    case 6:
                                        if (e.prev = 6, e.t0 = e.catch(0), console.error("Failed to create post:", e.t0), !ee({
                                                error: e.t0
                                            })) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 6]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    le = "" === i.trim() || "" === m.trim(),
                    oe = _.includes("permission-user-gallery"),
                    ie = [{
                        label: C.createElement(re.X2, {
                            className: "d-flex flex-column"
                        }, C.createElement(V.Z, {
                            className: "mb-0"
                        }, "Public"), C.createElement("small", null, "Non-Group members can view this post")),
                        selectedLabel: "Public",
                        value: "public"
                    }, {
                        label: C.createElement(re.X2, {
                            className: "d-flex flex-column"
                        }, C.createElement(V.Z, {
                            className: "mb-0"
                        }, "All Group Members"), C.createElement("small", null, "All group members can view this post")),
                        selectedLabel: "Group",
                        value: "group"
                    }, {
                        label: C.createElement(re.X2, {
                            className: "d-flex flex-column"
                        }, C.createElement(V.Z, {
                            className: "mb-0"
                        }, "Selected Roles"), C.createElement("small", null, "Select the group roles who can view this post")),
                        selectedLabel: "Selected Roles",
                        value: "selectedRoles"
                    }];
                return C.createElement(re.JX, {
                    className: "w-100"
                }, C.createElement(M.Z, {
                    isOpen: L,
                    className: (0, I.iv)({
                        name: "1ul0gzp",
                        styles: "max-width:1500px!important"
                    })
                }, C.createElement(J.Z, null, C.createElement(tl, {
                    isSelector: !0,
                    activeTab: "photos",
                    selectedCallback: function(e, t) {
                        Z(e), F(t), q(!1)
                    },
                    selectedId: null != k ? k : null
                })), C.createElement(B.Z, null, C.createElement(re.zx, {
                    onClick: function() {
                        q(!1), n((0, K.b9)())
                    }
                }, "Cancel"))), C.createElement("div", {
                    className: "mb-3"
                }, C.createElement(V.Z, null, "Post title"), C.createElement(re.II, {
                    type: "text",
                    value: m,
                    onChange: function(e) {
                        return d(e.target.value)
                    },
                    maxLength: 128
                })), C.createElement("div", {
                    className: "mb-3"
                }, C.createElement(V.Z, null, "Post message"), C.createElement(nl, {
                    name: "post",
                    value: i,
                    onChange: function(e) {
                        return c(e.target.value)
                    },
                    maxLength: 2048,
                    required: !0,
                    className: "w-100"
                })), C.createElement("div", {
                    className: "mb-3"
                }, C.createElement(ae.Z, {
                    label: "Send notification",
                    value: "sendNotification",
                    defaultChecked: A,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        P(t)
                    }
                }), C.createElement(W.Z, null, "If on, a notification of this post will be sent to all members of the group!")), C.createElement("div", {
                    className: "mb-3"
                }, C.createElement(V.Z, null, "Who can see this post"), C.createElement(re.Lt, {
                    options: ie,
                    className: "flex-grow-1",
                    value: f,
                    onChange: function(e) {
                        return E(e)
                    },
                    trimToLength: !0
                })), "selectedRoles" === f && C.createElement("div", {
                    className: "mb-3"
                }, C.createElement(Kr, {
                    group: t,
                    onChange: function(e) {
                        var t, n;
                        return null != e && null !== (t = e.target) && void 0 !== t && t.checked ? w([].concat((0, U.Z)(b), [null == e || null === (n = e.target) || void 0 === n ? void 0 : n.value])) : w(b.filter((function(t) {
                            var n;
                            return t !== (null == e || null === (n = e.target) || void 0 === n ? void 0 : n.value)
                        })))
                    },
                    selectedRoles: b
                })), C.createElement(re.X2, {
                    className: "w-100"
                }, oe && C.createElement(C.Fragment, null, C.createElement(re.zx, {
                    neutral: !0,
                    expand: !0,
                    disabled: Q,
                    loading: Q,
                    onClick: function() {
                        q(!0)
                    }
                }, "Select an Image"), " "), C.createElement(re.zx, {
                    disabled: le || Q,
                    loading: Q,
                    expand: !0,
                    onClick: ne
                }, "Create Post")), " ", C.createElement(Dr, {
                    postData: {
                        text: i,
                        title: m,
                        imageUrl: D,
                        roleIds: b
                    },
                    groupRoles: t.roles
                }))
            };
            var ll = n(82728);
            const al = function(e) {
                var t = e.groupId,
                    n = e.isRepresenting,
                    a = (0, C.useState)(null),
                    o = (0, l.Z)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = (0, O.I0)(),
                    u = (0, pe.VW)(),
                    m = (0, l.Z)(u, 2),
                    d = m[0],
                    p = m[1],
                    g = p.isLoading,
                    f = p.error,
                    E = null != i ? i : n,
                    v = function() {
                        var e = (0, r.Z)(N().mark((function e(t) {
                            var n, r;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return c(n = !E), e.prev = 2, e.next = 5, d({
                                            groupId: t,
                                            isRepresenting: n
                                        }).unwrap();
                                    case 5:
                                        s((0, ee.d)({
                                            title: "Group representation updated!",
                                            icon: k.f8,
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 12;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(2), c(!n), s((0, ee.d)({
                                            title: "Error Updating Represented Group",
                                            icon: x.eH,
                                            message: "".concat((null == f || null === (r = f.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || "An error occurred while updating your represented group."),
                                            color: "error",
                                            timeout: 3e3
                                        }));
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 8]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return C.createElement(re.zx, {
                    disabled: g,
                    onClick: function() {
                        return v(t)
                    },
                    neutral: !0,
                    type: "button",
                    className: "tw-gap-2 tw-w-fit tw-flex tw-items-center tw-px-[10px] tw-py-2 tw-align-middle"
                }, C.createElement(re.$1, {
                    icon: E ? ll.vrcRepresenting : ll.vrcNotRepresenting,
                    className: "tw-h-4 tw-w-4"
                }), C.createElement("p", {
                    className: "tw-m-0"
                }, E ? "Unrepresent Group" : "Represent Group"))
            };
            var ol = n(78158);
            const il = function(e) {
                var t = e.group,
                    n = e.showBlockModal,
                    r = e.onClose,
                    a = (0, pe.WG)(),
                    o = (0, l.Z)(a, 2),
                    c = o[0],
                    s = o[1].isSuccess;
                return C.useEffect((function() {
                    s && r()
                }), [s]), C.createElement(M.Z, {
                    className: "text-center text-break",
                    isOpen: n,
                    toggle: function() {
                        r()
                    }
                }, C.createElement(re.oI, null, C.createElement("h4", null, "Block ", null == t ? void 0 : t.name, "?")), C.createElement(re.Ao, null, C.createElement("p", null, "Are you sure you want to block ", null == t ? void 0 : t.name, "?", C.createElement("br", null), " You will no longer be able to:", C.createElement("br", null), C.createElement("br", null), "• Join this group.", C.createElement("br", null), "• Get invites from this group. 💔"), C.createElement(re.X2, null, C.createElement(re.zx, {
                    danger: !0,
                    expand: !0,
                    onClick: function() {
                        c({
                            groupId: null == t ? void 0 : t.id
                        })
                    }
                }, C.createElement(re.$1, {
                    icon: i.JH
                }), "   Block"), " ", C.createElement(re.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: r
                }, "Cancel"))))
            };
            const cl = function() {
                return C.createElement(C.Fragment, null, C.createElement(re.oI, {
                    className: "text-center"
                }, C.createElement("h2", null, "You've Blocked this Group!")), C.createElement(re.Ao, {
                    className: "text-center"
                }, "You won't get any invites from this group, and you can't join it.", C.createElement("br", null), C.createElement("br", null), "If you want to join this group or get invites from it, you have to unblock it first."))
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
                return C.createElement(dl, null, o ? C.createElement(re.UU, {
                    width: "100%",
                    height: "30px",
                    className: "mt-4"
                }) : C.createElement(re.X2, {
                    className: "tw-justify-between"
                }, C.createElement(re.JX, {
                    className: "gap-1"
                }, C.createElement(re.X2, null, C.createElement(re.$1, {
                    className: "tw-mt-[8px]",
                    icon: f.qm,
                    width: 20
                }), i ? C.createElement("span", {
                    className: "tw-mt-[6px]"
                }, C.createElement(j.rU, {
                    to: "/home/user/".concat(r.id)
                }, r.displayName), " has initiated a transfer of ownership to you") : C.createElement("span", {
                    className: "tw-mt-[6px]"
                }, c ? "You have initiated an ownership transfer to " : "Ownership transfer has been initiated to ", C.createElement(j.rU, {
                    to: "/home/user/".concat(r.id)
                }, r.displayName)))), C.createElement(re.JX, {
                    className: "gap-1"
                }, C.createElement(re.X2, {
                    className: "tw-gap-[12px]"
                }, i && C.createElement(re.zx, {
                    success: !0,
                    onClick: function() {
                        return l()
                    }
                }, C.createElement(re.$1, {
                    icon: y.LE
                }), "  Accept"), C.createElement(re.zx, {
                    danger: !0,
                    onClick: function() {
                        return a()
                    }
                }, C.createElement(re.$1, {
                    icon: sl.EO
                }), " ", i ? "Decline" : "Cancel")))))
            };
            ul.propTypes = {
                group: fe().object.isRequired,
                currentUser: fe().object.isRequired,
                targetUser: fe().object.isRequired,
                onCancel: fe().func.isRequired,
                inAccept: fe().func,
                isLoading: fe().bool
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
                    a = (0, C.useState)(1),
                    o = (0, l.Z)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = (0, C.useState)(!1),
                    u = (0, l.Z)(s, 2),
                    m = u[0],
                    d = u[1],
                    p = (0, C.useState)(!1),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = (0, C.useState)(!1),
                    h = (0, l.Z)(v, 2),
                    b = h[0],
                    w = h[1],
                    y = n.id,
                    x = n.roles,
                    k = n.myMember,
                    Z = 10,
                    N = Math.ceil((i + 1) / Z),
                    I = (0, pe.Aw)(),
                    O = (0, l.Z)(I, 2),
                    S = O[0],
                    j = O[1],
                    M = j.isLoading,
                    A = j.isSuccess,
                    P = (0, pl.Y)({
                        rootMargin: "50px 0px",
                        onEnter: function(e) {
                            (0, e.unobserve)(), c(i + 1)
                        }
                    }),
                    T = P.observe,
                    R = (0, pl.Y)({
                        rootMargin: "0px 0px",
                        onEnter: function(e) {
                            var t = e.scrollDirection,
                                n = e.unobserve;
                            "down" === t.vertical && (n(), c(i - 1))
                        }
                    }).observe,
                    L = (0, pe._n)({
                        pageValue: i - 1,
                        n: Z,
                        groupId: y,
                        publicOnly: !k
                    }, {
                        skip: 1 === i,
                        refetchOnMountOrArgChange: !0
                    }),
                    q = (0, pe._n)({
                        pageValue: i,
                        n: Z,
                        groupId: y,
                        publicOnly: !k
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    z = (0, pe._n)({
                        pageValue: i + 1,
                        n: Z,
                        groupId: y,
                        publicOnly: !k
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    G = (0, C.useMemo)((function() {
                        var e = new Array(Z * (N + 1)).fill(null);
                        return (0, U.Z)(new Set([L.data, q.data, z.data])).map((function(t) {
                            return null != t && t.posts ? e.splice.apply(e, [t.offset, t.posts.length].concat((0, U.Z)(t.posts))) : []
                        })), e.filter((function(e) {
                            return null !== e
                        }))
                    }), [Z, L.data, q.data, z.data]);
                (0, C.useEffect)((function() {
                    d(G.some((function(e) {
                        return null !== e
                    })))
                }), [G]), (0, C.useEffect)((function() {
                    A && E(!1)
                }), [A]);
                var D = function(e) {
                        w(e), E(!0)
                    },
                    F = (0, C.useMemo)((function() {
                        return m ? G.map((function(e, t) {
                            return null !== e ? C.createElement("div", {
                                key: e.id
                            }, C.createElement(Dr, {
                                myMember: k,
                                postData: e,
                                observe: t === G.length - 1 ? T : 0 === t && 1 !== i ? R : null,
                                isEditMode: r,
                                deleteCallback: D,
                                groupRoles: x
                            })) : null
                        })) : null
                    }), [G, m]);
                return m ? C.createElement("div", {
                    className: "py-4"
                }, C.createElement(gl.Z, {
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
                    isLoading: M
                }), C.createElement(hl, null, C.createElement(wl, null, C.createElement(bl, null, "Posts")), C.createElement(yl, null, C.createElement(vl, null, C.createElement("div", {
                    className: "col"
                }, F))))) : null
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
                wl = (0, a.Z)(me.JX, {
                    target: "emafa4s1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                yl = (0, a.Z)(wl, {
                    target: "emafa4s0"
                })({
                    name: "18clcmv",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto"
                });
            const xl = function(e) {
                var t, n, r, a = e.group,
                    o = (void 0 === a ? null : a).id,
                    i = (0, S.s0)(),
                    c = C.useState(0),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = C.useState(!1),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = (0, pe.V3)({
                        groupId: o,
                        perPage: 51,
                        offset: u
                    }),
                    v = E.data,
                    h = E.isLoading,
                    b = E.isError,
                    w = (null == v ? void 0 : v.length) > 50,
                    y = (0, pe.Rx)(),
                    x = (0, l.Z)(y, 2),
                    k = x[0],
                    Z = x[1],
                    N = Z.error,
                    I = Z.isSuccess,
                    O = Z.isError,
                    j = Z.isLoading,
                    M = null !== (t = null == v ? void 0 : v.filter((function(e) {
                        return !!e.user
                    }))) && void 0 !== t ? t : [],
                    A = h ? C.createElement(kl, {
                        height: "130px"
                    }) : C.createElement(C.Fragment, null, null != M && M.length ? C.createElement(Zl, null, null == M ? void 0 : M.slice(0, 50).map((function(e) {
                        return C.createElement(fr, {
                            key: e.id,
                            member: e,
                            onDelete: function() {
                                k({
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
                    }))) : C.createElement("p", {
                        className: "text-center"
                    }, "Nobody is banned from this group. Everyone's on their best behavior!"));
                return C.createElement(C.Fragment, null, C.createElement(kn, {
                    isOpen: g,
                    cancelCallback: function() {
                        return f(!1)
                    },
                    groupId: o,
                    isGroupMemberOnly: !1
                }), C.createElement(re.zx, {
                    className: "mb-2",
                    color: "primary",
                    onClick: function() {
                        f(!0)
                    }
                }, "Ban Somebody"), C.createElement(re.oI, null, C.createElement("h4", {
                    className: "text-center"
                }, "Banned Users")), C.createElement(re.Ao, null, b && C.createElement(re.qX, {
                    type: "error",
                    title: "Something went wrong"
                }, "We couldn't load the list of banned users. Please try again later!"), I && C.createElement(re.qX, {
                    slim: !0,
                    type: "success"
                }, "User unbanned. They can now be invited back in if you like."), O && C.createElement(re.qX, {
                    type: "error",
                    title: "Failed to unban user"
                }, null !== (n = null === (r = N.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : N.data.error), A, C.createElement(Nl, null, C.createElement(Il, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u - 50)
                    },
                    disabled: h || 0 === u
                }, C.createElement(re.$1, {
                    icon: ue.A3
                })), C.createElement(Cl, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u + 50)
                    },
                    disabled: h || !w
                }, C.createElement(re.$1, {
                    icon: se._t
                })))))
            };
            var kl = (0, a.Z)(re.UU, {
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
                Nl = (0, a.Z)("div", {
                    target: "eqx7h3n2"
                })({
                    name: "1vtota4",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-bottom:8px"
                }),
                Il = (0, a.Z)(re.zx, {
                    target: "eqx7h3n1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                Cl = (0, a.Z)(re.zx, {
                    target: "eqx7h3n0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                Ol = n(37024);
            const Sl = function(e) {
                var t = e.group,
                    n = e.event,
                    r = (e.isEvents, e.isAdmin),
                    l = void 0 !== r && r;
                return C.createElement(re.JX, {
                    className: "tw-mb-4"
                }, C.createElement(re.oI, null, C.createElement("h4", null, "Upcoming Event")), C.createElement(re.Ao, {
                    className: "tw-items-center"
                }, !n && C.createElement("p", {
                    className: "align-self-center tw-mb-5 tw-text-placeholder-text"
                }, "No upcoming or ongoing events"), n ? C.createElement(Ol.ZP, {
                    event: n,
                    className: "tw-mb-5"
                }) : null, n && C.createElement(j.rU, {
                    to: "/home/group/".concat(t.id, "/events"),
                    className: "tw-w-full"
                }, C.createElement(re.zx, {
                    neutral: !0
                }, "See All Events")), l && !n && C.createElement(j.rU, {
                    to: "/home/group/".concat(t.id, "/events"),
                    className: "tw-w-full"
                }, C.createElement(re.zx, {
                    primary: !0
                }, "Create Event"))))
            };
            var jl = n(88081),
                Ml = n(75727),
                Al = n(24752),
                Pl = n(29841),
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
                Rl = [{
                    key: 0,
                    label: "Newest First",
                    value: "NEWEST"
                }, {
                    key: 1,
                    label: "Oldest First",
                    value: "OLDEST"
                }];
            const Ll = function(e) {
                var t, n = e.onSearchUpdate,
                    r = void 0 === n ? function() {} : n,
                    a = e.onDisplayStateChange,
                    o = void 0 === a ? function() {} : a,
                    i = e.onOrderChange,
                    c = void 0 === i ? function() {} : i,
                    s = e.gridToggle,
                    u = e.hideSearch,
                    m = void 0 !== u && u,
                    d = C.useState(""),
                    p = (0, l.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    E = C.useState("UPCOMING"),
                    v = (0, l.Z)(E, 2),
                    h = v[0],
                    b = v[1],
                    w = C.useState("NEWEST"),
                    y = (0, l.Z)(w, 2),
                    x = y[0],
                    k = y[1],
                    Z = function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        f(n), r(n)
                    };
                return C.createElement(re.X2, {
                    className: (0, I.cx)("tw-@container tw-w-full tw-flex-wrap tw-gap-2 tw-z-20", m && "tw-justify-between")
                }, C.createElement(re.X2, {
                    className: (0, I.cx)("tw-gap-2 tw-flex-wrap", !m && "@sm:tw-flex-1 tw-w-full")
                }, C.createElement(re.Lt, {
                    label: "Display",
                    options: Tl,
                    value: h,
                    onChange: function(e) {
                        b(e), o(e)
                    }
                }), C.createElement(re.Lt, {
                    label: "Order",
                    options: Rl,
                    value: x,
                    onChange: function(e) {
                        k(e), c(e)
                    }
                })), C.createElement(re.X2, {
                    className: (0, I.cx)("tw-gap-2 tw-justify-end", !m && "@sm:tw-flex-1 tw-w-full", m && "tw-flex-none")
                }, !m && C.createElement(re.II, {
                    className: "tw-w-full @sm:tw-max-w-[360px]",
                    type: "text",
                    placeholder: "Search by event name or url",
                    value: g,
                    onChange: Z,
                    onKeyDown: (t = Z, function(e) {
                        "Enter" === e.key && (e.preventDefault(), t(e))
                    })
                }), s && C.createElement(re.zx, {
                    className: "tw-w-9 tw-h-10",
                    onClick: function() {
                        s()
                    }
                }, C.createElement(re.$1, {
                    icon: Pl.QR
                }))))
            };

            function Ul(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ql(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ul(Object(n), !0).forEach((function(t) {
                        (0, L.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ul(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var zl = (0, C.lazy)((function() {
                return Promise.resolve().then(n.bind(n, 41568))
            }));
            const Gl = function(e) {
                var t = e.group,
                    n = e.isCreate,
                    r = void 0 !== n && n,
                    a = (0, de.Tu)(),
                    o = a.user,
                    i = a.isFetching,
                    c = (0, de.pc)() && !1,
                    s = C.useState(!1),
                    u = (0, l.Z)(s, 2),
                    m = u[0],
                    d = u[1],
                    p = C.useState(r),
                    g = (0, l.Z)(p, 2),
                    f = g[0],
                    E = g[1],
                    v = C.useState(!1),
                    h = (0, l.Z)(v, 2),
                    b = h[0],
                    w = h[1],
                    y = C.useState(Al.P.CREATE),
                    x = (0, l.Z)(y, 2),
                    k = x[0],
                    Z = x[1],
                    N = C.useState(null),
                    O = (0, l.Z)(N, 2),
                    S = O[0],
                    j = O[1],
                    M = C.useState("NEWEST"),
                    A = (0, l.Z)(M, 2),
                    R = A[0],
                    L = A[1],
                    U = C.useState("UPCOMING"),
                    q = (0, l.Z)(U, 2),
                    z = q[0],
                    G = q[1],
                    D = T({
                        groupMember: null == t ? void 0 : t.myMember,
                        permission: "group-calendar-manage"
                    }),
                    F = P({
                        group: t,
                        groupMember: null == t ? void 0 : t.myMember
                    }),
                    X = D || F,
                    _ = C.useState(ve()()),
                    $ = (0, l.Z)(_, 2),
                    J = $[0],
                    B = $[1],
                    V = C.useMemo((function() {
                        switch (z) {
                            case "UPCOMING":
                                return {
                                    after: J.toISOString()
                                };
                            case "PAST":
                                return {
                                    before: J.toISOString()
                                };
                            case "ONGOING":
                                return {
                                    live: !0
                                };
                            default:
                                return {}
                        }
                    }), [z, J]),
                    W = C.useMemo((function() {
                        return "OLDEST" === R ? {
                            sort: "startTime_descending"
                        } : {
                            sort: "startTime_ascending"
                        }
                    }), [R]),
                    Y = (0, jl.Is)(ql(ql({
                        ownerId: t.id
                    }, V), W), {
                        skip: !t.id
                    }),
                    H = Y.data,
                    Q = Y.hasNextPage,
                    K = Y.fetchNextPage,
                    ee = Y.isLoading,
                    te = Y.isFetching,
                    ne = C.useMemo((function() {
                        return ((null == H ? void 0 : H.pages) || []).flatMap((function(e) {
                            return e.results
                        })).filter((function(e) {
                            return !e.deletedAt || c
                        }))
                    }), [H, c]),
                    le = function() {
                        E(!1), j(null), Z(Al.P.CREATE)
                    },
                    ae = function(e) {
                        j(e), E(!0), Z(Al.P.EDIT)
                    },
                    oe = function(e) {
                        j(e), E(!0), Z(Al.P.REVIVE)
                    },
                    ie = function(e) {
                        j(e), w(!0), Z(Al.P.DELETE)
                    },
                    ce = ee || i || !H || !o;
                return C.createElement(C.Fragment, null, C.createElement("div", {
                    className: "tw-py-4"
                }, X && C.createElement(re.zx, {
                    "aria-label": "Create Event",
                    className: "tw-mb-4",
                    onClick: function() {
                        E(!0)
                    }
                }, "+ Create Event"), C.createElement(Dl, null, C.createElement(Xl, null, C.createElement(Fl, null, "Events")), C.createElement(_l, {
                    className: "tw-flex-col tw-gap-5 tw-items-center tw-pt-5"
                }, C.createElement(Ll, {
                    hideSearch: !0,
                    gridToggle: function() {
                        d(!m)
                    },
                    onDisplayStateChange: function(e) {
                        e !== z && B(ve()()), G(e)
                    },
                    onOrderChange: function(e) {
                        L(e)
                    }
                }), ce && C.createElement(re.UU, null), !ce && (null != ne && ne.length ? C.createElement(re.JX, {
                    className: (0, I.cx)("tw-@container tw-w-full tw-flex-wrap tw-gap-4", m && "tw-flex-row")
                }, ne.map((function(e) {
                    return C.createElement(Ol.ZP, {
                        key: e.id,
                        event: e,
                        isGrid: m,
                        onEditCallback: ae,
                        onDeleteCallback: ie,
                        onReviveCallback: oe,
                        isGroupAdmin: X
                    })
                }))) : C.createElement("div", null, "No events found")), !(null == ne || !ne.length) && C.createElement(re.zx, {
                    onClick: K,
                    disabled: !Q || te
                }, te ? "Loading More…" : Q ? "Load More…" : "That's all of them!")))), C.createElement(re.u_, {
                    title: k.label,
                    isVisible: f,
                    onClose: le,
                    className: "tw-w-full",
                    slim: !0,
                    width: "100%"
                }, C.createElement(C.Suspense, {
                    fallback: C.createElement("div", null, "Loading...")
                }, C.createElement(zl, {
                    event: S || void 0,
                    isEditMode: "edit" === k.value,
                    isReviveMode: "revive" === k.value,
                    group: t,
                    isGroupAdmin: X,
                    closeModalCallback: le
                }))), S && "delete" === k.value && C.createElement(Ml.Z, {
                    event: S,
                    isOpen: b,
                    onCloseCallBack: function() {
                        w(!1), j(null), Z(Al.P.CREATE)
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
            const $l = function() {
                var e, t, n, a, Z = (0, C.useState)(!1),
                    P = (0, l.Z)(Z, 2),
                    L = P[0],
                    U = P[1],
                    q = (0, C.useState)(!1),
                    z = (0, l.Z)(q, 2),
                    G = z[0],
                    D = z[1],
                    F = (0, C.useState)(!1),
                    X = (0, l.Z)(F, 2),
                    _ = X[0],
                    $ = X[1],
                    J = (0, C.useState)(!1),
                    B = (0, l.Z)(J, 2),
                    V = B[0],
                    W = B[1],
                    Y = (0, C.useState)(!1),
                    H = (0, l.Z)(Y, 2),
                    K = H[0],
                    le = H[1],
                    ae = (0, C.useState)(!1),
                    oe = (0, l.Z)(ae, 2),
                    ie = oe[0],
                    se = oe[1],
                    ue = (0, C.useState)(!1),
                    me = (0, l.Z)(ue, 2),
                    ge = me[0],
                    fe = me[1],
                    Ee = (0, C.useState)(!1),
                    ve = (0, l.Z)(Ee, 2),
                    he = ve[0],
                    be = ve[1],
                    we = (0, C.useState)(!1),
                    ye = (0, l.Z)(we, 2),
                    xe = ye[0],
                    ke = ye[1],
                    Ze = (0, te.q7)().data,
                    Ne = void 0 === Ze ? [] : Ze,
                    Ie = (0, O.I0)(),
                    Ce = (0, Q.y)(),
                    Oe = Ce.data,
                    Se = Ce.isLoading,
                    je = 0,
                    Me = 0;
                Ce.isSuccess && (je = Oe.constants.GROUPS.MAX_JOINED, Me = Oe.constants.GROUPS.MAX_JOINED_PLUS), Ne.includes("permission-extra-group-count") && (je = Math.max(je, Me || 0));
                var Ae = (0, S.UO)().groupId,
                    Pe = (0, te.XC)().data,
                    Te = (0, pe.r5)({
                        groupId: Ae,
                        purpose: "group"
                    }),
                    Re = Te.data,
                    Le = Te.isSuccess,
                    Ue = Te.isLoading,
                    qe = Te.isError,
                    ze = Te.error,
                    Ge = (0, de.pc)(),
                    De = (0, pe.dj)({
                        userId: null == Pe ? void 0 : Pe.id
                    }),
                    Fe = De.data,
                    Xe = De.isLoading,
                    _e = (0, pe.xI)(),
                    $e = (0, l.Z)(_e, 2),
                    Je = $e[0],
                    Be = $e[1],
                    Ve = Be.isLoading,
                    Ye = Be.isError,
                    He = Be.error,
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
                    ft = (0, It.Ul)({
                        userId: null == Re ? void 0 : Re.ownerId,
                        groupId: null == Re ? void 0 : Re.id,
                        active: !0
                    }, {
                        skip: !Re
                    }),
                    Et = (ft.data, ft.isLoading),
                    vt = (0, jl.mW)({
                        ownerId: Ae
                    }, {
                        skip: !Ae
                    }),
                    ht = vt.data;
                vt.isLoading;
                (0, C.useEffect)((function() {
                    Re && !Ue && D(!0)
                }), [Re, Ue]), (0, C.useEffect)((function() {
                    pt && fe(!1)
                }), [pt]);
                var wt, yt, xt = (0, C.useMemo)((function() {
                        return !!G && (null !== Re.transferTargetId || void 0 !== Re.transferTargetId)
                    }), [G]),
                    kt = (null == Re ? void 0 : Re.transferTargetId) === (null == Pe ? void 0 : Pe.id) ? null == Re ? void 0 : Re.ownerId : null == Re ? void 0 : Re.transferTargetId,
                    Zt = (0, ne.GR)(kt, {
                        skip: null == Re || Ue || !xt || !kt,
                        refetchOnMountOrArgChange: !0
                    }),
                    Nt = Zt.data,
                    Ct = Zt.isFetching,
                    Ot = Zt.isError,
                    St = Zt.error,
                    jt = (0, pe.HT)(),
                    Mt = (0, l.Z)(jt, 2),
                    At = Mt[0],
                    Pt = Mt[1],
                    Tt = Pt.data,
                    Rt = (Pt.isFetching, Pt.isError),
                    Lt = Pt.error,
                    Ut = (0, pe.rq)(),
                    qt = (0, l.Z)(Ut, 2),
                    zt = qt[0],
                    Gt = qt[1],
                    Dt = Gt.data,
                    Ft = (Gt.isFetching, Gt.isError),
                    Xt = (Gt.error, (0, C.useMemo)((function() {
                        if (!Re || !Re.myMember) return !1;
                        var e = Re.myMember.isRepresenting;
                        return null != e && e
                    }), [Re])),
                    _t = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var t, n;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return be(!0), e.prev = 1, e.next = 4, At({
                                            groupId: Re.id,
                                            transferTargetId: Re.transferTargetId
                                        }).unwrap();
                                    case 4:
                                        Rt && Ie((0, ee.d)({
                                            title: "Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null == Lt || null === (t = Lt.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), be(!1)), !Rt && Tt && Ie((0, ee.d)({
                                            title: "Group Transfer Accepted",
                                            icon: k.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }), be(!1)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Ie((0, ee.d)({
                                            title: "Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), be(!1));
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
                    }(),
                    $t = function() {
                        var e = (0, r.Z)(N().mark((function e() {
                            var t, n;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return be(!0), e.prev = 1, e.next = 4, zt({
                                            groupId: Re.id,
                                            transferTargetId: null == Re ? void 0 : Re.transferTargetId
                                        }).unwrap();
                                    case 4:
                                        Ft && Ie((0, ee.d)({
                                            title: "Cancel Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null == Dt || null === (t = Dt.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), be(!1)), !Ft && Dt && Ie((0, ee.d)({
                                            title: "Cancel Group Transfer Success",
                                            icon: k.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }), be(!1)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Ie((0, ee.d)({
                                            title: "Cancel Group Transfer Error",
                                            icon: x.eH,
                                            message: "".concat(null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), be(!1));
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
                if (!Re || Ue || Et || at || tt || Ve || Xe || Se) return (ie || K) && (le(!1), se(!1)), xt && !Nt || Ct ? C.createElement(re.UU, {
                    width: "100%",
                    height: "200px",
                    className: "mt-4"
                }) : !Ot || qe || Ct ? qe ? C.createElement(C.Fragment, null, C.createElement(re.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: "Something went wrong with getting this group! (".concat(null == ze || null === (wt = ze.data) || void 0 === wt || null === (wt = wt.error) || void 0 === wt ? void 0 : wt.message, ")")
                }), C.createElement("div", {
                    className: "text-center"
                }, C.createElement(j.rU, {
                    to: "/home/groups"
                }, "Go Back! 😭"))) : C.createElement(C.Fragment, null, C.createElement(re.UU, {
                    width: "100%",
                    height: "200px",
                    className: "mt-4"
                }), C.createElement(re.UU, {
                    width: "100%",
                    height: "500px",
                    className: "mt-5"
                })) : C.createElement(re.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: "Something went wrong with getting target user! (".concat(null == St || null === (yt = St.data) || void 0 === yt || null === (yt = yt.error) || void 0 === yt ? void 0 : yt.message, ")")
                });
                var Jt, Bt = function() {
                        $(!1), Je({
                            groupId: Ae
                        })
                    },
                    Vt = function() {
                        W(!1), Re.rules ? $(!0) : Bt()
                    },
                    Wt = Le && Re.myMember && Re.myMember.roleIds.reduce((function(e, t) {
                        if (e) return e;
                        var n = Re.roles.find((function(e) {
                            return e.id === t
                        }));
                        return !(null == n || !n.requiresTwoFactor || !1 !== Re.myMember.has2FA) && n
                    }), !1),
                    Yt = Re.membershipStatus;
                if (Re.memberCount < bt.qH && (Fe.length < je || Pe.tagsSet.has("admin_uncap_owned_groups"))) {
                    if (Yt === bt.oq.REQUESTED) Jt = C.createElement(re.zx, {
                        danger: !0,
                        onClick: function() {
                            return et({
                                groupId: Ae
                            })
                        },
                        disabled: Ve,
                        loading: Ve
                    }, C.createElement(re.$1, {
                        icon: w.NB
                    }), "  Cancel Join Request");
                    else if (Yt === bt.oq.INVITED) Jt = C.createElement(re.zx, {
                        success: !0,
                        onClick: Bt
                    }, C.createElement(re.$1, {
                        icon: y.LE
                    }), "  Accept Invite");
                    else if (Yt === bt.oq.USER_BLOCKED) Jt = null;
                    else if (!Re.myMember) switch (Re.joinState) {
                        case bt.wN.OPEN:
                            Jt = C.createElement(re.zx, {
                                onClick: Vt,
                                disabled: Ve,
                                loading: Ve
                            }, C.createElement(re.$1, {
                                icon: o.r8
                            }), "  Join Group");
                            break;
                        case bt.wN.REQUEST:
                            Jt = C.createElement(re.zx, {
                                onClick: Vt
                            }, C.createElement(re.$1, {
                                icon: s.FU
                            }), " Request to Join");
                            break;
                        default:
                            Jt = C.createElement(re.zx, {
                                disabled: !0
                            }, "Closed to New Members")
                    }
                } else Fe.length >= je && !Pe.tagsSet.has("admin_uncap_owned_groups") ? Jt = C.createElement(re.zx, {
                    disabled: !0
                }, "You can't join more than ", je, " groups!") : Re.myMember || (Jt = C.createElement(re.zx, {
                    disabled: !0
                }, "Group is Full"));
                if (!Re.id) return null;
                var Ht = Yt === bt.oq.USER_BLOCKED;
                return C.createElement(C.Fragment, null, C.createElement(re.$4, null, null !== (e = null == Re ? void 0 : Re.name) && void 0 !== e ? e : "Group"), C.createElement(M.Z, {
                    isOpen: V,
                    toggle: function() {
                        W(!1)
                    }
                }, C.createElement(Bl, null, C.createElement("h4", {
                    className: "text-center"
                }, "Unblock this Group?")), C.createElement(Vl, null, C.createElement(re.JX, null, C.createElement("div", {
                    className: "p-3 text-center"
                }, "Are you sure you want to unblock ", C.createElement("strong", null, Re.name), "?"), C.createElement("div", {
                    className: "p-3"
                }, C.createElement(re.X2, null, C.createElement(re.zx, {
                    expand: !0,
                    onClick: function() {
                        W(!1), lt({
                            groupId: Ae,
                            userId: Pe.id
                        })
                    }
                }, C.createElement(re.$1, {
                    icon: y.LE
                }), "  Unblock Group"), " ", C.createElement(re.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        W(!1)
                    }
                }, C.createElement(re.$1, {
                    icon: w.NB
                }), "  Cancel")))))), C.createElement(M.Z, {
                    isOpen: _,
                    toggle: function() {
                        $(!1)
                    }
                }, C.createElement(Bl, null, C.createElement("h4", {
                    className: "text-center"
                }, "Rules")), C.createElement(Vl, null, C.createElement(re.JX, null, C.createElement("div", {
                    className: "p-3"
                }, C.createElement("p", null, "By joining this group, you agree to the following rules:"), C.createElement(Yl, null, Re.rules)), C.createElement("div", {
                    className: "p-3"
                }, C.createElement(re.X2, null, C.createElement(re.zx, {
                    expand: !0,
                    onClick: Bt,
                    disabled: Ve,
                    loading: Ve
                }, Re.joinState === bt.wN.OPEN ? C.createElement(C.Fragment, null, C.createElement(re.$1, {
                    icon: o.r8
                }), "  Join Group") : C.createElement(C.Fragment, null, C.createElement(re.$1, {
                    icon: s.FU
                }), "  Request to Join")), " ", C.createElement(re.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        $(!1)
                    }
                }, C.createElement(re.$1, {
                    icon: w.NB
                }), "  Cancel")))))), C.createElement(M.Z, {
                    isOpen: ge,
                    toggle: function() {
                        return fe(!1)
                    }
                }, C.createElement(Bl, null, C.createElement("h4", {
                    className: "text-center"
                }, "Decline Group Invite?")), C.createElement(Vl, null, C.createElement(re.JX, null, C.createElement("div", {
                    className: "p-3 text-center"
                }, "Are you sure you want to decline invite to ", C.createElement("strong", null, Re.name), "?"), C.createElement("div", {
                    className: "px-3 text-center d-flex justify-content-center"
                }, C.createElement(We.Z, {
                    id: "block-invites",
                    checked: xe,
                    onChange: function(e) {
                        return ke(e.target.checked)
                    },
                    label: "Block this group, preventing further invites",
                    htmlFor: "block-invites"
                })), C.createElement("div", {
                    className: "p-3"
                }, C.createElement(re.X2, null, C.createElement(re.zx, {
                    expand: !0,
                    danger: !0,
                    onClick: function() {
                        return ct({
                            groupId: Ae,
                            block: xe
                        })
                    },
                    loading: ut
                }, C.createElement(re.$1, {
                    icon: y.LE
                }), "  Decline Invite"), " ", C.createElement(re.zx, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        fe(!1)
                    }
                }, C.createElement(re.$1, {
                    icon: w.NB
                }), "  Cancel")))))), C.createElement(il, {
                    group: Re,
                    showBlockModal: ie,
                    onClose: function() {
                        se(!1)
                    }
                }), C.createElement("div", {
                    className: (0, I.iv)({
                        name: "g46w8s",
                        styles: "margin-bottom:30px"
                    })
                }, C.createElement(re.X2, {
                    className: "mb-4 justify-content-start tw-gap-2 tw-flex-wrap"
                }, "visible" === (null == Re || null === (t = Re.myMember) || void 0 === t ? void 0 : t.visibility) && C.createElement(al, {
                    groupId: Re.id,
                    isRepresenting: Xt
                }), (null == Re ? void 0 : Re.ownerId) !== Pe.id && C.createElement(C.Fragment, null, C.createElement(re.zx, {
                    neutral: !0,
                    onClick: function() {
                        le(!0)
                    }
                }, C.createElement(re.$1, {
                    icon: i.JH
                }), " Report"), C.createElement(jn.Z, {
                    cancelCallback: function() {
                        return le(!1)
                    },
                    isOpen: K,
                    type: "group",
                    contentId: null == Re ? void 0 : Re.id,
                    contentName: null == Re ? void 0 : Re.name,
                    hasStore: null == Re ? void 0 : Re.storeId
                }), "userblocked" !== (null == Re ? void 0 : Re.membershipStatus) && !(null != Re && Re.myMember) && C.createElement(C.Fragment, null, " ", C.createElement(re.zx, {
                    danger: !0,
                    onClick: function() {
                        se(!0)
                    }
                }, C.createElement(re.$1, {
                    icon: b.jA
                }), " Block")), "userblocked" === (null == Re ? void 0 : Re.membershipStatus) && C.createElement(C.Fragment, null, " ", C.createElement(re.zx, {
                    danger: !0,
                    onClick: function() {
                        W(!0)
                    }
                }, C.createElement(re.$1, {
                    icon: h.faBan
                }), " Unblock")))), C.createElement(ol.Z, {
                    group: Re
                }), Wt && C.createElement(re.X2, null, C.createElement(A.Z, {
                    color: "warning"
                }, "Your VRChat account does not have 2FA enabled. Your role '", Wt.name, "' in ", Re.name, " requires this. Until you enable 2FA, your ability to manage ", Re.name, " will be limited.")), Ge && gt && C.createElement(re.X2, null, C.createElement(Hl, null, " THIS GROUP HAS BEEN DELETED ")), Ye && C.createElement(re.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: (null == He || null === (n = He.data) || void 0 === n ? void 0 : n.error.message) || "An error occurred while trying to join ".concat(null == Re ? void 0 : Re.name, ".")
                }), mt && C.createElement(re.qX, {
                    type: "error",
                    title: "An error occurred",
                    message: (null == dt || null === (a = dt.data) || void 0 === a ? void 0 : a.error.message) || "An error occurred while trying to decline group invitation."
                }), C.createElement("div", {
                    className: "d-flex flex-row justify-content-center align-content-center mb-2"
                }, Jt, Yt === bt.oq.INVITED && C.createElement(re.zx, {
                    danger: !0,
                    onClick: function() {
                        return fe(!0)
                    },
                    className: "mx-2"
                }, C.createElement(re.$1, {
                    icon: v.YI
                }), "  Decline Invite")), Ht ? C.createElement(cl, null) : C.createElement(C.Fragment, null, xt && !Ct && kt && C.createElement(ml, {
                    group: Re,
                    currentUser: Pe,
                    targetUser: Nt,
                    onAccept: _t,
                    onCancel: $t,
                    isLoading: he
                }), C.createElement(ce.Z, {
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
                        condition: T({
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
                        condition: Ge || T({
                            groupMember: null == Re ? void 0 : Re.myMember,
                            permission: "group-invites-manage"
                        })
                    }, {
                        name: "Settings",
                        to: "settings",
                        icon: c.b7,
                        condition: Ge || (null == Re ? void 0 : Re.myMember) || T({
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
                        condition: Ge || T({
                            groupMember: null == Re ? void 0 : Re.myMember,
                            permission: "group-bans-manage"
                        })
                    }]
                }), C.createElement(S.Z5, null, C.createElement(S.AW, {
                    path: "/",
                    element: C.createElement(C.Fragment, null, Le && C.createElement(El, {
                        group: Re
                    }), Le && C.createElement(Sl, {
                        group: Re,
                        event: ht,
                        isAdmin: Ge || T({
                            groupMember: null == Re ? void 0 : Re.myMember,
                            permission: "group-members-manage"
                        })
                    }), C.createElement(Jl, null, C.createElement(re.JX, {
                        className: "m-1"
                    }, C.createElement(Mn, {
                        langs: Re.languages
                    })), C.createElement(re.JX, {
                        className: "m-1"
                    }, C.createElement(zn, {
                        links: Re.links
                    }))), C.createElement(Jl, null, C.createElement(re.JX, {
                        className: "m-1 mt-2 mw-100"
                    }, C.createElement(Bl, null, C.createElement("h4", null, "About This Group")), C.createElement(Wl, null, C.createElement("p", {
                        className: "w-100 text-break"
                    }, Re.description))), Re.rules && C.createElement(re.JX, {
                        className: "m-1 mt-2 mw-100"
                    }, C.createElement(Bl, null, C.createElement("h4", null, "Rules")), C.createElement(Wl, null, C.createElement("p", {
                        className: "w-100 text-break"
                    }, Re.rules)))))
                }), C.createElement(S.AW, {
                    path: "/posts",
                    element: (Ge || T({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-announcement-manage"
                    })) && Le ? C.createElement(C.Fragment, null, L ? C.createElement(re.X2, null, C.createElement(re.JX, {
                        className: "w-100"
                    }, C.createElement(re.oI, null, C.createElement("h4", {
                        className: "text-center"
                    }, "Create Post")), C.createElement(re.Ao, null, C.createElement(re.JX, {
                        className: "w-100"
                    }, C.createElement(rl, {
                        group: Re
                    }), C.createElement(re.zx, {
                        onClick: function() {
                            return U(!1)
                        }
                    }, "Cancel"))))) : C.createElement(re.zx, {
                        onClick: function() {
                            return U(!0)
                        }
                    }, C.createElement(re.$1, {
                        icon: o.r8
                    }), " Create Post"), C.createElement(El, {
                        isEditMode: !0,
                        group: Re
                    })) : C.createElement(R.Z, {
                        to: ".."
                    })
                }), C.createElement(S.AW, {
                    path: "/events",
                    element: C.createElement(Gl, {
                        group: Re
                    })
                }), C.createElement(S.AW, {
                    path: "/events/create",
                    element: C.createElement(Gl, {
                        group: Re,
                        isCreate: !0
                    })
                }), C.createElement(S.AW, {
                    path: "/galleries/*",
                    element: C.createElement(cr, {
                        group: Re
                    })
                }), C.createElement(S.AW, {
                    path: "/subscribe",
                    element: C.createElement(R.Z, {
                        to: "store"
                    })
                }), C.createElement(S.AW, {
                    path: "/store",
                    element: C.createElement(Lr, {
                        group: Re
                    })
                }), C.createElement(S.AW, {
                    path: "/instances",
                    element: C.createElement(gr, {
                        group: Re,
                        onJoinButtonClick: Vt
                    })
                }), C.createElement(S.AW, {
                    path: "/invites/*",
                    element: Ge || T({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-invites-manage"
                    }) ? C.createElement(Ir, {
                        group: Re
                    }) : C.createElement(R.Z, {
                        to: ".."
                    })
                }), C.createElement(S.AW, {
                    path: "/members",
                    element: Ge || null != Re && Re.myMember ? C.createElement(Cn, {
                        group: Re
                    }) : C.createElement(R.Z, {
                        to: ".."
                    })
                }), C.createElement(S.AW, {
                    path: "/settings/*",
                    element: Ge || null != Re && Re.myMember || T({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-data-manage"
                    }) || T({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-roles-manage"
                    }) ? C.createElement(Kt, {
                        group: Re
                    }) : C.createElement(R.Z, {
                        to: ".."
                    })
                }), C.createElement(S.AW, {
                    path: "/bans",
                    element: Ge || T({
                        groupMember: null == Re ? void 0 : Re.myMember,
                        permission: "group-members-manage"
                    }) ? C.createElement(xl, {
                        group: Re
                    }) : C.createElement(R.Z, {
                        to: ".."
                    })
                })))))
            };
            var Jl = (0, a.Z)(re.X2, {
                    target: "e7n20a25"
                })("flex-wrap:wrap;margin:-0.25rem;>", re.JX, "{min-width:300px;flex:1;}"),
                Bl = (0, a.Z)(re.JX, {
                    target: "e7n20a24"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                Vl = (0, a.Z)(Bl, {
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
                Yl = (0, a.Z)("p", {
                    target: "e7n20a21"
                })({
                    name: "votlfh",
                    styles: "overflow-y:auto;white-space:pre-line;max-height:400px;background:#252a30;padding:0.5rem;border-radius:8px"
                }),
                Hl = (0, a.Z)("h3", {
                    target: "e7n20a20"
                })({
                    name: "bbnlne",
                    styles: "margin:14px auto;color:#ffd866;text-align:center;font-weight:bold"
                })
        }
    }
]);
//# sourceMappingURL=8efcae45d997fd460d4e1f6ad43dc3e4994e366a9e168696d4059bafb2a00f3e.js.map