"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9488], {
        89488(e, t, a) {
            a.r(t), a.d(t, {
                default: () => U
            });
            var l = a(82544),
                n = a(79162),
                r = a(6913),
                o = a(71661),
                i = a(13951),
                c = a(95583),
                s = a(89661),
                m = a(96540),
                u = a(6376),
                d = a(84976),
                w = a(58168),
                p = a(64467),
                v = a(80045),
                f = a(70129),
                b = a(43594),
                g = a(75171),
                x = a.n(g),
                h = a(56822),
                E = a(78502),
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
                    A = e.allowMultiline,
                    C = (0, v.A)(e, y),
                    M = m.useState(!1),
                    P = (0, l.A)(M, 2),
                    F = P[0],
                    O = P[1],
                    B = m.useState(""),
                    U = (0, l.A)(B, 2),
                    _ = U[0],
                    q = U[1],
                    W = (0, E.d7)(_),
                    $ = m.useRef(null),
                    j = function(e) {
                        $.current.contains(e.target) || O(!1)
                    },
                    H = m.useMemo(function() {
                        return !1 === F ? (q(""), r) : r.filter(function(e) {
                            return e.name.toLowerCase().includes(W.toLowerCase())
                        })
                    }, [W, F]);
                m.useEffect(function() {
                    return F ? window.addEventListener("click", j) : window.removeEventListener("click", j),
                        function() {
                            window.removeEventListener("click", j)
                        }
                }, [F]);
                var X = r.find(function(e) {
                    return e.name === c
                });
                return m.createElement(T, (0, w.A)({
                    role: "radiogroup",
                    "aria-label": i,
                    ref: $,
                    className: f,
                    onMouseLeave: function() {
                        F && O(!1)
                    }
                }, C), m.createElement(I, {
                    disabled: N,
                    expanded: F
                }, m.createElement(S, {
                    type: "button",
                    "aria-label": "Expand Options",
                    disabled: N,
                    onClick: function(e) {
                        e.stopPropagation(), e.preventDefault(), O(!F)
                    }
                }, m.createElement(k, null, !!i && m.createElement(L, null, i), m.createElement(D, {
                    role: "note",
                    trimToLength: g,
                    title: null !== (t = null == X ? void 0 : X.selectedLabel) && void 0 !== t ? t : null == X ? void 0 : X.label
                }, null !== (a = null == X ? void 0 : X.name) && void 0 !== a ? a : null == X ? void 0 : X.name)), m.createElement(o.M2, {
                    icon: b.xB,
                    color: "white",
                    className: "ms-3"
                })), F && m.createElement(R, null, m.createElement(o.pd, {
                    className: "tw-mb-4 tw-mt-3 tw-px-3 tw-overflow-visible",
                    placeholder: "Search Avatars",
                    onChange: function(e) {
                        return q(e.target.value)
                    },
                    value: _
                }), d && m.createElement("p", {
                    className: "tw-mx-3"
                }, "Loading..."), 0 === H.length && !d && m.createElement("p", {
                    className: "tw-mx-3 tw-mb-3"
                }, "No avatars are available!"), !d && H.map(function(e, t) {
                    var a, l = (null == e ? void 0 : e.productId) || (null == e ? void 0 : e.activeAssetReviewId) || (null == e ? void 0 : e.assetDisabled) || (null == e ? void 0 : e.contentRestrictionId);
                    return m.createElement(m.Fragment, {
                        key: e.id
                    }, m.createElement(z, {
                        role: "radio",
                        "aria-checked": e.id === (null == c ? void 0 : c.id),
                        key: e.id,
                        onClick: l ? void 0 : (a = e, function(e) {
                            e.stopPropagation(), e.preventDefault(), s && s(a), O(!1)
                        }),
                        tabIndex: t,
                        trimToLength: g,
                        title: "string" == typeof e.selectedLabel ? e.selectedLabel : e.label,
                        allowMultiline: A,
                        className: (0, h.cx)("tw-group tw-ease-in-out tw-duration-200 tw-transition-all  hover:tw-bg-[#086c84] first:tw-border-0 tw-border-button-bg tw-border-t tw-border-solid tw-border-x-0 tw-border-y-0 tw-py-2 tw-px-3", (0, p.A)({}, "tw-cursor-not-allowed tw-text-placeholder-text hover:tw-text-placeholder-text", l))
                    }, m.createElement(o.fI, {
                        className: "tw-gap-2 tw-items-center"
                    }, m.createElement(o.Oo, {
                        fitToCover: !0,
                        imageId: null == e ? void 0 : e.imageUrl,
                        alt: null == e ? void 0 : e.name,
                        fallbackSrc: x(),
                        width: 36
                    }), m.createElement(o.fv, {
                        className: "tw-flex-1"
                    }, m.createElement("p", {
                        className: "tw-mb-0 tw-font-bold group-hover:tw-text-white"
                    }, e.name), m.createElement("small", {
                        className: "tw-mb-0 tw-text-placeholder-text transition-all group-hover:tw-text-white"
                    }, "Avatar")), l && m.createElement(o.fv, {
                        className: "tw-flex-1 tw-max-w-[50%]"
                    }, m.createElement("small", {
                        className: "tw-mb-0 tw-break-normal tw-text-placeholder-text group-hover:tw-text-white tw-whitespace-break-spaces"
                    }, function(e) {
                        if (e) return e.contentRestrictionId ? "This avatar is currently disabled. Check your email inbox for more details." : e.productId ? "This avatar is already linked to a product." : e.activeAssetReviewId ? "This avatar is currently under review." : "This avatar is not available."
                    }(e))))))
                }))))
            };
            var k = (0, f.A)("div", {
                    target: "evny8vp7"
                })({
                    name: "jyvlna",
                    styles: "display:flex;align-items:center;max-width:75%"
                }),
                A = {
                    name: "4u0b5g",
                    styles: "border:hsl(0, 0%, 20%) solid 2px;background:hsl(0, 0%, 20%);color:hsl(0, 0%, 60%);&:hover{border:hsl(0, 0%, 20%) solid 2px;background:hsl(0, 0%, 20%);color:hsl(0, 0%, 60%);}"
                },
                C = {
                    name: "1ll5w29",
                    styles: "border-bottom-color:'#07343f'"
                },
                I = (0, f.A)("div", {
                    target: "evny8vp6"
                })("text-align:center;background-color:#064b5c;padding:5px 5px 5px 15px;border:#064b5c solid 2px;color:#ffffff;border-radius:3px;transition:background-color 0.2s ease-in-out;position:relative;display:flex;flex:1;border-radius:", function(e) {
                    return e.expanded ? "3px 3px 0 0" : 3
                }, "px;max-width:100%;&:hover{background-color:#064b5c;border-color:#086c84;}", function(e) {
                    return e.expanded ? C : ""
                }, " ", function(e) {
                    return e.disabled ? A : ""
                }, ";"),
                S = (0, f.A)("button", {
                    target: "evny8vp5"
                })({
                    name: "118t6pa",
                    styles: "border:none;background:transparent;outline:none!important;display:flex;flex:1;flex-direction:row;align-items:center;justify-content:space-between;position:relative;max-width:100%"
                }),
                T = (0, f.A)("div", {
                    target: "evny8vp4"
                })({
                    name: "1cxtnl2",
                    styles: "display:flex;z-index:4;max-width:100%"
                }),
                L = (0, f.A)("div", {
                    target: "evny8vp3"
                })({
                    name: "qcoia9",
                    styles: "font-size:0.8em;margin-right:10px;color:hsla(0, 0%, 100%, 0.6);white-space:nowrap;max-width:100%"
                }),
                M = {
                    name: "1gz2b5f",
                    styles: "overflow:hidden;text-overflow:ellipsis"
                },
                D = (0, f.A)("div", {
                    target: "evny8vp2"
                })("font-size:1em;color:#fff;max-width:100%;white-space:nowrap;", function(e) {
                    return e.trimToLength ? M : ""
                }, ";"),
                R = (0, f.A)("div", {
                    target: "evny8vp1"
                })({
                    name: "fbo9zu",
                    styles: "position:absolute;z-index:4;top:100%;left:-2px;width:calc(100% + 4px);background-color:#07343f;display:flex;flex-direction:column;border-radius:0 0 3px 3px;border:#086c84 solid 2px;border-top-width:0;text-align:left;max-width:calc(100% + 4px);max-height:310px;overflow-y:auto"
                }),
                P = {
                    name: "1gz2b5f",
                    styles: "overflow:hidden;text-overflow:ellipsis"
                },
                F = {
                    name: "1bmnxg7",
                    styles: "white-space:nowrap"
                },
                O = {
                    name: "1vv75mf",
                    styles: "white-space:wrap"
                },
                z = (0, f.A)("div", {
                    target: "evny8vp0"
                })("transition:opacity 0.2s ease-in-out;padding:0;background-color:#07343f;cursor:pointer;max-width:100%;", function(e) {
                    return e.allowMultiline ? O : F
                }, " ", function(e) {
                    return e.trimToLength ? P : ""
                }, ";"),
                B = a(56535);
            const U = function(e) {
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
                var y = (0, u.wA)(),
                    k = (0, i.p$)({
                        skip: v
                    }).data,
                    A = (0, u.d4)(function(e) {
                        return e.productFlow
                    }),
                    C = A.productType,
                    I = A.currentProduct,
                    S = A.singleton,
                    T = v || k,
                    L = m.useState(I || a),
                    M = (0, l.A)(L, 2),
                    D = M[0],
                    R = M[1],
                    P = m.useState(""),
                    F = (0, l.A)(P, 2),
                    O = (F[0], F[1]),
                    z = (0, m.useState)(D ? null == D ? void 0 : D.thumbnailImageUrl : null),
                    U = (0, l.A)(z, 2),
                    _ = U[0],
                    q = U[1],
                    W = (0, m.useState)(!1),
                    $ = (0, l.A)(W, 2),
                    j = $[0],
                    H = $[1],
                    X = (0, m.useState)(!1),
                    G = (0, l.A)(X, 2),
                    K = G[0],
                    V = G[1],
                    J = (0, c.tS)({
                        user: "me"
                    }, {
                        skip: !T.id || "avatar" !== C || S,
                        refetchOnMountOrArgChange: !0
                    }),
                    Q = J.data,
                    Y = J.isFetching,
                    Z = J.isSuccess;
                (0, m.useEffect)(function() {
                    D && b(D)
                }, [D]);
                var ee = (0, m.useMemo)(function() {
                    return Z && Q ? function(e) {
                        return e ? e.filter(function(e) {
                            return "public" !== e.releaseStatus
                        }).sort(function(e, t) {
                            return (e.activeAssetReviewId ? 1 : 0) + (e.productId ? 1 : 0) + (e.assetDisabled ? 1 : 0) - ((t.activeAssetReviewId ? 1 : 0) + (t.productId ? 1 : 0) + (t.assetDisabled ? 1 : 0))
                        }) : []
                    }(Q) : []
                }, [Q, Z]);
                return m.createElement(o.fv, null, !S && m.createElement(o.fv, null, m.createElement("p", {
                    className: "tw-mb-2"
                }, "Select Avatar"), m.createElement(N, {
                    avatars: ee,
                    isLoading: Y,
                    value: null == D ? void 0 : D.name,
                    onChange: function(e) {
                        return function(e) {
                            y((0, s.xl)(e)), R(e)
                        }(e)
                    },
                    onSearch: function(e) {
                        return O(e)
                    }
                }), D && m.createElement("hr", {
                    className: "tw-h-px tw-my-5 tw-bg-[#2D363F] tw-opacity-100 tw-border-0 dark:tw-bg-gray-700"
                })), D && m.createElement(m.Fragment, null, m.createElement(o.$T, {
                    title: "Review and submit to start selling",
                    type: "custom",
                    icon: r.iW,
                    className: "tw-mb-5 tw-mt-0 tw-border-2 tw-rounded-lg",
                    color: "#28434B",
                    iconColor: "#6AE3F9"
                }, m.createElement(o.fv, {
                    className: "tw-ml-[25px]"
                }, m.createElement("p", null, "Before you list your avatar for sale, ensure that it meets our", " ", m.createElement(d.N_, {
                    to: "https://creators.vrchat.com/economy/guidelines",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "hover:tw-text-teal-accent"
                }, "content guidelines"), " ", "and Terms and Conditions. Submit it for review to verify performance, compatibility, and eligibility. Need to edit your avatar? Head over to", " ", m.createElement(d.N_, {
                    to: "/home/avatar/".concat(D.id),
                    className: "hover:tw-text-teal-accent"
                }, "the avatar page"), " ", "to make changes."), K && m.createElement("div", null, m.createElement("p", null, m.createElement("strong", null, "Our review process:")), m.createElement("p", null, m.createElement("ol", null, m.createElement("li", null, m.createElement("strong", null, "Submit for Review"), " - Check your avatar’s information and submit it for review."), m.createElement("li", null, m.createElement("strong", null, "Moderation"), " - The Moderation team will evaluate your avatar’s performance and quality."), m.createElement("li", null, m.createElement("strong", null, "Approval"), " - Once approved, your avatar will appear as a product in My Store."), m.createElement("li", null, m.createElement("strong", null, "List for Sale"), " - After approval, you can include your avatar in listings and start selling!"))), m.createElement("p", null, m.createElement("strong", null, "Why Reviews Matter?"), m.createElement("br", null), "Our review process ensures that all avatars meet the required standards for performance and compatibility, creating a trustworthy marketplace for both sellers and buyers.")), m.createElement("button", {
                    type: "button",
                    className: "tw-bg-transparent tw-border-none tw-text-teal-accent hover:tw-text-white tw-text-left",
                    onClick: function() {
                        return V(!K)
                    }
                }, m.createElement(o.M2, {
                    icon: n.Xk,
                    size: "xs"
                }), " ", K ? "Read less" : "Read more about our review process"))), m.createElement(B.A, {
                    avatarData: D,
                    productType: C
                })), m.createElement(o.fv, {
                    className: "tw-mt-8 tw-gap-3 md:tw-flex-row"
                }, m.createElement(o.$n, {
                    containerClasses: "tw-flex-1",
                    onClick: E,
                    neutral: !0
                }, "Back"), m.createElement(o.$n, {
                    containerClasses: "tw-flex-1",
                    onClick: x,
                    disabled: !D
                }, "Next")), m.createElement(o.L0, {
                    preset: "product",
                    image: _,
                    isOpen: j,
                    onClose: function() {
                        return H(!1)
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
                        return H(!1)
                    },
                    className: "tw-w-[285px] tw-aspect-square"
                }))
            }
        },
        56535(e, t, a) {
            a.d(t, {
                A: () => b
            });
            var l = a(10467),
                n = a(67256),
                r = a(6913),
                o = a(42217),
                i = a(54756),
                c = a.n(i),
                s = a(96540),
                m = a(6376),
                u = a(65950),
                d = a(71661),
                w = a(31069),
                p = a(92737),
                v = a(91069),
                f = new RegExp("^".concat(p.w.AUTHOR));
            const b = function(e) {
                var t, a, i, b, g, x = e.avatarData,
                    h = void 0 === x ? null : x,
                    E = e.productType;
                if (null === h) return null;
                var y = (0, m.wA)(),
                    N = s.useMemo(function() {
                        return null == h ? void 0 : h.tags.filter(function(e) {
                            return e.startsWith(p.w.AUTHOR)
                        }).map(function(e) {
                            return e.replace(f, "")
                        })
                    }, [null == h ? void 0 : h.tags]),
                    k = function() {
                        var e = (0, l.A)(c().mark(function e(t, a) {
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.stopPropagation(), e.next = 3, (0, v.Dk)(a)();
                                    case 3:
                                        y((0, u.X)({
                                            title: "Copied product ID",
                                            icon: o.SG,
                                            message: "Product ID Copied!",
                                            color: "success",
                                            timeout: 3e3
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t, a) {
                            return e.apply(this, arguments)
                        }
                    }();
                return s.createElement("form", {
                    className: "tw-w-full"
                }, s.createElement(d.fv, {
                    className: "tw-mb-8"
                }, s.createElement("h2", {
                    className: "tw-text-lg tw-mb-3"
                }, "Avatar Detail"), s.createElement(d.fI, {
                    className: "tw-gap-5 tw-mb-5 tw-flex-col md:tw-flex-row"
                }, s.createElement(d.fv, null, s.createElement(d.Oo, {
                    imageId: h.thumbnailImageUrl,
                    fitToCover: !0,
                    alt: "Product Thumbnail",
                    width: 285,
                    className: "tw-bg-grey tw-text-[#404C58]"
                })), s.createElement(d.fv, {
                    className: "tw-flex-1 tw-gap-5"
                }, s.createElement(d.fv, null, s.createElement("label", {
                    htmlFor: "name"
                }, "Product Name"), s.createElement(d.pd, {
                    type: "text",
                    inputStyle: {
                        margin: "8px 0"
                    },
                    maxLength: 64,
                    id: "name",
                    value: h.name,
                    disabled: !0
                })), s.createElement(d.fI, {
                    className: "tw-gap-2"
                }, s.createElement(d.fv, {
                    className: "tw-flex-1"
                }, s.createElement("p", {
                    className: "tw-mb-2"
                }, "Primary Style"), !(null !== (t = h.styles) && void 0 !== t && t.primary) && s.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No primary style!"), (null === (a = h.styles) || void 0 === a ? void 0 : a.primary) && s.createElement("div", {
                    className: "tw-mb-0 tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block tw-w-fit"
                }, s.createElement("span", null, h.styles.primary))), s.createElement(d.fv, {
                    className: "tw-flex-1"
                }, s.createElement("p", {
                    className: "tw-mb-2"
                }, "Secondary Style"), !(null !== (i = h.styles) && void 0 !== i && i.secondary) && s.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No secondary style!"), (null === (b = h.styles) || void 0 === b ? void 0 : b.secondary) && s.createElement("div", {
                    className: "tw-mb-0 tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block tw-w-fit"
                }, h.styles.secondary))), s.createElement(d.fv, null, s.createElement("p", {
                    className: "tw-mb-2"
                }, "Tags"), s.createElement(d.fI, {
                    className: "tw-flex-wrap tw-gap-2"
                }, 0 === (null == N ? void 0 : N.length) && s.createElement("small", {
                    className: "tw-text-placeholder-text tw-mb-0 tw-italic"
                }, "No tags!"), null == N ? void 0 : N.map(function(e) {
                    return s.createElement("div", {
                        key: e,
                        className: "tw-leading-none tw-max-h-[50px] tw-break-all tw-p-2 tw-bg-grey tw-rounded-md tw-inline-block"
                    }, s.createElement("span", null, e))
                }))))), s.createElement(d.fv, {
                    className: "tw-gap-5"
                }, h.productId && s.createElement(d.fv, {
                    className: "tw-mb-5"
                }, s.createElement("label", {
                    htmlFor: "id",
                    className: "tw-mb-2 tw-flex tw-flex-row"
                }, "Product ID", s.createElement("div", {
                    className: "tw-group tw-relative tw-ml-1"
                }, s.createElement(d.M2, {
                    icon: r.iW,
                    className: "tw-text-light-grey"
                }), s.createElement("span", {
                    className: "tw-pointer-events-none tw-z-50 tw-absolute tw--top-14 tw--left-20 sm:tw--top-7 sm:tw-left-5 tw-w-[240px] tw-text-xs tw-rounded tw-bg-gray-900 tw-px-2 tw-py-1 tw-font-medium tw-text-gray-50 tw-opacity-0 tw-shadow tw-transition-opacity group-hover:tw-opacity-100"
                }, "This unique ID links your Udon product to the VRChat Worlds SDK, allowing you to track ownership within your world."))), s.createElement(d.fI, {
                    className: "tw-gap-2"
                }, s.createElement(d.pd, {
                    type: "text",
                    id: "id",
                    value: h.productId,
                    disabled: !0,
                    className: "tw-flex-1"
                }), s.createElement(d.$n, {
                    type: "button",
                    className: "tw-w-[40px] tw-h-[40px]",
                    onClick: function(e) {
                        return k(e, h.productId)
                    }
                }, s.createElement(d.M2, {
                    icon: n.jP
                })))), E && s.createElement(d.fv, null, s.createElement("label", {
                    htmlFor: "price",
                    className: "tw-mb-2"
                }, "Product Type"), s.createElement(d.fI, {
                    className: "tw-gap-3"
                }, s.createElement("div", {
                    className: "tw-rounded-full tw-w-[90px] tw-h-[90px] tw-bg-[#303135]"
                }, s.createElement("img", {
                    alt: "udon logo",
                    width: "90",
                    src: w.si[E].image
                })), s.createElement(d.fv, {
                    className: "tw-items-center tw-justify-center"
                }, s.createElement("p", {
                    className: "tw-mb-0"
                }, s.createElement("strong", null, w.si[E].label), s.createElement("br", null), w.si[E].text, s.createElement("br", null), s.createElement("a", {
                    href: w.si[E].redirect,
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn More"))))), s.createElement(d.fv, null, s.createElement("label", {
                    htmlFor: "description"
                }, "Description"), s.createElement(d.TM, {
                    disabled: !0,
                    type: "textarea",
                    id: "description",
                    inputClassName: "tw-h-[120px] tw-my-2",
                    maxLength: 256,
                    value: h.description
                })), s.createElement(d.fv, null, s.createElement("label", {
                    htmlFor: "acknowledgements"
                }, "Acknowledgements"), s.createElement(d.TM, {
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
//# sourceMappingURL=67ce06c70336d298652ebe535c3f5f35116fe18ac2be09d4ca6bda19fc988dec.js.map