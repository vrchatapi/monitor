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
                l = n(88213),
                s = n(34912),
                o = n(34496),
                c = n(42217),
                u = n(54756),
                d = n.n(u),
                w = n(65950),
                m = n(71661),
                f = n(75174),
                p = n(97071),
                g = n(31069),
                v = n(78502),
                b = n(13951),
                y = n(31931),
                h = n(72784),
                x = n(6457),
                E = n(97087),
                k = n(70650),
                C = n(91069),
                P = n(5556),
                A = n.n(P),
                I = n(96540),
                T = n(6376),
                N = n(35169),
                O = n(24475),
                j = n(69886),
                L = n(15322);

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
                    return Promise.all([n.e(6955), n.e(5242), n.e(3456), n.e(3325)]).then(n.bind(n, 63456))
                }),
                M = function(e) {
                    var t, n = e.store,
                        i = void 0 === n ? null : n,
                        u = e.listingId,
                        P = e.onClose,
                        A = void 0 === P ? function() {} : P,
                        D = e.onDelete,
                        M = void 0 === D ? function() {} : D,
                        F = (0, T.wA)(),
                        R = (0, p.DF)().showContentViolationModal,
                        G = (0, b.P2)().data,
                        H = (0, T.d4)(function(e) {
                            return e.listingFlow
                        }),
                        V = H.isPreviewOpen,
                        X = H.selectedProducts,
                        Y = (0, I.useState)("listingInformation"),
                        _ = (0, a.A)(Y, 2),
                        z = _[0],
                        B = _[1],
                        q = (0, I.useState)(null),
                        J = (0, a.A)(q, 2),
                        Q = J[0],
                        U = J[1],
                        Z = (0, I.useState)({}),
                        K = (0, a.A)(Z, 2),
                        W = K[0],
                        ee = K[1],
                        te = (0, I.useState)(!1),
                        ne = (0, a.A)(te, 2),
                        re = ne[0],
                        ie = ne[1],
                        ae = (0, I.useMemo)(function() {
                            return X.filter(function(e) {
                                return e.avatarId
                            }).map(function(e) {
                                return e.avatarId
                            })
                        }, [X]),
                        le = (0, h.Qt)({
                            listingId: u,
                            hydrateProducts: !0,
                            hydrateStores: !0
                        }, {
                            skip: !u
                        }),
                        se = le.data,
                        oe = le.isLoading,
                        ce = (le.isError, le.error, (0, I.useMemo)(function() {
                            return "permanent" === (null == se ? void 0 : se.listingType)
                        }, [se])),
                        ue = (0, x.Cg)({
                            userId: G.id,
                            archived: !1
                        }, {
                            skip: !G
                        }),
                        de = ue.data,
                        we = ue.isLoading,
                        me = (ue.isError, ue.error, (0, E._N)({
                            sellerId: G.id,
                            managementPov: !0
                        }, {
                            skip: !G
                        })),
                        fe = me.data,
                        pe = me.isLoading,
                        ge = (me.isError, me.error, (0, y.Hg)({
                            avatarIds: ae
                        }, {
                            skip: !ae.length
                        })),
                        ve = ge.data,
                        be = (ge.isFetching, ge.isError, ge.error, (0, I.useMemo)(function() {
                            return (null != ve ? ve : []).map(function(e) {
                                return {
                                    fileId: e.id,
                                    fileVersion: e.latestVersionFile.version,
                                    order: null == e ? void 0 : e.order
                                }
                            })
                        }, [ve])),
                        ye = (0, h.m8)(),
                        he = (0, a.A)(ye, 2),
                        xe = he[0],
                        Ee = he[1],
                        ke = (Ee.isLoading, Ee.isSuccess, Ee.isError, Ee.error, !0 === (null == W ? void 0 : W.active) && !1 === (null == se ? void 0 : se.active));
                    (0, I.useEffect)(function() {
                        return function() {
                            F((0, k.GS)())
                        }
                    }, []), (0, I.useEffect)(function() {
                        var e;
                        se && (U(se), F((0, k.RE)(null !== (e = se.hydratedProducts) && void 0 !== e ? e : [])), F((0, k.mN)(se.listingType)))
                    }, [se]);
                    var Ce = function(e) {
                            U(function(t) {
                                return S(S({}, t), e)
                            }), ee(function(t) {
                                return S(S({}, t), e)
                            })
                        },
                        Pe = (0, v.GZ)(null !== (t = null == se ? void 0 : se.hydratedProducts) && void 0 !== t ? t : []),
                        Ae = Pe.hasAllProductsDisabled,
                        Ie = Pe.hasSomeProductsDisabled,
                        Te = Pe.hasNoProductsDisabled,
                        Ne = function() {
                            var e = (0, r.A)(d().mark(function e() {
                                var t, n, r;
                                return d().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = function() {
                                                F((0, w.X)({
                                                    title: "Listing updated successfully!",
                                                    icon: c.SG,
                                                    message: "Your listing has been updated successfully!",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), A()
                                            }, e.prev = 1, e.next = 4, xe(S({
                                                listingId: se.id
                                            }, W)).unwrap();
                                        case 4:
                                            t(), e.next = 13;
                                            break;
                                        case 7:
                                            if (e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), !R({
                                                    error: e.t0
                                                })) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 12:
                                            F((0, w.X)({
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
                            F((0, k.D6)(null)), F((0, k.jT)(e))
                        },
                        je = (0, I.useMemo)(function() {
                            var e, t;
                            if (!Q) return !1;
                            if ("duration" === Q.listingType) {
                                var n = [g.yT.MIN, g.yT.HOUR, g.yT.DAY].includes(Q.durationType),
                                    r = (0, C.XA)(se.durationType, se.duration) && Number.isInteger(Number(Q.duration)) && /^\d+$/.test(Q.duration);
                                return n && r
                            }
                            var i = Q.displayName.length >= 3,
                                a = ce ? g.gw : g.Hd,
                                l = Q.priceTokens >= g.pb && Q.priceTokens <= a && Number.isInteger(Number.parseInt(Q.priceTokens)) && /^\d+$/.test(Q.priceTokens),
                                s = null !== (e = null === (t = Q.hydratedProducts) || void 0 === t ? void 0 : t.length) && void 0 !== e ? e : 0,
                                o = s > 0 && s <= g.B8;
                            return i && l && o && Te
                        }, [Q]),
                        Le = oe || we || pe;
                    return I.createElement(I.Fragment, null, Le && I.createElement("div", null, "Loading..."), !Le && Q && !re && !V && I.createElement(m.fv, {
                        className: "tw-w-full tw-relative"
                    }, (Ae || Ie) && I.createElement(m.$T, {
                        title: Ae ? "Listing is not purchasable" : "Listing contains some unavailable products",
                        type: "warn",
                        message: Ae ? "This listing cannot be purchased because it contains only products that are not eligible for sale. Resolve the issues to re-enable the listing and make it available to buyers." : "This listing is still available for purchase, but buyers will not receive the unavailable products included in the listing."
                    }), I.createElement(f.A, {
                        onChange: B,
                        justify: "left",
                        selected: z,
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
                    }, "listingInformation" === z && I.createElement(O.A, {
                        originalListing: se,
                        editedListing: Q,
                        onDataChange: Ce,
                        isEditing: !0,
                        products: de,
                        listingType: Q.listingType,
                        productsLoading: we
                    }), "storeAvailability" === z && I.createElement(L.A, {
                        activeListing: Q,
                        onDataChange: Ce,
                        stores: fe,
                        activeStore: i,
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
                            return M(se)
                        },
                        neutral: !0,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Delete Listing")), I.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-justify-end tw-flex-auto tw-flex-wrap"
                    }, ce && I.createElement(m.$n, {
                        transparent: !0,
                        containerClasses: "tw-w-fit md:tw-max-w-[160px] tw-flex-1",
                        onClick: function() {
                            return Oe(!0)
                        }
                    }, I.createElement(m.M2, {
                        icon: s.Ju,
                        className: "tw-mr-2"
                    }), "Preview Listing"), I.createElement(m.$n, {
                        type: "button",
                        onClick: ke ? function() {
                            ie(!0)
                        } : Ne,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1",
                        disabled: !je
                    }, "Save")))), re && I.createElement(m.fv, null, I.createElement(j.A, null), I.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, I.createElement(m.$n, {
                        neutral: !0,
                        type: "button",
                        onClick: function() {
                            return ie(!1)
                        },
                        containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                    }, "Back"), I.createElement(m.$n, {
                        type: "button",
                        onClick: Ne,
                        containerClasses: "sm:tw-max-w-[240px] tw-flex-1",
                        disabled: !je
                    }, "Publish Listing"))), V && ce && I.createElement(N.A, {
                        className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-rounded-lg tw-p-0 tw-min-w-[340px]"
                    }, I.createElement(m.fI, {
                        className: "tw-justify-center tw-items-center tw-mb-3"
                    }, I.createElement(m.$n, {
                        neutral: !0,
                        containerClasses: "tw-w-fit",
                        onClick: function() {
                            return F((0, k.jT)(!1)), void F((0, k.D6)("Edit Listing"))
                        }
                    }, I.createElement(m.M2, {
                        icon: l.yY
                    }), " Close Preview")), I.createElement(I.Suspense, {
                        fallback: I.createElement("div", null, "Loading...")
                    }, I.createElement("div", {
                        className: "tw-border tw-border-solid  tw-border-hr-line-color tw-rounded-lg tw-p-5"
                    }, I.createElement($, {
                        isPreview: !0,
                        products: X,
                        galleryImages: be,
                        listing: Q,
                        onClose: function() {
                            return Oe(!1)
                        }
                    })))))
                };
            M.propTypes = {
                listingId: A().string.isRequired,
                stores: A().array,
                onCancel: A().func,
                onDelete: A().func
            };
            const F = M
        }
    }
]);
//# sourceMappingURL=932e85d8f753b85fbf4cd2a474b99211bce35bb6a4ed2b93d0c470df5e5f3b37.js.map