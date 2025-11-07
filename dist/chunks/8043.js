"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8043], {
        67371: (e, t, r) => {
            r.d(t, {
                Z: () => T
            });
            var a, n = r(30168),
                o = r(15861),
                i = r(54546),
                s = r(4965),
                l = r(68055),
                c = r(41145),
                u = r(13461),
                d = r(6811),
                p = r(76553),
                v = r(88512),
                m = r(64687),
                f = r.n(m),
                w = r(67294),
                y = r(32981),
                b = r(45697),
                g = r.n(b),
                x = r(83505),
                h = r(70917),
                F = r(64258),
                E = r(95168),
                k = r(22202),
                N = r(13271),
                I = r(751),
                Z = r(96985);
            var S = function(e) {
                var t = e.type,
                    r = void 0 === t ? "world" : t,
                    a = e.contentId,
                    n = e.authorId,
                    s = e.releaseStatus,
                    m = e.className,
                    b = void 0 === m ? "" : m,
                    g = e.neutral,
                    h = (0, y.I0)(),
                    S = (0, E.Tu)().user,
                    T = w.useState(!1),
                    A = (0, i.Z)(T, 2),
                    L = A[0],
                    D = A[1],
                    G = w.useState(null),
                    X = (0, i.Z)(G, 2),
                    $ = X[0],
                    W = X[1],
                    Q = w.useRef(null),
                    H = (0, I.sd)({
                        type: r
                    }, {
                        selectFromResult: function(e) {
                            var t = e.data;
                            return {
                                favoriteInfo: null == t ? void 0 : t.find((function(e) {
                                    return e.favoriteId === a
                                }))
                            }
                        }
                    }),
                    U = H.favoriteInfo,
                    Y = H.isLoading,
                    _ = (0, I.wu)({
                        type: r
                    }),
                    B = _.data,
                    J = _.isLoading,
                    K = (0, k.k5)().data,
                    V = (0, I.Ec)(),
                    ee = (0, i.Z)(V, 2),
                    te = ee[0],
                    re = ee[1].isLoading,
                    ae = (0, I.Xc)(),
                    ne = (0, i.Z)(ae, 2),
                    oe = ne[0],
                    ie = ne[1].isLoading,
                    se = (0, I.zZ)(),
                    le = (0, i.Z)(se, 2),
                    ce = le[0],
                    ue = le[1].isLoading,
                    de = (0, N.S)({
                        type: r
                    }).data,
                    pe = w.useCallback((function(e) {
                        var t;
                        null !== (t = Q.current) && void 0 !== t && t.contains(e.target) || D(!1)
                    }), [Q.current]);
                w.useEffect((function() {
                    return window.addEventListener("click", pe),
                        function() {
                            return window.removeEventListener("click", pe)
                        }
                }), [Q.current]);
                var ve = function() {
                        var e = (0, o.Z)(f().mark((function e() {
                            var t, a, n;
                            return f().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (U) {
                                            e.next = 3;
                                            break
                                        }
                                        return D(!L), e.abrupt("return");
                                    case 3:
                                        return e.next = 5, oe({
                                            id: U.id,
                                            type: r,
                                            groupName: U.tags[0]
                                        }).unwrap();
                                    case 5:
                                        (t = e.sent).error ? h((0, F.d)({
                                            title: "Failed to delete favorite",
                                            icon: p.eH,
                                            message: null !== (a = null === (n = t.error.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== a ? a : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })) : h((0, F.d)({
                                            title: "Favorite Removed",
                                            icon: d.f8,
                                            color: "success",
                                            timeout: 3e3
                                        })), D(!1), W(null);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    me = function(e) {
                        var t, a = null !== (t = null == K ? void 0 : K.maxFavoritesPerGroup[r]) && void 0 !== t ? t : K.defaultMaxFavoritesPerGroup;
                        return (null == B ? void 0 : B[e]) >= a && (h((0, F.d)({
                            title: "Cannot save to a full collection",
                            icon: p.eH,
                            message: "You will need to make space before you can add more favorites to this collection",
                            color: "warning",
                            timeout: 7e3
                        })), !0)
                    },
                    fe = function() {
                        var e = (0, o.Z)(f().mark((function e(t) {
                            var n, o, i;
                            return f().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, te({
                                            type: r,
                                            favoriteId: a,
                                            groupName: t
                                        }).unwrap();
                                    case 2:
                                        (n = e.sent).error ? h((0, F.d)({
                                            title: "Failed to create a favorite",
                                            icon: p.eH,
                                            message: null !== (o = null === (i = n.error.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) && void 0 !== o ? o : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })) : h((0, F.d)({
                                            title: "Favorite Saved to ".concat(de.find((function(e) {
                                                return e.name === t
                                            })).displayName),
                                            icon: d.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    we = function() {
                        var e = (0, o.Z)(f().mark((function e(t) {
                            var n, o, i;
                            return f().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ce({
                                            id: U.id,
                                            type: r,
                                            favoriteId: a,
                                            oldGroupName: U.tags[0],
                                            newGroupName: t
                                        }).unwrap();
                                    case 2:
                                        (n = e.sent).error ? h((0, F.d)({
                                            title: "Failed to move favorite",
                                            icon: p.eH,
                                            message: null !== (o = null === (i = n.error.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) && void 0 !== o ? o : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })) : h((0, F.d)({
                                            title: "Favorite Moved to ".concat(de.find((function(e) {
                                                return e.name === t
                                            })).displayName),
                                            icon: d.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ye = function() {
                        var e = (0, o.Z)(f().mark((function e(t) {
                            var a, n, o;
                            return f().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, oe({
                                            id: U.id,
                                            type: r,
                                            groupName: t
                                        }).unwrap();
                                    case 2:
                                        (a = e.sent).error ? h((0, F.d)({
                                            title: "Failed to delete favorite",
                                            icon: p.eH,
                                            message: null !== (n = null === (o = a.error.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== n ? n : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })) : h((0, F.d)({
                                            title: "Favorite Removed",
                                            icon: d.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                if (w.useEffect((function() {
                        U && W(U.tags[0])
                    }), [U]), Y) return w.createElement(Z.UU, {
                    width: "100%",
                    height: "49px",
                    className: "mt-2"
                });
                var be = U ? u.T : v.T,
                    ge = U ? "Remove Favorite" : "Add to Favorites";
                L && (ge = U ? "Move Favorite" : "Select Collection"), re && (ge = "Adding..."), ie && (ge = "Deleting..."), ue && (ge = "Moving...");
                var xe = re || ie || ue;
                return "private" === s && n !== (null == S ? void 0 : S.id) ? null : w.createElement(j, {
                    ref: Q,
                    className: (0, x.cx)("tw-border-solid tw-border-2", {
                        "hover:tw-border-[#086c84]": !g,
                        "tw-border-2 tw-rounded-b-md tw-rounded-t-none md:tw-rounded-b-none md:tw-rounded-t-md": L,
                        "tw-border-[#086c84]": !g && L,
                        "tw-rounded-md": !L,
                        "tw-border-[#064b5c]": !g && !L
                    }, b),
                    isSelecting: L,
                    neutral: g
                }, w.createElement(Z.X2, {
                    className: "tw-flex-auto tw-justify-center tw-items-center",
                    role: "button",
                    onClick: ve
                }, w.createElement(Z.$1, {
                    icon: be,
                    className: "tw-mx-2"
                }), w.createElement("div", null, ge)), w.createElement(Z.X2, {
                    className: "align-items-center h-100",
                    role: "button",
                    onClick: function() {
                        D(!L)
                    }
                }, w.createElement(P, null), w.createElement(q, {
                    icon: c.pt,
                    rotation: L ? 0 : 180,
                    className: "tw-ml-3 tw-mr-2"
                })), L && w.createElement(O, {
                    className: (0, x.cx)("tw-border-solid tw-select-none", "tw-bottom-[calc(100%+2px)] tw-rounded-t-md tw-border-t-2 tw-rounded-b-none tw-border-b-0", "md:tw-bottom-auto md:tw-top-[calc(100%+2px)] md:tw-rounded-t-none md:tw-rounded-b-md md:tw-border-b-2  md:tw-border-t-0", {
                        "tw-border-[#086c84]": !g
                    })
                }, null == de ? void 0 : de.map((function(e) {
                    var t, a;
                    return w.createElement(C, {
                        key: e.id,
                        onClick: (a = e.name, function() {
                            var e = (0, o.Z)(f().mark((function e(t) {
                                return f().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.stopPropagation(), D(!1), U) {
                                                e.next = 9;
                                                break
                                            }
                                            if (!me(a)) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return e.next = 7, fe(a);
                                        case 7:
                                            return W(a), e.abrupt("return");
                                        case 9:
                                            if (a === U.tags[0]) {
                                                e.next = 16;
                                                break
                                            }
                                            if (!me(a)) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 12:
                                            return e.next = 14, we(a);
                                        case 14:
                                            return W(a), e.abrupt("return");
                                        case 16:
                                            return e.next = 18, ye(a);
                                        case 18:
                                            W(null);
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }())
                    }, w.createElement(Z.X2, {
                        className: "align-items-center"
                    }, w.createElement(R, {
                        isSelected: $ === e.name,
                        icon: l.LE,
                        className: "me-3"
                    }), e.displayName), !J && w.createElement("div", null, null == B ? void 0 : B[e.name], " / ", null !== (t = null == K ? void 0 : K.maxFavoritesPerGroup[r]) && void 0 !== t ? t : 100))
                }))), xe && w.createElement(z, null, w.createElement(M, null)))
            };
            S.propTypes = {
                contentId: g().string.isRequired,
                authorId: g().string.isRequired,
                releaseStatus: g().oneOf(["private", "public", "unlisted"]),
                className: g().string,
                type: g().oneOf(["world", "avatar", "event", "friend"])
            };
            const T = S;
            var A = {
                    name: "c88urt",
                    styles: "border-color:hsl(0, 0%, 40%)"
                },
                L = {
                    name: "ijbj2b",
                    styles: "border-radius:0 0 4px 4px;border-color:#086c84"
                },
                j = (0, s.Z)(Z.X2, {
                    target: "e1o4xuq47"
                })("justify-content:space-between;position:relative;align-items:center;border:#064b5c solid 2px;border-radius:4px;background:#064b5c;color:white;padding:.25em .25em;box-sizing:border-box;position:relative;&:hover{border-color:#086c84;}", (function(e) {
                    return e.isSelecting ? L : ""
                }), " ", (function(e) {
                    var t = e.neutral,
                        r = e.isSelecting;
                    return t ? (0, h.iv)("&,& ", O, "{background:hsl(0, 0%, 20%);color:#fff;border-color:hsl(0, 0%, 20%);", r ? A : "", ";}& ", C, ":hover{background:hsl(0, 0%, 40%);}&:hover,&:active,&:focus{border-color:hsl(0, 0%, 40%);}", "") : ""
                }), ";"),
                P = (0, s.Z)("div", {
                    target: "e1o4xuq46"
                })({
                    name: "kktyj1",
                    styles: "height:100%;position:absolute;background:hsla(0, 0%, 100%, 0.2);width:1px"
                }),
                q = (0, s.Z)(Z.$1, {
                    target: "e1o4xuq45"
                })({
                    name: "crmczs",
                    styles: "transition:transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)"
                }),
                O = (0, s.Z)(Z.JX, {
                    target: "e1o4xuq44"
                })({
                    name: "16b4mze",
                    styles: "position:relative;border:#086c84 solid 2px;border-width:2px 2px 0 2px;border-radius:4px 4px 0 0;background:#064b5c;color:#6ae3f9;box-sizing:border-box;position:absolute;width:calc(100% + 4px);left:-2px;z-index:2;min-height:1rem"
                }),
                C = (0, s.Z)(Z.X2, {
                    target: "e1o4xuq43"
                })({
                    name: "khx7zf",
                    styles: "padding:0.5rem 1rem;align-items:center;transition:background-color 150ms ease-in-out;justify-content:space-between;align-items:center;cursor:pointer;&:hover{background-color:#086c84;svg{opacity:0.5;}}"
                }),
                D = {
                    name: "1d9ftqx",
                    styles: "opacity:1!important"
                },
                R = (0, s.Z)(Z.$1, {
                    shouldForwardProp: function(e) {
                        return "isSelected" !== e
                    },
                    target: "e1o4xuq42"
                })("opacity:0;", (function(e) {
                    return e.isSelected ? D : ""
                }), ";"),
                z = (0, s.Z)("div", {
                    target: "e1o4xuq41"
                })({
                    name: "m6phxa",
                    styles: "position:absolute;width:100%;height:2px;border-radius:0 0 4px 4px;overflow:hidden;bottom:0;left:0"
                }),
                G = (0, h.F4)(a || (a = (0, n.Z)(["\n  0% {\n    left: -100%;\n    width: 80%;\n  }\n\n  100% {\n    left: 100%;\n    width: 40%;\n  }\n"]))),
                M = (0, s.Z)("div", {
                    target: "e1o4xuq40"
                })("position:absolute;z-index:10;bottom:0;height:2px;background-color:var(--bs-success);animation-name:", G, ";animation-iteration-count:infinite;animation-duration:1.5s;animation-timing-function:ease-in-out;")
        },
        64537: (e, t, r) => {
            r.d(t, {
                Z: () => E
            });
            var a, n = r(87462),
                o = r(4942),
                i = r(15861),
                s = r(45987),
                l = r(2909),
                c = r(7747),
                u = r(53359),
                d = r(64687),
                p = r.n(d),
                v = r(67294),
                m = r(32981),
                f = r(64258),
                w = r(86646),
                y = r(50048),
                b = ["url", "text", "title", "files", "style", "shareLabel", "copyLabel", "displayLabel"];

            function g(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function x(e) {
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
            var h = !(null === (a = navigator.clipboard) || void 0 === a || !a.writeText),
                F = !!navigator.canShare;
            const E = function(e) {
                var t = e.url,
                    r = e.text,
                    a = e.title,
                    o = e.files,
                    d = e.style,
                    g = e.shareLabel,
                    E = void 0 === g ? "Share" : g,
                    k = e.copyLabel,
                    N = void 0 === k ? "Copy" : k,
                    I = e.displayLabel,
                    Z = void 0 !== I && I,
                    S = (0, s.Z)(e, b),
                    T = (0, m.I0)(),
                    A = v.useMemo((function() {
                        return F && navigator.canShare({
                            url: t,
                            text: r,
                            title: a,
                            files: o
                        })
                    }), [F, t, r, a, o]);
                if (!h && !F) return null;
                var L = function() {
                        var e = (0, i.Z)(p().mark((function e() {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, navigator.clipboard.writeText([a, r, t].filter(Boolean).join("\n"));
                                    case 2:
                                        T((0, f.d)({
                                            title: "Copied to clipboard",
                                            icon: l.kZ,
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
                    j = function() {
                        var e = (0, i.Z)(p().mark((function e(n) {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n.preventDefault(), !A) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.prev = 2, e.next = 5, navigator.share({
                                            url: t,
                                            text: r,
                                            title: a,
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
                                        T((0, f.d)({
                                            title: "Something went wrong",
                                            icon: u.faTriangleExclamation,
                                            message: "Copying to clipboard instead",
                                            color: "danger",
                                            timeout: 5e3
                                        })), L(), e.next = 15;
                                        break;
                                    case 14:
                                        throw e.t0;
                                    case 15:
                                        e.next = 18;
                                        break;
                                    case 17:
                                        L();
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
                    P = A ? E : N,
                    q = A ? c.Dr : l.kZ;
                return v.createElement(y.ZP, (0, n.Z)({
                    neutral: !0,
                    style: x({
                        lineHeight: "1"
                    }, d)
                }, S, {
                    title: P,
                    onClick: j
                }), v.createElement(w.Z, {
                    icon: q,
                    className: Z && "tw-mr-1"
                }), Z && P)
            }
        },
        95643: (e, t, r) => {
            r.d(t, {
                Z: () => y
            });
            var a = r(22984),
                n = r(35117),
                o = r(82414),
                i = r(96985),
                s = r(69181),
                l = r(51806),
                c = r.n(l),
                u = r(27484),
                d = r.n(u),
                p = r(45697),
                v = r.n(p),
                m = r(67294),
                f = r(79655),
                w = function(e) {
                    var t = e.productData,
                        r = void 0 === t ? null : t,
                        l = e.className,
                        u = e.hasAlreadyPurchased,
                        p = void 0 !== u && u,
                        v = e.alreadyPurchasedData,
                        w = void 0 === v ? null : v,
                        y = e.listingData,
                        b = void 0 === y ? null : y,
                        g = d()(null == w ? void 0 : w.expiry).year() > 9e3,
                        x = "duration" === (null == b ? void 0 : b.listingType),
                        h = null == b ? void 0 : b.stackable,
                        F = !(null != r && r.assetDisabled) && r;
                    return m.createElement("div", {
                        className: "tw-rounded-lg tw-bg-grey tw-flex tw-p-3 tw-flex-col ".concat(l)
                    }, p && null !== w ? x && h ? g ? m.createElement("div", {
                        className: " tw-flex tw-flex-col sm:tw-flex-row tw-bg-dark-teal tw-rounded-lg tw-border-highlight tw-border-solid tw-border-0 tw-border-l-4 tw-mb-4 tw-p-3 tw-justify-between tw-items-center "
                    }, m.createElement("div", {
                        className: "tw-flex tw-flex-row"
                    }, m.createElement(i.$1, {
                        icon: o.sq,
                        size: "1x",
                        className: "tw-text-highlight tw-mt-1 tw-mr-2"
                    }), m.createElement("div", {
                        className: "tw-flex tw-flex-col tw-justify-start tw-items-start"
                    }, m.createElement("h2", {
                        className: "tw-text-xs"
                    }, "You already have access to this product."), m.createElement("p", {
                        className: "tw-text-xs tw-mb-0"
                    }, "Purchasing will have no effect.")))) : m.createElement("div", {
                        className: " tw-flex tw-flex-col sm:tw-flex-row tw-bg-dark-teal tw-rounded-lg tw-border-highlight tw-border-solid tw-border-0 tw-border-l-4 tw-mb-4 tw-p-3 tw-justify-between tw-items-center "
                    }, m.createElement("div", {
                        className: "tw-flex tw-flex-row"
                    }, m.createElement(i.$1, {
                        icon: o.sq,
                        size: "1x",
                        className: "tw-text-highlight tw-mt-1 tw-mr-2"
                    }), m.createElement("div", {
                        className: "tw-flex tw-flex-col tw-justify-start tw-items-start"
                    }, m.createElement("h2", {
                        className: "tw-text-xs"
                    }, "You already have access to this product."), m.createElement("p", {
                        className: "tw-text-xs tw-mb-0"
                    }, "Expires at ", d()(null == w ? void 0 : w.expiry).format("llll"), ".")))) : m.createElement("div", {
                        className: " tw-flex tw-flex-col sm:tw-flex-row tw-bg-dark-teal tw-rounded-lg tw-border-highlight tw-border-solid tw-border-0 tw-border-l-4 tw-mb-4 tw-p-3 tw-justify-between tw-items-center "
                    }, m.createElement("div", {
                        className: "tw-flex tw-flex-row"
                    }, m.createElement(i.$1, {
                        icon: o.sq,
                        size: "1x",
                        className: "tw-text-highlight tw-mt-1 tw-mr-2"
                    }), m.createElement("div", {
                        className: "tw-flex tw-flex-col tw-justify-start tw-items-start"
                    }, m.createElement("h2", {
                        className: "tw-text-xs"
                    }, "You already have access to this product."), m.createElement("p", {
                        className: "tw-text-xs tw-mb-0"
                    }, "Purchasing will have no effect.")))) : null, !F && m.createElement(m.Fragment, null, m.createElement(i.qX, {
                        type: "warn",
                        title: m.createElement("small", null, "This avatar is unavailable due to an issue."),
                        className: "tw-mt-0"
                    }, m.createElement("small", null, "Please check your email or notifications for more information.")), m.createElement(i.X2, {
                        className: "tw-gap-3 tw-items-center"
                    }, m.createElement("div", {
                        className: "tw-bg-hr-line-color tw-w-14 tw-h-14 tw-rounded-sm tw-p-2 tw-text-[#404c58]"
                    }, m.createElement(i.$1, {
                        icon: n.faBan,
                        className: "tw-w-full tw-h-full"
                    })), m.createElement("h6", {
                        className: "tw-p-0 tw-flex-auto tw-m-0 tw-text-placeholder-text"
                    }, "Unavailable Product"))), F && m.createElement("div", {
                        className: "tw-flex tw-w-full ".concat(p ? "tw-opacity-30" : "tw-opacity-100")
                    }, m.createElement(s.Z, {
                        alt: null == r ? void 0 : r.displayName,
                        imageId: null == r ? void 0 : r.imageId,
                        fallbackSrc: c(),
                        className: "tw-w-14 tw-h-14 tw-rounded-sm tw-bg-transparent",
                        fitToCover: !0
                    }), m.createElement("div", {
                        className: "tw-flex-1 tw-flex-col tw-justify-start tw-text-left tw-px-2 tw-w-2/3"
                    }, m.createElement("h4", {
                        className: "tw-text-white tw-text-[16px] tw-truncate"
                    }, null == r ? void 0 : r.displayName), m.createElement("p", {
                        className: "tw-text-light-grey tw-text-xs tw-mb-0 tw-text-ellipsis tw-overflow-hidden tw-break-words tw-line-clamp-3 tw-max-h-[3rem]"
                    }, null == r ? void 0 : r.description)), "avatar" === (null == r ? void 0 : r.productType) && m.createElement("div", {
                        className: "tw-flex tw-items-center tw-justify-center"
                    }, m.createElement(f.rU, {
                        to: "/home/avatar/".concat(r.avatarId),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "tw-text-white tw-px-2 tw-py-1 tw-rounded tw-h-9 tw-w-9 tw-bg-button-bg-grey hover:tw-bg-dark-grey tw-items-center tw-justify-center tw-flex",
                        title: "Go to Avatar"
                    }, m.createElement(i.$1, {
                        icon: a.t3
                    })))))
                };
            w.propTypes = {
                productId: v().string,
                className: v().string
            };
            const y = w
        },
        751: (e, t, r) => {
            r.d(t, {
                Ec: () => d,
                Xc: () => p,
                oy: () => w,
                sd: () => m,
                wu: () => v,
                zZ: () => f
            });
            var a = r(15861),
                n = r(42138),
                o = r(64687),
                i = r.n(o),
                s = r(3845);

            function l(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return c(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var a = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    s = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        s = !0, o = e
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            }

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }
            var u = r(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getFavorites: e.query({
                                query: function(e) {
                                    var t = e.n,
                                        r = void 0 === t ? 50 : t,
                                        a = e.offset;
                                    return {
                                        url: "favorites",
                                        params: {
                                            n: r,
                                            offset: void 0 === a ? 0 : a,
                                            type: e.type,
                                            tag: e.tag,
                                            tags: e.tags,
                                            notag: e.notag,
                                            ownerId: e.ownerId
                                        }
                                    }
                                },
                                providesTags: function(e) {
                                    return e ? [].concat((0, n.Z)(e.map((function(e) {
                                        return {
                                            type: "Favorites",
                                            id: e.id
                                        }
                                    }))), [{
                                        type: "Favorites",
                                        id: "PARTIAL-LIST"
                                    }]) : [{
                                        type: "Favorites",
                                        id: "PARTIAL-LIST"
                                    }]
                                }
                            }),
                            getAllFavorites: e.query({
                                queryFn: (o = (0, a.Z)(i().mark((function e(t, r, a, o) {
                                    var s, l, c, u, d, p, v, m;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                s = t.type, l = t.tag, c = t.tags, u = t.notag, d = t.ownerId, p = [], v = 0;
                                            case 3:
                                                return e.next = 6, o({
                                                    url: "favorites",
                                                    params: {
                                                        n: 50,
                                                        offset: v,
                                                        type: s,
                                                        tag: l,
                                                        tags: c,
                                                        notag: u,
                                                        ownerId: d
                                                    }
                                                });
                                            case 6:
                                                if (!(m = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: m.error
                                                });
                                            case 9:
                                                if (!(m.data.length > 0)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return p.push.apply(p, (0, n.Z)(m.data)), v += 50, e.abrupt("continue", 3);
                                            case 13:
                                                return e.abrupt("break", 16);
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: p
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, t, r, a) {
                                    return o.apply(this, arguments)
                                }),
                                providesTags: function(e) {
                                    return e ? [].concat((0, n.Z)(e.map((function(e) {
                                        return {
                                            type: "Favorites",
                                            id: e.id
                                        }
                                    }))), [{
                                        type: "Favorites",
                                        id: "LIST"
                                    }]) : [{
                                        type: "Favorites",
                                        id: "LIST"
                                    }]
                                }
                            }),
                            getAllFavoriteCounts: e.query({
                                queryFn: (r = (0, a.Z)(i().mark((function e(t, r, a, n) {
                                    var o, s, c, u, d, p, v, m;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                o = t.type, s = t.ownerId, c = {}, u = 0;
                                            case 3:
                                                return e.next = 6, n({
                                                    url: "favorites",
                                                    params: {
                                                        n: 50,
                                                        offset: u,
                                                        type: o,
                                                        ownerId: s
                                                    }
                                                });
                                            case 6:
                                                if (!(d = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: d.error
                                                });
                                            case 9:
                                                if (!(d.data.length > 0)) {
                                                    e.next = 14;
                                                    break
                                                }
                                                p = l(d.data);
                                                try {
                                                    for (p.s(); !(v = p.n()).done;) m = v.value, c[m.tags[0]] ? c[m.tags[0]] += 1 : c[m.tags[0]] = 1
                                                } catch (e) {
                                                    p.e(e)
                                                } finally {
                                                    p.f()
                                                }
                                                return u += 50, e.abrupt("continue", 3);
                                            case 14:
                                                return e.abrupt("break", 17);
                                            case 17:
                                                return e.abrupt("return", {
                                                    data: c
                                                });
                                            case 18:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, t, a, n) {
                                    return r.apply(this, arguments)
                                }),
                                providesTags: function(e, t, r) {
                                    return [{
                                        type: "FavoritesCount",
                                        id: r.type
                                    }]
                                }
                            }),
                            createFavorite: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "favorites",
                                        method: "POST",
                                        body: {
                                            type: e.type,
                                            favoriteId: e.favoriteId,
                                            tags: [e.groupName]
                                        }
                                    }
                                },
                                onQueryStarted: function(e, t) {
                                    var r = e.type,
                                        a = e.favoriteId,
                                        n = e.groupName,
                                        o = t.dispatch,
                                        i = t.queryFulfilled,
                                        l = o(u.util.updateQueryData("getAllFavorites", {
                                            type: r
                                        }, (function(e) {
                                            e && (-1 === e.findIndex((function(e) {
                                                return e.favoriteId === a
                                            })) && e.push({
                                                id: "fvrt_".concat((0, s.Z)()),
                                                type: r,
                                                favoriteId: a,
                                                tags: [n]
                                            }))
                                        })));
                                    i.catch(l.undo)
                                },
                                invalidatesTags: function(e, t, r) {
                                    var a = r.type,
                                        o = r.groupName;
                                    return t ? [] : [{
                                        type: "Favorites",
                                        id: "PARTIAL-LIST"
                                    }, {
                                        type: "Favorites",
                                        id: "LIST"
                                    }, {
                                        type: "FavoritesCount",
                                        id: a
                                    }].concat((0, n.Z)("world" === a ? [{
                                        type: "FavoriteWorlds",
                                        id: o
                                    }, {
                                        type: "FavoriteWorlds",
                                        id: "all"
                                    }] : []), (0, n.Z)("avatar" === a ? [{
                                        type: "FavoriteAvatars",
                                        id: o
                                    }, {
                                        type: "FavoriteAvatars",
                                        id: "all"
                                    }] : []), (0, n.Z)("friend" === a ? [{
                                        type: "FavoriteFriends",
                                        id: "all"
                                    }] : []))
                                }
                            }),
                            deleteFavorite: e.mutation({
                                query: function(e) {
                                    var t = e.id;
                                    e.type, e.groupName;
                                    return {
                                        url: "favorites/".concat(t),
                                        method: "DELETE"
                                    }
                                },
                                onQueryStarted: function(e, t) {
                                    var r = e.id,
                                        a = e.type,
                                        n = e.groupName,
                                        o = t.dispatch,
                                        i = t.queryFulfilled,
                                        s = o(u.util.updateQueryData("getAllFavorites", {
                                            type: a
                                        }, (function(e) {
                                            if (e) {
                                                var t = e.findIndex((function(e) {
                                                    return e.id === r && e.type === a && e.tags.includes(n)
                                                })); - 1 !== t && e.splice(t, 1)
                                            }
                                        })));
                                    i.catch(s.undo)
                                },
                                invalidatesTags: function(e, t, r) {
                                    var a = r.id,
                                        o = r.type,
                                        i = r.groupName;
                                    return t ? [] : [{
                                        type: "Favorites",
                                        id: a
                                    }, {
                                        type: "Favorites",
                                        id: "PARTIAL-LIST"
                                    }, {
                                        type: "Favorites",
                                        id: "LIST"
                                    }, {
                                        type: "FavoritesCount",
                                        id: o
                                    }].concat((0, n.Z)("world" === o ? [{
                                        type: "FavoriteWorlds",
                                        id: i
                                    }, {
                                        type: "FavoriteWorlds",
                                        id: "all"
                                    }] : []), (0, n.Z)("avatar" === o ? [{
                                        type: "FavoriteAvatars",
                                        id: i
                                    }, {
                                        type: "FavoriteAvatars",
                                        id: "all"
                                    }] : []), (0, n.Z)("friend" === o ? [{
                                        type: "FavoriteFriends",
                                        id: "all"
                                    }] : []))
                                }
                            }),
                            moveFavorite: e.mutation({
                                queryFn: (t = (0, a.Z)(i().mark((function e(t, r, a, n) {
                                    var o, s, l, c, u, d, p;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return o = t.id, s = t.type, l = t.favoriteId, c = t.oldGroupName, u = t.newGroupName, t.silent, e.next = 3, n({
                                                    url: "favorites/".concat(o),
                                                    method: "DELETE"
                                                });
                                            case 3:
                                                if (!(d = e.sent).error) {
                                                    e.next = 6;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: d.error
                                                });
                                            case 6:
                                                return e.next = 8, n({
                                                    url: "favorites",
                                                    method: "POST",
                                                    body: {
                                                        type: s,
                                                        favoriteId: l,
                                                        tags: [u]
                                                    }
                                                });
                                            case 8:
                                                if (!(p = e.sent).error) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return e.next = 12, n({
                                                    url: "favorites",
                                                    method: "POST",
                                                    body: {
                                                        type: s,
                                                        favoriteId: l,
                                                        tags: [c]
                                                    }
                                                });
                                            case 12:
                                                return e.abrupt("return", {
                                                    error: p.error
                                                });
                                            case 13:
                                                return e.abrupt("return", {
                                                    data: p.data
                                                });
                                            case 14:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, r, a, n) {
                                    return t.apply(this, arguments)
                                }),
                                invalidatesTags: function(e, t, r) {
                                    var a = r.id,
                                        o = r.type,
                                        i = r.oldGroupName,
                                        s = r.newGroupName;
                                    return r.silent ? [] : [{
                                        type: "Favorites",
                                        id: a
                                    }, {
                                        type: "Favorites",
                                        id: "PARTIAL-LIST"
                                    }, {
                                        type: "Favorites",
                                        id: "LIST"
                                    }, {
                                        type: "FavoritesCount",
                                        id: o
                                    }].concat((0, n.Z)("world" === o ? [{
                                        type: "FavoriteWorlds",
                                        id: i
                                    }, {
                                        type: "FavoriteWorlds",
                                        id: s
                                    }, {
                                        type: "FavoriteWorlds",
                                        id: "all"
                                    }] : []), (0, n.Z)("avatar" === o ? [{
                                        type: "FavoriteAvatars",
                                        id: i
                                    }, {
                                        type: "FavoriteAvatars",
                                        id: s
                                    }, {
                                        type: "FavoriteAvatars",
                                        id: "all"
                                    }] : []), (0, n.Z)("friend" === o ? [{
                                        type: "FavoriteFriends",
                                        id: "all"
                                    }] : []))
                                }
                            }),
                            reloadFavorites: e.mutation({
                                queryFn: function(e) {
                                    e.type;
                                    return {
                                        data: null
                                    }
                                },
                                invalidatesTags: function(e, t, r) {
                                    var a = r.type;
                                    return [{
                                        type: "Favorites",
                                        id: "PARTIAL-LIST"
                                    }, {
                                        type: "Favorites",
                                        id: "LIST"
                                    }, {
                                        type: "FavoritesCount",
                                        id: a
                                    }].concat((0, n.Z)("world" === a ? ["FavoriteWorlds"] : []), (0, n.Z)("avatar" === a ? ["FavoriteAvatars"] : []), (0, n.Z)("friend" === a ? ["FavoriteFriends"] : []))
                                }
                            })
                        };
                        var t, r, o
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["Favorites", "FavoritesCount"]
                }),
                d = u.useCreateFavoriteMutation,
                p = u.useDeleteFavoriteMutation,
                v = u.useGetAllFavoriteCountsQuery,
                m = u.useGetAllFavoritesQuery,
                f = (u.useGetFavoritesQuery, u.useMoveFavoriteMutation),
                w = u.useReloadFavoritesMutation
        }
    }
]);
//# sourceMappingURL=3d267b3836b8a96b42b6b980114f3518d4cb86c2565a5236cb5029bb00910859.js.map