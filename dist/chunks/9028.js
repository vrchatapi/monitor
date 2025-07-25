"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9028], {
        53734: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(46382),
                i = n(95896),
                a = n(99162),
                s = n(45697),
                o = n.n(s),
                l = n(67294),
                c = function(e) {
                    var t = e.storeType,
                        n = void 0 === t ? null : t,
                        s = e.className;
                    e.style;
                    if (null === n) return null;
                    var o = (0, l.useMemo)((function() {
                        var e, t;
                        return null !== (e = null === (t = i.HH.find((function(e) {
                            return e.value === n
                        }))) || void 0 === t ? void 0 : t.label) && void 0 !== e ? e : "Unknown"
                    }), [n]);
                    return l.createElement("div", {
                        className: "".concat(s, " tw-px-2 tw-py-1 tw-bg-[#575757] tw-opacity-90 tw-rounded-full tw-text-white tw-text-xs")
                    }, l.createElement(r.$1, {
                        icon: "world" === n ? a.vrcWorld : a.vrcGroup,
                        className: "tw-mr-1"
                    }), o, " Store")
                };
            c.propTypes = {
                storeType: o().string.isRequired
            };
            const u = c
        },
        99028: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => Y
            });
            var r = n(42138),
                i = n(15861),
                a = n(54546),
                s = n(17319),
                o = n(85020),
                l = n(64687),
                c = n.n(l),
                u = n(64258),
                d = n(46382),
                m = n(98185),
                w = n(53734),
                p = n(95896),
                g = n(17383),
                f = n(93261),
                v = n(36183),
                y = n(39270),
                h = n(68157),
                b = n(67294),
                E = n(32981),
                x = n(89250),
                T = n(79655),
                N = n(68335);
            const C = function(e) {
                var t = e.createListing,
                    n = void 0 === t ? function() {} : t,
                    r = e.content,
                    i = e.storeType,
                    a = void 0 === i ? "group" : i;
                return b.createElement(d.JX, {
                    className: " tw-@container/listings-cold tw-text-center tw-gap-5 tw-my-20 tw-justify-center tw-items-center tw-w-full"
                }, b.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center"
                }, b.createElement(d.$1, {
                    icon: N.vJ,
                    className: "tw-text-5xl tw-text-light-grey",
                    role: "presentation",
                    alt: ""
                })), r && b.createElement("h4", {
                    className: "tw-text-lg"
                }, r), !r && b.createElement("h4", {
                    className: "tw-text-lg"
                }, "Start creating ", "world" === a ? "listings" : "subscriptions", " to sell your products"), b.createElement(d.JX, {
                    className: "tw-items-center"
                }, b.createElement(d.zx, {
                    containerClasses: "tw-mb-3 tw-w-[200px]",
                    onClick: n
                }, "Create ", "world" === a ? "Listing" : "Subscription")))
            };
            var S = n(45987),
                k = n(41145),
                I = n(62228),
                D = n(2909),
                L = n(38252),
                P = n(76553),
                z = n(6811),
                Z = n(67978),
                B = n(27484),
                X = n.n(B),
                O = n(45697),
                A = n.n(O),
                q = n(97798);
            const j = function(e) {
                var t = e.active,
                    n = void 0 !== t && t,
                    r = e.editAction,
                    i = void 0 === r ? function() {} : r,
                    s = e.deleteAction,
                    o = void 0 === s ? function() {} : s,
                    l = e.publishAction,
                    c = void 0 === l ? function() {} : l,
                    u = e.isPublishDisabled,
                    m = void 0 !== u && u,
                    w = (0, b.useState)(!1),
                    p = (0, a.Z)(w, 2),
                    g = p[0],
                    f = p[1],
                    v = (0, b.useState)(null),
                    y = (0, a.Z)(v, 2),
                    h = y[0],
                    E = y[1],
                    x = (0, b.useRef)(null);
                return (0, b.useEffect)((function() {
                    null != x && x.current && E(x.current.getBoundingClientRect())
                }), [x]), b.createElement("div", {
                    onMouseLeave: function() {
                        return f(!1)
                    }
                }, b.createElement(d.zx, {
                    ref: x,
                    className: "tw-h-9 tw-w-9",
                    neutral: !0,
                    onClick: function() {
                        return f(!g)
                    }
                }, b.createElement(d.$1, {
                    icon: q.Uw,
                    size: "1x"
                })), b.createElement(d.JX, {
                    style: {
                        transform: "translate(-".concat(120 - (null == h ? void 0 : h.width), "px, 0px)")
                    },
                    className: "tw-pt-2 tw-min-w-min tw-w-[120px] tw-min-h-min tw-z-50 tw-absolute ".concat(g ? "tw-flex" : "tw-hidden")
                }, b.createElement(d.JX, {
                    className: "tw-items-start tw-bg-button-bg-grey tw-border-2 tw-w-full tw-text-left tw-weight-[500] tw-border-solid tw-border-[#666666] tw-rounded-lg"
                }, b.createElement("button", {
                    type: "button",
                    onClick: i,
                    className: "tw-text-left tw-px-3 tw-py-2 tw-w-full tw-text-option-inactive tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-[#666666]"
                }, "Edit"), b.createElement("button", {
                    type: "button",
                    disabled: m,
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
            var F = ["listingData", "isOrdering", "moveUp", "moveDown", "editListingCallback", "deleteListingCallback", "publishListingCallback"],
                U = function(e) {
                    var t = e.listingData,
                        n = void 0 === t ? null : t,
                        r = e.isOrdering,
                        i = void 0 !== r && r,
                        a = e.moveUp,
                        s = void 0 === a ? function() {} : a,
                        o = e.moveDown,
                        l = void 0 === o ? function() {} : o,
                        c = e.editListingCallback,
                        m = void 0 === c ? function() {} : c,
                        w = e.deleteListingCallback,
                        p = void 0 === w ? function() {} : w,
                        f = e.publishListingCallback,
                        v = void 0 === f ? function() {} : f,
                        y = ((0, S.Z)(e, F), (0, E.I0)());
                    if (null === n) return null;
                    var h = n.id,
                        x = n.displayName,
                        T = n.created,
                        N = n.active,
                        C = n.priceTokens,
                        B = n.listingType,
                        O = n.imageId,
                        A = (n.storeIds, n.productIds, (0, Z.DM)({
                            listingId: h
                        }, {
                            skip: !h
                        })),
                        q = A.data,
                        U = void 0 === q ? [] : q,
                        J = (A.isFetching, A.isSuccess, A.isError, A.error, (0, g.AA)(U)),
                        $ = J.hasAllProductsDisabled,
                        V = J.hasSomeProductsDisabled;
                    J.hasNoProductsDisabled;
                    return b.createElement("div", {
                        className: "tw-relative"
                    }, b.createElement("div", {
                        className: "tw-grid tw-gap-2 tw-grid-cols-3 tw-bg-[#252A30] tw-rounded-lg @[470px]/store:tw-grid-cols-5 @[700px]/store:tw-grid-cols-7 tw-p-3 tw-min-h-[72px]"
                    }, b.createElement(d.X2, {
                        className: "tw-flex tw-gap-2 tw-items-center tw-truncate tw-col-span-2"
                    }, i && b.createElement(d.$1, {
                        className: "tw-hidden sm:tw-block",
                        icon: L.g$
                    }), b.createElement(d.pw, {
                        fitToCover: !0,
                        imageId: O,
                        className: "tw-w-12 tw-h-12 tw-rounded-md tw-shrink-0",
                        containerColor: "#181B1F",
                        iconColor: "#404C58"
                    }), b.createElement(d.JX, {
                        className: "tw-justify-center tw-truncate"
                    }, b.createElement("h6", {
                        className: "tw-m-0 tw-font-bold tw-truncate @[800px]/store:tw-whitespace-pre-line @[800px]/store:tw-break-words",
                        title: x
                    }, x), b.createElement("p", {
                        className: "tw-capitalize tw-m-0 tw-text-light-grey"
                    }, "duration" === B ? "Temporary" : B || ""))), b.createElement(d.JX, {
                        className: "tw-justify-center tw-truncate tw-hidden @[700px]/store:tw-flex"
                    }, b.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "Date Added"), X()(T).format("ll")), b.createElement(d.JX, {
                        className: " tw-justify-center tw-truncate  tw-hidden @[700px]/store:tw-flex"
                    }, b.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "Price"), b.createElement("p", {
                        className: "tw-mb-0"
                    }, b.createElement(d.b5, null), " ", C)), b.createElement(d.JX, {
                        className: "tw-justify-center tw-truncate tw-capitalize tw-hidden @[470px]/store:tw-flex"
                    }, b.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "Store Availability"), b.createElement("p", {
                        className: "tw-mb-0"
                    }, (null == n ? void 0 : n.storeIds.length) || 0, " ", 1 === (null == n ? void 0 : n.storeIds.length) ? "Store" : "Stores")), b.createElement(d.JX, {
                        className: "tw-flex tw-justify-center tw-truncate tw-hidden @[470px]/store:tw-flex"
                    }, b.createElement("small", {
                        className: "tw-text-light-grey"
                    }, "Status"), N ? "Published" : "Draft"), b.createElement(d.X2, {
                        className: "tw-truncate tw-items-center tw-gap-2 tw-justify-end"
                    }, !i && b.createElement(b.Fragment, null, b.createElement(d.zx, {
                        className: "tw-w-9 tw-h-9",
                        neutral: !0,
                        onClick: function() {
                            navigator.clipboard.writeText(h).then((function() {
                                y((0, u.d)({
                                    title: "Copied listing ID",
                                    icon: z.f8,
                                    message: "Listing ID Copied!",
                                    color: "success",
                                    timeout: 3e3
                                }))
                            })).catch((function(e) {
                                var t, n;
                                y((0, u.d)({
                                    title: "Failed to copy listing ID",
                                    icon: P.eH,
                                    message: null !== (t = null === (n = res.error.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Failed to copy listing ID",
                                    color: "error",
                                    timeout: 3e3
                                }))
                            }))
                        }
                    }, b.createElement(d.$1, {
                        icon: D.kZ,
                        size: "1x"
                    })), b.createElement(j, {
                        active: null == n ? void 0 : n.active,
                        publishAction: function() {
                            return v(n)
                        },
                        editAction: function() {
                            return m(n)
                        },
                        deleteAction: function() {
                            return p(n)
                        },
                        isPublishDisabled: $ || V
                    })), i && b.createElement(b.Fragment, null, b.createElement(d.zx, {
                        className: "tw-w-9 tw-h-9",
                        neutral: !0,
                        onClick: s
                    }, b.createElement(d.$1, {
                        icon: I.mT,
                        size: "1x"
                    })), b.createElement(d.zx, {
                        className: "tw-w-9 tw-h-9",
                        neutral: !0,
                        onClick: l
                    }, b.createElement(d.$1, {
                        icon: k.pt,
                        size: "1x"
                    }))))))
                };
            U.propTypes = {
                listingData: A().object.isRequired,
                isOrdering: A().bool,
                moveUp: A().func,
                moveDown: A().func
            };
            const J = U;
            var $ = n(40098),
                V = n(76176);
            const M = function(e) {
                var t = e.onFilterChange,
                    n = void 0 === t ? function() {} : t,
                    r = e.onOrder,
                    i = void 0 === r ? function() {} : r,
                    s = e.onCreateListing,
                    o = void 0 === s ? function() {} : s,
                    l = e.onCreateSubscription,
                    c = void 0 === l ? function() {} : l,
                    u = e.onSaveOrder,
                    m = void 0 === u ? function() {} : u,
                    w = e.onCancelOrder,
                    g = void 0 === w ? function() {} : w,
                    f = e.isOrdering,
                    v = void 0 !== f && f,
                    y = e.orderingDisabled,
                    h = void 0 !== y && y,
                    E = e.searchParams,
                    x = e.groupLoading,
                    T = void 0 !== x && x,
                    N = e.storeType,
                    C = (0, b.useState)(""),
                    S = (0, a.Z)(C, 2),
                    k = S[0],
                    I = S[1],
                    D = (0, V.Z)(k),
                    L = (0, b.useState)(E.get("listingType") || "all"),
                    P = (0, a.Z)(L, 2),
                    z = P[0],
                    Z = P[1],
                    B = (0, b.useState)(E.get("sortBy") || "buyerView"),
                    X = (0, a.Z)(B, 2),
                    O = X[0],
                    A = X[1],
                    q = N === p.Bk.GROUPS;
                (0, b.useEffect)((function() {
                    n({
                        searchValue: D,
                        listingType: z,
                        sortBy: O
                    })
                }), [D, z, O]);
                var j = p.di.filter((function(e) {
                    return "subscription" !== e.value
                }));
                return b.createElement(d.JX, {
                    className: "tw-justify-between @md/store:tw-flex-row tw-gap-2"
                }, b.createElement(d.X2, {
                    className: "tw-gap-2 tw-flex-wrap"
                }, b.createElement(d.II, {
                    className: "tw-flex-1 tw-shrink-0 tw-min-w-full @lg/store:tw-w-[300px] @lg/store:tw-min-w-[300px] tw-max-w-[300px]",
                    type: "text",
                    value: k,
                    onChange: function(e) {
                        return I(e.target.value)
                    },
                    placeholder: "Search"
                }), !q && b.createElement(d.Lt, {
                    className: "tw-flex-inital",
                    options: j,
                    value: z,
                    label: "Display",
                    onChange: function(e) {
                        return Z(e)
                    }
                }), b.createElement(d.Lt, {
                    className: "tw-flex-inital",
                    options: p.lh,
                    value: O,
                    label: "Sort by",
                    onChange: function(e) {
                        return A(e)
                    }
                })), b.createElement(d.X2, {
                    className: "tw-gap-2 ".concat(v ? "tw-z-20" : null)
                }, !v && b.createElement(b.Fragment, null, b.createElement(d.zx, {
                    type: "button",
                    neutral: !0,
                    onClick: function() {
                        I(""), Z("all"), A("buyerView"), i()
                    },
                    containerClasses: "tw-h-fit",
                    className: "tw-w-[170px] tw-max-h-fit",
                    disabled: h
                }, "Order Listings"), b.createElement("div", {
                    className: "tw-group tw-relative tw-flex-auto tw-grow-0 tw-max-h-fit"
                }, !q && b.createElement(d.zx, {
                    type: "button",
                    onClick: o,
                    className: "tw-w-[170px] tw-max-h-fit"
                }, b.createElement(d.$1, {
                    icon: $.r8
                }), " Create Listing"), q && b.createElement(d.zx, {
                    type: "button",
                    disabled: T,
                    onClick: c,
                    className: "tw-w-[180px] tw-max-h-fit"
                }, b.createElement(d.$1, {
                    icon: $.r8
                }), " Create Subscription"))), v && b.createElement(b.Fragment, null, b.createElement(d.zx, {
                    type: "button",
                    neutral: !0,
                    onClick: g,
                    containerClasses: "tw-h-fit",
                    className: "tw-w-[170px] tw-max-h-fit"
                }, "Cancel"), b.createElement(d.zx, {
                    type: "button",
                    onClick: m,
                    containerClasses: "tw-h-fit",
                    className: "tw-w-[170px] tw-max-h-fit"
                }, "Save"))))
            };
            var G = (0, b.lazy)((function() {
                    return Promise.all([n.e(6154), n.e(682)]).then(n.bind(n, 20682))
                })),
                R = (0, b.lazy)((function() {
                    return Promise.all([n.e(6154), n.e(3642)]).then(n.bind(n, 33642))
                })),
                _ = (0, b.lazy)((function() {
                    return n.e(4363).then(n.bind(n, 14363))
                })),
                H = (0, b.lazy)((function() {
                    return n.e(3929).then(n.bind(n, 63929))
                })),
                Q = (0, b.lazy)((function() {
                    return Promise.resolve().then(n.bind(n, 44062))
                })),
                W = (0, b.lazy)((function() {
                    return Promise.resolve().then(n.bind(n, 22717))
                })),
                K = (0, b.lazy)((function() {
                    return Promise.resolve().then(n.bind(n, 18529))
                }));
            const Y = function(e) {
                var t = e.onOrderStore,
                    n = void 0 === t ? function() {} : t,
                    l = (0, x.UO)().storeId,
                    N = (0, g.Tu)().user,
                    S = (0, E.I0)(),
                    k = (0, x.s0)(),
                    I = (0, E.v9)((function(e) {
                        return e.listingFlow
                    })),
                    D = I.previousStep,
                    L = (I.currentStep, I.currentTitle),
                    P = I.isPreviewOpen,
                    z = I.isTitleHidden,
                    Z = (0, E.v9)((function(e) {
                        return e.myStoreCreateSubscription
                    })),
                    B = Z.previousStep,
                    X = Z.currentStep,
                    O = (0, T.lr)(),
                    A = (0, a.Z)(O, 2),
                    q = A[0],
                    j = A[1],
                    F = (0, b.useState)({}),
                    U = (0, a.Z)(F, 2),
                    $ = U[0],
                    V = U[1],
                    Y = (0, b.useState)(!1),
                    ee = (0, a.Z)(Y, 2),
                    te = ee[0],
                    ne = ee[1],
                    re = (0, b.useState)([]),
                    ie = (0, a.Z)(re, 2),
                    ae = ie[0],
                    se = ie[1],
                    oe = (0, b.useState)([]),
                    le = (0, a.Z)(oe, 2),
                    ce = le[0],
                    ue = le[1],
                    de = (0, b.useState)(!1),
                    me = (0, a.Z)(de, 2),
                    we = me[0],
                    pe = me[1],
                    ge = (0, b.useState)(!1),
                    fe = (0, a.Z)(ge, 2),
                    ve = fe[0],
                    ye = fe[1],
                    he = b.useState({}),
                    be = (0, a.Z)(he, 2),
                    Ee = be[0],
                    xe = be[1],
                    Te = (0, v.md)({
                        storeId: l,
                        managementPov: !0,
                        hydrateListings: !0
                    }, {
                        skip: !l
                    }),
                    Ne = Te.data,
                    Ce = Te.isFetching,
                    Se = Te.isSuccess,
                    ke = Te.isError,
                    Ie = Te.error,
                    De = (0, f.nz)(),
                    Le = (0, a.Z)(De, 2),
                    Pe = Le[0],
                    ze = Le[1],
                    Ze = ze.data,
                    Be = ze.isLoading,
                    Xe = (ze.isSuccess, ze.isError, ze.error, (0, v.mt)()),
                    Oe = (0, a.Z)(Xe, 2),
                    Ae = Oe[0],
                    qe = Oe[1],
                    je = qe.isLoading,
                    Fe = (qe.isSuccess, qe.isError),
                    Ue = qe.error;
                (0, b.useEffect)((function() {
                    Se && "group" === (null == Ne ? void 0 : Ne.storeType) && Pe({
                        groupId: Ne.groupId
                    })
                }), [Se, Ne]), (0, b.useEffect)((function() {
                    null != Ne && Ne.storeStatus && ne("published" === Ne.storeStatus), null != Ne && Ne.listings && ue(Ne.listings)
                }), [Ne]), (0, b.useMemo)((function() {
                    if (null == Ne || !Ne.listings) return se([]);
                    se(Ne.listings.filter((function(e) {
                        return null != $ && $.searchValue && "" !== (null == $ ? void 0 : $.searchValue) ? e.displayName.toLowerCase().includes($.searchValue.toLowerCase()) : null == $ || !$.listingType || "all" === (null == $ ? void 0 : $.listingType) || e.listingType === $.listingType
                    })).sort((function(e, t) {
                        if (null != $ && $.sortBy) {
                            if ("buyerView" === $.sortBy) return Ne.listings.indexOf(e) - Ne.listings.indexOf(t);
                            if ("newest" === $.sortBy) return new Date(t.created) - new Date(e.created);
                            if ("oldest" === $.sortBy) return new Date(e.created) - new Date(t.created);
                            if ("descendingName" === $.sortBy) return e.displayName.localeCompare(t.displayName);
                            if ("ascendingName" === $.sortBy) return t.displayName.localeCompare(e.displayName);
                            if ("cheapest" === $.sortBy) return e.priceTokens - t.priceTokens;
                            if ("expensive" === $.sortBy) return t.priceTokens - e.priceTokens;
                            if ("status" === $.sortBy) return e.active - t.active
                        }
                    })))
                }), [$, Ne]);
                (0, b.useEffect)((function() {
                    ke && (k("/home/marketplace/storefront/stores"), S((0, u.d)({
                        title: "Store Not Found",
                        message: "The store you are looking for does not exist.",
                        color: "danger",
                        icon: "error",
                        timeout: 5e3
                    })))
                }), [ke, k]);
                var Je = function() {
                    var e = (0, i.Z)(c().mark((function e() {
                        var t, n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = te ? "unpublished" : "published", e.prev = 1, e.next = 4, Ae({
                                        storeId: l,
                                        storeStatus: t
                                    }).unwrap();
                                case 4:
                                    n = e.sent, ne("published" === n.storeStatus), e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(1), S((0, u.d)({
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
                        }), e, null, [
                            [1, 8]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                (0, b.useEffect)((function() {
                    var e = new URLSearchParams(q.toString());
                    $.listingType && e.set("listingType", $.listingType), $.sortBy && e.set("sortBy", $.sortBy), e.toString() !== q.toString() && j(e)
                }), [$, q]);
                var $e, Ve, Me, Ge, Re, _e = function() {
                        var e;
                        se(null !== (e = Ne.listings) && void 0 !== e ? e : []), pe(!1), n()
                    },
                    He = function() {
                        var e = (0, i.Z)(c().mark((function e() {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(ae.length <= 1)) {
                                            e.next = 3;
                                            break
                                        }
                                        return _e(), e.abrupt("return");
                                    case 3:
                                        return e.prev = 3, e.next = 6, Ae({
                                            storeId: l,
                                            listingIds: ce.map((function(e) {
                                                return e.id
                                            }))
                                        }).unwrap();
                                    case 6:
                                        pe(!1), n(), e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(3), S((0, u.d)({
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
                            }), e, null, [
                                [3, 10]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Qe = function(e) {
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
                            m = void 0 !== d && d,
                            w = e.productType,
                            g = void 0 === w ? p.Pm.LISTING : w,
                            f = e.listingType,
                            v = void 0 === f ? "" : f;
                        ye(!0), n && S((0, y.Td)(n)), xe({
                            title: n,
                            data: i,
                            isCreating: s,
                            isEditing: l,
                            isDeleting: u,
                            isPublishing: m,
                            listingType: v,
                            productType: g
                        })
                    },
                    We = function() {
                        Qe({
                            title: p._9.listingType,
                            listingType: "listing",
                            isCreating: !0,
                            productType: p.Pm.LISTING
                        })
                    },
                    Ke = function() {
                        Ze && (S((0, h.IT)(null)), S((0, h.lr)(Ze)), S((0, h.Bq)("Create Subscription Role"))), Qe({
                            title: X,
                            listingType: "subscription",
                            isCreating: !0
                        })
                    },
                    Ye = function(e) {
                        Qe({
                            title: "subscription" === e.listingType ? "Edit Subscrtiption" : "Edit Listing",
                            data: e,
                            isEditing: !0,
                            listingType: e.listingType
                        })
                    },
                    et = function(e) {
                        Qe({
                            title: "Delete Listing",
                            data: e,
                            isDeleting: !0,
                            listingType: e.listingType
                        })
                    },
                    tt = function(e) {
                        Qe({
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
                        var i = (0, r.Z)(ae),
                            a = [i[n], i[t]];
                        i[t] = a[0], i[n] = a[1], se(i), ue(i)
                    },
                    it = function() {
                        ye(!1), xe({}), S((0, h.IT)(null)), S((0, h.Bq)("Create Subscription")), S((0, h.BQ)(!1)), S((0, y.rk)())
                    };
                return b.createElement(b.Fragment, null, b.createElement(d.JX, {
                    className: "tw-@container/store tw-gap-4"
                }, we && b.createElement("div", {
                    className: "tw-w-full tw-h-full tw-opacity-75 tw-bg-black tw-fixed tw-z-10 tw-top-0 tw-left-0"
                }), b.createElement(d.zx, {
                    neutral: !0,
                    type: "button",
                    containerClasses: "tw-w-fit",
                    onClick: function() {
                        return k("/home/marketplace/storefront/stores")
                    }
                }, b.createElement(d.$1, {
                    icon: o.A3
                }), " Back to All Stores"), b.createElement(d.JX, {
                    className: "@xs/store:tw-flex-row tw-capitalize tw-justify-between"
                }, b.createElement(d.X2, {
                    className: "tw-items-align"
                }, b.createElement("h4", {
                    className: "tw-mr-2"
                }, null == Ne ? void 0 : Ne.displayName), (null == Ne ? void 0 : Ne.storeType) && b.createElement(w.Z, {
                    storeType: null == Ne ? void 0 : Ne.storeType,
                    className: "tw-h-fit"
                })), b.createElement(d.X2, {
                    className: "tw-items-center tw-gap-2"
                }, b.createElement(d.$1, {
                    icon: s.di,
                    className: "tw-text-".concat(te ? "green" : "placeholder-text")
                }), b.createElement(d.K_, {
                    label: te ? "Published" : "Unpublished",
                    className: "tw-text-".concat(te ? "white" : "placeholder-text", " tw-gap-2"),
                    defaultChecked: te,
                    onChangeCallback: Je
                }))), "unpublished" === (null == Ne ? void 0 : Ne.storeStatus) && b.createElement(d.qX, {
                    type: "warn",
                    className: "tw-mt-2 tw-flex-row"
                }, "This store is disabled. Enable it so users can browse and purchase your listings."), b.createElement(M, {
                    isOrdering: we,
                    onFilterChange: function(e) {
                        V(e)
                    },
                    onOrder: function() {
                        pe(!0), n()
                    },
                    onCancelOrder: _e,
                    onSaveOrder: He,
                    onCreateListing: We,
                    groupLoading: Be,
                    onCreateSubscription: Ke,
                    searchParams: q,
                    storeType: null == Ne ? void 0 : Ne.storeType,
                    orderingDisabled: 0 === ae.length
                }), b.createElement(d.JX, {
                    className: "tw-gap-3 ".concat(we ? "tw-z-20" : null)
                }, we && b.createElement(b.Fragment, null, b.createElement(d.qX, {
                    type: "dark",
                    hideIcon: !0,
                    className: "tw-m-0 tw-hidden sm:tw-block"
                }, "Drag the store items to reorder them, don’t forget to click on ", b.createElement("strong", null, "Save"), " after finishing changes."), b.createElement(d.qX, {
                    type: "dark",
                    hideIcon: !0,
                    className: "tw-m-0 tw-block sm:tw-hidden"
                }, "Click the arrows of store items to reorder them, don’t forget to click on ", b.createElement("strong", null, "Save"), " after finishing changes.")), Ce || je ? b.createElement("div", {
                    className: "tw-container tw-flex tw-justify-center tw-p-10"
                }, b.createElement(m.Z, {
                    loading: !0
                })) : ke || Fe ? b.createElement("div", {
                    className: "tw-container tw-flex tw-flex-col tw-justify-center tw-p-10"
                }, b.createElement("p", null, "Error loading sales data:"), b.createElement("code", null, null !== (Re = (Ie || Ue).data.error.message) && void 0 !== Re ? Re : "Unknown error")) : Se && 0 === ae.length ? $.listingType && "all" !== $.listingType ? b.createElement(C, {
                    storeType: null == Ne ? void 0 : Ne.storeType,
                    createListing: "group" === (null == Ne ? void 0 : Ne.storeType) ? Ke : We,
                    content: "No results found for this listing type"
                }) : $.searchValue && "" !== $.searchValue ? b.createElement(C, {
                    storeType: null == Ne ? void 0 : Ne.storeType,
                    createListing: "group" === (null == Ne ? void 0 : Ne.storeType) ? Ke : We,
                    content: "No results found for this search query"
                }) : b.createElement(C, {
                    storeType: null == Ne ? void 0 : Ne.storeType,
                    createListing: "group" === (null == Ne ? void 0 : Ne.storeType) ? Ke : We
                }) : Se ? ae.map((function(e, t) {
                    return b.createElement("div", {
                        key: e.id,
                        className: "".concat(we ? "sm:tw-select-none sm:tw-cursor-move" : ""),
                        draggable: we,
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
                                        s = (0, a.Z)(i, 1)[0];
                                    r.splice(t, 0, s), se(r), ue(r)
                                }
                            }(e, t)
                        }
                    }, b.createElement(J, {
                        isOrdering: we,
                        listingData: e,
                        editListingCallback: Ye,
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
                })) : void 0)), b.createElement(d.u_, {
                    title: ($e = Ee, Ve = $e.isCreating, Me = $e.listingType, Ge = $e.title, Ve && "subscription" === Me ? X : Ve ? L : Ge),
                    isVisible: ve,
                    onBackCallback: B || D ? function() {
                        B && S((0, h.Bq)(B)), D && S((0, y.Bq)(D))
                    } : null,
                    onClose: it,
                    width: "100%",
                    centered: !1,
                    overflow: "auto",
                    noClose: P,
                    hideTitle: z,
                    disableBackdropClick: !0,
                    slim: !P,
                    className: "".concat(P ? "tw-bg-[#0A0A0D]" : "tw-bg-black")
                }, b.createElement(b.Suspense, {
                    fallback: b.createElement(m.Z, {
                        loading: !0
                    })
                }, ve && !Ee.data && "subscription" !== Ee.listingType && b.createElement(G, {
                    onClose: it,
                    store: Ne
                }), ve && !Ee.data && "subscription" === Ee.listingType && b.createElement(K, {
                    user: N,
                    onClose: it,
                    groupData: Ze
                }), ve && Ee.isEditing && Ee.data && "subscription" !== Ee.listingType && b.createElement(R, {
                    onClose: it,
                    onDelete: et,
                    listingId: Ee.data.id,
                    store: Ne
                }), ve && Ee.isEditing && Ee.data && "subscription" === Ee.listingType && b.createElement(Q, {
                    onClose: it,
                    listingId: Ee.data.id
                }), ve && Ee.isDeleting && "subscription" !== Ee.listingType && b.createElement(_, {
                    onCancelCallback: it,
                    listing: Ee.data
                }), ve && Ee.isDeleting && "subscription" === Ee.listingType && b.createElement(W, {
                    onCancelCallback: it,
                    listingId: Ee.data.id
                }), ve && Ee.isPublishing && b.createElement(H, {
                    onClose: it,
                    listing: Ee.data
                }))))
            }
        },
        36183: (e, t, n) => {
            n.d(t, {
                Ci: () => l,
                j6: () => c,
                md: () => o,
                mt: () => u
            });
            var r = n(45987),
                i = n(61509),
                a = ["storeId"],
                s = i.S.injectEndpoints({
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
                                        n = (0, r.Z)(e, a);
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
//# sourceMappingURL=00a4c6502969f6b63877466b5e9fa131fd611521bf4821d8b6bfb8ebc490faa8.js.map