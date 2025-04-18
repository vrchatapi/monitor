"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2621], {
        44488: (e, t, l) => {
            l.d(t, {
                Z: () => u
            });
            var n = l(92332),
                a = l(14411),
                r = l(67263),
                o = l(16869),
                c = l(67294),
                i = l(95896),
                s = function(e) {
                    var t, l = e.listingId,
                        s = e.className,
                        u = void 0 === s ? "" : s,
                        m = e.showImage,
                        d = void 0 !== m && m,
                        w = (0, o.mr)({
                            listingId: l
                        }, {
                            skip: !l
                        }),
                        p = w.data,
                        g = w.isFetching,
                        b = w.isSuccess,
                        f = w.isError;
                    g && (a.$1, n.LM);
                    var h = (null === (t = i.di.find((function(e) {
                        return e.value === (null == p ? void 0 : p.listingType)
                    }))) || void 0 === t ? void 0 : t.label) || (null == p ? void 0 : p.listingType);
                    return b ? c.createElement(a.X2, {
                        className: "".concat(u, " tw-flex-nowrap tw-items-center tw-flex-1")
                    }, d && c.createElement(a.pw, {
                        imageId: null == p ? void 0 : p.imageId,
                        alt: null == p ? void 0 : p.displayName,
                        fallbackSrc: r,
                        fitToCover: !0,
                        className: "tw-h-7 tw-w-7 tw-mr-2 tw-shrink-0"
                    }), c.createElement("p", {
                        className: "tw-font-bold tw-mb-0 tw-overflow-hidden tw-truncate tw-flex-1"
                    }, null == p ? void 0 : p.displayName), c.createElement("p", {
                        className: "tw-font-bold tw-mb-0 tw-overflow-hidden tw-shrink-0"
                    }, "(", h, ")")) : f ? c.createElement("div", {
                        className: "".concat(u)
                    }, c.createElement("p", {
                        className: "tw-font-bold tw-mb-0"
                    }, l)) : null
                };
            s.propTypes = {};
            const u = s
        },
        72621: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => P
            });
            var n = l(45987),
                a = l(54546),
                r = l(4942),
                o = l(41145),
                c = l(62228),
                i = l(2909),
                s = l(82414),
                u = l(78076),
                m = l(76553),
                d = l(6811),
                w = l(64258),
                p = l(14411),
                g = l(63221),
                b = l(95896),
                f = l(22202),
                h = l(93261),
                E = l(43683),
                v = l(67294),
                y = l(32981),
                N = l(44488),
                x = ["file", "imageId"],
                I = ["file"],
                C = ["imageId"];

            function O(e, t) {
                var l = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), l.push.apply(l, n)
                }
                return l
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(l), !0).forEach((function(t) {
                        (0, r.Z)(e, t, l[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : O(Object(l)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
                    }))
                }
                return e
            }
            var S = {
                sellerId: void 0,
                displayName: "",
                description: "",
                tags: [],
                imageId: "",
                productType: b.Pm.UDON,
                useForSubscriberList: !1
            };
            const P = function(e) {
                var t, l = e.product,
                    r = void 0 === l ? null : l,
                    O = e.isEditing,
                    P = void 0 !== O && O,
                    X = (e.type, e.user),
                    j = e.onSubmit,
                    T = void 0 === j ? function() {} : j,
                    F = e.onClose,
                    L = void 0 === F ? function() {} : F,
                    J = e.onDataChange,
                    D = void 0 === J ? function() {} : J;
                if (null === r && P) return null;
                var A = null !== (t = null == r ? void 0 : r.parentListings) && void 0 !== t ? t : [],
                    Z = (0, y.I0)(),
                    R = (0, y.v9)((function(e) {
                        return e.productFlow
                    })).productType,
                    K = (0, f.IB)({
                        skip: X
                    }).data,
                    $ = X || K,
                    _ = r || k(k({}, S), {}, {
                        sellerId: null == $ ? void 0 : $.id
                    }),
                    z = (0, v.useState)(_),
                    U = (0, a.Z)(z, 2),
                    B = U[0],
                    q = U[1],
                    M = (0, v.useState)(B.useForSubscriberList || !1),
                    W = (0, a.Z)(M, 2),
                    V = W[0],
                    H = W[1],
                    Y = (0, v.useState)(B.groupAccess || !1),
                    G = (0, a.Z)(Y, 2),
                    Q = G[0],
                    ee = G[1],
                    te = (0, v.useState)(B.groupAccessRemove || !1),
                    le = (0, a.Z)(te, 2),
                    ne = le[0],
                    ae = le[1],
                    re = (0, v.useState)(r ? null == r ? void 0 : r.imageId : null),
                    oe = (0, a.Z)(re, 2),
                    ce = oe[0],
                    ie = oe[1],
                    se = (0, v.useState)(!1),
                    ue = (0, a.Z)(se, 2),
                    me = ue[0],
                    de = ue[1],
                    we = (0, v.useState)(!1),
                    pe = (0, a.Z)(we, 2),
                    ge = pe[0],
                    be = pe[1];
                (0, v.useEffect)((function() {
                    D(B)
                }), [B]), (0, v.useEffect)((function() {
                    null != r && r.productType && Z((0, E.WB)(r.productType))
                }), [r]);
                var fe = (0, h.r5)({
                        groupId: null == r ? void 0 : r.groupId
                    }, {
                        skip: !(P || null != r && r.groupId)
                    }),
                    he = fe.data,
                    Ee = fe.isLoading,
                    ve = fe.isError,
                    ye = (fe.Error, (null == he ? void 0 : he.joinState) === g.wN.OPEN ? "Your group is already set to Free Join, so enabling this option won’t have any effect. Subscribers will still join automatically." : "When enabled, anyone can purchase this role and join the group, regardless of the group’s join rules. This option overrides standard join settings.");
                (0, v.useEffect)((function() {
                    (null == he ? void 0 : he.joinState) === g.wN.OPEN && (ee(!0), q(k(k({}, B), {}, {
                        groupAccess: !0
                    })))
                }), [he]);
                return v.createElement(p.JX, null, v.createElement("form", {
                    onSubmit: function(e) {
                        e.preventDefault(), T({
                            productData: B,
                            isEditing: P,
                            image: "string" != typeof ce ? ce : null
                        })
                    },
                    className: "tw-w-full"
                }, v.createElement(p.JX, null, v.createElement(p.JX, {
                    className: "tw-mb-8"
                }, v.createElement(p.X2, {
                    className: "tw-gap-5 tw-mb-5 tw-flex-col sm:tw-flex-row"
                }, v.createElement(p.JX, null, v.createElement("button", {
                    type: "button",
                    onClick: function() {
                        de(!0)
                    },
                    className: "tw-border-0 tw-p-0 tw-rounded tw-relative tw-items-center tw-justify-center tw-flex tw-bg-transparent"
                }, !ce && v.createElement(p.zx, {
                    type: "button",
                    containerClasses: "tw-rounded tw-absolute tw-flex-1"
                }, v.createElement(p.$1, {
                    icon: u.Vm,
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
                    value: B.displayName,
                    onChange: function(e) {
                        return q(k(k({}, B), {}, {
                            displayName: e.target.value
                        }))
                    }
                }), v.createElement("small", {
                    className: "tw-text-light-grey"
                }, B.displayName.length, "/64")), v.createElement(p.JX, null, v.createElement("label", {
                    htmlFor: "description"
                }, "Description"), v.createElement(p.gx, {
                    type: "textarea",
                    id: "description",
                    inputClassName: "tw-h-[120px] tw-my-2",
                    maxLength: 256,
                    value: B.description,
                    onChange: function(e) {
                        return q(k(k({}, B), {}, {
                            description: e.target.value
                        }))
                    }
                }), v.createElement("small", {
                    className: "tw-text-light-grey"
                }, B.description.length, "/256")))), P && v.createElement(p.JX, {
                    className: "tw-mb-5"
                }, v.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2 tw-flex tw-flex-row"
                }, "Product ID", v.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1"
                }, v.createElement(p.$1, {
                    icon: s.sq,
                    className: "tw-text-light-grey"
                }), v.createElement("span", {
                    className: "tw-pointer-events-none tw-z-50 tw-absolute tw--top-14 tw--left-20 sm:tw--top-7 sm:tw-left-5 tw-w-[240px] tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50 tw-opacity-0 tw-shadow tw-transition-opacity group-hover:tw-opacity-100"
                }, "This unique ID links your Udon product to the VRChat Worlds SDK, allowing you to track ownership within your world."))), v.createElement(p.X2, {
                    className: "tw-gap-2"
                }, v.createElement(p.II, {
                    type: "text",
                    id: "id",
                    value: B.id,
                    disabled: !0,
                    className: "tw-flex-1"
                }), v.createElement(p.zx, {
                    type: "button",
                    className: "tw-w-[40px] tw-h-[40px]",
                    onClick: function() {
                        navigator.clipboard.writeText(B.id).then((function() {
                            Z((0, w.d)({
                                title: "Copied product ID",
                                icon: d.f8,
                                message: "Product ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(e) {
                            var t, l;
                            Z((0, w.d)({
                                title: "Failed to copy product ID",
                                icon: m.eH,
                                message: null !== (t = null === (l = res.error.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== t ? t : "Failed to copy product ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, v.createElement(p.$1, {
                    icon: i.kZ
                })))), R && v.createElement(p.JX, {
                    className: "tw-mb-5"
                }, v.createElement("label", {
                    htmlFor: "price",
                    className: "tw-mb-2"
                }, "Product Type"), v.createElement(p.X2, {
                    className: "tw-gap-3"
                }, ((null == r ? void 0 : r.productType) !== b.Pm.ROLE || R !== b.Pm.ROLE) && v.createElement("div", {
                    className: "tw-rounded-full tw-w-[90px] tw-h-[90px] tw-bg-[#303135]"
                }, v.createElement("img", {
                    alt: "udon logo",
                    width: "90",
                    src: b.pK[R].image
                })), ((null == r ? void 0 : r.productType) === b.Pm.ROLE || R === b.Pm.ROLE) && v.createElement("div", {
                    className: "tw-rounded-full tw-w-[90px] tw-min-w-[90px] tw-h-[90px] tw-bg-[#303135] tw-flex tw-items-center tw-justify-center"
                }, v.createElement(p.$1, {
                    icon: b.pK[R].icon,
                    className: "tw-text-white tw-text-5xl"
                })), v.createElement(p.JX, {
                    className: "tw-items-center tw-justify-center"
                }, v.createElement("p", {
                    className: "tw-mb-0"
                }, v.createElement("strong", null, b.pK[R].label), v.createElement("br", null), b.pK[R].text, v.createElement("br", null), v.createElement("a", {
                    href: b.pK[R].redirect,
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn More"))))), P && v.createElement(p.JX, {
                    className: "tw-mb-5"
                }, v.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2"
                }, "Associated ", "role" === (null == r ? void 0 : r.productType) ? "Subscription" : "Listings", " ", A.length > 0 && "(".concat(A.length, ")")), 0 === A.length && v.createElement("p", {
                    className: "tw-text-placeholder-text tw-mb-0"
                }, "None"), A.length > 0 && v.createElement(p.JX, null, v.createElement("div", {
                    className: "tw-gap-2 tw-w-full tw-grid tw-grid-cols-2 tw-mb-3"
                }, (ge ? A : A.slice(0, 6)).map((function(e) {
                    return v.createElement(N.Z, {
                        listingId: e,
                        showImage: !0,
                        className: "tw-flex tw-flex-row"
                    })
                }))), A.length > 6 && v.createElement(p.X2, {
                    className: "tw-items-center tw-gap-2"
                }, v.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return be(!ge)
                    },
                    className: "tw-mb-0 tw-appearance-none tw-bg-transparent tw-border-none tw-text-light-grey"
                }, ge ? "Show Less " : "Show all listings ", ge ? v.createElement(p.$1, {
                    icon: c.mT
                }) : v.createElement(p.$1, {
                    icon: o.pt
                }))))), !(P && (null == r ? void 0 : r.productType) === b.Pm.ROLE) && v.createElement(p.X2, {
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
                        H(t), q(k(k({}, B), {}, {
                            useForSubscriberList: t
                        }))
                    }
                }))), P && (null == r ? void 0 : r.productType) === b.Pm.ROLE && v.createElement(v.Fragment, null, v.createElement(p.JX, {
                    className: "tw-bg-[#252A30] tw-p-5 tw-rounded-lg"
                }, v.createElement(p.K_, {
                    label: "Enable Free Join for Subscribers",
                    value: "groupAccess",
                    defaultChecked: Q,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        if (ee(t), !t) return ae(!1), void q(k(k({}, B), {}, {
                            groupAccess: t,
                            groupAccessRemove: !1
                        }));
                        q(k(k({}, B), {}, {
                            groupAccess: t
                        }))
                    },
                    disabled: !he || Ee || ve || (null == he ? void 0 : he.joinState) === g.wN.OPEN
                }), v.createElement("small", null, ye)), Q && v.createElement(p.JX, {
                    className: "tw-bg-[#252A30] tw-p-5 tw-rounded-lg tw-mt-5"
                }, v.createElement(v.Fragment, null, v.createElement(p.K_, {
                    label: "Remove Members After Expiration",
                    value: "groupAccessRemove",
                    defaultChecked: ne,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        ae(t), q(k(k({}, B), {}, {
                            groupAccessRemove: t
                        }))
                    }
                }), v.createElement("small", null, "If enabled, group members with this role are removed from the group entirely when their subscription ends. Note that this will remove any member whose subscription ends, whether they bought their way in or not."))))), v.createElement(p.JX, {
                    className: "tw-gap-3"
                }, v.createElement(p.zx, {
                    type: "submit"
                }, P ? "Update" : "Create", " Product"), v.createElement(p.zx, {
                    type: "button",
                    neutral: !0,
                    onClick: L
                }, "Cancel")))), v.createElement(p.m6, {
                    preset: "product",
                    image: ce,
                    isOpen: me,
                    onClose: function() {
                        return de(!1)
                    },
                    confirmCallback: function(e) {
                        var t = e.fileId,
                            l = void 0 === t ? null : t,
                            a = e.fileBlob,
                            r = void 0 === a ? null : a,
                            o = null !== l;
                        return null === l && null === r ? (ie(null), void q((function(e) {
                            e.file, e.imageId;
                            return (0, n.Z)(e, x)
                        }))) : o ? (ie(l), void q((function(e) {
                            e.file;
                            return k(k({}, (0, n.Z)(e, I)), {}, {
                                imageId: l
                            })
                        }))) : (ie(r), void q((function(e) {
                            e.imageId;
                            return k(k({}, (0, n.Z)(e, C)), {}, {
                                file: r
                            })
                        })))
                    },
                    cancelCallBack: function() {
                        return de(!1)
                    },
                    className: "tw-w-[285px] tw-aspect-square"
                }))
            }
        }
    }
]);
//# sourceMappingURL=516b6566a0933d9418bb0fe0748af092c54be1dbbe2f6fa05848f6d8c006897a.js.map