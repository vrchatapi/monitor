"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6811], {
        65918(e, t, a) {
            var r = a(42394);
            t.mw = {
                prefix: r.prefix,
                iconName: r.iconName,
                icon: [r.width, r.height, r.aliases, r.unicode, r.svgPathData]
            }, t.SG = t.mw, r.prefix, r.iconName, r.width, r.height, r.aliases, r.unicode, r.svgPathData, r.aliases
        },
        42394(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = "circle-check",
                r = [61533, "check-circle"],
                l = "f058",
                n = "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z";
            t.definition = {
                prefix: "far",
                iconName: a,
                icon: [512, 512, r, l, n]
            }, t.faCircleCheck = t.definition, t.prefix = "far", t.iconName = a, t.width = 512, t.height = 512, t.ligatures = r, t.unicode = l, t.svgPathData = n, t.aliases = r
        },
        42623(e, t) {
            var a = "circle-xmark",
                r = [61532, "times-circle", "xmark-circle"],
                l = "f057",
                n = "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z";
            t.mw = {
                prefix: "far",
                iconName: a,
                icon: [512, 512, r, l, n]
            }, t.bn = t.mw
        },
        6811(e, t, a) {
            a.r(t), a.d(t, {
                default: () => M
            });
            var r = a(82544),
                l = a(18249),
                n = a(74408),
                c = a(71661),
                i = a(71853),
                s = a(31337),
                o = a(56822),
                m = a(77596),
                w = a(96540),
                u = a(47767),
                d = a(6913),
                p = a(31069),
                v = a(24751),
                f = a(5556),
                g = a.n(f),
                x = function(e) {
                    var t = e.assetReview,
                        a = e.onCancel,
                        r = void 0 === a ? function() {} : a;
                    if (!t) return null;
                    var l = t.reviewStatus,
                        n = t.avatar,
                        i = t.assetType,
                        s = t.rejectReason,
                        m = t.reviewFeedback,
                        u = l === p.td.REJECTED;
                    return w.createElement(c.fv, {
                        className: "tw-gap-5 tw-w-full"
                    }, w.createElement(c.fv, {
                        className: "tw-gap-5 xs:tw-flex-row"
                    }, w.createElement(c.Oo, {
                        imageId: null == n ? void 0 : n.thumbnailImageUrl,
                        fitToCover: !0,
                        width: 180,
                        className: "tw-shrink-0"
                    }), w.createElement(c.fv, null, w.createElement("p", {
                        className: (0, o.cx)("tw-capitalize")
                    }, "Result:", " ", w.createElement("strong", {
                        className: (0, o.cx)(u && "tw-text-red", !u && "tw-text-green")
                    }, i, " ", l)), u && s && w.createElement("p", null, "Rejected Reason: ", w.createElement("strong", null, s)), m && w.createElement("p", {
                        className: "tw-max-h-[280px] tw-overflow-y-scroll tw-whitespace-pre-wrap"
                    }, m), n && !u && w.createElement("p", null, 'Your avatar "', n.name, '" has been approved and is now ready for sale.'))), !u && w.createElement(c.$T, {
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
                        onClick: r,
                        containerClasses: "tw-flex-1"
                    }, "Close"), n && !u && w.createElement(v.z9, {
                        to: "/home/marketplace/storefront/products",
                        className: "tw-flex-1 tw-capitalize tw-m-0"
                    }, "View Products"), u && w.createElement(v.z9, {
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
            var h = a(42623),
                b = a(65918),
                N = a(75171),
                C = a.n(N),
                k = a(77861),
                y = a(55717),
                R = a(74353),
                q = a.n(R),
                P = a(4899),
                A = a(78502),
                D = function(e) {
                    var t = e.assetReviewData,
                        a = void 0 === t ? null : t,
                        l = e.viewReviewResultsCallback,
                        n = void 0 === l ? function() {} : l,
                        i = (0, A.a$)().userId;
                    if (null === a) return null;
                    var s = a.avatar,
                        o = a.createdAt,
                        m = a.reviewDate,
                        u = a.reviewStatus;
                    if (!s || !s.imageUrl) return console.debug("Avatar asset review data is incomplete:", a), P.Cp(new Error("Avatar asset review data is incomplete"), {
                        user: {
                            id: i
                        },
                        extra: {
                            assetReviewData: a
                        }
                    }), null;
                    var d = s.imageUrl,
                        v = s.name,
                        f = s.unityPackages,
                        g = w.useMemo(function() {
                            return Object.keys(k.P4).reduce(function(e, t) {
                                var a = (0, y.A)(f, t);
                                return a && (e[t] = a), e
                            }, {})
                        }, [f]),
                        x = w.useMemo(function() {
                            return Object.entries(k.P4).filter(function(e) {
                                var t = (0, r.A)(e, 1)[0];
                                return !!g[t]
                            })
                        }, [g]);
                    return w.createElement("div", {
                        className: "tw-relative"
                    }, w.createElement("div", {
                        className: "tw-grid tw-gap-2 tw-grid-cols-3 @sm/moderation-queue:tw-grid-cols-4 @md/moderation-queue:tw-grid-cols-5 @lg/moderation-queue:tw-grid-cols-6 tw-mx-5 tw-border-hr-line-color tw-border-b-[1px] tw-border-t-0 tw-border-x-0 tw-border-solid"
                    }, w.createElement(c.fI, {
                        className: "tw-flex tw-gap-1 tw-items-center tw-my-2 @[800px]/moderation-queue:tw-max-w-max"
                    }, w.createElement(c.Oo, {
                        fitToCover: !0,
                        imageId: d,
                        fallbackSrc: C(),
                        className: "tw-w-8 tw-h-8 tw-rounded-md tw-shrink-0",
                        containerColor: "#181B1F",
                        iconColor: "#404C58"
                    }), w.createElement("p", {
                        className: "tw-truncate tw-mb-0"
                    }, v)), w.createElement("div", {
                        className: "tw-items-center tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/moderation-queue:tw-max-w-max tw-hidden @lg/moderation-queue:tw-flex"
                    }, x.length ? w.createElement(c.fv, {
                        className: "tw-w-full"
                    }, x.map(function(e, t) {
                        var a, l = (0, r.A)(e, 2),
                            n = l[0],
                            i = l[1].label,
                            s = g[n];
                        return w.createElement(w.Fragment, null, w.createElement("p", {
                            key: n,
                            className: "tw-m-0 tw-text-center"
                        }, w.createElement("span", null, w.createElement(c.M2, {
                            icon: null === (a = k.P4[n]) || void 0 === a ? void 0 : a.icon
                        }), " ", i, " | Ver. ", s.assetVersion)))
                    })) : w.createElement("em", null, "-")), w.createElement("div", {
                        className: "tw-items-center tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/moderation-queue:tw-max-w-max tw-hidden @md/moderation-queue:tw-flex"
                    }, q()(o).format("ll")), w.createElement("div", {
                        className: "tw-items-center tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/moderation-queue:tw-max-w-max tw-hidden @sm/moderation-queue:tw-flex"
                    }, m ? q()(m).format("ll") : "-"), w.createElement("div", {
                        className: "tw-flex tw-items-center tw-my-2 tw-truncate @[800px]/moderation-queue:tw-max-w-max tw-capitalize"
                    }, u === p.td.PENDING && w.createElement("span", null, "Under Review"), (u === p.td.COMPLETE || u === p.td.APPROVED) && w.createElement("span", {
                        className: "tw-text-green"
                    }, w.createElement(c.M2, {
                        icon: b.SG,
                        title: "Approved",
                        className: "tw-mr-2"
                    }), "Approved"), u === p.td.REJECTED && w.createElement("span", {
                        className: "tw-text-red"
                    }, w.createElement(c.M2, {
                        icon: h.bn,
                        title: "Reject",
                        className: "tw-mr-2"
                    }), "Rejected")), w.createElement(c.fv, {
                        className: "tw-truncate tw-justify-center tw-my-2 tw-w-fit tw-gap-2"
                    }, u !== p.td.PENDING && w.createElement(c.$n, {
                        type: "button",
                        onClick: function() {
                            n(a)
                        },
                        neutral: !0
                    }, "View Results"))))
                };
            D.propTypes = {
                assetReviewData: g().object,
                viewReviewResultsCallback: g().func.isRequired
            };
            const S = D;
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
                j = [];
            const M = function(e) {
                var t, a = e.currentUser,
                    d = e.currentPage,
                    p = e.onSortByChange,
                    v = void 0 === p ? function() {} : p,
                    f = e.sortBy,
                    g = e.orderBy;
                if (!a) return null;
                var x, h = (0, u.Zp)(),
                    b = w.useState(null),
                    N = (0, r.A)(b, 2),
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
                    D = y.error,
                    M = (0, w.useCallback)(function(e) {
                        return f === e
                    }, [f]),
                    I = (0, w.useCallback)(function(e) {
                        if (j.includes(e)) return v(e)
                    }, [v]),
                    T = function(e) {
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
                        r = (e.canCollapse, e.isSmallColumn),
                        i = void 0 !== r && r,
                        s = (e.mobileCollapse, e.xsCollapse),
                        m = void 0 !== s && s,
                        u = e.smCollapse,
                        d = void 0 !== u && u,
                        p = e.mdCollapse,
                        v = void 0 !== p && p;
                    return w.createElement("span", {
                        key: a,
                        className: (0, o.cx)("tw-font-normal tw-text-base", {
                            "tw-text-light-white": M(a),
                            "tw-text-light-grey": !M(a),
                            "tw-hidden @sm/queue-heading:tw-block": m,
                            "tw-hidden @md/queue-heading:tw-block": d,
                            "tw-hidden @lg/queue-heading:tw-block": v,
                            "tw-max=w-[100px]": i,
                            "tw-max-w-auto": !i,
                            "tw-cursor-auto": !j.includes(a),
                            "tw-cursor-pointer": j.includes(a)
                        }),
                        onClick: function() {
                            return I(a)
                        },
                        onKeyDown: function(e) {
                            if ("Enter" === e.key || "Space" === e.key) return I(a)
                        },
                        role: "button",
                        tabIndex: 0
                    }, t, j.includes(a) && w.createElement(c.M2, {
                        icon: M(a) && "ascending" === g ? n.Dv : l.Yn,
                        size: "1x",
                        className: "tw-ml-1 ".concat(M(a) && "ascending" === g ? "tw-align-bottom" : "tw-align-top")
                    }))
                })), w.createElement("div", {
                    className: "tw-group"
                }, P ? w.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, w.createElement(i.A, {
                    loading: !0
                })) : A ? w.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, w.createElement("p", null, "Error loading review data:"), w.createElement("code", null, null !== (x = D.data.error.message) && void 0 !== x ? x : "Unknown error")) : q && 0 === (null == R ? void 0 : R.length) ? w.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, w.createElement("p", {
                    className: "tw-mb-0"
                }, "You have no assets currently in review")) : q ? R.map(function(e) {
                    return w.createElement(S, {
                        key: e.id,
                        assetReviewData: e,
                        viewReviewResultsCallback: T
                    })
                }) : void 0), w.createElement("div", null, w.createElement(s.A, {
                    className: "tw-pt-2",
                    totalCount: null !== (t = null == R ? void 0 : R.length) && void 0 !== t ? t : 0,
                    showCurrentPageOnly: !0,
                    currentPage: d,
                    pageSize: 50,
                    onPageChange: function(e) {
                        return h("/home/marketplace/storefront/products/moderation/page/".concat(e))
                    }
                })))), w.createElement(c.aF, {
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
//# sourceMappingURL=b4e749440ce9fc22239c7a861dcc139ff4f2ff3969a42903491b8f90eeb1984b.js.map