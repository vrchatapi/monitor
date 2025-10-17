"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8116], {
        37949: (e, t) => {
            var r = "envelope-open-text",
                n = [],
                a = "f658",
                o = "M215.4 96L144 96l-36.2 0L96 96l0 8.8L96 144l0 40.4 0 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3 48 96c0-26.5 21.5-48 48-48l76.6 0 49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48 416 48c26.5 0 48 21.5 48 48l0 44.3 22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4l0-89 0-40.4 0-39.2 0-8.8-11.8 0L368 96l-71.4 0-81.3 0zM0 448L0 242.1 217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1 512 448s0 0 0 0c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0zM176 160l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [512, 512, n, a, o]
            }, t.mS = t.DF
        },
        78989: (e, t, r) => {
            r.d(t, {
                Z: () => p
            });
            var n = r(87462),
                a = r(4965),
                o = r(67294),
                l = r(45697),
                c = r.n(l),
                u = r(96985);
            var i = {
                    name: "11rq2x7",
                    styles: "border-color:#a8342e"
                },
                s = (0, o.forwardRef)((function(e, t) {
                    var r = e.isError,
                        a = void 0 !== r && r,
                        l = i;
                    return o.createElement(m, (0, n.Z)({
                        ref: t
                    }, e, {
                        inputStyle: a ? l : ""
                    }))
                }));
            s.propTypes = {
                isError: c().bool
            };
            var m = (0, a.Z)(u.II, {
                target: "e1v6asn80"
            })({
                name: "1bob962",
                styles: "overflow:inherit;input{text-align:center;font-size:1.5rem;@media (min-width: 576px){font-size:2rem;}}"
            });
            const p = s
        },
        68116: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => y
            });
            var n = r(15861),
                a = r(54546),
                o = r(36856),
                l = r(37949),
                c = r(64687),
                u = r.n(c),
                i = r(60006),
                s = r(45697),
                m = r.n(s),
                p = r(67294),
                f = r(89250),
                d = r(79655),
                w = r(22202),
                v = r(96985),
                h = r(78989),
                x = r(41400),
                g = r(13887),
                E = r(98538),
                b = function(e) {
                    var t = e.isEmailOTP,
                        r = void 0 !== t && t,
                        c = e.isStepUpVerification,
                        s = void 0 !== c && c,
                        m = (0, f.s0)(),
                        b = (0, f.TH)().state,
                        y = (0, w.Sq)(),
                        N = (0, a.Z)(y, 2),
                        T = N[0],
                        k = N[1],
                        L = k.isLoading,
                        R = k.isError,
                        C = k.error,
                        Z = (0, w.cr)(),
                        F = (0, a.Z)(Z, 2),
                        S = F[0],
                        M = F[1],
                        D = M.isLoading,
                        z = M.isError,
                        A = M.error,
                        K = (0, p.useState)(!1),
                        O = (0, a.Z)(K, 2),
                        U = O[0],
                        j = O[1],
                        q = (0, p.useState)(!0),
                        H = (0, a.Z)(q, 2),
                        P = H[0],
                        _ = H[1],
                        I = (0, p.useRef)(null),
                        V = (0, p.useRef)(null),
                        W = (0, p.useRef)(null),
                        $ = (0, p.useRef)(null),
                        B = (0, p.useRef)(null),
                        Q = (0, p.useRef)(null);
                    (0, p.useEffect)((function() {
                        var e;
                        !s || null != b && b.scope ? null === (e = I.current) || void 0 === e || e.focus() : m("/home/login", {
                            replace: !0
                        })
                    }), []);
                    var X = function() {
                            var e = (0, n.Z)(u().mark((function e(t) {
                                var n, a;
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), U) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return Q.current.blur(), e.prev = 4, n = s ? S : T, e.next = 8, n({
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
                                            e.prev = 20, e.t0 = e.catch(4), console.error(e.t0), _(!1), setTimeout((function() {
                                                _(!0)
                                            }), 4e3);
                                        case 25:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [4, 20]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Y = U && !L && P && !D,
                        G = C || A,
                        J = R || z,
                        ee = function() {
                            return [I.current.value, V.current.value, W.current.value, $.current.value, B.current.value, Q.current.value].join("")
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
                                    for (var t, r = e.target.value.replace(/\s+/g, ""), n = [I, V, W, $, B, Q], a = 0; a < r.length && a < n.length; a++) n[a].current.value = r[a];
                                    var o, l = Math.min(r.length, n.length);
                                    l < n.length ? null === (o = n[l]) || void 0 === o || null === (o = o.current) || void 0 === o || o.focus() : null === (t = I.current) || void 0 === t || t.blur()
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
                    return p.createElement(g.Z, null, p.createElement(v.$4, null, r ? "Email One-Time Code" : "Two-Factor Authentication"), p.createElement("div", {
                        className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                    }, p.createElement(x.l0, {
                        onSubmit: X
                    }, p.createElement("div", {
                        className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                    }, p.createElement("div", {
                        className: "tw-mb-5"
                    }, p.createElement(v.$1, {
                        icon: r ? l.mS : o.faShieldHalved,
                        className: "tw-w-[72px] tw-h-[72px]"
                    })), p.createElement("h4", {
                        className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                    }, r ? "Email One-Time Code" : "Two-Factor Authentication"), p.createElement("p", {
                        className: "tw-text-center"
                    }, r ? p.createElement(p.Fragment, null, "Enter the numeric code we sent to your email.") : p.createElement(p.Fragment, null, "Enter a numeric code from your authenticator app.", " ", p.createElement("a", {
                        href: E.S1,
                        "aria-label": "Two Factor Auth Help",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "tw-text-link-highlight"
                    }, "Learn More"), ".")), p.createElement("div", {
                        className: "tw-flex tw-justify-center tw-flex-col"
                    }, p.createElement("div", {
                        className: "tw-flex tw-items-center"
                    }, p.createElement(h.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return te({
                                event: e,
                                nextRef: V
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: J,
                        inputMode: "numeric",
                        autocomplete: "off",
                        ref: I
                    }), p.createElement(h.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return te({
                                event: e,
                                nextRef: W
                            })
                        },
                        onKeyDown: function(e) {
                            return re({
                                event: e,
                                previousRef: I
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: J,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: V
                    }), p.createElement(h.Z, {
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
                        onKeyDown: function(e) {
                            return re({
                                event: e,
                                previousRef: V
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: J,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: W
                    }), p.createElement(h.Z, {
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
                                previousRef: W
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: J,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: $
                    }), p.createElement(h.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return te({
                                event: e,
                                nextRef: Q
                            })
                        },
                        onKeyDown: function(e) {
                            return re({
                                event: e,
                                previousRef: $
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: J,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: B
                    }), p.createElement(h.Z, {
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
                                previousRef: B
                            })
                        },
                        className: "tw-w-12 tw-h-[60px]",
                        isError: J,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: Q
                    })), J && p.createElement("p", {
                        role: "alert",
                        className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre"
                    }, 429 === (null == G ? void 0 : G.status) ? "Login unavailable due to too many failed attempts. Please try again later." : "Oops, that code didn't work.")), p.createElement(v.zx, {
                        className: "tw-w-60 tw-mt-6 tw-mb-4",
                        disabled: !Y,
                        loading: L || D || !P,
                        type: "submit"
                    }, "Next"), r ? p.createElement(v.qX, {
                        type: "info",
                        title: "What's this?",
                        className: "tw--mb-4",
                        style: {
                            maxWidth: 480
                        }
                    }, "To help keep your account secure we've sent a code to your registered email address. You'll need to enter it above to access VRChat.") : p.createElement(d.rU, {
                        to: s ? "/home/stepupauthrecovery" : "/home/twofactorauthrecovery",
                        state: {
                            scope: null == b ? void 0 : b.scope,
                            discordAccessToken: null == b ? void 0 : b.discordAccessToken
                        },
                        className: "nav-link tw-text-link-highlight"
                    }, "Use a recovery code instead"), p.createElement(i.Qj, {
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
//# sourceMappingURL=320f5d928ab4a26d158f5f1a3208fb3084d9ad413eb06d58c313227d5d777708.js.map