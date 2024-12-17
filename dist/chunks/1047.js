"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1047], {
        56811: (e, t) => {
            var n = [61946],
                a = "M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z";
            t.DF = {
                prefix: "fas",
                iconName: "at",
                icon: [512, 512, n, "40", a]
            }, t.IB = t.DF
        },
        92481: (e, t, n) => {
            var a = n(95603);
            t.DF = {
                prefix: a.prefix,
                iconName: a.iconName,
                icon: [a.width, a.height, a.aliases, a.unicode, a.svgPathData]
            }, t.r$ = t.DF, a.prefix, a.iconName, a.width, a.height, a.aliases, a.unicode, a.svgPathData, a.aliases
        },
        95603: (e, t) => {
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
        26969: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => F
            });
            var a = n(67294),
                r = n(54546),
                i = n(14411),
                o = n(4942),
                c = n(45987),
                s = n(42138),
                l = n(9186),
                u = n(22202),
                d = n(62437);
            const m = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).instancePollingInterval,
                    t = void 0 === e ? 12e4 : e,
                    n = (0, u.IB)().data,
                    r = (0, d.k1)({
                        userId: n.id
                    }, {
                        skip: !(null != n && n.id),
                        pollingInterval: t
                    }),
                    i = r.data,
                    o = r.isLoading,
                    c = r.isError;
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
                    isError: c
                }
            };
            var p = ["users"];

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const g = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).instancePollingInterval,
                    t = (0, l.Z)(),
                    n = t.locations,
                    i = void 0 === n ? {} : n,
                    o = t.sortedLocations,
                    u = void 0 === o ? [] : o,
                    d = t.isOnlineLoading,
                    f = t.isError,
                    g = m({
                        instancePollingInterval: e
                    }),
                    h = g.locations,
                    b = void 0 === h ? {} : h,
                    E = g.sortedLocations,
                    y = void 0 === E ? [] : E,
                    w = g.isLoading,
                    P = g.isError,
                    Z = a.useMemo((function() {
                        var e = {},
                            t = [];
                        return [].concat((0, s.Z)(u), (0, s.Z)(y)).forEach((function(n, a, r) {
                            var o = n.location;
                            if (!Object.prototype.hasOwnProperty.call(e, o)) {
                                var s = b[o] || {},
                                    l = (s.users, (0, c.Z)(s, p)),
                                    u = v(v({}, i[o] || {}), l);
                                e[o] = u, t.push(u)
                            }
                        })), [e, t]
                    }), [i, b, u, y, d, w]),
                    C = (0, r.Z)(Z, 2);
                return {
                    locations: C[0],
                    sortedLocations: C[1],
                    isLoading: d || w,
                    isError: f || P
                }
            };
            var h = n(59923);
            const b = function(e) {
                var t, n = e.className,
                    o = g(),
                    c = o.sortedLocations,
                    s = o.isLoading,
                    l = o.isError,
                    u = a.useState(5),
                    d = (0, r.Z)(u, 2),
                    m = d[0],
                    p = d[1],
                    f = null !== (t = null == c ? void 0 : c.slice(0, m)) && void 0 !== t ? t : [],
                    v = a.useMemo((function() {
                        return f.map((function(e) {
                            return a.createElement(h.Z, {
                                key: "location-".concat(e.location),
                                className: "mb-4",
                                location: e
                            })
                        }))
                    }), [f]);
                return s ? a.createElement(i.UU, {
                    width: "100%",
                    height: "200px"
                }) : l || 0 === f.length ? null : a.createElement(i.JX, {
                    className: n
                }, a.createElement("h4", {
                    className: "text-center"
                }, "Friend & Group Locations"), f.length > 0 && a.createElement("div", {
                    className: "locations"
                }, v), m < c.length && a.createElement(i.zx, {
                    className: "w-100",
                    onClick: function() {
                        p(m + 5)
                    }
                }, "Show More Locations"))
            };
            var E = n(4965),
                y = n(17219),
                w = n(1208),
                P = n(89182);
            const Z = function(e) {
                var t = e.className,
                    n = (0, y.y)().data,
                    o = a.useState(3),
                    c = (0, r.Z)(o, 2),
                    s = c[0],
                    l = c[1],
                    u = function() {
                        var e = 3;
                        window.innerWidth < 1280 && (e = 2), window.innerWidth < 820 && (e = 3), l(e)
                    };
                a.useEffect((function() {
                    return u(), window.addEventListener("resize", u),
                        function() {
                            return window.removeEventListener("resize", u)
                        }
                }), []);
                var d = (0, w.g9)({
                        sort: "shuffle",
                        order: "descending",
                        tag: "system_approved",
                        n: 3,
                        maxUnityVersion: null == n ? void 0 : n.sdkUnityVersion
                    }).data,
                    m = void 0 === d ? [] : d;
                return a.createElement(i.JX, {
                    className: t
                }, a.createElement("h2", {
                    className: "text-center"
                }, "Have you seen these Completely Random Worlds?"), a.createElement(C, null, m.slice(0, s).map((function(e) {
                    return a.createElement(P.Z, {
                        key: e.id,
                        world: e
                    })
                }))))
            };
            var C = (0, E.Z)("div", {
                    target: "ecqaaaz0"
                })({
                    name: "wi7zmd",
                    styles: "margin:1rem 0 2rem 0;display:grid;column-gap:0.5rem;grid-template-columns:repeat(1, 1fr);@media (min-width: 820px){grid-template-columns:repeat(2, 1fr);}@media (min-width: 1280px){grid-template-columns:repeat(3, 1fr);}"
                }),
                N = n(85533),
                x = n(87462),
                O = n(56811),
                k = n(32761);
            const S = function(e) {
                var t = e.isOpen,
                    n = void 0 !== t && t,
                    o = e.cancelCallback,
                    c = void 0 === o ? function() {} : o,
                    l = e.doneCallback,
                    u = void 0 === l ? function() {} : l,
                    d = e.completed,
                    m = void 0 !== d && d,
                    p = a.useState([]),
                    f = (0, r.Z)(p, 2),
                    v = f[0],
                    g = f[1],
                    h = a.useState(!1),
                    b = (0, r.Z)(h, 2),
                    E = b[0],
                    y = b[1],
                    w = a.useState(""),
                    P = (0, r.Z)(w, 2),
                    Z = P[0],
                    C = P[1],
                    N = (0, k.nj)(),
                    S = (0, r.Z)(N, 2),
                    L = S[0],
                    I = S[1],
                    M = I.isLoading,
                    j = (I.isSuccess, I.isError, I.error, function(e) {
                        return {
                            checked: v.includes(e),
                            id: "checkbox-".concat(e),
                            className: "tw-my-4 md:tw-my-2.5",
                            onChange: function() {
                                v.includes(e) ? g(v.filter((function(t) {
                                    return t !== e
                                }))) : g([].concat((0, s.Z)(v), [e]))
                            }
                        }
                    }),
                    z = a.createElement("div", null, a.createElement("p", null, "You're invited to test VRChat's iOS closed beta! If you have an iOS device and would like to participate, fill out the form below."), a.createElement("p", null, a.createElement("strong", null, "Please note that participation is not guaranteed, as we can only select a limited number of applicants."), "If chosen, we expect you to provide feedback and report bugs on the Canny. Inactive participants may be removed from the Closed Beta at any point."), a.createElement("h6", {
                        className: "tw-mt-8"
                    }, "Select all iOS devices you have access to and will use for testing."), a.createElement(i.XZ, (0, x.Z)({
                        label: "iPhone 12 Pro/Max"
                    }, j("iPhone12PM"))), a.createElement(i.XZ, (0, x.Z)({
                        label: "iPhone 13 Pro/Max"
                    }, j("iPhone13PM"))), a.createElement(i.XZ, (0, x.Z)({
                        label: "iPhone 14"
                    }, j("iPhone14"))), a.createElement(i.XZ, (0, x.Z)({
                        label: "iPhone 14 Pro/Max"
                    }, j("iPhone14PM"))), a.createElement(i.XZ, (0, x.Z)({
                        label: "iPhone 15"
                    }, j("iPhone15"))), a.createElement(i.XZ, (0, x.Z)({
                        label: "iPhone 15 Pro/Max"
                    }, j("iPhone15PM"))), a.createElement(i.XZ, (0, x.Z)({
                        label: "11-inch iPad Pro (2nd Generation of higher)"
                    }, j("iPadPro11"))), a.createElement(i.XZ, (0, x.Z)({
                        label: "12.9-inch iPad Pro (4th generation or higher)"
                    }, j("iPadPro12"))), a.createElement(i.XZ, (0, x.Z)({
                        label: "iPad Air (5th generation or higher)"
                    }, j("iPadAir"))), a.createElement("h6", {
                        className: "tw-mt-6"
                    }, "Are you a creator?"), a.createElement(i.XZ, {
                        label: "Yes, I am a creator.",
                        checked: E,
                        onChange: function() {
                            return y(!E)
                        }
                    }), a.createElement("h6", {
                        className: "tw-mt-6 tw-mb-4"
                    }, "To participate in the iOS Beta channel on discord, please enter your discord name (optional)"), a.createElement("div", {
                        className: "tw-flex tw-items-center"
                    }, a.createElement(i.$1, {
                        icon: O.IB,
                        size: "2x"
                    }), a.createElement(i.II, {
                        className: "tw-flex-grow tw-ml-4",
                        placeholder: "Discord Name",
                        maxLength: 32,
                        value: Z,
                        onChange: function(e) {
                            return C(e.target.value)
                        }
                    })), a.createElement(i.zx, {
                        className: "tw-mt-6",
                        onClick: function() {
                            L({
                                betaName: _,
                                metadata: {
                                    devices: v,
                                    isCreator: E,
                                    discordName: Z
                                }
                            })
                        },
                        loading: M,
                        disabled: 0 === v.length || M
                    }, M ? "Submitting" : "Submit"), a.createElement(i.zx, {
                        neutral: !0,
                        className: "tw-mt-6",
                        disabled: M,
                        onClick: c
                    }, "Cancel")),
                    B = a.createElement("div", null, a.createElement("h6", null, "Your application has been submitted successfully, thank you!"), a.createElement("p", null, "We will review applications and email you if you're selected with next steps."), a.createElement(i.zx, {
                        onClick: u
                    }, "Done"));
                return a.createElement(i.u_, {
                    title: "VRChat iOS Closed Beta Application",
                    isVisible: n,
                    slim: !0,
                    onClose: m ? u : c,
                    onCloseFinished: c,
                    doNotCapitalize: !0
                }, m ? B : z)
            };
            var L = n(87709),
                I = ["title", "children", "dismissable", "onDismiss"];
            const M = function(e) {
                var t = e.title,
                    n = e.children,
                    r = e.dismissable,
                    i = void 0 === r || r,
                    o = e.onDismiss,
                    s = void 0 === o ? function() {} : o,
                    l = (0, c.Z)(e, I);
                return a.createElement(j, l, a.createElement(z, null, a.createElement(D, null, t), n), i && a.createElement(B, {
                    onClick: s,
                    icon: L.faXmark,
                    size: "2x"
                }))
            };
            var j = (0, E.Z)("div", {
                    target: "e1fo5i6a3"
                })({
                    name: "i8aeo0",
                    styles: "display:flex;align-items:center;background-color:#20d1ed;color:#1a1a1a;padding:0.5rem 0;margin-bottom:1rem;border-radius:5px"
                }),
                z = (0, E.Z)("div", {
                    target: "e1fo5i6a2"
                })({
                    name: "tu59xn",
                    styles: "display:flex;flex-grow:1;flex-direction:column;justify-content:center;align-items:center"
                }),
                B = (0, E.Z)(i.$1, {
                    target: "e1fo5i6a1"
                })({
                    name: "nfd03i",
                    styles: "margin-right:1rem"
                }),
                D = (0, E.Z)("h4", {
                    target: "e1fo5i6a0"
                })({
                    name: "h2wgvc",
                    styles: "margin:0;font-size:1.25rem"
                }),
                X = n(15832);
            var _ = "ios-closed-beta",
                R = (0, E.Z)("a", {
                    target: "ercad9d0"
                })({
                    name: "1nh6q2e",
                    styles: "color:#1a1a1a;cursor:pointer;text-decoration:underline"
                });
            const T = function() {
                var e = (0, X._)("campaignsSeen", []),
                    t = (0, r.Z)(e, 2),
                    n = t[0],
                    i = t[1],
                    o = (0, k._m)({
                        betaName: _
                    }),
                    c = o.data,
                    l = o.isFetching,
                    u = o.isError,
                    d = o.error,
                    m = (0, k.It)({
                        betaName: _
                    }),
                    p = m.data,
                    f = m.isFetching,
                    v = m.isError,
                    g = a.useState(n.includes(_)),
                    h = (0, r.Z)(g, 2),
                    b = h[0],
                    E = h[1],
                    y = a.useState(!1),
                    w = (0, r.Z)(y, 2),
                    P = w[0],
                    Z = w[1],
                    C = a.useState(!1),
                    N = (0, r.Z)(C, 2),
                    x = N[0],
                    O = N[1];
                a.useEffect((function() {
                    x || b || u && 404 === d.status && O(!0)
                }), [c, u, d]);
                var L = function() {
                        i([].concat((0, s.Z)(n), [_])), E(!0)
                    },
                    I = c && null != c.created_at;
                return b || f || l || v || !p || !p.active || !x && I ? null : a.createElement(a.Fragment, null, a.createElement(S, {
                    isOpen: P,
                    cancelCallback: function() {
                        return Z(!1)
                    },
                    doneCallback: L,
                    completed: I
                }), a.createElement(M, {
                    title: "LIMITED AVAILABILITY",
                    onDismiss: L
                }, a.createElement("span", {
                    className: "tw-text-center tw-px-2"
                }, "VRChat on iOS is Coming Soon! ", a.createElement(R, {
                    onClick: function() {
                        return Z(!0)
                    }
                }, "Sign up to be a Closed Beta Tester"))))
            };
            var A = n(72562);
            const F = function() {
                var e, t = (0, u.XC)().data;
                return a.useEffect((function() {
                    (0, A.Kz)("Web_Home")
                }), []), a.createElement("div", null, a.createElement(N.Z, null, "Home"), a.createElement("div", {
                    className: "center-block"
                }, a.createElement(T, null), a.createElement("h2", {
                    className: "text-center"
                }, "Greetings, ", null !== (e = null == t ? void 0 : t.displayName) && void 0 !== e ? e : "whoever you are", "!"), a.createElement(b, {
                    className: "mt-5"
                }), a.createElement(Z, {
                    className: "mt-5"
                })))
            }
        },
        89182: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var a = n(87462),
                r = n(45697),
                i = n.n(r),
                o = n(67294),
                c = n(14411),
                s = function(e) {
                    var t;
                    return o.createElement(c.uW, (0, a.Z)({
                        fieldsList: ["occupants", "visits", "favorites", "updated_at"],
                        contentType: "world",
                        data: null !== (t = e.world) && void 0 !== t ? t : e.data
                    }, e))
                };
            s.propTypes = {
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
            const l = s
        },
        32761: (e, t, n) => {
            n.d(t, {
                It: () => r,
                _m: () => i,
                nj: () => o
            });
            var a = n(61509).S.injectEndpoints({
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
                r = a.useGetBetaQuery,
                i = a.useGetBetaRegistrationQuery,
                o = a.useCreateBetaRegistrationMutation
        }
    }
]);
//# sourceMappingURL=bbfca06842ff080921486fb1f2bfa204281c2aea348b4d7719b8797df68cfd3b.js.map