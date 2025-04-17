"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2704], {
        22704: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => K
            });
            var n = a(42138),
                l = a(4942),
                r = a(54546),
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
                j = a(87462),
                C = a(45987),
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
                        (0, l.Z)(e, t, a[t])
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
                    l = e.style,
                    c = void 0 === l ? {} : l,
                    o = (0, C.Z)(e, D),
                    i = E.useRef(null),
                    s = E.useRef(null),
                    m = E.useState(0),
                    u = (0, r.Z)(m, 2),
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
                                    var t = (0, r.Z)(e, 2),
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
                return E.createElement("div", (0, j.Z)({
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
                        (0, l.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : W(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var Y = new RegExp("^".concat(H.i.AUTHOR)),
                G = ["admin_quest_fallback", "admin_quest_fallback_basic", "admin_quest_fallback_extended", "author_quest_fallback"];
            const K = function(e) {
                var t, a, l, y = e.isPreview,
                    j = void 0 !== y && y,
                    C = e.avatar,
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
                    le = void 0 !== ne && ne,
                    re = e.isUpdateAvatarFetching,
                    ce = void 0 !== re && re,
                    oe = e.licenses,
                    ie = void 0 === oe ? [] : oe,
                    se = e.onEdit,
                    me = void 0 === se ? function() {} : se,
                    ue = e.onPurchase,
                    we = void 0 === ue ? function() {} : ue,
                    de = e.onSelectAvatar,
                    fe = void 0 === de ? function() {} : de,
                    pe = e.onSelectFallback,
                    ve = void 0 === pe ? function() {} : pe,
                    ge = e.onSetAvatarReleaseStatus,
                    be = void 0 === ge ? function() {} : ge,
                    Ee = e.onTryOn,
                    he = void 0 === Ee ? function() {} : Ee,
                    xe = (0, k.pc)(),
                    ye = (0, k.Tu)().user,
                    Ne = E.useState(!1),
                    ke = (0, r.Z)(Ne, 2),
                    Se = ke[0],
                    Oe = ke[1],
                    Ie = E.useState("description"),
                    je = (0, r.Z)(Ie, 2),
                    Ce = je[0],
                    Pe = je[1],
                    _e = E.useState(!1),
                    Ae = (0, r.Z)(_e, 2),
                    Te = Ae[0],
                    Re = Ae[1],
                    De = j ? ye : P,
                    Ze = !("private" === (null == C ? void 0 : C.releaseStatus)),
                    ze = j || (null == C ? void 0 : C.authorId) === ye.id,
                    Ue = E.useMemo((function() {
                        return null == ie ? void 0 : ie.some((function(e) {
                            return e.isCurrent && "avatar" === e.forType && e.forId === C.id && e.licenseHolderId === ye.id
                        }))
                    }), [C, ie, ye]),
                    Xe = ze || Ue || Ze,
                    $e = xe || ze || Ue || Ze,
                    qe = (xe || ze) && !ee && !W && !(null != C && C.activeAssetReviewId) && !(null != C && C.productId) && "hidden" !== (null == C ? void 0 : C.releaseStatus),
                    Me = 1 === R.length && R[0].productType === J.Pm.AVATAR,
                    Fe = (0, T.S6)({
                        fileUrl: (null == De ? void 0 : De.profilePicOverride) || (null == De ? void 0 : De.currentAvatarImageUrl),
                        width: "512"
                    }),
                    Ve = (0, T.S6)({
                        fileUrl: null == De ? void 0 : De.userIcon,
                        width: "256"
                    }),
                    Je = (0, T.S6)(Q(Q(Q({
                        width: "512"
                    }, !Me && _ && {
                        fileId: null == _ ? void 0 : _.imageId
                    }), Me && _ && {
                        fileId: null === (t = R[0]) || void 0 === t ? void 0 : t.imageId
                    }), C && {
                        fileUrl: null == C ? void 0 : C.imageUrl
                    })),
                    Le = E.useMemo((function() {
                        return Object.keys(L.VT).reduce((function(e, t) {
                            var a = (0, V.F)(null == C ? void 0 : C.unityPackages, t);
                            return a && (e[t] = a), e
                        }), {})
                    }), [C]),
                    He = E.useMemo((function() {
                        return Object.entries(L.VT).filter((function(e) {
                            var t = (0, r.Z)(e, 1)[0];
                            return !!Le[t]
                        }))
                    }), [Le]),
                    Be = E.useMemo((function() {
                        var e, t;
                        return null !== (e = null == C || null === (t = C.tags) || void 0 === t ? void 0 : t.some((function(e) {
                            return G.includes(e)
                        }))) && void 0 !== e && e
                    }), [null == C ? void 0 : C.tags]),
                    We = E.useMemo((function() {
                        return null == C ? void 0 : C.tags.filter((function(e) {
                            return e.startsWith(H.i.AUTHOR)
                        }))
                    }), [null == C ? void 0 : C.tags]),
                    Qe = E.useMemo((function() {
                        var e, t;
                        return [null == C || null === (e = C.styles) || void 0 === e ? void 0 : e.primary, null == C || null === (t = C.styles) || void 0 === t ? void 0 : t.secondary].concat((0, n.Z)((null == We ? void 0 : We.map((function(e) {
                            return e.replace(Y, "")
                        }))) || [])).filter(Boolean)
                    }), [null == C || null === (a = C.styles) || void 0 === a ? void 0 : a.primary, null == C || null === (l = C.styles) || void 0 === l ? void 0 : l.secondary, We]),
                    Ye = !(null == Qe || !Qe.length);
                if (!C && !_) return null;
                return E.createElement(E.Fragment, null, E.createElement(S.JX, {
                    className: "md:tw-flex-row tw-gap-3 tw-items-center md:tw-items-stretch"
                }, E.createElement(S.pw, {
                    width: 144,
                    className: "tw-rounded-md tw-shrink-0",
                    imgClassName: "tw-aspect-square",
                    imageId: Je || (null == _ ? void 0 : _.file),
                    fallbackSrc: F,
                    fitToCover: !0,
                    alt: "".concat(null == C ? void 0 : C.name, " Thumbnail") || 0
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
                        "tw-flex-grow": !ze
                    })
                }, (null == C ? void 0 : C.name) || (null == _ ? void 0 : _.displayName)), ze && !j && E.createElement(S.JX, {
                    className: "tw-justify-center md:tw-px-1 tw-flex-grow"
                }, E.createElement(S.X2, {
                    className: "tw-ml-2 tw-mt-2 md:tw-m-0"
                }, E.createElement(S.zx, {
                    className: "tw-rounded-full tw-h-[40px] tw-w-[40px]",
                    "aria-label": "Edit Avatar",
                    onClick: function() {
                        me()
                    }
                }, E.createElement(S.$1, {
                    icon: v.Iw
                })))), C && E.createElement(S.X2, {
                    className: "tw-flex-0 tw-gap-2 tw-justify-self-end"
                }, E.createElement($.Z, {
                    text: "".concat(C.name, " by ").concat(C.authorName, " #VRChat #MadeWithVRChat"),
                    url: "".concat(window.endpoint, "/home/avatars/").concat(C.id)
                }))), E.createElement(S.X2, {
                    className: "tw-gap-2 tw-flex-wrap tw-flex-grow"
                }, E.createElement(S.JX, {
                    className: "tw-flex-[100_1_0%] tw-gap-2 tw-min-w-[285px] tw-flex-grow-[100]"
                }, E.createElement("span", {
                    className: "tw-text-[#737372]"
                }, "By", " ", E.createElement(h.rU, {
                    to: "/home/user/".concat((null == C ? void 0 : C.authorId) || De.id)
                }, Ve && E.createElement("img", {
                    className: "tw-aspect-square tw-w-6 tw-rounded-full tw-mr-1",
                    src: Ve,
                    alt: ""
                }), (null == C ? void 0 : C.authorName) || De.displayName), R.length >= 1 && E.createElement(E.Fragment, null, " | ", E.createElement("small", null, E.createElement(S.$1, {
                    icon: p.hV
                }), " ", R.length, " included product", 1 === R.length ? "" : "s"))), Ye && E.createElement("ul", {
                    className: "tw-flex tw-flex-row tw-flex-wrap tw-m-0 tw-p-0 tw-gap-1 tw-list-none"
                }, Qe.map((function(e) {
                    return E.createElement("li", {
                        key: e,
                        className: "tw-text-xs tw-px-2 tw-py-1 tw-bg-[#575757] tw-rounded-full"
                    }, e)
                })))), E.createElement(S.JX, {
                    className: "tw-flex-[1_1_0%] tw-min-w-[300px] tw-self-end"
                }, E.createElement(S._q, {
                    className: "tw-flex-row tw-items-center tw-gap-2 tw-bg-cover tw-bg-center",
                    style: {
                        backgroundImage: "linear-gradient( rgba(37, 42, 48, 0.75), rgba(37, 42, 48, 0.75) ), url(".concat(Fe, ")")
                    }
                }, Ve && E.createElement("img", {
                    className: "tw-aspect-square tw-w-12 tw-flex-0 tw-rounded-full tw-border-solid tw-border-2 tw-border-gray-700",
                    src: Ve,
                    alt: ""
                }), E.createElement(S.JX, {
                    className: "tw-flex-auto"
                }, E.createElement("small", null, _ ? "Seller" : "Author"), E.createElement(h.rU, {
                    to: "/home/user/".concat((null == C ? void 0 : C.authorId) || (null == De ? void 0 : De.id)),
                    className: "hover:tw-text-white tw-text-teal-accent hover:tw-no-underline"
                }, E.createElement("strong", null, (null == C ? void 0 : C.authorName) || (null == De ? void 0 : De.displayName))))))))), E.createElement("hr", {
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
                }, (null == C ? void 0 : C.acknowledgements) && E.createElement(X.Z, {
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
                    selected: Ce,
                    onChange: function(e) {
                        return Pe(e)
                    },
                    justify: "left"
                }), E.createElement("span", {
                    className: "tw-whitespace-pre-wrap"
                }, _ ? _.description : C[Ce]))), E.createElement(S.JX, {
                    className: "tw-flex-[1_1_0%] tw-min-w-[300px]"
                }, (j || !ze || !xe) && _ && E.createElement(S._q, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Price"), E.createElement("h2", null, E.createElement(S.b5, null), " ", null == _ ? void 0 : _.priceTokens), E.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, E.createElement(S.zx, {
                    onClick: function() {
                        j || we(_)
                    }
                }, "Purchase"), Me && E.createElement(S.zx, {
                    onClick: function() {
                        j || he(_)
                    },
                    neutral: !0
                }, "Try On In-World"), (null == R ? void 0 : R.length) >= 1 && E.createElement(E.Fragment, null, E.createElement(S.zx, {
                    className: "tw-mt-2",
                    transparent: !0,
                    onClick: function() {
                        return Re(!Te)
                    }
                }, "View ", R.length, " included products", " ", Te ? E.createElement(S.$1, {
                    icon: f.mT
                }) : E.createElement(S.$1, {
                    icon: d.pt
                })), Te && E.createElement(S.JX, {
                    className: "tw-gap-2"
                }, R.map((function(e) {
                    return E.createElement(M.Z, {
                        className: "tw-min-h-20",
                        key: e.id,
                        productData: e
                    })
                })))))), !j && (qe || $e || Xe && C) && E.createElement(S._q, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Manage Avatar"), E.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, $e && E.createElement(S.zx, {
                    disabled: ae,
                    loading: ae,
                    onClick: fe
                }, E.createElement(S.$1, {
                    icon: w.mn
                }), " Change Into Avatar"), $e && Be && E.createElement(S.zx, {
                    disabled: le,
                    loading: le,
                    onClick: ve,
                    neutral: !0
                }, E.createElement(S.$1, {
                    icon: u.SD
                }), " Use as Fallback"), qe && E.createElement(E.Fragment, null, E.createElement(O.Z, {
                    headerText: "Change avatar release status?",
                    confirmText: "Yes, make it ".concat("private" === C.releaseStatus ? "public" : "private"),
                    confirmCallback: function() {
                        if (!j) {
                            var e = "private" === C.releaseStatus ? "public" : "private";
                            be(e)
                        }
                    },
                    cancelText: "No, keep it ".concat(C.releaseStatus),
                    cancelCallback: function() {
                        Oe(!1)
                    },
                    isOpen: Se,
                    isLoading: ce
                }, E.createElement("p", null, "Are you sure you want to make ", (null == C ? void 0 : C.name) || (null == _ ? void 0 : _.displayName), " ", E.createElement("strong", null, "private" === C.releaseStatus ? "public" : "private"), "?")), E.createElement(S.zx, {
                    disabled: ce,
                    loading: ce,
                    onClick: function() {
                        Oe(!0)
                    },
                    neutral: !0
                }, "Make Avatar ", "private" === C.releaseStatus ? "Public" : "Private")), Xe && C && E.createElement(I.Z, {
                    type: "avatar",
                    contentId: C.id,
                    authorId: C.authorId,
                    releaseStatus: C.releaseStatus,
                    neutral: !0
                }))), C && E.createElement(S._q, {
                    className: "tw-flex-col tw-mb-3"
                }, E.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Performance Rating"), He.length ? E.createElement("table", {
                    className: "tw-w-full"
                }, He.map((function(e, t) {
                    var a, n = (0, r.Z)(e, 2),
                        l = n[0],
                        c = n[1].label,
                        o = Le[l],
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
                        key: l,
                        className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                    }, E.createElement("th", {
                        className: "tw-py-1 tw-font-normal tw-text-center"
                    }, E.createElement(S.$1, {
                        icon: null === (a = L.VT[l]) || void 0 === a ? void 0 : a.icon
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
                }, "Learn about Performance Rating"))), C && E.createElement(S._q, {
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
                }, "Created"), E.createElement("td", null, N()(C.created_at).format("L"))), E.createElement("tr", {
                    className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                }, E.createElement("th", {
                    className: "tw-py-1 tw-font-normal tw-text-center"
                }, E.createElement(S.$1, {
                    icon: c.r6
                })), E.createElement("th", {
                    className: "tw-py-1 tw-font-normal"
                }, "Updated"), E.createElement("td", null, N()(C.updated_at).format("L"))))))))
            }
        }
    }
]);
//# sourceMappingURL=29391bcac7779596101ca580086394d1332dc37cb17f5a2f8d1f7f6840fb7946.js.map