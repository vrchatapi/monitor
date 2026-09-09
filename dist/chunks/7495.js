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
                f = r(75174),
                w = r(97071),
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
                N = r(24475),
                L = r(69886),
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
                    var t, r = e.store,
                        i = void 0 === r ? null : r,
                        c = e.listingId,
                        T = e.onClose,
                        P = void 0 === T ? function() {} : T,
                        j = e.onDelete,
                        q = void 0 === j ? function() {} : j,
                        $ = (0, k.wA)(),
                        G = (0, w.DF)().showContentViolationModal,
                        F = (0, y.P2)().data,
                        U = (0, k.d4)(function(e) {
                            return e.listingFlow
                        }),
                        W = U.isPreviewOpen,
                        H = U.selectedProducts,
                        Q = (0, C.useState)("listingInformation"),
                        R = (0, o.A)(Q, 2),
                        _ = R[0],
                        V = R[1],
                        X = (0, C.useState)(null),
                        Y = (0, o.A)(X, 2),
                        z = Y[0],
                        B = Y[1],
                        J = (0, C.useState)({}),
                        Z = (0, o.A)(J, 2),
                        K = Z[0],
                        ee = Z[1],
                        te = (0, C.useState)(!1),
                        re = (0, o.A)(te, 2),
                        ne = re[0],
                        ie = re[1],
                        oe = (0, C.useMemo)(function() {
                            return H.filter(function(e) {
                                return e.avatarId
                            }).map(function(e) {
                                return e.avatarId
                            })
                        }, [H]),
                        se = (0, h.Qt)({
                            listingId: c,
                            hydrateProducts: !0,
                            hydrateStores: !0
                        }, {
                            skip: !c
                        }),
                        ae = se.data,
                        le = se.isLoading,
                        ue = (se.isError, se.error, (0, C.useMemo)(function() {
                            return "permanent" === (null == ae ? void 0 : ae.listingType)
                        }, [ae])),
                        ce = (0, E.Cg)({
                            userId: F.id,
                            archived: !1
                        }, {
                            skip: !F
                        }),
                        de = ce.data,
                        me = ce.isLoading,
                        pe = (ce.isError, ce.error, (0, x._N)({
                            sellerId: F.id,
                            managementPov: !0
                        }, {
                            skip: !F
                        })),
                        fe = pe.data,
                        we = pe.isLoading,
                        ge = (pe.isError, pe.error, (0, b.Hg)({
                            avatarIds: oe
                        }, {
                            skip: !oe.length
                        })),
                        ve = ge.data,
                        ye = (ge.isFetching, ge.isError, ge.error, (0, C.useMemo)(function() {
                            return (null != ve ? ve : []).map(function(e) {
                                return {
                                    fileId: e.id,
                                    fileVersion: e.latestVersionFile.version,
                                    order: null == e ? void 0 : e.order
                                }
                            })
                        }, [ve])),
                        be = (0, h.m8)(),
                        he = (0, o.A)(be, 2),
                        Ee = he[0],
                        xe = he[1],
                        Ie = (xe.isLoading, xe.isSuccess, xe.isError, xe.error, !0 === (null == K ? void 0 : K.active) && !1 === (null == ae ? void 0 : ae.active));
                    (0, C.useEffect)(function() {
                        return function() {
                            $((0, I.GS)())
                        }
                    }, []), (0, C.useEffect)(function() {
                        var e;
                        ae && (B(ae), $((0, I.RE)(null !== (e = ae.hydratedProducts) && void 0 !== e ? e : [])), $((0, I.mN)(ae.listingType)))
                    }, [ae]);
                    var Se = function(e) {
                            B(function(t) {
                                return D(D({}, t), e)
                            }), ee(function(t) {
                                return D(D({}, t), e)
                            })
                        },
                        Te = (0, v.GZ)(null !== (t = null == ae ? void 0 : ae.hydratedProducts) && void 0 !== t ? t : []),
                        Pe = Te.hasAllProductsDisabled,
                        Ce = Te.hasSomeProductsDisabled,
                        ke = Te.hasNoProductsDisabled,
                        Ae = function() {
                            var e = (0, n.A)(d().mark(function e() {
                                var t, r, n;
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
                                                })), P()
                                            }, e.prev = 1, e.next = 4, Ee(D({
                                                listingId: ae.id
                                            }, K)).unwrap();
                                        case 4:
                                            t(), e.next = 13;
                                            break;
                                        case 7:
                                            if (e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), !G({
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
                        Ne = function(e) {
                            $((0, I.D6)(null)), $((0, I.jT)(e))
                        },
                        Le = (0, C.useMemo)(function() {
                            var e, t;
                            if (!z) return !1;
                            if ("duration" === z.listingType) {
                                var r = [g.yT.MIN, g.yT.HOUR, g.yT.DAY].includes(z.durationType),
                                    n = (0, S.XA)(ae.durationType, ae.duration) && Number.isInteger(Number(z.duration)) && /^\d+$/.test(z.duration);
                                return r && n
                            }
                            var i = z.displayName.length >= 3,
                                o = ue ? g.gw : g.Hd,
                                s = z.priceTokens >= g.pb && z.priceTokens <= o && Number.isInteger(Number.parseInt(z.priceTokens)) && /^\d+$/.test(z.priceTokens),
                                a = null !== (e = null === (t = z.hydratedProducts) || void 0 === t ? void 0 : t.length) && void 0 !== e ? e : 0,
                                l = a > 0 && a <= g.B8;
                            return i && s && l && ke
                        }, [z]),
                        Oe = le || me || we;
                    return C.createElement(C.Fragment, null, Oe && C.createElement("div", null, "Loading..."), !Oe && z && !ne && !W && C.createElement(p.fv, {
                        className: "tw-w-full tw-relative"
                    }, (Pe || Ce) && C.createElement(p.$T, {
                        title: Pe ? "Listing is not purchasable" : "Listing contains some unavailable products",
                        type: "warn",
                        message: Pe ? "This listing cannot be purchased because it contains only products that are not eligible for sale. Resolve the issues to re-enable the listing and make it available to buyers." : "This listing is still available for purchase, but buyers will not receive the unavailable products included in the listing."
                    }), C.createElement(f.A, {
                        onChange: V,
                        justify: "left",
                        selected: _,
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
                    }, "listingInformation" === _ && C.createElement(N.A, {
                        originalListing: ae,
                        editedListing: z,
                        onDataChange: Se,
                        isEditing: !0,
                        products: de,
                        listingType: z.listingType,
                        productsLoading: me
                    }), "storeAvailability" === _ && C.createElement(O.A, {
                        activeListing: z,
                        onDataChange: Se,
                        stores: fe,
                        activeStore: i,
                        isEditing: !0
                    })), C.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, C.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-flex-auto"
                    }, C.createElement(p.$n, {
                        neutral: !0,
                        type: "button",
                        onClick: P,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Cancel"), C.createElement(p.$n, {
                        type: "button",
                        onClick: function() {
                            return q(ae)
                        },
                        neutral: !0,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1"
                    }, "Delete Listing")), C.createElement("div", {
                        className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-justify-end tw-flex-auto tw-flex-wrap"
                    }, ue && C.createElement(p.$n, {
                        transparent: !0,
                        containerClasses: "tw-w-fit md:tw-max-w-[160px] tw-flex-1",
                        onClick: function() {
                            return Ne(!0)
                        }
                    }, C.createElement(p.M2, {
                        icon: a.Ju,
                        className: "tw-mr-2"
                    }), "Preview Listing"), C.createElement(p.$n, {
                        type: "button",
                        onClick: Ie ? function() {
                            ie(!0)
                        } : Ae,
                        containerClasses: "md:tw-max-w-[140px] tw-flex-1",
                        disabled: !Le
                    }, "Save")))), ne && C.createElement(p.fv, null, C.createElement(L.A, null), C.createElement("div", {
                        className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                    }, C.createElement(p.$n, {
                        neutral: !0,
                        type: "button",
                        onClick: function() {
                            return ie(!1)
                        },
                        containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                    }, "Back"), C.createElement(p.$n, {
                        type: "button",
                        onClick: Ae,
                        containerClasses: "sm:tw-max-w-[240px] tw-flex-1",
                        disabled: !Le
                    }, "Publish Listing"))), W && ue && C.createElement(A.A, {
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
                        icon: s.yY
                    }), " Close Preview")), C.createElement(C.Suspense, {
                        fallback: C.createElement("div", null, "Loading...")
                    }, C.createElement("div", {
                        className: "tw-border tw-border-solid  tw-border-hr-line-color tw-rounded-lg tw-p-5"
                    }, C.createElement(M, {
                        isPreview: !0,
                        products: H,
                        galleryImages: ye,
                        listing: z,
                        onClose: function() {
                            return Ne(!1)
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
//# sourceMappingURL=fb2f70f57d84b681f623104a0d15b5df0913ed4aa58dc2f6e1f267cf46171d6f.js.map