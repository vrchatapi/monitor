(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8116], {
        78989: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var a = r(87462),
                n = r(4965),
                o = r(67294),
                c = r(45697),
                i = r.n(c),
                l = r(96985);
            var u = {
                    name: "11rq2x7",
                    styles: "border-color:#a8342e"
                },
                w = (0, o.forwardRef)((function(e, t) {
                    var r = e.isError,
                        n = void 0 !== r && r,
                        c = u;
                    return o.createElement(p, (0, a.Z)({
                        ref: t
                    }, e, {
                        inputStyle: n ? c : ""
                    }))
                }));
            w.propTypes = {
                isError: i().bool
            };
            var p = (0, n.Z)(l.II, {
                target: "e1v6asn80"
            })({
                name: "1bob962",
                styles: "overflow:inherit;input{text-align:center;font-size:1.5rem;@media (min-width: 576px){font-size:2rem;}}"
            });
            const s = w
        },
        13887: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => w
            });
            var a = r(54546),
                n = r(42404),
                o = r.n(n),
                c = r(67294),
                i = r(86646),
                l = r(62427);
            const u = [{
                worldName: "Horse Mountain",
                authorName: "nprowler",
                image: r(92610)
            }, {
                worldName: "Instagib Tournament",
                authorName: "ville672",
                image: r(14420)
            }, {
                worldName: "Gumball Lounge",
                authorName: "screamingcolor",
                image: r(38325)
            }, {
                worldName: "Exoplanet Journey",
                authorName: "Niko*",
                image: r(25623)
            }, {
                worldName: "Dusk",
                authorName: "Lucifer MStar",
                image: r(5171)
            }, {
                worldName: "Amber Glade - Winter",
                authorName: "Mankey",
                image: r(38239)
            }, {
                worldName: "Luminous Hotel",
                authorName: "Lura_",
                image: r(81592)
            }, {
                worldName: "Shoegaze Night",
                authorName: "VVolfly",
                image: r(42665)
            }, {
                worldName: "Singularity Echo",
                authorName: "Lavryou",
                image: r(96253)
            }, {
                worldName: "CORRIDOR ABANDONNED․․․",
                authorName: "TontonDemon",
                image: r(40533)
            }, {
                worldName: "Atelier",
                authorName: "amanek",
                image: r(30599)
            }, {
                worldName: "记忆中的花海⁄The Sea of Flowers in Memory",
                authorName: "ぃLuxRIAぅ",
                image: r(35883)
            }, {
                worldName: "BOTANICA",
                authorName: "TakeTake-たけたけ-",
                image: r(55074)
            }, {
                worldName: "Lazy Sunday",
                authorName: "Mochie",
                image: r(34414)
            }, {
                worldName: "Angels Hideout",
                authorName: "樹-Itsuki-",
                image: r(47218)
            }, {
                worldName: "Forest of Eternity",
                authorName: "chu-ri",
                image: r(50749)
            }];
            const w = function(e) {
                var t = e.children,
                    r = e.showCredits,
                    n = (0, c.useState)(null),
                    w = (0, a.Z)(n, 2),
                    p = w[0],
                    s = w[1],
                    m = (0, c.useState)(null),
                    h = (0, a.Z)(m, 2),
                    g = h[0],
                    d = h[1],
                    f = (0, c.useMemo)((function() {
                        return o()(u, 6)
                    }), []);
                (0, c.useEffect)((function() {
                    if (null === p) s(f[0]);
                    else {
                        var e = b(p);
                        setTimeout((function() {
                            return s(e)
                        }), 1e4), d(e)
                    }
                }), [p]);
                var b = function(e) {
                    var t = f.findIndex((function(t) {
                        return t.image.toString() === e.image.toString()
                    }));
                    return t === f.length - 1 ? f[0] : f[t + 1]
                };
                return c.createElement("div", {
                    className: " tw-transition-all tw-duration-1000 tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-flex tw-flex-col tw-justify-center tw-items-center ",
                    style: {
                        backgroundImage: null === p ? "none" : "url(".concat(p.image, ")")
                    }
                }, c.createElement("div", {
                    className: "tw-relative tw-p-5 xl:tw-absolute xl:tw-top-[50px] xl:tw-left-12"
                }, c.createElement("a", {
                    href: "https://vrchat.com",
                    target: "_blank",
                    rel: "noreferrer"
                }, c.createElement("img", {
                    className: "tw-w-[170px] tw-h-[75px]",
                    src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png",
                    alt: "VRChat"
                }), c.createElement("img", {
                    className: "tw-hidden",
                    src: null == g ? void 0 : g.image,
                    alt: "VRChat"
                }))), c.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, t), (null == p ? void 0 : p.worldName) && r && c.createElement("div", {
                    className: " tw-relative tw-w-full tw-flex tw-flex-row tw-gap-2 tw-items-start xl:tw-absolute xl:tw-top-12 xl:tw-right-12 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-2 xl:tw-rounded-lg"
                }, c.createElement(i.Z, {
                    icon: l.default,
                    title: "World",
                    size: "2x"
                }), c.createElement("p", {
                    className: "tw-mb-0 tw-leading-none"
                }, p.worldName, c.createElement("br", null), c.createElement("small", null, "by ", p.authorName))))
            }
        },
        68116: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => j
            });
            var a = r(15861),
                n = r(54546),
                o = r(36856),
                c = r(37949),
                i = r(64687),
                l = r.n(i),
                u = r(60006),
                w = r(45697),
                p = r.n(w),
                s = r(67294),
                m = r(89250),
                h = r(79655),
                g = r(22202),
                d = r(96985),
                f = r(78989),
                b = r(41400),
                v = r(13887),
                x = r(98538),
                N = function(e) {
                    var t = e.isEmailOTP,
                        r = void 0 !== t && t,
                        i = (0, m.s0)(),
                        w = (0, m.TH)().state,
                        p = (0, g.Sq)(),
                        N = (0, n.Z)(p, 2),
                        j = N[0],
                        E = N[1],
                        S = E.isLoading,
                        y = E.isError,
                        k = E.error,
                        T = (0, s.useState)(!1),
                        R = (0, n.Z)(T, 2),
                        C = R[0],
                        Z = R[1],
                        L = (0, s.useState)(!0),
                        F = (0, n.Z)(L, 2),
                        M = F[0],
                        A = F[1],
                        D = (0, s.useRef)(null),
                        I = (0, s.useRef)(null),
                        O = (0, s.useRef)(null),
                        z = (0, s.useRef)(null),
                        H = (0, s.useRef)(null),
                        K = (0, s.useRef)(null);
                    (0, s.useEffect)((function() {
                        var e;
                        null === (e = D.current) || void 0 === e || e.focus()
                    }), []);
                    var V = function() {
                            var e = (0, a.Z)(l().mark((function e(t) {
                                return l().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), C) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return K.current.blur(), e.prev = 4, e.next = 7, j({
                                                code: W(),
                                                twoFactorType: r ? "emailotp" : "totp"
                                            }).unwrap();
                                        case 7:
                                            if (e.sent.verified) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 10:
                                            if (null == w || !w.redirectTo) {
                                                e.next = 13;
                                                break
                                            }
                                            return i(w.redirectTo), e.abrupt("return");
                                        case 13:
                                            i("/home"), e.next = 21;
                                            break;
                                        case 16:
                                            e.prev = 16, e.t0 = e.catch(4), console.error(e.t0), A(!1), setTimeout((function() {
                                                A(!0)
                                            }), 4e3);
                                        case 21:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [4, 16]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        _ = C && !S && M,
                        W = function() {
                            return [D.current.value, I.current.value, O.current.value, z.current.value, H.current.value, K.current.value].join("")
                        },
                        q = function(e) {
                            var t = e.event,
                                r = e.nextRef,
                                a = void 0 === r ? null : r;
                            if (Number.isNaN(t.target.value)) t.target.value = "";
                            else {
                                var n;
                                if (1 === t.target.value.length && null !== a) null === (n = a.current) || void 0 === n || n.focus();
                                t.target.value.length > 1 && function(e) {
                                    for (var t, r = e.target.value.replace(/\s+/g, ""), a = [D, I, O, z, H, K], n = 0; n < r.length && n < a.length; n++) a[n].current.value = r[n];
                                    var o, c = Math.min(r.length, a.length);
                                    c < a.length ? null === (o = a[c]) || void 0 === o || null === (o = o.current) || void 0 === o || o.focus() : null === (t = D.current) || void 0 === t || t.blur()
                                }(t);
                                var o = W(),
                                    c = 6 === o.length && !Number.isNaN(o);
                                Z(c)
                            }
                        },
                        B = function(e) {
                            var t = e.event,
                                r = e.previousRef,
                                a = void 0 === r ? null : r;
                            null !== a && "Backspace" === t.key && 0 === t.target.value.length && (a.current.value = "", a.current.focus())
                        };
                    return s.createElement(v.Z, null, s.createElement(d.$4, null, r ? "Email One-Time Code" : "Two-Factor Authentication"), s.createElement("div", {
                        className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                    }, s.createElement(b.l0, {
                        onSubmit: V
                    }, s.createElement("div", {
                        className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                    }, s.createElement("div", {
                        className: "tw-mb-5"
                    }, s.createElement(d.$1, {
                        icon: r ? c.mS : o.faShieldHalved,
                        className: "tw-w-[72px] tw-h-[72px]"
                    })), s.createElement("h4", {
                        className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                    }, r ? "Email One-Time Code" : "Two-Factor Authentication"), s.createElement("p", {
                        className: "tw-text-center"
                    }, r ? s.createElement(s.Fragment, null, "Enter the numeric code we sent to your email.") : s.createElement(s.Fragment, null, "Enter a numeric code from your authenticator app.", " ", s.createElement("a", {
                        href: x.S1,
                        "aria-label": "Two Factor Auth Help",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "tw-text-link-highlight"
                    }, "Learn More"), ".")), s.createElement("div", {
                        className: "tw-flex tw-justify-center tw-flex-col"
                    }, s.createElement("div", {
                        className: "tw-flex tw-items-center"
                    }, s.createElement(f.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return q({
                                event: e,
                                nextRef: I
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: y,
                        inputMode: "numeric",
                        autocomplete: "off",
                        ref: D
                    }), s.createElement(f.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return q({
                                event: e,
                                nextRef: O
                            })
                        },
                        onKeyDown: function(e) {
                            return B({
                                event: e,
                                previousRef: D
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: y,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: I
                    }), s.createElement(f.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return q({
                                event: e,
                                nextRef: z
                            })
                        },
                        onKeyDown: function(e) {
                            return B({
                                event: e,
                                previousRef: I
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: y,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: O
                    }), s.createElement(f.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return q({
                                event: e,
                                nextRef: H
                            })
                        },
                        onKeyDown: function(e) {
                            return B({
                                event: e,
                                previousRef: O
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: y,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: z
                    }), s.createElement(f.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return q({
                                event: e,
                                nextRef: K
                            })
                        },
                        onKeyDown: function(e) {
                            return B({
                                event: e,
                                previousRef: z
                            })
                        },
                        className: "tw-w-12 tw-h-[60px] tw-mr-3",
                        isError: y,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: H
                    }), s.createElement(f.Z, {
                        type: "text",
                        name: "code",
                        "aria-label": "Two Factor Code",
                        placeholder: "0",
                        onChange: function(e) {
                            return q({
                                event: e
                            })
                        },
                        onKeyDown: function(e) {
                            return B({
                                event: e,
                                previousRef: H
                            })
                        },
                        className: "tw-w-12 tw-h-[60px]",
                        isError: y,
                        inputMode: "numeric",
                        autocomplete: "off",
                        maxLength: "1",
                        ref: K
                    })), y && s.createElement("p", {
                        role: "alert",
                        className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre"
                    }, 429 === (null == k ? void 0 : k.status) ? "Login unavailable due to too many failed attempts. Please try again later." : "Oops, that code didn't work.")), s.createElement(d.zx, {
                        className: "tw-w-60 tw-mt-6 tw-mb-4",
                        disabled: !_,
                        loading: S || !M,
                        type: "submit"
                    }, "Next"), r ? s.createElement(d.qX, {
                        type: "info",
                        title: "What's this?",
                        className: "tw--mb-4",
                        style: {
                            maxWidth: 480
                        }
                    }, "To help keep your account secure we've sent a code to your registered email address. You'll need to enter it above to access VRChat.") : s.createElement(h.rU, {
                        to: "/home/twofactorauthrecovery",
                        className: "nav-link tw-text-link-highlight"
                    }, "Use a recovery code instead"), s.createElement(u.Qj, {
                        to: "/home/login",
                        state: {
                            logout: !0
                        },
                        className: "tw-mt-12"
                    }, "Log out")))))
                };
            const j = N;
            N.propTypes = {
                isEmailOTP: p().bool
            }
        },
        92610: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "12ce1bda863d50d0-1980w.jpg 1980w",
                images: [{
                    path: r.p + "12ce1bda863d50d0-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: r.p + "12ce1bda863d50d0-1980w.jpg",
                toString: function() {
                    return r.p + "12ce1bda863d50d0-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        14420: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "19cf5ea4873534e6-1980w.jpg 1980w",
                images: [{
                    path: r.p + "19cf5ea4873534e6-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: r.p + "19cf5ea4873534e6-1980w.jpg",
                toString: function() {
                    return r.p + "19cf5ea4873534e6-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        38325: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "a15004cb78587aea-1980w.jpg 1980w",
                images: [{
                    path: r.p + "a15004cb78587aea-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: r.p + "a15004cb78587aea-1980w.jpg",
                toString: function() {
                    return r.p + "a15004cb78587aea-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        25623: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "5ac33cecd162656c-1980w.jpg 1980w",
                images: [{
                    path: r.p + "5ac33cecd162656c-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: r.p + "5ac33cecd162656c-1980w.jpg",
                toString: function() {
                    return r.p + "5ac33cecd162656c-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        5171: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "f2fe59d11df55cf4-1980w.jpg 1980w",
                images: [{
                    path: r.p + "f2fe59d11df55cf4-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: r.p + "f2fe59d11df55cf4-1980w.jpg",
                toString: function() {
                    return r.p + "f2fe59d11df55cf4-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        38239: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "6760e1bc722c437b-1980w.jpg 1980w",
                images: [{
                    path: r.p + "6760e1bc722c437b-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: r.p + "6760e1bc722c437b-1980w.jpg",
                toString: function() {
                    return r.p + "6760e1bc722c437b-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        81592: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "027202d759d2cf17-1920w.jpg 1920w",
                images: [{
                    path: r.p + "027202d759d2cf17-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "027202d759d2cf17-1920w.jpg",
                toString: function() {
                    return r.p + "027202d759d2cf17-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        42665: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "942180c1c931b9b9-1920w.jpg 1920w",
                images: [{
                    path: r.p + "942180c1c931b9b9-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "942180c1c931b9b9-1920w.jpg",
                toString: function() {
                    return r.p + "942180c1c931b9b9-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        96253: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "3bb6219038a6eb91-1920w.jpg 1920w",
                images: [{
                    path: r.p + "3bb6219038a6eb91-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "3bb6219038a6eb91-1920w.jpg",
                toString: function() {
                    return r.p + "3bb6219038a6eb91-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        40533: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "5844853cd4177f64-1920w.jpg 1920w",
                images: [{
                    path: r.p + "5844853cd4177f64-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "5844853cd4177f64-1920w.jpg",
                toString: function() {
                    return r.p + "5844853cd4177f64-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        30599: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "c6455c52c3c108ef-1920w.jpg 1920w",
                images: [{
                    path: r.p + "c6455c52c3c108ef-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "c6455c52c3c108ef-1920w.jpg",
                toString: function() {
                    return r.p + "c6455c52c3c108ef-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        35883: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "e7e30361f928fa1f-1920w.jpg 1920w",
                images: [{
                    path: r.p + "e7e30361f928fa1f-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "e7e30361f928fa1f-1920w.jpg",
                toString: function() {
                    return r.p + "e7e30361f928fa1f-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        55074: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "960324bdaa4dd770-1920w.jpg 1920w",
                images: [{
                    path: r.p + "960324bdaa4dd770-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "960324bdaa4dd770-1920w.jpg",
                toString: function() {
                    return r.p + "960324bdaa4dd770-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        34414: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "802b4af19623d031-1920w.jpg 1920w",
                images: [{
                    path: r.p + "802b4af19623d031-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "802b4af19623d031-1920w.jpg",
                toString: function() {
                    return r.p + "802b4af19623d031-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        47218: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "0848895a9717ee5a-1920w.jpg 1920w",
                images: [{
                    path: r.p + "0848895a9717ee5a-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "0848895a9717ee5a-1920w.jpg",
                toString: function() {
                    return r.p + "0848895a9717ee5a-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        50749: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "2a36acbdc7592ce9-1920w.jpg 1920w",
                images: [{
                    path: r.p + "2a36acbdc7592ce9-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "2a36acbdc7592ce9-1920w.jpg",
                toString: function() {
                    return r.p + "2a36acbdc7592ce9-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        }
    }
]);
//# sourceMappingURL=92adb068da61fdfaaa804eb08c7fcabdceb5693e12598bfb1a439bcdcf8862bf.js.map