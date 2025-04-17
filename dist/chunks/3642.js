"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3642], {
        33642: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => Z
            });
            var r = n(15861),
                i = n(4942),
                a = n(54546),
                o = n(68149),
                s = n(90502),
                l = n(76553),
                c = n(6811),
                u = n(64687),
                d = n.n(u),
                f = n(64258),
                m = n(14411),
                w = n(72998),
                p = n(95896),
                g = n(22202),
                v = n(41255),
                b = n(16869),
                x = n(67978),
                y = n(36183),
                E = n(39270),
                h = n(64358),
                C = n(45697),
                k = n.n(C),
                I = n(67294),
                O = n(32981),
                P = n(53637),
                j = n(68420),
                L = n(99878);

            function T(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var N = (0, I.lazy)((function() {
                    return Promise.all([n.e(8043), n.e(2704), n.e(6239)]).then(n.bind(n, 22704))
                })),
                S = function(e) {
                    var t = e.store,
                        n = void 0 === t ? null : t,
                        i = e.listingId,
                        u = e.onClose,
                        C = void 0 === u ? function() {} : u,
                        k = e.onDelete,
                        T = void 0 === k ? function() {} : k,
                        S = (0, O.I0)(),
                        Z = (0, g.XC)().data,
                        F = (0, O.v9)((function(e) {
                            return e.listingFlow
                        })),
                        z = F.isPreviewOpen,
                        A = F.selectedProducts,
                        M = (0, I.useState)("listingInformation"),
                        G = (0, a.Z)(M, 2),
                        X = G[0],
                        Y = G[1],
                        _ = (0, I.useState)(null),
                        q = (0, a.Z)(_, 2),
                        H = q[0],
                        R = q[1],
                        V = (0, I.useState)({}),
                        $ = (0, a.Z)(V, 2),
                        J = $[0],
                        Q = $[1],
                        U = (0, I.useMemo)((function() {
                            return A.filter((function(e) {
                                return e.avatarId
                            })).map((function(e) {
                                return e.avatarId
                            }))
                        }), [A]),
                        B = (0, b.mr)({
                            listingId: i,
                            hydrateProducts: !0,
                            hydrateStores: !0
                        }, {
                            skip: !i
                        }),
                        K = B.data,
                        W = B.isLoading,
                        ee = (B.isError, B.error, (0, I.useMemo)((function() {
                            return "permanent" === (null == K ? void 0 : K.listingType)
                        }), [K])),
                        te = (0, x.x3)({
                            userId: Z.id,
                            archived: !1
                        }, {
                            skip: !Z
                        }),
                        ne = te.data,
                        re = te.isLoading,
                        ie = (te.isError, te.error, (0, y.Ci)({
                            sellerId: Z.id,
                            managementPov: !0
                        }, {
                            skip: !Z
                        })),
                        ae = ie.data,
                        oe = ie.isLoading,
                        se = (ie.isError, ie.error, (0, v.Qb)({
                            avatarIds: U
                        }, {
                            skip: !U.length
                        })),
                        le = se.data,
                        ce = (se.isFetching, se.isError, se.error, (0, I.useMemo)((function() {
                            return (null != le ? le : []).map((function(e) {
                                return {
                                    fileId: e.id,
                                    fileVersion: e.latestVersionFile.version,
                                    order: null == e ? void 0 : e.order
                                }
                            }))
                        }), [le])),
                        ue = (0, b.Ij)(),
                        de = (0, a.Z)(ue, 2),
                        fe = de[0],
                        me = de[1];
                    me.isLoading, me.isSuccess, me.isError, me.error;
                    (0, I.useEffect)((function() {
                        return function() {
                            S((0, E.rk)())
                        }
                    }), []), (0, I.useEffect)((function() {
                        K && (R(K), S((0, E.fX)(K.products)), S((0, E.TY)(K.listingType)))
                    }), [K]);
                    var we = function(e) {
                            R((function(t) {
                                return D(D({}, t), e)
                            })), Q((function(t) {
                                return D(D({}, t), e)
                            }))
                        },
                        pe = function() {
                            var e = (0, r.Z)(d().mark((function e() {
                                var t, n, r;
                                return d().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = function() {
                                                S((0, f.d)({
                                                    title: "Listing updated successfully!",
                                                    icon: c.f8,
                                                    message: "Your listing has been updated successfully!",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), C()
                                            }, e.prev = 1, e.next = 4, fe(D({
                                                listingId: K.id
                                            }, J)).unwrap();
                                        case 4:
                                            t(), e.next = 11;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), S((0, f.d)({
                                                title: "Failed to update listing!",
                                                icon: l.eH,
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
                        ge = function(e) {
                            S((0, E.Td)(null)), S((0, E.xj)(e))
                        },
                        ve = (0, I.useMemo)((function() {
                            if (!H) return !1;
                            if ("duration" === H.listingType) {
                                var e = [p.PG.MIN, p.PG.HOUR, p.PG.DAY].includes(H.durationType),
                                    t = (0, h.qG)(K.durationType, K.duration) && Number.isInteger(parseFloat(H.duration));
                                return e && t
                            }
                            var n = H.displayName.length >= 3,
                                r = H.priceTokens >= 100 && H.priceTokens <= 1e4 && Number.isInteger(parseFloat(H.priceTokens)),
                                i = H.products.length > 0 && H.products.length <= p._1;
                            return n && r && i
                        }), [H]),
                        be = W || re || oe;
                    return I.createElement(I.Fragment, null, be && I.createElement("div", null, "Loading..."), !be && H && !z && I.createElement(m.JX, {
                        className: "tw-w-full tw-relative"
                    }, I.createElement(w.Z, {
                        onChange: Y,
                        justify: "left",
                        selected: X,
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
                    }, "listingInformation" === X && I.createElement(j.Z, {
                        originalListing: K,
                        editedListing: H,
                        onDataChange: we,
                        isEditing: !0,
                        products: ne,
                        listingType: H.listingType,
                        productsLoading: re
                    }), "storeAvailability" === X && I.createElement(L.Z, {
                        activeListing: H,
                        onDataChange: we,
                        stores: ae,
                        activeStore: n
                    })), I.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, I.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-flex-auto"
                    }, I.createElement(m.zx, {
                        neutral: !0,
                        type: "button",
                        onClick: C,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Cancel"), I.createElement(m.zx, {
                        type: "button",
                        onClick: function() {
                            return T(K)
                        },
                        danger: !0,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Delete Listing")), I.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-justify-end tw-flex-auto tw-flex-wrap"
                    }, ee && I.createElement(m.zx, {
                        transparent: !0,
                        containerClasses: "tw-w-fit md:tw-max-w-[160px] tw-flex-1",
                        onClick: function() {
                            return ge(!0)
                        }
                    }, I.createElement(m.$1, {
                        icon: s.wl,
                        className: "tw-mr-2"
                    }), "Preview Listing"), I.createElement(m.zx, {
                        type: "button",
                        onClick: pe,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1",
                        disabled: !ve
                    }, "Save")))), z && ee && I.createElement(P.Z, {
                        className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-border tw-border-[#2D363F] tw-rounded-lg tw-p-5"
                    }, I.createElement(m.X2, {
                        className: "tw-justify-center tw-items-center tw-mb-3"
                    }, I.createElement(m.zx, {
                        neutral: !0,
                        containerClasses: "tw-w-fit",
                        onClick: function() {
                            return S((0, E.xj)(!1)), void S((0, E.Td)("Edit Listing"))
                        }
                    }, I.createElement(m.$1, {
                        icon: o.YI
                    }), " Close Preview")), I.createElement(I.Suspense, {
                        fallback: I.createElement("div", null, "Loading...")
                    }, I.createElement(N, {
                        isPreview: !0,
                        products: A,
                        galleryImages: ce,
                        listing: H,
                        onClose: function() {
                            return ge(!1)
                        }
                    }))))
                };
            S.propTypes = {
                listingId: k().string.isRequired,
                stores: k().array,
                onCancel: k().func,
                onDelete: k().func
            };
            const Z = S
        }
    }
]);
//# sourceMappingURL=8b72fd000f1d3028db470e6b3d54c03f07b3a1b6257e332121b15aab3d55184d.js.map