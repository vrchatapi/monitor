"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6815], {
        76815: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => s
            });
            var n = a(54546),
                r = a(67294),
                i = a(14411),
                o = a(43862),
                u = a(91401),
                c = a(32761);
            const s = function() {
                var e = (0, c.nj)(),
                    t = (0, n.Z)(e, 2),
                    a = t[0],
                    s = t[1],
                    l = s.isSuccess,
                    g = s.isError;
                return (0, r.useEffect)((function() {
                    l || g || a({
                        betaName: "age-verification-beta"
                    })
                }), [l, g]), r.createElement(r.Fragment, null, l || g ? r.createElement(r.Fragment, null, r.createElement(i.oI, null, r.createElement(i.X2, null, r.createElement(i.$1, {
                    icon: u.Z,
                    size: "2x",
                    className: "tw-mr-3"
                }), r.createElement("h4", null, "Age Verification Beta"))), r.createElement(i.Ao, null, "Thank you for logging your interest in Age Verification.", r.createElement("br", null), "You have been registered to get notified when we expand our Age Verification Beta.")) : r.createElement("div", {
                    className: "tw-text-center tw-mt-5"
                }, r.createElement(o.Z, {
                    size: "4x"
                })))
            }
        },
        32761: (e, t, a) => {
            a.d(t, {
                It: () => r,
                _m: () => i,
                nj: () => o
            });
            var n = a(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getBeta: e.query({
                                query: function(e) {
                                    var t = e.betaName;
                                    return "beta/".concat(t)
                                },
                                providesTags: function(e, t, a) {
                                    return [{
                                        type: "BetaApplication",
                                        id: a.betaName
                                    }]
                                }
                            }),
                            getBetaRegistration: e.query({
                                query: function(e) {
                                    var t = e.betaName;
                                    return "beta/".concat(t, "/register")
                                },
                                providesTags: function(e, t, a) {
                                    return [{
                                        type: "BetaRegistration",
                                        id: a.betaName
                                    }]
                                }
                            }),
                            createBetaRegistration: e.mutation({
                                query: function(e) {
                                    var t = e.betaName,
                                        a = e.metadata;
                                    return {
                                        url: "beta/".concat(t, "/register"),
                                        method: "POST",
                                        body: a
                                    }
                                },
                                invalidatesTags: function(e, t, a) {
                                    return [{
                                        type: "BetaRegistration",
                                        id: a.betaName
                                    }]
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["BetaApplication", "BetaRegistration"]
                }),
                r = n.useGetBetaQuery,
                i = n.useGetBetaRegistrationQuery,
                o = n.useCreateBetaRegistrationMutation
        }
    }
]);
//# sourceMappingURL=6517c6d078714d0b19eeb724bb0b4331f66a6aaff55b794e873c411e6537279f.js.map