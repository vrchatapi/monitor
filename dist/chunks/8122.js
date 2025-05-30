"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8122], {
        38122: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => M
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
                w = a(37463),
                m = a(98185),
                p = a(72998),
                g = a(76176),
                f = a(22202),
                b = a(67978),
                v = a(43683),
                E = a(67294),
                x = a(32981),
                h = a(79655),
                y = a(89250),
                N = a(19637),
                k = a(72621),
                C = a(53359),
                I = a(92332),
                P = a(45697),
                D = a.n(P),
                Z = a(44488),
                S = function(e) {
                    var t = e.productId,
                        a = void 0 === t ? null : t,
                        l = e.onCancelCallback,
                        c = void 0 === l ? function() {} : l;
                    if (null === a) return null;
                    var o = (0, x.I0)(),
                        m = (0, f.IB)().data,
                        p = (0, E.useState)(1),
                        g = (0, r.Z)(p, 2),
                        v = g[0],
                        h = g[1],
                        y = (0, E.useState)(!1),
                        N = (0, r.Z)(y, 2),
                        k = N[0],
                        P = N[1],
                        D = (0, b.lZ)({
                            productId: a
                        }, {
                            skip: null === a
                        }),
                        S = D.data,
                        j = D.isFetching,
                        O = (0, b.xq)(),
                        X = (0, r.Z)(O, 2),
                        T = X[0],
                        z = X[1],
                        F = z.isLoading,
                        A = z.isError,
                        J = z.error,
                        L = z.reset,
                        U = function() {
                            h(1), P(!1), c(), L()
                        },
                        B = (null == S ? void 0 : S.parentListings.length) > 0,
                        V = function() {
                            var e = (0, n.Z)(d().mark((function e() {
                                var t, l;
                                return d().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, T({
                                                productId: a,
                                                ownerId: null == m ? void 0 : m.id
                                            }).unwrap();
                                        case 3:
                                            o((0, u.d)({
                                                title: "Product deleted",
                                                icon: s.f8,
                                                message: "".concat(S.displayName, " has been deleted."),
                                                color: "success",
                                                timeout: 3e3
                                            })), U(), e.next = 12;
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
                            return E.createElement(E.Fragment, null, E.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, E.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-w-fit"
                            }, E.createElement("h2", {
                                className: "heading tw-inline-block tw-w-full tw-text-base"
                            }, "Are you sure you want to delete this product? This is NOT reversible."), (null == S ? void 0 : S.displayName) && E.createElement("p", {
                                className: "tw-text-light-grey tw-text-base tw-m-0"
                            }, S.displayName))), E.createElement("div", {
                                className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap tw-w-full tw-gap-2"
                            }, E.createElement("div", {
                                className: "tw-w-1/2"
                            }, E.createElement(w.zx, {
                                className: "tw-rounded-md tw-text-white tw-h-9 tw-border-0 tw-bg-button-bg-grey",
                                onClick: U
                            }, "Cancel")), E.createElement("div", {
                                className: "tw-w-1/2"
                            }, E.createElement(w.zx, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-message-warning tw-mb-3 tw-text-white",
                                onClick: function() {
                                    h(2)
                                },
                                disabled: !1
                            }, "Delete Product"))))
                        },
                        q = function() {
                            var e, t;
                            return E.createElement(E.Fragment, null, E.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, E.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-px-5 tw-w-full"
                            }, E.createElement(w.$1, {
                                icon: C.faTriangleExclamation,
                                size: "xl",
                                className: "tw-h-[72px] tw-mb-5"
                            }), E.createElement("h2", {
                                className: "heading tw-inline-block tw-w-full tw-text-base tw-text-center"
                            }, "Deleting this will revoke users access to content if they have paid for it."), E.createElement("p", {
                                className: " tw-text-base tw-m-0 tw-text-center tw-mb-9"
                            }, "If this action is intentional, you may proceed. However, ensure compliance with our", " ", E.createElement("a", {
                                href: "https://creators.vrchat.com/economy/guidelines",
                                target: "_blank",
                                rel: "noreferrer"
                            }, "Creator Economy guidelines"), " ", "to maintain trust and integrity within our community."), E.createElement("div", {
                                className: "tw-flex tw-items-center tw-gap-2"
                            }, E.createElement("input", {
                                id: "checked-checkbox",
                                type: "checkbox",
                                checked: k,
                                onChange: function() {
                                    return P(!k)
                                },
                                value: "acknowledge",
                                className: "tw-w-7 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-border-[#677079] tw-rounded focus:tw-ring-link-highlight tw-ring-offset-gray-800 focus:tw-ring-1"
                            }), E.createElement("label", {
                                for: "checked-checkbox",
                                className: "tw-text-sm tw-font-medium tw-text-white"
                            }, "I acknowledge that deleting this product will revoke access for existing users and confirm compliance with the Creator Economy guidelines."))), A && E.createElement("div", {
                                className: "tw-w-full tw-text-red tw-text-center"
                            }, E.createElement("p", null, "Failed to delete product:"), E.createElement("code", {
                                className: "tw-text-red"
                            }, null !== (e = null === (t = J.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "".concat(a, " An error occurred")))), E.createElement("div", {
                                className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap tw-w-full tw-gap-2"
                            }, E.createElement("div", {
                                className: "sm:tw-w-1/2"
                            }, E.createElement(w.zx, {
                                className: "tw-rounded-md tw-text-white tw-h-9 tw-border-0 tw-bg-button-bg-grey",
                                onClick: U
                            }, "Cancel")), E.createElement("div", {
                                className: "sm:tw-w-1/2"
                            }, E.createElement(w.zx, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-message-warning tw-text-white disabled:tw-bg-button-bg-grey disabled:tw-text-placeholder-text",
                                onClick: V,
                                disabled: !k,
                                loading: F
                            }, "Delete"))))
                        },
                        R = function() {
                            return E.createElement(E.Fragment, null, E.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, E.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-w-full"
                            }, E.createElement(w.$1, {
                                icon: C.faTriangleExclamation,
                                size: "xl",
                                className: "tw-h-[72px] tw-mb-4"
                            }), E.createElement("p", {
                                className: " tw-text-base tw-m-0 tw-text-center tw-mb-2"
                            }, "This product is included in the following listings:"), E.createElement("div", {
                                className: "tw-w-full tw-flex tw-flex-col tw-items-center tw-gap-2 tw-mb-9"
                            }, null == S ? void 0 : S.parentListings.map((function(e) {
                                return E.createElement(Z.Z, {
                                    listingId: e
                                })
                            }))), E.createElement("h2", {
                                className: "heading tw-inline-block tw-w-full tw-text-base tw-text-center"
                            }, "Please remove this item from these listings prior to deleting this item."), "avatar" === (null == S ? void 0 : S.productType) && E.createElement("p", {
                                className: "tw-text-orange tw-text-base tw-text-center tw-mb-2"
                            }, "Note: If a listing has already been purchased, you won't be able to remove the product from it, and deletion won't be possible."))), E.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-gap-2 tw-items-center"
                            }, E.createElement("div", {
                                className: "tw-w-1/2"
                            }, E.createElement(w.zx, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-button-bgtw-text-highlight",
                                onClick: U,
                                loading: F
                            }, "Understood"))))
                        };
                    return E.createElement("div", {
                        className: "tw-flex tw-flex-col tw-w-full tw-h-full tw-gap-5"
                    }, function() {
                        if (j) return E.createElement("div", {
                            className: "tw-px-3 tw-pb-4 tw-pt-5 tw-flex tw-flex-col tw-w-full tw-items-center"
                        }, E.createElement(w.$1, {
                            icon: I.LM,
                            spin: !0,
                            size: "2x"
                        }));
                        if (B) return R();
                        switch (v) {
                            case 1:
                                return M();
                            case 2:
                                return q();
                            default:
                                return null
                        }
                    }())
                };
            S.propTypes = {
                productId: D().string.isRequired,
                onCancelCallback: D().func
            };
            const j = S;
            var O = a(21538),
                X = a(44869);
            const T = function(e) {
                var t, a = e.productData,
                    l = e.onCloseCallback,
                    n = void 0 === l ? function() {} : l,
                    c = (0, E.useState)("info"),
                    i = (0, r.Z)(c, 2),
                    s = i[0],
                    o = i[1],
                    d = (0, O.LQ)({
                        avatarId: a.avatarId
                    }, {
                        skip: !a.avatarId
                    }),
                    u = d.data,
                    m = (d.isFetching, d.isError, d.error, null !== (t = null == a ? void 0 : a.parentListings) && void 0 !== t ? t : []),
                    g = (0, E.useCallback)((function(e) {
                        o(e)
                    }), []);
                return E.createElement("div", {
                    className: "tw-w-full"
                }, E.createElement(p.Z, {
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
                }), (null == a ? void 0 : a.assetDisabled) && E.createElement(w.qX, {
                    type: "warn",
                    title: "This avatar is disabled."
                }, E.createElement("p", {
                    className: "tw-mb-0 tw-ml-6"
                }, "Existing buyers have lost access, and new purchases are temporarily disabled. Check your email inbox for instructions on how to proceed, or contact Support if you need further assistance.")), "info" === s && E.createElement("div", null, E.createElement("div", {
                    className: "tw-bg-[#000] tw-p-4 tw-rounded-md tw-mb-3"
                }, "Need to edit your avatar? Head over to ", E.createElement(h.rU, {
                    to: "/home/avatar/".concat(a.avatarId)
                }, "the avatar page"), " to make changes."), E.createElement(X.Z, {
                    avatarData: u,
                    productType: "avatar"
                })), "listings" === s && E.createElement("div", {
                    className: "tw-gap-2 tw-w-full tw-grid tw-grid-cols-2 tw-mb-3"
                }, m.length > 0 && m.map((function(e) {
                    return E.createElement(Z.Z, {
                        key: e,
                        listingId: e,
                        showImage: !0
                    })
                })), 0 === m.length && E.createElement("p", null, "No listings associated with this product.")), E.createElement(w.zx, {
                    onClick: n,
                    containerClasses: "tw-w-full"
                }, "Done"))
            };
            var z = a(51806),
                F = a.n(z),
                A = function(e) {
                    e.isOpen;
                    var t = e.createdProduct,
                        a = void 0 === t ? null : t,
                        l = e.closeModalCallback,
                        n = void 0 === l ? function() {} : l,
                        r = e.updated,
                        c = void 0 !== r && r;
                    return null === a ? null : E.createElement("div", null, E.createElement("div", {
                        className: "tw-flex tw-min-h-full tw-items-end tw-justify-center tw-p-4 sm:tw-items-center sm:tw-p-0"
                    }, E.createElement("div", null, E.createElement("div", {
                        className: "tw-flex tw-flex-col tw-w-full tw-items-center"
                    }, E.createElement(w.pw, {
                        alt: null == a ? void 0 : a.displayName,
                        imageId: (null == a ? void 0 : a.imageId) || (null == a ? void 0 : a.file) || null,
                        fallbackSrc: F(),
                        fitToCover: !0
                    }), E.createElement("h2", {
                        className: "heading tw-mt-5"
                    }, "Product ", c ? "Updated" : "Created", "!"), E.createElement("p", {
                        className: "tw-text-light-grey tw-text-center tw-mb-8 sm:tw-w-3/4"
                    }, "Your udon product is all set! Continue in your Unity project. You will see this product available in your Udon products manager.")), E.createElement("div", {
                        className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap sm:tw-px-6 tw-w-full tw-gap-2"
                    }, E.createElement("div", {
                        className: "sm:tw-w-1/2"
                    }, E.createElement(h.rU, {
                        to: "https://creators.vrchat.com/economy/sdk/",
                        target: "_blank"
                    }, E.createElement(w.zx, {
                        className: "tw-rounded-md tw-text-white tw-border-0 tw-bg-button-bg-grey",
                        onClick: n
                    }, "View Docs"))), E.createElement("div", {
                        className: "sm:tw-w-1/2"
                    }, E.createElement(w.zx, {
                        className: "tw-rounded-md tw-border-0 tw-mb-3 disabled:tw-bg-button-bg-grey disabled:tw-text-placeholder-text",
                        onClick: n
                    }, "Done"))))))
                };
            A.propTypes = {
                isOpen: D().bool,
                createdProduct: D().object.isRequired,
                closeModalCallback: D().func
            };
            const J = A;

            function L(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    t && (l = l.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, l)
                }
                return a
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? L(Object(a), !0).forEach((function(t) {
                        (0, l.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : L(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var B = (0, E.lazy)((function() {
                    return a.e(2073).then(a.bind(a, 2073))
                })),
                V = (0, E.lazy)((function() {
                    return a.e(7069).then(a.bind(a, 17069))
                }));
            const M = function() {
                var e, t = (0, f.IB)().data,
                    a = (0, x.I0)(),
                    l = (0, x.v9)((function(e) {
                        return e.productFlow
                    })).currentTitle,
                    o = (0, h.lr)(),
                    C = (0, r.Z)(o, 2),
                    I = C[0],
                    P = (C[1], (0, E.useState)("")),
                    D = (0, r.Z)(P, 2),
                    Z = D[0],
                    S = (D[1], (0, y.UO)()),
                    O = S.paginationPage,
                    X = S.productTab,
                    z = O ? Number(O) : 1,
                    F = (0, E.useState)(I.get("sortBy") || null),
                    A = (0, r.Z)(F, 2),
                    L = A[0],
                    M = A[1],
                    q = (0, E.useState)(I.get("orderBy") || "descending"),
                    R = (0, r.Z)(q, 2),
                    $ = R[0],
                    H = R[1],
                    _ = E.useState({}),
                    K = (0, r.Z)(_, 2),
                    Y = K[0],
                    Q = K[1],
                    W = E.useState(!1),
                    G = (0, r.Z)(W, 2),
                    ee = G[0],
                    te = G[1],
                    ae = E.useState(!1),
                    le = (0, r.Z)(ae, 2),
                    ne = le[0],
                    re = le[1],
                    ce = E.useState(!1),
                    ie = (0, r.Z)(ce, 2),
                    se = ie[0],
                    oe = ie[1],
                    de = E.useState(null),
                    ue = (0, r.Z)(de, 2),
                    we = ue[0],
                    me = ue[1],
                    pe = E.useState(null),
                    ge = (0, r.Z)(pe, 2),
                    fe = ge[0],
                    be = ge[1],
                    ve = E.useState(!1),
                    Ee = (0, r.Z)(ve, 2),
                    xe = (Ee[0], Ee[1]),
                    he = (0, g.Z)(Z),
                    ye = ((0, E.useMemo)((function() {
                        return {
                            sellerId: t.id,
                            n: 50,
                            pageValue: z
                        }
                    }), [I, he, $, L, z]), (0, b.qX)()),
                    Ne = (0, r.Z)(ye, 2),
                    ke = Ne[0],
                    Ce = Ne[1],
                    Ie = (Ce.isSuccess, Ce.isLoading, Ce.isError, Ce.error, (0, b.wE)()),
                    Pe = (0, r.Z)(Ie, 2),
                    De = Pe[0],
                    Ze = Pe[1],
                    Se = (Ze.isSuccess, Ze.isLoading, Ze.isError, Ze.error, function(e) {
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
                            w = void 0 !== u && u;
                        te(!0), Q({
                            title: a,
                            data: n,
                            isEditing: c,
                            isCreating: s,
                            isDeleting: d,
                            isViewingAvatarDetails: w
                        })
                    }),
                    je = function() {
                        te(!1), Q({}), re(!1), me(null), oe(!1), xe(!1), a((0, v.bi)())
                    },
                    Oe = function() {
                        var e = (0, n.Z)(d().mark((function e(t) {
                            var l, n, r, c, o, w, m, p, g;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (l = t.productData, n = void 0 === l ? {} : l, r = t.isEditing, c = void 0 !== r && r, o = t.image, w = void 0 === o ? void 0 : o, m = function() {
                                                a((0, u.d)({
                                                    title: "Product ".concat(c ? "updated" : "created", " successfully!"),
                                                    icon: s.f8,
                                                    message: "Your product has been ".concat(c ? "updated" : "created", " successfully!"),
                                                    color: "success",
                                                    timeout: 3e3
                                                })), Q({
                                                    isEditing: !1,
                                                    isCreating: !1
                                                }), a((0, v.dn)()), me(n), re(!0), oe(c)
                                            }, e.prev = 2, !c) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 6, De(U(U({
                                            productId: n.id
                                        }, null !== w ? {
                                            file: w,
                                            tag: "product"
                                        } : {}), n)).unwrap();
                                    case 6:
                                        return e.abrupt("return", m());
                                    case 7:
                                        return e.next = 9, ke(U(U({}, null !== w ? {
                                            file: w,
                                            tag: "product"
                                        } : {}), n)).unwrap();
                                    case 9:
                                        return e.abrupt("return", m());
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(2), console.log("error", e.t0), a((0, u.d)({
                                            title: "Failed to ".concat(c ? "update" : "create", " product!"),
                                            icon: i.eH,
                                            message: null !== (p = null === (g = e.t0.data) || void 0 === g || null === (g = g.error) || void 0 === g ? void 0 : g.message) && void 0 !== p ? p : "Something went wrong",
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
                    Xe = (0, E.useCallback)((function(e) {
                        return L === e
                    }), [L]),
                    Te = function() {
                        Se({
                            title: "Create Product",
                            data: void 0,
                            isCreating: !0
                        })
                    },
                    ze = function() {
                        var e = (0, n.Z)(d().mark((function e(t) {
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, a((0, v.IR)(t));
                                    case 2:
                                        Se({
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
                return E.createElement(E.Fragment, null, E.createElement(w.$4, null, "My Products"), E.createElement(w.X2, null, E.createElement(p.Z, {
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
                })), E.createElement(w.X2, {
                    className: "tw-justify-between tw-gap-x-5 tw-gap-y-3 tw-flex-wrap"
                }, E.createElement("div", null), E.createElement(w.zx, {
                    "aria-label": "Create Product",
                    className: "tw-px-2",
                    onClick: Te
                }, E.createElement(w.$1, {
                    icon: c.r8,
                    size: "1x"
                }), " Create Product")), E.createElement(E.Suspense, {
                    fallback: E.createElement(m.Z, {
                        loading: !0
                    })
                }, !X && E.createElement(B, {
                    currentUser: t,
                    searchValue: Z,
                    currentPage: z,
                    sortBy: L,
                    orderBy: $,
                    editProductCallback: ze,
                    deleteProductCallback: function(e) {
                        Se({
                            title: "Delete Product",
                            data: e,
                            isDeleting: !0
                        })
                    },
                    viewAvatarDetailsCallback: function(e) {
                        be(e), xe(!0), Se({
                            title: "Product Views",
                            data: e,
                            isViewingAvatarDetails: !0
                        })
                    },
                    createProductCallback: Te,
                    onSortByChange: function(e) {
                        return function(e) {
                            return Xe(e) ? H("descending" === $ ? "ascending" : "descending") : (M(e), H("ascending"))
                        }(e)
                    }
                }), "moderation" === X && E.createElement(V, {
                    sortBy: L,
                    orderBy: $,
                    currentUser: t,
                    currentPage: z
                })), E.createElement(w.u_, {
                    title: l || Y.title,
                    onClose: je,
                    isVisible: ee,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: "auto",
                    disableBackdropClick: !0,
                    className: "tw-bg-black"
                }, ee && Y.isCreating && E.createElement(N.Z, {
                    onClose: je
                }), ee && Y.isEditing && E.createElement(k.default, {
                    product: Y.data,
                    onClose: je,
                    isEditing: !0,
                    onSubmit: Oe,
                    user: t
                }), ee && ne && E.createElement(J, {
                    isOpen: ne,
                    createdProduct: we,
                    updated: se,
                    closeModalCallback: je
                }), ee && Y.isDeleting && E.createElement(j, {
                    productId: null === (e = Y.data) || void 0 === e ? void 0 : e.id,
                    onCancelCallback: je
                }), ee && Y.isViewingAvatarDetails && E.createElement(T, {
                    productData: fe,
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
                w = a(37463),
                m = a(95896),
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
                }, o.createElement(w.JX, {
                    className: "tw-mb-8"
                }, o.createElement("h2", {
                    className: "tw-text-lg tw-mb-3"
                }, "Avatar Detail"), o.createElement(w.X2, {
                    className: "tw-gap-5 tw-mb-5 tw-flex-col sm:tw-flex-row"
                }, o.createElement(w.JX, null, o.createElement(w.pw, {
                    imageId: x.thumbnailImageUrl,
                    fitToCover: !0,
                    alt: "Product Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                })), o.createElement(w.JX, {
                    className: "tw-flex-1 tw-gap-5"
                }, o.createElement(w.JX, null, o.createElement("label", {
                    htmlFor: "name"
                }, "Product Name"), o.createElement(w.II, {
                    type: "text",
                    inputStyle: {
                        margin: "8px 0"
                    },
                    maxLength: 64,
                    id: "name",
                    value: x.name,
                    disabled: !0
                })), o.createElement(w.X2, {
                    className: "tw-gap-2"
                }, o.createElement(w.JX, {
                    className: "tw-flex-1"
                }, o.createElement("p", {
                    className: "tw-mb-2"
                }, "Primary Style"), !(null !== (t = x.styles) && void 0 !== t && t.primary) && o.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No primary style!"), (null === (a = x.styles) || void 0 === a ? void 0 : a.primary) && o.createElement("div", {
                    className: "tw-mb-0 tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block tw-w-fit"
                }, o.createElement("span", null, x.styles.primary))), o.createElement(w.JX, {
                    className: "tw-flex-1"
                }, o.createElement("p", {
                    className: "tw-mb-2"
                }, "Secondary Style"), !(null !== (i = x.styles) && void 0 !== i && i.secondary) && o.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No secondary style!"), (null === (b = x.styles) || void 0 === b ? void 0 : b.secondary) && o.createElement("div", {
                    className: "tw-mb-0 tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block tw-w-fit"
                }, x.styles.secondary))), o.createElement(w.JX, null, o.createElement("p", {
                    className: "tw-mb-2"
                }, "Tags"), o.createElement(w.X2, {
                    className: "tw-flex-wrap tw-gap-2"
                }, 0 === (null == N ? void 0 : N.length) && o.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No tags!"), null == N ? void 0 : N.map((function(e) {
                    return o.createElement("div", {
                        key: e,
                        className: "tw-leading-none tw-max-h-[50px] tw-break-all tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block"
                    }, o.createElement("span", null, e))
                })))))), o.createElement(w.JX, {
                    className: "tw-gap-5"
                }, x.productId && o.createElement(w.JX, {
                    className: "tw-mb-5"
                }, o.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2 tw-flex tw-flex-row"
                }, "Product ID", o.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1"
                }, o.createElement(w.$1, {
                    icon: r.sq,
                    className: "tw-text-light-grey"
                }), o.createElement("span", {
                    className: "tw-pointer-events-none tw-z-50 tw-absolute tw--top-14 tw--left-20 sm:tw--top-7 sm:tw-left-5 tw-w-[240px] tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50 tw-opacity-0 tw-shadow tw-transition-opacity group-hover:tw-opacity-100"
                }, "This unique ID links your Udon product to the VRChat Worlds SDK, allowing you to track ownership within your world."))), o.createElement(w.X2, {
                    className: "tw-gap-2"
                }, o.createElement(w.II, {
                    type: "text",
                    id: "id",
                    value: x.productId,
                    disabled: !0,
                    className: "tw-flex-1"
                }), o.createElement(w.zx, {
                    type: "button",
                    className: "tw-w-[40px] tw-h-[40px]",
                    onClick: function(e) {
                        return k(e, x.productId)
                    }
                }, o.createElement(w.$1, {
                    icon: n.kZ
                })))), h && o.createElement(w.JX, null, o.createElement("label", {
                    htmlFor: "price",
                    className: "tw-mb-2"
                }, "Product Type"), o.createElement(w.X2, {
                    className: "tw-gap-3"
                }, o.createElement("div", {
                    className: "tw-rounded-full tw-w-[90px] tw-h-[90px] tw-bg-[#303135]"
                }, o.createElement("img", {
                    alt: "udon logo",
                    width: "90",
                    src: m.pK[h].image
                })), o.createElement(w.JX, {
                    className: "tw-items-center tw-justify-center"
                }, o.createElement("p", {
                    className: "tw-mb-0"
                }, o.createElement("strong", null, m.pK[h].label), o.createElement("br", null), m.pK[h].text, o.createElement("br", null), o.createElement("a", {
                    href: m.pK[h].redirect,
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn More"))))), o.createElement(w.JX, null, o.createElement("label", {
                    htmlFor: "description"
                }, "Description"), o.createElement(w.gx, {
                    disabled: !0,
                    type: "textarea",
                    id: "description",
                    inputClassName: "tw-h-[120px] tw-my-2",
                    maxLength: 256,
                    value: x.description
                })), o.createElement(w.JX, null, o.createElement("label", {
                    htmlFor: "acknowledgements"
                }, "Acknowledgements"), o.createElement(w.gx, {
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
//# sourceMappingURL=7945894203a07d726553d8ca87ceb4f6fdb580502740b441c5651070e303cd64.js.map