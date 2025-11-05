(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4862], {
        24862: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => a
            });
            var n = r(54546),
                o = r(67294),
                c = r(96985),
                l = ["./common.js", "./index.js"],
                s = r(27285);
            const a = function() {
                var e = (0, o.useMemo)((function() {
                    return Object.fromEntries(Array.prototype.map.call(s.keys(), (function(e) {
                        if (!l.includes(e)) {
                            var t = e.match(/\.\/(.+)\.js/),
                                r = (0, n.Z)(t, 2),
                                o = (r[0], r[1]);
                            if (!o) throw new Error("Failed to determine basename of ".concat(e, "..."));
                            var c = s(e);
                            if (!c.default) throw new Error("Missing default export in ".concat(e, "..."));
                            return [o, c.default]
                        }
                    })).filter(Boolean))
                }), [s]);
                return o.createElement(o.Fragment, null, o.createElement(c.$4, null, "Icon Sampler"), o.createElement("h2", null, "Icon Sampler"), o.createElement("p", null, "This is a list of all the custom ", o.createElement("a", {
                    href: "https://fontawesome.com/"
                }, "FontAwesome"), "-compatible icons we have included in Appedashi. They live in the repo at ", o.createElement("code", null, "src/common/icons"), "."), o.createElement("p", null, "Icons should be roughly square and contained within their boxes. If you hover over an icon and it expands past the outline, it will behave strangely in text and should be adjusted!"), o.createElement("p", null, "For more information on authoring custom icons, see ", o.createElement("a", {
                    href: "https://vrchat.atlassian.net/wiki/x/DwCuDQ"
                }, "our internal wiki"), "."), o.createElement("div", {
                    className: "tw-grid tw-gap-2",
                    style: {
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))"
                    }
                }, Object.entries(e).map((function(e) {
                    var t = (0, n.Z)(e, 2),
                        r = t[0],
                        l = t[1];
                    return o.createElement("div", {
                        key: r
                    }, o.createElement(c.oI, null, o.createElement("h4", {
                        className: "tw-mb-0"
                    }, l.iconName)), o.createElement(c.Ao, {
                        className: "tw-gap-2"
                    }, o.createElement("div", {
                        className: "tw-w-full tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-2"
                    }, o.createElement(c.$1, {
                        className: "tw-overflow-hidden hover:tw-overflow-visible hover:tw-outline-dashed hover:tw-outline-cyan-500",
                        icon: l,
                        size: "1x"
                    }), o.createElement(c.$1, {
                        className: "tw-overflow-hidden hover:tw-overflow-visible hover:tw-outline-dashed hover:tw-outline-cyan-500",
                        icon: l,
                        size: "3x"
                    }), o.createElement(c.$1, {
                        className: "tw-overflow-hidden hover:tw-overflow-visible hover:tw-outline-dashed hover:tw-outline-cyan-500",
                        icon: l,
                        size: "5x"
                    })), o.createElement("code", null, "import ".concat(r, " from '@icons/").concat(r, "';")), o.createElement("code", null, "<Icon icon={".concat(r, "} />"))))
                }))), o.createElement("pre", null, o.createElement("code", null, JSON.stringify(e, null, "  "))))
            }
        },
        27285: (e, t, r) => {
            var n = {
                "./common.js": 45861,
                "./index.js": 99162,
                "./vrcAgeVerification.js": 91401,
                "./vrcCosmetics.js": 25428,
                "./vrcCredits.js": 50249,
                "./vrcEmoji.js": 3447,
                "./vrcGhost.js": 73948,
                "./vrcGroup.js": 7503,
                "./vrcGroupPlus.js": 55833,
                "./vrcGroupPublic.js": 33371,
                "./vrcImpostor.js": 93007,
                "./vrcInventory.js": 98648,
                "./vrcItem.js": 56209,
                "./vrcJoin.js": 76170,
                "./vrcListingTypePermanent.js": 14825,
                "./vrcPlus.js": 62898,
                "./vrcPremium.js": 84841,
                "./vrcPrint.js": 92177,
                "./vrcProductKey.js": 81512,
                "./vrcProductTicket.js": 49524,
                "./vrcShield.js": 1152,
                "./vrcShieldVerified.js": 79195,
                "./vrcSticker.js": 6344,
                "./vrcSubscriptions.js": 49959,
                "./vrcUser.js": 10679,
                "./vrcWorld.js": 62427,
                "./vrcWorldStars.js": 91158
            };

            function o(e) {
                var t = c(e);
                return r(t)
            }

            function c(e) {
                if (!r.o(n, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return n[e]
            }
            o.keys = function() {
                return Object.keys(n)
            }, o.resolve = c, e.exports = o, o.id = 27285
        }
    }
]);
//# sourceMappingURL=7c684322859a9b50d9e4ac292bf9d4a19268e9f13555981f5ba1a5884d421f71.js.map