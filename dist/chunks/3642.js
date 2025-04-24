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
                o = n(90502),
                s = n(76553),
                c = n(6811),
                u = n(64687),
                d = n.n(u),
                f = n(64258),
                w = n(14411),
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
                j = n(32981),
                O = n(53637),
                P = n(68420),
                L = n(80938),
                S = n(99878);

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

            function N(e) {
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
                        Z = (0, j.I0)(),
                        z = (0, g.XC)().data,
                        F = (0, j.v9)((function(e) {
                            return e.listingFlow
                        })),
                        A = F.isPreviewOpen,
                        M = F.selectedProducts,
                        X = (0, I.useState)("listingInformation"),
                        G = (0, a.Z)(X, 2),
                        Y = G[0],
                        _ = G[1],
                        q = (0, I.useState)(null),
                        H = (0, a.Z)(q, 2),
                        J = H[0],
                        R = H[1],
                        V = (0, I.useState)({}),
                        $ = (0, a.Z)(V, 2),
                        B = $[0],
                        Q = $[1],
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
                        oe = le.data,
                        se = le.isLoading,
                        ce = (le.isError, le.error, (0, y.Ci)({
                            sellerId: z.id,
                            managementPov: !0
                        }, {
                            skip: !z
                        })),
                        ue = ce.data,
                        de = ce.isLoading,
                        fe = (ce.isError, ce.error, (0, v.Qb)({
                            avatarIds: te
                        }, {
                            skip: !te.length
                        })),
                        we = fe.data,
                        me = (fe.isFetching, fe.isError, fe.error, (0, I.useMemo)((function() {
                            return (null != we ? we : []).map((function(e) {
                                return {
                                    fileId: e.id,
                                    fileVersion: e.latestVersionFile.version,
                                    order: null == e ? void 0 : e.order
                                }
                            }))
                        }), [we])),
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
                        re && (R(re), Z((0, E.fX)(re.products)), Z((0, E.TY)(re.listingType)))
                    }), [re]);
                    var ye = function(e) {
                            R((function(t) {
                                return N(N({}, t), e)
                            })), Q((function(t) {
                                return N(N({}, t), e)
                            }))
                        },
                        Ee = function() {
                            var e = (0, r.Z)(d().mark((function e() {
                                var t, n, r;
                                return d().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = function() {
                                                Z((0, f.d)({
                                                    title: "Listing updated successfully!",
                                                    icon: c.f8,
                                                    message: "Your listing has been updated successfully!",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), C()
                                            }, e.prev = 1, e.next = 4, ve(N({
                                                listingId: re.id
                                            }, B)).unwrap();
                                        case 4:
                                            t(), e.next = 11;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), Z((0, f.d)({
                                                title: "Failed to update listing!",
                                                icon: s.eH,
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
                            if (!J) return !1;
                            if ("duration" === J.listingType) {
                                var e = [p.PG.MIN, p.PG.HOUR, p.PG.DAY].includes(J.durationType),
                                    t = (0, h.qG)(re.durationType, re.duration) && Number.isInteger(parseFloat(J.duration));
                                return e && t
                            }
                            var n = J.displayName.length >= 3,
                                r = J.priceTokens >= 100 && J.priceTokens <= 1e4 && Number.isInteger(parseFloat(J.priceTokens)),
                                i = J.products.length > 0 && J.products.length <= p._1;
                            return n && r && i
                        }), [J]),
                        ke = ie || se || de;
                    return I.createElement(I.Fragment, null, ke && I.createElement("div", null, "Loading..."), !ke && J && !W && !A && I.createElement(w.JX, {
                        className: "tw-w-full tw-relative"
                    }, I.createElement(m.Z, {
                        onChange: _,
                        justify: "left",
                        selected: Y,
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
                    }, "listingInformation" === Y && I.createElement(P.Z, {
                        originalListing: re,
                        editedListing: J,
                        onDataChange: ye,
                        isEditing: !0,
                        products: oe,
                        listingType: J.listingType,
                        productsLoading: se
                    }), "storeAvailability" === Y && I.createElement(S.Z, {
                        activeListing: J,
                        onDataChange: ye,
                        stores: ue,
                        activeStore: n
                    })), I.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, I.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-flex-auto"
                    }, I.createElement(w.zx, {
                        neutral: !0,
                        type: "button",
                        onClick: C,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Cancel"), I.createElement(w.zx, {
                        type: "button",
                        onClick: function() {
                            return T(re)
                        },
                        danger: !0,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Delete Listing")), I.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-justify-end tw-flex-auto tw-flex-wrap"
                    }, ae && I.createElement(w.zx, {
                        transparent: !0,
                        containerClasses: "tw-w-fit md:tw-max-w-[160px] tw-flex-1",
                        onClick: function() {
                            return he(!0)
                        }
                    }, I.createElement(w.$1, {
                        icon: o.wl,
                        className: "tw-mr-2"
                    }), "Preview Listing"), I.createElement(w.zx, {
                        type: "button",
                        onClick: be ? function() {
                            ee(!0)
                        } : Ee,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1",
                        disabled: !Ce
                    }, "Save")))), W && I.createElement(w.JX, null, I.createElement(L.Z, null), I.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, I.createElement(w.zx, {
                        neutral: !0,
                        type: "button",
                        onClick: function() {
                            return ee(!1)
                        },
                        containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                    }, "Back"), I.createElement(w.zx, {
                        type: "button",
                        onClick: Ee,
                        containerClasses: "sm:tw-max-w-[240px] tw-flex-1",
                        disabled: !Ce
                    }, "Save"))), A && ae && I.createElement(O.Z, {
                        className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-border tw-border-[#2D363F] tw-rounded-lg tw-p-5"
                    }, I.createElement(w.X2, {
                        className: "tw-justify-center tw-items-center tw-mb-3"
                    }, I.createElement(w.zx, {
                        neutral: !0,
                        containerClasses: "tw-w-fit",
                        onClick: function() {
                            return Z((0, E.xj)(!1)), void Z((0, E.Td)("Edit Listing"))
                        }
                    }, I.createElement(w.$1, {
                        icon: l.YI
                    }), " Close Preview")), I.createElement(I.Suspense, {
                        fallback: I.createElement("div", null, "Loading...")
                    }, I.createElement(D, {
                        isPreview: !0,
                        products: M,
                        galleryImages: me,
                        listing: J,
                        onClose: function() {
                            return he(!1)
                        }
                    }))))
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
//# sourceMappingURL=ff7db3ebc1a982b283cc88b99e1be7f26e8e805dee87bb62c9b273923fb543a9.js.map