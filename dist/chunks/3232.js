"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3232], {
        13232: (e, t, r) => {
            r.r(t), r.d(t, {
                evaluateTargeting: () => le
            });
            var n = r(97582),
                o = function(e, t) {
                    return o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }, o(e, t)
                };
            var a = function() {
                return a = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, a.apply(this, arguments)
            };

            function i(e, t, r, n) {
                return new(r || (r = Promise))((function(o, a) {
                    function i(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(i, s)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            }

            function s(e, t) {
                var r, n, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function s(s) {
                    return function(c) {
                        return function(s) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a && (a = 0, s[0] && (i = 0)), i;) try {
                                if (r = 1, n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done) return o;
                                switch (n = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        o = s;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, n = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                            i.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && i.label < o[1]) {
                                            i.label = o[1], o = s;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2], i.ops.push(s);
                                            break
                                        }
                                        o[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                s = t.call(e, i)
                            } catch (e) {
                                s = [6, e], n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, c])
                    }
                }
            }

            function c(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function u(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, o, a = r.call(e),
                    i = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = a.next()).done;) i.push(n.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = a.return) && r.call(a)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return i
            }

            function l(e, t, r) {
                if (r || 2 === arguments.length)
                    for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
                return e.concat(n || Array.prototype.slice.call(t))
            }
            "function" == typeof SuppressedError && SuppressedError;
            var f = "is",
                h = "is not",
                p = "contains",
                v = "does not contain",
                y = "less",
                d = "less or equal",
                m = "greater",
                g = "greater or equal",
                b = "version less",
                w = "version less or equal",
                S = "version greater",
                x = "version greater or equal",
                C = "set is",
                A = "set is not",
                T = "set contains",
                E = "set does not contain",
                k = "set contains any",
                O = "set does not contain any",
                F = "regex match",
                N = "regex does not match",
                I = -862048943,
                j = 461845907,
                _ = function(e, t) {
                    void 0 === t && (t = 0);
                    for (var r = function(e) {
                            for (var t = [], r = 0, n = 0; n < e.length; n++) {
                                var o = e.charCodeAt(n);
                                o < 128 ? t[r++] = o : o < 2048 ? (t[r++] = o >> 6 | 192, t[r++] = 63 & o | 128) : 55296 == (64512 & o) && n + 1 < e.length && 56320 == (64512 & e.charCodeAt(n + 1)) ? (o = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++n)), t[r++] = o >> 18 | 240, t[r++] = o >> 12 & 63 | 128, t[r++] = o >> 6 & 63 | 128, t[r++] = 63 & o | 128) : (t[r++] = o >> 12 | 224, t[r++] = o >> 6 & 63 | 128, t[r++] = 63 & o | 128)
                            }
                            return Uint8Array.from(t)
                        }(e), n = r.length, o = n >> 2, a = t, i = 0; i < o; i++) {
                        var s = B(r, i << 2);
                        a = M(s, a)
                    }
                    var c = o << 2,
                        u = 0;
                    switch (n - c) {
                        case 3:
                            u ^= r[c + 2] << 16, u ^= r[c + 1] << 8, u ^= r[c], u = Math.imul(u, I), u = P(u, 15), a ^= u = Math.imul(u, j);
                            break;
                        case 2:
                            u ^= r[c + 1] << 8, u ^= r[c], u = Math.imul(u, I), u = P(u, 15), a ^= u = Math.imul(u, j);
                            break;
                        case 1:
                            u ^= r[c], u = Math.imul(u, I), u = P(u, 15), a ^= u = Math.imul(u, j)
                    }
                    return R(a ^= n) >>> 0
                },
                M = function(e, t) {
                    var r = e,
                        n = t;
                    return r = Math.imul(r, I), r = P(r, 15), r = Math.imul(r, j), n = P(n ^= r, 13), (n = Math.imul(n, 5)) + -430675100 | 0
                },
                R = function(e) {
                    var t = e;
                    return t ^= t >>> 16, t = Math.imul(t, -2048144789), t ^= t >>> 13, t = Math.imul(t, -1028477387), t ^= t >>> 16
                },
                P = function(e, t, r) {
                    return void 0 === r && (r = 32), t > r && (t %= r), (e << t | (e & 4294967295 << r - t >>> 0) >>> 0 >>> r - t >>> 0) >>> 0
                },
                B = function(e, t) {
                    void 0 === t && (t = 0);
                    var r = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
                    return J(r)
                },
                J = function(e) {
                    return (-16777216 & e) >>> 24 | (16711680 & e) >>> 8 | (65280 & e) << 8 | (255 & e) << 24
                },
                K = function(e, t) {
                    var r, n;
                    if (t && 0 !== t.length) {
                        try {
                            for (var o = c(t), a = o.next(); !a.done; a = o.next()) {
                                var i = a.value;
                                if (!i || !e || "object" != typeof e) return;
                                e = e[i]
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (n = o.return) && n.call(o)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return e || void 0
                    }
                },
                q = "^".concat("(\\d+)\\.(\\d+)", "(\\.").concat("(\\d+)").concat("(-(([-\\w]+\\.?)*))?", ")?$"),
                U = function() {
                    function e(e, t, r, n) {
                        void 0 === n && (n = void 0), this.major = e, this.minor = t, this.patch = r, this.preRelease = n
                    }
                    return e.parse = function(t) {
                        if (t) {
                            var r = new RegExp(q).exec(t);
                            if (r) {
                                var n = Number(r[1]),
                                    o = Number(r[2]);
                                if (!isNaN(n) && !isNaN(o)) return new e(n, o, Number(r[4]) || 0, r[5] || void 0)
                            }
                        }
                    }, e.prototype.compareTo = function(e) {
                        return this.major > e.major ? 1 : this.major < e.major ? -1 : this.minor > e.minor ? 1 : this.minor < e.minor ? -1 : this.patch > e.patch ? 1 : this.patch < e.patch || this.preRelease && !e.preRelease ? -1 : !this.preRelease && e.preRelease ? 1 : this.preRelease && e.preRelease ? this.preRelease > e.preRelease ? 1 : this.preRelease < e.preRelease ? -1 : 0 : 0
                    }, e
                }(),
                D = function() {
                    function e() {}
                    return e.prototype.evaluate = function(e, t) {
                        var r, n, o = {},
                            a = {
                                context: e,
                                result: o
                            };
                        try {
                            for (var i = c(t), s = i.next(); !s.done; s = i.next()) {
                                var u = s.value,
                                    l = this.evaluateFlag(a, u);
                                l && (o[u.key] = l)
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                s && !s.done && (n = i.return) && n.call(i)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return o
                    }, e.prototype.evaluateFlag = function(e, t) {
                        var r, n, o;
                        try {
                            for (var i = c(t.segments), s = i.next(); !s.done; s = i.next()) {
                                var u = s.value;
                                if (o = this.evaluateSegment(e, t, u)) {
                                    var l = a(a(a({}, t.metadata), u.metadata), o.metadata);
                                    o = a(a({}, o), {
                                        metadata: l
                                    });
                                    break
                                }
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                s && !s.done && (n = i.return) && n.call(i)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return o
                    }, e.prototype.evaluateSegment = function(e, t, r) {
                        var n, o, a, i;
                        if (!r.conditions) return void 0 !== (l = this.bucket(e, r)) ? t.variants[l] : void 0;
                        try {
                            for (var s = c(r.conditions), u = s.next(); !u.done; u = s.next()) {
                                var l, f = u.value,
                                    h = !0;
                                try {
                                    for (var p = (a = void 0, c(f)), v = p.next(); !v.done; v = p.next()) {
                                        var y = v.value;
                                        if (!(h = this.matchCondition(e, y))) break
                                    }
                                } catch (e) {
                                    a = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        v && !v.done && (i = p.return) && i.call(p)
                                    } finally {
                                        if (a) throw a.error
                                    }
                                }
                                if (h) return void 0 !== (l = this.bucket(e, r)) ? t.variants[l] : void 0
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                u && !u.done && (o = s.return) && o.call(s)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    }, e.prototype.matchCondition = function(e, t) {
                        var r = K(e, t.selector);
                        if (r) {
                            if (this.isSetOperator(t.op)) {
                                var n = this.coerceStringArray(r);
                                return !!n && this.matchSet(n, t.op, t.values)
                            }
                            var o = this.coerceString(r);
                            return void 0 !== o && this.matchString(o, t.op, t.values)
                        }
                        return this.matchNull(t.op, t.values)
                    }, e.prototype.getHash = function(e) {
                        return _(e)
                    }, e.prototype.bucket = function(e, t) {
                        var r, n, o, a;
                        if (!t.bucket) return t.variant;
                        var i = this.coerceString(K(e, t.bucket.selector));
                        if (!i || 0 === i.length) return t.variant;
                        var s = "".concat(t.bucket.salt, "/").concat(i),
                            u = this.getHash(s),
                            l = u % 100,
                            f = Math.floor(u / 100);
                        try {
                            for (var h = c(t.bucket.allocations), p = h.next(); !p.done; p = h.next()) {
                                var v = p.value,
                                    y = v.range[0],
                                    d = v.range[1];
                                if (l >= y && l < d) try {
                                    for (var m = (o = void 0, c(v.distributions)), g = m.next(); !g.done; g = m.next()) {
                                        var b = g.value,
                                            w = b.range[0],
                                            S = b.range[1];
                                        if (f >= w && f < S) return b.variant
                                    }
                                } catch (e) {
                                    o = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        g && !g.done && (a = m.return) && a.call(m)
                                    } finally {
                                        if (o) throw o.error
                                    }
                                }
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                p && !p.done && (n = h.return) && n.call(h)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return t.variant
                    }, e.prototype.matchNull = function(e, t) {
                        var r = this.containsNone(t);
                        switch (e) {
                            case f:
                            case p:
                            case y:
                            case d:
                            case m:
                            case g:
                            case b:
                            case w:
                            case S:
                            case x:
                            case C:
                            case T:
                            case k:
                                return r;
                            case h:
                            case v:
                            case E:
                            case O:
                                return !r;
                            default:
                                return !1
                        }
                    }, e.prototype.matchSet = function(e, t, r) {
                        switch (t) {
                            case C:
                                return this.setEquals(e, r);
                            case A:
                                return !this.setEquals(e, r);
                            case T:
                                return this.matchesSetContainsAll(e, r);
                            case E:
                                return !this.matchesSetContainsAll(e, r);
                            case k:
                                return this.matchesSetContainsAny(e, r);
                            case O:
                                return !this.matchesSetContainsAny(e, r);
                            default:
                                return !1
                        }
                    }, e.prototype.matchString = function(e, t, r) {
                        var n = this;
                        switch (t) {
                            case f:
                                return this.matchesIs(e, r);
                            case h:
                                return !this.matchesIs(e, r);
                            case p:
                                return this.matchesContains(e, r);
                            case v:
                                return !this.matchesContains(e, r);
                            case y:
                            case d:
                            case m:
                            case g:
                                return this.matchesComparable(e, t, r, (function(e) {
                                    return n.parseNumber(e)
                                }), this.comparator);
                            case b:
                            case w:
                            case S:
                            case x:
                                return this.matchesComparable(e, t, r, (function(e) {
                                    return U.parse(e)
                                }), this.versionComparator);
                            case F:
                                return this.matchesRegex(e, r);
                            case N:
                                return !this.matchesRegex(e, r);
                            default:
                                return !1
                        }
                    }, e.prototype.matchesIs = function(e, t) {
                        if (this.containsBooleans(t)) {
                            var r = e.toLowerCase();
                            if ("true" === r || "false" === r) return t.some((function(e) {
                                return e.toLowerCase() === r
                            }))
                        }
                        return t.some((function(t) {
                            return e === t
                        }))
                    }, e.prototype.matchesContains = function(e, t) {
                        var r, n;
                        try {
                            for (var o = c(t), a = o.next(); !a.done; a = o.next()) {
                                var i = a.value;
                                if (e.toLowerCase().includes(i.toLowerCase())) return !0
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (n = o.return) && n.call(o)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return !1
                    }, e.prototype.matchesComparable = function(e, t, r, n, o) {
                        var a = this,
                            i = n(e),
                            s = r.map((function(e) {
                                return n(e)
                            })).filter((function(e) {
                                return void 0 !== e
                            }));
                        return void 0 === i || 0 === s.length ? r.some((function(r) {
                            return a.comparator(e, t, r)
                        })) : s.some((function(e) {
                            return o(i, t, e)
                        }))
                    }, e.prototype.comparator = function(e, t, r) {
                        switch (t) {
                            case y:
                            case b:
                                return e < r;
                            case d:
                            case w:
                                return e <= r;
                            case m:
                            case S:
                                return e > r;
                            case g:
                            case x:
                                return e >= r;
                            default:
                                return !1
                        }
                    }, e.prototype.versionComparator = function(e, t, r) {
                        var n = e.compareTo(r);
                        switch (t) {
                            case y:
                            case b:
                                return n < 0;
                            case d:
                            case w:
                                return n <= 0;
                            case m:
                            case S:
                                return n > 0;
                            case g:
                            case x:
                                return n >= 0;
                            default:
                                return !1
                        }
                    }, e.prototype.matchesRegex = function(e, t) {
                        return t.some((function(t) {
                            return Boolean(new RegExp(t).exec(e))
                        }))
                    }, e.prototype.containsNone = function(e) {
                        return e.some((function(e) {
                            return "(none)" === e
                        }))
                    }, e.prototype.containsBooleans = function(e) {
                        return e.some((function(e) {
                            switch (e.toLowerCase()) {
                                case "true":
                                case "false":
                                    return !0;
                                default:
                                    return !1
                            }
                        }))
                    }, e.prototype.parseNumber = function(e) {
                        var t;
                        return null !== (t = Number(e)) && void 0 !== t ? t : void 0
                    }, e.prototype.coerceString = function(e) {
                        if (e) return "object" == typeof e ? JSON.stringify(e) : String(e)
                    }, e.prototype.coerceStringArray = function(e) {
                        var t = this;
                        if (Array.isArray(e)) return e.map((function(e) {
                            return t.coerceString(e)
                        })).filter(Boolean);
                        var r = String(e);
                        try {
                            var n = JSON.parse(r);
                            return Array.isArray(n) ? e.map((function(e) {
                                return t.coerceString(e)
                            })).filter(Boolean) : void 0
                        } catch (e) {
                            return
                        }
                    }, e.prototype.isSetOperator = function(e) {
                        switch (e) {
                            case C:
                            case A:
                            case T:
                            case E:
                            case k:
                            case O:
                                return !0;
                            default:
                                return !1
                        }
                    }, e.prototype.setEquals = function(e, t) {
                        var r = new Set(e),
                            n = new Set(t);
                        return r.size === n.size && l([], u(n), !1).every((function(e) {
                            return r.has(e)
                        }))
                    }, e.prototype.matchesSetContainsAll = function(e, t) {
                        var r, n;
                        if (e.length < t.length) return !1;
                        try {
                            for (var o = c(t), a = o.next(); !a.done; a = o.next()) {
                                var i = a.value;
                                if (!this.matchesIs(i, e)) return !1
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (n = o.return) && n.call(o)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return !0
                    }, e.prototype.matchesSetContainsAny = function(e, t) {
                        var r, n;
                        try {
                            for (var o = c(t), a = o.next(); !a.done; a = o.next()) {
                                var i = a.value;
                                if (this.matchesIs(i, e)) return !0
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (n = o.return) && n.call(o)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return !1
                    }, e
                }();
            const G = "function" == typeof btoa,
                L = "function" == typeof Buffer,
                X = ("function" == typeof TextDecoder && new TextDecoder, "function" == typeof TextEncoder ? new TextEncoder : void 0),
                z = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
                V = ((e => {
                    let t = {};
                    e.forEach(((e, r) => t[e] = r))
                })(z), String.fromCharCode.bind(String)),
                H = ("function" == typeof Uint8Array.from && Uint8Array.from.bind(Uint8Array), e => e.replace(/=/g, "").replace(/[+\/]/g, (e => "+" == e ? "-" : "_"))),
                Q = e => {
                    let t, r, n, o, a = "";
                    const i = e.length % 3;
                    for (let i = 0; i < e.length;) {
                        if ((r = e.charCodeAt(i++)) > 255 || (n = e.charCodeAt(i++)) > 255 || (o = e.charCodeAt(i++)) > 255) throw new TypeError("invalid character found");
                        t = r << 16 | n << 8 | o, a += z[t >> 18 & 63] + z[t >> 12 & 63] + z[t >> 6 & 63] + z[63 & t]
                    }
                    return i ? a.slice(0, i - 3) + "===".substring(i) : a
                },
                W = G ? e => btoa(e) : L ? e => Buffer.from(e, "binary").toString("base64") : Q,
                Y = L ? e => Buffer.from(e).toString("base64") : e => {
                    let t = [];
                    for (let r = 0, n = e.length; r < n; r += 4096) t.push(V.apply(null, e.subarray(r, r + 4096)));
                    return W(t.join(""))
                },
                Z = e => {
                    if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? V(192 | t >>> 6) + V(128 | 63 & t) : V(224 | t >>> 12 & 15) + V(128 | t >>> 6 & 63) + V(128 | 63 & t);
                    var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                    return V(240 | t >>> 18 & 7) + V(128 | t >>> 12 & 63) + V(128 | t >>> 6 & 63) + V(128 | 63 & t)
                },
                $ = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                ee = e => e.replace($, Z),
                te = L ? e => Buffer.from(e, "utf8").toString("base64") : X ? e => Y(X.encode(e)) : e => W(ee(e)),
                re = (e, t = !1) => t ? H(te(e)) : te(e),
                ne = e => re(e, !0),
                oe = ne;
            var ae = function(e) {
                    function t(r, n) {
                        var o = e.call(this, n) || this;
                        return o.statusCode = r, Object.setPrototypeOf(o, t.prototype), o
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function r() {
                            this.constructor = e
                        }
                        o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                    }(t, e), t
                }(Error),
                ie = (function() {
                    function e(e, t, r) {
                        this.deploymentKey = e, this.serverUrl = t, this.httpClient = r
                    }
                    e.prototype.getVariants = function(e, t) {
                        return i(this, void 0, void 0, (function() {
                            var r, n, o;
                            return s(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return r = oe(JSON.stringify(e)), n = {
                                            Authorization: "Api-Key ".concat(this.deploymentKey),
                                            "X-Amp-Exp-User": r
                                        }, (null == t ? void 0 : t.flagKeys) && (n["X-Amp-Exp-Flag-Keys"] = oe(JSON.stringify(t.flagKeys))), (null == t ? void 0 : t.trackingOption) && (n["X-Amp-Exp-Track"] = t.trackingOption), [4, this.httpClient.request({
                                            requestUrl: "".concat(this.serverUrl, "/sdk/v2/vardata?v=0"),
                                            method: "GET",
                                            headers: n,
                                            timeoutMillis: null == t ? void 0 : t.timeoutMillis
                                        })];
                                    case 1:
                                        if (200 != (o = a.sent()).status) throw new ae(o.status, "Fetch error response: status=".concat(o.status));
                                        return [2, JSON.parse(o.body)]
                                }
                            }))
                        }))
                    }
                }(), function() {
                    function e(e, t, r) {
                        this.deploymentKey = e, this.serverUrl = t, this.httpClient = r
                    }
                    e.prototype.getFlags = function(e) {
                        return i(this, void 0, void 0, (function() {
                            var t, r;
                            return s(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return t = {
                                            Authorization: "Api-Key ".concat(this.deploymentKey)
                                        }, (null == e ? void 0 : e.libraryName) && (null == e ? void 0 : e.libraryVersion) && (t["X-Amp-Exp-Library"] = "".concat(e.libraryName, "/").concat(e.libraryVersion)), [4, this.httpClient.request({
                                            requestUrl: "".concat(this.serverUrl, "/sdk/v2/flags"),
                                            method: "GET",
                                            headers: t,
                                            timeoutMillis: null == e ? void 0 : e.timeoutMillis
                                        })];
                                    case 1:
                                        if (200 != (r = n.sent()).status) throw Error("Flags error response: status=".concat(r.status));
                                        return [2, JSON.parse(r.body).reduce((function(e, t) {
                                            return e[t.key] = t, e
                                        }), {})]
                                }
                            }))
                        }))
                    }
                }(), "undefined" != typeof globalThis ? globalThis : r.g || self),
                se = (function() {
                    function e(e, t) {
                        this.poller = void 0, this.action = e, this.ms = t
                    }
                    e.prototype.start = function() {
                        this.poller || (this.poller = ie.setInterval(this.action, this.ms), this.action())
                    }, e.prototype.stop = function() {
                        this.poller && (ie.clearInterval(this.poller), this.poller = void 0)
                    }
                }(), r(26269)),
                ce = new function() {
                    var e = this;
                    this.dbs = {}, this.createStore = function(t) {
                        return (0, n.mG)(e, void 0, void 0, (function() {
                            return (0, n.Jh)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, (0, se.X3)(t, 1, {
                                            upgrade: function(e) {
                                                e.objectStoreNames.contains("eventTypesForSession") || e.createObjectStore("eventTypesForSession", {
                                                    keyPath: "sessionId"
                                                })
                                            }
                                        })];
                                    case 1:
                                        return [2, e.sent()]
                                }
                            }))
                        }))
                    }, this.openOrCreateDB = function(t) {
                        return (0, n.mG)(e, void 0, void 0, (function() {
                            var e, r;
                            return (0, n.Jh)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.dbs && this.dbs[t] ? [2, this.dbs[t]] : (e = "".concat(t.substring(0, 10), "_amp_targeting"), [4, this.createStore(e)]);
                                    case 1:
                                        return r = n.sent(), this.dbs[t] = r, [2, r]
                                }
                            }))
                        }))
                    }, this.updateEventListForSession = function(t) {
                        var r = t.sessionId,
                            o = t.eventType,
                            a = t.eventTime,
                            i = t.loggerProvider,
                            s = t.tx;
                        return (0, n.mG)(e, void 0, void 0, (function() {
                            var e, t, c, u, l, f, h;
                            return (0, n.Jh)(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        return p.trys.push([0, 3, , 4]), [4, s.store.get(r)];
                                    case 1:
                                        return e = p.sent(), t = e ? e.eventTypes : {}, c = t[o] || {}, u = (0, n.pi)((0, n.pi)({}, t), ((f = {})[o] = (0, n.pi)((0, n.pi)({}, c), ((h = {})[a] = {
                                            event_type: o
                                        }, h)), f)), [4, s.store.put({
                                            sessionId: r,
                                            eventTypes: u
                                        })];
                                    case 2:
                                        return p.sent(), [2, u];
                                    case 3:
                                        return l = p.sent(), i.warn("Failed to store events for targeting ".concat(r, ": ").concat(l)), [3, 4];
                                    case 4:
                                        return [2, void 0]
                                }
                            }))
                        }))
                    }, this.deleteOldSessionEventTypes = function(t) {
                        var r = t.currentSessionId,
                            o = t.loggerProvider,
                            a = t.tx;
                        return (0, n.mG)(e, void 0, void 0, (function() {
                            var e, t, i, s, c;
                            return (0, n.Jh)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 6, , 7]), [4, a.store.getAll()];
                                    case 1:
                                        e = n.sent(), t = 0, n.label = 2;
                                    case 2:
                                        return t < e.length ? (i = e[t], s = Date.now() - i.sessionId, i.sessionId !== r && s > 1728e5 ? [4, a.store.delete(i.sessionId)] : [3, 4]) : [3, 5];
                                    case 3:
                                        n.sent(), n.label = 4;
                                    case 4:
                                        return t++, [3, 2];
                                    case 5:
                                        return [3, 7];
                                    case 6:
                                        return c = n.sent(), o.warn("Failed to clear old session events for targeting: ".concat(c)), [3, 7];
                                    case 7:
                                        return [2]
                                }
                            }))
                        }))
                    }, this.storeEventTypeForSession = function(t) {
                        var r = t.loggerProvider,
                            o = t.sessionId,
                            a = t.eventType,
                            i = t.eventTime,
                            s = t.apiKey;
                        return (0, n.mG)(e, void 0, void 0, (function() {
                            var e, t, c, u;
                            return (0, n.Jh)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 5, , 6]), [4, this.openOrCreateDB(s)];
                                    case 1:
                                        return e = n.sent(), (t = e.transaction("eventTypesForSession", "readwrite")) ? [4, this.updateEventListForSession({
                                            sessionId: o,
                                            tx: t,
                                            loggerProvider: r,
                                            eventType: a,
                                            eventTime: i
                                        })] : [2];
                                    case 2:
                                        return c = n.sent(), [4, this.deleteOldSessionEventTypes({
                                            currentSessionId: o,
                                            tx: t,
                                            loggerProvider: r
                                        })];
                                    case 3:
                                        return n.sent(), [4, t.done];
                                    case 4:
                                        return n.sent(), [2, c];
                                    case 5:
                                        return u = n.sent(), r.warn("Failed to store events for targeting ".concat(o, ": ").concat(u)), [3, 6];
                                    case 6:
                                        return [2, void 0]
                                }
                            }))
                        }))
                    }
                };
            var ue, le = {
                evaluateTargeting: (ue = new function() {
                    var e = this;
                    this.evaluateTargeting = function(t) {
                        var r = t.apiKey,
                            o = t.loggerProvider,
                            a = t.event,
                            i = t.sessionId,
                            s = t.userProperties,
                            c = t.deviceId,
                            u = t.flag;
                        return (0, n.mG)(e, void 0, void 0, (function() {
                            var e, t, l, f;
                            return (0, n.Jh)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return a && a.time ? [4, ce.storeEventTypeForSession({
                                            loggerProvider: o,
                                            apiKey: r,
                                            sessionId: i,
                                            eventType: a.event_type,
                                            eventTime: a.time
                                        })] : [3, 2];
                                    case 1:
                                        return t = n.sent(), [3, 3];
                                    case 2:
                                        t = void 0, n.label = 3;
                                    case 3:
                                        return l = (e = t) && new Set(Object.keys(e)), f = {
                                            session_id: i,
                                            event: a,
                                            event_types: l && Array.from(l),
                                            user: {
                                                device_id: c,
                                                user_properties: s
                                            }
                                        }, [2, this.evaluationEngine.evaluate(f, [u])]
                                }
                            }))
                        }))
                    }, this.evaluationEngine = new D
                }).evaluateTargeting.bind(ue)
            }.evaluateTargeting
        }
    }
]);
//# sourceMappingURL=e73c352ce43e61cfc766fa8d2c60f4c5259ae90e96a998e7dbb2b1ced709d23c.js.map