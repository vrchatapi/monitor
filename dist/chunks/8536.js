"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8536], {
        18536: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => i
            });
            var r = a(68055),
                l = a(67294),
                n = a(32981),
                c = a(96985),
                o = a(43683),
                s = a(95679),
                w = a.n(s),
                u = a(67511),
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
                    d = (0, n.I0)(),
                    p = (0, n.v9)((function(e) {
                        return e.productFlow.productType
                    }));
                return l.createElement(c.JX, null, l.createElement("p", null, "Choose the type of product you’d like to create:"), l.createElement(c.JX, {
                    className: "tw-gap-5 tw-items-center md:tw-items-stretch md:tw-flex-row md:tw-justify-center"
                }, m.map((function(e) {
                    var t = p === e.value;
                    return l.createElement(c.JX, {
                        key: e.value,
                        onClick: function() {
                            return function(e) {
                                d((0, o.WB)(e))
                            }(e.value)
                        },
                        className: "".concat(t ? "tw-ring-teal-accent" : "tw-ring-hr-line-color", " tw-ring-2 tw-relative tw-aspect-square tw-text-center tw-px-5 tw-max-w-[220px] tw-py-7 tw-bg-grey tw-items-center tw-justify-center tw-flex-1 tw-rounded-md ").concat(a || "avatar" !== e.value ? "tw-cursor-pointer" : "tw-opacity-50 tw-cursor-not-allowed tw-pointer-events-none")
                    }, l.createElement("span", {
                        className: "\n                  ".concat(t ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6 tw-absolute tw-top-3 tw-right-3 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                    }, t ? l.createElement(c.$1, {
                        icon: r.LE
                    }) : null), l.createElement("img", {
                        src: e.image,
                        alt: e.label,
                        className: "tw-rounded-full tw-bg-gray-700 tw-aspect-square tw-w-[100px] tw-mb-3"
                    }), l.createElement("p", {
                        className: "tw-mb-1"
                    }, e.label), l.createElement("small", {
                        className: "tw-m-0 tw-text-xs"
                    }, l.createElement("p", {
                        className: "tw-mb-1 tw-text-light-grey"
                    }, e.text), l.createElement("a", {
                        className: "tw-text-teal",
                        href: e.redirect,
                        target: "_blank",
                        rel: "noreferrer"
                    }, "Learn More")))
                }))), l.createElement(c.JX, {
                    className: "tw-mt-8 tw-gap-3 md:tw-flex-row"
                }, l.createElement(c.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: i,
                    neutral: !0
                }, "Close"), l.createElement(c.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: w,
                    disabled: !p || "avatar" === p && !a
                }, "Next")))
            }
        }
    }
]);
//# sourceMappingURL=ac23026d7f7800e35f5cdfec7463b65e302966739a7ea36034c4836f0f825ba5.js.map