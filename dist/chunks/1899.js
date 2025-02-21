"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1899], {
        95498: (e, t) => {
            var a = "microsoft",
                r = [],
                n = "f3ca",
                l = "M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z";
            t.DF = {
                prefix: "fab",
                iconName: a,
                icon: [448, 512, r, n, l]
            }, t.hV = t.DF
        },
        96157: (e, t) => {
            var a = "infinity",
                r = [8734, 9854],
                n = "f534",
                l = "M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5L320 210.7l72.2-72.2C419.5 111.3 456.4 96 494.9 96C575 96 640 161 640 241.1l0 29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2C220.5 400.7 183.6 416 145.1 416C65 416 0 351 0 270.9l0-29.7zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8C100.3 160 64 196.3 64 241.1l0 29.7c0 44.8 36.3 81.1 81.1 81.1c21.5 0 42.2-8.5 57.4-23.8L274.7 256zm90.5 0l72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8c44.8 0 81.1-36.3 81.1-81.1l0-29.7c0-44.8-36.3-81.1-81.1-81.1c-21.5 0-42.2 8.5-57.4 23.8L365.3 256z";
            t.DF = {
                prefix: "fas",
                iconName: a,
                icon: [640, 512, r, n, l]
            }, t.vq = t.DF
        },
        71899: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => g
            });
            var r = a(54546),
                n = a(65394),
                l = a(82414),
                o = a(96157),
                c = a(95498),
                i = a(14411),
                s = a(67294),
                m = a(79655),
                d = a(73100),
                u = a(42688),
                f = a(37538),
                b = a(8842),
                p = a(22933),
                w = a(52501),
                v = {
                    standalonewindows: "PC",
                    android: "Universal"
                },
                h = {
                    standalonewindows: c.hV,
                    android: o.vq
                },
                E = {
                    None: {
                        icon: b,
                        label: "Unknown"
                    },
                    Excellent: {
                        icon: d,
                        label: "Excellent"
                    },
                    Good: {
                        icon: u,
                        label: "Good"
                    },
                    Medium: {
                        icon: f,
                        label: "Medium"
                    },
                    Poor: {
                        icon: p,
                        label: "Poor"
                    },
                    VeryPoor: {
                        icon: w,
                        label: "Very Poor"
                    }
                };
            const g = function(e) {
                var t = e.avatar,
                    a = e.onPrevious,
                    o = void 0 === a ? function() {} : a,
                    c = e.onSubmit,
                    d = void 0 === c ? function() {} : c,
                    u = (0, s.useState)(!1),
                    f = (0, r.Z)(u, 2),
                    b = f[0],
                    p = f[1],
                    w = (0, s.useState)(!1),
                    g = (0, r.Z)(w, 2),
                    y = g[0],
                    x = g[1],
                    C = (0, s.useMemo)((function() {
                        return Object.keys(v).reduce((function(e, a) {
                            var r, n, l = (r = null == t ? void 0 : t.unityPackages, n = a, (null == r ? void 0 : r.findLast((function(e) {
                                var t = e.platform,
                                    a = e.variant;
                                return t === n && "security" === a
                            }))) || (null == r ? void 0 : r.findLast((function(e) {
                                var t = e.platform,
                                    a = e.variant;
                                return t === n && "impostor" !== a
                            }))));
                            return l && (e[a] = l), e
                        }), {})
                    }), [t]),
                    k = (0, s.useMemo)((function() {
                        return Object.entries(v).filter((function(e) {
                            var t = (0, r.Z)(e, 1)[0];
                            return !!C[t]
                        }))
                    }), [C]);
                return s.createElement(i.JX, {
                    className: "tw-gap-5"
                }, s.createElement(i.qX, {
                    title: "Review and submit to start selling",
                    type: "custom",
                    icon: l.sq,
                    className: "tw-mb-5",
                    color: "#28434B",
                    iconColor: "#6AE3F9"
                }, s.createElement(i.JX, {
                    className: "tw-ml-[25px] tw-mt-3 tw-mb-3"
                }, s.createElement("p", null, "To list your avatar for sale, it must meet our Marketplace Standards and Terms and Conditions. Submit it for review to verify performance, compatibility, and eligibility. Need to edit your avatar? Head over to", " ", s.createElement(m.rU, {
                    to: "/home/avatar/".concat(t.id),
                    className: "hover:tw-text-teal-accent"
                }, "the avatar page"), " ", "to make changes."), y && s.createElement("div", null, s.createElement("p", null, s.createElement("strong", null, "Our review process:")), s.createElement("p", null, s.createElement("ol", null, s.createElement("li", null, s.createElement("strong", null, "Submit for Review"), " - Check your avatar’s information and submit it for review."), s.createElement("li", null, s.createElement("strong", null, "Moderation"), " - The Moderation team will evaluate your avatar’s performance and quality."), s.createElement("li", null, s.createElement("strong", null, "Approval"), " - Once approved, your avatar will appear as a product in My Store."), s.createElement("li", null, s.createElement("strong", null, "List for Sale"), " - After approval, you can include your avatar in listings and start selling!"))), s.createElement("p", null, s.createElement("strong", null, "Why Reviews Matter?"), s.createElement("br", null), "Our review process ensures that all avatars meet the required standards for performance and compatibility, creating a trustworthy marketplace for both sellers and buyers.")), s.createElement("button", {
                    type: "button",
                    className: "tw-bg-transparent tw-border-none tw-text-teal-accent hover:tw-text-white tw-text-left",
                    onClick: function() {
                        return x(!y)
                    }
                }, s.createElement(i.$1, {
                    icon: n._t,
                    size: "xs"
                }), " ", y ? "Read less" : "Read more about our review process"))), s.createElement(i.JX, null, s.createElement("h2", null, "Performance Rank"), s.createElement("small", {
                    className: "tw-text-light-grey tw-mb-3"
                }, "Confirm the performance rating for the avatar. A better rating might generate better sales."), s.createElement(i.JX, {
                    className: "tw-p-5 tw-bg-grey tw-rounded-md"
                }, null == k ? void 0 : k.map((function(e, t) {
                    var a, n, l = (0, r.Z)(e, 2),
                        o = l[0],
                        c = l[1],
                        m = C[o],
                        d = "".concat(c, " performance rating");
                    return s.createElement(s.Fragment, null, s.createElement(i.X2, {
                        className: "tw-w-full first:tw-mt-0 first:tw-pt-0 first:tw-border-0 tw-border-t tw-border-y-0 tw-border-x-0 t tw-border-solid tw-border-hr-line-color tw-mt-3 tw-pt-3"
                    }, s.createElement(i.X2, {
                        className: "tw-flex-1"
                    }, s.createElement("p", {
                        className: "tw-mb-0"
                    }, s.createElement(i.$1, {
                        icon: h[o]
                    }), " ", c)), s.createElement(i.X2, {
                        role: "note",
                        className: "".concat(t < k.length - 1 ? "mb-2" : "", " tw-flex-1 tw-items-center tw-gap-2"),
                        "aria-label": d
                    }, s.createElement("img", {
                        style: {
                            height: "1.25em"
                        },
                        src: null === (a = E[m.performanceRating]) || void 0 === a ? void 0 : a.icon,
                        alt: ""
                    }), null === (n = E[m.performanceRating]) || void 0 === n ? void 0 : n.label)))
                })))), s.createElement(i.JX, null, s.createElement("h2", null, "Licensing"), s.createElement("p", null, "All published avatars in the Avatar Shop will follow the license terms specified in the Terms and Conditions.", " ", s.createElement("a", {
                    href: "/",
                    className: "hover:tw-text-teal-accent"
                }, "Learn More")), s.createElement(i.JX, {
                    className: "tw-p-5 tw-bg-[#000] tw-rounded-md"
                }, s.createElement("p", null, "Creating a product from an avatar requires a review to ensure it meets our", " ", s.createElement("a", {
                    href: "https://hello.vrchat.com/legal",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "hover:tw-text-teal-accent"
                }, "Terms and Conditions"), " ", "and", " ", s.createElement("a", {
                    href: "https://creators.vrchat.com/economy/products/avatar",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "hover:tw-text-teal-accent"
                }, "Avatar Marketplace Guidelines"), "."), s.createElement(i.XZ, {
                    onChange: function() {
                        return p(!b)
                    },
                    checked: b,
                    id: "termsAccepted",
                    className: "tw-w-5 tw-h-5 tw-mr-2",
                    label: "I acknowledge that all the information I entered here is true and there will be a review process to validate it."
                }))), s.createElement(i.JX, {
                    className: "tw-mt-8 tw-gap-3 md:tw-flex-row"
                }, s.createElement(i.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: o,
                    neutral: !0
                }, "Back"), s.createElement(i.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: function() {
                        b && d()
                    },
                    disabled: !b
                }, "Submit for Review")))
            }
        },
        73100: (e, t, a) => {
            e.exports = a.p + "b7e99cd3c42a6f1ff2e6f3faaada0e75366945997a7fa5e7e014d26b1d100ef7.svg"
        },
        42688: (e, t, a) => {
            e.exports = a.p + "db3f587335a6602a84d0f0f18d6fbb10904973d0ddb659009f0fc56b3d1f026b.svg"
        },
        37538: (e, t, a) => {
            e.exports = a.p + "24001ed5aa8ebabaa63a09ffb88ccecccc4c5feb1b4179579e8e6c9f1fed3f16.svg"
        },
        8842: (e, t, a) => {
            e.exports = a.p + "a8c97bcdcb9b5c842487bb42d4a910ed022d88f2af3106d4cecae3fbbd4e2af0.svg"
        },
        22933: (e, t, a) => {
            e.exports = a.p + "467c01a863f0a61d30a09465f743678c95a5e6ae6d439b2fecd257464ec111d0.svg"
        },
        52501: (e, t, a) => {
            e.exports = a.p + "b4bf11dfbd8c3076cb66e8457b3f78659854700e79d5256516e205e37af89247.svg"
        }
    }
]);
//# sourceMappingURL=149a97221a3042aa7ee7598a3a059168aa541703c580083d579609443df751b8.js.map