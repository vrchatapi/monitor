"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2012, 3642], {
        33642: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => Z
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
                g = r(95896),
                w = r(22202),
                v = r(41255),
                y = r(16869),
                I = r(67978),
                b = r(36183),
                x = r(39270),
                E = r(64358),
                h = r(45697),
                S = r.n(h),
                P = r(67294),
                T = r(32981),
                C = r(53637),
                k = r(68420),
                j = r(99878);

            function O(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var D = (0, P.lazy)((function() {
                    return Promise.all([r.e(8043), r.e(2704), r.e(6239)]).then(r.bind(r, 22704))
                })),
                N = function(e) {
                    var t = e.store,
                        r = void 0 === t ? null : t,
                        o = e.listingId,
                        c = e.onClose,
                        h = void 0 === c ? function() {} : c,
                        S = e.onDelete,
                        O = void 0 === S ? function() {} : S,
                        N = (0, T.I0)(),
                        Z = (0, w.XC)().data,
                        q = (0, T.v9)((function(e) {
                            return e.listingFlow
                        })),
                        F = q.isPreviewOpen,
                        G = q.selectedProducts,
                        M = (0, P.useState)("listingInformation"),
                        z = (0, i.Z)(M, 2),
                        A = z[0],
                        U = z[1],
                        X = (0, P.useState)(null),
                        Y = (0, i.Z)(X, 2),
                        Q = Y[0],
                        _ = Y[1],
                        H = (0, P.useState)({}),
                        R = (0, i.Z)(H, 2),
                        V = R[0],
                        W = R[1],
                        $ = (0, P.useMemo)((function() {
                            return G.filter((function(e) {
                                return e.avatarId
                            })).map((function(e) {
                                return e.avatarId
                            }))
                        }), [G]),
                        J = (0, y.mr)({
                            listingId: o,
                            hydrateProducts: !0,
                            hydrateStores: !0
                        }, {
                            skip: !o
                        }),
                        B = J.data,
                        K = J.isLoading,
                        ee = (J.isError, J.error, (0, P.useMemo)((function() {
                            return "permanent" === (null == B ? void 0 : B.listingType)
                        }), [B])),
                        te = (0, I.x3)({
                            userId: Z.id,
                            archived: !1
                        }, {
                            skip: !Z
                        }),
                        re = te.data,
                        ne = te.isLoading,
                        oe = (te.isError, te.error, (0, b.Ci)({
                            sellerId: Z.id,
                            managementPov: !0
                        }, {
                            skip: !Z
                        })),
                        ie = oe.data,
                        ae = oe.isLoading,
                        se = (oe.isError, oe.error, (0, v.Qb)({
                            avatarIds: $
                        }, {
                            skip: !$.length
                        })),
                        le = se.data,
                        ue = (se.isFetching, se.isError, se.error, (0, P.useMemo)((function() {
                            return (null != le ? le : []).map((function(e) {
                                return {
                                    fileId: e.id,
                                    fileVersion: e.latestVersionFile.version,
                                    order: null == e ? void 0 : e.order
                                }
                            }))
                        }), [le])),
                        ce = (0, y.Ij)(),
                        de = (0, i.Z)(ce, 2),
                        me = de[0],
                        fe = de[1];
                    fe.isLoading, fe.isSuccess, fe.isError, fe.error;
                    (0, P.useEffect)((function() {
                        return function() {
                            N((0, x.rk)())
                        }
                    }), []), (0, P.useEffect)((function() {
                        B && (_(B), N((0, x.fX)(B.products)), N((0, x.TY)(B.listingType)))
                    }), [B]);
                    var pe = function(e) {
                            _((function(t) {
                                return L(L({}, t), e)
                            })), W((function(t) {
                                return L(L({}, t), e)
                            }))
                        },
                        ge = function() {
                            var e = (0, n.Z)(d().mark((function e() {
                                var t, r, n;
                                return d().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = function() {
                                                N((0, m.d)({
                                                    title: "Listing updated successfully!",
                                                    icon: u.f8,
                                                    message: "Your listing has been updated successfully!",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), h()
                                            }, e.prev = 1, e.next = 4, me(L({
                                                listingId: B.id
                                            }, V)).unwrap();
                                        case 4:
                                            t(), e.next = 11;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), N((0, m.d)({
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
                        we = function(e) {
                            N((0, x.Td)(null)), N((0, x.xj)(e))
                        },
                        ve = (0, P.useMemo)((function() {
                            if (!Q) return !1;
                            if ("duration" === Q.listingType) {
                                var e = [g.PG.MIN, g.PG.HOUR, g.PG.DAY].includes(Q.durationType),
                                    t = (0, E.qG)(B.durationType, B.duration) && Number.isInteger(parseFloat(Q.duration));
                                return e && t
                            }
                            var r = Q.displayName.length >= 3,
                                n = Q.priceTokens >= 100 && Q.priceTokens <= 1e4 && Number.isInteger(parseFloat(Q.priceTokens)),
                                o = Q.products.length > 0 && Q.products.length <= g._1;
                            return r && n && o
                        }), [Q]),
                        ye = K || ne || ae;
                    return P.createElement(P.Fragment, null, ye && P.createElement("div", null, "Loading..."), !ye && Q && !F && P.createElement(f.JX, {
                        className: "tw-w-full tw-relative"
                    }, P.createElement(p.Z, {
                        onChange: U,
                        justify: "left",
                        selected: A,
                        tabs: [{
                            name: "Listing Information",
                            id: "listingInformation",
                            condition: !0
                        }, {
                            name: "Store Availability",
                            id: "storeAvailability",
                            condition: !0
                        }]
                    }), P.createElement("div", {
                        className: "tw-w-full tw-relative"
                    }, "listingInformation" === A && P.createElement(k.Z, {
                        originalListing: B,
                        editedListing: Q,
                        onDataChange: pe,
                        isEditing: !0,
                        products: re,
                        listingType: Q.listingType,
                        productsLoading: ne
                    }), "storeAvailability" === A && P.createElement(j.Z, {
                        activeListing: Q,
                        onDataChange: pe,
                        stores: ie,
                        activeStore: r
                    })), P.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, P.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-flex-auto"
                    }, P.createElement(f.zx, {
                        neutral: !0,
                        type: "button",
                        onClick: h,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Cancel"), P.createElement(f.zx, {
                        type: "button",
                        onClick: function() {
                            return O(B)
                        },
                        danger: !0,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Delete Listing")), P.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-justify-end tw-flex-auto tw-flex-wrap"
                    }, ee && P.createElement(f.zx, {
                        transparent: !0,
                        containerClasses: "tw-w-fit md:tw-max-w-[160px] tw-flex-1",
                        onClick: function() {
                            return we(!0)
                        }
                    }, P.createElement(f.$1, {
                        icon: s.wl,
                        className: "tw-mr-2"
                    }), "Preview Listing"), P.createElement(f.zx, {
                        type: "button",
                        onClick: ge,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1",
                        disabled: !ve
                    }, "Save")))), F && ee && P.createElement(C.Z, {
                        className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-border tw-border-[#2D363F] tw-rounded-lg tw-p-5"
                    }, P.createElement(f.X2, {
                        className: "tw-justify-center tw-items-center tw-mb-3"
                    }, P.createElement(f.zx, {
                        neutral: !0,
                        containerClasses: "tw-w-fit",
                        onClick: function() {
                            return N((0, x.xj)(!1)), void N((0, x.Td)("Edit Listing"))
                        }
                    }, P.createElement(f.$1, {
                        icon: a.YI
                    }), " Close Preview")), P.createElement(P.Suspense, {
                        fallback: P.createElement("div", null, "Loading...")
                    }, P.createElement(D, {
                        isPreview: !0,
                        products: G,
                        galleryImages: ue,
                        listing: Q,
                        onClose: function() {
                            return we(!1)
                        }
                    }))))
                };
            N.propTypes = {
                listingId: S().string.isRequired,
                stores: S().array,
                onCancel: S().func,
                onDelete: S().func
            };
            const Z = N
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
//# sourceMappingURL=2d77d0a8b020acfad15bc1d2003f5a38e75ccaf99c4597aeafbaaee675e27061.js.map