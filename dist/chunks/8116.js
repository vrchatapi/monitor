"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8116], {
        37949: (e, t) => {
            var r = "envelope-open-text",
                n = [],
                a = "f658",
                o = "M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [512, 512, n, a, o]
            }, t.mS = t.DF
        },
        36856: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = "shield-halved",
                n = ["shield-alt"],
                a = "f3ed",
                o = "M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z";
            t.definition = {
                prefix: "fas",
                iconName: r,
                icon: [512, 512, n, a, o]
            }, t.faShieldHalved = t.definition, t.prefix = "fas", t.iconName = r, t.width = 512, t.height = 512, t.ligatures = n, t.unicode = a, t.svgPathData = o, t.aliases = n
        },
        68116: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => N
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
                f = r(67294),
                w = r(89250),
                p = r(79655),
                d = r(22202),
                v = r(34226),
                h = r(78989),
                x = r(41400),
                g = r(36678),
                E = r(98538),
                b = function(e) {
                    var t = e.isEmailOTP,
                        r = void 0 !== t && t,
                        c = (0, w.s0)(),
                        s = (0, w.TH)().state,
                        m = (0, d.Sq)(),
                        b = (0, a.Z)(m, 2),
                        N = b[0],
                        y = b[1],
                        C = y.isLoading,
                        T = y.isError,
                        L = y.error,
                        R = (0, f.useState)(!1),
                        k = (0, a.Z)(R, 2),
                        F = k[0],
                        H = k[1],
                        M = (0, f.useState)(!0),
                        D = (0, a.Z)(M, 2),
                        Z = D[0],
                        S = D[1],
                        z = (0, f.useRef)(null),
                        V = (0, f.useRef)(null),
                        O = (0, f.useRef)(null),
                        P = (0, f.useRef)(null),
                        j = (0, f.useRef)(null),
                        K = (0, f.useRef)(null);
                    (0, f.useEffect)((function() {
                        var e;
                        null === (e = z.current) || void 0 === e || e.focus()
                    }), []);
                    var _ = function() {
                            var e = (0, n.Z)(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), F) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return K.current.blur(), e.prev = 4, e.next = 7, N({
                                                code: q(),
                                                twoFactorType: r ? "emailotp" : "totp"
                                            }).unwrap();
                                        case 7:
                                            if (e.sent.verified) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 10:
                                            if (null == s || !s.redirectTo) {
                                                e.next = 13;
                                                break
                                            }
                                            return c(s.redirectTo), e.abrupt("return");
                                        case 13:
                                            c("/home"), e.next = 21;
                                            break;
                                        case 16:
                                            e.prev = 16, e.t0 = e.catch(4), console.error(e.t0), S(!1), setTimeout((function() {
                                                S(!0)
                                            }), 4e3);
                                        case 21:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [4, 16]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        A = F && !C && Z,
                        q = function() {
                            return [z.current.value, V.current.value, O.current.value, P.current.value, j.current.value, K.current.value].join("")
                        },
                        U = function(e) {
                            var t, r = e.event,
                                n = e.nextRef,
                                a = void 0 === n ? null : n;
                            if (Number.isNaN(r.target.value)) r.target.value = "";
                            else {
                                var o = q(),
                                    l = 6 === o.length && !Number.isNaN(o);
                                H(l), null !== a && (null === (t = a.current) || void 0 === t || t.focus())
                            }
                        },
                        W = function(e) {
                            var t = e.event,
                                r = e.previousRef,
                                n = void 0 === r ? null : r;
                            null !== n && "Backspace" === t.key && 0 === t.target.value.length && (n.current.value = "", n.current.focus())
                        };
                    return f.createElement(g.Z, null, f.createElement(v.$4, null, r ? "Email One-Time Code" : "Two-Factor Authentication"), f.createElement("div", {
                        className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                    }, f.createElement(x.l0, {
                        onSubmit: _
                    }, f.createElement("div", {
                        className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                    }, f.createElement("div", {
                        className: "tw-mb-5"
                    }, f.createElement(v.$1, {
                        icon: r ? l.mS : o.faShieldHalved,
                        className: "tw-w-[72px] tw-h-[72px]"
                    })), f.createElement("h4", {
                        className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                    }, r ? "Email One-Time Code" : "Two-Factor Authentication"), f.createElement("p", {
                        className: "tw-text-center"
                    }, r ? f.createElement(f.Fragment, null, "Enter the numeric code we sent to your email.") : f.createElement(f.Fragment, null, "Enter a numeric code from your authenticator app.", " ", f.createElement("a", {
                        href: E.S1,
                        "aria-label": "Two Factor Auth Help",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "tw-text-link-highlight"
                    }, "Learn More"), ".")), f.createElement("div", {
                        className: "tw-flex tw-justify-center tw-flex-col"
                    }, f.createElement("div", {
                        className: "tw-flex tw-items-center"
                    }, f.createElement(h.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return U({
                                event: e,
                                nextRef: V
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: T,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: z,
                        onPaste: function(e) {
                            var t = e.clipboardData.getData("text/plain");
                            t.length < 6 || Number.isNaN(t) || (z.current.value = t[0], V.current.value = t[1], O.current.value = t[2], P.current.value = t[3], j.current.value = t[4], K.current.value = t[5], H(!0), K.current.focus())
                        }
                    }), f.createElement(h.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return U({
                                event: e,
                                nextRef: O
                            })
                        },
                        onKeyDown: function(e) {
                            return W({
                                event: e,
                                previousRef: z
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: T,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: V
                    }), f.createElement(h.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return U({
                                event: e,
                                nextRef: P
                            })
                        },
                        onKeyDown: function(e) {
                            return W({
                                event: e,
                                previousRef: V
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: T,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: O
                    }), f.createElement(h.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return U({
                                event: e,
                                nextRef: j
                            })
                        },
                        onKeyDown: function(e) {
                            return W({
                                event: e,
                                previousRef: O
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: T,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: P
                    }), f.createElement(h.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return U({
                                event: e,
                                nextRef: K
                            })
                        },
                        onKeyDown: function(e) {
                            return W({
                                event: e,
                                previousRef: P
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: T,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: j
                    }), f.createElement(h.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return U({
                                event: e
                            })
                        },
                        onKeyDown: function(e) {
                            return W({
                                event: e,
                                previousRef: j
                            })
                        },
                        className: "tw-w-12 tw-h-[60px]",
                        isError: T,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: K
                    })), T && f.createElement("p", {
                        role: "alert",
                        className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre"
                    }, 429 === (null == L ? void 0 : L.status) ? "Login unavailable due to too many failed attempts. Please try again later." : "Oops, that code didn't work.")), f.createElement(v.zx, {
                        className: "tw-w-60 tw-mt-6 tw-mb-4",
                        disabled: !A,
                        loading: C || !Z,
                        type: "submit"
                    }, "Next"), r ? f.createElement(v.qX, {
                        type: "info",
                        title: "What's this?",
                        className: "tw--mb-4",
                        style: {
                            maxWidth: 480
                        }
                    }, "To help keep your account secure we've sent a code to your registered email address. You'll need to enter it above to access VRChat.") : f.createElement(p.rU, {
                        to: "/home/twofactorauthrecovery",
                        className: "nav-link tw-text-link-highlight"
                    }, "Use a recovery code instead"), f.createElement(i.Qj, {
                        to: "/home/login",
                        state: {
                            logout: !0
                        },
                        className: "tw-mt-12"
                    }, "Log out")))))
                };
            const N = b;
            b.propTypes = {
                isEmailOTP: m().bool
            }
        }
    }
]);
//# sourceMappingURL=76cb7c4a2d6809e9ca5b5cb65be8e5b41f030f3a9eb821d24cfc5ef3070d4618.js.map