"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8303], {
        9401: (e, t, a) => {
            a.d(t, {
                Z: () => Z
            });
            var n = a(42138),
                l = a(45987),
                r = a(4942),
                i = a(54546),
                c = a(2909),
                o = a(82414),
                s = a(78076),
                m = a(42619),
                u = a(76553),
                d = a(6811),
                w = a(64258),
                p = a(14411),
                g = a(98185),
                f = a(67263),
                b = a(95896),
                h = a(12752),
                E = a(45697),
                v = a.n(E),
                y = a(67294),
                N = a(32981),
                x = ["file", "imageId"],
                C = ["file"],
                k = ["imageId"];

            function I(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function X(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(Object(a), !0).forEach((function(t) {
                        (0, r.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : I(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var T = function(e) {
                var t = e.onDataChange,
                    a = void 0 === t ? function() {} : t,
                    E = e.products,
                    v = void 0 === E ? [] : E,
                    I = e.productsLoading,
                    T = void 0 !== I && I,
                    Z = e.listingType,
                    D = e.currentListing,
                    J = void 0 === D ? {} : D,
                    O = e.isEditing,
                    L = void 0 !== O && O,
                    S = (0, N.I0)(),
                    j = (0, y.useState)(X({
                        displayName: (null == J ? void 0 : J.displayName) || "",
                        description: (null == J ? void 0 : J.description) || "",
                        priceTokens: (null == J ? void 0 : J.priceTokens) || 100,
                        products: (null == J ? void 0 : J.products) || []
                    }, Z === b.ft.DURATION && {
                        duration: (null == J ? void 0 : J.duration) || 1,
                        durationType: (null == J ? void 0 : J.durationType) || b.PG.DAY
                    })),
                    P = (0, i.Z)(j, 2),
                    F = P[0],
                    A = P[1],
                    z = (0, y.useState)({}),
                    R = (0, i.Z)(z, 2),
                    U = R[0],
                    V = R[1],
                    $ = (0, y.useMemo)((function() {
                        return T || !J.products ? [] : v.filter((function(e) {
                            return J.products.includes(e.id)
                        }))
                    }), [J.products, T]),
                    _ = (0, y.useState)(!1),
                    B = (0, i.Z)(_, 2),
                    q = B[0],
                    M = B[1],
                    Y = (0, y.useState)((null == J ? void 0 : J.file) || (null == J ? void 0 : J.imageId) || null),
                    G = (0, i.Z)(Y, 2),
                    H = G[0],
                    K = G[1],
                    Q = y.useState(""),
                    W = (0, i.Z)(Q, 2),
                    ee = W[0],
                    te = W[1],
                    ae = y.useState([]),
                    ne = (0, i.Z)(ae, 2),
                    le = ne[0],
                    re = ne[1],
                    ie = y.useState(!1),
                    ce = (0, i.Z)(ie, 2),
                    oe = ce[0],
                    se = ce[1],
                    me = (0, y.useRef)(null),
                    ue = (0, h.Nr)(ee);
                (0, y.useEffect)((function() {
                    a(F)
                }), [F]), (0, y.useEffect)((function() {
                    re($)
                }), [$]);
                (0, y.useEffect)((function() {
                    return document.addEventListener("mousedown", we),
                        function() {
                            document.removeEventListener("mousedown", we)
                        }
                }), []);
                var de = function(e) {
                        var t = e.target,
                            a = t.name,
                            n = t.value;
                        A((function(e) {
                            return X(X({}, e), {}, (0, r.Z)({}, a, n))
                        })), V(X(X({}, U), {}, (0, r.Z)({}, a, e.target.checkValidity())))
                    },
                    we = function(e) {
                        me.current && !me.current.contains(e.target) && se(!1)
                    },
                    pe = y.useMemo((function() {
                        if (!v) return [];
                        var e = le.map((function(e) {
                            return e.id
                        }));
                        return v.filter((function(t) {
                            return !(null != e && e.includes(t.id)) && t.productType !== b.Pm.ROLE && (!ue || (t.id.toLowerCase().includes(ue.trim().toLowerCase()) || t.displayName.toLowerCase().includes(ue.trim().toLowerCase())))
                        })) || []
                    }), [le, v, ue]);
                return y.createElement(y.Fragment, null, T && y.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, y.createElement(g.Z, {
                    loading: !0
                })), !T && y.createElement(p.JX, null, y.createElement("p", {
                    className: "tw-text-lg tw-font-bold tw-mb-2"
                }, "Add Products"), y.createElement(p.JX, {
                    className: "tw-relative",
                    ref: me
                }, y.createElement("p", {
                    className: "tw-mb-2"
                }, "Choose the products that buyers of this listing gain access to."), y.createElement(p.II, {
                    className: "tw-mb-2",
                    value: ee,
                    onChange: function(e) {
                        return te(e.target.value)
                    },
                    onFocus: function() {
                        se(!0)
                    },
                    disabled: le.length >= b._1
                }), y.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-5"
                }, "You must choose 1 to ", b._1, " products."), oe && le.length < b._1 && y.createElement("div", {
                    role: "list",
                    "aria-label": "Available Products List",
                    className: "tw-bottom-[120px] tw-border-2 tw-border-solid tw-rounded-lg tw-border-button-bg tw-bg-[#07242B] tw-p-5 tw-gap-3 tw-max-h-[400px] tw-h-[400px] tw-overflow-y-auto tw-absolute tw-z-10 tw-w-full tw-top-[135px] sm:tw-top-[110px] tw-min-h-[200px]"
                }, y.createElement("p", {
                    className: "tw-mb-3"
                }, "Available Products"), pe.length ? pe.map((function(e) {
                    return y.createElement(y.Fragment, {
                        key: e.id
                    }, y.createElement(p.X2, {
                        product: e,
                        className: "tw-gap-3 tw-flex-wrap"
                    }, y.createElement(p.pw, {
                        imageId: e.imageId,
                        alt: e.displayName,
                        fallbackSrc: f,
                        width: 100,
                        fitToCover: !0
                    }), y.createElement(p.JX, {
                        className: "tw-flex-1"
                    }, y.createElement("p", {
                        className: "tw-mb-0 tw-text-highlight tw-font-bold"
                    }, e.displayName), y.createElement("p", {
                        className: "tw-mb-0 tw-text-placeholder-text"
                    }, e.description)), y.createElement(p.zx, {
                        type: "button",
                        containerClasses: "tw-w-full sm:tw-w-[160px] tw-self-center",
                        onClick: function(t) {
                            var a;
                            a = e, re([].concat((0, n.Z)(le), [a])), A((function(e) {
                                return X(X({}, e), {}, {
                                    products: [].concat((0, n.Z)(e.products), [a.id])
                                })
                            })), se(!1), te("")
                        }
                    }, "Add")), y.createElement("hr", {
                        className: "tw-bg-[#07242B] tw-font-medium tw-border tw-border-solid"
                    }))
                })) : y.createElement("div", null, y.createElement("em", null, "No matching products!")))), y.createElement(p.JX, {
                    className: "tw-gap-2 tw-max-h-[196px] tw-overflow-y-auto ".concat(0 !== le.length && "tw-mb-5")
                }, 0 !== le.length && le.map((function(e) {
                    return y.createElement(p.X2, {
                        key: e.id,
                        className: "tw-px-5 tw-py-3 tw-gap-5 tw-items-center tw-bg-grey tw-rounded-lg tw-select-none"
                    }, y.createElement(p.X2, {
                        className: "tw-items-center tw-gap-2 tw-flex-1"
                    }, y.createElement(p.pw, {
                        imageId: null == e ? void 0 : e.imageId,
                        alt: null == e ? void 0 : e.displayName,
                        fallbackSrc: f,
                        width: 36
                    }), y.createElement("p", {
                        className: "tw-text-highlight tw-font-bold tw-mb-0"
                    }, e.displayName)), y.createElement(p.zx, {
                        type: "button",
                        onClick: function() {
                            return function(e) {
                                re(le.filter((function(t) {
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
                    }, y.createElement(p.$1, {
                        icon: m.$
                    })))
                }))), y.createElement("hr", {
                    className: "tw-border-2 tw-border-solid tw-mb-5 tw-mt-0"
                }), y.createElement("p", {
                    className: "tw-text-lg tw-font-bold"
                }, "Listing Details"), y.createElement(p.JX, {
                    className: "tw-gap-5"
                }, y.createElement(p.JX, {
                    className: "md:tw-flex-row tw-gap-5"
                }, y.createElement(p.JX, {
                    className: "tw-gap-5"
                }, y.createElement("button", {
                    type: "button",
                    onClick: function() {
                        M(!0)
                    },
                    className: "tw-bg-transparent tw-border-0 tw-p-0 tw-rounded tw-relative tw-items-center tw-justify-center tw-flex"
                }, !H && y.createElement(p.zx, {
                    containerClasses: "tw-rounded tw-absolute tw-flex-1"
                }, y.createElement(p.$1, {
                    icon: s.Vm,
                    className: "tw-mr-2"
                }), y.createElement("span", null, "Upload Thumbnail")), y.createElement(p.pw, {
                    imageId: H,
                    fitToCover: !0,
                    alt: "Subscription Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                }))), y.createElement(p.JX, {
                    className: "tw-gap-5 tw-flex-1 md:tw-justify-between"
                }, y.createElement(p.JX, null, y.createElement("label", {
                    htmlFor: "displayName",
                    className: "tw-mb-2"
                }, "Name"), y.createElement(p.II, {
                    name: "displayName",
                    id: "displayName",
                    type: "text",
                    label: "Name",
                    maxLength: 64,
                    value: F.displayName,
                    onChange: de
                }), y.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, F.displayName.length, "/64")), y.createElement(p.JX, null, y.createElement("label", {
                    htmlFor: "description",
                    className: "tw-mb-2"
                }, "Description"), y.createElement(p.gx, {
                    inputClassName: "tw-h-[120px]",
                    maxLength: 256,
                    id: "description",
                    name: "description",
                    label: "Description",
                    value: F.description,
                    onChange: de
                }), y.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, F.description.length, "/256")))), y.createElement(p.JX, {
                    className: "tw-gap-5"
                }, L && y.createElement(p.JX, null, y.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2 tw-flex tw-flex-row"
                }, "Listing ID", y.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1"
                }, y.createElement(p.$1, {
                    icon: o.sq,
                    className: "tw-text-light-grey"
                }), y.createElement("span", {
                    className: "tw-pointer-events-none tw-z-50 tw-absolute tw--top-14 tw--left-20 sm:tw--top-7 sm:tw-left-5 tw-w-[240px] tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50 tw-opacity-0 tw-shadow tw-transition-opacity group-hover:tw-opacity-100"
                }, "This unique ID can be used for reference and direct integration with prefabs in Unity."))), y.createElement(p.X2, {
                    className: "tw-gap-2"
                }, y.createElement(p.II, {
                    type: "text",
                    name: "id",
                    id: "id",
                    value: J.id,
                    disabled: !0,
                    className: "tw-flex-1"
                }), y.createElement(p.zx, {
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
                            var t, a;
                            S((0, w.d)({
                                title: "Failed to copy listing ID",
                                icon: u.eH,
                                message: null !== (t = null === (a = res.error.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== t ? t : "Failed to copy listing ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, y.createElement(p.$1, {
                    icon: c.kZ
                })))), Z && Z === b.ft.DURATION && y.createElement(p.JX, {
                    className: "tw-max-w-[270px]"
                }, y.createElement("label", {
                    htmlFor: "duration",
                    className: "tw-mb-2"
                }, "Duration"), y.createElement(p.JX, {
                    className: "tw-gap-2 xs:tw-flex-row"
                }, y.createElement(p.II, {
                    name: "duration",
                    id: "duration",
                    type: "number",
                    label: "Duration",
                    min: b.nD[F.durationType].min,
                    max: b.nD[F.durationType].max,
                    value: F.duration,
                    onChange: de,
                    step: "1"
                }), y.createElement(p.Lt, {
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
                })), y.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, "Starts immediately after purchasing.")), y.createElement(p.JX, {
                    className: "md:tw-max-w-[270px]"
                }, y.createElement("label", {
                    htmlFor: "priceTokens",
                    className: "tw-mb-2"
                }, "Price in VRChat Credits"), y.createElement(p.II, {
                    name: "priceTokens",
                    id: "priceTokens",
                    type: "number",
                    max: 1e4,
                    min: 100,
                    step: "1",
                    label: "Price in VRChat Credits",
                    value: F.priceTokens,
                    onChange: de
                }))))), y.createElement(p.m6, {
                    preset: "subscription",
                    image: H,
                    isOpen: q,
                    onClose: function() {
                        return M(!1)
                    },
                    confirmCallback: function(e) {
                        var t = e.fileId,
                            a = void 0 === t ? null : t,
                            n = e.fileBlob,
                            r = void 0 === n ? null : n,
                            i = null !== a;
                        return null === a && null === r ? (K(null), void A((function(e) {
                            e.file, e.imageId;
                            return (0, l.Z)(e, x)
                        }))) : i ? (K(a), void A((function(e) {
                            e.file;
                            var t = (0, l.Z)(e, C);
                            return X({
                                imageId: a
                            }, t)
                        }))) : (K(r), void A((function(e) {
                            e.imageId;
                            var t = (0, l.Z)(e, k);
                            return X({
                                file: r
                            }, t)
                        })))
                    },
                    cancelCallBack: function() {
                        return M(!1)
                    }
                }))
            };
            T.propTypes = {
                onDataChange: v().func,
                products: v().array,
                productsLoading: v().bool
            };
            const Z = T
        },
        99878: (e, t, a) => {
            a.d(t, {
                Z: () => m
            });
            var n = a(42138),
                l = a(54546),
                r = a(14411),
                i = a(45697),
                c = a.n(i),
                o = a(67294),
                s = function(e) {
                    var t, a = e.onDataChange,
                        i = void 0 === a ? function() {} : a,
                        c = e.stores,
                        s = void 0 === c ? [] : c,
                        m = e.activeStore,
                        u = void 0 === m ? null : m,
                        d = e.activeListing,
                        w = void 0 === d ? null : d,
                        p = (0, o.useState)([]),
                        g = (0, l.Z)(p, 2),
                        f = g[0],
                        b = g[1],
                        h = (0, o.useState)(null !== (t = null == w ? void 0 : w.active) && void 0 !== t && t),
                        E = (0, l.Z)(h, 2),
                        v = E[0],
                        y = E[1],
                        N = s.filter((function(e) {
                            return "world" === e.storeType
                        }));
                    (0, o.useEffect)((function() {
                        i({
                            storeIds: f,
                            active: v
                        })
                    }), [f, v]), (0, o.useEffect)((function() {
                        w && b(w.storeIds), u && !f.includes(u.id) && b([].concat((0, n.Z)(f), [u.id]))
                    }), []);
                    var x = function(e) {
                        f.includes(e.id) ? b(f.filter((function(t) {
                            return t !== e.id
                        }))) : b([].concat((0, n.Z)(f), [e.id]))
                    };
                    return o.createElement(r.JX, null, o.createElement("h4", null, "Store Availability"), o.createElement("p", {
                        className: "tw-mb-3"
                    }, "Choose the stores where you want to display this listing:"), o.createElement(r.JX, {
                        className: "tw-gap-2 tw-max-h-[217px] tw-overflow-y-auto"
                    }, 0 === N.length && o.createElement("p", {
                        className: "tw-text-light-grey"
                    }, "No stores available for this listing."), N.map((function(e) {
                        var t;
                        return o.createElement(r.X2, {
                            key: e.id,
                            onClick: function() {
                                return x(e)
                            },
                            className: "tw-cursor-pointer tw-px-5 tw-py-3 tw-bg-grey tw-rounded-lg tw-items-center tw-gap-2"
                        }, o.createElement(r.XZ, {
                            checked: f.includes(e.id),
                            onChange: function() {
                                return x(e)
                            },
                            className: "tw-w-5 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-accent-teal-accent tw-border-[#677079] tw-rounded tw-ring-offset-gray-800"
                        }), o.createElement(r.pw, {
                            imageId: null === (t = e.storeContext) || void 0 === t ? void 0 : t.imageUrl,
                            alt: "".concat(e.displayName, " thumbnail"),
                            width: 36,
                            fitToCover: !0
                        }), o.createElement(r.JX, null, o.createElement("p", {
                            className: "tw-font-bold tw-text-teal-accent tw-mb-0"
                        }, e.displayName), o.createElement("small", {
                            className: "tw-capitalize tw-mb-0 tw-text-light-grey"
                        }, e.storeType, " Store")))
                    }))), o.createElement("hr", {
                        className: "tw-border-t-2 tw-border-placeholder-text"
                    }), o.createElement("h4", {
                        className: "tw-mb-3"
                    }, "Listing Visibility"), o.createElement(r.JX, {
                        className: "tw-gap-3"
                    }, o.createElement(r.X2, {
                        className: "tw-gap-2 tw-cursor-pointer",
                        onClick: function() {
                            return y(!1)
                        }
                    }, o.createElement(r.XZ, {
                        checked: !v,
                        onChange: function() {
                            return y(!1)
                        },
                        className: "tw-m-1 tw-w-5 tw-h-5 tw-bg-button-bg-grey tw-ring-2 tw-ring-[#677079] checked:tw-bg-teal-accent checked:tw-ring-teal-accent checked:tw-ring-offset-2 checked:tw-ring-offset-darker-grey tw-rounded-full tw-appearance-none"
                    }), o.createElement(r.JX, null, o.createElement("p", {
                        className: "tw-mb-0"
                    }, "Save as draft"), o.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "The listing will not be visible to users until you publish it."))), o.createElement(r.X2, {
                        className: "tw-gap-2 tw-cursor-pointer",
                        onClick: function() {
                            return y(!0)
                        }
                    }, o.createElement(r.XZ, {
                        checked: v,
                        onChange: function() {
                            return y(!0)
                        },
                        className: "tw-m-1 tw-w-5 tw-h-5 tw-bg-button-bg-grey tw-ring-2 tw-ring-[#677079] checked:tw-bg-teal-accent checked:tw-ring-teal-accent checked:tw-ring-offset-2 checked:tw-ring-offset-darker-grey tw-rounded-full tw-appearance-none"
                    }), o.createElement(r.JX, null, o.createElement("p", {
                        className: "tw-mb-0"
                    }, "Create and publish in the selected stores"), o.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "The listing will be immediately visible and available for purchase.")))))
                };
            s.propTypes = {
                onDataChange: c().func,
                stores: c().array,
                store: c().object
            };
            const m = s
        }
    }
]);
//# sourceMappingURL=dceee6fae619b4501c2737ac67db06665d14b57dc28a57140568e2d62d9b6be9.js.map