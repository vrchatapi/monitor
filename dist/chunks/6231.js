"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6231], {
        76231: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => x
            });
            var n = r(4942),
                a = r(15861),
                l = r(54546),
                o = r(42138),
                c = r(4965),
                s = r(15369),
                i = r(64687),
                u = r.n(i),
                m = r(67294),
                d = r(79655),
                w = r(80988),
                p = r(69699),
                h = r(60766),
                g = r(69116),
                f = r(69677);
            r(22760);

            function y(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var E = {
                    prioritizedWorldPersistence: {
                        source: new Set,
                        target: new Set
                    }
                },
                v = function(e) {
                    return {
                        prioritizedWorldPersistence: {
                            source: (0, o.Z)(e.prioritizedWorldPersistence.source),
                            target: (0, o.Z)(e.prioritizedWorldPersistence.target)
                        }
                    }
                };
            const x = function() {
                var e, t, r, o, c, i = (0, g.Tu)().user,
                    y = (0, d.lr)(),
                    x = (0, l.Z)(y, 1)[0],
                    N = m.useState(x.token),
                    O = (0, l.Z)(N, 2),
                    S = O[0],
                    z = O[1],
                    C = m.useState(!1),
                    W = (0, l.Z)(C, 2),
                    V = (W[0], W[1]),
                    Z = (0, f.X0)(),
                    A = (0, l.Z)(Z, 2),
                    I = A[0],
                    j = A[1],
                    X = j.isLoading,
                    R = j.error,
                    M = j.isError,
                    T = j.isSuccess,
                    q = (0, f.yb)(),
                    L = (0, l.Z)(q, 2),
                    D = L[0],
                    F = L[1],
                    Y = F.data,
                    J = F.isLoading,
                    U = F.isSuccess,
                    _ = m.useState(E),
                    $ = (0, l.Z)(_, 2),
                    B = $[0],
                    H = $[1],
                    K = function(e) {
                        var t = e.target.value;
                        z(void 0 === t ? "" : t)
                    },
                    G = function() {
                        var e = (0, a.Z)(u().mark((function e(t) {
                            var r, n, a;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.next = 3, D({
                                            token: S
                                        });
                                    case 3:
                                        if (!((null == (n = e.sent) || null === (r = n.data) || void 0 === r || null === (r = r.sharedPersistenceWorlds) || void 0 === r ? void 0 : r.length) > 0)) {
                                            e.next = 7;
                                            break
                                        }
                                        return a = n.data, e.abrupt("return", H({
                                            prioritizedWorldPersistence: {
                                                source: new Set(a.sharedPersistenceWorlds.map((function(e) {
                                                    return e.id
                                                }))),
                                                target: new Set
                                            }
                                        }));
                                    case 7:
                                        return e.abrupt("return", Q());
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Q = function() {
                        var e = (0, a.Z)(u().mark((function e() {
                            var t, r;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, I({
                                            token: S,
                                            mergeOptions: v(B)
                                        });
                                    case 2:
                                        if (!(t = e.sent).error) {
                                            e.next = 6;
                                            break
                                        }
                                        return null !== (r = t.error) && void 0 !== r && null !== (r = r.data) && void 0 !== r && null !== (r = r.error) && void 0 !== r && r.message.includes("SpecialException") && V(!0), e.abrupt("return");
                                    case 6:
                                        ee(), z("");
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ee = function() {
                        V(!1), H(E)
                    },
                    te = function(e, t) {
                        H((function(r) {
                            var a, l = t ? "source" : "target",
                                o = t ? "target" : "source",
                                c = new Set(r.prioritizedWorldPersistence[l]),
                                s = new Set(r.prioritizedWorldPersistence[o]);
                            return c.has(e) ? (c.delete(e), s.add(e)) : (c.add(e), s.delete(e)), b(b({}, r), {}, {
                                prioritizedWorldPersistence: b(b({}, r.prioritizedWorldPersistence), {}, (a = {}, (0, n.Z)(a, l, c), (0, n.Z)(a, o, s), a))
                            })
                        }))
                    },
                    re = i.steamId && "" !== i.steamId,
                    ne = (null == i ? void 0 : i.oculusId) && "" !== i.oculusId,
                    ae = (null == i ? void 0 : i.viveId) && "" !== i.viveId,
                    le = re && ne && ae,
                    oe = U && (B.prioritizedWorldPersistence.source.size > 0 || B.prioritizedWorldPersistence.target.size > 0),
                    ce = X || J;
                return m.createElement(k, null, m.createElement(w.$4, null, "Account Link"), m.createElement(w.JX, {
                    className: "my-3"
                }, m.createElement(w.oI, null, m.createElement(w.X2, null, m.createElement(w.$1, {
                    icon: s.x0,
                    size: "2x",
                    className: "me-3",
                    spin: X
                }), m.createElement("h2", null, "Account Link"))), m.createElement(w.Ao, null, !le && m.createElement(m.Fragment, null, m.createElement("p", null, "Hey there! You're about to merge your external account into this VRChat account."), m.createElement("p", null, "You're going to need to log in to the VRChat client from ", m.createElement("strong", null, "Steam, Oculus, or Viveport"), ", then get an Account Link token, which you'll enter here."), m.createElement("p", null, "All of your friends, content, and reputation from your other account will be ", m.createElement("em", null, "moved"), " over to this account."), m.createElement("p", null, m.createElement(P, null, "VRChat Plus"), "If, for some reason, you're merging an account that has VRChat Plus into another account that ", m.createElement("em", null, "also"), " has VRChat Plus, the resultant account would have ", m.createElement("em", null, "double VRChat Plus"), ", which confers exactly one benefit: it is twice as expensive. We would like to strongly encourage you not to do this, even if you like spending money for no reason. Please cancel one of the two of your VRChat Plus-es before you continue.", " "), m.createElement("p", null, m.createElement(P, null, "Favorites"), "Favorites will merge most cleanly if the new account is completely empty of favorites. If you try to merge while both accounts have favorites, the results may be unpredictable."), m.createElement("p", null, m.createElement(P, null, "Persistence"), "Player persistence related to worlds will also be merged. If your external account has persistence in the same world as your VRChat account, and you merge your external account into your VRChat account, you will be prompted to resolve any conflicts. For more information on how persistence works, please see our documentation", " ", m.createElement("a", {
                    href: "https://creators.vrchat.com/worlds/udon/persistence/#a-specific-world",
                    target: "_blank",
                    rel: "noreferrer"
                }, "here"), "."), m.createElement(w.qX, {
                    type: "warn",
                    title: "Merging is permanent"
                }, m.createElement("p", {
                    className: "mb-0"
                }, "This is ", m.createElement("strong", null, "permanent"), ", ", m.createElement("strong", null, "irreversible"), ", and can only be done using ", m.createElement("strong", null, "one"), " Steam,", " ", m.createElement("strong", null, "one"), " Oculus, and/or ", m.createElement("strong", null, "one"), " Viveport account.", m.createElement("br", null), m.createElement("br", null), "This will also give your Steam, Oculus, or Viveport credentials the ability to log in to ", m.createElement("em", null, "this"), " account.", m.createElement("br", null), m.createElement("br", null), "To prevent issues with merging your player persistence data,", " ", m.createElement("strong", null, "please close your VRChat client on all platforms before you merge.")))), !le && re && m.createElement(w.qX, {
                    type: "info",
                    title: "Steam Account Merged",
                    slim: !0
                }, m.createElement("strong", null, "Your account has already been merged with a Steam account")), !le && ne && m.createElement(w.qX, {
                    type: "info",
                    title: "Oculus Account Merged",
                    slim: !0
                }, m.createElement("strong", null, "Your account has already been merged with an Oculus account")), !le && ae && m.createElement(w.qX, {
                    type: "info",
                    title: "Viveport Account Merged",
                    slim: !0
                }, m.createElement("strong", null, "Your account has already been merged with a Viveport account")), le && m.createElement(w.qX, {
                    type: "info",
                    title: "All Accounts Merged",
                    slim: !0
                }, m.createElement("strong", null, "Your account has already been merged with a Steam, Oculus, and Viveport accounts")))), !le && m.createElement(w.JX, null, m.createElement(w.oI, null, m.createElement("h4", {
                    className: "fw-normal mb-0"
                }, "Enter Merge Token")), m.createElement(w.Ao, null, m.createElement("form", {
                    id: "merge-form",
                    name: "merge-form",
                    className: "nobottommargin",
                    onSubmit: G
                }, m.createElement(w.JX, null, M && m.createElement(w.qX, {
                    type: "error",
                    title: "Failed to Link Accounts"
                }, null == R || null === (e = R.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message, (null == R || null === (t = R.data) || void 0 === t || null === (t = t.error) || void 0 === t || null === (t = t.errors) || void 0 === t ? void 0 : t.length) && m.createElement("ul", null, null == R || null === (r = R.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.errors.map((function(e, t) {
                    return m.createElement("li", {
                        key: t
                    }, e)
                })))), T && m.createElement(w.qX, {
                    type: "success",
                    title: "Successfully Merged Accounts",
                    message: "It may take as long as one hour for your worlds, avatars, and friends to migrate from the old account to the new account."
                }), m.createElement(w.II, {
                    type: "text",
                    id: "mergeToken",
                    name: "mergeToken",
                    placeholder: "Merge Token",
                    className: "flex-1 mb-2",
                    value: S,
                    onChange: K,
                    onKeyUp: K
                }), m.createElement(w.zx, {
                    loading: ce,
                    disabled: ce,
                    type: "submit",
                    id: "merge-form-submit",
                    name: "merge-form-submit",
                    value: "merge"
                }, "Merge Accounts"))))), !1, m.createElement(p.Z, {
                    isOpen: oe,
                    toggle: ee,
                    centered: !0
                }, m.createElement(h.Z, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, m.createElement("h4", {
                    className: "text-center ty-my-5 tw-py-3 tw-text-center"
                }, "Shared Player Persistence Detected"), m.createElement("div", {
                    className: "py-2 tw-text-center"
                }, m.createElement("p", {
                    className: "tw-mx-auto tw-max-w-2xl tw-text-sm tw-leading-6 tw-text-gray-300"
                }, "We found one or more worlds where both accounts share player persistence. Choose which account’s persistence data you’d like to keep for each world below.")), m.createElement("div", {
                    className: "py-2 tw-text-center"
                }, m.createElement(w.JX, {
                    className: "tw-overflow-hidden tw-rounded-xl tw-bg-grey tw-px-5 tw-py-3"
                }, m.createElement("table", {
                    className: "tw-w-full tw-border-collapse"
                }, m.createElement("tr", {
                    className: "tw-border-b tw-border-b-1 tw-border-hr-line-color"
                }, m.createElement("th", {
                    className: "tw-w-1/2 tw-py-4 tw-text-center tw-text-sm tw-font-semibold tw-uppercase tw-tracking-wide tw-text-gray-200"
                }, "World"), m.createElement("th", {
                    className: "tw-w-1/4 tw-py-4 tw-text-center tw-text-sm tw-font-semibold tw-uppercase tw-tracking-wide tw-text-gray-200"
                }, "VRChat"), m.createElement("th", {
                    className: "tw-w-1/4 tw-py-4 tw-text-center tw-text-sm tw-font-semibold tw-uppercase tw-tracking-wide tw-text-gray-200"
                }, null !== (o = null == Y ? void 0 : Y.source) && void 0 !== o ? o : "external")), null == Y || null === (c = Y.sharedPersistenceWorlds) || void 0 === c ? void 0 : c.map((function(e) {
                    return m.createElement("tr", {
                        key: e.id,
                        className: "tw-border-b tw-border-b-1 tw-border-hr-line-color last:tw-border-none"
                    }, m.createElement("td", {
                        className: "tw-py-3 tw-pr-3"
                    }, m.createElement("div", {
                        style: {
                            backgroundImage: "\n                            linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\n                            url(".concat(e.thumbnailImageUrl, ")\n                          ")
                        },
                        className: "tw-relative tw-flex tw-min-h-[72px] tw-items-center tw-justify-center tw-overflow-hidden tw-rounded-lg tw-bg-cover tw-bg-center"
                    }, m.createElement("div", {
                        className: "tw-absolute tw-inset-0 tw-bg-black/55"
                    }), m.createElement("span", {
                        className: "tw-relative tw-z-10 tw-px-3 tw-text-center tw-text-sm tw-font-semibold tw-text-white tw-drop-shadow"
                    }, e.name))), m.createElement("td", {
                        className: "tw-py-3 tw-text-center"
                    }, m.createElement("div", {
                        className: "tw-flex tw-items-center tw-justify-center"
                    }, m.createElement(w.UA, {
                        checked: B.prioritizedWorldPersistence.target.has(e.id),
                        value: e.id,
                        onChange: function() {
                            return te(e.id, !1)
                        }
                    }))), m.createElement("td", {
                        className: "tw-py-3 tw-text-center"
                    }, m.createElement("div", {
                        className: "tw-flex tw-items-center tw-justify-center"
                    }, m.createElement(w.UA, {
                        checked: B.prioritizedWorldPersistence.source.has(e.id),
                        value: e.id,
                        onChange: function() {
                            return te(e.id, !0)
                        }
                    }))))
                }))))), m.createElement("div", {
                    className: "px-3 pt-3"
                }, m.createElement(w.zx, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: Q,
                    isLoading: X,
                    disabled: X
                }, "Continue Merge"), m.createElement(w.zx, {
                    onClick: ee,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))))
            };
            var k = (0, c.Z)(w.JX, {
                    target: "e1bhmdam5"
                })({
                    name: "1wafcg9",
                    styles: "max-width:1200px;margin:0 auto"
                }),
                P = (0, c.Z)("h5", {
                    target: "e1bhmdam4"
                })({
                    name: "1m52a5b",
                    styles: "border-bottom:none;font-size:1.2rem;font-weight:bold;color:hsl(0, 0%, 60%);&::after{display:none;}"
                })
        }
    }
]);
//# sourceMappingURL=fb4069eb371e562f56bbf995ffcc519d796d058b6990f2951897b27a719782b0.js.map