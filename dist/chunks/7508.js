"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7508], {
        7508: (e, a, t) => {
            t.r(a), t.d(a, {
                default: () => B
            });
            var r = t(15861),
                n = t(4942),
                l = t(54546),
                s = t(4241),
                o = t(64687),
                c = t.n(o),
                i = t(67294),
                m = t(89250),
                u = t(79655),
                w = (t(37337), t(15832), t(30381), t(34226)),
                d = t(80873),
                p = t(22202),
                g = (t(17219), t(72562)),
                F = t(65847),
                E = t(82470),
                h = t(60006),
                f = (t(41400), t(36678));

            function C(e, a) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    a && (r = r.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function A(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var t = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? C(Object(t), !0).forEach((function(a) {
                        (0, n.Z)(e, a, t[a])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
                    }))
                }
                return e
            }
            const B = function() {
                (0, m.s0)(), (0, m.TH)();
                var e, a, t = (0, u.lr)(),
                    n = (0, l.Z)(t, 1)[0],
                    o = i.useMemo((function() {
                        return Object.fromEntries(n.entries())
                    }), [n]),
                    C = i.useState(o.emailToken),
                    B = (0, l.Z)(C, 2),
                    b = B[0],
                    D = (B[1], (0, p.Gf)({
                        emailToken: b
                    }, {
                        skip: !b
                    })),
                    v = D.data,
                    x = D.isLoading,
                    k = D.isError,
                    y = D.error,
                    N = (0, p.s2)(),
                    j = (0, l.Z)(N, 2),
                    P = j[0],
                    O = j[1],
                    S = O.isLoading,
                    T = O.isSuccess,
                    z = (O.isError, O.error),
                    I = (0, d.sc)().nameTaken,
                    Z = i.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    K = (0, l.Z)(Z, 2),
                    _ = K[0],
                    L = K[1],
                    R = i.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    q = (0, l.Z)(R, 2),
                    U = q[0],
                    J = q[1],
                    M = i.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    H = (0, l.Z)(M, 2),
                    $ = H[0],
                    G = H[1],
                    W = i.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    V = (0, l.Z)(W, 2),
                    X = V[0],
                    Y = V[1];
                i.useEffect((function() {
                    v && !k && (ae({
                        target: {
                            value: v.displayName.replace(/\s[a-zA-Z0-9]{4}$/, "")
                        }
                    }), J(A(A({}, U), {}, {
                        ok: !0,
                        value: v.email
                    })))
                }), [v, k]);
                var Q = i.useMemo((function() {
                    return !0 === _.ok && !0 === U.ok && !0 === $.ok && !0 === X.ok
                }), [_, U, $, X]);
                i.useEffect((function() {
                    var e;
                    z && (0, g.Kz)("AccountUpgrade_Error", {
                        error: null === (e = z.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message
                    })
                }), [z]);
                var ee, ae = function() {
                        var e = (0, r.Z)(c().mark((function e(a) {
                            var t, r, n, l;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = a.target.value, r = void 0 === t ? "" : t, L(A(A({}, _), {}, {
                                                value: r,
                                                ok: null,
                                                taken: !1,
                                                error: !1
                                            })), "" !== r) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        if (r = (0, F.Nw)(r), L((function(e) {
                                                return A(A({}, e), {}, {
                                                    taken: null
                                                })
                                            })), n = !1, "" !== r && r.length < 4 ? n = "That display name is too short" : r.length > 15 && (n = "That display name is too long"), !n) {
                                            e.next = 11;
                                            break
                                        }
                                        return L((function(e) {
                                            return A(A({}, e), {}, {
                                                error: n,
                                                ok: null
                                            })
                                        })), e.abrupt("return");
                                    case 11:
                                        return L((function(e) {
                                            return A(A({}, e), {}, {
                                                checking: !0
                                            })
                                        })), e.next = 14, I(r, v.userId);
                                    case 14:
                                        l = e.sent, L((function(e) {
                                            return A(A({}, e), {}, {
                                                taken: l,
                                                ok: !e.error && !l,
                                                error: l ? "That display name is already taken." : e.error,
                                                checking: !1
                                            })
                                        }));
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(a) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    te = function() {
                        var e = (0, r.Z)(c().mark((function e(a) {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a.preventDefault(), e.prev = 1, e.next = 4, P({
                                            displayName: _.value,
                                            password: $.value,
                                            emailToken: b
                                        }).unwrap();
                                    case 4:
                                        e.next = 9;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), console.error(e.t0);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6]
                            ])
                        })));
                        return function(a) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    re = !o || x,
                    ne = null !== (e = null == z || null === (a = z.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== e ? e : "";
                return ne && (ne.indexOf(":") > 0 ? (ne.substring(0, ne.indexOf(":")).trim(), ne = ne.substring(ne.indexOf(":") + 1).trim()) : 0 === ne.indexOf(":") && (ne = ne.substring(1).trim())), !b || k ? i.createElement(f.Z, null, i.createElement(w.$4, null, "Upgrade Account"), i.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-py-9 tw-px-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, i.createElement("div", {
                    className: "tw-mb-5"
                }, i.createElement(w.$1, {
                    icon: s.FK,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Upgrade Account"), i.createElement(w.qX, {
                    type: "error",
                    title: "Invalid token"
                }, "The link you have followed is not valid. Please check the link or try the process again later.", y && i.createElement(i.Fragment, null, i.createElement("br", null), null == y || null === (ee = y.data) || void 0 === ee || null === (ee = ee.error) || void 0 === ee ? void 0 : ee.message))), i.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-mt-5"
                }, i.createElement(u.rU, {
                    to: "/home/login",
                    className: "tw-text-link-highlight"
                }, "Back to login")))) : T ? i.createElement(f.Z, null, i.createElement(w.$4, null, "Upgrade Account"), i.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-py-9 tw-px-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, i.createElement("div", {
                    className: "tw-mb-5"
                }, i.createElement(w.$1, {
                    icon: s.FK,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Upgrade Account"), i.createElement("p", null, "Your VRChat account has been upgraded, and your upgrade benefits have been applied."), i.createElement("p", null, "You can now sign in on any platform with your email address, gain Trust Ranks, upload Avatars & Worlds, and more. Have fun!")), i.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-mt-5"
                }, i.createElement(h.Qj, {
                    to: "/home/login"
                }, "Login")))) : i.createElement(f.Z, null, i.createElement(w.$4, null, "Upgrade Account"), i.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-pt-9 tw-px-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, i.createElement("form", {
                    onSubmit: te
                }, i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, i.createElement("div", {
                    className: "tw-mb-5"
                }, i.createElement(w.$1, {
                    icon: s.FK,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Upgrade Account"), ne && i.createElement(w.qX, {
                    type: "error",
                    title: "Account upgrade error"
                }, ne), i.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, i.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Email"), i.createElement(w.II, {
                    type: "text",
                    className: "tw-w-full",
                    id: "email",
                    name: "email",
                    "aria-label": "Email",
                    value: U.value,
                    disabled: !0
                })), i.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, i.createElement("label", {
                    htmlFor: "displayName",
                    className: "tw-mb-2"
                }, "Display Name"), i.createElement(w.II, {
                    type: "text",
                    id: "displayName",
                    name: "displayName",
                    "aria-label": "Desired display name",
                    value: _.value,
                    onChange: ae,
                    disabled: re,
                    loading: _.checking,
                    success: !_.checking && _.ok,
                    className: "tw-mb-1",
                    isError: _.error
                }), !_.error && i.createElement("p", {
                    className: "tw-text-placeholder-text tw-text-xs tw-mb-0"
                }, "This is the name shown to other users in-app, you may only change your display name once per 90 days."), _.error && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Display name error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, _.error)), i.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, i.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Password"), i.createElement(w.II, {
                    type: "password",
                    name: "Password",
                    role: "textbox",
                    "aria-label": "Password",
                    disabled: re,
                    value: $.value,
                    onChange: function(e) {
                        var a = e.target.value,
                            t = void 0 === a ? "" : a;
                        if (G(A(A({}, $), {}, {
                                value: t,
                                ok: null,
                                error: !1
                            })), "" !== t) {
                            var r = "\n    We recommend using a password which is:\n      •   At least 8 characters long\n      •   Unique to this account and not in use anywhere else\n      •   Uses a combination of letters, numbers, and symbols\n      •   Stored in a Password Manager\n    ",
                                n = !1;
                            t.length < 8 ? n = "That password is too short \n ".concat(r) : (0, E.w)(t) && (n = "Please try a more secure password \n ".concat(r));
                            var l = !n;
                            G((function(e) {
                                return A(A({}, e), {}, {
                                    ok: l,
                                    error: n
                                })
                            }))
                        }
                    },
                    isError: $.error
                }), $.error && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1 tw-whitespace-pre-wrap"
                }, $.error), $.ok && i.createElement(w.II, {
                    type: "password",
                    className: "tw-w-full tw-mt-2",
                    id: "re-enter-password",
                    name: "Re-enter-password",
                    placeholder: "Re-enter password",
                    role: "textbox",
                    "aria-label": "Re-enter password",
                    disabled: re,
                    value: X.value,
                    onChange: function(e) {
                        Y(A(A({}, X), {}, {
                            value: e.target.value
                        }))
                    },
                    onBlur: function() {
                        return X.value !== $.value ? Y(A(A({}, X), {}, {
                            error: "Passwords do not match"
                        })) : Y(A(A({}, X), {}, {
                            error: null,
                            ok: !0
                        }))
                    },
                    isError: X.error
                }), $.ok && X.error && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Re-entered password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, X.error)), i.createElement("div", {
                    className: "tw-w-full tw-mb-6 tw-justify-center tw-flex"
                }, i.createElement(w.zx, {
                    containerStyles: {
                        width: "100%"
                    },
                    type: "submit",
                    id: "upgrade-form-submit",
                    name: "upgrade-form-submit",
                    loading: S,
                    disabled: re || !Q
                }, "Upgrade Account"))))))
            }
        },
        36678: (e, a, t) => {
            t.d(a, {
                Z: () => s
            });
            var r = t(54546),
                n = t(67294),
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
            const s = function(e) {
                var a = e.children,
                    t = e.showCredits,
                    s = (0, n.useState)(null),
                    o = (0, r.Z)(s, 2),
                    c = o[0],
                    i = o[1],
                    m = (0, n.useState)(null),
                    u = (0, r.Z)(m, 2),
                    w = u[0],
                    d = u[1];
                (0, n.useEffect)((function() {
                    if (null === c) i(l[0]);
                    else {
                        var e = p(c);
                        setTimeout((function() {
                            return i(e)
                        }), 1e4), d(e)
                    }
                }), [c]);
                var p = function(e) {
                    var a = l.findIndex((function(a) {
                        return a.imagePath === e.imagePath
                    }));
                    return a === l.length - 1 ? l[0] : l[a + 1]
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
                    src: null == w ? void 0 : w.imagePath,
                    alt: "VRChat"
                }))), n.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, a), (null == c ? void 0 : c.worldName) && t && n.createElement("div", {
                    className: " tw-relative tw-text-sm tw-w-full xl:tw-absolute xl:tw-top-16 xl:tw-right-0 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-3 xl:tw-rounded-s-lg"
                }, n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "World:"), " ", c.worldName), n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "Author:"), " ", c.authorName)))
            }
        },
        65847: (e, a, t) => {
            t.d(a, {
                Nw: () => E
            });
            var r = t(85564),
                n = t.n(r),
                l = (t(85067), t(58814), t(56125), t(32299));
            const s = JSON.parse('{"characterAllowList":[{"name":"Basic Latin","ranges":["000A","000D","0020-007E"]},{"name":"Latin-1 Supplement","ranges":["00A1-00FF"]},{"name":"Latin Extended-A","ranges":["0100-017F"]},{"name":"Latin Extended-B","ranges":["0180-024F"]},{"name":"IPA Extensions","ranges":["0250-02AF"]},{"name":"Spacing Modifier Letters","ranges":["02B0-02FF"]},{"name":"Combining Diacritical Marks","ranges":["0300-036F"]},{"name":"Greek and Coptic","ranges":["0370-0377","037A-037F","0384-038A","038C","028E-03A1","03A3-03FF"]},{"name":"Cyrillic","ranges":["0400-04FF"]},{"name":"Cyrillic Supplementary","ranges":["0500-052F"]},{"name":"Armenian","ranges":["0531-0556","0559-055F","0561-0587","0589-058A","058D-058F"]},{"name":"Hebrew","ranges":["0591-05C7","05D0-05EA","05EF-05F4"]},{"name":"Arabic","ranges":["0600-061B","061E-06FF"]},{"name":"Devanagari","ranges":["0900-097F"]},{"name":"Bengali","ranges":["0980-0983","0985-098C","098F-0990","0993-09A8","09AA-09B0","09B2","09B6-09B9","09BC-09C4","09C7-09C8","09CB-09CE","09D7","09DC-09DD","09DF-09E3","09E6-09FB"]},{"name":"Gurmukhi","ranges":["0A01-0A03","0A05-0A0A","0A0F-0A10","0A13-0A28","0A2A-0A30","0A32-0A33","0A35-0A36","0A38-0A39","0A3C","0A3E-0A42","0A47-0A48","0A4B-0A4D","0A51","0A59-0A5C","0A5E","0A66-0A75"]},{"name":"Gujarati","ranges":["0A81-0A83","0A85-0A8D","0A8F-0A91","0A93-0AA8","0AAA-0AB0","0AB2-0AB3","0AB5-0AB9","0ABC-0AC5","0AC7-0AC9","0ACB-0ACD","0AD0","0AE0-0AE3","0AE6-0AF1"]},{"name":"Oriya","ranges":["0B01-0B03","0B05-0B0C","0B0F-0B10","0B13-0B28","0B2A-0B30","0B32-0B33","0B35-0B39","0B3C-0B44","0B47-0B48","0B4B-0B4D","0B56-0B57","0B5C-0B5D","0B5F-0B63","0B66-0B77"]},{"name":"Tamil","ranges":["0B82-0B83","0B85-0B8A","0B8E-0B90","0B92-0B95","0B99-0B9A","0B9C","0B9E-0B9F","0BA3-0BA4","0BA8-0BAA","0BAE-0BB9","0BBE-0BC2","0BC6-0BC8","0BCA-0BCD","0BD0","0BD7","0BE6-0BFA"]},{"name":"Telugu","ranges":["0C00-0C03","0C05-0C0C","0C0E-0C10","0C12-0C28","0C2A-0C39","0C3D-0C44","0C46-0C48","0C4A-0C4D","0C55-0C56","0C58-0C59","0C60-0C63","0C66-0C6F","0C78-0C7F"]},{"name":"Kannada","ranges":["0C81-0C83","0C85-0C8C","0C8E-0C90","0C92-0CA8","0CAA-0CB3","0CB5-0CB9","0CBC-0CC4","0CC6-0CC8","0CCA-0CCD","0CD5-0CD6","0CDE","0CE0-0CE3","0CE6-0CEF","0CF1-0CF2"]},{"name":"Malayalam","ranges":["0D01-0D03","0D05-0D0C","0D0E-0D10","0D12-0D3A","0D3D-0D44","0D46-0D48","0D4A-0D4E","0D57","0D60-0D63","0D66-0D75","0D79-0D7F"]},{"name":"Sinhala","ranges":["0D82-0D83","0D85-0D96","0D9A-0DB1","0DB3-0DBB","0DBD","0DC0-0DC6","0DCA","0DCF-0DD4","0DD6","0DD8-0DDF","0DE6-0DEF","0DF2-0DF4"]},{"name":"Thai","ranges":["0E01-0E3A","0E3F-0E5B"]},{"name":"Lao","ranges":["0E81-0E82","0E84","0E87-0E88","0E8A","0E8D","0E94-0E97","0E99-0E9F","0EA1-0EA3","0EA5","0EA7","0EAA-0EAB","0EAD-0EB9","0EBB-0EBD","0EC0-0EC4","0EC6","0EC8-0ECD","0ED0-0ED9","0EDC-0EDF"]},{"name":"Tibetan","ranges":["0F00-0F47","0F49-0F6C","0F71-0F97","0F99-0FBC","0FBE-0FCC","0FCE-0FD4","0FD9-0FDA"]},{"name":"Georgian","ranges":["10A0-10C5","10C7","10CD","10D0-10FF"]},{"name":"Hangul Jamo","ranges":["1100-115E","1161-11FF"]},{"name":"Phonetic Extensions","ranges":["1D00-1D7F"]},{"name":"Latin Extended Additional","ranges":["1E00-1EFF"]},{"name":"Greek Extended","ranges":["1F00-1F15","1F18-1F1D","1F20-1F45","1F48-1F4D","1F50-1F57","1F59","1F5B","1F5D","1F5F-1F7D","1F80-1FB4","1FB6-1FC4","1FC6-1FD3","1FD6-1FDB","1FDD-1FEF","1FF2-1FF4","1FF6-1FFE"]},{"name":"General Punctuation","ranges":["201A","2024","201A","2044"]},{"name":"Currency Symbols","ranges":["20A0-20BF"]},{"name":"Mathematical Operators","ranges":["2217","227A","227B"]},{"name":"CJK Radicals Supplement","ranges":["2E80-2E99","2E9B-2EF3"]},{"name":"Kangxi Radicals","ranges":["2F00-2FD5"]},{"name":"CJK Symbols and Punctuation","ranges":["3001-303D"]},{"name":"Hiragana","ranges":["3041-3096","3099-309F"]},{"name":"Katakana","ranges":["30A0-30FF"]},{"name":"Bopomofo","ranges":["3105-312D"]},{"name":"Hangul Compatibility Jamo","ranges":["3131-3163","3165-318E"]},{"name":"Kanbun","ranges":["3190-319F"]},{"name":"Bopomofo Extended","ranges":["31A0-31B7"]},{"name":"Katakana Phonetic Extensions","ranges":["31F0-31FF"]},{"name":"CJK Compatibility","ranges":["3300-3376","337B-33FE"]},{"name":"CJK Unified Ideographs Extension A","ranges":["3400-4DB5"]},{"name":"CJK Unified Ideographs","ranges":["4E00-534C","534E-534F","5351-9FD5"]},{"name":"Hangul Syllables","ranges":["AC00-D7A3"]},{"name":"CJK Compatibility Ideographs","ranges":["F900-FA6D"]},{"name":"Alphabetic Presentation Forms","ranges":["FB00-FB06","FB13-FB17","FB1D-FB36","FB38-FB3C","FB3E","FB40-FB41","FB43-FB44","FB46-FB4F"]},{"name":"Arabic Presentation Forms-A","ranges":["FB50-FBC1","FBD3-FD3F","FD50-FD8F","FD92-FDC7","FDF0-FDFC"]},{"name":"Combining Half Marks","ranges":["FE20-FE23"]},{"name":"CJK Compatibility Forms","ranges":["FE30-FE4F"]},{"name":"Arabic Presentation Forms-B","ranges":["FE70-FE74","FE76-FEFC"]},{"name":"Arabic Presentation Forms-B","ranges":["FE70-FE74","FE76-FEFC"]},{"name":"Halfwidth and Fullwidth Forms","ranges":["FF01-FF9F","FFA1-FFBE","FFC2-FFC7","FFCA-FFCF","FFD2-FFD7","FFDA-FFDC","FFE0-FFE6","FFE8"]}]}');
            var o, c, i = {
                    "@": "＠",
                    "#": "＃",
                    $: "＄",
                    "%": "％",
                    "&": "＆",
                    "=": "＝",
                    "+": "＋",
                    "/": "⁄",
                    "\\": "＼",
                    ";": ";",
                    ":": "˸",
                    ",": "‚",
                    "?": "?",
                    "!": "ǃ",
                    '"': "＂",
                    "<": "≺",
                    ">": "≻",
                    ".": "․",
                    "^": "＾",
                    "{": "｛",
                    "}": "｝",
                    "[": "［",
                    "]": "］",
                    "(": "（",
                    ")": "）",
                    "|": "｜",
                    "*": "∗"
                },
                m = Object.keys(i).map((function(e) {
                    return "\\u".concat(e.charCodeAt(0).toString(16).padStart(4, "0"))
                })).join(""),
                u = new RegExp("[".concat(m, "]"), "g"),
                w = (new RegExp("[^".concat(m, "]"), "g"), Object.keys(i).map((function(e) {
                    return "\\u".concat(i[e].charCodeAt(0).toString(16).padStart(4, "0"))
                })).join("")),
                d = (new RegExp("[".concat(w, "]"), "g"), new RegExp("[^".concat(w, "]"), "g"), o = s, c = n()(o.characterAllowList.map((function(e) {
                    return e.ranges
                }))).map((function(e) {
                    return e.split("-").map((function(e) {
                        return "\\u".concat(e)
                    })).join("-")
                })), new RegExp("[^".concat(w).concat(c.join(""), "]"), "g")),
                p = function(e) {
                    var a = e;
                    return a = (a = (a = (a = (a = (a = a.replace(/[\u00A0\u1680\u180e\u2000-\u2009\u200a\u200b\u202f\u205f\u3000\u3164\n\t\b]/g, " ")).replace(l.ansiEscapeCodes, "")).replace(l.zeroWidthCharacters, "")).replace(/ +/g, " ")).replace(/^(\s)*/g, "")).replace(/(\s)*$/g, "")
                },
                g = function(e) {
                    var a = e;
                    return a = (a = (a = (a = (a = a.replace(/[\u1680\u180e\u2000-\u2009\u200a\u200b\u202f\u205f\u3000\u3164\t\b]/g, " ")).replace(/\n{3,}/g, "\n\n")).replace(/ +/g, " ")).replace(/^(\s)*/g, "")).replace(/(\s)*$/g, "")
                },
                F = function(e, a) {
                    var t = null != a && !0 === a.allowNewlines ? g : p,
                        r = t(function(e) {
                            return e.replace(u, (function(e) {
                                return i.hasOwnProperty(e) ? i[e] : ""
                            }))
                        }(function(e) {
                            return e.replace(d, "")
                        }(t(e))));
                    if ((r.match(/fuck/gi) || []).length > 0) {
                        var n = (new Error).stack;
                        console.warn('Profanity somehow slipped through in sanitize.js! [original: "'.concat(e, '", sanitized: "').concat(r, '", options: "').concat(JSON.stringify(a), '"] ').concat(n))
                    }
                    return r
                },
                E = function(e, a) {
                    return Array.isArray(e) ? e.map((function(e) {
                        return F(e, a)
                    })) : F(e, a)
                }
        },
        82470: (e, a, t) => {
            t.d(a, {
                w: () => n
            });
            var r = new Set(["password", "password1", "passw0rd", "69696969", "11111111", "111111111", "aaaaaaaa", "aaaaaaaaa", "fuckfuck", "pooppoop", "football", "welcome", "starwars", "trustno1", "jordan23", "iloveyou", "whatever", "princess", "sunshine", "adobe123", "photoshop", "baseball", "superman", "12345678", "123456789", "1234567890", "87654321", "987654321", "0987654321", "zaq1zaq1", "1qaz2wsx", "qwertyuiop", "18atcskd2w", "1q2w3e4r", "asdfjkl;", "asdfghjk", "asdfghjkl", ";lkjfdsa", ";lkjasdf", "zxcvbnm,", "zxcvbnm,.", "zxcvbnm,./", "/.,mvcxz", "poiurewq", "poiuqwer", "qweruiop", "uiopuiop", "qwerqwer", "jkl;jkl;", "asdfasdf", "zxcfzxcv", "zxcvm,./", "m,./zxcv"]),
                n = function(e) {
                    return r.has(e.toLowerCase())
                }
        }
    }
]);
//# sourceMappingURL=dc14c8ace95b6f8b63f11bbc99f22f65c054b043856b513cf4cbf5d13009d094.js.map