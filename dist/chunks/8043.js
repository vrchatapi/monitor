"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8043], {
        67371: (e, t, r) => {
            r.d(t, {
                Z: () => P
            });
            var n, a = r(30168),
                o = r(15861),
                i = r(54546),
                l = r(4965),
                s = r(41145),
                c = r(13461),
                u = r(76553),
                d = r(6811),
                w = r(88512),
                m = r(64687),
                p = r.n(m),
                f = r(64258),
                v = r(83505),
                b = r(70917),
                x = r(751),
                g = r(45697),
                h = r.n(g),
                y = r(67294),
                E = r(32981),
                N = r(85327),
                k = r(74392),
                Z = r(96273),
                j = r(12027),
                O = r(96985);
            var S = function(e) {
                var t = e.type,
                    r = void 0 === t ? "world" : t,
                    n = e.contentId,
                    a = e.authorId,
                    l = e.releaseStatus,
                    m = e.className,
                    b = void 0 === m ? "" : m,
                    g = e.neutral,
                    h = (0, E.I0)(),
                    S = (0, k.c)(),
                    P = S.currentUser,
                    F = (S.isVrcPlusUser, S.isChurnedVrcPlusUser, S.isNeverHadVrcPlusUser, y.useState(!1)),
                    I = (0, i.Z)(F, 2),
                    T = I[0],
                    G = I[1],
                    U = y.useState(null),
                    H = (0, i.Z)(U, 2),
                    M = H[0],
                    $ = H[1],
                    R = y.useRef(null),
                    A = !!Z.N4[r],
                    V = (0, x.sd)({
                        type: r
                    }),
                    Y = V.data,
                    X = V.isLoading,
                    _ = V.isSuccess,
                    B = y.useMemo((function() {
                        return !(!_ || !Y) && Y.find((function(e) {
                            return e.favoriteId === n
                        }))
                    }), [Y, _, n]),
                    J = A && _ && !B,
                    K = (0, x.sd)({
                        type: Z.N4[r]
                    }, {
                        skip: !J
                    }),
                    Q = K.data,
                    W = K.isLoading,
                    ee = K.isSuccess,
                    te = y.useMemo((function() {
                        return B || (ee && Q ? Q.find((function(e) {
                            return e.favoriteId === n
                        })) : null)
                    }), [B, ee, Q, n]),
                    re = X || J && W,
                    ne = (0, x.Ec)(),
                    ae = (0, i.Z)(ne, 2),
                    oe = ae[0],
                    ie = ae[1].isLoading,
                    le = (0, x.Xc)(),
                    se = (0, i.Z)(le, 2),
                    ce = se[0],
                    ue = se[1].isLoading,
                    de = (0, x.zZ)(),
                    we = (0, i.Z)(de, 2),
                    me = we[0],
                    pe = we[1].isLoading,
                    fe = (0, N.r)(r),
                    ve = fe.favoriteGroups,
                    be = fe.isLoading || re,
                    xe = y.useCallback((function(e) {
                        var t;
                        null !== (t = R.current) && void 0 !== t && t.contains(e.target) || G(!1)
                    }), [R.current]);
                y.useEffect((function() {
                    return window.addEventListener("click", xe),
                        function() {
                            return window.removeEventListener("click", xe)
                        }
                }), [R.current]);
                var ge = function() {
                        var e = (0, o.Z)(p().mark((function e() {
                            var t, r;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (te) {
                                            e.next = 3;
                                            break
                                        }
                                        return G(!T), e.abrupt("return");
                                    case 3:
                                        return e.prev = 3, e.next = 6, ce({
                                            id: te.id,
                                            type: ye(te.tags[0]),
                                            groupName: te.tags[0]
                                        }).unwrap();
                                    case 6:
                                        h((0, f.d)({
                                            title: "Favorite Removed",
                                            icon: d.f8,
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 12;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(3), h((0, f.d)({
                                            title: "Failed to delete favorite",
                                            icon: u.eH,
                                            message: null !== (t = null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== t ? t : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        }));
                                    case 12:
                                        G(!1), $(null);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 9]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    he = function() {
                        var e = (0, o.Z)(p().mark((function e(t) {
                            var r, a, o;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.name, t.type, e.prev = 1, e.next = 4, oe({
                                            type: ye(r),
                                            favoriteId: n,
                                            groupName: r
                                        }).unwrap();
                                    case 4:
                                        e.next = 9;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), h((0, f.d)({
                                            title: "Failed to create a favorite",
                                            icon: u.eH,
                                            message: null !== (a = null === (o = e.t0.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        }));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ye = function(e) {
                        var t = ve.find((function(t) {
                            return t.name === e
                        }));
                        return null != t && t.isVrcPlus ? Z.N4[r] : r
                    },
                    Ee = function() {
                        var e = (0, o.Z)(p().mark((function e(t) {
                            var r, a;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, me({
                                            id: n,
                                            type: ye(t),
                                            favoriteId: n,
                                            oldGroupName: te.tags[0],
                                            newGroupName: t
                                        }).unwrap();
                                    case 3:
                                        h((0, f.d)({
                                            title: "Favorite Moved to ".concat(ve.find((function(e) {
                                                return e.name === t
                                            })).displayName),
                                            icon: d.f8,
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.error("Failed to move favorite", e.t0), h((0, f.d)({
                                            title: "Failed to move favorite",
                                            icon: u.eH,
                                            message: null !== (r = null === (a = e.t0.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        }));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 6]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ne = function() {
                        var e = (0, o.Z)(p().mark((function e(t) {
                            var r, n;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        try {
                                            ce({
                                                id: te.id,
                                                type: ye(t),
                                                groupName: t
                                            }).unwrap(), h((0, f.d)({
                                                title: "Favorite Removed",
                                                icon: d.f8,
                                                color: "success",
                                                timeout: 3e3
                                            }))
                                        } catch (e) {
                                            h((0, f.d)({
                                                title: "Failed to delete favorite",
                                                icon: u.eH,
                                                message: null !== (r = null === (n = e.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : "Something went wrong",
                                                color: "error",
                                                timeout: 3e3
                                            }))
                                        }
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ke = function() {
                        var e = (0, o.Z)(p().mark((function e(t) {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (G(!1), !((null == t ? void 0 : t.numFavorites) >= (null == t ? void 0 : t.maxFavoritesPerGroup))) {
                                            e.next = 5;
                                            break
                                        }
                                        return h((0, f.d)({
                                            title: "Cannot save to a full collection",
                                            icon: u.eH,
                                            message: "You will need to make space before you can add more favorites to this collection",
                                            color: "warning",
                                            timeout: 7e3
                                        })), e.abrupt("return");
                                    case 5:
                                        if (te) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.next = 8, he(t);
                                    case 8:
                                        return $(t.name), e.abrupt("return");
                                    case 10:
                                        if (t.name === te.tags[0]) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.next = 13, Ee(t.name);
                                    case 13:
                                        return $(t.name), e.abrupt("return");
                                    case 15:
                                        return e.next = 17, Ne(t.name);
                                    case 17:
                                        $(null);
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                if (y.useEffect((function() {
                        te && $(te.tags[0])
                    }), [te]), be) return y.createElement(O.UU, {
                    width: "100%",
                    height: "49px",
                    className: "mt-2"
                });
                var Ze = te ? c.T : w.T,
                    je = te ? "Remove Favorite" : "Add to Favorites";
                T && (je = te ? "Move Favorite" : "Select Collection"), ie && (je = "Adding..."), ue && (je = "Deleting..."), pe && (je = "Moving...");
                var Oe = ie || ue || pe;
                return "private" === l && a !== (null == P ? void 0 : P.id) ? null : y.createElement(C, {
                    ref: R,
                    className: (0, v.cx)("tw-border-solid tw-border-2", {
                        "hover:tw-border-[#086c84]": !g,
                        "tw-border-2 tw-rounded-b-md tw-rounded-t-none md:tw-rounded-b-none md:tw-rounded-t-md": T,
                        "tw-border-[#086c84]": !g && T,
                        "tw-rounded-md": !T,
                        "tw-border-[#064b5c]": !g && !T
                    }, b),
                    isSelecting: T,
                    neutral: g
                }, y.createElement("button", {
                    className: "tw-flex tw-flex-auto tw-justify-center tw-items-center tw-bg-transparent tw-border-none tw-px-0",
                    type: "button",
                    onClick: ge
                }, y.createElement(O.$1, {
                    icon: Ze,
                    className: "tw-mx-2"
                }), y.createElement("div", null, je)), y.createElement("button", {
                    className: "tw-flex tw-align-items-center tw-h-100 tw-bg-transparent tw-border-none tw-px-0",
                    type: "button",
                    onClick: function() {
                        G(!T)
                    }
                }, y.createElement(L, null), y.createElement(q, {
                    icon: s.pt,
                    rotation: T ? 0 : 180,
                    className: "tw-ml-3 tw-mr-2"
                })), y.createElement(j.Z, {
                    favoriteGroups: ve,
                    selectedGroup: M,
                    onGroupClick: ke,
                    className: (0, v.cx)("tw-border-solid tw-select-none", "tw-bottom-[calc(100%+2px)] tw-rounded-t-md tw-border-t-2 tw-rounded-b-none tw-border-b-0", "md:tw-bottom-auto md:tw-top-[calc(100%+2px)] md:tw-rounded-t-none md:tw-rounded-b-md md:tw-border-b-2 md:tw-border-t-0", {
                        "tw-border-[#086c84]": !g
                    }),
                    neutral: g,
                    isOpen: T,
                    type: r
                }), Oe && y.createElement(D, null, y.createElement(z, null)))
            };
            S.propTypes = {
                contentId: h().string.isRequired,
                authorId: h().string.isRequired,
                releaseStatus: h().oneOf(["private", "public", "unlisted"]),
                className: h().string,
                type: h().oneOf(["world", "avatar", "event", "friend"])
            };
            const P = S;
            var F = {
                    name: "151ctie",
                    styles: "background:hsl(0, 0%, 20%);color:#fff;border-color:hsl(0, 0%, 20%);&:hover,&:active,&:focus{border-color:hsl(0, 0%, 40%);}"
                },
                I = {
                    name: "ijbj2b",
                    styles: "border-radius:0 0 4px 4px;border-color:#086c84"
                },
                C = (0, l.Z)("div", {
                    target: "e1o4xuq44"
                })("display:flex;justify-content:space-between;position:relative;align-items:center;border:#064b5c solid 2px;border-radius:4px;background:#064b5c;color:white;padding:.25em .25em;box-sizing:border-box;position:relative;&:hover{border-color:#086c84;}", (function(e) {
                    return e.isSelecting ? I : ""
                }), " ", (function(e) {
                    return e.neutral ? F : ""
                }), ";"),
                L = (0, l.Z)("div", {
                    target: "e1o4xuq43"
                })({
                    name: "17m2ql",
                    styles: "height:100%;position:absolute;background:hsla(0, 0%, 100%, 0.2);width:1px;top:0"
                }),
                q = (0, l.Z)(O.$1, {
                    target: "e1o4xuq42"
                })({
                    name: "crmczs",
                    styles: "transition:transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)"
                }),
                D = (0, l.Z)("div", {
                    target: "e1o4xuq41"
                })({
                    name: "m6phxa",
                    styles: "position:absolute;width:100%;height:2px;border-radius:0 0 4px 4px;overflow:hidden;bottom:0;left:0"
                }),
                T = (0, b.F4)(n || (n = (0, a.Z)(["\n  0% {\n    left: -100%;\n    width: 80%;\n  }\n\n  100% {\n    left: 100%;\n    width: 40%;\n  }\n"]))),
                z = (0, l.Z)("div", {
                    target: "e1o4xuq40"
                })("position:absolute;z-index:10;bottom:0;height:2px;background-color:var(--bs-success);animation-name:", T, ";animation-iteration-count:infinite;animation-duration:1.5s;animation-timing-function:ease-in-out;")
        },
        64537: (e, t, r) => {
            r.d(t, {
                Z: () => N
            });
            var n, a = r(87462),
                o = r(4942),
                i = r(15861),
                l = r(45987),
                s = r(2909),
                c = r(7747),
                u = r(53359),
                d = r(64687),
                w = r.n(d),
                m = r(67294),
                p = r(32981),
                f = r(64258),
                v = r(86646),
                b = r(50048),
                x = ["url", "text", "title", "files", "style", "shareLabel", "copyLabel", "displayLabel"];

            function g(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var y = !(null === (n = navigator.clipboard) || void 0 === n || !n.writeText),
                E = !!navigator.canShare;
            const N = function(e) {
                var t = e.url,
                    r = e.text,
                    n = e.title,
                    o = e.files,
                    d = e.style,
                    g = e.shareLabel,
                    N = void 0 === g ? "Share" : g,
                    k = e.copyLabel,
                    Z = void 0 === k ? "Copy" : k,
                    j = e.displayLabel,
                    O = void 0 !== j && j,
                    S = (0, l.Z)(e, x),
                    P = (0, p.I0)(),
                    F = m.useMemo((function() {
                        return E && navigator.canShare({
                            url: t,
                            text: r,
                            title: n,
                            files: o
                        })
                    }), [E, t, r, n, o]);
                if (!y && !E) return null;
                var I = function() {
                        var e = (0, i.Z)(w().mark((function e() {
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, navigator.clipboard.writeText([n, r, t].filter(Boolean).join("\n"));
                                    case 2:
                                        P((0, f.d)({
                                            title: "Copied to clipboard",
                                            icon: s.kZ,
                                            color: "success",
                                            timeout: 5e3
                                        }));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    C = function() {
                        var e = (0, i.Z)(w().mark((function e(a) {
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a.preventDefault(), !F) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.prev = 2, e.next = 5, navigator.share({
                                            url: t,
                                            text: r,
                                            title: n,
                                            files: o
                                        });
                                    case 5:
                                        e.next = 15;
                                        break;
                                    case 7:
                                        if (e.prev = 7, e.t0 = e.catch(2), !(e.t0 instanceof DOMException && "InvalidStateError" === e.t0.name)) {
                                            e.next = 14;
                                            break
                                        }
                                        P((0, f.d)({
                                            title: "Something went wrong",
                                            icon: u.faTriangleExclamation,
                                            message: "Copying to clipboard instead",
                                            color: "danger",
                                            timeout: 5e3
                                        })), I(), e.next = 15;
                                        break;
                                    case 14:
                                        throw e.t0;
                                    case 15:
                                        e.next = 18;
                                        break;
                                    case 17:
                                        I();
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 7]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    L = F ? N : Z,
                    q = F ? c.Dr : s.kZ;
                return m.createElement(b.ZP, (0, a.Z)({
                    neutral: !0,
                    style: h({
                        lineHeight: "1"
                    }, d)
                }, S, {
                    title: L,
                    onClick: C
                }), m.createElement(v.Z, {
                    icon: q,
                    className: O && "tw-mr-1"
                }), O && L)
            }
        },
        95643: (e, t, r) => {
            r.d(t, {
                Z: () => b
            });
            var n = r(22984),
                a = r(35117),
                o = r(82414),
                i = r(96985),
                l = r(69181),
                s = r(51806),
                c = r.n(s),
                u = r(27484),
                d = r.n(u),
                w = r(45697),
                m = r.n(w),
                p = r(67294),
                f = r(79655),
                v = function(e) {
                    var t = e.productData,
                        r = void 0 === t ? null : t,
                        s = e.className,
                        u = e.hasAlreadyPurchased,
                        w = void 0 !== u && u,
                        m = e.alreadyPurchasedData,
                        v = void 0 === m ? null : m,
                        b = e.listingData,
                        x = void 0 === b ? null : b,
                        g = d()(null == v ? void 0 : v.expiry).year() > 9e3,
                        h = "duration" === (null == x ? void 0 : x.listingType),
                        y = null == x ? void 0 : x.stackable,
                        E = !(null != r && r.assetDisabled) && r;
                    return p.createElement("div", {
                        className: "tw-rounded-lg tw-bg-grey tw-flex tw-p-3 tw-flex-col ".concat(s)
                    }, w && null !== v ? h && y ? g ? p.createElement("div", {
                        className: " tw-flex tw-flex-col sm:tw-flex-row tw-bg-dark-teal tw-rounded-lg tw-border-highlight tw-border-solid tw-border-0 tw-border-l-4 tw-mb-4 tw-p-3 tw-justify-between tw-items-center "
                    }, p.createElement("div", {
                        className: "tw-flex tw-flex-row"
                    }, p.createElement(i.$1, {
                        icon: o.sq,
                        size: "1x",
                        className: "tw-text-highlight tw-mt-1 tw-mr-2"
                    }), p.createElement("div", {
                        className: "tw-flex tw-flex-col tw-justify-start tw-items-start"
                    }, p.createElement("h2", {
                        className: "tw-text-xs"
                    }, "You already have access to this product."), p.createElement("p", {
                        className: "tw-text-xs tw-mb-0"
                    }, "Purchasing will have no effect.")))) : p.createElement("div", {
                        className: " tw-flex tw-flex-col sm:tw-flex-row tw-bg-dark-teal tw-rounded-lg tw-border-highlight tw-border-solid tw-border-0 tw-border-l-4 tw-mb-4 tw-p-3 tw-justify-between tw-items-center "
                    }, p.createElement("div", {
                        className: "tw-flex tw-flex-row"
                    }, p.createElement(i.$1, {
                        icon: o.sq,
                        size: "1x",
                        className: "tw-text-highlight tw-mt-1 tw-mr-2"
                    }), p.createElement("div", {
                        className: "tw-flex tw-flex-col tw-justify-start tw-items-start"
                    }, p.createElement("h2", {
                        className: "tw-text-xs"
                    }, "You already have access to this product."), p.createElement("p", {
                        className: "tw-text-xs tw-mb-0"
                    }, "Expires at ", d()(null == v ? void 0 : v.expiry).format("llll"), ".")))) : p.createElement("div", {
                        className: " tw-flex tw-flex-col sm:tw-flex-row tw-bg-dark-teal tw-rounded-lg tw-border-highlight tw-border-solid tw-border-0 tw-border-l-4 tw-mb-4 tw-p-3 tw-justify-between tw-items-center "
                    }, p.createElement("div", {
                        className: "tw-flex tw-flex-row"
                    }, p.createElement(i.$1, {
                        icon: o.sq,
                        size: "1x",
                        className: "tw-text-highlight tw-mt-1 tw-mr-2"
                    }), p.createElement("div", {
                        className: "tw-flex tw-flex-col tw-justify-start tw-items-start"
                    }, p.createElement("h2", {
                        className: "tw-text-xs"
                    }, "You already have access to this product."), p.createElement("p", {
                        className: "tw-text-xs tw-mb-0"
                    }, "Purchasing will have no effect.")))) : null, !E && p.createElement(p.Fragment, null, p.createElement(i.qX, {
                        type: "warn",
                        title: p.createElement("small", null, "This avatar is unavailable due to an issue."),
                        className: "tw-mt-0"
                    }, p.createElement("small", null, "Please check your email or notifications for more information.")), p.createElement(i.X2, {
                        className: "tw-gap-3 tw-items-center"
                    }, p.createElement("div", {
                        className: "tw-bg-hr-line-color tw-w-14 tw-h-14 tw-rounded-sm tw-p-2 tw-text-[#404c58]"
                    }, p.createElement(i.$1, {
                        icon: a.faBan,
                        className: "tw-w-full tw-h-full"
                    })), p.createElement("h6", {
                        className: "tw-p-0 tw-flex-auto tw-m-0 tw-text-placeholder-text"
                    }, "Unavailable Product"))), E && p.createElement("div", {
                        className: "tw-flex tw-w-full ".concat(w ? "tw-opacity-30" : "tw-opacity-100")
                    }, p.createElement(l.Z, {
                        alt: null == r ? void 0 : r.displayName,
                        imageId: null == r ? void 0 : r.imageId,
                        fallbackSrc: c(),
                        className: "tw-w-14 tw-h-14 tw-rounded-sm tw-bg-transparent",
                        fitToCover: !0
                    }), p.createElement("div", {
                        className: "tw-flex-1 tw-flex-col tw-justify-start tw-text-left tw-px-2 tw-w-2/3"
                    }, p.createElement("h4", {
                        className: "tw-text-white tw-text-[16px] tw-truncate"
                    }, null == r ? void 0 : r.displayName), p.createElement("p", {
                        className: "tw-text-light-grey tw-text-xs tw-mb-0 tw-text-ellipsis tw-overflow-hidden tw-break-words tw-line-clamp-3 tw-max-h-[3rem]"
                    }, null == r ? void 0 : r.description)), "avatar" === (null == r ? void 0 : r.productType) && p.createElement("div", {
                        className: "tw-flex tw-items-center tw-justify-center"
                    }, p.createElement(f.rU, {
                        to: "/home/avatar/".concat(r.avatarId),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "tw-text-white tw-px-2 tw-py-1 tw-rounded tw-h-9 tw-w-9 tw-bg-button-bg-grey hover:tw-bg-dark-grey tw-items-center tw-justify-center tw-flex",
                        title: "Go to Avatar"
                    }, p.createElement(i.$1, {
                        icon: n.t3
                    })))))
                };
            v.propTypes = {
                productId: m().string,
                className: m().string
            };
            const b = v
        }
    }
]);
//# sourceMappingURL=d0689afa2355ca4d383dd3258535332c13b2f170bc21f8b3dd6dc4181e6a8a7a.js.map