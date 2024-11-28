"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8303], {
        9401: (e, t, n) => {
            n.d(t, {
                Z: () => Z
            });
            var a = n(42138),
                r = n(45987),
                l = n(4942),
                c = n(54546),
                i = n(2909),
                o = n(82414),
                s = n(78076),
                m = n(42619),
                u = n(76553),
                d = n(6811),
                w = n(64258),
                p = n(14411),
                g = n(98185),
                f = n(67263),
                b = n(95896),
                h = n(12752),
                E = n(45697),
                y = n.n(E),
                v = n(67294),
                N = n(32981),
                x = ["file", "imageId"],
                C = ["file"],
                k = ["imageId"];

            function I(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function X(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(Object(n), !0).forEach((function(t) {
                        (0, l.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var T = function(e) {
                var t = e.onDataChange,
                    n = void 0 === t ? function() {} : t,
                    E = e.products,
                    y = void 0 === E ? [] : E,
                    I = e.productsLoading,
                    T = void 0 !== I && I,
                    Z = e.listingType,
                    D = e.currentListing,
                    J = void 0 === D ? {} : D,
                    O = e.isEditing,
                    L = void 0 !== O && O,
                    S = (0, N.I0)(),
                    j = (0, v.useState)(X({
                        displayName: (null == J ? void 0 : J.displayName) || "",
                        description: (null == J ? void 0 : J.description) || "",
                        priceTokens: (null == J ? void 0 : J.priceTokens) || 100,
                        products: (null == J ? void 0 : J.products) || []
                    }, Z === b.ft.DURATION && {
                        duration: (null == J ? void 0 : J.duration) || 1,
                        durationType: (null == J ? void 0 : J.durationType) || b.PG.DAY
                    })),
                    P = (0, c.Z)(j, 2),
                    F = P[0],
                    A = P[1],
                    z = (0, v.useState)({}),
                    U = (0, c.Z)(z, 2),
                    R = U[0],
                    V = U[1],
                    $ = (0, v.useMemo)((function() {
                        return T || !J.products ? [] : y.filter((function(e) {
                            return J.products.includes(e.id)
                        }))
                    }), [J.products, T]),
                    _ = (0, v.useState)(!1),
                    B = (0, c.Z)(_, 2),
                    Y = B[0],
                    q = B[1],
                    M = (0, v.useState)((null == J ? void 0 : J.file) || (null == J ? void 0 : J.imageId) || null),
                    G = (0, c.Z)(M, 2),
                    H = G[0],
                    K = G[1],
                    Q = v.useState(""),
                    W = (0, c.Z)(Q, 2),
                    ee = W[0],
                    te = W[1],
                    ne = v.useState([]),
                    ae = (0, c.Z)(ne, 2),
                    re = ae[0],
                    le = ae[1],
                    ce = v.useState(!1),
                    ie = (0, c.Z)(ce, 2),
                    oe = ie[0],
                    se = ie[1],
                    me = (0, v.useRef)(null),
                    ue = (0, h.Nr)(ee);
                (0, v.useEffect)((function() {
                    n(F)
                }), [F]), (0, v.useEffect)((function() {
                    le($)
                }), [$]);
                (0, v.useEffect)((function() {
                    return document.addEventListener("mousedown", we),
                        function() {
                            document.removeEventListener("mousedown", we)
                        }
                }), []);
                var de = function(e) {
                        var t = e.target,
                            n = t.name,
                            a = t.value;
                        A((function(e) {
                            return X(X({}, e), {}, (0, l.Z)({}, n, a))
                        })), V(X(X({}, R), {}, (0, l.Z)({}, n, e.target.checkValidity())))
                    },
                    we = function(e) {
                        me.current && !me.current.contains(e.target) && se(!1)
                    },
                    pe = v.useMemo((function() {
                        if (!y) return [];
                        var e = re.map((function(e) {
                            return e.id
                        }));
                        return y.filter((function(t) {
                            return !(null != e && e.includes(t.id)) && t.productType !== b.Pm.ROLE && (!ue || (t.id.toLowerCase().includes(ue.trim().toLowerCase()) || t.displayName.toLowerCase().includes(ue.trim().toLowerCase())))
                        })) || []
                    }), [re, y, ue]);
                return v.createElement(v.Fragment, null, T && v.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, v.createElement(g.Z, {
                    loading: !0
                })), !T && v.createElement(p.JX, null, v.createElement("p", {
                    className: "tw-text-lg tw-font-bold tw-mb-2"
                }, "Add Products"), v.createElement(p.JX, {
                    className: "tw-relative",
                    ref: me
                }, v.createElement("p", {
                    className: "tw-mb-2"
                }, "Choose the products that buyers of this listing gain access to."), v.createElement(p.II, {
                    className: "tw-mb-2",
                    value: ee,
                    onChange: function(e) {
                        return te(e.target.value)
                    },
                    onFocus: function() {
                        se(!0)
                    },
                    disabled: re.length >= b._1
                }), v.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-5"
                }, "You must choose 1 to ", b._1, " products."), oe && re.length < b._1 && v.createElement("div", {
                    role: "list",
                    "aria-label": "Available Products List",
                    className: "tw-bottom-[120px] tw-border-2 tw-border-solid tw-rounded-lg tw-border-button-bg tw-bg-[#07242B] tw-p-5 tw-gap-3 tw-max-h-[400px] tw-h-[400px] tw-overflow-y-auto tw-absolute tw-z-10 tw-w-full tw-top-[135px] sm:tw-top-[110px] tw-min-h-[200px]"
                }, v.createElement("p", {
                    className: "tw-mb-3"
                }, "Available Products"), pe.length ? pe.map((function(e) {
                    return v.createElement(v.Fragment, {
                        key: e.id
                    }, v.createElement(p.X2, {
                        product: e,
                        className: "tw-gap-3 tw-flex-wrap"
                    }, v.createElement(p.pw, {
                        imageId: e.imageId,
                        alt: e.displayName,
                        fallbackSrc: f,
                        width: 100,
                        fitToCover: !0
                    }), v.createElement(p.JX, {
                        className: "tw-flex-1"
                    }, v.createElement("p", {
                        className: "tw-mb-0 tw-text-highlight tw-font-bold"
                    }, e.displayName), v.createElement("p", {
                        className: "tw-mb-0 tw-text-placeholder-text"
                    }, e.description)), v.createElement(p.zx, {
                        type: "button",
                        containerClasses: "tw-w-full sm:tw-w-[160px] tw-self-center",
                        onClick: function(t) {
                            var n;
                            n = e, le([].concat((0, a.Z)(re), [n])), A((function(e) {
                                return X(X({}, e), {}, {
                                    products: [].concat((0, a.Z)(e.products), [n.id])
                                })
                            })), se(!1), te("")
                        }
                    }, "Add")), v.createElement("hr", {
                        className: "tw-bg-[#07242B] tw-font-medium tw-border tw-border-solid"
                    }))
                })) : v.createElement("div", null, v.createElement("em", null, "No matching products!")))), v.createElement(p.JX, {
                    className: "tw-gap-2 tw-max-h-[196px] tw-overflow-y-auto ".concat(0 !== re.length && "tw-mb-5")
                }, 0 !== re.length && re.map((function(e) {
                    return v.createElement(p.X2, {
                        key: e.id,
                        className: "tw-px-5 tw-py-3 tw-gap-5 tw-items-center tw-bg-grey tw-rounded-lg tw-select-none"
                    }, v.createElement(p.X2, {
                        className: "tw-items-center tw-gap-2 tw-flex-1"
                    }, v.createElement(p.pw, {
                        imageId: null == e ? void 0 : e.imageId,
                        alt: null == e ? void 0 : e.displayName,
                        fallbackSrc: f,
                        width: 36
                    }), v.createElement("p", {
                        className: "tw-text-highlight tw-font-bold tw-mb-0"
                    }, e.displayName)), v.createElement(p.zx, {
                        type: "button",
                        onClick: function() {
                            return function(e) {
                                le(re.filter((function(t) {
                                    return t.id !== e.id
                                }))), A((function(t) {
                                    return X(X({}, t), {}, {
                                        products: t.products.filter((function(t) {
                                            return t !== e.id
                                        }))
                                    })
                                }))
                            }(e)
                        },
                        neutral: !0,
                        className: "tw-w-9 tw-h-9"
                    }, v.createElement(p.$1, {
                        icon: m.$
                    })))
                }))), v.createElement("hr", {
                    className: "tw-border-2 tw-border-solid tw-mb-5 tw-mt-0"
                }), v.createElement("p", {
                    className: "tw-text-lg tw-font-bold"
                }, "Listing Details"), v.createElement(p.JX, {
                    className: "tw-gap-5"
                }, v.createElement(p.JX, {
                    className: "md:tw-flex-row tw-gap-5"
                }, v.createElement(p.JX, {
                    className: "tw-gap-5"
                }, v.createElement("button", {
                    type: "button",
                    onClick: function() {
                        q(!0)
                    },
                    className: "tw-bg-transparent tw-border-0 tw-p-0 tw-rounded tw-relative tw-items-center tw-justify-center tw-flex"
                }, !H && v.createElement(p.zx, {
                    containerClasses: "tw-rounded tw-absolute tw-flex-1"
                }, v.createElement(p.$1, {
                    icon: s.Vm,
                    className: "tw-mr-2"
                }), v.createElement("span", null, "Upload Thumbnail")), v.createElement(p.pw, {
                    imageId: H,
                    fitToCover: !0,
                    alt: "Subscription Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                }))), v.createElement(p.JX, {
                    className: "tw-gap-5 tw-flex-1 md:tw-justify-between"
                }, v.createElement(p.JX, null, v.createElement("label", {
                    htmlFor: "displayName",
                    className: "tw-mb-2"
                }, "Name"), v.createElement(p.II, {
                    name: "displayName",
                    id: "displayName",
                    type: "text",
                    label: "Name",
                    maxLength: 64,
                    value: F.displayName,
                    onChange: de
                }), v.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, F.displayName.length, "/64")), v.createElement(p.JX, null, v.createElement("label", {
                    htmlFor: "description",
                    className: "tw-mb-2"
                }, "Description"), v.createElement(p.gx, {
                    inputClassName: "tw-h-[120px]",
                    maxLength: 256,
                    id: "description",
                    name: "description",
                    label: "Description",
                    value: F.description,
                    onChange: de
                }), v.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, F.description.length, "/256")))), v.createElement(p.JX, {
                    className: "tw-gap-5"
                }, L && v.createElement(p.JX, null, v.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2 tw-flex tw-flex-row"
                }, "Listing ID", v.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1"
                }, v.createElement(p.$1, {
                    icon: o.sq,
                    className: "tw-text-light-grey"
                }), v.createElement("span", {
                    className: "tw-pointer-events-none tw-z-50 tw-absolute tw--top-14 tw--left-20 sm:tw--top-7 sm:tw-left-5 tw-w-[240px] tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50 tw-opacity-0 tw-shadow tw-transition-opacity group-hover:tw-opacity-100"
                }, "This unique ID can be used for reference and direct integration with prefabs in Unity."))), v.createElement(p.X2, {
                    className: "tw-gap-2"
                }, v.createElement(p.II, {
                    type: "text",
                    name: "id",
                    id: "id",
                    value: J.id,
                    disabled: !0,
                    className: "tw-flex-1"
                }), v.createElement(p.zx, {
                    type: "button",
                    className: "tw-w-[40px] tw-h-[40px]",
                    onClick: function() {
                        navigator.clipboard.writeText(J.id).then((function() {
                            S((0, w.d)({
                                title: "Copied listing ID",
                                icon: d.f8,
                                message: "Listing ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(e) {
                            var t, n;
                            S((0, w.d)({
                                title: "Failed to copy listing ID",
                                icon: u.eH,
                                message: null !== (t = null === (n = res.error.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Failed to copy listing ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, v.createElement(p.$1, {
                    icon: i.kZ
                })))), Z && Z === b.ft.DURATION && v.createElement(p.JX, {
                    className: "tw-max-w-[270px]"
                }, v.createElement("label", {
                    htmlFor: "duration",
                    className: "tw-mb-2"
                }, "Duration"), v.createElement(p.JX, {
                    className: "tw-gap-2 xs:tw-flex-row"
                }, v.createElement(p.II, {
                    name: "duration",
                    id: "duration",
                    type: "number",
                    label: "Duration",
                    min: b.nD[F.durationType].min,
                    max: b.nD[F.durationType].max,
                    value: F.duration,
                    onChange: de,
                    step: "1"
                }), v.createElement(p.Lt, {
                    name: "durationType",
                    options: b.Ir,
                    value: F.durationType,
                    onChange: function(e) {
                        A((function(t) {
                            return X(X({}, t), {}, {
                                durationType: e
                            })
                        }))
                    }
                })), v.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, "Starts immediately after purchasing.")), v.createElement(p.JX, {
                    className: "md:tw-max-w-[270px]"
                }, v.createElement("label", {
                    htmlFor: "priceTokens",
                    className: "tw-mb-2"
                }, "Price in VRChat Credits"), v.createElement(p.II, {
                    name: "priceTokens",
                    id: "priceTokens",
                    type: "number",
                    max: 1e4,
                    min: 100,
                    step: "1",
                    label: "Price in VRChat Credits",
                    value: F.priceTokens,
                    onChange: de
                }))))), v.createElement(p.m6, {
                    preset: "subscription",
                    image: H,
                    isOpen: Y,
                    onClose: function() {
                        return q(!1)
                    },
                    confirmCallback: function(e) {
                        var t = e.fileId,
                            n = void 0 === t ? null : t,
                            a = e.fileBlob,
                            l = void 0 === a ? null : a,
                            c = null !== n;
                        return null === n && null === l ? (K(null), void A((function(e) {
                            e.file, e.imageId;
                            return (0, r.Z)(e, x)
                        }))) : c ? (K(n), void A((function(e) {
                            e.file;
                            var t = (0, r.Z)(e, C);
                            return X({
                                imageId: n
                            }, t)
                        }))) : (K(l), void A((function(e) {
                            e.imageId;
                            var t = (0, r.Z)(e, k);
                            return X({
                                file: l
                            }, t)
                        })))
                    },
                    cancelCallBack: function() {
                        return q(!1)
                    }
                }))
            };
            T.propTypes = {
                onDataChange: y().func,
                products: y().array,
                productsLoading: y().bool
            };
            const Z = T
        },
        99878: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var a = n(42138),
                r = n(54546),
                l = n(14411),
                c = n(45697),
                i = n.n(c),
                o = n(67294),
                s = function(e) {
                    var t, n = e.onDataChange,
                        c = void 0 === n ? function() {} : n,
                        i = e.stores,
                        s = void 0 === i ? [] : i,
                        m = e.activeStore,
                        u = void 0 === m ? null : m,
                        d = e.activeListing,
                        w = void 0 === d ? null : d,
                        p = (0, o.useState)([]),
                        g = (0, r.Z)(p, 2),
                        f = g[0],
                        b = g[1],
                        h = (0, o.useState)(null !== (t = null == w ? void 0 : w.active) && void 0 !== t && t),
                        E = (0, r.Z)(h, 2),
                        y = E[0],
                        v = E[1],
                        N = s.filter((function(e) {
                            return "world" === e.storeType
                        }));
                    (0, o.useEffect)((function() {
                        c({
                            storeIds: f,
                            active: y
                        })
                    }), [f, y]), (0, o.useEffect)((function() {
                        w && b(w.storeIds), u && !f.includes(u.id) && b([].concat((0, a.Z)(f), [u.id]))
                    }), []);
                    var x = function(e) {
                        f.includes(e.id) ? b(f.filter((function(t) {
                            return t !== e.id
                        }))) : b([].concat((0, a.Z)(f), [e.id]))
                    };
                    return o.createElement(l.JX, null, o.createElement("h4", null, "Store Availability"), o.createElement("p", {
                        className: "tw-mb-3"
                    }, "Choose the world stores where you want to display this listing:"), o.createElement(l.JX, {
                        className: "tw-gap-2 tw-max-h-[217px] tw-overflow-y-auto"
                    }, 0 === N.length && o.createElement("p", {
                        className: "tw-text-light-grey"
                    }, "You have no stores that can be used for this listing."), N.map((function(e) {
                        var t;
                        return o.createElement(l.X2, {
                            key: e.id,
                            onClick: function() {
                                return x(e)
                            },
                            className: "tw-cursor-pointer tw-px-5 tw-py-3 tw-bg-grey tw-rounded-lg tw-items-center tw-gap-2"
                        }, o.createElement(l.XZ, {
                            checked: f.includes(e.id),
                            onChange: function() {
                                return x(e)
                            },
                            className: "tw-w-5 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-accent-teal-accent tw-border-[#677079] tw-rounded tw-ring-offset-gray-800"
                        }), o.createElement(l.pw, {
                            imageId: null === (t = e.storeContext) || void 0 === t ? void 0 : t.imageUrl,
                            alt: "".concat(e.displayName, " thumbnail"),
                            width: 36,
                            fitToCover: !0
                        }), o.createElement(l.JX, null, o.createElement("p", {
                            className: "tw-font-bold tw-text-teal-accent tw-mb-0"
                        }, e.displayName), o.createElement("small", {
                            className: "tw-capitalize tw-mb-0 tw-text-light-grey"
                        }, e.storeType, " Store")))
                    }))), o.createElement("hr", {
                        className: "tw-border-t-2 tw-border-placeholder-text"
                    }), o.createElement("h4", {
                        className: "tw-mb-3"
                    }, "Listing Visibility"), o.createElement(l.JX, {
                        className: "tw-gap-3"
                    }, o.createElement(l.X2, {
                        className: "tw-gap-2 tw-cursor-pointer",
                        onClick: function() {
                            return v(!1)
                        }
                    }, o.createElement(l.XZ, {
                        checked: !y,
                        onChange: function() {
                            return v(!1)
                        },
                        className: "tw-m-1 tw-w-5 tw-h-5 tw-bg-button-bg-grey tw-ring-2 tw-ring-[#677079] checked:tw-bg-teal-accent checked:tw-ring-teal-accent checked:tw-ring-offset-2 checked:tw-ring-offset-darker-grey tw-rounded-full tw-appearance-none"
                    }), o.createElement(l.JX, null, o.createElement("p", {
                        className: "tw-mb-0"
                    }, "Save as draft"), o.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "Users cannot see the listing until you publish it."))), o.createElement(l.X2, {
                        className: "tw-gap-2 tw-cursor-pointer",
                        onClick: function() {
                            return v(!0)
                        }
                    }, o.createElement(l.XZ, {
                        checked: y,
                        onChange: function() {
                            return v(!0)
                        },
                        className: "tw-m-1 tw-w-5 tw-h-5 tw-bg-button-bg-grey tw-ring-2 tw-ring-[#677079] checked:tw-bg-teal-accent checked:tw-ring-teal-accent checked:tw-ring-offset-2 checked:tw-ring-offset-darker-grey tw-rounded-full tw-appearance-none"
                    }), o.createElement(l.JX, null, o.createElement("p", {
                        className: "tw-mb-0"
                    }, "Create and publish in the selected stores"), o.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "Users can start buying the listing in the selected published world stores.")))))
                };
            s.propTypes = {
                onDataChange: i().func,
                stores: i().array,
                store: i().object
            };
            const m = s
        }
    }
]);
//# sourceMappingURL=9ae2e4a4344848e0c2c685abad333408d2e6c716eba46f88d733226614533eba.js.map