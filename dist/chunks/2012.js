"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2012, 3642], {
        33642: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => q
            });
            var n = r(15861),
                o = r(4942),
                i = r(54546),
                a = r(68149),
                s = r(90502),
                l = r(76553),
                u = r(6811),
                c = r(64687),
                d = r.n(c),
                m = r(64258),
                f = r(14411),
                p = r(72998),
                w = r(95896),
                g = r(22202),
                v = r(41255),
                y = r(16869),
                x = r(67978),
                b = r(36183),
                E = r(39270),
                I = r(64358),
                h = r(45697),
                S = r.n(h),
                C = r(67294),
                P = r(32981),
                T = r(53637),
                k = r(68420),
                j = r(80938),
                O = r(99878);

            function L(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? L(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : L(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var D = (0, C.lazy)((function() {
                    return Promise.all([r.e(8043), r.e(2704), r.e(6239)]).then(r.bind(r, 22704))
                })),
                Z = function(e) {
                    var t = e.store,
                        r = void 0 === t ? null : t,
                        o = e.listingId,
                        c = e.onClose,
                        h = void 0 === c ? function() {} : c,
                        S = e.onDelete,
                        L = void 0 === S ? function() {} : S,
                        Z = (0, P.I0)(),
                        q = (0, g.XC)().data,
                        z = (0, P.v9)((function(e) {
                            return e.listingFlow
                        })),
                        F = z.isPreviewOpen,
                        G = z.selectedProducts,
                        M = (0, C.useState)("listingInformation"),
                        A = (0, i.Z)(M, 2),
                        U = A[0],
                        X = A[1],
                        Y = (0, C.useState)(null),
                        Q = (0, i.Z)(Y, 2),
                        _ = Q[0],
                        H = Q[1],
                        J = (0, C.useState)({}),
                        R = (0, i.Z)(J, 2),
                        V = R[0],
                        W = R[1],
                        $ = (0, C.useState)(!1),
                        B = (0, i.Z)($, 2),
                        K = B[0],
                        ee = B[1],
                        te = (0, C.useMemo)((function() {
                            return G.filter((function(e) {
                                return e.avatarId
                            })).map((function(e) {
                                return e.avatarId
                            }))
                        }), [G]),
                        re = (0, y.mr)({
                            listingId: o,
                            hydrateProducts: !0,
                            hydrateStores: !0
                        }, {
                            skip: !o
                        }),
                        ne = re.data,
                        oe = re.isLoading,
                        ie = (re.isError, re.error, (0, C.useMemo)((function() {
                            return "permanent" === (null == ne ? void 0 : ne.listingType)
                        }), [ne])),
                        ae = (0, x.x3)({
                            userId: q.id,
                            archived: !1
                        }, {
                            skip: !q
                        }),
                        se = ae.data,
                        le = ae.isLoading,
                        ue = (ae.isError, ae.error, (0, b.Ci)({
                            sellerId: q.id,
                            managementPov: !0
                        }, {
                            skip: !q
                        })),
                        ce = ue.data,
                        de = ue.isLoading,
                        me = (ue.isError, ue.error, (0, v.Qb)({
                            avatarIds: te
                        }, {
                            skip: !te.length
                        })),
                        fe = me.data,
                        pe = (me.isFetching, me.isError, me.error, (0, C.useMemo)((function() {
                            return (null != fe ? fe : []).map((function(e) {
                                return {
                                    fileId: e.id,
                                    fileVersion: e.latestVersionFile.version,
                                    order: null == e ? void 0 : e.order
                                }
                            }))
                        }), [fe])),
                        we = (0, y.Ij)(),
                        ge = (0, i.Z)(we, 2),
                        ve = ge[0],
                        ye = ge[1],
                        xe = (ye.isLoading, ye.isSuccess, ye.isError, ye.error, !0 === (null == V ? void 0 : V.active) && !1 === (null == ne ? void 0 : ne.active));
                    (0, C.useEffect)((function() {
                        return function() {
                            Z((0, E.rk)())
                        }
                    }), []), (0, C.useEffect)((function() {
                        ne && (H(ne), Z((0, E.fX)(ne.products)), Z((0, E.TY)(ne.listingType)))
                    }), [ne]);
                    var be = function(e) {
                            H((function(t) {
                                return N(N({}, t), e)
                            })), W((function(t) {
                                return N(N({}, t), e)
                            }))
                        },
                        Ee = function() {
                            var e = (0, n.Z)(d().mark((function e() {
                                var t, r, n;
                                return d().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = function() {
                                                Z((0, m.d)({
                                                    title: "Listing updated successfully!",
                                                    icon: u.f8,
                                                    message: "Your listing has been updated successfully!",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), h()
                                            }, e.prev = 1, e.next = 4, ve(N({
                                                listingId: ne.id
                                            }, V)).unwrap();
                                        case 4:
                                            t(), e.next = 11;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), Z((0, m.d)({
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
                        Ie = function(e) {
                            Z((0, E.Td)(null)), Z((0, E.xj)(e))
                        },
                        he = (0, C.useMemo)((function() {
                            if (!_) return !1;
                            if ("duration" === _.listingType) {
                                var e = [w.PG.MIN, w.PG.HOUR, w.PG.DAY].includes(_.durationType),
                                    t = (0, I.qG)(ne.durationType, ne.duration) && Number.isInteger(parseFloat(_.duration));
                                return e && t
                            }
                            var r = _.displayName.length >= 3,
                                n = _.priceTokens >= 100 && _.priceTokens <= 1e4 && Number.isInteger(parseFloat(_.priceTokens)),
                                o = _.products.length > 0 && _.products.length <= w._1;
                            return r && n && o
                        }), [_]),
                        Se = oe || le || de;
                    return C.createElement(C.Fragment, null, Se && C.createElement("div", null, "Loading..."), !Se && _ && !K && !F && C.createElement(f.JX, {
                        className: "tw-w-full tw-relative"
                    }, C.createElement(p.Z, {
                        onChange: X,
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
                    }, "listingInformation" === U && C.createElement(k.Z, {
                        originalListing: ne,
                        editedListing: _,
                        onDataChange: be,
                        isEditing: !0,
                        products: se,
                        listingType: _.listingType,
                        productsLoading: le
                    }), "storeAvailability" === U && C.createElement(O.Z, {
                        activeListing: _,
                        onDataChange: be,
                        stores: ce,
                        activeStore: r
                    })), C.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, C.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-flex-auto"
                    }, C.createElement(f.zx, {
                        neutral: !0,
                        type: "button",
                        onClick: h,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Cancel"), C.createElement(f.zx, {
                        type: "button",
                        onClick: function() {
                            return L(ne)
                        },
                        danger: !0,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Delete Listing")), C.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-justify-end tw-flex-auto tw-flex-wrap"
                    }, ie && C.createElement(f.zx, {
                        transparent: !0,
                        containerClasses: "tw-w-fit md:tw-max-w-[160px] tw-flex-1",
                        onClick: function() {
                            return Ie(!0)
                        }
                    }, C.createElement(f.$1, {
                        icon: s.wl,
                        className: "tw-mr-2"
                    }), "Preview Listing"), C.createElement(f.zx, {
                        type: "button",
                        onClick: xe ? function() {
                            ee(!0)
                        } : Ee,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1",
                        disabled: !he
                    }, "Save")))), K && C.createElement(f.JX, null, C.createElement(j.Z, null), C.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, C.createElement(f.zx, {
                        neutral: !0,
                        type: "button",
                        onClick: function() {
                            return ee(!1)
                        },
                        containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                    }, "Back"), C.createElement(f.zx, {
                        type: "button",
                        onClick: Ee,
                        containerClasses: "sm:tw-max-w-[240px] tw-flex-1",
                        disabled: !he
                    }, "Save"))), F && ie && C.createElement(T.Z, {
                        className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-border tw-border-[#2D363F] tw-rounded-lg tw-p-5"
                    }, C.createElement(f.X2, {
                        className: "tw-justify-center tw-items-center tw-mb-3"
                    }, C.createElement(f.zx, {
                        neutral: !0,
                        containerClasses: "tw-w-fit",
                        onClick: function() {
                            return Z((0, E.xj)(!1)), void Z((0, E.Td)("Edit Listing"))
                        }
                    }, C.createElement(f.$1, {
                        icon: a.YI
                    }), " Close Preview")), C.createElement(C.Suspense, {
                        fallback: C.createElement("div", null, "Loading...")
                    }, C.createElement(D, {
                        isPreview: !0,
                        products: G,
                        galleryImages: pe,
                        listing: _,
                        onClose: function() {
                            return Ie(!1)
                        }
                    }))))
                };
            Z.propTypes = {
                listingId: S().string.isRequired,
                stores: S().array,
                onCancel: S().func,
                onDelete: S().func
            };
            const q = Z
        },
        36183: (e, t, r) => {
            r.d(t, {
                Ci: () => l,
                j6: () => u,
                md: () => s,
                mt: () => c
            });
            var n = r(45987),
                o = r(61509),
                i = ["storeId"],
                a = o.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getStores: e.query({
                                query: function(e) {
                                    var t = e.sellerId,
                                        r = e.managementPov,
                                        n = void 0 !== r && r,
                                        o = e.n,
                                        i = void 0 === o ? 50 : o,
                                        a = e.offset;
                                    return {
                                        url: "economy/stores",
                                        params: {
                                            sellerId: t,
                                            managementPov: n,
                                            n: i,
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
                                        o = e.creatorId,
                                        i = e.hydrateListings,
                                        a = void 0 !== i && i,
                                        s = e.hydrateProducts,
                                        l = void 0 !== s && s,
                                        u = e.managementPov;
                                    return {
                                        url: "economy/store",
                                        params: {
                                            storeId: t,
                                            worldId: r,
                                            groupId: n,
                                            creatorId: o,
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
                                        o = e.groupId,
                                        i = e.tags,
                                        a = void 0 === i ? [] : i,
                                        s = e.description;
                                    return {
                                        url: "economy/store",
                                        method: "POST",
                                        body: {
                                            displayName: t,
                                            storeType: r,
                                            worldId: n,
                                            groupId: o,
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
                                        r = (0, n.Z)(e, i);
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
//# sourceMappingURL=4b0343241557d2f14e61544915eb211f7326ab6fb7d8ae9a82c5270528255b3e.js.map