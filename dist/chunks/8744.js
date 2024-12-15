/*! For license information please see <unstable> */
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8744], {
        44814: (e, t) => {
            "use strict";
            var o = "exclamation",
                r = [10069, 10071, 61738],
                n = "M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32L96 64zM64 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z";
            t.DF = {
                prefix: "fas",
                iconName: o,
                icon: [128, 512, r, "21", n]
            }, t.WV = t.DF
        },
        52796: (e, t, o) => {
            e.exports = o(10643)
        },
        13264: e => {
            "use strict";
            var t = !("undefined" == typeof window || !window.document || !window.document.createElement),
                o = {
                    canUseDOM: t,
                    canUseWorkers: "undefined" != typeof Worker,
                    canUseEventListeners: t && !(!window.addEventListener && !window.attachEvent),
                    canUseViewport: t && !!window.screen,
                    isInWorker: !t
                };
            e.exports = o
        },
        84518: e => {
            var t, o, r, n, i, a, s, c, h, p, u, d, l, m, v, f = !1;

            function g() {
                if (!f) {
                    f = !0;
                    var e = navigator.userAgent,
                        g = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),
                        w = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
                    if (d = /\b(iPhone|iP[ao]d)/.exec(e), l = /\b(iP[ao]d)/.exec(e), p = /Android/i.exec(e), m = /FBAN\/\w+;/i.exec(e), v = /Mobile/i.exec(e), u = !!/Win64/.exec(e), g) {
                        (t = g[1] ? parseFloat(g[1]) : g[5] ? parseFloat(g[5]) : NaN) && document && document.documentMode && (t = document.documentMode);
                        var C = /(?:Trident\/(\d+.\d+))/.exec(e);
                        a = C ? parseFloat(C[1]) + 4 : t, o = g[2] ? parseFloat(g[2]) : NaN, r = g[3] ? parseFloat(g[3]) : NaN, (n = g[4] ? parseFloat(g[4]) : NaN) ? (g = /(?:Chrome\/(\d+\.\d+))/.exec(e), i = g && g[1] ? parseFloat(g[1]) : NaN) : i = NaN
                    } else t = o = r = i = n = NaN;
                    if (w) {
                        if (w[1]) {
                            var S = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
                            s = !S || parseFloat(S[1].replace("_", "."))
                        } else s = !1;
                        c = !!w[2], h = !!w[3]
                    } else s = c = h = !1
                }
            }
            var w = {
                ie: function() {
                    return g() || t
                },
                ieCompatibilityMode: function() {
                    return g() || a > t
                },
                ie64: function() {
                    return w.ie() && u
                },
                firefox: function() {
                    return g() || o
                },
                opera: function() {
                    return g() || r
                },
                webkit: function() {
                    return g() || n
                },
                safari: function() {
                    return w.webkit()
                },
                chrome: function() {
                    return g() || i
                },
                windows: function() {
                    return g() || c
                },
                osx: function() {
                    return g() || s
                },
                linux: function() {
                    return g() || h
                },
                iphone: function() {
                    return g() || d
                },
                mobile: function() {
                    return g() || d || l || p || v
                },
                nativeApp: function() {
                    return g() || m
                },
                android: function() {
                    return g() || p
                },
                ipad: function() {
                    return g() || l
                }
            };
            e.exports = w
        },
        96534: (e, t, o) => {
            "use strict";
            var r, n = o(13264);
            n.canUseDOM && (r = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "")), e.exports = function(e, t) {
                if (!n.canUseDOM || t && !("addEventListener" in document)) return !1;
                var o = "on" + e,
                    i = o in document;
                if (!i) {
                    var a = document.createElement("div");
                    a.setAttribute(o, "return;"), i = "function" == typeof a[o]
                }
                return !i && r && "wheel" === e && (i = document.implementation.hasFeature("Events.wheel", "3.0")), i
            }
        },
        10643: (e, t, o) => {
            "use strict";
            var r = o(84518),
                n = o(96534);

            function i(e) {
                var t = 0,
                    o = 0,
                    r = 0,
                    n = 0;
                return "detail" in e && (o = e.detail), "wheelDelta" in e && (o = -e.wheelDelta / 120), "wheelDeltaY" in e && (o = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = o, o = 0), r = 10 * t, n = 10 * o, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || n) && e.deltaMode && (1 == e.deltaMode ? (r *= 40, n *= 40) : (r *= 800, n *= 800)), r && !t && (t = r < 1 ? -1 : 1), n && !o && (o = n < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: o,
                    pixelX: r,
                    pixelY: n
                }
            }
            i.getEventType = function() {
                return r.firefox() ? "DOMMouseScroll" : n("wheel") ? "wheel" : "mousewheel"
            }, e.exports = i
        },
        70123: (e, t, o) => {
            "use strict";
            o.d(t, {
                ZP: () => w
            });
            var r = function(e, t) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                }, r(e, t)
            };
            var n = function() {
                return n = Object.assign || function(e) {
                    for (var t, o = 1, r = arguments.length; o < r; o++)
                        for (var n in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }, n.apply(this, arguments)
            };
            Object.create;
            Object.create;
            var i = o(67294),
                a = o(52796),
                s = o.n(a);

            function c(e, t, o, r, n) {
                void 0 === n && (n = 0);
                var i = v(t.width, t.height, n),
                    a = i.width,
                    s = i.height;
                return {
                    x: h(e.x, a, o.width, r),
                    y: h(e.y, s, o.height, r)
                }
            }

            function h(e, t, o, r) {
                var n = t * r / 2 - o / 2;
                return f(e, -n, n)
            }

            function p(e, t) {
                return Math.sqrt(Math.pow(e.y - t.y, 2) + Math.pow(e.x - t.x, 2))
            }

            function u(e, t) {
                return 180 * Math.atan2(t.y - e.y, t.x - e.x) / Math.PI
            }

            function d(e, t) {
                return Math.min(e, Math.max(0, t))
            }

            function l(e, t) {
                return t
            }

            function m(e, t) {
                return {
                    x: (t.x + e.x) / 2,
                    y: (t.y + e.y) / 2
                }
            }

            function v(e, t, o) {
                var r = o * Math.PI / 180;
                return {
                    width: Math.abs(Math.cos(r) * e) + Math.abs(Math.sin(r) * t),
                    height: Math.abs(Math.sin(r) * e) + Math.abs(Math.cos(r) * t)
                }
            }

            function f(e, t, o) {
                return Math.min(Math.max(e, t), o)
            }

            function g() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return e.filter((function(e) {
                    return "string" == typeof e && e.length > 0
                })).join(" ").trim()
            }
            var w = function(e) {
                function t() {
                    var o = null !== e && e.apply(this, arguments) || this;
                    return o.imageRef = i.createRef(), o.videoRef = i.createRef(), o.containerRef = null, o.styleRef = null, o.containerRect = null, o.mediaSize = {
                        width: 0,
                        height: 0,
                        naturalWidth: 0,
                        naturalHeight: 0
                    }, o.dragStartPosition = {
                        x: 0,
                        y: 0
                    }, o.dragStartCrop = {
                        x: 0,
                        y: 0
                    }, o.gestureZoomStart = 0, o.gestureRotationStart = 0, o.isTouching = !1, o.lastPinchDistance = 0, o.lastPinchRotation = 0, o.rafDragTimeout = null, o.rafPinchTimeout = null, o.wheelTimer = null, o.currentDoc = "undefined" != typeof document ? document : null, o.currentWindow = "undefined" != typeof window ? window : null, o.resizeObserver = null, o.state = {
                        cropSize: null,
                        hasWheelJustStarted: !1
                    }, o.initResizeObserver = function() {
                        if (void 0 !== window.ResizeObserver && o.containerRef) {
                            var e = !0;
                            o.resizeObserver = new window.ResizeObserver((function(t) {
                                e ? e = !1 : o.computeSizes()
                            })), o.resizeObserver.observe(o.containerRef)
                        }
                    }, o.preventZoomSafari = function(e) {
                        return e.preventDefault()
                    }, o.cleanEvents = function() {
                        o.currentDoc && (o.currentDoc.removeEventListener("mousemove", o.onMouseMove), o.currentDoc.removeEventListener("mouseup", o.onDragStopped), o.currentDoc.removeEventListener("touchmove", o.onTouchMove), o.currentDoc.removeEventListener("touchend", o.onDragStopped), o.currentDoc.removeEventListener("gesturemove", o.onGestureMove), o.currentDoc.removeEventListener("gestureend", o.onGestureEnd))
                    }, o.clearScrollEvent = function() {
                        o.containerRef && o.containerRef.removeEventListener("wheel", o.onWheel), o.wheelTimer && clearTimeout(o.wheelTimer)
                    }, o.onMediaLoad = function() {
                        var e = o.computeSizes();
                        e && (o.emitCropData(), o.setInitialCrop(e)), o.props.onMediaLoaded && o.props.onMediaLoaded(o.mediaSize)
                    }, o.setInitialCrop = function(e) {
                        if (o.props.initialCroppedAreaPercentages) {
                            var t = function(e, t, o, r, n, i) {
                                    var a = v(t.width, t.height, o),
                                        s = f(r.width / a.width * (100 / e.width), n, i);
                                    return {
                                        crop: {
                                            x: s * a.width / 2 - r.width / 2 - a.width * s * (e.x / 100),
                                            y: s * a.height / 2 - r.height / 2 - a.height * s * (e.y / 100)
                                        },
                                        zoom: s
                                    }
                                }(o.props.initialCroppedAreaPercentages, o.mediaSize, o.props.rotation, e, o.props.minZoom, o.props.maxZoom),
                                r = t.crop,
                                n = t.zoom;
                            o.props.onCropChange(r), o.props.onZoomChange && o.props.onZoomChange(n)
                        } else if (o.props.initialCroppedAreaPixels) {
                            var i = function(e, t, o, r, n, i) {
                                void 0 === o && (o = 0);
                                var a = v(t.naturalWidth, t.naturalHeight, o),
                                    s = f(function(e, t, o) {
                                        var r = function(e) {
                                            return e.width > e.height ? e.width / e.naturalWidth : e.height / e.naturalHeight
                                        }(t);
                                        return o.height > o.width ? o.height / (e.height * r) : o.width / (e.width * r)
                                    }(e, t, r), n, i),
                                    c = r.height > r.width ? r.height / e.height : r.width / e.width;
                                return {
                                    crop: {
                                        x: ((a.width - e.width) / 2 - e.x) * c,
                                        y: ((a.height - e.height) / 2 - e.y) * c
                                    },
                                    zoom: s
                                }
                            }(o.props.initialCroppedAreaPixels, o.mediaSize, o.props.rotation, e, o.props.minZoom, o.props.maxZoom);
                            r = i.crop, n = i.zoom;
                            o.props.onCropChange(r), o.props.onZoomChange && o.props.onZoomChange(n)
                        }
                    }, o.computeSizes = function() {
                        var e, t, r, i, a, s, c = o.imageRef.current || o.videoRef.current;
                        if (c && o.containerRef) {
                            o.containerRect = o.containerRef.getBoundingClientRect();
                            var h = o.containerRect.width / o.containerRect.height,
                                p = (null === (e = o.imageRef.current) || void 0 === e ? void 0 : e.naturalWidth) || (null === (t = o.videoRef.current) || void 0 === t ? void 0 : t.videoWidth) || 0,
                                u = (null === (r = o.imageRef.current) || void 0 === r ? void 0 : r.naturalHeight) || (null === (i = o.videoRef.current) || void 0 === i ? void 0 : i.videoHeight) || 0,
                                d = p / u,
                                l = void 0;
                            if (c.offsetWidth < p || c.offsetHeight < u) switch (o.props.objectFit) {
                                default:
                                case "contain":
                                    l = h > d ? {
                                        width: o.containerRect.height * d,
                                        height: o.containerRect.height
                                    } : {
                                        width: o.containerRect.width,
                                        height: o.containerRect.width / d
                                    };
                                    break;
                                case "horizontal-cover":
                                    l = {
                                        width: o.containerRect.width,
                                        height: o.containerRect.width / d
                                    };
                                    break;
                                case "vertical-cover":
                                    l = {
                                        width: o.containerRect.height * d,
                                        height: o.containerRect.height
                                    };
                                    break;
                                case "auto-cover":
                                    l = p > u ? {
                                        width: o.containerRect.width,
                                        height: o.containerRect.width / d
                                    } : {
                                        width: o.containerRect.height * d,
                                        height: o.containerRect.height
                                    }
                            } else l = {
                                width: c.offsetWidth,
                                height: c.offsetHeight
                            };
                            o.mediaSize = n(n({}, l), {
                                naturalWidth: p,
                                naturalHeight: u
                            }), o.props.setMediaSize && o.props.setMediaSize(o.mediaSize);
                            var m = o.props.cropSize ? o.props.cropSize : function(e, t, o, r, n, i) {
                                void 0 === i && (i = 0);
                                var a = v(e, t, i),
                                    s = a.width,
                                    c = a.height,
                                    h = Math.min(s, o),
                                    p = Math.min(c, r);
                                return h > p * n ? {
                                    width: p * n,
                                    height: p
                                } : {
                                    width: h,
                                    height: h / n
                                }
                            }(o.mediaSize.width, o.mediaSize.height, o.containerRect.width, o.containerRect.height, o.props.aspect, o.props.rotation);
                            return (null === (a = o.state.cropSize) || void 0 === a ? void 0 : a.height) === m.height && (null === (s = o.state.cropSize) || void 0 === s ? void 0 : s.width) === m.width || o.props.onCropSizeChange && o.props.onCropSizeChange(m), o.setState({
                                cropSize: m
                            }, o.recomputeCropPosition), o.props.setCropSize && o.props.setCropSize(m), m
                        }
                    }, o.onMouseDown = function(e) {
                        o.currentDoc && (e.preventDefault(), o.currentDoc.addEventListener("mousemove", o.onMouseMove), o.currentDoc.addEventListener("mouseup", o.onDragStopped), o.onDragStart(t.getMousePoint(e)))
                    }, o.onMouseMove = function(e) {
                        return o.onDrag(t.getMousePoint(e))
                    }, o.onTouchStart = function(e) {
                        o.currentDoc && (o.isTouching = !0, o.props.onTouchRequest && !o.props.onTouchRequest(e) || (o.currentDoc.addEventListener("touchmove", o.onTouchMove, {
                            passive: !1
                        }), o.currentDoc.addEventListener("touchend", o.onDragStopped), 2 === e.touches.length ? o.onPinchStart(e) : 1 === e.touches.length && o.onDragStart(t.getTouchPoint(e.touches[0]))))
                    }, o.onTouchMove = function(e) {
                        e.preventDefault(), 2 === e.touches.length ? o.onPinchMove(e) : 1 === e.touches.length && o.onDrag(t.getTouchPoint(e.touches[0]))
                    }, o.onGestureStart = function(e) {
                        o.currentDoc && (e.preventDefault(), o.currentDoc.addEventListener("gesturechange", o.onGestureMove), o.currentDoc.addEventListener("gestureend", o.onGestureEnd), o.gestureZoomStart = o.props.zoom, o.gestureRotationStart = o.props.rotation)
                    }, o.onGestureMove = function(e) {
                        if (e.preventDefault(), !o.isTouching) {
                            var r = t.getMousePoint(e),
                                n = o.gestureZoomStart - 1 + e.scale;
                            if (o.setNewZoom(n, r, {
                                    shouldUpdatePosition: !0
                                }), o.props.onRotationChange) {
                                var i = o.gestureRotationStart + e.rotation;
                                o.props.onRotationChange(i)
                            }
                        }
                    }, o.onGestureEnd = function(e) {
                        o.cleanEvents()
                    }, o.onDragStart = function(e) {
                        var t, r, i = e.x,
                            a = e.y;
                        o.dragStartPosition = {
                            x: i,
                            y: a
                        }, o.dragStartCrop = n({}, o.props.crop), null === (r = (t = o.props).onInteractionStart) || void 0 === r || r.call(t)
                    }, o.onDrag = function(e) {
                        var t = e.x,
                            r = e.y;
                        o.currentWindow && (o.rafDragTimeout && o.currentWindow.cancelAnimationFrame(o.rafDragTimeout), o.rafDragTimeout = o.currentWindow.requestAnimationFrame((function() {
                            if (o.state.cropSize && void 0 !== t && void 0 !== r) {
                                var e = t - o.dragStartPosition.x,
                                    n = r - o.dragStartPosition.y,
                                    i = {
                                        x: o.dragStartCrop.x + e,
                                        y: o.dragStartCrop.y + n
                                    },
                                    a = o.props.restrictPosition ? c(i, o.mediaSize, o.state.cropSize, o.props.zoom, o.props.rotation) : i;
                                o.props.onCropChange(a)
                            }
                        })))
                    }, o.onDragStopped = function() {
                        var e, t;
                        o.isTouching = !1, o.cleanEvents(), o.emitCropData(), null === (t = (e = o.props).onInteractionEnd) || void 0 === t || t.call(e)
                    }, o.onWheel = function(e) {
                        if (o.currentWindow && (!o.props.onWheelRequest || o.props.onWheelRequest(e))) {
                            e.preventDefault();
                            var r = t.getMousePoint(e),
                                n = s()(e).pixelY,
                                i = o.props.zoom - n * o.props.zoomSpeed / 200;
                            o.setNewZoom(i, r, {
                                shouldUpdatePosition: !0
                            }), o.state.hasWheelJustStarted || o.setState({
                                hasWheelJustStarted: !0
                            }, (function() {
                                var e, t;
                                return null === (t = (e = o.props).onInteractionStart) || void 0 === t ? void 0 : t.call(e)
                            })), o.wheelTimer && clearTimeout(o.wheelTimer), o.wheelTimer = o.currentWindow.setTimeout((function() {
                                return o.setState({
                                    hasWheelJustStarted: !1
                                }, (function() {
                                    var e, t;
                                    return null === (t = (e = o.props).onInteractionEnd) || void 0 === t ? void 0 : t.call(e)
                                }))
                            }), 250)
                        }
                    }, o.getPointOnContainer = function(e) {
                        var t = e.x,
                            r = e.y;
                        if (!o.containerRect) throw new Error("The Cropper is not mounted");
                        return {
                            x: o.containerRect.width / 2 - (t - o.containerRect.left),
                            y: o.containerRect.height / 2 - (r - o.containerRect.top)
                        }
                    }, o.getPointOnMedia = function(e) {
                        var t = e.x,
                            r = e.y,
                            n = o.props,
                            i = n.crop,
                            a = n.zoom;
                        return {
                            x: (t + i.x) / a,
                            y: (r + i.y) / a
                        }
                    }, o.setNewZoom = function(e, t, r) {
                        var n = (void 0 === r ? {} : r).shouldUpdatePosition,
                            i = void 0 === n || n;
                        if (o.state.cropSize && o.props.onZoomChange) {
                            var a = f(e, o.props.minZoom, o.props.maxZoom);
                            if (i) {
                                var s = o.getPointOnContainer(t),
                                    h = o.getPointOnMedia(s),
                                    p = {
                                        x: h.x * a - s.x,
                                        y: h.y * a - s.y
                                    },
                                    u = o.props.restrictPosition ? c(p, o.mediaSize, o.state.cropSize, a, o.props.rotation) : p;
                                o.props.onCropChange(u)
                            }
                            o.props.onZoomChange(a)
                        }
                    }, o.getCropData = function() {
                        return o.state.cropSize ? function(e, t, o, r, i, a, s) {
                            void 0 === a && (a = 0), void 0 === s && (s = !0);
                            var c = s ? d : l,
                                h = v(t.width, t.height, a),
                                p = v(t.naturalWidth, t.naturalHeight, a),
                                u = {
                                    x: c(100, ((h.width - o.width / i) / 2 - e.x / i) / h.width * 100),
                                    y: c(100, ((h.height - o.height / i) / 2 - e.y / i) / h.height * 100),
                                    width: c(100, o.width / h.width * 100 / i),
                                    height: c(100, o.height / h.height * 100 / i)
                                },
                                m = Math.round(c(p.width, u.width * p.width / 100)),
                                f = Math.round(c(p.height, u.height * p.height / 100)),
                                g = p.width >= p.height * r ? {
                                    width: Math.round(f * r),
                                    height: f
                                } : {
                                    width: m,
                                    height: Math.round(m / r)
                                };
                            return {
                                croppedAreaPercentages: u,
                                croppedAreaPixels: n(n({}, g), {
                                    x: Math.round(c(p.width - g.width, u.x * p.width / 100)),
                                    y: Math.round(c(p.height - g.height, u.y * p.height / 100))
                                })
                            }
                        }(o.props.restrictPosition ? c(o.props.crop, o.mediaSize, o.state.cropSize, o.props.zoom, o.props.rotation) : o.props.crop, o.mediaSize, o.state.cropSize, o.getAspect(), o.props.zoom, o.props.rotation, o.props.restrictPosition) : null
                    }, o.emitCropData = function() {
                        var e = o.getCropData();
                        if (e) {
                            var t = e.croppedAreaPercentages,
                                r = e.croppedAreaPixels;
                            o.props.onCropComplete && o.props.onCropComplete(t, r), o.props.onCropAreaChange && o.props.onCropAreaChange(t, r)
                        }
                    }, o.emitCropAreaChange = function() {
                        var e = o.getCropData();
                        if (e) {
                            var t = e.croppedAreaPercentages,
                                r = e.croppedAreaPixels;
                            o.props.onCropAreaChange && o.props.onCropAreaChange(t, r)
                        }
                    }, o.recomputeCropPosition = function() {
                        if (o.state.cropSize) {
                            var e = o.props.restrictPosition ? c(o.props.crop, o.mediaSize, o.state.cropSize, o.props.zoom, o.props.rotation) : o.props.crop;
                            o.props.onCropChange(e), o.emitCropData()
                        }
                    }, o
                }
                return function(e, t) {
                    function o() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
                }(t, e), t.prototype.componentDidMount = function() {
                    this.currentDoc && this.currentWindow && (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), void 0 === window.ResizeObserver && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
                        passive: !1
                    }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = ".reactEasyCrop_Container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.reactEasyCrop_Image,\n.reactEasyCrop_Video {\n  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */\n}\n\n.reactEasyCrop_Contain {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.reactEasyCrop_Cover_Horizontal {\n  width: 100%;\n  height: auto;\n}\n.reactEasyCrop_Cover_Vertical {\n  width: auto;\n  height: 100%;\n}\n\n.reactEasyCrop_CropArea {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 9999em;\n  color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.reactEasyCrop_CropAreaRound {\n  border-radius: 50%;\n}\n\n.reactEasyCrop_CropAreaGrid::before {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 33.33%;\n  right: 33.33%;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.reactEasyCrop_CropAreaGrid::after {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 33.33%;\n  bottom: 33.33%;\n  left: 0;\n  right: 0;\n  border-left: 0;\n  border-right: 0;\n}\n", this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef))
                }, t.prototype.componentWillUnmount = function() {
                    var e, t;
                    this.currentDoc && this.currentWindow && (void 0 === window.ResizeObserver && this.currentWindow.removeEventListener("resize", this.computeSizes), null === (e = this.resizeObserver) || void 0 === e || e.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && (null === (t = this.styleRef.parentNode) || void 0 === t || t.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent())
                }, t.prototype.componentDidUpdate = function(e) {
                    var t, o, r, n, i, a, s, c, h;
                    e.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : e.aspect !== this.props.aspect ? this.computeSizes() : e.zoom !== this.props.zoom ? this.recomputeCropPosition() : (null === (t = e.cropSize) || void 0 === t ? void 0 : t.height) !== (null === (o = this.props.cropSize) || void 0 === o ? void 0 : o.height) || (null === (r = e.cropSize) || void 0 === r ? void 0 : r.width) !== (null === (n = this.props.cropSize) || void 0 === n ? void 0 : n.width) ? this.computeSizes() : (null === (i = e.crop) || void 0 === i ? void 0 : i.x) === (null === (a = this.props.crop) || void 0 === a ? void 0 : a.x) && (null === (s = e.crop) || void 0 === s ? void 0 : s.y) === (null === (c = this.props.crop) || void 0 === c ? void 0 : c.y) || this.emitCropAreaChange(), e.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
                        passive: !1
                    }) : this.clearScrollEvent()), e.video !== this.props.video && (null === (h = this.videoRef.current) || void 0 === h || h.load())
                }, t.prototype.getAspect = function() {
                    var e = this.props,
                        t = e.cropSize,
                        o = e.aspect;
                    return t ? t.width / t.height : o
                }, t.prototype.onPinchStart = function(e) {
                    var o = t.getTouchPoint(e.touches[0]),
                        r = t.getTouchPoint(e.touches[1]);
                    this.lastPinchDistance = p(o, r), this.lastPinchRotation = u(o, r), this.onDragStart(m(o, r))
                }, t.prototype.onPinchMove = function(e) {
                    var o = this;
                    if (this.currentDoc && this.currentWindow) {
                        var r = t.getTouchPoint(e.touches[0]),
                            n = t.getTouchPoint(e.touches[1]),
                            i = m(r, n);
                        this.onDrag(i), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame((function() {
                            var e = p(r, n),
                                t = o.props.zoom * (e / o.lastPinchDistance);
                            o.setNewZoom(t, i, {
                                shouldUpdatePosition: !1
                            }), o.lastPinchDistance = e;
                            var a = u(r, n),
                                s = o.props.rotation + (a - o.lastPinchRotation);
                            o.props.onRotationChange && o.props.onRotationChange(s), o.lastPinchRotation = a
                        }))
                    }
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        o = t.image,
                        r = t.video,
                        a = t.mediaProps,
                        s = t.transform,
                        c = t.crop,
                        h = c.x,
                        p = c.y,
                        u = t.rotation,
                        d = t.zoom,
                        l = t.cropShape,
                        m = t.showGrid,
                        v = t.style,
                        f = v.containerStyle,
                        w = v.cropAreaStyle,
                        C = v.mediaStyle,
                        S = t.classes,
                        y = S.containerClassName,
                        z = S.cropAreaClassName,
                        x = S.mediaClassName,
                        R = t.objectFit;
                    return i.createElement("div", {
                        onMouseDown: this.onMouseDown,
                        onTouchStart: this.onTouchStart,
                        ref: function(t) {
                            return e.containerRef = t
                        },
                        "data-testid": "container",
                        style: f,
                        className: g("reactEasyCrop_Container", y)
                    }, o ? i.createElement("img", n({
                        alt: "",
                        className: g("reactEasyCrop_Image", "contain" === R && "reactEasyCrop_Contain", "horizontal-cover" === R && "reactEasyCrop_Cover_Horizontal", "vertical-cover" === R && "reactEasyCrop_Cover_Vertical", "auto-cover" === R && (this.mediaSize.naturalWidth > this.mediaSize.naturalHeight ? "reactEasyCrop_Cover_Horizontal" : "reactEasyCrop_Cover_Vertical"), x)
                    }, a, {
                        src: o,
                        ref: this.imageRef,
                        style: n(n({}, C), {
                            transform: s || "translate(".concat(h, "px, ").concat(p, "px) rotate(").concat(u, "deg) scale(").concat(d, ")")
                        }),
                        onLoad: this.onMediaLoad
                    })) : r && i.createElement("video", n({
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        className: g("reactEasyCrop_Video", "contain" === R && "reactEasyCrop_Contain", "horizontal-cover" === R && "reactEasyCrop_Cover_Horizontal", "vertical-cover" === R && "reactEasyCrop_Cover_Vertical", "auto-cover" === R && (this.mediaSize.naturalWidth > this.mediaSize.naturalHeight ? "reactEasyCrop_Cover_Horizontal" : "reactEasyCrop_Cover_Vertical"), x)
                    }, a, {
                        ref: this.videoRef,
                        onLoadedMetadata: this.onMediaLoad,
                        style: n(n({}, C), {
                            transform: s || "translate(".concat(h, "px, ").concat(p, "px) rotate(").concat(u, "deg) scale(").concat(d, ")")
                        }),
                        controls: !1
                    }), (Array.isArray(r) ? r : [{
                        src: r
                    }]).map((function(e) {
                        return i.createElement("source", n({
                            key: e.src
                        }, e))
                    }))), this.state.cropSize && i.createElement("div", {
                        style: n(n({}, w), {
                            width: this.state.cropSize.width,
                            height: this.state.cropSize.height
                        }),
                        "data-testid": "cropper",
                        className: g("reactEasyCrop_CropArea", "round" === l && "reactEasyCrop_CropAreaRound", m && "reactEasyCrop_CropAreaGrid", z)
                    }))
                }, t.defaultProps = {
                    zoom: 1,
                    rotation: 0,
                    aspect: 4 / 3,
                    maxZoom: 3,
                    minZoom: 1,
                    cropShape: "rect",
                    objectFit: "contain",
                    showGrid: !0,
                    style: {},
                    classes: {},
                    mediaProps: {},
                    zoomSpeed: 1,
                    restrictPosition: !0,
                    zoomWithScroll: !0
                }, t.getMousePoint = function(e) {
                    return {
                        x: Number(e.clientX),
                        y: Number(e.clientY)
                    }
                }, t.getTouchPoint = function(e) {
                    return {
                        x: Number(e.clientX),
                        y: Number(e.clientY)
                    }
                }, t
            }(i.Component)
        }
    }
]);
//# sourceMappingURL=22b98d121c5f8fa8b8cadf1546c28295e59359ed1b73e9744446414072bcc014.js.map