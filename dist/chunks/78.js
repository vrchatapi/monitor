"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [78], {
        34912(e, t) {
            var a = "arrow-up-right-from-square",
                n = ["external-link"],
                r = "f08e",
                l = "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z";
            t.mw = {
                prefix: "fas",
                iconName: a,
                icon: [512, 512, n, r, l]
            }, t.Ju = t.mw
        },
        88213(e, t, a) {
            var n = a(75976);
            t.mw = {
                prefix: n.prefix,
                iconName: n.iconName,
                icon: [n.width, n.height, n.aliases, n.unicode, n.svgPathData]
            }, t.yY = t.mw, n.prefix, n.iconName, n.width, n.height, n.aliases, n.unicode, n.svgPathData, n.aliases
        },
        24475(e, t, a) {
            a.d(t, {
                A: () => _
            });
            var n = a(66911),
                r = a(80045),
                l = a(64467),
                i = a(82544),
                c = a(6913),
                o = a(67256),
                s = a(71088),
                m = a(34496),
                d = a(42217),
                u = a(65950),
                w = a(15033),
                p = a(24751),
                f = a(75171),
                g = a.n(f),
                b = a(31069),
                h = a(58451),
                v = a(43627),
                E = a(194),
                N = a(72784),
                y = a(70650),
                x = a(5556),
                k = a.n(x),
                C = a(96540),
                I = a(6376),
                A = a(84976),
                T = a(65279),
                L = a(82628);
            const S = function(e) {
                var t = e.onCloseCallback,
                    a = e.isOpen,
                    n = e.title,
                    r = void 0 === n ? "" : n;
                return C.createElement(w.aF, {
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
                }, C.createElement(w.M2, {
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
                }, C.createElement(w.$n, {
                    className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-button-bg-grey tw-text-white",
                    onClick: t
                }, "Cancel")), C.createElement("div", {
                    className: "tw-w-1/2"
                }, C.createElement(A.N_, {
                    to: "https://vrch.at/marketplace-help",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, C.createElement(w.$n, {
                    className: "tw-rounded-md tw-h-9 tw-border-0 tw-bg-button-bgtw-text-highlight"
                }, "Contact Support"))))))
            };
            var D = a(38275),
                O = a(3569);
            const M = function(e) {
                var t = e.product,
                    a = e.onClick,
                    n = void 0 === a ? function() {} : a,
                    r = (0, C.useState)(!1),
                    l = (0, i.A)(r, 2),
                    c = l[0],
                    o = l[1],
                    s = (0, C.useRef)(null);
                return (0, C.useEffect)(function() {
                    var e = function(e) {
                        s.current && !s.current.contains(e.target) && o(!1)
                    };
                    return c ? document.addEventListener("mousedown", e) : document.removeEventListener("mousedown", e),
                        function() {
                            document.removeEventListener("mousedown", e)
                        }
                }, [c]), C.createElement(w.fI, {
                    key: t.id,
                    className: "tw-px-5 tw-py-3 tw-gap-5 tw-items-center tw-bg-grey tw-rounded-lg tw-select-none"
                }, C.createElement(w.fI, {
                    className: "tw-items-center tw-gap-2 tw-flex-1"
                }, C.createElement(w.Oo, {
                    className: "tw-shrink-0",
                    imageId: null == t ? void 0 : t.imageId,
                    alt: null == t ? void 0 : t.displayName,
                    fallbackSrc: g(),
                    width: 36
                }), C.createElement("p", {
                    className: "tw-text-white tw-font-bold tw-mb-0 tw-grow"
                }, t.displayName), (null == t ? void 0 : t.assetDisabled) && C.createElement("p", {
                    className: "tw-text-orange tw-shrink-0 tw-mb-0",
                    "aria-label": "".concat(t.displayName, " is disabled")
                }, C.createElement(w.M2, {
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
                }, C.createElement(w.M2, {
                    icon: O.faCircleInfo,
                    className: "tw-text-placeholder-text"
                })), C.createElement(T.A, {
                    isOpen: c,
                    target: "productStatusTooltip-".concat(t.id),
                    placement: "top",
                    toggle: function() {
                        return o(!c)
                    },
                    trigger: "click",
                    innerClassName: "tw-bg-black"
                }, "This product is currently unavailable due to an issue. Go to the product page to view more details and how to address the problem."))), C.createElement(w.$n, {
                    type: "button",
                    onClick: function() {
                        n(t)
                    },
                    neutral: !0,
                    className: "tw-w-9 tw-h-9"
                }, C.createElement(w.M2, {
                    icon: D.yL
                })))
            };
            var P = ["file"],
                R = ["imageId"];

            function j(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), a.push.apply(a, n)
                }
                return a
            }

            function F(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(a), !0).forEach(function(t) {
                        (0, l.A)(e, t, a[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : j(Object(a)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    })
                }
                return e
            }
            var V = function(e) {
                var t, a = e.onDataChange,
                    f = void 0 === a ? function() {} : a,
                    x = e.products,
                    k = void 0 === x ? [] : x,
                    L = e.productsLoading,
                    D = void 0 !== L && L,
                    O = e.listingType,
                    j = e.editedListing,
                    V = void 0 === j ? {} : j,
                    _ = e.originalListing,
                    W = e.isEditing,
                    B = void 0 !== W && W,
                    q = (0, I.wA)(),
                    z = (0, I.d4)(function(e) {
                        return e.listingFlow
                    }),
                    U = z.selectedListingType,
                    $ = z.selectedProducts,
                    G = z.productIds,
                    Y = (0, C.useState)(F(F({
                        displayName: (null == V ? void 0 : V.displayName) || "",
                        description: (null == V ? void 0 : V.description) || "",
                        priceTokens: (null == V ? void 0 : V.priceTokens) || 100,
                        products: G || (null == V ? void 0 : V.productIds) || []
                    }, O === b.p_.DURATION && {
                        duration: (null == V ? void 0 : V.duration) || 1,
                        durationType: (null == V ? void 0 : V.durationType) || b.yT.DAY
                    }), O === b.p_.INSTANT && {
                        quantifiable: (null == V ? void 0 : V.quantifiable) || !1
                    })),
                    X = (0, i.A)(Y, 2),
                    J = X[0],
                    H = X[1],
                    Q = (0, h.FR)((0, h.MS)(h.AN, {
                        activationConstraint: {
                            distance: 10
                        }
                    }), (0, h.MS)(h.uN, {
                        coordinateGetter: v.JR
                    })),
                    K = (0, C.useState)({}),
                    Z = (0, i.A)(K, 2),
                    ee = Z[0],
                    te = Z[1],
                    ae = (0, C.useState)(!1),
                    ne = (0, i.A)(ae, 2),
                    re = ne[0],
                    le = ne[1],
                    ie = (0, C.useState)((null == V ? void 0 : V.file) || (null == V ? void 0 : V.imageId) || null),
                    ce = (0, i.A)(ie, 2),
                    oe = ce[0],
                    se = ce[1],
                    me = (0, C.useState)(""),
                    de = (0, i.A)(me, 2),
                    ue = de[0],
                    we = de[1],
                    pe = (0, C.useState)(!1),
                    fe = (0, i.A)(pe, 2),
                    ge = fe[0],
                    be = fe[1],
                    he = (0, C.useRef)(null),
                    ve = (0, C.useState)(!1),
                    Ee = (0, i.A)(ve, 2),
                    Ne = Ee[0],
                    ye = Ee[1],
                    xe = (0, C.useRef)(null),
                    ke = (0, E.d7)(ue),
                    Ce = (0, C.useState)(!1),
                    Ie = (0, i.A)(Ce, 2),
                    Ae = Ie[0],
                    Te = Ie[1],
                    Le = (0, C.useMemo)(function() {
                        return ($ || []).map(function(e) {
                            return e.id
                        })
                    }, [$]),
                    Se = (0, C.useMemo)(function() {
                        return 1 === $.length && $[0].productType === b.Wd.AVATAR
                    }, [$]),
                    De = (0, C.useMemo)(function() {
                        return $.some(function(e) {
                            return e.productType === b.Wd.AVATAR
                        })
                    }, [$]),
                    Oe = (0, N.EG)({
                        listingId: V.id
                    }, {
                        skip: !V.id
                    }),
                    Me = Oe.data;
                Oe.isFetching;
                (0, C.useEffect)(function() {
                    f(J)
                }, [J]);
                (0, C.useEffect)(function() {
                    return document.addEventListener("mousedown", Fe),
                        function() {
                            document.removeEventListener("mousedown", Fe)
                        }
                }, []), (0, C.useEffect)(function() {
                    var e = function(e) {
                        xe.current && !xe.current.contains(e.target) && ye(!1)
                    };
                    return Ne ? document.addEventListener("mousedown", e) : document.removeEventListener("mousedown", e),
                        function() {
                            document.removeEventListener("mousedown", e)
                        }
                }, [Ne]);
                var Pe = function(e) {
                        var t = e.fileId,
                            a = void 0 === t ? null : t,
                            n = e.fileBlob,
                            l = void 0 === n ? null : n,
                            i = null !== a;
                        return null === a && null === l ? (se(null), void H(function(e) {
                            return F(F({}, e), {}, {
                                file: null,
                                imageId: ""
                            })
                        })) : i ? (se(a), void H(function(e) {
                            e.file;
                            return F(F({}, (0, r.A)(e, P)), {}, {
                                imageId: a
                            })
                        })) : (se(l), void H(function(e) {
                            e.imageId;
                            return F(F({}, (0, r.A)(e, R)), {}, {
                                file: l
                            })
                        }))
                    },
                    Re = function(e) {
                        var t = e.target,
                            a = t.name,
                            n = t.value;
                        H(function(e) {
                            var t = F(F({}, e), {}, (0, l.A)({}, a, n));
                            return f(t), t
                        }), te(F(F({}, ee), {}, (0, l.A)({}, a, e.target.checkValidity())))
                    },
                    je = function() {
                        Pe({
                            fileId: null,
                            fileBlob: null
                        }), H(function(e) {
                            return F(F({}, e), {}, {
                                displayName: "",
                                description: "",
                                imageId: null
                            })
                        })
                    },
                    Fe = function(e) {
                        he.current && !he.current.contains(e.target) && be(!1)
                    },
                    Ve = (0, C.useMemo)(function() {
                        return k && k.filter(function(e) {
                            return !(null != Le && Le.includes(e.id)) && e.productType !== b.Wd.ROLE && ("permanent" === U || e.productType !== b.Wd.AVATAR) && (!ke || (e.id.toLowerCase().includes(ke.trim().toLowerCase()) || e.displayName.toLowerCase().includes(ke.trim().toLowerCase())))
                        }) || []
                    }, [$, k, ke, Le]);
                return (0, C.useEffect)(function() {
                    if (Se) {
                        var e = $[0];
                        H(function(t) {
                            return F(F({}, t), {}, {
                                displayName: e.displayName,
                                description: e.description,
                                imageId: e.imageId
                            })
                        }), Pe({
                            fileId: e.imageId
                        })
                    }
                }, [Se]), C.createElement(C.Fragment, null, D && C.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, C.createElement(w.DF, {
                    loading: !0
                })), !D && C.createElement(w.fv, null, C.createElement(S, {
                    isOpen: Ae,
                    onCloseCallback: function() {
                        return Te(!1)
                    },
                    title: "Remove Product from Listing"
                }), C.createElement("p", {
                    className: "tw-text-lg tw-font-bold tw-mb-2"
                }, "Add Products"), C.createElement(w.fv, {
                    className: "tw-relative",
                    ref: he
                }, C.createElement("p", {
                    className: "tw-mb-2"
                }, "Choose the products that buyers of this listing gain access to."), C.createElement(w.pd, {
                    className: "tw-mb-2",
                    placeholder: "Search products",
                    type: "search",
                    rawInputClassName: "tw-pl-8",
                    value: ue,
                    onChange: function(e) {
                        return we(e.target.value)
                    },
                    onFocus: function() {
                        be(!0)
                    },
                    disabled: $.length >= b.B8
                }), C.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-5"
                }, "You must choose 1 to ", b.B8, " products."), ge && $.length < b.B8 && C.createElement("ul", {
                    "aria-label": "Available Products List",
                    className: "tw-bottom-[120px] tw-border-2 tw-border-solid tw-rounded-lg tw-border-button-bg tw-bg-[#07242B] tw-p-5 tw-gap-3 tw-max-h-[400px] tw-h-[400px] tw-overflow-y-auto tw-absolute tw-z-10 tw-w-full tw-top-[105px] sm:tw-top-[80px] tw-min-h-[200px]"
                }, C.createElement("p", {
                    className: "tw-mb-3"
                }, "Available Products"), Ve.length ? Ve.map(function(e) {
                    return C.createElement("li", {
                        key: e.id,
                        className: "tw-list-none"
                    }, C.createElement(w.fI, {
                        product: e,
                        className: "tw-gap-3 tw-flex-wrap"
                    }, C.createElement(w.Oo, {
                        imageId: e.imageId,
                        alt: e.displayName,
                        fallbackSrc: g(),
                        width: 100,
                        fitToCover: !0
                    }), C.createElement(w.fv, {
                        className: "tw-flex-1 tw-overflow-hidden"
                    }, C.createElement(w.fI, {
                        className: "tw-gap-2 tw-items-center tw-mb-1 tw-flex-wrap"
                    }, C.createElement("p", {
                        className: "tw-mb-0 tw-text-highlight tw-font-bold tw-break-words"
                    }, e.displayName), C.createElement(p.ab, {
                        bgColor: "#575757",
                        className: "tw-capitalize"
                    }, e.productType)), C.createElement("p", {
                        className: "tw-mb-0 tw-text-light-grey tw-break-words"
                    }, e.description)), C.createElement(w.$n, {
                        type: "button",
                        containerClasses: "tw-w-full sm:tw-w-[160px] tw-self-center",
                        onClick: function(t) {
                            var a;
                            a = e, Se && je(), q((0, y.WI)(a)), H(function(e) {
                                return F(F({}, e), {}, {
                                    products: [].concat((0, n.A)(e.products), [a.id])
                                })
                            }), be(!1), we("")
                        },
                        disabled: null == e ? void 0 : e.assetDisabled
                    }, "Add")), C.createElement("hr", {
                        className: "tw-bg-[#07242B] tw-font-medium tw-border tw-border-solid"
                    }))
                }) : C.createElement("li", {
                    className: "tw-list-none"
                }, C.createElement("em", null, "No matching products!")))), C.createElement(w.fv, {
                    className: "tw-gap-2 ".concat(0 !== $.length && "tw-mb-5")
                }, C.createElement(h.Mp, {
                    sensors: Q,
                    collisionDetection: h.fp,
                    onDragEnd: function(e) {
                        var t = e.active,
                            a = e.over;
                        if (a && t.id !== a.id) {
                            var n = $.findIndex(function(e) {
                                    return e.id === t.id
                                }),
                                r = $.findIndex(function(e) {
                                    return e.id === a.id
                                }),
                                l = (0, v.be)($, n, r);
                            q((0, y.R)(l)), H(function(e) {
                                return F(F({}, e), {}, {
                                    products: l.map(function(e) {
                                        return e.id
                                    })
                                })
                            })
                        }
                    }
                }, C.createElement(v.gB, {
                    items: Le,
                    strategy: v._G
                }, 0 !== $.length && $.map(function(e) {
                    return C.createElement(w.Uq, {
                        key: e.id,
                        id: e.id
                    }, C.createElement(M, {
                        product: e,
                        key: e.id,
                        onClick: function() {
                            return function(e) {
                                if (B) {
                                    var t, a = null == _ || null === (t = _.products) || void 0 === t ? void 0 : t.some(function(t) {
                                        return t.avatarId === e.avatarId
                                    });
                                    if ((null == e ? void 0 : e.productType) === b.Wd.AVATAR && a && Me) return void Te(!0)
                                }
                                Se && je(), q((0, y.Py)(e)), H(function(t) {
                                    return F(F({}, t), {}, {
                                        products: t.products.filter(function(t) {
                                            return t !== e.id
                                        })
                                    })
                                })
                            }(e)
                        }
                    }))
                })))), C.createElement("hr", {
                    className: "tw-border tw-border-[#404c58] tw-border-solid tw-mb-5 tw-mt-0"
                }), Se && C.createElement(w.$T, {
                    type: "custom",
                    color: "#000000",
                    iconColor: "#DADADA",
                    hideIcon: !0,
                    icon: c.iW,
                    className: "tw-mb-5 tw-p-5 tw-border-2 tw-rounded-lg"
                }, "The listing thumbnail, name and description will be inherited from your avatar details. To make changes, head over to the", " ", C.createElement(A.N_, {
                    to: "/home/avatar/".concat(null === (t = $[0]) || void 0 === t ? void 0 : t.avatarId),
                    className: "hover:tw-text-teal-accent"
                }, "avatar page"), "."), C.createElement("p", {
                    className: "tw-text-lg tw-font-bold"
                }, "Listing Details"), C.createElement(w.fv, {
                    className: "tw-gap-5"
                }, C.createElement(w.fv, {
                    className: "md:tw-flex-row tw-gap-5"
                }, C.createElement(w.fv, {
                    className: "tw-gap-5"
                }, C.createElement("button", {
                    type: "button",
                    onClick: function() {
                        Se || le(!0)
                    },
                    disabled: Se,
                    className: "tw-bg-transparent tw-border-0 tw-p-0 tw-rounded tw-relative tw-items-center tw-justify-center tw-flex"
                }, !oe && C.createElement(w.$n, {
                    containerClasses: "tw-rounded tw-absolute tw-flex-1"
                }, C.createElement(w.M2, {
                    icon: s.jb,
                    className: "tw-mr-2"
                }), C.createElement("span", null, "Upload Thumbnail")), C.createElement(w.Oo, {
                    imageId: oe,
                    fitToCover: !0,
                    alt: "Subscription Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                }))), C.createElement(w.fv, {
                    className: "tw-gap-5 tw-flex-1 md:tw-justify-between"
                }, C.createElement(w.fv, {
                    className: "tw-gap-2"
                }, C.createElement("label", {
                    htmlFor: "displayName"
                }, "Name"), C.createElement(w.pd, {
                    name: "displayName",
                    id: "displayName",
                    type: "text",
                    label: "Name",
                    maxLength: 64,
                    disabled: Se,
                    value: J.displayName,
                    onChange: Re
                }), C.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, J.displayName.length, "/64")), C.createElement(w.fv, {
                    className: "tw-gap-2"
                }, C.createElement("label", {
                    htmlFor: "description"
                }, "Description"), C.createElement(w.TM, {
                    inputClassName: "tw-h-[120px]",
                    maxLength: 256,
                    disabled: Se,
                    id: "description",
                    name: "description",
                    label: "Description",
                    value: J.description,
                    onChange: Re
                }), C.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, J.description.length, "/256")))), C.createElement(w.fv, {
                    className: "tw-gap-5"
                }, B && C.createElement(w.fv, {
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
                }, C.createElement(w.M2, {
                    icon: c.iW,
                    className: "tw-text-light-grey"
                })), C.createElement(T.A, {
                    isOpen: Ne,
                    target: "listingIdTooltip",
                    placement: "right",
                    trigger: "click",
                    innerClassName: "tw-bg-gray-900"
                }, C.createElement("span", {
                    className: "tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50"
                }, "This unique ID can be used for reference and direct integration with prefabs in Unity.")))), C.createElement(w.fI, {
                    className: "tw-gap-2"
                }, C.createElement(w.pd, {
                    type: "text",
                    name: "id",
                    id: "id",
                    value: V.id,
                    disabled: !0,
                    className: "tw-flex-1"
                }), C.createElement(w.$n, {
                    type: "button",
                    className: "tw-w-[40px] tw-h-[40px]",
                    onClick: function() {
                        navigator.clipboard.writeText(V.id).then(function() {
                            q((0, u.X)({
                                title: "Copied listing ID",
                                icon: d.SG,
                                message: "Listing ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        }).catch(function(e) {
                            var t, a;
                            q((0, u.X)({
                                title: "Failed to copy listing ID",
                                icon: m.zp,
                                message: null !== (t = null === (a = res.error.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== t ? t : "Failed to copy listing ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        })
                    }
                }, C.createElement(w.M2, {
                    icon: o.jP
                })))), O && O === b.p_.DURATION && C.createElement(w.fv, {
                    className: "tw-max-w-[270px] tw-gap-2"
                }, C.createElement("label", {
                    htmlFor: "duration"
                }, "Duration"), C.createElement(w.fv, {
                    className: "tw-gap-2 xs:tw-flex-row"
                }, C.createElement(w.pd, {
                    name: "duration",
                    id: "duration",
                    type: "number",
                    inputmode: "numeric",
                    pattern: "\\d*",
                    label: "Duration",
                    min: b.IM[J.durationType].min,
                    max: b.IM[J.durationType].max,
                    value: J.duration,
                    onChange: Re,
                    step: "1"
                }), C.createElement(w.ms, {
                    name: "durationType",
                    options: b.Xz,
                    value: J.durationType,
                    onChange: function(e) {
                        H(function(t) {
                            return F(F({}, t), {}, {
                                durationType: e
                            })
                        })
                    }
                })), C.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, "Starts immediately after purchasing.")), C.createElement(w.fv, {
                    className: "tw-gap-2"
                }, C.createElement("label", {
                    htmlFor: "priceTokens"
                }, "Price in VRChat Credits"), C.createElement(w.pd, {
                    className: "md:tw-max-w-[270px]",
                    name: "priceTokens",
                    id: "priceTokens",
                    type: "number",
                    inputmode: "numeric",
                    pattern: "\\d*",
                    max: O === b.p_.PERMANENT ? b.gw : b.Hd,
                    min: b.pb,
                    step: "1",
                    label: "Price in VRChat Credits",
                    value: J.priceTokens,
                    onChange: Re
                }), De && C.createElement(w.$T, {
                    type: "warn",
                    hideIcon: !0,
                    slim: !0
                }, C.createElement("div", {
                    className: "tw-flex tw-gap-2 tw-items-center"
                }, C.createElement(w.M2, {
                    icon: c.iW,
                    className: "tw-text-warning"
                }), C.createElement("small", {
                    className: "tw-text-warning",
                    slim: !0
                }, "Avatars priced at ", b.Dl, " VRC Credits and above will appear in Avatar marketplace. See the", " ", C.createElement("a", {
                    href: "https://creators.vrchat.com/economy/guidelines/#avatars",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Content Guidelines"), " ", "for how to price your avatar.")))), O && O === b.p_.INSTANT && C.createElement(w.fI, {
                    className: "tw-bg-[#252A30] tw-p-5 tw-rounded-lg tw-mb-5"
                }, C.createElement(w.fv, {
                    className: "tw-flex-1"
                }, C.createElement("p", {
                    className: "tw-mb-1"
                }, "Enable Quantity Purchases"), C.createElement("small", {
                    className: "tw-text-light-grey"
                }, "If enabled, buyers can purchase up to 99 units of this item at once.")), C.createElement(w.fI, {
                    className: "tw-justify-center tw-items-center tw-gap-3"
                }, C.createElement("label", {
                    htmlFor: "useForSubscriberList"
                }, J.quantifiable ? "On" : "Off"), C.createElement(w.UL, {
                    value: "useForSubscriberList",
                    defaultChecked: J.quantifiable,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        H(function(e) {
                            return F(F({}, e), {}, {
                                quantifiable: t
                            })
                        })
                    }
                })))))), C.createElement(w.L0, {
                    preset: "listing",
                    image: oe,
                    isOpen: re,
                    onClose: function() {
                        return le(!1)
                    },
                    confirmCallback: Pe,
                    cancelCallBack: function() {
                        return le(!1)
                    }
                }))
            };
            V.propTypes = {
                onDataChange: k().func,
                products: k().array,
                productsLoading: k().bool
            };
            const _ = V
        },
        69886(e, t, a) {
            a.d(t, {
                A: () => r
            });
            var n = a(96540);
            const r = function() {
                return n.createElement("div", null, n.createElement("p", null, "Publishing this listing will make it available for viewing and purchase, including in any selected store(s)"))
            }
        },
        15322(e, t, a) {
            a.d(t, {
                A: () => u
            });
            var n = a(66911),
                r = a(82544),
                l = a(15033),
                i = a(31069),
                c = a(5556),
                o = a.n(c),
                s = a(96540),
                m = a(6376),
                d = function(e) {
                    var t, a = e.onDataChange,
                        c = void 0 === a ? function() {} : a,
                        o = e.stores,
                        d = void 0 === o ? [] : o,
                        u = e.activeStore,
                        w = void 0 === u ? null : u,
                        p = e.activeListing,
                        f = void 0 === p ? null : p,
                        g = e.isEditing,
                        b = void 0 !== g && g,
                        h = (0, s.useState)([]),
                        v = (0, r.A)(h, 2),
                        E = v[0],
                        N = v[1],
                        y = (0, s.useState)(null !== (t = null == f ? void 0 : f.active) && void 0 !== t && t),
                        x = (0, r.A)(y, 2),
                        k = x[0],
                        C = x[1],
                        I = (0, m.d4)(function(e) {
                            return e.listingFlow
                        }).selectedProducts,
                        A = d.filter(function(e) {
                            return "world" === e.storeType
                        }),
                        T = (0, s.useMemo)(function() {
                            return I.some(function(e) {
                                return e.productType === i.Wd.AVATAR
                            })
                        }, [I]);
                    (0, s.useEffect)(function() {
                        c({
                            storeIds: E,
                            active: k
                        })
                    }, [E, k]), (0, s.useEffect)(function() {
                        null != f && f.storeIds && N(f.storeIds), w && !E.includes(w.id) && N([].concat((0, n.A)(E), [w.id]))
                    }, []);
                    var L = function(e) {
                        E.includes(e.id) ? N(E.filter(function(t) {
                            return t !== e.id
                        })) : N([].concat((0, n.A)(E), [e.id]))
                    };
                    return s.createElement(l.fv, null, s.createElement("h6", {
                        className: "tw-text-lg"
                    }, "Store Availability"), s.createElement("p", {
                        className: "tw-mb-3"
                    }, "Choose the stores where you want to display this listing:"), s.createElement(l.fv, {
                        className: "tw-gap-2 tw-max-h-[217px] tw-overflow-y-auto"
                    }, T && s.createElement(l.fI, {
                        className: "tw-px-5 tw-py-3 tw-bg-grey tw-rounded-lg tw-items-center tw-gap-2"
                    }, s.createElement(l.Sc, {
                        checked: !0,
                        disabled: !0,
                        className: "tw-w-5 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-accent-teal-accent tw-border-[#677079] tw-rounded tw-ring-offset-gray-800"
                    }), s.createElement("div", {
                        className: "tw-w-9 tw-h-9 tw-rounded-lg tw-items-center tw-justify-center tw-flex tw-bg-grey"
                    }, s.createElement(l.Oo, {
                        imageId: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png",
                        containerColor: "transparent",
                        width: 36,
                        height: 36,
                        alt: "VRC Logo"
                    })), s.createElement(l.fv, null, s.createElement("p", {
                        className: "tw-font-bold tw-text-teal-accent tw-mb-0"
                    }, "Avatar Marketplace"), s.createElement("small", {
                        className: "tw-mb-0 tw-text-light-grey"
                    }, "All listings that include avatar products are available for purchase in the Avatar Marketplace."))), 0 === A.length && s.createElement("p", {
                        className: "tw-text-light-grey"
                    }, "You have no stores that can be used for this listing."), A.map(function(e) {
                        var t;
                        return s.createElement(l.fI, {
                            key: e.id,
                            onClick: function() {
                                return L(e)
                            },
                            className: "tw-cursor-pointer tw-px-5 tw-py-3 tw-bg-grey tw-rounded-lg tw-items-center tw-gap-2"
                        }, s.createElement(l.Sc, {
                            checked: E.includes(e.id),
                            onChange: function() {
                                return L(e)
                            },
                            className: "tw-w-5 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-accent-teal-accent tw-border-[#677079] tw-rounded tw-ring-offset-gray-800"
                        }), s.createElement(l.Oo, {
                            imageId: null === (t = e.storeContext) || void 0 === t ? void 0 : t.imageUrl,
                            alt: "".concat(e.displayName, " thumbnail"),
                            width: 36,
                            fitToCover: !0
                        }), s.createElement(l.fv, null, s.createElement("p", {
                            className: "tw-font-bold tw-text-teal-accent tw-mb-0"
                        }, e.displayName), s.createElement("small", {
                            className: "tw-capitalize tw-mb-0 tw-text-light-grey"
                        }, e.storeType, " Store")))
                    })), s.createElement("hr", {
                        className: "tw-border-t tw-border-placeholder-text"
                    }), s.createElement("h6", {
                        className: "tw-mb-3 tw-text-lg"
                    }, "Listing Visibility"), s.createElement(l.fv, {
                        className: "tw-gap-3"
                    }, s.createElement(l.fI, {
                        className: "tw-gap-2 tw-cursor-pointer",
                        onClick: function() {
                            return C(!1)
                        }
                    }, s.createElement(l.Sc, {
                        checked: !k,
                        onChange: function() {
                            return C(!1)
                        },
                        className: "tw-m-1 tw-w-4 tw-h-4 tw-bg-button-bg-grey tw-ring-2 tw-ring-[#677079] checked:tw-bg-teal-accent checked:tw-ring-teal-accent checked:tw-ring-offset-2 checked:tw-ring-offset-darker-grey tw-rounded-full tw-appearance-none"
                    }), s.createElement(l.fv, null, s.createElement("p", {
                        className: "tw-mb-0"
                    }, "Save as draft"), s.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "Users cannot see the listing until you publish it."))), s.createElement(l.fI, {
                        className: "tw-gap-2 tw-cursor-pointer",
                        onClick: function() {
                            return C(!0)
                        }
                    }, s.createElement(l.Sc, {
                        checked: k,
                        onChange: function() {
                            return C(!0)
                        },
                        className: "tw-m-1 tw-w-4 tw-h-4 tw-bg-button-bg-grey tw-ring-2 tw-ring-[#677079] checked:tw-bg-teal-accent checked:tw-ring-teal-accent checked:tw-ring-offset-2 checked:tw-ring-offset-darker-grey tw-rounded-full tw-appearance-none"
                    }), s.createElement(l.fv, null, s.createElement("p", {
                        className: "tw-mb-0"
                    }, b ? "Save" : "Create", " and publish in the selected stores"), s.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "The listing will be immediately visible and available for purchase in active stores.")))))
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
//# sourceMappingURL=48035eb47feec990ce646b89f49a0722e93251c205c13ea5645e9441b04c263f.js.map