(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [410], {
        56811: (e, t) => {
            "use strict";
            var n = [61946],
                a = "M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z";
            t.DF = {
                prefix: "fas",
                iconName: "at",
                icon: [512, 512, n, "40", a]
            }, t.IB = t.DF
        },
        92481: (e, t, n) => {
            "use strict";
            var a = n(95603);
            t.DF = {
                prefix: a.prefix,
                iconName: a.iconName,
                icon: [a.width, a.height, a.aliases, a.unicode, a.svgPathData]
            }, t.r$ = t.DF, a.prefix, a.iconName, a.width, a.height, a.aliases, a.unicode, a.svgPathData, a.aliases
        },
        95603: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = "user-group",
                a = [128101, "user-friends"],
                r = "f500",
                i = "M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z";
            t.definition = {
                prefix: "fas",
                iconName: n,
                icon: [640, 512, a, r, i]
            }, t.faUserGroup = t.definition, t.prefix = "fas", t.iconName = n, t.width = 640, t.height = 512, t.ligatures = a, t.unicode = r, t.svgPathData = i, t.aliases = a
        },
        94725: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => K
            });
            var a = n(67294),
                r = n(27484),
                i = n.n(r),
                o = n(66607),
                s = n.n(o),
                l = n(79655),
                c = n(22202),
                u = n(88081),
                m = n(96985),
                d = n(37024);
            i().extend(s());
            const w = function(e) {
                var t = e.className,
                    n = (0, c.XC)().data,
                    r = a.useRef(i()()),
                    o = a.useRef(i()().add(7, "days")),
                    s = r.current,
                    w = o.current,
                    f = w.month() !== s.month(),
                    p = (0, u.Yo)({
                        date: s.toISOString()
                    }, {
                        skip: !(null != n && n.id)
                    }),
                    g = p.data,
                    v = p.isLoading,
                    h = p.isError,
                    E = (0, u.Yo)({
                        date: w.toISOString()
                    }, {
                        skip: !(null != n && n.id && f)
                    }),
                    b = E.data,
                    y = E.isLoading,
                    x = E.isError,
                    N = a.useMemo((function() {
                        var e = new Map;
                        return null == g || g.forEach((function(t) {
                            return e.set(t.id, t)
                        })), f && (null == b || b.forEach((function(t) {
                            return e.set(t.id, t)
                        }))), Array.from(e.values())
                    }), [g, b, f]),
                    P = v || f && y,
                    Z = h || !!f && x,
                    C = a.useMemo((function() {
                        return N.filter((function(e) {
                            var t = i()(e.startsAt),
                                n = i()(e.endsAt);
                            return t.isBetween(s, w, null, "[]") || t.isBefore(s) && n.isAfter(s)
                        })).sort((function(e, t) {
                            return i()(e.startsAt).valueOf() - i()(t.startsAt).valueOf()
                        }))
                    }), [N, s, w]),
                    k = a.useMemo((function() {
                        return C.filter((function(e) {
                            var t = i()(e.startsAt),
                                n = i()(e.endsAt);
                            return t.isSame(s, "day") || t.isBefore(s) && n.isAfter(s)
                        })).length
                    }), [C, s]),
                    O = C.length;
                return P ? a.createElement(m.JX, {
                    className: t
                }, a.createElement("div", {
                    className: "tw-bg-grey tw-rounded-t-lg tw-p-4"
                }, a.createElement("h4", {
                    className: "text-center tw-mt-0 tw-mb-0"
                }, "Your Events")), a.createElement("div", {
                    className: "tw-bg-darker-grey tw-rounded-b-lg tw-p-4"
                }, a.createElement(m.UU, {
                    width: "100%",
                    height: "200px"
                }))) : Z ? a.createElement(m.JX, {
                    className: t
                }, a.createElement("div", {
                    className: "tw-bg-grey tw-rounded-t-lg tw-p-4"
                }, a.createElement("h4", {
                    className: "text-center tw-mt-0 tw-mb-0"
                }, "Your Events")), a.createElement("div", {
                    className: "tw-bg-darker-grey tw-rounded-b-lg tw-p-4"
                }, a.createElement("div", {
                    className: "tw-text-center tw-text-message-warning tw-p-8"
                }, a.createElement("p", {
                    className: "tw-mb-2"
                }, "Unable to load your events."), a.createElement("p", {
                    className: "tw-mb-0"
                }, "Please try again later.")))) : a.createElement(m.JX, {
                    className: t
                }, a.createElement("div", {
                    className: "tw-bg-grey tw-rounded-t-lg tw-p-4"
                }, a.createElement("h4", {
                    className: "text-center tw-mt-0 tw-mb-0"
                }, "Your Events")), a.createElement("div", {
                    className: "tw-bg-darker-grey tw-rounded-b-lg tw-p-4"
                }, a.createElement("div", {
                    className: "tw-grid tw-grid-cols-2 tw-gap-3 tw-mb-4"
                }, a.createElement(l.rU, {
                    to: "/home/calendar?view=day",
                    className: " tw-bg-gradient-to-br tw-from-[#1a4d5c] tw-to-[#2a7b89] tw-rounded tw-py-2 tw-px-3 tw-text-center tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-no-underline tw-cursor-pointer tw-transition-all tw-duration-200 hover:tw-bg-gradient-to-br hover:tw-from-[#2a5d6c] hover:tw-to-[#3a8b99] "
                }, a.createElement("span", {
                    className: "tw-text-white tw-text-2xl tw-font-bold tw-leading-none"
                }, k), a.createElement("span", {
                    className: "tw-text-[#a0c4c7] tw-text-xs tw-whitespace-nowrap"
                }, 1 === k ? "Event Today" : "Events Today")), a.createElement(l.rU, {
                    to: "/home/calendar?view=week",
                    className: " tw-bg-gradient-to-br tw-from-[#1a4d5c] tw-to-[#2a7b89] tw-rounded tw-py-2 tw-px-3 tw-text-center tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-no-underline tw-cursor-pointer tw-transition-all tw-duration-200 hover:tw-bg-gradient-to-br hover:tw-from-[#2a5d6c] hover:tw-to-[#3a8b99] "
                }, a.createElement("span", {
                    className: "tw-text-white tw-text-2xl tw-font-bold tw-leading-none"
                }, O), a.createElement("span", {
                    className: "tw-text-[#a0c4c7] tw-text-xs tw-whitespace-nowrap"
                }, 1 === O ? "Event This Week" : "Events This Week"))), C.length > 0 ? a.createElement("div", {
                    className: "tw-mb-4"
                }, a.createElement(d.ZP, {
                    key: C[0].id,
                    event: C[0],
                    isExpandable: !0
                })) : a.createElement("div", {
                    className: "tw-text-center tw-text-light-grey tw-p-8 tw-rounded"
                }, a.createElement("p", {
                    className: "tw-mb-2"
                }, "No upcoming events found."), a.createElement("p", {
                    className: "tw-mb-0"
                }, "Start following some events to see them here!")), a.createElement(l.rU, {
                    to: "/home/calendar?view=week",
                    className: " tw-block tw-bg-grey tw-text-white tw-py-2.5 tw-px-4 tw-rounded tw-no-underline tw-transition-colors tw-duration-200 tw-w-full tw-text-center tw-text-sm tw-font-normal hover:tw-bg-grey/80 hover:tw-text-white hover:tw-no-underline "
                }, "See All Events")))
            };
            var f = n(54546),
                p = n(4942),
                g = n(45987),
                v = n(42138),
                h = n(9186),
                E = n(62437);
            const b = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).instancePollingInterval,
                    t = void 0 === e ? 12e4 : e,
                    n = (0, c.IB)().data,
                    r = (0, E.k1)({
                        userId: n.id
                    }, {
                        skip: !(null != n && n.id),
                        pollingInterval: t
                    }),
                    i = r.data,
                    o = r.isLoading,
                    s = r.isError;
                return {
                    locations: a.useMemo((function() {
                        var e;
                        return Object.fromEntries((null !== (e = null == i ? void 0 : i.instances) && void 0 !== e ? e : []).map((function(e) {
                            return [e.location, e]
                        })))
                    }), [i]),
                    sortedLocations: a.useMemo((function() {
                        var e, t = Object.values(null !== (e = null == i ? void 0 : i.instances) && void 0 !== e ? e : []);
                        return t.sort((function(e, t) {
                            return t.userCount - e.userCount
                        })), t
                    }), [i, o]),
                    isLoading: o,
                    isError: s
                }
            };
            var y = ["users"];

            function x(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const P = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).instancePollingInterval,
                    t = (0, h.Z)(),
                    n = t.locations,
                    r = void 0 === n ? {} : n,
                    i = t.sortedLocations,
                    o = void 0 === i ? [] : i,
                    s = t.isOnlineLoading,
                    l = t.isError,
                    c = b({
                        instancePollingInterval: e
                    }),
                    u = c.locations,
                    m = void 0 === u ? {} : u,
                    d = c.sortedLocations,
                    w = void 0 === d ? [] : d,
                    p = c.isLoading,
                    E = c.isError,
                    x = a.useMemo((function() {
                        var e = {},
                            t = [];
                        return [].concat((0, v.Z)(o), (0, v.Z)(w)).forEach((function(n, a, i) {
                            var o = n.location;
                            if (!Object.prototype.hasOwnProperty.call(e, o)) {
                                var s = m[o] || {},
                                    l = (s.users, (0, g.Z)(s, y)),
                                    c = N(N({}, r[o] || {}), l);
                                e[o] = c, t.push(c)
                            }
                        })), [e, t]
                    }), [r, m, o, w, s, p]),
                    P = (0, f.Z)(x, 2);
                return {
                    locations: P[0],
                    sortedLocations: P[1],
                    isLoading: s || p,
                    isError: l || E
                }
            };
            var Z = n(59923);
            const C = function(e) {
                var t, n = e.className,
                    r = P(),
                    i = r.sortedLocations,
                    o = r.isLoading,
                    s = r.isError,
                    l = a.useState(5),
                    c = (0, f.Z)(l, 2),
                    u = c[0],
                    d = c[1],
                    w = null !== (t = null == i ? void 0 : i.slice(0, u)) && void 0 !== t ? t : [],
                    p = a.useMemo((function() {
                        return w.map((function(e) {
                            return a.createElement(Z.Z, {
                                key: "location-".concat(e.location),
                                className: "mb-4",
                                location: e
                            })
                        }))
                    }), [w]);
                return o ? a.createElement(m.UU, {
                    width: "100%",
                    height: "200px"
                }) : s || 0 === w.length ? null : a.createElement(m.JX, {
                    className: n
                }, a.createElement("h4", {
                    className: "text-center"
                }, "Friend & Group Locations"), w.length > 0 && a.createElement("div", {
                    className: "locations"
                }, p), u < i.length && a.createElement(m.zx, {
                    className: "w-100",
                    onClick: function() {
                        d(u + 5)
                    }
                }, "Show More Locations"))
            };
            var k = n(4965),
                O = n(17219),
                S = n(1208),
                B = n(89182);
            const L = function(e) {
                var t = e.className,
                    n = (0, O.y)().data,
                    r = a.useState(3),
                    i = (0, f.Z)(r, 2),
                    o = i[0],
                    s = i[1],
                    l = function() {
                        var e = 3;
                        window.innerWidth < 1280 && (e = 2), window.innerWidth < 820 && (e = 3), s(e)
                    };
                a.useEffect((function() {
                    return l(), window.addEventListener("resize", l),
                        function() {
                            return window.removeEventListener("resize", l)
                        }
                }), []);
                var c = (0, S.g9)({
                        sort: "shuffle",
                        order: "descending",
                        tag: "system_approved",
                        n: 3,
                        maxUnityVersion: null == n ? void 0 : n.sdkUnityVersion
                    }).data,
                    u = void 0 === c ? [] : c;
                return a.createElement(m.JX, {
                    className: t
                }, a.createElement("h2", {
                    className: "text-center"
                }, "Have you seen these Completely Random Worlds?"), a.createElement(M, null, u.slice(0, o).map((function(e) {
                    return a.createElement(B.Z, {
                        key: e.id,
                        world: e
                    })
                }))))
            };
            var M = (0, k.Z)("div", {
                    target: "ecqaaaz0"
                })({
                    name: "wi7zmd",
                    styles: "margin:1rem 0 2rem 0;display:grid;column-gap:0.5rem;grid-template-columns:repeat(1, 1fr);@media (min-width: 820px){grid-template-columns:repeat(2, 1fr);}@media (min-width: 1280px){grid-template-columns:repeat(3, 1fr);}"
                }),
                A = n(85533),
                I = n(87462),
                j = n(56811),
                z = n(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getBeta: e.query({
                                query: function(e) {
                                    var t = e.betaName;
                                    return "beta/".concat(t)
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "BetaApplication",
                                        id: n.betaName
                                    }]
                                }
                            }),
                            getBetaRegistration: e.query({
                                query: function(e) {
                                    var t = e.betaName;
                                    return "beta/".concat(t, "/register")
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "BetaRegistration",
                                        id: n.betaName
                                    }]
                                }
                            }),
                            createBetaRegistration: e.mutation({
                                query: function(e) {
                                    var t = e.betaName,
                                        n = e.metadata;
                                    return {
                                        url: "beta/".concat(t, "/register"),
                                        method: "POST",
                                        body: n
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "BetaRegistration",
                                        id: n.betaName
                                    }]
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["BetaApplication", "BetaRegistration"]
                }),
                X = z.useGetBetaQuery,
                D = z.useGetBetaRegistrationQuery,
                T = z.useCreateBetaRegistrationMutation;
            const R = function(e) {
                var t = e.isOpen,
                    n = void 0 !== t && t,
                    r = e.cancelCallback,
                    i = void 0 === r ? function() {} : r,
                    o = e.doneCallback,
                    s = void 0 === o ? function() {} : o,
                    l = e.completed,
                    c = void 0 !== l && l,
                    u = a.useState([]),
                    d = (0, f.Z)(u, 2),
                    w = d[0],
                    p = d[1],
                    g = a.useState(!1),
                    h = (0, f.Z)(g, 2),
                    E = h[0],
                    b = h[1],
                    y = a.useState(""),
                    x = (0, f.Z)(y, 2),
                    N = x[0],
                    P = x[1],
                    Z = T(),
                    C = (0, f.Z)(Z, 2),
                    k = C[0],
                    O = C[1],
                    S = O.isLoading,
                    B = (O.isSuccess, O.isError, O.error, function(e) {
                        return {
                            checked: w.includes(e),
                            id: "checkbox-".concat(e),
                            className: "tw-my-4 md:tw-my-2.5",
                            onChange: function() {
                                w.includes(e) ? p(w.filter((function(t) {
                                    return t !== e
                                }))) : p([].concat((0, v.Z)(w), [e]))
                            }
                        }
                    }),
                    L = a.createElement("div", null, a.createElement("p", null, "You're invited to test VRChat's iOS closed beta! If you have an iOS device and would like to participate, fill out the form below."), a.createElement("p", null, a.createElement("strong", null, "Please note that participation is not guaranteed, as we can only select a limited number of applicants."), "If chosen, we expect you to provide feedback and report bugs on the Canny. Inactive participants may be removed from the Closed Beta at any point."), a.createElement("h6", {
                        className: "tw-mt-8"
                    }, "Select all iOS devices you have access to and will use for testing."), a.createElement(m.XZ, (0, I.Z)({
                        label: "iPhone 12 Pro/Max"
                    }, B("iPhone12PM"))), a.createElement(m.XZ, (0, I.Z)({
                        label: "iPhone 13 Pro/Max"
                    }, B("iPhone13PM"))), a.createElement(m.XZ, (0, I.Z)({
                        label: "iPhone 14"
                    }, B("iPhone14"))), a.createElement(m.XZ, (0, I.Z)({
                        label: "iPhone 14 Pro/Max"
                    }, B("iPhone14PM"))), a.createElement(m.XZ, (0, I.Z)({
                        label: "iPhone 15"
                    }, B("iPhone15"))), a.createElement(m.XZ, (0, I.Z)({
                        label: "iPhone 15 Pro/Max"
                    }, B("iPhone15PM"))), a.createElement(m.XZ, (0, I.Z)({
                        label: "11-inch iPad Pro (2nd Generation of higher)"
                    }, B("iPadPro11"))), a.createElement(m.XZ, (0, I.Z)({
                        label: "12.9-inch iPad Pro (4th generation or higher)"
                    }, B("iPadPro12"))), a.createElement(m.XZ, (0, I.Z)({
                        label: "iPad Air (5th generation or higher)"
                    }, B("iPadAir"))), a.createElement("h6", {
                        className: "tw-mt-6"
                    }, "Are you a creator?"), a.createElement(m.XZ, {
                        label: "Yes, I am a creator.",
                        checked: E,
                        onChange: function() {
                            return b(!E)
                        }
                    }), a.createElement("h6", {
                        className: "tw-mt-6 tw-mb-4"
                    }, "To participate in the iOS Beta channel on discord, please enter your discord name (optional)"), a.createElement("div", {
                        className: "tw-flex tw-items-center"
                    }, a.createElement(m.$1, {
                        icon: j.IB,
                        size: "2x"
                    }), a.createElement(m.II, {
                        className: "tw-flex-grow tw-ml-4",
                        placeholder: "Discord Name",
                        maxLength: 32,
                        value: N,
                        onChange: function(e) {
                            return P(e.target.value)
                        }
                    })), a.createElement(m.zx, {
                        className: "tw-mt-6",
                        onClick: function() {
                            k({
                                betaName: J,
                                metadata: {
                                    devices: w,
                                    isCreator: E,
                                    discordName: N
                                }
                            })
                        },
                        loading: S,
                        disabled: 0 === w.length || S
                    }, S ? "Submitting" : "Submit"), a.createElement(m.zx, {
                        neutral: !0,
                        className: "tw-mt-6",
                        disabled: S,
                        onClick: i
                    }, "Cancel")),
                    M = a.createElement("div", null, a.createElement("h6", null, "Your application has been submitted successfully, thank you!"), a.createElement("p", null, "We will review applications and email you if you're selected with next steps."), a.createElement(m.zx, {
                        onClick: s
                    }, "Done"));
                return a.createElement(m.u_, {
                    title: "VRChat iOS Closed Beta Application",
                    isVisible: n,
                    slim: !0,
                    onClose: c ? s : i,
                    onCloseFinished: i,
                    doNotCapitalize: !0
                }, c ? M : L)
            };
            var _ = n(87709),
                U = ["title", "children", "dismissable", "onDismiss"];
            const F = function(e) {
                var t = e.title,
                    n = e.children,
                    r = e.dismissable,
                    i = void 0 === r || r,
                    o = e.onDismiss,
                    s = void 0 === o ? function() {} : o,
                    l = (0, g.Z)(e, U);
                return a.createElement(Y, l, a.createElement(q, null, a.createElement(V, null, t), n), i && a.createElement(W, {
                    onClick: s,
                    icon: _.faXmark,
                    size: "2x"
                }))
            };
            var Y = (0, k.Z)("div", {
                    target: "e1fo5i6a3"
                })({
                    name: "i8aeo0",
                    styles: "display:flex;align-items:center;background-color:#20d1ed;color:#1a1a1a;padding:0.5rem 0;margin-bottom:1rem;border-radius:5px"
                }),
                q = (0, k.Z)("div", {
                    target: "e1fo5i6a2"
                })({
                    name: "tu59xn",
                    styles: "display:flex;flex-grow:1;flex-direction:column;justify-content:center;align-items:center"
                }),
                W = (0, k.Z)(m.$1, {
                    target: "e1fo5i6a1"
                })({
                    name: "nfd03i",
                    styles: "margin-right:1rem"
                }),
                V = (0, k.Z)("h4", {
                    target: "e1fo5i6a0"
                })({
                    name: "h2wgvc",
                    styles: "margin:0;font-size:1.25rem"
                }),
                G = n(15832);
            var J = "ios-closed-beta",
                H = (0, k.Z)("a", {
                    target: "ercad9d0"
                })({
                    name: "1nh6q2e",
                    styles: "color:#1a1a1a;cursor:pointer;text-decoration:underline"
                });
            const $ = function() {
                var e = (0, G._)("campaignsSeen", []),
                    t = (0, f.Z)(e, 2),
                    n = t[0],
                    r = t[1],
                    i = D({
                        betaName: J
                    }),
                    o = i.data,
                    s = i.isFetching,
                    l = i.isError,
                    c = i.error,
                    u = X({
                        betaName: J
                    }),
                    m = u.data,
                    d = u.isFetching,
                    w = u.isError,
                    p = a.useState(n.includes(J)),
                    g = (0, f.Z)(p, 2),
                    h = g[0],
                    E = g[1],
                    b = a.useState(!1),
                    y = (0, f.Z)(b, 2),
                    x = y[0],
                    N = y[1],
                    P = a.useState(!1),
                    Z = (0, f.Z)(P, 2),
                    C = Z[0],
                    k = Z[1];
                a.useEffect((function() {
                    C || h || l && 404 === c.status && k(!0)
                }), [o, l, c]);
                var O = function() {
                        r([].concat((0, v.Z)(n), [J])), E(!0)
                    },
                    S = o && null != o.created_at;
                return h || d || s || w || !m || !m.active || !C && S ? null : a.createElement(a.Fragment, null, a.createElement(R, {
                    isOpen: x,
                    cancelCallback: function() {
                        return N(!1)
                    },
                    doneCallback: O,
                    completed: S
                }), a.createElement(F, {
                    title: "LIMITED AVAILABILITY",
                    onDismiss: O
                }, a.createElement("span", {
                    className: "tw-text-center tw-px-2"
                }, "VRChat on iOS is Coming Soon! ", a.createElement(H, {
                    onClick: function() {
                        return N(!0)
                    }
                }, "Sign up to be a Closed Beta Tester"))))
            };
            var Q = n(80646);
            const K = function() {
                var e, t = (0, c.XC)().data;
                return a.useEffect((function() {
                    (0, Q.j)("Web_Home")
                }), []), a.createElement("div", null, a.createElement(A.Z, null, "Home"), a.createElement("div", {
                    className: "center-block"
                }, a.createElement($, null), a.createElement("h2", {
                    className: "text-center",
                    style: {
                        marginBottom: "1.5rem"
                    }
                }, "Greetings, ", null !== (e = null == t ? void 0 : t.displayName) && void 0 !== e ? e : "whoever you are", "!"), a.createElement(w, {
                    className: "mt-3"
                }), a.createElement(C, {
                    className: "mt-5"
                }), a.createElement(L, {
                    className: "mt-5"
                })))
            }
        },
        89182: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var a = n(87462),
                r = n(45697),
                i = n.n(r),
                o = n(67294),
                s = n(96985),
                l = function(e) {
                    var t;
                    return o.createElement(s.uW, (0, a.Z)({
                        fieldsList: ["occupants", "visits", "favorites", "updated_at"],
                        contentType: "world",
                        data: null !== (t = e.world) && void 0 !== t ? t : e.data
                    }, e))
                };
            l.propTypes = {
                world: i().shape({
                    id: i().string,
                    name: i().string,
                    releaseStatus: i().oneOf(["public", "private"]),
                    occupants: i().number,
                    favorites: i().number,
                    visits: i().number,
                    updated_at: i().string,
                    created_at: i().string,
                    tags: i().arrayOf(i().string),
                    unityPackages: i().arrayOf(i().shape({
                        platform: i().string
                    }))
                }).isRequired,
                fieldsList: i().arrayOf(i().string)
            };
            const c = l
        },
        66607: function(e) {
            e.exports = function() {
                "use strict";
                return function(e, t, n) {
                    t.prototype.isBetween = function(e, t, a, r) {
                        var i = n(e),
                            o = n(t),
                            s = "(" === (r = r || "()")[0],
                            l = ")" === r[1];
                        return (s ? this.isAfter(i, a) : !this.isBefore(i, a)) && (l ? this.isBefore(o, a) : !this.isAfter(o, a)) || (s ? this.isBefore(i, a) : !this.isAfter(i, a)) && (l ? this.isAfter(o, a) : !this.isBefore(o, a))
                    }
                }
            }()
        }
    }
]);
//# sourceMappingURL=d54eb1d7b2e691dee93bdd25f7d3ed4125d1b1427a165537a962421af88b2b3c.js.map