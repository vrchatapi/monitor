"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9450], {
        89450(e, t, a) {
            a.r(t), a.d(t, {
                default: () => X
            });
            var l = a(64467),
                n = a(10467),
                r = a(82544),
                c = a(28045),
                i = a(34496),
                s = a(42217),
                o = a(54756),
                d = a.n(o),
                u = a(65950),
                m = a(71661),
                w = a(97071),
                p = a(71853),
                f = a(75174),
                g = a(31069),
                b = a(91863),
                v = a(13951),
                E = a(6457),
                h = a(89661),
                x = a(96540),
                y = a(6376),
                N = a(84976),
                k = a(47767),
                C = a(45123),
                A = a(15771),
                I = a(82628),
                P = a(7612),
                D = a(5556),
                S = a.n(D),
                O = a(33610),
                T = function(e) {
                    var t = e.productId,
                        a = void 0 === t ? null : t,
                        l = e.onCancelCallback,
                        c = void 0 === l ? function() {} : l;
                    if (null === a) return null;
                    var o = (0, y.wA)(),
                        w = (0, v.p$)().data,
                        p = (0, x.useState)(1),
                        f = (0, r.A)(p, 2),
                        g = f[0],
                        b = f[1],
                        h = (0, x.useState)(!1),
                        N = (0, r.A)(h, 2),
                        k = N[0],
                        C = N[1],
                        A = (0, E.tA)({
                            productId: a
                        }, {
                            skip: null === a
                        }),
                        D = A.data,
                        S = A.isFetching,
                        T = (0, E.lY)(),
                        j = (0, r.A)(T, 2),
                        F = j[0],
                        M = j[1],
                        L = M.isLoading,
                        $ = M.isError,
                        U = M.error,
                        V = M.reset,
                        z = function() {
                            b(1), C(!1), c(), V()
                        },
                        B = (null == D ? void 0 : D.parentListings.length) > 0,
                        R = function() {
                            var e = (0, n.A)(d().mark(function e() {
                                var t, l;
                                return d().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, F({
                                                productId: a,
                                                ownerId: null == w ? void 0 : w.id
                                            }).unwrap();
                                        case 3:
                                            o((0, u.X)({
                                                title: "Product deleted",
                                                icon: s.SG,
                                                message: "".concat(D.displayName, " has been deleted."),
                                                color: "success",
                                                timeout: 3e3
                                            })), z(), e.next = 12;
                                            break;
                                        case 7:
                                            return e.prev = 7, e.t0 = e.catch(0), console.error(e.t0), o((0, u.X)({
                                                title: "Failed to delete product",
                                                icon: i.zp,
                                                message: null !== (t = null === (l = e.t0.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== t ? t : "Something went wrong",
                                                color: "danger",
                                                timeout: 9e3
                                            })), e.abrupt("return");
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [0, 7]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        _ = function() {
                            return x.createElement(x.Fragment, null, x.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, x.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-w-fit"
                            }, x.createElement("h2", {
                                className: "heading tw-inline-block tw-w-full tw-text-base"
                            }, "Are you sure you want to delete this product? This is NOT reversible."), (null == D ? void 0 : D.displayName) && x.createElement("p", {
                                className: "tw-text-light-grey tw-text-base tw-m-0"
                            }, D.displayName))), x.createElement("div", {
                                className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap tw-w-full tw-gap-2"
                            }, x.createElement("div", {
                                className: "tw-w-1/2"
                            }, x.createElement(m.$n, {
                                className: "tw-rounded-md tw-text-white tw-h-9 tw-border-0 tw-bg-button-bg-grey",
                                onClick: z
                            }, "Cancel")), x.createElement("div", {
                                className: "tw-w-1/2"
                            }, x.createElement(m.$n, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-message-warning tw-mb-3 tw-text-white",
                                onClick: function() {
                                    b(2)
                                },
                                disabled: !1
                            }, "Delete Product"))))
                        },
                        Q = function() {
                            var e, t;
                            return x.createElement(x.Fragment, null, x.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, x.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-px-5 tw-w-full"
                            }, x.createElement(m.M2, {
                                icon: I.faTriangleExclamation,
                                size: "xl",
                                className: "tw-h-[72px] tw-mb-5"
                            }), x.createElement("h2", {
                                className: "heading tw-inline-block tw-w-full tw-text-base tw-text-center"
                            }, "Deleting this will revoke users access to content if they have paid for it."), x.createElement("p", {
                                className: " tw-text-base tw-m-0 tw-text-center tw-mb-9"
                            }, "If this action is intentional, you may proceed. However, ensure compliance with our", " ", x.createElement("a", {
                                href: "https://creators.vrchat.com/economy/guidelines",
                                target: "_blank",
                                rel: "noreferrer"
                            }, "Creator Economy guidelines"), " ", "to maintain trust and integrity within our community."), x.createElement("div", {
                                className: "tw-flex tw-items-center tw-gap-2"
                            }, x.createElement("input", {
                                id: "checked-checkbox",
                                type: "checkbox",
                                checked: k,
                                onChange: function() {
                                    return C(!k)
                                },
                                value: "acknowledge",
                                className: "tw-w-7 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-border-[#677079] tw-rounded focus:tw-ring-link-highlight tw-ring-offset-gray-800 focus:tw-ring-1"
                            }), x.createElement("label", {
                                for: "checked-checkbox",
                                className: "tw-text-sm tw-font-medium tw-text-white"
                            }, "I acknowledge that deleting this product will revoke access for existing users and confirm compliance with the Creator Economy guidelines."))), $ && x.createElement("div", {
                                className: "tw-w-full tw-text-red tw-text-center"
                            }, x.createElement("p", null, "Failed to delete product:"), x.createElement("code", {
                                className: "tw-text-red"
                            }, null !== (e = null === (t = U.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "".concat(a, " An error occurred")))), x.createElement("div", {
                                className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap tw-w-full tw-gap-2"
                            }, x.createElement("div", {
                                className: "sm:tw-w-1/2"
                            }, x.createElement(m.$n, {
                                className: "tw-rounded-md tw-text-white tw-h-9 tw-border-0 tw-bg-button-bg-grey",
                                onClick: z
                            }, "Cancel")), x.createElement("div", {
                                className: "sm:tw-w-1/2"
                            }, x.createElement(m.$n, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-message-warning tw-text-white disabled:tw-bg-button-bg-grey disabled:tw-text-placeholder-text",
                                onClick: R,
                                disabled: !k,
                                loading: L
                            }, "Delete"))))
                        },
                        X = function() {
                            return x.createElement(x.Fragment, null, x.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, x.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-w-full"
                            }, x.createElement(m.M2, {
                                icon: I.faTriangleExclamation,
                                size: "xl",
                                className: "tw-h-[72px] tw-mb-4"
                            }), x.createElement("p", {
                                className: " tw-text-base tw-m-0 tw-text-center tw-mb-2"
                            }, "This product is included in the following listings:"), x.createElement("div", {
                                className: "tw-w-full tw-flex tw-flex-col tw-items-center tw-gap-2 tw-mb-9"
                            }, null == D ? void 0 : D.parentListings.map(function(e) {
                                return x.createElement(O.A, {
                                    listingId: e
                                })
                            })), x.createElement("h2", {
                                className: "heading tw-inline-block tw-w-full tw-text-base tw-text-center"
                            }, "Please remove this item from these listings prior to deleting this item."), "avatar" === (null == D ? void 0 : D.productType) && x.createElement("p", {
                                className: "tw-text-orange tw-text-base tw-text-center tw-mb-2"
                            }, "Note: If a listing has already been purchased, you won't be able to remove the product from it, and deletion won't be possible."))), x.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-gap-2 tw-items-center"
                            }, x.createElement("div", {
                                className: "tw-w-1/2"
                            }, x.createElement(m.$n, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-button-bgtw-text-highlight",
                                onClick: z,
                                loading: L
                            }, "Understood"))))
                        };
                    return x.createElement("div", {
                        className: "tw-flex tw-flex-col tw-w-full tw-h-full tw-gap-5"
                    }, function() {
                        if (S) return x.createElement("div", {
                            className: "tw-px-3 tw-pb-4 tw-pt-5 tw-flex tw-flex-col tw-w-full tw-items-center"
                        }, x.createElement(m.M2, {
                            icon: P.z1,
                            spin: !0,
                            size: "2x"
                        }));
                        if (B) return X();
                        switch (g) {
                            case 1:
                                return _();
                            case 2:
                                return Q();
                            default:
                                return null
                        }
                    }())
                };
            T.propTypes = {
                productId: S().string.isRequired,
                onCancelCallback: S().func
            };
            const j = T;
            var F = a(95583),
                M = a(56535);
            const L = function(e) {
                var t, a = e.productData,
                    l = e.onCloseCallback,
                    n = void 0 === l ? function() {} : l,
                    c = (0, x.useState)("info"),
                    i = (0, r.A)(c, 2),
                    s = i[0],
                    o = i[1],
                    d = (0, F.RR)({
                        avatarId: a.avatarId
                    }, {
                        skip: !a.avatarId
                    }),
                    u = d.data,
                    w = (d.isFetching, d.isError, d.error, null !== (t = null == a ? void 0 : a.parentListings) && void 0 !== t ? t : []),
                    p = (0, x.useCallback)(function(e) {
                        o(e)
                    }, []);
                return x.createElement("div", {
                    className: "tw-w-full"
                }, x.createElement(f.A, {
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
                }), (null == a ? void 0 : a.assetDisabled) && x.createElement(m.$T, {
                    type: "warn",
                    title: "This avatar is disabled."
                }, x.createElement("p", {
                    className: "tw-mb-0 tw-ml-6"
                }, "Existing buyers have lost access, and new purchases are temporarily disabled. Check your email inbox for instructions on how to proceed, or contact Support if you need further assistance.")), "info" === s && x.createElement("div", null, x.createElement("div", {
                    className: "tw-bg-[#000] tw-p-4 tw-rounded-md tw-mb-3"
                }, "Need to edit your avatar? Head over to ", x.createElement(N.N_, {
                    to: "/home/avatar/".concat(a.avatarId)
                }, "the avatar page"), " to make changes."), x.createElement(M.A, {
                    avatarData: u,
                    productType: "avatar"
                })), "listings" === s && x.createElement("div", {
                    className: "tw-gap-2 tw-w-full tw-grid tw-grid-cols-2 tw-mb-3"
                }, w.length > 0 && w.map(function(e) {
                    return x.createElement(O.A, {
                        key: e,
                        listingId: e,
                        showImage: !0
                    })
                }), 0 === w.length && x.createElement("p", null, "No listings associated with this product.")), x.createElement(m.$n, {
                    onClick: n,
                    containerClasses: "tw-w-full"
                }, "Done"))
            };
            var $ = a(75171),
                U = a.n($),
                V = function(e) {
                    e.isOpen;
                    var t = e.createdProduct,
                        a = void 0 === t ? null : t,
                        l = e.closeModalCallback,
                        n = void 0 === l ? function() {} : l,
                        r = e.updated,
                        c = void 0 !== r && r;
                    return null === a ? null : x.createElement("div", null, x.createElement("div", {
                        className: "tw-flex tw-min-h-full tw-items-end tw-justify-center tw-p-4 sm:tw-items-center sm:tw-p-0"
                    }, x.createElement("div", null, x.createElement("div", {
                        className: "tw-flex tw-flex-col tw-w-full tw-items-center"
                    }, x.createElement(m.Oo, {
                        alt: null == a ? void 0 : a.displayName,
                        imageId: (null == a ? void 0 : a.imageId) || (null == a ? void 0 : a.file) || null,
                        fallbackSrc: U(),
                        fitToCover: !0
                    }), x.createElement("h2", {
                        className: "heading tw-mt-5"
                    }, "Product ", c ? "Updated" : "Created", "!"), x.createElement("p", {
                        className: "tw-text-light-grey tw-text-center tw-mb-8 sm:tw-w-3/4"
                    }, "Your udon product is all set! Continue in your Unity project. You will see this product available in your Udon products manager.")), x.createElement("div", {
                        className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap sm:tw-px-6 tw-w-full tw-gap-2"
                    }, x.createElement("div", {
                        className: "sm:tw-w-1/2"
                    }, x.createElement(N.N_, {
                        to: "https://creators.vrchat.com/economy/sdk/",
                        target: "_blank"
                    }, x.createElement(m.$n, {
                        className: "tw-rounded-md tw-text-white tw-border-0 tw-bg-button-bg-grey",
                        onClick: n
                    }, "View Docs"))), x.createElement("div", {
                        className: "sm:tw-w-1/2"
                    }, x.createElement(m.$n, {
                        className: "tw-rounded-md tw-border-0 tw-mb-3 disabled:tw-bg-button-bg-grey disabled:tw-text-placeholder-text",
                        onClick: n
                    }, "Done"))))))
                };
            V.propTypes = {
                isOpen: S().bool,
                createdProduct: S().object.isRequired,
                closeModalCallback: S().func
            };
            const z = V;

            function B(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    t && (l = l.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), a.push.apply(a, l)
                }
                return a
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? B(Object(a), !0).forEach(function(t) {
                        (0, l.A)(e, t, a[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : B(Object(a)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    })
                }
                return e
            }
            var _ = (0, x.lazy)(function() {
                    return a.e(3754).then(a.bind(a, 73754))
                }),
                Q = (0, x.lazy)(function() {
                    return a.e(6811).then(a.bind(a, 6811))
                });
            const X = function() {
                var e, t = (0, v.p$)().data,
                    a = (0, y.wA)(),
                    l = (0, w.DF)().showContentViolationModal,
                    o = (0, y.d4)(function(e) {
                        return e.productFlow
                    }).currentTitle,
                    I = (0, N.ok)(),
                    P = (0, r.A)(I, 2),
                    D = P[0],
                    S = (P[1], (0, x.useState)("")),
                    O = (0, r.A)(S, 2),
                    T = O[0],
                    F = (O[1], (0, k.g)()),
                    M = F.paginationPage,
                    $ = F.productTab,
                    U = M ? Number(M) : 1,
                    V = (0, x.useState)(D.get("sortBy") || null),
                    B = (0, r.A)(V, 2),
                    X = B[0],
                    H = B[1],
                    W = (0, x.useState)(D.get("orderBy") || "descending"),
                    Y = (0, r.A)(W, 2),
                    q = Y[0],
                    G = Y[1],
                    K = x.useState({}),
                    J = (0, r.A)(K, 2),
                    Z = J[0],
                    ee = J[1],
                    te = x.useState(!1),
                    ae = (0, r.A)(te, 2),
                    le = ae[0],
                    ne = ae[1],
                    re = x.useState(!1),
                    ce = (0, r.A)(re, 2),
                    ie = ce[0],
                    se = ce[1],
                    oe = x.useState(!1),
                    de = (0, r.A)(oe, 2),
                    ue = de[0],
                    me = de[1],
                    we = x.useState(null),
                    pe = (0, r.A)(we, 2),
                    fe = pe[0],
                    ge = pe[1],
                    be = x.useState(null),
                    ve = (0, r.A)(be, 2),
                    Ee = ve[0],
                    he = ve[1],
                    xe = x.useState(!1),
                    ye = (0, r.A)(xe, 2),
                    Ne = (ye[0], ye[1]),
                    ke = (0, b.A)(T),
                    Ce = ((0, x.useMemo)(function() {
                        return {
                            sellerId: t.id,
                            n: 50,
                            pageValue: U
                        }
                    }, [D, ke, q, X, U]), (0, E.Q$)()),
                    Ae = (0, r.A)(Ce, 2),
                    Ie = Ae[0],
                    Pe = Ae[1],
                    De = (Pe.isSuccess, Pe.isLoading, Pe.isError, Pe.error, (0, E.vM)()),
                    Se = (0, r.A)(De, 2),
                    Oe = Se[0],
                    Te = Se[1],
                    je = (Te.isSuccess, Te.isLoading, Te.isError, Te.error, function(e) {
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
                    Fe = function() {
                        ne(!1), ee({}), se(!1), ge(null), me(!1), Ne(!1), a((0, h.f6)())
                    },
                    Me = function() {
                        var e = (0, n.A)(d().mark(function e(t) {
                            var n, r, c, o, m, w, p, f, g, b, v;
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.productData, r = void 0 === n ? {} : n, c = t.isEditing, o = void 0 !== c && c, m = t.image, w = void 0 === m ? void 0 : m, p = t.duplicate, f = void 0 !== p && p, g = function() {
                                                a((0, u.X)({
                                                    title: "Product ".concat(o ? "updated" : "created", " successfully!"),
                                                    icon: s.SG,
                                                    message: "Your product has been ".concat(o ? "updated" : "created", " successfully!"),
                                                    color: "success",
                                                    timeout: 3e3
                                                })), ee({
                                                    isEditing: !1,
                                                    isCreating: !1
                                                }), f || (a((0, h.Qt)()), ge(r), se(!0), me(o))
                                            }, e.prev = 2, !o) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 6, Oe(R(R({
                                            productId: r.id
                                        }, null !== w ? {
                                            file: w,
                                            tag: "product"
                                        } : {}), r)).unwrap();
                                    case 6:
                                        return e.abrupt("return", g());
                                    case 7:
                                        return e.next = 9, Ie(R(R({}, null !== w ? {
                                            file: w,
                                            tag: "product"
                                        } : {}), r)).unwrap();
                                    case 9:
                                        return e.abrupt("return", g());
                                    case 12:
                                        if (e.prev = 12, e.t0 = e.catch(2), console.log("error", e.t0), !l({
                                                error: e.t0
                                            })) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 17:
                                        a((0, u.X)({
                                            title: "Failed to ".concat(o ? "update" : "create", " product!"),
                                            icon: i.zp,
                                            message: null !== (b = null === (v = e.t0.data) || void 0 === v || null === (v = v.error) || void 0 === v ? void 0 : v.message) && void 0 !== b ? b : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [2, 12]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Le = (0, x.useCallback)(function(e) {
                        return X === e
                    }, [X]),
                    $e = function() {
                        je({
                            title: "Create Product",
                            data: void 0,
                            isCreating: !0
                        })
                    },
                    Ue = function() {
                        var e = (0, n.A)(d().mark(function e(t) {
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, a((0, h.xl)(t));
                                    case 2:
                                        je({
                                            title: "Edit Product",
                                            data: t,
                                            isEditing: !0
                                        });
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return x.createElement(x.Fragment, null, x.createElement(m.Qc, null, "My Products"), x.createElement(m.fI, null, x.createElement(f.A, {
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
                })), x.createElement(m.fI, {
                    className: "tw-justify-between tw-gap-x-5 tw-gap-y-3 tw-flex-wrap"
                }, x.createElement("div", null), x.createElement(m.$n, {
                    "aria-label": "Create Product",
                    className: "tw-px-2",
                    onClick: $e
                }, x.createElement(m.M2, {
                    icon: c.QL,
                    size: "1x"
                }), " Create Product")), x.createElement(x.Suspense, {
                    fallback: x.createElement(p.A, {
                        loading: !0
                    })
                }, !$ && x.createElement(_, {
                    currentUser: t,
                    searchValue: T,
                    currentPage: U,
                    sortBy: X,
                    orderBy: q,
                    editProductCallback: Ue,
                    deleteProductCallback: function(e) {
                        je({
                            title: "Delete Product",
                            data: e,
                            isDeleting: !0
                        })
                    },
                    viewAvatarDetailsCallback: function(e) {
                        he(e), Ne(!0), je({
                            title: "Product Views",
                            data: e,
                            isViewingAvatarDetails: !0
                        })
                    },
                    createProductCallback: $e,
                    duplicateProductCallback: function(e) {
                        var t, a = e.displayName,
                            l = e.description,
                            n = e.imageId,
                            r = e.productType,
                            c = e.useForSubscriberList,
                            i = e.avatarId;
                        if (r === g.Wd.UDON) {
                            var s = R({
                                displayName: "".concat(a, "(Copy)"),
                                tags: null !== (t = e.tags) && void 0 !== t ? t : [],
                                description: l,
                                imageId: n,
                                productType: r,
                                avatarId: i
                            }, i ? {} : {
                                useForSubscriberList: c
                            });
                            Me({
                                productData: s,
                                isEditing: !1,
                                duplicate: !0
                            })
                        }
                    },
                    onSortByChange: function(e) {
                        return function(e) {
                            return Le(e) ? G("descending" === q ? "ascending" : "descending") : (H(e), G("ascending"))
                        }(e)
                    }
                }), "moderation" === $ && x.createElement(Q, {
                    sortBy: X,
                    orderBy: q,
                    currentUser: t,
                    currentPage: U
                })), x.createElement(m.aF, {
                    title: o || Z.title,
                    onClose: Fe,
                    isVisible: le,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: "auto",
                    disableBackdropClick: !0,
                    className: "tw-bg-black"
                }, le && Z.isCreating && x.createElement(C.A, {
                    onClose: Fe
                }), le && Z.isEditing && x.createElement(A.default, {
                    product: Z.data,
                    onClose: Fe,
                    isEditing: !0,
                    onSubmit: Me,
                    user: t
                }), le && ie && x.createElement(z, {
                    isOpen: ie,
                    createdProduct: fe,
                    updated: ue,
                    closeModalCallback: Fe
                }), le && Z.isDeleting && x.createElement(j, {
                    productId: null === (e = Z.data) || void 0 === e ? void 0 : e.id,
                    onCancelCallback: Fe
                }), le && Z.isViewingAvatarDetails && x.createElement(L, {
                    productData: Ee,
                    onCloseCallback: Fe
                })))
            }
        },
        56535(e, t, a) {
            a.d(t, {
                A: () => b
            });
            var l = a(10467),
                n = a(67256),
                r = a(6913),
                c = a(42217),
                i = a(54756),
                s = a.n(i),
                o = a(96540),
                d = a(6376),
                u = a(65950),
                m = a(71661),
                w = a(31069),
                p = a(92737),
                f = a(91069),
                g = new RegExp("^".concat(p.w.AUTHOR));
            const b = function(e) {
                var t, a, i, b, v, E = e.avatarData,
                    h = void 0 === E ? null : E,
                    x = e.productType;
                if (null === h) return null;
                var y = (0, d.wA)(),
                    N = o.useMemo(function() {
                        return null == h ? void 0 : h.tags.filter(function(e) {
                            return e.startsWith(p.w.AUTHOR)
                        }).map(function(e) {
                            return e.replace(g, "")
                        })
                    }, [null == h ? void 0 : h.tags]),
                    k = function() {
                        var e = (0, l.A)(s().mark(function e(t, a) {
                            return s().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.stopPropagation(), e.next = 3, (0, f.Dk)(a)();
                                    case 3:
                                        y((0, u.X)({
                                            title: "Copied product ID",
                                            icon: c.SG,
                                            message: "Product ID Copied!",
                                            color: "success",
                                            timeout: 3e3
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t, a) {
                            return e.apply(this, arguments)
                        }
                    }();
                return o.createElement("form", {
                    className: "tw-w-full"
                }, o.createElement(m.fv, {
                    className: "tw-mb-8"
                }, o.createElement("h2", {
                    className: "tw-text-lg tw-mb-3"
                }, "Avatar Detail"), o.createElement(m.fI, {
                    className: "tw-gap-5 tw-mb-5 tw-flex-col md:tw-flex-row"
                }, o.createElement(m.fv, null, o.createElement(m.Oo, {
                    imageId: h.thumbnailImageUrl,
                    fitToCover: !0,
                    alt: "Product Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                })), o.createElement(m.fv, {
                    className: "tw-flex-1 tw-gap-5"
                }, o.createElement(m.fv, null, o.createElement("label", {
                    htmlFor: "name"
                }, "Product Name"), o.createElement(m.pd, {
                    type: "text",
                    inputStyle: {
                        margin: "8px 0"
                    },
                    maxLength: 64,
                    id: "name",
                    value: h.name,
                    disabled: !0
                })), o.createElement(m.fI, {
                    className: "tw-gap-2"
                }, o.createElement(m.fv, {
                    className: "tw-flex-1"
                }, o.createElement("p", {
                    className: "tw-mb-2"
                }, "Primary Style"), !(null !== (t = h.styles) && void 0 !== t && t.primary) && o.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No primary style!"), (null === (a = h.styles) || void 0 === a ? void 0 : a.primary) && o.createElement("div", {
                    className: "tw-mb-0 tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block tw-w-fit"
                }, o.createElement("span", null, h.styles.primary))), o.createElement(m.fv, {
                    className: "tw-flex-1"
                }, o.createElement("p", {
                    className: "tw-mb-2"
                }, "Secondary Style"), !(null !== (i = h.styles) && void 0 !== i && i.secondary) && o.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No secondary style!"), (null === (b = h.styles) || void 0 === b ? void 0 : b.secondary) && o.createElement("div", {
                    className: "tw-mb-0 tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block tw-w-fit"
                }, h.styles.secondary))), o.createElement(m.fv, null, o.createElement("p", {
                    className: "tw-mb-2"
                }, "Tags"), o.createElement(m.fI, {
                    className: "tw-flex-wrap tw-gap-2"
                }, 0 === (null == N ? void 0 : N.length) && o.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No tags!"), null == N ? void 0 : N.map(function(e) {
                    return o.createElement("div", {
                        key: e,
                        className: "tw-leading-none tw-max-h-[50px] tw-break-all tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block"
                    }, o.createElement("span", null, e))
                }))))), o.createElement(m.fv, {
                    className: "tw-gap-5"
                }, h.productId && o.createElement(m.fv, {
                    className: "tw-mb-5"
                }, o.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2 tw-flex tw-flex-row"
                }, "Product ID", o.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1"
                }, o.createElement(m.M2, {
                    icon: r.iW,
                    className: "tw-text-light-grey"
                }), o.createElement("span", {
                    className: "tw-pointer-events-none tw-z-50 tw-absolute tw--top-14 tw--left-20 sm:tw--top-7 sm:tw-left-5 tw-w-[240px] tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50 tw-opacity-0 tw-shadow tw-transition-opacity group-hover:tw-opacity-100"
                }, "This unique ID links your Udon product to the VRChat Worlds SDK, allowing you to track ownership within your world."))), o.createElement(m.fI, {
                    className: "tw-gap-2"
                }, o.createElement(m.pd, {
                    type: "text",
                    id: "id",
                    value: h.productId,
                    disabled: !0,
                    className: "tw-flex-1"
                }), o.createElement(m.$n, {
                    type: "button",
                    className: "tw-w-[40px] tw-h-[40px]",
                    onClick: function(e) {
                        return k(e, h.productId)
                    }
                }, o.createElement(m.M2, {
                    icon: n.jP
                })))), x && o.createElement(m.fv, null, o.createElement("label", {
                    htmlFor: "price",
                    className: "tw-mb-2"
                }, "Product Type"), o.createElement(m.fI, {
                    className: "tw-gap-3"
                }, o.createElement("div", {
                    className: "tw-rounded-full tw-w-[90px] tw-h-[90px] tw-bg-[#303135]"
                }, o.createElement("img", {
                    alt: "udon logo",
                    width: "90",
                    src: w.si[x].image
                })), o.createElement(m.fv, {
                    className: "tw-items-center tw-justify-center"
                }, o.createElement("p", {
                    className: "tw-mb-0"
                }, o.createElement("strong", null, w.si[x].label), o.createElement("br", null), w.si[x].text, o.createElement("br", null), o.createElement("a", {
                    href: w.si[x].redirect,
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn More"))))), o.createElement(m.fv, null, o.createElement("label", {
                    htmlFor: "description"
                }, "Description"), o.createElement(m.TM, {
                    disabled: !0,
                    type: "textarea",
                    id: "description",
                    inputClassName: "tw-h-[120px] tw-my-2",
                    maxLength: 256,
                    value: h.description
                })), o.createElement(m.fv, null, o.createElement("label", {
                    htmlFor: "acknowledgements"
                }, "Acknowledgements"), o.createElement(m.TM, {
                    disabled: !0,
                    type: "textarea",
                    id: "acknowledgements",
                    inputClassName: "tw-h-[90px] tw-my-2",
                    maxLength: 256,
                    value: null !== (v = null == h ? void 0 : h.acknowledgements) && void 0 !== v ? v : ""
                })))))
            }
        }
    }
]);
//# sourceMappingURL=b99df619b5343263d84078561739bace06d5edcebc44721ee3df3cf125d91a02.js.map