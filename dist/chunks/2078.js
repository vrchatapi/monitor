"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2078], {
        20174(e, t) {
            var n = "id-card",
                a = [62147, "drivers-license"],
                r = "f2c2",
                i = "M0 96l576 0c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm0 32L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-288L0 128zM64 405.3c0-29.5 23.9-53.3 53.3-53.3l117.3 0c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7L74.7 416c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z";
            t.mw = {
                prefix: "fas",
                iconName: n,
                icon: [576, 512, a, r, i]
            }, t.Lm = t.mw
        },
        22628(e, t) {
            var n = "money-bill",
                a = [],
                r = "f0d6",
                i = "M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm64 320l-64 0 0-64c35.3 0 64 28.7 64 64zM64 192l0-64 64 0c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64l0 64-64 0zm64-192c-35.3 0-64-28.7-64-64l64 0 0 64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z";
            t.mw = {
                prefix: "fas",
                iconName: n,
                icon: [576, 512, a, r, i]
            }, t.d0 = t.mw
        },
        32078(e, t, n) {
            n.r(t), n.d(t, {
                default: () => f
            });
            var a = n(10467),
                r = n(82544),
                i = n(22628),
                l = n(20174),
                o = n(54756),
                c = n.n(o),
                u = n(96540),
                s = n(15033),
                d = n(25538),
                m = n(194),
                y = n(13951),
                p = n(2090);
            const f = function() {
                var e = (0, m.Om)(),
                    t = (0, y.p$)().data,
                    n = null == t ? void 0 : t.id,
                    o = (0, p.mN)({
                        userId: n
                    }, {
                        skip: !n,
                        refetchOnMountOrArgChange: !0
                    }),
                    f = o.data,
                    E = o.isLoading,
                    g = (0, p.x6)(),
                    b = (0, r.A)(g, 2),
                    h = b[0],
                    T = b[1].isLoading,
                    v = u.useState("NODATA"),
                    C = (0, r.A)(v, 2),
                    O = C[0],
                    w = C[1],
                    k = (0, p.IV)(),
                    S = (0, r.A)(k, 2),
                    A = S[0],
                    M = S[1],
                    P = M.isLoading,
                    I = (M.isError, M.error, M.isSuccess, (0, p.SV)()),
                    q = (0, r.A)(I, 2),
                    z = q[0],
                    L = q[1],
                    N = L.isLoading,
                    j = (L.isError, L.error, L.isSuccess, u.useState(100)),
                    K = (0, r.A)(j, 2),
                    R = K[0],
                    D = K[1],
                    G = u.useState(""),
                    x = (0, r.A)(G, 2),
                    U = x[0],
                    V = x[1],
                    Q = u.useState("standard"),
                    W = (0, r.A)(Q, 2),
                    Y = W[0],
                    J = W[1],
                    $ = u.useState("add"),
                    _ = (0, r.A)($, 2),
                    F = _[0],
                    B = _[1];
                u.useEffect(function() {
                    V(t.id)
                }, [t]);
                var H = function() {
                    var e = (0, a.A)(c().mark(function e() {
                        return c().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.t0 = F, e.next = "add" === e.t0 ? 3 : "subtract" === e.t0 ? 5 : 7;
                                    break;
                                case 3:
                                    return A({
                                        toUserId: U || n,
                                        amountTokens: R,
                                        toWalletType: Y
                                    }), e.abrupt("break", 8);
                                case 5:
                                    return z({
                                        fromUserId: U || n,
                                        amountTokens: R
                                    }), e.abrupt("break", 8);
                                case 7:
                                    console.error("Unexpected tiliaTokenAction: ".concat(JSON.stringify(F)));
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                if (!e) return null;
                var X = T;
                return u.createElement(s.fv, {
                    className: "pb-5"
                }, u.createElement("h2", null, u.createElement(s.uW, {
                    to: "/home/marketplace"
                }, "Marketplace"), " - Staging Junk Drawer"), u.createElement("h3", null, "Tilia Account Status"), u.createElement(s.$T, {
                    type: "info",
                    title: "KYC Completion"
                }, E ? u.createElement(u.Fragment, null, u.createElement(d.A, {
                    style: {
                        display: "inline-block"
                    }
                }), " Please wait warmly...") : u.createElement("code", null, u.createElement("pre", null, JSON.stringify(f, null, "  ")))), u.createElement("h3", null, "Set KYC Completion State"), u.createElement("select", {
                    className: "custom-select",
                    value: O,
                    onChange: function(e) {
                        w(e.target.value)
                    },
                    disabled: X
                }, ["ACCEPT", "DENY", "MANUAL_REVIEW", "NODATA", "PROCESSING", "REVERIFY"].map(function(e) {
                    return u.createElement("option", {
                        key: e,
                        value: e
                    }, e)
                })), u.createElement(s.$n, {
                    onClick: function() {
                        h({
                            userId: n,
                            state: O
                        })
                    },
                    disabled: X
                }, u.createElement(s.M2, {
                    icon: l.Lm
                }), " Update KYC Completion"), u.createElement("h3", null, u.createElement("select", {
                    className: "custom-select",
                    style: {
                        font: "inherit",
                        fontSize: "inherit"
                    },
                    value: F,
                    onChange: function(e) {
                        B(e.target.value)
                    },
                    disabled: P || N
                }, u.createElement("option", {
                    value: "add"
                }, "Add to"), u.createElement("option", {
                    value: "subtract"
                }, "Subtract from")), "add" === F && u.createElement(u.Fragment, null, " ", u.createElement("select", {
                    className: "custom-select",
                    style: {
                        font: "inherit",
                        fontSize: "inherit"
                    },
                    value: Y,
                    onChange: function(e) {
                        J(e.target.value)
                    },
                    disabled: P || N
                }, u.createElement("option", {
                    value: "standard"
                }, "standard"), u.createElement("option", {
                    value: "earnings"
                }, "earnings"))), " ", "wallet balance"), u.createElement("label", null, "User ID ", u.createElement("input", {
                    type: "text",
                    defaultValue: n,
                    value: U,
                    onChange: function(e) {
                        V(e.target.value)
                    }
                })), u.createElement("label", null, u.createElement(s.eD, null), u.createElement("input", {
                    type: "number",
                    value: R,
                    onChange: function(e) {
                        D(e.target.value)
                    }
                })), u.createElement(s.$n, {
                    onClick: H,
                    loading: P || N,
                    disabled: 40 !== U.length || P || N
                }, u.createElement(s.M2, {
                    icon: i.d0
                }), " ", "add" === F ? "Add to ".concat(Y) : "Subtract from", " wallet"))
            }
        },
        2090(e, t, n) {
            n.d(t, {
                CH: () => g,
                GA: () => T,
                IV: () => b,
                OE: () => p,
                SV: () => h,
                mN: () => d,
                p_: () => E,
                qs: () => y,
                x6: () => m,
                zq: () => f
            });
            var a = n(80045),
                r = n(64467),
                i = n(89483),
                l = ["redirect"],
                o = ["userId", "flowConfig"];

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, a)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        (0, r.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var s = i.m.injectEndpoints({
                    endpoints: function(e) {
                        return u({
                            getTiliaKycCompletion: e.query({
                                query: function(e) {
                                    var t = e.userId;
                                    return "user/".concat(t, "/tilia/kyc")
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "TiliaKycCompletion",
                                        id: n.userId
                                    }]
                                }
                            }),
                            getTiliaKyc: e.query({
                                query: function() {
                                    return {
                                        url: "economy/seller/tiliaKyc",
                                        method: "GET"
                                    }
                                }
                            }),
                            getTiliaPayoutMethod: e.query({
                                query: function(e) {
                                    var t = e.paymentMethodId;
                                    return "tilia/payoutMethod/".concat(t)
                                }
                            }),
                            getTiliaPayoutEligible: e.query({
                                query: function() {
                                    return "tilia/payout/eligibility"
                                }
                            }),
                            getTiliaPayoutEstimate: e.query({
                                query: function(e) {
                                    return {
                                        url: "tilia/payout/estimate",
                                        method: "POST",
                                        body: {
                                            paymentMethodId: e.paymentMethodId,
                                            amountTokens: e.amountTokens
                                        }
                                    }
                                }
                            }),
                            createTiliaPayoutRequest: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "tilia/payout/request",
                                        method: "POST",
                                        body: {
                                            paymentMethodId: e.paymentMethodId,
                                            amountTokens: e.amountTokens
                                        }
                                    }
                                }
                            }),
                            getTiliaWebRedirectUrl: e.query({
                                query: function(e) {
                                    return {
                                        url: "tilia/web/redirect",
                                        method: "POST",
                                        body: {
                                            userId: e.userId,
                                            flow: e.flow
                                        }
                                    }
                                },
                                transformResponse: function(e, t) {
                                    var n = e.redirect,
                                        r = (0, a.A)(e, l),
                                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        c = (i.userId, i.flowConfig),
                                        s = (0, a.A)(i, o),
                                        d = new URL(n);
                                    return c && d.searchParams.set("flowConfig", JSON.stringify(c)), Object.keys(s).forEach(function(e) {
                                        "flow" !== e && d.searchParams.set(e, s[e])
                                    }), u({
                                        redirect: d.href,
                                        rawRedirect: n
                                    }, r)
                                }
                            })
                        }, !1)
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["TiliaKycCompletion", "TiliaStatus"]
                }),
                d = s.useGetTiliaKycCompletionQuery,
                m = s.useSetTiliaKycCompletionMutation,
                y = s.useGetTiliaPayoutMethodQuery,
                p = s.useGetTiliaPayoutEligibleQuery,
                f = s.useLazyGetTiliaPayoutEstimateQuery,
                E = s.useCreateTiliaPayoutRequestMutation,
                g = s.useLazyGetTiliaWebRedirectUrlQuery,
                b = s.useGiveTiliaTokenBalanceMutation,
                h = s.useTakeTiliaTokenBalanceMutation,
                T = s.useGetTiliaKycQuery
        }
    }
]);
//# sourceMappingURL=d9078500a96af8eed1e17736693371863a83e11085076c4b9e69a43476d9a211.js.map