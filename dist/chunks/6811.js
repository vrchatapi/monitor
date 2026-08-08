"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6811], {
        65918(e, t, a) {
            var l = a(42394);
            t.mw = {
                prefix: l.prefix,
                iconName: l.iconName,
                icon: [l.width, l.height, l.aliases, l.unicode, l.svgPathData]
            }, t.SG = t.mw, l.prefix, l.iconName, l.width, l.height, l.aliases, l.unicode, l.svgPathData, l.aliases
        },
        42394(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = "circle-check",
                l = [61533, "check-circle"],
                n = "f058",
                r = "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z";
            t.definition = {
                prefix: "far",
                iconName: a,
                icon: [512, 512, l, n, r]
            }, t.faCircleCheck = t.definition, t.prefix = "far", t.iconName = a, t.width = 512, t.height = 512, t.ligatures = l, t.unicode = n, t.svgPathData = r, t.aliases = l
        },
        42623(e, t) {
            var a = "circle-xmark",
                l = [61532, "times-circle", "xmark-circle"],
                n = "f057",
                r = "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z";
            t.mw = {
                prefix: "far",
                iconName: a,
                icon: [512, 512, l, n, r]
            }, t.bn = t.mw
        },
        6811(e, t, a) {
            a.r(t), a.d(t, {
                default: () => j
            });
            var l = a(82544),
                n = a(18249),
                r = a(74408),
                c = a(71661),
                i = a(71853),
                o = a(31337),
                s = a(56822),
                m = a(77596),
                w = a(96540),
                u = a(47767),
                d = a(6913),
                p = a(75171),
                v = a.n(p),
                f = a(31069),
                g = a(24751),
                E = a(5556),
                x = a.n(E),
                h = function(e) {
                    var t = e.assetReview,
                        a = e.onCancel,
                        l = void 0 === a ? function() {} : a;
                    if (!t) return null;
                    var n = t.reviewStatus,
                        r = t.avatar,
                        i = t.assetType,
                        o = t.rejectReason,
                        m = t.reviewFeedback,
                        u = n === f.td.REJECTED,
                        p = !r || !r.imageUrl;
                    return w.createElement(c.fv, {
                        className: "tw-gap-5 tw-w-full"
                    }, w.createElement(c.fv, {
                        className: "tw-gap-5 xs:tw-flex-row"
                    }, w.createElement(c.Oo, {
                        imageId: p ? null : null == r ? void 0 : r.thumbnailImageUrl,
                        fallbackSrc: v(),
                        fitToCover: !0,
                        width: 180,
                        className: "tw-shrink-0"
                    }), w.createElement(c.fv, null, w.createElement("p", {
                        className: (0, s.cx)("tw-capitalize")
                    }, "Result:", " ", w.createElement("strong", {
                        className: (0, s.cx)(u && "tw-text-red", !u && "tw-text-green")
                    }, i, " ", n)), u && o && w.createElement("p", null, "Rejected Reason: ", w.createElement("strong", null, o)), m && w.createElement("p", {
                        className: "tw-max-h-[280px] tw-overflow-y-scroll tw-whitespace-pre-wrap"
                    }, m), r && !u && !p && w.createElement("p", null, 'Your avatar "', r.name, '" has been approved and is now ready for sale.'))), !u && w.createElement(c.$T, {
                        type: "custom",
                        title: "What's next?",
                        iconColor: "#6AE3F9",
                        icon: d.iW,
                        color: "#28434B"
                    }, w.createElement("p", {
                        className: "tw-mb-0 tw-ml-6"
                    }, "Create listings for this avatar to make it available in the Avatar Marketplace, your Creator Store, or any World Store.")), w.createElement(c.fv, {
                        className: "tw-gap-3 sm:tw-flex-row tw-w-full"
                    }, w.createElement(c.$n, {
                        neutral: !0,
                        onClick: l,
                        containerClasses: "tw-flex-1"
                    }, "Close"), r && !u && w.createElement(g.z9, {
                        to: "/home/marketplace/storefront/products",
                        className: "tw-flex-1 tw-capitalize tw-m-0"
                    }, "View Products"), u && w.createElement(g.z9, {
                        to: "https://vrch.at/marketplace-help",
                        target: "_blank",
                        className: "tw-flex-1 tw-m-0"
                    }, "Contact Support")))
                };
            h.propTypes = {
                assetReview: x().object,
                onCancel: x().func
            };
            const b = h;
            var N = a(3569),
                C = a(42623),
                k = a(65918),
                y = a(77861),
                R = a(55717),
                q = a(74353),
                P = a.n(q),
                A = a(65279),
                S = function(e) {
                    var t = e.assetReviewData,
                        a = void 0 === t ? null : t,
                        n = e.viewReviewResultsCallback,
                        r = void 0 === n ? function() {} : n,
                        i = w.useState(!1),
                        o = (0, l.A)(i, 2),
                        s = o[0],
                        m = o[1];
                    if (null === a) return null;
                    var u = a.avatar,
                        d = a.createdAt,
                        p = a.reviewDate,
                        g = a.reviewStatus,
                        E = !u || !u.imageUrl,
                        x = null == u ? void 0 : u.imageUrl,
                        h = E ? "Hidden Avatar" : null == u ? void 0 : u.name,
                        b = (null == u ? void 0 : u.unityPackages) || [],
                        q = "hidden-avatar-tooltip-".concat(a.id),
                        S = w.useMemo(function() {
                            return Object.keys(y.P4).reduce(function(e, t) {
                                var a = (0, R.A)(b, t);
                                return a && (e[t] = a), e
                            }, {})
                        }, [b]),
                        D = w.useMemo(function() {
                            return Object.entries(y.P4).filter(function(e) {
                                var t = (0, l.A)(e, 1)[0];
                                return !!S[t]
                            })
                        }, [S]);
                    return w.createElement("div", {
                        className: "tw-relative"
                    }, w.createElement("div", {
                        className: "tw-grid tw-gap-2 tw-grid-cols-3 @sm/moderation-queue:tw-grid-cols-4 @md/moderation-queue:tw-grid-cols-5 @lg/moderation-queue:tw-grid-cols-6 tw-mx-5 tw-border-hr-line-color tw-border-b-[1px] tw-border-t-0 tw-border-x-0 tw-border-solid"
                    }, w.createElement(c.fI, {
                        className: "tw-flex tw-gap-1 tw-items-center tw-my-2 @[800px]/moderation-queue:tw-max-w-max"
                    }, w.createElement(c.Oo, {
                        fitToCover: !0,
                        imageId: x,
                        fallbackSrc: v(),
                        className: "tw-w-8 tw-h-8 tw-rounded-md tw-shrink-0",
                        containerColor: "#181B1F",
                        iconColor: "#404C58"
                    }), w.createElement("p", {
                        className: "tw-truncate tw-mb-0"
                    }, h, E && w.createElement(w.Fragment, null, w.createElement(c.M2, {
                        id: q,
                        icon: N.faCircleInfo,
                        className: "tw-ml-1 tw-text-light-grey tw-cursor-help",
                        size: "sm"
                    }), w.createElement(A.A, {
                        placement: "top",
                        isOpen: s,
                        target: q,
                        toggle: function() {
                            return m(!s)
                        },
                        offset: [0, 8]
                    }, "This avatar has been hidden. Check your email for details.")))), w.createElement("div", {
                        className: "tw-items-center tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/moderation-queue:tw-max-w-max tw-hidden @lg/moderation-queue:tw-flex"
                    }, D.length ? w.createElement(c.fv, {
                        className: "tw-w-full"
                    }, D.map(function(e) {
                        var t, a = (0, l.A)(e, 2),
                            n = a[0],
                            r = a[1].label,
                            i = S[n];
                        return w.createElement("p", {
                            key: n,
                            className: "tw-m-0 tw-text-center"
                        }, w.createElement("span", null, w.createElement(c.M2, {
                            icon: null === (t = y.P4[n]) || void 0 === t ? void 0 : t.icon
                        }), " ", r, " | Ver. ", i.assetVersion))
                    })) : w.createElement("em", null, "-")), w.createElement("div", {
                        className: "tw-items-center tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/moderation-queue:tw-max-w-max tw-hidden @md/moderation-queue:tw-flex"
                    }, P()(d).format("ll")), w.createElement("div", {
                        className: "tw-items-center tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/moderation-queue:tw-max-w-max tw-hidden @sm/moderation-queue:tw-flex"
                    }, p ? P()(p).format("ll") : "-"), w.createElement("div", {
                        className: "tw-flex tw-items-center tw-my-2 tw-truncate @[800px]/moderation-queue:tw-max-w-max tw-capitalize"
                    }, g === f.td.PENDING && w.createElement("span", null, "Under Review"), (g === f.td.COMPLETE || g === f.td.APPROVED) && w.createElement("span", {
                        className: "tw-text-green"
                    }, w.createElement(c.M2, {
                        icon: k.SG,
                        title: "Approved",
                        className: "tw-mr-2"
                    }), "Approved"), g === f.td.REJECTED && w.createElement("span", {
                        className: "tw-text-red"
                    }, w.createElement(c.M2, {
                        icon: C.bn,
                        title: "Reject",
                        className: "tw-mr-2"
                    }), "Rejected")), w.createElement(c.fv, {
                        className: "tw-truncate tw-justify-center tw-my-2 tw-w-fit tw-gap-2"
                    }, g !== f.td.PENDING && w.createElement(c.$n, {
                        type: "button",
                        onClick: function() {
                            r(a)
                        },
                        neutral: !0
                    }, "View Results"))))
                };
            S.propTypes = {
                assetReviewData: x().object,
                viewReviewResultsCallback: x().func.isRequired
            };
            const D = S;
            var z = [{
                    label: "Product Name",
                    value: "name"
                }, {
                    label: "Platform/Version",
                    value: "platform",
                    mdCollapse: !0
                }, {
                    label: "Date Submitted",
                    value: "createdAt",
                    smCollapse: !0
                }, {
                    label: "Date Reviewed",
                    value: "reviewDate",
                    xsCollapse: !0
                }, {
                    label: "Status",
                    value: "reviewStatus"
                }, {
                    label: "Results",
                    value: ""
                }],
                M = [];
            const j = function(e) {
                var t, a = e.currentUser,
                    d = e.currentPage,
                    p = e.onSortByChange,
                    v = void 0 === p ? function() {} : p,
                    f = e.sortBy,
                    g = e.orderBy;
                if (!a) return null;
                var E, x = (0, u.Zp)(),
                    h = w.useState(null),
                    N = (0, l.A)(h, 2),
                    C = N[0],
                    k = N[1],
                    y = (0, m.zs)({
                        authorId: a.id,
                        n: 50,
                        pageValue: d,
                        hydrateAsset: !0
                    }, {
                        skip: !a.id
                    }),
                    R = y.data,
                    q = y.isSuccess,
                    P = y.isFetching,
                    A = y.isError,
                    S = y.error,
                    j = (0, w.useCallback)(function(e) {
                        return f === e
                    }, [f]),
                    T = (0, w.useCallback)(function(e) {
                        if (M.includes(e)) return v(e)
                    }, [v]),
                    I = function(e) {
                        k(e)
                    };
                return w.createElement(w.Fragment, null, w.createElement("div", {
                    className: "tw-@container/moderation-queue tw-rounded-md tw-bg-grey tw-mt-5"
                }, w.createElement("div", {
                    className: "tw-w-full tw-min-w-max tw-table-auto tw-pb-1 tw-@container/queue-heading"
                }, w.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-3 @[576px]/queue-heading:tw-grid-cols-4 @md/queue-heading:tw-grid-cols-5 @lg/queue-heading:tw-grid-cols-6 tw-border-b-[1px] tw-border-0 tw-border-solid tw-border-hr-line-color tw-py-3 tw-pb-3 tw-mx-5"
                }, z.map(function(e) {
                    var t = e.label,
                        a = e.value,
                        l = (e.canCollapse, e.isSmallColumn),
                        i = void 0 !== l && l,
                        o = (e.mobileCollapse, e.xsCollapse),
                        m = void 0 !== o && o,
                        u = e.smCollapse,
                        d = void 0 !== u && u,
                        p = e.mdCollapse,
                        v = void 0 !== p && p;
                    return w.createElement("span", {
                        key: a,
                        className: (0, s.cx)("tw-font-normal tw-text-base", {
                            "tw-text-light-white": j(a),
                            "tw-text-light-grey": !j(a),
                            "tw-hidden @sm/queue-heading:tw-block": m,
                            "tw-hidden @md/queue-heading:tw-block": d,
                            "tw-hidden @lg/queue-heading:tw-block": v,
                            "tw-max=w-[100px]": i,
                            "tw-max-w-auto": !i,
                            "tw-cursor-auto": !M.includes(a),
                            "tw-cursor-pointer": M.includes(a)
                        }),
                        onClick: function() {
                            return T(a)
                        },
                        onKeyDown: function(e) {
                            if ("Enter" === e.key || "Space" === e.key) return T(a)
                        },
                        role: "button",
                        tabIndex: 0
                    }, t, M.includes(a) && w.createElement(c.M2, {
                        icon: j(a) && "ascending" === g ? r.Dv : n.Yn,
                        size: "1x",
                        className: "tw-ml-1 ".concat(j(a) && "ascending" === g ? "tw-align-bottom" : "tw-align-top")
                    }))
                })), w.createElement("div", {
                    className: "tw-group"
                }, P ? w.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, w.createElement(i.A, {
                    loading: !0
                })) : A ? w.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, w.createElement("p", null, "Error loading review data:"), w.createElement("code", null, null !== (E = S.data.error.message) && void 0 !== E ? E : "Unknown error")) : q && 0 === (null == R ? void 0 : R.length) ? w.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, w.createElement("p", {
                    className: "tw-mb-0"
                }, "You have no assets currently in review")) : q ? R.map(function(e) {
                    return w.createElement(D, {
                        key: e.id,
                        assetReviewData: e,
                        viewReviewResultsCallback: I
                    })
                }) : void 0), w.createElement("div", null, w.createElement(o.A, {
                    className: "tw-pt-2",
                    totalCount: null !== (t = null == R ? void 0 : R.length) && void 0 !== t ? t : 0,
                    showCurrentPageOnly: !0,
                    currentPage: d,
                    pageSize: 50,
                    onPageChange: function(e) {
                        return x("/home/marketplace/storefront/products/moderation/page/".concat(e))
                    }
                })))), w.createElement(c.aF, {
                    slim: !0,
                    width: "100%",
                    isVisible: C,
                    onClose: function() {
                        return k(null)
                    },
                    title: "Review Results"
                }, w.createElement(b, {
                    assetReview: C,
                    onCancel: function() {
                        return k(null)
                    }
                })))
            }
        }
    }
]);
//# sourceMappingURL=ef1210e1ddb5b22c3dcd38bfc88c96608afcb14d9edba7ef9864f60bf2da5194.js.map