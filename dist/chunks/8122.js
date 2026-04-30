"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8122], {
        38122: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => R
            });
            var l = a(4942),
                n = a(15861),
                r = a(54546),
                c = a(40098),
                i = a(76553),
                s = a(6811),
                o = a(64687),
                d = a.n(o),
                u = a(64258),
                m = a(80988),
                w = a(90068),
                p = a(98185),
                g = a(72998),
                f = a(95896),
                b = a(76176),
                v = a(22202),
                E = a(67978),
                x = a(43683),
                h = a(67294),
                y = a(32981),
                N = a(79655),
                k = a(89250),
                C = a(19637),
                I = a(72621),
                P = a(53359),
                D = a(92332),
                Z = a(45697),
                S = a.n(Z),
                O = a(44488),
                j = function(e) {
                    var t = e.productId,
                        a = void 0 === t ? null : t,
                        l = e.onCancelCallback,
                        c = void 0 === l ? function() {} : l;
                    if (null === a) return null;
                    var o = (0, y.I0)(),
                        w = (0, v.IB)().data,
                        p = (0, h.useState)(1),
                        g = (0, r.Z)(p, 2),
                        f = g[0],
                        b = g[1],
                        x = (0, h.useState)(!1),
                        N = (0, r.Z)(x, 2),
                        k = N[0],
                        C = N[1],
                        I = (0, E.lZ)({
                            productId: a
                        }, {
                            skip: null === a
                        }),
                        Z = I.data,
                        S = I.isFetching,
                        j = (0, E.xq)(),
                        T = (0, r.Z)(j, 2),
                        X = T[0],
                        z = T[1],
                        F = z.isLoading,
                        L = z.isError,
                        U = z.error,
                        A = z.reset,
                        J = function() {
                            b(1), C(!1), c(), A()
                        },
                        V = (null == Z ? void 0 : Z.parentListings.length) > 0,
                        B = function() {
                            var e = (0, n.Z)(d().mark((function e() {
                                var t, l;
                                return d().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, X({
                                                productId: a,
                                                ownerId: null == w ? void 0 : w.id
                                            }).unwrap();
                                        case 3:
                                            o((0, u.d)({
                                                title: "Product deleted",
                                                icon: s.f8,
                                                message: "".concat(Z.displayName, " has been deleted."),
                                                color: "success",
                                                timeout: 3e3
                                            })), J(), e.next = 12;
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
                        M = function() {
                            return h.createElement(h.Fragment, null, h.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, h.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-w-fit"
                            }, h.createElement("h2", {
                                className: "heading tw-inline-block tw-w-full tw-text-base"
                            }, "Are you sure you want to delete this product? This is NOT reversible."), (null == Z ? void 0 : Z.displayName) && h.createElement("p", {
                                className: "tw-text-light-grey tw-text-base tw-m-0"
                            }, Z.displayName))), h.createElement("div", {
                                className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap tw-w-full tw-gap-2"
                            }, h.createElement("div", {
                                className: "tw-w-1/2"
                            }, h.createElement(m.zx, {
                                className: "tw-rounded-md tw-text-white tw-h-9 tw-border-0 tw-bg-button-bg-grey",
                                onClick: J
                            }, "Cancel")), h.createElement("div", {
                                className: "tw-w-1/2"
                            }, h.createElement(m.zx, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-message-warning tw-mb-3 tw-text-white",
                                onClick: function() {
                                    b(2)
                                },
                                disabled: !1
                            }, "Delete Product"))))
                        },
                        q = function() {
                            var e, t;
                            return h.createElement(h.Fragment, null, h.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, h.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-px-5 tw-w-full"
                            }, h.createElement(m.$1, {
                                icon: P.faTriangleExclamation,
                                size: "xl",
                                className: "tw-h-[72px] tw-mb-5"
                            }), h.createElement("h2", {
                                className: "heading tw-inline-block tw-w-full tw-text-base tw-text-center"
                            }, "Deleting this will revoke users access to content if they have paid for it."), h.createElement("p", {
                                className: " tw-text-base tw-m-0 tw-text-center tw-mb-9"
                            }, "If this action is intentional, you may proceed. However, ensure compliance with our", " ", h.createElement("a", {
                                href: "https://creators.vrchat.com/economy/guidelines",
                                target: "_blank",
                                rel: "noreferrer"
                            }, "Creator Economy guidelines"), " ", "to maintain trust and integrity within our community."), h.createElement("div", {
                                className: "tw-flex tw-items-center tw-gap-2"
                            }, h.createElement("input", {
                                id: "checked-checkbox",
                                type: "checkbox",
                                checked: k,
                                onChange: function() {
                                    return C(!k)
                                },
                                value: "acknowledge",
                                className: "tw-w-7 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-border-[#677079] tw-rounded focus:tw-ring-link-highlight tw-ring-offset-gray-800 focus:tw-ring-1"
                            }), h.createElement("label", {
                                for: "checked-checkbox",
                                className: "tw-text-sm tw-font-medium tw-text-white"
                            }, "I acknowledge that deleting this product will revoke access for existing users and confirm compliance with the Creator Economy guidelines."))), L && h.createElement("div", {
                                className: "tw-w-full tw-text-red tw-text-center"
                            }, h.createElement("p", null, "Failed to delete product:"), h.createElement("code", {
                                className: "tw-text-red"
                            }, null !== (e = null === (t = U.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "".concat(a, " An error occurred")))), h.createElement("div", {
                                className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap tw-w-full tw-gap-2"
                            }, h.createElement("div", {
                                className: "sm:tw-w-1/2"
                            }, h.createElement(m.zx, {
                                className: "tw-rounded-md tw-text-white tw-h-9 tw-border-0 tw-bg-button-bg-grey",
                                onClick: J
                            }, "Cancel")), h.createElement("div", {
                                className: "sm:tw-w-1/2"
                            }, h.createElement(m.zx, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-message-warning tw-text-white disabled:tw-bg-button-bg-grey disabled:tw-text-placeholder-text",
                                onClick: B,
                                disabled: !k,
                                loading: F
                            }, "Delete"))))
                        },
                        R = function() {
                            return h.createElement(h.Fragment, null, h.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, h.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-w-full"
                            }, h.createElement(m.$1, {
                                icon: P.faTriangleExclamation,
                                size: "xl",
                                className: "tw-h-[72px] tw-mb-4"
                            }), h.createElement("p", {
                                className: " tw-text-base tw-m-0 tw-text-center tw-mb-2"
                            }, "This product is included in the following listings:"), h.createElement("div", {
                                className: "tw-w-full tw-flex tw-flex-col tw-items-center tw-gap-2 tw-mb-9"
                            }, null == Z ? void 0 : Z.parentListings.map((function(e) {
                                return h.createElement(O.Z, {
                                    listingId: e
                                })
                            }))), h.createElement("h2", {
                                className: "heading tw-inline-block tw-w-full tw-text-base tw-text-center"
                            }, "Please remove this item from these listings prior to deleting this item."), "avatar" === (null == Z ? void 0 : Z.productType) && h.createElement("p", {
                                className: "tw-text-orange tw-text-base tw-text-center tw-mb-2"
                            }, "Note: If a listing has already been purchased, you won't be able to remove the product from it, and deletion won't be possible."))), h.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-gap-2 tw-items-center"
                            }, h.createElement("div", {
                                className: "tw-w-1/2"
                            }, h.createElement(m.zx, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-button-bgtw-text-highlight",
                                onClick: J,
                                loading: F
                            }, "Understood"))))
                        };
                    return h.createElement("div", {
                        className: "tw-flex tw-flex-col tw-w-full tw-h-full tw-gap-5"
                    }, function() {
                        if (S) return h.createElement("div", {
                            className: "tw-px-3 tw-pb-4 tw-pt-5 tw-flex tw-flex-col tw-w-full tw-items-center"
                        }, h.createElement(m.$1, {
                            icon: D.LM,
                            spin: !0,
                            size: "2x"
                        }));
                        if (V) return R();
                        switch (f) {
                            case 1:
                                return M();
                            case 2:
                                return q();
                            default:
                                return null
                        }
                    }())
                };
            j.propTypes = {
                productId: S().string.isRequired,
                onCancelCallback: S().func
            };
            const T = j;
            var X = a(21538),
                z = a(44869);
            const F = function(e) {
                var t, a = e.productData,
                    l = e.onCloseCallback,
                    n = void 0 === l ? function() {} : l,
                    c = (0, h.useState)("info"),
                    i = (0, r.Z)(c, 2),
                    s = i[0],
                    o = i[1],
                    d = (0, X.LQ)({
                        avatarId: a.avatarId
                    }, {
                        skip: !a.avatarId
                    }),
                    u = d.data,
                    w = (d.isFetching, d.isError, d.error, null !== (t = null == a ? void 0 : a.parentListings) && void 0 !== t ? t : []),
                    p = (0, h.useCallback)((function(e) {
                        o(e)
                    }), []);
                return h.createElement("div", {
                    className: "tw-w-full"
                }, h.createElement(g.Z, {
                    className: "tw--ml-2 tw--mt-4",
                    onChange: p,
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
                }), (null == a ? void 0 : a.assetDisabled) && h.createElement(m.qX, {
                    type: "warn",
                    title: "This avatar is disabled."
                }, h.createElement("p", {
                    className: "tw-mb-0 tw-ml-6"
                }, "Existing buyers have lost access, and new purchases are temporarily disabled. Check your email inbox for instructions on how to proceed, or contact Support if you need further assistance.")), "info" === s && h.createElement("div", null, h.createElement("div", {
                    className: "tw-bg-[#000] tw-p-4 tw-rounded-md tw-mb-3"
                }, "Need to edit your avatar? Head over to ", h.createElement(N.rU, {
                    to: "/home/avatar/".concat(a.avatarId)
                }, "the avatar page"), " to make changes."), h.createElement(z.Z, {
                    avatarData: u,
                    productType: "avatar"
                })), "listings" === s && h.createElement("div", {
                    className: "tw-gap-2 tw-w-full tw-grid tw-grid-cols-2 tw-mb-3"
                }, w.length > 0 && w.map((function(e) {
                    return h.createElement(O.Z, {
                        key: e,
                        listingId: e,
                        showImage: !0
                    })
                })), 0 === w.length && h.createElement("p", null, "No listings associated with this product.")), h.createElement(m.zx, {
                    onClick: n,
                    containerClasses: "tw-w-full"
                }, "Done"))
            };
            var L = a(51806),
                U = a.n(L),
                A = function(e) {
                    e.isOpen;
                    var t = e.createdProduct,
                        a = void 0 === t ? null : t,
                        l = e.closeModalCallback,
                        n = void 0 === l ? function() {} : l,
                        r = e.updated,
                        c = void 0 !== r && r;
                    return null === a ? null : h.createElement("div", null, h.createElement("div", {
                        className: "tw-flex tw-min-h-full tw-items-end tw-justify-center tw-p-4 sm:tw-items-center sm:tw-p-0"
                    }, h.createElement("div", null, h.createElement("div", {
                        className: "tw-flex tw-flex-col tw-w-full tw-items-center"
                    }, h.createElement(m.pw, {
                        alt: null == a ? void 0 : a.displayName,
                        imageId: (null == a ? void 0 : a.imageId) || (null == a ? void 0 : a.file) || null,
                        fallbackSrc: U(),
                        fitToCover: !0
                    }), h.createElement("h2", {
                        className: "heading tw-mt-5"
                    }, "Product ", c ? "Updated" : "Created", "!"), h.createElement("p", {
                        className: "tw-text-light-grey tw-text-center tw-mb-8 sm:tw-w-3/4"
                    }, "Your udon product is all set! Continue in your Unity project. You will see this product available in your Udon products manager.")), h.createElement("div", {
                        className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap sm:tw-px-6 tw-w-full tw-gap-2"
                    }, h.createElement("div", {
                        className: "sm:tw-w-1/2"
                    }, h.createElement(N.rU, {
                        to: "https://creators.vrchat.com/economy/sdk/",
                        target: "_blank"
                    }, h.createElement(m.zx, {
                        className: "tw-rounded-md tw-text-white tw-border-0 tw-bg-button-bg-grey",
                        onClick: n
                    }, "View Docs"))), h.createElement("div", {
                        className: "sm:tw-w-1/2"
                    }, h.createElement(m.zx, {
                        className: "tw-rounded-md tw-border-0 tw-mb-3 disabled:tw-bg-button-bg-grey disabled:tw-text-placeholder-text",
                        onClick: n
                    }, "Done"))))))
                };
            A.propTypes = {
                isOpen: S().bool,
                createdProduct: S().object.isRequired,
                closeModalCallback: S().func
            };
            const J = A;

            function V(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    t && (l = l.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, l)
                }
                return a
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? V(Object(a), !0).forEach((function(t) {
                        (0, l.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : V(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var M = (0, h.lazy)((function() {
                    return a.e(2073).then(a.bind(a, 2073))
                })),
                q = (0, h.lazy)((function() {
                    return a.e(7069).then(a.bind(a, 17069))
                }));
            const R = function() {
                var e, t = (0, v.IB)().data,
                    a = (0, y.I0)(),
                    l = (0, w.P2)().showContentViolationModal,
                    o = (0, y.v9)((function(e) {
                        return e.productFlow
                    })).currentTitle,
                    P = (0, N.lr)(),
                    D = (0, r.Z)(P, 2),
                    Z = D[0],
                    S = (D[1], (0, h.useState)("")),
                    O = (0, r.Z)(S, 2),
                    j = O[0],
                    X = (O[1], (0, k.UO)()),
                    z = X.paginationPage,
                    L = X.productTab,
                    U = z ? Number(z) : 1,
                    A = (0, h.useState)(Z.get("sortBy") || null),
                    V = (0, r.Z)(A, 2),
                    R = V[0],
                    $ = V[1],
                    H = (0, h.useState)(Z.get("orderBy") || "descending"),
                    _ = (0, r.Z)(H, 2),
                    K = _[0],
                    Y = _[1],
                    Q = h.useState({}),
                    W = (0, r.Z)(Q, 2),
                    G = W[0],
                    ee = W[1],
                    te = h.useState(!1),
                    ae = (0, r.Z)(te, 2),
                    le = ae[0],
                    ne = ae[1],
                    re = h.useState(!1),
                    ce = (0, r.Z)(re, 2),
                    ie = ce[0],
                    se = ce[1],
                    oe = h.useState(!1),
                    de = (0, r.Z)(oe, 2),
                    ue = de[0],
                    me = de[1],
                    we = h.useState(null),
                    pe = (0, r.Z)(we, 2),
                    ge = pe[0],
                    fe = pe[1],
                    be = h.useState(null),
                    ve = (0, r.Z)(be, 2),
                    Ee = ve[0],
                    xe = ve[1],
                    he = h.useState(!1),
                    ye = (0, r.Z)(he, 2),
                    Ne = (ye[0], ye[1]),
                    ke = (0, b.Z)(j),
                    Ce = ((0, h.useMemo)((function() {
                        return {
                            sellerId: t.id,
                            n: 50,
                            pageValue: U
                        }
                    }), [Z, ke, K, R, U]), (0, E.qX)()),
                    Ie = (0, r.Z)(Ce, 2),
                    Pe = Ie[0],
                    De = Ie[1],
                    Ze = (De.isSuccess, De.isLoading, De.isError, De.error, (0, E.wE)()),
                    Se = (0, r.Z)(Ze, 2),
                    Oe = Se[0],
                    je = Se[1],
                    Te = (je.isSuccess, je.isLoading, je.isError, je.error, function(e) {
                        var t = e.title,
                            a = void 0 === t ? "" : t,
                            l = e.data,
                            n = void 0 === l ? void 0 : l,
                            r = e.isEditing,
                            c = void 0 !== r && r,
                            i = e.isCreating,
                            s = void 0 !== i && i,
                            o = e.isDeleting,
                            d = void 0 !== o && o,
                            u = e.isViewingAvatarDetails,
                            m = void 0 !== u && u;
                        ne(!0), ee({
                            title: a,
                            data: n,
                            isEditing: c,
                            isCreating: s,
                            isDeleting: d,
                            isViewingAvatarDetails: m
                        })
                    }),
                    Xe = function() {
                        ne(!1), ee({}), se(!1), fe(null), me(!1), Ne(!1), a((0, x.bi)())
                    },
                    ze = function() {
                        var e = (0, n.Z)(d().mark((function e(t) {
                            var n, r, c, o, m, w, p, g, f, b, v;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.productData, r = void 0 === n ? {} : n, c = t.isEditing, o = void 0 !== c && c, m = t.image, w = void 0 === m ? void 0 : m, p = t.duplicate, g = void 0 !== p && p, f = function() {
                                                a((0, u.d)({
                                                    title: "Product ".concat(o ? "updated" : "created", " successfully!"),
                                                    icon: s.f8,
                                                    message: "Your product has been ".concat(o ? "updated" : "created", " successfully!"),
                                                    color: "success",
                                                    timeout: 3e3
                                                })), ee({
                                                    isEditing: !1,
                                                    isCreating: !1
                                                }), g || (a((0, x.dn)()), fe(r), se(!0), me(o))
                                            }, e.prev = 2, !o) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 6, Oe(B(B({
                                            productId: r.id
                                        }, null !== w ? {
                                            file: w,
                                            tag: "product"
                                        } : {}), r)).unwrap();
                                    case 6:
                                        return e.abrupt("return", f());
                                    case 7:
                                        return e.next = 9, Pe(B(B({}, null !== w ? {
                                            file: w,
                                            tag: "product"
                                        } : {}), r)).unwrap();
                                    case 9:
                                        return e.abrupt("return", f());
                                    case 12:
                                        if (e.prev = 12, e.t0 = e.catch(2), console.log("error", e.t0), !l({
                                                error: e.t0
                                            })) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 17:
                                        a((0, u.d)({
                                            title: "Failed to ".concat(o ? "update" : "create", " product!"),
                                            icon: i.eH,
                                            message: null !== (b = null === (v = e.t0.data) || void 0 === v || null === (v = v.error) || void 0 === v ? void 0 : v.message) && void 0 !== b ? b : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 18:
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
                    Fe = (0, h.useCallback)((function(e) {
                        return R === e
                    }), [R]),
                    Le = function() {
                        Te({
                            title: "Create Product",
                            data: void 0,
                            isCreating: !0
                        })
                    },
                    Ue = function() {
                        var e = (0, n.Z)(d().mark((function e(t) {
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, a((0, x.IR)(t));
                                    case 2:
                                        Te({
                                            title: "Edit Product",
                                            data: t,
                                            isEditing: !0
                                        });
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return h.createElement(h.Fragment, null, h.createElement(m.$4, null, "My Products"), h.createElement(m.X2, null, h.createElement(g.Z, {
                    justify: "left",
                    tabs: [{
                        name: "Available Products",
                        to: "../products/page/1",
                        condition: !0
                    }, {
                        name: "Moderation Queue",
                        to: "../products/moderation/page/1",
                        condition: !0
                    }]
                })), h.createElement(m.X2, {
                    className: "tw-justify-between tw-gap-x-5 tw-gap-y-3 tw-flex-wrap"
                }, h.createElement("div", null), h.createElement(m.zx, {
                    "aria-label": "Create Product",
                    className: "tw-px-2",
                    onClick: Le
                }, h.createElement(m.$1, {
                    icon: c.r8,
                    size: "1x"
                }), " Create Product")), h.createElement(h.Suspense, {
                    fallback: h.createElement(p.Z, {
                        loading: !0
                    })
                }, !L && h.createElement(M, {
                    currentUser: t,
                    searchValue: j,
                    currentPage: U,
                    sortBy: R,
                    orderBy: K,
                    editProductCallback: Ue,
                    deleteProductCallback: function(e) {
                        Te({
                            title: "Delete Product",
                            data: e,
                            isDeleting: !0
                        })
                    },
                    viewAvatarDetailsCallback: function(e) {
                        xe(e), Ne(!0), Te({
                            title: "Product Views",
                            data: e,
                            isViewingAvatarDetails: !0
                        })
                    },
                    createProductCallback: Le,
                    duplicateProductCallback: function(e) {
                        var t, a = e.displayName,
                            l = e.description,
                            n = e.imageId,
                            r = e.productType,
                            c = e.useForSubscriberList,
                            i = e.avatarId;
                        if (r === f.Pm.UDON) {
                            var s = B({
                                displayName: "".concat(a, "(Copy)"),
                                tags: null !== (t = e.tags) && void 0 !== t ? t : [],
                                description: l,
                                imageId: n,
                                productType: r,
                                avatarId: i
                            }, i ? {} : {
                                useForSubscriberList: c
                            });
                            ze({
                                productData: s,
                                isEditing: !1,
                                duplicate: !0
                            })
                        }
                    },
                    onSortByChange: function(e) {
                        return function(e) {
                            return Fe(e) ? Y("descending" === K ? "ascending" : "descending") : ($(e), Y("ascending"))
                        }(e)
                    }
                }), "moderation" === L && h.createElement(q, {
                    sortBy: R,
                    orderBy: K,
                    currentUser: t,
                    currentPage: U
                })), h.createElement(m.u_, {
                    title: o || G.title,
                    onClose: Xe,
                    isVisible: le,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: "auto",
                    disableBackdropClick: !0,
                    className: "tw-bg-black"
                }, le && G.isCreating && h.createElement(C.Z, {
                    onClose: Xe
                }), le && G.isEditing && h.createElement(I.default, {
                    product: G.data,
                    onClose: Xe,
                    isEditing: !0,
                    onSubmit: ze,
                    user: t
                }), le && ie && h.createElement(J, {
                    isOpen: ie,
                    createdProduct: ge,
                    updated: ue,
                    closeModalCallback: Xe
                }), le && G.isDeleting && h.createElement(T, {
                    productId: null === (e = G.data) || void 0 === e ? void 0 : e.id,
                    onCancelCallback: Xe
                }), le && G.isViewingAvatarDetails && h.createElement(F, {
                    productData: Ee,
                    onCloseCallback: Xe
                })))
            }
        },
        44869: (e, t, a) => {
            a.d(t, {
                Z: () => b
            });
            var l = a(15861),
                n = a(2909),
                r = a(82414),
                c = a(6811),
                i = a(64687),
                s = a.n(i),
                o = a(67294),
                d = a(32981),
                u = a(64258),
                m = a(80988),
                w = a(95896),
                p = a(3620),
                g = a(64358),
                f = new RegExp("^".concat(p.i.AUTHOR));
            const b = function(e) {
                var t, a, i, b, v, E = e.avatarData,
                    x = void 0 === E ? null : E,
                    h = e.productType;
                if (null === x) return null;
                var y = (0, d.I0)(),
                    N = o.useMemo((function() {
                        return null == x ? void 0 : x.tags.filter((function(e) {
                            return e.startsWith(p.i.AUTHOR)
                        })).map((function(e) {
                            return e.replace(f, "")
                        }))
                    }), [null == x ? void 0 : x.tags]),
                    k = function() {
                        var e = (0, l.Z)(s().mark((function e(t, a) {
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.stopPropagation(), e.next = 3, (0, g.zp)(a)();
                                    case 3:
                                        y((0, u.d)({
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
                return o.createElement("form", {
                    className: "tw-w-full"
                }, o.createElement(m.JX, {
                    className: "tw-mb-8"
                }, o.createElement("h2", {
                    className: "tw-text-lg tw-mb-3"
                }, "Avatar Detail"), o.createElement(m.X2, {
                    className: "tw-gap-5 tw-mb-5 tw-flex-col md:tw-flex-row"
                }, o.createElement(m.JX, null, o.createElement(m.pw, {
                    imageId: x.thumbnailImageUrl,
                    fitToCover: !0,
                    alt: "Product Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                })), o.createElement(m.JX, {
                    className: "tw-flex-1 tw-gap-5"
                }, o.createElement(m.JX, null, o.createElement("label", {
                    htmlFor: "name"
                }, "Product Name"), o.createElement(m.II, {
                    type: "text",
                    inputStyle: {
                        margin: "8px 0"
                    },
                    maxLength: 64,
                    id: "name",
                    value: x.name,
                    disabled: !0
                })), o.createElement(m.X2, {
                    className: "tw-gap-2"
                }, o.createElement(m.JX, {
                    className: "tw-flex-1"
                }, o.createElement("p", {
                    className: "tw-mb-2"
                }, "Primary Style"), !(null !== (t = x.styles) && void 0 !== t && t.primary) && o.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No primary style!"), (null === (a = x.styles) || void 0 === a ? void 0 : a.primary) && o.createElement("div", {
                    className: "tw-mb-0 tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block tw-w-fit"
                }, o.createElement("span", null, x.styles.primary))), o.createElement(m.JX, {
                    className: "tw-flex-1"
                }, o.createElement("p", {
                    className: "tw-mb-2"
                }, "Secondary Style"), !(null !== (i = x.styles) && void 0 !== i && i.secondary) && o.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No secondary style!"), (null === (b = x.styles) || void 0 === b ? void 0 : b.secondary) && o.createElement("div", {
                    className: "tw-mb-0 tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block tw-w-fit"
                }, x.styles.secondary))), o.createElement(m.JX, null, o.createElement("p", {
                    className: "tw-mb-2"
                }, "Tags"), o.createElement(m.X2, {
                    className: "tw-flex-wrap tw-gap-2"
                }, 0 === (null == N ? void 0 : N.length) && o.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No tags!"), null == N ? void 0 : N.map((function(e) {
                    return o.createElement("div", {
                        key: e,
                        className: "tw-leading-none tw-max-h-[50px] tw-break-all tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block"
                    }, o.createElement("span", null, e))
                })))))), o.createElement(m.JX, {
                    className: "tw-gap-5"
                }, x.productId && o.createElement(m.JX, {
                    className: "tw-mb-5"
                }, o.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2 tw-flex tw-flex-row"
                }, "Product ID", o.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1"
                }, o.createElement(m.$1, {
                    icon: r.sq,
                    className: "tw-text-light-grey"
                }), o.createElement("span", {
                    className: "tw-pointer-events-none tw-z-50 tw-absolute tw--top-14 tw--left-20 sm:tw--top-7 sm:tw-left-5 tw-w-[240px] tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50 tw-opacity-0 tw-shadow tw-transition-opacity group-hover:tw-opacity-100"
                }, "This unique ID links your Udon product to the VRChat Worlds SDK, allowing you to track ownership within your world."))), o.createElement(m.X2, {
                    className: "tw-gap-2"
                }, o.createElement(m.II, {
                    type: "text",
                    id: "id",
                    value: x.productId,
                    disabled: !0,
                    className: "tw-flex-1"
                }), o.createElement(m.zx, {
                    type: "button",
                    className: "tw-w-[40px] tw-h-[40px]",
                    onClick: function(e) {
                        return k(e, x.productId)
                    }
                }, o.createElement(m.$1, {
                    icon: n.kZ
                })))), h && o.createElement(m.JX, null, o.createElement("label", {
                    htmlFor: "price",
                    className: "tw-mb-2"
                }, "Product Type"), o.createElement(m.X2, {
                    className: "tw-gap-3"
                }, o.createElement("div", {
                    className: "tw-rounded-full tw-w-[90px] tw-h-[90px] tw-bg-[#303135]"
                }, o.createElement("img", {
                    alt: "udon logo",
                    width: "90",
                    src: w.pK[h].image
                })), o.createElement(m.JX, {
                    className: "tw-items-center tw-justify-center"
                }, o.createElement("p", {
                    className: "tw-mb-0"
                }, o.createElement("strong", null, w.pK[h].label), o.createElement("br", null), w.pK[h].text, o.createElement("br", null), o.createElement("a", {
                    href: w.pK[h].redirect,
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn More"))))), o.createElement(m.JX, null, o.createElement("label", {
                    htmlFor: "description"
                }, "Description"), o.createElement(m.gx, {
                    disabled: !0,
                    type: "textarea",
                    id: "description",
                    inputClassName: "tw-h-[120px] tw-my-2",
                    maxLength: 256,
                    value: x.description
                })), o.createElement(m.JX, null, o.createElement("label", {
                    htmlFor: "acknowledgements"
                }, "Acknowledgements"), o.createElement(m.gx, {
                    disabled: !0,
                    type: "textarea",
                    id: "acknowledgements",
                    inputClassName: "tw-h-[90px] tw-my-2",
                    maxLength: 256,
                    value: null !== (v = null == x ? void 0 : x.acknowledgements) && void 0 !== v ? v : ""
                })))))
            }
        }
    }
]);
//# sourceMappingURL=d6dfb24b4a8bb918728bcf43b062953bac69c07e88b068c01326d744573ce809.js.map