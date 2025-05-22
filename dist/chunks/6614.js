"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6614], {
        21707: (e, t, a) => {
            var r = a(53359);
            t.DF = {
                prefix: r.prefix,
                iconName: r.iconName,
                icon: [r.width, r.height, r.aliases, r.unicode, r.svgPathData]
            }, t.e7 = t.DF, r.prefix, r.iconName, r.width, r.height, r.aliases, r.unicode, r.svgPathData, r.aliases
        },
        55549: (e, t, a) => {
            a.d(t, {
                Z: () => d
            });
            var r = a(54546),
                n = a(21707),
                i = a(20495),
                s = a(6811),
                o = a(67294),
                c = a(37463),
                l = a(86646),
                u = a(79442),
                w = a(60006);
            const d = function(e) {
                var t = e.status,
                    a = e.error,
                    d = e.groupId,
                    m = e.code,
                    h = e.className,
                    p = (0, u.nv)(),
                    g = (0, r.Z)(p, 2),
                    f = g[0],
                    v = g[1],
                    x = v.isFetching,
                    b = v.isError,
                    y = v.isSuccess,
                    E = (0, u.W3)(),
                    N = (0, r.Z)(E, 2),
                    k = N[0],
                    P = N[1],
                    q = P.isFetching,
                    I = P.isError,
                    _ = P.isSuccess,
                    S = (0, o.useMemo)((function() {
                        var e;
                        if (a) {
                            var r, o;
                            switch (a.status) {
                                case 404:
                                    o = "Your inquiry was not found.";
                                    break;
                                case 400:
                                    o = function(e) {
                                        switch (e.replace("retry_", "")) {
                                            case "personaFailed":
                                                return "Persona could not verify your identity.";
                                            case "noBirthdate":
                                                return "No birth date received from Persona.";
                                            case "noBirthdateChange":
                                                return "No change in birth date was detected.";
                                            case "invalidDate":
                                                return "Invalid date received from Persona.";
                                            case "hashUsed":
                                                return "Your identification data is already in use on another account.";
                                            default:
                                                return "An unknown error occurred while processing your inquiry."
                                        }
                                    }(null === (e = a.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.error_code);
                                    break;
                                case 429:
                                    o = "Too many users are trying to get age verified right now!\nPlease refresh the page in a few minutes.";
                                    break;
                                default:
                                    o = "An unknown error occurred while processing your inquiry."
                            }
                            return null !== (r = a.data) && void 0 !== r && null !== (r = r.error) && void 0 !== r && null !== (r = r.error_code) && void 0 !== r && r.startsWith("retry_") ? {
                                message: "".concat(o, "\n\nWe have sent you an email with instructions on how to retry the process."),
                                icon: i.faCircleExclamation,
                                status: "Verification Error"
                            } : {
                                message: o,
                                icon: i.faCircleExclamation,
                                status: "Verification Error",
                                buttonLink: "https://vrch.at/support",
                                buttonText: "Contact Support"
                            }
                        }
                        if (t) switch (t.status) {
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
                                    icon: n.e7, status: "Verification Pending", message: "Your verification with Persona is incomplete.\n\nReturn to the verification link sent to your email,\nor press the button below to receive the email again.", showResendButton: !0
                                }
                        }
                    }), [t, a]);
                return o.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center ".concat(h)
                }, o.createElement("div", {
                    className: "tw-mb-5"
                }, o.createElement(l.Z, {
                    icon: S.icon,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), o.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, S.status), o.createElement("p", {
                    className: "tw-text-center tw-mb-0 tw-whitespace-break-spaces"
                }, S.message), S.buttonLink && o.createElement(w.Qj, {
                    to: S.buttonLink,
                    className: "tw-mt-9 tw-w-60"
                }, S.buttonText), S.showResendButton && o.createElement(o.Fragment, null, o.createElement(c.zx, {
                    className: "tw-flex-none tw-mt-9 tw-px-4",
                    disabled: x || y || q || _,
                    onClick: function() {
                        return d && m ? k({
                            groupId: d,
                            code: m
                        }) : f()
                    }
                }, y || _ ? "Sent!" : "Resend Age Verification Email"), (b || I) && o.createElement("p", {
                    role: "alert",
                    "aria-label": "Resend age verification email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mt-1"
                }, "An error occurred when trying to resend age verification email.")))
            }
        },
        66614: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => d
            });
            var r = a(54546),
                n = a(67294),
                i = a(79655),
                s = a(85533),
                o = a(43862),
                c = a(36678),
                l = a(17383),
                u = a(79442),
                w = a(55549);
            const d = function() {
                var e = (0, i.lr)(),
                    t = (0, r.Z)(e, 1)[0].get("inquiry-id"),
                    a = (0, u.MI)({
                        inquiryId: t
                    }),
                    d = a.data,
                    m = a.isFetching,
                    h = a.error,
                    p = a.refetch,
                    g = "completed" === (null == d ? void 0 : d.status) || "needs_review" === (null == d ? void 0 : d.status);
                return (0, l.Yz)(p, g ? 3e3 : null), n.createElement(c.Z, null, n.createElement(s.Z, null, "Age Verification Status"), m || g ? n.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-px-2 tw-py-20 md:tw-px-[100px] tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, n.createElement("div", {
                    className: "tw-mb-5 tw-flex tw-items-center tw-justify-center"
                }, n.createElement(o.Z, {
                    size: "4x"
                })), n.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Please Wait"), n.createElement("p", {
                    className: "tw-text-center tw-mb-0 tw-whitespace-break-spaces"
                }, "Please remain on this page while your profile is being updated.", n.createElement("br", null), "This can take up to a couple of minutes.")) : n.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-px-2 tw-py-20 md:tw-px-[100px] tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, n.createElement(w.Z, {
                    status: d,
                    error: h
                })))
            }
        },
        43862: (e, t, a) => {
            a.d(t, {
                Z: () => c
            });
            var r = a(45987),
                n = a(92332),
                i = a(67294),
                s = a(86646),
                o = ["hidden", "size"];
            const c = function(e) {
                var t = e.hidden,
                    a = e.size,
                    c = void 0 === a ? "2x" : a,
                    l = (0, r.Z)(e, o);
                return i.createElement("div", l, i.createElement(s.Z, {
                    icon: n.LM,
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
            var r = a(54546),
                n = a(67294),
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
                    s = (0, n.useState)(null),
                    o = (0, r.Z)(s, 2),
                    c = o[0],
                    l = o[1],
                    u = (0, n.useState)(null),
                    w = (0, r.Z)(u, 2),
                    d = w[0],
                    m = w[1];
                (0, n.useEffect)((function() {
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
                return n.createElement("div", {
                    className: " tw-transition-all tw-duration-1000 tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-flex tw-flex-col tw-justify-center tw-items-center ",
                    style: {
                        backgroundImage: null === c ? "none" : "url(".concat(c.imagePath, ")")
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
                    src: null == d ? void 0 : d.imagePath,
                    alt: "VRChat"
                }))), n.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, t), (null == c ? void 0 : c.worldName) && a && n.createElement("div", {
                    className: " tw-relative tw-text-sm tw-w-full xl:tw-absolute xl:tw-top-16 xl:tw-right-0 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-3 xl:tw-rounded-s-lg"
                }, n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "World:"), " ", c.worldName), n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "Author:"), " ", c.authorName)))
            }
        },
        79442: (e, t, a) => {
            a.d(t, {
                HI: () => i,
                MI: () => n,
                W3: () => s,
                nv: () => o
            });
            var r = a(61509).S.injectEndpoints({
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
                            sendGroupInquiryLink: e.mutation({
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
                            }),
                            sendInquiryLink: e.mutation({
                                query: function() {
                                    return {
                                        url: "/ageVerification/sendInquiryLink",
                                        method: "POST"
                                    }
                                }
                            })
                        }
                    }
                }),
                n = r.useGetAgeVerificationInquiryStatusQuery,
                i = r.useGetAgeVerificationStatusQuery,
                s = r.useSendGroupInquiryLinkMutation,
                o = r.useSendInquiryLinkMutation
        }
    }
]);
//# sourceMappingURL=4b200eec2a5e87d3a7c3cbb6a1197c88262565aa0fca340f894d664c16090188.js.map