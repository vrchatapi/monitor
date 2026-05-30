"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3986], {
        3986(e, t, a) {
            a.r(t), a.d(t, {
                default: () => f
            });
            var r = a(15902),
                l = a(82628),
                n = a(79162),
                c = a(6913),
                o = a(70961),
                i = a(75976),
                s = a(8436),
                m = a(15033),
                u = a(96540),
                w = a(84976),
                d = a(55717),
                v = a(77861);
            const f = function(e) {
                var t = e.avatar,
                    a = e.onPrevious,
                    f = void 0 === a ? function() {} : a,
                    p = e.onSubmit,
                    h = void 0 === p ? function() {} : p,
                    E = (0, u.useState)(!1),
                    g = (0, r.A)(E, 2),
                    b = g[0],
                    y = g[1],
                    k = (0, u.useState)(!1),
                    x = (0, r.A)(k, 2),
                    N = x[0],
                    C = x[1],
                    M = (0, u.useMemo)(function() {
                        return v.aF.reduce(function(e, a) {
                            var r = (0, d.A)(null == t ? void 0 : t.unityPackages, a);
                            return r && (e[a] = r), e
                        }, {})
                    }, [t]),
                    S = (0, u.useMemo)(function() {
                        return v.aF.every(function(e) {
                            return !!M[e]
                        })
                    }, [M]);
                return u.createElement(m.fv, {
                    className: "tw-gap-5"
                }, u.createElement(m.$T, {
                    title: "Review and submit to start selling",
                    type: "custom",
                    icon: c.iW,
                    color: "#28434B",
                    iconColor: "#6AE3F9",
                    className: "tw-border-2 tw-rounded-lg"
                }, u.createElement(m.fv, {
                    className: "tw-ml-[25px] tw-mt-3"
                }, u.createElement("p", null, "To list your avatar for sale, it must meet our ", u.createElement("strong", null, "Marketplace Standards"), " and ", u.createElement("strong", null, "Terms and Conditions"), ". Submit it for review to verify performance, compatibility, and eligibility. Need to edit your avatar? Head over to", " ", u.createElement(w.N_, {
                    to: "/home/avatar/".concat(t.id),
                    className: "hover:tw-text-teal-accent"
                }, "the avatar page"), " ", "to make changes."), N && u.createElement("div", null, u.createElement("p", null, u.createElement("strong", null, "Our review process:")), u.createElement("p", null, u.createElement("ol", null, u.createElement("li", null, u.createElement("strong", null, "Submit for Review"), " - Check your avatar’s information and submit it for review."), u.createElement("li", null, u.createElement("strong", null, "Moderation"), " - The Moderation team will evaluate your avatar’s performance and quality."), u.createElement("li", null, u.createElement("strong", null, "Approval"), " - Once approved, your avatar will appear as a product in My Store."), u.createElement("li", null, u.createElement("strong", null, "List for Sale"), " - After approval, you can include your avatar in listings and start selling!"))), u.createElement("p", null, u.createElement("strong", null, "Why Reviews Matter?"), u.createElement("br", null), "Our review process ensures that all avatars meet the required standards for performance and compatibility, creating a trustworthy marketplace for both sellers and buyers.")), u.createElement("button", {
                    type: "button",
                    className: "tw-bg-transparent tw-border-none tw-text-teal-accent hover:tw-text-white tw-text-left",
                    onClick: function() {
                        return C(!N)
                    }
                }, u.createElement(m.M2, {
                    icon: n.Xk,
                    size: "xs"
                }), " ", N ? "Read less" : "Read more about our review process"))), u.createElement(m.fv, null, u.createElement("h2", {
                    className: "tw-text-xl"
                }, "Performance Rank"), u.createElement("small", {
                    className: "tw-text-light-grey tw-mb-3"
                }, "Confirm the performance rank for the avatar. A better performance rank might generate better sales."), u.createElement(m.fv, {
                    className: "tw-px-5 tw-py-2 tw-bg-grey tw-rounded-md"
                }, u.createElement("table", null, v.aF.map(function(e, t) {
                    var a, r, n = (null === (a = v.P4[e]) || void 0 === a ? void 0 : a.label) || e,
                        c = M[e];
                    return u.createElement("tr", {
                        className: "tw-w-full tw-border-b tw-border-b-1 tw-border-hr-line-color last:tw-border-none"
                    }, u.createElement("th", {
                        className: "tw-w-6 tw-py-3 tw-font-normal tw-text-center"
                    }, u.createElement(m.M2, {
                        icon: null === (r = v.P4[e]) || void 0 === r ? void 0 : r.icon
                    })), u.createElement("th", {
                        className: "tw-py-3 tw-font-normal"
                    }, n), u.createElement("td", {
                        className: "tw-py-3"
                    }, function(e) {
                        var t, a;
                        return e ? e.scanStatus ? "failed" === e.scanStatus ? u.createElement("div", {
                            className: "tw-flex tw-items-center tw-gap-2"
                        }, u.createElement(m.M2, {
                            icon: i.faXmark
                        }), "Security Checks Failed") : "unscanned" === e.scanStatus ? u.createElement("div", {
                            className: "tw-flex tw-items-center tw-gap-2"
                        }, u.createElement(m.M2, {
                            icon: o.faCircleQuestion
                        }), "Security Checks Pending") : u.createElement("div", {
                            className: "tw-flex tw-items-center tw-gap-2"
                        }, u.createElement("img", {
                            style: {
                                height: "1em"
                            },
                            src: null === (t = v.Wu[e.performanceRating]) || void 0 === t ? void 0 : t.image,
                            alt: ""
                        }), null === (a = v.Wu[e.performanceRating]) || void 0 === a ? void 0 : a.label) : u.createElement("div", {
                            className: "tw-flex tw-items-center tw-gap-2"
                        }, u.createElement(m.M2, {
                            icon: s.tU
                        }), "No Security Checks") : u.createElement("div", {
                            className: "tw-flex tw-items-center tw-gap-2 tw-text-light-grey"
                        }, u.createElement(m.M2, {
                            icon: l.faTriangleExclamation,
                            className: "tw-text-yellow-500"
                        }), "Unavailable")
                    }(c)))
                }))), !S && u.createElement("small", {
                    className: "tw-text-yellow-500 tw-mt-3"
                }, u.createElement(m.M2, {
                    icon: l.faTriangleExclamation
                }), " Cross-platform avatars receive higher visibility and are more likely to be featured in the Avatar Marketplace.")), u.createElement(m.fv, null, u.createElement("h2", {
                    className: "tw-text-xl"
                }, "Licensing"), u.createElement("p", null, "All published avatars in the Avatar Shop will follow the license terms specified in the Terms and Conditions.", " ", u.createElement("a", {
                    href: "https://hello.vrchat.com/legal",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "hover:tw-text-teal-accent"
                }, "Learn More")), u.createElement(m.fv, {
                    className: "tw-p-5 tw-bg-[#000] tw-rounded-md"
                }, u.createElement("p", null, "Creating a product from an avatar requires a review to ensure it meets our", " ", u.createElement("a", {
                    href: "https://hello.vrchat.com/legal",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "hover:tw-text-teal-accent"
                }, "Terms and Conditions"), " ", "and", " ", u.createElement("a", {
                    href: "https://creators.vrchat.com/economy/guidelines",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "hover:tw-text-teal-accent"
                }, "Avatar Marketplace Guidelines"), "."), u.createElement(m.Sc, {
                    onChange: function() {
                        return y(!b)
                    },
                    checked: b,
                    id: "termsAccepted",
                    topAlign: !0,
                    className: "tw-w-5 tw-h-5 tw-mr-2 tw-mt-1",
                    label: "I acknowledge that all the information I entered here is true and there will be a review process to validate it."
                }))), u.createElement(m.fv, {
                    className: "tw-mt-8 tw-gap-3 md:tw-flex-row"
                }, u.createElement(m.$n, {
                    containerClasses: "tw-flex-1",
                    onClick: f,
                    neutral: !0
                }, "Back"), u.createElement(m.$n, {
                    containerClasses: "tw-flex-1",
                    onClick: function() {
                        b && h()
                    },
                    disabled: !b
                }, "Submit for Review")))
            }
        }
    }
]);
//# sourceMappingURL=d9d11666399e8d46bcde6ba981c1fa1f9753cbdc218756f0ba56a7c1d35d9599.js.map