/*! For license information please see <unstable> */
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7257], {
        50823: (e, t) => {
            "use strict";
            var r = "lock-open",
                n = [],
                o = "f3c1",
                a = "M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48C576 64.5 511.5 0 432 0S288 64.5 288 144l0 48L64 192c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-32 0 0-48z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [576, 512, n, o, a]
            }, t._1 = t.DF
        },
        16995: (e, t) => {
            "use strict";
            var r = "question",
                n = [10067, 10068, 61736],
                o = "M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [320, 512, n, "3f", o]
            }, t.Ps = t.DF
        },
        7747: (e, t) => {
            "use strict";
            var r = "share-from-square",
                n = [61509, "share-square"],
                o = "f14d",
                a = "M352 224l-46.5 0c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8l-2.5 0c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144l80 0 0-61.3C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9L548.1 133.3c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2l-3.7 0c-17.7 0-32-14.3-32-32l0-64zM80 96c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 48c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 112C0 67.8 35.8 32 80 32l48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 96z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [576, 512, n, o, a]
            }, t.Dr = t.DF
        },
        64063: e => {
            "use strict";
            e.exports = function e(t, r) {
                if (t === r) return !0;
                if (t && r && "object" == typeof t && "object" == typeof r) {
                    if (t.constructor !== r.constructor) return !1;
                    var n, o, a;
                    if (Array.isArray(t)) {
                        if ((n = t.length) != r.length) return !1;
                        for (o = n; 0 != o--;)
                            if (!e(t[o], r[o])) return !1;
                        return !0
                    }
                    if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
                    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
                    if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
                    if ((n = (a = Object.keys(t)).length) !== Object.keys(r).length) return !1;
                    for (o = n; 0 != o--;)
                        if (!Object.prototype.hasOwnProperty.call(r, a[o])) return !1;
                    for (o = n; 0 != o--;) {
                        var s = a[o];
                        if (!e(t[s], r[s])) return !1
                    }
                    return !0
                }
                return t != t && r != r
            }
        },
        49090: e => {
            function t(e, t) {
                e.onload = function() {
                    this.onerror = this.onload = null, t(null, e)
                }, e.onerror = function() {
                    this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e)
                }
            }

            function r(e, t) {
                e.onreadystatechange = function() {
                    "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t(null, e))
                }
            }
            e.exports = function(e, n, o) {
                var a = document.head || document.getElementsByTagName("head")[0],
                    s = document.createElement("script");
                "function" == typeof n && (o = n, n = {}), n = n || {}, o = o || function() {}, s.type = n.type || "text/javascript", s.charset = n.charset || "utf8", s.async = !("async" in n) || !!n.async, s.src = e, n.attrs && function(e, t) {
                    for (var r in t) e.setAttribute(r, t[r])
                }(s, n.attrs), n.text && (s.text = "" + n.text), ("onload" in s ? t : r)(s, o), s.onload || t(s, o), a.appendChild(s)
            }
        },
        33988: e => {
            "use strict";
            var t;
            t = function() {
                var e = {},
                    t = {};
                return e.on = function(e, r) {
                    var n = {
                        name: e,
                        handler: r
                    };
                    return t[e] = t[e] || [], t[e].unshift(n), n
                }, e.off = function(e) {
                    var r = t[e.name].indexOf(e); - 1 !== r && t[e.name].splice(r, 1)
                }, e.trigger = function(e, r) {
                    var n, o = t[e];
                    if (o)
                        for (n = o.length; n--;) o[n].handler(r)
                }, e
            }, e.exports = t
        },
        66006: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, o = r(22275),
                a = (n = o) && n.__esModule ? n : {
                    default: n
                };
            t.default = {
                pauseVideo: {
                    acceptableStates: [a.default.ENDED, a.default.PAUSED],
                    stateChangeRequired: !1
                },
                playVideo: {
                    acceptableStates: [a.default.ENDED, a.default.PLAYING],
                    stateChangeRequired: !1
                },
                seekTo: {
                    acceptableStates: [a.default.ENDED, a.default.PLAYING, a.default.PAUSED],
                    stateChangeRequired: !0,
                    timeout: 3e3
                }
            }, e.exports = t.default
        },
        89125: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(r(9215)),
                o = i(r(28255)),
                a = i(r(65279)),
                s = i(r(66006));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = (0, n.default)("youtube-player"),
                u = {
                    proxyEvents: function(e) {
                        var t = {},
                            r = function(r) {
                                var n = "on" + r.slice(0, 1).toUpperCase() + r.slice(1);
                                t[n] = function(t) {
                                    l('event "%s"', n, t), e.trigger(r, t)
                                }
                            },
                            n = !0,
                            o = !1,
                            s = void 0;
                        try {
                            for (var i, u = a.default[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                                r(i.value)
                            }
                        } catch (e) {
                            o = !0, s = e
                        } finally {
                            try {
                                !n && u.return && u.return()
                            } finally {
                                if (o) throw s
                            }
                        }
                        return t
                    },
                    promisifyPlayer: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = {},
                            n = function(n) {
                                t && s.default[n] ? r[n] = function() {
                                    for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                                    return e.then((function(e) {
                                        var t = s.default[n],
                                            o = e.getPlayerState(),
                                            a = e[n].apply(e, r);
                                        return t.stateChangeRequired || Array.isArray(t.acceptableStates) && -1 === t.acceptableStates.indexOf(o) ? new Promise((function(r) {
                                            e.addEventListener("onStateChange", (function n() {
                                                var o = e.getPlayerState(),
                                                    a = void 0;
                                                "number" == typeof t.timeout && (a = setTimeout((function() {
                                                    e.removeEventListener("onStateChange", n), r()
                                                }), t.timeout)), Array.isArray(t.acceptableStates) && -1 !== t.acceptableStates.indexOf(o) && (e.removeEventListener("onStateChange", n), clearTimeout(a), r())
                                            }))
                                        })).then((function() {
                                            return a
                                        })) : a
                                    }))
                                } : r[n] = function() {
                                    for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                                    return e.then((function(e) {
                                        return e[n].apply(e, r)
                                    }))
                                }
                            },
                            a = !0,
                            i = !1,
                            l = void 0;
                        try {
                            for (var u, c = o.default[Symbol.iterator](); !(a = (u = c.next()).done); a = !0) {
                                n(u.value)
                            }
                        } catch (e) {
                            i = !0, l = e
                        } finally {
                            try {
                                !a && c.return && c.return()
                            } finally {
                                if (i) throw l
                            }
                        }
                        return r
                    }
                };
            t.default = u, e.exports = t.default
        },
        22275: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = {
                BUFFERING: 3,
                ENDED: 0,
                PAUSED: 2,
                PLAYING: 1,
                UNSTARTED: -1,
                VIDEO_CUED: 5
            }, e.exports = t.default
        },
        65279: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], e.exports = t.default
        },
        28255: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], e.exports = t.default
        },
        11062: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = i(r(33988)),
                a = i(r(55900)),
                s = i(r(89125));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = void 0;
            t.default = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = (0, o.default)();
                if (l || (l = (0, a.default)(i)), t.events) throw new Error("Event handlers cannot be overwritten.");
                if ("string" == typeof e && !document.getElementById(e)) throw new Error('Element "' + e + '" does not exist.');
                t.events = s.default.proxyEvents(i);
                var u = new Promise((function(r) {
                        "object" === (void 0 === e ? "undefined" : n(e)) && e.playVideo instanceof Function ? r(e) : l.then((function(n) {
                            var o = new n.Player(e, t);
                            return i.on("ready", (function() {
                                r(o)
                            })), null
                        }))
                    })),
                    c = s.default.promisifyPlayer(u, r);
                return c.on = i.on, c.off = i.off, c
            }, e.exports = t.default
        },
        55900: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, o = r(49090),
                a = (n = o) && n.__esModule ? n : {
                    default: n
                };
            t.default = function(e) {
                return new Promise((function(t) {
                    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) t(window.YT);
                    else {
                        var r = "http:" === window.location.protocol ? "http:" : "https:";
                        (0, a.default)(r + "//www.youtube.com/iframe_api", (function(t) {
                            t && e.trigger("error", t)
                        }));
                        var n = window.onYouTubeIframeAPIReady;
                        window.onYouTubeIframeAPIReady = function() {
                            n && n(), t(window.YT)
                        }
                    }
                }))
            }, e.exports = t.default
        },
        9215: (e, t, r) => {
            function n() {
                var e;
                try {
                    e = t.storage.debug
                } catch (e) {}
                return !e && "undefined" != typeof process && "env" in process && (e = "MISSING_ENV_VAR".DEBUG), e
            }(t = e.exports = r(55046)).log = function() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }, t.formatArgs = function(e) {
                var r = this.useColors;
                if (e[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + e[0] + (r ? "%c " : " ") + "+" + t.humanize(this.diff), !r) return;
                var n = "color: " + this.color;
                e.splice(1, 0, n, "color: inherit");
                var o = 0,
                    a = 0;
                e[0].replace(/%[a-zA-Z%]/g, (function(e) {
                    "%%" !== e && (o++, "%c" === e && (a = o))
                })), e.splice(a, 0, n)
            }, t.save = function(e) {
                try {
                    null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                } catch (e) {}
            }, t.load = n, t.useColors = function() {
                if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
                return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                try {
                    return window.localStorage
                } catch (e) {}
            }(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }, t.enable(n())
        },
        55046: (e, t, r) => {
            var n;

            function o(e) {
                function r() {
                    if (r.enabled) {
                        var e = r,
                            o = +new Date,
                            a = o - (n || o);
                        e.diff = a, e.prev = n, e.curr = o, n = o;
                        for (var s = new Array(arguments.length), i = 0; i < s.length; i++) s[i] = arguments[i];
                        s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                        var l = 0;
                        s[0] = s[0].replace(/%([a-zA-Z%])/g, (function(r, n) {
                            if ("%%" === r) return r;
                            l++;
                            var o = t.formatters[n];
                            if ("function" == typeof o) {
                                var a = s[l];
                                r = o.call(e, a), s.splice(l, 1), l--
                            }
                            return r
                        })), t.formatArgs.call(e, s), (r.log || t.log || console.log.bind(console)).apply(e, s)
                    }
                }
                return r.namespace = e, r.enabled = t.enabled(e), r.useColors = t.useColors(), r.color = function(e) {
                    var r, n = 0;
                    for (r in e) n = (n << 5) - n + e.charCodeAt(r), n |= 0;
                    return t.colors[Math.abs(n) % t.colors.length]
                }(e), "function" == typeof t.init && t.init(r), r
            }(t = e.exports = o.debug = o.default = o).coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e
            }, t.disable = function() {
                t.enable("")
            }, t.enable = function(e) {
                t.save(e), t.names = [], t.skips = [];
                for (var r = ("string" == typeof e ? e : "").split(/[\s,]+/), n = r.length, o = 0; o < n; o++) r[o] && ("-" === (e = r[o].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
            }, t.enabled = function(e) {
                var r, n;
                for (r = 0, n = t.skips.length; r < n; r++)
                    if (t.skips[r].test(e)) return !1;
                for (r = 0, n = t.names.length; r < n; r++)
                    if (t.names[r].test(e)) return !0;
                return !1
            }, t.humanize = r(14680), t.names = [], t.skips = [], t.formatters = {}
        },
        14680: e => {
            var t = 1e3,
                r = 60 * t,
                n = 60 * r,
                o = 24 * n,
                a = 365.25 * o;

            function s(e, t, r) {
                if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + r : Math.ceil(e / t) + " " + r + "s"
            }
            e.exports = function(e, i) {
                i = i || {};
                var l, u = typeof e;
                if ("string" === u && e.length > 0) return function(e) {
                    if ((e = String(e)).length > 100) return;
                    var s = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                    if (!s) return;
                    var i = parseFloat(s[1]);
                    switch ((s[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return i * a;
                        case "days":
                        case "day":
                        case "d":
                            return i * o;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return i * n;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return i * r;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return i * t;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return i;
                        default:
                            return
                    }
                }(e);
                if ("number" === u && !1 === isNaN(e)) return i.long ? s(l = e, o, "day") || s(l, n, "hour") || s(l, r, "minute") || s(l, t, "second") || l + " ms" : function(e) {
                    if (e >= o) return Math.round(e / o) + "d";
                    if (e >= n) return Math.round(e / n) + "h";
                    if (e >= r) return Math.round(e / r) + "m";
                    if (e >= t) return Math.round(e / t) + "s";
                    return e + "ms"
                }(e);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
            }
        },
        97326: (e, t, r) => {
            "use strict";

            function n(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            r.d(t, {
                Z: () => n
            })
        },
        15671: (e, t, r) => {
            "use strict";

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            r.d(t, {
                Z: () => n
            })
        },
        43144: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => a
            });
            var n = r(97036);

            function o(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0, n.Z)(o.key), o)
                }
            }

            function a(e, t, r) {
                return t && o(e.prototype, t), r && o(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
        },
        61120: (e, t, r) => {
            "use strict";

            function n(e) {
                return n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, n(e)
            }
            r.d(t, {
                Z: () => n
            })
        },
        60136: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => o
            });
            var n = r(89611);

            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && (0, n.Z)(e, t)
            }
        },
        82963: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => a
            });
            var n = r(71002),
                o = r(97326);

            function a(e, t) {
                if (t && ("object" === (0, n.Z)(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return (0, o.Z)(e)
            }
        },
        3191: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => P
            });
            var n = r(45697),
                o = r(67294),
                a = r(64063),
                s = r(11062),
                i = Object.defineProperty,
                l = Object.defineProperties,
                u = Object.getOwnPropertyDescriptors,
                c = Object.getOwnPropertySymbols,
                d = Object.prototype.hasOwnProperty,
                p = Object.prototype.propertyIsEnumerable,
                f = (e, t, r) => t in e ? i(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                y = (e, t) => {
                    for (var r in t || (t = {})) d.call(t, r) && f(e, r, t[r]);
                    if (c)
                        for (var r of c(t)) p.call(t, r) && f(e, r, t[r]);
                    return e
                },
                h = (e, t) => l(e, u(t));

            function g(e = {}) {
                return h(y({}, e), {
                    height: 0,
                    width: 0,
                    playerVars: h(y({}, e.playerVars), {
                        autoplay: 0,
                        start: 0,
                        end: 0
                    })
                })
            }
            var v = {
                    videoId: n.string,
                    id: n.string,
                    className: n.string,
                    iframeClassName: n.string,
                    style: n.object,
                    title: n.string,
                    loading: n.oneOf(["lazy", "eager"]),
                    opts: n.objectOf(n.any),
                    onReady: n.func,
                    onError: n.func,
                    onPlay: n.func,
                    onPause: n.func,
                    onEnd: n.func,
                    onStateChange: n.func,
                    onPlaybackRateChange: n.func,
                    onPlaybackQualityChange: n.func
                },
                m = class extends o.Component {
                    constructor(e) {
                        super(e), this.destroyPlayerPromise = void 0, this.onPlayerReady = e => {
                            var t, r;
                            return null == (r = (t = this.props).onReady) ? void 0 : r.call(t, e)
                        }, this.onPlayerError = e => {
                            var t, r;
                            return null == (r = (t = this.props).onError) ? void 0 : r.call(t, e)
                        }, this.onPlayerStateChange = e => {
                            var t, r, n, o, a, s, i, l;
                            switch (null == (r = (t = this.props).onStateChange) || r.call(t, e), e.data) {
                                case m.PlayerState.ENDED:
                                    null == (o = (n = this.props).onEnd) || o.call(n, e);
                                    break;
                                case m.PlayerState.PLAYING:
                                    null == (s = (a = this.props).onPlay) || s.call(a, e);
                                    break;
                                case m.PlayerState.PAUSED:
                                    null == (l = (i = this.props).onPause) || l.call(i, e)
                            }
                        }, this.onPlayerPlaybackRateChange = e => {
                            var t, r;
                            return null == (r = (t = this.props).onPlaybackRateChange) ? void 0 : r.call(t, e)
                        }, this.onPlayerPlaybackQualityChange = e => {
                            var t, r;
                            return null == (r = (t = this.props).onPlaybackQualityChange) ? void 0 : r.call(t, e)
                        }, this.destroyPlayer = () => this.internalPlayer ? (this.destroyPlayerPromise = this.internalPlayer.destroy().then((() => this.destroyPlayerPromise = void 0)), this.destroyPlayerPromise) : Promise.resolve(), this.createPlayer = () => {
                            if ("undefined" == typeof document) return;
                            if (this.destroyPlayerPromise) return void this.destroyPlayerPromise.then(this.createPlayer);
                            const e = h(y({}, this.props.opts), {
                                videoId: this.props.videoId
                            });
                            this.internalPlayer = s(this.container, e), this.internalPlayer.on("ready", this.onPlayerReady), this.internalPlayer.on("error", this.onPlayerError), this.internalPlayer.on("stateChange", this.onPlayerStateChange), this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange), this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange), (this.props.title || this.props.loading) && this.internalPlayer.getIframe().then((e => {
                                this.props.title && e.setAttribute("title", this.props.title), this.props.loading && e.setAttribute("loading", this.props.loading)
                            }))
                        }, this.resetPlayer = () => this.destroyPlayer().then(this.createPlayer), this.updatePlayer = () => {
                            var e;
                            null == (e = this.internalPlayer) || e.getIframe().then((e => {
                                this.props.id ? e.setAttribute("id", this.props.id) : e.removeAttribute("id"), this.props.iframeClassName ? e.setAttribute("class", this.props.iframeClassName) : e.removeAttribute("class"), this.props.opts && this.props.opts.width ? e.setAttribute("width", this.props.opts.width.toString()) : e.removeAttribute("width"), this.props.opts && this.props.opts.height ? e.setAttribute("height", this.props.opts.height.toString()) : e.removeAttribute("height"), this.props.title ? e.setAttribute("title", this.props.title) : e.setAttribute("title", "YouTube video player"), this.props.loading ? e.setAttribute("loading", this.props.loading) : e.removeAttribute("loading")
                            }))
                        }, this.getInternalPlayer = () => this.internalPlayer, this.updateVideo = () => {
                            var e, t, r, n;
                            if (void 0 === this.props.videoId || null === this.props.videoId) return void(null == (e = this.internalPlayer) || e.stopVideo());
                            let o = !1;
                            const a = {
                                videoId: this.props.videoId
                            };
                            (null == (t = this.props.opts) ? void 0 : t.playerVars) && (o = 1 === this.props.opts.playerVars.autoplay, "start" in this.props.opts.playerVars && (a.startSeconds = this.props.opts.playerVars.start), "end" in this.props.opts.playerVars && (a.endSeconds = this.props.opts.playerVars.end)), o ? null == (r = this.internalPlayer) || r.loadVideoById(a) : null == (n = this.internalPlayer) || n.cueVideoById(a)
                        }, this.refContainer = e => {
                            this.container = e
                        }, this.container = null, this.internalPlayer = null
                    }
                    componentDidMount() {
                        this.createPlayer()
                    }
                    async componentDidUpdate(e) {
                        (function(e, t) {
                            var r, n, o, a;
                            return e.id !== t.id || e.className !== t.className || (null == (r = e.opts) ? void 0 : r.width) !== (null == (n = t.opts) ? void 0 : n.width) || (null == (o = e.opts) ? void 0 : o.height) !== (null == (a = t.opts) ? void 0 : a.height) || e.iframeClassName !== t.iframeClassName || e.title !== t.title
                        })(e, this.props) && this.updatePlayer(),
                            function(e, t) {
                                return e.videoId !== t.videoId || !a(g(e.opts), g(t.opts))
                            }(e, this.props) && await this.resetPlayer(),
                            function(e, t) {
                                var r, n;
                                if (e.videoId !== t.videoId) return !0;
                                const o = (null == (r = e.opts) ? void 0 : r.playerVars) || {},
                                    a = (null == (n = t.opts) ? void 0 : n.playerVars) || {};
                                return o.start !== a.start || o.end !== a.end
                            }(e, this.props) && this.updateVideo()
                    }
                    componentWillUnmount() {
                        this.destroyPlayer()
                    }
                    render() {
                        return o.createElement("div", {
                            className: this.props.className,
                            style: this.props.style
                        }, o.createElement("div", {
                            id: this.props.id,
                            className: this.props.iframeClassName,
                            ref: this.refContainer
                        }))
                    }
                },
                b = m;
            b.propTypes = v, b.defaultProps = {
                videoId: "",
                id: "",
                className: "",
                iframeClassName: "",
                style: {},
                title: "",
                loading: void 0,
                opts: {},
                onReady: () => {},
                onError: () => {},
                onPlay: () => {},
                onPause: () => {},
                onEnd: () => {},
                onStateChange: () => {},
                onPlaybackRateChange: () => {},
                onPlaybackQualityChange: () => {}
            }, b.PlayerState = {
                UNSTARTED: -1,
                ENDED: 0,
                PLAYING: 1,
                PAUSED: 2,
                BUFFERING: 3,
                CUED: 5
            };
            var P = b
        }
    }
]);
//# sourceMappingURL=8721e12a634d003893af097d86377afdaa4184a91f5a99fb5b73240fe2b880b5.js.map