(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8968], {
        68968(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: () => l
            });
            var n = t(82544),
                o = t(96540),
                c = t(15033),
                s = ["./common.js", "./index.js"],
                i = t(7854);
            const l = function() {
                var e = (0, o.useMemo)(function() {
                    return Object.fromEntries(Array.prototype.map.call(i.keys(), function(e) {
                        if (!s.includes(e)) {
                            var r = e.match(/\.\/(.+)\.js/),
                                t = (0, n.A)(r, 2),
                                o = (t[0], t[1]);
                            if (!o) throw new Error("Failed to determine basename of ".concat(e, "..."));
                            var c = i(e);
                            if (!c.default) throw new Error("Missing default export in ".concat(e, "..."));
                            return [o, c.default]
                        }
                    }).filter(Boolean))
                }, [i]);
                return o.createElement(o.Fragment, null, o.createElement(c.Qc, null, "Icon Sampler"), o.createElement("h2", null, "Icon Sampler"), o.createElement("p", null, "This is a list of all the custom ", o.createElement("a", {
                    href: "https://fontawesome.com/"
                }, "FontAwesome"), "-compatible icons we have included in Appedashi. They live in the repo at ", o.createElement("code", null, "src/common/icons"), "."), o.createElement("p", null, "Icons should be roughly square and contained within their boxes. If you hover over an icon and it expands past the outline, it will behave strangely in text and should be adjusted!"), o.createElement("p", null, "For more information on authoring custom icons, see ", o.createElement("a", {
                    href: "https://vrchat.atlassian.net/wiki/x/DwCuDQ"
                }, "our internal wiki"), "."), o.createElement("div", {
                    className: "tw-grid tw-gap-2",
                    style: {
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))"
                    }
                }, Object.entries(e).map(function(e) {
                    var r = (0, n.A)(e, 2),
                        t = r[0],
                        s = r[1];
                    return o.createElement("div", {
                        key: t
                    }, o.createElement(c.N3, null, o.createElement("h4", {
                        className: "tw-mb-0"
                    }, s.iconName)), o.createElement(c.BW, {
                        className: "tw-gap-2"
                    }, o.createElement("div", {
                        className: "tw-w-full tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-2"
                    }, o.createElement(c.M2, {
                        className: "tw-overflow-hidden hover:tw-overflow-visible hover:tw-outline-dashed hover:tw-outline-cyan-500",
                        icon: s,
                        size: "1x"
                    }), o.createElement(c.M2, {
                        className: "tw-overflow-hidden hover:tw-overflow-visible hover:tw-outline-dashed hover:tw-outline-cyan-500",
                        icon: s,
                        size: "3x"
                    }), o.createElement(c.M2, {
                        className: "tw-overflow-hidden hover:tw-overflow-visible hover:tw-outline-dashed hover:tw-outline-cyan-500",
                        icon: s,
                        size: "5x"
                    })), o.createElement("code", null, "import ".concat(t, " from '@icons/").concat(t, "';")), o.createElement("code", null, "<Icon icon={".concat(t, "} />"))))
                })), o.createElement("pre", null, o.createElement("code", null, JSON.stringify(e, null, "  "))))
            }
        },
        7854(e, r, t) {
            var n = {
                "./common.js": 98984,
                "./index.js": 27070,
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
                "./vrcWorld.js": 22978,
                "./vrcWorldStars.js": 86797
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
            }, o.resolve = c, e.exports = o, o.id = 7854
        }
    }
]);
//# sourceMappingURL=1d703e40b5e737feab112de71c3294493651f0b768b21dc18e357f6d0811405f.js.map