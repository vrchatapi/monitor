"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6614], {
        21707: (e, t, r) => {
            var n = r(53359);
            t.DF = {
                prefix: n.prefix,
                iconName: n.iconName,
                icon: [n.width, n.height, n.aliases, n.unicode, n.svgPathData]
            }, t.e7 = t.DF, n.prefix, n.iconName, n.width, n.height, n.aliases, n.unicode, n.svgPathData, n.aliases
        },
        55549: (e, t, r) => {
            r.d(t, {
                Z: () => w
            });
            var n = r(54546),
                a = r(21707),
                i = r(20495),
                s = r(6811),
                o = r(67294),
                c = r(96985),
                u = r(86646),
                l = r(79442),
                d = r(60006);
            const w = function(e) {
                var t = e.status,
                    r = e.error,
                    w = e.groupId,
                    m = e.code,
                    f = e.className,
                    p = (0, l.nv)(),
                    h = (0, n.Z)(p, 2),
                    g = h[0],
                    y = h[1],
                    v = y.isFetching,
                    x = y.isError,
                    b = y.isSuccess,
                    E = (0, l.W3)(),
                    k = (0, n.Z)(E, 2),
                    q = k[0],
                    N = k[1],
                    I = N.isFetching,
                    V = N.isError,
                    P = N.isSuccess,
                    S = (0, o.useMemo)((function() {
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
                                    icon: s.f8, status: "Verification Complete", message: "You have successfully verified your age with Persona.\nYour profile data has been updated.", buttonLink: "/home/user/me", buttonText: "View Your Profile"
                                };
                            case "failed":
                            case "declined":
                                return {
                                    icon: i.faCircleExclamation, status: "Verification Failed", message: "Persona could not verify your identity.", buttonLink: "https://vrch.at/support", buttonText: "Contact Support"
                                };
                            default:
                                return {
                                    icon: a.e7, status: "Verification Pending", message: "Your verification with Persona is incomplete.\n\nReturn to the verification link sent to your email,\nor press the button below to receive the email again.", showResendButton: !0
                                }
                        }
                    }), [t, r]);
                return o.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center ".concat(f)
                }, o.createElement("div", {
                    className: "tw-mb-5"
                }, o.createElement(u.Z, {
                    icon: S.icon,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), o.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, S.status), o.createElement("p", {
                    className: "tw-text-center tw-mb-0 tw-whitespace-break-spaces"
                }, S.message), S.buttonLink && o.createElement(d.Qj, {
                    to: S.buttonLink,
                    className: "tw-mt-9 tw-w-60"
                }, S.buttonText), S.showResendButton && o.createElement(o.Fragment, null, o.createElement(c.zx, {
                    className: "tw-flex-none tw-mt-9 tw-px-4",
                    disabled: v || b || I || P,
                    onClick: function() {
                        return w && m ? q({
                            groupId: w,
                            code: m
                        }) : g()
                    }
                }, b || P ? "Sent!" : "Resend Age Verification Email"), (x || V) && o.createElement("p", {
                    role: "alert",
                    "aria-label": "Resend age verification email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mt-1"
                }, "An error occurred when trying to resend age verification email.")))
            }
        },
        66614: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => w
            });
            var n = r(54546),
                a = r(67294),
                i = r(79655),
                s = r(85533),
                o = r(43862),
                c = r(13887),
                u = r(83807),
                l = r(79442),
                d = r(55549);
            const w = function() {
                var e = (0, i.lr)(),
                    t = (0, n.Z)(e, 1)[0].get("inquiry-id"),
                    r = (0, l.MI)({
                        inquiryId: t
                    }),
                    w = r.data,
                    m = r.isFetching,
                    f = r.error,
                    p = r.refetch,
                    h = "completed" === (null == w ? void 0 : w.status) || "needs_review" === (null == w ? void 0 : w.status);
                return (0, u.Yz)(p, h ? 3e3 : null), a.createElement(c.Z, null, a.createElement(s.Z, null, "Age Verification Status"), m || h ? a.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-px-2 tw-py-20 md:tw-px-[100px] tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, a.createElement("div", {
                    className: "tw-mb-5 tw-flex tw-items-center tw-justify-center"
                }, a.createElement(o.Z, {
                    size: "4x"
                })), a.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Please Wait"), a.createElement("p", {
                    className: "tw-text-center tw-mb-0 tw-whitespace-break-spaces"
                }, "Please remain on this page while your profile is being updated.", a.createElement("br", null), "This can take up to a couple of minutes.")) : a.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-px-2 tw-py-20 md:tw-px-[100px] tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, a.createElement(d.Z, {
                    status: w,
                    error: f
                })))
            }
        },
        79442: (e, t, r) => {
            r.d(t, {
                HI: () => i,
                MI: () => a,
                W3: () => s,
                nv: () => o
            });
            var n = r(61509).S.injectEndpoints({
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
//# sourceMappingURL=d94069b8bf619f68a3e5ec60827e7befd2d2f1e6be7afc809e25d948648fb7b1.js.map