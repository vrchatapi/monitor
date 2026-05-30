"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3754], {
        73754(t, e, a) {
            a.r(e), a.d(e, {
                default: () => z
            });
            var n = a(18249),
                r = a(74408),
                l = a(15033),
                c = a(71853),
                o = a(31337),
                i = a(56822),
                s = a(6457),
                w = a(96540),
                d = a(47767),
                u = a(15902),
                m = a(67256),
                p = a(6913),
                v = a(34496),
                x = a(42217),
                f = a(65950),
                b = a(74353),
                g = a.n(b),
                h = a(5556),
                E = a.n(h),
                y = a(6376),
                N = a(65279),
                C = a(27860),
                k = a(31069);
            const A = function(t) {
                var e = t.deleteAction,
                    a = void 0 === e ? function() {} : e,
                    n = t.duplicateAction,
                    r = void 0 === n ? function() {} : n,
                    c = t.editAction,
                    o = t.productType,
                    i = t.viewAvatarDetailsAction,
                    s = t.assetDisabled,
                    d = (0, w.useState)(!1),
                    m = (0, u.A)(d, 2),
                    p = m[0],
                    v = m[1],
                    x = (0, w.useState)(null),
                    f = (0, u.A)(x, 2),
                    b = f[0],
                    g = f[1],
                    h = (0, w.useRef)(null);
                return (0, w.useEffect)(function() {
                    null != h && h.current && g(h.current.getBoundingClientRect())
                }, [h]), w.createElement("div", {
                    onMouseLeave: function() {
                        return v(!1)
                    }
                }, w.createElement(l.$n, {
                    ref: h,
                    className: "tw-h-9 tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        return v(!p)
                    }
                }, w.createElement(l.M2, {
                    icon: C.nx,
                    size: "1x"
                })), w.createElement("div", {
                    style: {
                        transform: "translate(-".concat(120 - (null == b ? void 0 : b.width), "px, 0px)")
                    },
                    className: "tw-pt-2 tw-min-w-min tw-w-[120px] tw-min-h-min tw-z-50 tw-absolute ".concat(p ? "tw-flex" : "tw-hidden")
                }, w.createElement(l.fv, {
                    className: "tw-items-start tw-items-start tw-bg-button-bg-grey tw-border-2 tw-w-full tw-text-left tw-weight-[500]  tw-border-solid tw-border-[#666666] tw-rounded-lg"
                }, "avatar" !== o && w.createElement("button", {
                    type: "button",
                    className: "tw-text-left tw-px-3 tw-py-2 tw-w-full tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]",
                    onClick: c
                }, "Edit"), "avatar" === o && w.createElement("button", {
                    type: "button",
                    className: "tw-text-left tw-px-3 tw-py-2 tw-w-full disabled:tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]",
                    onClick: i
                }, "View Details"), o === k.Wd.UDON && w.createElement("button", {
                    type: "button",
                    disabled: s,
                    onClick: r,
                    className: "tw-text-left tw-px-3 tw-py-2 tw-w-full disabled:tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]"
                }, "Duplicate"), w.createElement("hr", {
                    className: "tw-border-t-2 tw-m-0 tw-border-solid tw-w-full tw-border-white"
                }), w.createElement("button", {
                    type: "button",
                    className: "tw-px-3 tw-py-2 tw-text-red tw-text-left tw-border-none tw-w-full tw-bg-transparent hover:tw-bg-[#666666] hover:tw-text-white",
                    onClick: a
                }, "Delete"))))
            };
            var D = function(t) {
                var e = t.productData,
                    a = void 0 === e ? null : e,
                    n = t.editProductCallback,
                    r = void 0 === n ? function() {} : n,
                    c = t.deleteProductCallback,
                    o = void 0 === c ? function() {} : c,
                    i = t.duplicateProductCallback,
                    s = void 0 === i ? function() {} : i,
                    d = t.viewAvatarDetailsActionCallback,
                    b = void 0 === d ? function() {} : d,
                    h = (0, y.wA)();
                if (null === a) return null;
                var E = a.id,
                    C = a.displayName,
                    k = a.created,
                    D = a.updated,
                    P = a.parentListings,
                    T = a.productType,
                    S = a.imageId,
                    M = a.assetDisabled,
                    I = (0, w.useState)(!1),
                    j = (0, u.A)(I, 2),
                    z = j[0],
                    O = j[1],
                    U = (0, w.useRef)(null);
                return (0, w.useEffect)(function() {
                    var t = function(t) {
                        U.current && !U.current.contains(t.target) && O(!1)
                    };
                    return z ? document.addEventListener("mousedown", t) : document.removeEventListener("mousedown", t),
                        function() {
                            document.removeEventListener("mousedown", t)
                        }
                }, [z]), w.createElement("div", {
                    className: "tw-relative"
                }, w.createElement("div", {
                    className: "tw-grid tw-gap-2 tw-items-center tw-grid-cols-3 @[540px]/my-products:tw-grid-cols-5 @[700px]/products-heading:tw-grid-cols-7 tw-mx-5 tw-border-hr-line-color tw-border-b-[1px] tw-border-t-0 tw-border-x-0 tw-border-solid"
                }, w.createElement(l.fI, {
                    className: "tw-flex tw-gap-1 tw-items-center tw-min-h-9 tw-my-2 @[800px]/my-products:tw-max-w-max tw-col-span-2"
                }, w.createElement(l.Oo, {
                    fitToCover: !0,
                    imageId: S,
                    className: "tw-w-8 tw-h-8 tw-rounded-md tw-shrink-0",
                    containerColor: "#181B1F",
                    iconColor: "#404C58"
                }), w.createElement("p", {
                    className: "tw-truncate tw-mb-0 tw-overflow-hidden @[800px]/my-products:tw-whitespace-pre-line @[800px]/my-products:tw-break-words",
                    title: C
                }, C)), w.createElement("div", {
                    className: "tw-block tw-items-center tw-min-h-9 tw-py-2 tw-my-2 tw-truncate @[800px]/my-products:tw-max-w-max tw-capitalize tw-hidden @[540px]/my-products:tw-flex"
                }, T), w.createElement("div", {
                    className: "tw-items-center tw-min-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/my-products:tw-max-w-max tw-hidden @[700px]/my-products:tw-flex"
                }, g()(k).format("ll")), w.createElement("div", {
                    className: "tw-items-center tw-min-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/my-products:tw-max-w-max tw-hidden @[700px]/my-products:tw-flex"
                }, g()(D).format("ll")), !M && w.createElement("div", {
                    className: "tw-items-center tw-min-h-9 tw-my-2 tw-truncate @[800px]/my-products:tw-max-w-max @[700px]/products-heading:tw-col-span-1 tw-hidden @[540px]/my-products:tw-flex"
                }, w.createElement("span", {
                    className: "tw-truncate tw-hidden @[700px]/products-heading:tw-block"
                }, P && P.length > 0 ? "Available in ".concat(P.length, " listings") : "Unlisted"), w.createElement("span", {
                    className: "@[700px]/products-heading:tw-hidden tw-truncate"
                }, P && P.length > 0 ? "In ".concat(P.length, " listings") : "Unlisted")), M && w.createElement("div", {
                    className: "tw-items-center tw-h-9 tw-my-2 tw-truncate @[800px]/my-products:tw-max-w-max @[700px]/products-heading:tw-col-span-1 tw-hidden @[540px]/my-products:tw-flex"
                }, w.createElement("span", {
                    className: "tw-truncate"
                }, w.createElement(l.M2, {
                    className: "tw-text-orange",
                    icon: v.zp
                }), " ", w.createElement("span", {
                    className: "tw-text-orange"
                }, "Disabled"), " ", w.createElement("button", {
                    id: "disabledTooltip-".concat(E),
                    type: "button",
                    className: "tw-bg-transparent tw-border-none",
                    onClick: function() {
                        return O(!z)
                    },
                    "aria-label": "Disabled avatar tooltip",
                    ref: U
                }, w.createElement(l.M2, {
                    className: "tw-text-placeholder-text",
                    icon: p.iW
                })), w.createElement(N.A, {
                    isOpen: z,
                    target: "disabledTooltip-".concat(E),
                    toggle: function() {
                        return O(!z)
                    },
                    trigger: "click",
                    innerClassName: "tw-bg-black"
                }, "This product is currently unavailable due to an issue. Enter Edit mode to view more details and how to address the problem."))), w.createElement(l.fI, {
                    className: "tw-min-h-9 tw-truncate tw-my-2 tw-max-w-[100px] tw-w-fit tw-gap-2"
                }, w.createElement(l.$n, {
                    className: "tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        navigator.clipboard.writeText(E).then(function() {
                            h((0, f.X)({
                                title: "Copied product ID",
                                icon: x.SG,
                                message: "Product ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        }).catch(function(t) {
                            var e, a;
                            h((0, f.X)({
                                title: "Failed to copy product ID",
                                icon: v.zp,
                                message: null !== (e = null === (a = res.error.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== e ? e : "Failed to copy product ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        })
                    }
                }, w.createElement(l.M2, {
                    icon: m.jP,
                    size: "1x"
                })), w.createElement(A, {
                    productType: T,
                    editAction: function() {
                        return r(a)
                    },
                    deleteAction: function() {
                        return o(a)
                    },
                    duplicateAction: function() {
                        return s(a)
                    },
                    assetDisabled: M,
                    viewAvatarDetailsAction: function() {
                        return b(a)
                    }
                }))))
            };
            D.propTypes = {
                productData: E().object
            };
            const P = D;
            var T = a(28045),
                S = a(27070);
            const M = function(t) {
                var e = t.createProduct,
                    a = void 0 === e ? function() {} : e;
                return w.createElement(l.fv, {
                    className: " tw-@container/product-info tw-text-center tw-gap-9 tw-mt-12"
                }, w.createElement("div", null, w.createElement("h4", null, "Enhance and Monetize Your Worlds"), w.createElement("p", {
                    className: "tw-mb-0 tw-text-xl"
                }, "The possibilities are endless, here are some ideas:")), w.createElement(l.fv, {
                    className: "tw-flex-col @sm/product-info:tw-flex-row tw-justify-evenly tw-gap-12"
                }, w.createElement(l.fv, {
                    className: "tw-items-center"
                }, w.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, w.createElement(l.M2, {
                    icon: S.vrcGhost,
                    className: "tw-text-5xl",
                    role: "presentation",
                    alt: "",
                    color: "#9C9C9C"
                })), w.createElement("h4", {
                    className: "tw-text-lg"
                }, "Offer Custom Content"), w.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Transform your users' experiences with custom interactions and items, that bring your worlds to life.")), w.createElement(l.fv, {
                    className: "tw-items-center"
                }, w.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, w.createElement(l.M2, {
                    icon: S.vrcProductTicket,
                    className: "tw-text-5xl",
                    role: "presentation",
                    alt: "",
                    color: "#9C9C9C"
                })), w.createElement("h4", {
                    className: "tw-text-lg"
                }, "Grant Access to Exclusive Events"), w.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Offer passes that provide time-limited access to exclusive events or areas of your world.")), w.createElement(l.fv, {
                    className: "tw-items-center"
                }, w.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, w.createElement(l.M2, {
                    icon: S.vrcProductKey,
                    className: "tw-text-5xl",
                    role: "presentation",
                    alt: "",
                    color: "#9C9C9C"
                })), w.createElement("h4", {
                    className: "tw-text-lg"
                }, "Sell Unlockable Features and Upgrades"), w.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Introduce keys to unlock never-ending access to unique abilities and effects in your world."))), w.createElement(l.fv, {
                    className: "tw-items-center"
                }, w.createElement(l.$n, {
                    containerClasses: "tw-mb-3 tw-w-[200px]",
                    onClick: a
                }, w.createElement(l.M2, {
                    icon: T.QL
                }), " Create Product"), w.createElement("a", {
                    href: "https://creators.vrchat.com/economy/products/",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn more about products")))
            };
            var I = [{
                    label: "Name",
                    value: "displayName"
                }, {
                    label: "Type",
                    value: "productType",
                    mobileCollapse: !0
                }, {
                    label: "Created",
                    value: "created",
                    isSmallColumn: !0,
                    canCollapse: !0
                }, {
                    label: "Updated",
                    value: "updated",
                    isSmallColumn: !0,
                    canCollapse: !0
                }, {
                    label: "Status",
                    value: "productStatus",
                    isSmallColumn: !0,
                    mobileCollapse: !0
                }, {
                    label: "Actions",
                    value: ""
                }],
                j = [];
            const z = function(t) {
                var e, a = t.sortBy,
                    u = t.currentUser,
                    m = t.currentPage,
                    p = (t.searchValue, t.orderBy),
                    v = t.editProductCallback,
                    x = void 0 === v ? function() {} : v,
                    f = t.deleteProductCallback,
                    b = void 0 === f ? function() {} : f,
                    g = t.viewAvatarDetailsCallback,
                    h = void 0 === g ? function() {} : g,
                    E = t.createProductCallback,
                    y = void 0 === E ? function() {} : E,
                    N = t.duplicateProductCallback,
                    C = void 0 === N ? function() {} : N,
                    k = t.onSortByChange,
                    A = void 0 === k ? function() {} : k;
                if (!u) return null;
                var D, T, S = (0, d.Zp)(),
                    z = (0, s.Tf)({
                        userId: u.id,
                        n: 50,
                        pageValue: m
                    }, {
                        skip: !u.id,
                        refetchOnMountOrArgChange: !0
                    }),
                    O = z.data,
                    U = z.isSuccess,
                    F = z.isFetching,
                    L = z.isError,
                    B = z.error,
                    G = (0, w.useCallback)(function(t) {
                        return a === t
                    }, [a]);
                (0, w.useCallback)(function(t) {
                    if (j.includes(t)) return A(t)
                }, [A]);
                return w.createElement(w.Fragment, null, 0 !== (null == O ? void 0 : O.length) || F || 1 !== m ? w.createElement(w.Fragment, null, w.createElement("div", {
                    className: "tw-@container/my-products tw-rounded-md tw-bg-grey tw-mt-5"
                }, w.createElement("div", {
                    className: "tw-w-full tw-min-w-max tw-table-auto tw-pb-1 tw-@container/products-heading"
                }, w.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-3 @[540px]/products-heading:tw-grid-cols-5 @[700px]/products-heading:tw-grid-cols-7 tw-border-b-[1px] tw-border-0 tw-border-solid tw-border-hr-line-color tw-py-3 tw-pb-3 tw-mx-5"
                }, I.map(function(t) {
                    var e = t.label,
                        a = t.value,
                        c = t.canCollapse,
                        o = void 0 !== c && c,
                        s = t.isSmallColumn,
                        d = void 0 !== s && s,
                        u = t.mobileCollapse,
                        m = void 0 !== u && u;
                    return w.createElement("span", {
                        key: a,
                        className: (0, i.cx)("tw-font-normal tw-text-base", {
                            "tw-text-light-white": G(a),
                            "tw-text-light-grey": !G(a),
                            "tw-hidden @[700px]/products-heading:tw-block": o,
                            "tw-hidden @[540px]/products-heading:tw-block": m,
                            "tw-max-w-[100px]": d,
                            "tw-max-w-auto": !d,
                            "tw-col-span-1": "displayName" !== a,
                            "tw-col-span-2": "displayName" === a,
                            "tw-cursor-pointer": j.includes(a),
                            "tw-cursor-auto": !j.includes(a)
                        })
                    }, e, j.includes(a) && w.createElement(l.M2, {
                        icon: G(a) && "ascending" === p ? r.Dv : n.Yn,
                        size: "1x",
                        className: "tw-ml-1 ".concat(G(a) && "ascending" === p ? "tw-align-bottom" : "tw-align-top")
                    }))
                })), w.createElement("div", {
                    className: "tw-group"
                }, F ? w.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, w.createElement(c.A, {
                    loading: !0
                })) : L ? w.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, w.createElement("p", null, "Error loading sales data:"), w.createElement("code", null, null !== (D = null == B || null === (T = B.data) || void 0 === T || null === (T = T.error) || void 0 === T ? void 0 : T.message) && void 0 !== D ? D : "Unknown error")) : U && 0 === (null == O ? void 0 : O.length) ? w.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, w.createElement("p", {
                    className: "tw-mb-0"
                }, "There are no products to display.")) : U ? O.map(function(t) {
                    return w.createElement(P, {
                        key: t.id,
                        productData: t,
                        editProductCallback: x,
                        deleteProductCallback: b,
                        duplicateProductCallback: C,
                        viewAvatarDetailsActionCallback: h
                    })
                }) : void 0), w.createElement("div", null, w.createElement(o.A, {
                    className: "tw-pt-2",
                    totalCount: null !== (e = null == O ? void 0 : O.length) && void 0 !== e ? e : 0,
                    showCurrentPageOnly: !0,
                    currentPage: m,
                    pageSize: 50,
                    onPageChange: function(t) {
                        return S("/home/marketplace/storefront/products/page/".concat(t))
                    }
                }))))) : w.createElement(M, {
                    createProduct: y
                }))
            }
        }
    }
]);
//# sourceMappingURL=38304f35306e94d54e6badb1f1e8b7ffa722d1a46653acb6828a5e3b8bdb6019.js.map