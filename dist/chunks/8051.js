"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8051], {
        71560: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => oe
            });
            var r = a(45987),
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
                h = a(22202),
                g = a(66736),
                v = a(16869),
                y = a(67978),
                E = a(95896),
                N = a(4942),
                k = a(15861),
                D = a(4965),
                M = a(64687),
                S = a.n(M),
                C = a(6655),
                P = a(64358),
                O = a(89250),
                Y = a(56646),
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
                        icon: Y.faCircleInfo
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

            function G(e) {
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
            const A = function() {
                var e, t, a = (0, h.IB)().data,
                    r = null == a ? void 0 : a.id,
                    n = (0, O.s0)(),
                    i = (0, C.gI)(),
                    s = (0, l.Z)(i, 1)[0],
                    c = (0, O.oQ)("/home/marketplace/storefront/payout"),
                    u = (0, C.v$)({
                        userId: r
                    }, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }).data,
                    w = (0, g.B3)({
                        sellerId: r,
                        groupByDuration: "years",
                        metricDateStart: E.pH,
                        metricDateEnd: "2511-03-07"
                    }, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    m = w.data,
                    d = w.isLoading,
                    p = w.isError,
                    x = w.error,
                    b = (0, C.pp)({
                        userId: r,
                        type: "earnings"
                    }, {
                        skip: !r,
                        refetchOnMountOrArgChange: !0
                    }),
                    v = b.data,
                    y = (void 0 === v ? {
                        balance: 0
                    } : v).balance,
                    N = (b.IsFetching, f.useMemo((function() {
                        var e = 0,
                            t = 0;
                        return null == m || m.forEach((function(a) {
                            var r = a.numPurchases,
                                l = a.totalPurchasePrice;
                            e += r, t += l
                        })), {
                            allTimeNumPurchases: e,
                            allTimeTotalPurchasePrice: t
                        }
                    }), [m])),
                    D = N.allTimeNumPurchases,
                    M = N.allTimeTotalPurchasePrice,
                    Y = null == u ? void 0 : u.signed_tos,
                    j = (0, f.useMemo)((function() {
                        return Y ? y < E.vC ? "You must have at least ".concat(E.vC.toLocaleString(), " credits available to pay out.") : "Pay Out Now" : "Tilia's Terms of Service may have changed. You'll need to accept their updated Terms of Service before you pay out."
                    }), [u, y]);
                return f.createElement(f.Fragment, null, p && f.createElement(o.qX, {
                    type: "error",
                    title: "Error loading statistics"
                }, null == x || null === (e = x.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message), f.createElement("div", {
                    className: "tw-flex tw-w-full tw-gap-3 tw-my-4 tw-flex-col sm:tw-flex-row"
                }, d ? f.createElement(f.Fragment, null, f.createElement(B, null), f.createElement(B, {
                    delay: 100
                })) : f.createElement(f.Fragment, null, f.createElement(Z, {
                    title: "Available Payout",
                    credits: Number(y) || 0,
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
                                        return e.next = 2, s(G(G({}, P.$Z.PAYOUT), {}, {
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
                        isDisabled: y < E.vC || !Y,
                        title: j
                    }
                }), f.createElement(Z, {
                    title: "Total Sales",
                    hideGlyph: !0,
                    credits: Number(D || 0),
                    cta: {
                        text: "View Details",
                        onClickCallback: function() {
                            n("/home/marketplace/storefront/revenue/mysales")
                        },
                        isDisabled: !1
                    }
                }), f.createElement(Z, {
                    title: "Total Earned",
                    credits: Number(M || 0),
                    cta: {
                        text: "View Details",
                        onClickCallback: function() {
                            n("/home/marketplace/storefront/revenue/mysales")
                        },
                        isDisabled: !1
                    }
                }))))
            };
            var B = (0, D.Z)(o.UU, {
                    target: "e129v97h1"
                })({
                    name: "rdii6n",
                    styles: "flex:1 1 240px;min-height:148px;margin:0.5rem;border-radius:8px"
                }),
                R = a(87709),
                U = a(86646),
                F = a(68055),
                q = function(e) {
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
                        }, n ? f.createElement(U.Z, {
                            icon: F.LE,
                            "aria-label": "Done"
                        }) : e.number))), f.createElement("div", {
                            className: "tw-text-sm tw-text-center tw-w-[130px] tw--ml-[44px] tw-mt-2 ".concat(o ? "tw-text-white tw-font-bold" : "tw-text-light-grey")
                        }, e.label))
                    })))
                };
            q.propTypes = {
                steps: T().arrayOf(T().shape({
                    number: T().number.isRequired,
                    label: T().string.isRequired,
                    isHiddenStep: T().bool
                })).isRequired,
                currentStepNumber: T().number.isRequired
            };
            const H = q;
            var _ = a(15832),
                W = a(79655),
                X = a(34698);
            const $ = a.p + "7cad9f1f8b11b4060d8dcf99c259d4474a6740e249c0f7346db2d09929ae3220.png",
                z = a.p + "48d4f7e7b13c122dd05368c83fe31445acd702f869a8fe12dddd798405348751.png",
                V = a.p + "c1becf4493c453ba551cea61c7053848eddec27fc172c89ceaceda8fa728f450.png",
                K = a.p + "7ef55804fb1330c747702ccf55ff39625cfe41dadd0efa98f2c77777db069eab.png";
            var Q = function(e) {
                var t, a = e.currentStepNumber,
                    r = (0, _._)("myStoreTutorialDismissed", !1),
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
                                src: z,
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
                                src: V,
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
                                src: K,
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
                }, f.createElement(H, {
                    steps: s,
                    currentStepNumber: a
                })), f.createElement("div", null, f.createElement("button", {
                    type: "button",
                    onClick: function() {
                        i(!0)
                    },
                    className: "tw-bg-transparent tw-border-none tw-cursor-pointer"
                }, f.createElement(U.Z, {
                    icon: R.faXmark
                })))), f.createElement("div", {
                    className: "tw-mt-4 tw-mb-2 tw-flex tw-justify-center tw-ml-[44px] @[900px]/tutorial:tw-hidden"
                }, f.createElement(H, {
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
            var ee = ["_id"];
            u().extend(m()), s.kL.register(s.uw, s.f$, s.FB, s.od, s.jn, s.u, s.Gu), s.kL.defaults.color = "#737372", s.kL.defaults.borderColor = "rgba(127, 127, 127, 0.1)";
            var te = {
                    numPurchases: "Total Sales",
                    totalPurchasePrice: "Total Earnings"
                },
                ae = [{
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
                re = [{
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
                le = function(e) {
                    return "weeks" === e ? "isoweek" : e
                },
                ne = function(e) {
                    var t = p().duration(e);
                    if (t.asDays() < 1) throw new RangeError("computeValuesForDurationTemplate: durationTemplate ".concat(e, " resulted in an invalid duration"));
                    var a = function(e) {
                            if (!p().isDuration(e)) throw new TypeError("duration ".concat(e, " is not a valid duration object"));
                            return e.asMonths() > 11 ? "months" : e.asMonths() > 2 ? "weeks" : "days"
                        }(t),
                        r = le(a),
                        l = p()(),
                        n = l.clone().endOf(r);
                    return {
                        groupByDuration: a,
                        metricDateStart: l.clone().add(1, r).startOf(r).subtract(t),
                        metricDateEnd: n
                    }
                };
            const oe = function() {
                var e, t, a, s, c = (0, h.IB)().data,
                    w = null == c ? void 0 : c.id,
                    m = f.useState("numPurchases"),
                    d = (0, l.Z)(m, 2),
                    N = d[0],
                    k = d[1],
                    D = f.useState(ae[0].value),
                    M = (0, l.Z)(D, 2),
                    S = M[0],
                    C = M[1],
                    P = (0, g.B3)({
                        sellerId: w,
                        groupByDuration: "years",
                        metricDateStart: E.pH,
                        metricDateEnd: "2511-03-07"
                    }, {
                        skip: !w,
                        refetchOnMountOrArgChange: !0
                    }),
                    O = P.data,
                    Y = P.isLoading,
                    j = (P.isError, P.error, f.useMemo((function() {
                        var e = 0;
                        return null == O || O.forEach((function(t) {
                            var a = t.numPurchases;
                            e += a
                        })), e
                    }), [O])),
                    T = f.useMemo((function() {
                        return ne(S)
                    }), []),
                    I = T.groupByDuration,
                    Z = T.metricDateStart,
                    L = T.metricDateEnd,
                    G = f.useState(I),
                    B = (0, l.Z)(G, 2),
                    R = B[0],
                    U = B[1],
                    F = f.useState(Z),
                    q = (0, l.Z)(F, 2),
                    H = q[0],
                    _ = q[1],
                    W = (0, b.Nr)(H),
                    X = f.useState(L),
                    $ = (0, l.Z)(X, 2),
                    z = $[0],
                    V = $[1],
                    K = (0, b.Nr)(z),
                    Q = f.useState(!1),
                    oe = (0, l.Z)(Q, 2),
                    ie = oe[0],
                    se = oe[1],
                    ce = f.useState(),
                    ue = (0, l.Z)(ce, 2),
                    we = ue[0],
                    me = ue[1],
                    de = f.useMemo((function() {
                        return [p().isMoment(H) && H.isAfter(E.pH) && H.isBefore(z || p()().add(2, "y")), p().isMoment(z) && z.isAfter(H || E.pH) && z.isBefore(p()().add(2, "y"))]
                    }), [H, z]),
                    pe = (0, l.Z)(de, 2),
                    fe = pe[0],
                    xe = pe[1];
                f.useEffect((function() {
                    if (S) {
                        var e = ne(S),
                            t = e.groupByDuration,
                            a = e.metricDateStart,
                            r = e.metricDateEnd;
                        U(t), _(a), V(r)
                    }
                }), [S]);
                var be, he, ge = (0, g.B3)({
                        sellerId: w,
                        groupByDuration: R,
                        metricDateStart: null == W ? void 0 : W.toISOString(),
                        metricDateEnd: null == K ? void 0 : K.toISOString(),
                        listingIds: we ? [we] : we
                    }, {
                        skip: !(w && W && K && fe && xe),
                        refetchOnMountOrArgChange: !0
                    }),
                    ve = ge.data,
                    ye = ge.isFetching,
                    Ee = ge.isError,
                    Ne = ge.error,
                    ke = f.useMemo((function() {
                        var e = [],
                            t = {};
                        return null == ve || ve.forEach((function(a) {
                            var l = a._id,
                                n = (0, r.Z)(a, ee);
                            e.push(l), t[N] || (t[N] = {
                                yAxisId: N,
                                label: te[N] || N,
                                data: [],
                                backgroundColor: "#064b5c",
                                borderColor: "#086c84"
                            }), t[N].data.push(n[N])
                        })), {
                            labels: e,
                            datasets: Object.values(t)
                        }
                    }), [ve, N]),
                    De = function() {
                        ie || se(!0)
                    },
                    Me = (0, v.Ul)({
                        userId: w,
                        hydrate: !0
                    }),
                    Se = Me.data,
                    Ce = void 0 === Se ? [] : Se,
                    Pe = Me.isLoading,
                    Oe = Me.isError,
                    Ye = Me.isSuccess,
                    je = Me.error,
                    Te = f.useMemo((function() {
                        var e = [{
                            label: "All"
                        }];
                        return Pe ? e.push({
                            label: "Loading…"
                        }) : Ce.forEach((function(t) {
                            var a = t.id,
                                r = t.displayName;
                            e.push({
                                label: r,
                                value: a
                            })
                        })), e
                    }), [Ce, Pe]),
                    Ie = (0, y.rP)({
                        userId: w
                    }, {
                        skip: !w
                    }),
                    Ze = Ie.data,
                    Le = Ie.isFetching,
                    Ge = Ie.isSuccess,
                    Ae = ye || H !== W || z !== K || Y || Le,
                    Be = !(null != ke && null !== (e = ke.datasets) && void 0 !== e && e.length),
                    Re = f.useMemo((function() {
                        switch (R) {
                            case "years":
                                return "YYYY";
                            case "months":
                                return "MMM YYYY";
                            case "weeks":
                                return "[Week] ww, GGGG";
                            default:
                                return "MMM DD, YYYY"
                        }
                    }), [R]),
                    Ue = f.useMemo((function() {
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
                                        unit: null == R ? void 0 : R.replace(/s$/, ""),
                                        tooltipFormat: Re,
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
                    }), [N, R, Re]);
                return f.createElement(f.Fragment, null, f.createElement(J, {
                    currentStepNumber: (be = 0 === (null == Ze ? void 0 : Ze.length) && Ge, he = !Ce.some((function(e) {
                        return !0 === e.active
                    })) && Ye, be ? 1 : he ? 2 : 0 === j ? 3 : 4)
                }), f.createElement(A, null), f.createElement(o.X2, {
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
                    selected: N,
                    onChange: k,
                    tabs: Object.entries(te).map((function(e) {
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
                    onChange: C,
                    value: S,
                    options: ae,
                    className: "tw-mr-2"
                }), f.createElement(o.Lt, {
                    label: "Group By",
                    onChange: U,
                    value: R,
                    options: re,
                    className: "tw-mr-2"
                }), !S && f.createElement("div", {
                    className: "d-flex align-items-center flex-wrap"
                }, f.createElement(o.II, {
                    type: "date",
                    className: "tw-mr-1",
                    disabled: !!S,
                    invalid: fe,
                    value: null == H ? void 0 : H.format("YYYY-MM-DD"),
                    onChange: function(e) {
                        var t = p()(e.target.value).startOf(le(R));
                        _(t)
                    },
                    min: E.pH,
                    max: null == z ? void 0 : z.format("YYYY-MM-DD")
                }), " to ", f.createElement(o.II, {
                    type: "date",
                    className: "tw-ml-1",
                    disabled: !!S,
                    invalid: xe,
                    value: null == z ? void 0 : z.format("YYYY-MM-DD"),
                    onChange: function(e) {
                        var t = p()(e.target.value).endOf(le(R));
                        V(t)
                    },
                    min: (null == H ? void 0 : H.format("YYYY-MM-DD")) || E.pH,
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
                    onChange: me,
                    onMouseEnter: De,
                    onClick: De,
                    className: "tw-mr-2",
                    value: we,
                    options: Te
                }), f.createElement(o.zx, {
                    disabled: !w || we && (Pe || Oe) || !H || !z || !fe || !xe || Be,
                    onClick: function() {
                        var e;
                        if (!we || !Pe && !Oe && null != ve && ve.length) {
                            var t = document.createElement("a");
                            t.style.display = "none";
                            var a = "weeks" === R ? "GGGG-[W]ww" : "YYYY-MM-DD",
                                r = we && (null == Ce || null === (e = Ce.find((function(e) {
                                    return e.id === we
                                }))) || void 0 === e ? void 0 : e.displayName);
                            t.setAttribute("download", "VRChat Sales".concat(r ? " for ".concat(r) : "", " by ").concat(R.replace(/s$/, ""), " - ").concat(H.format(a), " to ").concat(z.format(a), ".csv"));
                            var l = Object.keys(ve[0]),
                                n = null == ve ? void 0 : ve.map((function(e) {
                                    return l.map((function(t) {
                                        return e[t]
                                    })).join(",")
                                }));
                            l[0] = R, n.unshift(l.join(",")), t.setAttribute("href", "data:text/csv;encoding:utf-8,".concat(encodeURIComponent(n.join("\n")))), document.body.appendChild(t), t.click(), document.body.removeChild(t)
                        }
                    }
                }, f.createElement(o.$1, {
                    icon: n.q7,
                    className: "tw-px-2"
                })))), f.createElement("span", {
                    className: "tw-text-placeholder-text tw-my-5 tw-text-base"
                }, "Time period: ", null == H ? void 0 : H.format("MMM DD"), " - ", null !== (t = u()(z)) && void 0 !== t && t.isToday() ? "Today" : null == z ? void 0 : z.format("MMM DD")), Ee && f.createElement(o.qX, {
                    type: "error",
                    title: "Error loading data"
                }, null == Ne || null === (a = Ne.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message), Oe && f.createElement(o.qX, {
                    type: "error",
                    title: "Error loading listings"
                }, null == je || null === (s = je.data) || void 0 === s || null === (s = s.error) || void 0 === s ? void 0 : s.message), Ae ? f.createElement(o.UU, {
                    style: {
                        minHeight: 100,
                        aspectRatio: Ue.aspectRatio.toString(10)
                    }
                }) : function() {
                    if (Be && j > 0) {
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
                        options: Ue,
                        data: ke
                    })
                }(), "weeks" === R && f.createElement(o.qX, {
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
//# sourceMappingURL=440cd17e99cb434247de559cac314c7593165d987c8c411350dc7e1e52938a9e.js.map