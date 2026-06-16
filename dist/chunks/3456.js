"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3456], {
        63456(e, t, a) {
            a.r(t), a.d(t, {
                default: () => le
            });
            var r = a(66911),
                n = a(64467),
                l = a(82544),
                o = a(40990),
                c = a(61362),
                i = a(70961),
                s = a(75976),
                u = a(8436),
                m = a(3827),
                d = a(4291),
                w = a(31226),
                p = a(86419),
                f = a(7514),
                v = a(38066),
                g = a(84994),
                b = a(16879),
                E = a(96540),
                h = a(56822),
                y = a(74353),
                N = a.n(y),
                x = a(194),
                k = a(15033),
                A = a(90154),
                O = a(78526),
                I = a(58168),
                S = a(80045),
                C = a(79162),
                j = a(49107),
                P = a(85692),
                _ = (a(69815), a(91069)),
                D = a(6324),
                T = ["images", "className", "style"];

            function M(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), a.push.apply(a, r)
                }
                return a
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(a), !0).forEach(function(t) {
                        (0, n.A)(e, t, a[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : M(Object(a)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    })
                }
                return e
            }
            const U = function(e) {
                var t = e.images,
                    a = void 0 === t ? [] : t,
                    r = e.className,
                    n = e.style,
                    o = void 0 === n ? {} : n,
                    c = (0, S.A)(e, T),
                    i = E.useRef(null),
                    s = E.useRef(null),
                    u = E.useState(0),
                    m = (0, l.A)(u, 2),
                    d = m[0],
                    w = m[1],
                    p = E.useMemo(function() {
                        return a.map(function(e) {
                            var t = [64, 128, 256, 512, 1024, 2048].reduce(function(t, a) {
                                return t["".concat(a, "w")] = (0, _.Iu)(R(R({}, e), {}, {
                                    width: a
                                })), t
                            }, {});
                            return R(R({}, e), {}, {
                                sizes: t,
                                fullSrcSet: Object.entries(t).map(function(e) {
                                    var t = (0, l.A)(e, 2),
                                        a = t[0],
                                        r = t[1];
                                    return "".concat(r, " ").concat(a)
                                }).join(","),
                                thumbSrcSet: "".concat(t["128w"], " 2x, ").concat(t["256w"], " 4x")
                            })
                        })
                    }, [a]),
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
                    b = E.useMemo(function() {
                        return p.sort(function(e, t) {
                            return e.order - t.order
                        })
                    }, [p]);
                return E.createElement("div", (0, I.A)({
                    className: (0, h.cx)(r, "tw-group tw-flex tw-flex-col tw-w-full tw-relative tw-gap-2"),
                    style: R({}, o)
                }, c), E.createElement("div", {
                    className: "tw-flex tw-flex-row tw-overflow-x-auto tw-gap-2 tw-rounded-md tw-scroll-smooth tw-snap-x tw-snap-mandatory",
                    ref: i
                }, b.map(function(e, t) {
                    return E.createElement(P.pL, {
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
                })), E.createElement("div", {
                    className: "tw-absolute tw-w-full tw-aspect-video tw-top-0 tw-pointer-events-none"
                }, E.createElement("div", {
                    className: "tw-relative tw-w-full tw-aspect-video tw-flex tw-flex-row tw-items-center"
                }, d > 0 && E.createElement("button", {
                    type: "button",
                    className: "tw-absolute tw-left-2 tw-bg-dark-grey-transparent-90 tw-p-3 tw-border-none tw-rounded-md tw-hidden group-hover:tw-flex tw-pointer-events-auto",
                    onClick: function() {
                        d < 1 || f(d - 1)
                    }
                }, E.createElement(D.A, {
                    icon: j.Wz,
                    size: "2x"
                })), d < a.length - 1 && E.createElement("button", {
                    type: "button",
                    className: "tw-absolute tw-right-2 tw-bg-dark-grey-transparent-90 tw-p-3 tw-border-none tw-rounded-md tw-hidden group-hover:tw-flex tw-pointer-events-auto",
                    onClick: function() {
                        d > a.length || f(d + 1)
                    }
                }, E.createElement(D.A, {
                    icon: C.Xk,
                    size: "2x"
                })))), E.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-center tw-overflow-x-auto tw-gap-2 tw-rounded-md tw-scroll-smooth tw-snap-x tw-snap-mandatory",
                    ref: s
                }, b.map(function(e, t) {
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
                })))
            };
            var F = a(19100),
                z = a(75174),
                $ = a(72839),
                q = a(24751),
                W = a(77775),
                L = a(75171),
                V = a.n(L),
                G = a(55717),
                H = a(31069),
                B = a(77861),
                Y = a(92737),
                Q = a(88270),
                J = a(61096),
                X = a(84976),
                K = a(71957);
            const Z = function(e) {
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
                    f = (0, K.vf)(s, {
                        skip: !s || !p
                    }).data,
                    v = (0, K.vf)(u, {
                        skip: !u
                    }).data,
                    g = (0, K.vf)(m, {
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
                }, (null == b ? void 0 : b.creatorDisplayName) && E.createElement(E.Fragment, null, "By", " ", b.creatorUserId ? E.createElement(X.N_, {
                    to: "/home/user/".concat(b.creatorUserId),
                    target: "_blank",
                    rel: "noreferrer"
                }, b.creatorDisplayName) : b.creatorDisplayName), (null == b ? void 0 : b.publisherDisplayName) && E.createElement(E.Fragment, null, null != b && b.creatorDisplayName ? " | " : "", "Published by ", b.publisherUserId ? E.createElement(X.N_, {
                    to: "/home/user/".concat(b.publisherUserId),
                    target: "_blank",
                    rel: "noreferrer"
                }, b.publisherDisplayName) : b.publisherDisplayName), c.length >= 1 && E.createElement(E.Fragment, null, " | ", E.createElement("small", null, E.createElement(k.M2, {
                    icon: J.TH
                }), " ", c.length, " included product", 1 === c.length ? "" : "s")))
            };
            const ee = function(e) {
                var t = e.avatar,
                    a = e.userState,
                    r = e.listing,
                    n = e.optimisedUserIconUrl,
                    l = e.optimisedProfilePicUrl;
                return !t || null != t && t.attribution ? null : E.createElement(k.xD, {
                    className: "tw-flex-row tw-items-center tw-gap-2 tw-bg-cover tw-bg-center",
                    style: {
                        backgroundImage: "linear-gradient( rgba(37, 42, 48, 0.75), rgba(37, 42, 48, 0.75) ), url(".concat(l, ")")
                    }
                }, n && E.createElement("img", {
                    className: "tw-aspect-square tw-w-12 tw-flex-0 tw-rounded-full tw-border-solid tw-border-2 tw-border-gray-700",
                    src: n,
                    alt: ""
                }), E.createElement(k.fv, {
                    className: "tw-flex-auto"
                }, E.createElement("small", null, r ? "Seller" : "Author"), E.createElement(X.N_, {
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
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), a.push.apply(a, r)
                }
                return a
            }

            function ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? te(Object(a), !0).forEach(function(t) {
                        (0, n.A)(e, t, a[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : te(Object(a)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    })
                }
                return e
            }
            var re = new RegExp("^".concat(Y.w.AUTHOR)),
                ne = ["admin_quest_fallback", "admin_quest_fallback_basic", "admin_quest_fallback_extended", "author_quest_fallback"];
            const le = function(e) {
                var t, a, n, y = e.isPreview,
                    I = void 0 !== y && y,
                    S = e.avatar,
                    C = e.user,
                    j = e.listing,
                    P = e.products,
                    D = void 0 === P ? [] : P,
                    T = e.galleryImages,
                    M = void 0 === T ? [] : T,
                    R = e.isAvatarSold,
                    L = void 0 !== R && R,
                    J = e.isAvatarSoldFetching,
                    X = void 0 !== J && J,
                    K = e.isSelectAvatarLoading,
                    te = void 0 !== K && K,
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
                    Ae = e.onTryOn,
                    Oe = void 0 === Ae ? function() {} : Ae,
                    Ie = (0, x.Om)(),
                    Se = (0, x.a$)().user,
                    Ce = E.useState(!1),
                    je = (0, l.A)(Ce, 2),
                    Pe = je[0],
                    _e = je[1],
                    De = E.useState(!1),
                    Te = (0, l.A)(De, 2),
                    Me = Te[0],
                    Re = Te[1],
                    Ue = E.useState("description"),
                    Fe = (0, l.A)(Ue, 2),
                    ze = Fe[0],
                    $e = Fe[1],
                    qe = E.useState(!1),
                    We = (0, l.A)(qe, 2),
                    Le = We[0],
                    Ve = We[1],
                    Ge = I ? Se : C,
                    He = "private" === (null == S ? void 0 : S.releaseStatus),
                    Be = !He,
                    Ye = I || (null == S ? void 0 : S.authorId) === Se.id,
                    Qe = Ye,
                    Je = ue && Ye && He || !1,
                    Xe = E.useMemo(function() {
                        return null == de ? void 0 : de.some(function(e) {
                            return e.isCurrent && "avatar" === e.forType && e.forId === S.id && e.licenseHolderId === Se.id
                        })
                    }, [S, de, Se]),
                    Ke = Ye || Xe || Be,
                    Ze = Ie || Ye || Xe || Be,
                    et = (Ie || Ye) && !X && !L && !(null != S && S.activeAssetReviewId) && !(null != S && S.productId) && "hidden" !== (null == S ? void 0 : S.releaseStatus),
                    tt = 1 === D.length && D[0].productType === H.Wd.AVATAR,
                    at = (0, _.Iu)({
                        fileUrl: (null == Ge ? void 0 : Ge.profilePicOverride) || (null == Ge ? void 0 : Ge.currentAvatarImageUrl),
                        width: "512"
                    }),
                    rt = (0, _.Iu)({
                        fileUrl: null == Ge ? void 0 : Ge.userIcon,
                        width: "256"
                    }),
                    nt = (0, _.Iu)(ae(ae(ae({
                        width: "512"
                    }, !tt && j && {
                        fileId: null == j ? void 0 : j.imageId
                    }), tt && j && {
                        fileId: null === (t = D[0]) || void 0 === t ? void 0 : t.imageId
                    }), S && {
                        fileUrl: null == S ? void 0 : S.imageUrl
                    })),
                    lt = E.useMemo(function() {
                        return Object.keys(B.P4).reduce(function(e, t) {
                            var a = (0, G.A)(null == S ? void 0 : S.unityPackages, t);
                            return a && (e[t] = a), e
                        }, {})
                    }, [S]),
                    ot = E.useMemo(function() {
                        return Object.entries(B.P4).filter(function(e) {
                            var t = (0, l.A)(e, 1)[0];
                            return !!lt[t]
                        })
                    }, [lt]),
                    ct = E.useMemo(function() {
                        var e, t;
                        return null !== (e = null == S || null === (t = S.tags) || void 0 === t ? void 0 : t.some(function(e) {
                            return ne.includes(e)
                        })) && void 0 !== e && e
                    }, [null == S ? void 0 : S.tags]),
                    it = E.useMemo(function() {
                        return null == S ? void 0 : S.tags.filter(function(e) {
                            return e.startsWith(Y.w.AUTHOR)
                        })
                    }, [null == S ? void 0 : S.tags]),
                    st = E.useMemo(function() {
                        var e, t;
                        return [null == S || null === (e = S.styles) || void 0 === e ? void 0 : e.primary, null == S || null === (t = S.styles) || void 0 === t ? void 0 : t.secondary].concat((0, r.A)((null == it ? void 0 : it.map(function(e) {
                            return e.replace(re, "")
                        })) || [])).filter(Boolean)
                    }, [null == S || null === (a = S.styles) || void 0 === a ? void 0 : a.primary, null == S || null === (n = S.styles) || void 0 === n ? void 0 : n.secondary, it]),
                    ut = !(null == st || !st.length);
                if (!S && !j) return null;
                return E.createElement(E.Fragment, null, E.createElement(k.fv, {
                    className: "md:tw-flex-row tw-gap-3 tw-items-center md:tw-items-stretch"
                }, E.createElement(k.Oo, {
                    width: 144,
                    className: "tw-rounded-md tw-shrink-0",
                    imgClassName: "tw-aspect-square",
                    imageId: nt || (null == j ? void 0 : j.file),
                    fallbackSrc: V(),
                    fitToCover: !0,
                    alt: "".concat(null == S ? void 0 : S.name, " Thumbnail") || 0
                }), E.createElement(k.fv, {
                    className: "tw-flex-grow tw-gap-1"
                }, j && function(e) {
                    switch (e) {
                        case H.p_.PERMANENT:
                            return E.createElement(q.ab, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize tw-leading-5"
                            }, E.createElement(k.M2, {
                                icon: Q.default,
                                width: 14
                            }), " ", e);
                        case H.p_.DURATION:
                            return E.createElement(q.ab, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize"
                            }, E.createElement(k.M2, {
                                icon: b.Ao
                            }), " ", e);
                        case H.p_.INSTANT:
                            return E.createElement(q.ab, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize"
                            }, E.createElement(k.M2, {
                                icon: g.zm
                            }), " ", e);
                        default:
                            return null
                    }
                }(j.listingType), E.createElement(k.fI, {
                    className: "tw-items-center tw-gap-2"
                }, E.createElement("h2", {
                    className: (0, h.cx)("tw-mb-0 tw-text-truncate tw-line-clamp-1 tw-break-all tw-leading-[1.25]", {
                        "tw-flex-grow": !Ye
                    })
                }, (null == S ? void 0 : S.name) || (null == j ? void 0 : j.displayName)), Qe && !I && E.createElement(k.fv, {
                    className: "tw-justify-center md:tw-px-1 tw-flex-grow"
                }, E.createElement(k.fI, {
                    className: "tw-ml-2 tw-mt-2 md:tw-m-0"
                }, E.createElement(k.$n, {
                    className: "tw-rounded-full tw-h-[40px] tw-w-[40px]",
                    "aria-label": "Edit Avatar",
                    onClick: function() {
                        pe()
                    }
                }, E.createElement(k.M2, {
                    icon: v.hp
                })))), S && E.createElement(k.fI, {
                    className: "tw-flex-0 tw-gap-2 tw-justify-self-end"
                }, E.createElement($.A, {
                    text: "".concat(S.name, " by ").concat(S.authorName, " #VRChat #MadeWithVRChat"),
                    url: "".concat(window.endpoint, "/home/avatar/").concat(S.id)
                }), !Ye && E.createElement(E.Fragment, null, E.createElement(k.$n, {
                    neutral: !0,
                    onClick: function() {
                        Re(!0)
                    },
                    style: {
                        lineHeight: "1"
                    },
                    title: "Report Avatar"
                }, E.createElement(k.M2, {
                    icon: f.pn
                })), E.createElement(F.A, {
                    cancelCallback: function() {
                        return Re(!1)
                    },
                    isOpen: Me,
                    type: "avatar",
                    contentId: S.id,
                    contentName: S.name,
                    marketplace: !!S.productId
                })))), E.createElement(k.fI, {
                    className: "tw-gap-2 tw-flex-wrap tw-flex-grow"
                }, E.createElement(k.fv, {
                    className: "tw-flex-[100_1_0%] tw-gap-2 tw-min-w-[285px] tw-flex-grow-[100]"
                }, E.createElement(Z, {
                    avatar: S,
                    products: D
                }), ut && E.createElement("ul", {
                    className: "tw-flex tw-flex-row tw-flex-wrap tw-m-0 tw-p-0 tw-gap-1 tw-list-none"
                }, st.map(function(e) {
                    return E.createElement("li", {
                        key: e,
                        className: "tw-text-xs tw-px-2 tw-py-1 tw-bg-[#575757] tw-rounded-full"
                    }, e)
                }))), E.createElement(k.fv, {
                    className: "tw-flex-[1_1_0%] tw-min-w-[300px] tw-self-end"
                }, E.createElement(ee, {
                    avatar: S,
                    userState: Ge,
                    listing: j,
                    optimisedUserIconUrl: rt,
                    optimisedProfilePicUrl: at
                }))))), E.createElement("hr", {
                    className: "tw-my-5 tw-border-gray-300"
                }), E.createElement(k.fI, {
                    className: "tw-flex-wrap tw-gap-3"
                }, E.createElement(k.fv, {
                    className: "tw-flex-[100_1_0%] tw-min-w-[285px] tw-flex-grow-[100]"
                }, !!M.length && E.createElement("div", {
                    className: "tw-mb-3"
                }, E.createElement(U, {
                    images: M
                })), E.createElement(k.N3, null, E.createElement("h4", {
                    className: "tw-mb-0 tw-font-bold"
                }, j ? "Listing" : "Avatar", " Info")), E.createElement(k.BW, {
                    className: "tw-mb-3 tw-break-words"
                }, (null == S ? void 0 : S.acknowledgements) && E.createElement(z.A, {
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
                    selected: ze,
                    onChange: function(e) {
                        return $e(e)
                    },
                    justify: "left"
                }), E.createElement("span", {
                    className: "tw-whitespace-pre-wrap"
                }, j ? j.description : S[ze]))), E.createElement(k.fv, {
                    className: "tw-flex-[1_1_0%] tw-min-w-[300px]"
                }, (I || !Ye || !Ie) && j && E.createElement(k.xD, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-1"
                }, "Price"), E.createElement("h2", {
                    className: "tw-mb-6"
                }, E.createElement(k.eD, null), " ", null == j ? void 0 : j.priceTokens), E.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, E.createElement(k.$n, {
                    type: "accent",
                    onClick: function() {
                        I || ve(j)
                    }
                }, "Purchase"), tt && E.createElement(k.$n, {
                    onClick: function() {
                        I || Oe(j)
                    },
                    neutral: !0
                }, "Try On In-World"), (null == D ? void 0 : D.length) >= 1 && E.createElement(E.Fragment, null, E.createElement(k.$n, {
                    className: "tw-mt-2",
                    transparent: !0,
                    onClick: function() {
                        return Ve(!Le)
                    }
                }, "View ", D.length, " included products", " ", Le ? E.createElement(k.M2, {
                    icon: p.w2
                }) : E.createElement(k.M2, {
                    icon: w.Jt
                })), Le && E.createElement(k.fv, {
                    className: "tw-gap-2"
                }, D.map(function(e) {
                    return E.createElement(W.A, {
                        className: "tw-min-h-20",
                        key: e.id,
                        productData: e
                    })
                }))))), !I && (et || Ze || Ke && S) && E.createElement(k.xD, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Manage Avatar"), E.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, Ze && E.createElement(k.$n, {
                    disabled: te,
                    loading: te,
                    onClick: be
                }, E.createElement(k.M2, {
                    icon: d.wo
                }), " Change Into Avatar"), Ze && ct && E.createElement(k.$n, {
                    disabled: oe,
                    loading: oe,
                    onClick: he,
                    neutral: !0
                }, E.createElement(k.M2, {
                    icon: m.IC
                }), " Use as Fallback"), et && E.createElement(E.Fragment, null, E.createElement(A.A, {
                    headerText: "Change avatar release status?",
                    confirmText: "Yes, make it ".concat("private" === S.releaseStatus ? "public" : "private"),
                    confirmCallback: function() {
                        if (!I) {
                            var e = "private" === S.releaseStatus ? "public" : "private";
                            Ne(e)
                        }
                    },
                    cancelText: "No, keep it ".concat(S.releaseStatus),
                    cancelCallback: function() {
                        _e(!1)
                    },
                    isOpen: Pe,
                    isLoading: ie
                }, E.createElement("p", null, "Are you sure you want to make ", (null == S ? void 0 : S.name) || (null == j ? void 0 : j.displayName), " ", E.createElement("strong", null, "private" === S.releaseStatus ? "public" : "private"), "?")), E.createElement(k.$n, {
                    disabled: ie,
                    loading: ie,
                    onClick: function() {
                        _e(!0)
                    },
                    neutral: !0
                }, "Make Avatar ", "private" === S.releaseStatus ? "Public" : "Private")), Ke && S && E.createElement(O.A, {
                    type: "avatar",
                    contentId: S.id,
                    authorId: S.authorId,
                    releaseStatus: S.releaseStatus,
                    neutral: !0
                }), Je && E.createElement(k.$n, {
                    onClick: ke,
                    neutral: !0,
                    disabled: (null == S ? void 0 : S.productId) || (null == S ? void 0 : S.activeAssetReviewId)
                }, "Sell this Avatar"))), S && E.createElement(k.xD, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Performance Rating"), ot.length ? E.createElement("table", {
                    className: "tw-w-full"
                }, ot.map(function(e, t) {
                    var a, r = (0, l.A)(e, 2),
                        n = r[0],
                        o = r[1].label,
                        c = lt[n],
                        m = E.createElement("div", {
                            className: "tw-flex tw-items-center tw-gap-2"
                        }, E.createElement(k.M2, {
                            icon: u.tU
                        }), "No Security Checks");
                    if ("failed" === c.scanStatus) m = E.createElement("div", {
                        className: "tw-flex tw-items-center tw-gap-2"
                    }, E.createElement(k.M2, {
                        icon: s.faXmark
                    }), "Security Checks Failed");
                    else if ("unscanned" === c.scanStatus) m = E.createElement("div", {
                        className: "tw-flex tw-items-center tw-gap-2"
                    }, E.createElement(k.M2, {
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
                            src: null === (d = B.Wu[c.performanceRating]) || void 0 === d ? void 0 : d.image,
                            alt: ""
                        }), null === (w = B.Wu[c.performanceRating]) || void 0 === w ? void 0 : w.label)
                    }
                    return E.createElement("tr", {
                        key: n,
                        className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                    }, E.createElement("th", {
                        className: "tw-py-1 tw-font-normal tw-text-center"
                    }, E.createElement(k.M2, {
                        icon: null === (a = B.P4[n]) || void 0 === a ? void 0 : a.icon
                    })), E.createElement("th", {
                        className: "tw-py-1 tw-font-normal"
                    }, o), E.createElement("td", {
                        className: "tw-py-1"
                    }, m))
                })) : E.createElement("em", null, "No performance data found"), E.createElement("small", {
                    className: "tw-mt-3"
                }, E.createElement("a", {
                    href: "https://creators.vrchat.com/avatars/avatar-performance-ranking-system",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn about Performance Rating"))), S && E.createElement(k.xD, {
                    className: "tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Details"), E.createElement("table", {
                    className: "tw-w-full"
                }, E.createElement("tr", {
                    className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                }, E.createElement("th", {
                    className: "tw-py-1 tw-font-normal tw-text-center"
                }, E.createElement(k.M2, {
                    icon: c.jk
                })), E.createElement("th", {
                    className: "tw-py-1 tw-font-normal"
                }, "Created"), E.createElement("td", null, N()(S.created_at).format("L"))), E.createElement("tr", {
                    className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                }, E.createElement("th", {
                    className: "tw-py-1 tw-font-normal tw-text-center"
                }, E.createElement(k.M2, {
                    icon: o.rO
                })), E.createElement("th", {
                    className: "tw-py-1 tw-font-normal"
                }, "Updated"), E.createElement("td", null, N()(S.updated_at).format("L"))))))))
            }
        },
        19100(e, t, a) {
            a.d(t, {
                A: () => O
            });
            var r = a(66911),
                n = a(64467),
                l = a(10467),
                o = a(82544),
                c = a(69629),
                i = a(48645),
                s = a(54756),
                u = a.n(s),
                m = a(96540),
                d = a(84976),
                w = a(50779),
                p = a(89483).m.injectEndpoints({
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
                g = a(194),
                b = a(15033),
                E = a(51055),
                h = a(5043),
                y = a(25538),
                N = a(85005),
                x = a(24751);

            function k(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), a.push.apply(a, r)
                }
                return a
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(a), !0).forEach(function(t) {
                        (0, n.A)(e, t, a[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : k(Object(a)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    })
                }
                return e
            }
            const O = function(e) {
                var t, a, n = e.isOpen,
                    s = e.cancelCallback,
                    p = e.type,
                    k = e.contentId,
                    O = e.contentName,
                    I = e.marketplace,
                    S = e.hasStore,
                    C = m.useState(""),
                    j = (0, o.A)(C, 2),
                    P = j[0],
                    _ = j[1],
                    D = m.useState(""),
                    T = (0, o.A)(D, 2),
                    M = T[0],
                    R = T[1],
                    U = m.useState(""),
                    F = (0, o.A)(U, 2),
                    z = F[0],
                    $ = F[1],
                    q = m.useState([]),
                    W = (0, o.A)(q, 2),
                    L = W[0],
                    V = W[1],
                    G = m.useState(!1),
                    H = (0, o.A)(G, 2),
                    B = H[0],
                    Y = H[1],
                    Q = (0, g.a$)().user,
                    J = (0, w.G)({}, {
                        skip: !n
                    }),
                    X = J.data,
                    K = J.isLoading,
                    Z = f({
                        contentId: k
                    }, {
                        skip: !n
                    }),
                    ee = Z.data,
                    te = Z.isLoading,
                    ae = v(),
                    re = (0, o.A)(ae, 2),
                    ne = re[0],
                    le = re[1],
                    oe = le.isFetching,
                    ce = le.isError,
                    ie = le.isSuccess,
                    se = le.reset;
                m.useEffect(function() {
                    P && R("")
                }, [P]), m.useEffect(function() {
                    "warnings" === M && $("")
                }, [M]), m.useEffect(function() {
                    n || setTimeout(function() {
                        se(), _(""), R(""), $(""), V([])
                    }, 500)
                }, [n]);
                var ue = function() {
                        var e = (0, l.A)(u().mark(function e() {
                            var t, a;
                            return u().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ne(A({
                                            type: p,
                                            category: P,
                                            reason: M,
                                            contentId: k,
                                            description: z
                                        }, L.length ? {
                                            details: {
                                                suggestedWarnings: L
                                            }
                                        } : {}));
                                    case 2:
                                        t = e.sent, (a = t.data) && Y(a.supportRequired);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    me = K || te || oe,
                    de = m.useMemo(function() {
                        var e, t;
                        return Object.keys(null !== (e = null == X || null === (t = X.reportOptions) || void 0 === t ? void 0 : t[p]) && void 0 !== e ? e : {}).sort(function(e, t) {
                            var a, r;
                            return (null === (a = X.reportCategories) || void 0 === a || null === (a = a[e]) || void 0 === a ? void 0 : a.order) - (null === (r = X.reportCategories) || void 0 === r || null === (r = r[t]) || void 0 === r ? void 0 : r.order)
                        }).filter(function(e) {
                            return !e.endsWith("store") || S
                        }).map(function(e) {
                            var t, a, r, n, l, o;
                            return {
                                value: e,
                                label: null !== (t = null === (a = X.reportCategories) || void 0 === a || null === (a = a[e]) || void 0 === a ? void 0 : a.title) && void 0 !== t ? t : null === (r = X.reportCategories) || void 0 === r || null === (r = r[e]) || void 0 === r ? void 0 : r.text,
                                description: null !== (n = null === (l = X.reportCategories) || void 0 === l || null === (l = l[e]) || void 0 === l ? void 0 : l.description) && void 0 !== n ? n : null === (o = X.reportCategories) || void 0 === o || null === (o = o[e]) || void 0 === o ? void 0 : o.tooltip
                            }
                        })
                    }, [p, X, S]);
                return m.useEffect(function() {
                    1 !== de.length || P || _(de[0].value)
                }, [de, P]), m.createElement(x.vq, {
                    role: "dialog",
                    type: "default",
                    isOpen: n,
                    toggle: s
                }, ie ? m.createElement(m.Fragment, null, B ? m.createElement(m.Fragment, null, m.createElement(x.Au, {
                    tag: "h4",
                    close: m.createElement(E.A, {
                        onClick: s,
                        disabled: me
                    }),
                    toggle: s
                }, "Contact Support"), m.createElement(x.G1, {
                    className: "tw-flex tw-flex-col tw-justify-center tw-text-center tw-gap-1 tw-px-10"
                }, m.createElement(b.M2, {
                    icon: i.QJ,
                    size: "4x",
                    className: "tw-mt-5 tw-mb-5"
                }), m.createElement("h4", {
                    className: "tw-mb-4"
                }, "Support Team Required"), m.createElement("strong", null, "It looks like you are trying to report an issue that requires our support team."), m.createElement("p", null, "Please provide us with information about your issue using our web form so we can provide you with assistance.")), m.createElement(x.Tb, {
                    className: "tw-justify-center"
                }, m.createElement(x.z9, {
                    to: "https://help.vrchat.com/hc/en-us/requests/new?ticket_form_id=360006750513&tf_360057451993=".concat(null == Q ? void 0 : Q.id, "&tf_subject=").concat(M, "%20").concat(P, "%20By%20").concat(p, "%20").concat(O, "&tf_description=").concat(z),
                    target: "_blank"
                }, "Open Support Form"))) : m.createElement(m.Fragment, null, m.createElement(x.Au, {
                    tag: "h4",
                    close: m.createElement(E.A, {
                        onClick: s,
                        disabled: me
                    }),
                    toggle: s
                }, "Report Submitted"), m.createElement(x.G1, {
                    className: "tw-flex tw-flex-col tw-justify-center tw-text-center tw-gap-1 tw-px-10"
                }, m.createElement(b.M2, {
                    icon: c.is,
                    size: "4x",
                    className: "tw-mt-5 tw-mb-5"
                }), m.createElement("h4", {
                    className: "tw-mb-4"
                }, "Your report is in - we've got it!"), m.createElement("strong", null, "Thanks for helping us keep things safe!"), m.createElement("p", null, "Your report has been received and will be reviewed by our moderation team.")), m.createElement(x.Tb, {
                    className: "tw-justify-center"
                }, m.createElement(b.$n, {
                    color: "primary",
                    onClick: s,
                    className: "tw-px-20 tw-py-1"
                }, "Done")))) : m.createElement(m.Fragment, null, m.createElement(x.Au, {
                    className: "tw-capitalize",
                    tag: "h4",
                    close: m.createElement(E.A, {
                        onClick: s,
                        disabled: me
                    }),
                    toggle: s
                }, "Report ", p), m.createElement(x.G1, null, K ? m.createElement("div", {
                    className: "tw-text-center"
                }, m.createElement(y.A, {
                    size: "3x"
                })) : m.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, ce && m.createElement(b.$T, {
                    type: "error",
                    title: "Error"
                }, "An error occurred while trying to submit the report."), m.createElement("p", null, "What are you reporting?"), m.createElement(N.A, {
                    value: P,
                    onChange: function(e) {
                        return _(e.target.value)
                    },
                    options: de
                }), m.createElement("label", {
                    className: "tw-mt-5"
                }, "Reason", m.createElement(b.ms, {
                    className: "tw-mt-2",
                    value: M,
                    onChange: R,
                    disabled: !P,
                    options: (null !== (t = null == X || null === (a = X.reportOptions) || void 0 === a || null === (a = a[p]) || void 0 === a ? void 0 : a[P]) && void 0 !== t ? t : []).map(function(e) {
                        var t;
                        return {
                            value: e,
                            label: null === (t = X.reportReasons) || void 0 === t || null === (t = t[e]) || void 0 === t ? void 0 : t.text
                        }
                    })
                })), m.createElement("small", {
                    className: "tw-text-light-grey tw-mt-2"
                }, "Don't see your issue listed here?", m.createElement("a", {
                    href: I ? "https://vrch.at/marketplace-help" : "https://vrch.at/support",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "tw-ml-1"
                }, "Contact us")), "copyright" === M ? m.createElement(b.$T, {
                    type: "warn"
                }, "We take copyright seriously. Copyright infringement reports are handled differently from standard reports. If you own this content or are authorized to act on behalf of the owner,", m.createElement(d.N_, {
                    to: "/home/profile?dmcaClaimForm=true&dmcaTarget=".concat(k),
                    className: "tw-ml-1"
                }, "submit a DMCA Claim"), ".") : "warnings" === M ? m.createElement(m.Fragment, null, m.createElement("label", {
                    className: "tw-mt-5 tw-mb-2"
                }, "Suggest Content Warnings"), m.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-2"
                }, m.createElement(h.A, {
                    tags: L,
                    onSelectValues: function(e) {
                        return V([].concat((0, r.A)(L), (0, r.A)(e)))
                    },
                    onRemoveValue: function(e) {
                        return V(L.filter(function(t) {
                            return t !== e
                        }))
                    }
                }))) : null != ee && ee.results.some(function(e) {
                    return e.type === p && e.category === P && e.reason === M
                }) ? m.createElement(b.$T, {
                    type: "warn",
                    title: "You already have a pending report for this."
                }) : m.createElement("label", {
                    className: "tw-mt-5 tw-flex tw-flex-col tw-gap-2"
                }, "Notes", m.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Provide specific details to help moderators resolve the issue promptly."), m.createElement(b.TM, {
                    value: z,
                    onChange: function(e) {
                        return $(e.target.value)
                    },
                    maxLength: 5e3,
                    styleOverride: {
                        height: "90px"
                    }
                })))), m.createElement(x.Tb, null, m.createElement(b.$n, {
                    disabled: me,
                    neutral: !0,
                    onClick: s,
                    className: "px-2",
                    expand: !0
                }, "Cancel"), m.createElement(b.$n, {
                    color: "primary",
                    loading: oe,
                    disabled: me || !P || !M || !z && "warnings" !== M || "copyright" === M || "warnings" === M && !L.length,
                    onClick: ue,
                    className: "px-2",
                    expand: !0
                }, "Send"))))
            }
        }
    }
]);
//# sourceMappingURL=4610c0f83da4c033bf281b62940ba1db43a3f7fc34371b90f148986cf400f7f4.js.map