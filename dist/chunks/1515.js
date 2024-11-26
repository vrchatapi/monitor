"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1515], {
        19933: (e, t, r) => {
            r.d(t, {
                Z: () => y
            });
            var n = r(4942),
                a = r(15861),
                l = r(54546),
                o = r(68055),
                i = r(76553),
                c = r(64687),
                s = r.n(c),
                u = r(14411),
                m = r(22202),
                d = r(6655),
                w = r(64358),
                p = r(45697),
                f = r.n(p),
                g = r(67294),
                b = r(89250);

            function v(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var h = function(e) {
                var t, r = e.isTiliaTOSAccepted,
                    n = void 0 === r || r,
                    c = e.returnPath,
                    p = e.termsOfServiceMessage,
                    f = (0, b.TH)(),
                    v = (0, m.XC)(),
                    h = v.data,
                    y = v.isLoading,
                    x = null == h ? void 0 : h.id,
                    N = (0, g.useState)(!1),
                    S = (0, l.Z)(N, 2),
                    k = S[0],
                    C = S[1],
                    O = (0, d.gI)(),
                    P = (0, l.Z)(O, 2),
                    I = P[0],
                    j = P[1],
                    T = (0, b.oQ)("".concat(c).concat(null != f && null !== (t = f.state) && void 0 !== t && t.redirectTo ? "?redirectTo=".concat(encodeURIComponent(f.state.redirectTo)) : ""));
                if (n) return null;
                var D = function() {
                    var e = (0, a.Z)(s().mark((function e(t) {
                        var r, n, a;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t.preventDefault(), C(!0), r = new URL(T, window.location.href), e.next = 5, I(E(E({}, w.$Z.TOS), {}, {
                                        userId: x,
                                        returnUrl: r
                                    })).unwrap();
                                case 5:
                                    n = e.sent, a = n.redirect, window.location.assign(a);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
                return (0, g.useEffect)((function() {
                    (null != j && j.isLoading || y) && C(!0), null != j && j.isError && C(!1)
                }), [j, y]), g.createElement("div", {
                    className: "tw-flex tw-flex-col sm:tw-flex-row tw-bg-warning-bg tw-rounded-lg tw-border-orange tw-border-solid tw-border-0 tw-border-l-4 tw-mb-4 tw-p-3 tw-justify-between tw-items-center"
                }, g.createElement("div", {
                    className: "tw-flex tw-flex-row"
                }, g.createElement(u.$1, {
                    icon: i.eH,
                    size: "1x",
                    className: "tw-text-orange tw-mt-1 tw-mr-2"
                }), g.createElement("div", {
                    className: "tw-flex tw-flex-col tw-justify-start tw-items-start"
                }, g.createElement("h2", {
                    className: "tw-text-xl"
                }, "Update to the Tilia Terms of Service"), g.createElement("p", {
                    className: "tw-mb-0 tw-text-base"
                }, p))), g.createElement("div", {
                    className: "tw-h-full tw-flex tw-flex-col tw-justify-center tw-mt-4 sm:tw-mt-0"
                }, g.createElement(u.zx, {
                    icon: o.LE,
                    onClick: function(e) {
                        return D(e)
                    },
                    className: "tw-bg-white tw-border-white tw-text-[#1A2026]",
                    loading: k,
                    disabled: k
                }, "Review Tilia's Terms")))
            };
            h.propTypes = {
                isTiliaTOSAccepted: f().bool,
                returnPath: f().string,
                termsOfServiceMessage: f().string.isRequired
            };
            const y = h
        },
        22717: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => h
            });
            var n = r(15861),
                a = r(54546),
                l = r(76553),
                o = r(6811),
                i = r(64687),
                c = r.n(i),
                s = r(64258),
                u = r(14411),
                m = r(98185),
                d = r(22202),
                w = r(93261),
                p = r(16869),
                f = r(45697),
                g = r.n(f),
                b = r(67294),
                v = r(32981),
                E = function(e) {
                    var t = e.listingId,
                        r = void 0 === t ? null : t,
                        i = e.onCancelCallback,
                        f = void 0 === i ? function() {} : i;
                    if (null === r) return null;
                    var g = (0, v.I0)(),
                        E = ((0, d.XC)().data, (0, b.useState)(null)),
                        h = (0, a.Z)(E, 2),
                        y = (h[0], h[1]),
                        x = (0, b.useState)(null),
                        N = (0, a.Z)(x, 2),
                        S = N[0],
                        k = N[1],
                        C = (0, b.useState)(null),
                        O = (0, a.Z)(C, 2),
                        P = O[0],
                        I = O[1],
                        j = (0, p.mr)({
                            listingId: r,
                            hydrateProducts: !0
                        }),
                        T = j.data,
                        D = j.isLoading,
                        Z = (j.isError, j.error, (0, w.nz)()),
                        L = (0, a.Z)(Z, 2),
                        A = L[0],
                        F = L[1],
                        X = F.data,
                        z = F.isLoading,
                        R = (F.isError, F.error, (0, w.VF)()),
                        U = (0, a.Z)(R, 2),
                        J = U[0],
                        G = U[1];
                    G.isLoading, G.isError, G.error;
                    (0, b.useEffect)((function() {
                        if (T && (k(T), T.hydratedProducts)) {
                            var e = T.products.find((function(e) {
                                return e.groupRoleId
                            }));
                            y(e), I(e.groupRoleId), A({
                                groupId: T.groupId
                            })
                        }
                    }), [T]);
                    var q = function() {
                        var e = (0, n.Z)(c().mark((function e() {
                            var t, r, n;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (P && X && T) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return t = function(e) {
                                            g((0, s.d)({
                                                title: "Listing deleted successfully!",
                                                icon: o.f8,
                                                message: "Your listing has been deleted successfully!",
                                                color: "success",
                                                timeout: 3e3
                                            })), f()
                                        }, e.prev = 3, e.next = 6, J({
                                            groupId: X.id,
                                            roleId: P,
                                            ownerId: X.ownerId,
                                            confirm: !0
                                        }).unwrap();
                                    case 6:
                                        t(), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(3), console.error("error", e.t0), g((0, s.d)({
                                            title: "Failed to delete listing!",
                                            icon: l.eH,
                                            message: null !== (r = null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : "Something went wrong",
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
                        loading: D || z
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
                        onClick: q,
                        type: "button",
                        containerClasses: "tw-flex-1",
                        danger: !0,
                        disabled: (null == S ? void 0 : S.active) || (null == S ? void 0 : S.products.length) > 1
                    }, "Delete"))))
                };
            E.propTypes = {
                listing: g().object,
                onCancelCallback: g().func
            };
            const h = E
        },
        36078: (e, t, r) => {
            r.d(t, {
                Z: () => d
            });
            var n = r(42138),
                a = r(54546),
                l = r(42619),
                o = r(38252),
                i = r(14411),
                c = r(67263),
                s = r(95896),
                u = r(12752),
                m = r(67294);
            const d = function(e) {
                var t = e.products,
                    r = void 0 === t ? [] : t,
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
                    S = (0, a.Z)(N, 2),
                    k = S[0],
                    C = S[1],
                    O = m.useState(!1),
                    P = (0, a.Z)(O, 2),
                    I = P[0],
                    j = P[1],
                    T = (0, m.useRef)(null),
                    D = (0, u.Nr)(y);
                m.useEffect((function() {
                    g({
                        products: k.map((function(e) {
                            return e.id
                        }))
                    }), v(k)
                }), [k]);
                var Z = function(e) {
                    T.current && !T.current.contains(e.target) && j(!1)
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
                        if (!r) return [];
                        var e = k.map((function(e) {
                            return e.id
                        }));
                        return r.filter((function(t) {
                            return !(null != e && e.includes(t.id)) && t.productType !== s.Pm.ROLE && (!D || (t.id.toLowerCase().includes(D.trim().toLowerCase()) || t.displayName.toLowerCase().includes(D.trim().toLowerCase())))
                        })) || []
                    }), [k, r, D]);
                return m.createElement(i.JX, {
                    className: "tw-@container/add-products tw-relative tw-z-10"
                }, m.createElement("p", null, "Reward your subscribers by granting them access to exclusive products for the duration of their subscription.", " ", m.createElement("a", {
                    href: "https://creators.vrchat.com/economy/products/paid-roles",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn More")), m.createElement(i.JX, {
                    className: "tw-mb-5",
                    ref: T
                }, m.createElement(i.II, {
                    className: "tw-mb-2",
                    value: y,
                    onChange: function(e) {
                        return x(e.target.value)
                    },
                    onFocus: function() {
                        j(!0)
                    },
                    disabled: k.length >= s._1
                }), m.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, "Up to ", s._1, " products can be added"), I && k.length < s._1 && m.createElement("div", {
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
                        fallbackSrc: c,
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
                            var r;
                            r = e, C([].concat((0, n.Z)(k), [r])), j(!1), x("")
                        }
                    }, "Add")), m.createElement("hr", {
                        className: "tw-bg-[#07242B] tw-font-medium tw-border-2 tw-border-solid"
                    }))
                })) : m.createElement("div", null, m.createElement("em", null, "No matching products!")))), m.createElement(i.JX, {
                    className: "tw-gap-2 tw-mb-2 tw-min-h-[100px]"
                }, 0 !== k.length && m.createElement("label", null, "Added Products"), 0 !== k.length && k.map((function(e, t) {
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
                                var r = e.dataTransfer.getData("index"),
                                    n = Array.from(k),
                                    l = n.splice(r, 1),
                                    o = (0, a.Z)(l, 1)[0];
                                n.splice(t, 0, o), C(n)
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
                        fallbackSrc: c,
                        width: 36
                    }), m.createElement("label", {
                        className: "tw-font-bold"
                    }, e.displayName)), (null == e ? void 0 : e.id) !== (null == d ? void 0 : d.id) && m.createElement(i.zx, {
                        type: "button",
                        onClick: function() {
                            return C(k.filter((function(t) {
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
        44062: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => $
            });
            var n = r(15861),
                a = r(4942),
                l = r(54546),
                o = r(76553),
                i = r(6811),
                c = r(64687),
                s = r.n(c),
                u = r(64258),
                m = r(14411),
                d = r(98185),
                w = r(22202),
                p = r(16869),
                f = r(67978),
                g = r(45697),
                b = r.n(g),
                v = r(67294),
                E = r(32981),
                h = r(89250),
                y = r(79655),
                x = r(36078),
                N = r(45987),
                S = r(41145),
                k = r(62228),
                C = r(78076),
                O = r(67263),
                P = r(93261),
                I = ["file", "imageId"],
                j = ["file"],
                T = ["imageId"];

            function D(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? D(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : D(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var L = function(e) {
                var t = e.listing,
                    r = e.onDataChange,
                    n = void 0 === r ? function() {} : r,
                    o = e.onEditProducts,
                    i = void 0 === o ? function() {} : o,
                    c = e.productList,
                    s = v.useState({}),
                    u = (0, l.Z)(s, 2),
                    w = u[0],
                    p = u[1],
                    f = v.useState(!1),
                    g = (0, l.Z)(f, 2),
                    b = g[0],
                    E = g[1],
                    h = v.useState((null == t ? void 0 : t.file) || (null == t ? void 0 : t.imageId) || null),
                    y = (0, l.Z)(h, 2),
                    x = y[0],
                    D = y[1],
                    L = v.useState(!1),
                    A = (0, l.Z)(L, 2),
                    F = A[0],
                    X = A[1],
                    z = c || [],
                    R = (null == t ? void 0 : t.displayName) || "",
                    U = v.useState(R),
                    J = (0, l.Z)(U, 2),
                    G = J[0],
                    q = J[1],
                    M = (null == t ? void 0 : t.description) || "",
                    B = v.useState(M),
                    $ = (0, l.Z)(B, 2),
                    V = $[0],
                    _ = $[1],
                    W = (0, P.r5)({
                        groupId: t.groupId
                    }, {
                        skip: !t.groupId
                    }),
                    Y = W.data,
                    Q = W.isFetching,
                    H = W.isSuccess,
                    K = W.isError;
                v.useEffect((function() {
                    n(w)
                }), [w]);
                var ee = function(e) {
                    var t = e.target,
                        r = t.name,
                        n = t.value;
                    switch (p((function(e) {
                            return Z(Z({}, e), {}, (0, a.Z)({}, r, n))
                        })), r) {
                        case "displayName":
                            q(n);
                            break;
                        case "description":
                            _(n);
                            break;
                        case "priceTokens":
                            setPriceTokens(n);
                            break;
                        case "listingVariants":
                            setListingVariants(n)
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
                    icon: C.Vm,
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
                    value: G
                }), v.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, G.length, "/64")), v.createElement(m.JX, null, v.createElement("label", {
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
                    loading: Q
                }, H && v.createElement(m.X2, null, v.createElement(m.pw, {
                    imageId: null == Y ? void 0 : Y.imageId,
                    alt: null == Y ? void 0 : Y.displayName,
                    fallbackSrc: O,
                    fitToCover: !0,
                    className: "tw-h-7 tw-w-7 tw-mr-2"
                }), v.createElement("p", {
                    className: "tw-font-bold"
                }, null == Y ? void 0 : Y.name)), K && v.createElement("div", null, v.createElement("p", {
                    className: "tw-font-bold"
                }, t.groupId)))), v.createElement(m.JX, null, v.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2"
                }, "Associated Products ", z.length > 0 && "(".concat(z.length, ")")), 0 === z.length && v.createElement("p", {
                    className: "tw-text-placeholder-text tw-mb-0"
                }, "None"), z.length > 0 && v.createElement(m.JX, null, v.createElement("div", {
                    className: "tw-gap-2 tw-w-full tw-grid tw-grid-cols-2 tw-mb-3"
                }, (F ? z : z.slice(0, 6)).map((function(e) {
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
                        return X(!F)
                    },
                    className: "tw-mb-0 tw-appearance-none tw-bg-transparent tw-border-none tw-text-light-grey"
                }, F ? "Show Less " : "Show all products ", F ? v.createElement(m.$1, {
                    icon: k.mT
                }) : v.createElement(m.$1, {
                    icon: S.pt
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
                            r = void 0 === t ? null : t,
                            n = e.fileBlob,
                            a = void 0 === n ? null : n,
                            l = null !== r;
                        return null === r && null === a ? (D(null), void p((function(e) {
                            e.file, e.imageId;
                            return (0, N.Z)(e, I)
                        }))) : l ? (D(r), void p((function(e) {
                            e.file;
                            var t = (0, N.Z)(e, j);
                            return Z({
                                imageId: r
                            }, t)
                        }))) : (D(a), void p((function(e) {
                            e.imageId;
                            var t = (0, N.Z)(e, T);
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
            var F = r(95896),
                X = r(25062),
                z = ["currentUnitPriceTokens"];

            function R(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? R(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : R(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var J = function(e) {
                var t = e.listing,
                    r = e.onDataChange,
                    n = void 0 === r ? function() {} : r,
                    o = e.validateVariants,
                    i = void 0 === o ? function() {} : o;
                if (!t) return null;
                var c = v.useState({}),
                    s = (0, l.Z)(c, 2),
                    u = s[0],
                    d = s[1],
                    w = (null == t ? void 0 : t.priceTokens) || ((null == t ? void 0 : t.productType) === F.Pm.LISTING ? F.zD : void 0),
                    p = v.useState(w),
                    f = (0, l.Z)(p, 2),
                    g = f[0],
                    b = f[1],
                    E = (null == t ? void 0 : t.listingVariants) || [],
                    h = v.useState(F.PN.map((function(e) {
                        return E.find((function(t) {
                            return t.quantity === e
                        })) || {
                            quantity: e
                        }
                    }))),
                    y = (0, l.Z)(h, 2),
                    x = y[0],
                    S = y[1],
                    k = (null == t ? void 0 : t.duration) || 1,
                    C = v.useState(k),
                    O = (0, l.Z)(C, 2),
                    P = O[0],
                    I = (O[1], (null == t ? void 0 : t.durationType) || "months"),
                    j = v.useState(I),
                    T = (0, l.Z)(j, 2),
                    D = T[0];
                T[1];
                v.useEffect((function() {
                    n(u)
                }), [u]), v.useEffect((function() {
                    d((function(e) {
                        return U(U({}, e), {}, {
                            listingVariants: null == x ? void 0 : x.filter((function(e) {
                                return !!e.unitPriceTokens
                            })).map((function(e) {
                                var t = e.currentUnitPriceTokens,
                                    r = (0, N.Z)(e, z);
                                return U(U({
                                    unitPriceTokens: parseInt(t, 10)
                                }, r), {}, {
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
                            var r, n = e.quantity,
                                a = e.unitPriceTokens;
                            if (F.PN[t] !== n) return !1;
                            if (void 0 === a) return !0;
                            if (!/^\d*$/.test(a)) return !1;
                            var l = (null === (r = x.slice(0, t).findLast((function(e) {
                                    return e.unitPriceTokens
                                }))) || void 0 === r ? void 0 : r.unitPriceTokens) || g,
                                o = parseInt(l, 10),
                                i = parseInt(a, 10);
                            return i >= F.zD && i <= o
                        }))
                    }), [x, g]),
                    L = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x;
                        S(e.map((function(t, r) {
                            var n, a = (null === (n = e.slice(0, r).findLast((function(e) {
                                return e.unitPriceTokens
                            }))) || void 0 === n ? void 0 : n.unitPriceTokens) || g;
                            return parseInt(t.unitPriceTokens, 10) === parseInt(a, 10) ? U(U({}, t), {}, {
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
                            r = t.name,
                            n = t.value;
                        switch (d((function(e) {
                                return U(U({}, e), {}, (0, a.Z)({}, r, n))
                            })), r) {
                            case "priceTokens":
                                b(n);
                                break;
                            case "listingVariants":
                                S(n)
                        }
                    },
                    value: g,
                    min: F.zD,
                    max: F._C
                })), x.map((function(e, t) {
                    var r, n = e.quantity,
                        a = e.unitPriceTokens,
                        l = "listingVariants[".concat(t, "]_unitPriceTokens"),
                        o = (null === (r = x.slice(0, t).findLast((function(e) {
                            return e.unitPriceTokens
                        }))) || void 0 === r ? void 0 : r.unitPriceTokens) || g,
                        i = null != a ? a : o,
                        c = parseInt(g, 10),
                        s = parseInt(o, 10),
                        u = parseInt(i, 10);
                    return v.createElement(m.JX, {
                        key: l,
                        className: "tw-justify-center tw-bg-grey tw-gap-2 tw-px-3 tw-py-2 tw-rounded-lg"
                    }, v.createElement(m.X2, {
                        className: "tw-items-center"
                    }, v.createElement("label", {
                        htmlFor: l,
                        className: "tw-whitespace-nowrap tw-mr-2"
                    }, "".concat((n * P).toLocaleString(), " ").concat(n * P == 1 ? D.replace(/s$/, "") : D, " at ")), v.createElement(m.X2, {
                        className: "tw-items-center"
                    }, v.createElement(m.II, {
                        id: l,
                        type: "number",
                        className: "tw-w-[150px] tw-mr-2",
                        min: F.zD,
                        max: o,
                        size: F._C.toString(10).length + 1,
                        value: i,
                        invalid: !0 !== Z[t],
                        onChange: function(e) {
                            return function(e) {
                                var t = e.index,
                                    r = e.unitPriceTokens,
                                    n = x.map((function(e) {
                                        return U({}, e)
                                    }));
                                n[t].unitPriceTokens = parseInt(r, 10), L(n)
                            }({
                                index: t,
                                unitPriceTokens: e.target.value.slice(0, F._C.toString(10).length)
                            })
                        }
                    }), v.createElement("label", {
                        htmlFor: l
                    }, v.createElement(m.b5, {
                        className: "tw-mx-0"
                    }), function(e) {
                        var t = e.duration,
                            r = e.durationType;
                        if ("forevers" === r) return null;
                        var n = 1 === t ? r.replace(/s$/, "") : "".concat(t, " ").concat(r);
                        return "/".concat(n)
                    }({
                        duration: P,
                        durationType: D
                    }), ", ")), v.createElement("label", {
                        htmlFor: l
                    }, v.createElement("strong", null, "Total"), " ", v.createElement(m.b5, null), (n * P * u || 0).toLocaleString(), u < c && v.createElement(v.Fragment, null, " ", v.createElement(X.Z, {
                        color: "success"
                    }, Math.floor(100 - u / c * 100), "% off")), u === s && v.createElement(v.Fragment, null, " ", v.createElement(X.Z, {
                        className: "tw-text-[#DADADA] tw-bg-gray-500",
                        title: "This bundle is using the same unit price as the ".concat(0 === t ? "standard price" : "previous bundle", ".")
                    }, "Max Price")))), !0 !== Z[t] && v.createElement("div", null, v.createElement("span", {
                        className: "tw-text-red"
                    }, "Must be a whole number between ", v.createElement(m.b5, null), F.zD.toLocaleString(), " and the ", 0 === t ? "standard" : "previous bundle", " unit price", !Number.isNaN(s) && v.createElement(v.Fragment, null, " ", "of ", v.createElement(m.b5, null), (s || 0).toLocaleString()), ".")))
                })), v.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, "Set pricing for your monthly subscription plans, and consider offering discounts to attract more subscribers by reducing the monthly rates.")))
            };
            J.propTypes = {
                listing: b().object.isRequired,
                onDataChange: b().func
            };
            const G = J;

            function q(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? q(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var B = function(e) {
                e.store;
                var t = e.listingId,
                    r = e.onClose,
                    a = void 0 === r ? function() {} : r,
                    c = (0, E.I0)(),
                    g = ((0, h.s0)(), (0, w.XC)().data),
                    b = (0, v.useState)(0),
                    N = (0, l.Z)(b, 2),
                    S = N[0],
                    k = N[1],
                    C = (0, v.useState)(null),
                    O = (0, l.Z)(C, 2),
                    P = O[0],
                    I = O[1],
                    j = (0, v.useState)(null),
                    T = (0, l.Z)(j, 2),
                    D = T[0],
                    Z = T[1],
                    L = (0, v.useState)(!1),
                    F = (0, l.Z)(L, 2),
                    X = F[0],
                    z = F[1],
                    R = (0, v.useState)(null),
                    U = (0, l.Z)(R, 2),
                    J = U[0],
                    q = U[1],
                    B = (0, v.useState)([]),
                    $ = (0, l.Z)(B, 2),
                    V = $[0],
                    _ = $[1],
                    W = (0, v.useState)(!0),
                    Y = (0, l.Z)(W, 2),
                    Q = Y[0],
                    H = Y[1],
                    K = (0, p.mr)({
                        listingId: t,
                        hydrateProducts: !0
                    }),
                    ee = K.data,
                    te = K.isLoading,
                    re = (K.isError, K.error, (0, p.Ij)()),
                    ne = (0, l.Z)(re, 2),
                    ae = ne[0],
                    le = ne[1],
                    oe = (le.isLoading, le.isSuccess, le.isError, le.error, (0, f.As)()),
                    ie = (0, l.Z)(oe, 2),
                    ce = ie[0],
                    se = ie[1],
                    ue = se.data,
                    me = se.isLoading;
                se.isError, se.error;
                (0, v.useEffect)((function() {
                    if (ee) {
                        if (ee.hydratedProducts) {
                            var e = ee.products.find((function(e) {
                                return e.groupRoleId
                            }));
                            q(e), _(ee.products)
                        }
                        I(ee)
                    }
                }), [ee, te]);
                var de = function(e) {
                        I(M(M({}, P), e)), Z(M(M({}, D), e))
                    },
                    we = function() {
                        var e = (0, n.Z)(s().mark((function e() {
                            var t, r, n;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = function() {
                                            c((0, u.d)({
                                                title: "Listing updated successfully!",
                                                icon: i.f8,
                                                message: "Your listing has been updated successfully!",
                                                color: "success",
                                                timeout: 3e3
                                            })), a()
                                        }, e.prev = 1, e.next = 4, ae(M({
                                            listingId: ee.id
                                        }, D)).unwrap();
                                    case 4:
                                        t(), e.next = 11;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), c((0, u.d)({
                                            title: "Failed to update listing!",
                                            icon: o.eH,
                                            message: null !== (r = null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : "Something went wrong",
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
                        var e = null == D || !D.displayName || D.displayName.length >= 3,
                            t = "" !== (null == D ? void 0 : D.displayName),
                            r = null == D || !D.priceTokens || D.priceTokens >= 100 && D.priceTokens <= 1e4 && Number.isInteger(parseFloat(D.priceTokens)),
                            n = null == D || !D.products || D.products.length > 0;
                        return e && t && r && n && Q
                    }), [D, Q]),
                    fe = te || !P || me;
                return v.createElement(m.JX, {
                    className: "tw-w-full tw-relative"
                }, fe && v.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, v.createElement(d.Z, {
                    loading: fe
                })), !fe && !X && v.createElement(v.Fragment, null, v.createElement("div", {
                    className: "tw-w-full tw-bg-black tw-text-light-grey tw-rounded-lg tw-px-3 tw-py-4 tw-mb-3"
                }, v.createElement("p", {
                    className: "tw-mb-0 tw-text-sm"
                }, "Manage this role's permissions and requirements from your", " ", v.createElement("strong", null, v.createElement(y.rU, {
                    className: "tw-text-lighter-grey",
                    to: null != P && P.groupId && null != J && J.groupRoleId ? "/home/group/".concat(P.groupId, "/settings/roles/").concat(J.groupRoleId) : "/home/groups"
                }, "Group")), " ", "settings")), v.createElement(m.X2, {
                    className: "tw-gap-5 tw-mb-6"
                }, v.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return k(0)
                    },
                    className: "tw-bg-transparent tw-py-2 tw-border-0 tw-border-b-2 tw-border-solid ".concat(0 === S ? "tw-border-teal-accent" : "tw-border-transparent")
                }, "Overview"), v.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return k(1)
                    },
                    className: "tw-bg-transparent tw-py-2 tw-border-0 tw-border-b-2 tw-border-solid ".concat(1 === S ? "tw-border-solid tw-border-teal-accent" : "tw-border-transparent")
                }, "Pricing")), v.createElement("div", {
                    className: "tw-w-full tw-relative"
                }, 0 === S && v.createElement(A, {
                    listing: P,
                    onDataChange: de,
                    onEditProducts: function() {
                        ce({
                            userId: g.id
                        }), z(!0)
                    },
                    productList: V
                }), 1 === S && v.createElement(G, {
                    listing: P,
                    onDataChange: de,
                    validateVariants: function(e) {
                        return H(e)
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
                }, "Save"))), !fe && X && v.createElement(m.JX, null, v.createElement(x.Z, {
                    products: ue,
                    onDataChange: de,
                    associatedProduct: J,
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
            B.propTypes = {
                store: b().object,
                listing: b().object,
                onClose: b().func
            };
            const $ = B
        },
        18529: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => ge
            });
            var n = r(15861),
                a = r(45987),
                l = r(4942),
                o = r(54546),
                i = r(76553),
                c = r(64687),
                s = r.n(c),
                u = r(64258),
                m = r(14411),
                d = r(63221),
                w = r(95896),
                p = r(22202),
                f = r(93261),
                g = r(16869),
                b = r(67978),
                v = r(68157),
                E = r(67294),
                h = r(32981),
                y = r(89250),
                x = r(36078),
                N = r(82414),
                S = r(46357),
                k = r(17319),
                C = r(34233),
                O = r(7371);

            function P(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(r), !0).forEach((function(t) {
                        (0, l.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const j = function(e) {
                var t, r = e.iconChangeCallback,
                    n = void 0 === r ? function() {} : r,
                    a = e.bannerChangeCallback,
                    l = void 0 === a ? function() {} : a,
                    i = e.groupData,
                    c = e.shortCodePlaceholder,
                    s = void 0 === c ? "" : c,
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
                    icon: C._j
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
                    icon: k.di,
                    color: "#737F8D"
                }), " 0"), E.createElement("p", {
                    className: "tw-m-0"
                }, E.createElement(m.$1, {
                    icon: S.FV,
                    color: "#FFFFFF"
                }), " 0"), E.createElement("p", {
                    className: "tw-m-0"
                }, "" !== i.shortCode ? i.shortCode : s, ".0000")))), E.createElement(m.m6, {
                    preset: x,
                    isOpen: w,
                    onClose: function() {
                        return p(!1)
                    },
                    confirmCallback: (t = x, function(e) {
                        var r = e.fileId,
                            a = void 0 === r ? null : r,
                            o = e.fileBlob,
                            i = void 0 === o ? null : o;
                        if ("groupBanner" === t || "groupIcon" === t) {
                            if (null === a && null === i) {
                                var c = "groupBanner" === t ? {
                                    currentBanner: null
                                } : {
                                    currentIcon: null
                                };
                                return v((function(e) {
                                    return I(I({}, e), c)
                                })), void("groupBanner" === t ? l : n)(null)
                            }
                            if (null !== a) {
                                var s = "groupBanner" === t ? {
                                    currentBanner: a
                                } : {
                                    currentIcon: a
                                };
                                return v((function(e) {
                                    return I(I({}, e), s)
                                })), void("groupBanner" === t ? l : n)(a)
                            }
                            var u = "groupBanner" === t ? {
                                currentBanner: i
                            } : {
                                currentIcon: i
                            };
                            v((function(e) {
                                return I(I({}, e), u)
                            })), ("groupBanner" === t ? l : n)(i)
                        }
                    }),
                    cancelCallBack: function() {
                        return p(!1)
                    }
                }))
            };

            function T(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(r), !0).forEach((function(t) {
                        (0, l.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const Z = function(e) {
                var t = e.currentGroupData,
                    r = void 0 === t ? null : t,
                    n = e.onGroupDataChange,
                    a = void 0 === n ? function() {} : n,
                    i = e.generateShortCodeFromName,
                    c = void 0 === i ? function() {} : i,
                    s = e.shortCodePlaceholder,
                    u = void 0 === s ? null : s,
                    d = E.useState((null == r ? void 0 : r.banner) || (null == r ? void 0 : r.bannerId) || null),
                    w = (0, o.Z)(d, 2),
                    p = (w[0], w[1], E.useState((null == r ? void 0 : r.icon) || (null == r ? void 0 : r.iconId) || null)),
                    f = (0, o.Z)(p, 2),
                    g = (f[0], f[1], E.useState({
                        icon: (null == r ? void 0 : r.icon) || null,
                        banner: (null == r ? void 0 : r.banner) || null,
                        iconId: (null == r ? void 0 : r.iconId) || null,
                        bannerId: (null == r ? void 0 : r.bannerId) || null,
                        shortCode: (null == r ? void 0 : r.shortCode) || "",
                        name: (null == r ? void 0 : r.name) || "",
                        description: (null == r ? void 0 : r.description) || ""
                    })),
                    b = (0, o.Z)(g, 2),
                    v = b[0],
                    h = b[1],
                    y = E.useCallback((function(e, t) {
                        var r = "string" == typeof t;
                        h((function(n) {
                            var o, i = D(D({}, n), {}, (o = {}, (0, l.Z)(o, "".concat(e, "Id"), r ? t : null), (0, l.Z)(o, e, r ? null : t), o));
                            return a(i), i
                        }))
                    }), [a]),
                    x = function(e) {
                        var t = e.target,
                            r = t.name,
                            n = t.value;
                        h((function(e) {
                            var t = D(D({}, e), {}, (0, l.Z)({}, r, "shortCode" === r ? n.toUpperCase() : n));
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
                        x(e), c(e)
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
            var L = r(79655);
            const A = function(e) {
                var t = e.group,
                    r = void 0 === t ? {} : t;
                return E.createElement(m.JX, {
                    className: "tw-items-center tw-justify-center tw-mb-8 tw-text-center"
                }, E.createElement(m.pw, {
                    className: "tw-mb-5 tw-rounded-full",
                    imageId: null == r ? void 0 : r.iconId,
                    alt: null == r ? void 0 : r.name,
                    fitToCover: !0
                }), E.createElement("h4", null, null == r ? void 0 : r.name, " has been created!"), E.createElement("p", null, "You can modify, add members and customize your group from the ", E.createElement(L.rU, {
                    to: "/home/groups"
                }, "Groups"), " section."), E.createElement("p", {
                    className: "tw-font-bold tw-mb-0"
                }, "Subscriptions need to be linked to a subscription role."))
            };
            var F = r(11298),
                X = r(66007),
                z = r(81116),
                R = r(81511),
                U = r(4241),
                J = r(6811),
                G = r(83505);

            function q(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? q(Object(r), !0).forEach((function(t) {
                        (0, l.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const B = function(e) {
                var t = e.onDataChange,
                    r = void 0 === t ? function() {} : t,
                    n = (0, E.useState)({
                        joinState: d.wN.REQUEST,
                        privacy: d.TW.DEFAULT
                    }),
                    a = (0, o.Z)(n, 2),
                    l = a[0],
                    i = a[1];
                (0, E.useEffect)((function() {
                    r(l)
                }), [l]);
                var c = function(e) {
                        i(M(M({}, l), {}, {
                            joinState: e
                        }))
                    },
                    s = function(e) {
                        i(M(M({}, l), {}, {
                            privacy: e
                        }))
                    },
                    u = function(e) {
                        return e ? E.createElement(m.$1, {
                            icon: J.f8,
                            color: "#1FD1ED",
                            width: "24",
                            className: "tw-absolute tw-top-3 tw-right-3"
                        }) : E.createElement(m.$1, {
                            icon: k.di,
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
                        return c(d.wN.OPEN)
                    },
                    role: "button",
                    className: (0, G.cx)("tw-relative tw-px-5 tw-py-8 tw-text-center tw-items-center tw-bg-grey tw-border-2 tw-border-solid tw-rounded-lg hover:tw-border-button-border", l.joinState === d.wN.OPEN ? "tw-border-button-border" : "tw-border-hr-line-color")
                }, u(l.joinState === d.wN.OPEN), E.createElement(m.$1, {
                    icon: U.FK,
                    width: "48",
                    className: "tw-mb-3"
                }), E.createElement("p", {
                    className: "tw-mb-0 tw-font-bold"
                }, "Free Join"), E.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Anyone can join your group")), E.createElement(m.JX, {
                    onClick: function() {
                        return c(d.wN.REQUEST)
                    },
                    role: "button",
                    className: (0, G.cx)("tw-relative tw-flex-1 tw-px-5 tw-py-8 tw-text-center tw-items-center tw-bg-grey tw-border-2 tw-border-solid tw-rounded-lg hover:tw-border-button-border", l.joinState === d.wN.REQUEST ? "tw-border-button-border" : "tw-border-hr-line-color")
                }, u(l.joinState === d.wN.REQUEST), E.createElement(m.$1, {
                    icon: R.FU,
                    width: "48",
                    className: "tw-mb-3"
                }), E.createElement("p", {
                    className: "tw-mb-0 tw-font-bold"
                }, "Request to Join"), E.createElement("small", {
                    className: "tw-text-light-grey"
                }, "New members must reuqest to join")), E.createElement(m.JX, {
                    onClick: function() {
                        return c(d.wN.INVITE)
                    },
                    role: "button",
                    className: (0, G.cx)("tw-relative tw-flex-1 tw-px-5 tw-py-8 tw-text-center tw-items-center tw-bg-grey tw-border-2 tw-border-solid tw-rounded-lg hover:tw-border-button-border", l.joinState === d.wN.INVITE ? "tw-border-button-border" : "tw-border-hr-line-color")
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
                        return s(d.TW.DEFAULT)
                    },
                    role: "button",
                    className: (0, G.cx)("tw-relative tw-min-w-[200px] tw-gap-6 tw-p-5 tw-items-center tw-bg-grey tw-border-2 tw-border-solid tw-rounded-lg hover:tw-border-button-border", l.privacy === d.TW.DEFAULT ? "tw-border-button-border" : "tw-border-hr-line-color")
                }, u(l.privacy === d.TW.DEFAULT), E.createElement(m.$1, {
                    icon: X.KC,
                    width: "48"
                }), E.createElement(m.JX, null, E.createElement("p", {
                    className: "tw-mb-0 tw-font-bold"
                }, "Public"), E.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Members can choose to advertise the group on their profile"))), E.createElement(m.X2, {
                    onClick: function() {
                        return s(d.TW.PRIVATE)
                    },
                    role: "button",
                    className: (0, G.cx)("tw-relative tw-min-w-[200px] tw-gap-6 tw-p-5 tw-items-center tw-bg-grey tw-border-2 tw-border-solid tw-rounded-lg hover:tw-border-button-border", l.privacy === d.TW.PRIVATE ? "tw-border-button-border" : "tw-border-hr-line-color")
                }, u(l.privacy === d.TW.PRIVATE), E.createElement(m.$1, {
                    icon: F.BC,
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
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function V(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $(Object(r), !0).forEach((function(t) {
                        (0, l.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
                    r = void 0 === t ? function() {} : t,
                    n = e.role,
                    a = void 0 === n ? _ : n,
                    i = E.useState(a),
                    c = (0, o.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    d = function(e) {
                        var t = e.target,
                            n = t.name,
                            a = t.value;
                        u((function(e) {
                            var t = V(V({}, e), {}, (0, l.Z)({}, n, a));
                            return r(t), t
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
                    value: s.name,
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
                    value: s.description,
                    maxLength: 1024,
                    "aria-labelledby": "roleDescription",
                    "aria-describedby": "roleDescriptionHelp"
                }), E.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, s.description.length, "/1024 characters"), E.createElement("span", {
                    id: "roleDescriptionHelp",
                    className: "tw-sr-only"
                }, "Enter a description for the paid role. Maximum length is 1024 characters.")))
            };
            var Y = r(42138),
                Q = r(12752),
                H = r(64358),
                K = {
                    permissions: [],
                    productGroupAccess: !1,
                    requiresTwoFactor: !1,
                    productGroupAccessRemove: !1
                };
            const ee = function(e) {
                var t, r = e.onDataChange,
                    n = void 0 === r ? function() {} : r,
                    a = e.groupPermissions,
                    l = void 0 === a ? [] : a,
                    i = e.groupInfo,
                    c = void 0 === i ? {} : i,
                    s = e.role,
                    u = void 0 === s ? K : s,
                    d = E.useState(u.permissions),
                    w = (0, o.Z)(d, 2),
                    p = w[0],
                    f = w[1],
                    g = E.useState(null),
                    b = (0, o.Z)(g, 2),
                    v = b[0],
                    h = b[1],
                    y = E.useState("open" === (null == c ? void 0 : c.joinState) || u.productGroupAccess),
                    x = (0, o.Z)(y, 2),
                    N = x[0],
                    S = x[1],
                    k = E.useState(u.productGroupAccessRemove),
                    C = (0, o.Z)(k, 2),
                    O = C[0],
                    P = C[1],
                    I = E.useState(u.requiresTwoFactor),
                    j = (0, o.Z)(I, 2),
                    T = j[0],
                    D = j[1];
                E.useEffect((function() {
                    n({
                        permissions: p,
                        productGroupAccess: N,
                        requiresTwoFactor: T,
                        productGroupAccessRemove: O
                    })
                }), [p, N, T, O]);
                var Z = (0, Q._b)(l),
                    L = E.useMemo((function() {
                        return (0, H.Ps)({
                            permissionName: v,
                            permissionsMap: Z
                        })
                    }), [v, Z]),
                    A = "open" === (null == c ? void 0 : c.joinState) ? "Since your group setting is Free Join, all users who subscribe will be automatically added to your group without needing approval. They'll remain part of the group after their subscription ends." : "Since your group setting is not Free Join, any user in VRChat can purchase this role and be added to the group, no matter what the group's join rules are.";
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
                    defaultChecked: T,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        return D(t)
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
                        return S(t)
                    },
                    disabled: "open" === (null == c ? void 0 : c.joinState) || "closed" === (null == c ? void 0 : c.joinState)
                })), N && "open" !== (null == c ? void 0 : c.joinState) && E.createElement(m.JX, {
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
                            var r = t.checked;
                            return function(e, t) {
                                var r;
                                if (t) {
                                    var n = (0, H.QZ)({
                                        permissionName: e,
                                        permissionsMap: Z
                                    });
                                    return f([].concat((0, Y.Z)(p), [e], (0, Y.Z)(n)))
                                }
                                var a = Z[e];
                                if (null !== (r = a.computedDependedOnBy) && void 0 !== r && r.size && p.some((function(e) {
                                        return a.computedDependedOnBy.has(e)
                                    }))) return h(e);
                                f(p.filter((function(t) {
                                    return t !== e
                                })))
                            }(e.name, r)
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
            var te = r(4965);
            const re = function(e) {
                var t, r, n = e.user,
                    a = e.groups,
                    l = e.onGroupSelect,
                    i = void 0 === l ? function() {} : l,
                    c = null !== (t = null == n || null === (r = n.tagsSet) || void 0 === r ? void 0 : r.has("system_supporter")) && void 0 !== t && t,
                    s = E.useState(""),
                    u = (0, o.Z)(s, 2),
                    m = u[0],
                    d = u[1],
                    w = E.useMemo((function() {
                        return a && n ? null == a ? void 0 : a.filter((function(e) {
                            return (null == e ? void 0 : e.ownerId) === (null == n ? void 0 : n.id)
                        })) : []
                    }), [a, n]);
                return E.createElement("div", {
                    className: "tw-mb-4 tw-min-h-[100px] tw-w-full"
                }, E.createElement("p", {
                    className: "tw-mb-2"
                }, "Select Group"), E.createElement(ne, {
                    className: "tw-w-full",
                    id: "group_select",
                    "aria-label": "Select a group",
                    name: "group_select",
                    label: "",
                    value: m,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        if (null === r) return i(null), void d("+ Create New Group");
                        var n = w.find((function(e) {
                            return e.name === r
                        }));
                        d(r), i(n)
                    }
                }, E.createElement("option", {
                    value: "",
                    disabled: !0
                }, 0 === w.length && "No Available Groups"), w.length > 0 && w.map((function(e) {
                    return E.createElement("option", {
                        key: e.name,
                        value: e.name
                    }, e.name)
                })), w.length < 5 && c && E.createElement("option", {
                    key: "Create New Group",
                    value: null
                }, "+ Create New Group")))
            };
            var ne = (0, te.Z)("select", {
                target: "e1iz8sio0"
            })("padding:0.45rem 0.75rem;height:unset;background:#05191d;border:#053c48 solid 2px;border-color:", (function(e) {
                return e.isError ? "#A8342E" : "#053c48"
            }), ";border-radius:4px;outline:none!important;color:#6ae3f9;min-width:100px;&:active,&:hover,&:focus{background:#07343f;color:#6ae3f9;border-color:", (function(e) {
                return e.isError ? "#A8342E" : "#086c84"
            }), ";}");
            const ae = function(e) {
                var t = e.listing,
                    r = void 0 === t ? {} : t;
                return E.createElement(m.JX, {
                    className: "tw-text-center tw-mb-8 tw-items-center"
                }, E.createElement(m.pw, {
                    className: "tw-mb-5 tw-rounded-lg",
                    imageId: null == r ? void 0 : r.imageId,
                    alt: null == r ? void 0 : r.displayName,
                    width: 150
                }), E.createElement("h4", null, "Subscription Created"), E.createElement("p", null, "Your subscription is ready! Make sure your group store is enabled to start selling."))
            };
            var le = r(78076),
                oe = r(25062),
                ie = ["file"],
                ce = ["imageId"];

            function se(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function ue(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? se(Object(r), !0).forEach((function(t) {
                        (0, l.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : se(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const me = function(e) {
                var t = e.onDataChange,
                    r = void 0 === t ? function() {} : t,
                    n = e.listing,
                    i = void 0 === n ? {} : n,
                    c = e.currentChanges,
                    s = e.validateVariants,
                    u = void 0 === s ? function() {} : s,
                    d = E.useState({}),
                    p = (0, o.Z)(d, 2),
                    f = p[0],
                    g = p[1],
                    b = E.useState(!1),
                    v = (0, o.Z)(b, 2),
                    h = v[0],
                    y = v[1],
                    x = E.useState((null == c ? void 0 : c.imageId) || (null == c ? void 0 : c.file) || null),
                    N = (0, o.Z)(x, 2),
                    S = N[0],
                    k = N[1],
                    C = E.useState(""),
                    O = (0, o.Z)(C, 2),
                    P = (O[0], O[1]),
                    I = (null == c ? void 0 : c.displayName) || (null == i ? void 0 : i.displayName) || "",
                    j = E.useState(I),
                    T = (0, o.Z)(j, 2),
                    D = T[0],
                    Z = T[1],
                    L = (null == c ? void 0 : c.description) || (null == i ? void 0 : i.description) || "",
                    A = E.useState(L),
                    F = (0, o.Z)(A, 2),
                    X = F[0],
                    z = F[1],
                    R = (null == c ? void 0 : c.priceTokens) || (null == i ? void 0 : i.priceTokens) || ((null == i ? void 0 : i.productType) === w.Pm.LISTING ? w.zD : void 0),
                    U = E.useState(R),
                    J = (0, o.Z)(U, 2),
                    G = J[0],
                    q = J[1],
                    M = (null == c ? void 0 : c.listingVariants) || (null == i ? void 0 : i.listingVariants) || [],
                    B = E.useState(w.PN.map((function(e) {
                        return M.find((function(t) {
                            return t.quantity === e
                        })) || {
                            quantity: e
                        }
                    }))),
                    $ = (0, o.Z)(B, 2),
                    V = $[0],
                    _ = $[1],
                    W = (null == c ? void 0 : c.duration) || (null == i ? void 0 : i.duration) || 1,
                    Y = E.useState(W),
                    Q = (0, o.Z)(Y, 2),
                    H = Q[0],
                    K = (Q[1], (null == c ? void 0 : c.durationType) || (null == i ? void 0 : i.durationType) || "months"),
                    ee = E.useState(K),
                    te = (0, o.Z)(ee, 2),
                    re = te[0];
                te[1];
                E.useEffect((function() {
                    r(f)
                }), [f]);
                var ne = function(e) {
                    var t = e.target,
                        r = t.name,
                        n = t.value;
                    switch (g((function(e) {
                            return ue(ue({}, e), {}, (0, l.Z)({}, r, n))
                        })), r) {
                        case "displayName":
                            Z(n);
                            break;
                        case "description":
                            z(n);
                            break;
                        case "priceTokens":
                            q(n);
                            break;
                        case "listingVariants":
                            _(n)
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
                            var r, n = e.quantity,
                                a = e.unitPriceTokens;
                            if (w.PN[t] !== n) return !1;
                            if (void 0 === a) return !0;
                            if (!/^\d*$/.test(a)) return !1;
                            var l = (null === (r = V.slice(0, t).findLast((function(e) {
                                    return e.unitPriceTokens
                                }))) || void 0 === r ? void 0 : r.unitPriceTokens) || G,
                                o = parseInt(l, 10),
                                i = parseInt(a, 10);
                            return i >= w.zD && i <= o
                        }))
                    }), [V, G]),
                    se = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
                            t = e.map((function(t, r) {
                                var n, a = (null === (n = e.slice(0, r).findLast((function(e) {
                                    return e.unitPriceTokens
                                }))) || void 0 === n ? void 0 : n.unitPriceTokens) || G;
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
                    se(V)
                }), [G]);
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
                }, !S && E.createElement(m.zx, {
                    containerClasses: "tw-rounded tw-absolute tw-flex-1"
                }, E.createElement(m.$1, {
                    icon: le.Vm,
                    className: "tw-mr-2"
                }), E.createElement("span", null, "Upload Thumbnail")), E.createElement(m.pw, {
                    imageId: S,
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
                    onChange: ne,
                    maxLength: 64,
                    value: D
                }), E.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, D.length, "/64")), E.createElement(m.JX, null, E.createElement("label", {
                    htmlFor: "description"
                }, "Description"), E.createElement(m.gx, {
                    name: "description",
                    onChange: ne,
                    value: X,
                    maxLength: 256,
                    inputClassName: "tw-h-[135px]"
                }), E.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, X.length, "/256")))), E.createElement(m.JX, {
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
                    onChange: ne,
                    value: G,
                    step: "1",
                    min: w.zD,
                    max: w._C
                })), V.map((function(e, t) {
                    var r, n = e.quantity,
                        a = e.unitPriceTokens,
                        l = "listingVariants[".concat(t, "]_unitPriceTokens"),
                        o = (null === (r = V.slice(0, t).findLast((function(e) {
                            return e.unitPriceTokens
                        }))) || void 0 === r ? void 0 : r.unitPriceTokens) || G,
                        i = null != a ? a : o,
                        c = parseInt(G, 10),
                        s = parseInt(o, 10),
                        u = parseInt(i, 10);
                    return E.createElement(m.JX, {
                        key: l,
                        className: "tw-justify-center"
                    }, E.createElement(m.X2, {
                        className: "tw-items-center tw-mb-2"
                    }, E.createElement("label", {
                        htmlFor: l,
                        className: "tw-whitespace-nowrap tw-mr-2"
                    }, "".concat((n * H).toLocaleString(), " ").concat(n * H == 1 ? re.replace(/s$/, "") : re, " at ")), E.createElement(m.X2, {
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
                                    r = e.unitPriceTokens,
                                    n = V.map((function(e) {
                                        return ue({}, e)
                                    }));
                                n[t].unitPriceTokens = r, se(n)
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
                            r = e.durationType;
                        if ("forevers" === r) return null;
                        var n = 1 === t ? r.replace(/s$/, "") : "".concat(t, " ").concat(r);
                        return "/".concat(n)
                    }({
                        duration: H,
                        durationType: re
                    }), ", ")), E.createElement("label", {
                        htmlFor: l
                    }, E.createElement("strong", null, "Total"), " ", E.createElement(m.b5, null), (n * H * u || 0).toLocaleString(), u < c && E.createElement(E.Fragment, null, " ", E.createElement(oe.Z, {
                        color: "success"
                    }, Math.floor(100 - u / c * 100), "% off")), u === s && E.createElement(E.Fragment, null, " ", E.createElement(oe.Z, {
                        className: "tw-text-[#DADADA] tw-bg-gray-500",
                        title: "This bundle is using the same unit price as the ".concat(0 === t ? "standard price" : "previous bundle", ".")
                    }, "Max Price")))), !0 !== ae[t] && E.createElement("div", null, E.createElement("span", {
                        className: "tw-text-red"
                    }, "Must be a whole number between ", E.createElement(m.b5, null), w.zD.toLocaleString(), " and the ", 0 === t ? "standard" : "previous bundle", " unit price", !Number.isNaN(s) && E.createElement(E.Fragment, null, " ", "of ", E.createElement(m.b5, null), (s || 0).toLocaleString()), ".")))
                })), E.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, "Set pricing for your monthly subscription plans, and consider offering discounts to attract more subscribers by reducing the monthly rates."))), E.createElement(m.m6, {
                    preset: "subscription",
                    image: S,
                    isOpen: h,
                    onClose: function() {
                        return y(!1)
                    },
                    confirmCallback: function(e) {
                        var t = e.fileId,
                            r = void 0 === t ? null : t,
                            n = e.fileBlob,
                            l = void 0 === n ? null : n,
                            o = null !== r;
                        return null === r && null === l ? (k(null), void g((function(e) {
                            return ue({
                                file: null,
                                imageId: null
                            }, e)
                        }))) : o ? (k(r), void g((function(e) {
                            e.file;
                            var t = (0, a.Z)(e, ie);
                            return ue({
                                imageId: r
                            }, t)
                        }))) : (k(l), void g((function(e) {
                            e.imageId;
                            var t = (0, a.Z)(e, ce);
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
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function fe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? pe(Object(r), !0).forEach((function(t) {
                        (0, l.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pe(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const ge = function(e) {
                var t = e.user,
                    r = void 0 === t ? null : t,
                    l = e.onClose,
                    c = void 0 === l ? function() {} : l,
                    N = (e.groupData, (0, h.I0)()),
                    S = (0, y.s0)(),
                    k = (0, h.v9)((function(e) {
                        return e.myStoreCreateSubscription
                    })),
                    C = (k.previousStep, k.currentStep),
                    O = k.selectedGroup,
                    P = (0, p.XC)({
                        skip: r
                    }).data,
                    I = E.useState("Next"),
                    j = (0, o.Z)(I, 2),
                    T = j[0],
                    D = j[1],
                    L = E.useState(!1),
                    F = (0, o.Z)(L, 2),
                    X = F[0],
                    z = F[1],
                    R = E.useState(!1),
                    U = (0, o.Z)(R, 2),
                    J = U[0],
                    G = U[1],
                    q = E.useState({}),
                    M = (0, o.Z)(q, 2),
                    $ = M[0],
                    V = M[1],
                    _ = E.useState(null),
                    Y = (0, o.Z)(_, 2),
                    Q = Y[0],
                    H = Y[1],
                    K = (0, E.useState)(!0),
                    te = (0, o.Z)(K, 2),
                    ne = te[0],
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
                    ce = ie[0],
                    se = ie[1],
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
                    Se = Ne[0],
                    ke = Ne[1],
                    Ce = E.useState([]),
                    Oe = (0, o.Z)(Ce, 2),
                    Pe = Oe[0],
                    Ie = Oe[1],
                    je = r || P,
                    Te = (0, f.dj)({
                        userId: null == je ? void 0 : je.id
                    }, {
                        skip: !je
                    }),
                    De = Te.data,
                    Ze = void 0 === De ? [] : De,
                    Le = Te.isLoading,
                    Ae = (0, f.mt)({
                        groupId: null == O ? void 0 : O.id
                    }, {
                        skip: !O,
                        refetchOnMountOrArgChange: !0
                    }),
                    Fe = Ae.data,
                    Xe = Ae.isLoading,
                    ze = Ae.isError,
                    Re = (0, f.mm)(),
                    Ue = (0, o.Z)(Re, 2),
                    Je = Ue[0],
                    Ge = Ue[1],
                    qe = (Ge.isSuccess, Ge.isLoading),
                    Me = (Ge.isError, Ge.error, (0, f.Pt)()),
                    Be = (0, o.Z)(Me, 2),
                    $e = Be[0],
                    Ve = Be[1],
                    _e = (Ve.isSuccess, Ve.isLoading, Ve.isError, Ve.error, (0, g.Ij)()),
                    We = (0, o.Z)(_e, 2),
                    Ye = We[0],
                    Qe = We[1],
                    He = (Qe.isSuccess, Qe.isLoading, Qe.isError, Qe.error, (0, f.nz)()),
                    Ke = (0, o.Z)(He, 2),
                    et = Ke[0],
                    tt = Ke[1],
                    rt = (tt.data, tt.isLoading, tt.isError, tt.error, (0, g.ft)()),
                    nt = (0, o.Z)(rt, 2),
                    at = nt[0],
                    lt = nt[1],
                    ot = (lt.data, lt.isLoading, lt.isError, lt.error, (0, b.As)()),
                    it = (0, o.Z)(ot, 2),
                    ct = it[0],
                    st = it[1],
                    ut = st.data,
                    mt = (st.isLoading, st.isError, st.error, (0, b.RM)()),
                    dt = (0, o.Z)(mt, 2),
                    wt = dt[0],
                    pt = dt[1];
                pt.data, pt.isLoading, pt.isError, pt.error;
                (0, E.useEffect)((function() {
                    return D("Create Subscription" === C && X ? "Create" : "groupCreated" === C ? "Create Subscription Role" : "createdSubscription" === C ? "Go to Store Manager" : "Next")
                }), [C, X]);
                var ft = function(e) {
                        se((function(t) {
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
                            var r = fe(fe({}, t), e);
                            if (null === e.imageId) {
                                r.imageId;
                                return (0, a.Z)(r, de)
                            }
                            if (null === e.file) {
                                r.file;
                                return (0, a.Z)(r, we)
                            }
                            return r
                        }))
                    },
                    vt = function() {
                        var e = (0, n.Z)(s().mark((function e() {
                            var t, r, n, a, l, o, c, m, d, w, p, f, g, b, E;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        e.t0 = C, e.next = "Create Subscription" === e.t0 ? 3 : "Create Group" === e.t0 ? 19 : "Define Group Rules" === e.t0 ? 22 : "groupCreated" === e.t0 ? 37 : "Create Subscription Role" === e.t0 ? 41 : "Subscription Role Permissions" === e.t0 ? 44 : "Define Subscription" === e.t0 ? 65 : "Add Products" === e.t0 ? 69 : "createdSubscription" === e.t0 ? 83 : 85;
                                        break;
                                    case 3:
                                        if (!X) {
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
                                            message: null !== (r = null === (n = e.t1.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 18:
                                        return e.abrupt("break", 87);
                                    case 19:
                                        return N((0, v.Bq)("Define Group Rules")), N((0, v.IT)("Create Group")), e.abrupt("break", 87);
                                    case 22:
                                        return z(!0), e.prev = 23, a = fe(fe({}, ce), {}, {
                                            shortCode: "" === ce.shortCode ? Q : ce.shortCode
                                        }), e.next = 27, Je(a).unwrap();
                                    case 27:
                                        l = e.sent, N((0, v.lr)(l.group)), N((0, v.Bq)("groupCreated")), N((0, v.BQ)(!0)), e.next = 36;
                                        break;
                                    case 33:
                                        e.prev = 33, e.t2 = e.catch(23), N((0, u.d)({
                                            title: "Failed to create group!",
                                            icon: i.eH,
                                            message: null !== (o = null === (c = e.t2.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message) && void 0 !== o ? o : "Something went wrong",
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
                                        w = e.sent, ke(w), ye(d), 0 === Pe.length && d.hydratedProducts && Ie(d.products), N((0, v.Bq)("Define Subscription")), N((0, v.IT)(null)), e.next = 64;
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
                                        return ct({
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
                                        return S("/home/marketplace/storefront/stores"), e.abrupt("break", 87);
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
                    Et = Le || Xe || qe;
                return (0, E.useEffect)((function() {
                    if ("Create Subscription" !== C) {
                        if ("Create Group" === C) {
                            var e = ce.name.length >= 3 && ce.name.length < 64 && "" !== ce.name,
                                t = "" === ce.shortCode || ce.shortCode.length >= 3 && ce.shortCode.length <= 6;
                            return e && t ? !ce.name || ce.name.length >= 64 ? void G(!1) : G(!0) : void G(!1)
                        }
                        if ("Define Subscription" === C) {
                            var r = (null == he ? void 0 : he.displayName.length) >= 3,
                                n = (null == he ? void 0 : he.priceTokens) >= 100 && (null == he ? void 0 : he.priceTokens) <= 1e4 && Number.isInteger(parseFloat(null == he ? void 0 : he.priceTokens));
                            return G(r && n && ne)
                        }
                        return G("Create Subscription Role" === C ? ge.name.length <= 64 && 0 !== ge.name.length : "Add Products" === C ? Pe.length > 0 && Pe.length <= w._1 : !Et)
                    }
                    G(null !== O || X)
                }), [C, O, X, ce, ge, Et, he, ne]), E.createElement(m.JX, {
                    className: "tw-w-full"
                }, "Create Subscription" === C && E.createElement(re, {
                    user: je,
                    groups: Ze,
                    onGroupSelect: function(e) {
                        if (!e) return z(!0), void N((0, v.lr)(null));
                        z(!1), N((0, v.lr)(e))
                    }
                }), "Create Group" === C && !O && E.createElement(Z, {
                    currentGroupData: ce,
                    onGroupDataChange: ft,
                    generateShortCodeFromName: function(e) {
                        var t = e.target.value,
                            r = t.length >= 3 ? t.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().substring(0, 6) : null;
                        H(r)
                    },
                    shortCodePlaceholder: Q
                }), "Define Group Rules" === C && E.createElement(B, {
                    onDataChange: ft
                }), "groupCreated" === C && E.createElement(A, {
                    group: O
                }), "Create Subscription Role" === C && E.createElement(W, {
                    onDataChange: gt,
                    role: ge
                }), "Subscription Role Permissions" === C && E.createElement(ee, {
                    onDataChange: gt,
                    role: ge,
                    groupPermissions: Fe,
                    isError: ze,
                    roleInfo: ge,
                    groupInfo: O
                }), "Define Subscription" === C && he && E.createElement(me, {
                    listing: he,
                    validateVariants: function(e) {
                        return le(e)
                    },
                    onDataChange: bt,
                    currentChanges: $
                }), "Add Products" === C && E.createElement(x.Z, {
                    products: ut,
                    listing: he,
                    associatedProduct: Se,
                    existingProducts: Pe,
                    onDataChange: bt,
                    onAddedProducts: function(e) {
                        return Ie(e)
                    }
                }), "createdSubscription" === C && E.createElement(ae, {
                    listing: he
                }), E.createElement(m.X2, {
                    className: "tw-gap-2"
                }, "groupCreated" !== C && E.createElement(m.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: c,
                    neutral: !0
                }, "createdSubscription" === C ? "Finish" : "Cancel"), E.createElement(m.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: vt,
                    disabled: !J
                }, T)))
            }
        },
        95146: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => qe
            });
            var n = r(15861),
                a = r(54546),
                l = r(2293),
                o = r(94902),
                i = r(34327),
                c = r(96914),
                s = r(64687),
                u = r.n(s),
                m = r(67294),
                d = r(79655),
                w = r(89250),
                p = r(14411),
                f = r(72998),
                g = r(46320),
                b = r(4942),
                v = r(62475),
                E = r(96766),
                h = r(40098),
                y = r(95337),
                x = r(98185),
                N = r(35187),
                S = r(95896),
                k = r(76176),
                C = r(22202),
                O = r(16869),
                P = r(68157),
                I = r(32981);
            const j = r.p + "8483efe53b992e51983c5f56d5ebb938550f39f1a72d1258f3b30353f7ad369c.svg",
                T = r.p + "aab2cd88e8f1da1b8209f5e30357c5ba59c64949f9079b0f33e3d05609c6e1da.svg",
                D = r.p + "f3de2219aad5eed5eceeb782bdf669066f23fe34ed832e88d74183128849e5c0.svg";
            const Z = function(e) {
                var t = e.createSubscription,
                    r = void 0 === t ? function() {} : t;
                return m.createElement(p.JX, {
                    className: "tw-text-center tw-gap-9 tw-mt-12"
                }, m.createElement("h4", null, "Kickstart Your Subscription Program"), m.createElement(p.X2, {
                    className: "tw-justify-evenly tw-gap-12"
                }, m.createElement(p.JX, {
                    className: "tw-items-center"
                }, m.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, m.createElement("img", {
                    src: T,
                    alt: "Generate consistent earnings from your supporters."
                })), m.createElement("h4", null, "Earn Rewarding Income"), m.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Generate consistent earnings from your supporters.")), m.createElement(p.JX, {
                    className: "tw-items-center"
                }, m.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, m.createElement("img", {
                    src: D,
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
                    onClick: r
                }, m.createElement(p.$1, {
                    icon: h.r8
                }), " Create Subscription"), m.createElement("a", {
                    href: "https://creators.vrchat.com/economy/products/paid-roles",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn more about subscriptions")))
            };
            var L = r(44062),
                A = r(18529),
                F = r(76553),
                X = r(6811),
                z = r(64258),
                R = r(45697),
                U = r.n(R),
                J = function(e) {
                    var t = e.onClose,
                        r = void 0 === t ? function() {} : t,
                        l = e.listing;
                    if (!l) return null;
                    var o = (0, I.I0)(),
                        i = (0, O.Ij)(),
                        c = (0, a.Z)(i, 2),
                        s = c[0],
                        d = c[1],
                        w = d.isLoading,
                        f = (d.isSuccess, d.isError, d.error, function() {
                            var e = (0, n.Z)(u().mark((function e() {
                                var t, n, a;
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, s({
                                                listingId: l.id,
                                                active: !l.active
                                            }).unwrap();
                                        case 3:
                                            t = e.sent, o((0, z.d)({
                                                title: "Listing ".concat(t.listing.active ? "published" : "unpublished"),
                                                icon: X.f8,
                                                message: "".concat(l.displayName, " has been ").concat(t.listing.active ? "published" : "unpublished", "."),
                                                color: "success",
                                                timeout: 3e3
                                            })), r(), e.next = 12;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), console.error(e.t0), o((0, z.d)({
                                                title: "Failed to ".concat(l.active ? "unpublish" : "publish", " listing"),
                                                icon: F.eH,
                                                message: null !== (n = null === (a = e.t0.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== n ? n : "Something went wrong",
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
                        onClick: r,
                        containerClasses: "tw-flex-1"
                    }, "Cancel"), m.createElement(p.zx, {
                        type: "button",
                        containerClasses: "tw-flex-1",
                        loading: w,
                        onClick: f
                    }, l.active ? "Move to Draft" : "Publish Listing")))
                };
            J.propTypes = {
                onClose: U().func,
                listing: U().object
            };
            const G = J;
            var q = r(2909),
                M = r(27484),
                B = r.n(M),
                $ = r(97798);
            const V = function(e) {
                var t = e.active,
                    r = void 0 !== t && t,
                    n = e.editAction,
                    l = void 0 === n ? function() {} : n,
                    o = e.deleteAction,
                    i = void 0 === o ? function() {} : o,
                    c = e.publishAction,
                    s = void 0 === c ? function() {} : c,
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
                    onClick: s,
                    className: "tw-p-0 tw-w-full tw-text-left hover:tw-text-white tw-text-option-inactive tw-border-none tw-bg-transparent"
                }, r ? "Move to Draft" : "Publish"), m.createElement("hr", {
                    className: "tw-border-t-2 tw-border-solid tw-w-full tw-border-white tw-my-2"
                }), m.createElement("button", {
                    type: "button",
                    onClick: i,
                    className: "tw-p-0 tw-w-full tw-text-left hover:tw-text-white tw-text-red tw-border-none tw-bg-transparent"
                }, "Delete"))))
            };
            var _ = function(e) {
                var t = e.listingData,
                    r = void 0 === t ? null : t,
                    n = e.editListingCallback,
                    a = void 0 === n ? function() {} : n,
                    l = e.deleteListingCallback,
                    o = void 0 === l ? function() {} : l,
                    i = e.publishListingCallback,
                    c = void 0 === i ? function() {} : i,
                    s = (0, I.I0)();
                if (null === r) return null;
                var u = r.id,
                    d = r.displayName,
                    w = r.created,
                    f = r.updated,
                    g = r.active,
                    b = r.groupName;
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
                }, B()(w).format("ll")), m.createElement("div", {
                    className: "tw-items-center tw-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/my-subscriptions:tw-max-w-max tw-hidden @[700px]/my-subscriptions:tw-flex"
                }, B()(f).format("ll")), m.createElement("div", {
                    className: "tw-flex tw-items-center tw-h-9 tw-my-2 tw-truncate @[800px]/my-subscriptions:tw-max-w-max"
                }, g ? "Published" : "Draft"), m.createElement(p.X2, {
                    className: "tw-h-9 tw-truncate tw-my-2 tw-max-w-[100px] tw-gap-2"
                }, m.createElement(p.zx, {
                    className: "tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        navigator.clipboard.writeText(u).then((function() {
                            s((0, z.d)({
                                title: "Copied subscription ID",
                                icon: X.f8,
                                message: "Subscription ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(e) {
                            var t, r;
                            s((0, z.d)({
                                title: "Failed to copy subscription ID",
                                icon: F.eH,
                                message: null !== (t = null === (r = res.error.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== t ? t : "Failed to copy subscription ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, m.createElement(p.$1, {
                    icon: q.kZ,
                    size: "1x"
                })), m.createElement(V, {
                    active: null == r ? void 0 : r.active,
                    editAction: function() {
                        return a(r)
                    },
                    deleteAction: function() {
                        return o(r)
                    },
                    publishAction: function() {
                        return c(r)
                    }
                })))))
            };
            _.propTypes = {
                listingData: U().object
            };
            const W = _;
            var Y = r(22717);

            function Q(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function H(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Q(Object(r), !0).forEach((function(t) {
                        (0, b.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Q(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var K = [{
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
                    r = (0, w.s0)(),
                    n = (0, d.lr)(),
                    l = (0, a.Z)(n, 2),
                    o = l[0],
                    i = (l[1], (0, I.v9)((function(e) {
                        return e.myStoreCreateSubscription
                    }))),
                    c = i.previousStep,
                    s = i.currentStep,
                    u = (0, w.UO)().paginationPage,
                    f = u ? Number(u) : 1,
                    g = (0, m.useState)(""),
                    b = (0, a.Z)(g, 2),
                    j = b[0],
                    T = b[1],
                    D = (0, m.useState)(o.get("sortBy") || null),
                    F = (0, a.Z)(D, 2),
                    X = F[0],
                    z = F[1],
                    R = (0, m.useState)(o.get("orderBy") || "descending"),
                    U = (0, a.Z)(R, 2),
                    J = U[0],
                    q = U[1],
                    M = m.useState({}),
                    B = (0, a.Z)(M, 2),
                    $ = B[0],
                    V = B[1],
                    _ = m.useState(!1),
                    Q = (0, a.Z)(_, 2),
                    te = Q[0],
                    re = Q[1],
                    ne = ((0, k.Z)(j), (0, C.IB)().data),
                    ae = (0, m.useMemo)((function() {
                        return {
                            sellerId: ne.id,
                            n: 50,
                            pageValue: f
                        }
                    }), [f]),
                    le = (0, O.Ul)(H({
                        userId: ne.id,
                        listingType: "subscription"
                    }, ae), {
                        skip: !ne.id,
                        refetchOnMountOrArgChange: !0
                    }),
                    oe = le.data,
                    ie = le.isSuccess,
                    ce = le.isFetching,
                    se = le.isError,
                    ue = le.error;
                (0, m.useEffect)((function() {
                    $.isCreating && V((function(e) {
                        return H(H({}, e), {}, {
                            title: s
                        })
                    }))
                }), [s]);
                var me, de = function(e) {
                        var t = e.title,
                            r = void 0 === t ? "" : t,
                            n = e.data,
                            a = void 0 === n ? void 0 : n,
                            l = e.isCreating,
                            o = void 0 !== l && l,
                            i = e.isEditing,
                            c = void 0 !== i && i,
                            s = e.isDeleting,
                            u = void 0 !== s && s,
                            m = e.isPublishing,
                            d = void 0 !== m && m,
                            w = e.productType,
                            p = void 0 === w ? S.Pm.UDON : w;
                        re(!0), V({
                            title: r,
                            data: a,
                            isCreating: o,
                            isEditing: c,
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
                        re(!1), V({}), t((0, P.IT)(null)), t((0, P.BQ)(!1)), t((0, P.lr)(null)), t((0, P.Bq)("Create Subscription"))
                    },
                    be = function(e) {
                        return X === e
                    },
                    ve = function(e) {
                        if (ee.includes(e)) return function(e) {
                            return be(e) ? q("descending" === J ? "ascending" : "descending") : (z(e), q("ascending"))
                        }(e)
                    };
                return m.createElement(m.Fragment, null, m.createElement(p.$4, null, "My Subscriptions"), 0 !== (null == oe ? void 0 : oe.length) || ce || 1 !== f ? m.createElement(m.Fragment, null, m.createElement(p.X2, {
                    className: "tw-justify-between tw-gap-x-5 tw-gap-y-3 tw-flex-wrap tw-mt-6"
                }, m.createElement("div", null, m.createElement(p.II, {
                    icon: y.wn,
                    type: "text",
                    rawInputClassName: "tw-h-9",
                    className: "tw-w-full tw-max-w-[515px] tw-hidden",
                    value: j,
                    onChange: function(e) {
                        return T(e.target.value)
                    },
                    placeholder: "Search by name or listing ID",
                    disabled: !0
                })), m.createElement(p.zx, {
                    "aria-label": "Create Subscription",
                    className: "tw-px-2",
                    onClick: function() {
                        return de({
                            title: s,
                            data: {},
                            isEditing: !1,
                            isCreating: !0,
                            productType: S.Pm.ROLE
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
                }, K.map((function(e) {
                    var t = e.label,
                        r = e.value,
                        n = e.canCollapse,
                        a = void 0 !== n && n,
                        l = e.isSmallColumn,
                        o = void 0 !== l && l;
                    return m.createElement("span", {
                        key: r,
                        className: "\n                  ".concat(be(r) ? "tw-text-light-white" : "tw-text-light-grey", "\n                  ").concat(a ? "tw-hidden @[700px]/subscriptions-heading:tw-block" : "", "\n                  ").concat(ee.includes(r) ? "tw-cursor-pointer" : "tw-cursor-auto", "\n                  ").concat(o ? "tw-max-w-[100px]" : "tw-max-w-auto", "\n                  ").concat("displayName" === r ? "tw-col-span-2" : "tw-col-span-1", "\n                  tw-pt-3 tw-font-normal tw-text-base\n                "),
                        onClick: function() {
                            return ve(r)
                        },
                        onKeyDown: function(e) {
                            if ("Enter" === e.key || "Space" === e.key) return ve(r)
                        },
                        role: "button",
                        tabIndex: 0
                    }, t, ee.includes(r) && m.createElement(p.$1, {
                        icon: be(r) && "ascending" === J ? E.fo : v.u9,
                        size: "1x",
                        className: "tw-ml-1 ".concat(be(r) && "ascending" === J ? "tw-align-bottom" : "tw-align-top")
                    }))
                }))), m.createElement("div", {
                    className: "tw-group"
                }, ce ? m.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, m.createElement(x.Z, {
                    loading: !0
                })) : se ? m.createElement("div", {
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
                        return r("/home/marketplace/storefront/subscriptions/page/".concat(e))
                    }
                }))))) : m.createElement(Z, {
                    createSubscription: function() {
                        t((0, P.Bq)("Create Subscription")), de({
                            title: s,
                            data: {},
                            isEditing: !1,
                            isCreating: !0,
                            productType: S.Pm.ROLE
                        })
                    }
                }), m.createElement(p.u_, {
                    title: "createdSubscription" === $.title ? null : $.title,
                    onCloseFinished: ge,
                    isVisible: te,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: $.productType === S.Pm.ROLE ? "initial" : "auto",
                    onBackCallback: c ? function() {
                        t((0, P.Bq)(c))
                    } : null
                }, te && $.isCreating && m.createElement(A.default, {
                    user: ne,
                    subscription: $.data,
                    onClose: ge,
                    isEditing: $.isEditing
                }), te && $.isEditing && m.createElement(L.default, {
                    onClose: ge,
                    listingId: $.data.id
                }), te && $.isPublishing && m.createElement(G, {
                    onClose: ge,
                    listing: $.data
                }), te && $.isDeleting && m.createElement(Y.default, {
                    listingId: $.data.id,
                    onCancelCallback: ge
                })))
            };
            var re = r(66736);
            r(57520);
            const ne = function(e) {
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
            var ae = r(41145),
                le = r(62228),
                oe = r(12227),
                ie = r(56646),
                ce = function(e) {
                    var t = e.isExpanded,
                        r = e.transactionData,
                        n = void 0 === r ? null : r;
                    if (null === n) return null;
                    var a = n.formattedSalesSummary,
                        l = n.receiverDisplayName,
                        o = n.listingDisplayName,
                        i = n.listingType,
                        c = n.tiliaTransactionId,
                        s = n.purchaseCurrentStatus,
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
                    }), u))), s && m.createElement("div", null, m.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Status"), m.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, m.createElement("span", {
                        className: "tw-text-base tw-font-normal tw-text-white tw-capitalize"
                    }, s))), i && m.createElement("div", null, m.createElement("div", {
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
                    }, c))), w && m.createElement("div", null, m.createElement("div", {
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
            ce.propTypes = {
                isExpanded: U().bool,
                transactionData: U().object
            };
            const se = ce;
            var ue = function(e) {
                var t, r = e.transactionData,
                    n = void 0 === r ? null : r;
                if (null === n) return null;
                var l = n.formattedSalesSummary,
                    o = n.receiverDisplayName,
                    i = n.listingDisplayName,
                    c = n.listingImageId,
                    s = n.listingType,
                    u = n.transactionId,
                    d = n.purchaseDate,
                    w = (0, m.useState)(!1),
                    f = (0, a.Z)(w, 2),
                    g = f[0],
                    b = f[1];
                "" !== c && (0, oe.qm)({
                    fileId: c,
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
                }, B()(d).format("L LT")), m.createElement("div", {
                    className: "tw-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/sales-row:tw-max-w-max"
                }, i), m.createElement("div", {
                    className: "tw-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/sales-row:tw-max-w-max"
                }, s), m.createElement("div", {
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
                }))))), m.createElement(se, {
                    transactionData: n,
                    isExpanded: g
                }))
            };
            ue.propTypes = {
                transactionData: U().object
            };
            const me = ue;

            function de(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function we(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? de(Object(r), !0).forEach((function(t) {
                        (0, b.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : de(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
                var e, t, r, n, l = (0, w.s0)(),
                    o = (0, w.UO)().paginationPage,
                    i = (0, m.useState)("all"),
                    c = (0, a.Z)(i, 2),
                    s = (c[0], c[1], (0, m.useState)("ALL")),
                    u = (0, a.Z)(s, 2),
                    d = (u[0], u[1], (0, m.useState)("")),
                    f = (0, a.Z)(d, 2),
                    g = f[0],
                    b = (f[1], (0, m.useState)(null)),
                    h = (0, a.Z)(b, 2),
                    y = h[0],
                    S = h[1],
                    O = (0, m.useState)("desc"),
                    P = (0, a.Z)(O, 2),
                    I = P[0],
                    j = P[1],
                    T = o ? Number(o) : 1,
                    D = (0, k.Z)(g),
                    Z = (0, C.IB)().data,
                    L = (0, re.JJ)(we(we({
                        sellerId: Z.id,
                        n: 50,
                        pageValue: T
                    }, y && {
                        sort: y
                    }), I && {
                        order: I
                    }), {
                        skip: !Z.id,
                        refetchOnMountOrArgChange: !1
                    }),
                    A = L.data,
                    F = L.isFetching,
                    X = L.isSuccess,
                    z = L.isError,
                    R = L.error,
                    U = function(e) {
                        return y === e
                    },
                    J = function(e) {
                        if (fe.includes(e)) return function(e) {
                            return U(e) ? j("desc" === I ? "asc" : "desc") : (S(e), j("asc"))
                        }(e)
                    };
                return m.createElement("div", null, m.createElement(p.$4, null, "My Sales"), m.createElement(ne, null), m.createElement("div", {
                    className: "tw-rounded-md tw-bg-grey tw-mt-5"
                }, m.createElement("div", {
                    className: "tw-w-full tw-min-w-max tw-table-auto tw-pb-1 tw-@container/sales-heading"
                }, m.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-4 @[590px]/sales-heading:tw-grid-cols-5 "
                }, pe.map((function(e) {
                    var t = e.label,
                        r = e.value,
                        n = e.canCollapse,
                        a = void 0 !== n && n;
                    return m.createElement("span", {
                        key: r,
                        className: "\n                  ".concat(U(r) ? "tw-text-light-white" : "tw-text-light-grey", "\n                  ").concat(a ? "tw-hidden @[590px]/sales-heading:tw-block" : "", "\n                  ").concat(fe.includes(r) ? "tw-cursor-pointer" : "tw-cursor-auto", "\n                  tw-pt-3 tw-font-normal tw-text-base first:tw-pl-5 last:tw-pr-5\n                "),
                        onClick: function() {
                            return J(r)
                        },
                        onKeyDown: function(e) {
                            if ("Enter" === e.key || "Space" === e.key) return J(r)
                        },
                        role: "button",
                        tabIndex: 0
                    }, t, fe.includes(r) && m.createElement(p.$1, {
                        icon: U(r) && "asc" === I ? E.fo : v.u9,
                        size: "1x",
                        className: "tw-ml-1 ".concat(U(r) && "asc" === I ? "tw-align-bottom" : "tw-align-top")
                    }))
                }))), m.createElement("div", {
                    className: "tw-group"
                }, F ? m.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, m.createElement(x.Z, {
                    loading: !0
                })) : z ? m.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, m.createElement("p", null, "Error loading sales data:"), m.createElement("code", null, null !== (n = R.data.error.message) && void 0 !== n ? n : "Unknown error")) : "" === D && X ? A.purchases.map((function(e) {
                    return m.createElement(me, {
                        transactionData: e
                    })
                })) : void 0), 0 === (null == A || null === (e = A.purchases) || void 0 === e ? void 0 : e.length) && m.createElement("div", {
                    className: "tw-flex tw-justify-center tw-p-10"
                }, m.createElement("p", null, "There are no sales data to display")), m.createElement("div", null, m.createElement(N.Z, {
                    totalCount: null !== (t = null == A || null === (r = A.purchases) || void 0 === r ? void 0 : r.length) && void 0 !== t ? t : 0,
                    showCurrentPageOnly: !0,
                    currentPage: T,
                    pageSize: 50,
                    onPageChange: function(e) {
                        return l("/home/marketplace/storefront/revenue/mysales/page/".concat(e))
                    }
                })))))
            };
            var be = r(42138),
                ve = r(16686),
                Ee = r(17319),
                he = function(e) {
                    var t = e.instalmentData,
                        r = void 0 === t ? null : t,
                        n = e.showCancellable,
                        a = void 0 !== n && n;
                    if (null === r) return null;
                    var l = (0, be.Z)(r).sort((function(e, t) {
                        return B()(e.stackDate).isAfter(B()(t.stackDate)) ? 1 : -1
                    }));
                    return m.createElement(m.Fragment, null, l.map((function(e) {
                        var t = e.stackDate,
                            r = e.stackValue,
                            n = e.purchaseId,
                            l = B()(t).isAfter(B()());
                        return m.createElement("div", {
                            className: "tw-grid tw-grid-cols-1 tw-gap-3 @sm/subscribers:tw-grid-cols-2 @md/subscribers:tw-grid-cols-3",
                            key: n
                        }, m.createElement("div", null, m.createElement("div", {
                            className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                        }, m.createElement("span", {
                            className: "tw-text-base tw-font-normal tw-text-white"
                        }, B()(t).format("MMMM DD, YYYY")))), m.createElement("div", null, m.createElement("div", {
                            className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                        }, m.createElement("span", {
                            className: "tw-text-base tw-font-normal tw-text-white"
                        }, m.createElement(p.b5, {
                            className: "tw-mr-1 tw-text-white"
                        }), r))), !l && m.createElement("div", null, m.createElement("div", {
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
                instalmentData: U().array,
                showCancellable: U().bool
            };
            const ye = he;
            var xe = function(e) {
                var t = e.isExpanded,
                    r = e.subscriberData,
                    n = void 0 === r ? null : r,
                    a = e.startCancelSubscriptionCallback,
                    l = void 0 === a ? function() {} : a,
                    o = n.buyerDisplayName,
                    i = (n.buyerId, n.listingCurrentlyAvailable, n.listingDescription, n.groupName),
                    c = n.listingDisplayName,
                    s = n.subscriptionExpiry,
                    u = n.subscriptionFirstStarted,
                    d = s && B()(s).isAfter(B()());
                return null === n ? null : m.createElement("div", {
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
                }, o))), c && m.createElement("div", null, m.createElement("div", {
                    className: "tw-text-light-grey tw-font-normal tw-text-xs"
                }, "Listing Name"), m.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, m.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, c))), u && m.createElement("div", null, m.createElement("div", {
                    className: "tw-text-light-grey tw-font-normal tw-text-xs"
                }, "Start Date"), m.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, m.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, m.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, B()(u).format("L LT"))))), m.createElement("div", null, m.createElement("div", {
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
                            subscriberData: n
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
                }, i))), s && m.createElement("div", null, m.createElement("div", {
                    className: "tw-text-light-grey tw-font-normal tw-text-xs"
                }, "Expiry Date"), m.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, m.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, B()(s).format("L LT"))))), m.createElement("h4", {
                    className: "heading tw-text-base tw-font-normal tw-text-light-grey tw-mt-5"
                }, m.createElement(p.$1, {
                    icon: ie.faCircleInfo,
                    size: "1x"
                }), " Subscription Refundability Overview"), m.createElement("hr", {
                    className: "tw-bg-[#242A31] tw-border-0 tw-h-[2px]"
                }), m.createElement(ye, {
                    instalmentData: null == n ? void 0 : n.stacks
                }))
            };
            xe.propTypes = {};
            const Ne = xe;
            var Se = function(e) {
                var t = e.subscriberData,
                    r = void 0 === t ? null : t,
                    n = e.startCancelSubscriptionCallback;
                if (null === r) return null;
                var l = r.buyerDisplayName,
                    o = (r.buyerId, r.listingCurrentlyAvailable, r.listingDescription, r.listingDisplayName),
                    i = r.subscriptionExpiry,
                    c = (r.subscriptionFirstStarted, (0, m.useState)(!1)),
                    s = (0, a.Z)(c, 2),
                    u = s[0],
                    d = s[1];
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
                }, B()(i).format("L LT"), m.createElement(p.zx, {
                    className: "tw-h-9 tw-w-10 tw-text-white tw-bg-button-bg-grey tw-border-none",
                    onClick: function() {
                        return d(!u)
                    }
                }, m.createElement(p.$1, {
                    icon: u ? le.mT : ae.pt,
                    size: "1x"
                }))))), m.createElement(Ne, {
                    subscriberData: r,
                    isExpanded: u,
                    startCancelSubscriptionCallback: n
                }))
            };
            Se.propTypes = {
                transactionData: U().object
            };
            const ke = Se;
            const Ce = function(e) {
                var t, r, n, l, o = (0, C.IB)().data,
                    i = (0, w.UO)().paginationPage,
                    c = i ? Number(i) : 1,
                    s = (0, m.useState)("all"),
                    u = (0, a.Z)(s, 2),
                    f = (u[0], u[1], (0, m.useState)(!1)),
                    g = (0, a.Z)(f, 2),
                    b = g[0],
                    v = g[1],
                    E = (0, m.useState)(null),
                    h = (0, a.Z)(E, 2),
                    y = h[0],
                    S = h[1],
                    O = (0, m.useState)("ALL"),
                    P = (0, a.Z)(O, 2),
                    I = (P[0], P[1], (0, m.useState)(null)),
                    j = (0, a.Z)(I, 2),
                    T = (j[0], j[1], (0, m.useState)("desc")),
                    D = (0, a.Z)(T, 2),
                    Z = (D[0], D[1], (0, m.useState)("")),
                    L = (0, a.Z)(Z, 2),
                    A = L[0],
                    F = (L[1], (0, k.Z)(A)),
                    X = (0, m.useRef)(null),
                    z = (0, re.x)(),
                    R = (0, a.Z)(z, 2),
                    U = R[0],
                    J = R[1],
                    G = J.isSuccess,
                    q = J.isLoading,
                    M = J.isError,
                    B = J.error,
                    $ = (0, re.vb)({
                        sellerId: o.id
                    }),
                    V = $.data,
                    _ = $.isFetching,
                    W = $.isSuccess,
                    Y = $.isError,
                    Q = $.error;
                (0, m.useEffect)((function() {
                    G && !M && (v(!1), S(null))
                }), [G, M]);
                var H;
                return m.createElement("div", null, m.createElement(p.$4, null, "My Subscribers"), m.createElement(ne, null), m.createElement(p.sm, {
                    isLoading: q,
                    isOpen: b,
                    confirmCallback: function() {
                        U({
                            buyerId: null == y ? void 0 : y.buyerId,
                            listingId: null == y ? void 0 : y.listingId,
                            reason: null == X ? void 0 : X.current.value,
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
                })), M && !G && m.createElement("div", {
                    className: "tw-mt-3"
                }, m.createElement("p", {
                    className: "tw-text-error-message-red tw-flex tw-flex-col"
                }, "Failed to cancel subscription:", m.createElement("code", {
                    className: "tw-mt-1 tw-text-error-message-red"
                }, null !== (t = B.data.error.message) && void 0 !== t ? t : "Something went wrong"))), m.createElement("h3", {
                    className: "heading tw-text-sm tw-mt-5"
                }, "Please provide the reason for cancellation"), m.createElement(p.II, {
                    type: "text",
                    name: "cancel-reason",
                    required: !0,
                    ref: X,
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
                        r = e.value;
                    return m.createElement("span", {
                        key: r,
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
                }, m.createElement("p", null, "Error loading sales data:"), m.createElement("code", null, null !== (H = Q.data.error.message) && void 0 !== H ? H : "Unknown error")) : "" === F && W ? V.map((function(e) {
                    return m.createElement(ke, {
                        key: "".concat(e.buyerId, "-").concat(e.listingId),
                        subscriberData: e,
                        startCancelSubscriptionCallback: function(e) {
                            var t = e.subscriberData;
                            S(t), v(!0)
                        }
                    })
                })) : void 0), 0 === (null == V || null === (r = V.purchases) || void 0 === r ? void 0 : r.length) && m.createElement("div", {
                    className: "tw-flex tw-justify-center tw-p-10"
                }, m.createElement("p", null, "There are no subscribers data to display")), m.createElement("div", null, m.createElement(N.Z, {
                    totalCount: null !== (n = null == V || null === (l = V.purchases) || void 0 === l ? void 0 : l.length) && void 0 !== n ? n : 0,
                    showCurrentPageOnly: !0,
                    currentPage: c,
                    pageSize: 50,
                    onPageChange: function(e) {
                        return navigate("/home/marketplace/storefront/revenue/mysales/page/".concat(e))
                    }
                })))))
            };
            var Oe = r(6655),
                Pe = r(64358),
                Ie = r(19933);

            function je(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? je(Object(r), !0).forEach((function(t) {
                        (0, b.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : je(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var De = function() {
                var e, t = (0, C.XC)().data,
                    r = null == t ? void 0 : t.id,
                    l = (0, Oe.gI)({
                        skip: !r
                    }),
                    o = (0, a.Z)(l, 2),
                    i = o[0],
                    c = o[1],
                    s = (0, w.oQ)("/home/marketplace/storefront".concat(null !== (e = location) && void 0 !== e && null !== (e = e.state) && void 0 !== e && e.redirectTo ? "?redirectTo=".concat(encodeURIComponent(location.state.redirectTo)) : "")),
                    d = function() {
                        var e = (0, n.Z)(u().mark((function e(t) {
                            var n, a, l;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), n = new URL(s, window.location.href), e.next = 4, i(Te(Te({}, Pe.$Z.CREATE_ACCOUNT), {}, {
                                            userId: r,
                                            returnUrl: n
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
                    disabled: c.isLoading,
                    loading: c.isLoading,
                    expand: !1
                }, "Get Started with Tilia"))
            };
            De.propTypes = {};
            const Ze = De,
                Le = r.p + "b2884252fefb6f91a3fca6547597c0a37839688363b1bdb686e433583469d8e8.png";
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
            const Fe = Ae,
                Xe = r.p + "8d069ec94cb9500c4bcd478e05f582f23cf9dadd4c8b7dd0114942d53c7acdcb.png";
            var ze = m.lazy((function() {
                    return Promise.all([r.e(1959), r.e(8051)]).then(r.bind(r, 71560))
                })),
                Re = m.lazy((function() {
                    return r.e(8763).then(r.bind(r, 58271))
                })),
                Ue = m.lazy((function() {
                    return r.e(267).then(r.bind(r, 20267))
                })),
                Je = m.lazy((function() {
                    return r.e(8413).then(r.bind(r, 69026))
                })),
                Ge = m.lazy((function() {
                    return r.e(9028).then(r.bind(r, 99028))
                }));
            const qe = function() {
                var e, t, r, s, b, v, E, h, y, x, N, S, k = (0, d.lr)(),
                    O = (0, a.Z)(k, 2),
                    P = O[0],
                    I = O[1],
                    j = m.useState(!1),
                    T = (0, a.Z)(j, 2),
                    D = T[0],
                    Z = T[1],
                    L = m.useState(!1),
                    A = (0, a.Z)(L, 2),
                    F = A[0],
                    X = A[1],
                    z = Object.fromEntries(P.entries()),
                    R = (0, C.XC)(),
                    U = R.data,
                    J = R.isLoading,
                    G = null == U ? void 0 : U.id,
                    q = (0, C.q7)(),
                    M = q.data,
                    B = void 0 === M ? [] : M,
                    $ = q.isFetching,
                    V = q.isError,
                    _ = q.error,
                    W = (0, re.mW)(),
                    Y = (0, a.Z)(W, 2),
                    Q = Y[0],
                    H = Y[1].isLoading,
                    K = null == B ? void 0 : B.includes("permission-creator-preview"),
                    ee = null == B ? void 0 : B.includes("permission-can-sell-products"),
                    ne = (0, Oe.En)(),
                    ae = ne.data,
                    le = void 0 === ae ? {
                        economyOnline: !1,
                        plannedOfflineWindowStart: null,
                        plannedOfflineWindowEnd: null,
                        offlineReason: null
                    } : ae,
                    oe = le.economyOnline,
                    ie = le.plannedOfflineWindowStart,
                    ce = le.plannedOfflineWindowEnd,
                    se = le.offlineReason,
                    ue = ne.isFetching,
                    me = ne.isError,
                    de = ne.error,
                    we = (0, Oe.v$)({
                        userId: G
                    }, {
                        skip: !G || !K || !oe,
                        refetchOnMountOrArgChange: !0
                    }),
                    pe = we.data,
                    fe = we.isLoading,
                    be = we.isError,
                    ve = we.error,
                    Ee = null == pe ? void 0 : pe.signed_tos,
                    he = (0, Oe.gq)({
                        userId: G
                    }, {
                        skip: !G || !K || !oe,
                        refetchOnMountOrArgChange: !0
                    }),
                    ye = (he.data, he.isLoading),
                    xe = he.isError,
                    Ne = he.error,
                    Se = (0, Oe.kN)({
                        userId: G
                    }, {
                        skip: !(G && K && ee && oe)
                    }),
                    ke = Se.data,
                    je = void 0 === ke ? {} : ke,
                    Te = je.eligible,
                    De = je.reason,
                    Le = Se.isLoading,
                    Ae = Se.isError,
                    qe = Se.error,
                    Me = (0, Oe.pp)({
                        userId: G,
                        type: "earnings"
                    }, {
                        skip: !G,
                        refetchOnMountOrArgChange: !0
                    }),
                    Be = Me.data,
                    $e = ((void 0 === Be ? {
                        balance: 0
                    } : Be).balance, Me.isLoading),
                    Ve = Me.isError,
                    _e = Me.error,
                    We = function() {
                        var e = (0, n.Z)(u().mark((function e() {
                            var t;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = "complete" === (null == z ? void 0 : z.state), e.prev = 1, !t || ee) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 5, Q().unwrap();
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
                var Ye = ue || J || $ || fe || $e || ye || H || Le,
                    Qe = (0, Pe.dj)(ie),
                    He = me || !oe || be || Ae || Ve || V || xe;
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
                }, "pick up where you left off"), "."), He && m.createElement(p.qX, {
                    type: oe || me ? "error" : "warn",
                    title: oe || me ? "Something strange happened" : "Storefront Offline"
                }, !oe && !me && m.createElement(m.Fragment, null, m.createElement("p", {
                    className: "m-0"
                }, "Storefront Currently Offline: ", null != se ? se : "Unknown Reason"), m.createElement("p", {
                    className: "m-0"
                }, "Projected Service Return: ", (0, Pe.M4)(ce))), me && m.createElement("p", {
                    className: "m-0"
                }, "Error getting Tilia online status: ", de.status, " ", null !== (e = null === (t = de.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "Unknown error"), _ && m.createElement("p", {
                    className: "m-0"
                }, "Error looking up user permissions: ", _.status, " ", null !== (r = null === (s = _.data) || void 0 === s ? void 0 : s.error.message) && void 0 !== r ? r : "Unknown error"), be && m.createElement("p", {
                    className: "m-0"
                }, "Error looking up Tilia ToS acceptance: ", ve.status, " ", null !== (b = null === (v = ve.data) || void 0 === v ? void 0 : v.error.message) && void 0 !== b ? b : "Unknown error"), xe && m.createElement("p", {
                    className: "m-0"
                }, "Error looking up Tilia identity verification status: ", Ne.status, " ", null !== (E = null === (h = Ne.data) || void 0 === h ? void 0 : h.error.message) && void 0 !== E ? E : "Unknown error"), Ae && m.createElement("p", {
                    className: "m-0"
                }, "Error looking up your eligibility to pay out: ", qe.status, " ", null !== (y = null === (x = qe.data) || void 0 === x ? void 0 : x.error.message) && void 0 !== y ? y : "Unknown error"), Ve && m.createElement("p", {
                    className: "m-0"
                }, "Error looking up credit balance: ", _e.status, " ", null !== (N = null === (S = _e.data) || void 0 === S ? void 0 : S.error.message) && void 0 !== N ? N : "Unknown error")), Qe && oe && !me && m.createElement(p.qX, {
                    type: "warn",
                    title: "Storefront Maintenance"
                }, m.createElement("p", {
                    className: "m-0"
                }, "Starts: ", (0, Pe.M4)(ie)), m.createElement("p", {
                    className: "m-0"
                }, "Ends: ", (0, Pe.M4)(ce))), !Te && De && oe && !me && m.createElement(p.qX, {
                    type: "warn",
                    title: "Issue with payout eligibility"
                }, "blocked" === De && m.createElement("p", {
                    className: "m-0"
                }, "You are currently blocked from receiving payouts. Please contact VRChat support for more information."), "kyc_required" === De && m.createElement("p", {
                    className: "m-0"
                }, "You must complete the KYC process before you can receive payouts. Please contact VRChat support for more information."), "kyc_pending" === De && m.createElement("p", {
                    className: "m-0"
                }, "Your KYC has been recieved and is pending approval from Tilia. Please check back later."), "limit_exceeded" === De && m.createElement("p", {
                    className: "m-0"
                }, "You have exceeded the payout limit. Please contact VRChat support for more information."), "cooldown" === De && m.createElement("p", {
                    className: "m-0"
                }, "You have exceeded the daily payout transaction limit. Please wait 24 hours before making your next payout transaction.")), K ? ee ? m.createElement(m.Fragment, null, m.createElement(Ie.Z, {
                    isSeller: !0,
                    isTiliaTOSAccepted: Ee,
                    returnPath: "/home/marketplace/storefront/dashboard",
                    termsOfServiceMessage: "Tilia's Terms of Service have been changed. Please accept them before managing your store."
                }), m.createElement("div", {
                    className: "tw-relative"
                }, m.createElement("div", {
                    className: "tw-relative"
                }, m.createElement(p.oI, null, F && m.createElement("div", {
                    className: "tw-w-full tw-h-full tw-opacity-75 tw-bg-black tw-absolute tw-z-10 tw-top-0 tw-bottom-0 tw-left-0"
                }), m.createElement("h4", {
                    className: "fw-normal mb-0"
                }, "My Store"))), m.createElement(p.Ao, null, m.createElement("div", {
                    className: "tw-relative"
                }, F && m.createElement("div", {
                    className: "tw-w-full tw-h-full tw-opacity-75 tw-bg-black tw-absolute tw-z-10 tw-top-0 tw-bottom-0 tw-left-0"
                }), m.createElement(f.Z, {
                    justify: "left",
                    tabs: [{
                        name: "Overview",
                        to: "dashboard",
                        icon: c.St,
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
                    element: m.createElement(Je, null)
                }), m.createElement(w.AW, {
                    path: "stores/:storeId",
                    element: m.createElement(Ge, {
                        onOrderStore: function() {
                            return X(!F)
                        }
                    })
                }), m.createElement(w.AW, {
                    path: "products",
                    element: m.createElement(g.Z, {
                        to: "../products/page/1"
                    })
                }), m.createElement(w.AW, {
                    path: "products/page/:paginationPage",
                    element: m.createElement(Re, null)
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
                    element: m.createElement(Ue, null)
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
                    element: m.createElement(Ce, null)
                }))), m.createElement(p.sm, {
                    headerText: "Congratulations!",
                    confirmText: "Done",
                    isOpen: D,
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
                    src: Xe,
                    alt: "Storefront Robot",
                    className: "tw-mx-auto tw-w-[180px] tw-flex-1"
                }), m.createElement("p", {
                    className: "tw-m-0 tw-font-bold tw-text-lg tw-flex-1"
                }, "Thank you for completing the Tilia Process, now you are ready to sell and receive payouts!")))))) : m.createElement(Ze, null) : m.createElement(Fe, null))
            }
        },
        67978: (e, t, r) => {
            r.d(t, {
                As: () => p,
                DM: () => f,
                RM: () => b,
                lZ: () => g,
                qX: () => v,
                rP: () => d,
                wE: () => E,
                x3: () => w,
                xq: () => h
            });
            var n = r(15861),
                a = r(42138),
                l = r(4942),
                o = r(64687),
                i = r.n(o),
                c = r(64358);

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function(t) {
                        (0, l.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var m = r(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getUserProducts: e.query({
                                query: function(e) {
                                    var t = e.userId,
                                        r = e.n,
                                        n = void 0 === r ? 100 : r,
                                        a = (e.offset, e.archived),
                                        l = e.pageValue,
                                        o = void 0 === l ? 1 : l;
                                    return {
                                        url: "user/".concat(t, "/products"),
                                        params: u({
                                            archived: a
                                        }, (0, c.ue)({
                                            n,
                                            pageValue: o
                                        }))
                                    }
                                },
                                providesTags: function(e, t, r) {
                                    var n = r.userId;
                                    return [].concat((0, a.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Product",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "UserProducts",
                                        id: "PARTIAL-LIST:".concat(n)
                                    }])
                                }
                            }),
                            getAllUserProducts: e.query({
                                queryFn: (l = (0, n.Z)(i().mark((function e(t, r, n, l) {
                                    var o, c, s, u, m;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                o = t.userId, c = t.archived, s = [], u = 0;
                                            case 3:
                                                return e.next = 6, l({
                                                    url: "user/".concat(o, "/products"),
                                                    params: {
                                                        archived: c,
                                                        n: 100,
                                                        offset: u
                                                    }
                                                });
                                            case 6:
                                                if (!(m = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: m.error
                                                });
                                            case 9:
                                                if (!(m.data.length > 0)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return s.push.apply(s, (0, a.Z)(m.data)), u += 100, e.abrupt("continue", 3);
                                            case 13:
                                                return e.abrupt("break", 16);
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: s
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, t, r, n) {
                                    return l.apply(this, arguments)
                                }),
                                providesTags: function(e, t, r) {
                                    var n = r.userId;
                                    return [].concat((0, a.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Product",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "UserProducts",
                                        id: "FULL-LIST:".concat(n)
                                    }])
                                }
                            }),
                            getListingProducts: e.query({
                                query: function(e) {
                                    var t = e.listingId;
                                    return "listing/".concat(t, "/products")
                                },
                                providesTags: function(e, t, r) {
                                    var n = r.listingId;
                                    return [].concat((0, a.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Product",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "ListingProducts",
                                        id: n
                                    }])
                                }
                            }),
                            getProduct: e.query({
                                query: function(e) {
                                    var t = e.productId;
                                    return "products/".concat(t)
                                },
                                providesTags: function(e, t, r) {
                                    return [{
                                        type: "Product",
                                        id: r.productId
                                    }]
                                }
                            }),
                            createProduct: e.mutation({
                                queryFn: (r = (0, n.Z)(i().mark((function e(t, r, a, l) {
                                    var o, c, s, m, d, w, p, f, g, b, v, E, h, y, x, N, S, k, C, O, P, I, j, T;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (c = t.file, s = void 0 === c ? null : c, m = t.tag, d = void 0 === m ? "product" : m, w = t.displayName, p = t.description, f = void 0 === p ? "" : p, g = t.tags, b = void 0 === g ? [] : g, v = t.imageId, E = void 0 === v ? null : v, h = t.productType, y = t.useForSubscriberList, x = void 0 !== y && y, N = t.generateListing, S = t.priceTokens, k = t.duration, C = t.durationType, O = t.permanent, P = t.instant, null === s) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.next = 4, (0, n.Z)(i().mark((function e() {
                                                    var t, r;
                                                    return i().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return (t = new FormData).append("file", s), t.append("tag", d), e.next = 5, l({
                                                                    url: "file/image",
                                                                    method: "POST",
                                                                    body: t
                                                                });
                                                            case 5:
                                                                if (!(r = e.sent).error) {
                                                                    e.next = 8;
                                                                    break
                                                                }
                                                                return e.abrupt("return", {
                                                                    error: r.error
                                                                });
                                                            case 8:
                                                                return e.abrupt("return", r);
                                                            case 9:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })))();
                                            case 4:
                                                e.t0 = e.sent, e.next = 8;
                                                break;
                                            case 7:
                                                e.t0 = null;
                                            case 8:
                                                if (null == (I = e.t0) || !I.error) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: I.error
                                                });
                                            case 11:
                                                return j = (null == I || null === (o = I.data) || void 0 === o ? void 0 : o.id) || E, e.next = 14, l({
                                                    url: "products",
                                                    method: "POST",
                                                    body: u({
                                                        displayName: w,
                                                        description: f,
                                                        tags: b,
                                                        productType: h,
                                                        useForSubscriberList: x,
                                                        generateListing: N,
                                                        priceTokens: S,
                                                        duration: k,
                                                        durationType: C,
                                                        permanent: O,
                                                        instant: P
                                                    }, j && {
                                                        imageId: j
                                                    })
                                                });
                                            case 14:
                                                if (!(T = e.sent).error) {
                                                    e.next = 17;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: T.error
                                                });
                                            case 17:
                                                return e.abrupt("return", {
                                                    data: u({
                                                        product: T.data
                                                    }, (null == I ? void 0 : I.data) && {
                                                        file: I.data
                                                    })
                                                });
                                            case 18:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, t, n, a) {
                                    return r.apply(this, arguments)
                                }),
                                invalidatesTags: function(e, t, r) {
                                    var n = r.ownerId,
                                        l = r.tag;
                                    return [].concat((0, a.Z)(e ? [{
                                        type: "Product",
                                        id: e.id
                                    }] : []), ["UserProducts", {
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(l)
                                    }, {
                                        type: "UserGalleryPictures",
                                        id: n
                                    }], (0, a.Z)(e ? [{
                                        type: "File",
                                        id: e.id
                                    }] : []))
                                }
                            }),
                            updateProduct: e.mutation({
                                queryFn: (t = (0, n.Z)(i().mark((function e(t, r, n, a) {
                                    var l, o, c, s, m, d, w, p, f, g, b, v, E, h, y, x, N, S;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (c = t.file, s = void 0 === c ? null : c, m = t.tag, d = void 0 === m ? "product" : m, w = t.productId, p = t.displayName, f = t.description, g = t.tags, b = void 0 === g ? null : g, v = t.imageId, E = t.groupAccess, h = t.groupAccessRemove, y = t.useForSubscriberList, x = null, null === s) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return (N = new FormData).append("file", s), N.append("tag", d), e.next = 8, a({
                                                    url: "file/image",
                                                    method: "POST",
                                                    body: N
                                                });
                                            case 8:
                                                if (!(x = e.sent).error) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: x.error
                                                });
                                            case 11:
                                                return e.next = 13, a({
                                                    url: "products/".concat(w),
                                                    method: "PUT",
                                                    body: u(u({
                                                        displayName: p,
                                                        description: f
                                                    }, null !== b ? b : {}), {}, {
                                                        groupAccess: E,
                                                        groupAccessRemove: h,
                                                        useForSubscriberList: y,
                                                        imageId: x ? null === (l = x) || void 0 === l || null === (l = l.data) || void 0 === l ? void 0 : l.id : v
                                                    })
                                                });
                                            case 13:
                                                if (!(S = e.sent).error) {
                                                    e.next = 16;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: S.error
                                                });
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: u({
                                                        product: S.data
                                                    }, (null === (o = x) || void 0 === o ? void 0 : o.data) && {
                                                        file: x.data
                                                    })
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, r, n, a) {
                                    return t.apply(this, arguments)
                                }),
                                invalidatesTags: function(e, t, r) {
                                    var n = r.productId,
                                        l = r.ownerId,
                                        o = r.tag;
                                    return [{
                                        type: "Product",
                                        id: n
                                    }, "UserProducts", {
                                        type: "GroupRoles"
                                    }, {
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(o)
                                    }, {
                                        type: "UserGalleryPictures",
                                        id: l
                                    }].concat((0, a.Z)(e ? [{
                                        type: "File",
                                        id: e.id
                                    }] : []))
                                }
                            }),
                            deleteProduct: e.mutation({
                                query: function(e) {
                                    var t = e.productId,
                                        r = e.force;
                                    return {
                                        url: "products/".concat(t),
                                        method: "DELETE",
                                        params: {
                                            force: r
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, r) {
                                    var n = r.productId;
                                    r.ownerId;
                                    return [{
                                        type: "Product",
                                        id: n
                                    }, "UserProducts", "Stores", {
                                        type: "Store"
                                    }]
                                }
                            })
                        };
                        var t, r, l
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["ListingProducts", "UserProducts", "Product"]
                }),
                d = m.useGetUserProductsQuery,
                w = m.useGetAllUserProductsQuery,
                p = m.useLazyGetAllUserProductsQuery,
                f = m.useGetListingProductsQuery,
                g = m.useGetProductQuery,
                b = m.useLazyGetProductQuery,
                v = m.useCreateProductMutation,
                E = m.useUpdateProductMutation,
                h = m.useDeleteProductMutation
        }
    }
]);
//# sourceMappingURL=877b1d508edf4aa2dd6bf82e9e447aabe2d972283f9b12c7bf5a75e4e9f08d8d.js.map