"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8303], {
        9401: (e, t, n) => {
            n.d(t, {
                Z: () => D
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
                v = n.n(E),
                y = n(67294),
                N = n(32981),
                x = n(65061),
                C = ["file", "imageId"],
                k = ["file"],
                I = ["imageId"];

            function X(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? X(Object(n), !0).forEach((function(t) {
                        (0, l.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Z = function(e) {
                var t = e.onDataChange,
                    n = void 0 === t ? function() {} : t,
                    E = e.products,
                    v = void 0 === E ? [] : E,
                    X = e.productsLoading,
                    Z = void 0 !== X && X,
                    D = e.listingType,
                    L = e.currentListing,
                    O = void 0 === L ? {} : L,
                    J = e.isEditing,
                    S = void 0 !== J && J,
                    j = (0, N.I0)(),
                    P = (0, y.useState)(T({
                        displayName: (null == O ? void 0 : O.displayName) || "",
                        description: (null == O ? void 0 : O.description) || "",
                        priceTokens: (null == O ? void 0 : O.priceTokens) || 100,
                        products: (null == O ? void 0 : O.products) || []
                    }, D === b.ft.DURATION && {
                        duration: (null == O ? void 0 : O.duration) || 1,
                        durationType: (null == O ? void 0 : O.durationType) || b.PG.DAY
                    })),
                    F = (0, c.Z)(P, 2),
                    A = F[0],
                    R = F[1],
                    U = (0, y.useState)({}),
                    z = (0, c.Z)(U, 2),
                    V = z[0],
                    $ = z[1],
                    _ = (0, y.useMemo)((function() {
                        return Z || !O.products ? [] : v.filter((function(e) {
                            return O.products.includes(e.id)
                        }))
                    }), [O.products, Z]),
                    B = (0, y.useState)(!1),
                    Y = (0, c.Z)(B, 2),
                    q = Y[0],
                    M = Y[1],
                    G = (0, y.useState)((null == O ? void 0 : O.file) || (null == O ? void 0 : O.imageId) || null),
                    H = (0, c.Z)(G, 2),
                    K = H[0],
                    Q = H[1],
                    W = y.useState(""),
                    ee = (0, c.Z)(W, 2),
                    te = ee[0],
                    ne = ee[1],
                    ae = y.useState([]),
                    re = (0, c.Z)(ae, 2),
                    le = re[0],
                    ce = re[1],
                    ie = y.useState(!1),
                    oe = (0, c.Z)(ie, 2),
                    se = oe[0],
                    me = oe[1],
                    ue = (0, y.useRef)(null),
                    de = (0, y.useState)(!1),
                    we = (0, c.Z)(de, 2),
                    pe = we[0],
                    ge = we[1],
                    fe = (0, y.useRef)(null),
                    be = (0, h.Nr)(te);
                (0, y.useEffect)((function() {
                    n(A)
                }), [A]), (0, y.useEffect)((function() {
                    ce(_)
                }), [_]);
                (0, y.useEffect)((function() {
                    return document.addEventListener("mousedown", Ee),
                        function() {
                            document.removeEventListener("mousedown", Ee)
                        }
                }), []), (0, y.useEffect)((function() {
                    var e = function(e) {
                        fe.current && !fe.current.contains(e.target) && ge(!1)
                    };
                    return pe ? document.addEventListener("mousedown", e) : document.removeEventListener("mousedown", e),
                        function() {
                            document.removeEventListener("mousedown", e)
                        }
                }), [pe]);
                var he = function(e) {
                        var t = e.target,
                            n = t.name,
                            a = t.value;
                        R((function(e) {
                            return T(T({}, e), {}, (0, l.Z)({}, n, a))
                        })), $(T(T({}, V), {}, (0, l.Z)({}, n, e.target.checkValidity())))
                    },
                    Ee = function(e) {
                        ue.current && !ue.current.contains(e.target) && me(!1)
                    },
                    ve = y.useMemo((function() {
                        if (!v) return [];
                        var e = le.map((function(e) {
                            return e.id
                        }));
                        return v.filter((function(t) {
                            return !(null != e && e.includes(t.id)) && t.productType !== b.Pm.ROLE && (!be || (t.id.toLowerCase().includes(be.trim().toLowerCase()) || t.displayName.toLowerCase().includes(be.trim().toLowerCase())))
                        })) || []
                    }), [le, v, be]);
                return y.createElement(y.Fragment, null, Z && y.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, y.createElement(g.Z, {
                    loading: !0
                })), !Z && y.createElement(p.JX, null, y.createElement("p", {
                    className: "tw-text-lg tw-font-bold tw-mb-2"
                }, "Add Products"), y.createElement(p.JX, {
                    className: "tw-relative",
                    ref: ue
                }, y.createElement("p", {
                    className: "tw-mb-2"
                }, "Choose the products that buyers of this listing gain access to."), y.createElement(p.II, {
                    className: "tw-mb-2",
                    value: te,
                    onChange: function(e) {
                        return ne(e.target.value)
                    },
                    onFocus: function() {
                        me(!0)
                    },
                    disabled: le.length >= b._1
                }), y.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-5"
                }, "You must choose 1 to ", b._1, " products."), se && le.length < b._1 && y.createElement("div", {
                    role: "list",
                    "aria-label": "Available Products List",
                    className: "tw-bottom-[120px] tw-border-2 tw-border-solid tw-rounded-lg tw-border-button-bg tw-bg-[#07242B] tw-p-5 tw-gap-3 tw-max-h-[400px] tw-h-[400px] tw-overflow-y-auto tw-absolute tw-z-10 tw-w-full tw-top-[135px] sm:tw-top-[110px] tw-min-h-[200px]"
                }, y.createElement("p", {
                    className: "tw-mb-3"
                }, "Available Products"), ve.length ? ve.map((function(e) {
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
                            var n;
                            n = e, ce([].concat((0, a.Z)(le), [n])), R((function(e) {
                                return T(T({}, e), {}, {
                                    products: [].concat((0, a.Z)(e.products), [n.id])
                                })
                            })), me(!1), ne("")
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
                        className: "tw-text-white tw-font-bold tw-mb-0"
                    }, e.displayName)), y.createElement(p.zx, {
                        type: "button",
                        onClick: function() {
                            return function(e) {
                                ce(le.filter((function(t) {
                                    return t.id !== e.id
                                }))), R((function(t) {
                                    return T(T({}, t), {}, {
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
                    className: "tw-border-2 tw-border-[#404c58] tw-border-solid tw-mb-5 tw-mt-0"
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
                }, !K && y.createElement(p.zx, {
                    containerClasses: "tw-rounded tw-absolute tw-flex-1"
                }, y.createElement(p.$1, {
                    icon: s.Vm,
                    className: "tw-mr-2"
                }), y.createElement("span", null, "Upload Thumbnail")), y.createElement(p.pw, {
                    imageId: K,
                    fitToCover: !0,
                    alt: "Subscription Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                }))), y.createElement(p.JX, {
                    className: "tw-gap-5 tw-flex-1 md:tw-justify-between"
                }, y.createElement(p.JX, {
                    className: "tw-gap-2"
                }, y.createElement("label", {
                    htmlFor: "displayName"
                }, "Name"), y.createElement(p.II, {
                    name: "displayName",
                    id: "displayName",
                    type: "text",
                    label: "Name",
                    maxLength: 64,
                    value: A.displayName,
                    onChange: he
                }), y.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, A.displayName.length, "/64")), y.createElement(p.JX, {
                    className: "tw-gap-2"
                }, y.createElement("label", {
                    htmlFor: "description"
                }, "Description"), y.createElement(p.gx, {
                    inputClassName: "tw-h-[120px]",
                    maxLength: 256,
                    id: "description",
                    name: "description",
                    label: "Description",
                    value: A.description,
                    onChange: he
                }), y.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, A.description.length, "/256")))), y.createElement(p.JX, {
                    className: "tw-gap-5"
                }, S && y.createElement(p.JX, {
                    className: "tw-gap-2"
                }, y.createElement("label", {
                    htmlFor: "id",
                    className: "tw-flex tw-flex-row"
                }, "Listing ID", y.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1",
                    ref: fe
                }, y.createElement("button", {
                    id: "listingIdTooltip",
                    type: "button",
                    className: "tw-bg-transparent tw-border-none",
                    onClick: function() {
                        return ge(!pe)
                    },
                    "aria-label": "Listing ID tooltip"
                }, y.createElement(p.$1, {
                    icon: o.sq,
                    className: "tw-text-light-grey"
                })), y.createElement(x.Z, {
                    isOpen: pe,
                    target: "listingIdTooltip",
                    placement: "right",
                    trigger: "click",
                    innerClassName: "tw-bg-gray-900"
                }, y.createElement("span", {
                    className: "tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50"
                }, "This unique ID can be used for reference and direct integration with prefabs in Unity.")))), y.createElement(p.X2, {
                    className: "tw-gap-2"
                }, y.createElement(p.II, {
                    type: "text",
                    name: "id",
                    id: "id",
                    value: O.id,
                    disabled: !0,
                    className: "tw-flex-1"
                }), y.createElement(p.zx, {
                    type: "button",
                    className: "tw-w-[40px] tw-h-[40px]",
                    onClick: function() {
                        navigator.clipboard.writeText(O.id).then((function() {
                            j((0, w.d)({
                                title: "Copied listing ID",
                                icon: d.f8,
                                message: "Listing ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(e) {
                            var t, n;
                            j((0, w.d)({
                                title: "Failed to copy listing ID",
                                icon: u.eH,
                                message: null !== (t = null === (n = res.error.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Failed to copy listing ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, y.createElement(p.$1, {
                    icon: i.kZ
                })))), D && D === b.ft.DURATION && y.createElement(p.JX, {
                    className: "tw-max-w-[270px] tw-gap-2"
                }, y.createElement("label", {
                    htmlFor: "duration"
                }, "Duration"), y.createElement(p.JX, {
                    className: "tw-gap-2 xs:tw-flex-row"
                }, y.createElement(p.II, {
                    name: "duration",
                    id: "duration",
                    type: "number",
                    label: "Duration",
                    min: b.nD[A.durationType].min,
                    max: b.nD[A.durationType].max,
                    value: A.duration,
                    onChange: he,
                    step: "1"
                }), y.createElement(p.Lt, {
                    name: "durationType",
                    options: b.Ir,
                    value: A.durationType,
                    onChange: function(e) {
                        R((function(t) {
                            return T(T({}, t), {}, {
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
                    value: A.priceTokens,
                    onChange: he
                }))))), y.createElement(p.m6, {
                    preset: "subscription",
                    image: K,
                    isOpen: q,
                    onClose: function() {
                        return M(!1)
                    },
                    confirmCallback: function(e) {
                        var t = e.fileId,
                            n = void 0 === t ? null : t,
                            a = e.fileBlob,
                            l = void 0 === a ? null : a,
                            c = null !== n;
                        return null === n && null === l ? (Q(null), void R((function(e) {
                            e.file, e.imageId;
                            return (0, r.Z)(e, C)
                        }))) : c ? (Q(n), void R((function(e) {
                            e.file;
                            var t = (0, r.Z)(e, k);
                            return T({
                                imageId: n
                            }, t)
                        }))) : (Q(l), void R((function(e) {
                            e.imageId;
                            var t = (0, r.Z)(e, I);
                            return T({
                                file: l
                            }, t)
                        })))
                    },
                    cancelCallBack: function() {
                        return M(!1)
                    }
                }))
            };
            Z.propTypes = {
                onDataChange: v().func,
                products: v().array,
                productsLoading: v().bool
            };
            const D = Z
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
                        v = E[0],
                        y = E[1],
                        N = s.filter((function(e) {
                            return "world" === e.storeType
                        }));
                    (0, o.useEffect)((function() {
                        c({
                            storeIds: f,
                            active: v
                        })
                    }), [f, v]), (0, o.useEffect)((function() {
                        w && b(w.storeIds), u && !f.includes(u.id) && b([].concat((0, a.Z)(f), [u.id]))
                    }), []);
                    var x = function(e) {
                        f.includes(e.id) ? b(f.filter((function(t) {
                            return t !== e.id
                        }))) : b([].concat((0, a.Z)(f), [e.id]))
                    };
                    return o.createElement(l.JX, null, o.createElement("h6", {
                        className: "tw-text-lg"
                    }, "Store Availability"), o.createElement("p", {
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
                    }), o.createElement("h6", {
                        className: "tw-mb-3 tw-text-lg"
                    }, "Listing Visibility"), o.createElement(l.JX, {
                        className: "tw-gap-3"
                    }, o.createElement(l.X2, {
                        className: "tw-gap-2 tw-cursor-pointer",
                        onClick: function() {
                            return y(!1)
                        }
                    }, o.createElement(l.XZ, {
                        checked: !v,
                        onChange: function() {
                            return y(!1)
                        },
                        className: "tw-m-1 tw-w-5 tw-h-5 tw-bg-button-bg-grey tw-ring-2 tw-ring-[#677079] checked:tw-bg-teal-accent checked:tw-ring-teal-accent checked:tw-ring-offset-2 checked:tw-ring-offset-darker-grey tw-rounded-full tw-appearance-none"
                    }), o.createElement(l.JX, null, o.createElement("p", {
                        className: "tw-mb-0"
                    }, "Save as draft"), o.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "Users cannot see the listing until you publish it."))), o.createElement(l.X2, {
                        className: "tw-gap-2 tw-cursor-pointer",
                        onClick: function() {
                            return y(!0)
                        }
                    }, o.createElement(l.XZ, {
                        checked: v,
                        onChange: function() {
                            return y(!0)
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
//# sourceMappingURL=842d322c5090bd2f9e61e8b4c6563749d5aea57169f7fd89f5dc52bb199cd2a6.js.map