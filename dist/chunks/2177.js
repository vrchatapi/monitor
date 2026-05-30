"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2177], {
        22177(e, t, a) {
            a.r(t), a.d(t, {
                default: () => i
            });
            var r = a(81617),
                n = a(96540),
                l = a(6376),
                c = a(15033),
                o = a(89661),
                s = a(9887),
                w = a.n(s),
                u = a(27292),
                m = [{
                    label: "Udon Product",
                    value: "udon",
                    text: "Custom In-World Experiences.",
                    redirect: "https://creators.vrchat.com/economy/products/udon",
                    image: a.n(u)()
                }, {
                    label: "Avatar",
                    value: "avatar",
                    text: "Sell your uploaded avatars.",
                    redirect: "https://creators.vrchat.com/economy/products/avatar",
                    image: w()
                }];
            const i = function(e) {
                var t = e.hasAvatarSellerPermission,
                    a = void 0 !== t && t,
                    s = e.onNext,
                    w = void 0 === s ? function() {} : s,
                    u = e.onClose,
                    i = void 0 === u ? function() {} : u,
                    d = (0, l.wA)(),
                    p = (0, l.d4)(function(e) {
                        return e.productFlow.productType
                    });
                return n.createElement(c.fv, null, n.createElement("p", null, "Choose the type of product you’d like to create:"), n.createElement(c.fv, {
                    className: "tw-gap-5 tw-items-center md:tw-items-stretch md:tw-flex-row md:tw-justify-center"
                }, m.map(function(e) {
                    var t = p === e.value;
                    return n.createElement(c.fv, {
                        key: e.value,
                        onClick: function() {
                            return function(e) {
                                d((0, o.kU)(e))
                            }(e.value)
                        },
                        className: "".concat(t ? "tw-ring-teal-accent" : "tw-ring-hr-line-color", " tw-ring-2 tw-relative tw-aspect-square tw-text-center tw-px-5 tw-max-w-[220px] tw-py-7 tw-bg-grey tw-items-center tw-justify-center tw-flex-1 tw-rounded-md ").concat(a || "avatar" !== e.value ? "tw-cursor-pointer" : "tw-opacity-50 tw-cursor-not-allowed tw-pointer-events-none")
                    }, n.createElement("span", {
                        className: "\n                  ".concat(t ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6 tw-absolute tw-top-3 tw-right-3 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                    }, t ? n.createElement(c.M2, {
                        icon: r.e6
                    }) : null), n.createElement("img", {
                        src: e.image,
                        alt: e.label,
                        className: "tw-rounded-full tw-bg-gray-700 tw-aspect-square tw-w-[100px] tw-mb-3"
                    }), n.createElement("p", {
                        className: "tw-mb-1"
                    }, e.label), n.createElement("small", {
                        className: "tw-m-0 tw-text-xs"
                    }, n.createElement("p", {
                        className: "tw-mb-1 tw-text-light-grey"
                    }, e.text), n.createElement("a", {
                        className: "tw-text-teal",
                        href: e.redirect,
                        target: "_blank",
                        rel: "noreferrer"
                    }, "Learn More")))
                })), n.createElement(c.fv, {
                    className: "tw-mt-8 tw-gap-3 md:tw-flex-row"
                }, n.createElement(c.$n, {
                    containerClasses: "tw-flex-1",
                    onClick: i,
                    neutral: !0
                }, "Close"), n.createElement(c.$n, {
                    containerClasses: "tw-flex-1",
                    onClick: w,
                    disabled: !p || "avatar" === p && !a
                }, "Next")))
            }
        }
    }
]);
//# sourceMappingURL=17e11da964823da95c24c67520c4d6d42a36d1a9d0cf12e5676843c2b4b27d78.js.map