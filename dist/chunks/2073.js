"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2073], {
        2073: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => X
            });
            var n = a(62475),
                r = a(96766),
                l = a(14411),
                c = a(98185),
                o = a(35187),
                s = a(83505),
                i = a(67978),
                w = a(67294),
                d = a(89250),
                m = a(54546),
                u = a(2909),
                p = a(82414),
                x = a(76553),
                f = a(6811),
                g = a(64258),
                b = a(27484),
                v = a.n(b),
                h = a(45697),
                E = a.n(h),
                y = a(32981),
                N = a(65061),
                C = a(97798);
            const k = function(e) {
                var t = e.deleteAction,
                    a = e.editAction,
                    n = e.productType,
                    r = e.viewAvatarDetailsAction,
                    c = (0, w.useState)(!1),
                    o = (0, m.Z)(c, 2),
                    s = o[0],
                    i = o[1],
                    d = (0, w.useState)(null),
                    u = (0, m.Z)(d, 2),
                    p = u[0],
                    x = u[1],
                    f = (0, w.useRef)(null);
                return (0, w.useEffect)((function() {
                    null != f && f.current && x(f.current.getBoundingClientRect())
                }), [f]), w.createElement("div", {
                    onMouseLeave: function() {
                        return i(!1)
                    }
                }, w.createElement(l.zx, {
                    ref: f,
                    className: "tw-h-9 tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        return i(!s)
                    }
                }, w.createElement(l.$1, {
                    icon: C.Uw,
                    size: "1x"
                })), w.createElement("div", {
                    style: {
                        transform: "translate(-".concat(120 - (null == p ? void 0 : p.width), "px, 0px)")
                    },
                    className: "tw-pt-2 tw-min-w-min tw-w-[120px] tw-min-h-min tw-z-50 tw-absolute ".concat(s ? "tw-flex" : "tw-hidden")
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
            var D = function(e) {
                var t = e.productData,
                    a = void 0 === t ? null : t,
                    n = e.editProductCallback,
                    r = void 0 === n ? function() {} : n,
                    c = e.deleteProductCallback,
                    o = void 0 === c ? function() {} : c,
                    s = e.viewAvatarDetailsActionCallback,
                    i = void 0 === s ? function() {} : s,
                    d = (0, y.I0)();
                if (null === a) return null;
                var b = a.id,
                    h = a.displayName,
                    E = a.created,
                    C = a.updated,
                    D = a.parentListings,
                    A = a.productType,
                    P = a.imageId,
                    S = a.assetDisabled,
                    T = (0, w.useState)(!1),
                    I = (0, m.Z)(T, 2),
                    z = I[0],
                    X = I[1],
                    $ = (0, w.useRef)(null);
                return (0, w.useEffect)((function() {
                    var e = function(e) {
                        $.current && !$.current.contains(e.target) && X(!1)
                    };
                    return z ? document.addEventListener("mousedown", e) : document.removeEventListener("mousedown", e),
                        function() {
                            document.removeEventListener("mousedown", e)
                        }
                }), [z]), w.createElement("div", {
                    className: "tw-relative"
                }, w.createElement("div", {
                    className: "tw-grid tw-gap-2 tw-items-center tw-grid-cols-3 @[540px]/my-products:tw-grid-cols-5 @[700px]/products-heading:tw-grid-cols-7 tw-mx-5 tw-border-hr-line-color tw-border-b-[1px] tw-border-t-0 tw-border-x-0 tw-border-solid"
                }, w.createElement(l.X2, {
                    className: "tw-flex tw-gap-1 tw-items-center tw-min-h-9 tw-my-2 @[800px]/my-products:tw-max-w-max tw-col-span-2"
                }, w.createElement(l.pw, {
                    fitToCover: !0,
                    imageId: P,
                    className: "tw-w-8 tw-h-8 tw-rounded-md tw-shrink-0",
                    containerColor: "#181B1F",
                    iconColor: "#404C58"
                }), w.createElement("p", {
                    className: "tw-truncate tw-mb-0 tw-overflow-hidden @[800px]/my-products:tw-whitespace-pre-line @[800px]/my-products:tw-break-words",
                    title: h
                }, h)), w.createElement("div", {
                    className: "tw-block tw-items-center tw-min-h-9 tw-py-2 tw-my-2 tw-truncate @[800px]/my-products:tw-max-w-max tw-capitalize tw-hidden @[540px]/my-products:tw-flex"
                }, A), w.createElement("div", {
                    className: "tw-items-center tw-min-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/my-products:tw-max-w-max tw-hidden @[700px]/my-products:tw-flex"
                }, v()(E).format("ll")), w.createElement("div", {
                    className: "tw-items-center tw-min-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/my-products:tw-max-w-max tw-hidden @[700px]/my-products:tw-flex"
                }, v()(C).format("ll")), !S && w.createElement("div", {
                    className: "tw-items-center tw-min-h-9 tw-my-2 tw-truncate @[800px]/my-products:tw-max-w-max @[700px]/products-heading:tw-col-span-1 tw-hidden @[540px]/my-products:tw-flex"
                }, w.createElement("span", {
                    className: "tw-truncate tw-hidden @[700px]/products-heading:tw-block"
                }, D && D.length > 0 ? "Available in ".concat(D.length, " listings") : "Unlisted"), w.createElement("span", {
                    className: "@[700px]/products-heading:tw-hidden tw-truncate"
                }, D && D.length > 0 ? "In ".concat(D.length, " listings") : "Unlisted")), S && w.createElement("div", {
                    className: "tw-items-center tw-h-9 tw-my-2 tw-truncate @[800px]/my-products:tw-max-w-max @[700px]/products-heading:tw-col-span-1 tw-hidden @[540px]/my-products:tw-flex"
                }, w.createElement("span", {
                    className: "tw-truncate"
                }, w.createElement(l.$1, {
                    className: "tw-text-orange",
                    icon: x.eH
                }), " ", w.createElement("span", {
                    className: "tw-text-orange"
                }, "Disabled"), " ", w.createElement("button", {
                    id: "disabledTooltip-".concat(b),
                    type: "button",
                    className: "tw-bg-transparent tw-border-none",
                    onClick: function() {
                        return X(!z)
                    },
                    "aria-label": "Disabled avatar tooltip",
                    ref: $
                }, w.createElement(l.$1, {
                    className: "tw-text-placeholder-text",
                    icon: p.sq
                })), w.createElement(N.Z, {
                    isOpen: z,
                    target: "disabledTooltip-".concat(b),
                    toggle: function() {
                        return X(!z)
                    },
                    trigger: "click",
                    innerClassName: "tw-bg-black"
                }, "This product is currently unavailable due to an issue. Enter Edit mode to view more details and how to address the problem."))), w.createElement(l.X2, {
                    className: "tw-min-h-9 tw-truncate tw-my-2 tw-max-w-[100px] tw-w-fit tw-gap-2"
                }, w.createElement(l.zx, {
                    className: "tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        navigator.clipboard.writeText(b).then((function() {
                            d((0, g.d)({
                                title: "Copied product ID",
                                icon: f.f8,
                                message: "Product ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(e) {
                            var t, a;
                            d((0, g.d)({
                                title: "Failed to copy product ID",
                                icon: x.eH,
                                message: null !== (t = null === (a = res.error.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== t ? t : "Failed to copy product ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, w.createElement(l.$1, {
                    icon: u.kZ,
                    size: "1x"
                })), w.createElement(k, {
                    productType: A,
                    editAction: function() {
                        return r(a)
                    },
                    deleteAction: function() {
                        return o(a)
                    },
                    viewAvatarDetailsAction: function() {
                        return i(a)
                    }
                }))))
            };
            D.propTypes = {
                productData: E().object
            };
            const A = D;
            var P = a(40098),
                S = a(74205);
            const T = function(e) {
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
                    icon: S.fk,
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
                    icon: S.rP,
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
                    icon: S.F,
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
                    icon: P.r8
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
                z = [];
            const X = function(e) {
                var t, a = e.sortBy,
                    m = e.currentUser,
                    u = e.currentPage,
                    p = (e.searchValue, e.orderBy),
                    x = e.editProductCallback,
                    f = void 0 === x ? function() {} : x,
                    g = e.deleteProductCallback,
                    b = void 0 === g ? function() {} : g,
                    v = e.viewAvatarDetailsCallback,
                    h = void 0 === v ? function() {} : v,
                    E = e.createProductCallback,
                    y = void 0 === E ? function() {} : E,
                    N = e.onSortByChange,
                    C = void 0 === N ? function() {} : N;
                if (!m) return null;
                var k, D, P = (0, d.s0)(),
                    S = (0, i.rP)({
                        userId: m.id,
                        n: 50,
                        pageValue: u
                    }, {
                        skip: !m.id,
                        refetchOnMountOrArgChange: !0
                    }),
                    X = S.data,
                    $ = S.isSuccess,
                    j = S.isFetching,
                    F = S.isError,
                    U = S.error,
                    J = (0, w.useCallback)((function(e) {
                        return a === e
                    }), [a]),
                    Z = (0, w.useCallback)((function(e) {
                        if (z.includes(e)) return C(e)
                    }), [C]);
                return w.createElement(w.Fragment, null, 0 !== (null == X ? void 0 : X.length) || j || 1 !== u ? w.createElement(w.Fragment, null, w.createElement("div", {
                    className: "tw-@container/my-products tw-rounded-md tw-bg-grey tw-mt-5"
                }, w.createElement("div", {
                    className: "tw-w-full tw-min-w-max tw-table-auto tw-pb-1 tw-@container/products-heading"
                }, w.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-3 @[540px]/products-heading:tw-grid-cols-5 @[700px]/products-heading:tw-grid-cols-7 tw-border-b-[1px] tw-border-0 tw-border-solid tw-border-hr-line-color tw-py-3 tw-pb-3 tw-mx-5"
                }, I.map((function(e) {
                    var t = e.label,
                        a = e.value,
                        c = e.canCollapse,
                        o = void 0 !== c && c,
                        i = e.isSmallColumn,
                        d = void 0 !== i && i,
                        m = e.mobileCollapse,
                        u = void 0 !== m && m;
                    return w.createElement("span", {
                        key: a,
                        className: (0, s.cx)("tw-font-normal tw-text-base", {
                            "tw-text-light-white": J(a),
                            "tw-text-light-grey": !J(a),
                            "tw-hidden @[700px]/products-heading:tw-block": o,
                            "tw-hidden @[540px]/products-heading:tw-block": u,
                            "tw-max-w-[100px]": d,
                            "tw-max-w-auto": !d,
                            "tw-col-span-1": "displayName" !== a,
                            "tw-col-span-2": "displayName" === a,
                            "tw-cursor-pointer": z.includes(a),
                            "tw-cursor-auto": !z.includes(a)
                        }),
                        onClick: function() {
                            return Z(a)
                        },
                        onKeyDown: function(e) {
                            if ("Enter" === e.key || "Space" === e.key) return Z(a)
                        },
                        role: "button",
                        tabIndex: 0
                    }, t, z.includes(a) && w.createElement(l.$1, {
                        icon: J(a) && "ascending" === p ? r.fo : n.u9,
                        size: "1x",
                        className: "tw-ml-1 ".concat(J(a) && "ascending" === p ? "tw-align-bottom" : "tw-align-top")
                    }))
                }))), w.createElement("div", {
                    className: "tw-group"
                }, j ? w.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, w.createElement(c.Z, {
                    loading: !0
                })) : F ? w.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, w.createElement("p", null, "Error loading sales data:"), w.createElement("code", null, null !== (k = null == U || null === (D = U.data) || void 0 === D || null === (D = D.error) || void 0 === D ? void 0 : D.message) && void 0 !== k ? k : "Unknown error")) : $ && 0 === (null == X ? void 0 : X.length) ? w.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, w.createElement("p", {
                    className: "tw-mb-0"
                }, "There are no products to display.")) : $ ? X.map((function(e) {
                    return w.createElement(A, {
                        key: e.id,
                        productData: e,
                        editProductCallback: f,
                        deleteProductCallback: b,
                        viewAvatarDetailsActionCallback: h
                    })
                })) : void 0), w.createElement("div", null, w.createElement(o.Z, {
                    className: "tw-pt-2",
                    totalCount: null !== (t = null == X ? void 0 : X.length) && void 0 !== t ? t : 0,
                    showCurrentPageOnly: !0,
                    currentPage: u,
                    pageSize: 50,
                    onPageChange: function(e) {
                        return P("/home/marketplace/storefront/products/page/".concat(e))
                    }
                }))))) : w.createElement(T, {
                    createProduct: y
                }))
            }
        }
    }
]);
//# sourceMappingURL=6bb4c090a4bf155fd0532d1acf5c36f8155fa592ab7df4d9f5580df97bc41905.js.map