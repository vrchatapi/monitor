"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1515, 6869], {
        19933: (e, t, r) => {
            r.d(t, {
                Z: () => y
            });
            var n = r(4942),
                a = r(15861),
                l = r(54546),
                i = r(68055),
                o = r(76553),
                s = r(64687),
                c = r.n(s),
                u = r(14411),
                m = r(22202),
                d = r(6655),
                w = r(64358),
                p = r(45697),
                g = r.n(p),
                f = r(67294),
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
                    s = e.returnPath,
                    p = e.termsOfServiceMessage,
                    g = (0, b.TH)(),
                    v = (0, m.XC)(),
                    h = v.data,
                    y = v.isLoading,
                    x = null == h ? void 0 : h.id,
                    N = (0, f.useState)(!1),
                    C = (0, l.Z)(N, 2),
                    S = C[0],
                    k = C[1],
                    O = (0, d.gI)(),
                    P = (0, l.Z)(O, 2),
                    I = P[0],
                    T = P[1],
                    j = (0, b.oQ)("".concat(s).concat(null != g && null !== (t = g.state) && void 0 !== t && t.redirectTo ? "?redirectTo=".concat(encodeURIComponent(g.state.redirectTo)) : ""));
                if (n) return null;
                var D = function() {
                    var e = (0, a.Z)(c().mark((function e(t) {
                        var r, n, a;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t.preventDefault(), k(!0), r = new URL(j, window.location.href), e.next = 5, I(E(E({}, w.$Z.TOS), {}, {
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
                return (0, f.useEffect)((function() {
                    (null != T && T.isLoading || y) && k(!0), null != T && T.isError && k(!1)
                }), [T, y]), f.createElement("div", {
                    className: "tw-flex tw-flex-col sm:tw-flex-row tw-bg-warning-bg tw-rounded-lg tw-border-orange tw-border-solid tw-border-0 tw-border-l-4 tw-mb-4 tw-p-3 tw-justify-between tw-items-center"
                }, f.createElement("div", {
                    className: "tw-flex tw-flex-row"
                }, f.createElement(u.$1, {
                    icon: o.eH,
                    size: "1x",
                    className: "tw-text-orange tw-mt-1 tw-mr-2"
                }), f.createElement("div", {
                    className: "tw-flex tw-flex-col tw-justify-start tw-items-start"
                }, f.createElement("h2", {
                    className: "tw-text-xl"
                }, "Update to the Tilia Terms of Service"), f.createElement("p", {
                    className: "tw-mb-0 tw-text-base"
                }, p))), f.createElement("div", {
                    className: "tw-h-full tw-flex tw-flex-col tw-justify-center tw-mt-4 sm:tw-mt-0"
                }, f.createElement(u.zx, {
                    icon: i.LE,
                    onClick: function(e) {
                        return D(e)
                    },
                    className: "tw-bg-white tw-border-white tw-text-[#1A2026]",
                    loading: S,
                    disabled: S
                }, "Review Tilia's Terms")))
            };
            h.propTypes = {
                isTiliaTOSAccepted: g().bool,
                returnPath: g().string,
                termsOfServiceMessage: g().string.isRequired
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
                i = r(6811),
                o = r(64687),
                s = r.n(o),
                c = r(64258),
                u = r(14411),
                m = r(98185),
                d = r(22202),
                w = r(93261),
                p = r(16869),
                g = r(45697),
                f = r.n(g),
                b = r(67294),
                v = r(32981),
                E = function(e) {
                    var t = e.listingId,
                        r = void 0 === t ? null : t,
                        o = e.onCancelCallback,
                        g = void 0 === o ? function() {} : o;
                    if (null === r) return null;
                    var f = (0, v.I0)(),
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
                        T = (0, p.mr)({
                            listingId: r,
                            hydrateProducts: !0
                        }),
                        j = T.data,
                        D = T.isLoading,
                        Z = (T.isError, T.error, (0, w.nz)()),
                        L = (0, a.Z)(Z, 2),
                        A = L[0],
                        F = L[1],
                        X = F.data,
                        R = F.isLoading,
                        U = (F.isError, F.error, (0, w.VF)()),
                        z = (0, a.Z)(U, 2),
                        J = z[0],
                        M = z[1];
                    M.isLoading, M.isError, M.error;
                    (0, b.useEffect)((function() {
                        if (j && (S(j), j.hydratedProducts)) {
                            var e = j.products.find((function(e) {
                                return e.groupRoleId
                            }));
                            y(e), I(e.groupRoleId), A({
                                groupId: j.groupId
                            })
                        }
                    }), [j]);
                    var G = function() {
                        var e = (0, n.Z)(s().mark((function e() {
                            var t, r, n;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (P && X && j) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return t = function(e) {
                                            f((0, c.d)({
                                                title: "Listing deleted successfully!",
                                                icon: i.f8,
                                                message: "Your listing has been deleted successfully!",
                                                color: "success",
                                                timeout: 3e3
                                            })), g()
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
                                        e.prev = 9, e.t0 = e.catch(3), console.error("error", e.t0), f((0, c.d)({
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
                        loading: D || R
                    }, b.createElement("p", null, b.createElement("strong", null, "Are you sure you want to delete this subscription? This is NOT reversible.")), b.createElement("p", null, "In order to delete this subscription, verify the following."), b.createElement("ul", {
                        className: "tw-bg-grey tw-rounded tw-py-3 tw-gap-2"
                    }, b.createElement("li", null, "There are no active subscribers to this subscription."), b.createElement("li", null, "The subscription listing is in draft mode."), b.createElement("li", null, "This listing must not contain any other products other than the role it's related to.")), b.createElement(u.X2, {
                        className: "tw-gap-2"
                    }, b.createElement(u.zx, {
                        onClick: g,
                        type: "button",
                        containerClasses: "tw-flex-1",
                        neutral: !0
                    }, "Cancel"), b.createElement(u.zx, {
                        onClick: G,
                        type: "button",
                        containerClasses: "tw-flex-1",
                        danger: !0,
                        disabled: (null == C ? void 0 : C.active) || (null == C ? void 0 : C.products.length) > 1
                    }, "Delete"))))
                };
            E.propTypes = {
                listing: f().object,
                onCancelCallback: f().func
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
                i = r(38252),
                o = r(14411),
                s = r(67263),
                c = r(95896),
                u = r(12752),
                m = r(67294);
            const d = function(e) {
                var t = e.products,
                    r = void 0 === t ? [] : t,
                    d = e.associatedProduct,
                    w = e.existingProducts,
                    p = void 0 === w ? [] : w,
                    g = e.onDataChange,
                    f = void 0 === g ? function() {} : g,
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
                    T = P[1],
                    j = (0, m.useRef)(null),
                    D = (0, u.Nr)(y);
                m.useEffect((function() {
                    f({
                        products: S.map((function(e) {
                            return e.id
                        }))
                    }), v(S)
                }), [S]);
                var Z = function(e) {
                    j.current && !j.current.contains(e.target) && T(!1)
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
                        var e = S.map((function(e) {
                            return e.id
                        }));
                        return r.filter((function(t) {
                            return !(null != e && e.includes(t.id)) && t.productType !== c.Pm.ROLE && (!D || (t.id.toLowerCase().includes(D.trim().toLowerCase()) || t.displayName.toLowerCase().includes(D.trim().toLowerCase())))
                        })) || []
                    }), [S, r, D]);
                return m.createElement(o.JX, {
                    className: "tw-@container/add-products tw-relative tw-z-10"
                }, m.createElement("p", null, "Reward your subscribers by granting them access to exclusive products for the duration of their subscription.", " ", m.createElement("a", {
                    href: "https://creators.vrchat.com/economy/products/paid-role",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn More")), m.createElement(o.JX, {
                    className: "tw-mb-5",
                    ref: j
                }, m.createElement(o.II, {
                    className: "tw-mb-2",
                    value: y,
                    onChange: function(e) {
                        return x(e.target.value)
                    },
                    onFocus: function() {
                        T(!0)
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
                    return m.createElement(m.Fragment, {
                        key: e.id
                    }, m.createElement(o.X2, {
                        product: e,
                        className: "tw-gap-3 tw-flex-wrap"
                    }, m.createElement(o.pw, {
                        imageId: null == e ? void 0 : e.imageId,
                        alt: null == e ? void 0 : e.displayName,
                        fallbackSrc: s,
                        width: 100
                    }), m.createElement(o.JX, {
                        className: "tw-flex-1"
                    }, m.createElement("p", {
                        className: "tw-mb-0 tw-font-bold"
                    }, e.displayName), m.createElement("p", {
                        className: "tw-mb-0 tw-text-placeholder-text"
                    }, e.description)), m.createElement(o.zx, {
                        type: "button",
                        containerClasses: "tw-w-full @sm/add-products:tw-w-[160px] tw-self-center",
                        onClick: function(t) {
                            var r;
                            r = e, k([].concat((0, n.Z)(S), [r])), T(!1), x("")
                        }
                    }, "Add")), m.createElement("hr", {
                        className: "tw-bg-[#07242B] tw-font-medium tw-border-2 tw-border-solid"
                    }))
                })) : m.createElement("div", null, m.createElement("em", null, "No matching products!")))), m.createElement(o.JX, {
                    className: "tw-gap-2 tw-mb-2 tw-min-h-[100px]"
                }, 0 !== S.length && m.createElement("label", null, "Added Products"), 0 !== S.length && S.map((function(e, t) {
                    return m.createElement(o.X2, {
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
                                    n = Array.from(S),
                                    l = n.splice(r, 1),
                                    i = (0, a.Z)(l, 1)[0];
                                n.splice(t, 0, i), k(n)
                            }(e, t)
                        },
                        className: "tw-px-5 tw-py-3 tw-gap-5 tw-items-center tw-bg-grey tw-rounded-lg"
                    }, m.createElement(o.$1, {
                        icon: i.g$
                    }), m.createElement(o.X2, {
                        className: "tw-items-center tw-gap-2 tw-flex-1"
                    }, m.createElement(o.pw, {
                        imageId: null == e ? void 0 : e.imageId,
                        alt: null == e ? void 0 : e.displayName,
                        fallbackSrc: s,
                        width: 36
                    }), m.createElement("label", {
                        className: "tw-font-bold"
                    }, e.displayName)), (null == e ? void 0 : e.id) !== (null == d ? void 0 : d.id) && m.createElement(o.zx, {
                        type: "button",
                        onClick: function() {
                            return k(S.filter((function(t) {
                                return t.id !== e.id
                            })))
                        },
                        neutral: !0,
                        className: "tw-w-9 tw-h-9"
                    }, m.createElement(o.$1, {
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
                i = r(76553),
                o = r(6811),
                s = r(64687),
                c = r.n(s),
                u = r(64258),
                m = r(14411),
                d = r(98185),
                w = r(95896),
                p = r(22202),
                g = r(16869),
                f = r(67978),
                b = r(45697),
                v = r.n(b),
                E = r(67294),
                h = r(32981),
                y = r(89250),
                x = r(79655),
                N = r(36078),
                C = r(45987),
                S = r(41145),
                k = r(62228),
                O = r(78076),
                P = r(67263),
                I = r(93261),
                T = ["file", "imageId"],
                j = ["file"],
                D = ["imageId"];

            function Z(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Z(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Z(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var A = function(e) {
                var t = e.listing,
                    r = e.onDataChange,
                    n = void 0 === r ? function() {} : r,
                    i = e.onEditProducts,
                    o = void 0 === i ? function() {} : i,
                    s = e.productList,
                    c = E.useState({}),
                    u = (0, l.Z)(c, 2),
                    w = u[0],
                    p = u[1],
                    g = E.useState(!1),
                    f = (0, l.Z)(g, 2),
                    b = f[0],
                    v = f[1],
                    h = E.useState((null == t ? void 0 : t.file) || (null == t ? void 0 : t.imageId) || null),
                    y = (0, l.Z)(h, 2),
                    x = y[0],
                    N = y[1],
                    Z = E.useState(!1),
                    A = (0, l.Z)(Z, 2),
                    F = A[0],
                    X = A[1],
                    R = s || [],
                    U = (null == t ? void 0 : t.displayName) || "",
                    z = E.useState(U),
                    J = (0, l.Z)(z, 2),
                    M = J[0],
                    G = J[1],
                    B = (null == t ? void 0 : t.description) || "",
                    q = E.useState(B),
                    $ = (0, l.Z)(q, 2),
                    V = $[0],
                    _ = $[1],
                    W = (0, I.r5)({
                        groupId: t.groupId
                    }, {
                        skip: !t.groupId
                    }),
                    Y = W.data,
                    H = W.isFetching,
                    Q = W.isSuccess,
                    K = W.isError;
                E.useEffect((function() {
                    n(w)
                }), [w]);
                var ee = function(e) {
                    var t = e.target,
                        r = t.name,
                        n = t.value;
                    switch (p((function(e) {
                            return L(L({}, e), {}, (0, a.Z)({}, r, n))
                        })), r) {
                        case "displayName":
                            G(n);
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
                return E.createElement(E.Fragment, null, E.createElement(m.JX, {
                    className: "tw-@container/subInfo tw-gap-4"
                }, E.createElement(m.JX, {
                    className: "@sm/subInfo:tw-flex-row tw-gap-4"
                }, E.createElement("button", {
                    type: "button",
                    onClick: function() {
                        v(!0)
                    },
                    className: "tw-bg-transparent tw-border-0 tw-p-0 tw-rounded tw-relative tw-items-center tw-justify-center tw-flex"
                }, !x && E.createElement(m.zx, {
                    containerClasses: "tw-rounded tw-absolute tw-flex-1"
                }, E.createElement(m.$1, {
                    icon: O.Vm,
                    className: "tw-mr-2"
                }), E.createElement("span", null, "Upload Thumbnail")), E.createElement(m.pw, {
                    imageId: x,
                    fitToCover: !0,
                    alt: "Subscription Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                })), E.createElement(m.JX, {
                    className: "tw-gap-5 flex-1"
                }, E.createElement(m.JX, {
                    className: "tw-gap-2"
                }, E.createElement("label", {
                    htmlFor: "displayName"
                }, "Display Name"), E.createElement(m.II, {
                    name: "displayName",
                    type: "text",
                    onChange: ee,
                    maxLength: 64,
                    value: M
                }), E.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, M.length, "/64")), E.createElement(m.JX, {
                    className: "tw-gap-2"
                }, E.createElement("label", {
                    htmlFor: "description"
                }, "Description"), E.createElement(m.gx, {
                    name: "description",
                    onChange: ee,
                    value: V,
                    maxLength: 256,
                    inputClassName: "tw-h-[135px]"
                }), E.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, V.length, "/256")))), E.createElement(m.JX, null, E.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2"
                }, "Associated Group"), E.createElement(d.Z, {
                    loading: H
                }, Q && E.createElement(m.X2, null, E.createElement(m.pw, {
                    imageId: null == Y ? void 0 : Y.imageId,
                    alt: null == Y ? void 0 : Y.displayName,
                    fallbackSrc: P,
                    fitToCover: !0,
                    className: "tw-h-7 tw-w-7 tw-mr-2"
                }), E.createElement("p", {
                    className: "tw-font-bold"
                }, null == Y ? void 0 : Y.name)), K && E.createElement("div", null, E.createElement("p", {
                    className: "tw-font-bold"
                }, t.groupId)))), E.createElement(m.JX, null, E.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2"
                }, "Associated Products ", R.length > 0 && "(".concat(R.length, ")")), 0 === R.length && E.createElement("p", {
                    className: "tw-text-placeholder-text tw-mb-0"
                }, "None"), R.length > 0 && E.createElement(m.JX, null, E.createElement("div", {
                    className: "tw-gap-2 tw-w-full tw-grid tw-grid-cols-2 tw-mb-3"
                }, (F ? R : R.slice(0, 6)).map((function(e) {
                    return E.createElement(m.X2, {
                        key: e.id,
                        className: "tw-items-center tw-gap-2 tw-flex-1"
                    }, E.createElement(m.pw, {
                        imageId: null == e ? void 0 : e.imageId,
                        alt: null == e ? void 0 : e.displayName,
                        fallbackSrc: P,
                        fitToCover: !0,
                        className: "tw-h-7 tw-w-7"
                    }), E.createElement("p", {
                        className: "tw-font-bold tw-mb-0"
                    }, null == e ? void 0 : e.displayName, " (", E.createElement("span", {
                        className: "tw-capitalize"
                    }, null == e ? void 0 : e.productType), ")"))
                }))), R.length > 6 && E.createElement(m.X2, {
                    className: "tw-items-center tw-gap-2"
                }, E.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return X(!F)
                    },
                    className: "tw-mb-0 tw-appearance-none tw-bg-transparent tw-border-none tw-text-light-grey"
                }, F ? "Show Less " : "Show all products ", F ? E.createElement(m.$1, {
                    icon: k.mT
                }) : E.createElement(m.$1, {
                    icon: S.pt
                }))))), E.createElement(m.zx, {
                    type: "button",
                    onClick: o,
                    className: "tw-w-full",
                    containerClasses: "tw-max-w-[210px]"
                }, "Manage Products")), E.createElement(m.m6, {
                    preset: "subscription",
                    image: x,
                    isOpen: b,
                    onClose: function() {
                        return v(!1)
                    },
                    confirmCallback: function(e) {
                        var t = e.fileId,
                            r = void 0 === t ? null : t,
                            n = e.fileBlob,
                            a = void 0 === n ? null : n,
                            l = null !== r;
                        return null === r && null === a ? (N(null), void p((function(e) {
                            e.file, e.imageId;
                            return (0, C.Z)(e, T)
                        }))) : l ? (N(r), void p((function(e) {
                            e.file;
                            var t = (0, C.Z)(e, j);
                            return L({
                                imageId: r
                            }, t)
                        }))) : (N(a), void p((function(e) {
                            e.imageId;
                            var t = (0, C.Z)(e, D);
                            return L({
                                file: a
                            }, t)
                        })))
                    },
                    cancelCallBack: function() {
                        return v(!1)
                    }
                }))
            };
            A.propTypes = {
                listing: v().object.isRequired,
                onDataChange: v().func
            };
            const F = A;
            var X = r(25062),
                R = ["currentUnitPriceTokens"];

            function U(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : U(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var J = function(e) {
                var t = e.listing,
                    r = e.onDataChange,
                    n = void 0 === r ? function() {} : r,
                    i = e.validateVariants,
                    o = void 0 === i ? function() {} : i;
                if (!t) return null;
                var s = E.useState({}),
                    c = (0, l.Z)(s, 2),
                    u = c[0],
                    d = c[1],
                    p = (null == t ? void 0 : t.priceTokens) || ((null == t ? void 0 : t.productType) === w.Pm.LISTING ? w.zD : void 0),
                    g = E.useState(p),
                    f = (0, l.Z)(g, 2),
                    b = f[0],
                    v = f[1],
                    h = (null == t ? void 0 : t.listingVariants) || [],
                    y = E.useState(w.PN.map((function(e) {
                        return h.find((function(t) {
                            return t.quantity === e
                        })) || {
                            quantity: e
                        }
                    }))),
                    x = (0, l.Z)(y, 2),
                    N = x[0],
                    S = x[1],
                    k = (null == t ? void 0 : t.duration) || 1,
                    O = E.useState(k),
                    P = (0, l.Z)(O, 2),
                    I = P[0],
                    T = (P[1], (null == t ? void 0 : t.durationType) || "months"),
                    j = E.useState(T),
                    D = (0, l.Z)(j, 2),
                    Z = D[0];
                D[1];
                E.useEffect((function() {
                    n(u)
                }), [u]), E.useEffect((function() {
                    d((function(e) {
                        return z(z({}, e), {}, {
                            listingVariants: null == N ? void 0 : N.filter((function(e) {
                                return !!e.unitPriceTokens
                            })).map((function(e) {
                                var t = e.currentUnitPriceTokens,
                                    r = (0, C.Z)(e, R);
                                return z(z({
                                    unitPriceTokens: parseInt(t, 10)
                                }, r), {}, {
                                    sellerVariant: !0
                                })
                            }))
                        })
                    }))
                }), [N]);
                (0, E.useEffect)((function() {
                    var e = 0 === N.length || (null == L ? void 0 : L.every((function(e) {
                        return e
                    })));
                    o(e)
                }), [L, N]);
                var L = E.useMemo((function() {
                        return N.map((function(e, t) {
                            var r, n = e.quantity,
                                a = e.unitPriceTokens;
                            if (w.PN[t] !== n) return !1;
                            if (void 0 === a) return !0;
                            if (!/^\d*$/.test(a)) return !1;
                            var l = (null === (r = N.slice(0, t).findLast((function(e) {
                                    return e.unitPriceTokens
                                }))) || void 0 === r ? void 0 : r.unitPriceTokens) || b,
                                i = parseInt(l, 10),
                                o = parseInt(a, 10);
                            return o >= w.zD && o <= i
                        }))
                    }), [N, b]),
                    A = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N;
                        S(e.map((function(t, r) {
                            var n, a = (null === (n = e.slice(0, r).findLast((function(e) {
                                return e.unitPriceTokens
                            }))) || void 0 === n ? void 0 : n.unitPriceTokens) || b;
                            return parseInt(t.unitPriceTokens, 10) === parseInt(a, 10) ? z(z({}, t), {}, {
                                unitPriceTokens: void 0
                            }) : t
                        })))
                    };
                E.useEffect(A, [b]);
                return E.createElement(m.JX, {
                    className: "tw-@container/subPricing tw-gap-5"
                }, E.createElement(m.JX, {
                    className: "tw-gap-2"
                }, E.createElement(m.X2, {
                    className: "tw-items-center tw-gap-2 tw-bg-grey tw-px-3 tw-py-2 tw-rounded-lg"
                }, E.createElement("label", {
                    htmlFor: "priceTokens",
                    className: "tw-text-nowrap"
                }, "1 month at"), E.createElement(m.II, {
                    name: "priceTokens",
                    type: "number",
                    className: "tw-w-[150px]",
                    onChange: function(e) {
                        var t = e.target,
                            r = t.name,
                            n = t.value;
                        switch (d((function(e) {
                                return z(z({}, e), {}, (0, a.Z)({}, r, n))
                            })), r) {
                            case "priceTokens":
                                v(n);
                                break;
                            case "listingVariants":
                                S(n)
                        }
                    },
                    value: b,
                    min: w.zD,
                    max: w._C
                })), N.map((function(e, t) {
                    var r, n = e.quantity,
                        a = e.unitPriceTokens,
                        l = "listingVariants[".concat(t, "]_unitPriceTokens"),
                        i = (null === (r = N.slice(0, t).findLast((function(e) {
                            return e.unitPriceTokens
                        }))) || void 0 === r ? void 0 : r.unitPriceTokens) || b,
                        o = null != a ? a : i,
                        s = parseInt(b, 10),
                        c = parseInt(i, 10),
                        u = parseInt(o, 10);
                    return E.createElement(m.JX, {
                        key: l,
                        className: "tw-justify-center tw-bg-grey tw-gap-2 tw-px-3 tw-py-2 tw-rounded-lg"
                    }, E.createElement(m.X2, {
                        className: "tw-items-center"
                    }, E.createElement("label", {
                        htmlFor: l,
                        className: "tw-whitespace-nowrap tw-mr-2"
                    }, "".concat((n * I).toLocaleString(), " ").concat(n * I == 1 ? Z.replace(/s$/, "") : Z, " at ")), E.createElement(m.X2, {
                        className: "tw-items-center"
                    }, E.createElement(m.II, {
                        id: l,
                        type: "number",
                        className: "tw-w-[150px] tw-mr-2",
                        min: w.zD,
                        max: i,
                        size: w._C.toString(10).length + 1,
                        value: o,
                        invalid: !0 !== L[t],
                        onChange: function(e) {
                            return function(e) {
                                var t = e.index,
                                    r = e.unitPriceTokens,
                                    n = N.map((function(e) {
                                        return z({}, e)
                                    }));
                                n[t].unitPriceTokens = parseInt(r, 10), A(n)
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
                        duration: I,
                        durationType: Z
                    }), ", ")), E.createElement("label", {
                        htmlFor: l
                    }, E.createElement("strong", null, "Total"), " ", E.createElement(m.b5, null), (n * I * u || 0).toLocaleString(), u < s && E.createElement(E.Fragment, null, " ", E.createElement(X.Z, {
                        color: "success"
                    }, Math.floor(100 - u / s * 100), "% off")), u === c && E.createElement(E.Fragment, null, " ", E.createElement(X.Z, {
                        className: "tw-text-[#DADADA] tw-bg-gray-500",
                        title: "This bundle is using the same unit price as the ".concat(0 === t ? "standard price" : "previous bundle", ".")
                    }, "Max Price")))), !0 !== L[t] && E.createElement("div", null, E.createElement("span", {
                        className: "tw-text-red"
                    }, "Must be a whole number between ", E.createElement(m.b5, null), w.zD.toLocaleString(), " and the ", 0 === t ? "standard" : "previous bundle", " unit price", !Number.isNaN(c) && E.createElement(E.Fragment, null, " ", "of ", E.createElement(m.b5, null), (c || 0).toLocaleString()), ".")))
                })), E.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, "Set pricing for your monthly subscription plans, and consider offering discounts to attract more subscribers by reducing the monthly rates.")))
            };
            J.propTypes = {
                listing: v().object.isRequired,
                onDataChange: v().func
            };
            const M = J;

            function G(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var q = function(e) {
                e.store;
                var t = e.listingId,
                    r = e.onClose,
                    a = void 0 === r ? function() {} : r,
                    s = (0, h.I0)(),
                    b = ((0, y.s0)(), (0, p.XC)().data),
                    v = (0, E.useState)(0),
                    C = (0, l.Z)(v, 2),
                    S = C[0],
                    k = C[1],
                    O = (0, E.useState)(null),
                    P = (0, l.Z)(O, 2),
                    I = P[0],
                    T = P[1],
                    j = (0, E.useState)(null),
                    D = (0, l.Z)(j, 2),
                    Z = D[0],
                    L = D[1],
                    A = (0, E.useState)(!1),
                    X = (0, l.Z)(A, 2),
                    R = X[0],
                    U = X[1],
                    z = (0, E.useState)(null),
                    J = (0, l.Z)(z, 2),
                    G = J[0],
                    q = J[1],
                    $ = (0, E.useState)([]),
                    V = (0, l.Z)($, 2),
                    _ = V[0],
                    W = V[1],
                    Y = (0, E.useState)(!0),
                    H = (0, l.Z)(Y, 2),
                    Q = H[0],
                    K = H[1],
                    ee = (0, g.mr)({
                        listingId: t,
                        hydrateProducts: !0
                    }),
                    te = ee.data,
                    re = ee.isLoading,
                    ne = (ee.isError, ee.error, (0, g.Ij)()),
                    ae = (0, l.Z)(ne, 2),
                    le = ae[0],
                    ie = ae[1],
                    oe = (ie.isLoading, ie.isSuccess, ie.isError, ie.error, (0, f.As)()),
                    se = (0, l.Z)(oe, 2),
                    ce = se[0],
                    ue = se[1],
                    me = ue.data,
                    de = ue.isLoading,
                    we = (ue.isError, ue.error, (0, E.useMemo)((function() {
                        return null == me ? void 0 : me.filter((function(e) {
                            return e.productType !== w.Pm.AVATAR
                        }))
                    }), [me]));
                (0, E.useEffect)((function() {
                    if (te) {
                        if (te.hydratedProducts) {
                            var e = te.products.find((function(e) {
                                return e.groupRoleId
                            }));
                            q(e), W(te.products)
                        }
                        T(te)
                    }
                }), [te, re]);
                var pe = function(e) {
                        T(B(B({}, I), e)), L(B(B({}, Z), e))
                    },
                    ge = function() {
                        var e = (0, n.Z)(c().mark((function e() {
                            var t, r, n;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = function() {
                                            s((0, u.d)({
                                                title: "Listing updated successfully!",
                                                icon: o.f8,
                                                message: "Your listing has been updated successfully!",
                                                color: "success",
                                                timeout: 3e3
                                            })), a()
                                        }, e.prev = 1, e.next = 4, le(B({
                                            listingId: te.id
                                        }, Z)).unwrap();
                                    case 4:
                                        t(), e.next = 11;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), s((0, u.d)({
                                            title: "Failed to update listing!",
                                            icon: i.eH,
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
                    fe = (0, E.useMemo)((function() {
                        var e = null == Z || !Z.displayName || Z.displayName.length >= 3,
                            t = "" !== (null == Z ? void 0 : Z.displayName),
                            r = null == Z || !Z.priceTokens || Z.priceTokens >= 100 && Z.priceTokens <= 1e4 && Number.isInteger(parseFloat(Z.priceTokens)),
                            n = null == Z || !Z.products || Z.products.length > 0;
                        return e && t && r && n && Q
                    }), [Z, Q]),
                    be = re || !I || de;
                return E.createElement(m.JX, {
                    className: "tw-w-full tw-relative"
                }, be && E.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, E.createElement(d.Z, {
                    loading: be
                })), !be && !R && E.createElement(E.Fragment, null, E.createElement("div", {
                    className: "tw-w-full tw-bg-grey tw-text-light-grey tw-rounded-lg tw-px-3 tw-py-4 tw-mb-3"
                }, E.createElement("p", {
                    className: "tw-mb-0 tw-text-sm"
                }, "Manage this role's permissions and requirements from your", " ", E.createElement("strong", null, E.createElement(x.rU, {
                    className: "tw-text-lighter-grey",
                    to: null != I && I.groupId && null != G && G.groupRoleId ? "/home/group/".concat(I.groupId, "/settings/roles/").concat(G.groupRoleId) : "/home/groups"
                }, "Group")), " ", "settings")), E.createElement(m.X2, {
                    className: "tw-gap-5 tw-mb-6"
                }, E.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return k(0)
                    },
                    className: "tw-bg-transparent tw-py-2 tw-border-0 tw-border-b-2 tw-border-solid ".concat(0 === S ? "tw-border-teal-accent" : "tw-border-transparent")
                }, "Overview"), E.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return k(1)
                    },
                    className: "tw-bg-transparent tw-py-2 tw-border-0 tw-border-b-2 tw-border-solid ".concat(1 === S ? "tw-border-solid tw-border-teal-accent" : "tw-border-transparent")
                }, "Pricing")), E.createElement("div", {
                    className: "tw-w-full tw-relative"
                }, 0 === S && E.createElement(F, {
                    listing: I,
                    onDataChange: pe,
                    onEditProducts: function() {
                        ce({
                            userId: b.id
                        }), U(!0)
                    },
                    productList: _
                }), 1 === S && E.createElement(M, {
                    listing: I,
                    onDataChange: pe,
                    validateVariants: function(e) {
                        return K(e)
                    }
                })), E.createElement("div", {
                    className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                }, E.createElement(m.zx, {
                    neutral: !0,
                    type: "button",
                    onClick: a,
                    containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                }, "Cancel"), E.createElement(m.zx, {
                    type: "button",
                    onClick: ge,
                    disabled: !fe,
                    containerClasses: "sm:tw-max-w-[240px] tw-flex-1"
                }, "Save"))), !be && R && E.createElement(m.JX, null, E.createElement(N.Z, {
                    products: we,
                    onDataChange: pe,
                    associatedProduct: G,
                    existingProducts: _,
                    onAddedProducts: function(e) {
                        return W(e)
                    }
                }), E.createElement("div", {
                    className: "tw-w-full tw-flex tw-justify-center"
                }, E.createElement(m.zx, {
                    type: "button",
                    onClick: function() {
                        return U(!1)
                    },
                    containerClasses: "tw-max-w-[170px] tw-w-full tw-mt-5"
                }, "Done"))))
            };
            q.propTypes = {
                store: v().object,
                listing: v().object,
                onClose: v().func
            };
            const $ = q
        },
        18529: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => be
            });
            var n = r(15861),
                a = r(45987),
                l = r(4942),
                i = r(54546),
                o = r(76553),
                s = r(64687),
                c = r.n(s),
                u = r(64258),
                m = r(14411),
                d = r(63221),
                w = r(95896),
                p = r(22202),
                g = r(93261),
                f = r(16869),
                b = r(67978),
                v = r(68157),
                E = r(67294),
                h = r(32981),
                y = r(89250),
                x = r(36078),
                N = r(82414),
                C = r(65061),
                S = r(46357),
                k = r(17319),
                O = r(34233),
                P = r(7371);

            function I(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(Object(r), !0).forEach((function(t) {
                        (0, l.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I(Object(r)).forEach((function(t) {
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
                    o = e.groupData,
                    s = e.shortCodePlaceholder,
                    c = void 0 === s ? "" : s,
                    u = E.useState(!1),
                    d = (0, i.Z)(u, 2),
                    w = d[0],
                    p = d[1],
                    g = E.useState({
                        currentIcon: (null == o ? void 0 : o.icon) || (null == o ? void 0 : o.iconId) || null,
                        currentBanner: (null == o ? void 0 : o.banner) || (null == o ? void 0 : o.bannerId) || null
                    }),
                    f = (0, i.Z)(g, 2),
                    b = f[0],
                    v = f[1],
                    h = E.useState(""),
                    y = (0, i.Z)(h, 2),
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
                    icon: P.Iw
                })), E.createElement(m.pw, {
                    imageId: b.currentBanner,
                    fitToCover: !0,
                    alt: "Group Banner",
                    className: "tw-w-full tw-max-h-[115px]",
                    containerColor: "#181B1F",
                    iconColor: "#404C58"
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
                    icon: O._j
                })), E.createElement(m.pw, {
                    imageId: b.currentIcon,
                    fitToCover: !0,
                    alt: "Group Banner",
                    className: "tw-w-[100px] tw-rounded-full tw-aspect-square tw-h-[100px]",
                    containerColor: "#181B1F",
                    iconColor: "#404C58"
                })), E.createElement(m.JX, null, E.createElement("h4", {
                    className: "tw-m-0"
                }, o.name), E.createElement(m.X2, {
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
                }, "" !== o.shortCode ? o.shortCode : c, ".0000")))), E.createElement(m.m6, {
                    preset: x,
                    isOpen: w,
                    onClose: function() {
                        return p(!1)
                    },
                    confirmCallback: (t = x, function(e) {
                        var r = e.fileId,
                            a = void 0 === r ? null : r,
                            i = e.fileBlob,
                            o = void 0 === i ? null : i;
                        if ("groupBanner" === t || "groupIcon" === t) {
                            if (null === a && null === o) {
                                var s = "groupBanner" === t ? {
                                    currentBanner: null
                                } : {
                                    currentIcon: null
                                };
                                return v((function(e) {
                                    return T(T({}, e), s)
                                })), void("groupBanner" === t ? l : n)(null)
                            }
                            if (null !== a) {
                                var c = "groupBanner" === t ? {
                                    currentBanner: a
                                } : {
                                    currentIcon: a
                                };
                                return v((function(e) {
                                    return T(T({}, e), c)
                                })), void("groupBanner" === t ? l : n)(a)
                            }
                            var u = "groupBanner" === t ? {
                                currentBanner: o
                            } : {
                                currentIcon: o
                            };
                            v((function(e) {
                                return T(T({}, e), u)
                            })), ("groupBanner" === t ? l : n)(o)
                        }
                    }),
                    cancelCallBack: function() {
                        return p(!1)
                    }
                }))
            };

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
                        (0, l.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : D(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const L = function(e) {
                var t = e.currentGroupData,
                    r = void 0 === t ? null : t,
                    n = e.onGroupDataChange,
                    a = void 0 === n ? function() {} : n,
                    o = e.generateShortCodeFromName,
                    s = void 0 === o ? function() {} : o,
                    c = e.shortCodePlaceholder,
                    u = void 0 === c ? null : c,
                    d = E.useState((null == r ? void 0 : r.banner) || (null == r ? void 0 : r.bannerId) || null),
                    w = (0, i.Z)(d, 2),
                    p = (w[0], w[1], E.useState((null == r ? void 0 : r.icon) || (null == r ? void 0 : r.iconId) || null)),
                    g = (0, i.Z)(p, 2),
                    f = (g[0], g[1], E.useState({
                        icon: (null == r ? void 0 : r.icon) || null,
                        banner: (null == r ? void 0 : r.banner) || null,
                        iconId: (null == r ? void 0 : r.iconId) || null,
                        bannerId: (null == r ? void 0 : r.bannerId) || null,
                        shortCode: (null == r ? void 0 : r.shortCode) || "",
                        name: (null == r ? void 0 : r.name) || "",
                        description: (null == r ? void 0 : r.description) || ""
                    })),
                    b = (0, i.Z)(f, 2),
                    v = b[0],
                    h = b[1],
                    y = (0, E.useState)(!1),
                    x = (0, i.Z)(y, 2),
                    S = x[0],
                    k = x[1],
                    O = (0, E.useRef)(null),
                    P = E.useCallback((function(e, t) {
                        var r = "string" == typeof t;
                        h((function(n) {
                            var i, o = Z(Z({}, n), {}, (i = {}, (0, l.Z)(i, "".concat(e, "Id"), r ? t : null), (0, l.Z)(i, e, r ? null : t), i));
                            return a(o), o
                        }))
                    }), [a]),
                    I = function(e) {
                        var t = e.target,
                            r = t.name,
                            n = t.value;
                        h((function(e) {
                            var t = Z(Z({}, e), {}, (0, l.Z)({}, r, "shortCode" === r ? n.toUpperCase() : n));
                            return a(t), t
                        }))
                    };
                return (0, E.useEffect)((function() {
                    var e = function(e) {
                        O.current && !O.current.contains(e.target) && k(!1)
                    };
                    return S ? document.addEventListener("mousedown", e) : document.removeEventListener("mousedown", e),
                        function() {
                            document.removeEventListener("mousedown", e)
                        }
                }), [S]), E.createElement(m.JX, {
                    className: "tw-gap-5 tw-mb-8"
                }, E.createElement(m.JX, null, E.createElement("label", {
                    forHtml: "name",
                    className: "tw-mb-2"
                }, "Group Name"), E.createElement(m.II, {
                    name: "name",
                    type: "text",
                    className: "tw-mb-2",
                    onChange: function(e) {
                        I(e), s(e)
                    },
                    maxLength: 64,
                    value: v.name
                }), E.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, v.name.length, "/64")), E.createElement(m.JX, null, E.createElement("label", {
                    forHtml: "shortCode",
                    className: "tw-flex tw-flex-row tw-mb-2"
                }, "Group Unique ID", E.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1",
                    ref: O
                }, E.createElement("button", {
                    id: "groupIdTooltip",
                    type: "button",
                    className: "tw-bg-transparent tw-border-none",
                    onClick: function() {
                        return k(!S)
                    },
                    "aria-label": "Group ID tooltip"
                }, E.createElement(m.$1, {
                    icon: N.sq,
                    className: "tw-text-light-grey"
                })), E.createElement(C.Z, {
                    isOpen: S,
                    target: "groupIdTooltip",
                    placement: "right",
                    trigger: "click",
                    innerClassName: "tw-bg-gray-900"
                }, E.createElement("span", {
                    className: "tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50"
                }, "This will help other users find your group or differentiate it from similar named ones.")))), E.createElement(m.II, {
                    name: "shortCode",
                    className: "tw-mb-2",
                    type: "text",
                    onChange: I,
                    maxLength: 6,
                    min: 3,
                    value: v.shortCode,
                    placeholder: u
                }), E.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, "Your Group's identifier must be 3-6 characters and will be followed with a discriminator.", v.name.length >= 3 && " If left blank, ".concat(u, " will be your identifier."))), E.createElement(m.JX, null, E.createElement("label", {
                    forHtml: "description",
                    className: "tw-mb-2"
                }, "Description"), E.createElement(m.gx, {
                    className: "tw-mb-2",
                    name: "description",
                    onChange: I,
                    maxLength: 1024,
                    value: v.description
                }), E.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, v.description.length, "/1024 characters")), E.createElement("div", {
                    className: "tw-relative tw-rounded-lg"
                }, E.createElement("label", {
                    className: "tw-mb-3"
                }, "Add Group Icon and Banner Image"), E.createElement(j, {
                    shortCodePlaceholder: u,
                    iconChangeCallback: function(e) {
                        return P("icon", e)
                    },
                    bannerChangeCallback: function(e) {
                        return P("banner", e)
                    },
                    groupData: v
                })))
            };
            var A = r(79655);
            const F = function(e) {
                var t = e.group,
                    r = void 0 === t ? {} : t;
                return E.createElement(m.JX, {
                    className: "tw-items-center tw-justify-center tw-mb-8 tw-text-center"
                }, E.createElement(m.pw, {
                    className: "tw-mb-5 tw-rounded-full",
                    imageId: null == r ? void 0 : r.iconId,
                    alt: null == r ? void 0 : r.name,
                    fitToCover: !0
                }), E.createElement("h4", null, null == r ? void 0 : r.name, " has been created!"), E.createElement("p", null, "You can modify, add members and customize your group from the ", E.createElement(A.rU, {
                    to: "/home/groups"
                }, "Groups"), " section."), E.createElement("p", {
                    className: "tw-font-bold tw-mb-0"
                }, "Subscriptions need to be linked to a subscription role."))
            };
            var X = r(11298),
                R = r(66007),
                U = r(81116),
                z = r(81511),
                J = r(4241),
                M = r(6811),
                G = r(83505);

            function B(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? B(Object(r), !0).forEach((function(t) {
                        (0, l.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : B(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const $ = function(e) {
                var t = e.onDataChange,
                    r = void 0 === t ? function() {} : t,
                    n = (0, E.useState)({
                        joinState: d.wN.REQUEST,
                        privacy: d.TW.DEFAULT
                    }),
                    a = (0, i.Z)(n, 2),
                    l = a[0],
                    o = a[1];
                (0, E.useEffect)((function() {
                    r(l)
                }), [l]);
                var s = function(e) {
                        o(q(q({}, l), {}, {
                            joinState: e
                        }))
                    },
                    c = function(e) {
                        o(q(q({}, l), {}, {
                            privacy: e
                        }))
                    },
                    u = function(e) {
                        return e ? E.createElement(m.$1, {
                            icon: M.f8,
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
                        return s(d.wN.OPEN)
                    },
                    role: "button",
                    className: (0, G.cx)("tw-relative tw-px-5 tw-py-8 tw-text-center tw-items-center tw-bg-grey tw-border-2 tw-border-solid tw-rounded-lg hover:tw-border-button-border", l.joinState === d.wN.OPEN ? "tw-border-button-border" : "tw-border-hr-line-color")
                }, u(l.joinState === d.wN.OPEN), E.createElement(m.$1, {
                    icon: J.FK,
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
                    className: (0, G.cx)("tw-relative tw-flex-1 tw-px-5 tw-py-8 tw-text-center tw-items-center tw-bg-grey tw-border-2 tw-border-solid tw-rounded-lg hover:tw-border-button-border", l.joinState === d.wN.REQUEST ? "tw-border-button-border" : "tw-border-hr-line-color")
                }, u(l.joinState === d.wN.REQUEST), E.createElement(m.$1, {
                    icon: z.FU,
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
                    className: (0, G.cx)("tw-relative tw-flex-1 tw-px-5 tw-py-8 tw-text-center tw-items-center tw-bg-grey tw-border-2 tw-border-solid tw-rounded-lg hover:tw-border-button-border", l.joinState === d.wN.INVITE ? "tw-border-button-border" : "tw-border-hr-line-color")
                }, u(l.joinState === d.wN.INVITE), E.createElement(m.$1, {
                    icon: U.FJ,
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
                    className: (0, G.cx)("tw-relative tw-min-w-[200px] tw-gap-6 tw-p-5 tw-items-center tw-bg-grey tw-border-2 tw-border-solid tw-rounded-lg hover:tw-border-button-border", l.privacy === d.TW.DEFAULT ? "tw-border-button-border" : "tw-border-hr-line-color")
                }, u(l.privacy === d.TW.DEFAULT), E.createElement(m.$1, {
                    icon: R.KC,
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
                    className: (0, G.cx)("tw-relative tw-min-w-[200px] tw-gap-6 tw-p-5 tw-items-center tw-bg-grey tw-border-2 tw-border-solid tw-rounded-lg hover:tw-border-button-border", l.privacy === d.TW.PRIVATE ? "tw-border-button-border" : "tw-border-hr-line-color")
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

            function V(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? V(Object(r), !0).forEach((function(t) {
                        (0, l.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : V(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var W = {
                name: "",
                description: ""
            };
            const Y = function(e) {
                var t = e.onDataChange,
                    r = void 0 === t ? function() {} : t,
                    n = e.role,
                    a = void 0 === n ? W : n,
                    o = (0, E.useState)(a),
                    s = (0, i.Z)(o, 2),
                    c = s[0],
                    u = s[1],
                    d = (0, E.useState)(!1),
                    w = (0, i.Z)(d, 2),
                    p = w[0],
                    g = w[1],
                    f = (0, E.useRef)(null),
                    b = function(e) {
                        var t = e.target,
                            n = t.name,
                            a = t.value;
                        u((function(e) {
                            var t = _(_({}, e), {}, (0, l.Z)({}, n, a));
                            return r(t), t
                        }))
                    };
                return (0, E.useEffect)((function() {
                    var e = function(e) {
                        f.current && !f.current.contains(e.target) && g(!1)
                    };
                    return p ? document.addEventListener("mousedown", e) : document.removeEventListener("mousedown", e),
                        function() {
                            document.removeEventListener("mousedown", e)
                        }
                }), [p]), E.createElement(m.JX, {
                    className: "tw-gap-5 tw-mb-8"
                }, E.createElement(m.JX, {
                    className: "tw-rounded-lg tw-bg-[#000000] tw-p-3"
                }, E.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Don't sweat it, you can still change your subscription role details and role permissions in the group page after the role has been created.")), E.createElement(m.JX, {
                    className: "tw-gap-2"
                }, E.createElement("label", {
                    htmlFor: "roleName",
                    className: "tw-flex tw-flex-row"
                }, "Subscription Role Name", E.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1",
                    ref: f
                }, E.createElement("button", {
                    id: "roleNameTooltip",
                    type: "button",
                    className: "tw-bg-transparent tw-border-none",
                    onClick: function() {
                        return g(!p)
                    },
                    "aria-label": "Paid role name tooltip"
                }, E.createElement(m.$1, {
                    icon: N.sq,
                    className: "tw-text-light-grey"
                })), E.createElement(C.Z, {
                    isOpen: p,
                    target: "roleNameTooltip",
                    placement: "right",
                    trigger: "click",
                    innerClassName: "tw-bg-gray-900"
                }, E.createElement("span", {
                    className: "tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50"
                }, "Subscription roles are exclusive roles within the group, available only through an active subscription. Access will automatically end when the subscription expires.")))), E.createElement(m.II, {
                    id: "roleName",
                    name: "name",
                    type: "text",
                    onChange: b,
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
                    onChange: b,
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
            var H = r(42138),
                Q = r(12752),
                K = r(64358),
                ee = {
                    permissions: [],
                    productGroupAccess: !1,
                    requiresTwoFactor: !1,
                    productGroupAccessRemove: !1
                };
            const te = function(e) {
                var t, r = e.onDataChange,
                    n = void 0 === r ? function() {} : r,
                    a = e.groupPermissions,
                    l = void 0 === a ? [] : a,
                    o = e.groupInfo,
                    s = void 0 === o ? {} : o,
                    c = e.role,
                    u = void 0 === c ? ee : c,
                    d = E.useState(u.permissions),
                    w = (0, i.Z)(d, 2),
                    p = w[0],
                    g = w[1],
                    f = E.useState(null),
                    b = (0, i.Z)(f, 2),
                    v = b[0],
                    h = b[1],
                    y = E.useState("open" === (null == s ? void 0 : s.joinState) || u.productGroupAccess),
                    x = (0, i.Z)(y, 2),
                    N = x[0],
                    C = x[1],
                    S = E.useState(u.productGroupAccessRemove),
                    k = (0, i.Z)(S, 2),
                    O = k[0],
                    P = k[1],
                    I = E.useState(u.requiresTwoFactor),
                    T = (0, i.Z)(I, 2),
                    j = T[0],
                    D = T[1];
                E.useEffect((function() {
                    n({
                        permissions: p,
                        productGroupAccess: N,
                        requiresTwoFactor: j,
                        productGroupAccessRemove: O
                    })
                }), [p, N, j, O]);
                var Z = (0, Q._b)(l),
                    L = E.useMemo((function() {
                        return (0, K.Ps)({
                            permissionName: v,
                            permissionsMap: Z
                        })
                    }), [v, Z]),
                    A = "open" === (null == s ? void 0 : s.joinState) ? "Since your group setting is Free Join, all users who subscribe will be automatically added to your group without needing approval. They'll remain part of the group after their subscription ends." : "Since your group setting is not Free Join, any user in VRChat can purchase this role and be added to the group, no matter what the group's join rules are.";
                return E.createElement(m.JX, {
                    className: "tw-gap-5 tw-mb-8"
                }, E.createElement(m.JX, {
                    className: "tw-rounded-lg tw-bg-[#000000] tw-p-3"
                }, E.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Don’t sweat it, you can still change your subscription role details and role permissions in the group page after the role has been created.")), E.createElement(m.JX, {
                    className: "tw-gap-3"
                }, E.createElement(m.JX, {
                    className: "tw-bg-grey tw-p-5 tw-rounded-lg"
                }, E.createElement(m.K_, {
                    label: "Require Two-Factor Authentication",
                    value: "requiresTwoFactor",
                    description: "Requires members to have 2FA before permissions apply.",
                    defaultChecked: j,
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
                            var r = t.checked;
                            return function(e, t) {
                                var r;
                                if (t) {
                                    var n = (0, K.QZ)({
                                        permissionName: e,
                                        permissionsMap: Z
                                    });
                                    return g([].concat((0, H.Z)(p), [e], (0, H.Z)(n)))
                                }
                                var a = Z[e];
                                if (null !== (r = a.computedDependedOnBy) && void 0 !== r && r.size && p.some((function(e) {
                                        return a.computedDependedOnBy.has(e)
                                    }))) return h(e);
                                g(p.filter((function(t) {
                                    return t !== e
                                })))
                            }(e.name, r)
                        }
                    }))
                })))), E.createElement(m.sm, {
                    isOpen: !!v,
                    confirmCallback: function() {
                        return g(p.filter((function(e) {
                            return e !== v && !L.has(e)
                        }))), void h(null)
                    },
                    cancelCallback: function() {
                        return h(null)
                    },
                    headerText: "Role Permission Dependencies",
                    confirmText: "Turn Off",
                    cancelText: "Go Back"
                }, E.createElement("div", null, E.createElement("p", null, "Turning off “", null === (t = Z[v]) || void 0 === t ? void 0 : t.displayName, "” will also turn off permissions that currently require it:"), E.createElement("ul", null, (0, H.Z)(L).filter((function(e) {
                    return p.includes(e)
                })).map((function(e) {
                    var t = Z[e];
                    return E.createElement("li", {
                        key: e
                    }, "“", t.displayName, "”")
                }))), E.createElement("strong", null, "Are you sure you want to turn this off?"))))
            };
            var re = r(4965);
            const ne = function(e) {
                var t, r, n = e.user,
                    a = e.groups,
                    l = e.onGroupSelect,
                    o = void 0 === l ? function() {} : l,
                    s = null !== (t = null == n || null === (r = n.tagsSet) || void 0 === r ? void 0 : r.has("system_supporter")) && void 0 !== t && t,
                    c = E.useState(""),
                    u = (0, i.Z)(c, 2),
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
                }, "Select Group"), E.createElement(ae, {
                    className: "tw-w-full",
                    id: "group_select",
                    "aria-label": "Select a group",
                    name: "group_select",
                    label: "",
                    value: m,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        if (null === r) return o(null), void d("+ Create New Group");
                        var n = w.find((function(e) {
                            return e.name === r
                        }));
                        d(r), o(n)
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
            var ae = (0, re.Z)("select", {
                target: "e1iz8sio0"
            })("padding:0.45rem 0.75rem;height:unset;background:#05191d;border:#053c48 solid 2px;border-color:", (function(e) {
                return e.isError ? "#A8342E" : "#053c48"
            }), ";border-radius:4px;outline:none!important;color:#6ae3f9;min-width:100px;&:active,&:hover,&:focus{background:#07343f;color:#6ae3f9;border-color:", (function(e) {
                return e.isError ? "#A8342E" : "#086c84"
            }), ";}");
            const le = function(e) {
                var t = e.listing,
                    r = void 0 === t ? {} : t;
                return E.createElement(m.JX, {
                    className: "tw-text-center tw-mb-8 tw-items-center"
                }, E.createElement(m.pw, {
                    className: "tw-mb-5 tw-rounded-lg",
                    imageId: null == r ? void 0 : r.imageId,
                    alt: null == r ? void 0 : r.displayName,
                    width: 150,
                    fitToCover: !0
                }), E.createElement("h4", null, "Subscription Created"), E.createElement("p", null, "Your subscription is ready! Make sure your group store is enabled to start selling."))
            };
            var ie = r(78076),
                oe = r(25062),
                se = ["file"],
                ce = ["imageId"];

            function ue(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ue(Object(r), !0).forEach((function(t) {
                        (0, l.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ue(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const de = function(e) {
                var t = e.onDataChange,
                    r = void 0 === t ? function() {} : t,
                    n = e.listing,
                    o = void 0 === n ? {} : n,
                    s = e.currentChanges,
                    c = e.validateVariants,
                    u = void 0 === c ? function() {} : c,
                    d = E.useState({}),
                    p = (0, i.Z)(d, 2),
                    g = p[0],
                    f = p[1],
                    b = E.useState(!1),
                    v = (0, i.Z)(b, 2),
                    h = v[0],
                    y = v[1],
                    x = E.useState((null == s ? void 0 : s.imageId) || (null == s ? void 0 : s.file) || null),
                    N = (0, i.Z)(x, 2),
                    C = N[0],
                    S = N[1],
                    k = E.useState(""),
                    O = (0, i.Z)(k, 2),
                    P = (O[0], O[1]),
                    I = (null == s ? void 0 : s.displayName) || (null == o ? void 0 : o.displayName) || "",
                    T = E.useState(I),
                    j = (0, i.Z)(T, 2),
                    D = j[0],
                    Z = j[1],
                    L = (null == s ? void 0 : s.description) || (null == o ? void 0 : o.description) || "",
                    A = E.useState(L),
                    F = (0, i.Z)(A, 2),
                    X = F[0],
                    R = F[1],
                    U = (null == s ? void 0 : s.priceTokens) || (null == o ? void 0 : o.priceTokens) || ((null == o ? void 0 : o.productType) === w.Pm.LISTING ? w.zD : void 0),
                    z = E.useState(U),
                    J = (0, i.Z)(z, 2),
                    M = J[0],
                    G = J[1],
                    B = (null == s ? void 0 : s.listingVariants) || (null == o ? void 0 : o.listingVariants) || [],
                    q = E.useState(w.PN.map((function(e) {
                        return B.find((function(t) {
                            return t.quantity === e
                        })) || {
                            quantity: e
                        }
                    }))),
                    $ = (0, i.Z)(q, 2),
                    V = $[0],
                    _ = $[1],
                    W = (null == s ? void 0 : s.duration) || (null == o ? void 0 : o.duration) || 1,
                    Y = E.useState(W),
                    H = (0, i.Z)(Y, 2),
                    Q = H[0],
                    K = (H[1], (null == s ? void 0 : s.durationType) || (null == o ? void 0 : o.durationType) || "months"),
                    ee = E.useState(K),
                    te = (0, i.Z)(ee, 2),
                    re = te[0];
                te[1];
                E.useEffect((function() {
                    r(g)
                }), [g]);
                var ne = function(e) {
                    var t = e.target,
                        r = t.name,
                        n = t.value;
                    switch (f((function(e) {
                            return me(me({}, e), {}, (0, l.Z)({}, r, n))
                        })), r) {
                        case "displayName":
                            Z(n);
                            break;
                        case "description":
                            R(n);
                            break;
                        case "priceTokens":
                            G(n);
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
                                }))) || void 0 === r ? void 0 : r.unitPriceTokens) || M,
                                i = parseInt(l, 10),
                                o = parseInt(a, 10);
                            return o >= w.zD && o <= i
                        }))
                    }), [V, M]),
                    le = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
                            t = e.map((function(t, r) {
                                var n, a = (null === (n = e.slice(0, r).findLast((function(e) {
                                    return e.unitPriceTokens
                                }))) || void 0 === n ? void 0 : n.unitPriceTokens) || M;
                                return parseInt(t.unitPriceTokens, 10) === parseInt(a, 10) ? me(me({}, t), {}, {
                                    unitPriceTokens: void 0
                                }) : me(me({}, t), {}, {
                                    sellerVariant: !0
                                })
                            }));
                        _(t), f((function(e) {
                            return me(me({}, e), {}, {
                                listingVariants: t.filter((function(e) {
                                    return void 0 !== e.unitPriceTokens
                                }))
                            })
                        }))
                    };
                E.useEffect((function() {
                    le(V)
                }), [M]);
                return E.createElement(E.Fragment, null, E.createElement(m.JX, {
                    className: "tw-@container/subInfo tw-gap-5 tw-mb-2"
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
                    icon: ie.Vm,
                    className: "tw-mr-2"
                }), E.createElement("span", null, "Upload Thumbnail")), E.createElement(m.pw, {
                    imageId: C,
                    fitToCover: !0,
                    alt: "Subscription Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                })), E.createElement(m.JX, {
                    className: "tw-gap-5 flex-1"
                }, E.createElement(m.JX, {
                    className: "tw-gap-2"
                }, E.createElement("label", {
                    htmlFor: "displayName"
                }, "Display Name"), E.createElement(m.II, {
                    name: "displayName",
                    type: "text",
                    onChange: ne,
                    maxLength: 64,
                    value: D
                }), E.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, D.length, "/64")), E.createElement(m.JX, {
                    className: "tw-gap-2"
                }, E.createElement("label", {
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
                    className: "tw-items-center tw-gap-2 tw-bg-grey tw-px-3 tw-py-2 tw-rounded-lg"
                }, E.createElement("label", {
                    htmlFor: "priceTokens",
                    className: "tw-text-nowrap"
                }, "1 month at"), E.createElement(m.II, {
                    name: "priceTokens",
                    type: "number",
                    className: "tw-w-[150px]",
                    onChange: ne,
                    value: M,
                    step: "1",
                    min: w.zD,
                    max: w._C
                })), V.map((function(e, t) {
                    var r, n = e.quantity,
                        a = e.unitPriceTokens,
                        l = "listingVariants[".concat(t, "]_unitPriceTokens"),
                        i = (null === (r = V.slice(0, t).findLast((function(e) {
                            return e.unitPriceTokens
                        }))) || void 0 === r ? void 0 : r.unitPriceTokens) || M,
                        o = null != a ? a : i,
                        s = parseInt(M, 10),
                        c = parseInt(i, 10),
                        u = parseInt(o, 10);
                    return E.createElement(m.JX, {
                        key: l,
                        className: "tw-justify-center tw-bg-grey tw-gap-2 tw-px-3 tw-py-2 tw-rounded-lg"
                    }, E.createElement(m.X2, {
                        className: "tw-items-center"
                    }, E.createElement("label", {
                        htmlFor: l,
                        className: "tw-whitespace-nowrap tw-mr-2"
                    }, "".concat((n * Q).toLocaleString(), " ").concat(n * Q == 1 ? re.replace(/s$/, "") : re, " at ")), E.createElement(m.X2, {
                        className: "tw-items-center"
                    }, E.createElement(m.II, {
                        id: l,
                        type: "number",
                        className: "tw-w-[150px] tw-mr-2",
                        min: w.zD,
                        max: i,
                        size: w._C.toString(10).length + 1,
                        value: o,
                        invalid: !0 !== ae[t],
                        onChange: function(e) {
                            return function(e) {
                                var t = e.index,
                                    r = e.unitPriceTokens,
                                    n = V.map((function(e) {
                                        return me({}, e)
                                    }));
                                n[t].unitPriceTokens = r, le(n)
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
                        duration: Q,
                        durationType: re
                    }), ", ")), E.createElement("label", {
                        htmlFor: l
                    }, E.createElement("strong", null, "Total"), " ", E.createElement(m.b5, null), (n * Q * u || 0).toLocaleString(), u < s && E.createElement(E.Fragment, null, " ", E.createElement(oe.Z, {
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
                            r = void 0 === t ? null : t,
                            n = e.fileBlob,
                            l = void 0 === n ? null : n,
                            i = null !== r;
                        return null === r && null === l ? (S(null), void f((function(e) {
                            return me({
                                file: null,
                                imageId: null
                            }, e)
                        }))) : i ? (S(r), void f((function(e) {
                            e.file;
                            var t = (0, a.Z)(e, se);
                            return me({
                                imageId: r
                            }, t)
                        }))) : (S(l), void f((function(e) {
                            e.imageId;
                            var t = (0, a.Z)(e, ce);
                            return me({
                                file: l
                            }, t)
                        })))
                    },
                    cancelCallBack: function() {
                        return y(!1)
                    }
                }))
            };
            var we = ["imageId"],
                pe = ["file"];

            function ge(e, t) {
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
                    t % 2 ? ge(Object(r), !0).forEach((function(t) {
                        (0, l.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ge(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const be = function(e) {
                var t = e.user,
                    r = void 0 === t ? null : t,
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
                        skip: r
                    }).data,
                    I = E.useState("Next"),
                    T = (0, i.Z)(I, 2),
                    j = T[0],
                    D = T[1],
                    Z = E.useState(!1),
                    A = (0, i.Z)(Z, 2),
                    X = A[0],
                    R = A[1],
                    U = E.useState(!1),
                    z = (0, i.Z)(U, 2),
                    J = z[0],
                    M = z[1],
                    G = E.useState({}),
                    B = (0, i.Z)(G, 2),
                    q = B[0],
                    V = B[1],
                    _ = E.useState(null),
                    W = (0, i.Z)(_, 2),
                    H = W[0],
                    Q = W[1],
                    K = (0, E.useState)(!0),
                    ee = (0, i.Z)(K, 2),
                    re = ee[0],
                    ae = ee[1],
                    ie = E.useState({
                        name: "",
                        shortCode: "",
                        description: "",
                        joinState: d.wN.REQUEST,
                        privacy: d.TW.DEFAULT,
                        roleTemplate: "default"
                    }),
                    oe = (0, i.Z)(ie, 2),
                    se = oe[0],
                    ce = oe[1],
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
                    me = (0, i.Z)(ue, 2),
                    ge = me[0],
                    be = me[1],
                    ve = E.useState(null),
                    Ee = (0, i.Z)(ve, 2),
                    he = Ee[0],
                    ye = Ee[1],
                    xe = E.useState(null),
                    Ne = (0, i.Z)(xe, 2),
                    Ce = Ne[0],
                    Se = Ne[1],
                    ke = E.useState([]),
                    Oe = (0, i.Z)(ke, 2),
                    Pe = Oe[0],
                    Ie = Oe[1],
                    Te = r || P,
                    je = (0, g.dj)({
                        userId: null == Te ? void 0 : Te.id
                    }, {
                        skip: !Te
                    }),
                    De = je.data,
                    Ze = void 0 === De ? [] : De,
                    Le = je.isLoading,
                    Ae = (0, g.mt)({
                        groupId: null == O ? void 0 : O.id
                    }, {
                        skip: !O,
                        refetchOnMountOrArgChange: !0
                    }),
                    Fe = Ae.data,
                    Xe = Ae.isLoading,
                    Re = Ae.isError,
                    Ue = (0, g.mm)(),
                    ze = (0, i.Z)(Ue, 2),
                    Je = ze[0],
                    Me = ze[1],
                    Ge = (Me.isSuccess, Me.isLoading),
                    Be = (Me.isError, Me.error, (0, g.Pt)()),
                    qe = (0, i.Z)(Be, 2),
                    $e = qe[0],
                    Ve = qe[1],
                    _e = (Ve.isSuccess, Ve.isLoading, Ve.isError, Ve.error, (0, f.Ij)()),
                    We = (0, i.Z)(_e, 2),
                    Ye = We[0],
                    He = We[1],
                    Qe = (He.isSuccess, He.isLoading, He.isError, He.error, (0, g.nz)()),
                    Ke = (0, i.Z)(Qe, 2),
                    et = Ke[0],
                    tt = Ke[1],
                    rt = (tt.data, tt.isLoading, tt.isError, tt.error, (0, f.ft)()),
                    nt = (0, i.Z)(rt, 2),
                    at = nt[0],
                    lt = nt[1],
                    it = (lt.data, lt.isLoading, lt.isError, lt.error, (0, b.As)()),
                    ot = (0, i.Z)(it, 2),
                    st = ot[0],
                    ct = ot[1],
                    ut = ct.data,
                    mt = (ct.isLoading, ct.isError, ct.error, (0, b.RM)()),
                    dt = (0, i.Z)(mt, 2),
                    wt = dt[0],
                    pt = dt[1],
                    gt = (pt.data, pt.isLoading, pt.isError, pt.error, (0, E.useMemo)((function() {
                        return null == ut ? void 0 : ut.filter((function(e) {
                            return e.productType !== w.Pm.AVATAR
                        }))
                    }), [ut]));
                (0, E.useEffect)((function() {
                    return D("Create Subscription" === k && X ? "Create" : "groupCreated" === k ? "Create Subscription Role" : "createdSubscription" === k ? "Go to Store Manager" : "Next")
                }), [k, X]);
                var ft = function(e) {
                        ce((function(t) {
                            return fe(fe({}, t), e)
                        }))
                    },
                    bt = function(e) {
                        be((function(t) {
                            return fe(fe({}, t), e)
                        }))
                    },
                    vt = function(e) {
                        ye((function(t) {
                            return fe(fe({}, t), e)
                        })), V((function(t) {
                            var r = fe(fe({}, t), e);
                            if (null === e.imageId) {
                                r.imageId;
                                return (0, a.Z)(r, we)
                            }
                            if (null === e.file) {
                                r.file;
                                return (0, a.Z)(r, pe)
                            }
                            return r
                        }))
                    },
                    Et = function() {
                        var e = (0, n.Z)(c().mark((function e() {
                            var t, r, n, a, l, i, s, m, d, w, p, g, f, b, E;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        e.t0 = k, e.next = "Create Subscription" === e.t0 ? 3 : "Create Group" === e.t0 ? 19 : "Define Group Rules" === e.t0 ? 22 : "groupCreated" === e.t0 ? 37 : "Create Subscription Role" === e.t0 ? 41 : "Subscription Role Permissions" === e.t0 ? 44 : "Define Subscription" === e.t0 ? 65 : "Add Products" === e.t0 ? 69 : "createdSubscription" === e.t0 ? 83 : 85;
                                        break;
                                    case 3:
                                        if (!X) {
                                            e.next = 7;
                                            break
                                        }
                                        return N((0, v.Bq)("Create Group")), R(!1), e.abrupt("return");
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
                                            icon: o.eH,
                                            message: null !== (r = null === (n = e.t1.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 18:
                                        return e.abrupt("break", 87);
                                    case 19:
                                        return N((0, v.Bq)("Define Group Rules")), N((0, v.IT)("Create Group")), e.abrupt("break", 87);
                                    case 22:
                                        return R(!0), e.prev = 23, a = fe(fe({}, se), {}, {
                                            shortCode: "" === se.shortCode ? H : se.shortCode
                                        }), e.next = 27, Je(a).unwrap();
                                    case 27:
                                        l = e.sent, N((0, v.lr)(l.group)), N((0, v.Bq)("groupCreated")), N((0, v.BQ)(!0)), e.next = 36;
                                        break;
                                    case 33:
                                        e.prev = 33, e.t2 = e.catch(23), N((0, u.d)({
                                            title: "Failed to create group!",
                                            icon: o.eH,
                                            message: null !== (i = null === (s = e.t2.data) || void 0 === s || null === (s = s.error) || void 0 === s ? void 0 : s.message) && void 0 !== i ? i : "Something went wrong",
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
                                            icon: o.eH,
                                            message: null !== (p = null === (g = e.t3.data) || void 0 === g || null === (g = g.error) || void 0 === g ? void 0 : g.message) && void 0 !== p ? p : "Something went wrong",
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
                                        }, q)).unwrap();
                                    case 72:
                                        f = e.sent, ye(f.listing), N((0, v.Bq)("createdSubscription")), N((0, v.BQ)(!0)), e.next = 82;
                                        break;
                                    case 78:
                                        e.prev = 78, e.t4 = e.catch(69), console.log("error", e.t4), N((0, u.d)({
                                            title: "Failed to update listing!",
                                            icon: o.eH,
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
                    ht = Le || Xe || Ge;
                return (0, E.useEffect)((function() {
                    if ("Create Subscription" !== k) {
                        if ("Create Group" === k) {
                            var e = se.name.length >= 3 && se.name.length < 64 && "" !== se.name,
                                t = "" === se.shortCode || se.shortCode.length >= 3 && se.shortCode.length <= 6;
                            return e && t ? !se.name || se.name.length >= 64 ? void M(!1) : M(!0) : void M(!1)
                        }
                        if ("Define Subscription" === k) {
                            var r = (null == he ? void 0 : he.displayName.length) >= 3,
                                n = (null == he ? void 0 : he.priceTokens) >= 100 && (null == he ? void 0 : he.priceTokens) <= 1e4 && Number.isInteger(parseFloat(null == he ? void 0 : he.priceTokens));
                            return M(r && n && re)
                        }
                        return M("Create Subscription Role" === k ? ge.name.length <= 64 && 0 !== ge.name.length : "Add Products" === k ? Pe.length > 0 && Pe.length <= w._1 : !ht)
                    }
                    M(null !== O || X)
                }), [k, O, X, se, ge, ht, he, re]), E.createElement(m.JX, {
                    className: "tw-w-full"
                }, "Create Subscription" === k && E.createElement(ne, {
                    user: Te,
                    groups: Ze,
                    onGroupSelect: function(e) {
                        if (!e) return R(!0), void N((0, v.lr)(null));
                        R(!1), N((0, v.lr)(e))
                    }
                }), "Create Group" === k && !O && E.createElement(L, {
                    currentGroupData: se,
                    onGroupDataChange: ft,
                    generateShortCodeFromName: function(e) {
                        var t = e.target.value,
                            r = t.length >= 3 ? t.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().substring(0, 6) : null;
                        Q(r)
                    },
                    shortCodePlaceholder: H
                }), "Define Group Rules" === k && E.createElement($, {
                    onDataChange: ft
                }), "groupCreated" === k && E.createElement(F, {
                    group: O
                }), "Create Subscription Role" === k && E.createElement(Y, {
                    onDataChange: bt,
                    role: ge
                }), "Subscription Role Permissions" === k && E.createElement(te, {
                    onDataChange: bt,
                    role: ge,
                    groupPermissions: Fe,
                    isError: Re,
                    roleInfo: ge,
                    groupInfo: O
                }), "Define Subscription" === k && he && E.createElement(de, {
                    listing: he,
                    validateVariants: function(e) {
                        return ae(e)
                    },
                    onDataChange: vt,
                    currentChanges: q
                }), "Add Products" === k && E.createElement(x.Z, {
                    products: gt,
                    listing: he,
                    associatedProduct: Ce,
                    existingProducts: Pe,
                    onDataChange: vt,
                    onAddedProducts: function(e) {
                        return Ie(e)
                    }
                }), "createdSubscription" === k && E.createElement(le, {
                    listing: he
                }), E.createElement(m.X2, {
                    className: "tw-gap-2"
                }, "groupCreated" !== k && E.createElement(m.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: s,
                    neutral: !0
                }, "createdSubscription" === k ? "Finish" : "Cancel"), E.createElement(m.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: Et,
                    disabled: !J
                }, j)))
            }
        },
        95146: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => qe
            });
            var n = r(15861),
                a = r(54546),
                l = r(2293),
                i = r(68335),
                o = r(34327),
                s = r(94902),
                c = r(96914),
                u = r(64687),
                m = r.n(u),
                d = r(67294),
                w = r(79655),
                p = r(89250),
                g = r(14411),
                f = r(72998),
                b = r(46320),
                v = r(4942),
                E = r(62475),
                h = r(96766),
                y = r(40098),
                x = r(95337),
                N = r(98185),
                C = r(35187),
                S = r(95896),
                k = r(76176),
                O = r(22202),
                P = r(16869),
                I = r(68157),
                T = r(32981);
            const j = r.p + "8483efe53b992e51983c5f56d5ebb938550f39f1a72d1258f3b30353f7ad369c.svg",
                D = r.p + "aab2cd88e8f1da1b8209f5e30357c5ba59c64949f9079b0f33e3d05609c6e1da.svg",
                Z = r.p + "f3de2219aad5eed5eceeb782bdf669066f23fe34ed832e88d74183128849e5c0.svg";
            const L = function(e) {
                var t = e.createSubscription,
                    r = void 0 === t ? function() {} : t;
                return d.createElement(g.JX, {
                    className: "tw-text-center tw-gap-9 tw-mt-12"
                }, d.createElement("h4", null, "Kickstart Your Subscription Program"), d.createElement(g.X2, {
                    className: "tw-justify-evenly tw-gap-12"
                }, d.createElement(g.JX, {
                    className: "tw-items-center"
                }, d.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, d.createElement("img", {
                    src: D,
                    alt: "Generate consistent earnings from your supporters."
                })), d.createElement("h4", null, "Earn Rewarding Income"), d.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Generate consistent earnings from your supporters.")), d.createElement(g.JX, {
                    className: "tw-items-center"
                }, d.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, d.createElement("img", {
                    src: Z,
                    alt: "Provide Exclusive content and perks only subscribers can enjoy."
                })), d.createElement("h4", null, "Offer Exclusive Access"), d.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Provide Exclusive content and perks only subscribers can enjoy.")), d.createElement(g.JX, {
                    className: "tw-items-center"
                }, d.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center tw-mb-5"
                }, d.createElement("img", {
                    src: j,
                    alt: "Grow your community and build stronger connections."
                })), d.createElement("h4", null, "Activate Your Fan Base"), d.createElement("p", {
                    className: "tw-text-light-grey"
                }, "Grow your community and build stronger connections."))), d.createElement(g.JX, {
                    className: "tw-items-center"
                }, d.createElement(g.zx, {
                    containerClasses: "tw-mb-3 tw-w-[200px]",
                    onClick: r
                }, d.createElement(g.$1, {
                    icon: y.r8
                }), " Create Subscription"), d.createElement("a", {
                    href: "https://creators.vrchat.com/economy/products/paid-role",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn more about subscriptions")))
            };
            var A = r(44062),
                F = r(18529),
                X = r(76553),
                R = r(6811),
                U = r(64258),
                z = r(45697),
                J = r.n(z),
                M = function(e) {
                    var t = e.onClose,
                        r = void 0 === t ? function() {} : t,
                        l = e.listing;
                    if (!l) return null;
                    var i = (0, T.I0)(),
                        o = (0, P.Ij)(),
                        s = (0, a.Z)(o, 2),
                        c = s[0],
                        u = s[1],
                        w = u.isLoading,
                        p = (u.isSuccess, u.isError, u.error, function() {
                            var e = (0, n.Z)(m().mark((function e() {
                                var t, n, a;
                                return m().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, c({
                                                listingId: l.id,
                                                active: !l.active
                                            }).unwrap();
                                        case 3:
                                            t = e.sent, i((0, U.d)({
                                                title: "Listing ".concat(t.listing.active ? "published" : "unpublished"),
                                                icon: R.f8,
                                                message: "".concat(l.displayName, " has been ").concat(t.listing.active ? "published" : "unpublished", "."),
                                                color: "success",
                                                timeout: 3e3
                                            })), r(), e.next = 12;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), console.error(e.t0), i((0, U.d)({
                                                title: "Failed to ".concat(l.active ? "unpublish" : "publish", " listing"),
                                                icon: X.eH,
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
                    return d.createElement("div", {
                        className: "tw-w-full tw-flex tw-flex-col tw-gap-6"
                    }, d.createElement("div", {
                        className: "tw-w-full"
                    }, !l.active && d.createElement("h4", {
                        className: "tw-text-lg"
                    }, "Publishing this listing will make it available for viewing and purchase, including in any selected store(s)."), l.active && d.createElement("h4", {
                        className: "tw-text-lg"
                    }, "If you move this listing to draft, users won’t be able to view or purchase it. You can republish it at any time. Existing purchases will remain unaffected.")), d.createElement("div", {
                        className: "tw-flex tw-flex-col xs:tw-flex-row tw-gap-3 tw-flex-1"
                    }, d.createElement(g.zx, {
                        type: "button",
                        neutral: !0,
                        onClick: r,
                        containerClasses: "tw-flex-1"
                    }, "Cancel"), d.createElement(g.zx, {
                        type: "button",
                        containerClasses: "tw-flex-1",
                        loading: w,
                        onClick: p
                    }, l.active ? "Move to Draft" : "Publish Listing")))
                };
            M.propTypes = {
                onClose: J().func,
                listing: J().object
            };
            const G = M;
            var B = r(2909),
                q = r(27484),
                $ = r.n(q),
                V = r(97798);
            const _ = function(e) {
                var t = e.active,
                    r = void 0 !== t && t,
                    n = e.editAction,
                    l = void 0 === n ? function() {} : n,
                    i = e.deleteAction,
                    o = void 0 === i ? function() {} : i,
                    s = e.publishAction,
                    c = void 0 === s ? function() {} : s,
                    u = (0, d.useState)(!1),
                    m = (0, a.Z)(u, 2),
                    w = m[0],
                    p = m[1],
                    f = (0, d.useState)(null),
                    b = (0, a.Z)(f, 2),
                    v = b[0],
                    E = b[1],
                    h = (0, d.useRef)(null);
                return (0, d.useEffect)((function() {
                    h.current && E(h.current.getBoundingClientRect())
                }), [h]), d.createElement("div", {
                    onMouseLeave: function() {
                        return p(!1)
                    }
                }, d.createElement(g.zx, {
                    ref: h,
                    className: "tw-h-9 tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        return p(!w)
                    }
                }, d.createElement(g.$1, {
                    icon: V.Uw,
                    size: "1x"
                })), d.createElement(g.JX, {
                    style: {
                        transform: "translate(-".concat(120 - (null == v ? void 0 : v.width), "px, 0px)")
                    },
                    className: "tw-pt-2 tw-min-w-min tw-w-[120px] tw-min-h-min tw-z-50 tw-absolute ".concat(w ? "tw-flex" : "tw-hidden")
                }, d.createElement(g.JX, {
                    className: "tw-items-start tw-bg-button-bg-grey tw-border-2 tw-w-full tw-text-left tw-weight-[500] tw-border-solid tw-border-[#666666] tw-rounded-lg"
                }, d.createElement("button", {
                    type: "button",
                    onClick: l,
                    className: "tw-text-left tw-px-3 tw-py-2 tw-w-full tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]"
                }, "Edit"), d.createElement("button", {
                    type: "button",
                    onClick: c,
                    className: "tw-text-left tw-px-3 tw-py-2 tw-w-full tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]"
                }, r ? "Move to Draft" : "Publish"), d.createElement("hr", {
                    className: "tw-border-t-2 tw-m-0 tw-border-solid tw-w-full tw-border-white"
                }), d.createElement("button", {
                    type: "button",
                    onClick: o,
                    className: "tw-px-3 tw-py-2 tw-text-red tw-text-left tw-border-none tw-w-full tw-bg-transparent hover:tw-bg-[#666666] hover:tw-text-white"
                }, "Delete"))))
            };
            var W = function(e) {
                var t = e.listingData,
                    r = void 0 === t ? null : t,
                    n = e.editListingCallback,
                    a = void 0 === n ? function() {} : n,
                    l = e.deleteListingCallback,
                    i = void 0 === l ? function() {} : l,
                    o = e.publishListingCallback,
                    s = void 0 === o ? function() {} : o,
                    c = (0, T.I0)();
                if (null === r) return null;
                var u = r.id,
                    m = r.displayName,
                    w = r.created,
                    p = r.updated,
                    f = r.active,
                    b = r.groupName;
                return d.createElement(d.Fragment, null, d.createElement("div", {
                    key: u,
                    className: "tw-relative"
                }, d.createElement("div", {
                    className: "tw-grid tw-gap-2 tw-grid-cols-5 @[700px]/subscriptions-heading:tw-grid-cols-7 tw-mx-5 tw-border-b-[1px] tw-border-0 tw-border-solid tw-border-hr-line-color"
                }, d.createElement("div", {
                    className: "tw-flex tw-items-center tw-h-9 tw-truncate tw-my-2 @[800px]/my-subscriptions:tw-max-w-max tw-col-span-2"
                }, m), d.createElement("div", {
                    className: "tw-block tw-items-center tw-h-9 tw-py-2 tw-my-2 tw-truncate @[800px]/my-subscriptions:tw-max-w-max"
                }, b), d.createElement("div", {
                    className: "tw-items-center tw-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/my-subscriptions:tw-max-w-max tw-hidden @[700px]/my-subscriptions:tw-flex"
                }, $()(w).format("ll")), d.createElement("div", {
                    className: "tw-items-center tw-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/my-subscriptions:tw-max-w-max tw-hidden @[700px]/my-subscriptions:tw-flex"
                }, $()(p).format("ll")), d.createElement("div", {
                    className: "tw-flex tw-items-center tw-h-9 tw-my-2 tw-truncate @[800px]/my-subscriptions:tw-max-w-max"
                }, f ? "Published" : "Draft"), d.createElement(g.X2, {
                    className: "tw-h-9 tw-truncate tw-my-2 tw-max-w-[100px] tw-gap-2"
                }, d.createElement(g.zx, {
                    className: "tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        navigator.clipboard.writeText(u).then((function() {
                            c((0, U.d)({
                                title: "Copied subscription ID",
                                icon: R.f8,
                                message: "Subscription ID Copied!",
                                color: "success",
                                timeout: 3e3
                            }))
                        })).catch((function(e) {
                            var t, r;
                            c((0, U.d)({
                                title: "Failed to copy subscription ID",
                                icon: X.eH,
                                message: null !== (t = null === (r = res.error.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== t ? t : "Failed to copy subscription ID",
                                color: "error",
                                timeout: 3e3
                            }))
                        }))
                    }
                }, d.createElement(g.$1, {
                    icon: B.kZ,
                    size: "1x"
                })), d.createElement(_, {
                    active: null == r ? void 0 : r.active,
                    editAction: function() {
                        return a(r)
                    },
                    deleteAction: function() {
                        return i(r)
                    },
                    publishAction: function() {
                        return s(r)
                    }
                })))))
            };
            W.propTypes = {
                listingData: J().object
            };
            const Y = W;
            var H = r(22717);

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

            function K(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Q(Object(r), !0).forEach((function(t) {
                        (0, v.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Q(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var ee = [{
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
                te = [];
            const re = function() {
                var e, t = (0, T.I0)(),
                    r = (0, p.s0)(),
                    n = (0, w.lr)(),
                    l = (0, a.Z)(n, 2),
                    i = l[0],
                    o = (l[1], (0, T.v9)((function(e) {
                        return e.myStoreCreateSubscription
                    }))),
                    s = o.previousStep,
                    c = o.currentStep,
                    u = (0, p.UO)().paginationPage,
                    m = u ? Number(u) : 1,
                    f = (0, d.useState)(""),
                    b = (0, a.Z)(f, 2),
                    v = b[0],
                    j = b[1],
                    D = (0, d.useState)(i.get("sortBy") || null),
                    Z = (0, a.Z)(D, 2),
                    X = Z[0],
                    R = Z[1],
                    U = (0, d.useState)(i.get("orderBy") || "descending"),
                    z = (0, a.Z)(U, 2),
                    J = z[0],
                    M = z[1],
                    B = d.useState({}),
                    q = (0, a.Z)(B, 2),
                    $ = q[0],
                    V = q[1],
                    _ = d.useState(!1),
                    W = (0, a.Z)(_, 2),
                    Q = W[0],
                    re = W[1],
                    ne = ((0, k.Z)(v), (0, O.IB)().data),
                    ae = (0, d.useMemo)((function() {
                        return {
                            sellerId: ne.id,
                            n: 50,
                            pageValue: m
                        }
                    }), [m]),
                    le = (0, P.Ul)(K({
                        userId: ne.id,
                        listingType: "subscription"
                    }, ae), {
                        skip: !ne.id,
                        refetchOnMountOrArgChange: !0
                    }),
                    ie = le.data,
                    oe = le.isSuccess,
                    se = le.isFetching,
                    ce = le.isError,
                    ue = le.error;
                (0, d.useEffect)((function() {
                    $.isCreating && V((function(e) {
                        return K(K({}, e), {}, {
                            title: c
                        })
                    }))
                }), [c]);
                var me, de = function(e) {
                        var t = e.title,
                            r = void 0 === t ? "" : t,
                            n = e.data,
                            a = void 0 === n ? void 0 : n,
                            l = e.isCreating,
                            i = void 0 !== l && l,
                            o = e.isEditing,
                            s = void 0 !== o && o,
                            c = e.isDeleting,
                            u = void 0 !== c && c,
                            m = e.isPublishing,
                            d = void 0 !== m && m,
                            w = e.productType,
                            p = void 0 === w ? S.Pm.UDON : w;
                        re(!0), V({
                            title: r,
                            data: a,
                            isCreating: i,
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
                    ge = function(e) {
                        de({
                            title: e.active ? "Move to Draft" : "Publish Listing",
                            data: e,
                            isEditing: !1,
                            isDeleting: !1,
                            isPublishing: !0
                        })
                    },
                    fe = function() {
                        re(!1), V({}), t((0, I.IT)(null)), t((0, I.BQ)(!1)), t((0, I.lr)(null)), t((0, I.Bq)("Create Subscription"))
                    },
                    be = function(e) {
                        return X === e
                    },
                    ve = function(e) {
                        if (te.includes(e)) return function(e) {
                            return be(e) ? M("descending" === J ? "ascending" : "descending") : (R(e), M("ascending"))
                        }(e)
                    };
                return d.createElement(d.Fragment, null, d.createElement(g.$4, null, "My Subscriptions"), 0 !== (null == ie ? void 0 : ie.length) || se || 1 !== m ? d.createElement(d.Fragment, null, d.createElement(g.X2, {
                    className: "tw-justify-between tw-gap-x-5 tw-gap-y-3 tw-flex-wrap tw-mt-6"
                }, d.createElement("div", null, d.createElement(g.II, {
                    icon: x.wn,
                    type: "text",
                    rawInputClassName: "tw-h-9",
                    className: "tw-w-full tw-max-w-[515px] tw-hidden",
                    value: v,
                    onChange: function(e) {
                        return j(e.target.value)
                    },
                    placeholder: "Search by name or listing ID",
                    disabled: !0
                })), d.createElement(g.zx, {
                    "aria-label": "Create Subscription",
                    className: "tw-px-2",
                    onClick: function() {
                        return de({
                            title: c,
                            data: {},
                            isEditing: !1,
                            isCreating: !0,
                            productType: S.Pm.ROLE
                        })
                    }
                }, d.createElement(g.$1, {
                    icon: y.r8,
                    size: "1x"
                }), " Create Subscription")), d.createElement("div", {
                    className: "tw-@container/my-subscriptions tw-rounded-md tw-bg-grey tw-mt-5"
                }, d.createElement("div", {
                    className: "tw-w-full tw-min-w-max tw-table-auto tw-pb-1 tw-@container/subscriptions-heading"
                }, d.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-5 @[700px]/subscriptions-heading:tw-grid-cols-7 tw-border-b-[1px] tw-border-0 tw-border-solid tw-border-hr-line-color tw-pb-3 tw-mx-5"
                }, ee.map((function(e) {
                    var t = e.label,
                        r = e.value,
                        n = e.canCollapse,
                        a = void 0 !== n && n,
                        l = e.isSmallColumn,
                        i = void 0 !== l && l;
                    return d.createElement("span", {
                        key: r,
                        className: "\n                  ".concat(be(r) ? "tw-text-light-white" : "tw-text-light-grey", "\n                  ").concat(a ? "tw-hidden @[700px]/subscriptions-heading:tw-block" : "", "\n                  ").concat(te.includes(r) ? "tw-cursor-pointer" : "tw-cursor-auto", "\n                  ").concat(i ? "tw-max-w-[100px]" : "tw-max-w-auto", "\n                  ").concat("displayName" === r ? "tw-col-span-2" : "tw-col-span-1", "\n                  tw-pt-3 tw-font-normal tw-text-base\n                "),
                        onClick: function() {
                            return ve(r)
                        },
                        onKeyDown: function(e) {
                            if ("Enter" === e.key || "Space" === e.key) return ve(r)
                        },
                        role: "button",
                        tabIndex: 0
                    }, t, te.includes(r) && d.createElement(g.$1, {
                        icon: be(r) && "ascending" === J ? h.fo : E.u9,
                        size: "1x",
                        className: "tw-ml-1 ".concat(be(r) && "ascending" === J ? "tw-align-bottom" : "tw-align-top")
                    }))
                }))), d.createElement("div", {
                    className: "tw-group"
                }, se ? d.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, d.createElement(N.Z, {
                    loading: !0
                })) : ce ? d.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, d.createElement("p", null, "Error loading sales data:"), d.createElement("code", null, null !== (me = ue.data.error.message) && void 0 !== me ? me : "Unknown error")) : oe && 0 === (null == ie ? void 0 : ie.length) ? d.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, d.createElement("p", {
                    className: "tw-mb-0"
                }, "There are no transactions data to display.")) : oe ? ie.map((function(e) {
                    return d.createElement(Y, {
                        key: e.id,
                        listingData: e,
                        editListingCallback: we,
                        deleteListingCallback: pe,
                        publishListingCallback: ge
                    })
                })) : void 0), d.createElement("div", null, d.createElement(C.Z, {
                    className: "tw-pt-2",
                    totalCount: null !== (e = null == ie ? void 0 : ie.length) && void 0 !== e ? e : 0,
                    showCurrentPageOnly: !0,
                    currentPage: m,
                    pageSize: 50,
                    onPageChange: function(e) {
                        return r("/home/marketplace/storefront/subscriptions/page/".concat(e))
                    }
                }))))) : d.createElement(L, {
                    createSubscription: function() {
                        t((0, I.Bq)("Create Subscription")), de({
                            title: c,
                            data: {},
                            isEditing: !1,
                            isCreating: !0,
                            productType: S.Pm.ROLE
                        })
                    }
                }), d.createElement(g.u_, {
                    title: "createdSubscription" === $.title ? null : $.title,
                    onCloseFinished: fe,
                    isVisible: Q,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: $.productType === S.Pm.ROLE ? "initial" : "auto",
                    onBackCallback: s ? function() {
                        t((0, I.Bq)(s))
                    } : null,
                    disableBackdropClick: !0,
                    backgroundColor: "#181B1F"
                }, Q && $.isCreating && d.createElement(F.default, {
                    user: ne,
                    subscription: $.data,
                    onClose: fe,
                    isEditing: $.isEditing
                }), Q && $.isEditing && d.createElement(A.default, {
                    onClose: fe,
                    listingId: $.data.id
                }), Q && $.isPublishing && d.createElement(G, {
                    onClose: fe,
                    listing: $.data
                }), Q && $.isDeleting && d.createElement(H.default, {
                    listingId: $.data.id,
                    onCancelCallback: fe
                })))
            };
            var ne = r(66736);
            r(57520);
            const ae = function(e) {
                return d.createElement(f.Z, {
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
            var le = r(41145),
                ie = r(62228),
                oe = r(12227),
                se = r(56646),
                ce = function(e) {
                    var t = e.isExpanded,
                        r = e.transactionData,
                        n = void 0 === r ? null : r;
                    if (null === n) return null;
                    var a = n.formattedSalesSummary,
                        l = n.receiverDisplayName,
                        i = n.listingDisplayName,
                        o = n.listingType,
                        s = n.tiliaTransactionId,
                        c = n.purchaseCurrentStatus,
                        u = a.listingPrice,
                        m = a.processingFees,
                        w = a.purchaseDuration,
                        p = a.listingEarnings;
                    return d.createElement("div", {
                        className: "tw-@container/sales-summary tw-bg-darker-grey tw-rounded-lg tw-p-5 tw-mb-4 ".concat(t ? "tw-block" : "tw-hidden")
                    }, d.createElement("h4", {
                        className: "heading tw-text-base tw-font-normal tw-text-light-grey"
                    }, d.createElement(g.$1, {
                        icon: se.faCircleInfo,
                        size: "1x"
                    }), " Sales summary"), d.createElement("hr", {
                        className: "tw-bg-hr-line-color tw-border-0 tw-h-[2px]"
                    }), d.createElement("div", {
                        className: "tw-grid tw-grid-cols-1 tw-gap-3 @sm/sales-summary:tw-grid-cols-2 @md/sales-summary:tw-grid-cols-3"
                    }, d.createElement("div", null, d.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Buyer"), d.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, d.createElement("span", {
                        className: "tw-text-base tw-font-normal tw-text-white"
                    }, l))), i && d.createElement("div", null, d.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Listing Name"), d.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, d.createElement("span", {
                        className: "tw-text-base tw-font-normal tw-text-white"
                    }, i))), (null == u ? void 0 : u.toString()) && d.createElement("div", null, d.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Listing Price"), d.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, d.createElement("span", {
                        className: "tw-text-base tw-font-normal tw-text-white"
                    }, d.createElement(g.b5, {
                        className: "tw-mr-1 tw-text-white"
                    }), u))), c && d.createElement("div", null, d.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Status"), d.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, d.createElement("span", {
                        className: "tw-text-base tw-font-normal tw-text-white tw-capitalize"
                    }, c))), o && d.createElement("div", null, d.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Listing Type"), d.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, d.createElement("span", {
                        className: "tw-text-base tw-font-normal tw-text-white"
                    }, o))), (null == p ? void 0 : p.toString()) && d.createElement("div", {
                        className: !0
                    }, d.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Listing Earnings"), d.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, d.createElement("span", {
                        className: "tw-text-base tw-font-normal tw-text-white"
                    }, d.createElement(g.b5, {
                        className: "tw-mr-1 tw-text-white"
                    }), p))), d.createElement("div", null, d.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Transaction ID"), d.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, d.createElement("span", {
                        className: "tw-text-xs tw-text-white"
                    }, s))), w && d.createElement("div", null, d.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Purchase Duration"), d.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, d.createElement("span", {
                        className: "tw-text-base tw-font-normal tw-text-white"
                    }, w))), (null == m ? void 0 : m.toString()) && d.createElement("div", null, d.createElement("div", {
                        className: "tw-text-light-grey tw-font-normal tw-text-xs"
                    }, "Processing Fees"), d.createElement("div", {
                        className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                    }, d.createElement("span", {
                        className: "tw-text-base tw-font-normal tw-text-white"
                    }, d.createElement(g.b5, {
                        className: "tw-mr-1 tw-text-white"
                    }), m)))))
                };
            ce.propTypes = {
                isExpanded: J().bool,
                transactionData: J().object
            };
            const ue = ce;
            var me = function(e) {
                var t, r = e.transactionData,
                    n = void 0 === r ? null : r;
                if (null === n) return null;
                var l = n.formattedSalesSummary,
                    i = n.receiverDisplayName,
                    o = n.listingDisplayName,
                    s = n.listingImageId,
                    c = n.listingType,
                    u = n.transactionId,
                    m = n.purchaseDate,
                    w = (0, d.useState)(!1),
                    p = (0, a.Z)(w, 2),
                    f = p[0],
                    b = p[1];
                "" !== s && (0, oe.qm)({
                    fileId: s,
                    isImage: !0,
                    versionNumber: 1
                });
                return d.createElement("div", {
                    key: u,
                    className: "tw-@container/sales-row tw-border-hr-line-color tw-border-b-[1px] tw-border-t-0 tw-border-x-0 tw-border-solid"
                }, d.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-4 @[590px]/sales-heading:tw-grid-cols-5"
                }, d.createElement("div", {
                    className: "tw-h-9 tw-truncate tw-my-2 tw-max-w-[100px] @[800px]/sales-row:tw-max-w-max"
                }, $()(m).format("L LT")), d.createElement("div", {
                    className: "tw-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/sales-row:tw-max-w-max"
                }, o), d.createElement("div", {
                    className: "tw-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/sales-row:tw-max-w-max"
                }, c), d.createElement("div", {
                    className: "tw-h-9 tw-my-2 tw-truncate tw-max-w-[100px] @[800px]/sales-row:tw-max-w-max tw-hidden @[590px]/sales-row:tw-block"
                }, d.createElement(g.b5, {
                    className: "tw-mr-1 tw-text-white"
                }), " ", null !== (t = l.listingEarnings) && void 0 !== t ? t : "-"), d.createElement("div", {
                    className: "tw-h-9 tw-truncate tw-my-2"
                }, d.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-between"
                }, i, d.createElement(g.zx, {
                    className: "tw-h-9 tw-w-10 tw-text-white tw-bg-button-bg-grey tw-border-none",
                    onClick: function() {
                        return b(!f)
                    }
                }, d.createElement(g.$1, {
                    icon: f ? ie.mT : le.pt,
                    size: "1x"
                }))))), d.createElement(ue, {
                    transactionData: n,
                    isExpanded: f
                }))
            };
            me.propTypes = {
                transactionData: J().object
            };
            const de = me;

            function we(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function pe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? we(Object(r), !0).forEach((function(t) {
                        (0, v.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : we(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var ge = [{
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
            const be = function() {
                var e, t, r, n, l = (0, p.s0)(),
                    i = (0, p.UO)().paginationPage,
                    o = (0, d.useState)("all"),
                    s = (0, a.Z)(o, 2),
                    c = (s[0], s[1], (0, d.useState)("ALL")),
                    u = (0, a.Z)(c, 2),
                    m = (u[0], u[1], (0, d.useState)("")),
                    w = (0, a.Z)(m, 2),
                    f = w[0],
                    b = (w[1], (0, d.useState)(null)),
                    v = (0, a.Z)(b, 2),
                    y = v[0],
                    x = v[1],
                    S = (0, d.useState)("desc"),
                    P = (0, a.Z)(S, 2),
                    I = P[0],
                    T = P[1],
                    j = i ? Number(i) : 1,
                    D = (0, k.Z)(f),
                    Z = (0, O.IB)().data,
                    L = (0, ne.JJ)(pe(pe({
                        sellerId: Z.id,
                        n: 50,
                        pageValue: j
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
                    R = L.isError,
                    U = L.error,
                    z = function(e) {
                        return y === e
                    },
                    J = function(e) {
                        if (fe.includes(e)) return function(e) {
                            return z(e) ? T("desc" === I ? "asc" : "desc") : (x(e), T("asc"))
                        }(e)
                    };
                return d.createElement("div", null, d.createElement(g.$4, null, "My Sales"), d.createElement(ae, null), d.createElement("div", {
                    className: "tw-rounded-md tw-bg-grey tw-mt-5"
                }, d.createElement("div", {
                    className: "tw-w-full tw-min-w-max tw-table-auto tw-pb-1 tw-@container/sales-heading tw-px-5 tw-pt-3"
                }, d.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-4 @[590px]/sales-heading:tw-grid-cols-5 tw-border-hr-line-color tw-border-b-[1px] tw-border-t-0 tw-border-x-0 tw-border-solid tw-pb-2"
                }, ge.map((function(e) {
                    var t = e.label,
                        r = e.value,
                        n = e.canCollapse,
                        a = void 0 !== n && n;
                    return d.createElement("span", {
                        key: r,
                        className: "\n                  ".concat(z(r) ? "tw-text-light-white" : "tw-text-light-grey", "\n                  ").concat(a ? "tw-hidden @[590px]/sales-heading:tw-block" : "", "\n                  ").concat(fe.includes(r) ? "tw-cursor-pointer" : "tw-cursor-auto", "\n                  tw-font-normal tw-text-base\n                "),
                        onClick: function() {
                            return J(r)
                        },
                        onKeyDown: function(e) {
                            if ("Enter" === e.key || "Space" === e.key) return J(r)
                        },
                        role: "button",
                        tabIndex: 0
                    }, t, fe.includes(r) && d.createElement(g.$1, {
                        icon: z(r) && "asc" === I ? h.fo : E.u9,
                        size: "1x",
                        className: "tw-ml-1 ".concat(z(r) && "asc" === I ? "tw-align-bottom" : "tw-align-top")
                    }))
                }))), d.createElement("div", {
                    className: "tw-group"
                }, F ? d.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, d.createElement(N.Z, {
                    loading: !0
                })) : R ? d.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, d.createElement("p", null, "Error loading sales data:"), d.createElement("code", null, null !== (n = U.data.error.message) && void 0 !== n ? n : "Unknown error")) : "" === D && X ? A.purchases.map((function(e) {
                    return d.createElement(de, {
                        transactionData: e
                    })
                })) : void 0), 0 === (null == A || null === (e = A.purchases) || void 0 === e ? void 0 : e.length) && d.createElement("div", {
                    className: "tw-flex tw-justify-center tw-p-10"
                }, d.createElement("p", null, "There are no sales data to display")), d.createElement("div", null, d.createElement(C.Z, {
                    totalCount: null !== (t = null == A || null === (r = A.purchases) || void 0 === r ? void 0 : r.length) && void 0 !== t ? t : 0,
                    showCurrentPageOnly: !0,
                    currentPage: j,
                    pageSize: 50,
                    onPageChange: function(e) {
                        return l("/home/marketplace/storefront/revenue/mysales/page/".concat(e))
                    }
                })))))
            };
            var ve = r(42138),
                Ee = r(16686),
                he = r(17319),
                ye = function(e) {
                    var t = e.instalmentData,
                        r = void 0 === t ? null : t,
                        n = e.showCancellable,
                        a = void 0 !== n && n;
                    if (null === r) return null;
                    var l = (0, ve.Z)(r).sort((function(e, t) {
                        return $()(e.stackDate).isAfter($()(t.stackDate)) ? 1 : -1
                    }));
                    return d.createElement(d.Fragment, null, l.map((function(e) {
                        var t = e.stackDate,
                            r = e.stackValue,
                            n = e.purchaseId,
                            l = $()(t).isAfter($()());
                        return d.createElement("div", {
                            className: "tw-grid tw-grid-cols-1 tw-gap-3 @sm/subscribers:tw-grid-cols-2 @md/subscribers:tw-grid-cols-3",
                            key: n
                        }, d.createElement("div", null, d.createElement("div", {
                            className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                        }, d.createElement("span", {
                            className: "tw-text-base tw-font-normal tw-text-white"
                        }, $()(t).format("MMMM DD, YYYY")))), d.createElement("div", null, d.createElement("div", {
                            className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                        }, d.createElement("span", {
                            className: "tw-text-base tw-font-normal tw-text-white"
                        }, d.createElement(g.b5, {
                            className: "tw-mr-1 tw-text-white"
                        }), r))), !l && d.createElement("div", null, d.createElement("div", {
                            className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start tw-text-placeholder-text"
                        }, d.createElement(g.$1, {
                            icon: he.di,
                            size: "1x"
                        }), " ", d.createElement("span", {
                            className: "tw-text-base tw-font-bold"
                        }, "Non-refundable"))), l && d.createElement("div", null, d.createElement("div", {
                            className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start tw-text-teal-accent"
                        }, d.createElement(g.$1, {
                            icon: Ee.faCircleCheck,
                            size: "1x"
                        }), " ", d.createElement("span", {
                            className: "tw-text-base tw-font-bold tw-capitalize"
                        }, "Refundable ", d.createElement("span", {
                            className: "tw-font-normal tw-text-white ".concat(a ? "" : "tw-hidden")
                        }, "(to be cancelled)")))))
                    })))
                };
            ye.propTypes = {
                instalmentData: J().array,
                showCancellable: J().bool
            };
            const xe = ye;
            var Ne = function(e) {
                var t = e.isExpanded,
                    r = e.subscriberData,
                    n = void 0 === r ? null : r,
                    a = e.startCancelSubscriptionCallback,
                    l = void 0 === a ? function() {} : a,
                    i = n.buyerDisplayName,
                    o = (n.buyerId, n.listingCurrentlyAvailable, n.listingDescription, n.groupName),
                    s = n.listingDisplayName,
                    c = n.subscriptionExpiry,
                    u = n.subscriptionFirstStarted,
                    m = c && $()(c).isAfter($()());
                return null === n ? null : d.createElement("div", {
                    className: "tw-@container/subscribers tw-bg-darker-grey tw-rounded-lg tw-p-5 tw-mb-4 ".concat(t ? "tw-block" : "tw-hidden")
                }, d.createElement("h4", {
                    className: "heading tw-text-base tw-font-normal tw-text-light-grey"
                }, d.createElement(g.$1, {
                    icon: se.faCircleInfo,
                    size: "1x"
                }), " Subscription details"), d.createElement("hr", {
                    className: "tw-bg-hr-line-color tw-border-0 tw-h-[2px]"
                }), d.createElement("div", {
                    className: "tw-grid tw-grid-cols-1 tw-gap-3 @sm/subscribers:tw-grid-cols-1 @md/subscribers:tw-grid-cols-4"
                }, d.createElement("div", null, d.createElement("div", {
                    className: "tw-text-light-grey tw-font-normal tw-text-xs"
                }, "Subscriber"), d.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, d.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, i))), s && d.createElement("div", null, d.createElement("div", {
                    className: "tw-text-light-grey tw-font-normal tw-text-xs"
                }, "Listing Name"), d.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, d.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, s))), u && d.createElement("div", null, d.createElement("div", {
                    className: "tw-text-light-grey tw-font-normal tw-text-xs"
                }, "Start Date"), d.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, d.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, d.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, $()(u).format("L LT"))))), d.createElement("div", null, d.createElement("div", {
                    className: "tw-text-light-grey tw-font-normal tw-text-xs"
                }, "Manage this subscription"), d.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, d.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, d.createElement(g.zx, {
                    disabled: !m,
                    danger: !0,
                    className: "tw-px-2",
                    onClick: function() {
                        return l({
                            subscriberData: n
                        })
                    },
                    title: m ? "Cancel Subscription" : "Subscription is not active"
                }, "Cancel Subscription")))), o && d.createElement("div", {
                    className: "@md/subscribers:tw-col-start-2"
                }, d.createElement("div", {
                    className: "tw-text-light-grey tw-font-normal tw-text-xs"
                }, "Group"), d.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, d.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, o))), c && d.createElement("div", null, d.createElement("div", {
                    className: "tw-text-light-grey tw-font-normal tw-text-xs"
                }, "Expiry Date"), d.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, d.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, $()(c).format("L LT"))))), d.createElement("h4", {
                    className: "heading tw-text-base tw-font-normal tw-text-light-grey tw-mt-5"
                }, d.createElement(g.$1, {
                    icon: se.faCircleInfo,
                    size: "1x"
                }), " Subscription Refundability Overview"), d.createElement("hr", {
                    className: "tw-bg-[#242A31] tw-border-0 tw-h-[2px]"
                }), d.createElement(xe, {
                    instalmentData: null == n ? void 0 : n.stacks
                }))
            };
            Ne.propTypes = {};
            const Ce = Ne;
            var Se = function(e) {
                var t = e.subscriberData,
                    r = void 0 === t ? null : t,
                    n = e.startCancelSubscriptionCallback;
                if (null === r) return null;
                var l = r.buyerDisplayName,
                    i = (r.buyerId, r.listingCurrentlyAvailable, r.listingDescription, r.listingDisplayName),
                    o = r.subscriptionExpiry,
                    s = (r.subscriptionFirstStarted, (0, d.useState)(!1)),
                    c = (0, a.Z)(s, 2),
                    u = c[0],
                    m = c[1];
                return d.createElement("div", {
                    className: "tw-border-hr-line-color tw-border-b-[1px] tw-border-t-0 tw-border-x-0 tw-border-solid"
                }, d.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-3"
                }, d.createElement("div", {
                    className: "tw-h-9 tw-my-2 tw-truncate"
                }, l), d.createElement("div", {
                    className: "tw-h-9 tw-my-2 tw-truncate"
                }, i), d.createElement("div", {
                    className: " tw-h-9 tw-truncate tw-my-2"
                }, d.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-between"
                }, d.createElement("span", {
                    className: "tw-hidden md:tw-block"
                }, $()(o).format("L LT")), d.createElement("span", {
                    className: "tw-block md:tw-hidden"
                }, $()(o).format("L")), d.createElement(g.zx, {
                    className: "tw-h-9 tw-w-10 tw-text-white tw-bg-button-bg-grey tw-border-none",
                    onClick: function() {
                        return m(!u)
                    }
                }, d.createElement(g.$1, {
                    icon: u ? ie.mT : le.pt,
                    size: "1x"
                }))))), d.createElement(Ce, {
                    subscriberData: r,
                    isExpanded: u,
                    startCancelSubscriptionCallback: n
                }))
            };
            Se.propTypes = {
                transactionData: J().object
            };
            const ke = Se;
            const Oe = function(e) {
                var t, r, n, l, i = (0, O.IB)().data,
                    o = (0, p.UO)().paginationPage,
                    s = o ? Number(o) : 1,
                    c = (0, d.useState)("all"),
                    u = (0, a.Z)(c, 2),
                    m = (u[0], u[1], (0, d.useState)(!1)),
                    f = (0, a.Z)(m, 2),
                    b = f[0],
                    v = f[1],
                    E = (0, d.useState)(null),
                    h = (0, a.Z)(E, 2),
                    y = h[0],
                    x = h[1],
                    S = (0, d.useState)("ALL"),
                    P = (0, a.Z)(S, 2),
                    I = (P[0], P[1], (0, d.useState)(null)),
                    T = (0, a.Z)(I, 2),
                    j = (T[0], T[1], (0, d.useState)("desc")),
                    D = (0, a.Z)(j, 2),
                    Z = (D[0], D[1], (0, d.useState)("")),
                    L = (0, a.Z)(Z, 2),
                    A = L[0],
                    F = (L[1], (0, k.Z)(A)),
                    X = (0, d.useRef)(null),
                    R = (0, ne.x)(),
                    U = (0, a.Z)(R, 2),
                    z = U[0],
                    J = U[1],
                    M = J.isSuccess,
                    G = J.isLoading,
                    B = J.isError,
                    q = J.error,
                    $ = (0, ne.vb)({
                        sellerId: i.id
                    }),
                    V = $.data,
                    _ = $.isFetching,
                    W = $.isSuccess,
                    Y = $.isError,
                    H = $.error;
                (0, d.useEffect)((function() {
                    M && !B && (v(!1), x(null))
                }), [M, B]);
                var Q;
                return d.createElement("div", null, d.createElement(g.$4, null, "My Subscribers"), d.createElement(ae, null), d.createElement(g.sm, {
                    isLoading: G,
                    isOpen: b,
                    confirmCallback: function() {
                        z({
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
                }, d.createElement("h3", {
                    className: "heading tw-text-lg tw-mb-0"
                }, "Are you sure you want to cancel the following instalments?"), d.createElement("p", {
                    className: "tw-text-base tw-text-light-grey tw-mt-0"
                }, "Only refundable portions will be cancelled."), d.createElement("div", {
                    className: "tw-rounded tw-bg-grey tw-p-4 tw-@container/subscribers"
                }, d.createElement("div", {
                    className: "tw-grid tw-grid-cols-2 tw-gap-3"
                }, d.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, d.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, "Listing Name")), d.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, d.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, "Buyer")), d.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, d.createElement("span", {
                    className: "tw-text-base tw-font-normal tw-text-white"
                }, null == y ? void 0 : y.listingDisplayName)), d.createElement("div", {
                    className: "tw-rounded tw-border-2 tw-flex tw-flex-row tw-py-1 tw-items-center tw-justify-start"
                }, d.createElement(w.rU, {
                    to: "/home/user/".concat(null == y ? void 0 : y.buyerId),
                    target: "_blank",
                    rel: "noreferrer"
                }, d.createElement("span", {
                    className: "tw-text-base tw-font-normal"
                }, null == y ? void 0 : y.buyerDisplayName)))), d.createElement("hr", {
                    className: "tw-bg-hr-line-color tw-border-0 tw-h-[2px]"
                }), d.createElement(xe, {
                    instalmentData: null == y ? void 0 : y.stacks,
                    showCancellable: !0
                })), B && !M && d.createElement("div", {
                    className: "tw-mt-3"
                }, d.createElement("p", {
                    className: "tw-text-error-message-red tw-flex tw-flex-col"
                }, "Failed to cancel subscription:", d.createElement("code", {
                    className: "tw-mt-1 tw-text-error-message-red"
                }, null !== (t = q.data.error.message) && void 0 !== t ? t : "Something went wrong"))), d.createElement("h3", {
                    className: "heading tw-text-sm tw-mt-5"
                }, "Please provide the reason for cancellation"), d.createElement(g.II, {
                    type: "text",
                    name: "cancel-reason",
                    required: !0,
                    ref: X,
                    placeholder: "Reason for cancellation"
                })), d.createElement("div", {
                    className: "tw-rounded-md tw-bg-grey tw-mt-5"
                }, d.createElement("div", {
                    className: "tw-w-full tw-min-w-max tw-table-auto tw-pb-1 tw-@container/sales-heading tw-px-5 tw-pt-3"
                }, d.createElement("div", {
                    className: "tw-grid tw-gap-1 tw-grid-cols-3 tw-border-hr-line-color tw-border-b-[1px] tw-border-t-0 tw-border-x-0 tw-border-solid tw-pb-2"
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
                    return d.createElement("span", {
                        key: r,
                        className: "\n                  tw-font-normal tw-text-base tw-cursor-auto\n                "
                    }, t)
                }))), d.createElement("div", {
                    className: "tw-group"
                }, _ ? d.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, d.createElement(N.Z, {
                    loading: !0
                })) : Y ? d.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, d.createElement("p", null, "Error loading sales data:"), d.createElement("code", null, null !== (Q = H.data.error.message) && void 0 !== Q ? Q : "Unknown error")) : "" === F && W ? V.map((function(e) {
                    return d.createElement(ke, {
                        key: "".concat(e.buyerId, "-").concat(e.listingId),
                        subscriberData: e,
                        startCancelSubscriptionCallback: function(e) {
                            var t = e.subscriberData;
                            x(t), v(!0)
                        }
                    })
                })) : void 0), 0 === (null == V || null === (r = V.purchases) || void 0 === r ? void 0 : r.length) && d.createElement("div", {
                    className: "tw-flex tw-justify-center tw-p-10"
                }, d.createElement("p", null, "There are no subscribers data to display")), d.createElement("div", null, d.createElement(C.Z, {
                    totalCount: null !== (n = null == V || null === (l = V.purchases) || void 0 === l ? void 0 : l.length) && void 0 !== n ? n : 0,
                    showCurrentPageOnly: !0,
                    currentPage: s,
                    pageSize: 50,
                    onPageChange: function(e) {
                        return navigate("/home/marketplace/storefront/revenue/mysales/page/".concat(e))
                    }
                })))))
            };
            var Pe = r(6655),
                Ie = r(64358),
                Te = r(19933);

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

            function De(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? je(Object(r), !0).forEach((function(t) {
                        (0, v.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : je(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Ze = function() {
                var e, t = (0, O.XC)().data,
                    r = null == t ? void 0 : t.id,
                    l = (0, Pe.gI)({
                        skip: !r
                    }),
                    i = (0, a.Z)(l, 2),
                    o = i[0],
                    s = i[1],
                    c = (0, p.oQ)("/home/marketplace/storefront".concat(null !== (e = location) && void 0 !== e && null !== (e = e.state) && void 0 !== e && e.redirectTo ? "?redirectTo=".concat(encodeURIComponent(location.state.redirectTo)) : "")),
                    u = function() {
                        var e = (0, n.Z)(m().mark((function e(t) {
                            var n, a, l;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), n = new URL(c, window.location.href), e.next = 4, o(De(De({}, Ie.$Z.CREATE_ACCOUNT), {}, {
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
                return d.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-items-center tw-bg-darker-grey tw-rounded-lg tw-mt-6 tw-p-12"
                }, d.createElement(g.$1, {
                    icon: Ee.faCircleCheck,
                    size: "xl",
                    className: "tw-w-[72px] tw-h-[72px] tw-mb-5"
                }), d.createElement("h1", {
                    className: "tw-font-bold heading"
                }, "Create your Tilia account"), d.createElement("p", {
                    className: "tw-mt-0"
                }, "Secure your first step toward selling by registering your account on Tilia, our payment provider."), d.createElement(g.zx, {
                    className: "tw-mb-3 tw-px-6",
                    "aria-label": "Get Started with Tilia and review Tilia TOS",
                    onClick: u,
                    disabled: s.isLoading,
                    loading: s.isLoading,
                    expand: !1
                }, "Get Started with Tilia"))
            };
            Ze.propTypes = {};
            const Le = Ze;
            var Ae = r(49959);
            const Fe = r.p + "b2884252fefb6f91a3fca6547597c0a37839688363b1bdb686e433583469d8e8.png";
            var Xe = function() {
                return d.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-items-center tw-bg-darker-grey tw-rounded-lg tw-mt-6 tw-p-12"
                }, d.createElement("h1", {
                    className: "tw-font-bold heading"
                }, "Start Selling in the Marketplace"), d.createElement("img", {
                    src: Fe,
                    alt: "VRChat Avatars",
                    className: "tw-max-h-80"
                }), d.createElement(w.rU, {
                    to: "https://www.surveymonkey.com/r/econ-app",
                    target: "_blank"
                }, d.createElement(g.zx, {
                    className: "tw-mb-3 tw-px-6"
                }, "Apply to Become a Seller")), d.createElement(w.rU, {
                    to: "https://creators.vrchat.com/economy/",
                    target: "_blank"
                }, "Learn more"), d.createElement("div", {
                    className: "tw-mt-5"
                }, d.createElement("p", {
                    className: "tw-mb-5"
                }, "Join the growing community of creators and start earning from your digital creations. You can sell:"), d.createElement("ul", {
                    className: "tw-font-bold tw-mb-5"
                }, d.createElement("li", null, "In-world effects, passes, key accesses"), d.createElement("li", null, "Group Subscriptions"), d.createElement("li", null, "And more!"))))
            };
            Xe.propTypes = {};
            const Re = Xe,
                Ue = r.p + "8d069ec94cb9500c4bcd478e05f582f23cf9dadd4c8b7dd0114942d53c7acdcb.png";
            var ze = d.lazy((function() {
                    return Promise.all([r.e(1959), r.e(8051)]).then(r.bind(r, 71560))
                })),
                Je = d.lazy((function() {
                    return Promise.all([r.e(9664), r.e(2621), r.e(2848)]).then(r.bind(r, 42848))
                })),
                Me = d.lazy((function() {
                    return r.e(267).then(r.bind(r, 20267))
                })),
                Ge = d.lazy((function() {
                    return r.e(8413).then(r.bind(r, 69026))
                })),
                Be = d.lazy((function() {
                    return r.e(9028).then(r.bind(r, 99028))
                }));
            const qe = function() {
                var e, t, r, u, v, E, h, y, x, N, C, S, k = (0, w.lr)(),
                    P = (0, a.Z)(k, 2),
                    I = P[0],
                    T = P[1],
                    j = d.useState(!1),
                    D = (0, a.Z)(j, 2),
                    Z = D[0],
                    L = D[1],
                    A = d.useState(!1),
                    F = (0, a.Z)(A, 2),
                    X = F[0],
                    R = F[1],
                    U = Object.fromEntries(I.entries()),
                    z = (0, O.XC)(),
                    J = z.data,
                    M = z.isLoading,
                    G = null == J ? void 0 : J.id,
                    B = (0, O.q7)(),
                    q = B.data,
                    $ = void 0 === q ? [] : q,
                    V = B.isFetching,
                    _ = B.isError,
                    W = B.error,
                    Y = (0, ne.mW)(),
                    H = (0, a.Z)(Y, 2),
                    Q = H[0],
                    K = H[1].isLoading,
                    ee = null == $ ? void 0 : $.includes("permission-creator-preview"),
                    te = null == $ ? void 0 : $.includes("permission-can-sell-products"),
                    ae = (0, Pe.En)(),
                    le = ae.data,
                    ie = void 0 === le ? {
                        economyOnline: !1,
                        plannedOfflineWindowStart: null,
                        plannedOfflineWindowEnd: null,
                        offlineReason: null
                    } : le,
                    oe = ie.economyOnline,
                    se = ie.plannedOfflineWindowStart,
                    ce = ie.plannedOfflineWindowEnd,
                    ue = ie.offlineReason,
                    me = ae.isFetching,
                    de = ae.isError,
                    we = ae.error,
                    pe = (0, Pe.v$)({
                        userId: G
                    }, {
                        skip: !G || !ee || !oe,
                        refetchOnMountOrArgChange: !0
                    }),
                    ge = pe.data,
                    fe = pe.isLoading,
                    ve = pe.isError,
                    Ee = pe.error,
                    he = null == ge ? void 0 : ge.signed_tos,
                    ye = (0, Pe.gq)({
                        userId: G
                    }, {
                        skip: !G || !ee || !oe,
                        refetchOnMountOrArgChange: !0
                    }),
                    xe = (ye.data, ye.isLoading),
                    Ne = ye.isError,
                    Ce = ye.error,
                    Se = (0, Pe.kN)({
                        userId: G
                    }, {
                        skip: !(G && ee && te && oe)
                    }),
                    ke = Se.data,
                    je = void 0 === ke ? {} : ke,
                    De = je.eligible,
                    Ze = je.reason,
                    Fe = Se.isLoading,
                    Xe = Se.isError,
                    qe = Se.error,
                    $e = (0, Pe.pp)({
                        userId: G,
                        type: "earnings"
                    }, {
                        skip: !G,
                        refetchOnMountOrArgChange: !0
                    }),
                    Ve = $e.data,
                    _e = ((void 0 === Ve ? {
                        balance: 0
                    } : Ve).balance, $e.isLoading),
                    We = $e.isError,
                    Ye = $e.error,
                    He = function() {
                        var e = (0, n.Z)(m().mark((function e() {
                            var t;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = "complete" === (null == U ? void 0 : U.state), e.prev = 1, !t || te) {
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
                                        return e.prev = 10, T({}), e.finish(10);
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
                d.useEffect((function() {
                    He()
                }), []);
                var Qe = me || M || V || fe || _e || xe || K || Fe,
                    Ke = (0, Ie.dj)(se),
                    et = de || !oe || ve || Xe || We || _ || Ne;
                if (Qe) return d.createElement(d.Fragment, null, d.createElement(g.UU, {
                    className: "tw-mb-4",
                    height: "80px",
                    radius: "8"
                }), d.createElement(g.UU, {
                    delay: "50",
                    height: "480px",
                    radius: "8"
                }));
                return Qe ? d.createElement(d.Fragment, null, d.createElement(g.UU, {
                    className: "tw-mb-4",
                    height: "80px",
                    radius: "8"
                }), d.createElement(g.UU, {
                    delay: "50",
                    height: "480px",
                    radius: "8"
                })) : d.createElement(g.JX, {
                    className: "pb-5"
                }, d.createElement(g.$4, null, "My Store"), "complete" === (null == U ? void 0 : U.state) && (null == U ? void 0 : U.redirectTo) && d.createElement(g.qX, {
                    type: "success",
                    title: "You're ready to go!"
                }, "Now you can ", d.createElement(w.rU, {
                    to: null == U ? void 0 : U.redirectTo
                }, "pick up where you left off"), "."), et && d.createElement(g.qX, {
                    type: oe || de ? "error" : "warn",
                    title: oe || de ? "Something strange happened" : "Storefront Offline"
                }, !oe && !de && d.createElement(d.Fragment, null, d.createElement("p", {
                    className: "m-0"
                }, "Storefront Currently Offline: ", null != ue ? ue : "Unknown Reason"), d.createElement("p", {
                    className: "m-0"
                }, "Projected Service Return: ", (0, Ie.M4)(ce))), de && d.createElement("p", {
                    className: "m-0"
                }, "Error getting Tilia online status: ", we.status, " ", null !== (e = null === (t = we.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "Unknown error"), W && d.createElement("p", {
                    className: "m-0"
                }, "Error looking up user permissions: ", W.status, " ", null !== (r = null === (u = W.data) || void 0 === u ? void 0 : u.error.message) && void 0 !== r ? r : "Unknown error"), ve && d.createElement("p", {
                    className: "m-0"
                }, "Error looking up Tilia ToS acceptance: ", Ee.status, " ", null !== (v = null === (E = Ee.data) || void 0 === E ? void 0 : E.error.message) && void 0 !== v ? v : "Unknown error"), Ne && d.createElement("p", {
                    className: "m-0"
                }, "Error looking up Tilia identity verification status: ", Ce.status, " ", null !== (h = null === (y = Ce.data) || void 0 === y ? void 0 : y.error.message) && void 0 !== h ? h : "Unknown error"), Xe && d.createElement("p", {
                    className: "m-0"
                }, "Error looking up your eligibility to pay out: ", qe.status, " ", null !== (x = null === (N = qe.data) || void 0 === N ? void 0 : N.error.message) && void 0 !== x ? x : "Unknown error"), We && d.createElement("p", {
                    className: "m-0"
                }, "Error looking up credit balance: ", Ye.status, " ", null !== (C = null === (S = Ye.data) || void 0 === S ? void 0 : S.error.message) && void 0 !== C ? C : "Unknown error")), Ke && oe && !de && d.createElement(g.qX, {
                    type: "warn",
                    title: "Storefront Maintenance"
                }, d.createElement("p", {
                    className: "m-0"
                }, "Starts: ", (0, Ie.M4)(se)), d.createElement("p", {
                    className: "m-0"
                }, "Ends: ", (0, Ie.M4)(ce))), !De && Ze && oe && !de && d.createElement(g.qX, {
                    type: "warn",
                    title: "Issue with payout eligibility"
                }, "blocked" === Ze && d.createElement("p", {
                    className: "m-0"
                }, "You are currently blocked from receiving payouts. Please contact VRChat support for more information."), "kyc_required" === Ze && d.createElement("p", {
                    className: "m-0"
                }, "You must complete the KYC process before you can receive payouts. Please contact VRChat support for more information."), "kyc_pending" === Ze && d.createElement("p", {
                    className: "m-0"
                }, "Your KYC has been recieved and is pending approval from Tilia. Please check back later."), "limit_exceeded" === Ze && d.createElement("p", {
                    className: "m-0"
                }, "You have exceeded the payout limit. Please contact VRChat support for more information."), "cooldown" === Ze && d.createElement("p", {
                    className: "m-0"
                }, "You have exceeded the daily payout transaction limit. Please wait 24 hours before making your next payout transaction.")), ee ? te ? d.createElement(d.Fragment, null, d.createElement(Te.Z, {
                    isSeller: !0,
                    isTiliaTOSAccepted: he,
                    returnPath: "/home/marketplace/storefront/dashboard",
                    termsOfServiceMessage: "Tilia's Terms of Service have been changed. Please accept them before managing your store."
                }), d.createElement("div", {
                    className: "tw-relative"
                }, d.createElement("div", {
                    className: "tw-relative"
                }, d.createElement(g.oI, null, X && d.createElement("div", {
                    className: "tw-w-full tw-h-full tw-opacity-75 tw-bg-black tw-absolute tw-z-10 tw-top-0 tw-bottom-0 tw-left-0"
                }), d.createElement("h4", {
                    className: "fw-normal mb-0"
                }, "My Store"))), d.createElement(g.Ao, null, d.createElement("div", {
                    className: "tw-relative tw-mb-4"
                }, X && d.createElement("div", {
                    className: "tw-w-full tw-h-full tw-opacity-75 tw-bg-black tw-absolute tw-z-10 tw-top-0 tw-bottom-0 tw-left-0"
                }), d.createElement(f.Z, {
                    justify: "left",
                    tabs: [{
                        name: "Overview",
                        to: "dashboard",
                        icon: c.St,
                        condition: !0
                    }, {
                        name: "My Products",
                        to: "products",
                        icon: s.G1,
                        condition: !0
                    }, {
                        name: "My Subscriptions",
                        to: "subscriptions",
                        icon: Ae.Z,
                        condition: !0
                    }, {
                        name: "My Listings",
                        to: "listings",
                        icon: o.LE,
                        condition: !0
                    }, {
                        name: "Store Manager",
                        to: "stores",
                        icon: i.vJ,
                        condition: !0
                    }, {
                        name: "Revenue",
                        to: "revenue",
                        icon: l.dL,
                        condition: !0
                    }]
                })), d.createElement(d.Suspense, {
                    fallback: d.createElement(g.UU, {
                        delay: "50",
                        height: "480px",
                        radius: "8"
                    })
                }, d.createElement(p.Z5, null, d.createElement(p.AW, {
                    path: "/",
                    element: d.createElement(b.Z, {
                        to: "dashboard"
                    })
                }), d.createElement(p.AW, {
                    path: "dashboard",
                    element: d.createElement(ze, null)
                }), d.createElement(p.AW, {
                    path: "stores",
                    element: d.createElement(Ge, null)
                }), d.createElement(p.AW, {
                    path: "stores/:storeId",
                    element: d.createElement(Be, {
                        onOrderStore: function() {
                            return R(!X)
                        }
                    })
                }), d.createElement(p.AW, {
                    path: "products",
                    element: d.createElement(b.Z, {
                        to: "../products/page/1"
                    })
                }), d.createElement(p.AW, {
                    path: "products/page/:paginationPage",
                    element: d.createElement(Je, null)
                }), d.createElement(p.AW, {
                    path: "subscriptions",
                    element: d.createElement(b.Z, {
                        to: "../subscriptions/page/1"
                    })
                }), d.createElement(p.AW, {
                    path: "subscriptions/page/:paginationPage",
                    element: d.createElement(re, null)
                }), d.createElement(p.AW, {
                    path: "listings",
                    element: d.createElement(b.Z, {
                        to: "../listings/page/1"
                    })
                }), d.createElement(p.AW, {
                    path: "listings/page/:paginationPage",
                    element: d.createElement(Me, null)
                }), d.createElement(p.AW, {
                    path: "revenue",
                    element: d.createElement(b.Z, {
                        to: "mysales"
                    })
                }), d.createElement(p.AW, {
                    path: "revenue/mysales",
                    element: d.createElement(b.Z, {
                        to: "../revenue/mysales/page/1"
                    })
                }), d.createElement(p.AW, {
                    path: "revenue/mysales/page/:paginationPage",
                    element: d.createElement(be, null)
                }), d.createElement(p.AW, {
                    path: "revenue/mysubscribers",
                    element: d.createElement(Oe, null)
                }))), d.createElement(g.sm, {
                    headerText: "Congratulations!",
                    confirmText: "Done",
                    isOpen: Z,
                    confirmCallback: function() {
                        return L(!1)
                    },
                    cancelCallback: function() {
                        return L(!1)
                    },
                    hideCancel: !0
                }, d.createElement(g.X2, {
                    className: "tw-items-center tw-gap-6 tw-flex-wrap"
                }, d.createElement("img", {
                    src: Ue,
                    alt: "Storefront Robot",
                    className: "tw-mx-auto tw-w-[180px] tw-flex-1"
                }), d.createElement("p", {
                    className: "tw-m-0 tw-font-bold tw-text-lg tw-flex-1"
                }, "Thank you for completing the Tilia Process, now you are ready to sell and receive payouts!")))))) : d.createElement(Le, null) : d.createElement(Re, null))
            }
        },
        16869: (e, t, r) => {
            r.d(t, {
                Cb: () => b,
                G4: () => g,
                Ij: () => f,
                Ul: () => d,
                ft: () => p,
                mr: () => w
            });
            var n = r(15861),
                a = r(42138),
                l = r(4942),
                i = r(64687),
                o = r.n(i),
                s = r(64358);

            function c(e, t) {
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
                    t % 2 ? c(Object(r), !0).forEach((function(t) {
                        (0, l.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var m = r(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getUserListings: e.query({
                                query: function(e) {
                                    var t = e.userId,
                                        r = e.n,
                                        n = void 0 === r ? 50 : r,
                                        a = (e.offset, e.groupId),
                                        l = e.active,
                                        i = e.archived,
                                        o = e.hydrate,
                                        c = e.listingType,
                                        m = e.pageValue,
                                        d = void 0 === m ? 1 : m;
                                    return {
                                        url: "user/".concat(t, "/listings"),
                                        params: u({
                                            groupId: a,
                                            listingType: c,
                                            active: l,
                                            archived: i,
                                            hydrate: o
                                        }, (0, s.ue)({
                                            n,
                                            pageValue: d
                                        }))
                                    }
                                },
                                providesTags: function(e, t, r) {
                                    var n = r.userId;
                                    return [].concat((0, a.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Listing",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "UserListings",
                                        id: n
                                    }])
                                }
                            }),
                            getListing: e.query({
                                query: function(e) {
                                    var t = e.listingId,
                                        r = e.hydrate,
                                        n = e.hydrateProducts,
                                        a = void 0 !== n && n,
                                        l = e.hydrateStores,
                                        i = void 0 !== l && l;
                                    return {
                                        url: "listing/".concat(t),
                                        params: {
                                            hydrate: r,
                                            hydrateProducts: a,
                                            hydrateStores: i
                                        }
                                    }
                                },
                                providesTags: function(e, t, r) {
                                    return [{
                                        type: "Listing",
                                        id: r.listingId
                                    }]
                                }
                            }),
                            createListing: e.mutation({
                                queryFn: (r = (0, n.Z)(o().mark((function e(t, r, n, a) {
                                    var l, i, s, c, m, d, w, p, g, f, b, v, E, h, y, x, N, C, S, k, O, P, I, T, j;
                                    return o().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (i = t.file, s = void 0 === i ? null : i, c = t.tag, m = void 0 === c ? "product" : c, d = t.displayName, w = t.description, p = t.tags, g = t.listingVariants, f = t.imageId, b = t.listingType, v = t.productType, E = t.products, h = t.priceTokens, y = t.duration, x = t.durationType, N = t.active, C = t.groupId, S = t.permanent, k = t.instant, O = t.stackable, P = t.storeIds, I = t.recurrable, !s) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.next = 4, a({
                                                    url: "file/image",
                                                    method: "POST",
                                                    body: (r = void 0, r = new FormData, r.append("file", s), r.append("tag", m), r)
                                                });
                                            case 4:
                                                e.t0 = e.sent, e.next = 8;
                                                break;
                                            case 7:
                                                e.t0 = null;
                                            case 8:
                                                if (null == (T = e.t0) || !T.error) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: T.error
                                                });
                                            case 11:
                                                return e.next = 13, a({
                                                    url: "listing",
                                                    method: "POST",
                                                    body: {
                                                        imageId: T ? null == T || null === (l = T.data) || void 0 === l ? void 0 : l.id : f,
                                                        displayName: d,
                                                        description: w,
                                                        tags: p,
                                                        listingVariants: g,
                                                        listingType: b,
                                                        productType: v,
                                                        products: E,
                                                        priceTokens: h,
                                                        duration: y,
                                                        durationType: x,
                                                        active: N,
                                                        groupId: C,
                                                        permanent: S,
                                                        instant: k,
                                                        stackable: O,
                                                        recurrable: I,
                                                        storeIds: P
                                                    }
                                                });
                                            case 13:
                                                if (!(j = e.sent).error) {
                                                    e.next = 16;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: j.error
                                                });
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: u({
                                                        listing: j.data
                                                    }, (null == T ? void 0 : T.data) && {
                                                        file: T.data
                                                    })
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                        var r
                                    }), e)
                                }))), function(e, t, n, a) {
                                    return r.apply(this, arguments)
                                }),
                                invalidatesTags: function(e, t, r) {
                                    var n = r.ownerId,
                                        l = r.tag;
                                    r.storeIds;
                                    return [].concat((0, a.Z)(e ? [{
                                        type: "Listing",
                                        id: e.id
                                    }] : []), [{
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(l)
                                    }, {
                                        type: "UserListings",
                                        id: n
                                    }, "Stores", "Store", "UserProducts", "Product"])
                                }
                            }),
                            updateListing: e.mutation({
                                queryFn: (t = (0, n.Z)(o().mark((function e(t, r, n, a) {
                                    var l, i, s, c, m, d, w, p, g, f, b, v, E, h, y, x, N, C, S, k, O, P, I, T, j;
                                    return o().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (i = t.file, s = void 0 === i ? null : i, c = t.tag, m = void 0 === c ? "product" : c, d = t.listingId, w = t.displayName, p = t.description, g = t.tags, f = t.listingVariants, b = t.imageId, v = t.products, E = t.priceTokens, h = t.duration, y = t.durationType, x = t.active, N = t.groupId, C = t.archive, S = t.permanent, k = t.instant, O = t.stackable, P = t.recurrable, I = t.storeIds, !s) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.next = 4, a({
                                                    url: "file/image",
                                                    method: "POST",
                                                    body: (r = void 0, r = new FormData, r.append("file", s), r.append("tag", m), r)
                                                });
                                            case 4:
                                                e.t0 = e.sent, e.next = 8;
                                                break;
                                            case 7:
                                                e.t0 = null;
                                            case 8:
                                                if (null == (T = e.t0) || !T.error) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: T.error
                                                });
                                            case 11:
                                                return e.next = 13, a({
                                                    url: "listing/".concat(d),
                                                    method: "PUT",
                                                    body: {
                                                        displayName: w,
                                                        description: p,
                                                        tags: g,
                                                        listingVariants: f,
                                                        imageId: T ? null == T || null === (l = T.data) || void 0 === l ? void 0 : l.id : b,
                                                        products: v,
                                                        priceTokens: E,
                                                        duration: h,
                                                        durationType: y,
                                                        active: x,
                                                        groupId: N,
                                                        archive: C,
                                                        permanent: S,
                                                        instant: k,
                                                        stackable: O,
                                                        recurrable: P,
                                                        storeIds: I
                                                    }
                                                });
                                            case 13:
                                                if (!(j = e.sent).error) {
                                                    e.next = 16;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: j.error
                                                });
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: u({
                                                        listing: j.data
                                                    }, (null == T ? void 0 : T.data) && {
                                                        file: T.data
                                                    })
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                        var r
                                    }), e)
                                }))), function(e, r, n, a) {
                                    return t.apply(this, arguments)
                                }),
                                invalidatesTags: function(e, t, r) {
                                    var n = r.listingId,
                                        a = r.ownerId,
                                        l = r.tag;
                                    r.storeIds;
                                    return [{
                                        type: "Listing",
                                        id: n
                                    }, {
                                        type: "UserListings",
                                        id: a
                                    }, {
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(l)
                                    }, {
                                        type: "Purchases",
                                        id: "PARTIAL-LIST"
                                    }, "Purchase", "Store", "Stores", "UserProducts", "Product"]
                                }
                            }),
                            activateListing: e.mutation({
                                query: function(e) {
                                    var t = e.listingId;
                                    return {
                                        url: "listing/".concat(t, "/activate"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: function(e, t, r) {
                                    return [{
                                        type: "Listing",
                                        id: r.listingId
                                    }, {
                                        type: "UserListings",
                                        id: r.ownerId
                                    }, "Store", "Stores"]
                                }
                            }),
                            deactivateListing: e.mutation({
                                query: function(e) {
                                    var t = e.listingId;
                                    return {
                                        url: "listing/".concat(t, "/deactivate"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: function(e, t, r) {
                                    return [{
                                        type: "Listing",
                                        id: r.listingId
                                    }, {
                                        type: "UserListings",
                                        id: r.ownerId
                                    }, "Store", "Stores"]
                                }
                            }),
                            deleteListing: e.mutation({
                                query: function(e) {
                                    var t = e.listingId,
                                        r = e.force;
                                    return {
                                        url: "listing/".concat(t),
                                        method: "DELETE",
                                        params: {
                                            force: r
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, r) {
                                    return [{
                                        type: "Listing",
                                        id: r.listingId
                                    }, "UserListings", "ListingProducts", "Product", "UserProducts", "Stores", "Store"]
                                }
                            })
                        };
                        var t, r
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["UserListings", "Listing"]
                }),
                d = m.useGetUserListingsQuery,
                w = m.useGetListingQuery,
                p = m.useLazyGetListingQuery,
                g = m.useCreateListingMutation,
                f = m.useUpdateListingMutation,
                b = (m.useActivateListingMutation, m.useDeactivateListingMutation, m.useDeleteListingMutation)
        }
    }
]);
//# sourceMappingURL=724108c12f310e9dd676a59ffa61646aac3e5272b6c5695651e6f9fa57e60a71.js.map