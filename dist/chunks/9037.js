/*! For license information please see <unstable> */
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9037], {
        68871: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = "pencil",
                r = [9999, 61504, "pencil-alt"],
                i = "f303",
                o = "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z";
            t.definition = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, r, i, o]
            }, t.faPencil = t.definition, t.prefix = "fas", t.iconName = n, t.width = 512, t.height = 512, t.ligatures = r, t.unicode = i, t.svgPathData = o, t.aliases = r
        },
        92558: (e, t) => {
            "use strict";
            var n = "right-to-bracket",
                r = ["sign-in-alt"],
                i = "f2f6",
                o = "M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, r, i, o]
            }, t.BE = t.DF
        },
        90478: (e, t, n) => {
            "use strict";
            var r = n(50791),
                i = Object.prototype.hasOwnProperty,
                o = {
                    align: "text-align",
                    valign: "vertical-align",
                    height: "height",
                    width: "width"
                };

            function u(e) {
                var t;
                if ("tr" === e.tagName || "td" === e.tagName || "th" === e.tagName)
                    for (t in o) i.call(o, t) && void 0 !== e.properties[t] && (l(e, o[t], e.properties[t]), delete e.properties[t])
            }

            function l(e, t, n) {
                var r = (e.properties.style || "").trim();
                r && !/;\s*/.test(r) && (r += ";"), r && (r += " ");
                var i = r + t + ": " + n + ";";
                e.properties.style = i
            }
            e.exports = function(e) {
                return r(e, "element", u), e
            }
        },
        93790: e => {
            "use strict";

            function t(e) {
                if ("string" == typeof e) return function(e) {
                    return t;

                    function t(t) {
                        return Boolean(t && t.type === e)
                    }
                }(e);
                if (null == e) return i;
                if ("object" == typeof e) return ("length" in e ? r : n)(e);
                if ("function" == typeof e) return e;
                throw new Error("Expected function, string, or object as test")
            }

            function n(e) {
                return function(t) {
                    var n;
                    for (n in e)
                        if (t[n] !== e[n]) return !1;
                    return !0
                }
            }

            function r(e) {
                var n = function(e) {
                        for (var n = [], r = e.length, i = -1; ++i < r;) n[i] = t(e[i]);
                        return n
                    }(e),
                    r = n.length;
                return function() {
                    var e = -1;
                    for (; ++e < r;)
                        if (n[e].apply(this, arguments)) return !0;
                    return !1
                }
            }

            function i() {
                return !0
            }
            e.exports = t
        },
        11150: (e, t, n) => {
            "use strict";
            e.exports = l;
            var r = n(93790),
                i = !0,
                o = "skip",
                u = !1;

            function l(e, t, n, i) {
                var l;

                function s(e, r, c) {
                    var f, p = [];
                    return (t && !l(e, r, c[c.length - 1] || null) || (p = a(n(e, c)))[0] !== u) && e.children && p[0] !== o ? (f = a(function(e, t) {
                        var n, r = -1,
                            o = i ? -1 : 1,
                            l = (i ? e.length : r) + o;
                        for (; l > r && l < e.length;) {
                            if ((n = s(e[l], l, t))[0] === u) return n;
                            l = "number" == typeof n[1] ? n[1] : l + o
                        }
                    }(e.children, c.concat(e))), f[0] === u ? f : p) : p
                }
                "function" == typeof t && "function" != typeof n && (i = n, n = t, t = null), l = r(t), s(e, null, [])
            }

            function a(e) {
                return null !== e && "object" == typeof e && "length" in e ? e : "number" == typeof e ? [i, e] : [e]
            }
            l.CONTINUE = i, l.SKIP = o, l.EXIT = u
        },
        50791: (e, t, n) => {
            "use strict";
            e.exports = l;
            var r = n(11150),
                i = r.CONTINUE,
                o = r.SKIP,
                u = r.EXIT;

            function l(e, t, n, i) {
                "function" == typeof t && "function" != typeof n && (i = n, n = t, t = null), r(e, t, (function(e, t) {
                    var r = t[t.length - 1],
                        i = r ? r.children.indexOf(e) : null;
                    return n(e, i, r)
                }), i)
            }
            l.CONTINUE = i, l.SKIP = o, l.EXIT = u
        },
        18869: e => {
            "use strict";
            e.exports = function(e) {
                if (e) throw e
            }
        },
        56851: (e, t) => {
            "use strict";
            t.parse = function(e) {
                var t, r = [],
                    o = String(e || i),
                    u = o.indexOf(n),
                    l = 0,
                    a = !1;
                for (; !a;) - 1 === u && (u = o.length, a = !0), !(t = o.slice(l, u).trim()) && a || r.push(t), l = u + 1, u = o.indexOf(n, l);
                return r
            }, t.stringify = function(e, t) {
                var o = t || {},
                    u = !1 === o.padLeft ? i : r,
                    l = o.padRight ? r : i;
                e[e.length - 1] === i && (e = e.concat(i));
                return e.join(l + n + u).trim()
            };
            var n = ",",
                r = " ",
                i = ""
        },
        1646: function(e) {
            e.exports = function() {
                "use strict";
                var e, t, n = 1e3,
                    r = 6e4,
                    i = 36e5,
                    o = 864e5,
                    u = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    l = 31536e6,
                    a = 2628e6,
                    s = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
                    c = {
                        years: l,
                        months: a,
                        days: o,
                        hours: i,
                        minutes: r,
                        seconds: n,
                        milliseconds: 1,
                        weeks: 6048e5
                    },
                    f = function(e) {
                        return e instanceof y
                    },
                    p = function(e, t, n) {
                        return new y(e, n, t.$l)
                    },
                    h = function(e) {
                        return t.p(e) + "s"
                    },
                    d = function(e) {
                        return e < 0
                    },
                    m = function(e) {
                        return d(e) ? Math.ceil(e) : Math.floor(e)
                    },
                    g = function(e) {
                        return Math.abs(e)
                    },
                    v = function(e, t) {
                        return e ? d(e) ? {
                            negative: !0,
                            format: "" + g(e) + t
                        } : {
                            negative: !1,
                            format: "" + e + t
                        } : {
                            negative: !1,
                            format: ""
                        }
                    },
                    y = function() {
                        function d(e, t, n) {
                            var r = this;
                            if (this.$d = {}, this.$l = n, void 0 === e && (this.$ms = 0, this.parseFromMilliseconds()), t) return p(e * c[h(t)], this);
                            if ("number" == typeof e) return this.$ms = e, this.parseFromMilliseconds(), this;
                            if ("object" == typeof e) return Object.keys(e).forEach((function(t) {
                                r.$d[h(t)] = e[t]
                            })), this.calMilliseconds(), this;
                            if ("string" == typeof e) {
                                var i = e.match(s);
                                if (i) {
                                    var o = i.slice(2).map((function(e) {
                                        return null != e ? Number(e) : 0
                                    }));
                                    return this.$d.years = o[0], this.$d.months = o[1], this.$d.weeks = o[2], this.$d.days = o[3], this.$d.hours = o[4], this.$d.minutes = o[5], this.$d.seconds = o[6], this.calMilliseconds(), this
                                }
                            }
                            return this
                        }
                        var g = d.prototype;
                        return g.calMilliseconds = function() {
                            var e = this;
                            this.$ms = Object.keys(this.$d).reduce((function(t, n) {
                                return t + (e.$d[n] || 0) * c[n]
                            }), 0)
                        }, g.parseFromMilliseconds = function() {
                            var e = this.$ms;
                            this.$d.years = m(e / l), e %= l, this.$d.months = m(e / a), e %= a, this.$d.days = m(e / o), e %= o, this.$d.hours = m(e / i), e %= i, this.$d.minutes = m(e / r), e %= r, this.$d.seconds = m(e / n), e %= n, this.$d.milliseconds = e
                        }, g.toISOString = function() {
                            var e = v(this.$d.years, "Y"),
                                t = v(this.$d.months, "M"),
                                n = +this.$d.days || 0;
                            this.$d.weeks && (n += 7 * this.$d.weeks);
                            var r = v(n, "D"),
                                i = v(this.$d.hours, "H"),
                                o = v(this.$d.minutes, "M"),
                                u = this.$d.seconds || 0;
                            this.$d.milliseconds && (u += this.$d.milliseconds / 1e3, u = Math.round(1e3 * u) / 1e3);
                            var l = v(u, "S"),
                                a = e.negative || t.negative || r.negative || i.negative || o.negative || l.negative,
                                s = i.format || o.format || l.format ? "T" : "",
                                c = (a ? "-" : "") + "P" + e.format + t.format + r.format + s + i.format + o.format + l.format;
                            return "P" === c || "-P" === c ? "P0D" : c
                        }, g.toJSON = function() {
                            return this.toISOString()
                        }, g.format = function(e) {
                            var n = e || "YYYY-MM-DDTHH:mm:ss",
                                r = {
                                    Y: this.$d.years,
                                    YY: t.s(this.$d.years, 2, "0"),
                                    YYYY: t.s(this.$d.years, 4, "0"),
                                    M: this.$d.months,
                                    MM: t.s(this.$d.months, 2, "0"),
                                    D: this.$d.days,
                                    DD: t.s(this.$d.days, 2, "0"),
                                    H: this.$d.hours,
                                    HH: t.s(this.$d.hours, 2, "0"),
                                    m: this.$d.minutes,
                                    mm: t.s(this.$d.minutes, 2, "0"),
                                    s: this.$d.seconds,
                                    ss: t.s(this.$d.seconds, 2, "0"),
                                    SSS: t.s(this.$d.milliseconds, 3, "0")
                                };
                            return n.replace(u, (function(e, t) {
                                return t || String(r[e])
                            }))
                        }, g.as = function(e) {
                            return this.$ms / c[h(e)]
                        }, g.get = function(e) {
                            var t = this.$ms,
                                n = h(e);
                            return "milliseconds" === n ? t %= 1e3 : t = "weeks" === n ? m(t / c[n]) : this.$d[n], t || 0
                        }, g.add = function(e, t, n) {
                            var r;
                            return r = t ? e * c[h(t)] : f(e) ? e.$ms : p(e, this).$ms, p(this.$ms + r * (n ? -1 : 1), this)
                        }, g.subtract = function(e, t) {
                            return this.add(e, t, !0)
                        }, g.locale = function(e) {
                            var t = this.clone();
                            return t.$l = e, t
                        }, g.clone = function() {
                            return p(this.$ms, this)
                        }, g.humanize = function(t) {
                            return e().add(this.$ms, "ms").locale(this.$l).fromNow(!t)
                        }, g.valueOf = function() {
                            return this.asMilliseconds()
                        }, g.milliseconds = function() {
                            return this.get("milliseconds")
                        }, g.asMilliseconds = function() {
                            return this.as("milliseconds")
                        }, g.seconds = function() {
                            return this.get("seconds")
                        }, g.asSeconds = function() {
                            return this.as("seconds")
                        }, g.minutes = function() {
                            return this.get("minutes")
                        }, g.asMinutes = function() {
                            return this.as("minutes")
                        }, g.hours = function() {
                            return this.get("hours")
                        }, g.asHours = function() {
                            return this.as("hours")
                        }, g.days = function() {
                            return this.get("days")
                        }, g.asDays = function() {
                            return this.as("days")
                        }, g.weeks = function() {
                            return this.get("weeks")
                        }, g.asWeeks = function() {
                            return this.as("weeks")
                        }, g.months = function() {
                            return this.get("months")
                        }, g.asMonths = function() {
                            return this.as("months")
                        }, g.years = function() {
                            return this.get("years")
                        }, g.asYears = function() {
                            return this.as("years")
                        }, d
                    }(),
                    x = function(e, t, n) {
                        return e.add(t.years() * n, "y").add(t.months() * n, "M").add(t.days() * n, "d").add(t.hours() * n, "h").add(t.minutes() * n, "m").add(t.seconds() * n, "s").add(t.milliseconds() * n, "ms")
                    };
                return function(n, r, i) {
                    e = i, t = i().$utils(), i.duration = function(e, t) {
                        var n = i.locale();
                        return p(e, {
                            $l: n
                        }, t)
                    }, i.isDuration = f;
                    var o = r.prototype.add,
                        u = r.prototype.subtract;
                    r.prototype.add = function(e, t) {
                        return f(e) ? x(this, e, 1) : o.bind(this)(e, t)
                    }, r.prototype.subtract = function(e, t) {
                        return f(e) ? x(this, e, -1) : u.bind(this)(e, t)
                    }
                }
            }()
        },
        70178: function(e) {
            e.exports = function() {
                "use strict";
                var e = "minute",
                    t = /[+-]\d\d(?::?\d\d)?/g,
                    n = /([+-]|\d\d)/g;
                return function(r, i, o) {
                    var u = i.prototype;
                    o.utc = function(e) {
                        return new i({
                            date: e,
                            utc: !0,
                            args: arguments
                        })
                    }, u.utc = function(t) {
                        var n = o(this.toDate(), {
                            locale: this.$L,
                            utc: !0
                        });
                        return t ? n.add(this.utcOffset(), e) : n
                    }, u.local = function() {
                        return o(this.toDate(), {
                            locale: this.$L,
                            utc: !1
                        })
                    };
                    var l = u.parse;
                    u.parse = function(e) {
                        e.utc && (this.$u = !0), this.$utils().u(e.$offset) || (this.$offset = e.$offset), l.call(this, e)
                    };
                    var a = u.init;
                    u.init = function() {
                        if (this.$u) {
                            var e = this.$d;
                            this.$y = e.getUTCFullYear(), this.$M = e.getUTCMonth(), this.$D = e.getUTCDate(), this.$W = e.getUTCDay(), this.$H = e.getUTCHours(), this.$m = e.getUTCMinutes(), this.$s = e.getUTCSeconds(), this.$ms = e.getUTCMilliseconds()
                        } else a.call(this)
                    };
                    var s = u.utcOffset;
                    u.utcOffset = function(r, i) {
                        var o = this.$utils().u;
                        if (o(r)) return this.$u ? 0 : o(this.$offset) ? s.call(this) : this.$offset;
                        if ("string" == typeof r && (r = function(e) {
                                void 0 === e && (e = "");
                                var r = e.match(t);
                                if (!r) return null;
                                var i = ("" + r[0]).match(n) || ["-", 0, 0],
                                    o = i[0],
                                    u = 60 * +i[1] + +i[2];
                                return 0 === u ? 0 : "+" === o ? u : -u
                            }(r), null === r)) return this;
                        var u = Math.abs(r) <= 16 ? 60 * r : r,
                            l = this;
                        if (i) return l.$offset = u, l.$u = 0 === r, l;
                        if (0 !== r) {
                            var a = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                            (l = this.local().add(u + a, e)).$offset = u, l.$x.$localOffset = a
                        } else l = this.utc();
                        return l
                    };
                    var c = u.format;
                    u.format = function(e) {
                        var t = e || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                        return c.call(this, t)
                    }, u.valueOf = function() {
                        var e = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
                        return this.$d.valueOf() - 6e4 * e
                    }, u.isUTC = function() {
                        return !!this.$u
                    }, u.toISOString = function() {
                        return this.toDate().toISOString()
                    }, u.toString = function() {
                        return this.toDate().toUTCString()
                    };
                    var f = u.toDate;
                    u.toDate = function(e) {
                        return "s" === e && this.$offset ? o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : f.call(this)
                    };
                    var p = u.diff;
                    u.diff = function(e, t, n) {
                        if (e && this.$u === e.$u) return p.call(this, e, t, n);
                        var r = this.local(),
                            i = o(e).local();
                        return p.call(r, i, t, n)
                    }
                }
            }()
        },
        94470: e => {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                n = Object.prototype.toString,
                r = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                o = function(e) {
                    return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e)
                },
                u = function(e) {
                    if (!e || "[object Object]" !== n.call(e)) return !1;
                    var r, i = t.call(e, "constructor"),
                        o = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, "isPrototypeOf");
                    if (e.constructor && !i && !o) return !1;
                    for (r in e);
                    return void 0 === r || t.call(e, r)
                },
                l = function(e, t) {
                    r && "__proto__" === t.name ? r(e, t.name, {
                        enumerable: !0,
                        configurable: !0,
                        value: t.newValue,
                        writable: !0
                    }) : e[t.name] = t.newValue
                },
                a = function(e, n) {
                    if ("__proto__" === n) {
                        if (!t.call(e, n)) return;
                        if (i) return i(e, n).value
                    }
                    return e[n]
                };
            e.exports = function e() {
                var t, n, r, i, s, c, f = arguments[0],
                    p = 1,
                    h = arguments.length,
                    d = !1;
                for ("boolean" == typeof f && (d = f, f = arguments[1] || {}, p = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); p < h; ++p)
                    if (null != (t = arguments[p]))
                        for (n in t) r = a(f, n), f !== (i = a(t, n)) && (d && i && (u(i) || (s = o(i))) ? (s ? (s = !1, c = r && o(r) ? r : []) : c = r && u(r) ? r : {}, l(f, {
                            name: n,
                            newValue: e(d, c, i)
                        })) : void 0 !== i && l(f, {
                            name: n,
                            newValue: i
                        }));
                return f
            }
        },
        76331: (e, t, n) => {
            "use strict";
            var r = n(97247),
                i = n(11218),
                o = n(34668),
                u = n(99640),
                l = n(36582),
                a = n(56851),
                s = n(57848),
                c = n(70006),
                f = n(48145),
                p = f("root"),
                h = f("element"),
                d = f("text");

            function m(e, t, n) {
                var r, o, u = n.schema,
                    l = u,
                    a = t.tagName,
                    s = {},
                    f = [],
                    p = -1;
                for (r in "html" === u.space && "svg" === a.toLowerCase() && (l = i, n.schema = l), t.properties) g(s, r, t.properties[r], n, a);
                if (n.vdom && ("html" === l.space ? a = a.toUpperCase() : s.namespace = c[l.space]), n.prefix && (n.key++, s.key = n.prefix + n.key), t.children)
                    for (; ++p < t.children.length;) o = t.children[p], h(o) ? f.push(m(e, o, n)) : d(o) && f.push(o.value);
                return n.schema = u, f.length ? e.call(t, a, s, f) : e.call(t, a, s)
            }

            function g(e, t, n, r, i) {
                var c, f = o(r.schema, t);
                null == n || n != n || !1 === n && (r.vue || r.vdom || r.hyperscript) || !n && f.boolean && (r.vue || r.vdom || r.hyperscript) || (n && "object" == typeof n && "length" in n && (n = (f.commaSeparated ? a : l).stringify(n)), f.boolean && r.hyperscript && (n = ""), "style" === f.property && "string" == typeof n && (r.react || r.vue || r.vdom) && (n = function(e, t) {
                    var n = {};
                    try {
                        s(e, r)
                    } catch (e) {
                        throw e.message = t + "[style]" + e.message.slice(9), e
                    }
                    return n;

                    function r(e, t) {
                        "-ms-" === e.slice(0, 4) && (e = "ms-" + e.slice(4)), n[e.replace(/-([a-z])/g, y)] = t
                    }
                }(n, i)), r.vue ? "style" !== f.property && (c = "attrs") : f.mustUseProperty || (r.vdom ? "style" !== f.property && (c = "attributes") : r.hyperscript && (c = "attrs")), c ? (e[c] || (e[c] = {}), e[c][f.attribute] = n) : f.space && r.react ? e[u[f.property] || f.property] = n : e[f.attribute] = n)
            }

            function v(e) {
                return Boolean(e && e.context && e.cleanup)
            }

            function y(e, t) {
                return t.toUpperCase()
            }
            e.exports = function(e, t, n) {
                var o, u = n || {},
                    l = function(e) {
                        var t = e && e("div");
                        return Boolean(t && ("_owner" in t || "_store" in t) && null == t.key)
                    }(e),
                    a = function(e) {
                        var t = e && e("div");
                        return Boolean(t && t.context && t.context._isVue)
                    }(e),
                    s = function(e) {
                        return e && "VirtualNode" === e("div").type
                    }(e);
                if ("function" != typeof e) throw new Error("h is not a function");
                "string" == typeof u || "boolean" == typeof u ? (o = u, u = {}) : o = u.prefix;
                if (p(t)) t = 1 === t.children.length && h(t.children[0]) ? t.children[0] : {
                    type: "element",
                    tagName: "div",
                    properties: {},
                    children: t.children
                };
                else if (!h(t)) throw new Error("Expected root or element, not `" + (t && t.type || t) + "`");
                return m(e, t, {
                    schema: "svg" === u.space ? i : r,
                    prefix: null == o ? l || a || s ? "h-" : null : o,
                    key: 0,
                    react: l,
                    vue: a,
                    vdom: s,
                    hyperscript: v(e)
                })
            }
        },
        18139: e => {
            var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                n = /\n/g,
                r = /^\s*/,
                i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
                o = /^:\s*/,
                u = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
                l = /^[;\s]*/,
                a = /^\s+|\s+$/g,
                s = "";

            function c(e) {
                return e ? e.replace(a, s) : s
            }
            e.exports = function(e, a) {
                if ("string" != typeof e) throw new TypeError("First argument must be a string");
                if (!e) return [];
                a = a || {};
                var f = 1,
                    p = 1;

                function h(e) {
                    var t = e.match(n);
                    t && (f += t.length);
                    var r = e.lastIndexOf("\n");
                    p = ~r ? e.length - r : p + e.length
                }

                function d() {
                    var e = {
                        line: f,
                        column: p
                    };
                    return function(t) {
                        return t.position = new m(e), x(), t
                    }
                }

                function m(e) {
                    this.start = e, this.end = {
                        line: f,
                        column: p
                    }, this.source = a.source
                }
                m.prototype.content = e;
                var g = [];

                function v(t) {
                    var n = new Error(a.source + ":" + f + ":" + p + ": " + t);
                    if (n.reason = t, n.filename = a.source, n.line = f, n.column = p, n.source = e, !a.silent) throw n;
                    g.push(n)
                }

                function y(t) {
                    var n = t.exec(e);
                    if (n) {
                        var r = n[0];
                        return h(r), e = e.slice(r.length), n
                    }
                }

                function x() {
                    y(r)
                }

                function k(e) {
                    var t;
                    for (e = e || []; t = b();) !1 !== t && e.push(t);
                    return e
                }

                function b() {
                    var t = d();
                    if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                        for (var n = 2; s != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));) ++n;
                        if (n += 2, s === e.charAt(n - 1)) return v("End of comment missing");
                        var r = e.slice(2, n - 2);
                        return p += 2, h(r), e = e.slice(n), p += 2, t({
                            type: "comment",
                            comment: r
                        })
                    }
                }

                function S() {
                    var e = d(),
                        n = y(i);
                    if (n) {
                        if (b(), !y(o)) return v("property missing ':'");
                        var r = y(u),
                            a = e({
                                type: "declaration",
                                property: c(n[0].replace(t, s)),
                                value: r ? c(r[0].replace(t, s)) : s
                            });
                        return y(l), a
                    }
                }
                return x(),
                    function() {
                        var e, t = [];
                        for (k(t); e = S();) !1 !== e && (t.push(e), k(t));
                        return t
                    }()
            }
        },
        33310: e => {
            "use strict";
            e.exports = e => {
                if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
                const t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }
        },
        86630: (e, t, n) => {
            "use strict";
            var r = n(62854);
            e.exports = function(e, t) {
                return function(e) {
                    return t;

                    function t(t) {
                        var n = t && o(t);
                        return n && i.call(e, n) ? e[n] : null
                    }
                }(function(e) {
                    var t = {};
                    if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
                    return r(e, "definition", n), t;

                    function n(e) {
                        var n = o(e.identifier);
                        i.call(t, n) || (t[n] = e)
                    }
                }(e))
            };
            var i = {}.hasOwnProperty;

            function o(e) {
                return e.toUpperCase()
            }
        },
        52524: (e, t, n) => {
            "use strict";
            e.exports = function(e, t, n) {
                "string" != typeof t && (n = t, t = void 0);
                return function(e) {
                    var t = e || {},
                        n = function(e, t) {
                            var n = -1;
                            for (; ++n < t.length;) h(e, t[n]);
                            return e
                        }({
                            transforms: [],
                            canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                            enter: {
                                autolink: v(pe),
                                autolinkProtocol: $,
                                autolinkEmail: $,
                                atxHeading: v(ae),
                                blockQuote: v(re),
                                characterEscape: $,
                                characterReference: $,
                                codeFenced: v(ie),
                                codeFencedFenceInfo: y,
                                codeFencedFenceMeta: y,
                                codeIndented: v(ie, y),
                                codeText: v(oe, y),
                                codeTextData: $,
                                data: $,
                                codeFlowValue: $,
                                definition: v(ue),
                                definitionDestinationString: y,
                                definitionLabelString: y,
                                definitionTitleString: y,
                                emphasis: v(le),
                                hardBreakEscape: v(se),
                                hardBreakTrailing: v(se),
                                htmlFlow: v(ce, y),
                                htmlFlowData: $,
                                htmlText: v(ce, y),
                                htmlTextData: $,
                                image: v(fe),
                                label: y,
                                link: v(pe),
                                listItem: v(de),
                                listItemValue: C,
                                listOrdered: v(he, w),
                                listUnordered: v(he),
                                paragraph: v(me),
                                reference: Z,
                                referenceString: y,
                                resourceDestinationString: y,
                                resourceTitleString: y,
                                setextHeading: v(ae),
                                strong: v(ge),
                                thematicBreak: v(ye)
                            },
                            exit: {
                                atxHeading: k(),
                                atxHeadingSequence: I,
                                autolink: k(),
                                autolinkEmail: ne,
                                autolinkProtocol: te,
                                blockQuote: k(),
                                characterEscapeValue: R,
                                characterReferenceMarkerHexadecimal: G,
                                characterReferenceMarkerNumeric: G,
                                characterReferenceValue: ee,
                                codeFenced: k(P),
                                codeFencedFence: F,
                                codeFencedFenceInfo: E,
                                codeFencedFenceMeta: O,
                                codeFlowValue: R,
                                codeIndented: k(D),
                                codeText: k(N),
                                codeTextData: R,
                                data: R,
                                definition: k(),
                                definitionDestinationString: M,
                                definitionLabelString: T,
                                definitionTitleString: A,
                                emphasis: k(),
                                hardBreakEscape: k(_),
                                hardBreakTrailing: k(_),
                                htmlFlow: k(H),
                                htmlFlowData: R,
                                htmlText: k(U),
                                htmlTextData: R,
                                image: k(V),
                                label: W,
                                labelText: Y,
                                lineEnding: j,
                                link: k(q),
                                listItem: k(),
                                listOrdered: k(),
                                listUnordered: k(),
                                paragraph: k(),
                                referenceString: J,
                                resourceDestinationString: X,
                                resourceTitleString: K,
                                resource: Q,
                                setextHeading: k(B),
                                setextHeadingLineSequence: z,
                                setextHeadingText: L,
                                strong: k(),
                                thematicBreak: k()
                            }
                        }, t.mdastExtensions || []),
                        a = {};
                    return s;

                    function s(e) {
                        for (var t, r = {
                                type: "root",
                                children: []
                            }, u = [], l = [], a = -1, s = {
                                stack: [r],
                                tokenStack: u,
                                config: n,
                                enter: x,
                                exit: b,
                                buffer: y,
                                resume: S,
                                setData: d,
                                getData: m
                            }; ++a < e.length;) "listOrdered" !== e[a][1].type && "listUnordered" !== e[a][1].type || ("enter" === e[a][0] ? l.push(a) : a = c(e, l.pop(a), a));
                        for (a = -1; ++a < e.length;) t = n[e[a][0]], o.call(t, e[a][1].type) && t[e[a][1].type].call(i({
                            sliceSerialize: e[a][2].sliceSerialize
                        }, s), e[a][1]);
                        if (u.length) throw new Error("Cannot close document, a token (`" + u[u.length - 1].type + "`, " + p({
                            start: u[u.length - 1].start,
                            end: u[u.length - 1].end
                        }) + ") is still open");
                        for (r.position = {
                                start: g(e.length ? e[0][1].start : {
                                    line: 1,
                                    column: 1,
                                    offset: 0
                                }),
                                end: g(e.length ? e[e.length - 2][1].end : {
                                    line: 1,
                                    column: 1,
                                    offset: 0
                                })
                            }, a = -1; ++a < n.transforms.length;) r = n.transforms[a](r) || r;
                        return r
                    }

                    function c(e, t, n) {
                        for (var r, i, o, u, l, a, s, c = t - 1, f = -1, p = !1; ++c <= n;)
                            if ("listUnordered" === (l = e[c])[1].type || "listOrdered" === l[1].type || "blockQuote" === l[1].type ? ("enter" === l[0] ? f++ : f--, s = void 0) : "lineEndingBlank" === l[1].type ? "enter" === l[0] && (!r || s || f || a || (a = c), s = void 0) : "linePrefix" === l[1].type || "listItemValue" === l[1].type || "listItemMarker" === l[1].type || "listItemPrefix" === l[1].type || "listItemPrefixWhitespace" === l[1].type || (s = void 0), !f && "enter" === l[0] && "listItemPrefix" === l[1].type || -1 === f && "exit" === l[0] && ("listUnordered" === l[1].type || "listOrdered" === l[1].type)) {
                                if (r) {
                                    for (i = c, o = void 0; i--;)
                                        if ("lineEnding" === (u = e[i])[1].type || "lineEndingBlank" === u[1].type) {
                                            if ("exit" === u[0]) continue;
                                            o && (e[o][1].type = "lineEndingBlank", p = !0), u[1].type = "lineEnding", o = i
                                        } else if ("linePrefix" !== u[1].type && "blockQuotePrefix" !== u[1].type && "blockQuotePrefixWhitespace" !== u[1].type && "blockQuoteMarker" !== u[1].type && "listItemIndent" !== u[1].type) break;
                                    a && (!o || a < o) && (r._spread = !0), r.end = g(o ? e[o][1].start : l[1].end), e.splice(o || c, 0, ["exit", r, l[2]]), c++, n++
                                }
                                "listItemPrefix" === l[1].type && (r = {
                                    type: "listItem",
                                    _spread: !1,
                                    start: g(l[1].start)
                                }, e.splice(c, 0, ["enter", r, l[2]]), c++, n++, a = void 0, s = !0)
                            } return e[t][1]._spread = p, n
                    }

                    function d(e, t) {
                        a[e] = t
                    }

                    function m(e) {
                        return a[e]
                    }

                    function g(e) {
                        return {
                            line: e.line,
                            column: e.column,
                            offset: e.offset
                        }
                    }

                    function v(e, t) {
                        return n;

                        function n(n) {
                            x.call(this, e(n), n), t && t.call(this, n)
                        }
                    }

                    function y() {
                        this.stack.push({
                            type: "fragment",
                            children: []
                        })
                    }

                    function x(e, t) {
                        return this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push(t), e.position = {
                            start: g(t.start)
                        }, e
                    }

                    function k(e) {
                        return t;

                        function t(t) {
                            e && e.call(this, t), b.call(this, t)
                        }
                    }

                    function b(e) {
                        var t = this.stack.pop(),
                            n = this.tokenStack.pop();
                        if (!n) throw new Error("Cannot close `" + e.type + "` (" + p({
                            start: e.start,
                            end: e.end
                        }) + "): it’s not open");
                        if (n.type !== e.type) throw new Error("Cannot close `" + e.type + "` (" + p({
                            start: e.start,
                            end: e.end
                        }) + "): a different token (`" + n.type + "`, " + p({
                            start: n.start,
                            end: n.end
                        }) + ") is open");
                        return t.position.end = g(e.end), t
                    }

                    function S() {
                        return r(this.stack.pop())
                    }

                    function w() {
                        d("expectingFirstListItemValue", !0)
                    }

                    function C(e) {
                        m("expectingFirstListItemValue") && (this.stack[this.stack.length - 2].start = parseInt(this.sliceSerialize(e), 10), d("expectingFirstListItemValue"))
                    }

                    function E() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].lang = e
                    }

                    function O() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].meta = e
                    }

                    function F() {
                        m("flowCodeInside") || (this.buffer(), d("flowCodeInside", !0))
                    }

                    function P() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), d("flowCodeInside")
                    }

                    function D() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function T(e) {
                        var t = this.resume();
                        this.stack[this.stack.length - 1].label = t, this.stack[this.stack.length - 1].identifier = u(this.sliceSerialize(e)).toLowerCase()
                    }

                    function A() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].title = e
                    }

                    function M() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].url = e
                    }

                    function I(e) {
                        this.stack[this.stack.length - 1].depth || (this.stack[this.stack.length - 1].depth = this.sliceSerialize(e).length)
                    }

                    function L() {
                        d("setextHeadingSlurpLineEnding", !0)
                    }

                    function z(e) {
                        this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
                    }

                    function B() {
                        d("setextHeadingSlurpLineEnding")
                    }

                    function $(e) {
                        var t = this.stack[this.stack.length - 1].children,
                            n = t[t.length - 1];
                        n && "text" === n.type || ((n = ve()).position = {
                            start: g(e.start)
                        }, this.stack[this.stack.length - 1].children.push(n)), this.stack.push(n)
                    }

                    function R(e) {
                        var t = this.stack.pop();
                        t.value += this.sliceSerialize(e), t.position.end = g(e.end)
                    }

                    function j(e) {
                        var t = this.stack[this.stack.length - 1];
                        if (m("atHardBreak")) return t.children[t.children.length - 1].position.end = g(e.end), void d("atHardBreak");
                        !m("setextHeadingSlurpLineEnding") && n.canContainEols.indexOf(t.type) > -1 && ($.call(this, e), R.call(this, e))
                    }

                    function _() {
                        d("atHardBreak", !0)
                    }

                    function H() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function U() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function N() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function q() {
                        var e = this.stack[this.stack.length - 1];
                        m("inReference") ? (e.type += "Reference", e.referenceType = m("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label, delete e.referenceType), d("referenceType")
                    }

                    function V() {
                        var e = this.stack[this.stack.length - 1];
                        m("inReference") ? (e.type += "Reference", e.referenceType = m("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label, delete e.referenceType), d("referenceType")
                    }

                    function Y(e) {
                        this.stack[this.stack.length - 2].identifier = u(this.sliceSerialize(e)).toLowerCase()
                    }

                    function W() {
                        var e = this.stack[this.stack.length - 1],
                            t = this.resume();
                        this.stack[this.stack.length - 1].label = t, d("inReference", !0), "link" === this.stack[this.stack.length - 1].type ? this.stack[this.stack.length - 1].children = e.children : this.stack[this.stack.length - 1].alt = t
                    }

                    function X() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].url = e
                    }

                    function K() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].title = e
                    }

                    function Q() {
                        d("inReference")
                    }

                    function Z() {
                        d("referenceType", "collapsed")
                    }

                    function J(e) {
                        var t = this.resume();
                        this.stack[this.stack.length - 1].label = t, this.stack[this.stack.length - 1].identifier = u(this.sliceSerialize(e)).toLowerCase(), d("referenceType", "full")
                    }

                    function G(e) {
                        d("characterReferenceType", e.type)
                    }

                    function ee(e) {
                        var t, n, r = this.sliceSerialize(e),
                            i = m("characterReferenceType");
                        i ? (t = l(r, "characterReferenceMarkerNumeric" === i ? 10 : 16), d("characterReferenceType")) : t = f(r), (n = this.stack.pop()).value += t, n.position.end = g(e.end)
                    }

                    function te(e) {
                        R.call(this, e), this.stack[this.stack.length - 1].url = this.sliceSerialize(e)
                    }

                    function ne(e) {
                        R.call(this, e), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e)
                    }

                    function re() {
                        return {
                            type: "blockquote",
                            children: []
                        }
                    }

                    function ie() {
                        return {
                            type: "code",
                            lang: null,
                            meta: null,
                            value: ""
                        }
                    }

                    function oe() {
                        return {
                            type: "inlineCode",
                            value: ""
                        }
                    }

                    function ue() {
                        return {
                            type: "definition",
                            identifier: "",
                            label: null,
                            title: null,
                            url: ""
                        }
                    }

                    function le() {
                        return {
                            type: "emphasis",
                            children: []
                        }
                    }

                    function ae() {
                        return {
                            type: "heading",
                            depth: void 0,
                            children: []
                        }
                    }

                    function se() {
                        return {
                            type: "break"
                        }
                    }

                    function ce() {
                        return {
                            type: "html",
                            value: ""
                        }
                    }

                    function fe() {
                        return {
                            type: "image",
                            title: null,
                            url: "",
                            alt: null
                        }
                    }

                    function pe() {
                        return {
                            type: "link",
                            title: null,
                            url: "",
                            children: []
                        }
                    }

                    function he(e) {
                        return {
                            type: "list",
                            ordered: "listOrdered" === e.type,
                            start: null,
                            spread: e._spread,
                            children: []
                        }
                    }

                    function de(e) {
                        return {
                            type: "listItem",
                            spread: e._spread,
                            checked: null,
                            children: []
                        }
                    }

                    function me() {
                        return {
                            type: "paragraph",
                            children: []
                        }
                    }

                    function ge() {
                        return {
                            type: "strong",
                            children: []
                        }
                    }

                    function ve() {
                        return {
                            type: "text",
                            value: ""
                        }
                    }

                    function ye() {
                        return {
                            type: "thematicBreak"
                        }
                    }
                }(n)(c(a(n).document().write(s()(e, t, !0))))
            };
            var r = n(56326),
                i = n(99198),
                o = n(46706),
                u = n(35478),
                l = n(10596),
                a = n(32976),
                s = n(30162),
                c = n(61242),
                f = n(89435),
                p = n(75432);

            function h(e, t) {
                var n, r;
                for (n in t) r = o.call(e, n) ? e[n] : e[n] = {}, "canContainEols" === n || "transforms" === n ? e[n] = [].concat(r, t[n]) : Object.assign(r, t[n])
            }
        },
        39671: (e, t, n) => {
            "use strict";
            e.exports = n(52524)
        },
        56326: e => {
            "use strict";

            function t(e) {
                return e && (e.value || e.alt || e.title || "children" in e && n(e.children) || "length" in e && n(e)) || ""
            }

            function n(e) {
                for (var n = [], r = -1; ++r < e.length;) n[r] = t(e[r]);
                return n.join("")
            }
            e.exports = t
        },
        70729: e => {
            "use strict";
            var t = {};

            function n(e, r, i) {
                var o, u, l, a, s, c = "";
                for ("string" != typeof r && (i = r, r = n.defaultChars), void 0 === i && (i = !0), s = function(e) {
                        var n, r, i = t[e];
                        if (i) return i;
                        for (i = t[e] = [], n = 0; n < 128; n++) r = String.fromCharCode(n), /^[0-9a-z]$/i.test(r) ? i.push(r) : i.push("%" + ("0" + n.toString(16).toUpperCase()).slice(-2));
                        for (n = 0; n < e.length; n++) i[e.charCodeAt(n)] = e[n];
                        return i
                    }(r), o = 0, u = e.length; o < u; o++)
                    if (l = e.charCodeAt(o), i && 37 === l && o + 2 < u && /^[0-9a-f]{2}$/i.test(e.slice(o + 1, o + 3))) c += e.slice(o, o + 3), o += 2;
                    else if (l < 128) c += s[l];
                else if (l >= 55296 && l <= 57343) {
                    if (l >= 55296 && l <= 56319 && o + 1 < u && (a = e.charCodeAt(o + 1)) >= 56320 && a <= 57343) {
                        c += encodeURIComponent(e[o] + e[o + 1]), o++;
                        continue
                    }
                    c += "%EF%BF%BD"
                } else c += encodeURIComponent(e[o]);
                return c
            }
            n.defaultChars = ";/?:@&=+$,-_.!~*'()#", n.componentChars = "-_.!~*'()", e.exports = n
        },
        76734: (e, t, n) => {
            "use strict";
            var r = n(2841)(/[A-Za-z]/);
            e.exports = r
        },
        46712: (e, t, n) => {
            "use strict";
            var r = n(2841)(/[\dA-Za-z]/);
            e.exports = r
        },
        13571: (e, t, n) => {
            "use strict";
            var r = n(2841)(/[#-'*+\--9=?A-Z^-~]/);
            e.exports = r
        },
        89696: e => {
            "use strict";
            e.exports = function(e) {
                return e < 32 || 127 === e
            }
        },
        73977: (e, t, n) => {
            "use strict";
            var r = n(2841)(/\d/);
            e.exports = r
        },
        56238: (e, t, n) => {
            "use strict";
            var r = n(2841)(/[\dA-Fa-f]/);
            e.exports = r
        },
        83074: (e, t, n) => {
            "use strict";
            var r = n(2841)(/[!-/:-@[-`{-~]/);
            e.exports = r
        },
        88367: e => {
            "use strict";
            e.exports = function(e) {
                return e < 0 || 32 === e
            }
        },
        17238: e => {
            "use strict";
            e.exports = function(e) {
                return e < -2
            }
        },
        73654: e => {
            "use strict";
            e.exports = function(e) {
                return -2 === e || -1 === e || 32 === e
            }
        },
        36996: (e, t, n) => {
            "use strict";
            var r = n(76830),
                i = n(2841)(r);
            e.exports = i
        },
        10395: (e, t, n) => {
            "use strict";
            var r = n(2841)(/\s/);
            e.exports = r
        },
        99198: e => {
            "use strict";
            var t = Object.assign;
            e.exports = t
        },
        93267: e => {
            "use strict";
            var t = String.fromCharCode;
            e.exports = t
        },
        46706: e => {
            "use strict";
            var t = {}.hasOwnProperty;
            e.exports = t
        },
        57139: e => {
            "use strict";
            e.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
        },
        16871: e => {
            "use strict";
            e.exports = ["pre", "script", "style", "textarea"]
        },
        21362: e => {
            "use strict";
            var t = [].splice;
            e.exports = t
        },
        76830: e => {
            "use strict";
            e.exports = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
        },
        36274: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(97082),
                i = n(47542),
                o = n(1349),
                u = n(45485),
                l = n(49653),
                a = n(36713),
                s = n(46597),
                c = n(20431),
                f = n(60026),
                p = n(93865),
                h = n(65694),
                d = n(596),
                m = n(76872),
                g = n(28911),
                v = n(31294),
                y = n(36215),
                x = n(60534),
                k = n(92607),
                b = n(46931),
                S = n(15874),
                w = n(37039),
                C = {
                    42: b,
                    43: b,
                    45: b,
                    48: b,
                    49: b,
                    50: b,
                    51: b,
                    52: b,
                    53: b,
                    54: b,
                    55: b,
                    56: b,
                    57: b,
                    62: u
                },
                E = {
                    91: p
                },
                O = {
                    "-2": c,
                    "-1": c,
                    32: c
                },
                F = {
                    35: d,
                    42: w,
                    45: [S, w],
                    60: m,
                    61: S,
                    95: w,
                    96: s,
                    126: s
                },
                P = {
                    38: a,
                    92: l
                },
                D = {
                    "-5": k,
                    "-4": k,
                    "-3": k,
                    33: y,
                    38: a,
                    42: i,
                    60: [o, g],
                    91: x,
                    92: [h, l],
                    93: v,
                    95: i,
                    96: f
                },
                T = {
                    null: [i, r.resolver]
                };
            t.contentInitial = E, t.disable = {
                null: []
            }, t.document = C, t.flow = F, t.flowInitial = O, t.insideSpan = T, t.string = P, t.text = D
        },
        13745: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(17238),
                i = n(52928),
                o = function(e) {
                    var t, n = e.attempt(this.parser.constructs.contentInitial, (function(t) {
                        if (null === t) return void e.consume(t);
                        return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i(e, n, "linePrefix")
                    }), (function(t) {
                        return e.enter("paragraph"), o(t)
                    }));
                    return n;

                    function o(n) {
                        var r = e.enter("chunkText", {
                            contentType: "text",
                            previous: t
                        });
                        return t && (t.next = r), t = r, u(n)
                    }

                    function u(t) {
                        return null === t ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(t)) : r(t) ? (e.consume(t), e.exit("chunkText"), o) : (e.consume(t), u)
                    }
                };
            t.tokenize = o
        },
        14201: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(17238),
                i = n(52928),
                o = n(66532),
                u = function(e) {
                    var t, n, i, u = this,
                        s = [],
                        c = 0,
                        f = {
                            tokenize: function(e, r) {
                                var i = 0;
                                return t = {}, c;

                                function c(r) {
                                    return i < s.length ? (u.containerState = s[i][1], e.attempt(s[i][0].continuation, f, p)(r)) : n.currentConstruct && n.currentConstruct.concrete ? (t.flowContinue = !0, m(r)) : (u.interrupt = n.currentConstruct && n.currentConstruct.interruptible, u.containerState = {}, e.attempt(l, d, m)(r))
                                }

                                function f(e) {
                                    return i++, u.containerState._closeFlow ? d(e) : c(e)
                                }

                                function p(t) {
                                    return n.currentConstruct && n.currentConstruct.lazy ? (u.containerState = {}, e.attempt(l, d, e.attempt(a, d, e.check(o, d, h)))(t)) : d(t)
                                }

                                function h(e) {
                                    return i = s.length, t.lazy = !0, t.flowContinue = !0, m(e)
                                }

                                function d(e) {
                                    return t.flowEnd = !0, m(e)
                                }

                                function m(e) {
                                    return t.continued = i, u.interrupt = u.containerState = void 0, r(e)
                                }
                            },
                            partial: !0
                        };
                    return p;

                    function p(t) {
                        return c < s.length ? (u.containerState = s[c][1], e.attempt(s[c][0].continuation, h, d)(t)) : d(t)
                    }

                    function h(e) {
                        return c++, p(e)
                    }

                    function d(r) {
                        return t && t.flowContinue ? g(r) : (u.interrupt = n && n.currentConstruct && n.currentConstruct.interruptible, u.containerState = {}, e.attempt(l, m, g)(r))
                    }

                    function m(e) {
                        return s.push([u.currentConstruct, u.containerState]), u.containerState = void 0, d(e)
                    }

                    function g(t) {
                        return null === t ? (k(0, !0), void e.consume(t)) : (n = n || u.parser.flow(u.now()), e.enter("chunkFlow", {
                            contentType: "flow",
                            previous: i,
                            _tokenizer: n
                        }), v(t))
                    }

                    function v(t) {
                        return null === t ? (x(e.exit("chunkFlow")), g(t)) : r(t) ? (e.consume(t), x(e.exit("chunkFlow")), e.check(f, y)) : (e.consume(t), v)
                    }

                    function y(e) {
                        return k(t.continued, t && t.flowEnd), c = 0, p(e)
                    }

                    function x(e) {
                        i && (i.next = e), i = e, n.lazy = t && t.lazy, n.defineSkip(e.start), n.write(u.sliceStream(e))
                    }

                    function k(t, r) {
                        var o = s.length;
                        for (n && r && (n.write([null]), i = n = void 0); o-- > t;) u.containerState = s[o][1], s[o][0].exit.call(u, e);
                        s.length = t
                    }
                },
                l = {
                    tokenize: function(e, t, n) {
                        return i(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                    }
                },
                a = {
                    tokenize: function(e, t, n) {
                        return i(e, e.lazy(this.parser.constructs.flow, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                    }
                };
            t.tokenize = u
        },
        22871: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(64590),
                i = n(52928),
                o = n(66532),
                u = function(e) {
                    var t = this,
                        n = e.attempt(o, (function(r) {
                            if (null === r) return void e.consume(r);
                            return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
                        }), e.attempt(this.parser.constructs.flowInitial, u, i(e, e.attempt(this.parser.constructs.flow, u, e.attempt(r, u)), "linePrefix")));
                    return n;

                    function u(r) {
                        if (null !== r) return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
                        e.consume(r)
                    }
                };
            t.tokenize = u
        },
        97082: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(99198),
                i = n(75923),
                o = a("text"),
                u = a("string"),
                l = {
                    resolveAll: s()
                };

            function a(e) {
                return {
                    tokenize: function(t) {
                        var n = this,
                            r = this.parser.constructs[e],
                            i = t.attempt(r, o, u);
                        return o;

                        function o(e) {
                            return a(e) ? i(e) : u(e)
                        }

                        function u(e) {
                            if (null !== e) return t.enter("data"), t.consume(e), l;
                            t.consume(e)
                        }

                        function l(e) {
                            return a(e) ? (t.exit("data"), i(e)) : (t.consume(e), l)
                        }

                        function a(e) {
                            var t = r[e],
                                i = -1;
                            if (null === e) return !0;
                            if (t)
                                for (; ++i < t.length;)
                                    if (!t[i].previous || t[i].previous.call(n, n.previous)) return !0
                        }
                    },
                    resolveAll: s("text" === e ? c : void 0)
                }
            }

            function s(e) {
                return function(t, n) {
                    var r, i = -1;
                    for (; ++i <= t.length;) void 0 === r ? t[i] && "data" === t[i][1].type && (r = i, i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end, t.splice(r + 2, i - r - 2), i = r + 2), r = void 0);
                    return e ? e(t, n) : t
                }
            }

            function c(e, t) {
                for (var n, o, u, l, a, s, c, f, p = -1; ++p <= e.length;)
                    if ((p === e.length || "lineEnding" === e[p][1].type) && "data" === e[p - 1][1].type) {
                        for (o = e[p - 1][1], l = (n = t.sliceStream(o)).length, a = -1, s = 0, c = void 0; l--;)
                            if ("string" == typeof(u = n[l])) {
                                for (a = u.length; 32 === u.charCodeAt(a - 1);) s++, a--;
                                if (a) break;
                                a = -1
                            } else if (-2 === u) c = !0, s++;
                        else if (-1 !== u) {
                            l++;
                            break
                        }
                        s && (f = {
                            type: p === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
                            start: {
                                line: o.end.line,
                                column: o.end.column - s,
                                offset: o.end.offset - s,
                                _index: o.start._index + l,
                                _bufferIndex: l ? a : o.start._bufferIndex + a
                            },
                            end: i(o.end)
                        }, o.end = i(f.start), o.start.offset === o.end.offset ? r(o, f) : (e.splice(p, 0, ["enter", f, t], ["exit", f, t]), p += 2)), p++
                    } return e
            }
            t.resolver = l, t.string = u, t.text = o
        },
        32976: (e, t, n) => {
            "use strict";
            var r = n(13745),
                i = n(14201),
                o = n(22871),
                u = n(97082),
                l = n(12952),
                a = n(21388),
                s = n(28180),
                c = n(36274);
            e.exports = function(e) {
                var t = {
                    defined: [],
                    constructs: l([c].concat(s((e || {}).extensions))),
                    content: n(r),
                    document: n(i),
                    flow: n(o),
                    string: n(u.string),
                    text: n(u.text)
                };
                return t;

                function n(e) {
                    return function(n) {
                        return a(t, e, n)
                    }
                }
            }
        },
        61242: (e, t, n) => {
            "use strict";
            var r = n(84423);
            e.exports = function(e) {
                for (; !r(e););
                return e
            }
        },
        30162: e => {
            "use strict";
            var t = /[\0\t\n\r]/g;
            e.exports = function() {
                var e, n = !0,
                    r = 1,
                    i = "";
                return function(o, u, l) {
                    var a, s, c, f, p, h = [];
                    o = i + o.toString(u), c = 0, i = "", n && (65279 === o.charCodeAt(0) && c++, n = void 0);
                    for (; c < o.length;) {
                        if (t.lastIndex = c, f = (a = t.exec(o)) ? a.index : o.length, p = o.charCodeAt(f), !a) {
                            i = o.slice(c);
                            break
                        }
                        if (10 === p && c === f && e) h.push(-3), e = void 0;
                        else if (e && (h.push(-5), e = void 0), c < f && (h.push(o.slice(c, f)), r += f - c), 0 === p) h.push(65533), r++;
                        else if (9 === p)
                            for (s = 4 * Math.ceil(r / 4), h.push(-2); r++ < s;) h.push(-1);
                        else 10 === p ? (h.push(-4), r = 1) : (e = !0, r = 1);
                        c = f + 1
                    }
                    l && (e && h.push(-5), i && h.push(i), h.push(null));
                    return h
                }
            }
        },
        47542: (e, t, n) => {
            "use strict";
            var r = n(78811),
                i = n(56808),
                o = n(19444),
                u = n(15644),
                l = n(58280),
                a = n(75923),
                s = {
                    name: "attention",
                    tokenize: function(e, t) {
                        var n, r = o(this.previous);
                        return function(t) {
                            return e.enter("attentionSequence"), n = t, i(t)
                        };

                        function i(u) {
                            var l, a, s, c;
                            return u === n ? (e.consume(u), i) : (l = e.exit("attentionSequence"), s = !(a = o(u)) || 2 === a && r, c = !r || 2 === r && a, l._open = 42 === n ? s : s && (r || !c), l._close = 42 === n ? c : c && (a || !s), t(u))
                        }
                    },
                    resolveAll: function(e, t) {
                        var n, o, s, c, f, p, h, d, m = -1;
                        for (; ++m < e.length;)
                            if ("enter" === e[m][0] && "attentionSequence" === e[m][1].type && e[m][1]._close)
                                for (n = m; n--;)
                                    if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[m][1]).charCodeAt(0)) {
                                        if ((e[n][1]._close || e[m][1]._open) && (e[m][1].end.offset - e[m][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[m][1].end.offset - e[m][1].start.offset) % 3)) continue;
                                        c = {
                                            type: (p = e[n][1].end.offset - e[n][1].start.offset > 1 && e[m][1].end.offset - e[m][1].start.offset > 1 ? 2 : 1) > 1 ? "strongSequence" : "emphasisSequence",
                                            start: u(a(e[n][1].end), -p),
                                            end: a(e[n][1].end)
                                        }, f = {
                                            type: p > 1 ? "strongSequence" : "emphasisSequence",
                                            start: a(e[m][1].start),
                                            end: u(a(e[m][1].start), p)
                                        }, s = {
                                            type: p > 1 ? "strongText" : "emphasisText",
                                            start: a(e[n][1].end),
                                            end: a(e[m][1].start)
                                        }, o = {
                                            type: p > 1 ? "strong" : "emphasis",
                                            start: a(c.start),
                                            end: a(f.end)
                                        }, e[n][1].end = a(c.start), e[m][1].start = a(f.end), h = [], e[n][1].end.offset - e[n][1].start.offset && (h = r(h, [
                                            ["enter", e[n][1], t],
                                            ["exit", e[n][1], t]
                                        ])), h = r(h, [
                                            ["enter", o, t],
                                            ["enter", c, t],
                                            ["exit", c, t],
                                            ["enter", s, t]
                                        ]), h = r(h, l(t.parser.constructs.insideSpan.null, e.slice(n + 1, m), t)), h = r(h, [
                                            ["exit", s, t],
                                            ["enter", f, t],
                                            ["exit", f, t],
                                            ["exit", o, t]
                                        ]), e[m][1].end.offset - e[m][1].start.offset ? (d = 2, h = r(h, [
                                            ["enter", e[m][1], t],
                                            ["exit", e[m][1], t]
                                        ])) : d = 0, i(e, n - 1, m - n + 3, h), m = n + h.length - d - 2;
                                        break
                                    } m = -1;
                        for (; ++m < e.length;) "attentionSequence" === e[m][1].type && (e[m][1].type = "data");
                        return e
                    }
                };
            e.exports = s
        },
        1349: (e, t, n) => {
            "use strict";
            var r = n(76734),
                i = n(46712),
                o = n(13571),
                u = n(89696),
                l = {
                    name: "autolink",
                    tokenize: function(e, t, n) {
                        var l = 1;
                        return function(t) {
                            return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a
                        };

                        function a(t) {
                            return r(t) ? (e.consume(t), s) : o(t) ? p(t) : n(t)
                        }

                        function s(e) {
                            return 43 === e || 45 === e || 46 === e || i(e) ? c(e) : p(e)
                        }

                        function c(t) {
                            return 58 === t ? (e.consume(t), f) : (43 === t || 45 === t || 46 === t || i(t)) && l++ < 32 ? (e.consume(t), c) : p(t)
                        }

                        function f(t) {
                            return 62 === t ? (e.exit("autolinkProtocol"), g(t)) : 32 === t || 60 === t || u(t) ? n(t) : (e.consume(t), f)
                        }

                        function p(t) {
                            return 64 === t ? (e.consume(t), l = 0, h) : o(t) ? (e.consume(t), p) : n(t)
                        }

                        function h(e) {
                            return i(e) ? d(e) : n(e)
                        }

                        function d(t) {
                            return 46 === t ? (e.consume(t), l = 0, h) : 62 === t ? (e.exit("autolinkProtocol").type = "autolinkEmail", g(t)) : m(t)
                        }

                        function m(t) {
                            return (45 === t || i(t)) && l++ < 63 ? (e.consume(t), 45 === t ? m : d) : n(t)
                        }

                        function g(n) {
                            return e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t
                        }
                    }
                };
            e.exports = l
        },
        45485: (e, t, n) => {
            "use strict";
            var r = n(73654),
                i = n(52928),
                o = {
                    name: "blockQuote",
                    tokenize: function(e, t, n) {
                        var i = this;
                        return function(t) {
                            if (62 === t) return i.containerState.open || (e.enter("blockQuote", {
                                _container: !0
                            }), i.containerState.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), o;
                            return n(t)
                        };

                        function o(n) {
                            return r(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n))
                        }
                    },
                    continuation: {
                        tokenize: function(e, t, n) {
                            return i(e, e.attempt(o, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                        }
                    },
                    exit: function(e) {
                        e.exit("blockQuote")
                    }
                };
            e.exports = o
        },
        49653: (e, t, n) => {
            "use strict";
            var r = n(83074),
                i = {
                    name: "characterEscape",
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i
                        };

                        function i(i) {
                            return r(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i)
                        }
                    }
                };
            e.exports = i
        },
        36713: (e, t, n) => {
            "use strict";
            var r = n(89435),
                i = n(46712),
                o = n(73977),
                u = n(56238);

            function l(e) {
                return e && "object" == typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var a = l(r),
                s = {
                    name: "characterReference",
                    tokenize: function(e, t, n) {
                        var r, l, s = this,
                            c = 0;
                        return function(t) {
                            return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), f
                        };

                        function f(t) {
                            return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), p) : (e.enter("characterReferenceValue"), r = 31, l = i, h(t))
                        }

                        function p(t) {
                            return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, l = u, h) : (e.enter("characterReferenceValue"), r = 7, l = o, h(t))
                        }

                        function h(o) {
                            var u;
                            return 59 === o && c ? (u = e.exit("characterReferenceValue"), l !== i || a.default(s.sliceSerialize(u)) ? (e.enter("characterReferenceMarker"), e.consume(o), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(o)) : l(o) && c++ < r ? (e.consume(o), h) : n(o)
                        }
                    }
                };
            e.exports = s
        },
        46597: (e, t, n) => {
            "use strict";
            var r = n(17238),
                i = n(88367),
                o = n(15096),
                u = n(52928),
                l = {
                    name: "codeFenced",
                    tokenize: function(e, t, n) {
                        var l, a = this,
                            s = {
                                tokenize: function(e, t, n) {
                                    var i = 0;
                                    return u(e, o, "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);

                                    function o(t) {
                                        return e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), a(t)
                                    }

                                    function a(t) {
                                        return t === l ? (e.consume(t), i++, a) : i < f ? n(t) : (e.exit("codeFencedFenceSequence"), u(e, s, "whitespace")(t))
                                    }

                                    function s(i) {
                                        return null === i || r(i) ? (e.exit("codeFencedFence"), t(i)) : n(i)
                                    }
                                },
                                partial: !0
                            },
                            c = o(this.events, "linePrefix"),
                            f = 0;
                        return function(t) {
                            return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), l = t, p(t)
                        };

                        function p(t) {
                            return t === l ? (e.consume(t), f++, p) : (e.exit("codeFencedFenceSequence"), f < 3 ? n(t) : u(e, h, "whitespace")(t))
                        }

                        function h(t) {
                            return null === t || r(t) ? v(t) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
                                contentType: "string"
                            }), d(t))
                        }

                        function d(t) {
                            return null === t || i(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), u(e, m, "whitespace")(t)) : 96 === t && t === l ? n(t) : (e.consume(t), d)
                        }

                        function m(t) {
                            return null === t || r(t) ? v(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
                                contentType: "string"
                            }), g(t))
                        }

                        function g(t) {
                            return null === t || r(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), v(t)) : 96 === t && t === l ? n(t) : (e.consume(t), g)
                        }

                        function v(n) {
                            return e.exit("codeFencedFence"), a.interrupt ? t(n) : y(n)
                        }

                        function y(t) {
                            return null === t ? k(t) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), e.attempt(s, k, c ? u(e, y, "linePrefix", c + 1) : y)) : (e.enter("codeFlowValue"), x(t))
                        }

                        function x(t) {
                            return null === t || r(t) ? (e.exit("codeFlowValue"), y(t)) : (e.consume(t), x)
                        }

                        function k(n) {
                            return e.exit("codeFenced"), t(n)
                        }
                    },
                    concrete: !0
                };
            e.exports = l
        },
        20431: (e, t, n) => {
            "use strict";
            var r = n(17238),
                i = n(56808),
                o = n(15096),
                u = n(52928),
                l = {
                    name: "codeIndented",
                    tokenize: function(e, t, n) {
                        return e.attempt(a, i, n);

                        function i(n) {
                            return null === n ? t(n) : r(n) ? e.attempt(a, i, t)(n) : (e.enter("codeFlowValue"), o(n))
                        }

                        function o(t) {
                            return null === t || r(t) ? (e.exit("codeFlowValue"), i(t)) : (e.consume(t), o)
                        }
                    },
                    resolve: function(e, t) {
                        var n = {
                            type: "codeIndented",
                            start: e[0][1].start,
                            end: e[e.length - 1][1].end
                        };
                        return i(e, 0, 0, [
                            ["enter", n, t]
                        ]), i(e, e.length, 0, [
                            ["exit", n, t]
                        ]), e
                    }
                },
                a = {
                    tokenize: function(e, t, n) {
                        var i = this;
                        return u(e, (function l(a) {
                            if (r(a)) return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), u(e, l, "linePrefix", 5);
                            return o(i.events, "linePrefix") < 4 ? n(a) : t(a)
                        }), "linePrefix", 5)
                    },
                    partial: !0
                };
            e.exports = l
        },
        60026: (e, t, n) => {
            "use strict";
            var r = n(17238),
                i = {
                    name: "codeText",
                    tokenize: function(e, t, n) {
                        var i, o, u = 0;
                        return function(t) {
                            return e.enter("codeText"), e.enter("codeTextSequence"), l(t)
                        };

                        function l(t) {
                            return 96 === t ? (e.consume(t), u++, l) : (e.exit("codeTextSequence"), a(t))
                        }

                        function a(t) {
                            return null === t ? n(t) : 96 === t ? (o = e.enter("codeTextSequence"), i = 0, c(t)) : 32 === t ? (e.enter("space"), e.consume(t), e.exit("space"), a) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : (e.enter("codeTextData"), s(t))
                        }

                        function s(t) {
                            return null === t || 32 === t || 96 === t || r(t) ? (e.exit("codeTextData"), a(t)) : (e.consume(t), s)
                        }

                        function c(n) {
                            return 96 === n ? (e.consume(n), i++, c) : i === u ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (o.type = "codeTextData", s(n))
                        }
                    },
                    resolve: function(e) {
                        var t, n, r = e.length - 4,
                            i = 3;
                        if (!("lineEnding" !== e[i][1].type && "space" !== e[i][1].type || "lineEnding" !== e[r][1].type && "space" !== e[r][1].type))
                            for (t = i; ++t < r;)
                                if ("codeTextData" === e[t][1].type) {
                                    e[r][1].type = e[i][1].type = "codeTextPadding", i += 2, r -= 2;
                                    break
                                } t = i - 1, r++;
                        for (; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : t !== r && "lineEnding" !== e[t][1].type || (e[n][1].type = "codeTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
                        return e
                    },
                    previous: function(e) {
                        return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
                    }
                };
            e.exports = i
        },
        64590: (e, t, n) => {
            "use strict";
            var r = n(17238),
                i = n(15096),
                o = n(84423),
                u = n(52928),
                l = {
                    tokenize: function(e, t) {
                        var n;
                        return function(t) {
                            return e.enter("content"), n = e.enter("chunkContent", {
                                contentType: "content"
                            }), i(t)
                        };

                        function i(t) {
                            return null === t ? o(t) : r(t) ? e.check(a, u, o)(t) : (e.consume(t), i)
                        }

                        function o(n) {
                            return e.exit("chunkContent"), e.exit("content"), t(n)
                        }

                        function u(t) {
                            return e.consume(t), e.exit("chunkContent"), n = n.next = e.enter("chunkContent", {
                                contentType: "content",
                                previous: n
                            }), i
                        }
                    },
                    resolve: function(e) {
                        return o(e), e
                    },
                    interruptible: !0,
                    lazy: !0
                },
                a = {
                    tokenize: function(e, t, n) {
                        var o = this;
                        return function(t) {
                            return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), u(e, l, "linePrefix")
                        };

                        function l(u) {
                            return null === u || r(u) ? n(u) : o.parser.constructs.disable.null.indexOf("codeIndented") > -1 || i(o.events, "linePrefix") < 4 ? e.interrupt(o.parser.constructs.flow, n, t)(u) : t(u)
                        }
                    },
                    partial: !0
                };
            e.exports = l
        },
        93865: (e, t, n) => {
            "use strict";
            var r = n(17238),
                i = n(88367),
                o = n(35478),
                u = n(38229),
                l = n(97154),
                a = n(52928),
                s = n(31056),
                c = n(59283),
                f = {
                    name: "definition",
                    tokenize: function(e, t, n) {
                        var i, c = this;
                        return function(t) {
                            return e.enter("definition"), l.call(c, e, f, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t)
                        };

                        function f(t) {
                            return i = o(c.sliceSerialize(c.events[c.events.length - 1][1]).slice(1, -1)), 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), s(e, u(e, e.attempt(p, a(e, h, "whitespace"), a(e, h, "whitespace")), n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : n(t)
                        }

                        function h(o) {
                            return null === o || r(o) ? (e.exit("definition"), c.parser.defined.indexOf(i) < 0 && c.parser.defined.push(i), t(o)) : n(o)
                        }
                    }
                },
                p = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return i(t) ? s(e, o)(t) : n(t)
                        };

                        function o(t) {
                            return 34 === t || 39 === t || 40 === t ? c(e, a(e, u, "whitespace"), n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t) : n(t)
                        }

                        function u(e) {
                            return null === e || r(e) ? t(e) : n(e)
                        }
                    },
                    partial: !0
                };
            e.exports = f
        },
        38229: (e, t, n) => {
            "use strict";
            var r = n(89696),
                i = n(88367),
                o = n(17238);
            e.exports = function(e, t, n, u, l, a, s, c, f) {
                var p = f || 1 / 0,
                    h = 0;
                return function(t) {
                    if (60 === t) return e.enter(u), e.enter(l), e.enter(a), e.consume(t), e.exit(a), d;
                    if (r(t) || 41 === t) return n(t);
                    return e.enter(u), e.enter(s), e.enter(c), e.enter("chunkString", {
                        contentType: "string"
                    }), v(t)
                };

                function d(n) {
                    return 62 === n ? (e.enter(a), e.consume(n), e.exit(a), e.exit(l), e.exit(u), t) : (e.enter(c), e.enter("chunkString", {
                        contentType: "string"
                    }), m(n))
                }

                function m(t) {
                    return 62 === t ? (e.exit("chunkString"), e.exit(c), d(t)) : null === t || 60 === t || o(t) ? n(t) : (e.consume(t), 92 === t ? g : m)
                }

                function g(t) {
                    return 60 === t || 62 === t || 92 === t ? (e.consume(t), m) : m(t)
                }

                function v(o) {
                    return 40 === o ? ++h > p ? n(o) : (e.consume(o), v) : 41 === o ? h-- ? (e.consume(o), v) : (e.exit("chunkString"), e.exit(c), e.exit(s), e.exit(u), t(o)) : null === o || i(o) ? h ? n(o) : (e.exit("chunkString"), e.exit(c), e.exit(s), e.exit(u), t(o)) : r(o) ? n(o) : (e.consume(o), 92 === o ? y : v)
                }

                function y(t) {
                    return 40 === t || 41 === t || 92 === t ? (e.consume(t), v) : v(t)
                }
            }
        },
        97154: (e, t, n) => {
            "use strict";
            var r = n(17238),
                i = n(73654);
            e.exports = function(e, t, n, o, u, l) {
                var a, s = this,
                    c = 0;
                return function(t) {
                    return e.enter(o), e.enter(u), e.consume(t), e.exit(u), e.enter(l), f
                };

                function f(i) {
                    return null === i || 91 === i || 93 === i && !a || 94 === i && !c && "_hiddenFootnoteSupport" in s.parser.constructs || c > 999 ? n(i) : 93 === i ? (e.exit(l), e.enter(u), e.consume(i), e.exit(u), e.exit(o), t) : r(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), f) : (e.enter("chunkString", {
                        contentType: "string"
                    }), p(i))
                }

                function p(t) {
                    return null === t || 91 === t || 93 === t || r(t) || c++ > 999 ? (e.exit("chunkString"), f(t)) : (e.consume(t), a = a || !i(t), 92 === t ? h : p)
                }

                function h(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), c++, p) : p(t)
                }
            }
        },
        52928: (e, t, n) => {
            "use strict";
            var r = n(73654);
            e.exports = function(e, t, n, i) {
                var o = i ? i - 1 : 1 / 0,
                    u = 0;
                return function(i) {
                    if (r(i)) return e.enter(n), l(i);
                    return t(i)
                };

                function l(i) {
                    return r(i) && u++ < o ? (e.consume(i), l) : (e.exit(n), t(i))
                }
            }
        },
        59283: (e, t, n) => {
            "use strict";
            var r = n(17238),
                i = n(52928);
            e.exports = function(e, t, n, o, u, l) {
                var a;
                return function(t) {
                    return e.enter(o), e.enter(u), e.consume(t), e.exit(u), a = 40 === t ? 41 : t, s
                };

                function s(n) {
                    return n === a ? (e.enter(u), e.consume(n), e.exit(u), e.exit(o), t) : (e.enter(l), c(n))
                }

                function c(t) {
                    return t === a ? (e.exit(l), s(a)) : null === t ? n(t) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i(e, c, "linePrefix")) : (e.enter("chunkString", {
                        contentType: "string"
                    }), f(t))
                }

                function f(t) {
                    return t === a || null === t || r(t) ? (e.exit("chunkString"), c(t)) : (e.consume(t), 92 === t ? p : f)
                }

                function p(t) {
                    return t === a || 92 === t ? (e.consume(t), f) : f(t)
                }
            }
        },
        31056: (e, t, n) => {
            "use strict";
            var r = n(17238),
                i = n(73654),
                o = n(52928);
            e.exports = function(e, t) {
                var n;
                return function u(l) {
                    if (r(l)) return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), n = !0, u;
                    if (i(l)) return o(e, u, n ? "linePrefix" : "lineSuffix")(l);
                    return t(l)
                }
            }
        },
        65694: (e, t, n) => {
            "use strict";
            var r = n(17238),
                i = {
                    name: "hardBreakEscape",
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(t), i
                        };

                        function i(i) {
                            return r(i) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(i)) : n(i)
                        }
                    }
                };
            e.exports = i
        },
        596: (e, t, n) => {
            "use strict";
            var r = n(17238),
                i = n(88367),
                o = n(73654),
                u = n(56808),
                l = n(52928),
                a = {
                    name: "headingAtx",
                    tokenize: function(e, t, n) {
                        var u = this,
                            a = 0;
                        return function(t) {
                            return e.enter("atxHeading"), e.enter("atxHeadingSequence"), s(t)
                        };

                        function s(r) {
                            return 35 === r && a++ < 6 ? (e.consume(r), s) : null === r || i(r) ? (e.exit("atxHeadingSequence"), u.interrupt ? t(r) : c(r)) : n(r)
                        }

                        function c(n) {
                            return 35 === n ? (e.enter("atxHeadingSequence"), f(n)) : null === n || r(n) ? (e.exit("atxHeading"), t(n)) : o(n) ? l(e, c, "whitespace")(n) : (e.enter("atxHeadingText"), p(n))
                        }

                        function f(t) {
                            return 35 === t ? (e.consume(t), f) : (e.exit("atxHeadingSequence"), c(t))
                        }

                        function p(t) {
                            return null === t || 35 === t || i(t) ? (e.exit("atxHeadingText"), c(t)) : (e.consume(t), p)
                        }
                    },
                    resolve: function(e, t) {
                        var n, r, i = e.length - 2,
                            o = 3;
                        "whitespace" === e[o][1].type && (o += 2);
                        i - 2 > o && "whitespace" === e[i][1].type && (i -= 2);
                        "atxHeadingSequence" === e[i][1].type && (o === i - 1 || i - 4 > o && "whitespace" === e[i - 2][1].type) && (i -= o + 1 === i ? 2 : 4);
                        i > o && (n = {
                            type: "atxHeadingText",
                            start: e[o][1].start,
                            end: e[i][1].end
                        }, r = {
                            type: "chunkText",
                            start: e[o][1].start,
                            end: e[i][1].end,
                            contentType: "text"
                        }, u(e, o, i - o + 1, [
                            ["enter", n, t],
                            ["enter", r, t],
                            ["exit", r, t],
                            ["exit", n, t]
                        ]));
                        return e
                    }
                };
            e.exports = a
        },
        76872: (e, t, n) => {
            "use strict";
            var r = n(76734),
                i = n(46712),
                o = n(17238),
                u = n(88367),
                l = n(73654),
                a = n(93267),
                s = n(57139),
                c = n(16871),
                f = n(66532),
                p = {
                    name: "htmlFlow",
                    tokenize: function(e, t, n) {
                        var f, p, d, m, g, v = this;
                        return function(t) {
                            return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), y
                        };

                        function y(i) {
                            return 33 === i ? (e.consume(i), x) : 47 === i ? (e.consume(i), S) : 63 === i ? (e.consume(i), f = 3, v.interrupt ? t : U) : r(i) ? (e.consume(i), d = a(i), p = !0, w) : n(i)
                        }

                        function x(i) {
                            return 45 === i ? (e.consume(i), f = 2, k) : 91 === i ? (e.consume(i), f = 5, d = "CDATA[", m = 0, b) : r(i) ? (e.consume(i), f = 4, v.interrupt ? t : U) : n(i)
                        }

                        function k(r) {
                            return 45 === r ? (e.consume(r), v.interrupt ? t : U) : n(r)
                        }

                        function b(r) {
                            return r === d.charCodeAt(m++) ? (e.consume(r), m === d.length ? v.interrupt ? t : z : b) : n(r)
                        }

                        function S(t) {
                            return r(t) ? (e.consume(t), d = a(t), w) : n(t)
                        }

                        function w(r) {
                            return null === r || 47 === r || 62 === r || u(r) ? 47 !== r && p && c.indexOf(d.toLowerCase()) > -1 ? (f = 1, v.interrupt ? t(r) : z(r)) : s.indexOf(d.toLowerCase()) > -1 ? (f = 6, 47 === r ? (e.consume(r), C) : v.interrupt ? t(r) : z(r)) : (f = 7, v.interrupt ? n(r) : p ? O(r) : E(r)) : 45 === r || i(r) ? (e.consume(r), d += a(r), w) : n(r)
                        }

                        function C(r) {
                            return 62 === r ? (e.consume(r), v.interrupt ? t : z) : n(r)
                        }

                        function E(t) {
                            return l(t) ? (e.consume(t), E) : I(t)
                        }

                        function O(t) {
                            return 47 === t ? (e.consume(t), I) : 58 === t || 95 === t || r(t) ? (e.consume(t), F) : l(t) ? (e.consume(t), O) : I(t)
                        }

                        function F(t) {
                            return 45 === t || 46 === t || 58 === t || 95 === t || i(t) ? (e.consume(t), F) : P(t)
                        }

                        function P(t) {
                            return 61 === t ? (e.consume(t), D) : l(t) ? (e.consume(t), P) : O(t)
                        }

                        function D(t) {
                            return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), g = t, T) : l(t) ? (e.consume(t), D) : (g = void 0, A(t))
                        }

                        function T(t) {
                            return t === g ? (e.consume(t), M) : null === t || o(t) ? n(t) : (e.consume(t), T)
                        }

                        function A(t) {
                            return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t || u(t) ? P(t) : (e.consume(t), A)
                        }

                        function M(e) {
                            return 47 === e || 62 === e || l(e) ? O(e) : n(e)
                        }

                        function I(t) {
                            return 62 === t ? (e.consume(t), L) : n(t)
                        }

                        function L(t) {
                            return l(t) ? (e.consume(t), L) : null === t || o(t) ? z(t) : n(t)
                        }

                        function z(t) {
                            return 45 === t && 2 === f ? (e.consume(t), R) : 60 === t && 1 === f ? (e.consume(t), j) : 62 === t && 4 === f ? (e.consume(t), N) : 63 === t && 3 === f ? (e.consume(t), U) : 93 === t && 5 === f ? (e.consume(t), H) : !o(t) || 6 !== f && 7 !== f ? null === t || o(t) ? B(t) : (e.consume(t), z) : e.check(h, N, B)(t)
                        }

                        function B(t) {
                            return e.exit("htmlFlowData"), $(t)
                        }

                        function $(t) {
                            return null === t ? q(t) : o(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), $) : (e.enter("htmlFlowData"), z(t))
                        }

                        function R(t) {
                            return 45 === t ? (e.consume(t), U) : z(t)
                        }

                        function j(t) {
                            return 47 === t ? (e.consume(t), d = "", _) : z(t)
                        }

                        function _(t) {
                            return 62 === t && c.indexOf(d.toLowerCase()) > -1 ? (e.consume(t), N) : r(t) && d.length < 8 ? (e.consume(t), d += a(t), _) : z(t)
                        }

                        function H(t) {
                            return 93 === t ? (e.consume(t), U) : z(t)
                        }

                        function U(t) {
                            return 62 === t ? (e.consume(t), N) : z(t)
                        }

                        function N(t) {
                            return null === t || o(t) ? (e.exit("htmlFlowData"), q(t)) : (e.consume(t), N)
                        }

                        function q(n) {
                            return e.exit("htmlFlow"), t(n)
                        }
                    },
                    resolveTo: function(e) {
                        var t = e.length;
                        for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
                        t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2));
                        return e
                    },
                    concrete: !0
                },
                h = {
                    tokenize: function(e, t, n) {
                        return function(r) {
                            return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), e.attempt(f, t, n)
                        }
                    },
                    partial: !0
                };
            e.exports = p
        },
        28911: (e, t, n) => {
            "use strict";
            var r = n(76734),
                i = n(46712),
                o = n(17238),
                u = n(88367),
                l = n(73654),
                a = n(52928),
                s = {
                    name: "htmlText",
                    tokenize: function(e, t, n) {
                        var s, c, f, p, h = this;
                        return function(t) {
                            return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), d
                        };

                        function d(t) {
                            return 33 === t ? (e.consume(t), m) : 47 === t ? (e.consume(t), P) : 63 === t ? (e.consume(t), O) : r(t) ? (e.consume(t), A) : n(t)
                        }

                        function m(t) {
                            return 45 === t ? (e.consume(t), g) : 91 === t ? (e.consume(t), c = "CDATA[", f = 0, b) : r(t) ? (e.consume(t), E) : n(t)
                        }

                        function g(t) {
                            return 45 === t ? (e.consume(t), v) : n(t)
                        }

                        function v(t) {
                            return null === t || 62 === t ? n(t) : 45 === t ? (e.consume(t), y) : x(t)
                        }

                        function y(e) {
                            return null === e || 62 === e ? n(e) : x(e)
                        }

                        function x(t) {
                            return null === t ? n(t) : 45 === t ? (e.consume(t), k) : o(t) ? (p = x, j(t)) : (e.consume(t), x)
                        }

                        function k(t) {
                            return 45 === t ? (e.consume(t), H) : x(t)
                        }

                        function b(t) {
                            return t === c.charCodeAt(f++) ? (e.consume(t), f === c.length ? S : b) : n(t)
                        }

                        function S(t) {
                            return null === t ? n(t) : 93 === t ? (e.consume(t), w) : o(t) ? (p = S, j(t)) : (e.consume(t), S)
                        }

                        function w(t) {
                            return 93 === t ? (e.consume(t), C) : S(t)
                        }

                        function C(t) {
                            return 62 === t ? H(t) : 93 === t ? (e.consume(t), C) : S(t)
                        }

                        function E(t) {
                            return null === t || 62 === t ? H(t) : o(t) ? (p = E, j(t)) : (e.consume(t), E)
                        }

                        function O(t) {
                            return null === t ? n(t) : 63 === t ? (e.consume(t), F) : o(t) ? (p = O, j(t)) : (e.consume(t), O)
                        }

                        function F(e) {
                            return 62 === e ? H(e) : O(e)
                        }

                        function P(t) {
                            return r(t) ? (e.consume(t), D) : n(t)
                        }

                        function D(t) {
                            return 45 === t || i(t) ? (e.consume(t), D) : T(t)
                        }

                        function T(t) {
                            return o(t) ? (p = T, j(t)) : l(t) ? (e.consume(t), T) : H(t)
                        }

                        function A(t) {
                            return 45 === t || i(t) ? (e.consume(t), A) : 47 === t || 62 === t || u(t) ? M(t) : n(t)
                        }

                        function M(t) {
                            return 47 === t ? (e.consume(t), H) : 58 === t || 95 === t || r(t) ? (e.consume(t), I) : o(t) ? (p = M, j(t)) : l(t) ? (e.consume(t), M) : H(t)
                        }

                        function I(t) {
                            return 45 === t || 46 === t || 58 === t || 95 === t || i(t) ? (e.consume(t), I) : L(t)
                        }

                        function L(t) {
                            return 61 === t ? (e.consume(t), z) : o(t) ? (p = L, j(t)) : l(t) ? (e.consume(t), L) : M(t)
                        }

                        function z(t) {
                            return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), s = t, B) : o(t) ? (p = z, j(t)) : l(t) ? (e.consume(t), z) : (e.consume(t), s = void 0, R)
                        }

                        function B(t) {
                            return t === s ? (e.consume(t), $) : null === t ? n(t) : o(t) ? (p = B, j(t)) : (e.consume(t), B)
                        }

                        function $(e) {
                            return 62 === e || 47 === e || u(e) ? M(e) : n(e)
                        }

                        function R(t) {
                            return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 62 === t || u(t) ? M(t) : (e.consume(t), R)
                        }

                        function j(t) {
                            return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a(e, _, "linePrefix", h.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                        }

                        function _(t) {
                            return e.enter("htmlTextData"), p(t)
                        }

                        function H(r) {
                            return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r)
                        }
                    }
                };
            e.exports = s
        },
        31294: (e, t, n) => {
            "use strict";
            var r = n(88367),
                i = n(78811),
                o = n(56808),
                u = n(35478),
                l = n(58280),
                a = n(75923),
                s = n(38229),
                c = n(97154),
                f = n(59283),
                p = n(31056),
                h = {
                    name: "labelEnd",
                    tokenize: function(e, t, n) {
                        var r, i, o = this,
                            l = o.events.length;
                        for (; l--;)
                            if (("labelImage" === o.events[l][1].type || "labelLink" === o.events[l][1].type) && !o.events[l][1]._balanced) {
                                r = o.events[l][1];
                                break
                            } return function(t) {
                            if (!r) return n(t);
                            return r._inactive ? s(t) : (i = o.parser.defined.indexOf(u(o.sliceSerialize({
                                start: r.end,
                                end: o.now()
                            }))) > -1, e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), a)
                        };

                        function a(n) {
                            return 40 === n ? e.attempt(d, t, i ? t : s)(n) : 91 === n ? e.attempt(m, t, i ? e.attempt(g, t, s) : s)(n) : i ? t(n) : s(n)
                        }

                        function s(e) {
                            return r._balanced = !0, n(e)
                        }
                    },
                    resolveTo: function(e, t) {
                        var n, r, u, s, c, f, p, h = e.length,
                            d = 0;
                        for (; h--;)
                            if (s = e[h][1], c) {
                                if ("link" === s.type || "labelLink" === s.type && s._inactive) break;
                                "enter" === e[h][0] && "labelLink" === s.type && (s._inactive = !0)
                            } else if (f) {
                            if ("enter" === e[h][0] && ("labelImage" === s.type || "labelLink" === s.type) && !s._balanced && (c = h, "labelLink" !== s.type)) {
                                d = 2;
                                break
                            }
                        } else "labelEnd" === s.type && (f = h);
                        return n = {
                            type: "labelLink" === e[c][1].type ? "link" : "image",
                            start: a(e[c][1].start),
                            end: a(e[e.length - 1][1].end)
                        }, r = {
                            type: "label",
                            start: a(e[c][1].start),
                            end: a(e[f][1].end)
                        }, u = {
                            type: "labelText",
                            start: a(e[c + d + 2][1].end),
                            end: a(e[f - 2][1].start)
                        }, p = i(p = [
                            ["enter", n, t],
                            ["enter", r, t]
                        ], e.slice(c + 1, c + d + 3)), p = i(p, [
                            ["enter", u, t]
                        ]), p = i(p, l(t.parser.constructs.insideSpan.null, e.slice(c + d + 4, f - 3), t)), p = i(p, [
                            ["exit", u, t], e[f - 2], e[f - 1],
                            ["exit", r, t]
                        ]), p = i(p, e.slice(f + 1)), p = i(p, [
                            ["exit", n, t]
                        ]), o(e, c, e.length, p), e
                    },
                    resolveAll: function(e) {
                        var t, n = -1;
                        for (; ++n < e.length;)(t = e[n][1])._used || "labelImage" !== t.type && "labelLink" !== t.type && "labelEnd" !== t.type || (e.splice(n + 1, "labelImage" === t.type ? 4 : 2), t.type = "data", n++);
                        return e
                    }
                },
                d = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), p(e, i)
                        };

                        function i(t) {
                            return 41 === t ? l(t) : s(e, o, n, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 3)(t)
                        }

                        function o(t) {
                            return r(t) ? p(e, u)(t) : l(t)
                        }

                        function u(t) {
                            return 34 === t || 39 === t || 40 === t ? f(e, p(e, l), n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : l(t)
                        }

                        function l(r) {
                            return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r)
                        }
                    }
                },
                m = {
                    tokenize: function(e, t, n) {
                        var r = this;
                        return function(t) {
                            return c.call(r, e, i, n, "reference", "referenceMarker", "referenceString")(t)
                        };

                        function i(e) {
                            return r.parser.defined.indexOf(u(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) < 0 ? n(e) : t(e)
                        }
                    }
                },
                g = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r
                        };

                        function r(r) {
                            return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r)
                        }
                    }
                };
            e.exports = h
        },
        36215: (e, t, n) => {
            "use strict";
            var r = {
                name: "labelStartImage",
                tokenize: function(e, t, n) {
                    var r = this;
                    return function(t) {
                        return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), i
                    };

                    function i(t) {
                        return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t)
                    }

                    function o(e) {
                        return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                    }
                },
                resolveAll: n(31294).resolveAll
            };
            e.exports = r
        },
        60534: (e, t, n) => {
            "use strict";
            var r = {
                name: "labelStartLink",
                tokenize: function(e, t, n) {
                    var r = this;
                    return function(t) {
                        return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), i
                    };

                    function i(e) {
                        return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                    }
                },
                resolveAll: n(31294).resolveAll
            };
            e.exports = r
        },
        92607: (e, t, n) => {
            "use strict";
            var r = n(52928),
                i = {
                    name: "lineEnding",
                    tokenize: function(e, t) {
                        return function(n) {
                            return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), r(e, t, "linePrefix")
                        }
                    }
                };
            e.exports = i
        },
        46931: (e, t, n) => {
            "use strict";
            var r = n(73977),
                i = n(73654),
                o = n(15096),
                u = n(18892),
                l = n(52928),
                a = n(66532),
                s = n(37039),
                c = {
                    name: "list",
                    tokenize: function(e, t, n) {
                        var l = this,
                            c = o(l.events, "linePrefix"),
                            p = 0;
                        return function(t) {
                            var i = l.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
                            if ("listUnordered" === i ? !l.containerState.marker || t === l.containerState.marker : r(t)) {
                                if (l.containerState.type || (l.containerState.type = i, e.enter(i, {
                                        _container: !0
                                    })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(s, n, d)(t) : d(t);
                                if (!l.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"), h(t)
                            }
                            return n(t)
                        };

                        function h(t) {
                            return r(t) && ++p < 10 ? (e.consume(t), h) : (!l.interrupt || p < 2) && (l.containerState.marker ? t === l.containerState.marker : 41 === t || 46 === t) ? (e.exit("listItemValue"), d(t)) : n(t)
                        }

                        function d(t) {
                            return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), l.containerState.marker = l.containerState.marker || t, e.check(a, l.interrupt ? n : m, e.attempt(f, v, g))
                        }

                        function m(e) {
                            return l.containerState.initialBlankLine = !0, c++, v(e)
                        }

                        function g(t) {
                            return i(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), v) : n(t)
                        }

                        function v(n) {
                            return l.containerState.size = c + u(l.sliceStream(e.exit("listItemPrefix"))), t(n)
                        }
                    },
                    continuation: {
                        tokenize: function(e, t, n) {
                            var r = this;
                            return r.containerState._closeFlow = void 0, e.check(a, (function(n) {
                                return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, l(e, t, "listItemIndent", r.containerState.size + 1)(n)
                            }), (function(n) {
                                if (r.containerState.furtherBlankLines || !i(n)) return r.containerState.furtherBlankLines = r.containerState.initialBlankLine = void 0, o(n);
                                return r.containerState.furtherBlankLines = r.containerState.initialBlankLine = void 0, e.attempt(p, t, o)(n)
                            }));

                            function o(i) {
                                return r.containerState._closeFlow = !0, r.interrupt = void 0, l(e, e.attempt(c, t, n), "linePrefix", r.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)(i)
                            }
                        }
                    },
                    exit: function(e) {
                        e.exit(this.containerState.type)
                    }
                },
                f = {
                    tokenize: function(e, t, n) {
                        var r = this;
                        return l(e, (function(e) {
                            return i(e) || !o(r.events, "listItemPrefixWhitespace") ? n(e) : t(e)
                        }), "listItemPrefixWhitespace", r.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 5)
                    },
                    partial: !0
                },
                p = {
                    tokenize: function(e, t, n) {
                        var r = this;
                        return l(e, (function(e) {
                            return o(r.events, "listItemIndent") === r.containerState.size ? t(e) : n(e)
                        }), "listItemIndent", r.containerState.size + 1)
                    },
                    partial: !0
                };
            e.exports = c
        },
        66532: (e, t, n) => {
            "use strict";
            var r = n(17238),
                i = n(52928),
                o = {
                    tokenize: function(e, t, n) {
                        return i(e, (function(e) {
                            return null === e || r(e) ? t(e) : n(e)
                        }), "linePrefix")
                    },
                    partial: !0
                };
            e.exports = o
        },
        15874: (e, t, n) => {
            "use strict";
            var r = n(17238),
                i = n(75923),
                o = n(52928),
                u = {
                    name: "setextUnderline",
                    tokenize: function(e, t, n) {
                        var i, u, l = this,
                            a = l.events.length;
                        for (; a--;)
                            if ("lineEnding" !== l.events[a][1].type && "linePrefix" !== l.events[a][1].type && "content" !== l.events[a][1].type) {
                                u = "paragraph" === l.events[a][1].type;
                                break
                            } return function(t) {
                            if (!l.lazy && (l.interrupt || u)) return e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), i = t, s(t);
                            return n(t)
                        };

                        function s(t) {
                            return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), o(e, c, "lineSuffix")(t))
                        }

                        function c(i) {
                            return null === i || r(i) ? (e.exit("setextHeadingLine"), t(i)) : n(i)
                        }
                    },
                    resolveTo: function(e, t) {
                        var n, r, o, u, l = e.length;
                        for (; l--;)
                            if ("enter" === e[l][0]) {
                                if ("content" === e[l][1].type) {
                                    n = l;
                                    break
                                }
                                "paragraph" === e[l][1].type && (r = l)
                            } else "content" === e[l][1].type && e.splice(l, 1), o || "definition" !== e[l][1].type || (o = l);
                        u = {
                            type: "setextHeading",
                            start: i(e[r][1].start),
                            end: i(e[e.length - 1][1].end)
                        }, e[r][1].type = "setextHeadingText", o ? (e.splice(r, 0, ["enter", u, t]), e.splice(o + 1, 0, ["exit", e[n][1], t]), e[n][1].end = i(e[o][1].end)) : e[n][1] = u;
                        return e.push(["exit", u, t]), e
                    }
                };
            e.exports = u
        },
        37039: (e, t, n) => {
            "use strict";
            var r = n(17238),
                i = n(73654),
                o = n(52928),
                u = {
                    name: "thematicBreak",
                    tokenize: function(e, t, n) {
                        var u, l = 0;
                        return function(t) {
                            return e.enter("thematicBreak"), u = t, a(t)
                        };

                        function a(c) {
                            return c === u ? (e.enter("thematicBreakSequence"), s(c)) : i(c) ? o(e, a, "whitespace")(c) : l < 3 || null !== c && !r(c) ? n(c) : (e.exit("thematicBreak"), t(c))
                        }

                        function s(t) {
                            return t === u ? (e.consume(t), l++, s) : (e.exit("thematicBreakSequence"), a(t))
                        }
                    }
                };
            e.exports = u
        },
        78811: (e, t, n) => {
            "use strict";
            var r = n(56808);
            e.exports = function(e, t) {
                return e.length ? (r(e, e.length, 0, t), e) : t
            }
        },
        56808: (e, t, n) => {
            "use strict";
            var r = n(21362);
            e.exports = function(e, t, n, i) {
                var o, u = e.length,
                    l = 0;
                if (t = t < 0 ? -t > u ? 0 : u + t : t > u ? u : t, n = n > 0 ? n : 0, i.length < 1e4)(o = Array.from(i)).unshift(t, n), r.apply(e, o);
                else
                    for (n && r.apply(e, [t, n]); l < i.length;)(o = i.slice(l, l + 1e4)).unshift(t, 0), r.apply(e, o), l += 1e4, t += 1e4
            }
        },
        19444: (e, t, n) => {
            "use strict";
            var r = n(88367),
                i = n(36996),
                o = n(10395);
            e.exports = function(e) {
                return null === e || r(e) || o(e) ? 1 : i(e) ? 2 : void 0
            }
        },
        12952: (e, t, n) => {
            "use strict";
            var r = n(46706),
                i = n(56808),
                o = n(28180);

            function u(e, t) {
                var n, i, u, a;
                for (n in t)
                    for (a in i = r.call(e, n) ? e[n] : e[n] = {}, u = t[n]) i[a] = l(o(u[a]), r.call(i, a) ? i[a] : [])
            }

            function l(e, t) {
                for (var n = -1, r = []; ++n < e.length;)("after" === e[n].add ? t : r).push(e[n]);
                return i(t, 0, 0, r), t
            }
            e.exports = function(e) {
                for (var t = {}, n = -1; ++n < e.length;) u(t, e[n]);
                return t
            }
        },
        21388: (e, t, n) => {
            "use strict";
            var r = n(99198),
                i = n(17238),
                o = n(78811),
                u = n(56808),
                l = n(28180),
                a = n(58280),
                s = n(23082),
                c = n(75923),
                f = n(12774);
            e.exports = function(e, t, n) {
                var p = n ? c(n) : {
                        line: 1,
                        column: 1,
                        offset: 0
                    },
                    h = {},
                    d = [],
                    m = [],
                    g = [],
                    v = {
                        consume: function(e) {
                            i(e) ? (p.line++, p.column = 1, p.offset += -3 === e ? 2 : 1, F()) : -1 !== e && (p.column++, p.offset++);
                            p._bufferIndex < 0 ? p._index++ : (p._bufferIndex++, p._bufferIndex === m[p._index].length && (p._bufferIndex = -1, p._index++));
                            y.previous = e
                        },
                        enter: function(e, t) {
                            var n = t || {};
                            return n.type = e, n.start = b(), y.events.push(["enter", n, y]), g.push(n), n
                        },
                        exit: function(e) {
                            var t = g.pop();
                            return t.end = b(), y.events.push(["exit", t, y]), t
                        },
                        attempt: E((function(e, t) {
                            O(e, t.from)
                        })),
                        check: E(C),
                        interrupt: E(C, {
                            interrupt: !0
                        }),
                        lazy: E(C, {
                            lazy: !0
                        })
                    },
                    y = {
                        previous: null,
                        events: [],
                        parser: e,
                        sliceStream: k,
                        sliceSerialize: function(e) {
                            return s(k(e))
                        },
                        now: b,
                        defineSkip: function(e) {
                            h[e.line] = e.column, F()
                        },
                        write: function(e) {
                            if (m = o(m, e), S(), null !== m[m.length - 1]) return [];
                            return O(t, 0), y.events = a(d, y.events, y), y.events
                        }
                    },
                    x = t.tokenize.call(y, v);
                return t.resolveAll && d.push(t), p._index = 0, p._bufferIndex = -1, y;

                function k(e) {
                    return f(m, e)
                }

                function b() {
                    return c(p)
                }

                function S() {
                    for (var e, t; p._index < m.length;)
                        if ("string" == typeof(t = m[p._index]))
                            for (e = p._index, p._bufferIndex < 0 && (p._bufferIndex = 0); p._index === e && p._bufferIndex < t.length;) w(t.charCodeAt(p._bufferIndex));
                        else w(t)
                }

                function w(e) {
                    x = x(e)
                }

                function C(e, t) {
                    t.restore()
                }

                function E(e, t) {
                    return function(n, i, o) {
                        var u, a, s, c;
                        return n.tokenize || "length" in n ? f(l(n)) : function(e) {
                            if (e in n || null in n) return f(n.null ? l(n[e]).concat(l(n.null)) : n[e])(e);
                            return o(e)
                        };

                        function f(e) {
                            return u = e, h(e[a = 0])
                        }

                        function h(e) {
                            return function(n) {
                                c = function() {
                                    var e = b(),
                                        t = y.previous,
                                        n = y.currentConstruct,
                                        r = y.events.length,
                                        i = Array.from(g);
                                    return {
                                        restore: o,
                                        from: r
                                    };

                                    function o() {
                                        p = e, y.previous = t, y.currentConstruct = n, y.events.length = r, g = i, F()
                                    }
                                }(), s = e, e.partial || (y.currentConstruct = e);
                                if (e.name && y.parser.constructs.disable.null.indexOf(e.name) > -1) return m();
                                return e.tokenize.call(t ? r({}, y, t) : y, v, d, m)(n)
                            }
                        }

                        function d(t) {
                            return e(s, c), i
                        }

                        function m(e) {
                            return c.restore(), ++a < u.length ? h(u[a]) : o
                        }
                    }
                }

                function O(e, t) {
                    e.resolveAll && d.indexOf(e) < 0 && d.push(e), e.resolve && u(y.events, t, y.events.length - t, e.resolve(y.events.slice(t), y)), e.resolveTo && (y.events = e.resolveTo(y.events, y))
                }

                function F() {
                    p.line in h && p.column < 2 && (p.column = h[p.line], p.offset += h[p.line] - 1)
                }
            }
        },
        28180: e => {
            "use strict";
            e.exports = function(e) {
                return null == e ? [] : "length" in e ? e : [e]
            }
        },
        15644: e => {
            "use strict";
            e.exports = function(e, t) {
                return e.column += t, e.offset += t, e._bufferIndex += t, e
            }
        },
        35478: e => {
            "use strict";
            e.exports = function(e) {
                return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
            }
        },
        15096: (e, t, n) => {
            "use strict";
            var r = n(18892);
            e.exports = function(e, t) {
                var n = e[e.length - 1];
                return n && n[1].type === t ? r(n[2].sliceStream(n[1])) : 0
            }
        },
        2841: (e, t, n) => {
            "use strict";
            var r = n(93267);
            e.exports = function(e) {
                return function(t) {
                    return e.test(r(t))
                }
            }
        },
        58280: e => {
            "use strict";
            e.exports = function(e, t, n) {
                for (var r, i = [], o = -1; ++o < e.length;)(r = e[o].resolveAll) && i.indexOf(r) < 0 && (t = r(t, n), i.push(r));
                return t
            }
        },
        10596: (e, t, n) => {
            "use strict";
            var r = n(93267);
            e.exports = function(e, t) {
                var n = parseInt(e, t);
                return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || 65535 == (65535 & n) || 65534 == (65535 & n) || n > 1114111 ? "�" : r(n)
            }
        },
        23082: (e, t, n) => {
            "use strict";
            var r = n(93267);
            e.exports = function(e) {
                for (var t, n, i, o = -1, u = []; ++o < e.length;) {
                    if ("string" == typeof(t = e[o])) n = t;
                    else if (-5 === t) n = "\r";
                    else if (-4 === t) n = "\n";
                    else if (-3 === t) n = "\r\n";
                    else if (-2 === t) n = "\t";
                    else if (-1 === t) {
                        if (i) continue;
                        n = " "
                    } else n = r(t);
                    i = -2 === t, u.push(n)
                }
                return u.join("")
            }
        },
        75923: (e, t, n) => {
            "use strict";
            var r = n(99198);
            e.exports = function(e) {
                return r({}, e)
            }
        },
        18892: e => {
            "use strict";
            e.exports = function(e) {
                for (var t = -1, n = 0; ++t < e.length;) n += "string" == typeof e[t] ? e[t].length : 1;
                return n
            }
        },
        12774: e => {
            "use strict";
            e.exports = function(e, t) {
                var n, r = t.start._index,
                    i = t.start._bufferIndex,
                    o = t.end._index,
                    u = t.end._bufferIndex;
                return r === o ? n = [e[r].slice(i, u)] : (n = e.slice(r, o), i > -1 && (n[0] = n[0].slice(i)), u > 0 && n.push(e[o].slice(0, u))), n
            }
        },
        84423: (e, t, n) => {
            "use strict";
            var r = n(99198),
                i = n(56808),
                o = n(75923);

            function u(e, t) {
                for (var n, r, o, u, l, a, s = e[t][1], c = e[t][2], f = t - 1, p = [], h = s._tokenizer || c.parser[s.contentType](s.start), d = h.events, m = [], g = {}; s;) {
                    for (; e[++f][1] !== s;);
                    p.push(f), s._tokenizer || (n = c.sliceStream(s), s.next || n.push(null), r && h.defineSkip(s.start), s.isInFirstContentOfListItem && (h._gfmTasklistFirstContentOfListItem = !0), h.write(n), s.isInFirstContentOfListItem && (h._gfmTasklistFirstContentOfListItem = void 0)), r = s, s = s.next
                }
                for (s = r, o = d.length; o--;) "enter" === d[o][0] ? u = !0 : u && d[o][1].type === d[o - 1][1].type && d[o][1].start.line !== d[o][1].end.line && (v(d.slice(o + 1, l)), s._tokenizer = s.next = void 0, s = s.previous, l = o + 1);
                for (h.events = s._tokenizer = s.next = void 0, v(d.slice(0, l)), o = -1, a = 0; ++o < m.length;) g[a + m[o][0]] = a + m[o][1], a += m[o][1] - m[o][0] - 1;
                return g;

                function v(t) {
                    var n = p.pop();
                    m.unshift([n, n + t.length - 1]), i(e, n, 2, t)
                }
            }
            e.exports = function(e) {
                for (var t, n, l, a, s, c, f, p = {}, h = -1; ++h < e.length;) {
                    for (; h in p;) h = p[h];
                    if (t = e[h], h && "chunkFlow" === t[1].type && "listItemPrefix" === e[h - 1][1].type && ((l = 0) < (c = t[1]._tokenizer.events).length && "lineEndingBlank" === c[l][1].type && (l += 2), l < c.length && "content" === c[l][1].type))
                        for (; ++l < c.length && "content" !== c[l][1].type;) "chunkText" === c[l][1].type && (c[l][1].isInFirstContentOfListItem = !0, l++);
                    if ("enter" === t[0]) t[1].contentType && (r(p, u(e, h)), h = p[h], f = !0);
                    else if (t[1]._container || t[1]._movePreviousLineEndings) {
                        for (l = h, n = void 0; l-- && ("lineEnding" === (a = e[l])[1].type || "lineEndingBlank" === a[1].type);) "enter" === a[0] && (n && (e[n][1].type = "lineEndingBlank"), a[1].type = "lineEnding", n = l);
                        n && (t[1].end = o(e[n][1].start), (s = e.slice(n, h)).unshift(t), i(e, n, h - n + 1, s))
                    }
                }
                return !f
            }
        },
        89435: e => {
            "use strict";
            var t;
            e.exports = function(e) {
                var n, r = "&" + e + ";";
                if ((t = t || document.createElement("i")).innerHTML = r, 59 === (n = t.textContent).charCodeAt(n.length - 1) && "semi" !== e) return !1;
                return n !== r && n
            }
        },
        34668: (e, t, n) => {
            "use strict";
            var r = n(66632),
                i = n(81674),
                o = n(57643),
                u = "data";
            e.exports = function(e, t) {
                var n = r(t),
                    p = t,
                    h = o;
                if (n in e.normal) return e.property[e.normal[n]];
                n.length > 4 && n.slice(0, 4) === u && l.test(t) && ("-" === t.charAt(4) ? p = function(e) {
                    var t = e.slice(5).replace(a, f);
                    return u + t.charAt(0).toUpperCase() + t.slice(1)
                }(t) : t = function(e) {
                    var t = e.slice(4);
                    if (a.test(t)) return e;
                    t = t.replace(s, c), "-" !== t.charAt(0) && (t = "-" + t);
                    return u + t
                }(t), h = i);
                return new h(p, t)
            };
            var l = /^data[-\w.:]+$/i,
                a = /-[a-z]/g,
                s = /[A-Z]/g;

            function c(e) {
                return "-" + e.toLowerCase()
            }

            function f(e) {
                return e.charAt(1).toUpperCase()
            }
        },
        97247: (e, t, n) => {
            "use strict";
            var r = n(19940),
                i = n(8289),
                o = n(5812),
                u = n(94397),
                l = n(67716),
                a = n(61805);
            e.exports = r([o, i, u, l, a])
        },
        67716: (e, t, n) => {
            "use strict";
            var r = n(17e3),
                i = n(17596),
                o = r.booleanish,
                u = r.number,
                l = r.spaceSeparated;
            e.exports = i({
                transform: function(e, t) {
                    return "role" === t ? t : "aria-" + t.slice(4).toLowerCase()
                },
                properties: {
                    ariaActiveDescendant: null,
                    ariaAtomic: o,
                    ariaAutoComplete: null,
                    ariaBusy: o,
                    ariaChecked: o,
                    ariaColCount: u,
                    ariaColIndex: u,
                    ariaColSpan: u,
                    ariaControls: l,
                    ariaCurrent: null,
                    ariaDescribedBy: l,
                    ariaDetails: null,
                    ariaDisabled: o,
                    ariaDropEffect: l,
                    ariaErrorMessage: null,
                    ariaExpanded: o,
                    ariaFlowTo: l,
                    ariaGrabbed: o,
                    ariaHasPopup: null,
                    ariaHidden: o,
                    ariaInvalid: null,
                    ariaKeyShortcuts: null,
                    ariaLabel: null,
                    ariaLabelledBy: l,
                    ariaLevel: u,
                    ariaLive: null,
                    ariaModal: o,
                    ariaMultiLine: o,
                    ariaMultiSelectable: o,
                    ariaOrientation: null,
                    ariaOwns: l,
                    ariaPlaceholder: null,
                    ariaPosInSet: u,
                    ariaPressed: o,
                    ariaReadOnly: o,
                    ariaRelevant: null,
                    ariaRequired: o,
                    ariaRoleDescription: l,
                    ariaRowCount: u,
                    ariaRowIndex: u,
                    ariaRowSpan: u,
                    ariaSelected: o,
                    ariaSetSize: u,
                    ariaSort: null,
                    ariaValueMax: u,
                    ariaValueMin: u,
                    ariaValueNow: u,
                    ariaValueText: null,
                    role: null
                }
            })
        },
        61805: (e, t, n) => {
            "use strict";
            var r = n(17e3),
                i = n(17596),
                o = n(10855),
                u = r.boolean,
                l = r.overloadedBoolean,
                a = r.booleanish,
                s = r.number,
                c = r.spaceSeparated,
                f = r.commaSeparated;
            e.exports = i({
                space: "html",
                attributes: {
                    acceptcharset: "accept-charset",
                    classname: "class",
                    htmlfor: "for",
                    httpequiv: "http-equiv"
                },
                transform: o,
                mustUseProperty: ["checked", "multiple", "muted", "selected"],
                properties: {
                    abbr: null,
                    accept: f,
                    acceptCharset: c,
                    accessKey: c,
                    action: null,
                    allow: null,
                    allowFullScreen: u,
                    allowPaymentRequest: u,
                    allowUserMedia: u,
                    alt: null,
                    as: null,
                    async: u,
                    autoCapitalize: null,
                    autoComplete: c,
                    autoFocus: u,
                    autoPlay: u,
                    capture: u,
                    charSet: null,
                    checked: u,
                    cite: null,
                    className: c,
                    cols: s,
                    colSpan: null,
                    content: null,
                    contentEditable: a,
                    controls: u,
                    controlsList: c,
                    coords: s | f,
                    crossOrigin: null,
                    data: null,
                    dateTime: null,
                    decoding: null,
                    default: u,
                    defer: u,
                    dir: null,
                    dirName: null,
                    disabled: u,
                    download: l,
                    draggable: a,
                    encType: null,
                    enterKeyHint: null,
                    form: null,
                    formAction: null,
                    formEncType: null,
                    formMethod: null,
                    formNoValidate: u,
                    formTarget: null,
                    headers: c,
                    height: s,
                    hidden: u,
                    high: s,
                    href: null,
                    hrefLang: null,
                    htmlFor: c,
                    httpEquiv: c,
                    id: null,
                    imageSizes: null,
                    imageSrcSet: f,
                    inputMode: null,
                    integrity: null,
                    is: null,
                    isMap: u,
                    itemId: null,
                    itemProp: c,
                    itemRef: c,
                    itemScope: u,
                    itemType: c,
                    kind: null,
                    label: null,
                    lang: null,
                    language: null,
                    list: null,
                    loading: null,
                    loop: u,
                    low: s,
                    manifest: null,
                    max: null,
                    maxLength: s,
                    media: null,
                    method: null,
                    min: null,
                    minLength: s,
                    multiple: u,
                    muted: u,
                    name: null,
                    nonce: null,
                    noModule: u,
                    noValidate: u,
                    onAbort: null,
                    onAfterPrint: null,
                    onAuxClick: null,
                    onBeforePrint: null,
                    onBeforeUnload: null,
                    onBlur: null,
                    onCancel: null,
                    onCanPlay: null,
                    onCanPlayThrough: null,
                    onChange: null,
                    onClick: null,
                    onClose: null,
                    onContextMenu: null,
                    onCopy: null,
                    onCueChange: null,
                    onCut: null,
                    onDblClick: null,
                    onDrag: null,
                    onDragEnd: null,
                    onDragEnter: null,
                    onDragExit: null,
                    onDragLeave: null,
                    onDragOver: null,
                    onDragStart: null,
                    onDrop: null,
                    onDurationChange: null,
                    onEmptied: null,
                    onEnded: null,
                    onError: null,
                    onFocus: null,
                    onFormData: null,
                    onHashChange: null,
                    onInput: null,
                    onInvalid: null,
                    onKeyDown: null,
                    onKeyPress: null,
                    onKeyUp: null,
                    onLanguageChange: null,
                    onLoad: null,
                    onLoadedData: null,
                    onLoadedMetadata: null,
                    onLoadEnd: null,
                    onLoadStart: null,
                    onMessage: null,
                    onMessageError: null,
                    onMouseDown: null,
                    onMouseEnter: null,
                    onMouseLeave: null,
                    onMouseMove: null,
                    onMouseOut: null,
                    onMouseOver: null,
                    onMouseUp: null,
                    onOffline: null,
                    onOnline: null,
                    onPageHide: null,
                    onPageShow: null,
                    onPaste: null,
                    onPause: null,
                    onPlay: null,
                    onPlaying: null,
                    onPopState: null,
                    onProgress: null,
                    onRateChange: null,
                    onRejectionHandled: null,
                    onReset: null,
                    onResize: null,
                    onScroll: null,
                    onSecurityPolicyViolation: null,
                    onSeeked: null,
                    onSeeking: null,
                    onSelect: null,
                    onSlotChange: null,
                    onStalled: null,
                    onStorage: null,
                    onSubmit: null,
                    onSuspend: null,
                    onTimeUpdate: null,
                    onToggle: null,
                    onUnhandledRejection: null,
                    onUnload: null,
                    onVolumeChange: null,
                    onWaiting: null,
                    onWheel: null,
                    open: u,
                    optimum: s,
                    pattern: null,
                    ping: c,
                    placeholder: null,
                    playsInline: u,
                    poster: null,
                    preload: null,
                    readOnly: u,
                    referrerPolicy: null,
                    rel: c,
                    required: u,
                    reversed: u,
                    rows: s,
                    rowSpan: s,
                    sandbox: c,
                    scope: null,
                    scoped: u,
                    seamless: u,
                    selected: u,
                    shape: null,
                    size: s,
                    sizes: null,
                    slot: null,
                    span: s,
                    spellCheck: a,
                    src: null,
                    srcDoc: null,
                    srcLang: null,
                    srcSet: f,
                    start: s,
                    step: null,
                    style: null,
                    tabIndex: s,
                    target: null,
                    title: null,
                    translate: null,
                    type: null,
                    typeMustMatch: u,
                    useMap: null,
                    value: a,
                    width: s,
                    wrap: null,
                    align: null,
                    aLink: null,
                    archive: c,
                    axis: null,
                    background: null,
                    bgColor: null,
                    border: s,
                    borderColor: null,
                    bottomMargin: s,
                    cellPadding: null,
                    cellSpacing: null,
                    char: null,
                    charOff: null,
                    classId: null,
                    clear: null,
                    code: null,
                    codeBase: null,
                    codeType: null,
                    color: null,
                    compact: u,
                    declare: u,
                    event: null,
                    face: null,
                    frame: null,
                    frameBorder: null,
                    hSpace: s,
                    leftMargin: s,
                    link: null,
                    longDesc: null,
                    lowSrc: null,
                    marginHeight: s,
                    marginWidth: s,
                    noResize: u,
                    noHref: u,
                    noShade: u,
                    noWrap: u,
                    object: null,
                    profile: null,
                    prompt: null,
                    rev: null,
                    rightMargin: s,
                    rules: null,
                    scheme: null,
                    scrolling: a,
                    standby: null,
                    summary: null,
                    text: null,
                    topMargin: s,
                    valueType: null,
                    version: null,
                    vAlign: null,
                    vLink: null,
                    vSpace: s,
                    allowTransparency: null,
                    autoCorrect: null,
                    autoSave: null,
                    disablePictureInPicture: u,
                    disableRemotePlayback: u,
                    prefix: null,
                    property: null,
                    results: s,
                    security: null,
                    unselectable: null
                }
            })
        },
        45789: (e, t, n) => {
            "use strict";
            var r = n(17e3),
                i = n(17596),
                o = n(28740),
                u = r.boolean,
                l = r.number,
                a = r.spaceSeparated,
                s = r.commaSeparated,
                c = r.commaOrSpaceSeparated;
            e.exports = i({
                space: "svg",
                attributes: {
                    accentHeight: "accent-height",
                    alignmentBaseline: "alignment-baseline",
                    arabicForm: "arabic-form",
                    baselineShift: "baseline-shift",
                    capHeight: "cap-height",
                    className: "class",
                    clipPath: "clip-path",
                    clipRule: "clip-rule",
                    colorInterpolation: "color-interpolation",
                    colorInterpolationFilters: "color-interpolation-filters",
                    colorProfile: "color-profile",
                    colorRendering: "color-rendering",
                    crossOrigin: "crossorigin",
                    dataType: "datatype",
                    dominantBaseline: "dominant-baseline",
                    enableBackground: "enable-background",
                    fillOpacity: "fill-opacity",
                    fillRule: "fill-rule",
                    floodColor: "flood-color",
                    floodOpacity: "flood-opacity",
                    fontFamily: "font-family",
                    fontSize: "font-size",
                    fontSizeAdjust: "font-size-adjust",
                    fontStretch: "font-stretch",
                    fontStyle: "font-style",
                    fontVariant: "font-variant",
                    fontWeight: "font-weight",
                    glyphName: "glyph-name",
                    glyphOrientationHorizontal: "glyph-orientation-horizontal",
                    glyphOrientationVertical: "glyph-orientation-vertical",
                    hrefLang: "hreflang",
                    horizAdvX: "horiz-adv-x",
                    horizOriginX: "horiz-origin-x",
                    horizOriginY: "horiz-origin-y",
                    imageRendering: "image-rendering",
                    letterSpacing: "letter-spacing",
                    lightingColor: "lighting-color",
                    markerEnd: "marker-end",
                    markerMid: "marker-mid",
                    markerStart: "marker-start",
                    navDown: "nav-down",
                    navDownLeft: "nav-down-left",
                    navDownRight: "nav-down-right",
                    navLeft: "nav-left",
                    navNext: "nav-next",
                    navPrev: "nav-prev",
                    navRight: "nav-right",
                    navUp: "nav-up",
                    navUpLeft: "nav-up-left",
                    navUpRight: "nav-up-right",
                    onAbort: "onabort",
                    onActivate: "onactivate",
                    onAfterPrint: "onafterprint",
                    onBeforePrint: "onbeforeprint",
                    onBegin: "onbegin",
                    onCancel: "oncancel",
                    onCanPlay: "oncanplay",
                    onCanPlayThrough: "oncanplaythrough",
                    onChange: "onchange",
                    onClick: "onclick",
                    onClose: "onclose",
                    onCopy: "oncopy",
                    onCueChange: "oncuechange",
                    onCut: "oncut",
                    onDblClick: "ondblclick",
                    onDrag: "ondrag",
                    onDragEnd: "ondragend",
                    onDragEnter: "ondragenter",
                    onDragExit: "ondragexit",
                    onDragLeave: "ondragleave",
                    onDragOver: "ondragover",
                    onDragStart: "ondragstart",
                    onDrop: "ondrop",
                    onDurationChange: "ondurationchange",
                    onEmptied: "onemptied",
                    onEnd: "onend",
                    onEnded: "onended",
                    onError: "onerror",
                    onFocus: "onfocus",
                    onFocusIn: "onfocusin",
                    onFocusOut: "onfocusout",
                    onHashChange: "onhashchange",
                    onInput: "oninput",
                    onInvalid: "oninvalid",
                    onKeyDown: "onkeydown",
                    onKeyPress: "onkeypress",
                    onKeyUp: "onkeyup",
                    onLoad: "onload",
                    onLoadedData: "onloadeddata",
                    onLoadedMetadata: "onloadedmetadata",
                    onLoadStart: "onloadstart",
                    onMessage: "onmessage",
                    onMouseDown: "onmousedown",
                    onMouseEnter: "onmouseenter",
                    onMouseLeave: "onmouseleave",
                    onMouseMove: "onmousemove",
                    onMouseOut: "onmouseout",
                    onMouseOver: "onmouseover",
                    onMouseUp: "onmouseup",
                    onMouseWheel: "onmousewheel",
                    onOffline: "onoffline",
                    onOnline: "ononline",
                    onPageHide: "onpagehide",
                    onPageShow: "onpageshow",
                    onPaste: "onpaste",
                    onPause: "onpause",
                    onPlay: "onplay",
                    onPlaying: "onplaying",
                    onPopState: "onpopstate",
                    onProgress: "onprogress",
                    onRateChange: "onratechange",
                    onRepeat: "onrepeat",
                    onReset: "onreset",
                    onResize: "onresize",
                    onScroll: "onscroll",
                    onSeeked: "onseeked",
                    onSeeking: "onseeking",
                    onSelect: "onselect",
                    onShow: "onshow",
                    onStalled: "onstalled",
                    onStorage: "onstorage",
                    onSubmit: "onsubmit",
                    onSuspend: "onsuspend",
                    onTimeUpdate: "ontimeupdate",
                    onToggle: "ontoggle",
                    onUnload: "onunload",
                    onVolumeChange: "onvolumechange",
                    onWaiting: "onwaiting",
                    onZoom: "onzoom",
                    overlinePosition: "overline-position",
                    overlineThickness: "overline-thickness",
                    paintOrder: "paint-order",
                    panose1: "panose-1",
                    pointerEvents: "pointer-events",
                    referrerPolicy: "referrerpolicy",
                    renderingIntent: "rendering-intent",
                    shapeRendering: "shape-rendering",
                    stopColor: "stop-color",
                    stopOpacity: "stop-opacity",
                    strikethroughPosition: "strikethrough-position",
                    strikethroughThickness: "strikethrough-thickness",
                    strokeDashArray: "stroke-dasharray",
                    strokeDashOffset: "stroke-dashoffset",
                    strokeLineCap: "stroke-linecap",
                    strokeLineJoin: "stroke-linejoin",
                    strokeMiterLimit: "stroke-miterlimit",
                    strokeOpacity: "stroke-opacity",
                    strokeWidth: "stroke-width",
                    tabIndex: "tabindex",
                    textAnchor: "text-anchor",
                    textDecoration: "text-decoration",
                    textRendering: "text-rendering",
                    typeOf: "typeof",
                    underlinePosition: "underline-position",
                    underlineThickness: "underline-thickness",
                    unicodeBidi: "unicode-bidi",
                    unicodeRange: "unicode-range",
                    unitsPerEm: "units-per-em",
                    vAlphabetic: "v-alphabetic",
                    vHanging: "v-hanging",
                    vIdeographic: "v-ideographic",
                    vMathematical: "v-mathematical",
                    vectorEffect: "vector-effect",
                    vertAdvY: "vert-adv-y",
                    vertOriginX: "vert-origin-x",
                    vertOriginY: "vert-origin-y",
                    wordSpacing: "word-spacing",
                    writingMode: "writing-mode",
                    xHeight: "x-height",
                    playbackOrder: "playbackorder",
                    timelineBegin: "timelinebegin"
                },
                transform: o,
                properties: {
                    about: c,
                    accentHeight: l,
                    accumulate: null,
                    additive: null,
                    alignmentBaseline: null,
                    alphabetic: l,
                    amplitude: l,
                    arabicForm: null,
                    ascent: l,
                    attributeName: null,
                    attributeType: null,
                    azimuth: l,
                    bandwidth: null,
                    baselineShift: null,
                    baseFrequency: null,
                    baseProfile: null,
                    bbox: null,
                    begin: null,
                    bias: l,
                    by: null,
                    calcMode: null,
                    capHeight: l,
                    className: a,
                    clip: null,
                    clipPath: null,
                    clipPathUnits: null,
                    clipRule: null,
                    color: null,
                    colorInterpolation: null,
                    colorInterpolationFilters: null,
                    colorProfile: null,
                    colorRendering: null,
                    content: null,
                    contentScriptType: null,
                    contentStyleType: null,
                    crossOrigin: null,
                    cursor: null,
                    cx: null,
                    cy: null,
                    d: null,
                    dataType: null,
                    defaultAction: null,
                    descent: l,
                    diffuseConstant: l,
                    direction: null,
                    display: null,
                    dur: null,
                    divisor: l,
                    dominantBaseline: null,
                    download: u,
                    dx: null,
                    dy: null,
                    edgeMode: null,
                    editable: null,
                    elevation: l,
                    enableBackground: null,
                    end: null,
                    event: null,
                    exponent: l,
                    externalResourcesRequired: null,
                    fill: null,
                    fillOpacity: l,
                    fillRule: null,
                    filter: null,
                    filterRes: null,
                    filterUnits: null,
                    floodColor: null,
                    floodOpacity: null,
                    focusable: null,
                    focusHighlight: null,
                    fontFamily: null,
                    fontSize: null,
                    fontSizeAdjust: null,
                    fontStretch: null,
                    fontStyle: null,
                    fontVariant: null,
                    fontWeight: null,
                    format: null,
                    fr: null,
                    from: null,
                    fx: null,
                    fy: null,
                    g1: s,
                    g2: s,
                    glyphName: s,
                    glyphOrientationHorizontal: null,
                    glyphOrientationVertical: null,
                    glyphRef: null,
                    gradientTransform: null,
                    gradientUnits: null,
                    handler: null,
                    hanging: l,
                    hatchContentUnits: null,
                    hatchUnits: null,
                    height: null,
                    href: null,
                    hrefLang: null,
                    horizAdvX: l,
                    horizOriginX: l,
                    horizOriginY: l,
                    id: null,
                    ideographic: l,
                    imageRendering: null,
                    initialVisibility: null,
                    in: null,
                    in2: null,
                    intercept: l,
                    k: l,
                    k1: l,
                    k2: l,
                    k3: l,
                    k4: l,
                    kernelMatrix: c,
                    kernelUnitLength: null,
                    keyPoints: null,
                    keySplines: null,
                    keyTimes: null,
                    kerning: null,
                    lang: null,
                    lengthAdjust: null,
                    letterSpacing: null,
                    lightingColor: null,
                    limitingConeAngle: l,
                    local: null,
                    markerEnd: null,
                    markerMid: null,
                    markerStart: null,
                    markerHeight: null,
                    markerUnits: null,
                    markerWidth: null,
                    mask: null,
                    maskContentUnits: null,
                    maskUnits: null,
                    mathematical: null,
                    max: null,
                    media: null,
                    mediaCharacterEncoding: null,
                    mediaContentEncodings: null,
                    mediaSize: l,
                    mediaTime: null,
                    method: null,
                    min: null,
                    mode: null,
                    name: null,
                    navDown: null,
                    navDownLeft: null,
                    navDownRight: null,
                    navLeft: null,
                    navNext: null,
                    navPrev: null,
                    navRight: null,
                    navUp: null,
                    navUpLeft: null,
                    navUpRight: null,
                    numOctaves: null,
                    observer: null,
                    offset: null,
                    onAbort: null,
                    onActivate: null,
                    onAfterPrint: null,
                    onBeforePrint: null,
                    onBegin: null,
                    onCancel: null,
                    onCanPlay: null,
                    onCanPlayThrough: null,
                    onChange: null,
                    onClick: null,
                    onClose: null,
                    onCopy: null,
                    onCueChange: null,
                    onCut: null,
                    onDblClick: null,
                    onDrag: null,
                    onDragEnd: null,
                    onDragEnter: null,
                    onDragExit: null,
                    onDragLeave: null,
                    onDragOver: null,
                    onDragStart: null,
                    onDrop: null,
                    onDurationChange: null,
                    onEmptied: null,
                    onEnd: null,
                    onEnded: null,
                    onError: null,
                    onFocus: null,
                    onFocusIn: null,
                    onFocusOut: null,
                    onHashChange: null,
                    onInput: null,
                    onInvalid: null,
                    onKeyDown: null,
                    onKeyPress: null,
                    onKeyUp: null,
                    onLoad: null,
                    onLoadedData: null,
                    onLoadedMetadata: null,
                    onLoadStart: null,
                    onMessage: null,
                    onMouseDown: null,
                    onMouseEnter: null,
                    onMouseLeave: null,
                    onMouseMove: null,
                    onMouseOut: null,
                    onMouseOver: null,
                    onMouseUp: null,
                    onMouseWheel: null,
                    onOffline: null,
                    onOnline: null,
                    onPageHide: null,
                    onPageShow: null,
                    onPaste: null,
                    onPause: null,
                    onPlay: null,
                    onPlaying: null,
                    onPopState: null,
                    onProgress: null,
                    onRateChange: null,
                    onRepeat: null,
                    onReset: null,
                    onResize: null,
                    onScroll: null,
                    onSeeked: null,
                    onSeeking: null,
                    onSelect: null,
                    onShow: null,
                    onStalled: null,
                    onStorage: null,
                    onSubmit: null,
                    onSuspend: null,
                    onTimeUpdate: null,
                    onToggle: null,
                    onUnload: null,
                    onVolumeChange: null,
                    onWaiting: null,
                    onZoom: null,
                    opacity: null,
                    operator: null,
                    order: null,
                    orient: null,
                    orientation: null,
                    origin: null,
                    overflow: null,
                    overlay: null,
                    overlinePosition: l,
                    overlineThickness: l,
                    paintOrder: null,
                    panose1: null,
                    path: null,
                    pathLength: l,
                    patternContentUnits: null,
                    patternTransform: null,
                    patternUnits: null,
                    phase: null,
                    ping: a,
                    pitch: null,
                    playbackOrder: null,
                    pointerEvents: null,
                    points: null,
                    pointsAtX: l,
                    pointsAtY: l,
                    pointsAtZ: l,
                    preserveAlpha: null,
                    preserveAspectRatio: null,
                    primitiveUnits: null,
                    propagate: null,
                    property: c,
                    r: null,
                    radius: null,
                    referrerPolicy: null,
                    refX: null,
                    refY: null,
                    rel: c,
                    rev: c,
                    renderingIntent: null,
                    repeatCount: null,
                    repeatDur: null,
                    requiredExtensions: c,
                    requiredFeatures: c,
                    requiredFonts: c,
                    requiredFormats: c,
                    resource: null,
                    restart: null,
                    result: null,
                    rotate: null,
                    rx: null,
                    ry: null,
                    scale: null,
                    seed: null,
                    shapeRendering: null,
                    side: null,
                    slope: null,
                    snapshotTime: null,
                    specularConstant: l,
                    specularExponent: l,
                    spreadMethod: null,
                    spacing: null,
                    startOffset: null,
                    stdDeviation: null,
                    stemh: null,
                    stemv: null,
                    stitchTiles: null,
                    stopColor: null,
                    stopOpacity: null,
                    strikethroughPosition: l,
                    strikethroughThickness: l,
                    string: null,
                    stroke: null,
                    strokeDashArray: c,
                    strokeDashOffset: null,
                    strokeLineCap: null,
                    strokeLineJoin: null,
                    strokeMiterLimit: l,
                    strokeOpacity: l,
                    strokeWidth: null,
                    style: null,
                    surfaceScale: l,
                    syncBehavior: null,
                    syncBehaviorDefault: null,
                    syncMaster: null,
                    syncTolerance: null,
                    syncToleranceDefault: null,
                    systemLanguage: c,
                    tabIndex: l,
                    tableValues: null,
                    target: null,
                    targetX: l,
                    targetY: l,
                    textAnchor: null,
                    textDecoration: null,
                    textRendering: null,
                    textLength: null,
                    timelineBegin: null,
                    title: null,
                    transformBehavior: null,
                    type: null,
                    typeOf: c,
                    to: null,
                    transform: null,
                    u1: null,
                    u2: null,
                    underlinePosition: l,
                    underlineThickness: l,
                    unicode: null,
                    unicodeBidi: null,
                    unicodeRange: null,
                    unitsPerEm: l,
                    values: null,
                    vAlphabetic: l,
                    vMathematical: l,
                    vectorEffect: null,
                    vHanging: l,
                    vIdeographic: l,
                    version: null,
                    vertAdvY: l,
                    vertOriginX: l,
                    vertOriginY: l,
                    viewBox: null,
                    viewTarget: null,
                    visibility: null,
                    width: null,
                    widths: null,
                    wordSpacing: null,
                    writingMode: null,
                    x: null,
                    x1: null,
                    x2: null,
                    xChannelSelector: null,
                    xHeight: l,
                    y: null,
                    y1: null,
                    y2: null,
                    yChannelSelector: null,
                    z: null,
                    zoomAndPan: null
                }
            })
        },
        10855: (e, t, n) => {
            "use strict";
            var r = n(28740);
            e.exports = function(e, t) {
                return r(e, t.toLowerCase())
            }
        },
        28740: e => {
            "use strict";
            e.exports = function(e, t) {
                return t in e ? e[t] : t
            }
        },
        17596: (e, t, n) => {
            "use strict";
            var r = n(66632),
                i = n(99607),
                o = n(81674);
            e.exports = function(e) {
                var t, n, u = e.space,
                    l = e.mustUseProperty || [],
                    a = e.attributes || {},
                    s = e.properties,
                    c = e.transform,
                    f = {},
                    p = {};
                for (t in s) n = new o(t, c(a, t), s[t], u), -1 !== l.indexOf(t) && (n.mustUseProperty = !0), f[t] = n, p[r(t)] = t, p[r(n.attribute)] = t;
                return new i(f, p, u)
            }
        },
        81674: (e, t, n) => {
            "use strict";
            var r = n(57643),
                i = n(17e3);
            e.exports = l, l.prototype = new r, l.prototype.defined = !0;
            var o = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"],
                u = o.length;

            function l(e, t, n, l) {
                var s, c = -1;
                for (a(this, "space", l), r.call(this, e, t); ++c < u;) a(this, s = o[c], (n & i[s]) === i[s])
            }

            function a(e, t, n) {
                n && (e[t] = n)
            }
        },
        57643: e => {
            "use strict";
            e.exports = n;
            var t = n.prototype;

            function n(e, t) {
                this.property = e, this.attribute = t
            }
            t.space = null, t.attribute = null, t.property = null, t.boolean = !1, t.booleanish = !1, t.overloadedBoolean = !1, t.number = !1, t.commaSeparated = !1, t.spaceSeparated = !1, t.commaOrSpaceSeparated = !1, t.mustUseProperty = !1, t.defined = !1
        },
        19940: (e, t, n) => {
            "use strict";
            var r = n(47529),
                i = n(99607);
            e.exports = function(e) {
                var t, n, o = e.length,
                    u = [],
                    l = [],
                    a = -1;
                for (; ++a < o;) t = e[a], u.push(t.property), l.push(t.normal), n = t.space;
                return new i(r.apply(null, u), r.apply(null, l), n)
            }
        },
        99607: e => {
            "use strict";
            e.exports = n;
            var t = n.prototype;

            function n(e, t, n) {
                this.property = e, this.normal = t, n && (this.space = n)
            }
            t.space = null, t.normal = {}, t.property = {}
        },
        17e3: (e, t) => {
            "use strict";
            var n = 0;

            function r() {
                return Math.pow(2, ++n)
            }
            t.boolean = r(), t.booleanish = r(), t.overloadedBoolean = r(), t.number = r(), t.spaceSeparated = r(), t.commaSeparated = r(), t.commaOrSpaceSeparated = r()
        },
        8289: (e, t, n) => {
            "use strict";
            var r = n(17596);
            e.exports = r({
                space: "xlink",
                transform: function(e, t) {
                    return "xlink:" + t.slice(5).toLowerCase()
                },
                properties: {
                    xLinkActuate: null,
                    xLinkArcRole: null,
                    xLinkHref: null,
                    xLinkRole: null,
                    xLinkShow: null,
                    xLinkTitle: null,
                    xLinkType: null
                }
            })
        },
        5812: (e, t, n) => {
            "use strict";
            var r = n(17596);
            e.exports = r({
                space: "xml",
                transform: function(e, t) {
                    return "xml:" + t.slice(3).toLowerCase()
                },
                properties: {
                    xmlLang: null,
                    xmlBase: null,
                    xmlSpace: null
                }
            })
        },
        94397: (e, t, n) => {
            "use strict";
            var r = n(17596),
                i = n(10855);
            e.exports = r({
                space: "xmlns",
                attributes: {
                    xmlnsxlink: "xmlns:xlink"
                },
                transform: i,
                properties: {
                    xmlns: null,
                    xmlnsXLink: null
                }
            })
        },
        66632: e => {
            "use strict";
            e.exports = function(e) {
                return e.toLowerCase()
            }
        },
        11218: (e, t, n) => {
            "use strict";
            var r = n(19940),
                i = n(8289),
                o = n(5812),
                u = n(94397),
                l = n(67716),
                a = n(45789);
            e.exports = r([o, i, u, l, a])
        },
        73639: (e, t, n) => {
            "use strict";
            n.d(t, {
                MN: () => d
            });
            var r = n(67294),
                i = n(18835),
                o = n.n(i),
                u = n(15046),
                l = n.n(u),
                a = n(78818),
                s = n.n(a),
                c = n(27431),
                f = n.n(c);

            function p() {
                return p = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, p.apply(this, arguments)
            }
            var h = ["children"],
                d = function(e) {
                    var t = e.children,
                        n = function(e) {
                            var t = void 0 === e ? {} : e,
                                n = t.remarkParseOptions,
                                i = t.remarkToRehypeOptions,
                                u = t.rehypeReactOptions,
                                a = t.remarkPlugins,
                                c = void 0 === a ? [] : a,
                                h = t.rehypePlugins,
                                d = void 0 === h ? [] : h,
                                m = t.onError,
                                g = void 0 === m ? function() {} : m,
                                v = (0, r.useState)(null),
                                y = v[0],
                                x = v[1];
                            return [y, (0, r.useCallback)((function(e) {
                                o()().use(l(), n).use(c).use(s(), i).use(d).use(f(), p({
                                    createElement: r.createElement,
                                    Fragment: r.Fragment
                                }, u)).process(e).then((function(e) {
                                    return x(e.result)
                                })).catch(g)
                            }), [])]
                        }(function(e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(e, h)),
                        i = n[0],
                        u = n[1];
                    return (0, r.useEffect)((function() {
                        u(t)
                    }), [t, u]), i
                }
        },
        15046: (e, t, n) => {
            "use strict";
            e.exports = function(e) {
                var t = this;
                this.Parser = function(n) {
                    return r(n, Object.assign({}, t.data("settings"), e, {
                        extensions: t.data("micromarkExtensions") || [],
                        mdastExtensions: t.data("fromMarkdownExtensions") || []
                    }))
                }
            };
            var r = n(39671)
        },
        50146: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(67294),
                i = n(45697),
                o = n.n(i),
                u = n(65061),
                l = n(22040);

            function a(e) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a(e)
            }

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function f() {
                return f = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, f.apply(this, arguments)
            }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function h(e, t) {
                return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, h(e, t)
            }

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = g(e);
                    if (t) {
                        var i = g(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === a(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return m(e)
                    }(this, n)
                }
            }

            function m(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function g(e) {
                return g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, g(e)
            }
            var v = ["defaultOpen"],
                y = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && h(e, t)
                    }(a, e);
                    var t, n, i, o = d(a);

                    function a(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, a), (t = o.call(this, e)).state = {
                            isOpen: e.defaultOpen || !1
                        }, t.toggle = t.toggle.bind(m(t)), t
                    }
                    return t = a, (n = [{
                        key: "toggle",
                        value: function() {
                            this.setState((function(e) {
                                return {
                                    isOpen: !e.isOpen
                                }
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return r.createElement(u.Z, f({
                                isOpen: this.state.isOpen,
                                toggle: this.toggle
                            }, (0, l.CE)(this.props, v)))
                        }
                    }]) && p(t.prototype, n), i && p(t, i), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), a
                }(r.Component);
            y.propTypes = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        c(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({
                defaultOpen: o().bool
            }, u.Z.propTypes)
        },
        27431: (e, t, n) => {
            "use strict";
            var r = n(76331),
                i = n(90478);
            e.exports = function(e) {
                var t = e || {},
                    n = t.createElement;

                function l(e, r, i) {
                    var l = e;
                    return i && u.has(e) && (i = i.filter((function(e) {
                        return "\n" !== e
                    }))), t.components && o.call(t.components, e) && (l = t.components[e], t.passNode && (r.node = this)), n(l, r, i)
                }
                this.Compiler = function(e) {
                    var o = r(l, i(e), t.prefix);
                    return "root" === e.type ? (o = "div" !== o.type || 1 === e.children.length && "element" === e.children[0].type ? [o] : o.props.children, n(t.Fragment || "div", {}, o)) : o
                }
            };
            var o = {}.hasOwnProperty,
                u = new Set(["table", "thead", "tbody", "tfoot", "tr", "th", "td"])
        },
        78818: (e, t, n) => {
            "use strict";
            var r = n(26555);
            e.exports = function(e, t) {
                e && !e.process && (t = e, e = null);
                return e ? function(e, t) {
                    return n;

                    function n(n, i, o) {
                        function u(e) {
                            o(e)
                        }
                        e.run(r(n, t), i, u)
                    }
                }(e, t) : function(e) {
                    return t;

                    function t(t) {
                        return r(t, e)
                    }
                }(t)
            }
        },
        26555: (e, t, n) => {
            "use strict";
            e.exports = n(22064)
        },
        13331: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n, i, o = t.children || [],
                    u = o.length,
                    l = [],
                    a = -1;
                for (; ++a < u;)(n = r(e, o[a], t)) && (a && "break" === o[a - 1].type && (n.value && (n.value = n.value.replace(/^\s+/, "")), (i = n.children && n.children[0]) && i.value && (i.value = i.value.replace(/^\s+/, ""))), l = l.concat(n));
                return l
            };
            var r = n(17828)
        },
        4528: (e, t, n) => {
            "use strict";
            e.exports = function(e) {
                var t, n, u, l, a = e.footnoteById,
                    s = e.footnoteOrder,
                    c = s.length,
                    f = -1,
                    p = [];
                for (; ++f < c;)(t = a[s[f].toUpperCase()]) && (l = (u = t.children.concat())[u.length - 1], n = {
                    type: "link",
                    url: "#fnref-" + t.identifier,
                    data: {
                        hProperties: {
                            className: ["footnote-backref"]
                        }
                    },
                    children: [{
                        type: "text",
                        value: "↩"
                    }]
                }, l && "paragraph" === l.type || (l = {
                    type: "paragraph",
                    children: []
                }, u.push(l)), l.children.push(n), p.push({
                    type: "listItem",
                    data: {
                        hProperties: {
                            id: "fn-" + t.identifier
                        }
                    },
                    children: u,
                    position: t.position
                }));
                if (0 === p.length) return null;
                return e(null, "div", {
                    className: ["footnotes"]
                }, o([r(e), i(e, {
                    type: "list",
                    ordered: !0,
                    children: p
                })], !0))
            };
            var r = n(4318),
                i = n(1003),
                o = n(67775)
        },
        7576: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "blockquote", r(i(e, t), !0))
            };
            var r = n(67775),
                i = n(13331)
        },
        54868: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return [e(t, "br"), r("text", "\n")]
            };
            var r = n(50914)
        },
        9601: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n, i = t.value ? t.value + "\n" : "",
                    o = t.lang && t.lang.match(/^[^ \t]+(?=[ \t]|$)/),
                    u = {};
                o && (u.className = ["language-" + o]);
                n = e(t, "code", u, [r("text", i)]), t.meta && (n.data = {
                    meta: t.meta
                });
                return e(t.position, "pre", [n])
            };
            var r = n(50914)
        },
        36267: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "del", r(e, t))
            };
            var r = n(13331)
        },
        91671: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "em", r(e, t))
            };
            var r = n(13331)
        },
        70060: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n = e.footnoteOrder,
                    i = String(t.identifier); - 1 === n.indexOf(i) && n.push(i);
                return e(t.position, "sup", {
                    id: "fnref-" + i
                }, [e(t, "a", {
                    href: "#fn-" + i,
                    className: ["footnote-ref"]
                }, [r("text", t.label || i)])])
            };
            var r = n(50914)
        },
        63037: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n = e.footnoteById,
                    i = e.footnoteOrder,
                    o = 1;
                for (; o in n;) o++;
                return o = String(o), i.push(o), n[o] = {
                    type: "footnoteDefinition",
                    identifier: o,
                    children: [{
                        type: "paragraph",
                        children: t.children
                    }],
                    position: t.position
                }, r(e, {
                    type: "footnoteReference",
                    identifier: o,
                    position: t.position
                })
            };
            var r = n(70060)
        },
        3456: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "h" + t.depth, r(e, t))
            };
            var r = n(13331)
        },
        73737: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return e.dangerous ? e.augment(t, r("raw", t.value)) : null
            };
            var r = n(50914)
        },
        24943: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n, o = e.definition(t.identifier);
                if (!o) return i(e, t);
                n = {
                    src: r(o.url || ""),
                    alt: t.alt
                }, null !== o.title && void 0 !== o.title && (n.title = o.title);
                return e(t, "img", n)
            };
            var r = n(70729),
                i = n(58663)
        },
        52612: (e, t, n) => {
            "use strict";
            var r = n(70729);
            e.exports = function(e, t) {
                var n = {
                    src: r(t.url),
                    alt: t.alt
                };
                null !== t.title && void 0 !== t.title && (n.title = t.title);
                return e(t, "img", n)
            }
        },
        45016: (e, t, n) => {
            "use strict";

            function r() {
                return null
            }
            e.exports = {
                blockquote: n(7576),
                break: n(54868),
                code: n(9601),
                delete: n(36267),
                emphasis: n(91671),
                footnoteReference: n(70060),
                footnote: n(63037),
                heading: n(3456),
                html: n(73737),
                imageReference: n(24943),
                image: n(52612),
                inlineCode: n(54563),
                linkReference: n(7010),
                link: n(73793),
                listItem: n(52328),
                list: n(1003),
                paragraph: n(50634),
                root: n(71128),
                strong: n(60110),
                table: n(21270),
                text: n(65835),
                thematicBreak: n(4318),
                toml: r,
                yaml: r,
                definition: r,
                footnoteDefinition: r
            }
        },
        54563: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n = t.value.replace(/\r?\n|\r/g, " ");
                return e(t, "code", [r("text", n)])
            };
            var r = n(50914)
        },
        7010: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n, u = e.definition(t.identifier);
                if (!u) return i(e, t);
                n = {
                    href: r(u.url || "")
                }, null !== u.title && void 0 !== u.title && (n.title = u.title);
                return e(t, "a", n, o(e, t))
            };
            var r = n(70729),
                i = n(58663),
                o = n(13331)
        },
        73793: (e, t, n) => {
            "use strict";
            var r = n(70729),
                i = n(13331);
            e.exports = function(e, t) {
                var n = {
                    href: r(t.url)
                };
                null !== t.title && void 0 !== t.title && (n.title = t.title);
                return e(t, "a", n, i(e, t))
            }
        },
        52328: (e, t, n) => {
            "use strict";
            e.exports = function(e, t, n) {
                var u, l, a, s = i(e, t),
                    c = s[0],
                    f = n ? function(e) {
                        var t = e.spread,
                            n = e.children,
                            r = n.length,
                            i = -1;
                        for (; !t && ++i < r;) t = o(n[i]);
                        return t
                    }(n) : o(t),
                    p = {},
                    h = [];
                "boolean" == typeof t.checked && (c && "p" === c.tagName || (c = e(null, "p", []), s.unshift(c)), c.children.length > 0 && c.children.unshift(r("text", " ")), c.children.unshift(e(null, "input", {
                    type: "checkbox",
                    checked: t.checked,
                    disabled: !0
                })), p.className = ["task-list-item"]);
                u = s.length, l = -1;
                for (; ++l < u;) a = s[l], (f || 0 !== l || "p" !== a.tagName) && h.push(r("text", "\n")), "p" !== a.tagName || f ? h.push(a) : h = h.concat(a.children);
                u && (f || "p" !== a.tagName) && h.push(r("text", "\n"));
                return e(t, "li", p, h)
            };
            var r = n(50914),
                i = n(13331);

            function o(e) {
                var t = e.spread;
                return null == t ? e.children.length > 1 : t
            }
        },
        1003: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n, o, u = {},
                    l = t.ordered ? "ol" : "ul",
                    a = -1;
                "number" == typeof t.start && 1 !== t.start && (u.start = t.start);
                n = i(e, t), o = n.length;
                for (; ++a < o;)
                    if (n[a].properties.className && -1 !== n[a].properties.className.indexOf("task-list-item")) {
                        u.className = ["contains-task-list"];
                        break
                    } return e(t, l, u, r(n, !0))
            };
            var r = n(67775),
                i = n(13331)
        },
        50634: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "p", r(e, t))
            };
            var r = n(13331)
        },
        71128: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return e.augment(t, r("root", i(o(e, t))))
            };
            var r = n(50914),
                i = n(67775),
                o = n(13331)
        },
        60110: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "strong", r(e, t))
            };
            var r = n(13331)
        },
        21270: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n, u, l, a, s, c = t.children,
                    f = c.length,
                    p = t.align || [],
                    h = p.length,
                    d = [];
                for (; f--;) {
                    for (u = c[f].children, a = 0 === f ? "th" : "td", n = h || u.length, l = []; n--;) s = u[n], l[n] = e(s, a, {
                        align: p[n]
                    }, s ? o(e, s) : []);
                    d[f] = e(c[f], "tr", i(l, !0))
                }
                return e(t, "table", i([e(d[0].position, "thead", i([d[0]], !0))].concat(d[1] ? e({
                    start: r.start(d[1]),
                    end: r.end(d[d.length - 1])
                }, "tbody", i(d.slice(1), !0)) : []), !0))
            };
            var r = n(77361),
                i = n(67775),
                o = n(13331)
        },
        65835: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return e.augment(t, r("text", String(t.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1")))
            };
            var r = n(50914)
        },
        4318: e => {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "hr")
            }
        },
        22064: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n = function(e, t) {
                        var n = t || {};
                        void 0 === n.allowDangerousHTML || p || (p = !0, console.warn("mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead"));
                        var r = n.allowDangerousHtml || n.allowDangerousHTML,
                            a = {};
                        return h.dangerous = r, h.definition = l(e), h.footnoteById = a, h.footnoteOrder = [], h.augment = s, h.handlers = Object.assign({}, c, n.handlers), h.unknownHandler = n.unknownHandler, h.passThrough = n.passThrough, i(e, "footnoteDefinition", d), h;

                        function s(e, t) {
                            var n, r;
                            return e && e.data && ((n = e.data).hName && ("element" !== t.type && (t = {
                                type: "element",
                                tagName: "",
                                properties: {},
                                children: []
                            }), t.tagName = n.hName), "element" === t.type && n.hProperties && (t.properties = Object.assign({}, t.properties, n.hProperties)), t.children && n.hChildren && (t.children = n.hChildren)), r = e && e.position ? e : {
                                position: e
                            }, u(r) || (t.position = {
                                start: o.start(r),
                                end: o.end(r)
                            }), t
                        }

                        function h(e, t, n, r) {
                            return null == r && "object" == typeof n && "length" in n && (r = n, n = {}), s(e, {
                                type: "element",
                                tagName: t,
                                properties: n || {},
                                children: r || []
                            })
                        }

                        function d(e) {
                            var t = String(e.identifier).toUpperCase();
                            f.call(a, t) || (a[t] = e)
                        }
                    }(e, t),
                    h = a(n, e),
                    d = s(n);
                d && (h.children = h.children.concat(r("text", "\n"), d));
                return h
            };
            var r = n(50914),
                i = n(62854),
                o = n(77361),
                u = n(61744),
                l = n(86630),
                a = n(17828),
                s = n(4528),
                c = n(45016),
                f = {}.hasOwnProperty,
                p = !1
        },
        17828: (e, t, n) => {
            "use strict";
            e.exports = function(e, t, n) {
                var r, i = t && t.type;
                if (!i) throw new Error("Expected node, got `" + t + "`");
                r = o.call(e.handlers, i) ? e.handlers[i] : e.passThrough && e.passThrough.indexOf(i) > -1 ? l : e.unknownHandler;
                return ("function" == typeof r ? r : u)(e, t, n)
            };
            var r = n(50914),
                i = n(13331),
                o = {}.hasOwnProperty;

            function u(e, t) {
                return function(e) {
                    var t = e.data || {};
                    if (o.call(t, "hName") || o.call(t, "hProperties") || o.call(t, "hChildren")) return !1;
                    return "value" in e
                }(t) ? e.augment(t, r("text", t.value)) : e(t, "div", i(e, t))
            }

            function l(e, t) {
                var n;
                return t.children ? ((n = Object.assign({}, t)).children = i(e, t), n) : t
            }
        },
        58663: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n, o, u, l = t.referenceType,
                    a = "]";
                "collapsed" === l ? a += "[]" : "full" === l && (a += "[" + (t.label || t.identifier) + "]");
                if ("imageReference" === t.type) return r("text", "![" + t.alt + a);
                n = i(e, t), (o = n[0]) && "text" === o.type ? o.value = "[" + o.value : n.unshift(r("text", "["));
                (u = n[n.length - 1]) && "text" === u.type ? u.value += a : n.push(r("text", a));
                return n
            };
            var r = n(50914),
                i = n(13331)
        },
        67775: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n = [],
                    i = -1,
                    o = e.length;
                t && n.push(r("text", "\n"));
                for (; ++i < o;) i && n.push(r("text", "\n")), n.push(e[i]);
                t && e.length > 0 && n.push(r("text", "\n"));
                return n
            };
            var r = n(50914)
        },
        36582: (e, t) => {
            "use strict";
            t.parse = function(e) {
                var t = String(e || n).trim();
                return t === n ? [] : t.split(i)
            }, t.stringify = function(e) {
                return e.join(r).trim()
            };
            var n = "",
                r = " ",
                i = /[ \t\n\r\f]+/g
        },
        57848: (e, t, n) => {
            var r = n(18139);
            e.exports = function(e, t) {
                var n, i = null;
                if (!e || "string" != typeof e) return i;
                for (var o, u, l = r(e), a = "function" == typeof t, s = 0, c = l.length; s < c; s++) o = (n = l[s]).property, u = n.value, a ? t(o, u, n) : u && (i || (i = {}), i[o] = u);
                return i
            }
        },
        28281: (e, t, n) => {
            "use strict";
            var r = n(43368);
            e.exports = o, o.wrap = r;
            var i = [].slice;

            function o() {
                var e = [],
                    t = {
                        run: function() {
                            var t = -1,
                                n = i.call(arguments, 0, -1),
                                o = arguments[arguments.length - 1];
                            if ("function" != typeof o) throw new Error("Expected function as last argument, not " + o);
                            (function u(l) {
                                var a = e[++t],
                                    s = i.call(arguments, 0).slice(1),
                                    c = n.length,
                                    f = -1;
                                if (l) o(l);
                                else {
                                    for (; ++f < c;) null !== s[f] && void 0 !== s[f] || (s[f] = n[f]);
                                    n = s, a ? r(a, u).apply(null, n) : o.apply(null, [null].concat(n))
                                }
                            }).apply(null, [null].concat(n))
                        },
                        use: function(n) {
                            if ("function" != typeof n) throw new Error("Expected `fn` to be a function, not " + n);
                            return e.push(n), t
                        }
                    };
                return t
            }
        },
        43368: e => {
            "use strict";
            var t = [].slice;
            e.exports = function(e, n) {
                var r;
                return function() {
                    var n, u = t.call(arguments, 0),
                        l = e.length > u.length;
                    l && u.push(i);
                    try {
                        n = e.apply(null, u)
                    } catch (e) {
                        if (l && r) throw e;
                        return i(e)
                    }
                    l || (n && "function" == typeof n.then ? n.then(o, i) : n instanceof Error ? i(n) : o(n))
                };

                function i() {
                    r || (r = !0, n.apply(null, arguments))
                }

                function o(e) {
                    i(null, e)
                }
            }
        },
        18835: (e, t, n) => {
            "use strict";
            var r = n(18869),
                i = n(73469),
                o = n(94470),
                u = n(33310),
                l = n(28281),
                a = n(10939);
            e.exports = function e() {
                var t = [],
                    n = l(),
                    i = {},
                    y = !1,
                    x = -1;
                return k.data = function(e, t) {
                    if ("string" == typeof e) return 2 === arguments.length ? (m("data", y), i[e] = t, k) : c.call(i, e) && i[e] || null;
                    if (e) return m("data", y), i = e, k;
                    return i
                }, k.freeze = b, k.attachers = t, k.use = function(e) {
                    var n;
                    if (m("use", y), null == e);
                    else if ("function" == typeof e) c.apply(null, arguments);
                    else {
                        if ("object" != typeof e) throw new Error("Expected usable value, not `" + e + "`");
                        "length" in e ? a(e) : r(e)
                    }
                    n && (i.settings = o(i.settings || {}, n));
                    return k;

                    function r(e) {
                        a(e.plugins), e.settings && (n = o(n || {}, e.settings))
                    }

                    function l(e) {
                        if ("function" == typeof e) c(e);
                        else {
                            if ("object" != typeof e) throw new Error("Expected usable value, not `" + e + "`");
                            "length" in e ? c.apply(null, e) : r(e)
                        }
                    }

                    function a(e) {
                        var t, n;
                        if (null == e);
                        else {
                            if ("object" != typeof e || !("length" in e)) throw new Error("Expected a list of plugins, not `" + e + "`");
                            for (t = e.length, n = -1; ++n < t;) l(e[n])
                        }
                    }

                    function c(e, n) {
                        var r = S(e);
                        r ? (u(r[1]) && u(n) && (n = o(r[1], n)), r[1] = n) : t.push(s.call(arguments))
                    }
                }, k.parse = function(e) {
                    var t, n = a(e);
                    if (b(), h("parse", t = k.Parser), p(t, "parse")) return new t(String(n), n).parse();
                    return t(String(n), n)
                }, k.stringify = function(e, t) {
                    var n, r = a(t);
                    if (b(), d("stringify", n = k.Compiler), g(e), p(n, "compile")) return new n(e, r).compile();
                    return n(e, r)
                }, k.run = w, k.runSync = function(e, t) {
                    var n, i = !1;
                    return w(e, t, o), v("runSync", "run", i), n;

                    function o(e, t) {
                        i = !0, r(e), n = t
                    }
                }, k.process = C, k.processSync = function(e) {
                    var t, n = !1;
                    return b(), h("processSync", k.Parser), d("processSync", k.Compiler), C(t = a(e), i), v("processSync", "process", n), t;

                    function i(e) {
                        n = !0, r(e)
                    }
                }, k;

                function k() {
                    for (var n = e(), r = t.length, u = -1; ++u < r;) n.use.apply(null, t[u]);
                    return n.data(o(!0, {}, i)), n
                }

                function b() {
                    var e, r, i, o;
                    if (y) return k;
                    for (; ++x < t.length;) r = (e = t[x])[0], null, !1 !== (i = e[1]) && (!0 === i && (e[1] = void 0), "function" == typeof(o = r.apply(k, e.slice(1))) && n.use(o));
                    return y = !0, x = 1 / 0, k
                }

                function S(e) {
                    for (var n, r = t.length, i = -1; ++i < r;)
                        if ((n = t[i])[0] === e) return n
                }

                function w(e, t, r) {
                    if (g(e), b(), r || "function" != typeof t || (r = t, t = null), !r) return new Promise(i);

                    function i(i, o) {
                        n.run(e, a(t), (function(t, n, u) {
                            n = n || e, t ? o(t) : i ? i(n) : r(null, n, u)
                        }))
                    }
                    i(null, r)
                }

                function C(e, t) {
                    if (b(), h("process", k.Parser), d("process", k.Compiler), !t) return new Promise(n);

                    function n(n, r) {
                        var i = a(e);
                        f.run(k, {
                            file: i
                        }, (function(e) {
                            e ? r(e) : n ? n(i) : t(null, i)
                        }))
                    }
                    n(null, t)
                }
            }().freeze();
            var s = [].slice,
                c = {}.hasOwnProperty,
                f = l().use((function(e, t) {
                    t.tree = e.parse(t.file)
                })).use((function(e, t, n) {
                    e.run(t.tree, t.file, (function(e, r, i) {
                        e ? n(e) : (t.tree = r, t.file = i, n())
                    }))
                })).use((function(e, t) {
                    var n = e.stringify(t.tree, t.file),
                        r = t.file;
                    null == n || ("string" == typeof n || i(n) ? r.contents = n : r.result = n)
                }));

            function p(e, t) {
                return "function" == typeof e && e.prototype && (function(e) {
                    var t;
                    for (t in e) return !0;
                    return !1
                }(e.prototype) || t in e.prototype)
            }

            function h(e, t) {
                if ("function" != typeof t) throw new Error("Cannot `" + e + "` without `Parser`")
            }

            function d(e, t) {
                if ("function" != typeof t) throw new Error("Cannot `" + e + "` without `Compiler`")
            }

            function m(e, t) {
                if (t) throw new Error("Cannot invoke `" + e + "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.")
            }

            function g(e) {
                if (!e || "string" != typeof e.type) throw new Error("Expected node, got `" + e + "`")
            }

            function v(e, t, n) {
                if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
            }
        },
        73469: e => {
            e.exports = function(e) {
                return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
        },
        50914: e => {
            "use strict";
            e.exports = function(e, t, n) {
                var r;
                null != n || "object" == typeof t && !Array.isArray(t) || (n = t, t = {});
                r = Object.assign({
                    type: String(e)
                }, t), Array.isArray(n) ? r.children = n : null != n && (r.value = String(n));
                return r
            }
        },
        61744: e => {
            "use strict";
            e.exports = function(e) {
                return !(e && e.position && e.position.start && e.position.start.line && e.position.start.column && e.position.end && e.position.end.line && e.position.end.column)
            }
        },
        48145: e => {
            "use strict";

            function t(e) {
                if (null == e) return n;
                if ("string" == typeof e) return function(e) {
                    return t;

                    function t(t) {
                        return Boolean(t && t.type === e)
                    }
                }(e);
                if ("object" == typeof e) return "length" in e ? function(e) {
                    var n = [],
                        r = -1;
                    for (; ++r < e.length;) n[r] = t(e[r]);
                    return i;

                    function i() {
                        for (var e = -1; ++e < n.length;)
                            if (n[e].apply(this, arguments)) return !0;
                        return !1
                    }
                }(e) : function(e) {
                    return t;

                    function t(t) {
                        var n;
                        for (n in e)
                            if (t[n] !== e[n]) return !1;
                        return !0
                    }
                }(e);
                if ("function" == typeof e) return e;
                throw new Error("Expected function, string, or object as test")
            }

            function n() {
                return !0
            }
            e.exports = t
        },
        77361: e => {
            "use strict";
            var t = i("start"),
                n = i("end");

            function r(e) {
                return {
                    start: t(e),
                    end: n(e)
                }
            }

            function i(e) {
                return t.displayName = e, t;

                function t(t) {
                    var n = t && t.position && t.position[e] || {};
                    return {
                        line: n.line || null,
                        column: n.column || null,
                        offset: isNaN(n.offset) ? null : n.offset
                    }
                }
            }
            e.exports = r, r.start = t, r.end = n
        },
        75432: e => {
            "use strict";
            var t = {}.hasOwnProperty;

            function n(e) {
                return e && "object" == typeof e || (e = {}), i(e.line) + ":" + i(e.column)
            }

            function r(e) {
                return e && "object" == typeof e || (e = {}), n(e.start) + "-" + n(e.end)
            }

            function i(e) {
                return e && "number" == typeof e ? e : 1
            }
            e.exports = function(e) {
                if (!e || "object" != typeof e) return "";
                if (t.call(e, "position") || t.call(e, "type")) return r(e.position);
                if (t.call(e, "start") || t.call(e, "end")) return r(e);
                if (t.call(e, "line") || t.call(e, "column")) return n(e);
                return ""
            }
        },
        66750: e => {
            e.exports = function(e) {
                return e
            }
        },
        99294: (e, t, n) => {
            "use strict";
            e.exports = a;
            var r = n(48145),
                i = n(66750),
                o = !0,
                u = "skip",
                l = !1;

            function a(e, t, n, a) {
                var s, c;
                "function" == typeof t && "function" != typeof n && (a = n, n = t, t = null), c = r(t), s = a ? -1 : 1,
                    function e(r, f, p) {
                        var h, d = "object" == typeof r && null !== r ? r : {};
                        "string" == typeof d.type && (h = "string" == typeof d.tagName ? d.tagName : "string" == typeof d.name ? d.name : void 0, m.displayName = "node (" + i(d.type + (h ? "<" + h + ">" : "")) + ")");
                        return m;

                        function m() {
                            var i, h, d = p.concat(r),
                                m = [];
                            if ((!t || c(r, f, p[p.length - 1] || null)) && (m = function(e) {
                                    if (null !== e && "object" == typeof e && "length" in e) return e;
                                    if ("number" == typeof e) return [o, e];
                                    return [e]
                                }(n(r, p)), m[0] === l)) return m;
                            if (r.children && m[0] !== u)
                                for (h = (a ? r.children.length : -1) + s; h > -1 && h < r.children.length;) {
                                    if ((i = e(r.children[h], h, d)())[0] === l) return i;
                                    h = "number" == typeof i[1] ? i[1] : h + s
                                }
                            return m
                        }
                    }(e, null, [])()
            }
            a.CONTINUE = o, a.SKIP = u, a.EXIT = l
        },
        62854: (e, t, n) => {
            "use strict";
            e.exports = l;
            var r = n(99294),
                i = r.CONTINUE,
                o = r.SKIP,
                u = r.EXIT;

            function l(e, t, n, i) {
                "function" == typeof t && "function" != typeof n && (i = n, n = t, t = null), r(e, t, (function(e, t) {
                    var r = t[t.length - 1],
                        i = r ? r.children.indexOf(e) : null;
                    return n(e, i, r)
                }), i)
            }
            l.CONTINUE = i, l.SKIP = o, l.EXIT = u
        },
        80734: (e, t, n) => {
            "use strict";
            var r = n(75432);

            function i() {}
            e.exports = u, i.prototype = Error.prototype, u.prototype = new i;
            var o = u.prototype;

            function u(e, t, n) {
                var i, o, u;
                "string" == typeof t && (n = t, t = null), i = function(e) {
                    var t, n = [null, null];
                    "string" == typeof e && (-1 === (t = e.indexOf(":")) ? n[1] = e : (n[0] = e.slice(0, t), n[1] = e.slice(t + 1)));
                    return n
                }(n), o = r(t) || "1:1", u = {
                    start: {
                        line: null,
                        column: null
                    },
                    end: {
                        line: null,
                        column: null
                    }
                }, t && t.position && (t = t.position), t && (t.start ? (u = t, t = t.start) : u.start = t), e.stack && (this.stack = e.stack, e = e.message), this.message = e, this.name = o, this.reason = e, this.line = t ? t.line : null, this.column = t ? t.column : null, this.location = u, this.source = i[0], this.ruleId = i[1]
            }
            o.file = "", o.name = "", o.reason = "", o.message = "", o.stack = "", o.fatal = null, o.column = null, o.line = null
        },
        10939: (e, t, n) => {
            "use strict";
            e.exports = n(65905)
        },
        45442: (e, t, n) => {
            "use strict";
            var r = n(28064),
                i = n(31126),
                o = n(70529);
            e.exports = a;
            var u = {}.hasOwnProperty,
                l = ["history", "path", "basename", "stem", "extname", "dirname"];

            function a(e) {
                var t, n;
                if (e) {
                    if ("string" == typeof e || o(e)) e = {
                        contents: e
                    };
                    else if ("message" in e && "messages" in e) return e
                } else e = {};
                if (!(this instanceof a)) return new a(e);
                for (this.data = {}, this.messages = [], this.history = [], this.cwd = i.cwd(), n = -1; ++n < l.length;) t = l[n], u.call(e, t) && (this[t] = e[t]);
                for (t in e) l.indexOf(t) < 0 && (this[t] = e[t])
            }

            function s(e, t) {
                if (e && e.indexOf(r.sep) > -1) throw new Error("`" + t + "` cannot be a path: did not expect `" + r.sep + "`")
            }

            function c(e, t) {
                if (!e) throw new Error("`" + t + "` cannot be empty")
            }

            function f(e, t) {
                if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
            }
            a.prototype.toString = function(e) {
                return (this.contents || "").toString(e)
            }, Object.defineProperty(a.prototype, "path", {
                get: function() {
                    return this.history[this.history.length - 1]
                },
                set: function(e) {
                    c(e, "path"), this.path !== e && this.history.push(e)
                }
            }), Object.defineProperty(a.prototype, "dirname", {
                get: function() {
                    return "string" == typeof this.path ? r.dirname(this.path) : void 0
                },
                set: function(e) {
                    f(this.path, "dirname"), this.path = r.join(e || "", this.basename)
                }
            }), Object.defineProperty(a.prototype, "basename", {
                get: function() {
                    return "string" == typeof this.path ? r.basename(this.path) : void 0
                },
                set: function(e) {
                    c(e, "basename"), s(e, "basename"), this.path = r.join(this.dirname || "", e)
                }
            }), Object.defineProperty(a.prototype, "extname", {
                get: function() {
                    return "string" == typeof this.path ? r.extname(this.path) : void 0
                },
                set: function(e) {
                    if (s(e, "extname"), f(this.path, "extname"), e) {
                        if (46 !== e.charCodeAt(0)) throw new Error("`extname` must start with `.`");
                        if (e.indexOf(".", 1) > -1) throw new Error("`extname` cannot contain multiple dots")
                    }
                    this.path = r.join(this.dirname, this.stem + (e || ""))
                }
            }), Object.defineProperty(a.prototype, "stem", {
                get: function() {
                    return "string" == typeof this.path ? r.basename(this.path, this.extname) : void 0
                },
                set: function(e) {
                    c(e, "stem"), s(e, "stem"), this.path = r.join(this.dirname || "", e + (this.extname || ""))
                }
            })
        },
        65905: (e, t, n) => {
            "use strict";
            var r = n(80734),
                i = n(45442);
            e.exports = i, i.prototype.message = function(e, t, n) {
                var i = new r(e, t, n);
                this.path && (i.name = this.path + ":" + i.name, i.file = this.path);
                return i.fatal = !1, this.messages.push(i), i
            }, i.prototype.info = function() {
                var e = this.message.apply(this, arguments);
                return e.fatal = null, e
            }, i.prototype.fail = function() {
                var e = this.message.apply(this, arguments);
                throw e.fatal = !0, e
            }
        },
        28064: (e, t) => {
            "use strict";

            function n(e) {
                if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
            }
            t.basename = function(e, t) {
                var r, i, o, u, l = 0,
                    a = -1;
                if (void 0 !== t && "string" != typeof t) throw new TypeError('"ext" argument must be a string');
                if (n(e), r = e.length, void 0 === t || !t.length || t.length > e.length) {
                    for (; r--;)
                        if (47 === e.charCodeAt(r)) {
                            if (o) {
                                l = r + 1;
                                break
                            }
                        } else a < 0 && (o = !0, a = r + 1);
                    return a < 0 ? "" : e.slice(l, a)
                }
                if (t === e) return "";
                i = -1, u = t.length - 1;
                for (; r--;)
                    if (47 === e.charCodeAt(r)) {
                        if (o) {
                            l = r + 1;
                            break
                        }
                    } else i < 0 && (o = !0, i = r + 1), u > -1 && (e.charCodeAt(r) === t.charCodeAt(u--) ? u < 0 && (a = r) : (u = -1, a = i));
                l === a ? a = i : a < 0 && (a = e.length);
                return e.slice(l, a)
            }, t.dirname = function(e) {
                var t, r, i;
                if (n(e), !e.length) return ".";
                t = -1, i = e.length;
                for (; --i;)
                    if (47 === e.charCodeAt(i)) {
                        if (r) {
                            t = i;
                            break
                        }
                    } else r || (r = !0);
                return t < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === t && 47 === e.charCodeAt(0) ? "//" : e.slice(0, t)
            }, t.extname = function(e) {
                var t, r, i, o = -1,
                    u = 0,
                    l = -1,
                    a = 0;
                n(e), i = e.length;
                for (; i--;)
                    if (47 !== (r = e.charCodeAt(i))) l < 0 && (t = !0, l = i + 1), 46 === r ? o < 0 ? o = i : 1 !== a && (a = 1) : o > -1 && (a = -1);
                    else if (t) {
                    u = i + 1;
                    break
                }
                if (o < 0 || l < 0 || 0 === a || 1 === a && o === l - 1 && o === u + 1) return "";
                return e.slice(o, l)
            }, t.join = function() {
                var e, t = -1;
                for (; ++t < arguments.length;) n(arguments[t]), arguments[t] && (e = void 0 === e ? arguments[t] : e + "/" + arguments[t]);
                return void 0 === e ? "." : function(e) {
                    var t, r;
                    n(e), t = 47 === e.charCodeAt(0), r = function(e, t) {
                        var n, r, i = "",
                            o = 0,
                            u = -1,
                            l = 0,
                            a = -1;
                        for (; ++a <= e.length;) {
                            if (a < e.length) n = e.charCodeAt(a);
                            else {
                                if (47 === n) break;
                                n = 47
                            }
                            if (47 === n) {
                                if (u === a - 1 || 1 === l);
                                else if (u !== a - 1 && 2 === l) {
                                    if (i.length < 2 || 2 !== o || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2))
                                        if (i.length > 2) {
                                            if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                                r < 0 ? (i = "", o = 0) : o = (i = i.slice(0, r)).length - 1 - i.lastIndexOf("/"), u = a, l = 0;
                                                continue
                                            }
                                        } else if (i.length) {
                                        i = "", o = 0, u = a, l = 0;
                                        continue
                                    }
                                    t && (i = i.length ? i + "/.." : "..", o = 2)
                                } else i.length ? i += "/" + e.slice(u + 1, a) : i = e.slice(u + 1, a), o = a - u - 1;
                                u = a, l = 0
                            } else 46 === n && l > -1 ? l++ : l = -1
                        }
                        return i
                    }(e, !t), r.length || t || (r = ".");
                    r.length && 47 === e.charCodeAt(e.length - 1) && (r += "/");
                    return t ? "/" + r : r
                }(e)
            }, t.sep = "/"
        },
        31126: (e, t) => {
            "use strict";
            t.cwd = function() {
                return "/"
            }
        },
        70529: e => {
            e.exports = function(e) {
                return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
        },
        47529: e => {
            e.exports = function() {
                for (var e = {}, n = 0; n < arguments.length; n++) {
                    var r = arguments[n];
                    for (var i in r) t.call(r, i) && (e[i] = r[i])
                }
                return e
            };
            var t = Object.prototype.hasOwnProperty
        },
        99640: e => {
            "use strict";
            e.exports = JSON.parse('{"classId":"classID","dataType":"datatype","itemId":"itemID","strokeDashArray":"strokeDasharray","strokeDashOffset":"strokeDashoffset","strokeLineCap":"strokeLinecap","strokeLineJoin":"strokeLinejoin","strokeMiterLimit":"strokeMiterlimit","typeOf":"typeof","xLinkActuate":"xlinkActuate","xLinkArcRole":"xlinkArcrole","xLinkHref":"xlinkHref","xLinkRole":"xlinkRole","xLinkShow":"xlinkShow","xLinkTitle":"xlinkTitle","xLinkType":"xlinkType","xmlnsXLink":"xmlnsXlink"}')
        },
        70006: e => {
            "use strict";
            e.exports = JSON.parse('{"html":"http://www.w3.org/1999/xhtml","mathml":"http://www.w3.org/1998/Math/MathML","svg":"http://www.w3.org/2000/svg","xlink":"http://www.w3.org/1999/xlink","xml":"http://www.w3.org/XML/1998/namespace","xmlns":"http://www.w3.org/2000/xmlns/"}')
        }
    }
]);
//# sourceMappingURL=49e4e8fa2a1be094ffe5adaaa87707fde5db56bb95b70b7524bdc583dcb433c7.js.map