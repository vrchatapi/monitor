"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6231], {
        76231: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => g
            });
            var l = n(15861),
                r = n(54546),
                a = n(4965),
                o = n(15369),
                u = n(64687),
                c = n.n(u),
                s = n(67294),
                m = n(79655),
                i = n(46382),
                d = n(17383),
                h = n(69677);
            n(22760);
            const g = function() {
                var e, t, n, a = (0, d.Tu)().user,
                    u = (0, m.lr)(),
                    g = (0, r.Z)(u, 1)[0],
                    f = s.useState(g.token),
                    v = (0, r.Z)(f, 2),
                    y = v[0],
                    b = v[1],
                    w = s.useState(!1),
                    k = (0, r.Z)(w, 2),
                    x = (k[0], k[1]),
                    A = (0, h.X0)(),
                    I = (0, r.Z)(A, 2),
                    V = I[0],
                    X = I[1],
                    S = X.isLoading,
                    C = X.error,
                    M = X.isError,
                    q = X.isSuccess,
                    R = function(e) {
                        var t = e.target.value;
                        b(void 0 === t ? "" : t)
                    },
                    T = function() {
                        var e = (0, l.Z)(c().mark((function e(t) {
                            var n, l;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.next = 3, V({
                                            token: y
                                        });
                                    case 3:
                                        if (!(n = e.sent).error) {
                                            e.next = 7;
                                            break
                                        }
                                        return null !== (l = n.error) && void 0 !== l && null !== (l = l.data) && void 0 !== l && null !== (l = l.error) && void 0 !== l && l.message.includes("SpecialException") && x(!0), e.abrupt("return");
                                    case 7:
                                        b("");
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
                    Z = a.steamId && "" !== a.steamId,
                    N = (null == a ? void 0 : a.oculusId) && "" !== a.oculusId,
                    O = (null == a ? void 0 : a.viveId) && "" !== a.viveId,
                    P = Z && N && O;
                return s.createElement(E, null, s.createElement(i.$4, null, "Account Link"), s.createElement(i.JX, {
                    className: "my-3"
                }, s.createElement(i.oI, null, s.createElement(i.X2, null, s.createElement(i.$1, {
                    icon: o.x0,
                    size: "2x",
                    className: "me-3",
                    spin: S
                }), s.createElement("h2", null, "Account Link"))), s.createElement(i.Ao, null, !P && s.createElement(s.Fragment, null, s.createElement("p", null, "Hey there! You're about to merge your external account into this VRChat account."), s.createElement("p", null, "You're going to need to log in to the VRChat client from ", s.createElement("strong", null, "Steam, Oculus, or Viveport"), ", then get an Account Link token, which you'll enter here."), s.createElement("p", null, "All of your friends, content, and reputation from your other account will be ", s.createElement("em", null, "moved"), " over to this account."), s.createElement("p", null, s.createElement(p, null, "VRChat Plus"), "If, for some reason, you're merging an account that has VRChat Plus into another account that ", s.createElement("em", null, "also"), " has VRChat Plus, the resultant account would have ", s.createElement("em", null, "double VRChat Plus"), ", which confers exactly one benefit: it is twice as expensive. We would like to strongly encourage you not to do this, even if you like spending money for no reason. Please cancel one of the two of your VRChat Plus-es before you continue.", " "), s.createElement("p", null, s.createElement(p, null, "Favorites"), "Favorites will merge most cleanly if the new account is completely empty of favorites. If you try to merge while both accounts have favorites, the results may be unpredictable."), s.createElement(i.qX, {
                    type: "warn",
                    title: "Merging is permanent"
                }, s.createElement("p", {
                    className: "mb-0"
                }, "This is ", s.createElement("strong", null, "permanent"), ", ", s.createElement("strong", null, "irreversible"), ", and can only be done using ", s.createElement("strong", null, "one"), " Steam,", " ", s.createElement("strong", null, "one"), " Oculus, and/or ", s.createElement("strong", null, "one"), " Viveport account.", s.createElement("br", null), s.createElement("br", null), "This will also give your Steam, Oculus, or Viveport credentials the ability to log in to ", s.createElement("em", null, "this"), " account."))), !P && Z && s.createElement(i.qX, {
                    type: "info",
                    title: "Steam Account Merged",
                    slim: !0
                }, s.createElement("strong", null, "Your account has already been merged with a Steam account")), !P && N && s.createElement(i.qX, {
                    type: "info",
                    title: "Oculus Account Merged",
                    slim: !0
                }, s.createElement("strong", null, "Your account has already been merged with an Oculus account")), !P && O && s.createElement(i.qX, {
                    type: "info",
                    title: "Viveport Account Merged",
                    slim: !0
                }, s.createElement("strong", null, "Your account has already been merged with a Viveport account")), P && s.createElement(i.qX, {
                    type: "info",
                    title: "All Accounts Merged",
                    slim: !0
                }, s.createElement("strong", null, "Your account has already been merged with a Steam, Oculus, and Viveport accounts")))), !P && s.createElement(i.JX, null, s.createElement(i.oI, null, s.createElement("h4", {
                    className: "fw-normal mb-0"
                }, "Enter Merge Token")), s.createElement(i.Ao, null, s.createElement("form", {
                    id: "merge-form",
                    name: "merge-form",
                    className: "nobottommargin",
                    onSubmit: T
                }, s.createElement(i.JX, null, M && s.createElement(i.qX, {
                    type: "error",
                    title: "Failed to Link Accounts"
                }, null == C || null === (e = C.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message, (null == C || null === (t = C.data) || void 0 === t || null === (t = t.error) || void 0 === t || null === (t = t.errors) || void 0 === t ? void 0 : t.length) && s.createElement("ul", null, null == C || null === (n = C.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.errors.map((function(e) {
                    return s.createElement("li", null, e)
                })))), q && s.createElement(i.qX, {
                    type: "success",
                    title: "Successfully Merged Accounts",
                    message: "It may take as long as one hour for your worlds, avatars, and friends to migrate from the old account to the new account."
                }), s.createElement(i.II, {
                    type: "text",
                    id: "mergeToken",
                    name: "mergeToken",
                    placeholder: "Merge Token",
                    className: "flex-1 mb-2",
                    value: y,
                    onChange: R,
                    onKeyUp: R
                }), s.createElement(i.zx, {
                    loading: S,
                    disabled: S,
                    type: "submit",
                    id: "merge-form-submit",
                    name: "merge-form-submit",
                    value: "merge"
                }, "Merge Accounts"))))), !1)
            };
            var E = (0, a.Z)(i.JX, {
                    target: "e1bhmdam5"
                })({
                    name: "1wafcg9",
                    styles: "max-width:1200px;margin:0 auto"
                }),
                p = (0, a.Z)("h5", {
                    target: "e1bhmdam4"
                })({
                    name: "1m52a5b",
                    styles: "border-bottom:none;font-size:1.2rem;font-weight:bold;color:hsl(0, 0%, 60%);&::after{display:none;}"
                })
        }
    }
]);
//# sourceMappingURL=32fb663bbcf44150b1ea058d152bde4ecef10b026e531a48d2e299d9a112d989.js.map