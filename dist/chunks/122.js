"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [122], {
        2214(e, t) {
            var r = "envelope-open-text",
                n = [],
                a = "f658",
                o = "M215.4 96L144 96l-36.2 0L96 96l0 8.8L96 144l0 40.4 0 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3 48 96c0-26.5 21.5-48 48-48l76.6 0 49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48 416 48c26.5 0 48 21.5 48 48l0 44.3 22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4l0-89 0-40.4 0-39.2 0-8.8-11.8 0L368 96l-71.4 0-81.3 0zM0 448L0 242.1 217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1 512 448s0 0 0 0c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0zM176 160l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z";
            t.mw = {
                prefix: "fas",
                iconName: r,
                icon: [512, 512, n, a, o]
            }, t.v_ = t.mw
        },
        36124(e, t, r) {
            r.d(t, {
                A: () => p
            });
            var n = r(58168),
                a = r(70129),
                o = r(96540),
                l = r(5556),
                c = r.n(l),
                u = r(15033);
            var i = {
                    name: "11rq2x7",
                    styles: "border-color:#a8342e"
                },
                s = (0, o.forwardRef)(function(e, t) {
                    var r = e.isError,
                        a = void 0 !== r && r,
                        l = i;
                    return o.createElement(m, (0, n.A)({
                        ref: t
                    }, e, {
                        inputStyle: a ? l : ""
                    }))
                });
            s.propTypes = {
                isError: c().bool
            };
            var m = (0, a.A)(u.pd, {
                target: "e1v6asn80"
            })({
                name: "1bob962",
                styles: "overflow:inherit;input{text-align:center;font-size:1.5rem;@media (min-width: 576px){font-size:2rem;}}"
            });
            const p = s
        },
        122(e, t, r) {
            r.r(t), r.d(t, {
                default: () => y
            });
            var n = r(10467),
                a = r(82544),
                o = r(7876),
                l = r(2214),
                c = r(54756),
                u = r.n(c),
                i = r(24751),
                s = r(5556),
                m = r.n(s),
                p = r(96540),
                f = r(84976),
                d = r(47767),
                w = r(13951),
                v = r(15033),
                h = r(36124),
                x = r(82030),
                g = r(84212),
                E = r(97890),
                b = function(e) {
                    var t = e.isEmailOTP,
                        r = void 0 !== t && t,
                        c = e.isStepUpVerification,
                        s = void 0 !== c && c,
                        m = (0, d.Zp)(),
                        b = (0, d.zy)().state,
                        y = (0, w.Jz)(),
                        N = (0, a.A)(y, 2),
                        T = N[0],
                        k = N[1],
                        L = k.isLoading,
                        A = k.isError,
                        R = k.error,
                        C = (0, w.QE)(),
                        F = (0, a.A)(C, 2),
                        M = F[0],
                        z = F[1],
                        S = z.isLoading,
                        D = z.isError,
                        _ = z.error,
                        K = (0, p.useState)(!1),
                        O = (0, a.A)(K, 2),
                        U = O[0],
                        j = O[1],
                        P = (0, p.useState)(!0),
                        V = (0, a.A)(P, 2),
                        H = V[0],
                        Q = V[1],
                        W = (0, p.useRef)(null),
                        $ = (0, p.useRef)(null),
                        q = (0, p.useRef)(null),
                        B = (0, p.useRef)(null),
                        J = (0, p.useRef)(null),
                        Y = (0, p.useRef)(null);
                    (0, p.useEffect)(function() {
                        var e;
                        !s || null != b && b.scope ? null === (e = W.current) || void 0 === e || e.focus() : m("/home/login", {
                            replace: !0
                        })
                    }, []);
                    var Z = function() {
                            var e = (0, n.A)(u().mark(function e(t) {
                                var n, a;
                                return u().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), U) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return Y.current.blur(), e.prev = 4, n = s ? M : T, e.next = 8, n({
                                                code: ee(),
                                                twoFactorType: r ? "emailotp" : "totp",
                                                scope: null == b ? void 0 : b.scope,
                                                stepUpToken: null == b ? void 0 : b.stepUpToken
                                            }).unwrap();
                                        case 8:
                                            if ((a = e.sent).verified) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 11:
                                            if (!s) {
                                                e.next = 14;
                                                break
                                            }
                                            return m("/home/verify-password", {
                                                state: {
                                                    ticket: a.ticket,
                                                    redirectTo: null == b ? void 0 : b.redirectTo,
                                                    redirectState: null == b ? void 0 : b.redirectState
                                                }
                                            }), e.abrupt("return");
                                        case 14:
                                            if (null == b || !b.redirectTo) {
                                                e.next = 17;
                                                break
                                            }
                                            return m(b.redirectTo), e.abrupt("return");
                                        case 17:
                                            m("/home"), e.next = 25;
                                            break;
                                        case 20:
                                            e.prev = 20, e.t0 = e.catch(4), console.error(e.t0), Q(!1), setTimeout(function() {
                                                Q(!0)
                                            }, 4e3);
                                        case 25:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [4, 20]
                                ])
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        G = U && !L && H && !S,
                        I = R || _,
                        X = A || D,
                        ee = function() {
                            return [W.current.value, $.current.value, q.current.value, B.current.value, J.current.value, Y.current.value].join("")
                        },
                        te = function(e) {
                            var t = e.event,
                                r = e.nextRef,
                                n = void 0 === r ? null : r;
                            if (Number.isNaN(t.target.value)) t.target.value = "";
                            else {
                                var a;
                                if (1 === t.target.value.length && null !== n) null === (a = n.current) || void 0 === a || a.focus();
                                t.target.value.length > 1 && function(e) {
                                    for (var t, r = e.target.value.replace(/\s+/g, ""), n = [W, $, q, B, J, Y], a = 0; a < r.length && a < n.length; a++) n[a].current.value = r[a];
                                    var o, l = Math.min(r.length, n.length);
                                    l < n.length ? null === (o = n[l]) || void 0 === o || null === (o = o.current) || void 0 === o || o.focus() : null === (t = W.current) || void 0 === t || t.blur()
                                }(t);
                                var o = ee(),
                                    l = 6 === o.length && !Number.isNaN(o);
                                j(l)
                            }
                        },
                        re = function(e) {
                            var t = e.event,
                                r = e.previousRef,
                                n = void 0 === r ? null : r;
                            null !== n && "Backspace" === t.key && 0 === t.target.value.length && (n.current.value = "", n.current.focus())
                        };
                    return p.createElement(g.A, null, p.createElement(v.Qc, null, r ? "Email One-Time Code" : "Two-Factor Authentication"), p.createElement("div", {
                        className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                    }, p.createElement(x.lV, {
                        onSubmit: Z
                    }, p.createElement("div", {
                        className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                    }, p.createElement("div", {
                        className: "tw-mb-5"
                    }, p.createElement(v.M2, {
                        icon: r ? l.v_ : o.faShieldHalved,
                        className: "tw-w-[72px] tw-h-[72px]"
                    })), p.createElement("h4", {
                        className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                    }, r ? "Email One-Time Code" : "Two-Factor Authentication"), p.createElement("p", {
                        className: "tw-text-center"
                    }, r ? p.createElement(p.Fragment, null, "Enter the numeric code we sent to your email.") : p.createElement(p.Fragment, null, "Enter a numeric code from your authenticator app.", " ", p.createElement("a", {
                        href: E.lx,
                        "aria-label": "Two Factor Auth Help",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "tw-text-link-highlight"
                    }, "Learn More"), ".")), p.createElement("div", {
                        className: "tw-flex tw-justify-center tw-flex-col"
                    }, p.createElement("div", {
                        className: "tw-flex tw-items-center"
                    }, p.createElement(h.A, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return te({
                                event: e,
                                nextRef: $
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: X,
                        inputMode: "numeric",
                        autocomplete: "off",
                        ref: W
                    }), p.createElement(h.A, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return te({
                                event: e,
                                nextRef: q
                            })
                        },
                        onKeyDown: function(e) {
                            return re({
                                event: e,
                                previousRef: W
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: X,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: $
                    }), p.createElement(h.A, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return te({
                                event: e,
                                nextRef: B
                            })
                        },
                        onKeyDown: function(e) {
                            return re({
                                event: e,
                                previousRef: $
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: X,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: q
                    }), p.createElement(h.A, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return te({
                                event: e,
                                nextRef: J
                            })
                        },
                        onKeyDown: function(e) {
                            return re({
                                event: e,
                                previousRef: q
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: X,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: B
                    }), p.createElement(h.A, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return te({
                                event: e,
                                nextRef: Y
                            })
                        },
                        onKeyDown: function(e) {
                            return re({
                                event: e,
                                previousRef: B
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: X,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: J
                    }), p.createElement(h.A, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return te({
                                event: e
                            })
                        },
                        onKeyDown: function(e) {
                            return re({
                                event: e,
                                previousRef: J
                            })
                        },
                        className: "tw-w-12 tw-h-[60px]",
                        isError: X,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: Y
                    })), X && p.createElement("p", {
                        role: "alert",
                        className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre"
                    }, 429 === (null == I ? void 0 : I.status) ? "Login unavailable due to too many failed attempts. Please try again later." : "Oops, that code didn't work.")), p.createElement(v.$n, {
                        className: "tw-w-60 tw-mt-6 tw-mb-4",
                        disabled: !G,
                        loading: L || S || !H,
                        type: "submit"
                    }, "Next"), r ? p.createElement(v.$T, {
                        type: "info",
                        title: "What's this?",
                        className: "tw--mb-4",
                        style: {
                            maxWidth: 480
                        }
                    }, "To help keep your account secure we've sent a code to your registered email address. You'll need to enter it above to access VRChat.") : p.createElement(f.N_, {
                        to: s ? "/home/stepupauthrecovery" : "/home/twofactorauthrecovery",
                        state: {
                            scope: null == b ? void 0 : b.scope,
                            discordAccessToken: null == b ? void 0 : b.discordAccessToken
                        },
                        className: "nav-link tw-text-link-highlight"
                    }, "Use a recovery code instead"), p.createElement(i.z9, {
                        to: "/home/login",
                        state: {
                            logout: !0
                        },
                        className: "tw-mt-12"
                    }, "Log out")))))
                };
            const y = b;
            b.propTypes = {
                isEmailOTP: m().bool
            }
        }
    }
]);
//# sourceMappingURL=fef73ef06e9446871eb9cc591405da8832109c27bc58be70ae8e91eaa24558bf.js.map