"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8051], {
        71560: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => ne
            });
            var r = a(42138),
                l = a(54546),
                n = a(40767),
                o = a(14411),
                i = a(72998),
                s = a(529),
                c = (a(86961), a(27484)),
                u = a.n(c),
                w = a(7124),
                m = a.n(w),
                d = a(30381),
                p = a.n(d),
                f = a(67294),
                x = a(26495),
                b = a(12752),
                h = a(95896),
                g = a(22202),
                v = a(66736),
                y = a(16869),
                E = a(67978),
                N = a(4942),
                k = a(15861),
                M = a(4965),
                D = a(64687),
                S = a.n(D),
                C = a(6655),
                P = a(64358),
                Y = a(89250),
                O = a(56646),
                j = a(45697),
                T = a.n(j),
                I = function(e) {
                    var t = e.title,
                        a = e.credits,
                        r = void 0 === a ? null : a,
                        l = e.link,
                        n = void 0 === l ? null : l,
                        i = e.cta,
                        s = void 0 === i ? null : i,
                        c = e.hideGlyph,
                        u = void 0 !== c && c,
                        w = e.customNoCreditsText,
                        m = void 0 === w ? null : w,
                        d = e.className,
                        p = e.isError,
                        x = void 0 !== p && p,
                        b = e.error,
                        h = null === r || 0 === r;
                    if (x) {
                        var g = b || "An unknown error occurred";
                        return f.createElement("div", {
                            className: "tw-bg-grey tw-p-5 tw-rounded-xl tw-@container/marketplacePanel tw-w-full ".concat(d)
                        }, f.createElement("h5", {
                            className: "tw-text-xl tw-font-bold after:tw-border-none tw-no-underline tw-mb-3"
                        }, t), f.createElement("p", {
                            className: "tw-text-placeholder-text tw-mb-12"
                        }, "Failed to retrieve data: ", g))
                    }
                    return f.createElement("div", {
                        className: "tw-bg-grey tw-p-5 tw-rounded-xl tw-@container/marketplacePanel tw-w-full ".concat(d)
                    }, f.createElement("h5", {
                        className: "tw-text-xl tw-font-bold after:tw-border-none tw-no-underline tw-mb-3"
                    }, t), h && f.createElement("p", {
                        className: "tw-text-placeholder-text tw-mb-12"
                    }, m || "Nothing here (yet)"), !h && f.createElement("p", {
                        className: "tw-text-white tw-text-4xl tw-font-bold tw-mb-8"
                    }, !u && f.createElement(o.b5, {
                        className: "tw-text-[#6ae3f9] tw-mr-1"
                    }), r.toLocaleString()), f.createElement("div", {
                        className: " tw-justify-between tw-flex tw-flex-col @[300px]/marketplacePanel:tw-flex-row @[300px]/marketplacePanel:tw-items-end  "
                    }, f.createElement(o.zx, {
                        className: "tw-px-[10px] tw-py-[7px] tw-mb-2 @[300px]/marketplacePanel:tw-mb-0",
                        disabled: null == s ? void 0 : s.isDisabled,
                        onClick: null == s ? void 0 : s.onClickCallback,
                        title: null == s ? void 0 : s.title
                    }, s.text), null !== n && f.createElement("span", null, f.createElement(o.$1, {
                        icon: O.faCircleInfo
                    }), f.createElement("a", {
                        href: null == n ? void 0 : n.href,
                        className: "tw-text-sm tw-underline tw-font-thin tw-ml-1 tw-text-subtext-grey",
                        referrerPolicy: "no-referrer"
                    }, null == n ? void 0 : n.text))))
                };
            I.propTypes = {
                title: T().string.isRequired,
                credits: T().number,
                link: T().shape({
                    href: T().string,
                    text: T().string
                }),
                cta: T().shape({
                    text: T().string,
                    onClickCallback: T().func,
                    isDisabled: T().bool
                }),
                hideGlyph: T().bool,
                customNoCreditsText: T().string
            };
            const Z = I;

            function G(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(a), !0).forEach((function(t) {
                        (0, N.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : G(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            const R = function() {
                var e, t, a = (0, g.IB)().data,
                    r = null == a ? void 0 : a.id,
                    n = (0, Y.s0)(),
                    i = (0, C.gI)(),
                    s = (0, l.Z)(i, 1)[0],
                    c = (0, Y.oQ)("/home/marketplace/storefront/payout"),
                    u = (0, C.v$)({
                        userId: r
                    }, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }).data,
                    w = (0, v.uK)({
                        sellerId: r,
                        groupByDuration: "years",
                        metricDateStart: h.pH,
                        metricDateEnd: "2511-03-07"
                    }, {
                        skip: !r
                    }),
                    m = w.data,
                    d = void 0 === m ? {
                        totals: {
                            totalEarnings: 0,
                            otpPurchaseCount: 0,
                            subscriberMonths: 0
                        }
                    } : m,
                    p = w.isFetching,
                    x = w.isError,
                    b = w.error,
                    y = (0, C.pp)({
                        userId: r,
                        type: "earnings"
                    }, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }).data,
                    E = (void 0 === y ? {
                        balance: 0
                    } : y).balance,
                    N = f.useMemo((function() {
                        var e, t, a;
                        return {
                            allTimeNumPurchases: Number(null == d || null === (e = d.totals) || void 0 === e ? void 0 : e.otpPurchaseCount) + Number(null == d || null === (t = d.totals) || void 0 === t ? void 0 : t.subscriberMonths),
                            allTimeTotalPurchasePrice: null == d || null === (a = d.totals) || void 0 === a ? void 0 : a.totalEarnings
                        }
                    }), [d]),
                    M = N.allTimeNumPurchases,
                    D = N.allTimeTotalPurchasePrice,
                    O = null == u ? void 0 : u.signed_tos,
                    j = (0, f.useMemo)((function() {
                        return O ? E < h.vC ? "You must have at least ".concat(h.vC.toLocaleString(), " credits available to pay out.") : "Pay Out Now" : "Tilia's Terms of Service may have changed. You'll need to accept their updated Terms of Service before you pay out."
                    }), [u, E]);
                return f.createElement(f.Fragment, null, x && f.createElement(o.qX, {
                    type: "error",
                    title: "Error loading statistics"
                }, "Failed to fetch earnings: ", null == b || null === (e = b.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message), f.createElement("div", {
                    className: "tw-flex tw-w-full tw-gap-3 tw-my-4 tw-flex-col sm:tw-flex-row"
                }, p ? f.createElement(f.Fragment, null, f.createElement(A, null), f.createElement(A, {
                    delay: 100
                })) : f.createElement(f.Fragment, null, f.createElement(Z, {
                    title: "Available Payout",
                    credits: Number(E) || 0,
                    link: {
                        text: "About Payout",
                        href: "https://www.tilia.io/legal/terms-of-service"
                    },
                    cta: {
                        text: "Payout",
                        onClickCallback: (t = (0, k.Z)(S().mark((function e() {
                            var t, r;
                            return S().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, s(L(L({}, P.$Z.PAYOUT), {}, {
                                            userId: a.id,
                                            returnUrl: new URL(c, window.location.href)
                                        })).unwrap();
                                    case 2:
                                        t = e.sent, r = t.redirect, window.location.assign(r);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function() {
                            return t.apply(this, arguments)
                        }),
                        isDisabled: E < h.vC || !O,
                        title: j
                    }
                }), f.createElement(Z, {
                    title: "Total Sales",
                    hideGlyph: !0,
                    credits: Number(M || 0),
                    cta: {
                        text: "View Details",
                        onClickCallback: function() {
                            n("/home/marketplace/storefront/revenue/mysales")
                        },
                        isDisabled: !1
                    }
                }), f.createElement(Z, {
                    title: "Total Earned",
                    credits: Number(D || 0),
                    cta: {
                        text: "View Details",
                        onClickCallback: function() {
                            n("/home/marketplace/storefront/revenue/mysales")
                        },
                        isDisabled: !1
                    }
                }))))
            };
            var A = (0, M.Z)(o.UU, {
                    target: "e129v97h1"
                })({
                    name: "rdii6n",
                    styles: "flex:1 1 240px;min-height:148px;margin:0.5rem;border-radius:8px"
                }),
                B = a(87709),
                F = a(86646),
                U = a(68055),
                _ = function(e) {
                    var t = e.steps,
                        a = e.currentStepNumber,
                        r = t.filter((function(e) {
                            return e.isHiddenStep
                        }));
                    return f.createElement("ol", {
                        className: "tw-max-w-[650px] tw-flex tw-justify-between tw-items-start tw-pl-[0px] xs:tw-pl-[44px]"
                    }, t.map((function(e, l) {
                        var n = Number(a) > Number(e.number),
                            o = Number(a) === Number(e.number),
                            i = l === t.length - (r.length + 1);
                        if (e.isHiddenStep) return null;
                        return f.createElement("li", {
                            key: e.number,
                            className: "\n              tw-list-none\n              xs:tw-flex tw-flex-col\n              xs:tw-w-[120px] sm:tw-w-[340px]\n              ".concat(o ? "" : "tw-hidden", "\n            "),
                            "aria-label": "".concat(o ? "Current step: ".concat(e.label) : "", " ")
                        }, f.createElement("div", {
                            className: "\n              tw-list-none tw-flex tw-items-center\n              ".concat(n ? "after:tw-border-green" : "after:tw-border-lighter-grey", "\n              after:tw-border-0 after:tw-content-[''] after:tw-w-full after:tw-border-b-[1px] after:tw-border-solid after:tw-mx-2\n              after:tw-flex\n              ").concat(i ? "after:tw-hidden" : "xs:after:tw-flex", "\n              ").concat(o ? "after:tw-hidden" : "", "\n            ")
                        }, f.createElement("div", {
                            className: "tw-flex tw-flex-col tw-items-start"
                        }, f.createElement("div", {
                            className: "\n                  tw-border-solid tw-border-2 tw-border-full\n                  tw-w-8 tw-h-8 tw-rounded-full\n                  tw-flex tw-items-center tw-justify-center tw-text-sm\n                  after:tw-w-full after:tw-h-1 after:tw-border-b\n                  ".concat("", "\n                  ").concat(n ? "tw-border-green tw-text-[#000] tw-bg-green" : o ? "tw-border-green tw-text-white" : "tw-border-light-grey tw-text-light-grey", "\n                ")
                        }, n ? f.createElement(F.Z, {
                            icon: U.LE,
                            "aria-label": "Done"
                        }) : e.number))), f.createElement("div", {
                            className: "tw-text-sm tw-text-center tw-w-[130px] tw--ml-[44px] tw-mt-2 ".concat(o ? "tw-text-white tw-font-bold" : "tw-text-light-grey")
                        }, e.label))
                    })))
                };
            _.propTypes = {
                steps: T().arrayOf(T().shape({
                    number: T().number.isRequired,
                    label: T().string.isRequired,
                    isHiddenStep: T().bool
                })).isRequired,
                currentStepNumber: T().number.isRequired
            };
            const q = _;
            var H = a(15832),
                W = a(79655),
                X = a(34698);
            const $ = a.p + "7cad9f1f8b11b4060d8dcf99c259d4474a6740e249c0f7346db2d09929ae3220.png",
                K = a.p + "48d4f7e7b13c122dd05368c83fe31445acd702f869a8fe12dddd798405348751.png",
                z = a.p + "c1becf4493c453ba551cea61c7053848eddec27fc172c89ceaceda8fa728f450.png",
                V = a.p + "7ef55804fb1330c747702ccf55ff39625cfe41dadd0efa98f2c77777db069eab.png";
            var Q = function(e) {
                var t, a = e.currentStepNumber,
                    r = (0, H._)("myStoreTutorialDismissed", !1),
                    n = (0, l.Z)(r, 2),
                    o = n[0],
                    i = n[1],
                    s = [{
                        number: 1,
                        label: "Create a Product or subscription",
                        content: function() {
                            return f.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-between @[700px]/tutorial:tw-flex-row tw-pt-0 @[700px]/tutorial:tw-px-12 @[700px]/tutorial:tw-py-9"
                            }, f.createElement("img", {
                                src: K,
                                alt: "",
                                className: " tw-rounded-lg tw-max-w-full tw-object-cover @[700px]/tutorial:tw-max-w-[240px]  @[790px]/tutorial:tw-max-w-[300px] @[905px]/tutorial:tw-max-w-[350px] @[955px]/tutorial:tw-max-w-[400px] @[1160px]/tutorial:tw-max-w-[500px]"
                            }), f.createElement("div", {
                                className: " tw-flex tw-flex-col tw-max-w-full tw-ml-0 @[700px]/tutorial:tw-max-w-full @[700px]/tutorial:tw-ml-4 "
                            }, f.createElement("h4", {
                                className: "tw-text-white tw-font-bold tw-text-lg tw-mt-4"
                            }, "Enhance in-world experiences and engage with your community"), f.createElement("p", {
                                className: "tw-text-light-grey tw-text-sm tw-mt-2"
                            }, "Products allow you to customize interactions and behaviors in your worlds. Subscriptions ensure you a regular income from your supporters."), f.createElement("p", {
                                className: "tw-text-light-grey tw-text-sm tw-mt-2"
                            }, "Proceed to the next step by creating your first product or subscription!"), f.createElement("div", {
                                className: "tw-flex"
                            }, f.createElement(W.rU, {
                                to: "/home/marketplace/storefront/products"
                            }, f.createElement(X.Z, {
                                className: "tw-mt-4 tw-h-10 tw-bg-button-bg tw-text-highlight tw-leading-none tw-border-transparent hover:tw-border-highlight"
                            }, "Create Product")), f.createElement(W.rU, {
                                to: "/home/marketplace/storefront/subscriptions"
                            }, f.createElement(X.Z, {
                                className: "tw-mt-4 tw-h-10 tw-bg-button-bg tw-text-highlight tw-leading-none tw-border-transparent hover:tw-border-highlight tw-ml-4"
                            }, "Create Subscription")))))
                        }
                    }, {
                        number: 2,
                        label: "Setup your store and publish it",
                        content: function() {
                            return f.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-between @[700px]/tutorial:tw-flex-row tw-pt-0 @[700px]/tutorial:tw-px-12 @[700px]/tutorial:tw-py-9"
                            }, f.createElement("img", {
                                src: z,
                                alt: "",
                                className: " tw-rounded-lg tw-max-w-full tw-object-cover @[700px]/tutorial:tw-max-w-[240px]  @[790px]/tutorial:tw-max-w-[300px] @[905px]/tutorial:tw-max-w-[350px] @[955px]/tutorial:tw-max-w-[400px] @[1160px]/tutorial:tw-max-w-[500px]"
                            }), f.createElement("div", {
                                className: " tw-flex tw-flex-col tw-max-w-full tw-ml-0 @[700px]/tutorial:tw-max-w-full @[700px]/tutorial:tw-ml-4 "
                            }, f.createElement("h4", {
                                className: "tw-text-white tw-font-bold tw-text-lg tw-mt-4"
                            }, "Build your storefronts from the store manager"), f.createElement("p", {
                                className: "tw-text-light-grey tw-text-sm tw-mt-2"
                            }, "Organize your listings, create bundles and set prices. Preview how your stores appear in-world, on the marketplace tab and in the corresponding group and world pages."), f.createElement("div", {
                                className: "tw-flex"
                            }, f.createElement(W.rU, {
                                to: "/home/marketplace/storefront/stores"
                            }, f.createElement(X.Z, {
                                className: "tw-mt-4 tw-h-10 tw-bg-button-bg tw-text-highlight tw-leading-none tw-border-transparent hover:tw-border-highlight"
                            }, "Manage Stores")))))
                        }
                    }, {
                        number: 3,
                        label: "Make your first sale!",
                        content: function() {
                            return f.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-between @[700px]/tutorial:tw-flex-row tw-pt-0 @[700px]/tutorial:tw-px-12 @[700px]/tutorial:tw-py-9"
                            }, f.createElement("img", {
                                src: V,
                                alt: "",
                                className: " tw-rounded-lg tw-max-w-full tw-object-cover @[700px]/tutorial:tw-max-w-[240px]  @[790px]/tutorial:tw-max-w-[300px] @[905px]/tutorial:tw-max-w-[350px] @[955px]/tutorial:tw-max-w-[400px] @[1160px]/tutorial:tw-max-w-[500px]"
                            }), f.createElement("div", {
                                className: " tw-flex tw-flex-col tw-max-w-full tw-ml-0 @[700px]/tutorial:tw-max-w-full @[700px]/tutorial:tw-ml-4 "
                            }, f.createElement("h4", {
                                className: "tw-text-white tw-font-bold tw-text-lg tw-mt-4"
                            }, "You are all set to start selling!"), f.createElement("p", {
                                className: "tw-text-light-grey tw-text-sm tw-mt-2"
                            }, "The final step to greatness. Share your store, promote your work, and make your first sale! You can track all your sales and subscribers on the", " ", f.createElement(W.rU, {
                                to: "/home/marketplace/storefront/revenue/mysales",
                                title: "Revenue section"
                            }, "Revenue section"), ".")))
                        }
                    }, {
                        number: 4,
                        label: "Make your first sale!",
                        isHiddenStep: !0,
                        content: function() {
                            return f.createElement("div", {
                                className: "tw-flex tw-flex-col tw-justify-between @[700px]/tutorial:tw-flex-row tw-pt-0 @[700px]/tutorial:tw-px-12 @[700px]/tutorial:tw-py-9"
                            }, f.createElement("img", {
                                src: $,
                                alt: "",
                                className: " tw-rounded-lg tw-max-w-full tw-object-cover @[700px]/tutorial:tw-max-w-[240px]  @[790px]/tutorial:tw-max-w-[300px] @[905px]/tutorial:tw-max-w-[350px] @[955px]/tutorial:tw-max-w-[400px] @[1160px]/tutorial:tw-max-w-[500px]"
                            }), f.createElement("div", {
                                className: " tw-flex tw-flex-col tw-max-w-full tw-ml-0 @[700px]/tutorial:tw-max-w-full @[700px]/tutorial:tw-ml-4 "
                            }, f.createElement("h4", {
                                className: "tw-text-white tw-font-bold tw-text-lg tw-mt-4"
                            }, "Congrats on your first sale!"), f.createElement("p", {
                                className: "tw-text-light-grey tw-text-sm tw-mt-2"
                            }, "Well done! Now you can close this module by clicking the button below."), f.createElement("div", {
                                className: "tw-flex"
                            }, f.createElement(X.Z, {
                                className: "tw-mt-4 tw-h-10 tw-bg-button-bg tw-text-highlight tw-leading-none tw-border-transparent hover:tw-border-highlight",
                                onClick: function() {
                                    i(!0)
                                }
                            }, "Close"))))
                        }
                    }];
                return o ? null : f.createElement("div", {
                    className: "tw-bg-[#000] tw-rounded-lg tw-relative tw-p-5 tw-@container/tutorial"
                }, f.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-between"
                }, f.createElement("h3", {
                    className: "tw-text-lighter-grey after:tw-border-0 tw-font-bold tw-text-lg "
                }, "Get Ready To Sell"), f.createElement("div", {
                    className: "tw-hidden @[900px]/tutorial:tw-block"
                }, f.createElement(q, {
                    steps: s,
                    currentStepNumber: a
                })), f.createElement("div", null, f.createElement("button", {
                    type: "button",
                    onClick: function() {
                        i(!0)
                    },
                    className: "tw-bg-transparent tw-border-none tw-cursor-pointer"
                }, f.createElement(F.Z, {
                    icon: B.faXmark
                })))), f.createElement("div", {
                    className: "tw-mt-4 tw-mb-2 tw-flex tw-justify-center tw-ml-[44px] @[900px]/tutorial:tw-hidden"
                }, f.createElement(q, {
                    steps: s,
                    currentStepNumber: a
                })), null === (t = s.find((function(e) {
                    return e.number === a
                }))) || void 0 === t ? void 0 : t.content())
            };
            Q.propTypes = {
                currentStepNumber: T().number.isRequired
            };
            const J = Q;
            u().extend(m()), s.kL.register(s.uw, s.f$, s.FB, s.od, s.jn, s.u, s.Gu), s.kL.defaults.color = "#737372", s.kL.defaults.borderColor = "rgba(127, 127, 127, 0.1)";
            var ee = {
                    numPurchases: "Total Sales",
                    totalPurchasePrice: "Total Earnings"
                },
                te = [{
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
                ae = [{
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
                re = function(e) {
                    return "weeks" === e ? "isoweek" : e
                },
                le = function(e) {
                    var t = p().duration(e);
                    if (t.asDays() < 1) throw new RangeError("computeValuesForDurationTemplate: durationTemplate ".concat(e, " resulted in an invalid duration"));
                    var a = function(e) {
                            if (!p().isDuration(e)) throw new TypeError("duration ".concat(e, " is not a valid duration object"));
                            return e.asMonths() > 11 ? "months" : e.asMonths() > 2 ? "weeks" : "days"
                        }(t),
                        r = re(a),
                        l = p()(),
                        n = l.clone().endOf(r);
                    return {
                        groupByDuration: a,
                        metricDateStart: l.clone().add(1, r).startOf(r).subtract(t),
                        metricDateEnd: n
                    }
                };
            const ne = function() {
                var e, t, a, s, c, w = (0, g.IB)().data,
                    m = null == w ? void 0 : w.id,
                    d = f.useState("numPurchases"),
                    N = (0, l.Z)(d, 2),
                    k = N[0],
                    M = N[1],
                    D = f.useState(te[0].value),
                    S = (0, l.Z)(D, 2),
                    C = S[0],
                    P = S[1],
                    Y = (0, v.uK)({
                        sellerId: m,
                        groupByDuration: "years",
                        metricDateStart: h.pH,
                        metricDateEnd: "2511-03-07"
                    }, {
                        skip: !m
                    }),
                    O = Y.data,
                    j = void 0 === O ? {
                        totals: {
                            totalEarnings: 0,
                            otpPurchaseCount: 0,
                            subscriberMonths: 0
                        }
                    } : O,
                    T = Y.isFetching,
                    I = Y.isError,
                    Z = Y.error,
                    G = f.useMemo((function() {
                        return 0 === j.totals.totalEarnings
                    }), [j]),
                    L = f.useMemo((function() {
                        return le(C)
                    }), []),
                    A = L.groupByDuration,
                    B = L.metricDateStart,
                    F = L.metricDateEnd,
                    U = f.useState(A),
                    _ = (0, l.Z)(U, 2),
                    q = _[0],
                    H = _[1],
                    W = f.useState(B),
                    X = (0, l.Z)(W, 2),
                    $ = X[0],
                    K = X[1],
                    z = (0, b.Nr)($),
                    V = f.useState(F),
                    Q = (0, l.Z)(V, 2),
                    ne = Q[0],
                    oe = Q[1],
                    ie = (0, b.Nr)(ne),
                    se = f.useState(!1),
                    ce = (0, l.Z)(se, 2),
                    ue = ce[0],
                    we = ce[1],
                    me = f.useState(),
                    de = (0, l.Z)(me, 2),
                    pe = de[0],
                    fe = de[1],
                    xe = f.useMemo((function() {
                        return [p().isMoment($) && $.isAfter(h.pH) && $.isBefore(ne || p()().add(2, "y")), p().isMoment(ne) && ne.isAfter($ || h.pH) && ne.isBefore(p()().add(2, "y"))]
                    }), [$, ne]),
                    be = (0, l.Z)(xe, 2),
                    he = be[0],
                    ge = be[1];
                f.useEffect((function() {
                    if (C) {
                        var e = le(C),
                            t = e.groupByDuration,
                            a = e.metricDateStart,
                            r = e.metricDateEnd;
                        H(t), K(a), oe(r)
                    }
                }), [C]);
                var ve, ye, Ee = (0, v.uK)({
                        sellerId: m,
                        groupByDuration: q,
                        metricDateStart: null == z ? void 0 : z.toISOString(),
                        metricDateEnd: null == ie ? void 0 : ie.toISOString(),
                        listingIds: pe ? [pe] : pe
                    }, {
                        skip: !(m && z && ie && he && ge)
                    }),
                    Ne = Ee.data,
                    ke = void 0 === Ne ? {
                        totals: {
                            totalEarnings: 0,
                            otpPurchaseCount: 0,
                            subscriberMonths: 0
                        }
                    } : Ne,
                    Me = (Ee.isFetching, Ee.isError, Ee.error, !m || pe && (Oe || je) || !$ || !ne || !he || !ge || !(null != ke && null !== (e = ke.breakdown) && void 0 !== e && e.length) || Fe),
                    De = f.useMemo((function() {
                        var e;
                        if (null == ke || null === (e = ke.breakdown) || void 0 === e || !e.length) return {
                            labels: [],
                            datasets: []
                        };
                        var t = (0, r.Z)(ke.breakdown).sort((function(e, t) {
                                return e._id > t._id ? -1 : 1
                            })).reduce((function(e, t) {
                                var a = t._id,
                                    r = t.otpPurchaseCount,
                                    l = void 0 === r ? 0 : r,
                                    n = t.subscriberMonths,
                                    o = void 0 === n ? 0 : n,
                                    i = t.totalEarnings,
                                    s = void 0 === i ? 0 : i;
                                e.labels.push(a);
                                var c = "numPurchases" === k ? l + o : s;
                                return e.datasets[k] || (e.datasets[k] = {
                                    yAxisId: k,
                                    label: ee[k] || k,
                                    data: [],
                                    backgroundColor: "#064b5c",
                                    borderColor: "#086c84"
                                }), e.datasets[k].data.push(c), e
                            }), {
                                labels: [],
                                datasets: {}
                            }),
                            a = t.labels,
                            l = t.datasets;
                        return {
                            labels: a,
                            datasets: Object.values(l)
                        }
                    }), [ke, k]),
                    Se = function() {
                        ue || we(!0)
                    },
                    Ce = (0, y.Ul)({
                        userId: m,
                        hydrate: !0
                    }),
                    Pe = Ce.data,
                    Ye = void 0 === Pe ? [] : Pe,
                    Oe = Ce.isLoading,
                    je = Ce.isError,
                    Te = Ce.isSuccess,
                    Ie = Ce.error,
                    Ze = f.useMemo((function() {
                        var e = [{
                            label: "All"
                        }];
                        return Oe ? e.push({
                            label: "Loading…"
                        }) : Ye.forEach((function(t) {
                            var a = t.id,
                                r = t.displayName;
                            e.push({
                                label: r,
                                value: a
                            })
                        })), e
                    }), [Ye, Oe]),
                    Ge = (0, E.rP)({
                        userId: m
                    }, {
                        skip: !m
                    }),
                    Le = Ge.data,
                    Re = Ge.isFetching,
                    Ae = Ge.isSuccess,
                    Be = T || $ !== z || ne !== ie || Re,
                    Fe = !(null != De && null !== (t = De.datasets) && void 0 !== t && t.length),
                    Ue = f.useMemo((function() {
                        switch (q) {
                            case "years":
                                return "YYYY";
                            case "months":
                                return "MMM YYYY";
                            case "weeks":
                                return "[Week] ww, GGGG";
                            default:
                                return "MMM DD, YYYY"
                        }
                    }), [q]),
                    _e = f.useMemo((function() {
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
                                        label: "totalPurchasePrice" === k ? function(t) {
                                            var a = t.dataset,
                                                r = t.parsed;
                                            return (a.label ? "".concat(a.label, ": ") : "") + e(r.y)
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
                                        unit: null == q ? void 0 : q.replace(/s$/, ""),
                                        tooltipFormat: Ue,
                                        displayFormats: {
                                            week: "GGGG [W]ww"
                                        }
                                    }
                                },
                                y: {
                                    beginAtZero: !0,
                                    ticks: {
                                        precision: 0,
                                        callback: "totalPurchasePrice" === k ? e : void 0
                                    }
                                }
                            }
                        }
                    }), [k, q, Ue]);
                return f.createElement(f.Fragment, null, f.createElement(J, {
                    currentStepNumber: (ve = 0 === (null == Le ? void 0 : Le.length) && Ae, ye = !Ye.some((function(e) {
                        return !0 === e.active
                    })) && Te, ve ? 1 : ye ? 2 : G ? 3 : 4)
                }), f.createElement(R, null), f.createElement(o.X2, {
                    className: "align-items-center flex-wrap tw-mb-4",
                    style: {
                        justifyContent: "space-between"
                    }
                }, f.createElement("div", {
                    style: {
                        marginBottom: -8
                    }
                }, f.createElement(i.Z, {
                    justify: "left",
                    selected: k,
                    onChange: M,
                    tabs: Object.entries(ee).map((function(e) {
                        var t = (0, l.Z)(e, 2);
                        return {
                            id: t[0],
                            name: t[1],
                            condition: !0
                        }
                    }))
                }))), f.createElement(o.X2, {
                    className: "align-items-center flex-wrap tw-gap-1"
                }, f.createElement(o.Lt, {
                    label: "Duration",
                    onChange: P,
                    value: C,
                    options: te,
                    className: "tw-mr-2"
                }), f.createElement(o.Lt, {
                    label: "Group By",
                    onChange: H,
                    value: q,
                    options: ae,
                    className: "tw-mr-2"
                }), !C && f.createElement("div", {
                    className: "d-flex align-items-center flex-wrap"
                }, f.createElement(o.II, {
                    type: "date",
                    className: "tw-mr-1",
                    disabled: !!C,
                    invalid: he,
                    value: null == $ ? void 0 : $.format("YYYY-MM-DD"),
                    onChange: function(e) {
                        var t = p()(e.target.value).startOf(re(q));
                        K(t)
                    },
                    min: h.pH,
                    max: null == ne ? void 0 : ne.format("YYYY-MM-DD")
                }), " to ", f.createElement(o.II, {
                    type: "date",
                    className: "tw-ml-1",
                    disabled: !!C,
                    invalid: ge,
                    value: null == ne ? void 0 : ne.format("YYYY-MM-DD"),
                    onChange: function(e) {
                        var t = p()(e.target.value).endOf(re(q));
                        oe(t)
                    },
                    min: (null == $ ? void 0 : $.format("YYYY-MM-DD")) || h.pH,
                    max: p()().add(2, "y").format("YYYY-MM-DD")
                })), f.createElement("div", {
                    className: "d-flex justify-content-end",
                    style: {
                        flex: "1 1 auto"
                    }
                }, f.createElement(o.Lt, {
                    style: {
                        minWidth: 200,
                        maxWidth: 300
                    },
                    trimToLength: !0,
                    label: "Listing",
                    onChange: fe,
                    onMouseEnter: Se,
                    onClick: Se,
                    className: "tw-mr-2",
                    value: pe,
                    options: Ze
                }), f.createElement(o.zx, {
                    disabled: Me,
                    onClick: function() {
                        var e;
                        if (!Me) {
                            var t = document.createElement("a");
                            t.style.display = "none";
                            var a = "weeks" === q ? "GGGG-[W]ww" : "YYYY-MM-DD",
                                r = pe && (null == Ye || null === (e = Ye.find((function(e) {
                                    return e.id === pe
                                }))) || void 0 === e ? void 0 : e.displayName);
                            t.setAttribute("download", "VRChat Sales".concat(r ? " for ".concat(r) : "", " by ").concat(q.replace(/s$/, ""), " - ").concat($.format(a), " to ").concat(ne.format(a), ".csv"));
                            var l = (null == ke ? void 0 : ke.breakdown) || [],
                                n = Object.keys(l[0]),
                                o = null == l ? void 0 : l.map((function(e) {
                                    return n.map((function(t) {
                                        return e[t]
                                    })).join(",")
                                }));
                            n[0] = q, o.unshift(n.join(",")), t.setAttribute("href", "data:text/csv;encoding:utf-8,".concat(encodeURIComponent(o.join("\n")))), document.body.appendChild(t), t.click(), document.body.removeChild(t)
                        }
                    }
                }, f.createElement(o.$1, {
                    icon: n.q7,
                    className: "tw-px-2"
                })))), f.createElement("span", {
                    className: "tw-text-placeholder-text tw-my-5 tw-text-base"
                }, "Time period: ", null == $ ? void 0 : $.format("MMM DD"), " - ", null !== (a = u()(ne)) && void 0 !== a && a.isToday() ? "Today" : null == ne ? void 0 : ne.format("MMM DD")), je && f.createElement(o.qX, {
                    type: "error",
                    title: "Error loading listings"
                }, null == Ie || null === (s = Ie.data) || void 0 === s || null === (s = s.error) || void 0 === s ? void 0 : s.message), I && f.createElement(o.qX, {
                    type: "error",
                    title: "Error loading earnings"
                }, null == Z || null === (c = Z.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message), Be ? f.createElement(o.UU, {
                    style: {
                        minHeight: 100,
                        aspectRatio: _e.aspectRatio.toString(10)
                    }
                }) : function() {
                    if (Fe) {
                        var e = {
                            labels: Array.from({
                                length: 7
                            }, (function(e, t) {
                                return u()().subtract(6 - t, "day").format("MMM DD")
                            })),
                            datasets: Array(7).fill({})
                        };
                        return f.createElement("div", {
                            className: "tw-flex-auto tw-flex-wrap tw-flex-row tw-text-center tw-mt-5 tw-relative"
                        }, f.createElement("div", {
                            className: "tw-absolute tw-w-full tw-h-full"
                        }, f.createElement("div", {
                            className: "tw-flex tw-flex-col tw-justify-center tw-align-middle tw-items-center tw-w-full tw-h-full tw-text-light-grey"
                        }, f.createElement("span", {
                            className: "tw-mb-1 tw-font-bold"
                        }, "No Data"), f.createElement("span", null, "There's no available data in the selected date and time"))), f.createElement("div", {
                            className: "tw-flex tw-w-full tw-justify-center tw-min-h-[100px] tw-opacity-20"
                        }, f.createElement(x.x1, {
                            datasetIdKey: "_id",
                            options: {
                                responsive: !0,
                                aspectRatio: 4
                            },
                            data: e
                        })))
                    }
                    return f.createElement(x.x1, {
                        datasetIdKey: "_id",
                        options: _e,
                        data: De
                    })
                }(), "weeks" === q && f.createElement(o.qX, {
                    type: "dark",
                    slim: !0,
                    className: "mb-0"
                }, "Weekly data is tabulated using ISO weeks, which always begin on a Monday and end on a Sunday. The first and last ISO weeks can overlap into the previous or next calendar year, respectively. More information about ISO weeks can be found", " ", f.createElement("a", {
                    href: "https://en.wikipedia.org/wiki/ISO_week_date",
                    target: "_blank",
                    rel: "noreferrer"
                }, "on Wikipedia"), "."))
            }
        }
    }
]);
//# sourceMappingURL=0660f99fa852ef7f6194c0ca8e69ecc01703b012a9924af6597b0720a3867ad3.js.map