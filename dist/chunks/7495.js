"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7495, 9876], {
        97495(e, t, r) {
            r.r(t), r.d(t, {
                default: () => $
            });
            var n = r(10467),
                i = r(64467),
                o = r(82544),
                s = r(88213),
                a = r(34912),
                l = r(34496),
                u = r(42217),
                c = r(54756),
                d = r.n(c),
                m = r(65950),
                p = r(71661),
                f = r(97071),
                w = r(75174),
                g = r(31069),
                v = r(78502),
                y = r(13951),
                b = r(31931),
                h = r(72784),
                E = r(6457),
                x = r(97087),
                I = r(70650),
                S = r(91069),
                T = r(5556),
                P = r.n(T),
                C = r(96540),
                k = r(6376),
                A = r(35169),
                L = r(24475),
                N = r(69886),
                O = r(15322);

            function j(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(r), !0).forEach(function(t) {
                        (0, i.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var M = (0, C.lazy)(function() {
                    return Promise.all([r.e(6955), r.e(5242), r.e(3456), r.e(1260)]).then(r.bind(r, 63456))
                }),
                q = function(e) {
                    var t = e.store,
                        r = void 0 === t ? null : t,
                        i = e.listingId,
                        c = e.onClose,
                        T = void 0 === c ? function() {} : c,
                        P = e.onDelete,
                        j = void 0 === P ? function() {} : P,
                        q = (0, k.wA)(),
                        $ = (0, f.DF)().showContentViolationModal,
                        G = (0, y.P2)().data,
                        F = (0, k.d4)(function(e) {
                            return e.listingFlow
                        }),
                        U = F.isPreviewOpen,
                        W = F.selectedProducts,
                        H = (0, C.useState)("listingInformation"),
                        Q = (0, o.A)(H, 2),
                        R = Q[0],
                        _ = Q[1],
                        V = (0, C.useState)(null),
                        X = (0, o.A)(V, 2),
                        Y = X[0],
                        z = X[1],
                        B = (0, C.useState)({}),
                        J = (0, o.A)(B, 2),
                        Z = J[0],
                        K = J[1],
                        ee = (0, C.useState)(!1),
                        te = (0, o.A)(ee, 2),
                        re = te[0],
                        ne = te[1],
                        ie = (0, C.useMemo)(function() {
                            return W.filter(function(e) {
                                return e.avatarId
                            }).map(function(e) {
                                return e.avatarId
                            })
                        }, [W]),
                        oe = (0, h.Qt)({
                            listingId: i,
                            hydrateProducts: !0,
                            hydrateStores: !0
                        }, {
                            skip: !i
                        }),
                        se = oe.data,
                        ae = oe.isLoading,
                        le = (oe.isError, oe.error, (0, C.useMemo)(function() {
                            return "permanent" === (null == se ? void 0 : se.listingType)
                        }, [se])),
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
                        xe = (Ee.isLoading, Ee.isSuccess, Ee.isError, Ee.error, !0 === (null == Z ? void 0 : Z.active) && !1 === (null == se ? void 0 : se.active));
                    (0, C.useEffect)(function() {
                        return function() {
                            q((0, I.GS)())
                        }
                    }, []), (0, C.useEffect)(function() {
                        se && (z(se), q((0, I.RE)(se.products)), q((0, I.mN)(se.listingType)))
                    }, [se]);
                    var Ie = function(e) {
                            z(function(t) {
                                return D(D({}, t), e)
                            }), K(function(t) {
                                return D(D({}, t), e)
                            })
                        },
                        Se = (0, v.GZ)(null == se ? void 0 : se.products),
                        Te = Se.hasAllProductsDisabled,
                        Pe = Se.hasSomeProductsDisabled,
                        Ce = Se.hasNoProductsDisabled,
                        ke = function() {
                            var e = (0, n.A)(d().mark(function e() {
                                var t, r, n;
                                return d().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = function() {
                                                q((0, m.X)({
                                                    title: "Listing updated successfully!",
                                                    icon: u.SG,
                                                    message: "Your listing has been updated successfully!",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), T()
                                            }, e.prev = 1, e.next = 4, he(D({
                                                listingId: se.id
                                            }, Z)).unwrap();
                                        case 4:
                                            t(), e.next = 13;
                                            break;
                                        case 7:
                                            if (e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), !$({
                                                    error: e.t0
                                                })) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 12:
                                            q((0, m.X)({
                                                title: "Failed to update listing!",
                                                icon: l.zp,
                                                message: null !== (r = null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : "Something went wrong",
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
                            q((0, I.D6)(null)), q((0, I.jT)(e))
                        },
                        Le = (0, C.useMemo)(function() {
                            if (!Y) return !1;
                            if ("duration" === Y.listingType) {
                                var e = [g.yT.MIN, g.yT.HOUR, g.yT.DAY].includes(Y.durationType),
                                    t = (0, S.XA)(se.durationType, se.duration) && Number.isInteger(Number(Y.duration)) && /^\d+$/.test(Y.duration);
                                return e && t
                            }
                            var r = Y.displayName.length >= 3,
                                n = le ? g.gw : g.Hd,
                                i = Y.priceTokens >= g.pb && Y.priceTokens <= n && Number.isInteger(parseInt(Y.priceTokens)) && /^\d+$/.test(Y.priceTokens),
                                o = Y.products.length > 0 && Y.products.length <= g.B8;
                            return r && i && o && Ce
                        }, [Y]),
                        Ne = ae || de || fe;
                    return C.createElement(C.Fragment, null, Ne && C.createElement("div", null, "Loading..."), !Ne && Y && !re && !U && C.createElement(p.fv, {
                        className: "tw-w-full tw-relative"
                    }, (Te || Pe) && C.createElement(p.$T, {
                        title: Te ? "Listing is not purchasable" : "Listing contains some unavailable products",
                        type: "warn",
                        message: Te ? "This listing cannot be purchased because it contains only products that are not eligible for sale. Resolve the issues to re-enable the listing and make it available to buyers." : "This listing is still available for purchase, but buyers will not receive the unavailable products included in the listing."
                    }), C.createElement(w.A, {
                        onChange: _,
                        justify: "left",
                        selected: R,
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
                    }, "listingInformation" === R && C.createElement(L.A, {
                        originalListing: se,
                        editedListing: Y,
                        onDataChange: Ie,
                        isEditing: !0,
                        products: ce,
                        listingType: Y.listingType,
                        productsLoading: de
                    }), "storeAvailability" === R && C.createElement(O.A, {
                        activeListing: Y,
                        onDataChange: Ie,
                        stores: pe,
                        activeStore: r,
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
                            return j(se)
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
                        icon: a.Ju,
                        className: "tw-mr-2"
                    }), "Preview Listing"), C.createElement(p.$n, {
                        type: "button",
                        onClick: xe ? function() {
                            ne(!0)
                        } : ke,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1",
                        disabled: !Le
                    }, "Save")))), re && C.createElement(p.fv, null, C.createElement(N.A, null), C.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, C.createElement(p.$n, {
                        neutral: !0,
                        type: "button",
                        onClick: function() {
                            return ne(!1)
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
                            return q((0, I.jT)(!1)), void q((0, I.D6)("Edit Listing"))
                        }
                    }, C.createElement(p.M2, {
                        icon: s.yY
                    }), " Close Preview")), C.createElement(C.Suspense, {
                        fallback: C.createElement("div", null, "Loading...")
                    }, C.createElement("div", {
                        className: "tw-border tw-border-solid  tw-border-hr-line-color tw-rounded-lg tw-p-5"
                    }, C.createElement(M, {
                        isPreview: !0,
                        products: W,
                        galleryImages: ve,
                        listing: Y,
                        onClose: function() {
                            return Ae(!1)
                        }
                    })))))
                };
            q.propTypes = {
                listingId: P().string.isRequired,
                stores: P().array,
                onCancel: P().func,
                onDelete: P().func
            };
            const $ = q
        },
        97087(e, t, r) {
            r.d(t, {
                HP: () => c,
                ST: () => u,
                _N: () => l,
                rg: () => a,
                s7: () => d
            });
            var n = r(80045),
                i = r(89483),
                o = ["storeId"],
                s = i.m.injectEndpoints({
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
                                        r = (0, n.A)(e, o);
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
                            }),
                            getEligibleWorlds: e.query({
                                query: function() {
                                    return {
                                        url: "economy/stores/eligibleWorlds",
                                        method: "GET"
                                    }
                                },
                                providesTags: ["Stores"]
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
                c = s.useUpdateStoreMutation,
                d = (s.useDeleteStoreMutation, s.useGetEligibleWorldsQuery)
        }
    }
]);
//# sourceMappingURL=0ec15baf1109fbfce2cb8a8d572dda971df0bcd2729f7884cd858c6271582875.js.map