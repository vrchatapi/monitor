"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1515], {
        22717: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => h
            });
            var r = n(15861),
                a = n(54546),
                l = n(76553),
                o = n(6811),
                i = n(64687),
                s = n.n(i),
                c = n(64258),
                u = n(14411),
                m = n(98185),
                d = n(22202),
                w = n(93261),
                p = n(16869),
                f = n(45697),
                g = n.n(f),
                b = n(67294),
                v = n(32981),
                E = function(e) {
                    var t = e.listingId,
                        n = void 0 === t ? null : t,
                        i = e.onCancelCallback,
                        f = void 0 === i ? function() {} : i;
                    if (null === n) return null;
                    var g = (0, v.I0)(),
                        E = ((0, d.XC)().data, (0, b.useState)(null)),
                        h = (0, a.Z)(E, 2),
                        y = (h[0], h[1]),
                        x = (0, b.useState)(null),
                        N = (0, a.Z)(x, 2),
                        C = N[0],
                        S = N[1],
                        k = (0, b.useState)(null),
                        O = (0, a.Z)(k, 2),
                        P = O[0],
                        I = O[1],
                        j = (0, p.mr)({
                            listingId: n,
                            hydrateProducts: !0
                        }),
                        D = j.data,
                        T = j.isLoading,
                        Z = (j.isError, j.error, (0, w.nz)()),
                        L = (0, a.Z)(Z, 2),
                        A = L[0],
                        X = L[1],
                        F = X.data,
                        z = X.isLoading,
                        J = (X.isError, X.error, (0, w.VF)()),
                        R = (0, a.Z)(J, 2),
                        G = R[0],
                        B = R[1];
                    B.isLoading, B.isError, B.error;
                    (0, b.useEffect)((function() {
                        if (D && (S(D), D.hydratedProducts)) {
                            var e = D.products.find((function(e) {
                                return e.groupRoleId
                            }));
                            y(e), I(e.groupRoleId), A({
                                groupId: D.groupId
                            })
                        }
                    }), [D]);
                    var M = function() {
                        var e = (0, r.Z)(s().mark((function e() {
                            var t, n, r;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (P && F && D) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return t = function(e) {
                                            g((0, c.d)({
                                                title: "Listing deleted successfully!",
                                                icon: o.f8,
                                                message: "Your listing has been deleted successfully!",
                                                color: "success",
                                                timeout: 3e3
                                            })), f()
                                        }, e.prev = 3, e.next = 6, G({
                                            groupId: F.id,
                                            roleId: P,
                                            ownerId: F.ownerId,
                                            confirm: !0
                                        }).unwrap();
                                    case 6:
                                        t(), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(3), console.error("error", e.t0), g((0, c.d)({
                                            title: "Failed to delete listing!",
                                            icon: l.eH,
                                            message: null !== (n = null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 9]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    return b.createElement(u.JX, {
                        className: "tw-w-full"
                    }, b.createElement(m.Z, {
                        loading: T || z
                    }, b.createElement("p", null, b.createElement("strong", null, "Are you sure you want to delete this subscription? This is NOT reversible.")), b.createElement("p", null, "In order to delete this subscription, verify the following."), b.createElement("ul", {
                        className: "tw-bg-grey tw-rounded tw-py-3 tw-gap-2"
                    }, b.createElement("li", null, "There are no active subscribers to this subscription."), b.createElement("li", null, "The subscription listing is in draft mode."), b.createElement("li", null, "This listing must not contain any other products other than the role it's related to.")), b.createElement(u.X2, {
                        className: "tw-gap-2"
                    }, b.createElement(u.zx, {
                        onClick: f,
                        type: "button",
                        containerClasses: "tw-flex-1",
                        neutral: !0
                    }, "Cancel"), b.createElement(u.zx, {
                        onClick: M,
                        type: "button",
                        containerClasses: "tw-flex-1",
                        danger: !0,
                        disabled: (null == C ? void 0 : C.active) || (null == C ? void 0 : C.products.length) > 1
                    }, "Delete"))))
                };
            E.propTypes = {
                listing: g().object,
                onCancelCallback: g().func
            };
            const h = E
        },
        36078: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(42138),
                a = n(54546),
                l = n(42619),
                o = n(38252),
                i = n(14411),
                s = n(67263),
                c = n(95896),
                u = n(12752),
                m = n(67294);
            const d = function(e) {
                var t = e.products,
                    n = void 0 === t ? [] : t,
                    d = e.associatedProduct,
                    w = e.existingProducts,
                    p = void 0 === w ? [] : w,
                    f = e.onDataChange,
                    g = void 0 === f ? function() {} : f,
                    b = e.onAddedProducts,
                    v = void 0 === b ? function() {} : b,
                    E = m.useState(""),
                    h = (0, a.Z)(E, 2),
                    y = h[0],
                    x = h[1],
                    N = m.useState(p || []),
                    C = (0, a.Z)(N, 2),
                    S = C[0],
                    k = C[1],
                    O = m.useState(!1),
                    P = (0, a.Z)(O, 2),
                    I = P[0],
                    j = P[1],
                    D = (0, m.useRef)(null),
                    T = (0, u.Nr)(y);
                m.useEffect((function() {
                    g({
                        products: S.map((function(e) {
                            return e.id
                        }))
                    }), v(S)
                }), [S]);
                var Z = function(e) {
                    D.current && !D.current.contains(e.target) && j(!1)
                };
                (0, m.useEffect)((function() {
                    return document.addEventListener("mousedown", Z),
                        function() {
                            document.removeEventListener("mousedown", Z)
                        }
                }), []);
                var L = function(e) {
                        e.preventDefault()
                    },
                    A = m.useMemo((function() {
                        if (!n) return [];
                        var e = S.map((function(e) {
                            return e.id
                        }));
                        return n.filter((function(t) {
                            return !(null != e && e.includes(t.id)) && t.productType !== c.Pm.ROLE && (!T || (t.id.toLowerCase().includes(T.trim().toLowerCase()) || t.displayName.toLowerCase().includes(T.trim().toLowerCase())))
                        })) || []
                    }), [S, n, T]);
                return m.createElement(i.JX, {
                    className: "tw-@container/add-products tw-relative tw-z-10"
                }, m.createElement("p", null, "Reward your subscribers by granting them access to exclusive products for the duration of their subscription.", " ", m.createElement("a", {
                    href: "https://creators.vrchat.com/economy/products/paid-roles",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn More")), m.createElement(i.JX, {
                    className: "tw-mb-5",
                    ref: D
                }, m.createElement(i.II, {
                    className: "tw-mb-2",
                    value: y,
                    onChange: function(e) {
                        return x(e.target.value)
                    },
                    onFocus: function() {
                        j(!0)
                    },
                    disabled: S.length >= c._1
                }), m.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, "Up to ", c._1, " products can be added"), I && S.length < c._1 && m.createElement("div", {
                    role: "list",
                    "aria-label": "Available Products List",
                    className: "tw-bottom-[120px] tw-border-2 tw-border-solid tw-rounded-lg tw-border-button-bg tw-bg-[#07242B] tw-p-5 tw-gap-3 tw-h-[350px] tw-overflow-y-auto tw-absolute tw-z-10 tw-w-full sm:tw-top-[135px]"
                }, m.createElement("label", {
                    className: "tw-mb-3"
                }, "Available Products"), A.length ? A.map((function(e) {
                    return m.createElement(m.Fragment, null, m.createElement(i.X2, {
                        key: e.id,
                        product: e,
                        className: "tw-gap-3 tw-flex-wrap"
                    }, m.createElement(i.pw, {
                        imageId: null == e ? void 0 : e.imageId,
                        alt: null == e ? void 0 : e.displayName,
                        fallbackSrc: s,
                        width: 100
                    }), m.createElement(i.JX, {
                        className: "tw-flex-1"
                    }, m.createElement("p", {
                        className: "tw-mb-0 tw-font-bold"
                    }, e.displayName), m.createElement("p", {
                        className: "tw-mb-0 tw-text-placeholder-text"
                    }, e.description)), m.createElement(i.zx, {
                        type: "button",
                        containerClasses: "tw-w-full @sm/add-products:tw-w-[160px] tw-self-center",
                        onClick: function(t) {
                            var n;
                            n = e, k([].concat((0, r.Z)(S), [n])), j(!1), x("")
                        }
                    }, "Add")), m.createElement("hr", {
                        className: "tw-bg-[#07242B] tw-font-medium tw-border-2 tw-border-solid"
                    }))
                })) : m.createElement("div", null, m.createElement("em", null, "No matching products!")))), m.createElement(i.JX, {
                    className: "tw-gap-2 tw-mb-2 tw-min-h-[100px]"
                }, 0 !== S.length && m.createElement("label", null, "Added Products"), 0 !== S.length && S.map((function(e, t) {
                    return m.createElement(i.X2, {
                        key: e.id,
                        draggable: !0,
                        onDragStart: function(e) {
                            return function(e, t) {
                                e.dataTransfer.setData("index", t)
                            }(e, t)
                        },
                        onDragOver: L,
                        onDrop: function(e) {
                            return function(e, t) {
                                var n = e.dataTransfer.getData("index"),
                                    r = Array.from(S),
                                    l = r.splice(n, 1),
                                    o = (0, a.Z)(l, 1)[0];
                                r.splice(t, 0, o), k(r)
                            }(e, t)
                        },
                        className: "tw-px-5 tw-py-3 tw-gap-5 tw-items-center tw-bg-grey tw-rounded-lg"
                    }, m.createElement(i.$1, {
                        icon: o.g$
                    }), m.createElement(i.X2, {
                        className: "tw-items-center tw-gap-2 tw-flex-1"
                    }, m.createElement(i.pw, {
                        imageId: null == e ? void 0 : e.imageId,
                        alt: null == e ? void 0 : e.displayName,
                        fallbackSrc: s,
                        width: 36
                    }), m.createElement("label", {
                        className: "tw-font-bold"
                    }, e.displayName)), (null == e ? void 0 : e.id) !== (null == d ? void 0 : d.id) && m.createElement(i.zx, {
                        type: "button",
                        onClick: function() {
                            return k(S.filter((function(t) {
                                return t.id !== e.id
                            })))
                        },
                        neutral: !0,
                        className: "tw-w-9 tw-h-9"
                    }, m.createElement(i.$1, {
                        icon: l.$
                    })))
                }))))
            }
        },
        44062: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => $
            });
            var r = n(15861),
                a = n(4942),
                l = n(54546),
                o = n(76553),
                i = n(6811),
                s = n(64687),
                c = n.n(s),
                u = n(64258),
                m = n(14411),
                d = n(98185),
                w = n(22202),
                p = n(16869),
                f = n(67978),
                g = n(45697),
                b = n.n(g),
                v = n(67294),
                E = n(32981),
                h = n(89250),
                y = n(79655),
                x = n(36078),
                N = n(45987),
                C = n(41145),
                S = n(62228),
                k = n(78076),
                O = n(67263),
                P = n(93261),
                I = ["file", "imageId"],
                j = ["file"],
                D = ["imageId"];

            function T(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var L = function(e) {
                var t = e.listing,
                    n = e.onDataChange,
                    r = void 0 === n ? function() {} : n,
                    o = e.onEditProducts,
                    i = void 0 === o ? function() {} : o,
                    s = e.productList,
                    c = v.useState({}),
                    u = (0, l.Z)(c, 2),
                    w = u[0],
                    p = u[1],
                    f = v.useState(!1),
                    g = (0, l.Z)(f, 2),
                    b = g[0],
                    E = g[1],
                    h = v.useState((null == t ? void 0 : t.file) || (null == t ? void 0 : t.imageId) || null),
                    y = (0, l.Z)(h, 2),
                    x = y[0],
                    T = y[1],
                    L = v.useState(!1),
                    A = (0, l.Z)(L, 2),
                    X = A[0],
                    F = A[1],
                    z = s || [],
                    J = (null == t ? void 0 : t.displayName) || "",
                    R = v.useState(J),
                    G = (0, l.Z)(R, 2),
                    B = G[0],
                    M = G[1],
                    U = (null == t ? void 0 : t.description) || "",
                    q = v.useState(U),
                    $ = (0, l.Z)(q, 2),
                    V = $[0],
                    _ = $[1],
                    W = (0, P.r5)({
                        groupId: t.groupId
                    }, {
                        skip: !t.groupId
                    }),
                    Y = W.data,
                    H = W.isFetching,
                    K = W.isSuccess,
                    Q = W.isError;
                v.useEffect((function() {
                    r(w)
                }), [w]);
                var ee = function(e) {
                    var t = e.target,
                        n = t.name,
                        r = t.value;
                    switch (p((function(e) {
                            return Z(Z({}, e), {}, (0, a.Z)({}, n, r))
                        })), n) {
                        case "displayName":
                            M(r);
                            break;
                        case "description":
                            _(r);
                            break;
                        case "priceTokens":
                            setPriceTokens(r);
                            break;
                        case "listingVariants":
                            setListingVariants(r)
                    }
                };
                return v.createElement(v.Fragment, null, v.createElement(m.JX, {
                    className: "tw-@container/subInfo tw-gap-4"
                }, v.createElement(m.JX, {
                    className: "@sm/subInfo:tw-flex-row tw-gap-4"
                }, v.createElement("button", {
                    type: "button",
                    onClick: function() {
                        E(!0)
                    },
                    className: "tw-bg-transparent tw-border-0 tw-p-0 tw-rounded tw-relative tw-items-center tw-justify-center tw-flex"
                }, !x && v.createElement(m.zx, {
                    containerClasses: "tw-rounded tw-absolute tw-flex-1"
                }, v.createElement(m.$1, {
                    icon: k.Vm,
                    className: "tw-mr-2"
                }), v.createElement("span", null, "Upload Thumbnail")), v.createElement(m.pw, {
                    imageId: x,
                    fitToCover: !0,
                    alt: "Subscription Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                })), v.createElement(m.JX, {
                    className: "tw-gap-5 flex-1"
                }, v.createElement(m.JX, null, v.createElement("label", {
                    htmlFor: "displayName"
                }, "Display Name"), v.createElement(m.II, {
                    name: "displayName",
                    type: "text",
                    onChange: ee,
                    maxLength: 64,
                    value: B
                }), v.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, B.length, "/64")), v.createElement(m.JX, null, v.createElement("label", {
                    htmlFor: "description"
                }, "Description"), v.createElement(m.gx, {
                    name: "description",
                    onChange: ee,
                    value: V,
                    maxLength: 256,
                    inputClassName: "tw-h-[135px]"
                }), v.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, V.length, "/256")))), v.createElement(m.JX, null, v.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2"
                }, "Associated Group"), v.createElement(d.Z, {
                    loading: H
                }, K && v.createElement(m.X2, null, v.createElement(m.pw, {
                    imageId: null == Y ? void 0 : Y.imageId,
                    alt: null == Y ? void 0 : Y.displayName,
                    fallbackSrc: O,
                    fitToCover: !0,
                    className: "tw-h-7 tw-w-7 tw-mr-2"
                }), v.createElement("p", {
                    className: "tw-font-bold"
                }, null == Y ? void 0 : Y.name)), Q && v.createElement("div", null, v.createElement("p", {
                    className: "tw-font-bold"
                }, t.groupId)))), v.createElement(m.JX, null, v.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2"
                }, "Associated Products ", z.length > 0 && "(".concat(z.length, ")")), 0 === z.length && v.createElement("p", {
                    className: "tw-text-placeholder-text tw-mb-0"
                }, "None"), z.length > 0 && v.createElement(m.JX, null, v.createElement("div", {
                    className: "tw-gap-2 tw-w-full tw-grid tw-grid-cols-2 tw-mb-3"
                }, (X ? z : z.slice(0, 6)).map((function(e) {
                    return v.createElement(m.X2, {
                        key: e.id,
                        className: "tw-items-center tw-gap-2 tw-flex-1"
                    }, v.createElement(m.pw, {
                        imageId: null == e ? void 0 : e.imageId,
                        alt: null == e ? void 0 : e.displayName,
                        fallbackSrc: O,
                        fitToCover: !0,
                        className: "tw-h-7 tw-w-7"
                    }), v.createElement("p", {
                        className: "tw-font-bold tw-mb-0"
                    }, null == e ? void 0 : e.displayName, " (", v.createElement("span", {
                        className: "tw-capitalize"
                    }, null == e ? void 0 : e.productType), ")"))
                }))), z.length > 6 && v.createElement(m.X2, {
                    className: "tw-items-center tw-gap-2"
                }, v.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return F(!X)
                    },
                    className: "tw-mb-0 tw-appearance-none tw-bg-transparent tw-border-none tw-text-light-grey"
                }, X ? "Show Less " : "Show all products ", X ? v.createElement(m.$1, {
                    icon: S.mT
                }) : v.createElement(m.$1, {
                    icon: C.pt
                }))))), v.createElement(m.zx, {
                    type: "button",
                    onClick: i,
                    className: "tw-w-full",
                    containerClasses: "tw-max-w-[210px]"
                }, "Manage Products")), v.createElement(m.m6, {
                    preset: "subscription",
                    image: x,
                    isOpen: b,
                    onClose: function() {
                        return E(!1)
                    },
                    confirmCallback: function(e) {
                        var t = e.fileId,
                            n = void 0 === t ? null : t,
                            r = e.fileBlob,
                            a = void 0 === r ? null : r,
                            l = null !== n;
                        return null === n && null === a ? (T(null), void p((function(e) {
                            e.file, e.imageId;
                            return (0, N.Z)(e, I)
                        }))) : l ? (T(n), void p((function(e) {
                            e.file;
                            var t = (0, N.Z)(e, j);
                            return Z({
                                imageId: n
                            }, t)
                        }))) : (T(a), void p((function(e) {
                            e.imageId;
                            var t = (0, N.Z)(e, D);
                            return Z({
                                file: a
                            }, t)
                        })))
                    },
                    cancelCallBack: function() {
                        return E(!1)
                    }
                }))
            };
            L.propTypes = {
                listing: b().object.isRequired,
                onDataChange: b().func
            };
            const A = L;
            var X = n(95896),
                F = n(25062),
                z = ["currentUnitPriceTokens"];

            function J(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? J(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var G = function(e) {
                var t = e.listing,
                    n = e.onDataChange,
                    r = void 0 === n ? function() {} : n,
                    o = e.validateVariants,
                    i = void 0 === o ? function() {} : o;
                if (!t) return null;
                var s = v.useState({}),
                    c = (0, l.Z)(s, 2),
                    u = c[0],
                    d = c[1],
                    w = (null == t ? void 0 : t.priceTokens) || ((null == t ? void 0 : t.productType) === X.Pm.LISTING ? X.zD : void 0),
                    p = v.useState(w),
                    f = (0, l.Z)(p, 2),
                    g = f[0],
                    b = f[1],
                    E = (null == t ? void 0 : t.listingVariants) || [],
                    h = v.useState(X.PN.map((function(e) {
                        return E.find((function(t) {
                            return t.quantity === e
                        })) || {
                            quantity: e
                        }
                    }))),
                    y = (0, l.Z)(h, 2),
                    x = y[0],
                    C = y[1],
                    S = (null == t ? void 0 : t.duration) || 1,
                    k = v.useState(S),
                    O = (0, l.Z)(k, 2),
                    P = O[0],
                    I = (O[1], (null == t ? void 0 : t.durationType) || "months"),
                    j = v.useState(I),
                    D = (0, l.Z)(j, 2),
                    T = D[0];
                D[1];
                v.useEffect((function() {
                    r(u)
                }), [u]), v.useEffect((function() {
                    d((function(e) {
                        return R(R({}, e), {}, {
                            listingVariants: null == x ? void 0 : x.filter((function(e) {
                                return !!e.unitPriceTokens
                            })).map((function(e) {
                                var t = e.currentUnitPriceTokens,
                                    n = (0, N.Z)(e, z);
                                return R(R({
                                    unitPriceTokens: parseInt(t, 10)
                                }, n), {}, {
                                    sellerVariant: !0
                                })
                            }))
                        })
                    }))
                }), [x]);
                (0, v.useEffect)((function() {
                    var e = 0 === x.length || (null == Z ? void 0 : Z.every((function(e) {
                        return e
                    })));
                    i(e)
                }), [Z, x]);
                var Z = v.useMemo((function() {
                        return x.map((function(e, t) {
                            var n, r = e.quantity,
                                a = e.unitPriceTokens;
                            if (X.PN[t] !== r) return !1;
                            if (void 0 === a) return !0;
                            if (!/^\d*$/.test(a)) return !1;
                            var l = (null === (n = x.slice(0, t).findLast((function(e) {
                                    return e.unitPriceTokens
                                }))) || void 0 === n ? void 0 : n.unitPriceTokens) || g,
                                o = parseInt(l, 10),
                                i = parseInt(a, 10);
                            return i >= X.zD && i <= o
                        }))
                    }), [x, g]),
                    L = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x;
                        C(e.map((function(t, n) {
                            var r, a = (null === (r = e.slice(0, n).findLast((function(e) {
                                return e.unitPriceTokens
                            }))) || void 0 === r ? void 0 : r.unitPriceTokens) || g;
                            return parseInt(t.unitPriceTokens, 10) === parseInt(a, 10) ? R(R({}, t), {}, {
                                unitPriceTokens: void 0
                            }) : t
                        })))
                    };
                v.useEffect(L, [g]);
                return v.createElement(m.JX, {
                    className: "tw-@container/subPricing tw-gap-5"
                }, v.createElement(m.JX, {
                    className: "tw-gap-2"
                }, v.createElement(m.X2, {
                    className: "tw-items-center tw-gap-2 tw-bg-grey tw-px-3 tw-py-2 tw-rounded-lg"
                }, v.createElement("label", {
                    htmlFor: "priceTokens",
                    className: "tw-text-nowrap"
                }, "1 month at"), v.createElement(m.II, {
                    name: "priceTokens",
                    type: "number",
                    className: "tw-w-[150px]",
                    onChange: function(e) {
                        var t = e.target,
                            n = t.name,
                            r = t.value;
                        switch (d((function(e) {
                                return R(R({}, e), {}, (0, a.Z)({}, n, r))
                            })), n) {
                            case "priceTokens":
                                b(r);
                                break;
                            case "listingVariants":
                                C(r)
                        }
                    },
                    value: g,
                    min: X.zD,
                    max: X._C
                })), x.map((function(e, t) {
                    var n, r = e.quantity,
                        a = e.unitPriceTokens,
                        l = "listingVariants[".concat(t, "]_unitPriceTokens"),
                        o = (null === (n = x.slice(0, t).findLast((function(e) {
                            return e.unitPriceTokens
                        }))) || void 0 === n ? void 0 : n.unitPriceTokens) || g,
                        i = null != a ? a : o,
                        s = parseInt(g, 10),
                        c = parseInt(o, 10),
                        u = parseInt(i, 10);
                    return v.createElement(m.JX, {
                        key: l,
                        className: "tw-justify-center tw-bg-grey tw-gap-2 tw-px-3 tw-py-2 tw-rounded-lg"
                    }, v.createElement(m.X2, {
                        className: "tw-items-center"
                    }, v.createElement("label", {
                        htmlFor: l,
                        className: "tw-whitespace-nowrap tw-mr-2"
                    }, "".concat((r * P).toLocaleString(), " ").concat(r * P == 1 ? T.replace(/s$/, "") : T, " at ")), v.createElement(m.X2, {
                        className: "tw-items-center"
                    }, v.createElement(m.II, {
                        id: l,
                        type: "number",
                        className: "tw-w-[150px] tw-mr-2",
                        min: X.zD,
                        max: o,
                        size: X._C.toString(10).length + 1,
                        value: i,
                        invalid: !0 !== Z[t],
                        onChange: function(e) {
                            return function(e) {
                                var t = e.index,
                                    n = e.unitPriceTokens,
                                    r = x.map((function(e) {
                                        return R({}, e)
                                    }));
                                r[t].unitPriceTokens = parseInt(n, 10), L(r)
                            }({
                                index: t,
                                unitPriceTokens: e.target.value.slice(0, X._C.toString(10).length)
                            })
                        }
                    }), v.createElement("label", {
                        htmlFor: l
                    }, v.createElement(m.b5, {
                        className: "tw-mx-0"
                    }), function(e) {
                        var t = e.duration,
                            n = e.durationType;
                        if ("forevers" === n) return null;
                        var r = 1 === t ? n.replace(/s$/, "") : "".concat(t, " ").concat(n);
                        return "/".concat(r)
                    }({
                        duration: P,
                        durationType: T
                    }), ", ")), v.createElement("label", {
                        htmlFor: l
                    }, v.createElement("strong", null, "Total"), " ", v.createElement(m.b5, null), (r * P * u || 0).toLocaleString(), u < s && v.createElement(v.Fragment, null, " ", v.createElement(F.Z, {
                        color: "success"
                    }, Math.floor(100 - u / s * 100), "% off")), u === c && v.createElement(v.Fragment, null, " ", v.createElement(F.Z, {
                        className: "tw-text-[#DADADA] tw-bg-gray-500",
                        title: "This bundle is using the same unit price as the ".concat(0 === t ? "standard price" : "previous bundle", ".")
                    }, "Max Price")))), !0 !== Z[t] && v.createElement("div", null, v.createElement("span", {
                        className: "tw-text-red"
                    }, "Must be a whole number between ", v.createElement(m.b5, null), X.zD.toLocaleString(), " and the ", 0 === t ? "standard" : "previous bundle", " unit price", !Number.isNaN(c) && v.createElement(v.Fragment, null, " ", "of ", v.createElement(m.b5, null), (c || 0).toLocaleString()), ".")))
                })), v.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, "Set pricing for your monthly subscription plans, and consider offering discounts to attract more subscribers by reducing the monthly rates.")))
            };
            G.propTypes = {
                listing: b().object.isRequired,
                onDataChange: b().func
            };
            const B = G;

            function M(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var q = function(e) {
                e.store;
                var t = e.listingId,
                    n = e.onClose,
                    a = void 0 === n ? function() {} : n,
                    s = (0, E.I0)(),
                    g = ((0, h.s0)(), (0, w.XC)().data),
                    b = (0, v.useState)(0),
                    N = (0, l.Z)(b, 2),
                    C = N[0],
                    S = N[1],
                    k = (0, v.useState)(null),
                    O = (0, l.Z)(k, 2),
                    P = O[0],
                    I = O[1],
                    j = (0, v.useState)(null),
                    D = (0, l.Z)(j, 2),
                    T = D[0],
                    Z = D[1],
                    L = (0, v.useState)(!1),
                    X = (0, l.Z)(L, 2),
                    F = X[0],
                    z = X[1],
                    J = (0, v.useState)(null),
                    R = (0, l.Z)(J, 2),
                    G = R[0],
                    M = R[1],
                    q = (0, v.useState)([]),
                    $ = (0, l.Z)(q, 2),
                    V = $[0],
                    _ = $[1],
                    W = (0, v.useState)(!0),
                    Y = (0, l.Z)(W, 2),
                    H = Y[0],
                    K = Y[1],
                    Q = (0, p.mr)({
                        listingId: t,
                        hydrateProducts: !0
                    }),
                    ee = Q.data,
                    te = Q.isLoading,
                    ne = (Q.isError, Q.error, (0, p.Ij)()),
                    re = (0, l.Z)(ne, 2),
                    ae = re[0],
                    le = re[1],
                    oe = (le.isLoading, le.isSuccess, le.isError, le.error, (0, f.As)()),
                    ie = (0, l.Z)(oe, 2),
                    se = ie[0],
                    ce = ie[1],
                    ue = ce.data,
                    me = ce.isLoading;
                ce.isError, ce.error;
                (0, v.useEffect)((function() {
                    if (ee) {
                        if (ee.hydratedProducts) {
                            var e = ee.products.find((function(e) {
                                return e.groupRoleId
                            }));
                            M(e), _(ee.products)
                        }
                        I(ee)
                    }
                }), [ee, te]);
                var de = function(e) {
                        I(U(U({}, P), e)), Z(U(U({}, T), e))
                    },
                    we = function() {
                        var e = (0, r.Z)(c().mark((function e() {
                            var t, n, r;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = function() {
                                            s((0, u.d)({
                                                title: "Listing updated successfully!",
                                                icon: i.f8,
                                                message: "Your listing has been updated successfully!",
                                                color: "success",
                                                timeout: 3e3
                                            })), a()
                                        }, e.prev = 1, e.next = 4, ae(U({
                                            listingId: ee.id
                                        }, T)).unwrap();
                                    case 4:
                                        t(), e.next = 11;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), s((0, u.d)({
                                            title: "Failed to update listing!",
                                            icon: o.eH,
                                            message: null !== (n = null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 7]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    pe = (0, v.useMemo)((function() {
                        var e = null == T || !T.displayName || T.displayName.length >= 3,
                            t = "" !== (null == T ? void 0 : T.displayName),
                            n = null == T || !T.priceTokens || T.priceTokens >= 100 && T.priceTokens <= 1e4 && Number.isInteger(parseFloat(T.priceTokens)),
                            r = null == T || !T.products || T.products.length > 0;
                        return e && t && n && r && H
                    }), [T, H]),
                    fe = te || !P || me;
                return v.createElement(m.JX, {
                    className: "tw-w-full tw-relative"
                }, fe && v.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, v.createElement(d.Z, {
                    loading: fe
                })), !fe && !F && v.createElement(v.Fragment, null, v.createElement("div", {
                    className: "tw-w-full tw-bg-black tw-text-light-grey tw-rounded-lg tw-px-3 tw-py-4 tw-mb-3"
                }, v.createElement("p", {
                    className: "tw-mb-0 tw-text-sm"
                }, "Manage this role's permissions and requirements from your", " ", v.createElement("strong", null, v.createElement(y.rU, {
                    className: "tw-text-lighter-grey",
                    to: null != P && P.groupId && null != G && G.groupRoleId ? "/home/group/".concat(P.groupId, "/settings/roles/").concat(G.groupRoleId) : "/home/groups"
                }, "Group")), " ", "settings")), v.createElement(m.X2, {
                    className: "tw-gap-5 tw-mb-6"
                }, v.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return S(0)
                    },
                    className: "tw-bg-transparent tw-py-2 tw-border-0 tw-border-b-2 tw-border-solid ".concat(0 === C ? "tw-border-teal-accent" : "tw-border-transparent")
                }, "Overview"), v.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return S(1)
                    },
                    className: "tw-bg-transparent tw-py-2 tw-border-0 tw-border-b-2 tw-border-solid ".concat(1 === C ? "tw-border-solid tw-border-teal-accent" : "tw-border-transparent")
                }, "Pricing")), v.createElement("div", {
                    className: "tw-w-full tw-relative"
                }, 0 === C && v.createElement(A, {
                    listing: P,
                    onDataChange: de,
                    onEditProducts: function() {
                        se({
                            userId: g.id
                        }), z(!0)
                    },
                    productList: V
                }), 1 === C && v.createElement(B, {
                    listing: P,
                    onDataChange: de,
                    validateVariants: function(e) {
                        return K(e)
                    }
                })), v.createElement("div", {
                    className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                }, v.createElement(m.zx, {
                    neutral: !0,
                    type: "button",
                    onClick: a,
                    containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                }, "Cancel"), v.createElement(m.zx, {
                    type: "button",
                    onClick: we,
                    disabled: !pe,
                    containerClasses: "sm:tw-max-w-[240px] tw-flex-1"
                }, "Save"))), !fe && F && v.createElement(m.JX, null, v.createElement(x.Z, {
                    products: ue,
                    onDataChange: de,
                    associatedProduct: G,
                    existingProducts: V,
                    onAddedProducts: function(e) {
                        return _(e)
                    }
                }), v.createElement("div", {
                    className: "tw-w-full tw-flex tw-justify-center"
                }, v.createElement(m.zx, {
                    type: "button",
                    onClick: function() {
                        return z(!1)
                    },
                    containerClasses: "tw-max-w-[170px] tw-w-full tw-mt-5"
                }, "Done"))))
            };
            q.propTypes = {
                store: b().object,
                listing: b().object,
                onClose: b().func
            };
            const $ = q
        },
        18529: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => ge
            });
            var r = n(15861),
                a = n(45987),
                l = n(4942),
                o = n(54546),
                i = n(76553),
                s = n(64687),
                c = n.n(s),
                u = n(64258),
                m = n(14411),
                d = n(63221),
                w = n(95896),
                p = n(22202),
                f = n(93261),
                g = n(16869),
                b = n(67978),
                v = n(68157),
                E = n(67294),
                h = n(32981),
                y = n(89250),
                x = n(36078),
                N = n(82414),
                C = n(46357),
                S = n(17319),
                k = n(34233),
                O = n(7371);

            function P(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(n), !0).forEach((function(t) {
                        (0, l.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const j = function(e) {
                var t, n = e.iconChangeCallback,
                    r = void 0 === n ? function() {} : n,
                    a = e.bannerChangeCallback,
                    l = void 0 === a ? function() {} : a,
                    i = e.groupData,
                    s = e.shortCodePlaceholder,
                    c = void 0 === s ? "" : s,
                    u = E.useState(!1),
                    d = (0, o.Z)(u, 2),
                    w = d[0],
                    p = d[1],
                    f = E.useState({
                        currentIcon: (null == i ? void 0 : i.icon) || (null == i ? void 0 : i.iconId) || null,
                        currentBanner: (null == i ? void 0 : i.banner) || (null == i ? void 0 : i.bannerId) || null
                    }),
                    g = (0, o.Z)(f, 2),
                    b = g[0],
                    v = g[1],
                    h = E.useState(""),
                    y = (0, o.Z)(h, 2),
                    x = y[0],
                    N = y[1];
                return E.createElement("div", {
                    className: "tw-p-3 tw-pb-5 tw-rounded-lg tw-min-w-[200px] tw-bg-[#252A30]"
                }, E.createElement("div", {
                    className: "tw-relative tw-mb-2"
                }, E.createElement(m.zx, {
                    onClick: function() {
                        N("groupBanner"), p(!0)
                    },
                    className: "tw-rounded-full",
                    containerClasses: "tw-rounded-full tw-absolute tw-w-9 tw-h-9 tw-right-3 tw-top-3"
                }, E.createElement(m.$1, {
                    icon: O.Iw
                })), E.createElement(m.pw, {
                    imageId: b.currentBanner,
                    fitToCover: !0,
                    alt: "Group Banner",
                    className: "tw-w-full tw-max-h-[115px]"
                })), E.createElement(m.JX, {
                    className: "sm:tw-flex-row"
                }, E.createElement("div", {
                    className: "tw-relative tw-w-[100px] tw-h-[100px] tw-aspect-square tw--mt-[50px] tw-mx-auto sm:tw-ml-7 sm:tw-mr-3"
                }, E.createElement(m.zx, {
                    onClick: function() {
                        N("groupIcon"), p(!0)
                    },
                    className: "tw-rounded-full",
                    containerClasses: "tw-rounded-full tw-absolute tw-w-9 tw-h-9 tw-right-0 tw-bottom-0"
                }, E.createElement(m.$1, {
                    icon: k._j
                })), E.createElement(m.pw, {
                    imageId: b.currentIcon,
                    fitToCover: !0,
                    alt: "Group Banner",
                    className: "tw-w-[100px] tw-rounded-full tw-aspect-square tw-h-[100px]"
                })), E.createElement(m.JX, null, E.createElement("h4", {
                    className: "tw-m-0"
                }, i.name), E.createElement(m.X2, {
                    className: "tw-gap-2"
                }, E.createElement("p", {
                    className: "tw-m-0"
                }, E.createElement(m.$1, {
                    icon: S.di,
                    color: "#737F8D"
                }), " 0"), E.createElement("p", {
                    className: "tw-m-0"
                }, E.createElement(m.$1, {
                    icon: C.FV,
                    color: "#FFFFFF"
                }), " 0"), E.createElement("p", {
                    className: "tw-m-0"
                }, "" !== i.shortCode ? i.shortCode : c, ".0000")))), E.createElement(m.m6, {
                    preset: x,
                    isOpen: w,
                    onClose: function() {
                        return p(!1)
                    },
                    confirmCallback: (t = x, function(e) {
                        var n = e.fileId,
                            a = void 0 === n ? null : n,
                            o = e.fileBlob,
                            i = void 0 === o ? null : o;
                        if ("groupBanner" === t || "groupIcon" === t) {
                            if (null === a && null === i) {
                                var s = "groupBanner" === t ? {
                                    currentBanner: null
                                } : {
                                    currentIcon: null
                                };
                                return v((function(e) {
                                    return I(I({}, e), s)
                                })), void("groupBanner" === t ? l : r)(null)
                            }
                            if (null !== a) {
                                var c = "groupBanner" === t ? {
                                    currentBanner: a
                                } : {
                                    currentIcon: a
                                };
                                return v((function(e) {
                                    return I(I({}, e), c)
                                })), void("groupBanner" === t ? l : r)(a)
                            }
                            var u = "groupBanner" === t ? {
                                currentBanner: i
                            } : {
                                currentIcon: i
                            };
                            v((function(e) {
                                return I(I({}, e), u)
                            })), ("groupBanner" === t ? l : r)(i)
                        }
                    }),
                    cancelCallBack: function() {
                        return p(!1)
                    }
                }))
            };

            function D(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? D(Object(n), !0).forEach((function(t) {
                        (0, l.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const Z = function(e) {
                var t = e.currentGroupData,
                    n = void 0 === t ? null : t,
                    r = e.onGroupDataChange,
                    a = void 0 === r ? function() {} : r,
                    i = e.generateShortCodeFromName,
                    s = void 0 === i ? function() {} : i,
                    c = e.shortCodePlaceholder,
                    u = void 0 === c ? null : c,
                    d = E.useState((null == n ? void 0 : n.banner) || (null == n ? void 0 : n.bannerId) || null),
                    w = (0, o.Z)(d, 2),
                    p = (w[0], w[1], E.useState((null == n ? void 0 : n.icon) || (null == n ? void 0 : n.iconId) || null)),
                    f = (0, o.Z)(p, 2),
                    g = (f[0], f[1], E.useState({
                        icon: (null == n ? void 0 : n.icon) || null,
                        banner: (null == n ? void 0 : n.banner) || null,
                        iconId: (null == n ? void 0 : n.iconId) || null,
                        bannerId: (null == n ? void 0 : n.bannerId) || null,
                        shortCode: (null == n ? void 0 : n.shortCode) || "",
                        name: (null == n ? void 0 : n.name) || "",
                        description: (null == n ? void 0 : n.description) || ""
                    })),
                    b = (0, o.Z)(g, 2),
                    v = b[0],
                    h = b[1],
                    y = E.useCallback((function(e, t) {
                        var n = "string" == typeof t;
                        h((function(r) {
                            var o, i = T(T({}, r), {}, (o = {}, (0, l.Z)(o, "".concat(e, "Id"), n ? t : null), (0, l.Z)(o, e, n ? null : t), o));
                            return a(i), i
                        }))
                    }), [a]),
                    x = function(e) {
                        var t = e.target,
                            n = t.name,
                            r = t.value;
                        h((function(e) {
                            var t = T(T({}, e), {}, (0, l.Z)({}, n, "shortCode" === n ? r.toUpperCase() : r));
                            return a(t), t
                        }))
                    };
                return E.createElement(m.JX, {
                    className: "tw-gap-5 tw-mb-8"
                }, E.createElement(m.JX, null, E.createElement("label", {
                    forHtml: "name"
                }, "Group Name"), E.createElement(m.II, {
                    name: "name",
                    type: "text",
                    onChange: function(e) {
                        x(e), s(e)
                    },
                    maxLength: 64,
                    value: v.name
                }), E.createElement("small", null, v.name.length, "/64")), E.createElement(m.JX, null, E.createElement("label", {
                    forHtml: "shortCode",
                    className: "tw-flex tw-flex-row"
                }, "Group Unique ID", E.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1"
                }, E.createElement(m.$1, {
                    icon: N.sq,
                    className: "tw-text-light-grey"
                }), E.createElement("span", {
                    className: "tw-pointer-events-none tw-z-50 tw-absolute tw-top-[-4rem] tw-left-[-7rem] sm:tw--top-7 sm:tw-left-5 tw-w-[240px] tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50 tw-opacity-0 tw-shadow tw-transition-opacity group-hover:tw-opacity-100"
                }, "This will help other users find your group or differentiate it from similar named ones."))), E.createElement(m.II, {
                    name: "shortCode",
                    type: "text",
                    onChange: x,
                    maxLength: 6,
                    min: 3,
                    value: v.shortCode,
                    placeholder: u
                }), E.createElement("small", null, "Your Group's identifier must be 3-6 characters and will be followed with a discriminator.", v.name.length >= 3 && "If left blank, ".concat(u, " will be your identifier."))), E.createElement(m.JX, null, E.createElement("label", {
                    forHtml: "description"
                }, "Description"), E.createElement(m.gx, {
                    name: "description",
                    onChange: x,
                    maxLength: 1024,
                    value: v.description
                }), E.createElement("small", null, v.description.length, "/1024 characters")), E.createElement("div", {
                    className: "tw-relative tw-rounded-lg"
                }, E.createElement("label", {
                    className: "tw-mb-3"
                }, "Add Group Icon and Banner Image"), E.createElement(j, {
                    shortCodePlaceholder: u,
                    iconChangeCallback: function(e) {
                        return y("icon", e)
                    },
                    bannerChangeCallback: function(e) {
                        return y("banner", e)
                    },
                    groupData: v
                })))
            };
            var L = n(79655);
            const A = function(e) {
                var t = e.group,
                    n = void 0 === t ? {} : t;
                return E.createElement(m.JX, {
                    className: "tw-items-center tw-justify-center tw-mb-8 tw-text-center"
                }, E.createElement(m.pw, {
                    className: "tw-mb-5 tw-rounded-full",
                    imageId: null == n ? void 0 : n.iconId,
                    alt: null == n ? void 0 : n.name,
                    fitToCover: !0
                }), E.createElement("h4", null, null == n ? void 0 : n.name, " has been created!"), E.createElement("p", null, "You can modify, add members and customize your group from the ", E.createElement(L.rU, {
                    to: "/home/groups"
                }, "Groups"), " section."), E.createElement("p", {
                    className: "tw-font-bold tw-mb-0"
                }, "Subscriptions need to be linked to a subscription role."))
            };
            var X = n(11298),
                F = n(66007),
                z = n(81116),
                J = n(81511),
                R = n(4241),
                G = n(6811),
                B = n(83505);

            function M(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(n), !0).forEach((function(t) {
                        (0, l.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const q = function(e) {
                var t = e.onDataChange,
                    n = void 0 === t ? function() {} : t,
                    r = (0, E.useState)({
                        joinState: d.wN.REQUEST,
                        privacy: d.TW.DEFAULT
                    }),
                    a = (0, o.Z)(r, 2),
                    l = a[0],
                    i = a[1];
                (0, E.useEffect)((function() {
                    n(l)
                }), [l]);
                var s = function(e) {
                        i(U(U({}, l), {}, {
                            joinState: e
                        }))
                    },
                    c = function(e) {
                        i(U(U({}, l), {}, {
                            privacy: e
                        }))
                    },
                    u = function(e) {
                        return e ? E.createElement(m.$1, {
                            icon: G.f8,
                            color: "#1FD1ED",
                            width: "24",
                            className: "tw-absolute tw-top-3 tw-right-3"
                        }) : E.createElement(m.$1, {
                            icon: S.di,
                            color: "#2D363F",
                            width: "24",
                            className: "tw-absolute tw-top-3 tw-right-3"
                        })
                    };
                return E.createElement(m.JX, {
                    className: "tw-@container tw-gap-5 tw-mb-8"
                }, E.createElement(m.JX, null, E.createElement("p", null, "How can people join your Group?"), E.createElement(m.JX, {
                    className: "tw-flex-1 tw-justify-evenly tw-gap-5 @sm:tw-flex-row"
                }, E.createElement(m.JX, {
                    onClick: function() {
                        return s(d.wN.OPEN)
                    },
                    role: "button",
                    className: (0, B.cx)("tw-relative tw-px-5 tw-py-8 tw-text-center tw-items-center tw-bg-grey tw-border-2 tw-border-solid tw-rounded-lg hover:tw-border-button-border", l.joinState === d.wN.OPEN ? "tw-border-button-border" : "tw-border-hr-line-color")
                }, u(l.joinState === d.wN.OPEN), E.createElement(m.$1, {
                    icon: R.FK,
                    width: "48",
                    className: "tw-mb-3"
                }), E.createElement("p", {
                    className: "tw-mb-0 tw-font-bold"
                }, "Free Join"), E.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Anyone can join your group")), E.createElement(m.JX, {
                    onClick: function() {
                        return s(d.wN.REQUEST)
                    },
                    role: "button",
                    className: (0, B.cx)("tw-relative tw-flex-1 tw-px-5 tw-py-8 tw-text-center tw-items-center tw-bg-grey tw-border-2 tw-border-solid tw-rounded-lg hover:tw-border-button-border", l.joinState === d.wN.REQUEST ? "tw-border-button-border" : "tw-border-hr-line-color")
                }, u(l.joinState === d.wN.REQUEST), E.createElement(m.$1, {
                    icon: J.FU,
                    width: "48",
                    className: "tw-mb-3"
                }), E.createElement("p", {
                    className: "tw-mb-0 tw-font-bold"
                }, "Request to Join"), E.createElement("small", {
                    className: "tw-text-light-grey"
                }, "New members must reuqest to join")), E.createElement(m.JX, {
                    onClick: function() {
                        return s(d.wN.INVITE)
                    },
                    role: "button",
                    className: (0, B.cx)("tw-relative tw-flex-1 tw-px-5 tw-py-8 tw-text-center tw-items-center tw-bg-grey tw-border-2 tw-border-solid tw-rounded-lg hover:tw-border-button-border", l.joinState === d.wN.INVITE ? "tw-border-button-border" : "tw-border-hr-line-color")
                }, u(l.joinState === d.wN.INVITE), E.createElement(m.$1, {
                    icon: z.FJ,
                    width: "48",
                    className: "tw-mb-3"
                }), E.createElement("p", {
                    className: "tw-mb-0 tw-font-bold"
                }, "Invite-Only"), E.createElement("small", {
                    className: "tw-text-light-grey"
                }, "New members may be invited by anyone with the right permissions")))), E.createElement(m.JX, null, E.createElement("p", {
                    className: "tw-mb-0"
                }, "How visible is your Group?"), E.createElement("small", {
                    className: "tw-text-light-grey tw-mb-3"
                }, "Choose how you'd like to allow people to discover your Group"), E.createElement(m.JX, {
                    className: "@sm:tw-flex-row tw-gap-5 tw-mb-3"
                }, E.createElement(m.X2, {
                    onClick: function() {
                        return c(d.TW.DEFAULT)
                    },
                    role: "button",
                    className: (0, B.cx)("tw-relative tw-min-w-[200px] tw-gap-6 tw-p-5 tw-items-center tw-bg-grey tw-border-2 tw-border-solid tw-rounded-lg hover:tw-border-button-border", l.privacy === d.TW.DEFAULT ? "tw-border-button-border" : "tw-border-hr-line-color")
                }, u(l.privacy === d.TW.DEFAULT), E.createElement(m.$1, {
                    icon: F.KC,
                    width: "48"
                }), E.createElement(m.JX, null, E.createElement("p", {
                    className: "tw-mb-0 tw-font-bold"
                }, "Public"), E.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Members can choose to advertise the group on their profile"))), E.createElement(m.X2, {
                    onClick: function() {
                        return c(d.TW.PRIVATE)
                    },
                    role: "button",
                    className: (0, B.cx)("tw-relative tw-min-w-[200px] tw-gap-6 tw-p-5 tw-items-center tw-bg-grey tw-border-2 tw-border-solid tw-rounded-lg hover:tw-border-button-border", l.privacy === d.TW.PRIVATE ? "tw-border-button-border" : "tw-border-hr-line-color")
                }, u(l.privacy === d.TW.PRIVATE), E.createElement(m.$1, {
                    icon: X.BC,
                    width: "48"
                }), E.createElement(m.JX, null, E.createElement("p", {
                    className: "tw-mb-0 tw-font-bold"
                }, "Private"), E.createElement("small", {
                    className: "tw-text-light-grey"
                }, "The group cannot be advertised or displayed by members")))), E.createElement("small", {
                    className: "tw-text-orange"
                }, "Note that once you've set up a Group as Public or Private, it cannot be changed.")))
            };

            function $(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function V(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $(Object(n), !0).forEach((function(t) {
                        (0, l.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var _ = {
                name: "",
                description: ""
            };
            const W = function(e) {
                var t = e.onDataChange,
                    n = void 0 === t ? function() {} : t,
                    r = e.role,
                    a = void 0 === r ? _ : r,
                    i = E.useState(a),
                    s = (0, o.Z)(i, 2),
                    c = s[0],
                    u = s[1],
                    d = function(e) {
                        var t = e.target,
                            r = t.name,
                            a = t.value;
                        u((function(e) {
                            var t = V(V({}, e), {}, (0, l.Z)({}, r, a));
                            return n(t), t
                        }))
                    };
                return E.createElement(m.JX, {
                    className: "tw-gap-5 tw-mb-8"
                }, E.createElement(m.JX, {
                    className: "tw-rounded-lg tw-bg-[#000000] tw-p-3"
                }, E.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, "Don't sweat it, you can still change your subscription role details and role permissions in the group page after the role has been created.")), E.createElement(m.JX, {
                    className: "tw-gap-2"
                }, E.createElement("label", {
                    htmlFor: "roleName",
                    className: "tw-flex tw-flex-row"
                }, "Subscription Role Name", E.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1"
                }, E.createElement(m.$1, {
                    icon: N.sq,
                    className: "tw-text-light-grey"
                }), E.createElement("span", {
                    className: "tw-pointer-events-none tw-z-50 tw-absolute tw-top-[-6rem] tw-left-[-9rem] sm:tw--top-7 sm:tw-left-5 tw-w-[240px] tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50 tw-opacity-0 tw-shadow tw-transition-opacity group-hover:tw-opacity-100"
                }, "Subscription roles are exclusive roles within the group, available only through an active subscription. Access will automatically end when the subscription expires."))), E.createElement(m.II, {
                    id: "roleName",
                    name: "name",
                    type: "text",
                    onChange: d,
                    value: c.name,
                    "aria-labelledby": "roleName",
                    "aria-describedby": "roleNameDescription"
                }), E.createElement("span", {
                    id: "roleNameDescription",
                    className: "tw-sr-only"
                }, "Enter the name of the paid role.")), E.createElement(m.JX, {
                    className: "tw-gap-2"
                }, E.createElement("label", {
                    htmlFor: "roleDescription"
                }, "Description"), E.createElement(m.gx, {
                    id: "roleDescription",
                    name: "description",
                    onChange: d,
                    value: c.description,
                    maxLength: 1024,
                    "aria-labelledby": "roleDescription",
                    "aria-describedby": "roleDescriptionHelp"
                }), E.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, c.description.length, "/1024 characters"), E.createElement("span", {
                    id: "roleDescriptionHelp",
                    className: "tw-sr-only"
                }, "Enter a description for the paid role. Maximum length is 1024 characters.")))
            };
            var Y = n(42138),
                H = n(12752),
                K = n(64358),
                Q = {
                    permissions: [],
                    productGroupAccess: !1,
                    requiresTwoFactor: !1,
                    productGroupAccessRemove: !1
                };
            const ee = function(e) {
                var t, n = e.onDataChange,
                    r = void 0 === n ? function() {} : n,
                    a = e.groupPermissions,
                    l = void 0 === a ? [] : a,
                    i = e.groupInfo,
                    s = void 0 === i ? {} : i,
                    c = e.role,
                    u = void 0 === c ? Q : c,
                    d = E.useState(u.permissions),
                    w = (0, o.Z)(d, 2),
                    p = w[0],
                    f = w[1],
                    g = E.useState(null),
                    b = (0, o.Z)(g, 2),
                    v = b[0],
                    h = b[1],
                    y = E.useState("open" === (null == s ? void 0 : s.joinState) || u.productGroupAccess),
                    x = (0, o.Z)(y, 2),
                    N = x[0],
                    C = x[1],
                    S = E.useState(u.productGroupAccessRemove),
                    k = (0, o.Z)(S, 2),
                    O = k[0],
                    P = k[1],
                    I = E.useState(u.requiresTwoFactor),
                    j = (0, o.Z)(I, 2),
                    D = j[0],
                    T = j[1];
                E.useEffect((function() {
                    r({
                        permissions: p,
                        productGroupAccess: N,
                        requiresTwoFactor: D,
                        productGroupAccessRemove: O
                    })
                }), [p, N, D, O]);
                var Z = (0, H._b)(l),
                    L = E.useMemo((function() {
                        return (0, K.Ps)({
                            permissionName: v,
                            permissionsMap: Z
                        })
                    }), [v, Z]),
                    A = "open" === (null == s ? void 0 : s.joinState) ? "Since your group setting is Free Join, all users who subscribe will be automatically added to your group without needing approval. They'll remain part of the group after their subscription ends." : "Since your group setting is not Free Join, any user in VRChat can purchase this role and be added to the group, no matter what the group's join rules are.";
                return E.createElement(m.JX, {
                    className: "tw-gap-5 tw-mb-8"
                }, E.createElement(m.qX, {
                    type: "dark",
                    hideIcon: !0
                }, E.createElement("small", null, "Don’t sweat it, you can still change your subscription role details and role permissions in the group page after the role has been created.")), E.createElement(m.JX, {
                    className: "tw-gap-3"
                }, E.createElement(m.JX, {
                    className: "tw-bg-grey tw-p-5 tw-rounded-lg"
                }, E.createElement(m.K_, {
                    label: "Require Two-Factor Authentication",
                    value: "requiresTwoFactor",
                    description: "Requires members to have 2FA before permissions apply.",
                    defaultChecked: D,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        return T(t)
                    }
                })), E.createElement(m.JX, {
                    className: "tw-bg-grey tw-p-5 tw-rounded-lg"
                }, E.createElement(m.K_, {
                    label: "Enable Free Join for Subscribers",
                    value: "productGroupAccess",
                    description: A,
                    defaultChecked: N,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        return C(t)
                    },
                    disabled: "open" === (null == s ? void 0 : s.joinState) || "closed" === (null == s ? void 0 : s.joinState)
                })), N && "open" !== (null == s ? void 0 : s.joinState) && E.createElement(m.JX, {
                    className: "tw-bg-grey tw-p-5 tw-rounded-lg"
                }, E.createElement(m.K_, {
                    label: "Remove Members After Expiration",
                    value: "productGroupAccessRemove",
                    description: "If enabled, group members with this role are removed from the group entirely when their subscription ends. Note that this will remove any member whose subscription ends, whether they bought their way in or not.",
                    defaultChecked: O,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        return P(t)
                    }
                }))), E.createElement(m.JX, null, E.createElement("h4", null, "Group Permissions"), Z && E.createElement(m.JX, {
                    className: "tw-gap-3"
                }, Object.values(Z).map((function(e) {
                    return E.createElement(m.JX, {
                        key: e.name,
                        className: "tw-bg-grey tw-p-5 tw-rounded-lg"
                    }, E.createElement(m.K_, {
                        label: e.displayName,
                        value: e.name,
                        description: e.help,
                        defaultChecked: p.includes(e.name),
                        onChangeCallback: function(t) {
                            var n = t.checked;
                            return function(e, t) {
                                var n;
                                if (t) {
                                    var r = (0, K.QZ)({
                                        permissionName: e,
                                        permissionsMap: Z
                                    });
                                    return f([].concat((0, Y.Z)(p), [e], (0, Y.Z)(r)))
                                }
                                var a = Z[e];
                                if (null !== (n = a.computedDependedOnBy) && void 0 !== n && n.size && p.some((function(e) {
                                        return a.computedDependedOnBy.has(e)
                                    }))) return h(e);
                                f(p.filter((function(t) {
                                    return t !== e
                                })))
                            }(e.name, n)
                        }
                    }))
                })))), E.createElement(m.sm, {
                    isOpen: !!v,
                    confirmCallback: function() {
                        return f(p.filter((function(e) {
                            return e !== v && !L.has(e)
                        }))), void h(null)
                    },
                    cancelCallback: function() {
                        return h(null)
                    },
                    headerText: "Role Permission Dependencies",
                    confirmText: "Turn Off",
                    cancelText: "Go Back"
                }, E.createElement("div", null, E.createElement("p", null, "Turning off “", null === (t = Z[v]) || void 0 === t ? void 0 : t.displayName, "” will also turn off permissions that currently require it:"), E.createElement("ul", null, (0, Y.Z)(L).filter((function(e) {
                    return p.includes(e)
                })).map((function(e) {
                    var t = Z[e];
                    return E.createElement("li", {
                        key: e
                    }, "“", t.displayName, "”")
                }))), E.createElement("strong", null, "Are you sure you want to turn this off?"))))
            };
            var te = n(4965);
            const ne = function(e) {
                var t, n, r = e.user,
                    a = e.groups,
                    l = e.onGroupSelect,
                    i = void 0 === l ? function() {} : l,
                    s = null !== (t = null == r || null === (n = r.tagsSet) || void 0 === n ? void 0 : n.has("system_supporter")) && void 0 !== t && t,
                    c = E.useState(""),
                    u = (0, o.Z)(c, 2),
                    m = u[0],
                    d = u[1],
                    w = E.useMemo((function() {
                        return a && r ? null == a ? void 0 : a.filter((function(e) {
                            return (null == e ? void 0 : e.ownerId) === (null == r ? void 0 : r.id)
                        })) : []
                    }), [a, r]);
                return E.createElement("div", {
                    className: "tw-mb-4 tw-min-h-[100px] tw-w-full"
                }, E.createElement("p", {
                    className: "tw-mb-2"
                }, "Select Group"), E.createElement(re, {
                    className: "tw-w-full",
                    id: "group_select",
                    "aria-label": "Select a group",
                    name: "group_select",
                    label: "",
                    value: m,
                    onChange: function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        if (null === n) return i(null), void d("+ Create New Group");
                        var r = w.find((function(e) {
                            return e.name === n
                        }));
                        d(n), i(r)
                    }
                }, E.createElement("option", {
                    value: "",
                    disabled: !0
                }, 0 === w.length && "No Available Groups"), w.length > 0 && w.map((function(e) {
                    return E.createElement("option", {
                        key: e.name,
                        value: e.name
                    }, e.name)
                })), w.length < 5 && s && E.createElement("option", {
                    key: "Create New Group",
                    value: null
                }, "+ Create New Group")))
            };
            var re = (0, te.Z)("select", {
                target: "e1iz8sio0"
            })("padding:0.45rem 0.75rem;height:unset;background:#05191d;border:#053c48 solid 2px;border-color:", (function(e) {
                return e.isError ? "#A8342E" : "#053c48"
            }), ";border-radius:4px;outline:none!important;color:#6ae3f9;min-width:100px;&:active,&:hover,&:focus{background:#07343f;color:#6ae3f9;border-color:", (function(e) {
                return e.isError ? "#A8342E" : "#086c84"
            }), ";}");
            const ae = function(e) {
                var t = e.listing,
                    n = void 0 === t ? {} : t;
                return E.createElement(m.JX, {
                    className: "tw-text-center tw-mb-8 tw-items-center"
                }, E.createElement(m.pw, {
                    className: "tw-mb-5 tw-rounded-lg",
                    imageId: null == n ? void 0 : n.imageId,
                    alt: null == n ? void 0 : n.displayName,
                    width: 150
                }), E.createElement("h4", null, "Subscription Created"), E.createElement("p", null, "Your subscription is ready! Make sure your group store is enabled to start selling."))
            };
            var le = n(78076),
                oe = n(25062),
                ie = ["file"],
                se = ["imageId"];

            function ce(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ue(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ce(Object(n), !0).forEach((function(t) {
                        (0, l.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ce(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const me = function(e) {
                var t = e.onDataChange,
                    n = void 0 === t ? function() {} : t,
                    r = e.listing,
                    i = void 0 === r ? {} : r,
                    s = e.currentChanges,
                    c = e.validateVariants,
                    u = void 0 === c ? function() {} : c,
                    d = E.useState({}),
                    p = (0, o.Z)(d, 2),
                    f = p[0],
                    g = p[1],
                    b = E.useState(!1),
                    v = (0, o.Z)(b, 2),
                    h = v[0],
                    y = v[1],
                    x = E.useState((null == s ? void 0 : s.imageId) || (null == s ? void 0 : s.file) || null),
                    N = (0, o.Z)(x, 2),
                    C = N[0],
                    S = N[1],
                    k = E.useState(""),
                    O = (0, o.Z)(k, 2),
                    P = (O[0], O[1]),
                    I = (null == s ? void 0 : s.displayName) || (null == i ? void 0 : i.displayName) || "",
                    j = E.useState(I),
                    D = (0, o.Z)(j, 2),
                    T = D[0],
                    Z = D[1],
                    L = (null == s ? void 0 : s.description) || (null == i ? void 0 : i.description) || "",
                    A = E.useState(L),
                    X = (0, o.Z)(A, 2),
                    F = X[0],
                    z = X[1],
                    J = (null == s ? void 0 : s.priceTokens) || (null == i ? void 0 : i.priceTokens) || ((null == i ? void 0 : i.productType) === w.Pm.LISTING ? w.zD : void 0),
                    R = E.useState(J),
                    G = (0, o.Z)(R, 2),
                    B = G[0],
                    M = G[1],
                    U = (null == s ? void 0 : s.listingVariants) || (null == i ? void 0 : i.listingVariants) || [],
                    q = E.useState(w.PN.map((function(e) {
                        return U.find((function(t) {
                            return t.quantity === e
                        })) || {
                            quantity: e
                        }
                    }))),
                    $ = (0, o.Z)(q, 2),
                    V = $[0],
                    _ = $[1],
                    W = (null == s ? void 0 : s.duration) || (null == i ? void 0 : i.duration) || 1,
                    Y = E.useState(W),
                    H = (0, o.Z)(Y, 2),
                    K = H[0],
                    Q = (H[1], (null == s ? void 0 : s.durationType) || (null == i ? void 0 : i.durationType) || "months"),
                    ee = E.useState(Q),
                    te = (0, o.Z)(ee, 2),
                    ne = te[0];
                te[1];
                E.useEffect((function() {
                    n(f)
                }), [f]);
                var re = function(e) {
                    var t = e.target,
                        n = t.name,
                        r = t.value;
                    switch (g((function(e) {
                            return ue(ue({}, e), {}, (0, l.Z)({}, n, r))
                        })), n) {
                        case "displayName":
                            Z(r);
                            break;
                        case "description":
                            z(r);
                            break;
                        case "priceTokens":
                            M(r);
                            break;
                        case "listingVariants":
                            _(r)
                    }
                };
                (0, E.useEffect)((function() {
                    var e = 0 === V.length || (null == ae ? void 0 : ae.every((function(e) {
                        return e
                    })));
                    u(e)
                }), [ae, V]);
                var ae = E.useMemo((function() {
                        return V.map((function(e, t) {
                            var n, r = e.quantity,
                                a = e.unitPriceTokens;
                            if (w.PN[t] !== r) return !1;
                            if (void 0 === a) return !0;
                            if (!/^\d*$/.test(a)) return !1;
                            var l = (null === (n = V.slice(0, t).findLast((function(e) {
                                    return e.unitPriceTokens
                                }))) || void 0 === n ? void 0 : n.unitPriceTokens) || B,
                                o = parseInt(l, 10),
                                i = parseInt(a, 10);
                            return i >= w.zD && i <= o
                        }))
                    }), [V, B]),
                    ce = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
                            t = e.map((function(t, n) {
                                var r, a = (null === (r = e.slice(0, n).findLast((function(e) {
                                    return e.unitPriceTokens
                                }))) || void 0 === r ? void 0 : r.unitPriceTokens) || B;
                                return parseInt(t.unitPriceTokens, 10) === parseInt(a, 10) ? ue(ue({}, t), {}, {
                                    unitPriceTokens: void 0
                                }) : ue(ue({}, t), {}, {
                                    sellerVariant: !0
                                })
                            }));
                        _(t), g((function(e) {
                            return ue(ue({}, e), {}, {
                                listingVariants: t.filter((function(e) {
                                    return void 0 !== e.unitPriceTokens
                                }))
                            })
                        }))
                    };
                E.useEffect((function() {
                    ce(V)
                }), [B]);
                return E.createElement(E.Fragment, null, E.createElement(m.JX, {
                    className: "tw-@container/subInfo tw-gap-5"
                }, E.createElement(m.JX, {
                    className: "@sm/subInfo:tw-flex-row tw-gap-5"
                }, E.createElement("button", {
                    type: "button",
                    onClick: function() {
                        P("subscription"), y(!0)
                    },
                    className: "tw-bg-transparent tw-border-0 tw-p-0 tw-rounded tw-relative tw-items-center tw-justify-center tw-flex"
                }, !C && E.createElement(m.zx, {
                    containerClasses: "tw-rounded tw-absolute tw-flex-1"
                }, E.createElement(m.$1, {
                    icon: le.Vm,
                    className: "tw-mr-2"
                }), E.createElement("span", null, "Upload Thumbnail")), E.createElement(m.pw, {
                    imageId: C,
                    fitToCover: !0,
                    alt: "Subscription Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                })), E.createElement(m.JX, {
                    className: "tw-gap-5 flex-1"
                }, E.createElement(m.JX, null, E.createElement("label", {
                    htmlFor: "displayName"
                }, "Display Name"), E.createElement(m.II, {
                    name: "displayName",
                    type: "text",
                    onChange: re,
                    maxLength: 64,
                    value: T
                }), E.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, T.length, "/64")), E.createElement(m.JX, null, E.createElement("label", {
                    htmlFor: "description"
                }, "Description"), E.createElement(m.gx, {
                    name: "description",
                    onChange: re,
                    value: F,
                    maxLength: 256,
                    inputClassName: "tw-h-[135px]"
                }), E.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, F.length, "/256")))), E.createElement(m.JX, {
                    className: "tw-gap-2"
                }, E.createElement("label", {
                    htmlFor: "listingVariants"
                }, "Monthly Price and Plans"), E.createElement(m.X2, {
                    className: "tw-items-center tw-gap-2"
                }, E.createElement("label", {
                    htmlFor: "priceTokens",
                    className: "tw-text-nowrap"
                }, "1 month at"), E.createElement(m.II, {
                    name: "priceTokens",
                    type: "number",
                    className: "tw-w-[150px]",
                    onChange: re,
                    value: B,
                    step: "1",
                    min: w.zD,
                    max: w._C
                })), V.map((function(e, t) {
                    var n, r = e.quantity,
                        a = e.unitPriceTokens,
                        l = "listingVariants[".concat(t, "]_unitPriceTokens"),
                        o = (null === (n = V.slice(0, t).findLast((function(e) {
                            return e.unitPriceTokens
                        }))) || void 0 === n ? void 0 : n.unitPriceTokens) || B,
                        i = null != a ? a : o,
                        s = parseInt(B, 10),
                        c = parseInt(o, 10),
                        u = parseInt(i, 10);
                    return E.createElement(m.JX, {
                        key: l,
                        className: "tw-justify-center"
                    }, E.createElement(m.X2, {
                        className: "tw-items-center tw-mb-2"
                    }, E.createElement("label", {
                        htmlFor: l,
                        className: "tw-whitespace-nowrap tw-mr-2"
                    }, "".concat((r * K).toLocaleString(), " ").concat(r * K == 1 ? ne.replace(/s$/, "") : ne, " at ")), E.createElement(m.X2, {
                        className: "tw-items-center"
                    }, E.createElement(m.II, {
                        id: l,
                        type: "number",
                        className: "tw-w-[150px] tw-mr-2",
                        min: w.zD,
                        max: o,
                        size: w._C.toString(10).length + 1,
                        value: i,
                        invalid: !0 !== ae[t],
                        onChange: function(e) {
                            return function(e) {
                                var t = e.index,
                                    n = e.unitPriceTokens,
                                    r = V.map((function(e) {
                                        return ue({}, e)
                                    }));
                                r[t].unitPriceTokens = n, ce(r)
                            }({
                                index: t,
                                unitPriceTokens: e.target.value.slice(0, w._C.toString(10).length)
                            })
                        }
                    }), E.createElement("label", {
                        htmlFor: l
                    }, E.createElement(m.b5, {
                        className: "tw-mx-0"
                    }), function(e) {
                        var t = e.duration,
                            n = e.durationType;
                        if ("forevers" === n) return null;
                        var r = 1 === t ? n.replace(/s$/, "") : "".concat(t, " ").concat(n);
                        return "/".concat(r)
                    }({
                        duration: K,
                        durationType: ne
                    }), ", ")), E.createElement("label", {
                        htmlFor: l
                    }, E.createElement("strong", null, "Total"), " ", E.createElement(m.b5, null), (r * K * u || 0).toLocaleString(), u < s && E.createElement(E.Fragment, null, " ", E.createElement(oe.Z, {
                        color: "success"
                    }, Math.floor(100 - u / s * 100), "% off")), u === c && E.createElement(E.Fragment, null, " ", E.createElement(oe.Z, {
                        className: "tw-text-[#DADADA] tw-bg-gray-500",
                        title: "This bundle is using the same unit price as the ".concat(0 === t ? "standard price" : "previous bundle", ".")
                    }, "Max Price")))), !0 !== ae[t] && E.createElement("div", null, E.createElement("span", {
                        className: "tw-text-red"
                    }, "Must be a whole number between ", E.createElement(m.b5, null), w.zD.toLocaleString(), " and the ", 0 === t ? "standard" : "previous bundle", " unit price", !Number.isNaN(c) && E.createElement(E.Fragment, null, " ", "of ", E.createElement(m.b5, null), (c || 0).toLocaleString()), ".")))
                })), E.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, "Set pricing for your monthly subscription plans, and consider offering discounts to attract more subscribers by reducing the monthly rates."))), E.createElement(m.m6, {
                    preset: "subscription",
                    image: C,
                    isOpen: h,
                    onClose: function() {
                        return y(!1)
                    },
                    confirmCallback: function(e) {
                        var t = e.fileId,
                            n = void 0 === t ? null : t,
                            r = e.fileBlob,
                            l = void 0 === r ? null : r,
                            o = null !== n;
                        return null === n && null === l ? (S(null), void g((function(e) {
                            return ue({
                                file: null,
                                imageId: null
                            }, e)
                        }))) : o ? (S(n), void g((function(e) {
                            e.file;
                            var t = (0, a.Z)(e, ie);
                            return ue({
                                imageId: n
                            }, t)
                        }))) : (S(l), void g((function(e) {
                            e.imageId;
                            var t = (0, a.Z)(e, se);
                            return ue({
                                file: l
                            }, t)
                        })))
                    },
                    cancelCallBack: function() {
                        return y(!1)
                    }
                }))
            };
            var de = ["imageId"],
                we = ["file"];

            function pe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function fe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? pe(Object(n), !0).forEach((function(t) {
                        (0, l.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const ge = function(e) {
                var t = e.user,
                    n = void 0 === t ? null : t,
                    l = e.onClose,
                    s = void 0 === l ? function() {} : l,
                    N = (e.groupData, (0, h.I0)()),
                    C = (0, y.s0)(),
                    S = (0, h.v9)((function(e) {
                        return e.myStoreCreateSubscription
                    })),
                    k = (S.previousStep, S.currentStep),
                    O = S.selectedGroup,
                    P = (0, p.XC)({
                        skip: n
                    }).data,
                    I = E.useState("Next"),
                    j = (0, o.Z)(I, 2),
                    D = j[0],
                    T = j[1],
                    L = E.useState(!1),
                    X = (0, o.Z)(L, 2),
                    F = X[0],
                    z = X[1],
                    J = E.useState(!1),
                    R = (0, o.Z)(J, 2),
                    G = R[0],
                    B = R[1],
                    M = E.useState({}),
                    U = (0, o.Z)(M, 2),
                    $ = U[0],
                    V = U[1],
                    _ = E.useState(null),
                    Y = (0, o.Z)(_, 2),
                    H = Y[0],
                    K = Y[1],
                    Q = (0, E.useState)(!0),
                    te = (0, o.Z)(Q, 2),
                    re = te[0],
                    le = te[1],
                    oe = E.useState({
                        name: "",
                        shortCode: "",
                        description: "",
                        joinState: d.wN.REQUEST,
                        privacy: d.TW.DEFAULT,
                        roleTemplate: "default"
                    }),
                    ie = (0, o.Z)(oe, 2),
                    se = ie[0],
                    ce = ie[1],
                    ue = E.useState({
                        name: "",
                        description: "",
                        order: 0,
                        isSelfAssignable: !1,
                        requiresTwoFactor: !1,
                        requiresPurchase: !0,
                        productPriceTokens: w.nk,
                        productDuration: 1,
                        productDurationType: "months",
                        productGroupAccess: !1,
                        productGroupAccessRemove: !1,
                        permissions: []
                    }),
                    pe = (0, o.Z)(ue, 2),
                    ge = pe[0],
                    be = pe[1],
                    ve = E.useState(null),
                    Ee = (0, o.Z)(ve, 2),
                    he = Ee[0],
                    ye = Ee[1],
                    xe = E.useState(null),
                    Ne = (0, o.Z)(xe, 2),
                    Ce = Ne[0],
                    Se = Ne[1],
                    ke = E.useState([]),
                    Oe = (0, o.Z)(ke, 2),
                    Pe = Oe[0],
                    Ie = Oe[1],
                    je = n || P,
                    De = (0, f.dj)({
                        userId: null == je ? void 0 : je.id
                    }, {
                        skip: !je
                    }),
                    Te = De.data,
                    Ze = void 0 === Te ? [] : Te,
                    Le = De.isLoading,
                    Ae = (0, f.mt)({
                        groupId: null == O ? void 0 : O.id
                    }, {
                        skip: !O,
                        refetchOnMountOrArgChange: !0
                    }),
                    Xe = Ae.data,
                    Fe = Ae.isLoading,
                    ze = Ae.isError,
                    Je = (0, f.mm)(),
                    Re = (0, o.Z)(Je, 2),
                    Ge = Re[0],
                    Be = Re[1],
                    Me = (Be.isSuccess, Be.isLoading),
                    Ue = (Be.isError, Be.error, (0, f.Pt)()),
                    qe = (0, o.Z)(Ue, 2),
                    $e = qe[0],
                    Ve = qe[1],
                    _e = (Ve.isSuccess, Ve.isLoading, Ve.isError, Ve.error, (0, g.Ij)()),
                    We = (0, o.Z)(_e, 2),
                    Ye = We[0],
                    He = We[1],
                    Ke = (He.isSuccess, He.isLoading, He.isError, He.error, (0, f.nz)()),
                    Qe = (0, o.Z)(Ke, 2),
                    et = Qe[0],
                    tt = Qe[1],
                    nt = (tt.data, tt.isLoading, tt.isError, tt.error, (0, g.ft)()),
                    rt = (0, o.Z)(nt, 2),
                    at = rt[0],
                    lt = rt[1],
                    ot = (lt.data, lt.isLoading, lt.isError, lt.error, (0, b.As)()),
                    it = (0, o.Z)(ot, 2),
                    st = it[0],
                    ct = it[1],
                    ut = ct.data,
                    mt = (ct.isLoading, ct.isError, ct.error, (0, b.RM)()),
                    dt = (0, o.Z)(mt, 2),
                    wt = dt[0],
                    pt = dt[1];
                pt.data, pt.isLoading, pt.isError, pt.error;
                (0, E.useEffect)((function() {
                    return T("Create Subscription" === k && F ? "Create" : "groupCreated" === k ? "Create Subscription Role" : "createdSubscription" === k ? "Go to Store Manager" : "Next")
                }), [k, F]);
                var ft = function(e) {
                        ce((function(t) {
                            return fe(fe({}, t), e)
                        }))
                    },
                    gt = function(e) {
                        be((function(t) {
                            return fe(fe({}, t), e)
                        }))
                    },
                    bt = function(e) {
                        ye((function(t) {
                            return fe(fe({}, t), e)
                        })), V((function(t) {
                            var n = fe(fe({}, t), e);
                            if (null === e.imageId) {
                                n.imageId;
                                return (0, a.Z)(n, de)
                            }
                            if (null === e.file) {
                                n.file;
                                return (0, a.Z)(n, we)
                            }
                            return n
                        }))
                    },
                    vt = function() {
                        var e = (0, r.Z)(c().mark((function e() {
                            var t, n, r, a, l, o, s, m, d, w, p, f, g, b, E;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        e.t0 = k, e.next = "Create Subscription" === e.t0 ? 3 : "Create Group" === e.t0 ? 19 : "Define Group Rules" === e.t0 ? 22 : "groupCreated" === e.t0 ? 37 : "Create Subscription Role" === e.t0 ? 41 : "Subscription Role Permissions" === e.t0 ? 44 : "Define Subscription" === e.t0 ? 65 : "Add Products" === e.t0 ? 69 : "createdSubscription" === e.t0 ? 83 : 85;
                                        break;
                                    case 3:
                                        if (!F) {
                                            e.next = 7;
                                            break
                                        }
                                        return N((0, v.Bq)("Create Group")), z(!1), e.abrupt("return");
                                    case 7:
                                        return e.prev = 7, e.next = 10, et({
                                            groupId: O.groupId || O.id
                                        });
                                    case 10:
                                        t = e.sent, N((0, v.lr)(t.data)), N((0, v.Bq)("Create Subscription Role")), e.next = 18;
                                        break;
                                    case 15:
                                        e.prev = 15, e.t1 = e.catch(7), N((0, u.d)({
                                            title: "Failed to retrieve group!",
                                            icon: i.eH,
                                            message: null !== (n = null === (r = e.t1.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 18:
                                        return e.abrupt("break", 87);
                                    case 19:
                                        return N((0, v.Bq)("Define Group Rules")), N((0, v.IT)("Create Group")), e.abrupt("break", 87);
                                    case 22:
                                        return z(!0), e.prev = 23, a = fe(fe({}, se), {}, {
                                            shortCode: "" === se.shortCode ? H : se.shortCode
                                        }), e.next = 27, Ge(a).unwrap();
                                    case 27:
                                        l = e.sent, N((0, v.lr)(l.group)), N((0, v.Bq)("groupCreated")), N((0, v.BQ)(!0)), e.next = 36;
                                        break;
                                    case 33:
                                        e.prev = 33, e.t2 = e.catch(23), N((0, u.d)({
                                            title: "Failed to create group!",
                                            icon: i.eH,
                                            message: null !== (o = null === (s = e.t2.data) || void 0 === s || null === (s = s.error) || void 0 === s ? void 0 : s.message) && void 0 !== o ? o : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 36:
                                        return e.abrupt("break", 87);
                                    case 37:
                                        return N((0, v.Bq)("Create Subscription Role")), N((0, v.IT)(null)), N((0, v.BQ)(!1)), e.abrupt("break", 87);
                                    case 41:
                                        return N((0, v.Bq)("Subscription Role Permissions")), N((0, v.IT)("Create Subscription Role")), e.abrupt("break", 87);
                                    case 44:
                                        return e.prev = 44, e.next = 47, $e({
                                            groupId: O.id,
                                            data: ge
                                        }).unwrap();
                                    case 47:
                                        return m = e.sent, e.next = 50, at({
                                            listingId: m.listingId,
                                            hydrateProducts: !0
                                        }).unwrap();
                                    case 50:
                                        return d = e.sent, e.next = 53, wt({
                                            productId: m.productId
                                        }).unwrap();
                                    case 53:
                                        w = e.sent, Se(w), ye(d), 0 === Pe.length && d.hydratedProducts && Ie(d.products), N((0, v.Bq)("Define Subscription")), N((0, v.IT)(null)), e.next = 64;
                                        break;
                                    case 61:
                                        e.prev = 61, e.t3 = e.catch(44), N((0, u.d)({
                                            title: "Failed to create role!",
                                            icon: i.eH,
                                            message: null !== (p = null === (f = e.t3.data) || void 0 === f || null === (f = f.error) || void 0 === f ? void 0 : f.message) && void 0 !== p ? p : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 64:
                                        return e.abrupt("break", 87);
                                    case 65:
                                        return st({
                                            userId: P.id
                                        }), N((0, v.Bq)("Add Products")), N((0, v.IT)("Define Subscription")), e.abrupt("break", 87);
                                    case 69:
                                        return e.prev = 69, e.next = 72, Ye(fe({
                                            listingId: he.id
                                        }, $)).unwrap();
                                    case 72:
                                        g = e.sent, ye(g.listing), N((0, v.Bq)("createdSubscription")), N((0, v.BQ)(!0)), e.next = 82;
                                        break;
                                    case 78:
                                        e.prev = 78, e.t4 = e.catch(69), console.log("error", e.t4), N((0, u.d)({
                                            title: "Failed to update listing!",
                                            icon: i.eH,
                                            message: null !== (b = null === (E = e.t4.data) || void 0 === E || null === (E = E.error) || void 0 === E ? void 0 : E.message) && void 0 !== b ? b : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 82:
                                        return e.abrupt("break", 87);
                                    case 83:
                                        return C("/home/marketplace/storefront/stores"), e.abrupt("break", 87);
                                    case 85:
                                        return N((0, v.Bq)("Create Subscription")), e.abrupt("break", 87);
                                    case 87:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [7, 15],
                                [23, 33],
                                [44, 61],
                                [69, 78]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Et = Le || Fe || Me;
                return (0, E.useEffect)((function() {
                    if ("Create Subscription" !== k) {
                        if ("Create Group" === k) {
                            var e = se.name.length >= 3 && se.name.length < 64 && "" !== se.name,
                                t = "" === se.shortCode || se.shortCode.length >= 3 && se.shortCode.length <= 6;
                            return e && t ? !se.name || se.name.length >= 64 ? void B(!1) : B(!0) : void B(!1)
                        }
                        if ("Define Subscription" === k) {
                            var n = (null == he ? void 0 : he.displayName.length) >= 3,
                                r = (null == he ? void 0 : he.priceTokens) >= 100 && (null == he ? void 0 : he.priceTokens) <= 1e4 && Number.isInteger(parseFloat(null == he ? void 0 : he.priceTokens));
                            return B(n && r && re)
                        }
                        return B("Create Subscription Role" === k ? ge.name.length <= 64 && 0 !== ge.name.length : "Add Products" === k ? Pe.length > 0 && Pe.length <= w._1 : !Et)
                    }
                    B(null !== O || F)
                }), [k, O, F, se, ge, Et, he, re]), E.createElement(m.JX, {
                    className: "tw-w-full"
                }, "Create Subscription" === k && E.createElement(ne, {
                    user: je,
                    groups: Ze,
                    onGroupSelect: function(e) {
                        if (!e) return z(!0), void N((0, v.lr)(null));
                        z(!1), N((0, v.lr)(e))
                    }
                }), "Create Group" === k && !O && E.createElement(Z, {
                    currentGroupData: se,
                    onGroupDataChange: ft,
                    generateShortCodeFromName: function(e) {
                        var t = e.target.value,
                            n = t.length >= 3 ? t.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().substring(0, 6) : null;
                        K(n)
                    },
                    shortCodePlaceholder: H
                }), "Define Group Rules" === k && E.createElement(q, {
                    onDataChange: ft
                }), "groupCreated" === k && E.createElement(A, {
                    group: O
                }), "Create Subscription Role" === k && E.createElement(W, {
                    onDataChange: gt,
                    role: ge
                }), "Subscription Role Permissions" === k && E.createElement(ee, {
                    onDataChange: gt,
                    role: ge,
                    groupPermissions: Xe,
                    isError: ze,
                    roleInfo: ge,
                    groupInfo: O
                }), "Define Subscription" === k && he && E.createElement(me, {
                    listing: he,
                    validateVariants: function(e) {
                        return le(e)
                    },
                    onDataChange: bt,
                    currentChanges: $
                }), "Add Products" === k && E.createElement(x.Z, {
                    products: ut,
                    listing: he,
                    associatedProduct: Ce,
                    existingProducts: Pe,
                    onDataChange: bt,
                    onAddedProducts: function(e) {
                        return Ie(e)
                    }
                }), "createdSubscription" === k && E.createElement(ae, {
                    listing: he
                }), E.createElement(m.X2, {
                    className: "tw-gap-2"
                }, "groupCreated" !== k && E.createElement(m.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: s,
                    neutral: !0
                }, "createdSubscription" === k ? "Finish" : "Cancel"), E.createElement(m.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: vt,
                    disabled: !G
                }, D)))
            }
        },
        95146: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => Me
            });
            var r = n(15861),
                a = n(54546),
                l = n(2293),
                o = n(94902),
                i = n(34327),
                s = n(96914),
                c = n(64687),
                u = n.n(c),
                m = n(67294),
                d = n(79655),
                w = n(89250),
                p = n(14411),
                f = n(72998),
                g = n(46320),
                b = n(4942),
                v = n(62475),
                E = n(96766),
                h = n(40098),
                y = n(95337),
                x = n(98185),
                N = n(35187),
                C = n(95896),
                S = n(76176),
                k = n(22202),
                O = n(16869),
                P = n(68157),
                I = n(32981);
            const j = n.p + "8483efe53b992e51983c5f56d5ebb938550f39f1a72d1258f3b30353f7ad369c.svg",
                D = n.p + "aab2cd88e8f1da1b8209f5e30357c5ba59c64949f9079b0f33e3d05609c6e1da.svg",
                T = n.p + "f3de2219aad5eed5eceeb782bdf669066f23fe34ed832e88d74183128849e5c0.svg";
            const Z = function(e) {
                var t = e.createSubscription,
                    n = void 0 === t ? function() {} : t;
                return m.createElement(p.JX, {
                    className: "tw-text-center tw-gap-9 tw-mt-12"
                }, m.createElement("h4", null, "Kickstart Your Subscription Program"), m.createElement(p.X2, {
                    className: "tw-justify-evenly tw-gap-12"
                }, m.createElement(p.JX, {
                    className: "tw-items-center"
                }, m.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, m.createElement("img", {
                    src: D,
                    alt: "Generate consistent earnings from your supporters."
                })), m.createElement("h4", null, "Earn Rewarding Income"), m.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Generate consistent earnings from your supporters.")), m.createElement(p.JX, {
                    className: "tw-items-center"
                }, m.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, m.createElement("img", {
                    src: T,
                    alt: "Provide Exclusive content and perks only subscribers can enjoy."
                })), m.createElement("h4", null, "Offer Exclusive Access"), m.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Provide Exclusive content and perks only subscribers can enjoy.")), m.createElement(p.JX, {
                    className: "tw-items-center"
                }, m.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, m.createElement("img", {
                    src: j,
                    alt: "Grow your community and build stronger connections."
                })), m.createElement("h4", null, "Activate Your Fan Base"), m.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Grow your community and build stronger connections."))), m.createElement(p.JX, {
                    className: "tw-items-center"
                }, m.createElement(p.zx, {
                    containerClasses: "tw-mb-3 tw-w-[200px]",
                    onClick: n
                }, m.createElement(p.$1, {
                    icon: h.r8
                }), " Create Subscription"), m.createElement("a", {
                    href: "https://creators.vrchat.com/economy/products/paid-roles",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn more about subscriptions")))
            };
            var L = n(44062),
                A = n(18529),
                X = n(76553),
                F = n(6811),
                z = n(64258),
                J = n(45697),
                R = n.n(J),
                G = function(e) {
                    var t = e.onClose,
                        n = void 0 === t ? function() {} : t,
                        l = e.listing;
                    if (!l) return null;
                    var o = (0, I.I0)(),
                        i = (0, O.Ij)(),
                        s = (0, a.Z)(i, 2),
                        c = s[0],
                        d = s[1],
                        w = d.isLoading,
                        f = (d.isSuccess, d.isError, d.error, function() {
                            var e = (0, r.Z)(u().mark((function e() {
                                var t, r, a;
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, c({
                                                listingId: l.id,
                                                active: !l.active
                                            }).unwrap();
                                        case 3:
                                            t = e.sent, o((0, z.d)({
                                                title: "Listing ".concat(t.listing.active ? "published" : "unpublished"),
                                                icon: F.f8,
                                                message: "".concat(l.displayName, " has been ").concat(t.listing.active ? "published" : "unpublished", "."),
                                                color: "success",
                                                timeout: 3e3
                                            })), n(), e.next = 12;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), console.error(e.t0), o((0, z.d)({
                                                title: "Failed to ".concat(l.active ? "unpublish" : "publish", " listing"),
                                                icon: X.eH,
                                                message: null !== (r = null === (a = e.t0.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== r ? r : "Something went wrong",
                                                color: "danger",
                                                timeout: 9e3
                                            }));
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }());
                    return m.createElement("div", {
                        className: "tw-w-full tw-flex tw-flex-col tw-gap-6"
                    }, m.createElement("div", {
                        className: "tw-w-full"
                    }, !l.active && m.createElement("h4", {
                        className: "tw-text-lg"
                    }, "Publishing this listing will make it available for viewing and purchase, including in any selected store(s)."), l.active && m.createElement("h4", {
                        className: "tw-text-lg"
                    }, "If you move this listing to draft, users won’t be able to view or purchase it. You can republish it at any time. Existing purchases will remain unaffected.")), m.createElement("div", {
                        className: "tw-flex tw-flex-col xs:tw-flex-row tw-gap-3 tw-flex-1"
                    }, m.createElement(p.zx, {
                        type: "button",
                        neutral: !0,
                        onClick: n,
                        containerClasses: "tw-flex-1"
                    }, "Cancel"), m.createElement(p.zx, {
                        type: "button",
                        containerClasses: "tw-flex-1",
                        loading: w,
                        onClick: f
                    }, l.active ? "Move to Draft" : "Publish Listing")))
                };
            G.propTypes = {
                onClose: R().func,
                listing: R().object
            };
            const B = G;
            var M = n(2909),
                U = n(27484),
                q = n.n(U),
                $ = n(97798);
            const V = function(e) {
                var t = e.active,
                    n = void 0 !== t && t,
                    r = e.editAction,
                    l = void 0 === r ? function() {} : r,
                    o = e.deleteAction,
                    i = void 0 === o ? function() {} : o,
                    s = e.publishAction,
                    c = void 0 === s ? function() {} : s,
                    u = (0, m.useState)(!1),
                    d = (0, a.Z)(u, 2),
                    w = d[0],
                    f = d[1],
                    g = (0, m.useState)(null),
                    b = (0, a.Z)(g, 2),
                    v = b[0],
                    E = b[1],
                    h = (0, m.useRef)(null);
                return (0, m.useEffect)((function() {
                    h.current && E(h.current.getBoundingClientRect())
                }), [h]), m.createElement("div", {
                    onMouseLeave: function() {
                        return f(!1)
                    }
                }, m.createElement(p.zx, {
                    ref: h,
                    className: "tw-h-9 tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        return f(!w)
                    }
                }, m.createElement(p.$1, {
                    icon: $.Uw,
                    size: "1x"
                })), m.createElement(p.JX, {
                    style: {
                        transform: "translate(-".concat(120 - (null == v ? void 0 : v.width), "px, 0px)")
                    },
                    className: "tw-pt-2 tw-min-w-min tw-w-[120px] tw-min-h-min tw-z-50 tw-absolute ".concat(w ? "tw-flex" : "tw-hidden")
                }, m.createElement(p.JX, {
                    className: "tw-items-start tw-bg-button-bg tw-border-2 tw-w-full tw-text-left tw-weight-[500] tw-border-solid tw-border-button-border tw-rounded-lg tw-p-3"
                }, m.createElement("button", {
                    type: "button",
                    onClick: l,
                    className: "tw-p-0 tw-w-full tw-text-left hover:tw-text-white tw-text-option-inactive tw-border-none tw-bg-transparent"
                }, "Edit"), m.createElement("button", {
                    type: "button",
                    onClick: c,
                    className: "tw-p-0 tw-w-full tw-text-left hover:tw-text-white tw-text-option-inactive tw-border-none tw-bg-transparent"
                }, n ? "Move to Draft" : "Publish"), m.createElement("hr", {
                    className: "tw-border-t-2 tw-border-solid tw-w-full tw-border-white tw-my-2"
                }), m.createElement("button", {
                    type: "button",
                    onClick: i,
                    className: "tw-p-0 tw-w-full tw-text-left hover:tw-text-white tw-text-red tw-border-none tw-bg-transparent"
                }, "Delete"))))
            };
            var _ = function(e) {
                var t = e.listingData,
                    n = void 0 === t ? null : t,
                    r = e.editListingCallback,
                    a = void 0 === r ? function() {} : r,
                    l = e.deleteListingCallback,
                    o = void 0 === l ? function() {} : l,
                    i = e.publishListingCallback,
                    s = void 0 === i ? function() {} : i,
                    c = (0, I.I0)();
                if (null === n) return null;
                var u = n.id,
                    d = n.displayName,
                    w = n.created,
                    f = n.updated,
                    g = n.active,
                    b = n.groupName;
                return m.createElement(m.Fragment, null, m.createElement("div", {
                    key: u,
                    className: "tw-relative"
                }, m.createElement("div", {
                    className: "tw-grid tw-gap-2 tw-grid-cols-5 @[700px]/subscriptions-heading:tw-grid-cols-7 tw-mx-5"
                }, m.createElement("div", {
                    className: "tw-flex tw-items-center tw-h-9 tw-truncate tw-my-2 @[800px]/my-subscriptions:tw-max-w-max tw-col-span-2"
                }, d), m.createElement("div", {
                    className: "tw-block tw-items-center tw-h-9 tw-py-2 tw-my-2 tw-truncate @[800px]/my-subscriptions:tw-max-w-max"
                }, b), m.createElement("div", {
                    className: "tw-items-center tw-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/my-subscriptions:tw-max-w-max tw-hidden @[700px]/my-subscriptions:tw-flex"
                }, q()(w).format("ll")), m.createElement("div", {
                    className: "tw-items-center tw-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/my-subscriptions:tw-max-w-max tw-hidden @[700px]/my-subscriptions:tw-flex"
                }, q()(f).format("ll")), m.createElement("div", {
                    className: "tw-flex tw-items-center tw-h-9 tw-my-2 tw-truncate @[800px]/my-subscriptions:tw-max-w-max"
                }, g ? "Published" : "Draft"), m.createElement(p.X2, {
                    className: "tw-h-9 tw-truncate tw-my-2 tw-max-w-[100px] tw-gap-2"
                }, m.createElement(p.zx, {
                    className: "tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        navigator.clipboard.writeText(u).then((function() {
                            c((0, z.d)({
                                title: "Copied subscription ID",
                                icon: F.f8,
                                message: "Subscription ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(e) {
                            var t, n;
                            c((0, z.d)({
                                title: "Failed to copy subscription ID",
                                icon: X.eH,
                                message: null !== (t = null === (n = res.error.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Failed to copy subscription ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, m.createElement(p.$1, {
                    icon: M.kZ,
                    size: "1x"
                })), m.createElement(V, {
                    active: null == n ? void 0 : n.active,
                    editAction: function() {
                        return a(n)
                    },
                    deleteAction: function() {
                        return o(n)
                    },
                    publishAction: function() {
                        return s(n)
                    }
                })))))
            };
            _.propTypes = {
                listingData: R().object
            };
            const W = _;
            var Y = n(22717);

            function H(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function K(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? H(Object(n), !0).forEach((function(t) {
                        (0, b.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Q = [{
                    label: "Name",
                    value: "displayName"
                }, {
                    label: "Group",
                    value: "groupName"
                }, {
                    label: "Created",
                    value: "created",
                    isSmallColumn: !0,
                    canCollapse: !0
                }, {
                    label: "Updated",
                    value: "updated",
                    isSmallColumn: !0,
                    canCollapse: !0
                }, {
                    label: "Status",
                    value: "status",
                    isSmallColumn: !0
                }, {
                    label: "Actions",
                    value: ""
                }],
                ee = [];
            const te = function() {
                var e, t = (0, I.I0)(),
                    n = (0, w.s0)(),
                    r = (0, d.lr)(),
                    l = (0, a.Z)(r, 2),
                    o = l[0],
                    i = (l[1], (0, I.v9)((function(e) {
                        return e.myStoreCreateSubscription
                    }))),
                    s = i.previousStep,
                    c = i.currentStep,
                    u = (0, w.UO)().paginationPage,
                    f = u ? Number(u) : 1,
                    g = (0, m.useState)(""),
                    b = (0, a.Z)(g, 2),
                    j = b[0],
                    D = b[1],
                    T = (0, m.useState)(o.get("sortBy") || null),
                    X = (0, a.Z)(T, 2),
                    F = X[0],
                    z = X[1],
                    J = (0, m.useState)(o.get("orderBy") || "descending"),
                    R = (0, a.Z)(J, 2),
                    G = R[0],
                    M = R[1],
                    U = m.useState({}),
                    q = (0, a.Z)(U, 2),
                    $ = q[0],
                    V = q[1],
                    _ = m.useState(!1),
                    H = (0, a.Z)(_, 2),
                    te = H[0],
                    ne = H[1],
                    re = ((0, S.Z)(j), (0, k.IB)().data),
                    ae = (0, m.useMemo)((function() {
                        return {
                            sellerId: re.id,
                            n: 50,
                            pageValue: f
                        }
                    }), [f]),
                    le = (0, O.Ul)(K({
                        userId: re.id,
                        listingType: "subscription"
                    }, ae), {
                        skip: !re.id,
                        refetchOnMountOrArgChange: !0
                    }),
                    oe = le.data,
                    ie = le.isSuccess,
                    se = le.isFetching,
                    ce = le.isError,
                    ue = le.error;
                (0, m.useEffect)((function() {
                    $.isCreating && V((function(e) {
                        return K(K({}, e), {}, {
                            title: c
                        })
                    }))
                }), [c]);
                var me, de = function(e) {
                        var t = e.title,
                            n = void 0 === t ? "" : t,
                            r = e.data,
                            a = void 0 === r ? void 0 : r,
                            l = e.isCreating,
                            o = void 0 !== l && l,
                            i = e.isEditing,
                            s = void 0 !== i && i,
                            c = e.isDeleting,
                            u = void 0 !== c && c,
                            m = e.isPublishing,
                            d = void 0 !== m && m,
                            w = e.productType,
                            p = void 0 === w ? C.Pm.UDON : w;
                        ne(!0), V({
                            title: n,
                            data: a,
                            isCreating: o,
                            isEditing: s,
                            isDeleting: u,
                            isPublishing: d,
                            productType: p
                        })
                    },
                    we = function(e) {
                        de({
                            title: "Edit Subscription",
                            data: e,
                            isEditing: !0,
                            isDeleting: !1,
                            listingType: e.listingType
                        })
                    },
                    pe = function(e) {
                        de({
                            title: "Delete Listing",
                            data: e,
                            isEditing: !1,
                            isDeleting: !0,
                            listingType: e.listingType
                        })
                    },
                    fe = function(e) {
                        de({
                            title: e.active ? "Move to Draft" : "Publish Listing",
                            data: e,
                            isEditing: !1,
                            isDeleting: !1,
                            isPublishing: !0
                        })
                    },
                    ge = function() {
                        ne(!1), V({}), t((0, P.IT)(null)), t((0, P.BQ)(!1)), t((0, P.lr)(null)), t((0, P.Bq)("Create Subscription"))
                    },
                    be = function(e) {
                        return F === e
                    },
                    ve = function(e) {
                        if (ee.includes(e)) return function(e) {
                            return be(e) ? M("descending" === G ? "ascending" : "descending") : (z(e), M("ascending"))
                        }(e)
                    };
                return m.createElement(m.Fragment, null, m.createElement(p.$4, null, "My Subscriptions"), 0 !== (null == oe ? void 0 : oe.length) || se || 1 !== f ? m.createElement(m.Fragment, null, m.createElement(p.X2, {
                    className: "tw-justify-between tw-gap-x-5 tw-gap-y-3 tw-flex-wrap tw-mt-6"
                }, m.createElement("div", null, m.createElement(p.II, {
                    icon: y.wn,
                    type: "text",
                    rawInputClassName: "tw-h-9",
                    className: "tw-w-full tw-max-w-[515px] tw-hidden",
                    value: j,
                    onChange: function(e) {
                        return D(e.target.value)
                    },
                    placeholder: "Search by name or listing ID",
                    disabled: !0
                })), m.createElement(p.zx, {
                    "aria-label": "Create Subscription",
                    className: "tw-px-2",
                    onClick: function() {
                        return de({
                            title: c,
                            data: {},
                            isEditing: !1,
                            isCreating: !0,
                            productType: C.Pm.ROLE
                        })
                    }
                }, m.createElement(p.$1, {
                    icon: h.r8,
                    size: "1x"
                }), " Create Subscription")), m.createElement("div", {
                    className: "tw-@container/my-subscriptions tw-rounded-md tw-bg-grey tw-mt-5"
                }, m.createElement("div", {
                    className: "tw-w-full tw-min-w-max tw-table-auto tw-pb-1 tw-@container/subscriptions-heading"
                }, m.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-5 @[700px]/subscriptions-heading:tw-grid-cols-7 tw-border-b tw-border-0 tw-border-solid tw-border-hr-line-color tw-pb-3 tw-mx-5"
                }, Q.map((function(e) {
                    var t = e.label,
                        n = e.value,
                        r = e.canCollapse,
                        a = void 0 !== r && r,
                        l = e.isSmallColumn,
                        o = void 0 !== l && l;
                    return m.createElement("span", {
                        key: n,
                        className: "\n                  ".concat(be(n) ? "tw-text-light-white" : "tw-text-light-grey", "\n                  ").concat(a ? "tw-hidden @[700px]/subscriptions-heading:tw-block" : "", "\n                  ").concat(ee.includes(n) ? "tw-cursor-pointer" : "tw-cursor-auto", "\n                  ").concat(o ? "tw-max-w-[100px]" : "tw-max-w-auto", "\n                  ").concat("displayName" === n ? "tw-col-span-2" : "tw-col-span-1", "\n                  tw-pt-3 tw-font-normal tw-text-base\n                "),
                        onClick: function() {
                            return ve(n)
                        },
                        onKeyDown: function(e) {
                            if ("Enter" === e.key || "Space" === e.key) return ve(n)
                        },
                        role: "button",
                        tabIndex: 0
                    }, t, ee.includes(n) && m.createElement(p.$1, {
                        icon: be(n) && "ascending" === G ? E.fo : v.u9,
                        size: "1x",
                        className: "tw-ml-1 ".concat(be(n) && "ascending" === G ? "tw-align-bottom" : "tw-align-top")
                    }))
                }))), m.createElement("div", {
                    className: "tw-group"
                }, se ? m.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, m.createElement(x.Z, {
                    loading: !0
                })) : ce ? m.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, m.createElement("p", null, "Error loading sales data:"), m.createElement("code", null, null !== (me = ue.data.error.message) && void 0 !== me ? me : "Unknown error")) : ie && 0 === (null == oe ? void 0 : oe.length) ? m.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, m.createElement("p", {
                    className: "tw-mb-0"
                }, "There are no transactions data to display.")) : ie ? oe.map((function(e) {
                    return m.createElement(W, {
                        key: e.id,
                        listingData: e,
                        editListingCallback: we,
                        deleteListingCallback: pe,
                        publishListingCallback: fe
                    })
                })) : void 0), m.createElement("div", null, m.createElement(N.Z, {
                    totalCount: null !== (e = null == oe ? void 0 : oe.length) && void 0 !== e ? e : 0,
                    showCurrentPageOnly: !0,
                    currentPage: f,
                    pageSize: 50,
                    onPageChange: function(e) {
                        return n("/home/marketplace/storefront/subscriptions/page/".concat(e))
                    }
                }))))) : m.createElement(Z, {
                    createSubscription: function() {
                        t((0, P.Bq)("Create Subscription")), de({
                            title: c,
                            data: {},
                            isEditing: !1,
                            isCreating: !0,
                            productType: C.Pm.ROLE
                        })
                    }
                }), m.createElement(p.u_, {
                    title: "createdSubscription" === $.title ? null : $.title,
                    onCloseFinished: ge,
                    isVisible: te,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: $.productType === C.Pm.ROLE ? "initial" : "auto",
                    onBackCallback: s ? function() {
                        t((0, P.Bq)(s))
                    } : null
                }, te && $.isCreating && m.createElement(A.default, {
                    user: re,
                    subscription: $.data,
                    onClose: ge,
                    isEditing: $.isEditing
                }), te && $.isEditing && m.createElement(L.default, {
                    onClose: ge,
                    listingId: $.data.id
                }), te && $.isPublishing && m.createElement(B, {
                    onClose: ge,
                    listing: $.data
                }), te && $.isDeleting && m.createElement(Y.default, {
                    listingId: $.data.id,
                    onCancelCallback: ge
                })))
            };
            var ne = n(66736);
            n(57520);
            const re = function(e) {
                return m.createElement(f.Z, {
                    location: !0,
                    justify: "left",
                    tabs: [{
                        name: "My Sales",
                        to: "/home/marketplace/storefront/revenue/mysales",
                        condition: !0
                    }, {
                        name: "My Subscribers",
                        to: "/home/marketplace/storefront/revenue/mysubscribers",
                        condition: !0
                    }]
                })
            };
            var ae = n(41145),
                le = n(62228),
                oe = n(12227),
                ie = n(56646),
                se = function(e) {
                    var t = e.isExpanded,
                        n = e.transactionData,
                        r = void 0 === n ? null : n;
                    if (null === r) return null;
                    var a = r.formattedSalesSummary,
                        l = r.receiverDisplayName,
                        o = r.listingDisplayName,
                        i = r.listingType,
                        s = r.tiliaTransactionId,
                        c = r.purchaseCurrentStatus,
                        u = a.listingPrice,
                        d = a.processingFees,
                        w = a.purchaseDuration,
                        f = a.listingEarnings;
                    return m.createElement("div", {
                        className: "tw-@container/sales-summary tw-bg-darker-grey tw-rounded-lg tw-mx-5 tw-p-5 tw-mb-4 ".concat(t ? "tw-block" : "tw-hidden")
                    }, m.createElement("h4", {
                        className: "heading tw-text-base tw-font-normal tw-text-light-grey"
                    }, m.createElement(p.$1, {
                        icon: ie.faCircleInfo,
                        size: "1x"
                    }), " Sales summary"), m.createElement("hr", {
                        className: "tw-bg-[#242A31] tw-border-0 tw-h-[2px]"
                    }), m.createElement("div", {
                        className: "tw-grid tw-grid-cols-1 tw-gap-3 @sm/sales-summary:tw-grid-cols-2 @md/sales-summary:tw-grid-cols-3"
                    }, m.createElement("div", null, m.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Buyer"), m.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, m.createElement("span", {
                        className: "tw-text-base tw-font-normal tw-text-white"
                    }, l))), o && m.createElement("div", null, m.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Listing Name"), m.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, m.createElement("span", {
                        className: "tw-text-base tw-font-normal tw-text-white"
                    }, o))), (null == u ? void 0 : u.toString()) && m.createElement("div", null, m.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Listing Price"), m.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, m.createElement("span", {
                        className: "tw-text-base tw-font-normal tw-text-white"
                    }, m.createElement(p.b5, {
                        className: "tw-mr-1 tw-text-white"
                    }), u))), c && m.createElement("div", null, m.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Status"), m.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, m.createElement("span", {
                        className: "tw-text-base tw-font-normal tw-text-white tw-capitalize"
                    }, c))), i && m.createElement("div", null, m.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Listing Type"), m.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, m.createElement("span", {
                        className: "tw-text-base tw-font-normal tw-text-white"
                    }, i))), (null == f ? void 0 : f.toString()) && m.createElement("div", {
                        className: !0
                    }, m.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Listing Earnings"), m.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, m.createElement("span", {
                        className: "tw-text-base tw-font-normal tw-text-white"
                    }, m.createElement(p.b5, {
                        className: "tw-mr-1 tw-text-white"
                    }), f))), m.createElement("div", null, m.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Transaction ID"), m.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, m.createElement("span", {
                        className: "tw-text-xs tw-text-white"
                    }, s))), w && m.createElement("div", null, m.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Purchase Duration"), m.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, m.createElement("span", {
                        className: "tw-text-base tw-font-normal tw-text-white"
                    }, w))), (null == d ? void 0 : d.toString()) && m.createElement("div", null, m.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Processing Fees"), m.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, m.createElement("span", {
                        className: "tw-text-base tw-font-normal tw-text-white"
                    }, m.createElement(p.b5, {
                        className: "tw-mr-1 tw-text-white"
                    }), d)))))
                };
            se.propTypes = {
                isExpanded: R().bool,
                transactionData: R().object
            };
            const ce = se;
            var ue = function(e) {
                var t, n = e.transactionData,
                    r = void 0 === n ? null : n;
                if (null === r) return null;
                var l = r.formattedSalesSummary,
                    o = r.receiverDisplayName,
                    i = r.listingDisplayName,
                    s = r.listingImageId,
                    c = r.listingType,
                    u = r.transactionId,
                    d = r.purchaseDate,
                    w = (0, m.useState)(!1),
                    f = (0, a.Z)(w, 2),
                    g = f[0],
                    b = f[1];
                "" !== s && (0, oe.qm)({
                    fileId: s,
                    isImage: !0,
                    versionNumber: 1
                });
                return m.createElement("div", {
                    key: u,
                    className: "tw-@container/sales-row"
                }, m.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-4 @[590px]/sales-heading:tw-grid-cols-5 "
                }, m.createElement("div", {
                    className: "tw-pl-5 tw-h-9 tw-truncate tw-my-2 tw-max-w-[100px] @[800px]/sales-row:tw-max-w-max"
                }, q()(d).format("L LT")), m.createElement("div", {
                    className: "tw-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/sales-row:tw-max-w-max"
                }, i), m.createElement("div", {
                    className: "tw-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/sales-row:tw-max-w-max"
                }, c), m.createElement("div", {
                    className: "tw-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/sales-row:tw-max-w-max tw-hidden @[590px]/sales-row:tw-block"
                }, m.createElement(p.b5, {
                    className: "tw-mr-1 tw-text-white"
                }), " ", null !== (t = l.listingEarnings) && void 0 !== t ? t : "-"), m.createElement("div", {
                    className: "tw-pr-6 tw-h-9 tw-truncate tw-my-2"
                }, m.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-between"
                }, o, m.createElement(p.zx, {
                    className: "tw-h-9 tw-w-10 tw-text-white tw-bg-button-bg-grey tw-border-none",
                    onClick: function() {
                        return b(!g)
                    }
                }, m.createElement(p.$1, {
                    icon: g ? le.mT : ae.pt,
                    size: "1x"
                }))))), m.createElement(ce, {
                    transactionData: r,
                    isExpanded: g
                }))
            };
            ue.propTypes = {
                transactionData: R().object
            };
            const me = ue;

            function de(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function we(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? de(Object(n), !0).forEach((function(t) {
                        (0, b.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : de(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var pe = [{
                    label: "Date",
                    value: "purchaseDate"
                }, {
                    label: "Listing Name",
                    value: "name"
                }, {
                    label: "Listing Type",
                    value: "type"
                }, {
                    label: "Earnings",
                    value: "earnings",
                    canCollapse: !0
                }, {
                    label: "Buyer",
                    value: "buyersName"
                }],
                fe = ["purchaseDate", "name"];
            const ge = function() {
                var e, t, n, r, l = (0, w.s0)(),
                    o = (0, w.UO)().paginationPage,
                    i = (0, m.useState)("all"),
                    s = (0, a.Z)(i, 2),
                    c = (s[0], s[1], (0, m.useState)("ALL")),
                    u = (0, a.Z)(c, 2),
                    d = (u[0], u[1], (0, m.useState)("")),
                    f = (0, a.Z)(d, 2),
                    g = f[0],
                    b = (f[1], (0, m.useState)(null)),
                    h = (0, a.Z)(b, 2),
                    y = h[0],
                    C = h[1],
                    O = (0, m.useState)("desc"),
                    P = (0, a.Z)(O, 2),
                    I = P[0],
                    j = P[1],
                    D = o ? Number(o) : 1,
                    T = (0, S.Z)(g),
                    Z = (0, k.IB)().data,
                    L = (0, ne.JJ)(we(we({
                        sellerId: Z.id,
                        n: 50,
                        pageValue: D
                    }, y && {
                        sort: y
                    }), I && {
                        order: I
                    }), {
                        skip: !Z.id,
                        refetchOnMountOrArgChange: !1
                    }),
                    A = L.data,
                    X = L.isFetching,
                    F = L.isSuccess,
                    z = L.isError,
                    J = L.error,
                    R = function(e) {
                        return y === e
                    },
                    G = function(e) {
                        if (fe.includes(e)) return function(e) {
                            return R(e) ? j("desc" === I ? "asc" : "desc") : (C(e), j("asc"))
                        }(e)
                    };
                return m.createElement("div", null, m.createElement(p.$4, null, "My Sales"), m.createElement(re, null), m.createElement("div", {
                    className: "tw-rounded-md tw-bg-grey tw-mt-5"
                }, m.createElement("div", {
                    className: "tw-w-full tw-min-w-max tw-table-auto tw-pb-1 tw-@container/sales-heading"
                }, m.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-4 @[590px]/sales-heading:tw-grid-cols-5 "
                }, pe.map((function(e) {
                    var t = e.label,
                        n = e.value,
                        r = e.canCollapse,
                        a = void 0 !== r && r;
                    return m.createElement("span", {
                        key: n,
                        className: "\n                  ".concat(R(n) ? "tw-text-light-white" : "tw-text-light-grey", "\n                  ").concat(a ? "tw-hidden @[590px]/sales-heading:tw-block" : "", "\n                  ").concat(fe.includes(n) ? "tw-cursor-pointer" : "tw-cursor-auto", "\n                  tw-pt-3 tw-font-normal tw-text-base first:tw-pl-5 last:tw-pr-5\n                "),
                        onClick: function() {
                            return G(n)
                        },
                        onKeyDown: function(e) {
                            if ("Enter" === e.key || "Space" === e.key) return G(n)
                        },
                        role: "button",
                        tabIndex: 0
                    }, t, fe.includes(n) && m.createElement(p.$1, {
                        icon: R(n) && "asc" === I ? E.fo : v.u9,
                        size: "1x",
                        className: "tw-ml-1 ".concat(R(n) && "asc" === I ? "tw-align-bottom" : "tw-align-top")
                    }))
                }))), m.createElement("div", {
                    className: "tw-group"
                }, X ? m.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, m.createElement(x.Z, {
                    loading: !0
                })) : z ? m.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, m.createElement("p", null, "Error loading sales data:"), m.createElement("code", null, null !== (r = J.data.error.message) && void 0 !== r ? r : "Unknown error")) : "" === T && F ? A.purchases.map((function(e) {
                    return m.createElement(me, {
                        transactionData: e
                    })
                })) : void 0), 0 === (null == A || null === (e = A.purchases) || void 0 === e ? void 0 : e.length) && m.createElement("div", {
                    className: "tw-flex tw-justify-center tw-p-10"
                }, m.createElement("p", null, "There are no sales data to display")), m.createElement("div", null, m.createElement(N.Z, {
                    totalCount: null !== (t = null == A || null === (n = A.purchases) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0,
                    showCurrentPageOnly: !0,
                    currentPage: D,
                    pageSize: 50,
                    onPageChange: function(e) {
                        return l("/home/marketplace/storefront/revenue/mysales/page/".concat(e))
                    }
                })))))
            };
            var be = n(42138),
                ve = n(16686),
                Ee = n(17319),
                he = function(e) {
                    var t = e.instalmentData,
                        n = void 0 === t ? null : t,
                        r = e.showCancellable,
                        a = void 0 !== r && r;
                    if (null === n) return null;
                    var l = (0, be.Z)(n).sort((function(e, t) {
                        return q()(e.stackDate).isAfter(q()(t.stackDate)) ? 1 : -1
                    }));
                    return m.createElement(m.Fragment, null, l.map((function(e) {
                        var t = e.stackDate,
                            n = e.stackValue,
                            r = e.purchaseId,
                            l = q()(t).isAfter(q()());
                        return m.createElement("div", {
                            className: "tw-grid tw-grid-cols-1 tw-gap-3 @sm/subscribers:tw-grid-cols-2 @md/subscribers:tw-grid-cols-3",
                            key: r
                        }, m.createElement("div", null, m.createElement("div", {
                            className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                        }, m.createElement("span", {
                            className: "tw-text-base tw-font-normal tw-text-white"
                        }, q()(t).format("MMMM DD, YYYY")))), m.createElement("div", null, m.createElement("div", {
                            className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                        }, m.createElement("span", {
                            className: "tw-text-base tw-font-normal tw-text-white"
                        }, m.createElement(p.b5, {
                            className: "tw-mr-1 tw-text-white"
                        }), n))), !l && m.createElement("div", null, m.createElement("div", {
                            className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start tw-text-placeholder-text"
                        }, m.createElement(p.$1, {
                            icon: Ee.di,
                            size: "1x"
                        }), " ", m.createElement("span", {
                            className: "tw-text-base tw-font-bold"
                        }, "Non-refundable"))), l && m.createElement("div", null, m.createElement("div", {
                            className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start tw-text-teal-accent"
                        }, m.createElement(p.$1, {
                            icon: ve.faCircleCheck,
                            size: "1x"
                        }), " ", m.createElement("span", {
                            className: "tw-text-base tw-font-bold tw-capitalize"
                        }, "Refundable ", m.createElement("span", {
                            className: "tw-font-normal tw-text-white ".concat(a ? "" : "tw-hidden")
                        }, "(to be cancelled)")))))
                    })))
                };
            he.propTypes = {
                instalmentData: R().array,
                showCancellable: R().bool
            };
            const ye = he;
            var xe = function(e) {
                var t = e.isExpanded,
                    n = e.subscriberData,
                    r = void 0 === n ? null : n,
                    a = e.startCancelSubscriptionCallback,
                    l = void 0 === a ? function() {} : a,
                    o = r.buyerDisplayName,
                    i = (r.buyerId, r.listingCurrentlyAvailable, r.listingDescription, r.groupName),
                    s = r.listingDisplayName,
                    c = r.subscriptionExpiry,
                    u = r.subscriptionFirstStarted,
                    d = c && q()(c).isAfter(q()());
                return null === r ? null : m.createElement("div", {
                    className: "tw-@container/subscribers tw-bg-darker-grey tw-rounded-lg tw-mx-5 tw-p-5 tw-mb-4 ".concat(t ? "tw-block" : "tw-hidden")
                }, m.createElement("h4", {
                    className: "heading tw-text-base tw-font-normal tw-text-light-grey"
                }, m.createElement(p.$1, {
                    icon: ie.faCircleInfo,
                    size: "1x"
                }), " Subscription details"), m.createElement("hr", {
                    className: "tw-bg-[#242A31] tw-border-0 tw-h-[2px]"
                }), m.createElement("div", {
                    className: "tw-grid tw-grid-cols-1 tw-gap-3 @sm/subscribers:tw-grid-cols-1 @md/subscribers:tw-grid-cols-4"
                }, m.createElement("div", null, m.createElement("div", {
                    className: "tw-text-light-grey tw-font-normal tw-text-xs"
                }, "Subscriber"), m.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, m.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, o))), s && m.createElement("div", null, m.createElement("div", {
                    className: "tw-text-light-grey tw-font-normal tw-text-xs"
                }, "Listing Name"), m.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, m.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, s))), u && m.createElement("div", null, m.createElement("div", {
                    className: "tw-text-light-grey tw-font-normal tw-text-xs"
                }, "Start Date"), m.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, m.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, m.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, q()(u).format("L LT"))))), m.createElement("div", null, m.createElement("div", {
                    className: "tw-text-light-grey tw-font-normal tw-text-xs"
                }, "Manage this subscription"), m.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, m.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, m.createElement(p.zx, {
                    disabled: !d,
                    danger: !0,
                    className: "tw-px-2",
                    onClick: function() {
                        return l({
                            subscriberData: r
                        })
                    },
                    title: d ? "Cancel Subscription" : "Subscription is not active"
                }, "Cancel Subscription")))), i && m.createElement("div", {
                    className: "@md/subscribers:tw-col-start-2"
                }, m.createElement("div", {
                    className: "tw-text-light-grey tw-font-normal tw-text-xs"
                }, "Group"), m.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, m.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, i))), c && m.createElement("div", null, m.createElement("div", {
                    className: "tw-text-light-grey tw-font-normal tw-text-xs"
                }, "Expiry Date"), m.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, m.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, q()(c).format("L LT"))))), m.createElement("h4", {
                    className: "heading tw-text-base tw-font-normal tw-text-light-grey tw-mt-5"
                }, m.createElement(p.$1, {
                    icon: ie.faCircleInfo,
                    size: "1x"
                }), " Subscription Refundability Overview"), m.createElement("hr", {
                    className: "tw-bg-[#242A31] tw-border-0 tw-h-[2px]"
                }), m.createElement(ye, {
                    instalmentData: null == r ? void 0 : r.stacks
                }))
            };
            xe.propTypes = {};
            const Ne = xe;
            var Ce = function(e) {
                var t = e.subscriberData,
                    n = void 0 === t ? null : t,
                    r = e.startCancelSubscriptionCallback;
                if (null === n) return null;
                var l = n.buyerDisplayName,
                    o = (n.buyerId, n.listingCurrentlyAvailable, n.listingDescription, n.listingDisplayName),
                    i = n.subscriptionExpiry,
                    s = (n.subscriptionFirstStarted, (0, m.useState)(!1)),
                    c = (0, a.Z)(s, 2),
                    u = c[0],
                    d = c[1];
                return m.createElement("div", null, m.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-3 "
                }, m.createElement("div", {
                    className: "tw-h-9 tw-pl-5 tw-my-2 tw-truncate"
                }, l), m.createElement("div", {
                    className: "tw-h-9 tw-my-2 tw-truncate"
                }, o), m.createElement("div", {
                    className: "tw-pr-6 tw-h-9 tw-truncate tw-my-2"
                }, m.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-between"
                }, q()(i).format("L LT"), m.createElement(p.zx, {
                    className: "tw-h-9 tw-w-10 tw-text-white tw-bg-button-bg-grey tw-border-none",
                    onClick: function() {
                        return d(!u)
                    }
                }, m.createElement(p.$1, {
                    icon: u ? le.mT : ae.pt,
                    size: "1x"
                }))))), m.createElement(Ne, {
                    subscriberData: n,
                    isExpanded: u,
                    startCancelSubscriptionCallback: r
                }))
            };
            Ce.propTypes = {
                transactionData: R().object
            };
            const Se = Ce;
            const ke = function(e) {
                var t, n, r, l, o = (0, k.IB)().data,
                    i = (0, w.UO)().paginationPage,
                    s = i ? Number(i) : 1,
                    c = (0, m.useState)("all"),
                    u = (0, a.Z)(c, 2),
                    f = (u[0], u[1], (0, m.useState)(!1)),
                    g = (0, a.Z)(f, 2),
                    b = g[0],
                    v = g[1],
                    E = (0, m.useState)(null),
                    h = (0, a.Z)(E, 2),
                    y = h[0],
                    C = h[1],
                    O = (0, m.useState)("ALL"),
                    P = (0, a.Z)(O, 2),
                    I = (P[0], P[1], (0, m.useState)(null)),
                    j = (0, a.Z)(I, 2),
                    D = (j[0], j[1], (0, m.useState)("desc")),
                    T = (0, a.Z)(D, 2),
                    Z = (T[0], T[1], (0, m.useState)("")),
                    L = (0, a.Z)(Z, 2),
                    A = L[0],
                    X = (L[1], (0, S.Z)(A)),
                    F = (0, m.useRef)(null),
                    z = (0, ne.x)(),
                    J = (0, a.Z)(z, 2),
                    R = J[0],
                    G = J[1],
                    B = G.isSuccess,
                    M = G.isLoading,
                    U = G.isError,
                    q = G.error,
                    $ = (0, ne.vb)({
                        sellerId: o.id
                    }),
                    V = $.data,
                    _ = $.isFetching,
                    W = $.isSuccess,
                    Y = $.isError,
                    H = $.error;
                (0, m.useEffect)((function() {
                    B && !U && (v(!1), C(null))
                }), [B, U]);
                var K;
                return m.createElement("div", null, m.createElement(p.$4, null, "My Subscribers"), m.createElement(re, null), m.createElement(p.sm, {
                    isLoading: M,
                    isOpen: b,
                    confirmCallback: function() {
                        R({
                            buyerId: null == y ? void 0 : y.buyerId,
                            listingId: null == y ? void 0 : y.listingId,
                            reason: null == F ? void 0 : F.current.value,
                            immediate: !0
                        })
                    },
                    cancelCallback: function() {
                        return v(!1)
                    },
                    className: "tw-w-[873px] tw-max-w-[873px]",
                    headerText: "Cancel Instalments"
                }, m.createElement("h3", {
                    className: "heading tw-text-lg tw-mb-0"
                }, "Are you sure you want to cancel the following instalments?"), m.createElement("p", {
                    className: "tw-text-base tw-text-light-grey tw-mt-0"
                }, "Only refundable portions will be cancelled."), m.createElement("div", {
                    className: "tw-rounded tw-bg-grey tw-p-4 tw-@container/subscribers"
                }, m.createElement("div", {
                    className: "tw-grid tw-grid-cols-2 tw-gap-3"
                }, m.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, m.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, "Listing Name")), m.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, m.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, "Buyer")), m.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, m.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, null == y ? void 0 : y.listingDisplayName)), m.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, m.createElement(d.rU, {
                    to: "/home/user/".concat(null == y ? void 0 : y.buyerId),
                    target: "_blank",
                    rel: "noreferrer"
                }, m.createElement("span", {
                    className: "tw-text-base tw-font-normal"
                }, null == y ? void 0 : y.buyerDisplayName)))), m.createElement("hr", {
                    className: "tw-bg-hr-line-color tw-border-0 tw-h-[2px]"
                }), m.createElement(ye, {
                    instalmentData: null == y ? void 0 : y.stacks,
                    showCancellable: !0
                })), U && !B && m.createElement("div", {
                    className: "tw-mt-3"
                }, m.createElement("p", {
                    className: "tw-text-error-message-red tw-flex tw-flex-col"
                }, "Failed to cancel subscription:", m.createElement("code", {
                    className: "tw-mt-1 tw-text-error-message-red"
                }, null !== (t = q.data.error.message) && void 0 !== t ? t : "Something went wrong"))), m.createElement("h3", {
                    className: "heading tw-text-sm tw-mt-5"
                }, "Please provide the reason for cancellation"), m.createElement(p.II, {
                    type: "text",
                    name: "cancel-reason",
                    required: !0,
                    ref: F,
                    placeholder: "Reason for cancellation"
                })), m.createElement("div", {
                    className: "tw-rounded-md tw-bg-grey tw-mt-5"
                }, m.createElement("div", {
                    className: "tw-w-full tw-min-w-max tw-table-auto tw-pb-1 tw-@container/sales-heading"
                }, m.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-3"
                }, [{
                    label: "Subscriber",
                    value: ""
                }, {
                    label: "Listing Name",
                    value: ""
                }, {
                    label: "Expiry Date",
                    value: ""
                }].map((function(e) {
                    var t = e.label,
                        n = e.value;
                    return m.createElement("span", {
                        key: n,
                        className: "\n                  tw-pt-3 tw-font-normal tw-text-base first:tw-pl-5 last:tw-pr-5 tw-cursor-auto\n                "
                    }, t)
                }))), m.createElement("div", {
                    className: "tw-group"
                }, _ ? m.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, m.createElement(x.Z, {
                    loading: !0
                })) : Y ? m.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, m.createElement("p", null, "Error loading sales data:"), m.createElement("code", null, null !== (K = H.data.error.message) && void 0 !== K ? K : "Unknown error")) : "" === X && W ? V.map((function(e) {
                    return m.createElement(Se, {
                        key: "".concat(e.buyerId, "-").concat(e.listingId),
                        subscriberData: e,
                        startCancelSubscriptionCallback: function(e) {
                            var t = e.subscriberData;
                            C(t), v(!0)
                        }
                    })
                })) : void 0), 0 === (null == V || null === (n = V.purchases) || void 0 === n ? void 0 : n.length) && m.createElement("div", {
                    className: "tw-flex tw-justify-center tw-p-10"
                }, m.createElement("p", null, "There are no subscribers data to display")), m.createElement("div", null, m.createElement(N.Z, {
                    totalCount: null !== (r = null == V || null === (l = V.purchases) || void 0 === l ? void 0 : l.length) && void 0 !== r ? r : 0,
                    showCurrentPageOnly: !0,
                    currentPage: s,
                    pageSize: 50,
                    onPageChange: function(e) {
                        return navigate("/home/marketplace/storefront/revenue/mysales/page/".concat(e))
                    }
                })))))
            };
            var Oe = n(6655),
                Pe = n(64358),
                Ie = n(19933);

            function je(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function De(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? je(Object(n), !0).forEach((function(t) {
                        (0, b.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : je(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Te = function() {
                var e, t = (0, k.XC)().data,
                    n = null == t ? void 0 : t.id,
                    l = (0, Oe.gI)({
                        skip: !n
                    }),
                    o = (0, a.Z)(l, 2),
                    i = o[0],
                    s = o[1],
                    c = (0, w.oQ)("/home/marketplace/storefront".concat(null !== (e = location) && void 0 !== e && null !== (e = e.state) && void 0 !== e && e.redirectTo ? "?redirectTo=".concat(encodeURIComponent(location.state.redirectTo)) : "")),
                    d = function() {
                        var e = (0, r.Z)(u().mark((function e(t) {
                            var r, a, l;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), r = new URL(c, window.location.href), e.next = 4, i(De(De({}, Pe.$Z.CREATE_ACCOUNT), {}, {
                                            userId: n,
                                            returnUrl: r
                                        })).unwrap();
                                    case 4:
                                        a = e.sent, l = a.redirect, window.location.assign(l);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return m.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-items-center tw-bg-darker-grey tw-rounded-lg tw-mt-6 tw-p-12"
                }, m.createElement(p.$1, {
                    icon: ve.faCircleCheck,
                    size: "xl",
                    className: "tw-w-[72px] tw-h-[72px] tw-mb-5"
                }), m.createElement("h1", {
                    className: "tw-font-bold heading"
                }, "Create your Tilia account"), m.createElement("p", {
                    className: "tw-mt-0"
                }, "Secure your first step toward selling by registering your account on Tilia, our payment provider."), m.createElement(p.zx, {
                    className: "tw-mb-3 tw-px-6",
                    "aria-label": "Get Started with Tilia and review Tilia TOS",
                    onClick: d,
                    disabled: s.isLoading,
                    loading: s.isLoading,
                    expand: !1
                }, "Get Started with Tilia"))
            };
            Te.propTypes = {};
            const Ze = Te,
                Le = n.p + "b2884252fefb6f91a3fca6547597c0a37839688363b1bdb686e433583469d8e8.png";
            var Ae = function() {
                return m.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-items-center tw-bg-darker-grey tw-rounded-lg tw-mt-6 tw-p-12"
                }, m.createElement("h1", {
                    className: "tw-font-bold heading"
                }, "Start Selling in the Marketplace"), m.createElement("img", {
                    src: Le,
                    alt: "VRChat Avatars",
                    className: "tw-max-h-80"
                }), m.createElement(d.rU, {
                    to: "https://www.surveymonkey.com/r/creator-economy-web",
                    target: "_blank"
                }, m.createElement(p.zx, {
                    className: "tw-mb-3 tw-px-6"
                }, "Apply to Become a Seller")), m.createElement(d.rU, {
                    to: "https://creators.vrchat.com/economy/",
                    target: "_blank"
                }, "Learn more"), m.createElement("div", {
                    className: "tw-mt-5"
                }, m.createElement("p", {
                    className: "tw-mb-5"
                }, "Join the growing community of creators and start earning from your digital creations. You can sell:"), m.createElement("ul", {
                    className: "tw-font-bold tw-mb-5"
                }, m.createElement("li", null, "In-world effects, passes, key accesses"), m.createElement("li", null, "Group Subscriptions"), m.createElement("li", null, "And more!"))))
            };
            Ae.propTypes = {};
            const Xe = Ae,
                Fe = n.p + "8d069ec94cb9500c4bcd478e05f582f23cf9dadd4c8b7dd0114942d53c7acdcb.png";
            var ze = m.lazy((function() {
                    return Promise.all([n.e(1959), n.e(8051)]).then(n.bind(n, 71560))
                })),
                Je = m.lazy((function() {
                    return n.e(8763).then(n.bind(n, 58271))
                })),
                Re = m.lazy((function() {
                    return n.e(267).then(n.bind(n, 20267))
                })),
                Ge = m.lazy((function() {
                    return n.e(8413).then(n.bind(n, 69026))
                })),
                Be = m.lazy((function() {
                    return n.e(9028).then(n.bind(n, 99028))
                }));
            const Me = function() {
                var e, t, n, c, b, v, E, h, y, x, N, C, S = (0, d.lr)(),
                    O = (0, a.Z)(S, 2),
                    P = O[0],
                    I = O[1],
                    j = m.useState(!1),
                    D = (0, a.Z)(j, 2),
                    T = D[0],
                    Z = D[1],
                    L = m.useState(!1),
                    A = (0, a.Z)(L, 2),
                    X = A[0],
                    F = A[1],
                    z = Object.fromEntries(P.entries()),
                    J = (0, k.XC)(),
                    R = J.data,
                    G = J.isLoading,
                    B = null == R ? void 0 : R.id,
                    M = (0, k.q7)(),
                    U = M.data,
                    q = void 0 === U ? [] : U,
                    $ = M.isFetching,
                    V = M.isError,
                    _ = M.error,
                    W = (0, ne.mW)(),
                    Y = (0, a.Z)(W, 2),
                    H = Y[0],
                    K = Y[1].isLoading,
                    Q = null == q ? void 0 : q.includes("permission-creator-preview"),
                    ee = null == q ? void 0 : q.includes("permission-can-sell-products"),
                    re = (0, Oe.En)(),
                    ae = re.data,
                    le = void 0 === ae ? {
                        economyOnline: !1,
                        plannedOfflineWindowStart: null,
                        plannedOfflineWindowEnd: null,
                        offlineReason: null
                    } : ae,
                    oe = le.economyOnline,
                    ie = le.plannedOfflineWindowStart,
                    se = le.plannedOfflineWindowEnd,
                    ce = le.offlineReason,
                    ue = re.isFetching,
                    me = re.isError,
                    de = re.error,
                    we = (0, Oe.v$)({
                        userId: B
                    }, {
                        skip: !B || !Q || !oe,
                        refetchOnMountOrArgChange: !0
                    }),
                    pe = we.data,
                    fe = we.isLoading,
                    be = we.isError,
                    ve = we.error,
                    Ee = null == pe ? void 0 : pe.signed_tos,
                    he = (0, Oe.gq)({
                        userId: B
                    }, {
                        skip: !B || !Q || !oe,
                        refetchOnMountOrArgChange: !0
                    }),
                    ye = (he.data, he.isLoading),
                    xe = he.isError,
                    Ne = he.error,
                    Ce = (0, Oe.kN)({
                        userId: B
                    }, {
                        skip: !(B && Q && ee && oe)
                    }),
                    Se = Ce.data,
                    je = void 0 === Se ? {} : Se,
                    De = je.eligible,
                    Te = je.reason,
                    Le = Ce.isLoading,
                    Ae = Ce.isError,
                    Me = Ce.error,
                    Ue = (0, Oe.pp)({
                        userId: B,
                        type: "earnings"
                    }, {
                        skip: !B,
                        refetchOnMountOrArgChange: !0
                    }),
                    qe = Ue.data,
                    $e = ((void 0 === qe ? {
                        balance: 0
                    } : qe).balance, Ue.isLoading),
                    Ve = Ue.isError,
                    _e = Ue.error,
                    We = function() {
                        var e = (0, r.Z)(u().mark((function e() {
                            var t;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = "complete" === (null == z ? void 0 : z.state), e.prev = 1, !t || ee) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 5, H().unwrap();
                                    case 5:
                                        e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(1), console.error("Not able to onboard seller:", e.t0);
                                    case 10:
                                        return e.prev = 10, I({}), e.finish(10);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 7, 10, 13]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                m.useEffect((function() {
                    We()
                }), []);
                var Ye = ue || G || $ || fe || $e || ye || K || Le,
                    He = (0, Pe.dj)(ie),
                    Ke = me || !oe || be || Ae || Ve || V || xe;
                if (Ye) return m.createElement(m.Fragment, null, m.createElement(p.UU, {
                    className: "tw-mb-4",
                    height: "80px",
                    radius: "8"
                }), m.createElement(p.UU, {
                    delay: "50",
                    height: "480px",
                    radius: "8"
                }));
                return Ye ? m.createElement(m.Fragment, null, m.createElement(p.UU, {
                    className: "tw-mb-4",
                    height: "80px",
                    radius: "8"
                }), m.createElement(p.UU, {
                    delay: "50",
                    height: "480px",
                    radius: "8"
                })) : m.createElement(p.JX, {
                    className: "pb-5"
                }, m.createElement(p.$4, null, "My Store"), "complete" === (null == z ? void 0 : z.state) && (null == z ? void 0 : z.redirectTo) && m.createElement(p.qX, {
                    type: "success",
                    title: "You're ready to go!"
                }, "Now you can ", m.createElement(d.rU, {
                    to: null == z ? void 0 : z.redirectTo
                }, "pick up where you left off"), "."), Ke && m.createElement(p.qX, {
                    type: oe || me ? "error" : "warn",
                    title: oe || me ? "Something strange happened" : "Storefront Offline"
                }, !oe && !me && m.createElement(m.Fragment, null, m.createElement("p", {
                    className: "m-0"
                }, "Storefront Currently Offline: ", null != ce ? ce : "Unknown Reason"), m.createElement("p", {
                    className: "m-0"
                }, "Projected Service Return: ", (0, Pe.M4)(se))), me && m.createElement("p", {
                    className: "m-0"
                }, "Error getting Tilia online status: ", de.status, " ", null !== (e = null === (t = de.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "Unknown error"), _ && m.createElement("p", {
                    className: "m-0"
                }, "Error looking up user permissions: ", _.status, " ", null !== (n = null === (c = _.data) || void 0 === c ? void 0 : c.error.message) && void 0 !== n ? n : "Unknown error"), be && m.createElement("p", {
                    className: "m-0"
                }, "Error looking up Tilia ToS acceptance: ", ve.status, " ", null !== (b = null === (v = ve.data) || void 0 === v ? void 0 : v.error.message) && void 0 !== b ? b : "Unknown error"), xe && m.createElement("p", {
                    className: "m-0"
                }, "Error looking up Tilia identity verification status: ", Ne.status, " ", null !== (E = null === (h = Ne.data) || void 0 === h ? void 0 : h.error.message) && void 0 !== E ? E : "Unknown error"), Ae && m.createElement("p", {
                    className: "m-0"
                }, "Error looking up your eligibility to pay out: ", Me.status, " ", null !== (y = null === (x = Me.data) || void 0 === x ? void 0 : x.error.message) && void 0 !== y ? y : "Unknown error"), Ve && m.createElement("p", {
                    className: "m-0"
                }, "Error looking up credit balance: ", _e.status, " ", null !== (N = null === (C = _e.data) || void 0 === C ? void 0 : C.error.message) && void 0 !== N ? N : "Unknown error")), He && oe && !me && m.createElement(p.qX, {
                    type: "warn",
                    title: "Storefront Maintenance"
                }, m.createElement("p", {
                    className: "m-0"
                }, "Starts: ", (0, Pe.M4)(ie)), m.createElement("p", {
                    className: "m-0"
                }, "Ends: ", (0, Pe.M4)(se))), !De && Te && oe && !me && m.createElement(p.qX, {
                    type: "warn",
                    title: "Issue with payout eligibility"
                }, "blocked" === Te && m.createElement("p", {
                    className: "m-0"
                }, "You are currently blocked from receiving payouts. Please contact VRChat support for more information."), "kyc_required" === Te && m.createElement("p", {
                    className: "m-0"
                }, "You must complete the KYC process before you can receive payouts. Please contact VRChat support for more information."), "kyc_pending" === Te && m.createElement("p", {
                    className: "m-0"
                }, "Your KYC has been recieved and is pending approval from Tilia. Please check back later."), "limit_exceeded" === Te && m.createElement("p", {
                    className: "m-0"
                }, "You have exceeded the payout limit. Please contact VRChat support for more information."), "cooldown" === Te && m.createElement("p", {
                    className: "m-0"
                }, "You have exceeded the daily payout transaction limit. Please wait 24 hours before making your next payout transaction.")), Q ? ee ? m.createElement(m.Fragment, null, m.createElement(Ie.Z, {
                    isSeller: !0,
                    isTiliaTOSAccepted: Ee,
                    returnPath: "/home/marketplace/storefront/dashboard",
                    termsOfServiceMessage: "Tilia's Terms of Service have been changed. Please accept them before managing your store."
                }), m.createElement("div", {
                    className: "tw-relative"
                }, m.createElement("div", {
                    className: "tw-relative"
                }, m.createElement(p.oI, null, X && m.createElement("div", {
                    className: "tw-w-full tw-h-full tw-opacity-75 tw-bg-black tw-absolute tw-z-10 tw-top-0 tw-bottom-0 tw-left-0"
                }), m.createElement("h4", {
                    className: "fw-normal mb-0"
                }, "My Store"))), m.createElement(p.Ao, null, m.createElement("div", {
                    className: "tw-relative"
                }, X && m.createElement("div", {
                    className: "tw-w-full tw-h-full tw-opacity-75 tw-bg-black tw-absolute tw-z-10 tw-top-0 tw-bottom-0 tw-left-0"
                }), m.createElement(f.Z, {
                    justify: "left",
                    tabs: [{
                        name: "Overview",
                        to: "dashboard",
                        icon: s.St,
                        condition: !0
                    }, {
                        name: "My Products",
                        to: "products",
                        icon: i.LE,
                        condition: !0
                    }, {
                        name: "My Subscriptions",
                        to: "subscriptions",
                        icon: o.G1,
                        condition: !0
                    }, {
                        name: "My Listings",
                        to: "listings",
                        icon: i.LE,
                        condition: !0
                    }, {
                        name: "Store Manager",
                        to: "stores",
                        icon: o.G1,
                        condition: !0
                    }, {
                        name: "Revenue",
                        to: "revenue",
                        icon: l.dL,
                        condition: !0
                    }]
                })), m.createElement(m.Suspense, {
                    fallback: m.createElement(p.UU, {
                        delay: "50",
                        height: "480px",
                        radius: "8"
                    })
                }, m.createElement(w.Z5, null, m.createElement(w.AW, {
                    path: "/",
                    element: m.createElement(g.Z, {
                        to: "dashboard"
                    })
                }), m.createElement(w.AW, {
                    path: "dashboard",
                    element: m.createElement(ze, null)
                }), m.createElement(w.AW, {
                    path: "stores",
                    element: m.createElement(Ge, null)
                }), m.createElement(w.AW, {
                    path: "stores/:storeId",
                    element: m.createElement(Be, {
                        onOrderStore: function() {
                            return F(!X)
                        }
                    })
                }), m.createElement(w.AW, {
                    path: "products",
                    element: m.createElement(g.Z, {
                        to: "../products/page/1"
                    })
                }), m.createElement(w.AW, {
                    path: "products/page/:paginationPage",
                    element: m.createElement(Je, null)
                }), m.createElement(w.AW, {
                    path: "subscriptions",
                    element: m.createElement(g.Z, {
                        to: "../subscriptions/page/1"
                    })
                }), m.createElement(w.AW, {
                    path: "subscriptions/page/:paginationPage",
                    element: m.createElement(te, null)
                }), m.createElement(w.AW, {
                    path: "listings",
                    element: m.createElement(g.Z, {
                        to: "../listings/page/1"
                    })
                }), m.createElement(w.AW, {
                    path: "listings/page/:paginationPage",
                    element: m.createElement(Re, null)
                }), m.createElement(w.AW, {
                    path: "revenue",
                    element: m.createElement(g.Z, {
                        to: "mysales"
                    })
                }), m.createElement(w.AW, {
                    path: "revenue/mysales",
                    element: m.createElement(g.Z, {
                        to: "../revenue/mysales/page/1"
                    })
                }), m.createElement(w.AW, {
                    path: "revenue/mysales/page/:paginationPage",
                    element: m.createElement(ge, null)
                }), m.createElement(w.AW, {
                    path: "revenue/mysubscribers",
                    element: m.createElement(ke, null)
                }))), m.createElement(p.sm, {
                    headerText: "Congratulations!",
                    confirmText: "Done",
                    isOpen: T,
                    confirmCallback: function() {
                        return Z(!1)
                    },
                    cancelCallback: function() {
                        return Z(!1)
                    },
                    hideCancel: !0
                }, m.createElement(p.X2, {
                    className: "tw-items-center tw-gap-6 tw-flex-wrap"
                }, m.createElement("img", {
                    src: Fe,
                    alt: "Storefront Robot",
                    className: "tw-mx-auto tw-w-[180px] tw-flex-1"
                }), m.createElement("p", {
                    className: "tw-m-0 tw-font-bold tw-text-lg tw-flex-1"
                }, "Thank you for completing the Tilia Process, now you are ready to sell and receive payouts!")))))) : m.createElement(Ze, null) : m.createElement(Xe, null))
            }
        }
    }
]);
//# sourceMappingURL=7e6e2b48c5b080e3e9ef616e7cb6e0844fe9ee376c39798123221bd52e7c89f2.js.map