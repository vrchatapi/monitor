"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [267], {
        2126: (e, t) => {
            var n = "table-list",
                i = ["th-list"],
                l = "f00b",
                a = "M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 0l0 64 64 0 0-64L64 96zm384 0L192 96l0 64 256 0 0-64zM64 224l0 64 64 0 0-64-64 0zm384 0l-256 0 0 64 256 0 0-64zM64 352l0 64 64 0 0-64-64 0zm384 0l-256 0 0 64 256 0 0-64z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, i, l, a]
            }, t.u7 = t.DF
        },
        20267: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => M
            });
            n(15861);
            var i = n(4942),
                l = n(54546),
                a = n(40098),
                r = n(95337),
                s = n(6811),
                c = (n(64687), n(64258)),
                o = n(46382),
                w = n(98185),
                u = n(35187),
                d = n(95896),
                m = n(76176),
                g = n(22202),
                p = n(16869),
                f = n(39270),
                b = n(67294),
                h = n(32981),
                v = n(89250),
                y = n(79655),
                E = n(2126);
            const x = function(e) {
                var t = e.createListing,
                    n = void 0 === t ? function() {} : t;
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
                k = n(17383),
                D = n(27484),
                P = n.n(D),
                j = n(45697),
                L = n.n(j),
                T = n(97798);
            const z = function(e) {
                var t = e.active,
                    n = void 0 !== t && t,
                    i = e.editAction,
                    a = void 0 === i ? function() {} : i,
                    r = e.deleteAction,
                    s = void 0 === r ? function() {} : r,
                    c = e.publishAction,
                    w = void 0 === c ? function() {} : c,
                    u = e.isPublishDisabled,
                    d = void 0 !== u && u,
                    m = (0, b.useState)(!1),
                    g = (0, l.Z)(m, 2),
                    p = g[0],
                    f = g[1],
                    h = (0, b.useState)(null),
                    v = (0, l.Z)(h, 2),
                    y = v[0],
                    E = v[1],
                    x = (0, b.useRef)(null);
                return (0, b.useEffect)((function() {
                    null != x && x.current && E(x.current.getBoundingClientRect())
                }), [x]), b.createElement("div", {
                    onMouseLeave: function() {
                        return f(!1)
                    }
                }, b.createElement(o.zx, {
                    ref: x,
                    className: "tw-h-9 tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        return f(!p)
                    }
                }, b.createElement(o.$1, {
                    icon: T.Uw,
                    size: "1x"
                })), b.createElement(o.JX, {
                    style: {
                        transform: "translate(-".concat(120 - (null == y ? void 0 : y.width), "px, 0px)")
                    },
                    className: "tw-pt-2 tw-min-w-min tw-w-[120px] tw-min-h-min tw-z-50 tw-absolute ".concat(p ? "tw-flex" : "tw-hidden")
                }, b.createElement(o.JX, {
                    className: "tw-items-start tw-items-start tw-bg-button-bg-grey tw-border-2 tw-w-full tw-text-left tw-weight-[500]  tw-border-solid tw-border-[#666666] tw-rounded-lg"
                }, b.createElement("button", {
                    type: "button",
                    onClick: a,
                    className: "tw-text-left tw-px-3 tw-py-2 tw-w-full tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]"
                }, "Edit"), b.createElement("button", {
                    type: "button",
                    disabled: d,
                    onClick: w,
                    className: "disabled:tw-text-placeholder-text tw-text-left tw-px-3 tw-py-2 tw-w-full tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]"
                }, n ? "Move to Draft" : "Publish"), b.createElement("hr", {
                    className: "tw-border-t-2 tw-m-0 tw-border-solid tw-w-full tw-border-white"
                }), b.createElement("button", {
                    type: "button",
                    onClick: s,
                    className: "tw-px-3 tw-py-2 tw-text-red tw-text-left tw-border-none tw-w-full tw-bg-transparent hover:tw-bg-[#666666] hover:tw-text-white"
                }, "Delete"))))
            };
            var O = function(e) {
                var t = e.listingData,
                    n = void 0 === t ? null : t,
                    i = e.editListingCallback,
                    l = void 0 === i ? function() {} : i,
                    a = e.deleteListingCallback,
                    r = void 0 === a ? function() {} : a,
                    w = e.publishListingCallback,
                    u = void 0 === w ? function() {} : w,
                    d = (0, h.I0)();
                if (null === n) return null;
                var m = n.id,
                    g = n.displayName,
                    p = n.created,
                    f = n.active,
                    v = n.priceTokens,
                    y = n.listingType,
                    E = n.imageId,
                    x = n.storeIds,
                    D = n.products,
                    j = (0, k.AA)(D),
                    L = j.hasAllProductsDisabled,
                    T = j.hasSomeProductsDisabled;
                j.hasNoProductsDisabled;
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
                    className: "tw-justify-center tw-items-center tw-truncate tw-hidden @[700px]/my-listings:tw-flex"
                }, b.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Date Added"), P()(p).format("ll")), b.createElement(o.JX, {
                    className: "tw-justify-center tw-items-center tw-truncate  tw-hidden @[700px]/my-listings:tw-flex"
                }, b.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Price"), b.createElement("p", {
                    className: "tw-mb-0"
                }, b.createElement(o.b5, null), " ", v)), b.createElement(o.JX, {
                    className: "tw-justify-center tw-items-center tw-truncate tw-capitalize tw-hidden @[470px]/my-listings:tw-flex"
                }, b.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Availability"), b.createElement("p", {
                    className: "tw-mb-0"
                }, x.length || 0, " ", 1 === (null == x ? void 0 : x.length) ? "Store" : "Stores")), b.createElement(o.JX, {
                    className: "tw-justify-center tw-items-center tw-truncate tw-hidden @[470px]/my-listings:tw-flex"
                }, b.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Status"), f ? "Published" : "Draft"), b.createElement(o.X2, {
                    className: "tw-truncate tw-items-center tw-gap-2 tw-justify-end"
                }, b.createElement(o.zx, {
                    className: "tw-w-9 tw-h-9",
                    neutral: !0,
                    onClick: function() {
                        navigator.clipboard.writeText(m).then((function() {
                            d((0, c.d)({
                                title: "Copied listing ID",
                                icon: s.f8,
                                message: "Listing ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(e) {
                            var t, n;
                            d((0, c.d)({
                                title: "Failed to copy listing ID",
                                icon: N.eH,
                                message: null !== (t = null === (n = res.error.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Failed to copy listing ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, b.createElement(o.$1, {
                    icon: C.kZ,
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
                        return u(n)
                    },
                    isPublishDisabled: L || T
                }))))
            };
            O.propTypes = {
                listingData: L().object
            };
            const I = O;

            function S(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Z = (0, b.lazy)((function() {
                    return Promise.all([n.e(6154), n.e(8679)]).then(n.bind(n, 20682))
                })),
                X = (0, b.lazy)((function() {
                    return Promise.all([n.e(6154), n.e(2012)]).then(n.bind(n, 33642))
                })),
                F = (0, b.lazy)((function() {
                    return n.e(4372).then(n.bind(n, 14363))
                })),
                J = (0, b.lazy)((function() {
                    return n.e(3929).then(n.bind(n, 63929))
                }));
            const M = function() {
                var e, t, n = (0, h.I0)(),
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
                    O = z[0],
                    S = (z[1], (0, b.useState)(E.get("orderBy") || "descending")),
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
                    K = (0, m.Z)(j),
                    Q = (0, g.IB)().data,
                    W = (0, h.v9)((function(e) {
                        return e.listingFlow
                    })),
                    Y = W.currentTitle,
                    ee = W.isPreviewOpen,
                    te = W.isTitleHidden,
                    ne = (0, b.useMemo)((function() {
                        return {
                            userId: Q.id,
                            n: 50,
                            offset: k,
                            pageValue: N
                        }
                    }), [E, K, B, O, N]),
                    ie = (0, p.Ul)(A(A({}, ne), {}, {
                        hydrate: !0,
                        listingType: "otp"
                    }), {
                        skip: !Q.id,
                        refetchOnMountOrArgChange: !0
                    }),
                    le = ie.data,
                    ae = ie.isSuccess,
                    re = ie.isFetching,
                    se = ie.isError,
                    ce = ie.error,
                    oe = function(e) {
                        var t = e.title,
                            i = void 0 === t ? "" : t,
                            l = e.data,
                            a = void 0 === l ? void 0 : l,
                            r = e.isCreating,
                            s = void 0 !== r && r,
                            c = e.isEditing,
                            o = void 0 !== c && c,
                            w = e.isDeleting,
                            u = void 0 !== w && w,
                            m = e.isPublishing,
                            g = void 0 !== m && m,
                            p = e.productType,
                            b = void 0 === p ? d.Pm.LISTING : p,
                            h = e.listingType,
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
                    we = function(e) {
                        oe({
                            title: "Edit Listing",
                            data: e,
                            isEditing: !0,
                            listingType: e.listingType
                        })
                    },
                    ue = function(e) {
                        oe({
                            title: "Delete Listing",
                            data: e,
                            isDeleting: !0,
                            listingType: e.listingType
                        })
                    },
                    de = function(e) {
                        oe({
                            title: "Publish Listing",
                            data: e,
                            isPublishing: !0
                        })
                    },
                    me = function() {
                        oe({
                            title: "Create Listing (1/3)",
                            isCreating: !0,
                            productType: d.Pm.LISTING
                        })
                    },
                    ge = function() {
                        q(!V), G({}), n((0, f.rk)())
                    };
                return b.createElement(b.Fragment, null, b.createElement(o.$4, null, "My Listings"), 0 !== (null == le ? void 0 : le.length) || re || 1 !== N ? b.createElement(b.Fragment, null, b.createElement(o.X2, {
                    className: "tw-justify-between tw-gap-x-5 tw-gap-y-3 tw-flex-wrap tw-mt-6"
                }, b.createElement("div", null, b.createElement(o.II, {
                    icon: r.wn,
                    type: "text",
                    rawInputClassName: "tw-h-9",
                    className: "tw-w-full tw-max-w-[515px] tw-hidden",
                    value: j,
                    onChange: function(e) {
                        return L(e.target.value)
                    },
                    placeholder: "Search by name or listing ID"
                })), b.createElement(o.zx, {
                    "aria-label": "Create Listing",
                    className: "tw-px-2",
                    onClick: me
                }, b.createElement(o.$1, {
                    icon: a.r8,
                    size: "1x"
                }), " Create Listing")), b.createElement("div", {
                    className: "tw-@container/my-listings tw-rounded-md tw-mt-5"
                }, b.createElement(o.JX, {
                    className: "tw-group tw-gap-3 tw-bg-[#181B1F]"
                }, re ? b.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, b.createElement(w.Z, {
                    loading: !0
                })) : se ? b.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, b.createElement("p", null, "Error loading sales data:"), b.createElement("code", null, null !== (t = ce.data.error.message) && void 0 !== t ? t : "Unknown error")) : ae && 0 === (null == le ? void 0 : le.length) ? b.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, b.createElement("p", {
                    className: "tw-mb-0"
                }, "There are no transactions data to display.")) : ae ? le.map((function(e) {
                    return b.createElement(I, {
                        key: e.id,
                        listingData: e,
                        editListingCallback: we,
                        deleteListingCallback: ue,
                        publishListingCallback: de
                    })
                })) : void 0), b.createElement(u.Z, {
                    className: "tw-pt-2",
                    totalCount: null !== (e = null == le ? void 0 : le.length) && void 0 !== e ? e : 0,
                    showCurrentPageOnly: !0,
                    currentPage: N,
                    pageSize: 50,
                    onPageChange: function(e) {
                        return i("/home/marketplace/storefront/listings/page/".concat(e))
                    }
                }))) : b.createElement(x, {
                    createListing: me
                }), b.createElement(o.u_, {
                    title: Y || _.title,
                    onClose: ge,
                    isVisible: V,
                    width: "100%",
                    slim: !ee,
                    centered: !1,
                    overflow: "auto",
                    noClose: ee,
                    hideTitle: te,
                    disableBackdropClick: !0,
                    className: "".concat(ee ? "tw-bg-[#0A0A0D]" : "tw-bg-black")
                }, b.createElement(b.Suspense, {
                    fallback: b.createElement(w.Z, {
                        loading: !0
                    })
                }, V && _.isCreating && b.createElement(Z, {
                    onClose: ge
                }), V && _.isEditing && _.data && b.createElement(X, {
                    onClose: ge,
                    onDelete: ue,
                    listingId: _.data.id
                }), V && _.isDeleting && b.createElement(F, {
                    onCancelCallback: ge,
                    listing: _.data
                }), V && _.isPublishing && b.createElement(J, {
                    onClose: ge,
                    listing: _.data
                }))))
            }
        }
    }
]);
//# sourceMappingURL=a67e3c5475fb75e3a97067e1d9e673e9cf5cd37bd00f3c83e279c1d32e4c5e9c.js.map