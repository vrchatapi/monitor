"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9336], {
        29336: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => le
            });
            var r = a(42138),
                n = a(4942),
                l = a(54546),
                o = a(34601),
                c = a(30856),
                i = a(68412),
                s = a(87709),
                u = a(20702),
                m = a(55462),
                d = a(7581),
                w = a(41145),
                p = a(62228),
                f = a(47947),
                v = a(7371),
                g = a(91435),
                b = a(28963),
                E = a(67294),
                h = a(83505),
                y = a(27484),
                N = a.n(y),
                x = a(69116),
                k = a(80988),
                S = a(84090),
                O = a(67371),
                C = a(87462),
                I = a(45987),
                j = a(65394),
                P = a(85020),
                R = a(18357),
                _ = (a(37337), a(64358)),
                Z = a(86646),
                D = ["images", "className", "style"];

            function A(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(a), !0).forEach((function(t) {
                        (0, n.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : A(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            const U = function(e) {
                var t = e.images,
                    a = void 0 === t ? [] : t,
                    r = e.className,
                    n = e.style,
                    o = void 0 === n ? {} : n,
                    c = (0, I.Z)(e, D),
                    i = E.useRef(null),
                    s = E.useRef(null),
                    u = E.useState(0),
                    m = (0, l.Z)(u, 2),
                    d = m[0],
                    w = m[1],
                    p = E.useMemo((function() {
                        return a.map((function(e) {
                            var t = [64, 128, 256, 512, 1024, 2048].reduce((function(t, a) {
                                return t["".concat(a, "w")] = (0, _.S6)(T(T({}, e), {}, {
                                    width: a
                                })), t
                            }), {});
                            return T(T({}, e), {}, {
                                sizes: t,
                                fullSrcSet: Object.entries(t).map((function(e) {
                                    var t = (0, l.Z)(e, 2),
                                        a = t[0],
                                        r = t[1];
                                    return "".concat(r, " ").concat(a)
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
                    g = function(e, t) {
                        var a;
                        if (e) {
                            var r = parseInt(null === (a = t.target) || void 0 === a ? void 0 : a.dataset.galleryIndex, 10);
                            Number.isNaN(r) || w(r)
                        }
                    },
                    b = E.useMemo((function() {
                        return p.sort((function(e, t) {
                            return e.order - t.order
                        }))
                    }), [p]);
                return E.createElement("div", (0, C.Z)({
                    className: (0, h.cx)(r, "tw-group tw-flex tw-flex-col tw-w-full tw-relative tw-gap-2"),
                    style: T({}, o)
                }, c), E.createElement("div", {
                    className: "tw-flex tw-flex-row tw-overflow-x-auto tw-gap-2 tw-rounded-md tw-scroll-smooth tw-snap-x tw-snap-mandatory",
                    ref: i
                }, b.map((function(e, t) {
                    return E.createElement(R.df, {
                        as: "img",
                        threshold: .6,
                        root: i.current,
                        onChange: g,
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
                }, E.createElement(Z.Z, {
                    icon: P.A3,
                    size: "2x"
                })), d < a.length - 1 && E.createElement("button", {
                    type: "button",
                    className: "tw-absolute tw-right-2 tw-bg-dark-grey-transparent-90 tw-p-3 tw-border-none tw-rounded-md tw-hidden group-hover:tw-flex tw-pointer-events-auto",
                    onClick: function() {
                        d > a.length || f(d + 1)
                    }
                }, E.createElement(Z.Z, {
                    icon: j._t,
                    size: "2x"
                })))), E.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-center tw-overflow-x-auto tw-gap-2 tw-rounded-md tw-scroll-smooth tw-snap-x tw-snap-mandatory",
                    ref: s
                }, b.map((function(e, t) {
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
            var z = a(4751),
                q = a(72998),
                F = a(64537),
                X = a(60006),
                $ = a(95643),
                M = a(51806),
                L = a.n(M),
                V = a(58687),
                J = a(95896),
                W = a(72522),
                H = a(3620),
                B = a(14825),
                G = a(3629),
                Y = a(79655),
                Q = a(62437);
            const K = function(e) {
                var t, a, r, n, l = e.avatar,
                    o = e.products,
                    c = void 0 === o ? [] : o,
                    i = null == l ? void 0 : l.attribution,
                    s = null == l ? void 0 : l.authorId,
                    u = null == i || null === (t = i.creator) || void 0 === t ? void 0 : t.userId,
                    m = null == i || null === (a = i.publisher) || void 0 === a ? void 0 : a.userId,
                    d = !(null == i || !i.creator),
                    w = !(null == i || !i.publisher),
                    p = !i || !d && !w,
                    f = (0, Q.GR)(s, {
                        skip: !s || !p
                    }).data,
                    v = (0, Q.GR)(u, {
                        skip: !u
                    }).data,
                    g = (0, Q.GR)(m, {
                        skip: !m
                    }).data,
                    b = i && (d || w) ? {
                        creatorDisplayName: d ? u ? null == v ? void 0 : v.displayName : null == i || null === (r = i.creator) || void 0 === r ? void 0 : r.customName : null,
                        creatorUserId: d ? u : null,
                        publisherDisplayName: w ? m ? null == g ? void 0 : g.displayName : null == i || null === (n = i.publisher) || void 0 === n ? void 0 : n.customName : null,
                        publisherUserId: w ? m : null
                    } : {
                        creatorDisplayName: (null == f ? void 0 : f.displayName) || (null == l ? void 0 : l.authorName),
                        creatorUserId: s,
                        publisherDisplayName: null,
                        publisherUserId: null
                    };
                return E.createElement("span", {
                    className: "tw-text-[#737372]"
                }, (null == b ? void 0 : b.creatorDisplayName) && E.createElement(E.Fragment, null, "By", " ", b.creatorUserId ? E.createElement(Y.rU, {
                    to: "/home/user/".concat(b.creatorUserId),
                    target: "_blank",
                    rel: "noreferrer"
                }, b.creatorDisplayName) : b.creatorDisplayName), (null == b ? void 0 : b.publisherDisplayName) && E.createElement(E.Fragment, null, null != b && b.creatorDisplayName ? " | " : "", "Published by ", b.publisherUserId ? E.createElement(Y.rU, {
                    to: "/home/user/".concat(b.publisherUserId),
                    target: "_blank",
                    rel: "noreferrer"
                }, b.publisherDisplayName) : b.publisherDisplayName), c.length >= 1 && E.createElement(E.Fragment, null, " | ", E.createElement("small", null, E.createElement(k.$1, {
                    icon: G.hV
                }), " ", c.length, " included product", 1 === c.length ? "" : "s")))
            };
            const ee = function(e) {
                var t = e.avatar,
                    a = e.userState,
                    r = e.listing,
                    n = e.optimisedUserIconUrl,
                    l = e.optimisedProfilePicUrl;
                return !t || null != t && t.attribution ? null : E.createElement(k._q, {
                    className: "tw-flex-row tw-items-center tw-gap-2 tw-bg-cover tw-bg-center",
                    style: {
                        backgroundImage: "linear-gradient( rgba(37, 42, 48, 0.75), rgba(37, 42, 48, 0.75) ), url(".concat(l, ")")
                    }
                }, n && E.createElement("img", {
                    className: "tw-aspect-square tw-w-12 tw-flex-0 tw-rounded-full tw-border-solid tw-border-2 tw-border-gray-700",
                    src: n,
                    alt: ""
                }), E.createElement(k.JX, {
                    className: "tw-flex-auto"
                }, E.createElement("small", null, r ? "Seller" : "Author"), E.createElement(Y.rU, {
                    to: "/home/user/".concat((null == t ? void 0 : t.authorId) || (null == a ? void 0 : a.id)),
                    className: "hover:tw-text-white tw-text-teal-accent hover:tw-no-underline",
                    target: "_blank",
                    rel: "noreferrer"
                }, E.createElement("strong", null, (null == t ? void 0 : t.authorName) || (null == a ? void 0 : a.displayName)))))
            };

            function te(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? te(Object(a), !0).forEach((function(t) {
                        (0, n.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : te(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var re = new RegExp("^".concat(H.i.AUTHOR)),
                ne = ["admin_quest_fallback", "admin_quest_fallback_basic", "admin_quest_fallback_extended", "author_quest_fallback"];
            const le = function(e) {
                var t, a, n, y = e.isPreview,
                    C = void 0 !== y && y,
                    I = e.avatar,
                    j = e.user,
                    P = e.listing,
                    R = e.products,
                    Z = void 0 === R ? [] : R,
                    D = e.galleryImages,
                    A = void 0 === D ? [] : D,
                    T = e.isAvatarSold,
                    M = void 0 !== T && T,
                    G = e.isAvatarSoldFetching,
                    Y = void 0 !== G && G,
                    Q = e.isSelectAvatarLoading,
                    te = void 0 !== Q && Q,
                    le = e.isSelectFallbackLoading,
                    oe = void 0 !== le && le,
                    ce = e.isUpdateAvatarFetching,
                    ie = void 0 !== ce && ce,
                    se = e.hasAvatarSellerPermission,
                    ue = void 0 !== se && se,
                    me = e.licenses,
                    de = void 0 === me ? [] : me,
                    we = e.onEdit,
                    pe = void 0 === we ? function() {} : we,
                    fe = e.onPurchase,
                    ve = void 0 === fe ? function() {} : fe,
                    ge = e.onSelectAvatar,
                    be = void 0 === ge ? function() {} : ge,
                    Ee = e.onSelectFallback,
                    he = void 0 === Ee ? function() {} : Ee,
                    ye = e.onSetAvatarReleaseStatus,
                    Ne = void 0 === ye ? function() {} : ye,
                    xe = e.onSellAvatar,
                    ke = void 0 === xe ? function() {} : xe,
                    Se = e.onTryOn,
                    Oe = void 0 === Se ? function() {} : Se,
                    Ce = (0, x.pc)(),
                    Ie = (0, x.Tu)().user,
                    je = E.useState(!1),
                    Pe = (0, l.Z)(je, 2),
                    Re = Pe[0],
                    _e = Pe[1],
                    Ze = E.useState(!1),
                    De = (0, l.Z)(Ze, 2),
                    Ae = De[0],
                    Te = De[1],
                    Ue = E.useState("description"),
                    ze = (0, l.Z)(Ue, 2),
                    qe = ze[0],
                    Fe = ze[1],
                    Xe = E.useState(!1),
                    $e = (0, l.Z)(Xe, 2),
                    Me = $e[0],
                    Le = $e[1],
                    Ve = C ? Ie : j,
                    Je = "private" === (null == I ? void 0 : I.releaseStatus),
                    We = !Je,
                    He = C || (null == I ? void 0 : I.authorId) === Ie.id,
                    Be = He,
                    Ge = ue && He && Je || !1,
                    Ye = E.useMemo((function() {
                        return null == de ? void 0 : de.some((function(e) {
                            return e.isCurrent && "avatar" === e.forType && e.forId === I.id && e.licenseHolderId === Ie.id
                        }))
                    }), [I, de, Ie]),
                    Qe = He || Ye || We,
                    Ke = Ce || He || Ye || We,
                    et = (Ce || He) && !Y && !M && !(null != I && I.activeAssetReviewId) && !(null != I && I.productId) && "hidden" !== (null == I ? void 0 : I.releaseStatus),
                    tt = 1 === Z.length && Z[0].productType === J.Pm.AVATAR,
                    at = (0, _.S6)({
                        fileUrl: (null == Ve ? void 0 : Ve.profilePicOverride) || (null == Ve ? void 0 : Ve.currentAvatarImageUrl),
                        width: "512"
                    }),
                    rt = (0, _.S6)({
                        fileUrl: null == Ve ? void 0 : Ve.userIcon,
                        width: "256"
                    }),
                    nt = (0, _.S6)(ae(ae(ae({
                        width: "512"
                    }, !tt && P && {
                        fileId: null == P ? void 0 : P.imageId
                    }), tt && P && {
                        fileId: null === (t = Z[0]) || void 0 === t ? void 0 : t.imageId
                    }), I && {
                        fileUrl: null == I ? void 0 : I.imageUrl
                    })),
                    lt = E.useMemo((function() {
                        return Object.keys(W.VT).reduce((function(e, t) {
                            var a = (0, V.F)(null == I ? void 0 : I.unityPackages, t);
                            return a && (e[t] = a), e
                        }), {})
                    }), [I]),
                    ot = E.useMemo((function() {
                        return Object.entries(W.VT).filter((function(e) {
                            var t = (0, l.Z)(e, 1)[0];
                            return !!lt[t]
                        }))
                    }), [lt]),
                    ct = E.useMemo((function() {
                        var e, t;
                        return null !== (e = null == I || null === (t = I.tags) || void 0 === t ? void 0 : t.some((function(e) {
                            return ne.includes(e)
                        }))) && void 0 !== e && e
                    }), [null == I ? void 0 : I.tags]),
                    it = E.useMemo((function() {
                        return null == I ? void 0 : I.tags.filter((function(e) {
                            return e.startsWith(H.i.AUTHOR)
                        }))
                    }), [null == I ? void 0 : I.tags]),
                    st = E.useMemo((function() {
                        var e, t;
                        return [null == I || null === (e = I.styles) || void 0 === e ? void 0 : e.primary, null == I || null === (t = I.styles) || void 0 === t ? void 0 : t.secondary].concat((0, r.Z)((null == it ? void 0 : it.map((function(e) {
                            return e.replace(re, "")
                        }))) || [])).filter(Boolean)
                    }), [null == I || null === (a = I.styles) || void 0 === a ? void 0 : a.primary, null == I || null === (n = I.styles) || void 0 === n ? void 0 : n.secondary, it]),
                    ut = !(null == st || !st.length);
                if (!I && !P) return null;
                return E.createElement(E.Fragment, null, E.createElement(k.JX, {
                    className: "md:tw-flex-row tw-gap-3 tw-items-center md:tw-items-stretch"
                }, E.createElement(k.pw, {
                    width: 144,
                    className: "tw-rounded-md tw-shrink-0",
                    imgClassName: "tw-aspect-square",
                    imageId: nt || (null == P ? void 0 : P.file),
                    fallbackSrc: L(),
                    fitToCover: !0,
                    alt: "".concat(null == I ? void 0 : I.name, " Thumbnail") || 0
                }), E.createElement(k.JX, {
                    className: "tw-flex-grow tw-gap-1"
                }, P && function(e) {
                    switch (e) {
                        case J.ft.PERMANENT:
                            return E.createElement(X.DR, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize tw-leading-5"
                            }, E.createElement(k.$1, {
                                icon: B.default,
                                width: 14
                            }), " ", e);
                        case J.ft.DURATION:
                            return E.createElement(X.DR, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize"
                            }, E.createElement(k.$1, {
                                icon: b.DH
                            }), " ", e);
                        case J.ft.INSTANT:
                            return E.createElement(X.DR, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize"
                            }, E.createElement(k.$1, {
                                icon: g.BD
                            }), " ", e);
                        default:
                            return null
                    }
                }(P.listingType), E.createElement(k.X2, {
                    className: "tw-items-center tw-gap-2"
                }, E.createElement("h2", {
                    className: (0, h.cx)("tw-mb-0 tw-text-truncate tw-line-clamp-1 tw-break-all tw-leading-[1.25]", {
                        "tw-flex-grow": !He
                    })
                }, (null == I ? void 0 : I.name) || (null == P ? void 0 : P.displayName)), Be && !C && E.createElement(k.JX, {
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
                })))), I && E.createElement(k.X2, {
                    className: "tw-flex-0 tw-gap-2 tw-justify-self-end"
                }, E.createElement(F.Z, {
                    text: "".concat(I.name, " by ").concat(I.authorName, " #VRChat #MadeWithVRChat"),
                    url: "".concat(window.endpoint, "/home/avatar/").concat(I.id)
                }), !He && E.createElement(E.Fragment, null, E.createElement(k.zx, {
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
                    isOpen: Ae,
                    type: "avatar",
                    contentId: I.id,
                    contentName: I.name,
                    marketplace: !!I.productId
                })))), E.createElement(k.X2, {
                    className: "tw-gap-2 tw-flex-wrap tw-flex-grow"
                }, E.createElement(k.JX, {
                    className: "tw-flex-[100_1_0%] tw-gap-2 tw-min-w-[285px] tw-flex-grow-[100]"
                }, E.createElement(K, {
                    avatar: I,
                    products: Z
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
                    avatar: I,
                    userState: Ve,
                    listing: P,
                    optimisedUserIconUrl: rt,
                    optimisedProfilePicUrl: at
                }))))), E.createElement("hr", {
                    className: "tw-my-5 tw-border-gray-300"
                }), E.createElement(k.X2, {
                    className: "tw-flex-wrap tw-gap-3"
                }, E.createElement(k.JX, {
                    className: "tw-flex-[100_1_0%] tw-min-w-[285px] tw-flex-grow-[100]"
                }, !!A.length && E.createElement("div", {
                    className: "tw-mb-3"
                }, E.createElement(U, {
                    images: A
                })), E.createElement(k.oI, null, E.createElement("h4", {
                    className: "tw-mb-0 tw-font-bold"
                }, P ? "Listing" : "Avatar", " Info")), E.createElement(k.Ao, {
                    className: "tw-mb-3 tw-break-words"
                }, (null == I ? void 0 : I.acknowledgements) && E.createElement(q.Z, {
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
                    selected: qe,
                    onChange: function(e) {
                        return Fe(e)
                    },
                    justify: "left"
                }), E.createElement("span", {
                    className: "tw-whitespace-pre-wrap"
                }, P ? P.description : I[qe]))), E.createElement(k.JX, {
                    className: "tw-flex-[1_1_0%] tw-min-w-[300px]"
                }, (C || !He || !Ce) && P && E.createElement(k._q, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-1"
                }, "Price"), E.createElement("h2", {
                    className: "tw-mb-6"
                }, E.createElement(k.b5, null), " ", null == P ? void 0 : P.priceTokens), E.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, E.createElement(k.zx, {
                    type: "accent",
                    onClick: function() {
                        C || ve(P)
                    }
                }, "Purchase"), tt && E.createElement(k.zx, {
                    onClick: function() {
                        C || Oe(P)
                    },
                    neutral: !0
                }, "Try On In-World"), (null == Z ? void 0 : Z.length) >= 1 && E.createElement(E.Fragment, null, E.createElement(k.zx, {
                    className: "tw-mt-2",
                    transparent: !0,
                    onClick: function() {
                        return Le(!Me)
                    }
                }, "View ", Z.length, " included products", " ", Me ? E.createElement(k.$1, {
                    icon: p.mT
                }) : E.createElement(k.$1, {
                    icon: w.pt
                })), Me && E.createElement(k.JX, {
                    className: "tw-gap-2"
                }, Z.map((function(e) {
                    return E.createElement($.Z, {
                        className: "tw-min-h-20",
                        key: e.id,
                        productData: e
                    })
                })))))), !C && (et || Ke || Qe && I) && E.createElement(k._q, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Manage Avatar"), E.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, Ke && E.createElement(k.zx, {
                    disabled: te,
                    loading: te,
                    onClick: be
                }, E.createElement(k.$1, {
                    icon: d.mn
                }), " Change Into Avatar"), Ke && ct && E.createElement(k.zx, {
                    disabled: oe,
                    loading: oe,
                    onClick: he,
                    neutral: !0
                }, E.createElement(k.$1, {
                    icon: m.SD
                }), " Use as Fallback"), et && E.createElement(E.Fragment, null, E.createElement(S.Z, {
                    headerText: "Change avatar release status?",
                    confirmText: "Yes, make it ".concat("private" === I.releaseStatus ? "public" : "private"),
                    confirmCallback: function() {
                        if (!C) {
                            var e = "private" === I.releaseStatus ? "public" : "private";
                            Ne(e)
                        }
                    },
                    cancelText: "No, keep it ".concat(I.releaseStatus),
                    cancelCallback: function() {
                        _e(!1)
                    },
                    isOpen: Re,
                    isLoading: ie
                }, E.createElement("p", null, "Are you sure you want to make ", (null == I ? void 0 : I.name) || (null == P ? void 0 : P.displayName), " ", E.createElement("strong", null, "private" === I.releaseStatus ? "public" : "private"), "?")), E.createElement(k.zx, {
                    disabled: ie,
                    loading: ie,
                    onClick: function() {
                        _e(!0)
                    },
                    neutral: !0
                }, "Make Avatar ", "private" === I.releaseStatus ? "Public" : "Private")), Qe && I && E.createElement(O.Z, {
                    type: "avatar",
                    contentId: I.id,
                    authorId: I.authorId,
                    releaseStatus: I.releaseStatus,
                    neutral: !0
                }), Ge && E.createElement(k.zx, {
                    onClick: ke,
                    neutral: !0,
                    disabled: (null == I ? void 0 : I.productId) || (null == I ? void 0 : I.activeAssetReviewId)
                }, "Sell this Avatar"))), I && E.createElement(k._q, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Performance Rating"), ot.length ? E.createElement("table", {
                    className: "tw-w-full"
                }, ot.map((function(e, t) {
                    var a, r = (0, l.Z)(e, 2),
                        n = r[0],
                        o = r[1].label,
                        c = lt[n],
                        m = E.createElement("div", {
                            className: "tw-flex tw-items-center tw-gap-2"
                        }, E.createElement(k.$1, {
                            icon: u.RL
                        }), "No Security Checks");
                    if ("failed" === c.scanStatus) m = E.createElement("div", {
                        className: "tw-flex tw-items-center tw-gap-2"
                    }, E.createElement(k.$1, {
                        icon: s.faXmark
                    }), "Security Checks Failed");
                    else if ("unscanned" === c.scanStatus) m = E.createElement("div", {
                        className: "tw-flex tw-items-center tw-gap-2"
                    }, E.createElement(k.$1, {
                        icon: i.faCircleQuestion
                    }), "Security Checks Pending");
                    else if (c.scanStatus) {
                        var d, w;
                        m = E.createElement("div", {
                            className: "tw-flex tw-items-center tw-gap-2"
                        }, E.createElement("img", {
                            style: {
                                height: "1em"
                            },
                            src: null === (d = W.i1[c.performanceRating]) || void 0 === d ? void 0 : d.image,
                            alt: ""
                        }), null === (w = W.i1[c.performanceRating]) || void 0 === w ? void 0 : w.label)
                    }
                    return E.createElement("tr", {
                        key: n,
                        className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                    }, E.createElement("th", {
                        className: "tw-py-1 tw-font-normal tw-text-center"
                    }, E.createElement(k.$1, {
                        icon: null === (a = W.VT[n]) || void 0 === a ? void 0 : a.icon
                    })), E.createElement("th", {
                        className: "tw-py-1 tw-font-normal"
                    }, o), E.createElement("td", {
                        className: "tw-py-1"
                    }, m))
                }))) : E.createElement("em", null, "No performance data found"), E.createElement("small", {
                    className: "tw-mt-3"
                }, E.createElement("a", {
                    href: "https://creators.vrchat.com/avatars/avatar-performance-ranking-system",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn about Performance Rating"))), I && E.createElement(k._q, {
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
                    icon: c.CP
                })), E.createElement("th", {
                    className: "tw-py-1 tw-font-normal"
                }, "Created"), E.createElement("td", null, N()(I.created_at).format("L"))), E.createElement("tr", {
                    className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                }, E.createElement("th", {
                    className: "tw-py-1 tw-font-normal tw-text-center"
                }, E.createElement(k.$1, {
                    icon: o.r6
                })), E.createElement("th", {
                    className: "tw-py-1 tw-font-normal"
                }, "Updated"), E.createElement("td", null, N()(I.updated_at).format("L"))))))))
            }
        },
        4751: (e, t, a) => {
            a.d(t, {
                Z: () => O
            });
            var r = a(42138),
                n = a(4942),
                l = a(15861),
                o = a(54546),
                c = a(57310),
                i = a(21707),
                s = a(64687),
                u = a.n(s),
                m = a(67294),
                d = a(79655),
                w = a(17219),
                p = a(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getReports: e.query({
                                query: function(e) {
                                    return {
                                        url: "/moderationReports",
                                        params: {
                                            contentId: e.contentId
                                        }
                                    }
                                },
                                providesTags: function(e, t, a) {
                                    return [{
                                        type: "Reports",
                                        id: a.contentId
                                    }]
                                }
                            }),
                            createReport: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "/moderationReports",
                                        method: "POST",
                                        body: {
                                            type: e.type,
                                            category: e.category,
                                            reason: e.reason,
                                            contentId: e.contentId,
                                            description: e.description,
                                            details: e.details
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, a) {
                                    return [{
                                        type: "Reports",
                                        id: a.contentId
                                    }]
                                }
                            })
                        }
                    }
                }),
                f = p.useGetReportsQuery,
                v = p.useCreateReportMutation,
                g = a(69116),
                b = a(80988),
                E = a(89421),
                h = a(11121),
                y = a(43862),
                N = a(76225),
                x = a(60006);

            function k(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(a), !0).forEach((function(t) {
                        (0, n.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : k(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            const O = function(e) {
                var t, a, n = e.isOpen,
                    s = e.cancelCallback,
                    p = e.type,
                    k = e.contentId,
                    O = e.contentName,
                    C = e.marketplace,
                    I = e.hasStore,
                    j = m.useState(""),
                    P = (0, o.Z)(j, 2),
                    R = P[0],
                    _ = P[1],
                    Z = m.useState(""),
                    D = (0, o.Z)(Z, 2),
                    A = D[0],
                    T = D[1],
                    U = m.useState(""),
                    z = (0, o.Z)(U, 2),
                    q = z[0],
                    F = z[1],
                    X = m.useState([]),
                    $ = (0, o.Z)(X, 2),
                    M = $[0],
                    L = $[1],
                    V = m.useState(!1),
                    J = (0, o.Z)(V, 2),
                    W = J[0],
                    H = J[1],
                    B = (0, g.Tu)().user,
                    G = (0, w.y)({}, {
                        skip: !n
                    }),
                    Y = G.data,
                    Q = G.isLoading,
                    K = f({
                        contentId: k
                    }, {
                        skip: !n
                    }),
                    ee = K.data,
                    te = K.isLoading,
                    ae = v(),
                    re = (0, o.Z)(ae, 2),
                    ne = re[0],
                    le = re[1],
                    oe = le.isFetching,
                    ce = le.isError,
                    ie = le.isSuccess,
                    se = le.reset;
                m.useEffect((function() {
                    R && T("")
                }), [R]), m.useEffect((function() {
                    "warnings" === A && F("")
                }), [A]), m.useEffect((function() {
                    n || setTimeout((function() {
                        se(), _(""), T(""), F(""), L([])
                    }), 500)
                }), [n]);
                var ue = function() {
                        var e = (0, l.Z)(u().mark((function e() {
                            var t, a;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ne(S({
                                            type: p,
                                            category: R,
                                            reason: A,
                                            contentId: k,
                                            description: q
                                        }, M.length ? {
                                            details: {
                                                suggestedWarnings: M
                                            }
                                        } : {}));
                                    case 2:
                                        t = e.sent, (a = t.data) && H(a.supportRequired);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    me = Q || te || oe,
                    de = m.useMemo((function() {
                        var e, t;
                        return Object.keys(null !== (e = null == Y || null === (t = Y.reportOptions) || void 0 === t ? void 0 : t[p]) && void 0 !== e ? e : {}).sort((function(e, t) {
                            var a, r;
                            return (null === (a = Y.reportCategories) || void 0 === a || null === (a = a[e]) || void 0 === a ? void 0 : a.order) - (null === (r = Y.reportCategories) || void 0 === r || null === (r = r[t]) || void 0 === r ? void 0 : r.order)
                        })).filter((function(e) {
                            return !e.endsWith("store") || I
                        })).map((function(e) {
                            var t, a, r, n, l, o;
                            return {
                                value: e,
                                label: null !== (t = null === (a = Y.reportCategories) || void 0 === a || null === (a = a[e]) || void 0 === a ? void 0 : a.title) && void 0 !== t ? t : null === (r = Y.reportCategories) || void 0 === r || null === (r = r[e]) || void 0 === r ? void 0 : r.text,
                                description: null !== (n = null === (l = Y.reportCategories) || void 0 === l || null === (l = l[e]) || void 0 === l ? void 0 : l.description) && void 0 !== n ? n : null === (o = Y.reportCategories) || void 0 === o || null === (o = o[e]) || void 0 === o ? void 0 : o.tooltip
                            }
                        }))
                    }), [p, Y, I]);
                return m.useEffect((function() {
                    1 !== de.length || R || _(de[0].value)
                }), [de, R]), m.createElement(x.oA, {
                    role: "dialog",
                    type: "default",
                    isOpen: n,
                    toggle: s
                }, ie ? m.createElement(m.Fragment, null, W ? m.createElement(m.Fragment, null, m.createElement(x.eb, {
                    tag: "h4",
                    close: m.createElement(E.Z, {
                        onClick: s,
                        disabled: me
                    }),
                    toggle: s
                }, "Contact Support"), m.createElement(x.vc, {
                    className: "tw-flex tw-flex-col tw-justify-center tw-text-center tw-gap-1 tw-px-10"
                }, m.createElement(b.$1, {
                    icon: i.e7,
                    size: "4x",
                    className: "tw-mt-5 tw-mb-5"
                }), m.createElement("h4", {
                    className: "tw-mb-4"
                }, "Support Team Required"), m.createElement("strong", null, "It looks like you are trying to report an issue that requires our support team."), m.createElement("p", null, "Please provide us with information about your issue using our web form so we can provide you with assistance.")), m.createElement(x.tc, {
                    className: "tw-justify-center"
                }, m.createElement(x.Qj, {
                    to: "https://help.vrchat.com/hc/en-us/requests/new?ticket_form_id=360006750513&tf_360057451993=".concat(null == B ? void 0 : B.id, "&tf_subject=").concat(A, "%20").concat(R, "%20By%20").concat(p, "%20").concat(O, "&tf_description=").concat(q),
                    target: "_blank"
                }, "Open Support Form"))) : m.createElement(m.Fragment, null, m.createElement(x.eb, {
                    tag: "h4",
                    close: m.createElement(E.Z, {
                        onClick: s,
                        disabled: me
                    }),
                    toggle: s
                }, "Report Submitted"), m.createElement(x.vc, {
                    className: "tw-flex tw-flex-col tw-justify-center tw-text-center tw-gap-1 tw-px-10"
                }, m.createElement(b.$1, {
                    icon: c.XC,
                    size: "4x",
                    className: "tw-mt-5 tw-mb-5"
                }), m.createElement("h4", {
                    className: "tw-mb-4"
                }, "Your report is in - we've got it!"), m.createElement("strong", null, "Thanks for helping us keep things safe!"), m.createElement("p", null, "Your report has been received and will be reviewed by our moderation team.")), m.createElement(x.tc, {
                    className: "tw-justify-center"
                }, m.createElement(b.zx, {
                    color: "primary",
                    onClick: s,
                    className: "tw-px-20 tw-py-1"
                }, "Done")))) : m.createElement(m.Fragment, null, m.createElement(x.eb, {
                    className: "tw-capitalize",
                    tag: "h4",
                    close: m.createElement(E.Z, {
                        onClick: s,
                        disabled: me
                    }),
                    toggle: s
                }, "Report ", p), m.createElement(x.vc, null, Q ? m.createElement("div", {
                    className: "tw-text-center"
                }, m.createElement(y.Z, {
                    size: "3x"
                })) : m.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, ce && m.createElement(b.qX, {
                    type: "error",
                    title: "Error"
                }, "An error occurred while trying to submit the report."), m.createElement("p", null, "What are you reporting?"), m.createElement(N.Z, {
                    value: R,
                    onChange: function(e) {
                        return _(e.target.value)
                    },
                    options: de
                }), m.createElement("label", {
                    className: "tw-mt-5"
                }, "Reason", m.createElement(b.Lt, {
                    className: "tw-mt-2",
                    value: A,
                    onChange: T,
                    disabled: !R,
                    options: (null !== (t = null == Y || null === (a = Y.reportOptions) || void 0 === a || null === (a = a[p]) || void 0 === a ? void 0 : a[R]) && void 0 !== t ? t : []).map((function(e) {
                        var t;
                        return {
                            value: e,
                            label: null === (t = Y.reportReasons) || void 0 === t || null === (t = t[e]) || void 0 === t ? void 0 : t.text
                        }
                    }))
                })), m.createElement("small", {
                    className: "tw-text-light-grey tw-mt-2"
                }, "Don't see your issue listed here?", m.createElement("a", {
                    href: C ? "https://vrch.at/marketplace-help" : "https://vrch.at/support",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "tw-ml-1"
                }, "Contact us")), "copyright" === A ? m.createElement(b.qX, {
                    type: "warn"
                }, "We take copyright seriously. Copyright infringement reports are handled differently from standard reports. If you own this content or are authorized to act on behalf of the owner,", m.createElement(d.rU, {
                    to: "/home/profile?dmcaClaimForm=true&dmcaTarget=".concat(k),
                    className: "tw-ml-1"
                }, "submit a DMCA Claim"), ".") : "warnings" === A ? m.createElement(m.Fragment, null, m.createElement("label", {
                    className: "tw-mt-5 tw-mb-2"
                }, "Suggest Content Warnings"), m.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-2"
                }, m.createElement(h.Z, {
                    tags: M,
                    onSelectValues: function(e) {
                        return L([].concat((0, r.Z)(M), (0, r.Z)(e)))
                    },
                    onRemoveValue: function(e) {
                        return L(M.filter((function(t) {
                            return t !== e
                        })))
                    }
                }))) : null != ee && ee.results.some((function(e) {
                    return e.type === p && e.category === R && e.reason === A
                })) ? m.createElement(b.qX, {
                    type: "warn",
                    title: "You already have a pending report for this."
                }) : m.createElement("label", {
                    className: "tw-mt-5 tw-flex tw-flex-col tw-gap-2"
                }, "Notes", m.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Provide specific details to help moderators resolve the issue promptly."), m.createElement(b.gx, {
                    value: q,
                    onChange: function(e) {
                        return F(e.target.value)
                    },
                    maxLength: 5e3,
                    styleOverride: {
                        height: "90px"
                    }
                })))), m.createElement(x.tc, null, m.createElement(b.zx, {
                    disabled: me,
                    neutral: !0,
                    onClick: s,
                    className: "px-2",
                    expand: !0
                }, "Cancel"), m.createElement(b.zx, {
                    color: "primary",
                    loading: oe,
                    disabled: me || !R || !A || !q && "warnings" !== A || "copyright" === A || "warnings" === A && !M.length,
                    onClick: ue,
                    className: "px-2",
                    expand: !0
                }, "Send"))))
            }
        }
    }
]);
//# sourceMappingURL=65bc7d6da413962e0188b7149b696c09d9173084d2a915e92f4dace7a56140d3.js.map