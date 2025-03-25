"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8116], {
        37949: (e, t) => {
            var r = "envelope-open-text",
                n = [],
                a = "f658",
                l = "M215.4 96L144 96l-36.2 0L96 96l0 8.8L96 144l0 40.4 0 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3 48 96c0-26.5 21.5-48 48-48l76.6 0 49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48 416 48c26.5 0 48 21.5 48 48l0 44.3 22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4l0-89 0-40.4 0-39.2 0-8.8-11.8 0L368 96l-71.4 0-81.3 0zM0 448L0 242.1 217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1 512 448s0 0 0 0c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0zM176 160l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [512, 512, n, a, l]
            }, t.mS = t.DF
        },
        36856: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = "shield-halved",
                n = ["shield-alt"],
                a = "f3ed",
                l = "M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z";
            t.definition = {
                prefix: "fas",
                iconName: r,
                icon: [512, 512, n, a, l]
            }, t.faShieldHalved = t.definition, t.prefix = "fas", t.iconName = r, t.width = 512, t.height = 512, t.ligatures = n, t.unicode = a, t.svgPathData = l, t.aliases = n
        },
        68116: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => y
            });
            var n = r(15861),
                a = r(54546),
                l = r(36856),
                o = r(37949),
                c = r(64687),
                u = r.n(c),
                i = r(60006),
                s = r(45697),
                m = r.n(s),
                f = r(67294),
                w = r(89250),
                p = r(79655),
                d = r(22202),
                h = r(14411),
                v = r(78989),
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
                        y = b[0],
                        N = b[1],
                        L = N.isLoading,
                        C = N.isError,
                        T = N.error,
                        R = (0, f.useState)(!1),
                        k = (0, a.Z)(R, 2),
                        F = k[0],
                        M = k[1],
                        Z = (0, f.useState)(!0),
                        D = (0, a.Z)(Z, 2),
                        S = D[0],
                        z = D[1],
                        O = (0, f.useRef)(null),
                        j = (0, f.useRef)(null),
                        K = (0, f.useRef)(null),
                        P = (0, f.useRef)(null),
                        _ = (0, f.useRef)(null),
                        H = (0, f.useRef)(null);
                    (0, f.useEffect)((function() {
                        var e;
                        null === (e = O.current) || void 0 === e || e.focus()
                    }), []);
                    var A = function() {
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
                                                code: U(),
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
                        q = F && !L && S,
                        U = function() {
                            return [O.current.value, j.current.value, K.current.value, P.current.value, _.current.value, H.current.value].join("")
                        },
                        W = function(e) {
                            var t = e.event,
                                r = e.nextRef,
                                n = void 0 === r ? null : r;
                            if (Number.isNaN(t.target.value)) t.target.value = "";
                            else {
                                var a;
                                if (1 === t.target.value.length && null !== n) null === (a = n.current) || void 0 === a || a.focus();
                                t.target.value.length > 1 && function(e) {
                                    for (var t, r = e.target.value.replace(/\s+/g, ""), n = [O, j, K, P, _, H], a = 0; a < r.length && a < n.length; a++) n[a].current.value = r[a];
                                    var l, o = Math.min(r.length, n.length);
                                    o < n.length ? null === (l = n[o]) || void 0 === l || null === (l = l.current) || void 0 === l || l.focus() : null === (t = O.current) || void 0 === t || t.blur()
                                }(t);
                                var l = U(),
                                    o = 6 === l.length && !Number.isNaN(l);
                                M(o)
                            }
                        },
                        $ = function(e) {
                            var t = e.event,
                                r = e.previousRef,
                                n = void 0 === r ? null : r;
                            null !== n && "Backspace" === t.key && 0 === t.target.value.length && (n.current.value = "", n.current.focus())
                        };
                    return f.createElement(g.Z, null, f.createElement(h.$4, null, r ? "Email One-Time Code" : "Two-Factor Authentication"), f.createElement("div", {
                        className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                    }, f.createElement(x.l0, {
                        onSubmit: A
                    }, f.createElement("div", {
                        className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                    }, f.createElement("div", {
                        className: "tw-mb-5"
                    }, f.createElement(h.$1, {
                        icon: r ? o.mS : l.faShieldHalved,
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
                    }, f.createElement(v.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return W({
                                event: e,
                                nextRef: j
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: C,
                        inputMode: "numeric",
                        autocomplete: "off",
                        ref: O
                    }), f.createElement(v.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return W({
                                event: e,
                                nextRef: K
                            })
                        },
                        onKeyDown: function(e) {
                            return $({
                                event: e,
                                previousRef: O
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: C,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: j
                    }), f.createElement(v.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return W({
                                event: e,
                                nextRef: P
                            })
                        },
                        onKeyDown: function(e) {
                            return $({
                                event: e,
                                previousRef: j
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: C,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: K
                    }), f.createElement(v.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return W({
                                event: e,
                                nextRef: _
                            })
                        },
                        onKeyDown: function(e) {
                            return $({
                                event: e,
                                previousRef: K
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: C,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: P
                    }), f.createElement(v.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return W({
                                event: e,
                                nextRef: H
                            })
                        },
                        onKeyDown: function(e) {
                            return $({
                                event: e,
                                previousRef: P
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: C,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: _
                    }), f.createElement(v.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return W({
                                event: e
                            })
                        },
                        onKeyDown: function(e) {
                            return $({
                                event: e,
                                previousRef: _
                            })
                        },
                        className: "tw-w-12 tw-h-[60px]",
                        isError: C,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: H
                    })), C && f.createElement("p", {
                        role: "alert",
                        className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre"
                    }, 429 === (null == T ? void 0 : T.status) ? "Login unavailable due to too many failed attempts. Please try again later." : "Oops, that code didn't work.")), f.createElement(h.zx, {
                        className: "tw-w-60 tw-mt-6 tw-mb-4",
                        disabled: !q,
                        loading: L || !S,
                        type: "submit"
                    }, "Next"), r ? f.createElement(h.qX, {
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
            const y = b;
            b.propTypes = {
                isEmailOTP: m().bool
            }
        }
    }
]);
//# sourceMappingURL=29a0401532becd92d7f8562eb461a6e8c9d3d4d02426716e818d4682ed8b7438.js.map