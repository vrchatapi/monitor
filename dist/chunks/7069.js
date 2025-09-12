"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7069], {
        59814: (e, t, a) => {
            var l = a(81775);
            t.DF = {
                prefix: l.prefix,
                iconName: l.iconName,
                icon: [l.width, l.height, l.aliases, l.unicode, l.svgPathData]
            }, t.f8 = t.DF, l.prefix, l.iconName, l.width, l.height, l.aliases, l.unicode, l.svgPathData, l.aliases
        },
        81775: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = "circle-check",
                l = [61533, "check-circle"],
                r = "f058",
                n = "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z";
            t.definition = {
                prefix: "far",
                iconName: a,
                icon: [512, 512, l, r, n]
            }, t.faCircleCheck = t.definition, t.prefix = "far", t.iconName = a, t.width = 512, t.height = 512, t.ligatures = l, t.unicode = r, t.svgPathData = n, t.aliases = l
        },
        86569: (e, t) => {
            var a = "circle-xmark",
                l = [61532, "times-circle", "xmark-circle"],
                r = "f057",
                n = "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z";
            t.DF = {
                prefix: "far",
                iconName: a,
                icon: [512, 512, l, r, n]
            }, t.WA = t.DF
        },
        17069: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => z
            });
            var l = a(54546),
                r = a(62475),
                n = a(96766),
                c = a(96985),
                i = a(98185),
                o = a(35187),
                s = a(83505),
                m = a(96882),
                w = a(67294),
                u = a(89250),
                d = a(82414),
                p = a(95896),
                v = a(60006),
                f = a(45697),
                g = a.n(f),
                x = function(e) {
                    var t = e.assetReview,
                        a = e.onCancel,
                        l = void 0 === a ? function() {} : a;
                    if (!t) return null;
                    var r = t.reviewStatus,
                        n = t.avatar,
                        i = t.assetType,
                        o = t.rejectReason,
                        m = t.reviewFeedback,
                        u = r === p.V3.REJECTED;
                    return w.createElement(c.JX, {
                        className: "tw-gap-5 tw-w-full"
                    }, w.createElement(c.JX, {
                        className: "tw-gap-5 xs:tw-flex-row"
                    }, w.createElement(c.pw, {
                        imageId: null == n ? void 0 : n.thumbnailImageUrl,
                        fitToCover: !0,
                        width: 180,
                        className: "tw-shrink-0"
                    }), w.createElement(c.JX, null, w.createElement("p", {
                        className: (0, s.cx)("tw-capitalize")
                    }, "Result:", " ", w.createElement("strong", {
                        className: (0, s.cx)(u && "tw-text-red", !u && "tw-text-green")
                    }, i, " ", r)), u && o && w.createElement("p", null, "Rejected Reason: ", w.createElement("strong", null, o)), m && w.createElement("p", {
                        className: "tw-max-h-[280px] tw-overflow-y-scroll tw-whitespace-pre-wrap"
                    }, m), n && !u && w.createElement("p", null, 'Your avatar "', n.name, '" has been approved and is now ready for sale.'))), !u && w.createElement(c.qX, {
                        type: "custom",
                        title: "What's next?",
                        iconColor: "#6AE3F9",
                        icon: d.sq,
                        color: "#28434B"
                    }, w.createElement("p", {
                        className: "tw-mb-0 tw-ml-6"
                    }, "Create listings for this avatar to make it available in the Avatar Marketplace, your Creator Store, or any World Store.")), w.createElement(c.JX, {
                        className: "tw-gap-3 sm:tw-flex-row tw-w-full"
                    }, w.createElement(c.zx, {
                        neutral: !0,
                        onClick: l,
                        containerClasses: "tw-flex-1"
                    }, "Close"), n && !u && w.createElement(v.Qj, {
                        to: "/home/marketplace/storefront/products",
                        className: "tw-flex-1 tw-capitalize tw-m-0"
                    }, "View Products"), u && w.createElement(v.Qj, {
                        to: "https://vrch.at/marketplace-help",
                        target: "_blank",
                        className: "tw-flex-1 tw-m-0"
                    }, "Contact Support")))
                };
            x.propTypes = {
                assetReview: g().object,
                onCancel: g().func
            };
            const E = x;
            var h = a(86569),
                b = a(59814),
                N = a(51806),
                C = a.n(N),
                k = a(72522),
                y = a(58687),
                R = a(27484),
                q = a.n(R),
                D = a(32981),
                P = function(e) {
                    var t = e.assetReviewData,
                        a = void 0 === t ? null : t,
                        r = e.viewReviewResultsCallback,
                        n = void 0 === r ? function() {} : r;
                    if (null === a) return null;
                    (0, D.I0)(), a.id;
                    var i = a.avatar,
                        o = a.createdAt,
                        s = a.reviewDate,
                        m = a.reviewStatus,
                        u = (a.productType, i.imageUrl),
                        d = i.name,
                        v = i.unityPackages,
                        f = w.useMemo((function() {
                            return Object.keys(k.VT).reduce((function(e, t) {
                                var a = (0, y.F)(v, t);
                                return a && (e[t] = a), e
                            }), {})
                        }), [v]),
                        g = w.useMemo((function() {
                            return Object.entries(k.VT).filter((function(e) {
                                var t = (0, l.Z)(e, 1)[0];
                                return !!f[t]
                            }))
                        }), [f]);
                    return w.createElement("div", {
                        className: "tw-relative"
                    }, w.createElement("div", {
                        className: "tw-grid tw-gap-2 tw-grid-cols-3 @sm/moderation-queue:tw-grid-cols-4 @md/moderation-queue:tw-grid-cols-5 @lg/moderation-queue:tw-grid-cols-6 tw-mx-5 tw-border-hr-line-color tw-border-b-[1px] tw-border-t-0 tw-border-x-0 tw-border-solid"
                    }, w.createElement(c.X2, {
                        className: "tw-flex tw-gap-1 tw-items-center tw-my-2 @[800px]/moderation-queue:tw-max-w-max"
                    }, w.createElement(c.pw, {
                        fitToCover: !0,
                        imageId: u,
                        fallbackSrc: C(),
                        className: "tw-w-8 tw-h-8 tw-rounded-md tw-shrink-0",
                        containerColor: "#181B1F",
                        iconColor: "#404C58"
                    }), w.createElement("p", {
                        className: "tw-truncate tw-mb-0"
                    }, d)), w.createElement("div", {
                        className: "tw-items-center tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/moderation-queue:tw-max-w-max tw-hidden @lg/moderation-queue:tw-flex"
                    }, g.length ? w.createElement(c.JX, {
                        className: "tw-w-full"
                    }, g.map((function(e, t) {
                        var a, r = (0, l.Z)(e, 2),
                            n = r[0],
                            i = r[1].label,
                            o = f[n];
                        return w.createElement(w.Fragment, null, w.createElement("p", {
                            key: n,
                            className: "tw-m-0 tw-text-center"
                        }, w.createElement("span", null, w.createElement(c.$1, {
                            icon: null === (a = k.VT[n]) || void 0 === a ? void 0 : a.icon
                        }), " ", i, " | Ver. ", o.assetVersion)))
                    }))) : w.createElement("em", null, "-")), w.createElement("div", {
                        className: "tw-items-center tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/moderation-queue:tw-max-w-max tw-hidden @md/moderation-queue:tw-flex"
                    }, q()(o).format("ll")), w.createElement("div", {
                        className: "tw-items-center tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/moderation-queue:tw-max-w-max tw-hidden @sm/moderation-queue:tw-flex"
                    }, s ? q()(s).format("ll") : "-"), w.createElement("div", {
                        className: "tw-flex tw-items-center tw-my-2 tw-truncate @[800px]/moderation-queue:tw-max-w-max tw-capitalize"
                    }, m === p.V3.PENDING && w.createElement("span", null, "Under Review"), (m === p.V3.COMPLETE || m === p.V3.APPROVED) && w.createElement("span", {
                        className: "tw-text-green"
                    }, w.createElement(c.$1, {
                        icon: b.f8,
                        title: "Approved",
                        className: "tw-mr-2"
                    }), "Approved"), m === p.V3.REJECTED && w.createElement("span", {
                        className: "tw-text-red"
                    }, w.createElement(c.$1, {
                        icon: h.WA,
                        title: "Reject",
                        className: "tw-mr-2"
                    }), "Rejected")), w.createElement(c.JX, {
                        className: "tw-truncate tw-justify-center tw-my-2 tw-w-fit tw-gap-2"
                    }, m !== p.V3.PENDING && w.createElement(c.zx, {
                        type: "button",
                        onClick: function() {
                            n(a)
                        },
                        neutral: !0
                    }, "View Results"))))
                };
            P.propTypes = {
                assetReviewData: g().object,
                viewReviewResultsCallback: g().func.isRequired
            };
            const V = P;
            var j = [{
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
                S = [];
            const z = function(e) {
                var t, a = e.currentUser,
                    d = e.currentPage,
                    p = e.onSortByChange,
                    v = void 0 === p ? function() {} : p,
                    f = e.sortBy,
                    g = e.orderBy;
                if (!a) return null;
                var x, h = (0, u.s0)(),
                    b = w.useState(null),
                    N = (0, l.Z)(b, 2),
                    C = N[0],
                    k = N[1],
                    y = (0, m.i4)({
                        authorId: a.id,
                        n: 50,
                        pageValue: d,
                        hydrateAsset: !0
                    }, {
                        skip: !a.id
                    }),
                    R = y.data,
                    q = y.isSuccess,
                    D = y.isFetching,
                    P = y.isError,
                    z = y.error,
                    A = (0, w.useCallback)((function(e) {
                        return f === e
                    }), [f]),
                    T = (0, w.useCallback)((function(e) {
                        if (S.includes(e)) return v(e)
                    }), [v]),
                    F = function(e) {
                        k(e)
                    };
                return w.createElement(w.Fragment, null, w.createElement("div", {
                    className: "tw-@container/moderation-queue tw-rounded-md tw-bg-grey tw-mt-5"
                }, w.createElement("div", {
                    className: "tw-w-full tw-min-w-max tw-table-auto tw-pb-1 tw-@container/queue-heading"
                }, w.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-3 @[576px]/queue-heading:tw-grid-cols-4 @md/queue-heading:tw-grid-cols-5 @lg/queue-heading:tw-grid-cols-6 tw-border-b-[1px] tw-border-0 tw-border-solid tw-border-hr-line-color tw-py-3 tw-pb-3 tw-mx-5"
                }, j.map((function(e) {
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
                            "tw-text-light-white": A(a),
                            "tw-text-light-grey": !A(a),
                            "tw-hidden @sm/queue-heading:tw-block": m,
                            "tw-hidden @md/queue-heading:tw-block": d,
                            "tw-hidden @lg/queue-heading:tw-block": v,
                            "tw-max=w-[100px]": i,
                            "tw-max-w-auto": !i,
                            "tw-cursor-auto": !S.includes(a),
                            "tw-cursor-pointer": S.includes(a)
                        }),
                        onClick: function() {
                            return T(a)
                        },
                        onKeyDown: function(e) {
                            if ("Enter" === e.key || "Space" === e.key) return T(a)
                        },
                        role: "button",
                        tabIndex: 0
                    }, t, S.includes(a) && w.createElement(c.$1, {
                        icon: A(a) && "ascending" === g ? n.fo : r.u9,
                        size: "1x",
                        className: "tw-ml-1 ".concat(A(a) && "ascending" === g ? "tw-align-bottom" : "tw-align-top")
                    }))
                }))), w.createElement("div", {
                    className: "tw-group"
                }, D ? w.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, w.createElement(i.Z, {
                    loading: !0
                })) : P ? w.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, w.createElement("p", null, "Error loading review data:"), w.createElement("code", null, null !== (x = z.data.error.message) && void 0 !== x ? x : "Unknown error")) : q && 0 === (null == R ? void 0 : R.length) ? w.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, w.createElement("p", {
                    className: "tw-mb-0"
                }, "You have no assets currently in review")) : q ? R.map((function(e) {
                    return w.createElement(V, {
                        key: e.id,
                        assetReviewData: e,
                        viewReviewResultsCallback: F
                    })
                })) : void 0), w.createElement("div", null, w.createElement(o.Z, {
                    className: "tw-pt-2",
                    totalCount: null !== (t = null == R ? void 0 : R.length) && void 0 !== t ? t : 0,
                    showCurrentPageOnly: !0,
                    currentPage: d,
                    pageSize: 50,
                    onPageChange: function(e) {
                        return h("/home/marketplace/storefront/products/moderation/page/".concat(e))
                    }
                })))), w.createElement(c.u_, {
                    slim: !0,
                    width: "100%",
                    isVisible: C,
                    onClose: function() {
                        return k(null)
                    },
                    title: "Review Results"
                }, w.createElement(E, {
                    assetReview: C,
                    onCancel: function() {
                        return k(null)
                    }
                })))
            }
        }
    }
]);
//# sourceMappingURL=adf076ff6918c39f459bf96d8b50884a80c355de2eb4c1cd68bc74ea5f827b75.js.map