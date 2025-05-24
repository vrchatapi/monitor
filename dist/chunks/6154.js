"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6154], {
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
        25423: (e, t, a) => {
            a.d(t, {
                Z: () => F
            });
            var n = a(42138),
                l = a(45987),
                r = a(4942),
                i = a(54546),
                c = a(2909),
                o = a(82414),
                s = a(78076),
                m = a(76553),
                u = a(6811),
                d = a(64258),
                w = a(37463),
                p = a(98185),
                g = a(60006),
                f = a(67263),
                b = a(95896),
                h = a(17383),
                v = a(16869),
                E = a(39270),
                N = a(45697),
                y = a.n(N),
                x = a(67294),
                k = a(32981),
                C = a(79655),
                I = a(65061),
                T = a(53359);
            const D = function(e) {
                var t = e.onCloseCallback,
                    a = e.isOpen,
                    n = e.title,
                    l = void 0 === n ? "" : n;
                return x.createElement(w.u_, {
                    title: l,
                    onCloseFinished: t,
                    isVisible: a,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: "auto",
                    disableBackdropClick: !0,
                    className: "tw-bg-black"
                }, x.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-h-full tw-gap-5"
                }, x.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                }, x.createElement("div", {
                    className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-w-full"
                }, x.createElement(w.$1, {
                    icon: T.faTriangleExclamation,
                    size: "xl",
                    className: "tw-h-[72px] tw-mb-4"
                }), x.createElement("h3", {
                    className: "heading tw-text-xl tw-font-bold tw-m-0 tw-text-center tw-mb-5"
                }, "This avatar product has already been purchased by users."), x.createElement("p", {
                    className: "tw-font-bold tw-inline-block tw-w-full tw-text-base tw-text-center tw-mb-5"
                }, "Removing an avatar product from a listing that has already been purchased is not allowed, as it would revoke access for users who have paid for it."), x.createElement("p", {
                    className: "tw-text-base tw-text-center tw-mb-2"
                }, "If you still need to remove it, contact our support team. We will review your case and explore potential solutions."))), x.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-gap-2 tw-items-center"
                }, x.createElement("div", {
                    className: "tw-w-1/2"
                }, x.createElement(w.zx, {
                    className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-button-bg-grey tw-text-white",
                    onClick: t
                }, "Cancel")), x.createElement("div", {
                    className: "tw-w-1/2"
                }, x.createElement(C.rU, {
                    to: "https://vrch.at/marketplace-help",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, x.createElement(w.zx, {
                    className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-button-bgtw-text-highlight"
                }, "Contact Support"))))))
            };
            var X = a(42619),
                L = a(56646);
            const S = function(e) {
                var t = e.product,
                    a = e.onClick,
                    n = void 0 === a ? function() {} : a,
                    l = (0, x.useState)(!1),
                    r = (0, i.Z)(l, 2),
                    c = r[0],
                    o = r[1],
                    s = (0, x.useRef)(null);
                return (0, x.useEffect)((function() {
                    var e = function(e) {
                        s.current && !s.current.contains(e.target) && o(!1)
                    };
                    return c ? document.addEventListener("mousedown", e) : document.removeEventListener("mousedown", e),
                        function() {
                            document.removeEventListener("mousedown", e)
                        }
                }), [c]), x.createElement(w.X2, {
                    key: t.id,
                    className: "tw-px-5 tw-py-3 tw-gap-5 tw-items-center tw-bg-grey tw-rounded-lg tw-select-none"
                }, x.createElement(w.X2, {
                    className: "tw-items-center tw-gap-2 tw-flex-1"
                }, x.createElement(w.pw, {
                    className: "tw-shrink-0",
                    imageId: null == t ? void 0 : t.imageId,
                    alt: null == t ? void 0 : t.displayName,
                    fallbackSrc: f,
                    width: 36
                }), x.createElement("p", {
                    className: "tw-text-white tw-font-bold tw-mb-0 tw-grow"
                }, t.displayName), (null == t ? void 0 : t.assetDisabled) && x.createElement("p", {
                    className: "tw-text-orange tw-shrink-0 tw-mb-0",
                    "aria-label": "".concat(t.displayName, " is disabled")
                }, x.createElement(w.$1, {
                    icon: T.faTriangleExclamation
                }), x.createElement("span", {
                    className: "tw-hidden sm:tw-inline"
                }, " Disabled"), x.createElement("button", {
                    id: "productStatusTooltip-".concat(t.id),
                    type: "button",
                    className: "tw-bg-transparent tw-border-none",
                    onClick: function() {
                        return o(!c)
                    },
                    ref: s,
                    "aria-label": "Product Status tooltip"
                }, x.createElement(w.$1, {
                    icon: L.faCircleInfo,
                    className: "tw-text-placeholder-text"
                })), x.createElement(I.Z, {
                    isOpen: c,
                    target: "productStatusTooltip-".concat(t.id),
                    placement: "top",
                    toggle: function() {
                        return o(!c)
                    },
                    trigger: "click",
                    innerClassName: "tw-bg-black"
                }, "This product is currently unavailable due to an issue. Go to the product page to view more details and how to address the problem."))), x.createElement(w.zx, {
                    type: "button",
                    onClick: function() {
                        n(t)
                    },
                    neutral: !0,
                    className: "tw-w-9 tw-h-9"
                }, x.createElement(w.$1, {
                    icon: X.$
                })))
            };
            var A = ["file"],
                Z = ["imageId"];

            function P(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(a), !0).forEach((function(t) {
                        (0, r.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : P(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var J = function(e) {
                var t, a = e.onDataChange,
                    N = void 0 === a ? function() {} : a,
                    y = e.products,
                    T = void 0 === y ? [] : y,
                    X = e.productsLoading,
                    L = void 0 !== X && X,
                    P = e.listingType,
                    J = e.editedListing,
                    F = void 0 === J ? {} : J,
                    j = e.originalListing,
                    R = void 0 === j ? {} : j,
                    z = e.isEditing,
                    V = void 0 !== z && z,
                    q = (0, k.I0)(),
                    _ = (0, k.v9)((function(e) {
                        return e.listingFlow
                    })),
                    M = _.selectedListingType,
                    U = _.selectedProducts,
                    $ = _.productIds,
                    B = (0, x.useState)(O(O({
                        displayName: (null == F ? void 0 : F.displayName) || "",
                        description: (null == F ? void 0 : F.description) || "",
                        priceTokens: (null == F ? void 0 : F.priceTokens) || 100,
                        products: $ || (null == F ? void 0 : F.productIds) || []
                    }, P === b.ft.DURATION && {
                        duration: (null == F ? void 0 : F.duration) || 1,
                        durationType: (null == F ? void 0 : F.durationType) || b.PG.DAY
                    }), P === b.ft.INSTANT && {
                        quantifiable: (null == F ? void 0 : F.quantifiable) || !1
                    })),
                    Y = (0, i.Z)(B, 2),
                    G = Y[0],
                    H = Y[1],
                    K = (0, x.useState)({}),
                    Q = (0, i.Z)(K, 2),
                    W = Q[0],
                    ee = Q[1],
                    te = (0, x.useState)(!1),
                    ae = (0, i.Z)(te, 2),
                    ne = ae[0],
                    le = ae[1],
                    re = (0, x.useState)((null == F ? void 0 : F.file) || (null == F ? void 0 : F.imageId) || null),
                    ie = (0, i.Z)(re, 2),
                    ce = ie[0],
                    oe = ie[1],
                    se = x.useState(""),
                    me = (0, i.Z)(se, 2),
                    ue = me[0],
                    de = me[1],
                    we = x.useState(!1),
                    pe = (0, i.Z)(we, 2),
                    ge = pe[0],
                    fe = pe[1],
                    be = (0, x.useRef)(null),
                    he = (0, x.useState)(!1),
                    ve = (0, i.Z)(he, 2),
                    Ee = ve[0],
                    Ne = ve[1],
                    ye = (0, x.useRef)(null),
                    xe = (0, h.Nr)(ue),
                    ke = x.useState(!1),
                    Ce = (0, i.Z)(ke, 2),
                    Ie = Ce[0],
                    Te = Ce[1],
                    De = (0, x.useMemo)((function() {
                        return 1 === U.length && U[0].productType === b.Pm.AVATAR
                    }), [U]),
                    Xe = (0, v.Ms)({
                        listingId: F.id
                    }, {
                        skip: !F.id
                    }),
                    Le = Xe.data;
                Xe.isFetching;
                (0, x.useEffect)((function() {
                    N(G)
                }), [G]);
                (0, x.useEffect)((function() {
                    return document.addEventListener("mousedown", Pe),
                        function() {
                            document.removeEventListener("mousedown", Pe)
                        }
                }), []), (0, x.useEffect)((function() {
                    var e = function(e) {
                        ye.current && !ye.current.contains(e.target) && Ne(!1)
                    };
                    return Ee ? document.addEventListener("mousedown", e) : document.removeEventListener("mousedown", e),
                        function() {
                            document.removeEventListener("mousedown", e)
                        }
                }), [Ee]);
                var Se = function(e) {
                        var t = e.fileId,
                            a = void 0 === t ? null : t,
                            n = e.fileBlob,
                            r = void 0 === n ? null : n,
                            i = null !== a;
                        return null === a && null === r ? (oe(null), void H((function(e) {
                            return O(O({}, e), {}, {
                                file: null,
                                imageId: ""
                            })
                        }))) : i ? (oe(a), void H((function(e) {
                            e.file;
                            return O(O({}, (0, l.Z)(e, A)), {}, {
                                imageId: a
                            })
                        }))) : (oe(r), void H((function(e) {
                            e.imageId;
                            return O(O({}, (0, l.Z)(e, Z)), {}, {
                                file: r
                            })
                        })))
                    },
                    Ae = function(e) {
                        var t = e.target,
                            a = t.name,
                            n = t.value;
                        H((function(e) {
                            var t = O(O({}, e), {}, (0, r.Z)({}, a, n));
                            return N(t), t
                        })), ee(O(O({}, W), {}, (0, r.Z)({}, a, e.target.checkValidity())))
                    },
                    Ze = function() {
                        Se({
                            fileId: null,
                            fileBlob: null
                        }), H((function(e) {
                            return O(O({}, e), {}, {
                                displayName: "",
                                description: "",
                                imageId: null
                            })
                        }))
                    },
                    Pe = function(e) {
                        be.current && !be.current.contains(e.target) && fe(!1)
                    },
                    Oe = x.useMemo((function() {
                        if (!T) return [];
                        var e = U.map((function(e) {
                            return e.id
                        }));
                        return T.filter((function(t) {
                            return !(null != e && e.includes(t.id)) && t.productType !== b.Pm.ROLE && ("permanent" === M || t.productType !== b.Pm.AVATAR) && (!xe || (t.id.toLowerCase().includes(xe.trim().toLowerCase()) || t.displayName.toLowerCase().includes(xe.trim().toLowerCase())))
                        })) || []
                    }), [U, T, xe]);
                return (0, x.useEffect)((function() {
                    if (De) {
                        var e = U[0];
                        H((function(t) {
                            return O(O({}, t), {}, {
                                displayName: e.displayName,
                                description: e.description,
                                imageId: e.imageId
                            })
                        })), Se({
                            fileId: e.imageId
                        })
                    }
                }), [De]), x.createElement(x.Fragment, null, L && x.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, x.createElement(p.Z, {
                    loading: !0
                })), !L && x.createElement(w.JX, null, x.createElement(D, {
                    isOpen: Ie,
                    onCloseCallback: function() {
                        return Te(!1)
                    },
                    title: "Remove Product from Listing"
                }), x.createElement("p", {
                    className: "tw-text-lg tw-font-bold tw-mb-2"
                }, "Add Products"), x.createElement(w.JX, {
                    className: "tw-relative",
                    ref: be
                }, x.createElement("p", {
                    className: "tw-mb-2"
                }, "Choose the products that buyers of this listing gain access to."), x.createElement(w.II, {
                    className: "tw-mb-2",
                    placeholder: "Search products",
                    type: "search",
                    rawInputClassName: "tw-pl-8",
                    value: ue,
                    onChange: function(e) {
                        return de(e.target.value)
                    },
                    onFocus: function() {
                        fe(!0)
                    },
                    disabled: U.length >= b._1
                }), x.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-5"
                }, "You must choose 1 to ", b._1, " products."), ge && U.length < b._1 && x.createElement("div", {
                    role: "list",
                    "aria-label": "Available Products List",
                    className: "tw-bottom-[120px] tw-border-2 tw-border-solid tw-rounded-lg tw-border-button-bg tw-bg-[#07242B] tw-p-5 tw-gap-3 tw-max-h-[400px] tw-h-[400px] tw-overflow-y-auto tw-absolute tw-z-10 tw-w-full tw-top-[105px] sm:tw-top-[80px] tw-min-h-[200px]"
                }, x.createElement("p", {
                    className: "tw-mb-3"
                }, "Available Products"), Oe.length ? Oe.map((function(e) {
                    return x.createElement(x.Fragment, {
                        key: e.id
                    }, x.createElement(w.X2, {
                        product: e,
                        className: "tw-gap-3 tw-flex-wrap"
                    }, x.createElement(w.pw, {
                        imageId: e.imageId,
                        alt: e.displayName,
                        fallbackSrc: f,
                        width: 100,
                        fitToCover: !0
                    }), x.createElement(w.JX, {
                        className: "tw-flex-1 tw-overflow-hidden"
                    }, x.createElement(w.X2, {
                        className: "tw-gap-2 tw-items-center tw-mb-1"
                    }, x.createElement("p", {
                        className: "tw-mb-0 tw-text-highlight tw-font-bold tw-break-words"
                    }, e.displayName), x.createElement(g.DR, {
                        bgColor: "#575757",
                        className: "tw-capitalize"
                    }, e.productType)), x.createElement("p", {
                        className: "tw-mb-0 tw-text-light-grey tw-break-words"
                    }, e.description)), x.createElement(w.zx, {
                        type: "button",
                        containerClasses: "tw-w-full sm:tw-w-[160px] tw-self-center",
                        onClick: function(t) {
                            var a;
                            a = e, De && Ze(), q((0, E.H_)(a)), H((function(e) {
                                return O(O({}, e), {}, {
                                    products: [].concat((0, n.Z)(e.products), [a.id])
                                })
                            })), fe(!1), de("")
                        },
                        disabled: null == e ? void 0 : e.assetDisabled
                    }, "Add")), x.createElement("hr", {
                        className: "tw-bg-[#07242B] tw-font-medium tw-border tw-border-solid"
                    }))
                })) : x.createElement("div", null, x.createElement("em", null, "No matching products!")))), x.createElement(w.JX, {
                    className: "tw-gap-2 tw-max-h-[196px] tw-overflow-y-auto ".concat(0 !== U.length && "tw-mb-5")
                }, 0 !== U.length && U.map((function(e) {
                    return x.createElement(S, {
                        product: e,
                        key: e.id,
                        onClick: function() {
                            return function(e) {
                                if (V) {
                                    var t, a = null == R || null === (t = R.products) || void 0 === t ? void 0 : t.some((function(t) {
                                        return t.avatarId === e.avatarId
                                    }));
                                    if ((null == e ? void 0 : e.productType) === b.Pm.AVATAR && a && Le) return void Te(!0)
                                }
                                De && Ze(), q((0, E.Ds)(e)), H((function(t) {
                                    return O(O({}, t), {}, {
                                        products: t.products.filter((function(t) {
                                            return t !== e.id
                                        }))
                                    })
                                }))
                            }(e)
                        }
                    })
                }))), x.createElement("hr", {
                    className: "tw-border tw-border-[#404c58] tw-border-solid tw-mb-5 tw-mt-0"
                }), De && x.createElement(w.qX, {
                    type: "custom",
                    color: "#000000",
                    iconColor: "#DADADA",
                    hideIcon: !0,
                    icon: o.sq,
                    className: "tw-mb-5 tw-p-5 tw-border-2 tw-rounded-lg"
                }, "The listing thumbnail, name and description will be inherited from your avatar details. To make changes, head over to the", " ", x.createElement(C.rU, {
                    to: "/home/avatar/".concat(null === (t = U[0]) || void 0 === t ? void 0 : t.avatarId),
                    className: "hover:tw-text-teal-accent"
                }, "avatar page"), "."), x.createElement("p", {
                    className: "tw-text-lg tw-font-bold"
                }, "Listing Details"), x.createElement(w.JX, {
                    className: "tw-gap-5"
                }, x.createElement(w.JX, {
                    className: "md:tw-flex-row tw-gap-5"
                }, x.createElement(w.JX, {
                    className: "tw-gap-5"
                }, x.createElement("button", {
                    type: "button",
                    onClick: function() {
                        De || le(!0)
                    },
                    disabled: De,
                    className: "tw-bg-transparent tw-border-0 tw-p-0 tw-rounded tw-relative tw-items-center tw-justify-center tw-flex"
                }, !ce && x.createElement(w.zx, {
                    containerClasses: "tw-rounded tw-absolute tw-flex-1"
                }, x.createElement(w.$1, {
                    icon: s.Vm,
                    className: "tw-mr-2"
                }), x.createElement("span", null, "Upload Thumbnail")), x.createElement(w.pw, {
                    imageId: ce,
                    fitToCover: !0,
                    alt: "Subscription Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                }))), x.createElement(w.JX, {
                    className: "tw-gap-5 tw-flex-1 md:tw-justify-between"
                }, x.createElement(w.JX, {
                    className: "tw-gap-2"
                }, x.createElement("label", {
                    htmlFor: "displayName"
                }, "Name"), x.createElement(w.II, {
                    name: "displayName",
                    id: "displayName",
                    type: "text",
                    label: "Name",
                    maxLength: 64,
                    disabled: De,
                    value: G.displayName,
                    onChange: Ae
                }), x.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, G.displayName.length, "/64")), x.createElement(w.JX, {
                    className: "tw-gap-2"
                }, x.createElement("label", {
                    htmlFor: "description"
                }, "Description"), x.createElement(w.gx, {
                    inputClassName: "tw-h-[120px]",
                    maxLength: 256,
                    disabled: De,
                    id: "description",
                    name: "description",
                    label: "Description",
                    value: G.description,
                    onChange: Ae
                }), x.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, G.description.length, "/256")))), x.createElement(w.JX, {
                    className: "tw-gap-5"
                }, V && x.createElement(w.JX, {
                    className: "tw-gap-2"
                }, x.createElement("label", {
                    htmlFor: "id",
                    className: "tw-flex tw-flex-row"
                }, "Listing ID", x.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1",
                    ref: ye
                }, x.createElement("button", {
                    id: "listingIdTooltip",
                    type: "button",
                    className: "tw-bg-transparent tw-border-none",
                    onClick: function() {
                        return Ne(!Ee)
                    },
                    "aria-label": "Listing ID tooltip"
                }, x.createElement(w.$1, {
                    icon: o.sq,
                    className: "tw-text-light-grey"
                })), x.createElement(I.Z, {
                    isOpen: Ee,
                    target: "listingIdTooltip",
                    placement: "right",
                    trigger: "click",
                    innerClassName: "tw-bg-gray-900"
                }, x.createElement("span", {
                    className: "tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50"
                }, "This unique ID can be used for reference and direct integration with prefabs in Unity.")))), x.createElement(w.X2, {
                    className: "tw-gap-2"
                }, x.createElement(w.II, {
                    type: "text",
                    name: "id",
                    id: "id",
                    value: F.id,
                    disabled: !0,
                    className: "tw-flex-1"
                }), x.createElement(w.zx, {
                    type: "button",
                    className: "tw-w-[40px] tw-h-[40px]",
                    onClick: function() {
                        navigator.clipboard.writeText(F.id).then((function() {
                            q((0, d.d)({
                                title: "Copied listing ID",
                                icon: u.f8,
                                message: "Listing ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(e) {
                            var t, a;
                            q((0, d.d)({
                                title: "Failed to copy listing ID",
                                icon: m.eH,
                                message: null !== (t = null === (a = res.error.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== t ? t : "Failed to copy listing ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, x.createElement(w.$1, {
                    icon: c.kZ
                })))), P && P === b.ft.DURATION && x.createElement(w.JX, {
                    className: "tw-max-w-[270px] tw-gap-2"
                }, x.createElement("label", {
                    htmlFor: "duration"
                }, "Duration"), x.createElement(w.JX, {
                    className: "tw-gap-2 xs:tw-flex-row"
                }, x.createElement(w.II, {
                    name: "duration",
                    id: "duration",
                    type: "number",
                    inputmode: "numeric",
                    pattern: "\\d*",
                    label: "Duration",
                    min: b.nD[G.durationType].min,
                    max: b.nD[G.durationType].max,
                    value: G.duration,
                    onChange: Ae,
                    step: "1"
                }), x.createElement(w.Lt, {
                    name: "durationType",
                    options: b.Ir,
                    value: G.durationType,
                    onChange: function(e) {
                        H((function(t) {
                            return O(O({}, t), {}, {
                                durationType: e
                            })
                        }))
                    }
                })), x.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, "Starts immediately after purchasing.")), x.createElement(w.JX, {
                    className: "md:tw-max-w-[270px]"
                }, x.createElement("label", {
                    htmlFor: "priceTokens",
                    className: "tw-mb-2"
                }, "Price in VRChat Credits"), x.createElement(w.II, {
                    name: "priceTokens",
                    id: "priceTokens",
                    type: "number",
                    inputmode: "numeric",
                    pattern: "\\d*",
                    max: P === b.ft.PERMANENT ? b.YC : b._C,
                    min: b.zD,
                    step: "1",
                    label: "Price in VRChat Credits",
                    value: G.priceTokens,
                    onChange: Ae
                })), P && P === b.ft.INSTANT && x.createElement(w.X2, {
                    className: "tw-bg-[#252A30] tw-p-5 tw-rounded-lg tw-mb-5"
                }, x.createElement(w.JX, {
                    className: "tw-flex-1"
                }, x.createElement("p", {
                    className: "tw-mb-1"
                }, "Enable Quantity Purchases"), x.createElement("small", {
                    className: "tw-text-light-grey"
                }, "If enabled, buyers can purchase up to 99 units of this item at once.")), x.createElement(w.X2, {
                    className: "tw-justify-center tw-items-center tw-gap-3"
                }, x.createElement("label", {
                    htmlFor: "useForSubscriberList"
                }, G.quantifiable ? "On" : "Off"), x.createElement(w.K_, {
                    value: "useForSubscriberList",
                    defaultChecked: G.quantifiable,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        H((function(e) {
                            return O(O({}, e), {}, {
                                quantifiable: t
                            })
                        }))
                    }
                })))))), x.createElement(w.m6, {
                    preset: "listing",
                    image: ce,
                    isOpen: ne,
                    onClose: function() {
                        return le(!1)
                    },
                    confirmCallback: Se,
                    cancelCallBack: function() {
                        return le(!1)
                    }
                }))
            };
            J.propTypes = {
                onDataChange: y().func,
                products: y().array,
                productsLoading: y().bool
            };
            const F = J
        },
        80938: (e, t, a) => {
            a.d(t, {
                Z: () => l
            });
            var n = a(67294);
            const l = function() {
                return n.createElement("div", null, n.createElement("p", null, "Publishing this listing will make it available for viewing and purchase, including in any selected store(s)"))
            }
        },
        99878: (e, t, a) => {
            a.d(t, {
                Z: () => d
            });
            var n = a(42138),
                l = a(54546),
                r = a(37463),
                i = a(95896),
                c = a(45697),
                o = a.n(c),
                s = a(67294),
                m = a(32981),
                u = function(e) {
                    var t, a = e.onDataChange,
                        c = void 0 === a ? function() {} : a,
                        o = e.stores,
                        u = void 0 === o ? [] : o,
                        d = e.activeStore,
                        w = void 0 === d ? null : d,
                        p = e.activeListing,
                        g = void 0 === p ? null : p,
                        f = e.isEditing,
                        b = void 0 !== f && f,
                        h = (0, s.useState)([]),
                        v = (0, l.Z)(h, 2),
                        E = v[0],
                        N = v[1],
                        y = (0, s.useState)(null !== (t = null == g ? void 0 : g.active) && void 0 !== t && t),
                        x = (0, l.Z)(y, 2),
                        k = x[0],
                        C = x[1],
                        I = (0, m.v9)((function(e) {
                            return e.listingFlow
                        })).selectedProducts,
                        T = u.filter((function(e) {
                            return "world" === e.storeType
                        })),
                        D = (0, s.useMemo)((function() {
                            return I.some((function(e) {
                                return e.productType === i.Pm.AVATAR
                            }))
                        }), [I]);
                    (0, s.useEffect)((function() {
                        c({
                            storeIds: E,
                            active: k
                        })
                    }), [E, k]), (0, s.useEffect)((function() {
                        null != g && g.storeIds && N(g.storeIds), w && !E.includes(w.id) && N([].concat((0, n.Z)(E), [w.id]))
                    }), []);
                    var X = function(e) {
                        E.includes(e.id) ? N(E.filter((function(t) {
                            return t !== e.id
                        }))) : N([].concat((0, n.Z)(E), [e.id]))
                    };
                    return s.createElement(r.JX, null, s.createElement("h6", {
                        className: "tw-text-lg"
                    }, "Store Availability"), s.createElement("p", {
                        className: "tw-mb-3"
                    }, "Choose the stores where you want to display this listing:"), s.createElement(r.JX, {
                        className: "tw-gap-2 tw-max-h-[217px] tw-overflow-y-auto"
                    }, D && s.createElement(r.X2, {
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
                    }, "All listings that include avatar products are available for purchase in the Avatar Marketplace."))), 0 === T.length && s.createElement("p", {
                        className: "tw-text-light-grey"
                    }, "You have no stores that can be used for this listing."), T.map((function(e) {
                        var t;
                        return s.createElement(r.X2, {
                            key: e.id,
                            onClick: function() {
                                return X(e)
                            },
                            className: "tw-cursor-pointer tw-px-5 tw-py-3 tw-bg-grey tw-rounded-lg tw-items-center tw-gap-2"
                        }, s.createElement(r.XZ, {
                            checked: E.includes(e.id),
                            onChange: function() {
                                return X(e)
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
                        className: "tw-border-t tw-border-placeholder-text"
                    }), s.createElement("h6", {
                        className: "tw-mb-3 tw-text-lg"
                    }, "Listing Visibility"), s.createElement(r.JX, {
                        className: "tw-gap-3"
                    }, s.createElement(r.X2, {
                        className: "tw-gap-2 tw-cursor-pointer",
                        onClick: function() {
                            return C(!1)
                        }
                    }, s.createElement(r.XZ, {
                        checked: !k,
                        onChange: function() {
                            return C(!1)
                        },
                        className: "tw-m-1 tw-w-4 tw-h-4 tw-bg-button-bg-grey tw-ring-2 tw-ring-[#677079] checked:tw-bg-teal-accent checked:tw-ring-teal-accent checked:tw-ring-offset-2 checked:tw-ring-offset-darker-grey tw-rounded-full tw-appearance-none"
                    }), s.createElement(r.JX, null, s.createElement("p", {
                        className: "tw-mb-0"
                    }, "Save as draft"), s.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "Users cannot see the listing until you publish it."))), s.createElement(r.X2, {
                        className: "tw-gap-2 tw-cursor-pointer",
                        onClick: function() {
                            return C(!0)
                        }
                    }, s.createElement(r.XZ, {
                        checked: k,
                        onChange: function() {
                            return C(!0)
                        },
                        className: "tw-m-1 tw-w-4 tw-h-4 tw-bg-button-bg-grey tw-ring-2 tw-ring-[#677079] checked:tw-bg-teal-accent checked:tw-ring-teal-accent checked:tw-ring-offset-2 checked:tw-ring-offset-darker-grey tw-rounded-full tw-appearance-none"
                    }), s.createElement(r.JX, null, s.createElement("p", {
                        className: "tw-mb-0"
                    }, b ? "Save" : "Create", " and publish in the selected stores"), s.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "The listing will be immediately visible and available for purchase in active stores.")))))
                };
            u.propTypes = {
                onDataChange: o().func,
                stores: o().array,
                store: o().object
            };
            const d = u
        }
    }
]);
//# sourceMappingURL=a9608872e83212fba4661751d0fac6f568857f59a0bca846e0c1d0d696da6221.js.map