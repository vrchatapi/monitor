"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2012, 3642], {
        33642: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => A
            });
            var n = r(15861),
                i = r(4942),
                o = r(54546),
                a = r(68149),
                s = r(90502),
                l = r(76553),
                u = r(6811),
                c = r(64687),
                d = r.n(c),
                m = r(64258),
                p = r(80988),
                f = r(90068),
                w = r(72998),
                g = r(95896),
                v = r(69116),
                y = r(22202),
                b = r(41255),
                x = r(16869),
                h = r(67978),
                E = r(36183),
                I = r(39270),
                S = r(64358),
                P = r(45697),
                C = r.n(P),
                T = r(67294),
                k = r(32981),
                j = r(53637),
                L = r(25423),
                O = r(80938),
                N = r(99878);

            function D(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? D(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : D(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var q = (0, T.lazy)((function() {
                    return Promise.all([r.e(2027), r.e(3348), r.e(9336), r.e(7995)]).then(r.bind(r, 29336))
                })),
                z = function(e) {
                    var t = e.store,
                        r = void 0 === t ? null : t,
                        i = e.listingId,
                        c = e.onClose,
                        P = void 0 === c ? function() {} : c,
                        C = e.onDelete,
                        D = void 0 === C ? function() {} : C,
                        z = (0, k.I0)(),
                        A = (0, f.P2)().showContentViolationModal,
                        M = (0, y.XC)().data,
                        G = (0, k.v9)((function(e) {
                            return e.listingFlow
                        })),
                        X = G.isPreviewOpen,
                        F = G.selectedProducts,
                        U = (0, T.useState)("listingInformation"),
                        Y = (0, o.Z)(U, 2),
                        $ = Y[0],
                        _ = Y[1],
                        Q = (0, T.useState)(null),
                        R = (0, o.Z)(Q, 2),
                        V = R[0],
                        H = R[1],
                        J = (0, T.useState)({}),
                        W = (0, o.Z)(J, 2),
                        B = W[0],
                        K = W[1],
                        ee = (0, T.useState)(!1),
                        te = (0, o.Z)(ee, 2),
                        re = te[0],
                        ne = te[1],
                        ie = (0, T.useMemo)((function() {
                            return F.filter((function(e) {
                                return e.avatarId
                            })).map((function(e) {
                                return e.avatarId
                            }))
                        }), [F]),
                        oe = (0, x.mr)({
                            listingId: i,
                            hydrateProducts: !0,
                            hydrateStores: !0
                        }, {
                            skip: !i
                        }),
                        ae = oe.data,
                        se = oe.isLoading,
                        le = (oe.isError, oe.error, (0, T.useMemo)((function() {
                            return "permanent" === (null == ae ? void 0 : ae.listingType)
                        }), [ae])),
                        ue = (0, h.x3)({
                            userId: M.id,
                            archived: !1
                        }, {
                            skip: !M
                        }),
                        ce = ue.data,
                        de = ue.isLoading,
                        me = (ue.isError, ue.error, (0, E.Ci)({
                            sellerId: M.id,
                            managementPov: !0
                        }, {
                            skip: !M
                        })),
                        pe = me.data,
                        fe = me.isLoading,
                        we = (me.isError, me.error, (0, b.Qb)({
                            avatarIds: ie
                        }, {
                            skip: !ie.length
                        })),
                        ge = we.data,
                        ve = (we.isFetching, we.isError, we.error, (0, T.useMemo)((function() {
                            return (null != ge ? ge : []).map((function(e) {
                                return {
                                    fileId: e.id,
                                    fileVersion: e.latestVersionFile.version,
                                    order: null == e ? void 0 : e.order
                                }
                            }))
                        }), [ge])),
                        ye = (0, x.Ij)(),
                        be = (0, o.Z)(ye, 2),
                        xe = be[0],
                        he = be[1],
                        Ee = (he.isLoading, he.isSuccess, he.isError, he.error, !0 === (null == B ? void 0 : B.active) && !1 === (null == ae ? void 0 : ae.active));
                    (0, T.useEffect)((function() {
                        return function() {
                            z((0, I.rk)())
                        }
                    }), []), (0, T.useEffect)((function() {
                        ae && (H(ae), z((0, I.fX)(ae.products)), z((0, I.TY)(ae.listingType)))
                    }), [ae]);
                    var Ie = function(e) {
                            H((function(t) {
                                return Z(Z({}, t), e)
                            })), K((function(t) {
                                return Z(Z({}, t), e)
                            }))
                        },
                        Se = (0, v.AA)(null == ae ? void 0 : ae.products),
                        Pe = Se.hasAllProductsDisabled,
                        Ce = Se.hasSomeProductsDisabled,
                        Te = Se.hasNoProductsDisabled,
                        ke = function() {
                            var e = (0, n.Z)(d().mark((function e() {
                                var t, r, n;
                                return d().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = function() {
                                                z((0, m.d)({
                                                    title: "Listing updated successfully!",
                                                    icon: u.f8,
                                                    message: "Your listing has been updated successfully!",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), P()
                                            }, e.prev = 1, e.next = 4, xe(Z({
                                                listingId: ae.id
                                            }, B)).unwrap();
                                        case 4:
                                            t(), e.next = 13;
                                            break;
                                        case 7:
                                            if (e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), !A({
                                                    error: e.t0
                                                })) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 12:
                                            z((0, m.d)({
                                                title: "Failed to update listing!",
                                                icon: l.eH,
                                                message: null !== (r = null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : "Something went wrong",
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
                        je = function(e) {
                            z((0, I.Td)(null)), z((0, I.xj)(e))
                        },
                        Le = (0, T.useMemo)((function() {
                            if (!V) return !1;
                            if ("duration" === V.listingType) {
                                var e = [g.PG.MIN, g.PG.HOUR, g.PG.DAY].includes(V.durationType),
                                    t = (0, S.qG)(ae.durationType, ae.duration) && Number.isInteger(Number(V.duration)) && /^\d+$/.test(V.duration);
                                return e && t
                            }
                            var r = V.displayName.length >= 3,
                                n = le ? g.YC : g._C,
                                i = V.priceTokens >= g.zD && V.priceTokens <= n && Number.isInteger(parseInt(V.priceTokens)) && /^\d+$/.test(V.priceTokens),
                                o = V.products.length > 0 && V.products.length <= g._1;
                            return r && i && o && Te
                        }), [V]),
                        Oe = se || de || fe;
                    return T.createElement(T.Fragment, null, Oe && T.createElement("div", null, "Loading..."), !Oe && V && !re && !X && T.createElement(p.JX, {
                        className: "tw-w-full tw-relative"
                    }, (Pe || Ce) && T.createElement(p.qX, {
                        title: Pe ? "Listing is not purchasable" : "Listing contains some unavailable products",
                        type: "warn",
                        message: Pe ? "This listing cannot be purchased because it contains only products that are not eligible for sale. Resolve the issues to re-enable the listing and make it available to buyers." : "This listing is still available for purchase, but buyers will not receive the unavailable products included in the listing."
                    }), T.createElement(w.Z, {
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
                    }), T.createElement("div", {
                        className: "tw-w-full tw-relative"
                    }, "listingInformation" === $ && T.createElement(L.Z, {
                        originalListing: ae,
                        editedListing: V,
                        onDataChange: Ie,
                        isEditing: !0,
                        products: ce,
                        listingType: V.listingType,
                        productsLoading: de
                    }), "storeAvailability" === $ && T.createElement(N.Z, {
                        activeListing: V,
                        onDataChange: Ie,
                        stores: pe,
                        activeStore: r,
                        isEditing: !0
                    })), T.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, T.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-flex-auto"
                    }, T.createElement(p.zx, {
                        neutral: !0,
                        type: "button",
                        onClick: P,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Cancel"), T.createElement(p.zx, {
                        type: "button",
                        onClick: function() {
                            return D(ae)
                        },
                        neutral: !0,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Delete Listing")), T.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-justify-end tw-flex-auto tw-flex-wrap"
                    }, le && T.createElement(p.zx, {
                        transparent: !0,
                        containerClasses: "tw-w-fit md:tw-max-w-[160px] tw-flex-1",
                        onClick: function() {
                            return je(!0)
                        }
                    }, T.createElement(p.$1, {
                        icon: s.wl,
                        className: "tw-mr-2"
                    }), "Preview Listing"), T.createElement(p.zx, {
                        type: "button",
                        onClick: Ee ? function() {
                            ne(!0)
                        } : ke,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1",
                        disabled: !Le
                    }, "Save")))), re && T.createElement(p.JX, null, T.createElement(O.Z, null), T.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, T.createElement(p.zx, {
                        neutral: !0,
                        type: "button",
                        onClick: function() {
                            return ne(!1)
                        },
                        containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                    }, "Back"), T.createElement(p.zx, {
                        type: "button",
                        onClick: ke,
                        containerClasses: "sm:tw-max-w-[240px] tw-flex-1",
                        disabled: !Le
                    }, "Publish Listing"))), X && le && T.createElement(j.Z, {
                        className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-rounded-lg tw-p-0 tw-min-w-[340px]"
                    }, T.createElement(p.X2, {
                        className: "tw-justify-center tw-items-center tw-mb-3"
                    }, T.createElement(p.zx, {
                        neutral: !0,
                        containerClasses: "tw-w-fit",
                        onClick: function() {
                            return z((0, I.xj)(!1)), void z((0, I.Td)("Edit Listing"))
                        }
                    }, T.createElement(p.$1, {
                        icon: a.YI
                    }), " Close Preview")), T.createElement(T.Suspense, {
                        fallback: T.createElement("div", null, "Loading...")
                    }, T.createElement("div", {
                        className: "tw-border tw-border-solid  tw-border-hr-line-color tw-rounded-lg tw-p-5"
                    }, T.createElement(q, {
                        isPreview: !0,
                        products: F,
                        galleryImages: ve,
                        listing: V,
                        onClose: function() {
                            return je(!1)
                        }
                    })))))
                };
            z.propTypes = {
                listingId: C().string.isRequired,
                stores: C().array,
                onCancel: C().func,
                onDelete: C().func
            };
            const A = z
        },
        36183: (e, t, r) => {
            r.d(t, {
                Ci: () => l,
                j6: () => u,
                md: () => s,
                mt: () => c
            });
            var n = r(45987),
                i = r(61509),
                o = ["storeId"],
                a = i.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getStores: e.query({
                                query: function(e) {
                                    var t = e.sellerId,
                                        r = e.managementPov,
                                        n = void 0 !== r && r,
                                        i = e.n,
                                        o = void 0 === i ? 50 : i,
                                        a = e.offset;
                                    return {
                                        url: "economy/stores",
                                        params: {
                                            sellerId: t,
                                            managementPov: n,
                                            n: o,
                                            offset: void 0 === a ? 0 : a
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
                                        a = void 0 !== o && o,
                                        s = e.hydrateProducts,
                                        l = void 0 !== s && s,
                                        u = e.managementPov;
                                    return {
                                        url: "economy/store",
                                        params: {
                                            storeId: t,
                                            worldId: r,
                                            groupId: n,
                                            creatorId: i,
                                            hydrateListings: a,
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
                                        a = void 0 === o ? [] : o,
                                        s = e.description;
                                    return {
                                        url: "economy/store",
                                        method: "POST",
                                        body: {
                                            displayName: t,
                                            storeType: r,
                                            worldId: n,
                                            groupId: i,
                                            tags: a,
                                            description: void 0 === s ? "" : s
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
                s = a.useGetStoreQuery,
                l = a.useGetStoresQuery,
                u = a.useCreateStoreMutation,
                c = a.useUpdateStoreMutation;
            a.useDeleteStoreMutation
        }
    }
]);
//# sourceMappingURL=f488e9ab6224419bcf2339e0e30c9a9f9fffe38d1ede35c7659b0e5ae7d69429.js.map