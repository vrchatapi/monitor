"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7495, 9876], {
        97495(e, t, n) {
            n.r(t), n.d(t, {
                default: () => q
            });
            var r = n(10467),
                i = n(64467),
                o = n(82544),
                a = n(88213),
                s = n(34912),
                l = n(34496),
                u = n(42217),
                c = n(54756),
                d = n.n(c),
                m = n(65950),
                p = n(71661),
                f = n(97071),
                w = n(75174),
                g = n(31069),
                v = n(78502),
                y = n(13951),
                b = n(31931),
                h = n(72784),
                E = n(6457),
                x = n(97087),
                I = n(70650),
                S = n(91069),
                T = n(5556),
                P = n.n(T),
                C = n(96540),
                k = n(6376),
                A = n(35169),
                L = n(24475),
                N = n(69886),
                O = n(15322);

            function j(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(n), !0).forEach(function(t) {
                        (0, i.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var M = (0, C.lazy)(function() {
                    return Promise.all([n.e(6955), n.e(5242), n.e(3456), n.e(1260)]).then(n.bind(n, 63456))
                }),
                $ = function(e) {
                    var t = e.store,
                        n = void 0 === t ? null : t,
                        i = e.listingId,
                        c = e.onClose,
                        T = void 0 === c ? function() {} : c,
                        P = e.onDelete,
                        j = void 0 === P ? function() {} : P,
                        $ = (0, k.wA)(),
                        q = (0, f.DF)().showContentViolationModal,
                        G = (0, y.P2)().data,
                        F = (0, k.d4)(function(e) {
                            return e.listingFlow
                        }),
                        U = F.isPreviewOpen,
                        H = F.selectedProducts,
                        R = (0, C.useState)("listingInformation"),
                        _ = (0, o.A)(R, 2),
                        Q = _[0],
                        V = _[1],
                        X = (0, C.useState)(null),
                        Y = (0, o.A)(X, 2),
                        z = Y[0],
                        B = Y[1],
                        W = (0, C.useState)({}),
                        J = (0, o.A)(W, 2),
                        Z = J[0],
                        K = J[1],
                        ee = (0, C.useState)(!1),
                        te = (0, o.A)(ee, 2),
                        ne = te[0],
                        re = te[1],
                        ie = (0, C.useMemo)(function() {
                            return H.filter(function(e) {
                                return e.avatarId
                            }).map(function(e) {
                                return e.avatarId
                            })
                        }, [H]),
                        oe = (0, h.Qt)({
                            listingId: i,
                            hydrateProducts: !0,
                            hydrateStores: !0
                        }, {
                            skip: !i
                        }),
                        ae = oe.data,
                        se = oe.isLoading,
                        le = (oe.isError, oe.error, (0, C.useMemo)(function() {
                            return "permanent" === (null == ae ? void 0 : ae.listingType)
                        }, [ae])),
                        ue = (0, E.Cg)({
                            userId: G.id,
                            archived: !1
                        }, {
                            skip: !G
                        }),
                        ce = ue.data,
                        de = ue.isLoading,
                        me = (ue.isError, ue.error, (0, x._N)({
                            sellerId: G.id,
                            managementPov: !0
                        }, {
                            skip: !G
                        })),
                        pe = me.data,
                        fe = me.isLoading,
                        we = (me.isError, me.error, (0, b.Hg)({
                            avatarIds: ie
                        }, {
                            skip: !ie.length
                        })),
                        ge = we.data,
                        ve = (we.isFetching, we.isError, we.error, (0, C.useMemo)(function() {
                            return (null != ge ? ge : []).map(function(e) {
                                return {
                                    fileId: e.id,
                                    fileVersion: e.latestVersionFile.version,
                                    order: null == e ? void 0 : e.order
                                }
                            })
                        }, [ge])),
                        ye = (0, h.m8)(),
                        be = (0, o.A)(ye, 2),
                        he = be[0],
                        Ee = be[1],
                        xe = (Ee.isLoading, Ee.isSuccess, Ee.isError, Ee.error, !0 === (null == Z ? void 0 : Z.active) && !1 === (null == ae ? void 0 : ae.active));
                    (0, C.useEffect)(function() {
                        return function() {
                            $((0, I.GS)())
                        }
                    }, []), (0, C.useEffect)(function() {
                        ae && (B(ae), $((0, I.RE)(ae.products)), $((0, I.mN)(ae.listingType)))
                    }, [ae]);
                    var Ie = function(e) {
                            B(function(t) {
                                return D(D({}, t), e)
                            }), K(function(t) {
                                return D(D({}, t), e)
                            })
                        },
                        Se = (0, v.GZ)(null == ae ? void 0 : ae.products),
                        Te = Se.hasAllProductsDisabled,
                        Pe = Se.hasSomeProductsDisabled,
                        Ce = Se.hasNoProductsDisabled,
                        ke = function() {
                            var e = (0, r.A)(d().mark(function e() {
                                var t, n, r;
                                return d().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = function() {
                                                $((0, m.X)({
                                                    title: "Listing updated successfully!",
                                                    icon: u.SG,
                                                    message: "Your listing has been updated successfully!",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), T()
                                            }, e.prev = 1, e.next = 4, he(D({
                                                listingId: ae.id
                                            }, Z)).unwrap();
                                        case 4:
                                            t(), e.next = 13;
                                            break;
                                        case 7:
                                            if (e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), !q({
                                                    error: e.t0
                                                })) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 12:
                                            $((0, m.X)({
                                                title: "Failed to update listing!",
                                                icon: l.zp,
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
                        Ae = function(e) {
                            $((0, I.D6)(null)), $((0, I.jT)(e))
                        },
                        Le = (0, C.useMemo)(function() {
                            if (!z) return !1;
                            if ("duration" === z.listingType) {
                                var e = [g.yT.MIN, g.yT.HOUR, g.yT.DAY].includes(z.durationType),
                                    t = (0, S.XA)(ae.durationType, ae.duration) && Number.isInteger(Number(z.duration)) && /^\d+$/.test(z.duration);
                                return e && t
                            }
                            var n = z.displayName.length >= 3,
                                r = le ? g.gw : g.Hd,
                                i = z.priceTokens >= g.pb && z.priceTokens <= r && Number.isInteger(parseInt(z.priceTokens)) && /^\d+$/.test(z.priceTokens),
                                o = z.products.length > 0 && z.products.length <= g.B8;
                            return n && i && o && Ce
                        }, [z]),
                        Ne = se || de || fe;
                    return C.createElement(C.Fragment, null, Ne && C.createElement("div", null, "Loading..."), !Ne && z && !ne && !U && C.createElement(p.fv, {
                        className: "tw-w-full tw-relative"
                    }, (Te || Pe) && C.createElement(p.$T, {
                        title: Te ? "Listing is not purchasable" : "Listing contains some unavailable products",
                        type: "warn",
                        message: Te ? "This listing cannot be purchased because it contains only products that are not eligible for sale. Resolve the issues to re-enable the listing and make it available to buyers." : "This listing is still available for purchase, but buyers will not receive the unavailable products included in the listing."
                    }), C.createElement(w.A, {
                        onChange: V,
                        justify: "left",
                        selected: Q,
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
                    }, "listingInformation" === Q && C.createElement(L.A, {
                        originalListing: ae,
                        editedListing: z,
                        onDataChange: Ie,
                        isEditing: !0,
                        products: ce,
                        listingType: z.listingType,
                        productsLoading: de
                    }), "storeAvailability" === Q && C.createElement(O.A, {
                        activeListing: z,
                        onDataChange: Ie,
                        stores: pe,
                        activeStore: n,
                        isEditing: !0
                    })), C.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, C.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-flex-auto"
                    }, C.createElement(p.$n, {
                        neutral: !0,
                        type: "button",
                        onClick: T,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Cancel"), C.createElement(p.$n, {
                        type: "button",
                        onClick: function() {
                            return j(ae)
                        },
                        neutral: !0,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Delete Listing")), C.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-justify-end tw-flex-auto tw-flex-wrap"
                    }, le && C.createElement(p.$n, {
                        transparent: !0,
                        containerClasses: "tw-w-fit md:tw-max-w-[160px] tw-flex-1",
                        onClick: function() {
                            return Ae(!0)
                        }
                    }, C.createElement(p.M2, {
                        icon: s.Ju,
                        className: "tw-mr-2"
                    }), "Preview Listing"), C.createElement(p.$n, {
                        type: "button",
                        onClick: xe ? function() {
                            re(!0)
                        } : ke,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1",
                        disabled: !Le
                    }, "Save")))), ne && C.createElement(p.fv, null, C.createElement(N.A, null), C.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, C.createElement(p.$n, {
                        neutral: !0,
                        type: "button",
                        onClick: function() {
                            return re(!1)
                        },
                        containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                    }, "Back"), C.createElement(p.$n, {
                        type: "button",
                        onClick: ke,
                        containerClasses: "sm:tw-max-w-[240px] tw-flex-1",
                        disabled: !Le
                    }, "Publish Listing"))), U && le && C.createElement(A.A, {
                        className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-rounded-lg tw-p-0 tw-min-w-[340px]"
                    }, C.createElement(p.fI, {
                        className: "tw-justify-center tw-items-center tw-mb-3"
                    }, C.createElement(p.$n, {
                        neutral: !0,
                        containerClasses: "tw-w-fit",
                        onClick: function() {
                            return $((0, I.jT)(!1)), void $((0, I.D6)("Edit Listing"))
                        }
                    }, C.createElement(p.M2, {
                        icon: a.yY
                    }), " Close Preview")), C.createElement(C.Suspense, {
                        fallback: C.createElement("div", null, "Loading...")
                    }, C.createElement("div", {
                        className: "tw-border tw-border-solid  tw-border-hr-line-color tw-rounded-lg tw-p-5"
                    }, C.createElement(M, {
                        isPreview: !0,
                        products: H,
                        galleryImages: ve,
                        listing: z,
                        onClose: function() {
                            return Ae(!1)
                        }
                    })))))
                };
            $.propTypes = {
                listingId: P().string.isRequired,
                stores: P().array,
                onCancel: P().func,
                onDelete: P().func
            };
            const q = $
        },
        97087(e, t, n) {
            n.d(t, {
                HP: () => c,
                ST: () => u,
                _N: () => l,
                rg: () => s
            });
            var r = n(80045),
                i = n(89483),
                o = ["storeId"],
                a = i.m.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getStores: e.query({
                                query: function(e) {
                                    var t = e.sellerId,
                                        n = e.managementPov,
                                        r = void 0 !== n && n,
                                        i = e.n,
                                        o = void 0 === i ? 50 : i,
                                        a = e.offset;
                                    return {
                                        url: "economy/stores",
                                        params: {
                                            sellerId: t,
                                            managementPov: r,
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
                                        n = e.worldId,
                                        r = e.groupId,
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
                                            worldId: n,
                                            groupId: r,
                                            creatorId: i,
                                            hydrateListings: a,
                                            hydrateProducts: l,
                                            managementPov: void 0 !== u && u
                                        }
                                    }
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "Store",
                                        id: n.storeId
                                    }]
                                }
                            }),
                            createStore: e.mutation({
                                query: function(e) {
                                    var t = e.displayName,
                                        n = e.storeType,
                                        r = e.worldId,
                                        i = e.groupId,
                                        o = e.tags,
                                        a = void 0 === o ? [] : o,
                                        s = e.description;
                                    return {
                                        url: "economy/store",
                                        method: "POST",
                                        body: {
                                            displayName: t,
                                            storeType: n,
                                            worldId: r,
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
                                        n = (0, r.A)(e, o);
                                    return {
                                        url: "economy/store/".concat(t),
                                        method: "PUT",
                                        body: n
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "Store",
                                        id: n.storeId
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
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "Store",
                                        id: n.storeId
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
//# sourceMappingURL=895fe5abdba457be7cf29d37d24b2dccc521f88f82be5b5e89fc9afe936765ba.js.map