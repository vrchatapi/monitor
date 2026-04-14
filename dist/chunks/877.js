"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [877], {
        89468: (e, t) => {
            var r = "caret-up",
                a = [],
                c = "f0d8",
                n = "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [320, 512, a, c, n]
            }, t.l1 = t.DF
        },
        80275: (e, t, r) => {
            var a = r(16284);
            t.DF = {
                prefix: a.prefix,
                iconName: a.iconName,
                icon: [a.width, a.height, a.aliases, a.unicode, a.svgPathData]
            }, t.cN = t.DF, a.prefix, a.iconName, a.width, a.height, a.aliases, a.unicode, a.svgPathData, a.aliases
        },
        7747: (e, t) => {
            var r = "share-from-square",
                a = [61509, "share-square"],
                c = "f14d",
                n = "M352 224l-46.5 0c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8l-2.5 0c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144l80 0 0-61.3C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9L548.1 133.3c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2l-3.7 0c-17.7 0-32-14.3-32-32l0-64zM80 96c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 48c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 112C0 67.8 35.8 32 80 32l48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 96z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [576, 512, a, c, n]
            }, t.Dr = t.DF
        },
        27593: (e, t) => {
            var r = "user-slash",
                a = [],
                c = "f506",
                n = "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L353.3 251.6C407.9 237 448 187.2 448 128C448 57.3 390.7 0 320 0C250.2 0 193.5 55.8 192 125.2L38.8 5.1zM264.3 304.3C170.5 309.4 96 387.2 96 482.3c0 16.4 13.3 29.7 29.7 29.7l388.6 0c3.9 0 7.6-.7 11-2.1l-261-205.6z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [640, 512, a, c, n]
            }, t.wO = t.DF
        },
        63153: (e, t, r) => {
            var a = r(87695);
            t.DF = {
                prefix: a.prefix,
                iconName: a.iconName,
                icon: [a.width, a.height, a.aliases, a.unicode, a.svgPathData]
            }, t.$9 = t.DF, a.prefix, a.iconName, a.width, a.height, a.aliases, a.unicode, a.svgPathData, a.aliases
        },
        36828: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => d
            });
            var a = r(4942),
                c = r(54546),
                n = r(4965),
                l = r(9970),
                o = r(67294),
                i = r(80988),
                s = r(68800),
                u = r(74792),
                f = r(50141),
                p = r(83807);

            function w(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const d = function() {
                var e = (0, p.JZ)(),
                    t = e.playerModerations,
                    r = e.isLoaded,
                    n = (e.fetchModerations, (0, o.useState)(Object.fromEntries(Object.values(u).map((function(e) {
                        return [e, 20]
                    }))))),
                    w = (0, c.Z)(n, 2),
                    d = w[0],
                    x = w[1],
                    v = (0, s.xY)(),
                    g = (0, c.Z)(v, 1)[0],
                    b = (0, o.useRef)(null),
                    O = Object.values(u).filter((function(e) {
                        var r;
                        return 0 !== (null == t || null === (r = t[e]) || void 0 === r ? void 0 : r.total)
                    })),
                    y = (0, o.useMemo)((function() {
                        return t ? O.reduce((function(e, r) {
                            return e[r] = t[r].moderations.slice(0, d[r]), e
                        }), {}) : {}
                    }), [d, t]);
                if (!r) return null;
                if (0 === O.length) return o.createElement("div", {
                    className: "center-block text-center"
                }, o.createElement(i.$4, null, "Blocks & Mutes"), o.createElement("h2", null, "No Player Moderations To Show"));
                return o.createElement(h, {
                    ref: b
                }, o.createElement(i.$4, null, "Blocks & Mutes"), o.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-8 tw-w-full md:tw-flex-row tw-flex-wrap"
                }, O.map((function(e) {
                    return o.createElement("div", {
                        className: "tw-p-8 tw-flex tw-flex-col tw-rounded-3xl tw-bg-darker-grey tw-gap-8",
                        key: "pmod-group-".concat(e)
                    }, o.createElement("div", {
                        className: "tw-flex tw-flex-row tw-flex-wrap tw-gap-2"
                    }, o.createElement("h2", {
                        className: "tw-mb-0 tw-flex-1 tw-whitespace-nowrap"
                    }, function(e, t) {
                        switch (e) {
                            case u.BLOCK:
                                return "Blocked (".concat(t, ")");
                            case u.MUTE:
                                return "Muted (".concat(t, ")");
                            case u.UNMUTE:
                                return "Unmuted (".concat(t, ")");
                            default:
                                return ""
                        }
                    }(e, t[e].total)), o.createElement(i.zx, {
                        neutral: !0,
                        transparent: !0,
                        title: "Clear ".concat(e, "s"),
                        onClick: function() {
                            return function(e) {
                                confirm("Are you sure that you want to clear all ".concat(e, "s?")) && g({
                                    type: e
                                })
                            }(e)
                        }
                    }, o.createElement(i.$1, {
                        icon: l.EO,
                        className: "tw-text-error-message-red"
                    }), " Clear all")), o.createElement("div", {
                        className: "tw-flex tw-flex-col tw-gap-4"
                    }, y[e].map((function(e) {
                        return o.createElement("div", {
                            key: e.id
                        }, o.createElement(f.Z, {
                            userId: e.targetUserId,
                            moderateControls: !0
                        }))
                    }))), t[e].total > d[e] && o.createElement(i.zx, {
                        onClick: function() {
                            return function(e) {
                                x(m(m({}, d), {}, (0, a.Z)({}, e, d[e] + 20)))
                            }(e)
                        }
                    }, "Load More"))
                }))))
            };
            var h = (0, n.Z)("div", {
                target: "e10fzxzn0"
            })({
                name: "5kov97",
                styles: "display:flex;flex-wrap:wrap"
            })
        }
    }
]);
//# sourceMappingURL=993741d535a79c69dd03baba51351e4721cf8f5acf2bc80dd65c1b9edc811fd3.js.map