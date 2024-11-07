"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9847], {
        39847: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => M
            });
            var n = a(45987),
                i = a(54546),
                r = a(40767),
                s = a(96914),
                o = a(67294),
                l = a(529),
                u = (a(86961), a(26495)),
                d = a(30381),
                c = a.n(d),
                m = a(34226),
                p = a(72998),
                g = a(80873),
                v = a(22202),
                f = a(66736),
                y = a(16869),
                h = a(11976),
                b = ["_id"];
            l.kL.register(l.uw, l.f$, l.FB, l.od, l.jn, l.u, l.Gu), l.kL.defaults.color = "#f8f9fa", l.kL.defaults.borderColor = "rgba(127, 127, 127, 0.1)";
            var w = {
                    numPurchases: "Total Sales",
                    totalPurchasePrice: "Total Earnings"
                },
                E = [{
                    label: "Last 7 Days",
                    value: "P7D"
                }, {
                    label: "Last Month",
                    value: "P1M"
                }, {
                    label: "Last 3 Months",
                    value: "P3M"
                }, {
                    label: "Last 6 Months",
                    value: "P6M"
                }, {
                    label: "Last Year",
                    value: "P1Y"
                }, {
                    label: "Custom",
                    value: !1
                }],
                k = [{
                    label: "Day",
                    value: "days"
                }, {
                    label: "Week",
                    value: "weeks"
                }, {
                    label: "Month",
                    value: "months"
                }, {
                    label: "Year",
                    value: "years"
                }],
                I = function(e) {
                    return "weeks" === e ? "isoweek" : e
                },
                L = function(e) {
                    var t = c().duration(e);
                    if (t.asDays() < 1) throw new RangeError("computeValuesForDurationTemplate: durationTemplate ".concat(e, " resulted in an invalid duration"));
                    var a = function(e) {
                            if (!c().isDuration(e)) throw new TypeError("duration ".concat(e, " is not a valid duration object"));
                            return e.asMonths() > 11 ? "months" : e.asMonths() > 2 ? "weeks" : "days"
                        }(t),
                        n = I(a),
                        i = c()(),
                        r = i.clone().endOf(n);
                    return {
                        groupByDuration: a,
                        metricDateStart: i.clone().add(1, n).startOf(n).subtract(t),
                        metricDateEnd: r
                    }
                };
            const M = function() {
                var e, t, a, l = (0, v.IB)().data,
                    d = null == l ? void 0 : l.id,
                    M = o.useState("numPurchases"),
                    D = (0, i.Z)(M, 2),
                    Y = D[0],
                    T = D[1],
                    S = o.useState(E[0].value),
                    C = (0, i.Z)(S, 2),
                    x = C[0],
                    N = C[1],
                    G = (0, f.B3)({
                        sellerId: d,
                        groupByDuration: "years",
                        metricDateStart: h.pH,
                        metricDateEnd: "2511-03-07"
                    }, {
                        skip: !d,
                        refetchOnMountOrArgChange: !0
                    }),
                    O = G.data,
                    P = G.isLoading,
                    U = (G.isError, G.error, o.useMemo((function() {
                        var e = 0;
                        return null == O || O.forEach((function(t) {
                            var a = t.numPurchases;
                            e += a
                        })), e
                    }), [O])),
                    q = o.useMemo((function() {
                        return L(x)
                    }), []),
                    Z = q.groupByDuration,
                    j = q.metricDateStart,
                    B = q.metricDateEnd,
                    A = o.useState(Z),
                    W = (0, i.Z)(A, 2),
                    _ = W[0],
                    F = W[1],
                    H = o.useState(j),
                    R = (0, i.Z)(H, 2),
                    V = R[0],
                    X = R[1],
                    $ = (0, g.Nr)(V),
                    z = o.useState(B),
                    Q = (0, i.Z)(z, 2),
                    J = Q[0],
                    K = Q[1],
                    ee = (0, g.Nr)(J),
                    te = o.useState(!1),
                    ae = (0, i.Z)(te, 2),
                    ne = ae[0],
                    ie = ae[1],
                    re = o.useState(),
                    se = (0, i.Z)(re, 2),
                    oe = se[0],
                    le = se[1],
                    ue = o.useMemo((function() {
                        return [c().isMoment(V) && V.isAfter(h.pH) && V.isBefore(J || c()().add(2, "y")), c().isMoment(J) && J.isAfter(V || h.pH) && J.isBefore(c()().add(2, "y"))]
                    }), [V, J]),
                    de = (0, i.Z)(ue, 2),
                    ce = de[0],
                    me = de[1];
                o.useEffect((function() {
                    if (x) {
                        var e = L(x),
                            t = e.groupByDuration,
                            a = e.metricDateStart,
                            n = e.metricDateEnd;
                        F(t), X(a), K(n)
                    }
                }), [x]);
                var pe = (0, f.B3)({
                        sellerId: d,
                        groupByDuration: _,
                        metricDateStart: null == $ ? void 0 : $.toISOString(),
                        metricDateEnd: null == ee ? void 0 : ee.toISOString(),
                        listingIds: oe ? [oe] : oe
                    }, {
                        skip: !(d && $ && ee && ce && me),
                        refetchOnMountOrArgChange: !0
                    }),
                    ge = pe.data,
                    ve = pe.isFetching,
                    fe = pe.isError,
                    ye = pe.error,
                    he = o.useMemo((function() {
                        var e = [],
                            t = {};
                        return null == ge || ge.forEach((function(a) {
                            var i = a._id,
                                r = (0, n.Z)(a, b);
                            e.push(i), t[Y] || (t[Y] = {
                                yAxisId: Y,
                                label: w[Y] || Y,
                                data: [],
                                backgroundColor: "#064b5c",
                                borderColor: "#086c84"
                            }), t[Y].data.push(r[Y])
                        })), {
                            labels: e,
                            datasets: Object.values(t)
                        }
                    }), [ge, Y]),
                    be = function() {
                        ne || ie(!0)
                    },
                    we = (0, y.Ul)({
                        userId: d,
                        hydrate: !0
                    }, {
                        skip: !oe && !ne
                    }),
                    Ee = we.data,
                    ke = void 0 === Ee ? [] : Ee,
                    Ie = we.isLoading,
                    Le = we.isError,
                    Me = we.error,
                    De = o.useMemo((function() {
                        var e = [{
                            label: "All"
                        }];
                        return Ie ? e.push({
                            label: "Loading…"
                        }) : ke.forEach((function(t) {
                            var a = t.id,
                                n = t.displayName;
                            e.push({
                                label: n,
                                value: a
                            })
                        })), e
                    }), [ke, Ie]),
                    Ye = ve || V !== $ || J !== ee || P,
                    Te = !(null != he && null !== (e = he.datasets) && void 0 !== e && e.length),
                    Se = o.useMemo((function() {
                        switch (_) {
                            case "years":
                                return "YYYY";
                            case "months":
                                return "MMM YYYY";
                            case "weeks":
                                return "[Week] ww, GGGG";
                            default:
                                return "MMM DD, YYYY"
                        }
                    }), [_]),
                    Ce = o.useMemo((function() {
                        var e = function(e) {
                            return "".concat(e, " credits")
                        };
                        return {
                            responsive: !0,
                            animation: !1,
                            aspectRatio: 2,
                            plugins: {
                                tooltip: {
                                    callbacks: {
                                        label: "totalPurchasePrice" === Y ? function(t) {
                                            var a = t.dataset,
                                                n = t.parsed;
                                            return (a.label ? "".concat(a.label, ": ") : "") + e(n.y)
                                        } : void 0
                                    }
                                }
                            },
                            datasets: {
                                line: {
                                    spanGaps: !1
                                }
                            },
                            scales: {
                                x: {
                                    type: "time",
                                    time: {
                                        unit: null == _ ? void 0 : _.replace(/s$/, ""),
                                        tooltipFormat: Se,
                                        displayFormats: {
                                            week: "GGGG [W]ww"
                                        }
                                    }
                                },
                                y: {
                                    beginAtZero: !0,
                                    ticks: {
                                        precision: 0,
                                        callback: "totalPurchasePrice" === Y ? e : void 0
                                    }
                                }
                            }
                        }
                    }), [Y, _, Se]);
                return o.createElement(o.Fragment, null, o.createElement(m.X2, {
                    className: "align-items-center flex-wrap mb-1",
                    style: {
                        justifyContent: "space-between"
                    }
                }, o.createElement("div", {
                    style: {
                        marginBottom: -8
                    }
                }, o.createElement(p.Z, {
                    justify: "left",
                    selected: Y,
                    onChange: T,
                    tabs: Object.entries(w).map((function(e) {
                        var t = (0, i.Z)(e, 2);
                        return {
                            id: t[0],
                            name: t[1],
                            condition: !0
                        }
                    }))
                })), o.createElement(m.zx, {
                    disabled: !d || oe && (Ie || Le) || !V || !J || !ce || !me || Te,
                    onClick: function() {
                        var e;
                        if (!oe || !Ie && !Le && null != ge && ge.length) {
                            var t = document.createElement("a");
                            t.style.display = "none";
                            var a = "weeks" === _ ? "GGGG-[W]ww" : "YYYY-MM-DD",
                                n = oe && (null == ke || null === (e = ke.find((function(e) {
                                    return e.id === oe
                                }))) || void 0 === e ? void 0 : e.displayName);
                            t.setAttribute("download", "VRChat Sales".concat(n ? " for ".concat(n) : "", " by ").concat(_.replace(/s$/, ""), " - ").concat(V.format(a), " to ").concat(J.format(a), ".csv"));
                            var i = Object.keys(ge[0]),
                                r = null == ge ? void 0 : ge.map((function(e) {
                                    return i.map((function(t) {
                                        return e[t]
                                    })).join(",")
                                }));
                            i[0] = _, r.unshift(i.join(",")), t.setAttribute("href", "data:text/csv;encoding:utf-8,".concat(encodeURIComponent(r.join("\n")))), document.body.appendChild(t), t.click(), document.body.removeChild(t)
                        }
                    }
                }, o.createElement(m.$1, {
                    icon: r.q7
                }), " Download")), o.createElement(m.X2, {
                    className: "align-items-center flex-wrap tw-gap-1"
                }, o.createElement(m.Lt, {
                    label: "Duration",
                    onChange: N,
                    value: x,
                    options: E
                }), o.createElement(m.Lt, {
                    label: "Group By",
                    disabled: !!x,
                    onChange: F,
                    value: _,
                    options: k
                }), o.createElement("div", {
                    className: "d-flex align-items-center flex-wrap"
                }, o.createElement(m.II, {
                    type: "date",
                    className: "tw-mr-1",
                    disabled: !!x,
                    invalid: ce,
                    value: null == V ? void 0 : V.format("YYYY-MM-DD"),
                    onChange: function(e) {
                        var t = c()(e.target.value).startOf(I(_));
                        X(t)
                    },
                    min: h.pH,
                    max: null == J ? void 0 : J.format("YYYY-MM-DD")
                }), " to ", o.createElement(m.II, {
                    type: "date",
                    className: "tw-ml-1",
                    disabled: !!x,
                    invalid: me,
                    value: null == J ? void 0 : J.format("YYYY-MM-DD"),
                    onChange: function(e) {
                        var t = c()(e.target.value).endOf(I(_));
                        K(t)
                    },
                    min: (null == V ? void 0 : V.format("YYYY-MM-DD")) || h.pH,
                    max: c()().add(2, "y").format("YYYY-MM-DD")
                })), o.createElement("div", {
                    className: "d-flex justify-content-end",
                    style: {
                        flex: "1 1 auto"
                    }
                }, o.createElement(m.Lt, {
                    style: {
                        minWidth: 200,
                        maxWidth: 300
                    },
                    trimToLength: !0,
                    label: "Listing",
                    onChange: le,
                    onMouseEnter: be,
                    onClick: be,
                    value: oe,
                    options: De
                }))), fe && o.createElement(m.qX, {
                    type: "error",
                    title: "Error loading data"
                }, null == ye || null === (t = ye.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), Le && o.createElement(m.qX, {
                    type: "error",
                    title: "Error loading listings"
                }, null == Me || null === (a = Me.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message), !Ye && Te && U > 0 && o.createElement(m.qX, {
                    type: "warn",
                    title: "No Data"
                }, "There are no sales matching this set of filters."), Ye ? o.createElement(m.UU, {
                    style: {
                        minHeight: 100,
                        aspectRatio: Ce.aspectRatio.toString(10)
                    }
                }) : U <= 0 ? o.createElement("div", {
                    className: "tw-flex-auto tw-flex-wrap tw-flex-row tw-text-center tw-m-[10%]"
                }, o.createElement(m.$1, {
                    icon: s.St,
                    size: "lg",
                    width: 60,
                    className: "tw-mb-6"
                }), o.createElement("h4", {
                    className: "tw-mb-2"
                }, "You haven't made any sales yet."), o.createElement("span", {
                    className: "tw-text-gray-500 tw-mb-8"
                }, "The Dashboard allows you to display charts about your sales and earnings.")) : o.createElement(u.x1, {
                    datasetIdKey: "_id",
                    options: Ce,
                    data: he
                }), "weeks" === _ && o.createElement(m.qX, {
                    type: "dark",
                    slim: !0,
                    className: "mb-0"
                }, "Weekly data is tabulated using ISO weeks, which always begin on a Monday and end on a Sunday. The first and last ISO weeks can overlap into the previous or next calendar year, respectively. More information about ISO weeks can be found", " ", o.createElement("a", {
                    href: "https://en.wikipedia.org/wiki/ISO_week_date",
                    target: "_blank",
                    rel: "noreferrer"
                }, "on Wikipedia"), "."))
            }
        },
        16869: (e, t, a) => {
            a.d(t, {
                Cb: () => c,
                G4: () => o,
                Ij: () => l,
                Jr: () => d,
                Ul: () => r,
                mr: () => s,
                oy: () => u
            });
            var n = a(42138),
                i = a(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getUserListings: e.query({
                                query: function(e) {
                                    var t = e.userId,
                                        a = e.n,
                                        n = void 0 === a ? 50 : a,
                                        i = e.offset,
                                        r = void 0 === i ? 0 : i,
                                        s = e.groupId,
                                        o = e.active,
                                        l = e.archived,
                                        u = e.hydrate;
                                    return {
                                        url: "user/".concat(t, "/listings"),
                                        params: {
                                            n,
                                            offset: r,
                                            groupId: s,
                                            active: o,
                                            archived: l,
                                            hydrate: u
                                        }
                                    }
                                },
                                providesTags: function(e, t, a) {
                                    var i = a.userId;
                                    return [].concat((0, n.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Listing",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "UserListings",
                                        id: i
                                    }])
                                }
                            }),
                            getListing: e.query({
                                query: function(e) {
                                    var t = e.listingId,
                                        a = e.hydrate;
                                    return {
                                        url: "listing/".concat(t),
                                        params: {
                                            hydrate: a
                                        }
                                    }
                                },
                                providesTags: function(e, t, a) {
                                    return [{
                                        type: "Listing",
                                        id: a.listingId
                                    }]
                                }
                            }),
                            createListing: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "listing",
                                        method: "POST",
                                        body: {
                                            displayName: e.displayName,
                                            description: e.description,
                                            tags: e.tags,
                                            listingVariants: e.listingVariants,
                                            imageId: e.imageId,
                                            productType: e.productType,
                                            products: e.products,
                                            priceTokens: e.priceTokens,
                                            duration: e.duration,
                                            durationType: e.durationType,
                                            active: e.active,
                                            groupId: e.groupId,
                                            permanent: e.permanent,
                                            instant: e.instant,
                                            stackable: e.stackable,
                                            recurrable: e.recurrable
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, a) {
                                    var i = a.ownerId;
                                    return [].concat((0, n.Z)(e ? [{
                                        type: "Listing",
                                        id: e.id
                                    }] : []), [{
                                        type: "UserListings",
                                        id: i
                                    }])
                                }
                            }),
                            updateListing: e.mutation({
                                query: function(e) {
                                    var t = e.listingId,
                                        a = e.displayName,
                                        n = e.description,
                                        i = e.tags,
                                        r = e.listingVariants,
                                        s = e.imageId,
                                        o = e.products,
                                        l = e.priceTokens,
                                        u = e.duration,
                                        d = e.durationType,
                                        c = e.active,
                                        m = e.groupId,
                                        p = e.archive,
                                        g = e.permanent,
                                        v = e.instant,
                                        f = e.stackable,
                                        y = e.recurrable;
                                    return {
                                        url: "listing/".concat(t),
                                        method: "PUT",
                                        body: {
                                            displayName: a,
                                            description: n,
                                            tags: i,
                                            listingVariants: r,
                                            imageId: s,
                                            products: o,
                                            priceTokens: l,
                                            duration: u,
                                            durationType: d,
                                            active: c,
                                            groupId: m,
                                            archive: p,
                                            permanent: g,
                                            instant: v,
                                            stackable: f,
                                            recurrable: y
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, a) {
                                    return [{
                                        type: "Listing",
                                        id: a.listingId
                                    }, {
                                        type: "UserListings",
                                        id: a.ownerId
                                    }]
                                }
                            }),
                            activateListing: e.mutation({
                                query: function(e) {
                                    var t = e.listingId;
                                    return {
                                        url: "listing/".concat(t, "/activate"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: function(e, t, a) {
                                    return [{
                                        type: "Listing",
                                        id: a.listingId
                                    }, {
                                        type: "UserListings",
                                        id: a.ownerId
                                    }]
                                }
                            }),
                            deactivateListing: e.mutation({
                                query: function(e) {
                                    var t = e.listingId;
                                    return {
                                        url: "listing/".concat(t, "/deactivate"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: function(e, t, a) {
                                    return [{
                                        type: "Listing",
                                        id: a.listingId
                                    }, {
                                        type: "UserListings",
                                        id: a.ownerId
                                    }]
                                }
                            }),
                            deleteListing: e.mutation({
                                query: function(e) {
                                    var t = e.listingId,
                                        a = e.force;
                                    return {
                                        url: "listing/".concat(t),
                                        method: "DELETE",
                                        params: {
                                            force: a
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, a) {
                                    return [{
                                        type: "Listing",
                                        id: a.listingId
                                    }, {
                                        type: "UserListings",
                                        id: a.ownerId
                                    }]
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["UserListings", "Listing"]
                }),
                r = i.useGetUserListingsQuery,
                s = i.useGetListingQuery,
                o = i.useCreateListingMutation,
                l = i.useUpdateListingMutation,
                u = i.useActivateListingMutation,
                d = i.useDeactivateListingMutation,
                c = i.useDeleteListingMutation
        }
    }
]);
//# sourceMappingURL=8aed1c4fef523a1af6723d83c9d1ee79420e4ddbbd12b7f92db079b0d41158f9.js.map