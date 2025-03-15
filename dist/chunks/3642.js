"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3642], {
        33642: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => I
            });
            var n = r(15861),
                a = r(4942),
                i = r(54546),
                o = r(76553),
                s = r(6811),
                c = r(64687),
                l = r.n(c),
                u = r(64258),
                d = r(14411),
                p = r(95896),
                w = r(22202),
                f = r(16869),
                g = r(67978),
                m = r(36183),
                b = r(39270),
                v = r(64358),
                y = r(45697),
                x = r.n(y),
                E = r(67294),
                h = r(32981),
                k = r(68420),
                O = r(99878);

            function C(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var P = function(e) {
                var t = e.store,
                    r = void 0 === t ? null : t,
                    a = e.listingId,
                    c = e.onClose,
                    y = void 0 === c ? function() {} : c,
                    x = e.onDelete,
                    C = void 0 === x ? function() {} : x,
                    P = (0, h.I0)(),
                    I = (0, w.XC)().data,
                    L = (0, E.useState)(0),
                    N = (0, i.Z)(L, 2),
                    S = N[0],
                    T = N[1],
                    D = (0, E.useState)(null),
                    Z = (0, i.Z)(D, 2),
                    F = Z[0],
                    G = Z[1],
                    X = (0, E.useState)({}),
                    z = (0, i.Z)(X, 2),
                    Y = z[0],
                    _ = z[1],
                    q = (0, f.mr)({
                        listingId: a,
                        hydrateProducts: !0,
                        hydrateStores: !0
                    }, {
                        skip: !a
                    }),
                    A = q.data,
                    H = q.isLoading,
                    M = (q.isError, q.error, (0, g.x3)({
                        userId: I.id,
                        archived: !1
                    }, {
                        skip: !I
                    })),
                    R = M.data,
                    J = M.isLoading,
                    U = (M.isError, M.error, (0, m.Ci)({
                        sellerId: I.id,
                        managementPov: !0
                    }, {
                        skip: !I
                    })),
                    B = U.data,
                    K = U.isLoading,
                    Q = (U.isError, U.error, (0, f.Ij)()),
                    V = (0, i.Z)(Q, 2),
                    W = V[0],
                    $ = V[1];
                $.isLoading, $.isSuccess, $.isError, $.error;
                (0, E.useEffect)((function() {
                    return function() {
                        P((0, b.rk)())
                    }
                }), []), (0, E.useEffect)((function() {
                    A && (G(A), P((0, b.fX)(A.products)), P((0, b.TY)(A.listingType)))
                }), [A]);
                var ee = function(e) {
                        G(j(j({}, F), e)), _(j(j({}, Y), e))
                    },
                    te = function() {
                        var e = (0, n.Z)(l().mark((function e() {
                            var t, r, n;
                            return l().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = function() {
                                            P((0, u.d)({
                                                title: "Listing updated successfully!",
                                                icon: s.f8,
                                                message: "Your listing has been updated successfully!",
                                                color: "success",
                                                timeout: 3e3
                                            })), y()
                                        }, e.prev = 1, e.next = 4, W(j({
                                            listingId: A.id
                                        }, Y)).unwrap();
                                    case 4:
                                        t(), e.next = 11;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), P((0, u.d)({
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
                    re = (0, E.useMemo)((function() {
                        if (!F) return !1;
                        if ("duration" === F.listingType) {
                            var e = [p.PG.MIN, p.PG.HOUR, p.PG.DAY].includes(F.durationType),
                                t = (0, v.qG)(A.durationType, A.duration) && Number.isInteger(parseFloat(F.duration));
                            return e && t
                        }
                        var r = F.displayName.length >= 3,
                            n = F.priceTokens >= 100 && F.priceTokens <= 1e4 && Number.isInteger(parseFloat(F.priceTokens)),
                            a = F.products.length > 0 && F.products.length <= p._1;
                        return r && n && a
                    }), [F]),
                    ne = H || J || K;
                return E.createElement(E.Fragment, null, ne && E.createElement("div", null, "Loading..."), !ne && F && E.createElement(d.JX, {
                    className: "tw-w-full tw-relative"
                }, E.createElement(d.X2, {
                    className: "tw-gap-5 tw-mb-6"
                }, E.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return T(0)
                    },
                    className: "tw-bg-transparent tw-py-2 tw-px-0 tw-border-0 tw-border-b-2 tw-border-solid ".concat(0 === S ? "tw-border-teal-accent" : "tw-border-transparent")
                }, "Listing Information"), E.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return T(1)
                    },
                    className: "tw-bg-transparent tw-py-2 tw-px-0 tw-border-0 tw-border-b-2 tw-border-solid ".concat(1 === S ? "tw-border-solid tw-border-teal-accent" : "tw-border-transparent")
                }, "Store Availability")), E.createElement("div", {
                    className: "tw-w-full tw-relative"
                }, 0 === S && E.createElement(k.Z, {
                    originalListing: A,
                    editedListing: F,
                    onDataChange: ee,
                    isEditing: !0,
                    products: R,
                    listingType: F.listingType,
                    productsLoading: J
                }), 1 === S && E.createElement(O.Z, {
                    activeListing: F,
                    onDataChange: ee,
                    stores: B,
                    activeStore: r
                })), E.createElement("div", {
                    className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                }, E.createElement("div", {
                    className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-flex-1"
                }, E.createElement(d.zx, {
                    neutral: !0,
                    type: "button",
                    onClick: y,
                    containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                }, "Cancel"), E.createElement(d.zx, {
                    type: "button",
                    onClick: function() {
                        return C(A)
                    },
                    danger: !0,
                    containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                }, "Delete Listing")), E.createElement(d.zx, {
                    type: "button",
                    onClick: te,
                    containerClasses: "sm:tw-max-w-[240px] tw-flex-1",
                    disabled: !re
                }, "Save"))))
            };
            P.propTypes = {
                listingId: x().string.isRequired,
                stores: x().array,
                onCancel: x().func,
                onDelete: x().func
            };
            const I = P
        }
    }
]);
//# sourceMappingURL=7aada0986ab9505be47117556d6625bfd1da45881a5941cd28ea0fb23fdf63a3.js.map