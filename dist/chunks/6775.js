(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6775], {
        76775: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                default: () => yt
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
                b = a(83807),
                x = a(95896),
                h = a(22202),
                g = a(66736),
                v = a(16869),
                y = a(67978),
                E = a(4942),
                N = a(37412),
                k = a.n(N),
                M = a(59542),
                Y = a.n(M),
                D = a(55183),
                S = a.n(D);

            function P(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function C(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? P(Object(a), !0).forEach((function(e) {
                        (0, E.Z)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : P(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            c().extend(k()), c().extend(Y()), c().extend(S());
            var j = {
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
                O = {
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
                G = function(t, e, a) {
                    var r = c()(t),
                        n = c()(e),
                        l = j[a] || j.days,
                        o = n.diff(r, l.unit) + 1;
                    return Array.from({
                        length: o
                    }, (function(t, e) {
                        return function(t, e) {
                            var a;
                            if ("weeks" === e) {
                                var r = t.isoWeekYear(),
                                    n = t.isoWeek();
                                return "".concat(r, "-W").concat(n.toString().padStart(2, "0"))
                            }
                            return t.format((null === (a = j[e]) || void 0 === a ? void 0 : a.format) || j.days.format)
                        }(r.add(e, l.unit), a)
                    }))
                },
                Z = function(t, e) {
                    var a = function(t) {
                        var e = new Map;
                        return t.forEach((function(t) {
                            e.set(t._id, t)
                        })), e
                    }(t);
                    return e.map((function(t) {
                        return function(t, e) {
                            return C({
                                _id: t
                            }, Object.fromEntries(Object.entries(I).map((function(t) {
                                var a, n = (0, r.Z)(t, 2),
                                    l = n[0],
                                    o = n[1];
                                return [l, null !== (a = null == e ? void 0 : e[l]) && void 0 !== a ? a : o]
                            }))))
                        }(t, a.get(t))
                    }))
                },
                W = function(t) {
                    if (t.includes("-W")) {
                        var e = t.split("-W"),
                            a = (0, r.Z)(e, 2),
                            n = a[0],
                            l = a[1];
                        return c()().startOf("year").year(Number.parseInt(n)).isoWeek(Number.parseInt(l))
                    }
                    return t.match(/^\d{4}-\d{2}$/) ? c()(t, "YYYY-MM") : t.match(/^\d{4}$/) ? c()(t, "YYYY") : c()(t)
                },
                L = function(t, e) {
                    var a = W(t._id);
                    return W(e._id).isAfter(a) ? 1 : -1
                },
                R = function(t, e) {
                    return t.reduce((function(t, a) {
                        var r = a._id;
                        t.labels.push(r), t.datasets[e] || (t.datasets[e] = function(t) {
                            return C({
                                yAxisId: t,
                                label: O[t] || t,
                                data: []
                            }, T)
                        }(e));
                        var n = function(t, e) {
                            var a = t.otpPurchaseCount,
                                r = void 0 === a ? 0 : a,
                                n = t.subscriberMonths,
                                l = void 0 === n ? 0 : n,
                                o = t.totalEarnings;
                            return "numPurchases" === e ? r + l : void 0 === o ? 0 : o
                        }(a, e);
                        return t.datasets[e].data.push(n), t
                    }), {
                        labels: [],
                        datasets: {}
                    })
                },
                A = a(15861),
                B = a(4965),
                F = a(64687),
                _ = a.n(F),
                q = a(89250),
                H = a(56646),
                U = a(45697),
                X = a.n(U),
                $ = function(t) {
                    var e = t.title,
                        a = t.credits,
                        r = void 0 === a ? null : a,
                        n = t.link,
                        o = void 0 === n ? null : n,
                        i = t.cta,
                        s = void 0 === i ? null : i,
                        c = t.hideGlyph,
                        u = void 0 !== c && c,
                        w = t.customNoCreditsText,
                        m = void 0 === w ? null : w,
                        d = t.className,
                        f = t.isError,
                        b = void 0 !== f && f,
                        x = t.error,
                        h = null === r || 0 === r;
                    if (b) {
                        var g = x || "An unknown error occurred";
                        return p.createElement("div", {
                            className: "tw-bg-grey tw-p-5 tw-rounded-xl tw-@container/marketplacePanel tw-w-full ".concat(d)
                        }, p.createElement("h5", {
                            className: "tw-text-xl tw-font-bold after:tw-border-none tw-no-underline tw-mb-3"
                        }, e), p.createElement("p", {
                            className: "tw-text-placeholder-text tw-mb-12"
                        }, "Failed to retrieve data: ", g))
                    }
                    return p.createElement("div", {
                        className: "tw-bg-grey tw-p-5 tw-rounded-xl tw-@container/marketplacePanel tw-w-full ".concat(d)
                    }, p.createElement("h5", {
                        className: "tw-text-xl tw-font-bold after:tw-border-none tw-no-underline tw-mb-3"
                    }, e), h && p.createElement("p", {
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
                        icon: H.faCircleInfo
                    }), p.createElement("a", {
                        href: null == o ? void 0 : o.href,
                        className: "tw-text-sm tw-underline tw-font-thin tw-ml-1 tw-text-subtext-grey",
                        referrerPolicy: "no-referrer"
                    }, null == o ? void 0 : o.text))))
                };
            $.propTypes = {
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
            const K = $;
            const z = function() {
                var t, e, a, r = (0, h.IB)().data,
                    n = null == r ? void 0 : r.id,
                    o = (0, q.s0)(),
                    i = (0, g.uK)({
                        sellerId: n,
                        groupByDuration: "years",
                        metricDateStart: x.pH,
                        metricDateEnd: "2511-03-07"
                    }, {
                        skip: !n
                    }),
                    s = i.data,
                    c = void 0 === s ? {
                        totals: {
                            totalEarnings: 0,
                            otpPurchaseCount: 0,
                            subscriberMonths: 0
                        }
                    } : s,
                    u = i.isFetching,
                    w = i.isError,
                    m = i.error,
                    d = (0, g.oD)({
                        userId: n
                    }, {
                        skip: !n,
                        refetchOnMountOrArgChange: !0
                    }).data,
                    f = null !== (t = null == d ? void 0 : d.earnings) && void 0 !== t ? t : 0,
                    b = p.useMemo((function() {
                        var t, e, a;
                        return {
                            allTimeNumPurchases: Number(null == c || null === (t = c.totals) || void 0 === t ? void 0 : t.otpPurchaseCount) + Number(null == c || null === (e = c.totals) || void 0 === e ? void 0 : e.subscriberMonths),
                            allTimeTotalPurchasePrice: null == c || null === (a = c.totals) || void 0 === a ? void 0 : a.totalEarnings
                        }
                    }), [c]),
                    v = b.allTimeNumPurchases,
                    y = b.allTimeTotalPurchasePrice;
                return p.createElement(p.Fragment, null, w && p.createElement(l.qX, {
                    type: "error",
                    title: "Error loading statistics"
                }, "Failed to fetch earnings: ", null == m || null === (e = m.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message), p.createElement("div", {
                    className: "tw-flex tw-w-full tw-gap-3 tw-my-4 tw-flex-col sm:tw-flex-row"
                }, u ? p.createElement(p.Fragment, null, p.createElement(V, null), p.createElement(V, {
                    delay: 100
                })) : p.createElement(p.Fragment, null, p.createElement(K, {
                    title: "Available Payout",
                    credits: Number(f) || 0,
                    link: {
                        text: "About Payout",
                        href: "https://www.tilia.io/legal/terms-of-service"
                    },
                    cta: {
                        text: "Manage",
                        onClickCallback: (a = (0, A.Z)(_().mark((function t() {
                            return _().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        o("/home/marketplace/storefront/payout/manage");
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), function() {
                            return a.apply(this, arguments)
                        }),
                        title: ""
                    }
                }), p.createElement(K, {
                    title: "Total Sales",
                    hideGlyph: !0,
                    credits: Number(v || 0),
                    cta: {
                        text: "View Details",
                        onClickCallback: function() {
                            o("/home/marketplace/storefront/revenue/mysales")
                        },
                        isDisabled: !1
                    }
                }), p.createElement(K, {
                    title: "Total Earned",
                    credits: Number(y || 0),
                    cta: {
                        text: "View Details",
                        onClickCallback: function() {
                            o("/home/marketplace/storefront/revenue/mysales")
                        },
                        isDisabled: !1
                    }
                }))))
            };
            var V = (0, B.Z)(l.UU, {
                    target: "e129v97h0"
                })({
                    name: "rdii6n",
                    styles: "flex:1 1 240px;min-height:148px;margin:0.5rem;border-radius:8px"
                }),
                J = a(87709),
                Q = a(86646),
                tt = a(68055),
                et = function(t) {
                    var e = t.steps,
                        a = t.currentStepNumber,
                        r = e.filter((function(t) {
                            return t.isHiddenStep
                        }));
                    return p.createElement("ol", {
                        className: "tw-max-w-[650px] tw-flex tw-justify-between tw-items-start tw-pl-[0px] xs:tw-pl-[44px]"
                    }, e.map((function(t, n) {
                        var l = Number(a) > Number(t.number),
                            o = Number(a) === Number(t.number),
                            i = n === e.length - (r.length + 1);
                        if (t.isHiddenStep) return null;
                        return p.createElement("li", {
                            key: t.number,
                            className: "\n              tw-list-none\n              xs:tw-flex tw-flex-col\n              xs:tw-w-[120px] sm:tw-w-[340px]\n              ".concat(o ? "" : "tw-hidden", "\n            "),
                            "aria-label": "".concat(o ? "Current step: ".concat(t.label) : "", " ")
                        }, p.createElement("div", {
                            className: "\n              tw-list-none tw-flex tw-items-center\n              ".concat(l ? "after:tw-border-green" : "after:tw-border-lighter-grey", "\n              after:tw-border-0 after:tw-content-[''] after:tw-w-full after:tw-border-b-[1px] after:tw-border-solid after:tw-mx-2\n              after:tw-flex\n              ").concat(i ? "after:tw-hidden" : "xs:after:tw-flex", "\n              ").concat(o ? "after:tw-hidden" : "", "\n            ")
                        }, p.createElement("div", {
                            className: "tw-flex tw-flex-col tw-items-start"
                        }, p.createElement("div", {
                            className: "\n                  tw-border-solid tw-border-2 tw-border-full\n                  tw-w-8 tw-h-8 tw-rounded-full\n                  tw-flex tw-items-center tw-justify-center tw-text-sm\n                  after:tw-w-full after:tw-h-1 after:tw-border-b\n                  ".concat("", "\n                  ").concat(l ? "tw-border-green tw-text-[#000] tw-bg-green" : o ? "tw-border-green tw-text-white" : "tw-border-light-grey tw-text-light-grey", "\n                ")
                        }, l ? p.createElement(Q.Z, {
                            icon: tt.LE,
                            "aria-label": "Done"
                        }) : t.number))), p.createElement("div", {
                            className: "tw-text-sm tw-text-center tw-w-[130px] tw--ml-[44px] tw-mt-2 ".concat(o ? "tw-text-white tw-font-bold" : "tw-text-light-grey")
                        }, t.label))
                    })))
                };
            et.propTypes = {
                steps: X().arrayOf(X().shape({
                    number: X().number.isRequired,
                    label: X().string.isRequired,
                    isHiddenStep: X().bool
                })).isRequired,
                currentStepNumber: X().number.isRequired
            };
            const at = et;
            var rt = a(15832),
                nt = a(79655),
                lt = a(34698),
                ot = a(59128),
                it = a.n(ot),
                st = a(259),
                ct = a.n(st),
                ut = a(9468),
                wt = a.n(ut),
                mt = a(83555),
                dt = a.n(mt),
                pt = function(t) {
                    var e, a = t.currentStepNumber,
                        n = (0, rt._)("myStoreTutorialDismissed", !1),
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
                                    src: ct(),
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
                                }, p.createElement(nt.rU, {
                                    to: "/home/marketplace/storefront/products"
                                }, p.createElement(lt.Z, {
                                    className: "tw-mt-4 tw-h-10 tw-bg-button-bg tw-text-highlight tw-leading-none tw-border-transparent hover:tw-border-highlight"
                                }, "Create Product")), p.createElement(nt.rU, {
                                    to: "/home/marketplace/storefront/subscriptions"
                                }, p.createElement(lt.Z, {
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
                                    src: wt(),
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
                                }, p.createElement(nt.rU, {
                                    to: "/home/marketplace/storefront/stores"
                                }, p.createElement(lt.Z, {
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
                                    src: dt(),
                                    alt: "",
                                    className: " tw-rounded-lg tw-max-w-full tw-object-cover @[700px]/tutorial:tw-max-w-[240px]  @[790px]/tutorial:tw-max-w-[300px] @[905px]/tutorial:tw-max-w-[350px] @[955px]/tutorial:tw-max-w-[400px] @[1160px]/tutorial:tw-max-w-[500px]"
                                }), p.createElement("div", {
                                    className: " tw-flex tw-flex-col tw-max-w-full tw-ml-0 @[700px]/tutorial:tw-max-w-full @[700px]/tutorial:tw-ml-4 "
                                }, p.createElement("h4", {
                                    className: "tw-text-white tw-font-bold tw-text-lg tw-mt-4"
                                }, "You are all set to start selling!"), p.createElement("p", {
                                    className: "tw-text-light-grey tw-text-sm tw-mt-2"
                                }, "The final step to greatness. Share your store, promote your work, and make your first sale! You can track all your sales and subscribers on the", " ", p.createElement(nt.rU, {
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
                                    src: it(),
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
                                }, p.createElement(lt.Z, {
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
                    }, p.createElement(at, {
                        steps: s,
                        currentStepNumber: a
                    })), p.createElement("div", null, p.createElement("button", {
                        type: "button",
                        onClick: function() {
                            i(!0)
                        },
                        className: "tw-bg-transparent tw-border-none tw-cursor-pointer"
                    }, p.createElement(Q.Z, {
                        icon: J.faXmark
                    })))), p.createElement("div", {
                        className: "tw-mt-4 tw-mb-2 tw-flex tw-justify-center tw-ml-[44px] @[900px]/tutorial:tw-hidden"
                    }, p.createElement(at, {
                        steps: s,
                        currentStepNumber: a
                    })), null === (e = s.find((function(t) {
                        return t.number === a
                    }))) || void 0 === e ? void 0 : e.content())
                };
            pt.propTypes = {
                currentStepNumber: X().number.isRequired
            };
            const ft = pt;
            c().extend(w()), i.kL.register(i.uw, i.f$, i.FB, i.od, i.jn, i.u, i.Gu), i.kL.defaults.color = "#737372", i.kL.defaults.borderColor = "rgba(127, 127, 127, 0.1)";
            var bt = {
                    numPurchases: "Total Sales",
                    totalPurchasePrice: "Total Earnings"
                },
                xt = [{
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
                ht = [{
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
                gt = function(t) {
                    return "weeks" === t ? "isoweek" : t
                },
                vt = function(t) {
                    var e = d().duration(t);
                    if (e.asDays() < 1) throw new RangeError("computeValuesForDurationTemplate: durationTemplate ".concat(t, " resulted in an invalid duration"));
                    var a = function(t) {
                            if (!d().isDuration(t)) throw new TypeError("duration ".concat(t, " is not a valid duration object"));
                            return t.asMonths() > 11 ? "months" : t.asMonths() > 2 ? "weeks" : "days"
                        }(e),
                        r = gt(a),
                        n = d()(),
                        l = n.clone().endOf(r);
                    return {
                        groupByDuration: a,
                        metricDateStart: n.clone().add(1, r).startOf(r).subtract(e),
                        metricDateEnd: l
                    }
                };
            const yt = function() {
                var t, e, a, i, s, u = (0, h.IB)().data,
                    w = null == u ? void 0 : u.id,
                    m = p.useState("numPurchases"),
                    E = (0, r.Z)(m, 2),
                    N = E[0],
                    k = E[1],
                    M = p.useState(xt[0].value),
                    Y = (0, r.Z)(M, 2),
                    D = Y[0],
                    S = Y[1],
                    P = (0, g.uK)({
                        sellerId: w,
                        groupByDuration: "years",
                        metricDateStart: x.pH,
                        metricDateEnd: "2511-03-07"
                    }, {
                        skip: !w
                    }),
                    C = P.data,
                    j = void 0 === C ? {
                        totals: {
                            totalEarnings: 0,
                            otpPurchaseCount: 0,
                            subscriberMonths: 0
                        }
                    } : C,
                    O = P.isFetching,
                    T = P.isError,
                    I = P.error,
                    W = p.useMemo((function() {
                        return 0 === j.totals.totalEarnings
                    }), [j]),
                    A = p.useMemo((function() {
                        return vt(D)
                    }), []),
                    B = A.groupByDuration,
                    F = A.metricDateStart,
                    _ = A.metricDateEnd,
                    q = p.useState(B),
                    H = (0, r.Z)(q, 2),
                    U = H[0],
                    X = H[1],
                    $ = p.useState(F),
                    K = (0, r.Z)($, 2),
                    V = K[0],
                    J = K[1],
                    Q = (0, b.Nr)(V),
                    tt = p.useState(_),
                    et = (0, r.Z)(tt, 2),
                    at = et[0],
                    rt = et[1],
                    nt = (0, b.Nr)(at),
                    lt = p.useState(!1),
                    ot = (0, r.Z)(lt, 2),
                    it = ot[0],
                    st = ot[1],
                    ct = p.useState(),
                    ut = (0, r.Z)(ct, 2),
                    wt = ut[0],
                    mt = ut[1],
                    dt = p.useMemo((function() {
                        return [d().isMoment(V) && V.isAfter(x.pH) && V.isBefore(at || d()().add(2, "y")), d().isMoment(at) && at.isAfter(V || x.pH) && at.isBefore(d()().add(2, "y"))]
                    }), [V, at]),
                    pt = (0, r.Z)(dt, 2),
                    yt = pt[0],
                    Et = pt[1];
                p.useEffect((function() {
                    if (D) {
                        var t = vt(D),
                            e = t.groupByDuration,
                            a = t.metricDateStart,
                            r = t.metricDateEnd;
                        X(e), J(a), rt(r)
                    }
                }), [D]);
                var Nt, kt, Mt = (0, g.uK)({
                        sellerId: w,
                        groupByDuration: U,
                        metricDateStart: null == Q ? void 0 : Q.toISOString(),
                        metricDateEnd: null == nt ? void 0 : nt.toISOString(),
                        listingIds: wt ? [wt] : wt
                    }, {
                        skip: !(w && Q && nt && yt && Et)
                    }),
                    Yt = Mt.data,
                    Dt = void 0 === Yt ? {
                        totals: {
                            totalEarnings: 0,
                            otpPurchaseCount: 0,
                            subscriberMonths: 0
                        }
                    } : Yt,
                    St = (Mt.isFetching, Mt.isError, Mt.error, (0, v.Ul)({
                        userId: w,
                        hydrate: !0
                    })),
                    Pt = St.data,
                    Ct = void 0 === Pt ? [] : Pt,
                    jt = St.isLoading,
                    Ot = St.isError,
                    Tt = St.isSuccess,
                    It = St.error,
                    Gt = p.useMemo((function() {
                        var t;
                        if (null == Dt || null === (t = Dt.breakdown) || void 0 === t || !t.length || !V || !at) return {
                            labels: [],
                            datasets: []
                        };
                        var e = G(V, at, U);
                        return function(t, e) {
                            var a = t.sort(L),
                                r = R(a, e),
                                n = r.labels,
                                l = r.datasets;
                            return {
                                labels: n,
                                datasets: Object.values(l)
                            }
                        }(Z(Dt.breakdown, e), N)
                    }), [Dt, N, V, at, U]),
                    Zt = !(null != Gt && null !== (t = Gt.datasets) && void 0 !== t && t.length),
                    Wt = function() {
                        it || st(!0)
                    },
                    Lt = p.useMemo((function() {
                        var t = [{
                            label: "All"
                        }];
                        return jt ? t.push({
                            label: "Loading…"
                        }) : Ct.forEach((function(e) {
                            var a = e.id,
                                r = e.displayName;
                            t.push({
                                label: r,
                                value: a
                            })
                        })), t
                    }), [Ct, jt]),
                    Rt = (0, y.rP)({
                        userId: w
                    }, {
                        skip: !w
                    }),
                    At = Rt.data,
                    Bt = Rt.isFetching,
                    Ft = Rt.isSuccess,
                    _t = O || V !== Q || at !== nt || Bt,
                    qt = p.useMemo((function() {
                        switch (U) {
                            case "years":
                                return "YYYY";
                            case "months":
                                return "MMM YYYY";
                            case "weeks":
                                return "[Week] ww, GGGG";
                            default:
                                return "MMM DD, YYYY"
                        }
                    }), [U]),
                    Ht = p.useMemo((function() {
                        var t = function(t) {
                            return "".concat(t, " credits")
                        };
                        return {
                            responsive: !0,
                            animation: !1,
                            aspectRatio: 2,
                            plugins: {
                                tooltip: {
                                    callbacks: {
                                        label: "totalPurchasePrice" === N ? function(e) {
                                            var a = e.dataset,
                                                r = e.parsed;
                                            return (a.label ? "".concat(a.label, ": ") : "") + t(r.y)
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
                                        unit: null == U ? void 0 : U.replace(/s$/, ""),
                                        tooltipFormat: qt,
                                        displayFormats: {
                                            week: "GGGG [W]ww"
                                        }
                                    }
                                },
                                y: {
                                    beginAtZero: !0,
                                    ticks: {
                                        precision: 0,
                                        callback: "totalPurchasePrice" === N ? t : void 0
                                    }
                                }
                            }
                        }
                    }), [N, U, qt]),
                    Ut = !w || wt && (jt || Ot) || !V || !at || !yt || !Et || !(null != Dt && null !== (e = Dt.breakdown) && void 0 !== e && e.length) || Zt;
                return p.createElement(p.Fragment, null, p.createElement(ft, {
                    currentStepNumber: (Nt = 0 === (null == At ? void 0 : At.length) && Ft, kt = !Ct.some((function(t) {
                        return !0 === t.active
                    })) && Tt, Nt ? 1 : kt ? 2 : W ? 3 : 4)
                }), p.createElement(z, null), p.createElement(l.X2, {
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
                    tabs: Object.entries(bt).map((function(t) {
                        var e = (0, r.Z)(t, 2);
                        return {
                            id: e[0],
                            name: e[1],
                            condition: !0
                        }
                    }))
                }))), p.createElement(l.X2, {
                    className: "align-items-center flex-wrap tw-gap-1"
                }, p.createElement(l.Lt, {
                    label: "Duration",
                    onChange: S,
                    value: D,
                    options: xt,
                    className: "tw-mr-2"
                }), p.createElement(l.Lt, {
                    label: "Group By",
                    onChange: X,
                    value: U,
                    options: ht,
                    className: "tw-mr-2"
                }), !D && p.createElement("div", {
                    className: "d-flex align-items-center flex-wrap"
                }, p.createElement(l.II, {
                    type: "date",
                    className: "tw-mr-1",
                    disabled: !!D,
                    invalid: yt,
                    value: null == V ? void 0 : V.format("YYYY-MM-DD"),
                    onChange: function(t) {
                        var e = d()(t.target.value).startOf(gt(U));
                        J(e)
                    },
                    min: x.pH,
                    max: null == at ? void 0 : at.format("YYYY-MM-DD")
                }), " to ", p.createElement(l.II, {
                    type: "date",
                    className: "tw-ml-1",
                    disabled: !!D,
                    invalid: Et,
                    value: null == at ? void 0 : at.format("YYYY-MM-DD"),
                    onChange: function(t) {
                        var e = d()(t.target.value).endOf(gt(U));
                        rt(e)
                    },
                    min: (null == V ? void 0 : V.format("YYYY-MM-DD")) || x.pH,
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
                    onChange: mt,
                    onMouseEnter: Wt,
                    onClick: Wt,
                    className: "tw-mr-2",
                    value: wt,
                    options: Lt
                }), p.createElement(l.zx, {
                    disabled: Ut,
                    onClick: function() {
                        var t;
                        if (!Ut) {
                            var e = document.createElement("a");
                            e.style.display = "none";
                            var a = "weeks" === U ? "GGGG-[W]ww" : "YYYY-MM-DD",
                                r = wt && (null == Ct || null === (t = Ct.find((function(t) {
                                    return t.id === wt
                                }))) || void 0 === t ? void 0 : t.displayName);
                            e.setAttribute("download", "VRChat Sales".concat(r ? " for ".concat(r) : "", " by ").concat(U.replace(/s$/, ""), " - ").concat(V.format(a), " to ").concat(at.format(a), ".csv"));
                            var n = (null == Dt ? void 0 : Dt.breakdown) || [],
                                l = Object.keys(n[0]),
                                o = null == n ? void 0 : n.map((function(t) {
                                    return l.map((function(e) {
                                        return t[e]
                                    })).join(",")
                                }));
                            l[0] = U, o.unshift(l.join(",")), e.setAttribute("href", "data:text/csv;encoding:utf-8,".concat(encodeURIComponent(o.join("\n")))), document.body.appendChild(e), e.click(), document.body.removeChild(e)
                        }
                    }
                }, p.createElement(l.$1, {
                    icon: n.q7,
                    className: "tw-px-2"
                })))), p.createElement("span", {
                    className: "tw-text-placeholder-text tw-my-5 tw-text-base"
                }, "Time period: ", null == V ? void 0 : V.format("MMM DD"), " - ", null !== (a = c()(at)) && void 0 !== a && a.isToday() ? "Today" : null == at ? void 0 : at.format("MMM DD")), Ot && p.createElement(l.qX, {
                    type: "error",
                    title: "Error loading listings"
                }, null == It || null === (i = It.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message), T && p.createElement(l.qX, {
                    type: "error",
                    title: "Error loading earnings"
                }, null == I || null === (s = I.data) || void 0 === s || null === (s = s.error) || void 0 === s ? void 0 : s.message), _t ? p.createElement(l.UU, {
                    style: {
                        minHeight: 100,
                        aspectRatio: Ht.aspectRatio.toString(10)
                    }
                }) : function() {
                    if (Zt) {
                        var t = {
                            labels: Array.from({
                                length: 7
                            }, (function(t, e) {
                                return c()().subtract(6 - e, "day").format("MMM DD")
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
                            data: t
                        })))
                    }
                    return p.createElement(f.x1, {
                        datasetIdKey: "_id",
                        options: Ht,
                        data: Gt
                    })
                }(), "weeks" === U && p.createElement(l.qX, {
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
        59128: (t, e, a) => {
            t.exports = {
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
        259: (t, e, a) => {
            t.exports = {
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
        9468: (t, e, a) => {
            t.exports = {
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
        83555: (t, e, a) => {
            t.exports = {
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
//# sourceMappingURL=cceda21aab969865c7d5dbdb2d5110589d4c801ef3b398e429e2e2d5099c1109.js.map