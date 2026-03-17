"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6231], {
        76231: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => g
            });
            var r = n(15861),
                l = n(54546),
                a = n(4965),
                o = n(15369),
                c = n(64687),
                u = n.n(c),
                s = n(67294),
                i = n(79655),
                m = n(96985),
                d = n(83807),
                h = n(69677);
            n(22760);
            const g = function() {
                var e, t, n, a = (0, d.Tu)().user,
                    c = (0, i.lr)(),
                    g = (0, l.Z)(c, 1)[0],
                    f = s.useState(g.token),
                    E = (0, l.Z)(f, 2),
                    v = E[0],
                    b = E[1],
                    w = s.useState(!1),
                    k = (0, l.Z)(w, 2),
                    x = (k[0], k[1]),
                    V = (0, h.X0)(),
                    C = (0, l.Z)(V, 2),
                    I = C[0],
                    A = C[1],
                    X = A.isLoading,
                    R = A.error,
                    S = A.isError,
                    M = A.isSuccess,
                    P = function(e) {
                        var t = e.target.value;
                        b(void 0 === t ? "" : t)
                    },
                    T = function() {
                        var e = (0, r.Z)(u().mark((function e(t) {
                            var n, r;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.next = 3, I({
                                            token: v
                                        });
                                    case 3:
                                        if (!(n = e.sent).error) {
                                            e.next = 7;
                                            break
                                        }
                                        return null !== (r = n.error) && void 0 !== r && null !== (r = r.data) && void 0 !== r && null !== (r = r.error) && void 0 !== r && r.message.includes("SpecialException") && x(!0), e.abrupt("return");
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
                    q = a.steamId && "" !== a.steamId,
                    Z = (null == a ? void 0 : a.oculusId) && "" !== a.oculusId,
                    N = (null == a ? void 0 : a.viveId) && "" !== a.viveId,
                    O = q && Z && N;
                return s.createElement(p, null, s.createElement(m.$4, null, "Account Link"), s.createElement(m.JX, {
                    className: "my-3"
                }, s.createElement(m.oI, null, s.createElement(m.X2, null, s.createElement(m.$1, {
                    icon: o.x0,
                    size: "2x",
                    className: "me-3",
                    spin: X
                }), s.createElement("h2", null, "Account Link"))), s.createElement(m.Ao, null, !O && s.createElement(s.Fragment, null, s.createElement("p", null, "Hey there! You're about to merge your external account into this VRChat account."), s.createElement("p", null, "You're going to need to log in to the VRChat client from ", s.createElement("strong", null, "Steam, Oculus, or Viveport"), ", then get an Account Link token, which you'll enter here."), s.createElement("p", null, "All of your friends, content, and reputation from your other account will be ", s.createElement("em", null, "moved"), " over to this account."), s.createElement("p", null, s.createElement(y, null, "VRChat Plus"), "If, for some reason, you're merging an account that has VRChat Plus into another account that ", s.createElement("em", null, "also"), " has VRChat Plus, the resultant account would have ", s.createElement("em", null, "double VRChat Plus"), ", which confers exactly one benefit: it is twice as expensive. We would like to strongly encourage you not to do this, even if you like spending money for no reason. Please cancel one of the two of your VRChat Plus-es before you continue.", " "), s.createElement("p", null, s.createElement(y, null, "Favorites"), "Favorites will merge most cleanly if the new account is completely empty of favorites. If you try to merge while both accounts have favorites, the results may be unpredictable."), s.createElement("p", null, s.createElement(y, null, "Persistence"), "Player persistence related to worlds will also be merged. If your external account has persistence in the same world as your VRChat account, and you merge your external account into your VRChat account, the persistence from your external account will overwrite the persistence on your VRChat account. If you have persistence data that you care about on your VRChat account, we recommend that you visit the world page while on your external account and delete your persistence data before you merge. For more information on how persistence works, please see our documentation", " ", s.createElement("a", {
                    href: "https://creators.vrchat.com/worlds/udon/persistence/#a-specific-world",
                    target: "_blank",
                    rel: "noreferrer"
                }, "here"), "."), s.createElement(m.qX, {
                    type: "warn",
                    title: "Merging is permanent"
                }, s.createElement("p", {
                    className: "mb-0"
                }, "This is ", s.createElement("strong", null, "permanent"), ", ", s.createElement("strong", null, "irreversible"), ", and can only be done using ", s.createElement("strong", null, "one"), " Steam,", " ", s.createElement("strong", null, "one"), " Oculus, and/or ", s.createElement("strong", null, "one"), " Viveport account.", s.createElement("br", null), s.createElement("br", null), "This will also give your Steam, Oculus, or Viveport credentials the ability to log in to ", s.createElement("em", null, "this"), " account.", s.createElement("br", null), s.createElement("br", null), "To prevent issues with merging your player persistence data, ", s.createElement("strong", null, "please close your VRChat client on all platforms before you merge.")))), !O && q && s.createElement(m.qX, {
                    type: "info",
                    title: "Steam Account Merged",
                    slim: !0
                }, s.createElement("strong", null, "Your account has already been merged with a Steam account")), !O && Z && s.createElement(m.qX, {
                    type: "info",
                    title: "Oculus Account Merged",
                    slim: !0
                }, s.createElement("strong", null, "Your account has already been merged with an Oculus account")), !O && N && s.createElement(m.qX, {
                    type: "info",
                    title: "Viveport Account Merged",
                    slim: !0
                }, s.createElement("strong", null, "Your account has already been merged with a Viveport account")), O && s.createElement(m.qX, {
                    type: "info",
                    title: "All Accounts Merged",
                    slim: !0
                }, s.createElement("strong", null, "Your account has already been merged with a Steam, Oculus, and Viveport accounts")))), !O && s.createElement(m.JX, null, s.createElement(m.oI, null, s.createElement("h4", {
                    className: "fw-normal mb-0"
                }, "Enter Merge Token")), s.createElement(m.Ao, null, s.createElement("form", {
                    id: "merge-form",
                    name: "merge-form",
                    className: "nobottommargin",
                    onSubmit: T
                }, s.createElement(m.JX, null, S && s.createElement(m.qX, {
                    type: "error",
                    title: "Failed to Link Accounts"
                }, null == R || null === (e = R.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message, (null == R || null === (t = R.data) || void 0 === t || null === (t = t.error) || void 0 === t || null === (t = t.errors) || void 0 === t ? void 0 : t.length) && s.createElement("ul", null, null == R || null === (n = R.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.errors.map((function(e) {
                    return s.createElement("li", null, e)
                })))), M && s.createElement(m.qX, {
                    type: "success",
                    title: "Successfully Merged Accounts",
                    message: "It may take as long as one hour for your worlds, avatars, and friends to migrate from the old account to the new account."
                }), s.createElement(m.II, {
                    type: "text",
                    id: "mergeToken",
                    name: "mergeToken",
                    placeholder: "Merge Token",
                    className: "flex-1 mb-2",
                    value: v,
                    onChange: P,
                    onKeyUp: P
                }), s.createElement(m.zx, {
                    loading: X,
                    disabled: X,
                    type: "submit",
                    id: "merge-form-submit",
                    name: "merge-form-submit",
                    value: "merge"
                }, "Merge Accounts"))))), !1)
            };
            var p = (0, a.Z)(m.JX, {
                    target: "e1bhmdam5"
                })({
                    name: "1wafcg9",
                    styles: "max-width:1200px;margin:0 auto"
                }),
                y = (0, a.Z)("h5", {
                    target: "e1bhmdam4"
                })({
                    name: "1m52a5b",
                    styles: "border-bottom:none;font-size:1.2rem;font-weight:bold;color:hsl(0, 0%, 60%);&::after{display:none;}"
                })
        }
    }
]);
//# sourceMappingURL=470c17d6f4b3b6fc3f92c2c73056b6e670bcd946de69bd1a503669b48976c6b3.js.map