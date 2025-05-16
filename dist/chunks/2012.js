"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2012, 3642], {
        33642: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => z
            });
            var n = r(15861),
                i = r(4942),
                o = r(54546),
                s = r(68149),
                a = r(90502),
                l = r(76553),
                u = r(6811),
                c = r(64687),
                d = r.n(c),
                m = r(64258),
                p = r(14411),
                f = r(72998),
                w = r(95896),
                g = r(17383),
                v = r(22202),
                y = r(41255),
                b = r(16869),
                x = r(67978),
                h = r(36183),
                E = r(39270),
                I = r(64358),
                S = r(45697),
                P = r.n(S),
                C = r(67294),
                T = r(32981),
                k = r(53637),
                j = r(25423),
                L = r(80938),
                O = r(99878);

            function N(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : N(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Z = (0, C.lazy)((function() {
                    return Promise.all([r.e(8043), r.e(2704), r.e(6239)]).then(r.bind(r, 22704))
                })),
                q = function(e) {
                    var t = e.store,
                        r = void 0 === t ? null : t,
                        i = e.listingId,
                        c = e.onClose,
                        S = void 0 === c ? function() {} : c,
                        P = e.onDelete,
                        N = void 0 === P ? function() {} : P,
                        q = (0, T.I0)(),
                        z = (0, v.XC)().data,
                        A = (0, T.v9)((function(e) {
                            return e.listingFlow
                        })),
                        G = A.isPreviewOpen,
                        M = A.selectedProducts,
                        X = (0, C.useState)("listingInformation"),
                        F = (0, o.Z)(X, 2),
                        U = F[0],
                        Y = F[1],
                        $ = (0, C.useState)(null),
                        _ = (0, o.Z)($, 2),
                        Q = _[0],
                        R = _[1],
                        H = (0, C.useState)({}),
                        J = (0, o.Z)(H, 2),
                        V = J[0],
                        W = J[1],
                        B = (0, C.useState)(!1),
                        K = (0, o.Z)(B, 2),
                        ee = K[0],
                        te = K[1],
                        re = (0, C.useMemo)((function() {
                            return M.filter((function(e) {
                                return e.avatarId
                            })).map((function(e) {
                                return e.avatarId
                            }))
                        }), [M]),
                        ne = (0, b.mr)({
                            listingId: i,
                            hydrateProducts: !0,
                            hydrateStores: !0
                        }, {
                            skip: !i
                        }),
                        ie = ne.data,
                        oe = ne.isLoading,
                        se = (ne.isError, ne.error, (0, C.useMemo)((function() {
                            return "permanent" === (null == ie ? void 0 : ie.listingType)
                        }), [ie])),
                        ae = (0, x.x3)({
                            userId: z.id,
                            archived: !1
                        }, {
                            skip: !z
                        }),
                        le = ae.data,
                        ue = ae.isLoading,
                        ce = (ae.isError, ae.error, (0, h.Ci)({
                            sellerId: z.id,
                            managementPov: !0
                        }, {
                            skip: !z
                        })),
                        de = ce.data,
                        me = ce.isLoading,
                        pe = (ce.isError, ce.error, (0, y.Qb)({
                            avatarIds: re
                        }, {
                            skip: !re.length
                        })),
                        fe = pe.data,
                        we = (pe.isFetching, pe.isError, pe.error, (0, C.useMemo)((function() {
                            return (null != fe ? fe : []).map((function(e) {
                                return {
                                    fileId: e.id,
                                    fileVersion: e.latestVersionFile.version,
                                    order: null == e ? void 0 : e.order
                                }
                            }))
                        }), [fe])),
                        ge = (0, b.Ij)(),
                        ve = (0, o.Z)(ge, 2),
                        ye = ve[0],
                        be = ve[1],
                        xe = (be.isLoading, be.isSuccess, be.isError, be.error, !0 === (null == V ? void 0 : V.active) && !1 === (null == ie ? void 0 : ie.active));
                    (0, C.useEffect)((function() {
                        return function() {
                            q((0, E.rk)())
                        }
                    }), []), (0, C.useEffect)((function() {
                        ie && (R(ie), q((0, E.fX)(ie.products)), q((0, E.TY)(ie.listingType)))
                    }), [ie]);
                    var he = function(e) {
                            R((function(t) {
                                return D(D({}, t), e)
                            })), W((function(t) {
                                return D(D({}, t), e)
                            }))
                        },
                        Ee = (0, g.AA)(null == ie ? void 0 : ie.products),
                        Ie = Ee.hasAllProductsDisabled,
                        Se = Ee.hasSomeProductsDisabled,
                        Pe = Ee.hasNoProductsDisabled,
                        Ce = function() {
                            var e = (0, n.Z)(d().mark((function e() {
                                var t, r, n;
                                return d().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = function() {
                                                q((0, m.d)({
                                                    title: "Listing updated successfully!",
                                                    icon: u.f8,
                                                    message: "Your listing has been updated successfully!",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), S()
                                            }, e.prev = 1, e.next = 4, ye(D({
                                                listingId: ie.id
                                            }, V)).unwrap();
                                        case 4:
                                            t(), e.next = 11;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), q((0, m.d)({
                                                title: "Failed to update listing!",
                                                icon: l.eH,
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
                        Te = function(e) {
                            q((0, E.Td)(null)), q((0, E.xj)(e))
                        },
                        ke = (0, C.useMemo)((function() {
                            if (!Q) return !1;
                            if ("duration" === Q.listingType) {
                                var e = [w.PG.MIN, w.PG.HOUR, w.PG.DAY].includes(Q.durationType),
                                    t = (0, I.qG)(ie.durationType, ie.duration) && Number.isInteger(Number(Q.duration)) && /^\d+$/.test(Q.duration);
                                return e && t
                            }
                            var r = Q.displayName.length >= 3,
                                n = se ? w.YC : w._C,
                                i = Q.priceTokens >= w.zD && Q.priceTokens <= n && Number.isInteger(parseInt(Q.priceTokens)) && /^\d+$/.test(Q.priceTokens),
                                o = Q.products.length > 0 && Q.products.length <= w._1;
                            return r && i && o && Pe
                        }), [Q]),
                        je = oe || ue || me;
                    return C.createElement(C.Fragment, null, je && C.createElement("div", null, "Loading..."), !je && Q && !ee && !G && C.createElement(p.JX, {
                        className: "tw-w-full tw-relative"
                    }, (Ie || Se) && C.createElement(p.qX, {
                        title: Ie ? "Listing is not purchasable" : "Listing contains some unavailable products",
                        type: "warn",
                        message: Ie ? "This listing cannot be purchased because it contains only products that are not eligible for sale. Resolve the issues to re-enable the listing and make it available to buyers." : "This listing is still available for purchase, but buyers will not receive the unavailable products included in the listing."
                    }), C.createElement(f.Z, {
                        onChange: Y,
                        justify: "left",
                        selected: U,
                        tabs: [{
                            name: "Listing Information",
                            id: "listingInformation",
                            condition: !0
                        }, {
                            name: "Store Availability",
                            id: "storeAvailability",
                            condition: !0
                        }]
                    }), C.createElement("div", {
                        className: "tw-w-full tw-relative"
                    }, "listingInformation" === U && C.createElement(j.Z, {
                        originalListing: ie,
                        editedListing: Q,
                        onDataChange: he,
                        isEditing: !0,
                        products: le,
                        listingType: Q.listingType,
                        productsLoading: ue
                    }), "storeAvailability" === U && C.createElement(O.Z, {
                        activeListing: Q,
                        onDataChange: he,
                        stores: de,
                        activeStore: r,
                        isEditing: !0
                    })), C.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, C.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-flex-auto"
                    }, C.createElement(p.zx, {
                        neutral: !0,
                        type: "button",
                        onClick: S,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Cancel"), C.createElement(p.zx, {
                        type: "button",
                        onClick: function() {
                            return N(ie)
                        },
                        neutral: !0,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Delete Listing")), C.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-justify-end tw-flex-auto tw-flex-wrap"
                    }, se && C.createElement(p.zx, {
                        transparent: !0,
                        containerClasses: "tw-w-fit md:tw-max-w-[160px] tw-flex-1",
                        onClick: function() {
                            return Te(!0)
                        }
                    }, C.createElement(p.$1, {
                        icon: a.wl,
                        className: "tw-mr-2"
                    }), "Preview Listing"), C.createElement(p.zx, {
                        type: "button",
                        onClick: xe ? function() {
                            te(!0)
                        } : Ce,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1",
                        disabled: !ke
                    }, "Save")))), ee && C.createElement(p.JX, null, C.createElement(L.Z, null), C.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, C.createElement(p.zx, {
                        neutral: !0,
                        type: "button",
                        onClick: function() {
                            return te(!1)
                        },
                        containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                    }, "Back"), C.createElement(p.zx, {
                        type: "button",
                        onClick: Ce,
                        containerClasses: "sm:tw-max-w-[240px] tw-flex-1",
                        disabled: !ke
                    }, "Publish Listing"))), G && se && C.createElement(k.Z, {
                        className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-rounded-lg"
                    }, C.createElement(p.X2, {
                        className: "tw-justify-center tw-items-center tw-mb-3"
                    }, C.createElement(p.zx, {
                        neutral: !0,
                        containerClasses: "tw-w-fit",
                        onClick: function() {
                            return q((0, E.xj)(!1)), void q((0, E.Td)("Edit Listing"))
                        }
                    }, C.createElement(p.$1, {
                        icon: s.YI
                    }), " Close Preview")), C.createElement(C.Suspense, {
                        fallback: C.createElement("div", null, "Loading...")
                    }, C.createElement("div", {
                        className: "tw-border tw-border-solid  tw-border-hr-line-color tw-rounded-lg tw-p-5"
                    }, C.createElement(Z, {
                        isPreview: !0,
                        products: M,
                        galleryImages: we,
                        listing: Q,
                        onClose: function() {
                            return Te(!1)
                        }
                    })))))
                };
            q.propTypes = {
                listingId: P().string.isRequired,
                stores: P().array,
                onCancel: P().func,
                onDelete: P().func
            };
            const z = q
        },
        36183: (e, t, r) => {
            r.d(t, {
                Ci: () => l,
                j6: () => u,
                md: () => a,
                mt: () => c
            });
            var n = r(45987),
                i = r(61509),
                o = ["storeId"],
                s = i.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getStores: e.query({
                                query: function(e) {
                                    var t = e.sellerId,
                                        r = e.managementPov,
                                        n = void 0 !== r && r,
                                        i = e.n,
                                        o = void 0 === i ? 50 : i,
                                        s = e.offset;
                                    return {
                                        url: "economy/stores",
                                        params: {
                                            sellerId: t,
                                            managementPov: n,
                                            n: o,
                                            offset: void 0 === s ? 0 : s
                                        }
                                    }
                                },
                                providesTags: ["Stores"]
                            }),
                            getStore: e.query({
                                query: function(e) {
                                    var t = e.storeId,
                                        r = e.worldId,
                                        n = e.groupId,
                                        i = e.creatorId,
                                        o = e.hydrateListings,
                                        s = void 0 !== o && o,
                                        a = e.hydrateProducts,
                                        l = void 0 !== a && a,
                                        u = e.managementPov;
                                    return {
                                        url: "economy/store",
                                        params: {
                                            storeId: t,
                                            worldId: r,
                                            groupId: n,
                                            creatorId: i,
                                            hydrateListings: s,
                                            hydrateProducts: l,
                                            managementPov: void 0 !== u && u
                                        }
                                    }
                                },
                                providesTags: function(e, t, r) {
                                    return [{
                                        type: "Store",
                                        id: r.storeId
                                    }]
                                }
                            }),
                            createStore: e.mutation({
                                query: function(e) {
                                    var t = e.displayName,
                                        r = e.storeType,
                                        n = e.worldId,
                                        i = e.groupId,
                                        o = e.tags,
                                        s = void 0 === o ? [] : o,
                                        a = e.description;
                                    return {
                                        url: "economy/store",
                                        method: "POST",
                                        body: {
                                            displayName: t,
                                            storeType: r,
                                            worldId: n,
                                            groupId: i,
                                            tags: s,
                                            description: void 0 === a ? "" : a
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
                                        r = (0, n.Z)(e, o);
                                    return {
                                        url: "economy/store/".concat(t),
                                        method: "PUT",
                                        body: r
                                    }
                                },
                                invalidatesTags: function(e, t, r) {
                                    return [{
                                        type: "Store",
                                        id: r.storeId
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
                                invalidatesTags: function(e, t, r) {
                                    return [{
                                        type: "Store",
                                        id: r.storeId
                                    }, "Stores"]
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["Stores", "Store", "UserGroups"]
                }),
                a = s.useGetStoreQuery,
                l = s.useGetStoresQuery,
                u = s.useCreateStoreMutation,
                c = s.useUpdateStoreMutation;
            s.useDeleteStoreMutation
        }
    }
]);
//# sourceMappingURL=8ceb8d1fdfb24707ccdd59da02242e007a05046c1893a362df453fe15317c08c.js.map