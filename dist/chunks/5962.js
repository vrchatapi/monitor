(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [5962], {
        37949: (e, t) => {
            "use strict";
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
            "use strict";
            r.d(t, {
                Z: () => f
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
            const f = s
        },
        68116: (e, t, r) => {
            "use strict";
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
                f = r(67294),
                p = r(89250),
                w = r(79655),
                v = r(22202),
                d = r(96985),
                h = r(78989),
                x = r(41400),
                g = r(13887),
                E = r(98538),
                b = function(e) {
                    var t = e.isEmailOTP,
                        r = void 0 !== t && t,
                        c = (0, p.s0)(),
                        s = (0, p.TH)().state,
                        m = (0, v.Sq)(),
                        b = (0, a.Z)(m, 2),
                        y = b[0],
                        N = b[1],
                        T = N.isLoading,
                        L = N.isError,
                        R = N.error,
                        k = (0, f.useState)(!1),
                        C = (0, a.Z)(k, 2),
                        F = C[0],
                        Z = C[1],
                        M = (0, f.useState)(!0),
                        S = (0, a.Z)(M, 2),
                        D = S[0],
                        z = S[1],
                        K = (0, f.useRef)(null),
                        O = (0, f.useRef)(null),
                        j = (0, f.useRef)(null),
                        q = (0, f.useRef)(null),
                        A = (0, f.useRef)(null),
                        H = (0, f.useRef)(null);
                    (0, f.useEffect)((function() {
                        var e;
                        null === (e = K.current) || void 0 === e || e.focus()
                    }), []);
                    var P = function() {
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
                                            return H.current.blur(), e.prev = 4, e.next = 7, y({
                                                code: I(),
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
                                            e.prev = 16, e.t0 = e.catch(4), console.error(e.t0), z(!1), setTimeout((function() {
                                                z(!0)
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
                        _ = F && !T && D,
                        I = function() {
                            return [K.current.value, O.current.value, j.current.value, q.current.value, A.current.value, H.current.value].join("")
                        },
                        U = function(e) {
                            var t = e.event,
                                r = e.nextRef,
                                n = void 0 === r ? null : r;
                            if (Number.isNaN(t.target.value)) t.target.value = "";
                            else {
                                var a;
                                if (1 === t.target.value.length && null !== n) null === (a = n.current) || void 0 === a || a.focus();
                                t.target.value.length > 1 && function(e) {
                                    for (var t, r = e.target.value.replace(/\s+/g, ""), n = [K, O, j, q, A, H], a = 0; a < r.length && a < n.length; a++) n[a].current.value = r[a];
                                    var o, l = Math.min(r.length, n.length);
                                    l < n.length ? null === (o = n[l]) || void 0 === o || null === (o = o.current) || void 0 === o || o.focus() : null === (t = K.current) || void 0 === t || t.blur()
                                }(t);
                                var o = I(),
                                    l = 6 === o.length && !Number.isNaN(o);
                                Z(l)
                            }
                        },
                        W = function(e) {
                            var t = e.event,
                                r = e.previousRef,
                                n = void 0 === r ? null : r;
                            null !== n && "Backspace" === t.key && 0 === t.target.value.length && (n.current.value = "", n.current.focus())
                        };
                    return f.createElement(g.Z, null, f.createElement(d.$4, null, r ? "Email One-Time Code" : "Two-Factor Authentication"), f.createElement("div", {
                        className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                    }, f.createElement(x.l0, {
                        onSubmit: P
                    }, f.createElement("div", {
                        className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                    }, f.createElement("div", {
                        className: "tw-mb-5"
                    }, f.createElement(d.$1, {
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
                                nextRef: O
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: L,
                        inputMode: "numeric",
                        autocomplete: "off",
                        ref: K
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
                                previousRef: K
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: L,
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
                                nextRef: q
                            })
                        },
                        onKeyDown: function(e) {
                            return W({
                                event: e,
                                previousRef: O
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: L,
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
                                event: e,
                                nextRef: A
                            })
                        },
                        onKeyDown: function(e) {
                            return W({
                                event: e,
                                previousRef: j
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: L,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: q
                    }), f.createElement(h.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return U({
                                event: e,
                                nextRef: H
                            })
                        },
                        onKeyDown: function(e) {
                            return W({
                                event: e,
                                previousRef: q
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: L,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: A
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
                                previousRef: A
                            })
                        },
                        className: "tw-w-12 tw-h-[60px]",
                        isError: L,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: H
                    })), L && f.createElement("p", {
                        role: "alert",
                        className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre"
                    }, 429 === (null == R ? void 0 : R.status) ? "Login unavailable due to too many failed attempts. Please try again later." : "Oops, that code didn't work.")), f.createElement(d.zx, {
                        className: "tw-w-60 tw-mt-6 tw-mb-4",
                        disabled: !_,
                        loading: T || !D,
                        type: "submit"
                    }, "Next"), r ? f.createElement(d.qX, {
                        type: "info",
                        title: "What's this?",
                        className: "tw--mb-4",
                        style: {
                            maxWidth: 480
                        }
                    }, "To help keep your account secure we've sent a code to your registered email address. You'll need to enter it above to access VRChat.") : f.createElement(w.rU, {
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
            const y = b;
            b.propTypes = {
                isEmailOTP: m().bool
            }
        },
        94311: (e, t, r) => {
            var n = r(69877);
            e.exports = function(e) {
                var t = e.length;
                return t ? e[n(0, t - 1)] : void 0
            }
        },
        84992: (e, t, r) => {
            var n = r(94311),
                a = r(61312);
            e.exports = function(e) {
                return n(a(e))
            }
        },
        95534: (e, t, r) => {
            var n = r(94311),
                a = r(84992),
                o = r(1469);
            e.exports = function(e) {
                return (o(e) ? n : a)(e)
            }
        }
    }
]);
//# sourceMappingURL=115bb0647f4c1964411d7d5e17a8d269112ed4f88ab94b4d95939cd2d75c4c51.js.map