"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [879], {
        20879(e, t, r) {
            r.r(t), r.d(t, {
                default: () => O
            });
            var n = r(64467),
                a = r(82544),
                l = r(58168),
                c = r(80045),
                o = r(70129),
                u = r(63461),
                s = r(96540),
                i = r(71661),
                f = r(9527),
                w = r(74818),
                d = r(25538),
                p = r(93930),
                m = r(78502),
                b = r(46078),
                g = ["userId"];

            function y(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(r), !0).forEach(function(t) {
                        (0, n.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var v = function(e) {
                var t = e.userId,
                    r = (0, c.A)(e, g),
                    n = (0, b.M7)({
                        userId: t
                    }),
                    a = n.data,
                    o = n.isLoading,
                    u = n.isError;
                return o ? s.createElement(d.A, null) : u || !a ? s.createElement("div", {
                    className: "tw-p-3 tw-bg-grey tw-rounded-lg tw-text-light-grey tw-py-10"
                }, "Failed to load user") : s.createElement(p.A, (0, l.A)({
                    userData: a
                }, r))
            };
            const O = function() {
                var e = (0, m.CT)(),
                    t = e.playerModerations,
                    r = e.isLoaded,
                    l = (e.fetchModerations, (0, s.useState)(Object.fromEntries(Object.values(w).map(function(e) {
                        return [e, 20]
                    })))),
                    c = (0, a.A)(l, 2),
                    o = c[0],
                    d = c[1],
                    p = (0, f.TQ)(),
                    b = (0, a.A)(p, 1)[0],
                    g = (0, s.useRef)(null),
                    y = Object.values(w).filter(function(e) {
                        var r;
                        return 0 !== (null == t || null === (r = t[e]) || void 0 === r ? void 0 : r.total)
                    }),
                    O = (0, s.useMemo)(function() {
                        return t ? y.reduce(function(e, r) {
                            return e[r] = t[r].moderations.slice(0, o[r]), e
                        }, {}) : {}
                    }, [o, t]);
                if (!r) return null;
                if (0 === y.length) return s.createElement("div", {
                    className: "center-block text-center"
                }, s.createElement(i.Qc, null, "Blocks & Mutes"), s.createElement("h2", null, "No Player Moderations To Show"));
                return s.createElement(x, {
                    ref: g
                }, s.createElement(i.Qc, null, "Blocks & Mutes"), s.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-8 tw-w-full md:tw-flex-row tw-flex-wrap"
                }, y.map(function(e) {
                    return s.createElement("div", {
                        className: "tw-p-8 tw-flex tw-flex-col tw-rounded-3xl tw-bg-darker-grey tw-gap-8",
                        key: "pmod-group-".concat(e)
                    }, s.createElement("div", {
                        className: "tw-flex tw-flex-row tw-flex-wrap tw-gap-2"
                    }, s.createElement("h2", {
                        className: "tw-mb-0 tw-flex-1 tw-whitespace-nowrap"
                    }, function(e, t) {
                        switch (e) {
                            case w.BLOCK:
                                return "Blocked (".concat(t, ")");
                            case w.MUTE:
                                return "Muted (".concat(t, ")");
                            case w.UNMUTE:
                                return "Unmuted (".concat(t, ")");
                            default:
                                return ""
                        }
                    }(e, t[e].total)), s.createElement(i.$n, {
                        neutral: !0,
                        transparent: !0,
                        title: "Clear ".concat(e, "s"),
                        onClick: function() {
                            return function(e) {
                                confirm("Are you sure that you want to clear all ".concat(e, "s?")) && b({
                                    type: e
                                })
                            }(e)
                        }
                    }, s.createElement(i.M2, {
                        icon: u.Qb,
                        className: "tw-text-error-message-red"
                    }), " Clear all")), s.createElement("div", {
                        className: "tw-flex tw-flex-col tw-gap-4"
                    }, O[e].map(function(e) {
                        return s.createElement("div", {
                            key: e.id
                        }, s.createElement(v, {
                            userId: e.targetUserId,
                            moderateControls: !0
                        }))
                    })), t[e].total > o[e] && s.createElement(i.$n, {
                        onClick: function() {
                            return function(e) {
                                d(E(E({}, o), {}, (0, n.A)({}, e, o[e] + 20)))
                            }(e)
                        }
                    }, "Load More"))
                })))
            };
            var x = (0, o.A)("div", {
                target: "e10fzxzn0"
            })({
                name: "5kov97",
                styles: "display:flex;flex-wrap:wrap"
            })
        }
    }
]);
//# sourceMappingURL=7b20da0953ef0f8ff52e9fd7609eee1b3cbdc90c687527298e75c91107b084ef.js.map