"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8763], {
        58271: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => de
            });
            var l = n(4942),
                r = n(15861),
                a = n(54546),
                c = n(62475),
                o = n(96766),
                s = n(40098),
                i = n(76553),
                u = n(6811),
                m = n(64687),
                d = n.n(m),
                w = n(64258),
                p = n(14411),
                g = n(98185),
                f = n(35187),
                b = n(95896),
                h = n(76176),
                E = n(22202),
                x = n(67978),
                v = n(67294),
                y = n(32981),
                N = n(89250),
                C = n(79655),
                k = n(45987),
                I = n(41145),
                O = n(62228),
                P = n(2909),
                S = n(82414),
                j = n(78076),
                T = n(63221),
                Z = n(74205),
                D = n(93261),
                F = n(65061),
                X = n(92332),
                L = n(67263),
                z = n(16869),
                A = function(e) {
                    var t, n = e.listingId,
                        l = e.className,
                        r = void 0 === l ? "" : l,
                        a = e.showImage,
                        c = void 0 !== a && a,
                        o = (0, z.mr)({
                            listingId: n
                        }, {
                            skip: !n
                        }),
                        s = o.data,
                        i = o.isFetching,
                        u = o.isSuccess,
                        m = o.isError;
                    i && (p.$1, X.LM);
                    var d = (null === (t = b.di.find((function(e) {
                        return e.value === (null == s ? void 0 : s.listingType)
                    }))) || void 0 === t ? void 0 : t.label) || (null == s ? void 0 : s.listingType);
                    return u ? v.createElement("div", {
                        className: "".concat(r)
                    }, c && v.createElement(p.pw, {
                        imageId: null == s ? void 0 : s.imageId,
                        alt: null == s ? void 0 : s.displayName,
                        fallbackSrc: L,
                        fitToCover: !0,
                        className: "tw-h-7 tw-w-7 tw-mr-2"
                    }), v.createElement("p", {
                        className: "tw-font-bold tw-mb-0"
                    }, null == s ? void 0 : s.displayName, " (", d, ")")) : m ? v.createElement("div", {
                        className: "".concat(r)
                    }, v.createElement("p", {
                        className: "tw-font-bold tw-mb-0"
                    }, n)) : null
                };
            A.propTypes = {};
            const J = A,
                U = n.p + "4343c06f1cea0647f1a7055a0eb7c663738ede74f753c13bcb03c48403185022.png";
            var $ = ["file", "imageId"],
                R = ["file"],
                M = ["imageId"];

            function B(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    t && (l = l.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, l)
                }
                return n
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? B(Object(n), !0).forEach((function(t) {
                        (0, l.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var q = {
                sellerId: void 0,
                displayName: "",
                description: "",
                tags: [],
                imageId: "",
                productType: b.Pm.UDON,
                useForSubscriberList: !1
            };
            const V = function(e) {
                var t, n = e.product,
                    l = void 0 === n ? null : n,
                    r = e.isEditing,
                    c = void 0 !== r && r,
                    o = e.user,
                    s = e.onSubmit,
                    m = void 0 === s ? function() {} : s,
                    d = e.onClose,
                    g = void 0 === d ? function() {} : d;
                if (null === l && c) return null;
                var f = null !== (t = null == l ? void 0 : l.parentListings) && void 0 !== t ? t : [],
                    h = (0, y.I0)(),
                    x = (0, E.IB)({
                        skip: o
                    }).data,
                    N = o || x,
                    C = l || _(_({}, q), {}, {
                        sellerId: null == N ? void 0 : N.id
                    }),
                    X = (0, v.useState)(C),
                    L = (0, a.Z)(X, 2),
                    z = L[0],
                    A = L[1],
                    B = (0, v.useState)(z.useForSubscriberList || !1),
                    V = (0, a.Z)(B, 2),
                    Y = V[0],
                    H = V[1],
                    K = (0, v.useState)(z.groupAccess || !1),
                    W = (0, a.Z)(K, 2),
                    G = W[0],
                    Q = W[1],
                    ee = (0, v.useState)(z.groupAccessRemove || !1),
                    te = (0, a.Z)(ee, 2),
                    ne = te[0],
                    le = te[1],
                    re = (0, v.useState)(l ? null == l ? void 0 : l.imageId : null),
                    ae = (0, a.Z)(re, 2),
                    ce = ae[0],
                    oe = ae[1],
                    se = (0, v.useState)(!1),
                    ie = (0, a.Z)(se, 2),
                    ue = ie[0],
                    me = ie[1],
                    de = (0, v.useState)(!1),
                    we = (0, a.Z)(de, 2),
                    pe = we[0],
                    ge = we[1],
                    fe = (0, v.useState)(!1),
                    be = (0, a.Z)(fe, 2),
                    he = be[0],
                    Ee = be[1],
                    xe = (0, v.useRef)(null),
                    ve = (0, D.r5)({
                        groupId: null == l ? void 0 : l.groupId
                    }, {
                        skip: !(c || null != l && l.groupId)
                    }),
                    ye = ve.data,
                    Ne = ve.isLoading,
                    Ce = ve.isError,
                    ke = (ve.Error, (null == ye ? void 0 : ye.joinState) === T.wN.OPEN ? "Your group is already set to Free Join, so enabling this option won’t have any effect. Subscribers will still join automatically." : "When enabled, anyone can purchase this role and join the group, regardless of the group’s join rules. This option overrides standard join settings.");
                (0, v.useEffect)((function() {
                    (null == ye ? void 0 : ye.joinState) === T.wN.OPEN && (Q(!0), A(_(_({}, z), {}, {
                        groupAccess: !0
                    })))
                }), [ye]), (0, v.useEffect)((function() {
                    var e = function(e) {
                        xe.current && !xe.current.contains(e.target) && Ee(!1)
                    };
                    return he ? document.addEventListener("mousedown", e) : document.removeEventListener("mousedown", e),
                        function() {
                            document.removeEventListener("mousedown", e)
                        }
                }), [he]);
                return v.createElement(v.Fragment, null, v.createElement("form", {
                    onSubmit: function(e) {
                        e.preventDefault(), m(z, c, "string" != typeof ce ? ce : null)
                    },
                    className: "tw-w-full"
                }, v.createElement(p.JX, null, v.createElement(p.JX, {
                    className: "tw-mb-8"
                }, v.createElement(p.X2, {
                    className: "tw-gap-5 tw-mb-5 tw-flex-col sm:tw-flex-row"
                }, v.createElement(p.JX, null, v.createElement("button", {
                    type: "button",
                    onClick: function() {
                        me(!0)
                    },
                    className: "tw-border-0 tw-p-0 tw-rounded tw-relative tw-items-center tw-justify-center tw-flex tw-bg-transparent"
                }, !ce && v.createElement(p.zx, {
                    type: "button",
                    containerClasses: "tw-rounded tw-absolute tw-flex-1"
                }, v.createElement(p.$1, {
                    icon: j.Vm,
                    className: "tw-mr-2"
                }), v.createElement("span", null, "Upload Thumbnail")), v.createElement(p.pw, {
                    imageId: ce,
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
                    value: z.displayName,
                    onChange: function(e) {
                        return A(_(_({}, z), {}, {
                            displayName: e.target.value
                        }))
                    }
                }), v.createElement("small", {
                    className: "tw-text-light-grey"
                }, z.displayName.length, "/64")), v.createElement(p.JX, null, v.createElement("label", {
                    htmlFor: "description"
                }, "Description"), v.createElement(p.gx, {
                    type: "textarea",
                    id: "description",
                    inputClassName: "tw-h-[120px] tw-my-2",
                    maxLength: 256,
                    value: z.description,
                    onChange: function(e) {
                        return A(_(_({}, z), {}, {
                            description: e.target.value
                        }))
                    }
                }), v.createElement("small", {
                    className: "tw-text-light-grey"
                }, z.description.length, "/256")))), c && v.createElement(p.JX, {
                    className: "tw-mb-5"
                }, v.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2 tw-flex tw-flex-row"
                }, "Product ID", v.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1",
                    ref: xe
                }, v.createElement("button", {
                    id: "productIdTooltip",
                    type: "button",
                    className: "tw-bg-transparent tw-border-none",
                    onClick: function() {
                        return Ee(!he)
                    },
                    "aria-label": "Product ID tooltip"
                }, v.createElement(p.$1, {
                    icon: S.sq,
                    className: "tw-text-light-grey"
                })), v.createElement(F.Z, {
                    isOpen: he,
                    target: "productIdTooltip",
                    placement: "right",
                    trigger: "click",
                    innerClassName: "tw-bg-gray-900"
                }, v.createElement("span", {
                    className: "tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50"
                }, "This unique ID links your Udon product to the VRChat Worlds SDK, allowing you to track ownership within your world.")))), v.createElement(p.X2, {
                    className: "tw-gap-2"
                }, v.createElement(p.II, {
                    type: "text",
                    id: "id",
                    value: z.id,
                    disabled: !0,
                    className: "tw-flex-1"
                }), v.createElement(p.zx, {
                    type: "button",
                    className: "tw-w-[40px] tw-h-[40px]",
                    onClick: function() {
                        navigator.clipboard.writeText(z.id).then((function() {
                            h((0, w.d)({
                                title: "Copied product ID",
                                icon: u.f8,
                                message: "Product ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(e) {
                            var t, n;
                            h((0, w.d)({
                                title: "Failed to copy product ID",
                                icon: i.eH,
                                message: null !== (t = null === (n = res.error.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Failed to copy product ID",
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
                }, "Product Type"), (null == l ? void 0 : l.productType) === b.Pm.ROLE && v.createElement(p.X2, {
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
                }, "Learn More")))), (null == l ? void 0 : l.productType) !== b.Pm.ROLE && v.createElement(p.X2, {
                    className: "tw-gap-3"
                }, v.createElement("div", {
                    className: "tw-rounded-full tw-w-[90px] tw-h-[90px] tw-bg-[#303135]"
                }, v.createElement("img", {
                    alt: "udon logo",
                    width: "90",
                    src: U
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
                }, "Associated ", "role" === (null == l ? void 0 : l.productType) ? "Subscription" : "Listings", " ", f.length > 0 && "(".concat(f.length, ")")), 0 === f.length && v.createElement("p", {
                    className: "tw-text-placeholder-text tw-mb-0"
                }, "None"), f.length > 0 && v.createElement(p.JX, null, v.createElement("div", {
                    className: "tw-gap-2 tw-w-full tw-grid tw-grid-cols-2 tw-mb-3"
                }, (pe ? f : f.slice(0, 6)).map((function(e) {
                    return v.createElement(J, {
                        listingId: e,
                        showImage: !0,
                        className: "tw-flex tw-flex-row"
                    })
                }))), f.length > 6 && v.createElement(p.X2, {
                    className: "tw-items-center tw-gap-2"
                }, v.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return ge(!pe)
                    },
                    className: "tw-mb-0 tw-appearance-none tw-bg-transparent tw-border-none tw-text-light-grey"
                }, pe ? "Show Less " : "Show all listings ", pe ? v.createElement(p.$1, {
                    icon: O.mT
                }) : v.createElement(p.$1, {
                    icon: I.pt
                }))))), !(c && (null == l ? void 0 : l.productType) === b.Pm.ROLE) && v.createElement(p.X2, {
                    className: "tw-bg-[#252A30] tw-p-5 tw-rounded-lg tw-mb-5 tw-gap-2 sm:tw-gap-9"
                }, v.createElement(p.JX, null, v.createElement("p", {
                    className: "tw-mb-1"
                }, "Enable Access to Owner Names"), v.createElement("small", {
                    className: "tw-text-light-grey"
                }, "If enabled, the display names of this product's owners are available to Udon code in your worlds which reference it. These can then be displayed to the world's visitors on supporter boards, for example.")), v.createElement(p.X2, {
                    className: "tw-justify-center tw-items-center tw-gap-3"
                }, v.createElement("label", {
                    htmlFor: "useForSubscriberList"
                }, Y ? "On" : "Off"), v.createElement(p.K_, {
                    value: "useForSubscriberList",
                    defaultChecked: Y,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        H(t), A(_(_({}, z), {}, {
                            useForSubscriberList: t
                        }))
                    }
                }))), c && (null == l ? void 0 : l.productType) === b.Pm.ROLE && v.createElement(v.Fragment, null, v.createElement(p.JX, {
                    className: "tw-bg-[#252A30] tw-p-5 tw-rounded-lg"
                }, v.createElement(p.K_, {
                    label: "Enable Free Join for Subscribers",
                    value: "groupAccess",
                    defaultChecked: G,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        if (Q(t), !t) return le(!1), void A(_(_({}, z), {}, {
                            groupAccess: t,
                            groupAccessRemove: !1
                        }));
                        A(_(_({}, z), {}, {
                            groupAccess: t
                        }))
                    },
                    disabled: !ye || Ne || Ce || (null == ye ? void 0 : ye.joinState) === T.wN.OPEN
                }), v.createElement("small", null, ke)), G && v.createElement(p.JX, {
                    className: "tw-bg-[#252A30] tw-p-5 tw-rounded-lg tw-mt-5"
                }, v.createElement(v.Fragment, null, v.createElement(p.K_, {
                    label: "Remove Members After Expiration",
                    value: "groupAccessRemove",
                    defaultChecked: ne,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        le(t), A(_(_({}, z), {}, {
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
                    image: ce,
                    isOpen: ue,
                    onClose: function() {
                        return me(!1)
                    },
                    confirmCallback: function(e) {
                        var t = e.fileId,
                            n = void 0 === t ? null : t,
                            l = e.fileBlob,
                            r = void 0 === l ? null : l,
                            a = null !== n;
                        return null === n && null === r ? (oe(null), void A((function(e) {
                            e.file, e.imageId;
                            return (0, k.Z)(e, $)
                        }))) : a ? (oe(n), void A((function(e) {
                            e.file;
                            return _(_({}, (0, k.Z)(e, R)), {}, {
                                imageId: n
                            })
                        }))) : (oe(r), void A((function(e) {
                            e.imageId;
                            return _(_({}, (0, k.Z)(e, M)), {}, {
                                file: r
                            })
                        })))
                    },
                    cancelCallBack: function() {
                        return me(!1)
                    },
                    className: "tw-w-[285px] tw-aspect-square"
                }))
            };
            var Y = n(53359),
                H = n(45697),
                K = n.n(H),
                W = function(e) {
                    e.isOpen;
                    var t = e.productId,
                        n = void 0 === t ? null : t,
                        l = e.onCancelCallback,
                        c = void 0 === l ? function() {} : l;
                    if (null === n) return null;
                    var o = (0, y.I0)(),
                        s = (0, E.IB)().data,
                        m = (0, v.useState)(1),
                        g = (0, a.Z)(m, 2),
                        f = g[0],
                        b = g[1],
                        h = (0, v.useState)(!1),
                        N = (0, a.Z)(h, 2),
                        C = N[0],
                        k = N[1],
                        I = (0, x.lZ)({
                            productId: n
                        }, {
                            skip: null === n
                        }),
                        O = I.data,
                        P = I.isFetching,
                        S = (0, x.xq)(),
                        j = (0, a.Z)(S, 2),
                        T = j[0],
                        Z = j[1],
                        D = Z.isLoading,
                        F = Z.isError,
                        L = Z.error,
                        z = Z.reset,
                        A = function() {
                            b(1), k(!1), c(), z()
                        },
                        U = (null == O ? void 0 : O.parentListings.length) > 0,
                        $ = function() {
                            var e = (0, r.Z)(d().mark((function e() {
                                var t, l;
                                return d().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, T({
                                                productId: n,
                                                ownerId: null == s ? void 0 : s.id
                                            }).unwrap();
                                        case 3:
                                            o((0, w.d)({
                                                title: "Product deleted",
                                                icon: u.f8,
                                                message: "".concat(O.displayName, " has been deleted."),
                                                color: "success",
                                                timeout: 3e3
                                            })), A(), e.next = 12;
                                            break;
                                        case 7:
                                            return e.prev = 7, e.t0 = e.catch(0), console.error(e.t0), o((0, w.d)({
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
                                onClick: A
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
                                icon: Y.faTriangleExclamation,
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
                                className: "tw-flex tw-items-center tw-gap-2"
                            }, v.createElement("input", {
                                id: "checked-checkbox",
                                type: "checkbox",
                                checked: C,
                                onChange: function() {
                                    return k(!C)
                                },
                                value: "acknowledge",
                                className: "tw-w-7 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-border-[#677079] tw-rounded focus:tw-ring-link-highlight tw-ring-offset-gray-800 focus:tw-ring-1"
                            }), v.createElement("label", {
                                for: "checked-checkbox",
                                className: "tw-text-sm tw-font-medium tw-text-white"
                            }, "I acknowledge that deleting this product will revoke access for existing users and confirm compliance with the Creator Economy guidelines."))), F && v.createElement("div", {
                                className: "tw-w-full tw-text-red tw-text-center"
                            }, v.createElement("p", null, "Failed to delete product:"), v.createElement("code", {
                                className: "tw-text-red"
                            }, null !== (e = null === (t = L.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "".concat(n, " An error occurred")))), v.createElement("div", {
                                className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap tw-w-full tw-gap-2"
                            }, v.createElement("div", {
                                className: "sm:tw-w-1/2"
                            }, v.createElement(p.zx, {
                                className: "tw-rounded-md tw-text-white tw-h-9 tw-border-0 tw-bg-button-bg-grey",
                                onClick: A
                            }, "Cancel")), v.createElement("div", {
                                className: "sm:tw-w-1/2"
                            }, v.createElement(p.zx, {
                                className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-message-warning tw-text-white disabled:tw-bg-button-bg-grey disabled:tw-text-placeholder-text",
                                onClick: $,
                                disabled: !C,
                                loading: D
                            }, "Delete"))))
                        },
                        B = function() {
                            return v.createElement(v.Fragment, null, v.createElement("div", {
                                className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                            }, v.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-w-full"
                            }, v.createElement(p.$1, {
                                icon: Y.faTriangleExclamation,
                                size: "xl",
                                className: "tw-h-[72px] tw-mb-4"
                            }), v.createElement("p", {
                                className: " tw-text-base tw-m-0 tw-text-center tw-mb-2"
                            }, "This product is included in the following listings:"), v.createElement("div", {
                                className: "tw-w-full tw-flex tw-flex-col tw-items-center tw-gap-2 tw-mb-9"
                            }, null == O ? void 0 : O.parentListings.map((function(e) {
                                return v.createElement(J, {
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
                                onClick: A,
                                loading: D
                            }, "Understood"))))
                        };
                    return v.createElement("div", {
                        className: "tw-flex tw-flex-col tw-w-full tw-h-full tw-gap-5"
                    }, function() {
                        if (P) return v.createElement("div", {
                            className: "tw-px-3 tw-pb-4 tw-pt-5 tw-flex tw-flex-col tw-w-full tw-items-center"
                        }, v.createElement(p.$1, {
                            icon: X.LM,
                            spin: !0,
                            size: "2x"
                        }));
                        if (U) return B();
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
            W.propTypes = {
                isOpen: K().bool,
                productId: K().string.isRequired,
                onCancelCallback: K().func
            };
            const G = W;
            var Q = n(27484),
                ee = n.n(Q),
                te = n(97798);
            const ne = function(e) {
                var t = e.editAction,
                    n = e.deleteAction,
                    l = (0, v.useState)(!1),
                    r = (0, a.Z)(l, 2),
                    c = r[0],
                    o = r[1],
                    s = (0, v.useState)(null),
                    i = (0, a.Z)(s, 2),
                    u = i[0],
                    m = i[1],
                    d = (0, v.useRef)(null);
                return (0, v.useEffect)((function() {
                    null != d && d.current && m(d.current.getBoundingClientRect())
                }), [d]), v.createElement("div", {
                    onMouseLeave: function() {
                        return o(!1)
                    }
                }, v.createElement(p.zx, {
                    ref: d,
                    className: "tw-h-9 tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        return o(!c)
                    }
                }, v.createElement(p.$1, {
                    icon: te.Uw,
                    size: "1x"
                })), v.createElement("div", {
                    style: {
                        transform: "translate(-".concat(120 - (null == u ? void 0 : u.width), "px, 0px)")
                    },
                    className: "tw-pt-2 tw-min-w-min tw-w-[120px] tw-min-h-min tw-z-50 tw-absolute ".concat(c ? "tw-flex" : "tw-hidden")
                }, v.createElement(p.JX, {
                    className: "tw-items-start tw-items-start tw-bg-button-bg-grey tw-border-2 tw-w-full tw-text-left tw-weight-[500]  tw-border-solid tw-border-[#666666] tw-rounded-lg"
                }, v.createElement("button", {
                    type: "button",
                    className: "tw-text-left tw-px-3 tw-py-2 tw-w-full tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]",
                    onClick: t
                }, "Edit"), v.createElement("hr", {
                    className: "tw-border-t-2 tw-m-0 tw-border-solid tw-w-full tw-border-white"
                }), v.createElement("button", {
                    type: "button",
                    className: "tw-px-3 tw-py-2 tw-text-red tw-text-left tw-border-none tw-w-full tw-bg-transparent hover:tw-bg-[#666666] hover:tw-text-white",
                    onClick: n
                }, "Delete"))))
            };
            var le = function(e) {
                var t = e.productData,
                    n = void 0 === t ? null : t,
                    l = e.editProductCallback,
                    r = void 0 === l ? function() {} : l,
                    a = e.deleteProductCallback,
                    c = void 0 === a ? function() {} : a,
                    o = (0, y.I0)();
                if (null === n) return null;
                var s = n.id,
                    m = n.displayName,
                    d = n.created,
                    g = n.updated,
                    f = n.parentListings,
                    b = n.productType,
                    h = n.imageId;
                return v.createElement("div", {
                    className: "tw-relative"
                }, v.createElement("div", {
                    className: "tw-grid tw-gap-2 tw-grid-cols-3 @[540px]/my-products:tw-grid-cols-5 @[700px]/products-heading:tw-grid-cols-7 tw-mx-5 tw-border-hr-line-color tw-border-b-[1px] tw-border-t-0 tw-border-x-0 tw-border-solid"
                }, v.createElement(p.X2, {
                    className: "tw-flex tw-gap-1 tw-items-center tw-h-9 tw-my-2 @[800px]/my-products:tw-max-w-max tw-col-span-2"
                }, v.createElement(p.pw, {
                    fitToCover: !0,
                    imageId: h,
                    className: "tw-w-8 tw-h-8 tw-rounded-md tw-shrink-0",
                    containerColor: "#181B1F",
                    iconColor: "#404C58"
                }), v.createElement("p", {
                    className: "tw-truncate tw-mb-0"
                }, m)), v.createElement("div", {
                    className: "tw-block tw-items-center tw-h-9 tw-py-2 tw-my-2 tw-truncate @[800px]/my-products:tw-max-w-max tw-capitalize tw-hidden @[540px]/my-products:tw-flex"
                }, b), v.createElement("div", {
                    className: "tw-items-center tw-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/my-products:tw-max-w-max tw-hidden @[700px]/my-products:tw-flex"
                }, ee()(d).format("ll")), v.createElement("div", {
                    className: "tw-items-center tw-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/my-products:tw-max-w-max tw-hidden @[700px]/my-products:tw-flex"
                }, ee()(g).format("ll")), v.createElement("div", {
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
                            o((0, w.d)({
                                title: "Copied product ID",
                                icon: u.f8,
                                message: "Product ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(e) {
                            var t, n;
                            o((0, w.d)({
                                title: "Failed to copy product ID",
                                icon: i.eH,
                                message: null !== (t = null === (n = res.error.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Failed to copy product ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, v.createElement(p.$1, {
                    icon: P.kZ,
                    size: "1x"
                })), v.createElement(ne, {
                    editAction: function() {
                        return r(n)
                    },
                    deleteAction: function() {
                        return c(n)
                    }
                }))))
            };
            le.propTypes = {
                productData: K().object
            };
            const re = le;
            var ae = function(e) {
                e.isOpen;
                var t = e.createdProduct,
                    n = void 0 === t ? null : t,
                    l = e.closeModalCallback,
                    r = void 0 === l ? function() {} : l,
                    a = e.updated,
                    c = void 0 !== a && a;
                return null === n ? null : v.createElement("div", null, v.createElement("div", {
                    className: "tw-flex tw-min-h-full tw-items-end tw-justify-center tw-p-4 sm:tw-items-center sm:tw-p-0"
                }, v.createElement("div", null, v.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-items-center"
                }, v.createElement(p.pw, {
                    alt: null == n ? void 0 : n.displayName,
                    imageId: (null == n ? void 0 : n.imageId) || (null == n ? void 0 : n.file) || null,
                    fallbackSrc: L,
                    fitToCover: !0
                }), v.createElement("h2", {
                    className: "heading tw-mt-5"
                }, "Product ", c ? "Updated" : "Created", "!"), v.createElement("p", {
                    className: "tw-text-light-grey tw-text-center tw-mb-8 sm:tw-w-3/4"
                }, "Your udon product is all set! Continue in your Unity project. You will see this product available in your Udon products manager.")), v.createElement("div", {
                    className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-flex-nowrap sm:tw-px-6 tw-w-full tw-gap-2"
                }, v.createElement("div", {
                    className: "sm:tw-w-1/2"
                }, v.createElement(C.rU, {
                    to: "https://creators.vrchat.com/economy/sdk/",
                    target: "_blank"
                }, v.createElement(p.zx, {
                    className: "tw-rounded-md tw-text-white tw-border-0 tw-bg-button-bg-grey",
                    onClick: r
                }, "View Docs"))), v.createElement("div", {
                    className: "sm:tw-w-1/2"
                }, v.createElement(p.zx, {
                    className: "tw-rounded-md tw-border-0 tw-mb-3 disabled:tw-bg-button-bg-grey disabled:tw-text-placeholder-text",
                    onClick: r
                }, "Done"))))))
            };
            ae.propTypes = {
                isOpen: K().bool,
                createdProduct: K().object.isRequired,
                closeModalCallback: K().func
            };
            const ce = ae;
            const oe = function(e) {
                var t = e.createProduct,
                    n = void 0 === t ? function() {} : t;
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
                    onClick: n
                }, v.createElement(p.$1, {
                    icon: s.r8
                }), " Create Product"), v.createElement("a", {
                    href: "https://creators.vrchat.com/economy/products/",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn more about products")))
            };

            function se(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    t && (l = l.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, l)
                }
                return n
            }

            function ie(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? se(Object(n), !0).forEach((function(t) {
                        (0, l.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : se(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ue = [{
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
                me = [];
            const de = function() {
                var e, t, n = (0, y.I0)(),
                    l = (0, N.s0)(),
                    m = (0, C.lr)(),
                    k = (0, a.Z)(m, 2),
                    I = k[0],
                    O = (k[1], (0, N.UO)().paginationPage),
                    P = O ? Number(O) : 1,
                    S = (0, v.useState)(""),
                    j = (0, a.Z)(S, 2),
                    T = j[0],
                    Z = (j[1], (0, v.useState)(I.get("sortBy") || null)),
                    D = (0, a.Z)(Z, 2),
                    F = D[0],
                    X = D[1],
                    L = (0, v.useState)(I.get("orderBy") || "descending"),
                    z = (0, a.Z)(L, 2),
                    A = z[0],
                    J = z[1],
                    U = v.useState({}),
                    $ = (0, a.Z)(U, 2),
                    R = $[0],
                    M = $[1],
                    B = v.useState(!1),
                    _ = (0, a.Z)(B, 2),
                    q = _[0],
                    Y = _[1],
                    H = v.useState(!1),
                    K = (0, a.Z)(H, 2),
                    W = K[0],
                    Q = K[1],
                    ee = v.useState(!1),
                    te = (0, a.Z)(ee, 2),
                    ne = te[0],
                    le = te[1],
                    ae = v.useState(null),
                    se = (0, a.Z)(ae, 2),
                    de = se[0],
                    we = se[1],
                    pe = v.useState(null),
                    ge = (0, a.Z)(pe, 2),
                    fe = ge[0],
                    be = ge[1],
                    he = v.useState(!1),
                    Ee = (0, a.Z)(he, 2),
                    xe = Ee[0],
                    ve = Ee[1],
                    ye = (0, h.Z)(T),
                    Ne = (0, E.IB)().data,
                    Ce = ((0, v.useMemo)((function() {
                        return {
                            sellerId: Ne.id,
                            n: 50,
                            pageValue: P
                        }
                    }), [I, ye, A, F, P]), (0, x.rP)({
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
                    je = (0, x.qX)(),
                    Te = (0, a.Z)(je, 2),
                    Ze = Te[0],
                    De = Te[1],
                    Fe = (De.isSuccess, De.isLoading, De.isError, De.error, (0, x.wE)()),
                    Xe = (0, a.Z)(Fe, 2),
                    Le = Xe[0],
                    ze = Xe[1],
                    Ae = (ze.isSuccess, ze.isLoading, ze.isError, ze.error, function(e) {
                        var t = e.title,
                            n = void 0 === t ? "" : t,
                            l = e.data,
                            r = void 0 === l ? void 0 : l,
                            a = e.isEditing,
                            c = void 0 !== a && a,
                            o = e.productType,
                            s = void 0 === o ? b.Pm.UDON : o;
                        Y(!0), M({
                            title: n,
                            data: r,
                            isEditing: c,
                            productType: s
                        })
                    }),
                    Je = function() {
                        Y(!1), M({}), Q(!1), we(null), le(!1), ve(!1), be(null)
                    },
                    Ue = function() {
                        var e = (0, r.Z)(d().mark((function e() {
                            var t, l, r, a, c, o, s = arguments;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = s.length > 0 && void 0 !== s[0] ? s[0] : {}, l = s.length > 1 && void 0 !== s[1] && s[1], r = s.length > 2 && void 0 !== s[2] ? s[2] : void 0, a = function() {
                                                n((0, w.d)({
                                                    title: "Product ".concat(l ? "updated" : "created", " successfully!"),
                                                    icon: u.f8,
                                                    message: "Your product has been ".concat(l ? "updated" : "created", " successfully!"),
                                                    color: "success",
                                                    timeout: 3e3
                                                })), we(t), Q(!0), le(l)
                                            }, e.prev = 4, !l) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 8, Le(ie(ie({
                                            productId: t.id
                                        }, null !== r ? {
                                            file: r,
                                            tag: "product"
                                        } : {}), t)).unwrap();
                                    case 8:
                                        return e.abrupt("return", a());
                                    case 9:
                                        return e.next = 11, Ze(ie(ie({}, null !== r ? {
                                            file: r,
                                            tag: "product"
                                        } : {}), t)).unwrap();
                                    case 11:
                                        return e.abrupt("return", a());
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(4), console.log("error", e.t0), n((0, w.d)({
                                            title: "Failed to ".concat(l ? "update" : "create", " product!"),
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
                        if (me.includes(e)) return function(e) {
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
                    Be = function(e) {
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
                    className: "tw-grid tw-gap-1 tw-grid-cols-3 @[540px]/products-heading:tw-grid-cols-5 @[700px]/products-heading:tw-grid-cols-7 tw-border-b-[1px] tw-border-0 tw-border-solid tw-border-hr-line-color tw-py-3 tw-pb-3 tw-mx-5"
                }, ue.map((function(e) {
                    var t = e.label,
                        n = e.value,
                        l = e.canCollapse,
                        r = void 0 !== l && l,
                        a = e.isSmallColumn,
                        s = void 0 !== a && a,
                        i = e.mobileCollapse,
                        u = void 0 !== i && i;
                    return v.createElement("span", {
                        key: n,
                        className: "\n                  ".concat($e(n) ? "tw-text-light-white" : "tw-text-light-grey", "\n                  ").concat(r && "tw-hidden @[700px]/products-heading:tw-block", "\n                  ").concat(me.includes(n) ? "tw-cursor-pointer" : "tw-cursor-auto", "\n                  ").concat(s ? "tw-max-w-[100px]" : "tw-max-w-auto", "\n                  ").concat(u && "tw-hidden @[540px]/products-heading:tw-block", "\n                  ").concat("displayName" === n ? "tw-col-span-2" : "tw-col-span-1", "\n                  tw-font-normal tw-text-base\n                "),
                        onClick: function() {
                            return Re(n)
                        },
                        onKeyDown: function(e) {
                            if ("Enter" === e.key || "Space" === e.key) return Re(n)
                        },
                        role: "button",
                        tabIndex: 0
                    }, t, me.includes(n) && v.createElement(p.$1, {
                        icon: $e(n) && "ascending" === A ? o.fo : c.u9,
                        size: "1x",
                        className: "tw-ml-1 ".concat($e(n) && "ascending" === A ? "tw-align-bottom" : "tw-align-top")
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
                    return v.createElement(re, {
                        key: e.id,
                        productData: e,
                        editProductCallback: Me,
                        deleteProductCallback: Be
                    })
                })) : void 0), v.createElement("div", null, v.createElement(f.Z, {
                    className: "tw-pt-2",
                    totalCount: null !== (e = null == ke ? void 0 : ke.length) && void 0 !== e ? e : 0,
                    showCurrentPageOnly: !0,
                    currentPage: P,
                    pageSize: 50,
                    onPageChange: function(e) {
                        return l("/home/marketplace/storefront/products/page/".concat(e))
                    }
                }))))) : v.createElement(oe, {
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
                    isVisible: q,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: "auto",
                    disableBackdropClick: !0,
                    backgroundColor: "#181B1F"
                }, q && !xe && !W && v.createElement(V, {
                    product: R.data,
                    onClose: Je,
                    isEditing: R.isEditing,
                    onSubmit: Ue,
                    user: Ne
                }), q && W && v.createElement(ce, {
                    isOpen: W,
                    createdProduct: de,
                    updated: ne,
                    closeModalCallback: Je
                }), q && xe && v.createElement(G, {
                    productId: null == fe ? void 0 : fe.id,
                    isOpen: xe,
                    onCancelCallback: Je
                })))
            }
        }
    }
]);
//# sourceMappingURL=f1ec1c50da371f3aa2966493884b80d3f8d77c0cb2d85a79b5bf3414f1092015.js.map