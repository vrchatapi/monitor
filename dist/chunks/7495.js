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
                k = r(96540),
                C = r(6376),
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
            var q = (0, k.lazy)(function() {
                    return Promise.all([r.e(6955), r.e(5242), r.e(3456), r.e(3325)]).then(r.bind(r, 63456))
                }),
                M = function(e) {
                    var t, r = e.store,
                        i = void 0 === r ? null : r,
                        c = e.listingId,
                        T = e.onClose,
                        P = void 0 === T ? function() {} : T,
                        j = e.onDelete,
                        M = void 0 === j ? function() {} : j,
                        $ = (0, C.wA)(),
                        G = (0, w.DF)(),
                        F = (0, y.P2)().data,
                        U = (0, C.d4)(function(e) {
                            return e.listingFlow
                        }),
                        W = U.isPreviewOpen,
                        H = U.selectedProducts,
                        Q = (0, k.useState)("listingInformation"),
                        R = (0, o.A)(Q, 2),
                        _ = R[0],
                        X = R[1],
                        Y = (0, k.useState)(null),
                        z = (0, o.A)(Y, 2),
                        B = z[0],
                        V = z[1],
                        J = (0, k.useState)({}),
                        Z = (0, o.A)(J, 2),
                        K = Z[0],
                        ee = Z[1],
                        te = (0, k.useState)(!1),
                        re = (0, o.A)(te, 2),
                        ne = re[0],
                        ie = re[1],
                        oe = (0, k.useMemo)(function() {
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
                        ue = (se.isError, se.error, (0, k.useMemo)(function() {
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
                        ye = (ge.isFetching, ge.isError, ge.error, (0, k.useMemo)(function() {
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
                    (0, k.useEffect)(function() {
                        return function() {
                            $((0, I.GS)())
                        }
                    }, []), (0, k.useEffect)(function() {
                        var e;
                        ae && (V(ae), $((0, I.RE)(null !== (e = ae.hydratedProducts) && void 0 !== e ? e : [])), $((0, I.mN)(ae.listingType)))
                    }, [ae]);
                    var Se = function(e) {
                            V(function(t) {
                                return D(D({}, t), e)
                            }), ee(function(t) {
                                return D(D({}, t), e)
                            })
                        },
                        Te = (0, v.GZ)(null !== (t = null == ae ? void 0 : ae.hydratedProducts) && void 0 !== t ? t : []),
                        Pe = Te.hasAllProductsDisabled,
                        ke = Te.hasSomeProductsDisabled,
                        Ce = Te.hasNoProductsDisabled,
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
                        Le = (0, k.useMemo)(function() {
                            var e, t;
                            if (!B) return !1;
                            if ("duration" === B.listingType) {
                                var r = [g.yT.MIN, g.yT.HOUR, g.yT.DAY].includes(B.durationType),
                                    n = (0, S.XA)(ae.durationType, ae.duration) && Number.isInteger(Number(B.duration)) && /^\d+$/.test(B.duration);
                                return r && n
                            }
                            var i = B.displayName.length >= 3,
                                o = ue ? g.gw : g.Hd,
                                s = B.priceTokens >= g.pb && B.priceTokens <= o && Number.isInteger(Number.parseInt(B.priceTokens)) && /^\d+$/.test(B.priceTokens),
                                a = null !== (e = null === (t = B.hydratedProducts) || void 0 === t ? void 0 : t.length) && void 0 !== e ? e : 0,
                                l = a > 0 && a <= g.B8;
                            return i && s && l && Ce
                        }, [B]),
                        Oe = le || me || we;
                    return k.createElement(k.Fragment, null, Oe && k.createElement("div", null, "Loading..."), !Oe && B && !ne && !W && k.createElement(p.fv, {
                        className: "tw:w-full tw:relative"
                    }, (Pe || ke) && k.createElement(p.$T, {
                        title: Pe ? "Listing is not purchasable" : "Listing contains some unavailable products",
                        type: "warn",
                        message: Pe ? "This listing cannot be purchased because it contains only products that are not eligible for sale. Resolve the issues to re-enable the listing and make it available to buyers." : "This listing is still available for purchase, but buyers will not receive the unavailable products included in the listing."
                    }), k.createElement(f.A, {
                        onChange: X,
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
                    }), k.createElement("div", {
                        className: "tw:w-full tw:relative"
                    }, "listingInformation" === _ && k.createElement(N.A, {
                        originalListing: ae,
                        editedListing: B,
                        onDataChange: Se,
                        isEditing: !0,
                        products: de,
                        listingType: B.listingType,
                        productsLoading: me
                    }), "storeAvailability" === _ && k.createElement(O.A, {
                        activeListing: B,
                        onDataChange: Se,
                        stores: fe,
                        activeStore: i,
                        isEditing: !0
                    })), k.createElement("div", {
                        className: "tw:mt-8 tw:justify-between tw:gap-3 tw:flex-col tw:sm:flex-row tw:flex tw:flex-wrap"
                    }, k.createElement("div", {
                        className: "tw:gap-3 tw:flex tw:flex-col tw:sm:flex-row tw:sm:max-w-1/2 tw:flex-auto"
                    }, k.createElement(p.$n, {
                        neutral: !0,
                        type: "button",
                        onClick: P,
                        containerClasses: "tw:md:max-w-[140px] tw:flex-1"
                    }, "Cancel"), k.createElement(p.$n, {
                        type: "button",
                        onClick: function() {
                            return M(ae)
                        },
                        neutral: !0,
                        containerClasses: "tw:md:max-w-[140px] tw:flex-1"
                    }, "Delete Listing")), k.createElement("div", {
                        className: "tw:gap-3 tw:flex tw:flex-col tw:sm:flex-row tw:sm:max-w-1/2 tw:justify-end tw:flex-auto tw:flex-wrap"
                    }, ue && k.createElement(p.$n, {
                        transparent: !0,
                        containerClasses: "tw:w-fit tw:md:max-w-[160px] tw:flex-1",
                        onClick: function() {
                            return Ne(!0)
                        }
                    }, k.createElement(p.M2, {
                        icon: a.Ju,
                        className: "tw:mr-2"
                    }), "Preview Listing"), k.createElement(p.$n, {
                        type: "button",
                        onClick: Ie ? function() {
                            ie(!0)
                        } : Ae,
                        containerClasses: "tw:md:max-w-[140px] tw:flex-1",
                        disabled: !Le
                    }, "Save")))), ne && k.createElement(p.fv, null, k.createElement(L.A, null), k.createElement("div", {
                        className: "tw:mt-8 tw:justify-between tw:gap-3 tw:flex-col tw:sm:flex-row tw:flex tw:flex-wrap"
                    }, k.createElement(p.$n, {
                        neutral: !0,
                        type: "button",
                        onClick: function() {
                            return ie(!1)
                        },
                        containerClasses: "tw:md:max-w-[170px] tw:flex-auto"
                    }, "Back"), k.createElement(p.$n, {
                        type: "button",
                        onClick: Ae,
                        containerClasses: "tw:sm:max-w-[240px] tw:flex-1",
                        disabled: !Le
                    }, "Publish Listing"))), W && ue && k.createElement(A.A, {
                        className: "tw:min-h-screen tw:bg-[#0A0A0D] tw:rounded-lg tw:p-0 tw:min-w-[340px]"
                    }, k.createElement(p.fI, {
                        className: "tw:justify-center tw:items-center tw:mb-3"
                    }, k.createElement(p.$n, {
                        neutral: !0,
                        containerClasses: "tw:w-fit",
                        onClick: function() {
                            return $((0, I.jT)(!1)), void $((0, I.D6)("Edit Listing"))
                        }
                    }, k.createElement(p.M2, {
                        icon: s.yY
                    }), " Close Preview")), k.createElement(k.Suspense, {
                        fallback: k.createElement("div", null, "Loading...")
                    }, k.createElement("div", {
                        className: "tw:border tw:border-solid  tw:border-hr-line-color tw:rounded-lg tw:p-5"
                    }, k.createElement(q, {
                        isPreview: !0,
                        products: H,
                        galleryImages: ye,
                        listing: B,
                        onClose: function() {
                            return Ne(!1)
                        }
                    })))))
                };
            M.propTypes = {
                listingId: P().string.isRequired,
                stores: P().array,
                onCancel: P().func,
                onDelete: P().func
            };
            const $ = M
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
//# sourceMappingURL=b2e80c72975f7a51cf02a0c9944667ab3b26d5de9358b32812bbe0d2b5455d65.js.map