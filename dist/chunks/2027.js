"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2027], {
        12027: (e, r, t) => {
            t.d(r, {
                Z: () => w
            });
            var l = t(42138),
                o = t(4965),
                a = t(68055),
                n = t(83505),
                i = t(70917),
                s = t(45697),
                c = t.n(s),
                u = t(67294),
                d = t(74392),
                m = t(96273),
                p = t(48313),
                b = t(96985);
            var v = function(e) {
                var r = e.favoriteGroups,
                    t = void 0 === r ? [] : r,
                    o = e.selectedGroup,
                    i = e.onGroupClick,
                    s = e.className,
                    c = void 0 === s ? "" : s,
                    v = e.neutral,
                    w = void 0 !== v && v,
                    g = e.isOpen,
                    x = void 0 !== g && g,
                    y = e.ignoreDisable,
                    E = void 0 !== y && y,
                    N = e.type,
                    P = (0, d.c)(),
                    G = P.isLoading,
                    C = P.isNeverHadVrcPlusUser,
                    F = (0, l.Z)(t).sort((function(e, r) {
                        return e.isVrcPlus !== r.isVrcPlus ? e.isVrcPlus ? 1 : -1 : (e.name || "").localeCompare(r.name || "")
                    }));
                return x ? G ? u.createElement(f, {
                    className: (0, n.cx)(c),
                    neutral: w,
                    role: "listbox",
                    "aria-label": "Favorite Collection List"
                }, u.createElement("div", null, "Loading...")) : u.createElement(f, {
                    className: (0, n.cx)(c),
                    neutral: w,
                    role: "listbox",
                    "aria-label": "Favorite Collection List"
                }, null == F ? void 0 : F.map((function(e, r) {
                    var t, l;
                    return u.createElement(h, {
                        key: (null == e ? void 0 : e.id) || r,
                        onClick: function(r) {
                            r.stopPropagation(), null != e && e.isDisabled && !E || i(e)
                        },
                        isDisabled: (null == e ? void 0 : e.isDisabled) && !E,
                        neutral: w,
                        role: "option"
                    }, u.createElement(b.X2, {
                        className: "align-items-center tw-text-md"
                    }, u.createElement(k, {
                        isSelected: o === (null == e ? void 0 : e.name),
                        icon: a.LE,
                        className: "tw-mr-2"
                    }), (0, m.Gf)({
                        group: e,
                        type: null == e ? void 0 : e.type
                    }), (null == e ? void 0 : e.isVrcPlus) && u.createElement(p.Z, {
                        className: "tw-mx-2"
                    })), u.createElement("div", {
                        className: "tw-text-xs"
                    }, null !== (t = null == e ? void 0 : e.numFavorites) && void 0 !== t ? t : 0, " / ", null !== (l = null == e ? void 0 : e.maxFavoritesPerGroup) && void 0 !== l ? l : 100))
                })), C && "world" === N && u.createElement("div", {
                    className: "tw-mb-2"
                }, u.createElement("a", {
                    className: " tw-text-base tw-bg-vrc-plus-bg tw-mx-4 tw-my-2 tw-rounded-lg tw-text-vrc-plus-yellow tw-px-3 tw-py-2 tw-border-solid tw-border-vrc-plus-yellow tw-border-2 tw-leading-6 tw-cursor-pointer tw-block hover:tw-no-underline ",
                    href: "https://hello.vrchat.com/vrchatplus",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Unlock more Favorite Worlds ", u.createElement("br", null), "slots with ", u.createElement(p.Z, null)))) : null
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
                f = (0, o.Z)(b.JX, {
                    target: "e13ma13m2"
                })("position:relative;border:#086c84 solid 2px;border-radius:4px 4px 0 0;background:#064b5c;color:#6ae3f9;box-sizing:border-box;position:absolute;width:calc(100% + 4px);left:-2px;z-index:2;min-height:1rem;", (function(e) {
                    return e.neutral ? g : ""
                }), ";"),
                x = {
                    name: "w02bvw",
                    styles: "cursor:not-allowed;opacity:0.5"
                },
                h = (0, o.Z)(b.X2, {
                    target: "e13ma13m1"
                })("padding:0.5rem 0.6rem;align-items:center;transition:background-color 150ms ease-in-out;justify-content:space-between;align-items:center;", (function(e) {
                    var r = e.isDisabled,
                        t = e.neutral;
                    return r ? x : (0, i.iv)("cursor:pointer;&:hover{background-color:", t ? "hsl(0, 0%, 40%)" : "#086c84", ";svg{opacity:0.5;}}", "")
                }), ";"),
                y = {
                    name: "1d9ftqx",
                    styles: "opacity:1!important"
                },
                k = (0, o.Z)(b.$1, {
                    shouldForwardProp: function(e) {
                        return "isSelected" !== e
                    },
                    target: "e13ma13m0"
                })("opacity:0;", (function(e) {
                    return e.isSelected ? y : ""
                }), ";")
        }
    }
]);
//# sourceMappingURL=b19462a98206adb99fad2d139553c31996d559a85970bbe882b07efc8d231217.js.map