"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2704], {
        22704: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => G
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
                _ = a(65394),
                j = a(85020),
                I = a(18357),
                C = (a(37337), a(64358)),
                P = a(86646),
                T = ["images", "className", "style"];

            function D(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? D(Object(a), !0).forEach((function(t) {
                        (0, r.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : D(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            const Z = function(e) {
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
                                return t["".concat(a, "w")] = (0, C.S6)(A(A({}, e), {}, {
                                    width: a
                                })), t
                            }), {});
                            return A(A({}, e), {}, {
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
                    style: A({}, c)
                }, o), E.createElement("div", {
                    className: "tw-flex tw-flex-row tw-overflow-x-auto tw-gap-2 tw-rounded-md tw-scroll-smooth tw-snap-x tw-snap-mandatory",
                    ref: s
                }, b.map((function(e, t) {
                    return E.createElement(I.df, {
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
                    icon: j.A3,
                    size: "2x"
                })), u < a.length - 1 && E.createElement("button", {
                    type: "button",
                    className: "tw-absolute tw-right-2 tw-bg-dark-grey-transparent-90 tw-p-3 tw-border-none tw-rounded-md tw-hidden group-hover:tw-flex tw-pointer-events-auto",
                    onClick: function() {
                        u > a.length || p(u + 1)
                    }
                }, E.createElement(P.Z, {
                    icon: _._t,
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
            var z = a(72998),
                R = a(64537),
                X = a(60006),
                $ = a(95643),
                q = a(67263),
                U = a(58687),
                M = a(95002),
                V = a(27484),
                J = a.n(V),
                F = a(95896),
                L = a(72522),
                B = a(74205);

            function W(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function H(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? W(Object(a), !0).forEach((function(t) {
                        (0, r.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : W(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var Q = ["admin_quest_fallback", "admin_quest_fallback_basic", "admin_quest_fallback_extended", "author_quest_fallback"];
            const G = function(e) {
                var t, a, r, O = e.isPreview,
                    S = void 0 !== O && O,
                    _ = e.avatar,
                    j = e.user,
                    I = e.listing,
                    P = e.products,
                    T = void 0 === P ? [] : P,
                    D = e.galleryImages,
                    A = void 0 === D ? [] : D,
                    V = e.licenses,
                    W = void 0 === V ? [] : V,
                    G = e.isSelectAvatarLoading,
                    K = void 0 !== G && G,
                    Y = e.isSelectFallbackLoading,
                    ee = void 0 !== Y && Y,
                    te = e.onPurchase,
                    ae = void 0 === te ? function() {} : te,
                    ne = e.onTryOn,
                    re = void 0 === ne ? function() {} : ne,
                    le = e.onAvatarChange,
                    ce = void 0 === le ? function() {} : le,
                    oe = e.onChangeFallback,
                    se = void 0 === oe ? function() {} : oe,
                    ie = e.onEdit,
                    me = void 0 === ie ? function() {} : ie,
                    we = (0, x.pc)(),
                    ue = (0, x.Tu)().user,
                    de = E.useState("description"),
                    fe = (0, l.Z)(de, 2),
                    pe = fe[0],
                    ge = fe[1],
                    ve = E.useState(!1),
                    be = (0, l.Z)(ve, 2),
                    Ee = be[0],
                    he = be[1],
                    ye = S ? ue : j,
                    xe = !("private" === (null == _ ? void 0 : _.releaseStatus)),
                    Ne = S || (null == _ ? void 0 : _.authorId) === ue.id,
                    ke = E.useMemo((function() {
                        return null == W ? void 0 : W.some((function(e) {
                            return e.isCurrent && "avatar" === e.forType && e.forId === _.id && e.licenseHolderId === ue.id
                        }))
                    }), [_, W, ue]),
                    Oe = Ne || ke || xe,
                    Se = we || Ne || ke || xe,
                    _e = 1 === T.length && T[0].productType === F.Pm.AVATAR,
                    je = (0, C.S6)({
                        fileUrl: (null == ye ? void 0 : ye.profilePicOverride) || (null == ye ? void 0 : ye.currentAvatarImageUrl),
                        width: "512"
                    }),
                    Ie = (0, C.S6)({
                        fileUrl: null == ye ? void 0 : ye.userIcon,
                        width: "256"
                    }),
                    Ce = (0, C.S6)(H(H(H({
                        width: "512"
                    }, !_e && I && {
                        fileId: null == I ? void 0 : I.imageId
                    }), _e && I && {
                        fileId: null === (t = T[0]) || void 0 === t ? void 0 : t.imageId
                    }), _ && {
                        fileUrl: null == _ ? void 0 : _.imageUrl
                    })),
                    Pe = E.useMemo((function() {
                        return Object.keys(L.VT).reduce((function(e, t) {
                            var a = (0, U.F)(null == _ ? void 0 : _.unityPackages, t);
                            return a && (e[t] = a), e
                        }), {})
                    }), [_]),
                    Te = E.useMemo((function() {
                        return Object.entries(L.VT).filter((function(e) {
                            var t = (0, l.Z)(e, 1)[0];
                            return !!Pe[t]
                        }))
                    }), [Pe]),
                    De = E.useMemo((function() {
                        var e, t;
                        return null !== (e = null == _ || null === (t = _.tags) || void 0 === t ? void 0 : t.some((function(e) {
                            return Q.includes(e)
                        }))) && void 0 !== e && e
                    }), [null == _ ? void 0 : _.tags]),
                    Ae = E.useMemo((function() {
                        var e = [],
                            t = [];
                        return null == _ || _.tags.forEach((function(a) {
                            (0, M.x)(a) ? e.push(a): t.push(a)
                        })), {
                            privateTags: e,
                            publicTags: t
                        }
                    }), [null == _ ? void 0 : _.tags]),
                    Ze = (Ae.privateTags, Ae.publicTags),
                    ze = E.useMemo((function() {
                        var e, t;
                        return [null == _ || null === (e = _.styles) || void 0 === e ? void 0 : e.primary, null == _ || null === (t = _.styles) || void 0 === t ? void 0 : t.secondary].concat((0, n.Z)(Ze)).filter(Boolean)
                    }), [null == _ || null === (a = _.styles) || void 0 === a ? void 0 : a.primary, null == _ || null === (r = _.styles) || void 0 === r ? void 0 : r.secondary, Ze]),
                    Re = !(null == ze || !ze.length);
                if (!_ && !I) return null;
                return E.createElement(E.Fragment, null, E.createElement(N.JX, {
                    className: "md:tw-flex-row tw-gap-3 tw-items-center md:tw-items-stretch"
                }, E.createElement(N.pw, {
                    width: 144,
                    className: "tw-rounded-md",
                    imgClassName: "tw-aspect-square",
                    imageId: Ce || (null == I ? void 0 : I.file),
                    fallbackSrc: q,
                    fitToCover: !0,
                    alt: "".concat(null == _ ? void 0 : _.name, " Thumbnail") || 0
                }), E.createElement(N.JX, {
                    className: "tw-flex-grow tw-gap-1"
                }, I && function(e) {
                    switch (e) {
                        case F.ft.PERMANENT:
                            return E.createElement(X.DR, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize tw-leading-5"
                            }, E.createElement(N.$1, {
                                icon: B.SQ,
                                width: 14
                            }), " ", e);
                        case F.ft.DURATION:
                            return E.createElement(X.DR, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize"
                            }, E.createElement(N.$1, {
                                icon: b.DH
                            }), " ", e);
                        case F.ft.INSTANT:
                            return E.createElement(X.DR, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize"
                            }, E.createElement(N.$1, {
                                icon: v.BD
                            }), " ", e);
                        default:
                            return null
                    }
                }(I.listingType), E.createElement(N.X2, {
                    className: "tw-items-center tw-gap-2"
                }, E.createElement("h2", {
                    className: (0, y.cx)("tw-mb-0 tw-text-truncate tw-line-clamp-1 tw-break-all tw-leading-[1.25]", {
                        "tw-flex-grow": !Ne
                    })
                }, (null == _ ? void 0 : _.name) || (null == I ? void 0 : I.displayName)), Ne && !S && E.createElement(N.JX, {
                    className: "tw-justify-center md:tw-px-1 tw-flex-grow"
                }, E.createElement(N.X2, {
                    className: "tw-ml-2 tw-mt-2 md:tw-m-0"
                }, E.createElement(N.zx, {
                    className: "tw-rounded-full tw-h-[40px] tw-w-[40px]",
                    "aria-label": "Edit Avatar",
                    onClick: function() {
                        me()
                    }
                }, E.createElement(N.$1, {
                    icon: g.Iw
                })))), _ && E.createElement(N.X2, {
                    className: "tw-flex-0 tw-gap-2 tw-justify-self-end"
                }, E.createElement(R.Z, {
                    text: "".concat(_.name, " by ").concat(_.authorName, " #VRChat #MadeWithVRChat"),
                    url: "".concat(window.endpoint, "/home/avatars/").concat(_.id)
                }))), E.createElement(N.X2, {
                    className: "tw-gap-2 tw-flex-wrap tw-flex-grow"
                }, E.createElement(N.JX, {
                    className: "tw-flex-[100_1_0%] tw-gap-2 tw-min-w-[285px] tw-flex-grow-[100]"
                }, E.createElement("span", {
                    className: "tw-text-[#737372]"
                }, "By", " ", E.createElement(h.rU, {
                    to: "/home/user/".concat((null == _ ? void 0 : _.authorId) || ye.id)
                }, Ie && E.createElement("img", {
                    className: "tw-aspect-square tw-w-6 tw-rounded-full tw-mr-1",
                    src: Ie,
                    alt: ""
                }), (null == _ ? void 0 : _.authorName) || ye.displayName), T.length >= 1 && E.createElement(E.Fragment, null, " | ", E.createElement("small", null, E.createElement(N.$1, {
                    icon: p.hV
                }), " ", T.length, " included product", 1 === T.length ? "" : "s"))), Re && E.createElement("ul", {
                    className: "tw-flex tw-flex-row tw-flex-wrap tw-m-0 tw-p-0 tw-gap-1 tw-list-none"
                }, ze.map((function(e) {
                    return E.createElement("li", {
                        key: e,
                        className: "tw-text-xs tw-px-2 tw-py-1 tw-bg-[#575757] tw-rounded-full"
                    }, e)
                })))), E.createElement(N.JX, {
                    className: "tw-flex-[1_1_0%] tw-min-w-[300px] tw-self-end"
                }, E.createElement(N._q, {
                    className: "tw-flex-row tw-items-center tw-gap-2 tw-bg-cover tw-bg-center",
                    style: {
                        backgroundImage: "linear-gradient( rgba(37, 42, 48, 0.75), rgba(37, 42, 48, 0.75) ), url(".concat(je, ")")
                    }
                }, Ie && E.createElement("img", {
                    className: "tw-aspect-square tw-w-12 tw-flex-0 tw-rounded-full tw-border-solid tw-border-2 tw-border-gray-700",
                    src: Ie,
                    alt: ""
                }), E.createElement(N.JX, {
                    className: "tw-flex-auto"
                }, E.createElement("small", null, I ? "Seller" : "Author"), E.createElement(h.rU, {
                    to: "/home/user/".concat((null == _ ? void 0 : _.authorId) || (null == ye ? void 0 : ye.id)),
                    className: "hover:tw-text-white tw-text-teal-accent hover:tw-no-underline"
                }, E.createElement("strong", null, (null == _ ? void 0 : _.authorName) || (null == ye ? void 0 : ye.displayName))))))))), E.createElement("hr", {
                    className: "tw-my-3 tw-border-gray-300"
                }), E.createElement(N.X2, {
                    className: "tw-flex-wrap tw-gap-3"
                }, E.createElement(N.JX, {
                    className: "tw-flex-[100_1_0%] tw-min-w-[285px] tw-flex-grow-[100]"
                }, !!A.length && E.createElement("div", {
                    className: "tw-mb-3"
                }, E.createElement(Z, {
                    images: A
                })), E.createElement(N.oI, null, E.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, I ? "Listing" : "Avatar", " Info")), E.createElement(N.Ao, {
                    className: "tw-mb-3 tw-break-words"
                }, (null == _ ? void 0 : _.acknowledgements) && E.createElement(z.Z, {
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
                    selected: pe,
                    onChange: function(e) {
                        return ge(e)
                    },
                    justify: "left"
                }), E.createElement("span", {
                    className: "tw-whitespace-pre-wrap"
                }, I ? I.description : _[pe]))), E.createElement(N.JX, {
                    className: "tw-flex-[1_1_0%] tw-min-w-[300px]"
                }, (S || !Ne || !we) && I && E.createElement(N._q, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Price"), E.createElement("h2", null, E.createElement(N.b5, null), " ", null == I ? void 0 : I.priceTokens), E.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, E.createElement(N.zx, {
                    onClick: function() {
                        S || ae(I)
                    }
                }, "Purchase"), E.createElement(N.zx, {
                    onClick: function() {
                        S || re(I)
                    },
                    neutral: !0
                }, "Try On In-World"), (null == T ? void 0 : T.length) >= 1 && E.createElement(E.Fragment, null, E.createElement(N.zx, {
                    className: "tw-mt-2",
                    transparent: !0,
                    onClick: function() {
                        return he(!Ee)
                    }
                }, "View ", T.length, " included products", " ", Ee ? E.createElement(N.$1, {
                    icon: f.mT
                }) : E.createElement(N.$1, {
                    icon: d.pt
                })), Ee && E.createElement(N.JX, {
                    className: "tw-gap-2"
                }, T.map((function(e) {
                    return E.createElement($.Z, {
                        className: "tw-min-h-20",
                        key: e.id,
                        productData: e
                    })
                })))))), !S && (Se || Oe && _) && E.createElement(N._q, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Manage Avatar"), E.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, Se && E.createElement(N.zx, {
                    disabled: K,
                    loading: K,
                    onClick: ce
                }, E.createElement(N.$1, {
                    icon: u.mn
                }), " Change Into Avatar"), Se && De && E.createElement(N.zx, {
                    disabled: ee,
                    loading: ee,
                    onClick: se,
                    neutral: !0
                }, E.createElement(N.$1, {
                    icon: w.SD
                }), " Use as Fallback"), Oe && _ && E.createElement(k.Z, {
                    type: "avatar",
                    contentId: _.id,
                    authorId: _.authorId,
                    releaseStatus: _.releaseStatus,
                    neutral: !0
                }))), _ && E.createElement(N._q, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Performance Rating"), Te.length ? E.createElement("table", {
                    className: "tw-w-full"
                }, Te.map((function(e, t) {
                    var a, n = (0, l.Z)(e, 2),
                        r = n[0],
                        c = n[1].label,
                        o = Pe[r],
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
                            src: null === (u = L.i1[o.performanceRating]) || void 0 === u ? void 0 : u.image,
                            alt: ""
                        }), null === (d = L.i1[o.performanceRating]) || void 0 === d ? void 0 : d.label)
                    }
                    return E.createElement("tr", {
                        key: r,
                        className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                    }, E.createElement("th", {
                        className: "tw-py-1 tw-font-normal tw-text-center"
                    }, E.createElement(N.$1, {
                        icon: null === (a = L.VT[r]) || void 0 === a ? void 0 : a.icon
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
                }, "Learn about Performance Rating"))), _ && E.createElement(N._q, {
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
                }, "Created"), E.createElement("td", null, J()(_.created_at).format("L"))), E.createElement("tr", {
                    className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                }, E.createElement("th", {
                    className: "tw-py-1 tw-font-normal tw-text-center"
                }, E.createElement(N.$1, {
                    icon: c.r6
                })), E.createElement("th", {
                    className: "tw-py-1 tw-font-normal"
                }, "Updated"), E.createElement("td", null, J()(_.updated_at).format("L"))))))))
            }
        },
        95002: (e, t, a) => {
            a.d(t, {
                x: () => r
            });
            var n = ["admin_", "author_", "content_", "feature_", "system_"],
                r = function(e) {
                    return n.some((function(t) {
                        return e.toLowerCase().startsWith(t)
                    }))
                }
        }
    }
]);
//# sourceMappingURL=31fa0deec26300a1d2908f8d30bc27b7f6c858c4feb6ae2e4dbd304de728c579.js.map