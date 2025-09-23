(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6775], {
        76775: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => ue
            });
            var r = a(54546),
                n = a(40767),
                l = a(96985),
                o = a(72998),
                i = a(529),
                s = (a(86961), a(27484)),
                c = a.n(s),
                u = a(7124),
                w = a.n(u),
                m = a(30381),
                d = a.n(m),
                p = a(67294),
                f = a(26495),
                b = a(17383),
                x = a(95896),
                h = a(22202),
                g = a(66736),
                v = a(16869),
                y = a(67978),
                E = a(37412),
                N = a.n(E);
            c().extend(N());
            var k = a(4942),
                D = a(15861),
                M = a(4965),
                P = a(64687),
                S = a.n(P),
                C = a(6655),
                Y = a(64358),
                O = a(89250),
                T = a(56646),
                j = a(45697),
                I = a.n(j),
                L = function(e) {
                    var t = e.title,
                        a = e.credits,
                        r = void 0 === a ? null : a,
                        n = e.link,
                        o = void 0 === n ? null : n,
                        i = e.cta,
                        s = void 0 === i ? null : i,
                        c = e.hideGlyph,
                        u = void 0 !== c && c,
                        w = e.customNoCreditsText,
                        m = void 0 === w ? null : w,
                        d = e.className,
                        f = e.isError,
                        b = void 0 !== f && f,
                        x = e.error,
                        h = null === r || 0 === r;
                    if (b) {
                        var g = x || "An unknown error occurred";
                        return p.createElement("div", {
                            className: "tw-bg-grey tw-p-5 tw-rounded-xl tw-@container/marketplacePanel tw-w-full ".concat(d)
                        }, p.createElement("h5", {
                            className: "tw-text-xl tw-font-bold after:tw-border-none tw-no-underline tw-mb-3"
                        }, t), p.createElement("p", {
                            className: "tw-text-placeholder-text tw-mb-12"
                        }, "Failed to retrieve data: ", g))
                    }
                    return p.createElement("div", {
                        className: "tw-bg-grey tw-p-5 tw-rounded-xl tw-@container/marketplacePanel tw-w-full ".concat(d)
                    }, p.createElement("h5", {
                        className: "tw-text-xl tw-font-bold after:tw-border-none tw-no-underline tw-mb-3"
                    }, t), h && p.createElement("p", {
                        className: "tw-text-placeholder-text tw-mb-12"
                    }, m || "Nothing here (yet)"), !h && p.createElement("p", {
                        className: "tw-text-white tw-text-4xl tw-font-bold tw-mb-8"
                    }, !u && p.createElement(l.b5, {
                        className: "tw-text-[#6ae3f9] tw-mr-1"
                    }), r.toLocaleString()), p.createElement("div", {
                        className: " tw-justify-between tw-flex tw-flex-col @[300px]/marketplacePanel:tw-flex-row @[300px]/marketplacePanel:tw-items-end  "
                    }, p.createElement(l.zx, {
                        className: "tw-px-[10px] tw-py-[7px] tw-mb-2 @[300px]/marketplacePanel:tw-mb-0",
                        disabled: null == s ? void 0 : s.isDisabled,
                        onClick: null == s ? void 0 : s.onClickCallback,
                        title: null == s ? void 0 : s.title
                    }, s.text), null !== o && p.createElement("span", null, p.createElement(l.$1, {
                        icon: T.faCircleInfo
                    }), p.createElement("a", {
                        href: null == o ? void 0 : o.href,
                        className: "tw-text-sm tw-underline tw-font-thin tw-ml-1 tw-text-subtext-grey",
                        referrerPolicy: "no-referrer"
                    }, null == o ? void 0 : o.text))))
                };
            L.propTypes = {
                title: I().string.isRequired,
                credits: I().number,
                link: I().shape({
                    href: I().string,
                    text: I().string
                }),
                cta: I().shape({
                    text: I().string,
                    onClickCallback: I().func,
                    isDisabled: I().bool
                }),
                hideGlyph: I().bool,
                customNoCreditsText: I().string
            };
            const Z = L;

            function B(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? B(Object(a), !0).forEach((function(t) {
                        (0, k.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : B(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            const G = function() {
                var e, t, a = (0, h.IB)().data,
                    n = null == a ? void 0 : a.id,
                    o = (0, O.s0)(),
                    i = (0, C.gI)(),
                    s = (0, r.Z)(i, 1)[0],
                    c = (0, O.oQ)("/home/marketplace/storefront/payout"),
                    u = (0, C.kN)({}, {
                        refetchOnMountOrArgChange: !0
                    }),
                    w = u.data,
                    m = (u.isLoading, u.isError),
                    d = (u.error, null == w ? void 0 : w.eligible),
                    f = !(null != w && w.eligible) && (null == w ? void 0 : w.reason) === x.BP.UPDATED_REQUIRED,
                    b = !(null != w && w.eligible) && (null == w ? void 0 : w.reason) === x.BP.BLOCKED,
                    v = !(null != w && w.eligible) && (null == w ? void 0 : w.reason) === x.BP.DISABLED,
                    y = !(null != w && w.eligible) && (null == w ? void 0 : w.reason) === x.BP.KYC_PENDING,
                    E = !(null != w && w.eligible) && (null == w ? void 0 : w.reason) === x.BP.KYC_REQUIRED,
                    N = !(null != w && w.eligible) && (null == w ? void 0 : w.reason) === x.BP.COOLDOWN,
                    k = (0, g.uK)({
                        sellerId: n,
                        groupByDuration: "years",
                        metricDateStart: x.pH,
                        metricDateEnd: "2511-03-07"
                    }, {
                        skip: !n
                    }),
                    M = k.data,
                    P = void 0 === M ? {
                        totals: {
                            totalEarnings: 0,
                            otpPurchaseCount: 0,
                            subscriberMonths: 0
                        }
                    } : M,
                    T = k.isFetching,
                    j = k.isError,
                    I = k.error,
                    L = (0, C.pp)({
                        userId: n,
                        type: "earnings"
                    }, {
                        skip: !n,
                        refetchOnMountOrArgChange: !0
                    }).data,
                    B = (void 0 === L ? {
                        balance: 0
                    } : L).balance,
                    G = p.useMemo((function() {
                        var e, t, a;
                        return {
                            allTimeNumPurchases: Number(null == P || null === (e = P.totals) || void 0 === e ? void 0 : e.otpPurchaseCount) + Number(null == P || null === (t = P.totals) || void 0 === t ? void 0 : t.subscriberMonths),
                            allTimeTotalPurchasePrice: null == P || null === (a = P.totals) || void 0 === a ? void 0 : a.totalEarnings
                        }
                    }), [P]),
                    U = G.allTimeNumPurchases,
                    _ = G.allTimeTotalPurchasePrice,
                    F = (0, p.useMemo)((function() {
                        return m ? "Error fetching payout eligibility, please try again later." : v ? "Tilia's Terms of Service may have changed. You'll need to accept their updated Terms of Service before you pay out." : B < x.vC ? "You must have at least ".concat(x.vC.toLocaleString(), " credits available to pay out.") : f ? "Tilia Terms of Service have been updated. You must accept the updated Terms of Service before you can pay out." : b ? "Your account has been blocked by Tilia. Please contact support for assistance." : y ? "Your KYC verification is pending. Please complete the KYC process before you can pay out." : E ? "You must complete KYC verification before you can pay out." : N ? "You are currently in a payout cooldown period. Please wait before attempting to pay out again." : "You are eligible to pay out. Click to proceed."
                    }), [B, w, m]);
                return p.createElement(p.Fragment, null, j && p.createElement(l.qX, {
                    type: "error",
                    title: "Error loading statistics"
                }, "Failed to fetch earnings: ", null == I || null === (e = I.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message), p.createElement("div", {
                    className: "tw-flex tw-w-full tw-gap-3 tw-my-4 tw-flex-col sm:tw-flex-row"
                }, T ? p.createElement(p.Fragment, null, p.createElement(A, null), p.createElement(A, {
                    delay: 100
                })) : p.createElement(p.Fragment, null, p.createElement(Z, {
                    title: "Available Payout",
                    credits: Number(B) || 0,
                    link: {
                        text: "About Payout",
                        href: "https://www.tilia.io/legal/terms-of-service"
                    },
                    cta: {
                        text: "Payout",
                        onClickCallback: (t = (0, D.Z)(S().mark((function e() {
                            var t, r;
                            return S().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, s(R(R({}, Y.$Z.PAYOUT), {}, {
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
                        isDisabled: B < x.vC || !d,
                        title: F
                    }
                }), p.createElement(Z, {
                    title: "Total Sales",
                    hideGlyph: !0,
                    credits: Number(U || 0),
                    cta: {
                        text: "View Details",
                        onClickCallback: function() {
                            o("/home/marketplace/storefront/revenue/mysales")
                        },
                        isDisabled: !1
                    }
                }), p.createElement(Z, {
                    title: "Total Earned",
                    credits: Number(_ || 0),
                    cta: {
                        text: "View Details",
                        onClickCallback: function() {
                            o("/home/marketplace/storefront/revenue/mysales")
                        },
                        isDisabled: !1
                    }
                }))))
            };
            var A = (0, M.Z)(l.UU, {
                    target: "e129v97h1"
                })({
                    name: "rdii6n",
                    styles: "flex:1 1 240px;min-height:148px;margin:0.5rem;border-radius:8px"
                }),
                U = a(87709),
                _ = a(86646),
                F = a(68055),
                q = function(e) {
                    var t = e.steps,
                        a = e.currentStepNumber,
                        r = t.filter((function(e) {
                            return e.isHiddenStep
                        }));
                    return p.createElement("ol", {
                        className: "tw-max-w-[650px] tw-flex tw-justify-between tw-items-start tw-pl-[0px] xs:tw-pl-[44px]"
                    }, t.map((function(e, n) {
                        var l = Number(a) > Number(e.number),
                            o = Number(a) === Number(e.number),
                            i = n === t.length - (r.length + 1);
                        if (e.isHiddenStep) return null;
                        return p.createElement("li", {
                            key: e.number,
                            className: "\n              tw-list-none\n              xs:tw-flex tw-flex-col\n              xs:tw-w-[120px] sm:tw-w-[340px]\n              ".concat(o ? "" : "tw-hidden", "\n            "),
                            "aria-label": "".concat(o ? "Current step: ".concat(e.label) : "", " ")
                        }, p.createElement("div", {
                            className: "\n              tw-list-none tw-flex tw-items-center\n              ".concat(l ? "after:tw-border-green" : "after:tw-border-lighter-grey", "\n              after:tw-border-0 after:tw-content-[''] after:tw-w-full after:tw-border-b-[1px] after:tw-border-solid after:tw-mx-2\n              after:tw-flex\n              ").concat(i ? "after:tw-hidden" : "xs:after:tw-flex", "\n              ").concat(o ? "after:tw-hidden" : "", "\n            ")
                        }, p.createElement("div", {
                            className: "tw-flex tw-flex-col tw-items-start"
                        }, p.createElement("div", {
                            className: "\n                  tw-border-solid tw-border-2 tw-border-full\n                  tw-w-8 tw-h-8 tw-rounded-full\n                  tw-flex tw-items-center tw-justify-center tw-text-sm\n                  after:tw-w-full after:tw-h-1 after:tw-border-b\n                  ".concat("", "\n                  ").concat(l ? "tw-border-green tw-text-[#000] tw-bg-green" : o ? "tw-border-green tw-text-white" : "tw-border-light-grey tw-text-light-grey", "\n                ")
                        }, l ? p.createElement(_.Z, {
                            icon: F.LE,
                            "aria-label": "Done"
                        }) : e.number))), p.createElement("div", {
                            className: "tw-text-sm tw-text-center tw-w-[130px] tw--ml-[44px] tw-mt-2 ".concat(o ? "tw-text-white tw-font-bold" : "tw-text-light-grey")
                        }, e.label))
                    })))
                };
            q.propTypes = {
                steps: I().arrayOf(I().shape({
                    number: I().number.isRequired,
                    label: I().string.isRequired,
                    isHiddenStep: I().bool
                })).isRequired,
                currentStepNumber: I().number.isRequired
            };
            const H = q;
            var K = a(15832),
                W = a(79655),
                X = a(34698),
                $ = a(59128),
                z = a.n($),
                V = a(259),
                Q = a.n(V),
                J = a(9468),
                ee = a.n(J),
                te = a(83555),
                ae = a.n(te),
                re = function(e) {
                    var t, a = e.currentStepNumber,
                        n = (0, K._)("myStoreTutorialDismissed", !1),
                        l = (0, r.Z)(n, 2),
                        o = l[0],
                        i = l[1],
                        s = [{
                            number: 1,
                            label: "Create a Product or subscription",
                            content: function() {
                                return p.createElement("div", {
                                    className: "tw-flex tw-flex-col tw-justify-between @[700px]/tutorial:tw-flex-row tw-pt-0 @[700px]/tutorial:tw-px-12 @[700px]/tutorial:tw-py-9"
                                }, p.createElement("img", {
                                    src: Q(),
                                    alt: "",
                                    className: " tw-rounded-lg tw-max-w-full tw-object-cover @[700px]/tutorial:tw-max-w-[240px]  @[790px]/tutorial:tw-max-w-[300px] @[905px]/tutorial:tw-max-w-[350px] @[955px]/tutorial:tw-max-w-[400px] @[1160px]/tutorial:tw-max-w-[500px]"
                                }), p.createElement("div", {
                                    className: " tw-flex tw-flex-col tw-max-w-full tw-ml-0 @[700px]/tutorial:tw-max-w-full @[700px]/tutorial:tw-ml-4 "
                                }, p.createElement("h4", {
                                    className: "tw-text-white tw-font-bold tw-text-lg tw-mt-4"
                                }, "Enhance in-world experiences and engage with your community"), p.createElement("p", {
                                    className: "tw-text-light-grey tw-text-sm tw-mt-2"
                                }, "Products allow you to customize interactions and behaviors in your worlds. Subscriptions ensure you a regular income from your supporters."), p.createElement("p", {
                                    className: "tw-text-light-grey tw-text-sm tw-mt-2"
                                }, "Proceed to the next step by creating your first product or subscription!"), p.createElement("div", {
                                    className: "tw-flex"
                                }, p.createElement(W.rU, {
                                    to: "/home/marketplace/storefront/products"
                                }, p.createElement(X.Z, {
                                    className: "tw-mt-4 tw-h-10 tw-bg-button-bg tw-text-highlight tw-leading-none tw-border-transparent hover:tw-border-highlight"
                                }, "Create Product")), p.createElement(W.rU, {
                                    to: "/home/marketplace/storefront/subscriptions"
                                }, p.createElement(X.Z, {
                                    className: "tw-mt-4 tw-h-10 tw-bg-button-bg tw-text-highlight tw-leading-none tw-border-transparent hover:tw-border-highlight tw-ml-4"
                                }, "Create Subscription")))))
                            }
                        }, {
                            number: 2,
                            label: "Setup your store and publish it",
                            content: function() {
                                return p.createElement("div", {
                                    className: "tw-flex tw-flex-col tw-justify-between @[700px]/tutorial:tw-flex-row tw-pt-0 @[700px]/tutorial:tw-px-12 @[700px]/tutorial:tw-py-9"
                                }, p.createElement("img", {
                                    src: ee(),
                                    alt: "",
                                    className: " tw-rounded-lg tw-max-w-full tw-object-cover @[700px]/tutorial:tw-max-w-[240px]  @[790px]/tutorial:tw-max-w-[300px] @[905px]/tutorial:tw-max-w-[350px] @[955px]/tutorial:tw-max-w-[400px] @[1160px]/tutorial:tw-max-w-[500px]"
                                }), p.createElement("div", {
                                    className: " tw-flex tw-flex-col tw-max-w-full tw-ml-0 @[700px]/tutorial:tw-max-w-full @[700px]/tutorial:tw-ml-4 "
                                }, p.createElement("h4", {
                                    className: "tw-text-white tw-font-bold tw-text-lg tw-mt-4"
                                }, "Build your storefronts from the store manager"), p.createElement("p", {
                                    className: "tw-text-light-grey tw-text-sm tw-mt-2"
                                }, "Organize your listings, create bundles and set prices. Preview how your stores appear in-world, on the marketplace tab and in the corresponding group and world pages."), p.createElement("div", {
                                    className: "tw-flex"
                                }, p.createElement(W.rU, {
                                    to: "/home/marketplace/storefront/stores"
                                }, p.createElement(X.Z, {
                                    className: "tw-mt-4 tw-h-10 tw-bg-button-bg tw-text-highlight tw-leading-none tw-border-transparent hover:tw-border-highlight"
                                }, "Manage Stores")))))
                            }
                        }, {
                            number: 3,
                            label: "Make your first sale!",
                            content: function() {
                                return p.createElement("div", {
                                    className: "tw-flex tw-flex-col tw-justify-between @[700px]/tutorial:tw-flex-row tw-pt-0 @[700px]/tutorial:tw-px-12 @[700px]/tutorial:tw-py-9"
                                }, p.createElement("img", {
                                    src: ae(),
                                    alt: "",
                                    className: " tw-rounded-lg tw-max-w-full tw-object-cover @[700px]/tutorial:tw-max-w-[240px]  @[790px]/tutorial:tw-max-w-[300px] @[905px]/tutorial:tw-max-w-[350px] @[955px]/tutorial:tw-max-w-[400px] @[1160px]/tutorial:tw-max-w-[500px]"
                                }), p.createElement("div", {
                                    className: " tw-flex tw-flex-col tw-max-w-full tw-ml-0 @[700px]/tutorial:tw-max-w-full @[700px]/tutorial:tw-ml-4 "
                                }, p.createElement("h4", {
                                    className: "tw-text-white tw-font-bold tw-text-lg tw-mt-4"
                                }, "You are all set to start selling!"), p.createElement("p", {
                                    className: "tw-text-light-grey tw-text-sm tw-mt-2"
                                }, "The final step to greatness. Share your store, promote your work, and make your first sale! You can track all your sales and subscribers on the", " ", p.createElement(W.rU, {
                                    to: "/home/marketplace/storefront/revenue/mysales",
                                    title: "Revenue section"
                                }, "Revenue section"), ".")))
                            }
                        }, {
                            number: 4,
                            label: "Make your first sale!",
                            isHiddenStep: !0,
                            content: function() {
                                return p.createElement("div", {
                                    className: "tw-flex tw-flex-col tw-justify-between @[700px]/tutorial:tw-flex-row tw-pt-0 @[700px]/tutorial:tw-px-12 @[700px]/tutorial:tw-py-9"
                                }, p.createElement("img", {
                                    src: z(),
                                    alt: "",
                                    className: " tw-rounded-lg tw-max-w-full tw-object-cover @[700px]/tutorial:tw-max-w-[240px]  @[790px]/tutorial:tw-max-w-[300px] @[905px]/tutorial:tw-max-w-[350px] @[955px]/tutorial:tw-max-w-[400px] @[1160px]/tutorial:tw-max-w-[500px]"
                                }), p.createElement("div", {
                                    className: " tw-flex tw-flex-col tw-max-w-full tw-ml-0 @[700px]/tutorial:tw-max-w-full @[700px]/tutorial:tw-ml-4 "
                                }, p.createElement("h4", {
                                    className: "tw-text-white tw-font-bold tw-text-lg tw-mt-4"
                                }, "Congrats on your first sale!"), p.createElement("p", {
                                    className: "tw-text-light-grey tw-text-sm tw-mt-2"
                                }, "Well done! Now you can close this module by clicking the button below."), p.createElement("div", {
                                    className: "tw-flex"
                                }, p.createElement(X.Z, {
                                    className: "tw-mt-4 tw-h-10 tw-bg-button-bg tw-text-highlight tw-leading-none tw-border-transparent hover:tw-border-highlight",
                                    onClick: function() {
                                        i(!0)
                                    }
                                }, "Close"))))
                            }
                        }];
                    return o ? null : p.createElement("div", {
                        className: "tw-bg-[#000] tw-rounded-lg tw-relative tw-p-5 tw-@container/tutorial"
                    }, p.createElement("div", {
                        className: "tw-flex tw-flex-row tw-justify-between"
                    }, p.createElement("h3", {
                        className: "tw-text-lighter-grey after:tw-border-0 tw-font-bold tw-text-lg "
                    }, "Get Ready To Sell"), p.createElement("div", {
                        className: "tw-hidden @[900px]/tutorial:tw-block"
                    }, p.createElement(H, {
                        steps: s,
                        currentStepNumber: a
                    })), p.createElement("div", null, p.createElement("button", {
                        type: "button",
                        onClick: function() {
                            i(!0)
                        },
                        className: "tw-bg-transparent tw-border-none tw-cursor-pointer"
                    }, p.createElement(_.Z, {
                        icon: U.faXmark
                    })))), p.createElement("div", {
                        className: "tw-mt-4 tw-mb-2 tw-flex tw-justify-center tw-ml-[44px] @[900px]/tutorial:tw-hidden"
                    }, p.createElement(H, {
                        steps: s,
                        currentStepNumber: a
                    })), null === (t = s.find((function(e) {
                        return e.number === a
                    }))) || void 0 === t ? void 0 : t.content())
                };
            re.propTypes = {
                currentStepNumber: I().number.isRequired
            };
            const ne = re;
            c().extend(w()), i.kL.register(i.uw, i.f$, i.FB, i.od, i.jn, i.u, i.Gu), i.kL.defaults.color = "#737372", i.kL.defaults.borderColor = "rgba(127, 127, 127, 0.1)";
            var le = {
                    numPurchases: "Total Sales",
                    totalPurchasePrice: "Total Earnings"
                },
                oe = [{
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
                ie = [{
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
                se = function(e) {
                    return "weeks" === e ? "isoweek" : e
                },
                ce = function(e) {
                    var t = d().duration(e);
                    if (t.asDays() < 1) throw new RangeError("computeValuesForDurationTemplate: durationTemplate ".concat(e, " resulted in an invalid duration"));
                    var a = function(e) {
                            if (!d().isDuration(e)) throw new TypeError("duration ".concat(e, " is not a valid duration object"));
                            return e.asMonths() > 11 ? "months" : e.asMonths() > 2 ? "weeks" : "days"
                        }(t),
                        r = se(a),
                        n = d()(),
                        l = n.clone().endOf(r);
                    return {
                        groupByDuration: a,
                        metricDateStart: n.clone().add(1, r).startOf(r).subtract(t),
                        metricDateEnd: l
                    }
                };
            const ue = function() {
                var e, t, a, i, s, u = (0, h.IB)().data,
                    w = null == u ? void 0 : u.id,
                    m = p.useState("numPurchases"),
                    E = (0, r.Z)(m, 2),
                    N = E[0],
                    k = E[1],
                    D = p.useState(oe[0].value),
                    M = (0, r.Z)(D, 2),
                    P = M[0],
                    S = M[1],
                    C = (0, g.uK)({
                        sellerId: w,
                        groupByDuration: "years",
                        metricDateStart: x.pH,
                        metricDateEnd: "2511-03-07"
                    }, {
                        skip: !w
                    }),
                    Y = C.data,
                    O = void 0 === Y ? {
                        totals: {
                            totalEarnings: 0,
                            otpPurchaseCount: 0,
                            subscriberMonths: 0
                        }
                    } : Y,
                    T = C.isFetching,
                    j = C.isError,
                    I = C.error,
                    L = p.useMemo((function() {
                        return 0 === O.totals.totalEarnings
                    }), [O]),
                    Z = p.useMemo((function() {
                        return ce(P)
                    }), []),
                    B = Z.groupByDuration,
                    R = Z.metricDateStart,
                    A = Z.metricDateEnd,
                    U = p.useState(B),
                    _ = (0, r.Z)(U, 2),
                    F = _[0],
                    q = _[1],
                    H = p.useState(R),
                    K = (0, r.Z)(H, 2),
                    W = K[0],
                    X = K[1],
                    $ = (0, b.Nr)(W),
                    z = p.useState(A),
                    V = (0, r.Z)(z, 2),
                    Q = V[0],
                    J = V[1],
                    ee = (0, b.Nr)(Q),
                    te = p.useState(!1),
                    ae = (0, r.Z)(te, 2),
                    re = ae[0],
                    ue = ae[1],
                    we = p.useState(),
                    me = (0, r.Z)(we, 2),
                    de = me[0],
                    pe = me[1],
                    fe = p.useMemo((function() {
                        return [d().isMoment(W) && W.isAfter(x.pH) && W.isBefore(Q || d()().add(2, "y")), d().isMoment(Q) && Q.isAfter(W || x.pH) && Q.isBefore(d()().add(2, "y"))]
                    }), [W, Q]),
                    be = (0, r.Z)(fe, 2),
                    xe = be[0],
                    he = be[1];
                p.useEffect((function() {
                    if (P) {
                        var e = ce(P),
                            t = e.groupByDuration,
                            a = e.metricDateStart,
                            r = e.metricDateEnd;
                        q(t), X(a), J(r)
                    }
                }), [P]);
                var ge, ve, ye = (0, g.uK)({
                        sellerId: w,
                        groupByDuration: F,
                        metricDateStart: null == $ ? void 0 : $.toISOString(),
                        metricDateEnd: null == ee ? void 0 : ee.toISOString(),
                        listingIds: de ? [de] : de
                    }, {
                        skip: !(w && $ && ee && xe && he)
                    }),
                    Ee = ye.data,
                    Ne = void 0 === Ee ? {
                        totals: {
                            totalEarnings: 0,
                            otpPurchaseCount: 0,
                            subscriberMonths: 0
                        }
                    } : Ee,
                    ke = (ye.isFetching, ye.isError, ye.error, (0, v.Ul)({
                        userId: w,
                        hydrate: !0
                    })),
                    De = ke.data,
                    Me = void 0 === De ? [] : De,
                    Pe = ke.isLoading,
                    Se = ke.isError,
                    Ce = ke.isSuccess,
                    Ye = ke.error,
                    Oe = p.useMemo((function() {
                        var e;
                        if (null == Ne || null === (e = Ne.breakdown) || void 0 === e || !e.length || !W || !Q) return {
                            labels: [],
                            datasets: []
                        };
                        var t = function(e, t, a) {
                                var r = c()(e),
                                    n = c()(t),
                                    l = function(e) {
                                        switch (e) {
                                            case "years":
                                                return "year";
                                            case "months":
                                                return "month";
                                            case "weeks":
                                                return "week";
                                            default:
                                                return "day"
                                        }
                                    }(a),
                                    o = n.diff(r, l) + 1;
                                return Array.from({
                                    length: o
                                }, (function(e, t) {
                                    return r.add(t, l).format("YYYY-MM-DD")
                                }))
                            }(W, Q, F),
                            a = function(e, t) {
                                var a = new Map;
                                return e.forEach((function(e) {
                                    a.set(e._id, e)
                                })), t.map((function(e) {
                                    var t = a.get(e);
                                    return {
                                        _id: e,
                                        otpPurchaseCount: (null == t ? void 0 : t.otpPurchaseCount) || 0,
                                        subscriberMonths: (null == t ? void 0 : t.subscriberMonths) || 0,
                                        totalEarnings: (null == t ? void 0 : t.totalEarnings) || 0
                                    }
                                }))
                            }(Ne.breakdown, t);
                        return function(e, t) {
                            var a = {
                                    numPurchases: "Total Sales",
                                    totalPurchasePrice: "Total Earnings"
                                },
                                r = e.sort((function(e, t) {
                                    return e._id > t._id ? -1 : 1
                                })).reduce((function(e, r) {
                                    var n = r._id,
                                        l = r.otpPurchaseCount,
                                        o = void 0 === l ? 0 : l,
                                        i = r.subscriberMonths,
                                        s = void 0 === i ? 0 : i,
                                        c = r.totalEarnings,
                                        u = void 0 === c ? 0 : c;
                                    e.labels.push(n);
                                    var w = "numPurchases" === t ? o + s : u;
                                    return e.datasets[t] || (e.datasets[t] = {
                                        yAxisId: t,
                                        label: a[t] || t,
                                        data: [],
                                        backgroundColor: "#064b5c",
                                        borderColor: "#086c84"
                                    }), e.datasets[t].data.push(w), e
                                }), {
                                    labels: [],
                                    datasets: {}
                                }),
                                n = r.labels,
                                l = r.datasets;
                            return {
                                labels: n,
                                datasets: Object.values(l)
                            }
                        }(a, N)
                    }), [Ne, N, W, Q, F]),
                    Te = !(null != Oe && null !== (e = Oe.datasets) && void 0 !== e && e.length),
                    je = function() {
                        re || ue(!0)
                    },
                    Ie = p.useMemo((function() {
                        var e = [{
                            label: "All"
                        }];
                        return Pe ? e.push({
                            label: "Loading…"
                        }) : Me.forEach((function(t) {
                            var a = t.id,
                                r = t.displayName;
                            e.push({
                                label: r,
                                value: a
                            })
                        })), e
                    }), [Me, Pe]),
                    Le = (0, y.rP)({
                        userId: w
                    }, {
                        skip: !w
                    }),
                    Ze = Le.data,
                    Be = Le.isFetching,
                    Re = Le.isSuccess,
                    Ge = T || W !== $ || Q !== ee || Be,
                    Ae = p.useMemo((function() {
                        switch (F) {
                            case "years":
                                return "YYYY";
                            case "months":
                                return "MMM YYYY";
                            case "weeks":
                                return "[Week] ww, GGGG";
                            default:
                                return "MMM DD, YYYY"
                        }
                    }), [F]),
                    Ue = p.useMemo((function() {
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
                                        label: "totalPurchasePrice" === N ? function(t) {
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
                                        unit: null == F ? void 0 : F.replace(/s$/, ""),
                                        tooltipFormat: Ae,
                                        displayFormats: {
                                            week: "GGGG [W]ww"
                                        }
                                    }
                                },
                                y: {
                                    beginAtZero: !0,
                                    ticks: {
                                        precision: 0,
                                        callback: "totalPurchasePrice" === N ? e : void 0
                                    }
                                }
                            }
                        }
                    }), [N, F, Ae]),
                    _e = !w || de && (Pe || Se) || !W || !Q || !xe || !he || !(null != Ne && null !== (t = Ne.breakdown) && void 0 !== t && t.length) || Te;
                return p.createElement(p.Fragment, null, p.createElement(ne, {
                    currentStepNumber: (ge = 0 === (null == Ze ? void 0 : Ze.length) && Re, ve = !Me.some((function(e) {
                        return !0 === e.active
                    })) && Ce, ge ? 1 : ve ? 2 : L ? 3 : 4)
                }), p.createElement(G, null), p.createElement(l.X2, {
                    className: "align-items-center flex-wrap tw-mb-4",
                    style: {
                        justifyContent: "space-between"
                    }
                }, p.createElement("div", {
                    style: {
                        marginBottom: -8
                    }
                }, p.createElement(o.Z, {
                    justify: "left",
                    selected: N,
                    onChange: k,
                    tabs: Object.entries(le).map((function(e) {
                        var t = (0, r.Z)(e, 2);
                        return {
                            id: t[0],
                            name: t[1],
                            condition: !0
                        }
                    }))
                }))), p.createElement(l.X2, {
                    className: "align-items-center flex-wrap tw-gap-1"
                }, p.createElement(l.Lt, {
                    label: "Duration",
                    onChange: S,
                    value: P,
                    options: oe,
                    className: "tw-mr-2"
                }), p.createElement(l.Lt, {
                    label: "Group By",
                    onChange: q,
                    value: F,
                    options: ie,
                    className: "tw-mr-2"
                }), !P && p.createElement("div", {
                    className: "d-flex align-items-center flex-wrap"
                }, p.createElement(l.II, {
                    type: "date",
                    className: "tw-mr-1",
                    disabled: !!P,
                    invalid: xe,
                    value: null == W ? void 0 : W.format("YYYY-MM-DD"),
                    onChange: function(e) {
                        var t = d()(e.target.value).startOf(se(F));
                        X(t)
                    },
                    min: x.pH,
                    max: null == Q ? void 0 : Q.format("YYYY-MM-DD")
                }), " to ", p.createElement(l.II, {
                    type: "date",
                    className: "tw-ml-1",
                    disabled: !!P,
                    invalid: he,
                    value: null == Q ? void 0 : Q.format("YYYY-MM-DD"),
                    onChange: function(e) {
                        var t = d()(e.target.value).endOf(se(F));
                        J(t)
                    },
                    min: (null == W ? void 0 : W.format("YYYY-MM-DD")) || x.pH,
                    max: d()().add(2, "y").format("YYYY-MM-DD")
                })), p.createElement("div", {
                    className: "d-flex justify-content-end",
                    style: {
                        flex: "1 1 auto"
                    }
                }, p.createElement(l.Lt, {
                    style: {
                        minWidth: 200,
                        maxWidth: 300
                    },
                    trimToLength: !0,
                    label: "Listing",
                    onChange: pe,
                    onMouseEnter: je,
                    onClick: je,
                    className: "tw-mr-2",
                    value: de,
                    options: Ie
                }), p.createElement(l.zx, {
                    disabled: _e,
                    onClick: function() {
                        var e;
                        if (!_e) {
                            var t = document.createElement("a");
                            t.style.display = "none";
                            var a = "weeks" === F ? "GGGG-[W]ww" : "YYYY-MM-DD",
                                r = de && (null == Me || null === (e = Me.find((function(e) {
                                    return e.id === de
                                }))) || void 0 === e ? void 0 : e.displayName);
                            t.setAttribute("download", "VRChat Sales".concat(r ? " for ".concat(r) : "", " by ").concat(F.replace(/s$/, ""), " - ").concat(W.format(a), " to ").concat(Q.format(a), ".csv"));
                            var n = (null == Ne ? void 0 : Ne.breakdown) || [],
                                l = Object.keys(n[0]),
                                o = null == n ? void 0 : n.map((function(e) {
                                    return l.map((function(t) {
                                        return e[t]
                                    })).join(",")
                                }));
                            l[0] = F, o.unshift(l.join(",")), t.setAttribute("href", "data:text/csv;encoding:utf-8,".concat(encodeURIComponent(o.join("\n")))), document.body.appendChild(t), t.click(), document.body.removeChild(t)
                        }
                    }
                }, p.createElement(l.$1, {
                    icon: n.q7,
                    className: "tw-px-2"
                })))), p.createElement("span", {
                    className: "tw-text-placeholder-text tw-my-5 tw-text-base"
                }, "Time period: ", null == W ? void 0 : W.format("MMM DD"), " - ", null !== (a = c()(Q)) && void 0 !== a && a.isToday() ? "Today" : null == Q ? void 0 : Q.format("MMM DD")), Se && p.createElement(l.qX, {
                    type: "error",
                    title: "Error loading listings"
                }, null == Ye || null === (i = Ye.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message), j && p.createElement(l.qX, {
                    type: "error",
                    title: "Error loading earnings"
                }, null == I || null === (s = I.data) || void 0 === s || null === (s = s.error) || void 0 === s ? void 0 : s.message), Ge ? p.createElement(l.UU, {
                    style: {
                        minHeight: 100,
                        aspectRatio: Ue.aspectRatio.toString(10)
                    }
                }) : function() {
                    if (Te) {
                        var e = {
                            labels: Array.from({
                                length: 7
                            }, (function(e, t) {
                                return c()().subtract(6 - t, "day").format("MMM DD")
                            })),
                            datasets: Array(7).fill({})
                        };
                        return p.createElement("div", {
                            className: "tw-flex-auto tw-flex-wrap tw-flex-row tw-text-center tw-mt-5 tw-relative"
                        }, p.createElement("div", {
                            className: "tw-absolute tw-w-full tw-h-full"
                        }, p.createElement("div", {
                            className: "tw-flex tw-flex-col tw-justify-center tw-align-middle tw-items-center tw-w-full tw-h-full tw-text-light-grey"
                        }, p.createElement("span", {
                            className: "tw-mb-1 tw-font-bold"
                        }, "No Data"), p.createElement("span", null, "There's no available data in the selected date and time"))), p.createElement("div", {
                            className: "tw-flex tw-w-full tw-justify-center tw-min-h-[100px] tw-opacity-20"
                        }, p.createElement(f.x1, {
                            datasetIdKey: "_id",
                            options: {
                                responsive: !0,
                                aspectRatio: 4
                            },
                            data: e
                        })))
                    }
                    return p.createElement(f.x1, {
                        datasetIdKey: "_id",
                        options: Ue,
                        data: Oe
                    })
                }(), "weeks" === F && p.createElement(l.qX, {
                    type: "dark",
                    slim: !0,
                    className: "mb-0"
                }, "Weekly data is tabulated using ISO weeks, which always begin on a Monday and end on a Sunday. The first and last ISO weeks can overlap into the previous or next calendar year, respectively. More information about ISO weeks can be found", " ", p.createElement("a", {
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
//# sourceMappingURL=4ca839d84843c0a2275702ebec0a6de19bb3901613a7a96f238a01d2202e9079.js.map