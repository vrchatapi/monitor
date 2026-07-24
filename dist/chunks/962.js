"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [962], {
        48645(e, t, r) {
            var n = r(82628);
            t.mw = {
                prefix: n.prefix,
                iconName: n.iconName,
                icon: [n.width, n.height, n.aliases, n.unicode, n.svgPathData]
            }, t.QJ = t.mw, n.prefix, n.iconName, n.width, n.height, n.aliases, n.unicode, n.svgPathData, n.aliases
        },
        36823(e, t, r) {
            r.d(t, {
                A: () => w
            });
            var n = r(82544),
                a = r(48645),
                i = r(85044),
                s = r(42217),
                o = r(96540),
                c = r(71661),
                u = r(6324),
                l = r(29281),
                d = r(24751);
            const w = function(e) {
                var t = e.status,
                    r = e.error,
                    w = e.groupId,
                    m = e.code,
                    f = e.className,
                    h = (0, l.AP)(),
                    p = (0, n.A)(h, 2),
                    g = p[0],
                    y = p[1],
                    v = y.isFetching,
                    x = y.isError,
                    b = y.isSuccess,
                    k = (0, l.J_)(),
                    E = (0, n.A)(k, 2),
                    q = E[0],
                    A = E[1],
                    N = A.isFetching,
                    P = A.isError,
                    S = A.isSuccess,
                    V = (0, o.useMemo)(function() {
                        var e;
                        if (r) {
                            var n, o;
                            switch (r.status) {
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
                                    }(null === (e = r.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.error_code);
                                    break;
                                case 429:
                                    o = "Too many users are trying to get age verified right now!\nPlease refresh the page in a few minutes.";
                                    break;
                                default:
                                    o = "An unknown error occurred while processing your inquiry."
                            }
                            return null !== (n = r.data) && void 0 !== n && null !== (n = n.error) && void 0 !== n && null !== (n = n.error_code) && void 0 !== n && n.startsWith("retry_") ? {
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
                                    icon: s.SG, status: "Verification Complete", message: "You have successfully verified your age with Persona.\nYour profile data has been updated.", buttonLink: "/home/user/me", buttonText: "View Your Profile"
                                };
                            case "failed":
                            case "declined":
                                return {
                                    icon: i.faCircleExclamation, status: "Verification Failed", message: "Persona could not verify your identity.", buttonLink: "https://vrch.at/support", buttonText: "Contact Support"
                                };
                            default:
                                return {
                                    icon: a.QJ, status: "Verification Pending", message: "Your verification with Persona is incomplete.\n\nReturn to the verification link sent to your email,\nor press the button below to receive the email again.", showResendButton: !0
                                }
                        }
                    }, [t, r]);
                return o.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center ".concat(f)
                }, o.createElement("div", {
                    className: "tw-mb-5"
                }, o.createElement(u.A, {
                    icon: V.icon,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), o.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, V.status), o.createElement("p", {
                    className: "tw-text-center tw-mb-0 tw-whitespace-break-spaces"
                }, V.message), V.buttonLink && o.createElement(d.z9, {
                    to: V.buttonLink,
                    className: "tw-mt-9 tw-w-60"
                }, V.buttonText), V.showResendButton && o.createElement(o.Fragment, null, o.createElement(c.$n, {
                    className: "tw-flex-none tw-mt-9 tw-px-4",
                    disabled: v || b || N || S,
                    onClick: function() {
                        return w && m ? q({
                            groupId: w,
                            code: m
                        }) : g()
                    }
                }, b || S ? "Sent!" : "Resend Age Verification Email"), (x || P) && o.createElement("p", {
                    role: "alert",
                    "aria-label": "Resend age verification email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mt-1"
                }, "An error occurred when trying to resend age verification email.")))
            }
        },
        60962(e, t, r) {
            r.r(t), r.d(t, {
                default: () => w
            });
            var n = r(82544),
                a = r(96540),
                i = r(84976),
                s = r(45662),
                o = r(25538),
                c = r(84212),
                u = r(78502),
                l = r(29281),
                d = r(36823);
            const w = function() {
                var e = (0, i.ok)(),
                    t = (0, n.A)(e, 1)[0].get("inquiry-id"),
                    r = (0, l.hS)({
                        inquiryId: t
                    }),
                    w = r.data,
                    m = r.isFetching,
                    f = r.error,
                    h = r.refetch,
                    p = "completed" === (null == w ? void 0 : w.status) || "needs_review" === (null == w ? void 0 : w.status);
                return (0, u.$$)(h, p ? 3e3 : null), a.createElement(c.A, null, a.createElement(s.A, null, "Age Verification Status"), m || p ? a.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-px-2 tw-py-20 md:tw-px-[100px] tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, a.createElement("div", {
                    className: "tw-mb-5 tw-flex tw-items-center tw-justify-center"
                }, a.createElement(o.A, {
                    size: "4x"
                })), a.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Please Wait"), a.createElement("p", {
                    className: "tw-text-center tw-mb-0 tw-whitespace-break-spaces"
                }, "Please remain on this page while your profile is being updated.", a.createElement("br", null), "This can take up to a couple of minutes.")) : a.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-px-2 tw-py-20 md:tw-px-[100px] tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, a.createElement(d.A, {
                    status: w,
                    error: f
                })))
            }
        },
        29281(e, t, r) {
            r.d(t, {
                AP: () => o,
                CV: () => i,
                J_: () => s,
                hS: () => a
            });
            var n = r(89483).m.injectEndpoints({
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
                                        r = e.code;
                                    return {
                                        url: "/ageVerification/groups/".concat(t, "/sendInquiryLink"),
                                        method: "POST",
                                        body: {
                                            code: r
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
                a = n.useGetAgeVerificationInquiryStatusQuery,
                i = n.useGetAgeVerificationStatusQuery,
                s = n.useSendGroupInquiryLinkMutation,
                o = n.useSendInquiryLinkMutation
        }
    }
]);
//# sourceMappingURL=b1a99a71609b36b189f2338a8d66319b76b8288a017caec3fefe91cbb17cd8bd.js.map