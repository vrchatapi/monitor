"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8104], {
        7563(e, t, n) {
            n.d(t, {
                A: () => u
            });
            var r = n(15902),
                l = n(59221),
                a = n(6077),
                o = n(96540),
                i = n(30104),
                c = n(21247),
                s = n(6324);
            const u = function(e) {
                var t = e.collapseOpen,
                    n = e.toggle,
                    u = e.title,
                    m = e.size,
                    d = void 0 === m ? "md" : m,
                    p = e.children,
                    g = e.onToggleCallback,
                    f = void 0 === g ? function() {} : g,
                    v = o.useState(t || !1),
                    E = (0, r.A)(v, 2),
                    h = E[0],
                    b = E[1];
                o.useEffect(function() {
                    b(t)
                }, [t]);
                return o.createElement("div", null, o.createElement("h3", null, o.createElement(i.A, {
                    "aria-label": "".concat(u, " Toggle"),
                    size: d,
                    onClick: function() {
                        n ? n() : (f(!h), b(!h))
                    },
                    color: h ? "primary" : "secondary"
                }, h && o.createElement(s.A, {
                    icon: a.Ip
                }), !h && o.createElement(s.A, {
                    icon: l.OQ
                })), " ", u), o.createElement(c.A, {
                    isOpen: h
                }, p), "sm" !== d && o.createElement("br", null))
            }
        },
        19100(e, t, n) {
            n.d(t, {
                A: () => O
            });
            var r = n(15184),
                l = n(64467),
                a = n(10467),
                o = n(15902),
                i = n(69629),
                c = n(48645),
                s = n(54756),
                u = n.n(s),
                m = n(96540),
                d = n(84976),
                p = n(50779),
                g = n(89483).m.injectEndpoints({
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
                v = g.useCreateReportMutation,
                E = n(194),
                h = n(15033),
                b = n(51055),
                w = n(5043),
                y = n(25538),
                x = n(85005),
                A = n(24751);

            function k(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(n), !0).forEach(function(t) {
                        (0, l.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const O = function(e) {
                var t, n, l = e.isOpen,
                    s = e.cancelCallback,
                    g = e.type,
                    k = e.contentId,
                    O = e.contentName,
                    C = e.marketplace,
                    I = e.hasStore,
                    S = m.useState(""),
                    M = (0, o.A)(S, 2),
                    T = M[0],
                    j = M[1],
                    R = m.useState(""),
                    P = (0, o.A)(R, 2),
                    G = P[0],
                    L = P[1],
                    D = m.useState(""),
                    F = (0, o.A)(D, 2),
                    $ = F[0],
                    q = F[1],
                    U = m.useState([]),
                    B = (0, o.A)(U, 2),
                    _ = B[0],
                    z = B[1],
                    W = m.useState(!1),
                    V = (0, o.A)(W, 2),
                    Y = V[0],
                    J = V[1],
                    X = (0, E.a$)().user,
                    Q = (0, p.G)({}, {
                        skip: !l
                    }),
                    K = Q.data,
                    H = Q.isLoading,
                    Z = f({
                        contentId: k
                    }, {
                        skip: !l
                    }),
                    ee = Z.data,
                    te = Z.isLoading,
                    ne = v(),
                    re = (0, o.A)(ne, 2),
                    le = re[0],
                    ae = re[1],
                    oe = ae.isFetching,
                    ie = ae.isError,
                    ce = ae.isSuccess,
                    se = ae.reset;
                m.useEffect(function() {
                    T && L("")
                }, [T]), m.useEffect(function() {
                    "warnings" === G && q("")
                }, [G]), m.useEffect(function() {
                    l || setTimeout(function() {
                        se(), j(""), L(""), q(""), z([])
                    }, 500)
                }, [l]);
                var ue = function() {
                        var e = (0, a.A)(u().mark(function e() {
                            var t, n;
                            return u().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, le(N({
                                            type: g,
                                            category: T,
                                            reason: G,
                                            contentId: k,
                                            description: $
                                        }, _.length ? {
                                            details: {
                                                suggestedWarnings: _
                                            }
                                        } : {}));
                                    case 2:
                                        t = e.sent, (n = t.data) && J(n.supportRequired);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    me = H || te || oe,
                    de = m.useMemo(function() {
                        var e, t;
                        return Object.keys(null !== (e = null == K || null === (t = K.reportOptions) || void 0 === t ? void 0 : t[g]) && void 0 !== e ? e : {}).sort(function(e, t) {
                            var n, r;
                            return (null === (n = K.reportCategories) || void 0 === n || null === (n = n[e]) || void 0 === n ? void 0 : n.order) - (null === (r = K.reportCategories) || void 0 === r || null === (r = r[t]) || void 0 === r ? void 0 : r.order)
                        }).filter(function(e) {
                            return !e.endsWith("store") || I
                        }).map(function(e) {
                            var t, n, r, l, a, o;
                            return {
                                value: e,
                                label: null !== (t = null === (n = K.reportCategories) || void 0 === n || null === (n = n[e]) || void 0 === n ? void 0 : n.title) && void 0 !== t ? t : null === (r = K.reportCategories) || void 0 === r || null === (r = r[e]) || void 0 === r ? void 0 : r.text,
                                description: null !== (l = null === (a = K.reportCategories) || void 0 === a || null === (a = a[e]) || void 0 === a ? void 0 : a.description) && void 0 !== l ? l : null === (o = K.reportCategories) || void 0 === o || null === (o = o[e]) || void 0 === o ? void 0 : o.tooltip
                            }
                        })
                    }, [g, K, I]);
                return m.useEffect(function() {
                    1 !== de.length || T || j(de[0].value)
                }, [de, T]), m.createElement(A.vq, {
                    role: "dialog",
                    type: "default",
                    isOpen: l,
                    toggle: s
                }, ce ? m.createElement(m.Fragment, null, Y ? m.createElement(m.Fragment, null, m.createElement(A.Au, {
                    tag: "h4",
                    close: m.createElement(b.A, {
                        onClick: s,
                        disabled: me
                    }),
                    toggle: s
                }, "Contact Support"), m.createElement(A.G1, {
                    className: "tw-flex tw-flex-col tw-justify-center tw-text-center tw-gap-1 tw-px-10"
                }, m.createElement(h.M2, {
                    icon: c.QJ,
                    size: "4x",
                    className: "tw-mt-5 tw-mb-5"
                }), m.createElement("h4", {
                    className: "tw-mb-4"
                }, "Support Team Required"), m.createElement("strong", null, "It looks like you are trying to report an issue that requires our support team."), m.createElement("p", null, "Please provide us with information about your issue using our web form so we can provide you with assistance.")), m.createElement(A.Tb, {
                    className: "tw-justify-center"
                }, m.createElement(A.z9, {
                    to: "https://help.vrchat.com/hc/en-us/requests/new?ticket_form_id=360006750513&tf_360057451993=".concat(null == X ? void 0 : X.id, "&tf_subject=").concat(G, "%20").concat(T, "%20By%20").concat(g, "%20").concat(O, "&tf_description=").concat($),
                    target: "_blank"
                }, "Open Support Form"))) : m.createElement(m.Fragment, null, m.createElement(A.Au, {
                    tag: "h4",
                    close: m.createElement(b.A, {
                        onClick: s,
                        disabled: me
                    }),
                    toggle: s
                }, "Report Submitted"), m.createElement(A.G1, {
                    className: "tw-flex tw-flex-col tw-justify-center tw-text-center tw-gap-1 tw-px-10"
                }, m.createElement(h.M2, {
                    icon: i.is,
                    size: "4x",
                    className: "tw-mt-5 tw-mb-5"
                }), m.createElement("h4", {
                    className: "tw-mb-4"
                }, "Your report is in - we've got it!"), m.createElement("strong", null, "Thanks for helping us keep things safe!"), m.createElement("p", null, "Your report has been received and will be reviewed by our moderation team.")), m.createElement(A.Tb, {
                    className: "tw-justify-center"
                }, m.createElement(h.$n, {
                    color: "primary",
                    onClick: s,
                    className: "tw-px-20 tw-py-1"
                }, "Done")))) : m.createElement(m.Fragment, null, m.createElement(A.Au, {
                    className: "tw-capitalize",
                    tag: "h4",
                    close: m.createElement(b.A, {
                        onClick: s,
                        disabled: me
                    }),
                    toggle: s
                }, "Report ", g), m.createElement(A.G1, null, H ? m.createElement("div", {
                    className: "tw-text-center"
                }, m.createElement(y.A, {
                    size: "3x"
                })) : m.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, ie && m.createElement(h.$T, {
                    type: "error",
                    title: "Error"
                }, "An error occurred while trying to submit the report."), m.createElement("p", null, "What are you reporting?"), m.createElement(x.A, {
                    value: T,
                    onChange: function(e) {
                        return j(e.target.value)
                    },
                    options: de
                }), m.createElement("label", {
                    className: "tw-mt-5"
                }, "Reason", m.createElement(h.ms, {
                    className: "tw-mt-2",
                    value: G,
                    onChange: L,
                    disabled: !T,
                    options: (null !== (t = null == K || null === (n = K.reportOptions) || void 0 === n || null === (n = n[g]) || void 0 === n ? void 0 : n[T]) && void 0 !== t ? t : []).map(function(e) {
                        var t;
                        return {
                            value: e,
                            label: null === (t = K.reportReasons) || void 0 === t || null === (t = t[e]) || void 0 === t ? void 0 : t.text
                        }
                    })
                })), m.createElement("small", {
                    className: "tw-text-light-grey tw-mt-2"
                }, "Don't see your issue listed here?", m.createElement("a", {
                    href: C ? "https://vrch.at/marketplace-help" : "https://vrch.at/support",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "tw-ml-1"
                }, "Contact us")), "copyright" === G ? m.createElement(h.$T, {
                    type: "warn"
                }, "We take copyright seriously. Copyright infringement reports are handled differently from standard reports. If you own this content or are authorized to act on behalf of the owner,", m.createElement(d.N_, {
                    to: "/home/profile?dmcaClaimForm=true&dmcaTarget=".concat(k),
                    className: "tw-ml-1"
                }, "submit a DMCA Claim"), ".") : "warnings" === G ? m.createElement(m.Fragment, null, m.createElement("label", {
                    className: "tw-mt-5 tw-mb-2"
                }, "Suggest Content Warnings"), m.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-2"
                }, m.createElement(w.A, {
                    tags: _,
                    onSelectValues: function(e) {
                        return z([].concat((0, r.A)(_), (0, r.A)(e)))
                    },
                    onRemoveValue: function(e) {
                        return z(_.filter(function(t) {
                            return t !== e
                        }))
                    }
                }))) : null != ee && ee.results.some(function(e) {
                    return e.type === g && e.category === T && e.reason === G
                }) ? m.createElement(h.$T, {
                    type: "warn",
                    title: "You already have a pending report for this."
                }) : m.createElement("label", {
                    className: "tw-mt-5 tw-flex tw-flex-col tw-gap-2"
                }, "Notes", m.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Provide specific details to help moderators resolve the issue promptly."), m.createElement(h.TM, {
                    value: $,
                    onChange: function(e) {
                        return q(e.target.value)
                    },
                    maxLength: 5e3,
                    styleOverride: {
                        height: "90px"
                    }
                })))), m.createElement(A.Tb, null, m.createElement(h.$n, {
                    disabled: me,
                    neutral: !0,
                    onClick: s,
                    className: "px-2",
                    expand: !0
                }, "Cancel"), m.createElement(h.$n, {
                    color: "primary",
                    loading: oe,
                    disabled: me || !T || !G || !$ && "warnings" !== G || "copyright" === G || "warnings" === G && !_.length,
                    onClick: ue,
                    className: "px-2",
                    expand: !0
                }, "Send"))))
            }
        },
        85005(e, t, n) {
            n.d(t, {
                A: () => o
            });
            var r = n(70129),
                l = n(96540);
            var a = (0, r.A)("fieldset", {
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
                }, (null != n ? n : []).map(function(e) {
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
                }))
            }
        },
        78104(e, t, n) {
            n.r(t), n.d(t, {
                default: () => Wl
            });
            var r = n(10467),
                l = n(15902),
                a = n(70129),
                o = n(28045),
                i = n(7514),
                c = n(14190),
                s = n(55345),
                u = n(66089),
                m = n(53967),
                d = n(12298),
                p = n(78244),
                g = n(97840),
                f = n(78536),
                v = n(62882),
                E = n(88213),
                h = n(62672),
                b = n(90731),
                w = n(19179),
                y = n(81617),
                x = n(34496),
                A = n(42217),
                k = n(54756),
                N = n.n(k),
                O = n(56822),
                C = n(96540),
                I = n(6376),
                S = n(47767),
                M = n(84976),
                T = n(25423),
                j = n(85052),
                R = function(e) {
                    var t, n = e.group,
                        r = e.groupMember,
                        l = null === (t = n.roles) || void 0 === t ? void 0 : t.find(function(e) {
                            return 0 === e.order
                        });
                    return null != l && null != r && r.roleIds.includes(l.id)
                },
                P = function(e) {
                    var t, n, r, l = e.groupMember,
                        a = e.permission;
                    return (null == l || null === (t = l.permissions) || void 0 === t ? void 0 : t.includes("*")) || null !== (n = null == l || null === (r = l.permissions) || void 0 === r ? void 0 : r.includes(a)) && void 0 !== n && n
                },
                G = n(9663),
                L = n(64467),
                D = n(15184),
                F = n(38275),
                $ = n(20174),
                q = n(26716),
                U = n(2505),
                B = n(30616),
                _ = n(76229),
                z = n(39704),
                W = n(5826),
                V = n(17535),
                Y = n(8756),
                J = n(27592),
                X = n(17997),
                Q = n(24930),
                K = n(40223),
                H = n(50779),
                Z = n(558),
                ee = n(65950),
                te = n(13951),
                ne = n(71957),
                re = n(15033),
                le = n(6324),
                ae = n(19462),
                oe = n(51055),
                ie = n(25538),
                ce = n(75174),
                se = n(79162),
                ue = n(49107),
                me = n(24751),
                de = n(194),
                pe = n(40085),
                ge = n(5556),
                fe = n.n(ge),
                ve = n(74353),
                Ee = n.n(ve),
                he = n(43522),
                be = n.n(he),
                we = n(6279),
                ye = n.n(we),
                xe = n(91069);
            Ee().extend(be()), Ee().extend(ye());
            const Ae = function(e) {
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
                    m = Ee().duration(Ee()(u).diff(Ee()())).humanize(!0);
                return C.createElement(ke, null, C.createElement(re.fv, {
                    className: "tw-columns-3"
                }, C.createElement(re.Oo, {
                    className: "tw-justify-self-start tw-my-2",
                    fitToCover: !0,
                    alt: i,
                    imageId: (0, xe.D2)(a || o),
                    width: "100px",
                    height: "100px"
                })), C.createElement(re.fv, {
                    className: "tw-flex-[1_1_128px] tw-columns-6"
                }, C.createElement(M.N_, {
                    className: "tw-justify-self-start tw-text-2xl",
                    to: "/home/user/".concat(c)
                }, i), C.createElement("h4", {
                    className: "tw-justify-self-start"
                }, "Joined ".concat(m)), C.createElement("p", {
                    className: "tw-justify-self-start tw-text-[#737372] tw-text-[16px]"
                }, "Member")), C.createElement(re.fv, {
                    className: "tw-flex tw-flex-row tw-flex-[1_1_32px] tw-justify-center tw-items-center tw-columns-3"
                }, C.createElement(re.$n, {
                    expand: !0,
                    title: "Select New Owner",
                    onClick: function() {
                        n(t)
                    }
                }, "Select")))
            };
            var ke = (0, a.A)(re.fI, {
                target: "e12tzkfr0"
            })("margin:0.4rem 0;padding:0.5rem;background-color:#252a30;border:3px solid #252a30;transition:border-color 0.2s ease-in-out;border-radius:8px;flex-wrap:wrap;justify-content:center;&:hover{border-color:#054d5e;}&>*{margin:0.5rem;}&>", re.fv, ">p:last-child,&>", re.fv, ">ul:last-child{margin:0;}");

            function Ne(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ne(Object(n), !0).forEach(function(t) {
                        (0, L.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
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
                    v = (0, l.A)(f, 2),
                    E = v[0],
                    h = v[1],
                    b = (0, C.useState)(1),
                    w = (0, l.A)(b, 2),
                    y = w[0],
                    x = w[1],
                    A = (0, de.d7)(E),
                    k = (0, C.useState)([
                        [],
                        []
                    ]),
                    N = (0, l.A)(k, 2),
                    O = N[0],
                    I = N[1],
                    S = (0, te.P2)().data,
                    M = null == o ? void 0 : o.id,
                    T = null == o ? void 0 : o.ownerId,
                    j = null == o ? void 0 : o.myMember,
                    R = (0, pe.OI)(),
                    P = (0, l.A)(R, 2),
                    G = P[0],
                    L = P[1],
                    F = L.data,
                    $ = L.error,
                    q = L.isLoading,
                    U = (null == F || null === (t = F.members) || void 0 === t ? void 0 : t.length) < 25;
                C.useEffect(function() {
                    ee(0)
                }, []), C.useEffect(function() {
                    var e = (0, D.A)(O);
                    if (F) {
                        var t;
                        if (F.page <= 0 && !E) e[0] = [null != o && o.myMember ? Oe(Oe({}, j), {}, {
                            userId: S.id,
                            user: Oe(Oe({}, S), {}, {
                                thumbnailUrl: null !== (t = S.profilePicOverride) && void 0 !== t ? t : S.currentAvatarImageUrl
                            })
                        }) : null].concat((0, D.A)(F.members));
                        else e[F.page] = F.members;
                        I(e)
                    }
                }, [F]), (0, C.useEffect)(function() {
                    setTimeout(function() {
                        i && null != g && g.current && g.current.focus()
                    }, 300)
                }, [i, g]), (0, C.useEffect)(function() {
                    x(1)
                }, [E]), (0, C.useEffect)(function() {
                    h("")
                }, [i]);
                var B = (0, pe.OF)({
                        groupId: M,
                        pageValue: y,
                        searchTerm: A,
                        n: 25
                    }, {
                        skip: "" === A || !i || A.length < 3 || !u
                    }),
                    _ = B.data,
                    z = B.error,
                    W = B.isError,
                    V = B.isFetching,
                    Y = B.isSuccess,
                    J = (0, ne.m8)({
                        pageValue: y,
                        searchTerm: A,
                        n: 25
                    }, {
                        skip: "" === A || !i || A.length < 3 || u
                    }),
                    X = J.data,
                    Q = J.error,
                    K = J.isError,
                    H = J.isFetching,
                    Z = J.isSuccess,
                    ee = function(e) {
                        G({
                            groupId: M,
                            perPage: 25,
                            page: e
                        }), x(e + 1)
                    },
                    le = null == O ? void 0 : O.map(function(e, t) {
                        var n;
                        return null === (n = (0, D.A)(e)) || void 0 === n || null === (n = n.sort(function(e) {
                            return e.userId === T ? -1 : 0
                        })) || void 0 === n || null === (n = n.filter(function(e, t, n) {
                            return n.findIndex(function(t) {
                                return t.userId === e.userId
                            }) === t
                        })) || void 0 === n ? void 0 : n.map(function(e) {
                            return e.userId === T ? null : C.createElement(Ae, {
                                key: e.id,
                                member: e,
                                onSelectCallback: function(e) {
                                    return m(e)
                                }
                            })
                        })
                    });
                return C.createElement(me.vq, {
                    role: "dialog",
                    isOpen: i,
                    toggle: c,
                    keyboard: !0,
                    autoFocus: !1,
                    size: "lg"
                }, C.createElement(me.Au, {
                    tag: "h4",
                    close: C.createElement(oe.A, {
                        onClick: c
                    }),
                    toggle: c
                }, u ? "Group Members Search" : "Users Search"), C.createElement(me.G1, null, C.createElement(me.xx, null, C.createElement(re.pd, {
                    id: "search-product-list",
                    onChange: function(e) {
                        return h(e.target.value)
                    },
                    placeholder: u ? "Search Group Members..." : "Search for users...",
                    ref: g,
                    type: "text",
                    value: E
                }), (W || K) && C.createElement("p", {
                    className: "text-center m-5 text-warning h-25"
                }, "Something went wrong with the search, please try again later!", C.createElement("br", null), W && C.createElement("code", null, null == z || null === (n = z.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), K && C.createElement("code", null, null == Q || null === (r = Q.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message)), V || p && C.createElement(me.WT, null, C.createElement("div", {
                    className: "text-center m-5 text-secondary h-25"
                }, C.createElement(ie.A, null))), !Y && !V && !W && u && C.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "Search for members in your group."), Y && !V && u && C.createElement(me.WT, null, _.results.map(function(e) {
                    return C.createElement(Ae, {
                        key: e.id,
                        member: e,
                        onSelectCallback: function(e) {
                            return m(e)
                        }
                    })
                }), 0 === _.results.length && C.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "We couldn't find anything with that search.")), !Z && !H && !K && !u && C.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "Search for users on VRChat."), Z && C.createElement(me.WT, null, 0 === X.results.length && C.createElement("p", {
                    className: "text-center m-1 text-secondary h-25"
                }, "We couldn't find anything with that search.")), q ? C.createElement(re.fy, {
                    height: "200px"
                }) : C.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, le), C.createElement("div", {
                    className: "p-2",
                    style: {
                        margin: "2px auto 0",
                        textAlign: "center"
                    }
                }, C.createElement(re.$n, {
                    onClick: function() {
                        return ee(page)
                    },
                    disabled: q || $ || U,
                    loading: q
                }, $ || U ? "No more members..." : "List More Members")), (Y || Z) && C.createElement(me.p, null, C.createElement(me.D9, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return x(y - 1)
                    },
                    disabled: 1 === y || V || H
                }, C.createElement(re.M2, {
                    icon: ue.Wz
                })), C.createElement("span", null, y), C.createElement(me.UU, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return x(y + 1)
                    },
                    disabled: (null == _ ? void 0 : _.isLastPage) || (null == X ? void 0 : X.isLastPage) || V || H
                }, C.createElement(re.M2, {
                    icon: se.Xk
                }))))))
            };
            Ce.propTypes = {
                group: fe().object,
                isOpen: fe().bool.isRequired,
                cancelCallback: fe().func.isRequired,
                memberEditCallback: fe().func,
                memberSelectCallback: fe().func
            };
            const Ie = Ce;
            var Se = n(97250);
            const Me = function(e) {
                var t, n, r = e.group,
                    l = e.onClickCallback,
                    a = e.isDeleting,
                    o = (0, ne.vf)(null == r ? void 0 : r.ownerId, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    i = o.data,
                    c = o.isFetching,
                    s = o.isError,
                    u = o.error,
                    m = (0, ne.vf)(null == r ? void 0 : r.transferTargetId, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    d = m.data,
                    p = m.isFetching,
                    g = m.isError,
                    f = m.error;
                return C.createElement(C.Fragment, null, C.createElement(re.N3, {
                    className: "mt-2"
                }, C.createElement("h4", {
                    className: "text-center"
                }, "Group Ownership Transfer")), C.createElement(re.BW, null, c || p || !d || !i ? C.createElement("div", {
                    className: "full-width text-center"
                }, C.createElement(ie.A, null)) : C.createElement(C.Fragment, null, s && C.createElement(re.$T, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == u || null === (t = u.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), g && C.createElement(re.$T, {
                    type: "error",
                    title: "Error Fetching New Group Owner Data"
                }, (null == f || null === (n = f.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unkown error fetching New Group Owner Data"), C.createElement(re.fI, null, C.createElement("span", {
                    className: "full-width text-center"
                }, "You can choose to cancel the transfer")), C.createElement(re.fI, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, C.createElement(re.fv, {
                    className: "tw-flex-[1_0_0%]"
                }, C.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "Current Owner"), C.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, C.createElement(re.M2, {
                    className: "tw-mr-2",
                    icon: Se.zq
                }), null == i ? void 0 : i.displayName)), C.createElement(re.fv, {
                    className: "tw-flex-[1_0_0%]"
                }, C.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "New Owner"), d && C.createElement(re.fI, {
                    className: "tw-flex tw-m-1 tw-font-bold gx-0 gap-1"
                }, C.createElement(re.Oo, {
                    width: 24,
                    style: {
                        maxWidth: "24px",
                        objectFit: "cover"
                    },
                    imageId: (d.thumbnailUrl || d.currentAvatarThumbnailImageUrl).match("(?!/)file_[^/]+")[0],
                    alt: null == d ? void 0 : d.displayName
                }), null == d ? void 0 : d.displayName))), a ? C.createElement("div", {
                    className: "full-width text-center"
                }, C.createElement(ie.A, null)) : C.createElement("div", {
                    className: (0, O.AH)({
                        name: "pc0kie",
                        styles: ">*{margin-top:15px;}"
                    })
                }, C.createElement(re.fI, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, C.createElement(re.fv, {
                    className: "tw-flex-[1_0_0%]"
                }, C.createElement(re.$n, {
                    onClick: function() {
                        return l()
                    },
                    danger: !0,
                    className: "tw-max-w-[100%]"
                }, "Cancel Transfer")))))))
            };
            var Te = n(64350);
            const je = function(e) {
                var t = e.isOpen,
                    n = e.cancelCallback;
                return C.createElement(me.vq, {
                    role: "dialog",
                    isOpen: t,
                    toggle: n,
                    keyboard: !0,
                    autoFocus: !1,
                    size: "lg"
                }, C.createElement(me.Au, {
                    tag: "h4",
                    close: C.createElement(oe.A, {
                        onClick: n
                    }),
                    toggle: n
                }, "About Group Ownership Transfer"), C.createElement(me.G1, null, C.createElement("h4", null, "You can transfer your group ownership to another member of the group. the target member and the group must meet the requirements below."), C.createElement(me.xx, null, C.createElement("ul", null, C.createElement("li", null, "The target member has verified their email address ", "(", "check the Email section via", " ", C.createElement(M.N_, {
                    className: "tw-text-link-highlight",
                    to: "/home/profile",
                    target: "_blank"
                }, "account settings"), ")"), C.createElement("li", null, "The target member has an active VRC Plus subscription"), C.createElement("li", null, "The target member can still own more groups ", "(", "each user can own up to 5 groups", ")"), C.createElement("li", null, "The group is not monetized")))))
            };
            var Re = function(e) {
                var t, n, r = e.group,
                    a = e.onButtonClick,
                    o = e.isLoading,
                    i = C.useState(!1),
                    c = (0, l.A)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, ne.vf)(null == r ? void 0 : r.ownerId, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    d = m.data,
                    p = m.isFetching,
                    g = m.isError,
                    f = m.error,
                    v = (0, pe.is)({
                        groupId: r.id
                    }, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    E = v.data,
                    h = v.isFetching,
                    b = v.isError,
                    w = v.error,
                    y = C.useMemo(function() {
                        return null == E || !E.requirements || !E.requirements.groupNotMonetized
                    }, [E, b]);
                return C.createElement(C.Fragment, null, s && C.createElement(je, {
                    isOpen: s,
                    cancelCallback: function() {
                        return u(!1)
                    }
                }), C.createElement(re.N3, {
                    className: "mt-2"
                }, C.createElement("h4", {
                    className: "text-center"
                }, "Group Ownership Transfer")), C.createElement(re.BW, null, p || h ? C.createElement("div", {
                    className: "full-width text-center"
                }, C.createElement(ie.A, null)) : C.createElement(C.Fragment, null, g && C.createElement(re.$T, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == f || null === (t = f.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), b && C.createElement(re.$T, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == w || null === (n = w.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unkown error fetching Group Owner Requirements Data"), y && !b ? C.createElement("span", {
                    className: "tw-mb-2"
                }, C.createElement(re.$T, {
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
                }, "these requirements"), " ", "to qualify for the transfer."), C.createElement(re.fI, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%]"
                }, C.createElement(re.fv, {
                    className: "tw-flex-[1_0_0%]"
                }, C.createElement("p", null, "Current Owner"), C.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, C.createElement(re.M2, {
                    className: "tw-mr-2",
                    icon: Se.zq
                }), null == d ? void 0 : d.displayName)), C.createElement(re.fv, {
                    className: "tw-flex-[1_0_0%]"
                }, C.createElement("p", null, "New Owner"), C.createElement(re.$n, {
                    className: "tw-max-w-[250px]",
                    onClick: function() {
                        return a()
                    },
                    disabled: o || b || y,
                    loading: o
                }, C.createElement(re.M2, {
                    className: "tw-mr-2",
                    icon: Te.faMagnifyingGlass
                }), "Search Group Members"))))))
            };
            Re.propTypes = {
                group: fe().object.isRequired,
                onButtonClick: fe().func.isRequired,
                isLoading: fe().bool.isRequired
            };
            const Pe = Re;
            var Ge, Le = "hasVerifiedEmail",
                De = "targetCanOwnMoreGroups",
                Fe = "targetIsGroupMember",
                $e = "hasVRCPlus",
                qe = "groupNotMonetized",
                Ue = (Ge = {}, (0, L.A)(Ge, Le, "Email address has not been verified"), (0, L.A)(Ge, De, "Already owns maximum nubmer of groups per user"), (0, L.A)(Ge, Fe, "Is not a valid member of the group"), (0, L.A)(Ge, $e, "Does not have an active VRChat Plus subscription"), (0, L.A)(Ge, qe, "Group is not valid because it is monetized"), Ge);
            const Be = function(e) {
                var t, n = e.group,
                    r = e.validity,
                    l = e.prospectiveNewOwner,
                    a = e.onTransfer,
                    o = e.onCancel,
                    i = e.isOpen,
                    c = e.isTransferring,
                    s = (0, ne.vf)(null == n ? void 0 : n.ownerId, {
                        skip: !n,
                        refetchOnMountOrArgChange: !0
                    }),
                    u = s.data,
                    m = s.isFetching,
                    d = s.isError,
                    p = s.error;
                return C.createElement(C.Fragment, null, C.createElement(re.uo, {
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
                }, C.createElement(ie.A, null)) : C.createElement("div", null, d && C.createElement(re.$T, {
                    type: "error",
                    title: "Error Fetching Group Owner Data"
                }, (null == p || null === (t = p.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unkown error fetching Group Owner Data"), !(null != r && r.valid) && (null == r ? void 0 : r.reasons) && C.createElement(re.$T, {
                    type: "error",
                    title: "Oops, it seems the selected member does not meet the following requirement(s)"
                }, r.reasons.map(function(e) {
                    var t;
                    return C.createElement("p", null, "• ".concat(null !== (t = Ue[e]) && void 0 !== t ? t : "Unknown Validity Reason"))
                })), C.createElement(re.fI, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-mt-2"
                }, C.createElement("span", {
                    className: "tw-full-width tw-text-center"
                }, "Are you sure you want to transfer your group ownership?")), C.createElement(re.fI, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-bg-[#252a30] tw-px-8 tw-text-[16px] tw-rounded-lg tw-border-current tw-transition tw-ease-in-out tw-delay-150 tw-bg-[#252a30] tw-mt-2"
                }, C.createElement(re.fv, {
                    className: "tw-flex-[1_0_0%]"
                }, C.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "Current Owner"), C.createElement("p", {
                    className: "tw-flex-row tw-m-1 tw-font-bold gx-0 gap-1"
                }, C.createElement(re.M2, {
                    className: "tw-mr-2",
                    icon: Se.zq
                }), null == u ? void 0 : u.displayName)), C.createElement(re.fv, {
                    className: "tw-flex-[1_0_0%]"
                }, C.createElement("p", {
                    className: "tw-font-normal tw-text-[14px] tw-mt-2"
                }, "New Owner"), (null == l ? void 0 : l.user) && C.createElement(re.fI, {
                    className: "tw-flex tw-m-1 tw-font-bold gx-0 gap-1"
                }, C.createElement(re.Oo, {
                    width: 24,
                    style: {
                        maxWidth: "24px",
                        objectFit: "cover"
                    },
                    imageId: (0, xe.D2)(l.user.thumbnailUrl || l.user.currentAvatarThumbnailImageUrl),
                    alt: l.user.displayName
                }), l.user.displayName))), C.createElement(re.fI, {
                    className: "tw-flex-[0_0_0%] tw-flex-row tw-space-x-2 tw-max-w-[100%] tw-mt-2"
                }, C.createElement("span", {
                    className: "tw-full-width tw-text-center"
                }, "This cannot be undone once the transfer is complete.")))))
            };
            var _e = n(30104),
                ze = n(77365),
                We = n(30678);
            const Ve = function(e) {
                var t, n = e.groupBioLinks,
                    a = e.callback,
                    o = e.index,
                    i = C.useState(null !== (t = null == n ? void 0 : n[o]) && void 0 !== t ? t : ""),
                    c = (0, l.A)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = C.useState(!1),
                    d = (0, l.A)(m, 2),
                    p = d[0],
                    g = d[1],
                    f = C.useState(s),
                    v = (0, l.A)(f, 2),
                    E = v[0],
                    h = v[1],
                    b = C.useState(!0),
                    w = (0, l.A)(b, 2),
                    y = w[0],
                    x = w[1],
                    A = null != n ? n : [],
                    k = function() {
                        g(!0), x(!1)
                    },
                    O = function() {
                        var e = (0, r.A)(N().mark(function e() {
                            var t;
                            return N().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        (t = [].concat(A))[o] = s, a(t), g(!1), h(s);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    I = function() {
                        var e = (0, r.A)(N().mark(function e() {
                            var t;
                            return N().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        (t = [].concat(A))[o] = "", a(t), g(!1), u(""), h("");
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
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
                        13 === e.keyCode && !1 === y && O()
                    },
                    className: "form-control",
                    value: s,
                    maxLength: 1e3
                }), C.createElement("div", {
                    className: "input-group-append"
                }, C.createElement("span", {
                    className: "input-group-text",
                    id: "basic-addon1"
                }, C.createElement(We.b6, {
                    url: s,
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                })))), C.createElement(_e.A, {
                    onClick: function() {
                        g(!1), u(E)
                    }
                }, "Cancel"), C.createElement(_e.A, {
                    onClick: O,
                    disabled: y,
                    color: "primary"
                }, "Ok")) : o > 0 && null == s ? C.createElement("div", null) : !(o > 0) || "" !== s && null != s || "" !== A[o - 1] && null != A[o - 1] ? null == s || "" === s ? C.createElement("div", null, C.createElement("div", {
                    className: "btn-group w-100 p-2 p-l-0"
                }, C.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "btn btn-outline-light btn-block",
                    style: {
                        whiteSpace: "normal"
                    },
                    onClick: k
                }, "Link"))) : C.createElement("div", null, C.createElement(ze.A, {
                    className: "p-2 w-100 p-l-0"
                }, C.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "btn btn-outline-light",
                    style: {
                        width: "255px",
                        overflow: "hidden"
                    },
                    onClick: k
                }, A[o]), C.createElement(Ye, {
                    className: "btn btn-outline-danger h-100 ratio-1x1",
                    "aria-label": "Close",
                    onClick: I
                }, C.createElement("span", {
                    "aria-hidden": "true"
                }, "×")))) : C.createElement("div", null)
            };
            var Ye = (0, a.A)(_e.A, {
                    target: "e1a3rjxi0"
                })({
                    name: "1234s8l",
                    styles: "width:40px;max-width:40px"
                }),
                Je = n(43594),
                Xe = n(44034);
            var Qe = function() {
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
                    m = (0, l.A)(u, 2),
                    d = m[0],
                    p = m[1],
                    g = C.useState([]),
                    f = (0, l.A)(g, 2),
                    v = f[0],
                    E = f[1],
                    h = function(e) {
                        return function(t) {
                            var n;
                            t.stopPropagation(), t.preventDefault(), null != v && null !== (n = v.filter(function(t) {
                                var n = t.key;
                                return (null == e ? void 0 : e.key) === n
                            })) && void 0 !== n && n[0] ? E(null == v ? void 0 : v.filter(function(t) {
                                var n = t.key;
                                return (null == e ? void 0 : e.key) !== n
                            })) : E([].concat((0, D.A)(v), [e]))
                        }
                    };
                C.useEffect(function() {
                    var e = [];
                    null == v || v.forEach(function(t) {
                        return e.push(null == t ? void 0 : t.value)
                    }), s(e)
                }, [v]), C.useEffect(function() {
                    v.length !== i.length && E(i)
                }, [i]);
                var b = C.useMemo(function() {
                    return i.length === v.length ? "View All" : "".concat(v.length, " selected")
                }, [i, v]);
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
                }, !!n && C.createElement(Ze, null, n.labelValue), C.createElement(He, {
                    className: "tw-gap-2 tw-text-center tw-justify-center"
                }, b), C.createElement(le.A, {
                    icon: Je.xB,
                    color: "white",
                    className: "ms-3"
                })), d && i.length > 0 && C.createElement(at, {
                    className: "tw-px-[10px] tw-gap-1 tw-py-1"
                }, i.map(function(e, t) {
                    var n, r;
                    return C.createElement(Xe.A, {
                        checked: v.some(function(e) {
                            var n = e.key;
                            return t === n
                        }),
                        id: null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : "option-".concat(t),
                        "aria-checked": v.some(function(e) {
                            var n = e.key;
                            return t === n
                        }),
                        key: null !== (r = null == e ? void 0 : e.value) && void 0 !== r ? r : "option-key-".concat(t),
                        className: "tw-w-4 tw-h-4 tw-mr-2",
                        onClick: h(e),
                        tabIndex: t,
                        label: null == e ? void 0 : e.label
                    })
                }))))
            };
            Qe.propTypes = {
                labelProps: fe().shape({
                    ariaLabel: fe().string.isRequired,
                    labelValue: fe().string.isRequired
                }).isRequired,
                disabled: fe().bool.isRequired,
                options: fe().array.isRequired,
                onTriggerUpdate: fe().func
            };
            const Ke = Qe;
            var He = (0, a.A)("div", {
                    target: "e1476vl15"
                })({
                    name: "jyvlna",
                    styles: "display:flex;align-items:center;max-width:75%"
                }),
                Ze = (0, a.A)("div", {
                    target: "e1476vl14"
                })({
                    name: "qcoia9",
                    styles: "font-size:0.8em;margin-right:10px;color:hsla(0, 0%, 100%, 0.6);white-space:nowrap;max-width:100%"
                }),
                et = (0, a.A)("div", {
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
                rt = (0, a.A)("div", {
                    target: "e1476vl12"
                })("text-align:center;background-color:#064b5c;padding:5px 11px 5px 11px;border:#064b5c solid 2px;color:#ffffff;border-radius:3px;transition:background-color 0.2s ease-in-out;position:relative;display:flex;flex:1;border-radius:", function(e) {
                    return e.expanded ? "3px 3px 0 0" : 3
                }, "px;max-width:100%;&:hover{background-color:#064b5c;border-color:#086c84;}", function(e) {
                    return e.expanded ? nt : ""
                }, " ", function(e) {
                    return e.disabled ? tt : ""
                }, ";"),
                lt = (0, a.A)("button", {
                    target: "e1476vl11"
                })({
                    name: "118t6pa",
                    styles: "border:none;background:transparent;outline:none!important;display:flex;flex:1;flex-direction:row;align-items:center;justify-content:space-between;position:relative;max-width:100%"
                }),
                at = (0, a.A)("div", {
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
                })) : C.createElement(it, null, C.createElement(ct, null, Ee()(t.created_at).format("MM/DD/YYYY hh:mm A")), t.description)
            };
            var it = (0, a.A)("div", {
                    target: "evg8j501"
                })({
                    name: "kv8vyc",
                    styles: "background-color:#252a30;border-radius:12px;padding:8px;margin-bottom:8px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;transition:background-color 0.2s ease-in-out;:hover{background-color:#353c45;}"
                }),
                ct = (0, a.A)("div", {
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
                    a = (0, l.A)(r, 2),
                    o = a[0],
                    i = a[1],
                    c = C.useState(0),
                    s = (0, l.A)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = C.useState(0),
                    p = (0, l.A)(d, 2),
                    g = p[0],
                    f = p[1],
                    v = C.useState([]),
                    E = (0, l.A)(v, 2),
                    h = E[0],
                    b = E[1],
                    w = C.useState([]),
                    y = (0, l.A)(w, 2),
                    x = y[0],
                    A = y[1],
                    k = C.useState([]),
                    N = (0, l.A)(k, 2),
                    O = N[0],
                    I = N[1],
                    S = (0, pe.R0)(),
                    M = (0, l.A)(S, 2),
                    T = M[0],
                    j = M[1],
                    R = j.data,
                    P = j.isFetching,
                    G = j.isError,
                    L = (0, pe.vq)({
                        groupId: n.id
                    }, {
                        skip: !n
                    }),
                    F = L.data,
                    $ = L.isFetching,
                    q = L.isError;
                C.useEffect(function() {
                    I(x.map(function(e) {
                        return e.value
                    }))
                }, [x]), C.useEffect(function() {
                    if (F && 0 === h.length) {
                        var e = F.map(function(e, t) {
                            var n = e.split(".").map(function(e) {
                                return e.charAt(0).toUpperCase() + e.slice(1)
                            }).join(" ");
                            return console.log(n), {
                                key: t,
                                label: n,
                                value: e
                            }
                        });
                        b(e), 0 === x.length && A(e.map(function(e) {
                            return e.value
                        }))
                    }
                    u < 0 ? m(0) : T({
                        groupId: n.id,
                        perPage: o,
                        offset: u,
                        eventTypes: O ? (0, D.A)(O) : []
                    })
                }, [o, u, F, O, x]), C.useEffect(function() {
                    null != R && R.totalCount && f(R.totalCount)
                }, [R]);
                var U = C.createElement(dt, null, C.createElement(pt, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u - o)
                    },
                    disabled: 0 === u
                }, C.createElement(re.M2, {
                    icon: ue.Wz
                })), C.createElement("span", null, "(", u, " - ", g < o + u ? g : o + u, ") / ", g), C.createElement(gt, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u + o)
                    },
                    disabled: g < o + u
                }, C.createElement(re.M2, {
                    icon: se.Xk
                })));
                return C.createElement("div", null, G && C.createElement(re.$T, {
                    title: "Error",
                    type: "error",
                    className: "mb-2"
                }, "There was an error loading the audit log."), q && !$ && C.createElement(re.$T, {
                    title: "Error",
                    type: "error",
                    className: "mb-2"
                }, "There was an error loading the filterable audit log types."), C.createElement(re.N3, null, C.createElement("h4", {
                    className: "text-center"
                }, "Audit Log")), C.createElement(re.BW, null, C.createElement(re.fI, {
                    className: "tw-flex-row tw-justify-evenly"
                }, !!h.length && C.createElement(Ke, {
                    labelProps: {
                        ariaLabel: "LogTypes",
                        labelValue: "Filter Log Types: "
                    },
                    disabled: !n,
                    options: h,
                    onTriggerUpdate: function(e) {
                        return I(e)
                    }
                }), C.createElement(mt, {
                    label: "Items per-page",
                    onChange: i,
                    options: st,
                    value: o,
                    className: "mb-2"
                })), U, C.createElement("div", {
                    className: "audit-log"
                }, (null !== (t = null == R ? void 0 : R.results) && void 0 !== t ? t : Array(o).fill({})).map(function(e, t) {
                    var n;
                    return C.createElement(ot, {
                        key: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "log-".concat(t),
                        log: e,
                        n: o,
                        offset: u,
                        isLoading: P
                    })
                })), U))
            };
            var mt = (0, a.A)(re.ms, {
                    target: "e88tm0e3"
                })({
                    name: "1lsto0t",
                    styles: "max-width:250px"
                }),
                dt = (0, a.A)("div", {
                    target: "e88tm0e2"
                })({
                    name: "1vtota4",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-bottom:8px"
                }),
                pt = (0, a.A)(re.$n, {
                    target: "e88tm0e1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                gt = (0, a.A)(re.$n, {
                    target: "e88tm0e0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                ft = n(46150),
                vt = n(23608),
                Et = n(64173),
                ht = n(41649),
                bt = n(45616),
                wt = [{
                    label: "Visible",
                    value: bt.v.VISIBLE
                }, {
                    label: "Friends Only",
                    value: bt.v.FRIENDS
                }, {
                    label: "Hidden",
                    value: bt.v.HIDDEN
                }];
            const yt = function(e) {
                var t, n, a, o, i = e.groupId,
                    c = (0, I.wA)(),
                    s = (0, S.Zp)(),
                    u = (0, te.P2)(),
                    m = u.data,
                    d = u.isLoading,
                    p = u.error,
                    g = u.isError,
                    f = C.useState(),
                    v = (0, l.A)(f, 2),
                    E = v[0],
                    h = v[1],
                    b = C.useState(!0),
                    w = (0, l.A)(b, 2),
                    y = w[0],
                    x = w[1],
                    A = C.useState(!0),
                    k = (0, l.A)(A, 2),
                    O = k[0],
                    M = k[1],
                    T = C.useState(!1),
                    j = (0, l.A)(T, 2),
                    R = j[0],
                    P = j[1],
                    G = (0, pe.XR)({
                        groupId: i
                    }, {
                        skip: !m.id
                    }),
                    L = G.data,
                    D = G.isLoading,
                    F = G.error,
                    $ = G.isError,
                    q = (0, pe.gi)({
                        groupId: i,
                        userId: m.id
                    }, {
                        skip: !m.id
                    }),
                    U = q.data,
                    B = q.isLoading,
                    _ = q.error,
                    z = q.isError;
                (0, C.useEffect)(function() {
                    var e;
                    if (U && L) {
                        L.privacy === bt.Vc.DEFAULT && U.visibility !== E && h(U.visibility);
                        var t = (null == U ? void 0 : U.isSubscribedToAnnouncements) || (null == U ? void 0 : U.isSubscribedToPosts);
                        x(t);
                        var n = null === (e = null == U ? void 0 : U.isSubscribedToEventAnnouncements) || void 0 === e || e;
                        M(n)
                    }
                }, [L, U]);
                var W = d || D || B,
                    V = (null == L ? void 0 : L.ownerId) === (null == U ? void 0 : U.userId),
                    Y = (0, pe.lY)(),
                    Q = (0, l.A)(Y, 2),
                    K = Q[0],
                    H = Q[1],
                    Z = H.isLoading,
                    ne = H.error,
                    le = H.isError,
                    oe = H.isSuccess,
                    ie = (0, pe.bZ)(),
                    ce = (0, l.A)(ie, 2),
                    se = ce[0],
                    ue = ce[1],
                    me = ue.isLoading,
                    de = ue.error,
                    ge = ue.isError,
                    fe = function() {
                        var e = (0, r.A)(N().mark(function e() {
                            return N().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return P(!1), e.next = 3, se({
                                            groupId: i,
                                            userId: m.id
                                        });
                                    case 3:
                                        e.sent.error || (c((0, ee.X)({
                                            title: "You left the group",
                                            icon: Et.Wc,
                                            message: "You are no longer a member",
                                            color: "success",
                                            timeout: 8e3
                                        })), s("/home/groups"));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return g ? C.createElement(ht.A, {
                    error: p,
                    statusCode: p.status
                }) : $ ? C.createElement(ht.A, {
                    error: F,
                    statusCode: F.status
                }) : z ? C.createElement(ht.A, {
                    error: _,
                    statusCode: _.status
                }) : C.createElement(C.Fragment, null, C.createElement(re.N3, null, C.createElement("h4", {
                    className: "text-center"
                }, "Membership Preferences")), C.createElement(re.BW, null, W ? C.createElement(re.fy, {
                    height: "250px"
                }) : C.createElement(C.Fragment, null, oe && C.createElement(re.$T, {
                    type: "success",
                    title: "Updated preferences",
                    slim: !0
                }, "Your preferences were saved successfully"), le && C.createElement(re.$T, {
                    type: "error",
                    title: "Error updating preferences"
                }, ne.status, " : ", null !== (t = null === (n = ne.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : ""), L.privacy === bt.Vc.DEFAULT && C.createElement(J.A, null, "Visibility ", C.createElement(re.ms, {
                    onChange: h,
                    value: E,
                    options: wt
                }), C.createElement("small", null, "Do you want everyone to see this group on your profile, just your friends to see it, or to keep it secret? This only affects your own profile.")), C.createElement("div", {
                    className: "my-2"
                }, C.createElement(ae.A, {
                    label: "Subscribe to Posts",
                    value: "isSubscribedToPosts",
                    defaultChecked: y,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        x(t)
                    }
                }), C.createElement(X.A, null, "Tick this to hear all the latest news and goss from this group")), C.createElement("div", {
                    className: "my-2"
                }, C.createElement(ae.A, {
                    label: "Subscribe to Event Announcements",
                    value: "isSubscribedToEventAnnouncements",
                    defaultChecked: O,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        M(t)
                    }
                }), C.createElement(X.A, null, "Tick this to receive notifications about events from this group")), C.createElement(re.$n, {
                    onClick: function() {
                        K({
                            groupId: i,
                            userId: m.id,
                            visibility: E,
                            isSubscribedToPosts: y,
                            isSubscribedToEventAnnouncements: O
                        })
                    },
                    loading: Z,
                    disabled: Z
                }, C.createElement(re.M2, {
                    icon: vt.hS
                }), " Save Preferences"))), C.createElement(re.N3, {
                    className: "mt-2"
                }, C.createElement("h4", {
                    className: "text-center"
                }, "Leave Group")), C.createElement(re.BW, null, W ? C.createElement(re.fy, {
                    height: "100px",
                    delay: 50
                }) : C.createElement(C.Fragment, null, ge && C.createElement(re.$T, {
                    type: "error",
                    title: "Error leaving group"
                }, de.status, " : ", null !== (a = null === (o = de.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : ""), C.createElement(re.uo, {
                    headerText: "Leave Group",
                    bodyText: "Are you sure you want to leave this group?",
                    confirmText: "Yes, Leave Group",
                    confirmCallback: fe,
                    cancelText: "Never Mind!",
                    cancelCallback: function() {
                        P(!1)
                    },
                    isOpen: R
                }), V ? C.createElement(re.$T, {
                    type: "warning",
                    title: "You own this group!"
                }, "You can't leave your own group, but you can delete the group over in General settings.") : C.createElement("p", null, "This group not your thing anymore? No problem."), C.createElement(re.$n, {
                    warning: !0,
                    onClick: function() {
                        P(!0)
                    },
                    loading: me,
                    disabled: V || me
                }, C.createElement(re.M2, {
                    icon: ft.db
                }), " Leave Group"))))
            };
            var xt = n(31226),
                At = n(86419),
                kt = n(12378),
                Nt = n(97071),
                Ot = n(72784),
                Ct = n(6457),
                It = n(61336),
                St = n(48995),
                Mt = n(31069);

            function Tt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function jt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Tt(Object(n), !0).forEach(function(t) {
                        (0, L.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tt(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var Rt = {
                id: "new",
                name: "",
                description: "",
                isSelfAssignable: !1,
                permissions: []
            };
            const Pt = function(e) {
                var t, n, a, o, i, s, u = e.group,
                    m = e.changeRoleLocalOrder,
                    d = e.changeRoleOffset,
                    p = e.roleOffset,
                    g = e.isGroupOwner,
                    f = (0, I.wA)(),
                    v = (0, S.Zp)(),
                    E = (0, S.g)(),
                    h = (0, C.useRef)(!0),
                    b = (0, de.Om)(),
                    y = C.useMemo(function() {
                        var e;
                        return "new" === E.roleId ? jt(jt({}, Rt), {}, {
                            requiresPurchase: "paid" === E.newRoleType
                        }, "paid" === E.newRoleType && {
                            productPriceTokens: Mt.TM,
                            productDuration: 1,
                            productDurationType: "months"
                        }) : null == u || null === (e = u.roles) || void 0 === e ? void 0 : e.find(function(e) {
                            return e.id === E.roleId
                        })
                    }, [u, E]),
                    A = C.useState({}),
                    k = (0, l.A)(A, 2),
                    O = k[0],
                    j = k[1],
                    R = C.useState(null),
                    G = (0, l.A)(R, 2),
                    $ = G[0],
                    q = G[1],
                    U = C.useState({}),
                    B = (0, l.A)(U, 2),
                    _ = B[0],
                    Y = B[1],
                    Q = C.useState(null != y && y.defaultRole ? "permissions" : "general"),
                    K = (0, l.A)(Q, 2),
                    H = K[0],
                    Z = K[1],
                    te = C.useState(null == y ? void 0 : y.requiresTwoFactor),
                    ne = (0, l.A)(te, 2),
                    oe = ne[0],
                    ie = ne[1],
                    se = C.useState(null == y ? void 0 : y.isAddedOnJoin),
                    ue = (0, l.A)(se, 2),
                    me = ue[0],
                    ge = ue[1],
                    fe = C.useState(null == y ? void 0 : y.isSelfAssignable),
                    ve = (0, l.A)(fe, 2),
                    Ee = ve[0],
                    he = ve[1],
                    be = C.useState((null == u ? void 0 : u.joinState) === bt.mm.OPEN),
                    we = (0, l.A)(be, 2),
                    ye = we[0],
                    Ae = we[1],
                    ke = C.useState(!1),
                    Ne = (0, l.A)(ke, 2),
                    Oe = Ne[0],
                    Ce = Ne[1],
                    Ie = C.useState((null == y ? void 0 : y.permissions) || []),
                    Se = (0, l.A)(Ie, 2),
                    Me = Se[0],
                    Te = Se[1],
                    je = C.useState(!1),
                    Re = (0, l.A)(je, 2),
                    Pe = Re[0],
                    Ge = Re[1],
                    Le = C.useState(null),
                    De = (0, l.A)(Le, 2),
                    Fe = De[0],
                    $e = De[1],
                    qe = C.useState(null),
                    Ue = (0, l.A)(qe, 2),
                    Be = Ue[0],
                    _e = Ue[1],
                    ze = (0, pe.gB)({
                        groupId: u.id
                    }),
                    We = ze.data,
                    Ve = ze.isLoading,
                    Ye = ze.isError,
                    Je = (0, pe.yg)(),
                    Xe = (0, l.A)(Je, 2),
                    Qe = Xe[0],
                    Ke = Xe[1],
                    He = Ke.isLoading,
                    Ze = Ke.isError,
                    et = Ke.error,
                    tt = (0, pe.NF)(),
                    nt = (0, l.A)(tt, 2),
                    rt = (nt[0], nt[1]),
                    lt = rt.isLoading,
                    at = rt.isError,
                    ot = rt.error,
                    it = (0, pe.mM)(),
                    ct = (0, l.A)(it, 2),
                    st = ct[0],
                    ut = ct[1],
                    mt = (ut.isLoading, ut.isError, ut.error, (0, pe.DN)()),
                    dt = (0, l.A)(mt, 2),
                    pt = dt[0],
                    gt = dt[1],
                    ft = gt.isLoading,
                    Et = gt.isError,
                    ht = gt.error,
                    wt = (0, Nt.DF)(),
                    yt = C.useState(!1),
                    Tt = (0, l.A)(yt, 2),
                    Pt = Tt[0],
                    Gt = Tt[1],
                    Lt = (0, Ct.tA)({
                        productId: null == y ? void 0 : y.productId
                    }, {
                        skip: !(null != y && y.productId),
                        refetchOnMountOrArgChange: !0
                    }),
                    Dt = Lt.data,
                    Ft = Lt.isFetching,
                    $t = Lt.isUninitialized,
                    qt = (0, Ot.Kf)({
                        userId: null == u ? void 0 : u.ownerId,
                        groupId: null == u ? void 0 : u.id,
                        active: !0
                    }, {
                        skip: !u || !(null != y && y.productId),
                        refetchOnMountOrArgChange: !0
                    }),
                    Ut = qt.data,
                    Bt = void 0 === Ut ? [] : Ut,
                    _t = qt.isFetching,
                    zt = qt.isUninitialized,
                    Wt = C.useMemo(function() {
                        var e;
                        return (null === (e = zt ? [] : Bt) || void 0 === e ? void 0 : e.filter(function(e) {
                            var t, n = e.id,
                                r = e.active,
                                l = e.archived;
                            return r && !l && !$t && (null == Dt || null === (t = Dt.parentListings) || void 0 === t ? void 0 : t.includes(n))
                        })) || []
                    }, [Dt, $t, Bt, zt]),
                    Vt = He || lt || ft || Ve || Ft || _t,
                    Yt = (null == u ? void 0 : u.joinState) === bt.mm.OPEN ? "Your group is already set to Free Join, so enabling this option won’t have any effect. Subscribers will still join automatically." : "When enabled, anyone can purchase this role and join the group, regardless of the group’s join rules. This option overrides standard join settings.";
                (0, C.useEffect)(function() {
                    if (Dt) {
                        if (Ce(Dt.groupAccessRemove), (null == u ? void 0 : u.joinState) === bt.mm.OPEN) return Ae(!0), void q(jt(jt({}, $), {}, {
                            groupAccess: !0
                        }));
                        Ae(Dt.groupAccess)
                    }
                }, [Dt]);
                var Jt = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = {};
                    "new" === (null == y ? void 0 : y.id) && (t = jt({}, y)), e || (ie(null == y ? void 0 : y.requiresTwoFactor), ge(null == y ? void 0 : y.isAddedOnJoin), he(null == y ? void 0 : y.isSelfAssignable), Te((null == y ? void 0 : y.permissions) || [])), d(0), j(t), q(null)
                };
                (0, C.useEffect)(function() {
                    Jt(), Z(null != y && y.defaultRole ? "permissions" : "general")
                }, [u, E]), (0, C.useEffect)(function() {
                    h.current ? h.current = !1 : ((null == y ? void 0 : y.requiresTwoFactor) !== oe && j(jt(jt({}, O), {}, {
                        requiresTwoFactor: oe
                    })), (null == y ? void 0 : y.isAddedOnJoin) !== me && j(jt(jt({}, O), {}, {
                        isAddedOnJoin: me
                    })), (null == y ? void 0 : y.isSelfAssignable) !== Ee && j(jt(jt({}, O), {}, {
                        isSelfAssignable: Ee
                    })), (null == y ? void 0 : y.permissions) !== Me && j(jt(jt({}, O), {}, {
                        permissions: Me
                    })))
                }, [oe, me, Ee, Me]), (0, C.useEffect)(function() {
                    0 !== p && j(jt(jt({}, O), {}, {
                        order: p + y.order
                    }))
                }, [p]);
                var Xt = (0, de.EI)(We),
                    Qt = C.useMemo(function() {
                        return (0, xe.Tp)({
                            permissionName: Fe,
                            permissionsMap: Xt
                        })
                    }, [Fe, Xt]);
                if ((0, C.useEffect)(function() {
                        if (Me.length > 0 && Xt && Object.keys(Xt).length > 0) {
                            var e = Me.filter(function(e) {
                                return !e.includes("*") && !Xt[e]
                            });
                            e.length > 0 && _e(e)
                        }
                    }, [Me, Xt]), !y || Ve || Ye) return null;
                var Kt = function(e) {
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
                        j(jt(jt({}, O), {}, (0, L.A)({}, n, r))), Y(jt(jt({}, _), {}, (0, L.A)({}, n, e.target.checkValidity())))
                    },
                    Ht = function() {
                        var e = (0, r.A)(N().mark(function e() {
                            var t, n, r, l;
                            return N().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (Gt(!1), "new" !== (t = jt({}, O)).id) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.prev = 3, e.next = 6, Qe({
                                            groupId: u.id,
                                            data: t
                                        }).unwrap();
                                    case 6:
                                        !(n = e.sent).error && null != n && n.id && v("../roles/".concat(null == n ? void 0 : n.id)), e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(3), wt({
                                            error: e.t0
                                        }) && Gt(!0);
                                    case 13:
                                        e.next = 28;
                                        break;
                                    case 15:
                                        if (!(Object.keys(O).length > 0)) {
                                            e.next = 28;
                                            break
                                        }
                                        return e.prev = 16, e.next = 19, st({
                                            groupId: u.id,
                                            roleId: y.id,
                                            productId: (null == Dt ? void 0 : Dt.id) || null,
                                            productData: $,
                                            roleData: t
                                        }).unwrap();
                                    case 19:
                                        Jt(!0), e.next = 28;
                                        break;
                                    case 22:
                                        if (e.prev = 22, e.t1 = e.catch(16), !wt({
                                                error: e.t1
                                            })) {
                                            e.next = 27;
                                            break
                                        }
                                        return Gt(!0), e.abrupt("return");
                                    case 27:
                                        f((0, ee.X)({
                                            title: "Failed to update role",
                                            icon: x.zp,
                                            message: null !== (r = null === (l = e.t1.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 28:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [3, 10],
                                [16, 22]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Zt = function() {
                        var e = (0, r.A)(N().mark(function e(t) {
                            return N().wrap(function(e) {
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
                                        Ge(!1), v("../roles"), e.next = 15;
                                        break;
                                    case 14:
                                        Ge(!0);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [2, 7]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    en = 0 === y.order,
                    tn = "new" === y.id,
                    nn = y.requiresPurchase && !g,
                    rn = P({
                        groupMember: null == u ? void 0 : u.myMember,
                        permission: "group-default-role-manage"
                    }),
                    ln = P({
                        groupMember: null == u ? void 0 : u.myMember,
                        permission: "group-roles-assign"
                    }),
                    an = y.defaultRole && !rn,
                    on = !y.requiresPurchase && !y.defaultRole && !en,
                    cn = !y.defaultRole && !en,
                    sn = cn && !tn;
                return C.createElement("div", null, at && !Pt && C.createElement(re.$T, {
                    title: "Error updating role",
                    type: "error"
                }, "Failed to update role: ", null == ot || null === (t = ot.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), Ze && !Pt && C.createElement(re.$T, {
                    title: "Error creating role",
                    type: "error"
                }, "Failed to create role: ", null == et || null === (n = et.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), C.createElement(T.A, {
                    isOpen: Pe
                }, C.createElement(re.N3, {
                    className: "text-center"
                }, C.createElement("h4", null, "Are you sure?")), C.createElement(re.BW, null, C.createElement(V.A, null, Et && C.createElement(re.$T, {
                    title: "Error deleting role",
                    type: "error"
                }, "Failed to delete role: ", null !== (a = null == ht || null === (o = ht.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : "Unexpected error occurred"), C.createElement("p", null, "This will delete the role and all members with this role will be demoted to the lowest role. This action cannot be undone.")), C.createElement("div", {
                    className: "d-flex flex-row justify-content-md-center"
                }, C.createElement(re.$n, {
                    danger: !0,
                    onClick: function() {
                        Zt(!0)
                    },
                    loading: ft,
                    expand: !0
                }, C.createElement(re.M2, {
                    icon: F.yL
                }), " Yes, Delete"), " ", C.createElement(re.$n, {
                    onClick: function() {
                        Ge(!1)
                    },
                    disabled: ft,
                    expand: !0
                }, "Cancel")))), null == y ? C.createElement("div", null, C.createElement("p", null, "Pick a role to edit.")) : C.createElement("div", null, tn ? C.createElement("h6", {
                    className: "text-center"
                }, "New", y.requiresPurchase && " Paid", " Role") : C.createElement("h6", {
                    className: "text-center"
                }, nn ? "Viewing" : "Editing", " - ", y.name), function() {
                    var e;
                    if (null == y || !y.createdAt || !y.requiresPurchase || Wt.length) return null;
                    var t = "activate its associated subscription";
                    return C.createElement(re.$T, {
                        type: "info",
                        title: "No Active Subscriptions"
                    }, "Before people can buy this role, ", g ? "you'll" : "the group owner will", " need to", " ", g && !$t && null != Dt && null !== (e = Dt.parentListings) && void 0 !== e && e.length ? C.createElement(M.N_, {
                        to: "/home/marketplace/storefront/subscriptions"
                    }, t) : t, " ", "in ", g ? "your" : "their", " Store. ", g ? "You" : "The Group Owner", " can also give the product and listing their own images, descriptions and other details from there.")
                }(), !y.defaultRole && C.createElement(W.A, null, C.createElement(ce.A, {
                    tabs: [{
                        name: "General",
                        id: "general",
                        icon: c.dB,
                        condition: !(null != y && y.defaultRole)
                    }, {
                        name: "Permissions",
                        id: "permissions",
                        icon: kt.DW,
                        condition: !0
                    }],
                    selected: H,
                    onChange: function(e) {
                        Z(e)
                    }
                })), C.createElement(It.A, {
                    activeTab: H
                }, C.createElement(St.A, {
                    tabId: "general"
                }, sn && !nn && C.createElement(C.Fragment, null, C.createElement(W.A, null, C.createElement("h6", {
                    className: "text-center"
                }, "Change role order"), C.createElement("div", {
                    className: "d-flex flex-row justify-content-md-center"
                }, C.createElement(re.$n, {
                    onClick: function() {
                        m({
                            offset: -1,
                            roleId: y.id
                        })
                    },
                    expand: !0
                }, C.createElement(re.M2, {
                    icon: At.w2
                }), " Move Up"), " ", C.createElement(re.$n, {
                    onClick: function() {
                        m({
                            offset: 1,
                            roleId: y.id
                        })
                    },
                    expand: !0
                }, C.createElement(re.M2, {
                    icon: xt.Jt
                }), " Move Down"))), " ", " "), C.createElement(W.A, {
                    className: "mb-2"
                }, C.createElement(z.A, null, C.createElement(re.pd, {
                    type: "text",
                    name: "name",
                    value: null != O.name ? O.name : y.name,
                    onChange: Kt,
                    maxLength: 64,
                    required: !0,
                    disabled: nn || y.defaultRole,
                    placeholder: "Enter Role's Name"
                }), !1 === _.name && C.createElement(J.A, null, "Must be between 1 and 64 characters."))), C.createElement(W.A, {
                    className: "mb-3"
                }, C.createElement(z.A, null, C.createElement(re.TM, {
                    type: "textarea",
                    name: "description",
                    value: null != O.description ? O.description : y.description,
                    onChange: Kt,
                    maxLength: 256,
                    disabled: nn || y.defaultRole,
                    placeholder: "Enter Role's Description",
                    inputStyle: {
                        height: "100px"
                    }
                }), !1 === _.description && C.createElement(J.A, null, "Must be 256 characters or less."))), cn && !y.requiresPurchase && ln && C.createElement(W.A, {
                    className: "my-2"
                }, C.createElement(ae.A, {
                    label: "Assign On Join",
                    value: "isAddedOnJoin",
                    defaultChecked: null != O.isAddedOnJoin ? O.isAddedOnJoin : y.isAddedOnJoin,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        ge(t)
                    }
                }), C.createElement(X.A, null, "If enabled, new members will be assigned this role when they join the group. This will not affect existing members.")), on && C.createElement(W.A, {
                    className: "my-2"
                }, C.createElement(ae.A, {
                    label: "Self Assignable",
                    value: "isSelfAssignable",
                    defaultChecked: Ee,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        he(t)
                    }
                }), C.createElement(X.A, null, "Allows members of the group to assign this role to themselves.")), C.createElement(W.A, {
                    className: "my-3"
                }, C.createElement(ae.A, {
                    label: "Require Two-Factor Authentication",
                    value: "requiresTwoFactor",
                    defaultChecked: oe,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        return ie(t)
                    }
                }), C.createElement(X.A, null, "Requires members to have 2FA before permissions apply.")), y.requiresPurchase && C.createElement(C.Fragment, null, C.createElement(W.A, {
                    className: "my-2"
                }, C.createElement(ae.A, {
                    label: "Enable Free Join for Subscribers",
                    value: "productGroupAccess",
                    defaultChecked: ye,
                    onChangeCallback: function(e) {
                        var t, n, r, l = e.checked;
                        t = l, n = jt(jt({}, O), {}, {
                            productGroupAccess: t
                        }), r = jt(jt({}, $), {}, {
                            groupAccess: t
                        }), t || (n.productGroupAccessRemove = void 0, r.groupAccessRemove = !1, Ce(!1)), Ae(t), j(n), q(r)
                    },
                    disabled: (null == u ? void 0 : u.joinState) === bt.mm.OPEN
                }), C.createElement(X.A, null, Yt)), (null != O.productGroupAccess ? O.productGroupAccess : ye) && C.createElement(W.A, {
                    className: "my-2"
                }, C.createElement(ae.A, {
                    label: "Remove Members After Expiration",
                    value: "productGroupAccessRemove",
                    defaultChecked: null != O.productGroupAccessRemove ? O.productGroupAccessRemove : Oe,
                    onChangeCallback: function(e) {
                        var t, n = e.checked;
                        Ce(t = n), j(jt(jt({}, O), {}, {
                            productGroupAccessRemove: t
                        })), q(jt(jt({}, $), {}, {
                            groupAccessRemove: t
                        }))
                    }
                }), C.createElement(X.A, null, "If enabled, group members with this role are removed from the group entirely when their subscription ends. Note that this will remove any member whose subscription ends, whether they bought their way in or not."))), y.requiresPurchase && tn && C.createElement(W.A, null, C.createElement(z.A, null, C.createElement(J.A, {
                    htmlFor: "productPriceTokens"
                }, "Credits", "forevers" === y.productDurationType ? "" : " per ".concat(1 === y.productDuration ? y.productDurationType.replace(/s$/, "") : "".concat(y.productDuration, " ").concat(y.productDurationType)))), C.createElement(z.A, null, C.createElement(re.pd, {
                    type: "number",
                    name: "productPriceTokens",
                    value: null != O.productPriceTokens ? O.productPriceTokens : y.productPriceTokens,
                    onChange: Kt,
                    required: !0,
                    step: "1",
                    min: Mt.TM,
                    max: Mt.RI
                }), !1 === _.productPriceTokens && C.createElement(J.A, null, "Must be a whole number between ", C.createElement(re.eD, null), Mt.TM.toLocaleString(), " and ", C.createElement(re.eD, null), Mt.RI.toLocaleString(), "."))), y.productId && C.createElement("p", null, C.createElement("small", null, g ? "You" : "The Group Owner", " can manage details and subscription behaviour of this role's", " ", C.createElement(M.N_, {
                    to: "/home/marketplace/storefront/products#".concat(y.productId)
                }, "associated product"), !$t && null != Dt && null !== (i = Dt.parentListings) && void 0 !== i && i.length ? C.createElement(C.Fragment, null, ", and the details, price and availability of the product's", " ", C.createElement(M.N_, {
                    to: "/home/marketplace/storefront/listings#".concat(Dt.parentListings[0])
                }, "associated listing"), " ") : " ", g ? "in your Store" : "in their Store", "."))), C.createElement(St.A, {
                    tabId: "permissions"
                }, Ye && C.createElement(re.$T, {
                    title: "Error",
                    type: "error"
                }, "There was an error loading permissions."), (null == y ? void 0 : y.defaultRole) && C.createElement(C.Fragment, null, C.createElement("p", null, y.description), C.createElement("hr", null)), en || an ? C.createElement("p", null, "You can't edit the ", en ? "Group Owner" : "default", " role.", " ", en ? "It must always have all" : "You lack the required", " permissions.") : y.requiresPurchase && !g ? C.createElement("p", null, "You can't edit a paid role if you are not the group owner.") : C.createElement("div", null, We.map(function(e) {
                    var t = e.name,
                        n = Xt[t],
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
                    }, C.createElement(ae.A, {
                        label: n.displayName,
                        value: n.name,
                        defaultChecked: Me.includes(n.name),
                        disabled: !!r,
                        onChangeCallback: function(e) {
                            var t = e.checked;
                            ! function(e, t) {
                                var n;
                                if (t) {
                                    var r = (0, xe.Yl)({
                                        permissionName: e,
                                        permissionsMap: Xt
                                    });
                                    return Te([].concat((0, D.A)(Me), [e], (0, D.A)(r)))
                                }
                                var l = Xt[e];
                                if (null !== (n = l.computedDependedOnBy) && void 0 !== n && n.size && Me.some(function(e) {
                                        return l.computedDependedOnBy.has(e)
                                    })) return $e(e);
                                Te(Me.filter(function(t) {
                                    return t !== e
                                }))
                            }(n.name, t)
                        }
                    }), (n.help || n.dependsOn) && C.createElement(X.A, null, n.help, n.help && n.dependsOn && " ", n.dependsOn && C.createElement(C.Fragment, null, "Requires ", (0, D.A)(n.dependsOn).map(function(e) {
                        return "“".concat(Xt[e].displayName || e, "”")
                    }).join(", "), "."), r && C.createElement("div", null, r)))
                })))), !an && (nn ? C.createElement("p", null, C.createElement("small", null, "Only the Group Owner can edit paid roles.")) : C.createElement("div", {
                    className: "d-flex flex-row align-content-center mt-1\n                  ".concat(tn || en || y.defaultRole ? "justify-content-end" : "justify-content-between")
                }, !tn && !en && !y.defaultRole && C.createElement(re.$n, {
                    danger: !0,
                    onClick: function() {
                        Zt(!1)
                    },
                    disabled: Vt
                }, C.createElement(le.A, {
                    icon: F.yL
                }), " Delete"), C.createElement("div", {
                    className: "d-flex flex-row"
                }, C.createElement(re.$n, {
                    neutral: !0,
                    onClick: function() {
                        Jt()
                    },
                    disabled: Vt || 0 === Object.keys(O).length
                }, C.createElement(le.A, {
                    icon: w.GR
                }), " ", tn ? "Clear" : "Cancel"), " ", C.createElement(re.$n, {
                    loading: Vt && !ft,
                    disabled: Vt || 0 === Object.keys(O).length || Object.values(_).includes(!1),
                    onClick: Ht
                }, C.createElement(le.A, {
                    icon: vt.hS
                }), " Save"))))), C.createElement(re.uo, {
                    isOpen: !!Fe,
                    confirmCallback: function() {
                        return Te(Me.filter(function(e) {
                            return e !== Fe && !Qt.has(e)
                        })), void $e(null)
                    },
                    cancelCallback: function() {
                        return $e(null)
                    },
                    headerText: "Role Permission Dependencies",
                    confirmText: "Turn Off",
                    cancelText: "Go Back"
                }, C.createElement("div", null, C.createElement("p", null, "Turning off “", null === (s = Xt[Fe]) || void 0 === s ? void 0 : s.displayName, "” will also turn off permissions that currently require it:"), C.createElement("ul", null, (0, D.A)(Qt).filter(function(e) {
                    return Me.includes(e)
                }).map(function(e) {
                    var t = Xt[e];
                    return C.createElement("li", {
                        key: e
                    }, "“", t.displayName, "”")
                })), C.createElement("strong", null, "Are you sure you want to turn this off?"))), C.createElement(re.uo, {
                    isOpen: !!Be,
                    confirmCallback: function() {
                        return Te(Me.filter(function(e) {
                            return !Be.includes(e)
                        })), void _e(null)
                    },
                    cancelCallback: function() {
                        return _e(null)
                    },
                    headerText: "Invalid Permissions Detected",
                    confirmText: "Remove Permissions",
                    cancelText: "Keep Permissions"
                }, C.createElement("div", null, C.createElement("p", null, "This role contains permissions that no longer exist or are unavailable for your group."), C.createElement("p", null, "These permissions will be removed from the role: ", C.createElement("strong", null, null == Be ? void 0 : Be.join(", "))))))
            };
            var Gt = n(2235),
                Lt = n(83697),
                Dt = n(39848);
            const Ft = function(e) {
                var t, n, r, l = e.group,
                    a = e.roleLocalOffset,
                    o = e.isGroupOwner,
                    i = (0, de.Om)(),
                    c = (0, S.zy)(),
                    s = (0, S.g)(),
                    u = (0, de.a$)({
                        withEconomyAccount: !0
                    }).user,
                    m = C.useMemo(function() {
                        return "new" !== s.roleId && s.roleId
                    }, [s]),
                    d = (0, te.w_)().data,
                    p = void 0 === d ? [] : d,
                    g = (null == u || null === (t = u.economyAccount) || void 0 === t ? void 0 : t.accountSellerStatus) === Mt.Tp.INVITED || (null == u || null === (n = u.economyAccount) || void 0 === n ? void 0 : n.accountSellerStatus) === Mt.Tp.REGISTERED,
                    f = p.includes("permission-can-sell-products"),
                    v = (0, D.A)(null != l && l.roles ? l.roles : []).sort(function(e, t) {
                        var n = e.order,
                            r = t.order;
                        return e.id === m ? (n += a) === t.order && (a > 0 ? n += 1 : n -= 1) : t.id === m && (r += a) === e.order && (a > 0 ? r += 1 : r -= 1), n < r ? -1 : 1
                    }) || [],
                    E = v.length >= bt.D6,
                    h = null == l || null === (r = l.myMember) || void 0 === r ? void 0 : r.permissions,
                    b = v.map(function(e, t) {
                        var n, r = [],
                            a = null;
                        0 === e.order ? (r.push(C.createElement($t, {
                            key: "management-header"
                        }, "Management Roles")), a = C.createElement(C.Fragment, null, C.createElement(re.M2, {
                            icon: Se.zq,
                            title: "Management Role"
                        }), " ")) : e.permissions.includes("group-instance-moderate") ? a = C.createElement(C.Fragment, null, C.createElement(re.M2, {
                            icon: Lt.im,
                            title: "Instance Moderator Role"
                        }), " ") : e.requiresPurchase ? a = C.createElement(C.Fragment, null, C.createElement(re.M2, {
                            icon: Dt.default,
                            title: "Paid Role"
                        }), " ") : e.defaultRole && (r.push(C.createElement($t, {
                            key: "default-header"
                        }, "Default Role")), a = C.createElement(C.Fragment, null, C.createElement(re.M2, {
                            icon: Gt.Ys,
                            title: "Default Role"
                        }), " ")), e.isManagementRole || e.defaultRole || null === (n = v[t - 1]) || void 0 === n || !n.isManagementRole || r.push(C.createElement($t, {
                            key: "member-header"
                        }, "Member Roles"));
                        var o = (0 === (null == l ? void 0 : l.memberRank) || "new" === e.id || e.order > (null == l ? void 0 : l.memberRank)) && (h.includes("*") || 0 === e.permissions.filter(function(e) {
                            return !h.includes(e)
                        }).length);
                        return r.push(i || o ? C.createElement(Bt, null, C.createElement(zt, {
                            key: e.id,
                            to: "/home/group/".concat(l.id, "/settings/roles/").concat(e.id),
                            className: e.id === m ? "selected" : ""
                        }, a, e.name + ("new" === e.id ? " (unsaved new role)" : ""))) : C.createElement(Ut, {
                            key: e.id
                        }, a, e.name + ("new" === e.id ? " (unsaved new role)" : ""))), r
                    });
                return C.createElement(C.Fragment, null, E && C.createElement(j.A, {
                    role: "alert",
                    color: "warning"
                }, "This group has reached maximum number of roles"), C.createElement(qt, null, b, C.createElement("li", null, C.createElement(_t, {
                    to: "/home/group/".concat(l.id, "/settings/roles/new"),
                    end: !0,
                    disabled: E
                }, "Create Role")), o && g && C.createElement("li", null, f ? C.createElement(_t, {
                    to: "/home/group/".concat(l.id, "/settings/roles/new/paid"),
                    end: !0,
                    disabled: E
                }, "Create Paid Role") : C.createElement(re.$T, {
                    slim: !0
                }, "Want to create a paid role? Find out more and sign up", " ", C.createElement(M.N_, {
                    to: "/home/marketplace/wallet",
                    state: {
                        redirectTo: c.pathname
                    }
                }, "in your Wallet"), "."))))
            };
            var $t = (0, a.A)("h5", {
                    target: "e1hiny755"
                })({
                    name: "1gttmjq",
                    styles: "margin:0;padding:0;font-size:1.2rem;font-weight:bold"
                }),
                qt = (0, a.A)("ul", {
                    target: "e1hiny754"
                })({
                    name: "wghgqz",
                    styles: "list-style-type:none;padding:0;margin-bottom:0"
                }),
                Ut = (0, a.A)("li", {
                    target: "e1hiny753"
                })({
                    name: "12guyxn",
                    styles: "padding:8px;margin-bottom:8px;border-radius:4px;background-color:#141519;opacity:0.3"
                }),
                Bt = (0, a.A)("li", {
                    target: "e1hiny752"
                })({
                    name: "1hcx8jb",
                    styles: "padding:0"
                }),
                _t = (0, a.A)(M.k2, {
                    target: "e1hiny751"
                })({
                    name: "1ekamc",
                    styles: "display:inline-block;padding:5px;margin-bottom:8px;border-radius:4px;width:100%;color:inherit;background-color:#064b5c;border:#064b5c solid 2px;text-align:center;flex:1;:hover{background-color:#064b5c;border-color:#086c84;text-decoration:none;}&.active{background-color:#454b54;}"
                }),
                zt = (0, a.A)(_t, {
                    target: "e1hiny750"
                })({
                    name: "hlgyoz",
                    styles: "background-color:transparent;border-color:transparent;text-align:left;:hover{background-color:#282b31;border-color:#282b31;}&.active{background-color:#454b54;border-color:#454b54;}"
                }),
                Wt = n(71853);
            const Vt = function(e) {
                var t = e.group,
                    n = (0, de.Om)(),
                    r = (0, S.zy)(),
                    a = C.useState(0),
                    o = (0, l.A)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = (0, I.d4)(function(e) {
                        var t;
                        return null === (t = e.group) || void 0 === t || null === (t = t.role) || void 0 === t ? void 0 : t.error
                    }),
                    u = (0, te.P2)(),
                    m = u.data,
                    d = (u.isLoading, u.isError, u.error, (null == t ? void 0 : t.ownerId) === (null == m ? void 0 : m.id));
                C.useEffect(function() {
                    c(0)
                }, [r]);
                return C.createElement(Wt.A, {
                    loading: !t.roles
                }, s && C.createElement(re.$T, {
                    type: "error",
                    title: "An error occurred",
                    message: s.message
                }), C.createElement(re.N3, null, C.createElement("h4", {
                    className: "text-center"
                }, "Roles")), C.createElement(re.BW, null, C.createElement(Yt, null, C.createElement(Jt, null, C.createElement(Ft, {
                    group: t,
                    roleLocalOffset: i,
                    isGroupOwner: d
                })), C.createElement(Pt, {
                    group: t,
                    changeRoleLocalOrder: function(e) {
                        var r = e.roleId,
                            l = e.offset,
                            a = t.roles.find(function(e) {
                                return e.id === r
                            });
                        if (!a) return console.error("Role ".concat(r, " not found when reordering")), 0;
                        var o = t.roles.find(function(e) {
                                return e.order === a.order + (i + l)
                            }),
                            s = i + l;
                        return 0 !== (null == o ? void 0 : o.order) && (a.isManagementRole || null == o || !o.isManagementRole) && (!a.isManagementRole || null != o && o.isManagementRole) && (a.order + s > (null == t ? void 0 : t.memberRank) || n) && a.order + s < t.roles.length ? (c(s), s) : i
                    },
                    changeRoleOffset: c,
                    roleOffset: i,
                    isGroupOwner: d
                }))))
            };
            var Yt = (0, a.A)(re.fI, {
                    target: "eaqb3yw1"
                })({
                    name: "ikx90a",
                    styles: "display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:stretch;>*{flex:1;}"
                }),
                Jt = (0, a.A)("div", {
                    target: "eaqb3yw0"
                })({
                    name: "1jwryq8",
                    styles: "margin-right:15px"
                });

            function Xt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Qt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Xt(Object(n), !0).forEach(function(t) {
                        (0, L.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xt(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var Kt = C.lazy(function() {
                    return Promise.all([n.e(1952), n.e(3015), n.e(8242), n.e(4736), n.e(6313), n.e(6683), n.e(7596), n.e(5532)]).then(n.bind(n, 67596))
                }),
                Ht = [{
                    label: "Open",
                    value: bt.mm.OPEN
                }, {
                    label: "Closed",
                    value: bt.mm.CLOSED
                }, {
                    label: "Invite Only",
                    value: bt.mm.INVITE
                }, {
                    label: "Request Invite",
                    value: bt.mm.REQUEST
                }];
            const Zt = function(e) {
                var t, n, a, o, i, c, s, u, m, d, p, g, f, v, E, h, b = e.group,
                    w = (0, te.p$)().data,
                    y = null !== (t = null == b ? void 0 : b.transferTargetId) && void 0 !== t ? t : null,
                    k = (0, I.wA)(),
                    M = (0, S.Zp)(),
                    j = C.useState({
                        name: b.name,
                        shortCode: b.shortCode,
                        description: b.description,
                        isSearchable: b.isSearchable,
                        joinState: b.joinState,
                        allowGroupJoinPrompt: b.allowGroupJoinPrompt,
                        language: b.languages,
                        rules: b.rules
                    }),
                    R = (0, l.A)(j, 2),
                    se = R[0],
                    ue = R[1],
                    me = C.useState(!1),
                    de = (0, l.A)(me, 2),
                    ge = de[0],
                    fe = de[1],
                    ve = C.useState(!1),
                    Ee = (0, l.A)(ve, 2),
                    he = Ee[0],
                    be = Ee[1],
                    we = C.useState(!1),
                    ye = (0, l.A)(we, 2),
                    xe = ye[0],
                    Ae = ye[1],
                    ke = C.useState(!1),
                    Ne = (0, l.A)(ke, 2),
                    Oe = Ne[0],
                    Ce = Ne[1],
                    Se = C.useState(null),
                    Te = (0, l.A)(Se, 2),
                    je = Te[0],
                    Re = Te[1],
                    Ge = C.useState(!1),
                    Le = (0, l.A)(Ge, 2),
                    De = Le[0],
                    Fe = Le[1],
                    $e = C.useState(!1),
                    qe = (0, l.A)($e, 2),
                    Ue = qe[0],
                    _e = qe[1],
                    ze = C.useState(null),
                    We = (0, l.A)(ze, 2),
                    Ye = We[0],
                    Je = We[1],
                    Xe = C.useState(!1),
                    Qe = (0, l.A)(Xe, 2),
                    Ke = Qe[0],
                    He = Qe[1],
                    Ze = C.useState(!1),
                    et = (0, l.A)(Ze, 2),
                    tt = et[0],
                    nt = et[1],
                    rt = C.useState(!1),
                    lt = (0, l.A)(rt, 2),
                    at = lt[0],
                    ot = lt[1],
                    it = C.useState(null),
                    ct = (0, l.A)(it, 2),
                    st = ct[0],
                    mt = ct[1],
                    dt = C.useState(null),
                    pt = (0, l.A)(dt, 2),
                    gt = (pt[0], pt[1]),
                    ft = C.useState(!1),
                    vt = (0, l.A)(ft, 2),
                    Et = vt[0],
                    ht = vt[1],
                    wt = C.useState(null !== (n = b.languages) && void 0 !== n ? n : []),
                    xt = (0, l.A)(wt, 2),
                    At = xt[0],
                    kt = xt[1],
                    Ot = C.useState(null !== (a = b.links) && void 0 !== a ? a : []),
                    Ct = (0, l.A)(Ot, 2),
                    It = Ct[0],
                    St = Ct[1],
                    Mt = C.useState(null),
                    Tt = (0, l.A)(Mt, 2),
                    jt = Tt[0],
                    Rt = Tt[1],
                    Pt = C.useState(null),
                    Gt = (0, l.A)(Pt, 2),
                    Lt = (Gt[0], Gt[1]),
                    Dt = (0, I.d4)(function(e) {
                        return e.currentUser.isMod
                    }),
                    Ft = (null == b ? void 0 : b.ownerId) === (null == w ? void 0 : w.id),
                    $t = (0, pe.Jb)(),
                    qt = (0, l.A)($t, 2),
                    Ut = qt[0],
                    Bt = qt[1],
                    _t = Bt.isError,
                    zt = Bt.isLoading,
                    Wt = Bt.error,
                    Yt = (0, Nt.DF)(),
                    Jt = C.useState(!1),
                    Xt = (0, l.A)(Jt, 2),
                    Zt = Xt[0],
                    tn = Xt[1],
                    nn = (0, pe.Lh)(),
                    rn = (0, l.A)(nn, 2),
                    ln = rn[0],
                    an = rn[1],
                    on = an.isError,
                    cn = an.isLoading,
                    sn = an.error,
                    un = an.isSuccess,
                    mn = (0, te.w_)().data,
                    dn = void 0 === mn ? [] : mn,
                    pn = (0, H.G)().data,
                    gn = null !== (o = null == pn || null === (i = pn.constants) || void 0 === i || null === (i = i.LANGUAGE) || void 0 === i ? void 0 : i.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== o ? o : K.RY,
                    fn = [{
                        value: "none",
                        label: "none"
                    }].concat((0, D.A)(Object.keys(gn).map(function(e) {
                        return {
                            value: e,
                            label: gn[e]
                        }
                    }))),
                    vn = (null == Ye || null === (c = Ye.user) || void 0 === c ? void 0 : c.id) && (null == b ? void 0 : b.id) && null === y,
                    En = (0, pe.is)({
                        groupId: null == b ? void 0 : b.id,
                        transferTargetId: null == Ye || null === (s = Ye.user) || void 0 === s ? void 0 : s.id
                    }, {
                        skip: !vn || !(null != b && b.id),
                        refetchOnMountOrArgChange: !0
                    }),
                    hn = En.data,
                    bn = En.isFetching,
                    wn = En.isError,
                    yn = En.error,
                    xn = null !== y,
                    An = (0, ne.vf)(y, {
                        skip: !xn,
                        refetchOnMountOrArgChange: !0
                    }),
                    kn = An.data,
                    Nn = An.isFetching,
                    On = An.isError,
                    Cn = An.error,
                    In = (0, pe.NV)(),
                    Sn = (0, l.A)(In, 2),
                    Mn = Sn[0],
                    Tn = Sn[1],
                    jn = (Tn.data, Tn.isFetching),
                    Rn = Tn.isError,
                    Pn = Tn.error,
                    Gn = (0, pe.Kp)(),
                    Ln = (0, l.A)(Gn, 2),
                    Dn = Ln[0],
                    Fn = Ln[1],
                    $n = (Fn.data, Fn.isFetching),
                    qn = Fn.isError,
                    Un = Fn.error;
                C.useEffect(function() {
                    un ? M("/home/groups") : (He(!1), fe(!1))
                }, [cn]), C.useEffect(function() {
                    if (xe && Ye && bn && Ce(!0), !bn && xe && hn && !wn) {
                        Ce(!1);
                        var e = function(e) {
                            var t = {
                                valid: !1,
                                reasons: []
                            };
                            if (e) {
                                for (var n, r = 0, a = Object.entries(e); r < a.length; r++) {
                                    var o = (0, l.A)(a[r], 2),
                                        i = o[0];
                                    !1 === o[1] && t.reasons.push(i)
                                }
                                t.valid = !((null === (n = t.reasons) || void 0 === n ? void 0 : n.length) > 0)
                            }
                            return t
                        }(hn.requirements);
                        Re(e), Ae(!1), be(!1), Fe(!0)
                    }
                    var t;
                    !bn && xe && wn && (Ce(!1), Ae(!1), Je(null), k((0, ee.X)({
                        title: "Error Validating Group Transfer",
                        icon: x.zp,
                        message: "".concat(null == yn || null === (t = yn.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                        color: "error",
                        timeout: 3e3
                    })))
                }, [xe, Ye, bn, wn, hn]), C.useEffect(function() {
                    var e;
                    (Nn || On || !kn || Je({
                        user: kn
                    }), !Nn && On) && k((0, ee.X)({
                        title: "Error Fetching New Owner Data",
                        icon: x.zp,
                        message: "".concat(null == Cn || null === (e = Cn.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message),
                        color: "error",
                        timeout: 3e3
                    }))
                }, [Nn, kn, On]);
                var Bn = function(e) {
                        var t = e.target.name,
                            n = "checkbox" === e.target.getAttribute("type") ? e.target.checked : e.target.value;
                        ue(Qt(Qt({}, se), {}, (0, L.A)({}, t, "shortCode" === t ? n.toUpperCase() : n)))
                    },
                    _n = function() {
                        mt(null), gt(null), Rt(null), Lt(null)
                    },
                    zn = function() {
                        var e = (0, r.A)(N().mark(function e() {
                            var t;
                            return N().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return st && (se.bannerId = st), jt && (se.iconId = jt), tn(!1), e.prev = 3, e.next = 6, Ut({
                                            groupId: b.id,
                                            data: Qt({}, se)
                                        }).unwrap();
                                    case 6:
                                        _n(), k((0, ee.X)({
                                            title: "Group Updated Successfully",
                                            icon: A.SG,
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 16;
                                        break;
                                    case 10:
                                        if (e.prev = 10, e.t0 = e.catch(3), !Yt({
                                                error: e.t0
                                            })) {
                                            e.next = 15;
                                            break
                                        }
                                        return tn(!0), e.abrupt("return");
                                    case 15:
                                        k((0, ee.X)({
                                            title: "Group Update Failed",
                                            icon: x.zp,
                                            message: "".concat(null === e.t0 || void 0 === e.t0 || null === (t = e.t0.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 5e3
                                        }));
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [3, 10]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Wn = function() {
                        var e = (0, r.A)(N().mark(function e() {
                            var t, n, r;
                            return N().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return _e(!0), e.prev = 1, e.next = 4, Mn({
                                            groupId: b.id,
                                            transferTargetId: null == Ye || null === (t = Ye.user) || void 0 === t ? void 0 : t.id
                                        }).unwrap();
                                    case 4:
                                        Rn && (_e(!1), Fe(!1), Je(null), k((0, ee.X)({
                                            title: "Group Transfer Error",
                                            icon: x.zp,
                                            message: "".concat(null == Pn || null === (n = Pn.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 6e3
                                        }))), Rn || k((0, ee.X)({
                                            title: "Group Transfer Initiated",
                                            icon: A.SG,
                                            color: "success",
                                            timeout: 6e3
                                        })), _e(!1), Fe(!1), e.next = 16;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(1), _e(!1), Fe(!1), Je(null), k((0, ee.X)({
                                            title: "Group Transfer Error",
                                            icon: x.zp,
                                            message: "".concat(null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message),
                                            color: "error",
                                            timeout: 6e3
                                        }));
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [1, 10]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Vn = function() {
                        var e = (0, r.A)(N().mark(function e() {
                            var t, n, r;
                            return N().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return nt(!0), e.prev = 1, e.next = 4, Dn({
                                            groupId: b.id,
                                            transferTargetId: null == Ye || null === (t = Ye.user) || void 0 === t ? void 0 : t.id
                                        }).unwrap();
                                    case 4:
                                        nt(!1), qn && k((0, ee.X)({
                                            title: "Cancel Group Transfer Error",
                                            icon: x.zp,
                                            message: "".concat(null == Un || null === (n = Un.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 3e3
                                        })), qn || k((0, ee.X)({
                                            title: "Delete Group Transfer Success",
                                            icon: A.SG,
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(1), nt(!1), k((0, ee.X)({
                                            title: "Delete Group Transfer Error",
                                            icon: x.zp,
                                            message: "".concat(null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message),
                                            color: "error",
                                            timeout: 3e3
                                        }));
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [1, 9]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Yn = function() {
                        var e = (0, r.A)(N().mark(function e() {
                            return N().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        He(!0), ln({
                                            groupId: b.id,
                                            ownerId: b.ownerId
                                        });
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Jn = function(e) {
                        St(e), ue(Qt(Qt({}, se), {}, {
                            links: e
                        }))
                    },
                    Xn = function(e, t) {
                        var n = (0, D.A)(At);
                        n[e] = t, n = n.filter(function(e) {
                            return "none" !== e
                        }), kt(n), ue(Qt(Qt({}, se), {}, {
                            languages: n
                        }))
                    },
                    Qn = dn.includes("permission-user-gallery"),
                    Kn = dn.includes("permission-user-icons"),
                    Hn = zt || cn || jn || $n;
                return C.createElement("div", null, C.createElement(z.A, {
                    className: "mt-4"
                }, C.createElement(ce.A, {
                    tabs: [{
                        name: "General",
                        to: "/home/group/".concat(b.id, "/settings"),
                        end: !0,
                        icon: _.Ub,
                        condition: Dt || P({
                            groupMember: null == b ? void 0 : b.myMember,
                            permission: "group-data-manage"
                        })
                    }, {
                        name: "My Membership",
                        to: Dt || P({
                            groupMember: null == b ? void 0 : b.myMember,
                            permission: "group-data-manage"
                        }) ? "me" : "/home/group/".concat(b.id, "/settings"),
                        icon: B.VK,
                        condition: null == b ? void 0 : b.myMember
                    }, {
                        name: "Roles",
                        to: "roles",
                        icon: U.GK,
                        condition: Dt || P({
                            groupMember: null == b ? void 0 : b.myMember,
                            permission: "group-roles-manage"
                        })
                    }, {
                        name: "Logs",
                        to: "logs",
                        icon: q.DD,
                        condition: Dt || P({
                            groupMember: null == b ? void 0 : b.myMember,
                            permission: "group-audit-view"
                        })
                    }, {
                        name: "Age Verification Beta",
                        to: "ageverificationbeta",
                        icon: $.Lm,
                        condition: b.tags.includes("admin_age_verification_enabled") && (Dt || (null == b ? void 0 : b.myMember.userId) === b.ownerId)
                    }]
                })), C.createElement(S.BV, null, C.createElement(S.qh, {
                    path: "/",
                    element: Dt || P({
                        groupMember: null == b ? void 0 : b.myMember,
                        permission: "group-data-manage"
                    }) ? C.createElement(C.Fragment, null, C.createElement(W.A, null, C.createElement(T.A, {
                        isOpen: at,
                        className: (0, O.AH)({
                            name: "1ul0gzp",
                            styles: "max-width:1500px!important"
                        })
                    }, C.createElement(V.A, null, C.createElement(Kt, {
                        isSelector: !0,
                        selectedCallback: function(e, t) {
                            mt(e), gt(t), ot(!1)
                        },
                        selectedId: null != st ? st : "",
                        activeTab: "photos"
                    })), C.createElement(Y.A, null, C.createElement(re.$n, {
                        onClick: function() {
                            ot(!1), k((0, Z.S0)())
                        }
                    }, "Cancel"))), C.createElement(T.A, {
                        isOpen: Et,
                        className: (0, O.AH)({
                            name: "1ul0gzp",
                            styles: "max-width:1500px!important"
                        })
                    }, C.createElement(V.A, null, C.createElement(Kt, {
                        isSelector: !0,
                        selectedCallback: function(e, t) {
                            Rt(e), Lt(t), ht(!1)
                        },
                        selectedId: null != jt ? jt : "",
                        activeTab: "icons"
                    })), C.createElement(Y.A, null, C.createElement(re.$n, {
                        onClick: function() {
                            ht(!1), k((0, Z.rp)())
                        }
                    }, "Cancel"))), C.createElement(z.A, null, _t && !Zt ? C.createElement(re.$T, {
                        type: "error",
                        title: "An error occurred",
                        message: (null == Wt || null === (u = Wt.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message) || "Something went wrong updating the group"
                    }) : null, C.createElement(re.N3, null, C.createElement("h4", {
                        className: "text-center"
                    }, "General")), C.createElement(re.BW, null, C.createElement("div", null, C.createElement(W.A, {
                        className: "mb-1"
                    }, C.createElement(z.A, null, C.createElement(J.A, {
                        for: "name"
                    }, "Name")), C.createElement(z.A, null, C.createElement(re.pd, {
                        type: "text",
                        name: "name",
                        className: "full-width",
                        value: se.name,
                        onChange: Bn
                    }))), C.createElement(W.A, {
                        className: "mb-1"
                    }, C.createElement(z.A, null, C.createElement(J.A, {
                        for: "shortCode"
                    }, "Short Code (3-6 letters/numbers)")), C.createElement(z.A, null, C.createElement(re.pd, {
                        type: "text",
                        name: "shortCode",
                        className: "full-width",
                        value: se.shortCode,
                        maxLength: 6,
                        onChange: Bn
                    }))), C.createElement(W.A, {
                        className: "mb-1"
                    }, C.createElement(z.A, null, C.createElement(J.A, {
                        for: "description"
                    }, "Description")), C.createElement(z.A, null, C.createElement(en, {
                        name: "description",
                        className: "full-width",
                        value: null !== (m = se.description) && void 0 !== m ? m : "",
                        onChange: Bn
                    }))), C.createElement(W.A, null, C.createElement(z.A, null, C.createElement(J.A, {
                        for: "description"
                    }, "Rules")), C.createElement(z.A, null, C.createElement(en, {
                        name: "rules",
                        className: "full-width",
                        value: null !== (d = se.rules) && void 0 !== d ? d : "",
                        onChange: Bn
                    }))), C.createElement("div", null, !1, C.createElement(W.A, {
                        className: "mt-2"
                    }, C.createElement(z.A, null, C.createElement(J.A, {
                        for: "isJoinable"
                    }, "Open to New Members")), C.createElement(z.A, null, C.createElement(re.ms, {
                        onChange: function(e) {
                            var t = e === bt.mm.OPEN;
                            ue(Qt(Qt({}, se), {}, {
                                joinState: e,
                                allowGroupJoinPrompt: t
                            }))
                        },
                        value: null !== (p = se.joinState) && void 0 !== p ? p : "",
                        name: "joinState",
                        options: Ht
                    }))), C.createElement("br", null), C.createElement("div", {
                        className: "mt-2"
                    }, C.createElement(ae.A, {
                        label: "Automatic Group Invites",
                        value: "allowGroupJoinPrompt",
                        disabled: se.joinState !== bt.mm.OPEN,
                        defaultChecked: null !== (g = se.allowGroupJoinPrompt) && void 0 !== g ? g : se.joinState === bt.mm.OPEN,
                        onChangeCallback: function(e) {
                            var t = e.checked;
                            ue(Qt(Qt({}, se), {}, {
                                allowGroupJoinPrompt: t
                            }))
                        }
                    }), C.createElement(X.A, null, "Automatically send group invites to non-members who’ve spent over 5 minutes in this group’s instances or made a friend there. Only available to Open groups.")), C.createElement(W.A, {
                        className: "mt-2"
                    }, C.createElement(z.A, null, C.createElement(J.A, {
                        for: "languages"
                    }, "Languages")), C.createElement(z.A, null, At.length >= 0 && C.createElement(re.ms, {
                        onChange: function(e) {
                            Xn(0, e)
                        },
                        value: null !== (f = null == At ? void 0 : At[0]) && void 0 !== f ? f : "none",
                        name: "languages",
                        options: fn,
                        className: "mb-1"
                    }), At.length >= 1 && C.createElement(re.ms, {
                        onChange: function(e) {
                            Xn(1, e)
                        },
                        value: null !== (v = null == At ? void 0 : At[1]) && void 0 !== v ? v : "none",
                        name: "languages",
                        options: fn,
                        className: "mb-1"
                    }), At.length >= 2 && C.createElement(re.ms, {
                        onChange: function(e) {
                            Xn(2, e)
                        },
                        value: null !== (E = null == At ? void 0 : At[2]) && void 0 !== E ? E : "none",
                        name: "languages",
                        options: fn,
                        className: "mb-1"
                    }))), C.createElement("br", null), C.createElement(W.A, {
                        className: "mt-2"
                    }, C.createElement(z.A, null, C.createElement(J.A, {
                        for: "links"
                    }, "Group Links")), C.createElement(z.A, null, C.createElement(Ve, {
                        groupBioLinks: It,
                        callback: Jn,
                        index: 0
                    }), C.createElement(Ve, {
                        groupBioLinks: It,
                        callback: Jn,
                        index: 1
                    }), C.createElement(Ve, {
                        groupBioLinks: It,
                        callback: Jn,
                        index: 2
                    }))), C.createElement("br", null), C.createElement(W.A, null, C.createElement(z.A, null), C.createElement(z.A, null, st && C.createElement("div", null, C.createElement("span", null, "Replacing banner with: ", st), C.createElement("br", null), C.createElement(re.$n, {
                        onClick: function() {
                            mt(null), gt(null)
                        }
                    }, "Clear banner selection")), jt && C.createElement("div", null, C.createElement("span", null, "Replacing icon with: ", jt), C.createElement("br", null), C.createElement(re.$n, {
                        onClick: function() {
                            Lt(null), Rt(null)
                        }
                    }, "Clear icon selection")))), C.createElement("br", null), C.createElement(W.A, null, C.createElement(z.A, null), C.createElement(z.A, null, Qn && C.createElement(re.$n, {
                        color: "primary",
                        onClick: function() {
                            ot(!0)
                        }
                    }, "Update Group Banner"), " ", Kn && C.createElement(re.$n, {
                        color: "primary",
                        onClick: function() {
                            ht(!0)
                        }
                    }, "Update Group Icon")))), C.createElement(W.A, {
                        className: "mt-4"
                    }, C.createElement(re.$n, {
                        neutral: !0,
                        onClick: zn,
                        disabled: Hn,
                        loading: Hn
                    }, "Save")))))), Ft && !y && C.createElement(C.Fragment, null, C.createElement(Ie, {
                        isOpen: he,
                        group: b,
                        cancelCallback: function() {
                            return be(!1)
                        },
                        memberSelectCallback: function(e) {
                            ! function(e) {
                                Je(e), Ae(!0)
                            }(e)
                        },
                        isGroupMemberOnly: !0,
                        isSelecting: Oe
                    }), (null == Ye ? void 0 : Ye.user) && De && C.createElement(Be, {
                        group: b,
                        validity: je,
                        prospectiveNewOwner: Ye,
                        onTransfer: function() {
                            return Wn()
                        },
                        onCancel: function() {
                            return Fe(!1)
                        },
                        isOpen: De,
                        isTransferring: Ue
                    }), C.createElement(Pe, {
                        group: b,
                        onButtonClick: function() {
                            return be(!0)
                        },
                        isLoading: Hn || !1
                    })), Ft && y && C.createElement(Me, {
                        group: b,
                        onClickCallback: function() {
                            return Vn()
                        },
                        isDeleting: tt || !1
                    }), Ft && C.createElement(C.Fragment, null, on ? C.createElement(re.$T, {
                        type: "error",
                        title: "Could not delete group",
                        message: (null == sn || null === (h = sn.data) || void 0 === h || null === (h = h.error) || void 0 === h ? void 0 : h.message) || "Something went wrong deleting the group"
                    }) : null, C.createElement(re.N3, {
                        className: "mt-2"
                    }, C.createElement("h4", {
                        className: "text-center"
                    }, "Delete Group")), C.createElement(re.BW, null, C.createElement("p", null, "You can delete this group as long as it has no other members. This cannot be undone."), C.createElement(T.A, {
                        isOpen: ge
                    }, C.createElement(Q.A, {
                        close: C.createElement(oe.A, {
                            onClick: function() {
                                fe(!1)
                            }
                        })
                    }, C.createElement("h4", null, "Delete Group?")), C.createElement(V.A, {
                        className: (0, O.AH)({
                            name: "1bpq7li",
                            styles: "padding:30px;padding-top:0"
                        })
                    }, Ke ? C.createElement("div", {
                        className: "full-width text-center"
                    }, C.createElement(ie.A, null)) : C.createElement("div", {
                        className: (0, O.AH)({
                            name: "pc0kie",
                            styles: ">*{margin-top:15px;}"
                        })
                    }, C.createElement(W.A, null, C.createElement("span", {
                        className: "full-width text-center"
                    }, "Hey! This can't be undone! Only do this if you ", C.createElement("strong", null, "KNOW"), " what you're doing!")), C.createElement(W.A, null, C.createElement(re.$n, {
                        onClick: Yn,
                        danger: !0,
                        className: "full-width"
                    }, "DELETE IT!")), C.createElement(W.A, null, C.createElement(re.$n, {
                        className: "full-width",
                        onClick: function() {
                            fe(!1)
                        }
                    }, "Get me outta here!"))))), C.createElement(z.A, null, C.createElement(re.$n, {
                        danger: !0,
                        onClick: function() {
                            fe(!0)
                        },
                        disabled: Hn,
                        loading: Hn
                    }, C.createElement(le.A, {
                        icon: F.yL
                    }), " Delete Group"))))) : C.createElement(yt, {
                        groupId: null == b ? void 0 : b.id
                    })
                }), C.createElement(S.qh, {
                    path: "/me",
                    element: null != b && b.myMember ? C.createElement(yt, {
                        groupId: null == b ? void 0 : b.id
                    }) : C.createElement(G.A, {
                        to: ".."
                    })
                }), C.createElement(S.qh, {
                    path: "/roles/:roleId?/:newRoleType?",
                    element: Dt || P({
                        groupMember: null == b ? void 0 : b.myMember,
                        permission: "group-roles-manage"
                    }) ? C.createElement(Vt, {
                        group: b
                    }) : C.createElement(G.A, {
                        to: ".."
                    })
                }), C.createElement(S.qh, {
                    path: "/logs",
                    element: Dt || P({
                        groupMember: null == b ? void 0 : b.myMember,
                        permission: "group-audit-view"
                    }) ? C.createElement(ut, {
                        group: b
                    }) : C.createElement(G.A, {
                        to: ".."
                    })
                }), C.createElement(S.qh, {
                    path: "/ageverificationbeta",
                    element: b.tags.includes("admin_age_verification_enabled") && (Dt || (null == b ? void 0 : b.myMember.userId) === b.ownerId) ? C.createElement(W.A, null, C.createElement(z.A, null, C.createElement(re.N3, null, C.createElement("h4", {
                        className: "text-center"
                    }, "Age Verification Beta")), C.createElement(re.BW, null, C.createElement(W.A, {
                        className: "mb-1"
                    }, C.createElement(z.A, null, C.createElement(J.A, null, "Beta Slots Remaining")), C.createElement(z.A, null, b.ageVerificationBetaSlots)), C.createElement(W.A, {
                        className: "mb-1"
                    }, C.createElement(z.A, null, C.createElement(J.A, null, "Verification Link")), C.createElement(z.A, null, C.createElement("a", {
                        href: "https://vrchat.com/home/group/".concat(b.id, "/ageverification/").concat(b.ageVerificationBetaCode)
                    }, "https://vrchat.com/home/group/", b.id, "/ageverification/", b.ageVerificationBetaCode)))))) : C.createElement(G.A, {
                        to: ".."
                    })
                })))
            };
            var en = (0, a.A)(re.TM, {
                    target: "e3uj5bu0"
                })({
                    name: "1vp1ylf",
                    styles: ">textarea{height:200px;}"
                }),
                tn = n(93930),
                nn = n(6077),
                rn = n(82628);

            function ln(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function an(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ln(Object(n), !0).forEach(function(t) {
                        (0, L.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ln(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
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
                    v = C.useState(!1),
                    E = (0, l.A)(v, 2),
                    h = E[0],
                    b = E[1],
                    w = C.useState(!1),
                    y = (0, l.A)(w, 2),
                    x = y[0],
                    A = y[1],
                    k = C.useState({}),
                    N = (0, l.A)(k, 2),
                    O = N[0],
                    I = N[1],
                    S = (0, pe.XR)({
                        groupId: s.groupId
                    }),
                    M = S.data,
                    T = S.isLoading,
                    j = S.isError,
                    R = S.error,
                    G = (0, pe.gi)({
                        groupId: s.groupId,
                        userId: s.userId
                    }),
                    D = G.data,
                    F = G.isLoading,
                    $ = G.isError,
                    q = G.error,
                    U = (0, pe.lY)(),
                    B = (0, l.A)(U, 2),
                    _ = B[0],
                    z = (B[1].isLoading, (0, pe.Vm)()),
                    W = (0, l.A)(z, 2),
                    V = W[0],
                    Y = (W[1].isLoading, (0, pe.Yn)()),
                    X = (0, l.A)(Y, 2),
                    Q = X[0],
                    K = (X[1].isLoading, (0, pe.x9)()),
                    H = (0, l.A)(K, 2),
                    Z = H[0],
                    ee = (H[1].isLoading, (0, pe.Vy)()),
                    te = (0, l.A)(ee, 2),
                    ne = te[0],
                    ae = (te[1].isLoading, (0, de.Om)()),
                    oe = T || F,
                    ie = $ || j;
                if (C.useEffect(function() {
                        m()
                    }, []), ie) return C.createElement(C.Fragment, null, C.createElement(re.N3, null, C.createElement("h4", null, "Managing Member")), C.createElement(re.BW, null, C.createElement("div", null, C.createElement("div", {
                    className: "text-center mb-4"
                }, C.createElement(le.A, {
                    icon: rn.faTriangleExclamation,
                    size: "xl"
                })), C.createElement("h4", {
                    className: "text-center mb-4"
                }, "We have encountered a problem."), R && C.createElement("p", {
                    className: "text-center text-danger"
                }, null == R || null === (o = R.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message), q && C.createElement("p", {
                    className: "text-center text-danger"
                }, null == q || null === (c = q.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message))));
                if (oe) return null;
                var ce = function() {
                        b(!h)
                    },
                    se = function() {
                        A(!x)
                    };
                if (null == D) return C.createElement("div", null);
                var ue = P({
                        groupMember: null == M ? void 0 : M.myMember,
                        permission: "group-members-manage"
                    }),
                    me = P({
                        groupMember: null == M ? void 0 : M.myMember,
                        permission: "group-roles-assign"
                    }),
                    ge = P({
                        groupMember: null == M ? void 0 : M.myMember,
                        permission: "group-bans-manage"
                    }),
                    fe = (null == M || null === (t = M.myMember) || void 0 === t ? void 0 : t.id) === D.id,
                    ve = null != O.managerNotes ? O.managerNotes : D.managerNotes,
                    Ee = (null == D ? void 0 : D.roleIds) || [],
                    he = Ee.map(function(e) {
                        var t = M.roles.find(function(t) {
                                return t.id === e
                            }),
                            n = (null == t ? void 0 : t.order) > (null == M ? void 0 : M.memberRank) && ((null == t ? void 0 : t.isSelfAssignable) && 0 !== (null == t ? void 0 : t.order) || me);
                        return t ? C.createElement(C.Fragment, null, C.createElement(mn, {
                            key: t.id,
                            roleid: t.id,
                            canInteract: n,
                            onClick: function() {
                                n && function(e) {
                                    M.roles.find(function(t) {
                                        return t.id === e
                                    }) && ne({
                                        groupId: D.groupId,
                                        userId: D.userId,
                                        roleId: e
                                    })
                                }(t.id)
                            }
                        }, t.name)) : null
                    }),
                    be = M.roles.filter(function(e) {
                        return !Ee.includes(e.id) && (0 !== (null == e ? void 0 : e.order) && ((null == e || !e.requiresPurchase) && ((null == e || !e.defaultRole) && (!(!me && !ae) || !(!fe || !e.isSelfAssignable)))))
                    }).map(function(e) {
                        var t = (null == e ? void 0 : e.order) > (null == M ? void 0 : M.memberRank) && ((null == e ? void 0 : e.isSelfAssignable) && 0 !== (null == e ? void 0 : e.order) || me);
                        return C.createElement(mn, {
                            key: e.id,
                            roleid: e.id,
                            canInteract: t,
                            onClick: function() {
                                var n;
                                t && (n = e.id, M.roles.find(function(e) {
                                    return e.id === n
                                }) && Z({
                                    groupId: D.groupId,
                                    userId: D.userId,
                                    roleId: n
                                }))
                            }
                        }, e.name)
                    });
                return C.createElement(Wt.A, {
                    loading: oe
                }, C.createElement(re.N3, null, C.createElement("h4", null, "Managing ", null == s || null === (n = s.user) || void 0 === n ? void 0 : n.displayName)), C.createElement(re.BW, null, x && C.createElement("div", null, C.createElement("h4", {
                    className: "text-center mb-4"
                }, "Are you sure you want to kick ", null == D || null === (r = D.user) || void 0 === r ? void 0 : r.displayName, "?!?!"), C.createElement(re.fI, null, C.createElement(re.$n, {
                    warning: !0,
                    onClick: function() {
                        se(), Q({
                            groupId: D.groupId,
                            userId: D.userId,
                            fromPage: f
                        }), p()
                    },
                    expand: !0
                }, C.createElement(re.M2, {
                    icon: nn.Ip
                }), " Get 'em outta here!"), " ", C.createElement(re.$n, {
                    neutral: !0,
                    onClick: se,
                    expand: !0
                }, "Cancel"))), h && C.createElement("div", null, C.createElement("h4", {
                    className: "text-center mb-4"
                }, "Are you sure you want to ban ", null == D || null === (a = D.user) || void 0 === a ? void 0 : a.displayName, "?!?!"), C.createElement(re.fI, null, C.createElement(re.$n, {
                    danger: !0,
                    onClick: function() {
                        ce(), V({
                            groupId: D.groupId,
                            userId: D.userId,
                            fromPage: f
                        }), p()
                    },
                    expand: !0
                }, C.createElement(re.M2, {
                    icon: i.pn
                }), " And stay out!"), " ", C.createElement(re.$n, {
                    neutral: !0,
                    onClick: ce,
                    expand: !0
                }, "Cancel"))), !(x || h) && C.createElement(C.Fragment, null, (me || ae || fe) && C.createElement(cn, null, C.createElement(sn, null, C.createElement("h6", null, "Available Roles"), C.createElement(un, null, be)), C.createElement(dn, null, C.createElement("h6", null, "Assigned Roles"), C.createElement(pn, null, he))), C.createElement(re.fI, null, (ue || ae) && C.createElement("div", {
                    className: "setting mb-2 flex-1"
                }, C.createElement(J.A, null, "Notes"), C.createElement(re.TM, {
                    name: "managerNotes",
                    className: "notes-input full-width",
                    value: ve,
                    onChange: function(e) {
                        var t = e.target.name,
                            n = "checkbox" === e.target.getAttribute("type") ? e.target.checked : e.target.value;
                        I(an(an({}, O), {}, (0, L.A)({}, t, n)))
                    }
                }))), C.createElement(re.fI, null, C.createElement(re.$n, {
                    expand: !0,
                    color: "primary",
                    onClick: function() {
                        ! function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = an(an({}, O), e);
                            Object.keys(t).length > 0 && _(an({
                                groupId: D.groupId,
                                userId: D.userId
                            }, t)), p()
                        }()
                    }
                }, C.createElement(re.M2, {
                    icon: vt.hS
                }), " Save"), " ", C.createElement(re.$n, {
                    expand: !0,
                    neutral: !0,
                    onClick: p
                }, "Close"), ((null == M ? void 0 : M.memberRank) < g && ue || ae) && C.createElement(C.Fragment, null, " ", C.createElement(re.$n, {
                    expand: !0,
                    warning: !0,
                    onClick: se
                }, C.createElement(le.A, {
                    icon: nn.Ip
                }), "  Kick"), " ", (ge || ae) && C.createElement(re.$n, {
                    expand: !0,
                    danger: !0,
                    onClick: ce
                }, C.createElement(le.A, {
                    icon: i.pn
                }), "  Ban"))))))
            };
            n.dn(on);
            var cn = (0, a.A)("div", {
                    target: "emzwbrv5"
                })({
                    name: "sh46e2",
                    styles: "display:flex;flex-direction:row;align-items:start;justify-content:space-around;margin-bottom:15px"
                }),
                sn = (0, a.A)("div", {
                    target: "emzwbrv4"
                })({
                    name: "1fx61ax",
                    styles: "display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;margin-right:10px"
                }),
                un = (0, a.A)("ul", {
                    target: "emzwbrv3"
                })({
                    name: "1uhpukn",
                    styles: "list-style-type:none;padding:0;margin:0;width:100%;max-height:200px;height:200px;overflow-y:auto;overflow-x:hidden;background:#0d0d10;border-radius:5px"
                }),
                mn = (0, a.A)("li", {
                    target: "emzwbrv2"
                })("padding:8px;border-radius:4px;", function(e) {
                    return !e.canInteract && "\n    background-color: #0d0d10;\n    opacity: 0.2;\n    "
                }, " &.not-a-role{background-color:unset;}&:hover{", function(e) {
                    return e.canInteract && "\n        background-color: #282b31;\n        cursor: pointer;\n    "
                }, ";}"),
                dn = (0, a.A)("div", {
                    target: "emzwbrv1"
                })({
                    name: "d50b5r",
                    styles: "display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;margin-left:10px"
                }),
                pn = (0, a.A)("ul", {
                    target: "emzwbrv0"
                })({
                    name: "1uhpukn",
                    styles: "list-style-type:none;padding:0;margin:0;width:100%;max-height:200px;height:200px;overflow-y:auto;overflow-x:hidden;background:#0d0d10;border-radius:5px"
                }),
                gn = n(55606),
                fn = n(92762),
                vn = function(e) {
                    var t = e.user,
                        n = void 0 === t ? null : t,
                        a = e.groupId,
                        o = (0, I.wA)(),
                        c = (0, C.useState)(!0),
                        s = (0, l.A)(c, 2),
                        u = s[0],
                        m = s[1],
                        d = (0, pe.ij)(),
                        p = (0, l.A)(d, 2),
                        g = p[0],
                        f = p[1].isLoading,
                        v = (0, pe.Vm)(),
                        E = (0, l.A)(v, 2),
                        h = E[0],
                        b = E[1].isLoading;
                    if (null === n) return null;
                    var w = function() {
                            var e = (0, r.A)(N().mark(function e() {
                                var t, r;
                                return N().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, h({
                                                groupId: a,
                                                userId: n.id
                                            }).unwrap();
                                        case 3:
                                            o((0, ee.X)({
                                                icon: A.SG,
                                                message: "".concat(n.displayName, " is banned!"),
                                                color: "success",
                                                timeout: 3e3
                                            })), m(!1), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), o((0, ee.X)({
                                                icon: x.zp,
                                                message: null !== (t = null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== t ? t : "Failed to ban ".concat(n.displayName, "!"),
                                                color: "danger",
                                                timeout: 3e3
                                            }));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [0, 7]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        y = function() {
                            var e = (0, r.A)(N().mark(function e() {
                                var t, r;
                                return N().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, g({
                                                groupId: a,
                                                userId: n.id
                                            }).unwrap();
                                        case 3:
                                            o((0, ee.X)({
                                                icon: A.SG,
                                                message: "".concat(n.displayName, " is un-banned!"),
                                                color: "success",
                                                timeout: 3e3
                                            })), m(!0), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), o((0, ee.X)({
                                                icon: x.zp,
                                                message: null !== (t = null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== t ? t : "Failed to un-ban ".concat(n.displayName, "!"),
                                                color: "danger",
                                                timeout: 3e3
                                            }));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [0, 7]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return C.createElement(me.RR, {
                        className: "flex-row my-1"
                    }, C.createElement("div", {
                        className: "container-fluid p-0"
                    }, C.createElement(W.A, null, C.createElement(z.A, {
                        xs: 12,
                        sm: 2,
                        className: "pe-0"
                    }, C.createElement(M.N_, {
                        to: "/home/user/".concat(n.id),
                        title: n.displayName,
                        target: "_blank"
                    }, C.createElement(me.nz, {
                        image: (null == n ? void 0 : n.iconUrl) || (null == n ? void 0 : n.thumbnailUrl) || (null == n ? void 0 : n.userIcon) || (null == n ? void 0 : n.currentAvatarThumbnailImageUrl)
                    }))), C.createElement(z.A, null, C.createElement(gn.A, {
                        className: "d-flex flex-row justify-content-between py-1"
                    }, C.createElement("div", {
                        className: "container p-0"
                    }, C.createElement(W.A, null, C.createElement(z.A, {
                        xs: 12,
                        sm: 7,
                        className: "p-1"
                    }, C.createElement(M.N_, {
                        to: "/home/user/".concat(n.id),
                        title: n.displayName,
                        target: "_blank"
                    }, C.createElement(me.RL, {
                        tag: "h5"
                    }, n.displayName)), C.createElement(fn.A, {
                        className: "mb-2 text-muted text-truncate tw-capitalize",
                        tag: "h6"
                    }, n.status)), C.createElement(z.A, null, C.createElement("div", {
                        className: "tw-flex tw-col tw-justify-end"
                    }, C.createElement("div", {
                        className: "tw-justify-end"
                    }, C.createElement(re.$n, {
                        onClick: u ? w : y,
                        disabled: b || f,
                        loading: b || f,
                        className: "tw-w-fit tw-px-4"
                    }, C.createElement(re.M2, {
                        width: 20,
                        icon: i.pn
                    }), u ? " Ban" : " Unban")))))))))))
                };
            vn.propTypes = {
                user: fe().object,
                groupId: fe().string.isRequired
            };
            const En = vn;
            var hn = n(38066),
                bn = n(29473),
                wn = function(e) {
                    var t = e.member,
                        n = void 0 === t ? null : t,
                        r = e.groupRoles,
                        l = e.memberEditCallback;
                    if (null === n) return null;
                    var a = n.user;
                    return C.createElement(me.RR, {
                        className: "flex-row my-1"
                    }, C.createElement("div", {
                        className: "container-fluid p-0"
                    }, C.createElement(W.A, null, C.createElement(z.A, {
                        xs: 12,
                        sm: 2,
                        className: "pe-0"
                    }, C.createElement(M.N_, {
                        to: "/home/user/".concat(a.id),
                        title: a.displayName,
                        target: "_blank"
                    }, C.createElement(me.nz, {
                        image: a.iconUrl || a.thumbnailUrl
                    }))), C.createElement(z.A, null, C.createElement(gn.A, {
                        className: "d-flex flex-row justify-content-between py-1"
                    }, C.createElement("div", {
                        className: "container p-0"
                    }, C.createElement(W.A, null, C.createElement(z.A, {
                        xs: 12,
                        sm: 7,
                        className: "p-1"
                    }, C.createElement(M.N_, {
                        to: "/home/user/".concat(a.id),
                        title: a.displayName,
                        target: "_blank"
                    }, C.createElement(me.RL, {
                        tag: "h5"
                    }, a.displayName)), C.createElement(fn.A, {
                        className: "mb-2 text-muted text-truncate",
                        tag: "h6"
                    }, "Joined ", Ee()(n.joinedAt).fromNow()), C.createElement(bn.A, {
                        className: "text-truncate text-secondary"
                    }, (0, xe.Eq)({
                        member: n,
                        groupRoles: r
                    }).join(", "))), C.createElement(z.A, null, C.createElement(me.AZ, null, C.createElement(re.$n, {
                        onClick: function() {
                            return l(n, (0, xe.g4)({
                                member: n,
                                groupRoles: r
                            }), null)
                        }
                    }, C.createElement(re.M2, {
                        width: 20,
                        icon: hn.hp
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
                    p = (0, l.A)(d, 2),
                    g = p[0],
                    f = p[1],
                    v = (0, C.useState)(1),
                    E = (0, l.A)(v, 2),
                    h = E[0],
                    b = E[1],
                    w = (0, de.d7)(g);
                (0, C.useEffect)(function() {
                    setTimeout(function() {
                        o && null != m && m.current && m.current.focus()
                    }, 300)
                }, [o, m]), (0, C.useEffect)(function() {
                    b(1)
                }, [g]), (0, C.useEffect)(function() {
                    f("")
                }, [o]);
                var y = (0, pe.sH)({
                        groupId: a
                    }, {
                        skip: !s
                    }),
                    x = y.data,
                    A = y.isSuccess,
                    k = y.isError,
                    N = y.error,
                    O = (0, pe.OF)({
                        groupId: a,
                        pageValue: h,
                        searchTerm: w,
                        n: 25
                    }, {
                        skip: "" === w || !o || w.length < 3 || !s
                    }),
                    I = O.data,
                    S = O.error,
                    M = O.isError,
                    T = O.isFetching,
                    j = O.isSuccess,
                    R = (0, ne.m8)({
                        pageValue: h,
                        searchTerm: w,
                        n: 25
                    }, {
                        skip: "" === w || !o || w.length < 3 || s
                    }),
                    P = R.data,
                    G = R.error,
                    L = R.isError,
                    D = R.isFetching,
                    F = R.isSuccess;
                return C.createElement(me.ey, {
                    role: "dialog",
                    isOpen: o,
                    toggle: i,
                    keyboard: !0,
                    autoFocus: !1
                }, C.createElement(me.Au, {
                    tag: "h4",
                    close: C.createElement(oe.A, {
                        onClick: i
                    }),
                    toggle: i
                }, s ? "Group Members Search" : "Users Search"), C.createElement(me.G1, null, C.createElement(me.xx, null, C.createElement(re.pd, {
                    id: "search-product-list",
                    onChange: function(e) {
                        return f(e.target.value)
                    },
                    placeholder: s ? "Search Group Members..." : "Search for users...",
                    ref: m,
                    type: "text",
                    value: g
                }), (M || k || L) && C.createElement("p", {
                    className: "text-center m-5 text-warning h-25"
                }, "Something went wrong with the search, please try again later!", C.createElement("br", null), M && C.createElement("code", null, null == S || null === (t = S.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), k && C.createElement("code", null, null == N || null === (n = N.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), L && C.createElement("code", null, null == G || null === (r = G.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message)), T && C.createElement(me.WT, null, C.createElement("div", {
                    className: "text-center m-5 text-secondary h-25"
                }, C.createElement(ie.A, null))), !j && !T && !M && s && C.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "Search for members in your group."), j && !T && A && s && C.createElement(me.WT, null, I.results.map(function(e) {
                    return C.createElement(yn, {
                        key: e.id,
                        member: e,
                        groupRoles: x,
                        memberEditCallback: u
                    })
                }), 0 === I.results.length && C.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "We couldn't find anything with that search.")), !F && !D && !L && !s && C.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "Search for users on VRChat."), F && C.createElement(me.WT, null, P.results.map(function(e) {
                    return C.createElement(En, {
                        key: e.id,
                        user: e,
                        groupId: a
                    })
                }), 0 === P.results.length && C.createElement("p", {
                    className: "text-center m-5 text-secondary h-25"
                }, "We couldn't find anything with that search.")), (j || F) && C.createElement(me.p, null, C.createElement(me.D9, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return b(h - 1)
                    },
                    disabled: 1 === h || T || D
                }, C.createElement(re.M2, {
                    icon: ue.Wz
                })), C.createElement("span", null, h), C.createElement(me.UU, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return b(h + 1)
                    },
                    disabled: (null == I ? void 0 : I.isLastPage) || (null == P ? void 0 : P.isLastPage) || T || D
                }, C.createElement(re.M2, {
                    icon: se.Xk
                }))))))
            };
            xn.propTypes = {
                groupId: fe().string,
                isOpen: fe().bool.isRequired,
                cancelCallback: fe().func.isRequired,
                memberEditCallback: fe().func
            };
            const An = xn;

            function kn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Nn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? kn(Object(n), !0).forEach(function(t) {
                        (0, L.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kn(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var On = [{
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
                    a = (0, l.A)(r, 2),
                    o = a[0],
                    i = a[1],
                    c = C.useState(!1),
                    s = (0, l.A)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = C.useState(null),
                    p = (0, l.A)(d, 2),
                    g = p[0],
                    f = p[1],
                    v = C.useState(null),
                    E = (0, l.A)(v, 2),
                    h = E[0],
                    b = E[1],
                    w = C.useState(null),
                    y = (0, l.A)(w, 2),
                    x = y[0],
                    A = y[1],
                    k = C.useState(""),
                    N = (0, l.A)(k, 2),
                    I = N[0],
                    S = (N[1], C.useState(null)),
                    M = (0, l.A)(S, 2),
                    j = M[0],
                    R = M[1],
                    G = C.useState(null),
                    L = (0, l.A)(G, 2),
                    F = L[0],
                    $ = L[1],
                    q = (0, te.P2)().data,
                    U = (0, de.Om)(),
                    B = (0, C.useState)([
                        [],
                        []
                    ]),
                    _ = (0, l.A)(B, 2),
                    z = _[0],
                    W = _[1],
                    V = null == n ? void 0 : n.myMember,
                    Y = (0, C.useState)(0),
                    J = (0, l.A)(Y, 2),
                    X = J[0],
                    Q = J[1],
                    K = (0, C.useState)(25),
                    H = (0, l.A)(K, 1)[0],
                    Z = (0, pe.OI)(),
                    ee = (0, l.A)(Z, 2),
                    ne = ee[0],
                    le = ee[1],
                    ae = le.data,
                    oe = le.error,
                    ie = le.isLoading,
                    ce = (0, pe.sH)({
                        groupId: null == n ? void 0 : n.id
                    }),
                    se = ce.data,
                    ue = ce.isFetching,
                    me = (null == ae || null === (t = ae.members) || void 0 === t ? void 0 : t.length) < H;
                C.useEffect(function() {
                    ge(H, 0)
                }, []), C.useEffect(function() {
                    var e = (0, D.A)(z);
                    if (ae) {
                        var t;
                        if (ae.page <= 0 && !I && null === j && null === F && null != n && n.myMember) e[0] = [Nn(Nn({}, V), {}, {
                            userId: q.id,
                            user: Nn(Nn({}, q), {}, {
                                thumbnailUrl: null !== (t = q.profilePicOverride) && void 0 !== t ? t : q.currentAvatarImageUrl
                            })
                        })].concat((0, D.A)(ae.members));
                        else e[ae.page] = ae.members;
                        W(e)
                    }
                }, [ae]);
                C.useEffect(function() {}, [I]), C.useEffect(function() {
                    Q(0), W([
                        [],
                        []
                    ]), ge(H, 0)
                }, [j, F]);
                var ge = function(e, t) {
                        ne({
                            groupId: n.id,
                            perPage: e,
                            page: t,
                            sort: j,
                            roleId: F
                        }), Q(t + 1)
                    },
                    fe = function(e, t, n) {
                        f(e), A(t), b(n), i(!0)
                    },
                    ve = P({
                        groupMember: null == n ? void 0 : n.myMember,
                        permission: "group-members-manage"
                    }),
                    Ee = P({
                        groupMember: null == n ? void 0 : n.myMember,
                        permission: "group-roles-assign"
                    }),
                    he = P({
                        groupMember: null == n ? void 0 : n.myMember,
                        permission: "group-members-viewall"
                    }),
                    be = function(e) {
                        var t, r = e.memberRank,
                            l = e.member,
                            a = n.memberRank < r,
                            o = l.id === (null == n || null === (t = n.myMember) || void 0 === t ? void 0 : t.id),
                            i = null == n ? void 0 : n.roles.some(function(e) {
                                return !0 === e.isSelfAssignable
                            });
                        return !!U || (!(!Ee && !ve || !a) || (!(!Ee && !ve || !o) || !(!i || !o)))
                    };
                if (ue) return C.createElement(re.fy, {
                    height: "200px"
                });
                var we = null == z ? void 0 : z.map(function(e, t) {
                        var r;
                        return null === (r = (0, D.A)(e)) || void 0 === r || null === (r = r.sort(function(e) {
                            return null === j && null === F && e.userId === n.ownerId ? -1 : 0
                        })) || void 0 === r || null === (r = r.filter(function(e, t, n) {
                            return n.findIndex(function(t) {
                                return t.userId === e.userId
                            }) === t
                        })) || void 0 === r ? void 0 : r.map(function(e) {
                            var r, l = null === (r = n.roles) || void 0 === r ? void 0 : r.map(function(t) {
                                var n;
                                return null != e && null !== (n = e.roleIds) && void 0 !== n && n.includes(t.id) ? t.order : 9999
                            }).sort(function(e, t) {
                                return e - t
                            })[0];
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
                            }, C.createElement(tn.A, {
                                userId: e.userId,
                                isCard: !0
                            }))
                        })
                    }),
                    ye = [{
                        label: "Everyone",
                        value: null
                    }, {
                        label: "Users with no role",
                        value: ""
                    }].concat(null == se ? void 0 : se.map(function(e) {
                        return {
                            label: e.name,
                            value: e.id
                        }
                    }));
                return C.createElement(C.Fragment, null, C.createElement(re.N3, null, C.createElement("h4", {
                    className: "text-center font-weight-bolder"
                }, "Members ", !ve && !he && "(Friends only)")), C.createElement(re.BW, null, C.createElement("div", {
                    className: (0, O.AH)({
                        name: "8osrbx",
                        styles: "background-color:var(--dark);padding:0 20px 20px 20px"
                    })
                }, ve && C.createElement(re.fv, null, C.createElement("h6", null, "Filters:"), C.createElement(re.fI, {
                    className: "flex-wrap"
                }, C.createElement(In, {
                    label: "Filter role",
                    onChange: $,
                    options: ye,
                    value: F,
                    className: "mb-2 mx-2"
                }), C.createElement(In, {
                    label: "Join order",
                    onChange: R,
                    options: On,
                    value: j,
                    className: "mb-2 mx-2"
                }))), C.createElement(T.A, {
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
                })), ve && C.createElement("div", {
                    className: "p-2"
                }, C.createElement(re.$n, {
                    onClick: function() {
                        m(!0)
                    }
                }, C.createElement(re.M2, {
                    color: "white",
                    icon: Te.faMagnifyingGlass
                }), "  Search Group Members")), C.createElement(An, {
                    isOpen: u,
                    groupId: n.id,
                    cancelCallback: function() {
                        return m(!1)
                    },
                    memberEditCallback: fe,
                    isGroupMemberOnly: !0
                }), ie ? C.createElement(re.fy, {
                    height: "200px"
                }) : C.createElement(Sn, null, we), C.createElement("div", {
                    className: "p-2",
                    style: {
                        margin: "20px auto 0",
                        textAlign: "center"
                    }
                }, C.createElement(re.$n, {
                    onClick: function() {
                        ge(H, X)
                    },
                    disabled: ie || oe || me,
                    loading: ie
                }, oe || me ? "No more members..." : "List More Members")))))
            };
            var In = (0, a.A)(re.ms, {
                    target: "egqvjul1"
                })({
                    name: "1w9pskj",
                    styles: "width:300px;min-width:200px"
                }),
                Sn = (0, a.A)("div", {
                    target: "egqvjul0"
                })({
                    name: "np9ciw",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;gap:24px;justify-content:space-evenly;>*{width:300px;margin-top:8px;}"
                }),
                Mn = n(19100);
            const Tn = function(e) {
                var t, n, r = e.langs,
                    l = e.tags,
                    a = (0, H.G)().data,
                    o = null !== (t = null == a || null === (n = a.constants) || void 0 === n || null === (n = n.LANGUAGE) || void 0 === n ? void 0 : n.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== t ? t : K.RY,
                    i = null != r ? r : l.filter(function(e) {
                        return e.startsWith("language")
                    }).map(function(e) {
                        var t = e.split("_")[1];
                        return {
                            abbreviation: t.toUpperCase(),
                            title: o[t]
                        }
                    });
                return C.createElement(Ln, null, C.createElement(Dn, null, C.createElement(jn, null, "Languages")), C.createElement(Fn, null, i.length > 0 ? i.map(function(e) {
                    var t, n;
                    return C.createElement(Gn, {
                        key: e,
                        title: null !== (t = e.title) && void 0 !== t ? t : o[e]
                    }, null !== (n = e.abbreviation) && void 0 !== n ? n : e.toUpperCase())
                }) : C.createElement("h4", {
                    className: "align-self-center"
                }, "None added")))
            };
            n.dn(Tn);
            var jn = (0, a.A)("h2", {
                    target: "e8rhb6u6"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                Rn = (0, a.A)("div", {
                    target: "e8rhb6u5"
                })({
                    name: "11po3a3",
                    styles: "display:flex;flex-direction:column;align-items:start;justify-content:start;border-radius:8px;overflow:hidden;background:#2a2e34"
                }),
                Pn = (0, a.A)("div", {
                    target: "e8rhb6u4"
                })({
                    name: "r0ww0u",
                    styles: "background-color:#181b1f;border:5px solid #252a30;min-width:100px;min-height:100px;width:100px;height:100px;border-radius:50%;margin:10px;display:flex;justify-content:center;align-items:center;transition:transform 0.1s ease-in"
                }),
                Gn = (0, a.A)(Pn, {
                    target: "e8rhb6u3"
                })({
                    name: "77x4h6",
                    styles: "font-size:1.7rem;font-weight:bold;color:#54b5c5"
                }),
                Ln = (0, a.A)(Rn, {
                    target: "e8rhb6u2"
                })({
                    name: "u5t5ke",
                    styles: "flex:1;min-width:350px;min-height:136px"
                }),
                Dn = (0, a.A)(me.fv, {
                    target: "e8rhb6u1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                Fn = (0, a.A)(Dn, {
                    target: "e8rhb6u0"
                })({
                    name: "18clcmv",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto"
                });
            const $n = function(e) {
                var t = e.links;
                return C.createElement(Wn, null, C.createElement(Vn, null, C.createElement(qn, null, "Links")), C.createElement(Yn, null, t.length > 0 ? t.map(function(e) {
                    return C.createElement(zn, {
                        key: e
                    }, C.createElement(We.b6, {
                        url: e,
                        style: {
                            height: "70px",
                            width: "70px"
                        },
                        target: "_blank"
                    }))
                }) : C.createElement("h4", {
                    className: "align-self-center"
                }, "None added")))
            };
            n.dn($n);
            var qn = (0, a.A)("h2", {
                    target: "e19ri8nl7"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                Un = (0, a.A)("div", {
                    target: "e19ri8nl6"
                })({
                    name: "11po3a3",
                    styles: "display:flex;flex-direction:column;align-items:start;justify-content:start;border-radius:8px;overflow:hidden;background:#2a2e34"
                }),
                Bn = (0, a.A)("div", {
                    target: "e19ri8nl5"
                })({
                    name: "r0ww0u",
                    styles: "background-color:#181b1f;border:5px solid #252a30;min-width:100px;min-height:100px;width:100px;height:100px;border-radius:50%;margin:10px;display:flex;justify-content:center;align-items:center;transition:transform 0.1s ease-in"
                }),
                _n = (0, a.A)(Bn, {
                    target: "e19ri8nl4"
                })({
                    name: "jrwc5p",
                    styles: ":hover{transform:scale(1.1);cursor:pointer;}"
                }),
                zn = (0, a.A)(_n, {
                    target: "e19ri8nl3"
                })(""),
                Wn = (0, a.A)(Un, {
                    target: "e19ri8nl2"
                })({
                    name: "u5t5ke",
                    styles: "flex:1;min-width:350px;min-height:136px"
                }),
                Vn = (0, a.A)(me.fv, {
                    target: "e19ri8nl1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                Yn = (0, a.A)(Vn, {
                    target: "e19ri8nl0"
                })({
                    name: "18clcmv",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto"
                }),
                Jn = n(48210),
                Xn = n(46746),
                Qn = n(46828);

            function Kn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Hn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Kn(Object(n), !0).forEach(function(t) {
                        (0, L.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kn(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var Zn = C.lazy(function() {
                return Promise.all([n.e(1952), n.e(3015), n.e(8242), n.e(4736), n.e(6313), n.e(6683), n.e(7596), n.e(5532)]).then(n.bind(n, 67596))
            });
            const er = function(e) {
                var t, n, a, i = e.group,
                    c = e.gallery,
                    s = e.justAdded,
                    u = void 0 !== s && s,
                    m = (0, I.wA)(),
                    d = (0, I.d4)(function(e) {
                        var t;
                        return null === (t = e.group) || void 0 === t || null === (t = t.galleries) || void 0 === t ? void 0 : t.isLoading
                    }),
                    p = C.useState(!1),
                    g = (0, l.A)(p, 2),
                    f = g[0],
                    v = g[1],
                    E = C.useState(null),
                    h = (0, l.A)(E, 2),
                    b = h[0],
                    w = (h[1], C.useState(null)),
                    y = (0, l.A)(w, 2),
                    x = y[0],
                    A = y[1],
                    k = C.useState(null),
                    S = (0, l.A)(k, 2),
                    M = S[0],
                    j = S[1],
                    R = C.useState(!1),
                    G = (0, l.A)(R, 2),
                    D = G[0],
                    F = G[1],
                    $ = C.useState({
                        name: c.name,
                        description: c.description,
                        membersOnly: c.membersOnly
                    }),
                    q = (0, l.A)($, 2),
                    U = q[0],
                    B = q[1],
                    z = C.useState(!1),
                    W = (0, l.A)(z, 2),
                    X = W[0],
                    Q = W[1],
                    K = C.useState(15),
                    H = (0, l.A)(K, 1)[0],
                    ee = C.useState(1),
                    te = (0, l.A)(ee, 2),
                    ne = te[0],
                    le = te[1],
                    ae = C.useState(!0),
                    oe = (0, l.A)(ae, 2),
                    ie = oe[0],
                    ce = oe[1],
                    me = (0, pe.dH)({
                        groupId: i.id,
                        galleryId: c.id,
                        n: H,
                        page: ne
                    }),
                    de = me.data,
                    ge = me.isLoading,
                    fe = me.isSuccess,
                    ve = (0, pe.Bx)(),
                    Ee = (0, l.A)(ve, 2),
                    he = Ee[0],
                    be = (Ee[1].isLoading, (0, pe.EK)()),
                    we = (0, l.A)(be, 2),
                    ye = we[0],
                    xe = (we[1].isLoading, (0, pe.NI)()),
                    Ae = (0, l.A)(xe, 2),
                    ke = Ae[0],
                    Ne = Ae[1],
                    Oe = (Ne.isLoading, Ne.isSuccess),
                    Ce = (0, pe.lB)(),
                    Ie = (0, l.A)(Ce, 2),
                    Se = Ie[0],
                    Me = (Ie[1].isLoading, (0, Nt.DF)());
                C.useEffect(function() {
                    document.getElementById(c.id) && u && !X && (document.getElementById(c.id).scrollIntoView({
                        behavior: "smooth"
                    }), Q(!0))
                }), C.useEffect(function() {
                    Oe && F(!1)
                }, [Oe]), C.useEffect(function() {
                    fe && ce((null == de ? void 0 : de.totalCount) >= 100)
                }, [fe]);
                var Te = function(e) {
                        var t = "checkbox" === e.target.getAttribute("type") ? !e.target.checked : e.target.value;
                        B(Hn(Hn({}, U), {}, (0, L.A)({}, e.target.name, t)))
                    },
                    je = function() {
                        var e = (0, r.A)(N().mark(function e() {
                            return N().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, ke({
                                            groupId: i.id,
                                            galleryId: c.id,
                                            data: Hn({}, U)
                                        }).unwrap();
                                    case 3:
                                        e.next = 8;
                                        break;
                                    case 5:
                                        e.prev = 5, e.t0 = e.catch(0), Me({
                                            error: e.t0
                                        });
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 5]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                if (ge) return C.createElement(re.fy, {
                    className: "mt-3",
                    width: "100%",
                    height: "300px"
                });
                var Re = P({
                        groupMember: null == i ? void 0 : i.myMember,
                        permission: "group-galleries-manage"
                    }),
                    Pe = de.totalCount,
                    Ge = (ne - 1) * H,
                    Le = C.createElement(rr, null, C.createElement(lr, {
                        className: "d-flex flex-row align-items-center justify-content-center",
                        onClick: function() {
                            return le(ne - 1)
                        },
                        disabled: 0 === Ge
                    }, C.createElement(re.M2, {
                        icon: ue.Wz
                    })), C.createElement("span", null, ne, " / ", Math.ceil(Pe / H), " ", C.createElement("small", null, Pe > 0 && "(".concat(Pe, "/").concat(100, ")"))), C.createElement(ar, {
                        className: "d-flex flex-row align-items-center justify-content-center",
                        onClick: function() {
                            return le(ne + 1)
                        },
                        disabled: Ge + H >= Pe
                    }, C.createElement(re.M2, {
                        icon: se.Xk
                    })));
                return C.createElement("div", {
                    className: "my-2",
                    id: c.id
                }, C.createElement(Qn.A, {
                    imageUrl: x,
                    closeCallback: function() {
                        A(null)
                    },
                    nextCallback: null !== (t = de.results) && void 0 !== t && t[M + 1] ? function() {
                        A(de.results[M + 1].imageUrl), j(M + 1)
                    } : null,
                    prevCallback: null !== (n = de.results) && void 0 !== n && n[M - 1] ? function() {
                        A(de.results[M - 1].imageUrl), j(M - 1)
                    } : null
                }), C.createElement(T.A, {
                    isOpen: f,
                    className: (0, O.AH)({
                        name: "1ul0gzp",
                        styles: "max-width:1500px!important"
                    })
                }, C.createElement(V.A, null, C.createElement(Zn, {
                    isSelector: !0,
                    activeTab: "photos",
                    selectedCallback: function(e) {
                        var t;
                        t = e, he({
                            groupId: i.id,
                            galleryId: c.id,
                            fileId: t
                        }), v(!1)
                    },
                    selectedId: null != b ? b : ""
                })), C.createElement(Y.A, null, C.createElement(re.$n, {
                    onClick: function() {
                        v(!1), m((0, Z.S0)())
                    }
                }, "Cancel"))), C.createElement(re.N3, null, C.createElement("h4", null, c.name), C.createElement("span", null, c.description)), C.createElement(re.BW, null, 0 !== Pe && Le, D ? C.createElement(re.fv, {
                    className: "w-100"
                }, C.createElement(J.A, null, "Gallery name", C.createElement(re.pd, {
                    value: U.name,
                    name: "name",
                    onChange: Te,
                    disabled: d,
                    maxLength: 64
                })), " ", C.createElement(J.A, null, "Gallery description", C.createElement(re.pd, {
                    value: U.description,
                    name: "description",
                    onChange: Te,
                    disabled: d,
                    maxLength: 512
                })), " ", C.createElement(re.fI, null, C.createElement(J.A, null, "Is this gallery public?", " ", C.createElement(Jn.A, {
                    type: "checkbox",
                    name: "membersOnly",
                    checked: !U.membersOnly,
                    onChange: Te,
                    disabled: d
                }))), C.createElement(re.fI, null, C.createElement(re.$n, {
                    expand: !0,
                    onClick: je,
                    disabled: d
                }, "Update"), " ", C.createElement(re.$n, {
                    expand: !0,
                    neutral: !0,
                    disabled: d,
                    onClick: function() {
                        F(!1)
                    }
                }, "Cancel"), " ", C.createElement(re.$n, {
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
                }, "Delete"))) : C.createElement(C.Fragment, null, C.createElement(tr, null, (null === (a = de.results) || void 0 === a ? void 0 : a.length) > 0 ? de.results.map(function(e, t) {
                    return C.createElement(Xn.A, {
                        key: e.id,
                        image: e.imageUrl,
                        disableManagement: d,
                        onClick: function() {
                            j(t),
                                function(e) {
                                    A(e)
                                }(e.imageUrl)
                        },
                        showDeleteButton: Re,
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
                }) : C.createElement("p", {
                    className: "m-0"
                }, "There are no pictures here... yet!")), Re && C.createElement(nr, null, C.createElement(re.$n, {
                    className: "m-2",
                    disabled: ie,
                    onClick: function() {
                        v(!0)
                    }
                }, ie ? "Gallery is full" : C.createElement(C.Fragment, null, C.createElement(re.M2, {
                    icon: o.QL
                }), " Post an Image")), C.createElement(re.$n, {
                    neutral: !0,
                    onClick: function() {
                        F(!0)
                    }
                }, C.createElement(re.M2, {
                    icon: _.Ub
                }), " Manage Gallery")))))
            };
            var tr = (0, a.A)("div", {
                    target: "e5pi12i4"
                })({
                    name: "1kra7du",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;align-items:center;margin:10px 0;width:100%"
                }),
                nr = (0, a.A)("div", {
                    target: "e5pi12i3"
                })({
                    name: "198unna",
                    styles: "display:flex;flex-direction:row;justify-content:left;align-items:center;width:100%"
                }),
                rr = (0, a.A)("div", {
                    target: "e5pi12i2"
                })({
                    name: "1vtota4",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-bottom:8px"
                }),
                lr = (0, a.A)(re.$n, {
                    target: "e5pi12i1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                ar = (0, a.A)(re.$n, {
                    target: "e5pi12i0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                });

            function or(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ir(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? or(Object(n), !0).forEach(function(t) {
                        (0, L.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : or(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
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
                    i = (0, l.A)(a, 2),
                    c = i[0],
                    s = i[1],
                    u = C.useState(!1),
                    m = (0, l.A)(u, 2),
                    d = m[0],
                    p = m[1],
                    g = (0, pe.Oc)(),
                    f = (0, l.A)(g, 2),
                    v = f[0],
                    E = f[1],
                    h = E.data,
                    b = E.isLoading,
                    w = E.isSuccess,
                    y = E.isError,
                    x = E.error,
                    A = (0, Nt.DF)(),
                    k = C.useState(!1),
                    O = (0, l.A)(k, 2),
                    I = O[0],
                    S = O[1];
                C.useEffect(function() {
                    w && p(!1)
                }, [w]);
                var M = function(e) {
                        var t = "checkbox" === e.target.getAttribute("type") ? !e.target.checked : e.target.value;
                        s(ir(ir({}, c), {}, (0, L.A)({}, e.target.name, t)))
                    },
                    T = function() {
                        var e = (0, r.A)(N().mark(function e() {
                            return N().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return S(!1), e.prev = 1, e.next = 4, v(ir({
                                            groupId: n.id
                                        }, c)).unwrap();
                                    case 4:
                                        e.next = 9;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), A({
                                            error: e.t0
                                        }) && S(!0);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [1, 6]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    j = null;
                return P({
                    groupMember: null == n ? void 0 : n.myMember,
                    permission: "group-galleries-manage"
                }) && (j = d ? C.createElement(C.Fragment, null, C.createElement(re.N3, null, C.createElement("h4", null, "Create Gallery")), C.createElement(re.BW, null, C.createElement(J.A, null, "Gallery name", C.createElement(re.pd, {
                    value: c.name,
                    name: "name",
                    onChange: M,
                    disabled: b,
                    maxLength: 64
                })), " ", C.createElement(J.A, null, "Gallery description", C.createElement(re.pd, {
                    value: c.description,
                    name: "description",
                    onChange: M,
                    disabled: b,
                    maxLength: 512
                })), " ", C.createElement(re.fI, null, C.createElement(J.A, null, "Is this gallery public?", " ", C.createElement(Jn.A, {
                    type: "checkbox",
                    name: "membersOnly",
                    checked: !c.membersOnly,
                    onChange: M,
                    disabled: b
                }))), C.createElement(re.fI, null, C.createElement(re.$n, {
                    expand: !0,
                    onClick: T,
                    disabled: b,
                    loading: b
                }, "Create"), " ", C.createElement(re.$n, {
                    expand: !0,
                    neutral: !0,
                    onClick: function() {
                        p(!1)
                    },
                    disabled: b
                }, "Cancel")))) : C.createElement(re.$n, {
                    onClick: function() {
                        p(!0)
                    },
                    disabled: b,
                    loading: b
                }, C.createElement(re.M2, {
                    icon: o.QL
                }), " Create Gallery")), C.createElement("div", null, y && !I && C.createElement(re.$T, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == x || null === (t = x.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred while creating the gallery."), j, n.galleries.length > 0 ? n.galleries.map(function(e) {
                    return (e.membersOnly && (null == n ? void 0 : n.myMember) || !e.membersOnly) && C.createElement(er, {
                        key: e.id,
                        group: n,
                        gallery: e,
                        justAdded: w && (null == h ? void 0 : h.id) === e.id
                    })
                }) : C.createElement(sr, null, "There aren't any galleries here!"))
            };
            var sr = (0, a.A)(re.N3, {
                    target: "e7nydss0"
                })({
                    name: "es1q9a",
                    styles: "border-radius:6px;text-align:center;font-size:1.2rem;font-weight:bold;justify-content:center;align-items:center;padding:3rem 1rem;margin-top:0.5rem"
                }),
                ur = n(48799),
                mr = n(14982);

            function dr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function pr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? dr(Object(n), !0).forEach(function(t) {
                        (0, L.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dr(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const gr = function(e) {
                var t = e.group,
                    n = e.onJoinButtonClick,
                    r = (0, ur.A)().sortedLocations,
                    a = (0, te.P2)(),
                    i = a.data,
                    c = a.isLoading,
                    u = (0, pe.fj)({
                        userId: null == i ? void 0 : i.id,
                        groupId: t.id
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    m = u.data,
                    d = u.isLoading,
                    p = C.useState([]),
                    g = (0, l.A)(p, 2),
                    f = g[0],
                    v = g[1],
                    E = (0, pe.Yj)({
                        userId: null == i ? void 0 : i.id
                    }),
                    h = E.data,
                    b = E.isLoading,
                    w = (0, H.G)(),
                    y = w.data,
                    x = 0;
                w.isSuccess && (x = y.constants.GROUPS.MAX_JOINED), C.useEffect(function() {
                    var e;
                    if (!d) {
                        var t = null == r ? void 0 : r.map(function(e) {
                            return e.instanceId
                        });
                        v(null === (e = (0, D.A)(m)) || void 0 === e || null === (e = e.sort(function(e, t) {
                            var n = e.memberCount;
                            return t.memberCount - n
                        })) || void 0 === e ? void 0 : e.map(function(e) {
                            return t.includes(e.instanceId) ? pr(pr({}, e), {}, {
                                users: r.find(function(t) {
                                    return t.instanceId === e.instanceId
                                }).users
                            }) : pr(pr({}, e), {}, {
                                users: []
                            })
                        }))
                    }
                }, [m, r]);
                var A, k = C.useMemo(function() {
                    var e;
                    return null == f || null === (e = f.sort(function(e, t) {
                        var n = e.users,
                            r = t.users;
                        return n.length === r.length ? 0 : n.length > r.length ? -1 : 1
                    })) || void 0 === e ? void 0 : e.map(function(e) {
                        return C.createElement(mr.A, {
                            key: "location-".concat(e.location),
                            className: "mb-4",
                            location: e,
                            isForGroup: !0,
                            currentGroup: t
                        })
                    })
                }, [f]);
                if (d || c || b) return C.createElement(re.fy, {
                    width: "100%",
                    height: "200px"
                });
                var N = t.membershipStatus;
                if (t.memberCount < bt.$5 && (h.length < x || i.tagsSet.has("admin_uncap_owned_groups")))
                    if (N === bt.Bp.REQUESTED || N === bt.Bp.INVITED || N === bt.Bp.USER_BLOCKED) A = null;
                    else if (t.myMember) A = null;
                else switch (t.joinState) {
                    case bt.mm.OPEN:
                        A = C.createElement(re.$n, {
                            onClick: n,
                            className: "tw-w-full tw-mb-3"
                        }, C.createElement(re.M2, {
                            icon: o.QL,
                            className: "tw-mr-1"
                        }), "Join this group to view all instances");
                        break;
                    case bt.mm.REQUEST:
                        A = C.createElement(re.$n, {
                            onClick: n,
                            className: "tw-w-full tw-mb-3"
                        }, C.createElement(re.M2, {
                            icon: s.y_,
                            className: "tw-mr-1"
                        }), "Request to join to view all instances");
                        break;
                    default:
                        A = null
                }
                return C.createElement(C.Fragment, null, A, C.createElement(re.N3, null, C.createElement("h4", {
                    className: "text-center"
                }, "Instances")), C.createElement(re.BW, null, null != k && k.length ? k : C.createElement("p", {
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
                    v = void 0 === f ? {} : f,
                    E = v.thumbnailUrl,
                    h = v.currentAvatarThumbnailImageUrl,
                    b = v.displayName;
                return C.createElement(vr, null, C.createElement(Xn.A, {
                    image: E || h,
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
                }), C.createElement(Er, null, n && C.createElement("span", null, C.createElement(le.A, {
                    icon: Se.zq,
                    width: 25
                }), " "), C.createElement("h4", null, b)))
            };
            var vr = (0, a.A)("div", {
                    target: "e1ml2klq1"
                })({
                    name: "9flrez",
                    styles: "position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;>div:first-of-type{margin:0;border-bottom-right-radius:0;border-bottom-left-radius:0;}"
                }),
                Er = (0, a.A)("div", {
                    target: "e1ml2klq0"
                })({
                    name: "7foox8",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:center;border:4px solid #252a30;background-color:#252a30;text-align:center;width:100%;border-bottom-right-radius:8px;border-bottom-left-radius:8px"
                }),
                hr = n(15002),
                br = n(59362);
            const wr = function(e) {
                var t = e.group,
                    n = e.user,
                    r = e.errorCallback,
                    a = void 0 === r ? function() {} : r,
                    o = e.mode,
                    i = void 0 === o ? "invite" : o,
                    c = (0, pe.Jk)(),
                    s = (0, l.A)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = m.isLoading,
                    p = m.isSuccess,
                    g = m.isError,
                    f = m.error,
                    v = (0, pe.Vm)(),
                    E = (0, l.A)(v, 2),
                    h = E[0],
                    b = E[1],
                    w = b.isLoading,
                    x = b.isSuccess,
                    A = b.isError,
                    k = b.error,
                    N = d || w,
                    O = g || A,
                    I = f || k;
                return C.useEffect(function() {
                    O && a(I)
                }, [O, I]), C.createElement("div", {
                    className: "mt-2 mb-2 d-flex flex-column justify-content-center"
                }, C.createElement(br.A, {
                    className: "mb-0",
                    userId: n.id,
                    openLinksInNewTab: !0
                }), "invite" === i && C.createElement(re.$n, {
                    disabled: p || N,
                    loading: N,
                    onClick: function() {
                        return u({
                            groupId: t.id,
                            userId: n.id
                        })
                    },
                    color: p ? "success" : void 0
                }, p && C.createElement(re.M2, {
                    icon: y.e6,
                    className: "mx-2"
                }), "Invite", p && "d", " ", n.displayName), "ban" === i && C.createElement(re.$n, {
                    disabled: x || N,
                    loading: N,
                    onClick: function() {
                        return h({
                            groupId: t.id,
                            userId: n.id
                        })
                    },
                    color: x ? "success" : void 0
                }, x && C.createElement(re.M2, {
                    icon: y.e6,
                    className: "mx-2"
                }), "ban", x && "ned", " ", n.displayName))
            };
            var yr = n(11378),
                xr = n(74303);
            const Ar = function(e) {
                var t = e.group,
                    n = e.mode,
                    r = void 0 === n ? "invite" : n,
                    a = (0, I.wA)(),
                    o = (0, de.Om)(),
                    i = C.useState(""),
                    c = (0, l.A)(i, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, de.d7)(s),
                    d = (0, I.d4)(function(e) {
                        return e.search
                    }).userResults,
                    p = C.useState(""),
                    g = (0, l.A)(p, 2),
                    f = g[0],
                    v = g[1],
                    E = o && !1;
                C.useEffect(function() {
                    v(""), "" !== m && a((0, yr.x5)({
                        searchTerm: m,
                        n: xr.dQ,
                        isInternalVariant: E
                    }))
                }, [m]);
                var h = function(e) {
                    e && v(e.data.error.message)
                };
                return C.createElement(C.Fragment, null, C.createElement(hr.A, {
                    searchString: u,
                    placeholder: "Search users..."
                }), f && C.createElement(re.$T, {
                    type: "error",
                    title: "Error",
                    className: "px-4",
                    message: f
                }), d.map(function(e) {
                    return C.createElement(wr, {
                        mode: r,
                        key: e.id,
                        group: t,
                        user: e,
                        errorCallback: h
                    })
                }))
            };
            var kr = n(7563),
                Nr = n(89483);
            const Or = function(e) {
                var t, n, r, a, o, c, s, u, m = e.group,
                    d = (0, I.wA)(),
                    p = C.useState(!1),
                    g = (0, l.A)(p, 2),
                    f = g[0],
                    v = g[1],
                    E = C.useState(!1),
                    h = (0, l.A)(E, 2),
                    b = h[0],
                    w = h[1],
                    y = C.useState(null),
                    x = (0, l.A)(y, 2),
                    A = x[0],
                    k = x[1],
                    N = (0, pe.PD)({
                        groupId: m.id
                    }),
                    O = N.data,
                    M = N.isError,
                    j = N.isLoading,
                    R = (0, pe.zC)({
                        groupId: m.id
                    }),
                    G = R.data,
                    L = R.isError,
                    D = R.error,
                    F = R.isLoading,
                    $ = (0, pe.zC)({
                        groupId: m.id,
                        blocked: !0
                    }),
                    q = $.data,
                    U = $.isError,
                    B = $.error,
                    _ = ($.isFetching, (0, pe.KF)()),
                    z = (0, l.A)(_, 2),
                    W = z[0],
                    Y = z[1],
                    J = (Y.isLoading, Y.isError, Y.error, (0, pe.Kg)()),
                    X = (0, l.A)(J, 2),
                    K = X[0],
                    H = X[1],
                    Z = (H.isLoading, H.isError, H.error, (0, pe.QF)()),
                    ee = (0, l.A)(Z, 2),
                    te = ee[0],
                    ne = ee[1],
                    le = (ne.isLoading, ne.isError),
                    ae = ne.error,
                    ie = (0, pe.NL)(),
                    ce = (0, l.A)(ie, 2),
                    se = ce[0],
                    ue = ce[1],
                    me = (ue.isLoading, ue.isSuccess),
                    ge = ue.isError,
                    fe = ue.error,
                    ve = (0, pe.Fk)(),
                    Ee = (0, l.A)(ve, 2),
                    he = Ee[0],
                    be = Ee[1],
                    we = (be.isLoading, be.isError),
                    ye = be.error,
                    xe = (0, pe.Ev)(),
                    Ae = (0, l.A)(xe, 2),
                    ke = Ae[0],
                    Ne = Ae[1],
                    Oe = (Ne.isLoading, Ne.isError),
                    Ce = Ne.error;
                (0, S.Zp)(), (0, de.Om)();
                C.useEffect(function() {
                    me && d(Nr.m.util.updateQueryData("getGroupById", {
                        groupId: m.id
                    }, function(e) {
                        e.memberCount += 1
                    }))
                }, [me]);
                var Ie = function() {
                    w(!1), k(null)
                };
                P({
                    groupMember: null == m ? void 0 : m.myMember,
                    permission: "group-members-manage"
                });
                return C.createElement("div", null, C.createElement(T.A, {
                    isOpen: b && !!A,
                    toggle: Ie
                }, C.createElement(re.N3, null, C.createElement("h4", {
                    className: "text-center text-break"
                }, "Ban ", null == A ? void 0 : A.displayName, "?!?!")), C.createElement(re.BW, null, C.createElement("div", null, C.createElement(re.fI, null, C.createElement(re.$n, {
                    danger: !0,
                    onClick: function() {
                        var e;
                        e = null == A ? void 0 : A.id, he({
                            groupId: m.id,
                            userId: e
                        }), Ie()
                    },
                    expand: !0
                }, C.createElement(re.M2, {
                    icon: i.pn
                }), " And stay out!"), " ", C.createElement(re.$n, {
                    neutral: !0,
                    onClick: Ie,
                    expand: !0
                }, "Cancel"))))), C.createElement(T.A, {
                    isOpen: f
                }, C.createElement(Q.A, {
                    close: C.createElement(oe.A, {
                        onClick: function() {
                            v(!1)
                        }
                    })
                }, C.createElement("h4", {
                    className: "m-0"
                }, "Invite Somebody")), C.createElement(V.A, null, C.createElement(Ar, {
                    group: m,
                    mode: "invite"
                }))), C.createElement(re.$n, {
                    className: "mb-2",
                    color: "primary",
                    onClick: function() {
                        v(!0)
                    }
                }, "Invite Somebody"), C.createElement(kr.A, {
                    title: "Join Requests",
                    collapseOpen: !0
                }, we && C.createElement(re.$T, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == ye || null === (t = ye.data) || void 0 === t ? void 0 : t.error.message) || "There was an error banning the user."), L && C.createElement(re.$T, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == D || null === (n = D.data) || void 0 === n ? void 0 : n.error.message) || "There was an error loading the join requests."), le && C.createElement(re.$T, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == ae || null === (r = ae.data) || void 0 === r ? void 0 : r.error.message) || "There was an error rejecting the join request."), ge && C.createElement(re.$T, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == fe || null === (a = fe.data) || void 0 === a ? void 0 : a.error.message) || "There was an error accepting the join request."), C.createElement(re.N3, null, C.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Applicants")), C.createElement(re.BW, {
                    className: "mb-2"
                }, F ? C.createElement(re.fy, {
                    width: "100%",
                    height: "75px"
                }) : C.createElement(Cr, null, 0 === (null == G ? void 0 : G.length) ? C.createElement("p", {
                    className: "m-0"
                }, "Nobody is waiting to join!") : null, null == G ? void 0 : G.map(function(e) {
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
                            W({
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
                })))), C.createElement(kr.A, {
                    title: "Sent Invites"
                }, M && C.createElement(re.$T, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == D || null === (o = D.data) || void 0 === o ? void 0 : o.error.message) || "There was an error loading the invites."), Oe && C.createElement(re.$T, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == Ce || null === (c = Ce.data) || void 0 === c ? void 0 : c.error.message) || "There was an error deleting the invite."), C.createElement(re.N3, null, C.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Invites")), C.createElement(re.BW, {
                    className: "mb-2"
                }, j ? C.createElement(re.fy, {
                    width: "100%",
                    height: "75px"
                }) : C.createElement(Cr, null, 0 === (null == O ? void 0 : O.length) ? C.createElement("p", {
                    className: "m-0"
                }, "Nobody has been invited to this group!") : null, null == O ? void 0 : O.map(function(e) {
                    return C.createElement("div", {
                        className: "mb-2"
                    }, C.createElement(fr, {
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
                })))), C.createElement(kr.A, {
                    title: "Blocked Requests"
                }, U && C.createElement(re.$T, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == B || null === (s = B.data) || void 0 === s ? void 0 : s.error.message) || "There was an error loading the invites."), Oe && C.createElement(re.$T, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == Ce || null === (u = Ce.data) || void 0 === u ? void 0 : u.error.message) || "There was an error deleting the invite."), C.createElement(re.N3, null, C.createElement("h4", {
                    className: "font-weight-bold text-center"
                }, "Blocked Applicants")), C.createElement(re.BW, {
                    className: "mb-2"
                }, j ? C.createElement(re.fy, {
                    width: "100%",
                    height: "75px"
                }) : C.createElement(Cr, null, 0 === (null == q ? void 0 : q.length) ? C.createElement("p", {
                    className: "m-0"
                }, "Nobody has been blocked from joining the group!") : null, null == q ? void 0 : q.map(function(e) {
                    return C.createElement("div", {
                        className: "mb-2"
                    }, C.createElement(fr, {
                        member: e,
                        onUnblock: function() {
                            K({
                                groupId: m.id,
                                userId: e.userId
                            })
                        },
                        navigate: "/home/user/".concat(e.userId),
                        showView: !1
                    }))
                })))))
            };
            var Cr = (0, a.A)("div", {
                    target: "e1hocgvc0"
                })({
                    name: "1fx10vo",
                    styles: "display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:space-around"
                }),
                Ir = n(58168),
                Sr = n(5361),
                Mr = n(3604),
                Tr = n(32575),
                jr = n(32936),
                Rr = n(51921),
                Pr = n(51819),
                Gr = n(15911);
            const Lr = function(e) {
                var t, n, r, a, o, i = e.group,
                    c = (0, I.wA)(),
                    s = (0, de.Om)(),
                    u = (0, I.d4)(function(e) {
                        return e.listingRow.modals.subscriptionCancellation
                    }),
                    m = (0, I.d4)(function(e) {
                        return e.listingRow.modals.rules
                    }),
                    d = (0, I.d4)(function(e) {
                        return e.listingRow.modals.purchaseConfirmation
                    }),
                    p = (0, I.d4)(function(e) {
                        return e.listingRow.modals.purchase
                    }),
                    g = (0, te.P2)(),
                    f = g.data,
                    v = g.isLoading,
                    E = (0, Sr.m2)({
                        storeId: null == i ? void 0 : i.storeId,
                        hydrateListings: !0
                    }, {
                        skip: !(null != i && i.storeId),
                        refetchOnMountOrArgChange: !0
                    }),
                    h = E.data,
                    b = E.isFetching,
                    w = E.isError,
                    y = E.error,
                    x = (0, Sr.hZ)({
                        receiverId: f.id,
                        sellerId: i.ownerId,
                        active: !0,
                        mostRecent: !0
                    }, {
                        skip: !f || !(null != h && null !== (t = h.listings) && void 0 !== t && t.length),
                        refetchOnMountOrArgChange: !0
                    }),
                    A = x.data,
                    k = void 0 === A ? [] : A,
                    N = x.isLoading,
                    O = x.isError,
                    S = x.error,
                    M = C.useMemo(function() {
                        var e;
                        return null == h || null === (e = h.listings) || void 0 === e ? void 0 : e.map(function(e) {
                            return {
                                listing: e,
                                purchase: k.find(function(t) {
                                    return t.listingId === e.id
                                })
                            }
                        })
                    }, [k, h]),
                    T = (0, Sr.KT)(),
                    j = T.data,
                    R = void 0 === j ? {
                        economyOnline: !1,
                        plannedOfflineWindowStart: null,
                        plannedOfflineWindowEnd: null,
                        offlineReason: null,
                        economyState: null,
                        shadowBreaker: null,
                        ledgerMode: null
                    } : j,
                    P = R.economyOnline,
                    G = R.plannedOfflineWindowStart,
                    L = R.plannedOfflineWindowEnd,
                    D = R.offlineReason,
                    F = R.economyState,
                    $ = (R.shadowBreaker, R.ledgerMode, T.isFetching),
                    q = T.isError,
                    U = T.error,
                    B = (0, Sr.Gm)({
                        userId: f.id
                    }, {
                        skip: !f,
                        refetchOnMountOrArgChange: !0
                    }),
                    _ = B.data,
                    z = (void 0 === _ ? {
                        balance: 0
                    } : _).balance,
                    W = B.isLoading,
                    V = B.isError,
                    Y = C.useCallback(function(e) {
                        var t = e.currentUserId,
                            n = e.listingId,
                            r = e.listing,
                            l = e.purchase;
                        c((0, Mr.tj)({
                            currentUserId: t,
                            listingId: n,
                            listing: r,
                            purchase: l
                        }))
                    }),
                    J = C.useCallback(function(e, t) {
                        var n = t.listing,
                            r = t.purchase,
                            l = t.totalPrice,
                            a = t.includesGroupAccess,
                            o = t.includesGroupAccessRemove,
                            s = t.enteredPurchaseQuantity,
                            u = t.selectedPurchaseQuantity,
                            m = t.quantity;
                        c(e ? (0, Mr.DC)({
                            listing: n,
                            purchase: r,
                            group: i,
                            totalPrice: l,
                            tokenBalance: z,
                            includesGroupAccess: a,
                            includesGroupAccessRemove: o,
                            quantity: m,
                            enteredPurchaseQuantity: s,
                            selectedPurchaseQuantity: u
                        }) : (0, Mr.O1)({
                            listing: n,
                            purchase: r,
                            group: i,
                            totalPrice: l,
                            tokenBalance: z,
                            includesGroupAccess: a,
                            includesGroupAccessRemove: o,
                            quantity: m,
                            enteredPurchaseQuantity: s,
                            selectedPurchaseQuantity: u
                        }))
                    }, [z, i]),
                    X = C.useState(!1),
                    Q = (0, l.A)(X, 2),
                    K = Q[0],
                    H = Q[1];
                if (v || N || b || $ || W) return C.createElement(re.fy, {
                    width: "100%",
                    height: "200px"
                });
                var Z = function(e) {
                        return null == k ? void 0 : k.some(function(t) {
                            return t.listingId === e
                        })
                    },
                    ee = K ? null == M ? void 0 : M.filter(function(e) {
                        return Z(e.listing.id)
                    }) : null == M ? void 0 : M.filter(function(e) {
                        return !Z(e.listing.id)
                    }),
                    ne = (0, xe.MU)(G);
                return C.createElement(C.Fragment, null, C.createElement(re.N3, {
                    className: "flex-row justify-content-center align-items-center"
                }, C.createElement("h4", {
                    className: "text-center flex-grow-1"
                }, "Store")), C.createElement(re.BW, null, q && C.createElement(re.$T, {
                    type: "error",
                    title: "Something strange happened"
                }, C.createElement("p", {
                    className: "m-0"
                }, "Error getting Tilia online status: ", U.status, " ", null !== (n = null === (r = U.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : "Unknown error")), !P && !q && C.createElement(re.$T, {
                    type: "warn",
                    title: "Store Maintenance"
                }, C.createElement(C.Fragment, null, C.createElement("p", {
                    className: "m-0"
                }, "Store Currently Offline: ", null != D ? D : "Unknown Reason"), C.createElement("p", {
                    className: "m-0"
                }, "Projected Service Return: ", (0, xe.xv)(L)))), O && C.createElement(re.$T, {
                    type: "error",
                    title: "Error loading purchases"
                }, null == S || null === (a = S.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message), w && C.createElement(re.$T, {
                    type: "error",
                    title: "Error loading listings"
                }, null == y || null === (o = y.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message), ne && P && C.createElement(re.$T, {
                    type: "warn",
                    title: "Store Maintenance"
                }, C.createElement("p", {
                    className: "m-0"
                }, "Starts: ", (0, xe.xv)(G)), C.createElement("p", {
                    className: "m-0"
                }, "Ends: ", (0, xe.xv)(L))), C.createElement(ce.A, {
                    tabs: [{
                        name: "Available Subscriptions",
                        id: "available",
                        condition: !0
                    }, {
                        name: "Your Subscriptions",
                        id: "your",
                        condition: !0
                    }],
                    selected: K ? "your" : "available",
                    onChange: function(e) {
                        return H("your" === e)
                    },
                    justify: "left"
                }), null != ee && ee.length ? null == ee ? void 0 : ee.map(function(e, t) {
                    return C.createElement(Tr.A, (0, Ir.A)({
                        key: e.listing.id
                    }, e, {
                        group: i,
                        tokenBalance: !V && z,
                        index: t,
                        economyOnline: P,
                        economyState: F,
                        isMod: s,
                        onCancel: Y,
                        onPurchase: J
                    }))
                }) : C.createElement("p", null, K ? "You have no current subscriptions to this group!" : "There are no subscription options here!"), u.isOpen && C.createElement(jr.A, null), m.isOpen && C.createElement(Gr.A, null), d.isOpen && C.createElement(Rr.A, {
                    groupData: i
                }), p.isOpen && C.createElement(Pr.A, null)))
            };
            var Dr = n(72507),
                Fr = n(56967),
                $r = n(1871),
                qr = n(20563);
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
                    g = (0, C.useState)(!1),
                    f = (0, l.A)(g, 2),
                    v = f[0],
                    E = f[1],
                    h = n.createdAt,
                    b = n.imageUrl,
                    w = void 0 === b ? null : b,
                    y = n.title,
                    x = n.text,
                    A = void 0 === x ? "" : x,
                    k = n.roleIds,
                    N = void 0 === k ? [] : k,
                    O = n.visibility,
                    I = null !== w && "" !== w,
                    S = a.roleIds,
                    M = (null === (t = A.match(/[^\n]*\n[^\n]*/gi)) || void 0 === t ? void 0 : t.length) || 0,
                    T = (0, C.useMemo)(function() {
                        if (!v && M > 3) {
                            var e = [];
                            return (0, D.A)(A).forEach(function(t, n) {
                                "\n" !== t && "\r" !== t || e.push(n)
                            }), "".concat(A.substring(0, e[3]), "... ")
                        }
                        return !v && A.length > 400 ? "".concat(A.substring(0, 400), "... ") : A
                    }, [v, A]),
                    j = (0, C.useMemo)(function() {
                        return !v && (A.length > 400 || M > 3)
                    }, [v, A]);
                return C.createElement("div", {
                    className: "d-flex align-items-center"
                }, C.createElement(_r, {
                    isExpanded: v,
                    ref: i,
                    className: "container-fluid p-0"
                }, C.createElement("div", {
                    className: "row"
                }, C.createElement("div", {
                    className: "col-12 d-flex align-items-center d-sm-none"
                }, C.createElement(Kr, {
                    src: w
                })), C.createElement("div", {
                    className: "".concat(I ? " col-sm-6 col-md-6 col-lg-7 col-xl-7 col-12" : "col-12")
                }, C.createElement(zr, null, C.createElement(Vr, null, y), function() {
                    if (0 === N.length) return C.createElement(Yr, null, C.createElement("div", null, C.createElement(re.M2, {
                        icon: $r.a$
                    }), " ", (0, xe.Db)(h), C.createElement(re.M2, {
                        className: "ms-2",
                        icon: qr.GH
                    }), " ", "public" === O ? "Public" : "Group"));
                    var e = (0, D.A)(N).sort(function(e, t) {
                        return S.includes(t) ? 1 : -1
                    });
                    return C.createElement(Yr, null, C.createElement("div", null, C.createElement(re.M2, {
                        icon: $r.a$
                    }), " ", (0, xe.Db)(h)), C.createElement(Xr, null, C.createElement(re.M2, {
                        icon: Fr.k6
                    }), " Only Seen By", " ", e.map(function(e) {
                        var t = p.find(function(t) {
                                return t.id === e
                            }),
                            n = !(null == t || !t.productId);
                        return t ? C.createElement(Jr, {
                            id: t.id,
                            hasRole: S.includes(t.id)
                        }, n ? C.createElement(C.Fragment, null, C.createElement(re.M2, {
                            icon: Dr.CP,
                            className: "me-1"
                        }), t.name) : t.name) : null
                    })))
                }(), C.createElement(Wr, {
                    hasImage: I,
                    isExpanded: v
                }, T, C.createElement(Qr, {
                    showReadMore: j,
                    onClick: function() {
                        return E(!0)
                    }
                }, "Read More")))), I && C.createElement("div", {
                    className: "col-12 col-sm-6 col-md-6 col-lg-5 col-xl-5 d-none d-sm-flex align-items-center"
                }, C.createElement(Kr, {
                    src: w
                })))), s && C.createElement("div", {
                    className: "ps-5 pe-4"
                }, C.createElement(Br, {
                    color: "danger",
                    onClick: function() {
                        return m(n)
                    }
                }, C.createElement(re.M2, {
                    icon: F.yL
                }))))
            };
            var Br = (0, a.A)(_e.A, {
                    target: "ewr2sfy9"
                })({
                    name: "3891qj",
                    styles: "border-radius:50px;color:white"
                }),
                _r = (0, a.A)("div", {
                    target: "ewr2sfy8"
                })({
                    name: "m9gplg",
                    styles: "background-color:#0a0a0d;border-radius:10px;color:#bababa;margin-bottom:20px;overflow:hidden;transition:all 0.3s ease-in-out"
                }),
                zr = (0, a.A)("div", {
                    target: "ewr2sfy7"
                })({
                    name: "1yjx7km",
                    styles: "padding:20px"
                }),
                Wr = (0, a.A)("p", {
                    target: "ewr2sfy6"
                })({
                    name: "n4pob0",
                    styles: "font-size:18px;flex-grow:1;word-wrap:break-word;white-space:pre-wrap;display:inline-block;overflow:auto;margin-bottom:0;min-height:auto;font-size:16px;margin-top:14px;width:100%"
                }),
                Vr = (0, a.A)("h4", {
                    target: "ewr2sfy5"
                })({
                    name: "1ji90xs",
                    styles: "text-align:start;color:#fff;word-break:normal;font-size:20px"
                }),
                Yr = (0, a.A)("h4", {
                    target: "ewr2sfy4"
                })({
                    name: "1rmpetc",
                    styles: "color:#737372;font-size:12px;font-weight:500;line-height:1.3em;display:inline-block"
                }),
                Jr = (0, a.A)("div", {
                    target: "ewr2sfy3"
                })("color:#dadada;background-color:#575757;padding:0.4em;border-radius:10rem;display:inline-block;font-size:12px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;font-weight:normal;margin-right:5px;opacity:", function(e) {
                    return e.hasRole ? 1 : .7
                }, ";"),
                Xr = (0, a.A)("div", {
                    target: "ewr2sfy2"
                })({
                    name: "1mcu3c1",
                    styles: "line-height:2em;margin-top:4px"
                }),
                Qr = (0, a.A)("span", {
                    target: "ewr2sfy1"
                })("color:#fff;cursor:pointer;display:", function(e) {
                    return e.showReadMore ? "inline-block" : "none"
                }, ";"),
                Kr = (0, a.A)("img", {
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
                    a = t.roles.filter(function(e) {
                        return !0 === e.isManagementRole && !t.defaultRole
                    }),
                    o = t.roles.filter(function(e) {
                        return !1 === e.isManagementRole && !t.defaultRole
                    }),
                    i = function(e) {
                        return !(null == e || !e.productId)
                    };
                return C.createElement(el, null, C.createElement("h6", null, "Management Roles"), C.createElement("div", {
                    className: "d-flex flex-wrap"
                }, a.map(function(e) {
                    return C.createElement(re.aE, {
                        id: e.id,
                        label: i(e) ? C.createElement(C.Fragment, null, C.createElement(re.M2, {
                            icon: Dr.CP,
                            className: "me-1"
                        }), e.name) : e.name,
                        value: e.id,
                        checked: l.includes(e.id),
                        onChange: function(e) {
                            return n(e)
                        }
                    })
                })), C.createElement("h6", {
                    className: "mt-2"
                }, "Member Roles"), C.createElement("div", {
                    className: "d-flex flex-wrap"
                }, o.map(function(e) {
                    return C.createElement(re.aE, {
                        id: e.id,
                        label: i(e) ? C.createElement(C.Fragment, null, C.createElement(re.M2, {
                            icon: Dr.CP,
                            className: "me-1"
                        }), e.name) : e.name,
                        value: e.id,
                        checked: l.includes(e.id),
                        onChange: function(e) {
                            return n(e)
                        }
                    })
                })))
            };
            Hr.propTypes = {
                group: fe().object.isRequired,
                onChange: fe().func.isRequired,
                selectedRoles: fe().array.isRequired
            };
            const Zr = Hr;
            var el = (0, a.A)("div", {
                target: "e1qh7s420"
            })({
                name: "kq62ql",
                styles: "background-color:#000000;border-radius:5px;padding:16px 20px"
            });
            var tl = C.lazy(function() {
                    return Promise.all([n.e(1952), n.e(3015), n.e(8242), n.e(4736), n.e(6313), n.e(6683), n.e(7596), n.e(5532)]).then(n.bind(n, 67596))
                }),
                nl = (0, a.A)(re.TM, {
                    target: "e37d6q30"
                })({
                    name: "tz9wht",
                    styles: ">textarea{min-height:250px;}"
                });
            const rl = function(e) {
                var t = e.group,
                    n = (0, I.wA)(),
                    a = C.useState(""),
                    o = (0, l.A)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = C.useState(""),
                    u = (0, l.A)(s, 2),
                    m = u[0],
                    d = u[1],
                    p = C.useState("group"),
                    g = (0, l.A)(p, 2),
                    f = g[0],
                    v = g[1],
                    E = C.useState([]),
                    h = (0, l.A)(E, 2),
                    b = h[0],
                    w = h[1],
                    y = C.useState(null),
                    x = (0, l.A)(y, 2),
                    A = x[0],
                    k = x[1],
                    S = C.useState(!0),
                    M = (0, l.A)(S, 2),
                    j = M[0],
                    R = M[1],
                    P = C.useState(!1),
                    G = (0, l.A)(P, 2),
                    L = G[0],
                    F = G[1],
                    $ = C.useState(""),
                    q = (0, l.A)($, 2),
                    U = q[0],
                    B = q[1],
                    _ = (0, te.w_)().data,
                    z = void 0 === _ ? [] : _,
                    W = (0, pe.oS)(),
                    Q = (0, l.A)(W, 2),
                    K = Q[0],
                    H = Q[1].isLoading,
                    ee = (0, Nt.DF)();
                (0, C.useEffect)(function() {
                    "selectedRoles" !== f && w([])
                }, [f]);
                var ne = function() {
                        c(""), d(""), k(null), R(!0), B(""), w([]), v("group")
                    },
                    le = function() {
                        var e = (0, r.A)(N().mark(function e() {
                            return N().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, K({
                                            groupId: t.id,
                                            title: m,
                                            text: i,
                                            imageId: A,
                                            sendNotification: j,
                                            roleIds: b,
                                            visibility: "public" === f ? "public" : "group"
                                        }).unwrap();
                                    case 3:
                                        ne(), e.next = 11;
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
                            }, e, null, [
                                [0, 6]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    oe = "" === i.trim() || "" === m.trim(),
                    ie = z.includes("permission-user-gallery"),
                    ce = [{
                        label: C.createElement(re.fI, {
                            className: "d-flex flex-column"
                        }, C.createElement(J.A, {
                            className: "mb-0"
                        }, "Public"), C.createElement("small", null, "Non-Group members can view this post")),
                        selectedLabel: "Public",
                        value: "public"
                    }, {
                        label: C.createElement(re.fI, {
                            className: "d-flex flex-column"
                        }, C.createElement(J.A, {
                            className: "mb-0"
                        }, "All Group Members"), C.createElement("small", null, "All group members can view this post")),
                        selectedLabel: "Group",
                        value: "group"
                    }, {
                        label: C.createElement(re.fI, {
                            className: "d-flex flex-column"
                        }, C.createElement(J.A, {
                            className: "mb-0"
                        }, "Selected Roles"), C.createElement("small", null, "Select the group roles who can view this post")),
                        selectedLabel: "Selected Roles",
                        value: "selectedRoles"
                    }];
                return C.createElement(re.fv, {
                    className: "w-100"
                }, C.createElement(T.A, {
                    isOpen: L,
                    className: (0, O.AH)({
                        name: "1ul0gzp",
                        styles: "max-width:1500px!important"
                    })
                }, C.createElement(V.A, null, C.createElement(tl, {
                    isSelector: !0,
                    activeTab: "photos",
                    selectedCallback: function(e, t) {
                        k(e), B(t), F(!1)
                    },
                    selectedId: null != A ? A : null
                })), C.createElement(Y.A, null, C.createElement(re.$n, {
                    onClick: function() {
                        F(!1), n((0, Z.S0)())
                    }
                }, "Cancel"))), C.createElement("div", {
                    className: "mb-3"
                }, C.createElement(J.A, null, "Post title"), C.createElement(re.pd, {
                    type: "text",
                    value: m,
                    onChange: function(e) {
                        return d(e.target.value)
                    },
                    maxLength: 128
                })), C.createElement("div", {
                    className: "mb-3"
                }, C.createElement(J.A, null, "Post message"), C.createElement(nl, {
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
                }, C.createElement(ae.A, {
                    label: "Send notification",
                    value: "sendNotification",
                    defaultChecked: j,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        R(t)
                    }
                }), C.createElement(X.A, null, "If on, a notification of this post will be sent to all members of the group!")), C.createElement("div", {
                    className: "mb-3"
                }, C.createElement(J.A, null, "Who can see this post"), C.createElement(re.ms, {
                    options: ce,
                    className: "flex-grow-1",
                    value: f,
                    onChange: function(e) {
                        return v(e)
                    },
                    trimToLength: !0
                })), "selectedRoles" === f && C.createElement("div", {
                    className: "mb-3"
                }, C.createElement(Zr, {
                    group: t,
                    onChange: function(e) {
                        var t, n;
                        return null != e && null !== (t = e.target) && void 0 !== t && t.checked ? w([].concat((0, D.A)(b), [null == e || null === (n = e.target) || void 0 === n ? void 0 : n.value])) : w(b.filter(function(t) {
                            var n;
                            return t !== (null == e || null === (n = e.target) || void 0 === n ? void 0 : n.value)
                        }))
                    },
                    selectedRoles: b
                })), C.createElement(re.fI, {
                    className: "w-100"
                }, ie && C.createElement(C.Fragment, null, C.createElement(re.$n, {
                    neutral: !0,
                    expand: !0,
                    disabled: H,
                    loading: H,
                    onClick: function() {
                        F(!0)
                    }
                }, "Select an Image"), " "), C.createElement(re.$n, {
                    disabled: oe || H,
                    loading: H,
                    expand: !0,
                    onClick: le
                }, "Create Post")), " ", C.createElement(Ur, {
                    postData: {
                        text: i,
                        title: m,
                        imageUrl: U,
                        roleIds: b
                    },
                    groupRoles: t.roles
                }))
            };
            var ll = n(27070);
            const al = function(e) {
                var t = e.groupId,
                    n = e.isRepresenting,
                    a = (0, C.useState)(null),
                    o = (0, l.A)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = (0, I.wA)(),
                    u = (0, pe.kh)(),
                    m = (0, l.A)(u, 2),
                    d = m[0],
                    p = m[1],
                    g = p.isLoading,
                    f = p.error,
                    v = null != i ? i : n,
                    E = function() {
                        var e = (0, r.A)(N().mark(function e(t) {
                            var n, r;
                            return N().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return c(n = !v), e.prev = 2, e.next = 5, d({
                                            groupId: t,
                                            isRepresenting: n
                                        }).unwrap();
                                    case 5:
                                        s((0, ee.X)({
                                            title: "Group representation updated!",
                                            icon: A.SG,
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 12;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(2), c(!n), s((0, ee.X)({
                                            title: "Error Updating Represented Group",
                                            icon: x.zp,
                                            message: "".concat((null == f || null === (r = f.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || "An error occurred while updating your represented group."),
                                            color: "error",
                                            timeout: 3e3
                                        }));
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [2, 8]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return C.createElement(re.$n, {
                    disabled: g,
                    onClick: function() {
                        return E(t)
                    },
                    neutral: !0,
                    type: "button",
                    className: "tw-gap-2 tw-w-fit tw-flex tw-items-center tw-px-[10px] tw-py-2 tw-align-middle"
                }, C.createElement(re.M2, {
                    icon: v ? ll.vrcRepresenting : ll.vrcNotRepresenting,
                    className: "tw-h-4 tw-w-4"
                }), C.createElement("p", {
                    className: "tw-m-0"
                }, v ? "Unrepresent Group" : "Represent Group"))
            };
            var ol = n(6062);
            const il = function(e) {
                var t = e.group,
                    n = e.showBlockModal,
                    r = e.onClose,
                    a = (0, pe.lb)(),
                    o = (0, l.A)(a, 2),
                    c = o[0],
                    s = o[1].isSuccess;
                return C.useEffect(function() {
                    s && r()
                }, [s]), C.createElement(T.A, {
                    className: "text-center text-break",
                    isOpen: n,
                    toggle: function() {
                        r()
                    }
                }, C.createElement(re.N3, null, C.createElement("h4", null, "Block ", null == t ? void 0 : t.name, "?")), C.createElement(re.BW, null, C.createElement("p", null, "Are you sure you want to block ", null == t ? void 0 : t.name, "?", C.createElement("br", null), " You will no longer be able to:", C.createElement("br", null), C.createElement("br", null), "• Join this group.", C.createElement("br", null), "• Get invites from this group. 💔"), C.createElement(re.fI, null, C.createElement(re.$n, {
                    danger: !0,
                    expand: !0,
                    onClick: function() {
                        c({
                            groupId: null == t ? void 0 : t.id
                        })
                    }
                }, C.createElement(re.M2, {
                    icon: i.pn
                }), "   Block"), " ", C.createElement(re.$n, {
                    neutral: !0,
                    expand: !0,
                    onClick: r
                }, "Cancel"))))
            };
            const cl = function() {
                return C.createElement(C.Fragment, null, C.createElement(re.N3, {
                    className: "text-center"
                }, C.createElement("h2", null, "You've Blocked this Group!")), C.createElement(re.BW, {
                    className: "text-center"
                }, "You won't get any invites from this group, and you can't join it.", C.createElement("br", null), C.createElement("br", null), "If you want to join this group or get invites from it, you have to unblock it first."))
            };
            var sl = n(63461);
            var ul = function(e) {
                var t = e.group,
                    n = e.currentUser,
                    r = e.targetUser,
                    l = e.onAccept,
                    a = e.onCancel,
                    o = e.isLoading,
                    i = t.transferTargetId === (null == n ? void 0 : n.id),
                    c = (null == t ? void 0 : t.ownerId) === (null == n ? void 0 : n.id);
                return C.createElement(dl, null, o ? C.createElement(re.fy, {
                    width: "100%",
                    height: "30px",
                    className: "mt-4"
                }) : C.createElement(re.fI, {
                    className: "tw-justify-between"
                }, C.createElement(re.fv, {
                    className: "gap-1"
                }, C.createElement(re.fI, null, C.createElement(re.M2, {
                    className: "tw-mt-[8px]",
                    icon: f.z$,
                    width: 20
                }), i ? C.createElement("span", {
                    className: "tw-mt-[6px]"
                }, C.createElement(M.N_, {
                    to: "/home/user/".concat(r.id)
                }, r.displayName), " has initiated a transfer of ownership to you") : C.createElement("span", {
                    className: "tw-mt-[6px]"
                }, c ? "You have initiated an ownership transfer to " : "Ownership transfer has been initiated to ", C.createElement(M.N_, {
                    to: "/home/user/".concat(r.id)
                }, r.displayName)))), C.createElement(re.fv, {
                    className: "gap-1"
                }, C.createElement(re.fI, {
                    className: "tw-gap-[12px]"
                }, i && C.createElement(re.$n, {
                    success: !0,
                    onClick: function() {
                        return l()
                    }
                }, C.createElement(re.M2, {
                    icon: y.e6
                }), "  Accept"), C.createElement(re.$n, {
                    danger: !0,
                    onClick: function() {
                        return a()
                    }
                }, C.createElement(re.M2, {
                    icon: sl.Qb
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
            var dl = (0, a.A)("div", {
                    target: "ean9tdl0"
                })({
                    name: "1sccrd7",
                    styles: "display:flex;flex-direction:column;background-color:#252A30;margin-top:10px;margin-bottom:10px;border-radius:3px;padding:10px;border-left:3px solid #252A30"
                }),
                pl = n(48037),
                gl = n(90154);
            var fl = function(e) {
                var t = e.group,
                    n = void 0 === t ? null : t,
                    r = e.isEditMode,
                    a = (0, C.useState)(1),
                    o = (0, l.A)(a, 2),
                    i = o[0],
                    c = o[1],
                    s = (0, C.useState)(!1),
                    u = (0, l.A)(s, 2),
                    m = u[0],
                    d = u[1],
                    p = (0, C.useState)(!1),
                    g = (0, l.A)(p, 2),
                    f = g[0],
                    v = g[1],
                    E = (0, C.useState)(!1),
                    h = (0, l.A)(E, 2),
                    b = h[0],
                    w = h[1],
                    y = n.id,
                    x = n.roles,
                    A = n.myMember,
                    k = 10,
                    N = Math.ceil((i + 1) / k),
                    O = (0, pe.v0)(),
                    I = (0, l.A)(O, 2),
                    S = I[0],
                    M = I[1],
                    T = M.isLoading,
                    j = M.isSuccess,
                    R = (0, pl.W)({
                        rootMargin: "50px 0px",
                        onEnter: function(e) {
                            (0, e.unobserve)(), c(i + 1)
                        }
                    }),
                    P = R.observe,
                    G = (0, pl.W)({
                        rootMargin: "0px 0px",
                        onEnter: function(e) {
                            var t = e.scrollDirection,
                                n = e.unobserve;
                            "down" === t.vertical && (n(), c(i - 1))
                        }
                    }).observe,
                    L = (0, pe.iZ)({
                        pageValue: i - 1,
                        n: k,
                        groupId: y,
                        publicOnly: !A
                    }, {
                        skip: 1 === i,
                        refetchOnMountOrArgChange: !0
                    }),
                    F = (0, pe.iZ)({
                        pageValue: i,
                        n: k,
                        groupId: y,
                        publicOnly: !A
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    $ = (0, pe.iZ)({
                        pageValue: i + 1,
                        n: k,
                        groupId: y,
                        publicOnly: !A
                    }, {
                        refetchOnMountOrArgChange: !0
                    }),
                    q = (0, C.useMemo)(function() {
                        var e = new Array(k * (N + 1)).fill(null);
                        return (0, D.A)(new Set([L.data, F.data, $.data])).map(function(t) {
                            return null != t && t.posts ? e.splice.apply(e, [t.offset, t.posts.length].concat((0, D.A)(t.posts))) : []
                        }), e.filter(function(e) {
                            return null !== e
                        })
                    }, [k, L.data, F.data, $.data]);
                (0, C.useEffect)(function() {
                    d(q.some(function(e) {
                        return null !== e
                    }))
                }, [q]), (0, C.useEffect)(function() {
                    j && v(!1)
                }, [j]);
                var U = function(e) {
                        w(e), v(!0)
                    },
                    B = (0, C.useMemo)(function() {
                        return m ? q.map(function(e, t) {
                            return null !== e ? C.createElement("div", {
                                key: e.id
                            }, C.createElement(Ur, {
                                myMember: A,
                                postData: e,
                                observe: t === q.length - 1 ? P : 0 === t && 1 !== i ? G : null,
                                isEditMode: r,
                                deleteCallback: U,
                                groupRoles: x
                            })) : null
                        }) : null
                    }, [q, m]);
                return m ? C.createElement("div", {
                    className: "py-4"
                }, C.createElement(gl.A, {
                    isOpen: f,
                    bodyText: "Are you sure you want to delete this post?",
                    cancelCallback: function() {
                        return v(!1)
                    },
                    confirmCallback: function() {
                        return S({
                            groupId: y,
                            postId: b.id
                        })
                    },
                    isLoading: T
                }), C.createElement(hl, null, C.createElement(wl, null, C.createElement(bl, null, "Posts")), C.createElement(yl, null, C.createElement(El, null, C.createElement("div", {
                    className: "col"
                }, B))))) : null
            };
            fl.propTypes = {};
            const vl = fl;
            var El = (0, a.A)("div", {
                    target: "emafa4s4"
                })({
                    name: "1s65yl6",
                    styles: "max-height:450px;margin-top:15px;margin-bottom:10px;overflow:auto"
                }),
                hl = (0, a.A)("div", {
                    target: "emafa4s3"
                })({
                    name: "11po3a3",
                    styles: "display:flex;flex-direction:column;align-items:start;justify-content:start;border-radius:8px;overflow:hidden;background:#2a2e34"
                }),
                bl = (0, a.A)("h2", {
                    target: "emafa4s2"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                wl = (0, a.A)(me.fv, {
                    target: "emafa4s1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                yl = (0, a.A)(wl, {
                    target: "emafa4s0"
                })({
                    name: "18clcmv",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto"
                });
            const xl = function(e) {
                var t, n, r, a = e.group,
                    o = (void 0 === a ? null : a).id,
                    i = (0, S.Zp)(),
                    c = C.useState(0),
                    s = (0, l.A)(c, 2),
                    u = s[0],
                    m = s[1],
                    d = C.useState(!1),
                    p = (0, l.A)(d, 2),
                    g = p[0],
                    f = p[1],
                    v = (0, pe.Is)({
                        groupId: o,
                        perPage: 51,
                        offset: u
                    }),
                    E = v.data,
                    h = v.isLoading,
                    b = v.isError,
                    w = (null == E ? void 0 : E.length) > 50,
                    y = (0, pe.ij)(),
                    x = (0, l.A)(y, 2),
                    A = x[0],
                    k = x[1],
                    N = k.error,
                    O = k.isSuccess,
                    I = k.isError,
                    M = k.isLoading,
                    T = null !== (t = null == E ? void 0 : E.filter(function(e) {
                        return !!e.user
                    })) && void 0 !== t ? t : [],
                    j = h ? C.createElement(Al, {
                        height: "130px"
                    }) : C.createElement(C.Fragment, null, null != T && T.length ? C.createElement(kl, null, null == T ? void 0 : T.slice(0, 50).map(function(e) {
                        return C.createElement(fr, {
                            key: e.id,
                            member: e,
                            onDelete: function() {
                                A({
                                    groupId: e.groupId,
                                    userId: e.userId
                                })
                            },
                            deleteButtonTitle: "Unban ".concat(e.user.displayName),
                            disableManagement: M,
                            onClick: function() {
                                i("/home/user/".concat(e.userId))
                            },
                            showView: !1
                        })
                    })) : C.createElement("p", {
                        className: "text-center"
                    }, "Nobody is banned from this group. Everyone's on their best behavior!"));
                return C.createElement(C.Fragment, null, C.createElement(An, {
                    isOpen: g,
                    cancelCallback: function() {
                        return f(!1)
                    },
                    groupId: o,
                    isGroupMemberOnly: !1
                }), C.createElement(re.$n, {
                    className: "mb-2",
                    color: "primary",
                    onClick: function() {
                        f(!0)
                    }
                }, "Ban Somebody"), C.createElement(re.N3, null, C.createElement("h4", {
                    className: "text-center"
                }, "Banned Users")), C.createElement(re.BW, null, b && C.createElement(re.$T, {
                    type: "error",
                    title: "Something went wrong"
                }, "We couldn't load the list of banned users. Please try again later!"), O && C.createElement(re.$T, {
                    slim: !0,
                    type: "success"
                }, "User unbanned. They can now be invited back in if you like."), I && C.createElement(re.$T, {
                    type: "error",
                    title: "Failed to unban user"
                }, null !== (n = null === (r = N.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : N.data.error), j, C.createElement(Nl, null, C.createElement(Ol, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u - 50)
                    },
                    disabled: h || 0 === u
                }, C.createElement(re.M2, {
                    icon: ue.Wz
                })), C.createElement(Cl, {
                    className: "d-flex flex-row align-items-center justify-content-center",
                    onClick: function() {
                        return m(u + 50)
                    },
                    disabled: h || !w
                }, C.createElement(re.M2, {
                    icon: se.Xk
                })))))
            };
            var Al = (0, a.A)(re.fy, {
                    target: "eqx7h3n4"
                })({
                    name: "2cp9od",
                    styles: "margin:8px"
                }),
                kl = (0, a.A)("div", {
                    target: "eqx7h3n3"
                })({
                    name: "j9stxx",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;>*{width:300px;margin:8px;}"
                }),
                Nl = (0, a.A)("div", {
                    target: "eqx7h3n2"
                })({
                    name: "1vtota4",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-bottom:8px"
                }),
                Ol = (0, a.A)(re.$n, {
                    target: "eqx7h3n1"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                Cl = (0, a.A)(re.$n, {
                    target: "eqx7h3n0"
                })({
                    name: "1w4w3uo",
                    styles: "width:50px;height:50px;border-radius:50%;cursor:pointer"
                }),
                Il = n(12860);
            const Sl = function(e) {
                var t = e.group,
                    n = e.event,
                    r = (e.isEvents, e.isAdmin),
                    l = void 0 !== r && r;
                return C.createElement(re.fv, {
                    className: "tw-mb-4"
                }, C.createElement(re.N3, null, C.createElement("h4", null, "Upcoming Event")), C.createElement(re.BW, {
                    className: "tw-items-center"
                }, !n && C.createElement("p", {
                    className: "align-self-center tw-mb-5 tw-text-placeholder-text"
                }, "No upcoming or ongoing events"), n ? C.createElement(Il.Ay, {
                    event: n,
                    className: "tw-mb-5"
                }) : null, n && C.createElement(M.N_, {
                    to: "/home/group/".concat(t.id, "/events"),
                    className: "tw-w-full"
                }, C.createElement(re.$n, {
                    neutral: !0
                }, "See All Events")), l && !n && C.createElement(M.N_, {
                    to: "/home/group/".concat(t.id, "/events"),
                    className: "tw-w-full"
                }, C.createElement(re.$n, {
                    primary: !0
                }, "Create Event"))))
            };
            var Ml = n(19188),
                Tl = n(87423),
                jl = n(36535),
                Rl = n(30901),
                Pl = [{
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
                Gl = [{
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
                    p = (0, l.A)(d, 2),
                    g = p[0],
                    f = p[1],
                    v = C.useState("UPCOMING"),
                    E = (0, l.A)(v, 2),
                    h = E[0],
                    b = E[1],
                    w = C.useState("NEWEST"),
                    y = (0, l.A)(w, 2),
                    x = y[0],
                    A = y[1],
                    k = function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        f(n), r(n)
                    };
                return C.createElement(re.fI, {
                    className: (0, O.cx)("tw-@container tw-w-full tw-flex-wrap tw-gap-2 tw-z-20", m && "tw-justify-between")
                }, C.createElement(re.fI, {
                    className: (0, O.cx)("tw-gap-2 tw-flex-wrap", !m && "@sm:tw-flex-1 tw-w-full")
                }, C.createElement(re.ms, {
                    label: "Display",
                    options: Pl,
                    value: h,
                    onChange: function(e) {
                        b(e), o(e)
                    }
                }), C.createElement(re.ms, {
                    label: "Order",
                    options: Gl,
                    value: x,
                    onChange: function(e) {
                        A(e), c(e)
                    }
                })), C.createElement(re.fI, {
                    className: (0, O.cx)("tw-gap-2 tw-justify-end", !m && "@sm:tw-flex-1 tw-w-full", m && "tw-flex-none")
                }, !m && C.createElement(re.pd, {
                    className: "tw-w-full @sm:tw-max-w-[360px]",
                    type: "text",
                    placeholder: "Search by event name or url",
                    value: g,
                    onChange: k,
                    onKeyDown: (t = k, function(e) {
                        "Enter" === e.key && (e.preventDefault(), t(e))
                    })
                }), s && C.createElement(re.$n, {
                    className: "tw-w-9 tw-h-10",
                    onClick: function() {
                        s()
                    }
                }, C.createElement(re.M2, {
                    icon: Rl.Mb
                }))))
            };

            function Dl(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Fl(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Dl(Object(n), !0).forEach(function(t) {
                        (0, L.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dl(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var $l = (0, C.lazy)(function() {
                return Promise.resolve().then(n.bind(n, 73377))
            });
            const ql = function(e) {
                var t = e.group,
                    n = e.isCreate,
                    r = void 0 !== n && n,
                    a = (0, de.a$)(),
                    o = a.user,
                    i = a.isFetching,
                    c = (0, de.Om)() && !1,
                    s = C.useState(!1),
                    u = (0, l.A)(s, 2),
                    m = u[0],
                    d = u[1],
                    p = C.useState(r),
                    g = (0, l.A)(p, 2),
                    f = g[0],
                    v = g[1],
                    E = C.useState(!1),
                    h = (0, l.A)(E, 2),
                    b = h[0],
                    w = h[1],
                    y = C.useState(jl.dn.CREATE),
                    x = (0, l.A)(y, 2),
                    A = x[0],
                    k = x[1],
                    N = C.useState(null),
                    I = (0, l.A)(N, 2),
                    S = I[0],
                    M = I[1],
                    T = C.useState("NEWEST"),
                    j = (0, l.A)(T, 2),
                    G = j[0],
                    L = j[1],
                    D = C.useState("UPCOMING"),
                    F = (0, l.A)(D, 2),
                    $ = F[0],
                    q = F[1],
                    U = P({
                        groupMember: null == t ? void 0 : t.myMember,
                        permission: "group-calendar-manage"
                    }),
                    B = R({
                        group: t,
                        groupMember: null == t ? void 0 : t.myMember
                    }),
                    _ = U || B,
                    z = C.useState(Ee()()),
                    W = (0, l.A)(z, 2),
                    V = W[0],
                    Y = W[1],
                    J = C.useMemo(function() {
                        switch ($) {
                            case "UPCOMING":
                                return {
                                    after: V.toISOString()
                                };
                            case "PAST":
                                return {
                                    before: V.toISOString()
                                };
                            case "ONGOING":
                                return {
                                    live: !0
                                };
                            default:
                                return {}
                        }
                    }, [$, V]),
                    X = C.useMemo(function() {
                        return "OLDEST" === G ? {
                            sort: "startTime_descending"
                        } : {
                            sort: "startTime_ascending"
                        }
                    }, [G]),
                    Q = (0, Ml.Nf)(Fl(Fl({
                        ownerId: t.id
                    }, J), X), {
                        skip: !t.id
                    }),
                    K = Q.data,
                    H = Q.hasNextPage,
                    Z = Q.fetchNextPage,
                    ee = Q.isLoading,
                    te = Q.isFetching,
                    ne = C.useMemo(function() {
                        return ((null == K ? void 0 : K.pages) || []).flatMap(function(e) {
                            return e.results
                        }).filter(function(e) {
                            return !e.deletedAt || c
                        })
                    }, [K, c]),
                    le = function() {
                        v(!1), M(null), k(jl.dn.CREATE)
                    },
                    ae = function(e) {
                        M(e), v(!0), k(jl.dn.EDIT)
                    },
                    oe = function(e) {
                        M(e), v(!0), k(jl.dn.REVIVE)
                    },
                    ie = function(e) {
                        M(e), w(!0), k(jl.dn.DELETE)
                    },
                    ce = ee || i || !K || !o;
                return C.createElement(C.Fragment, null, C.createElement("div", {
                    className: "tw-py-4"
                }, _ && C.createElement(re.$n, {
                    "aria-label": "Create Event",
                    className: "tw-mb-4",
                    onClick: function() {
                        v(!0)
                    }
                }, "+ Create Event"), C.createElement(Ul, null, C.createElement(_l, null, C.createElement(Bl, null, "Events")), C.createElement(zl, {
                    className: "tw-flex-col tw-gap-5 tw-items-center tw-pt-5"
                }, C.createElement(Ll, {
                    hideSearch: !0,
                    gridToggle: function() {
                        d(!m)
                    },
                    onDisplayStateChange: function(e) {
                        e !== $ && Y(Ee()()), q(e)
                    },
                    onOrderChange: function(e) {
                        L(e)
                    }
                }), ce && C.createElement(re.fy, null), !ce && (null != ne && ne.length ? C.createElement(re.fv, {
                    className: (0, O.cx)("tw-@container tw-w-full tw-flex-wrap tw-gap-4", m && "tw-flex-row")
                }, ne.map(function(e) {
                    return C.createElement(Il.Ay, {
                        key: e.id,
                        event: e,
                        isGrid: m,
                        onEditCallback: ae,
                        onDeleteCallback: ie,
                        onReviveCallback: oe,
                        isGroupAdmin: _
                    })
                })) : C.createElement("div", null, "No events found")), !(null == ne || !ne.length) && C.createElement(re.$n, {
                    onClick: Z,
                    disabled: !H || te
                }, te ? "Loading More…" : H ? "Load More…" : "That's all of them!")))), C.createElement(re.aF, {
                    title: A.label,
                    isVisible: f,
                    onClose: le,
                    className: "tw-w-full",
                    slim: !0,
                    width: "100%"
                }, C.createElement(C.Suspense, {
                    fallback: C.createElement("div", null, "Loading...")
                }, C.createElement($l, {
                    event: S || void 0,
                    isEditMode: "edit" === A.value,
                    isReviveMode: "revive" === A.value,
                    group: t,
                    isGroupAdmin: _,
                    closeModalCallback: le
                }))), S && "delete" === A.value && C.createElement(Tl.A, {
                    event: S,
                    isOpen: b,
                    onCloseCallBack: function() {
                        w(!1), M(null), k(jl.dn.CREATE)
                    }
                }))
            };
            var Ul = (0, a.A)("div", {
                    target: "e1bz3ytt3"
                })({
                    name: "144akkd",
                    styles: "display:flex;flex-direction:column;align-items:start;justify-content:start;border-radius:8px;background:#2a2e34"
                }),
                Bl = (0, a.A)("h2", {
                    target: "e1bz3ytt2"
                })({
                    name: "14mdnr2",
                    styles: "font-size:1.5rem;font-weight:bold"
                }),
                _l = (0, a.A)(re.fv, {
                    target: "e1bz3ytt1"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                zl = (0, a.A)(_l, {
                    target: "e1bz3ytt0"
                })({
                    name: "j2vksd",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;display:flex;justify-content:space-around;height:auto!important"
                });
            const Wl = function() {
                var e, t, n, a, k = (0, C.useState)(!1),
                    R = (0, l.A)(k, 2),
                    L = R[0],
                    D = R[1],
                    F = (0, C.useState)(!1),
                    $ = (0, l.A)(F, 2),
                    q = $[0],
                    U = $[1],
                    B = (0, C.useState)(!1),
                    _ = (0, l.A)(B, 2),
                    z = _[0],
                    W = _[1],
                    V = (0, C.useState)(!1),
                    Y = (0, l.A)(V, 2),
                    J = Y[0],
                    X = Y[1],
                    Q = (0, C.useState)(!1),
                    K = (0, l.A)(Q, 2),
                    Z = K[0],
                    le = K[1],
                    ae = (0, C.useState)(!1),
                    oe = (0, l.A)(ae, 2),
                    ie = oe[0],
                    se = oe[1],
                    ue = (0, C.useState)(!1),
                    me = (0, l.A)(ue, 2),
                    ge = me[0],
                    fe = me[1],
                    ve = (0, C.useState)(!1),
                    Ee = (0, l.A)(ve, 2),
                    he = Ee[0],
                    be = Ee[1],
                    we = (0, C.useState)(!1),
                    ye = (0, l.A)(we, 2),
                    xe = ye[0],
                    Ae = ye[1],
                    ke = (0, te.w_)().data,
                    Ne = void 0 === ke ? [] : ke,
                    Oe = (0, I.wA)(),
                    Ce = (0, H.G)(),
                    Ie = Ce.data,
                    Se = Ce.isLoading,
                    Me = 0,
                    Te = 0;
                Ce.isSuccess && (Me = Ie.constants.GROUPS.MAX_JOINED, Te = Ie.constants.GROUPS.MAX_JOINED_PLUS), Ne.includes("permission-extra-group-count") && (Me = Math.max(Me, Te || 0));
                var je = (0, S.g)().groupId,
                    Re = (0, te.P2)().data,
                    Pe = (0, pe.XR)({
                        groupId: je,
                        purpose: "group"
                    }),
                    Ge = Pe.data,
                    Le = Pe.isSuccess,
                    De = Pe.isLoading,
                    Fe = Pe.isError,
                    $e = Pe.error,
                    qe = (0, de.Om)(),
                    Ue = (0, pe.Yj)({
                        userId: null == Re ? void 0 : Re.id
                    }),
                    Be = Ue.data,
                    _e = Ue.isLoading,
                    ze = (0, pe.C)(),
                    We = (0, l.A)(ze, 2),
                    Ve = We[0],
                    Ye = We[1],
                    Je = Ye.isLoading,
                    Qe = Ye.isError,
                    Ke = Ye.error,
                    He = (0, pe.Ng)(),
                    Ze = (0, l.A)(He, 2),
                    et = Ze[0],
                    tt = Ze[1].isLoading,
                    nt = (0, pe.Kg)(),
                    rt = (0, l.A)(nt, 2),
                    lt = rt[0],
                    at = rt[1].isLoading,
                    ot = (0, pe.LI)(),
                    it = (0, l.A)(ot, 2),
                    ct = it[0],
                    st = it[1],
                    ut = st.isLoading,
                    mt = st.isError,
                    dt = st.error,
                    pt = st.isSuccess,
                    gt = null !== (null == Ge ? void 0 : Ge.deletedAt),
                    ft = (0, Ot.Kf)({
                        userId: null == Ge ? void 0 : Ge.ownerId,
                        groupId: null == Ge ? void 0 : Ge.id,
                        active: !0
                    }, {
                        skip: !Ge
                    }),
                    vt = (ft.data, ft.isLoading),
                    Et = (0, Ml.D9)({
                        ownerId: je
                    }, {
                        skip: !je
                    }),
                    ht = Et.data;
                Et.isLoading;
                (0, C.useEffect)(function() {
                    Ge && !De && U(!0)
                }, [Ge, De]), (0, C.useEffect)(function() {
                    pt && fe(!1)
                }, [pt]);
                var wt, yt, xt = (0, C.useMemo)(function() {
                        return !!q && (null !== Ge.transferTargetId || void 0 !== Ge.transferTargetId)
                    }, [q]),
                    At = (null == Ge ? void 0 : Ge.transferTargetId) === (null == Re ? void 0 : Re.id) ? null == Ge ? void 0 : Ge.ownerId : null == Ge ? void 0 : Ge.transferTargetId,
                    kt = (0, ne.vf)(At, {
                        skip: null == Ge || De || !xt || !At,
                        refetchOnMountOrArgChange: !0
                    }),
                    Nt = kt.data,
                    Ct = kt.isFetching,
                    It = kt.isError,
                    St = kt.error,
                    Mt = (0, pe.NV)(),
                    Tt = (0, l.A)(Mt, 2),
                    jt = Tt[0],
                    Rt = Tt[1],
                    Pt = Rt.data,
                    Gt = (Rt.isFetching, Rt.isError),
                    Lt = Rt.error,
                    Dt = (0, pe.Kp)(),
                    Ft = (0, l.A)(Dt, 2),
                    $t = Ft[0],
                    qt = Ft[1],
                    Ut = qt.data,
                    Bt = (qt.isFetching, qt.isError),
                    _t = (qt.error, (0, C.useMemo)(function() {
                        if (!Ge || !Ge.myMember) return !1;
                        var e = Ge.myMember.isRepresenting;
                        return null != e && e
                    }, [Ge])),
                    zt = function() {
                        var e = (0, r.A)(N().mark(function e() {
                            var t, n;
                            return N().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return be(!0), e.prev = 1, e.next = 4, jt({
                                            groupId: Ge.id,
                                            transferTargetId: Ge.transferTargetId
                                        }).unwrap();
                                    case 4:
                                        Gt && Oe((0, ee.X)({
                                            title: "Group Transfer Error",
                                            icon: x.zp,
                                            message: "".concat(null == Lt || null === (t = Lt.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), be(!1)), !Gt && Pt && Oe((0, ee.X)({
                                            title: "Group Transfer Accepted",
                                            icon: A.SG,
                                            color: "success",
                                            timeout: 3e3
                                        }), be(!1)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Oe((0, ee.X)({
                                            title: "Group Transfer Error",
                                            icon: x.zp,
                                            message: "".concat(null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), be(!1));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [1, 8]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Wt = function() {
                        var e = (0, r.A)(N().mark(function e() {
                            var t, n;
                            return N().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return be(!0), e.prev = 1, e.next = 4, $t({
                                            groupId: Ge.id,
                                            transferTargetId: null == Ge ? void 0 : Ge.transferTargetId
                                        }).unwrap();
                                    case 4:
                                        Bt && Oe((0, ee.X)({
                                            title: "Cancel Group Transfer Error",
                                            icon: x.zp,
                                            message: "".concat(null == Ut || null === (t = Ut.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), be(!1)), !Bt && Ut && Oe((0, ee.X)({
                                            title: "Cancel Group Transfer Success",
                                            icon: A.SG,
                                            color: "success",
                                            timeout: 3e3
                                        }), be(!1)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Oe((0, ee.X)({
                                            title: "Cancel Group Transfer Error",
                                            icon: x.zp,
                                            message: "".concat(null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message),
                                            color: "error",
                                            timeout: 3e3
                                        }), be(!1));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [1, 8]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                if (!Ge || De || vt || at || tt || Je || _e || Se) return (ie || Z) && (le(!1), se(!1)), xt && !Nt || Ct ? C.createElement(re.fy, {
                    width: "100%",
                    height: "200px",
                    className: "mt-4"
                }) : !It || Fe || Ct ? Fe ? C.createElement(C.Fragment, null, C.createElement(re.$T, {
                    type: "error",
                    title: "An error occurred",
                    message: "Something went wrong with getting this group! (".concat(null == $e || null === (wt = $e.data) || void 0 === wt || null === (wt = wt.error) || void 0 === wt ? void 0 : wt.message, ")")
                }), C.createElement("div", {
                    className: "text-center"
                }, C.createElement(M.N_, {
                    to: "/home/groups"
                }, "Go Back! 😭"))) : C.createElement(C.Fragment, null, C.createElement(re.fy, {
                    width: "100%",
                    height: "200px",
                    className: "mt-4"
                }), C.createElement(re.fy, {
                    width: "100%",
                    height: "500px",
                    className: "mt-5"
                })) : C.createElement(re.$T, {
                    type: "error",
                    title: "An error occurred",
                    message: "Something went wrong with getting target user! (".concat(null == St || null === (yt = St.data) || void 0 === yt || null === (yt = yt.error) || void 0 === yt ? void 0 : yt.message, ")")
                });
                var Vt, Yt = function() {
                        W(!1), Ve({
                            groupId: je
                        })
                    },
                    Jt = function() {
                        X(!1), Ge.rules ? W(!0) : Yt()
                    },
                    Xt = Le && Ge.myMember && Ge.myMember.roleIds.reduce(function(e, t) {
                        if (e) return e;
                        var n = Ge.roles.find(function(e) {
                            return e.id === t
                        });
                        return !(null == n || !n.requiresTwoFactor || !1 !== Ge.myMember.has2FA) && n
                    }, !1),
                    Qt = Ge.membershipStatus;
                if (Ge.memberCount < bt.$5 && (Be.length < Me || Re.tagsSet.has("admin_uncap_owned_groups"))) {
                    if (Qt === bt.Bp.REQUESTED) Vt = C.createElement(re.$n, {
                        danger: !0,
                        onClick: function() {
                            return et({
                                groupId: je
                            })
                        },
                        disabled: Je,
                        loading: Je
                    }, C.createElement(re.M2, {
                        icon: w.GR
                    }), "  Cancel Join Request");
                    else if (Qt === bt.Bp.INVITED) Vt = C.createElement(re.$n, {
                        success: !0,
                        onClick: Yt
                    }, C.createElement(re.M2, {
                        icon: y.e6
                    }), "  Accept Invite");
                    else if (Qt === bt.Bp.USER_BLOCKED) Vt = null;
                    else if (!Ge.myMember) switch (Ge.joinState) {
                        case bt.mm.OPEN:
                            Vt = C.createElement(re.$n, {
                                onClick: Jt,
                                disabled: Je,
                                loading: Je
                            }, C.createElement(re.M2, {
                                icon: o.QL
                            }), "  Join Group");
                            break;
                        case bt.mm.REQUEST:
                            Vt = C.createElement(re.$n, {
                                onClick: Jt
                            }, C.createElement(re.M2, {
                                icon: s.y_
                            }), " Request to Join");
                            break;
                        default:
                            Vt = C.createElement(re.$n, {
                                disabled: !0
                            }, "Closed to New Members")
                    }
                } else Be.length >= Me && !Re.tagsSet.has("admin_uncap_owned_groups") ? Vt = C.createElement(re.$n, {
                    disabled: !0
                }, "You can't join more than ", Me, " groups!") : Ge.myMember || (Vt = C.createElement(re.$n, {
                    disabled: !0
                }, "Group is Full"));
                if (!Ge.id) return null;
                var Kt = Qt === bt.Bp.USER_BLOCKED;
                return C.createElement(C.Fragment, null, C.createElement(re.Qc, null, null !== (e = null == Ge ? void 0 : Ge.name) && void 0 !== e ? e : "Group"), C.createElement(T.A, {
                    isOpen: J,
                    toggle: function() {
                        X(!1)
                    }
                }, C.createElement(Yl, null, C.createElement("h4", {
                    className: "text-center"
                }, "Unblock this Group?")), C.createElement(Jl, null, C.createElement(re.fv, null, C.createElement("div", {
                    className: "p-3 text-center"
                }, "Are you sure you want to unblock ", C.createElement("strong", null, Ge.name), "?"), C.createElement("div", {
                    className: "p-3"
                }, C.createElement(re.fI, null, C.createElement(re.$n, {
                    expand: !0,
                    onClick: function() {
                        X(!1), lt({
                            groupId: je,
                            userId: Re.id
                        })
                    }
                }, C.createElement(re.M2, {
                    icon: y.e6
                }), "  Unblock Group"), " ", C.createElement(re.$n, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        X(!1)
                    }
                }, C.createElement(re.M2, {
                    icon: w.GR
                }), "  Cancel")))))), C.createElement(T.A, {
                    isOpen: z,
                    toggle: function() {
                        W(!1)
                    }
                }, C.createElement(Yl, null, C.createElement("h4", {
                    className: "text-center"
                }, "Rules")), C.createElement(Jl, null, C.createElement(re.fv, null, C.createElement("div", {
                    className: "p-3"
                }, C.createElement("p", null, "By joining this group, you agree to the following rules:"), C.createElement(Ql, null, Ge.rules)), C.createElement("div", {
                    className: "p-3"
                }, C.createElement(re.fI, null, C.createElement(re.$n, {
                    expand: !0,
                    onClick: Yt,
                    disabled: Je,
                    loading: Je
                }, Ge.joinState === bt.mm.OPEN ? C.createElement(C.Fragment, null, C.createElement(re.M2, {
                    icon: o.QL
                }), "  Join Group") : C.createElement(C.Fragment, null, C.createElement(re.M2, {
                    icon: s.y_
                }), "  Request to Join")), " ", C.createElement(re.$n, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        W(!1)
                    }
                }, C.createElement(re.M2, {
                    icon: w.GR
                }), "  Cancel")))))), C.createElement(T.A, {
                    isOpen: ge,
                    toggle: function() {
                        return fe(!1)
                    }
                }, C.createElement(Yl, null, C.createElement("h4", {
                    className: "text-center"
                }, "Decline Group Invite?")), C.createElement(Jl, null, C.createElement(re.fv, null, C.createElement("div", {
                    className: "p-3 text-center"
                }, "Are you sure you want to decline invite to ", C.createElement("strong", null, Ge.name), "?"), C.createElement("div", {
                    className: "px-3 text-center d-flex justify-content-center"
                }, C.createElement(Xe.A, {
                    id: "block-invites",
                    checked: xe,
                    onChange: function(e) {
                        return Ae(e.target.checked)
                    },
                    label: "Block this group, preventing further invites",
                    htmlFor: "block-invites"
                })), C.createElement("div", {
                    className: "p-3"
                }, C.createElement(re.fI, null, C.createElement(re.$n, {
                    expand: !0,
                    danger: !0,
                    onClick: function() {
                        return ct({
                            groupId: je,
                            block: xe
                        })
                    },
                    loading: ut
                }, C.createElement(re.M2, {
                    icon: y.e6
                }), "  Decline Invite"), " ", C.createElement(re.$n, {
                    neutral: !0,
                    expand: !0,
                    onClick: function() {
                        fe(!1)
                    }
                }, C.createElement(re.M2, {
                    icon: w.GR
                }), "  Cancel")))))), C.createElement(il, {
                    group: Ge,
                    showBlockModal: ie,
                    onClose: function() {
                        se(!1)
                    }
                }), C.createElement("div", {
                    className: (0, O.AH)({
                        name: "g46w8s",
                        styles: "margin-bottom:30px"
                    })
                }, C.createElement(re.fI, {
                    className: "mb-4 justify-content-start tw-gap-2 tw-flex-wrap"
                }, "visible" === (null == Ge || null === (t = Ge.myMember) || void 0 === t ? void 0 : t.visibility) && C.createElement(al, {
                    groupId: Ge.id,
                    isRepresenting: _t
                }), (null == Ge ? void 0 : Ge.ownerId) !== Re.id && C.createElement(C.Fragment, null, C.createElement(re.$n, {
                    neutral: !0,
                    onClick: function() {
                        le(!0)
                    }
                }, C.createElement(re.M2, {
                    icon: i.pn
                }), " Report"), C.createElement(Mn.A, {
                    cancelCallback: function() {
                        return le(!1)
                    },
                    isOpen: Z,
                    type: "group",
                    contentId: null == Ge ? void 0 : Ge.id,
                    contentName: null == Ge ? void 0 : Ge.name,
                    hasStore: null == Ge ? void 0 : Ge.storeId
                }), "userblocked" !== (null == Ge ? void 0 : Ge.membershipStatus) && !(null != Ge && Ge.myMember) && C.createElement(C.Fragment, null, " ", C.createElement(re.$n, {
                    danger: !0,
                    onClick: function() {
                        se(!0)
                    }
                }, C.createElement(re.M2, {
                    icon: b.cU
                }), " Block")), "userblocked" === (null == Ge ? void 0 : Ge.membershipStatus) && C.createElement(C.Fragment, null, " ", C.createElement(re.$n, {
                    danger: !0,
                    onClick: function() {
                        X(!0)
                    }
                }, C.createElement(re.M2, {
                    icon: h.faBan
                }), " Unblock")))), C.createElement(ol.A, {
                    group: Ge
                }), Xt && C.createElement(re.fI, null, C.createElement(j.A, {
                    color: "warning"
                }, "Your VRChat account does not have 2FA enabled. Your role '", Xt.name, "' in ", Ge.name, " requires this. Until you enable 2FA, your ability to manage ", Ge.name, " will be limited.")), qe && gt && C.createElement(re.fI, null, C.createElement(Kl, null, " THIS GROUP HAS BEEN DELETED ")), Qe && C.createElement(re.$T, {
                    type: "error",
                    title: "An error occurred",
                    message: (null == Ke || null === (n = Ke.data) || void 0 === n ? void 0 : n.error.message) || "An error occurred while trying to join ".concat(null == Ge ? void 0 : Ge.name, ".")
                }), mt && C.createElement(re.$T, {
                    type: "error",
                    title: "An error occurred",
                    message: (null == dt || null === (a = dt.data) || void 0 === a ? void 0 : a.error.message) || "An error occurred while trying to decline group invitation."
                }), C.createElement("div", {
                    className: "d-flex flex-row justify-content-center align-content-center mb-2"
                }, Vt, Qt === bt.Bp.INVITED && C.createElement(re.$n, {
                    danger: !0,
                    onClick: function() {
                        return fe(!0)
                    },
                    className: "mx-2"
                }, C.createElement(re.M2, {
                    icon: E.yY
                }), "  Decline Invite")), Kt ? C.createElement(cl, null) : C.createElement(C.Fragment, null, xt && !Ct && At && C.createElement(ml, {
                    group: Ge,
                    currentUser: Re,
                    targetUser: Nt,
                    onAccept: zt,
                    onCancel: Wt,
                    isLoading: he
                }), C.createElement(ce.A, {
                    tabs: [{
                        name: "Overview",
                        to: "/home/group/".concat(Ge.id),
                        end: !0,
                        icon: v.rC,
                        condition: !0
                    }, {
                        name: "Posts",
                        to: "posts",
                        icon: f.z$,
                        condition: P({
                            groupMember: null == Ge ? void 0 : Ge.myMember,
                            permission: "group-announcement-manage"
                        })
                    }, {
                        name: "Events",
                        to: "events",
                        icon: g.BE,
                        condition: !0
                    }, {
                        name: "Store",
                        to: "store",
                        icon: p.H3,
                        condition: null == Ge ? void 0 : Ge.storeId
                    }, {
                        name: "Instances",
                        to: "instances",
                        icon: d.Pc,
                        condition: !0
                    }, {
                        name: "Gallery",
                        to: "galleries",
                        icon: m.yv,
                        condition: !0
                    }, {
                        name: "Members",
                        to: "members",
                        icon: u.O2,
                        condition: null == Ge ? void 0 : Ge.myMember
                    }, {
                        name: "Invites",
                        to: "invites",
                        icon: s.y_,
                        condition: qe || P({
                            groupMember: null == Ge ? void 0 : Ge.myMember,
                            permission: "group-invites-manage"
                        })
                    }, {
                        name: "Settings",
                        to: "settings",
                        icon: c.dB,
                        condition: qe || (null == Ge ? void 0 : Ge.myMember) || P({
                            groupMember: null == Ge ? void 0 : Ge.myMember,
                            permission: "group-data-manage"
                        }) || P({
                            groupMember: null == Ge ? void 0 : Ge.myMember,
                            permission: "group-roles-manage"
                        })
                    }, {
                        name: "Banned Users",
                        to: "bans",
                        icon: i.pn,
                        condition: qe || P({
                            groupMember: null == Ge ? void 0 : Ge.myMember,
                            permission: "group-bans-manage"
                        })
                    }]
                }), C.createElement(S.BV, null, C.createElement(S.qh, {
                    path: "/",
                    element: C.createElement(C.Fragment, null, Le && C.createElement(vl, {
                        group: Ge
                    }), Le && C.createElement(Sl, {
                        group: Ge,
                        event: ht,
                        isAdmin: qe || P({
                            groupMember: null == Ge ? void 0 : Ge.myMember,
                            permission: "group-members-manage"
                        })
                    }), C.createElement(Vl, null, C.createElement(re.fv, {
                        className: "m-1"
                    }, C.createElement(Tn, {
                        langs: Ge.languages
                    })), C.createElement(re.fv, {
                        className: "m-1"
                    }, C.createElement($n, {
                        links: Ge.links
                    }))), C.createElement(Vl, null, C.createElement(re.fv, {
                        className: "m-1 mt-2 mw-100"
                    }, C.createElement(Yl, null, C.createElement("h4", null, "About This Group")), C.createElement(Xl, null, C.createElement("p", {
                        className: "w-100 text-break"
                    }, Ge.description))), Ge.rules && C.createElement(re.fv, {
                        className: "m-1 mt-2 mw-100"
                    }, C.createElement(Yl, null, C.createElement("h4", null, "Rules")), C.createElement(Xl, null, C.createElement("p", {
                        className: "w-100 text-break"
                    }, Ge.rules)))))
                }), C.createElement(S.qh, {
                    path: "/posts",
                    element: (qe || P({
                        groupMember: null == Ge ? void 0 : Ge.myMember,
                        permission: "group-announcement-manage"
                    })) && Le ? C.createElement(C.Fragment, null, L ? C.createElement(re.fI, null, C.createElement(re.fv, {
                        className: "w-100"
                    }, C.createElement(re.N3, null, C.createElement("h4", {
                        className: "text-center"
                    }, "Create Post")), C.createElement(re.BW, null, C.createElement(re.fv, {
                        className: "w-100"
                    }, C.createElement(rl, {
                        group: Ge
                    }), C.createElement(re.$n, {
                        onClick: function() {
                            return D(!1)
                        }
                    }, "Cancel"))))) : C.createElement(re.$n, {
                        onClick: function() {
                            return D(!0)
                        }
                    }, C.createElement(re.M2, {
                        icon: o.QL
                    }), " Create Post"), C.createElement(vl, {
                        isEditMode: !0,
                        group: Ge
                    })) : C.createElement(G.A, {
                        to: ".."
                    })
                }), C.createElement(S.qh, {
                    path: "/events",
                    element: C.createElement(ql, {
                        group: Ge
                    })
                }), C.createElement(S.qh, {
                    path: "/events/create",
                    element: C.createElement(ql, {
                        group: Ge,
                        isCreate: !0
                    })
                }), C.createElement(S.qh, {
                    path: "/galleries/*",
                    element: C.createElement(cr, {
                        group: Ge
                    })
                }), C.createElement(S.qh, {
                    path: "/subscribe",
                    element: C.createElement(G.A, {
                        to: "store"
                    })
                }), C.createElement(S.qh, {
                    path: "/store",
                    element: C.createElement(Lr, {
                        group: Ge
                    })
                }), C.createElement(S.qh, {
                    path: "/instances",
                    element: C.createElement(gr, {
                        group: Ge,
                        onJoinButtonClick: Jt
                    })
                }), C.createElement(S.qh, {
                    path: "/invites/*",
                    element: qe || P({
                        groupMember: null == Ge ? void 0 : Ge.myMember,
                        permission: "group-invites-manage"
                    }) ? C.createElement(Or, {
                        group: Ge
                    }) : C.createElement(G.A, {
                        to: ".."
                    })
                }), C.createElement(S.qh, {
                    path: "/members",
                    element: qe || null != Ge && Ge.myMember ? C.createElement(Cn, {
                        group: Ge
                    }) : C.createElement(G.A, {
                        to: ".."
                    })
                }), C.createElement(S.qh, {
                    path: "/settings/*",
                    element: qe || null != Ge && Ge.myMember || P({
                        groupMember: null == Ge ? void 0 : Ge.myMember,
                        permission: "group-data-manage"
                    }) || P({
                        groupMember: null == Ge ? void 0 : Ge.myMember,
                        permission: "group-roles-manage"
                    }) ? C.createElement(Zt, {
                        group: Ge
                    }) : C.createElement(G.A, {
                        to: ".."
                    })
                }), C.createElement(S.qh, {
                    path: "/bans",
                    element: qe || P({
                        groupMember: null == Ge ? void 0 : Ge.myMember,
                        permission: "group-members-manage"
                    }) ? C.createElement(xl, {
                        group: Ge
                    }) : C.createElement(G.A, {
                        to: ".."
                    })
                })))))
            };
            var Vl = (0, a.A)(re.fI, {
                    target: "e7n20a25"
                })("flex-wrap:wrap;margin:-0.25rem;>", re.fv, "{min-width:300px;flex:1;}"),
                Yl = (0, a.A)(re.fv, {
                    target: "e7n20a24"
                })({
                    name: "t5uylx",
                    styles: "padding:0.4rem 0.9rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0;width:100%"
                }),
                Jl = (0, a.A)(Yl, {
                    target: "e7n20a23"
                })({
                    name: "vnq3j7",
                    styles: "background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;flex:1;overflow-x:hidden;display:flex;flex-direction:row;justify-content:space-around;height:auto!important;overflow-y:auto;white-space:pre-line"
                }),
                Xl = (0, a.A)(Jl, {
                    target: "e7n20a22"
                })({
                    name: "di36rf",
                    styles: "overflow-y:auto;white-space:pre-line;max-height:300px"
                }),
                Ql = (0, a.A)("p", {
                    target: "e7n20a21"
                })({
                    name: "votlfh",
                    styles: "overflow-y:auto;white-space:pre-line;max-height:400px;background:#252a30;padding:0.5rem;border-radius:8px"
                }),
                Kl = (0, a.A)("h3", {
                    target: "e7n20a20"
                })({
                    name: "bbnlne",
                    styles: "margin:14px auto;color:#ffd866;text-align:center;font-weight:bold"
                })
        }
    }
]);
//# sourceMappingURL=f3721bde0e724adbe12747ad18320d76cac8498ae8e9e025a091ed966e28452f.js.map