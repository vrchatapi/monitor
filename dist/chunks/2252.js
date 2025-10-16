(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2252], {
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

            function i(e) {
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return e
                }
            }
            t.useLocalStorage = function(e, t) {
                void 0 === t && (t = null);
                var r = l.useState(null === o.storage.getItem(e) ? t : i(o.storage.getItem(e))),
                    u = r[0],
                    c = r[1],
                    s = l.useCallback((function(t) {
                        a.isTypeOfLocalStorageChanged(t) ? t.detail.key === e && c(t.detail.value) : t.key === e && c(null === t.newValue ? null : i(t.newValue))
                    }), [c, e]);
                l.useEffect((function() {
                    if (n.isBrowser()) {
                        var r = function(e) {
                            s(e)
                        };
                        return window.addEventListener(a.LOCAL_STORAGE_CHANGE_EVENT_NAME, r), window.addEventListener("storage", r), null === o.storage.getItem(e) && null !== t && a.writeStorage(e, t),
                            function() {
                                window.removeEventListener(a.LOCAL_STORAGE_CHANGE_EVENT_NAME, r), window.removeEventListener("storage", r)
                            }
                    }
                }), [e, t, s]);
                var m = l.useCallback((function(t) {
                        return t instanceof Function ? a.writeStorage(e, t(u)) : a.writeStorage(e, t)
                    }), [e]),
                    d = l.useCallback((function() {
                        return a.deleteFromStorage(e)
                    }), [e]);
                return [null != u ? u : t, m, d]
            }
        },
        99395: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => y
            });
            var a = r(15861),
                n = r(54546),
                o = r(64687),
                l = r.n(o),
                i = r(67294),
                u = r(32981),
                c = r(89250),
                s = r(79655),
                m = r(60006),
                d = r(5513);
            const g = function() {
                var e = (0, s.lr)(),
                    t = (0, n.Z)(e, 1)[0];
                return null !== t.get("campaignName") ? {
                    name: t.get("campaignName"),
                    source: t.get("campaignSource"),
                    medium: t.get("campaignMedium"),
                    id: "".concat(t.get("campaignName"), "_").concat(t.get("campaignSource"), "_").concat(t.get("campaignMedium"))
                } : null
            };
            var v = r(42138),
                w = r(15832),
                f = r(80646);
            const p = function(e) {
                var t = e.trackingEventName,
                    r = void 0 === t ? null : t,
                    a = (0, w._)("campaigns", []),
                    o = (0, n.Z)(a, 2),
                    l = o[0],
                    u = o[1],
                    c = (0, w._)("campaignsSeen", []),
                    s = (0, n.Z)(c, 2),
                    m = s[0],
                    d = s[1],
                    p = g();
                (0, i.useEffect)((function() {
                    if (null !== p) {
                        null !== r && (0, f.j)(r, {
                            campaign: p
                        });
                        var e = [].concat((0, v.Z)(l), [p]);
                        u((0, v.Z)(new Map(e.map((function(e) {
                            return [e.id, e]
                        }))).values())), d(m.filter((function(e) {
                            return e.name !== p.name
                        })))
                    }
                }), [])
            };
            var E = r(22202),
                h = r(61509),
                b = r(96985),
                S = r(13887),
                _ = r(41400);
            const y = function() {
                var e;
                p({
                    trackingEventName: "Login_Campaign_View"
                });
                var t = (0, c.s0)(),
                    r = (0, u.I0)(),
                    o = (0, c.TH)().state,
                    v = (0, E.YA)(),
                    w = (0, n.Z)(v, 2),
                    y = w[0],
                    N = w[1],
                    C = N.isLoading,
                    x = N.error,
                    L = N.isError,
                    A = (0, E._y)(),
                    O = (0, n.Z)(A, 1)[0],
                    T = (0, E.XC)().data,
                    k = (0, i.useState)(""),
                    I = (0, n.Z)(k, 2),
                    M = I[0],
                    R = I[1],
                    V = (0, i.useState)(""),
                    G = (0, n.Z)(V, 2),
                    j = G[0],
                    F = G[1],
                    P = g(),
                    Z = function() {
                        null != o && o.redirectTo ? t(o.redirectTo) : t("/home")
                    };
                (0, i.useEffect)((function() {
                    var e;
                    if (!(null == T || null === (e = T.requiresTwoFactorAuth) || void 0 === e || !e.length) || (null == o ? void 0 : o.logout)) return r(h.S.util.resetApiState()), r((0, d.kS)()), void O();
                    null != T && T.id && Z()
                }), [T]);
                var U, H, D = function(e) {
                        var t, r;
                        e.preventDefault(), R(null !== (t = null === (r = e.target) || void 0 === r ? void 0 : r.value) && void 0 !== t ? t : "")
                    },
                    B = function(e) {
                        var t, r;
                        e.preventDefault(), F(null !== (t = null === (r = e.target) || void 0 === r ? void 0 : r.value) && void 0 !== t ? t : "")
                    },
                    q = function() {
                        var e = (0, a.Z)(l().mark((function e(r) {
                            var a, n, i, u;
                            return l().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r.preventDefault(), (0, f.NA)(!1), e.prev = 2, e.next = 5, y({
                                            username: encodeURIComponent(null == M ? void 0 : M.trim()),
                                            password: encodeURIComponent(j)
                                        }).unwrap();
                                    case 5:
                                        if (null == (a = e.sent) || !a.requiresTwoFactorAuth) {
                                            e.next = 14;
                                            break
                                        }
                                        if (i = "/home/twofactorauth", "emailOtp" === (null === (n = a.requiresTwoFactorAuth) || void 0 === n ? void 0 : n[0]) && (i = "/home/emailtwofactorauth"), null == o || !o.redirectTo) {
                                            e.next = 12;
                                            break
                                        }
                                        return t(i, {
                                            state: {
                                                redirectTo: o.redirectTo
                                            }
                                        }), e.abrupt("return");
                                    case 12:
                                        return t(i), e.abrupt("return");
                                    case 14:
                                        return (0, f.j)("Login_LoginSuccess", {
                                            user: a.id,
                                            campaign: P
                                        }), Z(), e.abrupt("return");
                                    case 19:
                                        e.prev = 19, e.t0 = e.catch(2), (0, f.j)("Login_LoginFail", {
                                            error: null === e.t0 || void 0 === e.t0 || null === (u = e.t0.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message
                                        }), R(null == M ? void 0 : M.trim());
                                    case 23:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 19]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    J = "Failed to Log In",
                    Q = null == x || null === (e = x.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message;
                L && ((null === (U = Q) || void 0 === U ? void 0 : U.indexOf(":")) > 0 ? (J = Q.substring(0, Q.indexOf(":")).trim(), Q = Q.substring(Q.indexOf(":") + 1).trim()) : 0 === (null === (H = Q) || void 0 === H ? void 0 : H.indexOf(":")) && (Q = Q.substring(1).trim()));
                return i.createElement(S.Z, {
                    showCredits: !0
                }, i.createElement(b.$4, null, "Login"), i.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[500px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, i.createElement(_.l0, {
                    id: "login-form",
                    name: "login-form",
                    className: "nobottommargin",
                    onSubmit: q
                }, i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Welcome to VRChat"), i.createElement(_.X2, {
                    className: "align-items-flex-end justify-content-between"
                }), L && i.createElement(b.qX, {
                    type: "error",
                    role: "alert",
                    "aria-label": "Login Error",
                    title: J,
                    message: Q,
                    className: "mb-2"
                }), i.createElement(b.II, {
                    type: "text",
                    id: "username_email",
                    name: "username_email",
                    "aria-label": "username",
                    placeholder: "Username/Email",
                    value: M,
                    onChange: D,
                    onKeyUp: D
                }), i.createElement(b.II, {
                    type: "password",
                    id: "password",
                    name: "password",
                    role: "textbox",
                    "aria-label": "password",
                    className: "mt-2",
                    placeholder: "Password",
                    value: j,
                    onChange: B,
                    onKeyUp: B
                }), i.createElement("div", {
                    className: "tw-w-full tw-text-right tw-mt-2"
                }, "Forgot your", " ", i.createElement(s.rU, {
                    to: "/home/password",
                    className: "tw-text-link-highlight"
                }, "password"), " ", "or", " ", i.createElement(s.rU, {
                    to: "/home/forgot-email",
                    className: "tw-text-link-highlight"
                }, "email address"), "?"), i.createElement(b.zx, {
                    "aria-label": "Login",
                    className: "tw-mt-6",
                    type: "submit",
                    loading: C,
                    disabled: "" === M || "" === j
                }, "Login"), i.createElement("hr", {
                    className: "tw-border-hr-line-color tw-border-y-2 tw-w-full tw-mb-0"
                }), i.createElement("h4", {
                    className: "tw-text-base tw-text-white tw-text-center tw-mt-5 tw-mb-0"
                }, "New to VRChat?"), i.createElement(m.Qj, {
                    to: "/home/register",
                    className: "tw-w-full",
                    "aria-label": "Create an account"
                }, "Create an account"), i.createElement("hr", {
                    className: "tw-border-hr-line-color tw-border-y-2 tw-w-full tw-mb-0"
                }), i.createElement("h4", {
                    className: "tw-text-base tw-text-subtext-grey tw-mt-5 tw-mb-6"
                }, "Using an Oculus, Steam, or Viveport account?"), i.createElement("p", {
                    className: "tw-text-subtext-grey tw-text-xs"
                }, "Don't worry! You can link your VRChat account to your existing Oculus / Steam / Viveport account and keep all your friends.", i.createElement("a", {
                    href: "https://help.vrchat.com/hc/en-us/articles/360062659053-I-want-to-turn-my-Steam-Oculus-or-Viveport-account-into-a-VRChat-account#:~:text=Please%20log%20into%20VRChat%20with,screen%20to%20link%20your%20accounts.",
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": "Learn More about Account Linking"
                }, " ", "Learn More")))))
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
//# sourceMappingURL=51b252f660750e006ada4423989d915989c6d26112b9b127172789c3667c271f.js.map