"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [147], {
        147: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => He
            });
            var n = r(15861),
                a = r(54546),
                l = r(68871),
                o = r(92332),
                i = r(27593),
                s = r(89148),
                c = r(71421),
                w = r(7747),
                u = r(7371),
                d = r(63153),
                m = r(27879),
                f = r(64687),
                p = r.n(f),
                g = r(67294),
                v = r(32981),
                b = r(89250),
                h = r(25402),
                x = r(64258),
                y = r(21464),
                E = r(17219),
                N = r(62437),
                k = r(22202),
                I = r(34226),
                S = r(60006),
                F = r(64358),
                C = r(60992),
                Z = r(96157),
                T = r(46357),
                L = r(76553),
                R = r(81511),
                U = r(80873),
                A = r(79655),
                P = r(67992),
                M = r(45697),
                q = r.n(M),
                j = function(e) {
                    var t = e.imgSrc,
                        r = e.imgAlt,
                        n = e.displayName,
                        a = e.profilePicUrl,
                        l = e.locationMessage,
                        o = e.location,
                        i = e.userStatus,
                        s = e.receivesMobileNotifications;
                    return g.createElement("div", {
                        className: "tw-p-6 tw-bg-cover tw-rounded-lg tw-my-6 tw-bg-grey/90 tw-relative tw-backdrop-blur-md tw-w-full"
                    }, g.createElement("div", {
                        className: "tw-grid tw-grid-flow-row-dense tw-grid-cols-3 tw-grid-rows-1 tw-gap-6 md:tw-grid-cols-[256px_auto_auto]"
                    }, g.createElement("div", {
                        className: "tw-relative tw-max-w-[256px]"
                    }, g.createElement("img", {
                        src: t,
                        alt: r,
                        className: "tw-rounded-lg"
                    })), g.createElement("div", {
                        className: "tw-col-span-2 md:tw-col-span-1"
                    }, g.createElement("div", {
                        className: "tw-flex tw-flex-col tw-justify-between tw-h-full"
                    }, g.createElement("div", null, g.createElement("div", {
                        className: "tw-text-sm tw-flex tw-mb-2 tw-justify-start tw-flex-row tw-items-center"
                    }, "offline" === i ? g.createElement(S.oY, null, g.createElement("img", {
                        src: a,
                        alt: "".concat(n, "'s user icon"),
                        className: "\n                          tw-w-6 tw-h-6 tw-rounded-full tw-border-2 tw-border-status-offline\n                        "
                    })) : g.createElement(S.dk, null, g.createElement("img", {
                        src: a,
                        alt: "".concat(n, "'s user icon"),
                        className: "\n                          tw-w-6 tw-h-6 tw-rounded-full tw-border-2 tw-border-status-online\n                        "
                    })), g.createElement("span", {
                        className: "tw-ml-2"
                    }, l)), g.createElement("h4", {
                        className: "tw-text-h2 tw-mb-2 tw-text-white"
                    }, o), s && g.createElement("div", {
                        "aria-label": "Receives Mobile Notifications",
                        className: "tw-text-slate-300"
                    }, g.createElement(I.$1, {
                        className: "tw-mr-1 tw-text-base",
                        icon: P.qm,
                        width: 20
                    }), "Receives Mobile Notifications")))), g.createElement("div", {
                        className: " tw-flex tw-justify-between tw-col-span-3 md:tw-col-span-1 tw-flex-col md:tw-h-22 sm:tw-flex-row "
                    })))
                };
            j.propTypes = {
                imgSrc: q().string.isRequired,
                imgAlt: q().string,
                displayName: q().string.isRequired,
                profilePicUrl: q().string.isRequired,
                locationMessage: q().string.isRequired,
                location: q().string.isRequired,
                userStatus: q().string.isRequired
            };
            const O = j;
            var $ = function(e) {
                var t = e.userId,
                    r = (0, N.ez)({
                        userId: t
                    }),
                    l = r.data,
                    o = r.isSuccess,
                    i = (0, N.GR)(t),
                    s = i.data,
                    c = i.isSuccess,
                    w = (0, k.IB)().data,
                    u = (0, U.Kz)(),
                    d = (0, v.I0)(),
                    m = (0, g.useState)(!0),
                    f = (0, a.Z)(m, 2),
                    b = f[0],
                    h = f[1];
                if (w && c && s) {
                    var y = s.displayName,
                        E = s.state,
                        P = s.userIcon,
                        M = s.currentAvatarImageUrl,
                        q = (0, F.Je)({
                            user: s,
                            currentUser: w
                        }),
                        j = q.inPrivate,
                        $ = q.userStatus,
                        W = q.isWeb,
                        _ = q.isMobile,
                        z = q.isOffline,
                        D = q.isFriend,
                        H = q.isSelf,
                        G = q.receivesMobileNotifications,
                        B = q.isInActive,
                        K = q.isTraveling,
                        V = (0, F.S6)({
                            fileUrl: P || M,
                            width: "128"
                        });
                    if (!D && !H) return g.createElement(O, {
                        imgSrc: "https://assets.vrchat.com/www/images/user-location-not-available.png",
                        imgAlt: "User is Not Available",
                        displayName: y,
                        profilePicUrl: V,
                        locationMessage: "".concat(y, "'s location is"),
                        location: "Not Available",
                        userStatus: $
                    });
                    if (z && G) return g.createElement(O, {
                        imgSrc: "https://assets.vrchat.com/www/images/user-location-on-mobile.png",
                        imgAlt: "User is Offline on Mobile",
                        displayName: y,
                        profilePicUrl: V,
                        locationMessage: "".concat(y, " is currently"),
                        location: "Offline on Mobile",
                        userStatus: $,
                        receivesMobileNotifications: !0
                    });
                    if (z) return g.createElement(O, {
                        imgSrc: "https://assets.vrchat.com/www/images/user-location-offline.png",
                        imgAlt: "User is Offline",
                        displayName: y,
                        profilePicUrl: V,
                        locationMessage: "".concat(y, " is currently"),
                        location: "Offline",
                        userStatus: $
                    });
                    if (W && B) return g.createElement(O, {
                        imgSrc: "https://assets.vrchat.com/www/images/user-location-on-web.png",
                        imgAlt: "User is Active on Website",
                        displayName: y,
                        profilePicUrl: V,
                        locationMessage: "".concat(y, " is currently"),
                        location: "Active on Website",
                        userStatus: $
                    });
                    if (_ && B) return g.createElement(O, {
                        imgSrc: "https://assets.vrchat.com/www/images/user-location-on-mobile.png",
                        imgAlt: "User is Active on Mobile",
                        displayName: y,
                        profilePicUrl: V,
                        locationMessage: "".concat(y, " is currently"),
                        location: "Active on Mobile",
                        userStatus: $
                    });
                    if (K) return g.createElement(O, {
                        imgSrc: "https://assets.vrchat.com/www/images/user-location-private-world.png",
                        imgAlt: "User is Loading a World",
                        displayName: y,
                        profilePicUrl: V,
                        locationMessage: "".concat(y, " is currently"),
                        location: "Loading a World",
                        userStatus: $
                    });
                    if (j) return g.createElement(O, {
                        imgSrc: "https://assets.vrchat.com/www/images/user-location-private-world.png",
                        imgAlt: "User is Online in a Private World",
                        displayName: y,
                        profilePicUrl: V,
                        locationMessage: "".concat(y, " is currently in a"),
                        location: "Private World",
                        userStatus: $
                    });
                    if (!o) return null;
                    var Q = l.worldData,
                        X = l.location,
                        Y = l.instanceType,
                        J = l.instanceId,
                        ee = l.fileSizeInMegaBytes;
                    if (!X || !Q) return null;
                    var te = Q.imageUrl,
                        re = Q.name,
                        ne = Q.unityPackages,
                        ae = Q.authorName,
                        le = Q.occupants,
                        oe = "vrchat://launch?ref=vrchat.com&id=".concat(X),
                        ie = (0, F.NQ)(ne),
                        se = (0, F.S6)({
                            fileUrl: te,
                            width: "1024"
                        }),
                        ce = function() {
                            var e = (0, n.Z)(p().mark((function e() {
                                return p().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, u({
                                                worldId: Q.id,
                                                instanceId: J
                                            });
                                        case 3:
                                            d((0, x.d)({
                                                title: "Instance Invite",
                                                icon: R.FU,
                                                message: "Instance Invite sent!",
                                                color: "success",
                                                timeout: 5e3
                                            })), e.next = 10;
                                            break;
                                        case 6:
                                            e.prev = 6, e.t0 = e.catch(0), console.error("Invite me error: ", e.t0), d((0, x.d)({
                                                title: "Instance Invite",
                                                icon: L.eH,
                                                message: "Instance Invite failed!",
                                                color: "warning",
                                                timeout: 5e3
                                            }));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 6]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return g.createElement("div", {
                        "aria-label": "Current Instance",
                        className: "tw-p-6 tw-bg-cover tw-rounded-lg tw-my-6 tw-bg-grey/90 tw-relative tw-backdrop-blur-md tw-w-full"
                    }, g.createElement("div", {
                        className: "tw-grid tw-grid-flow-row-dense tw-grid-cols-3 tw-grid-rows-1 tw-gap-6 md:tw-grid-cols-[256px_auto_auto]"
                    }, g.createElement(A.rU, {
                        to: "/home/launch?worldId=".concat(Q.id, "&instanceId=").concat(J),
                        title: Q.name,
                        target: "_blank"
                    }, g.createElement("div", {
                        className: "tw-block tw-relative tw-max-w-[256px]"
                    }, g.createElement(I.UU, {
                        className: "\n                      tw-w-full tw-rounded-lg tw-shadow-lg tw-absolute tw-min-h-[150px] tw-h-full\n                      tw-ease-in-out tw-duration-300 ".concat(b ? "opacity-100" : "opacity-0", "\n                  ")
                    }), g.createElement("img", {
                        src: se,
                        alt: re,
                        className: "tw-rounded-lg",
                        onLoad: function() {
                            return h(!1)
                        },
                        onError: function() {
                            return h(!1)
                        }
                    }))), g.createElement("div", {
                        className: "tw-col-span-2 md:tw-col-span-1"
                    }, g.createElement("div", {
                        className: "tw-flex tw-flex-col tw-justify-between tw-h-full"
                    }, g.createElement("div", null, g.createElement("div", {
                        className: "tw-text-sm tw-flex tw-mb-2 tw-justify-start tw-flex-row tw-items-center"
                    }, g.createElement(S.dk, null, g.createElement("img", {
                        src: V,
                        alt: "".concat(y, "'s user icon"),
                        className: "tw-w-6 tw-h-6 tw-rounded-full tw-border-2\n                  ".concat("online" === E ? "tw-border-status-online" : "tw-border-status-offline")
                    })), g.createElement("span", {
                        className: "tw-ml-2"
                    }, y, " is currently in")), g.createElement(A.rU, {
                        to: "/home/launch?worldId=".concat(Q.id, "&instanceId=").concat(J),
                        title: Q.name,
                        target: "_blank"
                    }, g.createElement("h4", {
                        className: "tw-text-h2 tw-mb-2 tw-text-white"
                    }, re)), g.createElement("h4", {
                        className: "tw-text-lg tw-font-normal"
                    }, Y)), g.createElement("div", {
                        className: "tw-mt-6 tw-text-light-grey tw-block"
                    }, g.createElement(g.Fragment, null, g.createElement("span", {
                        className: "tw-mr-2 after:tw-content-['|'] after:tw-ml-2"
                    }, g.createElement(I.$1, {
                        icon: T.FV,
                        color: "#8f8f8d",
                        title: "Number of occupants in world",
                        className: "tw-mr-1"
                    }), le), g.createElement("span", {
                        className: "tw-mr-2 after:tw-content-['|'] after:tw-ml-2 tw-hidden md:tw-inline-block"
                    }, ie.isCrossPlatform && g.createElement(g.Fragment, null, g.createElement(I.$1, {
                        icon: Z.vq,
                        className: "me-2"
                    }), "Cross-Platform"), !ie.isCrossPlatform && ie.isPc && g.createElement("span", null, "PC Only"), !ie.isCrossPlatform && ie.isQuest && g.createElement("span", null, "Android Only")), ee && g.createElement("span", {
                        className: "tw-mr-2 after:tw-content-['|'] after:tw-ml-2 tw-hidden lg:tw-inline-block"
                    }, ee, "MB"), g.createElement("span", {
                        className: "tw-mr-0"
                    }, g.createElement(I.$1, {
                        icon: C.iD,
                        color: "#8f8f8d",
                        title: "Author: ".concat(ae),
                        className: "tw-mr-1"
                    }), ae))))), g.createElement("div", {
                        className: " tw-flex tw-justify-between tw-col-span-3 md:tw-col-span-1 tw-flex-col md:tw-h-22 sm:tw-flex-row "
                    }, g.createElement("div", {
                        className: "tw-w-full tw-grid tw-grid-cols-2 tw-gap-4 md:tw-grid-cols-1 md:tw-justify-items-end"
                    }, g.createElement("div", {
                        className: "tw-w-full md:tw-max-w-[150px]"
                    }, g.createElement("a", {
                        href: oe
                    }, g.createElement(I.zx, {
                        className: "md:tw-mr-0 tw-w-full"
                    }, "Launch World"))), g.createElement("div", {
                        className: "tw-w-full md:tw-max-w-[150px]"
                    }, g.createElement(I.zx, {
                        className: "md:tw-ml-0 tw-w-full",
                        onClick: ce
                    }, "Invite Me"))))))
                }
                return null
            };
            $.propTypes = {};
            const W = $;
            var _ = r(42138),
                z = r(41145),
                D = r(87709),
                H = r(6811),
                G = r(13271),
                B = r(751),
                K = function(e) {
                    var t = e.friendUserId,
                        r = e.isOpen,
                        l = e.cancelCallback,
                        i = void 0 === l ? function() {} : l,
                        s = (0, v.I0)(),
                        c = (0, U.Tu)().user,
                        w = (0, g.useRef)(null),
                        u = (0, g.useState)(!1),
                        d = (0, a.Z)(u, 2),
                        m = d[0],
                        f = d[1],
                        b = (0, g.useState)(null),
                        h = (0, a.Z)(b, 2),
                        y = h[0],
                        E = h[1],
                        N = (0, G.S)({
                            type: "friend"
                        }),
                        k = N.data,
                        S = void 0 === k ? [] : k,
                        C = N.isSuccess,
                        Z = N.isFetching,
                        T = (0, B.Ec)(),
                        R = (0, a.Z)(T, 2),
                        A = R[0],
                        P = R[1].isLoading,
                        M = (0, G.C)(),
                        q = (0, a.Z)(M, 2),
                        j = q[0],
                        O = q[1].isLoading,
                        $ = (0, g.useMemo)((function() {
                            if (!C || 0 === S.length) return [];
                            var e = (0, _.Z)(S).sort((function(e, t) {
                                return e.name.localeCompare(t.name)
                            }));
                            return E(e[0]), e
                        }), [S]);
                    if ((0, g.useEffect)((function() {
                            if (C && 0 === S.length) {
                                var e = {
                                    type: "friend",
                                    name: "group_0",
                                    userId: c.id,
                                    displayName: "group_0",
                                    visibility: "private",
                                    tags: []
                                };
                                j(e)
                            }
                        }), [S]), !C) return null;
                    var W = function(e) {
                            f(!1), E(e)
                        },
                        K = P || O || Z,
                        V = function() {
                            var e = (0, n.Z)(p().mark((function e() {
                                var r, n;
                                return p().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, A({
                                                type: "friend",
                                                favoriteId: t,
                                                groupName: y.name
                                            }).unwrap();
                                        case 3:
                                            return s((0, x.d)({
                                                title: "New Favorite Friend Added!",
                                                message: "Favorite Saved to ".concat((0, F.N4)(y)),
                                                icon: H.f8,
                                                color: "success",
                                                timeout: 5e3
                                            })), e.abrupt("return", i());
                                        case 7:
                                            return e.prev = 7, e.t0 = e.catch(0), console.error("Error creating favorite", e.t0), e.abrupt("return", s((0, x.d)({
                                                title: "Failed to create a favorite",
                                                icon: L.eH,
                                                message: null !== (r = null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : "Something went wrong",
                                                color: "danger",
                                                timeout: 5e3
                                            })));
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return g.createElement("div", {
                        tabIndex: "-1",
                        className: "\n        tw-top-0 tw-left-0 tw-right-0 tw-z-[1100]\n        tw-overflow-x-hidden tw-overflow-y-auto\n        md:tw-inset-0\n        tw-h-[calc(100%)] tw-max-h-full\n        tw-bg-dark-grey-transparent\n        ".concat(r ? "tw-fixed" : "tw-hidden", "\n      "),
                        role: "dialog",
                        "aria-label": "Favorite User",
                        "aria-modal": r
                    }, g.createElement("div", {
                        className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-margin-top tw-mt-auto tw-p-0 sm:tw-p-10"
                    }, g.createElement("div", {
                        className: "tw-w-full sm:tw-w-[500px] lg:tw-w-1/2 tw-relative tw-rounded-lg tw-shadow tw-bg-grey"
                    }, g.createElement("div", {
                        className: "tw-flex tw-items-start tw-justify-between tw-p-4 tw-pb-0 tw-rounded-t"
                    }, g.createElement("h3", {
                        className: " tw-w-full tw-text-3xl tw-font-semibold tw-text-white after:tw-content-[''] after:tw-border-gray-700 after:tw-border-solid after:tw-border-0 after:tw-border-t after:tw-pb-0 after:tw-mt-5 sm:tw-text-xl "
                    }, "Favorite User"), g.createElement("button", {
                        type: "button",
                        className: " tw-text-gray-400 tw-bg-gray-700 tw-rounded-full tw-text-sm tw-w-10 tw-h-10 tw-ml-auto sm:tw-w-8 sm:tw-h-8 tw-inline-flex tw-justify-center tw-items-center hover:tw-bg-gray-600 hover:tw-text-white tw-border-none tw-block sm:tw-absolute sm:-tw-right-4 sm:-tw-top-4 ",
                        onClick: function() {
                            return i()
                        },
                        "aria-label": "Close Modal"
                    }, g.createElement(I.$1, {
                        icon: D.faXmark
                    }), g.createElement("span", {
                        className: "tw-sr-only"
                    }, "Close modal"))), g.createElement("div", {
                        className: "tw-p-5"
                    }, g.createElement("div", {
                        className: "tw-flex tw-flex-col"
                    }, K && g.createElement("div", {
                        className: "tw-pb-5 tw-flex tw-flex-row tw-justify-start tw-items-center"
                    }, g.createElement("div", {
                        className: "tw-justify-center"
                    }, g.createElement(I.$1, {
                        icon: o.LM,
                        spin: !0,
                        className: "tw-ml-3"
                    }))), !K && g.createElement("div", {
                        className: "tw-pb-5 tw-flex tw-flex-row tw-justify-start tw-items-center"
                    }, g.createElement("label", {
                        className: "tw-w-1/2 tw-text-left",
                        htmlFor: "input-status-message"
                    }, "Set to Favorite User List:"), g.createElement("div", {
                        className: "tw-flex tw-flex-col sm:tw-flex-row tw-w-1/2"
                    }, g.createElement("div", {
                        className: "tw-bg-black tw-rounded tw-relative tw-w-full",
                        ref: w
                    }, g.createElement("div", {
                        tabIndex: 0,
                        role: "button",
                        className: "tw-flex tw-items-center tw-cursor-pointer tw-p-4 tw-text-left",
                        onClick: function() {
                            null != w && w.current && w.current.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            }), f(!m)
                        },
                        onKeyDown: function(e) {
                            "Enter" !== e.key && " " !== e.key || f(!m)
                        }
                    }, null !== y && g.createElement("span", {
                        className: "tw-mr-2 tw-flex-grow"
                    }, (0, F.N4)(y)), g.createElement(I.$1, {
                        icon: z.pt
                    })), g.createElement("div", {
                        className: "tw-rounded tw-bg-option-bg tw-flex-col tw-absolute tw-w-full tw-top-[3.5em] tw-left-0 ".concat(m ? "tw-flex" : "tw-hidden")
                    }, null == $ ? void 0 : $.map((function(e, t) {
                        var r = e.id;
                        return g.createElement("div", {
                            key: r,
                            className: " tw-flex tw-items-center tw-cursor-pointer tw-pt-2 tw-pb-2 tw-pl-0 tw-pr-4 tw-h-20 sm:tw-h-12 hover:tw-bg-button-bg focus:tw-bg-button-bg tw-border-0 tw-border-b-2 tw-border-b-hr-line-color tw-border-solid last:tw-border-none tw-select-none ",
                            tabIndex: t + 1,
                            role: "button",
                            onClick: function() {
                                W(e)
                            },
                            onKeyDown: function(t) {
                                "Enter" !== t.key && " " !== t.key || W(e)
                            }
                        }, g.createElement("div", {
                            className: "tw-w-4 tw-min-w-[16px] tw-h-4 tw-mr-2 tw-rounded-full"
                        }), g.createElement("span", {
                            className: "tw-mr-2"
                        }, (0, F.N4)(e)))
                    })))))), g.createElement("div", {
                        className: "tw-flex tw-items-center tw-pt-8 tw-space-x-2 tw-justify-end"
                    }, g.createElement("button", {
                        type: "button",
                        className: "tw-h-9 tw-border-0 tw-px-3 tw-py-2 tw-rounded-sm tw-w-48 tw-bg-button-bg-grey tw-leading-none",
                        onClick: function() {
                            return i()
                        }
                    }, "Cancel"), g.createElement("button", {
                        type: "button",
                        className: " tw-w-48 tw-h-9 tw-border-0 tw-rounded-sm tw-px-3 tw-py-2 tw-bg-button-bg tw-text-highlight tw-leading-none hover:tw-bg-button-bg-100 hover:tw-text-white ",
                        "aria-label": "Add to Favorite",
                        onClick: function() {
                            return V()
                        },
                        disabled: P
                    }, "Add to Favorite", P && g.createElement(I.$1, {
                        icon: o.LM,
                        spin: !0,
                        className: "tw-ml-3"
                    }))))))))
                };
            K.propTypes = {
                friendUserId: q().string.isRequired,
                isOpen: q().bool.isRequired,
                cancelCallback: q().func
            };
            const V = K;
            var Q = r(40098),
                X = r(4965),
                Y = function(e) {
                    var t = e.statusType,
                        r = e.onChange,
                        n = e.className,
                        l = (0, y.Tq)(t, "busy"),
                        o = (0, g.useState)(!1),
                        i = (0, a.Z)(o, 2),
                        s = i[0],
                        c = i[1],
                        w = (0, g.useRef)(null);
                    return g.createElement("div", {
                        className: n,
                        ref: w
                    }, g.createElement("div", {
                        tabIndex: 0,
                        role: "button",
                        className: "tw-flex tw-items-center tw-cursor-pointer",
                        onClick: function() {
                            null != w && w.current && w.current.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            }), c(!s)
                        },
                        onKeyDown: function(e) {
                            "Enter" !== e.key && " " !== e.key || c(!s)
                        }
                    }, g.createElement("div", {
                        className: "tw-w-4 tw-min-w-[16px] tw-h-4 tw-mr-2 ".concat(l.colorClass, " tw-rounded-full")
                    }), g.createElement("span", {
                        className: "tw-mr-2 tw-flex-grow"
                    }, l.label), g.createElement(I.$1, {
                        icon: u.Iw
                    })), g.createElement(J, {
                        isOpen: s,
                        onClick: function() {
                            return c(!1)
                        }
                    }), g.createElement("div", {
                        className: "tw-rounded tw-bg-option-bg tw-flex-col tw-absolute tw-w-full sm:tw-w-[9em] tw-top-[3.5em] tw-left-0 ".concat(s ? "tw-flex" : "tw-hidden"),
                        isOpen: s
                    }, Object.keys(y.xY).filter((function(e) {
                        return (0, y.Tq)(e).settable
                    })).map((function(e) {
                        return g.createElement("div", {
                            className: " tw-flex tw-items-center tw-cursor-pointer tw-pt-2 tw-pb-2 tw-pl-4 tw-pr-4 tw-h-20 sm:tw-h-12 hover:tw-bg-button-bg focus:tw-bg-button-bg tw-border-0 tw-border-b-2 tw-border-b-hr-line-color tw-border-solid last:tw-border-none ",
                            tabIndex: 0,
                            role: "button",
                            onClick: function() {
                                c(!1), r(e)
                            },
                            onKeyDown: function(t) {
                                "Enter" !== t.key && " " !== t.key || (c(!1), r(e))
                            }
                        }, g.createElement("div", {
                            key: e,
                            className: "tw-w-4 tw-min-w-[16px] tw-h-4 tw-mr-2 ".concat((0, y.Tq)(e).colorClass, " tw-rounded-full")
                        }), g.createElement("span", {
                            className: "tw-mr-2"
                        }, (0, y.Tq)(e).label))
                    }))))
                };
            Y.propTypes = {
                statusType: q().oneOf(Object.keys(y.xY)),
                onChange: q().func,
                className: q().string
            };
            var J = (0, X.Z)("div", {
                target: "e1n42wje0"
            })("display:", (function(e) {
                return e.isOpen ? "block" : "none"
            }), ";position:fixed;top:0;left:0;width:100vw;height:100vh;");
            const ee = Y;
            var te = r(23208),
                re = r(43946),
                ne = r(6767),
                ae = r(78076),
                le = r(41255),
                oe = r(82084),
                ie = Math.PI / 180;

            function se(e, t, r) {
                return ce.apply(this, arguments)
            }

            function ce() {
                return ce = (0, n.Z)(p().mark((function e(t, r, n) {
                    var a, l, o, i, s, c, w, u, d, m, f, g = arguments;
                    return p().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (a = g.length > 3 && void 0 !== g[3] ? g[3] : 1, l = g.length > 4 && void 0 !== g[4] ? g[4] : 0, o = r.getContext("2d")) {
                                    e.next = 5;
                                    break
                                }
                                throw new Error("No 2d context");
                            case 5:
                                i = t.naturalWidth / t.width, s = t.naturalHeight / t.height, c = window.devicePixelRatio, r.width = Math.floor(n.width * i * c), r.height = Math.floor(n.height * s * c), o.scale(c, c), o.imageSmoothingQuality = "high", w = n.x * i, u = n.y * s, d = l * ie, m = t.naturalWidth / 2, f = t.naturalHeight / 2, o.save(), o.translate(-w, -u), o.translate(m, f), o.rotate(d), o.scale(a, a), o.translate(-m, -f), o.drawImage(t, 0, 0, t.naturalWidth, t.naturalHeight, 0, 0, t.naturalWidth, t.naturalHeight), o.restore();
                            case 25:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), ce.apply(this, arguments)
            }
            var we = r(50119),
                ue = function(e) {
                    var t = e.isRounded,
                        r = void 0 !== t && t,
                        n = e.srcUrl,
                        l = e.onClick,
                        o = (0, g.useState)(!0),
                        i = (0, a.Z)(o, 2),
                        s = i[0],
                        c = i[1],
                        w = "\n      tw-w-60 tw-h-60\n      sm:tw-w-40 sm:tw-h-40\n      tw-rounded-full\n    ",
                        u = function() {
                            c(!1)
                        };
                    return g.createElement("div", {
                        className: "tw-block tw-cursor-pointer tw-relative",
                        role: "button",
                        tabIndex: 0,
                        onClick: l
                    }, g.createElement(we.Z, {
                        className: "\n          ".concat(r ? w : "tw-h-60", "}\n          tw-w-full tw-rounded-lg tw-shadow-lg tw-absolute\n          tw-ease-in-out tw-duration-300 ").concat(s ? "opacity-100" : "opacity-0", "\n        ")
                    }), g.createElement("img", {
                        src: n,
                        alt: "icon",
                        onLoad: u,
                        onError: u,
                        className: "\n            ".concat(r ? w : "tw-w-full tw-h-fit tw-rounded-lg", "}\n            tw-border-solid tw-border-3 tw-border-transparent hover:tw-border-highlight\n            tw-ease-in-out tw-duration-300\n            tw-shadow-lg\n          ")
                    }))
                };
            ue.propTypes = {
                isRounded: q().bool,
                srcUrl: q().string.isRequired,
                onClick: q().func.isRequired
            };
            const de = ue;
            var me = 2048,
                fe = function(e) {
                    var t, r, l, i = e.userId,
                        s = e.isOpen,
                        c = void 0 !== s && s,
                        w = e.cancelCallback,
                        u = void 0 === w ? function() {} : w,
                        d = e.mode,
                        m = void 0 === d ? "profileIcon" : d,
                        f = (0, v.I0)(),
                        b = (0, g.useState)(),
                        h = (0, a.Z)(b, 2),
                        y = h[0],
                        E = h[1],
                        k = (0, g.useState)(null),
                        S = (0, a.Z)(k, 2),
                        C = S[0],
                        Z = S[1],
                        T = (0, g.useState)(),
                        R = (0, a.Z)(T, 2),
                        U = R[0],
                        A = R[1],
                        P = (0, g.useRef)(null),
                        M = (0, g.useRef)(null),
                        q = (0, g.useState)(""),
                        j = (0, a.Z)(q, 2),
                        O = j[0],
                        $ = j[1],
                        W = (0, g.useState)(""),
                        _ = (0, a.Z)(W, 2),
                        z = _[0],
                        H = _[1],
                        G = (0, g.useState)(1),
                        B = (0, a.Z)(G, 2),
                        K = B[0],
                        V = B[1],
                        X = (0, g.useState)(0),
                        Y = (0, a.Z)(X, 2),
                        J = Y[0],
                        ee = Y[1],
                        ie = g.useState(null),
                        ce = (0, a.Z)(ie, 2),
                        we = ce[0],
                        ue = ce[1],
                        fe = "" !== z,
                        pe = (0, le.Yh)(),
                        ge = (0, a.Z)(pe, 2),
                        ve = ge[0],
                        be = ge[1],
                        he = be.isLoading,
                        xe = be.error;
                    t = (0, n.Z)(p().mark((function e() {
                        return p().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    null != U && U.width && null != U && U.height && M.current && P.current && se(M.current, P.current, U, K, J);
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), r = 100, l = [U, K, J], (0, g.useEffect)((function() {
                        var e = setTimeout((function() {
                            t.apply(void 0, l)
                        }), r);
                        return function() {
                            clearTimeout(e)
                        }
                    }), l);
                    var ye = function() {
                            H(""), ee(0), V(1), $("")
                        },
                        Ee = (0, le.sR)({
                            userId: i
                        }, {
                            skip: "profileIcon" !== m || !c
                        }),
                        Ne = Ee.data,
                        ke = void 0 === Ne ? [] : Ne,
                        Ie = Ee.isFetching,
                        Se = Ee.isSuccess,
                        Fe = (0, le.FQ)({
                            userId: i
                        }, {
                            skip: "profilePicture" !== m || !c
                        }),
                        Ce = Fe.data,
                        Ze = void 0 === Ce ? [] : Ce,
                        Te = Fe.isFetching,
                        Le = Fe.isSuccess,
                        Re = (0, N.al)(),
                        Ue = (0, a.Z)(Re, 2),
                        Ae = Ue[0],
                        Pe = Ue[1].isLoading,
                        Me = (0, N.Cl)(),
                        qe = (0, a.Z)(Me, 2),
                        je = qe[0],
                        Oe = qe[1].isLoading,
                        $e = {
                            profileIcon: {
                                modalTitle: "Add your icon",
                                modalSubTitle: "Must be less than 10MB, larger than 64x64 pixels, and smaller than 2048x2048 pixels.",
                                gallerySelectionTitle: "Select from your uploaded icons",
                                tag: "icon",
                                updateUserFileMutation: Ae,
                                feedbackTitle: "Change Profile Icon",
                                successMessage: "Icon successfully updated.",
                                failedMessage: "Failed to change icon.",
                                aspectRatio: 1,
                                isRounded: !0
                            },
                            profilePicture: {
                                modalTitle: "Add your picture",
                                modalSubTitle: "Must be less than 10MB, larger than 64x64 pixels, and smaller than 2048x2048 pixels.",
                                gallerySelectionTitle: "Select from your uploaded pictures",
                                tag: "gallery",
                                updateUserFileMutation: je,
                                feedbackTitle: "Change Profile Picture",
                                successMessage: "Profile picture successfully updated.",
                                failedMessage: "Failed to change profile picture.",
                                aspectRatio: 16 / 9,
                                isRounded: !1
                            }
                        },
                        We = function() {
                            var e = (0, n.Z)(p().mark((function e(t) {
                                var r, n;
                                return p().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(t.target.files && t.target.files.length > 0)) {
                                                e.next = 11;
                                                break
                                            }
                                            if (!(t.target.files[0].size > 10485760)) {
                                                e.next = 4;
                                                break
                                            }
                                            return ue({
                                                pass: !1,
                                                message: "Image file size must be less than 10MB."
                                            }), e.abrupt("return");
                                        case 4:
                                            (r = new Image).addEventListener("load", (function() {
                                                r.width < 64 || r.height < 64 ? ue({
                                                    pass: !1,
                                                    message: "Image dimensions are too small, must be larger than 64x64 pixels."
                                                }) : r.width > me || r.height > me ? ue({
                                                    pass: !1,
                                                    message: "Image dimensions are too large, must be smaller than 2048x2048 pixels."
                                                }) : (window.URL.revokeObjectURL(r.src), ue({
                                                    pass: !0,
                                                    message: null
                                                }))
                                            }), {
                                                once: !0
                                            }), r.src = window.URL.createObjectURL(t.target.files[0]), E(void 0), (n = new FileReader).addEventListener("load", (function() {
                                                var e;
                                                return H((null === (e = n.result) || void 0 === e ? void 0 : e.toString()) || "")
                                            })), n.readAsDataURL(t.target.files[0]);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        _e = function() {
                            if (null !== C) {
                                var e, t, r, n, a = C.width,
                                    l = C.height;
                                E((e = {
                                    mediaWidth: a,
                                    mediaHeight: l,
                                    maxHeight: me,
                                    maxWidth: me,
                                    aspect: $e[m].aspectRatio
                                }, t = e.mediaWidth, r = e.mediaHeight, n = e.aspect, (0, oe._H)((0, oe.YG)({
                                    unit: "%",
                                    width: 90
                                }, n, t, r), t, r)))
                            }
                        };
                    (0, g.useEffect)((function() {
                        _e()
                    }), [C]);
                    var ze = function() {
                            var e = (0, n.Z)(p().mark((function e() {
                                return p().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (P.current) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new Error("Crop canvas does not exist");
                                        case 2:
                                            return e.next = 4, P.current.toBlob(function() {
                                                var e = (0, n.Z)(p().mark((function e(t) {
                                                    var r, n, a, l;
                                                    return p().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, new File([t], "fileName.jpg", {
                                                                    type: "image/png"
                                                                });
                                                            case 2:
                                                                return r = e.sent, e.prev = 3, e.next = 6, ve({
                                                                    tag: $e[m].tag,
                                                                    file: r,
                                                                    userId: i
                                                                }).unwrap();
                                                            case 6:
                                                                return n = e.sent, e.next = 9, $e[m].updateUserFileMutation({
                                                                    userId: i,
                                                                    url: "https://api.vrchat.cloud/api/1/file/".concat(n.id, "/1")
                                                                }).unwrap();
                                                            case 9:
                                                                f((0, x.d)({
                                                                    title: $e[m].feedbackTitle,
                                                                    icon: ae.Vm,
                                                                    message: $e[m].successMessage,
                                                                    color: "success",
                                                                    timeout: 5e3
                                                                })), ye(), u(), e.next = 18;
                                                                break;
                                                            case 14:
                                                                e.prev = 14, e.t0 = e.catch(3), console.error("error uploading icon:", e.t0), (0, x.d)({
                                                                    title: $e[m].feedbackTitle,
                                                                    icon: L.eH,
                                                                    message: null !== (a = null == xe || null === (l = xe.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== a ? a : $e[m].failedMessage,
                                                                    color: "danger",
                                                                    timeout: 5e3
                                                                });
                                                            case 18:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e, null, [
                                                        [3, 14]
                                                    ])
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }(), "image/png");
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        De = function() {
                            var e = (0, n.Z)(p().mark((function e(t) {
                                var r, n;
                                return p().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, $e[m].updateUserFileMutation({
                                                userId: i,
                                                url: t.latestVersionFile.file.url
                                            }).unwrap();
                                        case 3:
                                            f((0, x.d)({
                                                title: $e[m].feedbackTitle,
                                                icon: ae.Vm,
                                                message: $e[m].successMessage,
                                                color: "success",
                                                timeout: 5e3
                                            })), ye(), u(), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), f((0, x.d)({
                                                title: $e[m].feedbackTitle,
                                                icon: L.eH,
                                                message: null !== (r = null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : $e[m].failedMessage,
                                                color: "danger",
                                                timeout: 5e3
                                            }));
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        He = Ie || Pe || he || Te || Oe;
                    return g.createElement("div", {
                        tabIndex: "-1",
                        className: "\n        tw-top-0 tw-left-0 tw-right-0 tw-z-[1100]\n        tw-overflow-x-hidden tw-overflow-y-auto\n        md:tw-inset-0\n        tw-h-[calc(100%-1rem)] tw-max-h-full\n        tw-bg-dark-grey-transparent\n        ".concat(c ? "tw-fixed" : "tw-hidden", "\n      ")
                    }, g.createElement("div", {
                        className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-margin-top tw-mt-auto tw-p-10"
                    }, g.createElement("div", {
                        className: "tw-w-full tw-relative tw-rounded-lg tw-shadow tw-bg-grey"
                    }, g.createElement("div", {
                        className: "tw-flex tw-items-start tw-justify-between tw-p-4 tw-pb-0 tw-rounded-t"
                    }, g.createElement("h3", {
                        className: " tw-w-full tw-text-xl tw-font-semibold tw-text-white after:tw-content-[''] after:tw-border-gray-700 after:tw-border-solid after:tw-border-0 after:tw-border-t after:tw-pb-0 after:tw-mt-5 "
                    }, $e[m].modalTitle, g.createElement("small", {
                        className: "tw-flex tw-font-normal tw-text-lighter-grey"
                    }, $e[m].modalSubTitle)), g.createElement("button", {
                        type: "button",
                        className: " tw-text-gray-400 tw-bg-gray-700 tw-rounded-full tw-text-sm tw-w-8 tw-h-8 tw-ml-auto tw-inline-flex tw-justify-center tw-items-center hover:tw-bg-gray-600 hover:tw-text-white tw-absolute -tw-right-4 -tw-top-4 tw-border-none ",
                        onClick: function() {
                            ye(), u()
                        }
                    }, g.createElement(I.$1, {
                        icon: D.faXmark
                    }), g.createElement("span", {
                        className: "tw-sr-only"
                    }, "Close modal"))), g.createElement("div", {
                        className: "tw-p-5"
                    }, g.createElement("div", {
                        className: "tw-flex tw-flex-col"
                    }, g.createElement("div", {
                        className: "tw-pb-5 tw-flex tw-flex-col"
                    }, g.createElement("input", {
                        accept: ".png,.jpg,.jpeg",
                        className: " tw-block tw-w-full tw-text-sm tw-text-lighter-grey tw-border tw-rounded-md tw-outline-none tw-bg-gray-700 tw-border-gray-60 tw-cursor-pointer file:tw-p-2 file:tw-bg-button-bg file:tw-border-none file:tw-text-highlight file:tw-cursor-pointer ",
                        id: "file_input",
                        type: "file",
                        value: O,
                        onChange: function(e) {
                            $(e.target.value), We(e)
                        }
                    }), null !== we && !1 === we.pass && g.createElement("div", {
                        className: "card danger tw-mt-5 tw-flex tw-flex-col"
                    }, g.createElement("span", null, g.createElement(I.$1, {
                        icon: L.eH,
                        color: "red"
                    }), " ", we.message)))), fe && (null == we ? void 0 : we.pass) && g.createElement("div", {
                        className: "tw-flex tw-flex-col"
                    }, g.createElement("div", {
                        className: "tw-pb-5 tw-flex tw-flex-row tw-justify-center"
                    }, g.createElement(oe.ZP, {
                        crop: y,
                        onChange: function(e, t) {
                            return E(t)
                        },
                        onComplete: function(e) {
                            return A(e)
                        },
                        aspect: $e[m].aspectRatio,
                        minHeight: 64
                    }, g.createElement("img", {
                        ref: M,
                        alt: "Crop me",
                        src: z,
                        style: {
                            transform: "scale(".concat(K, ") rotate(").concat(J, "deg)")
                        },
                        onLoad: function(e) {
                            var t = e.currentTarget,
                                r = t.width,
                                n = t.height;
                            Z({
                                width: r,
                                height: n
                            })
                        },
                        className: "tw-h-96"
                    }))), g.createElement("div", {
                        className: "tw-grid tw-grid-cols-5 tw-gap-4"
                    }, g.createElement("div", {
                        className: "tw-grid"
                    }, g.createElement("div", {
                        className: "tw-flex tw-justify-end"
                    }, g.createElement("button", {
                        type: "button",
                        className: " tw-h-9 tw-w-fit tw-border-0 tw-rounded-md tw-px-8 tw-py-2 tw-bg-button-bg tw-text-highlight tw-leading-none hover:tw-bg-button-bg-100 hover:tw-text-white ",
                        onClick: function() {
                            ee(0), V(1)
                        }
                    }, "Reset"))), g.createElement("div", {
                        className: "tw-flex tw-col-span-3 tw-items-center"
                    }, g.createElement(I.$1, {
                        icon: ne.Kl
                    }), g.createElement("input", {
                        type: "range",
                        className: "sliderInput tw-mx-4",
                        id: "customRange1",
                        min: "1",
                        max: "5",
                        step: .01,
                        value: K,
                        onChange: function(e) {
                            return V(Number(e.target.value))
                        }
                    }), g.createElement(I.$1, {
                        icon: Q.r8
                    })), g.createElement("div", {
                        className: "tw-block"
                    }, g.createElement("button", {
                        type: "button",
                        className: " tw-bg-button-bg tw-rounded-full tw-text-sm tw-w-8 tw-h-8 tw-ml-auto tw-mr-3 tw-inline-flex tw-justify-center tw-items-center tw-border-none ",
                        onClick: function() {
                            return ee(J - 90)
                        }
                    }, g.createElement(I.$1, {
                        icon: re.Xn
                    }), g.createElement("span", {
                        className: "tw-sr-only"
                    }, "Rotate Left")), g.createElement("button", {
                        type: "button",
                        className: " tw-bg-button-bg tw-rounded-full tw-text-sm tw-w-8 tw-h-8 tw-ml-auto tw-inline-flex tw-justify-center tw-items-center tw-border-none ",
                        onClick: function() {
                            return ee(J + 90)
                        }
                    }, g.createElement(I.$1, {
                        icon: te.mH
                    }), g.createElement("span", {
                        className: "tw-sr-only"
                    }, "Rotate Right")))), !!U && fe && (null == we ? void 0 : we.pass) && g.createElement("div", {
                        className: "tw-pb-5 tw-flex tw-flex-col"
                    }, g.createElement("h3", {
                        className: " tw-w-full tw-text-xl tw-font-semibold tw-text-white tw-pt-4 tw-text-center after:tw-content-[''] after:tw-border-gray-700 after:tw-border-solid after:tw-border-0 after:tw-pb-0 after:tw-mt-5 "
                    }, "Preview"), g.createElement("div", {
                        className: "tw-flex tw-justify-center"
                    }, g.createElement("canvas", {
                        ref: P,
                        className: "\n                          ".concat($e[m].isRounded ? "tw-rounded-full tw-w-60 tw-h-60 sm:tw-w-40 sm:tw-h-40" : "tw-rounded-lg tw-w-86 tw-h-auto", "\n                          tw-shadow-lg\n                        ")
                    }))))), (Se && ke.length > 0 || Le && Ze.length > 0) && !fe && g.createElement(g.Fragment, null, g.createElement("div", {
                        className: "tw-flex tw-items-start tw-justify-between tw-p-4 tw-pb-0 tw-rounded-t"
                    }, g.createElement("h3", {
                        className: " tw-w-full tw-text-xl tw-font-semibold tw-text-white after:tw-content-[''] after:tw-border-gray-700 after:tw-border-solid after:tw-border-0 after:tw-border-t after:tw-pb-0 after:tw-mt-5 "
                    }, $e[m].gallerySelectionTitle)), g.createElement("div", {
                        className: "\n                  tw-grid tw-flow-col tw-gap-4 tw-p-4\n                  tw-grid-cols-1\n                  ".concat("profileIcon" === m ? "\n                        sm:tw-grid-cols-3\n                        md:tw-grid-cols-4\n                        lg:tw-grid-cols-5\n                        xl:tw-grid-cols-6\n                        2xl:tw-grid-cols-7\n                        3xl:tw-grid-cols-9\n                      " : "\n                        sm:tw-grid-cols-1\n                        md:tw-grid-cols-2\n                        lg:tw-grid-cols-3\n                        xl:tw-grid-cols-4\n                        2xl:tw-grid-cols-5\n                        3xl:tw-grid-cols-6\n                      ", "\n                ")
                    }, "profileIcon" === m && ke.map((function(e) {
                        return g.createElement(de, {
                            key: e.id,
                            srcUrl: (0, F.S6)({
                                fileId: e.id,
                                width: 512
                            }),
                            onClick: (0, n.Z)(p().mark((function t() {
                                return p().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            De(e);
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            }))),
                            isRounded: !0
                        })
                    })), "profilePicture" === m && Ze.map((function(e) {
                        return g.createElement(de, {
                            key: e.id,
                            srcUrl: (0, F.S6)({
                                fileId: e.id,
                                width: 512
                            }),
                            onClick: (0, n.Z)(p().mark((function t() {
                                return p().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            De(e);
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        })
                    })))), g.createElement("div", {
                        className: "tw-flex tw-items-center tw-p-6 tw-space-x-2 tw-justify-end"
                    }, g.createElement("button", {
                        type: "button",
                        className: "tw-h-9 tw-border-0 tw-px-3 tw-py-2 tw-rounded-sm tw-w-48 tw-bg-button-bg-grey tw-leading-none",
                        onClick: function() {
                            ye(), u()
                        }
                    }, "Cancel"), g.createElement("button", {
                        type: "button",
                        className: "\n                tw-w-48 tw-h-9\n                tw-border-0 tw-rounded-sm\n                tw-px-3 tw-py-2\n                tw-bg-button-bg tw-text-highlight tw-leading-none\n                hover:tw-bg-button-bg-100 hover:tw-text-white\n                ".concat("" !== O && null != we && we.pass ? "" : "tw-hidden", "\n              "),
                        disabled: He,
                        onClick: function() {
                            return ze()
                        }
                    }, "Confirm  ", He && g.createElement(I.$1, {
                        icon: o.LM,
                        spin: !0
                    }))))))
                };
            fe.propTypes = {
                userId: q().string.isRequired,
                isOpen: q().bool,
                cancelCallback: q().func
            };
            const pe = fe;
            var ge = r(62263),
                ve = function(e) {
                    var t = e.ariaLabel,
                        r = e.options,
                        n = e.onChange,
                        l = void 0 === n ? function() {} : n,
                        o = (e.cancelCallback, e.defaultValue),
                        i = void 0 === o ? null : o,
                        s = e.defaultIsOpen,
                        w = void 0 !== s && s,
                        u = e.className,
                        d = (0, g.useState)(w),
                        m = (0, a.Z)(d, 2),
                        f = m[0],
                        p = m[1],
                        v = (0, g.useState)(i),
                        b = (0, a.Z)(v, 2),
                        h = b[0],
                        x = b[1];
                    return (0, g.useEffect)((function() {
                        null !== h && h.value !== (null == i ? void 0 : i.value) && (p(!1), l(h))
                    }), [h]), g.createElement("div", {
                        className: "tw-relative ".concat(u)
                    }, g.createElement("button", {
                        "data-dropdown-toggle": "dropdown",
                        className: " tw-text-white tw-bg-button-bg tw-border-solid tw-border-button-border tw-font-medium tw-rounded-sm tw-text-sm tw-px-4 tw-py-2.5 tw-w-44 tw-mr-3 tw-cursor-pointer tw-flex tw-flex-row tw-justify-between tw-items-center ",
                        onClick: function() {
                            return p(!f)
                        },
                        type: "button"
                    }, null === h ? "Select" : h.label, g.createElement(I.$1, {
                        icon: c.eW,
                        className: "tw-ml-2"
                    })), g.createElement("div", {
                        className: "\n          tw-z-10 tw-rounded-lg tw-shadow tw-w-44 tw-bg-option-bg tw-absolute\n        "
                    }, g.createElement("ul", {
                        role: "listbox",
                        "aria-label": t,
                        className: "tw-text-sm tw-list-none tw-p-0 tw-w-full tw-h-64 tw-overflow-y-auto ".concat(f ? "" : "tw-hidden")
                    }, r.map((function(e) {
                        var t = e.label,
                            r = e.value;
                        return g.createElement("li", {
                            key: r,
                            role: "option",
                            "aria-selected": r === (null == h ? void 0 : h.value),
                            onClick: function() {
                                x({
                                    label: t,
                                    value: r
                                })
                            }
                        }, g.createElement("span", {
                            className: " tw-block tw-text-option-inactive hover:tw-text-white hover:tw-bg-button-bg tw-w-full tw-px-5 tw-py-2 tw-cursor-pointer "
                        }, t))
                    })))))
                };
            ve.propTypes = {
                ariaLabel: q().string.isRequired,
                options: q().arrayOf(q().shape({
                    label: q().node.isRequired,
                    value: q().any.isRequired
                })).isRequired,
                onChange: q().func,
                cancelCallback: q().func,
                defaultValue: q().any,
                defaultIsOpen: q().bool,
                className: q().string
            };
            const be = ve;
            var he = function(e) {
                var t = e.language,
                    r = e.onChange,
                    n = e.options,
                    l = e.className,
                    o = (0, g.useState)(!1),
                    i = (0, a.Z)(o, 2),
                    s = i[0],
                    c = i[1],
                    w = (0, g.useState)(t),
                    d = (0, a.Z)(w, 2),
                    m = d[0],
                    f = d[1],
                    p = m.title,
                    v = m.code;
                return g.createElement("div", {
                    "aria-controls": "language-selected-".concat(m.code),
                    "aria-selected": "true",
                    className: l
                }, s && g.createElement(be, {
                    defaultIsOpen: !0,
                    defaultValue: {
                        label: p,
                        value: v
                    },
                    onChange: function(e) {
                        var n = e.label,
                            a = e.value;
                        c(!1), f({
                            title: n,
                            code: a
                        }), r({
                            from: t,
                            to: {
                                title: n,
                                code: a
                            }
                        })
                    },
                    options: n
                }), !s && g.createElement("div", {
                    key: v,
                    className: "tw-bg-black tw-mr-3 tw-flex tw-flex-row tw-p-2 tw-pl-3 tw-rounded-sm",
                    role: "option",
                    "aria-selected": "true"
                }, p, g.createElement("div", {
                    className: "tw-pl-10"
                }, g.createElement("button", {
                    type: "button",
                    className: " tw-border-0 tw-rounded-sm tw-bg-transparent tw-text-white tw-leading-none ",
                    "aria-label": "Edit Language",
                    onClick: function() {
                        return c(!0)
                    }
                }, g.createElement(I.$1, {
                    icon: u.Iw
                })), g.createElement("button", {
                    type: "button",
                    className: " tw-border-0 tw-rounded-sm tw-bg-transparent tw-text-red tw-leading-none ",
                    "aria-label": "Delete Language",
                    onClick: function() {
                        return r({
                            from: t,
                            to: null
                        })
                    }
                }, g.createElement(I.$1, {
                    icon: ge.faTrashCan
                })))))
            };
            he.propTypes = {
                language: q().shape({
                    title: q().string.isRequired,
                    code: q().string.isRequired
                }).isRequired
            };
            const xe = he;
            var ye = function(e) {
                var t = e.socialLinksArray,
                    r = e.value,
                    n = e.onChange,
                    l = void 0 === n ? function() {} : n,
                    o = e.onDelete,
                    i = void 0 === o ? function() {} : o,
                    s = e.order,
                    c = (0, g.useState)(r),
                    w = (0, a.Z)(c, 2),
                    u = w[0],
                    d = w[1],
                    m = (0, g.useState)(!1),
                    f = (0, a.Z)(m, 2),
                    p = f[0],
                    v = f[1],
                    b = (0, g.useState)(""),
                    x = (0, a.Z)(b, 2),
                    y = x[0],
                    E = x[1];
                return g.createElement(g.Fragment, null, g.createElement("div", {
                    className: "tw-flex tw-mb-3 tw-flex-row tw-items-center"
                }, g.createElement("div", {
                    className: "tw-px-3"
                }, g.createElement(h.QZ, {
                    url: u,
                    className: "tw-w-9 tw-h-9",
                    as: "span"
                })), g.createElement("form", {
                    onSubmit: function(e) {
                        e.preventDefault(), e.target.firstElementChild.blur()
                    },
                    className: "tw-w-full"
                }, g.createElement("input", {
                    className: "\n              tw-bg-darker-grey\n              placeholder:tw-text-placeholder-text\n              tw-rounded\n              tw-h-14\n              tw-p-4\n              tw-w-full\n              ".concat(p ? "tw-border-red tw-border-solid" : "tw-border-none", "\n            "),
                    type: "text",
                    placeholder: "Add links to your social media accounts.",
                    defaultValue: r,
                    onChange: function(e) {
                        return d(e.target.value)
                    },
                    onBlur: function() {
                        return u === r ? (E(""), void v(!1)) : (0, F.K2)(u) ? t.includes(u) ? (E("This social link is already added"), void v(!0)) : (E(""), v(!1), void l({
                            fromValue: r,
                            toValue: u
                        })) : (E("Invalid social link"), void v(!0))
                    },
                    "aria-label": "Social Link ".concat(s)
                })), g.createElement("button", {
                    type: "button",
                    className: " tw-w-9 tw-h-9 tw-ml-4 tw-border-0 tw-rounded-md tw-bg-transparent tw-text-red tw-leading-none hover:tw-bg-button-bg-100 hover:tw-text-white ",
                    onClick: function() {
                        return i(r)
                    }
                }, g.createElement(I.$1, {
                    icon: ge.faTrashCan
                }))), p && g.createElement("small", {
                    className: "tw-text-red mb-3"
                }, y))
            };
            ye.propTypes = {
                value: q().string.isRequired,
                onChange: q().func.isRequired
            };
            const Ee = ye;
            var Ne = function(e) {
                var t, r, n, l = e.userId,
                    i = e.isOpen,
                    s = void 0 !== i && i,
                    c = e.cancelCallback,
                    w = void 0 === c ? function() {} : c,
                    d = (0, g.useState)("ask me"),
                    f = (0, a.Z)(d, 2),
                    p = f[0],
                    b = f[1],
                    h = (0, g.useState)(""),
                    k = (0, a.Z)(h, 2),
                    S = k[0],
                    C = k[1],
                    Z = (0, g.useState)(""),
                    T = (0, a.Z)(Z, 2),
                    R = T[0],
                    U = T[1],
                    A = (0, g.useState)(!1),
                    P = (0, a.Z)(A, 2),
                    M = P[0],
                    q = P[1],
                    j = (0, g.useState)("profileIcon"),
                    O = (0, a.Z)(j, 2),
                    $ = O[0],
                    W = O[1],
                    z = (0, g.useState)(!1),
                    H = (0, a.Z)(z, 2),
                    G = H[0],
                    B = H[1],
                    K = (0, g.useState)([]),
                    V = (0, a.Z)(K, 2),
                    X = V[0],
                    Y = V[1],
                    J = (0, g.useState)([]),
                    te = (0, a.Z)(J, 2),
                    re = te[0],
                    ne = te[1],
                    ae = (0, g.useState)([]),
                    le = (0, a.Z)(ae, 2),
                    oe = le[0],
                    ie = le[1],
                    se = (0, g.useState)(""),
                    ce = (0, a.Z)(se, 2),
                    we = ce[0],
                    ue = ce[1],
                    de = (0, g.useState)(!1),
                    me = (0, a.Z)(de, 2),
                    fe = me[0],
                    ge = me[1],
                    ve = (0, g.useState)(""),
                    he = (0, a.Z)(ve, 2),
                    ye = he[0],
                    Ne = he[1],
                    ke = (0, v.I0)(),
                    Ie = (0, N.LF)(),
                    Se = (0, a.Z)(Ie, 2),
                    Fe = Se[0],
                    Ce = Se[1],
                    Ze = Ce.isLoading,
                    Te = Ce.isSuccess,
                    Le = Ce.isError,
                    Re = Ce.error,
                    Ue = (0, N.GR)(l),
                    Ae = Ue.data,
                    Pe = Ue.isFetching,
                    Me = Ue.isError,
                    qe = Ue.error,
                    je = Ue.isSuccess,
                    Oe = (0, E.y)().data,
                    $e = null !== (t = null == Oe || null === (r = Oe.constants) || void 0 === r || null === (r = r.LANGUAGE) || void 0 === r ? void 0 : r.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== t ? t : y.O;
                if (!je) return null;
                var We = Ae.currentAvatarImageUrl,
                    _e = Ae.profilePicOverride,
                    ze = Ae.displayName,
                    De = Ae.userIcon,
                    He = Ae.tags,
                    Ge = Ae.bio,
                    Be = Ae.bioLinks,
                    Ke = Ae.status,
                    Ve = Ae.statusDescription;
                (0, g.useEffect)((function() {
                    C(Ve), U(Ge), ie(Be), b(Ke)
                }), [Ae]), (0, g.useEffect)((function() {
                    Te && (w(), ke((0, x.d)({
                        title: "Update Profile",
                        icon: m.IL,
                        message: "Profile successfully updated!",
                        color: "success",
                        timeout: 3e3
                    })))
                }), [Te]);
                var Qe = He.includes("system_supporter");
                (0, g.useEffect)((function() {
                    var e = He.filter((function(e) {
                        return e.startsWith("language")
                    })).map((function(e) {
                        var t = e.split("_")[1];
                        return {
                            code: t,
                            title: $e[t]
                        }
                    }));
                    Y(e)
                }), [He]), (0, g.useEffect)((function() {
                    var e = Object.entries($e).map((function(e) {
                        var t = (0, a.Z)(e, 2),
                            r = t[0];
                        return {
                            label: t[1],
                            value: r
                        }
                    })).reduce((function(e, t) {
                        var r = t.label,
                            n = t.value;
                        return X.some((function(e) {
                            return e.code === n
                        })) ? e : [].concat((0, _.Z)(e), [{
                            label: r,
                            value: n
                        }])
                    }), []);
                    ne(e)
                }), [X]);
                var Xe, Ye = function() {
                    return "" === we ? (ge(!1), void Ne("")) : (0, F.K2)(we) ? oe.includes(we) ? (Ne("This social link is already added"), void ge(!0)) : (ge(!1), Ne(""), ue(""), void ie([].concat((0, _.Z)(oe), [we.trim()]))) : (Ne("Invalid social link"), void ge(!0))
                };
                if (Me) return g.createElement("div", {
                    tabIndex: "-1",
                    className: "\n          tw-top-0 tw-left-0 tw-right-0 tw-z-[1100]\n          tw-overflow-x-hidden tw-overflow-y-auto\n          md:tw-inset-0\n          tw-h-[calc(100%-1rem)] tw-max-h-full\n          tw-bg-dark-grey-transparent\n          ".concat(s ? "tw-fixed" : "tw-hidden", "\n        ")
                }, g.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-margin-top tw-mt-auto tw-p-10"
                }, g.createElement("h3", {
                    className: " tw-w-full tw-text-xl tw-font-semibold tw-text-white after:tw-content-[''] after:tw-border-gray-700 after:tw-border-solid after:tw-border-0 after:tw-border-t after:tw-pb-0 after:tw-mt-5 "
                }, "Failed To Load User Data"), g.createElement("code", null, null === (Xe = qe.data) || void 0 === Xe || null === (Xe = Xe.error) || void 0 === Xe ? void 0 : Xe.message)));
                return g.createElement("div", {
                    tabIndex: "-1",
                    className: "\n        tw-top-0 tw-left-0 tw-right-0 tw-z-[1100]\n        tw-overflow-x-hidden tw-overflow-y-auto\n        md:tw-inset-0\n        tw-h-[calc(100%-1rem)] tw-max-h-full\n        tw-bg-dark-grey-transparent\n        ".concat(s ? "tw-fixed" : "tw-hidden", "\n      "),
                    role: "dialog",
                    "aria-label": "Basic Info",
                    "aria-modal": s
                }, g.createElement(pe, {
                    isOpen: M,
                    userId: l,
                    cancelCallback: function() {
                        return q(!1)
                    },
                    mode: $
                }), g.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-margin-top tw-mt-auto tw-p-0 sm:tw-p-10"
                }, g.createElement("div", {
                    className: "tw-w-full tw-relative tw-rounded-lg tw-shadow tw-bg-grey"
                }, g.createElement("div", {
                    className: "tw-flex tw-items-start tw-justify-between tw-p-4 tw-pb-0 tw-rounded-t"
                }, g.createElement("h3", {
                    className: " tw-w-full tw-text-3xl tw-font-semibold tw-text-white after:tw-content-[''] after:tw-border-gray-700 after:tw-border-solid after:tw-border-0 after:tw-border-t after:tw-pb-0 after:tw-mt-5 sm:tw-text-xl "
                }, "Basic Info"), g.createElement("button", {
                    type: "button",
                    className: " tw-text-gray-400 tw-bg-gray-700 tw-rounded-full tw-text-sm tw-w-10 tw-h-10 tw-ml-auto sm:tw-w-8 sm:tw-h-8 tw-inline-flex tw-justify-center tw-items-center hover:tw-bg-gray-600 hover:tw-text-white tw-border-none tw-block sm:tw-absolute sm:-tw-right-4 sm:-tw-top-4 ",
                    onClick: function() {
                        return w()
                    },
                    "aria-label": "Close Modal"
                }, g.createElement(I.$1, {
                    icon: D.faXmark
                }), g.createElement("span", {
                    className: "tw-sr-only"
                }, "Close modal"))), g.createElement("div", {
                    className: "tw-p-5"
                }, Qe && g.createElement("div", {
                    className: "tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-pb-5"
                }, g.createElement("div", {
                    className: "tw-flex tw-flex-col tw-mb-5 sm:tw-mb-0"
                }, g.createElement("h7", {
                    className: "tw-mb-5"
                }, "Profile Icon"), g.createElement("div", {
                    className: "tw-relative"
                }, !Pe && g.createElement("img", {
                    src: De || We || _e,
                    alt: "".concat(ze, "'s user icon"),
                    className: "tw-w-40 tw-h-40 tw-rounded-full tw-shadow-lg tw-ml-5"
                }), Pe && g.createElement(I.UU, {
                    className: "tw-w-40 tw-h-40 tw-rounded-full tw-ml-5 tw-shadow-lg"
                }), g.createElement("div", {
                    className: " tw-absolute tw-top-0 tw-opacity-0 tw-w-40 tw-h-40 tw-rounded-full tw-shadow-lg tw-ml-5 tw-bg-dark-grey-transparent tw-cursor-pointer hover:tw-opacity-100 tw-ease-in-out tw-duration-300 ",
                    role: "button",
                    tabIndex: 0,
                    onClick: function() {
                        W("profileIcon"), q(!0)
                    },
                    "aria-label": "Edit Profile Icon"
                }, g.createElement("div", {
                    className: "tw-flex tw-justify-center tw-align-middle tw-flex-col tw-h-full tw-w-full"
                }, g.createElement(I.$1, {
                    icon: u.Iw,
                    className: "tw-text-3xl"
                }))))), g.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, g.createElement("h7", {
                    className: "tw-mb-5"
                }, "Profile Picture"), g.createElement("div", {
                    className: "tw-relative"
                }, !Pe && g.createElement("img", {
                    src: _e,
                    alt: "".concat(ze, "'s profile"),
                    className: "tw-w-80 tw-h-auto tw-rounded-md tw-shadow-lg"
                }), Pe && g.createElement(I.UU, {
                    className: "tw-w-80 tw-h-44 tw-rounded-md tw-shadow-lg"
                }), g.createElement("div", {
                    className: " tw-absolute tw-top-0 tw-bottom-0 tw-opacity-0 tw-w-80 tw-h-auto tw-rounded-md tw-bg-dark-grey-transparent tw-cursor-pointer hover:tw-opacity-100 tw-ease-in-out tw-duration-300 ",
                    role: "button",
                    tabIndex: 0,
                    onClick: function() {
                        W("profilePicture"), q(!0)
                    },
                    "aria-label": "Edit Profile Picture"
                }, g.createElement("div", {
                    className: "tw-flex tw-justify-center tw-align-middle tw-flex-col tw-h-full tw-w-full"
                }, g.createElement(I.$1, {
                    icon: u.Iw,
                    className: "tw-text-3xl"
                })))))), g.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, g.createElement("div", {
                    className: "tw-pb-5 tw-flex tw-flex-col"
                }, g.createElement("label", {
                    className: "tw-mb-3",
                    htmlFor: "input-status-message"
                }, "Status"), g.createElement("div", {
                    className: "tw-flex tw-flex-col sm:tw-flex-row"
                }, g.createElement(ee, {
                    className: "tw-bg-black tw-rounded tw-p-4 tw-relative sm:tw-w-[9em]",
                    statusType: p,
                    onChange: b
                }), g.createElement("input", {
                    id: "input-status-message",
                    className: " tw-rounded tw-h-14 tw-p-4 tw-flex-grow tw-border-none tw-bg-darker-grey placeholder:tw-text-placeholder-text tw-mt-4 sm:tw-mt-0 sm:tw-ml-4 ",
                    type: "text",
                    placeholder: "Customize your status message here.",
                    onChange: function(e) {
                        return C(e.target.value)
                    },
                    value: S
                })))), g.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, g.createElement("div", {
                    className: "tw-pb-5 tw-flex tw-flex-col"
                }, g.createElement("label", {
                    className: "tw-mb-3",
                    htmlFor: "textarea-bio"
                }, "Description"), g.createElement("textarea", {
                    id: "textarea-bio",
                    className: " tw-bg-darker-grey tw-border-none placeholder:tw-text-placeholder-text tw-rounded tw-min-h-[7rem] tw-p-4 ",
                    type: "text",
                    placeholder: "Introduce yourself in any way you like.",
                    onChange: function(e) {
                        return U(e.target.value)
                    },
                    value: R
                }))), g.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, g.createElement("div", {
                    className: "tw-pb-5 tw-flex tw-flex-col"
                }, g.createElement("label", {
                    className: "tw-mb-3",
                    htmlFor: "select-languages"
                }, "Languages"), g.createElement("div", {
                    className: "tw-flex tw-flex-col sm:tw-flex-row sm:tw-items-center",
                    id: "select-languages"
                }, X.map((function(e) {
                    return g.createElement(xe, {
                        key: e.code,
                        className: "tw-w-fit tw-my-2 sm:tw-my-2",
                        language: e,
                        onChange: function(e) {
                            ! function(e) {
                                var t = e.from,
                                    r = e.to,
                                    n = X.findIndex((function(e) {
                                        return t.code === e.code
                                    })),
                                    a = (0, _.Z)(X);
                                if (null === r) return a.splice(n, 1), void Y(a);
                                a[n] = r, Y(a)
                            }(e)
                        },
                        options: re
                    })
                })), G && g.createElement(be, {
                    key: "Add new language",
                    ariaLabel: "Add new language",
                    options: re,
                    defaultValue: null,
                    defaultIsOpen: !0,
                    onChange: function(e) {
                        var t = e.value,
                            r = e.label;
                        Y([].concat((0, _.Z)(X), [{
                            title: r,
                            code: t
                        }])), B(!1)
                    }
                }), !G && X.length < y.Vh && g.createElement("button", {
                    type: "button",
                    className: " tw-w-10 tw-h-10 tw-border-0 tw-rounded-sm tw-bg-button-bg tw-text-highlight tw-leading-none hover:tw-bg-button-bg-100 hover:tw-text-white ",
                    onClick: function() {
                        return B(!0)
                    },
                    "aria-label": "Add new language"
                }, g.createElement(I.$1, {
                    icon: Q.r8
                }))))), g.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, g.createElement("div", {
                    className: "tw-pb-5 tw-flex tw-flex-col"
                }, g.createElement("label", {
                    className: "tw-mb-3",
                    htmlFor: "edit-social-links"
                }, "Social Links"), oe.map((function(e, t) {
                    return g.createElement(Ee, {
                        id: "edit-social-links",
                        key: e,
                        value: e,
                        order: t + 1,
                        socialLinksArray: oe,
                        onChange: function(e) {
                            var t = e.fromValue,
                                r = e.toValue,
                                n = oe.findIndex((function(e) {
                                    return e === t
                                })),
                                a = (0, _.Z)(oe);
                            a[n] = r, ie(a)
                        },
                        onDelete: function(e) {
                            ie((0, _.Z)(oe.filter((function(t) {
                                return t !== e
                            }))))
                        }
                    })
                })), (null == oe ? void 0 : oe.length) < 3 && g.createElement(g.Fragment, null, g.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-row tw-items-center"
                }, g.createElement("form", {
                    onSubmit: function(e) {
                        e.preventDefault(), Ye()
                    },
                    className: "tw-w-full"
                }, g.createElement("input", {
                    className: "\n                          tw-bg-darker-grey\n                          placeholder:tw-text-placeholder-text\n                          tw-rounded\n                          tw-h-14\n                          tw-p-4\n                          tw-w-full\n                          ".concat(fe ? "tw-border-red tw-border-solid" : "tw-border-none", "\n                        "),
                    type: "text",
                    value: we,
                    onChange: function(e) {
                        return ue(e.target.value)
                    },
                    onBlur: function() {
                        return Ye()
                    },
                    placeholder: "Add links to your social media accounts."
                })), g.createElement("button", {
                    type: "button",
                    className: " tw-w-9 tw-h-9 tw-ml-4 tw-border-0 tw-rounded-md tw-bg-button-bg tw-text-highlight tw-leading-none hover:tw-bg-button-bg-100 hover:tw-text-white "
                }, g.createElement(I.$1, {
                    icon: Q.r8
                }))), fe && g.createElement("small", {
                    className: "tw-text-red tw-pt-2"
                }, ye)))), Le && g.createElement("div", {
                    className: "card danger tw-mt-5 tw-flex tw-flex-col"
                }, g.createElement("span", null, g.createElement(I.$1, {
                    icon: L.eH,
                    color: "red"
                }), (null === (n = Re.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Failed to update profile."))), g.createElement("div", {
                    className: "tw-flex tw-items-center tw-p-6 tw-space-x-2 tw-justify-end"
                }, g.createElement("button", {
                    type: "button",
                    className: "tw-h-9 tw-border-0 tw-px-3 tw-py-2 tw-rounded-sm tw-w-48 tw-bg-button-bg-grey tw-leading-none",
                    onClick: function() {
                        return w()
                    }
                }, "Cancel"), g.createElement("button", {
                    type: "button",
                    className: " tw-w-48 tw-h-9 tw-border-0 tw-rounded-sm tw-px-3 tw-py-2 tw-bg-button-bg tw-text-highlight tw-leading-none hover:tw-bg-button-bg-100 hover:tw-text-white ",
                    "aria-label": "Confirm Profile Update",
                    onClick: function() {
                        return e = X.map((function(e) {
                            return "language_".concat(e.code)
                        })), t = He.filter((function(e) {
                            return e.startsWith("language")
                        })).filter((function(t) {
                            return !e.includes(t)
                        })), r = e.filter((function(e) {
                            return !He.includes(e)
                        })), void Fe({
                            userId: l,
                            data: {
                                status: p,
                                statusDescription: S,
                                bio: R,
                                bioLinks: oe
                            },
                            tagsToRemove: t,
                            tagsToAdd: r
                        });
                        var e, t, r
                    },
                    disabled: Ze
                }, "Confirm", Ze && g.createElement(I.$1, {
                    icon: o.LM,
                    spin: !0,
                    className: "tw-ml-3"
                }))))))
            };
            Ne.propTypes = {
                userId: q().string.isRequired,
                isOpen: q().bool,
                cancelCallback: q().func
            };
            const ke = Ne;
            var Ie = r(13461),
                Se = r(86791),
                Fe = r(69677),
                Ce = function(e) {
                    var t = e.userId,
                        r = void 0 === t ? null : t,
                        l = e.selectedCallback,
                        i = void 0 === l ? function() {} : l,
                        s = (0, v.I0)(),
                        c = (0, Fe.ge)(r, {
                            skip: null === r
                        }),
                        w = c.data,
                        u = void 0 === w ? {} : w,
                        d = c.isFetching,
                        m = c.isSuccess,
                        f = (0, Se.G)({
                            type: "friend"
                        }, {
                            skip: !m || !(null != u && u.isFriend)
                        }),
                        b = f.data,
                        h = void 0 === b ? [] : b,
                        y = f.isFetching,
                        E = (0, B.Xc)(),
                        N = (0, a.Z)(E, 2),
                        k = N[0],
                        S = (N[1].isLoading, d || y),
                        F = function() {
                            var e = (0, n.Z)(p().mark((function e() {
                                var t;
                                return p().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = h.find((function(e) {
                                                return e.favoriteId === r
                                            })), e.prev = 1, e.next = 4, k({
                                                type: "friend",
                                                id: t.id,
                                                groupName: t.tags[0]
                                            }).unwrap();
                                        case 4:
                                            return e.abrupt("return", s((0, x.d)({
                                                title: "Favorite Removed",
                                                icon: Ie.T,
                                                message: "Successfully removed favorite.",
                                                color: "success",
                                                timeout: 3e3
                                            })));
                                        case 7:
                                            return e.prev = 7, e.t0 = e.catch(1), console.error("Error deleting favorite friend", e.t0), e.abrupt("return", s((0, x.d)({
                                                title: "Favorite Removed",
                                                icon: Ie.T,
                                                message: "Failed to remove favorite.",
                                                color: "danger",
                                                timeout: 3e3
                                            })));
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 7]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    if (!m) return null;
                    if (S) return g.createElement("span", {
                        className: "\n          tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-2.5\n          tw-text-center tw-cursor-pointer tw-items-center\n        ",
                        role: "alert",
                        "aria-busy": "true"
                    }, g.createElement(I.$1, {
                        icon: o.LM,
                        spin: !0
                    }));
                    if (!u.isFriend) return null;
                    var C = h.some((function(e) {
                            return e.favoriteId === r
                        })),
                        Z = function() {
                            if (!S) return C ? F() : i(!0)
                        };
                    return g.createElement("span", {
                        className: "\n        hover:tw-text-white hover:tw-bg-button-border\n        tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-2.5\n        tw-text-center tw-cursor-pointer tw-items-center\n      ",
                        role: "button",
                        tabIndex: 0,
                        onClick: Z,
                        disabled: S,
                        onKeyDown: function(e) {
                            if ("enter" === e.key.toLowerCase()) return Z()
                        },
                        "aria-label": "".concat(C ? "Unfavorite" : "Favorite", " User")
                    }, S && g.createElement(I.$1, {
                        icon: o.LM,
                        spin: !0,
                        "aria-label": "loading",
                        role: "progressbar"
                    }), g.createElement(I.$1, {
                        icon: Ie.T
                    }), " ", C ? "Unfavorite" : "Favorite")
                };
            Ce.propTypes = {
                userId: q().string
            };
            const Ze = Ce;
            var Te = r(12478),
                Le = r(72562),
                Re = function(e) {
                    var t = e.userId,
                        r = e.className,
                        l = void 0 === r ? "" : r,
                        o = (0, v.I0)(),
                        i = (0, Fe.ge)(t, {
                            skip: null === t
                        }),
                        s = i.data,
                        c = void 0 === s ? {} : s,
                        w = i.isError,
                        u = i.error,
                        d = i.isSuccess,
                        m = (0, Fe.I0)(),
                        f = (0, a.Z)(m, 2),
                        b = f[0],
                        h = f[1].isLoading,
                        y = (0, Fe.oK)(),
                        E = (0, a.Z)(y, 2),
                        N = E[0],
                        k = E[1].isLoading,
                        S = (0, Fe.Gk)(),
                        F = (0, a.Z)(S, 2),
                        C = F[0],
                        Z = F[1].isLoading,
                        T = h || k || Z;
                    w && (console.error("Friend Status Error:", u), o((0, x.d)({
                        title: "Friend Status",
                        icon: L.eH,
                        message: "Failed to get friend status, Please try again later.",
                        color: "danger",
                        timeout: 3e3
                    })));
                    var R, U, A, P, M = {
                            isFriend: {
                                text: "Unfriend",
                                icon: Te.a1,
                                clickHandler: (P = (0, n.Z)(p().mark((function e() {
                                    var r, n;
                                    return p().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, N({
                                                    userId: t
                                                }).unwrap();
                                            case 3:
                                                o((0, x.d)({
                                                    title: "Friend Request",
                                                    icon: Ie.T,
                                                    message: "Successfully Unfriended.",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), (0, Le.Kz)("Social_Unfriend", {
                                                    targetUserId: t,
                                                    source: "web"
                                                }), e.next = 12;
                                                break;
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(0), n = (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data.error) || void 0 === r ? void 0 : r.message) || (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.data.error), o((0, x.d)({
                                                    title: "Friend Request",
                                                    icon: L.eH,
                                                    message: "Failed to unfriend: ".concat(n),
                                                    color: "danger",
                                                    timeout: 3e3
                                                })), console.error(n);
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 7]
                                    ])
                                }))), function() {
                                    return P.apply(this, arguments)
                                })
                            },
                            incomingRequest: {
                                text: "Accept Friend Request",
                                icon: Ie.T,
                                clickHandler: (A = (0, n.Z)(p().mark((function e() {
                                    var r, n;
                                    return p().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, b({
                                                    userId: t
                                                }).unwrap();
                                            case 3:
                                                o((0, x.d)({
                                                    title: "Friend Request",
                                                    icon: Ie.T,
                                                    message: "Friend Request Accepted.",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), (0, Le.Kz)("Social_AcceptFriendRequest", {
                                                    targetUserId: t,
                                                    source: "web"
                                                }), e.next = 12;
                                                break;
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(0), n = (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data.error) || void 0 === r ? void 0 : r.message) || (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.data.error), o((0, x.d)({
                                                    title: "Friend Request",
                                                    icon: L.eH,
                                                    message: "Failed to accept friend request: ".concat(n),
                                                    color: "danger",
                                                    timeout: 3e3
                                                })), console.error(n);
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 7]
                                    ])
                                }))), function() {
                                    return A.apply(this, arguments)
                                })
                            },
                            outgoingRequest: {
                                text: "Cancel Friend Request",
                                icon: Ie.T,
                                clickHandler: (U = (0, n.Z)(p().mark((function e() {
                                    var r, n;
                                    return p().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, C({
                                                    userId: t
                                                }).unwrap();
                                            case 3:
                                                o((0, x.d)({
                                                    title: "Friend Request",
                                                    icon: Ie.T,
                                                    message: "Friend Request Canceled.",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), e.next = 11;
                                                break;
                                            case 6:
                                                e.prev = 6, e.t0 = e.catch(0), n = (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data.error) || void 0 === r ? void 0 : r.message) || (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.data.error), o((0, x.d)({
                                                    title: "Friend Request",
                                                    icon: L.eH,
                                                    message: "Failed to Cancel friend request: ".concat(n, "."),
                                                    color: "danger",
                                                    timeout: 3e3
                                                })), console.error(n);
                                            case 11:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 6]
                                    ])
                                }))), function() {
                                    return U.apply(this, arguments)
                                })
                            },
                            addFriend: {
                                text: "Add Friend",
                                icon: Ie.T,
                                clickHandler: (R = (0, n.Z)(p().mark((function e() {
                                    var r, n;
                                    return p().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, b({
                                                    userId: t
                                                }).unwrap();
                                            case 3:
                                                o((0, x.d)({
                                                    title: "Friend Request",
                                                    icon: Ie.T,
                                                    message: "Friend Request Sent.",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), (0, Le.Kz)("Social_SendFriendRequest", {
                                                    targetUserId: t,
                                                    source: "web"
                                                }), e.next = 12;
                                                break;
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(0), n = (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data.error) || void 0 === r ? void 0 : r.message) || (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.data.error), o((0, x.d)({
                                                    title: "Friend Request",
                                                    icon: L.eH,
                                                    message: "Failed to send friend request: ".concat(n, "."),
                                                    color: "danger",
                                                    timeout: 3e3
                                                })), console.error(n);
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 7]
                                    ])
                                }))), function() {
                                    return R.apply(this, arguments)
                                })
                            }
                        },
                        q = (0, g.useMemo)((function() {
                            var e, t = null !== (e = Object.keys(c).find((function(e) {
                                return c[e]
                            }))) && void 0 !== e ? e : "addFriend";
                            return M[t]
                        }), [c]);
                    if (d) {
                        var j = q.icon,
                            O = q.text,
                            $ = q.clickHandler;
                        return g.createElement(I.zx, {
                            className: l,
                            onClick: $,
                            loading: T,
                            "aria-label": O
                        }, g.createElement(I.$1, {
                            icon: j
                        }), " ", O)
                    }
                    return null
                };
            Re.propTypes = {
                userId: q().string.isRequired,
                className: q().string
            };
            const Ue = Re;
            var Ae = r(65394),
                Pe = r(85020),
                Me = r(93261),
                qe = r(78666),
                je = function(e) {
                    var t = e.userId,
                        r = (0, N.GR)(t),
                        n = r.data,
                        l = r.isSuccess,
                        o = (0, Me.dj)({
                            userId: t
                        }),
                        i = o.data,
                        s = o.isSuccess,
                        c = (0, g.useRef)(null),
                        w = (0, g.useState)(!0),
                        u = (0, a.Z)(w, 2),
                        d = u[0],
                        m = u[1],
                        f = (0, g.useState)(null),
                        p = (0, a.Z)(f, 2),
                        v = p[0],
                        b = p[1];
                    (0, g.useEffect)((function() {
                        c.current && m(c.current.scrollWidth <= c.current.offsetWidth)
                    }), [i]);
                    var h = (0, g.useMemo)((function() {
                            return !!c.current && c.current.scrollLeft >= c.current.scrollWidth - c.current.offsetWidth
                        }), [v]),
                        x = (0, g.useMemo)((function() {
                            return !c.current || c.current.scrollLeft <= 200
                        }), [v]);
                    if (l && s && i.length > 0) {
                        var y = n.displayName;
                        return g.createElement("div", {
                            className: "tw-py-6 tw-relative tw-w-full"
                        }, g.createElement("h2", {
                            className: "tw-text-4xl tw-no-underline tw-font-semibold tw-inline-block tw-ml-1.5 tw-mb-0"
                        }, y, "'s Groups"), g.createElement("div", {
                            ref: c,
                            onScroll: function(e) {
                                return b(e.currentTarget.scrollLeft)
                            },
                            className: "tw-snap-x tw-whitespace-nowrap tw-overflow-x-scroll tw-snap-mandatory tw-scroll-smooth"
                        }, i.map((function(e) {
                            return g.createElement("div", {
                                key: e.groupId,
                                className: "tw-mr-4 tw-mt-4 tw-snap-center tw-w-80 tw-inline-block tw-h-64 tw-scroll-ml-6 tw-snap-always"
                            }, g.createElement(qe.Z, {
                                group: e
                            }))
                        })), g.createElement("button", {
                            className: "\n              tw-bg-button-bg tw-absolute tw--left-3 tw-top-40 tw-border-none tw-rounded-lg tw-w-12 tw-h-14 tw-cursor-pointer\n              ".concat(x ? "tw-hidden" : "", "\n              tw-z-30\n            "),
                            type: "button",
                            onClick: function(e) {
                                e.stopPropagation(), c.current.scrollLeft -= 200
                            }
                        }, g.createElement(I.$1, {
                            icon: Pe.A3,
                            className: "tw-text-highlight tw-text-2xl"
                        })), g.createElement("button", {
                            className: "\n              tw-bg-button-bg tw-absolute tw--right-3 tw-top-40 tw-border-none tw-rounded-lg tw-w-12 tw-h-14 tw-cursor-pointer\n              ".concat(h || d ? "tw-hidden" : "", "\n              tw-z-30\n            "),
                            type: "button",
                            onClick: function(e) {
                                e.stopPropagation(), c.current.scrollLeft += 200
                            }
                        }, g.createElement(I.$1, {
                            icon: Ae._t,
                            className: "tw-text-highlight tw-text-2xl"
                        }))))
                    }
                    return null
                };
            je.propTypes = {
                userId: q().string.isRequired
            };
            const Oe = je;
            var $e = r(14343),
                We = r(89182),
                _e = r(1208),
                ze = function(e) {
                    var t = e.userId,
                        r = (0, k.IB)().data,
                        n = (0, N.GR)(t),
                        l = n.data,
                        o = n.isSuccess,
                        i = (0, _e.g9)({
                            userId: t,
                            offset: 0,
                            sort: "updated",
                            order: "descending",
                            n: 100,
                            releaseStatus: t === (null == r ? void 0 : r.id) ? "all" : "public"
                        }),
                        s = i.data,
                        c = void 0 === s ? [] : s,
                        w = i.isSuccess,
                        u = (0, g.useRef)(null),
                        d = (0, g.useState)(!0),
                        m = (0, a.Z)(d, 2),
                        f = m[0],
                        p = m[1],
                        v = (0, g.useState)(null),
                        b = (0, a.Z)(v, 2),
                        h = b[0],
                        x = b[1];
                    (0, g.useEffect)((function() {
                        u.current && p(u.current.scrollWidth <= u.current.offsetWidth)
                    }), [c]);
                    var y = (0, g.useMemo)((function() {
                            return !!u.current && u.current.scrollLeft >= u.current.scrollWidth - u.current.offsetWidth
                        }), [h]),
                        E = (0, g.useMemo)((function() {
                            return !u.current || u.current.scrollLeft <= 300
                        }), [h]);
                    if (o && w && c.length > 0) {
                        var S = l.displayName;
                        return g.createElement("div", {
                            className: "tw-py-6 tw-relative tw-w-full"
                        }, g.createElement("h2", {
                            className: "tw-text-4xl tw-no-underline tw-font-semibold tw-inline-block tw-ml-1.5 tw-mb-0"
                        }, S, "'s Worlds"), g.createElement("div", {
                            ref: u,
                            onScroll: function(e) {
                                return x(e.currentTarget.scrollLeft)
                            },
                            className: "tw-snap-x tw-whitespace-nowrap tw-overflow-x-scroll tw-snap-mandatory tw-scroll-smooth"
                        }, c.map((function(e) {
                            return g.createElement("div", {
                                key: e.id,
                                className: "tw-snap-center tw-w-80 tw-inline-block tw-h-96 tw-scroll-ml-6 tw-snap-always"
                            }, g.createElement(We.Z, {
                                world: e,
                                className: "tw-mr-4"
                            }))
                        })), g.createElement("button", {
                            className: "\n              tw-bg-button-bg tw-absolute tw--left-3 tw-top-60 tw-border-none tw-rounded-lg tw-w-12 tw-h-14 tw-cursor-pointer\n              ".concat(E ? "tw-hidden" : "", "\n              tw-z-30\n            "),
                            type: "button",
                            onClick: function(e) {
                                e.stopPropagation(), u.current.scrollLeft -= 300
                            }
                        }, g.createElement(I.$1, {
                            icon: Pe.A3,
                            className: "tw-text-highlight tw-text-2xl"
                        })), g.createElement("button", {
                            className: "\n              tw-bg-button-bg tw-absolute tw--right-3 tw-top-60 tw-border-none tw-rounded-lg tw-w-12 tw-h-14 tw-cursor-pointer\n              ".concat(y || f ? "tw-hidden" : "", "\n              tw-z-30\n            "),
                            type: "button",
                            onClick: function(e) {
                                e.stopPropagation(), u.current.scrollLeft += 300
                            }
                        }, g.createElement(I.$1, {
                            icon: Ae._t,
                            className: "tw-text-highlight tw-text-2xl"
                        }))))
                    }
                    return null
                };
            ze.propTypes = {
                userId: q().string.isRequired
            };
            const De = ze;
            const He = function() {
                var e = (0, b.UO)().userId,
                    t = void 0 === e ? null : e,
                    r = (0, v.I0)(),
                    f = (0, k.IB)().data,
                    C = t === (null == f ? void 0 : f.id),
                    Z = (0, g.useState)(!1),
                    T = (0, a.Z)(Z, 2),
                    L = T[0],
                    R = T[1],
                    U = (0, g.useState)(!1),
                    A = (0, a.Z)(U, 2),
                    P = A[0],
                    M = A[1],
                    q = (0, g.useState)(!1),
                    j = (0, a.Z)(q, 2),
                    O = j[0],
                    $ = j[1],
                    _ = (0, g.useState)(null),
                    z = (0, a.Z)(_, 2),
                    D = z[0],
                    H = z[1],
                    G = (0, g.useState)(null),
                    B = (0, a.Z)(G, 2),
                    K = B[0],
                    Q = B[1],
                    X = (0, g.useState)(""),
                    Y = (0, a.Z)(X, 2),
                    J = Y[0],
                    ee = Y[1],
                    te = (0, E.y)().data,
                    re = (0, k.hd)(null, {
                        skip: C
                    }),
                    ne = re.data,
                    ae = re.isSuccess;
                (0, g.useEffect)((function() {
                    if (ae) {
                        var e = ne.filter((function(e) {
                            return e.targetUserId === t
                        }));
                        H(e.some((function(e) {
                            return "mute" === e.type
                        }))), Q(e.some((function(e) {
                            return "block" === e.type
                        })))
                    }
                }), [ne]);
                var le = (0, N.GR)(t, {
                        skip: null === t
                    }),
                    oe = le.data,
                    ie = le.isError,
                    se = le.isSuccess;
                (0, g.useEffect)((function() {
                    null !== t && se && (ee(oe.note), M(!1))
                }), [oe]);
                var ce = (0, k.vO)(),
                    we = (0, a.Z)(ce, 2),
                    ue = we[0],
                    de = we[1].isLoading,
                    me = (0, k.SU)(),
                    fe = (0, a.Z)(me, 2),
                    pe = fe[0],
                    ge = fe[1].isLoading,
                    ve = (0, N.kh)(),
                    be = (0, a.Z)(ve, 1)[0],
                    he = de || ge,
                    xe = function() {
                        var e = (0, n.Z)(p().mark((function e() {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, F.zp)(window.location.href)();
                                    case 2:
                                        r((0, x.d)({
                                            title: "Player Profile",
                                            icon: m.IL,
                                            message: "Player profile link copied to clipboard.",
                                            color: "success",
                                            timeout: 5e3
                                        }));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ye = function() {
                        var e = (0, n.Z)(p().mark((function e() {
                            var n, a;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (J !== oe.note) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.prev = 2, e.next = 5, be({
                                            userId: t,
                                            note: J
                                        }).unwrap();
                                    case 5:
                                        r((0, x.d)({
                                            title: "Player Notes",
                                            icon: d.$9,
                                            message: "\n            Player Notes Updated!\n          ",
                                            color: "success",
                                            timeout: 5e3
                                        })), e.next = 12;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(2), console.error("Player Moderation Error:", e.t0), r((0, x.d)({
                                            title: "Player Notes",
                                            icon: d.$9,
                                            message: "\n            Update Player Notes Failed.\n            ".concat((null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || (null === (a = e.t0.data) || void 0 === a ? void 0 : a.error), "\n          "),
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 8]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ee = function() {
                        var e = (0, n.Z)(p().mark((function e(n) {
                            var a, l, o, i, s, c, w;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a = n.type, l = {
                                                mute: {
                                                    apply: "Mute player",
                                                    remove: "Unmute player"
                                                },
                                                block: {
                                                    apply: "Block player",
                                                    remove: "Unblock player"
                                                }
                                            }, o = {
                                                userId: t,
                                                moderationType: a
                                            }, !("block" === a && K || "mute" === a && D)) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.prev = 4, e.next = 7, pe(o).unwrap();
                                    case 7:
                                        M(!1), r((0, x.d)({
                                            title: "Player Profile",
                                            icon: m.IL,
                                            message: "".concat(l[a].remove, " successfully."),
                                            color: "success",
                                            timeout: 5e3
                                        })), e.next = 15;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(4), console.error("Player Moderation Error:", e.t0), r((0, x.d)({
                                            title: "Player Profile",
                                            icon: d.$9,
                                            message: "\n            ".concat(l[a].remove, " failed.\n            ").concat((null === (i = e.t0.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) || (null === (s = e.t0.data) || void 0 === s ? void 0 : s.error), "\n          "),
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 15:
                                        return e.abrupt("return");
                                    case 16:
                                        return e.prev = 16, e.next = 19, ue(o).unwrap();
                                    case 19:
                                        M(!1), r((0, x.d)({
                                            title: "Player Profile",
                                            icon: m.IL,
                                            message: "".concat(l[a].apply, " successfully."),
                                            color: "success",
                                            timeout: 5e3
                                        })), e.next = 27;
                                        break;
                                    case 23:
                                        e.prev = 23, e.t1 = e.catch(16), console.error("Player Moderation Error:", e.t1), r((0, x.d)({
                                            title: "Player Profile",
                                            icon: d.$9,
                                            message: "\n            ".concat(l[a].apply, " failed.\n            ").concat((null === (c = e.t1.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message) || (null === (w = e.t1.data) || void 0 === w ? void 0 : w.error), "\n          "),
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 27:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 11],
                                [16, 23]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                if (ie) return null;
                if (se) {
                    var Ne, Ie, Se, Fe = oe.displayName,
                        Ce = oe.bio,
                        Te = oe.bioLinks,
                        Le = oe.tags,
                        Re = oe.profilePicOverride,
                        Ae = oe.currentAvatarImageUrl,
                        Pe = oe.badges,
                        Me = (0, F.H1)(Le, null !== (Ne = null == te || null === (Ie = te.constants) || void 0 === Ie || null === (Ie = Ie.LANGUAGE) || void 0 === Ie ? void 0 : Ie.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== Ne ? Ne : y.O),
                        qe = Me.some((function(e) {
                            return e.length > 8
                        }));
                    return g.createElement(S.rg, null, g.createElement(I.$4, null, null !== (Se = se && (null == oe ? void 0 : oe.displayName)) && void 0 !== Se ? Se : "User"), C && g.createElement(ke, {
                        userId: t,
                        isOpen: L,
                        cancelCallback: function() {
                            return R(!1)
                        }
                    }), !C && g.createElement(V, {
                        friendUserId: t,
                        isOpen: O,
                        cancelCallback: function() {
                            return $(!1)
                        }
                    }), g.createElement("div", {
                        className: "tw-flex tw-flex-col md:tw-flex-row tw-py-9"
                    }, g.createElement("h2", {
                        className: "tw-text-4xl tw-no-underline tw-font-semibold tw-inline-block tw-ml-1.5 tw-mb-0"
                    }, Fe, "'s Profile"), g.createElement("div", {
                        className: "".concat(C ? "" : "tw-hidden", " tw-flex tw-flex-col tw-justify-center md:tw-px-4")
                    }, g.createElement("div", {
                        className: "tw-flex tw-flex-row tw-ml-2 tw-mt-2 md:tw-m-0"
                    }, g.createElement(I.zx, {
                        className: "tw-rounded-full tw-h-[40px] tw-w-[40px]",
                        "aria-label": "Edit Profile",
                        onClick: function() {
                            return R(!L)
                        }
                    }, g.createElement(I.$1, {
                        icon: u.Iw
                    }))))), g.createElement("div", {
                        className: "tw-relative tw-bg-cover tw-bg-center tw-rounded-lg tw-mt-16 tw-flex tw-z-0 tw-@container/profile",
                        style: {
                            backgroundImage: "url(".concat(Re || Ae, ")")
                        }
                    }, g.createElement("div", {
                        className: "tw-bg-cover tw-rounded-lg tw-bg-grey/[97%] tw-w-full"
                    }, g.createElement("div", {
                        className: "\n                  tw-flex tw-z-10 tw--top-16 tw--mb-16\n                  tw-relative tw-justify-between\n                  tw-w-full\n                  tw-px-0 xs:tw-px-9 sm:tw-pe-6\n                  @[1096px]/profile:tw-pe-6\n                  tw-flex-wrap sm:tw-flex-nowrap\n                "
                    }, g.createElement($e.Z, {
                        userId: t,
                        className: "tw-w-full sm:tw-w-80 md:tw-w-full xl:tw-w-86 tw-min-w-[355px]"
                    }), g.createElement("div", {
                        className: "\n                    tw-flex tw-flex-col\n                    tw-pt-6 sm:tw-pt-24 tw-pl-0 sm:tw-pl-6\n                    tw-w-full\n                    @[1096px]/profile:tw-pt-24\n                  "
                    }, g.createElement("div", {
                        className: "\n                      tw-flex tw-justify-start\n                      tw-flex-col\n                      @[1096px]/profile:tw-flex-row-reverse\n                    "
                    }, g.createElement("div", {
                        className: "\n                        tw-flex\n                        tw-mb-0 tw-h-fit\n                        tw-flex-col\n                        tw-w-full\n                        tw-justify-end\n                        @[1096px]/profile:tw-w-auto\n                        @[1096px]/profile:tw-flex-row\n                      "
                    }, !C && g.createElement(Ue, {
                        userId: t,
                        className: "tw-mb-4 @[1096px]/profile:tw-mr-3"
                    }), g.createElement(I.zx, {
                        className: "tw-mb-4 tw-mt-2 @[1096px]/profile:tw-mt-0",
                        onClick: xe
                    }, g.createElement(I.$1, {
                        icon: w.Dr
                    }), " Share"), !C && g.createElement("div", {
                        className: "tw-relative"
                    }, g.createElement(I.zx, {
                        className: "tw-mb-4 @[1096px]/profile:tw-ml-3",
                        onClick: function() {
                            return M(!P)
                        },
                        "aria-label": "Show More Options"
                    }, "More  ", g.createElement(I.$1, {
                        icon: c.eW
                    })), P && g.createElement("div", {
                        className: " tw-absolute tw-text-option-inactive tw-bg-option-bg tw-border-solid tw-border-button-border tw-rounded-md tw-font-medium tw-text-base tw-w-full tw-cursor-pointer tw-z-10 @[1096px]/profile:tw-w-40 @[1096px]/profile:tw-right-0 "
                    }, null !== D && g.createElement("span", {
                        className: "\n                                hover:tw-text-white hover:tw-bg-button-border\n                                  tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-2.5\n                                  tw-text-center tw-cursor-pointer tw-items-center\n                                  ".concat(he ? "tw-hidden" : "tw-block", "\n                                "),
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return Ee({
                                type: "mute"
                            })
                        },
                        onKeyDown: function(e) {
                            if ("enter" === e.key.toLowerCase()) return Ee({
                                type: "mute"
                            })
                        },
                        "aria-label": "".concat(D ? "Unmute" : "Mute", " User")
                    }, g.createElement(I.$1, {
                        icon: s.Ek
                    }), " ", D ? "Unmute" : "Mute"), null !== K && g.createElement("span", {
                        className: "\n                                hover:tw-text-white hover:tw-bg-button-border\n                                  tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-2.5\n                                  tw-text-center tw-cursor-pointer tw-items-center\n                                  ".concat(he ? "tw-hidden" : "tw-block", "\n                                "),
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return Ee({
                                type: "block"
                            })
                        },
                        onKeyDown: function(e) {
                            if ("enter" === e.key.toLowerCase()) return Ee({
                                type: "block"
                            })
                        },
                        "aria-label": "".concat(K ? "Unblock" : "Block", " User")
                    }, g.createElement(I.$1, {
                        icon: i.wO
                    }), " ", K ? "Unblock" : "Block"), g.createElement(Ze, {
                        userId: t,
                        selectedCallback: function() {
                            return $(!0)
                        }
                    }), g.createElement("div", {
                        className: "\n                              tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-2.5\n                              tw-text-center tw-items-center\n                              tw-h-20\n                              ".concat(he ? "tw-block" : "tw-hidden", "\n                            ")
                    }, g.createElement(I.$1, {
                        icon: o.LM,
                        spin: !0,
                        className: "tw-h-10"
                    }))))), g.createElement(I.gx, {
                        className: "\n                      tw-flex tw-grow tw-w-auto @[1096px]/profile:tw-h-10 @[1096px]/profile:tw-justify-end @[1096px]/profile:tw-mr-3 tw-relative\n                    ",
                        placeholder: "Add a note about this user",
                        value: J,
                        inputClassName: "\n                      tw-bg-darker-grey\n                      tw-border-none\n                      placeholder:tw-text-placeholder-text\n                      tw-h-auto\n                      @[1096px]/profile:tw-max-w-[400px]\n                    ",
                        "aria-label": "User's Note",
                        onChange: function(e) {
                            return ee(e.target.value)
                        },
                        onBlur: function() {
                            return ye()
                        },
                        maxLength: "256",
                        icon: l.faPencil,
                        iconClassName: "tw-text-sm tw-text-placeholder-text",
                        label: "User's Note",
                        labelClassName: "tw-absolute md:tw-relative md:tw--mr-6 tw-top-0 tw-left-0 tw-h-full tw-pl-3 tw-pt-1 tw-cursor-text"
                    })), g.createElement("div", {
                        className: "tw-flex"
                    }, g.createElement("p", {
                        className: "\n                        tw-whitespace-pre-wrap\n                        tw-overflow-y-auto\n                        tw-text-lighter-grey \n                        tw-my-9 \n                        tw-h-24\n                        tw-w-full tw-col-span-2\n                        tw-hidden\n                        @[1096px]/profile:tw-block\n                        [overflow-wrap:anywhere]\n                      "
                    }, Ce))), g.createElement("div", {
                        className: "tw-absolute tw-right-0 tw-top-2 tw-hidden sm:tw-block"
                    }, g.createElement("div", {
                        className: "tw-flex-row tw-flex"
                    }, !(null == Pe || !Pe.length) && Pe.filter((function(e) {
                        return e.showcased && !e.hidden
                    })).slice(0, 3).sort((function(e, t) {
                        return new Date(t.assignedAt) - new Date(e.assignedAt)
                    })).map((function(e) {
                        return g.createElement("div", {
                            key: e.badgeId,
                            className: "tw-w-11 tw-h-11 tw-mr-3 ".concat("bdg_a60e514a-8cb7-4702-8f24-2786992be1a8" === e.badgeId ? "tw-cursor-grab active:tw-cursor-grabbing" : "")
                        }, g.createElement("img", {
                            src: e.badgeImageUrl,
                            alt: e.badgeDescription,
                            title: e.badgeName
                        }))
                    }))))), g.createElement("div", {
                        className: "\n                tw-px-9 tw-pb-10 sm:tw-pb-9 tw-pt-0 tw-grid tw-grid-cols-2 grid-flow-col tw-gap-x-6\n              "
                    }, g.createElement("p", {
                        className: "\n                    tw-touch-auto\n                    tw-whitespace-pre-wrap tw-h-auto tw-overflow-y-auto\n                    sm:tw-h-36\n                    tw-text-lighter-grey tw-w-full tw-col-span-2\n                    tw-block\n                    @[1096px]/profile:tw-hidden\n                    tw-my-9\n                    [overflow-wrap:anywhere]\n                    ".concat(Me.length > 0 || Te.length > 0 ? "" : "tw-mb-0", "\n                  ")
                    }, Ce), Me.length > 0 && g.createElement("div", {
                        className: "tw-mt-0 xl:tw-mt-2 tw-col-span-2 sm:tw-col-span-1 xl:tw-col-span-1",
                        title: "User Languages"
                    }, g.createElement("h4", {
                        className: "tw-text-h4 xl:tw-mt-8"
                    }, "I speak"), g.createElement("div", {
                        className: "tw-flex tw-mt-4 ".concat(qe ? "tw-flex-col" : "")
                    }, Me.map((function(e) {
                        return g.createElement("div", {
                            key: e,
                            className: "\n                          tw-bg-dark-grey/80 tw-w-fit tw-rounded-full tw-px-2 tw-py-1 tw-text-md tw-font-bold\n                           ".concat(qe ? "tw-mb-3" : "tw-mr-3", "\n                        ")
                        }, g.createElement("span", {
                            className: "tw-px-1"
                        }, e))
                    })))), Te.length > 0 && g.createElement("div", {
                        className: "tw-mt-0 xl:tw-mt-2 tw-col-span-2 sm:tw-col-span-1 xl:tw-col-span-1"
                    }, g.createElement("h4", {
                        className: "tw-text-h4 tw-mt-8 sm:max-xl:tw-mt-0"
                    }, "Social Links"), g.createElement("div", {
                        className: "tw-flex tw-mt-4"
                    }, Te.map((function(e) {
                        return g.createElement(h.QZ, {
                            key: e,
                            url: e,
                            fgColor: "white",
                            className: "tw-mr-3 tw-w-9 tw-h-9",
                            target: "_blank"
                        })
                    }))))))), g.createElement(W, {
                        userId: t
                    }), g.createElement(De, {
                        userId: t
                    }), g.createElement(Oe, {
                        userId: t
                    }))
                }
                return null
            }
        },
        89182: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(87462),
                a = r(45697),
                l = r.n(a),
                o = r(67294),
                i = r(34226),
                s = function(e) {
                    var t;
                    return o.createElement(i.uW, (0, n.Z)({
                        fieldsList: ["occupants", "visits", "favorites", "updated_at"],
                        contentType: "world",
                        data: null !== (t = e.world) && void 0 !== t ? t : e.data
                    }, e))
                };
            s.propTypes = {
                world: l().shape({
                    id: l().string,
                    name: l().string,
                    releaseStatus: l().oneOf(["public", "private"]),
                    occupants: l().number,
                    favorites: l().number,
                    visits: l().number,
                    updated_at: l().string,
                    created_at: l().string,
                    tags: l().arrayOf(l().string),
                    unityPackages: l().arrayOf(l().shape({
                        platform: l().string
                    }))
                }).isRequired,
                fieldsList: l().arrayOf(l().string)
            };
            const c = s
        },
        751: (e, t, r) => {
            r.d(t, {
                Ec: () => u,
                Xc: () => d,
                oy: () => g,
                sd: () => f,
                wu: () => m,
                zZ: () => p
            });
            var n = r(15861),
                a = r(42138),
                l = r(64687),
                o = r.n(l),
                i = r(3845);

            function s(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return c(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var l, o = !0,
                    i = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        i = !0, l = e
                    },
                    f: function() {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (i) throw l
                        }
                    }
                }
            }

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var w = r(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getFavorites: e.query({
                                query: function(e) {
                                    var t = e.n,
                                        r = void 0 === t ? 50 : t,
                                        n = e.offset;
                                    return {
                                        url: "favorites",
                                        params: {
                                            n: r,
                                            offset: void 0 === n ? 0 : n,
                                            type: e.type,
                                            tag: e.tag,
                                            tags: e.tags,
                                            notag: e.notag,
                                            ownerId: e.ownerId
                                        }
                                    }
                                },
                                providesTags: function(e) {
                                    return e ? [].concat((0, a.Z)(e.map((function(e) {
                                        return {
                                            type: "Favorites",
                                            id: e.id
                                        }
                                    }))), [{
                                        type: "Favorites",
                                        id: "PARTIAL-LIST"
                                    }]) : [{
                                        type: "Favorites",
                                        id: "PARTIAL-LIST"
                                    }]
                                }
                            }),
                            getAllFavorites: e.query({
                                queryFn: (l = (0, n.Z)(o().mark((function e(t, r, n, l) {
                                    var i, s, c, w, u, d, m, f;
                                    return o().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                i = t.type, s = t.tag, c = t.tags, w = t.notag, u = t.ownerId, d = [], m = 0;
                                            case 3:
                                                return e.next = 6, l({
                                                    url: "favorites",
                                                    params: {
                                                        n: 50,
                                                        offset: m,
                                                        type: i,
                                                        tag: s,
                                                        tags: c,
                                                        notag: w,
                                                        ownerId: u
                                                    }
                                                });
                                            case 6:
                                                if (!(f = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: f.error
                                                });
                                            case 9:
                                                if (!(f.data.length > 0)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return d.push.apply(d, (0, a.Z)(f.data)), m += 50, e.abrupt("continue", 3);
                                            case 13:
                                                return e.abrupt("break", 16);
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: d
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, t, r, n) {
                                    return l.apply(this, arguments)
                                }),
                                providesTags: function(e) {
                                    return e ? [].concat((0, a.Z)(e.map((function(e) {
                                        return {
                                            type: "Favorites",
                                            id: e.id
                                        }
                                    }))), [{
                                        type: "Favorites",
                                        id: "LIST"
                                    }]) : [{
                                        type: "Favorites",
                                        id: "LIST"
                                    }]
                                }
                            }),
                            getAllFavoriteCounts: e.query({
                                queryFn: (r = (0, n.Z)(o().mark((function e(t, r, n, a) {
                                    var l, i, c, w, u, d, m, f;
                                    return o().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                l = t.type, i = t.ownerId, c = {}, w = 0;
                                            case 3:
                                                return e.next = 6, a({
                                                    url: "favorites",
                                                    params: {
                                                        n: 50,
                                                        offset: w,
                                                        type: l,
                                                        ownerId: i
                                                    }
                                                });
                                            case 6:
                                                if (!(u = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: u.error
                                                });
                                            case 9:
                                                if (!(u.data.length > 0)) {
                                                    e.next = 14;
                                                    break
                                                }
                                                d = s(u.data);
                                                try {
                                                    for (d.s(); !(m = d.n()).done;) f = m.value, c[f.tags[0]] ? c[f.tags[0]] += 1 : c[f.tags[0]] = 1
                                                } catch (e) {
                                                    d.e(e)
                                                } finally {
                                                    d.f()
                                                }
                                                return w += 50, e.abrupt("continue", 3);
                                            case 14:
                                                return e.abrupt("break", 17);
                                            case 17:
                                                return e.abrupt("return", {
                                                    data: c
                                                });
                                            case 18:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, t, n, a) {
                                    return r.apply(this, arguments)
                                }),
                                providesTags: function(e, t, r) {
                                    return [{
                                        type: "FavoritesCount",
                                        id: r.type
                                    }]
                                }
                            }),
                            createFavorite: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "favorites",
                                        method: "POST",
                                        body: {
                                            type: e.type,
                                            favoriteId: e.favoriteId,
                                            tags: [e.groupName]
                                        }
                                    }
                                },
                                onQueryStarted: function(e, t) {
                                    var r = e.type,
                                        n = e.favoriteId,
                                        a = e.groupName,
                                        l = t.dispatch,
                                        o = t.queryFulfilled,
                                        s = l(w.util.updateQueryData("getAllFavorites", {
                                            type: r
                                        }, (function(e) {
                                            e && (-1 === e.findIndex((function(e) {
                                                return e.favoriteId === n
                                            })) && e.push({
                                                id: "fvrt_".concat((0, i.Z)()),
                                                type: r,
                                                favoriteId: n,
                                                tags: [a]
                                            }))
                                        })));
                                    o.catch(s.undo)
                                },
                                invalidatesTags: function(e, t, r) {
                                    var n = r.type,
                                        l = r.groupName;
                                    return t ? [] : [{
                                        type: "Favorites",
                                        id: "PARTIAL-LIST"
                                    }, {
                                        type: "Favorites",
                                        id: "LIST"
                                    }, {
                                        type: "FavoritesCount",
                                        id: n
                                    }].concat((0, a.Z)("world" === n ? [{
                                        type: "FavoriteWorlds",
                                        id: l
                                    }, {
                                        type: "FavoriteWorlds",
                                        id: "all"
                                    }] : []), (0, a.Z)("avatar" === n ? [{
                                        type: "FavoriteAvatars",
                                        id: l
                                    }, {
                                        type: "FavoriteAvatars",
                                        id: "all"
                                    }] : []), (0, a.Z)("friend" === n ? [{
                                        type: "FavoriteFriends",
                                        id: "all"
                                    }] : []))
                                }
                            }),
                            deleteFavorite: e.mutation({
                                query: function(e) {
                                    var t = e.id;
                                    e.type, e.groupName;
                                    return {
                                        url: "favorites/".concat(t),
                                        method: "DELETE"
                                    }
                                },
                                onQueryStarted: function(e, t) {
                                    var r = e.id,
                                        n = e.type,
                                        a = e.groupName,
                                        l = t.dispatch,
                                        o = t.queryFulfilled,
                                        i = l(w.util.updateQueryData("getAllFavorites", {
                                            type: n
                                        }, (function(e) {
                                            if (e) {
                                                var t = e.findIndex((function(e) {
                                                    return e.id === r && e.type === n && e.tags.includes(a)
                                                })); - 1 !== t && e.splice(t, 1)
                                            }
                                        })));
                                    o.catch(i.undo)
                                },
                                invalidatesTags: function(e, t, r) {
                                    var n = r.id,
                                        l = r.type,
                                        o = r.groupName;
                                    return t ? [] : [{
                                        type: "Favorites",
                                        id: n
                                    }, {
                                        type: "Favorites",
                                        id: "PARTIAL-LIST"
                                    }, {
                                        type: "Favorites",
                                        id: "LIST"
                                    }, {
                                        type: "FavoritesCount",
                                        id: l
                                    }].concat((0, a.Z)("world" === l ? [{
                                        type: "FavoriteWorlds",
                                        id: o
                                    }, {
                                        type: "FavoriteWorlds",
                                        id: "all"
                                    }] : []), (0, a.Z)("avatar" === l ? [{
                                        type: "FavoriteAvatars",
                                        id: o
                                    }, {
                                        type: "FavoriteAvatars",
                                        id: "all"
                                    }] : []), (0, a.Z)("friend" === l ? [{
                                        type: "FavoriteFriends",
                                        id: "all"
                                    }] : []))
                                }
                            }),
                            moveFavorite: e.mutation({
                                queryFn: (t = (0, n.Z)(o().mark((function e(t, r, n, a) {
                                    var l, i, s, c, w, u, d;
                                    return o().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return l = t.id, i = t.type, s = t.favoriteId, c = t.oldGroupName, w = t.newGroupName, t.silent, e.next = 3, a({
                                                    url: "favorites/".concat(l),
                                                    method: "DELETE"
                                                });
                                            case 3:
                                                if (!(u = e.sent).error) {
                                                    e.next = 6;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: u.error
                                                });
                                            case 6:
                                                return e.next = 8, a({
                                                    url: "favorites",
                                                    method: "POST",
                                                    body: {
                                                        type: i,
                                                        favoriteId: s,
                                                        tags: [w]
                                                    }
                                                });
                                            case 8:
                                                if (!(d = e.sent).error) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return e.next = 12, a({
                                                    url: "favorites",
                                                    method: "POST",
                                                    body: {
                                                        type: i,
                                                        favoriteId: s,
                                                        tags: [c]
                                                    }
                                                });
                                            case 12:
                                                return e.abrupt("return", {
                                                    error: d.error
                                                });
                                            case 13:
                                                return e.abrupt("return", {
                                                    data: d.data
                                                });
                                            case 14:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, r, n, a) {
                                    return t.apply(this, arguments)
                                }),
                                invalidatesTags: function(e, t, r) {
                                    var n = r.id,
                                        l = r.type,
                                        o = r.oldGroupName,
                                        i = r.newGroupName;
                                    return r.silent ? [] : [{
                                        type: "Favorites",
                                        id: n
                                    }, {
                                        type: "Favorites",
                                        id: "PARTIAL-LIST"
                                    }, {
                                        type: "Favorites",
                                        id: "LIST"
                                    }, {
                                        type: "FavoritesCount",
                                        id: l
                                    }].concat((0, a.Z)("world" === l ? [{
                                        type: "FavoriteWorlds",
                                        id: o
                                    }, {
                                        type: "FavoriteWorlds",
                                        id: i
                                    }, {
                                        type: "FavoriteWorlds",
                                        id: "all"
                                    }] : []), (0, a.Z)("avatar" === l ? [{
                                        type: "FavoriteAvatars",
                                        id: o
                                    }, {
                                        type: "FavoriteAvatars",
                                        id: i
                                    }, {
                                        type: "FavoriteAvatars",
                                        id: "all"
                                    }] : []), (0, a.Z)("friend" === l ? [{
                                        type: "FavoriteFriends",
                                        id: "all"
                                    }] : []))
                                }
                            }),
                            reloadFavorites: e.mutation({
                                queryFn: function(e) {
                                    e.type;
                                    return {
                                        data: null
                                    }
                                },
                                invalidatesTags: function(e, t, r) {
                                    var n = r.type;
                                    return [{
                                        type: "Favorites",
                                        id: "PARTIAL-LIST"
                                    }, {
                                        type: "Favorites",
                                        id: "LIST"
                                    }, {
                                        type: "FavoritesCount",
                                        id: n
                                    }].concat((0, a.Z)("world" === n ? ["FavoriteWorlds"] : []), (0, a.Z)("avatar" === n ? ["FavoriteAvatars"] : []), (0, a.Z)("friend" === n ? ["FavoriteFriends"] : []))
                                }
                            })
                        };
                        var t, r, l
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["Favorites", "FavoritesCount"]
                }),
                u = w.useCreateFavoriteMutation,
                d = w.useDeleteFavoriteMutation,
                m = w.useGetAllFavoriteCountsQuery,
                f = w.useGetAllFavoritesQuery,
                p = (w.useGetFavoritesQuery, w.useMoveFavoriteMutation),
                g = w.useReloadFavoritesMutation
        }
    }
]);
//# sourceMappingURL=ad27adbfe6742c29b0a273feb4266a6f840fd3c68feb2d97345efa2f92b5bb59.js.map