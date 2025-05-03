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
                i = a(68412),
                s = a(87709),
                m = a(20702),
                u = a(55462),
                w = a(7581),
                d = a(41145),
                f = a(62228),
                p = a(3629),
                v = a(7371),
                g = a(91435),
                b = a(28963),
                E = a(67294),
                h = a(79655),
                x = a(83505),
                y = a(27484),
                N = a.n(y),
                k = a(12752),
                S = a(14411),
                O = a(84090),
                I = a(67371),
                C = a(87462),
                j = a(45987),
                P = a(65394),
                _ = a(85020),
                A = a(18357),
                T = (a(37337), a(64358)),
                R = a(86646),
                D = ["images", "className", "style"];

            function Z(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Z(Object(a), !0).forEach((function(t) {
                        (0, r.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Z(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            const U = function(e) {
                var t = e.images,
                    a = void 0 === t ? [] : t,
                    n = e.className,
                    r = e.style,
                    c = void 0 === r ? {} : r,
                    o = (0, j.Z)(e, D),
                    i = E.useRef(null),
                    s = E.useRef(null),
                    m = E.useState(0),
                    u = (0, l.Z)(m, 2),
                    w = u[0],
                    d = u[1],
                    f = E.useMemo((function() {
                        return a.map((function(e) {
                            var t = [64, 128, 256, 512, 1024, 2048].reduce((function(t, a) {
                                return t["".concat(a, "w")] = (0, T.S6)(z(z({}, e), {}, {
                                    width: a
                                })), t
                            }), {});
                            return z(z({}, e), {}, {
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
                        null === (t = i.current) || void 0 === t || null === (t = t.querySelector("[data-gallery-index='".concat(e, "']"))) || void 0 === t || t.scrollIntoView({
                            block: "nearest"
                        }), null === (a = s.current) || void 0 === a || null === (a = a.querySelector("[data-gallery-index='".concat(e, "']"))) || void 0 === a || a.scrollIntoView({
                            block: "nearest"
                        })
                    },
                    v = function(e) {
                        e.preventDefault();
                        var t = e.currentTarget;
                        e.currentTarget && i.current && p(t.dataset.galleryIndex)
                    },
                    g = function(e, t) {
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
                return E.createElement("div", (0, C.Z)({
                    className: (0, x.cx)(n, "tw-group tw-flex tw-flex-col tw-w-full tw-relative tw-gap-2"),
                    style: z({}, c)
                }, o), E.createElement("div", {
                    className: "tw-flex tw-flex-row tw-overflow-x-auto tw-gap-2 tw-rounded-md tw-scroll-smooth tw-snap-x tw-snap-mandatory",
                    ref: i
                }, b.map((function(e, t) {
                    return E.createElement(A.df, {
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
                }, w > 0 && E.createElement("button", {
                    type: "button",
                    className: "tw-absolute tw-left-2 tw-bg-dark-grey-transparent-90 tw-p-3 tw-border-none tw-rounded-md tw-hidden group-hover:tw-flex tw-pointer-events-auto",
                    onClick: function() {
                        w < 1 || p(w - 1)
                    }
                }, E.createElement(R.Z, {
                    icon: _.A3,
                    size: "2x"
                })), w < a.length - 1 && E.createElement("button", {
                    type: "button",
                    className: "tw-absolute tw-right-2 tw-bg-dark-grey-transparent-90 tw-p-3 tw-border-none tw-rounded-md tw-hidden group-hover:tw-flex tw-pointer-events-auto",
                    onClick: function() {
                        w > a.length || p(w + 1)
                    }
                }, E.createElement(R.Z, {
                    icon: P._t,
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
                        className: (0, x.cx)("tw-w-16 tw-h-16 tw-object-cover tw-rounded-md tw-snap-center tw-border-solid tw-border-2", {
                            "tw-border-primary": w === t,
                            "tw-border-transparent": w !== t
                        }),
                        loading: "lazy",
                        src: e.sizes["64w"],
                        srcSet: e.thumbSrcSet,
                        alt: ""
                    }))
                }))))
            };
            var X = a(72998),
                $ = a(64537),
                q = a(60006),
                M = a(95643),
                F = a(67263),
                V = a(58687),
                J = a(95896),
                L = a(72522),
                H = a(3620),
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

            function Q(e) {
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
            var Y = new RegExp("^".concat(H.i.AUTHOR)),
                G = ["admin_quest_fallback", "admin_quest_fallback_basic", "admin_quest_fallback_extended", "author_quest_fallback"];
            const K = function(e) {
                var t, a, r, y = e.isPreview,
                    C = void 0 !== y && y,
                    j = e.avatar,
                    P = e.user,
                    _ = e.listing,
                    A = e.products,
                    R = void 0 === A ? [] : A,
                    D = e.galleryImages,
                    Z = void 0 === D ? [] : D,
                    z = e.isAvatarSold,
                    W = void 0 !== z && z,
                    K = e.isAvatarSoldFetching,
                    ee = void 0 !== K && K,
                    te = e.isSelectAvatarLoading,
                    ae = void 0 !== te && te,
                    ne = e.isSelectFallbackLoading,
                    re = void 0 !== ne && ne,
                    le = e.isUpdateAvatarFetching,
                    ce = void 0 !== le && le,
                    oe = e.hasAvatarSellerPermission,
                    ie = void 0 !== oe && oe,
                    se = e.licenses,
                    me = void 0 === se ? [] : se,
                    ue = e.onEdit,
                    we = void 0 === ue ? function() {} : ue,
                    de = e.onPurchase,
                    fe = void 0 === de ? function() {} : de,
                    pe = e.onSelectAvatar,
                    ve = void 0 === pe ? function() {} : pe,
                    ge = e.onSelectFallback,
                    be = void 0 === ge ? function() {} : ge,
                    Ee = e.onSetAvatarReleaseStatus,
                    he = void 0 === Ee ? function() {} : Ee,
                    xe = e.onSellAvatar,
                    ye = void 0 === xe ? function() {} : xe,
                    Ne = e.onTryOn,
                    ke = void 0 === Ne ? function() {} : Ne,
                    Se = (0, k.pc)(),
                    Oe = (0, k.Tu)().user,
                    Ie = E.useState(!1),
                    Ce = (0, l.Z)(Ie, 2),
                    je = Ce[0],
                    Pe = Ce[1],
                    _e = E.useState("description"),
                    Ae = (0, l.Z)(_e, 2),
                    Te = Ae[0],
                    Re = Ae[1],
                    De = E.useState(!1),
                    Ze = (0, l.Z)(De, 2),
                    ze = Ze[0],
                    Ue = Ze[1],
                    Xe = C ? Oe : P,
                    $e = "private" === (null == j ? void 0 : j.releaseStatus),
                    qe = !$e,
                    Me = C || (null == j ? void 0 : j.authorId) === Oe.id,
                    Fe = Me,
                    Ve = ie && Me && $e || !1,
                    Je = E.useMemo((function() {
                        return null == me ? void 0 : me.some((function(e) {
                            return e.isCurrent && "avatar" === e.forType && e.forId === j.id && e.licenseHolderId === Oe.id
                        }))
                    }), [j, me, Oe]),
                    Le = Me || Je || qe,
                    He = Se || Me || Je || qe,
                    Be = (Se || Me) && !ee && !W && !(null != j && j.activeAssetReviewId) && !(null != j && j.productId) && "hidden" !== (null == j ? void 0 : j.releaseStatus),
                    We = 1 === R.length && R[0].productType === J.Pm.AVATAR,
                    Qe = (0, T.S6)({
                        fileUrl: (null == Xe ? void 0 : Xe.profilePicOverride) || (null == Xe ? void 0 : Xe.currentAvatarImageUrl),
                        width: "512"
                    }),
                    Ye = (0, T.S6)({
                        fileUrl: null == Xe ? void 0 : Xe.userIcon,
                        width: "256"
                    }),
                    Ge = (0, T.S6)(Q(Q(Q({
                        width: "512"
                    }, !We && _ && {
                        fileId: null == _ ? void 0 : _.imageId
                    }), We && _ && {
                        fileId: null === (t = R[0]) || void 0 === t ? void 0 : t.imageId
                    }), j && {
                        fileUrl: null == j ? void 0 : j.imageUrl
                    })),
                    Ke = E.useMemo((function() {
                        return Object.keys(L.VT).reduce((function(e, t) {
                            var a = (0, V.F)(null == j ? void 0 : j.unityPackages, t);
                            return a && (e[t] = a), e
                        }), {})
                    }), [j]),
                    et = E.useMemo((function() {
                        return Object.entries(L.VT).filter((function(e) {
                            var t = (0, l.Z)(e, 1)[0];
                            return !!Ke[t]
                        }))
                    }), [Ke]),
                    tt = E.useMemo((function() {
                        var e, t;
                        return null !== (e = null == j || null === (t = j.tags) || void 0 === t ? void 0 : t.some((function(e) {
                            return G.includes(e)
                        }))) && void 0 !== e && e
                    }), [null == j ? void 0 : j.tags]),
                    at = E.useMemo((function() {
                        return null == j ? void 0 : j.tags.filter((function(e) {
                            return e.startsWith(H.i.AUTHOR)
                        }))
                    }), [null == j ? void 0 : j.tags]),
                    nt = E.useMemo((function() {
                        var e, t;
                        return [null == j || null === (e = j.styles) || void 0 === e ? void 0 : e.primary, null == j || null === (t = j.styles) || void 0 === t ? void 0 : t.secondary].concat((0, n.Z)((null == at ? void 0 : at.map((function(e) {
                            return e.replace(Y, "")
                        }))) || [])).filter(Boolean)
                    }), [null == j || null === (a = j.styles) || void 0 === a ? void 0 : a.primary, null == j || null === (r = j.styles) || void 0 === r ? void 0 : r.secondary, at]),
                    rt = !(null == nt || !nt.length);
                if (!j && !_) return null;
                return E.createElement(E.Fragment, null, E.createElement(S.JX, {
                    className: "md:tw-flex-row tw-gap-3 tw-items-center md:tw-items-stretch"
                }, E.createElement(S.pw, {
                    width: 144,
                    className: "tw-rounded-md tw-shrink-0",
                    imgClassName: "tw-aspect-square",
                    imageId: Ge || (null == _ ? void 0 : _.file),
                    fallbackSrc: F,
                    fitToCover: !0,
                    alt: "".concat(null == j ? void 0 : j.name, " Thumbnail") || 0
                }), E.createElement(S.JX, {
                    className: "tw-flex-grow tw-gap-1"
                }, _ && function(e) {
                    switch (e) {
                        case J.ft.PERMANENT:
                            return E.createElement(q.DR, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize tw-leading-5"
                            }, E.createElement(S.$1, {
                                icon: B.SQ,
                                width: 14
                            }), " ", e);
                        case J.ft.DURATION:
                            return E.createElement(q.DR, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize"
                            }, E.createElement(S.$1, {
                                icon: b.DH
                            }), " ", e);
                        case J.ft.INSTANT:
                            return E.createElement(q.DR, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize"
                            }, E.createElement(S.$1, {
                                icon: g.BD
                            }), " ", e);
                        default:
                            return null
                    }
                }(_.listingType), E.createElement(S.X2, {
                    className: "tw-items-center tw-gap-2"
                }, E.createElement("h2", {
                    className: (0, x.cx)("tw-mb-0 tw-text-truncate tw-line-clamp-1 tw-break-all tw-leading-[1.25]", {
                        "tw-flex-grow": !Me
                    })
                }, (null == j ? void 0 : j.name) || (null == _ ? void 0 : _.displayName)), Fe && !C && E.createElement(S.JX, {
                    className: "tw-justify-center md:tw-px-1 tw-flex-grow"
                }, E.createElement(S.X2, {
                    className: "tw-ml-2 tw-mt-2 md:tw-m-0"
                }, E.createElement(S.zx, {
                    className: "tw-rounded-full tw-h-[40px] tw-w-[40px]",
                    "aria-label": "Edit Avatar",
                    onClick: function() {
                        we()
                    }
                }, E.createElement(S.$1, {
                    icon: v.Iw
                })))), j && E.createElement(S.X2, {
                    className: "tw-flex-0 tw-gap-2 tw-justify-self-end"
                }, E.createElement($.Z, {
                    text: "".concat(j.name, " by ").concat(j.authorName, " #VRChat #MadeWithVRChat"),
                    url: "".concat(window.endpoint, "/home/avatars/").concat(j.id)
                }))), E.createElement(S.X2, {
                    className: "tw-gap-2 tw-flex-wrap tw-flex-grow"
                }, E.createElement(S.JX, {
                    className: "tw-flex-[100_1_0%] tw-gap-2 tw-min-w-[285px] tw-flex-grow-[100]"
                }, E.createElement("span", {
                    className: "tw-text-[#737372]"
                }, "By", " ", E.createElement(h.rU, {
                    to: "/home/user/".concat((null == j ? void 0 : j.authorId) || Xe.id),
                    target: "_blank",
                    rel: "noreferrer"
                }, Ye && E.createElement("img", {
                    className: "tw-aspect-square tw-w-6 tw-rounded-full tw-mr-1",
                    src: Ye,
                    alt: ""
                }), (null == j ? void 0 : j.authorName) || Xe.displayName), R.length >= 1 && E.createElement(E.Fragment, null, " | ", E.createElement("small", null, E.createElement(S.$1, {
                    icon: p.hV
                }), " ", R.length, " included product", 1 === R.length ? "" : "s"))), rt && E.createElement("ul", {
                    className: "tw-flex tw-flex-row tw-flex-wrap tw-m-0 tw-p-0 tw-gap-1 tw-list-none"
                }, nt.map((function(e) {
                    return E.createElement("li", {
                        key: e,
                        className: "tw-text-xs tw-px-2 tw-py-1 tw-bg-[#575757] tw-rounded-full"
                    }, e)
                })))), E.createElement(S.JX, {
                    className: "tw-flex-[1_1_0%] tw-min-w-[300px] tw-self-end"
                }, E.createElement(S._q, {
                    className: "tw-flex-row tw-items-center tw-gap-2 tw-bg-cover tw-bg-center",
                    style: {
                        backgroundImage: "linear-gradient( rgba(37, 42, 48, 0.75), rgba(37, 42, 48, 0.75) ), url(".concat(Qe, ")")
                    }
                }, Ye && E.createElement("img", {
                    className: "tw-aspect-square tw-w-12 tw-flex-0 tw-rounded-full tw-border-solid tw-border-2 tw-border-gray-700",
                    src: Ye,
                    alt: ""
                }), E.createElement(S.JX, {
                    className: "tw-flex-auto"
                }, E.createElement("small", null, _ ? "Seller" : "Author"), E.createElement(h.rU, {
                    to: "/home/user/".concat((null == j ? void 0 : j.authorId) || (null == Xe ? void 0 : Xe.id)),
                    className: "hover:tw-text-white tw-text-teal-accent hover:tw-no-underline",
                    target: "_blank",
                    rel: "noreferrer"
                }, E.createElement("strong", null, (null == j ? void 0 : j.authorName) || (null == Xe ? void 0 : Xe.displayName))))))))), E.createElement("hr", {
                    className: "tw-my-5 tw-border-gray-300"
                }), E.createElement(S.X2, {
                    className: "tw-flex-wrap tw-gap-3"
                }, E.createElement(S.JX, {
                    className: "tw-flex-[100_1_0%] tw-min-w-[285px] tw-flex-grow-[100]"
                }, !!Z.length && E.createElement("div", {
                    className: "tw-mb-3"
                }, E.createElement(U, {
                    images: Z
                })), E.createElement(S.oI, null, E.createElement("h4", {
                    className: "tw-mb-0 tw-font-bold"
                }, _ ? "Listing" : "Avatar", " Info")), E.createElement(S.Ao, {
                    className: "tw-mb-3 tw-break-words"
                }, (null == j ? void 0 : j.acknowledgements) && E.createElement(X.Z, {
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
                    selected: Te,
                    onChange: function(e) {
                        return Re(e)
                    },
                    justify: "left"
                }), E.createElement("span", {
                    className: "tw-whitespace-pre-wrap"
                }, _ ? _.description : j[Te]))), E.createElement(S.JX, {
                    className: "tw-flex-[1_1_0%] tw-min-w-[300px]"
                }, (C || !Me || !Se) && _ && E.createElement(S._q, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-1"
                }, "Price"), E.createElement("h2", {
                    className: "tw-mb-6"
                }, E.createElement(S.b5, null), " ", null == _ ? void 0 : _.priceTokens), E.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, E.createElement(S.zx, {
                    type: "accent",
                    onClick: function() {
                        C || fe(_)
                    }
                }, "Purchase"), We && E.createElement(S.zx, {
                    onClick: function() {
                        C || ke(_)
                    },
                    neutral: !0
                }, "Try On In-World"), (null == R ? void 0 : R.length) >= 1 && E.createElement(E.Fragment, null, E.createElement(S.zx, {
                    className: "tw-mt-2",
                    transparent: !0,
                    onClick: function() {
                        return Ue(!ze)
                    }
                }, "View ", R.length, " included products", " ", ze ? E.createElement(S.$1, {
                    icon: f.mT
                }) : E.createElement(S.$1, {
                    icon: d.pt
                })), ze && E.createElement(S.JX, {
                    className: "tw-gap-2"
                }, R.map((function(e) {
                    return E.createElement(M.Z, {
                        className: "tw-min-h-20",
                        key: e.id,
                        productData: e
                    })
                })))))), !C && (Be || He || Le && j) && E.createElement(S._q, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Manage Avatar"), E.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, He && E.createElement(S.zx, {
                    disabled: ae,
                    loading: ae,
                    onClick: ve
                }, E.createElement(S.$1, {
                    icon: w.mn
                }), " Change Into Avatar"), He && tt && E.createElement(S.zx, {
                    disabled: re,
                    loading: re,
                    onClick: be,
                    neutral: !0
                }, E.createElement(S.$1, {
                    icon: u.SD
                }), " Use as Fallback"), Be && E.createElement(E.Fragment, null, E.createElement(O.Z, {
                    headerText: "Change avatar release status?",
                    confirmText: "Yes, make it ".concat("private" === j.releaseStatus ? "public" : "private"),
                    confirmCallback: function() {
                        if (!C) {
                            var e = "private" === j.releaseStatus ? "public" : "private";
                            he(e)
                        }
                    },
                    cancelText: "No, keep it ".concat(j.releaseStatus),
                    cancelCallback: function() {
                        Pe(!1)
                    },
                    isOpen: je,
                    isLoading: ce
                }, E.createElement("p", null, "Are you sure you want to make ", (null == j ? void 0 : j.name) || (null == _ ? void 0 : _.displayName), " ", E.createElement("strong", null, "private" === j.releaseStatus ? "public" : "private"), "?")), E.createElement(S.zx, {
                    disabled: ce,
                    loading: ce,
                    onClick: function() {
                        Pe(!0)
                    },
                    neutral: !0
                }, "Make Avatar ", "private" === j.releaseStatus ? "Public" : "Private")), Le && j && E.createElement(I.Z, {
                    type: "avatar",
                    contentId: j.id,
                    authorId: j.authorId,
                    releaseStatus: j.releaseStatus,
                    neutral: !0
                }), Ve && E.createElement(S.zx, {
                    onClick: ye,
                    neutral: !0,
                    disabled: (null == j ? void 0 : j.productId) || (null == j ? void 0 : j.activeAssetReviewId)
                }, "Sell this Avatar"))), j && E.createElement(S._q, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Performance Rating"), et.length ? E.createElement("table", {
                    className: "tw-w-full"
                }, et.map((function(e, t) {
                    var a, n = (0, l.Z)(e, 2),
                        r = n[0],
                        c = n[1].label,
                        o = Ke[r],
                        u = E.createElement("div", {
                            className: "tw-flex tw-items-center tw-gap-2"
                        }, E.createElement(S.$1, {
                            icon: m.RL
                        }), "No Security Checks");
                    if ("failed" === o.scanStatus) u = E.createElement("div", {
                        className: "tw-flex tw-items-center tw-gap-2"
                    }, E.createElement(S.$1, {
                        icon: s.faXmark
                    }), "Security Checks Failed");
                    else if ("unscanned" === o.scanStatus) u = E.createElement("div", {
                        className: "tw-flex tw-items-center tw-gap-2"
                    }, E.createElement(S.$1, {
                        icon: i.faCircleQuestion
                    }), "Security Checks Pending");
                    else if (o.scanStatus) {
                        var w, d;
                        u = E.createElement("div", {
                            className: "tw-flex tw-items-center tw-gap-2"
                        }, E.createElement("img", {
                            style: {
                                height: "1em"
                            },
                            src: null === (w = L.i1[o.performanceRating]) || void 0 === w ? void 0 : w.image,
                            alt: ""
                        }), null === (d = L.i1[o.performanceRating]) || void 0 === d ? void 0 : d.label)
                    }
                    return E.createElement("tr", {
                        key: r,
                        className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                    }, E.createElement("th", {
                        className: "tw-py-1 tw-font-normal tw-text-center"
                    }, E.createElement(S.$1, {
                        icon: null === (a = L.VT[r]) || void 0 === a ? void 0 : a.icon
                    })), E.createElement("th", {
                        className: "tw-py-1 tw-font-normal"
                    }, c), E.createElement("td", {
                        className: "tw-py-1"
                    }, u))
                }))) : E.createElement("em", null, "No performance data found"), E.createElement("small", {
                    className: "tw-mt-3"
                }, E.createElement("a", {
                    href: "https://creators.vrchat.com/avatars/avatar-performance-ranking-system",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn about Performance Rating"))), j && E.createElement(S._q, {
                    className: "tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Details"), E.createElement("table", {
                    className: "tw-w-full"
                }, E.createElement("tr", {
                    className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                }, E.createElement("th", {
                    className: "tw-py-1 tw-font-normal tw-text-center"
                }, E.createElement(S.$1, {
                    icon: o.CP
                })), E.createElement("th", {
                    className: "tw-py-1 tw-font-normal"
                }, "Created"), E.createElement("td", null, N()(j.created_at).format("L"))), E.createElement("tr", {
                    className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                }, E.createElement("th", {
                    className: "tw-py-1 tw-font-normal tw-text-center"
                }, E.createElement(S.$1, {
                    icon: c.r6
                })), E.createElement("th", {
                    className: "tw-py-1 tw-font-normal"
                }, "Updated"), E.createElement("td", null, N()(j.updated_at).format("L"))))))))
            }
        }
    }
]);
//# sourceMappingURL=da7716727a84921186135174f02c3f9b0199634e8a101d8fbe034943f8525922.js.map