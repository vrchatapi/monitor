"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3348], {
        67371: (e, t, r) => {
            r.d(t, {
                Z: () => P
            });
            var n, a = r(30168),
                o = r(15861),
                l = r(54546),
                i = r(4965),
                c = r(41145),
                s = r(13461),
                u = r(76553),
                d = r(6811),
                w = r(88512),
                m = r(64687),
                p = r.n(m),
                f = r(64258),
                v = r(83505),
                b = r(70917),
                x = r(751),
                h = r(45697),
                g = r.n(h),
                y = r(67294),
                E = r(32981),
                k = r(85327),
                N = r(74392),
                Z = r(96273),
                j = r(12027),
                O = r(80988);
            var S = function(e) {
                var t = e.type,
                    r = void 0 === t ? "world" : t,
                    n = e.contentId,
                    a = e.authorId,
                    i = e.releaseStatus,
                    m = e.className,
                    b = void 0 === m ? "" : m,
                    h = e.neutral,
                    g = (0, E.I0)(),
                    S = (0, N.c)(),
                    P = S.currentUser,
                    C = (S.isVrcPlusUser, S.isChurnedVrcPlusUser, S.isNeverHadVrcPlusUser, y.useState(!1)),
                    F = (0, l.Z)(C, 2),
                    T = F[0],
                    G = F[1],
                    U = y.useState(null),
                    H = (0, l.Z)(U, 2),
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
                    ae = (0, l.Z)(ne, 2),
                    oe = ae[0],
                    le = ae[1].isLoading,
                    ie = (0, x.Xc)(),
                    ce = (0, l.Z)(ie, 2),
                    se = ce[0],
                    ue = ce[1].isLoading,
                    de = (0, x.zZ)(),
                    we = (0, l.Z)(de, 2),
                    me = we[0],
                    pe = we[1].isLoading,
                    fe = (0, k.r)(r),
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
                var he = function() {
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
                                        return e.prev = 3, e.next = 6, se({
                                            id: te.id,
                                            type: ye(te.tags[0]),
                                            groupName: te.tags[0]
                                        }).unwrap();
                                    case 6:
                                        g((0, f.d)({
                                            title: "Favorite Removed",
                                            icon: d.f8,
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 12;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(3), g((0, f.d)({
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
                    ge = function() {
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
                                        e.prev = 6, e.t0 = e.catch(1), g((0, f.d)({
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
                                        g((0, f.d)({
                                            title: "Favorite Moved to ".concat(ve.find((function(e) {
                                                return e.name === t
                                            })).displayName),
                                            icon: d.f8,
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.error("Failed to move favorite", e.t0), g((0, f.d)({
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
                    ke = function() {
                        var e = (0, o.Z)(p().mark((function e(t) {
                            var r, n;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        try {
                                            se({
                                                id: te.id,
                                                type: ye(t),
                                                groupName: t
                                            }).unwrap(), g((0, f.d)({
                                                title: "Favorite Removed",
                                                icon: d.f8,
                                                color: "success",
                                                timeout: 3e3
                                            }))
                                        } catch (e) {
                                            g((0, f.d)({
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
                    Ne = function() {
                        var e = (0, o.Z)(p().mark((function e(t) {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (G(!1), !((null == t ? void 0 : t.numFavorites) >= (null == t ? void 0 : t.maxFavoritesPerGroup))) {
                                            e.next = 5;
                                            break
                                        }
                                        return g((0, f.d)({
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
                                        return e.next = 8, ge(t);
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
                                        return e.next = 17, ke(t.name);
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
                var Ze = te ? s.T : w.T,
                    je = te ? "Remove Favorite" : "Add to Favorites";
                T && (je = te ? "Move Favorite" : "Select Collection"), le && (je = "Adding..."), ue && (je = "Deleting..."), pe && (je = "Moving...");
                var Oe = le || ue || pe;
                return "private" === i && a !== (null == P ? void 0 : P.id) ? null : y.createElement(D, {
                    ref: R,
                    className: (0, v.cx)("tw-border-solid tw-border-2", {
                        "hover:tw-border-[#086c84]": !h,
                        "tw-border-2 tw-rounded-b-md tw-rounded-t-none md:tw-rounded-b-none md:tw-rounded-t-md": T,
                        "tw-border-[#086c84]": !h && T,
                        "tw-rounded-md": !T,
                        "tw-border-[#064b5c]": !h && !T
                    }, b),
                    isSelecting: T,
                    neutral: h
                }, y.createElement("button", {
                    className: "tw-flex tw-flex-auto tw-justify-center tw-items-center tw-bg-transparent tw-border-none tw-px-0",
                    type: "button",
                    onClick: he
                }, y.createElement(O.$1, {
                    icon: Ze,
                    className: "tw-mx-2"
                }), y.createElement("div", null, je)), y.createElement("button", {
                    className: "tw-flex tw-align-items-center tw-h-100 tw-bg-transparent tw-border-none tw-px-0",
                    type: "button",
                    onClick: function() {
                        G(!T)
                    }
                }, y.createElement(I, null), y.createElement(L, {
                    icon: c.pt,
                    rotation: T ? 0 : 180,
                    className: "tw-ml-3 tw-mr-2"
                })), y.createElement(j.Z, {
                    favoriteGroups: ve,
                    selectedGroup: M,
                    onGroupClick: Ne,
                    className: (0, v.cx)("tw-border-solid tw-select-none", "tw-bottom-[calc(100%+2px)] tw-rounded-t-md tw-border-t-2 tw-rounded-b-none tw-border-b-0", "md:tw-bottom-auto md:tw-top-[calc(100%+2px)] md:tw-rounded-t-none md:tw-rounded-b-md md:tw-border-b-2 md:tw-border-t-0", {
                        "tw-border-[#086c84]": !h
                    }),
                    neutral: h,
                    isOpen: T,
                    type: r
                }), Oe && y.createElement(q, null, y.createElement(z, null)))
            };
            S.propTypes = {
                contentId: g().string.isRequired,
                authorId: g().string.isRequired,
                releaseStatus: g().oneOf(["private", "public", "unlisted"]),
                className: g().string,
                type: g().oneOf(["world", "avatar", "event", "friend"])
            };
            const P = S;
            var C = {
                    name: "151ctie",
                    styles: "background:hsl(0, 0%, 20%);color:#fff;border-color:hsl(0, 0%, 20%);&:hover,&:active,&:focus{border-color:hsl(0, 0%, 40%);}"
                },
                F = {
                    name: "ijbj2b",
                    styles: "border-radius:0 0 4px 4px;border-color:#086c84"
                },
                D = (0, i.Z)("div", {
                    target: "e1o4xuq44"
                })("display:flex;justify-content:space-between;position:relative;align-items:center;border:#064b5c solid 2px;border-radius:4px;background:#064b5c;color:white;padding:.25em .25em;box-sizing:border-box;position:relative;&:hover{border-color:#086c84;}", (function(e) {
                    return e.isSelecting ? F : ""
                }), " ", (function(e) {
                    return e.neutral ? C : ""
                }), ";"),
                I = (0, i.Z)("div", {
                    target: "e1o4xuq43"
                })({
                    name: "17m2ql",
                    styles: "height:100%;position:absolute;background:hsla(0, 0%, 100%, 0.2);width:1px;top:0"
                }),
                L = (0, i.Z)(O.$1, {
                    target: "e1o4xuq42"
                })({
                    name: "crmczs",
                    styles: "transition:transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)"
                }),
                q = (0, i.Z)("div", {
                    target: "e1o4xuq41"
                })({
                    name: "m6phxa",
                    styles: "position:absolute;width:100%;height:2px;border-radius:0 0 4px 4px;overflow:hidden;bottom:0;left:0"
                }),
                T = (0, b.F4)(n || (n = (0, a.Z)(["\n  0% {\n    left: -100%;\n    width: 80%;\n  }\n\n  100% {\n    left: 100%;\n    width: 40%;\n  }\n"]))),
                z = (0, i.Z)("div", {
                    target: "e1o4xuq40"
                })("position:absolute;z-index:10;bottom:0;height:2px;background-color:var(--bs-success);animation-name:", T, ";animation-iteration-count:infinite;animation-duration:1.5s;animation-timing-function:ease-in-out;")
        },
        76225: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(4965),
                a = r(67294);
            var o = (0, n.Z)("fieldset", {
                target: "e1hq0emc0"
            })({
                name: "13vf8go",
                styles: 'display:flex;flex-direction:column;gap:12px;label{cursor:pointer;font-size:16px;user-select:none;display:flex;gap:8px;align-items:center;.check{content:"";width:20px;height:20px;border:2px solid #677079;border-radius:50%;background-color:#333333;position:relative;}&:has(input[type=radio]:checked){.check{border-color:#1FD1ED;&::before{content:"";position:absolute;left:2px;top:2px;width:12px;height:12px;border-radius:50%;background-color:#1FD1ED;}}}input[type=radio]{display:none;}span small{display:block;font-size:12px;color:#9C9C9C;}}'
            });
            const l = function(e) {
                var t = e.value,
                    r = e.options,
                    n = e.onChange;
                return a.createElement(o, {
                    role: "radiogroup"
                }, (null != r ? r : []).map((function(e) {
                    return a.createElement("label", {
                        key: e.label
                    }, a.createElement("div", {
                        className: "check"
                    }), a.createElement("input", {
                        type: "radio",
                        value: e.value,
                        checked: t === e.value,
                        onChange: n
                    }), a.createElement("span", null, e.label, e.description && a.createElement("small", null, e.description)))
                })))
            }
        },
        64537: (e, t, r) => {
            r.d(t, {
                Z: () => k
            });
            var n, a = r(87462),
                o = r(4942),
                l = r(15861),
                i = r(45987),
                c = r(2909),
                s = r(7747),
                u = r(53359),
                d = r(64687),
                w = r.n(d),
                m = r(67294),
                p = r(32981),
                f = r(64258),
                v = r(86646),
                b = r(50048),
                x = ["url", "text", "title", "files", "style", "shareLabel", "copyLabel", "displayLabel"];

            function h(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var y = !(null === (n = navigator.clipboard) || void 0 === n || !n.writeText),
                E = !!navigator.canShare;
            const k = function(e) {
                var t = e.url,
                    r = e.text,
                    n = e.title,
                    o = e.files,
                    d = e.style,
                    h = e.shareLabel,
                    k = void 0 === h ? "Share" : h,
                    N = e.copyLabel,
                    Z = void 0 === N ? "Copy" : N,
                    j = e.displayLabel,
                    O = void 0 !== j && j,
                    S = (0, i.Z)(e, x),
                    P = (0, p.I0)(),
                    C = m.useMemo((function() {
                        return E && navigator.canShare({
                            url: t,
                            text: r,
                            title: n,
                            files: o
                        })
                    }), [E, t, r, n, o]);
                if (!y && !E) return null;
                var F = function() {
                        var e = (0, l.Z)(w().mark((function e() {
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, navigator.clipboard.writeText([n, r, t].filter(Boolean).join("\n"));
                                    case 2:
                                        P((0, f.d)({
                                            title: "Copied to clipboard",
                                            icon: c.kZ,
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
                    D = function() {
                        var e = (0, l.Z)(w().mark((function e(a) {
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a.preventDefault(), !C) {
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
                                        })), F(), e.next = 15;
                                        break;
                                    case 14:
                                        throw e.t0;
                                    case 15:
                                        e.next = 18;
                                        break;
                                    case 17:
                                        F();
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
                    I = C ? k : Z,
                    L = C ? s.Dr : c.kZ;
                return m.createElement(b.ZP, (0, a.Z)({
                    neutral: !0,
                    style: g({
                        lineHeight: "1"
                    }, d)
                }, S, {
                    title: I,
                    onClick: D
                }), m.createElement(v.Z, {
                    icon: L,
                    className: O && "tw-mr-1"
                }), O && I)
            }
        },
        95643: (e, t, r) => {
            r.d(t, {
                Z: () => b
            });
            var n = r(22984),
                a = r(35117),
                o = r(82414),
                l = r(80988),
                i = r(69181),
                c = r(51806),
                s = r.n(c),
                u = r(27484),
                d = r.n(u),
                w = r(45697),
                m = r.n(w),
                p = r(67294),
                f = r(79655),
                v = function(e) {
                    var t = e.productData,
                        r = void 0 === t ? null : t,
                        c = e.className,
                        u = e.hasAlreadyPurchased,
                        w = void 0 !== u && u,
                        m = e.alreadyPurchasedData,
                        v = void 0 === m ? null : m,
                        b = e.listingData,
                        x = void 0 === b ? null : b,
                        h = d()(null == v ? void 0 : v.expiry).year() > 9e3,
                        g = "duration" === (null == x ? void 0 : x.listingType),
                        y = null == x ? void 0 : x.stackable,
                        E = !(null != r && r.assetDisabled) && r;
                    return p.createElement("div", {
                        className: "tw-rounded-lg tw-bg-grey tw-flex tw-p-3 tw-flex-col ".concat(c)
                    }, w && null !== v ? g && y ? h ? p.createElement("div", {
                        className: " tw-flex tw-flex-col sm:tw-flex-row tw-bg-dark-teal tw-rounded-lg tw-border-highlight tw-border-solid tw-border-0 tw-border-l-4 tw-mb-4 tw-p-3 tw-justify-between tw-items-center "
                    }, p.createElement("div", {
                        className: "tw-flex tw-flex-row"
                    }, p.createElement(l.$1, {
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
                    }, p.createElement(l.$1, {
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
                    }, p.createElement(l.$1, {
                        icon: o.sq,
                        size: "1x",
                        className: "tw-text-highlight tw-mt-1 tw-mr-2"
                    }), p.createElement("div", {
                        className: "tw-flex tw-flex-col tw-justify-start tw-items-start"
                    }, p.createElement("h2", {
                        className: "tw-text-xs"
                    }, "You already have access to this product."), p.createElement("p", {
                        className: "tw-text-xs tw-mb-0"
                    }, "Purchasing will have no effect.")))) : null, !E && p.createElement(p.Fragment, null, p.createElement(l.qX, {
                        type: "warn",
                        title: p.createElement("small", null, "This avatar is unavailable due to an issue."),
                        className: "tw-mt-0"
                    }, p.createElement("small", null, "Please check your email or notifications for more information.")), p.createElement(l.X2, {
                        className: "tw-gap-3 tw-items-center"
                    }, p.createElement("div", {
                        className: "tw-bg-hr-line-color tw-w-14 tw-h-14 tw-rounded-sm tw-p-2 tw-text-[#404c58]"
                    }, p.createElement(l.$1, {
                        icon: a.faBan,
                        className: "tw-w-full tw-h-full"
                    })), p.createElement("h6", {
                        className: "tw-p-0 tw-flex-auto tw-m-0 tw-text-placeholder-text"
                    }, "Unavailable Product"))), E && p.createElement("div", {
                        className: "tw-flex tw-w-full ".concat(w ? "tw-opacity-30" : "tw-opacity-100")
                    }, p.createElement(i.Z, {
                        alt: null == r ? void 0 : r.displayName,
                        imageId: null == r ? void 0 : r.imageId,
                        fallbackSrc: s(),
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
                    }, p.createElement(l.$1, {
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
//# sourceMappingURL=100bd529aa0a28ed047a58df80f5a5ff19b1a655f9e9f98a15bf1e6b73a59d7b.js.map