(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6780], {
        3820: (e, t) => {
            "use strict";
            var n = "clipboard",
                a = [128203],
                r = "f328",
                l = "M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z";
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
                l = "M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5L320 210.7l72.2-72.2C419.5 111.3 456.4 96 494.9 96C575 96 640 161 640 241.1v29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2C220.5 400.7 183.6 416 145.1 416C65 416 0 351 0 270.9V241.1zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8C100.3 160 64 196.3 64 241.1v29.7c0 44.8 36.3 81.1 81.1 81.1c21.5 0 42.2-8.5 57.4-23.8L274.7 256zm90.5 0l72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8c44.8 0 81.1-36.3 81.1-81.1V241.1c0-44.8-36.3-81.1-81.1-81.1c-21.5 0-42.2 8.5-57.4 23.8L365.3 256z";
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
                l = "M453.3 19.3l39.4 39.4c25 25 25 65.5 0 90.5l-52.1 52.1 0 0-1-1 0 0-16-16-96-96-17-17 52.1-52.1c25-25 65.5-25 90.5 0zM241 114.9c-9.4-9.4-24.6-9.4-33.9 0L105 217c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L173.1 81c28.1-28.1 73.7-28.1 101.8 0L288 94.1l17 17 96 96 16 16 1 1-17 17L229.5 412.5c-48 48-109.2 80.8-175.8 94.1l-25 5c-7.9 1.6-16-.9-21.7-6.6s-8.1-13.8-6.6-21.7l5-25c13.3-66.6 46.1-127.8 94.1-175.8L254.1 128 241 114.9z";
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
                r = n(43862),
                l = n(81362);
            const o = function(e) {
                var t = e.reducer,
                    n = e.loading,
                    o = e.loadingList,
                    i = e.error,
                    c = e.statusCode,
                    s = e.children,
                    m = !1;
                return o && o.forEach((function(e) {
                    e && (m = !0)
                })), null != c && 200 !== c && "200" !== c ? a.createElement(l.Z, {
                    error: i,
                    statusCode: c
                }) : null != t && null != t.statusCode && 200 !== t.statusCode && "200" !== t.statusCode ? a.createElement(l.Z, {
                    error: t.error,
                    statusCode: t.statusCode
                }) : i ? a.createElement(l.Z, {
                    error: i
                }) : null != t && t.error ? a.createElement(l.Z, {
                    error: t.error
                }) : n || m || null != t && t.fetching || null != t && t.loading ? a.createElement(r.Z, null) : a.createElement("div", null, s)
            }
        },
        86780: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => Zt
            });
            var a = n(4965),
                r = n(66062),
                l = n(67294),
                o = n(89250),
                i = n(79655),
                c = n(34226),
                s = n(54546),
                m = n(21429),
                u = n(17183),
                d = n(56646),
                p = n(81143),
                f = n(3820),
                g = n(27484),
                h = n.n(g),
                b = n(32981),
                w = n(53637),
                E = n(95305),
                y = n(35773),
                v = n(64258),
                x = n(80873),
                C = n(91557),
                N = n(98185),
                k = n(4942),
                _ = n(82414),
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

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(n), !0).forEach((function(t) {
                        (0, k.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const D = function(e) {
                var t, n, a, r, o, i, m, u, d, p, f = e.dispute,
                    g = e.disputeLoading,
                    h = e.contentId,
                    b = e.contentRestrictionId,
                    w = e.closeModal,
                    E = (0, l.useState)({}),
                    y = (0, s.Z)(E, 2),
                    v = y[0],
                    x = y[1],
                    C = (0, l.useState)({}),
                    N = (0, s.Z)(C, 2),
                    S = N[0],
                    P = N[1],
                    D = (null == S ? void 0 : S.mistake) && (null == S ? void 0 : S.consent) && (null == S ? void 0 : S.process),
                    A = I()(null !== (t = null == v ? void 0 : v.email) && void 0 !== t ? t : "") && (null == v || null === (n = v.fullName) || void 0 === n ? void 0 : n.length) > 0 && (null == v || null === (a = v.mailingAddress) || void 0 === a ? void 0 : a.length) > 0 && (null == v || null === (r = v.mailingCity) || void 0 === r ? void 0 : r.length) > 0 && (null == v || null === (o = v.mailingCountry) || void 0 === o ? void 0 : o.length) > 0 && (null == v || null === (i = v.phoneNumber) || void 0 === i ? void 0 : i.length) > 0 && (null == v || null === (m = v.signature) || void 0 === m ? void 0 : m.length) > 0 && D && (null == v || null === (u = v.signature) || void 0 === u ? void 0 : u.toLowerCase()) === (null == v || null === (d = v.fullName) || void 0 === d ? void 0 : d.toLowerCase()),
                    j = function(e) {
                        P(Z(Z({}, S), {}, (0, k.Z)({}, e.target.id, e.target.checked)))
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
                        return x(Z(Z({}, v), {}, {
                            fullName: e.target.value
                        }))
                    },
                    value: null == v ? void 0 : v.fullName
                })), l.createElement("label", {
                    htmlFor: "user-org-name",
                    className: "tw-mb-4"
                }, "Name of your organization (optional)", l.createElement(c.II, {
                    className: "tw-pt-2",
                    id: "user-org-name",
                    type: "text",
                    value: null == v ? void 0 : v.organization,
                    onChange: function(e) {
                        return x(Z(Z({}, v), {}, {
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
                    value: null == v ? void 0 : v.mailingAddress,
                    onChange: function(e) {
                        return x(Z(Z({}, v), {}, {
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
                    value: null == v ? void 0 : v.mailingCity,
                    onChange: function(e) {
                        return x(Z(Z({}, v), {}, {
                            mailingCity: e.target.value
                        }))
                    }
                })), l.createElement("label", {
                    htmlFor: "owner-mailing-state-province",
                    className: "tw-mb-4 tw-flex-grow"
                }, "State/Province", l.createElement(c.II, {
                    id: "owner-mailing-state-province",
                    value: null == v ? void 0 : v.mailingStateProvince,
                    onChange: function(e) {
                        return x(Z(Z({}, v), {}, {
                            mailingStateProvince: e.target.value
                        }))
                    }
                })), l.createElement("label", {
                    htmlFor: "owner-mailing-postal-code",
                    className: "tw-mb-4 tw-flex-grow"
                }, "ZIP/Postal Code", l.createElement(c.II, {
                    id: "owner-mailing-postal-code",
                    value: null == v ? void 0 : v.mailingPostalCode,
                    onChange: function(e) {
                        return x(Z(Z({}, v), {}, {
                            mailingPostalCode: e.target.value
                        }))
                    }
                }))), l.createElement("label", {
                    htmlFor: "owner-mailing-country"
                }, "Country", l.createElement(c.II, {
                    id: "owner-mailing-country",
                    value: null == v ? void 0 : v.mailingCountry,
                    onChange: function(e) {
                        return x(Z(Z({}, v), {}, {
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
                    value: null == v ? void 0 : v.phoneNumber,
                    onChange: function(e) {
                        return x(Z(Z({}, v), {}, {
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
                    value: null == v ? void 0 : v.email,
                    onChange: function(e) {
                        return x(Z(Z({}, v), {}, {
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
                })), D ? null : l.createElement("div", {
                    className: "tw-flex tw-items-center tw-bg-[#FF57671A] tw-mb-4 tw-rounded"
                }, l.createElement(c.$1, {
                    color: "#EE5454",
                    className: "tw-px-2",
                    icon: _.sq
                }), l.createElement("p", {
                    className: "tw-text-red tw-py-2 tw-m-0"
                }, "Please select all the checkboxes if you want to proceed.")), l.createElement(O, null, l.createElement("div", {
                    className: "tw-my-2"
                }, l.createElement(c.$1, {
                    className: "tw-px-2",
                    icon: _.sq
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
                    value: null == v || null === (p = v.signature) || void 0 === p ? void 0 : p.toUpperCase(),
                    onChange: function(e) {
                        return x(Z(Z({}, v), {}, {
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
                    disabled: g || !A,
                    containerStyles: {
                        width: "100%"
                    },
                    onClick: function() {
                        return f({
                            contentId: h,
                            disputeInfo: v,
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
                O = (0, a.Z)("div", {
                    target: "erb120c0"
                })({
                    name: "tayqdf",
                    styles: "display:flex;flex-direction:column;align-items:baseline;color:#9c9c9c;background-color:#000;border-radius:8px;padding:0.5rem;margin-bottom:1rem"
                });
            const A = function() {
                var e, t, n = (0, o.UO)().contentId,
                    a = (0, x.Tu)().user,
                    r = (0, b.I0)(),
                    i = (0, C.oR)({
                        contentId: n
                    }),
                    g = i.data,
                    k = i.isFetching,
                    _ = i.isError,
                    S = i.error,
                    I = (0, C.jO)(),
                    P = (0, s.Z)(I, 2),
                    Z = P[0],
                    L = P[1],
                    O = L.isLoading,
                    A = L.isError,
                    W = L.isSuccess,
                    T = L.error,
                    R = (0, C.lY)(),
                    U = (0, s.Z)(R, 2),
                    M = U[0],
                    Y = U[1],
                    z = Y.isLoading,
                    F = Y.isSuccess,
                    $ = Y.isError,
                    V = Y.error,
                    q = (0, l.useState)(null),
                    X = (0, s.Z)(q, 2),
                    H = X[0],
                    B = X[1],
                    J = (0, l.useState)(!1),
                    G = (0, s.Z)(J, 2),
                    K = G[0],
                    Q = G[1];
                return (0, l.useEffect)((function() {
                    var e;
                    (W && (B(!1), r((0, v.d)({
                        title: "DMCA Dispute",
                        icon: f.Yj,
                        message: "Your dispute has been submitted successfully.",
                        color: "success",
                        timeout: 7e3
                    }))), A) && (B(!1), r((0, v.d)({
                        title: "DMCA Dispute",
                        icon: f.Yj,
                        message: "Your dispute could not be submitted successfully: ".concat(null == T || null === (e = T.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message),
                        color: "danger",
                        timeout: 7e3
                    })))
                }), [W, A]), (0, l.useEffect)((function() {
                    var e;
                    (F && r((0, v.d)({
                        title: "DMCA Dispute",
                        icon: f.Yj,
                        message: "Your dispute has been withdrawn successfully.",
                        color: "success",
                        timeout: 7e3
                    })), $) && r((0, v.d)({
                        title: "DMCA Dispute",
                        icon: f.Yj,
                        message: "Failed to withdraw your dispute successfully: ".concat(null == V || null === (e = V.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message),
                        color: "danger",
                        timeout: 7e3
                    }))
                }), [$, F]), k ? l.createElement(N.Z, {
                    loading: !0
                }) : _ ? l.createElement(w.Z, null, l.createElement(c.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == S || null === (t = S.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred when loading the content.")) : l.createElement(w.Z, null, l.createElement("div", {
                    className: "m-2"
                }, l.createElement(E.Z, {
                    className: "w-100 pb-3"
                }, l.createElement(c.oI, {
                    className: "tw-text-xl"
                }, g.name), l.createElement(c.Ao, null, l.createElement(j, {
                    xs: "12",
                    className: "tw-p-4"
                }, l.createElement(y.Z, null, l.createElement(E.Z, {
                    xs: "12",
                    md: "3"
                }, l.createElement("div", {
                    class: "tw-w-fit tw-relative"
                }, l.createElement("img", {
                    className: "w-100 tw-border-solid tw-border-4 tw-border-orange-400",
                    src: g.thumbnailImageUrl,
                    title: g.name,
                    alt: g.name
                }), l.createElement("div", {
                    className: "p-1 tw-w-full tw-bg-orange-400/75 tw-text-center tw-text-black tw-font-bold tw-absolute tw-bottom-1"
                }, "Archived"))), l.createElement(E.Z, {
                    xs: "12",
                    md: "9",
                    className: "flex-1"
                }, l.createElement("h4", null, g.name, l.createElement("span", null, " ", l.createElement("small", null, "—  ", g.authorName))), l.createElement("p", null, g.description)))))), l.createElement(E.Z, {
                    className: "w-100"
                }, l.createElement(y.Z, {
                    style: {
                        "--bs-gutter-x": "1rem"
                    }
                }, l.createElement(E.Z, {
                    xs: "12",
                    md: "8"
                }, l.createElement(c.oI, {
                    className: "tw-text-xl"
                }, "DMCA"), l.createElement(c.Ao, {
                    className: "tw-flex tw-text-sm"
                }, l.createElement("div", {
                    className: "tw-flex tw-flex-row tw-place-content-between"
                }, l.createElement("div", null, null !== (e = g.id) && void 0 !== e && e.startsWith("avtr_") ? "Avatar" : "World", " Visibility:", l.createElement("div", {
                    className: "mt-2 mb-4 tw-text-lg tw-font-bold"
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
                }), "  Withdraw")), (null == a ? void 0 : a.id) === g.authorId && !g.disputed && l.createElement(l.Fragment, null, l.createElement(c.zx, {
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
                }, l.createElement(D, {
                    dispute: Z,
                    disputeLoading: O,
                    contentId: g.id,
                    contentRestrictionId: g.contentRestrictionId,
                    closeModal: function() {
                        return B(!1)
                    }
                })))), l.createElement("a", {
                    className: "tw-text-light-grey tw-underline",
                    href: "https://hello.vrchat.com/copyright",
                    target: "_blank",
                    rel: "noreferrer"
                }, l.createElement(c.$1, {
                    className: "tw-pr-1",
                    icon: d.faCircleInfo
                }), "Learn more about the DMCA process"))), l.createElement(E.Z, {
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
                    icon: u.faSquarePlus
                }), "Created"), h()(null == g ? void 0 : g.createdAt).format("MMM DD YYYY")), l.createElement("div", {
                    className: "tw-flex tw-place-content-between tw-text-light-grey"
                }, l.createElement("div", {
                    className: "tw-flex tw-items-center"
                }, l.createElement(c.$1, {
                    color: "#2BAAC1",
                    width: 17,
                    className: "tw-pr-2",
                    icon: m.faCloudArrowUp
                }), "Updated"), h()(null == g ? void 0 : g.updatedAt).format("MMM DD YYYY"))))))))
            };
            var j = (0, a.Z)(E.Z, {
                    target: "ek2okq60"
                })({
                    name: "1e3lcuk",
                    styles: "border:1px solid #2BAAC1;& a{color:white;}& img{border-radius:5px;max-height:200px;max-width:200px;}"
                }),
                W = n(42138),
                T = n(15861),
                R = n(12529),
                U = n(59545),
                M = n(68055),
                Y = n(88302),
                z = n(30856),
                F = n(17726),
                $ = n(76409),
                V = n(34601),
                q = n(96157),
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
                me = n(64687),
                ue = n.n(me),
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
                Ee = function(e) {
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
                ve = function(e) {
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
                Ne = function(e) {
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
                };

            function ke(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return _e(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _e(e, t)
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

            function _e(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function Se(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Ie(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Se(Object(n), !0).forEach((function(t) {
                        (0, k.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Pe = {
                    standalonewindows: "PC",
                    android: "Android",
                    ios: "iOS"
                },
                Ze = {
                    name: "ozd7xs",
                    styles: "flex-shrink:0"
                },
                De = {
                    name: "ozd7xs",
                    styles: "flex-shrink:0"
                };
            const Le = function() {
                var e, t, n, a = (0, b.I0)(),
                    m = (0, i.lr)(),
                    u = (0, s.Z)(m, 1)[0],
                    d = (0, o.s0)(),
                    p = (0, o.UO)().worldId,
                    f = (0, x.Tu)(),
                    g = f.trustLevel,
                    w = f.user,
                    E = (0, x.pc)(),
                    y = (0, x.BT)({
                        worldId: p,
                        userId: w.id,
                        isMod: E,
                        noCache: !0
                    }),
                    C = y.data,
                    N = y.reports,
                    _ = y.bops,
                    S = y.loading,
                    I = y.error,
                    P = y.errorMessage,
                    Z = y.refreshWorld,
                    D = void 0 === Z ? function() {} : Z,
                    L = (null == C ? void 0 : C.authorId) === w.id,
                    O = E || L,
                    A = (0, b.v9)((function(e) {
                        return e.world.updatedWorld
                    })),
                    j = l.useState(null),
                    re = (0, s.Z)(j, 2),
                    oe = re[0],
                    ce = re[1],
                    me = (0, fe.y)().data,
                    he = (void 0 === me ? {} : me).sdkUnityVersion,
                    _e = (0, x.dD)(),
                    Se = l.useRef(null),
                    Le = l.useRef(null),
                    Ve = (0, x.T)({
                        worldId: p
                    }),
                    ut = Ve.action,
                    dt = Ve.canPublish,
                    pt = Ve.deleteWorld,
                    ft = Ve.deleteWorldPlatform,
                    gt = Ve.error,
                    ht = Ve.loading,
                    bt = Ve.publishWorld,
                    wt = Ve.success,
                    Et = Ve.unpublishWorld,
                    yt = l.useState(!1),
                    vt = (0, s.Z)(yt, 2),
                    xt = vt[0],
                    Ct = vt[1],
                    Nt = l.useState(!1),
                    kt = (0, s.Z)(Nt, 2),
                    _t = kt[0],
                    St = kt[1],
                    It = l.useState(null),
                    Pt = (0, s.Z)(It, 2),
                    Zt = Pt[0],
                    Dt = Pt[1],
                    Lt = l.useState(!1),
                    Ot = (0, s.Z)(Lt, 2),
                    At = Ot[0],
                    jt = Ot[1],
                    Wt = l.useState(!1),
                    Tt = (0, s.Z)(Wt, 2),
                    Rt = Tt[0],
                    Ut = Tt[1],
                    Mt = l.useState(!1),
                    Yt = (0, s.Z)(Mt, 2),
                    zt = Yt[0],
                    Ft = Yt[1],
                    $t = l.useState(!1),
                    Vt = (0, s.Z)($t, 2),
                    qt = Vt[0],
                    Xt = Vt[1],
                    Ht = l.useState(!1),
                    Bt = (0, s.Z)(Ht, 2),
                    Jt = Bt[0],
                    Gt = Bt[1],
                    Kt = l.useState(!1),
                    Qt = (0, s.Z)(Kt, 2),
                    en = Qt[0],
                    tn = Qt[1],
                    nn = l.useState(!1),
                    an = (0, s.Z)(nn, 2),
                    rn = an[0],
                    ln = an[1],
                    on = l.useState(!1),
                    cn = (0, s.Z)(on, 2),
                    sn = cn[0],
                    mn = cn[1],
                    un = l.useState(!1),
                    dn = (0, s.Z)(un, 2),
                    pn = dn[0],
                    fn = dn[1],
                    gn = l.useState(null),
                    hn = (0, s.Z)(gn, 2),
                    bn = hn[0],
                    wn = hn[1],
                    En = l.useState(!1),
                    yn = (0, s.Z)(En, 2),
                    vn = yn[0],
                    xn = yn[1],
                    Cn = function() {
                        var e = u.get("backLink");
                        if (e) {
                            var t = new URLSearchParams(u);
                            return u.delete("backLink"), void d("".concat(e, "?").concat(t))
                        }
                        var n = new URLSearchParams(u);
                        u.set("scrollTo", p), d("/home/content/worlds?".concat(n))
                    };
                l.useEffect((function() {
                    if (!S && oe) {
                        var e = document.querySelector(".content-scroll");
                        (null == e ? void 0 : e.scrollTop) > 0 && (null == e || e.scrollTo(0, 0))
                    }
                }), [S, null == oe ? void 0 : oe.id]);
                var Nn = l.useMemo((function() {
                    return "string" != typeof(null == C ? void 0 : C.description) ? null : Ie({
                        description: "",
                        tags: [],
                        previewYoutubeId: ""
                    }, C)
                }), [C]);
                l.useEffect((function() {
                    if (Nn && oe) {
                        var e = !se()({
                            name: oe.name,
                            description: oe.description,
                            releaseStatus: oe.releaseStatus,
                            tags: oe.tags,
                            capacity: oe.capacity,
                            recommendedCapacity: oe.recommendedCapacity,
                            previewYoutubeId: null == oe ? void 0 : oe.previewYoutubeId
                        }, {
                            name: Nn.name,
                            description: Nn.description,
                            releaseStatus: Nn.releaseStatus,
                            tags: Nn.tags,
                            capacity: Nn.capacity,
                            recommendedCapacity: Nn.recommendedCapacity,
                            previewYoutubeId: null == Nn ? void 0 : Nn.previewYoutubeId
                        });
                        Gt(e)
                    }
                }), [Nn, oe]), l.useEffect((function() {
                    if (null !== oe) {
                        var e = function(e) {
                            return e <= 0 || Number.isNaN(e) || !Number.isInteger(e) || "" === e
                        };
                        e(null == oe ? void 0 : oe.recommendedCapacity) ? Dt("Please enter a valid Recommended Capacity number.") : e(null == oe ? void 0 : oe.capacity) ? Dt("Please enter a valid Maximum Capacity number.") : oe.recommendedCapacity > oe.capacity ? Dt("Recommended Capacity can not be higher than Maximum Capacity.") : oe.capacity > 80 ? Dt("Maximum Capacity can not be higher than 80.") : Dt(null)
                    }
                }), [oe]), l.useEffect((function() {
                    null !== Nn && ce(Ie(Ie({}, Nn), {
                        recommendedCapacity: (null == Nn ? void 0 : Nn.recommendedCapacity) || (null == Nn ? void 0 : Nn.capacity)
                    }))
                }), [Nn]);
                var kn = function() {
                        var e = (0, T.Z)(ue().mark((function e() {
                            return ue().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return mn(!1), e.next = 3, pt();
                                    case 3:
                                        D();
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
                    _n = function() {
                        var e = (0, T.Z)(ue().mark((function e() {
                            return ue().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return ln(!1), e.next = 3, Et();
                                    case 3:
                                        D();
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
                    Sn = function() {
                        ln(!1)
                    },
                    In = function() {
                        var e = (0, T.Z)(ue().mark((function e() {
                            return ue().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return tn(!1), e.next = 3, bt();
                                    case 3:
                                        D();
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
                        tn(!1)
                    },
                    Zn = function() {
                        var e = (0, T.Z)(ue().mark((function e() {
                            return ue().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return xn(!1), e.next = 3, bt();
                                    case 3:
                                        D();
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
                    Dn = function() {
                        var e = (0, T.Z)(ue().mark((function e() {
                            return ue().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return fn(!1), e.next = 3, bt();
                                    case 3:
                                        D();
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
                    Ln = function(e) {
                        return function() {
                            wn(e)
                        }
                    },
                    On = function() {
                        var e = (0, T.Z)(ue().mark((function e() {
                            return ue().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ft(bn);
                                    case 2:
                                        return wn(null), e.next = 5, new Promise((function(e) {
                                            return setTimeout(e, 1e3)
                                        }));
                                    case 5:
                                        D();
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
                            ce(Ie(Ie({}, oe), {}, (0, k.Z)({}, e, a)))
                        }
                    },
                    jn = function(e) {
                        return function(t) {
                            var n = t.target.value,
                                a = void 0 === n ? "" : n;
                            ce(Ie(Ie({}, oe), {}, (0, k.Z)({}, e, Number(a))))
                        }
                    },
                    Wn = function() {
                        var e = (0, T.Z)(ue().mark((function e() {
                            var t;
                            return ue().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (Jt && oe && Nn) {
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
                                        return e.prev = 15, e.next = 18, a((0, de.tc)({
                                            tagList: t,
                                            worldId: p
                                        }));
                                    case 18:
                                        e.next = 23;
                                        break;
                                    case 20:
                                        e.prev = 20, e.t1 = e.catch(15), console.error(e.t1);
                                    case 23:
                                        return e.prev = 23, e.next = 26, a((0, de.GE)(Ie(Ie({}, oe), {}, {
                                            worldId: p
                                        })));
                                    case 26:
                                        A.error || a((0, v.d)({
                                            title: "World Info Updated",
                                            icon: r.g4,
                                            message: "You have successfully updated ".concat(null != oe && oe.name ? "world: ".concat(oe.name) : "this world"),
                                            color: "success",
                                            timeout: 5e3
                                        })), D(), e.next = 33;
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
                    Tn = l.useMemo((function() {
                        if (!oe) return {
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
                            i = ke([].concat(oe.unityPackages).reverse());
                        try {
                            for (i.s(); !(e = i.n()).done;) {
                                var c = e.value,
                                    s = c.unityVersion,
                                    m = c.unitySortNumber,
                                    u = c.platform,
                                    d = (0, ge.el)(m, he),
                                    p = d.isUnsupported,
                                    f = d.isSupported,
                                    g = d.isOld;
                                r = r || p, l = l || f, o = o || g, n.has(s) || (n.add(s), t.push({
                                    name: s,
                                    isUnsupported: p,
                                    isSupported: f,
                                    isOld: g
                                })), a.has(u) || a.add(u)
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
                    }), [null == oe ? void 0 : oe.unityPackages, he]),
                    Rn = l.useMemo((function() {
                        if (!oe) return !1;
                        var e = Tn.platformsList.includes("standalonewindows"),
                            t = Tn.platformsList.includes("android");
                        return e && t
                    }), [oe, Tn.platformsList]),
                    Un = Tn.hasUnsupported && !Tn.hasSupported && !Tn.hasOld,
                    Mn = Tn.hasUnsupported && (Tn.hasSupported || Tn.hasOld),
                    Yn = !Tn.hasUnsupported && !Tn.hasSupported,
                    zn = l.useMemo((function() {
                        var e, t = new Set(null !== (e = null == oe ? void 0 : oe.tags) && void 0 !== e ? e : []);
                        return {
                            isAdminApproved: t.has("admin_approved"),
                            isInLabs: t.has("system_labs"),
                            isLabsLocked: t.has("admin_lock_labs"),
                            isLabsFailed: t.has("system_troll"),
                            isWorldDebugEnabled: t.has("debug_allowed"),
                            isAvatarScalingEnabled: !t.has("feature_avatar_scaling_disabled"),
                            isStickersEnabled: !t.has("feature_stickers_disabled"),
                            isFocusViewEnabled: !t.has("feature_focus_view_disabled")
                        }
                    }), [null == oe ? void 0 : oe.tags]),
                    Fn = zn.isAdminApproved,
                    $n = zn.isInLabs,
                    Vn = zn.isLabsLocked,
                    qn = zn.isLabsFailed,
                    Xn = zn.isWorldDebugEnabled,
                    Hn = zn.isAvatarScalingEnabled,
                    Bn = zn.isStickersEnabled,
                    Jn = zn.isFocusViewEnabled,
                    Gn = !("public" === (null == oe ? void 0 : oe.releaseStatus) || Fn || $n || E || qn || Vn),
                    Kn = "public" === (null == oe ? void 0 : oe.releaseStatus),
                    Qn = !Kn && (E || Fn && dt),
                    ea = Gn && !dt,
                    ta = Gn && !ea && !g.user,
                    na = !(null != oe && oe.name) || "" === (null == oe ? void 0 : oe.name),
                    aa = (null != _ ? _ : 0) > 0,
                    ra = l.useMemo((function() {
                        return O && ((null == oe ? void 0 : oe.tags.includes("admin_filter_analytics")) || aa)
                    }), [O, null == oe ? void 0 : oe.tags, aa]),
                    la = l.useMemo((function() {
                        var e;
                        return null == oe || null === (e = oe.tags) || void 0 === e ? void 0 : e.map((function(e) {
                            if (!E && !e.startsWith("author_tag_")) return null;
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
                    }), [null == oe ? void 0 : oe.tags]),
                    oa = $n ? "In Community Labs" : le()(null == oe ? void 0 : oe.releaseStatus),
                    ia = null !== (e = null !== (t = null == N ? void 0 : N.reportCount) && void 0 !== t ? t : null == N || null === (n = N.feedbackReport) || void 0 === n ? void 0 : n.reportCount) && void 0 !== e ? e : 0;
                return !S && (oe && C || I) ? !S && I ? l.createElement(Ae, null, l.createElement(je, {
                    className: "mt-2 mb-3 align-items-center justify-content-between"
                }, l.createElement(je, {
                    className: "align-items-center mb-1"
                }, l.createElement(mt, {
                    role: "button",
                    "aria-label": "Back",
                    onClick: Cn
                }, l.createElement(c.$1, {
                    icon: ae.ac,
                    color: "white",
                    size: "2x"
                })), l.createElement(We, null, "Edit World Info"))), l.createElement(Ae, {
                    className: "flex-column flex-sm-row align-items-center justify-content-center w-100"
                }, l.createElement(c.qX, {
                    type: "error",
                    title: "Could not load World data",
                    message: P
                }))) : O ? l.createElement(Ae, null, l.createElement(je, {
                    className: "mt-2 mb-3 align-items-center justify-content-between"
                }, l.createElement(je, {
                    className: "align-items-center mb-1"
                }, l.createElement(mt, {
                    role: "button",
                    "aria-label": "Back",
                    onClick: Cn
                }, l.createElement(c.$1, {
                    icon: ae.ac,
                    color: "white",
                    size: "2x"
                })), l.createElement(We, null, "Edit World Info")), Jt && !_e && null === Zt && l.createElement(it, {
                    className: "animated fadeIn"
                }, l.createElement(ct, {
                    onClick: Wn,
                    className: "w-100",
                    loading: A.changing,
                    positive: !0
                }, "Save Changes"))), l.createElement(je, {
                    className: "mb-2 align-items-sm-center justify-content-between flex-column flex-sm-row"
                }), l.createElement(Ae, {
                    className: "mb-5"
                }, A.error && l.createElement(c.qX, {
                    type: "error",
                    title: "Failed to update World data",
                    message: A.error
                }), Un && l.createElement(c.qX, {
                    title: "Unsupported Unity Version",
                    type: "error",
                    message: l.createElement(l.Fragment, null, "None of the uploaded world versions are using a supported Unity version.", l.createElement("br", null), l.createElement("b", null, "Please always use a Unity version VRChat supports."), l.createElement("br", null), l.createElement("br", null), l.createElement("a", {
                        href: "https://docs.vrchat.com/docs/current-unity-version",
                        target: "_blank",
                        rel: "noreferrer"
                    }, "Learn more here"))
                }), Mn && l.createElement(c.qX, {
                    title: "Unsupported Unity Version",
                    type: "warn",
                    message: l.createElement(l.Fragment, null, "Some of the uploaded world versions are using an unsupported Unity version.", l.createElement("br", null), l.createElement("b", null, "Please always use a Unity version VRChat supports."), l.createElement("br", null), l.createElement("br", null), l.createElement("a", {
                        href: "https://docs.vrchat.com/docs/current-unity-version",
                        target: "_blank",
                        rel: "noreferrer"
                    }, "Learn more here"))
                }), Zt && l.createElement(c.qX, {
                    type: "error",
                    title: "Capacity",
                    message: Zt
                }), l.createElement(je, {
                    className: "align-items-start flex-column flex-sm-row"
                }, l.createElement(Oe, {
                    className: "order-last order-sm-first w-100 w-sm-auto flex-grow-1"
                }, l.createElement(Ye, {
                    className: "w-100 w-sm-auto flex-grow-1"
                }, l.createElement(Qe, {
                    className: "mt-0"
                }, "Name"), l.createElement(c.II, {
                    name: "worldName",
                    "aria-label": "World Name",
                    type: "text",
                    placeholder: "World Name",
                    value: oe.name,
                    onChange: An("name"),
                    onBlur: function() {
                        oe.name && "" !== oe.name || ce(Ie(Ie({}, oe), {}, {
                            name: Nn.name
                        }))
                    },
                    inputStyle: Re,
                    className: "mt-2"
                }), na && l.createElement(c.qX, {
                    type: "error",
                    title: "World Name Error",
                    message: "World Name can't be empty",
                    slim: !0
                }), l.createElement(Qe, null, "Maximum Capacity"), l.createElement(je, {
                    className: "align-items-center w-100 mt-2 flex-column flex-sm-row"
                }, l.createElement(c.II, {
                    ref: Se,
                    name: "maximum-capacity",
                    "aria-label": "Maximum Capacity",
                    type: "number",
                    placeholder: "Maximum Capacity",
                    inputMode: "number",
                    defaultValue: oe.capacity,
                    onBlur: jn("capacity"),
                    inputStyle: Re,
                    className: "flex-grow-1 w-100 me-0 me-sm-2"
                }), l.createElement(c.zx, {
                    role: "checkbox",
                    "aria-checked": xt,
                    "aria-label": xt ? "Hide Maximum Capacity Help" : "Show Maximum Capacity Help",
                    onClick: function() {
                        return Ct(!xt)
                    },
                    className: "px-2 py-1 mt-2 mt-sm-0",
                    containerStyles: De,
                    neutral: !0
                }, l.createElement(c.$1, {
                    icon: te.sp,
                    disabled: !xt
                }))), xt && l.createElement(c.qX, {
                    type: "info",
                    title: "Maximum Capacity",
                    message: "Maximum Capacity controls how many users are allowed into one instance of a world at a time. Additional users are not allowed to join over this limit with very few exceptions, such as the world creator, instance owners, and group owners."
                }), l.createElement(Qe, null, "Recommended Capacity"), l.createElement(je, {
                    className: "align-items-center w-100 mt-2 flex-column flex-sm-row"
                }, l.createElement(c.II, {
                    ref: Le,
                    name: "recommended-capacity",
                    "aria-label": "Recommended Capacity",
                    type: "number",
                    placeholder: "Recommended Capacity",
                    inputMode: "number",
                    defaultValue: oe.recommendedCapacity,
                    onBlur: jn("recommendedCapacity"),
                    inputStyle: Re,
                    className: "flex-grow-1 w-100 me-0 me-sm-2"
                }), l.createElement(c.zx, {
                    role: "checkbox",
                    "aria-checked": _t,
                    "aria-label": _t ? "Hide Recommended Capacity Help" : "Show Recommended Capacity Help",
                    onClick: function() {
                        return St(!_t)
                    },
                    className: "px-2 py-1 mt-2 mt-sm-0",
                    containerStyles: Ze,
                    neutral: !0
                }, l.createElement(c.$1, {
                    icon: te.sp,
                    disabled: !_t
                }))), _t && l.createElement(c.qX, {
                    type: "info",
                    title: "Recommended Capacity",
                    message: "Recommended Capacity controls how many users are allowed into one Public or Group Public instance of a world before that instance is no longer visible on the world instance list. Instances above Recommended Capacity are still accessible through other methods, such as joining through a group, or off of a friend. All other instance types are not impacted by the Recommended Capacity."
                }), l.createElement(Qe, null, "Description"), l.createElement(c.gx, {
                    name: "worldDescription",
                    "aria-label": "World Description",
                    placeholder: "World Description",
                    value: oe.description,
                    onChange: An("description"),
                    inputStyle: Re,
                    rows: "4",
                    className: "mt-2"
                }), l.createElement(Qe, null, "Tags"), l.createElement(Ue, {
                    value: la,
                    placeholder: "E.g., adventure, game, chill",
                    suggestions: [],
                    onSelectValue: function(e) {
                        var t, n, a, r = e.startsWith("system_") || e.startsWith("admin_");
                        if ((E || !r) && (null == oe || null === (t = oe.tags) || void 0 === t || !t.includes(e))) {
                            var l = e.replace(/\s/gi, "_").replace(/\W/gi, "");
                            E && r || (l = "author_tag_".concat(l)), null != oe && null !== (n = oe.tags) && void 0 !== n && n.includes(l) || ce(Ie(Ie({}, oe), {}, {
                                tags: [].concat((0, W.Z)(null !== (a = null == oe ? void 0 : oe.tags) && void 0 !== a ? a : []), [l])
                            }))
                        }
                    },
                    onRemoveValue: function(e) {
                        var t, n;
                        ce(Ie(Ie({}, oe), {}, {
                            tags: null !== (t = null == oe || null === (n = oe.tags) || void 0 === n ? void 0 : n.filter((function(t) {
                                return t !== e
                            }))) && void 0 !== t ? t : []
                        }))
                    },
                    maxEntries: E ? void 0 : 5,
                    maxLength: E ? void 0 : 100,
                    maxEntriesErrorText: "You can only have up to 5 tags",
                    maxLengthErrorText: "Entered tag is too long",
                    className: "mt-2",
                    label: "Tags",
                    addNewLabel: "Add new tag",
                    allowNew: !0
                }), l.createElement(Qe, null, "Content Warnings"), l.createElement(Oe, {
                    className: "py-2 gap-2"
                }, l.createElement(c.ks, {
                    tags: null == oe ? void 0 : oe.tags,
                    isMod: E,
                    onSelectValues: function(e) {
                        ce(Ie(Ie({}, oe), {}, {
                            tags: [].concat((0, W.Z)(oe.tags), (0, W.Z)(e))
                        }))
                    },
                    onRemoveValue: function(e) {
                        ce(Ie(Ie({}, oe), {}, {
                            tags: oe.tags.filter((function(t) {
                                return t !== e
                            }))
                        }))
                    }
                })), l.createElement(Qe, null, "Avatar Scaling"), l.createElement(je, {
                    className: "align-items-center w-100 flex-column flex-sm-row mt-2"
                }, l.createElement(tt, {
                    type: "button",
                    "aria-label": "Toggle Avatar Scaling",
                    onClick: function() {
                        oe.tags.includes("feature_avatar_scaling_disabled") ? ce(Ie(Ie({}, oe), {}, {
                            tags: oe.tags.filter((function(e) {
                                return "feature_avatar_scaling_disabled" !== e
                            }))
                        })) : ce(Ie(Ie({}, oe), {}, {
                            tags: [].concat((0, W.Z)(oe.tags), ["feature_avatar_scaling_disabled"])
                        }))
                    },
                    className: "me-0 me-sm-2 mb-2 mb-sm-0 flex-grow-1 w-100",
                    neutral: !Hn,
                    positive: Hn,
                    expand: !0
                }, l.createElement(nt, null, "Avatar Scaling ", Hn ? "Enabled" : "Disabled"), Hn ? l.createElement(c.$1, {
                    width: 20,
                    icon: M.LE
                }) : l.createElement(c.$1, {
                    width: 20,
                    icon: U.NB,
                    disabled: !0
                })), l.createElement(c.zx, {
                    role: "checkbox",
                    "aria-checked": At,
                    "aria-label": At ? "Hide Avatar Scaling Help" : "Show Avatar Scaling Help",
                    onClick: function() {
                        return jt(!At)
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
                }, "Check the docs here.")), l.createElement(Qe, null, "Stickers"), l.createElement(je, {
                    className: "align-items-center w-100 flex-column flex-sm-row mt-2"
                }, l.createElement(tt, {
                    type: "button",
                    "aria-label": "Toggle Stickers",
                    onClick: function() {
                        oe.tags.includes("feature_stickers_disabled") ? ce(Ie(Ie({}, oe), {}, {
                            tags: oe.tags.filter((function(e) {
                                return "feature_stickers_disabled" !== e
                            }))
                        })) : ce(Ie(Ie({}, oe), {}, {
                            tags: [].concat((0, W.Z)(oe.tags), ["feature_stickers_disabled"])
                        }))
                    },
                    className: "me-0 me-sm-2 mb-2 mb-sm-0 flex-grow-1 w-100",
                    neutral: !Bn,
                    positive: Bn,
                    expand: !0
                }, l.createElement(nt, null, "Stickers ", Bn ? "Enabled" : "Disabled"), Bn ? l.createElement(c.$1, {
                    width: 20,
                    icon: M.LE
                }) : l.createElement(c.$1, {
                    width: 20,
                    icon: U.NB,
                    disabled: !0
                }))), l.createElement(Qe, null, "Focus View"), l.createElement(je, {
                    className: "align-items-center w-100 flex-column flex-sm-row mt-2"
                }, l.createElement(tt, {
                    type: "button",
                    "aria-label": "Toggle Focus View",
                    onClick: function() {
                        oe.tags.includes("feature_focus_view_disabled") ? ce(Ie(Ie({}, oe), {}, {
                            tags: oe.tags.filter((function(e) {
                                return "feature_focus_view_disabled" !== e
                            }))
                        })) : ce(Ie(Ie({}, oe), {}, {
                            tags: [].concat((0, W.Z)(oe.tags), ["feature_focus_view_disabled"])
                        }))
                    },
                    className: "me-0 me-sm-2 mb-2 mb-sm-0 flex-grow-1 w-100",
                    neutral: !Jn,
                    positive: Jn,
                    expand: !0
                }, l.createElement(nt, null, "Focus View ", Jn ? "Enabled" : "Disabled"), Jn ? l.createElement(c.$1, {
                    width: 20,
                    icon: M.LE
                }) : l.createElement(c.$1, {
                    width: 20,
                    icon: U.NB,
                    disabled: !0
                })), l.createElement(c.zx, {
                    role: "checkbox",
                    "aria-checked": Rt,
                    "aria-label": Rt ? "Hide Focus View Help" : "Show Focus View Help",
                    onClick: function() {
                        return Ut(!Rt)
                    },
                    className: "px-2 py-1",
                    neutral: !0
                }, l.createElement(c.$1, {
                    icon: te.sp,
                    disabled: !Rt
                }))), Rt && l.createElement(c.qX, {
                    type: "info",
                    title: "What is Focus View"
                }, "Enabling this will let users use Focus View in your world. If you want finer control, edit the VRC_UIShape component on a canvas to control focus view in your world.", " ", l.createElement("a", {
                    href: "https://creators.vrchat.com/worlds/components/vrc_uishape#focus-view",
                    rel: "noreferrer",
                    target: "_blank"
                }, "Check the docs here.")), l.createElement(Qe, null, "YouTube Preview Link"), l.createElement(je, {
                    className: "align-items-center w-100 flex-column flex-sm-row mt-2"
                }, l.createElement(c.II, {
                    name: "worldTrailer",
                    "aria-label": "YouTube Preview Link",
                    type: "text",
                    placeholder: "YouTube Preview Link",
                    value: oe.previewYoutubeId ? "https://youtube.com/watch?v=".concat(oe.previewYoutubeId) : "",
                    onChange: function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        ce(Ie(Ie({}, oe), {}, {
                            previewYoutubeId: (0, ge.dv)(n)
                        }))
                    },
                    inputStyle: Re,
                    className: "me-0 me-sm-2 flex-grow-1 w-100 w-sm-auto"
                }), l.createElement(c.zx, {
                    role: "checkbox",
                    "aria-label": qt ? "Hide Preview" : "Show Preview",
                    "aria-checked": qt,
                    onClick: function() {
                        return Xt(!qt)
                    },
                    className: "px-4 py-1 mt-2 mt-sm-0 w-100 w-sm-auto",
                    disabled: !oe.previewYoutubeId,
                    expand: _e,
                    neutral: !0
                }, qt ? "Hide Preview" : "Show Preview")), oe.previewYoutubeId && qt && l.createElement(et, {
                    className: "mt-2"
                }, l.createElement("iframe", {
                    src: "https://www.youtube.com/embed/".concat(oe.previewYoutubeId),
                    title: "World Preview Video",
                    role: "img",
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: !0
                }))), l.createElement(c.l8, {
                    className: "mt-2"
                }, l.createElement(c.oI, null, l.createElement(st, null, "Danger Zone")), l.createElement(c.Ao, null, l.createElement(Qe, {
                    className: "mt-0"
                }, "World Visibility"), l.createElement(je, {
                    className: "align-items-sm-center flex-column flex-sm-row mt-2 w-100 flex-grow-1"
                }, l.createElement(Me, {
                    className: "flex-1 me-0 me-sm-2 mb-2 mb-sm-0"
                }, oa), l.createElement(Oe, {
                    className: "mb-2 mb-sm-0"
                }, l.createElement(je, null, E && $n && l.createElement(c.zx, {
                    className: "px-3 py-1 me-0 me-sm-2",
                    expand: _e,
                    onClick: function() {
                        fn(!0)
                    },
                    positive: !0,
                    loading: ht
                }, l.createElement(c.$1, {
                    icon: ne.u8,
                    className: "me-2"
                }), "Promote to Public"), Kn && l.createElement(c.zx, {
                    className: "px-3 py-1",
                    expand: _e,
                    onClick: function() {
                        ln(!0)
                    },
                    danger: !0,
                    loading: ht
                }, "Unpublish"), Qn && l.createElement(c.zx, {
                    className: "px-3 py-1",
                    expand: _e,
                    onClick: function() {
                        tn(!0)
                    },
                    positive: !0,
                    loading: ht
                }, "Publish"), Gn && dt && g.user && l.createElement(c.zx, {
                    className: "px-3 py-1",
                    expand: _e,
                    onClick: function() {
                        xn(!0)
                    },
                    positive: !0,
                    loading: ht
                }, l.createElement(c.$1, {
                    icon: F.jZ,
                    className: "me-2"
                }), "Publish to Community Labs"), ea && l.createElement(c.zx, {
                    className: "px-3 py-1",
                    expand: _e,
                    disabled: !0
                }, l.createElement(c.$1, {
                    icon: U.NB,
                    className: "me-2"
                }), "You can't publish worlds right now"), ta && l.createElement(c.zx, {
                    className: "px-3 py-1",
                    expand: _e,
                    disabled: !0
                }, l.createElement(c.$1, {
                    icon: U.NB,
                    className: "me-2"
                }), "You don't have enough trust to publish worlds, yet.")))), wt && "publish" === ut && l.createElement(c.qX, {
                    type: "success",
                    title: "Your World is now public!"
                }, l.createElement(i.rU, {
                    to: "/home/world/".concat(oe.id)
                }, "Check it out!")), wt && "unpublish" === ut && l.createElement(c.qX, {
                    type: "success",
                    title: "Your World is now private!",
                    message: "Your world is now private!",
                    slim: !0
                }), gt && l.createElement(c.qX, {
                    type: "error",
                    title: "Failed to change world visibility",
                    message: gt
                }), vn && l.createElement(be, {
                    onConfirm: Zn,
                    onCancel: function() {
                        xn(!1)
                    }
                }), rn && (E ? l.createElement(ye, {
                    onConfirm: _n,
                    onCancel: Sn
                }) : l.createElement(we, {
                    onConfirm: _n,
                    onCancel: Sn
                })), en && (E ? l.createElement(xe, {
                    onConfirm: In,
                    onCancel: Pn
                }) : Fn && l.createElement(ve, {
                    onConfirm: In,
                    onCancel: Pn
                })), pn && l.createElement(Ce, {
                    onConfirm: Dn,
                    onCancel: function() {
                        fn(!1)
                    }
                }), l.createElement(ot, {
                    className: "px-2 me-0 me-sm-3 mt-2 align-self-center align-self-sm-start"
                }, l.createElement(c.$1, {
                    icon: te.sp,
                    className: "me-2"
                }), l.createElement("a", {
                    href: "https://docs.vrchat.com/docs/submitting-a-world-to-be-made-public",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn more about Community Labs")), l.createElement(Qe, null, "World Debugging"), l.createElement(je, {
                    className: "align-items-center w-100 flex-column flex-sm-row mt-2"
                }, l.createElement(tt, {
                    type: "button",
                    "aria-label": "Toggle World Debugging",
                    onClick: function() {
                        oe.tags.includes("debug_allowed") ? ce(Ie(Ie({}, oe), {}, {
                            tags: oe.tags.filter((function(e) {
                                return "debug_allowed" !== e
                            }))
                        })) : ce(Ie(Ie({}, oe), {}, {
                            tags: [].concat((0, W.Z)(oe.tags), ["debug_allowed"])
                        }))
                    },
                    className: "me-0 me-sm-2 mb-2 mb-sm-0 flex-grow-1 w-100",
                    neutral: !Xn,
                    positive: Xn,
                    expand: !0
                }, l.createElement(nt, null, "World Debugging ", Xn ? "Enabled" : "Disabled"), Xn ? l.createElement(c.$1, {
                    width: 20,
                    icon: M.LE
                }) : l.createElement(c.$1, {
                    width: 20,
                    icon: U.NB,
                    disabled: !0
                })), l.createElement(c.zx, {
                    role: "checkbox",
                    "aria-checked": zt,
                    "aria-label": zt ? "Hide World Debug Help" : "Show World Debug Help",
                    onClick: function() {
                        return Ft(!zt)
                    },
                    className: "px-2 py-1",
                    neutral: !0
                }, l.createElement(c.$1, {
                    icon: te.sp,
                    disabled: !zt
                }))), zt && l.createElement(c.qX, {
                    type: "info",
                    title: "What is World Debugging"
                }, "By default, World debug tools are only usable by you, the owner of the world. If you enable world debugging, then anyone can use them in your world.", l.createElement("br", null), l.createElement("br", null), "Warning: Enabling world debug tools will reveal the location and state of triggers in your world. If you are making a puzzle world, or have secrets in your world, this could ruin the fun!", l.createElement("br", null), l.createElement("br", null), "To use the world debug tools, you'll need to pass the --enable-debug-gui flag to VRChat at startup, and press RShift-` along with 7, 8, or 9.", " ", l.createElement("a", {
                    href: "https://docs.vrchat.com/docs/keyboard-and-mouse",
                    target: "_blank",
                    rel: "noreferrer"
                }, "See the keyboard binding documentation for more details"), "."), Tn.platformsList.length > 1 && l.createElement(l.Fragment, null, l.createElement(Qe, null, "World Platforms"), l.createElement(je, {
                    className: "align-items-center justify-content-between w-100 flex-column flex-sm-row mt-2 tw-gap-3"
                }, Tn.platformsList.map((function(e) {
                    return l.createElement(c.zx, {
                        key: e,
                        onClick: Ln(e),
                        loading: ht,
                        expand: !0,
                        danger: !0
                    }, l.createElement(c.$1, {
                        icon: ee.$,
                        className: "me-2"
                    }), "Delete ", Pe[e] || e, " Version")
                })))), null != bn && l.createElement(Ne, {
                    platformName: Pe[bn] || bn,
                    onConfirm: On,
                    onCancel: function() {
                        wn(null)
                    }
                }), l.createElement(Qe, null, "World Deletion"), l.createElement(c.zx, {
                    className: "px-3 py-1 mt-2",
                    onClick: function() {
                        mn(!0)
                    },
                    loading: ht,
                    expand: !0,
                    danger: !0
                }, l.createElement(c.$1, {
                    icon: ee.$,
                    className: "me-2"
                }), "Delete World Completely"), sn && l.createElement(Ee, {
                    onConfirm: kn,
                    onCancel: function() {
                        mn(!1)
                    }
                })))), l.createElement(ze, {
                    className: "ms-0 ms-sm-3 mb-3 mb-sm-0"
                }, l.createElement(Fe, null, l.createElement(c.oI, null, l.createElement(qe, null, l.createElement(Xe, null, l.createElement(He, {
                    src: oe.imageUrl,
                    alt: oe.name
                }))), l.createElement(je, {
                    className: "justify-content-between align-items-center"
                }, l.createElement(i.rU, {
                    to: "/home/world/".concat(oe.id)
                }, l.createElement(Be, null, null == Nn ? void 0 : Nn.name)))), l.createElement(c.Ao, null, l.createElement(Oe, null, l.createElement(Oe, null, l.createElement(Je, null, l.createElement(c.$1, {
                    width: 20,
                    icon: Q.IL,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(Ge, {
                    role: "group",
                    title: "Public Player Count"
                }, l.createElement(Ke, null, "Public Players"), (0, ge.ER)(oe.publicOccupants))), l.createElement(Je, null, l.createElement(c.$1, {
                    width: 20,
                    icon: K.BC,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(Ge, {
                    role: "group",
                    title: "Private Player Count"
                }, l.createElement(Ke, null, "Private Players"), (0, ge.ER)(oe.privateOccupants))), l.createElement(Je, null, l.createElement(c.$1, {
                    width: 20,
                    icon: G.Md,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(Ge, {
                    role: "group",
                    title: "World Visits"
                }, l.createElement(Ke, null, "Visits"), (0, ge.ER)(oe.visits))), l.createElement(Je, null, l.createElement(c.$1, {
                    width: 20,
                    icon: J.T,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(Ge, {
                    role: "group",
                    title: "World Favorites"
                }, l.createElement(Ke, null, "Favorites"), (0, ge.ER)(oe.favorites))), ia > 0 && l.createElement(Je, null, l.createElement(c.$1, {
                    width: 20,
                    icon: B.JH,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(Ge, {
                    role: "group",
                    title: "World Reports"
                }, l.createElement(Ke, null, "Reports"), (0, ge.ER)(ia))), aa && l.createElement(Je, null, l.createElement(c.$1, {
                    width: 20,
                    icon: B.JH,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(Ge, {
                    role: "group",
                    title: "Bops in World"
                }, l.createElement(Ke, null, "Bops"), (0, ge.ER)(_))), !!oe.heat && l.createElement(Je, null, l.createElement(c.$1, {
                    width: 20,
                    icon: H.$c,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(Ge, {
                    role: "group",
                    title: "World Heat"
                }, l.createElement(Ke, null, "Heat"), l.createElement(je, {
                    className: "align-items-center"
                }, E ? (0, ge.ER)(oe.heat) : ie()(Math.min(10, oe.heat)).map((function(e) {
                    return l.createElement(c.$1, {
                        key: "heat-".concat(e),
                        size: "md",
                        icon: X.Rp,
                        color: "#919191",
                        className: "ms-1"
                    })
                })))))), l.createElement(Oe, {
                    className: "mt-4"
                }, Rn && l.createElement(Je, {
                    role: "note",
                    title: "Cross-Platform"
                }, l.createElement(c.$1, {
                    width: 20,
                    icon: q.vq,
                    color: "#54b5c5",
                    className: "me-2"
                }), "Cross-Platform"), l.createElement(Je, null, l.createElement(c.$1, {
                    width: 20,
                    icon: V.r6,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(Ge, {
                    role: "group",
                    title: "Last Update Date"
                }, l.createElement(Ke, null, "Updated"), h()(oe.updated_at).format("MMM DD YYYY"))), "none" !== oe.publicationDate && l.createElement(Je, null, l.createElement(c.$1, {
                    width: 20,
                    icon: $.Ac,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(Ge, {
                    role: "group",
                    title: "Publish Date"
                }, l.createElement(Ke, null, "Published"), h()(oe.publicationDate).format("MMM DD YYYY"))), "none" !== oe.labsPublicationDate && l.createElement(Je, null, l.createElement(c.$1, {
                    width: 20,
                    icon: F.jZ,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(Ge, {
                    role: "group",
                    title: "Labs Publish Date"
                }, l.createElement(Ke, null, "Labs'd"), h()(oe.labsPublicationDate).format("MMM DD YYYY"))), l.createElement(Je, null, l.createElement(c.$1, {
                    width: 20,
                    icon: z.CP,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(Ge, {
                    role: "group",
                    title: "Creation Date"
                }, l.createElement(Ke, null, "Created"), h()(oe.created_at).format("MMM DD YYYY"))))))), ra && l.createElement("a", {
                    href: window.apiUrl("/api/1/worlds/".concat(null == oe ? void 0 : oe.id, "/analytics/redirect")),
                    target: "_blank",
                    className: "mt-2",
                    rel: "noreferrer"
                }, l.createElement(c.zx, null, "Download Analytics")), l.createElement($e, {
                    className: "mt-2"
                }, l.createElement(Oe, null, l.createElement(Oe, {
                    role: "group",
                    "aria-labelledby": "UnityVersionsLabel"
                }, l.createElement(Je, {
                    id: "UnityVersionsLabel"
                }, l.createElement(c.$1, {
                    width: 20,
                    icon: Y.kl,
                    color: "#54b5c5",
                    className: "me-2"
                }), "Unity Versions"), l.createElement(Oe, null, Tn.versionsList.map((function(e) {
                    return e.isSupported ? l.createElement(at, {
                        title: "Unity Version",
                        key: e.name,
                        current: !0
                    }, e.name, " ", l.createElement(c.$1, {
                        icon: M.LE,
                        className: "mx-2",
                        color: "var(--bs-success)"
                    }), " VRChat Supported") : e.isUnsupported ? l.createElement(at, {
                        title: "Unity Version",
                        key: e.name,
                        current: !0
                    }, e.name, " ", l.createElement(c.$1, {
                        icon: U.NB,
                        className: "mx-2",
                        color: "var(--bs-danger)"
                    }), " Unsupported") : l.createElement(at, {
                        title: "Unity Version",
                        key: e.name
                    }, e.name)
                })))), l.createElement(Oe, {
                    role: "group",
                    "aria-labelledby": "PlatformsLabel"
                }, l.createElement(Je, {
                    className: "mt-2",
                    id: "PlatformsLabel"
                }, l.createElement(c.$1, {
                    width: 20,
                    icon: R.l9,
                    color: "#54b5c5",
                    className: "me-2"
                }), "Platforms"), l.createElement(Oe, null, Tn.platformsList.map((function(e) {
                    return l.createElement(rt, {
                        key: e
                    }, Pe[e] || e)
                })))))), Yn && l.createElement(lt, {
                    title: "Outdated Unity Version",
                    message: l.createElement(l.Fragment, null, "It is recommended to always use the latest Unity version VRChat supports for your world development.", l.createElement("br", null), "This helps avoid possible incompatibility issues.", l.createElement("br", null), l.createElement("br", null), l.createElement("a", {
                        href: "https://docs.vrchat.com/docs/upgrading-unity-projects",
                        target: "_blank",
                        rel: "noreferrer"
                    }, "Learn more about upgrading"))
                }), Jt && _e && null === Zt && l.createElement(it, {
                    className: "animated slideInUp"
                }, l.createElement(ct, {
                    onClick: Wn,
                    className: "w-100",
                    loading: A.changing,
                    positive: !0
                }, "Save Changes")))))) : l.createElement(Ae, null, l.createElement(je, {
                    className: "mt-2 mb-3 align-items-center justify-content-between"
                }, l.createElement(je, {
                    className: "align-items-center mb-1"
                }, l.createElement(mt, {
                    role: "button",
                    "aria-label": "Back",
                    onClick: Cn
                }, l.createElement(c.$1, {
                    icon: ae.ac,
                    color: "white",
                    size: "2x"
                })), l.createElement(We, null, "Edit World Info"))), l.createElement(Ae, {
                    className: "flex-column flex-sm-row align-items-center justify-content-center w-100"
                }, l.createElement(c.qX, {
                    type: "error",
                    title: "Cannot edit this world",
                    message: "You can only edit your own worlds!"
                }))) : l.createElement(Ae, null, l.createElement(je, {
                    className: "mt-2 mb-3 align-items-center justify-content-between"
                }, l.createElement(je, {
                    className: "align-items-center mb-1"
                }, l.createElement(c.$1, {
                    icon: ae.ac,
                    color: "white",
                    size: "2x",
                    onClick: Cn
                }), l.createElement(We, null, "Edit World Info"))), l.createElement(Ae, {
                    className: "flex-column flex-sm-row"
                }, l.createElement(Oe, {
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
                })), l.createElement(Te, {
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
            var Oe = (0, a.Z)("div", {
                    target: "e7ur3i630"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                }),
                Ae = (0, a.Z)(Oe, {
                    target: "e7ur3i629"
                })({
                    name: "1aea1rw",
                    styles: "align-self:center;width:100%;max-width:1200px"
                }),
                je = (0, a.Z)("div", {
                    target: "e7ur3i628"
                })({
                    name: "zjik7",
                    styles: "display:flex"
                }),
                We = (0, a.Z)("h2", {
                    target: "e7ur3i627"
                })({
                    name: "1kdats7",
                    styles: "margin:0 0 0 1rem"
                }),
                Te = (0, a.Z)(Oe, {
                    target: "e7ur3i626"
                })({
                    name: "1g3t9m2",
                    styles: "width:100%;@media (min-width: 576px){width:276px;}"
                }),
                Re = {
                    name: "ilysiq",
                    styles: "background-color:#252a30;border-radius:6px;border:none;color:white!important"
                },
                Ue = (0, a.Z)(c.wg, {
                    target: "e7ur3i625"
                })(Re, ";"),
                Me = (0, a.Z)("div", {
                    target: "e7ur3i624"
                })(Re, " padding:0.5rem;line-height:1.25;"),
                Ye = (0, a.Z)(Oe, {
                    target: "e7ur3i623"
                })({
                    name: "1j03xl7",
                    styles: "background-color:#181b1f;border-radius:8px;padding:0.9rem"
                }),
                ze = (0, a.Z)(Oe, {
                    target: "e7ur3i622"
                })({
                    name: "1budlv3",
                    styles: "width:100%;@media (min-width: 576px){width:290px;}"
                }),
                Fe = (0, a.Z)(Oe, {
                    target: "e7ur3i621"
                })({
                    name: "1r30s8q",
                    styles: "border-radius:5px;flex-shrink:0;min-width:calc(256px + 0.5rem);width:100%;@media (min-width: 576px){width:unset;}"
                }),
                $e = (0, a.Z)(Fe, {
                    target: "e7ur3i620"
                })({
                    name: "nthc68",
                    styles: "background-color:#181b1f;border:none;border-radius:8px;padding:0.94rem"
                }),
                Ve = (0, a.Z)("button", {
                    target: "e7ur3i619"
                })({
                    name: "xv05mj",
                    styles: "background-color:hsla(0, 0%, 0%, 0.5);opacity:0;width:100%;height:100%;top:0;left:0;display:flex;justify-content:center;align-items:center;position:absolute;z-index:10;border:none;outline:none!important;border-radius:3px;color:white;font-weight:600;margin:0;padding:0;transition:opacity 250ms ease"
                }),
                qe = (0, a.Z)("div", {
                    target: "e7ur3i618"
                })("position:relative;border-radius:8px;&:hover{", Ve, "{opacity:1;}}"),
                Xe = (0, a.Z)("div", {
                    target: "e7ur3i617"
                })({
                    name: "189lu5",
                    styles: "padding-top:75%;height:0;overflow:hidden;border-radius:8px;position:relative;display:flex;flex-shrink:0;@media (min-width: 576px){padding-top:0;height:192px;width:256px;}"
                }),
                He = (0, a.Z)("img", {
                    target: "e7ur3i616"
                })({
                    name: "opoot1",
                    styles: "width:100%;height:100%;top:0;left:0;position:absolute;border-radius:8px"
                }),
                Be = (0, a.Z)("h4", {
                    target: "e7ur3i615"
                })({
                    name: "c2kuld",
                    styles: "font-size:1.4em;margin-top:0.75rem;margin-bottom:0;color:var(--bs-primary);&:hover{color:var(--bs-primary);}"
                }),
                Je = (0, a.Z)(je, {
                    target: "e7ur3i614"
                })({
                    name: "1xhzkqb",
                    styles: "align-items:center;color:#919191;font-weight:bold"
                }),
                Ge = (0, a.Z)(je, {
                    target: "e7ur3i613"
                })({
                    name: "1xqm3l8",
                    styles: "align-items:center;justify-content:space-between;flex-grow:1;font-weight:normal"
                }),
                Ke = (0, a.Z)("div", {
                    target: "e7ur3i612"
                })({
                    name: "4kr88q",
                    styles: "margin-right:0.5rem;color:#919191;font-weight:bold"
                }),
                Qe = (0, a.Z)("div", {
                    target: "e7ur3i611"
                })({
                    name: "p9myc0",
                    styles: "color:#88dff4;font-weight:bold;font-size:0.9em;margin-top:10px;padding:0 10px;white-space:pre-wrap"
                }),
                et = (0, a.Z)("div", {
                    target: "e7ur3i610"
                })({
                    name: "p7qmao",
                    styles: "position:relative;padding-bottom:56.25%;height:0;overflow:hidden;padding-top:30px;border-radius:4px;iframe,object,embed{position:absolute;top:0;left:0;width:100%;height:100%;}"
                }),
                tt = (0, a.Z)(c.zx, {
                    target: "e7ur3i69"
                })({
                    name: "1v8w4bi",
                    styles: "display:flex;align-items:center;min-height:34px"
                }),
                nt = (0, a.Z)("div", {
                    target: "e7ur3i68"
                })({
                    name: "11p52gn",
                    styles: "font-size:1rem;margin-right:10px;margin-left:10px;color:hsla(0, 0%, 100%, 0.6)"
                }),
                at = (0, a.Z)("div", {
                    target: "e7ur3i67"
                })({
                    name: "1k9zvom",
                    styles: "margin-left:1.8rem;display:flex;align-items:center"
                }),
                rt = (0, a.Z)(at, {
                    target: "e7ur3i66"
                })(""),
                lt = (0, a.Z)(c.qX, {
                    target: "e7ur3i65"
                })({
                    name: "1268sfy",
                    styles: "@media (min-width: 576px){max-width:290px;}"
                }),
                ot = (0, a.Z)(je, {
                    target: "e7ur3i64"
                })({
                    name: "1h3rtzg",
                    styles: "align-items:center"
                }),
                it = (0, a.Z)("div", {
                    target: "e7ur3i63"
                })({
                    name: "mcy7ym",
                    styles: "position:fixed;z-index:20;box-shadow:0 0 20px 0 rgba(0, 0, 0, 0.5);border-radius:4px;width:calc(100% - 0.5rem);bottom:10px;animation-duration:250ms;@media (min-width: 575px){width:290px;position:relative;bottom:0;}"
                }),
                ct = (0, a.Z)(c.zx, {
                    target: "e7ur3i62"
                })({
                    name: "1yh1g4i",
                    styles: "background-color:#2fb81dff"
                }),
                st = (0, a.Z)(Qe, {
                    target: "e7ur3i61"
                })({
                    name: "12udwy8",
                    styles: "font-size:1.2rem;margin-top:0"
                }),
                mt = (0, a.Z)("button", {
                    target: "e7ur3i60"
                })({
                    name: "1mz3sos",
                    styles: "outline:none!important;padding:0;margin:0;border:none;display:flex;background:transparent;align-items:center;justify-content:center"
                }),
                ut = n(89734),
                dt = n.n(ut),
                pt = n(9669),
                ft = n.n(pt),
                gt = function(e) {
                    var t = e.userId,
                        n = e.number,
                        a = void 0 === n ? 100 : n,
                        r = e.offset,
                        l = void 0 === r ? 0 : r,
                        o = e.releaseStatus,
                        i = void 0 === o ? "all" : o,
                        c = e.sort,
                        s = void 0 === c ? "created" : c,
                        m = e.order,
                        u = void 0 === m ? "descending" : m;
                    return {
                        type: "MY_CONTENT_LOAD_WORLDS",
                        payload: ft().get(window.apiUrl("/api/1/worlds"), {
                            params: {
                                userId: t,
                                n: a,
                                offset: l,
                                releaseStatus: i,
                                sort: s,
                                order: u
                            }
                        }),
                        meta: {
                            number: a,
                            offset: l
                        }
                    }
                },
                ht = function(e) {
                    var t = e.worldIds;
                    return {
                        type: "MY_CONTENT_BULK_CHECK_WORLD_STATS",
                        payload: Promise.all(t.map((function(e) {
                            return ft().get(window.apiUrl("/api/1/worlds/".concat(e)))
                        })))
                    }
                },
                bt = n(89182),
                wt = n(22202);

            function Et(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function yt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Et(Object(n), !0).forEach((function(t) {
                        (0, k.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Et(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var vt = [{
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
                xt = {
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
            const Ct = function() {
                var e = (0, b.I0)(),
                    t = (0, o.TH)().search,
                    n = new URLSearchParams(t).get("scrollTo"),
                    a = (0, i.lr)(),
                    r = (0, s.Z)(a, 2),
                    m = (r[0], r[1]),
                    u = new URLSearchParams(t),
                    d = u.get("order"),
                    p = u.get("sort"),
                    f = "false" !== u.get("publicFirst"),
                    g = (0, wt.XC)().data,
                    h = (0, b.v9)((function(e) {
                        return e.myContent.worlds
                    })),
                    w = h.list,
                    E = h.loading,
                    y = h.loadedAt,
                    v = h.error,
                    x = h.errorMessage,
                    C = h.allPagesLoaded,
                    N = (0, b.v9)((function(e) {
                        return e.myContent.worldStats
                    })),
                    k = l.useState(null == f || f),
                    _ = (0, s.Z)(k, 2),
                    S = _[0],
                    I = _[1],
                    P = l.useRef(null != p ? p : "updated"),
                    Z = l.useState(null != p ? p : "updated"),
                    D = (0, s.Z)(Z, 2),
                    L = D[0],
                    O = D[1],
                    A = l.useRef(null != d ? d : "descending"),
                    j = l.useState(null != d ? d : "descending"),
                    W = (0, s.Z)(j, 2),
                    R = W[0],
                    U = W[1],
                    Y = l.useState(""),
                    z = (0, s.Z)(Y, 2),
                    F = z[0],
                    $ = z[1],
                    V = l.useState(0),
                    q = (0, s.Z)(V, 2),
                    X = q[0],
                    H = q[1],
                    B = l.useRef(0);
                l.useEffect((function() {
                    if (!E && null != g && g.id) {
                        var t = !y && 0 === w.length,
                            n = L !== P.current || R !== A.current,
                            a = Date.now() - y > 6e4;
                        (t || a || n) && (H(0), B.current = 0, e(gt({
                            userId: null == g ? void 0 : g.id,
                            number: 50,
                            offset: 0,
                            sort: L,
                            order: R
                        })))
                    }
                }), [null == g ? void 0 : g.id, L, R, y, E]), l.useEffect((function() {
                    E || C || !y || (w.length - B.current < 50 ? e({
                        type: "MY_CONTENT_MARK_ALL_PAGES_LOADED"
                    }) : H(B.current + 50))
                }), [w, E, y, C]), l.useEffect((function() {
                    B.current !== X && (B.current = X, e(gt({
                        userId: g.id,
                        number: 50,
                        offset: X,
                        sort: L,
                        order: R
                    })))
                }), [X]), l.useEffect((function() {
                    if (P.current !== L) {
                        var e = new URLSearchParams(null != t ? t : "");
                        e.delete("scrollTo"), e.set("sort", L), m(e)
                    }
                    P.current = L
                }), [L]), l.useEffect((function() {
                    if (A.current !== R) {
                        var e = new URLSearchParams(null != t ? t : "");
                        e.delete("scrollTo"), e.set("order", R), m(e)
                    }
                    A.current = R
                }), [R]), l.useEffect((function() {
                    var e = new URLSearchParams(null != t ? t : "");
                    e.delete("scrollTo"), S ? e.delete("publicFirst") : e.set("publicFirst", "false"), m(e)
                }), [S]), l.useEffect((function() {
                    n && !E && C && setTimeout((function() {
                        var e = document.querySelector('[data-scrollkey="'.concat(n, '"]'));
                        null == e || e.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                            inline: "nearest"
                        }), setTimeout((function() {
                            e.classList.add("pulse")
                        }), 1e3)
                    }))
                }), [n, E, C]), l.useEffect((function() {
                    var t = function() {
                        var t = (0, T.Z)(ue().mark((function t() {
                            var n, a;
                            return ue().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!E && !v) {
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
                                        return t.next = 9, e(ht({
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
                }), [w, E, v, C]);
                var J = l.useMemo((function() {
                        return dt()(w, (function(e) {
                            return "public" === e.releaseStatus ? -1 : 1
                        }))
                    }), [w]),
                    G = l.useMemo((function() {
                        if (!F) return S ? J : w;
                        try {
                            var e = new RegExp(F, "i");
                            return (S ? J : w).filter((function(t) {
                                var n = "".concat(t.name, " ").concat(t.id, " ").concat(t.description, " ").concat(t.unityPackages.map((function(e) {
                                    return e.platform
                                })).join(" "), " ").concat(t.releaseStatus, " ").concat(t.tags.join(" "));
                                return e.test(n)
                            }))
                        } catch (e) {
                            return S ? J : w
                        }
                    }), [S, w, J, F]);
                return l.createElement(Nt, {
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
                    value: F,
                    onChange: function(e) {
                        var t = e.target.value;
                        return $(void 0 === t ? "" : t)
                    }
                }), l.createElement(Pt, {
                    className: "me-0 me-sm-2 mb-2 mb-sm-0",
                    label: "Sorting",
                    value: L,
                    options: vt,
                    onChange: O
                }), l.createElement(c.Lt, {
                    className: "mb-2 mb-sm-0",
                    label: "Order",
                    value: R,
                    options: xt[L],
                    onChange: U
                })), l.createElement(c.X2, {
                    className: "ms-0 ms-sm-2 align-self-center align-sm-self-start"
                }, l.createElement(kt, {
                    role: "checkbox",
                    "aria-checked": S,
                    onClick: function() {
                        return I(!S)
                    }
                }, l.createElement(_t, null, "Public First"), l.createElement(c.$1, {
                    width: 20,
                    icon: M.LE,
                    disabled: !S,
                    className: "me-1"
                })))), v && l.createElement(c.qX, {
                    type: "error",
                    title: "Failed to load worlds",
                    message: x
                }), y && 0 === w.length && l.createElement(It, {
                    role: "note",
                    title: "There are no Worlds here... yet"
                }, "There are no Worlds here... yet"), l.createElement(St, null, E && 0 === (null == w ? void 0 : w.length) ? ie()(0, 6).map((function(e) {
                    return l.createElement(c.UU, {
                        key: e,
                        height: "400px",
                        className: "mb-2"
                    })
                })) : !v && G.map((function(e) {
                    var t;
                    return l.createElement(bt.Z, {
                        key: e.id,
                        world: yt(yt({}, e), null !== (t = null == N ? void 0 : N[e.id]) && void 0 !== t ? t : {}),
                        linksToEdit: !0
                    })
                })), E && (null == w ? void 0 : w.length) > 1 && ie()(0, 6).map((function(e) {
                    return l.createElement(c.UU, {
                        key: e,
                        height: "400px",
                        className: "mb-2"
                    })
                }))))
            };
            var Nt = (0, a.Z)("div", {
                    target: "eu0ztp85"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                }),
                kt = (0, a.Z)(c.zx, {
                    target: "eu0ztp84"
                })({
                    name: "3zych9",
                    styles: "display:flex;align-items:center;min-height:2.5rem"
                }),
                _t = (0, a.Z)("div", {
                    target: "eu0ztp83"
                })({
                    name: "11p52gn",
                    styles: "font-size:1rem;margin-right:10px;margin-left:10px;color:hsla(0, 0%, 100%, 0.6)"
                }),
                St = (0, a.Z)("div", {
                    target: "eu0ztp82"
                })({
                    name: "mtvm74",
                    styles: "margin-top:10px;display:grid;column-gap:0.5rem;grid-template-columns:repeat(1, 1fr);@media (min-width: 576px){grid-template-columns:repeat(2, 1fr);}@media (min-width: 992px){grid-template-columns:repeat(3, 1fr);}@media (min-width: 1920px){grid-template-columns:repeat(4, 1fr);}@media (min-width: 2300px){grid-template-columns:repeat(5, 1fr);}"
                }),
                It = (0, a.Z)("div", {
                    target: "eu0ztp81"
                })({
                    name: "bpc6lh",
                    styles: "width:100%;height:200px;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#54b5c5;background-color:#252a30;border-radius:8px;font-size:2rem;text-align:center;margin-top:1rem"
                }),
                Pt = (0, a.Z)(c.Lt, {
                    target: "eu0ztp80"
                })({
                    name: "s3oxtx",
                    styles: "z-index:5"
                });
            const Zt = function() {
                var e = (0, o.TH)();
                return l.createElement(Dt, null, "/home/content" === e.pathname && l.createElement(Dt, null, l.createElement("h2", null, "Manage Uploaded Content"), l.createElement(Lt, null, l.createElement(Ot, {
                    to: "/home/content/worlds"
                }, l.createElement(At, null, l.createElement(c.$1, {
                    className: "mb-3",
                    icon: r.g4,
                    size: "5x"
                }), l.createElement(jt, null, "Worlds"))))), l.createElement(o.Z5, null, l.createElement(o.AW, {
                    path: "/"
                }, l.createElement(o.AW, {
                    path: "/worlds",
                    element: l.createElement(Ct, null)
                }), l.createElement(o.AW, {
                    path: "/worlds/:worldId/edit",
                    element: l.createElement(Le, null)
                }), l.createElement(o.AW, {
                    path: "/worlds/*",
                    element: l.createElement(Ct, null)
                }), l.createElement(o.AW, {
                    path: "/restricted/:contentId",
                    element: l.createElement(A, null)
                }))))
            };
            var Dt = (0, a.Z)("div", {
                    target: "e7t0ljh4"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                }),
                Lt = (0, a.Z)("div", {
                    target: "e7t0ljh3"
                })({
                    name: "1j04kkb",
                    styles: "display:flex;@media (max-width: 400px){flex-direction:column;}"
                }),
                Ot = (0, a.Z)(i.rU, {
                    target: "e7t0ljh2"
                })({
                    name: "168sy3z",
                    styles: "display:flex;border:#07343f solid 2px;border-radius:4px;background:#07343f;color:#6ae3f9;box-sizing:border-box;outline:none!important;flex:1;padding-bottom:40%;height:0;overflow:hidden;margin-right:1rem;margin-top:1rem;position:relative;@media (max-width: 400px){padding-bottom:60%;margin-right:0;}&:hover,&:active,&:focus{border-color:#086c84;}"
                }),
                At = (0, a.Z)("div", {
                    target: "e7t0ljh1"
                })({
                    name: "1g561ia",
                    styles: "padding:5px 5px;position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;top:0;left:0"
                }),
                jt = (0, a.Z)("div", {
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
                i = n(34226),
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
                m = n(54326),
                u = n(68055),
                d = n(17726),
                p = n(16995),
                f = n(66007),
                g = n(59895),
                h = n(42137),
                b = n(92512),
                w = n(23778),
                E = n(88673),
                y = n(26128),
                v = n(47420),
                x = n(29167),
                C = n(92221),
                N = n(88302),
                k = n(46450),
                _ = n(609),
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
                    icon: _.by,
                    description: "Locked Tags"
                }, {
                    tag: "admin_lock_level",
                    icon: _.by,
                    description: "Locked Level"
                }, {
                    tag: "admin_can_grant_licenses",
                    icon: k.mG,
                    description: "Can Grant Licenses"
                }, {
                    tag: "system_world_access",
                    icon: N.kl,
                    description: "SDK World Access"
                }, {
                    tag: "system_avatar_access",
                    icon: N.kl,
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
                    icon: v.yS,
                    description: "Known User"
                }, {
                    tag: "system_trust_veteran",
                    icon: y.jA,
                    description: "Trusted User"
                }, {
                    tag: "system_probable_troll",
                    icon: E.I7,
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
                    icon: u.LE,
                    description: "Approved"
                }, {
                    tag: "system_updated_recently",
                    icon: m.IV,
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
                jO: () => m,
                lY: () => u,
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
                m = i.useDisputeContentRestrictionMutation,
                u = i.useDeleteDisputeMutation
        },
        18446: (e, t, n) => {
            var a = n(90939);
            e.exports = function(e, t) {
                return a(e, t)
            }
        }
    }
]);
//# sourceMappingURL=df0432dad6f96713c90c9fac8f8b2c9c1a9264b0a84f341a2e80484afc414cf6.js.map