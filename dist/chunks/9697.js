"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9697], {
        6737(t, e) {
            var n = "table-list",
                i = ["th-list"],
                l = "f00b",
                a = "M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 0l0 64 64 0 0-64L64 96zm384 0L192 96l0 64 256 0 0-64zM64 224l0 64 64 0 0-64-64 0zm384 0l-256 0 0 64 256 0 0-64zM64 352l0 64 64 0 0-64-64 0zm384 0l-256 0 0 64 256 0 0-64z";
            e.mw = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, i, l, a]
            }, e.Qt = e.mw
        },
        72078(t, e, n) {
            n.r(e), n.d(e, {
                default: () => Q
            });
            n(10467);
            var i = n(64467),
                l = n(82544),
                a = n(28045),
                r = n(61145),
                s = n(42217),
                c = (n(54756), n(65950)),
                o = n(71661),
                w = n(71853),
                u = n(31337),
                d = n(31069),
                m = n(91863),
                g = n(13951),
                p = n(72784),
                f = n(70650),
                b = n(96540),
                v = n(6376),
                h = n(47767),
                y = n(84976),
                E = n(6737);
            const x = function(t) {
                var e = t.createListing,
                    n = void 0 === e ? function() {} : e;
                return b.createElement(o.fv, {
                    className: " tw-@container/listings-cold tw-text-center tw-gap-5 tw-my-20 tw-justify-center tw-items-center"
                }, b.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center"
                }, b.createElement(o.M2, {
                    icon: E.Qt,
                    className: "tw-text-5xl",
                    role: "presentation",
                    alt: "",
                    color: "#9C9C9C"
                })), b.createElement("h4", {
                    className: "tw-text-lg"
                }, "Start creating listings to sell your products"), b.createElement(o.fv, {
                    className: "tw-items-center"
                }, b.createElement(o.$n, {
                    containerClasses: "tw-mb-3 tw-w-[200px]",
                    onClick: n
                }, b.createElement(o.M2, {
                    icon: a.QL
                }), " Create Listing")))
            };
            var C = n(67256),
                N = n(34496),
                k = n(78502),
                D = n(74353),
                P = n.n(D),
                A = n(5556),
                j = n.n(A),
                L = n(27860);
            const O = function(t) {
                var e = t.active,
                    n = void 0 !== e && e,
                    i = t.editAction,
                    a = void 0 === i ? function() {} : i,
                    r = t.deleteAction,
                    s = void 0 === r ? function() {} : r,
                    c = t.publishAction,
                    w = void 0 === c ? function() {} : c,
                    u = t.isPublishDisabled,
                    d = void 0 !== u && u,
                    m = (0, b.useState)(!1),
                    g = (0, l.A)(m, 2),
                    p = g[0],
                    f = g[1],
                    v = (0, b.useState)(null),
                    h = (0, l.A)(v, 2),
                    y = h[0],
                    E = h[1],
                    x = (0, b.useRef)(null);
                return (0, b.useEffect)(function() {
                    null != x && x.current && E(x.current.getBoundingClientRect())
                }, [x]), b.createElement("div", {
                    onMouseLeave: function() {
                        return f(!1)
                    }
                }, b.createElement(o.$n, {
                    ref: x,
                    className: "tw-h-9 tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        return f(!p)
                    }
                }, b.createElement(o.M2, {
                    icon: L.nx,
                    size: "1x"
                })), b.createElement(o.fv, {
                    style: {
                        transform: "translate(-".concat(120 - (null == y ? void 0 : y.width), "px, 0px)")
                    },
                    className: "tw-pt-2 tw-min-w-min tw-w-[120px] tw-min-h-min tw-z-50 tw-absolute ".concat(p ? "tw-flex" : "tw-hidden")
                }, b.createElement(o.fv, {
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
            var S = function(t) {
                var e = t.listingData,
                    n = void 0 === e ? null : e,
                    i = t.editListingCallback,
                    l = void 0 === i ? function() {} : i,
                    a = t.deleteListingCallback,
                    r = void 0 === a ? function() {} : a,
                    w = t.publishListingCallback,
                    u = void 0 === w ? function() {} : w,
                    d = (0, v.wA)();
                if (null === n) return null;
                var m = n.id,
                    g = n.displayName,
                    p = n.created,
                    f = n.active,
                    h = n.priceTokens,
                    y = n.listingType,
                    E = n.imageId,
                    x = n.storeIds,
                    D = n.products,
                    A = (0, k.GZ)(D),
                    j = A.hasAllProductsDisabled,
                    L = A.hasSomeProductsDisabled;
                A.hasNoProductsDisabled;
                return b.createElement("div", {
                    className: "tw-relative"
                }, b.createElement("div", {
                    className: "tw-grid tw-gap-2 tw-grid-cols-3 tw-bg-[#252A30] tw-rounded-lg @[470px]/my-listings:tw-grid-cols-5 @[700px]/my-listings:tw-grid-cols-7 tw-p-3 tw-min-h-[72px]"
                }, b.createElement(o.fI, {
                    className: "tw-flex tw-gap-2 tw-items-center tw-col-span-2"
                }, b.createElement(o.Oo, {
                    fitToCover: !0,
                    imageId: E,
                    className: "tw-w-12 tw-h-12 tw-rounded-md tw-shrink-0",
                    containerColor: "#181B1F",
                    iconColor: "#404C58"
                }), b.createElement(o.fv, {
                    className: "tw-justify-center tw-overflow-hidden"
                }, b.createElement("h6", {
                    title: g,
                    className: "tw-m-0 tw-font-bold tw-truncate @[800px]/my-listings:tw-whitespace-pre-line @[800px]/my-listings:tw-break-words"
                }, g), b.createElement("p", {
                    className: "tw-capitalize tw-m-0 tw-text-light-grey"
                }, "duration" === y ? "Temporary" : y || ""))), b.createElement(o.fv, {
                    className: "tw-justify-center tw-items-center tw-truncate tw-hidden @[700px]/my-listings:tw-flex"
                }, b.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Date Added"), P()(p).format("ll")), b.createElement(o.fv, {
                    className: "tw-justify-center tw-items-center tw-truncate  tw-hidden @[700px]/my-listings:tw-flex"
                }, b.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Price"), b.createElement("p", {
                    className: "tw-mb-0"
                }, b.createElement(o.eD, null), " ", h)), b.createElement(o.fv, {
                    className: "tw-justify-center tw-items-center tw-truncate tw-capitalize tw-hidden @[470px]/my-listings:tw-flex"
                }, b.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Availability"), b.createElement("p", {
                    className: "tw-mb-0"
                }, x.length || 0, " ", 1 === (null == x ? void 0 : x.length) ? "Store" : "Stores")), b.createElement(o.fv, {
                    className: "tw-justify-center tw-items-center tw-truncate tw-hidden @[470px]/my-listings:tw-flex"
                }, b.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Status"), f ? "Published" : "Draft"), b.createElement(o.fI, {
                    className: "tw-truncate tw-items-center tw-gap-2 tw-justify-end"
                }, b.createElement(o.$n, {
                    className: "tw-w-9 tw-h-9",
                    neutral: !0,
                    onClick: function() {
                        navigator.clipboard.writeText(m).then(function() {
                            d((0, c.X)({
                                title: "Copied listing ID",
                                icon: s.SG,
                                message: "Listing ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        }).catch(function(t) {
                            var e, n;
                            d((0, c.X)({
                                title: "Failed to copy listing ID",
                                icon: N.zp,
                                message: null !== (e = null === (n = res.error.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== e ? e : "Failed to copy listing ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        })
                    }
                }, b.createElement(o.M2, {
                    icon: C.jP,
                    size: "1x"
                })), b.createElement(O, {
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
                    isPublishDisabled: j || L
                }))))
            };
            S.propTypes = {
                listingData: j().object
            };
            const T = S;

            function z(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, i)
                }
                return n
            }

            function I(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? z(Object(n), !0).forEach(function(e) {
                        (0, i.A)(t, e, n[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }
            var M = (0, b.lazy)(function() {
                    return Promise.all([n.e(78), n.e(9387)]).then(n.bind(n, 11768))
                }),
                F = (0, b.lazy)(function() {
                    return Promise.all([n.e(78), n.e(7495)]).then(n.bind(n, 97495))
                }),
                B = (0, b.lazy)(function() {
                    return n.e(2789).then(n.bind(n, 85170))
                }),
                G = (0, b.lazy)(function() {
                    return n.e(7900).then(n.bind(n, 67900))
                });
            const Q = function() {
                var t, e, n = (0, v.wA)(),
                    i = (0, h.Zp)(),
                    s = (0, y.ok)(),
                    c = (0, l.A)(s, 2),
                    E = c[0],
                    C = (c[1], (0, h.g)().paginationPage),
                    N = C ? Number(C) : 1,
                    k = 50 * (N - 1),
                    D = (0, b.useState)(""),
                    P = (0, l.A)(D, 2),
                    A = P[0],
                    j = P[1],
                    L = (0, b.useState)(E.get("sortBy") || null),
                    O = (0, l.A)(L, 2),
                    S = O[0],
                    z = (O[1], (0, b.useState)(E.get("orderBy") || "descending")),
                    Q = (0, l.A)(z, 2),
                    $ = Q[0],
                    R = (Q[1], b.useState({})),
                    V = (0, l.A)(R, 2),
                    W = V[0],
                    X = V[1],
                    Z = b.useState(!1),
                    _ = (0, l.A)(Z, 2),
                    H = _[0],
                    K = _[1],
                    U = (0, m.A)(A),
                    q = (0, g.p$)().data,
                    J = (0, v.d4)(function(t) {
                        return t.listingFlow
                    }),
                    Y = J.currentTitle,
                    tt = J.isPreviewOpen,
                    et = J.isTitleHidden,
                    nt = (0, b.useMemo)(function() {
                        return {
                            userId: q.id,
                            n: 50,
                            offset: k,
                            pageValue: N
                        }
                    }, [E, U, $, S, N]),
                    it = (0, p.Kf)(I(I({}, nt), {}, {
                        hydrate: !0,
                        listingType: "otp"
                    }), {
                        skip: !q.id,
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
                            m = t.isPublishing,
                            g = void 0 !== m && m,
                            p = t.productType,
                            b = void 0 === p ? d.Wd.LISTING : p,
                            v = t.listingType,
                            h = void 0 === v ? "" : v;
                        K(!0), i && n((0, f.D6)(i)), X({
                            title: i,
                            data: a,
                            isCreating: s,
                            isEditing: o,
                            isDeleting: u,
                            isPublishing: g,
                            productType: b,
                            listingType: h
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
                    dt = function(t) {
                        ot({
                            title: "Publish Listing",
                            data: t,
                            isPublishing: !0
                        })
                    },
                    mt = function() {
                        ot({
                            title: "Create Listing (1/3)",
                            isCreating: !0,
                            productType: d.Wd.LISTING
                        })
                    },
                    gt = function() {
                        K(!H), X({}), n((0, f.GS)())
                    };
                return b.createElement(b.Fragment, null, b.createElement(o.Qc, null, "My Listings"), 0 !== (null == lt ? void 0 : lt.length) || rt || 1 !== N ? b.createElement(b.Fragment, null, b.createElement(o.fI, {
                    className: "tw-justify-between tw-gap-x-5 tw-gap-y-3 tw-flex-wrap tw-mt-6"
                }, b.createElement("div", null, b.createElement(o.pd, {
                    icon: r.Mj,
                    type: "text",
                    rawInputClassName: "tw-h-9",
                    className: "tw-w-full tw-max-w-[515px] tw-hidden",
                    value: A,
                    onChange: function(t) {
                        return j(t.target.value)
                    },
                    placeholder: "Search by name or listing ID"
                })), b.createElement(o.$n, {
                    "aria-label": "Create Listing",
                    className: "tw-px-2",
                    onClick: mt
                }, b.createElement(o.M2, {
                    icon: a.QL,
                    size: "1x"
                }), " Create Listing")), b.createElement("div", {
                    className: "tw-@container/my-listings tw-rounded-md tw-mt-5"
                }, b.createElement(o.fv, {
                    className: "tw-group tw-gap-3 tw-bg-[#181B1F]"
                }, rt ? b.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, b.createElement(w.A, {
                    loading: !0
                })) : st ? b.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, b.createElement("p", null, "Error loading sales data:"), b.createElement("code", null, null !== (e = ct.data.error.message) && void 0 !== e ? e : "Unknown error")) : at && 0 === (null == lt ? void 0 : lt.length) ? b.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, b.createElement("p", {
                    className: "tw-mb-0"
                }, "There are no transactions data to display.")) : at ? lt.map(function(t) {
                    return b.createElement(T, {
                        key: t.id,
                        listingData: t,
                        editListingCallback: wt,
                        deleteListingCallback: ut,
                        publishListingCallback: dt
                    })
                }) : void 0), b.createElement(u.A, {
                    className: "tw-pt-2",
                    totalCount: null !== (t = null == lt ? void 0 : lt.length) && void 0 !== t ? t : 0,
                    showCurrentPageOnly: !0,
                    currentPage: N,
                    pageSize: 50,
                    onPageChange: function(t) {
                        return i("/home/marketplace/storefront/listings/page/".concat(t))
                    }
                }))) : b.createElement(x, {
                    createListing: mt
                }), b.createElement(o.aF, {
                    title: Y || W.title,
                    onClose: gt,
                    isVisible: H,
                    width: "100%",
                    slim: !tt,
                    centered: !1,
                    overflow: "auto",
                    noClose: tt,
                    hideTitle: et,
                    disableBackdropClick: !0,
                    className: "".concat(tt ? "tw-bg-[#0A0A0D]" : "tw-bg-black")
                }, b.createElement(b.Suspense, {
                    fallback: b.createElement(w.A, {
                        loading: !0
                    })
                }, H && W.isCreating && b.createElement(M, {
                    onClose: gt
                }), H && W.isEditing && W.data && b.createElement(F, {
                    onClose: gt,
                    onDelete: ut,
                    listingId: W.data.id
                }), H && W.isDeleting && b.createElement(B, {
                    onCancelCallback: gt,
                    listing: W.data
                }), H && W.isPublishing && b.createElement(G, {
                    onClose: gt,
                    listing: W.data
                }))))
            }
        }
    }
]);
//# sourceMappingURL=549e8ce074ef5b1f3baaeefeb4d997515215b406bf1f17ec089a10bdf25f50a8.js.map