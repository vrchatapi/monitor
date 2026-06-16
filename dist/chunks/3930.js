"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3930], {
        93930(e, t, r) {
            r.d(t, {
                A: () => h
            });
            var n = r(76249),
                a = r(77276),
                o = r(56967),
                i = r(15033),
                l = r(25538),
                c = r(24834),
                s = r(42482),
                u = r(489),
                d = r(21591),
                w = r(23892),
                m = r(56822),
                v = r(194),
                f = r(13951),
                p = r(71957),
                g = r(91069),
                x = r(96540),
                b = r(84976);
            const h = function(e) {
                var t, r, h = e.userId,
                    y = e.userData,
                    E = e.showLocation,
                    k = e.showInvalid,
                    N = e.isUserHidden,
                    F = e.openLinksInNewTab,
                    A = void 0 !== F && F,
                    C = e.isCard,
                    M = void 0 !== C && C,
                    I = e.isCompact,
                    q = void 0 !== I && I,
                    R = e.friendControls,
                    L = void 0 !== R && R,
                    U = e.moderateControls,
                    S = void 0 !== U && U,
                    X = e.editMode,
                    z = void 0 !== X && X,
                    P = e.editModeContent,
                    _ = e.className,
                    $ = (0, p.vf)(h, {
                        skip: !!y
                    }),
                    j = $.data,
                    H = $.isFetching,
                    B = $.isError,
                    T = $.error,
                    D = (0, f.P2)(),
                    O = D.data,
                    K = D.isSuccess,
                    Q = null != y ? y : j,
                    V = K,
                    W = (0, x.useMemo)(function() {
                        return (0, g.gm)({
                            user: Q,
                            currentUser: O
                        })
                    }, [O, Q]) || {},
                    Y = W.isSelf,
                    G = (W.isFriend, (0, v.Om)()),
                    J = (0, v.CT)(),
                    Z = J.playerModerations,
                    ee = Z.mute.users,
                    te = Z.block.users,
                    re = J.loading;
                if (!h && !Q) return null;
                if (k && B) return x.createElement("div", {
                    className: "tw-py-[10px] tw-px-[20px] tw-border-2 tw-border-level-visitor"
                }, x.createElement("div", {
                    className: "tw-flex tw-flex-row"
                }, x.createElement("h6", null, "ID: ", h)), x.createElement("div", {
                    className: "tw-flex tw-flex-row"
                }, T.status, ":", null === (r = T.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message));
                if (!Q || H) return x.createElement(l.A, null);
                var ne = Q || {},
                    ae = ne.tags,
                    oe = ne.state,
                    ie = ne.status,
                    le = ne.location,
                    ce = ne.profilePicOverride,
                    se = ne.currentAvatarThumbnailImageUrl,
                    ue = ne.displayName,
                    de = ne.userIcon,
                    we = ne.id,
                    me = ne.currentAvatarImageUrl,
                    ve = "usr_00000000-0000-0000-0000-000000000000" === we && "Hidden Mutual" === ue,
                    fe = null !== (t = null == ae ? void 0 : ae.includes("admin_moderator")) && void 0 !== t && t,
                    pe = null == ee ? void 0 : ee.includes(h),
                    ge = null == te ? void 0 : te.includes(h),
                    xe = "https://assets.vrchat.com/default/filtered.png",
                    be = "offline" === oe && !Y,
                    he = ce || se || me,
                    ye = de || se || ce || me,
                    Ee = function() {
                        return x.createElement("div", {
                            className: (0, m.cx)({
                                "tw-h-auto tw-min-h-50px tw-p-2": z
                            }, "tw-bg-darker-grey tw-border-dark-grey tw-items-center tw-rounded-tl-xl tw-rounded-tr-xl tw-h-0 tw-min-h-0 tw-transition-all tw-duration-[250ms] tw-ease-in-out")
                        }, x.createElement("div", {
                            className: (0, m.cx)("tw-opacity-0 tw-items-center tw-flex-grow tw-max-w-full tw-transition-all tw-duration-[250ms] tw-ease-in-out", {
                                "tw-opacity-100 tw-flex": z,
                                "tw-hidden": !z
                            })
                        }, P))
                    };
                return N && !G || ve && !G ? null : M ? x.createElement("div", {
                    style: {
                        "--avatar-size": "min(33.333%, 8rem)"
                    },
                    className: (0, m.cx)("tw-relative tw-bg-grey tw-aspect-[1.45/1] tw-rounded-2xl tw-pb-3 tw-border-solid tw-border-4 tw-border-grey", _)
                }, P && Ee(), x.createElement("div", {
                    className: "tw-overflow-hidden tw-rounded-tl-xl tw-rounded-tr-xl tw-min-h-[100px] tw-h-1/2"
                }, x.createElement("img", {
                    alt: "user banner",
                    src: N ? xe : he,
                    className: "tw-object-cover tw-w-full tw-h-full tw-object-top"
                })), x.createElement("div", {
                    className: (0, m.cx)("tw-absolute tw-transition-all tw-duration-[250ms] tw-ease-in-out tw-top-1/2 tw--translate-y-1/2 tw-z-[1] tw-left-3 tw-h-[var(--avatar-size)] tw-max-h-32 tw-aspect-square tw-rounded-full tw-border-solid tw-border-4 tw-border-grey", {
                        "tw-top-[calc(50%+25px)]": z
                    })
                }, x.createElement("img", {
                    src: N ? xe : ye,
                    alt: "user icon",
                    className: "tw-h-full tw-aspect-square tw-rounded-full tw-object-cover"
                })), x.createElement("div", {
                    className: "tw-flex tw-gap-1 tw-flex-col tw-px-3 tw-min-h-[100px] tw-pt-[calc(var(--avatar-size)/2.25+0.5rem)] tw-h-1/2"
                }, x.createElement("div", {
                    className: "tw-flex tw-flex-row tw-items-center tw-gap-1"
                }, x.createElement(b.N_, {
                    className: "tw-text-lighter-grey",
                    to: N ? "#" : "/home/user/".concat(h || we),
                    target: A ? "_blank" : void 0,
                    "aria-label": "View ".concat(ue, "'s profile"),
                    onClick: function(e) {
                        return e.stopPropagation()
                    }
                }, x.createElement("h4", {
                    className: "tw-truncate tw-text-left tw-mb-0"
                }, N ? "Hidden" : ue)), pe && !N && x.createElement(i.M2, {
                    icon: a.$z,
                    className: "tw-text-error-message-red"
                }), ge && !N && x.createElement(i.M2, {
                    icon: n.c7,
                    className: "tw-text-error-message-red"
                })), x.createElement(s.A, {
                    status: ie,
                    withLabel: !0,
                    isOffline: be
                }))) : x.createElement("div", null, P && Ee(), x.createElement("div", {
                    className: (0, m.cx)("tw-p-3 tw-relative tw-bg-grey hover:tw-bg-[#363B41] tw-rounded-lg", _)
                }, x.createElement("div", {
                    className: "tw-flex tw-flex-row tw-mx-0 tw-gap-3 tw-items-center"
                }, x.createElement("div", {
                    className: "tw-relative tw-flex tw-flex-col"
                }, x.createElement("div", null, (G || !N) && x.createElement(b.N_, {
                    to: "/home/user/".concat(h),
                    title: N ? "Hidden" : oe,
                    target: A ? "_blank" : void 0
                }, x.createElement("div", {
                    className: "tw-rounded-full tw-relative tw-overflow-hidden tw-w-12 tw-h-12"
                }, G && N && x.createElement(i.M2, {
                    icon: o.k6,
                    className: "tw-text-4xl tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-text-lighter-grey"
                }), x.createElement("img", {
                    alt: "profile",
                    className: (0, m.cx)("tw-object-cover tw-aspect-square tw-w-12"),
                    src: he
                }))))), !G && N && x.createElement("div", {
                    className: "tw-flex-1 tw-flex tw-flex-col tw-w-full"
                }, x.createElement("span", null, "Hidden")), (G || !N) && x.createElement("div", {
                    className: "tw-flex-1 tw-flex tw-flex-col tw-w-full"
                }, x.createElement("h6", {
                    className: "tw-mb-[6px] tw-space-x-2"
                }, x.createElement(b.N_, {
                    className: "tw-text-lighter-grey",
                    to: "/home/user/".concat(h),
                    target: A ? "_blank" : void 0
                }, ue), pe && x.createElement(i.M2, {
                    icon: a.$z,
                    className: "tw-text-error-message-red"
                }), ge && x.createElement(i.M2, {
                    icon: n.c7,
                    className: "tw-text-error-message-red"
                })), x.createElement(s.A, {
                    status: ie,
                    withLabel: !0,
                    isOffline: be
                })), x.createElement("div", {
                    className: "tw-flex tw-items-center tw-gap-3"
                }, L && !q && V && !Y && !fe && !N && x.createElement(d.A, {
                    userId: h,
                    slim: !0,
                    containerClasses: "tw-rounded-lg tw-h-10",
                    className: "tw-text-subtext-grey tw-bg-grey tw-border-none tw-px-3 tw-p-2 tw-flex tw-items-center tw-gap-1"
                }), S && !q && V && !Y && !fe && !N && x.createElement(w.A, {
                    neutral: !0,
                    className: "tw-text-subtext-grey tw-bg-grey tw-border-none tw-px-3 tw-p-2",
                    containerClasses: "tw-rounded-lg tw-h-10",
                    userId: h,
                    isMuted: pe,
                    isBlocked: ge,
                    isLoading: re
                }), x.createElement(c.A, {
                    userId: h
                }))), "online" === oe && E && x.createElement("div", null, le && x.createElement(u.A, {
                    location: le,
                    userId: h,
                    currentUser: O,
                    size: "normal"
                }))))
            }
        },
        21591(e, t, r) {
            r.d(t, {
                A: () => A
            });
            var n = r(10467),
                a = r(82544),
                o = r(43594),
                i = r(4067),
                l = r(34496),
                c = r(3385),
                s = r(54756),
                u = r.n(s),
                d = r(65950),
                w = r(27070),
                m = r(15033),
                v = r(46078),
                f = r(5556),
                p = r.n(f),
                g = r(96540),
                x = r(6376),
                b = r(53818),
                h = r(7612),
                y = r(77948),
                E = r(4628),
                k = function(e) {
                    var t = e.userId,
                        r = void 0 === t ? null : t,
                        o = e.selectedCallback,
                        i = void 0 === o ? function() {} : o,
                        l = (0, x.wA)(),
                        s = (0, v.qd)(r, {
                            skip: null === r
                        }),
                        w = s.data,
                        f = void 0 === w ? {} : w,
                        p = s.isFetching,
                        b = s.isSuccess,
                        k = (0, E.w)({
                            type: "friend"
                        }, {
                            skip: !b || !(null != f && f.isFriend)
                        }),
                        N = k.data,
                        F = void 0 === N ? [] : N,
                        A = k.isFetching,
                        C = (0, y.mu)(),
                        M = (0, a.A)(C, 2),
                        I = M[0],
                        q = (M[1].isLoading, p || A),
                        R = function() {
                            var e = (0, n.A)(u().mark(function e() {
                                var t;
                                return u().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = F.find(function(e) {
                                                return e.favoriteId === r
                                            }), e.prev = 1, e.next = 4, I({
                                                type: "friend",
                                                id: t.id,
                                                groupName: t.tags[0]
                                            }).unwrap();
                                        case 4:
                                            return e.abrupt("return", l((0, d.X)({
                                                title: "Favorite Removed",
                                                icon: c.yy,
                                                message: "Successfully removed favorite.",
                                                color: "success",
                                                timeout: 3e3
                                            })));
                                        case 7:
                                            return e.prev = 7, e.t0 = e.catch(1), console.error("Error deleting favorite friend", e.t0), e.abrupt("return", l((0, d.X)({
                                                title: "Favorite Removed",
                                                icon: c.yy,
                                                message: "Failed to remove favorite.",
                                                color: "danger",
                                                timeout: 3e3
                                            })));
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [1, 7]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    if (!b) return null;
                    if (q) return g.createElement("span", {
                        className: "\n          tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-2.5\n          tw-text-center tw-cursor-pointer tw-items-center\n        ",
                        role: "alert",
                        "aria-busy": "true"
                    }, g.createElement(m.M2, {
                        icon: h.z1,
                        spin: !0
                    }));
                    if (!f.isFriend) return null;
                    var L = F.some(function(e) {
                            return e.favoriteId === r
                        }),
                        U = function() {
                            if (!q) return L ? R() : i(!0)
                        };
                    return g.createElement(m.$n, {
                        className: "\n        hover:tw-text-white hover:tw-bg-button-border\n        tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-3\n        tw-text-center tw-cursor-pointer tw-items-center\n      ",
                        tabIndex: 0,
                        transparent: !0,
                        onClick: U,
                        disabled: q,
                        onKeyDown: function(e) {
                            if ("enter" === e.key.toLowerCase()) return U()
                        },
                        "aria-label": "".concat(L ? "Unfavorite" : "Favorite", " User")
                    }, q && g.createElement(m.M2, {
                        icon: h.z1,
                        spin: !0,
                        "aria-label": "loading",
                        role: "progressbar"
                    }), g.createElement(m.M2, {
                        icon: c.yy
                    }), " ", L ? "Unfavorite" : "Favorite")
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
                    y = void 0 === h ? function() {} : h,
                    E = e.slim,
                    k = void 0 !== E && E,
                    F = (0, x.wA)(),
                    A = (0, g.useState)(!1),
                    C = (0, a.A)(A, 2),
                    M = C[0],
                    I = C[1],
                    q = (0, g.useRef)(null),
                    R = (0, v.qd)(t, {
                        skip: null === t
                    }),
                    L = R.data,
                    U = void 0 === L ? {} : L,
                    S = R.isError,
                    X = R.error,
                    z = R.isSuccess,
                    P = (0, v.YT)(),
                    _ = (0, a.A)(P, 2),
                    $ = _[0],
                    j = _[1].isLoading,
                    H = (0, v.be)(),
                    B = (0, a.A)(H, 2),
                    T = B[0],
                    D = B[1].isLoading,
                    O = (0, v.yQ)(),
                    K = (0, a.A)(O, 2),
                    Q = K[0],
                    V = K[1].isLoading,
                    W = j || D || V;
                S && (console.error("Friend Status Error:", X), F((0, d.X)({
                    title: "Friend Status",
                    icon: l.zp,
                    message: "Failed to get friend status, Please try again later.",
                    color: "danger",
                    timeout: 3e3
                }))), (0, g.useEffect)(function() {
                    var e = function(e) {
                        q.current && !q.current.contains(e.target) && I(!1)
                    };
                    return document.addEventListener("mousedown", e),
                        function() {
                            document.removeEventListener("mousedown", e)
                        }
                }, []);
                var Y, G, J, Z = function() {
                        var e = (0, n.A)(u().mark(function e() {
                            var r, n, a;
                            return u().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, T({
                                            userId: t
                                        }).unwrap();
                                    case 3:
                                        I(!1), F((0, d.X)({
                                            title: "Friend Request",
                                            icon: c.yy,
                                            message: "Successfully Unfriended.",
                                            color: "success",
                                            timeout: 3e3
                                        })), (0, b.u4)("Social_Unfriend", {
                                            targetUserId: t,
                                            source: "web"
                                        }), e.next = 13;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), a = (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || (null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n ? void 0 : n.error), F((0, d.X)({
                                            title: "Friend Request",
                                            icon: l.zp,
                                            message: "Failed to unfriend: ".concat(a),
                                            color: "danger",
                                            timeout: 3e3
                                        })), console.error(a);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 8]
                            ])
                        }));
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
                                I(function(e) {
                                    return !e
                                })
                            }
                        },
                        incomingRequest: {
                            text: "Accept Friend Request",
                            ariaLabel: "Accept Friend Request",
                            icon: c.yy,
                            clickHandler: (J = (0, n.A)(u().mark(function e() {
                                var r, n, a;
                                return u().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, $({
                                                userId: t
                                            }).unwrap();
                                        case 3:
                                            F((0, d.X)({
                                                title: "Friend Request",
                                                icon: c.yy,
                                                message: "Friend Request Accepted.",
                                                color: "success",
                                                timeout: 3e3
                                            })), (0, b.u4)("Social_AcceptFriendRequest", {
                                                targetUserId: t,
                                                source: "web"
                                            }), e.next = 12;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), a = (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || (null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n ? void 0 : n.error), F((0, d.X)({
                                                title: "Friend Request",
                                                icon: l.zp,
                                                message: "Failed to accept friend request: ".concat(a),
                                                color: "danger",
                                                timeout: 3e3
                                            })), console.error(a);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [0, 7]
                                ])
                            })), function() {
                                return J.apply(this, arguments)
                            })
                        },
                        outgoingRequest: {
                            text: k ? "Cancel Request" : "Cancel Friend Request",
                            ariaLabel: "Cancel Friend Request",
                            icon: w.vrcPendingFriend,
                            clickHandler: (G = (0, n.A)(u().mark(function e() {
                                var r, n, a;
                                return u().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, Q({
                                                userId: t
                                            }).unwrap();
                                        case 3:
                                            F((0, d.X)({
                                                title: "Friend Request",
                                                icon: w.vrcPendingFriend,
                                                message: "Friend Request Canceled.",
                                                color: "success",
                                                timeout: 3e3
                                            })), e.next = 11;
                                            break;
                                        case 6:
                                            e.prev = 6, e.t0 = e.catch(0), a = (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || (null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n ? void 0 : n.error), F((0, d.X)({
                                                title: "Friend Request",
                                                icon: l.zp,
                                                message: "Failed to Cancel friend request: ".concat(a, "."),
                                                color: "danger",
                                                timeout: 3e3
                                            })), console.error(a);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [0, 6]
                                ])
                            })), function() {
                                return G.apply(this, arguments)
                            })
                        },
                        addFriend: {
                            text: k ? "" : "Add Friend",
                            ariaLabel: "Add Friend",
                            icon: w.vrcAddFriend,
                            clickHandler: (Y = (0, n.A)(u().mark(function e() {
                                var r, n, a;
                                return u().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, $({
                                                userId: t
                                            }).unwrap();
                                        case 3:
                                            F((0, d.X)({
                                                title: "Friend Request",
                                                icon: w.vrcAddFriend,
                                                message: "Friend Request Sent.",
                                                color: "success",
                                                timeout: 3e3
                                            })), (0, b.u4)("Social_SendFriendRequest", {
                                                targetUserId: t,
                                                source: "web"
                                            }), e.next = 12;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), a = (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || (null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n ? void 0 : n.error), F((0, d.X)({
                                                title: "Friend Request",
                                                icon: l.zp,
                                                message: "Failed to send friend request: ".concat(a, "."),
                                                color: "danger",
                                                timeout: 3e3
                                            })), console.error(a);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [0, 7]
                                ])
                            })), function() {
                                return Y.apply(this, arguments)
                            })
                        }
                    },
                    te = (0, g.useMemo)(function() {
                        var e, t = null !== (e = Object.keys(U).find(function(e) {
                            return U[e]
                        })) && void 0 !== e ? e : "addFriend";
                        return ee[t]
                    }, [U]);
                if (z) {
                    var re = te.icon,
                        ne = te.text,
                        ae = te.clickHandler,
                        oe = te.ariaLabel,
                        ie = U.isFriend;
                    return k ? g.createElement(m.$n, {
                        className: s,
                        containerClasses: p,
                        onClick: ae,
                        loading: W,
                        "aria-label": oe
                    }, g.createElement(m.M2, {
                        icon: re,
                        width: 20,
                        height: 20,
                        className: "tw-align-middle"
                    }), "" !== ne && g.createElement("span", {
                        className: "tw-hidden sm:tw-inline-block"
                    }, ne)) : g.createElement(g.Fragment, null, !ie && g.createElement(m.$n, {
                        className: s,
                        containerClasses: p,
                        onClick: ae,
                        loading: W,
                        "aria-label": oe
                    }, g.createElement(m.M2, {
                        icon: re,
                        width: 20,
                        height: 20,
                        className: "tw-align-middle"
                    }), "" !== ne && g.createElement("span", null, ne)), ie && g.createElement("div", {
                        className: "tw-relative tw-min-w-[245px] tw-z-10",
                        ref: q
                    }, g.createElement(m.$n, {
                        "aria-haspopup": "menu",
                        "aria-expanded": M,
                        "aria-controls": "friend-action-dropdown",
                        className: s,
                        containerClasses: p,
                        onClick: ae,
                        loading: W,
                        "aria-label": oe
                    }, g.createElement(m.M2, {
                        icon: re,
                        width: 20,
                        height: 20
                    }), ne, g.createElement(m.M2, {
                        icon: M ? i.S$ : o.xB,
                        width: 14,
                        height: 18,
                        className: "tw-align-middle"
                    })), M && g.createElement("div", {
                        id: "friend-action-dropdown",
                        role: "menu",
                        className: "tw-w-full tw-absolute tw-overflow-hidden tw-text-option-inactive tw-bg-option-bg tw-mt-2 tw-border-solid tw-border-button-border tw-rounded-md tw-font-medium tw-text-base tw-z-10 tw-cursor-pointer "
                    }, g.createElement(N, {
                        userId: t,
                        selectedCallback: function() {
                            y(), I(!1)
                        },
                        role: "menuitem"
                    }), g.createElement(m.$n, {
                        onClick: Z,
                        transparent: !0,
                        role: "menuitem",
                        "aria-label": "Unfriend",
                        className: "hover:tw-text-white hover:tw-bg-button-border tw-py-3 tw-px-3 tw-flex tw-flex-row tw-w-full tw-justify-center tw-items-center"
                    }, g.createElement(m.M2, {
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
            const A = F
        },
        23892(e, t, r) {
            r.d(t, {
                A: () => E
            });
            var n = r(10467),
                a = r(82544),
                o = r(7612),
                i = r(76249),
                l = r(64850),
                c = r(77276),
                s = r(62285),
                u = r(33105),
                d = r(71704),
                w = r(45872),
                m = r(54756),
                v = r.n(m),
                f = r(65950),
                p = r(15033),
                g = r(56822),
                x = r(13951),
                b = r(91069),
                h = r(96540),
                y = r(6376);
            const E = function(e) {
                var t = e.userId,
                    r = e.isMuted,
                    m = e.isBlocked,
                    E = e.className,
                    k = e.containerClasses,
                    N = e.hideShare,
                    F = void 0 !== N && N,
                    A = (0, y.wA)(),
                    C = (0, h.useRef)(null),
                    M = (0, h.useState)({
                        left: !1
                    }),
                    I = (0, a.A)(M, 2),
                    q = I[0],
                    R = I[1],
                    L = (0, h.useState)(!1),
                    U = (0, a.A)(L, 2),
                    S = U[0],
                    X = U[1],
                    z = (0, x.g_)(),
                    P = (0, a.A)(z, 2),
                    _ = P[0],
                    $ = P[1].isLoading,
                    j = (0, x.u9)(),
                    H = (0, a.A)(j, 2),
                    B = H[0],
                    T = H[1].isLoading,
                    D = $ || T,
                    O = function(e) {
                        C.current && !C.current.contains(e.target) && X(!1)
                    };
                (0, h.useEffect)(function() {
                    return S ? document.addEventListener("mousedown", O) : document.removeEventListener("mousedown", O),
                        function() {
                            document.removeEventListener("mousedown", O)
                        }
                }, [S]);
                var K = function() {
                        var e = (0, n.A)(v().mark(function e() {
                            var r;
                            return v().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = (0, b.Dk)("".concat(window.location.origin, "/home/user/").concat(t)), e.next = 3, r();
                                    case 3:
                                        A((0, f.X)({
                                            title: "Player Profile",
                                            icon: l.X4,
                                            message: "Player profile link copied to clipboard.",
                                            color: "success",
                                            timeout: 5e3
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Q = function() {
                        var e = (0, n.A)(v().mark(function e(n) {
                            var a, o, i, c, s, u, d;
                            return v().wrap(function(e) {
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
                                        return e.prev = 4, e.next = 7, B(i).unwrap();
                                    case 7:
                                        X(!1), A((0, f.X)({
                                            title: "Player Profile",
                                            icon: l.X4,
                                            message: "".concat(o[a].remove, " successfully."),
                                            color: "success",
                                            timeout: 5e3
                                        })), e.next = 15;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(4), console.error("Player Moderation Error:", e.t0), A((0, f.X)({
                                            title: "Player Profile",
                                            icon: w.rf,
                                            message: "\n                ".concat(o[a].remove, " failed.\n                ").concat((null === (c = e.t0.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message) || (null === (s = e.t0.data) || void 0 === s ? void 0 : s.error), "\n              "),
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 15:
                                        return e.abrupt("return");
                                    case 16:
                                        return e.prev = 16, e.next = 19, _(i).unwrap();
                                    case 19:
                                        X(!1), A((0, f.X)({
                                            title: "Player Profile",
                                            icon: l.X4,
                                            message: "".concat(o[a].apply, " successfully."),
                                            color: "success",
                                            timeout: 5e3
                                        })), e.next = 27;
                                        break;
                                    case 23:
                                        e.prev = 23, e.t1 = e.catch(16), console.error("Player Moderation Error:", e.t1), A((0, f.X)({
                                            title: "Player Profile",
                                            icon: w.rf,
                                            message: "\n                ".concat(o[a].apply, " failed.\n                ").concat((null === (u = e.t1.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message) || (null === (d = e.t1.data) || void 0 === d ? void 0 : d.error), "\n              "),
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 27:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [4, 11],
                                [16, 23]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return h.createElement("div", {
                    className: "tw-relative",
                    ref: C
                }, h.createElement(p.$n, {
                    className: (0, g.cx)(E, "tw-px-3 tw-py-2"),
                    "aria-label": "Show More Options",
                    containerClasses: k,
                    onClick: function() {
                        return function() {
                            if (!S && C.current) {
                                var e = C.current.getBoundingClientRect(),
                                    t = window.innerWidth - e.right;
                                R({
                                    left: t < 170
                                })
                            }
                            X(!S)
                        }()
                    }
                }, h.createElement(p.M2, {
                    icon: d.vH
                })), S && h.createElement("div", {
                    className: (0, g.cx)(q.left ? "tw-right-0" : "tw-left-0", "tw-absolute tw-text-option-inactive tw-overflow-hidden tw-bg-option-bg tw-mt-2 tw-border-solid tw-border-button-border tw-rounded-md tw-font-medium tw-text-base tw-w-[170px] tw-cursor-pointer tw-z-10 sm:tw-max-w-[170px]")
                }, !F && h.createElement(p.$n, {
                    onClick: K,
                    transparent: !0,
                    className: "hover:tw-text-white hover:tw-bg-button-border tw-py-2 tw-px-3"
                }, h.createElement(p.M2, {
                    icon: u.Ex
                }), " Share"), null !== r && h.createElement(p.$n, {
                    className: "\n            hover:tw-text-white hover:tw-bg-button-border\n            tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-2 tw-px-3\n            tw-text-center tw-cursor-pointer tw-items-center\n            ".concat(D ? "tw-hidden" : "tw-block", "\n        "),
                    transparent: !0,
                    tabIndex: 0,
                    onClick: function() {
                        return Q({
                            type: "mute"
                        })
                    },
                    onKeyDown: function(e) {
                        if ("enter" === e.key.toLowerCase()) return Q({
                            type: "mute"
                        })
                    },
                    "aria-label": "".concat(r ? "Unmute" : "Mute", " User")
                }, h.createElement(p.M2, {
                    icon: r ? s.A5 : c.$z
                }), " ", r ? "Unmute" : "Mute"), null !== m && h.createElement(p.$n, {
                    transparent: !0,
                    className: "\n            hover:tw-text-white hover:tw-bg-button-border\n            tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-2 tw-px-3\n            tw-text-center tw-cursor-pointer tw-items-center\n            ".concat(D ? "tw-hidden" : "tw-block", "\n        "),
                    tabIndex: 0,
                    onClick: function() {
                        return Q({
                            type: "block"
                        })
                    },
                    onKeyDown: function(e) {
                        if ("enter" === e.key.toLowerCase()) return Q({
                            type: "block"
                        })
                    },
                    "aria-label": "".concat(m ? "Unblock" : "Block", " User")
                }, h.createElement(p.M2, {
                    icon: m ? l.X4 : i.c7
                }), " ", m ? "Unblock" : "Block"), h.createElement("div", {
                    className: "\n            tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-2.5\n            tw-text-center tw-items-center\n            tw-h-20\n            ".concat(D ? "tw-block" : "tw-hidden", "\n        ")
                }, h.createElement(p.M2, {
                    icon: o.z1,
                    spin: !0,
                    className: "tw-h-10"
                }))))
            }
        }
    }
]);
//# sourceMappingURL=83f85b7fe8574073b826be2de6126aeee088840ca0013556fe0a24b1d7f4fcc0.js.map