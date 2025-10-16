(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [5138], {
        4241: (e, t) => {
            "use strict";
            var r = "user-plus",
                a = [],
                n = "f234",
                o = "M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [640, 512, a, n, o]
            }, t.FK = t.DF
        },
        15832: (e, t, r) => {
            "use strict";
            t._ = void 0;
            var a = r(52096);
            Object.defineProperty(t, "_", {
                enumerable: !0,
                get: function() {
                    return a.useLocalStorage
                }
            });
            var n = r(57455);
            a.useLocalStorage
        },
        89872: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowser = void 0, t.isBrowser = function() {
                return "undefined" != typeof window && void 0 !== window.document
            }
        },
        57455: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteFromStorage = t.writeStorage = t.isTypeOfLocalStorageChanged = t.LOCAL_STORAGE_CHANGE_EVENT_NAME = void 0;
            var a = r(96268),
                n = r(89872);
            t.LOCAL_STORAGE_CHANGE_EVENT_NAME = "onLocalStorageChange", n.isBrowser() && "function" != typeof window.CustomEvent && (window.CustomEvent = function(e, t) {
                var r, a;
                void 0 === t && (t = {
                    bubbles: !1,
                    cancelable: !1
                });
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, null !== (r = null == t ? void 0 : t.bubbles) && void 0 !== r && r, null !== (a = null == t ? void 0 : t.cancelable) && void 0 !== a && a, null == t ? void 0 : t.detail), n
            }), t.isTypeOfLocalStorageChanged = function(e) {
                return !!e && e.type === t.LOCAL_STORAGE_CHANGE_EVENT_NAME
            }, t.writeStorage = function(e, r) {
                if (n.isBrowser()) try {
                    a.storage.setItem(e, "object" == typeof r ? JSON.stringify(r) : "" + r), window.dispatchEvent(new CustomEvent(t.LOCAL_STORAGE_CHANGE_EVENT_NAME, {
                        detail: {
                            key: e,
                            value: r
                        }
                    }))
                } catch (e) {
                    if (e instanceof TypeError && e.message.includes("circular structure")) throw new TypeError("The object that was given to the writeStorage function has circular references.\nFor more information, check here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value");
                    throw e
                }
            }, t.deleteFromStorage = function(e) {
                n.isBrowser() && (a.storage.removeItem(e), window.dispatchEvent(new CustomEvent(t.LOCAL_STORAGE_CHANGE_EVENT_NAME, {
                    detail: {
                        key: e,
                        value: null
                    }
                })))
            }
        },
        96268: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.storage = t.MemoryStorageProxy = t.LocalStorageProxy = t.localStorageAvailable = void 0;
            var a = r(89872);

            function n() {
                try {
                    var e = "@rehooks/local-storage:" + (new Date).toISOString();
                    return localStorage.setItem(e, e), localStorage.removeItem(e), !0
                } catch (e) {
                    return a.isBrowser() && e instanceof DOMException && (22 === e.code || 1014 === e.code || "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && localStorage && 0 !== localStorage.length
                }
            }
            t.localStorageAvailable = n;
            var o = function() {
                function e() {}
                return e.prototype.getItem = function(e) {
                    return localStorage.getItem(e)
                }, e.prototype.setItem = function(e, t) {
                    localStorage.setItem(e, t)
                }, e.prototype.removeItem = function(e) {
                    localStorage.removeItem(e)
                }, e
            }();
            t.LocalStorageProxy = o;
            var l = function() {
                function e() {
                    this._memoryStorage = new Map
                }
                return e.prototype.getItem = function(e) {
                    var t;
                    return null !== (t = this._memoryStorage.get(e)) && void 0 !== t ? t : null
                }, e.prototype.setItem = function(e, t) {
                    this._memoryStorage.set(e, t)
                }, e.prototype.removeItem = function(e) {
                    this._memoryStorage.delete(e)
                }, e
            }();
            t.MemoryStorageProxy = l;
            t.storage = n() ? new o : new l
        },
        52096: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useLocalStorage = void 0;
            var a = r(57455),
                n = r(89872),
                o = r(96268),
                l = r(67294);

            function s(e) {
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return e
                }
            }
            t.useLocalStorage = function(e, t) {
                void 0 === t && (t = null);
                var r = l.useState(null === o.storage.getItem(e) ? t : s(o.storage.getItem(e))),
                    c = r[0],
                    i = r[1],
                    u = l.useCallback((function(t) {
                        a.isTypeOfLocalStorageChanged(t) ? t.detail.key === e && i(t.detail.value) : t.key === e && i(null === t.newValue ? null : s(t.newValue))
                    }), [i, e]);
                l.useEffect((function() {
                    if (n.isBrowser()) {
                        var r = function(e) {
                            u(e)
                        };
                        return window.addEventListener(a.LOCAL_STORAGE_CHANGE_EVENT_NAME, r), window.addEventListener("storage", r), null === o.storage.getItem(e) && null !== t && a.writeStorage(e, t),
                            function() {
                                window.removeEventListener(a.LOCAL_STORAGE_CHANGE_EVENT_NAME, r), window.removeEventListener("storage", r)
                            }
                    }
                }), [e, t, u]);
                var m = l.useCallback((function(t) {
                        return t instanceof Function ? a.writeStorage(e, t(c)) : a.writeStorage(e, t)
                    }), [e]),
                    w = l.useCallback((function() {
                        return a.deleteFromStorage(e)
                    }), [e]);
                return [null != c ? c : t, m, w]
            }
        },
        7508: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => y
            });
            var a = r(15861),
                n = r(4942),
                o = r(54546),
                l = r(4241),
                s = r(64687),
                c = r.n(s),
                i = r(67294),
                u = r(89250),
                m = r(79655),
                w = (r(37337), r(15832), r(30381), r(96985)),
                d = r(17383),
                p = r(22202),
                f = (r(17219), r(80646)),
                v = r(82470),
                g = r(60006),
                E = (r(41400), r(13887));

            function h(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const y = function() {
                (0, u.s0)(), (0, u.TH)();
                var e, t, r = (0, m.lr)(),
                    n = (0, o.Z)(r, 1)[0],
                    s = i.useMemo((function() {
                        return Object.fromEntries(n.entries())
                    }), [n]),
                    h = i.useState(s.emailToken),
                    y = (0, o.Z)(h, 2),
                    x = y[0],
                    k = (y[1], (0, p.Gf)({
                        emailToken: x
                    }, {
                        skip: !x
                    })),
                    N = k.data,
                    S = k.isLoading,
                    O = k.isError,
                    _ = k.error,
                    A = (0, p.s2)(),
                    C = (0, o.Z)(A, 2),
                    j = C[0],
                    L = C[1],
                    T = L.isLoading,
                    I = L.isSuccess,
                    P = (L.isError, L.error),
                    M = (0, d.sc)().nameTaken,
                    R = i.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    z = (0, o.Z)(R, 2),
                    F = z[0],
                    G = z[1],
                    D = i.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    Z = (0, o.Z)(D, 2),
                    q = Z[0],
                    U = Z[1],
                    H = i.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    V = (0, o.Z)(H, 2),
                    B = V[0],
                    $ = V[1],
                    K = i.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    J = (0, o.Z)(K, 2),
                    Q = J[0],
                    W = J[1];
                i.useEffect((function() {
                    N && !O && (ee({
                        target: {
                            value: N.displayName.replace(/\s[a-zA-Z0-9]{4}$/, "")
                        }
                    }), U(b(b({}, q), {}, {
                        ok: !0,
                        value: N.email
                    })))
                }), [N, O]);
                var X = i.useMemo((function() {
                    return !0 === F.ok && !0 === q.ok && !0 === B.ok && !0 === Q.ok
                }), [F, q, B, Q]);
                i.useEffect((function() {
                    var e;
                    P && (0, f.j)("AccountUpgrade_Error", {
                        error: null === (e = P.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message
                    })
                }), [P]);
                var Y, ee = function() {
                        var e = (0, a.Z)(c().mark((function e(t) {
                            var r, a, n, o;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = void 0 === r ? "" : r, G(b(b({}, F), {}, {
                                                value: a,
                                                ok: null,
                                                taken: !1,
                                                error: !1
                                            })), "" !== a) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        if (G((function(e) {
                                                return b(b({}, e), {}, {
                                                    taken: null
                                                })
                                            })), n = !1, "" !== a && a.length < 4 ? n = "That display name is too short" : a.length > 15 && (n = "That display name is too long"), !n) {
                                            e.next = 10;
                                            break
                                        }
                                        return G((function(e) {
                                            return b(b({}, e), {}, {
                                                error: n,
                                                ok: null
                                            })
                                        })), e.abrupt("return");
                                    case 10:
                                        if (G((function(e) {
                                                return b(b({}, e), {}, {
                                                    checking: !0
                                                })
                                            })), e.t0 = (null == N ? void 0 : N.displayName) !== a, !e.t0) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 15, M(a);
                                    case 15:
                                        e.t0 = e.sent;
                                    case 16:
                                        o = e.t0, G((function(e) {
                                            return b(b({}, e), {}, {
                                                taken: o,
                                                ok: !e.error && !o,
                                                error: o ? "That display name is already taken." : e.error,
                                                checking: !1
                                            })
                                        }));
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    te = function() {
                        var e = (0, a.Z)(c().mark((function e(t) {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.prev = 1, e.next = 4, j({
                                            displayName: F.value,
                                            password: B.value,
                                            emailToken: x
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
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    re = !s || S,
                    ae = null !== (e = null == P || null === (t = P.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "";
                return ae && (ae.indexOf(":") > 0 ? (ae.substring(0, ae.indexOf(":")).trim(), ae = ae.substring(ae.indexOf(":") + 1).trim()) : 0 === ae.indexOf(":") && (ae = ae.substring(1).trim())), !x || O ? i.createElement(E.Z, null, i.createElement(w.$4, null, "Upgrade Account"), i.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-py-9 tw-px-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, i.createElement("div", {
                    className: "tw-mb-5"
                }, i.createElement(w.$1, {
                    icon: l.FK,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Upgrade Account"), i.createElement(w.qX, {
                    type: "error",
                    title: "Invalid token"
                }, "The link you have followed is not valid. Please check the link or try the process again later.", _ && i.createElement(i.Fragment, null, i.createElement("br", null), null == _ || null === (Y = _.data) || void 0 === Y || null === (Y = Y.error) || void 0 === Y ? void 0 : Y.message))), i.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-mt-5"
                }, i.createElement(m.rU, {
                    to: "/home/login",
                    className: "tw-text-link-highlight"
                }, "Back to login")))) : I ? i.createElement(E.Z, null, i.createElement(w.$4, null, "Upgrade Account"), i.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-py-9 tw-px-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, i.createElement("div", {
                    className: "tw-mb-5"
                }, i.createElement(w.$1, {
                    icon: l.FK,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Upgrade Account"), i.createElement("p", null, "Your VRChat account has been upgraded, and your upgrade benefits have been applied."), i.createElement("p", null, "You can now sign in on any platform with your email address, gain Trust Ranks, upload Avatars & Worlds, and more. Have fun!")), i.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-mt-5"
                }, i.createElement(g.Qj, {
                    to: "/home/login"
                }, "Login")))) : i.createElement(E.Z, null, i.createElement(w.$4, null, "Upgrade Account"), i.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-pt-9 tw-px-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, i.createElement("form", {
                    onSubmit: te
                }, i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, i.createElement("div", {
                    className: "tw-mb-5"
                }, i.createElement(w.$1, {
                    icon: l.FK,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Upgrade Account"), ae && i.createElement(w.qX, {
                    type: "error",
                    title: "Account upgrade error"
                }, ae), i.createElement("div", {
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
                    value: q.value,
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
                    value: F.value,
                    onChange: ee,
                    disabled: re,
                    loading: F.checking,
                    success: !F.checking && F.ok,
                    className: "tw-mb-1",
                    isError: F.error
                }), !F.error && i.createElement("p", {
                    className: "tw-text-placeholder-text tw-text-xs tw-mb-0"
                }, "This is the name shown to other users in-app, you may only change your display name once per 90 days."), F.error && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Display name error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, F.error)), i.createElement("div", {
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
                    value: B.value,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        if ($(b(b({}, B), {}, {
                                value: r,
                                ok: null,
                                error: !1
                            })), "" !== r) {
                            var a = "\n    We recommend using a password which is:\n      •   At least 8 characters long\n      •   Unique to this account and not in use anywhere else\n      •   Uses a combination of letters, numbers, and symbols\n      •   Stored in a Password Manager\n    ",
                                n = !1;
                            r.length < 8 ? n = "That password is too short \n ".concat(a) : (0, v.w)(r) && (n = "Please try a more secure password \n ".concat(a));
                            var o = !n;
                            $((function(e) {
                                return b(b({}, e), {}, {
                                    ok: o,
                                    error: n
                                })
                            }))
                        }
                    },
                    isError: B.error
                }), B.error && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1 tw-whitespace-pre-wrap"
                }, B.error), B.ok && i.createElement(w.II, {
                    type: "password",
                    className: "tw-w-full tw-mt-2",
                    id: "re-enter-password",
                    name: "Re-enter-password",
                    placeholder: "Re-enter password",
                    role: "textbox",
                    "aria-label": "Re-enter password",
                    disabled: re,
                    value: Q.value,
                    onChange: function(e) {
                        W(b(b({}, Q), {}, {
                            value: e.target.value
                        }))
                    },
                    onBlur: function() {
                        return Q.value !== B.value ? W(b(b({}, Q), {}, {
                            error: "Passwords do not match"
                        })) : W(b(b({}, Q), {}, {
                            error: null,
                            ok: !0
                        }))
                    },
                    isError: Q.error
                }), B.ok && Q.error && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Re-entered password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, Q.error)), i.createElement("div", {
                    className: "tw-w-full tw-mb-6 tw-justify-center tw-flex"
                }, i.createElement(w.zx, {
                    containerStyles: {
                        width: "100%"
                    },
                    type: "submit",
                    id: "upgrade-form-submit",
                    name: "upgrade-form-submit",
                    loading: T,
                    disabled: re || !X
                }, "Upgrade Account"))))))
            }
        },
        82470: (e, t, r) => {
            "use strict";
            r.d(t, {
                w: () => n
            });
            var a = new Set(["password", "password1", "passw0rd", "69696969", "11111111", "111111111", "aaaaaaaa", "aaaaaaaaa", "fuckfuck", "pooppoop", "football", "welcome", "starwars", "trustno1", "jordan23", "iloveyou", "whatever", "princess", "sunshine", "adobe123", "photoshop", "baseball", "superman", "12345678", "123456789", "1234567890", "87654321", "987654321", "0987654321", "zaq1zaq1", "1qaz2wsx", "qwertyuiop", "18atcskd2w", "1q2w3e4r", "asdfjkl;", "asdfghjk", "asdfghjkl", ";lkjfdsa", ";lkjasdf", "zxcvbnm,", "zxcvbnm,.", "zxcvbnm,./", "/.,mvcxz", "poiurewq", "poiuqwer", "qweruiop", "uiopuiop", "qwerqwer", "jkl;jkl;", "asdfasdf", "zxcfzxcv", "zxcvm,./", "m,./zxcv"]),
                n = function(e) {
                    return a.has(e.toLowerCase())
                }
        },
        94311: (e, t, r) => {
            var a = r(69877);
            e.exports = function(e) {
                var t = e.length;
                return t ? e[a(0, t - 1)] : void 0
            }
        },
        84992: (e, t, r) => {
            var a = r(94311),
                n = r(61312);
            e.exports = function(e) {
                return a(n(e))
            }
        },
        95534: (e, t, r) => {
            var a = r(94311),
                n = r(84992),
                o = r(1469);
            e.exports = function(e) {
                return (o(e) ? a : n)(e)
            }
        }
    }
]);
//# sourceMappingURL=5bbc9256b9692bd7ccd0c7afcc077a96c6149d740e05d3a41d6f88c9d2b4f275.js.map