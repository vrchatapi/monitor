(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6775], {
        76775: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => Ye
            });
            var a = r(54546),
                n = r(40767),
                l = r(96985),
                o = r(72998),
                i = r(529),
                s = (r(86961), r(27484)),
                c = r.n(s),
                u = r(7124),
                w = r.n(u),
                m = r(30381),
                d = r.n(m),
                p = r(67294),
                f = r(26495),
                b = r(95168),
                x = r(95896),
                h = r(22202),
                g = r(66736),
                v = r(16869),
                y = r(67978),
                E = r(4942),
                N = r(37412),
                k = r.n(N),
                Y = r(59542),
                D = r.n(Y),
                P = r(55183),
                M = r.n(P);

            function S(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(r), !0).forEach((function(t) {
                        (0, E.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            c().extend(k()), c().extend(D()), c().extend(M());
            var C = {
                    years: {
                        unit: "year",
                        format: "YYYY"
                    },
                    months: {
                        unit: "month",
                        format: "YYYY-MM"
                    },
                    weeks: {
                        unit: "week",
                        format: "GGGG-[W]WW"
                    },
                    days: {
                        unit: "day",
                        format: "YYYY-MM-DD"
                    }
                },
                j = {
                    numPurchases: "Total Sales",
                    totalPurchasePrice: "Total Earnings"
                },
                T = {
                    backgroundColor: "#064b5c",
                    borderColor: "#086c84"
                },
                I = {
                    otpPurchaseCount: 0,
                    subscriberMonths: 0,
                    totalEarnings: 0
                },
                Z = function(e, t, r) {
                    var a = c()(e),
                        n = c()(t),
                        l = C[r] || C.days,
                        o = n.diff(a, l.unit) + 1;
                    return Array.from({
                        length: o
                    }, (function(e, t) {
                        return function(e, t) {
                            var r;
                            if ("weeks" === t) {
                                var a = e.isoWeekYear(),
                                    n = e.isoWeek();
                                return "".concat(a, "-W").concat(n.toString().padStart(2, "0"))
                            }
                            return e.format((null === (r = C[t]) || void 0 === r ? void 0 : r.format) || C.days.format)
                        }(a.add(t, l.unit), r)
                    }))
                },
                G = function(e, t) {
                    var r = function(e) {
                        var t = new Map;
                        return e.forEach((function(e) {
                            t.set(e._id, e)
                        })), t
                    }(e);
                    return t.map((function(e) {
                        return function(e, t) {
                            return O({
                                _id: e
                            }, Object.fromEntries(Object.entries(I).map((function(e) {
                                var r, n = (0, a.Z)(e, 2),
                                    l = n[0],
                                    o = n[1];
                                return [l, null !== (r = null == t ? void 0 : t[l]) && void 0 !== r ? r : o]
                            }))))
                        }(e, r.get(e))
                    }))
                },
                L = function(e) {
                    if (e.includes("-W")) {
                        var t = e.split("-W"),
                            r = (0, a.Z)(t, 2),
                            n = r[0],
                            l = r[1];
                        return c()().startOf("year").year(Number.parseInt(n)).isoWeek(Number.parseInt(l))
                    }
                    return e.match(/^\d{4}-\d{2}$/) ? c()(e, "YYYY-MM") : e.match(/^\d{4}$/) ? c()(e, "YYYY") : c()(e)
                },
                B = function(e, t) {
                    var r = L(e._id);
                    return L(t._id).isAfter(r) ? 1 : -1
                },
                R = function(e, t) {
                    return e.reduce((function(e, r) {
                        var a = r._id;
                        e.labels.push(a), e.datasets[t] || (e.datasets[t] = function(e) {
                            return O({
                                yAxisId: e,
                                label: j[e] || e,
                                data: []
                            }, T)
                        }(t));
                        var n = function(e, t) {
                            var r = e.otpPurchaseCount,
                                a = void 0 === r ? 0 : r,
                                n = e.subscriberMonths,
                                l = void 0 === n ? 0 : n,
                                o = e.totalEarnings;
                            return "numPurchases" === t ? a + l : void 0 === o ? 0 : o
                        }(r, t);
                        return e.datasets[t].data.push(n), e
                    }), {
                        labels: [],
                        datasets: {}
                    })
                },
                A = r(15861),
                W = r(4965),
                U = r(64687),
                _ = r.n(U),
                F = r(6655),
                q = r(64358),
                H = r(89250),
                K = r(56646),
                $ = r(45697),
                X = r.n($),
                z = function(e) {
                    var t = e.title,
                        r = e.credits,
                        a = void 0 === r ? null : r,
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
                        h = null === a || 0 === a;
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
                    }), a.toLocaleString()), p.createElement("div", {
                        className: " tw-justify-between tw-flex tw-flex-col @[300px]/marketplacePanel:tw-flex-row @[300px]/marketplacePanel:tw-items-end  "
                    }, p.createElement(l.zx, {
                        className: "tw-px-[10px] tw-py-[7px] tw-mb-2 @[300px]/marketplacePanel:tw-mb-0",
                        disabled: null == s ? void 0 : s.isDisabled,
                        onClick: null == s ? void 0 : s.onClickCallback,
                        title: null == s ? void 0 : s.title
                    }, s.text), null !== o && p.createElement("span", null, p.createElement(l.$1, {
                        icon: K.faCircleInfo
                    }), p.createElement("a", {
                        href: null == o ? void 0 : o.href,
                        className: "tw-text-sm tw-underline tw-font-thin tw-ml-1 tw-text-subtext-grey",
                        referrerPolicy: "no-referrer"
                    }, null == o ? void 0 : o.text))))
                };
            z.propTypes = {
                title: X().string.isRequired,
                credits: X().number,
                link: X().shape({
                    href: X().string,
                    text: X().string
                }),
                cta: X().shape({
                    text: X().string,
                    onClickCallback: X().func,
                    isDisabled: X().bool
                }),
                hideGlyph: X().bool,
                customNoCreditsText: X().string
            };
            const V = z;

            function Q(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function J(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Q(Object(r), !0).forEach((function(t) {
                        (0, E.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Q(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const ee = function() {
                var e, t, r = (0, h.IB)().data,
                    n = null == r ? void 0 : r.id,
                    o = (0, H.s0)(),
                    i = (0, F.gI)(),
                    s = (0, a.Z)(i, 1)[0],
                    c = (0, H.oQ)("/home/marketplace/storefront/payout"),
                    u = (0, F.kN)({}, {
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
                    Y = k.data,
                    D = void 0 === Y ? {
                        totals: {
                            totalEarnings: 0,
                            otpPurchaseCount: 0,
                            subscriberMonths: 0
                        }
                    } : Y,
                    P = k.isFetching,
                    M = k.isError,
                    S = k.error,
                    O = (0, F.pp)({
                        userId: n,
                        type: "earnings"
                    }, {
                        skip: !n,
                        refetchOnMountOrArgChange: !0
                    }).data,
                    C = (void 0 === O ? {
                        balance: 0
                    } : O).balance,
                    j = p.useMemo((function() {
                        var e, t, r;
                        return {
                            allTimeNumPurchases: Number(null == D || null === (e = D.totals) || void 0 === e ? void 0 : e.otpPurchaseCount) + Number(null == D || null === (t = D.totals) || void 0 === t ? void 0 : t.subscriberMonths),
                            allTimeTotalPurchasePrice: null == D || null === (r = D.totals) || void 0 === r ? void 0 : r.totalEarnings
                        }
                    }), [D]),
                    T = j.allTimeNumPurchases,
                    I = j.allTimeTotalPurchasePrice,
                    Z = (0, p.useMemo)((function() {
                        return m ? "Error fetching payout eligibility, please try again later." : v ? "Tilia's Terms of Service may have changed. You'll need to accept their updated Terms of Service before you pay out." : C < x.vC ? "You must have at least ".concat(x.vC.toLocaleString(), " credits available to pay out.") : f ? "Tilia Terms of Service have been updated. You must accept the updated Terms of Service before you can pay out." : b ? "Your account has been blocked by Tilia. Please contact support for assistance." : y ? "Your KYC verification is pending. Please complete the KYC process before you can pay out." : E ? "You must complete KYC verification before you can pay out." : N ? "You are currently in a payout cooldown period. Please wait before attempting to pay out again." : "You are eligible to pay out. Click to proceed."
                    }), [C, w, m]);
                return p.createElement(p.Fragment, null, M && p.createElement(l.qX, {
                    type: "error",
                    title: "Error loading statistics"
                }, "Failed to fetch earnings: ", null == S || null === (e = S.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message), p.createElement("div", {
                    className: "tw-flex tw-w-full tw-gap-3 tw-my-4 tw-flex-col sm:tw-flex-row"
                }, P ? p.createElement(p.Fragment, null, p.createElement(te, null), p.createElement(te, {
                    delay: 100
                })) : p.createElement(p.Fragment, null, p.createElement(V, {
                    title: "Available Payout",
                    credits: Number(C) || 0,
                    link: {
                        text: "About Payout",
                        href: "https://www.tilia.io/legal/terms-of-service"
                    },
                    cta: {
                        text: "Payout",
                        onClickCallback: (t = (0, A.Z)(_().mark((function e() {
                            var t, a;
                            return _().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, s(J(J({}, q.$Z.PAYOUT), {}, {
                                            userId: r.id,
                                            returnUrl: new URL(c, window.location.href)
                                        })).unwrap();
                                    case 2:
                                        t = e.sent, a = t.redirect, window.location.assign(a);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function() {
                            return t.apply(this, arguments)
                        }),
                        isDisabled: C < x.vC || !d,
                        title: Z
                    }
                }), p.createElement(V, {
                    title: "Total Sales",
                    hideGlyph: !0,
                    credits: Number(T || 0),
                    cta: {
                        text: "View Details",
                        onClickCallback: function() {
                            o("/home/marketplace/storefront/revenue/mysales")
                        },
                        isDisabled: !1
                    }
                }), p.createElement(V, {
                    title: "Total Earned",
                    credits: Number(I || 0),
                    cta: {
                        text: "View Details",
                        onClickCallback: function() {
                            o("/home/marketplace/storefront/revenue/mysales")
                        },
                        isDisabled: !1
                    }
                }))))
            };
            var te = (0, W.Z)(l.UU, {
                    target: "e129v97h1"
                })({
                    name: "rdii6n",
                    styles: "flex:1 1 240px;min-height:148px;margin:0.5rem;border-radius:8px"
                }),
                re = r(87709),
                ae = r(86646),
                ne = r(68055),
                le = function(e) {
                    var t = e.steps,
                        r = e.currentStepNumber,
                        a = t.filter((function(e) {
                            return e.isHiddenStep
                        }));
                    return p.createElement("ol", {
                        className: "tw-max-w-[650px] tw-flex tw-justify-between tw-items-start tw-pl-[0px] xs:tw-pl-[44px]"
                    }, t.map((function(e, n) {
                        var l = Number(r) > Number(e.number),
                            o = Number(r) === Number(e.number),
                            i = n === t.length - (a.length + 1);
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
                        }, l ? p.createElement(ae.Z, {
                            icon: ne.LE,
                            "aria-label": "Done"
                        }) : e.number))), p.createElement("div", {
                            className: "tw-text-sm tw-text-center tw-w-[130px] tw--ml-[44px] tw-mt-2 ".concat(o ? "tw-text-white tw-font-bold" : "tw-text-light-grey")
                        }, e.label))
                    })))
                };
            le.propTypes = {
                steps: X().arrayOf(X().shape({
                    number: X().number.isRequired,
                    label: X().string.isRequired,
                    isHiddenStep: X().bool
                })).isRequired,
                currentStepNumber: X().number.isRequired
            };
            const oe = le;
            var ie = r(15832),
                se = r(79655),
                ce = r(34698),
                ue = r(59128),
                we = r.n(ue),
                me = r(259),
                de = r.n(me),
                pe = r(9468),
                fe = r.n(pe),
                be = r(83555),
                xe = r.n(be),
                he = function(e) {
                    var t, r = e.currentStepNumber,
                        n = (0, ie._)("myStoreTutorialDismissed", !1),
                        l = (0, a.Z)(n, 2),
                        o = l[0],
                        i = l[1],
                        s = [{
                            number: 1,
                            label: "Create a Product or subscription",
                            content: function() {
                                return p.createElement("div", {
                                    className: "tw-flex tw-flex-col tw-justify-between @[700px]/tutorial:tw-flex-row tw-pt-0 @[700px]/tutorial:tw-px-12 @[700px]/tutorial:tw-py-9"
                                }, p.createElement("img", {
                                    src: de(),
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
                                }, p.createElement(se.rU, {
                                    to: "/home/marketplace/storefront/products"
                                }, p.createElement(ce.Z, {
                                    className: "tw-mt-4 tw-h-10 tw-bg-button-bg tw-text-highlight tw-leading-none tw-border-transparent hover:tw-border-highlight"
                                }, "Create Product")), p.createElement(se.rU, {
                                    to: "/home/marketplace/storefront/subscriptions"
                                }, p.createElement(ce.Z, {
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
                                    src: fe(),
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
                                }, p.createElement(se.rU, {
                                    to: "/home/marketplace/storefront/stores"
                                }, p.createElement(ce.Z, {
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
                                    src: xe(),
                                    alt: "",
                                    className: " tw-rounded-lg tw-max-w-full tw-object-cover @[700px]/tutorial:tw-max-w-[240px]  @[790px]/tutorial:tw-max-w-[300px] @[905px]/tutorial:tw-max-w-[350px] @[955px]/tutorial:tw-max-w-[400px] @[1160px]/tutorial:tw-max-w-[500px]"
                                }), p.createElement("div", {
                                    className: " tw-flex tw-flex-col tw-max-w-full tw-ml-0 @[700px]/tutorial:tw-max-w-full @[700px]/tutorial:tw-ml-4 "
                                }, p.createElement("h4", {
                                    className: "tw-text-white tw-font-bold tw-text-lg tw-mt-4"
                                }, "You are all set to start selling!"), p.createElement("p", {
                                    className: "tw-text-light-grey tw-text-sm tw-mt-2"
                                }, "The final step to greatness. Share your store, promote your work, and make your first sale! You can track all your sales and subscribers on the", " ", p.createElement(se.rU, {
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
                                    src: we(),
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
                                }, p.createElement(ce.Z, {
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
                    }, p.createElement(oe, {
                        steps: s,
                        currentStepNumber: r
                    })), p.createElement("div", null, p.createElement("button", {
                        type: "button",
                        onClick: function() {
                            i(!0)
                        },
                        className: "tw-bg-transparent tw-border-none tw-cursor-pointer"
                    }, p.createElement(ae.Z, {
                        icon: re.faXmark
                    })))), p.createElement("div", {
                        className: "tw-mt-4 tw-mb-2 tw-flex tw-justify-center tw-ml-[44px] @[900px]/tutorial:tw-hidden"
                    }, p.createElement(oe, {
                        steps: s,
                        currentStepNumber: r
                    })), null === (t = s.find((function(e) {
                        return e.number === r
                    }))) || void 0 === t ? void 0 : t.content())
                };
            he.propTypes = {
                currentStepNumber: X().number.isRequired
            };
            const ge = he;
            c().extend(w()), i.kL.register(i.uw, i.f$, i.FB, i.od, i.jn, i.u, i.Gu), i.kL.defaults.color = "#737372", i.kL.defaults.borderColor = "rgba(127, 127, 127, 0.1)";
            var ve = {
                    numPurchases: "Total Sales",
                    totalPurchasePrice: "Total Earnings"
                },
                ye = [{
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
                Ee = [{
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
                Ne = function(e) {
                    return "weeks" === e ? "isoweek" : e
                },
                ke = function(e) {
                    var t = d().duration(e);
                    if (t.asDays() < 1) throw new RangeError("computeValuesForDurationTemplate: durationTemplate ".concat(e, " resulted in an invalid duration"));
                    var r = function(e) {
                            if (!d().isDuration(e)) throw new TypeError("duration ".concat(e, " is not a valid duration object"));
                            return e.asMonths() > 11 ? "months" : e.asMonths() > 2 ? "weeks" : "days"
                        }(t),
                        a = Ne(r),
                        n = d()(),
                        l = n.clone().endOf(a);
                    return {
                        groupByDuration: r,
                        metricDateStart: n.clone().add(1, a).startOf(a).subtract(t),
                        metricDateEnd: l
                    }
                };
            const Ye = function() {
                var e, t, r, i, s, u = (0, h.IB)().data,
                    w = null == u ? void 0 : u.id,
                    m = p.useState("numPurchases"),
                    E = (0, a.Z)(m, 2),
                    N = E[0],
                    k = E[1],
                    Y = p.useState(ye[0].value),
                    D = (0, a.Z)(Y, 2),
                    P = D[0],
                    M = D[1],
                    S = (0, g.uK)({
                        sellerId: w,
                        groupByDuration: "years",
                        metricDateStart: x.pH,
                        metricDateEnd: "2511-03-07"
                    }, {
                        skip: !w
                    }),
                    O = S.data,
                    C = void 0 === O ? {
                        totals: {
                            totalEarnings: 0,
                            otpPurchaseCount: 0,
                            subscriberMonths: 0
                        }
                    } : O,
                    j = S.isFetching,
                    T = S.isError,
                    I = S.error,
                    L = p.useMemo((function() {
                        return 0 === C.totals.totalEarnings
                    }), [C]),
                    A = p.useMemo((function() {
                        return ke(P)
                    }), []),
                    W = A.groupByDuration,
                    U = A.metricDateStart,
                    _ = A.metricDateEnd,
                    F = p.useState(W),
                    q = (0, a.Z)(F, 2),
                    H = q[0],
                    K = q[1],
                    $ = p.useState(U),
                    X = (0, a.Z)($, 2),
                    z = X[0],
                    V = X[1],
                    Q = (0, b.Nr)(z),
                    J = p.useState(_),
                    te = (0, a.Z)(J, 2),
                    re = te[0],
                    ae = te[1],
                    ne = (0, b.Nr)(re),
                    le = p.useState(!1),
                    oe = (0, a.Z)(le, 2),
                    ie = oe[0],
                    se = oe[1],
                    ce = p.useState(),
                    ue = (0, a.Z)(ce, 2),
                    we = ue[0],
                    me = ue[1],
                    de = p.useMemo((function() {
                        return [d().isMoment(z) && z.isAfter(x.pH) && z.isBefore(re || d()().add(2, "y")), d().isMoment(re) && re.isAfter(z || x.pH) && re.isBefore(d()().add(2, "y"))]
                    }), [z, re]),
                    pe = (0, a.Z)(de, 2),
                    fe = pe[0],
                    be = pe[1];
                p.useEffect((function() {
                    if (P) {
                        var e = ke(P),
                            t = e.groupByDuration,
                            r = e.metricDateStart,
                            a = e.metricDateEnd;
                        K(t), V(r), ae(a)
                    }
                }), [P]);
                var xe, he, Ye = (0, g.uK)({
                        sellerId: w,
                        groupByDuration: H,
                        metricDateStart: null == Q ? void 0 : Q.toISOString(),
                        metricDateEnd: null == ne ? void 0 : ne.toISOString(),
                        listingIds: we ? [we] : we
                    }, {
                        skip: !(w && Q && ne && fe && be)
                    }),
                    De = Ye.data,
                    Pe = void 0 === De ? {
                        totals: {
                            totalEarnings: 0,
                            otpPurchaseCount: 0,
                            subscriberMonths: 0
                        }
                    } : De,
                    Me = (Ye.isFetching, Ye.isError, Ye.error, (0, v.Ul)({
                        userId: w,
                        hydrate: !0
                    })),
                    Se = Me.data,
                    Oe = void 0 === Se ? [] : Se,
                    Ce = Me.isLoading,
                    je = Me.isError,
                    Te = Me.isSuccess,
                    Ie = Me.error,
                    Ze = p.useMemo((function() {
                        var e;
                        if (null == Pe || null === (e = Pe.breakdown) || void 0 === e || !e.length || !z || !re) return {
                            labels: [],
                            datasets: []
                        };
                        var t = Z(z, re, H);
                        return function(e, t) {
                            var r = e.sort(B),
                                a = R(r, t),
                                n = a.labels,
                                l = a.datasets;
                            return {
                                labels: n,
                                datasets: Object.values(l)
                            }
                        }(G(Pe.breakdown, t), N)
                    }), [Pe, N, z, re, H]),
                    Ge = !(null != Ze && null !== (e = Ze.datasets) && void 0 !== e && e.length),
                    Le = function() {
                        ie || se(!0)
                    },
                    Be = p.useMemo((function() {
                        var e = [{
                            label: "All"
                        }];
                        return Ce ? e.push({
                            label: "Loading…"
                        }) : Oe.forEach((function(t) {
                            var r = t.id,
                                a = t.displayName;
                            e.push({
                                label: a,
                                value: r
                            })
                        })), e
                    }), [Oe, Ce]),
                    Re = (0, y.rP)({
                        userId: w
                    }, {
                        skip: !w
                    }),
                    Ae = Re.data,
                    We = Re.isFetching,
                    Ue = Re.isSuccess,
                    _e = j || z !== Q || re !== ne || We,
                    Fe = p.useMemo((function() {
                        switch (H) {
                            case "years":
                                return "YYYY";
                            case "months":
                                return "MMM YYYY";
                            case "weeks":
                                return "[Week] ww, GGGG";
                            default:
                                return "MMM DD, YYYY"
                        }
                    }), [H]),
                    qe = p.useMemo((function() {
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
                                            var r = t.dataset,
                                                a = t.parsed;
                                            return (r.label ? "".concat(r.label, ": ") : "") + e(a.y)
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
                                        unit: null == H ? void 0 : H.replace(/s$/, ""),
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
                                        callback: "totalPurchasePrice" === N ? e : void 0
                                    }
                                }
                            }
                        }
                    }), [N, H, Fe]),
                    He = !w || we && (Ce || je) || !z || !re || !fe || !be || !(null != Pe && null !== (t = Pe.breakdown) && void 0 !== t && t.length) || Ge;
                return p.createElement(p.Fragment, null, p.createElement(ge, {
                    currentStepNumber: (xe = 0 === (null == Ae ? void 0 : Ae.length) && Ue, he = !Oe.some((function(e) {
                        return !0 === e.active
                    })) && Te, xe ? 1 : he ? 2 : L ? 3 : 4)
                }), p.createElement(ee, null), p.createElement(l.X2, {
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
                    tabs: Object.entries(ve).map((function(e) {
                        var t = (0, a.Z)(e, 2);
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
                    onChange: M,
                    value: P,
                    options: ye,
                    className: "tw-mr-2"
                }), p.createElement(l.Lt, {
                    label: "Group By",
                    onChange: K,
                    value: H,
                    options: Ee,
                    className: "tw-mr-2"
                }), !P && p.createElement("div", {
                    className: "d-flex align-items-center flex-wrap"
                }, p.createElement(l.II, {
                    type: "date",
                    className: "tw-mr-1",
                    disabled: !!P,
                    invalid: fe,
                    value: null == z ? void 0 : z.format("YYYY-MM-DD"),
                    onChange: function(e) {
                        var t = d()(e.target.value).startOf(Ne(H));
                        V(t)
                    },
                    min: x.pH,
                    max: null == re ? void 0 : re.format("YYYY-MM-DD")
                }), " to ", p.createElement(l.II, {
                    type: "date",
                    className: "tw-ml-1",
                    disabled: !!P,
                    invalid: be,
                    value: null == re ? void 0 : re.format("YYYY-MM-DD"),
                    onChange: function(e) {
                        var t = d()(e.target.value).endOf(Ne(H));
                        ae(t)
                    },
                    min: (null == z ? void 0 : z.format("YYYY-MM-DD")) || x.pH,
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
                    onChange: me,
                    onMouseEnter: Le,
                    onClick: Le,
                    className: "tw-mr-2",
                    value: we,
                    options: Be
                }), p.createElement(l.zx, {
                    disabled: He,
                    onClick: function() {
                        var e;
                        if (!He) {
                            var t = document.createElement("a");
                            t.style.display = "none";
                            var r = "weeks" === H ? "GGGG-[W]ww" : "YYYY-MM-DD",
                                a = we && (null == Oe || null === (e = Oe.find((function(e) {
                                    return e.id === we
                                }))) || void 0 === e ? void 0 : e.displayName);
                            t.setAttribute("download", "VRChat Sales".concat(a ? " for ".concat(a) : "", " by ").concat(H.replace(/s$/, ""), " - ").concat(z.format(r), " to ").concat(re.format(r), ".csv"));
                            var n = (null == Pe ? void 0 : Pe.breakdown) || [],
                                l = Object.keys(n[0]),
                                o = null == n ? void 0 : n.map((function(e) {
                                    return l.map((function(t) {
                                        return e[t]
                                    })).join(",")
                                }));
                            l[0] = H, o.unshift(l.join(",")), t.setAttribute("href", "data:text/csv;encoding:utf-8,".concat(encodeURIComponent(o.join("\n")))), document.body.appendChild(t), t.click(), document.body.removeChild(t)
                        }
                    }
                }, p.createElement(l.$1, {
                    icon: n.q7,
                    className: "tw-px-2"
                })))), p.createElement("span", {
                    className: "tw-text-placeholder-text tw-my-5 tw-text-base"
                }, "Time period: ", null == z ? void 0 : z.format("MMM DD"), " - ", null !== (r = c()(re)) && void 0 !== r && r.isToday() ? "Today" : null == re ? void 0 : re.format("MMM DD")), je && p.createElement(l.qX, {
                    type: "error",
                    title: "Error loading listings"
                }, null == Ie || null === (i = Ie.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message), T && p.createElement(l.qX, {
                    type: "error",
                    title: "Error loading earnings"
                }, null == I || null === (s = I.data) || void 0 === s || null === (s = s.error) || void 0 === s ? void 0 : s.message), _e ? p.createElement(l.UU, {
                    style: {
                        minHeight: 100,
                        aspectRatio: qe.aspectRatio.toString(10)
                    }
                }) : function() {
                    if (Ge) {
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
                        options: qe,
                        data: Ze
                    })
                }(), "weeks" === H && p.createElement(l.qX, {
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
        59128: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "ad12fd2b35113d5d-1023w.png 1023w",
                images: [{
                    path: r.p + "ad12fd2b35113d5d-1023w.png",
                    width: 1023,
                    height: 712
                }],
                src: r.p + "ad12fd2b35113d5d-1023w.png",
                toString: function() {
                    return r.p + "ad12fd2b35113d5d-1023w.png"
                },
                width: 1023,
                height: 712
            }
        },
        259: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "33eb43b8887b1b01-1200w.png 1200w",
                images: [{
                    path: r.p + "33eb43b8887b1b01-1200w.png",
                    width: 1200,
                    height: 675
                }],
                src: r.p + "33eb43b8887b1b01-1200w.png",
                toString: function() {
                    return r.p + "33eb43b8887b1b01-1200w.png"
                },
                width: 1200,
                height: 675
            }
        },
        9468: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "343ab670941e2a7c-1200w.png 1200w",
                images: [{
                    path: r.p + "343ab670941e2a7c-1200w.png",
                    width: 1200,
                    height: 830
                }],
                src: r.p + "343ab670941e2a7c-1200w.png",
                toString: function() {
                    return r.p + "343ab670941e2a7c-1200w.png"
                },
                width: 1200,
                height: 830
            }
        },
        83555: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "ed6040c0dba8cdc0-1562w.png 1562w",
                images: [{
                    path: r.p + "ed6040c0dba8cdc0-1562w.png",
                    width: 1562,
                    height: 1024
                }],
                src: r.p + "ed6040c0dba8cdc0-1562w.png",
                toString: function() {
                    return r.p + "ed6040c0dba8cdc0-1562w.png"
                },
                width: 1562,
                height: 1024
            }
        }
    }
]);
//# sourceMappingURL=1ec29ab01d09baed254b03fdf18351931b5f50df865d99e3f3b19a26b50d9109.js.map