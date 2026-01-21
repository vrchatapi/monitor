"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2704], {
        22704: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => ae
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
                v = a(47947),
                g = a(7371),
                b = a(91435),
                E = a(28963),
                h = a(67294),
                y = a(79655),
                x = a(83505),
                N = a(27484),
                k = a.n(N),
                S = a(83807),
                O = a(96985),
                I = a(84090),
                C = a(67371),
                j = a(87462),
                A = a(45987),
                P = a(65394),
                _ = a(85020),
                T = a(18357),
                R = (a(37337), a(64358)),
                Z = a(86646),
                z = ["images", "className", "style"];

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

            function $(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? D(Object(a), !0).forEach((function(t) {
                        (0, l.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : D(Object(a)).forEach((function(t) {
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
                    o = (0, A.Z)(e, z),
                    i = h.useRef(null),
                    s = h.useRef(null),
                    m = h.useState(0),
                    u = (0, r.Z)(m, 2),
                    w = u[0],
                    d = u[1],
                    f = h.useMemo((function() {
                        return a.map((function(e) {
                            var t = [64, 128, 256, 512, 1024, 2048].reduce((function(t, a) {
                                return t["".concat(a, "w")] = (0, R.S6)($($({}, e), {}, {
                                    width: a
                                })), t
                            }), {});
                            return $($({}, e), {}, {
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
                    b = h.useMemo((function() {
                        return f.sort((function(e, t) {
                            return e.order - t.order
                        }))
                    }), [f]);
                return h.createElement("div", (0, j.Z)({
                    className: (0, x.cx)(n, "tw-group tw-flex tw-flex-col tw-w-full tw-relative tw-gap-2"),
                    style: $({}, c)
                }, o), h.createElement("div", {
                    className: "tw-flex tw-flex-row tw-overflow-x-auto tw-gap-2 tw-rounded-md tw-scroll-smooth tw-snap-x tw-snap-mandatory",
                    ref: i
                }, b.map((function(e, t) {
                    return h.createElement(T.df, {
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
                }))), h.createElement("div", {
                    className: "tw-absolute tw-w-full tw-aspect-video tw-top-0 tw-pointer-events-none"
                }, h.createElement("div", {
                    className: "tw-relative tw-w-full tw-aspect-video tw-flex tw-flex-row tw-items-center"
                }, w > 0 && h.createElement("button", {
                    type: "button",
                    className: "tw-absolute tw-left-2 tw-bg-dark-grey-transparent-90 tw-p-3 tw-border-none tw-rounded-md tw-hidden group-hover:tw-flex tw-pointer-events-auto",
                    onClick: function() {
                        w < 1 || p(w - 1)
                    }
                }, h.createElement(Z.Z, {
                    icon: _.A3,
                    size: "2x"
                })), w < a.length - 1 && h.createElement("button", {
                    type: "button",
                    className: "tw-absolute tw-right-2 tw-bg-dark-grey-transparent-90 tw-p-3 tw-border-none tw-rounded-md tw-hidden group-hover:tw-flex tw-pointer-events-auto",
                    onClick: function() {
                        w > a.length || p(w + 1)
                    }
                }, h.createElement(Z.Z, {
                    icon: P._t,
                    size: "2x"
                })))), h.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-center tw-overflow-x-auto tw-gap-2 tw-rounded-md tw-scroll-smooth tw-snap-x tw-snap-mandatory",
                    ref: s
                }, b.map((function(e, t) {
                    return h.createElement("a", {
                        key: e.fileId || e.fileUrl,
                        "data-gallery-index": t,
                        onClick: v,
                        href: "#".concat(e.fileId),
                        className: "tw-bg-transparent tw-border-none tw-p-0 tw-m-0 tw-cursor-pointer"
                    }, h.createElement("img", {
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
            var X = a(61244),
                q = a(72998),
                F = a(64537),
                M = a(60006),
                J = a(95643),
                V = a(51806),
                L = a.n(V),
                H = a(58687),
                B = a(95896),
                W = a(72522),
                Q = a(3620),
                Y = a(14825);

            function G(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function K(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(a), !0).forEach((function(t) {
                        (0, l.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : G(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var ee = new RegExp("^".concat(Q.i.AUTHOR)),
                te = ["admin_quest_fallback", "admin_quest_fallback_basic", "admin_quest_fallback_extended", "author_quest_fallback"];
            const ae = function(e) {
                var t, a, l, N = e.isPreview,
                    j = void 0 !== N && N,
                    A = e.avatar,
                    P = e.user,
                    _ = e.listing,
                    T = e.products,
                    Z = void 0 === T ? [] : T,
                    z = e.galleryImages,
                    D = void 0 === z ? [] : z,
                    $ = e.isAvatarSold,
                    V = void 0 !== $ && $,
                    G = e.isAvatarSoldFetching,
                    ae = void 0 !== G && G,
                    ne = e.isSelectAvatarLoading,
                    le = void 0 !== ne && ne,
                    re = e.isSelectFallbackLoading,
                    ce = void 0 !== re && re,
                    oe = e.isUpdateAvatarFetching,
                    ie = void 0 !== oe && oe,
                    se = e.hasAvatarSellerPermission,
                    me = void 0 !== se && se,
                    ue = e.licenses,
                    we = void 0 === ue ? [] : ue,
                    de = e.onEdit,
                    fe = void 0 === de ? function() {} : de,
                    pe = e.onPurchase,
                    ve = void 0 === pe ? function() {} : pe,
                    ge = e.onSelectAvatar,
                    be = void 0 === ge ? function() {} : ge,
                    Ee = e.onSelectFallback,
                    he = void 0 === Ee ? function() {} : Ee,
                    ye = e.onSetAvatarReleaseStatus,
                    xe = void 0 === ye ? function() {} : ye,
                    Ne = e.onSellAvatar,
                    ke = void 0 === Ne ? function() {} : Ne,
                    Se = e.onTryOn,
                    Oe = void 0 === Se ? function() {} : Se,
                    Ie = (0, S.pc)(),
                    Ce = (0, S.Tu)().user,
                    je = h.useState(!1),
                    Ae = (0, r.Z)(je, 2),
                    Pe = Ae[0],
                    _e = Ae[1],
                    Te = h.useState(!1),
                    Re = (0, r.Z)(Te, 2),
                    Ze = Re[0],
                    ze = Re[1],
                    De = h.useState("description"),
                    $e = (0, r.Z)(De, 2),
                    Ue = $e[0],
                    Xe = $e[1],
                    qe = h.useState(!1),
                    Fe = (0, r.Z)(qe, 2),
                    Me = Fe[0],
                    Je = Fe[1],
                    Ve = j ? Ce : P,
                    Le = "private" === (null == A ? void 0 : A.releaseStatus),
                    He = !Le,
                    Be = j || (null == A ? void 0 : A.authorId) === Ce.id,
                    We = Be,
                    Qe = me && Be && Le || !1,
                    Ye = h.useMemo((function() {
                        return null == we ? void 0 : we.some((function(e) {
                            return e.isCurrent && "avatar" === e.forType && e.forId === A.id && e.licenseHolderId === Ce.id
                        }))
                    }), [A, we, Ce]),
                    Ge = Be || Ye || He,
                    Ke = Ie || Be || Ye || He,
                    et = (Ie || Be) && !ae && !V && !(null != A && A.activeAssetReviewId) && !(null != A && A.productId) && "hidden" !== (null == A ? void 0 : A.releaseStatus),
                    tt = 1 === Z.length && Z[0].productType === B.Pm.AVATAR,
                    at = (0, R.S6)({
                        fileUrl: (null == Ve ? void 0 : Ve.profilePicOverride) || (null == Ve ? void 0 : Ve.currentAvatarImageUrl),
                        width: "512"
                    }),
                    nt = (0, R.S6)({
                        fileUrl: null == Ve ? void 0 : Ve.userIcon,
                        width: "256"
                    }),
                    lt = (0, R.S6)(K(K(K({
                        width: "512"
                    }, !tt && _ && {
                        fileId: null == _ ? void 0 : _.imageId
                    }), tt && _ && {
                        fileId: null === (t = Z[0]) || void 0 === t ? void 0 : t.imageId
                    }), A && {
                        fileUrl: null == A ? void 0 : A.imageUrl
                    })),
                    rt = h.useMemo((function() {
                        return Object.keys(W.VT).reduce((function(e, t) {
                            var a = (0, H.F)(null == A ? void 0 : A.unityPackages, t);
                            return a && (e[t] = a), e
                        }), {})
                    }), [A]),
                    ct = h.useMemo((function() {
                        return Object.entries(W.VT).filter((function(e) {
                            var t = (0, r.Z)(e, 1)[0];
                            return !!rt[t]
                        }))
                    }), [rt]),
                    ot = h.useMemo((function() {
                        var e, t;
                        return null !== (e = null == A || null === (t = A.tags) || void 0 === t ? void 0 : t.some((function(e) {
                            return te.includes(e)
                        }))) && void 0 !== e && e
                    }), [null == A ? void 0 : A.tags]),
                    it = h.useMemo((function() {
                        return null == A ? void 0 : A.tags.filter((function(e) {
                            return e.startsWith(Q.i.AUTHOR)
                        }))
                    }), [null == A ? void 0 : A.tags]),
                    st = h.useMemo((function() {
                        var e, t;
                        return [null == A || null === (e = A.styles) || void 0 === e ? void 0 : e.primary, null == A || null === (t = A.styles) || void 0 === t ? void 0 : t.secondary].concat((0, n.Z)((null == it ? void 0 : it.map((function(e) {
                            return e.replace(ee, "")
                        }))) || [])).filter(Boolean)
                    }), [null == A || null === (a = A.styles) || void 0 === a ? void 0 : a.primary, null == A || null === (l = A.styles) || void 0 === l ? void 0 : l.secondary, it]),
                    mt = !(null == st || !st.length);
                if (!A && !_) return null;
                return h.createElement(h.Fragment, null, h.createElement(O.JX, {
                    className: "md:tw-flex-row tw-gap-3 tw-items-center md:tw-items-stretch"
                }, h.createElement(O.pw, {
                    width: 144,
                    className: "tw-rounded-md tw-shrink-0",
                    imgClassName: "tw-aspect-square",
                    imageId: lt || (null == _ ? void 0 : _.file),
                    fallbackSrc: L(),
                    fitToCover: !0,
                    alt: "".concat(null == A ? void 0 : A.name, " Thumbnail") || 0
                }), h.createElement(O.JX, {
                    className: "tw-flex-grow tw-gap-1"
                }, _ && function(e) {
                    switch (e) {
                        case B.ft.PERMANENT:
                            return h.createElement(M.DR, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize tw-leading-5"
                            }, h.createElement(O.$1, {
                                icon: Y.default,
                                width: 14
                            }), " ", e);
                        case B.ft.DURATION:
                            return h.createElement(M.DR, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize"
                            }, h.createElement(O.$1, {
                                icon: E.DH
                            }), " ", e);
                        case B.ft.INSTANT:
                            return h.createElement(M.DR, {
                                bgColor: "#575757",
                                className: "tw-max-w-fit tw-capitalize"
                            }, h.createElement(O.$1, {
                                icon: b.BD
                            }), " ", e);
                        default:
                            return null
                    }
                }(_.listingType), h.createElement(O.X2, {
                    className: "tw-items-center tw-gap-2"
                }, h.createElement("h2", {
                    className: (0, x.cx)("tw-mb-0 tw-text-truncate tw-line-clamp-1 tw-break-all tw-leading-[1.25]", {
                        "tw-flex-grow": !Be
                    })
                }, (null == A ? void 0 : A.name) || (null == _ ? void 0 : _.displayName)), We && !j && h.createElement(O.JX, {
                    className: "tw-justify-center md:tw-px-1 tw-flex-grow"
                }, h.createElement(O.X2, {
                    className: "tw-ml-2 tw-mt-2 md:tw-m-0"
                }, h.createElement(O.zx, {
                    className: "tw-rounded-full tw-h-[40px] tw-w-[40px]",
                    "aria-label": "Edit Avatar",
                    onClick: function() {
                        fe()
                    }
                }, h.createElement(O.$1, {
                    icon: g.Iw
                })))), A && h.createElement(O.X2, {
                    className: "tw-flex-0 tw-gap-2 tw-justify-self-end"
                }, h.createElement(F.Z, {
                    text: "".concat(A.name, " by ").concat(A.authorName, " #VRChat #MadeWithVRChat"),
                    url: "".concat(window.endpoint, "/home/avatar/").concat(A.id)
                }), !Be && h.createElement(h.Fragment, null, h.createElement(O.zx, {
                    neutral: !0,
                    onClick: function() {
                        ze(!0)
                    },
                    style: {
                        lineHeight: "1"
                    },
                    title: "Report Avatar"
                }, h.createElement(O.$1, {
                    icon: v.JH
                })), h.createElement(X.Z, {
                    cancelCallback: function() {
                        return ze(!1)
                    },
                    isOpen: Ze,
                    type: "avatar",
                    contentId: A.id,
                    contentName: A.name,
                    marketplace: !!A.productId
                })))), h.createElement(O.X2, {
                    className: "tw-gap-2 tw-flex-wrap tw-flex-grow"
                }, h.createElement(O.JX, {
                    className: "tw-flex-[100_1_0%] tw-gap-2 tw-min-w-[285px] tw-flex-grow-[100]"
                }, h.createElement("span", {
                    className: "tw-text-[#737372]"
                }, "By", " ", h.createElement(y.rU, {
                    to: "/home/user/".concat((null == A ? void 0 : A.authorId) || Ve.id),
                    target: "_blank",
                    rel: "noreferrer"
                }, nt && h.createElement("img", {
                    className: "tw-aspect-square tw-w-6 tw-rounded-full tw-mr-1",
                    src: nt,
                    alt: ""
                }), (null == A ? void 0 : A.authorName) || Ve.displayName), Z.length >= 1 && h.createElement(h.Fragment, null, " | ", h.createElement("small", null, h.createElement(O.$1, {
                    icon: p.hV
                }), " ", Z.length, " included product", 1 === Z.length ? "" : "s"))), mt && h.createElement("ul", {
                    className: "tw-flex tw-flex-row tw-flex-wrap tw-m-0 tw-p-0 tw-gap-1 tw-list-none"
                }, st.map((function(e) {
                    return h.createElement("li", {
                        key: e,
                        className: "tw-text-xs tw-px-2 tw-py-1 tw-bg-[#575757] tw-rounded-full"
                    }, e)
                })))), h.createElement(O.JX, {
                    className: "tw-flex-[1_1_0%] tw-min-w-[300px] tw-self-end"
                }, h.createElement(O._q, {
                    className: "tw-flex-row tw-items-center tw-gap-2 tw-bg-cover tw-bg-center",
                    style: {
                        backgroundImage: "linear-gradient( rgba(37, 42, 48, 0.75), rgba(37, 42, 48, 0.75) ), url(".concat(at, ")")
                    }
                }, nt && h.createElement("img", {
                    className: "tw-aspect-square tw-w-12 tw-flex-0 tw-rounded-full tw-border-solid tw-border-2 tw-border-gray-700",
                    src: nt,
                    alt: ""
                }), h.createElement(O.JX, {
                    className: "tw-flex-auto"
                }, h.createElement("small", null, _ ? "Seller" : "Author"), h.createElement(y.rU, {
                    to: "/home/user/".concat((null == A ? void 0 : A.authorId) || (null == Ve ? void 0 : Ve.id)),
                    className: "hover:tw-text-white tw-text-teal-accent hover:tw-no-underline",
                    target: "_blank",
                    rel: "noreferrer"
                }, h.createElement("strong", null, (null == A ? void 0 : A.authorName) || (null == Ve ? void 0 : Ve.displayName))))))))), h.createElement("hr", {
                    className: "tw-my-5 tw-border-gray-300"
                }), h.createElement(O.X2, {
                    className: "tw-flex-wrap tw-gap-3"
                }, h.createElement(O.JX, {
                    className: "tw-flex-[100_1_0%] tw-min-w-[285px] tw-flex-grow-[100]"
                }, !!D.length && h.createElement("div", {
                    className: "tw-mb-3"
                }, h.createElement(U, {
                    images: D
                })), h.createElement(O.oI, null, h.createElement("h4", {
                    className: "tw-mb-0 tw-font-bold"
                }, _ ? "Listing" : "Avatar", " Info")), h.createElement(O.Ao, {
                    className: "tw-mb-3 tw-break-words"
                }, (null == A ? void 0 : A.acknowledgements) && h.createElement(q.Z, {
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
                    selected: Ue,
                    onChange: function(e) {
                        return Xe(e)
                    },
                    justify: "left"
                }), h.createElement("span", {
                    className: "tw-whitespace-pre-wrap"
                }, _ ? _.description : A[Ue]))), h.createElement(O.JX, {
                    className: "tw-flex-[1_1_0%] tw-min-w-[300px]"
                }, (j || !Be || !Ie) && _ && h.createElement(O._q, {
                    className: "tw-flex-col tw-mb-3"
                }, h.createElement("h4", {
                    className: "tw-text-base tw-mb-1"
                }, "Price"), h.createElement("h2", {
                    className: "tw-mb-6"
                }, h.createElement(O.b5, null), " ", null == _ ? void 0 : _.priceTokens), h.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, h.createElement(O.zx, {
                    type: "accent",
                    onClick: function() {
                        j || ve(_)
                    }
                }, "Purchase"), tt && h.createElement(O.zx, {
                    onClick: function() {
                        j || Oe(_)
                    },
                    neutral: !0
                }, "Try On In-World"), (null == Z ? void 0 : Z.length) >= 1 && h.createElement(h.Fragment, null, h.createElement(O.zx, {
                    className: "tw-mt-2",
                    transparent: !0,
                    onClick: function() {
                        return Je(!Me)
                    }
                }, "View ", Z.length, " included products", " ", Me ? h.createElement(O.$1, {
                    icon: f.mT
                }) : h.createElement(O.$1, {
                    icon: d.pt
                })), Me && h.createElement(O.JX, {
                    className: "tw-gap-2"
                }, Z.map((function(e) {
                    return h.createElement(J.Z, {
                        className: "tw-min-h-20",
                        key: e.id,
                        productData: e
                    })
                })))))), !j && (et || Ke || Ge && A) && h.createElement(O._q, {
                    className: "tw-flex-col tw-mb-3"
                }, h.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Manage Avatar"), h.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, Ke && h.createElement(O.zx, {
                    disabled: le,
                    loading: le,
                    onClick: be
                }, h.createElement(O.$1, {
                    icon: w.mn
                }), " Change Into Avatar"), Ke && ot && h.createElement(O.zx, {
                    disabled: ce,
                    loading: ce,
                    onClick: he,
                    neutral: !0
                }, h.createElement(O.$1, {
                    icon: u.SD
                }), " Use as Fallback"), et && h.createElement(h.Fragment, null, h.createElement(I.Z, {
                    headerText: "Change avatar release status?",
                    confirmText: "Yes, make it ".concat("private" === A.releaseStatus ? "public" : "private"),
                    confirmCallback: function() {
                        if (!j) {
                            var e = "private" === A.releaseStatus ? "public" : "private";
                            xe(e)
                        }
                    },
                    cancelText: "No, keep it ".concat(A.releaseStatus),
                    cancelCallback: function() {
                        _e(!1)
                    },
                    isOpen: Pe,
                    isLoading: ie
                }, h.createElement("p", null, "Are you sure you want to make ", (null == A ? void 0 : A.name) || (null == _ ? void 0 : _.displayName), " ", h.createElement("strong", null, "private" === A.releaseStatus ? "public" : "private"), "?")), h.createElement(O.zx, {
                    disabled: ie,
                    loading: ie,
                    onClick: function() {
                        _e(!0)
                    },
                    neutral: !0
                }, "Make Avatar ", "private" === A.releaseStatus ? "Public" : "Private")), Ge && A && h.createElement(C.Z, {
                    type: "avatar",
                    contentId: A.id,
                    authorId: A.authorId,
                    releaseStatus: A.releaseStatus,
                    neutral: !0
                }), Qe && h.createElement(O.zx, {
                    onClick: ke,
                    neutral: !0,
                    disabled: (null == A ? void 0 : A.productId) || (null == A ? void 0 : A.activeAssetReviewId)
                }, "Sell this Avatar"))), A && h.createElement(O._q, {
                    className: "tw-flex-col tw-mb-3"
                }, h.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Performance Rating"), ct.length ? h.createElement("table", {
                    className: "tw-w-full"
                }, ct.map((function(e, t) {
                    var a, n = (0, r.Z)(e, 2),
                        l = n[0],
                        c = n[1].label,
                        o = rt[l],
                        u = h.createElement("div", {
                            className: "tw-flex tw-items-center tw-gap-2"
                        }, h.createElement(O.$1, {
                            icon: m.RL
                        }), "No Security Checks");
                    if ("failed" === o.scanStatus) u = h.createElement("div", {
                        className: "tw-flex tw-items-center tw-gap-2"
                    }, h.createElement(O.$1, {
                        icon: s.faXmark
                    }), "Security Checks Failed");
                    else if ("unscanned" === o.scanStatus) u = h.createElement("div", {
                        className: "tw-flex tw-items-center tw-gap-2"
                    }, h.createElement(O.$1, {
                        icon: i.faCircleQuestion
                    }), "Security Checks Pending");
                    else if (o.scanStatus) {
                        var w, d;
                        u = h.createElement("div", {
                            className: "tw-flex tw-items-center tw-gap-2"
                        }, h.createElement("img", {
                            style: {
                                height: "1em"
                            },
                            src: null === (w = W.i1[o.performanceRating]) || void 0 === w ? void 0 : w.image,
                            alt: ""
                        }), null === (d = W.i1[o.performanceRating]) || void 0 === d ? void 0 : d.label)
                    }
                    return h.createElement("tr", {
                        key: l,
                        className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                    }, h.createElement("th", {
                        className: "tw-py-1 tw-font-normal tw-text-center"
                    }, h.createElement(O.$1, {
                        icon: null === (a = W.VT[l]) || void 0 === a ? void 0 : a.icon
                    })), h.createElement("th", {
                        className: "tw-py-1 tw-font-normal"
                    }, c), h.createElement("td", {
                        className: "tw-py-1"
                    }, u))
                }))) : h.createElement("em", null, "No performance data found"), h.createElement("small", {
                    className: "tw-mt-3"
                }, h.createElement("a", {
                    href: "https://creators.vrchat.com/avatars/avatar-performance-ranking-system",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn about Performance Rating"))), A && h.createElement(O._q, {
                    className: "tw-mb-3"
                }, h.createElement("h4", {
                    className: "tw-text-base tw-mb-4"
                }, "Details"), h.createElement("table", {
                    className: "tw-w-full"
                }, h.createElement("tr", {
                    className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                }, h.createElement("th", {
                    className: "tw-py-1 tw-font-normal tw-text-center"
                }, h.createElement(O.$1, {
                    icon: o.CP
                })), h.createElement("th", {
                    className: "tw-py-1 tw-font-normal"
                }, "Created"), h.createElement("td", null, k()(A.created_at).format("L"))), h.createElement("tr", {
                    className: "tw-border-b tw-border-b-1 tw-border-b-gray-800"
                }, h.createElement("th", {
                    className: "tw-py-1 tw-font-normal tw-text-center"
                }, h.createElement(O.$1, {
                    icon: c.r6
                })), h.createElement("th", {
                    className: "tw-py-1 tw-font-normal"
                }, "Updated"), h.createElement("td", null, k()(A.updated_at).format("L"))))))))
            }
        }
    }
]);
//# sourceMappingURL=3ce0b1493f3f6f0e99188a891e9d4aa9ca7900c7f86f9e9c3733f099468c85ba.js.map