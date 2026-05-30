"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [837], {
        16465(e, t, n) {
            n.d(t, {
                A: () => u
            });
            var r = n(15033),
                i = n(31069),
                a = n(27070),
                s = n(5556),
                o = n.n(s),
                l = n(96540),
                c = function(e) {
                    var t = e.storeType,
                        n = void 0 === t ? null : t,
                        s = e.className;
                    e.style;
                    if (null === n) return null;
                    var o = (0, l.useMemo)(function() {
                        var e, t;
                        return null !== (e = null === (t = i.Td.find(function(e) {
                            return e.value === n
                        })) || void 0 === t ? void 0 : t.label) && void 0 !== e ? e : "Unknown"
                    }, [n]);
                    return l.createElement("div", {
                        className: "".concat(s, " tw-px-2 tw-py-1 tw-bg-[#575757] tw-opacity-90 tw-rounded-full tw-text-white tw-text-xs")
                    }, l.createElement(r.M2, {
                        icon: "world" === n ? a.vrcWorld : a.vrcGroup,
                        className: "tw-mr-1"
                    }), o, " Store")
                };
            c.propTypes = {
                storeType: o().string.isRequired
            };
            const u = c
        },
        30837(e, t, n) {
            n.r(t), n.d(t, {
                default: () => K
            });
            var r = n(15184),
                i = n(10467),
                a = n(15902),
                s = n(53065),
                o = n(49107),
                l = n(54756),
                c = n.n(l),
                u = n(65950),
                d = n(15033),
                w = n(71853),
                m = n(16465),
                p = n(31069),
                g = n(194),
                f = n(40085),
                v = n(97087),
                y = n(70650),
                h = n(31644),
                b = n(96540),
                E = n(6376),
                x = n(47767),
                T = n(84976),
                N = n(78244);
            const S = function(e) {
                var t = e.createListing,
                    n = void 0 === t ? function() {} : t,
                    r = e.content,
                    i = e.storeType,
                    a = void 0 === i ? "group" : i;
                return b.createElement(d.fv, {
                    className: " tw-@container/listings-cold tw-text-center tw-gap-5 tw-my-20 tw-justify-center tw-items-center tw-w-full"
                }, b.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center"
                }, b.createElement(d.M2, {
                    icon: N.H3,
                    className: "tw-text-5xl tw-text-light-grey",
                    role: "presentation",
                    alt: ""
                })), r && b.createElement("h4", {
                    className: "tw-text-lg"
                }, r), !r && b.createElement("h4", {
                    className: "tw-text-lg"
                }, "Start creating ", "world" === a ? "listings" : "subscriptions", " to sell your products"), b.createElement(d.fv, {
                    className: "tw-items-center"
                }, b.createElement(d.$n, {
                    containerClasses: "tw-mb-3 tw-w-[200px]",
                    onClick: n
                }, "Create ", "world" === a ? "Listing" : "Subscription")))
            };
            var C = n(80045),
                k = n(31226),
                I = n(86419),
                D = n(67256),
                A = n(97879),
                L = n(34496),
                P = n(42217),
                O = n(6457),
                z = n(74353),
                B = n.n(z),
                M = n(5556),
                j = n.n(M),
                F = n(27860);
            const $ = function(e) {
                var t = e.active,
                    n = void 0 !== t && t,
                    r = e.editAction,
                    i = void 0 === r ? function() {} : r,
                    s = e.deleteAction,
                    o = void 0 === s ? function() {} : s,
                    l = e.publishAction,
                    c = void 0 === l ? function() {} : l,
                    u = e.isPublishDisabled,
                    w = void 0 !== u && u,
                    m = (0, b.useState)(!1),
                    p = (0, a.A)(m, 2),
                    g = p[0],
                    f = p[1],
                    v = (0, b.useState)(null),
                    y = (0, a.A)(v, 2),
                    h = y[0],
                    E = y[1],
                    x = (0, b.useRef)(null);
                return (0, b.useEffect)(function() {
                    null != x && x.current && E(x.current.getBoundingClientRect())
                }, [x]), b.createElement("div", {
                    onMouseLeave: function() {
                        return f(!1)
                    }
                }, b.createElement(d.$n, {
                    ref: x,
                    className: "tw-h-9 tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        return f(!g)
                    }
                }, b.createElement(d.M2, {
                    icon: F.nx,
                    size: "1x"
                })), b.createElement(d.fv, {
                    style: {
                        transform: "translate(-".concat(120 - (null == h ? void 0 : h.width), "px, 0px)")
                    },
                    className: "tw-pt-2 tw-min-w-min tw-w-[120px] tw-min-h-min tw-z-50 tw-absolute ".concat(g ? "tw-flex" : "tw-hidden")
                }, b.createElement(d.fv, {
                    className: "tw-items-start tw-bg-button-bg-grey tw-border-2 tw-w-full tw-text-left tw-weight-[500] tw-border-solid tw-border-[#666666] tw-rounded-lg"
                }, b.createElement("button", {
                    type: "button",
                    onClick: i,
                    className: "tw-text-left tw-px-3 tw-py-2 tw-w-full tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]"
                }, "Edit"), b.createElement("button", {
                    type: "button",
                    disabled: w,
                    onClick: c,
                    className: "disabled:tw-text-placeholder-text tw-text-left tw-px-3 tw-py-2 tw-w-full tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]"
                }, n ? "Move to Draft" : "Publish"), b.createElement("hr", {
                    className: "tw-border-t-2 tw-m-0 tw-border-solid tw-w-full tw-border-white"
                }), b.createElement("button", {
                    type: "button",
                    onClick: o,
                    className: "tw-px-3 tw-py-2 tw-text-red tw-text-left tw-border-none tw-w-full tw-bg-transparent hover:tw-bg-[#666666] hover:tw-text-white"
                }, "Delete"))))
            };
            var U = ["listingData", "isOrdering", "moveUp", "moveDown", "editListingCallback", "deleteListingCallback", "publishListingCallback"],
                G = function(e) {
                    var t = e.listingData,
                        n = void 0 === t ? null : t,
                        r = e.isOrdering,
                        i = void 0 !== r && r,
                        a = e.moveUp,
                        s = void 0 === a ? function() {} : a,
                        o = e.moveDown,
                        l = void 0 === o ? function() {} : o,
                        c = e.editListingCallback,
                        w = void 0 === c ? function() {} : c,
                        m = e.deleteListingCallback,
                        p = void 0 === m ? function() {} : m,
                        f = e.publishListingCallback,
                        v = void 0 === f ? function() {} : f,
                        y = ((0, C.A)(e, U), (0, E.wA)());
                    if (null === n) return null;
                    var h = n.id,
                        x = n.displayName,
                        T = n.created,
                        N = n.active,
                        S = n.priceTokens,
                        z = n.listingType,
                        M = n.imageId,
                        j = (n.storeIds, n.productIds, (0, O.sn)({
                            listingId: h
                        }, {
                            skip: !h
                        })),
                        F = j.data,
                        G = void 0 === F ? [] : F,
                        q = (j.isFetching, j.isSuccess, j.isError, j.error, (0, g.GZ)(G)),
                        V = q.hasAllProductsDisabled,
                        R = q.hasSomeProductsDisabled;
                    q.hasNoProductsDisabled;
                    return b.createElement("div", {
                        className: "tw-relative"
                    }, b.createElement("div", {
                        className: "tw-grid tw-gap-2 tw-grid-cols-3 tw-bg-[#252A30] tw-rounded-lg @[470px]/store:tw-grid-cols-5 @[700px]/store:tw-grid-cols-7 tw-p-3 tw-min-h-[72px]"
                    }, b.createElement(d.fI, {
                        className: "tw-flex tw-gap-2 tw-items-center tw-truncate tw-col-span-2"
                    }, i && b.createElement(d.M2, {
                        className: "tw-hidden sm:tw-block",
                        icon: A.S9
                    }), b.createElement(d.Oo, {
                        fitToCover: !0,
                        imageId: M,
                        className: "tw-w-12 tw-h-12 tw-rounded-md tw-shrink-0",
                        containerColor: "#181B1F",
                        iconColor: "#404C58"
                    }), b.createElement(d.fv, {
                        className: "tw-justify-center tw-truncate"
                    }, b.createElement("h6", {
                        className: "tw-m-0 tw-font-bold tw-truncate @[800px]/store:tw-whitespace-pre-line @[800px]/store:tw-break-words",
                        title: x
                    }, x), b.createElement("p", {
                        className: "tw-capitalize tw-m-0 tw-text-light-grey"
                    }, "duration" === z ? "Temporary" : z || ""))), b.createElement(d.fv, {
                        className: "tw-justify-center tw-truncate tw-hidden @[700px]/store:tw-flex"
                    }, b.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "Date Added"), B()(T).format("ll")), b.createElement(d.fv, {
                        className: " tw-justify-center tw-truncate  tw-hidden @[700px]/store:tw-flex"
                    }, b.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "Price"), b.createElement("p", {
                        className: "tw-mb-0"
                    }, b.createElement(d.eD, null), " ", S)), b.createElement(d.fv, {
                        className: "tw-justify-center tw-truncate tw-capitalize tw-hidden @[470px]/store:tw-flex"
                    }, b.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "Store Availability"), b.createElement("p", {
                        className: "tw-mb-0"
                    }, (null == n ? void 0 : n.storeIds.length) || 0, " ", 1 === (null == n ? void 0 : n.storeIds.length) ? "Store" : "Stores")), b.createElement(d.fv, {
                        className: "tw-flex tw-justify-center tw-truncate tw-hidden @[470px]/store:tw-flex"
                    }, b.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "Status"), N ? "Published" : "Draft"), b.createElement(d.fI, {
                        className: "tw-truncate tw-items-center tw-gap-2 tw-justify-end"
                    }, !i && b.createElement(b.Fragment, null, b.createElement(d.$n, {
                        className: "tw-w-9 tw-h-9",
                        neutral: !0,
                        onClick: function() {
                            navigator.clipboard.writeText(h).then(function() {
                                y((0, u.X)({
                                    title: "Copied listing ID",
                                    icon: P.SG,
                                    message: "Listing ID Copied!",
                                    color: "success",
                                    timeout: 3e3
                                }))
                            }).catch(function(e) {
                                var t, n;
                                y((0, u.X)({
                                    title: "Failed to copy listing ID",
                                    icon: L.zp,
                                    message: null !== (t = null === (n = res.error.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Failed to copy listing ID",
                                    color: "error",
                                    timeout: 3e3
                                }))
                            })
                        }
                    }, b.createElement(d.M2, {
                        icon: D.jP,
                        size: "1x"
                    })), b.createElement($, {
                        active: null == n ? void 0 : n.active,
                        publishAction: function() {
                            return v(n)
                        },
                        editAction: function() {
                            return w(n)
                        },
                        deleteAction: function() {
                            return p(n)
                        },
                        isPublishDisabled: V || R
                    })), i && b.createElement(b.Fragment, null, b.createElement(d.$n, {
                        className: "tw-w-9 tw-h-9",
                        neutral: !0,
                        onClick: s
                    }, b.createElement(d.M2, {
                        icon: I.w2,
                        size: "1x"
                    })), b.createElement(d.$n, {
                        className: "tw-w-9 tw-h-9",
                        neutral: !0,
                        onClick: l
                    }, b.createElement(d.M2, {
                        icon: k.Jt,
                        size: "1x"
                    }))))))
                };
            G.propTypes = {
                listingData: j().object.isRequired,
                isOrdering: j().bool,
                moveUp: j().func,
                moveDown: j().func
            };
            const q = G;
            var V = n(28045),
                R = n(91863);
            const W = function(e) {
                var t = e.onFilterChange,
                    n = void 0 === t ? function() {} : t,
                    r = e.onOrder,
                    i = void 0 === r ? function() {} : r,
                    s = e.onCreateListing,
                    o = void 0 === s ? function() {} : s,
                    l = e.onCreateSubscription,
                    c = void 0 === l ? function() {} : l,
                    u = e.onSaveOrder,
                    w = void 0 === u ? function() {} : u,
                    m = e.onCancelOrder,
                    g = void 0 === m ? function() {} : m,
                    f = e.isOrdering,
                    v = void 0 !== f && f,
                    y = e.orderingDisabled,
                    h = void 0 !== y && y,
                    E = e.searchParams,
                    x = e.groupLoading,
                    T = void 0 !== x && x,
                    N = e.storeType,
                    S = (0, b.useState)(""),
                    C = (0, a.A)(S, 2),
                    k = C[0],
                    I = C[1],
                    D = (0, R.A)(k),
                    A = (0, b.useState)(E.get("listingType") || "all"),
                    L = (0, a.A)(A, 2),
                    P = L[0],
                    O = L[1],
                    z = (0, b.useState)(E.get("sortBy") || "buyerView"),
                    B = (0, a.A)(z, 2),
                    M = B[0],
                    j = B[1],
                    F = N === p.y.GROUPS;
                (0, b.useEffect)(function() {
                    n({
                        searchValue: D,
                        listingType: P,
                        sortBy: M
                    })
                }, [D, P, M]);
                var $ = p.jo.filter(function(e) {
                    return "subscription" !== e.value
                });
                return b.createElement(d.fv, {
                    className: "tw-justify-between @md/store:tw-flex-row tw-gap-2"
                }, b.createElement(d.fI, {
                    className: "tw-gap-2 tw-flex-wrap"
                }, b.createElement(d.pd, {
                    className: "tw-flex-1 tw-shrink-0 tw-min-w-full @lg/store:tw-w-[300px] @lg/store:tw-min-w-[300px] tw-max-w-[300px]",
                    type: "text",
                    value: k,
                    onChange: function(e) {
                        return I(e.target.value)
                    },
                    placeholder: "Search"
                }), !F && b.createElement(d.ms, {
                    className: "tw-flex-inital",
                    options: $,
                    value: P,
                    label: "Display",
                    onChange: function(e) {
                        return O(e)
                    }
                }), b.createElement(d.ms, {
                    className: "tw-flex-inital",
                    options: p.N5,
                    value: M,
                    label: "Sort by",
                    onChange: function(e) {
                        return j(e)
                    }
                })), b.createElement(d.fI, {
                    className: "tw-gap-2 ".concat(v ? "tw-z-20" : null)
                }, !v && b.createElement(b.Fragment, null, b.createElement(d.$n, {
                    type: "button",
                    neutral: !0,
                    onClick: function() {
                        I(""), O("all"), j("buyerView"), i()
                    },
                    containerClasses: "tw-h-fit",
                    className: "tw-w-[170px] tw-max-h-fit",
                    disabled: h
                }, "Order Listings"), b.createElement("div", {
                    className: "tw-group tw-relative tw-flex-auto tw-grow-0 tw-max-h-fit"
                }, !F && b.createElement(d.$n, {
                    type: "button",
                    onClick: o,
                    className: "tw-w-[170px] tw-max-h-fit"
                }, b.createElement(d.M2, {
                    icon: V.QL
                }), " Create Listing"), F && b.createElement(d.$n, {
                    type: "button",
                    disabled: T,
                    onClick: c,
                    className: "tw-w-[180px] tw-max-h-fit"
                }, b.createElement(d.M2, {
                    icon: V.QL
                }), " Create Subscription"))), v && b.createElement(b.Fragment, null, b.createElement(d.$n, {
                    type: "button",
                    neutral: !0,
                    onClick: g,
                    containerClasses: "tw-h-fit",
                    className: "tw-w-[170px] tw-max-h-fit"
                }, "Cancel"), b.createElement(d.$n, {
                    type: "button",
                    onClick: w,
                    containerClasses: "tw-h-fit",
                    className: "tw-w-[170px] tw-max-h-fit"
                }, "Save"))))
            };
            var X = (0, b.lazy)(function() {
                    return Promise.all([n.e(78), n.e(1768)]).then(n.bind(n, 11768))
                }),
                H = (0, b.lazy)(function() {
                    return Promise.all([n.e(78), n.e(9876)]).then(n.bind(n, 97495))
                }),
                Q = (0, b.lazy)(function() {
                    return n.e(5170).then(n.bind(n, 85170))
                }),
                Y = (0, b.lazy)(function() {
                    return n.e(7900).then(n.bind(n, 67900))
                }),
                _ = (0, b.lazy)(function() {
                    return Promise.resolve().then(n.bind(n, 58401))
                }),
                Z = (0, b.lazy)(function() {
                    return Promise.resolve().then(n.bind(n, 17046))
                }),
                J = (0, b.lazy)(function() {
                    return Promise.resolve().then(n.bind(n, 38072))
                });
            const K = function(e) {
                var t = e.onOrderStore,
                    n = void 0 === t ? function() {} : t,
                    l = (0, x.g)().storeId,
                    N = (0, g.a$)().user,
                    C = (0, E.wA)(),
                    k = (0, x.Zp)(),
                    I = (0, E.d4)(function(e) {
                        return e.listingFlow
                    }),
                    D = I.previousStep,
                    A = (I.currentStep, I.currentTitle),
                    L = I.isPreviewOpen,
                    P = I.isTitleHidden,
                    O = (0, E.d4)(function(e) {
                        return e.myStoreCreateSubscription
                    }),
                    z = O.previousStep,
                    B = O.currentStep,
                    M = (0, T.ok)(),
                    j = (0, a.A)(M, 2),
                    F = j[0],
                    $ = j[1],
                    U = (0, b.useState)({}),
                    G = (0, a.A)(U, 2),
                    V = G[0],
                    R = G[1],
                    K = (0, b.useState)(!1),
                    ee = (0, a.A)(K, 2),
                    te = ee[0],
                    ne = ee[1],
                    re = (0, b.useState)([]),
                    ie = (0, a.A)(re, 2),
                    ae = ie[0],
                    se = ie[1],
                    oe = (0, b.useState)([]),
                    le = (0, a.A)(oe, 2),
                    ce = le[0],
                    ue = le[1],
                    de = (0, b.useState)(!1),
                    we = (0, a.A)(de, 2),
                    me = we[0],
                    pe = we[1],
                    ge = (0, b.useState)(!1),
                    fe = (0, a.A)(ge, 2),
                    ve = fe[0],
                    ye = fe[1],
                    he = b.useState({}),
                    be = (0, a.A)(he, 2),
                    Ee = be[0],
                    xe = be[1],
                    Te = (0, v.rg)({
                        storeId: l,
                        managementPov: !0,
                        hydrateListings: !0
                    }, {
                        skip: !l
                    }),
                    Ne = Te.data,
                    Se = Te.isFetching,
                    Ce = Te.isSuccess,
                    ke = Te.isError,
                    Ie = Te.error,
                    De = (0, f.Rh)(),
                    Ae = (0, a.A)(De, 2),
                    Le = Ae[0],
                    Pe = Ae[1],
                    Oe = Pe.data,
                    ze = Pe.isLoading,
                    Be = (Pe.isSuccess, Pe.isError, Pe.error, (0, v.HP)()),
                    Me = (0, a.A)(Be, 2),
                    je = Me[0],
                    Fe = Me[1],
                    $e = Fe.isLoading,
                    Ue = (Fe.isSuccess, Fe.isError),
                    Ge = Fe.error;
                (0, b.useEffect)(function() {
                    Ce && "group" === (null == Ne ? void 0 : Ne.storeType) && Le({
                        groupId: Ne.groupId
                    })
                }, [Ce, Ne]), (0, b.useEffect)(function() {
                    null != Ne && Ne.storeStatus && ne("published" === Ne.storeStatus), null != Ne && Ne.listings && ue(Ne.listings)
                }, [Ne]), (0, b.useMemo)(function() {
                    if (null == Ne || !Ne.listings) return se([]);
                    se(Ne.listings.filter(function(e) {
                        return null != V && V.searchValue && "" !== (null == V ? void 0 : V.searchValue) ? e.displayName.toLowerCase().includes(V.searchValue.toLowerCase()) : null == V || !V.listingType || "all" === (null == V ? void 0 : V.listingType) || e.listingType === V.listingType
                    }).sort(function(e, t) {
                        if (null != V && V.sortBy) {
                            if ("buyerView" === V.sortBy) return Ne.listings.indexOf(e) - Ne.listings.indexOf(t);
                            if ("newest" === V.sortBy) return new Date(t.created) - new Date(e.created);
                            if ("oldest" === V.sortBy) return new Date(e.created) - new Date(t.created);
                            if ("descendingName" === V.sortBy) return e.displayName.localeCompare(t.displayName);
                            if ("ascendingName" === V.sortBy) return t.displayName.localeCompare(e.displayName);
                            if ("cheapest" === V.sortBy) return e.priceTokens - t.priceTokens;
                            if ("expensive" === V.sortBy) return t.priceTokens - e.priceTokens;
                            if ("status" === V.sortBy) return e.active - t.active
                        }
                    }))
                }, [V, Ne]);
                (0, b.useEffect)(function() {
                    ke && (k("/home/marketplace/storefront/stores"), C((0, u.X)({
                        title: "Store Not Found",
                        message: "The store you are looking for does not exist.",
                        color: "danger",
                        icon: "error",
                        timeout: 5e3
                    })))
                }, [ke, k]);
                var qe = function() {
                    var e = (0, i.A)(c().mark(function e() {
                        var t, n;
                        return c().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = te ? "unpublished" : "published", e.prev = 1, e.next = 4, je({
                                        storeId: l,
                                        storeStatus: t
                                    }).unwrap();
                                case 4:
                                    n = e.sent, ne("published" === n.storeStatus), e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(1), C((0, u.X)({
                                        title: "Error",
                                        message: "An error occurred while updating the store status.",
                                        color: "danger",
                                        icon: "error",
                                        timeout: 5e3
                                    }));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }, e, null, [
                            [1, 8]
                        ])
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                (0, b.useEffect)(function() {
                    var e = new URLSearchParams(F.toString());
                    V.listingType && e.set("listingType", V.listingType), V.sortBy && e.set("sortBy", V.sortBy), e.toString() !== F.toString() && $(e)
                }, [V, F]);
                var Ve, Re, We, Xe, He, Qe = function() {
                        var e;
                        se(null !== (e = Ne.listings) && void 0 !== e ? e : []), pe(!1), n()
                    },
                    Ye = function() {
                        var e = (0, i.A)(c().mark(function e() {
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(ae.length <= 1)) {
                                            e.next = 3;
                                            break
                                        }
                                        return Qe(), e.abrupt("return");
                                    case 3:
                                        return e.prev = 3, e.next = 6, je({
                                            storeId: l,
                                            listingIds: ce.map(function(e) {
                                                return e.id
                                            })
                                        }).unwrap();
                                    case 6:
                                        pe(!1), n(), e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(3), C((0, u.X)({
                                            title: "Error",
                                            message: "An error occurred while updating the store listings order.",
                                            color: "danger",
                                            icon: "error",
                                            timeout: 5e3
                                        }));
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [3, 10]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    _e = function(e) {
                        var t = e.title,
                            n = void 0 === t ? "" : t,
                            r = e.data,
                            i = void 0 === r ? void 0 : r,
                            a = e.isCreating,
                            s = void 0 !== a && a,
                            o = e.isEditing,
                            l = void 0 !== o && o,
                            c = e.isDeleting,
                            u = void 0 !== c && c,
                            d = e.isPublishing,
                            w = void 0 !== d && d,
                            m = e.productType,
                            g = void 0 === m ? p.Wd.LISTING : m,
                            f = e.listingType,
                            v = void 0 === f ? "" : f;
                        ye(!0), n && C((0, y.D6)(n)), xe({
                            title: n,
                            data: i,
                            isCreating: s,
                            isEditing: l,
                            isDeleting: u,
                            isPublishing: w,
                            listingType: v,
                            productType: g
                        })
                    },
                    Ze = function() {
                        _e({
                            title: p.cS.listingType,
                            listingType: "listing",
                            isCreating: !0,
                            productType: p.Wd.LISTING
                        })
                    },
                    Je = function() {
                        Oe && (C((0, h.ac)(null)), C((0, h.Hf)(Oe)), C((0, h.EY)("Create Subscription Role"))), _e({
                            title: B,
                            listingType: "subscription",
                            isCreating: !0
                        })
                    },
                    Ke = function(e) {
                        _e({
                            title: "subscription" === e.listingType ? "Edit Subscription" : "Edit Listing",
                            data: e,
                            isEditing: !0,
                            listingType: e.listingType
                        })
                    },
                    et = function(e) {
                        _e({
                            title: "Delete Listing",
                            data: e,
                            isDeleting: !0,
                            listingType: e.listingType
                        })
                    },
                    tt = function(e) {
                        _e({
                            title: null != e && e.active ? "Move Listing to Draft" : "Publish Listing",
                            data: e,
                            isPublishing: !0
                        })
                    },
                    nt = function(e) {
                        e.preventDefault()
                    },
                    rt = function(e) {
                        var t = e.index,
                            n = "up" === e.direction ? t - 1 : t + 1;
                        if (n < 0 || n >= ae.length) return ae;
                        var i = (0, r.A)(ae),
                            a = [i[n], i[t]];
                        i[t] = a[0], i[n] = a[1], se(i), ue(i)
                    },
                    it = function() {
                        ye(!1), xe({}), C((0, h.ac)(null)), C((0, h.EY)("Create Subscription")), C((0, h.Xk)(!1)), C((0, y.GS)())
                    };
                return b.createElement(b.Fragment, null, b.createElement(d.fv, {
                    className: "tw-@container/store tw-gap-4"
                }, me && b.createElement("div", {
                    className: "tw-w-full tw-h-full tw-opacity-75 tw-bg-black tw-fixed tw-z-10 tw-top-0 tw-left-0"
                }), b.createElement(d.$n, {
                    neutral: !0,
                    type: "button",
                    containerClasses: "tw-w-fit",
                    onClick: function() {
                        return k("/home/marketplace/storefront/stores")
                    }
                }, b.createElement(d.M2, {
                    icon: o.Wz
                }), " Back to All Stores"), b.createElement(d.fv, {
                    className: "@xs/store:tw-flex-row tw-capitalize tw-justify-between"
                }, b.createElement(d.fI, {
                    className: "tw-items-align"
                }, b.createElement("h4", {
                    className: "tw-mr-2"
                }, null == Ne ? void 0 : Ne.displayName), (null == Ne ? void 0 : Ne.storeType) && b.createElement(m.A, {
                    storeType: null == Ne ? void 0 : Ne.storeType,
                    className: "tw-h-fit"
                })), b.createElement(d.fI, {
                    className: "tw-items-center tw-gap-2"
                }, b.createElement(d.M2, {
                    icon: s.GE,
                    className: "tw-text-".concat(te ? "green" : "placeholder-text")
                }), b.createElement(d.UL, {
                    label: te ? "Published" : "Unpublished",
                    className: "tw-text-".concat(te ? "white" : "placeholder-text", " tw-gap-2"),
                    defaultChecked: te,
                    onChangeCallback: qe
                }))), "unpublished" === (null == Ne ? void 0 : Ne.storeStatus) && b.createElement(d.$T, {
                    type: "warn",
                    className: "tw-mt-2 tw-flex-row"
                }, "This store is disabled. Enable it so users can browse and purchase your listings."), b.createElement(W, {
                    isOrdering: me,
                    onFilterChange: function(e) {
                        R(e)
                    },
                    onOrder: function() {
                        pe(!0), n()
                    },
                    onCancelOrder: Qe,
                    onSaveOrder: Ye,
                    onCreateListing: Ze,
                    groupLoading: ze,
                    onCreateSubscription: Je,
                    searchParams: F,
                    storeType: null == Ne ? void 0 : Ne.storeType,
                    orderingDisabled: 0 === ae.length
                }), b.createElement(d.fv, {
                    className: "tw-gap-3 ".concat(me ? "tw-z-20" : null)
                }, me && b.createElement(b.Fragment, null, b.createElement(d.$T, {
                    type: "dark",
                    hideIcon: !0,
                    className: "tw-m-0 tw-hidden sm:tw-block"
                }, "Drag the store items to reorder them, don’t forget to click on ", b.createElement("strong", null, "Save"), " after finishing changes."), b.createElement(d.$T, {
                    type: "dark",
                    hideIcon: !0,
                    className: "tw-m-0 tw-block sm:tw-hidden"
                }, "Click the arrows of store items to reorder them, don’t forget to click on ", b.createElement("strong", null, "Save"), " after finishing changes.")), Se || $e ? b.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, b.createElement(w.A, {
                    loading: !0
                })) : ke || Ue ? b.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, b.createElement("p", null, "Error loading sales data:"), b.createElement("code", null, null !== (He = (Ie || Ge).data.error.message) && void 0 !== He ? He : "Unknown error")) : Ce && 0 === ae.length ? V.listingType && "all" !== V.listingType ? b.createElement(S, {
                    storeType: null == Ne ? void 0 : Ne.storeType,
                    createListing: "group" === (null == Ne ? void 0 : Ne.storeType) ? Je : Ze,
                    content: "No results found for this listing type"
                }) : V.searchValue && "" !== V.searchValue ? b.createElement(S, {
                    storeType: null == Ne ? void 0 : Ne.storeType,
                    createListing: "group" === (null == Ne ? void 0 : Ne.storeType) ? Je : Ze,
                    content: "No results found for this search query"
                }) : b.createElement(S, {
                    storeType: null == Ne ? void 0 : Ne.storeType,
                    createListing: "group" === (null == Ne ? void 0 : Ne.storeType) ? Je : Ze
                }) : Ce ? ae.map(function(e, t) {
                    return b.createElement("div", {
                        key: e.id,
                        className: "".concat(me ? "sm:tw-select-none sm:tw-cursor-move" : ""),
                        draggable: me,
                        onDragOver: nt,
                        onDragStart: function(e) {
                            return function(e, t) {
                                e.dataTransfer.setData("index", t)
                            }(e, t)
                        },
                        onDrop: function(e) {
                            return function(e, t) {
                                e.preventDefault();
                                var n = e.dataTransfer.getData("index");
                                if (n !== t) {
                                    var r = Array.from(ae),
                                        i = r.splice(n, 1),
                                        s = (0, a.A)(i, 1)[0];
                                    r.splice(t, 0, s), se(r), ue(r)
                                }
                            }(e, t)
                        }
                    }, b.createElement(q, {
                        isOrdering: me,
                        listingData: e,
                        editListingCallback: Ke,
                        deleteListingCallback: et,
                        publishListingCallback: tt,
                        moveUp: function() {
                            return rt({
                                index: t,
                                direction: "up"
                            })
                        },
                        moveDown: function() {
                            return rt({
                                index: t,
                                direction: "down"
                            })
                        }
                    }))
                }) : void 0)), b.createElement(d.aF, {
                    title: (Ve = Ee, Re = Ve.isCreating, We = Ve.listingType, Xe = Ve.title, Re && "subscription" === We ? B : Re ? A : Xe),
                    isVisible: ve,
                    onBackCallback: z || D ? function() {
                        z && C((0, h.EY)(z)), D && C((0, y.EY)(D))
                    } : null,
                    onClose: it,
                    width: "100%",
                    centered: !1,
                    overflow: "auto",
                    noClose: L,
                    hideTitle: P,
                    disableBackdropClick: !0,
                    slim: !L,
                    className: "".concat(L ? "tw-bg-[#0A0A0D]" : "tw-bg-black")
                }, b.createElement(b.Suspense, {
                    fallback: b.createElement(w.A, {
                        loading: !0
                    })
                }, ve && !Ee.data && "subscription" !== Ee.listingType && b.createElement(X, {
                    onClose: it,
                    store: Ne
                }), ve && !Ee.data && "subscription" === Ee.listingType && b.createElement(J, {
                    user: N,
                    onClose: it,
                    groupData: Oe
                }), ve && Ee.isEditing && Ee.data && "subscription" !== Ee.listingType && b.createElement(H, {
                    onClose: it,
                    onDelete: et,
                    listingId: Ee.data.id,
                    store: Ne
                }), ve && Ee.isEditing && Ee.data && "subscription" === Ee.listingType && b.createElement(_, {
                    onClose: it,
                    listingId: Ee.data.id
                }), ve && Ee.isDeleting && "subscription" !== Ee.listingType && b.createElement(Q, {
                    onCancelCallback: it,
                    listing: Ee.data
                }), ve && Ee.isDeleting && "subscription" === Ee.listingType && b.createElement(Z, {
                    onCancelCallback: it,
                    listingId: Ee.data.id
                }), ve && Ee.isPublishing && b.createElement(Y, {
                    onClose: it,
                    listing: Ee.data
                }))))
            }
        },
        97087(e, t, n) {
            n.d(t, {
                HP: () => u,
                ST: () => c,
                _N: () => l,
                rg: () => o
            });
            var r = n(80045),
                i = n(89483),
                a = ["storeId"],
                s = i.m.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getStores: e.query({
                                query: function(e) {
                                    var t = e.sellerId,
                                        n = e.managementPov,
                                        r = void 0 !== n && n,
                                        i = e.n,
                                        a = void 0 === i ? 50 : i,
                                        s = e.offset;
                                    return {
                                        url: "economy/stores",
                                        params: {
                                            sellerId: t,
                                            managementPov: r,
                                            n: a,
                                            offset: void 0 === s ? 0 : s
                                        }
                                    }
                                },
                                providesTags: ["Stores"]
                            }),
                            getStore: e.query({
                                query: function(e) {
                                    var t = e.storeId,
                                        n = e.worldId,
                                        r = e.groupId,
                                        i = e.creatorId,
                                        a = e.hydrateListings,
                                        s = void 0 !== a && a,
                                        o = e.hydrateProducts,
                                        l = void 0 !== o && o,
                                        c = e.managementPov;
                                    return {
                                        url: "economy/store",
                                        params: {
                                            storeId: t,
                                            worldId: n,
                                            groupId: r,
                                            creatorId: i,
                                            hydrateListings: s,
                                            hydrateProducts: l,
                                            managementPov: void 0 !== c && c
                                        }
                                    }
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "Store",
                                        id: n.storeId
                                    }]
                                }
                            }),
                            createStore: e.mutation({
                                query: function(e) {
                                    var t = e.displayName,
                                        n = e.storeType,
                                        r = e.worldId,
                                        i = e.groupId,
                                        a = e.tags,
                                        s = void 0 === a ? [] : a,
                                        o = e.description;
                                    return {
                                        url: "economy/store",
                                        method: "POST",
                                        body: {
                                            displayName: t,
                                            storeType: n,
                                            worldId: r,
                                            groupId: i,
                                            tags: s,
                                            description: void 0 === o ? "" : o
                                        }
                                    }
                                },
                                invalidatesTags: function() {
                                    return ["Stores", "Worlds"]
                                }
                            }),
                            updateStore: e.mutation({
                                query: function(e) {
                                    var t = e.storeId,
                                        n = (0, r.A)(e, a);
                                    return {
                                        url: "economy/store/".concat(t),
                                        method: "PUT",
                                        body: n
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "Store",
                                        id: n.storeId
                                    }, "Stores", {
                                        type: "UserGroups",
                                        id: e.sellerId
                                    }, "Worlds"]
                                }
                            }),
                            deleteStore: e.mutation({
                                query: function(e) {
                                    var t = e.storeId;
                                    return {
                                        url: "economy/store/".concat(t),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "Store",
                                        id: n.storeId
                                    }, "Stores"]
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["Stores", "Store", "UserGroups"]
                }),
                o = s.useGetStoreQuery,
                l = s.useGetStoresQuery,
                c = s.useCreateStoreMutation,
                u = s.useUpdateStoreMutation;
            s.useDeleteStoreMutation
        }
    }
]);
//# sourceMappingURL=55d89e1b85c6b34ae10a115952db3784080e7fb3151d3c517bc2934bb0251fb7.js.map