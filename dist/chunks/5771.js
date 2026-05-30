"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [5771], {
        33610(e, t, l) {
            l.d(t, {
                A: () => m
            });
            var n = l(7612),
                a = l(15033),
                r = l(75171),
                o = l.n(r),
                c = l(72784),
                i = l(96540),
                s = l(31069),
                u = function(e) {
                    var t, l = e.listingId,
                        r = e.className,
                        u = void 0 === r ? "" : r,
                        m = e.showImage,
                        d = void 0 !== m && m,
                        w = (0, c.Qt)({
                            listingId: l
                        }, {
                            skip: !l
                        }),
                        p = w.data,
                        f = w.isFetching,
                        g = w.isSuccess,
                        b = w.isError;
                    f && (a.M2, n.z1);
                    var v = (null === (t = s.jo.find(function(e) {
                        return e.value === (null == p ? void 0 : p.listingType)
                    })) || void 0 === t ? void 0 : t.label) || (null == p ? void 0 : p.listingType);
                    return g ? i.createElement(a.fI, {
                        className: "".concat(u, " tw-flex-nowrap tw-items-center tw-flex-1")
                    }, d && i.createElement(a.Oo, {
                        imageId: null == p ? void 0 : p.imageId,
                        alt: null == p ? void 0 : p.displayName,
                        fallbackSrc: o(),
                        fitToCover: !0,
                        className: "tw-h-7 tw-w-7 tw-mr-2 tw-shrink-0"
                    }), i.createElement("p", {
                        className: "tw-font-bold tw-mb-0 tw-overflow-hidden tw-truncate tw-flex-1"
                    }, null == p ? void 0 : p.displayName), i.createElement("p", {
                        className: "tw-font-bold tw-mb-0 tw-overflow-hidden tw-shrink-0"
                    }, "(", v, ")")) : b ? i.createElement("div", {
                        className: "".concat(u)
                    }, i.createElement("p", {
                        className: "tw-font-bold tw-mb-0"
                    }, l)) : null
                };
            u.propTypes = {};
            const m = u
        },
        15771(e, t, l) {
            l.r(t), l.d(t, {
                default: () => S
            });
            var n = l(80045),
                a = l(15902),
                r = l(64467),
                o = l(31226),
                c = l(86419),
                i = l(67256),
                s = l(6913),
                u = l(71088),
                m = l(34496),
                d = l(42217),
                w = l(65950),
                p = l(15033),
                f = l(45616),
                g = l(31069),
                b = l(13951),
                v = l(40085),
                h = l(89661),
                E = l(96540),
                y = l(6376),
                N = l(33610),
                x = ["file", "imageId"],
                I = ["file"],
                O = ["imageId"];

            function C(e, t) {
                var l = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), l.push.apply(l, n)
                }
                return l
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(l), !0).forEach(function(t) {
                        (0, r.A)(e, t, l[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : C(Object(l)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
                    })
                }
                return e
            }
            var A = {
                sellerId: void 0,
                displayName: "",
                description: "",
                tags: [],
                imageId: "",
                productType: g.Wd.UDON,
                useForSubscriberList: !1
            };
            const S = function(e) {
                var t, l = e.product,
                    r = void 0 === l ? null : l,
                    C = e.isEditing,
                    S = void 0 !== C && C,
                    j = (e.type, e.user),
                    L = e.onSubmit,
                    T = void 0 === L ? function() {} : L,
                    F = e.onClose,
                    P = void 0 === F ? function() {} : F,
                    D = e.onDataChange,
                    R = void 0 === D ? function() {} : D;
                if (null === r && S) return null;
                var M = null !== (t = null == r ? void 0 : r.parentListings) && void 0 !== t ? t : [],
                    W = (0, y.wA)(),
                    U = (0, y.d4)(function(e) {
                        return e.productFlow
                    }).productType,
                    $ = (0, b.p$)({
                        skip: j
                    }).data,
                    z = j || $,
                    J = r || k(k({}, A), {}, {
                        sellerId: null == z ? void 0 : z.id
                    }),
                    X = (0, E.useState)(J),
                    _ = (0, a.A)(X, 2),
                    q = _[0],
                    B = _[1],
                    G = (0, E.useState)(q.useForSubscriberList || !1),
                    K = (0, a.A)(G, 2),
                    Q = K[0],
                    V = K[1],
                    Y = (0, E.useState)(q.groupAccess || !1),
                    H = (0, a.A)(Y, 2),
                    Z = H[0],
                    ee = H[1],
                    te = (0, E.useState)(q.groupAccessRemove || !1),
                    le = (0, a.A)(te, 2),
                    ne = le[0],
                    ae = le[1],
                    re = (0, E.useState)(r ? null == r ? void 0 : r.imageId : null),
                    oe = (0, a.A)(re, 2),
                    ce = oe[0],
                    ie = oe[1],
                    se = (0, E.useState)(!1),
                    ue = (0, a.A)(se, 2),
                    me = ue[0],
                    de = ue[1],
                    we = (0, E.useState)(!1),
                    pe = (0, a.A)(we, 2),
                    fe = pe[0],
                    ge = pe[1];
                (0, E.useEffect)(function() {
                    R(q)
                }, [q]), (0, E.useEffect)(function() {
                    null != r && r.productType && W((0, h.kU)(r.productType))
                }, [r]);
                var be = (0, v.XR)({
                        groupId: null == r ? void 0 : r.groupId
                    }, {
                        skip: !(S || null != r && r.groupId)
                    }),
                    ve = be.data,
                    he = be.isLoading,
                    Ee = be.isError,
                    ye = (be.Error, (null == ve ? void 0 : ve.joinState) === f.mm.OPEN ? "Your group is already set to Free Join, so enabling this option won’t have any effect. Subscribers will still join automatically." : "When enabled, anyone can purchase this role and join the group, regardless of the group’s join rules. This option overrides standard join settings.");
                (0, E.useEffect)(function() {
                    (null == ve ? void 0 : ve.joinState) === f.mm.OPEN && (ee(!0), B(k(k({}, q), {}, {
                        groupAccess: !0
                    })))
                }, [ve]);
                return E.createElement(p.fv, null, E.createElement("form", {
                    onSubmit: function(e) {
                        e.preventDefault(), T({
                            productData: q,
                            isEditing: S,
                            image: "string" != typeof ce ? ce : null
                        })
                    },
                    className: "tw-w-full"
                }, E.createElement(p.fv, null, E.createElement(p.fv, {
                    className: "tw-mb-8"
                }, E.createElement(p.fI, {
                    className: "tw-gap-5 tw-mb-5 tw-flex-col md:tw-flex-row"
                }, E.createElement(p.fv, null, E.createElement("button", {
                    type: "button",
                    onClick: function() {
                        de(!0)
                    },
                    className: "tw-border-0 tw-p-0 tw-rounded tw-relative tw-items-center tw-justify-center tw-flex tw-bg-transparent"
                }, !ce && E.createElement(p.$n, {
                    type: "button",
                    containerClasses: "tw-rounded tw-absolute tw-flex-1"
                }, E.createElement(p.M2, {
                    icon: u.jb,
                    className: "tw-mr-2"
                }), E.createElement("span", null, "Upload Thumbnail")), E.createElement(p.Oo, {
                    imageId: ce,
                    fitToCover: !0,
                    alt: "Product Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                }))), E.createElement(p.fv, {
                    className: "tw-flex-1 tw-gap-5"
                }, E.createElement(p.fv, null, E.createElement("label", {
                    htmlFor: "displayName"
                }, "Name"), E.createElement(p.pd, {
                    type: "text",
                    inputStyle: {
                        margin: "8px 0"
                    },
                    maxLength: 64,
                    id: "displayName",
                    value: q.displayName,
                    onChange: function(e) {
                        return B(k(k({}, q), {}, {
                            displayName: e.target.value
                        }))
                    }
                }), E.createElement("small", {
                    className: "tw-text-light-grey"
                }, q.displayName.length, "/64")), E.createElement(p.fv, null, E.createElement("label", {
                    htmlFor: "description"
                }, "Description"), E.createElement(p.TM, {
                    type: "textarea",
                    id: "description",
                    inputClassName: "tw-h-[120px] tw-my-2",
                    maxLength: 256,
                    value: q.description,
                    onChange: function(e) {
                        return B(k(k({}, q), {}, {
                            description: e.target.value
                        }))
                    }
                }), E.createElement("small", {
                    className: "tw-text-light-grey"
                }, q.description.length, "/256")))), S && E.createElement(p.fv, {
                    className: "tw-mb-5"
                }, E.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2 tw-flex tw-flex-row"
                }, "Product ID", E.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1"
                }, E.createElement(p.M2, {
                    icon: s.iW,
                    className: "tw-text-light-grey"
                }), E.createElement("span", {
                    className: "tw-pointer-events-none tw-z-50 tw-absolute tw--top-14 tw--left-20 sm:tw--top-7 sm:tw-left-5 tw-w-[240px] tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50 tw-opacity-0 tw-shadow tw-transition-opacity group-hover:tw-opacity-100"
                }, "This unique ID links your Udon product to the VRChat Worlds SDK, allowing you to track ownership within your world."))), E.createElement(p.fI, {
                    className: "tw-gap-2"
                }, E.createElement(p.pd, {
                    type: "text",
                    id: "id",
                    value: q.id,
                    disabled: !0,
                    className: "tw-flex-1"
                }), E.createElement(p.$n, {
                    type: "button",
                    className: "tw-w-[40px] tw-h-[40px]",
                    onClick: function() {
                        navigator.clipboard.writeText(q.id).then(function() {
                            W((0, w.X)({
                                title: "Copied product ID",
                                icon: d.SG,
                                message: "Product ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        }).catch(function(e) {
                            var t, l;
                            W((0, w.X)({
                                title: "Failed to copy product ID",
                                icon: m.zp,
                                message: null !== (t = null === (l = res.error.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== t ? t : "Failed to copy product ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        })
                    }
                }, E.createElement(p.M2, {
                    icon: i.jP
                })))), U && E.createElement(p.fv, {
                    className: "tw-mb-5"
                }, E.createElement("label", {
                    htmlFor: "price",
                    className: "tw-mb-2"
                }, "Product Type"), E.createElement(p.fI, {
                    className: "tw-gap-3"
                }, ((null == r ? void 0 : r.productType) !== g.Wd.ROLE || U !== g.Wd.ROLE) && E.createElement("div", {
                    className: "tw-rounded-full tw-w-[90px] tw-h-[90px] tw-bg-[#303135]"
                }, E.createElement("img", {
                    alt: "udon logo",
                    width: "90",
                    src: g.si[U].image
                })), ((null == r ? void 0 : r.productType) === g.Wd.ROLE || U === g.Wd.ROLE) && E.createElement("div", {
                    className: "tw-rounded-full tw-w-[90px] tw-min-w-[90px] tw-h-[90px] tw-bg-[#303135] tw-flex tw-items-center tw-justify-center"
                }, E.createElement(p.M2, {
                    icon: g.si[U].icon,
                    className: "tw-text-white tw-text-5xl"
                })), E.createElement(p.fv, {
                    className: "tw-items-center tw-justify-center"
                }, E.createElement("p", {
                    className: "tw-mb-0"
                }, E.createElement("strong", null, g.si[U].label), E.createElement("br", null), g.si[U].text, E.createElement("br", null), E.createElement("a", {
                    href: g.si[U].redirect,
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn More"))))), S && E.createElement(p.fv, {
                    className: "tw-mb-5"
                }, E.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2"
                }, "Associated ", "role" === (null == r ? void 0 : r.productType) ? "Subscription" : "Listings", " ", M.length > 0 && "(".concat(M.length, ")")), 0 === M.length && E.createElement("p", {
                    className: "tw-text-placeholder-text tw-mb-0"
                }, "None"), M.length > 0 && E.createElement(p.fv, null, E.createElement("div", {
                    className: "tw-gap-2 tw-w-full tw-grid tw-grid-cols-2 tw-mb-3"
                }, (fe ? M : M.slice(0, 6)).map(function(e) {
                    return E.createElement(N.A, {
                        listingId: e,
                        showImage: !0,
                        className: "tw-flex tw-flex-row",
                        key: e
                    })
                })), M.length > 6 && E.createElement(p.fI, {
                    className: "tw-items-center tw-gap-2"
                }, E.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return ge(!fe)
                    },
                    className: "tw-mb-0 tw-appearance-none tw-bg-transparent tw-border-none tw-text-light-grey"
                }, fe ? "Show Less " : "Show all listings ", fe ? E.createElement(p.M2, {
                    icon: c.w2
                }) : E.createElement(p.M2, {
                    icon: o.Jt
                }))))), !(S && (null == r ? void 0 : r.productType) === g.Wd.ROLE) && E.createElement(p.fI, {
                    className: "tw-bg-[#252A30] tw-p-5 tw-rounded-lg tw-mb-5"
                }, E.createElement(p.fv, null, E.createElement("p", {
                    className: "tw-mb-1"
                }, "Enable Access to Owner Names"), E.createElement("small", {
                    className: "tw-text-light-grey"
                }, "If enabled, the display names of this product's owners are available to Udon code in your worlds which reference it. These can then be displayed to the world's visitors on supporter boards, for example.")), E.createElement(p.fI, {
                    className: "tw-justify-center tw-items-center tw-gap-3"
                }, E.createElement("label", {
                    htmlFor: "useForSubscriberList"
                }, Q ? "On" : "Off"), E.createElement(p.UL, {
                    value: "useForSubscriberList",
                    defaultChecked: Q,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        V(t), B(k(k({}, q), {}, {
                            useForSubscriberList: t
                        }))
                    }
                }))), S && (null == r ? void 0 : r.productType) === g.Wd.ROLE && E.createElement(E.Fragment, null, E.createElement(p.fv, {
                    className: "tw-bg-[#252A30] tw-p-5 tw-rounded-lg"
                }, E.createElement(p.UL, {
                    label: "Enable Free Join for Subscribers",
                    value: "groupAccess",
                    defaultChecked: Z,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        if (ee(t), !t) return ae(!1), void B(k(k({}, q), {}, {
                            groupAccess: t,
                            groupAccessRemove: !1
                        }));
                        B(k(k({}, q), {}, {
                            groupAccess: t
                        }))
                    },
                    disabled: !ve || he || Ee || (null == ve ? void 0 : ve.joinState) === f.mm.OPEN
                }), E.createElement("small", null, ye)), Z && E.createElement(p.fv, {
                    className: "tw-bg-[#252A30] tw-p-5 tw-rounded-lg tw-mt-5"
                }, E.createElement(E.Fragment, null, E.createElement(p.UL, {
                    label: "Remove Members After Expiration",
                    value: "groupAccessRemove",
                    defaultChecked: ne,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        ae(t), B(k(k({}, q), {}, {
                            groupAccessRemove: t
                        }))
                    }
                }), E.createElement("small", null, "If enabled, group members with this role are removed from the group entirely when their subscription ends. Note that this will remove any member whose subscription ends, whether they bought their way in or not."))))), E.createElement(p.fv, {
                    className: "tw-gap-3"
                }, E.createElement(p.$n, {
                    type: "submit"
                }, S ? "Update" : "Create", " Product"), E.createElement(p.$n, {
                    type: "button",
                    neutral: !0,
                    onClick: P
                }, "Cancel")))), E.createElement(p.L0, {
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
                        return null === l && null === r ? (ie(null), void B(function(e) {
                            e.file, e.imageId;
                            return (0, n.A)(e, x)
                        })) : o ? (ie(l), void B(function(e) {
                            e.file;
                            return k(k({}, (0, n.A)(e, I)), {}, {
                                imageId: l
                            })
                        })) : (ie(r), void B(function(e) {
                            e.imageId;
                            return k(k({}, (0, n.A)(e, O)), {}, {
                                file: r
                            })
                        }))
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
//# sourceMappingURL=87844d03a4eb2d6220c78a46380111a5c74e5d43a078a121ec9a6901133b0d44.js.map