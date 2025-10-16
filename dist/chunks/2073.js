"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2073], {
        2073: (t, e, a) => {
            a.r(e), a.d(e, {
                default: () => X
            });
            var n = a(62475),
                r = a(96766),
                l = a(96985),
                c = a(98185),
                o = a(35187),
                i = a(83505),
                s = a(67978),
                w = a(67294),
                d = a(89250),
                u = a(54546),
                m = a(2909),
                p = a(82414),
                x = a(76553),
                b = a(6811),
                v = a(64258),
                f = a(27484),
                g = a.n(f),
                h = a(45697),
                E = a.n(h),
                y = a(32981),
                N = a(65061),
                C = a(97798),
                k = a(95896);
            const P = function(t) {
                var e = t.deleteAction,
                    a = void 0 === e ? function() {} : e,
                    n = t.duplicateAction,
                    r = void 0 === n ? function() {} : n,
                    c = t.editAction,
                    o = t.productType,
                    i = t.viewAvatarDetailsAction,
                    s = t.assetDisabled,
                    d = (0, w.useState)(!1),
                    m = (0, u.Z)(d, 2),
                    p = m[0],
                    x = m[1],
                    b = (0, w.useState)(null),
                    v = (0, u.Z)(b, 2),
                    f = v[0],
                    g = v[1],
                    h = (0, w.useRef)(null);
                return (0, w.useEffect)((function() {
                    null != h && h.current && g(h.current.getBoundingClientRect())
                }), [h]), w.createElement("div", {
                    onMouseLeave: function() {
                        return x(!1)
                    }
                }, w.createElement(l.zx, {
                    ref: h,
                    className: "tw-h-9 tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        return x(!p)
                    }
                }, w.createElement(l.$1, {
                    icon: C.Uw,
                    size: "1x"
                })), w.createElement("div", {
                    style: {
                        transform: "translate(-".concat(120 - (null == f ? void 0 : f.width), "px, 0px)")
                    },
                    className: "tw-pt-2 tw-min-w-min tw-w-[120px] tw-min-h-min tw-z-50 tw-absolute ".concat(p ? "tw-flex" : "tw-hidden")
                }, w.createElement(l.JX, {
                    className: "tw-items-start tw-items-start tw-bg-button-bg-grey tw-border-2 tw-w-full tw-text-left tw-weight-[500]  tw-border-solid tw-border-[#666666] tw-rounded-lg"
                }, "avatar" !== o && w.createElement("button", {
                    type: "button",
                    className: "tw-text-left tw-px-3 tw-py-2 tw-w-full tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]",
                    onClick: c
                }, "Edit"), "avatar" === o && w.createElement("button", {
                    type: "button",
                    className: "tw-text-left tw-px-3 tw-py-2 tw-w-full disabled:tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]",
                    onClick: i
                }, "View Details"), o === k.Pm.UDON && w.createElement("button", {
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
                    f = void 0 === d ? function() {} : d,
                    h = (0, y.I0)();
                if (null === a) return null;
                var E = a.id,
                    C = a.displayName,
                    k = a.created,
                    D = a.updated,
                    A = a.parentListings,
                    T = a.productType,
                    S = a.imageId,
                    z = a.assetDisabled,
                    I = (0, w.useState)(!1),
                    U = (0, u.Z)(I, 2),
                    X = U[0],
                    $ = U[1],
                    j = (0, w.useRef)(null);
                return (0, w.useEffect)((function() {
                    var t = function(t) {
                        j.current && !j.current.contains(t.target) && $(!1)
                    };
                    return X ? document.addEventListener("mousedown", t) : document.removeEventListener("mousedown", t),
                        function() {
                            document.removeEventListener("mousedown", t)
                        }
                }), [X]), w.createElement("div", {
                    className: "tw-relative"
                }, w.createElement("div", {
                    className: "tw-grid tw-gap-2 tw-items-center tw-grid-cols-3 @[540px]/my-products:tw-grid-cols-5 @[700px]/products-heading:tw-grid-cols-7 tw-mx-5 tw-border-hr-line-color tw-border-b-[1px] tw-border-t-0 tw-border-x-0 tw-border-solid"
                }, w.createElement(l.X2, {
                    className: "tw-flex tw-gap-1 tw-items-center tw-min-h-9 tw-my-2 @[800px]/my-products:tw-max-w-max tw-col-span-2"
                }, w.createElement(l.pw, {
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
                }, g()(D).format("ll")), !z && w.createElement("div", {
                    className: "tw-items-center tw-min-h-9 tw-my-2 tw-truncate @[800px]/my-products:tw-max-w-max @[700px]/products-heading:tw-col-span-1 tw-hidden @[540px]/my-products:tw-flex"
                }, w.createElement("span", {
                    className: "tw-truncate tw-hidden @[700px]/products-heading:tw-block"
                }, A && A.length > 0 ? "Available in ".concat(A.length, " listings") : "Unlisted"), w.createElement("span", {
                    className: "@[700px]/products-heading:tw-hidden tw-truncate"
                }, A && A.length > 0 ? "In ".concat(A.length, " listings") : "Unlisted")), z && w.createElement("div", {
                    className: "tw-items-center tw-h-9 tw-my-2 tw-truncate @[800px]/my-products:tw-max-w-max @[700px]/products-heading:tw-col-span-1 tw-hidden @[540px]/my-products:tw-flex"
                }, w.createElement("span", {
                    className: "tw-truncate"
                }, w.createElement(l.$1, {
                    className: "tw-text-orange",
                    icon: x.eH
                }), " ", w.createElement("span", {
                    className: "tw-text-orange"
                }, "Disabled"), " ", w.createElement("button", {
                    id: "disabledTooltip-".concat(E),
                    type: "button",
                    className: "tw-bg-transparent tw-border-none",
                    onClick: function() {
                        return $(!X)
                    },
                    "aria-label": "Disabled avatar tooltip",
                    ref: j
                }, w.createElement(l.$1, {
                    className: "tw-text-placeholder-text",
                    icon: p.sq
                })), w.createElement(N.Z, {
                    isOpen: X,
                    target: "disabledTooltip-".concat(E),
                    toggle: function() {
                        return $(!X)
                    },
                    trigger: "click",
                    innerClassName: "tw-bg-black"
                }, "This product is currently unavailable due to an issue. Enter Edit mode to view more details and how to address the problem."))), w.createElement(l.X2, {
                    className: "tw-min-h-9 tw-truncate tw-my-2 tw-max-w-[100px] tw-w-fit tw-gap-2"
                }, w.createElement(l.zx, {
                    className: "tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        navigator.clipboard.writeText(E).then((function() {
                            h((0, v.d)({
                                title: "Copied product ID",
                                icon: b.f8,
                                message: "Product ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(t) {
                            var e, a;
                            h((0, v.d)({
                                title: "Failed to copy product ID",
                                icon: x.eH,
                                message: null !== (e = null === (a = res.error.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== e ? e : "Failed to copy product ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, w.createElement(l.$1, {
                    icon: m.kZ,
                    size: "1x"
                })), w.createElement(P, {
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
                    assetDisabled: z,
                    viewAvatarDetailsAction: function() {
                        return f(a)
                    }
                }))))
            };
            D.propTypes = {
                productData: E().object
            };
            const A = D;
            var T = a(40098),
                S = a(99162);
            const z = function(t) {
                var e = t.createProduct,
                    a = void 0 === e ? function() {} : e;
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
                    icon: S.vrcGhost,
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
                    icon: S.vrcProductTicket,
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
                    icon: S.vrcProductKey,
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
                    icon: T.r8
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
                U = [];
            const X = function(t) {
                var e, a = t.sortBy,
                    u = t.currentUser,
                    m = t.currentPage,
                    p = (t.searchValue, t.orderBy),
                    x = t.editProductCallback,
                    b = void 0 === x ? function() {} : x,
                    v = t.deleteProductCallback,
                    f = void 0 === v ? function() {} : v,
                    g = t.viewAvatarDetailsCallback,
                    h = void 0 === g ? function() {} : g,
                    E = t.createProductCallback,
                    y = void 0 === E ? function() {} : E,
                    N = t.duplicateProductCallback,
                    C = void 0 === N ? function() {} : N,
                    k = t.onSortByChange,
                    P = void 0 === k ? function() {} : k;
                if (!u) return null;
                var D, T, S = (0, d.s0)(),
                    X = (0, s.rP)({
                        userId: u.id,
                        n: 50,
                        pageValue: m
                    }, {
                        skip: !u.id,
                        refetchOnMountOrArgChange: !0
                    }),
                    $ = X.data,
                    j = X.isSuccess,
                    F = X.isFetching,
                    J = X.isError,
                    O = X.error,
                    Z = (0, w.useCallback)((function(t) {
                        return a === t
                    }), [a]);
                (0, w.useCallback)((function(t) {
                    if (U.includes(t)) return P(t)
                }), [P]);
                return w.createElement(w.Fragment, null, 0 !== (null == $ ? void 0 : $.length) || F || 1 !== m ? w.createElement(w.Fragment, null, w.createElement("div", {
                    className: "tw-@container/my-products tw-rounded-md tw-bg-grey tw-mt-5"
                }, w.createElement("div", {
                    className: "tw-w-full tw-min-w-max tw-table-auto tw-pb-1 tw-@container/products-heading"
                }, w.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-3 @[540px]/products-heading:tw-grid-cols-5 @[700px]/products-heading:tw-grid-cols-7 tw-border-b-[1px] tw-border-0 tw-border-solid tw-border-hr-line-color tw-py-3 tw-pb-3 tw-mx-5"
                }, I.map((function(t) {
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
                            "tw-text-light-white": Z(a),
                            "tw-text-light-grey": !Z(a),
                            "tw-hidden @[700px]/products-heading:tw-block": o,
                            "tw-hidden @[540px]/products-heading:tw-block": m,
                            "tw-max-w-[100px]": d,
                            "tw-max-w-auto": !d,
                            "tw-col-span-1": "displayName" !== a,
                            "tw-col-span-2": "displayName" === a,
                            "tw-cursor-pointer": U.includes(a),
                            "tw-cursor-auto": !U.includes(a)
                        })
                    }, e, U.includes(a) && w.createElement(l.$1, {
                        icon: Z(a) && "ascending" === p ? r.fo : n.u9,
                        size: "1x",
                        className: "tw-ml-1 ".concat(Z(a) && "ascending" === p ? "tw-align-bottom" : "tw-align-top")
                    }))
                }))), w.createElement("div", {
                    className: "tw-group"
                }, F ? w.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, w.createElement(c.Z, {
                    loading: !0
                })) : J ? w.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, w.createElement("p", null, "Error loading sales data:"), w.createElement("code", null, null !== (D = null == O || null === (T = O.data) || void 0 === T || null === (T = T.error) || void 0 === T ? void 0 : T.message) && void 0 !== D ? D : "Unknown error")) : j && 0 === (null == $ ? void 0 : $.length) ? w.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, w.createElement("p", {
                    className: "tw-mb-0"
                }, "There are no products to display.")) : j ? $.map((function(t) {
                    return w.createElement(A, {
                        key: t.id,
                        productData: t,
                        editProductCallback: b,
                        deleteProductCallback: f,
                        duplicateProductCallback: C,
                        viewAvatarDetailsActionCallback: h
                    })
                })) : void 0), w.createElement("div", null, w.createElement(o.Z, {
                    className: "tw-pt-2",
                    totalCount: null !== (e = null == $ ? void 0 : $.length) && void 0 !== e ? e : 0,
                    showCurrentPageOnly: !0,
                    currentPage: m,
                    pageSize: 50,
                    onPageChange: function(t) {
                        return S("/home/marketplace/storefront/products/page/".concat(t))
                    }
                }))))) : w.createElement(z, {
                    createProduct: y
                }))
            }
        }
    }
]);
//# sourceMappingURL=5977fa15b1d9dc28303bc0dd7028b032380311188780baefe9453e93b5d145c8.js.map