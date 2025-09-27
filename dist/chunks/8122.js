"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8122], {
        38122: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => q
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
                m = a(96985),
                w = a(98185),
                p = a(72998),
                g = a(95896),
                f = a(76176),
                b = a(22202),
                v = a(67978),
                E = a(43683),
                x = a(67294),
                h = a(32981),
                y = a(79655),
                N = a(89250),
                k = a(19637),
                C = a(72621),
                I = a(53359),
                P = a(92332),
                D = a(45697),
                Z = a.n(D),
                S = a(44488),
                O = function(e) {
                    var t = e.productId,
                        a = void 0 === t ? null : t,
                        l = e.onCancelCallback,
                        c = void 0 === l ? function() {} : l;
                    if (null === a) return null;
                    var o = (0, h.I0)(),
                        w = (0, b.IB)().data,
                        p = (0, x.useState)(1),
                        g = (0, r.Z)(p, 2),
                        f = g[0],
                        E = g[1],
                        y = (0, x.useState)(!1),
                        N = (0, r.Z)(y, 2),
                        k = N[0],
                        C = N[1],
                        D = (0, v.lZ)({
                            productId: a
                        }, {
                            skip: null === a
                        }),
                        Z = D.data,
                        O = D.isFetching,
                        j = (0, v.xq)(),
                        T = (0, r.Z)(j, 2),
                        X = T[0],
                        z = T[1],
                        F = z.isLoading,
                        L = z.isError,
                        U = z.error,
                        A = z.reset,
                        J = function() {
                            E(1), C(!1), c(), A()
                        },
                        B = (null == Z ? void 0 : Z.parentListings.length) > 0,
                        V = function() {
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
                            return x.createElement(x.Fragment, null, x.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, x.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-w-fit"
                            }, x.createElement("h2", {
                                className: "heading tw-inline-block tw-w-full tw-text-base"
                            }, "Are you sure you want to delete this product? This is NOT reversible."), (null == Z ? void 0 : Z.displayName) && x.createElement("p", {
                                className: "tw-text-light-grey tw-text-base tw-m-0"
                            }, Z.displayName))), x.createElement("div", {
                                className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap tw-w-full tw-gap-2"
                            }, x.createElement("div", {
                                className: "tw-w-1/2"
                            }, x.createElement(m.zx, {
                                className: "tw-rounded-md tw-text-white tw-h-9 tw-border-0 tw-bg-button-bg-grey",
                                onClick: J
                            }, "Cancel")), x.createElement("div", {
                                className: "tw-w-1/2"
                            }, x.createElement(m.zx, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-message-warning tw-mb-3 tw-text-white",
                                onClick: function() {
                                    E(2)
                                },
                                disabled: !1
                            }, "Delete Product"))))
                        },
                        q = function() {
                            var e, t;
                            return x.createElement(x.Fragment, null, x.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, x.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-px-5 tw-w-full"
                            }, x.createElement(m.$1, {
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
                            }, "I acknowledge that deleting this product will revoke access for existing users and confirm compliance with the Creator Economy guidelines."))), L && x.createElement("div", {
                                className: "tw-w-full tw-text-red tw-text-center"
                            }, x.createElement("p", null, "Failed to delete product:"), x.createElement("code", {
                                className: "tw-text-red"
                            }, null !== (e = null === (t = U.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "".concat(a, " An error occurred")))), x.createElement("div", {
                                className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap tw-w-full tw-gap-2"
                            }, x.createElement("div", {
                                className: "sm:tw-w-1/2"
                            }, x.createElement(m.zx, {
                                className: "tw-rounded-md tw-text-white tw-h-9 tw-border-0 tw-bg-button-bg-grey",
                                onClick: J
                            }, "Cancel")), x.createElement("div", {
                                className: "sm:tw-w-1/2"
                            }, x.createElement(m.zx, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-message-warning tw-text-white disabled:tw-bg-button-bg-grey disabled:tw-text-placeholder-text",
                                onClick: V,
                                disabled: !k,
                                loading: F
                            }, "Delete"))))
                        },
                        R = function() {
                            return x.createElement(x.Fragment, null, x.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, x.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-w-full"
                            }, x.createElement(m.$1, {
                                icon: I.faTriangleExclamation,
                                size: "xl",
                                className: "tw-h-[72px] tw-mb-4"
                            }), x.createElement("p", {
                                className: " tw-text-base tw-m-0 tw-text-center tw-mb-2"
                            }, "This product is included in the following listings:"), x.createElement("div", {
                                className: "tw-w-full tw-flex tw-flex-col tw-items-center tw-gap-2 tw-mb-9"
                            }, null == Z ? void 0 : Z.parentListings.map((function(e) {
                                return x.createElement(S.Z, {
                                    listingId: e
                                })
                            }))), x.createElement("h2", {
                                className: "heading tw-inline-block tw-w-full tw-text-base tw-text-center"
                            }, "Please remove this item from these listings prior to deleting this item."), "avatar" === (null == Z ? void 0 : Z.productType) && x.createElement("p", {
                                className: "tw-text-orange tw-text-base tw-text-center tw-mb-2"
                            }, "Note: If a listing has already been purchased, you won't be able to remove the product from it, and deletion won't be possible."))), x.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-gap-2 tw-items-center"
                            }, x.createElement("div", {
                                className: "tw-w-1/2"
                            }, x.createElement(m.zx, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-button-bgtw-text-highlight",
                                onClick: J,
                                loading: F
                            }, "Understood"))))
                        };
                    return x.createElement("div", {
                        className: "tw-flex tw-flex-col tw-w-full tw-h-full tw-gap-5"
                    }, function() {
                        if (O) return x.createElement("div", {
                            className: "tw-px-3 tw-pb-4 tw-pt-5 tw-flex tw-flex-col tw-w-full tw-items-center"
                        }, x.createElement(m.$1, {
                            icon: P.LM,
                            spin: !0,
                            size: "2x"
                        }));
                        if (B) return R();
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
            O.propTypes = {
                productId: Z().string.isRequired,
                onCancelCallback: Z().func
            };
            const j = O;
            var T = a(21538),
                X = a(44869);
            const z = function(e) {
                var t, a = e.productData,
                    l = e.onCloseCallback,
                    n = void 0 === l ? function() {} : l,
                    c = (0, x.useState)("info"),
                    i = (0, r.Z)(c, 2),
                    s = i[0],
                    o = i[1],
                    d = (0, T.LQ)({
                        avatarId: a.avatarId
                    }, {
                        skip: !a.avatarId
                    }),
                    u = d.data,
                    w = (d.isFetching, d.isError, d.error, null !== (t = null == a ? void 0 : a.parentListings) && void 0 !== t ? t : []),
                    g = (0, x.useCallback)((function(e) {
                        o(e)
                    }), []);
                return x.createElement("div", {
                    className: "tw-w-full"
                }, x.createElement(p.Z, {
                    className: "tw--ml-2 tw--mt-4",
                    onChange: g,
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
                }), (null == a ? void 0 : a.assetDisabled) && x.createElement(m.qX, {
                    type: "warn",
                    title: "This avatar is disabled."
                }, x.createElement("p", {
                    className: "tw-mb-0 tw-ml-6"
                }, "Existing buyers have lost access, and new purchases are temporarily disabled. Check your email inbox for instructions on how to proceed, or contact Support if you need further assistance.")), "info" === s && x.createElement("div", null, x.createElement("div", {
                    className: "tw-bg-[#000] tw-p-4 tw-rounded-md tw-mb-3"
                }, "Need to edit your avatar? Head over to ", x.createElement(y.rU, {
                    to: "/home/avatar/".concat(a.avatarId)
                }, "the avatar page"), " to make changes."), x.createElement(X.Z, {
                    avatarData: u,
                    productType: "avatar"
                })), "listings" === s && x.createElement("div", {
                    className: "tw-gap-2 tw-w-full tw-grid tw-grid-cols-2 tw-mb-3"
                }, w.length > 0 && w.map((function(e) {
                    return x.createElement(S.Z, {
                        key: e,
                        listingId: e,
                        showImage: !0
                    })
                })), 0 === w.length && x.createElement("p", null, "No listings associated with this product.")), x.createElement(m.zx, {
                    onClick: n,
                    containerClasses: "tw-w-full"
                }, "Done"))
            };
            var F = a(51806),
                L = a.n(F),
                U = function(e) {
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
                    }, x.createElement(m.pw, {
                        alt: null == a ? void 0 : a.displayName,
                        imageId: (null == a ? void 0 : a.imageId) || (null == a ? void 0 : a.file) || null,
                        fallbackSrc: L(),
                        fitToCover: !0
                    }), x.createElement("h2", {
                        className: "heading tw-mt-5"
                    }, "Product ", c ? "Updated" : "Created", "!"), x.createElement("p", {
                        className: "tw-text-light-grey tw-text-center tw-mb-8 sm:tw-w-3/4"
                    }, "Your udon product is all set! Continue in your Unity project. You will see this product available in your Udon products manager.")), x.createElement("div", {
                        className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap sm:tw-px-6 tw-w-full tw-gap-2"
                    }, x.createElement("div", {
                        className: "sm:tw-w-1/2"
                    }, x.createElement(y.rU, {
                        to: "https://creators.vrchat.com/economy/sdk/",
                        target: "_blank"
                    }, x.createElement(m.zx, {
                        className: "tw-rounded-md tw-text-white tw-border-0 tw-bg-button-bg-grey",
                        onClick: n
                    }, "View Docs"))), x.createElement("div", {
                        className: "sm:tw-w-1/2"
                    }, x.createElement(m.zx, {
                        className: "tw-rounded-md tw-border-0 tw-mb-3 disabled:tw-bg-button-bg-grey disabled:tw-text-placeholder-text",
                        onClick: n
                    }, "Done"))))))
                };
            U.propTypes = {
                isOpen: Z().bool,
                createdProduct: Z().object.isRequired,
                closeModalCallback: Z().func
            };
            const A = U;

            function J(e, t) {
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
                    t % 2 ? J(Object(a), !0).forEach((function(t) {
                        (0, l.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : J(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var V = (0, x.lazy)((function() {
                    return a.e(2073).then(a.bind(a, 2073))
                })),
                M = (0, x.lazy)((function() {
                    return a.e(7069).then(a.bind(a, 17069))
                }));
            const q = function() {
                var e, t = (0, b.IB)().data,
                    a = (0, h.I0)(),
                    l = (0, h.v9)((function(e) {
                        return e.productFlow
                    })).currentTitle,
                    o = (0, y.lr)(),
                    I = (0, r.Z)(o, 2),
                    P = I[0],
                    D = (I[1], (0, x.useState)("")),
                    Z = (0, r.Z)(D, 2),
                    S = Z[0],
                    O = (Z[1], (0, N.UO)()),
                    T = O.paginationPage,
                    X = O.productTab,
                    F = T ? Number(T) : 1,
                    L = (0, x.useState)(P.get("sortBy") || null),
                    U = (0, r.Z)(L, 2),
                    J = U[0],
                    q = U[1],
                    R = (0, x.useState)(P.get("orderBy") || "descending"),
                    $ = (0, r.Z)(R, 2),
                    H = $[0],
                    _ = $[1],
                    K = x.useState({}),
                    Y = (0, r.Z)(K, 2),
                    Q = Y[0],
                    W = Y[1],
                    G = x.useState(!1),
                    ee = (0, r.Z)(G, 2),
                    te = ee[0],
                    ae = ee[1],
                    le = x.useState(!1),
                    ne = (0, r.Z)(le, 2),
                    re = ne[0],
                    ce = ne[1],
                    ie = x.useState(!1),
                    se = (0, r.Z)(ie, 2),
                    oe = se[0],
                    de = se[1],
                    ue = x.useState(null),
                    me = (0, r.Z)(ue, 2),
                    we = me[0],
                    pe = me[1],
                    ge = x.useState(null),
                    fe = (0, r.Z)(ge, 2),
                    be = fe[0],
                    ve = fe[1],
                    Ee = x.useState(!1),
                    xe = (0, r.Z)(Ee, 2),
                    he = (xe[0], xe[1]),
                    ye = (0, f.Z)(S),
                    Ne = ((0, x.useMemo)((function() {
                        return {
                            sellerId: t.id,
                            n: 50,
                            pageValue: F
                        }
                    }), [P, ye, H, J, F]), (0, v.qX)()),
                    ke = (0, r.Z)(Ne, 2),
                    Ce = ke[0],
                    Ie = ke[1],
                    Pe = (Ie.isSuccess, Ie.isLoading, Ie.isError, Ie.error, (0, v.wE)()),
                    De = (0, r.Z)(Pe, 2),
                    Ze = De[0],
                    Se = De[1],
                    Oe = (Se.isSuccess, Se.isLoading, Se.isError, Se.error, function(e) {
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
                        ae(!0), W({
                            title: a,
                            data: n,
                            isEditing: c,
                            isCreating: s,
                            isDeleting: d,
                            isViewingAvatarDetails: m
                        })
                    }),
                    je = function() {
                        ae(!1), W({}), ce(!1), pe(null), de(!1), he(!1), a((0, E.bi)())
                    },
                    Te = function() {
                        var e = (0, n.Z)(d().mark((function e(t) {
                            var l, n, r, c, o, m, w, p, g, f, b;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (l = t.productData, n = void 0 === l ? {} : l, r = t.isEditing, c = void 0 !== r && r, o = t.image, m = void 0 === o ? void 0 : o, w = t.duplicate, p = void 0 !== w && w, g = function() {
                                                a((0, u.d)({
                                                    title: "Product ".concat(c ? "updated" : "created", " successfully!"),
                                                    icon: s.f8,
                                                    message: "Your product has been ".concat(c ? "updated" : "created", " successfully!"),
                                                    color: "success",
                                                    timeout: 3e3
                                                })), W({
                                                    isEditing: !1,
                                                    isCreating: !1
                                                }), p || (a((0, E.dn)()), pe(n), ce(!0), de(c))
                                            }, e.prev = 2, !c) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 6, Ze(B(B({
                                            productId: n.id
                                        }, null !== m ? {
                                            file: m,
                                            tag: "product"
                                        } : {}), n)).unwrap();
                                    case 6:
                                        return e.abrupt("return", g());
                                    case 7:
                                        return e.next = 9, Ce(B(B({}, null !== m ? {
                                            file: m,
                                            tag: "product"
                                        } : {}), n)).unwrap();
                                    case 9:
                                        return e.abrupt("return", g());
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(2), console.log("error", e.t0), a((0, u.d)({
                                            title: "Failed to ".concat(c ? "update" : "create", " product!"),
                                            icon: i.eH,
                                            message: null !== (f = null === (b = e.t0.data) || void 0 === b || null === (b = b.error) || void 0 === b ? void 0 : b.message) && void 0 !== f ? f : "Something went wrong",
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
                    Xe = (0, x.useCallback)((function(e) {
                        return J === e
                    }), [J]),
                    ze = function() {
                        Oe({
                            title: "Create Product",
                            data: void 0,
                            isCreating: !0
                        })
                    },
                    Fe = function() {
                        var e = (0, n.Z)(d().mark((function e(t) {
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, a((0, E.IR)(t));
                                    case 2:
                                        Oe({
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
                return x.createElement(x.Fragment, null, x.createElement(m.$4, null, "My Products"), x.createElement(m.X2, null, x.createElement(p.Z, {
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
                })), x.createElement(m.X2, {
                    className: "tw-justify-between tw-gap-x-5 tw-gap-y-3 tw-flex-wrap"
                }, x.createElement("div", null), x.createElement(m.zx, {
                    "aria-label": "Create Product",
                    className: "tw-px-2",
                    onClick: ze
                }, x.createElement(m.$1, {
                    icon: c.r8,
                    size: "1x"
                }), " Create Product")), x.createElement(x.Suspense, {
                    fallback: x.createElement(w.Z, {
                        loading: !0
                    })
                }, !X && x.createElement(V, {
                    currentUser: t,
                    searchValue: S,
                    currentPage: F,
                    sortBy: J,
                    orderBy: H,
                    editProductCallback: Fe,
                    deleteProductCallback: function(e) {
                        Oe({
                            title: "Delete Product",
                            data: e,
                            isDeleting: !0
                        })
                    },
                    viewAvatarDetailsCallback: function(e) {
                        ve(e), he(!0), Oe({
                            title: "Product Views",
                            data: e,
                            isViewingAvatarDetails: !0
                        })
                    },
                    createProductCallback: ze,
                    duplicateProductCallback: function(e) {
                        var t, a = e.displayName,
                            l = e.description,
                            n = e.imageId,
                            r = e.productType,
                            c = e.useForSubscriberList,
                            i = e.avatarId;
                        if (r === g.Pm.UDON) {
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
                            Te({
                                productData: s,
                                isEditing: !1,
                                duplicate: !0
                            })
                        }
                    },
                    onSortByChange: function(e) {
                        return function(e) {
                            return Xe(e) ? _("descending" === H ? "ascending" : "descending") : (q(e), _("ascending"))
                        }(e)
                    }
                }), "moderation" === X && x.createElement(M, {
                    sortBy: J,
                    orderBy: H,
                    currentUser: t,
                    currentPage: F
                })), x.createElement(m.u_, {
                    title: l || Q.title,
                    onClose: je,
                    isVisible: te,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: "auto",
                    disableBackdropClick: !0,
                    className: "tw-bg-black"
                }, te && Q.isCreating && x.createElement(k.Z, {
                    onClose: je
                }), te && Q.isEditing && x.createElement(C.default, {
                    product: Q.data,
                    onClose: je,
                    isEditing: !0,
                    onSubmit: Te,
                    user: t
                }), te && re && x.createElement(A, {
                    isOpen: re,
                    createdProduct: we,
                    updated: oe,
                    closeModalCallback: je
                }), te && Q.isDeleting && x.createElement(j, {
                    productId: null === (e = Q.data) || void 0 === e ? void 0 : e.id,
                    onCancelCallback: je
                }), te && Q.isViewingAvatarDetails && x.createElement(z, {
                    productData: be,
                    onCloseCallback: je
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
                m = a(96985),
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
                    className: "tw-gap-5 tw-mb-5 tw-flex-col sm:tw-flex-row"
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
//# sourceMappingURL=7c45005f92ec4a919df576e1f78fd3dfc1c21c84c64fb22e74dffb3337de98b4.js.map