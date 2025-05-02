"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2172], {
        42172: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => F
            });
            var l = a(54546),
                n = a(65394),
                r = a(82414),
                o = a(14411),
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
                g = a(71421),
                b = a(67263),
                x = a(83505),
                E = a(12752),
                h = ["avatars", "label", "value", "onChange", "isLoading", "onSearch", "className", "trimToLength", "disabled", "allowMultiline"];
            const y = function(e) {
                var t, a, n = e.avatars,
                    r = void 0 === n ? [] : n,
                    i = e.label,
                    c = e.value,
                    s = e.onChange,
                    u = e.isLoading,
                    d = void 0 !== u && u,
                    f = (e.onSearch, e.className),
                    y = e.trimToLength,
                    k = e.disabled,
                    C = e.allowMultiline,
                    Z = (0, v.Z)(e, h),
                    M = m.useState(!1),
                    D = (0, l.Z)(M, 2),
                    z = D[0],
                    R = D[1],
                    F = m.useState(""),
                    P = (0, l.Z)(F, 2),
                    O = P[0],
                    q = P[1],
                    U = (0, E.Nr)(O),
                    B = m.useRef(null),
                    K = function(e) {
                        B.current.contains(e.target) || R(!1)
                    },
                    W = m.useMemo((function() {
                        return !1 === z ? (q(""), r) : r.filter((function(e) {
                            return e.name.toLowerCase().includes(U.toLowerCase())
                        }))
                    }), [U, z]);
                m.useEffect((function() {
                    return z ? window.addEventListener("click", K) : window.removeEventListener("click", K),
                        function() {
                            window.removeEventListener("click", K)
                        }
                }), [z]);
                var $ = r.find((function(e) {
                    return e.name === c
                }));
                return m.createElement(X, (0, w.Z)({
                    role: "radiogroup",
                    "aria-label": i,
                    ref: B,
                    className: f,
                    onMouseLeave: function() {
                        z && R(!1)
                    }
                }, Z), m.createElement(I, {
                    disabled: k,
                    expanded: z
                }, m.createElement(S, {
                    type: "button",
                    "aria-label": "Expand Options",
                    disabled: k,
                    onClick: function(e) {
                        e.stopPropagation(), e.preventDefault(), R(!z)
                    }
                }, m.createElement(N, null, !!i && m.createElement(L, null, i), m.createElement(T, {
                    role: "note",
                    trimToLength: y,
                    title: null !== (t = null == $ ? void 0 : $.selectedLabel) && void 0 !== t ? t : null == $ ? void 0 : $.label
                }, null !== (a = null == $ ? void 0 : $.name) && void 0 !== a ? a : null == $ ? void 0 : $.name)), m.createElement(o.$1, {
                    icon: g.eW,
                    color: "white",
                    className: "ms-3"
                })), z && m.createElement(J, null, m.createElement(o.II, {
                    className: "tw-mb-4 tw-mt-3 tw-px-3 tw-overflow-visible",
                    placeholder: "Search Avatars",
                    onChange: function(e) {
                        return q(e.target.value)
                    },
                    value: O
                }), d && m.createElement("p", {
                    className: "tw-mx-3"
                }, "Loading..."), 0 === W.length && !d && m.createElement("p", {
                    className: "tw-mx-3 tw-mb-3"
                }, "No avatars are available!"), !d && W.map((function(e, t) {
                    return m.createElement(m.Fragment, {
                        key: e.id
                    }, m.createElement(A, {
                        role: "radio",
                        "aria-checked": e.id === (null == c ? void 0 : c.id),
                        key: e.id,
                        onClick: (a = e, function(e) {
                            e.stopPropagation(), e.preventDefault(), s && s(a), R(!1)
                        }),
                        tabIndex: t,
                        trimToLength: y,
                        title: "string" == typeof e.selectedLabel ? e.selectedLabel : e.label,
                        allowMultiline: C,
                        className: (0, x.cx)("tw-group tw-ease-in-out tw-duration-200 tw-transition-all hover:tw-bg-[#086c84] first:tw-border-0 tw-border-button-bg tw-border-t tw-border-solid tw-border-x-0 tw-border-y-0 tw-py-2 tw-px-3", (0, p.Z)({}, "tw-cursor-not-allowed tw-text-placeholder-text", !1))
                    }, m.createElement(o.X2, {
                        className: "tw-gap-2 tw-items-center"
                    }, m.createElement(o.pw, {
                        fitToCover: !0,
                        imageId: null == e ? void 0 : e.imageUrl,
                        alt: null == e ? void 0 : e.name,
                        fallbackSrc: b,
                        width: 36
                    }), m.createElement(o.JX, {
                        className: "tw-flex-1"
                    }, m.createElement("p", {
                        className: "tw-mb-0 tw-font-bold"
                    }, e.name), m.createElement("small", {
                        className: "tw-mb-0 tw-text-placeholder-text transition-all group-hover:tw-text-white"
                    }, "Avatar")), !1)));
                    var a
                })))))
            };
            var N = (0, f.Z)("div", {
                    target: "evny8vp7"
                })({
                    name: "jyvlna",
                    styles: "display:flex;align-items:center;max-width:75%"
                }),
                k = {
                    name: "4u0b5g",
                    styles: "border:hsl(0, 0%, 20%) solid 2px;background:hsl(0, 0%, 20%);color:hsl(0, 0%, 60%);&:hover{border:hsl(0, 0%, 20%) solid 2px;background:hsl(0, 0%, 20%);color:hsl(0, 0%, 60%);}"
                },
                C = {
                    name: "1ll5w29",
                    styles: "border-bottom-color:'#07343f'"
                },
                I = (0, f.Z)("div", {
                    target: "evny8vp6"
                })("text-align:center;background-color:#064b5c;padding:5px 5px 5px 15px;border:#064b5c solid 2px;color:#ffffff;border-radius:3px;transition:background-color 0.2s ease-in-out;position:relative;display:flex;flex:1;border-radius:", (function(e) {
                    return e.expanded ? "3px 3px 0 0" : 3
                }), "px;max-width:100%;&:hover{background-color:#064b5c;border-color:#086c84;}", (function(e) {
                    return e.expanded ? C : ""
                }), " ", (function(e) {
                    return e.disabled ? k : ""
                }), ";"),
                S = (0, f.Z)("button", {
                    target: "evny8vp5"
                })({
                    name: "118t6pa",
                    styles: "border:none;background:transparent;outline:none!important;display:flex;flex:1;flex-direction:row;align-items:center;justify-content:space-between;position:relative;max-width:100%"
                }),
                X = (0, f.Z)("div", {
                    target: "evny8vp4"
                })({
                    name: "1cxtnl2",
                    styles: "display:flex;z-index:4;max-width:100%"
                }),
                L = (0, f.Z)("div", {
                    target: "evny8vp3"
                })({
                    name: "qcoia9",
                    styles: "font-size:0.8em;margin-right:10px;color:hsla(0, 0%, 100%, 0.6);white-space:nowrap;max-width:100%"
                }),
                Z = {
                    name: "1gz2b5f",
                    styles: "overflow:hidden;text-overflow:ellipsis"
                },
                T = (0, f.Z)("div", {
                    target: "evny8vp2"
                })("font-size:1em;color:#fff;max-width:100%;white-space:nowrap;", (function(e) {
                    return e.trimToLength ? Z : ""
                }), ";"),
                J = (0, f.Z)("div", {
                    target: "evny8vp1"
                })({
                    name: "fbo9zu",
                    styles: "position:absolute;z-index:4;top:100%;left:-2px;width:calc(100% + 4px);background-color:#07343f;display:flex;flex-direction:column;border-radius:0 0 3px 3px;border:#086c84 solid 2px;border-top-width:0;text-align:left;max-width:calc(100% + 4px);max-height:310px;overflow-y:auto"
                }),
                M = {
                    name: "1gz2b5f",
                    styles: "overflow:hidden;text-overflow:ellipsis"
                },
                D = {
                    name: "1bmnxg7",
                    styles: "white-space:nowrap"
                },
                z = {
                    name: "1vv75mf",
                    styles: "white-space:wrap"
                },
                A = (0, f.Z)("div", {
                    target: "evny8vp0"
                })("transition:opacity 0.2s ease-in-out;padding:0;background-color:#07343f;cursor:pointer;max-width:100%;", (function(e) {
                    return e.allowMultiline ? z : D
                }), " ", (function(e) {
                    return e.trimToLength ? M : ""
                }), ";"),
                R = a(44869);
            const F = function(e) {
                var t = e.avatarProductData,
                    a = void 0 === t ? null : t,
                    w = e.isEditing,
                    p = void 0 !== w && w,
                    v = e.user,
                    f = e.onDataChange,
                    g = void 0 === f ? function() {} : f,
                    b = e.onNext,
                    x = void 0 === b ? function() {} : b,
                    E = e.onPrevious,
                    h = void 0 === E ? function() {} : E;
                if (null === a && p) return null;
                var N = (0, u.I0)(),
                    k = (0, i.IB)({
                        skip: v
                    }).data,
                    C = (0, u.v9)((function(e) {
                        return e.productFlow
                    })),
                    I = C.productType,
                    S = C.currentProduct,
                    X = C.singleton,
                    L = v || k,
                    Z = m.useState(S || a),
                    T = (0, l.Z)(Z, 2),
                    J = T[0],
                    M = T[1],
                    D = m.useState(""),
                    z = (0, l.Z)(D, 2),
                    A = (z[0], z[1]),
                    F = (0, m.useState)(J ? null == J ? void 0 : J.thumbnailImageUrl : null),
                    P = (0, l.Z)(F, 2),
                    O = P[0],
                    q = P[1],
                    U = (0, m.useState)(!1),
                    B = (0, l.Z)(U, 2),
                    K = B[0],
                    W = B[1],
                    $ = (0, m.useState)(!1),
                    _ = (0, l.Z)($, 2),
                    j = _[0],
                    H = _[1],
                    V = (0, c.F6)({
                        user: "me"
                    }, {
                        skip: !L.id || "avatar" !== I || X,
                        refetchOnMountOrArgChange: !0
                    }),
                    G = V.data,
                    Q = V.isFetching,
                    Y = V.isSuccess;
                (0, m.useEffect)((function() {
                    J && g(J)
                }), [J]);
                var ee = (0, m.useMemo)((function() {
                    return Y && G ? function(e) {
                        return e ? e.filter((function(e) {
                            return "public" !== e.releaseStatus && !e.productId && (null === e.activeAssetReviewId || void 0 === e.activeAssetReviewId)
                        })) : []
                    }(G) : []
                }), [G, Y]);
                return m.createElement(o.JX, null, !X && m.createElement(o.JX, null, m.createElement("p", {
                    className: "tw-mb-2"
                }, "Select Avatar"), m.createElement(y, {
                    avatars: ee,
                    isLoading: Q,
                    value: null == J ? void 0 : J.name,
                    onChange: function(e) {
                        return function(e) {
                            N((0, s.IR)(e)), M(e)
                        }(e)
                    },
                    onSearch: function(e) {
                        return A(e)
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
                }, m.createElement("p", null, "To list your avatar for sale, it must meet our Marketplace Standards and Terms and Conditions. Submit it for review to verify performance, compatibility, and eligibility. Need to edit your avatar? Head over to", " ", m.createElement(d.rU, {
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
                }), " ", j ? "Read less" : "Read more about our review process"))), m.createElement(R.Z, {
                    avatarData: J,
                    productType: I
                })), m.createElement(o.JX, {
                    className: "tw-mt-8 tw-gap-3 md:tw-flex-row"
                }, m.createElement(o.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: h,
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
                        return W(!1)
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
                        return W(!1)
                    },
                    className: "tw-w-[285px] tw-aspect-square"
                }))
            }
        },
        44869: (e, t, a) => {
            a.d(t, {
                Z: () => g
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
                d = a(14411),
                w = a(95896),
                p = a(3620),
                v = a(64358),
                f = new RegExp("^".concat(p.i.AUTHOR));
            const g = function(e) {
                var t, a, i, g, b, x = e.avatarData,
                    E = void 0 === x ? null : x,
                    h = e.productType;
                if (null === E) return null;
                var y = (0, m.I0)(),
                    N = s.useMemo((function() {
                        return null == E ? void 0 : E.tags.filter((function(e) {
                            return e.startsWith(p.i.AUTHOR)
                        })).map((function(e) {
                            return e.replace(f, "")
                        }))
                    }), [null == E ? void 0 : E.tags]),
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
                    imageId: E.thumbnailImageUrl,
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
                    value: E.name,
                    disabled: !0
                })), s.createElement(d.X2, {
                    className: "tw-gap-2"
                }, s.createElement(d.JX, {
                    className: "tw-flex-1"
                }, s.createElement("p", {
                    className: "tw-mb-2"
                }, "Primary Style"), !(null !== (t = E.styles) && void 0 !== t && t.primary) && s.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No primary style!"), (null === (a = E.styles) || void 0 === a ? void 0 : a.primary) && s.createElement("div", {
                    className: "tw-mb-0 tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block tw-w-fit"
                }, s.createElement("span", null, E.styles.primary))), s.createElement(d.JX, {
                    className: "tw-flex-1"
                }, s.createElement("p", {
                    className: "tw-mb-2"
                }, "Secondary Style"), !(null !== (i = E.styles) && void 0 !== i && i.secondary) && s.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No secondary style!"), (null === (g = E.styles) || void 0 === g ? void 0 : g.secondary) && s.createElement("div", {
                    className: "tw-mb-0 tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block tw-w-fit"
                }, E.styles.secondary))), s.createElement(d.JX, null, s.createElement("p", {
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
                }, E.productId && s.createElement(d.JX, {
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
                    value: E.productId,
                    disabled: !0,
                    className: "tw-flex-1"
                }), s.createElement(d.zx, {
                    type: "button",
                    className: "tw-w-[40px] tw-h-[40px]",
                    onClick: function(e) {
                        return k(e, E.productId)
                    }
                }, s.createElement(d.$1, {
                    icon: n.kZ
                })))), h && s.createElement(d.JX, null, s.createElement("label", {
                    htmlFor: "price",
                    className: "tw-mb-2"
                }, "Product Type"), s.createElement(d.X2, {
                    className: "tw-gap-3"
                }, s.createElement("div", {
                    className: "tw-rounded-full tw-w-[90px] tw-h-[90px] tw-bg-[#303135]"
                }, s.createElement("img", {
                    alt: "udon logo",
                    width: "90",
                    src: w.pK[h].image
                })), s.createElement(d.JX, {
                    className: "tw-items-center tw-justify-center"
                }, s.createElement("p", {
                    className: "tw-mb-0"
                }, s.createElement("strong", null, w.pK[h].label), s.createElement("br", null), w.pK[h].text, s.createElement("br", null), s.createElement("a", {
                    href: w.pK[h].redirect,
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
                    value: E.description
                })), s.createElement(d.JX, null, s.createElement("label", {
                    htmlFor: "acknowledgements"
                }, "Acknowledgements"), s.createElement(d.gx, {
                    disabled: !0,
                    type: "textarea",
                    id: "acknowledgements",
                    inputClassName: "tw-h-[90px] tw-my-2",
                    maxLength: 256,
                    value: null !== (b = null == E ? void 0 : E.acknowledgements) && void 0 !== b ? b : ""
                })))))
            }
        }
    }
]);
//# sourceMappingURL=aa78c7fe75071c65f96d4581e8133c4164d9f5855991a3e8faeedebbe0f7381a.js.map