"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [267], {
        2126: (t, e) => {
            var n = "table-list",
                i = ["th-list"],
                l = "f00b",
                a = "M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 0l0 64 64 0 0-64L64 96zm384 0L192 96l0 64 256 0 0-64zM64 224l0 64 64 0 0-64-64 0zm384 0l-256 0 0 64 256 0 0-64zM64 352l0 64 64 0 0-64-64 0zm384 0l-256 0 0 64 256 0 0-64z";
            e.DF = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, i, l, a]
            }, e.u7 = e.DF
        },
        20267: (t, e, n) => {
            n.r(e), n.d(e, {
                default: () => M
            });
            n(15861);
            var i = n(4942),
                l = n(54546),
                a = n(40098),
                r = n(95337),
                s = n(6811),
                c = (n(64687), n(64258)),
                o = n(14411),
                u = n(98185),
                w = n(35187),
                m = n(95896),
                d = n(76176),
                g = n(22202),
                p = n(16869),
                f = n(36753),
                b = n(67294),
                E = n(32981),
                v = n(89250),
                y = n(79655),
                h = n(44062),
                x = n(2126);
            const C = function(t) {
                var e = t.createListing,
                    n = void 0 === e ? function() {} : e;
                return b.createElement(o.JX, {
                    className: " tw-@container/listings-cold tw-text-center tw-gap-5 tw-my-20 tw-justify-center tw-items-center"
                }, b.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center"
                }, b.createElement(o.$1, {
                    icon: x.u7,
                    className: "tw-text-5xl",
                    role: "presentation",
                    alt: "",
                    color: "#9C9C9C"
                })), b.createElement("h4", {
                    className: "tw-text-lg"
                }, "Start creating listings to sell your products"), b.createElement(o.JX, {
                    className: "tw-items-center"
                }, b.createElement(o.zx, {
                    containerClasses: "tw-mb-3 tw-w-[200px]",
                    onClick: n
                }, b.createElement(o.$1, {
                    icon: a.r8
                }), " Create Listing")))
            };
            var N = n(2909),
                k = n(76553),
                T = n(27484),
                j = n.n(T),
                D = n(45697),
                L = n.n(D),
                P = n(97798);
            const z = function(t) {
                var e = t.active,
                    n = void 0 !== e && e,
                    i = t.editAction,
                    a = void 0 === i ? function() {} : i,
                    r = t.deleteAction,
                    s = void 0 === r ? function() {} : r,
                    c = t.publishAction,
                    u = void 0 === c ? function() {} : c,
                    w = (0, b.useState)(!1),
                    m = (0, l.Z)(w, 2),
                    d = m[0],
                    g = m[1],
                    p = (0, b.useState)(null),
                    f = (0, l.Z)(p, 2),
                    E = f[0],
                    v = f[1],
                    y = (0, b.useRef)(null);
                return (0, b.useEffect)((function() {
                    null != y && y.current && v(y.current.getBoundingClientRect())
                }), [y]), b.createElement("div", {
                    onMouseLeave: function() {
                        return g(!1)
                    }
                }, b.createElement(o.zx, {
                    ref: y,
                    className: "tw-h-9 tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        return g(!d)
                    }
                }, b.createElement(o.$1, {
                    icon: P.Uw,
                    size: "1x"
                })), b.createElement(o.JX, {
                    style: {
                        transform: "translate(-".concat(120 - (null == E ? void 0 : E.width), "px, 0px)")
                    },
                    className: "tw-pt-2 tw-min-w-min tw-w-[120px] tw-min-h-min tw-z-50 tw-absolute ".concat(d ? "tw-flex" : "tw-hidden")
                }, b.createElement(o.JX, {
                    className: "tw-items-start tw-bg-button-bg tw-border-2 tw-w-full tw-weight-[500] tw-border-solid tw-border-button-border tw-rounded-lg tw-p-3"
                }, b.createElement("button", {
                    type: "button",
                    onClick: a,
                    className: "tw-p-0 tw-w-full tw-text-left hover:tw-text-white tw-text-option-inactive tw-border-none tw-bg-transparent"
                }, "Edit"), b.createElement("button", {
                    type: "button",
                    onClick: u,
                    className: "tw-p-0 tw-w-full tw-text-left hover:tw-text-white tw-text-option-inactive tw-border-none tw-bg-transparent"
                }, n ? "Move to Draft" : "Publish"), b.createElement("hr", {
                    className: "tw-border-t-2 tw-border-solid tw-w-full tw-border-white tw-my-2"
                }), b.createElement("button", {
                    type: "button",
                    onClick: s,
                    className: "tw-p-0 tw-w-full tw-text-left hover:tw-text-white tw-text-red tw-border-none tw-bg-transparent"
                }, "Delete"))))
            };
            var I = function(t) {
                var e = t.listingData,
                    n = void 0 === e ? null : e,
                    i = t.editListingCallback,
                    l = void 0 === i ? function() {} : i,
                    a = t.deleteListingCallback,
                    r = void 0 === a ? function() {} : a,
                    u = t.publishListingCallback,
                    w = void 0 === u ? function() {} : u,
                    m = (0, E.I0)();
                if (null === n) return null;
                var d = n.id,
                    g = n.displayName,
                    p = n.created,
                    f = n.active,
                    v = n.priceTokens,
                    y = n.listingType,
                    h = n.imageId,
                    x = n.storeIds;
                return b.createElement("div", {
                    className: "tw-relative"
                }, b.createElement("div", {
                    className: "tw-grid tw-gap-2 tw-grid-cols-3 tw-bg-[#252A30] tw-rounded-lg @[470px]/my-listings:tw-grid-cols-5 @[700px]/my-listings:tw-grid-cols-7 tw-p-3 tw-h-[72px]"
                }, b.createElement(o.X2, {
                    className: "tw-flex tw-gap-2 tw-items-center tw-truncate  tw-col-span-2"
                }, b.createElement(o.pw, {
                    fitToCover: !0,
                    imageId: h,
                    className: "tw-w-12 tw-h-12 tw-rounded-md tw-shrink-0"
                }), b.createElement(o.JX, {
                    className: "tw-justify-center"
                }, b.createElement("h6", {
                    className: "tw-m-0 tw-font-bold"
                }, g), b.createElement("p", {
                    className: "tw-capitalize tw-m-0 tw-text-light-grey"
                }, "duration" === y ? "Temporary" : y || ""))), b.createElement(o.JX, {
                    className: "tw-items-center tw-justify-center tw-items-center tw-truncate tw-hidden @[700px]/my-listings:tw-flex"
                }, b.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Date Added"), j()(p).format("ll")), b.createElement(o.JX, {
                    className: "tw-items-center tw-justify-center tw-items-center tw-truncate  tw-hidden @[700px]/my-listings:tw-flex"
                }, b.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Price"), b.createElement("p", {
                    className: "tw-mb-0"
                }, b.createElement(o.b5, null), " ", v)), b.createElement(o.JX, {
                    className: "tw-items-center tw-justify-center tw-items-center tw-truncate tw-capitalize tw-hidden @[470px]/my-listings:tw-flex"
                }, b.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Availability"), b.createElement("p", {
                    className: "tw-mb-0"
                }, x.length || 0, " ", 1 === (null == x ? void 0 : x.length) ? "Store" : "Stores")), b.createElement(o.JX, {
                    className: "tw-flex tw-justify-center tw-items-center tw-truncate tw-hidden @[470px]/my-listings:tw-flex"
                }, b.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Status"), f ? "Published" : "Draft"), b.createElement(o.X2, {
                    className: "tw-truncate tw-items-center tw-gap-2 tw-justify-end"
                }, b.createElement(o.zx, {
                    className: "tw-w-9 tw-h-9",
                    neutral: !0,
                    onClick: function() {
                        navigator.clipboard.writeText(d).then((function() {
                            m((0, c.d)({
                                title: "Copied listing ID",
                                icon: s.f8,
                                message: "Listing ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(t) {
                            var e, n;
                            m((0, c.d)({
                                title: "Failed to copy listing ID",
                                icon: k.eH,
                                message: null !== (e = null === (n = res.error.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== e ? e : "Failed to copy listing ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, b.createElement(o.$1, {
                    icon: N.kZ,
                    size: "1x"
                })), b.createElement(z, {
                    active: null == n ? void 0 : n.active,
                    editAction: function() {
                        return l(n)
                    },
                    deleteAction: function() {
                        return r(n)
                    },
                    publishAction: function() {
                        return w(n)
                    }
                }))))
            };
            I.propTypes = {
                listingData: L().object
            };
            const O = I;

            function S(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function Z(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? S(Object(n), !0).forEach((function(e) {
                        (0, i.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var X = (0, b.lazy)((function() {
                    return Promise.all([n.e(8303), n.e(6150)]).then(n.bind(n, 59795))
                })),
                A = (0, b.lazy)((function() {
                    return Promise.all([n.e(8303), n.e(2012)]).then(n.bind(n, 33642))
                })),
                J = (0, b.lazy)((function() {
                    return n.e(4372).then(n.bind(n, 14363))
                })),
                F = (0, b.lazy)((function() {
                    return n.e(3929).then(n.bind(n, 63929))
                }));
            const M = function() {
                var t, e = (0, E.I0)(),
                    n = (0, v.s0)(),
                    i = (0, y.lr)(),
                    s = (0, l.Z)(i, 2),
                    c = s[0],
                    x = (s[1], (0, v.UO)().paginationPage),
                    N = x ? Number(x) : 1,
                    k = 50 * (N - 1),
                    T = (0, b.useState)(""),
                    j = (0, l.Z)(T, 2),
                    D = j[0],
                    L = j[1],
                    P = (0, b.useState)(c.get("sortBy") || null),
                    z = (0, l.Z)(P, 2),
                    I = z[0],
                    S = (z[1], (0, b.useState)(c.get("orderBy") || "descending")),
                    M = (0, l.Z)(S, 2),
                    B = M[0],
                    $ = (M[1], b.useState({})),
                    U = (0, l.Z)($, 2),
                    _ = U[0],
                    G = U[1],
                    H = b.useState(!1),
                    R = (0, l.Z)(H, 2),
                    V = R[0],
                    q = R[1],
                    K = (0, d.Z)(D),
                    Q = (0, g.IB)().data,
                    W = (0, E.v9)((function(t) {
                        return t.listingCreation
                    })),
                    Y = (W.previousStep, W.currentStep),
                    tt = W.isTitleHidden,
                    et = (0, b.useMemo)((function() {
                        return {
                            userId: Q.id,
                            n: 50,
                            offset: k,
                            pageValue: N
                        }
                    }), [c, K, B, I, N]),
                    nt = (0, p.Ul)(Z(Z({}, et), {}, {
                        listingType: "otp"
                    }), {
                        skip: !Q.id,
                        refetchOnMountOrArgChange: !0
                    }),
                    it = nt.data,
                    lt = nt.isSuccess,
                    at = nt.isFetching,
                    rt = nt.isError,
                    st = nt.error;
                (0, b.useEffect)((function() {
                    _.isCreating && G((function(t) {
                        return Z(Z({}, t), {}, {
                            title: Y
                        })
                    })), tt && G((function(t) {
                        return Z(Z({}, t), {}, {
                            title: null
                        })
                    }))
                }), [Y]);
                var ct, ot = function(t) {
                        var e = t.title,
                            n = void 0 === e ? "" : e,
                            i = t.data,
                            l = void 0 === i ? void 0 : i,
                            a = t.isCreating,
                            r = void 0 !== a && a,
                            s = t.isEditing,
                            c = void 0 !== s && s,
                            o = t.isDeleting,
                            u = void 0 !== o && o,
                            w = t.isPublishing,
                            d = void 0 !== w && w,
                            g = t.productType,
                            p = void 0 === g ? m.Pm.LISTING : g,
                            f = t.listingType,
                            b = void 0 === f ? "" : f;
                        q(!0), G({
                            title: n,
                            data: l,
                            isCreating: r,
                            isEditing: c,
                            isDeleting: u,
                            isPublishing: d,
                            productType: p,
                            listingType: b
                        })
                    },
                    ut = function(t) {
                        ot({
                            title: "Edit Listing",
                            data: t,
                            isEditing: !0,
                            listingType: t.listingType
                        })
                    },
                    wt = function(t) {
                        ot({
                            title: "Delete Listing",
                            data: t,
                            isDeleting: !0,
                            listingType: t.listingType
                        })
                    },
                    mt = function(t) {
                        ot({
                            title: "Publish Listing",
                            data: t,
                            isPublishing: !0
                        })
                    },
                    dt = function() {
                        q(!V), G({}), e((0, f.IT)(null)), e((0, f.Bq)("Create Listing (1/3)"))
                    };
                return b.createElement(b.Fragment, null, b.createElement(o.$4, null, "My Listings"), 0 !== (null == it ? void 0 : it.length) || at || 1 !== N ? b.createElement(b.Fragment, null, b.createElement(o.X2, {
                    className: "tw-justify-between tw-gap-x-5 tw-gap-y-3 tw-flex-wrap tw-mt-6"
                }, b.createElement("div", null, b.createElement(o.II, {
                    icon: r.wn,
                    type: "text",
                    rawInputClassName: "tw-h-9",
                    className: "tw-w-full tw-max-w-[515px] tw-hidden",
                    value: D,
                    onChange: function(t) {
                        return L(t.target.value)
                    },
                    placeholder: "Search by name or listing ID"
                })), b.createElement(o.zx, {
                    "aria-label": "Create Listing",
                    className: "tw-px-2",
                    onClick: function() {
                        return ot({
                            title: Y,
                            isCreating: !0,
                            data: void 0,
                            productType: m.Pm.LISTING
                        })
                    }
                }, b.createElement(o.$1, {
                    icon: a.r8,
                    size: "1x"
                }), " Create Listing")), b.createElement("div", {
                    className: "tw-@container/my-listings tw-rounded-md tw-bg-grey tw-mt-5"
                }, b.createElement(o.JX, {
                    className: "tw-group tw-gap-3 tw-bg-[#181B1F]"
                }, at ? b.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, b.createElement(u.Z, {
                    loading: !0
                })) : rt ? b.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, b.createElement("p", null, "Error loading sales data:"), b.createElement("code", null, null !== (ct = st.data.error.message) && void 0 !== ct ? ct : "Unknown error")) : lt && 0 === (null == it ? void 0 : it.length) ? b.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, b.createElement("p", {
                    className: "tw-mb-0"
                }, "There are no transactions data to display.")) : lt ? it.map((function(t) {
                    return b.createElement(O, {
                        key: t.id,
                        listingData: t,
                        editListingCallback: ut,
                        deleteListingCallback: wt,
                        publishListingCallback: mt
                    })
                })) : void 0), b.createElement("div", null, b.createElement(w.Z, {
                    totalCount: null !== (t = null == it ? void 0 : it.length) && void 0 !== t ? t : 0,
                    showCurrentPageOnly: !0,
                    currentPage: N,
                    pageSize: 50,
                    onPageChange: function(t) {
                        return n("/home/marketplace/storefront/listings/page/".concat(t))
                    }
                })))) : b.createElement(C, {
                    createListing: function() {
                        return ot({
                            title: Y,
                            isCreating: !0,
                            data: void 0,
                            isEditing: !1,
                            productType: "listing"
                        })
                    }
                }), b.createElement(o.u_, {
                    title: _.title,
                    onClose: dt,
                    isVisible: V,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: "auto",
                    disableBackdropClick: !0
                }, b.createElement(b.Suspense, {
                    fallback: b.createElement(u.Z, {
                        loading: !0
                    })
                }, V && !_.data && "subscription" !== _.listingType && _.isCreating && b.createElement(X, {
                    onClose: dt
                }), V && _.isEditing && _.data && "subscription" !== _.listingType && b.createElement(A, {
                    onClose: dt,
                    onDelete: wt,
                    listing: _.data
                }), V && _.isEditing && _.data && "subscription" === _.listingType && b.createElement(h.default, {
                    onClose: dt,
                    listingId: _.data.id
                }), V && _.isDeleting && b.createElement(J, {
                    onCancelCallback: dt,
                    listing: _.data
                }), V && _.isPublishing && b.createElement(F, {
                    onClose: dt,
                    listing: _.data
                }))))
            }
        }
    }
]);
//# sourceMappingURL=f16d05819211fedce2ff04443ba3db2ad5ec51d4e414cd7d8d0bb04af05edc7a.js.map