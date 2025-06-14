(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6065], {
        16065: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => ce
            });
            var r = a(42138),
                l = a(54546),
                n = a(40767),
                o = a(37463),
                i = a(72998),
                s = a(529),
                c = (a(86961), a(27484)),
                u = a.n(c),
                w = a(7124),
                m = a.n(w),
                d = a(30381),
                p = a.n(d),
                b = a(67294),
                f = a(26495),
                x = a(17383),
                g = a(95896),
                h = a(22202),
                v = a(66736),
                y = a(16869),
                E = a(67978),
                N = a(4942),
                k = a(15861),
                D = a(4965),
                S = a(64687),
                M = a.n(S),
                P = a(6655),
                C = a(64358),
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
                        f = void 0 !== p && p,
                        x = e.error,
                        g = null === r || 0 === r;
                    if (f) {
                        var h = x || "An unknown error occurred";
                        return b.createElement("div", {
                            className: "tw-bg-grey tw-p-5 tw-rounded-xl tw-@container/marketplacePanel tw-w-full ".concat(d)
                        }, b.createElement("h5", {
                            className: "tw-text-xl tw-font-bold after:tw-border-none tw-no-underline tw-mb-3"
                        }, t), b.createElement("p", {
                            className: "tw-text-placeholder-text tw-mb-12"
                        }, "Failed to retrieve data: ", h))
                    }
                    return b.createElement("div", {
                        className: "tw-bg-grey tw-p-5 tw-rounded-xl tw-@container/marketplacePanel tw-w-full ".concat(d)
                    }, b.createElement("h5", {
                        className: "tw-text-xl tw-font-bold after:tw-border-none tw-no-underline tw-mb-3"
                    }, t), g && b.createElement("p", {
                        className: "tw-text-placeholder-text tw-mb-12"
                    }, m || "Nothing here (yet)"), !g && b.createElement("p", {
                        className: "tw-text-white tw-text-4xl tw-font-bold tw-mb-8"
                    }, !u && b.createElement(o.b5, {
                        className: "tw-text-[#6ae3f9] tw-mr-1"
                    }), r.toLocaleString()), b.createElement("div", {
                        className: " tw-justify-between tw-flex tw-flex-col @[300px]/marketplacePanel:tw-flex-row @[300px]/marketplacePanel:tw-items-end  "
                    }, b.createElement(o.zx, {
                        className: "tw-px-[10px] tw-py-[7px] tw-mb-2 @[300px]/marketplacePanel:tw-mb-0",
                        disabled: null == s ? void 0 : s.isDisabled,
                        onClick: null == s ? void 0 : s.onClickCallback,
                        title: null == s ? void 0 : s.title
                    }, s.text), null !== n && b.createElement("span", null, b.createElement(o.$1, {
                        icon: O.faCircleInfo
                    }), b.createElement("a", {
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

            function L(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? L(Object(a), !0).forEach((function(t) {
                        (0, N.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : L(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            const R = function() {
                var e, t, a = (0, h.IB)().data,
                    r = null == a ? void 0 : a.id,
                    n = (0, Y.s0)(),
                    i = (0, P.gI)(),
                    s = (0, l.Z)(i, 1)[0],
                    c = (0, Y.oQ)("/home/marketplace/storefront/payout"),
                    u = (0, P.kN)({}, {
                        refetchOnMountOrArgChange: !0
                    }),
                    w = u.data,
                    m = (u.isLoading, u.isError),
                    d = (u.error, null == w ? void 0 : w.eligible),
                    p = !(null != w && w.eligible) && (null == w ? void 0 : w.reason) === g.BP.UPDATED_REQUIRED,
                    f = !(null != w && w.eligible) && (null == w ? void 0 : w.reason) === g.BP.BLOCKED,
                    x = !(null != w && w.eligible) && (null == w ? void 0 : w.reason) === g.BP.DISABLED,
                    y = !(null != w && w.eligible) && (null == w ? void 0 : w.reason) === g.BP.KYC_PENDING,
                    E = !(null != w && w.eligible) && (null == w ? void 0 : w.reason) === g.BP.KYC_REQUIRED,
                    N = !(null != w && w.eligible) && (null == w ? void 0 : w.reason) === g.BP.COOLDOWN,
                    D = (0, v.uK)({
                        sellerId: r,
                        groupByDuration: "years",
                        metricDateStart: g.pH,
                        metricDateEnd: "2511-03-07"
                    }, {
                        skip: !r
                    }),
                    S = D.data,
                    O = void 0 === S ? {
                        totals: {
                            totalEarnings: 0,
                            otpPurchaseCount: 0,
                            subscriberMonths: 0
                        }
                    } : S,
                    j = D.isFetching,
                    T = D.isError,
                    I = D.error,
                    L = (0, P.pp)({
                        userId: r,
                        type: "earnings"
                    }, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }).data,
                    R = (void 0 === L ? {
                        balance: 0
                    } : L).balance,
                    A = b.useMemo((function() {
                        var e, t, a;
                        return {
                            allTimeNumPurchases: Number(null == O || null === (e = O.totals) || void 0 === e ? void 0 : e.otpPurchaseCount) + Number(null == O || null === (t = O.totals) || void 0 === t ? void 0 : t.subscriberMonths),
                            allTimeTotalPurchasePrice: null == O || null === (a = O.totals) || void 0 === a ? void 0 : a.totalEarnings
                        }
                    }), [O]),
                    U = A.allTimeNumPurchases,
                    F = A.allTimeTotalPurchasePrice,
                    _ = (0, b.useMemo)((function() {
                        return m ? "Error fetching payout eligibility, please try again later." : x ? "Tilia's Terms of Service may have changed. You'll need to accept their updated Terms of Service before you pay out." : R < g.vC ? "You must have at least ".concat(g.vC.toLocaleString(), " credits available to pay out.") : p ? "Tilia Terms of Service have been updated. You must accept the updated Terms of Service before you can pay out." : f ? "Your account has been blocked by Tilia. Please contact support for assistance." : y ? "Your KYC verification is pending. Please complete the KYC process before you can pay out." : E ? "You must complete KYC verification before you can pay out." : N ? "You are currently in a payout cooldown period. Please wait before attempting to pay out again." : "You are eligible to pay out. Click to proceed."
                    }), [R, w, m]);
                return b.createElement(b.Fragment, null, T && b.createElement(o.qX, {
                    type: "error",
                    title: "Error loading statistics"
                }, "Failed to fetch earnings: ", null == I || null === (e = I.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message), b.createElement("div", {
                    className: "tw-flex tw-w-full tw-gap-3 tw-my-4 tw-flex-col sm:tw-flex-row"
                }, j ? b.createElement(b.Fragment, null, b.createElement(G, null), b.createElement(G, {
                    delay: 100
                })) : b.createElement(b.Fragment, null, b.createElement(Z, {
                    title: "Available Payout",
                    credits: Number(R) || 0,
                    link: {
                        text: "About Payout",
                        href: "https://www.tilia.io/legal/terms-of-service"
                    },
                    cta: {
                        text: "Payout",
                        onClickCallback: (t = (0, k.Z)(M().mark((function e() {
                            var t, r;
                            return M().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, s(B(B({}, C.$Z.PAYOUT), {}, {
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
                        isDisabled: R < g.vC || !d,
                        title: _
                    }
                }), b.createElement(Z, {
                    title: "Total Sales",
                    hideGlyph: !0,
                    credits: Number(U || 0),
                    cta: {
                        text: "View Details",
                        onClickCallback: function() {
                            n("/home/marketplace/storefront/revenue/mysales")
                        },
                        isDisabled: !1
                    }
                }), b.createElement(Z, {
                    title: "Total Earned",
                    credits: Number(F || 0),
                    cta: {
                        text: "View Details",
                        onClickCallback: function() {
                            n("/home/marketplace/storefront/revenue/mysales")
                        },
                        isDisabled: !1
                    }
                }))))
            };
            var G = (0, D.Z)(o.UU, {
                    target: "e129v97h1"
                })({
                    name: "rdii6n",
                    styles: "flex:1 1 240px;min-height:148px;margin:0.5rem;border-radius:8px"
                }),
                A = a(87709),
                U = a(86646),
                F = a(68055),
                _ = function(e) {
                    var t = e.steps,
                        a = e.currentStepNumber,
                        r = t.filter((function(e) {
                            return e.isHiddenStep
                        }));
                    return b.createElement("ol", {
                        className: "tw-max-w-[650px] tw-flex tw-justify-between tw-items-start tw-pl-[0px] xs:tw-pl-[44px]"
                    }, t.map((function(e, l) {
                        var n = Number(a) > Number(e.number),
                            o = Number(a) === Number(e.number),
                            i = l === t.length - (r.length + 1);
                        if (e.isHiddenStep) return null;
                        return b.createElement("li", {
                            key: e.number,
                            className: "\n              tw-list-none\n              xs:tw-flex tw-flex-col\n              xs:tw-w-[120px] sm:tw-w-[340px]\n              ".concat(o ? "" : "tw-hidden", "\n            "),
                            "aria-label": "".concat(o ? "Current step: ".concat(e.label) : "", " ")
                        }, b.createElement("div", {
                            className: "\n              tw-list-none tw-flex tw-items-center\n              ".concat(n ? "after:tw-border-green" : "after:tw-border-lighter-grey", "\n              after:tw-border-0 after:tw-content-[''] after:tw-w-full after:tw-border-b-[1px] after:tw-border-solid after:tw-mx-2\n              after:tw-flex\n              ").concat(i ? "after:tw-hidden" : "xs:after:tw-flex", "\n              ").concat(o ? "after:tw-hidden" : "", "\n            ")
                        }, b.createElement("div", {
                            className: "tw-flex tw-flex-col tw-items-start"
                        }, b.createElement("div", {
                            className: "\n                  tw-border-solid tw-border-2 tw-border-full\n                  tw-w-8 tw-h-8 tw-rounded-full\n                  tw-flex tw-items-center tw-justify-center tw-text-sm\n                  after:tw-w-full after:tw-h-1 after:tw-border-b\n                  ".concat("", "\n                  ").concat(n ? "tw-border-green tw-text-[#000] tw-bg-green" : o ? "tw-border-green tw-text-white" : "tw-border-light-grey tw-text-light-grey", "\n                ")
                        }, n ? b.createElement(U.Z, {
                            icon: F.LE,
                            "aria-label": "Done"
                        }) : e.number))), b.createElement("div", {
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
                K = a(79655),
                W = a(34698),
                X = a(59128),
                $ = a.n(X),
                z = a(259),
                V = a.n(z),
                Q = a(9468),
                J = a.n(Q),
                ee = a(83555),
                te = a.n(ee),
                ae = function(e) {
                    var t, a = e.currentStepNumber,
                        r = (0, H._)("myStoreTutorialDismissed", !1),
                        n = (0, l.Z)(r, 2),
                        o = n[0],
                        i = n[1],
                        s = [{
                            number: 1,
                            label: "Create a Product or subscription",
                            content: function() {
                                return b.createElement("div", {
                                    className: "tw-flex tw-flex-col tw-justify-between @[700px]/tutorial:tw-flex-row tw-pt-0 @[700px]/tutorial:tw-px-12 @[700px]/tutorial:tw-py-9"
                                }, b.createElement("img", {
                                    src: V(),
                                    alt: "",
                                    className: " tw-rounded-lg tw-max-w-full tw-object-cover @[700px]/tutorial:tw-max-w-[240px]  @[790px]/tutorial:tw-max-w-[300px] @[905px]/tutorial:tw-max-w-[350px] @[955px]/tutorial:tw-max-w-[400px] @[1160px]/tutorial:tw-max-w-[500px]"
                                }), b.createElement("div", {
                                    className: " tw-flex tw-flex-col tw-max-w-full tw-ml-0 @[700px]/tutorial:tw-max-w-full @[700px]/tutorial:tw-ml-4 "
                                }, b.createElement("h4", {
                                    className: "tw-text-white tw-font-bold tw-text-lg tw-mt-4"
                                }, "Enhance in-world experiences and engage with your community"), b.createElement("p", {
                                    className: "tw-text-light-grey tw-text-sm tw-mt-2"
                                }, "Products allow you to customize interactions and behaviors in your worlds. Subscriptions ensure you a regular income from your supporters."), b.createElement("p", {
                                    className: "tw-text-light-grey tw-text-sm tw-mt-2"
                                }, "Proceed to the next step by creating your first product or subscription!"), b.createElement("div", {
                                    className: "tw-flex"
                                }, b.createElement(K.rU, {
                                    to: "/home/marketplace/storefront/products"
                                }, b.createElement(W.Z, {
                                    className: "tw-mt-4 tw-h-10 tw-bg-button-bg tw-text-highlight tw-leading-none tw-border-transparent hover:tw-border-highlight"
                                }, "Create Product")), b.createElement(K.rU, {
                                    to: "/home/marketplace/storefront/subscriptions"
                                }, b.createElement(W.Z, {
                                    className: "tw-mt-4 tw-h-10 tw-bg-button-bg tw-text-highlight tw-leading-none tw-border-transparent hover:tw-border-highlight tw-ml-4"
                                }, "Create Subscription")))))
                            }
                        }, {
                            number: 2,
                            label: "Setup your store and publish it",
                            content: function() {
                                return b.createElement("div", {
                                    className: "tw-flex tw-flex-col tw-justify-between @[700px]/tutorial:tw-flex-row tw-pt-0 @[700px]/tutorial:tw-px-12 @[700px]/tutorial:tw-py-9"
                                }, b.createElement("img", {
                                    src: J(),
                                    alt: "",
                                    className: " tw-rounded-lg tw-max-w-full tw-object-cover @[700px]/tutorial:tw-max-w-[240px]  @[790px]/tutorial:tw-max-w-[300px] @[905px]/tutorial:tw-max-w-[350px] @[955px]/tutorial:tw-max-w-[400px] @[1160px]/tutorial:tw-max-w-[500px]"
                                }), b.createElement("div", {
                                    className: " tw-flex tw-flex-col tw-max-w-full tw-ml-0 @[700px]/tutorial:tw-max-w-full @[700px]/tutorial:tw-ml-4 "
                                }, b.createElement("h4", {
                                    className: "tw-text-white tw-font-bold tw-text-lg tw-mt-4"
                                }, "Build your storefronts from the store manager"), b.createElement("p", {
                                    className: "tw-text-light-grey tw-text-sm tw-mt-2"
                                }, "Organize your listings, create bundles and set prices. Preview how your stores appear in-world, on the marketplace tab and in the corresponding group and world pages."), b.createElement("div", {
                                    className: "tw-flex"
                                }, b.createElement(K.rU, {
                                    to: "/home/marketplace/storefront/stores"
                                }, b.createElement(W.Z, {
                                    className: "tw-mt-4 tw-h-10 tw-bg-button-bg tw-text-highlight tw-leading-none tw-border-transparent hover:tw-border-highlight"
                                }, "Manage Stores")))))
                            }
                        }, {
                            number: 3,
                            label: "Make your first sale!",
                            content: function() {
                                return b.createElement("div", {
                                    className: "tw-flex tw-flex-col tw-justify-between @[700px]/tutorial:tw-flex-row tw-pt-0 @[700px]/tutorial:tw-px-12 @[700px]/tutorial:tw-py-9"
                                }, b.createElement("img", {
                                    src: te(),
                                    alt: "",
                                    className: " tw-rounded-lg tw-max-w-full tw-object-cover @[700px]/tutorial:tw-max-w-[240px]  @[790px]/tutorial:tw-max-w-[300px] @[905px]/tutorial:tw-max-w-[350px] @[955px]/tutorial:tw-max-w-[400px] @[1160px]/tutorial:tw-max-w-[500px]"
                                }), b.createElement("div", {
                                    className: " tw-flex tw-flex-col tw-max-w-full tw-ml-0 @[700px]/tutorial:tw-max-w-full @[700px]/tutorial:tw-ml-4 "
                                }, b.createElement("h4", {
                                    className: "tw-text-white tw-font-bold tw-text-lg tw-mt-4"
                                }, "You are all set to start selling!"), b.createElement("p", {
                                    className: "tw-text-light-grey tw-text-sm tw-mt-2"
                                }, "The final step to greatness. Share your store, promote your work, and make your first sale! You can track all your sales and subscribers on the", " ", b.createElement(K.rU, {
                                    to: "/home/marketplace/storefront/revenue/mysales",
                                    title: "Revenue section"
                                }, "Revenue section"), ".")))
                            }
                        }, {
                            number: 4,
                            label: "Make your first sale!",
                            isHiddenStep: !0,
                            content: function() {
                                return b.createElement("div", {
                                    className: "tw-flex tw-flex-col tw-justify-between @[700px]/tutorial:tw-flex-row tw-pt-0 @[700px]/tutorial:tw-px-12 @[700px]/tutorial:tw-py-9"
                                }, b.createElement("img", {
                                    src: $(),
                                    alt: "",
                                    className: " tw-rounded-lg tw-max-w-full tw-object-cover @[700px]/tutorial:tw-max-w-[240px]  @[790px]/tutorial:tw-max-w-[300px] @[905px]/tutorial:tw-max-w-[350px] @[955px]/tutorial:tw-max-w-[400px] @[1160px]/tutorial:tw-max-w-[500px]"
                                }), b.createElement("div", {
                                    className: " tw-flex tw-flex-col tw-max-w-full tw-ml-0 @[700px]/tutorial:tw-max-w-full @[700px]/tutorial:tw-ml-4 "
                                }, b.createElement("h4", {
                                    className: "tw-text-white tw-font-bold tw-text-lg tw-mt-4"
                                }, "Congrats on your first sale!"), b.createElement("p", {
                                    className: "tw-text-light-grey tw-text-sm tw-mt-2"
                                }, "Well done! Now you can close this module by clicking the button below."), b.createElement("div", {
                                    className: "tw-flex"
                                }, b.createElement(W.Z, {
                                    className: "tw-mt-4 tw-h-10 tw-bg-button-bg tw-text-highlight tw-leading-none tw-border-transparent hover:tw-border-highlight",
                                    onClick: function() {
                                        i(!0)
                                    }
                                }, "Close"))))
                            }
                        }];
                    return o ? null : b.createElement("div", {
                        className: "tw-bg-[#000] tw-rounded-lg tw-relative tw-p-5 tw-@container/tutorial"
                    }, b.createElement("div", {
                        className: "tw-flex tw-flex-row tw-justify-between"
                    }, b.createElement("h3", {
                        className: "tw-text-lighter-grey after:tw-border-0 tw-font-bold tw-text-lg "
                    }, "Get Ready To Sell"), b.createElement("div", {
                        className: "tw-hidden @[900px]/tutorial:tw-block"
                    }, b.createElement(q, {
                        steps: s,
                        currentStepNumber: a
                    })), b.createElement("div", null, b.createElement("button", {
                        type: "button",
                        onClick: function() {
                            i(!0)
                        },
                        className: "tw-bg-transparent tw-border-none tw-cursor-pointer"
                    }, b.createElement(U.Z, {
                        icon: A.faXmark
                    })))), b.createElement("div", {
                        className: "tw-mt-4 tw-mb-2 tw-flex tw-justify-center tw-ml-[44px] @[900px]/tutorial:tw-hidden"
                    }, b.createElement(q, {
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
            var le = {
                    numPurchases: "Total Sales",
                    totalPurchasePrice: "Total Earnings"
                },
                ne = [{
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
                        l = p()(),
                        n = l.clone().endOf(r);
                    return {
                        groupByDuration: a,
                        metricDateStart: l.clone().add(1, r).startOf(r).subtract(t),
                        metricDateEnd: n
                    }
                };
            const ce = function() {
                var e, t, a, s, c, w = (0, h.IB)().data,
                    m = null == w ? void 0 : w.id,
                    d = b.useState("numPurchases"),
                    N = (0, l.Z)(d, 2),
                    k = N[0],
                    D = N[1],
                    S = b.useState(ne[0].value),
                    M = (0, l.Z)(S, 2),
                    P = M[0],
                    C = M[1],
                    Y = (0, v.uK)({
                        sellerId: m,
                        groupByDuration: "years",
                        metricDateStart: g.pH,
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
                    L = b.useMemo((function() {
                        return 0 === j.totals.totalEarnings
                    }), [j]),
                    B = b.useMemo((function() {
                        return se(P)
                    }), []),
                    G = B.groupByDuration,
                    A = B.metricDateStart,
                    U = B.metricDateEnd,
                    F = b.useState(G),
                    _ = (0, l.Z)(F, 2),
                    q = _[0],
                    H = _[1],
                    K = b.useState(A),
                    W = (0, l.Z)(K, 2),
                    X = W[0],
                    $ = W[1],
                    z = (0, x.Nr)(X),
                    V = b.useState(U),
                    Q = (0, l.Z)(V, 2),
                    J = Q[0],
                    ee = Q[1],
                    te = (0, x.Nr)(J),
                    ae = b.useState(!1),
                    ce = (0, l.Z)(ae, 2),
                    ue = ce[0],
                    we = ce[1],
                    me = b.useState(),
                    de = (0, l.Z)(me, 2),
                    pe = de[0],
                    be = de[1],
                    fe = b.useMemo((function() {
                        return [p().isMoment(X) && X.isAfter(g.pH) && X.isBefore(J || p()().add(2, "y")), p().isMoment(J) && J.isAfter(X || g.pH) && J.isBefore(p()().add(2, "y"))]
                    }), [X, J]),
                    xe = (0, l.Z)(fe, 2),
                    ge = xe[0],
                    he = xe[1];
                b.useEffect((function() {
                    if (P) {
                        var e = se(P),
                            t = e.groupByDuration,
                            a = e.metricDateStart,
                            r = e.metricDateEnd;
                        H(t), $(a), ee(r)
                    }
                }), [P]);
                var ve, ye, Ee = (0, v.uK)({
                        sellerId: m,
                        groupByDuration: q,
                        metricDateStart: null == z ? void 0 : z.toISOString(),
                        metricDateEnd: null == te ? void 0 : te.toISOString(),
                        listingIds: pe ? [pe] : pe
                    }, {
                        skip: !(m && z && te && ge && he)
                    }),
                    Ne = Ee.data,
                    ke = void 0 === Ne ? {
                        totals: {
                            totalEarnings: 0,
                            otpPurchaseCount: 0,
                            subscriberMonths: 0
                        }
                    } : Ne,
                    De = (Ee.isFetching, Ee.isError, Ee.error, !m || pe && (Oe || je) || !X || !J || !ge || !he || !(null != ke && null !== (e = ke.breakdown) && void 0 !== e && e.length) || Ue),
                    Se = b.useMemo((function() {
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
                                    label: le[k] || k,
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
                    Me = function() {
                        ue || we(!0)
                    },
                    Pe = (0, y.Ul)({
                        userId: m,
                        hydrate: !0
                    }),
                    Ce = Pe.data,
                    Ye = void 0 === Ce ? [] : Ce,
                    Oe = Pe.isLoading,
                    je = Pe.isError,
                    Te = Pe.isSuccess,
                    Ie = Pe.error,
                    Ze = b.useMemo((function() {
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
                    Le = (0, E.rP)({
                        userId: m
                    }, {
                        skip: !m
                    }),
                    Be = Le.data,
                    Re = Le.isFetching,
                    Ge = Le.isSuccess,
                    Ae = T || X !== z || J !== te || Re,
                    Ue = !(null != Se && null !== (t = Se.datasets) && void 0 !== t && t.length),
                    Fe = b.useMemo((function() {
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
                    _e = b.useMemo((function() {
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
                                        tooltipFormat: Fe,
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
                    }), [k, q, Fe]);
                return b.createElement(b.Fragment, null, b.createElement(re, {
                    currentStepNumber: (ve = 0 === (null == Be ? void 0 : Be.length) && Ge, ye = !Ye.some((function(e) {
                        return !0 === e.active
                    })) && Te, ve ? 1 : ye ? 2 : L ? 3 : 4)
                }), b.createElement(R, null), b.createElement(o.X2, {
                    className: "align-items-center flex-wrap tw-mb-4",
                    style: {
                        justifyContent: "space-between"
                    }
                }, b.createElement("div", {
                    style: {
                        marginBottom: -8
                    }
                }, b.createElement(i.Z, {
                    justify: "left",
                    selected: k,
                    onChange: D,
                    tabs: Object.entries(le).map((function(e) {
                        var t = (0, l.Z)(e, 2);
                        return {
                            id: t[0],
                            name: t[1],
                            condition: !0
                        }
                    }))
                }))), b.createElement(o.X2, {
                    className: "align-items-center flex-wrap tw-gap-1"
                }, b.createElement(o.Lt, {
                    label: "Duration",
                    onChange: C,
                    value: P,
                    options: ne,
                    className: "tw-mr-2"
                }), b.createElement(o.Lt, {
                    label: "Group By",
                    onChange: H,
                    value: q,
                    options: oe,
                    className: "tw-mr-2"
                }), !P && b.createElement("div", {
                    className: "d-flex align-items-center flex-wrap"
                }, b.createElement(o.II, {
                    type: "date",
                    className: "tw-mr-1",
                    disabled: !!P,
                    invalid: ge,
                    value: null == X ? void 0 : X.format("YYYY-MM-DD"),
                    onChange: function(e) {
                        var t = p()(e.target.value).startOf(ie(q));
                        $(t)
                    },
                    min: g.pH,
                    max: null == J ? void 0 : J.format("YYYY-MM-DD")
                }), " to ", b.createElement(o.II, {
                    type: "date",
                    className: "tw-ml-1",
                    disabled: !!P,
                    invalid: he,
                    value: null == J ? void 0 : J.format("YYYY-MM-DD"),
                    onChange: function(e) {
                        var t = p()(e.target.value).endOf(ie(q));
                        ee(t)
                    },
                    min: (null == X ? void 0 : X.format("YYYY-MM-DD")) || g.pH,
                    max: p()().add(2, "y").format("YYYY-MM-DD")
                })), b.createElement("div", {
                    className: "d-flex justify-content-end",
                    style: {
                        flex: "1 1 auto"
                    }
                }, b.createElement(o.Lt, {
                    style: {
                        minWidth: 200,
                        maxWidth: 300
                    },
                    trimToLength: !0,
                    label: "Listing",
                    onChange: be,
                    onMouseEnter: Me,
                    onClick: Me,
                    className: "tw-mr-2",
                    value: pe,
                    options: Ze
                }), b.createElement(o.zx, {
                    disabled: De,
                    onClick: function() {
                        var e;
                        if (!De) {
                            var t = document.createElement("a");
                            t.style.display = "none";
                            var a = "weeks" === q ? "GGGG-[W]ww" : "YYYY-MM-DD",
                                r = pe && (null == Ye || null === (e = Ye.find((function(e) {
                                    return e.id === pe
                                }))) || void 0 === e ? void 0 : e.displayName);
                            t.setAttribute("download", "VRChat Sales".concat(r ? " for ".concat(r) : "", " by ").concat(q.replace(/s$/, ""), " - ").concat(X.format(a), " to ").concat(J.format(a), ".csv"));
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
                }, b.createElement(o.$1, {
                    icon: n.q7,
                    className: "tw-px-2"
                })))), b.createElement("span", {
                    className: "tw-text-placeholder-text tw-my-5 tw-text-base"
                }, "Time period: ", null == X ? void 0 : X.format("MMM DD"), " - ", null !== (a = u()(J)) && void 0 !== a && a.isToday() ? "Today" : null == J ? void 0 : J.format("MMM DD")), je && b.createElement(o.qX, {
                    type: "error",
                    title: "Error loading listings"
                }, null == Ie || null === (s = Ie.data) || void 0 === s || null === (s = s.error) || void 0 === s ? void 0 : s.message), I && b.createElement(o.qX, {
                    type: "error",
                    title: "Error loading earnings"
                }, null == Z || null === (c = Z.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message), Ae ? b.createElement(o.UU, {
                    style: {
                        minHeight: 100,
                        aspectRatio: _e.aspectRatio.toString(10)
                    }
                }) : function() {
                    if (Ue) {
                        var e = {
                            labels: Array.from({
                                length: 7
                            }, (function(e, t) {
                                return u()().subtract(6 - t, "day").format("MMM DD")
                            })),
                            datasets: Array(7).fill({})
                        };
                        return b.createElement("div", {
                            className: "tw-flex-auto tw-flex-wrap tw-flex-row tw-text-center tw-mt-5 tw-relative"
                        }, b.createElement("div", {
                            className: "tw-absolute tw-w-full tw-h-full"
                        }, b.createElement("div", {
                            className: "tw-flex tw-flex-col tw-justify-center tw-align-middle tw-items-center tw-w-full tw-h-full tw-text-light-grey"
                        }, b.createElement("span", {
                            className: "tw-mb-1 tw-font-bold"
                        }, "No Data"), b.createElement("span", null, "There's no available data in the selected date and time"))), b.createElement("div", {
                            className: "tw-flex tw-w-full tw-justify-center tw-min-h-[100px] tw-opacity-20"
                        }, b.createElement(f.x1, {
                            datasetIdKey: "_id",
                            options: {
                                responsive: !0,
                                aspectRatio: 4
                            },
                            data: e
                        })))
                    }
                    return b.createElement(f.x1, {
                        datasetIdKey: "_id",
                        options: _e,
                        data: Se
                    })
                }(), "weeks" === q && b.createElement(o.qX, {
                    type: "dark",
                    slim: !0,
                    className: "mb-0"
                }, "Weekly data is tabulated using ISO weeks, which always begin on a Monday and end on a Sunday. The first and last ISO weeks can overlap into the previous or next calendar year, respectively. More information about ISO weeks can be found", " ", b.createElement("a", {
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
//# sourceMappingURL=23fd2dccd6349092a1a60f99f5b7afe0425476e3dd94568abed944e9cab7555d.js.map