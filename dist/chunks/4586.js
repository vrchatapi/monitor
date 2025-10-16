"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4586], {
        34586: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => jt
            });
            var a = n(4965),
                r = n(66062),
                l = n(67294),
                o = n(89250),
                i = n(79655),
                c = n(96985),
                s = n(54546),
                m = n(21429),
                u = n(17183),
                d = n(56646),
                p = n(81143),
                f = n(3820),
                g = n(27484),
                b = n.n(g),
                w = n(32981),
                h = n(53637),
                v = n(95305),
                y = n(35773),
                E = n(64258),
                x = n(17383),
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
                    b = e.contentId,
                    w = e.contentRestrictionId,
                    h = e.closeModal,
                    v = (0, l.useState)({}),
                    y = (0, s.Z)(v, 2),
                    E = y[0],
                    x = y[1],
                    C = (0, l.useState)({}),
                    N = (0, s.Z)(C, 2),
                    S = N[0],
                    P = N[1],
                    D = (null == S ? void 0 : S.mistake) && (null == S ? void 0 : S.consent) && (null == S ? void 0 : S.process),
                    j = I()(null !== (t = null == E ? void 0 : E.email) && void 0 !== t ? t : "") && (null == E || null === (n = E.fullName) || void 0 === n ? void 0 : n.length) > 0 && (null == E || null === (a = E.mailingAddress) || void 0 === a ? void 0 : a.length) > 0 && (null == E || null === (r = E.mailingCity) || void 0 === r ? void 0 : r.length) > 0 && (null == E || null === (o = E.mailingCountry) || void 0 === o ? void 0 : o.length) > 0 && (null == E || null === (i = E.phoneNumber) || void 0 === i ? void 0 : i.length) > 0 && (null == E || null === (m = E.signature) || void 0 === m ? void 0 : m.length) > 0 && D && (null == E || null === (u = E.signature) || void 0 === u ? void 0 : u.toLowerCase()) === (null == E || null === (d = E.fullName) || void 0 === d ? void 0 : d.toLowerCase()),
                    A = function(e) {
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
                        return x(Z(Z({}, E), {}, {
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
                        return x(Z(Z({}, E), {}, {
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
                        return x(Z(Z({}, E), {}, {
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
                        return x(Z(Z({}, E), {}, {
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
                        return x(Z(Z({}, E), {}, {
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
                        return x(Z(Z({}, E), {}, {
                            mailingPostalCode: e.target.value
                        }))
                    }
                }))), l.createElement("label", {
                    htmlFor: "owner-mailing-country"
                }, "Country", l.createElement(c.II, {
                    id: "owner-mailing-country",
                    value: null == E ? void 0 : E.mailingCountry,
                    onChange: function(e) {
                        return x(Z(Z({}, E), {}, {
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
                        return x(Z(Z({}, E), {}, {
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
                        return x(Z(Z({}, E), {}, {
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
                    onChange: A
                }), l.createElement(c.XZ, {
                    id: "consent",
                    label: "\n            I consent to the jurisdiction of the Federal District Court for the judicial district\n            in which my address is located, or if my address is outside the United States,\n            any judicial district in which the service provider (VRChat Inc.) may be found\n            (the United States District Court for the Northern District of California).\n          ",
                    htmlFor: "consent",
                    checked: null == S ? void 0 : S.consent,
                    onChange: A
                }), l.createElement(c.XZ, {
                    id: "process",
                    label: "\n            I will accept service of process from the person who provided the\n            original DMCA notice or an agent of such person. \n          ",
                    htmlFor: "process",
                    checked: null == S ? void 0 : S.process,
                    onChange: A
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
                    value: null == E || null === (p = E.signature) || void 0 === p ? void 0 : p.toUpperCase(),
                    onChange: function(e) {
                        return x(Z(Z({}, E), {}, {
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
                    onClick: h
                }, "Cancel"), l.createElement(c.zx, {
                    className: "tw-ml-2",
                    disabled: g || !j,
                    containerStyles: {
                        width: "100%"
                    },
                    onClick: function() {
                        return f({
                            contentId: b,
                            disputeInfo: E,
                            contentRestrictionId: w
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
            const j = function() {
                var e, t, n = (0, o.UO)().contentId,
                    a = (0, x.Tu)().user,
                    r = (0, w.I0)(),
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
                    j = L.isError,
                    R = L.isSuccess,
                    T = L.error,
                    W = (0, C.lY)(),
                    U = (0, s.Z)(W, 2),
                    Y = U[0],
                    M = U[1],
                    z = M.isLoading,
                    F = M.isSuccess,
                    $ = M.isError,
                    V = M.error,
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
                    (R && (B(!1), r((0, E.d)({
                        title: "DMCA Dispute",
                        icon: f.Yj,
                        message: "Your dispute has been submitted successfully.",
                        color: "success",
                        timeout: 7e3
                    }))), j) && (B(!1), r((0, E.d)({
                        title: "DMCA Dispute",
                        icon: f.Yj,
                        message: "Your dispute could not be submitted successfully: ".concat(null == T || null === (e = T.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message),
                        color: "danger",
                        timeout: 7e3
                    })))
                }), [R, j]), (0, l.useEffect)((function() {
                    var e;
                    (F && r((0, E.d)({
                        title: "DMCA Dispute",
                        icon: f.Yj,
                        message: "Your dispute has been withdrawn successfully.",
                        color: "success",
                        timeout: 7e3
                    })), $) && r((0, E.d)({
                        title: "DMCA Dispute",
                        icon: f.Yj,
                        message: "Failed to withdraw your dispute successfully: ".concat(null == V || null === (e = V.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message),
                        color: "danger",
                        timeout: 7e3
                    }))
                }), [$, F]), k ? l.createElement(N.Z, {
                    loading: !0
                }) : _ ? l.createElement(h.Z, null, l.createElement(c.qX, {
                    type: "error",
                    title: "Error",
                    className: "my-2"
                }, (null == S || null === (t = S.data) || void 0 === t ? void 0 : t.error.message) || "An error occurred when loading the content.")) : l.createElement(h.Z, null, l.createElement("div", {
                    className: "m-2"
                }, l.createElement(v.Z, {
                    className: "w-100 pb-3"
                }, l.createElement(c.oI, {
                    className: "tw-text-xl"
                }, g.name), l.createElement(c.Ao, null, l.createElement(A, {
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
                        return Y({
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
                }, l.createElement(D, {
                    dispute: Z,
                    disputeLoading: O,
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
                    icon: u.faSquarePlus
                }), "Created"), b()(null == g ? void 0 : g.createdAt).format("MMM DD YYYY")), l.createElement("div", {
                    className: "tw-flex tw-place-content-between tw-text-light-grey"
                }, l.createElement("div", {
                    className: "tw-flex tw-items-center"
                }, l.createElement(c.$1, {
                    color: "#2BAAC1",
                    width: 17,
                    className: "tw-pr-2",
                    icon: m.faCloudArrowUp
                }), "Updated"), b()(null == g ? void 0 : g.updatedAt).format("MMM DD YYYY"))))))))
            };
            var A = (0, a.Z)(v.Z, {
                    target: "ek2okq60"
                })({
                    name: "1e3lcuk",
                    styles: "border:1px solid #2BAAC1;& a{color:white;}& img{border-radius:5px;max-height:200px;max-width:200px;}"
                }),
                R = n(42138),
                T = n(15861),
                W = n(12529),
                U = n(59545),
                Y = n(68055),
                M = n(88302),
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
                be = function(e) {
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
                we = function(e) {
                    var t = e.onConfirm,
                        n = e.onCancel;
                    return l.createElement(c.qX, {
                        type: "warn",
                        title: "Publishing to Community Labs"
                    }, l.createElement(c.JX, null, l.createElement("p", null, "Publishing this world will put it in to the ", l.createElement("strong", null, "Community Labs"), "."), l.createElement("p", null, "Other users will be able to see your world, and it will either stay in the Labs, get promoted to ", l.createElement("strong", null, "Public"), " status, or be placed back in to ", l.createElement("strong", null, "Private"), " status, based on community response."), l.createElement("p", null, "We encourage you to ", l.createElement("em", null, "get the word out"), " about your world if you want it to survive!"), l.createElement("p", null, "If your world violates our ", l.createElement("a", {
                        href: "https://vrchat.com/community"
                    }, "Community Guidelines"), ", you could get in trouble by posting it!"), l.createElement("p", null, "You're only allowed to publish ", l.createElement("strong", null, "one world per week"), ", so make sure to put your best foot forward!"), l.createElement(be, {
                        onConfirm: t,
                        onCancel: n,
                        confirmText: "Yes, do it!",
                        cancelText: "No, keep the world private"
                    })))
                },
                he = function(e) {
                    var t = e.onConfirm,
                        n = e.onCancel;
                    return l.createElement(c.qX, {
                        type: "warn",
                        title: "Unpublishing a World"
                    }, l.createElement(c.JX, null, l.createElement("p", null, "Unpublishing this world will remove it from ", l.createElement("strong", null, "Public"), "."), l.createElement("p", null, "If you want to make it public again, it will need to go through Community Labs."), l.createElement("p", null, "You're only allowed to publish ", l.createElement("strong", null, "one world per week"), ", and when you remove a world from the labs, you don't get your one world back. Are you ", l.createElement("strong", null, "sure"), "?"), l.createElement(be, {
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
                    }, l.createElement(c.JX, null, l.createElement("p", null, "This will fully remove the world, are you sure?"), l.createElement(be, {
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
                    }, l.createElement(c.JX, null, l.createElement("p", null, "Hey, you're a mod! When you unpublish a world, it'll remove the  ", l.createElement("code", null, "admin_approved"), "  tag, become  ", l.createElement("code", null, "releaseStatus: private"), " , and go back to not being visible any mo'."), l.createElement(be, {
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
                    }, l.createElement(c.JX, null, l.createElement("p", null, "Publishing a world will make it visible to everyone."), l.createElement("p", null, "Are you sure you want to proceed?"), l.createElement(be, {
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
                    }, l.createElement(c.JX, null, l.createElement("p", null, "Hey, you're a mod! When you publish a world, it'll get the  ", l.createElement("code", null, "admin_approved"), "  tag, become  ", l.createElement("code", null, "releaseStatus: public"), "  and it'll stay approved forever (until you un-approve it)!"), l.createElement(be, {
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
                    }, l.createElement(c.JX, null, l.createElement("p", null, "Hey, you're a mod! When you promote a world, it'll get the  ", l.createElement("code", null, "admin_approved"), "  tag, become  ", l.createElement("code", null, "releaseStatus: public"), "  and it'll stay approved forever (until you un-approve it)!"), l.createElement(be, {
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
                    }, l.createElement(c.JX, null, l.createElement("p", null, "This will make the world no longer available for players on the ", t, " platform."), l.createElement("p", null, "Are you sure you want to proceed?"), l.createElement(be, {
                        onConfirm: n,
                        onCancel: a,
                        confirmText: "Yes, delete the ".concat(t, " version"),
                        cancelText: "No, keep the ".concat(t, " version")
                    })))
                },
                ke = n(72522);
            var _e = (0, a.Z)(c.zx, {
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
                }, l.createElement(_e, {
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
                    icon: U.NB,
                    disabled: !0
                }) : l.createElement(c.$1, {
                    width: 20,
                    icon: Y.LE
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

            function Ze(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return De(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return De(e, t)
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

            function De(e, t) {
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

            function Oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Le(Object(n), !0).forEach((function(t) {
                        (0, k.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Le(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var je = {
                    name: "ozd7xs",
                    styles: "flex-shrink:0"
                },
                Ae = {
                    name: "ozd7xs",
                    styles: "flex-shrink:0"
                };
            const Re = function() {
                var e, t, n, a, m = (0, w.I0)(),
                    u = (0, i.lr)(),
                    d = (0, s.Z)(u, 1)[0],
                    p = (0, o.s0)(),
                    f = (0, o.UO)().worldId,
                    g = (0, x.Tu)(),
                    h = g.trustLevel,
                    v = g.user,
                    y = (0, x.pc)(),
                    C = (0, x.BT)({
                        worldId: f,
                        userId: v.id,
                        isMod: y,
                        noCache: !0
                    }),
                    N = C.data,
                    _ = C.reports,
                    S = C.bops,
                    I = C.loading,
                    P = C.error,
                    Z = C.errorMessage,
                    D = C.refreshWorld,
                    L = void 0 === D ? function() {} : D,
                    O = (null == N ? void 0 : N.authorId) === v.id,
                    j = y || O,
                    A = (0, w.v9)((function(e) {
                        return e.world.updatedWorld
                    })),
                    re = l.useState(null),
                    oe = (0, s.Z)(re, 2),
                    ce = oe[0],
                    me = oe[1],
                    be = (0, fe.y)().data,
                    _e = (void 0 === be ? {} : be).sdkUnityVersion,
                    Se = (0, x.dD)(),
                    Ie = l.useRef(null),
                    De = l.useRef(null),
                    Le = (0, x.T)({
                        worldId: f
                    }),
                    Re = Le.action,
                    Be = Le.canPublish,
                    gt = Le.deleteWorld,
                    bt = Le.deleteWorldPlatform,
                    wt = Le.error,
                    ht = Le.loading,
                    vt = Le.publishWorld,
                    yt = Le.success,
                    Et = Le.unpublishWorld,
                    xt = l.useState(!1),
                    Ct = (0, s.Z)(xt, 2),
                    Nt = Ct[0],
                    kt = Ct[1],
                    _t = l.useState(!1),
                    St = (0, s.Z)(_t, 2),
                    It = St[0],
                    Pt = St[1],
                    Zt = l.useState(null),
                    Dt = (0, s.Z)(Zt, 2),
                    Lt = Dt[0],
                    Ot = Dt[1],
                    jt = l.useState(!1),
                    At = (0, s.Z)(jt, 2),
                    Rt = At[0],
                    Tt = At[1],
                    Wt = l.useState(!1),
                    Ut = (0, s.Z)(Wt, 2),
                    Yt = Ut[0],
                    Mt = Ut[1],
                    zt = l.useState(!1),
                    Ft = (0, s.Z)(zt, 2),
                    $t = Ft[0],
                    Vt = Ft[1],
                    qt = l.useState(!1),
                    Xt = (0, s.Z)(qt, 2),
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
                    mn = (0, s.Z)(sn, 2),
                    un = mn[0],
                    dn = mn[1],
                    pn = l.useState(!1),
                    fn = (0, s.Z)(pn, 2),
                    gn = fn[0],
                    bn = fn[1],
                    wn = l.useState(null),
                    hn = (0, s.Z)(wn, 2),
                    vn = hn[0],
                    yn = hn[1],
                    En = l.useState(!1),
                    xn = (0, s.Z)(En, 2),
                    Cn = xn[0],
                    Nn = xn[1],
                    kn = function() {
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
                var _n = l.useMemo((function() {
                    return "string" != typeof(null == N ? void 0 : N.description) ? null : Oe({
                        description: "",
                        tags: [],
                        previewYoutubeId: ""
                    }, N)
                }), [N]);
                l.useEffect((function() {
                    if (_n && ce) {
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
                            name: _n.name,
                            description: _n.description,
                            releaseStatus: _n.releaseStatus,
                            tags: _n.tags,
                            capacity: _n.capacity,
                            recommendedCapacity: _n.recommendedCapacity,
                            previewYoutubeId: null == _n ? void 0 : _n.previewYoutubeId,
                            urlList: null == _n ? void 0 : _n.urlList,
                            itemDisableReason: null == _n ? void 0 : _n.itemDisableReason
                        });
                        Qt(e)
                    }
                }), [_n, ce]), l.useEffect((function() {
                    if (null !== ce) {
                        var e = function(e) {
                            return e <= 0 || Number.isNaN(e) || !Number.isInteger(e) || "" === e
                        };
                        e(null == ce ? void 0 : ce.recommendedCapacity) ? Ot("Please enter a valid Recommended Capacity number.") : e(null == ce ? void 0 : ce.capacity) ? Ot("Please enter a valid Maximum Capacity number.") : ce.recommendedCapacity > ce.capacity ? Ot("Recommended Capacity can not be higher than Maximum Capacity.") : ce.capacity > 80 ? Ot("Maximum Capacity can not be higher than 80.") : Ot(null)
                    }
                }), [ce]), l.useEffect((function() {
                    null !== _n && me(Oe(Oe({}, _n), {
                        recommendedCapacity: (null == _n ? void 0 : _n.recommendedCapacity) || (null == _n ? void 0 : _n.capacity)
                    }))
                }), [_n]);
                var Sn = function() {
                        var e = (0, T.Z)(ue().mark((function e() {
                            return ue().wrap((function(e) {
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
                        var e = (0, T.Z)(ue().mark((function e() {
                            return ue().wrap((function(e) {
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
                    Zn = function() {
                        var e = (0, T.Z)(ue().mark((function e() {
                            return ue().wrap((function(e) {
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
                    Dn = function() {
                        an(!1)
                    },
                    Ln = function() {
                        var e = (0, T.Z)(ue().mark((function e() {
                            return ue().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return Nn(!1), e.next = 3, vt();
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
                    On = function() {
                        var e = (0, T.Z)(ue().mark((function e() {
                            return ue().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return bn(!1), e.next = 3, vt();
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
                    jn = function(e) {
                        return function() {
                            yn(e)
                        }
                    },
                    An = function() {
                        var e = (0, T.Z)(ue().mark((function e() {
                            return ue().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, bt(vn);
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
                    Rn = function(e) {
                        return function(t) {
                            var n = t.target.value,
                                a = void 0 === n ? "" : n;
                            me((function(t) {
                                return Oe(Oe({}, t), {}, (0, k.Z)({}, e, a))
                            }))
                        }
                    },
                    Tn = function(e) {
                        return function(t) {
                            var n = t.target.value,
                                a = void 0 === n ? "" : n;
                            me((function(t) {
                                return Oe(Oe({}, t), {}, (0, k.Z)({}, e, Number(a)))
                            }))
                        }
                    },
                    Wn = function(e) {
                        var t = "feature_".concat(e, "_disabled");
                        console.log("Toggling feature: ".concat(e, ", tag: ").concat(t)), ce.tags.includes(t) ? me((function(e) {
                            return Oe(Oe({}, e), {}, {
                                tags: e.tags.filter((function(e) {
                                    return e !== t
                                }))
                            })
                        })) : me((function(e) {
                            return Oe(Oe({}, e), {}, {
                                tags: [].concat((0, R.Z)(e.tags), [t])
                            })
                        }))
                    },
                    Un = function() {
                        var e = (0, T.Z)(ue().mark((function e() {
                            var t;
                            return ue().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (Kt && ce && _n) {
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
                                        return e.prev = 15, e.next = 18, m((0, de.tc)({
                                            tagList: t,
                                            worldId: f
                                        }));
                                    case 18:
                                        e.next = 23;
                                        break;
                                    case 20:
                                        e.prev = 20, e.t1 = e.catch(15), console.error(e.t1);
                                    case 23:
                                        return e.prev = 23, e.next = 26, m((0, de.GE)(Oe(Oe({}, ce), {}, {
                                            worldId: f
                                        })));
                                    case 26:
                                        A.error || m((0, E.d)({
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
                    Yn = l.useMemo((function() {
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
                            i = Ze([].concat(ce.unityPackages).reverse());
                        try {
                            for (i.s(); !(e = i.n()).done;) {
                                var c = e.value,
                                    s = c.unityVersion,
                                    m = c.unitySortNumber,
                                    u = c.platform,
                                    d = (0, ge.el)(m, _e),
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
                    }), [null == ce ? void 0 : ce.unityPackages, _e]),
                    Mn = l.useMemo((function() {
                        if (!ce) return !1;
                        var e = Yn.platformsList.includes("standalonewindows"),
                            t = Yn.platformsList.includes("android");
                        return e && t
                    }), [ce, Yn.platformsList]),
                    zn = Yn.hasUnsupported && !Yn.hasSupported && !Yn.hasOld,
                    Fn = Yn.hasUnsupported && (Yn.hasSupported || Yn.hasOld),
                    $n = !Yn.hasUnsupported && !Yn.hasSupported,
                    Vn = l.useMemo((function() {
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
                    qn = Vn.isAdminApproved,
                    Xn = Vn.isInLabs,
                    Hn = Vn.isLabsLocked,
                    Bn = Vn.isLabsFailed,
                    Jn = Vn.isWorldDebugEnabled,
                    Gn = Vn.isAvatarScalingEnabled,
                    Kn = (Vn.isStickersEnabled, Vn.isDroneEnabled, Vn.isFocusViewEnabled),
                    Qn = !("public" === (null == ce ? void 0 : ce.releaseStatus) || qn || Xn || y || Bn || Hn),
                    ea = "public" === (null == ce ? void 0 : ce.releaseStatus),
                    ta = !ea && (y || qn && Be),
                    na = Qn && !Be,
                    aa = Qn && !na && !h.user,
                    ra = !(null != ce && ce.name) || "" === (null == ce ? void 0 : ce.name),
                    la = (null != S ? S : 0) > 0,
                    oa = l.useMemo((function() {
                        return j && ((null == ce ? void 0 : ce.tags.includes("admin_filter_analytics")) || la)
                    }), [j, null == ce ? void 0 : ce.tags, la]),
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
                    sa = null !== (e = null !== (t = null == _ ? void 0 : _.reportCount) && void 0 !== t ? t : null == _ || null === (n = _.feedbackReport) || void 0 === n ? void 0 : n.reportCount) && void 0 !== e ? e : 0;
                return !I && (ce && N || P) ? !I && P ? l.createElement(We, null, l.createElement(Ue, {
                    className: "mt-2 mb-3 align-items-center justify-content-between"
                }, l.createElement(Ue, {
                    className: "align-items-center mb-1"
                }, l.createElement(ft, {
                    role: "button",
                    "aria-label": "Back",
                    onClick: kn
                }, l.createElement(c.$1, {
                    icon: ae.ac,
                    color: "white",
                    size: "2x"
                })), l.createElement(Ye, null, "Edit World Info"))), l.createElement(We, {
                    className: "flex-column flex-sm-row align-items-center justify-content-center w-100"
                }, l.createElement(c.qX, {
                    type: "error",
                    title: "Could not load World data",
                    message: Z
                }))) : j ? l.createElement(We, null, l.createElement(Ue, {
                    className: "mt-2 mb-3 align-items-center justify-content-between"
                }, l.createElement(Ue, {
                    className: "align-items-center mb-1"
                }, l.createElement(ft, {
                    role: "button",
                    "aria-label": "Back",
                    onClick: kn
                }, l.createElement(c.$1, {
                    icon: ae.ac,
                    color: "white",
                    size: "2x"
                })), l.createElement(Ye, null, "Edit World Info")), Kt && !Se && null === Lt && l.createElement(ut, {
                    className: "animated fadeIn"
                }, l.createElement(dt, {
                    onClick: Un,
                    className: "w-100",
                    loading: A.changing,
                    positive: !0
                }, "Save Changes"))), l.createElement(Ue, {
                    className: "mb-2 align-items-sm-center justify-content-between flex-column flex-sm-row"
                }), l.createElement(We, {
                    className: "mb-5"
                }, A.error && l.createElement(c.qX, {
                    type: "error",
                    title: "Failed to update World data",
                    message: A.error
                }), zn && l.createElement(c.qX, {
                    title: "Unsupported Unity Version",
                    type: "error",
                    message: l.createElement(l.Fragment, null, "None of the uploaded world versions are using a supported Unity version.", l.createElement("br", null), l.createElement("b", null, "Please always use a Unity version VRChat supports."), l.createElement("br", null), l.createElement("br", null), l.createElement("a", {
                        href: "https://docs.vrchat.com/docs/current-unity-version",
                        target: "_blank",
                        rel: "noreferrer"
                    }, "Learn more here"))
                }), Fn && l.createElement(c.qX, {
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
                }), l.createElement(Ue, {
                    className: "align-items-start flex-column flex-sm-row"
                }, l.createElement(Te, {
                    className: "order-last order-sm-first w-100 w-sm-auto flex-grow-1"
                }, l.createElement(Ve, {
                    className: "w-100 w-sm-auto flex-grow-1"
                }, l.createElement(at, {
                    className: "mt-0"
                }, "Name"), l.createElement(c.II, {
                    name: "worldName",
                    "aria-label": "World Name",
                    type: "text",
                    placeholder: "World Name",
                    value: ce.name,
                    onChange: Rn("name"),
                    onBlur: function() {
                        ce.name && "" !== ce.name || me((function(e) {
                            return Oe(Oe({}, e), {}, {
                                name: _n.name
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
                }), l.createElement(at, null, "Maximum Capacity"), l.createElement(Ue, {
                    className: "align-items-center w-100 mt-2 flex-column flex-sm-row"
                }, l.createElement(c.II, {
                    ref: Ie,
                    name: "maximum-capacity",
                    "aria-label": "Maximum Capacity",
                    type: "number",
                    placeholder: "Maximum Capacity",
                    inputMode: "number",
                    defaultValue: ce.capacity,
                    onBlur: Tn("capacity"),
                    inputStyle: ze,
                    className: "flex-grow-1 w-100 me-0 me-sm-2"
                }), l.createElement(c.zx, {
                    role: "checkbox",
                    "aria-checked": Nt,
                    "aria-label": Nt ? "Hide Maximum Capacity Help" : "Show Maximum Capacity Help",
                    onClick: function() {
                        return kt(!Nt)
                    },
                    className: "px-2 py-1 mt-2 mt-sm-0",
                    containerStyles: Ae,
                    neutral: !0
                }, l.createElement(c.$1, {
                    icon: te.sp,
                    disabled: !Nt
                }))), Nt && l.createElement(c.qX, {
                    type: "info",
                    title: "Maximum Capacity",
                    message: "Maximum Capacity controls how many users are allowed into one instance of a world at a time. Additional users are not allowed to join over this limit with very few exceptions, such as the world creator, instance owners, and group owners."
                }), l.createElement(at, null, "Recommended Capacity"), l.createElement(Ue, {
                    className: "align-items-center w-100 mt-2 flex-column flex-sm-row"
                }, l.createElement(c.II, {
                    ref: De,
                    name: "recommended-capacity",
                    "aria-label": "Recommended Capacity",
                    type: "number",
                    placeholder: "Recommended Capacity",
                    inputMode: "number",
                    defaultValue: ce.recommendedCapacity,
                    onBlur: Tn("recommendedCapacity"),
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
                    containerStyles: je,
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
                    onChange: Rn("description"),
                    inputStyle: ze,
                    rows: "4",
                    className: "mt-2"
                }), l.createElement(at, null, "Tags"), l.createElement(Fe, {
                    value: ia,
                    placeholder: "E.g., adventure, game, chill",
                    suggestions: [],
                    onSelectValue: function(e) {
                        var t, n, a = e.startsWith("system_") || e.startsWith("admin_");
                        if ((y || !a) && (null == ce || null === (t = ce.tags) || void 0 === t || !t.includes(e))) {
                            var r = e.replace(/\s/gi, "_").replace(/\W/gi, "");
                            y && a || (r = "author_tag_".concat(r)), null != ce && null !== (n = ce.tags) && void 0 !== n && n.includes(r) || me((function(e) {
                                var t;
                                return Oe(Oe({}, e), {}, {
                                    tags: [].concat((0, R.Z)(null !== (t = null == e ? void 0 : e.tags) && void 0 !== t ? t : []), [r])
                                })
                            }))
                        }
                    },
                    onRemoveValue: function(e) {
                        me((function(t) {
                            var n, a;
                            return Oe(Oe({}, t), {}, {
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
                }), l.createElement(at, null, "Content Warnings"), l.createElement(Te, {
                    className: "py-2 gap-2"
                }, l.createElement(c.ks, {
                    tags: null == ce ? void 0 : ce.tags,
                    isMod: y,
                    onSelectValues: function(e) {
                        me((function(t) {
                            return Oe(Oe({}, t), {}, {
                                tags: [].concat((0, R.Z)(t.tags), (0, R.Z)(e))
                            })
                        }))
                    },
                    onRemoveValue: function(e) {
                        me((function(t) {
                            return Oe(Oe({}, t), {}, {
                                tags: t.tags.filter((function(t) {
                                    return t !== e
                                }))
                            })
                        }))
                    }
                })), l.createElement(at, null, "Avatar Scaling"), l.createElement(Ue, {
                    className: "align-items-center w-100 flex-column flex-sm-row mt-2"
                }, l.createElement(lt, {
                    type: "button",
                    "aria-label": "Toggle Avatar Scaling",
                    onClick: function() {
                        ce.tags.includes("feature_avatar_scaling_disabled") ? me((function(e) {
                            return Oe(Oe({}, e), {}, {
                                tags: e.tags.filter((function(e) {
                                    return "feature_avatar_scaling_disabled" !== e
                                }))
                            })
                        })) : me((function(e) {
                            return Oe(Oe({}, e), {}, {
                                tags: [].concat((0, R.Z)(e.tags), ["feature_avatar_scaling_disabled"])
                            })
                        }))
                    },
                    className: "me-0 me-sm-2 mb-2 mb-sm-0 flex-grow-1 w-100",
                    neutral: !Gn,
                    positive: Gn,
                    expand: !0
                }, l.createElement(ot, null, "Avatar Scaling ", Gn ? "Enabled" : "Disabled"), Gn ? l.createElement(c.$1, {
                    width: 20,
                    icon: Y.LE
                }) : l.createElement(c.$1, {
                    width: 20,
                    icon: U.NB,
                    disabled: !0
                })), l.createElement(c.zx, {
                    role: "checkbox",
                    "aria-checked": Rt,
                    "aria-label": Rt ? "Hide Avatar Scaling Help" : "Show Avatar Scaling Help",
                    onClick: function() {
                        return Tt(!Rt)
                    },
                    className: "px-2 py-1",
                    neutral: !0
                }, l.createElement(c.$1, {
                    icon: te.sp,
                    disabled: !Rt
                }))), Rt && l.createElement(c.qX, {
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
                    }, l.createElement(Ue, {
                        className: "align-items-center w-100 flex-column flex-sm-row mt-2"
                    }, l.createElement(lt, {
                        type: "button",
                        "aria-label": "Toggle ".concat(e.displayName),
                        onClick: function() {
                            return Wn(e.internalName)
                        },
                        className: "me-0 me-sm-2 mb-2 mb-sm-0 flex-grow-1 w-100",
                        neutral: !a,
                        positive: a,
                        expand: !0
                    }, l.createElement(ot, null, e.displayName, " ", a ? "Enabled" : "Disabled"), a ? l.createElement(c.$1, {
                        width: 20,
                        icon: Y.LE
                    }) : l.createElement(c.$1, {
                        width: 20,
                        icon: U.NB,
                        disabled: !0
                    }))))
                })), l.createElement(Pe, {
                    world: ce,
                    handleFieldEdit: Rn,
                    handleFeatureToggle: Wn
                }), l.createElement(at, null, "Focus View"), l.createElement(Ue, {
                    className: "align-items-center w-100 flex-column flex-sm-row mt-2"
                }, l.createElement(lt, {
                    type: "button",
                    "aria-label": "Toggle Focus View",
                    onClick: function() {
                        ce.tags.includes("feature_focus_view_disabled") ? me((function(e) {
                            return Oe(Oe({}, e), {}, {
                                tags: e.tags.filter((function(e) {
                                    return "feature_focus_view_disabled" !== e
                                }))
                            })
                        })) : me((function(e) {
                            return Oe(Oe({}, e), {}, {
                                tags: [].concat((0, R.Z)(e.tags), ["feature_focus_view_disabled"])
                            })
                        }))
                    },
                    className: "me-0 me-sm-2 mb-2 mb-sm-0 flex-grow-1 w-100",
                    neutral: !Kn,
                    positive: Kn,
                    expand: !0
                }, l.createElement(ot, null, "Focus View ", Kn ? "Enabled" : "Disabled"), Kn ? l.createElement(c.$1, {
                    width: 20,
                    icon: Y.LE
                }) : l.createElement(c.$1, {
                    width: 20,
                    icon: U.NB,
                    disabled: !0
                })), l.createElement(c.zx, {
                    role: "checkbox",
                    "aria-checked": Yt,
                    "aria-label": Yt ? "Hide Focus View Help" : "Show Focus View Help",
                    onClick: function() {
                        return Mt(!Yt)
                    },
                    className: "px-2 py-1",
                    neutral: !0
                }, l.createElement(c.$1, {
                    icon: te.sp,
                    disabled: !Yt
                }))), Yt && l.createElement(c.qX, {
                    type: "info",
                    title: "What is Focus View"
                }, "Enabling this will let users use Focus View in your world. If you want finer control, edit the VRC_UIShape component on a canvas to control focus view in your world.", " ", l.createElement("a", {
                    href: "https://creators.vrchat.com/worlds/components/vrc_uishape#focus-view",
                    rel: "noreferrer",
                    target: "_blank"
                }, "Check the docs here.")), l.createElement(at, null, "YouTube Preview Link"), l.createElement(Ue, {
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
                        me((function(e) {
                            return Oe(Oe({}, e), {}, {
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
                        return me(Oe(Oe({}, ce), {}, {
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
                }, "World Visibility"), l.createElement(Ue, {
                    className: "align-items-sm-center flex-column flex-sm-row mt-2 w-100 flex-grow-1"
                }, l.createElement($e, {
                    className: "flex-1 me-0 me-sm-2 mb-2 mb-sm-0"
                }, ca), l.createElement(Te, {
                    className: "mb-2 mb-sm-0"
                }, l.createElement(Ue, null, y && Xn && l.createElement(c.zx, {
                    className: "px-3 py-1 me-0 me-sm-2",
                    expand: Se,
                    onClick: function() {
                        bn(!0)
                    },
                    positive: !0,
                    loading: ht
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
                    loading: ht
                }, "Unpublish"), ta && l.createElement(c.zx, {
                    className: "px-3 py-1",
                    expand: Se,
                    onClick: function() {
                        an(!0)
                    },
                    positive: !0,
                    loading: ht
                }, "Publish"), Qn && Be && h.user && l.createElement(c.zx, {
                    className: "px-3 py-1",
                    expand: Se,
                    onClick: function() {
                        Nn(!0)
                    },
                    positive: !0,
                    loading: ht
                }, l.createElement(c.$1, {
                    icon: F.jZ,
                    className: "me-2"
                }), "Publish to Community Labs"), na && l.createElement(c.zx, {
                    className: "px-3 py-1",
                    expand: Se,
                    disabled: !0
                }, l.createElement(c.$1, {
                    icon: U.NB,
                    className: "me-2"
                }), "You can't publish worlds right now"), aa && l.createElement(c.zx, {
                    className: "px-3 py-1",
                    expand: Se,
                    disabled: !0
                }, l.createElement(c.$1, {
                    icon: U.NB,
                    className: "me-2"
                }), "You don't have enough trust to publish worlds, yet.")))), yt && "publish" === Re && l.createElement(c.qX, {
                    type: "success",
                    title: "Your World is now public!"
                }, l.createElement(i.rU, {
                    to: "/home/world/".concat(ce.id)
                }, "Check it out!")), yt && "unpublish" === Re && l.createElement(c.qX, {
                    type: "success",
                    title: "Your World is now private!",
                    message: "Your world is now private!",
                    slim: !0
                }), wt && l.createElement(c.qX, {
                    type: "error",
                    title: "Failed to change world visibility",
                    message: wt
                }), Cn && l.createElement(we, {
                    onConfirm: Ln,
                    onCancel: function() {
                        Nn(!1)
                    }
                }), on && (y ? l.createElement(ye, {
                    onConfirm: In,
                    onCancel: Pn
                }) : l.createElement(he, {
                    onConfirm: In,
                    onCancel: Pn
                })), nn && (y ? l.createElement(xe, {
                    onConfirm: Zn,
                    onCancel: Dn
                }) : qn && l.createElement(Ee, {
                    onConfirm: Zn,
                    onCancel: Dn
                })), gn && l.createElement(Ce, {
                    onConfirm: On,
                    onCancel: function() {
                        bn(!1)
                    }
                }), l.createElement(mt, {
                    className: "px-2 me-0 me-sm-3 mt-2 align-self-center align-self-sm-start"
                }, l.createElement(c.$1, {
                    icon: te.sp,
                    className: "me-2"
                }), l.createElement("a", {
                    href: "https://docs.vrchat.com/docs/submitting-a-world-to-be-made-public",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn more about Community Labs")), l.createElement(at, null, "World Debugging"), l.createElement(Ue, {
                    className: "align-items-center w-100 flex-column flex-sm-row mt-2"
                }, l.createElement(lt, {
                    type: "button",
                    "aria-label": "Toggle World Debugging",
                    onClick: function() {
                        ce.tags.includes("debug_allowed") ? me((function(e) {
                            return Oe(Oe({}, e), {}, {
                                tags: e.tags.filter((function(e) {
                                    return "debug_allowed" !== e
                                }))
                            })
                        })) : me((function(e) {
                            return Oe(Oe({}, e), {}, {
                                tags: [].concat((0, R.Z)(e.tags), ["debug_allowed"])
                            })
                        }))
                    },
                    className: "me-0 me-sm-2 mb-2 mb-sm-0 flex-grow-1 w-100",
                    neutral: !Jn,
                    positive: Jn,
                    expand: !0
                }, l.createElement(ot, null, "World Debugging ", Jn ? "Enabled" : "Disabled"), Jn ? l.createElement(c.$1, {
                    width: 20,
                    icon: Y.LE
                }) : l.createElement(c.$1, {
                    width: 20,
                    icon: U.NB,
                    disabled: !0
                })), l.createElement(c.zx, {
                    role: "checkbox",
                    "aria-checked": $t,
                    "aria-label": $t ? "Hide World Debug Help" : "Show World Debug Help",
                    onClick: function() {
                        return Vt(!$t)
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
                }, "See the keyboard binding documentation for more details"), "."), Yn.platformsList.length > 1 && l.createElement(l.Fragment, null, l.createElement(at, null, "World Platforms"), l.createElement(Ue, {
                    className: "align-items-center justify-content-between w-100 flex-column flex-sm-row mt-2 tw-gap-3"
                }, Yn.platformsList.map((function(e) {
                    var t;
                    return l.createElement(c.zx, {
                        key: e,
                        onClick: jn(e),
                        loading: ht,
                        expand: !0,
                        danger: !0
                    }, l.createElement(c.$1, {
                        icon: ee.$,
                        className: "me-2"
                    }), "Delete ", (null === (t = ke.VT[e]) || void 0 === t ? void 0 : t.label) || e, " Version")
                })))), null != vn && l.createElement(Ne, {
                    platformName: (null === (a = ke.VT[vn]) || void 0 === a ? void 0 : a.label) || vn,
                    onConfirm: An,
                    onCancel: function() {
                        yn(null)
                    }
                }), l.createElement(at, null, "World Deletion"), l.createElement(c.zx, {
                    className: "px-3 py-1 mt-2",
                    onClick: function() {
                        dn(!0)
                    },
                    loading: ht,
                    expand: !0,
                    danger: !0
                }, l.createElement(c.$1, {
                    icon: ee.$,
                    className: "me-2"
                }), "Delete World Completely"), un && l.createElement(ve, {
                    onConfirm: Sn,
                    onCancel: function() {
                        dn(!1)
                    }
                })))), l.createElement(qe, {
                    className: "ms-0 ms-sm-3 mb-3 mb-sm-0"
                }, l.createElement(Xe, null, l.createElement(c.oI, null, l.createElement(Je, null, l.createElement(Ge, null, l.createElement(Ke, {
                    src: ce.imageUrl,
                    alt: ce.name
                }))), l.createElement(Ue, {
                    className: "justify-content-between align-items-center"
                }, l.createElement(i.rU, {
                    className: "tw-wrap-break-word tw-overflow-hidden tw-overflow-ellipsis",
                    to: "/home/world/".concat(ce.id)
                }, l.createElement(Qe, {
                    className: "tw-overflow-hidden tw-overflow-ellipsis"
                }, null == _n ? void 0 : _n.name)))), l.createElement(c.Ao, null, l.createElement(Te, null, l.createElement(Te, null, l.createElement(et, null, l.createElement(c.$1, {
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
                }, l.createElement(nt, null, "Heat"), l.createElement(Ue, {
                    className: "align-items-center"
                }, y ? (0, ge.ER)(ce.heat) : ie()(Math.min(10, ce.heat)).map((function(e) {
                    return l.createElement(c.$1, {
                        key: "heat-".concat(e),
                        size: "md",
                        icon: X.Rp,
                        color: "#919191",
                        className: "ms-1"
                    })
                })))))), l.createElement(Te, {
                    className: "mt-4"
                }, Mn && l.createElement(et, {
                    role: "note",
                    title: "Cross-Platform"
                }, l.createElement(c.$1, {
                    width: 20,
                    icon: q.vq,
                    color: "#54b5c5",
                    className: "me-2"
                }), "Cross-Platform"), l.createElement(et, null, l.createElement(c.$1, {
                    width: 20,
                    icon: V.r6,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(tt, {
                    role: "group",
                    title: "Last Update Date"
                }, l.createElement(nt, null, "Updated"), b()(ce.updated_at).format("MMM DD YYYY"))), "none" !== ce.publicationDate && l.createElement(et, null, l.createElement(c.$1, {
                    width: 20,
                    icon: $.Ac,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(tt, {
                    role: "group",
                    title: "Publish Date"
                }, l.createElement(nt, null, "Published"), b()(ce.publicationDate).format("MMM DD YYYY"))), "none" !== ce.labsPublicationDate && l.createElement(et, null, l.createElement(c.$1, {
                    width: 20,
                    icon: F.jZ,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(tt, {
                    role: "group",
                    title: "Labs Publish Date"
                }, l.createElement(nt, null, "Labs'd"), b()(ce.labsPublicationDate).format("MMM DD YYYY"))), l.createElement(et, null, l.createElement(c.$1, {
                    width: 20,
                    icon: z.CP,
                    color: "#54b5c5",
                    className: "me-2"
                }), l.createElement(tt, {
                    role: "group",
                    title: "Creation Date"
                }, l.createElement(nt, null, "Created"), b()(ce.created_at).format("MMM DD YYYY"))))))), oa && l.createElement("a", {
                    href: window.apiUrl("/api/1/worlds/".concat(null == ce ? void 0 : ce.id, "/analytics/redirect")),
                    target: "_blank",
                    className: "mt-2",
                    rel: "noreferrer"
                }, l.createElement(c.zx, null, "Download Analytics")), l.createElement(He, {
                    className: "mt-2"
                }, l.createElement(Te, null, l.createElement(Te, {
                    role: "group",
                    "aria-labelledby": "UnityVersionsLabel"
                }, l.createElement(et, {
                    id: "UnityVersionsLabel"
                }, l.createElement(c.$1, {
                    width: 20,
                    icon: M.kl,
                    color: "#54b5c5",
                    className: "me-2"
                }), "Unity Versions"), l.createElement(Te, null, Yn.versionsList.map((function(e) {
                    return e.isSupported ? l.createElement(it, {
                        title: "Unity Version",
                        key: e.name,
                        current: !0
                    }, e.name, " ", l.createElement(c.$1, {
                        icon: Y.LE,
                        className: "mx-2",
                        color: "var(--bs-success)"
                    }), " VRChat Supported") : e.isUnsupported ? l.createElement(it, {
                        title: "Unity Version",
                        key: e.name,
                        current: !0
                    }, e.name, " ", l.createElement(c.$1, {
                        icon: U.NB,
                        className: "mx-2",
                        color: "var(--bs-danger)"
                    }), " Unsupported") : l.createElement(it, {
                        title: "Unity Version",
                        key: e.name
                    }, e.name)
                })))), l.createElement(Te, {
                    role: "group",
                    "aria-labelledby": "PlatformsLabel"
                }, l.createElement(et, {
                    className: "mt-2",
                    id: "PlatformsLabel"
                }, l.createElement(c.$1, {
                    width: 20,
                    icon: W.l9,
                    color: "#54b5c5",
                    className: "me-2"
                }), "Platforms"), l.createElement(Te, null, Yn.platformsList.map((function(e) {
                    var t;
                    return l.createElement(ct, {
                        key: e
                    }, (null === (t = ke.VT[e]) || void 0 === t ? void 0 : t.label) || e)
                })))))), $n && l.createElement(st, {
                    title: "Outdated Unity Version",
                    message: l.createElement(l.Fragment, null, "It is recommended to always use the latest Unity version VRChat supports for your world development.", l.createElement("br", null), "This helps avoid possible incompatibility issues.", l.createElement("br", null), l.createElement("br", null), l.createElement("a", {
                        href: "https://docs.vrchat.com/docs/upgrading-unity-projects",
                        target: "_blank",
                        rel: "noreferrer"
                    }, "Learn more about upgrading"))
                }), Kt && Se && null === Lt && l.createElement(ut, {
                    className: "animated slideInUp"
                }, l.createElement(dt, {
                    onClick: Un,
                    className: "w-100",
                    loading: A.changing,
                    positive: !0
                }, "Save Changes")))))) : l.createElement(We, null, l.createElement(Ue, {
                    className: "mt-2 mb-3 align-items-center justify-content-between"
                }, l.createElement(Ue, {
                    className: "align-items-center mb-1"
                }, l.createElement(ft, {
                    role: "button",
                    "aria-label": "Back",
                    onClick: kn
                }, l.createElement(c.$1, {
                    icon: ae.ac,
                    color: "white",
                    size: "2x"
                })), l.createElement(Ye, null, "Edit World Info"))), l.createElement(We, {
                    className: "flex-column flex-sm-row align-items-center justify-content-center w-100"
                }, l.createElement(c.qX, {
                    type: "error",
                    title: "Cannot edit this world",
                    message: "You can only edit your own worlds!"
                }))) : l.createElement(We, null, l.createElement(Ue, {
                    className: "mt-2 mb-3 align-items-center justify-content-between"
                }, l.createElement(Ue, {
                    className: "align-items-center mb-1"
                }, l.createElement(c.$1, {
                    icon: ae.ac,
                    color: "white",
                    size: "2x",
                    onClick: kn
                }), l.createElement(Ye, null, "Edit World Info"))), l.createElement(We, {
                    className: "flex-column flex-sm-row"
                }, l.createElement(Te, {
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
                })), l.createElement(Me, {
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
            var Te = (0, a.Z)("div", {
                    target: "e7ur3i630"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                }),
                We = (0, a.Z)(Te, {
                    target: "e7ur3i629"
                })({
                    name: "1aea1rw",
                    styles: "align-self:center;width:100%;max-width:1200px"
                }),
                Ue = (0, a.Z)("div", {
                    target: "e7ur3i628"
                })({
                    name: "zjik7",
                    styles: "display:flex"
                }),
                Ye = (0, a.Z)("h2", {
                    target: "e7ur3i627"
                })({
                    name: "1kdats7",
                    styles: "margin:0 0 0 1rem"
                }),
                Me = (0, a.Z)(Te, {
                    target: "e7ur3i626"
                })({
                    name: "1g3t9m2",
                    styles: "width:100%;@media (min-width: 576px){width:276px;}"
                }),
                ze = {
                    name: "ilysiq",
                    styles: "background-color:#252a30;border-radius:6px;border:none;color:white!important"
                },
                Fe = (0, a.Z)(c.wg, {
                    target: "e7ur3i625"
                })(ze, ";"),
                $e = (0, a.Z)("div", {
                    target: "e7ur3i624"
                })(ze, " padding:0.5rem;line-height:1.25;"),
                Ve = (0, a.Z)(Te, {
                    target: "e7ur3i623"
                })({
                    name: "1j03xl7",
                    styles: "background-color:#181b1f;border-radius:8px;padding:0.9rem"
                }),
                qe = (0, a.Z)(Te, {
                    target: "e7ur3i622"
                })({
                    name: "1budlv3",
                    styles: "width:100%;@media (min-width: 576px){width:290px;}"
                }),
                Xe = (0, a.Z)(Te, {
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
                et = (0, a.Z)(Ue, {
                    target: "e7ur3i614"
                })({
                    name: "1xhzkqb",
                    styles: "align-items:center;color:#919191;font-weight:bold"
                }),
                tt = (0, a.Z)(Ue, {
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
                mt = (0, a.Z)(Ue, {
                    target: "e7ur3i64"
                })({
                    name: "1h3rtzg",
                    styles: "align-items:center"
                }),
                ut = (0, a.Z)("div", {
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
                bt = n.n(gt),
                wt = n(9669),
                ht = n.n(wt),
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
                        m = e.order,
                        u = void 0 === m ? "descending" : m;
                    return {
                        type: "MY_CONTENT_LOAD_WORLDS",
                        payload: ht().get(window.apiUrl("/api/1/worlds"), {
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
                yt = function(e) {
                    var t = e.worldIds;
                    return {
                        type: "MY_CONTENT_BULK_CHECK_WORLD_STATS",
                        payload: Promise.all(t.map((function(e) {
                            return ht().get(window.apiUrl("/api/1/worlds/".concat(e)))
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

            function Nt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ct(Object(n), !0).forEach((function(t) {
                        (0, k.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ct(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var kt = [{
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
                _t = {
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
                var e = (0, w.I0)(),
                    t = (0, o.TH)().search,
                    n = new URLSearchParams(t).get("scrollTo"),
                    a = (0, i.lr)(),
                    r = (0, s.Z)(a, 2),
                    m = (r[0], r[1]),
                    u = new URLSearchParams(t),
                    d = u.get("order"),
                    p = u.get("sort"),
                    f = "false" !== u.get("publicFirst"),
                    g = (0, xt.XC)().data,
                    b = (0, w.v9)((function(e) {
                        return e.myContent.worlds
                    })),
                    h = b.list,
                    v = b.loading,
                    y = b.loadedAt,
                    E = b.error,
                    x = b.errorMessage,
                    C = b.allPagesLoaded,
                    N = (0, w.v9)((function(e) {
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
                    j = l.useRef(null != d ? d : "descending"),
                    A = l.useState(null != d ? d : "descending"),
                    R = (0, s.Z)(A, 2),
                    W = R[0],
                    U = R[1],
                    M = l.useState(""),
                    z = (0, s.Z)(M, 2),
                    F = z[0],
                    $ = z[1],
                    V = l.useState(0),
                    q = (0, s.Z)(V, 2),
                    X = q[0],
                    H = q[1],
                    B = l.useRef(0);
                l.useEffect((function() {
                    if (!v && null != g && g.id) {
                        var t = !y && 0 === h.length,
                            n = L !== P.current || W !== j.current,
                            a = Date.now() - y > 6e4;
                        (t || a || n) && (H(0), B.current = 0, e(vt({
                            userId: null == g ? void 0 : g.id,
                            number: 50,
                            offset: 0,
                            sort: L,
                            order: W
                        })))
                    }
                }), [null == g ? void 0 : g.id, L, W, y, v]), l.useEffect((function() {
                    v || C || !y || (h.length - B.current < 50 ? e({
                        type: "MY_CONTENT_MARK_ALL_PAGES_LOADED"
                    }) : H(B.current + 50))
                }), [h, v, y, C]), l.useEffect((function() {
                    B.current !== X && (B.current = X, e(vt({
                        userId: g.id,
                        number: 50,
                        offset: X,
                        sort: L,
                        order: W
                    })))
                }), [X]), l.useEffect((function() {
                    if (P.current !== L) {
                        var e = new URLSearchParams(null != t ? t : "");
                        e.delete("scrollTo"), e.set("sort", L), m(e)
                    }
                    P.current = L
                }), [L]), l.useEffect((function() {
                    if (j.current !== W) {
                        var e = new URLSearchParams(null != t ? t : "");
                        e.delete("scrollTo"), e.set("order", W), m(e)
                    }
                    j.current = W
                }), [W]), l.useEffect((function() {
                    var e = new URLSearchParams(null != t ? t : "");
                    e.delete("scrollTo"), S ? e.delete("publicFirst") : e.set("publicFirst", "false"), m(e)
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
                        var t = (0, T.Z)(ue().mark((function t() {
                            var n, a;
                            return ue().wrap((function(t) {
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
                                        n = h.filter((function(e) {
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
                }), [h, v, E, C]);
                var J = l.useMemo((function() {
                        return bt()(h, (function(e) {
                            return "public" === e.releaseStatus ? -1 : 1
                        }))
                    }), [h]),
                    G = l.useMemo((function() {
                        if (!F) return S ? J : h;
                        try {
                            var e = new RegExp(F, "i");
                            return (S ? J : h).filter((function(t) {
                                var n = "".concat(t.name, " ").concat(t.id, " ").concat(t.description, " ").concat(t.unityPackages.map((function(e) {
                                    return e.platform
                                })).join(" "), " ").concat(t.releaseStatus, " ").concat(t.tags.join(" "));
                                return e.test(n)
                            }))
                        } catch (e) {
                            return S ? J : h
                        }
                    }), [S, h, J, F]);
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
                    value: F,
                    onChange: function(e) {
                        var t = e.target.value;
                        return $(void 0 === t ? "" : t)
                    }
                }), l.createElement(Ot, {
                    className: "me-0 me-sm-2 mb-2 mb-sm-0",
                    label: "Sorting",
                    value: L,
                    options: kt,
                    onChange: O
                }), l.createElement(c.Lt, {
                    className: "mb-2 mb-sm-0",
                    label: "Order",
                    value: W,
                    options: _t[L],
                    onChange: U
                })), l.createElement(c.X2, {
                    className: "ms-0 ms-sm-2 align-self-center align-sm-self-start"
                }, l.createElement(Pt, {
                    role: "checkbox",
                    "aria-checked": S,
                    onClick: function() {
                        return I(!S)
                    }
                }, l.createElement(Zt, null, "Public First"), l.createElement(c.$1, {
                    width: 20,
                    icon: Y.LE,
                    disabled: !S,
                    className: "me-1"
                })))), E && l.createElement(c.qX, {
                    type: "error",
                    title: "Failed to load worlds",
                    message: x
                }), y && 0 === h.length && l.createElement(Lt, {
                    role: "note",
                    title: "There are no Worlds here... yet"
                }, "There are no Worlds here... yet"), l.createElement(Dt, null, v && 0 === (null == h ? void 0 : h.length) ? ie()(0, 6).map((function(e) {
                    return l.createElement(c.UU, {
                        key: e,
                        height: "400px",
                        className: "mb-2"
                    })
                })) : !E && G.map((function(e) {
                    var t;
                    return l.createElement(Et.Z, {
                        key: e.id,
                        world: Nt(Nt({}, e), null !== (t = null == N ? void 0 : N[e.id]) && void 0 !== t ? t : {}),
                        linksToEdit: !0
                    })
                })), v && (null == h ? void 0 : h.length) > 1 && ie()(0, 6).map((function(e) {
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
                Zt = (0, a.Z)("div", {
                    target: "eu0ztp83"
                })({
                    name: "11p52gn",
                    styles: "font-size:1rem;margin-right:10px;margin-left:10px;color:hsla(0, 0%, 100%, 0.6)"
                }),
                Dt = (0, a.Z)("div", {
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
                Ot = (0, a.Z)(c.Lt, {
                    target: "eu0ztp80"
                })({
                    name: "s3oxtx",
                    styles: "z-index:5"
                });
            const jt = function() {
                var e = (0, o.TH)();
                return l.createElement(At, null, "/home/content" === e.pathname && l.createElement(At, null, l.createElement("h2", null, "Manage Uploaded Content"), l.createElement(Rt, null, l.createElement(Tt, {
                    to: "/home/content/worlds"
                }, l.createElement(Wt, null, l.createElement(c.$1, {
                    className: "mb-3",
                    icon: r.g4,
                    size: "5x"
                }), l.createElement(Ut, null, "Worlds"))))), l.createElement(o.Z5, null, l.createElement(o.AW, {
                    path: "/"
                }, l.createElement(o.AW, {
                    path: "/worlds",
                    element: l.createElement(St, null)
                }), l.createElement(o.AW, {
                    path: "/worlds/:worldId/edit",
                    element: l.createElement(Re, null)
                }), l.createElement(o.AW, {
                    path: "/worlds/*",
                    element: l.createElement(St, null)
                }), l.createElement(o.AW, {
                    path: "/restricted/:contentId",
                    element: l.createElement(j, null)
                }))))
            };
            var At = (0, a.Z)("div", {
                    target: "e7t0ljh4"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                }),
                Rt = (0, a.Z)("div", {
                    target: "e7t0ljh3"
                })({
                    name: "1j04kkb",
                    styles: "display:flex;@media (max-width: 400px){flex-direction:column;}"
                }),
                Tt = (0, a.Z)(i.rU, {
                    target: "e7t0ljh2"
                })({
                    name: "168sy3z",
                    styles: "display:flex;border:#07343f solid 2px;border-radius:4px;background:#07343f;color:#6ae3f9;box-sizing:border-box;outline:none!important;flex:1;padding-bottom:40%;height:0;overflow:hidden;margin-right:1rem;margin-top:1rem;position:relative;@media (max-width: 400px){padding-bottom:60%;margin-right:0;}&:hover,&:active,&:focus{border-color:#086c84;}"
                }),
                Wt = (0, a.Z)("div", {
                    target: "e7t0ljh1"
                })({
                    name: "1g561ia",
                    styles: "padding:5px 5px;position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;top:0;left:0"
                }),
                Ut = (0, a.Z)("div", {
                    target: "e7t0ljh0"
                })({
                    name: "mn5luc",
                    styles: "font-size:2rem;font-weight:bold"
                })
        },
        89182: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var a = n(87462),
                r = n(45697),
                l = n.n(r),
                o = n(67294),
                i = n(96985),
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
                b = n(42137),
                w = n(34604),
                h = n(23778),
                v = n(88673),
                y = n(26128),
                E = n(47420),
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
                    icon: h.c7,
                    description: "Nuisance"
                }, {
                    tag: "system_supporter",
                    icon: w.m6,
                    description: "VRC+ Subscriber"
                }, {
                    tag: "system_early_adopter",
                    icon: b.SZ,
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
        }
    }
]);
//# sourceMappingURL=07c7e8a1ca8b2613b265bd56bbffca9304266a6d8bb745aa68ed7c20126a77cb.js.map