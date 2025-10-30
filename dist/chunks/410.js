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
                default: () => ee
            });
            var a = n(67294),
                r = n(60006),
                i = n(27484),
                s = n.n(i),
                o = n(66607),
                l = n.n(o),
                c = n(79655),
                u = n(22202),
                d = n(88081),
                m = n(96985),
                f = n(37024);
            s().extend(l());
            const v = function(e) {
                var t, n = e.className,
                    i = (0, u.XC)().data,
                    o = a.useRef(s()()),
                    l = a.useRef(s()().add(7, "days")),
                    v = o.current,
                    g = l.current,
                    p = g.month() !== v.month(),
                    h = (0, d.bT)({
                        date: v.startOf("month"),
                        userId: null == i ? void 0 : i.id
                    }, {
                        skip: !(null != i && i.id)
                    }),
                    w = h.data,
                    E = void 0 === w ? {
                        events: [],
                        groups: []
                    } : w,
                    b = h.isFetching,
                    y = h.isError,
                    N = (0, d.bT)({
                        date: v.startOf("month").add(1, "month"),
                        userId: null == i ? void 0 : i.id
                    }, {
                        skip: !(null != i && i.id && p)
                    }),
                    x = N.data,
                    P = void 0 === x ? {
                        events: [],
                        groups: []
                    } : x,
                    Z = N.isFetching,
                    C = N.isError,
                    k = (0, d.lb)({
                        n: 1
                    }),
                    O = k.data,
                    S = void 0 === O ? {
                        results: []
                    } : O,
                    B = k.isLoading,
                    M = k.isError,
                    A = a.useMemo((function() {
                        var e, t, n = new Map;
                        (null == E || null === (e = E.events) || void 0 === e || e.forEach((function(e) {
                            return n.set(e.id, e)
                        })), p) && (null == P || null === (t = P.events) || void 0 === t || t.forEach((function(e) {
                            return n.set(e.id, e)
                        })));
                        return Array.from(n.values())
                    }), [E, P, p]),
                    L = B || b || p && Z,
                    I = M || y || p && C,
                    j = a.useMemo((function() {
                        return A.filter((function(e) {
                            var t = s()(e.startsAt),
                                n = s()(e.endsAt);
                            return t.isBetween(v, g, null, "[]") || t.isBefore(v) && n.isAfter(v)
                        })).sort((function(e, t) {
                            return s()(e.startsAt).valueOf() - s()(t.startsAt).valueOf()
                        }))
                    }), [A, v, g]),
                    z = a.useMemo((function() {
                        return j.filter((function(e) {
                            var t = s()(e.startsAt),
                                n = s()(e.endsAt);
                            return t.isSame(v, "day") || t.isBefore(v) && n.isAfter(v)
                        })).length
                    }), [j, v]),
                    T = j.length;
                return L ? a.createElement(m.JX, {
                    className: n
                }, a.createElement("div", {
                    className: "tw-bg-grey tw-rounded-t-lg tw-p-4"
                }, a.createElement("h4", {
                    className: "text-center tw-mt-0 tw-mb-0"
                }, "Your Events")), a.createElement("div", {
                    className: "tw-bg-darker-grey tw-rounded-b-lg tw-p-4"
                }, a.createElement(m.UU, {
                    width: "100%",
                    height: "200px"
                }))) : I ? a.createElement(m.JX, {
                    className: n
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
                    className: n
                }, a.createElement("div", {
                    className: "tw-bg-grey tw-rounded-t-lg tw-p-4"
                }, a.createElement("h4", {
                    className: "text-center tw-mt-0 tw-mb-0"
                }, "Your Events")), a.createElement("div", {
                    className: "tw-bg-darker-grey tw-rounded-b-lg tw-p-4"
                }, a.createElement("div", {
                    className: "tw-grid tw-grid-cols-2 tw-gap-3 tw-mb-4"
                }, a.createElement(r.Qj, {
                    fullWidth: !0,
                    noMargin: !0,
                    to: "/home/calendar?view=day"
                }, a.createElement("span", {
                    className: "tw-text-med"
                }, z, " ", 1 === z ? "Event Today" : "Events Today")), a.createElement(r.Qj, {
                    fullWidth: !0,
                    noMargin: !0,
                    to: "/home/calendar?view=week"
                }, a.createElement("span", {
                    className: "tw-text-med"
                }, T, " ", 1 === T ? "Event This Week" : "Events This Week"))), (null == S || null === (t = S.results) || void 0 === t ? void 0 : t.length) > 0 ? a.createElement("div", {
                    className: "tw-mb-4"
                }, a.createElement(f.ZP, {
                    key: S.results[0].id,
                    event: S.results[0],
                    isExpandable: !0
                })) : a.createElement("div", {
                    className: "tw-text-center tw-text-light-grey tw-p-8 tw-rounded"
                }, a.createElement("p", {
                    className: "tw-mb-2"
                }, "No upcoming events found. Start following some events to see them here!")), a.createElement(c.rU, {
                    to: "/home/calendar?view=week",
                    className: " tw-block tw-bg-grey tw-text-white tw-py-2.5 tw-px-4 tw-rounded tw-no-underline tw-transition-colors tw-duration-200 tw-w-full tw-text-center tw-text-sm tw-font-normal hover:tw-bg-grey/80 hover:tw-text-white hover:tw-no-underline "
                }, "See All Events")))
            };
            var g = n(54546),
                p = n(4942),
                h = n(45987),
                w = n(42138),
                E = n(9186),
                b = n(62437);
            const y = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).instancePollingInterval,
                    t = void 0 === e ? 12e4 : e,
                    n = (0, u.IB)().data,
                    r = (0, b.k1)({
                        userId: n.id
                    }, {
                        skip: !(null != n && n.id),
                        pollingInterval: t
                    }),
                    i = r.data,
                    s = r.isLoading,
                    o = r.isError;
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
                    }), [i, s]),
                    isLoading: s,
                    isError: o
                }
            };
            var N = ["users"];

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

            function P(e) {
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
            const Z = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).instancePollingInterval,
                    t = (0, E.Z)(),
                    n = t.locations,
                    r = void 0 === n ? {} : n,
                    i = t.sortedLocations,
                    s = void 0 === i ? [] : i,
                    o = t.isOnlineLoading,
                    l = t.isError,
                    c = y({
                        instancePollingInterval: e
                    }),
                    u = c.locations,
                    d = void 0 === u ? {} : u,
                    m = c.sortedLocations,
                    f = void 0 === m ? [] : m,
                    v = c.isLoading,
                    p = c.isError,
                    b = a.useMemo((function() {
                        var e = {},
                            t = [];
                        return [].concat((0, w.Z)(s), (0, w.Z)(f)).forEach((function(n, a, i) {
                            var s = n.location;
                            if (!Object.prototype.hasOwnProperty.call(e, s)) {
                                var o = d[s] || {},
                                    l = (o.users, (0, h.Z)(o, N)),
                                    c = P(P({}, r[s] || {}), l);
                                e[s] = c, t.push(c)
                            }
                        })), [e, t]
                    }), [r, d, s, f, o, v]),
                    x = (0, g.Z)(b, 2);
                return {
                    locations: x[0],
                    sortedLocations: x[1],
                    isLoading: o || v,
                    isError: l || p
                }
            };
            var C = n(59923);
            const k = function(e) {
                var t, n = e.className,
                    r = Z(),
                    i = r.sortedLocations,
                    s = r.isLoading,
                    o = r.isError,
                    l = a.useState(5),
                    c = (0, g.Z)(l, 2),
                    u = c[0],
                    d = c[1],
                    f = null !== (t = null == i ? void 0 : i.slice(0, u)) && void 0 !== t ? t : [],
                    v = a.useMemo((function() {
                        return f.map((function(e) {
                            return a.createElement(C.Z, {
                                key: "location-".concat(e.location),
                                className: "mb-4",
                                location: e
                            })
                        }))
                    }), [f]);
                return s ? a.createElement(m.UU, {
                    width: "100%",
                    height: "200px"
                }) : o || 0 === f.length ? null : a.createElement(m.JX, {
                    className: n
                }, a.createElement("h4", {
                    className: "text-center"
                }, "Friend & Group Locations"), f.length > 0 && a.createElement("div", {
                    className: "locations"
                }, v), u < i.length && a.createElement(m.zx, {
                    className: "w-100",
                    onClick: function() {
                        d(u + 5)
                    }
                }, "Show More Locations"))
            };
            var O = n(4965),
                S = n(17219),
                B = n(1208),
                M = n(89182);
            const A = function(e) {
                var t = e.className,
                    n = (0, S.y)().data,
                    r = a.useState(3),
                    i = (0, g.Z)(r, 2),
                    s = i[0],
                    o = i[1],
                    l = function() {
                        var e = 3;
                        window.innerWidth < 1280 && (e = 2), window.innerWidth < 820 && (e = 3), o(e)
                    };
                a.useEffect((function() {
                    return l(), window.addEventListener("resize", l),
                        function() {
                            return window.removeEventListener("resize", l)
                        }
                }), []);
                var c = (0, B.g9)({
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
                }, "Have you seen these Completely Random Worlds?"), a.createElement(L, null, u.slice(0, s).map((function(e) {
                    return a.createElement(M.Z, {
                        key: e.id,
                        world: e
                    })
                }))))
            };
            var L = (0, O.Z)("div", {
                    target: "ecqaaaz0"
                })({
                    name: "wi7zmd",
                    styles: "margin:1rem 0 2rem 0;display:grid;column-gap:0.5rem;grid-template-columns:repeat(1, 1fr);@media (min-width: 820px){grid-template-columns:repeat(2, 1fr);}@media (min-width: 1280px){grid-template-columns:repeat(3, 1fr);}"
                }),
                I = n(85533),
                j = n(87462),
                z = n(56811),
                T = n(61509).S.injectEndpoints({
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
                X = T.useGetBetaQuery,
                D = T.useGetBetaRegistrationQuery,
                R = T.useCreateBetaRegistrationMutation;
            const _ = function(e) {
                var t = e.isOpen,
                    n = void 0 !== t && t,
                    r = e.cancelCallback,
                    i = void 0 === r ? function() {} : r,
                    s = e.doneCallback,
                    o = void 0 === s ? function() {} : s,
                    l = e.completed,
                    c = void 0 !== l && l,
                    u = a.useState([]),
                    d = (0, g.Z)(u, 2),
                    f = d[0],
                    v = d[1],
                    p = a.useState(!1),
                    h = (0, g.Z)(p, 2),
                    E = h[0],
                    b = h[1],
                    y = a.useState(""),
                    N = (0, g.Z)(y, 2),
                    x = N[0],
                    P = N[1],
                    Z = R(),
                    C = (0, g.Z)(Z, 2),
                    k = C[0],
                    O = C[1],
                    S = O.isLoading,
                    B = (O.isSuccess, O.isError, O.error, function(e) {
                        return {
                            checked: f.includes(e),
                            id: "checkbox-".concat(e),
                            className: "tw-my-4 md:tw-my-2.5",
                            onChange: function() {
                                f.includes(e) ? v(f.filter((function(t) {
                                    return t !== e
                                }))) : v([].concat((0, w.Z)(f), [e]))
                            }
                        }
                    }),
                    M = a.createElement("div", null, a.createElement("p", null, "You're invited to test VRChat's iOS closed beta! If you have an iOS device and would like to participate, fill out the form below."), a.createElement("p", null, a.createElement("strong", null, "Please note that participation is not guaranteed, as we can only select a limited number of applicants."), "If chosen, we expect you to provide feedback and report bugs on the Canny. Inactive participants may be removed from the Closed Beta at any point."), a.createElement("h6", {
                        className: "tw-mt-8"
                    }, "Select all iOS devices you have access to and will use for testing."), a.createElement(m.XZ, (0, j.Z)({
                        label: "iPhone 12 Pro/Max"
                    }, B("iPhone12PM"))), a.createElement(m.XZ, (0, j.Z)({
                        label: "iPhone 13 Pro/Max"
                    }, B("iPhone13PM"))), a.createElement(m.XZ, (0, j.Z)({
                        label: "iPhone 14"
                    }, B("iPhone14"))), a.createElement(m.XZ, (0, j.Z)({
                        label: "iPhone 14 Pro/Max"
                    }, B("iPhone14PM"))), a.createElement(m.XZ, (0, j.Z)({
                        label: "iPhone 15"
                    }, B("iPhone15"))), a.createElement(m.XZ, (0, j.Z)({
                        label: "iPhone 15 Pro/Max"
                    }, B("iPhone15PM"))), a.createElement(m.XZ, (0, j.Z)({
                        label: "11-inch iPad Pro (2nd Generation of higher)"
                    }, B("iPadPro11"))), a.createElement(m.XZ, (0, j.Z)({
                        label: "12.9-inch iPad Pro (4th generation or higher)"
                    }, B("iPadPro12"))), a.createElement(m.XZ, (0, j.Z)({
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
                        icon: z.IB,
                        size: "2x"
                    }), a.createElement(m.II, {
                        className: "tw-flex-grow tw-ml-4",
                        placeholder: "Discord Name",
                        maxLength: 32,
                        value: x,
                        onChange: function(e) {
                            return P(e.target.value)
                        }
                    })), a.createElement(m.zx, {
                        className: "tw-mt-6",
                        onClick: function() {
                            k({
                                betaName: Q,
                                metadata: {
                                    devices: f,
                                    isCreator: E,
                                    discordName: x
                                }
                            })
                        },
                        loading: S,
                        disabled: 0 === f.length || S
                    }, S ? "Submitting" : "Submit"), a.createElement(m.zx, {
                        neutral: !0,
                        className: "tw-mt-6",
                        disabled: S,
                        onClick: i
                    }, "Cancel")),
                    A = a.createElement("div", null, a.createElement("h6", null, "Your application has been submitted successfully, thank you!"), a.createElement("p", null, "We will review applications and email you if you're selected with next steps."), a.createElement(m.zx, {
                        onClick: o
                    }, "Done"));
                return a.createElement(m.u_, {
                    title: "VRChat iOS Closed Beta Application",
                    isVisible: n,
                    slim: !0,
                    onClose: c ? o : i,
                    onCloseFinished: i,
                    doNotCapitalize: !0
                }, c ? A : M)
            };
            var F = n(87709),
                W = ["title", "children", "dismissable", "onDismiss"];
            const U = function(e) {
                var t = e.title,
                    n = e.children,
                    r = e.dismissable,
                    i = void 0 === r || r,
                    s = e.onDismiss,
                    o = void 0 === s ? function() {} : s,
                    l = (0, h.Z)(e, W);
                return a.createElement(q, l, a.createElement(V, null, a.createElement(G, null, t), n), i && a.createElement(Y, {
                    onClick: o,
                    icon: F.faXmark,
                    size: "2x"
                }))
            };
            var q = (0, O.Z)("div", {
                    target: "e1fo5i6a3"
                })({
                    name: "i8aeo0",
                    styles: "display:flex;align-items:center;background-color:#20d1ed;color:#1a1a1a;padding:0.5rem 0;margin-bottom:1rem;border-radius:5px"
                }),
                V = (0, O.Z)("div", {
                    target: "e1fo5i6a2"
                })({
                    name: "tu59xn",
                    styles: "display:flex;flex-grow:1;flex-direction:column;justify-content:center;align-items:center"
                }),
                Y = (0, O.Z)(m.$1, {
                    target: "e1fo5i6a1"
                })({
                    name: "nfd03i",
                    styles: "margin-right:1rem"
                }),
                G = (0, O.Z)("h4", {
                    target: "e1fo5i6a0"
                })({
                    name: "h2wgvc",
                    styles: "margin:0;font-size:1.25rem"
                }),
                J = n(15832);
            var Q = "ios-closed-beta",
                H = (0, O.Z)("a", {
                    target: "ercad9d0"
                })({
                    name: "1nh6q2e",
                    styles: "color:#1a1a1a;cursor:pointer;text-decoration:underline"
                });
            const $ = function() {
                var e = (0, J._)("campaignsSeen", []),
                    t = (0, g.Z)(e, 2),
                    n = t[0],
                    r = t[1],
                    i = D({
                        betaName: Q
                    }),
                    s = i.data,
                    o = i.isFetching,
                    l = i.isError,
                    c = i.error,
                    u = X({
                        betaName: Q
                    }),
                    d = u.data,
                    m = u.isFetching,
                    f = u.isError,
                    v = a.useState(n.includes(Q)),
                    p = (0, g.Z)(v, 2),
                    h = p[0],
                    E = p[1],
                    b = a.useState(!1),
                    y = (0, g.Z)(b, 2),
                    N = y[0],
                    x = y[1],
                    P = a.useState(!1),
                    Z = (0, g.Z)(P, 2),
                    C = Z[0],
                    k = Z[1];
                a.useEffect((function() {
                    C || h || l && 404 === c.status && k(!0)
                }), [s, l, c]);
                var O = function() {
                        r([].concat((0, w.Z)(n), [Q])), E(!0)
                    },
                    S = s && null != s.created_at;
                return h || m || o || f || !d || !d.active || !C && S ? null : a.createElement(a.Fragment, null, a.createElement(_, {
                    isOpen: N,
                    cancelCallback: function() {
                        return x(!1)
                    },
                    doneCallback: O,
                    completed: S
                }), a.createElement(U, {
                    title: "LIMITED AVAILABILITY",
                    onDismiss: O
                }, a.createElement("span", {
                    className: "tw-text-center tw-px-2"
                }, "VRChat on iOS is Coming Soon! ", a.createElement(H, {
                    onClick: function() {
                        return x(!0)
                    }
                }, "Sign up to be a Closed Beta Tester"))))
            };
            var K = n(80646);
            const ee = function() {
                var e, t = (0, u.XC)().data;
                return a.useEffect((function() {
                    (0, K.j)("Web_Home")
                }), []), a.createElement("div", null, a.createElement(I.Z, null, "Home"), a.createElement("div", {
                    className: "center-block"
                }, a.createElement($, null), a.createElement("h2", {
                    className: "text-center",
                    style: {
                        marginBottom: "1.5rem"
                    }
                }, "Greetings, ", null !== (e = null == t ? void 0 : t.displayName) && void 0 !== e ? e : "whoever you are", "!"), a.createElement(v, {
                    className: "mt-3"
                }), a.createElement(k, {
                    className: "mt-5"
                }), a.createElement(A, {
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
                s = n(67294),
                o = n(96985),
                l = function(e) {
                    var t;
                    return s.createElement(o.uW, (0, a.Z)({
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
                            s = n(t),
                            o = "(" === (r = r || "()")[0],
                            l = ")" === r[1];
                        return (o ? this.isAfter(i, a) : !this.isBefore(i, a)) && (l ? this.isBefore(s, a) : !this.isAfter(s, a)) || (o ? this.isBefore(i, a) : !this.isAfter(i, a)) && (l ? this.isAfter(s, a) : !this.isBefore(s, a))
                    }
                }
            }()
        }
    }
]);
//# sourceMappingURL=99306d851c65534e2091cc92e73e7beb5878f590a0ec7322657a29df79530c53.js.map