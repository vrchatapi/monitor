"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2704], {
        22704: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => K
            });
            var n = a(42138),
                r = a(4942),
                l = a(54546),
                c = a(34601),
                o = a(30856),
                s = a(68412),
                i = a(87709),
                m = a(20702),
                w = a(55462),
                u = a(7581),
                d = a(41145),
                f = a(62228),
                p = a(3629),
                g = a(7371),
                v = a(91435),
                b = a(28963),
                E = a(67294),
                h = a(79655),
                y = a(83505),
                x = a(12752),
                N = a(14411),
                k = a(67371),
                O = a(87462),
                S = a(45987),
                j = a(65394),
                I = a(85020),
                C = a(18357),
                _ = (a(37337), a(64358)),
                P = a(86646),
                T = ["images", "className", "style"];

            function A(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(a), !0).forEach((function(t) {
                        (0, r.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : A(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            const R = function(e) {
                var t = e.images,
                    a = void 0 === t ? [] : t,
                    n = e.className,
                    r = e.style,
                    c = void 0 === r ? {} : r,
                    o = (0, S.Z)(e, T),
                    s = E.useRef(null),
                    i = E.useRef(null),
                    m = E.useState(0),
                    w = (0, l.Z)(m, 2),
                    u = w[0],
                    d = w[1],
                    f = E.useMemo((function() {
                        return a.map((function(e) {
                            var t = [64, 128, 256, 512, 1024, 2048].reduce((function(t, a) {
                                return t["".concat(a, "w")] = (0, _.S6)(D(D({}, e), {}, {
                                    width: a
                                })), t
                            }), {});
                            return D(D({}, e), {}, {
                                sizes: t,
                                fullSrcSet: Object.entries(t).map((function(e) {
                                    var t = (0, l.Z)(e, 2),
                                        a = t[0],
                                        n = t[1];
                                    return "".concat(n, " ").concat(a)
                                })).join(","),
                                thumbSrcSet: "".concat(t["128w"], " 2x, ").concat(t["256w"], " 4x")
                            })
                        }))
                    }), [a]),
                    p = function(e) {
                        var t, a;
                        null === (t = s.current) || void 0 === t || null === (t = t.querySelector("[data-gallery-index='".concat(e, "']"))) || void 0 === t || t.scrollIntoView({
                            block: "nearest"
                        }), null === (a = i.current) || void 0 === a || null === (a = a.querySelector("[data-gallery-index='".concat(e, "']"))) || void 0 === a || a.scrollIntoView({
                            block: "nearest"
                        })
                    },
                    g = function(e) {
                        e.preventDefault();
                        var t = e.currentTarget;
                        e.currentTarget && s.current && p(t.dataset.galleryIndex)
                    },
                    v = function(e, t) {
                        var a;
                        if (e) {
                            var n = parseInt(null === (a = t.target) || void 0 === a ? void 0 : a.dataset.galleryIndex, 10);
                            Number.isNaN(n) || d(n)
                        }
                    },
                    b = E.useMemo((function() {
                        return f.sort((function(e, t) {
                            return e.order - t.order
                        }))
                    }), [f]);
                return E.createElement("div", (0, O.Z)({
                    className: (0, y.cx)(n, "tw-group tw-flex tw-flex-col tw-w-full tw-relative tw-gap-2"),
                    style: D({}, c)
                }, o), E.createElement("div", {
                    className: "tw-flex tw-flex-row tw-overflow-x-auto tw-gap-2 tw-rounded-md tw-scroll-smooth tw-snap-x tw-snap-mandatory",
                    ref: s
                }, b.map((function(e, t) {
                    return E.createElement(C.df, {
                        as: "img",
                        threshold: .6,
                        root: s.current,
                        onChange: v,
                        key: e.fileId || e.fileUrl,
                        "data-gallery-index": t,
                        className: "tw-flex-none tw-aspect-video tw-snap-center tw-w-full tw-object-contain tw-rounded-md tw-bg-cover",
                        loading: "lazy",
                        src: e.sizes["2048w"],
                        srcSet: e.fullSrcSet,
                        alt: ""
                    })
                }))), E.createElement("div", {
                    className: "tw-absolute tw-w-full tw-aspect-video tw-top-0 tw-pointer-events-none"
                }, E.createElement("div", {
                    className: "tw-relative tw-w-full tw-aspect-video tw-flex tw-flex-row tw-items-center"
                }, u > 0 && E.createElement("button", {
                    type: "button",
                    className: "tw-absolute tw-left-2 tw-bg-dark-grey-transparent-90 tw-p-3 tw-border-none tw-rounded-md tw-hidden group-hover:tw-flex tw-pointer-events-auto",
                    onClick: function() {
                        u < 1 || p(u - 1)
                    }
                }, E.createElement(P.Z, {
                    icon: I.A3,
                    size: "2x"
                })), u < a.length - 1 && E.createElement("button", {
                    type: "button",
                    className: "tw-absolute tw-right-2 tw-bg-dark-grey-transparent-90 tw-p-3 tw-border-none tw-rounded-md tw-hidden group-hover:tw-flex tw-pointer-events-auto",
                    onClick: function() {
                        u > a.length || p(u + 1)
                    }
                }, E.createElement(P.Z, {
                    icon: j._t,
                    size: "2x"
                })))), E.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-center tw-overflow-x-auto tw-gap-2 tw-rounded-md tw-scroll-smooth tw-snap-x tw-snap-mandatory",
                    ref: i
                }, b.map((function(e, t) {
                    return E.createElement("a", {
                        key: e.fileId || e.fileUrl,
                        "data-gallery-index": t,
                        onClick: g,
                        href: "#".concat(e.fileId),
                        className: "tw-bg-transparent tw-border-none tw-p-0 tw-m-0 tw-cursor-pointer"
                    }, E.createElement("img", {
                        className: (0, y.cx)("tw-w-16 tw-h-16 tw-object-cover tw-rounded-md tw-snap-center tw-border-solid tw-border-2", {
                            "tw-border-primary": u === t,
                            "tw-border-transparent": u !== t
                        }),
                        loading: "lazy",
                        src: e.sizes["64w"],
                        srcSet: e.thumbSrcSet,
                        alt: ""
                    }))
                }))))
            };
            var Z = a(72998),
                z = a(64537),
                X = a(60006),
                $ = a(95643),
                q = a(67263),
                U = a(58687),
                M = a(27484),
                V = a.n(M),
                J = a(95896),
                F = a(72522),
                L = a(3620),
                H = a(74205);

            function B(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? B(Object(a), !0).forEach((function(t) {
                        (0, r.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : B(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var Q = new RegExp("^".concat(L.i.AUTHOR)),
                G = ["admin_quest_fallback", "admin_quest_fallback_basic", "admin_quest_fallback_extended", "author_quest_fallback"];
            const K = function(e) {
                var t, a, r, O = e.isPreview,
                    S = void 0 !== O && O,
                    j = e.avatar,
                    I = e.user,
                    C = e.listing,
                    P = e.products,
                    T = void 0 === P ? [] : P,
                    A = e.galleryImages,
                    D = void 0 === A ? [] : A,
                    M = e.licenses,
                    B = void 0 === M ? [] : M,
                    K = e.isSelectAvatarLoading,
                    Y = void 0 !== K && K,
                    ee = e.isSelectFallbackLoading,
                    te = void 0 !== ee && ee,
                    ae = e.onPurchase,
                    ne = void 0 === ae ? function() {} : ae,
                    re = e.onTryOn,
                    le = void 0 === re ? function() {} : re,
                    ce = e.onAvatarChange,
                    oe = void 0 === ce ? function() {} : ce,
                    se = e.onChangeFallback,
                    ie = void 0 === se ? function() {} : se,
                    me = e.onEdit,
                    we = void 0 === me ? function() {} : me,
                    ue = (0, x.pc)(),
                    de = (0, x.Tu)().user,
                    fe = E.useState("description"),
                    pe = (0, l.Z)(fe, 2),
                    ge = pe[0],
                    ve = pe[1],
                    be = E.useState(!1),
                    Ee = (0, l.Z)(be, 2),
                    he = Ee[0],
                    ye = Ee[1],
                    xe = S ? de : I,
                    Ne = !("private" === (null == j ? void 0 : j.releaseStatus)),
                    ke = S || (null == j ? void 0 : j.authorId) === de.id,
                    Oe = E.useMemo((function() {
                        return null == B ? void 0 : B.some((function(e) {
                            return e.isCurrent && "avatar" === e.forType && e.forId === j.id && e.licenseHolderId === de.id
                        }))
                    }), [j, B, de]),
                    Se = ke || Oe || Ne,
                    je = ue || ke || Oe || Ne,
                    Ie = 1 === T.length && T[0].productType === J.Pm.AVATAR,
                    Ce = (0, _.S6)({
                        fileUrl: (null == xe ? void 0 : xe.profilePicOverride) || (null == xe ? void 0 : xe.currentAvatarImageUrl),
                        width: "512"
                    }),
                    _e = (0, _.S6)({
                        fileUrl: null == xe ? void 0 : xe.userIcon,
                        width: "256"
                    }),
                    Pe = (0, _.S6)(W(W(W({
                        width: "512"
                    }, !Ie && C && {
                        fileId: null == C ? void 0 : C.imageId
                    }), Ie && C && {
                        fileId: null === (t = T[0]) || void 0 === t ? void 0 : t.imageId
                    }), j && {
                        fileUrl: null == j ? void 0 : j.imageUrl
                    })),
                    Te = E.useMemo((function() {
                        return Object.keys(F.VT).reduce((function(e, t) {
                            var a = (0, U.F)(null == j ? void 0 : j.unityPackages, t);
                            return a && (e[t] = a), e
                        }), {})
                    }), [j]),
                    Ae = E.useMemo((function() {
                        return Object.entries(F.VT).filter((function(e) {
                            var t = (0, l.Z)(e, 1)[0];
                            return !!Te[t]
                        }))
                    }), [Te]),
                    De = E.useMemo((function() {
                        var e, t;
                        return null !== (e = null == j || null === (t = j.tags) || void 0 === t ? void 0 : t.some((function(e) {
                            return G.includes(e)
                        }))) && void 0 !== e && e
                    }), [null == j ? void 0 : j.tags]),
                    Re = E.useMemo((function() {
                        return null == j ? void 0 : j.tags.filter((function(e) {
                            return e.startsWith(L.i.AUTHOR)
                        }))
                    }), [null == j ? void 0 : j.tags]),
                    Ze = E.useMemo((function() {
                        var e, t;
                        return [null == j || null === (e = j.styles) || void 0 === e ? void 0 : e.primary, null == j || null === (t = j.styles) || void 0 === t ? void 0 : t.secondary].concat((0, n.Z)((null == Re ? void 0 : Re.map((function(e) {
                            return e.replace(Q, "")
                        }))) || [])).filter(Boolean)
                    }), [null == j || null === (a = j.styles) || void 0 === a ? void 0 : a.primary, null == j || null === (r = j.styles) || void 0 === r ? void 0 : r.secondary, Re]),
                    ze = !(null == Ze || !Ze.length);
                if (!j && !C) return null;
                return E.createElement(E.Fragment, null, E.createElement(N.JX, {
                    className: "md:tw-flex-row tw-gap-3 tw-items-center md:tw-items-stretch"
                }, E.createElement(N.pw, {
                    width: 144,
                    className: "tw-rounded-md",
                    imgClassName: "tw-aspect-square",
                    imageId: Pe || (null == C ? void 0 : C.file),
                    fallbackSrc: q,
                    fitToCover: !0,
                    alt: "".concat(null == j ? void 0 : j.name, " Thumbnail") || 0
                }), E.createElement(N.JX, {
                    className: "tw-flex-grow tw-gap-1"
                }, C && function(e) {
                    switch (e) {
                        case J.ft.PERMANENT:
                            return E.createElement(X.DR, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize tw-leading-5"
                            }, E.createElement(N.$1, {
                                icon: H.SQ,
                                width: 14
                            }), " ", e);
                        case J.ft.DURATION:
                            return E.createElement(X.DR, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize"
                            }, E.createElement(N.$1, {
                                icon: b.DH
                            }), " ", e);
                        case J.ft.INSTANT:
                            return E.createElement(X.DR, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize"
                            }, E.createElement(N.$1, {
                                icon: v.BD
                            }), " ", e);
                        default:
                            return null
                    }
                }(C.listingType), E.createElement(N.X2, {
                    className: "tw-items-center tw-gap-2"
                }, E.createElement("h2", {
                    className: (0, y.cx)("tw-mb-0 tw-text-truncate tw-line-clamp-1 tw-break-all tw-leading-[1.25]", {
                        "tw-flex-grow": !ke
                    })
                }, (null == j ? void 0 : j.name) || (null == C ? void 0 : C.displayName)), ke && !S && E.createElement(N.JX, {
                    className: "tw-justify-center md:tw-px-1 tw-flex-grow"
                }, E.createElement(N.X2, {
                    className: "tw-ml-2 tw-mt-2 md:tw-m-0"
                }, E.createElement(N.zx, {
                    className: "tw-rounded-full tw-h-[40px] tw-w-[40px]",
                    "aria-label": "Edit Avatar",
                    onClick: function() {
                        we()
                    }
                }, E.createElement(N.$1, {
                    icon: g.Iw
                })))), j && E.createElement(N.X2, {
                    className: "tw-flex-0 tw-gap-2 tw-justify-self-end"
                }, E.createElement(z.Z, {
                    text: "".concat(j.name, " by ").concat(j.authorName, " #VRChat #MadeWithVRChat"),
                    url: "".concat(window.endpoint, "/home/avatars/").concat(j.id)
                }))), E.createElement(N.X2, {
                    className: "tw-gap-2 tw-flex-wrap tw-flex-grow"
                }, E.createElement(N.JX, {
                    className: "tw-flex-[100_1_0%] tw-gap-2 tw-min-w-[285px] tw-flex-grow-[100]"
                }, E.createElement("span", {
                    className: "tw-text-[#737372]"
                }, "By", " ", E.createElement(h.rU, {
                    to: "/home/user/".concat((null == j ? void 0 : j.authorId) || xe.id)
                }, _e && E.createElement("img", {
                    className: "tw-aspect-square tw-w-6 tw-rounded-full tw-mr-1",
                    src: _e,
                    alt: ""
                }), (null == j ? void 0 : j.authorName) || xe.displayName), T.length >= 1 && E.createElement(E.Fragment, null, " | ", E.createElement("small", null, E.createElement(N.$1, {
                    icon: p.hV
                }), " ", T.length, " included product", 1 === T.length ? "" : "s"))), ze && E.createElement("ul", {
                    className: "tw-flex tw-flex-row tw-flex-wrap tw-m-0 tw-p-0 tw-gap-1 tw-list-none"
                }, Ze.map((function(e) {
                    return E.createElement("li", {
                        key: e,
                        className: "tw-text-xs tw-px-2 tw-py-1 tw-bg-[#575757] tw-rounded-full"
                    }, e)
                })))), E.createElement(N.JX, {
                    className: "tw-flex-[1_1_0%] tw-min-w-[300px] tw-self-end"
                }, E.createElement(N._q, {
                    className: "tw-flex-row tw-items-center tw-gap-2 tw-bg-cover tw-bg-center",
                    style: {
                        backgroundImage: "linear-gradient( rgba(37, 42, 48, 0.75), rgba(37, 42, 48, 0.75) ), url(".concat(Ce, ")")
                    }
                }, _e && E.createElement("img", {
                    className: "tw-aspect-square tw-w-12 tw-flex-0 tw-rounded-full tw-border-solid tw-border-2 tw-border-gray-700",
                    src: _e,
                    alt: ""
                }), E.createElement(N.JX, {
                    className: "tw-flex-auto"
                }, E.createElement("small", null, C ? "Seller" : "Author"), E.createElement(h.rU, {
                    to: "/home/user/".concat((null == j ? void 0 : j.authorId) || (null == xe ? void 0 : xe.id)),
                    className: "hover:tw-text-white tw-text-teal-accent hover:tw-no-underline"
                }, E.createElement("strong", null, (null == j ? void 0 : j.authorName) || (null == xe ? void 0 : xe.displayName))))))))), E.createElement("hr", {
                    className: "tw-my-3 tw-border-gray-300"
                }), E.createElement(N.X2, {
                    className: "tw-flex-wrap tw-gap-3"
                }, E.createElement(N.JX, {
                    className: "tw-flex-[100_1_0%] tw-min-w-[285px] tw-flex-grow-[100]"
                }, !!D.length && E.createElement("div", {
                    className: "tw-mb-3"
                }, E.createElement(R, {
                    images: D
                })), E.createElement(N.oI, null, E.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, C ? "Listing" : "Avatar", " Info")), E.createElement(N.Ao, {
                    className: "tw-mb-3 tw-break-words"
                }, (null == j ? void 0 : j.acknowledgements) && E.createElement(Z.Z, {
                    className: "-tw-mt-3",
                    tabs: [{
                        name: "Description",
                        id: "description",
                        condition: !0
                    }, {
                        name: "Acknowledgements",
                        id: "acknowledgements",
                        condition: !0
                    }],
                    selected: ge,
                    onChange: function(e) {
                        return ve(e)
                    },
                    justify: "left"
                }), E.createElement("span", {
                    className: "tw-whitespace-pre-wrap"
                }, C ? C.description : j[ge]))), E.createElement(N.JX, {
                    className: "tw-flex-[1_1_0%] tw-min-w-[300px]"
                }, (S || !ke || !ue) && C && E.createElement(N._q, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Price"), E.createElement("h2", null, E.createElement(N.b5, null), " ", null == C ? void 0 : C.priceTokens), E.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, E.createElement(N.zx, {
                    onClick: function() {
                        S || ne(C)
                    }
                }, "Purchase"), E.createElement(N.zx, {
                    onClick: function() {
                        S || le(C)
                    },
                    neutral: !0
                }, "Try On In-World"), (null == T ? void 0 : T.length) >= 1 && E.createElement(E.Fragment, null, E.createElement(N.zx, {
                    className: "tw-mt-2",
                    transparent: !0,
                    onClick: function() {
                        return ye(!he)
                    }
                }, "View ", T.length, " included products", " ", he ? E.createElement(N.$1, {
                    icon: f.mT
                }) : E.createElement(N.$1, {
                    icon: d.pt
                })), he && E.createElement(N.JX, {
                    className: "tw-gap-2"
                }, T.map((function(e) {
                    return E.createElement($.Z, {
                        className: "tw-min-h-20",
                        key: e.id,
                        productData: e
                    })
                })))))), !S && (je || Se && j) && E.createElement(N._q, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Manage Avatar"), E.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, je && E.createElement(N.zx, {
                    disabled: Y,
                    loading: Y,
                    onClick: oe
                }, E.createElement(N.$1, {
                    icon: u.mn
                }), " Change Into Avatar"), je && De && E.createElement(N.zx, {
                    disabled: te,
                    loading: te,
                    onClick: ie,
                    neutral: !0
                }, E.createElement(N.$1, {
                    icon: w.SD
                }), " Use as Fallback"), Se && j && E.createElement(k.Z, {
                    type: "avatar",
                    contentId: j.id,
                    authorId: j.authorId,
                    releaseStatus: j.releaseStatus,
                    neutral: !0
                }))), j && E.createElement(N._q, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Performance Rating"), Ae.length ? E.createElement("table", {
                    className: "tw-w-full"
                }, Ae.map((function(e, t) {
                    var a, n = (0, l.Z)(e, 2),
                        r = n[0],
                        c = n[1].label,
                        o = Te[r],
                        w = E.createElement("div", {
                            className: "tw-flex tw-items-center tw-gap-2"
                        }, E.createElement(N.$1, {
                            icon: m.RL
                        }), "No Security Checks");
                    if ("failed" === o.scanStatus) w = E.createElement("div", {
                        className: "tw-flex tw-items-center tw-gap-2"
                    }, E.createElement(N.$1, {
                        icon: i.faXmark
                    }), "Security Checks Failed");
                    else if ("unscanned" === o.scanStatus) w = E.createElement("div", {
                        className: "tw-flex tw-items-center tw-gap-2"
                    }, E.createElement(N.$1, {
                        icon: s.faCircleQuestion
                    }), "Security Checks Pending");
                    else if (o.scanStatus) {
                        var u, d;
                        w = E.createElement("div", {
                            className: "tw-flex tw-items-center tw-gap-2"
                        }, E.createElement("img", {
                            style: {
                                height: "1em"
                            },
                            src: null === (u = F.i1[o.performanceRating]) || void 0 === u ? void 0 : u.image,
                            alt: ""
                        }), null === (d = F.i1[o.performanceRating]) || void 0 === d ? void 0 : d.label)
                    }
                    return E.createElement("tr", {
                        key: r,
                        className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                    }, E.createElement("th", {
                        className: "tw-py-1 tw-font-normal tw-text-center"
                    }, E.createElement(N.$1, {
                        icon: null === (a = F.VT[r]) || void 0 === a ? void 0 : a.icon
                    })), E.createElement("th", {
                        className: "tw-py-1 tw-font-normal"
                    }, c), E.createElement("td", {
                        className: "tw-py-1"
                    }, w))
                }))) : E.createElement("em", null, "No performance data found"), E.createElement("small", {
                    className: "tw-mt-3"
                }, E.createElement("a", {
                    href: "https://creators.vrchat.com/avatars/avatar-performance-ranking-system",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn about Performance Rating"))), j && E.createElement(N._q, {
                    className: "tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Details"), E.createElement("table", {
                    className: "tw-w-full"
                }, E.createElement("tr", {
                    className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                }, E.createElement("th", {
                    className: "tw-py-1 tw-font-normal tw-text-center"
                }, E.createElement(N.$1, {
                    icon: o.CP
                })), E.createElement("th", {
                    className: "tw-py-1 tw-font-normal"
                }, "Created"), E.createElement("td", null, V()(j.created_at).format("L"))), E.createElement("tr", {
                    className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                }, E.createElement("th", {
                    className: "tw-py-1 tw-font-normal tw-text-center"
                }, E.createElement(N.$1, {
                    icon: c.r6
                })), E.createElement("th", {
                    className: "tw-py-1 tw-font-normal"
                }, "Updated"), E.createElement("td", null, V()(j.updated_at).format("L"))))))))
            }
        }
    }
]);
//# sourceMappingURL=028a4a0229f4106725349948fc2ea4d542e2d34f10bc10a08738c3b2d061acc4.js.map