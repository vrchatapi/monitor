"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3642], {
        33642: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => A
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
                m = n(96985),
                f = n(72998),
                p = n(95896),
                g = n(83807),
                v = n(22202),
                b = n(41255),
                x = n(16869),
                y = n(67978),
                h = n(36183),
                E = n(39270),
                C = n(64358),
                k = n(45697),
                P = n.n(k),
                I = n(67294),
                j = n(32981),
                O = n(53637),
                L = n(25423),
                T = n(80938),
                N = n(99878);

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

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? D(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Z = (0, I.lazy)((function() {
                    return Promise.all([n.e(2027), n.e(8043), n.e(1244), n.e(2704), n.e(7995)]).then(n.bind(n, 22704))
                })),
                z = function(e) {
                    var t = e.store,
                        n = void 0 === t ? null : t,
                        i = e.listingId,
                        u = e.onClose,
                        k = void 0 === u ? function() {} : u,
                        P = e.onDelete,
                        D = void 0 === P ? function() {} : P,
                        z = (0, j.I0)(),
                        A = (0, v.XC)().data,
                        X = (0, j.v9)((function(e) {
                            return e.listingFlow
                        })),
                        F = X.isPreviewOpen,
                        M = X.selectedProducts,
                        Y = (0, I.useState)("listingInformation"),
                        G = (0, a.Z)(Y, 2),
                        $ = G[0],
                        _ = G[1],
                        q = (0, I.useState)(null),
                        R = (0, a.Z)(q, 2),
                        H = R[0],
                        J = R[1],
                        V = (0, I.useState)({}),
                        B = (0, a.Z)(V, 2),
                        Q = B[0],
                        U = B[1],
                        K = (0, I.useState)(!1),
                        W = (0, a.Z)(K, 2),
                        ee = W[0],
                        te = W[1],
                        ne = (0, I.useMemo)((function() {
                            return M.filter((function(e) {
                                return e.avatarId
                            })).map((function(e) {
                                return e.avatarId
                            }))
                        }), [M]),
                        re = (0, x.mr)({
                            listingId: i,
                            hydrateProducts: !0,
                            hydrateStores: !0
                        }, {
                            skip: !i
                        }),
                        ie = re.data,
                        ae = re.isLoading,
                        se = (re.isError, re.error, (0, I.useMemo)((function() {
                            return "permanent" === (null == ie ? void 0 : ie.listingType)
                        }), [ie])),
                        le = (0, y.x3)({
                            userId: A.id,
                            archived: !1
                        }, {
                            skip: !A
                        }),
                        oe = le.data,
                        ce = le.isLoading,
                        ue = (le.isError, le.error, (0, h.Ci)({
                            sellerId: A.id,
                            managementPov: !0
                        }, {
                            skip: !A
                        })),
                        de = ue.data,
                        we = ue.isLoading,
                        me = (ue.isError, ue.error, (0, b.Qb)({
                            avatarIds: ne
                        }, {
                            skip: !ne.length
                        })),
                        fe = me.data,
                        pe = (me.isFetching, me.isError, me.error, (0, I.useMemo)((function() {
                            return (null != fe ? fe : []).map((function(e) {
                                return {
                                    fileId: e.id,
                                    fileVersion: e.latestVersionFile.version,
                                    order: null == e ? void 0 : e.order
                                }
                            }))
                        }), [fe])),
                        ge = (0, x.Ij)(),
                        ve = (0, a.Z)(ge, 2),
                        be = ve[0],
                        xe = ve[1],
                        ye = (xe.isLoading, xe.isSuccess, xe.isError, xe.error, !0 === (null == Q ? void 0 : Q.active) && !1 === (null == ie ? void 0 : ie.active));
                    (0, I.useEffect)((function() {
                        return function() {
                            z((0, E.rk)())
                        }
                    }), []), (0, I.useEffect)((function() {
                        ie && (J(ie), z((0, E.fX)(ie.products)), z((0, E.TY)(ie.listingType)))
                    }), [ie]);
                    var he = function(e) {
                            J((function(t) {
                                return S(S({}, t), e)
                            })), U((function(t) {
                                return S(S({}, t), e)
                            }))
                        },
                        Ee = (0, g.AA)(null == ie ? void 0 : ie.products),
                        Ce = Ee.hasAllProductsDisabled,
                        ke = Ee.hasSomeProductsDisabled,
                        Pe = Ee.hasNoProductsDisabled,
                        Ie = function() {
                            var e = (0, r.Z)(d().mark((function e() {
                                var t, n, r;
                                return d().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = function() {
                                                z((0, w.d)({
                                                    title: "Listing updated successfully!",
                                                    icon: c.f8,
                                                    message: "Your listing has been updated successfully!",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), k()
                                            }, e.prev = 1, e.next = 4, be(S({
                                                listingId: ie.id
                                            }, Q)).unwrap();
                                        case 4:
                                            t(), e.next = 11;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), z((0, w.d)({
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
                        je = function(e) {
                            z((0, E.Td)(null)), z((0, E.xj)(e))
                        },
                        Oe = (0, I.useMemo)((function() {
                            if (!H) return !1;
                            if ("duration" === H.listingType) {
                                var e = [p.PG.MIN, p.PG.HOUR, p.PG.DAY].includes(H.durationType),
                                    t = (0, C.qG)(ie.durationType, ie.duration) && Number.isInteger(Number(H.duration)) && /^\d+$/.test(H.duration);
                                return e && t
                            }
                            var n = H.displayName.length >= 3,
                                r = se ? p.YC : p._C,
                                i = H.priceTokens >= p.zD && H.priceTokens <= r && Number.isInteger(parseInt(H.priceTokens)) && /^\d+$/.test(H.priceTokens),
                                a = H.products.length > 0 && H.products.length <= p._1;
                            return n && i && a && Pe
                        }), [H]),
                        Le = ae || ce || we;
                    return I.createElement(I.Fragment, null, Le && I.createElement("div", null, "Loading..."), !Le && H && !ee && !F && I.createElement(m.JX, {
                        className: "tw-w-full tw-relative"
                    }, (Ce || ke) && I.createElement(m.qX, {
                        title: Ce ? "Listing is not purchasable" : "Listing contains some unavailable products",
                        type: "warn",
                        message: Ce ? "This listing cannot be purchased because it contains only products that are not eligible for sale. Resolve the issues to re-enable the listing and make it available to buyers." : "This listing is still available for purchase, but buyers will not receive the unavailable products included in the listing."
                    }), I.createElement(f.Z, {
                        onChange: _,
                        justify: "left",
                        selected: $,
                        tabs: [{
                            name: "Listing Information",
                            id: "listingInformation",
                            condition: !0
                        }, {
                            name: "Store Availability",
                            id: "storeAvailability",
                            condition: !0
                        }]
                    }), I.createElement("div", {
                        className: "tw-w-full tw-relative"
                    }, "listingInformation" === $ && I.createElement(L.Z, {
                        originalListing: ie,
                        editedListing: H,
                        onDataChange: he,
                        isEditing: !0,
                        products: oe,
                        listingType: H.listingType,
                        productsLoading: ce
                    }), "storeAvailability" === $ && I.createElement(N.Z, {
                        activeListing: H,
                        onDataChange: he,
                        stores: de,
                        activeStore: n,
                        isEditing: !0
                    })), I.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, I.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-flex-auto"
                    }, I.createElement(m.zx, {
                        neutral: !0,
                        type: "button",
                        onClick: k,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Cancel"), I.createElement(m.zx, {
                        type: "button",
                        onClick: function() {
                            return D(ie)
                        },
                        neutral: !0,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Delete Listing")), I.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-justify-end tw-flex-auto tw-flex-wrap"
                    }, se && I.createElement(m.zx, {
                        transparent: !0,
                        containerClasses: "tw-w-fit md:tw-max-w-[160px] tw-flex-1",
                        onClick: function() {
                            return je(!0)
                        }
                    }, I.createElement(m.$1, {
                        icon: l.wl,
                        className: "tw-mr-2"
                    }), "Preview Listing"), I.createElement(m.zx, {
                        type: "button",
                        onClick: ye ? function() {
                            te(!0)
                        } : Ie,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1",
                        disabled: !Oe
                    }, "Save")))), ee && I.createElement(m.JX, null, I.createElement(T.Z, null), I.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, I.createElement(m.zx, {
                        neutral: !0,
                        type: "button",
                        onClick: function() {
                            return te(!1)
                        },
                        containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                    }, "Back"), I.createElement(m.zx, {
                        type: "button",
                        onClick: Ie,
                        containerClasses: "sm:tw-max-w-[240px] tw-flex-1",
                        disabled: !Oe
                    }, "Publish Listing"))), F && se && I.createElement(O.Z, {
                        className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-rounded-lg tw-p-0 tw-min-w-[340px]"
                    }, I.createElement(m.X2, {
                        className: "tw-justify-center tw-items-center tw-mb-3"
                    }, I.createElement(m.zx, {
                        neutral: !0,
                        containerClasses: "tw-w-fit",
                        onClick: function() {
                            return z((0, E.xj)(!1)), void z((0, E.Td)("Edit Listing"))
                        }
                    }, I.createElement(m.$1, {
                        icon: s.YI
                    }), " Close Preview")), I.createElement(I.Suspense, {
                        fallback: I.createElement("div", null, "Loading...")
                    }, I.createElement("div", {
                        className: "tw-border tw-border-solid  tw-border-hr-line-color tw-rounded-lg tw-p-5"
                    }, I.createElement(Z, {
                        isPreview: !0,
                        products: M,
                        galleryImages: pe,
                        listing: H,
                        onClose: function() {
                            return je(!1)
                        }
                    })))))
                };
            z.propTypes = {
                listingId: P().string.isRequired,
                stores: P().array,
                onCancel: P().func,
                onDelete: P().func
            };
            const A = z
        }
    }
]);
//# sourceMappingURL=95d0788f31123ffb17c940e7bb926b43142b10d7250b5b1ef6cddcd8d266e655.js.map