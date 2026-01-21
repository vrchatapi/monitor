"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2027], {
        12027: (e, t, r) => {
            r.d(t, {
                Z: () => w
            });
            var l = r(42138),
                o = r(4965),
                a = r(68055),
                n = r(83505),
                i = r(70917),
                s = r(45697),
                c = r.n(s),
                u = r(67294),
                d = r(74392),
                m = r(96273),
                p = r(96985),
                b = r(76418);
            var v = function(e) {
                var t = e.favoriteGroups,
                    r = void 0 === t ? [] : t,
                    o = e.selectedGroup,
                    i = e.onGroupClick,
                    s = e.className,
                    c = void 0 === s ? "" : s,
                    v = e.neutral,
                    w = void 0 !== v && v,
                    g = e.isOpen,
                    f = void 0 !== g && g,
                    y = e.ignoreDisable,
                    E = void 0 !== y && y,
                    N = e.type,
                    P = (0, d.c)(),
                    C = P.isLoading,
                    G = P.isNeverHadVrcPlusUser,
                    F = (0, l.Z)(r).sort((function(e, t) {
                        return e.isVrcPlus !== t.isVrcPlus ? e.isVrcPlus ? 1 : -1 : (e.name || "").localeCompare(t.name || "")
                    }));
                return f ? C ? u.createElement(x, {
                    className: (0, n.cx)(c),
                    neutral: w,
                    role: "listbox",
                    "aria-label": "Favorite Collection List"
                }, u.createElement("div", null, "Loading...")) : u.createElement(x, {
                    className: (0, n.cx)(c),
                    neutral: w,
                    role: "listbox",
                    "aria-label": "Favorite Collection List"
                }, null == F ? void 0 : F.map((function(e, t) {
                    var r, l;
                    return u.createElement(h, {
                        key: (null == e ? void 0 : e.id) || t,
                        onClick: function(t) {
                            t.stopPropagation(), null != e && e.isDisabled && !E || i(e)
                        },
                        isDisabled: (null == e ? void 0 : e.isDisabled) && !E,
                        neutral: w,
                        role: "option"
                    }, u.createElement(p.X2, {
                        className: "align-items-center tw-text-md"
                    }, u.createElement(k, {
                        isSelected: o === (null == e ? void 0 : e.name),
                        icon: a.LE,
                        className: "tw-mr-2"
                    }), (0, m.Gf)({
                        group: e,
                        type: null == e ? void 0 : e.type
                    }), (null == e ? void 0 : e.isVrcPlus) && u.createElement(b.Z, {
                        className: "tw-mx-2"
                    })), u.createElement("div", {
                        className: "tw-text-xs"
                    }, null !== (r = null == e ? void 0 : e.numFavorites) && void 0 !== r ? r : 0, " / ", null !== (l = null == e ? void 0 : e.maxFavoritesPerGroup) && void 0 !== l ? l : 100))
                })), G && "world" === N && u.createElement("div", {
                    className: "tw-mb-2"
                }, u.createElement("a", {
                    className: " tw-text-base tw-bg-vrc-plus-bg tw-mx-4 tw-my-2 tw-rounded-lg tw-text-vrc-plus-yellow tw-px-3 tw-py-2 tw-border-solid tw-border-vrc-plus-yellow tw-border-2 tw-leading-6 tw-cursor-pointer tw-block hover:tw-no-underline ",
                    href: "https://hello.vrchat.com/vrchatplus",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Unlock more Favorite Worlds ", u.createElement("br", null), "slots with ", u.createElement(b.Z, null)))) : null
            };
            v.propTypes = {
                favoriteGroups: c().arrayOf(c().shape({
                    id: c().string,
                    name: c().string,
                    displayName: c().string,
                    isVrcPlus: c().bool,
                    isDisabled: c().bool,
                    numFavorites: c().number,
                    maxFavoritesPerGroup: c().number
                })),
                selectedGroup: c().string,
                onGroupClick: c().func.isRequired,
                className: c().string,
                neutral: c().bool,
                isOpen: c().bool,
                type: c().string
            };
            const w = v;
            var g = {
                    name: "i7nbsx",
                    styles: "background:hsl(0, 0%, 20%);color:#fff;border-color:hsl(0, 0%, 40%)"
                },
                x = (0, o.Z)(p.JX, {
                    target: "e13ma13m2"
                })("position:relative;border:#086c84 solid 2px;border-radius:4px 4px 0 0;background:#064b5c;color:#6ae3f9;box-sizing:border-box;position:absolute;width:calc(100% + 4px);left:-2px;z-index:2;min-height:1rem;", (function(e) {
                    return e.neutral ? g : ""
                }), ";"),
                f = {
                    name: "w02bvw",
                    styles: "cursor:not-allowed;opacity:0.5"
                },
                h = (0, o.Z)(p.X2, {
                    target: "e13ma13m1"
                })("padding:0.5rem 0.6rem;align-items:center;transition:background-color 150ms ease-in-out;justify-content:space-between;align-items:center;", (function(e) {
                    var t = e.isDisabled,
                        r = e.neutral;
                    return t ? f : (0, i.iv)("cursor:pointer;&:hover{background-color:", r ? "hsl(0, 0%, 40%)" : "#086c84", ";svg{opacity:0.5;}}", "")
                }), ";"),
                y = {
                    name: "1d9ftqx",
                    styles: "opacity:1!important"
                },
                k = (0, o.Z)(p.$1, {
                    shouldForwardProp: function(e) {
                        return "isSelected" !== e
                    },
                    target: "e13ma13m0"
                })("opacity:0;", (function(e) {
                    return e.isSelected ? y : ""
                }), ";")
        },
        76418: (e, t, r) => {
            r.d(t, {
                Z: () => o
            });
            var l = r(67294);
            const o = function(e) {
                var t = e.className,
                    r = void 0 === t ? "" : t;
                return l.createElement("output", {
                    className: "tw-bg-black tw-px-2\n      tw-text-vrc-plus-yellow tw-rounded-full tw-text-[11px]\n      tw-border-vrc-plus-yellow tw-border-solid tw-border-2\n      tw-italic tw-whitespace-nowrap\n      ".concat(r),
                    "aria-label": "VRC Plus"
                }, "VRC +")
            }
        }
    }
]);
//# sourceMappingURL=8ab47416f8a041c185d2aedb22da6d216558c974d97c6bc8d67a28c239369a1c.js.map