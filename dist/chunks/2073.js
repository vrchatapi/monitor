"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2073], {
        2073: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => T
            });
            var n = a(62475),
                r = a(96766),
                l = a(14411),
                c = a(98185),
                o = a(35187),
                i = a(83505),
                s = a(67978),
                w = a(67294),
                d = a(89250),
                m = a(2909),
                u = a(76553),
                p = a(6811),
                x = a(64258),
                f = a(27484),
                g = a.n(f),
                v = a(45697),
                b = a.n(v),
                h = a(32981),
                E = a(54546),
                y = a(97798);
            const C = function(e) {
                var t = e.deleteAction,
                    a = e.editAction,
                    n = e.productType,
                    r = e.viewAvatarDetailsAction,
                    c = (0, w.useState)(!1),
                    o = (0, E.Z)(c, 2),
                    i = o[0],
                    s = o[1],
                    d = (0, w.useState)(null),
                    m = (0, E.Z)(d, 2),
                    u = m[0],
                    p = m[1],
                    x = (0, w.useRef)(null);
                return (0, w.useEffect)((function() {
                    null != x && x.current && p(x.current.getBoundingClientRect())
                }), [x]), w.createElement("div", {
                    onMouseLeave: function() {
                        return s(!1)
                    }
                }, w.createElement(l.zx, {
                    ref: x,
                    className: "tw-h-9 tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        return s(!i)
                    }
                }, w.createElement(l.$1, {
                    icon: y.Uw,
                    size: "1x"
                })), w.createElement("div", {
                    style: {
                        transform: "translate(-".concat(120 - (null == u ? void 0 : u.width), "px, 0px)")
                    },
                    className: "tw-pt-2 tw-min-w-min tw-w-[120px] tw-min-h-min tw-z-50 tw-absolute ".concat(i ? "tw-flex" : "tw-hidden")
                }, w.createElement(l.JX, {
                    className: "tw-items-start tw-items-start tw-bg-button-bg-grey tw-border-2 tw-w-full tw-text-left tw-weight-[500]  tw-border-solid tw-border-[#666666] tw-rounded-lg"
                }, "avatar" !== n && w.createElement("button", {
                    type: "button",
                    className: "tw-text-left tw-px-3 tw-py-2 tw-w-full tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]",
                    onClick: a
                }, "Edit"), "avatar" === n && w.createElement("button", {
                    type: "button",
                    className: "tw-text-left tw-px-3 tw-py-2 tw-w-full tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]",
                    onClick: r
                }, "View Details"), w.createElement("hr", {
                    className: "tw-border-t-2 tw-m-0 tw-border-solid tw-w-full tw-border-white"
                }), w.createElement("button", {
                    type: "button",
                    className: "tw-px-3 tw-py-2 tw-text-red tw-text-left tw-border-none tw-w-full tw-bg-transparent hover:tw-bg-[#666666] hover:tw-text-white",
                    onClick: t
                }, "Delete"))))
            };
            var N = function(e) {
                var t = e.productData,
                    a = void 0 === t ? null : t,
                    n = e.editProductCallback,
                    r = void 0 === n ? function() {} : n,
                    c = e.deleteProductCallback,
                    o = void 0 === c ? function() {} : c,
                    i = e.viewAvatarDetailsActionCallback,
                    s = void 0 === i ? function() {} : i,
                    d = (0, h.I0)();
                if (null === a) return null;
                var f = a.id,
                    v = a.displayName,
                    b = a.created,
                    E = a.updated,
                    y = a.parentListings,
                    N = a.productType,
                    k = a.imageId;
                return w.createElement("div", {
                    className: "tw-relative"
                }, w.createElement("div", {
                    className: "tw-grid tw-gap-2 tw-items-center tw-grid-cols-3 @[540px]/my-products:tw-grid-cols-5 @[700px]/products-heading:tw-grid-cols-7 tw-mx-5 tw-border-hr-line-color tw-border-b-[1px] tw-border-t-0 tw-border-x-0 tw-border-solid"
                }, w.createElement(l.X2, {
                    className: "tw-flex tw-gap-1 tw-items-center tw-min-h-9 tw-my-2 @[800px]/my-products:tw-max-w-max tw-col-span-2"
                }, w.createElement(l.pw, {
                    fitToCover: !0,
                    imageId: k,
                    className: "tw-w-8 tw-h-8 tw-rounded-md tw-shrink-0",
                    containerColor: "#181B1F",
                    iconColor: "#404C58"
                }), w.createElement("p", {
                    className: "tw-truncate tw-mb-0 tw-overflow-hidden @[800px]/my-products:tw-whitespace-pre-line @[800px]/my-products:tw-break-words",
                    title: v
                }, v)), w.createElement("div", {
                    className: "tw-block tw-items-center tw-min-h-9 tw-py-2 tw-my-2 tw-truncate @[800px]/my-products:tw-max-w-max tw-capitalize tw-hidden @[540px]/my-products:tw-flex"
                }, N), w.createElement("div", {
                    className: "tw-items-center tw-min-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/my-products:tw-max-w-max tw-hidden @[700px]/my-products:tw-flex"
                }, g()(b).format("ll")), w.createElement("div", {
                    className: "tw-items-center tw-min-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/my-products:tw-max-w-max tw-hidden @[700px]/my-products:tw-flex"
                }, g()(E).format("ll")), w.createElement("div", {
                    className: "tw-flex tw-items-center tw-min-h-9 tw-my-2 tw-truncate @[800px]/my-products:tw-max-w-max @[700px]/products-heading:tw-col-span-1 tw-hidden @[540px]/my-products:tw-flex"
                }, w.createElement("span", {
                    className: "tw-truncate tw-hidden @[700px]/products-heading:tw-block"
                }, y && y.length > 0 ? "Available in ".concat(y.length, " listings") : "Unlisted"), w.createElement("span", {
                    className: "@[700px]/products-heading:tw-hidden tw-truncate"
                }, y && y.length > 0 ? "In ".concat(y.length, " listings") : "Unlisted")), w.createElement(l.X2, {
                    className: "tw-min-h-9 tw-truncate tw-my-2 tw-max-w-[100px] tw-w-fit tw-gap-2"
                }, w.createElement(l.zx, {
                    className: "tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        navigator.clipboard.writeText(f).then((function() {
                            d((0, x.d)({
                                title: "Copied product ID",
                                icon: p.f8,
                                message: "Product ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(e) {
                            var t, a;
                            d((0, x.d)({
                                title: "Failed to copy product ID",
                                icon: u.eH,
                                message: null !== (t = null === (a = res.error.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== t ? t : "Failed to copy product ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, w.createElement(l.$1, {
                    icon: m.kZ,
                    size: "1x"
                })), w.createElement(C, {
                    productType: N,
                    editAction: function() {
                        return r(a)
                    },
                    deleteAction: function() {
                        return o(a)
                    },
                    viewAvatarDetailsAction: function() {
                        return s(a)
                    }
                }))))
            };
            N.propTypes = {
                productData: b().object
            };
            const k = N;
            var A = a(40098),
                P = a(74205);
            const D = function(e) {
                var t = e.createProduct,
                    a = void 0 === t ? function() {} : t;
                return w.createElement(l.JX, {
                    className: " tw-@container/product-info tw-text-center tw-gap-9 tw-mt-12"
                }, w.createElement("div", null, w.createElement("h4", null, "Enhance and Monetize Your Worlds"), w.createElement("p", {
                    className: "tw-mb-0 tw-text-xl"
                }, "The possibilities are endless, here are some ideas:")), w.createElement(l.JX, {
                    className: "tw-flex-col @sm/product-info:tw-flex-row tw-justify-evenly tw-gap-12"
                }, w.createElement(l.JX, {
                    className: "tw-items-center"
                }, w.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, w.createElement(l.$1, {
                    icon: P.fk,
                    className: "tw-text-5xl",
                    role: "presentation",
                    alt: "",
                    color: "#9C9C9C"
                })), w.createElement("h4", {
                    className: "tw-text-lg"
                }, "Offer Custom Content"), w.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Transform your users' experiences with custom interactions and items, that bring your worlds to life.")), w.createElement(l.JX, {
                    className: "tw-items-center"
                }, w.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, w.createElement(l.$1, {
                    icon: P.rP,
                    className: "tw-text-5xl",
                    role: "presentation",
                    alt: "",
                    color: "#9C9C9C"
                })), w.createElement("h4", {
                    className: "tw-text-lg"
                }, "Grant Access to Exclusive Events"), w.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Offer passes that provide time-limited access to exclusive events or areas of your world.")), w.createElement(l.JX, {
                    className: "tw-items-center"
                }, w.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, w.createElement(l.$1, {
                    icon: P.F,
                    className: "tw-text-5xl",
                    role: "presentation",
                    alt: "",
                    color: "#9C9C9C"
                })), w.createElement("h4", {
                    className: "tw-text-lg"
                }, "Sell Unlockable Features and Upgrades"), w.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Introduce keys to unlock never-ending access to unique abilities and effects in your world."))), w.createElement(l.JX, {
                    className: "tw-items-center"
                }, w.createElement(l.zx, {
                    containerClasses: "tw-mb-3 tw-w-[200px]",
                    onClick: a
                }, w.createElement(l.$1, {
                    icon: A.r8
                }), " Create Product"), w.createElement("a", {
                    href: "https://creators.vrchat.com/economy/products/",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn more about products")))
            };
            var S = [{
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
                I = [];
            const T = function(e) {
                var t, a = e.sortBy,
                    m = e.currentUser,
                    u = e.currentPage,
                    p = (e.searchValue, e.orderBy),
                    x = e.editProductCallback,
                    f = void 0 === x ? function() {} : x,
                    g = e.deleteProductCallback,
                    v = void 0 === g ? function() {} : g,
                    b = e.viewAvatarDetailsCallback,
                    h = void 0 === b ? function() {} : b,
                    E = e.createProductCallback,
                    y = void 0 === E ? function() {} : E,
                    C = e.onSortByChange,
                    N = void 0 === C ? function() {} : C;
                if (!m) return null;
                var A, P, T = (0, d.s0)(),
                    z = (0, s.rP)({
                        userId: m.id,
                        n: 50,
                        pageValue: u
                    }, {
                        skip: !m.id,
                        refetchOnMountOrArgChange: !0
                    }),
                    X = z.data,
                    j = z.isSuccess,
                    F = z.isFetching,
                    U = z.isError,
                    J = z.error,
                    $ = (0, w.useCallback)((function(e) {
                        return a === e
                    }), [a]),
                    B = (0, w.useCallback)((function(e) {
                        if (I.includes(e)) return N(e)
                    }), [N]);
                return w.createElement(w.Fragment, null, 0 !== (null == X ? void 0 : X.length) || F || 1 !== u ? w.createElement(w.Fragment, null, w.createElement("div", {
                    className: "tw-@container/my-products tw-rounded-md tw-bg-grey tw-mt-5"
                }, w.createElement("div", {
                    className: "tw-w-full tw-min-w-max tw-table-auto tw-pb-1 tw-@container/products-heading"
                }, w.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-3 @[540px]/products-heading:tw-grid-cols-5 @[700px]/products-heading:tw-grid-cols-7 tw-border-b-[1px] tw-border-0 tw-border-solid tw-border-hr-line-color tw-py-3 tw-pb-3 tw-mx-5"
                }, S.map((function(e) {
                    var t = e.label,
                        a = e.value,
                        c = e.canCollapse,
                        o = void 0 !== c && c,
                        s = e.isSmallColumn,
                        d = void 0 !== s && s,
                        m = e.mobileCollapse,
                        u = void 0 !== m && m;
                    return w.createElement("span", {
                        key: a,
                        className: (0, i.cx)("tw-font-normal tw-text-base", {
                            "tw-text-light-white": $(a),
                            "tw-text-light-grey": !$(a),
                            "tw-hidden @[700px]/products-heading:tw-block": o,
                            "tw-hidden @[540px]/products-heading:tw-block": u,
                            "tw-max-w-[100px]": d,
                            "tw-max-w-auto": !d,
                            "tw-col-span-1": "displayName" !== a,
                            "tw-col-span-2": "displayName" === a,
                            "tw-cursor-pointer": I.includes(a),
                            "tw-cursor-auto": !I.includes(a)
                        }),
                        onClick: function() {
                            return B(a)
                        },
                        onKeyDown: function(e) {
                            if ("Enter" === e.key || "Space" === e.key) return B(a)
                        },
                        role: "button",
                        tabIndex: 0
                    }, t, I.includes(a) && w.createElement(l.$1, {
                        icon: $(a) && "ascending" === p ? r.fo : n.u9,
                        size: "1x",
                        className: "tw-ml-1 ".concat($(a) && "ascending" === p ? "tw-align-bottom" : "tw-align-top")
                    }))
                }))), w.createElement("div", {
                    className: "tw-group"
                }, F ? w.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, w.createElement(c.Z, {
                    loading: !0
                })) : U ? w.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, w.createElement("p", null, "Error loading sales data:"), w.createElement("code", null, null !== (A = null == J || null === (P = J.data) || void 0 === P || null === (P = P.error) || void 0 === P ? void 0 : P.message) && void 0 !== A ? A : "Unknown error")) : j && 0 === (null == X ? void 0 : X.length) ? w.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, w.createElement("p", {
                    className: "tw-mb-0"
                }, "There are no products to display.")) : j ? X.map((function(e) {
                    return w.createElement(k, {
                        key: e.id,
                        productData: e,
                        editProductCallback: f,
                        deleteProductCallback: v,
                        viewAvatarDetailsActionCallback: h
                    })
                })) : void 0), w.createElement("div", null, w.createElement(o.Z, {
                    className: "tw-pt-2",
                    totalCount: null !== (t = null == X ? void 0 : X.length) && void 0 !== t ? t : 0,
                    showCurrentPageOnly: !0,
                    currentPage: u,
                    pageSize: 50,
                    onPageChange: function(e) {
                        return T("/home/marketplace/storefront/products/page/".concat(e))
                    }
                }))))) : w.createElement(D, {
                    createProduct: y
                }))
            }
        }
    }
]);
//# sourceMappingURL=7b7949dc4ba456ec865aa5a5cdcd005250737273e55cee994ce87a4a28dd02fd.js.map