"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2848], {
        42848: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => te
            });
            var l = a(4942),
                n = a(15861),
                r = a(54546),
                c = a(62475),
                o = a(96766),
                s = a(40098),
                i = a(76553),
                w = a(6811),
                d = a(64687),
                m = a.n(d),
                u = a(64258),
                p = a(14411),
                f = a(98185),
                g = a(35187),
                x = a(95896),
                b = a(76176),
                v = a(22202),
                E = a(67978),
                h = a(43683),
                y = a(67294),
                N = a(32981),
                k = a(89250),
                C = a(79655),
                I = a(41727),
                P = a(72621),
                S = a(44869),
                D = a(53359),
                Z = a(92332),
                T = a(45697),
                O = a.n(T),
                j = a(44488),
                X = function(e) {
                    e.isOpen;
                    var t = e.productId,
                        a = void 0 === t ? null : t,
                        l = e.onCancelCallback,
                        c = void 0 === l ? function() {} : l;
                    if (null === a) return null;
                    var o = (0, N.I0)(),
                        s = (0, v.IB)().data,
                        d = (0, y.useState)(1),
                        f = (0, r.Z)(d, 2),
                        g = f[0],
                        x = f[1],
                        b = (0, y.useState)(!1),
                        h = (0, r.Z)(b, 2),
                        k = h[0],
                        C = h[1],
                        I = (0, E.lZ)({
                            productId: a
                        }, {
                            skip: null === a
                        }),
                        P = I.data,
                        S = I.isFetching,
                        T = (0, E.xq)(),
                        O = (0, r.Z)(T, 2),
                        X = O[0],
                        z = O[1],
                        F = z.isLoading,
                        A = z.isError,
                        J = z.error,
                        U = z.reset,
                        L = function() {
                            x(1), C(!1), c(), U()
                        },
                        $ = (null == P ? void 0 : P.parentListings.length) > 0,
                        M = function() {
                            var e = (0, n.Z)(m().mark((function e() {
                                var t, l;
                                return m().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, X({
                                                productId: a,
                                                ownerId: null == s ? void 0 : s.id
                                            }).unwrap();
                                        case 3:
                                            o((0, u.d)({
                                                title: "Product deleted",
                                                icon: w.f8,
                                                message: "".concat(P.displayName, " has been deleted."),
                                                color: "success",
                                                timeout: 3e3
                                            })), L(), e.next = 12;
                                            break;
                                        case 7:
                                            return e.prev = 7, e.t0 = e.catch(0), console.error(e.t0), o((0, u.d)({
                                                title: "Failed to delete product",
                                                icon: i.eH,
                                                message: null !== (t = null === (l = e.t0.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== t ? t : "Something went wrong",
                                                color: "danger",
                                                timeout: 9e3
                                            })), e.abrupt("return");
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        B = function() {
                            return y.createElement(y.Fragment, null, y.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, y.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-w-fit"
                            }, y.createElement("h2", {
                                className: "heading tw-inline-block tw-w-full tw-text-base"
                            }, "Are you sure you want to delete this product? This is NOT reversible."), (null == P ? void 0 : P.displayName) && y.createElement("p", {
                                className: "tw-text-light-grey tw-text-base tw-m-0"
                            }, P.displayName))), y.createElement("div", {
                                className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap tw-w-full tw-gap-2"
                            }, y.createElement("div", {
                                className: "tw-w-1/2"
                            }, y.createElement(p.zx, {
                                className: "tw-rounded-md tw-text-white tw-h-9 tw-border-0 tw-bg-button-bg-grey",
                                onClick: L
                            }, "Cancel")), y.createElement("div", {
                                className: "tw-w-1/2"
                            }, y.createElement(p.zx, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-message-warning tw-mb-3 tw-text-white",
                                onClick: function() {
                                    x(2)
                                },
                                disabled: !1
                            }, "Delete Product"))))
                        },
                        R = function() {
                            var e, t;
                            return y.createElement(y.Fragment, null, y.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, y.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-px-5 tw-w-full"
                            }, y.createElement(p.$1, {
                                icon: D.faTriangleExclamation,
                                size: "xl",
                                className: "tw-h-[72px] tw-mb-5"
                            }), y.createElement("h2", {
                                className: "heading tw-inline-block tw-w-full tw-text-base tw-text-center"
                            }, "Deleting this will revoke users access to content if they have paid for it."), y.createElement("p", {
                                className: " tw-text-base tw-m-0 tw-text-center tw-mb-9"
                            }, "If this action is intentional, you may proceed. However, ensure compliance with our", " ", y.createElement("a", {
                                href: "https://creators.vrchat.com/economy/guidelines",
                                target: "_blank",
                                rel: "noreferrer"
                            }, "Creator Economy guidelines"), " ", "to maintain trust and integrity within our community."), y.createElement("div", {
                                className: "tw-flex tw-items-center tw-gap-2"
                            }, y.createElement("input", {
                                id: "checked-checkbox",
                                type: "checkbox",
                                checked: k,
                                onChange: function() {
                                    return C(!k)
                                },
                                value: "acknowledge",
                                className: "tw-w-7 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-border-[#677079] tw-rounded focus:tw-ring-link-highlight tw-ring-offset-gray-800 focus:tw-ring-1"
                            }), y.createElement("label", {
                                for: "checked-checkbox",
                                className: "tw-text-sm tw-font-medium tw-text-white"
                            }, "I acknowledge that deleting this product will revoke access for existing users and confirm compliance with the Creator Economy guidelines."))), A && y.createElement("div", {
                                className: "tw-w-full tw-text-red tw-text-center"
                            }, y.createElement("p", null, "Failed to delete product:"), y.createElement("code", {
                                className: "tw-text-red"
                            }, null !== (e = null === (t = J.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "".concat(a, " An error occurred")))), y.createElement("div", {
                                className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap tw-w-full tw-gap-2"
                            }, y.createElement("div", {
                                className: "sm:tw-w-1/2"
                            }, y.createElement(p.zx, {
                                className: "tw-rounded-md tw-text-white tw-h-9 tw-border-0 tw-bg-button-bg-grey",
                                onClick: L
                            }, "Cancel")), y.createElement("div", {
                                className: "sm:tw-w-1/2"
                            }, y.createElement(p.zx, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-message-warning tw-text-white disabled:tw-bg-button-bg-grey disabled:tw-text-placeholder-text",
                                onClick: M,
                                disabled: !k,
                                loading: F
                            }, "Delete"))))
                        },
                        q = function() {
                            return y.createElement(y.Fragment, null, y.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, y.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-w-full"
                            }, y.createElement(p.$1, {
                                icon: D.faTriangleExclamation,
                                size: "xl",
                                className: "tw-h-[72px] tw-mb-4"
                            }), y.createElement("p", {
                                className: " tw-text-base tw-m-0 tw-text-center tw-mb-2"
                            }, "This product is included in the following listings:"), y.createElement("div", {
                                className: "tw-w-full tw-flex tw-flex-col tw-items-center tw-gap-2 tw-mb-9"
                            }, null == P ? void 0 : P.parentListings.map((function(e) {
                                return y.createElement(j.Z, {
                                    listingId: e
                                })
                            }))), y.createElement("h2", {
                                className: "heading tw-inline-block tw-w-full tw-text-base tw-text-center"
                            }, "Please remove this item from these listings prior to deleting this item."), "avatar" === (null == P ? void 0 : P.productType) && y.createElement("p", {
                                className: "tw-text-orange tw-text-base tw-text-center tw-mb-2"
                            }, "Note: If a listing has already been purchased, you won't be able to remove the product from it, and deletion won't be possible."))), y.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-gap-2 tw-items-center"
                            }, y.createElement("div", {
                                className: "tw-w-1/2"
                            }, y.createElement(p.zx, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-button-bgtw-text-highlight",
                                onClick: L,
                                loading: F
                            }, "Understood"))))
                        };
                    return y.createElement("div", {
                        className: "tw-flex tw-flex-col tw-w-full tw-h-full tw-gap-5"
                    }, function() {
                        if (S) return y.createElement("div", {
                            className: "tw-px-3 tw-pb-4 tw-pt-5 tw-flex tw-flex-col tw-w-full tw-items-center"
                        }, y.createElement(p.$1, {
                            icon: Z.LM,
                            spin: !0,
                            size: "2x"
                        }));
                        if ($) return q();
                        switch (g) {
                            case 1:
                                return B();
                            case 2:
                                return R();
                            default:
                                return null
                        }
                    }())
                };
            X.propTypes = {
                isOpen: O().bool,
                productId: O().string.isRequired,
                onCancelCallback: O().func
            };
            const z = X;
            var F = a(72998),
                A = a(21538);
            const J = function(e) {
                var t, a = e.productData,
                    l = e.onCloseCallback,
                    n = void 0 === l ? function() {} : l,
                    c = (0, y.useState)("info"),
                    o = (0, r.Z)(c, 2),
                    s = o[0],
                    i = o[1],
                    w = (0, A.LQ)({
                        avatarId: a.avatarId
                    }, {
                        skip: !a.avatarId
                    }),
                    d = w.data,
                    m = (w.isFetching, w.isError, w.error, null !== (t = null == a ? void 0 : a.parentListings) && void 0 !== t ? t : []),
                    u = (0, y.useCallback)((function(e) {
                        i(e)
                    }), []);
                return y.createElement("div", {
                    className: "tw-w-full"
                }, y.createElement(F.Z, {
                    className: "tw--ml-2 tw--mt-4",
                    onChange: u,
                    tabs: [{
                        id: "info",
                        name: "Product Information",
                        condition: !0
                    }, {
                        id: "listings",
                        name: "Associated Listings",
                        condition: !0
                    }],
                    selected: s,
                    justify: "start"
                }), "info" === s && y.createElement("div", null, y.createElement("div", {
                    className: "tw-bg-[#000] tw-p-4 tw-rounded-md tw-mb-3"
                }, "Need to edit your avatar? Head over to ", y.createElement(C.rU, {
                    to: "/home/avatar/".concat(a.avatarId)
                }, "the avatar page"), " to make changes."), y.createElement(S.Z, {
                    avatarData: d,
                    productType: "avatar"
                })), "listings" === s && y.createElement("div", {
                    className: "tw-gap-2 tw-w-full tw-grid tw-grid-cols-2 tw-mb-3"
                }, m.length > 0 && m.map((function(e) {
                    return y.createElement(j.Z, {
                        key: e.id,
                        listingData: e
                    })
                })), y.createElement("p", null, "No listings associated with this product.")), y.createElement(p.zx, {
                    onClick: n,
                    containerClasses: "tw-w-full"
                }, "Done"))
            };
            var U = a(2909),
                L = a(27484),
                $ = a.n(L),
                M = a(97798);
            const B = function(e) {
                var t = e.deleteAction,
                    a = e.editAction,
                    l = e.productType,
                    n = e.viewAvatarDetailsAction,
                    c = (0, y.useState)(!1),
                    o = (0, r.Z)(c, 2),
                    s = o[0],
                    i = o[1],
                    w = (0, y.useState)(null),
                    d = (0, r.Z)(w, 2),
                    m = d[0],
                    u = d[1],
                    f = (0, y.useRef)(null);
                return (0, y.useEffect)((function() {
                    null != f && f.current && u(f.current.getBoundingClientRect())
                }), [f]), y.createElement("div", {
                    onMouseLeave: function() {
                        return i(!1)
                    }
                }, y.createElement(p.zx, {
                    ref: f,
                    className: "tw-h-9 tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        return i(!s)
                    }
                }, y.createElement(p.$1, {
                    icon: M.Uw,
                    size: "1x"
                })), y.createElement("div", {
                    style: {
                        transform: "translate(-".concat(120 - (null == m ? void 0 : m.width), "px, 0px)")
                    },
                    className: "tw-pt-2 tw-min-w-min tw-w-[120px] tw-min-h-min tw-z-50 tw-absolute ".concat(s ? "tw-flex" : "tw-hidden")
                }, y.createElement(p.JX, {
                    className: "tw-items-start tw-items-start tw-bg-button-bg-grey tw-border-2 tw-w-full tw-text-left tw-weight-[500]  tw-border-solid tw-border-[#666666] tw-rounded-lg"
                }, "avatar" !== l && y.createElement("button", {
                    type: "button",
                    className: "tw-text-left tw-px-3 tw-py-2 tw-w-full tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]",
                    onClick: a
                }, "Edit"), "avatar" === l && y.createElement("button", {
                    type: "button",
                    className: "tw-text-left tw-px-3 tw-py-2 tw-w-full tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]",
                    onClick: n
                }, "View Details"), y.createElement("hr", {
                    className: "tw-border-t-2 tw-m-0 tw-border-solid tw-w-full tw-border-white"
                }), y.createElement("button", {
                    type: "button",
                    className: "tw-px-3 tw-py-2 tw-text-red tw-text-left tw-border-none tw-w-full tw-bg-transparent hover:tw-bg-[#666666] hover:tw-text-white",
                    onClick: t
                }, "Delete"))))
            };
            var R = function(e) {
                var t = e.productData,
                    a = void 0 === t ? null : t,
                    l = e.editProductCallback,
                    n = void 0 === l ? function() {} : l,
                    r = e.deleteProductCallback,
                    c = void 0 === r ? function() {} : r,
                    o = e.viewAvatarDetailsActionCallback,
                    s = void 0 === o ? function() {} : o,
                    d = (0, N.I0)();
                if (null === a) return null;
                var m = a.id,
                    f = a.displayName,
                    g = a.created,
                    x = a.updated,
                    b = a.parentListings,
                    v = a.productType,
                    E = a.imageId;
                return y.createElement("div", {
                    className: "tw-relative"
                }, y.createElement("div", {
                    className: "tw-grid tw-gap-2 tw-items-center tw-grid-cols-3 @[540px]/my-products:tw-grid-cols-5 @[700px]/products-heading:tw-grid-cols-7 tw-mx-5 tw-border-hr-line-color tw-border-b-[1px] tw-border-t-0 tw-border-x-0 tw-border-solid"
                }, y.createElement(p.X2, {
                    className: "tw-flex tw-gap-1 tw-items-center tw-min-h-9 tw-my-2 @[800px]/my-products:tw-max-w-max tw-col-span-2"
                }, y.createElement(p.pw, {
                    fitToCover: !0,
                    imageId: E,
                    className: "tw-w-8 tw-h-8 tw-rounded-md tw-shrink-0",
                    containerColor: "#181B1F",
                    iconColor: "#404C58"
                }), y.createElement("p", {
                    className: "tw-truncate tw-mb-0 tw-overflow-hidden @[800px]/my-products:tw-whitespace-pre-line @[800px]/my-products:tw-break-words",
                    title: f
                }, f)), y.createElement("div", {
                    className: "tw-block tw-items-center tw-min-h-9 tw-py-2 tw-my-2 tw-truncate @[800px]/my-products:tw-max-w-max tw-capitalize tw-hidden @[540px]/my-products:tw-flex"
                }, v), y.createElement("div", {
                    className: "tw-items-center tw-min-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/my-products:tw-max-w-max tw-hidden @[700px]/my-products:tw-flex"
                }, $()(g).format("ll")), y.createElement("div", {
                    className: "tw-items-center tw-min-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/my-products:tw-max-w-max tw-hidden @[700px]/my-products:tw-flex"
                }, $()(x).format("ll")), y.createElement("div", {
                    className: "tw-flex tw-items-center tw-min-h-9 tw-my-2 tw-truncate @[800px]/my-products:tw-max-w-max @[700px]/products-heading:tw-col-span-1 tw-hidden @[540px]/my-products:tw-flex"
                }, y.createElement("span", {
                    className: "tw-truncate tw-hidden @[700px]/products-heading:tw-block"
                }, b && b.length > 0 ? "Available in ".concat(b.length, " listings") : "Unlisted"), y.createElement("span", {
                    className: "@[700px]/products-heading:tw-hidden tw-truncate"
                }, b && b.length > 0 ? "In ".concat(b.length, " listings") : "Unlisted")), y.createElement(p.X2, {
                    className: "tw-min-h-9 tw-truncate tw-my-2 tw-max-w-[100px] tw-w-fit tw-gap-2"
                }, y.createElement(p.zx, {
                    className: "tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        navigator.clipboard.writeText(m).then((function() {
                            d((0, u.d)({
                                title: "Copied product ID",
                                icon: w.f8,
                                message: "Product ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(e) {
                            var t, a;
                            d((0, u.d)({
                                title: "Failed to copy product ID",
                                icon: i.eH,
                                message: null !== (t = null === (a = res.error.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== t ? t : "Failed to copy product ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, y.createElement(p.$1, {
                    icon: U.kZ,
                    size: "1x"
                })), y.createElement(B, {
                    productType: v,
                    editAction: function() {
                        return n(a)
                    },
                    deleteAction: function() {
                        return c(a)
                    },
                    viewAvatarDetailsAction: function() {
                        return s(a)
                    }
                }))))
            };
            R.propTypes = {
                productData: O().object
            };
            const q = R;
            var H = a(67263),
                V = function(e) {
                    e.isOpen;
                    var t = e.createdProduct,
                        a = void 0 === t ? null : t,
                        l = e.closeModalCallback,
                        n = void 0 === l ? function() {} : l,
                        r = e.updated,
                        c = void 0 !== r && r;
                    return null === a ? null : y.createElement("div", null, y.createElement("div", {
                        className: "tw-flex tw-min-h-full tw-items-end tw-justify-center tw-p-4 sm:tw-items-center sm:tw-p-0"
                    }, y.createElement("div", null, y.createElement("div", {
                        className: "tw-flex tw-flex-col tw-w-full tw-items-center"
                    }, y.createElement(p.pw, {
                        alt: null == a ? void 0 : a.displayName,
                        imageId: (null == a ? void 0 : a.imageId) || (null == a ? void 0 : a.file) || null,
                        fallbackSrc: H,
                        fitToCover: !0
                    }), y.createElement("h2", {
                        className: "heading tw-mt-5"
                    }, "Product ", c ? "Updated" : "Created", "!"), y.createElement("p", {
                        className: "tw-text-light-grey tw-text-center tw-mb-8 sm:tw-w-3/4"
                    }, "Your udon product is all set! Continue in your Unity project. You will see this product available in your Udon products manager.")), y.createElement("div", {
                        className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap sm:tw-px-6 tw-w-full tw-gap-2"
                    }, y.createElement("div", {
                        className: "sm:tw-w-1/2"
                    }, y.createElement(C.rU, {
                        to: "https://creators.vrchat.com/economy/sdk/",
                        target: "_blank"
                    }, y.createElement(p.zx, {
                        className: "tw-rounded-md tw-text-white tw-border-0 tw-bg-button-bg-grey",
                        onClick: n
                    }, "View Docs"))), y.createElement("div", {
                        className: "sm:tw-w-1/2"
                    }, y.createElement(p.zx, {
                        className: "tw-rounded-md tw-border-0 tw-mb-3 disabled:tw-bg-button-bg-grey disabled:tw-text-placeholder-text",
                        onClick: n
                    }, "Done"))))))
                };
            V.propTypes = {
                isOpen: O().bool,
                createdProduct: O().object.isRequired,
                closeModalCallback: O().func
            };
            const _ = V;
            var K = a(74205);
            const Y = function(e) {
                var t = e.createProduct,
                    a = void 0 === t ? function() {} : t;
                return y.createElement(p.JX, {
                    className: " tw-@container/product-info tw-text-center tw-gap-9 tw-mt-12"
                }, y.createElement("div", null, y.createElement("h4", null, "Enhance and Monetize Your Worlds"), y.createElement("p", {
                    className: "tw-mb-0 tw-text-xl"
                }, "The possibilities are endless, here are some ideas:")), y.createElement(p.JX, {
                    className: "tw-flex-col @sm/product-info:tw-flex-row tw-justify-evenly tw-gap-12"
                }, y.createElement(p.JX, {
                    className: "tw-items-center"
                }, y.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, y.createElement(p.$1, {
                    icon: K.fk,
                    className: "tw-text-5xl",
                    role: "presentation",
                    alt: "",
                    color: "#9C9C9C"
                })), y.createElement("h4", {
                    className: "tw-text-lg"
                }, "Offer Custom Content"), y.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Transform your users' experiences with custom interactions and items, that bring your worlds to life.")), y.createElement(p.JX, {
                    className: "tw-items-center"
                }, y.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, y.createElement(p.$1, {
                    icon: K.rP,
                    className: "tw-text-5xl",
                    role: "presentation",
                    alt: "",
                    color: "#9C9C9C"
                })), y.createElement("h4", {
                    className: "tw-text-lg"
                }, "Grant Access to Exclusive Events"), y.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Offer passes that provide time-limited access to exclusive events or areas of your world.")), y.createElement(p.JX, {
                    className: "tw-items-center"
                }, y.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, y.createElement(p.$1, {
                    icon: K.F,
                    className: "tw-text-5xl",
                    role: "presentation",
                    alt: "",
                    color: "#9C9C9C"
                })), y.createElement("h4", {
                    className: "tw-text-lg"
                }, "Sell Unlockable Features and Upgrades"), y.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Introduce keys to unlock never-ending access to unique abilities and effects in your world."))), y.createElement(p.JX, {
                    className: "tw-items-center"
                }, y.createElement(p.zx, {
                    containerClasses: "tw-mb-3 tw-w-[200px]",
                    onClick: a
                }, y.createElement(p.$1, {
                    icon: s.r8
                }), " Create Product"), y.createElement("a", {
                    href: "https://creators.vrchat.com/economy/products/",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn more about products")))
            };

            function W(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    t && (l = l.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, l)
                }
                return a
            }

            function G(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? W(Object(a), !0).forEach((function(t) {
                        (0, l.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : W(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var Q = [{
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
                ee = [];
            const te = function() {
                var e, t, a = (0, N.I0)(),
                    l = (0, k.s0)(),
                    d = (0, N.v9)((function(e) {
                        return e.productFlow
                    })).currentTitle,
                    S = (0, C.lr)(),
                    D = (0, r.Z)(S, 2),
                    Z = D[0],
                    T = (D[1], (0, k.UO)().paginationPage),
                    O = T ? Number(T) : 1,
                    j = (0, y.useState)(""),
                    X = (0, r.Z)(j, 2),
                    F = X[0],
                    A = (X[1], (0, y.useState)(Z.get("sortBy") || null)),
                    U = (0, r.Z)(A, 2),
                    L = U[0],
                    $ = U[1],
                    M = (0, y.useState)(Z.get("orderBy") || "descending"),
                    B = (0, r.Z)(M, 2),
                    R = B[0],
                    H = B[1],
                    V = y.useState({}),
                    K = (0, r.Z)(V, 2),
                    W = K[0],
                    te = K[1],
                    ae = y.useState(!1),
                    le = (0, r.Z)(ae, 2),
                    ne = le[0],
                    re = le[1],
                    ce = y.useState(!1),
                    oe = (0, r.Z)(ce, 2),
                    se = oe[0],
                    ie = oe[1],
                    we = y.useState(!1),
                    de = (0, r.Z)(we, 2),
                    me = de[0],
                    ue = de[1],
                    pe = y.useState(null),
                    fe = (0, r.Z)(pe, 2),
                    ge = fe[0],
                    xe = fe[1],
                    be = y.useState(null),
                    ve = (0, r.Z)(be, 2),
                    Ee = ve[0],
                    he = ve[1],
                    ye = y.useState(null),
                    Ne = (0, r.Z)(ye, 2),
                    ke = Ne[0],
                    Ce = Ne[1],
                    Ie = y.useState(!1),
                    Pe = (0, r.Z)(Ie, 2),
                    Se = Pe[0],
                    De = Pe[1],
                    Ze = y.useState(!1),
                    Te = (0, r.Z)(Ze, 2),
                    Oe = Te[0],
                    je = Te[1],
                    Xe = y.useState(!1),
                    ze = (0, r.Z)(Xe, 2),
                    Fe = ze[0],
                    Ae = ze[1],
                    Je = (0, b.Z)(F),
                    Ue = (0, v.IB)().data,
                    Le = ((0, y.useMemo)((function() {
                        return {
                            sellerId: Ue.id,
                            n: 50,
                            pageValue: O
                        }
                    }), [Z, Je, R, L, O]), (0, E.rP)({
                        userId: Ue.id,
                        n: 50,
                        pageValue: O
                    }, {
                        skip: !Ue.id,
                        refetchOnMountOrArgChange: !0
                    })),
                    $e = Le.data,
                    Me = Le.isSuccess,
                    Be = Le.isFetching,
                    Re = Le.isError,
                    qe = Le.error,
                    He = (0, E.qX)(),
                    Ve = (0, r.Z)(He, 2),
                    _e = Ve[0],
                    Ke = Ve[1],
                    Ye = (Ke.isSuccess, Ke.isLoading, Ke.isError, Ke.error, (0, E.wE)()),
                    We = (0, r.Z)(Ye, 2),
                    Ge = We[0],
                    Qe = We[1],
                    et = (Qe.isSuccess, Qe.isLoading, Qe.isError, Qe.error, function(e) {
                        var t = e.title,
                            a = void 0 === t ? "" : t,
                            l = e.data,
                            n = void 0 === l ? void 0 : l,
                            r = e.isEditing,
                            c = void 0 !== r && r,
                            o = e.productType,
                            s = void 0 === o ? x.Pm.UDON : o;
                        re(!0), te({
                            title: a,
                            data: n,
                            isEditing: c,
                            productType: s
                        })
                    }),
                    tt = function() {
                        re(!1), te({}), ie(!1), xe(null), ue(!1), De(!1), je(!1), Ae(!1), he(null), a((0, h.bi)())
                    },
                    at = function() {
                        var e = (0, n.Z)(m().mark((function e(t) {
                            var l, n, r, c, o, s, d, p, f;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (l = t.productData, n = void 0 === l ? {} : l, r = t.isEditing, c = void 0 !== r && r, o = t.image, s = void 0 === o ? void 0 : o, d = function() {
                                                a((0, u.d)({
                                                    title: "Product ".concat(c ? "updated" : "created", " successfully!"),
                                                    icon: w.f8,
                                                    message: "Your product has been ".concat(c ? "updated" : "created", " successfully!"),
                                                    color: "success",
                                                    timeout: 3e3
                                                })), xe(n), je(!1), ie(!0), ue(c)
                                            }, e.prev = 2, !c) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 6, Ge(G(G({
                                            productId: n.id
                                        }, null !== s ? {
                                            file: s,
                                            tag: "product"
                                        } : {}), n)).unwrap();
                                    case 6:
                                        return e.abrupt("return", d());
                                    case 7:
                                        return e.next = 9, _e(G(G({}, null !== s ? {
                                            file: s,
                                            tag: "product"
                                        } : {}), n)).unwrap();
                                    case 9:
                                        return e.abrupt("return", d());
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(2), console.log("error", e.t0), a((0, u.d)({
                                            title: "Failed to ".concat(c ? "update" : "create", " product!"),
                                            icon: i.eH,
                                            message: null !== (p = null === (f = e.t0.data) || void 0 === f || null === (f = f.error) || void 0 === f ? void 0 : f.message) && void 0 !== p ? p : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 12]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    lt = function(e) {
                        return L === e
                    },
                    nt = function(e) {
                        if (ee.includes(e)) return function(e) {
                            return lt(e) ? H("descending" === R ? "ascending" : "descending") : ($(e), H("ascending"))
                        }(e)
                    },
                    rt = function(e) {
                        je(!0), et({
                            title: "Edit Product",
                            data: e,
                            isEditing: !0,
                            productType: "product"
                        })
                    },
                    ct = function(e) {
                        he(e), De(!0), et({
                            title: "Delete Product",
                            data: e,
                            productType: "product"
                        })
                    },
                    ot = function(e) {
                        Ce(e), De(!1), je(!1), Ae(!0), et({
                            title: "Product Views",
                            data: e
                        })
                    };
                return y.createElement(y.Fragment, null, y.createElement(p.$4, null, "My Products"), 0 !== (null == $e ? void 0 : $e.length) || Be || 1 !== O ? y.createElement(y.Fragment, null, y.createElement(p.X2, {
                    className: "tw-justify-between tw-gap-x-5 tw-gap-y-3 tw-flex-wrap"
                }, y.createElement("div", null), y.createElement(p.zx, {
                    "aria-label": "Create Product",
                    className: "tw-px-2",
                    onClick: function() {
                        return et({
                            title: "Create Product",
                            data: void 0,
                            isEditing: !1
                        })
                    }
                }, y.createElement(p.$1, {
                    icon: s.r8,
                    size: "1x"
                }), " Create Product")), y.createElement("div", {
                    className: "tw-@container/my-products tw-rounded-md tw-bg-grey tw-mt-5"
                }, y.createElement("div", {
                    className: "tw-w-full tw-min-w-max tw-table-auto tw-pb-1 tw-@container/products-heading"
                }, y.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-3 @[540px]/products-heading:tw-grid-cols-5 @[700px]/products-heading:tw-grid-cols-7 tw-border-b-[1px] tw-border-0 tw-border-solid tw-border-hr-line-color tw-py-3 tw-pb-3 tw-mx-5"
                }, Q.map((function(e) {
                    var t = e.label,
                        a = e.value,
                        l = e.canCollapse,
                        n = void 0 !== l && l,
                        r = e.isSmallColumn,
                        s = void 0 !== r && r,
                        i = e.mobileCollapse,
                        w = void 0 !== i && i;
                    return y.createElement("span", {
                        key: a,
                        className: "\n                  ".concat(lt(a) ? "tw-text-light-white" : "tw-text-light-grey", "\n                  ").concat(n && "tw-hidden @[700px]/products-heading:tw-block", "\n                  ").concat(ee.includes(a) ? "tw-cursor-pointer" : "tw-cursor-auto", "\n                  ").concat(s ? "tw-max-w-[100px]" : "tw-max-w-auto", "\n                  ").concat(w && "tw-hidden @[540px]/products-heading:tw-block", "\n                  ").concat("displayName" === a ? "tw-col-span-2" : "tw-col-span-1", "\n                  tw-font-normal tw-text-base\n                "),
                        onClick: function() {
                            return nt(a)
                        },
                        onKeyDown: function(e) {
                            if ("Enter" === e.key || "Space" === e.key) return nt(a)
                        },
                        role: "button",
                        tabIndex: 0
                    }, t, ee.includes(a) && y.createElement(p.$1, {
                        icon: lt(a) && "ascending" === R ? o.fo : c.u9,
                        size: "1x",
                        className: "tw-ml-1 ".concat(lt(a) && "ascending" === R ? "tw-align-bottom" : "tw-align-top")
                    }))
                }))), y.createElement("div", {
                    className: "tw-group"
                }, Be ? y.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, y.createElement(f.Z, {
                    loading: !0
                })) : Re ? y.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, y.createElement("p", null, "Error loading sales data:"), y.createElement("code", null, null !== (t = qe.data.error.message) && void 0 !== t ? t : "Unknown error")) : Me && 0 === (null == $e ? void 0 : $e.length) ? y.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, y.createElement("p", {
                    className: "tw-mb-0"
                }, "There are no transactions data to display.")) : Me ? $e.map((function(e) {
                    return y.createElement(q, {
                        key: e.id,
                        productData: e,
                        editProductCallback: rt,
                        deleteProductCallback: ct,
                        viewAvatarDetailsActionCallback: ot
                    })
                })) : void 0), y.createElement("div", null, y.createElement(g.Z, {
                    className: "tw-pt-2",
                    totalCount: null !== (e = null == $e ? void 0 : $e.length) && void 0 !== e ? e : 0,
                    showCurrentPageOnly: !0,
                    currentPage: O,
                    pageSize: 50,
                    onPageChange: function(e) {
                        return l("/home/marketplace/storefront/products/page/".concat(e))
                    }
                }))))) : y.createElement(Y, {
                    createProduct: function() {
                        return et({
                            title: d,
                            data: void 0,
                            isEditing: !1,
                            productType: "product"
                        })
                    }
                }), y.createElement(p.u_, {
                    title: d || W.title,
                    onClose: tt,
                    isVisible: ne,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: "auto",
                    disableBackdropClick: !0,
                    backgroundColor: "#181B1F"
                }, ne && !Se && !se && !Oe && !Fe && y.createElement(I.Z, {
                    onClose: tt
                }), ne && Oe && y.createElement(P.default, {
                    product: W.data,
                    onClose: tt,
                    isEditing: !0,
                    onSubmit: at,
                    user: Ue
                }), ne && se && y.createElement(_, {
                    isOpen: se,
                    createdProduct: ge,
                    updated: me,
                    closeModalCallback: tt
                }), ne && Se && y.createElement(z, {
                    productId: null == Ee ? void 0 : Ee.id,
                    isOpen: Se,
                    onCancelCallback: tt
                }), ne && Fe && y.createElement(J, {
                    productData: ke,
                    onCloseCallback: tt
                })))
            }
        },
        44869: (e, t, a) => {
            a.d(t, {
                Z: () => x
            });
            var l = a(15861),
                n = a(2909),
                r = a(82414),
                c = a(6811),
                o = a(64687),
                s = a.n(o),
                i = a(67294),
                w = a(32981),
                d = a(64258),
                m = a(14411),
                u = a(95896),
                p = a(3620),
                f = a(64358),
                g = new RegExp("^".concat(p.i.AUTHOR));
            const x = function(e) {
                var t, a, o, x, b, v = e.avatarData,
                    E = void 0 === v ? null : v,
                    h = e.productType;
                if (null === E) return null;
                var y = (0, w.I0)(),
                    N = i.useMemo((function() {
                        return null == E ? void 0 : E.tags.filter((function(e) {
                            return e.startsWith(p.i.AUTHOR)
                        })).map((function(e) {
                            return e.replace(g, "")
                        }))
                    }), [null == E ? void 0 : E.tags]),
                    k = function() {
                        var e = (0, l.Z)(s().mark((function e(t, a) {
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.stopPropagation(), e.next = 3, (0, f.zp)(a)();
                                    case 3:
                                        y((0, d.d)({
                                            title: "Copied product ID",
                                            icon: c.f8,
                                            message: "Product ID Copied!",
                                            color: "success",
                                            timeout: 3e3
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, a) {
                            return e.apply(this, arguments)
                        }
                    }();
                return i.createElement("form", {
                    className: "tw-w-full"
                }, i.createElement(m.JX, {
                    className: "tw-mb-8"
                }, i.createElement(m.X2, {
                    className: "tw-gap-5 tw-mb-5 tw-flex-col sm:tw-flex-row"
                }, i.createElement(m.JX, null, i.createElement(m.pw, {
                    imageId: E.thumbnailImageUrl,
                    fitToCover: !0,
                    alt: "Product Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                })), i.createElement(m.JX, {
                    className: "tw-flex-1 tw-gap-5"
                }, i.createElement(m.JX, null, i.createElement("label", {
                    htmlFor: "name"
                }, "Product Name"), i.createElement(m.II, {
                    type: "text",
                    inputStyle: {
                        margin: "8px 0"
                    },
                    maxLength: 64,
                    id: "name",
                    value: E.name,
                    disabled: !0
                })), i.createElement(m.X2, {
                    className: "tw-gap-2"
                }, i.createElement(m.JX, {
                    className: "tw-flex-1"
                }, i.createElement("p", {
                    className: "tw-mb-2"
                }, "Primary Style"), !(null !== (t = E.styles) && void 0 !== t && t.primary) && i.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No primary style!"), (null === (a = E.styles) || void 0 === a ? void 0 : a.primary) && i.createElement("div", {
                    className: "tw-mb-0 tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block tw-w-fit"
                }, i.createElement("span", null, E.styles.primary))), i.createElement(m.JX, {
                    className: "tw-flex-1"
                }, i.createElement("p", {
                    className: "tw-mb-2"
                }, "Secondary Style"), !(null !== (o = E.styles) && void 0 !== o && o.secondary) && i.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No secondary style!"), (null === (x = E.styles) || void 0 === x ? void 0 : x.secondary) && i.createElement("div", {
                    className: "tw-mb-0 tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block tw-w-fit"
                }, E.styles.secondary))), i.createElement(m.JX, null, i.createElement("p", {
                    className: "tw-mb-2"
                }, "Tags"), i.createElement(m.X2, {
                    className: "tw-flex-wrap tw-gap-2"
                }, 0 === (null == N ? void 0 : N.length) && i.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No tags!"), null == N ? void 0 : N.map((function(e) {
                    return i.createElement("div", {
                        key: e,
                        className: "tw-leading-none tw-max-h-[50px] tw-break-all tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block"
                    }, i.createElement("span", null, e))
                })))))), i.createElement(m.JX, {
                    className: "tw-gap-5"
                }, E.productId && i.createElement(m.JX, {
                    className: "tw-mb-5"
                }, i.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2 tw-flex tw-flex-row"
                }, "Product ID", i.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1"
                }, i.createElement(m.$1, {
                    icon: r.sq,
                    className: "tw-text-light-grey"
                }), i.createElement("span", {
                    className: "tw-pointer-events-none tw-z-50 tw-absolute tw--top-14 tw--left-20 sm:tw--top-7 sm:tw-left-5 tw-w-[240px] tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50 tw-opacity-0 tw-shadow tw-transition-opacity group-hover:tw-opacity-100"
                }, "This unique ID links your Udon product to the VRChat Worlds SDK, allowing you to track ownership within your world."))), i.createElement(m.X2, {
                    className: "tw-gap-2"
                }, i.createElement(m.II, {
                    type: "text",
                    id: "id",
                    value: E.productId,
                    disabled: !0,
                    className: "tw-flex-1"
                }), i.createElement(m.zx, {
                    type: "button",
                    className: "tw-w-[40px] tw-h-[40px]",
                    onClick: function(e) {
                        return k(e, E.productId)
                    }
                }, i.createElement(m.$1, {
                    icon: n.kZ
                })))), h && i.createElement(m.JX, {
                    className: "tw-mb-5"
                }, i.createElement("label", {
                    htmlFor: "price",
                    className: "tw-mb-2"
                }, "Product Type"), i.createElement(m.X2, {
                    className: "tw-gap-3"
                }, i.createElement("div", {
                    className: "tw-rounded-full tw-w-[90px] tw-h-[90px] tw-bg-[#303135]"
                }, i.createElement("img", {
                    alt: "udon logo",
                    width: "90",
                    src: u.pK[h].image
                })), i.createElement(m.JX, {
                    className: "tw-items-center tw-justify-center"
                }, i.createElement("p", {
                    className: "tw-mb-0"
                }, i.createElement("strong", null, u.pK[h].label), i.createElement("br", null), u.pK[h].text, i.createElement("br", null), i.createElement("a", {
                    href: u.pK[h].redirect,
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn More"))))), i.createElement(m.JX, null, i.createElement("label", {
                    htmlFor: "description"
                }, "Description"), i.createElement(m.gx, {
                    disabled: !0,
                    type: "textarea",
                    id: "description",
                    inputClassName: "tw-h-[120px] tw-my-2",
                    maxLength: 256,
                    value: E.description
                })), i.createElement(m.JX, null, i.createElement("label", {
                    htmlFor: "acknowledgements"
                }, "Acknowledgements"), i.createElement(m.gx, {
                    disabled: !0,
                    type: "textarea",
                    id: "acknowledgements",
                    inputClassName: "tw-h-[90px] tw-my-2",
                    maxLength: 256,
                    value: null !== (b = null == E ? void 0 : E.acknowledgements) && void 0 !== b ? b : ""
                })))))
            }
        }
    }
]);
//# sourceMappingURL=a0b964cee4873f6177e962fb5add94037809d318960e74d63d2f5bbb17ad7e14.js.map