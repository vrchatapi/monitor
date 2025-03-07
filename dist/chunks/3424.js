"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3424], {
        36678: (t, e, a) => {
            a.d(e, {
                Z: () => w
            });
            var r = a(54546),
                l = a(67294),
                n = [{
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
            const w = function(t) {
                var e = t.children,
                    a = t.showCredits,
                    w = (0, l.useState)(null),
                    s = (0, r.Z)(w, 2),
                    o = s[0],
                    i = s[1],
                    c = (0, l.useState)(null),
                    m = (0, r.Z)(c, 2),
                    u = m[0],
                    h = m[1];
                (0, l.useEffect)((function() {
                    if (null === o) i(n[0]);
                    else {
                        var t = d(o);
                        setTimeout((function() {
                            return i(t)
                        }), 1e4), h(t)
                    }
                }), [o]);
                var d = function(t) {
                    var e = n.findIndex((function(e) {
                        return e.imagePath === t.imagePath
                    }));
                    return e === n.length - 1 ? n[0] : n[e + 1]
                };
                return l.createElement("div", {
                    className: " tw-transition-all tw-duration-1000 tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-flex tw-flex-col tw-justify-center tw-items-center ",
                    style: {
                        backgroundImage: null === o ? "none" : "url(".concat(o.imagePath, ")")
                    }
                }, l.createElement("div", {
                    className: "tw-relative tw-p-5 xl:tw-absolute xl:tw-top-[50px] xl:tw-left-12"
                }, l.createElement("a", {
                    href: "https://vrchat.com",
                    target: "_blank",
                    rel: "noreferrer"
                }, l.createElement("img", {
                    className: "tw-w-[170px] tw-h-[75px]",
                    src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png",
                    alt: "VRChat"
                }), l.createElement("img", {
                    className: "tw-hidden",
                    src: null == u ? void 0 : u.imagePath,
                    alt: "VRChat"
                }))), l.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, e), (null == o ? void 0 : o.worldName) && a && l.createElement("div", {
                    className: " tw-relative tw-text-sm tw-w-full xl:tw-absolute xl:tw-top-16 xl:tw-right-0 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-3 xl:tw-rounded-s-lg"
                }, l.createElement("p", {
                    className: "tw-text-right mb-0"
                }, l.createElement("strong", null, "World:"), " ", o.worldName), l.createElement("p", {
                    className: "tw-text-right mb-0"
                }, l.createElement("strong", null, "Author:"), " ", o.authorName)))
            }
        },
        13424: (t, e, a) => {
            a.r(e), a.d(e, {
                default: () => i
            });
            var r = a(20495),
                l = a(67294),
                n = a(86646),
                w = a(85533),
                s = a(60006),
                o = a(36678);
            const i = function() {
                return l.createElement(o.Z, null, l.createElement(w.Z, null, "Verification Failed"), l.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-px-2 tw-py-20 md:tw-px-[100px] tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, l.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, l.createElement("div", {
                    className: "tw-mb-5"
                }, l.createElement(n.Z, {
                    icon: r.faCircleExclamation,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), l.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Verification Failed"), l.createElement("p", {
                    className: "tw-text-center tw-mb-0"
                }, "The link you followed is either invalid, or you are already verified. Please log in and request a new verification link if prompted."), l.createElement(s.Qj, {
                    to: "/home/login",
                    className: "tw-mt-9 tw-w-60"
                }, "Back to login"))))
            }
        }
    }
]);
//# sourceMappingURL=cc23e69d89d57edf7981f611799cb734af63ed97368fccc0ebe6ed5c78469d41.js.map