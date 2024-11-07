"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3171], {
        36678: (t, e, a) => {
            a.d(e, {
                Z: () => s
            });
            var r = a(54546),
                n = a(67294),
                l = [{
                    worldName: "Horse Mountain",
                    authorName: "nprowler",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_1.png"
                }, {
                    worldName: "Instagib Tournament",
                    authorName: "ville672",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_2.png"
                }, {
                    worldName: "Gumball Lounge",
                    authorName: "screamingcolor",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_3.png"
                }, {
                    worldName: "Exoplanet Journey",
                    authorName: "Niko*",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_4.png"
                }, {
                    worldName: "Dusk",
                    authorName: "Lucifer MStar",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_5.png"
                }, {
                    worldName: "Amber Glade - Winter",
                    authorName: "Mankey",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_6.png"
                }].sort((function() {
                    return Math.random() - .5
                }));
            const s = function(t) {
                var e = t.children,
                    a = t.showCredits,
                    s = (0, n.useState)(null),
                    w = (0, r.Z)(s, 2),
                    o = w[0],
                    c = w[1],
                    m = (0, n.useState)(null),
                    i = (0, r.Z)(m, 2),
                    h = i[0],
                    u = i[1];
                (0, n.useEffect)((function() {
                    if (null === o) c(l[0]);
                    else {
                        var t = g(o);
                        setTimeout((function() {
                            return c(t)
                        }), 1e4), u(t)
                    }
                }), [o]);
                var g = function(t) {
                    var e = l.findIndex((function(e) {
                        return e.imagePath === t.imagePath
                    }));
                    return e === l.length - 1 ? l[0] : l[e + 1]
                };
                return n.createElement("div", {
                    className: " tw-transition-all tw-duration-1000 tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-flex tw-flex-col tw-justify-center tw-items-center ",
                    style: {
                        backgroundImage: null === o ? "none" : "url(".concat(o.imagePath, ")")
                    }
                }, n.createElement("div", {
                    className: "tw-relative tw-p-5 xl:tw-absolute xl:tw-top-[50px] xl:tw-left-12"
                }, n.createElement("a", {
                    href: "https://vrchat.com",
                    target: "_blank",
                    rel: "noreferrer"
                }, n.createElement("img", {
                    className: "tw-w-[170px] tw-h-[75px]",
                    src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png",
                    alt: "VRChat"
                }), n.createElement("img", {
                    className: "tw-hidden",
                    src: null == h ? void 0 : h.imagePath,
                    alt: "VRChat"
                }))), n.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, e), (null == o ? void 0 : o.worldName) && a && n.createElement("div", {
                    className: " tw-relative tw-text-sm tw-w-full xl:tw-absolute xl:tw-top-16 xl:tw-right-0 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-3 xl:tw-rounded-s-lg"
                }, n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "World:"), " ", o.worldName), n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "Author:"), " ", o.authorName)))
            }
        },
        53171: (t, e, a) => {
            a.r(e), a.d(e, {
                default: () => c
            });
            var r = a(16686),
                n = a(67294),
                l = a(60006),
                s = a(86646),
                w = a(85533),
                o = a(36678);
            const c = function() {
                return n.createElement(o.Z, null, n.createElement(w.Z, null, "Verification Success"), n.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-py-20 tw-px-[100px] tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, n.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, n.createElement("div", {
                    className: "tw-mb-5"
                }, n.createElement(s.Z, {
                    icon: r.faCircleCheck,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), n.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Verification Success"), n.createElement("p", {
                    className: "tw-text-center tw-mb-0"
                }, "You can now try logging in again with the VRChat Client, or head over to the website homepage."), n.createElement(l.Qj, {
                    to: "/home",
                    className: "tw-mt-9 tw-w-60"
                }, "Back to home"))))
            }
        }
    }
]);
//# sourceMappingURL=b4c14aa256485ff7d664be825114e30c38be7de68deb7c53e507c630ffe031bf.js.map