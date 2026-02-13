"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9336], {
        29336: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => ne
            });
            var l = a(42138),
                r = a(4942),
                n = a(54546),
                c = a(34601),
                o = a(30856),
                i = a(68412),
                s = a(87709),
                u = a(20702),
                m = a(55462),
                d = a(7581),
                w = a(41145),
                p = a(62228),
                f = a(47947),
                v = a(7371),
                b = a(91435),
                g = a(28963),
                E = a(67294),
                h = a(83505),
                y = a(27484),
                N = a.n(y),
                x = a(83807),
                k = a(96985),
                S = a(84090),
                I = a(67371),
                O = a(87462),
                P = a(45987),
                C = a(65394),
                j = a(85020),
                _ = a(18357),
                A = (a(37337), a(64358)),
                D = a(86646),
                U = ["images", "className", "style"];

            function R(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    t && (l = l.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, l)
                }
                return a
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? R(Object(a), !0).forEach((function(t) {
                        (0, r.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : R(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            const Z = function(e) {
                var t = e.images,
                    a = void 0 === t ? [] : t,
                    l = e.className,
                    r = e.style,
                    c = void 0 === r ? {} : r,
                    o = (0, P.Z)(e, U),
                    i = E.useRef(null),
                    s = E.useRef(null),
                    u = E.useState(0),
                    m = (0, n.Z)(u, 2),
                    d = m[0],
                    w = m[1],
                    p = E.useMemo((function() {
                        return a.map((function(e) {
                            var t = [64, 128, 256, 512, 1024, 2048].reduce((function(t, a) {
                                return t["".concat(a, "w")] = (0, A.S6)(T(T({}, e), {}, {
                                    width: a
                                })), t
                            }), {});
                            return T(T({}, e), {}, {
                                sizes: t,
                                fullSrcSet: Object.entries(t).map((function(e) {
                                    var t = (0, n.Z)(e, 2),
                                        a = t[0],
                                        l = t[1];
                                    return "".concat(l, " ").concat(a)
                                })).join(","),
                                thumbSrcSet: "".concat(t["128w"], " 2x, ").concat(t["256w"], " 4x")
                            })
                        }))
                    }), [a]),
                    f = function(e) {
                        var t, a;
                        null === (t = i.current) || void 0 === t || null === (t = t.querySelector("[data-gallery-index='".concat(e, "']"))) || void 0 === t || t.scrollIntoView({
                            block: "nearest"
                        }), null === (a = s.current) || void 0 === a || null === (a = a.querySelector("[data-gallery-index='".concat(e, "']"))) || void 0 === a || a.scrollIntoView({
                            block: "nearest"
                        })
                    },
                    v = function(e) {
                        e.preventDefault();
                        var t = e.currentTarget;
                        e.currentTarget && i.current && f(t.dataset.galleryIndex)
                    },
                    b = function(e, t) {
                        var a;
                        if (e) {
                            var l = parseInt(null === (a = t.target) || void 0 === a ? void 0 : a.dataset.galleryIndex, 10);
                            Number.isNaN(l) || w(l)
                        }
                    },
                    g = E.useMemo((function() {
                        return p.sort((function(e, t) {
                            return e.order - t.order
                        }))
                    }), [p]);
                return E.createElement("div", (0, O.Z)({
                    className: (0, h.cx)(l, "tw-group tw-flex tw-flex-col tw-w-full tw-relative tw-gap-2"),
                    style: T({}, c)
                }, o), E.createElement("div", {
                    className: "tw-flex tw-flex-row tw-overflow-x-auto tw-gap-2 tw-rounded-md tw-scroll-smooth tw-snap-x tw-snap-mandatory",
                    ref: i
                }, g.map((function(e, t) {
                    return E.createElement(_.df, {
                        as: "img",
                        threshold: .6,
                        root: i.current,
                        onChange: b,
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
                }, d > 0 && E.createElement("button", {
                    type: "button",
                    className: "tw-absolute tw-left-2 tw-bg-dark-grey-transparent-90 tw-p-3 tw-border-none tw-rounded-md tw-hidden group-hover:tw-flex tw-pointer-events-auto",
                    onClick: function() {
                        d < 1 || f(d - 1)
                    }
                }, E.createElement(D.Z, {
                    icon: j.A3,
                    size: "2x"
                })), d < a.length - 1 && E.createElement("button", {
                    type: "button",
                    className: "tw-absolute tw-right-2 tw-bg-dark-grey-transparent-90 tw-p-3 tw-border-none tw-rounded-md tw-hidden group-hover:tw-flex tw-pointer-events-auto",
                    onClick: function() {
                        d > a.length || f(d + 1)
                    }
                }, E.createElement(D.Z, {
                    icon: C._t,
                    size: "2x"
                })))), E.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-center tw-overflow-x-auto tw-gap-2 tw-rounded-md tw-scroll-smooth tw-snap-x tw-snap-mandatory",
                    ref: s
                }, g.map((function(e, t) {
                    return E.createElement("a", {
                        key: e.fileId || e.fileUrl,
                        "data-gallery-index": t,
                        onClick: v,
                        href: "#".concat(e.fileId),
                        className: "tw-bg-transparent tw-border-none tw-p-0 tw-m-0 tw-cursor-pointer"
                    }, E.createElement("img", {
                        className: (0, h.cx)("tw-w-16 tw-h-16 tw-object-cover tw-rounded-md tw-snap-center tw-border-solid tw-border-2", {
                            "tw-border-primary": d === t,
                            "tw-border-transparent": d !== t
                        }),
                        loading: "lazy",
                        src: e.sizes["64w"],
                        srcSet: e.thumbSrcSet,
                        alt: ""
                    }))
                }))))
            };
            var z = a(61244),
                $ = a(72998),
                X = a(64537),
                F = a(60006),
                q = a(95643),
                M = a(51806),
                J = a.n(M),
                V = a(58687),
                L = a(95896),
                H = a(72522),
                B = a(3620),
                G = a(14825),
                W = a(3629),
                Q = a(79655),
                Y = a(62437);
            const K = function(e) {
                var t, a, l, r, n = e.avatar,
                    c = e.products,
                    o = void 0 === c ? [] : c,
                    i = null == n ? void 0 : n.attribution,
                    s = null == n ? void 0 : n.authorId,
                    u = null == i || null === (t = i.creator) || void 0 === t ? void 0 : t.userId,
                    m = null == i || null === (a = i.publisher) || void 0 === a ? void 0 : a.userId,
                    d = !(null == i || !i.creator),
                    w = !(null == i || !i.publisher),
                    p = !i || !d && !w,
                    f = (0, Y.GR)(s, {
                        skip: !s || !p
                    }).data,
                    v = (0, Y.GR)(u, {
                        skip: !u
                    }).data,
                    b = (0, Y.GR)(m, {
                        skip: !m
                    }).data,
                    g = i && (d || w) ? {
                        creatorDisplayName: d ? u ? null == v ? void 0 : v.displayName : null == i || null === (l = i.creator) || void 0 === l ? void 0 : l.customName : null,
                        creatorUserId: d ? u : null,
                        publisherDisplayName: w ? m ? null == b ? void 0 : b.displayName : null == i || null === (r = i.publisher) || void 0 === r ? void 0 : r.customName : null,
                        publisherUserId: w ? m : null
                    } : {
                        creatorDisplayName: (null == f ? void 0 : f.displayName) || (null == n ? void 0 : n.authorName),
                        creatorUserId: s,
                        publisherDisplayName: null,
                        publisherUserId: null
                    };
                return E.createElement("span", {
                    className: "tw-text-[#737372]"
                }, (null == g ? void 0 : g.creatorDisplayName) && E.createElement(E.Fragment, null, "By", " ", g.creatorUserId ? E.createElement(Q.rU, {
                    to: "/home/user/".concat(g.creatorUserId),
                    target: "_blank",
                    rel: "noreferrer"
                }, g.creatorDisplayName) : g.creatorDisplayName), (null == g ? void 0 : g.publisherDisplayName) && E.createElement(E.Fragment, null, null != g && g.creatorDisplayName ? " | " : "", "Published by ", g.publisherUserId ? E.createElement(Q.rU, {
                    to: "/home/user/".concat(g.publisherUserId),
                    target: "_blank",
                    rel: "noreferrer"
                }, g.publisherDisplayName) : g.publisherDisplayName), o.length >= 1 && E.createElement(E.Fragment, null, " | ", E.createElement("small", null, E.createElement(k.$1, {
                    icon: W.hV
                }), " ", o.length, " included product", 1 === o.length ? "" : "s")))
            };
            const ee = function(e) {
                var t = e.avatar,
                    a = e.userState,
                    l = e.listing,
                    r = e.optimisedUserIconUrl,
                    n = e.optimisedProfilePicUrl;
                return !t || null != t && t.attribution ? null : E.createElement(k._q, {
                    className: "tw-flex-row tw-items-center tw-gap-2 tw-bg-cover tw-bg-center",
                    style: {
                        backgroundImage: "linear-gradient( rgba(37, 42, 48, 0.75), rgba(37, 42, 48, 0.75) ), url(".concat(n, ")")
                    }
                }, r && E.createElement("img", {
                    className: "tw-aspect-square tw-w-12 tw-flex-0 tw-rounded-full tw-border-solid tw-border-2 tw-border-gray-700",
                    src: r,
                    alt: ""
                }), E.createElement(k.JX, {
                    className: "tw-flex-auto"
                }, E.createElement("small", null, l ? "Seller" : "Author"), E.createElement(Q.rU, {
                    to: "/home/user/".concat((null == t ? void 0 : t.authorId) || (null == a ? void 0 : a.id)),
                    className: "hover:tw-text-white tw-text-teal-accent hover:tw-no-underline",
                    target: "_blank",
                    rel: "noreferrer"
                }, E.createElement("strong", null, (null == t ? void 0 : t.authorName) || (null == a ? void 0 : a.displayName)))))
            };

            function te(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    t && (l = l.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, l)
                }
                return a
            }

            function ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? te(Object(a), !0).forEach((function(t) {
                        (0, r.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : te(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var le = new RegExp("^".concat(B.i.AUTHOR)),
                re = ["admin_quest_fallback", "admin_quest_fallback_basic", "admin_quest_fallback_extended", "author_quest_fallback"];
            const ne = function(e) {
                var t, a, r, y = e.isPreview,
                    O = void 0 !== y && y,
                    P = e.avatar,
                    C = e.user,
                    j = e.listing,
                    _ = e.products,
                    D = void 0 === _ ? [] : _,
                    U = e.galleryImages,
                    R = void 0 === U ? [] : U,
                    T = e.isAvatarSold,
                    M = void 0 !== T && T,
                    W = e.isAvatarSoldFetching,
                    Q = void 0 !== W && W,
                    Y = e.isSelectAvatarLoading,
                    te = void 0 !== Y && Y,
                    ne = e.isSelectFallbackLoading,
                    ce = void 0 !== ne && ne,
                    oe = e.isUpdateAvatarFetching,
                    ie = void 0 !== oe && oe,
                    se = e.hasAvatarSellerPermission,
                    ue = void 0 !== se && se,
                    me = e.licenses,
                    de = void 0 === me ? [] : me,
                    we = e.onEdit,
                    pe = void 0 === we ? function() {} : we,
                    fe = e.onPurchase,
                    ve = void 0 === fe ? function() {} : fe,
                    be = e.onSelectAvatar,
                    ge = void 0 === be ? function() {} : be,
                    Ee = e.onSelectFallback,
                    he = void 0 === Ee ? function() {} : Ee,
                    ye = e.onSetAvatarReleaseStatus,
                    Ne = void 0 === ye ? function() {} : ye,
                    xe = e.onSellAvatar,
                    ke = void 0 === xe ? function() {} : xe,
                    Se = e.onTryOn,
                    Ie = void 0 === Se ? function() {} : Se,
                    Oe = (0, x.pc)(),
                    Pe = (0, x.Tu)().user,
                    Ce = E.useState(!1),
                    je = (0, n.Z)(Ce, 2),
                    _e = je[0],
                    Ae = je[1],
                    De = E.useState(!1),
                    Ue = (0, n.Z)(De, 2),
                    Re = Ue[0],
                    Te = Ue[1],
                    Ze = E.useState("description"),
                    ze = (0, n.Z)(Ze, 2),
                    $e = ze[0],
                    Xe = ze[1],
                    Fe = E.useState(!1),
                    qe = (0, n.Z)(Fe, 2),
                    Me = qe[0],
                    Je = qe[1],
                    Ve = O ? Pe : C,
                    Le = "private" === (null == P ? void 0 : P.releaseStatus),
                    He = !Le,
                    Be = O || (null == P ? void 0 : P.authorId) === Pe.id,
                    Ge = Be,
                    We = ue && Be && Le || !1,
                    Qe = E.useMemo((function() {
                        return null == de ? void 0 : de.some((function(e) {
                            return e.isCurrent && "avatar" === e.forType && e.forId === P.id && e.licenseHolderId === Pe.id
                        }))
                    }), [P, de, Pe]),
                    Ye = Be || Qe || He,
                    Ke = Oe || Be || Qe || He,
                    et = (Oe || Be) && !Q && !M && !(null != P && P.activeAssetReviewId) && !(null != P && P.productId) && "hidden" !== (null == P ? void 0 : P.releaseStatus),
                    tt = 1 === D.length && D[0].productType === L.Pm.AVATAR,
                    at = (0, A.S6)({
                        fileUrl: (null == Ve ? void 0 : Ve.profilePicOverride) || (null == Ve ? void 0 : Ve.currentAvatarImageUrl),
                        width: "512"
                    }),
                    lt = (0, A.S6)({
                        fileUrl: null == Ve ? void 0 : Ve.userIcon,
                        width: "256"
                    }),
                    rt = (0, A.S6)(ae(ae(ae({
                        width: "512"
                    }, !tt && j && {
                        fileId: null == j ? void 0 : j.imageId
                    }), tt && j && {
                        fileId: null === (t = D[0]) || void 0 === t ? void 0 : t.imageId
                    }), P && {
                        fileUrl: null == P ? void 0 : P.imageUrl
                    })),
                    nt = E.useMemo((function() {
                        return Object.keys(H.VT).reduce((function(e, t) {
                            var a = (0, V.F)(null == P ? void 0 : P.unityPackages, t);
                            return a && (e[t] = a), e
                        }), {})
                    }), [P]),
                    ct = E.useMemo((function() {
                        return Object.entries(H.VT).filter((function(e) {
                            var t = (0, n.Z)(e, 1)[0];
                            return !!nt[t]
                        }))
                    }), [nt]),
                    ot = E.useMemo((function() {
                        var e, t;
                        return null !== (e = null == P || null === (t = P.tags) || void 0 === t ? void 0 : t.some((function(e) {
                            return re.includes(e)
                        }))) && void 0 !== e && e
                    }), [null == P ? void 0 : P.tags]),
                    it = E.useMemo((function() {
                        return null == P ? void 0 : P.tags.filter((function(e) {
                            return e.startsWith(B.i.AUTHOR)
                        }))
                    }), [null == P ? void 0 : P.tags]),
                    st = E.useMemo((function() {
                        var e, t;
                        return [null == P || null === (e = P.styles) || void 0 === e ? void 0 : e.primary, null == P || null === (t = P.styles) || void 0 === t ? void 0 : t.secondary].concat((0, l.Z)((null == it ? void 0 : it.map((function(e) {
                            return e.replace(le, "")
                        }))) || [])).filter(Boolean)
                    }), [null == P || null === (a = P.styles) || void 0 === a ? void 0 : a.primary, null == P || null === (r = P.styles) || void 0 === r ? void 0 : r.secondary, it]),
                    ut = !(null == st || !st.length);
                if (!P && !j) return null;
                return E.createElement(E.Fragment, null, E.createElement(k.JX, {
                    className: "md:tw-flex-row tw-gap-3 tw-items-center md:tw-items-stretch"
                }, E.createElement(k.pw, {
                    width: 144,
                    className: "tw-rounded-md tw-shrink-0",
                    imgClassName: "tw-aspect-square",
                    imageId: rt || (null == j ? void 0 : j.file),
                    fallbackSrc: J(),
                    fitToCover: !0,
                    alt: "".concat(null == P ? void 0 : P.name, " Thumbnail") || 0
                }), E.createElement(k.JX, {
                    className: "tw-flex-grow tw-gap-1"
                }, j && function(e) {
                    switch (e) {
                        case L.ft.PERMANENT:
                            return E.createElement(F.DR, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize tw-leading-5"
                            }, E.createElement(k.$1, {
                                icon: G.default,
                                width: 14
                            }), " ", e);
                        case L.ft.DURATION:
                            return E.createElement(F.DR, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize"
                            }, E.createElement(k.$1, {
                                icon: g.DH
                            }), " ", e);
                        case L.ft.INSTANT:
                            return E.createElement(F.DR, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize"
                            }, E.createElement(k.$1, {
                                icon: b.BD
                            }), " ", e);
                        default:
                            return null
                    }
                }(j.listingType), E.createElement(k.X2, {
                    className: "tw-items-center tw-gap-2"
                }, E.createElement("h2", {
                    className: (0, h.cx)("tw-mb-0 tw-text-truncate tw-line-clamp-1 tw-break-all tw-leading-[1.25]", {
                        "tw-flex-grow": !Be
                    })
                }, (null == P ? void 0 : P.name) || (null == j ? void 0 : j.displayName)), Ge && !O && E.createElement(k.JX, {
                    className: "tw-justify-center md:tw-px-1 tw-flex-grow"
                }, E.createElement(k.X2, {
                    className: "tw-ml-2 tw-mt-2 md:tw-m-0"
                }, E.createElement(k.zx, {
                    className: "tw-rounded-full tw-h-[40px] tw-w-[40px]",
                    "aria-label": "Edit Avatar",
                    onClick: function() {
                        pe()
                    }
                }, E.createElement(k.$1, {
                    icon: v.Iw
                })))), P && E.createElement(k.X2, {
                    className: "tw-flex-0 tw-gap-2 tw-justify-self-end"
                }, E.createElement(X.Z, {
                    text: "".concat(P.name, " by ").concat(P.authorName, " #VRChat #MadeWithVRChat"),
                    url: "".concat(window.endpoint, "/home/avatar/").concat(P.id)
                }), !Be && E.createElement(E.Fragment, null, E.createElement(k.zx, {
                    neutral: !0,
                    onClick: function() {
                        Te(!0)
                    },
                    style: {
                        lineHeight: "1"
                    },
                    title: "Report Avatar"
                }, E.createElement(k.$1, {
                    icon: f.JH
                })), E.createElement(z.Z, {
                    cancelCallback: function() {
                        return Te(!1)
                    },
                    isOpen: Re,
                    type: "avatar",
                    contentId: P.id,
                    contentName: P.name,
                    marketplace: !!P.productId
                })))), E.createElement(k.X2, {
                    className: "tw-gap-2 tw-flex-wrap tw-flex-grow"
                }, E.createElement(k.JX, {
                    className: "tw-flex-[100_1_0%] tw-gap-2 tw-min-w-[285px] tw-flex-grow-[100]"
                }, E.createElement(K, {
                    avatar: P,
                    products: D
                }), ut && E.createElement("ul", {
                    className: "tw-flex tw-flex-row tw-flex-wrap tw-m-0 tw-p-0 tw-gap-1 tw-list-none"
                }, st.map((function(e) {
                    return E.createElement("li", {
                        key: e,
                        className: "tw-text-xs tw-px-2 tw-py-1 tw-bg-[#575757] tw-rounded-full"
                    }, e)
                })))), E.createElement(k.JX, {
                    className: "tw-flex-[1_1_0%] tw-min-w-[300px] tw-self-end"
                }, E.createElement(ee, {
                    avatar: P,
                    userState: Ve,
                    listing: j,
                    optimisedUserIconUrl: lt,
                    optimisedProfilePicUrl: at
                }))))), E.createElement("hr", {
                    className: "tw-my-5 tw-border-gray-300"
                }), E.createElement(k.X2, {
                    className: "tw-flex-wrap tw-gap-3"
                }, E.createElement(k.JX, {
                    className: "tw-flex-[100_1_0%] tw-min-w-[285px] tw-flex-grow-[100]"
                }, !!R.length && E.createElement("div", {
                    className: "tw-mb-3"
                }, E.createElement(Z, {
                    images: R
                })), E.createElement(k.oI, null, E.createElement("h4", {
                    className: "tw-mb-0 tw-font-bold"
                }, j ? "Listing" : "Avatar", " Info")), E.createElement(k.Ao, {
                    className: "tw-mb-3 tw-break-words"
                }, (null == P ? void 0 : P.acknowledgements) && E.createElement($.Z, {
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
                    selected: $e,
                    onChange: function(e) {
                        return Xe(e)
                    },
                    justify: "left"
                }), E.createElement("span", {
                    className: "tw-whitespace-pre-wrap"
                }, j ? j.description : P[$e]))), E.createElement(k.JX, {
                    className: "tw-flex-[1_1_0%] tw-min-w-[300px]"
                }, (O || !Be || !Oe) && j && E.createElement(k._q, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-1"
                }, "Price"), E.createElement("h2", {
                    className: "tw-mb-6"
                }, E.createElement(k.b5, null), " ", null == j ? void 0 : j.priceTokens), E.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, E.createElement(k.zx, {
                    type: "accent",
                    onClick: function() {
                        O || ve(j)
                    }
                }, "Purchase"), tt && E.createElement(k.zx, {
                    onClick: function() {
                        O || Ie(j)
                    },
                    neutral: !0
                }, "Try On In-World"), (null == D ? void 0 : D.length) >= 1 && E.createElement(E.Fragment, null, E.createElement(k.zx, {
                    className: "tw-mt-2",
                    transparent: !0,
                    onClick: function() {
                        return Je(!Me)
                    }
                }, "View ", D.length, " included products", " ", Me ? E.createElement(k.$1, {
                    icon: p.mT
                }) : E.createElement(k.$1, {
                    icon: w.pt
                })), Me && E.createElement(k.JX, {
                    className: "tw-gap-2"
                }, D.map((function(e) {
                    return E.createElement(q.Z, {
                        className: "tw-min-h-20",
                        key: e.id,
                        productData: e
                    })
                })))))), !O && (et || Ke || Ye && P) && E.createElement(k._q, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Manage Avatar"), E.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, Ke && E.createElement(k.zx, {
                    disabled: te,
                    loading: te,
                    onClick: ge
                }, E.createElement(k.$1, {
                    icon: d.mn
                }), " Change Into Avatar"), Ke && ot && E.createElement(k.zx, {
                    disabled: ce,
                    loading: ce,
                    onClick: he,
                    neutral: !0
                }, E.createElement(k.$1, {
                    icon: m.SD
                }), " Use as Fallback"), et && E.createElement(E.Fragment, null, E.createElement(S.Z, {
                    headerText: "Change avatar release status?",
                    confirmText: "Yes, make it ".concat("private" === P.releaseStatus ? "public" : "private"),
                    confirmCallback: function() {
                        if (!O) {
                            var e = "private" === P.releaseStatus ? "public" : "private";
                            Ne(e)
                        }
                    },
                    cancelText: "No, keep it ".concat(P.releaseStatus),
                    cancelCallback: function() {
                        Ae(!1)
                    },
                    isOpen: _e,
                    isLoading: ie
                }, E.createElement("p", null, "Are you sure you want to make ", (null == P ? void 0 : P.name) || (null == j ? void 0 : j.displayName), " ", E.createElement("strong", null, "private" === P.releaseStatus ? "public" : "private"), "?")), E.createElement(k.zx, {
                    disabled: ie,
                    loading: ie,
                    onClick: function() {
                        Ae(!0)
                    },
                    neutral: !0
                }, "Make Avatar ", "private" === P.releaseStatus ? "Public" : "Private")), Ye && P && E.createElement(I.Z, {
                    type: "avatar",
                    contentId: P.id,
                    authorId: P.authorId,
                    releaseStatus: P.releaseStatus,
                    neutral: !0
                }), We && E.createElement(k.zx, {
                    onClick: ke,
                    neutral: !0,
                    disabled: (null == P ? void 0 : P.productId) || (null == P ? void 0 : P.activeAssetReviewId)
                }, "Sell this Avatar"))), P && E.createElement(k._q, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Performance Rating"), ct.length ? E.createElement("table", {
                    className: "tw-w-full"
                }, ct.map((function(e, t) {
                    var a, l = (0, n.Z)(e, 2),
                        r = l[0],
                        c = l[1].label,
                        o = nt[r],
                        m = E.createElement("div", {
                            className: "tw-flex tw-items-center tw-gap-2"
                        }, E.createElement(k.$1, {
                            icon: u.RL
                        }), "No Security Checks");
                    if ("failed" === o.scanStatus) m = E.createElement("div", {
                        className: "tw-flex tw-items-center tw-gap-2"
                    }, E.createElement(k.$1, {
                        icon: s.faXmark
                    }), "Security Checks Failed");
                    else if ("unscanned" === o.scanStatus) m = E.createElement("div", {
                        className: "tw-flex tw-items-center tw-gap-2"
                    }, E.createElement(k.$1, {
                        icon: i.faCircleQuestion
                    }), "Security Checks Pending");
                    else if (o.scanStatus) {
                        var d, w;
                        m = E.createElement("div", {
                            className: "tw-flex tw-items-center tw-gap-2"
                        }, E.createElement("img", {
                            style: {
                                height: "1em"
                            },
                            src: null === (d = H.i1[o.performanceRating]) || void 0 === d ? void 0 : d.image,
                            alt: ""
                        }), null === (w = H.i1[o.performanceRating]) || void 0 === w ? void 0 : w.label)
                    }
                    return E.createElement("tr", {
                        key: r,
                        className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                    }, E.createElement("th", {
                        className: "tw-py-1 tw-font-normal tw-text-center"
                    }, E.createElement(k.$1, {
                        icon: null === (a = H.VT[r]) || void 0 === a ? void 0 : a.icon
                    })), E.createElement("th", {
                        className: "tw-py-1 tw-font-normal"
                    }, c), E.createElement("td", {
                        className: "tw-py-1"
                    }, m))
                }))) : E.createElement("em", null, "No performance data found"), E.createElement("small", {
                    className: "tw-mt-3"
                }, E.createElement("a", {
                    href: "https://creators.vrchat.com/avatars/avatar-performance-ranking-system",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn about Performance Rating"))), P && E.createElement(k._q, {
                    className: "tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Details"), E.createElement("table", {
                    className: "tw-w-full"
                }, E.createElement("tr", {
                    className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                }, E.createElement("th", {
                    className: "tw-py-1 tw-font-normal tw-text-center"
                }, E.createElement(k.$1, {
                    icon: o.CP
                })), E.createElement("th", {
                    className: "tw-py-1 tw-font-normal"
                }, "Created"), E.createElement("td", null, N()(P.created_at).format("L"))), E.createElement("tr", {
                    className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                }, E.createElement("th", {
                    className: "tw-py-1 tw-font-normal tw-text-center"
                }, E.createElement(k.$1, {
                    icon: c.r6
                })), E.createElement("th", {
                    className: "tw-py-1 tw-font-normal"
                }, "Updated"), E.createElement("td", null, N()(P.updated_at).format("L"))))))))
            }
        }
    }
]);
//# sourceMappingURL=467a0c62d0c322af5dd53be587ab5e95130cb089f132e6dbb70dfc882a0033bf.js.map