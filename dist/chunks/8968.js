(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8968], {
        68968(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: () => l
            });
            var n = t(82544),
                c = t(96540),
                o = t(71661),
                s = ["./common.js", "./index.js"],
                i = t(7854);
            const l = function() {
                var e = (0, c.useMemo)(function() {
                    return Object.fromEntries(Array.prototype.map.call(i.keys(), function(e) {
                        if (!s.includes(e)) {
                            var r = e.match(/\.\/(.+)\.js/),
                                t = (0, n.A)(r, 2),
                                c = (t[0], t[1]);
                            if (!c) throw new Error("Failed to determine basename of ".concat(e, "..."));
                            var o = i(e);
                            if (!o.default) throw new Error("Missing default export in ".concat(e, "..."));
                            return [c, o.default]
                        }
                    }).filter(Boolean))
                }, [i]);
                return c.createElement(c.Fragment, null, c.createElement(o.Qc, null, "Icon Sampler"), c.createElement("h2", null, "Icon Sampler"), c.createElement("p", null, "This is a list of all the custom ", c.createElement("a", {
                    href: "https://fontawesome.com/"
                }, "FontAwesome"), "-compatible icons we have included in Appedashi. They live in the repo at ", c.createElement("code", null, "src/common/icons"), "."), c.createElement("p", null, "Icons should be roughly square and contained within their boxes. If you hover over an icon and it expands past the outline, it will behave strangely in text and should be adjusted!"), c.createElement("p", null, "For more information on authoring custom icons, see ", c.createElement("a", {
                    href: "https://vrchat.atlassian.net/wiki/x/DwCuDQ"
                }, "our internal wiki"), "."), c.createElement("div", {
                    className: "tw-grid tw-gap-2",
                    style: {
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))"
                    }
                }, Object.entries(e).map(function(e) {
                    var r = (0, n.A)(e, 2),
                        t = r[0],
                        s = r[1];
                    return c.createElement("div", {
                        key: t
                    }, c.createElement(o.N3, null, c.createElement("h4", {
                        className: "tw-mb-0"
                    }, s.iconName)), c.createElement(o.BW, {
                        className: "tw-gap-2"
                    }, c.createElement("div", {
                        className: "tw-w-full tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-2"
                    }, c.createElement(o.M2, {
                        className: "tw-overflow-hidden hover:tw-overflow-visible hover:tw-outline-dashed hover:tw-outline-cyan-500",
                        icon: s,
                        size: "1x"
                    }), c.createElement(o.M2, {
                        className: "tw-overflow-hidden hover:tw-overflow-visible hover:tw-outline-dashed hover:tw-outline-cyan-500",
                        icon: s,
                        size: "3x"
                    }), c.createElement(o.M2, {
                        className: "tw-overflow-hidden hover:tw-overflow-visible hover:tw-outline-dashed hover:tw-outline-cyan-500",
                        icon: s,
                        size: "5x"
                    })), c.createElement("code", null, "import ".concat(t, " from '@icons/").concat(t, "';")), c.createElement("code", null, "<Icon icon={".concat(t, "} />"))))
                })), c.createElement("pre", null, c.createElement("code", null, JSON.stringify(e, null, "  "))))
            }
        },
        7854(e, r, t) {
            var n = {
                "./common.js": 98984,
                "./index.js": 10343,
                "./vrcAddFriend.js": 48437,
                "./vrcAgeVerification.js": 7382,
                "./vrcAnimated.js": 87081,
                "./vrcCollapseRight.js": 97773,
                "./vrcCosmetics.js": 37510,
                "./vrcCredits.js": 39848,
                "./vrcEmoji.js": 32124,
                "./vrcFriends.js": 40259,
                "./vrcGhost.js": 70177,
                "./vrcGroup.js": 75909,
                "./vrcGroupPlus.js": 65281,
                "./vrcGroupPublic.js": 31744,
                "./vrcGroupRepresent.js": 15185,
                "./vrcImpostor.js": 25013,
                "./vrcInventory.js": 89934,
                "./vrcItem.js": 21627,
                "./vrcJoin.js": 52336,
                "./vrcListingTypePermanent.js": 88270,
                "./vrcLocationWorld.js": 46023,
                "./vrcMobile.js": 10302,
                "./vrcNotRepresenting.js": 77251,
                "./vrcOffline.js": 5469,
                "./vrcPadLock.js": 96360,
                "./vrcPendingFriend.js": 62561,
                "./vrcPlus.js": 96892,
                "./vrcPortal.js": 66234,
                "./vrcPremium.js": 75499,
                "./vrcPrint.js": 89205,
                "./vrcPrivateWorld.js": 16181,
                "./vrcProductKey.js": 15770,
                "./vrcProductTicket.js": 95169,
                "./vrcRemoveFriend.js": 32600,
                "./vrcRepresenting.js": 35256,
                "./vrcShield.js": 55533,
                "./vrcShieldVerified.js": 52317,
                "./vrcSticker.js": 99417,
                "./vrcSubscriptions.js": 44988,
                "./vrcUser.js": 27751,
                "./vrcVerified.js": 51564,
                "./vrcWorld.js": 22978,
                "./vrcWorldStars.js": 86797
            };

            function c(e) {
                var r = o(e);
                return t(r)
            }

            function o(e) {
                if (!t.o(n, e)) {
                    var r = new Error("Cannot find module '" + e + "'");
                    throw r.code = "MODULE_NOT_FOUND", r
                }
                return n[e]
            }
            c.keys = function() {
                return Object.keys(n)
            }, c.resolve = o, e.exports = c, c.id = 7854
        }
    }
]);
//# sourceMappingURL=d87066c8bf0a6d221499a6bab2dfaca4a56443d937d4883853c122eb79ec4649.js.map