"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6154], {
        90502: (e, t) => {
            var a = "arrow-up-right-from-square",
                n = ["external-link"],
                r = "f08e",
                l = "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z";
            t.DF = {
                prefix: "fas",
                iconName: a,
                icon: [512, 512, n, r, l]
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
                Z: () => j
            });
            var n = a(42138),
                r = a(45987),
                l = a(4942),
                i = a(54546),
                c = a(82414),
                o = a(2909),
                s = a(78076),
                m = a(76553),
                u = a(6811),
                d = a(64258),
                w = a(96985),
                p = a(60006),
                g = a(51806),
                f = a.n(g),
                b = a(95896),
                h = a(58990),
                v = a(45587),
                E = a(95168),
                N = a(16869),
                y = a(39270),
                x = a(45697),
                k = a.n(x),
                C = a(67294),
                I = a(32981),
                T = a(79655),
                D = a(65061),
                L = a(53359);
            const X = function(e) {
                var t = e.onCloseCallback,
                    a = e.isOpen,
                    n = e.title,
                    r = void 0 === n ? "" : n;
                return C.createElement(w.u_, {
                    title: r,
                    onCloseFinished: t,
                    isVisible: a,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: "auto",
                    disableBackdropClick: !0,
                    className: "tw-bg-black"
                }, C.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-h-full tw-gap-5"
                }, C.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-items-center sm:tw-items-start sm:tw-flex-row"
                }, C.createElement("div", {
                    className: "tw-flex tw-flex-col tw-justify-start tw-text-left tw-w-full"
                }, C.createElement(w.$1, {
                    icon: L.faTriangleExclamation,
                    size: "xl",
                    className: "tw-h-[72px] tw-mb-4"
                }), C.createElement("h3", {
                    className: "heading tw-text-xl tw-font-bold tw-m-0 tw-text-center tw-mb-5"
                }, "This avatar product has already been purchased by users."), C.createElement("p", {
                    className: "tw-font-bold tw-inline-block tw-w-full tw-text-base tw-text-center tw-mb-5"
                }, "Removing an avatar product from a listing that has already been purchased is not allowed, as it would revoke access for users who have paid for it."), C.createElement("p", {
                    className: "tw-text-base tw-text-center tw-mb-2"
                }, "If you still need to remove it, contact our support team. We will review your case and explore potential solutions."))), C.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-gap-2 tw-items-center"
                }, C.createElement("div", {
                    className: "tw-w-1/2"
                }, C.createElement(w.zx, {
                    className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-button-bg-grey tw-text-white",
                    onClick: t
                }, "Cancel")), C.createElement("div", {
                    className: "tw-w-1/2"
                }, C.createElement(T.rU, {
                    to: "https://vrch.at/marketplace-help",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, C.createElement(w.zx, {
                    className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-button-bgtw-text-highlight"
                }, "Contact Support"))))))
            };
            var A = a(42619),
                S = a(56646);
            const P = function(e) {
                var t = e.product,
                    a = e.onClick,
                    n = void 0 === a ? function() {} : a,
                    r = (0, C.useState)(!1),
                    l = (0, i.Z)(r, 2),
                    c = l[0],
                    o = l[1],
                    s = (0, C.useRef)(null);
                return (0, C.useEffect)((function() {
                    var e = function(e) {
                        s.current && !s.current.contains(e.target) && o(!1)
                    };
                    return c ? document.addEventListener("mousedown", e) : document.removeEventListener("mousedown", e),
                        function() {
                            document.removeEventListener("mousedown", e)
                        }
                }), [c]), C.createElement(w.X2, {
                    key: t.id,
                    className: "tw-px-5 tw-py-3 tw-gap-5 tw-items-center tw-bg-grey tw-rounded-lg tw-select-none"
                }, C.createElement(w.X2, {
                    className: "tw-items-center tw-gap-2 tw-flex-1"
                }, C.createElement(w.pw, {
                    className: "tw-shrink-0",
                    imageId: null == t ? void 0 : t.imageId,
                    alt: null == t ? void 0 : t.displayName,
                    fallbackSrc: f(),
                    width: 36
                }), C.createElement("p", {
                    className: "tw-text-white tw-font-bold tw-mb-0 tw-grow"
                }, t.displayName), (null == t ? void 0 : t.assetDisabled) && C.createElement("p", {
                    className: "tw-text-orange tw-shrink-0 tw-mb-0",
                    "aria-label": "".concat(t.displayName, " is disabled")
                }, C.createElement(w.$1, {
                    icon: L.faTriangleExclamation
                }), C.createElement("span", {
                    className: "tw-hidden sm:tw-inline"
                }, " Disabled"), C.createElement("button", {
                    id: "productStatusTooltip-".concat(t.id),
                    type: "button",
                    className: "tw-bg-transparent tw-border-none",
                    onClick: function() {
                        return o(!c)
                    },
                    ref: s,
                    "aria-label": "Product Status tooltip"
                }, C.createElement(w.$1, {
                    icon: S.faCircleInfo,
                    className: "tw-text-placeholder-text"
                })), C.createElement(D.Z, {
                    isOpen: c,
                    target: "productStatusTooltip-".concat(t.id),
                    placement: "top",
                    toggle: function() {
                        return o(!c)
                    },
                    trigger: "click",
                    innerClassName: "tw-bg-black"
                }, "This product is currently unavailable due to an issue. Go to the product page to view more details and how to address the problem."))), C.createElement(w.zx, {
                    type: "button",
                    onClick: function() {
                        n(t)
                    },
                    neutral: !0,
                    className: "tw-w-9 tw-h-9"
                }, C.createElement(w.$1, {
                    icon: A.$
                })))
            };
            var Z = ["file"],
                O = ["imageId"];

            function J(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function F(e) {
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
            var R = function(e) {
                var t, a = e.onDataChange,
                    g = void 0 === a ? function() {} : a,
                    x = e.products,
                    k = void 0 === x ? [] : x,
                    L = e.productsLoading,
                    A = void 0 !== L && L,
                    S = e.listingType,
                    J = e.editedListing,
                    R = void 0 === J ? {} : J,
                    j = e.originalListing,
                    V = e.isEditing,
                    q = void 0 !== V && V,
                    z = (0, I.I0)(),
                    M = (0, I.v9)((function(e) {
                        return e.listingFlow
                    })),
                    _ = M.selectedListingType,
                    $ = M.selectedProducts,
                    B = M.productIds,
                    U = (0, C.useState)(F(F({
                        displayName: (null == R ? void 0 : R.displayName) || "",
                        description: (null == R ? void 0 : R.description) || "",
                        priceTokens: (null == R ? void 0 : R.priceTokens) || 100,
                        products: B || (null == R ? void 0 : R.productIds) || []
                    }, S === b.ft.DURATION && {
                        duration: (null == R ? void 0 : R.duration) || 1,
                        durationType: (null == R ? void 0 : R.durationType) || b.PG.DAY
                    }), S === b.ft.INSTANT && {
                        quantifiable: (null == R ? void 0 : R.quantifiable) || !1
                    })),
                    Y = (0, i.Z)(U, 2),
                    G = Y[0],
                    H = Y[1],
                    K = (0, h.Dy)((0, h.VT)(h.we, {
                        activationConstraint: {
                            distance: 10
                        }
                    }), (0, h.VT)(h.Lg, {
                        coordinateGetter: v.is
                    })),
                    Q = (0, C.useState)({}),
                    W = (0, i.Z)(Q, 2),
                    ee = W[0],
                    te = W[1],
                    ae = (0, C.useState)(!1),
                    ne = (0, i.Z)(ae, 2),
                    re = ne[0],
                    le = ne[1],
                    ie = (0, C.useState)((null == R ? void 0 : R.file) || (null == R ? void 0 : R.imageId) || null),
                    ce = (0, i.Z)(ie, 2),
                    oe = ce[0],
                    se = ce[1],
                    me = (0, C.useState)(""),
                    ue = (0, i.Z)(me, 2),
                    de = ue[0],
                    we = ue[1],
                    pe = (0, C.useState)(!1),
                    ge = (0, i.Z)(pe, 2),
                    fe = ge[0],
                    be = ge[1],
                    he = (0, C.useRef)(null),
                    ve = (0, C.useState)(!1),
                    Ee = (0, i.Z)(ve, 2),
                    Ne = Ee[0],
                    ye = Ee[1],
                    xe = (0, C.useRef)(null),
                    ke = (0, E.Nr)(de),
                    Ce = (0, C.useState)(!1),
                    Ie = (0, i.Z)(Ce, 2),
                    Te = Ie[0],
                    De = Ie[1],
                    Le = (0, C.useMemo)((function() {
                        return ($ || []).map((function(e) {
                            return e.id
                        }))
                    }), [$]),
                    Xe = (0, C.useMemo)((function() {
                        return 1 === $.length && $[0].productType === b.Pm.AVATAR
                    }), [$]),
                    Ae = (0, C.useMemo)((function() {
                        return $.some((function(e) {
                            return e.productType === b.Pm.AVATAR
                        }))
                    }), [$]),
                    Se = (0, N.Ms)({
                        listingId: R.id
                    }, {
                        skip: !R.id
                    }),
                    Pe = Se.data;
                Se.isFetching;
                (0, C.useEffect)((function() {
                    g(G)
                }), [G]);
                (0, C.useEffect)((function() {
                    return document.addEventListener("mousedown", Fe),
                        function() {
                            document.removeEventListener("mousedown", Fe)
                        }
                }), []), (0, C.useEffect)((function() {
                    var e = function(e) {
                        xe.current && !xe.current.contains(e.target) && ye(!1)
                    };
                    return Ne ? document.addEventListener("mousedown", e) : document.removeEventListener("mousedown", e),
                        function() {
                            document.removeEventListener("mousedown", e)
                        }
                }), [Ne]);
                var Ze = function(e) {
                        var t = e.fileId,
                            a = void 0 === t ? null : t,
                            n = e.fileBlob,
                            l = void 0 === n ? null : n,
                            i = null !== a;
                        return null === a && null === l ? (se(null), void H((function(e) {
                            return F(F({}, e), {}, {
                                file: null,
                                imageId: ""
                            })
                        }))) : i ? (se(a), void H((function(e) {
                            e.file;
                            return F(F({}, (0, r.Z)(e, Z)), {}, {
                                imageId: a
                            })
                        }))) : (se(l), void H((function(e) {
                            e.imageId;
                            return F(F({}, (0, r.Z)(e, O)), {}, {
                                file: l
                            })
                        })))
                    },
                    Oe = function(e) {
                        var t = e.target,
                            a = t.name,
                            n = t.value;
                        H((function(e) {
                            var t = F(F({}, e), {}, (0, l.Z)({}, a, n));
                            return g(t), t
                        })), te(F(F({}, ee), {}, (0, l.Z)({}, a, e.target.checkValidity())))
                    },
                    Je = function() {
                        Ze({
                            fileId: null,
                            fileBlob: null
                        }), H((function(e) {
                            return F(F({}, e), {}, {
                                displayName: "",
                                description: "",
                                imageId: null
                            })
                        }))
                    },
                    Fe = function(e) {
                        he.current && !he.current.contains(e.target) && be(!1)
                    },
                    Re = (0, C.useMemo)((function() {
                        return k && k.filter((function(e) {
                            return !(null != Le && Le.includes(e.id)) && e.productType !== b.Pm.ROLE && ("permanent" === _ || e.productType !== b.Pm.AVATAR) && (!ke || (e.id.toLowerCase().includes(ke.trim().toLowerCase()) || e.displayName.toLowerCase().includes(ke.trim().toLowerCase())))
                        })) || []
                    }), [$, k, ke, Le]);
                return (0, C.useEffect)((function() {
                    if (Xe) {
                        var e = $[0];
                        H((function(t) {
                            return F(F({}, t), {}, {
                                displayName: e.displayName,
                                description: e.description,
                                imageId: e.imageId
                            })
                        })), Ze({
                            fileId: e.imageId
                        })
                    }
                }), [Xe]), C.createElement(C.Fragment, null, A && C.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, C.createElement(w.yK, {
                    loading: !0
                })), !A && C.createElement(w.JX, null, C.createElement(X, {
                    isOpen: Te,
                    onCloseCallback: function() {
                        return De(!1)
                    },
                    title: "Remove Product from Listing"
                }), C.createElement("p", {
                    className: "tw-text-lg tw-font-bold tw-mb-2"
                }, "Add Products"), C.createElement(w.JX, {
                    className: "tw-relative",
                    ref: he
                }, C.createElement("p", {
                    className: "tw-mb-2"
                }, "Choose the products that buyers of this listing gain access to."), C.createElement(w.II, {
                    className: "tw-mb-2",
                    placeholder: "Search products",
                    type: "search",
                    rawInputClassName: "tw-pl-8",
                    value: de,
                    onChange: function(e) {
                        return we(e.target.value)
                    },
                    onFocus: function() {
                        be(!0)
                    },
                    disabled: $.length >= b._1
                }), C.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-5"
                }, "You must choose 1 to ", b._1, " products."), fe && $.length < b._1 && C.createElement("ul", {
                    "aria-label": "Available Products List",
                    className: "tw-bottom-[120px] tw-border-2 tw-border-solid tw-rounded-lg tw-border-button-bg tw-bg-[#07242B] tw-p-5 tw-gap-3 tw-max-h-[400px] tw-h-[400px] tw-overflow-y-auto tw-absolute tw-z-10 tw-w-full tw-top-[105px] sm:tw-top-[80px] tw-min-h-[200px]"
                }, C.createElement("p", {
                    className: "tw-mb-3"
                }, "Available Products"), Re.length ? Re.map((function(e) {
                    return C.createElement("li", {
                        key: e.id,
                        className: "tw-list-none"
                    }, C.createElement(w.X2, {
                        product: e,
                        className: "tw-gap-3 tw-flex-wrap"
                    }, C.createElement(w.pw, {
                        imageId: e.imageId,
                        alt: e.displayName,
                        fallbackSrc: f(),
                        width: 100,
                        fitToCover: !0
                    }), C.createElement(w.JX, {
                        className: "tw-flex-1 tw-overflow-hidden"
                    }, C.createElement(w.X2, {
                        className: "tw-gap-2 tw-items-center tw-mb-1 tw-flex-wrap"
                    }, C.createElement("p", {
                        className: "tw-mb-0 tw-text-highlight tw-font-bold tw-break-words"
                    }, e.displayName), C.createElement(p.DR, {
                        bgColor: "#575757",
                        className: "tw-capitalize"
                    }, e.productType)), C.createElement("p", {
                        className: "tw-mb-0 tw-text-light-grey tw-break-words"
                    }, e.description)), C.createElement(w.zx, {
                        type: "button",
                        containerClasses: "tw-w-full sm:tw-w-[160px] tw-self-center",
                        onClick: function(t) {
                            var a;
                            a = e, Xe && Je(), z((0, y.H_)(a)), H((function(e) {
                                return F(F({}, e), {}, {
                                    products: [].concat((0, n.Z)(e.products), [a.id])
                                })
                            })), be(!1), we("")
                        },
                        disabled: null == e ? void 0 : e.assetDisabled
                    }, "Add")), C.createElement("hr", {
                        className: "tw-bg-[#07242B] tw-font-medium tw-border tw-border-solid"
                    }))
                })) : C.createElement("li", {
                    className: "tw-list-none"
                }, C.createElement("em", null, "No matching products!")))), C.createElement(w.JX, {
                    className: "tw-gap-2 ".concat(0 !== $.length && "tw-mb-5")
                }, C.createElement(h.LB, {
                    sensors: K,
                    collisionDetection: h.pE,
                    onDragEnd: function(e) {
                        var t = e.active,
                            a = e.over;
                        if (a && t.id !== a.id) {
                            var n = $.findIndex((function(e) {
                                    return e.id === t.id
                                })),
                                r = $.findIndex((function(e) {
                                    return e.id === a.id
                                })),
                                l = (0, v.Rp)($, n, r);
                            z((0, y.H8)(l)), H((function(e) {
                                return F(F({}, e), {}, {
                                    products: l.map((function(e) {
                                        return e.id
                                    }))
                                })
                            }))
                        }
                    }
                }, C.createElement(v.Fo, {
                    items: Le,
                    strategy: v.qw
                }, 0 !== $.length && $.map((function(e) {
                    return C.createElement(w.TR, {
                        key: e.id,
                        id: e.id
                    }, C.createElement(P, {
                        product: e,
                        key: e.id,
                        onClick: function() {
                            return function(e) {
                                if (q) {
                                    var t, a = null == j || null === (t = j.products) || void 0 === t ? void 0 : t.some((function(t) {
                                        return t.avatarId === e.avatarId
                                    }));
                                    if ((null == e ? void 0 : e.productType) === b.Pm.AVATAR && a && Pe) return void De(!0)
                                }
                                Xe && Je(), z((0, y.Ds)(e)), H((function(t) {
                                    return F(F({}, t), {}, {
                                        products: t.products.filter((function(t) {
                                            return t !== e.id
                                        }))
                                    })
                                }))
                            }(e)
                        }
                    }))
                }))))), C.createElement("hr", {
                    className: "tw-border tw-border-[#404c58] tw-border-solid tw-mb-5 tw-mt-0"
                }), Xe && C.createElement(w.qX, {
                    type: "custom",
                    color: "#000000",
                    iconColor: "#DADADA",
                    hideIcon: !0,
                    icon: c.sq,
                    className: "tw-mb-5 tw-p-5 tw-border-2 tw-rounded-lg"
                }, "The listing thumbnail, name and description will be inherited from your avatar details. To make changes, head over to the", " ", C.createElement(T.rU, {
                    to: "/home/avatar/".concat(null === (t = $[0]) || void 0 === t ? void 0 : t.avatarId),
                    className: "hover:tw-text-teal-accent"
                }, "avatar page"), "."), C.createElement("p", {
                    className: "tw-text-lg tw-font-bold"
                }, "Listing Details"), C.createElement(w.JX, {
                    className: "tw-gap-5"
                }, C.createElement(w.JX, {
                    className: "md:tw-flex-row tw-gap-5"
                }, C.createElement(w.JX, {
                    className: "tw-gap-5"
                }, C.createElement("button", {
                    type: "button",
                    onClick: function() {
                        Xe || le(!0)
                    },
                    disabled: Xe,
                    className: "tw-bg-transparent tw-border-0 tw-p-0 tw-rounded tw-relative tw-items-center tw-justify-center tw-flex"
                }, !oe && C.createElement(w.zx, {
                    containerClasses: "tw-rounded tw-absolute tw-flex-1"
                }, C.createElement(w.$1, {
                    icon: s.Vm,
                    className: "tw-mr-2"
                }), C.createElement("span", null, "Upload Thumbnail")), C.createElement(w.pw, {
                    imageId: oe,
                    fitToCover: !0,
                    alt: "Subscription Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                }))), C.createElement(w.JX, {
                    className: "tw-gap-5 tw-flex-1 md:tw-justify-between"
                }, C.createElement(w.JX, {
                    className: "tw-gap-2"
                }, C.createElement("label", {
                    htmlFor: "displayName"
                }, "Name"), C.createElement(w.II, {
                    name: "displayName",
                    id: "displayName",
                    type: "text",
                    label: "Name",
                    maxLength: 64,
                    disabled: Xe,
                    value: G.displayName,
                    onChange: Oe
                }), C.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, G.displayName.length, "/64")), C.createElement(w.JX, {
                    className: "tw-gap-2"
                }, C.createElement("label", {
                    htmlFor: "description"
                }, "Description"), C.createElement(w.gx, {
                    inputClassName: "tw-h-[120px]",
                    maxLength: 256,
                    disabled: Xe,
                    id: "description",
                    name: "description",
                    label: "Description",
                    value: G.description,
                    onChange: Oe
                }), C.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, G.description.length, "/256")))), C.createElement(w.JX, {
                    className: "tw-gap-5"
                }, q && C.createElement(w.JX, {
                    className: "tw-gap-2"
                }, C.createElement("label", {
                    htmlFor: "id",
                    className: "tw-flex tw-flex-row"
                }, "Listing ID", C.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1",
                    ref: xe
                }, C.createElement("button", {
                    id: "listingIdTooltip",
                    type: "button",
                    className: "tw-bg-transparent tw-border-none",
                    onClick: function() {
                        return ye(!Ne)
                    },
                    "aria-label": "Listing ID tooltip"
                }, C.createElement(w.$1, {
                    icon: c.sq,
                    className: "tw-text-light-grey"
                })), C.createElement(D.Z, {
                    isOpen: Ne,
                    target: "listingIdTooltip",
                    placement: "right",
                    trigger: "click",
                    innerClassName: "tw-bg-gray-900"
                }, C.createElement("span", {
                    className: "tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50"
                }, "This unique ID can be used for reference and direct integration with prefabs in Unity.")))), C.createElement(w.X2, {
                    className: "tw-gap-2"
                }, C.createElement(w.II, {
                    type: "text",
                    name: "id",
                    id: "id",
                    value: R.id,
                    disabled: !0,
                    className: "tw-flex-1"
                }), C.createElement(w.zx, {
                    type: "button",
                    className: "tw-w-[40px] tw-h-[40px]",
                    onClick: function() {
                        navigator.clipboard.writeText(R.id).then((function() {
                            z((0, d.d)({
                                title: "Copied listing ID",
                                icon: u.f8,
                                message: "Listing ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(e) {
                            var t, a;
                            z((0, d.d)({
                                title: "Failed to copy listing ID",
                                icon: m.eH,
                                message: null !== (t = null === (a = res.error.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== t ? t : "Failed to copy listing ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, C.createElement(w.$1, {
                    icon: o.kZ
                })))), S && S === b.ft.DURATION && C.createElement(w.JX, {
                    className: "tw-max-w-[270px] tw-gap-2"
                }, C.createElement("label", {
                    htmlFor: "duration"
                }, "Duration"), C.createElement(w.JX, {
                    className: "tw-gap-2 xs:tw-flex-row"
                }, C.createElement(w.II, {
                    name: "duration",
                    id: "duration",
                    type: "number",
                    inputmode: "numeric",
                    pattern: "\\d*",
                    label: "Duration",
                    min: b.nD[G.durationType].min,
                    max: b.nD[G.durationType].max,
                    value: G.duration,
                    onChange: Oe,
                    step: "1"
                }), C.createElement(w.Lt, {
                    name: "durationType",
                    options: b.Ir,
                    value: G.durationType,
                    onChange: function(e) {
                        H((function(t) {
                            return F(F({}, t), {}, {
                                durationType: e
                            })
                        }))
                    }
                })), C.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, "Starts immediately after purchasing.")), C.createElement(w.JX, {
                    className: "tw-gap-2"
                }, C.createElement("label", {
                    htmlFor: "priceTokens"
                }, "Price in VRChat Credits"), C.createElement(w.II, {
                    className: "md:tw-max-w-[270px]",
                    name: "priceTokens",
                    id: "priceTokens",
                    type: "number",
                    inputmode: "numeric",
                    pattern: "\\d*",
                    max: S === b.ft.PERMANENT ? b.YC : b._C,
                    min: b.zD,
                    step: "1",
                    label: "Price in VRChat Credits",
                    value: G.priceTokens,
                    onChange: Oe
                }), Ae && C.createElement(w.qX, {
                    type: "warn",
                    hideIcon: !0,
                    slim: !0
                }, C.createElement("div", {
                    className: "tw-flex tw-gap-2 tw-items-center"
                }, C.createElement(w.$1, {
                    icon: c.sq,
                    className: "tw-text-warning"
                }), C.createElement("small", {
                    className: "tw-text-warning",
                    slim: !0
                }, "Avatars priced at ", b.AB, " VRC Credits and above will appear in Avatar marketplace. See the", " ", C.createElement("a", {
                    href: "https://creators.vrchat.com/economy/guidelines/#avatars",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Content Guidelines"), " ", "for how to price your avatar.")))), S && S === b.ft.INSTANT && C.createElement(w.X2, {
                    className: "tw-bg-[#252A30] tw-p-5 tw-rounded-lg tw-mb-5"
                }, C.createElement(w.JX, {
                    className: "tw-flex-1"
                }, C.createElement("p", {
                    className: "tw-mb-1"
                }, "Enable Quantity Purchases"), C.createElement("small", {
                    className: "tw-text-light-grey"
                }, "If enabled, buyers can purchase up to 99 units of this item at once.")), C.createElement(w.X2, {
                    className: "tw-justify-center tw-items-center tw-gap-3"
                }, C.createElement("label", {
                    htmlFor: "useForSubscriberList"
                }, G.quantifiable ? "On" : "Off"), C.createElement(w.K_, {
                    value: "useForSubscriberList",
                    defaultChecked: G.quantifiable,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        H((function(e) {
                            return F(F({}, e), {}, {
                                quantifiable: t
                            })
                        }))
                    }
                })))))), C.createElement(w.m6, {
                    preset: "listing",
                    image: oe,
                    isOpen: re,
                    onClose: function() {
                        return le(!1)
                    },
                    confirmCallback: Ze,
                    cancelCallBack: function() {
                        return le(!1)
                    }
                }))
            };
            R.propTypes = {
                onDataChange: k().func,
                products: k().array,
                productsLoading: k().bool
            };
            const j = R
        },
        80938: (e, t, a) => {
            a.d(t, {
                Z: () => r
            });
            var n = a(67294);
            const r = function() {
                return n.createElement("div", null, n.createElement("p", null, "Publishing this listing will make it available for viewing and purchase, including in any selected store(s)"))
            }
        },
        99878: (e, t, a) => {
            a.d(t, {
                Z: () => d
            });
            var n = a(42138),
                r = a(54546),
                l = a(96985),
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
                        v = (0, r.Z)(h, 2),
                        E = v[0],
                        N = v[1],
                        y = (0, s.useState)(null !== (t = null == g ? void 0 : g.active) && void 0 !== t && t),
                        x = (0, r.Z)(y, 2),
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
                    var L = function(e) {
                        E.includes(e.id) ? N(E.filter((function(t) {
                            return t !== e.id
                        }))) : N([].concat((0, n.Z)(E), [e.id]))
                    };
                    return s.createElement(l.JX, null, s.createElement("h6", {
                        className: "tw-text-lg"
                    }, "Store Availability"), s.createElement("p", {
                        className: "tw-mb-3"
                    }, "Choose the stores where you want to display this listing:"), s.createElement(l.JX, {
                        className: "tw-gap-2 tw-max-h-[217px] tw-overflow-y-auto"
                    }, D && s.createElement(l.X2, {
                        className: "tw-px-5 tw-py-3 tw-bg-grey tw-rounded-lg tw-items-center tw-gap-2"
                    }, s.createElement(l.XZ, {
                        checked: !0,
                        disabled: !0,
                        className: "tw-w-5 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-accent-teal-accent tw-border-[#677079] tw-rounded tw-ring-offset-gray-800"
                    }), s.createElement("div", {
                        className: "tw-w-9 tw-h-9 tw-rounded-lg tw-items-center tw-justify-center tw-flex tw-bg-grey"
                    }, s.createElement(l.pw, {
                        imageId: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png",
                        containerColor: "transparent",
                        width: 36,
                        height: 36,
                        alt: "VRC Logo"
                    })), s.createElement(l.JX, null, s.createElement("p", {
                        className: "tw-font-bold tw-text-teal-accent tw-mb-0"
                    }, "Avatar Marketplace"), s.createElement("small", {
                        className: "tw-mb-0 tw-text-light-grey"
                    }, "All listings that include avatar products are available for purchase in the Avatar Marketplace."))), 0 === T.length && s.createElement("p", {
                        className: "tw-text-light-grey"
                    }, "You have no stores that can be used for this listing."), T.map((function(e) {
                        var t;
                        return s.createElement(l.X2, {
                            key: e.id,
                            onClick: function() {
                                return L(e)
                            },
                            className: "tw-cursor-pointer tw-px-5 tw-py-3 tw-bg-grey tw-rounded-lg tw-items-center tw-gap-2"
                        }, s.createElement(l.XZ, {
                            checked: E.includes(e.id),
                            onChange: function() {
                                return L(e)
                            },
                            className: "tw-w-5 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-accent-teal-accent tw-border-[#677079] tw-rounded tw-ring-offset-gray-800"
                        }), s.createElement(l.pw, {
                            imageId: null === (t = e.storeContext) || void 0 === t ? void 0 : t.imageUrl,
                            alt: "".concat(e.displayName, " thumbnail"),
                            width: 36,
                            fitToCover: !0
                        }), s.createElement(l.JX, null, s.createElement("p", {
                            className: "tw-font-bold tw-text-teal-accent tw-mb-0"
                        }, e.displayName), s.createElement("small", {
                            className: "tw-capitalize tw-mb-0 tw-text-light-grey"
                        }, e.storeType, " Store")))
                    }))), s.createElement("hr", {
                        className: "tw-border-t tw-border-placeholder-text"
                    }), s.createElement("h6", {
                        className: "tw-mb-3 tw-text-lg"
                    }, "Listing Visibility"), s.createElement(l.JX, {
                        className: "tw-gap-3"
                    }, s.createElement(l.X2, {
                        className: "tw-gap-2 tw-cursor-pointer",
                        onClick: function() {
                            return C(!1)
                        }
                    }, s.createElement(l.XZ, {
                        checked: !k,
                        onChange: function() {
                            return C(!1)
                        },
                        className: "tw-m-1 tw-w-4 tw-h-4 tw-bg-button-bg-grey tw-ring-2 tw-ring-[#677079] checked:tw-bg-teal-accent checked:tw-ring-teal-accent checked:tw-ring-offset-2 checked:tw-ring-offset-darker-grey tw-rounded-full tw-appearance-none"
                    }), s.createElement(l.JX, null, s.createElement("p", {
                        className: "tw-mb-0"
                    }, "Save as draft"), s.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "Users cannot see the listing until you publish it."))), s.createElement(l.X2, {
                        className: "tw-gap-2 tw-cursor-pointer",
                        onClick: function() {
                            return C(!0)
                        }
                    }, s.createElement(l.XZ, {
                        checked: k,
                        onChange: function() {
                            return C(!0)
                        },
                        className: "tw-m-1 tw-w-4 tw-h-4 tw-bg-button-bg-grey tw-ring-2 tw-ring-[#677079] checked:tw-bg-teal-accent checked:tw-ring-teal-accent checked:tw-ring-offset-2 checked:tw-ring-offset-darker-grey tw-rounded-full tw-appearance-none"
                    }), s.createElement(l.JX, null, s.createElement("p", {
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
//# sourceMappingURL=274918cd6fab415d75feb1f8a9f06f17bbec4ce781dbb8ed998875f88e334767.js.map