"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3642], {
        33642: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => P
            });
            var n = r(15861),
                a = r(4942),
                o = r(54546),
                i = r(76553),
                s = r(6811),
                c = r(64687),
                l = r.n(c),
                u = r(64258),
                d = r(14411),
                p = r(95896),
                w = r(22202),
                f = r(16869),
                b = r(67978),
                m = r(36183),
                g = r(64358),
                v = r(45697),
                y = r.n(v),
                x = r(67294),
                h = r(32981),
                E = r(9401),
                O = r(99878);

            function k(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var j = function(e) {
                var t = e.store,
                    r = void 0 === t ? null : t,
                    a = e.listing,
                    c = e.onClose,
                    v = void 0 === c ? function() {} : c,
                    y = e.onDelete,
                    k = void 0 === y ? function() {} : y,
                    j = (0, h.I0)(),
                    P = (0, w.XC)().data,
                    N = (0, x.useState)(0),
                    D = (0, o.Z)(N, 2),
                    S = D[0],
                    I = D[1],
                    L = (0, x.useState)(a),
                    T = (0, o.Z)(L, 2),
                    Z = T[0],
                    G = T[1],
                    z = (0, x.useState)({}),
                    F = (0, o.Z)(z, 2),
                    X = F[0],
                    _ = F[1],
                    q = (0, b.x3)({
                        userId: P.id,
                        archived: !1
                    }, {
                        skip: !P
                    }),
                    A = q.data,
                    H = q.isLoading,
                    M = (q.isError, q.error, (0, m.Ci)({
                        sellerId: P.id,
                        managementPov: !0
                    }, {
                        skip: !P
                    })),
                    R = M.data,
                    Y = (M.isLoading, M.isError, M.error, (0, f.Ij)()),
                    J = (0, o.Z)(Y, 2),
                    U = J[0],
                    B = J[1],
                    K = (B.isLoading, B.isSuccess, B.isError, B.error, function(e) {
                        G(C(C({}, Z), e)), _(C(C({}, X), e))
                    }),
                    Q = function() {
                        var e = (0, n.Z)(l().mark((function e() {
                            var t, r, n;
                            return l().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = function() {
                                            j((0, u.d)({
                                                title: "Listing updated successfully!",
                                                icon: s.f8,
                                                message: "Your listing has been updated successfully!",
                                                color: "success",
                                                timeout: 3e3
                                            })), v()
                                        }, e.prev = 1, e.next = 4, U(C({
                                            listingId: a.id
                                        }, X)).unwrap();
                                    case 4:
                                        t(), e.next = 11;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), j((0, u.d)({
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
                    V = (0, x.useMemo)((function() {
                        if ("duration" === Z.listingType) {
                            var e = [p.PG.MIN, p.PG.HOUR, p.PG.DAY].includes(Z.durationType),
                                t = (0, g.qG)(a.durationType, a.duration) && Number.isInteger(parseFloat(Z.duration));
                            return e && t
                        }
                        var r = Z.displayName.length >= 3,
                            n = Z.priceTokens >= 100 && Z.priceTokens <= 1e4 && Number.isInteger(parseFloat(Z.priceTokens)),
                            o = Z.products.length > 0 && Z.products.length <= p._1;
                        return r && n && o
                    }), [Z]);
                return x.createElement(d.JX, {
                    className: "tw-w-full tw-relative"
                }, x.createElement(d.X2, {
                    className: "tw-gap-5 tw-mb-6"
                }, x.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return I(0)
                    },
                    className: "tw-bg-transparent tw-py-2 tw-border-0 tw-border-b-2 tw-border-solid ".concat(0 === S ? "tw-border-teal-accent" : "tw-border-transparent")
                }, "Listing Information"), x.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return I(1)
                    },
                    className: "tw-bg-transparent tw-py-2 tw-border-0 tw-border-b-2 tw-border-solid ".concat(1 === S ? "tw-border-solid tw-border-teal-accent" : "tw-border-transparent")
                }, "Store Availability")), x.createElement("div", {
                    className: "tw-w-full tw-relative"
                }, 0 === S && x.createElement(E.Z, {
                    currentListing: Z,
                    onDataChange: K,
                    isEditing: !0,
                    products: A,
                    listingType: Z.listingType,
                    productsLoading: H
                }), 1 === S && x.createElement(O.Z, {
                    activeListing: Z,
                    onDataChange: K,
                    stores: R,
                    activeStore: r
                })), x.createElement("div", {
                    className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                }, x.createElement("div", {
                    className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-flex-1"
                }, x.createElement(d.zx, {
                    neutral: !0,
                    type: "button",
                    onClick: v,
                    containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                }, "Cancel"), x.createElement(d.zx, {
                    type: "button",
                    onClick: function() {
                        return k(a)
                    },
                    danger: !0,
                    containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                }, "Delete Listing")), x.createElement(d.zx, {
                    type: "button",
                    onClick: Q,
                    containerClasses: "sm:tw-max-w-[240px] tw-flex-1",
                    disabled: !V
                }, "Save")))
            };
            j.propTypes = {
                listing: y().object.isRequired,
                stores: y().array,
                onCancel: y().func,
                onDelete: y().func
            };
            const P = j
        }
    }
]);
//# sourceMappingURL=bfcb68955fc3d6cb8ec014f21df48e6585ff0031eb6d6af8e592f662e2a81bbb.js.map