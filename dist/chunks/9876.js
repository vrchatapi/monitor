"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9876], {
        97495(e, t, n) {
            n.r(t), n.d(t, {
                default: () => F
            });
            var r = n(10467),
                i = n(64467),
                a = n(82544),
                s = n(88213),
                l = n(34912),
                o = n(34496),
                c = n(42217),
                u = n(54756),
                d = n.n(u),
                w = n(65950),
                m = n(15033),
                f = n(97071),
                p = n(75174),
                g = n(31069),
                v = n(194),
                b = n(13951),
                y = n(31931),
                h = n(72784),
                x = n(6457),
                E = n(97087),
                k = n(70650),
                C = n(91069),
                A = n(5556),
                P = n.n(A),
                I = n(96540),
                T = n(6376),
                O = n(35169),
                j = n(24475),
                L = n(69886),
                N = n(15322);

            function D(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? D(Object(n), !0).forEach(function(t) {
                        (0, i.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var $ = (0, I.lazy)(function() {
                    return Promise.all([n.e(6955), n.e(5242), n.e(3456), n.e(2260)]).then(n.bind(n, 63456))
                }),
                M = function(e) {
                    var t = e.store,
                        n = void 0 === t ? null : t,
                        i = e.listingId,
                        u = e.onClose,
                        A = void 0 === u ? function() {} : u,
                        P = e.onDelete,
                        D = void 0 === P ? function() {} : P,
                        M = (0, T.wA)(),
                        F = (0, f.DF)().showContentViolationModal,
                        R = (0, b.P2)().data,
                        G = (0, T.d4)(function(e) {
                            return e.listingFlow
                        }),
                        H = G.isPreviewOpen,
                        V = G.selectedProducts,
                        X = (0, I.useState)("listingInformation"),
                        Y = (0, a.A)(X, 2),
                        _ = Y[0],
                        z = Y[1],
                        B = (0, I.useState)(null),
                        q = (0, a.A)(B, 2),
                        J = q[0],
                        Q = q[1],
                        U = (0, I.useState)({}),
                        Z = (0, a.A)(U, 2),
                        K = Z[0],
                        W = Z[1],
                        ee = (0, I.useState)(!1),
                        te = (0, a.A)(ee, 2),
                        ne = te[0],
                        re = te[1],
                        ie = (0, I.useMemo)(function() {
                            return V.filter(function(e) {
                                return e.avatarId
                            }).map(function(e) {
                                return e.avatarId
                            })
                        }, [V]),
                        ae = (0, h.Qt)({
                            listingId: i,
                            hydrateProducts: !0,
                            hydrateStores: !0
                        }, {
                            skip: !i
                        }),
                        se = ae.data,
                        le = ae.isLoading,
                        oe = (ae.isError, ae.error, (0, I.useMemo)(function() {
                            return "permanent" === (null == se ? void 0 : se.listingType)
                        }, [se])),
                        ce = (0, x.Cg)({
                            userId: R.id,
                            archived: !1
                        }, {
                            skip: !R
                        }),
                        ue = ce.data,
                        de = ce.isLoading,
                        we = (ce.isError, ce.error, (0, E._N)({
                            sellerId: R.id,
                            managementPov: !0
                        }, {
                            skip: !R
                        })),
                        me = we.data,
                        fe = we.isLoading,
                        pe = (we.isError, we.error, (0, y.Hg)({
                            avatarIds: ie
                        }, {
                            skip: !ie.length
                        })),
                        ge = pe.data,
                        ve = (pe.isFetching, pe.isError, pe.error, (0, I.useMemo)(function() {
                            return (null != ge ? ge : []).map(function(e) {
                                return {
                                    fileId: e.id,
                                    fileVersion: e.latestVersionFile.version,
                                    order: null == e ? void 0 : e.order
                                }
                            })
                        }, [ge])),
                        be = (0, h.m8)(),
                        ye = (0, a.A)(be, 2),
                        he = ye[0],
                        xe = ye[1],
                        Ee = (xe.isLoading, xe.isSuccess, xe.isError, xe.error, !0 === (null == K ? void 0 : K.active) && !1 === (null == se ? void 0 : se.active));
                    (0, I.useEffect)(function() {
                        return function() {
                            M((0, k.GS)())
                        }
                    }, []), (0, I.useEffect)(function() {
                        se && (Q(se), M((0, k.RE)(se.products)), M((0, k.mN)(se.listingType)))
                    }, [se]);
                    var ke = function(e) {
                            Q(function(t) {
                                return S(S({}, t), e)
                            }), W(function(t) {
                                return S(S({}, t), e)
                            })
                        },
                        Ce = (0, v.GZ)(null == se ? void 0 : se.products),
                        Ae = Ce.hasAllProductsDisabled,
                        Pe = Ce.hasSomeProductsDisabled,
                        Ie = Ce.hasNoProductsDisabled,
                        Te = function() {
                            var e = (0, r.A)(d().mark(function e() {
                                var t, n, r;
                                return d().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = function() {
                                                M((0, w.X)({
                                                    title: "Listing updated successfully!",
                                                    icon: c.SG,
                                                    message: "Your listing has been updated successfully!",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), A()
                                            }, e.prev = 1, e.next = 4, he(S({
                                                listingId: se.id
                                            }, K)).unwrap();
                                        case 4:
                                            t(), e.next = 13;
                                            break;
                                        case 7:
                                            if (e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), !F({
                                                    error: e.t0
                                                })) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 12:
                                            M((0, w.X)({
                                                title: "Failed to update listing!",
                                                icon: o.zp,
                                                message: null !== (n = null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : "Something went wrong",
                                                color: "danger",
                                                timeout: 3e3
                                            }));
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [1, 7]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Oe = function(e) {
                            M((0, k.D6)(null)), M((0, k.jT)(e))
                        },
                        je = (0, I.useMemo)(function() {
                            if (!J) return !1;
                            if ("duration" === J.listingType) {
                                var e = [g.yT.MIN, g.yT.HOUR, g.yT.DAY].includes(J.durationType),
                                    t = (0, C.XA)(se.durationType, se.duration) && Number.isInteger(Number(J.duration)) && /^\d+$/.test(J.duration);
                                return e && t
                            }
                            var n = J.displayName.length >= 3,
                                r = oe ? g.gw : g.Hd,
                                i = J.priceTokens >= g.pb && J.priceTokens <= r && Number.isInteger(parseInt(J.priceTokens)) && /^\d+$/.test(J.priceTokens),
                                a = J.products.length > 0 && J.products.length <= g.B8;
                            return n && i && a && Ie
                        }, [J]),
                        Le = le || de || fe;
                    return I.createElement(I.Fragment, null, Le && I.createElement("div", null, "Loading..."), !Le && J && !ne && !H && I.createElement(m.fv, {
                        className: "tw-w-full tw-relative"
                    }, (Ae || Pe) && I.createElement(m.$T, {
                        title: Ae ? "Listing is not purchasable" : "Listing contains some unavailable products",
                        type: "warn",
                        message: Ae ? "This listing cannot be purchased because it contains only products that are not eligible for sale. Resolve the issues to re-enable the listing and make it available to buyers." : "This listing is still available for purchase, but buyers will not receive the unavailable products included in the listing."
                    }), I.createElement(p.A, {
                        onChange: z,
                        justify: "left",
                        selected: _,
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
                    }, "listingInformation" === _ && I.createElement(j.A, {
                        originalListing: se,
                        editedListing: J,
                        onDataChange: ke,
                        isEditing: !0,
                        products: ue,
                        listingType: J.listingType,
                        productsLoading: de
                    }), "storeAvailability" === _ && I.createElement(N.A, {
                        activeListing: J,
                        onDataChange: ke,
                        stores: me,
                        activeStore: n,
                        isEditing: !0
                    })), I.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, I.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-flex-auto"
                    }, I.createElement(m.$n, {
                        neutral: !0,
                        type: "button",
                        onClick: A,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Cancel"), I.createElement(m.$n, {
                        type: "button",
                        onClick: function() {
                            return D(se)
                        },
                        neutral: !0,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Delete Listing")), I.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-justify-end tw-flex-auto tw-flex-wrap"
                    }, oe && I.createElement(m.$n, {
                        transparent: !0,
                        containerClasses: "tw-w-fit md:tw-max-w-[160px] tw-flex-1",
                        onClick: function() {
                            return Oe(!0)
                        }
                    }, I.createElement(m.M2, {
                        icon: l.Ju,
                        className: "tw-mr-2"
                    }), "Preview Listing"), I.createElement(m.$n, {
                        type: "button",
                        onClick: Ee ? function() {
                            re(!0)
                        } : Te,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1",
                        disabled: !je
                    }, "Save")))), ne && I.createElement(m.fv, null, I.createElement(L.A, null), I.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, I.createElement(m.$n, {
                        neutral: !0,
                        type: "button",
                        onClick: function() {
                            return re(!1)
                        },
                        containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                    }, "Back"), I.createElement(m.$n, {
                        type: "button",
                        onClick: Te,
                        containerClasses: "sm:tw-max-w-[240px] tw-flex-1",
                        disabled: !je
                    }, "Publish Listing"))), H && oe && I.createElement(O.A, {
                        className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-rounded-lg tw-p-0 tw-min-w-[340px]"
                    }, I.createElement(m.fI, {
                        className: "tw-justify-center tw-items-center tw-mb-3"
                    }, I.createElement(m.$n, {
                        neutral: !0,
                        containerClasses: "tw-w-fit",
                        onClick: function() {
                            return M((0, k.jT)(!1)), void M((0, k.D6)("Edit Listing"))
                        }
                    }, I.createElement(m.M2, {
                        icon: s.yY
                    }), " Close Preview")), I.createElement(I.Suspense, {
                        fallback: I.createElement("div", null, "Loading...")
                    }, I.createElement("div", {
                        className: "tw-border tw-border-solid  tw-border-hr-line-color tw-rounded-lg tw-p-5"
                    }, I.createElement($, {
                        isPreview: !0,
                        products: V,
                        galleryImages: ve,
                        listing: J,
                        onClose: function() {
                            return Oe(!1)
                        }
                    })))))
                };
            M.propTypes = {
                listingId: P().string.isRequired,
                stores: P().array,
                onCancel: P().func,
                onDelete: P().func
            };
            const F = M
        }
    }
]);
//# sourceMappingURL=054ce57b845302e87c6950f83b0f60d826bb74533541d7f4869972080c65d15a.js.map