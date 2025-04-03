/*! For license information please see <unstable> */
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1959], {
        86961: (t, e, i) => {
            "use strict";
            var s = i(30381),
                n = i.n(s),
                o = i(529);
            const r = {
                datetime: "MMM D, YYYY, h:mm:ss a",
                millisecond: "h:mm:ss.SSS a",
                second: "h:mm:ss a",
                minute: "h:mm a",
                hour: "hA",
                day: "MMM D",
                week: "ll",
                month: "MMM YYYY",
                quarter: "[Q]Q - YYYY",
                year: "YYYY"
            };
            o.IQ._date.override("function" == typeof n() ? {
                _id: "moment",
                formats: function() {
                    return r
                },
                parse: function(t, e) {
                    return "string" == typeof t && "string" == typeof e ? t = n()(t, e) : t instanceof n() || (t = n()(t)), t.isValid() ? t.valueOf() : null
                },
                format: function(t, e) {
                    return n()(t).format(e)
                },
                add: function(t, e, i) {
                    return n()(t).add(e, i).valueOf()
                },
                diff: function(t, e, i) {
                    return n()(t).diff(n()(e), i)
                },
                startOf: function(t, e, i) {
                    return t = n()(t), "isoWeek" === e ? (i = Math.trunc(Math.min(Math.max(0, i), 6)), t.isoWeekday(i).startOf("day").valueOf()) : t.startOf(e).valueOf()
                },
                endOf: function(t, e) {
                    return n()(t).endOf(e).valueOf()
                }
            } : {})
        },
        7124: function(t) {
            t.exports = function() {
                "use strict";
                return function(t, e, i) {
                    e.prototype.isToday = function() {
                        var t = "YYYY-MM-DD",
                            e = i();
                        return this.format(t) === e.format(t)
                    }
                }
            }()
        },
        529: (t, e, i) => {
            "use strict";

            function s(t) {
                return t + .5 | 0
            }
            i.d(e, {
                uw: () => lo,
                kL: () => mn,
                Gu: () => Yn,
                ST: () => Hi,
                jn: () => On,
                f$: () => go,
                od: () => Pn,
                FB: () => wo,
                u: () => ro,
                IQ: () => Yi
            });
            const n = (t, e, i) => Math.max(Math.min(t, i), e);

            function o(t) {
                return n(s(2.55 * t), 0, 255)
            }

            function r(t) {
                return n(s(255 * t), 0, 255)
            }

            function a(t) {
                return n(s(t / 2.55) / 100, 0, 1)
            }

            function h(t) {
                return n(s(100 * t), 0, 100)
            }
            const l = {
                    0: 0,
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                    5: 5,
                    6: 6,
                    7: 7,
                    8: 8,
                    9: 9,
                    A: 10,
                    B: 11,
                    C: 12,
                    D: 13,
                    E: 14,
                    F: 15,
                    a: 10,
                    b: 11,
                    c: 12,
                    d: 13,
                    e: 14,
                    f: 15
                },
                c = [..."0123456789ABCDEF"],
                d = t => c[15 & t],
                u = t => c[(240 & t) >> 4] + c[15 & t],
                f = t => (240 & t) >> 4 == (15 & t);

            function g(t) {
                var e = (t => f(t.r) && f(t.g) && f(t.b) && f(t.a))(t) ? d : u;
                return t ? "#" + e(t.r) + e(t.g) + e(t.b) + ((t, e) => t < 255 ? e(t) : "")(t.a, e) : void 0
            }
            const p = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

            function m(t, e, i) {
                const s = e * Math.min(i, 1 - i),
                    n = (e, n = (e + t / 30) % 12) => i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
                return [n(0), n(8), n(4)]
            }

            function b(t, e, i) {
                const s = (s, n = (s + t / 60) % 6) => i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
                return [s(5), s(3), s(1)]
            }

            function x(t, e, i) {
                const s = m(t, 1, .5);
                let n;
                for (e + i > 1 && (n = 1 / (e + i), e *= n, i *= n), n = 0; n < 3; n++) s[n] *= 1 - e - i, s[n] += e;
                return s
            }

            function _(t) {
                const e = t.r / 255,
                    i = t.g / 255,
                    s = t.b / 255,
                    n = Math.max(e, i, s),
                    o = Math.min(e, i, s),
                    r = (n + o) / 2;
                let a, h, l;
                return n !== o && (l = n - o, h = r > .5 ? l / (2 - n - o) : l / (n + o), a = function(t, e, i, s, n) {
                    return t === n ? (e - i) / s + (e < i ? 6 : 0) : e === n ? (i - t) / s + 2 : (t - e) / s + 4
                }(e, i, s, l, n), a = 60 * a + .5), [0 | a, h || 0, r]
            }

            function y(t, e, i, s) {
                return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(r)
            }

            function v(t, e, i) {
                return y(m, t, e, i)
            }

            function w(t) {
                return (t % 360 + 360) % 360
            }

            function k(t) {
                const e = p.exec(t);
                let i, s = 255;
                if (!e) return;
                e[5] !== i && (s = e[6] ? o(+e[5]) : r(+e[5]));
                const n = w(+e[2]),
                    a = +e[3] / 100,
                    h = +e[4] / 100;
                return i = "hwb" === e[1] ? function(t, e, i) {
                    return y(x, t, e, i)
                }(n, a, h) : "hsv" === e[1] ? function(t, e, i) {
                    return y(b, t, e, i)
                }(n, a, h) : v(n, a, h), {
                    r: i[0],
                    g: i[1],
                    b: i[2],
                    a: s
                }
            }
            const M = {
                    x: "dark",
                    Z: "light",
                    Y: "re",
                    X: "blu",
                    W: "gr",
                    V: "medium",
                    U: "slate",
                    A: "ee",
                    T: "ol",
                    S: "or",
                    B: "ra",
                    C: "lateg",
                    D: "ights",
                    R: "in",
                    Q: "turquois",
                    E: "hi",
                    P: "ro",
                    O: "al",
                    N: "le",
                    M: "de",
                    L: "yello",
                    F: "en",
                    K: "ch",
                    G: "arks",
                    H: "ea",
                    I: "ightg",
                    J: "wh"
                },
                S = {
                    OiceXe: "f0f8ff",
                    antiquewEte: "faebd7",
                    aqua: "ffff",
                    aquamarRe: "7fffd4",
                    azuY: "f0ffff",
                    beige: "f5f5dc",
                    bisque: "ffe4c4",
                    black: "0",
                    blanKedOmond: "ffebcd",
                    Xe: "ff",
                    XeviTet: "8a2be2",
                    bPwn: "a52a2a",
                    burlywood: "deb887",
                    caMtXe: "5f9ea0",
                    KartYuse: "7fff00",
                    KocTate: "d2691e",
                    cSO: "ff7f50",
                    cSnflowerXe: "6495ed",
                    cSnsilk: "fff8dc",
                    crimson: "dc143c",
                    cyan: "ffff",
                    xXe: "8b",
                    xcyan: "8b8b",
                    xgTMnPd: "b8860b",
                    xWay: "a9a9a9",
                    xgYF: "6400",
                    xgYy: "a9a9a9",
                    xkhaki: "bdb76b",
                    xmagFta: "8b008b",
                    xTivegYF: "556b2f",
                    xSange: "ff8c00",
                    xScEd: "9932cc",
                    xYd: "8b0000",
                    xsOmon: "e9967a",
                    xsHgYF: "8fbc8f",
                    xUXe: "483d8b",
                    xUWay: "2f4f4f",
                    xUgYy: "2f4f4f",
                    xQe: "ced1",
                    xviTet: "9400d3",
                    dAppRk: "ff1493",
                    dApskyXe: "bfff",
                    dimWay: "696969",
                    dimgYy: "696969",
                    dodgerXe: "1e90ff",
                    fiYbrick: "b22222",
                    flSOwEte: "fffaf0",
                    foYstWAn: "228b22",
                    fuKsia: "ff00ff",
                    gaRsbSo: "dcdcdc",
                    ghostwEte: "f8f8ff",
                    gTd: "ffd700",
                    gTMnPd: "daa520",
                    Way: "808080",
                    gYF: "8000",
                    gYFLw: "adff2f",
                    gYy: "808080",
                    honeyMw: "f0fff0",
                    hotpRk: "ff69b4",
                    RdianYd: "cd5c5c",
                    Rdigo: "4b0082",
                    ivSy: "fffff0",
                    khaki: "f0e68c",
                    lavFMr: "e6e6fa",
                    lavFMrXsh: "fff0f5",
                    lawngYF: "7cfc00",
                    NmoncEffon: "fffacd",
                    ZXe: "add8e6",
                    ZcSO: "f08080",
                    Zcyan: "e0ffff",
                    ZgTMnPdLw: "fafad2",
                    ZWay: "d3d3d3",
                    ZgYF: "90ee90",
                    ZgYy: "d3d3d3",
                    ZpRk: "ffb6c1",
                    ZsOmon: "ffa07a",
                    ZsHgYF: "20b2aa",
                    ZskyXe: "87cefa",
                    ZUWay: "778899",
                    ZUgYy: "778899",
                    ZstAlXe: "b0c4de",
                    ZLw: "ffffe0",
                    lime: "ff00",
                    limegYF: "32cd32",
                    lRF: "faf0e6",
                    magFta: "ff00ff",
                    maPon: "800000",
                    VaquamarRe: "66cdaa",
                    VXe: "cd",
                    VScEd: "ba55d3",
                    VpurpN: "9370db",
                    VsHgYF: "3cb371",
                    VUXe: "7b68ee",
                    VsprRggYF: "fa9a",
                    VQe: "48d1cc",
                    VviTetYd: "c71585",
                    midnightXe: "191970",
                    mRtcYam: "f5fffa",
                    mistyPse: "ffe4e1",
                    moccasR: "ffe4b5",
                    navajowEte: "ffdead",
                    navy: "80",
                    Tdlace: "fdf5e6",
                    Tive: "808000",
                    TivedBb: "6b8e23",
                    Sange: "ffa500",
                    SangeYd: "ff4500",
                    ScEd: "da70d6",
                    pOegTMnPd: "eee8aa",
                    pOegYF: "98fb98",
                    pOeQe: "afeeee",
                    pOeviTetYd: "db7093",
                    papayawEp: "ffefd5",
                    pHKpuff: "ffdab9",
                    peru: "cd853f",
                    pRk: "ffc0cb",
                    plum: "dda0dd",
                    powMrXe: "b0e0e6",
                    purpN: "800080",
                    YbeccapurpN: "663399",
                    Yd: "ff0000",
                    Psybrown: "bc8f8f",
                    PyOXe: "4169e1",
                    saddNbPwn: "8b4513",
                    sOmon: "fa8072",
                    sandybPwn: "f4a460",
                    sHgYF: "2e8b57",
                    sHshell: "fff5ee",
                    siFna: "a0522d",
                    silver: "c0c0c0",
                    skyXe: "87ceeb",
                    UXe: "6a5acd",
                    UWay: "708090",
                    UgYy: "708090",
                    snow: "fffafa",
                    sprRggYF: "ff7f",
                    stAlXe: "4682b4",
                    tan: "d2b48c",
                    teO: "8080",
                    tEstN: "d8bfd8",
                    tomato: "ff6347",
                    Qe: "40e0d0",
                    viTet: "ee82ee",
                    JHt: "f5deb3",
                    wEte: "ffffff",
                    wEtesmoke: "f5f5f5",
                    Lw: "ffff00",
                    LwgYF: "9acd32"
                };
            let O;

            function D(t) {
                O || (O = function() {
                    const t = {},
                        e = Object.keys(S),
                        i = Object.keys(M);
                    let s, n, o, r, a;
                    for (s = 0; s < e.length; s++) {
                        for (r = a = e[s], n = 0; n < i.length; n++) o = i[n], a = a.replace(o, M[o]);
                        o = parseInt(S[r], 16), t[a] = [o >> 16 & 255, o >> 8 & 255, 255 & o]
                    }
                    return t
                }(), O.transparent = [0, 0, 0, 0]);
                const e = O[t.toLowerCase()];
                return e && {
                    r: e[0],
                    g: e[1],
                    b: e[2],
                    a: 4 === e.length ? e[3] : 255
                }
            }
            const P = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
            const T = t => t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055,
                C = t => t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);

            function A(t, e, i) {
                if (t) {
                    let s = _(t);
                    s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1)), s = v(s), t.r = s[0], t.g = s[1], t.b = s[2]
                }
            }

            function I(t, e) {
                return t ? Object.assign(e || {}, t) : t
            }

            function E(t) {
                var e = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 255
                };
                return Array.isArray(t) ? t.length >= 3 && (e = {
                    r: t[0],
                    g: t[1],
                    b: t[2],
                    a: 255
                }, t.length > 3 && (e.a = r(t[3]))) : (e = I(t, {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                })).a = r(e.a), e
            }

            function L(t) {
                return "r" === t.charAt(0) ? function(t) {
                    const e = P.exec(t);
                    let i, s, r, a = 255;
                    if (e) {
                        if (e[7] !== i) {
                            const t = +e[7];
                            a = e[8] ? o(t) : n(255 * t, 0, 255)
                        }
                        return i = +e[1], s = +e[3], r = +e[5], i = 255 & (e[2] ? o(i) : n(i, 0, 255)), s = 255 & (e[4] ? o(s) : n(s, 0, 255)), r = 255 & (e[6] ? o(r) : n(r, 0, 255)), {
                            r: i,
                            g: s,
                            b: r,
                            a
                        }
                    }
                }(t) : k(t)
            }
            class z {
                constructor(t) {
                    if (t instanceof z) return t;
                    const e = typeof t;
                    let i;
                    var s, n, o;
                    "object" === e ? i = E(t) : "string" === e && (o = (s = t).length, "#" === s[0] && (4 === o || 5 === o ? n = {
                        r: 255 & 17 * l[s[1]],
                        g: 255 & 17 * l[s[2]],
                        b: 255 & 17 * l[s[3]],
                        a: 5 === o ? 17 * l[s[4]] : 255
                    } : 7 !== o && 9 !== o || (n = {
                        r: l[s[1]] << 4 | l[s[2]],
                        g: l[s[3]] << 4 | l[s[4]],
                        b: l[s[5]] << 4 | l[s[6]],
                        a: 9 === o ? l[s[7]] << 4 | l[s[8]] : 255
                    })), i = n || D(t) || L(t)), this._rgb = i, this._valid = !!i
                }
                get valid() {
                    return this._valid
                }
                get rgb() {
                    var t = I(this._rgb);
                    return t && (t.a = a(t.a)), t
                }
                set rgb(t) {
                    this._rgb = E(t)
                }
                rgbString() {
                    return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${a(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : void 0;
                    var t
                }
                hexString() {
                    return this._valid ? g(this._rgb) : void 0
                }
                hslString() {
                    return this._valid ? function(t) {
                        if (!t) return;
                        const e = _(t),
                            i = e[0],
                            s = h(e[1]),
                            n = h(e[2]);
                        return t.a < 255 ? `hsla(${i}, ${s}%, ${n}%, ${a(t.a)})` : `hsl(${i}, ${s}%, ${n}%)`
                    }(this._rgb) : void 0
                }
                mix(t, e) {
                    if (t) {
                        const i = this.rgb,
                            s = t.rgb;
                        let n;
                        const o = e === n ? .5 : e,
                            r = 2 * o - 1,
                            a = i.a - s.a,
                            h = ((r * a == -1 ? r : (r + a) / (1 + r * a)) + 1) / 2;
                        n = 1 - h, i.r = 255 & h * i.r + n * s.r + .5, i.g = 255 & h * i.g + n * s.g + .5, i.b = 255 & h * i.b + n * s.b + .5, i.a = o * i.a + (1 - o) * s.a, this.rgb = i
                    }
                    return this
                }
                interpolate(t, e) {
                    return t && (this._rgb = function(t, e, i) {
                        const s = C(a(t.r)),
                            n = C(a(t.g)),
                            o = C(a(t.b));
                        return {
                            r: r(T(s + i * (C(a(e.r)) - s))),
                            g: r(T(n + i * (C(a(e.g)) - n))),
                            b: r(T(o + i * (C(a(e.b)) - o))),
                            a: t.a + i * (e.a - t.a)
                        }
                    }(this._rgb, t._rgb, e)), this
                }
                clone() {
                    return new z(this.rgb)
                }
                alpha(t) {
                    return this._rgb.a = r(t), this
                }
                clearer(t) {
                    return this._rgb.a *= 1 - t, this
                }
                greyscale() {
                    const t = this._rgb,
                        e = s(.3 * t.r + .59 * t.g + .11 * t.b);
                    return t.r = t.g = t.b = e, this
                }
                opaquer(t) {
                    return this._rgb.a *= 1 + t, this
                }
                negate() {
                    const t = this._rgb;
                    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
                }
                lighten(t) {
                    return A(this._rgb, 2, t), this
                }
                darken(t) {
                    return A(this._rgb, 2, -t), this
                }
                saturate(t) {
                    return A(this._rgb, 1, t), this
                }
                desaturate(t) {
                    return A(this._rgb, 1, -t), this
                }
                rotate(t) {
                    return function(t, e) {
                        var i = _(t);
                        i[0] = w(i[0] + e), i = v(i), t.r = i[0], t.g = i[1], t.b = i[2]
                    }(this._rgb, t), this
                }
            }

            function R() {}
            const F = (() => {
                let t = 0;
                return () => t++
            })();

            function B(t) {
                return null == t
            }

            function V(t) {
                if (Array.isArray && Array.isArray(t)) return !0;
                const e = Object.prototype.toString.call(t);
                return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6)
            }

            function j(t) {
                return null !== t && "[object Object]" === Object.prototype.toString.call(t)
            }

            function N(t) {
                return ("number" == typeof t || t instanceof Number) && isFinite(+t)
            }

            function H(t, e) {
                return N(t) ? t : e
            }

            function W(t, e) {
                return void 0 === t ? e : t
            }
            const $ = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;

            function Y(t, e, i) {
                if (t && "function" == typeof t.call) return t.apply(i, e)
            }

            function U(t, e, i, s) {
                let n, o, r;
                if (V(t))
                    if (o = t.length, s)
                        for (n = o - 1; n >= 0; n--) e.call(i, t[n], n);
                    else
                        for (n = 0; n < o; n++) e.call(i, t[n], n);
                else if (j(t))
                    for (r = Object.keys(t), o = r.length, n = 0; n < o; n++) e.call(i, t[r[n]], r[n])
            }

            function X(t, e) {
                let i, s, n, o;
                if (!t || !e || t.length !== e.length) return !1;
                for (i = 0, s = t.length; i < s; ++i)
                    if (n = t[i], o = e[i], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1;
                return !0
            }

            function q(t) {
                if (V(t)) return t.map(q);
                if (j(t)) {
                    const e = Object.create(null),
                        i = Object.keys(t),
                        s = i.length;
                    let n = 0;
                    for (; n < s; ++n) e[i[n]] = q(t[i[n]]);
                    return e
                }
                return t
            }

            function K(t) {
                return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
            }

            function G(t, e, i, s) {
                if (!K(t)) return;
                const n = e[t],
                    o = i[t];
                j(n) && j(o) ? Q(n, o, s) : e[t] = q(o)
            }

            function Q(t, e, i) {
                const s = V(e) ? e : [e],
                    n = s.length;
                if (!j(t)) return t;
                const o = (i = i || {}).merger || G;
                let r;
                for (let e = 0; e < n; ++e) {
                    if (r = s[e], !j(r)) continue;
                    const n = Object.keys(r);
                    for (let e = 0, s = n.length; e < s; ++e) o(n[e], t, r, i)
                }
                return t
            }

            function Z(t, e) {
                return Q(t, e, {
                    merger: J
                })
            }

            function J(t, e, i) {
                if (!K(t)) return;
                const s = e[t],
                    n = i[t];
                j(s) && j(n) ? Z(s, n) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = q(n))
            }
            const tt = {
                "": t => t,
                x: t => t.x,
                y: t => t.y
            };

            function et(t, e) {
                const i = tt[e] || (tt[e] = function(t) {
                    const e = function(t) {
                        const e = t.split("."),
                            i = [];
                        let s = "";
                        for (const t of e) s += t, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (i.push(s), s = "");
                        return i
                    }(t);
                    return t => {
                        for (const i of e) {
                            if ("" === i) break;
                            t = t && t[i]
                        }
                        return t
                    }
                }(e));
                return i(t)
            }

            function it(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
            const st = t => void 0 !== t,
                nt = t => "function" == typeof t,
                ot = (t, e) => {
                    if (t.size !== e.size) return !1;
                    for (const i of t)
                        if (!e.has(i)) return !1;
                    return !0
                };
            const rt = Math.PI,
                at = 2 * rt,
                ht = at + rt,
                lt = Number.POSITIVE_INFINITY,
                ct = rt / 180,
                dt = rt / 2,
                ut = rt / 4,
                ft = 2 * rt / 3,
                gt = Math.log10,
                pt = Math.sign;

            function mt(t, e, i) {
                return Math.abs(t - e) < i
            }

            function bt(t) {
                const e = Math.round(t);
                t = mt(t, e, t / 1e3) ? e : t;
                const i = Math.pow(10, Math.floor(gt(t))),
                    s = t / i;
                return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i
            }

            function xt(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }

            function _t(t, e, i) {
                let s, n, o;
                for (s = 0, n = t.length; s < n; s++) o = t[s][i], isNaN(o) || (e.min = Math.min(e.min, o), e.max = Math.max(e.max, o))
            }

            function yt(t) {
                return t * (rt / 180)
            }

            function vt(t) {
                return t * (180 / rt)
            }

            function wt(t) {
                if (!N(t)) return;
                let e = 1,
                    i = 0;
                for (; Math.round(t * e) / e !== t;) e *= 10, i++;
                return i
            }

            function kt(t, e) {
                const i = e.x - t.x,
                    s = e.y - t.y,
                    n = Math.sqrt(i * i + s * s);
                let o = Math.atan2(s, i);
                return o < -.5 * rt && (o += at), {
                    angle: o,
                    distance: n
                }
            }

            function Mt(t, e) {
                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
            }

            function St(t, e) {
                return (t - e + ht) % at - rt
            }

            function Ot(t) {
                return (t % at + at) % at
            }

            function Dt(t, e, i, s) {
                const n = Ot(t),
                    o = Ot(e),
                    r = Ot(i),
                    a = Ot(o - n),
                    h = Ot(r - n),
                    l = Ot(n - o),
                    c = Ot(n - r);
                return n === o || n === r || s && o === r || a > h && l < c
            }

            function Pt(t, e, i) {
                return Math.max(e, Math.min(i, t))
            }

            function Tt(t, e, i, s = 1e-6) {
                return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s
            }

            function Ct(t, e, i) {
                i = i || (i => t[i] < e);
                let s, n = t.length - 1,
                    o = 0;
                for (; n - o > 1;) s = o + n >> 1, i(s) ? o = s : n = s;
                return {
                    lo: o,
                    hi: n
                }
            }
            const At = (t, e, i, s) => Ct(t, i, s ? s => {
                    const n = t[s][e];
                    return n < i || n === i && t[s + 1][e] === i
                } : s => t[s][e] < i),
                It = (t, e, i) => Ct(t, i, (s => t[s][e] >= i));
            const Et = ["push", "pop", "shift", "splice", "unshift"];

            function Lt(t, e) {
                const i = t._chartjs;
                if (!i) return;
                const s = i.listeners,
                    n = s.indexOf(e); - 1 !== n && s.splice(n, 1), s.length > 0 || (Et.forEach((e => {
                    delete t[e]
                })), delete t._chartjs)
            }

            function zt(t) {
                const e = new Set(t);
                return e.size === t.length ? t : Array.from(e)
            }
            const Rt = "undefined" == typeof window ? function(t) {
                return t()
            } : window.requestAnimationFrame;

            function Ft(t, e) {
                let i = [],
                    s = !1;
                return function(...n) {
                    i = n, s || (s = !0, Rt.call(window, (() => {
                        s = !1, t.apply(e, i)
                    })))
                }
            }
            const Bt = t => "start" === t ? "left" : "end" === t ? "right" : "center",
                Vt = (t, e, i) => "start" === t ? e : "end" === t ? i : (e + i) / 2;

            function jt(t, e, i) {
                const s = e.length;
                let n = 0,
                    o = s;
                if (t._sorted) {
                    const {
                        iScale: r,
                        _parsed: a
                    } = t, h = r.axis, {
                        min: l,
                        max: c,
                        minDefined: d,
                        maxDefined: u
                    } = r.getUserBounds();
                    d && (n = Pt(Math.min(At(a, h, l).lo, i ? s : At(e, h, r.getPixelForValue(l)).lo), 0, s - 1)), o = u ? Pt(Math.max(At(a, r.axis, c, !0).hi + 1, i ? 0 : At(e, h, r.getPixelForValue(c), !0).hi + 1), n, s) - n : s - n
                }
                return {
                    start: n,
                    count: o
                }
            }

            function Nt(t) {
                const {
                    xScale: e,
                    yScale: i,
                    _scaleRanges: s
                } = t, n = {
                    xmin: e.min,
                    xmax: e.max,
                    ymin: i.min,
                    ymax: i.max
                };
                if (!s) return t._scaleRanges = n, !0;
                const o = s.xmin !== e.min || s.xmax !== e.max || s.ymin !== i.min || s.ymax !== i.max;
                return Object.assign(s, n), o
            }
            const Ht = t => 0 === t || 1 === t,
                Wt = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * at / i),
                $t = (t, e, i) => Math.pow(2, -10 * t) * Math.sin((t - e) * at / i) + 1,
                Yt = {
                    linear: t => t,
                    easeInQuad: t => t * t,
                    easeOutQuad: t => -t * (t - 2),
                    easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
                    easeInCubic: t => t * t * t,
                    easeOutCubic: t => (t -= 1) * t * t + 1,
                    easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
                    easeInQuart: t => t * t * t * t,
                    easeOutQuart: t => -((t -= 1) * t * t * t - 1),
                    easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
                    easeInQuint: t => t * t * t * t * t,
                    easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
                    easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
                    easeInSine: t => 1 - Math.cos(t * dt),
                    easeOutSine: t => Math.sin(t * dt),
                    easeInOutSine: t => -.5 * (Math.cos(rt * t) - 1),
                    easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
                    easeOutExpo: t => 1 === t ? 1 : 1 - Math.pow(2, -10 * t),
                    easeInOutExpo: t => Ht(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
                    easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
                    easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
                    easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
                    easeInElastic: t => Ht(t) ? t : Wt(t, .075, .3),
                    easeOutElastic: t => Ht(t) ? t : $t(t, .075, .3),
                    easeInOutElastic(t) {
                        const e = .1125;
                        return Ht(t) ? t : t < .5 ? .5 * Wt(2 * t, e, .45) : .5 + .5 * $t(2 * t - 1, e, .45)
                    },
                    easeInBack(t) {
                        const e = 1.70158;
                        return t * t * ((e + 1) * t - e)
                    },
                    easeOutBack(t) {
                        const e = 1.70158;
                        return (t -= 1) * t * ((e + 1) * t + e) + 1
                    },
                    easeInOutBack(t) {
                        let e = 1.70158;
                        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                    },
                    easeInBounce: t => 1 - Yt.easeOutBounce(1 - t),
                    easeOutBounce(t) {
                        const e = 7.5625,
                            i = 2.75;
                        return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375
                    },
                    easeInOutBounce: t => t < .5 ? .5 * Yt.easeInBounce(2 * t) : .5 * Yt.easeOutBounce(2 * t - 1) + .5
                };

            function Ut(t) {
                if (t && "object" == typeof t) {
                    const e = t.toString();
                    return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e
                }
                return !1
            }

            function Xt(t) {
                return Ut(t) ? t : new z(t)
            }

            function qt(t) {
                return Ut(t) ? t : new z(t).saturate(.5).darken(.1).hexString()
            }
            const Kt = ["x", "y", "borderWidth", "radius", "tension"],
                Gt = ["color", "borderColor", "backgroundColor"];
            const Qt = new Map;

            function Zt(t, e, i) {
                return function(t, e) {
                    e = e || {};
                    const i = t + JSON.stringify(e);
                    let s = Qt.get(i);
                    return s || (s = new Intl.NumberFormat(t, e), Qt.set(i, s)), s
                }(e, i).format(t)
            }
            const Jt = {
                values: t => V(t) ? t : "" + t,
                numeric(t, e, i) {
                    if (0 === t) return "0";
                    const s = this.chart.options.locale;
                    let n, o = t;
                    if (i.length > 1) {
                        const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
                        (e < 1e-4 || e > 1e15) && (n = "scientific"), o = function(t, e) {
                            let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
                            Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
                            return i
                        }(t, i)
                    }
                    const r = gt(Math.abs(o)),
                        a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0),
                        h = {
                            notation: n,
                            minimumFractionDigits: a,
                            maximumFractionDigits: a
                        };
                    return Object.assign(h, this.options.ticks.format), Zt(t, s, h)
                },
                logarithmic(t, e, i) {
                    if (0 === t) return "0";
                    const s = i[e].significand || t / Math.pow(10, Math.floor(gt(t)));
                    return [1, 2, 3, 5, 10, 15].includes(s) || e > .8 * i.length ? Jt.numeric.call(this, t, e, i) : ""
                }
            };
            var te = {
                formatters: Jt
            };
            const ee = Object.create(null),
                ie = Object.create(null);

            function se(t, e) {
                if (!e) return t;
                const i = e.split(".");
                for (let e = 0, s = i.length; e < s; ++e) {
                    const s = i[e];
                    t = t[s] || (t[s] = Object.create(null))
                }
                return t
            }

            function ne(t, e, i) {
                return "string" == typeof e ? Q(se(t, e), i) : Q(se(t, ""), e)
            }
            class oe {
                constructor(t, e) {
                    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        size: 12,
                        style: "normal",
                        lineHeight: 1.2,
                        weight: null
                    }, this.hover = {}, this.hoverBackgroundColor = (t, e) => qt(e.backgroundColor), this.hoverBorderColor = (t, e) => qt(e.borderColor), this.hoverColor = (t, e) => qt(e.color), this.indexAxis = "x", this.interaction = {
                        mode: "nearest",
                        intersect: !0,
                        includeInvisible: !1
                    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e)
                }
                set(t, e) {
                    return ne(this, t, e)
                }
                get(t) {
                    return se(this, t)
                }
                describe(t, e) {
                    return ne(ie, t, e)
                }
                override(t, e) {
                    return ne(ee, t, e)
                }
                route(t, e, i, s) {
                    const n = se(this, t),
                        o = se(this, i),
                        r = "_" + e;
                    Object.defineProperties(n, {
                        [r]: {
                            value: n[e],
                            writable: !0
                        },
                        [e]: {
                            enumerable: !0,
                            get() {
                                const t = this[r],
                                    e = o[s];
                                return j(t) ? Object.assign({}, e, t) : W(t, e)
                            },
                            set(t) {
                                this[r] = t
                            }
                        }
                    })
                }
                apply(t) {
                    t.forEach((t => t(this)))
                }
            }
            var re = new oe({
                _scriptable: t => !t.startsWith("on"),
                _indexable: t => "events" !== t,
                hover: {
                    _fallback: "interaction"
                },
                interaction: {
                    _scriptable: !1,
                    _indexable: !1
                }
            }, [function(t) {
                t.set("animation", {
                    delay: void 0,
                    duration: 1e3,
                    easing: "easeOutQuart",
                    fn: void 0,
                    from: void 0,
                    loop: void 0,
                    to: void 0,
                    type: void 0
                }), t.describe("animation", {
                    _fallback: !1,
                    _indexable: !1,
                    _scriptable: t => "onProgress" !== t && "onComplete" !== t && "fn" !== t
                }), t.set("animations", {
                    colors: {
                        type: "color",
                        properties: Gt
                    },
                    numbers: {
                        type: "number",
                        properties: Kt
                    }
                }), t.describe("animations", {
                    _fallback: "animation"
                }), t.set("transitions", {
                    active: {
                        animation: {
                            duration: 400
                        }
                    },
                    resize: {
                        animation: {
                            duration: 0
                        }
                    },
                    show: {
                        animations: {
                            colors: {
                                from: "transparent"
                            },
                            visible: {
                                type: "boolean",
                                duration: 0
                            }
                        }
                    },
                    hide: {
                        animations: {
                            colors: {
                                to: "transparent"
                            },
                            visible: {
                                type: "boolean",
                                easing: "linear",
                                fn: t => 0 | t
                            }
                        }
                    }
                })
            }, function(t) {
                t.set("layout", {
                    autoPadding: !0,
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                })
            }, function(t) {
                t.set("scale", {
                    display: !0,
                    offset: !1,
                    reverse: !1,
                    beginAtZero: !1,
                    bounds: "ticks",
                    grace: 0,
                    grid: {
                        display: !0,
                        lineWidth: 1,
                        drawOnChartArea: !0,
                        drawTicks: !0,
                        tickLength: 8,
                        tickWidth: (t, e) => e.lineWidth,
                        tickColor: (t, e) => e.color,
                        offset: !1
                    },
                    border: {
                        display: !0,
                        dash: [],
                        dashOffset: 0,
                        width: 1
                    },
                    title: {
                        display: !1,
                        text: "",
                        padding: {
                            top: 4,
                            bottom: 4
                        }
                    },
                    ticks: {
                        minRotation: 0,
                        maxRotation: 50,
                        mirror: !1,
                        textStrokeWidth: 0,
                        textStrokeColor: "",
                        padding: 3,
                        display: !0,
                        autoSkip: !0,
                        autoSkipPadding: 3,
                        labelOffset: 0,
                        callback: te.formatters.values,
                        minor: {},
                        major: {},
                        align: "center",
                        crossAlign: "near",
                        showLabelBackdrop: !1,
                        backdropColor: "rgba(255, 255, 255, 0.75)",
                        backdropPadding: 2
                    }
                }), t.route("scale.ticks", "color", "", "color"), t.route("scale.grid", "color", "", "borderColor"), t.route("scale.border", "color", "", "borderColor"), t.route("scale.title", "color", "", "color"), t.describe("scale", {
                    _fallback: !1,
                    _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t,
                    _indexable: t => "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t
                }), t.describe("scales", {
                    _fallback: "scale"
                }), t.describe("scale.ticks", {
                    _scriptable: t => "backdropPadding" !== t && "callback" !== t,
                    _indexable: t => "backdropPadding" !== t
                })
            }]);

            function ae(t, e, i, s, n) {
                let o = e[n];
                return o || (o = e[n] = t.measureText(n).width, i.push(n)), o > s && (s = o), s
            }

            function he(t, e, i) {
                const s = t.currentDevicePixelRatio,
                    n = 0 !== i ? Math.max(i / 2, .5) : 0;
                return Math.round((e - n) * s) / s + n
            }

            function le(t, e) {
                (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore()
            }

            function ce(t, e, i, s) {
                de(t, e, i, s, null)
            }

            function de(t, e, i, s, n) {
                let o, r, a, h, l, c, d, u;
                const f = e.pointStyle,
                    g = e.rotation,
                    p = e.radius;
                let m = (g || 0) * ct;
                if (f && "object" == typeof f && (o = f.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(i, s), t.rotate(m), t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), void t.restore();
                if (!(isNaN(p) || p <= 0)) {
                    switch (t.beginPath(), f) {
                        default:
                            n ? t.ellipse(i, s, n / 2, p, 0, 0, at) : t.arc(i, s, p, 0, at), t.closePath();
                            break;
                        case "triangle":
                            c = n ? n / 2 : p, t.moveTo(i + Math.sin(m) * c, s - Math.cos(m) * p), m += ft, t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p), m += ft, t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p), t.closePath();
                            break;
                        case "rectRounded":
                            l = .516 * p, h = p - l, r = Math.cos(m + ut) * h, d = Math.cos(m + ut) * (n ? n / 2 - l : h), a = Math.sin(m + ut) * h, u = Math.sin(m + ut) * (n ? n / 2 - l : h), t.arc(i - d, s - a, l, m - rt, m - dt), t.arc(i + u, s - r, l, m - dt, m), t.arc(i + d, s + a, l, m, m + dt), t.arc(i - u, s + r, l, m + dt, m + rt), t.closePath();
                            break;
                        case "rect":
                            if (!g) {
                                h = Math.SQRT1_2 * p, c = n ? n / 2 : h, t.rect(i - c, s - h, 2 * c, 2 * h);
                                break
                            }
                            m += ut;
                        case "rectRot":
                            d = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - a), t.lineTo(i + u, s - r), t.lineTo(i + d, s + a), t.lineTo(i - u, s + r), t.closePath();
                            break;
                        case "crossRot":
                            m += ut;
                        case "cross":
                            d = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - a), t.lineTo(i + d, s + a), t.moveTo(i + u, s - r), t.lineTo(i - u, s + r);
                            break;
                        case "star":
                            d = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - a), t.lineTo(i + d, s + a), t.moveTo(i + u, s - r), t.lineTo(i - u, s + r), m += ut, d = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - a), t.lineTo(i + d, s + a), t.moveTo(i + u, s - r), t.lineTo(i - u, s + r);
                            break;
                        case "line":
                            r = n ? n / 2 : Math.cos(m) * p, a = Math.sin(m) * p, t.moveTo(i - r, s - a), t.lineTo(i + r, s + a);
                            break;
                        case "dash":
                            t.moveTo(i, s), t.lineTo(i + Math.cos(m) * (n ? n / 2 : p), s + Math.sin(m) * p);
                            break;
                        case !1:
                            t.closePath()
                    }
                    t.fill(), e.borderWidth > 0 && t.stroke()
                }
            }

            function ue(t, e, i) {
                return i = i || .5, !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i
            }

            function fe(t, e) {
                t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
            }

            function ge(t) {
                t.restore()
            }

            function pe(t, e, i, s, n) {
                if (!e) return t.lineTo(i.x, i.y);
                if ("middle" === n) {
                    const s = (e.x + i.x) / 2;
                    t.lineTo(s, e.y), t.lineTo(s, i.y)
                } else "after" === n != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
                t.lineTo(i.x, i.y)
            }

            function me(t, e, i, s) {
                if (!e) return t.lineTo(i.x, i.y);
                t.bezierCurveTo(s ? e.cp1x : e.cp2x, s ? e.cp1y : e.cp2y, s ? i.cp2x : i.cp1x, s ? i.cp2y : i.cp1y, i.x, i.y)
            }

            function be(t, e, i, s, n) {
                if (n.strikethrough || n.underline) {
                    const o = t.measureText(s),
                        r = e - o.actualBoundingBoxLeft,
                        a = e + o.actualBoundingBoxRight,
                        h = i - o.actualBoundingBoxAscent,
                        l = i + o.actualBoundingBoxDescent,
                        c = n.strikethrough ? (h + l) / 2 : l;
                    t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = n.decorationWidth || 2, t.moveTo(r, c), t.lineTo(a, c), t.stroke()
                }
            }

            function xe(t, e) {
                const i = t.fillStyle;
                t.fillStyle = e.color, t.fillRect(e.left, e.top, e.width, e.height), t.fillStyle = i
            }

            function _e(t, e, i, s, n, o = {}) {
                const r = V(e) ? e : [e],
                    a = o.strokeWidth > 0 && "" !== o.strokeColor;
                let h, l;
                for (t.save(), t.font = n.string, function(t, e) {
                        e.translation && t.translate(e.translation[0], e.translation[1]), B(e.rotation) || t.rotate(e.rotation), e.color && (t.fillStyle = e.color), e.textAlign && (t.textAlign = e.textAlign), e.textBaseline && (t.textBaseline = e.textBaseline)
                    }(t, o), h = 0; h < r.length; ++h) l = r[h], o.backdrop && xe(t, o.backdrop), a && (o.strokeColor && (t.strokeStyle = o.strokeColor), B(o.strokeWidth) || (t.lineWidth = o.strokeWidth), t.strokeText(l, i, s, o.maxWidth)), t.fillText(l, i, s, o.maxWidth), be(t, i, s, l, o), s += Number(n.lineHeight);
                t.restore()
            }

            function ye(t, e) {
                const {
                    x: i,
                    y: s,
                    w: n,
                    h: o,
                    radius: r
                } = e;
                t.arc(i + r.topLeft, s + r.topLeft, r.topLeft, -dt, rt, !0), t.lineTo(i, s + o - r.bottomLeft), t.arc(i + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, rt, dt, !0), t.lineTo(i + n - r.bottomRight, s + o), t.arc(i + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, dt, 0, !0), t.lineTo(i + n, s + r.topRight), t.arc(i + n - r.topRight, s + r.topRight, r.topRight, 0, -dt, !0), t.lineTo(i + r.topLeft, s)
            }
            const ve = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
                we = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;

            function ke(t, e) {
                const i = ("" + t).match(ve);
                if (!i || "normal" === i[1]) return 1.2 * e;
                switch (t = +i[2], i[3]) {
                    case "px":
                        return t;
                    case "%":
                        t /= 100
                }
                return e * t
            }
            const Me = t => +t || 0;

            function Se(t, e) {
                const i = {},
                    s = j(e),
                    n = s ? Object.keys(e) : e,
                    o = j(t) ? s ? i => W(t[i], t[e[i]]) : e => t[e] : () => t;
                for (const t of n) i[t] = Me(o(t));
                return i
            }

            function Oe(t) {
                return Se(t, {
                    top: "y",
                    right: "x",
                    bottom: "y",
                    left: "x"
                })
            }

            function De(t) {
                return Se(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
            }

            function Pe(t) {
                const e = Oe(t);
                return e.width = e.left + e.right, e.height = e.top + e.bottom, e
            }

            function Te(t, e) {
                t = t || {}, e = e || re.font;
                let i = W(t.size, e.size);
                "string" == typeof i && (i = parseInt(i, 10));
                let s = W(t.style, e.style);
                s && !("" + s).match(we) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
                const n = {
                    family: W(t.family, e.family),
                    lineHeight: ke(W(t.lineHeight, e.lineHeight), i),
                    size: i,
                    style: s,
                    weight: W(t.weight, e.weight),
                    string: ""
                };
                return n.string = function(t) {
                    return !t || B(t.size) || B(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
                }(n), n
            }

            function Ce(t, e, i, s) {
                let n, o, r, a = !0;
                for (n = 0, o = t.length; n < o; ++n)
                    if (r = t[n], void 0 !== r && (void 0 !== e && "function" == typeof r && (r = r(e), a = !1), void 0 !== i && V(r) && (r = r[i % r.length], a = !1), void 0 !== r)) return s && !a && (s.cacheable = !1), r
            }

            function Ae(t, e) {
                return Object.assign(Object.create(t), e)
            }

            function Ie(t, e = [""], i, s, n = (() => t[0])) {
                const o = i || t;
                void 0 === s && (s = We("_fallback", t));
                const r = {
                    [Symbol.toStringTag]: "Object",
                    _cacheable: !0,
                    _scopes: t,
                    _rootScopes: o,
                    _fallback: s,
                    _getTarget: n,
                    override: i => Ie([i, ...t], e, o, s)
                };
                return new Proxy(r, {
                    deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0),
                    get: (i, s) => Fe(i, s, (() => function(t, e, i, s) {
                        let n;
                        for (const o of e)
                            if (n = We(ze(o, t), i), void 0 !== n) return Re(t, n) ? Ne(i, s, t, n) : n
                    }(s, e, t, i))),
                    getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
                    getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
                    has: (t, e) => $e(t).includes(e),
                    ownKeys: t => $e(t),
                    set(t, e, i) {
                        const s = t._storage || (t._storage = n());
                        return t[e] = s[e] = i, delete t._keys, !0
                    }
                })
            }

            function Ee(t, e, i, s) {
                const n = {
                    _cacheable: !1,
                    _proxy: t,
                    _context: e,
                    _subProxy: i,
                    _stack: new Set,
                    _descriptors: Le(t, s),
                    setContext: e => Ee(t, e, i, s),
                    override: n => Ee(t.override(n), e, i, s)
                };
                return new Proxy(n, {
                    deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
                    get: (t, e, i) => Fe(t, e, (() => function(t, e, i) {
                        const {
                            _proxy: s,
                            _context: n,
                            _subProxy: o,
                            _descriptors: r
                        } = t;
                        let a = s[e];
                        nt(a) && r.isScriptable(e) && (a = function(t, e, i, s) {
                            const {
                                _proxy: n,
                                _context: o,
                                _subProxy: r,
                                _stack: a
                            } = i;
                            if (a.has(t)) throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + t);
                            a.add(t);
                            let h = e(o, r || s);
                            a.delete(t), Re(t, h) && (h = Ne(n._scopes, n, t, h));
                            return h
                        }(e, a, t, i));
                        V(a) && a.length && (a = function(t, e, i, s) {
                            const {
                                _proxy: n,
                                _context: o,
                                _subProxy: r,
                                _descriptors: a
                            } = i;
                            if (void 0 !== o.index && s(t)) return e[o.index % e.length];
                            if (j(e[0])) {
                                const i = e,
                                    s = n._scopes.filter((t => t !== i));
                                e = [];
                                for (const h of i) {
                                    const i = Ne(s, n, t, h);
                                    e.push(Ee(i, o, r && r[t], a))
                                }
                            }
                            return e
                        }(e, a, t, r.isIndexable));
                        Re(e, a) && (a = Ee(a, n, o && o[e], r));
                        return a
                    }(t, e, i))),
                    getOwnPropertyDescriptor: (e, i) => e._descriptors.allKeys ? Reflect.has(t, i) ? {
                        enumerable: !0,
                        configurable: !0
                    } : void 0 : Reflect.getOwnPropertyDescriptor(t, i),
                    getPrototypeOf: () => Reflect.getPrototypeOf(t),
                    has: (e, i) => Reflect.has(t, i),
                    ownKeys: () => Reflect.ownKeys(t),
                    set: (e, i, s) => (t[i] = s, delete e[i], !0)
                })
            }

            function Le(t, e = {
                scriptable: !0,
                indexable: !0
            }) {
                const {
                    _scriptable: i = e.scriptable,
                    _indexable: s = e.indexable,
                    _allKeys: n = e.allKeys
                } = t;
                return {
                    allKeys: n,
                    scriptable: i,
                    indexable: s,
                    isScriptable: nt(i) ? i : () => i,
                    isIndexable: nt(s) ? s : () => s
                }
            }
            const ze = (t, e) => t ? t + it(e) : e,
                Re = (t, e) => j(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);

            function Fe(t, e, i) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
                const s = i();
                return t[e] = s, s
            }

            function Be(t, e, i) {
                return nt(t) ? t(e, i) : t
            }
            const Ve = (t, e) => !0 === t ? e : "string" == typeof t ? et(e, t) : void 0;

            function je(t, e, i, s, n) {
                for (const o of e) {
                    const e = Ve(i, o);
                    if (e) {
                        t.add(e);
                        const o = Be(e._fallback, i, n);
                        if (void 0 !== o && o !== i && o !== s) return o
                    } else if (!1 === e && void 0 !== s && i !== s) return null
                }
                return !1
            }

            function Ne(t, e, i, s) {
                const n = e._rootScopes,
                    o = Be(e._fallback, i, s),
                    r = [...t, ...n],
                    a = new Set;
                a.add(s);
                let h = He(a, r, i, o || i, s);
                return null !== h && ((void 0 === o || o === i || (h = He(a, r, o, h, s), null !== h)) && Ie(Array.from(a), [""], n, o, (() => function(t, e, i) {
                    const s = t._getTarget();
                    e in s || (s[e] = {});
                    const n = s[e];
                    if (V(n) && j(i)) return i;
                    return n || {}
                }(e, i, s))))
            }

            function He(t, e, i, s, n) {
                for (; i;) i = je(t, e, i, s, n);
                return i
            }

            function We(t, e) {
                for (const i of e) {
                    if (!i) continue;
                    const e = i[t];
                    if (void 0 !== e) return e
                }
            }

            function $e(t) {
                let e = t._keys;
                return e || (e = t._keys = function(t) {
                    const e = new Set;
                    for (const i of t)
                        for (const t of Object.keys(i).filter((t => !t.startsWith("_")))) e.add(t);
                    return Array.from(e)
                }(t._scopes)), e
            }
            const Ye = Number.EPSILON || 1e-14,
                Ue = (t, e) => e < t.length && !t[e].skip && t[e],
                Xe = t => "x" === t ? "y" : "x";

            function qe(t, e, i, s) {
                const n = t.skip ? e : t,
                    o = e,
                    r = i.skip ? e : i,
                    a = Mt(o, n),
                    h = Mt(r, o);
                let l = a / (a + h),
                    c = h / (a + h);
                l = isNaN(l) ? 0 : l, c = isNaN(c) ? 0 : c;
                const d = s * l,
                    u = s * c;
                return {
                    previous: {
                        x: o.x - d * (r.x - n.x),
                        y: o.y - d * (r.y - n.y)
                    },
                    next: {
                        x: o.x + u * (r.x - n.x),
                        y: o.y + u * (r.y - n.y)
                    }
                }
            }

            function Ke(t, e = "x") {
                const i = Xe(e),
                    s = t.length,
                    n = Array(s).fill(0),
                    o = Array(s);
                let r, a, h, l = Ue(t, 0);
                for (r = 0; r < s; ++r)
                    if (a = h, h = l, l = Ue(t, r + 1), h) {
                        if (l) {
                            const t = l[e] - h[e];
                            n[r] = 0 !== t ? (l[i] - h[i]) / t : 0
                        }
                        o[r] = a ? l ? pt(n[r - 1]) !== pt(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r]
                    }!
                function(t, e, i) {
                    const s = t.length;
                    let n, o, r, a, h, l = Ue(t, 0);
                    for (let c = 0; c < s - 1; ++c) h = l, l = Ue(t, c + 1), h && l && (mt(e[c], 0, Ye) ? i[c] = i[c + 1] = 0 : (n = i[c] / e[c], o = i[c + 1] / e[c], a = Math.pow(n, 2) + Math.pow(o, 2), a <= 9 || (r = 3 / Math.sqrt(a), i[c] = n * r * e[c], i[c + 1] = o * r * e[c])))
                }(t, n, o),
                function(t, e, i = "x") {
                    const s = Xe(i),
                        n = t.length;
                    let o, r, a, h = Ue(t, 0);
                    for (let l = 0; l < n; ++l) {
                        if (r = a, a = h, h = Ue(t, l + 1), !a) continue;
                        const n = a[i],
                            c = a[s];
                        r && (o = (n - r[i]) / 3, a[`cp1${i}`] = n - o, a[`cp1${s}`] = c - o * e[l]), h && (o = (h[i] - n) / 3, a[`cp2${i}`] = n + o, a[`cp2${s}`] = c + o * e[l])
                    }
                }(t, o, e)
            }

            function Ge(t, e, i) {
                return Math.max(Math.min(t, i), e)
            }

            function Qe(t, e, i, s, n) {
                let o, r, a, h;
                if (e.spanGaps && (t = t.filter((t => !t.skip))), "monotone" === e.cubicInterpolationMode) Ke(t, n);
                else {
                    let i = s ? t[t.length - 1] : t[0];
                    for (o = 0, r = t.length; o < r; ++o) a = t[o], h = qe(i, a, t[Math.min(o + 1, r - (s ? 0 : 1)) % r], e.tension), a.cp1x = h.previous.x, a.cp1y = h.previous.y, a.cp2x = h.next.x, a.cp2y = h.next.y, i = a
                }
                e.capBezierPoints && function(t, e) {
                    let i, s, n, o, r, a = ue(t[0], e);
                    for (i = 0, s = t.length; i < s; ++i) r = o, o = a, a = i < s - 1 && ue(t[i + 1], e), o && (n = t[i], r && (n.cp1x = Ge(n.cp1x, e.left, e.right), n.cp1y = Ge(n.cp1y, e.top, e.bottom)), a && (n.cp2x = Ge(n.cp2x, e.left, e.right), n.cp2y = Ge(n.cp2y, e.top, e.bottom)))
                }(t, i)
            }

            function Ze() {
                return "undefined" != typeof window && "undefined" != typeof document
            }

            function Je(t) {
                let e = t.parentNode;
                return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
            }

            function ti(t, e, i) {
                let s;
                return "string" == typeof t ? (s = parseInt(t, 10), -1 !== t.indexOf("%") && (s = s / 100 * e.parentNode[i])) : s = t, s
            }
            const ei = t => t.ownerDocument.defaultView.getComputedStyle(t, null);
            const ii = ["top", "right", "bottom", "left"];

            function si(t, e, i) {
                const s = {};
                i = i ? "-" + i : "";
                for (let n = 0; n < 4; n++) {
                    const o = ii[n];
                    s[o] = parseFloat(t[e + "-" + o + i]) || 0
                }
                return s.width = s.left + s.right, s.height = s.top + s.bottom, s
            }
            const ni = (t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot);

            function oi(t, e) {
                if ("native" in t) return t;
                const {
                    canvas: i,
                    currentDevicePixelRatio: s
                } = e, n = ei(i), o = "border-box" === n.boxSizing, r = si(n, "padding"), a = si(n, "border", "width"), {
                    x: h,
                    y: l,
                    box: c
                } = function(t, e) {
                    const i = t.touches,
                        s = i && i.length ? i[0] : t,
                        {
                            offsetX: n,
                            offsetY: o
                        } = s;
                    let r, a, h = !1;
                    if (ni(n, o, t.target)) r = n, a = o;
                    else {
                        const t = e.getBoundingClientRect();
                        r = s.clientX - t.left, a = s.clientY - t.top, h = !0
                    }
                    return {
                        x: r,
                        y: a,
                        box: h
                    }
                }(t, i), d = r.left + (c && a.left), u = r.top + (c && a.top);
                let {
                    width: f,
                    height: g
                } = e;
                return o && (f -= r.width + a.width, g -= r.height + a.height), {
                    x: Math.round((h - d) / f * i.width / s),
                    y: Math.round((l - u) / g * i.height / s)
                }
            }
            const ri = t => Math.round(10 * t) / 10;

            function ai(t, e, i, s) {
                const n = ei(t),
                    o = si(n, "margin"),
                    r = ti(n.maxWidth, t, "clientWidth") || lt,
                    a = ti(n.maxHeight, t, "clientHeight") || lt,
                    h = function(t, e, i) {
                        let s, n;
                        if (void 0 === e || void 0 === i) {
                            const o = Je(t);
                            if (o) {
                                const t = o.getBoundingClientRect(),
                                    r = ei(o),
                                    a = si(r, "border", "width"),
                                    h = si(r, "padding");
                                e = t.width - h.width - a.width, i = t.height - h.height - a.height, s = ti(r.maxWidth, o, "clientWidth"), n = ti(r.maxHeight, o, "clientHeight")
                            } else e = t.clientWidth, i = t.clientHeight
                        }
                        return {
                            width: e,
                            height: i,
                            maxWidth: s || lt,
                            maxHeight: n || lt
                        }
                    }(t, e, i);
                let {
                    width: l,
                    height: c
                } = h;
                if ("content-box" === n.boxSizing) {
                    const t = si(n, "border", "width"),
                        e = si(n, "padding");
                    l -= e.width + t.width, c -= e.height + t.height
                }
                l = Math.max(0, l - o.width), c = Math.max(0, s ? l / s : c - o.height), l = ri(Math.min(l, r, h.maxWidth)), c = ri(Math.min(c, a, h.maxHeight)), l && !c && (c = ri(l / 2));
                return (void 0 !== e || void 0 !== i) && s && h.height && c > h.height && (c = h.height, l = ri(Math.floor(c * s))), {
                    width: l,
                    height: c
                }
            }

            function hi(t, e, i) {
                const s = e || 1,
                    n = Math.floor(t.height * s),
                    o = Math.floor(t.width * s);
                t.height = Math.floor(t.height), t.width = Math.floor(t.width);
                const r = t.canvas;
                return r.style && (i || !r.style.height && !r.style.width) && (r.style.height = `${t.height}px`, r.style.width = `${t.width}px`), (t.currentDevicePixelRatio !== s || r.height !== n || r.width !== o) && (t.currentDevicePixelRatio = s, r.height = n, r.width = o, t.ctx.setTransform(s, 0, 0, s, 0, 0), !0)
            }
            const li = function() {
                let t = !1;
                try {
                    const e = {
                        get passive() {
                            return t = !0, !1
                        }
                    };
                    window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
                } catch (t) {}
                return t
            }();

            function ci(t, e) {
                const i = function(t, e) {
                        return ei(t).getPropertyValue(e)
                    }(t, e),
                    s = i && i.match(/^(\d+)(\.\d+)?px$/);
                return s ? +s[1] : void 0
            }

            function di(t, e, i, s) {
                return {
                    x: t.x + i * (e.x - t.x),
                    y: t.y + i * (e.y - t.y)
                }
            }

            function ui(t, e, i, s) {
                return {
                    x: t.x + i * (e.x - t.x),
                    y: "middle" === s ? i < .5 ? t.y : e.y : "after" === s ? i < 1 ? t.y : e.y : i > 0 ? e.y : t.y
                }
            }

            function fi(t, e, i, s) {
                const n = {
                        x: t.cp2x,
                        y: t.cp2y
                    },
                    o = {
                        x: e.cp1x,
                        y: e.cp1y
                    },
                    r = di(t, n, i),
                    a = di(n, o, i),
                    h = di(o, e, i),
                    l = di(r, a, i),
                    c = di(a, h, i);
                return di(l, c, i)
            }

            function gi(t, e, i) {
                return t ? function(t, e) {
                    return {
                        x: i => t + t + e - i,
                        setWidth(t) {
                            e = t
                        },
                        textAlign: t => "center" === t ? t : "right" === t ? "left" : "right",
                        xPlus: (t, e) => t - e,
                        leftForLtr: (t, e) => t - e
                    }
                }(e, i) : {
                    x: t => t,
                    setWidth(t) {},
                    textAlign: t => t,
                    xPlus: (t, e) => t + e,
                    leftForLtr: (t, e) => t
                }
            }

            function pi(t, e) {
                let i, s;
                "ltr" !== e && "rtl" !== e || (i = t.canvas.style, s = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = s)
            }

            function mi(t, e) {
                void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
            }

            function bi(t) {
                return "angle" === t ? {
                    between: Dt,
                    compare: St,
                    normalize: Ot
                } : {
                    between: Tt,
                    compare: (t, e) => t - e,
                    normalize: t => t
                }
            }

            function xi({
                start: t,
                end: e,
                count: i,
                loop: s,
                style: n
            }) {
                return {
                    start: t % i,
                    end: e % i,
                    loop: s && (e - t + 1) % i == 0,
                    style: n
                }
            }

            function _i(t, e, i) {
                if (!i) return [t];
                const {
                    property: s,
                    start: n,
                    end: o
                } = i, r = e.length, {
                    compare: a,
                    between: h,
                    normalize: l
                } = bi(s), {
                    start: c,
                    end: d,
                    loop: u,
                    style: f
                } = function(t, e, i) {
                    const {
                        property: s,
                        start: n,
                        end: o
                    } = i, {
                        between: r,
                        normalize: a
                    } = bi(s), h = e.length;
                    let l, c, {
                        start: d,
                        end: u,
                        loop: f
                    } = t;
                    if (f) {
                        for (d += h, u += h, l = 0, c = h; l < c && r(a(e[d % h][s]), n, o); ++l) d--, u--;
                        d %= h, u %= h
                    }
                    return u < d && (u += h), {
                        start: d,
                        end: u,
                        loop: f,
                        style: t.style
                    }
                }(t, e, i), g = [];
                let p, m, b, x = !1,
                    _ = null;
                const y = () => x || h(n, b, p) && 0 !== a(n, b),
                    v = () => !x || 0 === a(o, p) || h(o, b, p);
                for (let t = c, i = c; t <= d; ++t) m = e[t % r], m.skip || (p = l(m[s]), p !== b && (x = h(p, n, o), null === _ && y() && (_ = 0 === a(p, n) ? t : i), null !== _ && v() && (g.push(xi({
                    start: _,
                    end: t,
                    loop: u,
                    count: r,
                    style: f
                })), _ = null), i = t, b = p));
                return null !== _ && g.push(xi({
                    start: _,
                    end: d,
                    loop: u,
                    count: r,
                    style: f
                })), g
            }

            function yi(t, e) {
                const i = [],
                    s = t.segments;
                for (let n = 0; n < s.length; n++) {
                    const o = _i(s[n], t.points, e);
                    o.length && i.push(...o)
                }
                return i
            }

            function vi(t, e, i, s) {
                return s && s.setContext && i ? function(t, e, i, s) {
                    const n = t._chart.getContext(),
                        o = wi(t.options),
                        {
                            _datasetIndex: r,
                            options: {
                                spanGaps: a
                            }
                        } = t,
                        h = i.length,
                        l = [];
                    let c = o,
                        d = e[0].start,
                        u = d;

                    function f(t, e, s, n) {
                        const o = a ? -1 : 1;
                        if (t !== e) {
                            for (t += h; i[t % h].skip;) t -= o;
                            for (; i[e % h].skip;) e += o;
                            t % h != e % h && (l.push({
                                start: t % h,
                                end: e % h,
                                loop: s,
                                style: n
                            }), c = n, d = e % h)
                        }
                    }
                    for (const t of e) {
                        d = a ? d : t.start;
                        let e, o = i[d % h];
                        for (u = d + 1; u <= t.end; u++) {
                            const a = i[u % h];
                            e = wi(s.setContext(Ae(n, {
                                type: "segment",
                                p0: o,
                                p1: a,
                                p0DataIndex: (u - 1) % h,
                                p1DataIndex: u % h,
                                datasetIndex: r
                            }))), ki(e, c) && f(d, u - 1, t.loop, c), o = a, c = e
                        }
                        d < u - 1 && f(d, u - 1, t.loop, c)
                    }
                    return l
                }(t, e, i, s) : e
            }

            function wi(t) {
                return {
                    backgroundColor: t.backgroundColor,
                    borderCapStyle: t.borderCapStyle,
                    borderDash: t.borderDash,
                    borderDashOffset: t.borderDashOffset,
                    borderJoinStyle: t.borderJoinStyle,
                    borderWidth: t.borderWidth,
                    borderColor: t.borderColor
                }
            }

            function ki(t, e) {
                if (!e) return !1;
                const i = [],
                    s = function(t, e) {
                        return Ut(e) ? (i.includes(e) || i.push(e), i.indexOf(e)) : e
                    };
                return JSON.stringify(t, s) !== JSON.stringify(e, s)
            }
            class Mi {
                constructor() {
                    this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0
                }
                _notify(t, e, i, s) {
                    const n = e.listeners[s],
                        o = e.duration;
                    n.forEach((s => s({
                        chart: t,
                        initial: e.initial,
                        numSteps: o,
                        currentStep: Math.min(i - e.start, o)
                    })))
                }
                _refresh() {
                    this._request || (this._running = !0, this._request = Rt.call(window, (() => {
                        this._update(), this._request = null, this._running && this._refresh()
                    })))
                }
                _update(t = Date.now()) {
                    let e = 0;
                    this._charts.forEach(((i, s) => {
                        if (!i.running || !i.items.length) return;
                        const n = i.items;
                        let o, r = n.length - 1,
                            a = !1;
                        for (; r >= 0; --r) o = n[r], o._active ? (o._total > i.duration && (i.duration = o._total), o.tick(t), a = !0) : (n[r] = n[n.length - 1], n.pop());
                        a && (s.draw(), this._notify(s, i, t, "progress")), n.length || (i.running = !1, this._notify(s, i, t, "complete"), i.initial = !1), e += n.length
                    })), this._lastDate = t, 0 === e && (this._running = !1)
                }
                _getAnims(t) {
                    const e = this._charts;
                    let i = e.get(t);
                    return i || (i = {
                        running: !1,
                        initial: !0,
                        items: [],
                        listeners: {
                            complete: [],
                            progress: []
                        }
                    }, e.set(t, i)), i
                }
                listen(t, e, i) {
                    this._getAnims(t).listeners[e].push(i)
                }
                add(t, e) {
                    e && e.length && this._getAnims(t).items.push(...e)
                }
                has(t) {
                    return this._getAnims(t).items.length > 0
                }
                start(t) {
                    const e = this._charts.get(t);
                    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce(((t, e) => Math.max(t, e._duration)), 0), this._refresh())
                }
                running(t) {
                    if (!this._running) return !1;
                    const e = this._charts.get(t);
                    return !!(e && e.running && e.items.length)
                }
                stop(t) {
                    const e = this._charts.get(t);
                    if (!e || !e.items.length) return;
                    const i = e.items;
                    let s = i.length - 1;
                    for (; s >= 0; --s) i[s].cancel();
                    e.items = [], this._notify(t, e, Date.now(), "complete")
                }
                remove(t) {
                    return this._charts.delete(t)
                }
            }
            var Si = new Mi;
            const Oi = "transparent",
                Di = {
                    boolean: (t, e, i) => i > .5 ? e : t,
                    color(t, e, i) {
                        const s = Xt(t || Oi),
                            n = s.valid && Xt(e || Oi);
                        return n && n.valid ? n.mix(s, i).hexString() : e
                    },
                    number: (t, e, i) => t + (e - t) * i
                };
            class Pi {
                constructor(t, e, i, s) {
                    const n = e[i];
                    s = Ce([t.to, s, n, t.from]);
                    const o = Ce([t.from, n, s]);
                    this._active = !0, this._fn = t.fn || Di[t.type || typeof o], this._easing = Yt[t.easing] || Yt.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = o, this._to = s, this._promises = void 0
                }
                active() {
                    return this._active
                }
                update(t, e, i) {
                    if (this._active) {
                        this._notify(!1);
                        const s = this._target[this._prop],
                            n = i - this._start,
                            o = this._duration - n;
                        this._start = i, this._duration = Math.floor(Math.max(o, t.duration)), this._total += n, this._loop = !!t.loop, this._to = Ce([t.to, e, s, t.from]), this._from = Ce([t.from, s, e])
                    }
                }
                cancel() {
                    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1))
                }
                tick(t) {
                    const e = t - this._start,
                        i = this._duration,
                        s = this._prop,
                        n = this._from,
                        o = this._loop,
                        r = this._to;
                    let a;
                    if (this._active = n !== r && (o || e < i), !this._active) return this._target[s] = r, void this._notify(!0);
                    e < 0 ? this._target[s] = n : (a = e / i % 2, a = o && a > 1 ? 2 - a : a, a = this._easing(Math.min(1, Math.max(0, a))), this._target[s] = this._fn(n, r, a))
                }
                wait() {
                    const t = this._promises || (this._promises = []);
                    return new Promise(((e, i) => {
                        t.push({
                            res: e,
                            rej: i
                        })
                    }))
                }
                _notify(t) {
                    const e = t ? "res" : "rej",
                        i = this._promises || [];
                    for (let t = 0; t < i.length; t++) i[t][e]()
                }
            }
            class Ti {
                constructor(t, e) {
                    this._chart = t, this._properties = new Map, this.configure(e)
                }
                configure(t) {
                    if (!j(t)) return;
                    const e = Object.keys(re.animation),
                        i = this._properties;
                    Object.getOwnPropertyNames(t).forEach((s => {
                        const n = t[s];
                        if (!j(n)) return;
                        const o = {};
                        for (const t of e) o[t] = n[t];
                        (V(n.properties) && n.properties || [s]).forEach((t => {
                            t !== s && i.has(t) || i.set(t, o)
                        }))
                    }))
                }
                _animateOptions(t, e) {
                    const i = e.options,
                        s = function(t, e) {
                            if (!e) return;
                            let i = t.options;
                            if (!i) return void(t.options = e);
                            i.$shared && (t.options = i = Object.assign({}, i, {
                                $shared: !1,
                                $animations: {}
                            }));
                            return i
                        }(t, i);
                    if (!s) return [];
                    const n = this._createAnimations(s, i);
                    return i.$shared && function(t, e) {
                        const i = [],
                            s = Object.keys(e);
                        for (let e = 0; e < s.length; e++) {
                            const n = t[s[e]];
                            n && n.active() && i.push(n.wait())
                        }
                        return Promise.all(i)
                    }(t.options.$animations, i).then((() => {
                        t.options = i
                    }), (() => {})), n
                }
                _createAnimations(t, e) {
                    const i = this._properties,
                        s = [],
                        n = t.$animations || (t.$animations = {}),
                        o = Object.keys(e),
                        r = Date.now();
                    let a;
                    for (a = o.length - 1; a >= 0; --a) {
                        const h = o[a];
                        if ("$" === h.charAt(0)) continue;
                        if ("options" === h) {
                            s.push(...this._animateOptions(t, e));
                            continue
                        }
                        const l = e[h];
                        let c = n[h];
                        const d = i.get(h);
                        if (c) {
                            if (d && c.active()) {
                                c.update(d, l, r);
                                continue
                            }
                            c.cancel()
                        }
                        d && d.duration ? (n[h] = c = new Pi(d, t, h, l), s.push(c)) : t[h] = l
                    }
                    return s
                }
                update(t, e) {
                    if (0 === this._properties.size) return void Object.assign(t, e);
                    const i = this._createAnimations(t, e);
                    return i.length ? (Si.add(this._chart, i), !0) : void 0
                }
            }

            function Ci(t, e) {
                const i = t && t.options || {},
                    s = i.reverse,
                    n = void 0 === i.min ? e : 0,
                    o = void 0 === i.max ? e : 0;
                return {
                    start: s ? o : n,
                    end: s ? n : o
                }
            }

            function Ai(t, e) {
                const i = [],
                    s = t._getSortedDatasetMetas(e);
                let n, o;
                for (n = 0, o = s.length; n < o; ++n) i.push(s[n].index);
                return i
            }

            function Ii(t, e, i, s = {}) {
                const n = t.keys,
                    o = "single" === s.mode;
                let r, a, h, l;
                if (null !== e) {
                    for (r = 0, a = n.length; r < a; ++r) {
                        if (h = +n[r], h === i) {
                            if (s.all) continue;
                            break
                        }
                        l = t.values[h], N(l) && (o || 0 === e || pt(e) === pt(l)) && (e += l)
                    }
                    return e
                }
            }

            function Ei(t, e) {
                const i = t && t.options.stacked;
                return i || void 0 === i && void 0 !== e.stack
            }

            function Li(t, e, i) {
                const s = t[e] || (t[e] = {});
                return s[i] || (s[i] = {})
            }

            function zi(t, e, i, s) {
                for (const n of e.getMatchingVisibleMetas(s).reverse()) {
                    const e = t[n.index];
                    if (i && e > 0 || !i && e < 0) return n.index
                }
                return null
            }

            function Ri(t, e) {
                const {
                    chart: i,
                    _cachedMeta: s
                } = t, n = i._stacks || (i._stacks = {}), {
                    iScale: o,
                    vScale: r,
                    index: a
                } = s, h = o.axis, l = r.axis, c = function(t, e, i) {
                    return `${t.id}.${e.id}.${i.stack||i.type}`
                }(o, r, s), d = e.length;
                let u;
                for (let t = 0; t < d; ++t) {
                    const i = e[t],
                        {
                            [h]: o,
                            [l]: d
                        } = i;
                    u = (i._stacks || (i._stacks = {}))[l] = Li(n, c, o), u[a] = d, u._top = zi(u, r, !0, s.type), u._bottom = zi(u, r, !1, s.type);
                    (u._visualValues || (u._visualValues = {}))[a] = d
                }
            }

            function Fi(t, e) {
                const i = t.scales;
                return Object.keys(i).filter((t => i[t].axis === e)).shift()
            }

            function Bi(t, e) {
                const i = t.controller.index,
                    s = t.vScale && t.vScale.axis;
                if (s) {
                    e = e || t._parsed;
                    for (const t of e) {
                        const e = t._stacks;
                        if (!e || void 0 === e[s] || void 0 === e[s][i]) return;
                        delete e[s][i], void 0 !== e[s]._visualValues && void 0 !== e[s]._visualValues[i] && delete e[s]._visualValues[i]
                    }
                }
            }
            const Vi = t => "reset" === t || "none" === t,
                ji = (t, e) => e ? t : Object.assign({}, t);
            class Ni {
                static defaults = {};
                static datasetElementType = null;
                static dataElementType = null;
                constructor(t, e) {
                    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize()
                }
                initialize() {
                    const t = this._cachedMeta;
                    this.configure(), this.linkScales(), t._stacked = Ei(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")
                }
                updateIndex(t) {
                    this.index !== t && Bi(this._cachedMeta), this.index = t
                }
                linkScales() {
                    const t = this.chart,
                        e = this._cachedMeta,
                        i = this.getDataset(),
                        s = (t, e, i, s) => "x" === t ? e : "r" === t ? s : i,
                        n = e.xAxisID = W(i.xAxisID, Fi(t, "x")),
                        o = e.yAxisID = W(i.yAxisID, Fi(t, "y")),
                        r = e.rAxisID = W(i.rAxisID, Fi(t, "r")),
                        a = e.indexAxis,
                        h = e.iAxisID = s(a, n, o, r),
                        l = e.vAxisID = s(a, o, n, r);
                    e.xScale = this.getScaleForId(n), e.yScale = this.getScaleForId(o), e.rScale = this.getScaleForId(r), e.iScale = this.getScaleForId(h), e.vScale = this.getScaleForId(l)
                }
                getDataset() {
                    return this.chart.data.datasets[this.index]
                }
                getMeta() {
                    return this.chart.getDatasetMeta(this.index)
                }
                getScaleForId(t) {
                    return this.chart.scales[t]
                }
                _getOtherScale(t) {
                    const e = this._cachedMeta;
                    return t === e.iScale ? e.vScale : e.iScale
                }
                reset() {
                    this._update("reset")
                }
                _destroy() {
                    const t = this._cachedMeta;
                    this._data && Lt(this._data, this), t._stacked && Bi(t)
                }
                _dataCheck() {
                    const t = this.getDataset(),
                        e = t.data || (t.data = []),
                        i = this._data;
                    if (j(e)) this._data = function(t) {
                        const e = Object.keys(t),
                            i = new Array(e.length);
                        let s, n, o;
                        for (s = 0, n = e.length; s < n; ++s) o = e[s], i[s] = {
                            x: o,
                            y: t[o]
                        };
                        return i
                    }(e);
                    else if (i !== e) {
                        if (i) {
                            Lt(i, this);
                            const t = this._cachedMeta;
                            Bi(t), t._parsed = []
                        }
                        e && Object.isExtensible(e) && (n = this, (s = e)._chartjs ? s._chartjs.listeners.push(n) : (Object.defineProperty(s, "_chartjs", {
                            configurable: !0,
                            enumerable: !1,
                            value: {
                                listeners: [n]
                            }
                        }), Et.forEach((t => {
                            const e = "_onData" + it(t),
                                i = s[t];
                            Object.defineProperty(s, t, {
                                configurable: !0,
                                enumerable: !1,
                                value(...t) {
                                    const n = i.apply(this, t);
                                    return s._chartjs.listeners.forEach((i => {
                                        "function" == typeof i[e] && i[e](...t)
                                    })), n
                                }
                            })
                        })))), this._syncList = [], this._data = e
                    }
                    var s, n
                }
                addElements() {
                    const t = this._cachedMeta;
                    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType)
                }
                buildOrUpdateElements(t) {
                    const e = this._cachedMeta,
                        i = this.getDataset();
                    let s = !1;
                    this._dataCheck();
                    const n = e._stacked;
                    e._stacked = Ei(e.vScale, e), e.stack !== i.stack && (s = !0, Bi(e), e.stack = i.stack), this._resyncElements(t), (s || n !== e._stacked) && Ri(this, e._parsed)
                }
                configure() {
                    const t = this.chart.config,
                        e = t.datasetScopeKeys(this._type),
                        i = t.getOptionScopes(this.getDataset(), e, !0);
                    this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {}
                }
                parse(t, e) {
                    const {
                        _cachedMeta: i,
                        _data: s
                    } = this, {
                        iScale: n,
                        _stacked: o
                    } = i, r = n.axis;
                    let a, h, l, c = 0 === t && e === s.length || i._sorted,
                        d = t > 0 && i._parsed[t - 1];
                    if (!1 === this._parsing) i._parsed = s, i._sorted = !0, l = s;
                    else {
                        l = V(s[t]) ? this.parseArrayData(i, s, t, e) : j(s[t]) ? this.parseObjectData(i, s, t, e) : this.parsePrimitiveData(i, s, t, e);
                        const n = () => null === h[r] || d && h[r] < d[r];
                        for (a = 0; a < e; ++a) i._parsed[a + t] = h = l[a], c && (n() && (c = !1), d = h);
                        i._sorted = c
                    }
                    o && Ri(this, l)
                }
                parsePrimitiveData(t, e, i, s) {
                    const {
                        iScale: n,
                        vScale: o
                    } = t, r = n.axis, a = o.axis, h = n.getLabels(), l = n === o, c = new Array(s);
                    let d, u, f;
                    for (d = 0, u = s; d < u; ++d) f = d + i, c[d] = {
                        [r]: l || n.parse(h[f], f),
                        [a]: o.parse(e[f], f)
                    };
                    return c
                }
                parseArrayData(t, e, i, s) {
                    const {
                        xScale: n,
                        yScale: o
                    } = t, r = new Array(s);
                    let a, h, l, c;
                    for (a = 0, h = s; a < h; ++a) l = a + i, c = e[l], r[a] = {
                        x: n.parse(c[0], l),
                        y: o.parse(c[1], l)
                    };
                    return r
                }
                parseObjectData(t, e, i, s) {
                    const {
                        xScale: n,
                        yScale: o
                    } = t, {
                        xAxisKey: r = "x",
                        yAxisKey: a = "y"
                    } = this._parsing, h = new Array(s);
                    let l, c, d, u;
                    for (l = 0, c = s; l < c; ++l) d = l + i, u = e[d], h[l] = {
                        x: n.parse(et(u, r), d),
                        y: o.parse(et(u, a), d)
                    };
                    return h
                }
                getParsed(t) {
                    return this._cachedMeta._parsed[t]
                }
                getDataElement(t) {
                    return this._cachedMeta.data[t]
                }
                applyStack(t, e, i) {
                    const s = this.chart,
                        n = this._cachedMeta,
                        o = e[t.axis];
                    return Ii({
                        keys: Ai(s, !0),
                        values: e._stacks[t.axis]._visualValues
                    }, o, n.index, {
                        mode: i
                    })
                }
                updateRangeFromParsed(t, e, i, s) {
                    const n = i[e.axis];
                    let o = null === n ? NaN : n;
                    const r = s && i._stacks[e.axis];
                    s && r && (s.values = r, o = Ii(s, n, this._cachedMeta.index)), t.min = Math.min(t.min, o), t.max = Math.max(t.max, o)
                }
                getMinMax(t, e) {
                    const i = this._cachedMeta,
                        s = i._parsed,
                        n = i._sorted && t === i.iScale,
                        o = s.length,
                        r = this._getOtherScale(t),
                        a = ((t, e, i) => t && !e.hidden && e._stacked && {
                            keys: Ai(i, !0),
                            values: null
                        })(e, i, this.chart),
                        h = {
                            min: Number.POSITIVE_INFINITY,
                            max: Number.NEGATIVE_INFINITY
                        },
                        {
                            min: l,
                            max: c
                        } = function(t) {
                            const {
                                min: e,
                                max: i,
                                minDefined: s,
                                maxDefined: n
                            } = t.getUserBounds();
                            return {
                                min: s ? e : Number.NEGATIVE_INFINITY,
                                max: n ? i : Number.POSITIVE_INFINITY
                            }
                        }(r);
                    let d, u;

                    function f() {
                        u = s[d];
                        const e = u[r.axis];
                        return !N(u[t.axis]) || l > e || c < e
                    }
                    for (d = 0; d < o && (f() || (this.updateRangeFromParsed(h, t, u, a), !n)); ++d);
                    if (n)
                        for (d = o - 1; d >= 0; --d)
                            if (!f()) {
                                this.updateRangeFromParsed(h, t, u, a);
                                break
                            } return h
                }
                getAllParsedValues(t) {
                    const e = this._cachedMeta._parsed,
                        i = [];
                    let s, n, o;
                    for (s = 0, n = e.length; s < n; ++s) o = e[s][t.axis], N(o) && i.push(o);
                    return i
                }
                getMaxOverflow() {
                    return !1
                }
                getLabelAndValue(t) {
                    const e = this._cachedMeta,
                        i = e.iScale,
                        s = e.vScale,
                        n = this.getParsed(t);
                    return {
                        label: i ? "" + i.getLabelForValue(n[i.axis]) : "",
                        value: s ? "" + s.getLabelForValue(n[s.axis]) : ""
                    }
                }
                _update(t) {
                    const e = this._cachedMeta;
                    this.update(t || "default"), e._clip = function(t) {
                        let e, i, s, n;
                        return j(t) ? (e = t.top, i = t.right, s = t.bottom, n = t.left) : e = i = s = n = t, {
                            top: e,
                            right: i,
                            bottom: s,
                            left: n,
                            disabled: !1 === t
                        }
                    }(W(this.options.clip, function(t, e, i) {
                        if (!1 === i) return !1;
                        const s = Ci(t, i),
                            n = Ci(e, i);
                        return {
                            top: n.end,
                            right: s.end,
                            bottom: n.start,
                            left: s.start
                        }
                    }(e.xScale, e.yScale, this.getMaxOverflow())))
                }
                update(t) {}
                draw() {
                    const t = this._ctx,
                        e = this.chart,
                        i = this._cachedMeta,
                        s = i.data || [],
                        n = e.chartArea,
                        o = [],
                        r = this._drawStart || 0,
                        a = this._drawCount || s.length - r,
                        h = this.options.drawActiveElementsOnTop;
                    let l;
                    for (i.dataset && i.dataset.draw(t, n, r, a), l = r; l < r + a; ++l) {
                        const e = s[l];
                        e.hidden || (e.active && h ? o.push(e) : e.draw(t, n))
                    }
                    for (l = 0; l < o.length; ++l) o[l].draw(t, n)
                }
                getStyle(t, e) {
                    const i = e ? "active" : "default";
                    return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i)
                }
                getContext(t, e, i) {
                    const s = this.getDataset();
                    let n;
                    if (t >= 0 && t < this._cachedMeta.data.length) {
                        const e = this._cachedMeta.data[t];
                        n = e.$context || (e.$context = function(t, e, i) {
                            return Ae(t, {
                                active: !1,
                                dataIndex: e,
                                parsed: void 0,
                                raw: void 0,
                                element: i,
                                index: e,
                                mode: "default",
                                type: "data"
                            })
                        }(this.getContext(), t, e)), n.parsed = this.getParsed(t), n.raw = s.data[t], n.index = n.dataIndex = t
                    } else n = this.$context || (this.$context = function(t, e) {
                        return Ae(t, {
                            active: !1,
                            dataset: void 0,
                            datasetIndex: e,
                            index: e,
                            mode: "default",
                            type: "dataset"
                        })
                    }(this.chart.getContext(), this.index)), n.dataset = s, n.index = n.datasetIndex = this.index;
                    return n.active = !!e, n.mode = i, n
                }
                resolveDatasetElementOptions(t) {
                    return this._resolveElementOptions(this.datasetElementType.id, t)
                }
                resolveDataElementOptions(t, e) {
                    return this._resolveElementOptions(this.dataElementType.id, e, t)
                }
                _resolveElementOptions(t, e = "default", i) {
                    const s = "active" === e,
                        n = this._cachedDataOpts,
                        o = t + "-" + e,
                        r = n[o],
                        a = this.enableOptionSharing && st(i);
                    if (r) return ji(r, a);
                    const h = this.chart.config,
                        l = h.datasetElementScopeKeys(this._type, t),
                        c = s ? [`${t}Hover`, "hover", t, ""] : [t, ""],
                        d = h.getOptionScopes(this.getDataset(), l),
                        u = Object.keys(re.elements[t]),
                        f = h.resolveNamedOptions(d, u, (() => this.getContext(i, s, e)), c);
                    return f.$shared && (f.$shared = a, n[o] = Object.freeze(ji(f, a))), f
                }
                _resolveAnimations(t, e, i) {
                    const s = this.chart,
                        n = this._cachedDataOpts,
                        o = `animation-${e}`,
                        r = n[o];
                    if (r) return r;
                    let a;
                    if (!1 !== s.options.animation) {
                        const s = this.chart.config,
                            n = s.datasetAnimationScopeKeys(this._type, e),
                            o = s.getOptionScopes(this.getDataset(), n);
                        a = s.createResolver(o, this.getContext(t, i, e))
                    }
                    const h = new Ti(s, a && a.animations);
                    return a && a._cacheable && (n[o] = Object.freeze(h)), h
                }
                getSharedOptions(t) {
                    if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
                }
                includeOptions(t, e) {
                    return !e || Vi(t) || this.chart._animationsDisabled
                }
                _getSharedOptions(t, e) {
                    const i = this.resolveDataElementOptions(t, e),
                        s = this._sharedOptions,
                        n = this.getSharedOptions(i),
                        o = this.includeOptions(e, n) || n !== s;
                    return this.updateSharedOptions(n, e, i), {
                        sharedOptions: n,
                        includeOptions: o
                    }
                }
                updateElement(t, e, i, s) {
                    Vi(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i)
                }
                updateSharedOptions(t, e, i) {
                    t && !Vi(e) && this._resolveAnimations(void 0, e).update(t, i)
                }
                _setStyle(t, e, i, s) {
                    t.active = s;
                    const n = this.getStyle(e, s);
                    this._resolveAnimations(e, i, s).update(t, {
                        options: !s && this.getSharedOptions(n) || n
                    })
                }
                removeHoverStyle(t, e, i) {
                    this._setStyle(t, i, "active", !1)
                }
                setHoverStyle(t, e, i) {
                    this._setStyle(t, i, "active", !0)
                }
                _removeDatasetHoverStyle() {
                    const t = this._cachedMeta.dataset;
                    t && this._setStyle(t, void 0, "active", !1)
                }
                _setDatasetHoverStyle() {
                    const t = this._cachedMeta.dataset;
                    t && this._setStyle(t, void 0, "active", !0)
                }
                _resyncElements(t) {
                    const e = this._data,
                        i = this._cachedMeta.data;
                    for (const [t, e, i] of this._syncList) this[t](e, i);
                    this._syncList = [];
                    const s = i.length,
                        n = e.length,
                        o = Math.min(n, s);
                    o && this.parse(0, o), n > s ? this._insertElements(s, n - s, t) : n < s && this._removeElements(n, s - n)
                }
                _insertElements(t, e, i = !0) {
                    const s = this._cachedMeta,
                        n = s.data,
                        o = t + e;
                    let r;
                    const a = t => {
                        for (t.length += e, r = t.length - 1; r >= o; r--) t[r] = t[r - e]
                    };
                    for (a(n), r = t; r < o; ++r) n[r] = new this.dataElementType;
                    this._parsing && a(s._parsed), this.parse(t, e), i && this.updateElements(n, t, e, "reset")
                }
                updateElements(t, e, i, s) {}
                _removeElements(t, e) {
                    const i = this._cachedMeta;
                    if (this._parsing) {
                        const s = i._parsed.splice(t, e);
                        i._stacked && Bi(i, s)
                    }
                    i.data.splice(t, e)
                }
                _sync(t) {
                    if (this._parsing) this._syncList.push(t);
                    else {
                        const [e, i, s] = t;
                        this[e](i, s)
                    }
                    this.chart._dataChanges.push([this.index, ...t])
                }
                _onDataPush() {
                    const t = arguments.length;
                    this._sync(["_insertElements", this.getDataset().data.length - t, t])
                }
                _onDataPop() {
                    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
                }
                _onDataShift() {
                    this._sync(["_removeElements", 0, 1])
                }
                _onDataSplice(t, e) {
                    e && this._sync(["_removeElements", t, e]);
                    const i = arguments.length - 2;
                    i && this._sync(["_insertElements", t, i])
                }
                _onDataUnshift() {
                    this._sync(["_insertElements", 0, arguments.length])
                }
            }
            class Hi extends Ni {
                static id = "line";
                static defaults = {
                    datasetElementType: "line",
                    dataElementType: "point",
                    showLine: !0,
                    spanGaps: !1
                };
                static overrides = {
                    scales: {
                        _index_: {
                            type: "category"
                        },
                        _value_: {
                            type: "linear"
                        }
                    }
                };
                initialize() {
                    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize()
                }
                update(t) {
                    const e = this._cachedMeta,
                        {
                            dataset: i,
                            data: s = [],
                            _dataset: n
                        } = e,
                        o = this.chart._animationsDisabled;
                    let {
                        start: r,
                        count: a
                    } = jt(e, s, o);
                    this._drawStart = r, this._drawCount = a, Nt(e) && (r = 0, a = s.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!n._decimated, i.points = s.slice(Math.max(this._drawStart - 1, 0), this._drawStart + this._drawCount);
                    const h = this.resolveDatasetElementOptions(t);
                    this.options.showLine || (h.borderWidth = 0), h.segment = this.options.segment, this.updateElement(i, void 0, {
                        animated: !o,
                        options: h
                    }, t), this.updateElements(s, r, a, t)
                }
                updateElements(t, e, i, s) {
                    const n = "reset" === s,
                        {
                            iScale: o,
                            vScale: r,
                            _stacked: a,
                            _dataset: h
                        } = this._cachedMeta,
                        {
                            sharedOptions: l,
                            includeOptions: c
                        } = this._getSharedOptions(e, s),
                        d = o.axis,
                        u = r.axis,
                        {
                            spanGaps: f,
                            segment: g
                        } = this.options,
                        p = xt(f) ? f : Number.POSITIVE_INFINITY,
                        m = this.chart._animationsDisabled || n || "none" === s,
                        b = e + i,
                        x = t.length;
                    let _ = e > 0 && this.getParsed(e - 1);
                    for (let i = 0; i < x; ++i) {
                        const f = t[i],
                            x = m ? f : {};
                        if (i < e || i >= b) {
                            x.skip = !0;
                            continue
                        }
                        const y = this.getParsed(i),
                            v = B(y[u]),
                            w = x[d] = o.getPixelForValue(y[d], i),
                            k = x[u] = n || v ? r.getBasePixel() : r.getPixelForValue(a ? this.applyStack(r, y, a) : y[u], i);
                        x.skip = isNaN(w) || isNaN(k) || v, x.stop = i > 0 && Math.abs(y[d] - _[d]) > p, g && (x.parsed = y, x.raw = h.data[i]), c && (x.options = l || this.resolveDataElementOptions(i, f.active ? "active" : s)), m || this.updateElement(f, i, x, s), _ = y
                    }
                }
                getMaxOverflow() {
                    const t = this._cachedMeta,
                        e = t.dataset,
                        i = e.options && e.options.borderWidth || 0,
                        s = t.data || [];
                    if (!s.length) return i;
                    const n = s[0].size(this.resolveDataElementOptions(0)),
                        o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
                    return Math.max(i, n, o) / 2
                }
                draw() {
                    const t = this._cachedMeta;
                    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
                }
            }

            function Wi() {
                throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
            }
            class $i {
                static override(t) {
                    Object.assign($i.prototype, t)
                }
                options;
                constructor(t) {
                    this.options = t || {}
                }
                init() {}
                formats() {
                    return Wi()
                }
                parse() {
                    return Wi()
                }
                format() {
                    return Wi()
                }
                add() {
                    return Wi()
                }
                diff() {
                    return Wi()
                }
                startOf() {
                    return Wi()
                }
                endOf() {
                    return Wi()
                }
            }
            var Yi = {
                _date: $i
            };

            function Ui(t, e, i, s) {
                const {
                    controller: n,
                    data: o,
                    _sorted: r
                } = t, a = n._cachedMeta.iScale;
                if (a && e === a.axis && "r" !== e && r && o.length) {
                    const t = a._reversePixels ? It : At;
                    if (!s) return t(o, e, i);
                    if (n._sharedOptions) {
                        const s = o[0],
                            n = "function" == typeof s.getRange && s.getRange(e);
                        if (n) {
                            const s = t(o, e, i - n),
                                r = t(o, e, i + n);
                            return {
                                lo: s.lo,
                                hi: r.hi
                            }
                        }
                    }
                }
                return {
                    lo: 0,
                    hi: o.length - 1
                }
            }

            function Xi(t, e, i, s, n) {
                const o = t.getSortedVisibleDatasetMetas(),
                    r = i[e];
                for (let t = 0, i = o.length; t < i; ++t) {
                    const {
                        index: i,
                        data: a
                    } = o[t], {
                        lo: h,
                        hi: l
                    } = Ui(o[t], e, r, n);
                    for (let t = h; t <= l; ++t) {
                        const e = a[t];
                        e.skip || s(e, i, t)
                    }
                }
            }

            function qi(t, e, i, s, n) {
                const o = [];
                if (!n && !t.isPointInArea(e)) return o;
                return Xi(t, i, e, (function(i, r, a) {
                    (n || ue(i, t.chartArea, 0)) && i.inRange(e.x, e.y, s) && o.push({
                        element: i,
                        datasetIndex: r,
                        index: a
                    })
                }), !0), o
            }

            function Ki(t, e, i, s, n, o) {
                let r = [];
                const a = function(t) {
                    const e = -1 !== t.indexOf("x"),
                        i = -1 !== t.indexOf("y");
                    return function(t, s) {
                        const n = e ? Math.abs(t.x - s.x) : 0,
                            o = i ? Math.abs(t.y - s.y) : 0;
                        return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2))
                    }
                }(i);
                let h = Number.POSITIVE_INFINITY;
                return Xi(t, i, e, (function(i, l, c) {
                    const d = i.inRange(e.x, e.y, n);
                    if (s && !d) return;
                    const u = i.getCenterPoint(n);
                    if (!(!!o || t.isPointInArea(u)) && !d) return;
                    const f = a(e, u);
                    f < h ? (r = [{
                        element: i,
                        datasetIndex: l,
                        index: c
                    }], h = f) : f === h && r.push({
                        element: i,
                        datasetIndex: l,
                        index: c
                    })
                })), r
            }

            function Gi(t, e, i, s, n, o) {
                return o || t.isPointInArea(e) ? "r" !== i || s ? Ki(t, e, i, s, n, o) : function(t, e, i, s) {
                    let n = [];
                    return Xi(t, i, e, (function(t, i, o) {
                        const {
                            startAngle: r,
                            endAngle: a
                        } = t.getProps(["startAngle", "endAngle"], s), {
                            angle: h
                        } = kt(t, {
                            x: e.x,
                            y: e.y
                        });
                        Dt(h, r, a) && n.push({
                            element: t,
                            datasetIndex: i,
                            index: o
                        })
                    })), n
                }(t, e, i, n) : []
            }

            function Qi(t, e, i, s, n) {
                const o = [],
                    r = "x" === i ? "inXRange" : "inYRange";
                let a = !1;
                return Xi(t, i, e, ((t, s, h) => {
                    t[r](e[i], n) && (o.push({
                        element: t,
                        datasetIndex: s,
                        index: h
                    }), a = a || t.inRange(e.x, e.y, n))
                })), s && !a ? [] : o
            }
            var Zi = {
                evaluateInteractionItems: Xi,
                modes: {
                    index(t, e, i, s) {
                        const n = oi(e, t),
                            o = i.axis || "x",
                            r = i.includeInvisible || !1,
                            a = i.intersect ? qi(t, n, o, s, r) : Gi(t, n, o, !1, s, r),
                            h = [];
                        return a.length ? (t.getSortedVisibleDatasetMetas().forEach((t => {
                            const e = a[0].index,
                                i = t.data[e];
                            i && !i.skip && h.push({
                                element: i,
                                datasetIndex: t.index,
                                index: e
                            })
                        })), h) : []
                    },
                    dataset(t, e, i, s) {
                        const n = oi(e, t),
                            o = i.axis || "xy",
                            r = i.includeInvisible || !1;
                        let a = i.intersect ? qi(t, n, o, s, r) : Gi(t, n, o, !1, s, r);
                        if (a.length > 0) {
                            const e = a[0].datasetIndex,
                                i = t.getDatasetMeta(e).data;
                            a = [];
                            for (let t = 0; t < i.length; ++t) a.push({
                                element: i[t],
                                datasetIndex: e,
                                index: t
                            })
                        }
                        return a
                    },
                    point: (t, e, i, s) => qi(t, oi(e, t), i.axis || "xy", s, i.includeInvisible || !1),
                    nearest(t, e, i, s) {
                        const n = oi(e, t),
                            o = i.axis || "xy",
                            r = i.includeInvisible || !1;
                        return Gi(t, n, o, i.intersect, s, r)
                    },
                    x: (t, e, i, s) => Qi(t, oi(e, t), "x", i.intersect, s),
                    y: (t, e, i, s) => Qi(t, oi(e, t), "y", i.intersect, s)
                }
            };
            const Ji = ["left", "top", "right", "bottom"];

            function ts(t, e) {
                return t.filter((t => t.pos === e))
            }

            function es(t, e) {
                return t.filter((t => -1 === Ji.indexOf(t.pos) && t.box.axis === e))
            }

            function is(t, e) {
                return t.sort(((t, i) => {
                    const s = e ? i : t,
                        n = e ? t : i;
                    return s.weight === n.weight ? s.index - n.index : s.weight - n.weight
                }))
            }

            function ss(t, e) {
                const i = function(t) {
                        const e = {};
                        for (const i of t) {
                            const {
                                stack: t,
                                pos: s,
                                stackWeight: n
                            } = i;
                            if (!t || !Ji.includes(s)) continue;
                            const o = e[t] || (e[t] = {
                                count: 0,
                                placed: 0,
                                weight: 0,
                                size: 0
                            });
                            o.count++, o.weight += n
                        }
                        return e
                    }(t),
                    {
                        vBoxMaxWidth: s,
                        hBoxMaxHeight: n
                    } = e;
                let o, r, a;
                for (o = 0, r = t.length; o < r; ++o) {
                    a = t[o];
                    const {
                        fullSize: r
                    } = a.box, h = i[a.stack], l = h && a.stackWeight / h.weight;
                    a.horizontal ? (a.width = l ? l * s : r && e.availableWidth, a.height = n) : (a.width = s, a.height = l ? l * n : r && e.availableHeight)
                }
                return i
            }

            function ns(t, e, i, s) {
                return Math.max(t[i], e[i]) + Math.max(t[s], e[s])
            }

            function os(t, e) {
                t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right)
            }

            function rs(t, e, i, s) {
                const {
                    pos: n,
                    box: o
                } = i, r = t.maxPadding;
                if (!j(n)) {
                    i.size && (t[n] -= i.size);
                    const e = s[i.stack] || {
                        size: 0,
                        count: 1
                    };
                    e.size = Math.max(e.size, i.horizontal ? o.height : o.width), i.size = e.size / e.count, t[n] += i.size
                }
                o.getPadding && os(r, o.getPadding());
                const a = Math.max(0, e.outerWidth - ns(r, t, "left", "right")),
                    h = Math.max(0, e.outerHeight - ns(r, t, "top", "bottom")),
                    l = a !== t.w,
                    c = h !== t.h;
                return t.w = a, t.h = h, i.horizontal ? {
                    same: l,
                    other: c
                } : {
                    same: c,
                    other: l
                }
            }

            function as(t, e) {
                const i = e.maxPadding;

                function s(t) {
                    const s = {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    };
                    return t.forEach((t => {
                        s[t] = Math.max(e[t], i[t])
                    })), s
                }
                return s(t ? ["left", "right"] : ["top", "bottom"])
            }

            function hs(t, e, i, s) {
                const n = [];
                let o, r, a, h, l, c;
                for (o = 0, r = t.length, l = 0; o < r; ++o) {
                    a = t[o], h = a.box, h.update(a.width || e.w, a.height || e.h, as(a.horizontal, e));
                    const {
                        same: r,
                        other: d
                    } = rs(e, i, a, s);
                    l |= r && n.length, c = c || d, h.fullSize || n.push(a)
                }
                return l && hs(n, e, i, s) || c
            }

            function ls(t, e, i, s, n) {
                t.top = i, t.left = e, t.right = e + s, t.bottom = i + n, t.width = s, t.height = n
            }

            function cs(t, e, i, s) {
                const n = i.padding;
                let {
                    x: o,
                    y: r
                } = e;
                for (const a of t) {
                    const t = a.box,
                        h = s[a.stack] || {
                            count: 1,
                            placed: 0,
                            weight: 1
                        },
                        l = a.stackWeight / h.weight || 1;
                    if (a.horizontal) {
                        const s = e.w * l,
                            o = h.size || t.height;
                        st(h.start) && (r = h.start), t.fullSize ? ls(t, n.left, r, i.outerWidth - n.right - n.left, o) : ls(t, e.left + h.placed, r, s, o), h.start = r, h.placed += s, r = t.bottom
                    } else {
                        const s = e.h * l,
                            r = h.size || t.width;
                        st(h.start) && (o = h.start), t.fullSize ? ls(t, o, n.top, r, i.outerHeight - n.bottom - n.top) : ls(t, o, e.top + h.placed, r, s), h.start = o, h.placed += s, o = t.right
                    }
                }
                e.x = o, e.y = r
            }
            var ds = {
                addBox(t, e) {
                    t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() {
                        return [{
                            z: 0,
                            draw(t) {
                                e.draw(t)
                            }
                        }]
                    }, t.boxes.push(e)
                },
                removeBox(t, e) {
                    const i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
                },
                configure(t, e, i) {
                    e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight
                },
                update(t, e, i, s) {
                    if (!t) return;
                    const n = Pe(t.options.layout.padding),
                        o = Math.max(e - n.width, 0),
                        r = Math.max(i - n.height, 0),
                        a = function(t) {
                            const e = function(t) {
                                    const e = [];
                                    let i, s, n, o, r, a;
                                    for (i = 0, s = (t || []).length; i < s; ++i) n = t[i], ({
                                        position: o,
                                        options: {
                                            stack: r,
                                            stackWeight: a = 1
                                        }
                                    } = n), e.push({
                                        index: i,
                                        box: n,
                                        pos: o,
                                        horizontal: n.isHorizontal(),
                                        weight: n.weight,
                                        stack: r && o + r,
                                        stackWeight: a
                                    });
                                    return e
                                }(t),
                                i = is(e.filter((t => t.box.fullSize)), !0),
                                s = is(ts(e, "left"), !0),
                                n = is(ts(e, "right")),
                                o = is(ts(e, "top"), !0),
                                r = is(ts(e, "bottom")),
                                a = es(e, "x"),
                                h = es(e, "y");
                            return {
                                fullSize: i,
                                leftAndTop: s.concat(o),
                                rightAndBottom: n.concat(h).concat(r).concat(a),
                                chartArea: ts(e, "chartArea"),
                                vertical: s.concat(n).concat(h),
                                horizontal: o.concat(r).concat(a)
                            }
                        }(t.boxes),
                        h = a.vertical,
                        l = a.horizontal;
                    U(t.boxes, (t => {
                        "function" == typeof t.beforeLayout && t.beforeLayout()
                    }));
                    const c = h.reduce(((t, e) => e.box.options && !1 === e.box.options.display ? t : t + 1), 0) || 1,
                        d = Object.freeze({
                            outerWidth: e,
                            outerHeight: i,
                            padding: n,
                            availableWidth: o,
                            availableHeight: r,
                            vBoxMaxWidth: o / 2 / c,
                            hBoxMaxHeight: r / 2
                        }),
                        u = Object.assign({}, n);
                    os(u, Pe(s));
                    const f = Object.assign({
                            maxPadding: u,
                            w: o,
                            h: r,
                            x: n.left,
                            y: n.top
                        }, n),
                        g = ss(h.concat(l), d);
                    hs(a.fullSize, f, d, g), hs(h, f, d, g), hs(l, f, d, g) && hs(h, f, d, g),
                        function(t) {
                            const e = t.maxPadding;

                            function i(i) {
                                const s = Math.max(e[i] - t[i], 0);
                                return t[i] += s, s
                            }
                            t.y += i("top"), t.x += i("left"), i("right"), i("bottom")
                        }(f), cs(a.leftAndTop, f, d, g), f.x += f.w, f.y += f.h, cs(a.rightAndBottom, f, d, g), t.chartArea = {
                            left: f.left,
                            top: f.top,
                            right: f.left + f.w,
                            bottom: f.top + f.h,
                            height: f.h,
                            width: f.w
                        }, U(a.chartArea, (e => {
                            const i = e.box;
                            Object.assign(i, t.chartArea), i.update(f.w, f.h, {
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0
                            })
                        }))
                }
            };
            class us {
                acquireContext(t, e) {}
                releaseContext(t) {
                    return !1
                }
                addEventListener(t, e, i) {}
                removeEventListener(t, e, i) {}
                getDevicePixelRatio() {
                    return 1
                }
                getMaximumSize(t, e, i, s) {
                    return e = Math.max(0, e || t.width), i = i || t.height, {
                        width: e,
                        height: Math.max(0, s ? Math.floor(e / s) : i)
                    }
                }
                isAttached(t) {
                    return !0
                }
                updateConfig(t) {}
            }
            class fs extends us {
                acquireContext(t) {
                    return t && t.getContext && t.getContext("2d") || null
                }
                updateConfig(t) {
                    t.options.animation = !1
                }
            }
            const gs = "$chartjs",
                ps = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup",
                    pointerenter: "mouseenter",
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointerleave: "mouseout",
                    pointerout: "mouseout"
                },
                ms = t => null === t || "" === t;
            const bs = !!li && {
                passive: !0
            };

            function xs(t, e, i) {
                t.canvas.removeEventListener(e, i, bs)
            }

            function _s(t, e) {
                for (const i of t)
                    if (i === e || i.contains(e)) return !0
            }

            function ys(t, e, i) {
                const s = t.canvas,
                    n = new MutationObserver((t => {
                        let e = !1;
                        for (const i of t) e = e || _s(i.addedNodes, s), e = e && !_s(i.removedNodes, s);
                        e && i()
                    }));
                return n.observe(document, {
                    childList: !0,
                    subtree: !0
                }), n
            }

            function vs(t, e, i) {
                const s = t.canvas,
                    n = new MutationObserver((t => {
                        let e = !1;
                        for (const i of t) e = e || _s(i.removedNodes, s), e = e && !_s(i.addedNodes, s);
                        e && i()
                    }));
                return n.observe(document, {
                    childList: !0,
                    subtree: !0
                }), n
            }
            const ws = new Map;
            let ks = 0;

            function Ms() {
                const t = window.devicePixelRatio;
                t !== ks && (ks = t, ws.forEach(((e, i) => {
                    i.currentDevicePixelRatio !== t && e()
                })))
            }

            function Ss(t, e, i) {
                const s = t.canvas,
                    n = s && Je(s);
                if (!n) return;
                const o = Ft(((t, e) => {
                        const s = n.clientWidth;
                        i(t, e), s < n.clientWidth && i()
                    }), window),
                    r = new ResizeObserver((t => {
                        const e = t[0],
                            i = e.contentRect.width,
                            s = e.contentRect.height;
                        0 === i && 0 === s || o(i, s)
                    }));
                return r.observe(n),
                    function(t, e) {
                        ws.size || window.addEventListener("resize", Ms), ws.set(t, e)
                    }(t, o), r
            }

            function Os(t, e, i) {
                i && i.disconnect(), "resize" === e && function(t) {
                    ws.delete(t), ws.size || window.removeEventListener("resize", Ms)
                }(t)
            }

            function Ds(t, e, i) {
                const s = t.canvas,
                    n = Ft((e => {
                        null !== t.ctx && i(function(t, e) {
                            const i = ps[t.type] || t.type,
                                {
                                    x: s,
                                    y: n
                                } = oi(t, e);
                            return {
                                type: i,
                                chart: e,
                                native: t,
                                x: void 0 !== s ? s : null,
                                y: void 0 !== n ? n : null
                            }
                        }(e, t))
                    }), t);
                return function(t, e, i) {
                    t.addEventListener(e, i, bs)
                }(s, e, n), n
            }
            class Ps extends us {
                acquireContext(t, e) {
                    const i = t && t.getContext && t.getContext("2d");
                    return i && i.canvas === t ? (function(t, e) {
                        const i = t.style,
                            s = t.getAttribute("height"),
                            n = t.getAttribute("width");
                        if (t[gs] = {
                                initial: {
                                    height: s,
                                    width: n,
                                    style: {
                                        display: i.display,
                                        height: i.height,
                                        width: i.width
                                    }
                                }
                            }, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", ms(n)) {
                            const e = ci(t, "width");
                            void 0 !== e && (t.width = e)
                        }
                        if (ms(s))
                            if ("" === t.style.height) t.height = t.width / (e || 2);
                            else {
                                const e = ci(t, "height");
                                void 0 !== e && (t.height = e)
                            }
                    }(t, e), i) : null
                }
                releaseContext(t) {
                    const e = t.canvas;
                    if (!e[gs]) return !1;
                    const i = e[gs].initial;
                    ["height", "width"].forEach((t => {
                        const s = i[t];
                        B(s) ? e.removeAttribute(t) : e.setAttribute(t, s)
                    }));
                    const s = i.style || {};
                    return Object.keys(s).forEach((t => {
                        e.style[t] = s[t]
                    })), e.width = e.width, delete e[gs], !0
                }
                addEventListener(t, e, i) {
                    this.removeEventListener(t, e);
                    const s = t.$proxies || (t.$proxies = {}),
                        n = {
                            attach: ys,
                            detach: vs,
                            resize: Ss
                        } [e] || Ds;
                    s[e] = n(t, e, i)
                }
                removeEventListener(t, e) {
                    const i = t.$proxies || (t.$proxies = {}),
                        s = i[e];
                    if (!s) return;
                    ({
                        attach: Os,
                        detach: Os,
                        resize: Os
                    } [e] || xs)(t, e, s), i[e] = void 0
                }
                getDevicePixelRatio() {
                    return window.devicePixelRatio
                }
                getMaximumSize(t, e, i, s) {
                    return ai(t, e, i, s)
                }
                isAttached(t) {
                    const e = Je(t);
                    return !(!e || !e.isConnected)
                }
            }
            class Ts {
                static defaults = {};
                static defaultRoutes = void 0;
                x;
                y;
                active = !1;
                options;
                $animations;
                tooltipPosition(t) {
                    const {
                        x: e,
                        y: i
                    } = this.getProps(["x", "y"], t);
                    return {
                        x: e,
                        y: i
                    }
                }
                hasValue() {
                    return xt(this.x) && xt(this.y)
                }
                getProps(t, e) {
                    const i = this.$animations;
                    if (!e || !i) return this;
                    const s = {};
                    return t.forEach((t => {
                        s[t] = i[t] && i[t].active() ? i[t]._to : this[t]
                    })), s
                }
            }

            function Cs(t, e) {
                const i = t.options.ticks,
                    s = function(t) {
                        const e = t.options.offset,
                            i = t._tickSize(),
                            s = t._length / i + (e ? 0 : 1),
                            n = t._maxLength / i;
                        return Math.floor(Math.min(s, n))
                    }(t),
                    n = Math.min(i.maxTicksLimit || s, s),
                    o = i.major.enabled ? function(t) {
                        const e = [];
                        let i, s;
                        for (i = 0, s = t.length; i < s; i++) t[i].major && e.push(i);
                        return e
                    }(e) : [],
                    r = o.length,
                    a = o[0],
                    h = o[r - 1],
                    l = [];
                if (r > n) return function(t, e, i, s) {
                    let n, o = 0,
                        r = i[0];
                    for (s = Math.ceil(s), n = 0; n < t.length; n++) n === r && (e.push(t[n]), o++, r = i[o * s])
                }(e, l, o, r / n), l;
                const c = function(t, e, i) {
                    const s = function(t) {
                            const e = t.length;
                            let i, s;
                            if (e < 2) return !1;
                            for (s = t[0], i = 1; i < e; ++i)
                                if (t[i] - t[i - 1] !== s) return !1;
                            return s
                        }(t),
                        n = e.length / i;
                    if (!s) return Math.max(n, 1);
                    const o = function(t) {
                        const e = [],
                            i = Math.sqrt(t);
                        let s;
                        for (s = 1; s < i; s++) t % s == 0 && (e.push(s), e.push(t / s));
                        return i === (0 | i) && e.push(i), e.sort(((t, e) => t - e)).pop(), e
                    }(s);
                    for (let t = 0, e = o.length - 1; t < e; t++) {
                        const e = o[t];
                        if (e > n) return e
                    }
                    return Math.max(n, 1)
                }(o, e, n);
                if (r > 0) {
                    let t, i;
                    const s = r > 1 ? Math.round((h - a) / (r - 1)) : null;
                    for (As(e, l, c, B(s) ? 0 : a - s, a), t = 0, i = r - 1; t < i; t++) As(e, l, c, o[t], o[t + 1]);
                    return As(e, l, c, h, B(s) ? e.length : h + s), l
                }
                return As(e, l, c), l
            }

            function As(t, e, i, s, n) {
                const o = W(s, 0),
                    r = Math.min(W(n, t.length), t.length);
                let a, h, l, c = 0;
                for (i = Math.ceil(i), n && (a = n - s, i = a / Math.floor(a / i)), l = o; l < 0;) c++, l = Math.round(o + c * i);
                for (h = Math.max(o, 0); h < r; h++) h === l && (e.push(t[h]), c++, l = Math.round(o + c * i))
            }
            const Is = (t, e, i) => "top" === e || "left" === e ? t[e] + i : t[e] - i,
                Es = (t, e) => Math.min(e || t, t);

            function Ls(t, e) {
                const i = [],
                    s = t.length / e,
                    n = t.length;
                let o = 0;
                for (; o < n; o += s) i.push(t[Math.floor(o)]);
                return i
            }

            function zs(t, e, i) {
                const s = t.ticks.length,
                    n = Math.min(e, s - 1),
                    o = t._startPixel,
                    r = t._endPixel,
                    a = 1e-6;
                let h, l = t.getPixelForTick(n);
                if (!(i && (h = 1 === s ? Math.max(l - o, r - l) : 0 === e ? (t.getPixelForTick(1) - l) / 2 : (l - t.getPixelForTick(n - 1)) / 2, l += n < e ? h : -h, l < o - a || l > r + a))) return l
            }

            function Rs(t) {
                return t.drawTicks ? t.tickLength : 0
            }

            function Fs(t, e) {
                if (!t.display) return 0;
                const i = Te(t.font, e),
                    s = Pe(t.padding);
                return (V(t.text) ? t.text.length : 1) * i.lineHeight + s.height
            }

            function Bs(t, e, i) {
                let s = Bt(t);
                return (i && "right" !== e || !i && "right" === e) && (s = (t => "left" === t ? "right" : "right" === t ? "left" : t)(s)), s
            }
            class Vs extends Ts {
                constructor(t) {
                    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0
                }
                init(t) {
                    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax)
                }
                parse(t, e) {
                    return t
                }
                getUserBounds() {
                    let {
                        _userMin: t,
                        _userMax: e,
                        _suggestedMin: i,
                        _suggestedMax: s
                    } = this;
                    return t = H(t, Number.POSITIVE_INFINITY), e = H(e, Number.NEGATIVE_INFINITY), i = H(i, Number.POSITIVE_INFINITY), s = H(s, Number.NEGATIVE_INFINITY), {
                        min: H(t, i),
                        max: H(e, s),
                        minDefined: N(t),
                        maxDefined: N(e)
                    }
                }
                getMinMax(t) {
                    let e, {
                        min: i,
                        max: s,
                        minDefined: n,
                        maxDefined: o
                    } = this.getUserBounds();
                    if (n && o) return {
                        min: i,
                        max: s
                    };
                    const r = this.getMatchingVisibleMetas();
                    for (let a = 0, h = r.length; a < h; ++a) e = r[a].controller.getMinMax(this, t), n || (i = Math.min(i, e.min)), o || (s = Math.max(s, e.max));
                    return i = o && i > s ? s : i, s = n && i > s ? i : s, {
                        min: H(i, H(s, i)),
                        max: H(s, H(i, s))
                    }
                }
                getPadding() {
                    return {
                        left: this.paddingLeft || 0,
                        top: this.paddingTop || 0,
                        right: this.paddingRight || 0,
                        bottom: this.paddingBottom || 0
                    }
                }
                getTicks() {
                    return this.ticks
                }
                getLabels() {
                    const t = this.chart.data;
                    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
                }
                getLabelItems(t = this.chart.chartArea) {
                    return this._labelItems || (this._labelItems = this._computeLabelItems(t))
                }
                beforeLayout() {
                    this._cache = {}, this._dataLimitsCached = !1
                }
                beforeUpdate() {
                    Y(this.options.beforeUpdate, [this])
                }
                update(t, e, i) {
                    const {
                        beginAtZero: s,
                        grace: n,
                        ticks: o
                    } = this.options, r = o.sampleSize;
                    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = function(t, e, i) {
                        const {
                            min: s,
                            max: n
                        } = t, o = $(e, (n - s) / 2), r = (t, e) => i && 0 === t ? 0 : t + e;
                        return {
                            min: r(s, -Math.abs(o)),
                            max: r(n, o)
                        }
                    }(this, n, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
                    const a = r < this.ticks.length;
                    this._convertTicksToLabels(a ? Ls(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), o.display && (o.autoSkip || "auto" === o.source) && (this.ticks = Cs(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), a && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate()
                }
                configure() {
                    let t, e, i = this.options.reverse;
                    this.isHorizontal() ? (t = this.left, e = this.right) : (t = this.top, e = this.bottom, i = !i), this._startPixel = t, this._endPixel = e, this._reversePixels = i, this._length = e - t, this._alignToPixels = this.options.alignToPixels
                }
                afterUpdate() {
                    Y(this.options.afterUpdate, [this])
                }
                beforeSetDimensions() {
                    Y(this.options.beforeSetDimensions, [this])
                }
                setDimensions() {
                    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0
                }
                afterSetDimensions() {
                    Y(this.options.afterSetDimensions, [this])
                }
                _callHooks(t) {
                    this.chart.notifyPlugins(t, this.getContext()), Y(this.options[t], [this])
                }
                beforeDataLimits() {
                    this._callHooks("beforeDataLimits")
                }
                determineDataLimits() {}
                afterDataLimits() {
                    this._callHooks("afterDataLimits")
                }
                beforeBuildTicks() {
                    this._callHooks("beforeBuildTicks")
                }
                buildTicks() {
                    return []
                }
                afterBuildTicks() {
                    this._callHooks("afterBuildTicks")
                }
                beforeTickToLabelConversion() {
                    Y(this.options.beforeTickToLabelConversion, [this])
                }
                generateTickLabels(t) {
                    const e = this.options.ticks;
                    let i, s, n;
                    for (i = 0, s = t.length; i < s; i++) n = t[i], n.label = Y(e.callback, [n.value, i, t], this)
                }
                afterTickToLabelConversion() {
                    Y(this.options.afterTickToLabelConversion, [this])
                }
                beforeCalculateLabelRotation() {
                    Y(this.options.beforeCalculateLabelRotation, [this])
                }
                calculateLabelRotation() {
                    const t = this.options,
                        e = t.ticks,
                        i = Es(this.ticks.length, t.ticks.maxTicksLimit),
                        s = e.minRotation || 0,
                        n = e.maxRotation;
                    let o, r, a, h = s;
                    if (!this._isVisible() || !e.display || s >= n || i <= 1 || !this.isHorizontal()) return void(this.labelRotation = s);
                    const l = this._getLabelSizes(),
                        c = l.widest.width,
                        d = l.highest.height,
                        u = Pt(this.chart.width - c, 0, this.maxWidth);
                    o = t.offset ? this.maxWidth / i : u / (i - 1), c + 6 > o && (o = u / (i - (t.offset ? .5 : 1)), r = this.maxHeight - Rs(t.grid) - e.padding - Fs(t.title, this.chart.options.font), a = Math.sqrt(c * c + d * d), h = vt(Math.min(Math.asin(Pt((l.highest.height + 6) / o, -1, 1)), Math.asin(Pt(r / a, -1, 1)) - Math.asin(Pt(d / a, -1, 1)))), h = Math.max(s, Math.min(n, h))), this.labelRotation = h
                }
                afterCalculateLabelRotation() {
                    Y(this.options.afterCalculateLabelRotation, [this])
                }
                afterAutoSkip() {}
                beforeFit() {
                    Y(this.options.beforeFit, [this])
                }
                fit() {
                    const t = {
                            width: 0,
                            height: 0
                        },
                        {
                            chart: e,
                            options: {
                                ticks: i,
                                title: s,
                                grid: n
                            }
                        } = this,
                        o = this._isVisible(),
                        r = this.isHorizontal();
                    if (o) {
                        const o = Fs(s, e.options.font);
                        if (r ? (t.width = this.maxWidth, t.height = Rs(n) + o) : (t.height = this.maxHeight, t.width = Rs(n) + o), i.display && this.ticks.length) {
                            const {
                                first: e,
                                last: s,
                                widest: n,
                                highest: o
                            } = this._getLabelSizes(), a = 2 * i.padding, h = yt(this.labelRotation), l = Math.cos(h), c = Math.sin(h);
                            if (r) {
                                const e = i.mirror ? 0 : c * n.width + l * o.height;
                                t.height = Math.min(this.maxHeight, t.height + e + a)
                            } else {
                                const e = i.mirror ? 0 : l * n.width + c * o.height;
                                t.width = Math.min(this.maxWidth, t.width + e + a)
                            }
                            this._calculatePadding(e, s, c, l)
                        }
                    }
                    this._handleMargins(), r ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom)
                }
                _calculatePadding(t, e, i, s) {
                    const {
                        ticks: {
                            align: n,
                            padding: o
                        },
                        position: r
                    } = this.options, a = 0 !== this.labelRotation, h = "top" !== r && "x" === this.axis;
                    if (this.isHorizontal()) {
                        const r = this.getPixelForTick(0) - this.left,
                            l = this.right - this.getPixelForTick(this.ticks.length - 1);
                        let c = 0,
                            d = 0;
                        a ? h ? (c = s * t.width, d = i * e.height) : (c = i * t.height, d = s * e.width) : "start" === n ? d = e.width : "end" === n ? c = t.width : "inner" !== n && (c = t.width / 2, d = e.width / 2), this.paddingLeft = Math.max((c - r + o) * this.width / (this.width - r), 0), this.paddingRight = Math.max((d - l + o) * this.width / (this.width - l), 0)
                    } else {
                        let i = e.height / 2,
                            s = t.height / 2;
                        "start" === n ? (i = 0, s = t.height) : "end" === n && (i = e.height, s = 0), this.paddingTop = i + o, this.paddingBottom = s + o
                    }
                }
                _handleMargins() {
                    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom))
                }
                afterFit() {
                    Y(this.options.afterFit, [this])
                }
                isHorizontal() {
                    const {
                        axis: t,
                        position: e
                    } = this.options;
                    return "top" === e || "bottom" === e || "x" === t
                }
                isFullSize() {
                    return this.options.fullSize
                }
                _convertTicksToLabels(t) {
                    let e, i;
                    for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length; e < i; e++) B(t[e].label) && (t.splice(e, 1), i--, e--);
                    this.afterTickToLabelConversion()
                }
                _getLabelSizes() {
                    let t = this._labelSizes;
                    if (!t) {
                        const e = this.options.ticks.sampleSize;
                        let i = this.ticks;
                        e < i.length && (i = Ls(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit)
                    }
                    return t
                }
                _computeLabelSizes(t, e, i) {
                    const {
                        ctx: s,
                        _longestTextCache: n
                    } = this, o = [], r = [], a = Math.floor(e / Es(e, i));
                    let h, l, c, d, u, f, g, p, m, b, x, _ = 0,
                        y = 0;
                    for (h = 0; h < e; h += a) {
                        if (d = t[h].label, u = this._resolveTickFontOptions(h), s.font = f = u.string, g = n[f] = n[f] || {
                                data: {},
                                gc: []
                            }, p = u.lineHeight, m = b = 0, B(d) || V(d)) {
                            if (V(d))
                                for (l = 0, c = d.length; l < c; ++l) x = d[l], B(x) || V(x) || (m = ae(s, g.data, g.gc, m, x), b += p)
                        } else m = ae(s, g.data, g.gc, m, d), b = p;
                        o.push(m), r.push(b), _ = Math.max(m, _), y = Math.max(b, y)
                    }! function(t, e) {
                        U(t, (t => {
                            const i = t.gc,
                                s = i.length / 2;
                            let n;
                            if (s > e) {
                                for (n = 0; n < s; ++n) delete t.data[i[n]];
                                i.splice(0, s)
                            }
                        }))
                    }(n, e);
                    const v = o.indexOf(_),
                        w = r.indexOf(y),
                        k = t => ({
                            width: o[t] || 0,
                            height: r[t] || 0
                        });
                    return {
                        first: k(0),
                        last: k(e - 1),
                        widest: k(v),
                        highest: k(w),
                        widths: o,
                        heights: r
                    }
                }
                getLabelForValue(t) {
                    return t
                }
                getPixelForValue(t, e) {
                    return NaN
                }
                getValueForPixel(t) {}
                getPixelForTick(t) {
                    const e = this.ticks;
                    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
                }
                getPixelForDecimal(t) {
                    this._reversePixels && (t = 1 - t);
                    const e = this._startPixel + t * this._length;
                    return Pt(this._alignToPixels ? he(this.chart, e, 0) : e, -32768, 32767)
                }
                getDecimalForPixel(t) {
                    const e = (t - this._startPixel) / this._length;
                    return this._reversePixels ? 1 - e : e
                }
                getBasePixel() {
                    return this.getPixelForValue(this.getBaseValue())
                }
                getBaseValue() {
                    const {
                        min: t,
                        max: e
                    } = this;
                    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
                }
                getContext(t) {
                    const e = this.ticks || [];
                    if (t >= 0 && t < e.length) {
                        const i = e[t];
                        return i.$context || (i.$context = function(t, e, i) {
                            return Ae(t, {
                                tick: i,
                                index: e,
                                type: "tick"
                            })
                        }(this.getContext(), t, i))
                    }
                    return this.$context || (this.$context = Ae(this.chart.getContext(), {
                        scale: this,
                        type: "scale"
                    }))
                }
                _tickSize() {
                    const t = this.options.ticks,
                        e = yt(this.labelRotation),
                        i = Math.abs(Math.cos(e)),
                        s = Math.abs(Math.sin(e)),
                        n = this._getLabelSizes(),
                        o = t.autoSkipPadding || 0,
                        r = n ? n.widest.width + o : 0,
                        a = n ? n.highest.height + o : 0;
                    return this.isHorizontal() ? a * i > r * s ? r / i : a / s : a * s < r * i ? a / i : r / s
                }
                _isVisible() {
                    const t = this.options.display;
                    return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0
                }
                _computeGridLineItems(t) {
                    const e = this.axis,
                        i = this.chart,
                        s = this.options,
                        {
                            grid: n,
                            position: o,
                            border: r
                        } = s,
                        a = n.offset,
                        h = this.isHorizontal(),
                        l = this.ticks.length + (a ? 1 : 0),
                        c = Rs(n),
                        d = [],
                        u = r.setContext(this.getContext()),
                        f = u.display ? u.width : 0,
                        g = f / 2,
                        p = function(t) {
                            return he(i, t, f)
                        };
                    let m, b, x, _, y, v, w, k, M, S, O, D;
                    if ("top" === o) m = p(this.bottom), v = this.bottom - c, k = m - g, S = p(t.top) + g, D = t.bottom;
                    else if ("bottom" === o) m = p(this.top), S = t.top, D = p(t.bottom) - g, v = m + g, k = this.top + c;
                    else if ("left" === o) m = p(this.right), y = this.right - c, w = m - g, M = p(t.left) + g, O = t.right;
                    else if ("right" === o) m = p(this.left), M = t.left, O = p(t.right) - g, y = m + g, w = this.left + c;
                    else if ("x" === e) {
                        if ("center" === o) m = p((t.top + t.bottom) / 2 + .5);
                        else if (j(o)) {
                            const t = Object.keys(o)[0],
                                e = o[t];
                            m = p(this.chart.scales[t].getPixelForValue(e))
                        }
                        S = t.top, D = t.bottom, v = m + g, k = v + c
                    } else if ("y" === e) {
                        if ("center" === o) m = p((t.left + t.right) / 2);
                        else if (j(o)) {
                            const t = Object.keys(o)[0],
                                e = o[t];
                            m = p(this.chart.scales[t].getPixelForValue(e))
                        }
                        y = m - g, w = y - c, M = t.left, O = t.right
                    }
                    const P = W(s.ticks.maxTicksLimit, l),
                        T = Math.max(1, Math.ceil(l / P));
                    for (b = 0; b < l; b += T) {
                        const t = this.getContext(b),
                            e = n.setContext(t),
                            s = r.setContext(t),
                            o = e.lineWidth,
                            l = e.color,
                            c = s.dash || [],
                            u = s.dashOffset,
                            f = e.tickWidth,
                            g = e.tickColor,
                            p = e.tickBorderDash || [],
                            m = e.tickBorderDashOffset;
                        x = zs(this, b, a), void 0 !== x && (_ = he(i, x, o), h ? y = w = M = O = _ : v = k = S = D = _, d.push({
                            tx1: y,
                            ty1: v,
                            tx2: w,
                            ty2: k,
                            x1: M,
                            y1: S,
                            x2: O,
                            y2: D,
                            width: o,
                            color: l,
                            borderDash: c,
                            borderDashOffset: u,
                            tickWidth: f,
                            tickColor: g,
                            tickBorderDash: p,
                            tickBorderDashOffset: m
                        }))
                    }
                    return this._ticksLength = l, this._borderValue = m, d
                }
                _computeLabelItems(t) {
                    const e = this.axis,
                        i = this.options,
                        {
                            position: s,
                            ticks: n
                        } = i,
                        o = this.isHorizontal(),
                        r = this.ticks,
                        {
                            align: a,
                            crossAlign: h,
                            padding: l,
                            mirror: c
                        } = n,
                        d = Rs(i.grid),
                        u = d + l,
                        f = c ? -l : u,
                        g = -yt(this.labelRotation),
                        p = [];
                    let m, b, x, _, y, v, w, k, M, S, O, D, P = "middle";
                    if ("top" === s) v = this.bottom - f, w = this._getXAxisLabelAlignment();
                    else if ("bottom" === s) v = this.top + f, w = this._getXAxisLabelAlignment();
                    else if ("left" === s) {
                        const t = this._getYAxisLabelAlignment(d);
                        w = t.textAlign, y = t.x
                    } else if ("right" === s) {
                        const t = this._getYAxisLabelAlignment(d);
                        w = t.textAlign, y = t.x
                    } else if ("x" === e) {
                        if ("center" === s) v = (t.top + t.bottom) / 2 + u;
                        else if (j(s)) {
                            const t = Object.keys(s)[0],
                                e = s[t];
                            v = this.chart.scales[t].getPixelForValue(e) + u
                        }
                        w = this._getXAxisLabelAlignment()
                    } else if ("y" === e) {
                        if ("center" === s) y = (t.left + t.right) / 2 - u;
                        else if (j(s)) {
                            const t = Object.keys(s)[0],
                                e = s[t];
                            y = this.chart.scales[t].getPixelForValue(e)
                        }
                        w = this._getYAxisLabelAlignment(d).textAlign
                    }
                    "y" === e && ("start" === a ? P = "top" : "end" === a && (P = "bottom"));
                    const T = this._getLabelSizes();
                    for (m = 0, b = r.length; m < b; ++m) {
                        x = r[m], _ = x.label;
                        const t = n.setContext(this.getContext(m));
                        k = this.getPixelForTick(m) + n.labelOffset, M = this._resolveTickFontOptions(m), S = M.lineHeight, O = V(_) ? _.length : 1;
                        const e = O / 2,
                            i = t.color,
                            a = t.textStrokeColor,
                            l = t.textStrokeWidth;
                        let d, u = w;
                        if (o ? (y = k, "inner" === w && (u = m === b - 1 ? this.options.reverse ? "left" : "right" : 0 === m ? this.options.reverse ? "right" : "left" : "center"), D = "top" === s ? "near" === h || 0 !== g ? -O * S + S / 2 : "center" === h ? -T.highest.height / 2 - e * S + S : -T.highest.height + S / 2 : "near" === h || 0 !== g ? S / 2 : "center" === h ? T.highest.height / 2 - e * S : T.highest.height - O * S, c && (D *= -1), 0 === g || t.showLabelBackdrop || (y += S / 2 * Math.sin(g))) : (v = k, D = (1 - O) * S / 2), t.showLabelBackdrop) {
                            const e = Pe(t.backdropPadding),
                                i = T.heights[m],
                                s = T.widths[m];
                            let n = D - e.top,
                                o = 0 - e.left;
                            switch (P) {
                                case "middle":
                                    n -= i / 2;
                                    break;
                                case "bottom":
                                    n -= i
                            }
                            switch (w) {
                                case "center":
                                    o -= s / 2;
                                    break;
                                case "right":
                                    o -= s
                            }
                            d = {
                                left: o,
                                top: n,
                                width: s + e.width,
                                height: i + e.height,
                                color: t.backdropColor
                            }
                        }
                        p.push({
                            label: _,
                            font: M,
                            textOffset: D,
                            options: {
                                rotation: g,
                                color: i,
                                strokeColor: a,
                                strokeWidth: l,
                                textAlign: u,
                                textBaseline: P,
                                translation: [y, v],
                                backdrop: d
                            }
                        })
                    }
                    return p
                }
                _getXAxisLabelAlignment() {
                    const {
                        position: t,
                        ticks: e
                    } = this.options;
                    if (-yt(this.labelRotation)) return "top" === t ? "left" : "right";
                    let i = "center";
                    return "start" === e.align ? i = "left" : "end" === e.align ? i = "right" : "inner" === e.align && (i = "inner"), i
                }
                _getYAxisLabelAlignment(t) {
                    const {
                        position: e,
                        ticks: {
                            crossAlign: i,
                            mirror: s,
                            padding: n
                        }
                    } = this.options, o = t + n, r = this._getLabelSizes().widest.width;
                    let a, h;
                    return "left" === e ? s ? (h = this.right + n, "near" === i ? a = "left" : "center" === i ? (a = "center", h += r / 2) : (a = "right", h += r)) : (h = this.right - o, "near" === i ? a = "right" : "center" === i ? (a = "center", h -= r / 2) : (a = "left", h = this.left)) : "right" === e ? s ? (h = this.left + n, "near" === i ? a = "right" : "center" === i ? (a = "center", h -= r / 2) : (a = "left", h -= r)) : (h = this.left + o, "near" === i ? a = "left" : "center" === i ? (a = "center", h += r / 2) : (a = "right", h = this.right)) : a = "right", {
                        textAlign: a,
                        x: h
                    }
                }
                _computeLabelArea() {
                    if (this.options.ticks.mirror) return;
                    const t = this.chart,
                        e = this.options.position;
                    return "left" === e || "right" === e ? {
                        top: 0,
                        left: this.left,
                        bottom: t.height,
                        right: this.right
                    } : "top" === e || "bottom" === e ? {
                        top: this.top,
                        left: 0,
                        bottom: this.bottom,
                        right: t.width
                    } : void 0
                }
                drawBackground() {
                    const {
                        ctx: t,
                        options: {
                            backgroundColor: e
                        },
                        left: i,
                        top: s,
                        width: n,
                        height: o
                    } = this;
                    e && (t.save(), t.fillStyle = e, t.fillRect(i, s, n, o), t.restore())
                }
                getLineWidthForValue(t) {
                    const e = this.options.grid;
                    if (!this._isVisible() || !e.display) return 0;
                    const i = this.ticks.findIndex((e => e.value === t));
                    if (i >= 0) {
                        return e.setContext(this.getContext(i)).lineWidth
                    }
                    return 0
                }
                drawGrid(t) {
                    const e = this.options.grid,
                        i = this.ctx,
                        s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
                    let n, o;
                    const r = (t, e, s) => {
                        s.width && s.color && (i.save(), i.lineWidth = s.width, i.strokeStyle = s.color, i.setLineDash(s.borderDash || []), i.lineDashOffset = s.borderDashOffset, i.beginPath(), i.moveTo(t.x, t.y), i.lineTo(e.x, e.y), i.stroke(), i.restore())
                    };
                    if (e.display)
                        for (n = 0, o = s.length; n < o; ++n) {
                            const t = s[n];
                            e.drawOnChartArea && r({
                                x: t.x1,
                                y: t.y1
                            }, {
                                x: t.x2,
                                y: t.y2
                            }, t), e.drawTicks && r({
                                x: t.tx1,
                                y: t.ty1
                            }, {
                                x: t.tx2,
                                y: t.ty2
                            }, {
                                color: t.tickColor,
                                width: t.tickWidth,
                                borderDash: t.tickBorderDash,
                                borderDashOffset: t.tickBorderDashOffset
                            })
                        }
                }
                drawBorder() {
                    const {
                        chart: t,
                        ctx: e,
                        options: {
                            border: i,
                            grid: s
                        }
                    } = this, n = i.setContext(this.getContext()), o = i.display ? n.width : 0;
                    if (!o) return;
                    const r = s.setContext(this.getContext(0)).lineWidth,
                        a = this._borderValue;
                    let h, l, c, d;
                    this.isHorizontal() ? (h = he(t, this.left, o) - o / 2, l = he(t, this.right, r) + r / 2, c = d = a) : (c = he(t, this.top, o) - o / 2, d = he(t, this.bottom, r) + r / 2, h = l = a), e.save(), e.lineWidth = n.width, e.strokeStyle = n.color, e.beginPath(), e.moveTo(h, c), e.lineTo(l, d), e.stroke(), e.restore()
                }
                drawLabels(t) {
                    if (!this.options.ticks.display) return;
                    const e = this.ctx,
                        i = this._computeLabelArea();
                    i && fe(e, i);
                    const s = this.getLabelItems(t);
                    for (const t of s) {
                        const i = t.options,
                            s = t.font;
                        _e(e, t.label, 0, t.textOffset, s, i)
                    }
                    i && ge(e)
                }
                drawTitle() {
                    const {
                        ctx: t,
                        options: {
                            position: e,
                            title: i,
                            reverse: s
                        }
                    } = this;
                    if (!i.display) return;
                    const n = Te(i.font),
                        o = Pe(i.padding),
                        r = i.align;
                    let a = n.lineHeight / 2;
                    "bottom" === e || "center" === e || j(e) ? (a += o.bottom, V(i.text) && (a += n.lineHeight * (i.text.length - 1))) : a += o.top;
                    const {
                        titleX: h,
                        titleY: l,
                        maxWidth: c,
                        rotation: d
                    } = function(t, e, i, s) {
                        const {
                            top: n,
                            left: o,
                            bottom: r,
                            right: a,
                            chart: h
                        } = t, {
                            chartArea: l,
                            scales: c
                        } = h;
                        let d, u, f, g = 0;
                        const p = r - n,
                            m = a - o;
                        if (t.isHorizontal()) {
                            if (u = Vt(s, o, a), j(i)) {
                                const t = Object.keys(i)[0],
                                    s = i[t];
                                f = c[t].getPixelForValue(s) + p - e
                            } else f = "center" === i ? (l.bottom + l.top) / 2 + p - e : Is(t, i, e);
                            d = a - o
                        } else {
                            if (j(i)) {
                                const t = Object.keys(i)[0],
                                    s = i[t];
                                u = c[t].getPixelForValue(s) - m + e
                            } else u = "center" === i ? (l.left + l.right) / 2 - m + e : Is(t, i, e);
                            f = Vt(s, r, n), g = "left" === i ? -dt : dt
                        }
                        return {
                            titleX: u,
                            titleY: f,
                            maxWidth: d,
                            rotation: g
                        }
                    }(this, a, e, r);
                    _e(t, i.text, 0, 0, n, {
                        color: i.color,
                        maxWidth: c,
                        rotation: d,
                        textAlign: Bs(r, e, s),
                        textBaseline: "middle",
                        translation: [h, l]
                    })
                }
                draw(t) {
                    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t))
                }
                _layers() {
                    const t = this.options,
                        e = t.ticks && t.ticks.z || 0,
                        i = W(t.grid && t.grid.z, -1),
                        s = W(t.border && t.border.z, 0);
                    return this._isVisible() && this.draw === Vs.prototype.draw ? [{
                        z: i,
                        draw: t => {
                            this.drawBackground(), this.drawGrid(t), this.drawTitle()
                        }
                    }, {
                        z: s,
                        draw: () => {
                            this.drawBorder()
                        }
                    }, {
                        z: e,
                        draw: t => {
                            this.drawLabels(t)
                        }
                    }] : [{
                        z: e,
                        draw: t => {
                            this.draw(t)
                        }
                    }]
                }
                getMatchingVisibleMetas(t) {
                    const e = this.chart.getSortedVisibleDatasetMetas(),
                        i = this.axis + "AxisID",
                        s = [];
                    let n, o;
                    for (n = 0, o = e.length; n < o; ++n) {
                        const o = e[n];
                        o[i] !== this.id || t && o.type !== t || s.push(o)
                    }
                    return s
                }
                _resolveTickFontOptions(t) {
                    return Te(this.options.ticks.setContext(this.getContext(t)).font)
                }
                _maxDigits() {
                    const t = this._resolveTickFontOptions(0).lineHeight;
                    return (this.isHorizontal() ? this.width : this.height) / t
                }
            }
            class js {
                constructor(t, e, i) {
                    this.type = t, this.scope = e, this.override = i, this.items = Object.create(null)
                }
                isForType(t) {
                    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
                }
                register(t) {
                    const e = Object.getPrototypeOf(t);
                    let i;
                    (function(t) {
                        return "id" in t && "defaults" in t
                    })(e) && (i = this.register(e));
                    const s = this.items,
                        n = t.id,
                        o = this.scope + "." + n;
                    if (!n) throw new Error("class does not have id: " + t);
                    return n in s || (s[n] = t, function(t, e, i) {
                        const s = Q(Object.create(null), [i ? re.get(i) : {}, re.get(e), t.defaults]);
                        re.set(e, s), t.defaultRoutes && function(t, e) {
                            Object.keys(e).forEach((i => {
                                const s = i.split("."),
                                    n = s.pop(),
                                    o = [t].concat(s).join("."),
                                    r = e[i].split("."),
                                    a = r.pop(),
                                    h = r.join(".");
                                re.route(o, n, h, a)
                            }))
                        }(e, t.defaultRoutes);
                        t.descriptors && re.describe(e, t.descriptors)
                    }(t, o, i), this.override && re.override(t.id, t.overrides)), o
                }
                get(t) {
                    return this.items[t]
                }
                unregister(t) {
                    const e = this.items,
                        i = t.id,
                        s = this.scope;
                    i in e && delete e[i], s && i in re[s] && (delete re[s][i], this.override && delete ee[i])
                }
            }
            class Ns {
                constructor() {
                    this.controllers = new js(Ni, "datasets", !0), this.elements = new js(Ts, "elements"), this.plugins = new js(Object, "plugins"), this.scales = new js(Vs, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements]
                }
                add(...t) {
                    this._each("register", t)
                }
                remove(...t) {
                    this._each("unregister", t)
                }
                addControllers(...t) {
                    this._each("register", t, this.controllers)
                }
                addElements(...t) {
                    this._each("register", t, this.elements)
                }
                addPlugins(...t) {
                    this._each("register", t, this.plugins)
                }
                addScales(...t) {
                    this._each("register", t, this.scales)
                }
                getController(t) {
                    return this._get(t, this.controllers, "controller")
                }
                getElement(t) {
                    return this._get(t, this.elements, "element")
                }
                getPlugin(t) {
                    return this._get(t, this.plugins, "plugin")
                }
                getScale(t) {
                    return this._get(t, this.scales, "scale")
                }
                removeControllers(...t) {
                    this._each("unregister", t, this.controllers)
                }
                removeElements(...t) {
                    this._each("unregister", t, this.elements)
                }
                removePlugins(...t) {
                    this._each("unregister", t, this.plugins)
                }
                removeScales(...t) {
                    this._each("unregister", t, this.scales)
                }
                _each(t, e, i) {
                    [...e].forEach((e => {
                        const s = i || this._getRegistryForType(e);
                        i || s.isForType(e) || s === this.plugins && e.id ? this._exec(t, s, e) : U(e, (e => {
                            const s = i || this._getRegistryForType(e);
                            this._exec(t, s, e)
                        }))
                    }))
                }
                _exec(t, e, i) {
                    const s = it(t);
                    Y(i["before" + s], [], i), e[t](i), Y(i["after" + s], [], i)
                }
                _getRegistryForType(t) {
                    for (let e = 0; e < this._typedRegistries.length; e++) {
                        const i = this._typedRegistries[e];
                        if (i.isForType(t)) return i
                    }
                    return this.plugins
                }
                _get(t, e, i) {
                    const s = e.get(t);
                    if (void 0 === s) throw new Error('"' + t + '" is not a registered ' + i + ".");
                    return s
                }
            }
            var Hs = new Ns;
            class Ws {
                constructor() {
                    this._init = []
                }
                notify(t, e, i, s) {
                    "beforeInit" === e && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
                    const n = s ? this._descriptors(t).filter(s) : this._descriptors(t),
                        o = this._notify(n, t, e, i);
                    return "afterDestroy" === e && (this._notify(n, t, "stop"), this._notify(this._init, t, "uninstall")), o
                }
                _notify(t, e, i, s) {
                    s = s || {};
                    for (const n of t) {
                        const t = n.plugin;
                        if (!1 === Y(t[i], [e, s, n.options], t) && s.cancelable) return !1
                    }
                    return !0
                }
                invalidate() {
                    B(this._cache) || (this._oldCache = this._cache, this._cache = void 0)
                }
                _descriptors(t) {
                    if (this._cache) return this._cache;
                    const e = this._cache = this._createDescriptors(t);
                    return this._notifyStateChanges(t), e
                }
                _createDescriptors(t, e) {
                    const i = t && t.config,
                        s = W(i.options && i.options.plugins, {}),
                        n = function(t) {
                            const e = {},
                                i = [],
                                s = Object.keys(Hs.plugins.items);
                            for (let t = 0; t < s.length; t++) i.push(Hs.getPlugin(s[t]));
                            const n = t.plugins || [];
                            for (let t = 0; t < n.length; t++) {
                                const s = n[t]; - 1 === i.indexOf(s) && (i.push(s), e[s.id] = !0)
                            }
                            return {
                                plugins: i,
                                localIds: e
                            }
                        }(i);
                    return !1 !== s || e ? function(t, {
                        plugins: e,
                        localIds: i
                    }, s, n) {
                        const o = [],
                            r = t.getContext();
                        for (const a of e) {
                            const e = a.id,
                                h = $s(s[e], n);
                            null !== h && o.push({
                                plugin: a,
                                options: Ys(t.config, {
                                    plugin: a,
                                    local: i[e]
                                }, h, r)
                            })
                        }
                        return o
                    }(t, n, s, e) : []
                }
                _notifyStateChanges(t) {
                    const e = this._oldCache || [],
                        i = this._cache,
                        s = (t, e) => t.filter((t => !e.some((e => t.plugin.id === e.plugin.id))));
                    this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start")
                }
            }

            function $s(t, e) {
                return e || !1 !== t ? !0 === t ? {} : t : null
            }

            function Ys(t, {
                plugin: e,
                local: i
            }, s, n) {
                const o = t.pluginScopeKeys(e),
                    r = t.getOptionScopes(s, o);
                return i && e.defaults && r.push(e.defaults), t.createResolver(r, n, [""], {
                    scriptable: !1,
                    indexable: !1,
                    allKeys: !0
                })
            }

            function Us(t, e) {
                const i = re.datasets[t] || {};
                return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x"
            }

            function Xs(t) {
                if ("x" === t || "y" === t || "r" === t) return t
            }

            function qs(t, ...e) {
                if (Xs(t)) return t;
                for (const s of e) {
                    const e = s.axis || ("top" === (i = s.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.length > 1 && Xs(t[0].toLowerCase());
                    if (e) return e
                }
                var i;
                throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)
            }

            function Ks(t, e, i) {
                if (i[e + "AxisID"] === t) return {
                    axis: e
                }
            }

            function Gs(t, e) {
                const i = ee[t.type] || {
                        scales: {}
                    },
                    s = e.scales || {},
                    n = Us(t.type, e),
                    o = Object.create(null);
                return Object.keys(s).forEach((e => {
                    const r = s[e];
                    if (!j(r)) return console.error(`Invalid scale configuration for scale: ${e}`);
                    if (r._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${e}`);
                    const a = qs(e, r, function(t, e) {
                            if (e.data && e.data.datasets) {
                                const i = e.data.datasets.filter((e => e.xAxisID === t || e.yAxisID === t));
                                if (i.length) return Ks(t, "x", i[0]) || Ks(t, "y", i[0])
                            }
                            return {}
                        }(e, t), re.scales[r.type]),
                        h = function(t, e) {
                            return t === e ? "_index_" : "_value_"
                        }(a, n),
                        l = i.scales || {};
                    o[e] = Z(Object.create(null), [{
                        axis: a
                    }, r, l[a], l[h]])
                })), t.data.datasets.forEach((i => {
                    const n = i.type || t.type,
                        r = i.indexAxis || Us(n, e),
                        a = (ee[n] || {}).scales || {};
                    Object.keys(a).forEach((t => {
                        const e = function(t, e) {
                                let i = t;
                                return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"), i
                            }(t, r),
                            n = i[e + "AxisID"] || e;
                        o[n] = o[n] || Object.create(null), Z(o[n], [{
                            axis: e
                        }, s[n], a[t]])
                    }))
                })), Object.keys(o).forEach((t => {
                    const e = o[t];
                    Z(e, [re.scales[e.type], re.scale])
                })), o
            }

            function Qs(t) {
                const e = t.options || (t.options = {});
                e.plugins = W(e.plugins, {}), e.scales = Gs(t, e)
            }

            function Zs(t) {
                return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t
            }
            const Js = new Map,
                tn = new Set;

            function en(t, e) {
                let i = Js.get(t);
                return i || (i = e(), Js.set(t, i), tn.add(i)), i
            }
            const sn = (t, e, i) => {
                const s = et(e, i);
                void 0 !== s && t.add(s)
            };
            class nn {
                constructor(t) {
                    this._config = function(t) {
                        return (t = t || {}).data = Zs(t.data), Qs(t), t
                    }(t), this._scopeCache = new Map, this._resolverCache = new Map
                }
                get platform() {
                    return this._config.platform
                }
                get type() {
                    return this._config.type
                }
                set type(t) {
                    this._config.type = t
                }
                get data() {
                    return this._config.data
                }
                set data(t) {
                    this._config.data = Zs(t)
                }
                get options() {
                    return this._config.options
                }
                set options(t) {
                    this._config.options = t
                }
                get plugins() {
                    return this._config.plugins
                }
                update() {
                    const t = this._config;
                    this.clearCache(), Qs(t)
                }
                clearCache() {
                    this._scopeCache.clear(), this._resolverCache.clear()
                }
                datasetScopeKeys(t) {
                    return en(t, (() => [
                        [`datasets.${t}`, ""]
                    ]))
                }
                datasetAnimationScopeKeys(t, e) {
                    return en(`${t}.transition.${e}`, (() => [
                        [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
                        [`datasets.${t}`, ""]
                    ]))
                }
                datasetElementScopeKeys(t, e) {
                    return en(`${t}-${e}`, (() => [
                        [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]
                    ]))
                }
                pluginScopeKeys(t) {
                    const e = t.id;
                    return en(`${this.type}-plugin-${e}`, (() => [
                        [`plugins.${e}`, ...t.additionalOptionScopes || []]
                    ]))
                }
                _cachedScopes(t, e) {
                    const i = this._scopeCache;
                    let s = i.get(t);
                    return s && !e || (s = new Map, i.set(t, s)), s
                }
                getOptionScopes(t, e, i) {
                    const {
                        options: s,
                        type: n
                    } = this, o = this._cachedScopes(t, i), r = o.get(e);
                    if (r) return r;
                    const a = new Set;
                    e.forEach((e => {
                        t && (a.add(t), e.forEach((e => sn(a, t, e)))), e.forEach((t => sn(a, s, t))), e.forEach((t => sn(a, ee[n] || {}, t))), e.forEach((t => sn(a, re, t))), e.forEach((t => sn(a, ie, t)))
                    }));
                    const h = Array.from(a);
                    return 0 === h.length && h.push(Object.create(null)), tn.has(e) && o.set(e, h), h
                }
                chartOptionScopes() {
                    const {
                        options: t,
                        type: e
                    } = this;
                    return [t, ee[e] || {}, re.datasets[e] || {}, {
                        type: e
                    }, re, ie]
                }
                resolveNamedOptions(t, e, i, s = [""]) {
                    const n = {
                            $shared: !0
                        },
                        {
                            resolver: o,
                            subPrefixes: r
                        } = on(this._resolverCache, t, s);
                    let a = o;
                    if (function(t, e) {
                            const {
                                isScriptable: i,
                                isIndexable: s
                            } = Le(t);
                            for (const n of e) {
                                const e = i(n),
                                    o = s(n),
                                    r = (o || e) && t[n];
                                if (e && (nt(r) || rn(r)) || o && V(r)) return !0
                            }
                            return !1
                        }(o, e)) {
                        n.$shared = !1;
                        a = Ee(o, i = nt(i) ? i() : i, this.createResolver(t, i, r))
                    }
                    for (const t of e) n[t] = a[t];
                    return n
                }
                createResolver(t, e, i = [""], s) {
                    const {
                        resolver: n
                    } = on(this._resolverCache, t, i);
                    return j(e) ? Ee(n, e, void 0, s) : n
                }
            }

            function on(t, e, i) {
                let s = t.get(e);
                s || (s = new Map, t.set(e, s));
                const n = i.join();
                let o = s.get(n);
                if (!o) {
                    o = {
                        resolver: Ie(e, i),
                        subPrefixes: i.filter((t => !t.toLowerCase().includes("hover")))
                    }, s.set(n, o)
                }
                return o
            }
            const rn = t => j(t) && Object.getOwnPropertyNames(t).reduce(((e, i) => e || nt(t[i])), !1);
            const an = ["top", "bottom", "left", "right", "chartArea"];

            function hn(t, e) {
                return "top" === t || "bottom" === t || -1 === an.indexOf(t) && "x" === e
            }

            function ln(t, e) {
                return function(i, s) {
                    return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t]
                }
            }

            function cn(t) {
                const e = t.chart,
                    i = e.options.animation;
                e.notifyPlugins("afterRender"), Y(i && i.onComplete, [t], e)
            }

            function dn(t) {
                const e = t.chart,
                    i = e.options.animation;
                Y(i && i.onProgress, [t], e)
            }

            function un(t) {
                return Ze() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t
            }
            const fn = {},
                gn = t => {
                    const e = un(t);
                    return Object.values(fn).filter((t => t.canvas === e)).pop()
                };

            function pn(t, e, i) {
                const s = Object.keys(t);
                for (const n of s) {
                    const s = +n;
                    if (s >= e) {
                        const o = t[n];
                        delete t[n], (i > 0 || s > e) && (t[s + i] = o)
                    }
                }
            }
            class mn {
                static defaults = re;
                static instances = fn;
                static overrides = ee;
                static registry = Hs;
                static version = "4.3.2";
                static getChart = gn;
                static register(...t) {
                    Hs.add(...t), bn()
                }
                static unregister(...t) {
                    Hs.remove(...t), bn()
                }
                constructor(t, e) {
                    const i = this.config = new nn(e),
                        s = un(t),
                        n = gn(s);
                    if (n) throw new Error("Canvas is already in use. Chart with ID '" + n.id + "' must be destroyed before the canvas with ID '" + n.canvas.id + "' can be reused.");
                    const o = i.createResolver(i.chartOptionScopes(), this.getContext());
                    this.platform = new(i.platform || function(t) {
                        return !Ze() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? fs : Ps
                    }(s)), this.platform.updateConfig(i);
                    const r = this.platform.acquireContext(s, o.aspectRatio),
                        a = r && r.canvas,
                        h = a && a.height,
                        l = a && a.width;
                    this.id = F(), this.ctx = r, this.canvas = a, this.width = l, this.height = h, this._options = o, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Ws, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = function(t, e) {
                        let i;
                        return function(...s) {
                            return e ? (clearTimeout(i), i = setTimeout(t, e, s)) : t.apply(this, s), e
                        }
                    }((t => this.update(t)), o.resizeDelay || 0), this._dataChanges = [], fn[this.id] = this, r && a ? (Si.listen(this, "complete", cn), Si.listen(this, "progress", dn), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                }
                get aspectRatio() {
                    const {
                        options: {
                            aspectRatio: t,
                            maintainAspectRatio: e
                        },
                        width: i,
                        height: s,
                        _aspectRatio: n
                    } = this;
                    return B(t) ? e && n ? n : s ? i / s : null : t
                }
                get data() {
                    return this.config.data
                }
                set data(t) {
                    this.config.data = t
                }
                get options() {
                    return this._options
                }
                set options(t) {
                    this.config.options = t
                }
                get registry() {
                    return Hs
                }
                _initialize() {
                    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : hi(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this
                }
                clear() {
                    return le(this.canvas, this.ctx), this
                }
                stop() {
                    return Si.stop(this), this
                }
                resize(t, e) {
                    Si.running(this) ? this._resizeBeforeDraw = {
                        width: t,
                        height: e
                    } : this._resize(t, e)
                }
                _resize(t, e) {
                    const i = this.options,
                        s = this.canvas,
                        n = i.maintainAspectRatio && this.aspectRatio,
                        o = this.platform.getMaximumSize(s, t, e, n),
                        r = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
                        a = this.width ? "resize" : "attach";
                    this.width = o.width, this.height = o.height, this._aspectRatio = this.aspectRatio, hi(this, r, !0) && (this.notifyPlugins("resize", {
                        size: o
                    }), Y(i.onResize, [this, o], this), this.attached && this._doResize(a) && this.render())
                }
                ensureScalesHaveIDs() {
                    U(this.options.scales || {}, ((t, e) => {
                        t.id = e
                    }))
                }
                buildOrUpdateScales() {
                    const t = this.options,
                        e = t.scales,
                        i = this.scales,
                        s = Object.keys(i).reduce(((t, e) => (t[e] = !1, t)), {});
                    let n = [];
                    e && (n = n.concat(Object.keys(e).map((t => {
                        const i = e[t],
                            s = qs(t, i),
                            n = "r" === s,
                            o = "x" === s;
                        return {
                            options: i,
                            dposition: n ? "chartArea" : o ? "bottom" : "left",
                            dtype: n ? "radialLinear" : o ? "category" : "linear"
                        }
                    })))), U(n, (e => {
                        const n = e.options,
                            o = n.id,
                            r = qs(o, n),
                            a = W(n.type, e.dtype);
                        void 0 !== n.position && hn(n.position, r) === hn(e.dposition) || (n.position = e.dposition), s[o] = !0;
                        let h = null;
                        if (o in i && i[o].type === a) h = i[o];
                        else {
                            h = new(Hs.getScale(a))({
                                id: o,
                                type: a,
                                ctx: this.ctx,
                                chart: this
                            }), i[h.id] = h
                        }
                        h.init(n, t)
                    })), U(s, ((t, e) => {
                        t || delete i[e]
                    })), U(i, (t => {
                        ds.configure(this, t, t.options), ds.addBox(this, t)
                    }))
                }
                _updateMetasets() {
                    const t = this._metasets,
                        e = this.data.datasets.length,
                        i = t.length;
                    if (t.sort(((t, e) => t.index - e.index)), i > e) {
                        for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
                        t.splice(e, i - e)
                    }
                    this._sortedMetasets = t.slice(0).sort(ln("order", "index"))
                }
                _removeUnreferencedMetasets() {
                    const {
                        _metasets: t,
                        data: {
                            datasets: e
                        }
                    } = this;
                    t.length > e.length && delete this._stacks, t.forEach(((t, i) => {
                        0 === e.filter((e => e === t._dataset)).length && this._destroyDatasetMeta(i)
                    }))
                }
                buildOrUpdateControllers() {
                    const t = [],
                        e = this.data.datasets;
                    let i, s;
                    for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) {
                        const s = e[i];
                        let n = this.getDatasetMeta(i);
                        const o = s.type || this.config.type;
                        if (n.type && n.type !== o && (this._destroyDatasetMeta(i), n = this.getDatasetMeta(i)), n.type = o, n.indexAxis = s.indexAxis || Us(o, this.options), n.order = s.order || 0, n.index = i, n.label = "" + s.label, n.visible = this.isDatasetVisible(i), n.controller) n.controller.updateIndex(i), n.controller.linkScales();
                        else {
                            const e = Hs.getController(o),
                                {
                                    datasetElementType: s,
                                    dataElementType: r
                                } = re.datasets[o];
                            Object.assign(e, {
                                dataElementType: Hs.getElement(r),
                                datasetElementType: s && Hs.getElement(s)
                            }), n.controller = new e(this, i), t.push(n.controller)
                        }
                    }
                    return this._updateMetasets(), t
                }
                _resetElements() {
                    U(this.data.datasets, ((t, e) => {
                        this.getDatasetMeta(e).controller.reset()
                    }), this)
                }
                reset() {
                    this._resetElements(), this.notifyPlugins("reset")
                }
                update(t) {
                    const e = this.config;
                    e.update();
                    const i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()),
                        s = this._animationsDisabled = !i.animation;
                    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins("beforeUpdate", {
                            mode: t,
                            cancelable: !0
                        })) return;
                    const n = this.buildOrUpdateControllers();
                    this.notifyPlugins("beforeElementsUpdate");
                    let o = 0;
                    for (let t = 0, e = this.data.datasets.length; t < e; t++) {
                        const {
                            controller: e
                        } = this.getDatasetMeta(t), i = !s && -1 === n.indexOf(e);
                        e.buildOrUpdateElements(i), o = Math.max(+e.getMaxOverflow(), o)
                    }
                    o = this._minPadding = i.layout.autoPadding ? o : 0, this._updateLayout(o), s || U(n, (t => {
                        t.reset()
                    })), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
                        mode: t
                    }), this._layers.sort(ln("z", "_idx"));
                    const {
                        _active: r,
                        _lastEvent: a
                    } = this;
                    a ? this._eventHandler(a, !0) : r.length && this._updateHoverStyles(r, r, !0), this.render()
                }
                _updateScales() {
                    U(this.scales, (t => {
                        ds.removeBox(this, t)
                    })), this.ensureScalesHaveIDs(), this.buildOrUpdateScales()
                }
                _checkEventBindings() {
                    const t = this.options,
                        e = new Set(Object.keys(this._listeners)),
                        i = new Set(t.events);
                    ot(e, i) && !!this._responsiveListeners === t.responsive || (this.unbindEvents(), this.bindEvents())
                }
                _updateHiddenIndices() {
                    const {
                        _hiddenIndices: t
                    } = this, e = this._getUniformDataChanges() || [];
                    for (const {
                            method: i,
                            start: s,
                            count: n
                        }
                        of e) {
                        pn(t, s, "_removeElements" === i ? -n : n)
                    }
                }
                _getUniformDataChanges() {
                    const t = this._dataChanges;
                    if (!t || !t.length) return;
                    this._dataChanges = [];
                    const e = this.data.datasets.length,
                        i = e => new Set(t.filter((t => t[0] === e)).map(((t, e) => e + "," + t.splice(1).join(",")))),
                        s = i(0);
                    for (let t = 1; t < e; t++)
                        if (!ot(s, i(t))) return;
                    return Array.from(s).map((t => t.split(","))).map((t => ({
                        method: t[1],
                        start: +t[2],
                        count: +t[3]
                    })))
                }
                _updateLayout(t) {
                    if (!1 === this.notifyPlugins("beforeLayout", {
                            cancelable: !0
                        })) return;
                    ds.update(this, this.width, this.height, t);
                    const e = this.chartArea,
                        i = e.width <= 0 || e.height <= 0;
                    this._layers = [], U(this.boxes, (t => {
                        i && "chartArea" === t.position || (t.configure && t.configure(), this._layers.push(...t._layers()))
                    }), this), this._layers.forEach(((t, e) => {
                        t._idx = e
                    })), this.notifyPlugins("afterLayout")
                }
                _updateDatasets(t) {
                    if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", {
                            mode: t,
                            cancelable: !0
                        })) {
                        for (let t = 0, e = this.data.datasets.length; t < e; ++t) this.getDatasetMeta(t).controller.configure();
                        for (let e = 0, i = this.data.datasets.length; e < i; ++e) this._updateDataset(e, nt(t) ? t({
                            datasetIndex: e
                        }) : t);
                        this.notifyPlugins("afterDatasetsUpdate", {
                            mode: t
                        })
                    }
                }
                _updateDataset(t, e) {
                    const i = this.getDatasetMeta(t),
                        s = {
                            meta: i,
                            index: t,
                            mode: e,
                            cancelable: !0
                        };
                    !1 !== this.notifyPlugins("beforeDatasetUpdate", s) && (i.controller._update(e), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s))
                }
                render() {
                    !1 !== this.notifyPlugins("beforeRender", {
                        cancelable: !0
                    }) && (Si.has(this) ? this.attached && !Si.running(this) && Si.start(this) : (this.draw(), cn({
                        chart: this
                    })))
                }
                draw() {
                    let t;
                    if (this._resizeBeforeDraw) {
                        const {
                            width: t,
                            height: e
                        } = this._resizeBeforeDraw;
                        this._resize(t, e), this._resizeBeforeDraw = null
                    }
                    if (this.clear(), this.width <= 0 || this.height <= 0) return;
                    if (!1 === this.notifyPlugins("beforeDraw", {
                            cancelable: !0
                        })) return;
                    const e = this._layers;
                    for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
                    for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
                    this.notifyPlugins("afterDraw")
                }
                _getSortedDatasetMetas(t) {
                    const e = this._sortedMetasets,
                        i = [];
                    let s, n;
                    for (s = 0, n = e.length; s < n; ++s) {
                        const n = e[s];
                        t && !n.visible || i.push(n)
                    }
                    return i
                }
                getSortedVisibleDatasetMetas() {
                    return this._getSortedDatasetMetas(!0)
                }
                _drawDatasets() {
                    if (!1 === this.notifyPlugins("beforeDatasetsDraw", {
                            cancelable: !0
                        })) return;
                    const t = this.getSortedVisibleDatasetMetas();
                    for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
                    this.notifyPlugins("afterDatasetsDraw")
                }
                _drawDataset(t) {
                    const e = this.ctx,
                        i = t._clip,
                        s = !i.disabled,
                        n = function(t) {
                            const {
                                xScale: e,
                                yScale: i
                            } = t;
                            if (e && i) return {
                                left: e.left,
                                right: e.right,
                                top: i.top,
                                bottom: i.bottom
                            }
                        }(t) || this.chartArea,
                        o = {
                            meta: t,
                            index: t.index,
                            cancelable: !0
                        };
                    !1 !== this.notifyPlugins("beforeDatasetDraw", o) && (s && fe(e, {
                        left: !1 === i.left ? 0 : n.left - i.left,
                        right: !1 === i.right ? this.width : n.right + i.right,
                        top: !1 === i.top ? 0 : n.top - i.top,
                        bottom: !1 === i.bottom ? this.height : n.bottom + i.bottom
                    }), t.controller.draw(), s && ge(e), o.cancelable = !1, this.notifyPlugins("afterDatasetDraw", o))
                }
                isPointInArea(t) {
                    return ue(t, this.chartArea, this._minPadding)
                }
                getElementsAtEventForMode(t, e, i, s) {
                    const n = Zi.modes[e];
                    return "function" == typeof n ? n(this, t, i, s) : []
                }
                getDatasetMeta(t) {
                    const e = this.data.datasets[t],
                        i = this._metasets;
                    let s = i.filter((t => t && t._dataset === e)).pop();
                    return s || (s = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null,
                        order: e && e.order || 0,
                        index: t,
                        _dataset: e,
                        _parsed: [],
                        _sorted: !1
                    }, i.push(s)), s
                }
                getContext() {
                    return this.$context || (this.$context = Ae(null, {
                        chart: this,
                        type: "chart"
                    }))
                }
                getVisibleDatasetCount() {
                    return this.getSortedVisibleDatasetMetas().length
                }
                isDatasetVisible(t) {
                    const e = this.data.datasets[t];
                    if (!e) return !1;
                    const i = this.getDatasetMeta(t);
                    return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden
                }
                setDatasetVisibility(t, e) {
                    this.getDatasetMeta(t).hidden = !e
                }
                toggleDataVisibility(t) {
                    this._hiddenIndices[t] = !this._hiddenIndices[t]
                }
                getDataVisibility(t) {
                    return !this._hiddenIndices[t]
                }
                _updateVisibility(t, e, i) {
                    const s = i ? "show" : "hide",
                        n = this.getDatasetMeta(t),
                        o = n.controller._resolveAnimations(void 0, s);
                    st(e) ? (n.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), o.update(n, {
                        visible: i
                    }), this.update((e => e.datasetIndex === t ? s : void 0)))
                }
                hide(t, e) {
                    this._updateVisibility(t, e, !1)
                }
                show(t, e) {
                    this._updateVisibility(t, e, !0)
                }
                _destroyDatasetMeta(t) {
                    const e = this._metasets[t];
                    e && e.controller && e.controller._destroy(), delete this._metasets[t]
                }
                _stop() {
                    let t, e;
                    for (this.stop(), Si.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t)
                }
                destroy() {
                    this.notifyPlugins("beforeDestroy");
                    const {
                        canvas: t,
                        ctx: e
                    } = this;
                    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), le(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete fn[this.id], this.notifyPlugins("afterDestroy")
                }
                toBase64Image(...t) {
                    return this.canvas.toDataURL(...t)
                }
                bindEvents() {
                    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
                }
                bindUserEvents() {
                    const t = this._listeners,
                        e = this.platform,
                        i = (i, s) => {
                            e.addEventListener(this, i, s), t[i] = s
                        },
                        s = (t, e, i) => {
                            t.offsetX = e, t.offsetY = i, this._eventHandler(t)
                        };
                    U(this.options.events, (t => i(t, s)))
                }
                bindResponsiveEvents() {
                    this._responsiveListeners || (this._responsiveListeners = {});
                    const t = this._responsiveListeners,
                        e = this.platform,
                        i = (i, s) => {
                            e.addEventListener(this, i, s), t[i] = s
                        },
                        s = (i, s) => {
                            t[i] && (e.removeEventListener(this, i, s), delete t[i])
                        },
                        n = (t, e) => {
                            this.canvas && this.resize(t, e)
                        };
                    let o;
                    const r = () => {
                        s("attach", r), this.attached = !0, this.resize(), i("resize", n), i("detach", o)
                    };
                    o = () => {
                        this.attached = !1, s("resize", n), this._stop(), this._resize(0, 0), i("attach", r)
                    }, e.isAttached(this.canvas) ? r() : o()
                }
                unbindEvents() {
                    U(this._listeners, ((t, e) => {
                        this.platform.removeEventListener(this, e, t)
                    })), this._listeners = {}, U(this._responsiveListeners, ((t, e) => {
                        this.platform.removeEventListener(this, e, t)
                    })), this._responsiveListeners = void 0
                }
                updateHoverStyle(t, e, i) {
                    const s = i ? "set" : "remove";
                    let n, o, r, a;
                    for ("dataset" === e && (n = this.getDatasetMeta(t[0].datasetIndex), n.controller["_" + s + "DatasetHoverStyle"]()), r = 0, a = t.length; r < a; ++r) {
                        o = t[r];
                        const e = o && this.getDatasetMeta(o.datasetIndex).controller;
                        e && e[s + "HoverStyle"](o.element, o.datasetIndex, o.index)
                    }
                }
                getActiveElements() {
                    return this._active || []
                }
                setActiveElements(t) {
                    const e = this._active || [],
                        i = t.map((({
                            datasetIndex: t,
                            index: e
                        }) => {
                            const i = this.getDatasetMeta(t);
                            if (!i) throw new Error("No dataset found at index " + t);
                            return {
                                datasetIndex: t,
                                element: i.data[e],
                                index: e
                            }
                        }));
                    !X(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e))
                }
                notifyPlugins(t, e, i) {
                    return this._plugins.notify(this, t, e, i)
                }
                isPluginEnabled(t) {
                    return 1 === this._plugins._cache.filter((e => e.plugin.id === t)).length
                }
                _updateHoverStyles(t, e, i) {
                    const s = this.options.hover,
                        n = (t, e) => t.filter((t => !e.some((e => t.datasetIndex === e.datasetIndex && t.index === e.index)))),
                        o = n(e, t),
                        r = i ? t : n(t, e);
                    o.length && this.updateHoverStyle(o, s.mode, !1), r.length && s.mode && this.updateHoverStyle(r, s.mode, !0)
                }
                _eventHandler(t, e) {
                    const i = {
                            event: t,
                            replay: e,
                            cancelable: !0,
                            inChartArea: this.isPointInArea(t)
                        },
                        s = e => (e.options.events || this.options.events).includes(t.native.type);
                    if (!1 === this.notifyPlugins("beforeEvent", i, s)) return;
                    const n = this._handleEvent(t, e, i.inChartArea);
                    return i.cancelable = !1, this.notifyPlugins("afterEvent", i, s), (n || i.changed) && this.render(), this
                }
                _handleEvent(t, e, i) {
                    const {
                        _active: s = [],
                        options: n
                    } = this, o = e, r = this._getActiveElements(t, s, i, o), a = function(t) {
                        return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type
                    }(t), h = function(t, e, i, s) {
                        return i && "mouseout" !== t.type ? s ? e : t : null
                    }(t, this._lastEvent, i, a);
                    i && (this._lastEvent = null, Y(n.onHover, [t, r, this], this), a && Y(n.onClick, [t, r, this], this));
                    const l = !X(r, s);
                    return (l || e) && (this._active = r, this._updateHoverStyles(r, s, e)), this._lastEvent = h, l
                }
                _getActiveElements(t, e, i, s) {
                    if ("mouseout" === t.type) return [];
                    if (!i) return e;
                    const n = this.options.hover;
                    return this.getElementsAtEventForMode(t, n.mode, n, s)
                }
            }

            function bn() {
                return U(mn.instances, (t => t._plugins.invalidate()))
            }

            function xn(t, e, i = e) {
                t.lineCap = W(i.borderCapStyle, e.borderCapStyle), t.setLineDash(W(i.borderDash, e.borderDash)), t.lineDashOffset = W(i.borderDashOffset, e.borderDashOffset), t.lineJoin = W(i.borderJoinStyle, e.borderJoinStyle), t.lineWidth = W(i.borderWidth, e.borderWidth), t.strokeStyle = W(i.borderColor, e.borderColor)
            }

            function _n(t, e, i) {
                t.lineTo(i.x, i.y)
            }

            function yn(t, e, i = {}) {
                const s = t.length,
                    {
                        start: n = 0,
                        end: o = s - 1
                    } = i,
                    {
                        start: r,
                        end: a
                    } = e,
                    h = Math.max(n, r),
                    l = Math.min(o, a),
                    c = n < r && o < r || n > a && o > a;
                return {
                    count: s,
                    start: h,
                    loop: e.loop,
                    ilen: l < h && !c ? s + l - h : l - h
                }
            }

            function vn(t, e, i, s) {
                const {
                    points: n,
                    options: o
                } = e, {
                    count: r,
                    start: a,
                    loop: h,
                    ilen: l
                } = yn(n, i, s), c = function(t) {
                    return t.stepped ? pe : t.tension || "monotone" === t.cubicInterpolationMode ? me : _n
                }(o);
                let d, u, f, {
                    move: g = !0,
                    reverse: p
                } = s || {};
                for (d = 0; d <= l; ++d) u = n[(a + (p ? l - d : d)) % r], u.skip || (g ? (t.moveTo(u.x, u.y), g = !1) : c(t, f, u, p, o.stepped), f = u);
                return h && (u = n[(a + (p ? l : 0)) % r], c(t, f, u, p, o.stepped)), !!h
            }

            function wn(t, e, i, s) {
                const n = e.points,
                    {
                        count: o,
                        start: r,
                        ilen: a
                    } = yn(n, i, s),
                    {
                        move: h = !0,
                        reverse: l
                    } = s || {};
                let c, d, u, f, g, p, m = 0,
                    b = 0;
                const x = t => (r + (l ? a - t : t)) % o,
                    _ = () => {
                        f !== g && (t.lineTo(m, g), t.lineTo(m, f), t.lineTo(m, p))
                    };
                for (h && (d = n[x(0)], t.moveTo(d.x, d.y)), c = 0; c <= a; ++c) {
                    if (d = n[x(c)], d.skip) continue;
                    const e = d.x,
                        i = d.y,
                        s = 0 | e;
                    s === u ? (i < f ? f = i : i > g && (g = i), m = (b * m + e) / ++b) : (_(), t.lineTo(e, i), u = s, b = 0, f = g = i), p = i
                }
                _()
            }

            function kn(t) {
                const e = t.options,
                    i = e.borderDash && e.borderDash.length;
                return !(t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i) ? wn : vn
            }
            const Mn = "function" == typeof Path2D;

            function Sn(t, e, i, s) {
                Mn && !e.options.segment ? function(t, e, i, s) {
                    let n = e._path;
                    n || (n = e._path = new Path2D, e.path(n, i, s) && n.closePath()), xn(t, e.options), t.stroke(n)
                }(t, e, i, s) : function(t, e, i, s) {
                    const {
                        segments: n,
                        options: o
                    } = e, r = kn(e);
                    for (const a of n) xn(t, o, a.style), t.beginPath(), r(t, e, a, {
                        start: i,
                        end: i + s - 1
                    }) && t.closePath(), t.stroke()
                }(t, e, i, s)
            }
            class On extends Ts {
                static id = "line";
                static defaults = {
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0,
                    borderJoinStyle: "miter",
                    borderWidth: 3,
                    capBezierPoints: !0,
                    cubicInterpolationMode: "default",
                    fill: !1,
                    spanGaps: !1,
                    stepped: !1,
                    tension: 0
                };
                static defaultRoutes = {
                    backgroundColor: "backgroundColor",
                    borderColor: "borderColor"
                };
                static descriptors = {
                    _scriptable: !0,
                    _indexable: t => "borderDash" !== t && "fill" !== t
                };
                constructor(t) {
                    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t)
                }
                updateControlPoints(t, e) {
                    const i = this.options;
                    if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this._pointsUpdated) {
                        const s = i.spanGaps ? this._loop : this._fullLoop;
                        Qe(this._points, i, t, s, e), this._pointsUpdated = !0
                    }
                }
                set points(t) {
                    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1
                }
                get points() {
                    return this._points
                }
                get segments() {
                    return this._segments || (this._segments = function(t, e) {
                        const i = t.points,
                            s = t.options.spanGaps,
                            n = i.length;
                        if (!n) return [];
                        const o = !!t._loop,
                            {
                                start: r,
                                end: a
                            } = function(t, e, i, s) {
                                let n = 0,
                                    o = e - 1;
                                if (i && !s)
                                    for (; n < e && !t[n].skip;) n++;
                                for (; n < e && t[n].skip;) n++;
                                for (n %= e, i && (o += n); o > n && t[o % e].skip;) o--;
                                return o %= e, {
                                    start: n,
                                    end: o
                                }
                            }(i, n, o, s);
                        return vi(t, !0 === s ? [{
                            start: r,
                            end: a,
                            loop: o
                        }] : function(t, e, i, s) {
                            const n = t.length,
                                o = [];
                            let r, a = e,
                                h = t[e];
                            for (r = e + 1; r <= i; ++r) {
                                const i = t[r % n];
                                i.skip || i.stop ? h.skip || (s = !1, o.push({
                                    start: e % n,
                                    end: (r - 1) % n,
                                    loop: s
                                }), e = a = i.stop ? r : null) : (a = r, h.skip && (e = r)), h = i
                            }
                            return null !== a && o.push({
                                start: e % n,
                                end: a % n,
                                loop: s
                            }), o
                        }(i, r, a < r ? a + n : a, !!t._fullLoop && 0 === r && a === n - 1), i, e)
                    }(this, this.options.segment))
                }
                first() {
                    const t = this.segments,
                        e = this.points;
                    return t.length && e[t[0].start]
                }
                last() {
                    const t = this.segments,
                        e = this.points,
                        i = t.length;
                    return i && e[t[i - 1].end]
                }
                interpolate(t, e) {
                    const i = this.options,
                        s = t[e],
                        n = this.points,
                        o = yi(this, {
                            property: e,
                            start: s,
                            end: s
                        });
                    if (!o.length) return;
                    const r = [],
                        a = function(t) {
                            return t.stepped ? ui : t.tension || "monotone" === t.cubicInterpolationMode ? fi : di
                        }(i);
                    let h, l;
                    for (h = 0, l = o.length; h < l; ++h) {
                        const {
                            start: l,
                            end: c
                        } = o[h], d = n[l], u = n[c];
                        if (d === u) {
                            r.push(d);
                            continue
                        }
                        const f = a(d, u, Math.abs((s - d[e]) / (u[e] - d[e])), i.stepped);
                        f[e] = t[e], r.push(f)
                    }
                    return 1 === r.length ? r[0] : r
                }
                pathSegment(t, e, i) {
                    return kn(this)(t, this, e, i)
                }
                path(t, e, i) {
                    const s = this.segments,
                        n = kn(this);
                    let o = this._loop;
                    e = e || 0, i = i || this.points.length - e;
                    for (const r of s) o &= n(t, this, r, {
                        start: e,
                        end: e + i - 1
                    });
                    return !!o
                }
                draw(t, e, i, s) {
                    const n = this.options || {};
                    (this.points || []).length && n.borderWidth && (t.save(), Sn(t, this, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0)
                }
            }

            function Dn(t, e, i, s) {
                const n = t.options,
                    {
                        [i]: o
                    } = t.getProps([i], s);
                return Math.abs(e - o) < n.radius + n.hitRadius
            }
            class Pn extends Ts {
                static id = "point";
                parsed;
                skip;
                stop;
                static defaults = {
                    borderWidth: 1,
                    hitRadius: 1,
                    hoverBorderWidth: 1,
                    hoverRadius: 4,
                    pointStyle: "circle",
                    radius: 3,
                    rotation: 0
                };
                static defaultRoutes = {
                    backgroundColor: "backgroundColor",
                    borderColor: "borderColor"
                };
                constructor(t) {
                    super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t)
                }
                inRange(t, e, i) {
                    const s = this.options,
                        {
                            x: n,
                            y: o
                        } = this.getProps(["x", "y"], i);
                    return Math.pow(t - n, 2) + Math.pow(e - o, 2) < Math.pow(s.hitRadius + s.radius, 2)
                }
                inXRange(t, e) {
                    return Dn(this, t, "x", e)
                }
                inYRange(t, e) {
                    return Dn(this, t, "y", e)
                }
                getCenterPoint(t) {
                    const {
                        x: e,
                        y: i
                    } = this.getProps(["x", "y"], t);
                    return {
                        x: e,
                        y: i
                    }
                }
                size(t) {
                    let e = (t = t || this.options || {}).radius || 0;
                    e = Math.max(e, e && t.hoverRadius || 0);
                    return 2 * (e + (e && t.borderWidth || 0))
                }
                draw(t, e) {
                    const i = this.options;
                    this.skip || i.radius < .1 || !ue(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, ce(t, i, this.x, this.y))
                }
                getRange() {
                    const t = this.options || {};
                    return t.radius + t.hitRadius
                }
            }

            function Tn(t, e, i, s) {
                if (s) return;
                let n = e[t],
                    o = i[t];
                return "angle" === t && (n = Ot(n), o = Ot(o)), {
                    property: t,
                    start: n,
                    end: o
                }
            }

            function Cn(t, e, i) {
                for (; e > t; e--) {
                    const t = i[e];
                    if (!isNaN(t.x) && !isNaN(t.y)) break
                }
                return e
            }

            function An(t, e, i, s) {
                return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0
            }

            function In(t, e) {
                let i = [],
                    s = !1;
                return V(t) ? (s = !0, i = t) : i = function(t, e) {
                    const {
                        x: i = null,
                        y: s = null
                    } = t || {}, n = e.points, o = [];
                    return e.segments.forEach((({
                        start: t,
                        end: e
                    }) => {
                        e = Cn(t, e, n);
                        const r = n[t],
                            a = n[e];
                        null !== s ? (o.push({
                            x: r.x,
                            y: s
                        }), o.push({
                            x: a.x,
                            y: s
                        })) : null !== i && (o.push({
                            x: i,
                            y: r.y
                        }), o.push({
                            x: i,
                            y: a.y
                        }))
                    })), o
                }(t, e), i.length ? new On({
                    points: i,
                    options: {
                        tension: 0
                    },
                    _loop: s,
                    _fullLoop: s
                }) : null
            }

            function En(t) {
                return t && !1 !== t.fill
            }

            function Ln(t, e, i) {
                let s = t[e].fill;
                const n = [e];
                let o;
                if (!i) return s;
                for (; !1 !== s && -1 === n.indexOf(s);) {
                    if (!N(s)) return s;
                    if (o = t[s], !o) return !1;
                    if (o.visible) return s;
                    n.push(s), s = o.fill
                }
                return !1
            }

            function zn(t, e, i) {
                const s = function(t) {
                    const e = t.options,
                        i = e.fill;
                    let s = W(i && i.target, i);
                    void 0 === s && (s = !!e.backgroundColor);
                    if (!1 === s || null === s) return !1;
                    if (!0 === s) return "origin";
                    return s
                }(t);
                if (j(s)) return !isNaN(s.value) && s;
                let n = parseFloat(s);
                return N(n) && Math.floor(n) === n ? function(t, e, i, s) {
                    "-" !== t && "+" !== t || (i = e + i);
                    if (i === e || i < 0 || i >= s) return !1;
                    return i
                }(s[0], e, n, i) : ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s
            }

            function Rn(t, e, i) {
                const s = [];
                for (let n = 0; n < i.length; n++) {
                    const o = i[n],
                        {
                            first: r,
                            last: a,
                            point: h
                        } = Fn(o, e, "x");
                    if (!(!h || r && a))
                        if (r) s.unshift(h);
                        else if (t.push(h), !a) break
                }
                t.push(...s)
            }

            function Fn(t, e, i) {
                const s = t.interpolate(e, i);
                if (!s) return {};
                const n = s[i],
                    o = t.segments,
                    r = t.points;
                let a = !1,
                    h = !1;
                for (let t = 0; t < o.length; t++) {
                    const e = o[t],
                        s = r[e.start][i],
                        l = r[e.end][i];
                    if (Tt(n, s, l)) {
                        a = n === s, h = n === l;
                        break
                    }
                }
                return {
                    first: a,
                    last: h,
                    point: s
                }
            }
            class Bn {
                constructor(t) {
                    this.x = t.x, this.y = t.y, this.radius = t.radius
                }
                pathSegment(t, e, i) {
                    const {
                        x: s,
                        y: n,
                        radius: o
                    } = this;
                    return e = e || {
                        start: 0,
                        end: at
                    }, t.arc(s, n, o, e.end, e.start, !0), !i.bounds
                }
                interpolate(t) {
                    const {
                        x: e,
                        y: i,
                        radius: s
                    } = this, n = t.angle;
                    return {
                        x: e + Math.cos(n) * s,
                        y: i + Math.sin(n) * s,
                        angle: n
                    }
                }
            }

            function Vn(t) {
                const {
                    chart: e,
                    fill: i,
                    line: s
                } = t;
                if (N(i)) return function(t, e) {
                    const i = t.getDatasetMeta(e),
                        s = i && t.isDatasetVisible(e);
                    return s ? i.dataset : null
                }(e, i);
                if ("stack" === i) return function(t) {
                    const {
                        scale: e,
                        index: i,
                        line: s
                    } = t, n = [], o = s.segments, r = s.points, a = function(t, e) {
                        const i = [],
                            s = t.getMatchingVisibleMetas("line");
                        for (let t = 0; t < s.length; t++) {
                            const n = s[t];
                            if (n.index === e) break;
                            n.hidden || i.unshift(n.dataset)
                        }
                        return i
                    }(e, i);
                    a.push(In({
                        x: null,
                        y: e.bottom
                    }, s));
                    for (let t = 0; t < o.length; t++) {
                        const e = o[t];
                        for (let t = e.start; t <= e.end; t++) Rn(n, r[t], a)
                    }
                    return new On({
                        points: n,
                        options: {}
                    })
                }(t);
                if ("shape" === i) return !0;
                const n = function(t) {
                    const e = t.scale || {};
                    if (e.getPointPositionForValue) return function(t) {
                        const {
                            scale: e,
                            fill: i
                        } = t, s = e.options, n = e.getLabels().length, o = s.reverse ? e.max : e.min, r = function(t, e, i) {
                            let s;
                            return s = "start" === t ? i : "end" === t ? e.options.reverse ? e.min : e.max : j(t) ? t.value : e.getBaseValue(), s
                        }(i, e, o), a = [];
                        if (s.grid.circular) {
                            const t = e.getPointPositionForValue(0, o);
                            return new Bn({
                                x: t.x,
                                y: t.y,
                                radius: e.getDistanceFromCenterForValue(r)
                            })
                        }
                        for (let t = 0; t < n; ++t) a.push(e.getPointPositionForValue(t, r));
                        return a
                    }(t);
                    return function(t) {
                        const {
                            scale: e = {},
                            fill: i
                        } = t, s = function(t, e) {
                            let i = null;
                            return "start" === t ? i = e.bottom : "end" === t ? i = e.top : j(t) ? i = e.getPixelForValue(t.value) : e.getBasePixel && (i = e.getBasePixel()), i
                        }(i, e);
                        if (N(s)) {
                            const t = e.isHorizontal();
                            return {
                                x: t ? s : null,
                                y: t ? null : s
                            }
                        }
                        return null
                    }(t)
                }(t);
                return n instanceof Bn ? n : In(n, s)
            }

            function jn(t, e, i) {
                const s = Vn(e),
                    {
                        line: n,
                        scale: o,
                        axis: r
                    } = e,
                    a = n.options,
                    h = a.fill,
                    l = a.backgroundColor,
                    {
                        above: c = l,
                        below: d = l
                    } = h || {};
                s && n.points.length && (fe(t, i), function(t, e) {
                    const {
                        line: i,
                        target: s,
                        above: n,
                        below: o,
                        area: r,
                        scale: a
                    } = e, h = i._loop ? "angle" : e.axis;
                    t.save(), "x" === h && o !== n && (Nn(t, s, r.top), Hn(t, {
                        line: i,
                        target: s,
                        color: n,
                        scale: a,
                        property: h
                    }), t.restore(), t.save(), Nn(t, s, r.bottom));
                    Hn(t, {
                        line: i,
                        target: s,
                        color: o,
                        scale: a,
                        property: h
                    }), t.restore()
                }(t, {
                    line: n,
                    target: s,
                    above: c,
                    below: d,
                    area: i,
                    scale: o,
                    axis: r
                }), ge(t))
            }

            function Nn(t, e, i) {
                const {
                    segments: s,
                    points: n
                } = e;
                let o = !0,
                    r = !1;
                t.beginPath();
                for (const a of s) {
                    const {
                        start: s,
                        end: h
                    } = a, l = n[s], c = n[Cn(s, h, n)];
                    o ? (t.moveTo(l.x, l.y), o = !1) : (t.lineTo(l.x, i), t.lineTo(l.x, l.y)), r = !!e.pathSegment(t, a, {
                        move: r
                    }), r ? t.closePath() : t.lineTo(c.x, i)
                }
                t.lineTo(e.first().x, i), t.closePath(), t.clip()
            }

            function Hn(t, e) {
                const {
                    line: i,
                    target: s,
                    property: n,
                    color: o,
                    scale: r
                } = e, a = function(t, e, i) {
                    const s = t.segments,
                        n = t.points,
                        o = e.points,
                        r = [];
                    for (const t of s) {
                        let {
                            start: s,
                            end: a
                        } = t;
                        a = Cn(s, a, n);
                        const h = Tn(i, n[s], n[a], t.loop);
                        if (!e.segments) {
                            r.push({
                                source: t,
                                target: h,
                                start: n[s],
                                end: n[a]
                            });
                            continue
                        }
                        const l = yi(e, h);
                        for (const e of l) {
                            const s = Tn(i, o[e.start], o[e.end], e.loop),
                                a = _i(t, n, s);
                            for (const t of a) r.push({
                                source: t,
                                target: e,
                                start: {
                                    [i]: An(h, s, "start", Math.max)
                                },
                                end: {
                                    [i]: An(h, s, "end", Math.min)
                                }
                            })
                        }
                    }
                    return r
                }(i, s, n);
                for (const {
                        source: e,
                        target: h,
                        start: l,
                        end: c
                    }
                    of a) {
                    const {
                        style: {
                            backgroundColor: a = o
                        } = {}
                    } = e, d = !0 !== s;
                    t.save(), t.fillStyle = a, Wn(t, r, d && Tn(n, l, c)), t.beginPath();
                    const u = !!i.pathSegment(t, e);
                    let f;
                    if (d) {
                        u ? t.closePath() : $n(t, s, c, n);
                        const e = !!s.pathSegment(t, h, {
                            move: u,
                            reverse: !0
                        });
                        f = u && e, f || $n(t, s, l, n)
                    }
                    t.closePath(), t.fill(f ? "evenodd" : "nonzero"), t.restore()
                }
            }

            function Wn(t, e, i) {
                const {
                    top: s,
                    bottom: n
                } = e.chart.chartArea, {
                    property: o,
                    start: r,
                    end: a
                } = i || {};
                "x" === o && (t.beginPath(), t.rect(r, s, a - r, n - s), t.clip())
            }

            function $n(t, e, i, s) {
                const n = e.interpolate(i, s);
                n && t.lineTo(n.x, n.y)
            }
            var Yn = {
                id: "filler",
                afterDatasetsUpdate(t, e, i) {
                    const s = (t.data.datasets || []).length,
                        n = [];
                    let o, r, a, h;
                    for (r = 0; r < s; ++r) o = t.getDatasetMeta(r), a = o.dataset, h = null, a && a.options && a instanceof On && (h = {
                        visible: t.isDatasetVisible(r),
                        index: r,
                        fill: zn(a, r, s),
                        chart: t,
                        axis: o.controller.options.indexAxis,
                        scale: o.vScale,
                        line: a
                    }), o.$filler = h, n.push(h);
                    for (r = 0; r < s; ++r) h = n[r], h && !1 !== h.fill && (h.fill = Ln(n, r, i.propagate))
                },
                beforeDraw(t, e, i) {
                    const s = "beforeDraw" === i.drawTime,
                        n = t.getSortedVisibleDatasetMetas(),
                        o = t.chartArea;
                    for (let e = n.length - 1; e >= 0; --e) {
                        const i = n[e].$filler;
                        i && (i.line.updateControlPoints(o, i.axis), s && i.fill && jn(t.ctx, i, o))
                    }
                },
                beforeDatasetsDraw(t, e, i) {
                    if ("beforeDatasetsDraw" !== i.drawTime) return;
                    const s = t.getSortedVisibleDatasetMetas();
                    for (let e = s.length - 1; e >= 0; --e) {
                        const i = s[e].$filler;
                        En(i) && jn(t.ctx, i, t.chartArea)
                    }
                },
                beforeDatasetDraw(t, e, i) {
                    const s = e.meta.$filler;
                    En(s) && "beforeDatasetDraw" === i.drawTime && jn(t.ctx, s, t.chartArea)
                },
                defaults: {
                    propagate: !0,
                    drawTime: "beforeDatasetDraw"
                }
            };
            new WeakMap;
            const Un = {
                average(t) {
                    if (!t.length) return !1;
                    let e, i, s = 0,
                        n = 0,
                        o = 0;
                    for (e = 0, i = t.length; e < i; ++e) {
                        const i = t[e].element;
                        if (i && i.hasValue()) {
                            const t = i.tooltipPosition();
                            s += t.x, n += t.y, ++o
                        }
                    }
                    return {
                        x: s / o,
                        y: n / o
                    }
                },
                nearest(t, e) {
                    if (!t.length) return !1;
                    let i, s, n, o = e.x,
                        r = e.y,
                        a = Number.POSITIVE_INFINITY;
                    for (i = 0, s = t.length; i < s; ++i) {
                        const s = t[i].element;
                        if (s && s.hasValue()) {
                            const t = Mt(e, s.getCenterPoint());
                            t < a && (a = t, n = s)
                        }
                    }
                    if (n) {
                        const t = n.tooltipPosition();
                        o = t.x, r = t.y
                    }
                    return {
                        x: o,
                        y: r
                    }
                }
            };

            function Xn(t, e) {
                return e && (V(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
            }

            function qn(t) {
                return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
            }

            function Kn(t, e) {
                const {
                    element: i,
                    datasetIndex: s,
                    index: n
                } = e, o = t.getDatasetMeta(s).controller, {
                    label: r,
                    value: a
                } = o.getLabelAndValue(n);
                return {
                    chart: t,
                    label: r,
                    parsed: o.getParsed(n),
                    raw: t.data.datasets[s].data[n],
                    formattedValue: a,
                    dataset: o.getDataset(),
                    dataIndex: n,
                    datasetIndex: s,
                    element: i
                }
            }

            function Gn(t, e) {
                const i = t.chart.ctx,
                    {
                        body: s,
                        footer: n,
                        title: o
                    } = t,
                    {
                        boxWidth: r,
                        boxHeight: a
                    } = e,
                    h = Te(e.bodyFont),
                    l = Te(e.titleFont),
                    c = Te(e.footerFont),
                    d = o.length,
                    u = n.length,
                    f = s.length,
                    g = Pe(e.padding);
                let p = g.height,
                    m = 0,
                    b = s.reduce(((t, e) => t + e.before.length + e.lines.length + e.after.length), 0);
                if (b += t.beforeBody.length + t.afterBody.length, d && (p += d * l.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom), b) {
                    p += f * (e.displayColors ? Math.max(a, h.lineHeight) : h.lineHeight) + (b - f) * h.lineHeight + (b - 1) * e.bodySpacing
                }
                u && (p += e.footerMarginTop + u * c.lineHeight + (u - 1) * e.footerSpacing);
                let x = 0;
                const _ = function(t) {
                    m = Math.max(m, i.measureText(t).width + x)
                };
                return i.save(), i.font = l.string, U(t.title, _), i.font = h.string, U(t.beforeBody.concat(t.afterBody), _), x = e.displayColors ? r + 2 + e.boxPadding : 0, U(s, (t => {
                    U(t.before, _), U(t.lines, _), U(t.after, _)
                })), x = 0, i.font = c.string, U(t.footer, _), i.restore(), m += g.width, {
                    width: m,
                    height: p
                }
            }

            function Qn(t, e, i, s) {
                const {
                    x: n,
                    width: o
                } = i, {
                    width: r,
                    chartArea: {
                        left: a,
                        right: h
                    }
                } = t;
                let l = "center";
                return "center" === s ? l = n <= (a + h) / 2 ? "left" : "right" : n <= o / 2 ? l = "left" : n >= r - o / 2 && (l = "right"),
                    function(t, e, i, s) {
                        const {
                            x: n,
                            width: o
                        } = s, r = i.caretSize + i.caretPadding;
                        return "left" === t && n + o + r > e.width || "right" === t && n - o - r < 0 || void 0
                    }(l, t, e, i) && (l = "center"), l
            }

            function Zn(t, e, i) {
                const s = i.yAlign || e.yAlign || function(t, e) {
                    const {
                        y: i,
                        height: s
                    } = e;
                    return i < s / 2 ? "top" : i > t.height - s / 2 ? "bottom" : "center"
                }(t, i);
                return {
                    xAlign: i.xAlign || e.xAlign || Qn(t, e, i, s),
                    yAlign: s
                }
            }

            function Jn(t, e, i, s) {
                const {
                    caretSize: n,
                    caretPadding: o,
                    cornerRadius: r
                } = t, {
                    xAlign: a,
                    yAlign: h
                } = i, l = n + o, {
                    topLeft: c,
                    topRight: d,
                    bottomLeft: u,
                    bottomRight: f
                } = De(r);
                let g = function(t, e) {
                    let {
                        x: i,
                        width: s
                    } = t;
                    return "right" === e ? i -= s : "center" === e && (i -= s / 2), i
                }(e, a);
                const p = function(t, e, i) {
                    let {
                        y: s,
                        height: n
                    } = t;
                    return "top" === e ? s += i : s -= "bottom" === e ? n + i : n / 2, s
                }(e, h, l);
                return "center" === h ? "left" === a ? g += l : "right" === a && (g -= l) : "left" === a ? g -= Math.max(c, u) + n : "right" === a && (g += Math.max(d, f) + n), {
                    x: Pt(g, 0, s.width - e.width),
                    y: Pt(p, 0, s.height - e.height)
                }
            }

            function to(t, e, i) {
                const s = Pe(i.padding);
                return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - s.right : t.x + s.left
            }

            function eo(t) {
                return Xn([], qn(t))
            }

            function io(t, e) {
                const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
                return i ? t.override(i) : t
            }
            const so = {
                beforeTitle: R,
                title(t) {
                    if (t.length > 0) {
                        const e = t[0],
                            i = e.chart.data.labels,
                            s = i ? i.length : 0;
                        if (this && this.options && "dataset" === this.options.mode) return e.dataset.label || "";
                        if (e.label) return e.label;
                        if (s > 0 && e.dataIndex < s) return i[e.dataIndex]
                    }
                    return ""
                },
                afterTitle: R,
                beforeBody: R,
                beforeLabel: R,
                label(t) {
                    if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
                    let e = t.dataset.label || "";
                    e && (e += ": ");
                    const i = t.formattedValue;
                    return B(i) || (e += i), e
                },
                labelColor(t) {
                    const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                    return {
                        borderColor: e.borderColor,
                        backgroundColor: e.backgroundColor,
                        borderWidth: e.borderWidth,
                        borderDash: e.borderDash,
                        borderDashOffset: e.borderDashOffset,
                        borderRadius: 0
                    }
                },
                labelTextColor() {
                    return this.options.bodyColor
                },
                labelPointStyle(t) {
                    const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                    return {
                        pointStyle: e.pointStyle,
                        rotation: e.rotation
                    }
                },
                afterLabel: R,
                afterBody: R,
                beforeFooter: R,
                footer: R,
                afterFooter: R
            };

            function no(t, e, i, s) {
                const n = t[e].call(i, s);
                return void 0 === n ? so[e].call(i, s) : n
            }
            class oo extends Ts {
                static positioners = Un;
                constructor(t) {
                    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0
                }
                initialize(t) {
                    this.options = t, this._cachedAnimations = void 0, this.$context = void 0
                }
                _resolveAnimations() {
                    const t = this._cachedAnimations;
                    if (t) return t;
                    const e = this.chart,
                        i = this.options.setContext(this.getContext()),
                        s = i.enabled && e.options.animation && i.animations,
                        n = new Ti(this.chart, s);
                    return s._cacheable && (this._cachedAnimations = Object.freeze(n)), n
                }
                getContext() {
                    return this.$context || (this.$context = (t = this.chart.getContext(), e = this, i = this._tooltipItems, Ae(t, {
                        tooltip: e,
                        tooltipItems: i,
                        type: "tooltip"
                    })));
                    var t, e, i
                }
                getTitle(t, e) {
                    const {
                        callbacks: i
                    } = e, s = no(i, "beforeTitle", this, t), n = no(i, "title", this, t), o = no(i, "afterTitle", this, t);
                    let r = [];
                    return r = Xn(r, qn(s)), r = Xn(r, qn(n)), r = Xn(r, qn(o)), r
                }
                getBeforeBody(t, e) {
                    return eo(no(e.callbacks, "beforeBody", this, t))
                }
                getBody(t, e) {
                    const {
                        callbacks: i
                    } = e, s = [];
                    return U(t, (t => {
                        const e = {
                                before: [],
                                lines: [],
                                after: []
                            },
                            n = io(i, t);
                        Xn(e.before, qn(no(n, "beforeLabel", this, t))), Xn(e.lines, no(n, "label", this, t)), Xn(e.after, qn(no(n, "afterLabel", this, t))), s.push(e)
                    })), s
                }
                getAfterBody(t, e) {
                    return eo(no(e.callbacks, "afterBody", this, t))
                }
                getFooter(t, e) {
                    const {
                        callbacks: i
                    } = e, s = no(i, "beforeFooter", this, t), n = no(i, "footer", this, t), o = no(i, "afterFooter", this, t);
                    let r = [];
                    return r = Xn(r, qn(s)), r = Xn(r, qn(n)), r = Xn(r, qn(o)), r
                }
                _createItems(t) {
                    const e = this._active,
                        i = this.chart.data,
                        s = [],
                        n = [],
                        o = [];
                    let r, a, h = [];
                    for (r = 0, a = e.length; r < a; ++r) h.push(Kn(this.chart, e[r]));
                    return t.filter && (h = h.filter(((e, s, n) => t.filter(e, s, n, i)))), t.itemSort && (h = h.sort(((e, s) => t.itemSort(e, s, i)))), U(h, (e => {
                        const i = io(t.callbacks, e);
                        s.push(no(i, "labelColor", this, e)), n.push(no(i, "labelPointStyle", this, e)), o.push(no(i, "labelTextColor", this, e))
                    })), this.labelColors = s, this.labelPointStyles = n, this.labelTextColors = o, this.dataPoints = h, h
                }
                update(t, e) {
                    const i = this.options.setContext(this.getContext()),
                        s = this._active;
                    let n, o = [];
                    if (s.length) {
                        const t = Un[i.position].call(this, s, this._eventPosition);
                        o = this._createItems(i), this.title = this.getTitle(o, i), this.beforeBody = this.getBeforeBody(o, i), this.body = this.getBody(o, i), this.afterBody = this.getAfterBody(o, i), this.footer = this.getFooter(o, i);
                        const e = this._size = Gn(this, i),
                            r = Object.assign({}, t, e),
                            a = Zn(this.chart, i, r),
                            h = Jn(i, r, a, this.chart);
                        this.xAlign = a.xAlign, this.yAlign = a.yAlign, n = {
                            opacity: 1,
                            x: h.x,
                            y: h.y,
                            width: e.width,
                            height: e.height,
                            caretX: t.x,
                            caretY: t.y
                        }
                    } else 0 !== this.opacity && (n = {
                        opacity: 0
                    });
                    this._tooltipItems = o, this.$context = void 0, n && this._resolveAnimations().update(this, n), t && i.external && i.external.call(this, {
                        chart: this.chart,
                        tooltip: this,
                        replay: e
                    })
                }
                drawCaret(t, e, i, s) {
                    const n = this.getCaretPosition(t, i, s);
                    e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3)
                }
                getCaretPosition(t, e, i) {
                    const {
                        xAlign: s,
                        yAlign: n
                    } = this, {
                        caretSize: o,
                        cornerRadius: r
                    } = i, {
                        topLeft: a,
                        topRight: h,
                        bottomLeft: l,
                        bottomRight: c
                    } = De(r), {
                        x: d,
                        y: u
                    } = t, {
                        width: f,
                        height: g
                    } = e;
                    let p, m, b, x, _, y;
                    return "center" === n ? (_ = u + g / 2, "left" === s ? (p = d, m = p - o, x = _ + o, y = _ - o) : (p = d + f, m = p + o, x = _ - o, y = _ + o), b = p) : (m = "left" === s ? d + Math.max(a, l) + o : "right" === s ? d + f - Math.max(h, c) - o : this.caretX, "top" === n ? (x = u, _ = x - o, p = m - o, b = m + o) : (x = u + g, _ = x + o, p = m + o, b = m - o), y = x), {
                        x1: p,
                        x2: m,
                        x3: b,
                        y1: x,
                        y2: _,
                        y3: y
                    }
                }
                drawTitle(t, e, i) {
                    const s = this.title,
                        n = s.length;
                    let o, r, a;
                    if (n) {
                        const h = gi(i.rtl, this.x, this.width);
                        for (t.x = to(this, i.titleAlign, i), e.textAlign = h.textAlign(i.titleAlign), e.textBaseline = "middle", o = Te(i.titleFont), r = i.titleSpacing, e.fillStyle = i.titleColor, e.font = o.string, a = 0; a < n; ++a) e.fillText(s[a], h.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + r, a + 1 === n && (t.y += i.titleMarginBottom - r)
                    }
                }
                _drawColorBox(t, e, i, s, n) {
                    const o = this.labelColors[i],
                        r = this.labelPointStyles[i],
                        {
                            boxHeight: a,
                            boxWidth: h
                        } = n,
                        l = Te(n.bodyFont),
                        c = to(this, "left", n),
                        d = s.x(c),
                        u = a < l.lineHeight ? (l.lineHeight - a) / 2 : 0,
                        f = e.y + u;
                    if (n.usePointStyle) {
                        const e = {
                                radius: Math.min(h, a) / 2,
                                pointStyle: r.pointStyle,
                                rotation: r.rotation,
                                borderWidth: 1
                            },
                            i = s.leftForLtr(d, h) + h / 2,
                            l = f + a / 2;
                        t.strokeStyle = n.multiKeyBackground, t.fillStyle = n.multiKeyBackground, ce(t, e, i, l), t.strokeStyle = o.borderColor, t.fillStyle = o.backgroundColor, ce(t, e, i, l)
                    } else {
                        t.lineWidth = j(o.borderWidth) ? Math.max(...Object.values(o.borderWidth)) : o.borderWidth || 1, t.strokeStyle = o.borderColor, t.setLineDash(o.borderDash || []), t.lineDashOffset = o.borderDashOffset || 0;
                        const e = s.leftForLtr(d, h),
                            i = s.leftForLtr(s.xPlus(d, 1), h - 2),
                            r = De(o.borderRadius);
                        Object.values(r).some((t => 0 !== t)) ? (t.beginPath(), t.fillStyle = n.multiKeyBackground, ye(t, {
                            x: e,
                            y: f,
                            w: h,
                            h: a,
                            radius: r
                        }), t.fill(), t.stroke(), t.fillStyle = o.backgroundColor, t.beginPath(), ye(t, {
                            x: i,
                            y: f + 1,
                            w: h - 2,
                            h: a - 2,
                            radius: r
                        }), t.fill()) : (t.fillStyle = n.multiKeyBackground, t.fillRect(e, f, h, a), t.strokeRect(e, f, h, a), t.fillStyle = o.backgroundColor, t.fillRect(i, f + 1, h - 2, a - 2))
                    }
                    t.fillStyle = this.labelTextColors[i]
                }
                drawBody(t, e, i) {
                    const {
                        body: s
                    } = this, {
                        bodySpacing: n,
                        bodyAlign: o,
                        displayColors: r,
                        boxHeight: a,
                        boxWidth: h,
                        boxPadding: l
                    } = i, c = Te(i.bodyFont);
                    let d = c.lineHeight,
                        u = 0;
                    const f = gi(i.rtl, this.x, this.width),
                        g = function(i) {
                            e.fillText(i, f.x(t.x + u), t.y + d / 2), t.y += d + n
                        },
                        p = f.textAlign(o);
                    let m, b, x, _, y, v, w;
                    for (e.textAlign = o, e.textBaseline = "middle", e.font = c.string, t.x = to(this, p, i), e.fillStyle = i.bodyColor, U(this.beforeBody, g), u = r && "right" !== p ? "center" === o ? h / 2 + l : h + 2 + l : 0, _ = 0, v = s.length; _ < v; ++_) {
                        for (m = s[_], b = this.labelTextColors[_], e.fillStyle = b, U(m.before, g), x = m.lines, r && x.length && (this._drawColorBox(e, t, _, f, i), d = Math.max(c.lineHeight, a)), y = 0, w = x.length; y < w; ++y) g(x[y]), d = c.lineHeight;
                        U(m.after, g)
                    }
                    u = 0, d = c.lineHeight, U(this.afterBody, g), t.y -= n
                }
                drawFooter(t, e, i) {
                    const s = this.footer,
                        n = s.length;
                    let o, r;
                    if (n) {
                        const a = gi(i.rtl, this.x, this.width);
                        for (t.x = to(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = a.textAlign(i.footerAlign), e.textBaseline = "middle", o = Te(i.footerFont), e.fillStyle = i.footerColor, e.font = o.string, r = 0; r < n; ++r) e.fillText(s[r], a.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + i.footerSpacing
                    }
                }
                drawBackground(t, e, i, s) {
                    const {
                        xAlign: n,
                        yAlign: o
                    } = this, {
                        x: r,
                        y: a
                    } = t, {
                        width: h,
                        height: l
                    } = i, {
                        topLeft: c,
                        topRight: d,
                        bottomLeft: u,
                        bottomRight: f
                    } = De(s.cornerRadius);
                    e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(r + c, a), "top" === o && this.drawCaret(t, e, i, s), e.lineTo(r + h - d, a), e.quadraticCurveTo(r + h, a, r + h, a + d), "center" === o && "right" === n && this.drawCaret(t, e, i, s), e.lineTo(r + h, a + l - f), e.quadraticCurveTo(r + h, a + l, r + h - f, a + l), "bottom" === o && this.drawCaret(t, e, i, s), e.lineTo(r + u, a + l), e.quadraticCurveTo(r, a + l, r, a + l - u), "center" === o && "left" === n && this.drawCaret(t, e, i, s), e.lineTo(r, a + c), e.quadraticCurveTo(r, a, r + c, a), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke()
                }
                _updateAnimationTarget(t) {
                    const e = this.chart,
                        i = this.$animations,
                        s = i && i.x,
                        n = i && i.y;
                    if (s || n) {
                        const i = Un[t.position].call(this, this._active, this._eventPosition);
                        if (!i) return;
                        const o = this._size = Gn(this, t),
                            r = Object.assign({}, i, this._size),
                            a = Zn(e, t, r),
                            h = Jn(t, r, a, e);
                        s._to === h.x && n._to === h.y || (this.xAlign = a.xAlign, this.yAlign = a.yAlign, this.width = o.width, this.height = o.height, this.caretX = i.x, this.caretY = i.y, this._resolveAnimations().update(this, h))
                    }
                }
                _willRender() {
                    return !!this.opacity
                }
                draw(t) {
                    const e = this.options.setContext(this.getContext());
                    let i = this.opacity;
                    if (!i) return;
                    this._updateAnimationTarget(e);
                    const s = {
                            width: this.width,
                            height: this.height
                        },
                        n = {
                            x: this.x,
                            y: this.y
                        };
                    i = Math.abs(i) < .001 ? 0 : i;
                    const o = Pe(e.padding),
                        r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
                    e.enabled && r && (t.save(), t.globalAlpha = i, this.drawBackground(n, t, s, e), pi(t, e.textDirection), n.y += o.top, this.drawTitle(n, t, e), this.drawBody(n, t, e), this.drawFooter(n, t, e), mi(t, e.textDirection), t.restore())
                }
                getActiveElements() {
                    return this._active || []
                }
                setActiveElements(t, e) {
                    const i = this._active,
                        s = t.map((({
                            datasetIndex: t,
                            index: e
                        }) => {
                            const i = this.chart.getDatasetMeta(t);
                            if (!i) throw new Error("Cannot find a dataset at index " + t);
                            return {
                                datasetIndex: t,
                                element: i.data[e],
                                index: e
                            }
                        })),
                        n = !X(i, s),
                        o = this._positionChanged(s, e);
                    (n || o) && (this._active = s, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0))
                }
                handleEvent(t, e, i = !0) {
                    if (e && this._ignoreReplayEvents) return !1;
                    this._ignoreReplayEvents = !1;
                    const s = this.options,
                        n = this._active || [],
                        o = this._getActiveElements(t, n, e, i),
                        r = this._positionChanged(o, t),
                        a = e || !X(o, n) || r;
                    return a && (this._active = o, (s.enabled || s.external) && (this._eventPosition = {
                        x: t.x,
                        y: t.y
                    }, this.update(!0, e))), a
                }
                _getActiveElements(t, e, i, s) {
                    const n = this.options;
                    if ("mouseout" === t.type) return [];
                    if (!s) return e;
                    const o = this.chart.getElementsAtEventForMode(t, n.mode, n, i);
                    return n.reverse && o.reverse(), o
                }
                _positionChanged(t, e) {
                    const {
                        caretX: i,
                        caretY: s,
                        options: n
                    } = this, o = Un[n.position].call(this, t, e);
                    return !1 !== o && (i !== o.x || s !== o.y)
                }
            }
            var ro = {
                id: "tooltip",
                _element: oo,
                positioners: Un,
                afterInit(t, e, i) {
                    i && (t.tooltip = new oo({
                        chart: t,
                        options: i
                    }))
                },
                beforeUpdate(t, e, i) {
                    t.tooltip && t.tooltip.initialize(i)
                },
                reset(t, e, i) {
                    t.tooltip && t.tooltip.initialize(i)
                },
                afterDraw(t) {
                    const e = t.tooltip;
                    if (e && e._willRender()) {
                        const i = {
                            tooltip: e
                        };
                        if (!1 === t.notifyPlugins("beforeTooltipDraw", {
                                ...i,
                                cancelable: !0
                            })) return;
                        e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i)
                    }
                },
                afterEvent(t, e) {
                    if (t.tooltip) {
                        const i = e.replay;
                        t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0)
                    }
                },
                defaults: {
                    enabled: !0,
                    external: null,
                    position: "average",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleColor: "#fff",
                    titleFont: {
                        weight: "bold"
                    },
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleAlign: "left",
                    bodyColor: "#fff",
                    bodySpacing: 2,
                    bodyFont: {},
                    bodyAlign: "left",
                    footerColor: "#fff",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFont: {
                        weight: "bold"
                    },
                    footerAlign: "left",
                    padding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    boxHeight: (t, e) => e.bodyFont.size,
                    boxWidth: (t, e) => e.bodyFont.size,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    boxPadding: 0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    animation: {
                        duration: 400,
                        easing: "easeOutQuart"
                    },
                    animations: {
                        numbers: {
                            type: "number",
                            properties: ["x", "y", "width", "height", "caretX", "caretY"]
                        },
                        opacity: {
                            easing: "linear",
                            duration: 200
                        }
                    },
                    callbacks: so
                },
                defaultRoutes: {
                    bodyFont: "font",
                    footerFont: "font",
                    titleFont: "font"
                },
                descriptors: {
                    _scriptable: t => "filter" !== t && "itemSort" !== t && "external" !== t,
                    _indexable: !1,
                    callbacks: {
                        _scriptable: !1,
                        _indexable: !1
                    },
                    animation: {
                        _fallback: !1
                    },
                    animations: {
                        _fallback: "animation"
                    }
                },
                additionalOptionScopes: ["interaction"]
            };

            function ao(t, e, i, s) {
                const n = t.indexOf(e);
                if (-1 === n) return ((t, e, i, s) => ("string" == typeof e ? (i = t.push(e) - 1, s.unshift({
                    index: i,
                    label: e
                })) : isNaN(e) && (i = null), i))(t, e, i, s);
                return n !== t.lastIndexOf(e) ? i : n
            }

            function ho(t) {
                const e = this.getLabels();
                return t >= 0 && t < e.length ? e[t] : t
            }
            class lo extends Vs {
                static id = "category";
                static defaults = {
                    ticks: {
                        callback: ho
                    }
                };
                constructor(t) {
                    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = []
                }
                init(t) {
                    const e = this._addedLabels;
                    if (e.length) {
                        const t = this.getLabels();
                        for (const {
                                index: i,
                                label: s
                            }
                            of e) t[i] === s && t.splice(i, 1);
                        this._addedLabels = []
                    }
                    super.init(t)
                }
                parse(t, e) {
                    if (B(t)) return null;
                    const i = this.getLabels();
                    return ((t, e) => null === t ? null : Pt(Math.round(t), 0, e))(e = isFinite(e) && i[e] === t ? e : ao(i, t, W(e, t), this._addedLabels), i.length - 1)
                }
                determineDataLimits() {
                    const {
                        minDefined: t,
                        maxDefined: e
                    } = this.getUserBounds();
                    let {
                        min: i,
                        max: s
                    } = this.getMinMax(!0);
                    "ticks" === this.options.bounds && (t || (i = 0), e || (s = this.getLabels().length - 1)), this.min = i, this.max = s
                }
                buildTicks() {
                    const t = this.min,
                        e = this.max,
                        i = this.options.offset,
                        s = [];
                    let n = this.getLabels();
                    n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1), this._valueRange = Math.max(n.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? .5 : 0);
                    for (let i = t; i <= e; i++) s.push({
                        value: i
                    });
                    return s
                }
                getLabelForValue(t) {
                    return ho.call(this, t)
                }
                configure() {
                    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels)
                }
                getPixelForValue(t) {
                    return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
                }
                getPixelForTick(t) {
                    const e = this.ticks;
                    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
                }
                getValueForPixel(t) {
                    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
                }
                getBasePixel() {
                    return this.bottom
                }
            }

            function co(t, e) {
                const i = [],
                    {
                        bounds: s,
                        step: n,
                        min: o,
                        max: r,
                        precision: a,
                        count: h,
                        maxTicks: l,
                        maxDigits: c,
                        includeBounds: d
                    } = t,
                    u = n || 1,
                    f = l - 1,
                    {
                        min: g,
                        max: p
                    } = e,
                    m = !B(o),
                    b = !B(r),
                    x = !B(h),
                    _ = (p - g) / (c + 1);
                let y, v, w, k, M = bt((p - g) / f / u) * u;
                if (M < 1e-14 && !m && !b) return [{
                    value: g
                }, {
                    value: p
                }];
                k = Math.ceil(p / M) - Math.floor(g / M), k > f && (M = bt(k * M / f / u) * u), B(a) || (y = Math.pow(10, a), M = Math.ceil(M * y) / y), "ticks" === s ? (v = Math.floor(g / M) * M, w = Math.ceil(p / M) * M) : (v = g, w = p), m && b && n && function(t, e) {
                    const i = Math.round(t);
                    return i - e <= t && i + e >= t
                }((r - o) / n, M / 1e3) ? (k = Math.round(Math.min((r - o) / M, l)), M = (r - o) / k, v = o, w = r) : x ? (v = m ? o : v, w = b ? r : w, k = h - 1, M = (w - v) / k) : (k = (w - v) / M, k = mt(k, Math.round(k), M / 1e3) ? Math.round(k) : Math.ceil(k));
                const S = Math.max(wt(M), wt(v));
                y = Math.pow(10, B(a) ? S : a), v = Math.round(v * y) / y, w = Math.round(w * y) / y;
                let O = 0;
                for (m && (d && v !== o ? (i.push({
                        value: o
                    }), v < o && O++, mt(Math.round((v + O * M) * y) / y, o, uo(o, _, t)) && O++) : v < o && O++); O < k; ++O) {
                    const t = Math.round((v + O * M) * y) / y;
                    if (b && t > r) break;
                    i.push({
                        value: t
                    })
                }
                return b && d && w !== r ? i.length && mt(i[i.length - 1].value, r, uo(r, _, t)) ? i[i.length - 1].value = r : i.push({
                    value: r
                }) : b && w !== r || i.push({
                    value: w
                }), i
            }

            function uo(t, e, {
                horizontal: i,
                minRotation: s
            }) {
                const n = yt(s),
                    o = (i ? Math.sin(n) : Math.cos(n)) || .001,
                    r = .75 * e * ("" + t).length;
                return Math.min(e / o, r)
            }
            class fo extends Vs {
                constructor(t) {
                    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0
                }
                parse(t, e) {
                    return B(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t
                }
                handleTickRangeOptions() {
                    const {
                        beginAtZero: t
                    } = this.options, {
                        minDefined: e,
                        maxDefined: i
                    } = this.getUserBounds();
                    let {
                        min: s,
                        max: n
                    } = this;
                    const o = t => s = e ? s : t,
                        r = t => n = i ? n : t;
                    if (t) {
                        const t = pt(s),
                            e = pt(n);
                        t < 0 && e < 0 ? r(0) : t > 0 && e > 0 && o(0)
                    }
                    if (s === n) {
                        let e = 0 === n ? 1 : Math.abs(.05 * n);
                        r(n + e), t || o(s - e)
                    }
                    this.min = s, this.max = n
                }
                getTickLimit() {
                    const t = this.options.ticks;
                    let e, {
                        maxTicksLimit: i,
                        stepSize: s
                    } = t;
                    return s ? (e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, e > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`), e = 1e3)) : (e = this.computeTickLimit(), i = i || 11), i && (e = Math.min(i, e)), e
                }
                computeTickLimit() {
                    return Number.POSITIVE_INFINITY
                }
                buildTicks() {
                    const t = this.options,
                        e = t.ticks;
                    let i = this.getTickLimit();
                    i = Math.max(2, i);
                    const s = co({
                        maxTicks: i,
                        bounds: t.bounds,
                        min: t.min,
                        max: t.max,
                        precision: e.precision,
                        step: e.stepSize,
                        count: e.count,
                        maxDigits: this._maxDigits(),
                        horizontal: this.isHorizontal(),
                        minRotation: e.minRotation || 0,
                        includeBounds: !1 !== e.includeBounds
                    }, this._range || this);
                    return "ticks" === t.bounds && _t(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s
                }
                configure() {
                    const t = this.ticks;
                    let e = this.min,
                        i = this.max;
                    if (super.configure(), this.options.offset && t.length) {
                        const s = (i - e) / Math.max(t.length - 1, 1) / 2;
                        e -= s, i += s
                    }
                    this._startValue = e, this._endValue = i, this._valueRange = i - e
                }
                getLabelForValue(t) {
                    return Zt(t, this.chart.options.locale, this.options.ticks.format)
                }
            }
            class go extends fo {
                static id = "linear";
                static defaults = {
                    ticks: {
                        callback: te.formatters.numeric
                    }
                };
                determineDataLimits() {
                    const {
                        min: t,
                        max: e
                    } = this.getMinMax(!0);
                    this.min = N(t) ? t : 0, this.max = N(e) ? e : 1, this.handleTickRangeOptions()
                }
                computeTickLimit() {
                    const t = this.isHorizontal(),
                        e = t ? this.width : this.height,
                        i = yt(this.options.ticks.minRotation),
                        s = (t ? Math.sin(i) : Math.cos(i)) || .001,
                        n = this._resolveTickFontOptions(0);
                    return Math.ceil(e / Math.min(40, n.lineHeight / s))
                }
                getPixelForValue(t) {
                    return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
                }
                getValueForPixel(t) {
                    return this._startValue + this.getDecimalForPixel(t) * this._valueRange
                }
            }
            te.formatters.logarithmic;
            te.formatters.numeric;
            const po = {
                    millisecond: {
                        common: !0,
                        size: 1,
                        steps: 1e3
                    },
                    second: {
                        common: !0,
                        size: 1e3,
                        steps: 60
                    },
                    minute: {
                        common: !0,
                        size: 6e4,
                        steps: 60
                    },
                    hour: {
                        common: !0,
                        size: 36e5,
                        steps: 24
                    },
                    day: {
                        common: !0,
                        size: 864e5,
                        steps: 30
                    },
                    week: {
                        common: !1,
                        size: 6048e5,
                        steps: 4
                    },
                    month: {
                        common: !0,
                        size: 2628e6,
                        steps: 12
                    },
                    quarter: {
                        common: !1,
                        size: 7884e6,
                        steps: 4
                    },
                    year: {
                        common: !0,
                        size: 3154e7
                    }
                },
                mo = Object.keys(po);

            function bo(t, e) {
                return t - e
            }

            function xo(t, e) {
                if (B(e)) return null;
                const i = t._adapter,
                    {
                        parser: s,
                        round: n,
                        isoWeekday: o
                    } = t._parseOpts;
                let r = e;
                return "function" == typeof s && (r = s(r)), N(r) || (r = "string" == typeof s ? i.parse(r, s) : i.parse(r)), null === r ? null : (n && (r = "week" !== n || !xt(o) && !0 !== o ? i.startOf(r, n) : i.startOf(r, "isoWeek", o)), +r)
            }

            function _o(t, e, i, s) {
                const n = mo.length;
                for (let o = mo.indexOf(t); o < n - 1; ++o) {
                    const t = po[mo[o]],
                        n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
                    if (t.common && Math.ceil((i - e) / (n * t.size)) <= s) return mo[o]
                }
                return mo[n - 1]
            }

            function yo(t, e, i) {
                if (i) {
                    if (i.length) {
                        const {
                            lo: s,
                            hi: n
                        } = Ct(i, e);
                        t[i[s] >= e ? i[s] : i[n]] = !0
                    }
                } else t[e] = !0
            }

            function vo(t, e, i) {
                const s = [],
                    n = {},
                    o = e.length;
                let r, a;
                for (r = 0; r < o; ++r) a = e[r], n[a] = r, s.push({
                    value: a,
                    major: !1
                });
                return 0 !== o && i ? function(t, e, i, s) {
                    const n = t._adapter,
                        o = +n.startOf(e[0].value, s),
                        r = e[e.length - 1].value;
                    let a, h;
                    for (a = o; a <= r; a = +n.add(a, 1, s)) h = i[a], h >= 0 && (e[h].major = !0);
                    return e
                }(t, s, n, i) : s
            }
            class wo extends Vs {
                static id = "time";
                static defaults = {
                    bounds: "data",
                    adapters: {},
                    time: {
                        parser: !1,
                        unit: !1,
                        round: !1,
                        isoWeekday: !1,
                        minUnit: "millisecond",
                        displayFormats: {}
                    },
                    ticks: {
                        source: "auto",
                        callback: !1,
                        major: {
                            enabled: !1
                        }
                    }
                };
                constructor(t) {
                    super(t), this._cache = {
                        data: [],
                        labels: [],
                        all: []
                    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0
                }
                init(t, e = {}) {
                    const i = t.time || (t.time = {}),
                        s = this._adapter = new Yi._date(t.adapters.date);
                    s.init(e), Z(i.displayFormats, s.formats()), this._parseOpts = {
                        parser: i.parser,
                        round: i.round,
                        isoWeekday: i.isoWeekday
                    }, super.init(t), this._normalized = e.normalized
                }
                parse(t, e) {
                    return void 0 === t ? null : xo(this, t)
                }
                beforeLayout() {
                    super.beforeLayout(), this._cache = {
                        data: [],
                        labels: [],
                        all: []
                    }
                }
                determineDataLimits() {
                    const t = this.options,
                        e = this._adapter,
                        i = t.time.unit || "day";
                    let {
                        min: s,
                        max: n,
                        minDefined: o,
                        maxDefined: r
                    } = this.getUserBounds();

                    function a(t) {
                        o || isNaN(t.min) || (s = Math.min(s, t.min)), r || isNaN(t.max) || (n = Math.max(n, t.max))
                    }
                    o && r || (a(this._getLabelBounds()), "ticks" === t.bounds && "labels" === t.ticks.source || a(this.getMinMax(!1))), s = N(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i), n = N(n) && !isNaN(n) ? n : +e.endOf(Date.now(), i) + 1, this.min = Math.min(s, n - 1), this.max = Math.max(s + 1, n)
                }
                _getLabelBounds() {
                    const t = this.getLabelTimestamps();
                    let e = Number.POSITIVE_INFINITY,
                        i = Number.NEGATIVE_INFINITY;
                    return t.length && (e = t[0], i = t[t.length - 1]), {
                        min: e,
                        max: i
                    }
                }
                buildTicks() {
                    const t = this.options,
                        e = t.time,
                        i = t.ticks,
                        s = "labels" === i.source ? this.getLabelTimestamps() : this._generate();
                    "ticks" === t.bounds && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]);
                    const n = this.min,
                        o = function(t, e, i) {
                            let s = 0,
                                n = t.length;
                            for (; s < n && t[s] < e;) s++;
                            for (; n > s && t[n - 1] > i;) n--;
                            return s > 0 || n < t.length ? t.slice(s, n) : t
                        }(s, n, this.max);
                    return this._unit = e.unit || (i.autoSkip ? _o(e.minUnit, this.min, this.max, this._getLabelCapacity(n)) : function(t, e, i, s, n) {
                        for (let o = mo.length - 1; o >= mo.indexOf(i); o--) {
                            const i = mo[o];
                            if (po[i].common && t._adapter.diff(n, s, i) >= e - 1) return i
                        }
                        return mo[i ? mo.indexOf(i) : 0]
                    }(this, o.length, e.minUnit, this.min, this.max)), this._majorUnit = i.major.enabled && "year" !== this._unit ? function(t) {
                        for (let e = mo.indexOf(t) + 1, i = mo.length; e < i; ++e)
                            if (po[mo[e]].common) return mo[e]
                    }(this._unit) : void 0, this.initOffsets(s), t.reverse && o.reverse(), vo(this, o, this._majorUnit)
                }
                afterAutoSkip() {
                    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t => +t.value)))
                }
                initOffsets(t = []) {
                    let e, i, s = 0,
                        n = 0;
                    this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), s = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, i = this.getDecimalForValue(t[t.length - 1]), n = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2);
                    const o = t.length < 3 ? .5 : .25;
                    s = Pt(s, 0, o), n = Pt(n, 0, o), this._offsets = {
                        start: s,
                        end: n,
                        factor: 1 / (s + 1 + n)
                    }
                }
                _generate() {
                    const t = this._adapter,
                        e = this.min,
                        i = this.max,
                        s = this.options,
                        n = s.time,
                        o = n.unit || _o(n.minUnit, e, i, this._getLabelCapacity(e)),
                        r = W(s.ticks.stepSize, 1),
                        a = "week" === o && n.isoWeekday,
                        h = xt(a) || !0 === a,
                        l = {};
                    let c, d, u = e;
                    if (h && (u = +t.startOf(u, "isoWeek", a)), u = +t.startOf(u, h ? "day" : o), t.diff(i, e, o) > 1e5 * r) throw new Error(e + " and " + i + " are too far apart with stepSize of " + r + " " + o);
                    const f = "data" === s.ticks.source && this.getDataTimestamps();
                    for (c = u, d = 0; c < i; c = +t.add(c, r, o), d++) yo(l, c, f);
                    return c !== i && "ticks" !== s.bounds && 1 !== d || yo(l, c, f), Object.keys(l).sort(bo).map((t => +t))
                }
                getLabelForValue(t) {
                    const e = this._adapter,
                        i = this.options.time;
                    return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime)
                }
                format(t, e) {
                    const i = this.options.time.displayFormats,
                        s = this._unit,
                        n = e || i[s];
                    return this._adapter.format(t, n)
                }
                _tickFormatFunction(t, e, i, s) {
                    const n = this.options,
                        o = n.ticks.callback;
                    if (o) return Y(o, [t, e, i], this);
                    const r = n.time.displayFormats,
                        a = this._unit,
                        h = this._majorUnit,
                        l = a && r[a],
                        c = h && r[h],
                        d = i[e],
                        u = h && c && d && d.major;
                    return this._adapter.format(t, s || (u ? c : l))
                }
                generateTickLabels(t) {
                    let e, i, s;
                    for (e = 0, i = t.length; e < i; ++e) s = t[e], s.label = this._tickFormatFunction(s.value, e, t)
                }
                getDecimalForValue(t) {
                    return null === t ? NaN : (t - this.min) / (this.max - this.min)
                }
                getPixelForValue(t) {
                    const e = this._offsets,
                        i = this.getDecimalForValue(t);
                    return this.getPixelForDecimal((e.start + i) * e.factor)
                }
                getValueForPixel(t) {
                    const e = this._offsets,
                        i = this.getDecimalForPixel(t) / e.factor - e.end;
                    return this.min + i * (this.max - this.min)
                }
                _getLabelSize(t) {
                    const e = this.options.ticks,
                        i = this.ctx.measureText(t).width,
                        s = yt(this.isHorizontal() ? e.maxRotation : e.minRotation),
                        n = Math.cos(s),
                        o = Math.sin(s),
                        r = this._resolveTickFontOptions(0).size;
                    return {
                        w: i * n + r * o,
                        h: i * o + r * n
                    }
                }
                _getLabelCapacity(t) {
                    const e = this.options.time,
                        i = e.displayFormats,
                        s = i[e.unit] || i.millisecond,
                        n = this._tickFormatFunction(t, 0, vo(this, [t], this._majorUnit), s),
                        o = this._getLabelSize(n),
                        r = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
                    return r > 0 ? r : 1
                }
                getDataTimestamps() {
                    let t, e, i = this._cache.data || [];
                    if (i.length) return i;
                    const s = this.getMatchingVisibleMetas();
                    if (this._normalized && s.length) return this._cache.data = s[0].controller.getAllParsedValues(this);
                    for (t = 0, e = s.length; t < e; ++t) i = i.concat(s[t].controller.getAllParsedValues(this));
                    return this._cache.data = this.normalize(i)
                }
                getLabelTimestamps() {
                    const t = this._cache.labels || [];
                    let e, i;
                    if (t.length) return t;
                    const s = this.getLabels();
                    for (e = 0, i = s.length; e < i; ++e) t.push(xo(this, s[e]));
                    return this._cache.labels = this._normalized ? t : this.normalize(t)
                }
                normalize(t) {
                    return zt(t.sort(bo))
                }
            }
        },
        26495: (t, e, i) => {
            "use strict";
            i.d(e, {
                x1: () => f
            });
            var s = i(67294),
                n = i(529);
            const o = "label";

            function r(t, e) {
                "function" == typeof t ? t(e) : t && (t.current = e)
            }

            function a(t, e) {
                t.labels = e
            }

            function h(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o;
                const s = [];
                t.datasets = e.map((e => {
                    const n = t.datasets.find((t => t[i] === e[i]));
                    return n && e.data && !s.includes(n) ? (s.push(n), Object.assign(n, e), n) : {
                        ...e
                    }
                }))
            }

            function l(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
                const i = {
                    labels: [],
                    datasets: []
                };
                return a(i, t.labels), h(i, t.datasets, e), i
            }

            function c(t, e) {
                const {
                    height: i = 150,
                    width: o = 300,
                    redraw: c = !1,
                    datasetIdKey: d,
                    type: u,
                    data: f,
                    options: g,
                    plugins: p = [],
                    fallbackContent: m,
                    updateMode: b,
                    ...x
                } = t, _ = (0, s.useRef)(null), y = (0, s.useRef)(), v = () => {
                    _.current && (y.current = new n.kL(_.current, {
                        type: u,
                        data: l(f, d),
                        options: g && {
                            ...g
                        },
                        plugins: p
                    }), r(e, y.current))
                }, w = () => {
                    r(e, null), y.current && (y.current.destroy(), y.current = null)
                };
                return (0, s.useEffect)((() => {
                    !c && y.current && g && function(t, e) {
                        const i = t.options;
                        i && e && Object.assign(i, e)
                    }(y.current, g)
                }), [c, g]), (0, s.useEffect)((() => {
                    !c && y.current && a(y.current.config.data, f.labels)
                }), [c, f.labels]), (0, s.useEffect)((() => {
                    !c && y.current && f.datasets && h(y.current.config.data, f.datasets, d)
                }), [c, f.datasets]), (0, s.useEffect)((() => {
                    y.current && (c ? (w(), setTimeout(v)) : y.current.update(b))
                }), [c, g, f.labels, f.datasets, b]), (0, s.useEffect)((() => {
                    y.current && (w(), setTimeout(v))
                }), [u]), (0, s.useEffect)((() => (v(), () => w())), []), s.createElement("canvas", Object.assign({
                    ref: _,
                    role: "img",
                    height: i,
                    width: o
                }, x), m)
            }
            const d = (0, s.forwardRef)(c);

            function u(t, e) {
                return n.kL.register(e), (0, s.forwardRef)(((e, i) => s.createElement(d, Object.assign({}, e, {
                    ref: i,
                    type: t
                }))))
            }
            const f = u("line", n.ST)
        }
    }
]);
//# sourceMappingURL=6e4583ec5839d9f2c8209439ad5e3c4e78d70b4c2cc28e91c0f794b403453dc6.js.map