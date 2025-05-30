(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6065], {
        16065: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => ce
            });
            var r = a(42138),
                n = a(54546),
                l = a(40767),
                o = a(37463),
                i = a(72998),
                s = a(529),
                c = (a(86961), a(27484)),
                u = a.n(c),
                w = a(7124),
                m = a.n(w),
                d = a(30381),
                p = a.n(d),
                f = a(67294),
                b = a(26495),
                x = a(17383),
                h = a(95896),
                g = a(22202),
                v = a(66736),
                y = a(16869),
                E = a(67978),
                N = a(4942),
                k = a(15861),
                M = a(4965),
                S = a(64687),
                D = a.n(S),
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
                        n = e.link,
                        l = void 0 === n ? null : n,
                        i = e.cta,
                        s = void 0 === i ? null : i,
                        c = e.hideGlyph,
                        u = void 0 !== c && c,
                        w = e.customNoCreditsText,
                        m = void 0 === w ? null : w,
                        d = e.className,
                        p = e.isError,
                        b = void 0 !== p && p,
                        x = e.error,
                        h = null === r || 0 === r;
                    if (b) {
                        var g = x || "An unknown error occurred";
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
                    }, s.text), null !== l && f.createElement("span", null, f.createElement(o.$1, {
                        icon: O.faCircleInfo
                    }), f.createElement("a", {
                        href: null == l ? void 0 : l.href,
                        className: "tw-text-sm tw-underline tw-font-thin tw-ml-1 tw-text-subtext-grey",
                        referrerPolicy: "no-referrer"
                    }, null == l ? void 0 : l.text))))
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
                    l = (0, Y.s0)(),
                    i = (0, C.gI)(),
                    s = (0, n.Z)(i, 1)[0],
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
                    b = w.isError,
                    x = w.error,
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
                    S = N.allTimeTotalPurchasePrice,
                    O = null == u ? void 0 : u.signed_tos,
                    j = (0, f.useMemo)((function() {
                        return O ? E < h.vC ? "You must have at least ".concat(h.vC.toLocaleString(), " credits available to pay out.") : "Pay Out Now" : "Tilia's Terms of Service may have changed. You'll need to accept their updated Terms of Service before you pay out."
                    }), [u, E]);
                return f.createElement(f.Fragment, null, b && f.createElement(o.qX, {
                    type: "error",
                    title: "Error loading statistics"
                }, "Failed to fetch earnings: ", null == x || null === (e = x.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message), f.createElement("div", {
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
                        onClickCallback: (t = (0, k.Z)(D().mark((function e() {
                            var t, r;
                            return D().wrap((function(e) {
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
                            l("/home/marketplace/storefront/revenue/mysales")
                        },
                        isDisabled: !1
                    }
                }), f.createElement(Z, {
                    title: "Total Earned",
                    credits: Number(S || 0),
                    cta: {
                        text: "View Details",
                        onClickCallback: function() {
                            l("/home/marketplace/storefront/revenue/mysales")
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
                    }, t.map((function(e, n) {
                        var l = Number(a) > Number(e.number),
                            o = Number(a) === Number(e.number),
                            i = n === t.length - (r.length + 1);
                        if (e.isHiddenStep) return null;
                        return f.createElement("li", {
                            key: e.number,
                            className: "\n              tw-list-none\n              xs:tw-flex tw-flex-col\n              xs:tw-w-[120px] sm:tw-w-[340px]\n              ".concat(o ? "" : "tw-hidden", "\n            "),
                            "aria-label": "".concat(o ? "Current step: ".concat(e.label) : "", " ")
                        }, f.createElement("div", {
                            className: "\n              tw-list-none tw-flex tw-items-center\n              ".concat(l ? "after:tw-border-green" : "after:tw-border-lighter-grey", "\n              after:tw-border-0 after:tw-content-[''] after:tw-w-full after:tw-border-b-[1px] after:tw-border-solid after:tw-mx-2\n              after:tw-flex\n              ").concat(i ? "after:tw-hidden" : "xs:after:tw-flex", "\n              ").concat(o ? "after:tw-hidden" : "", "\n            ")
                        }, f.createElement("div", {
                            className: "tw-flex tw-flex-col tw-items-start"
                        }, f.createElement("div", {
                            className: "\n                  tw-border-solid tw-border-2 tw-border-full\n                  tw-w-8 tw-h-8 tw-rounded-full\n                  tw-flex tw-items-center tw-justify-center tw-text-sm\n                  after:tw-w-full after:tw-h-1 after:tw-border-b\n                  ".concat("", "\n                  ").concat(l ? "tw-border-green tw-text-[#000] tw-bg-green" : o ? "tw-border-green tw-text-white" : "tw-border-light-grey tw-text-light-grey", "\n                ")
                        }, l ? f.createElement(F.Z, {
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
                X = a(34698),
                $ = a(59128),
                K = a.n($),
                z = a(259),
                V = a.n(z),
                Q = a(9468),
                J = a.n(Q),
                ee = a(83555),
                te = a.n(ee),
                ae = function(e) {
                    var t, a = e.currentStepNumber,
                        r = (0, H._)("myStoreTutorialDismissed", !1),
                        l = (0, n.Z)(r, 2),
                        o = l[0],
                        i = l[1],
                        s = [{
                            number: 1,
                            label: "Create a Product or subscription",
                            content: function() {
                                return f.createElement("div", {
                                    className: "tw-flex tw-flex-col tw-justify-between @[700px]/tutorial:tw-flex-row tw-pt-0 @[700px]/tutorial:tw-px-12 @[700px]/tutorial:tw-py-9"
                                }, f.createElement("img", {
                                    src: V(),
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
                                    src: J(),
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
                                    src: te(),
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
                                    src: K(),
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
            ae.propTypes = {
                currentStepNumber: T().number.isRequired
            };
            const re = ae;
            u().extend(m()), s.kL.register(s.uw, s.f$, s.FB, s.od, s.jn, s.u, s.Gu), s.kL.defaults.color = "#737372", s.kL.defaults.borderColor = "rgba(127, 127, 127, 0.1)";
            var ne = {
                    numPurchases: "Total Sales",
                    totalPurchasePrice: "Total Earnings"
                },
                le = [{
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
                oe = [{
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
                ie = function(e) {
                    return "weeks" === e ? "isoweek" : e
                },
                se = function(e) {
                    var t = p().duration(e);
                    if (t.asDays() < 1) throw new RangeError("computeValuesForDurationTemplate: durationTemplate ".concat(e, " resulted in an invalid duration"));
                    var a = function(e) {
                            if (!p().isDuration(e)) throw new TypeError("duration ".concat(e, " is not a valid duration object"));
                            return e.asMonths() > 11 ? "months" : e.asMonths() > 2 ? "weeks" : "days"
                        }(t),
                        r = ie(a),
                        n = p()(),
                        l = n.clone().endOf(r);
                    return {
                        groupByDuration: a,
                        metricDateStart: n.clone().add(1, r).startOf(r).subtract(t),
                        metricDateEnd: l
                    }
                };
            const ce = function() {
                var e, t, a, s, c, w = (0, g.IB)().data,
                    m = null == w ? void 0 : w.id,
                    d = f.useState("numPurchases"),
                    N = (0, n.Z)(d, 2),
                    k = N[0],
                    M = N[1],
                    S = f.useState(le[0].value),
                    D = (0, n.Z)(S, 2),
                    C = D[0],
                    P = D[1],
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
                        return se(C)
                    }), []),
                    A = L.groupByDuration,
                    B = L.metricDateStart,
                    F = L.metricDateEnd,
                    U = f.useState(A),
                    _ = (0, n.Z)(U, 2),
                    q = _[0],
                    H = _[1],
                    W = f.useState(B),
                    X = (0, n.Z)(W, 2),
                    $ = X[0],
                    K = X[1],
                    z = (0, x.Nr)($),
                    V = f.useState(F),
                    Q = (0, n.Z)(V, 2),
                    J = Q[0],
                    ee = Q[1],
                    te = (0, x.Nr)(J),
                    ae = f.useState(!1),
                    ce = (0, n.Z)(ae, 2),
                    ue = ce[0],
                    we = ce[1],
                    me = f.useState(),
                    de = (0, n.Z)(me, 2),
                    pe = de[0],
                    fe = de[1],
                    be = f.useMemo((function() {
                        return [p().isMoment($) && $.isAfter(h.pH) && $.isBefore(J || p()().add(2, "y")), p().isMoment(J) && J.isAfter($ || h.pH) && J.isBefore(p()().add(2, "y"))]
                    }), [$, J]),
                    xe = (0, n.Z)(be, 2),
                    he = xe[0],
                    ge = xe[1];
                f.useEffect((function() {
                    if (C) {
                        var e = se(C),
                            t = e.groupByDuration,
                            a = e.metricDateStart,
                            r = e.metricDateEnd;
                        H(t), K(a), ee(r)
                    }
                }), [C]);
                var ve, ye, Ee = (0, v.uK)({
                        sellerId: m,
                        groupByDuration: q,
                        metricDateStart: null == z ? void 0 : z.toISOString(),
                        metricDateEnd: null == te ? void 0 : te.toISOString(),
                        listingIds: pe ? [pe] : pe
                    }, {
                        skip: !(m && z && te && he && ge)
                    }),
                    Ne = Ee.data,
                    ke = void 0 === Ne ? {
                        totals: {
                            totalEarnings: 0,
                            otpPurchaseCount: 0,
                            subscriberMonths: 0
                        }
                    } : Ne,
                    Me = (Ee.isFetching, Ee.isError, Ee.error, !m || pe && (Oe || je) || !$ || !J || !he || !ge || !(null != ke && null !== (e = ke.breakdown) && void 0 !== e && e.length) || Fe),
                    Se = f.useMemo((function() {
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
                                    n = void 0 === r ? 0 : r,
                                    l = t.subscriberMonths,
                                    o = void 0 === l ? 0 : l,
                                    i = t.totalEarnings,
                                    s = void 0 === i ? 0 : i;
                                e.labels.push(a);
                                var c = "numPurchases" === k ? n + o : s;
                                return e.datasets[k] || (e.datasets[k] = {
                                    yAxisId: k,
                                    label: ne[k] || k,
                                    data: [],
                                    backgroundColor: "#064b5c",
                                    borderColor: "#086c84"
                                }), e.datasets[k].data.push(c), e
                            }), {
                                labels: [],
                                datasets: {}
                            }),
                            a = t.labels,
                            n = t.datasets;
                        return {
                            labels: a,
                            datasets: Object.values(n)
                        }
                    }), [ke, k]),
                    De = function() {
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
                    Be = T || $ !== z || J !== te || Re,
                    Fe = !(null != Se && null !== (t = Se.datasets) && void 0 !== t && t.length),
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
                return f.createElement(f.Fragment, null, f.createElement(re, {
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
                    tabs: Object.entries(ne).map((function(e) {
                        var t = (0, n.Z)(e, 2);
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
                    options: le,
                    className: "tw-mr-2"
                }), f.createElement(o.Lt, {
                    label: "Group By",
                    onChange: H,
                    value: q,
                    options: oe,
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
                        var t = p()(e.target.value).startOf(ie(q));
                        K(t)
                    },
                    min: h.pH,
                    max: null == J ? void 0 : J.format("YYYY-MM-DD")
                }), " to ", f.createElement(o.II, {
                    type: "date",
                    className: "tw-ml-1",
                    disabled: !!C,
                    invalid: ge,
                    value: null == J ? void 0 : J.format("YYYY-MM-DD"),
                    onChange: function(e) {
                        var t = p()(e.target.value).endOf(ie(q));
                        ee(t)
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
                    onMouseEnter: De,
                    onClick: De,
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
                            t.setAttribute("download", "VRChat Sales".concat(r ? " for ".concat(r) : "", " by ").concat(q.replace(/s$/, ""), " - ").concat($.format(a), " to ").concat(J.format(a), ".csv"));
                            var n = (null == ke ? void 0 : ke.breakdown) || [],
                                l = Object.keys(n[0]),
                                o = null == n ? void 0 : n.map((function(e) {
                                    return l.map((function(t) {
                                        return e[t]
                                    })).join(",")
                                }));
                            l[0] = q, o.unshift(l.join(",")), t.setAttribute("href", "data:text/csv;encoding:utf-8,".concat(encodeURIComponent(o.join("\n")))), document.body.appendChild(t), t.click(), document.body.removeChild(t)
                        }
                    }
                }, f.createElement(o.$1, {
                    icon: l.q7,
                    className: "tw-px-2"
                })))), f.createElement("span", {
                    className: "tw-text-placeholder-text tw-my-5 tw-text-base"
                }, "Time period: ", null == $ ? void 0 : $.format("MMM DD"), " - ", null !== (a = u()(J)) && void 0 !== a && a.isToday() ? "Today" : null == J ? void 0 : J.format("MMM DD")), je && f.createElement(o.qX, {
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
                        }, f.createElement(b.x1, {
                            datasetIdKey: "_id",
                            options: {
                                responsive: !0,
                                aspectRatio: 4
                            },
                            data: e
                        })))
                    }
                    return f.createElement(b.x1, {
                        datasetIdKey: "_id",
                        options: _e,
                        data: Se
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
        },
        59128: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "ad12fd2b35113d5d-1023w.png 1023w",
                images: [{
                    path: a.p + "ad12fd2b35113d5d-1023w.png",
                    width: 1023,
                    height: 712
                }],
                src: a.p + "ad12fd2b35113d5d-1023w.png",
                toString: function() {
                    return a.p + "ad12fd2b35113d5d-1023w.png"
                },
                width: 1023,
                height: 712
            }
        },
        259: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "33eb43b8887b1b01-1200w.png 1200w",
                images: [{
                    path: a.p + "33eb43b8887b1b01-1200w.png",
                    width: 1200,
                    height: 675
                }],
                src: a.p + "33eb43b8887b1b01-1200w.png",
                toString: function() {
                    return a.p + "33eb43b8887b1b01-1200w.png"
                },
                width: 1200,
                height: 675
            }
        },
        9468: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "343ab670941e2a7c-1200w.png 1200w",
                images: [{
                    path: a.p + "343ab670941e2a7c-1200w.png",
                    width: 1200,
                    height: 830
                }],
                src: a.p + "343ab670941e2a7c-1200w.png",
                toString: function() {
                    return a.p + "343ab670941e2a7c-1200w.png"
                },
                width: 1200,
                height: 830
            }
        },
        83555: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "ed6040c0dba8cdc0-1562w.png 1562w",
                images: [{
                    path: a.p + "ed6040c0dba8cdc0-1562w.png",
                    width: 1562,
                    height: 1024
                }],
                src: a.p + "ed6040c0dba8cdc0-1562w.png",
                toString: function() {
                    return a.p + "ed6040c0dba8cdc0-1562w.png"
                },
                width: 1562,
                height: 1024
            }
        }
    }
]);
//# sourceMappingURL=e3286e4a0b768f8ecd6e2e6321211dd0739294b3fcb609f9660ef8d70286cb9d.js.map