(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4862], {
        24862: (e, r, t) => {
            "use strict";
            t.r(r), t.d(r, {
                default: () => l
            });
            var n = t(54546),
                o = t(67294),
                c = t(80988),
                s = ["./common.js", "./index.js"],
                i = t(27285);
            const l = function() {
                var e = (0, o.useMemo)((function() {
                    return Object.fromEntries(Array.prototype.map.call(i.keys(), (function(e) {
                        if (!s.includes(e)) {
                            var r = e.match(/\.\/(.+)\.js/),
                                t = (0, n.Z)(r, 2),
                                o = (t[0], t[1]);
                            if (!o) throw new Error("Failed to determine basename of ".concat(e, "..."));
                            var c = i(e);
                            if (!c.default) throw new Error("Missing default export in ".concat(e, "..."));
                            return [o, c.default]
                        }
                    })).filter(Boolean))
                }), [i]);
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
                    var r = (0, n.Z)(e, 2),
                        t = r[0],
                        s = r[1];
                    return o.createElement("div", {
                        key: t
                    }, o.createElement(c.oI, null, o.createElement("h4", {
                        className: "tw-mb-0"
                    }, s.iconName)), o.createElement(c.Ao, {
                        className: "tw-gap-2"
                    }, o.createElement("div", {
                        className: "tw-w-full tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-2"
                    }, o.createElement(c.$1, {
                        className: "tw-overflow-hidden hover:tw-overflow-visible hover:tw-outline-dashed hover:tw-outline-cyan-500",
                        icon: s,
                        size: "1x"
                    }), o.createElement(c.$1, {
                        className: "tw-overflow-hidden hover:tw-overflow-visible hover:tw-outline-dashed hover:tw-outline-cyan-500",
                        icon: s,
                        size: "3x"
                    }), o.createElement(c.$1, {
                        className: "tw-overflow-hidden hover:tw-overflow-visible hover:tw-outline-dashed hover:tw-outline-cyan-500",
                        icon: s,
                        size: "5x"
                    })), o.createElement("code", null, "import ".concat(t, " from '@icons/").concat(t, "';")), o.createElement("code", null, "<Icon icon={".concat(t, "} />"))))
                }))), o.createElement("pre", null, o.createElement("code", null, JSON.stringify(e, null, "  "))))
            }
        },
        27285: (e, r, t) => {
            var n = {
                "./common.js": 45861,
                "./index.js": 82728,
                "./vrcAddFriend.js": 47554,
                "./vrcAgeVerification.js": 91401,
                "./vrcAnimated.js": 50466,
                "./vrcCollapseRight.js": 88333,
                "./vrcCosmetics.js": 25428,
                "./vrcCredits.js": 50249,
                "./vrcEmoji.js": 3447,
                "./vrcFriends.js": 82468,
                "./vrcGhost.js": 73948,
                "./vrcGroup.js": 7503,
                "./vrcGroupPlus.js": 55833,
                "./vrcGroupPublic.js": 33371,
                "./vrcGroupRepresent.js": 47199,
                "./vrcImpostor.js": 93007,
                "./vrcInventory.js": 98648,
                "./vrcItem.js": 56209,
                "./vrcJoin.js": 76170,
                "./vrcListingTypePermanent.js": 14825,
                "./vrcLocationWorld.js": 74974,
                "./vrcMobile.js": 15662,
                "./vrcNotRepresenting.js": 86169,
                "./vrcOffline.js": 41309,
                "./vrcPadLock.js": 54073,
                "./vrcPendingFriend.js": 84923,
                "./vrcPlus.js": 62898,
                "./vrcPortal.js": 86153,
                "./vrcPremium.js": 84841,
                "./vrcPrint.js": 92177,
                "./vrcPrivateWorld.js": 4815,
                "./vrcProductKey.js": 81512,
                "./vrcProductTicket.js": 49524,
                "./vrcRemoveFriend.js": 64873,
                "./vrcRepresenting.js": 504,
                "./vrcShield.js": 1152,
                "./vrcShieldVerified.js": 79195,
                "./vrcSticker.js": 6344,
                "./vrcSubscriptions.js": 49959,
                "./vrcUser.js": 10679,
                "./vrcWorld.js": 62427,
                "./vrcWorldStars.js": 91158
            };

            function o(e) {
                var r = c(e);
                return t(r)
            }

            function c(e) {
                if (!t.o(n, e)) {
                    var r = new Error("Cannot find module '" + e + "'");
                    throw r.code = "MODULE_NOT_FOUND", r
                }
                return n[e]
            }
            o.keys = function() {
                return Object.keys(n)
            }, o.resolve = c, e.exports = o, o.id = 27285
        }
    }
]);
//# sourceMappingURL=004f0351cda916a2d59455db138f2c7fb39408b4f7f19b583f4e7c31d351a9ad.js.map