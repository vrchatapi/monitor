"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3642], {
        33642: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => M
            });
            var r = n(15861),
                i = n(4942),
                a = n(54546),
                s = n(68149),
                l = n(90502),
                o = n(76553),
                c = n(6811),
                u = n(64687),
                d = n.n(u),
                w = n(64258),
                m = n(80988),
                f = n(90068),
                p = n(72998),
                g = n(95896),
                v = n(69116),
                b = n(22202),
                x = n(41255),
                y = n(16869),
                h = n(67978),
                E = n(36183),
                C = n(39270),
                k = n(64358),
                P = n(45697),
                I = n.n(P),
                j = n(67294),
                O = n(32981),
                L = n(53637),
                T = n(25423),
                N = n(80938),
                D = n(99878);

            function S(e, t) {
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
                    t % 2 ? S(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var z = (0, j.lazy)((function() {
                    return Promise.all([n.e(2027), n.e(3348), n.e(9336), n.e(7995)]).then(n.bind(n, 29336))
                })),
                A = function(e) {
                    var t = e.store,
                        n = void 0 === t ? null : t,
                        i = e.listingId,
                        u = e.onClose,
                        P = void 0 === u ? function() {} : u,
                        I = e.onDelete,
                        S = void 0 === I ? function() {} : I,
                        A = (0, O.I0)(),
                        M = (0, f.P2)().showContentViolationModal,
                        X = (0, b.XC)().data,
                        F = (0, O.v9)((function(e) {
                            return e.listingFlow
                        })),
                        Y = F.isPreviewOpen,
                        G = F.selectedProducts,
                        $ = (0, j.useState)("listingInformation"),
                        _ = (0, a.Z)($, 2),
                        q = _[0],
                        R = _[1],
                        V = (0, j.useState)(null),
                        H = (0, a.Z)(V, 2),
                        J = H[0],
                        B = H[1],
                        Q = (0, j.useState)({}),
                        U = (0, a.Z)(Q, 2),
                        K = U[0],
                        W = U[1],
                        ee = (0, j.useState)(!1),
                        te = (0, a.Z)(ee, 2),
                        ne = te[0],
                        re = te[1],
                        ie = (0, j.useMemo)((function() {
                            return G.filter((function(e) {
                                return e.avatarId
                            })).map((function(e) {
                                return e.avatarId
                            }))
                        }), [G]),
                        ae = (0, y.mr)({
                            listingId: i,
                            hydrateProducts: !0,
                            hydrateStores: !0
                        }, {
                            skip: !i
                        }),
                        se = ae.data,
                        le = ae.isLoading,
                        oe = (ae.isError, ae.error, (0, j.useMemo)((function() {
                            return "permanent" === (null == se ? void 0 : se.listingType)
                        }), [se])),
                        ce = (0, h.x3)({
                            userId: X.id,
                            archived: !1
                        }, {
                            skip: !X
                        }),
                        ue = ce.data,
                        de = ce.isLoading,
                        we = (ce.isError, ce.error, (0, E.Ci)({
                            sellerId: X.id,
                            managementPov: !0
                        }, {
                            skip: !X
                        })),
                        me = we.data,
                        fe = we.isLoading,
                        pe = (we.isError, we.error, (0, x.Qb)({
                            avatarIds: ie
                        }, {
                            skip: !ie.length
                        })),
                        ge = pe.data,
                        ve = (pe.isFetching, pe.isError, pe.error, (0, j.useMemo)((function() {
                            return (null != ge ? ge : []).map((function(e) {
                                return {
                                    fileId: e.id,
                                    fileVersion: e.latestVersionFile.version,
                                    order: null == e ? void 0 : e.order
                                }
                            }))
                        }), [ge])),
                        be = (0, y.Ij)(),
                        xe = (0, a.Z)(be, 2),
                        ye = xe[0],
                        he = xe[1],
                        Ee = (he.isLoading, he.isSuccess, he.isError, he.error, !0 === (null == K ? void 0 : K.active) && !1 === (null == se ? void 0 : se.active));
                    (0, j.useEffect)((function() {
                        return function() {
                            A((0, C.rk)())
                        }
                    }), []), (0, j.useEffect)((function() {
                        se && (B(se), A((0, C.fX)(se.products)), A((0, C.TY)(se.listingType)))
                    }), [se]);
                    var Ce = function(e) {
                            B((function(t) {
                                return Z(Z({}, t), e)
                            })), W((function(t) {
                                return Z(Z({}, t), e)
                            }))
                        },
                        ke = (0, v.AA)(null == se ? void 0 : se.products),
                        Pe = ke.hasAllProductsDisabled,
                        Ie = ke.hasSomeProductsDisabled,
                        je = ke.hasNoProductsDisabled,
                        Oe = function() {
                            var e = (0, r.Z)(d().mark((function e() {
                                var t, n, r;
                                return d().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = function() {
                                                A((0, w.d)({
                                                    title: "Listing updated successfully!",
                                                    icon: c.f8,
                                                    message: "Your listing has been updated successfully!",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), P()
                                            }, e.prev = 1, e.next = 4, ye(Z({
                                                listingId: se.id
                                            }, K)).unwrap();
                                        case 4:
                                            t(), e.next = 13;
                                            break;
                                        case 7:
                                            if (e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), !M({
                                                    error: e.t0
                                                })) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 12:
                                            A((0, w.d)({
                                                title: "Failed to update listing!",
                                                icon: o.eH,
                                                message: null !== (n = null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : "Something went wrong",
                                                color: "danger",
                                                timeout: 3e3
                                            }));
                                        case 13:
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
                        Le = function(e) {
                            A((0, C.Td)(null)), A((0, C.xj)(e))
                        },
                        Te = (0, j.useMemo)((function() {
                            if (!J) return !1;
                            if ("duration" === J.listingType) {
                                var e = [g.PG.MIN, g.PG.HOUR, g.PG.DAY].includes(J.durationType),
                                    t = (0, k.qG)(se.durationType, se.duration) && Number.isInteger(Number(J.duration)) && /^\d+$/.test(J.duration);
                                return e && t
                            }
                            var n = J.displayName.length >= 3,
                                r = oe ? g.YC : g._C,
                                i = J.priceTokens >= g.zD && J.priceTokens <= r && Number.isInteger(parseInt(J.priceTokens)) && /^\d+$/.test(J.priceTokens),
                                a = J.products.length > 0 && J.products.length <= g._1;
                            return n && i && a && je
                        }), [J]),
                        Ne = le || de || fe;
                    return j.createElement(j.Fragment, null, Ne && j.createElement("div", null, "Loading..."), !Ne && J && !ne && !Y && j.createElement(m.JX, {
                        className: "tw-w-full tw-relative"
                    }, (Pe || Ie) && j.createElement(m.qX, {
                        title: Pe ? "Listing is not purchasable" : "Listing contains some unavailable products",
                        type: "warn",
                        message: Pe ? "This listing cannot be purchased because it contains only products that are not eligible for sale. Resolve the issues to re-enable the listing and make it available to buyers." : "This listing is still available for purchase, but buyers will not receive the unavailable products included in the listing."
                    }), j.createElement(p.Z, {
                        onChange: R,
                        justify: "left",
                        selected: q,
                        tabs: [{
                            name: "Listing Information",
                            id: "listingInformation",
                            condition: !0
                        }, {
                            name: "Store Availability",
                            id: "storeAvailability",
                            condition: !0
                        }]
                    }), j.createElement("div", {
                        className: "tw-w-full tw-relative"
                    }, "listingInformation" === q && j.createElement(T.Z, {
                        originalListing: se,
                        editedListing: J,
                        onDataChange: Ce,
                        isEditing: !0,
                        products: ue,
                        listingType: J.listingType,
                        productsLoading: de
                    }), "storeAvailability" === q && j.createElement(D.Z, {
                        activeListing: J,
                        onDataChange: Ce,
                        stores: me,
                        activeStore: n,
                        isEditing: !0
                    })), j.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, j.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-flex-auto"
                    }, j.createElement(m.zx, {
                        neutral: !0,
                        type: "button",
                        onClick: P,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Cancel"), j.createElement(m.zx, {
                        type: "button",
                        onClick: function() {
                            return S(se)
                        },
                        neutral: !0,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Delete Listing")), j.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-justify-end tw-flex-auto tw-flex-wrap"
                    }, oe && j.createElement(m.zx, {
                        transparent: !0,
                        containerClasses: "tw-w-fit md:tw-max-w-[160px] tw-flex-1",
                        onClick: function() {
                            return Le(!0)
                        }
                    }, j.createElement(m.$1, {
                        icon: l.wl,
                        className: "tw-mr-2"
                    }), "Preview Listing"), j.createElement(m.zx, {
                        type: "button",
                        onClick: Ee ? function() {
                            re(!0)
                        } : Oe,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1",
                        disabled: !Te
                    }, "Save")))), ne && j.createElement(m.JX, null, j.createElement(N.Z, null), j.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, j.createElement(m.zx, {
                        neutral: !0,
                        type: "button",
                        onClick: function() {
                            return re(!1)
                        },
                        containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                    }, "Back"), j.createElement(m.zx, {
                        type: "button",
                        onClick: Oe,
                        containerClasses: "sm:tw-max-w-[240px] tw-flex-1",
                        disabled: !Te
                    }, "Publish Listing"))), Y && oe && j.createElement(L.Z, {
                        className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-rounded-lg tw-p-0 tw-min-w-[340px]"
                    }, j.createElement(m.X2, {
                        className: "tw-justify-center tw-items-center tw-mb-3"
                    }, j.createElement(m.zx, {
                        neutral: !0,
                        containerClasses: "tw-w-fit",
                        onClick: function() {
                            return A((0, C.xj)(!1)), void A((0, C.Td)("Edit Listing"))
                        }
                    }, j.createElement(m.$1, {
                        icon: s.YI
                    }), " Close Preview")), j.createElement(j.Suspense, {
                        fallback: j.createElement("div", null, "Loading...")
                    }, j.createElement("div", {
                        className: "tw-border tw-border-solid  tw-border-hr-line-color tw-rounded-lg tw-p-5"
                    }, j.createElement(z, {
                        isPreview: !0,
                        products: G,
                        galleryImages: ve,
                        listing: J,
                        onClose: function() {
                            return Le(!1)
                        }
                    })))))
                };
            A.propTypes = {
                listingId: I().string.isRequired,
                stores: I().array,
                onCancel: I().func,
                onDelete: I().func
            };
            const M = A
        }
    }
]);
//# sourceMappingURL=2e79cbcdacf1af377afe28423c8b784747fcb06e71b872831a2a5478af63f17c.js.map