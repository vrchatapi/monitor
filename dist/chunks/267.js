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
                default: () => J
            });
            n(15861);
            var i = n(4942),
                l = n(54546),
                a = n(40098),
                r = n(95337),
                s = n(6811),
                c = (n(64687), n(64258)),
                o = n(14411),
                w = n(98185),
                u = n(35187),
                m = n(95896),
                d = n(76176),
                g = n(22202),
                p = n(16869),
                f = n(39270),
                b = n(67294),
                h = n(32981),
                v = n(89250),
                y = n(79655),
                E = n(2126);
            const x = function(t) {
                var e = t.createListing,
                    n = void 0 === e ? function() {} : e;
                return b.createElement(o.JX, {
                    className: " tw-@container/listings-cold tw-text-center tw-gap-5 tw-my-20 tw-justify-center tw-items-center"
                }, b.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center"
                }, b.createElement(o.$1, {
                    icon: E.u7,
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
            var C = n(2909),
                N = n(76553),
                k = n(27484),
                D = n.n(k),
                P = n(45697),
                j = n.n(P),
                L = n(97798);
            const T = function(t) {
                var e = t.active,
                    n = void 0 !== e && e,
                    i = t.editAction,
                    a = void 0 === i ? function() {} : i,
                    r = t.deleteAction,
                    s = void 0 === r ? function() {} : r,
                    c = t.publishAction,
                    w = void 0 === c ? function() {} : c,
                    u = (0, b.useState)(!1),
                    m = (0, l.Z)(u, 2),
                    d = m[0],
                    g = m[1],
                    p = (0, b.useState)(null),
                    f = (0, l.Z)(p, 2),
                    h = f[0],
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
                    icon: L.Uw,
                    size: "1x"
                })), b.createElement(o.JX, {
                    style: {
                        transform: "translate(-".concat(120 - (null == h ? void 0 : h.width), "px, 0px)")
                    },
                    className: "tw-pt-2 tw-min-w-min tw-w-[120px] tw-min-h-min tw-z-50 tw-absolute ".concat(d ? "tw-flex" : "tw-hidden")
                }, b.createElement(o.JX, {
                    className: "tw-items-start tw-items-start tw-bg-button-bg-grey tw-border-2 tw-w-full tw-text-left tw-weight-[500]  tw-border-solid tw-border-[#666666] tw-rounded-lg"
                }, b.createElement("button", {
                    type: "button",
                    onClick: a,
                    className: "tw-text-left tw-px-3 tw-py-2 tw-w-full tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]"
                }, "Edit"), b.createElement("button", {
                    type: "button",
                    onClick: w,
                    className: "tw-text-left tw-px-3 tw-py-2 tw-w-full tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]"
                }, n ? "Move to Draft" : "Publish"), b.createElement("hr", {
                    className: "tw-border-t-2 tw-m-0 tw-border-solid tw-w-full tw-border-white"
                }), b.createElement("button", {
                    type: "button",
                    onClick: s,
                    className: "tw-px-3 tw-py-2 tw-text-red tw-text-left tw-border-none tw-w-full tw-bg-transparent hover:tw-bg-[#666666] hover:tw-text-white"
                }, "Delete"))))
            };
            var z = function(t) {
                var e = t.listingData,
                    n = void 0 === e ? null : e,
                    i = t.editListingCallback,
                    l = void 0 === i ? function() {} : i,
                    a = t.deleteListingCallback,
                    r = void 0 === a ? function() {} : a,
                    w = t.publishListingCallback,
                    u = void 0 === w ? function() {} : w,
                    m = (0, h.I0)();
                if (null === n) return null;
                var d = n.id,
                    g = n.displayName,
                    p = n.created,
                    f = n.active,
                    v = n.priceTokens,
                    y = n.listingType,
                    E = n.imageId,
                    x = n.storeIds;
                return b.createElement("div", {
                    className: "tw-relative"
                }, b.createElement("div", {
                    className: "tw-grid tw-gap-2 tw-grid-cols-3 tw-bg-[#252A30] tw-rounded-lg @[470px]/my-listings:tw-grid-cols-5 @[700px]/my-listings:tw-grid-cols-7 tw-p-3 tw-min-h-[72px]"
                }, b.createElement(o.X2, {
                    className: "tw-flex tw-gap-2 tw-items-center tw-col-span-2"
                }, b.createElement(o.pw, {
                    fitToCover: !0,
                    imageId: E,
                    className: "tw-w-12 tw-h-12 tw-rounded-md tw-shrink-0",
                    containerColor: "#181B1F",
                    iconColor: "#404C58"
                }), b.createElement(o.JX, {
                    className: "tw-justify-center tw-overflow-hidden"
                }, b.createElement("h6", {
                    title: g,
                    className: "tw-m-0 tw-font-bold tw-truncate @[800px]/my-listings:tw-whitespace-pre-line @[800px]/my-listings:tw-break-words"
                }, g), b.createElement("p", {
                    className: "tw-capitalize tw-m-0 tw-text-light-grey"
                }, "duration" === y ? "Temporary" : y || ""))), b.createElement(o.JX, {
                    className: "tw-items-center tw-justify-center tw-items-center tw-truncate tw-hidden @[700px]/my-listings:tw-flex"
                }, b.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Date Added"), D()(p).format("ll")), b.createElement(o.JX, {
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
                                icon: N.eH,
                                message: null !== (e = null === (n = res.error.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== e ? e : "Failed to copy listing ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, b.createElement(o.$1, {
                    icon: C.kZ,
                    size: "1x"
                })), b.createElement(T, {
                    active: null == n ? void 0 : n.active,
                    editAction: function() {
                        return l(n)
                    },
                    deleteAction: function() {
                        return r(n)
                    },
                    publishAction: function() {
                        return u(n)
                    }
                }))))
            };
            z.propTypes = {
                listingData: j().object
            };
            const O = z;

            function I(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function S(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? I(Object(n), !0).forEach((function(e) {
                        (0, i.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var Z = (0, b.lazy)((function() {
                    return Promise.all([n.e(4980), n.e(682)]).then(n.bind(n, 20682))
                })),
                X = (0, b.lazy)((function() {
                    return Promise.all([n.e(4980), n.e(2012)]).then(n.bind(n, 33642))
                })),
                A = (0, b.lazy)((function() {
                    return n.e(4372).then(n.bind(n, 14363))
                })),
                F = (0, b.lazy)((function() {
                    return n.e(3929).then(n.bind(n, 63929))
                }));
            const J = function() {
                var t, e, n = (0, h.I0)(),
                    i = (0, v.s0)(),
                    s = (0, y.lr)(),
                    c = (0, l.Z)(s, 2),
                    E = c[0],
                    C = (c[1], (0, v.UO)().paginationPage),
                    N = C ? Number(C) : 1,
                    k = 50 * (N - 1),
                    D = (0, b.useState)(""),
                    P = (0, l.Z)(D, 2),
                    j = P[0],
                    L = P[1],
                    T = (0, b.useState)(E.get("sortBy") || null),
                    z = (0, l.Z)(T, 2),
                    I = z[0],
                    J = (z[1], (0, b.useState)(E.get("orderBy") || "descending")),
                    B = (0, l.Z)(J, 2),
                    M = B[0],
                    $ = (B[1], b.useState({})),
                    U = (0, l.Z)($, 2),
                    _ = U[0],
                    G = U[1],
                    H = b.useState(!1),
                    R = (0, l.Z)(H, 2),
                    V = R[0],
                    q = R[1],
                    K = (0, d.Z)(j),
                    Q = (0, g.IB)().data,
                    W = (0, h.v9)((function(t) {
                        return t.listingFlow
                    })),
                    Y = W.currentTitle,
                    tt = W.isPreviewOpen,
                    et = W.isTitleHidden,
                    nt = (0, b.useMemo)((function() {
                        return {
                            userId: Q.id,
                            n: 50,
                            offset: k,
                            pageValue: N
                        }
                    }), [E, K, M, I, N]),
                    it = (0, p.Ul)(S(S({}, nt), {}, {
                        listingType: "otp"
                    }), {
                        skip: !Q.id,
                        refetchOnMountOrArgChange: !0
                    }),
                    lt = it.data,
                    at = it.isSuccess,
                    rt = it.isFetching,
                    st = it.isError,
                    ct = it.error,
                    ot = function(t) {
                        var e = t.title,
                            i = void 0 === e ? "" : e,
                            l = t.data,
                            a = void 0 === l ? void 0 : l,
                            r = t.isCreating,
                            s = void 0 !== r && r,
                            c = t.isEditing,
                            o = void 0 !== c && c,
                            w = t.isDeleting,
                            u = void 0 !== w && w,
                            d = t.isPublishing,
                            g = void 0 !== d && d,
                            p = t.productType,
                            b = void 0 === p ? m.Pm.LISTING : p,
                            h = t.listingType,
                            v = void 0 === h ? "" : h;
                        q(!0), i && n((0, f.Td)(i)), G({
                            title: i,
                            data: a,
                            isCreating: s,
                            isEditing: o,
                            isDeleting: u,
                            isPublishing: g,
                            productType: b,
                            listingType: v
                        })
                    },
                    wt = function(t) {
                        ot({
                            title: "Edit Listing",
                            data: t,
                            isEditing: !0,
                            listingType: t.listingType
                        })
                    },
                    ut = function(t) {
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
                        ot({
                            title: "Create Listing (1/3)",
                            isCreating: !0,
                            productType: m.Pm.LISTING
                        })
                    },
                    gt = function() {
                        q(!V), G({}), n((0, f.rk)())
                    };
                return b.createElement(b.Fragment, null, b.createElement(o.$4, null, "My Listings"), 0 !== (null == lt ? void 0 : lt.length) || rt || 1 !== N ? b.createElement(b.Fragment, null, b.createElement(o.X2, {
                    className: "tw-justify-between tw-gap-x-5 tw-gap-y-3 tw-flex-wrap tw-mt-6"
                }, b.createElement("div", null, b.createElement(o.II, {
                    icon: r.wn,
                    type: "text",
                    rawInputClassName: "tw-h-9",
                    className: "tw-w-full tw-max-w-[515px] tw-hidden",
                    value: j,
                    onChange: function(t) {
                        return L(t.target.value)
                    },
                    placeholder: "Search by name or listing ID"
                })), b.createElement(o.zx, {
                    "aria-label": "Create Listing",
                    className: "tw-px-2",
                    onClick: dt
                }, b.createElement(o.$1, {
                    icon: a.r8,
                    size: "1x"
                }), " Create Listing")), b.createElement("div", {
                    className: "tw-@container/my-listings tw-rounded-md tw-mt-5"
                }, b.createElement(o.JX, {
                    className: "tw-group tw-gap-3 tw-bg-[#181B1F]"
                }, rt ? b.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, b.createElement(w.Z, {
                    loading: !0
                })) : st ? b.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, b.createElement("p", null, "Error loading sales data:"), b.createElement("code", null, null !== (e = ct.data.error.message) && void 0 !== e ? e : "Unknown error")) : at && 0 === (null == lt ? void 0 : lt.length) ? b.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, b.createElement("p", {
                    className: "tw-mb-0"
                }, "There are no transactions data to display.")) : at ? lt.map((function(t) {
                    return b.createElement(O, {
                        key: t.id,
                        listingData: t,
                        editListingCallback: wt,
                        deleteListingCallback: ut,
                        publishListingCallback: mt
                    })
                })) : void 0), b.createElement(u.Z, {
                    className: "tw-pt-2",
                    totalCount: null !== (t = null == lt ? void 0 : lt.length) && void 0 !== t ? t : 0,
                    showCurrentPageOnly: !0,
                    currentPage: N,
                    pageSize: 50,
                    onPageChange: function(t) {
                        return i("/home/marketplace/storefront/listings/page/".concat(t))
                    }
                }))) : b.createElement(x, {
                    createListing: dt
                }), b.createElement(o.u_, {
                    title: Y || _.title,
                    onClose: gt,
                    isVisible: V,
                    width: "100%",
                    slim: !tt,
                    centered: !1,
                    overflow: "auto",
                    noClose: tt,
                    hideTitle: et,
                    disableBackdropClick: !0,
                    backgroundColor: tt ? "#0A0A0D" : "#181B1F"
                }, b.createElement(b.Suspense, {
                    fallback: b.createElement(w.Z, {
                        loading: !0
                    })
                }, V && _.isCreating && b.createElement(Z, {
                    onClose: gt
                }), V && _.isEditing && _.data && b.createElement(X, {
                    onClose: gt,
                    onDelete: ut,
                    listingId: _.data.id
                }), V && _.isDeleting && b.createElement(A, {
                    onCancelCallback: gt,
                    listing: _.data
                }), V && _.isPublishing && b.createElement(F, {
                    onClose: gt,
                    listing: _.data
                }))))
            }
        }
    }
]);
//# sourceMappingURL=810a2c3f0ad5d1b5081cfe31f6ae4cd6a58b5fbc19f4cfce22f6ab6068f2a504.js.map