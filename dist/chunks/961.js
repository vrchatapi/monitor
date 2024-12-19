"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [961], {
        21707: (e, t, a) => {
            var n = a(53359);
            t.DF = {
                prefix: n.prefix,
                iconName: n.iconName,
                icon: [n.width, n.height, n.aliases, n.unicode, n.svgPathData]
            }, t.e7 = t.DF, n.prefix, n.iconName, n.width, n.height, n.aliases, n.unicode, n.svgPathData, n.aliases
        },
        50961: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => g
            });
            var n = a(54546),
                r = a(21707),
                i = a(20495),
                s = a(6811),
                o = a(67294),
                c = a(79655),
                l = a(86646),
                u = a(85533),
                w = a(43862),
                d = a(36678),
                m = a(12752),
                h = a(79442),
                p = a(60006);
            const g = function() {
                var e = (0, c.lr)(),
                    t = (0, n.Z)(e, 1)[0].get("inquiry-id"),
                    a = (0, h.MI)({
                        inquiryId: t
                    }),
                    g = a.data,
                    f = a.isFetching,
                    v = a.error,
                    x = a.refetch,
                    b = "completed" === (null == g ? void 0 : g.status) || "needs_review" === (null == g ? void 0 : g.status);
                (0, m.Yz)(x, b ? 3e3 : null);
                var y = (0, o.useMemo)((function() {
                    var e, a;
                    if (v) {
                        var n;
                        switch (v.status) {
                            case 404:
                                n = "Your inquiry was not found.";
                                break;
                            case 400:
                                n = "No birth date change" === (null === (e = v.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message) ? "No change in birth date was detected." : "Identification data already in use" === (null === (a = v.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) ? "Your identification data is already in use on another account." : "An unknown error occurred while processing your inquiry.";
                                break;
                            case 429:
                                n = "Too many users are trying to get age verified right now!\nPlease refresh the page in a few minutes.";
                                break;
                            default:
                                n = "An unknown error occurred while processing your inquiry."
                        }
                        return {
                            message: n,
                            icon: i.faCircleExclamation,
                            status: "Verification Error",
                            buttonLink: "https://vrch.at/support",
                            buttonText: "Contact Support"
                        }
                    }
                    if (g) switch (g.status) {
                        case "verified":
                        case "approved":
                            return {
                                icon: s.f8, status: "Verification Complete", message: "You have successfully verified your age with Persona.\nYour profile data has been updated.", buttonLink: "/home/user/me", buttonText: "View Your Profile"
                            };
                        case "failed":
                        case "declined":
                            return {
                                icon: i.faCircleExclamation, status: "Verification Failed", message: "Persona could not verify your identity.", buttonLink: "https://vrch.at/support", buttonText: "Contact Support"
                            };
                        default:
                            return {
                                icon: r.e7, status: "Verification Pending", message: "Your verification with Persona is incomplete.\nPlease click the button below to resume the process.", buttonLink: "https://inquiry.withpersona.com/verify?inquiry-id=".concat(t), buttonText: "Verify With Persona"
                            }
                    }
                }), [g, v]);
                return o.createElement(d.Z, null, o.createElement(u.Z, null, "Age Verification Status"), f || b ? o.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-px-2 tw-py-20 md:tw-px-[100px] tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, o.createElement("div", {
                    className: "tw-mb-5 tw-flex tw-items-center tw-justify-center"
                }, o.createElement(w.Z, {
                    size: "4x"
                })), o.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Please Wait"), o.createElement("p", {
                    className: "tw-text-center tw-mb-0 tw-whitespace-break-spaces"
                }, "Please remain on this page while your profile is being updated.", o.createElement("br", null), "This can take up to a couple of minutes.")) : o.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-px-2 tw-py-20 md:tw-px-[100px] tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, o.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, o.createElement("div", {
                    className: "tw-mb-5"
                }, o.createElement(l.Z, {
                    icon: y.icon,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), o.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, y.status), o.createElement("p", {
                    className: "tw-text-center tw-mb-0 tw-whitespace-break-spaces"
                }, y.message), y.buttonLink && o.createElement(p.Qj, {
                    to: y.buttonLink,
                    className: "tw-mt-9 tw-w-60"
                }, y.buttonText))))
            }
        },
        43862: (e, t, a) => {
            a.d(t, {
                Z: () => c
            });
            var n = a(45987),
                r = a(92332),
                i = a(67294),
                s = a(86646),
                o = ["hidden", "size"];
            const c = function(e) {
                var t = e.hidden,
                    a = e.size,
                    c = void 0 === a ? "2x" : a,
                    l = (0, n.Z)(e, o);
                return i.createElement("div", l, i.createElement(s.Z, {
                    icon: r.LM,
                    size: c,
                    hidden: t,
                    spin: !0,
                    pulse: !0
                }))
            }
        },
        36678: (e, t, a) => {
            a.d(t, {
                Z: () => s
            });
            var n = a(54546),
                r = a(67294),
                i = [{
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
            const s = function(e) {
                var t = e.children,
                    a = e.showCredits,
                    s = (0, r.useState)(null),
                    o = (0, n.Z)(s, 2),
                    c = o[0],
                    l = o[1],
                    u = (0, r.useState)(null),
                    w = (0, n.Z)(u, 2),
                    d = w[0],
                    m = w[1];
                (0, r.useEffect)((function() {
                    if (null === c) l(i[0]);
                    else {
                        var e = h(c);
                        setTimeout((function() {
                            return l(e)
                        }), 1e4), m(e)
                    }
                }), [c]);
                var h = function(e) {
                    var t = i.findIndex((function(t) {
                        return t.imagePath === e.imagePath
                    }));
                    return t === i.length - 1 ? i[0] : i[t + 1]
                };
                return r.createElement("div", {
                    className: " tw-transition-all tw-duration-1000 tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-flex tw-flex-col tw-justify-center tw-items-center ",
                    style: {
                        backgroundImage: null === c ? "none" : "url(".concat(c.imagePath, ")")
                    }
                }, r.createElement("div", {
                    className: "tw-relative tw-p-5 xl:tw-absolute xl:tw-top-[50px] xl:tw-left-12"
                }, r.createElement("a", {
                    href: "https://vrchat.com",
                    target: "_blank",
                    rel: "noreferrer"
                }, r.createElement("img", {
                    className: "tw-w-[170px] tw-h-[75px]",
                    src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png",
                    alt: "VRChat"
                }), r.createElement("img", {
                    className: "tw-hidden",
                    src: null == d ? void 0 : d.imagePath,
                    alt: "VRChat"
                }))), r.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, t), (null == c ? void 0 : c.worldName) && a && r.createElement("div", {
                    className: " tw-relative tw-text-sm tw-w-full xl:tw-absolute xl:tw-top-16 xl:tw-right-0 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-3 xl:tw-rounded-s-lg"
                }, r.createElement("p", {
                    className: "tw-text-right mb-0"
                }, r.createElement("strong", null, "World:"), " ", c.worldName), r.createElement("p", {
                    className: "tw-text-right mb-0"
                }, r.createElement("strong", null, "Author:"), " ", c.authorName)))
            }
        },
        79442: (e, t, a) => {
            a.d(t, {
                HI: () => i,
                MI: () => r,
                nv: () => s
            });
            var n = a(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getAgeVerificationInquiryStatus: e.query({
                                query: function(e) {
                                    var t = e.inquiryId;
                                    return "/ageVerification/status/".concat(t)
                                }
                            }),
                            getAgeVerificationStatus: e.query({
                                query: function() {
                                    return "/ageVerification/status"
                                }
                            }),
                            sendInquiryLink: e.mutation({
                                query: function(e) {
                                    var t = e.groupId,
                                        a = e.code;
                                    return {
                                        url: "/ageVerification/groups/".concat(t, "/sendInquiryLink"),
                                        method: "POST",
                                        body: {
                                            code: a
                                        }
                                    }
                                }
                            })
                        }
                    }
                }),
                r = n.useGetAgeVerificationInquiryStatusQuery,
                i = n.useGetAgeVerificationStatusQuery,
                s = n.useSendInquiryLinkMutation
        }
    }
]);
//# sourceMappingURL=fc6cd05ab869c2f21cb52b5c85a334ef2e11be212e3c94fd6897594a8946dc43.js.map