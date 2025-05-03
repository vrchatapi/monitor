"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3642], {
        33642: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => z
            });
            var r = n(15861),
                i = n(4942),
                a = n(54546),
                l = n(68149),
                s = n(90502),
                o = n(76553),
                c = n(6811),
                u = n(64687),
                d = n.n(u),
                w = n(64258),
                f = n(14411),
                m = n(72998),
                p = n(95896),
                g = n(22202),
                v = n(41255),
                x = n(16869),
                b = n(67978),
                y = n(36183),
                E = n(39270),
                h = n(64358),
                C = n(45697),
                k = n.n(C),
                I = n(67294),
                P = n(32981),
                j = n(53637),
                O = n(68420),
                L = n(80938),
                N = n(99878);

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

            function S(e) {
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
            var D = (0, I.lazy)((function() {
                    return Promise.all([n.e(8043), n.e(2704), n.e(6239)]).then(n.bind(n, 22704))
                })),
                Z = function(e) {
                    var t = e.store,
                        n = void 0 === t ? null : t,
                        i = e.listingId,
                        u = e.onClose,
                        C = void 0 === u ? function() {} : u,
                        k = e.onDelete,
                        T = void 0 === k ? function() {} : k,
                        Z = (0, P.I0)(),
                        z = (0, g.XC)().data,
                        A = (0, P.v9)((function(e) {
                            return e.listingFlow
                        })),
                        F = A.isPreviewOpen,
                        M = A.selectedProducts,
                        X = (0, I.useState)("listingInformation"),
                        Y = (0, a.Z)(X, 2),
                        G = Y[0],
                        $ = Y[1],
                        _ = (0, I.useState)(null),
                        q = (0, a.Z)(_, 2),
                        H = q[0],
                        J = q[1],
                        R = (0, I.useState)({}),
                        V = (0, a.Z)(R, 2),
                        B = V[0],
                        Q = V[1],
                        U = (0, I.useState)(!1),
                        K = (0, a.Z)(U, 2),
                        W = K[0],
                        ee = K[1],
                        te = (0, I.useMemo)((function() {
                            return M.filter((function(e) {
                                return e.avatarId
                            })).map((function(e) {
                                return e.avatarId
                            }))
                        }), [M]),
                        ne = (0, x.mr)({
                            listingId: i,
                            hydrateProducts: !0,
                            hydrateStores: !0
                        }, {
                            skip: !i
                        }),
                        re = ne.data,
                        ie = ne.isLoading,
                        ae = (ne.isError, ne.error, (0, I.useMemo)((function() {
                            return "permanent" === (null == re ? void 0 : re.listingType)
                        }), [re])),
                        le = (0, b.x3)({
                            userId: z.id,
                            archived: !1
                        }, {
                            skip: !z
                        }),
                        se = le.data,
                        oe = le.isLoading,
                        ce = (le.isError, le.error, (0, y.Ci)({
                            sellerId: z.id,
                            managementPov: !0
                        }, {
                            skip: !z
                        })),
                        ue = ce.data,
                        de = ce.isLoading,
                        we = (ce.isError, ce.error, (0, v.Qb)({
                            avatarIds: te
                        }, {
                            skip: !te.length
                        })),
                        fe = we.data,
                        me = (we.isFetching, we.isError, we.error, (0, I.useMemo)((function() {
                            return (null != fe ? fe : []).map((function(e) {
                                return {
                                    fileId: e.id,
                                    fileVersion: e.latestVersionFile.version,
                                    order: null == e ? void 0 : e.order
                                }
                            }))
                        }), [fe])),
                        pe = (0, x.Ij)(),
                        ge = (0, a.Z)(pe, 2),
                        ve = ge[0],
                        xe = ge[1],
                        be = (xe.isLoading, xe.isSuccess, xe.isError, xe.error, !0 === (null == B ? void 0 : B.active) && !1 === (null == re ? void 0 : re.active));
                    (0, I.useEffect)((function() {
                        return function() {
                            Z((0, E.rk)())
                        }
                    }), []), (0, I.useEffect)((function() {
                        re && (J(re), Z((0, E.fX)(re.products)), Z((0, E.TY)(re.listingType)))
                    }), [re]);
                    var ye = function(e) {
                            J((function(t) {
                                return S(S({}, t), e)
                            })), Q((function(t) {
                                return S(S({}, t), e)
                            }))
                        },
                        Ee = function() {
                            var e = (0, r.Z)(d().mark((function e() {
                                var t, n, r;
                                return d().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = function() {
                                                Z((0, w.d)({
                                                    title: "Listing updated successfully!",
                                                    icon: c.f8,
                                                    message: "Your listing has been updated successfully!",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), C()
                                            }, e.prev = 1, e.next = 4, ve(S({
                                                listingId: re.id
                                            }, B)).unwrap();
                                        case 4:
                                            t(), e.next = 11;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), Z((0, w.d)({
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
                        he = function(e) {
                            Z((0, E.Td)(null)), Z((0, E.xj)(e))
                        },
                        Ce = (0, I.useMemo)((function() {
                            if (!H) return !1;
                            if ("duration" === H.listingType) {
                                var e = [p.PG.MIN, p.PG.HOUR, p.PG.DAY].includes(H.durationType),
                                    t = (0, h.qG)(re.durationType, re.duration) && Number.isInteger(Number(H.duration)) && /^\d+$/.test(H.duration);
                                return e && t
                            }
                            var n = H.displayName.length >= 3,
                                r = ae ? p.YC : p._C,
                                i = H.priceTokens >= p.zD && H.priceTokens <= r && Number.isInteger(parseInt(H.priceTokens)) && /^\d+$/.test(H.priceTokens),
                                a = H.products.length > 0 && H.products.length <= p._1;
                            return n && i && a
                        }), [H]),
                        ke = ie || oe || de;
                    return I.createElement(I.Fragment, null, ke && I.createElement("div", null, "Loading..."), !ke && H && !W && !F && I.createElement(f.JX, {
                        className: "tw-w-full tw-relative"
                    }, I.createElement(m.Z, {
                        onChange: $,
                        justify: "left",
                        selected: G,
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
                    }, "listingInformation" === G && I.createElement(O.Z, {
                        originalListing: re,
                        editedListing: H,
                        onDataChange: ye,
                        isEditing: !0,
                        products: se,
                        listingType: H.listingType,
                        productsLoading: oe
                    }), "storeAvailability" === G && I.createElement(N.Z, {
                        activeListing: H,
                        onDataChange: ye,
                        stores: ue,
                        activeStore: n,
                        isEditing: !0
                    })), I.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, I.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-flex-auto"
                    }, I.createElement(f.zx, {
                        neutral: !0,
                        type: "button",
                        onClick: C,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Cancel"), I.createElement(f.zx, {
                        type: "button",
                        onClick: function() {
                            return T(re)
                        },
                        neutral: !0,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Delete Listing")), I.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-justify-end tw-flex-auto tw-flex-wrap"
                    }, ae && I.createElement(f.zx, {
                        transparent: !0,
                        containerClasses: "tw-w-fit md:tw-max-w-[160px] tw-flex-1",
                        onClick: function() {
                            return he(!0)
                        }
                    }, I.createElement(f.$1, {
                        icon: s.wl,
                        className: "tw-mr-2"
                    }), "Preview Listing"), I.createElement(f.zx, {
                        type: "button",
                        onClick: be ? function() {
                            ee(!0)
                        } : Ee,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1",
                        disabled: !Ce
                    }, "Save")))), W && I.createElement(f.JX, null, I.createElement(L.Z, null), I.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, I.createElement(f.zx, {
                        neutral: !0,
                        type: "button",
                        onClick: function() {
                            return ee(!1)
                        },
                        containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                    }, "Back"), I.createElement(f.zx, {
                        type: "button",
                        onClick: Ee,
                        containerClasses: "sm:tw-max-w-[240px] tw-flex-1",
                        disabled: !Ce
                    }, "Publish Listing"))), F && ae && I.createElement(j.Z, {
                        className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-rounded-lg"
                    }, I.createElement(f.X2, {
                        className: "tw-justify-center tw-items-center tw-mb-3"
                    }, I.createElement(f.zx, {
                        neutral: !0,
                        containerClasses: "tw-w-fit",
                        onClick: function() {
                            return Z((0, E.xj)(!1)), void Z((0, E.Td)("Edit Listing"))
                        }
                    }, I.createElement(f.$1, {
                        icon: l.YI
                    }), " Close Preview")), I.createElement(I.Suspense, {
                        fallback: I.createElement("div", null, "Loading...")
                    }, I.createElement("div", {
                        className: "tw-border tw-border-solid  tw-border-hr-line-color tw-rounded-lg tw-p-5"
                    }, I.createElement(D, {
                        isPreview: !0,
                        products: M,
                        galleryImages: me,
                        listing: H,
                        onClose: function() {
                            return he(!1)
                        }
                    })))))
                };
            Z.propTypes = {
                listingId: k().string.isRequired,
                stores: k().array,
                onCancel: k().func,
                onDelete: k().func
            };
            const z = Z
        }
    }
]);
//# sourceMappingURL=be1508834da9b54f5c1041b61b533f083d5c7af56188a634b53970fe7fa290bf.js.map