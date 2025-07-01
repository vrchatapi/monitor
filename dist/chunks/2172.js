"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2172], {
        42172: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => P
            });
            var l = a(54546),
                n = a(65394),
                r = a(82414),
                o = a(37463),
                i = a(22202),
                c = a(21538),
                s = a(43683),
                m = a(67294),
                u = a(32981),
                d = a(79655),
                w = a(87462),
                p = a(4942),
                v = a(45987),
                f = a(4965),
                b = a(71421),
                g = a(51806),
                x = a.n(g),
                h = a(83505),
                E = a(17383),
                y = ["avatars", "label", "value", "onChange", "isLoading", "onSearch", "className", "trimToLength", "disabled", "allowMultiline"];
            const N = function(e) {
                var t, a, n = e.avatars,
                    r = void 0 === n ? [] : n,
                    i = e.label,
                    c = e.value,
                    s = e.onChange,
                    u = e.isLoading,
                    d = void 0 !== u && u,
                    f = (e.onSearch, e.className),
                    g = e.trimToLength,
                    N = e.disabled,
                    C = e.allowMultiline,
                    I = (0, v.Z)(e, y),
                    Z = m.useState(!1),
                    R = (0, l.Z)(Z, 2),
                    A = R[0],
                    M = R[1],
                    F = m.useState(""),
                    P = (0, l.Z)(F, 2),
                    O = P[0],
                    q = P[1],
                    U = (0, E.Nr)(O),
                    B = m.useRef(null),
                    K = function(e) {
                        B.current.contains(e.target) || M(!1)
                    },
                    _ = m.useMemo((function() {
                        return !1 === A ? (q(""), r) : r.filter((function(e) {
                            return e.name.toLowerCase().includes(U.toLowerCase())
                        }))
                    }), [U, A]);
                m.useEffect((function() {
                    return A ? window.addEventListener("click", K) : window.removeEventListener("click", K),
                        function() {
                            window.removeEventListener("click", K)
                        }
                }), [A]);
                var W = r.find((function(e) {
                    return e.name === c
                }));
                return m.createElement(S, (0, w.Z)({
                    role: "radiogroup",
                    "aria-label": i,
                    ref: B,
                    className: f,
                    onMouseLeave: function() {
                        A && M(!1)
                    }
                }, I), m.createElement(X, {
                    disabled: N,
                    expanded: A
                }, m.createElement(L, {
                    type: "button",
                    "aria-label": "Expand Options",
                    disabled: N,
                    onClick: function(e) {
                        e.stopPropagation(), e.preventDefault(), M(!A)
                    }
                }, m.createElement(k, null, !!i && m.createElement(T, null, i), m.createElement(J, {
                    role: "note",
                    trimToLength: g,
                    title: null !== (t = null == W ? void 0 : W.selectedLabel) && void 0 !== t ? t : null == W ? void 0 : W.label
                }, null !== (a = null == W ? void 0 : W.name) && void 0 !== a ? a : null == W ? void 0 : W.name)), m.createElement(o.$1, {
                    icon: b.eW,
                    color: "white",
                    className: "ms-3"
                })), A && m.createElement(D, null, m.createElement(o.II, {
                    className: "tw-mb-4 tw-mt-3 tw-px-3 tw-overflow-visible",
                    placeholder: "Search Avatars",
                    onChange: function(e) {
                        return q(e.target.value)
                    },
                    value: O
                }), d && m.createElement("p", {
                    className: "tw-mx-3"
                }, "Loading..."), 0 === _.length && !d && m.createElement("p", {
                    className: "tw-mx-3 tw-mb-3"
                }, "No avatars are available!"), !d && _.map((function(e, t) {
                    var a, l = (null == e ? void 0 : e.productId) || (null == e ? void 0 : e.activeAssetReviewId) || (null == e ? void 0 : e.assetDisabled) || (null == e ? void 0 : e.contentRestrictionId);
                    return m.createElement(m.Fragment, {
                        key: e.id
                    }, m.createElement(z, {
                        role: "radio",
                        "aria-checked": e.id === (null == c ? void 0 : c.id),
                        key: e.id,
                        onClick: l ? void 0 : (a = e, function(e) {
                            e.stopPropagation(), e.preventDefault(), s && s(a), M(!1)
                        }),
                        tabIndex: t,
                        trimToLength: g,
                        title: "string" == typeof e.selectedLabel ? e.selectedLabel : e.label,
                        allowMultiline: C,
                        className: (0, h.cx)("tw-group tw-ease-in-out tw-duration-200 tw-transition-all  hover:tw-bg-[#086c84] first:tw-border-0 tw-border-button-bg tw-border-t tw-border-solid tw-border-x-0 tw-border-y-0 tw-py-2 tw-px-3", (0, p.Z)({}, "tw-cursor-not-allowed tw-text-placeholder-text hover:tw-text-placeholder-text", l))
                    }, m.createElement(o.X2, {
                        className: "tw-gap-2 tw-items-center"
                    }, m.createElement(o.pw, {
                        fitToCover: !0,
                        imageId: null == e ? void 0 : e.imageUrl,
                        alt: null == e ? void 0 : e.name,
                        fallbackSrc: x(),
                        width: 36
                    }), m.createElement(o.JX, {
                        className: "tw-flex-1"
                    }, m.createElement("p", {
                        className: "tw-mb-0 tw-font-bold group-hover:tw-text-white"
                    }, e.name), m.createElement("small", {
                        className: "tw-mb-0 tw-text-placeholder-text transition-all group-hover:tw-text-white"
                    }, "Avatar")), l && m.createElement(o.JX, {
                        className: "tw-flex-1 tw-max-w-[50%]"
                    }, m.createElement("small", {
                        className: "tw-mb-0 tw-break-normal tw-text-placeholder-text group-hover:tw-text-white tw-whitespace-break-spaces"
                    }, function(e) {
                        if (e) return e.contentRestrictionId ? "This avatar is currently disabled. Check your email inbox for more details." : e.productId ? "This avatar is already linked to a product." : e.activeAssetReviewId ? "This avatar is currently under review." : "This avatar is not available."
                    }(e))))))
                })))))
            };
            var k = (0, f.Z)("div", {
                    target: "evny8vp7"
                })({
                    name: "jyvlna",
                    styles: "display:flex;align-items:center;max-width:75%"
                }),
                C = {
                    name: "4u0b5g",
                    styles: "border:hsl(0, 0%, 20%) solid 2px;background:hsl(0, 0%, 20%);color:hsl(0, 0%, 60%);&:hover{border:hsl(0, 0%, 20%) solid 2px;background:hsl(0, 0%, 20%);color:hsl(0, 0%, 60%);}"
                },
                I = {
                    name: "1ll5w29",
                    styles: "border-bottom-color:'#07343f'"
                },
                X = (0, f.Z)("div", {
                    target: "evny8vp6"
                })("text-align:center;background-color:#064b5c;padding:5px 5px 5px 15px;border:#064b5c solid 2px;color:#ffffff;border-radius:3px;transition:background-color 0.2s ease-in-out;position:relative;display:flex;flex:1;border-radius:", (function(e) {
                    return e.expanded ? "3px 3px 0 0" : 3
                }), "px;max-width:100%;&:hover{background-color:#064b5c;border-color:#086c84;}", (function(e) {
                    return e.expanded ? I : ""
                }), " ", (function(e) {
                    return e.disabled ? C : ""
                }), ";"),
                L = (0, f.Z)("button", {
                    target: "evny8vp5"
                })({
                    name: "118t6pa",
                    styles: "border:none;background:transparent;outline:none!important;display:flex;flex:1;flex-direction:row;align-items:center;justify-content:space-between;position:relative;max-width:100%"
                }),
                S = (0, f.Z)("div", {
                    target: "evny8vp4"
                })({
                    name: "1cxtnl2",
                    styles: "display:flex;z-index:4;max-width:100%"
                }),
                T = (0, f.Z)("div", {
                    target: "evny8vp3"
                })({
                    name: "qcoia9",
                    styles: "font-size:0.8em;margin-right:10px;color:hsla(0, 0%, 100%, 0.6);white-space:nowrap;max-width:100%"
                }),
                Z = {
                    name: "1gz2b5f",
                    styles: "overflow:hidden;text-overflow:ellipsis"
                },
                J = (0, f.Z)("div", {
                    target: "evny8vp2"
                })("font-size:1em;color:#fff;max-width:100%;white-space:nowrap;", (function(e) {
                    return e.trimToLength ? Z : ""
                }), ";"),
                D = (0, f.Z)("div", {
                    target: "evny8vp1"
                })({
                    name: "fbo9zu",
                    styles: "position:absolute;z-index:4;top:100%;left:-2px;width:calc(100% + 4px);background-color:#07343f;display:flex;flex-direction:column;border-radius:0 0 3px 3px;border:#086c84 solid 2px;border-top-width:0;text-align:left;max-width:calc(100% + 4px);max-height:310px;overflow-y:auto"
                }),
                R = {
                    name: "1gz2b5f",
                    styles: "overflow:hidden;text-overflow:ellipsis"
                },
                A = {
                    name: "1bmnxg7",
                    styles: "white-space:nowrap"
                },
                M = {
                    name: "1vv75mf",
                    styles: "white-space:wrap"
                },
                z = (0, f.Z)("div", {
                    target: "evny8vp0"
                })("transition:opacity 0.2s ease-in-out;padding:0;background-color:#07343f;cursor:pointer;max-width:100%;", (function(e) {
                    return e.allowMultiline ? M : A
                }), " ", (function(e) {
                    return e.trimToLength ? R : ""
                }), ";"),
                F = a(44869);
            const P = function(e) {
                var t = e.avatarProductData,
                    a = void 0 === t ? null : t,
                    w = e.isEditing,
                    p = void 0 !== w && w,
                    v = e.user,
                    f = e.onDataChange,
                    b = void 0 === f ? function() {} : f,
                    g = e.onNext,
                    x = void 0 === g ? function() {} : g,
                    h = e.onPrevious,
                    E = void 0 === h ? function() {} : h;
                if (null === a && p) return null;
                var y = (0, u.I0)(),
                    k = (0, i.IB)({
                        skip: v
                    }).data,
                    C = (0, u.v9)((function(e) {
                        return e.productFlow
                    })),
                    I = C.productType,
                    X = C.currentProduct,
                    L = C.singleton,
                    S = v || k,
                    T = m.useState(X || a),
                    Z = (0, l.Z)(T, 2),
                    J = Z[0],
                    D = Z[1],
                    R = m.useState(""),
                    A = (0, l.Z)(R, 2),
                    M = (A[0], A[1]),
                    z = (0, m.useState)(J ? null == J ? void 0 : J.thumbnailImageUrl : null),
                    P = (0, l.Z)(z, 2),
                    O = P[0],
                    q = P[1],
                    U = (0, m.useState)(!1),
                    B = (0, l.Z)(U, 2),
                    K = B[0],
                    _ = B[1],
                    W = (0, m.useState)(!1),
                    $ = (0, l.Z)(W, 2),
                    j = $[0],
                    H = $[1],
                    V = (0, c.F6)({
                        user: "me"
                    }, {
                        skip: !S.id || "avatar" !== I || L,
                        refetchOnMountOrArgChange: !0
                    }),
                    G = V.data,
                    Q = V.isFetching,
                    Y = V.isSuccess;
                (0, m.useEffect)((function() {
                    J && b(J)
                }), [J]);
                var ee = (0, m.useMemo)((function() {
                    return Y && G ? function(e) {
                        return e ? e.filter((function(e) {
                            return "public" !== e.releaseStatus
                        })).sort((function(e, t) {
                            return (e.activeAssetReviewId ? 1 : 0) + (e.productId ? 1 : 0) + (e.assetDisabled ? 1 : 0) - ((t.activeAssetReviewId ? 1 : 0) + (t.productId ? 1 : 0) + (t.assetDisabled ? 1 : 0))
                        })) : []
                    }(G) : []
                }), [G, Y]);
                return m.createElement(o.JX, null, !L && m.createElement(o.JX, null, m.createElement("p", {
                    className: "tw-mb-2"
                }, "Select Avatar"), m.createElement(N, {
                    avatars: ee,
                    isLoading: Q,
                    value: null == J ? void 0 : J.name,
                    onChange: function(e) {
                        return function(e) {
                            y((0, s.IR)(e)), D(e)
                        }(e)
                    },
                    onSearch: function(e) {
                        return M(e)
                    }
                }), J && m.createElement("hr", {
                    className: "tw-h-px tw-my-5 tw-bg-[#2D363F] tw-opacity-100 tw-border-0 dark:tw-bg-gray-700"
                })), J && m.createElement(m.Fragment, null, m.createElement(o.qX, {
                    title: "Review and submit to start selling",
                    type: "custom",
                    icon: r.sq,
                    className: "tw-mb-5 tw-mt-0 tw-border-2 tw-rounded-lg",
                    color: "#28434B",
                    iconColor: "#6AE3F9"
                }, m.createElement(o.JX, {
                    className: "tw-ml-[25px]"
                }, m.createElement("p", null, "Before you list your avatar for sale, ensure that it meets our", " ", m.createElement(d.rU, {
                    to: "https://creators.vrchat.com/economy/guidelines",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "hover:tw-text-teal-accent"
                }, "content guidelines"), " ", "and Terms and Conditions. Submit it for review to verify performance, compatibility, and eligibility. Need to edit your avatar? Head over to", " ", m.createElement(d.rU, {
                    to: "/home/avatar/".concat(J.id),
                    className: "hover:tw-text-teal-accent"
                }, "the avatar page"), " ", "to make changes."), j && m.createElement("div", null, m.createElement("p", null, m.createElement("strong", null, "Our review process:")), m.createElement("p", null, m.createElement("ol", null, m.createElement("li", null, m.createElement("strong", null, "Submit for Review"), " - Check your avatar’s information and submit it for review."), m.createElement("li", null, m.createElement("strong", null, "Moderation"), " - The Moderation team will evaluate your avatar’s performance and quality."), m.createElement("li", null, m.createElement("strong", null, "Approval"), " - Once approved, your avatar will appear as a product in My Store."), m.createElement("li", null, m.createElement("strong", null, "List for Sale"), " - After approval, you can include your avatar in listings and start selling!"))), m.createElement("p", null, m.createElement("strong", null, "Why Reviews Matter?"), m.createElement("br", null), "Our review process ensures that all avatars meet the required standards for performance and compatibility, creating a trustworthy marketplace for both sellers and buyers.")), m.createElement("button", {
                    type: "button",
                    className: "tw-bg-transparent tw-border-none tw-text-teal-accent hover:tw-text-white tw-text-left",
                    onClick: function() {
                        return H(!j)
                    }
                }, m.createElement(o.$1, {
                    icon: n._t,
                    size: "xs"
                }), " ", j ? "Read less" : "Read more about our review process"))), m.createElement(F.Z, {
                    avatarData: J,
                    productType: I
                })), m.createElement(o.JX, {
                    className: "tw-mt-8 tw-gap-3 md:tw-flex-row"
                }, m.createElement(o.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: E,
                    neutral: !0
                }, "Back"), m.createElement(o.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: x,
                    disabled: !J
                }, "Next")), m.createElement(o.m6, {
                    preset: "product",
                    image: O,
                    isOpen: K,
                    onClose: function() {
                        return _(!1)
                    },
                    confirmCallback: function(e) {
                        var t = e.fileId,
                            a = void 0 === t ? null : t,
                            l = e.fileBlob,
                            n = void 0 === l ? null : l,
                            r = null !== a;
                        q(null === a && null === n ? null : r ? a : n)
                    },
                    cancelCallBack: function() {
                        return _(!1)
                    },
                    className: "tw-w-[285px] tw-aspect-square"
                }))
            }
        },
        44869: (e, t, a) => {
            a.d(t, {
                Z: () => b
            });
            var l = a(15861),
                n = a(2909),
                r = a(82414),
                o = a(6811),
                i = a(64687),
                c = a.n(i),
                s = a(67294),
                m = a(32981),
                u = a(64258),
                d = a(37463),
                w = a(95896),
                p = a(3620),
                v = a(64358),
                f = new RegExp("^".concat(p.i.AUTHOR));
            const b = function(e) {
                var t, a, i, b, g, x = e.avatarData,
                    h = void 0 === x ? null : x,
                    E = e.productType;
                if (null === h) return null;
                var y = (0, m.I0)(),
                    N = s.useMemo((function() {
                        return null == h ? void 0 : h.tags.filter((function(e) {
                            return e.startsWith(p.i.AUTHOR)
                        })).map((function(e) {
                            return e.replace(f, "")
                        }))
                    }), [null == h ? void 0 : h.tags]),
                    k = function() {
                        var e = (0, l.Z)(c().mark((function e(t, a) {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.stopPropagation(), e.next = 3, (0, v.zp)(a)();
                                    case 3:
                                        y((0, u.d)({
                                            title: "Copied product ID",
                                            icon: o.f8,
                                            message: "Product ID Copied!",
                                            color: "success",
                                            timeout: 3e3
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, a) {
                            return e.apply(this, arguments)
                        }
                    }();
                return s.createElement("form", {
                    className: "tw-w-full"
                }, s.createElement(d.JX, {
                    className: "tw-mb-8"
                }, s.createElement("h2", {
                    className: "tw-text-lg tw-mb-3"
                }, "Avatar Detail"), s.createElement(d.X2, {
                    className: "tw-gap-5 tw-mb-5 tw-flex-col sm:tw-flex-row"
                }, s.createElement(d.JX, null, s.createElement(d.pw, {
                    imageId: h.thumbnailImageUrl,
                    fitToCover: !0,
                    alt: "Product Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                })), s.createElement(d.JX, {
                    className: "tw-flex-1 tw-gap-5"
                }, s.createElement(d.JX, null, s.createElement("label", {
                    htmlFor: "name"
                }, "Product Name"), s.createElement(d.II, {
                    type: "text",
                    inputStyle: {
                        margin: "8px 0"
                    },
                    maxLength: 64,
                    id: "name",
                    value: h.name,
                    disabled: !0
                })), s.createElement(d.X2, {
                    className: "tw-gap-2"
                }, s.createElement(d.JX, {
                    className: "tw-flex-1"
                }, s.createElement("p", {
                    className: "tw-mb-2"
                }, "Primary Style"), !(null !== (t = h.styles) && void 0 !== t && t.primary) && s.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No primary style!"), (null === (a = h.styles) || void 0 === a ? void 0 : a.primary) && s.createElement("div", {
                    className: "tw-mb-0 tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block tw-w-fit"
                }, s.createElement("span", null, h.styles.primary))), s.createElement(d.JX, {
                    className: "tw-flex-1"
                }, s.createElement("p", {
                    className: "tw-mb-2"
                }, "Secondary Style"), !(null !== (i = h.styles) && void 0 !== i && i.secondary) && s.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No secondary style!"), (null === (b = h.styles) || void 0 === b ? void 0 : b.secondary) && s.createElement("div", {
                    className: "tw-mb-0 tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block tw-w-fit"
                }, h.styles.secondary))), s.createElement(d.JX, null, s.createElement("p", {
                    className: "tw-mb-2"
                }, "Tags"), s.createElement(d.X2, {
                    className: "tw-flex-wrap tw-gap-2"
                }, 0 === (null == N ? void 0 : N.length) && s.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No tags!"), null == N ? void 0 : N.map((function(e) {
                    return s.createElement("div", {
                        key: e,
                        className: "tw-leading-none tw-max-h-[50px] tw-break-all tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block"
                    }, s.createElement("span", null, e))
                })))))), s.createElement(d.JX, {
                    className: "tw-gap-5"
                }, h.productId && s.createElement(d.JX, {
                    className: "tw-mb-5"
                }, s.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2 tw-flex tw-flex-row"
                }, "Product ID", s.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1"
                }, s.createElement(d.$1, {
                    icon: r.sq,
                    className: "tw-text-light-grey"
                }), s.createElement("span", {
                    className: "tw-pointer-events-none tw-z-50 tw-absolute tw--top-14 tw--left-20 sm:tw--top-7 sm:tw-left-5 tw-w-[240px] tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50 tw-opacity-0 tw-shadow tw-transition-opacity group-hover:tw-opacity-100"
                }, "This unique ID links your Udon product to the VRChat Worlds SDK, allowing you to track ownership within your world."))), s.createElement(d.X2, {
                    className: "tw-gap-2"
                }, s.createElement(d.II, {
                    type: "text",
                    id: "id",
                    value: h.productId,
                    disabled: !0,
                    className: "tw-flex-1"
                }), s.createElement(d.zx, {
                    type: "button",
                    className: "tw-w-[40px] tw-h-[40px]",
                    onClick: function(e) {
                        return k(e, h.productId)
                    }
                }, s.createElement(d.$1, {
                    icon: n.kZ
                })))), E && s.createElement(d.JX, null, s.createElement("label", {
                    htmlFor: "price",
                    className: "tw-mb-2"
                }, "Product Type"), s.createElement(d.X2, {
                    className: "tw-gap-3"
                }, s.createElement("div", {
                    className: "tw-rounded-full tw-w-[90px] tw-h-[90px] tw-bg-[#303135]"
                }, s.createElement("img", {
                    alt: "udon logo",
                    width: "90",
                    src: w.pK[E].image
                })), s.createElement(d.JX, {
                    className: "tw-items-center tw-justify-center"
                }, s.createElement("p", {
                    className: "tw-mb-0"
                }, s.createElement("strong", null, w.pK[E].label), s.createElement("br", null), w.pK[E].text, s.createElement("br", null), s.createElement("a", {
                    href: w.pK[E].redirect,
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn More"))))), s.createElement(d.JX, null, s.createElement("label", {
                    htmlFor: "description"
                }, "Description"), s.createElement(d.gx, {
                    disabled: !0,
                    type: "textarea",
                    id: "description",
                    inputClassName: "tw-h-[120px] tw-my-2",
                    maxLength: 256,
                    value: h.description
                })), s.createElement(d.JX, null, s.createElement("label", {
                    htmlFor: "acknowledgements"
                }, "Acknowledgements"), s.createElement(d.gx, {
                    disabled: !0,
                    type: "textarea",
                    id: "acknowledgements",
                    inputClassName: "tw-h-[90px] tw-my-2",
                    maxLength: 256,
                    value: null !== (g = null == h ? void 0 : h.acknowledgements) && void 0 !== g ? g : ""
                })))))
            }
        }
    }
]);
//# sourceMappingURL=1b185db3f8ebfe344c09cbd7dbc490e41e698095996e2ba2a6a96be151853b92.js.map