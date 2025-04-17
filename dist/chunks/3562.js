"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3562], {
        90502: (e, t) => {
            var a = "arrow-up-right-from-square",
                n = ["external-link"],
                l = "f08e",
                r = "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z";
            t.DF = {
                prefix: "fas",
                iconName: a,
                icon: [512, 512, n, l, r]
            }, t.wl = t.DF
        },
        68149: (e, t, a) => {
            var n = a(87709);
            t.DF = {
                prefix: n.prefix,
                iconName: n.iconName,
                icon: [n.width, n.height, n.aliases, n.unicode, n.svgPathData]
            }, t.YI = t.DF, n.prefix, n.iconName, n.width, n.height, n.aliases, n.unicode, n.svgPathData, n.aliases
        },
        68420: (e, t, a) => {
            a.d(t, {
                Z: () => J
            });
            var n = a(42138),
                l = a(45987),
                r = a(4942),
                c = a(54546),
                i = a(2909),
                o = a(82414),
                s = a(78076),
                m = a(42619),
                d = a(76553),
                u = a(6811),
                w = a(64258),
                p = a(14411),
                g = a(98185),
                f = a(60006),
                h = a(67263),
                b = a(95896),
                v = a(12752),
                E = a(16869),
                y = a(39270),
                N = a(45697),
                x = a.n(N),
                k = a(67294),
                C = a(32981),
                I = a(79655),
                T = a(65061),
                X = a(53359);
            const D = function(e) {
                var t = e.onCloseCallback,
                    a = e.isOpen,
                    n = e.title,
                    l = void 0 === n ? "" : n;
                return k.createElement(p.u_, {
                    title: l,
                    onCloseFinished: t,
                    isVisible: a,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: "auto",
                    disableBackdropClick: !0,
                    backgroundColor: "#181B1F"
                }, k.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-h-full tw-gap-5"
                }, k.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                }, k.createElement("div", {
                    className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-w-full"
                }, k.createElement(p.$1, {
                    icon: X.faTriangleExclamation,
                    size: "xl",
                    className: "tw-h-[72px] tw-mb-4"
                }), k.createElement("h3", {
                    className: "heading tw-text-xl tw-font-bold tw-m-0 tw-text-center tw-mb-5"
                }, "This avatar product has already been purchased by users."), k.createElement("p", {
                    className: "tw-font-bold tw-inline-block tw-w-full tw-text-base tw-text-center tw-mb-5"
                }, "Removing an avatar product from a listing that has already been purchased is not allowed, as it would revoke access for users who have paid for it."), k.createElement("p", {
                    className: "tw-text-base tw-text-center tw-mb-2"
                }, "If you still need to remove it, contact our support team. We will review your case and explore potential solutions."))), k.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-gap-2 tw-items-center"
                }, k.createElement("div", {
                    className: "tw-w-1/2"
                }, k.createElement(p.zx, {
                    className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-button-bg-grey tw-text-white",
                    onClick: t
                }, "Cancel")), k.createElement("div", {
                    className: "tw-w-1/2"
                }, k.createElement(I.rU, {
                    to: "https://help.vrchat.com/hc/en-us/requests/new",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, k.createElement(p.zx, {
                    className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-button-bgtw-text-highlight"
                }, "Contact Support"))))))
            };
            var L = ["file"],
                Z = ["imageId"];

            function O(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(a), !0).forEach((function(t) {
                        (0, r.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : O(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var A = function(e) {
                var t, a = e.onDataChange,
                    N = void 0 === a ? function() {} : a,
                    x = e.products,
                    X = void 0 === x ? [] : x,
                    O = e.productsLoading,
                    A = void 0 !== O && O,
                    J = e.listingType,
                    S = e.editedListing,
                    F = void 0 === S ? {} : S,
                    j = e.originalListing,
                    R = void 0 === j ? {} : j,
                    z = e.isEditing,
                    V = void 0 !== z && z,
                    U = (0, C.I0)(),
                    M = (0, C.v9)((function(e) {
                        return e.listingFlow
                    })),
                    _ = M.selectedListingType,
                    B = M.selectedProducts,
                    q = M.productIds,
                    $ = (0, k.useState)(P({
                        displayName: (null == F ? void 0 : F.displayName) || "",
                        description: (null == F ? void 0 : F.description) || "",
                        priceTokens: (null == F ? void 0 : F.priceTokens) || 100,
                        products: q || (null == F ? void 0 : F.productIds) || []
                    }, J === b.ft.DURATION && {
                        duration: (null == F ? void 0 : F.duration) || 1,
                        durationType: (null == F ? void 0 : F.durationType) || b.PG.DAY
                    })),
                    Y = (0, c.Z)($, 2),
                    H = Y[0],
                    G = Y[1],
                    W = (0, k.useState)({}),
                    K = (0, c.Z)(W, 2),
                    Q = K[0],
                    ee = K[1],
                    te = (0, k.useState)(!1),
                    ae = (0, c.Z)(te, 2),
                    ne = ae[0],
                    le = ae[1],
                    re = (0, k.useState)((null == F ? void 0 : F.file) || (null == F ? void 0 : F.imageId) || null),
                    ce = (0, c.Z)(re, 2),
                    ie = ce[0],
                    oe = ce[1],
                    se = k.useState(""),
                    me = (0, c.Z)(se, 2),
                    de = me[0],
                    ue = me[1],
                    we = k.useState(!1),
                    pe = (0, c.Z)(we, 2),
                    ge = pe[0],
                    fe = pe[1],
                    he = (0, k.useRef)(null),
                    be = (0, k.useState)(!1),
                    ve = (0, c.Z)(be, 2),
                    Ee = ve[0],
                    ye = ve[1],
                    Ne = (0, k.useRef)(null),
                    xe = (0, v.Nr)(de),
                    ke = k.useState(!1),
                    Ce = (0, c.Z)(ke, 2),
                    Ie = Ce[0],
                    Te = Ce[1],
                    Xe = (0, k.useMemo)((function() {
                        return 1 === B.length && B[0].productType === b.Pm.AVATAR
                    }), [B]),
                    De = (0, E.Ms)({
                        listingId: F.id
                    }, {
                        skip: !F.id
                    }),
                    Le = De.data;
                De.isFetching;
                (0, k.useEffect)((function() {
                    N(H)
                }), [H]);
                (0, k.useEffect)((function() {
                    return document.addEventListener("mousedown", Ae),
                        function() {
                            document.removeEventListener("mousedown", Ae)
                        }
                }), []), (0, k.useEffect)((function() {
                    var e = function(e) {
                        Ne.current && !Ne.current.contains(e.target) && ye(!1)
                    };
                    return Ee ? document.addEventListener("mousedown", e) : document.removeEventListener("mousedown", e),
                        function() {
                            document.removeEventListener("mousedown", e)
                        }
                }), [Ee]);
                var Ze = function(e) {
                        var t = e.fileId,
                            a = void 0 === t ? null : t,
                            n = e.fileBlob,
                            r = void 0 === n ? null : n,
                            c = null !== a;
                        return null === a && null === r ? (oe(null), void G((function(e) {
                            return P(P({}, e), {}, {
                                file: null,
                                imageId: ""
                            })
                        }))) : c ? (oe(a), void G((function(e) {
                            e.file;
                            return P(P({}, (0, l.Z)(e, L)), {}, {
                                imageId: a
                            })
                        }))) : (oe(r), void G((function(e) {
                            e.imageId;
                            return P(P({}, (0, l.Z)(e, Z)), {}, {
                                file: r
                            })
                        })))
                    },
                    Oe = function(e) {
                        var t = e.target,
                            a = t.name,
                            n = t.value;
                        G((function(e) {
                            var t = P(P({}, e), {}, (0, r.Z)({}, a, n));
                            return N(t), t
                        })), ee(P(P({}, Q), {}, (0, r.Z)({}, a, e.target.checkValidity())))
                    },
                    Pe = function() {
                        Ze({
                            fileId: null,
                            fileBlob: null
                        }), G((function(e) {
                            return P(P({}, e), {}, {
                                displayName: "",
                                description: "",
                                imageId: null
                            })
                        }))
                    },
                    Ae = function(e) {
                        he.current && !he.current.contains(e.target) && fe(!1)
                    },
                    Je = k.useMemo((function() {
                        if (!X) return [];
                        var e = B.map((function(e) {
                            return e.id
                        }));
                        return X.filter((function(t) {
                            return !(null != e && e.includes(t.id)) && t.productType !== b.Pm.ROLE && ("permanent" === _ || t.productType !== b.Pm.AVATAR) && (!xe || (t.id.toLowerCase().includes(xe.trim().toLowerCase()) || t.displayName.toLowerCase().includes(xe.trim().toLowerCase())))
                        })) || []
                    }), [B, X, xe]);
                return (0, k.useEffect)((function() {
                    if (Xe) {
                        var e = B[0];
                        G((function(t) {
                            return P(P({}, t), {}, {
                                displayName: e.displayName,
                                description: e.description,
                                imageId: e.imageId
                            })
                        })), Ze({
                            fileId: e.imageId
                        })
                    }
                }), [Xe]), k.createElement(k.Fragment, null, A && k.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, k.createElement(g.Z, {
                    loading: !0
                })), !A && k.createElement(p.JX, null, k.createElement(D, {
                    isOpen: Ie,
                    onCloseCallback: function() {
                        return Te(!1)
                    },
                    title: "Remove Product from Listing"
                }), k.createElement("p", {
                    className: "tw-text-lg tw-font-bold tw-mb-2"
                }, "Add Products"), k.createElement(p.JX, {
                    className: "tw-relative",
                    ref: he
                }, k.createElement("p", {
                    className: "tw-mb-2"
                }, "Choose the products that buyers of this listing gain access to."), k.createElement(p.II, {
                    className: "tw-mb-2",
                    value: de,
                    onChange: function(e) {
                        return ue(e.target.value)
                    },
                    onFocus: function() {
                        fe(!0)
                    },
                    disabled: B.length >= b._1
                }), k.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-5"
                }, "You must choose 1 to ", b._1, " products."), ge && B.length < b._1 && k.createElement("div", {
                    role: "list",
                    "aria-label": "Available Products List",
                    className: "tw-bottom-[120px] tw-border-2 tw-border-solid tw-rounded-lg tw-border-button-bg tw-bg-[#07242B] tw-p-5 tw-gap-3 tw-max-h-[400px] tw-h-[400px] tw-overflow-y-auto tw-absolute tw-z-10 tw-w-full tw-top-[135px] sm:tw-top-[110px] tw-min-h-[200px]"
                }, k.createElement("p", {
                    className: "tw-mb-3"
                }, "Available Products"), Je.length ? Je.map((function(e) {
                    return k.createElement(k.Fragment, {
                        key: e.id
                    }, k.createElement(p.X2, {
                        product: e,
                        className: "tw-gap-3 tw-flex-wrap"
                    }, k.createElement(p.pw, {
                        imageId: e.imageId,
                        alt: e.displayName,
                        fallbackSrc: h,
                        width: 100,
                        fitToCover: !0
                    }), k.createElement(p.JX, {
                        className: "tw-flex-1"
                    }, k.createElement(p.X2, {
                        className: "tw-gap-2 tw-items-center"
                    }, k.createElement("p", {
                        className: "tw-mb-0 tw-text-highlight tw-font-bold tw-break-words"
                    }, e.displayName), k.createElement(f.DR, {
                        bgColor: "#575757",
                        className: "tw-capitalize"
                    }, e.productType)), k.createElement("p", {
                        className: "tw-mb-0 tw-text-placeholder-text"
                    }, e.description)), k.createElement(p.zx, {
                        type: "button",
                        containerClasses: "tw-w-full sm:tw-w-[160px] tw-self-center",
                        onClick: function(t) {
                            var a;
                            a = e, Xe && Pe(), U((0, y.H_)(a)), G((function(e) {
                                return P(P({}, e), {}, {
                                    products: [].concat((0, n.Z)(e.products), [a.id])
                                })
                            })), fe(!1), ue("")
                        }
                    }, "Add")), k.createElement("hr", {
                        className: "tw-bg-[#07242B] tw-font-medium tw-border tw-border-solid"
                    }))
                })) : k.createElement("div", null, k.createElement("em", null, "No matching products!")))), k.createElement(p.JX, {
                    className: "tw-gap-2 tw-max-h-[196px] tw-overflow-y-auto ".concat(0 !== B.length && "tw-mb-5")
                }, 0 !== B.length && B.map((function(e) {
                    return k.createElement(p.X2, {
                        key: e.id,
                        className: "tw-px-5 tw-py-3 tw-gap-5 tw-items-center tw-bg-grey tw-rounded-lg tw-select-none"
                    }, k.createElement(p.X2, {
                        className: "tw-items-center tw-gap-2 tw-flex-1"
                    }, k.createElement(p.pw, {
                        imageId: null == e ? void 0 : e.imageId,
                        alt: null == e ? void 0 : e.displayName,
                        fallbackSrc: h,
                        width: 36
                    }), k.createElement("p", {
                        className: "tw-text-white tw-font-bold tw-mb-0"
                    }, e.displayName)), k.createElement(p.zx, {
                        type: "button",
                        onClick: function() {
                            return function(e) {
                                if (V) {
                                    var t, a = null == R || null === (t = R.products) || void 0 === t ? void 0 : t.some((function(t) {
                                        return t.avatarId === e.avatarId
                                    }));
                                    if ((null == e ? void 0 : e.productType) === b.Pm.AVATAR && a && Le) return void Te(!0)
                                }
                                Xe && Pe(), U((0, y.Ds)(e)), G((function(t) {
                                    return P(P({}, t), {}, {
                                        products: t.products.filter((function(t) {
                                            return t !== e.id
                                        }))
                                    })
                                }))
                            }(e)
                        },
                        neutral: !0,
                        className: "tw-w-9 tw-h-9"
                    }, k.createElement(p.$1, {
                        icon: m.$
                    })))
                }))), k.createElement("hr", {
                    className: "tw-border-2 tw-border-[#404c58] tw-border-solid tw-mb-5 tw-mt-0"
                }), Xe && k.createElement(p.qX, {
                    type: "dark",
                    hideIcon: !0,
                    icon: o.sq,
                    className: "tw-mb-5"
                }, "The listing thumbnail, name and description will be inherited from your avatar details. To make changes, head over to the", " ", k.createElement(I.rU, {
                    to: "/home/avatar/".concat(null === (t = B[0]) || void 0 === t ? void 0 : t.avatarId),
                    className: "hover:tw-text-teal-accent"
                }, "avatar page"), "."), k.createElement("p", {
                    className: "tw-text-lg tw-font-bold"
                }, "Listing Details"), k.createElement(p.JX, {
                    className: "tw-gap-5"
                }, k.createElement(p.JX, {
                    className: "md:tw-flex-row tw-gap-5"
                }, k.createElement(p.JX, {
                    className: "tw-gap-5"
                }, k.createElement("button", {
                    type: "button",
                    onClick: function() {
                        Xe || le(!0)
                    },
                    disabled: Xe,
                    className: "tw-bg-transparent tw-border-0 tw-p-0 tw-rounded tw-relative tw-items-center tw-justify-center tw-flex"
                }, !ie && k.createElement(p.zx, {
                    containerClasses: "tw-rounded tw-absolute tw-flex-1"
                }, k.createElement(p.$1, {
                    icon: s.Vm,
                    className: "tw-mr-2"
                }), k.createElement("span", null, "Upload Thumbnail")), k.createElement(p.pw, {
                    imageId: ie,
                    fitToCover: !0,
                    alt: "Subscription Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                }))), k.createElement(p.JX, {
                    className: "tw-gap-5 tw-flex-1 md:tw-justify-between"
                }, k.createElement(p.JX, {
                    className: "tw-gap-2"
                }, k.createElement("label", {
                    htmlFor: "displayName"
                }, "Name"), k.createElement(p.II, {
                    name: "displayName",
                    id: "displayName",
                    type: "text",
                    label: "Name",
                    maxLength: 64,
                    disabled: Xe,
                    value: H.displayName,
                    onChange: Oe
                }), k.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, H.displayName.length, "/64")), k.createElement(p.JX, {
                    className: "tw-gap-2"
                }, k.createElement("label", {
                    htmlFor: "description"
                }, "Description"), k.createElement(p.gx, {
                    inputClassName: "tw-h-[120px]",
                    maxLength: 256,
                    disabled: Xe,
                    id: "description",
                    name: "description",
                    label: "Description",
                    value: H.description,
                    onChange: Oe
                }), k.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, H.description.length, "/256")))), k.createElement(p.JX, {
                    className: "tw-gap-5"
                }, V && k.createElement(p.JX, {
                    className: "tw-gap-2"
                }, k.createElement("label", {
                    htmlFor: "id",
                    className: "tw-flex tw-flex-row"
                }, "Listing ID", k.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1",
                    ref: Ne
                }, k.createElement("button", {
                    id: "listingIdTooltip",
                    type: "button",
                    className: "tw-bg-transparent tw-border-none",
                    onClick: function() {
                        return ye(!Ee)
                    },
                    "aria-label": "Listing ID tooltip"
                }, k.createElement(p.$1, {
                    icon: o.sq,
                    className: "tw-text-light-grey"
                })), k.createElement(T.Z, {
                    isOpen: Ee,
                    target: "listingIdTooltip",
                    placement: "right",
                    trigger: "click",
                    innerClassName: "tw-bg-gray-900"
                }, k.createElement("span", {
                    className: "tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50"
                }, "This unique ID can be used for reference and direct integration with prefabs in Unity.")))), k.createElement(p.X2, {
                    className: "tw-gap-2"
                }, k.createElement(p.II, {
                    type: "text",
                    name: "id",
                    id: "id",
                    value: F.id,
                    disabled: !0,
                    className: "tw-flex-1"
                }), k.createElement(p.zx, {
                    type: "button",
                    className: "tw-w-[40px] tw-h-[40px]",
                    onClick: function() {
                        navigator.clipboard.writeText(F.id).then((function() {
                            U((0, w.d)({
                                title: "Copied listing ID",
                                icon: u.f8,
                                message: "Listing ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(e) {
                            var t, a;
                            U((0, w.d)({
                                title: "Failed to copy listing ID",
                                icon: d.eH,
                                message: null !== (t = null === (a = res.error.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== t ? t : "Failed to copy listing ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, k.createElement(p.$1, {
                    icon: i.kZ
                })))), J && J === b.ft.DURATION && k.createElement(p.JX, {
                    className: "tw-max-w-[270px] tw-gap-2"
                }, k.createElement("label", {
                    htmlFor: "duration"
                }, "Duration"), k.createElement(p.JX, {
                    className: "tw-gap-2 xs:tw-flex-row"
                }, k.createElement(p.II, {
                    name: "duration",
                    id: "duration",
                    type: "number",
                    label: "Duration",
                    min: b.nD[H.durationType].min,
                    max: b.nD[H.durationType].max,
                    value: H.duration,
                    onChange: Oe,
                    step: "1"
                }), k.createElement(p.Lt, {
                    name: "durationType",
                    options: b.Ir,
                    value: H.durationType,
                    onChange: function(e) {
                        G((function(t) {
                            return P(P({}, t), {}, {
                                durationType: e
                            })
                        }))
                    }
                })), k.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, "Starts immediately after purchasing.")), k.createElement(p.JX, {
                    className: "md:tw-max-w-[270px]"
                }, k.createElement("label", {
                    htmlFor: "priceTokens",
                    className: "tw-mb-2"
                }, "Price in VRChat Credits"), k.createElement(p.II, {
                    name: "priceTokens",
                    id: "priceTokens",
                    type: "number",
                    max: 1e4,
                    min: 100,
                    step: "1",
                    label: "Price in VRChat Credits",
                    value: H.priceTokens,
                    onChange: Oe
                }))))), k.createElement(p.m6, {
                    preset: "subscription",
                    image: ie,
                    isOpen: ne,
                    onClose: function() {
                        return le(!1)
                    },
                    confirmCallback: Ze,
                    cancelCallBack: function() {
                        return le(!1)
                    }
                }))
            };
            A.propTypes = {
                onDataChange: x().func,
                products: x().array,
                productsLoading: x().bool
            };
            const J = A
        },
        99878: (e, t, a) => {
            a.d(t, {
                Z: () => u
            });
            var n = a(42138),
                l = a(54546),
                r = a(14411),
                c = a(95896),
                i = a(45697),
                o = a.n(i),
                s = a(67294),
                m = a(32981),
                d = function(e) {
                    var t, a = e.onDataChange,
                        i = void 0 === a ? function() {} : a,
                        o = e.stores,
                        d = void 0 === o ? [] : o,
                        u = e.activeStore,
                        w = void 0 === u ? null : u,
                        p = e.activeListing,
                        g = void 0 === p ? null : p,
                        f = (0, s.useState)([]),
                        h = (0, l.Z)(f, 2),
                        b = h[0],
                        v = h[1],
                        E = (0, s.useState)(null !== (t = null == g ? void 0 : g.active) && void 0 !== t && t),
                        y = (0, l.Z)(E, 2),
                        N = y[0],
                        x = y[1],
                        k = (0, m.v9)((function(e) {
                            return e.listingFlow
                        })).selectedProducts,
                        C = d.filter((function(e) {
                            return "world" === e.storeType
                        })),
                        I = (0, s.useMemo)((function() {
                            return k.some((function(e) {
                                return e.productType === c.Pm.AVATAR
                            }))
                        }), [k]);
                    (0, s.useEffect)((function() {
                        i({
                            storeIds: b,
                            active: N
                        })
                    }), [b, N]), (0, s.useEffect)((function() {
                        g && v(g.storeIds), w && !b.includes(w.id) && v([].concat((0, n.Z)(b), [w.id]))
                    }), []);
                    var T = function(e) {
                        b.includes(e.id) ? v(b.filter((function(t) {
                            return t !== e.id
                        }))) : v([].concat((0, n.Z)(b), [e.id]))
                    };
                    return s.createElement(r.JX, null, s.createElement("h6", {
                        className: "tw-text-lg"
                    }, "Store Availability"), s.createElement("p", {
                        className: "tw-mb-3"
                    }, "Choose the stores where you want to display this listing:"), s.createElement(r.JX, {
                        className: "tw-gap-2 tw-max-h-[217px] tw-overflow-y-auto"
                    }, I && s.createElement(r.X2, {
                        className: "tw-px-5 tw-py-3 tw-bg-grey tw-rounded-lg tw-items-center tw-gap-2"
                    }, s.createElement(r.XZ, {
                        checked: !0,
                        disabled: !0,
                        className: "tw-w-5 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-accent-teal-accent tw-border-[#677079] tw-rounded tw-ring-offset-gray-800"
                    }), s.createElement("div", {
                        className: "tw-w-9 tw-h-9 tw-rounded-lg tw-items-center tw-justify-center tw-flex tw-bg-grey"
                    }, s.createElement(r.pw, {
                        imageId: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png",
                        containerColor: "transparent",
                        width: 36,
                        height: 36,
                        alt: "VRC Logo"
                    })), s.createElement(r.JX, null, s.createElement("p", {
                        className: "tw-font-bold tw-text-teal-accent tw-mb-0"
                    }, "Avatar Marketplace"), s.createElement("small", {
                        className: "tw-mb-0 tw-text-light-grey"
                    }, "All listings that include avatar products are available for purchase in the Avatar Marketplace."))), 0 === C.length && s.createElement("p", {
                        className: "tw-text-light-grey"
                    }, "You have no stores that can be used for this listing."), C.map((function(e) {
                        var t;
                        return s.createElement(r.X2, {
                            key: e.id,
                            onClick: function() {
                                return T(e)
                            },
                            className: "tw-cursor-pointer tw-px-5 tw-py-3 tw-bg-grey tw-rounded-lg tw-items-center tw-gap-2"
                        }, s.createElement(r.XZ, {
                            checked: b.includes(e.id),
                            onChange: function() {
                                return T(e)
                            },
                            className: "tw-w-5 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-accent-teal-accent tw-border-[#677079] tw-rounded tw-ring-offset-gray-800"
                        }), s.createElement(r.pw, {
                            imageId: null === (t = e.storeContext) || void 0 === t ? void 0 : t.imageUrl,
                            alt: "".concat(e.displayName, " thumbnail"),
                            width: 36,
                            fitToCover: !0
                        }), s.createElement(r.JX, null, s.createElement("p", {
                            className: "tw-font-bold tw-text-teal-accent tw-mb-0"
                        }, e.displayName), s.createElement("small", {
                            className: "tw-capitalize tw-mb-0 tw-text-light-grey"
                        }, e.storeType, " Store")))
                    }))), s.createElement("hr", {
                        className: "tw-border-t-2 tw-border-placeholder-text"
                    }), s.createElement("h6", {
                        className: "tw-mb-3 tw-text-lg"
                    }, "Listing Visibility"), s.createElement(r.JX, {
                        className: "tw-gap-3"
                    }, s.createElement(r.X2, {
                        className: "tw-gap-2 tw-cursor-pointer",
                        onClick: function() {
                            return x(!1)
                        }
                    }, s.createElement(r.XZ, {
                        checked: !N,
                        onChange: function() {
                            return x(!1)
                        },
                        className: "tw-m-1 tw-w-5 tw-h-5 tw-bg-button-bg-grey tw-ring-2 tw-ring-[#677079] checked:tw-bg-teal-accent checked:tw-ring-teal-accent checked:tw-ring-offset-2 checked:tw-ring-offset-darker-grey tw-rounded-full tw-appearance-none"
                    }), s.createElement(r.JX, null, s.createElement("p", {
                        className: "tw-mb-0"
                    }, "Save as draft"), s.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "Users cannot see the listing until you publish it."))), s.createElement(r.X2, {
                        className: "tw-gap-2 tw-cursor-pointer",
                        onClick: function() {
                            return x(!0)
                        }
                    }, s.createElement(r.XZ, {
                        checked: N,
                        onChange: function() {
                            return x(!0)
                        },
                        className: "tw-m-1 tw-w-5 tw-h-5 tw-bg-button-bg-grey tw-ring-2 tw-ring-[#677079] checked:tw-bg-teal-accent checked:tw-ring-teal-accent checked:tw-ring-offset-2 checked:tw-ring-offset-darker-grey tw-rounded-full tw-appearance-none"
                    }), s.createElement(r.JX, null, s.createElement("p", {
                        className: "tw-mb-0"
                    }, "Create and publish in the selected stores"), s.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "Users can start buying the listing in the selected published world stores.")))))
                };
            d.propTypes = {
                onDataChange: o().func,
                stores: o().array,
                store: o().object
            };
            const u = d
        }
    }
]);
//# sourceMappingURL=60bb08fe12aa0833092160efb037f263bbe02f827d38b748d2b77d73e320e71b.js.map