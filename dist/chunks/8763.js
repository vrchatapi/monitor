"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8763], {
        58271: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => me
            });
            var n = l(4942),
                a = l(15861),
                r = l(54546),
                c = l(62475),
                o = l(96766),
                s = l(40098),
                i = l(76553),
                u = l(6811),
                m = l(64687),
                w = l.n(m),
                d = l(64258),
                p = l(14411),
                g = l(98185),
                f = l(35187),
                b = l(95896),
                h = l(76176),
                x = l(22202),
                E = l(67978),
                v = l(67294),
                y = l(32981),
                N = l(89250),
                C = l(79655),
                k = l(45987),
                I = l(41145),
                O = l(62228),
                P = l(2909),
                S = l(82414),
                j = l(78076),
                T = l(63221),
                Z = l(74205),
                D = l(93261),
                F = l(92332),
                X = l(67263),
                L = l(16869),
                z = function(e) {
                    var t, l = e.listingId,
                        n = e.className,
                        a = void 0 === n ? "" : n,
                        r = e.showImage,
                        c = void 0 !== r && r,
                        o = (0, L.mr)({
                            listingId: l
                        }, {
                            skip: !l
                        }),
                        s = o.data,
                        i = o.isFetching,
                        u = o.isSuccess,
                        m = o.isError;
                    i && (p.$1, F.LM);
                    var w = (null === (t = b.di.find((function(e) {
                        return e.value === (null == s ? void 0 : s.listingType)
                    }))) || void 0 === t ? void 0 : t.label) || (null == s ? void 0 : s.listingType);
                    return u ? v.createElement("div", {
                        className: "".concat(a)
                    }, c && v.createElement(p.pw, {
                        imageId: null == s ? void 0 : s.imageId,
                        alt: null == s ? void 0 : s.displayName,
                        fallbackSrc: X,
                        fitToCover: !0,
                        className: "tw-h-7 tw-w-7 tw-mr-2"
                    }), v.createElement("p", {
                        className: "tw-font-bold tw-mb-0"
                    }, null == s ? void 0 : s.displayName, " (", w, ")")) : m ? v.createElement("div", {
                        className: "".concat(a)
                    }, v.createElement("p", {
                        className: "tw-font-bold tw-mb-0"
                    }, l)) : null
                };
            z.propTypes = {};
            const A = z,
                J = l.p + "4343c06f1cea0647f1a7055a0eb7c663738ede74f753c13bcb03c48403185022.png";
            var U = ["file", "imageId"],
                $ = ["file"],
                R = ["imageId"];

            function M(e, t) {
                var l = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), l.push.apply(l, n)
                }
                return l
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(l), !0).forEach((function(t) {
                        (0, n.Z)(e, t, l[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : M(Object(l)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
                    }))
                }
                return e
            }
            var B = {
                sellerId: void 0,
                displayName: "",
                description: "",
                tags: [],
                imageId: "",
                productType: b.Pm.UDON,
                useForSubscriberList: !1
            };
            const q = function(e) {
                var t, l = e.product,
                    n = void 0 === l ? null : l,
                    a = e.isEditing,
                    c = void 0 !== a && a,
                    o = e.user,
                    s = e.onSubmit,
                    m = void 0 === s ? function() {} : s,
                    w = e.onClose,
                    g = void 0 === w ? function() {} : w;
                if (null === n && c) return null;
                var f = null !== (t = null == n ? void 0 : n.parentListings) && void 0 !== t ? t : [],
                    h = (0, y.I0)(),
                    E = (0, x.IB)({
                        skip: o
                    }).data,
                    N = o || E,
                    C = n || _(_({}, B), {}, {
                        sellerId: null == N ? void 0 : N.id
                    }),
                    F = (0, v.useState)(C),
                    X = (0, r.Z)(F, 2),
                    L = X[0],
                    z = X[1],
                    M = (0, v.useState)(L.useForSubscriberList || !1),
                    q = (0, r.Z)(M, 2),
                    V = q[0],
                    Y = q[1],
                    H = (0, v.useState)(L.groupAccess || !1),
                    K = (0, r.Z)(H, 2),
                    W = K[0],
                    G = K[1],
                    Q = (0, v.useState)(L.groupAccessRemove || !1),
                    ee = (0, r.Z)(Q, 2),
                    te = ee[0],
                    le = ee[1],
                    ne = (0, v.useState)(n ? null == n ? void 0 : n.imageId : null),
                    ae = (0, r.Z)(ne, 2),
                    re = ae[0],
                    ce = ae[1],
                    oe = (0, v.useState)(!1),
                    se = (0, r.Z)(oe, 2),
                    ie = se[0],
                    ue = se[1],
                    me = (0, v.useState)(!1),
                    we = (0, r.Z)(me, 2),
                    de = we[0],
                    pe = we[1],
                    ge = (0, D.r5)({
                        groupId: null == n ? void 0 : n.groupId
                    }, {
                        skip: !(c || null != n && n.groupId)
                    }),
                    fe = ge.data,
                    be = ge.isLoading,
                    he = ge.isError,
                    xe = (ge.Error, (null == fe ? void 0 : fe.joinState) === T.wN.OPEN ? "Your group is already set to Free Join, so enabling this option won’t have any effect. Subscribers will still join automatically." : "When enabled, anyone can purchase this role and join the group, regardless of the group’s join rules. This option overrides standard join settings.");
                (0, v.useEffect)((function() {
                    (null == fe ? void 0 : fe.joinState) === T.wN.OPEN && (G(!0), z(_(_({}, L), {}, {
                        groupAccess: !0
                    })))
                }), [fe]);
                return v.createElement(v.Fragment, null, v.createElement("form", {
                    onSubmit: function(e) {
                        e.preventDefault(), m(L, c, "string" != typeof re ? re : null)
                    },
                    className: "tw-w-full"
                }, v.createElement(p.JX, null, v.createElement(p.JX, {
                    className: "tw-mb-8"
                }, v.createElement(p.X2, {
                    className: "tw-gap-5 tw-mb-5 tw-flex-col sm:tw-flex-row"
                }, v.createElement(p.JX, null, v.createElement("button", {
                    type: "button",
                    onClick: function() {
                        ue(!0)
                    },
                    className: "tw-border-0 tw-p-0 tw-rounded tw-relative tw-items-center tw-justify-center tw-flex tw-bg-transparent"
                }, !re && v.createElement(p.zx, {
                    type: "button",
                    containerClasses: "tw-rounded tw-absolute tw-flex-1"
                }, v.createElement(p.$1, {
                    icon: j.Vm,
                    className: "tw-mr-2"
                }), v.createElement("span", null, "Upload Thumbnail")), v.createElement(p.pw, {
                    imageId: re,
                    fitToCover: !0,
                    alt: "Product Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                }))), v.createElement(p.JX, {
                    className: "tw-flex-1 tw-gap-5"
                }, v.createElement(p.JX, null, v.createElement("label", {
                    htmlFor: "displayName"
                }, "Name"), v.createElement(p.II, {
                    type: "text",
                    inputStyle: {
                        margin: "8px 0"
                    },
                    maxLength: 64,
                    id: "displayName",
                    value: L.displayName,
                    onChange: function(e) {
                        return z(_(_({}, L), {}, {
                            displayName: e.target.value
                        }))
                    }
                }), v.createElement("small", {
                    className: "tw-text-light-grey"
                }, L.displayName.length, "/64")), v.createElement(p.JX, null, v.createElement("label", {
                    htmlFor: "description"
                }, "Description"), v.createElement(p.gx, {
                    type: "textarea",
                    id: "description",
                    inputClassName: "tw-h-[120px] tw-my-2",
                    maxLength: 256,
                    value: L.description,
                    onChange: function(e) {
                        return z(_(_({}, L), {}, {
                            description: e.target.value
                        }))
                    }
                }), v.createElement("small", {
                    className: "tw-text-light-grey"
                }, L.description.length, "/256")))), c && v.createElement(p.JX, {
                    className: "tw-mb-5"
                }, v.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2 tw-flex tw-flex-row"
                }, "Product ID", v.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1"
                }, v.createElement(p.$1, {
                    icon: S.sq,
                    className: "tw-text-light-grey"
                }), v.createElement("span", {
                    className: "tw-pointer-events-none tw-z-50 tw-absolute tw--top-14 tw--left-20 sm:tw--top-7 sm:tw-left-5 tw-w-[240px] tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50 tw-opacity-0 tw-shadow tw-transition-opacity group-hover:tw-opacity-100"
                }, "This unique ID links your Udon product to the VRChat Worlds SDK, allowing you to track ownership within your world."))), v.createElement(p.X2, {
                    className: "tw-gap-2"
                }, v.createElement(p.II, {
                    type: "text",
                    id: "id",
                    value: L.id,
                    disabled: !0,
                    className: "tw-flex-1"
                }), v.createElement(p.zx, {
                    type: "button",
                    className: "tw-w-[40px] tw-h-[40px]",
                    onClick: function() {
                        navigator.clipboard.writeText(L.id).then((function() {
                            h((0, d.d)({
                                title: "Copied product ID",
                                icon: u.f8,
                                message: "Product ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(e) {
                            var t, l;
                            h((0, d.d)({
                                title: "Failed to copy product ID",
                                icon: i.eH,
                                message: null !== (t = null === (l = res.error.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== t ? t : "Failed to copy product ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, v.createElement(p.$1, {
                    icon: P.kZ
                })))), v.createElement(p.JX, {
                    className: "tw-mb-5"
                }, v.createElement("label", {
                    htmlFor: "price",
                    className: "tw-mb-2"
                }, "Product Type"), (null == n ? void 0 : n.productType) === b.Pm.ROLE && v.createElement(p.X2, {
                    className: "tw-gap-3"
                }, v.createElement("div", {
                    className: "tw-rounded-full tw-w-[90px] tw-min-w-[90px] tw-h-[90px] tw-bg-[#303135] tw-flex tw-items-center tw-justify-center"
                }, v.createElement(p.$1, {
                    icon: Z.Yj,
                    className: "tw-text-white tw-text-5xl"
                })), v.createElement(p.JX, {
                    className: "tw-items-center tw-justify-center"
                }, v.createElement("p", {
                    className: "tw-mb-0"
                }, v.createElement("strong", null, "Subscription Role"), v.createElement("br", null), "Role with paid custom permissions in a group", v.createElement("br", null), v.createElement("a", {
                    href: "https://creators.vrchat.com/economy/products/paid-role",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn More")))), (null == n ? void 0 : n.productType) !== b.Pm.ROLE && v.createElement(p.X2, {
                    className: "tw-gap-3"
                }, v.createElement("div", {
                    className: "tw-rounded-full tw-w-[90px] tw-h-[90px] tw-bg-[#303135]"
                }, v.createElement("img", {
                    alt: "udon logo",
                    width: "90",
                    src: J
                })), v.createElement(p.JX, {
                    className: "tw-items-center tw-justify-center"
                }, v.createElement("p", {
                    className: "tw-mb-0"
                }, v.createElement("strong", null, "Udon Product"), v.createElement("br", null), "Custom In-World Experiences", v.createElement("br", null), v.createElement("a", {
                    href: "https://creators.vrchat.com/economy/products/udon/",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn More"))))), c && v.createElement(p.JX, {
                    className: "tw-mb-5"
                }, v.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2"
                }, "Associated ", "role" === (null == n ? void 0 : n.productType) ? "Subscription" : "Listings", " ", f.length > 0 && "(".concat(f.length, ")")), 0 === f.length && v.createElement("p", {
                    className: "tw-text-placeholder-text tw-mb-0"
                }, "None"), f.length > 0 && v.createElement(p.JX, null, v.createElement("div", {
                    className: "tw-gap-2 tw-w-full tw-grid tw-grid-cols-2 tw-mb-3"
                }, (de ? f : f.slice(0, 6)).map((function(e) {
                    return v.createElement(A, {
                        listingId: e,
                        showImage: !0,
                        className: "tw-flex tw-flex-row"
                    })
                }))), f.length > 6 && v.createElement(p.X2, {
                    className: "tw-items-center tw-gap-2"
                }, v.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return pe(!de)
                    },
                    className: "tw-mb-0 tw-appearance-none tw-bg-transparent tw-border-none tw-text-light-grey"
                }, de ? "Show Less " : "Show all listings ", de ? v.createElement(p.$1, {
                    icon: O.mT
                }) : v.createElement(p.$1, {
                    icon: I.pt
                }))))), !(c && (null == n ? void 0 : n.productType) === b.Pm.ROLE) && v.createElement(p.X2, {
                    className: "tw-bg-[#252A30] tw-p-5 tw-rounded-lg tw-mb-5"
                }, v.createElement(p.JX, null, v.createElement("p", {
                    className: "tw-mb-1"
                }, "Enable Access to Owner Names"), v.createElement("small", {
                    className: "tw-text-light-grey"
                }, "If enabled, the display names of this product's owners are available to Udon code in your worlds which reference it. These can then be displayed to the world's visitors on supporter boards, for example.")), v.createElement(p.X2, {
                    className: "tw-justify-center tw-items-center tw-gap-3"
                }, v.createElement("label", {
                    htmlFor: "useForSubscriberList"
                }, V ? "On" : "Off"), v.createElement(p.K_, {
                    value: "useForSubscriberList",
                    defaultChecked: V,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        Y(t), z(_(_({}, L), {}, {
                            useForSubscriberList: t
                        }))
                    }
                }))), c && (null == n ? void 0 : n.productType) === b.Pm.ROLE && v.createElement(v.Fragment, null, v.createElement(p.JX, {
                    className: "tw-bg-[#252A30] tw-p-5 tw-rounded-lg"
                }, v.createElement(p.K_, {
                    label: "Enable Free Join for Subscribers",
                    value: "groupAccess",
                    defaultChecked: W,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        if (G(t), !t) return le(!1), void z(_(_({}, L), {}, {
                            groupAccess: t,
                            groupAccessRemove: !1
                        }));
                        z(_(_({}, L), {}, {
                            groupAccess: t
                        }))
                    },
                    disabled: !fe || be || he || (null == fe ? void 0 : fe.joinState) === T.wN.OPEN
                }), v.createElement("small", null, xe)), W && v.createElement(p.JX, {
                    className: "tw-bg-[#252A30] tw-p-5 tw-rounded-lg tw-mt-5"
                }, v.createElement(v.Fragment, null, v.createElement(p.K_, {
                    label: "Remove Members After Expiration",
                    value: "groupAccessRemove",
                    defaultChecked: te,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        le(t), z(_(_({}, L), {}, {
                            groupAccessRemove: t
                        }))
                    }
                }), v.createElement("small", null, "If enabled, group members with this role are removed from the group entirely when their subscription ends. Note that this will remove any member whose subscription ends, whether they bought their way in or not."))))), v.createElement(p.JX, {
                    className: "tw-gap-3"
                }, v.createElement(p.zx, {
                    type: "submit"
                }, c ? "Update" : "Create", " Product"), v.createElement(p.zx, {
                    type: "button",
                    neutral: !0,
                    onClick: g
                }, "Cancel")))), v.createElement(p.m6, {
                    preset: "product",
                    image: re,
                    isOpen: ie,
                    onClose: function() {
                        return ue(!1)
                    },
                    confirmCallback: function(e) {
                        var t = e.fileId,
                            l = void 0 === t ? null : t,
                            n = e.fileBlob,
                            a = void 0 === n ? null : n,
                            r = null !== l;
                        return null === l && null === a ? (ce(null), void z((function(e) {
                            e.file, e.imageId;
                            return (0, k.Z)(e, U)
                        }))) : r ? (ce(l), void z((function(e) {
                            e.file;
                            return _(_({}, (0, k.Z)(e, $)), {}, {
                                imageId: l
                            })
                        }))) : (ce(a), void z((function(e) {
                            e.imageId;
                            return _(_({}, (0, k.Z)(e, R)), {}, {
                                file: a
                            })
                        })))
                    },
                    cancelCallBack: function() {
                        return ue(!1)
                    },
                    className: "tw-w-[285px] tw-aspect-square"
                }))
            };
            var V = l(53359),
                Y = l(45697),
                H = l.n(Y),
                K = function(e) {
                    e.isOpen;
                    var t = e.productId,
                        l = void 0 === t ? null : t,
                        n = e.onCancelCallback,
                        c = void 0 === n ? function() {} : n;
                    if (null === l) return null;
                    var o = (0, y.I0)(),
                        s = (0, x.IB)().data,
                        m = (0, v.useState)(1),
                        g = (0, r.Z)(m, 2),
                        f = g[0],
                        b = g[1],
                        h = (0, v.useState)(!1),
                        N = (0, r.Z)(h, 2),
                        C = N[0],
                        k = N[1],
                        I = (0, E.lZ)({
                            productId: l
                        }, {
                            skip: null === l
                        }),
                        O = I.data,
                        P = I.isFetching,
                        S = (0, E.xq)(),
                        j = (0, r.Z)(S, 2),
                        T = j[0],
                        Z = j[1],
                        D = Z.isLoading,
                        X = Z.isError,
                        L = Z.error,
                        z = Z.reset,
                        J = function() {
                            b(1), k(!1), c(), z()
                        },
                        U = (null == O ? void 0 : O.parentListings.length) > 0,
                        $ = function() {
                            var e = (0, a.Z)(w().mark((function e() {
                                var t, n;
                                return w().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, T({
                                                productId: l,
                                                ownerId: null == s ? void 0 : s.id
                                            }).unwrap();
                                        case 3:
                                            o((0, d.d)({
                                                title: "Product deleted",
                                                icon: u.f8,
                                                message: "".concat(O.displayName, " has been deleted."),
                                                color: "success",
                                                timeout: 3e3
                                            })), J(), e.next = 12;
                                            break;
                                        case 7:
                                            return e.prev = 7, e.t0 = e.catch(0), console.error(e.t0), o((0, d.d)({
                                                title: "Failed to delete product",
                                                icon: i.eH,
                                                message: null !== (t = null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Something went wrong",
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
                        R = function() {
                            return v.createElement(v.Fragment, null, v.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, v.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-w-fit"
                            }, v.createElement("h2", {
                                className: "heading tw-inline-block tw-w-full tw-text-base"
                            }, "Are you sure you want to delete this product? This is NOT reversible."), (null == O ? void 0 : O.displayName) && v.createElement("p", {
                                className: "tw-text-light-grey tw-text-base tw-m-0"
                            }, O.displayName))), v.createElement("div", {
                                className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap tw-w-full tw-gap-2"
                            }, v.createElement("div", {
                                className: "tw-w-1/2"
                            }, v.createElement(p.zx, {
                                className: "tw-rounded-md tw-text-white tw-h-9 tw-border-0 tw-bg-button-bg-grey",
                                onClick: J
                            }, "Cancel")), v.createElement("div", {
                                className: "tw-w-1/2"
                            }, v.createElement(p.zx, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-message-warning tw-mb-3 tw-text-white",
                                onClick: function() {
                                    b(2)
                                },
                                disabled: !1
                            }, "Delete Product"))))
                        },
                        M = function() {
                            var e, t;
                            return v.createElement(v.Fragment, null, v.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, v.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-px-5 tw-w-full"
                            }, v.createElement(p.$1, {
                                icon: V.faTriangleExclamation,
                                size: "xl",
                                className: "tw-h-[72px] tw-mb-5"
                            }), v.createElement("h2", {
                                className: "heading tw-inline-block tw-w-full tw-text-base tw-text-center"
                            }, "Deleting this will revoke users access to content if they have paid for it."), v.createElement("p", {
                                className: " tw-text-base tw-m-0 tw-text-center tw-mb-9"
                            }, "If this action is intentional, you may proceed. However, ensure compliance with our", " ", v.createElement("a", {
                                href: "https://creators.vrchat.com/economy/guidelines",
                                target: "_blank",
                                rel: "noreferrer"
                            }, "Creator Economy guidelines"), " ", "to maintain trust and integrity within our community."), v.createElement("div", {
                                className: "tw-flex tw-items-center"
                            }, v.createElement("input", {
                                id: "checked-checkbox",
                                type: "checkbox",
                                checked: C,
                                onChange: function() {
                                    return k(!C)
                                },
                                value: "acknowledge",
                                className: "tw-w-4 tw-h-4 tw-text-link-highlight tw-bg-button-bg-grey tw-border-[#677079] tw-rounded focus:tw-ring-link-highlight tw-ring-offset-gray-800 focus:tw-ring-1"
                            }), v.createElement("label", {
                                for: "checked-checkbox",
                                className: "tw-ms-2 tw-text-sm tw-font-medium tw-text-white"
                            }, "I acknowledge that deleting this product will revoke access for existing users and confirm compliance with the Creator Economy guidelines."))), X && v.createElement("div", {
                                className: "tw-w-full tw-text-red tw-text-center"
                            }, v.createElement("p", null, "Failed to delete product:"), v.createElement("code", {
                                className: "tw-text-red"
                            }, null !== (e = null === (t = L.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "".concat(l, " An error occurred")))), v.createElement("div", {
                                className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap tw-w-full tw-gap-2"
                            }, v.createElement("div", {
                                className: "sm:tw-w-1/2"
                            }, v.createElement(p.zx, {
                                className: "tw-rounded-md tw-text-white tw-h-9 tw-border-0 tw-bg-button-bg-grey",
                                onClick: J
                            }, "Cancel")), v.createElement("div", {
                                className: "sm:tw-w-1/2"
                            }, v.createElement(p.zx, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-message-warning tw-text-white disabled:tw-bg-button-bg-grey disabled:tw-text-placeholder-text",
                                onClick: $,
                                disabled: !C,
                                loading: D
                            }, "Delete"))))
                        },
                        _ = function() {
                            return v.createElement(v.Fragment, null, v.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, v.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-w-full"
                            }, v.createElement(p.$1, {
                                icon: V.faTriangleExclamation,
                                size: "xl",
                                className: "tw-h-[72px] tw-mb-4"
                            }), v.createElement("p", {
                                className: " tw-text-base tw-m-0 tw-text-center tw-mb-2"
                            }, "This product is included in the following listings:"), v.createElement("div", {
                                className: "tw-w-full tw-flex tw-flex-col tw-items-center tw-gap-2 tw-mb-9"
                            }, null == O ? void 0 : O.parentListings.map((function(e) {
                                return v.createElement(A, {
                                    listingId: e
                                })
                            }))), v.createElement("h2", {
                                className: "heading tw-inline-block tw-w-full tw-text-base tw-text-center"
                            }, "Please remove this item from these listings prior to deleting this item."))), v.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-gap-2 tw-items-center"
                            }, v.createElement("div", {
                                className: "tw-w-1/2"
                            }, v.createElement(p.zx, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-button-bgtw-text-highlight",
                                onClick: J,
                                loading: D
                            }, "Understood"))))
                        };
                    return v.createElement("div", {
                        className: "tw-flex tw-flex-col tw-w-full tw-h-full tw-gap-5"
                    }, function() {
                        if (P) return v.createElement("div", {
                            className: "tw-px-3 tw-pb-4 tw-pt-5 tw-flex tw-flex-col tw-w-full tw-items-center"
                        }, v.createElement(p.$1, {
                            icon: F.LM,
                            spin: !0,
                            size: "2x"
                        }));
                        if (U) return _();
                        switch (f) {
                            case 1:
                                return R();
                            case 2:
                                return M();
                            default:
                                return null
                        }
                    }())
                };
            K.propTypes = {
                isOpen: H().bool,
                productId: H().string.isRequired,
                onCancelCallback: H().func
            };
            const W = K;
            var G = l(27484),
                Q = l.n(G),
                ee = l(97798);
            const te = function(e) {
                var t = e.editAction,
                    l = e.deleteAction,
                    n = (0, v.useState)(!1),
                    a = (0, r.Z)(n, 2),
                    c = a[0],
                    o = a[1],
                    s = (0, v.useState)(null),
                    i = (0, r.Z)(s, 2),
                    u = i[0],
                    m = i[1],
                    w = (0, v.useRef)(null);
                return (0, v.useEffect)((function() {
                    null != w && w.current && m(w.current.getBoundingClientRect())
                }), [w]), v.createElement("div", {
                    onMouseLeave: function() {
                        return o(!1)
                    }
                }, v.createElement(p.zx, {
                    ref: w,
                    className: "tw-h-9 tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        return o(!c)
                    }
                }, v.createElement(p.$1, {
                    icon: ee.Uw,
                    size: "1x"
                })), v.createElement("div", {
                    style: {
                        transform: "translate(-".concat(120 - (null == u ? void 0 : u.width), "px, 0px)")
                    },
                    className: "tw-pt-2 tw-min-w-min tw-w-[120px] tw-min-h-min tw-z-50 tw-absolute ".concat(c ? "tw-flex" : "tw-hidden")
                }, v.createElement("div", {
                    className: " tw-flex tw-flex-col tw-items-start tw-p-3 tw-items-start tw-bg-button-bg tw-border-2 tw-w-full tw-text-left tw-weight-[500]  tw-border-solid tw-border-button-border tw-rounded-lg "
                }, v.createElement("button", {
                    type: "button",
                    className: "tw-text-left tw-p-0 tw-w-full tw-text-option-inactive tw-border-none tw-bg-transparent hover:tw-text-white",
                    onClick: t
                }, "Edit"), v.createElement("hr", {
                    className: "tw-border-t-2 tw-border-solid tw-w-full tw-border-white tw-my-2"
                }), v.createElement("button", {
                    type: "button",
                    className: "tw-p-0 tw-text-red tw-border-none tw-bg-transparent",
                    onClick: l
                }, "Delete"))))
            };
            var le = function(e) {
                var t = e.productData,
                    l = void 0 === t ? null : t,
                    n = e.editProductCallback,
                    a = void 0 === n ? function() {} : n,
                    r = e.deleteProductCallback,
                    c = void 0 === r ? function() {} : r,
                    o = (0, y.I0)();
                if (null === l) return null;
                var s = l.id,
                    m = l.displayName,
                    w = l.created,
                    g = l.updated,
                    f = l.parentListings,
                    b = l.productType,
                    h = l.imageId;
                return v.createElement("div", {
                    className: "tw-relative"
                }, v.createElement("div", {
                    className: "tw-grid tw-gap-2 tw-grid-cols-3 @[540px]/my-products:tw-grid-cols-5 @[700px]/products-heading:tw-grid-cols-7 tw-mx-5"
                }, v.createElement(p.X2, {
                    className: "tw-flex tw-gap-1 tw-items-center tw-h-9 tw-my-2 @[800px]/my-products:tw-max-w-max tw-col-span-2"
                }, v.createElement(p.pw, {
                    fitToCover: !0,
                    imageId: h,
                    className: "tw-w-8 tw-h-8 tw-rounded-md tw-shrink-0"
                }), v.createElement("p", {
                    className: "tw-truncate tw-mb-0"
                }, m)), v.createElement("div", {
                    className: "tw-block tw-items-center tw-h-9 tw-py-2 tw-my-2 tw-truncate @[800px]/my-products:tw-max-w-max tw-capitalize tw-hidden @[540px]/my-products:tw-flex"
                }, b), v.createElement("div", {
                    className: "tw-items-center tw-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/my-products:tw-max-w-max tw-hidden @[700px]/my-products:tw-flex"
                }, Q()(w).format("ll")), v.createElement("div", {
                    className: "tw-items-center tw-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/my-products:tw-max-w-max tw-hidden @[700px]/my-products:tw-flex"
                }, Q()(g).format("ll")), v.createElement("div", {
                    className: "tw-flex tw-items-center tw-h-9 tw-my-2 tw-truncate @[800px]/my-products:tw-max-w-max @[700px]/products-heading:tw-col-span-1 tw-hidden @[540px]/my-products:tw-flex"
                }, v.createElement("span", {
                    className: "tw-truncate tw-hidden @[700px]/products-heading:tw-block"
                }, f && f.length > 0 ? "Available in ".concat(f.length, " listings") : "Unlisted"), v.createElement("span", {
                    className: "@[700px]/products-heading:tw-hidden tw-truncate"
                }, f && f.length > 0 ? "In ".concat(f.length, " listings") : "Unlisted")), v.createElement(p.X2, {
                    className: "tw-h-9 tw-truncate tw-my-2 tw-max-w-[100px] tw-w-fit tw-gap-2"
                }, v.createElement(p.zx, {
                    className: "tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        navigator.clipboard.writeText(s).then((function() {
                            o((0, d.d)({
                                title: "Copied product ID",
                                icon: u.f8,
                                message: "Product ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(e) {
                            var t, l;
                            o((0, d.d)({
                                title: "Failed to copy product ID",
                                icon: i.eH,
                                message: null !== (t = null === (l = res.error.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== t ? t : "Failed to copy product ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, v.createElement(p.$1, {
                    icon: P.kZ,
                    size: "1x"
                })), v.createElement(te, {
                    editAction: function() {
                        return a(l)
                    },
                    deleteAction: function() {
                        return c(l)
                    }
                }))))
            };
            le.propTypes = {
                productData: H().object
            };
            const ne = le;
            var ae = function(e) {
                e.isOpen;
                var t = e.createdProduct,
                    l = void 0 === t ? null : t,
                    n = e.closeModalCallback,
                    a = void 0 === n ? function() {} : n,
                    r = e.updated,
                    c = void 0 !== r && r;
                return null === l ? null : v.createElement("div", null, v.createElement("div", {
                    className: "tw-flex tw-min-h-full tw-items-end tw-justify-center tw-p-4 sm:tw-items-center sm:tw-p-0"
                }, v.createElement("div", null, v.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-items-center"
                }, v.createElement(p.pw, {
                    alt: null == l ? void 0 : l.displayName,
                    imageId: (null == l ? void 0 : l.imageId) || (null == l ? void 0 : l.file) || null,
                    fallbackSrc: X,
                    fitToCover: !0
                }), v.createElement("h2", {
                    className: "heading tw-mt-5"
                }, "Product ", c ? "Updated" : "Created", "!"), v.createElement("p", {
                    className: "tw-text-light-grey tw-text-center tw-mb-5 sm:tw-w-2/3"
                }, "Your udon product is all set! Continue in your Unity project. You will see this product available in your Udon products manager.")), v.createElement("div", {
                    className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap sm:tw-px-6 tw-w-full tw-gap-2"
                }, v.createElement("div", {
                    className: "sm:tw-w-1/2"
                }, v.createElement(C.rU, {
                    to: "https://creators.vrchat.com/economy/sdk/",
                    target: "_blank"
                }, v.createElement(p.zx, {
                    className: "tw-rounded-md tw-text-white tw-border-0 tw-bg-button-bg-grey",
                    onClick: a
                }, "View Docs"))), v.createElement("div", {
                    className: "sm:tw-w-1/2"
                }, v.createElement(p.zx, {
                    className: "tw-rounded-md tw-border-0 tw-mb-3 disabled:tw-bg-button-bg-grey disabled:tw-text-placeholder-text",
                    onClick: a
                }, "Done"))))))
            };
            ae.propTypes = {
                isOpen: H().bool,
                createdProduct: H().object.isRequired,
                closeModalCallback: H().func
            };
            const re = ae;
            const ce = function(e) {
                var t = e.createProduct,
                    l = void 0 === t ? function() {} : t;
                return v.createElement(p.JX, {
                    className: " tw-@container/product-info tw-text-center tw-gap-9 tw-mt-12"
                }, v.createElement("div", null, v.createElement("h4", null, "Enhance and Monetize Your Worlds"), v.createElement("p", {
                    className: "tw-mb-0 tw-text-xl"
                }, "The possibilities are endless, here are some ideas:")), v.createElement(p.JX, {
                    className: "tw-flex-col @sm/product-info:tw-flex-row tw-justify-evenly tw-gap-12"
                }, v.createElement(p.JX, {
                    className: "tw-items-center"
                }, v.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, v.createElement(p.$1, {
                    icon: Z.fk,
                    className: "tw-text-5xl",
                    role: "presentation",
                    alt: "",
                    color: "#9C9C9C"
                })), v.createElement("h4", {
                    className: "tw-text-lg"
                }, "Offer Custom Content"), v.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Transform your users' experiences with custom interactions and items, that bring your worlds to life.")), v.createElement(p.JX, {
                    className: "tw-items-center"
                }, v.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, v.createElement(p.$1, {
                    icon: Z.rP,
                    className: "tw-text-5xl",
                    role: "presentation",
                    alt: "",
                    color: "#9C9C9C"
                })), v.createElement("h4", {
                    className: "tw-text-lg"
                }, "Grant Access to Exclusive Events"), v.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Offer passes that provide time-limited access to exclusive events or areas of your world.")), v.createElement(p.JX, {
                    className: "tw-items-center"
                }, v.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, v.createElement(p.$1, {
                    icon: Z.F,
                    className: "tw-text-5xl",
                    role: "presentation",
                    alt: "",
                    color: "#9C9C9C"
                })), v.createElement("h4", {
                    className: "tw-text-lg"
                }, "Sell Unlockable Features and Upgrades"), v.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Introduce keys to unlock never-ending access to unique abilities and effects in your world."))), v.createElement(p.JX, {
                    className: "tw-items-center"
                }, v.createElement(p.zx, {
                    containerClasses: "tw-mb-3 tw-w-[200px]",
                    onClick: l
                }, v.createElement(p.$1, {
                    icon: s.r8
                }), " Create Product"), v.createElement("a", {
                    href: "https://creators.vrchat.com/economy/products/",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn more about products")))
            };

            function oe(e, t) {
                var l = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), l.push.apply(l, n)
                }
                return l
            }

            function se(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? oe(Object(l), !0).forEach((function(t) {
                        (0, n.Z)(e, t, l[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : oe(Object(l)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
                    }))
                }
                return e
            }
            var ie = [{
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
                ue = [];
            const me = function() {
                var e, t, l = (0, y.I0)(),
                    n = (0, N.s0)(),
                    m = (0, C.lr)(),
                    k = (0, r.Z)(m, 2),
                    I = k[0],
                    O = (k[1], (0, N.UO)().paginationPage),
                    P = O ? Number(O) : 1,
                    S = (0, v.useState)(""),
                    j = (0, r.Z)(S, 2),
                    T = j[0],
                    Z = (j[1], (0, v.useState)(I.get("sortBy") || null)),
                    D = (0, r.Z)(Z, 2),
                    F = D[0],
                    X = D[1],
                    L = (0, v.useState)(I.get("orderBy") || "descending"),
                    z = (0, r.Z)(L, 2),
                    A = z[0],
                    J = z[1],
                    U = v.useState({}),
                    $ = (0, r.Z)(U, 2),
                    R = $[0],
                    M = $[1],
                    _ = v.useState(!1),
                    B = (0, r.Z)(_, 2),
                    V = B[0],
                    Y = B[1],
                    H = v.useState(!1),
                    K = (0, r.Z)(H, 2),
                    G = K[0],
                    Q = K[1],
                    ee = v.useState(!1),
                    te = (0, r.Z)(ee, 2),
                    le = te[0],
                    ae = te[1],
                    oe = v.useState(null),
                    me = (0, r.Z)(oe, 2),
                    we = me[0],
                    de = me[1],
                    pe = v.useState(null),
                    ge = (0, r.Z)(pe, 2),
                    fe = ge[0],
                    be = ge[1],
                    he = v.useState(!1),
                    xe = (0, r.Z)(he, 2),
                    Ee = xe[0],
                    ve = xe[1],
                    ye = (0, h.Z)(T),
                    Ne = (0, x.IB)().data,
                    Ce = ((0, v.useMemo)((function() {
                        return {
                            sellerId: Ne.id,
                            n: 50,
                            pageValue: P
                        }
                    }), [I, ye, A, F, P]), (0, E.rP)({
                        userId: Ne.id,
                        n: 50,
                        pageValue: P
                    }, {
                        skip: !Ne.id,
                        refetchOnMountOrArgChange: !0
                    })),
                    ke = Ce.data,
                    Ie = Ce.isSuccess,
                    Oe = Ce.isFetching,
                    Pe = Ce.isError,
                    Se = Ce.error,
                    je = (0, E.qX)(),
                    Te = (0, r.Z)(je, 2),
                    Ze = Te[0],
                    De = Te[1],
                    Fe = (De.isSuccess, De.isLoading, De.isError, De.error, (0, E.wE)()),
                    Xe = (0, r.Z)(Fe, 2),
                    Le = Xe[0],
                    ze = Xe[1],
                    Ae = (ze.isSuccess, ze.isLoading, ze.isError, ze.error, function(e) {
                        var t = e.title,
                            l = void 0 === t ? "" : t,
                            n = e.data,
                            a = void 0 === n ? void 0 : n,
                            r = e.isEditing,
                            c = void 0 !== r && r,
                            o = e.productType,
                            s = void 0 === o ? b.Pm.UDON : o;
                        Y(!0), M({
                            title: l,
                            data: a,
                            isEditing: c,
                            productType: s
                        })
                    }),
                    Je = function() {
                        Y(!1), M({}), Q(!1), de(null), ae(!1), ve(!1), be(null)
                    },
                    Ue = function() {
                        var e = (0, a.Z)(w().mark((function e() {
                            var t, n, a, r, c, o, s = arguments;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = s.length > 0 && void 0 !== s[0] ? s[0] : {}, n = s.length > 1 && void 0 !== s[1] && s[1], a = s.length > 2 && void 0 !== s[2] ? s[2] : void 0, r = function() {
                                                l((0, d.d)({
                                                    title: "Product ".concat(n ? "updated" : "created", " successfully!"),
                                                    icon: u.f8,
                                                    message: "Your product has been ".concat(n ? "updated" : "created", " successfully!"),
                                                    color: "success",
                                                    timeout: 3e3
                                                })), de(t), Q(!0), ae(n)
                                            }, e.prev = 4, !n) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 8, Le(se(se({
                                            productId: t.id
                                        }, null !== a ? {
                                            file: a,
                                            tag: "product"
                                        } : {}), t)).unwrap();
                                    case 8:
                                        return e.abrupt("return", r());
                                    case 9:
                                        return e.next = 11, Ze(se(se({}, null !== a ? {
                                            file: a,
                                            tag: "product"
                                        } : {}), t)).unwrap();
                                    case 11:
                                        return e.abrupt("return", r());
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(4), console.log("error", e.t0), l((0, d.d)({
                                            title: "Failed to ".concat(n ? "update" : "create", " product!"),
                                            icon: i.eH,
                                            message: null !== (c = null === (o = e.t0.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== c ? c : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 14]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    $e = function(e) {
                        return F === e
                    },
                    Re = function(e) {
                        if (ue.includes(e)) return function(e) {
                            return $e(e) ? J("descending" === A ? "ascending" : "descending") : (X(e), J("ascending"))
                        }(e)
                    },
                    Me = function(e) {
                        Ae({
                            title: "Edit Product",
                            data: e,
                            isEditing: !0,
                            productType: "product"
                        })
                    },
                    _e = function(e) {
                        be(e), ve(!0), Ae({
                            title: "Delete Product",
                            data: e,
                            productType: "product"
                        })
                    };
                return v.createElement(v.Fragment, null, v.createElement(p.$4, null, "My Products"), 0 !== (null == ke ? void 0 : ke.length) || Oe || 1 !== P ? v.createElement(v.Fragment, null, v.createElement(p.X2, {
                    className: "tw-justify-between tw-gap-x-5 tw-gap-y-3 tw-flex-wrap"
                }, v.createElement("div", null), v.createElement(p.zx, {
                    "aria-label": "Create Product",
                    className: "tw-px-2",
                    onClick: function() {
                        return Ae({
                            title: "Create Product",
                            data: void 0,
                            isEditing: !1,
                            productType: b.Pm.ROLE
                        })
                    }
                }, v.createElement(p.$1, {
                    icon: s.r8,
                    size: "1x"
                }), " Create Product")), v.createElement("div", {
                    className: "tw-@container/my-products tw-rounded-md tw-bg-grey tw-mt-5"
                }, v.createElement("div", {
                    className: "tw-w-full tw-min-w-max tw-table-auto tw-pb-1 tw-@container/products-heading"
                }, v.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-3 @[540px]/products-heading:tw-grid-cols-5 @[700px]/products-heading:tw-grid-cols-7 tw-border-b tw-border-0 tw-border-solid tw-border-hr-line-color tw-py-3 tw-mx-5"
                }, ie.map((function(e) {
                    var t = e.label,
                        l = e.value,
                        n = e.canCollapse,
                        a = void 0 !== n && n,
                        r = e.isSmallColumn,
                        s = void 0 !== r && r,
                        i = e.mobileCollapse,
                        u = void 0 !== i && i;
                    return v.createElement("span", {
                        key: l,
                        className: "\n                  ".concat($e(l) ? "tw-text-light-white" : "tw-text-light-grey", "\n                  ").concat(a && "tw-hidden @[700px]/products-heading:tw-block", "\n                  ").concat(ue.includes(l) ? "tw-cursor-pointer" : "tw-cursor-auto", "\n                  ").concat(s ? "tw-max-w-[100px]" : "tw-max-w-auto", "\n                  ").concat(u && "tw-hidden @[540px]/products-heading:tw-block", "\n                  ").concat("displayName" === l ? "tw-col-span-2" : "tw-col-span-1", "\n                  tw-font-normal tw-text-base\n                "),
                        onClick: function() {
                            return Re(l)
                        },
                        onKeyDown: function(e) {
                            if ("Enter" === e.key || "Space" === e.key) return Re(l)
                        },
                        role: "button",
                        tabIndex: 0
                    }, t, ue.includes(l) && v.createElement(p.$1, {
                        icon: $e(l) && "ascending" === A ? o.fo : c.u9,
                        size: "1x",
                        className: "tw-ml-1 ".concat($e(l) && "ascending" === A ? "tw-align-bottom" : "tw-align-top")
                    }))
                }))), v.createElement("div", {
                    className: "tw-group"
                }, Oe ? v.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, v.createElement(g.Z, {
                    loading: !0
                })) : Pe ? v.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, v.createElement("p", null, "Error loading sales data:"), v.createElement("code", null, null !== (t = Se.data.error.message) && void 0 !== t ? t : "Unknown error")) : Ie && 0 === (null == ke ? void 0 : ke.length) ? v.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, v.createElement("p", {
                    className: "tw-mb-0"
                }, "There are no transactions data to display.")) : Ie ? ke.map((function(e) {
                    return v.createElement(ne, {
                        key: e.id,
                        productData: e,
                        editProductCallback: Me,
                        deleteProductCallback: _e
                    })
                })) : void 0), v.createElement("div", null, v.createElement(f.Z, {
                    totalCount: null !== (e = null == ke ? void 0 : ke.length) && void 0 !== e ? e : 0,
                    showCurrentPageOnly: !0,
                    currentPage: P,
                    pageSize: 50,
                    onPageChange: function(e) {
                        return n("/home/marketplace/storefront/products/page/".concat(e))
                    }
                }))))) : v.createElement(ce, {
                    createProduct: function() {
                        return Ae({
                            title: "Create Product",
                            data: void 0,
                            isEditing: !1,
                            productType: "product"
                        })
                    }
                }), v.createElement(p.u_, {
                    title: R.title,
                    onClose: Je,
                    isVisible: V,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: "auto",
                    disableBackdropClick: !0
                }, V && !Ee && !G && v.createElement(q, {
                    product: R.data,
                    onClose: Je,
                    isEditing: R.isEditing,
                    onSubmit: Ue,
                    user: Ne
                }), V && G && v.createElement(re, {
                    isOpen: G,
                    createdProduct: we,
                    updated: le,
                    closeModalCallback: Je
                }), V && Ee && v.createElement(W, {
                    productId: null == fe ? void 0 : fe.id,
                    isOpen: Ee,
                    onCancelCallback: Je
                })))
            }
        }
    }
]);
//# sourceMappingURL=8adf8c625bda33bada8addeb400d55e58720f156d52cf902988ea699f9bc2e4a.js.map