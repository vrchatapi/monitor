"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2621], {
        44488: (e, t, l) => {
            l.d(t, {
                Z: () => u
            });
            var a = l(92332),
                n = l(14411),
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
                        p = (0, o.mr)({
                            listingId: l
                        }, {
                            skip: !l
                        }),
                        w = p.data,
                        g = p.isFetching,
                        b = p.isSuccess,
                        f = p.isError;
                    g && (n.$1, a.LM);
                    var E = (null === (t = i.di.find((function(e) {
                        return e.value === (null == w ? void 0 : w.listingType)
                    }))) || void 0 === t ? void 0 : t.label) || (null == w ? void 0 : w.listingType);
                    return b ? c.createElement("div", {
                        className: "".concat(u)
                    }, d && c.createElement(n.pw, {
                        imageId: null == w ? void 0 : w.imageId,
                        alt: null == w ? void 0 : w.displayName,
                        fallbackSrc: r,
                        fitToCover: !0,
                        className: "tw-h-7 tw-w-7 tw-mr-2"
                    }), c.createElement("p", {
                        className: "tw-font-bold tw-mb-0"
                    }, null == w ? void 0 : w.displayName, " (", E, ")")) : f ? c.createElement("div", {
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
            var a = l(45987),
                n = l(54546),
                r = l(4942),
                o = l(41145),
                c = l(62228),
                i = l(2909),
                s = l(82414),
                u = l(78076),
                m = l(76553),
                d = l(6811),
                p = l(64258),
                w = l(14411),
                g = l(63221),
                b = l(95896),
                f = l(22202),
                E = l(93261),
                h = l(43683),
                v = l(67294),
                y = l(32981),
                N = l(44488),
                x = ["file", "imageId"],
                I = ["file"],
                C = ["imageId"];

            function O(e, t) {
                var l = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), l.push.apply(l, a)
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
                    j = (e.type, e.user),
                    T = e.onSubmit,
                    X = void 0 === T ? function() {} : T,
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
                        skip: j
                    }).data,
                    $ = j || K,
                    _ = r || k(k({}, S), {}, {
                        sellerId: null == $ ? void 0 : $.id
                    }),
                    z = (0, v.useState)(_),
                    U = (0, n.Z)(z, 2),
                    B = U[0],
                    q = U[1],
                    M = (0, v.useState)(B.useForSubscriberList || !1),
                    W = (0, n.Z)(M, 2),
                    V = W[0],
                    H = W[1],
                    Y = (0, v.useState)(B.groupAccess || !1),
                    G = (0, n.Z)(Y, 2),
                    Q = G[0],
                    ee = G[1],
                    te = (0, v.useState)(B.groupAccessRemove || !1),
                    le = (0, n.Z)(te, 2),
                    ae = le[0],
                    ne = le[1],
                    re = (0, v.useState)(r ? null == r ? void 0 : r.imageId : null),
                    oe = (0, n.Z)(re, 2),
                    ce = oe[0],
                    ie = oe[1],
                    se = (0, v.useState)(!1),
                    ue = (0, n.Z)(se, 2),
                    me = ue[0],
                    de = ue[1],
                    pe = (0, v.useState)(!1),
                    we = (0, n.Z)(pe, 2),
                    ge = we[0],
                    be = we[1];
                (0, v.useEffect)((function() {
                    D(B)
                }), [B]), (0, v.useEffect)((function() {
                    null != r && r.productType && Z((0, h.WB)(r.productType))
                }), [r]);
                var fe = (0, E.r5)({
                        groupId: null == r ? void 0 : r.groupId
                    }, {
                        skip: !(P || null != r && r.groupId)
                    }),
                    Ee = fe.data,
                    he = fe.isLoading,
                    ve = fe.isError,
                    ye = (fe.Error, (null == Ee ? void 0 : Ee.joinState) === g.wN.OPEN ? "Your group is already set to Free Join, so enabling this option won’t have any effect. Subscribers will still join automatically." : "When enabled, anyone can purchase this role and join the group, regardless of the group’s join rules. This option overrides standard join settings.");
                (0, v.useEffect)((function() {
                    (null == Ee ? void 0 : Ee.joinState) === g.wN.OPEN && (ee(!0), q(k(k({}, B), {}, {
                        groupAccess: !0
                    })))
                }), [Ee]);
                return v.createElement(w.JX, null, v.createElement("form", {
                    onSubmit: function(e) {
                        e.preventDefault(), X({
                            productData: B,
                            isEditing: P,
                            image: "string" != typeof ce ? ce : null
                        })
                    },
                    className: "tw-w-full"
                }, v.createElement(w.JX, null, v.createElement(w.JX, {
                    className: "tw-mb-8"
                }, v.createElement(w.X2, {
                    className: "tw-gap-5 tw-mb-5 tw-flex-col sm:tw-flex-row"
                }, v.createElement(w.JX, null, v.createElement("button", {
                    type: "button",
                    onClick: function() {
                        de(!0)
                    },
                    className: "tw-border-0 tw-p-0 tw-rounded tw-relative tw-items-center tw-justify-center tw-flex tw-bg-transparent"
                }, !ce && v.createElement(w.zx, {
                    type: "button",
                    containerClasses: "tw-rounded tw-absolute tw-flex-1"
                }, v.createElement(w.$1, {
                    icon: u.Vm,
                    className: "tw-mr-2"
                }), v.createElement("span", null, "Upload Thumbnail")), v.createElement(w.pw, {
                    imageId: ce,
                    fitToCover: !0,
                    alt: "Product Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                }))), v.createElement(w.JX, {
                    className: "tw-flex-1 tw-gap-5"
                }, v.createElement(w.JX, null, v.createElement("label", {
                    htmlFor: "displayName"
                }, "Name"), v.createElement(w.II, {
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
                }, B.displayName.length, "/64")), v.createElement(w.JX, null, v.createElement("label", {
                    htmlFor: "description"
                }, "Description"), v.createElement(w.gx, {
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
                }, B.description.length, "/256")))), P && v.createElement(w.JX, {
                    className: "tw-mb-5"
                }, v.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2 tw-flex tw-flex-row"
                }, "Product ID", v.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1"
                }, v.createElement(w.$1, {
                    icon: s.sq,
                    className: "tw-text-light-grey"
                }), v.createElement("span", {
                    className: "tw-pointer-events-none tw-z-50 tw-absolute tw--top-14 tw--left-20 sm:tw--top-7 sm:tw-left-5 tw-w-[240px] tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50 tw-opacity-0 tw-shadow tw-transition-opacity group-hover:tw-opacity-100"
                }, "This unique ID links your Udon product to the VRChat Worlds SDK, allowing you to track ownership within your world."))), v.createElement(w.X2, {
                    className: "tw-gap-2"
                }, v.createElement(w.II, {
                    type: "text",
                    id: "id",
                    value: B.id,
                    disabled: !0,
                    className: "tw-flex-1"
                }), v.createElement(w.zx, {
                    type: "button",
                    className: "tw-w-[40px] tw-h-[40px]",
                    onClick: function() {
                        navigator.clipboard.writeText(B.id).then((function() {
                            Z((0, p.d)({
                                title: "Copied product ID",
                                icon: d.f8,
                                message: "Product ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(e) {
                            var t, l;
                            Z((0, p.d)({
                                title: "Failed to copy product ID",
                                icon: m.eH,
                                message: null !== (t = null === (l = res.error.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== t ? t : "Failed to copy product ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, v.createElement(w.$1, {
                    icon: i.kZ
                })))), R && v.createElement(w.JX, {
                    className: "tw-mb-5"
                }, v.createElement("label", {
                    htmlFor: "price",
                    className: "tw-mb-2"
                }, "Product Type"), v.createElement(w.X2, {
                    className: "tw-gap-3"
                }, ((null == r ? void 0 : r.productType) !== b.Pm.ROLE || R !== b.Pm.ROLE) && v.createElement("div", {
                    className: "tw-rounded-full tw-w-[90px] tw-h-[90px] tw-bg-[#303135]"
                }, v.createElement("img", {
                    alt: "udon logo",
                    width: "90",
                    src: b.pK[R].image
                })), ((null == r ? void 0 : r.productType) === b.Pm.ROLE || R === b.Pm.ROLE) && v.createElement("div", {
                    className: "tw-rounded-full tw-w-[90px] tw-min-w-[90px] tw-h-[90px] tw-bg-[#303135] tw-flex tw-items-center tw-justify-center"
                }, v.createElement(w.$1, {
                    icon: b.pK[R].icon,
                    className: "tw-text-white tw-text-5xl"
                })), v.createElement(w.JX, {
                    className: "tw-items-center tw-justify-center"
                }, v.createElement("p", {
                    className: "tw-mb-0"
                }, v.createElement("strong", null, b.pK[R].label), v.createElement("br", null), b.pK[R].text, v.createElement("br", null), v.createElement("a", {
                    href: b.pK[R].redirect,
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn More"))))), P && v.createElement(w.JX, {
                    className: "tw-mb-5"
                }, v.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2"
                }, "Associated ", "role" === (null == r ? void 0 : r.productType) ? "Subscription" : "Listings", " ", A.length > 0 && "(".concat(A.length, ")")), 0 === A.length && v.createElement("p", {
                    className: "tw-text-placeholder-text tw-mb-0"
                }, "None"), A.length > 0 && v.createElement(w.JX, null, v.createElement("div", {
                    className: "tw-gap-2 tw-w-full tw-grid tw-grid-cols-2 tw-mb-3"
                }, (ge ? A : A.slice(0, 6)).map((function(e) {
                    return v.createElement(N.Z, {
                        listingId: e,
                        showImage: !0,
                        className: "tw-flex tw-flex-row"
                    })
                }))), A.length > 6 && v.createElement(w.X2, {
                    className: "tw-items-center tw-gap-2"
                }, v.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return be(!ge)
                    },
                    className: "tw-mb-0 tw-appearance-none tw-bg-transparent tw-border-none tw-text-light-grey"
                }, ge ? "Show Less " : "Show all listings ", ge ? v.createElement(w.$1, {
                    icon: c.mT
                }) : v.createElement(w.$1, {
                    icon: o.pt
                }))))), !(P && (null == r ? void 0 : r.productType) === b.Pm.ROLE) && v.createElement(w.X2, {
                    className: "tw-bg-[#252A30] tw-p-5 tw-rounded-lg tw-mb-5"
                }, v.createElement(w.JX, null, v.createElement("p", {
                    className: "tw-mb-1"
                }, "Enable Access to Owner Names"), v.createElement("small", {
                    className: "tw-text-light-grey"
                }, "If enabled, the display names of this product's owners are available to Udon code in your worlds which reference it. These can then be displayed to the world's visitors on supporter boards, for example.")), v.createElement(w.X2, {
                    className: "tw-justify-center tw-items-center tw-gap-3"
                }, v.createElement("label", {
                    htmlFor: "useForSubscriberList"
                }, V ? "On" : "Off"), v.createElement(w.K_, {
                    value: "useForSubscriberList",
                    defaultChecked: V,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        H(t), q(k(k({}, B), {}, {
                            useForSubscriberList: t
                        }))
                    }
                }))), P && (null == r ? void 0 : r.productType) === b.Pm.ROLE && v.createElement(v.Fragment, null, v.createElement(w.JX, {
                    className: "tw-bg-[#252A30] tw-p-5 tw-rounded-lg"
                }, v.createElement(w.K_, {
                    label: "Enable Free Join for Subscribers",
                    value: "groupAccess",
                    defaultChecked: Q,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        if (ee(t), !t) return ne(!1), void q(k(k({}, B), {}, {
                            groupAccess: t,
                            groupAccessRemove: !1
                        }));
                        q(k(k({}, B), {}, {
                            groupAccess: t
                        }))
                    },
                    disabled: !Ee || he || ve || (null == Ee ? void 0 : Ee.joinState) === g.wN.OPEN
                }), v.createElement("small", null, ye)), Q && v.createElement(w.JX, {
                    className: "tw-bg-[#252A30] tw-p-5 tw-rounded-lg tw-mt-5"
                }, v.createElement(v.Fragment, null, v.createElement(w.K_, {
                    label: "Remove Members After Expiration",
                    value: "groupAccessRemove",
                    defaultChecked: ae,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        ne(t), q(k(k({}, B), {}, {
                            groupAccessRemove: t
                        }))
                    }
                }), v.createElement("small", null, "If enabled, group members with this role are removed from the group entirely when their subscription ends. Note that this will remove any member whose subscription ends, whether they bought their way in or not."))))), v.createElement(w.JX, {
                    className: "tw-gap-3"
                }, v.createElement(w.zx, {
                    type: "submit"
                }, P ? "Update" : "Create", " Product"), v.createElement(w.zx, {
                    type: "button",
                    neutral: !0,
                    onClick: L
                }, "Cancel")))), v.createElement(w.m6, {
                    preset: "product",
                    image: ce,
                    isOpen: me,
                    onClose: function() {
                        return de(!1)
                    },
                    confirmCallback: function(e) {
                        var t = e.fileId,
                            l = void 0 === t ? null : t,
                            n = e.fileBlob,
                            r = void 0 === n ? null : n,
                            o = null !== l;
                        return null === l && null === r ? (ie(null), void q((function(e) {
                            e.file, e.imageId;
                            return (0, a.Z)(e, x)
                        }))) : o ? (ie(l), void q((function(e) {
                            e.file;
                            return k(k({}, (0, a.Z)(e, I)), {}, {
                                imageId: l
                            })
                        }))) : (ie(r), void q((function(e) {
                            e.imageId;
                            return k(k({}, (0, a.Z)(e, C)), {}, {
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
//# sourceMappingURL=e5bdb04a21911609fc80152ef9196182bca7a86f8def68551498f2d368d7c957.js.map