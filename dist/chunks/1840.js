"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1840], {
        86361(e, t) {
            var a = "envelope-circle-check",
                r = [],
                l = "e4e8",
                n = "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176 0 384c0 35.3 28.7 64 64 64l296.2 0C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z";
            t.mw = {
                prefix: "fas",
                iconName: a,
                icon: [640, 512, r, l, n]
            }, t.Kk = t.mw
        },
        92292(e, t) {
            var a = "person-circle-question",
                r = [],
                l = "e542",
                n = "M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 240a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM368 321.6l0 6.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-6.4c0-5.3 4.3-9.6 9.6-9.6l40.5 0c7.7 0 13.9 6.2 13.9 13.9c0 5.2-2.9 9.9-7.4 12.3l-32 16.8c-5.3 2.8-8.6 8.2-8.6 14.2l0 14.8c0 8.8 7.2 16 16 16s16-7.2 16-16l0-5.1 23.5-12.3c15.1-7.9 24.5-23.6 24.5-40.6c0-25.4-20.6-45.9-45.9-45.9l-40.5 0c-23 0-41.6 18.6-41.6 41.6z";
            t.mw = {
                prefix: "fas",
                iconName: a,
                icon: [576, 512, r, l, n]
            }, t.fj = t.mw
        },
        21840(e, t, a) {
            a.r(t), a.d(t, {
                default: () => E
            });
            var r = a(10467),
                l = a(82544),
                n = a(92292),
                c = a(86361),
                s = a(54756),
                m = a.n(s),
                i = a(96540),
                o = a(6376),
                w = a(84976),
                u = (a(69815), a(194)),
                d = (a(24751), a(72505)),
                f = a.n(d),
                p = function(e) {
                    var t = e.name;
                    return {
                        type: "SEND_EMAIL_REMINDER",
                        payload: f().put(window.apiUrl("/api/1/auth/password"), {
                            name: t
                        })
                    }
                },
                x = a(15033),
                h = a(84212);
            const E = function() {
                var e = (0, o.wA)(),
                    t = i.useState(""),
                    a = (0, l.A)(t, 2),
                    s = a[0],
                    d = a[1],
                    f = (0, u.d7)(s),
                    E = i.useState(!1),
                    v = (0, l.A)(E, 2),
                    N = v[0],
                    g = v[1],
                    b = (0, o.d4)(function(e) {
                        return e.recoverPassword
                    }),
                    y = b.error,
                    k = (b.statusCode, b.loading),
                    M = i.useMemo(function() {
                        return "" === s
                    }, [s]),
                    z = i.useMemo(function() {
                        return s !== f
                    }, [s, f]),
                    A = i.useMemo(function() {
                        return f.length > 200 ? "That name is too long" : null
                    }, [f]),
                    C = i.useMemo(function() {
                        return N && !k && !y
                    }, [N, k, y]),
                    L = function() {
                        var t = (0, r.A)(m().mark(function t(a) {
                            return m().wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!z && !A) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return a.preventDefault(), t.prev = 3, t.next = 6, e(p({
                                            name: s
                                        }));
                                    case 6:
                                        return t.prev = 6, setTimeout(function() {
                                            g(!0)
                                        }, 750), t.finish(6);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, null, [
                                [3, , 6, 9]
                            ])
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    _ = y;
                y && y.indexOf(":") > 0 && (_ = y.substring(y.indexOf(":") + 1).trim());
                return i.createElement(h.A, null, i.createElement(x.Qc, null, "Forgot Email Address"), i.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit tw-mt-[200px]"
                }, i.createElement("form", {
                    id: "email-recovery-form",
                    name: "email-recovery-form",
                    onSubmit: function(e) {
                        e.preventDefault(), L(e)
                    }
                }, i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, i.createElement("div", {
                    className: "tw-mb-5"
                }, C && i.createElement(x.M2, {
                    icon: c.Kk,
                    className: "tw-w-[72px] tw-h-[72px]"
                }), !C && i.createElement(x.M2, {
                    icon: n.fj,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Forgot Email Address"), !C && i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col"
                }, i.createElement("div", {
                    className: "tw-w-full"
                }, i.createElement("p", {
                    className: "tw-text-left tw-mb-2"
                }, "Please enter the user or display name of your account.")), i.createElement(x.pd, {
                    type: "text",
                    inputMode: "name",
                    "aria-label": "Username",
                    value: s,
                    placeholder: "Username",
                    className: "tw-w-full",
                    onChange: function(e) {
                        var t = e.target.value;
                        d(void 0 === t ? "" : t), g(!1)
                    },
                    isError: A && !z && !M
                }), A && !z && !M && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Email Error",
                    className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre"
                }, A)), i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col"
                }, i.createElement("p", {
                    className: "tw-text-left tw-mt-2"
                }, "If the name is associated with a verified email address, we will send a reminder message to that address.")), i.createElement("div", {
                    className: C ? "tw-w-full tw-flex tw-flex-col" : "tw-hidden",
                    role: "alert",
                    "aria-label": "Check your email"
                }, i.createElement("p", {
                    className: "tw-text-center tw-mb-2"
                }, "We have attempted to send a reminder to your registered email address!"), i.createElement("p", {
                    className: "tw-text-subtext-grey"
                }, "You may need to check your spam folder if you don't see it within a few minutes.")), y && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Failed to recover",
                    className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre"
                }, _ || "Oops, that didn't work."), !C && i.createElement(x.$n, {
                    disabled: A || z || M,
                    className: "tw-mt-5 tw-w-60",
                    loading: k,
                    type: "submit"
                }, "Request reminder message"), i.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-mt-5"
                }, i.createElement(w.N_, {
                    to: "/home/login",
                    className: "tw-text-link-highlight"
                }, "Back to login"))))))
            }
        }
    }
]);
//# sourceMappingURL=4a39d17b5547d2b9fb91df22f608db5d10bb8fa6c999a376351862de6459295f.js.map