"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8393], {
        26375: (e, t) => {
            var n = "id-card",
                a = [62147, "drivers-license"],
                r = "f2c2",
                i = "M0 96l576 0c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm0 32L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-288L0 128zM64 405.3c0-29.5 23.9-53.3 53.3-53.3l117.3 0c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7L74.7 416c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [576, 512, a, r, i]
            }, t.Uk = t.DF
        },
        23598: (e, t) => {
            var n = "money-bill",
                a = [],
                r = "f0d6",
                i = "M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm64 320l-64 0 0-64c35.3 0 64 28.7 64 64zM64 192l0-64 64 0c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64l0 64-64 0zm64-192c-35.3 0-64-28.7-64-64l64 0 0 64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [576, 512, a, r, i]
            }, t.aL = t.DF
        },
        18393: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => f
            });
            var a = n(15861),
                r = n(54546),
                i = n(23598),
                l = n(26375),
                o = n(64687),
                c = n.n(o),
                u = n(67294),
                s = n(96985),
                d = n(43862),
                m = n(83807),
                y = n(22202),
                p = n(6655);
            const f = function() {
                var e = (0, m.pc)(),
                    t = (0, y.IB)().data,
                    n = null == t ? void 0 : t.id,
                    o = (0, p.gq)({
                        userId: n
                    }, {
                        skip: !n,
                        refetchOnMountOrArgChange: !0
                    }),
                    f = o.data,
                    g = o.isLoading,
                    b = (0, p.O7)(),
                    E = (0, r.Z)(b, 2),
                    h = E[0],
                    T = E[1].isLoading,
                    v = u.useState("NODATA"),
                    k = (0, r.Z)(v, 2),
                    C = k[0],
                    O = k[1],
                    S = (0, p.$2)(),
                    w = (0, r.Z)(S, 2),
                    P = w[0],
                    M = w[1],
                    I = M.isLoading,
                    q = (M.isError, M.error, M.isSuccess, (0, p.ve)()),
                    z = (0, r.Z)(q, 2),
                    L = z[0],
                    N = z[1],
                    j = N.isLoading,
                    A = (N.isError, N.error, N.isSuccess, u.useState(100)),
                    D = (0, r.Z)(A, 2),
                    R = D[0],
                    Z = D[1],
                    K = u.useState(""),
                    U = (0, r.Z)(K, 2),
                    x = U[0],
                    G = U[1],
                    F = u.useState("standard"),
                    Q = (0, r.Z)(F, 2),
                    J = Q[0],
                    W = Q[1],
                    Y = u.useState("add"),
                    $ = (0, r.Z)(Y, 2),
                    B = $[0],
                    V = $[1];
                u.useEffect((function() {
                    G(t.id)
                }), [t]);
                var _ = function() {
                    var e = (0, a.Z)(c().mark((function e() {
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.t0 = B, e.next = "add" === e.t0 ? 3 : "subtract" === e.t0 ? 5 : 7;
                                    break;
                                case 3:
                                    return P({
                                        toUserId: x || n,
                                        amountTokens: R,
                                        toWalletType: J
                                    }), e.abrupt("break", 8);
                                case 5:
                                    return L({
                                        fromUserId: x || n,
                                        amountTokens: R
                                    }), e.abrupt("break", 8);
                                case 7:
                                    console.error("Unexpected tiliaTokenAction: ".concat(JSON.stringify(B)));
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                if (!e) return null;
                var X = T;
                return u.createElement(s.JX, {
                    className: "pb-5"
                }, u.createElement("h2", null, u.createElement(s.RL, {
                    to: "/home/marketplace"
                }, "Marketplace"), " - Staging Junk Drawer"), u.createElement("h3", null, "Tilia Account Status"), u.createElement(s.qX, {
                    type: "info",
                    title: "KYC Completion"
                }, g ? u.createElement(u.Fragment, null, u.createElement(d.Z, {
                    style: {
                        display: "inline-block"
                    }
                }), " Please wait warmly...") : u.createElement("code", null, u.createElement("pre", null, JSON.stringify(f, null, "  ")))), u.createElement("h3", null, "Set KYC Completion State"), u.createElement("select", {
                    className: "custom-select",
                    value: C,
                    onChange: function(e) {
                        O(e.target.value)
                    },
                    disabled: X
                }, ["ACCEPT", "DENY", "MANUAL_REVIEW", "NODATA", "PROCESSING", "REVERIFY"].map((function(e) {
                    return u.createElement("option", {
                        key: e,
                        value: e
                    }, e)
                }))), u.createElement(s.zx, {
                    onClick: function() {
                        h({
                            userId: n,
                            state: C
                        })
                    },
                    disabled: X
                }, u.createElement(s.$1, {
                    icon: l.Uk
                }), " Update KYC Completion"), u.createElement("h3", null, u.createElement("select", {
                    className: "custom-select",
                    style: {
                        font: "inherit",
                        fontSize: "inherit"
                    },
                    value: B,
                    onChange: function(e) {
                        V(e.target.value)
                    },
                    disabled: I || j
                }, u.createElement("option", {
                    value: "add"
                }, "Add to"), u.createElement("option", {
                    value: "subtract"
                }, "Subtract from")), "add" === B && u.createElement(u.Fragment, null, " ", u.createElement("select", {
                    className: "custom-select",
                    style: {
                        font: "inherit",
                        fontSize: "inherit"
                    },
                    value: J,
                    onChange: function(e) {
                        W(e.target.value)
                    },
                    disabled: I || j
                }, u.createElement("option", {
                    value: "standard"
                }, "standard"), u.createElement("option", {
                    value: "earnings"
                }, "earnings"))), " ", "wallet balance"), u.createElement("label", null, "User ID ", u.createElement("input", {
                    type: "text",
                    defaultValue: n,
                    value: x,
                    onChange: function(e) {
                        G(e.target.value)
                    }
                })), u.createElement("label", null, u.createElement(s.b5, null), u.createElement("input", {
                    type: "number",
                    value: R,
                    onChange: function(e) {
                        Z(e.target.value)
                    }
                })), u.createElement(s.zx, {
                    onClick: _,
                    loading: I || j,
                    disabled: 40 !== x.length || I || j
                }, u.createElement(s.$1, {
                    icon: i.aL
                }), " ", "add" === B ? "Add to ".concat(J) : "Subtract from", " wallet"))
            }
        },
        6655: (e, t, n) => {
            n.d(t, {
                $2: () => E,
                Cv: () => g,
                O7: () => m,
                Rq: () => T,
                S6: () => y,
                WA: () => f,
                gI: () => b,
                gq: () => d,
                kN: () => p,
                ve: () => h
            });
            var a = n(45987),
                r = n(4942),
                i = n(61509),
                l = ["redirect"],
                o = ["userId", "flowConfig"];

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = i.S.injectEndpoints({
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
                                        r = (0, a.Z)(e, l),
                                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        c = (i.userId, i.flowConfig),
                                        s = (0, a.Z)(i, o),
                                        d = new URL(n);
                                    return c && d.searchParams.set("flowConfig", JSON.stringify(c)), Object.keys(s).forEach((function(e) {
                                        "flow" !== e && d.searchParams.set(e, s[e])
                                    })), u({
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
                g = s.useCreateTiliaPayoutRequestMutation,
                b = s.useLazyGetTiliaWebRedirectUrlQuery,
                E = s.useGiveTiliaTokenBalanceMutation,
                h = s.useTakeTiliaTokenBalanceMutation,
                T = s.useGetTiliaKycQuery
        }
    }
]);
//# sourceMappingURL=6df8837d6037f6fa9b33f32c61c344101b779e52c739516b238ef581c4b79804.js.map