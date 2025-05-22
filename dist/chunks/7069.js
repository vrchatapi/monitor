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
                n = "f058",
                r = "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z";
            t.definition = {
                prefix: "far",
                iconName: a,
                icon: [512, 512, l, n, r]
            }, t.faCircleCheck = t.definition, t.prefix = "far", t.iconName = a, t.width = 512, t.height = 512, t.ligatures = l, t.unicode = n, t.svgPathData = r, t.aliases = l
        },
        86569: (e, t) => {
            var a = "circle-xmark",
                l = [61532, "times-circle", "xmark-circle"],
                n = "f057",
                r = "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z";
            t.DF = {
                prefix: "far",
                iconName: a,
                icon: [512, 512, l, n, r]
            }, t.WA = t.DF
        },
        17069: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => S
            });
            var l = a(54546),
                n = a(62475),
                r = a(96766),
                c = a(37463),
                i = a(98185),
                o = a(35187),
                s = a(83505),
                m = a(96882),
                u = a(67294),
                w = a(89250),
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
                    (0, w.s0)();
                    var n = t.reviewStatus,
                        r = t.avatar,
                        i = t.assetType,
                        o = t.rejectReason,
                        m = t.reviewNotes,
                        f = n === p.V3.REJECTED;
                    return u.createElement(c.JX, {
                        className: "tw-gap-5 tw-w-full"
                    }, u.createElement(c.JX, {
                        className: "tw-gap-5 xs:tw-flex-row"
                    }, u.createElement(c.pw, {
                        imageId: null == r ? void 0 : r.thumbnailImageUrl,
                        fitToCover: !0,
                        width: 180,
                        className: "tw-shrink-0"
                    }), u.createElement(c.JX, null, u.createElement("p", {
                        className: (0, s.cx)("tw-capitalize")
                    }, "Result:", " ", u.createElement("strong", {
                        className: (0, s.cx)(f && "tw-text-red", !f && "tw-text-green")
                    }, i, " ", n)), f && o && u.createElement("p", null, "Rejected Reason: ", u.createElement("strong", null, o)), m && u.createElement("p", null, m), r && !f && u.createElement("p", null, 'Your avatar "', r.name, '" has been approved and is now ready for sale.'))), !f && u.createElement(c.qX, {
                        type: "custom",
                        title: "What's next?",
                        iconColor: "#6AE3F9",
                        icon: d.sq,
                        color: "#28434B"
                    }, u.createElement("p", {
                        className: "tw-mb-0 tw-ml-6"
                    }, "Create listings for this avatar to make it available in the Avatar Marketplace, your Creator Store, or any World Store.")), u.createElement(c.JX, {
                        className: "tw-gap-3 sm:tw-flex-row tw-w-full"
                    }, u.createElement(c.zx, {
                        neutral: !0,
                        onClick: l,
                        containerClasses: "tw-flex-1"
                    }, "Close"), r && !f && u.createElement(v.Qj, {
                        to: "/home/marketplace/storefront/products",
                        className: "tw-flex-1 tw-capitalize tw-m-0"
                    }, "View Products"), f && u.createElement(v.Qj, {
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
                N = a(67263),
                C = a(72522),
                k = a(58687),
                y = a(27484),
                R = a.n(y),
                q = a(32981),
                D = function(e) {
                    var t = e.assetReviewData,
                        a = void 0 === t ? null : t,
                        n = e.viewReviewResultsCallback,
                        r = void 0 === n ? function() {} : n;
                    if (null === a) return null;
                    (0, q.I0)(), a.id;
                    var i = a.avatar,
                        o = a.createdAt,
                        s = a.reviewDate,
                        m = a.reviewStatus,
                        w = (a.productType, i.imageUrl),
                        d = i.name,
                        v = i.unityPackages,
                        f = u.useMemo((function() {
                            return Object.keys(C.VT).reduce((function(e, t) {
                                var a = (0, k.F)(v, t);
                                return a && (e[t] = a), e
                            }), {})
                        }), [v]),
                        g = u.useMemo((function() {
                            return Object.entries(C.VT).filter((function(e) {
                                var t = (0, l.Z)(e, 1)[0];
                                return !!f[t]
                            }))
                        }), [f]);
                    return u.createElement("div", {
                        className: "tw-relative"
                    }, u.createElement("div", {
                        className: "tw-grid tw-gap-2 tw-grid-cols-3 @sm/moderation-queue:tw-grid-cols-4 @md/moderation-queue:tw-grid-cols-5 @lg/moderation-queue:tw-grid-cols-6 tw-mx-5 tw-border-hr-line-color tw-border-b-[1px] tw-border-t-0 tw-border-x-0 tw-border-solid"
                    }, u.createElement(c.X2, {
                        className: "tw-flex tw-gap-1 tw-items-center tw-my-2 @[800px]/moderation-queue:tw-max-w-max"
                    }, u.createElement(c.pw, {
                        fitToCover: !0,
                        imageId: w,
                        fallbackSrc: N,
                        className: "tw-w-8 tw-h-8 tw-rounded-md tw-shrink-0",
                        containerColor: "#181B1F",
                        iconColor: "#404C58"
                    }), u.createElement("p", {
                        className: "tw-truncate tw-mb-0"
                    }, d)), u.createElement("div", {
                        className: "tw-items-center tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/moderation-queue:tw-max-w-max tw-hidden @lg/moderation-queue:tw-flex"
                    }, g.length ? u.createElement(c.JX, {
                        className: "tw-w-full"
                    }, g.map((function(e, t) {
                        var a, n = (0, l.Z)(e, 2),
                            r = n[0],
                            i = n[1].label,
                            o = f[r];
                        return u.createElement(u.Fragment, null, u.createElement("p", {
                            key: r,
                            className: "tw-m-0 tw-text-center"
                        }, u.createElement("span", null, u.createElement(c.$1, {
                            icon: null === (a = C.VT[r]) || void 0 === a ? void 0 : a.icon
                        }), " ", i, " | Ver. ", o.assetVersion)))
                    }))) : u.createElement("em", null, "-")), u.createElement("div", {
                        className: "tw-items-center tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/moderation-queue:tw-max-w-max tw-hidden @md/moderation-queue:tw-flex"
                    }, R()(o).format("ll")), u.createElement("div", {
                        className: "tw-items-center tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/moderation-queue:tw-max-w-max tw-hidden @sm/moderation-queue:tw-flex"
                    }, s ? R()(s).format("ll") : "-"), u.createElement("div", {
                        className: "tw-flex tw-items-center tw-my-2 tw-truncate @[800px]/moderation-queue:tw-max-w-max tw-capitalize"
                    }, m === p.V3.PENDING && u.createElement("span", null, "Under Review"), (m === p.V3.COMPLETE || m === p.V3.APPROVED) && u.createElement("span", {
                        className: "tw-text-green"
                    }, u.createElement(c.$1, {
                        icon: b.f8,
                        title: "Approved",
                        className: "tw-mr-2"
                    }), "Approved"), m === p.V3.REJECTED && u.createElement("span", {
                        className: "tw-text-red"
                    }, u.createElement(c.$1, {
                        icon: h.WA,
                        title: "Reject",
                        className: "tw-mr-2"
                    }), "Rejected")), u.createElement(c.JX, {
                        className: "tw-truncate tw-justify-center tw-my-2 tw-w-fit tw-gap-2"
                    }, m !== p.V3.PENDING && u.createElement(c.zx, {
                        type: "button",
                        onClick: function() {
                            r(a)
                        },
                        neutral: !0
                    }, "View Results"))))
                };
            D.propTypes = {
                assetReviewData: g().object,
                viewReviewResultsCallback: g().func.isRequired
            };
            const P = D;
            var V = [{
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
            const S = function(e) {
                var t, a = e.currentUser,
                    d = e.currentPage,
                    p = e.onSortByChange,
                    v = void 0 === p ? function() {} : p,
                    f = e.sortBy,
                    g = e.orderBy;
                if (!a) return null;
                var x, h = (0, w.s0)(),
                    b = u.useState(null),
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
                    S = y.isError,
                    z = y.error,
                    A = (0, u.useCallback)((function(e) {
                        return f === e
                    }), [f]),
                    T = (0, u.useCallback)((function(e) {
                        if (j.includes(e)) return v(e)
                    }), [v]),
                    F = function(e) {
                        k(e)
                    };
                return u.createElement(u.Fragment, null, u.createElement("div", {
                    className: "tw-@container/moderation-queue tw-rounded-md tw-bg-grey tw-mt-5"
                }, u.createElement("div", {
                    className: "tw-w-full tw-min-w-max tw-table-auto tw-pb-1 tw-@container/queue-heading"
                }, u.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-3 @[576px]/queue-heading:tw-grid-cols-4 @md/queue-heading:tw-grid-cols-5 @lg/queue-heading:tw-grid-cols-6 tw-border-b-[1px] tw-border-0 tw-border-solid tw-border-hr-line-color tw-py-3 tw-pb-3 tw-mx-5"
                }, V.map((function(e) {
                    var t = e.label,
                        a = e.value,
                        l = (e.canCollapse, e.isSmallColumn),
                        i = void 0 !== l && l,
                        o = (e.mobileCollapse, e.xsCollapse),
                        m = void 0 !== o && o,
                        w = e.smCollapse,
                        d = void 0 !== w && w,
                        p = e.mdCollapse,
                        v = void 0 !== p && p;
                    return u.createElement("span", {
                        key: a,
                        className: (0, s.cx)("tw-font-normal tw-text-base", {
                            "tw-text-light-white": A(a),
                            "tw-text-light-grey": !A(a),
                            "tw-hidden @sm/queue-heading:tw-block": m,
                            "tw-hidden @md/queue-heading:tw-block": d,
                            "tw-hidden @lg/queue-heading:tw-block": v,
                            "tw-max=w-[100px]": i,
                            "tw-max-w-auto": !i,
                            "tw-cursor-auto": !j.includes(a),
                            "tw-cursor-pointer": j.includes(a)
                        }),
                        onClick: function() {
                            return T(a)
                        },
                        onKeyDown: function(e) {
                            if ("Enter" === e.key || "Space" === e.key) return T(a)
                        },
                        role: "button",
                        tabIndex: 0
                    }, t, j.includes(a) && u.createElement(c.$1, {
                        icon: A(a) && "ascending" === g ? r.fo : n.u9,
                        size: "1x",
                        className: "tw-ml-1 ".concat(A(a) && "ascending" === g ? "tw-align-bottom" : "tw-align-top")
                    }))
                }))), u.createElement("div", {
                    className: "tw-group"
                }, D ? u.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, u.createElement(i.Z, {
                    loading: !0
                })) : S ? u.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, u.createElement("p", null, "Error loading review data:"), u.createElement("code", null, null !== (x = z.data.error.message) && void 0 !== x ? x : "Unknown error")) : q && 0 === (null == R ? void 0 : R.length) ? u.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, u.createElement("p", {
                    className: "tw-mb-0"
                }, "You have no assets currently in review")) : q ? R.map((function(e) {
                    return u.createElement(P, {
                        key: e.id,
                        assetReviewData: e,
                        viewReviewResultsCallback: F
                    })
                })) : void 0), u.createElement("div", null, u.createElement(o.Z, {
                    className: "tw-pt-2",
                    totalCount: null !== (t = null == R ? void 0 : R.length) && void 0 !== t ? t : 0,
                    showCurrentPageOnly: !0,
                    currentPage: d,
                    pageSize: 50,
                    onPageChange: function(e) {
                        return h("/home/marketplace/storefront/products/moderation/page/".concat(e))
                    }
                })))), u.createElement(c.u_, {
                    slim: !0,
                    width: "100%",
                    isVisible: C,
                    onClose: function() {
                        return k(null)
                    },
                    title: "Review Results"
                }, u.createElement(E, {
                    assetReview: C,
                    onCancel: function() {
                        return k(null)
                    }
                })))
            }
        }
    }
]);
//# sourceMappingURL=8ca03f92acc64616c3ebdb4347ce76f828a129eddc9888c17de5dfe773f4ab44.js.map