(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4586], {
        3820: (e, t) => {
            "use strict";
            var n = "clipboard",
                a = [128203],
                r = "f328",
                l = "M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [384, 512, a, r, l]
            }, t.Yj = t.DF
        },
        96157: (e, t) => {
            "use strict";
            var n = "infinity",
                a = [8734, 9854],
                r = "f534",
                l = "M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5L320 210.7l72.2-72.2C419.5 111.3 456.4 96 494.9 96C575 96 640 161 640 241.1l0 29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2C220.5 400.7 183.6 416 145.1 416C65 416 0 351 0 270.9l0-29.7zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8C100.3 160 64 196.3 64 241.1l0 29.7c0 44.8 36.3 81.1 81.1 81.1c21.5 0 42.2-8.5 57.4-23.8L274.7 256zm90.5 0l72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8c44.8 0 81.1-36.3 81.1-81.1l0-29.7c0-44.8-36.3-81.1-81.1-81.1c-21.5 0-42.2 8.5-57.4 23.8L365.3 256z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [640, 512, a, r, l]
            }, t.vq = t.DF
        },
        81143: (e, t) => {
            "use strict";
            var n = "pen-clip",
                a = ["pen-alt"],
                r = "f305",
                l = "M453.3 19.3l39.4 39.4c25 25 25 65.5 0 90.5l-52.1 52.1s0 0 0 0l-1-1s0 0 0 0l-16-16-96-96-17-17 52.1-52.1c25-25 65.5-25 90.5 0zM241 114.9c-9.4-9.4-24.6-9.4-33.9 0L105 217c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L173.1 81c28.1-28.1 73.7-28.1 101.8 0L288 94.1l17 17 96 96 16 16 1 1-17 17L229.5 412.5c-48 48-109.2 80.8-175.8 94.1l-25 5c-7.9 1.6-16-.9-21.7-6.6s-8.1-13.8-6.6-21.7l5-25c13.3-66.6 46.1-127.8 94.1-175.8L254.1 128 241 114.9z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, a, r, l]
            }, t.k8 = t.DF
        },
        81362: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var a = n(67294),
                r = n(53637),
                l = n(95305);
            const o = function(e) {
                var t = e.error,
                    n = e.statusCode;
                null == t && (t = "Something bad happened!"), "string" != typeof t && (console.error(t), t = t.message);
                var o = ["😭", "😿", "🙀", "😢", "🐸", "💔", "😖", "😣", "🐉", "🐦", "🤒", "🤕"];
                return a.createElement(r.Z, null, a.createElement(l.Z, {
                    xs: {
                        size: 4,
                        offset: 4
                    }
                }, a.createElement("h2", null, "VRChat"), a.createElement("p", null, "An error has occurred. To continue: "), a.createElement("p", null, "Press the F5 to refresh the website, or "), a.createElement("p", null, "Press the back button to leave the website, or "), a.createElement("p", null, "Check our ", a.createElement("a", {
                    href: "https://twitter.com/VRChat"
                }, "twitter"), "?", " "), a.createElement("p", null, "If issues persist, please close all open tabs of the website and try again! (", ["please don't hate us", "we're super sorry", "oops", "uh-oh", "whoopsie", "GAME-OVER!", "you hate to see it happen", "aw jeez", "not like this", "where did it all go wrong?", "we're trying our best", "no cap, on god", "we still love you!!"][Math.floor(Math.random() * o.length)], "! ", o[Math.floor(Math.random() * o.length)], ")"), a.createElement("code", null, n, " ", t)))
            }
        },
        98185: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var a = n(67294),
                r = n(81362),
                l = n(43862);
            const o = function(e) {
                var t = e.reducer,
                    n = e.loading,
                    o = e.loadingList,
                    i = e.error,
                    c = e.statusCode,
                    s = e.children,
                    u = e.className,
                    m = !1;
                return o && o.forEach((function(e) {
                    e && (m = !0)
                })), null != c && 200 !== c && "200" !== c ? a.createElement(r.Z, {
                    error: i,
                    statusCode: c
                }) : null != t && null != t.statusCode && 200 !== t.statusCode && "200" !== t.statusCode ? a.createElement(r.Z, {
                    error: t.error,
                    statusCode: t.statusCode
                }) : i ? a.createElement(r.Z, {
                    error: i
                }) : null != t && t.error ? a.createElement(r.Z, {
                    error: t.error
                }) : n || m || null != t && t.fetching || null != t && t.loading ? a.createElement(l.Z, {
                    className: "tw-mx-auto"
                }) : a.createElement("div", {
                    className: u
                }, s)
            }
        },
        34586: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => Ot
            });
            var a = n(4965),
                r = n(66062),
                l = n(67294),
                o = n(89250),
                i = n(79655),
                c = n(37463),
                s = n(54546),
                u = n(21429),
                m = n(17183),
                d = n(56646),
                p = n(81143),
                f = n(3820),
                g = n(27484),
                h = n.n(g),
                b = n(32981),
                w = n(53637),
                v = n(95305),
                y = n(35773),
                E = n(64258),
                x = n(17383),
                C = n(91557),
                _ = n(98185),
                N = n(4942),
                k = n(82414),
                S = n(83868),
                I = n.n(S);

            function P(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(n), !0).forEach((function(t) {
                        (0, N.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const Z = function(e) {
                var t, n, a, r, o, i, u, m, d, p, f = e.dispute,
                    g = e.disputeLoading,
                    h = e.contentId,
                    b = e.contentRestrictionId,
                    w = e.closeModal,
                    v = (0, l.useState)({}),
                    y = (0, s.Z)(v, 2),
                    E = y[0],
                    x = y[1],
                    C = (0, l.useState)({}),
                    _ = (0, s.Z)(C, 2),
                    S = _[0],
                    P = _[1],
                    Z = (null == S ? void 0 : S.mistake) && (null == S ? void 0 : S.consent) && (null == S ? void 0 : S.process),
                    O = I()(null !== (t = null == E ? void 0 : E.email) && void 0 !== t ? t : "") && (null == E || null === (n = E.fullName) || void 0 === n ? void 0 : n.length) > 0 && (null == E || null === (a = E.mailingAddress) || void 0 === a ? void 0 : a.length) > 0 && (null == E || null === (r = E.mailingCity) || void 0 === r ? void 0 : r.length) > 0 && (null == E || null === (o = E.mailingCountry) || void 0 === o ? void 0 : o.length) > 0 && (null == E || null === (i = E.phoneNumber) || void 0 === i ? void 0 : i.length) > 0 && (null == E || null === (u = E.signature) || void 0 === u ? void 0 : u.length) > 0 && Z && (null == E || null === (m = E.signature) || void 0 === m ? void 0 : m.toLowerCase()) === (null == E || null === (d = E.fullName) || void 0 === d ? void 0 : d.toLowerCase()),
                    j = function(e) {
                        P(D(D({}, S), {}, (0, N.Z)({}, e.target.id, e.target.checked)))
                    };
                return l.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, l.createElement("label", {
                    htmlFor: "claim-name",
                    className: "tw-mb-4"
                }, "Your Full Legal Name", l.createElement(c.II, {
                    className: "tw-pt-2",
                    id: "claim-name",
                    onChange: function(e) {
                        return x(D(D({}, E), {}, {
                            fullName: e.target.value
                        }))
                    },
                    value: null == E ? void 0 : E.fullName
                })), l.createElement("label", {
                    htmlFor: "user-org-name",
                    className: "tw-mb-4"
                }, "Name of your organization (optional)", l.createElement(c.II, {
                    className: "tw-pt-2",
                    id: "user-org-name",
                    type: "text",
                    value: null == E ? void 0 : E.organization,
                    onChange: function(e) {
                        return x(D(D({}, E), {}, {
                            organization: e.target.value
                        }))
                    }
                })), l.createElement("fieldset", {
                    className: "tw-flex tw-flex-col tw-mb-4 tw-p-2 tw-border tw-border-solid tw-border-light-grey tw-rounded"
                }, l.createElement("legend", null, "Mailing Address"), l.createElement("span", {
                    className: "tw-py-2 tw-block tw-text-sm tw-text-light-grey"
                }, "Please provide your complete postal address including street number, city, state/province, ZIP/postal code, and country."), l.createElement("label", {
                    htmlFor: "owner-mailing-address",
                    className: "tw-mb-4"
                }, "Street", l.createElement(c.II, {
                    id: "owner-mailing-address",
                    value: null == E ? void 0 : E.mailingAddress,
                    onChange: function(e) {
                        return x(D(D({}, E), {}, {
                            mailingAddress: e.target.value
                        }))
                    }
                })), l.createElement("div", {
                    className: "tw-flex tw-gap-4"
                }, l.createElement("label", {
                    htmlFor: "owner-mailing-city",
                    className: "tw-mb-4 tw-flex-grow"
                }, "City", l.createElement(c.II, {
                    id: "owner-mailing-city",
                    value: null == E ? void 0 : E.mailingCity,
                    onChange: function(e) {
                        return x(D(D({}, E), {}, {
                            mailingCity: e.target.value
                        }))
                    }
                })), l.createElement("label", {
                    htmlFor: "owner-mailing-state-province",
                    className: "tw-mb-4 tw-flex-grow"
                }, "State/Province", l.createElement(c.II, {
                    id: "owner-mailing-state-province",
                    value: null == E ? void 0 : E.mailingStateProvince,
                    onChange: function(e) {
                        return x(D(D({}, E), {}, {
                            mailingStateProvince: e.target.value
                        }))
                    }
                })), l.createElement("label", {
                    htmlFor: "owner-mailing-postal-code",
                    className: "tw-mb-4 tw-flex-grow"
                }, "ZIP/Postal Code", l.createElement(c.II, {
                    id: "owner-mailing-postal-code",
                    value: null == E ? void 0 : E.mailingPostalCode,
                    onChange: function(e) {
                        return x(D(D({}, E), {}, {
                            mailingPostalCode: e.target.value
                        }))
                    }
                }))), l.createElement("label", {
                    htmlFor: "owner-mailing-country"
                }, "Country", l.createElement(c.II, {
                    id: "owner-mailing-country",
                    value: null == E ? void 0 : E.mailingCountry,
                    onChange: function(e) {
                        return x(D(D({}, E), {}, {
                            mailingCountry: e.target.value
                        }))
                    }
                }))), l.createElement("label", {
                    htmlFor: "owner-phone",
                    className: "tw-mb-4"
                }, "Phone Number", l.createElement(c.II, {
                    className: "tw-pt-2",
                    id: "owner-phone",
                    type: "text",
                    value: null == E ? void 0 : E.phoneNumber,
                    onChange: function(e) {
                        return x(D(D({}, E), {}, {
                            phoneNumber: e.target.value
                        }))
                    }
                })), l.createElement("label", {
                    htmlFor: "owner-email",
                    className: "tw-mb-4"
                }, "Email", l.createElement(c.II, {
                    className: "tw-pt-2",
                    id: "owner-email",
                    type: "email",
                    value: null == E ? void 0 : E.email,
                    onChange: function(e) {
                        return x(D(D({}, E), {}, {
                            email: e.target.value
                        }))
                    }
                })), l.createElement(L, {
                    className: "tw-mb-4"
                }, l.createElement("h4", {
                    className: "tw-text-xl"
                }, "By checking these boxes I state that"), l.createElement(c.XZ, {
                    id: "mistake",
                    label: "\n            UNDER PENALTY OF PERJURY, I have good faith belief that my material\n            was removed or disabled as a result of mistake or misidentification.\n          ",
                    htmlFor: "mistake",
                    checked: null == S ? void 0 : S.mistake,
                    onChange: j
                }), l.createElement(c.XZ, {
                    id: "consent",
                    label: "\n            I consent to the jurisdiction of the Federal District Court for the judicial district\n            in which my address is located, or if my address is outside the United States,\n            any judicial district in which the service provider (VRChat Inc.) may be found\n            (the United States District Court for the Northern District of California).\n          ",
                    htmlFor: "consent",
                    checked: null == S ? void 0 : S.consent,
                    onChange: j
                }), l.createElement(c.XZ, {
                    id: "process",
                    label: "\n            I will accept service of process from the person who provided the\n            original DMCA notice or an agent of such person. \n          ",
                    htmlFor: "process",
                    checked: null == S ? void 0 : S.process,
                    onChange: j
                })), Z ? null : l.createElement("div", {
                    className: "tw-flex tw-items-center tw-bg-[#FF57671A] tw-mb-4 tw-rounded"
                }, l.createElement(c.$1, {
                    color: "#EE5454",
                    className: "tw-px-2",
                    icon: k.sq
                }), l.createElement("p", {
                    className: "tw-text-red tw-py-2 tw-m-0"
                }, "Please select all the checkboxes if you want to proceed.")), l.createElement(F, null, l.createElement("div", {
                    className: "tw-my-2"
                }, l.createElement(c.$1, {
                    className: "tw-px-2",
                    icon: k.sq
                }), l.createElement("strong", {
                    className: "tw-m-0"
                }, "Please note:")), l.createElement("ol", null, l.createElement("li", null, "You may be subject to liability if you knowingly make a material misrepresentation in this counter-notification."), l.createElement("li", null, "We will provide all information you submit in this form to the original complaining party."), l.createElement("li", null, "If you do not want to use this form, please see our", " ", l.createElement("a", {
                    href: "https://hello.vrchat.com/copyright",
                    target: "_blank",
                    rel: "noreferrer"
                }, "DMCA page"), " ", "for other ways to submit counter-notifications."))), l.createElement("label", {
                    htmlFor: "owner-signature"
                }, "Type your name to provide your digital signature", l.createElement(c.II, {
                    className: "tw-pt-2",
                    id: "owner-signature",
                    value: null == E || null === (p = E.signature) || void 0 === p ? void 0 : p.toUpperCase(),
                    onChange: function(e) {
                        return x(D(D({}, E), {}, {
                            signature: e.target.value
                        }))
                    }
                })), l.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-6"
                }, l.createElement(c.zx, {
                    className: "tw-mr-2",
                    neutral: !0,
                    containerStyles: {
                        width: "100%"
                    },
                    onClick: w
                }, "Cancel"), l.createElement(c.zx, {
                    className: "tw-ml-2",
                    disabled: g || !O,
                    containerStyles: {
                        width: "100%"
                    },
                    onClick: function() {
                        return f({
                            contentId: h,
                            disputeInfo: E,
                            contentRestrictionId: b
                        })
                    }
                }, "Submit")))
            };
            var L = (0, a.Z)("fieldset", {
                    target: "erb120c1"
                })({
                    name: "hfkisc",
                    styles: "input{align-self:flex-start;margin-top:0.33rem;}label{padding:0 0 0.75rem 0.5rem!important;}"
                }),
                F = (0, a.Z)("div", {
                    target: "erb120c0"
                })({
                    name: "tayqdf",
                    styles: "display:flex;flex-direction:column;align-items:baseline;color:#9c9c9c;background-color:#000;border-radius:8px;padding:0.5rem;margin-bottom:1rem"
                });
            const O = function() {
                var e, t, n = (0, o.UO)().contentId,
                    a = (0, x.Tu)().user,
                    r = (0, b.I0)(),
                    i = (0, C.oR)({
                        contentId: n
                    }),
                    g = i.data,
                    N = i.isFetching,
                    k = i.isError,
                    S = i.error,
                    I = (0, C.jO)(),
                    P = (0, s.Z)(I, 2),
                    D = P[0],
                    L = P[1],
                    F = L.isLoading,
                    O = L.isError,
                    A = L.isSuccess,
                    R = L.error,
                    T = (0, C.lY)(),
                    W = (0, s.Z)(T, 2),
                    M = W[0],
                    U = W[1],
                    z = U.isLoading,
                    Y = U.isSuccess,
                    $ = U.isError,
                    q = U.error,
                    V = (0, l.useState)(null),
                    X = (0, s.Z)(V, 2),
                    H = X[0],
                    B = X[1],
                    J = (0, l.useState)(!1),
                    G = (0, s.Z)(J, 2),
                    K = G[0],
                    Q = G[1];
                return (0, l.useEffect)((function() {
                    var e;
                    (A && (B(!1), r((0, E.d)({
                        title: "DMCA Dispute",
                        icon: f.Yj,
                        message: "Your dispute has been submitted successfully.",
                        color: "success",
                        timeout: 7e3
                    }))), O) && (B(!1), r((0, E.d)({
                        title: "DMCA Dispute",
                        icon: f.Yj,
                        message: "Your dispute could not be submitted successfully: ".concat(null == R || null === (e = R.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message),
                        color: "danger",
                        timeout: 7e3
                    })))
                }), [A, O]), (0, l.useEffect)((function() {
                    var e;
                    (Y && r((0, E.d)({
                        title: "DMCA Dispute",
                        icon: f.Yj,
                        message: "Your dispute has been withdrawn successfully.",
                        color: "success",
                        timeout: 7e3
                    })), $) && r((0, E.d)({
                        title: "DMCA Dispute",
                        icon: f.Yj,
                        message: "Failed to withdraw your dispute successfully: ".concat(null == q || null === (e = q.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message),
                        color: "danger",
                        timeout: 7e3
                    }))
                }), [$, Y]), N ? l.createElement(_.Z, {
                    loading: !0
                }) : k ? l.createElement(w.Z, null, l.createElement(c.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == S || null === (t = S.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred when loading the content.")) : l.createElement(w.Z, null, l.createElement("div", {
                    className: "m-2"
                }, l.createElement(v.Z, {
                    className: "w-100 pb-3"
                }, l.createElement(c.oI, {
                    className: "tw-text-xl"
                }, g.name), l.createElement(c.Ao, null, l.createElement(j, {
                    xs: "12",
                    className: "tw-p-4"
                }, l.createElement(y.Z, null, l.createElement(v.Z, {
                    xs: "12",
                    md: "3"
                }, l.createElement("div", {
                    className: "tw-w-fit tw-relative"
                }, l.createElement("img", {
                    className: "w-100 tw-border-solid tw-border-4 tw-border-[#fb923c]",
                    src: g.thumbnailImageUrl,
                    title: g.name,
                    alt: g.name
                }), l.createElement("div", {
                    className: "p-1 tw-w-full tw-text-center tw-text-black tw-font-bold tw-absolute tw-bottom-1 tw-bg-[#fb923c] tw-opacity-75"
                }, "Archived"))), l.createElement(v.Z, {
                    xs: "12",
                    md: "9",
                    className: "flex-1"
                }, l.createElement("h4", null, g.name, l.createElement("span", null, " ", l.createElement("small", null, "—  ", g.authorName))), l.createElement("p", null, g.description)))))), l.createElement(v.Z, {
                    className: "w-100"
                }, l.createElement(y.Z, {
                    style: {
                        "--bs-gutter-x": "1rem"
                    }
                }, l.createElement(v.Z, {
                    xs: "12",
                    md: "8"
                }, l.createElement(c.oI, {
                    className: "tw-text-xl"
                }, "DMCA"), l.createElement(c.Ao, {
                    className: "tw-flex tw-text-sm"
                }, l.createElement("div", {
                    className: "tw-flex tw-flex-row tw-place-content-between"
                }, l.createElement("div", null, null !== (e = g.id) && void 0 !== e && e.startsWith("avtr_") ? "Avatar" : "World", " Visibility:", l.createElement("div", {
                    className: "mt-2 tw-text-lg tw-font-bold"
                }, "Archived")), (null == a ? void 0 : a.id) === g.authorId && g.disputed && l.createElement(l.Fragment, null, l.createElement(c.sm, {
                    isOpen: K,
                    confirmCallback: function() {
                        return M({
                            contentRestrictionId: g.contentRestrictionId,
                            contentId: g.id
                        })
                    },
                    cancelCallback: function() {
                        return Q(!1)
                    },
                    headerText: "Withdraw Dispute",
                    bodyText: "Are you sure you want to withdraw your dispute?",
                    confirmText: "Confirm",
                    cancelText: "Cancel"
                }), l.createElement(c.zx, {
                    disabled: z,
                    loading: z,
                    className: "tw-px-12 tw-block tw-self-center",
                    onClick: function() {
                        return Q(!0)
                    }
                }, l.createElement(c.$1, {
                    icon: p.k8
                }), "  Withdraw")), (null == a ? void 0 : a.id) === g.authorId && g.isDmcaClaimed && !g.disputed && l.createElement(l.Fragment, null, l.createElement(c.zx, {
                    danger: !0,
                    className: "tw-px-12 tw-block tw-self-center",
                    onClick: function() {
                        return B(!0)
                    }
                }, l.createElement(c.$1, {
                    icon: p.k8
                }), "  Dispute"), l.createElement(c.u_, {
                    width: "80%",
                    title: "DMCA Dispute Claim",
                    slim: !0,
                    isVisible: H,
                    onClose: function() {
                        return B(!1)
                    }
                }, l.createElement(Z, {
                    dispute: D,
                    disputeLoading: F,
                    contentId: g.id,
                    contentRestrictionId: g.contentRestrictionId,
                    closeModal: function() {
                        return B(!1)
                    }
                })))), g.isDmcaClaimed && l.createElement("a", {
                    className: "tw-text-light-grey tw-underline mt-4",
                    href: "https://hello.vrchat.com/copyright",
                    target: "_blank",
                    rel: "noreferrer"
                }, l.createElement(c.$1, {
                    className: "tw-pr-1",
                    icon: d.faCircleInfo
                }), "Learn more about the DMCA process"))), l.createElement(v.Z, {
                    xs: "12",
                    md: "4"
                }, l.createElement(c.oI, {
                    className: "tw-text-xl"
                }, "Details"), l.createElement(c.Ao, {
                    className: "tw-text-sm"
                }, l.createElement("div", {
                    className: "tw-flex tw-place-content-between tw-text-light-grey tw-mb-2"
                }, l.createElement("div", {
                    className: "tw-flex tw-items-center"
                }, l.createElement(c.$1, {
                    color: "#2BAAC1",
                    width: 17,
                    className: "tw-pr-2",
                    icon: m.faSquarePlus
                }), "Created"), h()(null == g ? void 0 : g.createdAt).format("MMM DD YYYY")), l.createElement("div", {
                    className: "tw-flex tw-place-content-between tw-text-light-grey"
                }, l.createElement("div", {
                    className: "tw-flex tw-items-center"
                }, l.createElement(c.$1, {
                    color: "#2BAAC1",
                    width: 17,
                    className: "tw-pr-2",
                    icon: u.faCloudArrowUp
                }), "Updated"), h()(null == g ? void 0 : g.updatedAt).format("MMM DD YYYY"))))))))
            };
            var j = (0, a.Z)(v.Z, {
                    target: "ek2okq60"
                })({
                    name: "1e3lcuk",
                    styles: "border:1px solid #2BAAC1;& a{color:white;}& img{border-radius:5px;max-height:200px;max-width:200px;}"
                }),
                A = n(42138),
                R = n(15861),
                T = n(12529),
                W = n(59545),
                M = n(68055),
                U = n(88302),
                z = n(30856),
                Y = n(17726),
                $ = n(76409),
                q = n(34601),
                V = n(96157),
                X = n(20821),
                H = n(5147),
                B = n(47947),
                J = n(13461),
                G = n(20446),
                K = n(11298),
                Q = n(27879),
                ee = n(42619),
                te = n(36322),
                ne = n(59895),
                ae = n(55346),
                re = n(18029),
                le = n.n(re),
                oe = n(96026),
                ie = n.n(oe),
                ce = n(18446),
                se = n.n(ce),
                ue = n(64687),
                me = n.n(ue),
                de = n(67947),
                pe = n(28213),
                fe = n(17219),
                ge = n(64358),
                he = function(e) {
                    var t = e.onConfirm,
                        n = e.onCancel,
                        a = e.confirmText,
                        r = e.cancelText;
                    return l.createElement(c.X2, {
                        className: "align-items-sm-center flex-column flex-sm-row flex-grow-1"
                    }, l.createElement("div", {
                        className: "flex-1"
                    }, l.createElement(c.zx, {
                        role: "button",
                        "aria-label": "Confirm",
                        className: "px-2 me-0 mb-2 me-sm-2 mb-sm-0",
                        onClick: t,
                        positive: !0,
                        expand: !0
                    }, a)), l.createElement("div", {
                        className: "flex-1"
                    }, l.createElement(c.zx, {
                        role: "button",
                        "aria-label": "Cancel",
                        className: "px-2",
                        onClick: n,
                        neutral: !0,
                        expand: !0
                    }, r)))
                },
                be = function(e) {
                    var t = e.onConfirm,
                        n = e.onCancel;
                    return l.createElement(c.qX, {
                        type: "warn",
                        title: "Publishing to Community Labs"
                    }, l.createElement(c.JX, null, l.createElement("p", null, "Publishing this world will put it in to the ", l.createElement("strong", null, "Community Labs"), "."), l.createElement("p", null, "Other users will be able to see your world, and it will either stay in the Labs, get promoted to ", l.createElement("strong", null, "Public"), " status, or be placed back in to ", l.createElement("strong", null, "Private"), " status, based on community response."), l.createElement("p", null, "We encourage you to ", l.createElement("em", null, "get the word out"), " about your world if you want it to survive!"), l.createElement("p", null, "If your world violates our ", l.createElement("a", {
                        href: "https://vrchat.com/community"
                    }, "Community Guidelines"), ", you could get in trouble by posting it!"), l.createElement("p", null, "You're only allowed to publish ", l.createElement("strong", null, "one world per week"), ", so make sure to put your best foot forward!"), l.createElement(he, {
                        onConfirm: t,
                        onCancel: n,
                        confirmText: "Yes, do it!",
                        cancelText: "No, keep the world private"
                    })))
                },
                we = function(e) {
                    var t = e.onConfirm,
                        n = e.onCancel;
                    return l.createElement(c.qX, {
                        type: "warn",
                        title: "Unpublishing a World"
                    }, l.createElement(c.JX, null, l.createElement("p", null, "Unpublishing this world will remove it from ", l.createElement("strong", null, "Public"), "."), l.createElement("p", null, "If you want to make it public again, it will need to go through Community Labs."), l.createElement("p", null, "You're only allowed to publish ", l.createElement("strong", null, "one world per week"), ", and when you remove a world from the labs, you don't get your one world back. Are you ", l.createElement("strong", null, "sure"), "?"), l.createElement(he, {
                        onConfirm: t,
                        onCancel: n,
                        confirmText: "Yes, do it!",
                        cancelText: "No, keep the world public"
                    })))
                },
                ve = function(e) {
                    var t = e.onConfirm,
                        n = e.onCancel;
                    return l.createElement(c.qX, {
                        type: "warn",
                        title: "Deleting a World"
                    }, l.createElement(c.JX, null, l.createElement("p", null, "This will fully remove the world, are you sure?"), l.createElement(he, {
                        onConfirm: t,
                        onCancel: n,
                        confirmText: "Yes, delete this world",
                        cancelText: "No, keep the world alive"
                    })))
                },
                ye = function(e) {
                    var t = e.onConfirm,
                        n = e.onCancel;
                    return l.createElement(c.qX, {
                        type: "warn",
                        title: "Unpublishing a World"
                    }, l.createElement(c.JX, null, l.createElement("p", null, "Hey, you're a mod! When you unpublish a world, it'll remove the  ", l.createElement("code", null, "admin_approved"), "  tag, become  ", l.createElement("code", null, "releaseStatus: private"), " , and go back to not being visible any mo'."), l.createElement(he, {
                        onConfirm: t,
                        onCancel: n,
                        confirmText: "Yes, make the world private",
                        cancelText: "No, keep the world public"
                    })))
                },
                Ee = function(e) {
                    var t = e.onConfirm,
                        n = e.onCancel;
                    return l.createElement(c.qX, {
                        type: "warn",
                        title: "Publishing a World"
                    }, l.createElement(c.JX, null, l.createElement("p", null, "Publishing a world will make it visible to everyone."), l.createElement("p", null, "Are you sure you want to proceed?"), l.createElement(he, {
                        onConfirm: t,
                        onCancel: n,
                        confirmText: "Yes, do it!",
                        cancelText: "No, keep the world private"
                    })))
                },
                xe = function(e) {
                    var t = e.onConfirm,
                        n = e.onCancel;
                    return l.createElement(c.qX, {
                        type: "warn",
                        title: "Publishing a World"
                    }, l.createElement(c.JX, null, l.createElement("p", null, "Hey, you're a mod! When you publish a world, it'll get the  ", l.createElement("code", null, "admin_approved"), "  tag, become  ", l.createElement("code", null, "releaseStatus: public"), "  and it'll stay approved forever (until you un-approve it)!"), l.createElement(he, {
                        onConfirm: t,
                        onCancel: n,
                        confirmText: "Yes, make the world public",
                        cancelText: "No, keep the world private"
                    })))
                },
                Ce = function(e) {
                    var t = e.onConfirm,
                        n = e.onCancel;
                    return l.createElement(c.qX, {
                        type: "warn",
                        title: "Promoting to Public"
                    }, l.createElement(c.JX, null, l.createElement("p", null, "Hey, you're a mod! When you promote a world, it'll get the  ", l.createElement("code", null, "admin_approved"), "  tag, become  ", l.createElement("code", null, "releaseStatus: public"), "  and it'll stay approved forever (until you un-approve it)!"), l.createElement(he, {
                        onConfirm: t,
                        onCancel: n,
                        confirmText: "Yes, make the world public",
                        cancelText: "No, keep the world in Labs"
                    })))
                },
                _e = function(e) {
                    var t = e.platformName,
                        n = e.onConfirm,
                        a = e.onCancel;
                    return l.createElement(c.qX, {
                        type: "warn",
                        title: "Deleting ".concat(t, " version")
                    }, l.createElement(c.JX, null, l.createElement("p", null, "This will make the world no longer available for players on the ", t, " platform."), l.createElement("p", null, "Are you sure you want to proceed?"), l.createElement(he, {
                        onConfirm: n,
                        onCancel: a,
                        confirmText: "Yes, delete the ".concat(t, " version"),
                        cancelText: "No, keep the ".concat(t, " version")
                    })))
                },
                Ne = n(72522);
            var ke = (0, a.Z)(c.zx, {
                    target: "erum2741"
                })({
                    name: "1v8w4bi",
                    styles: "display:flex;align-items:center;min-height:34px"
                }),
                Se = (0, a.Z)("div", {
                    target: "erum2740"
                })({
                    name: "11p52gn",
                    styles: "font-size:1rem;margin-right:10px;margin-left:10px;color:hsla(0, 0%, 100%, 0.6)"
                }),
                Ie = {
                    name: "ilysiq",
                    styles: "background-color:#252a30;border-radius:6px;border:none;color:white!important"
                };
            const Pe = function(e) {
                var t, n = e.world,
                    a = e.handleFieldEdit,
                    r = e.handleFeatureToggle,
                    o = null === (t = n.tags) || void 0 === t ? void 0 : t.includes("feature_props_disabled");
                return l.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-2"
                }, l.createElement("div", {
                    className: "tw-flex align-items-center w-100 flex-column flex-sm-row mt-2"
                }, l.createElement(ke, {
                    type: "button",
                    "aria-label": "Toggle Items",
                    onClick: function() {
                        o && a("itemDisableReason")({
                            target: {
                                value: ""
                            }
                        }), r("props")
                    },
                    className: "me-0 me-sm-2 mb-2 mb-sm-0 flex-grow-1 w-100",
                    neutral: o,
                    positive: !o,
                    expand: !0
                }, l.createElement(Se, null, "Items ", o ? "Disabled" : "Enabled"), o ? l.createElement(c.$1, {
                    width: 20,
                    icon: W.NB,
                    disabled: !0
                }) : l.createElement(c.$1, {
                    width: 20,
                    icon: M.LE
                }))), o && l.createElement("div", {
                    className: "tw-flex tw-flex-col tw-border-[1px] tw-border-white/10 tw-border-solid tw-rounded tw-p-2"
                }, l.createElement("div", null, "Why are you disabling Items in this world?"), l.createElement(c.gx, {
                    name: "itemDisableReason",
                    "aria-label": "Items Disable Reason",
                    placeholder: "",
                    value: n.itemDisableReason,
                    onChange: a("itemDisableReason"),
                    inputStyle: Ie,
                    rows: "4",
                    className: "mt-2"
                }), l.createElement("div", {
                    className: "tw-mt-3 tw-mb-2 tw-text-white/80 tw-text-sm"
                }, "Instance moderators won't be able to turn Items on for instances created for this world.")))
            };

            function De(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return Ze(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ze(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var a = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var l, o = !0,
                    i = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        i = !0, l = e
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (i) throw l
                        }
                    }
                }
            }

            function Ze(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function Le(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Fe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Le(Object(n), !0).forEach((function(t) {
                        (0, N.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Le(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Oe = {
                    name: "ozd7xs",
                    styles: "flex-shrink:0"
                },
                je = {
                    name: "ozd7xs",
                    styles: "flex-shrink:0"
                };
            const Ae = function() {
                var e, t, n, a, u = (0, b.I0)(),
                    m = (0, i.lr)(),
                    d = (0, s.Z)(m, 1)[0],
                    p = (0, o.s0)(),
                    f = (0, o.UO)().worldId,
                    g = (0, x.Tu)(),
                    w = g.trustLevel,
                    v = g.user,
                    y = (0, x.pc)(),
                    C = (0, x.BT)({
                        worldId: f,
                        userId: v.id,
                        isMod: y,
                        noCache: !0
                    }),
                    _ = C.data,
                    k = C.reports,
                    S = C.bops,
                    I = C.loading,
                    P = C.error,
                    D = C.errorMessage,
                    Z = C.refreshWorld,
                    L = void 0 === Z ? function() {} : Z,
                    F = (null == _ ? void 0 : _.authorId) === v.id,
                    O = y || F,
                    j = (0, b.v9)((function(e) {
                        return e.world.updatedWorld
                    })),
                    re = l.useState(null),
                    oe = (0, s.Z)(re, 2),
                    ce = oe[0],
                    ue = oe[1],
                    he = (0, fe.y)().data,
                    ke = (void 0 === he ? {} : he).sdkUnityVersion,
                    Se = (0, x.dD)(),
                    Ie = l.useRef(null),
                    Ze = l.useRef(null),
                    Le = (0, x.T)({
                        worldId: f
                    }),
                    Ae = Le.action,
                    Be = Le.canPublish,
                    gt = Le.deleteWorld,
                    ht = Le.deleteWorldPlatform,
                    bt = Le.error,
                    wt = Le.loading,
                    vt = Le.publishWorld,
                    yt = Le.success,
                    Et = Le.unpublishWorld,
                    xt = l.useState(!1),
                    Ct = (0, s.Z)(xt, 2),
                    _t = Ct[0],
                    Nt = Ct[1],
                    kt = l.useState(!1),
                    St = (0, s.Z)(kt, 2),
                    It = St[0],
                    Pt = St[1],
                    Dt = l.useState(null),
                    Zt = (0, s.Z)(Dt, 2),
                    Lt = Zt[0],
                    Ft = Zt[1],
                    Ot = l.useState(!1),
                    jt = (0, s.Z)(Ot, 2),
                    At = jt[0],
                    Rt = jt[1],
                    Tt = l.useState(!1),
                    Wt = (0, s.Z)(Tt, 2),
                    Mt = Wt[0],
                    Ut = Wt[1],
                    zt = l.useState(!1),
                    Yt = (0, s.Z)(zt, 2),
                    $t = Yt[0],
                    qt = Yt[1],
                    Vt = l.useState(!1),
                    Xt = (0, s.Z)(Vt, 2),
                    Ht = Xt[0],
                    Bt = Xt[1],
                    Jt = l.useState(!1),
                    Gt = (0, s.Z)(Jt, 2),
                    Kt = Gt[0],
                    Qt = Gt[1],
                    en = l.useState(!1),
                    tn = (0, s.Z)(en, 2),
                    nn = tn[0],
                    an = tn[1],
                    rn = l.useState(!1),
                    ln = (0, s.Z)(rn, 2),
                    on = ln[0],
                    cn = ln[1],
                    sn = l.useState(!1),
                    un = (0, s.Z)(sn, 2),
                    mn = un[0],
                    dn = un[1],
                    pn = l.useState(!1),
                    fn = (0, s.Z)(pn, 2),
                    gn = fn[0],
                    hn = fn[1],
                    bn = l.useState(null),
                    wn = (0, s.Z)(bn, 2),
                    vn = wn[0],
                    yn = wn[1],
                    En = l.useState(!1),
                    xn = (0, s.Z)(En, 2),
                    Cn = xn[0],
                    _n = xn[1],
                    Nn = function() {
                        var e = d.get("backLink");
                        if (e) {
                            var t = new URLSearchParams(d);
                            return d.delete("backLink"), void p("".concat(e, "?").concat(t))
                        }
                        var n = new URLSearchParams(d);
                        d.set("scrollTo", f), p("/home/content/worlds?".concat(n))
                    };
                l.useEffect((function() {
                    if (!I && ce) {
                        var e = document.querySelector(".content-scroll");
                        (null == e ? void 0 : e.scrollTop) > 0 && (null == e || e.scrollTo(0, 0))
                    }
                }), [I, null == ce ? void 0 : ce.id]);
                var kn = l.useMemo((function() {
                    return "string" != typeof(null == _ ? void 0 : _.description) ? null : Fe({
                        description: "",
                        tags: [],
                        previewYoutubeId: ""
                    }, _)
                }), [_]);
                l.useEffect((function() {
                    if (kn && ce) {
                        var e = !se()({
                            name: ce.name,
                            description: ce.description,
                            releaseStatus: ce.releaseStatus,
                            tags: ce.tags,
                            capacity: ce.capacity,
                            recommendedCapacity: ce.recommendedCapacity,
                            previewYoutubeId: null == ce ? void 0 : ce.previewYoutubeId,
                            urlList: null == ce ? void 0 : ce.urlList,
                            itemDisableReason: null == ce ? void 0 : ce.itemDisableReason
                        }, {
                            name: kn.name,
                            description: kn.description,
                            releaseStatus: kn.releaseStatus,
                            tags: kn.tags,
                            capacity: kn.capacity,
                            recommendedCapacity: kn.recommendedCapacity,
                            previewYoutubeId: null == kn ? void 0 : kn.previewYoutubeId,
                            urlList: null == kn ? void 0 : kn.urlList,
                            itemDisableReason: null == kn ? void 0 : kn.itemDisableReason
                        });
                        Qt(e)
                    }
                }), [kn, ce]), l.useEffect((function() {
                    if (null !== ce) {
                        var e = function(e) {
                            return e <= 0 || Number.isNaN(e) || !Number.isInteger(e) || "" === e
                        };
                        e(null == ce ? void 0 : ce.recommendedCapacity) ? Ft("Please enter a valid Recommended Capacity number.") : e(null == ce ? void 0 : ce.capacity) ? Ft("Please enter a valid Maximum Capacity number.") : ce.recommendedCapacity > ce.capacity ? Ft("Recommended Capacity can not be higher than Maximum Capacity.") : ce.capacity > 80 ? Ft("Maximum Capacity can not be higher than 80.") : Ft(null)
                    }
                }), [ce]), l.useEffect((function() {
                    null !== kn && ue(Fe(Fe({}, kn), {
                        recommendedCapacity: (null == kn ? void 0 : kn.recommendedCapacity) || (null == kn ? void 0 : kn.capacity)
                    }))
                }), [kn]);
                var Sn = function() {
                        var e = (0, R.Z)(me().mark((function e() {
                            return me().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return dn(!1), e.next = 3, gt();
                                    case 3:
                                        L();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    In = function() {
                        var e = (0, R.Z)(me().mark((function e() {
                            return me().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return cn(!1), e.next = 3, Et();
                                    case 3:
                                        L();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Pn = function() {
                        cn(!1)
                    },
                    Dn = function() {
                        var e = (0, R.Z)(me().mark((function e() {
                            return me().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return an(!1), e.next = 3, vt();
                                    case 3:
                                        L();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Zn = function() {
                        an(!1)
                    },
                    Ln = function() {
                        var e = (0, R.Z)(me().mark((function e() {
                            return me().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return _n(!1), e.next = 3, vt();
                                    case 3:
                                        L();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Fn = function() {
                        var e = (0, R.Z)(me().mark((function e() {
                            return me().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return hn(!1), e.next = 3, vt();
                                    case 3:
                                        L();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    On = function(e) {
                        return function() {
                            yn(e)
                        }
                    },
                    jn = function() {
                        var e = (0, R.Z)(me().mark((function e() {
                            return me().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ht(vn);
                                    case 2:
                                        return yn(null), e.next = 5, new Promise((function(e) {
                                            return setTimeout(e, 1e3)
                                        }));
                                    case 5:
                                        L();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    An = function(e) {
                        return function(t) {
                            var n = t.target.value,
                                a = void 0 === n ? "" : n;
                            ue((function(t) {
                                return Fe(Fe({}, t), {}, (0, N.Z)({}, e, a))
                            }))
                        }
                    },
                    Rn = function(e) {
                        return function(t) {
                            var n = t.target.value,
                                a = void 0 === n ? "" : n;
                            ue((function(t) {
                                return Fe(Fe({}, t), {}, (0, N.Z)({}, e, Number(a)))
                            }))
                        }
                    },
                    Tn = function(e) {
                        var t = "feature_".concat(e, "_disabled");
                        console.log("Toggling feature: ".concat(e, ", tag: ").concat(t)), ce.tags.includes(t) ? ue((function(e) {
                            return Fe(Fe({}, e), {}, {
                                tags: e.tags.filter((function(e) {
                                    return e !== t
                                }))
                            })
                        })) : ue((function(e) {
                            return Fe(Fe({}, e), {}, {
                                tags: [].concat((0, A.Z)(e.tags), [t])
                            })
                        }))
                    },
                    Wn = function() {
                        var e = (0, R.Z)(me().mark((function e() {
                            var t;
                            return me().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (Kt && ce && kn) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        e.next = 23;
                                        break;
                                    case 9:
                                        e.next = 14;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(6), console.error(e.t0);
                                    case 14:
                                        if (!(t.length > 0)) {
                                            e.next = 23;
                                            break
                                        }
                                        return e.prev = 15, e.next = 18, u((0, de.tc)({
                                            tagList: t,
                                            worldId: f
                                        }));
                                    case 18:
                                        e.next = 23;
                                        break;
                                    case 20:
                                        e.prev = 20, e.t1 = e.catch(15), console.error(e.t1);
                                    case 23:
                                        return e.prev = 23, e.next = 26, u((0, de.GE)(Fe(Fe({}, ce), {}, {
                                            worldId: f
                                        })));
                                    case 26:
                                        j.error || u((0, E.d)({
                                            title: "World Info Updated",
                                            icon: r.g4,
                                            message: "You have successfully updated ".concat(null != ce && ce.name ? "world: ".concat(ce.name) : "this world"),
                                            color: "success",
                                            timeout: 5e3
                                        })), L(), e.next = 33;
                                        break;
                                    case 30:
                                        e.prev = 30, e.t2 = e.catch(23), console.error(e.t2);
                                    case 33:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [6, 11],
                                [15, 20],
                                [23, 30]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Mn = l.useMemo((function() {
                        if (!ce) return {
                            versionsList: [],
                            platformsList: [],
                            hasLatest: !0
                        };
                        var e, t = [],
                            n = new Set,
                            a = new Set,
                            r = !1,
                            l = !1,
                            o = !1,
                            i = De([].concat(ce.unityPackages).reverse());
                        try {
                            for (i.s(); !(e = i.n()).done;) {
                                var c = e.value,
                                    s = c.unityVersion,
                                    u = c.unitySortNumber,
                                    m = c.platform,
                                    d = (0, ge.el)(u, ke),
                                    p = d.isUnsupported,
                                    f = d.isSupported,
                                    g = d.isOld;
                                r = r || p, l = l || f, o = o || g, n.has(s) || (n.add(s), t.push({
                                    name: s,
                                    isUnsupported: p,
                                    isSupported: f,
                                    isOld: g
                                })), a.has(m) || a.add(m)
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        return {
                            versionsList: t,
                            platformsList: Array.from(a),
                            hasOld: o,
                            hasUnsupported: r,
                            hasSupported: l
                        }
                    }), [null == ce ? void 0 : ce.unityPackages, ke]),
                    Un = l.useMemo((function() {
                        if (!ce) return !1;
                        var e = Mn.platformsList.includes("standalonewindows"),
                            t = Mn.platformsList.includes("android");
                        return e && t
                    }), [ce, Mn.platformsList]),
                    zn = Mn.hasUnsupported && !Mn.hasSupported && !Mn.hasOld,
                    Yn = Mn.hasUnsupported && (Mn.hasSupported || Mn.hasOld),
                    $n = !Mn.hasUnsupported && !Mn.hasSupported,
                    qn = l.useMemo((function() {
                        var e, t = new Set(null !== (e = null == ce ? void 0 : ce.tags) && void 0 !== e ? e : []);
                        return {
                            isAdminApproved: t.has("admin_approved"),
                            isInLabs: t.has("system_labs"),
                            isLabsLocked: t.has("admin_lock_labs"),
                            isLabsFailed: t.has("system_troll"),
                            isWorldDebugEnabled: t.has("debug_allowed"),
                            isAvatarScalingEnabled: !t.has("feature_avatar_scaling_disabled"),
                            isFocusViewEnabled: !t.has("feature_focus_view_disabled")
                        }
                    }), [null == ce ? void 0 : ce.tags]),
                    Vn = qn.isAdminApproved,
                    Xn = qn.isInLabs,
                    Hn = qn.isLabsLocked,
                    Bn = qn.isLabsFailed,
                    Jn = qn.isWorldDebugEnabled,
                    Gn = qn.isAvatarScalingEnabled,
                    Kn = (qn.isStickersEnabled, qn.isDroneEnabled, qn.isFocusViewEnabled),
                    Qn = !("public" === (null == ce ? void 0 : ce.releaseStatus) || Vn || Xn || y || Bn || Hn),
                    ea = "public" === (null == ce ? void 0 : ce.releaseStatus),
                    ta = !ea && (y || Vn && Be),
                    na = Qn && !Be,
                    aa = Qn && !na && !w.user,
                    ra = !(null != ce && ce.name) || "" === (null == ce ? void 0 : ce.name),
                    la = (null != S ? S : 0) > 0,
                    oa = l.useMemo((function() {
                        return O && ((null == ce ? void 0 : ce.tags.includes("admin_filter_analytics")) || la)
                    }), [O, null == ce ? void 0 : ce.tags, la]),
                    ia = l.useMemo((function() {
                        var e;
                        return null == ce || null === (e = ce.tags) || void 0 === e ? void 0 : e.map((function(e) {
                            if (!y && !e.startsWith("author_tag_")) return null;
                            var t = pe.w.find((function(t) {
                                return t.tag === e
                            }));
                            return t ? {
                                value: e,
                                label: t.description
                            } : {
                                value: e,
                                label: e.replace("author_tag_", "")
                            }
                        })).filter(Boolean)
                    }), [null == ce ? void 0 : ce.tags]),
                    ca = Xn ? "In Community Labs" : le()(null == ce ? void 0 : ce.releaseStatus),
                    sa = null !== (e = null !== (t = null == k ? void 0 : k.reportCount) && void 0 !== t ? t : null == k || null === (n = k.feedbackReport) || void 0 === n ? void 0 : n.reportCount) && void 0 !== e ? e : 0;
                return !I && (ce && _ || P) ? !I && P ? l.createElement(Te, null, l.createElement(We, {
                    className: "mt-2 mb-3 align-items-center justify-content-between"
                }, l.createElement(We, {
                    className: "align-items-center mb-1"
                }, l.createElement(ft, {
                    role: "button",
                    "aria-label": "Back",
                    onClick: Nn
                }, l.createElement(c.$1, {
                    icon: ae.ac,
                    color: "white",
                    size: "2x"
                })), l.createElement(Me, null, "Edit World Info"))), l.createElement(Te, {
                    className: "flex-column flex-sm-row align-items-center justify-content-center w-100"
                }, l.createElement(c.qX, {
                    type: "error",
                    title: "Could not load World data",
                    message: D
                }))) : O ? l.createElement(Te, null, l.createElement(We, {
                    className: "mt-2 mb-3 align-items-center justify-content-between"
                }, l.createElement(We, {
                    className: "align-items-center mb-1"
                }, l.createElement(ft, {
                    role: "button",
                    "aria-label": "Back",
                    onClick: Nn
                }, l.createElement(c.$1, {
                    icon: ae.ac,
                    color: "white",
                    size: "2x"
                })), l.createElement(Me, null, "Edit World Info")), Kt && !Se && null === Lt && l.createElement(mt, {
                    className: "animated fadeIn"
                }, l.createElement(dt, {
                    onClick: Wn,
                    className: "w-100",
                    loading: j.changing,
                    positive: !0
                }, "Save Changes"))), l.createElement(We, {
                    className: "mb-2 align-items-sm-center justify-content-between flex-column flex-sm-row"
                }), l.createElement(Te, {
                    className: "mb-5"
                }, j.error && l.createElement(c.qX, {
                    type: "error",
                    title: "Failed to update World data",
                    message: j.error
                }), zn && l.createElement(c.qX, {
                    title: "Unsupported Unity Version",
                    type: "error",
                    message: l.createElement(l.Fragment, null, "None of the uploaded world versions are using a supported Unity version.", l.createElement("br", null), l.createElement("b", null, "Please always use a Unity version VRChat supports."), l.createElement("br", null), l.createElement("br", null), l.createElement("a", {
                        href: "https://docs.vrchat.com/docs/current-unity-version",
                        target: "_blank",
                        rel: "noreferrer"
                    }, "Learn more here"))
                }), Yn && l.createElement(c.qX, {
                    title: "Unsupported Unity Version",
                    type: "warn",
                    message: l.createElement(l.Fragment, null, "Some of the uploaded world versions are using an unsupported Unity version.", l.createElement("br", null), l.createElement("b", null, "Please always use a Unity version VRChat supports."), l.createElement("br", null), l.createElement("br", null), l.createElement("a", {
                        href: "https://docs.vrchat.com/docs/current-unity-version",
                        target: "_blank",
                        rel: "noreferrer"
                    }, "Learn more here"))
                }), Lt && l.createElement(c.qX, {
                    type: "error",
                    title: "Capacity",
                    message: Lt
                }), l.createElement(We, {
                    className: "align-items-start flex-column flex-sm-row"
                }, l.createElement(Re, {
                    className: "order-last order-sm-first w-100 w-sm-auto flex-grow-1"
                }, l.createElement(qe, {
                    className: "w-100 w-sm-auto flex-grow-1"
                }, l.createElement(at, {
                    className: "mt-0"
                }, "Name"), l.createElement(c.II, {
                    name: "worldName",
                    "aria-label": "World Name",
                    type: "text",
                    placeholder: "World Name",
                    value: ce.name,
                    onChange: An("name"),
                    onBlur: function() {
                        ce.name && "" !== ce.name || ue((function(e) {
                            return Fe(Fe({}, e), {}, {
                                name: kn.name
                            })
                        }))
                    },
                    inputStyle: ze,
                    className: "mt-2"
                }), ra && l.createElement(c.qX, {
                    type: "error",
                    title: "World Name Error",
                    message: "World Name can't be empty",
                    slim: !0
                }), l.createElement(at, null, "Maximum Capacity"), l.createElement(We, {
                    className: "align-items-center w-100 mt-2 flex-column flex-sm-row"
                }, l.createElement(c.II, {
                    ref: Ie,
                    name: "maximum-capacity",
                    "aria-label": "Maximum Capacity",
                    type: "number",
                    placeholder: "Maximum Capacity",
                    inputMode: "number",
                    defaultValue: ce.capacity,
                    onBlur: Rn("capacity"),
                    inputStyle: ze,
                    className: "flex-grow-1 w-100 me-0 me-sm-2"
                }), l.createElement(c.zx, {
                    role: "checkbox",
                    "aria-checked": _t,
                    "aria-label": _t ? "Hide Maximum Capacity Help" : "Show Maximum Capacity Help",
                    onClick: function() {
                        return Nt(!_t)
                    },
                    className: "px-2 py-1 mt-2 mt-sm-0",
                    containerStyles: je,
                    neutral: !0
                }, l.createElement(c.$1, {
                    icon: te.sp,
                    disabled: !_t
                }))), _t && l.createElement(c.qX, {
                    type: "info",
                    title: "Maximum Capacity",
                    message: "Maximum Capacity controls how many users are allowed into one instance of a world at a time. Additional users are not allowed to join over this limit with very few exceptions, such as the world creator, instance owners, and group owners."
                }), l.createElement(at, null, "Recommended Capacity"), l.createElement(We, {
                    className: "align-items-center w-100 mt-2 flex-column flex-sm-row"
                }, l.createElement(c.II, {
                    ref: Ze,
                    name: "recommended-capacity",
                    "aria-label": "Recommended Capacity",
                    type: "number",
                    placeholder: "Recommended Capacity",
                    inputMode: "number",
                    defaultValue: ce.recommendedCapacity,
                    onBlur: Rn("recommendedCapacity"),
                    inputStyle: ze,
                    className: "flex-grow-1 w-100 me-0 me-sm-2"
                }), l.createElement(c.zx, {
                    role: "checkbox",
                    "aria-checked": It,
                    "aria-label": It ? "Hide Recommended Capacity Help" : "Show Recommended Capacity Help",
                    onClick: function() {
                        return Pt(!It)
                    },
                    className: "px-2 py-1 mt-2 mt-sm-0",
                    containerStyles: Oe,
                    neutral: !0
                }, l.createElement(c.$1, {
                    icon: te.sp,
                    disabled: !It
                }))), It && l.createElement(c.qX, {
                    type: "info",
                    title: "Recommended Capacity",
                    message: "Recommended Capacity controls how many users are allowed into one Public or Group Public instance of a world before that instance is no longer visible on the world instance list. Instances above Recommended Capacity are still accessible through other methods, such as joining through a group, or off of a friend. All other instance types are not impacted by the Recommended Capacity."
                }), l.createElement(at, null, "Description"), l.createElement(c.gx, {
                    name: "worldDescription",
                    "aria-label": "World Description",
                    placeholder: "World Description",
                    value: ce.description,
                    onChange: An("description"),
                    inputStyle: ze,
                    rows: "4",
                    className: "mt-2"
                }), l.createElement(at, null, "Tags"), l.createElement(Ye, {
                    value: ia,
                    placeholder: "E.g., adventure, game, chill",
                    suggestions: [],
                    onSelectValue: function(e) {
                        var t, n, a = e.startsWith("system_") || e.startsWith("admin_");
                        if ((y || !a) && (null == ce || null === (t = ce.tags) || void 0 === t || !t.includes(e))) {
                            var r = e.replace(/\s/gi, "_").replace(/\W/gi, "");
                            y && a || (r = "author_tag_".concat(r)), null != ce && null !== (n = ce.tags) && void 0 !== n && n.includes(r) || ue((function(e) {
                                var t;
                                return Fe(Fe({}, e), {}, {
                                    tags: [].concat((0, A.Z)(null !== (t = null == e ? void 0 : e.tags) && void 0 !== t ? t : []), [r])
                                })
                            }))
                        }
                    },
                    onRemoveValue: function(e) {
                        ue((function(t) {
                            var n, a;
                            return Fe(Fe({}, t), {}, {
                                tags: null !== (n = null == t || null === (a = t.tags) || void 0 === a ? void 0 : a.filter((function(t) {
                                    return t !== e
                                }))) && void 0 !== n ? n : []
                            })
                        }))
                    },
                    maxEntries: y ? void 0 : 5,
                    maxLength: y ? void 0 : 100,
                    maxEntriesErrorText: "You can only have up to 5 tags",
                    maxLengthErrorText: "Entered tag is too long",
                    className: "mt-2",
                    label: "Tags",
                    addNewLabel: "Add new tag",
                    allowNew: !0
                }), l.createElement(at, null, "Content Warnings"), l.createElement(Re, {
                    className: "py-2 gap-2"
                }, l.createElement(c.ks, {
                    tags: null == ce ? void 0 : ce.tags,
                    isMod: y,
                    onSelectValues: function(e) {
                        ue((function(t) {
                            return Fe(Fe({}, t), {}, {
                                tags: [].concat((0, A.Z)(t.tags), (0, A.Z)(e))
                            })
                        }))
                    },
                    onRemoveValue: function(e) {
                        ue((function(t) {
                            return Fe(Fe({}, t), {}, {
                                tags: t.tags.filter((function(t) {
                                    return t !== e
                                }))
                            })
                        }))
                    }
                })), l.createElement(at, null, "Avatar Scaling"), l.createElement(We, {
                    className: "align-items-center w-100 flex-column flex-sm-row mt-2"
                }, l.createElement(lt, {
                    type: "button",
                    "aria-label": "Toggle Avatar Scaling",
                    onClick: function() {
                        ce.tags.includes("feature_avatar_scaling_disabled") ? ue((function(e) {
                            return Fe(Fe({}, e), {}, {
                                tags: e.tags.filter((function(e) {
                                    return "feature_avatar_scaling_disabled" !== e
                                }))
                            })
                        })) : ue((function(e) {
                            return Fe(Fe({}, e), {}, {
                                tags: [].concat((0, A.Z)(e.tags), ["feature_avatar_scaling_disabled"])
                            })
                        }))
                    },
                    className: "me-0 me-sm-2 mb-2 mb-sm-0 flex-grow-1 w-100",
                    neutral: !Gn,
                    positive: Gn,
                    expand: !0
                }, l.createElement(ot, null, "Avatar Scaling ", Gn ? "Enabled" : "Disabled"), Gn ? l.createElement(c.$1, {
                    width: 20,
                    icon: M.LE
                }) : l.createElement(c.$1, {
                    width: 20,
                    icon: W.NB,
                    disabled: !0
                })), l.createElement(c.zx, {
                    role: "checkbox",
                    "aria-checked": At,
                    "aria-label": At ? "Hide Avatar Scaling Help" : "Show Avatar Scaling Help",
                    onClick: function() {
                        return Rt(!At)
                    },
                    className: "px-2 py-1",
                    neutral: !0
                }, l.createElement(c.$1, {
                    icon: te.sp,
                    disabled: !At
                }))), At && l.createElement(c.qX, {
                    type: "info",
                    title: "What is Avatar Scaling"
                }, "Enabling this will let users use Avatar Scaling in your world. If you want finer control, use Udon to control scaling in your world.", " ", l.createElement("a", {
                    href: "https://creators.vrchat.com/worlds/udon/players/player-avatar-scaling",
                    rel: "noreferrer",
                    target: "_blank"
                }, "Check the docs here.")), l.createElement(at, null, "Default Content Settings"), [{
                    internalName: "emoji",
                    displayName: "Emoji"
                }, {
                    internalName: "stickers",
                    displayName: "Stickers"
                }, {
                    internalName: "pedestals",
                    displayName: "Sharing Pedestals"
                }, {
                    internalName: "prints",
                    displayName: "Prints"
                }, {
                    internalName: "drones",
                    displayName: "Drone"
                }].map((function(e) {
                    var t, n, a = (t = e.internalName, n = "feature_".concat(t, "_disabled"), !ce.tags.includes(n));
                    return l.createElement("div", {
                        key: "setting-".concat(e.internalName)
                    }, l.createElement(We, {
                        className: "align-items-center w-100 flex-column flex-sm-row mt-2"
                    }, l.createElement(lt, {
                        type: "button",
                        "aria-label": "Toggle ".concat(e.displayName),
                        onClick: function() {
                            return Tn(e.internalName)
                        },
                        className: "me-0 me-sm-2 mb-2 mb-sm-0 flex-grow-1 w-100",
                        neutral: !a,
                        positive: a,
                        expand: !0
                    }, l.createElement(ot, null, e.displayName, " ", a ? "Enabled" : "Disabled"), a ? l.createElement(c.$1, {
                        width: 20,
                        icon: M.LE
                    }) : l.createElement(c.$1, {
                        width: 20,
                        icon: W.NB,
                        disabled: !0
                    }))))
                })), l.createElement(Pe, {
                    world: ce,
                    handleFieldEdit: An,
                    handleFeatureToggle: Tn
                }), l.createElement(at, null, "Focus View"), l.createElement(We, {
                    className: "align-items-center w-100 flex-column flex-sm-row mt-2"
                }, l.createElement(lt, {
                    type: "button",
                    "aria-label": "Toggle Focus View",
                    onClick: function() {
                        ce.tags.includes("feature_focus_view_disabled") ? ue((function(e) {
                            return Fe(Fe({}, e), {}, {
                                tags: e.tags.filter((function(e) {
                                    return "feature_focus_view_disabled" !== e
                                }))
                            })
                        })) : ue((function(e) {
                            return Fe(Fe({}, e), {}, {
                                tags: [].concat((0, A.Z)(e.tags), ["feature_focus_view_disabled"])
                            })
                        }))
                    },
                    className: "me-0 me-sm-2 mb-2 mb-sm-0 flex-grow-1 w-100",
                    neutral: !Kn,
                    positive: Kn,
                    expand: !0
                }, l.createElement(ot, null, "Focus View ", Kn ? "Enabled" : "Disabled"), Kn ? l.createElement(c.$1, {
                    width: 20,
                    icon: M.LE
                }) : l.createElement(c.$1, {
                    width: 20,
                    icon: W.NB,
                    disabled: !0
                })), l.createElement(c.zx, {
                    role: "checkbox",
                    "aria-checked": Mt,
                    "aria-label": Mt ? "Hide Focus View Help" : "Show Focus View Help",
                    onClick: function() {
                        return Ut(!Mt)
                    },
                    className: "px-2 py-1",
                    neutral: !0
                }, l.createElement(c.$1, {
                    icon: te.sp,
                    disabled: !Mt
                }))), Mt && l.createElement(c.qX, {
                    type: "info",
                    title: "What is Focus View"
                }, "Enabling this will let users use Focus View in your world. If you want finer control, edit the VRC_UIShape component on a canvas to control focus view in your world.", " ", l.createElement("a", {
                    href: "https://creators.vrchat.com/worlds/components/vrc_uishape#focus-view",
                    rel: "noreferrer",
                    target: "_blank"
                }, "Check the docs here.")), l.createElement(at, null, "YouTube Preview Link"), l.createElement(We, {
                    className: "align-items-center w-100 flex-column flex-sm-row mt-2"
                }, l.createElement(c.II, {
                    name: "worldTrailer",
                    "aria-label": "YouTube Preview Link",
                    type: "text",
                    placeholder: "YouTube Preview Link",
                    value: ce.previewYoutubeId ? "https://youtube.com/watch?v=".concat(ce.previewYoutubeId) : "",
                    onChange: function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        ue((function(e) {
                            return Fe(Fe({}, e), {}, {
                                previewYoutubeId: (0, ge.dv)(n)
                            })
                        }))
                    },
                    inputStyle: ze,
                    className: "me-0 me-sm-2 flex-grow-1 w-100 w-sm-auto"
                }), l.createElement(c.zx, {
                    role: "checkbox",
                    "aria-label": Ht ? "Hide Preview" : "Show Preview",
                    "aria-checked": Ht,
                    onClick: function() {
                        return Bt(!Ht)
                    },
                    className: "px-4 py-1 mt-2 mt-sm-0 w-100 w-sm-auto",
                    disabled: !ce.previewYoutubeId,
                    expand: Se,
                    neutral: !0
                }, Ht ? "Hide Preview" : "Show Preview")), ce.previewYoutubeId && Ht && l.createElement(rt, {
                    className: "mt-2"
                }, l.createElement("iframe", {
                    src: "https://www.youtube.com/embed/".concat(ce.previewYoutubeId),
                    title: "World Preview Video",
                    role: "img",
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: !0
                })), l.createElement(at, null, "Video Player Allowed Domains"), l.createElement(c.Lj, {
                    className: "flex-grow-1 w-100 me-0 me-sm-2",
                    value: ce.urlList || [],
                    validator: function(e) {
                        return /.+\..+/.test(e)
                    },
                    onChange: function(e) {
                        return ue(Fe(Fe({}, ce), {}, {
                            urlList: e.filter((function(e) {
                                return e
                            }))
                        }))
                    },
                    name: "Video Player Allowed Domains"
                }, "In public instances, only videos from", " ", l.createElement("a", {
                    href: "https://creators.vrchat.com/worlds/udon/video-players/www-whitelist/",
                    target: "_blank",
                    rel: "noreferrer"
                }, "trusted domains"), " ", "will be allowed to be played, regardless of a user's settings. Add domains to the above list to allow videos from them to be played when a user has untrusted URLs enabled.")), l.createElement(c.l8, {
                    className: "mt-2"
                }, l.createElement(c.oI, null, l.createElement(pt, null, "Danger Zone")), l.createElement(c.Ao, null, l.createElement(at, {
                    className: "mt-0"
                }, "World Visibility"), l.createElement(We, {
                    className: "align-items-sm-center flex-column flex-sm-row mt-2 w-100 flex-grow-1"
                }, l.createElement($e, {
                    className: "flex-1 me-0 me-sm-2 mb-2 mb-sm-0"
                }, ca), l.createElement(Re, {
                    className: "mb-2 mb-sm-0"
                }, l.createElement(We, null, y && Xn && l.createElement(c.zx, {
                    className: "px-3 py-1 me-0 me-sm-2",
                    expand: Se,
                    onClick: function() {
                        hn(!0)
                    },
                    positive: !0,
                    loading: wt
                }, l.createElement(c.$1, {
                    icon: ne.u8,
                    className: "me-2"
                }), "Promote to Public"), ea && l.createElement(c.zx, {
                    className: "px-3 py-1",
                    expand: Se,
                    onClick: function() {
                        cn(!0)
                    },
                    danger: !0,
                    loading: wt
                }, "Unpublish"), ta && l.createElement(c.zx, {
                    className: "px-3 py-1",
                    expand: Se,
                    onClick: function() {
                        an(!0)
                    },
                    positive: !0,
                    loading: wt
                }, "Publish"), Qn && Be && w.user && l.createElement(c.zx, {
                    className: "px-3 py-1",
                    expand: Se,
                    onClick: function() {
                        _n(!0)
                    },
                    positive: !0,
                    loading: wt
                }, l.createElement(c.$1, {
                    icon: Y.jZ,
                    className: "me-2"
                }), "Publish to Community Labs"), na && l.createElement(c.zx, {
                    className: "px-3 py-1",
                    expand: Se,
                    disabled: !0
                }, l.createElement(c.$1, {
                    icon: W.NB,
                    className: "me-2"
                }), "You can't publish worlds right now"), aa && l.createElement(c.zx, {
                    className: "px-3 py-1",
                    expand: Se,
                    disabled: !0
                }, l.createElement(c.$1, {
                    icon: W.NB,
                    className: "me-2"
                }), "You don't have enough trust to publish worlds, yet.")))), yt && "publish" === Ae && l.createElement(c.qX, {
                    type: "success",
                    title: "Your World is now public!"
                }, l.createElement(i.rU, {
                    to: "/home/world/".concat(ce.id)
                }, "Check it out!")), yt && "unpublish" === Ae && l.createElement(c.qX, {
                    type: "success",
                    title: "Your World is now private!",
                    message: "Your world is now private!",
                    slim: !0
                }), bt && l.createElement(c.qX, {
                    type: "error",
                    title: "Failed to change world visibility",
                    message: bt
                }), Cn && l.createElement(be, {
                    onConfirm: Ln,
                    onCancel: function() {
                        _n(!1)
                    }
                }), on && (y ? l.createElement(ye, {
                    onConfirm: In,
                    onCancel: Pn
                }) : l.createElement(we, {
                    onConfirm: In,
                    onCancel: Pn
                })), nn && (y ? l.createElement(xe, {
                    onConfirm: Dn,
                    onCancel: Zn
                }) : Vn && l.createElement(Ee, {
                    onConfirm: Dn,
                    onCancel: Zn
                })), gn && l.createElement(Ce, {
                    onConfirm: Fn,
                    onCancel: function() {
                        hn(!1)
                    }
                }), l.createElement(ut, {
                    className: "px-2 me-0 me-sm-3 mt-2 align-self-center align-self-sm-start"
                }, l.createElement(c.$1, {
                    icon: te.sp,
                    className: "me-2"
                }), l.createElement("a", {
                    href: "https://docs.vrchat.com/docs/submitting-a-world-to-be-made-public",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn more about Community Labs")), l.createElement(at, null, "World Debugging"), l.createElement(We, {
                    className: "align-items-center w-100 flex-column flex-sm-row mt-2"
                }, l.createElement(lt, {
                    type: "button",
                    "aria-label": "Toggle World Debugging",
                    onClick: function() {
                        ce.tags.includes("debug_allowed") ? ue((function(e) {
                            return Fe(Fe({}, e), {}, {
                                tags: e.tags.filter((function(e) {
                                    return "debug_allowed" !== e
                                }))
                            })
                        })) : ue((function(e) {
                            return Fe(Fe({}, e), {}, {
                                tags: [].concat((0, A.Z)(e.tags), ["debug_allowed"])
                            })
                        }))
                    },
                    className: "me-0 me-sm-2 mb-2 mb-sm-0 flex-grow-1 w-100",
                    neutral: !Jn,
                    positive: Jn,
                    expand: !0
                }, l.createElement(ot, null, "World Debugging ", Jn ? "Enabled" : "Disabled"), Jn ? l.createElement(c.$1, {
                    width: 20,
                    icon: M.LE
                }) : l.createElement(c.$1, {
                    width: 20,
                    icon: W.NB,
                    disabled: !0
                })), l.createElement(c.zx, {
                    role: "checkbox",
                    "aria-checked": $t,
                    "aria-label": $t ? "Hide World Debug Help" : "Show World Debug Help",
                    onClick: function() {
                        return qt(!$t)
                    },
                    className: "px-2 py-1",
                    neutral: !0
                }, l.createElement(c.$1, {
                    icon: te.sp,
                    disabled: !$t
                }))), $t && l.createElement(c.qX, {
                    type: "info",
                    title: "What is World Debugging"
                }, "By default, World debug tools are only usable by you, the owner of the world. If you enable world debugging, then anyone can use them in your world.", l.createElement("br", null), l.createElement("br", null), "Warning: Enabling world debug tools will reveal the location and state of triggers in your world. If you are making a puzzle world, or have secrets in your world, this could ruin the fun!", l.createElement("br", null), l.createElement("br", null), "To use the world debug tools, you'll need to pass the --enable-debug-gui flag to VRChat at startup, and press RShift-` along with 7, 8, or 9.", " ", l.createElement("a", {
                    href: "https://docs.vrchat.com/docs/keyboard-and-mouse",
                    target: "_blank",
                    rel: "noreferrer"
                }, "See the keyboard binding documentation for more details"), "."), Mn.platformsList.length > 1 && l.createElement(l.Fragment, null, l.createElement(at, null, "World Platforms"), l.createElement(We, {
                    className: "align-items-center justify-content-between w-100 flex-column flex-sm-row mt-2 tw-gap-3"
                }, Mn.platformsList.map((function(e) {
                    var t;
                    return l.createElement(c.zx, {
                        key: e,
                        onClick: On(e),
                        loading: wt,
                        expand: !0,
                        danger: !0
                    }, l.createElement(c.$1, {
                        icon: ee.$,
                        className: "me-2"
                    }), "Delete ", (null === (t = Ne.VT[e]) || void 0 === t ? void 0 : t.label) || e, " Version")
                })))), null != vn && l.createElement(_e, {
                    platformName: (null === (a = Ne.VT[vn]) || void 0 === a ? void 0 : a.label) || vn,
                    onConfirm: jn,
                    onCancel: function() {
                        yn(null)
                    }
                }), l.createElement(at, null, "World Deletion"), l.createElement(c.zx, {
                    className: "px-3 py-1 mt-2",
                    onClick: function() {
                        dn(!0)
                    },
                    loading: wt,
                    expand: !0,
                    danger: !0
                }, l.createElement(c.$1, {
                    icon: ee.$,
                    className: "me-2"
                }), "Delete World Completely"), mn && l.createElement(ve, {
                    onConfirm: Sn,
                    onCancel: function() {
                        dn(!1)
                    }
                })))), l.createElement(Ve, {
                    className: "ms-0 ms-sm-3 mb-3 mb-sm-0"
                }, l.createElement(Xe, null, l.createElement(c.oI, null, l.createElement(Je, null, l.createElement(Ge, null, l.createElement(Ke, {
                    src: ce.imageUrl,
                    alt: ce.name
                }))), l.createElement(We, {
                    className: "justify-content-between align-items-center"
                }, l.createElement(i.rU, {
                    to: "/home/world/".concat(ce.id)
                }, l.createElement(Qe, null, null == kn ? void 0 : kn.name)))), l.createElement(c.Ao, null, l.createElement(Re, null, l.createElement(Re, null, l.createElement(et, null, l.createElement(c.$1, {
                    width: 20,
                    icon: Q.IL,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(tt, {
                    role: "group",
                    title: "Public Player Count"
                }, l.createElement(nt, null, "Public Players"), (0, ge.ER)(ce.publicOccupants))), l.createElement(et, null, l.createElement(c.$1, {
                    width: 20,
                    icon: K.BC,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(tt, {
                    role: "group",
                    title: "Private Player Count"
                }, l.createElement(nt, null, "Private Players"), (0, ge.ER)(ce.privateOccupants))), l.createElement(et, null, l.createElement(c.$1, {
                    width: 20,
                    icon: G.Md,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(tt, {
                    role: "group",
                    title: "World Visits"
                }, l.createElement(nt, null, "Visits"), (0, ge.ER)(ce.visits))), l.createElement(et, null, l.createElement(c.$1, {
                    width: 20,
                    icon: J.T,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(tt, {
                    role: "group",
                    title: "World Favorites"
                }, l.createElement(nt, null, "Favorites"), (0, ge.ER)(ce.favorites))), sa > 0 && l.createElement(et, null, l.createElement(c.$1, {
                    width: 20,
                    icon: B.JH,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(tt, {
                    role: "group",
                    title: "World Reports"
                }, l.createElement(nt, null, "Reports"), (0, ge.ER)(sa))), la && l.createElement(et, null, l.createElement(c.$1, {
                    width: 20,
                    icon: B.JH,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(tt, {
                    role: "group",
                    title: "Bops in World"
                }, l.createElement(nt, null, "Bops"), (0, ge.ER)(S))), !!ce.heat && l.createElement(et, null, l.createElement(c.$1, {
                    width: 20,
                    icon: H.$c,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(tt, {
                    role: "group",
                    title: "World Heat"
                }, l.createElement(nt, null, "Heat"), l.createElement(We, {
                    className: "align-items-center"
                }, y ? (0, ge.ER)(ce.heat) : ie()(Math.min(10, ce.heat)).map((function(e) {
                    return l.createElement(c.$1, {
                        key: "heat-".concat(e),
                        size: "md",
                        icon: X.Rp,
                        color: "#919191",
                        className: "ms-1"
                    })
                })))))), l.createElement(Re, {
                    className: "mt-4"
                }, Un && l.createElement(et, {
                    role: "note",
                    title: "Cross-Platform"
                }, l.createElement(c.$1, {
                    width: 20,
                    icon: V.vq,
                    color: "#54b5c5",
                    className: "me-2"
                }), "Cross-Platform"), l.createElement(et, null, l.createElement(c.$1, {
                    width: 20,
                    icon: q.r6,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(tt, {
                    role: "group",
                    title: "Last Update Date"
                }, l.createElement(nt, null, "Updated"), h()(ce.updated_at).format("MMM DD YYYY"))), "none" !== ce.publicationDate && l.createElement(et, null, l.createElement(c.$1, {
                    width: 20,
                    icon: $.Ac,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(tt, {
                    role: "group",
                    title: "Publish Date"
                }, l.createElement(nt, null, "Published"), h()(ce.publicationDate).format("MMM DD YYYY"))), "none" !== ce.labsPublicationDate && l.createElement(et, null, l.createElement(c.$1, {
                    width: 20,
                    icon: Y.jZ,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(tt, {
                    role: "group",
                    title: "Labs Publish Date"
                }, l.createElement(nt, null, "Labs'd"), h()(ce.labsPublicationDate).format("MMM DD YYYY"))), l.createElement(et, null, l.createElement(c.$1, {
                    width: 20,
                    icon: z.CP,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(tt, {
                    role: "group",
                    title: "Creation Date"
                }, l.createElement(nt, null, "Created"), h()(ce.created_at).format("MMM DD YYYY"))))))), oa && l.createElement("a", {
                    href: window.apiUrl("/api/1/worlds/".concat(null == ce ? void 0 : ce.id, "/analytics/redirect")),
                    target: "_blank",
                    className: "mt-2",
                    rel: "noreferrer"
                }, l.createElement(c.zx, null, "Download Analytics")), l.createElement(He, {
                    className: "mt-2"
                }, l.createElement(Re, null, l.createElement(Re, {
                    role: "group",
                    "aria-labelledby": "UnityVersionsLabel"
                }, l.createElement(et, {
                    id: "UnityVersionsLabel"
                }, l.createElement(c.$1, {
                    width: 20,
                    icon: U.kl,
                    color: "#54b5c5",
                    className: "me-2"
                }), "Unity Versions"), l.createElement(Re, null, Mn.versionsList.map((function(e) {
                    return e.isSupported ? l.createElement(it, {
                        title: "Unity Version",
                        key: e.name,
                        current: !0
                    }, e.name, " ", l.createElement(c.$1, {
                        icon: M.LE,
                        className: "mx-2",
                        color: "var(--bs-success)"
                    }), " VRChat Supported") : e.isUnsupported ? l.createElement(it, {
                        title: "Unity Version",
                        key: e.name,
                        current: !0
                    }, e.name, " ", l.createElement(c.$1, {
                        icon: W.NB,
                        className: "mx-2",
                        color: "var(--bs-danger)"
                    }), " Unsupported") : l.createElement(it, {
                        title: "Unity Version",
                        key: e.name
                    }, e.name)
                })))), l.createElement(Re, {
                    role: "group",
                    "aria-labelledby": "PlatformsLabel"
                }, l.createElement(et, {
                    className: "mt-2",
                    id: "PlatformsLabel"
                }, l.createElement(c.$1, {
                    width: 20,
                    icon: T.l9,
                    color: "#54b5c5",
                    className: "me-2"
                }), "Platforms"), l.createElement(Re, null, Mn.platformsList.map((function(e) {
                    var t;
                    return l.createElement(ct, {
                        key: e
                    }, (null === (t = Ne.VT[e]) || void 0 === t ? void 0 : t.label) || e)
                })))))), $n && l.createElement(st, {
                    title: "Outdated Unity Version",
                    message: l.createElement(l.Fragment, null, "It is recommended to always use the latest Unity version VRChat supports for your world development.", l.createElement("br", null), "This helps avoid possible incompatibility issues.", l.createElement("br", null), l.createElement("br", null), l.createElement("a", {
                        href: "https://docs.vrchat.com/docs/upgrading-unity-projects",
                        target: "_blank",
                        rel: "noreferrer"
                    }, "Learn more about upgrading"))
                }), Kt && Se && null === Lt && l.createElement(mt, {
                    className: "animated slideInUp"
                }, l.createElement(dt, {
                    onClick: Wn,
                    className: "w-100",
                    loading: j.changing,
                    positive: !0
                }, "Save Changes")))))) : l.createElement(Te, null, l.createElement(We, {
                    className: "mt-2 mb-3 align-items-center justify-content-between"
                }, l.createElement(We, {
                    className: "align-items-center mb-1"
                }, l.createElement(ft, {
                    role: "button",
                    "aria-label": "Back",
                    onClick: Nn
                }, l.createElement(c.$1, {
                    icon: ae.ac,
                    color: "white",
                    size: "2x"
                })), l.createElement(Me, null, "Edit World Info"))), l.createElement(Te, {
                    className: "flex-column flex-sm-row align-items-center justify-content-center w-100"
                }, l.createElement(c.qX, {
                    type: "error",
                    title: "Cannot edit this world",
                    message: "You can only edit your own worlds!"
                }))) : l.createElement(Te, null, l.createElement(We, {
                    className: "mt-2 mb-3 align-items-center justify-content-between"
                }, l.createElement(We, {
                    className: "align-items-center mb-1"
                }, l.createElement(c.$1, {
                    icon: ae.ac,
                    color: "white",
                    size: "2x",
                    onClick: Nn
                }), l.createElement(Me, null, "Edit World Info"))), l.createElement(Te, {
                    className: "flex-column flex-sm-row"
                }, l.createElement(Re, {
                    className: "flex-grow-1 order-last order-sm-first"
                }, l.createElement(c.UU, {
                    height: "500px",
                    width: "100%",
                    radius: 8
                }), l.createElement(c.UU, {
                    className: "mt-2",
                    height: "250px",
                    width: "100%",
                    radius: 8
                })), l.createElement(Ue, {
                    className: "flex-shrink-0 ms-0 ms-sm-2"
                }, l.createElement(c.UU, {
                    width: "100%",
                    height: "550px",
                    className: "w-100 w-sm-auto",
                    radius: 8
                }), l.createElement(c.UU, {
                    className: "mb-2 mb-sm-0 mt-2 w-100 w-sm-auto",
                    width: "100%",
                    height: "150px",
                    radius: 8
                }))))
            };
            var Re = (0, a.Z)("div", {
                    target: "e7ur3i630"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                }),
                Te = (0, a.Z)(Re, {
                    target: "e7ur3i629"
                })({
                    name: "1aea1rw",
                    styles: "align-self:center;width:100%;max-width:1200px"
                }),
                We = (0, a.Z)("div", {
                    target: "e7ur3i628"
                })({
                    name: "zjik7",
                    styles: "display:flex"
                }),
                Me = (0, a.Z)("h2", {
                    target: "e7ur3i627"
                })({
                    name: "1kdats7",
                    styles: "margin:0 0 0 1rem"
                }),
                Ue = (0, a.Z)(Re, {
                    target: "e7ur3i626"
                })({
                    name: "1g3t9m2",
                    styles: "width:100%;@media (min-width: 576px){width:276px;}"
                }),
                ze = {
                    name: "ilysiq",
                    styles: "background-color:#252a30;border-radius:6px;border:none;color:white!important"
                },
                Ye = (0, a.Z)(c.wg, {
                    target: "e7ur3i625"
                })(ze, ";"),
                $e = (0, a.Z)("div", {
                    target: "e7ur3i624"
                })(ze, " padding:0.5rem;line-height:1.25;"),
                qe = (0, a.Z)(Re, {
                    target: "e7ur3i623"
                })({
                    name: "1j03xl7",
                    styles: "background-color:#181b1f;border-radius:8px;padding:0.9rem"
                }),
                Ve = (0, a.Z)(Re, {
                    target: "e7ur3i622"
                })({
                    name: "1budlv3",
                    styles: "width:100%;@media (min-width: 576px){width:290px;}"
                }),
                Xe = (0, a.Z)(Re, {
                    target: "e7ur3i621"
                })({
                    name: "1r30s8q",
                    styles: "border-radius:5px;flex-shrink:0;min-width:calc(256px + 0.5rem);width:100%;@media (min-width: 576px){width:unset;}"
                }),
                He = (0, a.Z)(Xe, {
                    target: "e7ur3i620"
                })({
                    name: "nthc68",
                    styles: "background-color:#181b1f;border:none;border-radius:8px;padding:0.94rem"
                }),
                Be = (0, a.Z)("button", {
                    target: "e7ur3i619"
                })({
                    name: "xv05mj",
                    styles: "background-color:hsla(0, 0%, 0%, 0.5);opacity:0;width:100%;height:100%;top:0;left:0;display:flex;justify-content:center;align-items:center;position:absolute;z-index:10;border:none;outline:none!important;border-radius:3px;color:white;font-weight:600;margin:0;padding:0;transition:opacity 250ms ease"
                }),
                Je = (0, a.Z)("div", {
                    target: "e7ur3i618"
                })("position:relative;border-radius:8px;&:hover{", Be, "{opacity:1;}}"),
                Ge = (0, a.Z)("div", {
                    target: "e7ur3i617"
                })({
                    name: "189lu5",
                    styles: "padding-top:75%;height:0;overflow:hidden;border-radius:8px;position:relative;display:flex;flex-shrink:0;@media (min-width: 576px){padding-top:0;height:192px;width:256px;}"
                }),
                Ke = (0, a.Z)("img", {
                    target: "e7ur3i616"
                })({
                    name: "opoot1",
                    styles: "width:100%;height:100%;top:0;left:0;position:absolute;border-radius:8px"
                }),
                Qe = (0, a.Z)("h4", {
                    target: "e7ur3i615"
                })({
                    name: "c2kuld",
                    styles: "font-size:1.4em;margin-top:0.75rem;margin-bottom:0;color:var(--bs-primary);&:hover{color:var(--bs-primary);}"
                }),
                et = (0, a.Z)(We, {
                    target: "e7ur3i614"
                })({
                    name: "1xhzkqb",
                    styles: "align-items:center;color:#919191;font-weight:bold"
                }),
                tt = (0, a.Z)(We, {
                    target: "e7ur3i613"
                })({
                    name: "1xqm3l8",
                    styles: "align-items:center;justify-content:space-between;flex-grow:1;font-weight:normal"
                }),
                nt = (0, a.Z)("div", {
                    target: "e7ur3i612"
                })({
                    name: "4kr88q",
                    styles: "margin-right:0.5rem;color:#919191;font-weight:bold"
                }),
                at = (0, a.Z)("div", {
                    target: "e7ur3i611"
                })({
                    name: "p9myc0",
                    styles: "color:#88dff4;font-weight:bold;font-size:0.9em;margin-top:10px;padding:0 10px;white-space:pre-wrap"
                }),
                rt = (0, a.Z)("div", {
                    target: "e7ur3i610"
                })({
                    name: "p7qmao",
                    styles: "position:relative;padding-bottom:56.25%;height:0;overflow:hidden;padding-top:30px;border-radius:4px;iframe,object,embed{position:absolute;top:0;left:0;width:100%;height:100%;}"
                }),
                lt = (0, a.Z)(c.zx, {
                    target: "e7ur3i69"
                })({
                    name: "1v8w4bi",
                    styles: "display:flex;align-items:center;min-height:34px"
                }),
                ot = (0, a.Z)("div", {
                    target: "e7ur3i68"
                })({
                    name: "11p52gn",
                    styles: "font-size:1rem;margin-right:10px;margin-left:10px;color:hsla(0, 0%, 100%, 0.6)"
                }),
                it = (0, a.Z)("div", {
                    target: "e7ur3i67"
                })({
                    name: "1k9zvom",
                    styles: "margin-left:1.8rem;display:flex;align-items:center"
                }),
                ct = (0, a.Z)(it, {
                    target: "e7ur3i66"
                })(""),
                st = (0, a.Z)(c.qX, {
                    target: "e7ur3i65"
                })({
                    name: "1268sfy",
                    styles: "@media (min-width: 576px){max-width:290px;}"
                }),
                ut = (0, a.Z)(We, {
                    target: "e7ur3i64"
                })({
                    name: "1h3rtzg",
                    styles: "align-items:center"
                }),
                mt = (0, a.Z)("div", {
                    target: "e7ur3i63"
                })({
                    name: "mcy7ym",
                    styles: "position:fixed;z-index:20;box-shadow:0 0 20px 0 rgba(0, 0, 0, 0.5);border-radius:4px;width:calc(100% - 0.5rem);bottom:10px;animation-duration:250ms;@media (min-width: 575px){width:290px;position:relative;bottom:0;}"
                }),
                dt = (0, a.Z)(c.zx, {
                    target: "e7ur3i62"
                })({
                    name: "1yh1g4i",
                    styles: "background-color:#2fb81dff"
                }),
                pt = (0, a.Z)(at, {
                    target: "e7ur3i61"
                })({
                    name: "12udwy8",
                    styles: "font-size:1.2rem;margin-top:0"
                }),
                ft = (0, a.Z)("button", {
                    target: "e7ur3i60"
                })({
                    name: "1mz3sos",
                    styles: "outline:none!important;padding:0;margin:0;border:none;display:flex;background:transparent;align-items:center;justify-content:center"
                }),
                gt = n(89734),
                ht = n.n(gt),
                bt = n(9669),
                wt = n.n(bt),
                vt = function(e) {
                    var t = e.userId,
                        n = e.number,
                        a = void 0 === n ? 100 : n,
                        r = e.offset,
                        l = void 0 === r ? 0 : r,
                        o = e.releaseStatus,
                        i = void 0 === o ? "all" : o,
                        c = e.sort,
                        s = void 0 === c ? "created" : c,
                        u = e.order,
                        m = void 0 === u ? "descending" : u;
                    return {
                        type: "MY_CONTENT_LOAD_WORLDS",
                        payload: wt().get(window.apiUrl("/api/1/worlds"), {
                            params: {
                                userId: t,
                                n: a,
                                offset: l,
                                releaseStatus: i,
                                sort: s,
                                order: m
                            }
                        }),
                        meta: {
                            number: a,
                            offset: l
                        }
                    }
                },
                yt = function(e) {
                    var t = e.worldIds;
                    return {
                        type: "MY_CONTENT_BULK_CHECK_WORLD_STATS",
                        payload: Promise.all(t.map((function(e) {
                            return wt().get(window.apiUrl("/api/1/worlds/".concat(e)))
                        })))
                    }
                },
                Et = n(89182),
                xt = n(22202);

            function Ct(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function _t(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ct(Object(n), !0).forEach((function(t) {
                        (0, N.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ct(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Nt = [{
                    label: "Creation Date",
                    value: "created"
                }, {
                    label: "Last Updated",
                    value: "updated"
                }, {
                    label: "Favorites",
                    value: "favorites"
                }, {
                    label: "Popularity",
                    value: "popularity"
                }],
                kt = {
                    created: [{
                        label: "Newest First",
                        value: "descending"
                    }, {
                        label: "Oldest First",
                        value: "ascending"
                    }],
                    updated: [{
                        label: "Newest First",
                        value: "descending"
                    }, {
                        label: "Oldest First",
                        value: "ascending"
                    }],
                    favorites: [{
                        label: "Most Favorited",
                        value: "descending"
                    }, {
                        label: "Least Favorited",
                        value: "ascending"
                    }],
                    popularity: [{
                        label: "Most Popular",
                        value: "descending"
                    }, {
                        label: "Least Popular",
                        value: "ascending"
                    }]
                };
            const St = function() {
                var e = (0, b.I0)(),
                    t = (0, o.TH)().search,
                    n = new URLSearchParams(t).get("scrollTo"),
                    a = (0, i.lr)(),
                    r = (0, s.Z)(a, 2),
                    u = (r[0], r[1]),
                    m = new URLSearchParams(t),
                    d = m.get("order"),
                    p = m.get("sort"),
                    f = "false" !== m.get("publicFirst"),
                    g = (0, xt.XC)().data,
                    h = (0, b.v9)((function(e) {
                        return e.myContent.worlds
                    })),
                    w = h.list,
                    v = h.loading,
                    y = h.loadedAt,
                    E = h.error,
                    x = h.errorMessage,
                    C = h.allPagesLoaded,
                    _ = (0, b.v9)((function(e) {
                        return e.myContent.worldStats
                    })),
                    N = l.useState(null == f || f),
                    k = (0, s.Z)(N, 2),
                    S = k[0],
                    I = k[1],
                    P = l.useRef(null != p ? p : "updated"),
                    D = l.useState(null != p ? p : "updated"),
                    Z = (0, s.Z)(D, 2),
                    L = Z[0],
                    F = Z[1],
                    O = l.useRef(null != d ? d : "descending"),
                    j = l.useState(null != d ? d : "descending"),
                    A = (0, s.Z)(j, 2),
                    T = A[0],
                    W = A[1],
                    U = l.useState(""),
                    z = (0, s.Z)(U, 2),
                    Y = z[0],
                    $ = z[1],
                    q = l.useState(0),
                    V = (0, s.Z)(q, 2),
                    X = V[0],
                    H = V[1],
                    B = l.useRef(0);
                l.useEffect((function() {
                    if (!v && null != g && g.id) {
                        var t = !y && 0 === w.length,
                            n = L !== P.current || T !== O.current,
                            a = Date.now() - y > 6e4;
                        (t || a || n) && (H(0), B.current = 0, e(vt({
                            userId: null == g ? void 0 : g.id,
                            number: 50,
                            offset: 0,
                            sort: L,
                            order: T
                        })))
                    }
                }), [null == g ? void 0 : g.id, L, T, y, v]), l.useEffect((function() {
                    v || C || !y || (w.length - B.current < 50 ? e({
                        type: "MY_CONTENT_MARK_ALL_PAGES_LOADED"
                    }) : H(B.current + 50))
                }), [w, v, y, C]), l.useEffect((function() {
                    B.current !== X && (B.current = X, e(vt({
                        userId: g.id,
                        number: 50,
                        offset: X,
                        sort: L,
                        order: T
                    })))
                }), [X]), l.useEffect((function() {
                    if (P.current !== L) {
                        var e = new URLSearchParams(null != t ? t : "");
                        e.delete("scrollTo"), e.set("sort", L), u(e)
                    }
                    P.current = L
                }), [L]), l.useEffect((function() {
                    if (O.current !== T) {
                        var e = new URLSearchParams(null != t ? t : "");
                        e.delete("scrollTo"), e.set("order", T), u(e)
                    }
                    O.current = T
                }), [T]), l.useEffect((function() {
                    var e = new URLSearchParams(null != t ? t : "");
                    e.delete("scrollTo"), S ? e.delete("publicFirst") : e.set("publicFirst", "false"), u(e)
                }), [S]), l.useEffect((function() {
                    n && !v && C && setTimeout((function() {
                        var e = document.querySelector('[data-scrollkey="'.concat(n, '"]'));
                        null == e || e.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                            inline: "nearest"
                        }), setTimeout((function() {
                            e.classList.add("pulse")
                        }), 1e3)
                    }))
                }), [n, v, C]), l.useEffect((function() {
                    var t = function() {
                        var t = (0, R.Z)(me().mark((function t() {
                            var n, a;
                            return me().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!v && !E) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        if (C) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        n = w.filter((function(e) {
                                            return "public" === e.releaseStatus
                                        })), a = 0;
                                    case 6:
                                        if (!(a < n.length)) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 9, e(yt({
                                            worldIds: n.slice(a, a + 2).map((function(e) {
                                                return e.id
                                            }))
                                        }));
                                    case 9:
                                        a += 2, t.next = 6;
                                        break;
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                    t()
                }), [w, v, E, C]);
                var J = l.useMemo((function() {
                        return ht()(w, (function(e) {
                            return "public" === e.releaseStatus ? -1 : 1
                        }))
                    }), [w]),
                    G = l.useMemo((function() {
                        if (!Y) return S ? J : w;
                        try {
                            var e = new RegExp(Y, "i");
                            return (S ? J : w).filter((function(t) {
                                var n = "".concat(t.name, " ").concat(t.id, " ").concat(t.description, " ").concat(t.unityPackages.map((function(e) {
                                    return e.platform
                                })).join(" "), " ").concat(t.releaseStatus, " ").concat(t.tags.join(" "));
                                return e.test(n)
                            }))
                        } catch (e) {
                            return S ? J : w
                        }
                    }), [S, w, J, Y]);
                return l.createElement(It, {
                    className: "mt-2"
                }, l.createElement(c.$4, null, "My Worlds"), l.createElement("h2", {
                    className: "mb-3"
                }, "My Worlds"), l.createElement(c.X2, {
                    className: "align-items-start align-items-sm-center justify-content-between flex-column flex-sm-row"
                }, l.createElement(c.X2, {
                    className: "flex-column flex-sm-row flex-grow-1 w-100 w-sm-auto"
                }, l.createElement(c.II, {
                    className: "mb-2 mb-sm-0 me-0 me-sm-2 flex-grow-1",
                    type: "text",
                    "aria-label": "World Filter",
                    placeholder: "Search Your Worlds",
                    value: Y,
                    onChange: function(e) {
                        var t = e.target.value;
                        return $(void 0 === t ? "" : t)
                    }
                }), l.createElement(Ft, {
                    className: "me-0 me-sm-2 mb-2 mb-sm-0",
                    label: "Sorting",
                    value: L,
                    options: Nt,
                    onChange: F
                }), l.createElement(c.Lt, {
                    className: "mb-2 mb-sm-0",
                    label: "Order",
                    value: T,
                    options: kt[L],
                    onChange: W
                })), l.createElement(c.X2, {
                    className: "ms-0 ms-sm-2 align-self-center align-sm-self-start"
                }, l.createElement(Pt, {
                    role: "checkbox",
                    "aria-checked": S,
                    onClick: function() {
                        return I(!S)
                    }
                }, l.createElement(Dt, null, "Public First"), l.createElement(c.$1, {
                    width: 20,
                    icon: M.LE,
                    disabled: !S,
                    className: "me-1"
                })))), E && l.createElement(c.qX, {
                    type: "error",
                    title: "Failed to load worlds",
                    message: x
                }), y && 0 === w.length && l.createElement(Lt, {
                    role: "note",
                    title: "There are no Worlds here... yet"
                }, "There are no Worlds here... yet"), l.createElement(Zt, null, v && 0 === (null == w ? void 0 : w.length) ? ie()(0, 6).map((function(e) {
                    return l.createElement(c.UU, {
                        key: e,
                        height: "400px",
                        className: "mb-2"
                    })
                })) : !E && G.map((function(e) {
                    var t;
                    return l.createElement(Et.Z, {
                        key: e.id,
                        world: _t(_t({}, e), null !== (t = null == _ ? void 0 : _[e.id]) && void 0 !== t ? t : {}),
                        linksToEdit: !0
                    })
                })), v && (null == w ? void 0 : w.length) > 1 && ie()(0, 6).map((function(e) {
                    return l.createElement(c.UU, {
                        key: e,
                        height: "400px",
                        className: "mb-2"
                    })
                }))))
            };
            var It = (0, a.Z)("div", {
                    target: "eu0ztp85"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                }),
                Pt = (0, a.Z)(c.zx, {
                    target: "eu0ztp84"
                })({
                    name: "3zych9",
                    styles: "display:flex;align-items:center;min-height:2.5rem"
                }),
                Dt = (0, a.Z)("div", {
                    target: "eu0ztp83"
                })({
                    name: "11p52gn",
                    styles: "font-size:1rem;margin-right:10px;margin-left:10px;color:hsla(0, 0%, 100%, 0.6)"
                }),
                Zt = (0, a.Z)("div", {
                    target: "eu0ztp82"
                })({
                    name: "mtvm74",
                    styles: "margin-top:10px;display:grid;column-gap:0.5rem;grid-template-columns:repeat(1, 1fr);@media (min-width: 576px){grid-template-columns:repeat(2, 1fr);}@media (min-width: 992px){grid-template-columns:repeat(3, 1fr);}@media (min-width: 1920px){grid-template-columns:repeat(4, 1fr);}@media (min-width: 2300px){grid-template-columns:repeat(5, 1fr);}"
                }),
                Lt = (0, a.Z)("div", {
                    target: "eu0ztp81"
                })({
                    name: "bpc6lh",
                    styles: "width:100%;height:200px;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#54b5c5;background-color:#252a30;border-radius:8px;font-size:2rem;text-align:center;margin-top:1rem"
                }),
                Ft = (0, a.Z)(c.Lt, {
                    target: "eu0ztp80"
                })({
                    name: "s3oxtx",
                    styles: "z-index:5"
                });
            const Ot = function() {
                var e = (0, o.TH)();
                return l.createElement(jt, null, "/home/content" === e.pathname && l.createElement(jt, null, l.createElement("h2", null, "Manage Uploaded Content"), l.createElement(At, null, l.createElement(Rt, {
                    to: "/home/content/worlds"
                }, l.createElement(Tt, null, l.createElement(c.$1, {
                    className: "mb-3",
                    icon: r.g4,
                    size: "5x"
                }), l.createElement(Wt, null, "Worlds"))))), l.createElement(o.Z5, null, l.createElement(o.AW, {
                    path: "/"
                }, l.createElement(o.AW, {
                    path: "/worlds",
                    element: l.createElement(St, null)
                }), l.createElement(o.AW, {
                    path: "/worlds/:worldId/edit",
                    element: l.createElement(Ae, null)
                }), l.createElement(o.AW, {
                    path: "/worlds/*",
                    element: l.createElement(St, null)
                }), l.createElement(o.AW, {
                    path: "/restricted/:contentId",
                    element: l.createElement(O, null)
                }))))
            };
            var jt = (0, a.Z)("div", {
                    target: "e7t0ljh4"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                }),
                At = (0, a.Z)("div", {
                    target: "e7t0ljh3"
                })({
                    name: "1j04kkb",
                    styles: "display:flex;@media (max-width: 400px){flex-direction:column;}"
                }),
                Rt = (0, a.Z)(i.rU, {
                    target: "e7t0ljh2"
                })({
                    name: "168sy3z",
                    styles: "display:flex;border:#07343f solid 2px;border-radius:4px;background:#07343f;color:#6ae3f9;box-sizing:border-box;outline:none!important;flex:1;padding-bottom:40%;height:0;overflow:hidden;margin-right:1rem;margin-top:1rem;position:relative;@media (max-width: 400px){padding-bottom:60%;margin-right:0;}&:hover,&:active,&:focus{border-color:#086c84;}"
                }),
                Tt = (0, a.Z)("div", {
                    target: "e7t0ljh1"
                })({
                    name: "1g561ia",
                    styles: "padding:5px 5px;position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;top:0;left:0"
                }),
                Wt = (0, a.Z)("div", {
                    target: "e7t0ljh0"
                })({
                    name: "mn5luc",
                    styles: "font-size:2rem;font-weight:bold"
                })
        },
        89182: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var a = n(87462),
                r = n(45697),
                l = n.n(r),
                o = n(67294),
                i = n(37463),
                c = function(e) {
                    var t;
                    return o.createElement(i.uW, (0, a.Z)({
                        fieldsList: ["occupants", "visits", "favorites", "updated_at"],
                        contentType: "world",
                        data: null !== (t = e.world) && void 0 !== t ? t : e.data
                    }, e))
                };
            c.propTypes = {
                world: l().shape({
                    id: l().string,
                    name: l().string,
                    releaseStatus: l().oneOf(["public", "private"]),
                    occupants: l().number,
                    favorites: l().number,
                    visits: l().number,
                    updated_at: l().string,
                    created_at: l().string,
                    tags: l().arrayOf(l().string),
                    unityPackages: l().arrayOf(l().shape({
                        platform: l().string
                    }))
                }).isRequired,
                fieldsList: l().arrayOf(l().string)
            };
            const s = c
        },
        28213: (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => P
            });
            var a = n(95819),
                r = n(92728),
                l = n(76409),
                o = n(51193),
                i = n(68335),
                c = n(54228),
                s = n(85322),
                u = n(54326),
                m = n(68055),
                d = n(17726),
                p = n(16995),
                f = n(66007),
                g = n(59895),
                h = n(42137),
                b = n(34604),
                w = n(23778),
                v = n(88673),
                y = n(26128),
                E = n(47420),
                x = n(29167),
                C = n(92221),
                _ = n(88302),
                N = n(46450),
                k = n(609),
                S = n(84176),
                I = n(75213),
                P = [{
                    tag: "admin_moderator",
                    icon: n(2335).fG,
                    description: "VRChat Team"
                }, {
                    tag: "admin_scripting_access",
                    icon: I.dT,
                    description: "Scripting Access"
                }, {
                    tag: "admin_avatar_access",
                    icon: S.DD,
                    description: "Forced Avatar Access"
                }, {
                    tag: "admin_world_access",
                    icon: S.DD,
                    description: "Forced World Access"
                }, {
                    tag: "admin_lock_tags",
                    icon: k.by,
                    description: "Locked Tags"
                }, {
                    tag: "admin_lock_level",
                    icon: k.by,
                    description: "Locked Level"
                }, {
                    tag: "admin_can_grant_licenses",
                    icon: N.mG,
                    description: "Can Grant Licenses"
                }, {
                    tag: "system_world_access",
                    icon: _.kl,
                    description: "SDK World Access"
                }, {
                    tag: "system_avatar_access",
                    icon: _.kl,
                    description: "SDK Avatar Access"
                }, {
                    tag: "system_feedback_access",
                    icon: l.Ac,
                    description: "Feedback Access"
                }, {
                    tag: "system_trust_basic",
                    icon: C.rv,
                    description: "New User"
                }, {
                    tag: "system_trust_known",
                    icon: x.C7,
                    description: "User"
                }, {
                    tag: "system_trust_trusted",
                    icon: E.yS,
                    description: "Known User"
                }, {
                    tag: "system_trust_veteran",
                    icon: y.jA,
                    description: "Trusted User"
                }, {
                    tag: "system_probable_troll",
                    icon: v.I7,
                    description: "Probable Nuisance"
                }, {
                    tag: "system_troll",
                    icon: w.c7,
                    description: "Nuisance"
                }, {
                    tag: "system_supporter",
                    icon: b.m6,
                    description: "VRC+ Subscriber"
                }, {
                    tag: "system_early_adopter",
                    icon: h.SZ,
                    description: "Early VRC+ Adopter"
                }, {
                    tag: "admin_approved",
                    icon: g.u8,
                    description: "Approved"
                }, {
                    tag: "admin_featured",
                    icon: r.QY,
                    description: "Featured"
                }, {
                    tag: "admin_community_spotlight",
                    icon: r.QY,
                    description: "Community Spotlight"
                }, {
                    tag: "admin_avatar_world",
                    icon: f.KC,
                    description: "Avatar World"
                }, {
                    tag: "admin_hidden",
                    icon: p.Ps,
                    description: "Won't Appear in Search"
                }, {
                    tag: "admin_hide_active",
                    icon: p.Ps,
                    description: "Won't Appear in Active"
                }, {
                    tag: "admin_hide_new",
                    icon: p.Ps,
                    description: "Won't Appear in New"
                }, {
                    tag: "admin_hide_popular",
                    icon: p.Ps,
                    description: "Won't Appear in Popular"
                }, {
                    tag: "system_labs",
                    icon: d.jZ,
                    description: "System Labs"
                }, {
                    tag: "system_approved",
                    icon: m.LE,
                    description: "Approved"
                }, {
                    tag: "system_updated_recently",
                    icon: u.IV,
                    description: "Updated Recently"
                }, {
                    tag: "system_created_recently",
                    icon: s.fT,
                    description: "Created Recently"
                }, {
                    tag: "system_published_recently",
                    icon: s.fT,
                    description: "Published Recently"
                }, {
                    tag: "admin_halloween_2018",
                    icon: o.dC,
                    description: "Halloween 2018"
                }, {
                    tag: "admin_halloween_2019",
                    icon: o.dC,
                    description: "Halloween 2019"
                }, {
                    tag: "admin_christmas_2018",
                    icon: c.mb,
                    description: "Christmas 2018"
                }, {
                    tag: "admin_christmas_2019",
                    icon: c.mb,
                    description: "Christmas 2019"
                }, {
                    tag: "admin_spookality_2020_winner",
                    icon: o.dC,
                    description: "Spookality 2020 Winner"
                }, {
                    tag: "admin_vket_summer_2023",
                    icon: i.vJ,
                    description: "Vket 2023 Summer"
                }, {
                    tag: "admin_eternally_cursed",
                    icon: o.dC,
                    description: "Eternally Cursed"
                }, {
                    tag: "admin_canny_access",
                    icon: l.Ac,
                    description: "Canny Access Override"
                }, {
                    tag: "admin_spotlight_pc",
                    icon: r.QY,
                    description: "Spotlight: PC"
                }, {
                    tag: "admin_spotlight_quest",
                    icon: r.QY,
                    description: "Spotlight: Quest"
                }, {
                    tag: "admin_spotlight_xplat",
                    icon: r.QY,
                    description: "Spotlight: Cross-Platform"
                }, {
                    tag: "admin_internal_world",
                    icon: a.U,
                    description: "Internal World"
                }]
        },
        91557: (e, t, n) => {
            "use strict";
            n.d(t, {
                jO: () => u,
                lY: () => m,
                lw: () => s,
                oR: () => c
            });
            var a = n(4942),
                r = n(61509);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var i = r.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getRestrictedContent: e.query({
                                query: function(e) {
                                    var t = e.contentId;
                                    return {
                                        url: "/contentRestrictions/content/".concat(t)
                                    }
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "RestrictedContent",
                                        id: n.contentId
                                    }]
                                }
                            }),
                            requestContentRestriction: e.mutation({
                                query: function(e) {
                                    var t = e.claimInfo,
                                        n = e.ownerInfo;
                                    return {
                                        url: "/contentRestrictions",
                                        method: "POST",
                                        body: o(o({}, t), n)
                                    }
                                }
                            }),
                            disputeContentRestriction: e.mutation({
                                query: function(e) {
                                    var t = e.contentId,
                                        n = e.disputeInfo,
                                        a = e.contentRestrictionId;
                                    return {
                                        url: "/contentRestrictions/".concat(a, "/dispute"),
                                        method: "POST",
                                        body: o({
                                            contentId: t
                                        }, n)
                                    }
                                },
                                invalidatesTags: (0, r.T)((function(e) {
                                    return [{
                                        type: "RestrictedContent",
                                        id: e.contentId
                                    }]
                                }))
                            }),
                            deleteDispute: e.mutation({
                                query: function(e) {
                                    var t = e.contentRestrictionId,
                                        n = e.contentId;
                                    return {
                                        url: "/contentRestrictions/".concat(t, "/dispute"),
                                        method: "DELETE",
                                        body: {
                                            contentId: n
                                        }
                                    }
                                },
                                invalidatesTags: (0, r.T)((function(e) {
                                    return [{
                                        type: "RestrictedContent",
                                        id: e.contentId
                                    }]
                                }))
                            })
                        }
                    }
                }),
                c = i.useGetRestrictedContentQuery,
                s = i.useRequestContentRestrictionMutation,
                u = i.useDisputeContentRestrictionMutation,
                m = i.useDeleteDisputeMutation
        },
        18446: (e, t, n) => {
            var a = n(90939);
            e.exports = function(e, t) {
                return a(e, t)
            }
        },
        93235: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var n, a;
                (0, r.default)(e), "object" === l(t) ? (n = t.min || 0, a = t.max) : (n = arguments[1], a = arguments[2]);
                var o = encodeURI(e).split(/%..|./).length - 1;
                return o >= n && (void 0 === a || o <= a)
            };
            var a, r = (a = n(65571)) && a.__esModule ? a : {
                default: a
            };

            function l(e) {
                return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, l(e)
            }
            e.exports = t.default, e.exports.default = t.default
        },
        83868: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                if ((0, a.default)(e), (t = (0, i.default)(t, s)).require_display_name || t.allow_display_name) {
                    var n = e.match(u);
                    if (n) {
                        var c = n[1];
                        if (e = e.replace(c, "").replace(/(^<|>$)/g, ""), c.endsWith(" ") && (c = c.slice(0, -1)), ! function(e) {
                                var t = e.replace(/^"(.+)"$/, "$1");
                                if (!t.trim()) return !1;
                                if (/[\.";<>]/.test(t)) {
                                    if (t === e) return !1;
                                    if (!(t.split('"').length === t.split('\\"').length)) return !1
                                }
                                return !0
                            }(c)) return !1
                    } else if (t.require_display_name) return !1
                }
                if (!t.ignore_max_length && e.length > h) return !1;
                var b = e.split("@"),
                    w = b.pop(),
                    v = w.toLowerCase();
                if (t.host_blacklist.includes(v)) return !1;
                if (t.host_whitelist.length > 0 && !t.host_whitelist.includes(v)) return !1;
                var y = b.join("@");
                if (t.domain_specific_validation && ("gmail.com" === v || "googlemail.com" === v)) {
                    var E = (y = y.toLowerCase()).split("+")[0];
                    if (!(0, r.default)(E.replace(/\./g, ""), {
                            min: 6,
                            max: 30
                        })) return !1;
                    for (var x = E.split("."), C = 0; C < x.length; C++)
                        if (!d.test(x[C])) return !1
                }
                if (!(!1 !== t.ignore_max_length || (0, r.default)(y, {
                        max: 64
                    }) && (0, r.default)(w, {
                        max: 254
                    }))) return !1;
                if (!(0, l.default)(w, {
                        require_tld: t.require_tld,
                        ignore_max_length: t.ignore_max_length,
                        allow_underscores: t.allow_underscores
                    })) {
                    if (!t.allow_ip_domain) return !1;
                    if (!(0, o.default)(w)) {
                        if (!w.startsWith("[") || !w.endsWith("]")) return !1;
                        var _ = w.slice(1, -1);
                        if (0 === _.length || !(0, o.default)(_)) return !1
                    }
                }
                if ('"' === y[0]) return y = y.slice(1, y.length - 1), t.allow_utf8_local_part ? g.test(y) : p.test(y);
                for (var N = t.allow_utf8_local_part ? f : m, k = y.split("."), S = 0; S < k.length; S++)
                    if (!N.test(k[S])) return !1;
                if (t.blacklisted_chars && -1 !== y.search(new RegExp("[".concat(t.blacklisted_chars, "]+"), "g"))) return !1;
                return !0
            };
            var a = c(n(65571)),
                r = c(n(93235)),
                l = c(n(10221)),
                o = c(n(61028)),
                i = c(n(84808));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = {
                    allow_display_name: !1,
                    allow_underscores: !1,
                    require_display_name: !1,
                    allow_utf8_local_part: !0,
                    require_tld: !0,
                    blacklisted_chars: "",
                    ignore_max_length: !1,
                    host_blacklist: [],
                    host_whitelist: []
                },
                u = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i,
                m = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
                d = /^[a-z\d]+$/,
                p = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
                f = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
                g = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,
                h = 254;
            e.exports = t.default, e.exports.default = t.default
        },
        10221: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                (0, a.default)(e), (t = (0, r.default)(t, o)).allow_trailing_dot && "." === e[e.length - 1] && (e = e.substring(0, e.length - 1));
                !0 === t.allow_wildcard && 0 === e.indexOf("*.") && (e = e.substring(2));
                var n = e.split("."),
                    l = n[n.length - 1];
                if (t.require_tld) {
                    if (n.length < 2) return !1;
                    if (!t.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(l)) return !1;
                    if (/\s/.test(l)) return !1
                }
                if (!t.allow_numeric_tld && /^\d+$/.test(l)) return !1;
                return n.every((function(e) {
                    return !(e.length > 63 && !t.ignore_max_length) && (!!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(e) && (!/[\uff01-\uff5e]/.test(e) && (!/^-|-$/.test(e) && !(!t.allow_underscores && /_/.test(e)))))
                }))
            };
            var a = l(n(65571)),
                r = l(n(84808));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = {
                require_tld: !0,
                allow_underscores: !1,
                allow_trailing_dot: !1,
                allow_numeric_tld: !1,
                allow_wildcard: !1,
                ignore_max_length: !1
            };
            e.exports = t.default, e.exports.default = t.default
        },
        61028: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                if ((0, r.default)(t), !(n = String(n))) return e(t, 4) || e(t, 6);
                if ("4" === n) return i.test(t);
                if ("6" === n) return s.test(t);
                return !1
            };
            var a, r = (a = n(65571)) && a.__esModule ? a : {
                default: a
            };
            var l = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
                o = "(".concat(l, "[.]){3}").concat(l),
                i = new RegExp("^".concat(o, "$")),
                c = "(?:[0-9a-fA-F]{1,4})",
                s = new RegExp("^(" + "(?:".concat(c, ":){7}(?:").concat(c, "|:)|") + "(?:".concat(c, ":){6}(?:").concat(o, "|:").concat(c, "|:)|") + "(?:".concat(c, ":){5}(?::").concat(o, "|(:").concat(c, "){1,2}|:)|") + "(?:".concat(c, ":){4}(?:(:").concat(c, "){0,1}:").concat(o, "|(:").concat(c, "){1,3}|:)|") + "(?:".concat(c, ":){3}(?:(:").concat(c, "){0,2}:").concat(o, "|(:").concat(c, "){1,4}|:)|") + "(?:".concat(c, ":){2}(?:(:").concat(c, "){0,3}:").concat(o, "|(:").concat(c, "){1,5}|:)|") + "(?:".concat(c, ":){1}(?:(:").concat(c, "){0,4}:").concat(o, "|(:").concat(c, "){1,6}|:)|") + "(?::((?::".concat(c, "){0,5}:").concat(o, "|(?::").concat(c, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
            e.exports = t.default, e.exports.default = t.default
        },
        65571: (e, t) => {
            "use strict";

            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                if (!("string" == typeof e || e instanceof String)) {
                    var t = n(e);
                    throw null === e ? t = "null" : "object" === t && (t = e.constructor.name), new TypeError("Expected a string but received a ".concat(t))
                }
            }, e.exports = t.default, e.exports.default = t.default
        },
        84808: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                for (var n in t) void 0 === e[n] && (e[n] = t[n]);
                return e
            }, e.exports = t.default, e.exports.default = t.default
        }
    }
]);
//# sourceMappingURL=524cb68cd7a2e1285182ec4e5a364895f86ff844354b91b1d5fb89cab86dec41.js.map