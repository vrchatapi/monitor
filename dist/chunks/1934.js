(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1934], {
        56811: (e, t) => {
            "use strict";
            var a = [61946],
                n = "M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z";
            t.DF = {
                prefix: "fas",
                iconName: "at",
                icon: [512, 512, a, "40", n]
            }, t.IB = t.DF
        },
        92481: (e, t, a) => {
            "use strict";
            var n = a(95603);
            t.DF = {
                prefix: n.prefix,
                iconName: n.iconName,
                icon: [n.width, n.height, n.aliases, n.unicode, n.svgPathData]
            }, t.r$ = t.DF, n.prefix, n.iconName, n.width, n.height, n.aliases, n.unicode, n.svgPathData, n.aliases
        },
        9294: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => we
            });
            var n = a(54546),
                r = a(67294),
                i = a(79655),
                s = a(60006),
                o = a(27484),
                l = a.n(o),
                c = a(66607),
                m = a.n(c),
                d = a(22202),
                u = a(88081),
                w = a(80988),
                p = a(37024);
            l().extend(m());
            const f = function(e) {
                var t, a = e.className,
                    n = (0, d.XC)().data,
                    o = r.useRef(l()()),
                    c = r.useRef(l()().add(7, "days")),
                    m = o.current,
                    f = c.current,
                    h = f.month() !== m.month(),
                    g = (0, u.bT)({
                        date: m.startOf("month"),
                        userId: null == n ? void 0 : n.id
                    }, {
                        skip: !(null != n && n.id)
                    }),
                    v = g.data,
                    E = void 0 === v ? {
                        events: [],
                        groups: []
                    } : v,
                    b = g.isFetching,
                    y = g.isError,
                    x = (0, u.bT)({
                        date: m.startOf("month").add(1, "month"),
                        userId: null == n ? void 0 : n.id
                    }, {
                        skip: !(null != n && n.id && h)
                    }),
                    N = x.data,
                    Z = void 0 === N ? {
                        events: [],
                        groups: []
                    } : N,
                    C = x.isFetching,
                    P = x.isError,
                    S = (0, u.lb)({
                        n: 1
                    }),
                    k = S.data,
                    O = void 0 === k ? {
                        results: []
                    } : k,
                    B = S.isLoading,
                    A = S.isError,
                    L = r.useMemo((function() {
                        var e, t, a = new Map;
                        (null == E || null === (e = E.events) || void 0 === e || e.forEach((function(e) {
                            return a.set(e.id, e)
                        })), h) && (null == Z || null === (t = Z.events) || void 0 === t || t.forEach((function(e) {
                            return a.set(e.id, e)
                        })));
                        return Array.from(a.values())
                    }), [E, Z, h]),
                    M = B || b || h && C,
                    I = A || y || h && P,
                    j = r.useMemo((function() {
                        return L.filter((function(e) {
                            var t = l()(e.startsAt),
                                a = l()(e.endsAt);
                            return t.isBetween(m, f, null, "[]") || t.isBefore(m) && a.isAfter(m)
                        })).sort((function(e, t) {
                            return l()(e.startsAt).valueOf() - l()(t.startsAt).valueOf()
                        }))
                    }), [L, m, f]),
                    D = r.useMemo((function() {
                        return j.filter((function(e) {
                            var t = l()(e.startsAt),
                                a = l()(e.endsAt);
                            return t.isSame(m, "day") || t.isBefore(m) && a.isAfter(m)
                        })).length
                    }), [j, m]),
                    z = j.length;
                return M ? r.createElement(w.JX, {
                    className: a
                }, r.createElement("div", {
                    className: "tw-bg-grey tw-rounded-t-lg tw-p-4"
                }, r.createElement("h4", {
                    className: "text-center tw-mt-0 tw-mb-0"
                }, "Live & Upcoming Events")), r.createElement("div", {
                    className: "tw-bg-darker-grey tw-rounded-b-lg tw-p-4"
                }, r.createElement(w.UU, {
                    width: "100%",
                    height: "200px"
                }))) : I ? r.createElement(w.JX, {
                    className: a
                }, r.createElement("div", {
                    className: "tw-bg-grey tw-rounded-t-lg tw-p-4"
                }, r.createElement("h4", {
                    className: "text-center tw-mt-0 tw-mb-0"
                }, "Live & Upcoming Events")), r.createElement("div", {
                    className: "tw-bg-darker-grey tw-rounded-b-lg tw-p-4"
                }, r.createElement("div", {
                    className: "tw-text-center tw-text-message-warning tw-p-8"
                }, r.createElement("p", {
                    className: "tw-mb-2"
                }, "Unable to load events."), r.createElement("p", {
                    className: "tw-mb-0"
                }, "Please try again later.")))) : r.createElement(w.JX, {
                    className: a
                }, r.createElement("div", {
                    className: "tw-bg-grey tw-rounded-t-lg tw-p-4"
                }, r.createElement("h4", {
                    className: "text-center tw-mt-0 tw-mb-0"
                }, "Live & Upcoming Events")), r.createElement("div", {
                    className: "tw-bg-darker-grey tw-rounded-b-lg tw-p-4"
                }, r.createElement("div", {
                    className: "tw-grid tw-grid-cols-2 tw-gap-3 tw-mb-4"
                }, r.createElement(s.Qj, {
                    fullWidth: !0,
                    noMargin: !0,
                    to: "/home/calendar?view=day"
                }, r.createElement("span", {
                    className: "tw-text-med"
                }, D, " ", 1 === D ? "Event Today" : "Events Today")), r.createElement(s.Qj, {
                    fullWidth: !0,
                    noMargin: !0,
                    to: "/home/calendar?view=week"
                }, r.createElement("span", {
                    className: "tw-text-med"
                }, z, " ", 1 === z ? "Event This Week" : "Events This Week"))), (null == O || null === (t = O.results) || void 0 === t ? void 0 : t.length) > 0 ? r.createElement("div", {
                    className: "tw-mb-4"
                }, r.createElement(p.ZP, {
                    key: O.results[0].id,
                    event: O.results[0],
                    isExpandable: !0
                })) : r.createElement("div", {
                    className: "tw-text-center tw-text-light-grey tw-p-8 tw-rounded"
                }, r.createElement("p", {
                    className: "tw-mb-2"
                }, "No upcoming events found. Start following some events to see them here!")), r.createElement(i.rU, {
                    to: "/home/calendar?view=week",
                    className: " tw-block tw-bg-grey tw-text-white tw-py-2.5 tw-px-4 tw-rounded tw-no-underline tw-transition-colors tw-duration-200 tw-w-full tw-text-center tw-text-sm tw-font-normal hover:tw-bg-grey/80 hover:tw-text-white hover:tw-no-underline "
                }, "See All Events")))
            };
            var h = a(4942),
                g = a(45987),
                v = a(42138),
                E = a(9186),
                b = a(62437);
            const y = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).instancePollingInterval,
                    t = void 0 === e ? 12e4 : e,
                    a = (0, d.IB)().data,
                    n = (0, b.k1)({
                        userId: a.id
                    }, {
                        skip: !(null != a && a.id),
                        pollingInterval: t
                    }),
                    i = n.data,
                    s = n.isLoading,
                    o = n.isError;
                return {
                    locations: r.useMemo((function() {
                        var e;
                        return Object.fromEntries((null !== (e = null == i ? void 0 : i.instances) && void 0 !== e ? e : []).map((function(e) {
                            return [e.location, e]
                        })))
                    }), [i]),
                    sortedLocations: r.useMemo((function() {
                        var e, t = Object.values(null !== (e = null == i ? void 0 : i.instances) && void 0 !== e ? e : []);
                        return t.sort((function(e, t) {
                            return t.userCount - e.userCount
                        })), t
                    }), [i, s]),
                    isLoading: s,
                    isError: o
                }
            };
            var x = ["users"];

            function N(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(a), !0).forEach((function(t) {
                        (0, h.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : N(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            const C = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).instancePollingInterval,
                    t = (0, E.Z)(),
                    a = t.locations,
                    i = void 0 === a ? {} : a,
                    s = t.sortedLocations,
                    o = void 0 === s ? [] : s,
                    l = t.isOnlineLoading,
                    c = t.isError,
                    m = y({
                        instancePollingInterval: e
                    }),
                    d = m.locations,
                    u = void 0 === d ? {} : d,
                    w = m.sortedLocations,
                    p = void 0 === w ? [] : w,
                    f = m.isLoading,
                    h = m.isError,
                    b = r.useMemo((function() {
                        var e = {},
                            t = [];
                        return [].concat((0, v.Z)(o), (0, v.Z)(p)).forEach((function(a, n, r) {
                            var s = a.location;
                            if (!Object.prototype.hasOwnProperty.call(e, s)) {
                                var o = u[s] || {},
                                    l = (o.users, (0, g.Z)(o, x)),
                                    c = Z(Z({}, i[s] || {}), l);
                                e[s] = c, t.push(c)
                            }
                        })), [e, t]
                    }), [i, u, o, p, l, f]),
                    N = (0, n.Z)(b, 2);
                return {
                    locations: N[0],
                    sortedLocations: N[1],
                    isLoading: l || f,
                    isError: c || h
                }
            };
            var P = a(64509);
            const S = function(e) {
                var t, a = e.className,
                    i = C(),
                    s = i.sortedLocations,
                    o = i.isLoading,
                    l = i.isError,
                    c = r.useState(5),
                    m = (0, n.Z)(c, 2),
                    d = m[0],
                    u = m[1],
                    p = null !== (t = null == s ? void 0 : s.slice(0, d)) && void 0 !== t ? t : [],
                    f = r.useMemo((function() {
                        return p.map((function(e) {
                            return r.createElement(P.Z, {
                                key: "location-".concat(e.location),
                                className: "mb-4",
                                location: e
                            })
                        }))
                    }), [p]);
                return o ? r.createElement(w.UU, {
                    width: "100%",
                    height: "200px"
                }) : l || 0 === p.length ? null : r.createElement(w.JX, {
                    className: a
                }, r.createElement("h4", {
                    className: "text-center"
                }, "Friend & Group Locations"), p.length > 0 && r.createElement("div", {
                    className: "locations"
                }, f), d < s.length && r.createElement(w.zx, {
                    className: "w-100",
                    onClick: function() {
                        u(d + 5)
                    }
                }, "Show More Locations"))
            };
            var k = a(4965),
                O = a(17219),
                B = a(1208),
                A = a(89182);
            const L = function(e) {
                var t = e.className,
                    a = (0, O.y)().data,
                    i = r.useState(3),
                    s = (0, n.Z)(i, 2),
                    o = s[0],
                    l = s[1],
                    c = function() {
                        var e = 3;
                        window.innerWidth < 1280 && (e = 2), window.innerWidth < 820 && (e = 3), l(e)
                    };
                r.useEffect((function() {
                    return c(), window.addEventListener("resize", c),
                        function() {
                            return window.removeEventListener("resize", c)
                        }
                }), []);
                var m = (0, B.g9)({
                        sort: "shuffle",
                        order: "descending",
                        tag: "system_approved",
                        n: 3,
                        maxUnityVersion: null == a ? void 0 : a.sdkUnityVersion
                    }).data,
                    d = void 0 === m ? [] : m;
                return r.createElement(w.JX, {
                    className: t
                }, r.createElement("h2", {
                    className: "text-center"
                }, "Have you seen these Completely Random Worlds?"), r.createElement(M, null, d.slice(0, o).map((function(e) {
                    return r.createElement(A.Z, {
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
                I = a(85533),
                j = a(87462),
                D = a(56811),
                z = a(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getBeta: e.query({
                                query: function(e) {
                                    var t = e.betaName;
                                    return "beta/".concat(t)
                                },
                                providesTags: function(e, t, a) {
                                    return [{
                                        type: "BetaApplication",
                                        id: a.betaName
                                    }]
                                }
                            }),
                            getBetaRegistration: e.query({
                                query: function(e) {
                                    var t = e.betaName;
                                    return "beta/".concat(t, "/register")
                                },
                                providesTags: function(e, t, a) {
                                    return [{
                                        type: "BetaRegistration",
                                        id: a.betaName
                                    }]
                                }
                            }),
                            createBetaRegistration: e.mutation({
                                query: function(e) {
                                    var t = e.betaName,
                                        a = e.metadata;
                                    return {
                                        url: "beta/".concat(t, "/register"),
                                        method: "POST",
                                        body: a
                                    }
                                },
                                invalidatesTags: function(e, t, a) {
                                    return [{
                                        type: "BetaRegistration",
                                        id: a.betaName
                                    }]
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["BetaApplication", "BetaRegistration"]
                }),
                R = z.useGetBetaQuery,
                T = z.useGetBetaRegistrationQuery,
                X = z.useCreateBetaRegistrationMutation;
            const _ = function(e) {
                var t = e.isOpen,
                    a = void 0 !== t && t,
                    i = e.cancelCallback,
                    s = void 0 === i ? function() {} : i,
                    o = e.doneCallback,
                    l = void 0 === o ? function() {} : o,
                    c = e.completed,
                    m = void 0 !== c && c,
                    d = r.useState([]),
                    u = (0, n.Z)(d, 2),
                    p = u[0],
                    f = u[1],
                    h = r.useState(!1),
                    g = (0, n.Z)(h, 2),
                    E = g[0],
                    b = g[1],
                    y = r.useState(""),
                    x = (0, n.Z)(y, 2),
                    N = x[0],
                    Z = x[1],
                    C = X(),
                    P = (0, n.Z)(C, 2),
                    S = P[0],
                    k = P[1],
                    O = k.isLoading,
                    B = (k.isSuccess, k.isError, k.error, function(e) {
                        return {
                            checked: p.includes(e),
                            id: "checkbox-".concat(e),
                            className: "tw-my-4 md:tw-my-2.5",
                            onChange: function() {
                                p.includes(e) ? f(p.filter((function(t) {
                                    return t !== e
                                }))) : f([].concat((0, v.Z)(p), [e]))
                            }
                        }
                    }),
                    A = r.createElement("div", null, r.createElement("p", null, "You're invited to test VRChat's iOS closed beta! If you have an iOS device and would like to participate, fill out the form below."), r.createElement("p", null, r.createElement("strong", null, "Please note that participation is not guaranteed, as we can only select a limited number of applicants."), "If chosen, we expect you to provide feedback and report bugs on the Canny. Inactive participants may be removed from the Closed Beta at any point."), r.createElement("h6", {
                        className: "tw-mt-8"
                    }, "Select all iOS devices you have access to and will use for testing."), r.createElement(w.XZ, (0, j.Z)({
                        label: "iPhone 12 Pro/Max"
                    }, B("iPhone12PM"))), r.createElement(w.XZ, (0, j.Z)({
                        label: "iPhone 13 Pro/Max"
                    }, B("iPhone13PM"))), r.createElement(w.XZ, (0, j.Z)({
                        label: "iPhone 14"
                    }, B("iPhone14"))), r.createElement(w.XZ, (0, j.Z)({
                        label: "iPhone 14 Pro/Max"
                    }, B("iPhone14PM"))), r.createElement(w.XZ, (0, j.Z)({
                        label: "iPhone 15"
                    }, B("iPhone15"))), r.createElement(w.XZ, (0, j.Z)({
                        label: "iPhone 15 Pro/Max"
                    }, B("iPhone15PM"))), r.createElement(w.XZ, (0, j.Z)({
                        label: "11-inch iPad Pro (2nd Generation of higher)"
                    }, B("iPadPro11"))), r.createElement(w.XZ, (0, j.Z)({
                        label: "12.9-inch iPad Pro (4th generation or higher)"
                    }, B("iPadPro12"))), r.createElement(w.XZ, (0, j.Z)({
                        label: "iPad Air (5th generation or higher)"
                    }, B("iPadAir"))), r.createElement("h6", {
                        className: "tw-mt-6"
                    }, "Are you a creator?"), r.createElement(w.XZ, {
                        label: "Yes, I am a creator.",
                        checked: E,
                        onChange: function() {
                            return b(!E)
                        }
                    }), r.createElement("h6", {
                        className: "tw-mt-6 tw-mb-4"
                    }, "To participate in the iOS Beta channel on discord, please enter your discord name (optional)"), r.createElement("div", {
                        className: "tw-flex tw-items-center"
                    }, r.createElement(w.$1, {
                        icon: D.IB,
                        size: "2x"
                    }), r.createElement(w.II, {
                        className: "tw-flex-grow tw-ml-4",
                        placeholder: "Discord Name",
                        maxLength: 32,
                        value: N,
                        onChange: function(e) {
                            return Z(e.target.value)
                        }
                    })), r.createElement(w.zx, {
                        className: "tw-mt-6",
                        onClick: function() {
                            S({
                                betaName: Y,
                                metadata: {
                                    devices: p,
                                    isCreator: E,
                                    discordName: N
                                }
                            })
                        },
                        loading: O,
                        disabled: 0 === p.length || O
                    }, O ? "Submitting" : "Submit"), r.createElement(w.zx, {
                        neutral: !0,
                        className: "tw-mt-6",
                        disabled: O,
                        onClick: s
                    }, "Cancel")),
                    L = r.createElement("div", null, r.createElement("h6", null, "Your application has been submitted successfully, thank you!"), r.createElement("p", null, "We will review applications and email you if you're selected with next steps."), r.createElement(w.zx, {
                        onClick: l
                    }, "Done"));
                return r.createElement(w.u_, {
                    title: "VRChat iOS Closed Beta Application",
                    isVisible: a,
                    slim: !0,
                    onClose: m ? l : s,
                    onCloseFinished: s,
                    doNotCapitalize: !0
                }, m ? L : A)
            };
            var V = a(87709),
                F = ["title", "children", "dismissable", "onDismiss"];
            const U = function(e) {
                var t = e.title,
                    a = e.children,
                    n = e.dismissable,
                    i = void 0 === n || n,
                    s = e.onDismiss,
                    o = void 0 === s ? function() {} : s,
                    l = (0, g.Z)(e, F);
                return r.createElement(q, l, r.createElement(W, null, r.createElement(G, null, t), a), i && r.createElement(Q, {
                    onClick: o,
                    icon: V.faXmark,
                    size: "2x"
                }))
            };
            var q = (0, k.Z)("div", {
                    target: "e1fo5i6a3"
                })({
                    name: "i8aeo0",
                    styles: "display:flex;align-items:center;background-color:#20d1ed;color:#1a1a1a;padding:0.5rem 0;margin-bottom:1rem;border-radius:5px"
                }),
                W = (0, k.Z)("div", {
                    target: "e1fo5i6a2"
                })({
                    name: "tu59xn",
                    styles: "display:flex;flex-grow:1;flex-direction:column;justify-content:center;align-items:center"
                }),
                Q = (0, k.Z)(w.$1, {
                    target: "e1fo5i6a1"
                })({
                    name: "nfd03i",
                    styles: "margin-right:1rem"
                }),
                G = (0, k.Z)("h4", {
                    target: "e1fo5i6a0"
                })({
                    name: "h2wgvc",
                    styles: "margin:0;font-size:1.25rem"
                }),
                J = a(15832);
            var Y = "ios-closed-beta",
                $ = (0, k.Z)("a", {
                    target: "ercad9d0"
                })({
                    name: "1nh6q2e",
                    styles: "color:#1a1a1a;cursor:pointer;text-decoration:underline"
                });
            const H = function() {
                var e = (0, J._)("campaignsSeen", []),
                    t = (0, n.Z)(e, 2),
                    a = t[0],
                    i = t[1],
                    s = T({
                        betaName: Y
                    }),
                    o = s.data,
                    l = s.isFetching,
                    c = s.isError,
                    m = s.error,
                    d = R({
                        betaName: Y
                    }),
                    u = d.data,
                    w = d.isFetching,
                    p = d.isError,
                    f = r.useState(a.includes(Y)),
                    h = (0, n.Z)(f, 2),
                    g = h[0],
                    E = h[1],
                    b = r.useState(!1),
                    y = (0, n.Z)(b, 2),
                    x = y[0],
                    N = y[1],
                    Z = r.useState(!1),
                    C = (0, n.Z)(Z, 2),
                    P = C[0],
                    S = C[1];
                r.useEffect((function() {
                    P || g || c && 404 === m.status && S(!0)
                }), [o, c, m]);
                var k = function() {
                        i([].concat((0, v.Z)(a), [Y])), E(!0)
                    },
                    O = o && null != o.created_at;
                return g || w || l || p || !u || !u.active || !P && O ? null : r.createElement(r.Fragment, null, r.createElement(_, {
                    isOpen: x,
                    cancelCallback: function() {
                        return N(!1)
                    },
                    doneCallback: k,
                    completed: O
                }), r.createElement(U, {
                    title: "LIMITED AVAILABILITY",
                    onDismiss: k
                }, r.createElement("span", {
                    className: "tw-text-center tw-px-2"
                }, "VRChat on iOS is Coming Soon! ", r.createElement($, {
                    onClick: function() {
                        return N(!0)
                    }
                }, "Sign up to be a Closed Beta Tester"))))
            };
            var K = a(6281),
                ee = a(82414),
                te = a(6423),
                ae = a.n(te),
                ne = a(49909),
                re = a.n(ne),
                ie = a(58477),
                se = a.n(ie),
                oe = a(56618),
                le = a.n(oe),
                ce = "utm_source=web-newAccountModal&utm_campaign=newUserRegistration-web",
                me = {
                    steam: "https://store.steampowered.com/app/438100/VRChat?".concat(ce),
                    meta: "https://www.meta.com/experiences/1856672347794301?".concat(ce),
                    android: "https://play.google.com/store/apps/details?id=com.vrchat.mobile.playstore&hl=en&".concat(ce),
                    ios: "https://apps.apple.com/us/app/vrchat/id6448578770?".concat(ce)
                },
                de = [ae(), re(), se(), le()];
            const ue = function(e) {
                var t = e.isVisible,
                    a = e.onClose,
                    i = r.useState(!1),
                    s = (0, n.Z)(i, 2),
                    o = s[0],
                    l = s[1],
                    c = r.useState(new Set),
                    m = (0, n.Z)(c, 2),
                    d = m[0],
                    u = m[1];
                return r.useEffect((function() {
                    var e = 0;
                    de.forEach((function(t) {
                        var a = new Image;
                        a.onload = function() {
                            ++e === de.length && l(!0)
                        }, a.onerror = function() {
                            ! function(e) {
                                u((function(t) {
                                    return new Set(t).add(e)
                                }))
                            }(t), l(!0)
                        }, a.src = t
                    }))
                }), []), o ? r.createElement(w.u_, {
                    title: "Install or Return to VRChat",
                    titleClass: "tw-flex tw-items-center tw-m-0",
                    headerClass: "tw-p-4",
                    doNotCapitalize: !0,
                    isVisible: t,
                    onClose: a,
                    slim: !0,
                    className: "tw-w-full tw-max-w-[650px]"
                }, r.createElement("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-w-full tw--mb-2"
                }, r.createElement("h2", {
                    className: "tw-text-2xl tw-font-bold tw-text-center tw-my-2"
                }, "Your account is ready. Time to jump in!"), r.createElement("p", {
                    className: "tw-text-xs tw-text-center tw-text-gray-300 tw-mb-5"
                }, "Download for free from a store below, or return to the app if you already have it installed."), r.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-4 tw-mb-4 tw-w-full"
                }, r.createElement("div", {
                    className: "tw-flex tw-justify-center tw-gap-4"
                }, r.createElement("a", {
                    href: me.steam,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "tw-no-underline"
                }, d.has(ae()) ? r.createElement(w.zx, {
                    className: "tw-px-8 tw-py-2"
                }, "Steam") : r.createElement("img", {
                    src: ae(),
                    alt: "Download on Steam",
                    className: "tw-w-[172px] tw-h-auto hover:tw-opacity-80 tw-transition-opacity"
                })), r.createElement("a", {
                    href: me.meta,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "tw-no-underline"
                }, d.has(re()) ? r.createElement(w.zx, {
                    className: "tw-px-8 tw-py-2"
                }, "Meta Quest") : r.createElement("img", {
                    src: re(),
                    alt: "Download on Meta Quest",
                    className: "tw-w-[172px] tw-h-auto hover:tw-opacity-80 tw-transition-opacity"
                }))), r.createElement("div", {
                    className: "tw-flex tw-justify-center tw-gap-4"
                }, r.createElement("a", {
                    href: me.android,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "tw-no-underline"
                }, d.has(se()) ? r.createElement(w.zx, {
                    className: "tw-px-8 tw-py-2"
                }, "Android") : r.createElement("img", {
                    src: se(),
                    alt: "Download on Android",
                    className: "tw-w-[172px] tw-h-auto hover:tw-opacity-80 tw-transition-opacity"
                })), r.createElement("a", {
                    href: me.ios,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "tw-no-underline"
                }, d.has(le()) ? r.createElement(w.zx, {
                    className: "tw-px-8 tw-py-2"
                }, "iOS") : r.createElement("img", {
                    src: le(),
                    alt: "Download on iOS",
                    className: "tw-w-[172px] tw-h-auto hover:tw-opacity-80 tw-transition-opacity"
                })))), r.createElement(w.qX, {
                    hideIcon: !0,
                    color: "#28434B",
                    type: "custom",
                    iconColor: "#6AE3F9",
                    className: "tw-mb-5 tw-px-2 tw-py-1 tw-w-full"
                }, r.createElement("div", {
                    className: "tw-flex tw-gap-2 tw-flex-row tw-items-center tw-m-0"
                }, r.createElement("p", {
                    className: "tw-m-0"
                }, r.createElement(w.$1, {
                    icon: ee.sq,
                    color: "#6AE3F9",
                    className: "tw-mr-2"
                })), r.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, r.createElement("span", {
                    className: "tw-text-xs"
                }, "VRChat is a free app that isn't available for web browsers. No VR headset needed.")))), r.createElement(w.zx, {
                    neutral: !0,
                    onClick: a,
                    containerClasses: "tw-w-full tw-m-0"
                }, r.createElement("span", {
                    className: "tw-py-1"
                }, "Dismiss")))) : null
            };
            const we = function() {
                var e, t = (0, d.XC)().data,
                    a = (0, i.lr)(),
                    s = (0, n.Z)(a, 2),
                    o = s[0],
                    l = s[1],
                    c = r.useState(!1),
                    m = (0, n.Z)(c, 2),
                    u = m[0],
                    w = m[1];
                return r.useEffect((function() {
                    (0, K.j)("Web_Home")
                }), []), r.useEffect((function() {
                    "new-account" === o.get("prompt") && (w(!0), o.delete("prompt"), l(o, {
                        replace: !0
                    }))
                }), [o, l]), r.createElement("div", null, r.createElement(I.Z, null, "Home"), r.createElement(ue, {
                    isVisible: u,
                    onClose: function() {
                        return w(!1)
                    }
                }), r.createElement("div", {
                    className: "center-block"
                }, r.createElement(H, null), r.createElement("h2", {
                    className: "text-center",
                    style: {
                        marginBottom: "1.5rem"
                    }
                }, "Greetings, ", null !== (e = null == t ? void 0 : t.displayName) && void 0 !== e ? e : "whoever you are", "!"), r.createElement(f, {
                    className: "mt-3"
                }), r.createElement(S, {
                    className: "mt-5"
                }), r.createElement(L, {
                    className: "mt-5"
                })))
            }
        },
        89182: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => c
            });
            var n = a(87462),
                r = a(45697),
                i = a.n(r),
                s = a(67294),
                o = a(80988),
                l = function(e) {
                    var t;
                    return s.createElement(o.uW, (0, n.Z)({
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
                return function(e, t, a) {
                    t.prototype.isBetween = function(e, t, n, r) {
                        var i = a(e),
                            s = a(t),
                            o = "(" === (r = r || "()")[0],
                            l = ")" === r[1];
                        return (o ? this.isAfter(i, n) : !this.isBefore(i, n)) && (l ? this.isBefore(s, n) : !this.isAfter(s, n)) || (o ? this.isBefore(i, n) : !this.isAfter(i, n)) && (l ? this.isAfter(s, n) : !this.isBefore(s, n))
                    }
                }
            }()
        },
        58477: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "5a25d7d2293042bb-400w.png 400w",
                images: [{
                    path: a.p + "5a25d7d2293042bb-400w.png",
                    width: 400,
                    height: 124
                }],
                src: a.p + "5a25d7d2293042bb-400w.png",
                toString: function() {
                    return a.p + "5a25d7d2293042bb-400w.png"
                },
                width: 400,
                height: 124
            }
        },
        56618: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "f22926d360febb41-400w.png 400w",
                images: [{
                    path: a.p + "f22926d360febb41-400w.png",
                    width: 400,
                    height: 124
                }],
                src: a.p + "f22926d360febb41-400w.png",
                toString: function() {
                    return a.p + "f22926d360febb41-400w.png"
                },
                width: 400,
                height: 124
            }
        },
        49909: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "c34365698eade81d-400w.png 400w",
                images: [{
                    path: a.p + "c34365698eade81d-400w.png",
                    width: 400,
                    height: 124
                }],
                src: a.p + "c34365698eade81d-400w.png",
                toString: function() {
                    return a.p + "c34365698eade81d-400w.png"
                },
                width: 400,
                height: 124
            }
        },
        6423: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "38260f2e5c0da36c-400w.png 400w",
                images: [{
                    path: a.p + "38260f2e5c0da36c-400w.png",
                    width: 400,
                    height: 124
                }],
                src: a.p + "38260f2e5c0da36c-400w.png",
                toString: function() {
                    return a.p + "38260f2e5c0da36c-400w.png"
                },
                width: 400,
                height: 124
            }
        }
    }
]);
//# sourceMappingURL=eee5c72b5214596e5b50c558625113801836cf03779092238eaf0b211c7e504f.js.map