"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1244], {
        61244: (e, t, r) => {
            r.d(t, {
                Z: () => j
            });
            var n = r(42138),
                a = r(4942),
                o = r(15861),
                l = r(54546),
                c = r(57310),
                i = r(21707),
                s = r(64687),
                u = r.n(s),
                p = r(67294),
                m = r(79655),
                d = r(17219),
                g = r(61509).S.injectEndpoints({
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
                                providesTags: function(e, t, r) {
                                    return [{
                                        type: "Reports",
                                        id: r.contentId
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
                                invalidatesTags: function(e, t, r) {
                                    return [{
                                        type: "Reports",
                                        id: r.contentId
                                    }]
                                }
                            })
                        }
                    }
                }),
                f = g.useGetReportsQuery,
                v = g.useCreateReportMutation,
                h = r(95168),
                w = r(96985),
                y = r(89421),
                E = r(11121),
                b = r(43862);
            var x = (0, r(4965).Z)("fieldset", {
                target: "e1hq0emc0"
            })({
                name: "13vf8go",
                styles: 'display:flex;flex-direction:column;gap:12px;label{cursor:pointer;font-size:16px;user-select:none;display:flex;gap:8px;align-items:center;.check{content:"";width:20px;height:20px;border:2px solid #677079;border-radius:50%;background-color:#333333;position:relative;}&:has(input[type=radio]:checked){.check{border-color:#1FD1ED;&::before{content:"";position:absolute;left:2px;top:2px;width:12px;height:12px;border-radius:50%;background-color:#1FD1ED;}}}input[type=radio]{display:none;}span small{display:block;font-size:12px;color:#9C9C9C;}}'
            });
            const k = function(e) {
                var t = e.value,
                    r = e.options,
                    n = e.onChange;
                return p.createElement(x, {
                    role: "radiogroup"
                }, (null != r ? r : []).map((function(e) {
                    return p.createElement("label", {
                        key: e.label
                    }, p.createElement("div", {
                        className: "check"
                    }), p.createElement("input", {
                        type: "radio",
                        value: e.value,
                        checked: t === e.value,
                        onChange: n
                    }), p.createElement("span", null, e.label, e.description && p.createElement("small", null, e.description)))
                })))
            };
            var C = r(60006);

            function N(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : N(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const j = function(e) {
                var t, r, a = e.isOpen,
                    s = e.cancelCallback,
                    g = e.type,
                    x = e.contentId,
                    N = e.contentName,
                    j = e.marketplace,
                    S = e.hasStore,
                    Z = p.useState(""),
                    R = (0, l.Z)(Z, 2),
                    q = R[0],
                    D = R[1],
                    I = p.useState(""),
                    P = (0, l.Z)(I, 2),
                    z = P[0],
                    F = P[1],
                    _ = p.useState(""),
                    T = (0, l.Z)(_, 2),
                    W = T[0],
                    L = T[1],
                    X = p.useState([]),
                    A = (0, l.Z)(X, 2),
                    M = A[0],
                    Y = A[1],
                    Q = p.useState(!1),
                    V = (0, l.Z)(Q, 2),
                    $ = V[0],
                    B = V[1],
                    G = (0, h.Tu)().user,
                    U = (0, d.y)({}, {
                        skip: !a
                    }),
                    H = U.data,
                    J = U.isLoading,
                    K = f({
                        contentId: x
                    }, {
                        skip: !a
                    }),
                    ee = K.data,
                    te = K.isLoading,
                    re = v(),
                    ne = (0, l.Z)(re, 2),
                    ae = ne[0],
                    oe = ne[1],
                    le = oe.isFetching,
                    ce = oe.isError,
                    ie = oe.isSuccess,
                    se = oe.reset;
                p.useEffect((function() {
                    q && F("")
                }), [q]), p.useEffect((function() {
                    "warnings" === z && L("")
                }), [z]), p.useEffect((function() {
                    a || setTimeout((function() {
                        se(), D(""), F(""), L(""), Y([])
                    }), 500)
                }), [a]);
                var ue = function() {
                        var e = (0, o.Z)(u().mark((function e() {
                            var t, r;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ae(O({
                                            type: g,
                                            category: q,
                                            reason: z,
                                            contentId: x,
                                            description: W
                                        }, M.length ? {
                                            details: {
                                                suggestedWarnings: M
                                            }
                                        } : {}));
                                    case 2:
                                        t = e.sent, (r = t.data) && B(r.supportRequired);
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
                    pe = J || te || le,
                    me = p.useMemo((function() {
                        var e, t;
                        return Object.keys(null !== (e = null == H || null === (t = H.reportOptions) || void 0 === t ? void 0 : t[g]) && void 0 !== e ? e : {}).sort((function(e, t) {
                            var r, n;
                            return (null === (r = H.reportCategories) || void 0 === r || null === (r = r[e]) || void 0 === r ? void 0 : r.order) - (null === (n = H.reportCategories) || void 0 === n || null === (n = n[t]) || void 0 === n ? void 0 : n.order)
                        })).filter((function(e) {
                            return !e.endsWith("store") || S
                        })).map((function(e) {
                            var t, r, n, a, o, l;
                            return {
                                value: e,
                                label: null !== (t = null === (r = H.reportCategories) || void 0 === r || null === (r = r[e]) || void 0 === r ? void 0 : r.title) && void 0 !== t ? t : null === (n = H.reportCategories) || void 0 === n || null === (n = n[e]) || void 0 === n ? void 0 : n.text,
                                description: null !== (a = null === (o = H.reportCategories) || void 0 === o || null === (o = o[e]) || void 0 === o ? void 0 : o.description) && void 0 !== a ? a : null === (l = H.reportCategories) || void 0 === l || null === (l = l[e]) || void 0 === l ? void 0 : l.tooltip
                            }
                        }))
                    }), [g, H, S]);
                return p.createElement(C.oA, {
                    role: "dialog",
                    type: "default",
                    isOpen: a,
                    toggle: s
                }, ie ? p.createElement(p.Fragment, null, $ ? p.createElement(p.Fragment, null, p.createElement(C.eb, {
                    tag: "h4",
                    close: p.createElement(y.Z, {
                        onClick: s,
                        disabled: pe
                    }),
                    toggle: s
                }, "Contact Support"), p.createElement(C.vc, {
                    className: "tw-flex tw-flex-col tw-justify-center tw-text-center tw-gap-1 tw-px-10"
                }, p.createElement(w.$1, {
                    icon: i.e7,
                    size: "4x",
                    className: "tw-mt-5 tw-mb-5"
                }), p.createElement("h4", {
                    className: "tw-mb-4"
                }, "Support Team Required"), p.createElement("strong", null, "It looks like you are trying to report an issue that requires our support team."), p.createElement("p", null, "Please provide us with information about your issue using our web form so we can provide you with assistance.")), p.createElement(C.tc, {
                    className: "tw-justify-center"
                }, p.createElement(C.Qj, {
                    to: "https://help.vrchat.com/hc/en-us/requests/new?ticket_form_id=360006750513&tf_360057451993=".concat(null == G ? void 0 : G.id, "&tf_subject=").concat(z, "%20").concat(q, "%20By%20").concat(g, "%20").concat(N, "&tf_description=").concat(W),
                    target: "_blank"
                }, "Open Support Form"))) : p.createElement(p.Fragment, null, p.createElement(C.eb, {
                    tag: "h4",
                    close: p.createElement(y.Z, {
                        onClick: s,
                        disabled: pe
                    }),
                    toggle: s
                }, "Report Submitted"), p.createElement(C.vc, {
                    className: "tw-flex tw-flex-col tw-justify-center tw-text-center tw-gap-1 tw-px-10"
                }, p.createElement(w.$1, {
                    icon: c.XC,
                    size: "4x",
                    className: "tw-mt-5 tw-mb-5"
                }), p.createElement("h4", {
                    className: "tw-mb-4"
                }, "Your report is in - we've got it!"), p.createElement("strong", null, "Thanks for helping us keep things safe!"), p.createElement("p", null, "Your report has been received and will be reviewed by our moderation team.")), p.createElement(C.tc, {
                    className: "tw-justify-center"
                }, p.createElement(w.zx, {
                    color: "primary",
                    onClick: s,
                    className: "tw-px-20 tw-py-1"
                }, "Done")))) : p.createElement(p.Fragment, null, p.createElement(C.eb, {
                    className: "tw-capitalize",
                    tag: "h4",
                    close: p.createElement(y.Z, {
                        onClick: s,
                        disabled: pe
                    }),
                    toggle: s
                }, "Report ", g), p.createElement(C.vc, null, J ? p.createElement("div", {
                    className: "tw-text-center"
                }, p.createElement(b.Z, {
                    size: "3x"
                })) : p.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, ce && p.createElement(w.qX, {
                    type: "error",
                    title: "Error"
                }, "An error occurred while trying to submit the report."), p.createElement("p", null, "What are you reporting?"), p.createElement(k, {
                    value: q,
                    onChange: function(e) {
                        return D(e.target.value)
                    },
                    options: me
                }), p.createElement("label", {
                    className: "tw-mt-5"
                }, "Reason", p.createElement(w.Lt, {
                    className: "tw-mt-2",
                    value: z,
                    onChange: F,
                    options: (null !== (t = null == H || null === (r = H.reportOptions) || void 0 === r || null === (r = r[g]) || void 0 === r ? void 0 : r[q]) && void 0 !== t ? t : []).map((function(e) {
                        var t;
                        return {
                            value: e,
                            label: null === (t = H.reportReasons) || void 0 === t || null === (t = t[e]) || void 0 === t ? void 0 : t.text
                        }
                    }))
                })), p.createElement("small", {
                    className: "tw-text-light-grey tw-mt-2"
                }, "Don't see your issue listed here?", p.createElement("a", {
                    href: j ? "https://vrch.at/marketplace-help" : "https://vrch.at/support",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "tw-ml-1"
                }, "Contact us")), "copyright" === z ? p.createElement(w.qX, {
                    type: "warn"
                }, "We take copyright seriously. Copyright infringement reports are handled differently from standard reports. If you own this content or are authorized to act on behalf of the owner,", p.createElement(m.rU, {
                    to: "/home/profile?dmcaClaimForm=true&dmcaTarget=".concat(x),
                    className: "tw-ml-1"
                }, "submit a DMCA Claim"), ".") : "warnings" === z ? p.createElement(p.Fragment, null, p.createElement("label", {
                    className: "tw-mt-5 tw-mb-2"
                }, "Suggest Content Warnings"), p.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-2"
                }, p.createElement(E.Z, {
                    tags: M,
                    onSelectValues: function(e) {
                        return Y([].concat((0, n.Z)(M), (0, n.Z)(e)))
                    },
                    onRemoveValue: function(e) {
                        return Y(M.filter((function(t) {
                            return t !== e
                        })))
                    }
                }))) : null != ee && ee.results.some((function(e) {
                    return e.type === g && e.category === q && e.reason === z
                })) ? p.createElement(w.qX, {
                    type: "warn",
                    title: "You already have a pending report for this."
                }) : p.createElement("label", {
                    className: "tw-mt-5 tw-flex tw-flex-col tw-gap-2"
                }, "Notes", p.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Provide specific details to help moderators resolve the issue promptly."), p.createElement(w.gx, {
                    value: W,
                    onChange: function(e) {
                        return L(e.target.value)
                    },
                    maxLength: 5e3,
                    styleOverride: {
                        height: "90px"
                    }
                })))), p.createElement(C.tc, null, p.createElement(w.zx, {
                    disabled: pe,
                    neutral: !0,
                    onClick: s,
                    className: "px-2",
                    expand: !0
                }, "Cancel"), p.createElement(w.zx, {
                    color: "primary",
                    loading: le,
                    disabled: pe || !q || !z || !W && "warnings" !== z || "copyright" === z || "warnings" === z && !M.length,
                    onClick: ue,
                    className: "px-2",
                    expand: !0
                }, "Send"))))
            }
        }
    }
]);
//# sourceMappingURL=857764705f40643bd5c2e62cfc171e564204b34eb58100e6647a18099e13bcaf.js.map