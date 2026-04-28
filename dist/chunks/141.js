"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [141], {
        50141: (e, t, r) => {
            r.d(t, {
                Z: () => h
            });
            var n = r(27593),
                a = r(89148),
                o = r(96427),
                i = r(80988),
                l = r(43862),
                c = r(98353),
                s = r(68995),
                d = r(72528),
                u = r(45781),
                w = r(29848),
                m = r(83505),
                v = r(69116),
                f = r(22202),
                p = r(62437),
                x = r(64358),
                g = r(67294),
                b = r(79655);
            const h = function(e) {
                var t, r, h = e.userId,
                    E = e.userData,
                    y = e.showLocation,
                    k = e.showInvalid,
                    N = e.isUserHidden,
                    F = e.openLinksInNewTab,
                    C = void 0 !== F && F,
                    I = e.isCard,
                    L = void 0 !== I && I,
                    q = e.isCompact,
                    R = void 0 !== q && q,
                    U = e.friendControls,
                    Z = void 0 !== U && U,
                    S = e.moderateControls,
                    $ = void 0 !== S && S,
                    z = e.editMode,
                    P = void 0 !== z && z,
                    M = e.editModeContent,
                    H = e.className,
                    j = (0, p.GR)(h, {
                        skip: !!E
                    }),
                    A = j.data,
                    T = j.isFetching,
                    O = j.isError,
                    _ = j.error,
                    B = (0, f.XC)(),
                    D = B.data,
                    K = B.isSuccess,
                    G = null != E ? E : A,
                    J = K,
                    W = (0, g.useMemo)((function() {
                        return (0, x.Je)({
                            user: G,
                            currentUser: D
                        })
                    }), [D, G]) || {},
                    X = W.isSelf,
                    V = (W.isFriend, (0, v.pc)()),
                    Q = (0, v.JZ)(),
                    Y = Q.playerModerations,
                    ee = Y.mute.users,
                    te = Y.block.users,
                    re = Q.loading;
                if (!h && !G) return null;
                if (k && O) return g.createElement("div", {
                    className: "tw-py-[10px] tw-px-[20px] tw-border-2 tw-border-level-visitor"
                }, g.createElement("div", {
                    className: "tw-flex tw-flex-row"
                }, g.createElement("h6", null, "ID: ", h)), g.createElement("div", {
                    className: "tw-flex tw-flex-row"
                }, _.status, ":", null === (r = _.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message));
                if (!G || T) return g.createElement(l.Z, null);
                var ne = G || {},
                    ae = ne.tags,
                    oe = ne.state,
                    ie = ne.status,
                    le = ne.location,
                    ce = ne.profilePicOverride,
                    se = ne.currentAvatarThumbnailImageUrl,
                    de = ne.displayName,
                    ue = ne.userIcon,
                    we = ne.id,
                    me = ne.currentAvatarImageUrl,
                    ve = "usr_00000000-0000-0000-0000-000000000000" === we && "Hidden Mutual" === de,
                    fe = null !== (t = null == ae ? void 0 : ae.includes("admin_moderator")) && void 0 !== t && t,
                    pe = null == ee ? void 0 : ee.includes(h),
                    xe = null == te ? void 0 : te.includes(h),
                    ge = "https://assets.vrchat.com/default/filtered.png",
                    be = "offline" === oe && !X,
                    he = ce || se || me,
                    Ee = ue || se || ce || me,
                    ye = function() {
                        return g.createElement("div", {
                            className: (0, m.cx)({
                                "tw-h-auto tw-min-h-50px tw-p-2": P
                            }, "tw-bg-darker-grey tw-border-dark-grey tw-items-center tw-rounded-tl-xl tw-rounded-tr-xl tw-h-0 tw-min-h-0 tw-transition-all tw-duration-[250ms] tw-ease-in-out")
                        }, g.createElement("div", {
                            className: (0, m.cx)("tw-opacity-0 tw-items-center tw-flex-grow tw-max-w-full tw-transition-all tw-duration-[250ms] tw-ease-in-out", {
                                "tw-opacity-100 tw-flex": P,
                                "tw-hidden": !P
                            })
                        }, M))
                    };
                return N && !V || ve && !V ? null : L ? g.createElement("div", {
                    style: {
                        "--avatar-size": "min(33.333%, 8rem)"
                    },
                    className: (0, m.cx)("tw-relative tw-bg-grey tw-aspect-[1.45/1] tw-rounded-2xl tw-pb-3 tw-border-solid tw-border-4 tw-border-grey", H)
                }, M && ye(), g.createElement("div", {
                    className: "tw-overflow-hidden tw-rounded-tl-xl tw-rounded-tr-xl tw-min-h-[100px] tw-h-1/2"
                }, g.createElement("img", {
                    alt: "user banner",
                    src: N ? ge : he,
                    className: "tw-object-cover tw-w-full tw-h-full tw-object-top"
                })), g.createElement("div", {
                    className: (0, m.cx)("tw-absolute tw-transition-all tw-duration-[250ms] tw-ease-in-out tw-top-1/2 tw--translate-y-1/2 tw-z-[1] tw-left-3 tw-h-[var(--avatar-size)] tw-max-h-32 tw-aspect-square tw-rounded-full tw-border-solid tw-border-4 tw-border-grey", {
                        "tw-top-[calc(50%+25px)]": P
                    })
                }, g.createElement("img", {
                    src: N ? ge : Ee,
                    alt: "user icon",
                    className: "tw-h-full tw-aspect-square tw-rounded-full tw-object-cover"
                })), g.createElement("div", {
                    className: "tw-flex tw-gap-1 tw-flex-col tw-px-3 tw-min-h-[100px] tw-pt-[calc(var(--avatar-size)/2.25+0.5rem)] tw-h-1/2"
                }, g.createElement("div", {
                    className: "tw-flex tw-flex-row tw-items-center tw-gap-1"
                }, g.createElement(b.rU, {
                    className: "tw-text-lighter-grey",
                    to: N ? "#" : "/home/user/".concat(h || we),
                    target: C ? "_blank" : void 0,
                    "aria-label": "View ".concat(de, "'s profile"),
                    onClick: function(e) {
                        return e.stopPropagation()
                    }
                }, g.createElement("h4", {
                    className: "tw-truncate tw-text-left tw-mb-0"
                }, N ? "Hidden" : de)), pe && !N && g.createElement(i.$1, {
                    icon: a.Ek,
                    className: "tw-text-error-message-red"
                }), xe && !N && g.createElement(i.$1, {
                    icon: n.wO,
                    className: "tw-text-error-message-red"
                })), g.createElement(s.Z, {
                    status: ie,
                    withLabel: !0,
                    isOffline: be
                }))) : g.createElement("div", null, M && ye(), g.createElement("div", {
                    className: (0, m.cx)("tw-p-3 tw-relative tw-bg-grey hover:tw-bg-[#363B41] tw-rounded-lg", H)
                }, g.createElement("div", {
                    className: "tw-flex tw-flex-row tw-mx-0 tw-gap-3 tw-items-center"
                }, g.createElement("div", {
                    className: "tw-relative tw-flex tw-flex-col"
                }, g.createElement("div", null, (V || !N) && g.createElement(b.rU, {
                    to: "/home/user/".concat(h),
                    title: N ? "Hidden" : oe,
                    target: C ? "_blank" : void 0
                }, g.createElement("div", {
                    className: "tw-rounded-full tw-relative tw-overflow-hidden tw-w-12 tw-h-12"
                }, V && N && g.createElement(i.$1, {
                    icon: o.Aq,
                    className: "tw-text-4xl tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-text-lighter-grey"
                }), g.createElement("img", {
                    alt: "profile",
                    className: (0, m.cx)("tw-object-cover tw-aspect-square tw-w-12"),
                    src: he
                }))))), !V && N && g.createElement("div", {
                    className: "tw-flex-1 tw-flex tw-flex-col tw-w-full"
                }, g.createElement("span", null, "Hidden")), (V || !N) && g.createElement("div", {
                    className: "tw-flex-1 tw-flex tw-flex-col tw-w-full"
                }, g.createElement("h6", {
                    className: "tw-mb-[6px] tw-space-x-2"
                }, g.createElement(b.rU, {
                    className: "tw-text-lighter-grey",
                    to: "/home/user/".concat(h),
                    target: C ? "_blank" : void 0
                }, de), pe && g.createElement(i.$1, {
                    icon: a.Ek,
                    className: "tw-text-error-message-red"
                }), xe && g.createElement(i.$1, {
                    icon: n.wO,
                    className: "tw-text-error-message-red"
                })), g.createElement(s.Z, {
                    status: ie,
                    withLabel: !0,
                    isOffline: be
                })), g.createElement("div", {
                    className: "tw-flex tw-items-center tw-gap-3"
                }, Z && !R && J && !X && !fe && !N && g.createElement(u.Z, {
                    userId: h,
                    slim: !0,
                    containerClasses: "tw-rounded-lg tw-h-10",
                    className: "tw-text-subtext-grey tw-bg-grey tw-border-none tw-px-3 tw-p-2 tw-flex tw-items-center tw-gap-1"
                }), $ && !R && J && !X && !fe && !N && g.createElement(w.Z, {
                    neutral: !0,
                    className: "tw-text-subtext-grey tw-bg-grey tw-border-none tw-px-3 tw-p-2",
                    containerClasses: "tw-rounded-lg tw-h-10",
                    userId: h,
                    isMuted: pe,
                    isBlocked: xe,
                    isLoading: re
                }), g.createElement(c.Z, {
                    userId: h
                }))), "online" === oe && y && g.createElement("div", null, le && g.createElement(d.Z, {
                    location: le,
                    userId: h,
                    currentUser: D,
                    size: "normal"
                }))))
            }
        },
        45781: (e, t, r) => {
            r.d(t, {
                Z: () => C
            });
            var n = r(15861),
                a = r(54546),
                o = r(71421),
                i = r(89468),
                l = r(76553),
                c = r(13461),
                s = r(64687),
                d = r.n(s),
                u = r(64258),
                w = r(82728),
                m = r(80988),
                v = r(69677),
                f = r(45697),
                p = r.n(f),
                x = r(67294),
                g = r(32981),
                b = r(6281),
                h = r(92332),
                E = r(751),
                y = r(86791),
                k = function(e) {
                    var t = e.userId,
                        r = void 0 === t ? null : t,
                        o = e.selectedCallback,
                        i = void 0 === o ? function() {} : o,
                        l = (0, g.I0)(),
                        s = (0, v.ge)(r, {
                            skip: null === r
                        }),
                        w = s.data,
                        f = void 0 === w ? {} : w,
                        p = s.isFetching,
                        b = s.isSuccess,
                        k = (0, y.G)({
                            type: "friend"
                        }, {
                            skip: !b || !(null != f && f.isFriend)
                        }),
                        N = k.data,
                        F = void 0 === N ? [] : N,
                        C = k.isFetching,
                        I = (0, E.Xc)(),
                        L = (0, a.Z)(I, 2),
                        q = L[0],
                        R = (L[1].isLoading, p || C),
                        U = function() {
                            var e = (0, n.Z)(d().mark((function e() {
                                var t;
                                return d().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = F.find((function(e) {
                                                return e.favoriteId === r
                                            })), e.prev = 1, e.next = 4, q({
                                                type: "friend",
                                                id: t.id,
                                                groupName: t.tags[0]
                                            }).unwrap();
                                        case 4:
                                            return e.abrupt("return", l((0, u.d)({
                                                title: "Favorite Removed",
                                                icon: c.T,
                                                message: "Successfully removed favorite.",
                                                color: "success",
                                                timeout: 3e3
                                            })));
                                        case 7:
                                            return e.prev = 7, e.t0 = e.catch(1), console.error("Error deleting favorite friend", e.t0), e.abrupt("return", l((0, u.d)({
                                                title: "Favorite Removed",
                                                icon: c.T,
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
                    if (!b) return null;
                    if (R) return x.createElement("span", {
                        className: "\n          tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-2.5\n          tw-text-center tw-cursor-pointer tw-items-center\n        ",
                        role: "alert",
                        "aria-busy": "true"
                    }, x.createElement(m.$1, {
                        icon: h.LM,
                        spin: !0
                    }));
                    if (!f.isFriend) return null;
                    var Z = F.some((function(e) {
                            return e.favoriteId === r
                        })),
                        S = function() {
                            if (!R) return Z ? U() : i(!0)
                        };
                    return x.createElement(m.zx, {
                        className: "\n        hover:tw-text-white hover:tw-bg-button-border\n        tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-3\n        tw-text-center tw-cursor-pointer tw-items-center\n      ",
                        tabIndex: 0,
                        transparent: !0,
                        onClick: S,
                        disabled: R,
                        onKeyDown: function(e) {
                            if ("enter" === e.key.toLowerCase()) return S()
                        },
                        "aria-label": "".concat(Z ? "Unfavorite" : "Favorite", " User")
                    }, R && x.createElement(m.$1, {
                        icon: h.LM,
                        spin: !0,
                        "aria-label": "loading",
                        role: "progressbar"
                    }), x.createElement(m.$1, {
                        icon: c.T
                    }), " ", Z ? "Unfavorite" : "Favorite")
                };
            k.propTypes = {
                userId: p().string
            };
            const N = k;
            var F = function(e) {
                var t = e.userId,
                    r = e.className,
                    s = void 0 === r ? "" : r,
                    f = e.containerClasses,
                    p = void 0 === f ? "" : f,
                    h = e.onFavorite,
                    E = void 0 === h ? function() {} : h,
                    y = e.slim,
                    k = void 0 !== y && y,
                    F = (0, g.I0)(),
                    C = (0, x.useState)(!1),
                    I = (0, a.Z)(C, 2),
                    L = I[0],
                    q = I[1],
                    R = (0, x.useRef)(null),
                    U = (0, v.ge)(t, {
                        skip: null === t
                    }),
                    Z = U.data,
                    S = void 0 === Z ? {} : Z,
                    $ = U.isError,
                    z = U.error,
                    P = U.isSuccess,
                    M = (0, v.I0)(),
                    H = (0, a.Z)(M, 2),
                    j = H[0],
                    A = H[1].isLoading,
                    T = (0, v.oK)(),
                    O = (0, a.Z)(T, 2),
                    _ = O[0],
                    B = O[1].isLoading,
                    D = (0, v.Gk)(),
                    K = (0, a.Z)(D, 2),
                    G = K[0],
                    J = K[1].isLoading,
                    W = A || B || J;
                $ && (console.error("Friend Status Error:", z), F((0, u.d)({
                    title: "Friend Status",
                    icon: l.eH,
                    message: "Failed to get friend status, Please try again later.",
                    color: "danger",
                    timeout: 3e3
                }))), (0, x.useEffect)((function() {
                    var e = function(e) {
                        R.current && !R.current.contains(e.target) && q(!1)
                    };
                    return document.addEventListener("mousedown", e),
                        function() {
                            document.removeEventListener("mousedown", e)
                        }
                }), []);
                var X, V, Q, Y = function() {
                        var e = (0, n.Z)(d().mark((function e() {
                            var r, n, a;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, _({
                                            userId: t
                                        }).unwrap();
                                    case 3:
                                        q(!1), F((0, u.d)({
                                            title: "Friend Request",
                                            icon: c.T,
                                            message: "Successfully Unfriended.",
                                            color: "success",
                                            timeout: 3e3
                                        })), (0, b.j)("Social_Unfriend", {
                                            targetUserId: t,
                                            source: "web"
                                        }), e.next = 13;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), a = (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || (null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n ? void 0 : n.error), F((0, u.d)({
                                            title: "Friend Request",
                                            icon: l.eH,
                                            message: "Failed to unfriend: ".concat(a),
                                            color: "danger",
                                            timeout: 3e3
                                        })), console.error(a);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ee = {
                        isFriend: {
                            text: "Friends",
                            ariaLabel: "Friends",
                            icon: w.vrcFriends,
                            clickHandler: function() {
                                q((function(e) {
                                    return !e
                                }))
                            }
                        },
                        incomingRequest: {
                            text: "Accept Friend Request",
                            ariaLabel: "Accept Friend Request",
                            icon: c.T,
                            clickHandler: (Q = (0, n.Z)(d().mark((function e() {
                                var r, n, a;
                                return d().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, j({
                                                userId: t
                                            }).unwrap();
                                        case 3:
                                            F((0, u.d)({
                                                title: "Friend Request",
                                                icon: c.T,
                                                message: "Friend Request Accepted.",
                                                color: "success",
                                                timeout: 3e3
                                            })), (0, b.j)("Social_AcceptFriendRequest", {
                                                targetUserId: t,
                                                source: "web"
                                            }), e.next = 12;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), a = (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || (null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n ? void 0 : n.error), F((0, u.d)({
                                                title: "Friend Request",
                                                icon: l.eH,
                                                message: "Failed to accept friend request: ".concat(a),
                                                color: "danger",
                                                timeout: 3e3
                                            })), console.error(a);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            }))), function() {
                                return Q.apply(this, arguments)
                            })
                        },
                        outgoingRequest: {
                            text: k ? "Cancel Request" : "Cancel Friend Request",
                            ariaLabel: "Cancel Friend Request",
                            icon: w.vrcPendingFriend,
                            clickHandler: (V = (0, n.Z)(d().mark((function e() {
                                var r, n, a;
                                return d().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, G({
                                                userId: t
                                            }).unwrap();
                                        case 3:
                                            F((0, u.d)({
                                                title: "Friend Request",
                                                icon: w.vrcPendingFriend,
                                                message: "Friend Request Canceled.",
                                                color: "success",
                                                timeout: 3e3
                                            })), e.next = 11;
                                            break;
                                        case 6:
                                            e.prev = 6, e.t0 = e.catch(0), a = (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || (null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n ? void 0 : n.error), F((0, u.d)({
                                                title: "Friend Request",
                                                icon: l.eH,
                                                message: "Failed to Cancel friend request: ".concat(a, "."),
                                                color: "danger",
                                                timeout: 3e3
                                            })), console.error(a);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 6]
                                ])
                            }))), function() {
                                return V.apply(this, arguments)
                            })
                        },
                        addFriend: {
                            text: k ? "" : "Add Friend",
                            ariaLabel: "Add Friend",
                            icon: w.vrcAddFriend,
                            clickHandler: (X = (0, n.Z)(d().mark((function e() {
                                var r, n, a;
                                return d().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, j({
                                                userId: t
                                            }).unwrap();
                                        case 3:
                                            F((0, u.d)({
                                                title: "Friend Request",
                                                icon: w.vrcAddFriend,
                                                message: "Friend Request Sent.",
                                                color: "success",
                                                timeout: 3e3
                                            })), (0, b.j)("Social_SendFriendRequest", {
                                                targetUserId: t,
                                                source: "web"
                                            }), e.next = 12;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), a = (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || (null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n ? void 0 : n.error), F((0, u.d)({
                                                title: "Friend Request",
                                                icon: l.eH,
                                                message: "Failed to send friend request: ".concat(a, "."),
                                                color: "danger",
                                                timeout: 3e3
                                            })), console.error(a);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            }))), function() {
                                return X.apply(this, arguments)
                            })
                        }
                    },
                    te = (0, x.useMemo)((function() {
                        var e, t = null !== (e = Object.keys(S).find((function(e) {
                            return S[e]
                        }))) && void 0 !== e ? e : "addFriend";
                        return ee[t]
                    }), [S]);
                if (P) {
                    var re = te.icon,
                        ne = te.text,
                        ae = te.clickHandler,
                        oe = te.ariaLabel,
                        ie = S.isFriend;
                    return k ? x.createElement(m.zx, {
                        className: s,
                        containerClasses: p,
                        onClick: ae,
                        loading: W,
                        "aria-label": oe
                    }, x.createElement(m.$1, {
                        icon: re,
                        width: 20,
                        height: 20,
                        className: "tw-align-middle"
                    }), "" !== ne && x.createElement("span", {
                        className: "tw-hidden sm:tw-inline-block"
                    }, ne)) : x.createElement(x.Fragment, null, !ie && x.createElement(m.zx, {
                        className: s,
                        containerClasses: p,
                        onClick: ae,
                        loading: W,
                        "aria-label": oe
                    }, x.createElement(m.$1, {
                        icon: re,
                        width: 20,
                        height: 20,
                        className: "tw-align-middle"
                    }), "" !== ne && x.createElement("span", null, ne)), ie && x.createElement("div", {
                        className: "tw-relative tw-min-w-[245px] tw-z-10",
                        ref: R
                    }, x.createElement(m.zx, {
                        "aria-haspopup": "menu",
                        "aria-expanded": L,
                        "aria-controls": "friend-action-dropdown",
                        className: s,
                        containerClasses: p,
                        onClick: ae,
                        loading: W,
                        "aria-label": oe
                    }, x.createElement(m.$1, {
                        icon: re,
                        width: 20,
                        height: 20
                    }), ne, x.createElement(m.$1, {
                        icon: L ? i.l1 : o.eW,
                        width: 14,
                        height: 18,
                        className: "tw-align-middle"
                    })), L && x.createElement("div", {
                        id: "friend-action-dropdown",
                        role: "menu",
                        className: "tw-w-full tw-absolute tw-overflow-hidden tw-text-option-inactive tw-bg-option-bg tw-mt-2 tw-border-solid tw-border-button-border tw-rounded-md tw-font-medium tw-text-base tw-z-10 tw-cursor-pointer "
                    }, x.createElement(N, {
                        userId: t,
                        selectedCallback: function() {
                            E(), q(!1)
                        },
                        role: "menuitem"
                    }), x.createElement(m.zx, {
                        onClick: Y,
                        transparent: !0,
                        role: "menuitem",
                        "aria-label": "Unfriend",
                        className: "hover:tw-text-white hover:tw-bg-button-border tw-py-3 tw-px-3 tw-flex tw-flex-row tw-w-full tw-justify-center tw-items-center"
                    }, x.createElement(m.$1, {
                        icon: w.vrcRemoveFriend,
                        width: 16
                    }), "Unfriend"))))
                }
                return null
            };
            F.propTypes = {
                userId: p().string.isRequired,
                className: p().string,
                containerClasses: p().string,
                slim: p().bool
            };
            const C = F
        },
        29848: (e, t, r) => {
            r.d(t, {
                Z: () => y
            });
            var n = r(15861),
                a = r(54546),
                o = r(92332),
                i = r(27593),
                l = r(27879),
                c = r(89148),
                s = r(65322),
                d = r(7747),
                u = r(80275),
                w = r(63153),
                m = r(64687),
                v = r.n(m),
                f = r(64258),
                p = r(80988),
                x = r(83505),
                g = r(22202),
                b = r(64358),
                h = r(67294),
                E = r(32981);
            const y = function(e) {
                var t = e.userId,
                    r = e.isMuted,
                    m = e.isBlocked,
                    y = e.className,
                    k = e.containerClasses,
                    N = e.hideShare,
                    F = void 0 !== N && N,
                    C = (0, E.I0)(),
                    I = (0, h.useRef)(null),
                    L = (0, h.useState)({
                        left: !1
                    }),
                    q = (0, a.Z)(L, 2),
                    R = q[0],
                    U = q[1],
                    Z = (0, h.useState)(!1),
                    S = (0, a.Z)(Z, 2),
                    $ = S[0],
                    z = S[1],
                    P = (0, g.vO)(),
                    M = (0, a.Z)(P, 2),
                    H = M[0],
                    j = M[1].isLoading,
                    A = (0, g.SU)(),
                    T = (0, a.Z)(A, 2),
                    O = T[0],
                    _ = T[1].isLoading,
                    B = j || _,
                    D = function(e) {
                        I.current && !I.current.contains(e.target) && z(!1)
                    };
                (0, h.useEffect)((function() {
                    return $ ? document.addEventListener("mousedown", D) : document.removeEventListener("mousedown", D),
                        function() {
                            document.removeEventListener("mousedown", D)
                        }
                }), [$]);
                var K = function() {
                        var e = (0, n.Z)(v().mark((function e() {
                            var r;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = (0, b.zp)("".concat(window.location.origin, "/home/user/").concat(t)), e.next = 3, r();
                                    case 3:
                                        C((0, f.d)({
                                            title: "Player Profile",
                                            icon: l.IL,
                                            message: "Player profile link copied to clipboard.",
                                            color: "success",
                                            timeout: 5e3
                                        }));
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
                    G = function() {
                        var e = (0, n.Z)(v().mark((function e(n) {
                            var a, o, i, c, s, d, u;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a = n.type, o = {
                                                mute: {
                                                    apply: "Mute player",
                                                    remove: "Unmute player"
                                                },
                                                block: {
                                                    apply: "Block player",
                                                    remove: "Unblock player"
                                                }
                                            }, i = {
                                                userId: t,
                                                moderationType: a
                                            }, !("block" === a && m || "mute" === a && r)) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.prev = 4, e.next = 7, O(i).unwrap();
                                    case 7:
                                        z(!1), C((0, f.d)({
                                            title: "Player Profile",
                                            icon: l.IL,
                                            message: "".concat(o[a].remove, " successfully."),
                                            color: "success",
                                            timeout: 5e3
                                        })), e.next = 15;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(4), console.error("Player Moderation Error:", e.t0), C((0, f.d)({
                                            title: "Player Profile",
                                            icon: w.$9,
                                            message: "\n                ".concat(o[a].remove, " failed.\n                ").concat((null === (c = e.t0.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message) || (null === (s = e.t0.data) || void 0 === s ? void 0 : s.error), "\n              "),
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 15:
                                        return e.abrupt("return");
                                    case 16:
                                        return e.prev = 16, e.next = 19, H(i).unwrap();
                                    case 19:
                                        z(!1), C((0, f.d)({
                                            title: "Player Profile",
                                            icon: l.IL,
                                            message: "".concat(o[a].apply, " successfully."),
                                            color: "success",
                                            timeout: 5e3
                                        })), e.next = 27;
                                        break;
                                    case 23:
                                        e.prev = 23, e.t1 = e.catch(16), console.error("Player Moderation Error:", e.t1), C((0, f.d)({
                                            title: "Player Profile",
                                            icon: w.$9,
                                            message: "\n                ".concat(o[a].apply, " failed.\n                ").concat((null === (d = e.t1.data) || void 0 === d || null === (d = d.error) || void 0 === d ? void 0 : d.message) || (null === (u = e.t1.data) || void 0 === u ? void 0 : u.error), "\n              "),
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
                return h.createElement("div", {
                    className: "tw-relative",
                    ref: I
                }, h.createElement(p.zx, {
                    className: (0, x.cx)(y, "tw-px-3 tw-py-2"),
                    "aria-label": "Show More Options",
                    containerClasses: k,
                    onClick: function() {
                        return function() {
                            if (!$ && I.current) {
                                var e = I.current.getBoundingClientRect(),
                                    t = window.innerWidth - e.right;
                                U({
                                    left: t < 170
                                })
                            }
                            z(!$)
                        }()
                    }
                }, h.createElement(p.$1, {
                    icon: u.cN
                })), $ && h.createElement("div", {
                    className: (0, x.cx)(R.left ? "tw-right-0" : "tw-left-0", "tw-absolute tw-text-option-inactive tw-overflow-hidden tw-bg-option-bg tw-mt-2 tw-border-solid tw-border-button-border tw-rounded-md tw-font-medium tw-text-base tw-w-[170px] tw-cursor-pointer tw-z-10 sm:tw-max-w-[170px]")
                }, !F && h.createElement(p.zx, {
                    onClick: K,
                    transparent: !0,
                    className: "hover:tw-text-white hover:tw-bg-button-border tw-py-2 tw-px-3"
                }, h.createElement(p.$1, {
                    icon: d.Dr
                }), " Share"), null !== r && h.createElement(p.zx, {
                    className: "\n            hover:tw-text-white hover:tw-bg-button-border\n            tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-2 tw-px-3\n            tw-text-center tw-cursor-pointer tw-items-center\n            ".concat(B ? "tw-hidden" : "tw-block", "\n        "),
                    transparent: !0,
                    tabIndex: 0,
                    onClick: function() {
                        return G({
                            type: "mute"
                        })
                    },
                    onKeyDown: function(e) {
                        if ("enter" === e.key.toLowerCase()) return G({
                            type: "mute"
                        })
                    },
                    "aria-label": "".concat(r ? "Unmute" : "Mute", " User")
                }, h.createElement(p.$1, {
                    icon: r ? s.UO : c.Ek
                }), " ", r ? "Unmute" : "Mute"), null !== m && h.createElement(p.zx, {
                    transparent: !0,
                    className: "\n            hover:tw-text-white hover:tw-bg-button-border\n            tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-2 tw-px-3\n            tw-text-center tw-cursor-pointer tw-items-center\n            ".concat(B ? "tw-hidden" : "tw-block", "\n        "),
                    tabIndex: 0,
                    onClick: function() {
                        return G({
                            type: "block"
                        })
                    },
                    onKeyDown: function(e) {
                        if ("enter" === e.key.toLowerCase()) return G({
                            type: "block"
                        })
                    },
                    "aria-label": "".concat(m ? "Unblock" : "Block", " User")
                }, h.createElement(p.$1, {
                    icon: m ? l.IL : i.wO
                }), " ", m ? "Unblock" : "Block"), h.createElement("div", {
                    className: "\n            tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-2.5\n            tw-text-center tw-items-center\n            tw-h-20\n            ".concat(B ? "tw-block" : "tw-hidden", "\n        ")
                }, h.createElement(p.$1, {
                    icon: o.LM,
                    spin: !0,
                    className: "tw-h-10"
                }))))
            }
        }
    }
]);
//# sourceMappingURL=1b8dbbbf85a7c0a88cc35a174432225fad61aafe39cb5b279933174fb4334a17.js.map