"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [5512], {
        15512: (e, t, r) => {
            r.r(t), r.d(t, {
                record: () => uc
            });
            var s, n = Object.defineProperty,
                o = (e, t, r) => ((e, t, r) => t in e ? n(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r)(e, "symbol" != typeof t ? t + "" : t, r),
                i = Object.defineProperty,
                a = (e, t, r) => ((e, t, r) => t in e ? i(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r)(e, "symbol" != typeof t ? t + "" : t, r),
                l = (e => (e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment", e))(l || {});
            const c = {
                    Node: ["childNodes", "parentNode", "parentElement", "textContent"],
                    ShadowRoot: ["host", "styleSheets"],
                    Element: ["shadowRoot", "querySelector", "querySelectorAll"],
                    MutationObserver: []
                },
                h = {
                    Node: ["contains", "getRootNode"],
                    ShadowRoot: ["getSelection"],
                    Element: [],
                    MutationObserver: ["constructor"]
                },
                u = {};

            function p(e) {
                if (u[e]) return u[e];
                const t = function(e) {
                        var t, r;
                        const s = null == (r = null == (t = null == globalThis ? void 0 : globalThis.Zone) ? void 0 : t.__symbol__) ? void 0 : r.call(t, e);
                        return s && globalThis[s] ? globalThis[s] : void 0
                    }(e) || globalThis[e],
                    r = t.prototype,
                    s = e in c ? c[e] : void 0,
                    n = Boolean(s && s.every((e => {
                        var t, s;
                        return Boolean(null == (s = null == (t = Object.getOwnPropertyDescriptor(r, e)) ? void 0 : t.get) ? void 0 : s.toString().includes("[native code]"))
                    }))),
                    o = e in h ? h[e] : void 0,
                    i = Boolean(o && o.every((e => {
                        var t;
                        return "function" == typeof r[e] && (null == (t = r[e]) ? void 0 : t.toString().includes("[native code]"))
                    })));
                if (n && i) return u[e] = t.prototype, t.prototype;
                try {
                    const s = document.createElement("iframe");
                    document.body.appendChild(s);
                    const n = s.contentWindow;
                    if (!n) return t.prototype;
                    const o = n[e].prototype;
                    return document.body.removeChild(s), o ? u[e] = o : r
                } catch {
                    return r
                }
            }
            const d = {};

            function f(e, t, r) {
                var s;
                const n = `${e}.${String(r)}`;
                if (d[n]) return d[n].call(t);
                const o = p(e),
                    i = null == (s = Object.getOwnPropertyDescriptor(o, r)) ? void 0 : s.get;
                return i ? (d[n] = i, i.call(t)) : t[r]
            }
            const m = {};

            function g(e, t, r) {
                const s = `${e}.${String(r)}`;
                if (m[s]) return m[s].bind(t);
                const n = p(e)[r];
                return "function" != typeof n ? t[r] : (m[s] = n, n.bind(t))
            }
            const y = {
                childNodes: function(e) {
                    return f("Node", e, "childNodes")
                },
                parentNode: function(e) {
                    return f("Node", e, "parentNode")
                },
                parentElement: function(e) {
                    return f("Node", e, "parentElement")
                },
                textContent: function(e) {
                    return f("Node", e, "textContent")
                },
                contains: function(e, t) {
                    return g("Node", e, "contains")(t)
                },
                getRootNode: function(e) {
                    return g("Node", e, "getRootNode")()
                },
                host: function(e) {
                    return e && "host" in e ? f("ShadowRoot", e, "host") : null
                },
                styleSheets: function(e) {
                    return e.styleSheets
                },
                shadowRoot: function(e) {
                    return e && "shadowRoot" in e ? f("Element", e, "shadowRoot") : null
                },
                querySelector: function(e, t) {
                    return f("Element", e, "querySelector")(t)
                },
                querySelectorAll: function(e, t) {
                    return f("Element", e, "querySelectorAll")(t)
                },
                mutationObserver: function() {
                    return p("MutationObserver").constructor
                }
            };

            function w(e) {
                return e.nodeType === e.ELEMENT_NODE
            }

            function b(e) {
                const t = e && "host" in e && "mode" in e && y.host(e) || null;
                return Boolean(t && "shadowRoot" in t && y.shadowRoot(t) === e)
            }

            function S(e) {
                return "[object ShadowRoot]" === Object.prototype.toString.call(e)
            }

            function C(e) {
                try {
                    const r = e.rules || e.cssRules;
                    if (!r) return null;
                    let s = e.href;
                    !s && e.ownerNode && e.ownerNode.ownerDocument && (s = e.ownerNode.ownerDocument.location.href);
                    const n = Array.from(r, (e => v(e, s))).join("");
                    return (t = n).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), t
                } catch (e) {
                    return null
                }
                var t
            }

            function v(e, t) {
                if (function(e) {
                        return "styleSheet" in e
                    }(e)) {
                    let t;
                    try {
                        t = C(e.styleSheet) || function(e) {
                            const {
                                cssText: t
                            } = e;
                            if (t.split('"').length < 3) return t;
                            const r = ["@import", `url(${JSON.stringify(e.href)})`];
                            return "" === e.layerName ? r.push("layer") : e.layerName && r.push(`layer(${e.layerName})`), e.supportsText && r.push(`supports(${e.supportsText})`), e.media.length && r.push(e.media.mediaText), r.join(" ") + ";"
                        }(e)
                    } catch (r) {
                        t = e.cssText
                    }
                    return e.styleSheet.href ? L(t, e.styleSheet.href) : t
                } {
                    let r = e.cssText;
                    return function(e) {
                        return "selectorText" in e
                    }(e) && e.selectorText.includes(":") && (r = function(e) {
                        const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
                        return e.replace(t, "$1\\$2")
                    }(r)), t ? L(r, t) : r
                }
            }
            class I {
                constructor() {
                    a(this, "idNodeMap", new Map), a(this, "nodeMetaMap", new WeakMap)
                }
                getId(e) {
                    var t;
                    if (!e) return -1;
                    return (null == (t = this.getMeta(e)) ? void 0 : t.id) ?? -1
                }
                getNode(e) {
                    return this.idNodeMap.get(e) || null
                }
                getIds() {
                    return Array.from(this.idNodeMap.keys())
                }
                getMeta(e) {
                    return this.nodeMetaMap.get(e) || null
                }
                removeNodeFromMap(e) {
                    const t = this.getId(e);
                    this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach((e => this.removeNodeFromMap(e)))
                }
                has(e) {
                    return this.idNodeMap.has(e)
                }
                hasNode(e) {
                    return this.nodeMetaMap.has(e)
                }
                add(e, t) {
                    const r = t.id;
                    this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, t)
                }
                replace(e, t) {
                    const r = this.getNode(e);
                    if (r) {
                        const e = this.nodeMetaMap.get(r);
                        e && this.nodeMetaMap.set(t, e)
                    }
                    this.idNodeMap.set(e, t)
                }
                reset() {
                    this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
                }
            }

            function k({
                element: e,
                maskInputOptions: t,
                tagName: r,
                type: s,
                value: n,
                maskInputFn: o
            }) {
                let i = n || "";
                const a = s && x(s);
                return (t[r.toLowerCase()] || a && t[a]) && (i = o ? o(i, e) : "*".repeat(i.length)), i
            }

            function x(e) {
                return e.toLowerCase()
            }
            const O = "__rrweb_original__";

            function M(e) {
                const t = e.type;
                return e.hasAttribute("data-rr-is-password") ? "password" : t ? x(t) : null
            }

            function A(e, t) {
                let r;
                try {
                    r = new URL(e, t ?? window.location.href)
                } catch (e) {
                    return null
                }
                const s = r.pathname.match(/\.([0-9a-z]+)(?:$)/i);
                return (null == s ? void 0 : s[1]) ?? null
            }
            const R = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
                E = /^(?:[a-z+]+:)?\/\//i,
                T = /^www\..*/i,
                N = /^(data:)([^,]*),(.*)/i;

            function L(e, t) {
                return (e || "").replace(R, ((e, r, s, n, o, i) => {
                    const a = s || o || i,
                        l = r || n || "";
                    if (!a) return e;
                    if (E.test(a) || T.test(a)) return `url(${l}${a}${l})`;
                    if (N.test(a)) return `url(${l}${a}${l})`;
                    if ("/" === a[0]) return `url(${l}${function(e){let t="";return t=e.indexOf("//")>-1?e.split("/").slice(0,3).join("/"):e.split("/")[0],t=t.split("?")[0],t}(t)+a}${l})`;
                    const c = t.split("/"),
                        h = a.split("/");
                    c.pop();
                    for (const e of h) "." !== e && (".." === e ? c.pop() : c.push(e));
                    return `url(${l}${c.join("/")}${l})`
                }))
            }

            function D(e, t = !1) {
                return t ? e.replace(/(\/\*[^*]*\*\/)|[\s;]/g, "") : e.replace(/(\/\*[^*]*\*\/)|[\s;]/g, "").replace(/0px/g, "0")
            }

            function P(e, t) {
                return function(e, t, r = !1) {
                    const s = Array.from(t.childNodes),
                        n = [];
                    let o = 0;
                    if (s.length > 1 && e && "string" == typeof e) {
                        let t = D(e, r);
                        const i = t.length / e.length;
                        for (let a = 1; a < s.length; a++)
                            if (s[a].textContent && "string" == typeof s[a].textContent) {
                                const l = D(s[a].textContent, r),
                                    c = 100;
                                let h = 3;
                                for (; h < l.length && (l[h].match(/[a-zA-Z0-9]/) || -1 !== l.indexOf(l.substring(0, h), 1)); h++);
                                for (; h < l.length; h++) {
                                    let u = l.substring(0, h),
                                        p = t.split(u),
                                        d = -1;
                                    if (2 === p.length) d = p[0].length;
                                    else if (p.length > 2 && "" === p[0] && "" !== s[a - 1].textContent) d = t.indexOf(u, 1);
                                    else if (1 === p.length) {
                                        if (u = u.substring(0, u.length - 1), p = t.split(u), p.length <= 1) return n.push(e), n;
                                        h = c + 1
                                    } else h === l.length - 1 && (d = t.indexOf(u));
                                    if (p.length >= 2 && h > c) {
                                        const e = s[a - 1].textContent;
                                        if (e && "string" == typeof e) {
                                            const r = D(e).length;
                                            d = t.indexOf(u, r)
                                        } - 1 === d && (d = p[0].length)
                                    }
                                    if (-1 !== d) {
                                        let a = Math.floor(d / i);
                                        for (; a > 0 && a < e.length;) {
                                            if (o += 1, o > 50 * s.length) return n.push(e), n;
                                            const l = D(e.substring(0, a), r);
                                            if (l.length === d) {
                                                n.push(e.substring(0, a)), e = e.substring(a), t = t.substring(d);
                                                break
                                            }
                                            l.length < d ? a += Math.max(1, Math.floor((d - l.length) / i)) : a -= Math.max(1, Math.floor((l.length - d) * i))
                                        }
                                        break
                                    }
                                }
                            }
                    }
                    return n.push(e), n
                }(e, t).join("/* rr_split */")
            }
            const F = "lightgrey";
            let B = 1;
            const _ = new RegExp("[^a-z0-9-_:]"),
                U = -2;

            function z() {
                return B++
            }
            let j, W;
            const V = /^[^ \t\n\r\u000c]+/,
                G = /^[, \t\n\r\u000c]+/;
            const Z = new WeakMap;

            function Y(e, t) {
                return t && "" !== t.trim() ? X(e, t) : t
            }

            function J(e) {
                return Boolean("svg" === e.tagName || e.ownerSVGElement)
            }

            function X(e, t) {
                let r = Z.get(e);
                if (r || (r = e.createElement("a"), Z.set(e, r)), t) {
                    if (t.startsWith("blob:") || t.startsWith("data:")) return t
                } else t = "";
                return r.setAttribute("href", t), r.href
            }

            function H(e, t, r, s) {
                return s ? "src" === r || "href" === r && ("use" !== t || "#" !== s[0]) || "xlink:href" === r && "#" !== s[0] ? Y(e, s) : "background" !== r || "table" !== t && "td" !== t && "th" !== t ? "srcset" === r ? function(e, t) {
                    if ("" === t.trim()) return t;
                    let r = 0;

                    function s(e) {
                        let s;
                        const n = e.exec(t.substring(r));
                        return n ? (s = n[0], r += s.length, s) : ""
                    }
                    const n = [];
                    for (; s(G), !(r >= t.length);) {
                        let o = s(V);
                        if ("," === o.slice(-1)) o = Y(e, o.substring(0, o.length - 1)), n.push(o);
                        else {
                            let s = "";
                            o = Y(e, o);
                            let i = !1;
                            for (;;) {
                                const e = t.charAt(r);
                                if ("" === e) {
                                    n.push((o + s).trim());
                                    break
                                }
                                if (i) ")" === e && (i = !1);
                                else {
                                    if ("," === e) {
                                        r += 1, n.push((o + s).trim());
                                        break
                                    }
                                    "(" === e && (i = !0)
                                }
                                s += e, r += 1
                            }
                        }
                    }
                    return n.join(", ")
                }(e, s) : "style" === r ? L(s, X(e)) : "object" === t && "data" === r ? Y(e, s) : s : Y(e, s) : s
            }

            function K(e, t, r) {
                return ("video" === e || "audio" === e) && "autoplay" === t
            }

            function $(e, t, r) {
                if (!e) return !1;
                if (e.nodeType !== e.ELEMENT_NODE) return !!r && $(y.parentNode(e), t, r);
                for (let r = e.classList.length; r--;) {
                    const s = e.classList[r];
                    if (t.test(s)) return !0
                }
                return !!r && $(y.parentNode(e), t, r)
            }

            function Q(e, t, r, s) {
                let n;
                if (w(e)) {
                    if (n = e, !y.childNodes(n).length) return !1
                } else {
                    if (null === y.parentElement(e)) return !1;
                    n = y.parentElement(e)
                }
                try {
                    if ("string" == typeof t) {
                        if (s) {
                            if (n.closest(`.${t}`)) return !0
                        } else if (n.classList.contains(t)) return !0
                    } else if ($(n, t, s)) return !0;
                    if (r)
                        if (s) {
                            if (n.closest(r)) return !0
                        } else if (n.matches(r)) return !0
                } catch (e) {}
                return !1
            }

            function q(e, t) {
                const {
                    doc: r,
                    mirror: s,
                    blockClass: n,
                    blockSelector: o,
                    needsMask: i,
                    inlineStylesheet: a,
                    maskInputOptions: c = {},
                    maskTextFn: h,
                    maskInputFn: u,
                    dataURLOptions: p = {},
                    inlineImages: d,
                    recordCanvas: f,
                    keepIframeSrcFn: m,
                    newlyAddedElement: g = !1,
                    cssCaptured: w = !1,
                    applyBackgroundColorToBlockedElements: b = !1
                } = t, S = function(e, t) {
                    if (!t.hasNode(e)) return;
                    const r = t.getId(e);
                    return 1 === r ? void 0 : r
                }(r, s);
                switch (e.nodeType) {
                    case e.DOCUMENT_NODE:
                        return "CSS1Compat" !== e.compatMode ? {
                            type: l.Document,
                            childNodes: [],
                            compatMode: e.compatMode
                        } : {
                            type: l.Document,
                            childNodes: []
                        };
                    case e.DOCUMENT_TYPE_NODE:
                        return {
                            type: l.DocumentType, name: e.name, publicId: e.publicId, systemId: e.systemId, rootId: S
                        };
                    case e.ELEMENT_NODE:
                        return function(e, t) {
                            const {
                                doc: r,
                                blockClass: s,
                                blockSelector: n,
                                inlineStylesheet: o,
                                maskInputOptions: i = {},
                                maskInputFn: a,
                                dataURLOptions: c = {},
                                inlineImages: h,
                                recordCanvas: u,
                                keepIframeSrcFn: p,
                                newlyAddedElement: d = !1,
                                rootId: f,
                                applyBackgroundColorToBlockedElements: m = !1
                            } = t, g = function(e, t, r) {
                                try {
                                    if ("string" == typeof t) {
                                        if (e.classList.contains(t)) return !0
                                    } else
                                        for (let r = e.classList.length; r--;) {
                                            const s = e.classList[r];
                                            if (t.test(s)) return !0
                                        }
                                    if (r) return e.matches(r)
                                } catch (e) {}
                                return !1
                            }(e, s, n), y = function(e) {
                                if (e instanceof HTMLFormElement) return "form";
                                const t = x(e.tagName);
                                return _.test(t) ? "div" : t
                            }(e);
                            let w = {};
                            const b = e.attributes.length;
                            for (let t = 0; t < b; t++) {
                                const s = e.attributes[t];
                                K(y, s.name, s.value) || (w[s.name] = H(r, y, x(s.name), s.value))
                            }
                            if ("link" === y && o) {
                                const t = Array.from(r.styleSheets).find((t => t.href === e.href));
                                let s = null;
                                t && (s = C(t)), s && (delete w.rel, delete w.href, w._cssText = s)
                            }
                            if ("style" === y && e.sheet) {
                                let t = C(e.sheet);
                                t && (e.childNodes.length > 1 && (t = P(t, e)), w._cssText = t)
                            }
                            if ("input" === y || "textarea" === y || "select" === y) {
                                const t = e.value,
                                    r = e.checked;
                                "radio" !== w.type && "checkbox" !== w.type && "submit" !== w.type && "button" !== w.type && t ? w.value = k({
                                    element: e,
                                    type: M(e),
                                    tagName: y,
                                    value: t,
                                    maskInputOptions: i,
                                    maskInputFn: a
                                }) : r && (w.checked = r)
                            }
                            "option" === y && (e.selected && !i.select ? w.selected = !0 : delete w.selected);
                            "dialog" === y && e.open && (w.rr_open_mode = e.matches("dialog:modal") ? "modal" : "non-modal");
                            if ("canvas" === y && u)
                                if ("2d" === e.__context)(function(e) {
                                    const t = e.getContext("2d");
                                    if (!t) return !0;
                                    for (let r = 0; r < e.width; r += 50)
                                        for (let s = 0; s < e.height; s += 50) {
                                            const n = t.getImageData,
                                                o = O in n ? n[O] : n;
                                            if (new Uint32Array(o.call(t, r, s, Math.min(50, e.width - r), Math.min(50, e.height - s)).data.buffer).some((e => 0 !== e))) return !1
                                        }
                                    return !0
                                })(e) || (w.rr_dataURL = e.toDataURL(c.type, c.quality));
                                else if (!("__context" in e)) {
                                const t = e.toDataURL(c.type, c.quality),
                                    s = r.createElement("canvas");
                                s.width = e.width, s.height = e.height;
                                t !== s.toDataURL(c.type, c.quality) && (w.rr_dataURL = t)
                            }
                            if ("img" === y && h) {
                                j || (j = r.createElement("canvas"), W = j.getContext("2d"));
                                const t = e,
                                    s = t.currentSrc || t.getAttribute("src") || "<unknown-src>",
                                    n = t.crossOrigin,
                                    o = () => {
                                        t.removeEventListener("load", o);
                                        try {
                                            j.width = t.naturalWidth, j.height = t.naturalHeight, W.drawImage(t, 0, 0), w.rr_dataURL = j.toDataURL(c.type, c.quality)
                                        } catch (e) {
                                            if ("anonymous" !== t.crossOrigin) return t.crossOrigin = "anonymous", void(t.complete && 0 !== t.naturalWidth ? o() : t.addEventListener("load", o));
                                            console.warn(`Cannot inline img src=${s}! Error: ${e}`)
                                        }
                                        "anonymous" === t.crossOrigin && (n ? w.crossOrigin = n : t.removeAttribute("crossorigin"))
                                    };
                                t.complete && 0 !== t.naturalWidth ? o() : t.addEventListener("load", o)
                            }
                            if ("audio" === y || "video" === y) {
                                const t = w;
                                t.rr_mediaState = e.paused ? "paused" : "played", t.rr_mediaCurrentTime = e.currentTime, t.rr_mediaPlaybackRate = e.playbackRate, t.rr_mediaMuted = e.muted, t.rr_mediaLoop = e.loop, t.rr_mediaVolume = e.volume
                            }
                            d || (e.scrollLeft && (w.rr_scrollLeft = e.scrollLeft), e.scrollTop && (w.rr_scrollTop = e.scrollTop));
                            if (g) {
                                const {
                                    width: t,
                                    height: r
                                } = e.getBoundingClientRect();
                                w = {
                                    class: w.class,
                                    rr_width: `${t}px`,
                                    rr_height: `${r}px`,
                                    ...m ? {
                                        rr_background_color: F
                                    } : {}
                                }
                            }
                            "iframe" !== y || p(w.src) || (e.contentDocument || (w.rr_src = w.src), delete w.src);
                            let S;
                            try {
                                customElements.get(y) && (S = !0)
                            } catch (e) {}
                            return {
                                type: l.Element,
                                tagName: y,
                                attributes: w,
                                childNodes: [],
                                isSVG: J(e) || void 0,
                                needBlock: g,
                                rootId: f,
                                isCustom: S
                            }
                        }(e, {
                            doc: r,
                            blockClass: n,
                            blockSelector: o,
                            inlineStylesheet: a,
                            maskInputOptions: c,
                            maskInputFn: u,
                            dataURLOptions: p,
                            inlineImages: d,
                            recordCanvas: f,
                            keepIframeSrcFn: m,
                            newlyAddedElement: g,
                            rootId: S,
                            applyBackgroundColorToBlockedElements: b
                        });
                    case e.TEXT_NODE:
                        return function(e, t) {
                            const {
                                needsMask: r,
                                maskTextFn: s,
                                rootId: n,
                                cssCaptured: o
                            } = t, i = y.parentNode(e), a = i && i.tagName;
                            let c = "";
                            const h = "STYLE" === a || void 0,
                                u = "SCRIPT" === a || void 0;
                            u ? c = "SCRIPT_PLACEHOLDER" : o || (c = y.textContent(e), h && c && (c = L(c, X(t.doc))));
                            !h && !u && c && r && (c = s ? s(c, y.parentElement(e)) : c.replace(/[\S]/g, "*"));
                            return {
                                type: l.Text,
                                textContent: c || "",
                                rootId: n
                            }
                        }(e, {
                            doc: r,
                            needsMask: i,
                            maskTextFn: h,
                            rootId: S,
                            cssCaptured: w
                        });
                    case e.CDATA_SECTION_NODE:
                        return {
                            type: l.CDATA, textContent: "", rootId: S
                        };
                    case e.COMMENT_NODE:
                        return {
                            type: l.Comment, textContent: y.textContent(e) || "", rootId: S
                        };
                    default:
                        return !1
                }
            }

            function ee(e) {
                return null == e ? "" : e.toLowerCase()
            }

            function te(e, t) {
                const {
                    doc: r,
                    mirror: s,
                    blockClass: n,
                    blockSelector: o,
                    maskTextClass: i,
                    maskTextSelector: a,
                    skipChild: c = !1,
                    inlineStylesheet: h = !0,
                    maskInputOptions: u = {},
                    maskTextFn: p,
                    maskInputFn: d,
                    slimDOMOptions: f,
                    dataURLOptions: m = {},
                    inlineImages: g = !1,
                    recordCanvas: C = !1,
                    onSerialize: v,
                    onIframeLoad: I,
                    iframeLoadTimeout: k = 5e3,
                    onStylesheetLoad: x,
                    stylesheetLoadTimeout: O = 5e3,
                    keepIframeSrcFn: M = (() => !1),
                    newlyAddedElement: R = !1,
                    cssCaptured: E = !1,
                    applyBackgroundColorToBlockedElements: T = !1
                } = t;
                let {
                    needsMask: N
                } = t, {
                    preserveWhiteSpace: L = !0
                } = t;
                if (!N) {
                    N = Q(e, i, a, void 0 === N)
                }
                const D = q(e, {
                    doc: r,
                    mirror: s,
                    blockClass: n,
                    blockSelector: o,
                    needsMask: N,
                    inlineStylesheet: h,
                    maskInputOptions: u,
                    maskTextFn: p,
                    maskInputFn: d,
                    dataURLOptions: m,
                    inlineImages: g,
                    recordCanvas: C,
                    keepIframeSrcFn: M,
                    newlyAddedElement: R,
                    cssCaptured: E,
                    applyBackgroundColorToBlockedElements: T
                });
                if (!D) return console.warn(e, "not serialized"), null;
                let P;
                P = s.hasNode(e) ? s.getId(e) : function(e, t) {
                    if (t.comment && e.type === l.Comment) return !0;
                    if (e.type === l.Element) {
                        if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) && "script" === e.attributes.as || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && "js" === A(e.attributes.href))) return !0;
                        if (t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (ee(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === ee(e.attributes.name) || "icon" === ee(e.attributes.rel) || "apple-touch-icon" === ee(e.attributes.rel) || "shortcut icon" === ee(e.attributes.rel)))) return !0;
                        if ("meta" === e.tagName) {
                            if (t.headMetaDescKeywords && ee(e.attributes.name).match(/^description|keywords$/)) return !0;
                            if (t.headMetaSocial && (ee(e.attributes.property).match(/^(og|twitter|fb):/) || ee(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === ee(e.attributes.name))) return !0;
                            if (t.headMetaRobots && ("robots" === ee(e.attributes.name) || "googlebot" === ee(e.attributes.name) || "bingbot" === ee(e.attributes.name))) return !0;
                            if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;
                            if (t.headMetaAuthorship && ("author" === ee(e.attributes.name) || "generator" === ee(e.attributes.name) || "framework" === ee(e.attributes.name) || "publisher" === ee(e.attributes.name) || "progid" === ee(e.attributes.name) || ee(e.attributes.property).match(/^article:/) || ee(e.attributes.property).match(/^product:/))) return !0;
                            if (t.headMetaVerification && ("google-site-verification" === ee(e.attributes.name) || "yandex-verification" === ee(e.attributes.name) || "csrf-token" === ee(e.attributes.name) || "p:domain_verify" === ee(e.attributes.name) || "verify-v1" === ee(e.attributes.name) || "verification" === ee(e.attributes.name) || "shopify-checkout-api-token" === ee(e.attributes.name))) return !0
                        }
                    }
                    return !1
                }(D, f) || !L && D.type === l.Text && !D.textContent.replace(/^\s+|\s+$/gm, "").length ? U : z();
                const F = Object.assign(D, {
                    id: P
                });
                if (s.add(e, F), P === U) return null;
                v && v(e);
                let B = !c;
                if (F.type === l.Element) {
                    B = B && !F.needBlock, delete F.needBlock;
                    const t = y.shadowRoot(e);
                    t && S(t) && (F.isShadowHost = !0)
                }
                if ((F.type === l.Document || F.type === l.Element) && B) {
                    f.headWhitespace && F.type === l.Element && "head" === F.tagName && (L = !1);
                    const t = {
                        doc: r,
                        mirror: s,
                        blockClass: n,
                        blockSelector: o,
                        needsMask: N,
                        maskTextClass: i,
                        maskTextSelector: a,
                        skipChild: c,
                        inlineStylesheet: h,
                        maskInputOptions: u,
                        maskTextFn: p,
                        maskInputFn: d,
                        slimDOMOptions: f,
                        dataURLOptions: m,
                        inlineImages: g,
                        recordCanvas: C,
                        preserveWhiteSpace: L,
                        onSerialize: v,
                        onIframeLoad: I,
                        iframeLoadTimeout: k,
                        onStylesheetLoad: x,
                        stylesheetLoadTimeout: O,
                        keepIframeSrcFn: M,
                        cssCaptured: !1,
                        applyBackgroundColorToBlockedElements: T
                    };
                    if (F.type === l.Element && "textarea" === F.tagName && void 0 !== F.attributes.value);
                    else {
                        F.type === l.Element && void 0 !== F.attributes._cssText && "string" == typeof F.attributes._cssText && (t.cssCaptured = !0);
                        for (const r of Array.from(y.childNodes(e))) {
                            const e = te(r, t);
                            e && F.childNodes.push(e)
                        }
                    }
                    let b = null;
                    if (w(e) && (b = y.shadowRoot(e)))
                        for (const e of Array.from(y.childNodes(b))) {
                            const r = te(e, t);
                            r && (S(b) && (r.isShadow = !0), F.childNodes.push(r))
                        }
                }
                const _ = y.parentNode(e);
                return _ && b(_) && S(_) && (F.isShadow = !0), F.type === l.Element && "iframe" === F.tagName && function(e, t, r) {
                    const s = e.contentWindow;
                    if (!s) return;
                    let n, o = !1;
                    try {
                        n = s.document.readyState
                    } catch (e) {
                        return
                    }
                    if ("complete" !== n) {
                        const s = setTimeout((() => {
                            o || (t(), o = !0)
                        }), r);
                        return void e.addEventListener("load", (() => {
                            clearTimeout(s), o = !0, t()
                        }))
                    }
                    const i = "about:blank";
                    if (s.location.href !== i || e.src === i || "" === e.src) return setTimeout(t, 0), e.addEventListener("load", t);
                    e.addEventListener("load", t)
                }(e, (() => {
                    const t = e.contentDocument;
                    if (t && I) {
                        const r = te(t, {
                            doc: t,
                            mirror: s,
                            blockClass: n,
                            blockSelector: o,
                            needsMask: N,
                            maskTextClass: i,
                            maskTextSelector: a,
                            skipChild: !1,
                            inlineStylesheet: h,
                            maskInputOptions: u,
                            maskTextFn: p,
                            maskInputFn: d,
                            slimDOMOptions: f,
                            dataURLOptions: m,
                            inlineImages: g,
                            recordCanvas: C,
                            preserveWhiteSpace: L,
                            onSerialize: v,
                            onIframeLoad: I,
                            iframeLoadTimeout: k,
                            onStylesheetLoad: x,
                            stylesheetLoadTimeout: O,
                            keepIframeSrcFn: M
                        });
                        r && I(e, r)
                    }
                }), k), F.type === l.Element && "link" === F.tagName && "string" == typeof F.attributes.rel && ("stylesheet" === F.attributes.rel || "preload" === F.attributes.rel && "string" == typeof F.attributes.href && "css" === A(F.attributes.href)) && function(e, t, r) {
                    let s, n = !1;
                    try {
                        s = e.sheet
                    } catch (e) {
                        return
                    }
                    if (s) return;
                    const o = setTimeout((() => {
                        n || (t(), n = !0)
                    }), r);
                    e.addEventListener("load", (() => {
                        clearTimeout(o), n = !0, t()
                    }))
                }(e, (() => {
                    if (x) {
                        const t = te(e, {
                            doc: r,
                            mirror: s,
                            blockClass: n,
                            blockSelector: o,
                            needsMask: N,
                            maskTextClass: i,
                            maskTextSelector: a,
                            skipChild: !1,
                            inlineStylesheet: h,
                            maskInputOptions: u,
                            maskTextFn: p,
                            maskInputFn: d,
                            slimDOMOptions: f,
                            dataURLOptions: m,
                            inlineImages: g,
                            recordCanvas: C,
                            preserveWhiteSpace: L,
                            onSerialize: v,
                            onIframeLoad: I,
                            iframeLoadTimeout: k,
                            onStylesheetLoad: x,
                            stylesheetLoadTimeout: O,
                            keepIframeSrcFn: M
                        });
                        t && x(e, t)
                    }
                }), O), F
            }

            function re(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
            }

            function se(e) {
                if (e.__esModule) return e;
                var t = e.default;
                if ("function" == typeof t) {
                    var r = function e() {
                        return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
                    };
                    r.prototype = t.prototype
                } else r = {};
                return Object.defineProperty(r, "__esModule", {
                    value: !0
                }), Object.keys(e).forEach((function(t) {
                    var s = Object.getOwnPropertyDescriptor(e, t);
                    Object.defineProperty(r, t, s.get ? s : {
                        enumerable: !0,
                        get: function() {
                            return e[t]
                        }
                    })
                })), r
            }
            var ne = {
                    exports: {}
                },
                oe = String,
                ie = function() {
                    return {
                        isColorSupported: !1,
                        reset: oe,
                        bold: oe,
                        dim: oe,
                        italic: oe,
                        underline: oe,
                        inverse: oe,
                        hidden: oe,
                        strikethrough: oe,
                        black: oe,
                        red: oe,
                        green: oe,
                        yellow: oe,
                        blue: oe,
                        magenta: oe,
                        cyan: oe,
                        white: oe,
                        gray: oe,
                        bgBlack: oe,
                        bgRed: oe,
                        bgGreen: oe,
                        bgYellow: oe,
                        bgBlue: oe,
                        bgMagenta: oe,
                        bgCyan: oe,
                        bgWhite: oe
                    }
                };
            ne.exports = ie(), ne.exports.createColors = ie;
            var ae = ne.exports;
            const le = se(Object.freeze(Object.defineProperty({
                __proto__: null,
                default: {}
            }, Symbol.toStringTag, {
                value: "Module"
            })));
            let ce = ae,
                he = le,
                ue = class e extends Error {
                    constructor(t, r, s, n, o, i) {
                        super(t), this.name = "CssSyntaxError", this.reason = t, o && (this.file = o), n && (this.source = n), i && (this.plugin = i), void 0 !== r && void 0 !== s && ("number" == typeof r ? (this.line = r, this.column = s) : (this.line = r.line, this.column = r.column, this.endLine = s.line, this.endColumn = s.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, e)
                    }
                    setMessage() {
                        this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", void 0 !== this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
                    }
                    showSourceCode(e) {
                        if (!this.source) return "";
                        let t = this.source;
                        null == e && (e = ce.isColorSupported), he && e && (t = he(t));
                        let r, s, n = t.split(/\r?\n/),
                            o = Math.max(this.line - 3, 0),
                            i = Math.min(this.line + 2, n.length),
                            a = String(i).length;
                        if (e) {
                            let {
                                bold: e,
                                gray: t,
                                red: n
                            } = ce.createColors(!0);
                            r = t => e(n(t)), s = e => t(e)
                        } else r = s = e => e;
                        return n.slice(o, i).map(((e, t) => {
                            let n = o + 1 + t,
                                i = " " + (" " + n).slice(-a) + " | ";
                            if (n === this.line) {
                                let t = s(i.replace(/\d/g, " ")) + e.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                                return r(">") + s(i) + e + "\n " + t + r("^")
                            }
                            return " " + s(i) + e
                        })).join("\n")
                    }
                    toString() {
                        let e = this.showSourceCode();
                        return e && (e = "\n\n" + e + "\n"), this.name + ": " + this.message + e
                    }
                };
            var pe = ue;
            ue.default = ue;
            var de = {};
            de.isClean = Symbol("isClean"), de.my = Symbol("my");
            const fe = {
                after: "\n",
                beforeClose: "\n",
                beforeComment: "\n",
                beforeDecl: "\n",
                beforeOpen: " ",
                beforeRule: "\n",
                colon: ": ",
                commentLeft: " ",
                commentRight: " ",
                emptyBody: "",
                indent: "    ",
                semicolon: !1
            };
            let me = class {
                constructor(e) {
                    this.builder = e
                }
                atrule(e, t) {
                    let r = "@" + e.name,
                        s = e.params ? this.rawValue(e, "params") : "";
                    if (void 0 !== e.raws.afterName ? r += e.raws.afterName : s && (r += " "), e.nodes) this.block(e, r + s);
                    else {
                        let n = (e.raws.between || "") + (t ? ";" : "");
                        this.builder(r + s + n, e)
                    }
                }
                beforeAfter(e, t) {
                    let r;
                    r = "decl" === e.type ? this.raw(e, null, "beforeDecl") : "comment" === e.type ? this.raw(e, null, "beforeComment") : "before" === t ? this.raw(e, null, "beforeRule") : this.raw(e, null, "beforeClose");
                    let s = e.parent,
                        n = 0;
                    for (; s && "root" !== s.type;) n += 1, s = s.parent;
                    if (r.includes("\n")) {
                        let t = this.raw(e, null, "indent");
                        if (t.length)
                            for (let e = 0; e < n; e++) r += t
                    }
                    return r
                }
                block(e, t) {
                    let r, s = this.raw(e, "between", "beforeOpen");
                    this.builder(t + s + "{", e, "start"), e.nodes && e.nodes.length ? (this.body(e), r = this.raw(e, "after")) : r = this.raw(e, "after", "emptyBody"), r && this.builder(r), this.builder("}", e, "end")
                }
                body(e) {
                    let t = e.nodes.length - 1;
                    for (; t > 0 && "comment" === e.nodes[t].type;) t -= 1;
                    let r = this.raw(e, "semicolon");
                    for (let s = 0; s < e.nodes.length; s++) {
                        let n = e.nodes[s],
                            o = this.raw(n, "before");
                        o && this.builder(o), this.stringify(n, t !== s || r)
                    }
                }
                comment(e) {
                    let t = this.raw(e, "left", "commentLeft"),
                        r = this.raw(e, "right", "commentRight");
                    this.builder("/*" + t + e.text + r + "*/", e)
                }
                decl(e, t) {
                    let r = this.raw(e, "between", "colon"),
                        s = e.prop + r + this.rawValue(e, "value");
                    e.important && (s += e.raws.important || " !important"), t && (s += ";"), this.builder(s, e)
                }
                document(e) {
                    this.body(e)
                }
                raw(e, t, r) {
                    let s;
                    if (r || (r = t), t && (s = e.raws[t], void 0 !== s)) return s;
                    let n = e.parent;
                    if ("before" === r) {
                        if (!n || "root" === n.type && n.first === e) return "";
                        if (n && "document" === n.type) return ""
                    }
                    if (!n) return fe[r];
                    let o = e.root();
                    if (o.rawCache || (o.rawCache = {}), void 0 !== o.rawCache[r]) return o.rawCache[r];
                    if ("before" === r || "after" === r) return this.beforeAfter(e, r);
                    {
                        let n = "raw" + ((i = r)[0].toUpperCase() + i.slice(1));
                        this[n] ? s = this[n](o, e) : o.walk((e => {
                            if (s = e.raws[t], void 0 !== s) return !1
                        }))
                    }
                    var i;
                    return void 0 === s && (s = fe[r]), o.rawCache[r] = s, s
                }
                rawBeforeClose(e) {
                    let t;
                    return e.walk((e => {
                        if (e.nodes && e.nodes.length > 0 && void 0 !== e.raws.after) return t = e.raws.after, t.includes("\n") && (t = t.replace(/[^\n]+$/, "")), !1
                    })), t && (t = t.replace(/\S/g, "")), t
                }
                rawBeforeComment(e, t) {
                    let r;
                    return e.walkComments((e => {
                        if (void 0 !== e.raws.before) return r = e.raws.before, r.includes("\n") && (r = r.replace(/[^\n]+$/, "")), !1
                    })), void 0 === r ? r = this.raw(t, null, "beforeDecl") : r && (r = r.replace(/\S/g, "")), r
                }
                rawBeforeDecl(e, t) {
                    let r;
                    return e.walkDecls((e => {
                        if (void 0 !== e.raws.before) return r = e.raws.before, r.includes("\n") && (r = r.replace(/[^\n]+$/, "")), !1
                    })), void 0 === r ? r = this.raw(t, null, "beforeRule") : r && (r = r.replace(/\S/g, "")), r
                }
                rawBeforeOpen(e) {
                    let t;
                    return e.walk((e => {
                        if ("decl" !== e.type && (t = e.raws.between, void 0 !== t)) return !1
                    })), t
                }
                rawBeforeRule(e) {
                    let t;
                    return e.walk((r => {
                        if (r.nodes && (r.parent !== e || e.first !== r) && void 0 !== r.raws.before) return t = r.raws.before, t.includes("\n") && (t = t.replace(/[^\n]+$/, "")), !1
                    })), t && (t = t.replace(/\S/g, "")), t
                }
                rawColon(e) {
                    let t;
                    return e.walkDecls((e => {
                        if (void 0 !== e.raws.between) return t = e.raws.between.replace(/[^\s:]/g, ""), !1
                    })), t
                }
                rawEmptyBody(e) {
                    let t;
                    return e.walk((e => {
                        if (e.nodes && 0 === e.nodes.length && (t = e.raws.after, void 0 !== t)) return !1
                    })), t
                }
                rawIndent(e) {
                    if (e.raws.indent) return e.raws.indent;
                    let t;
                    return e.walk((r => {
                        let s = r.parent;
                        if (s && s !== e && s.parent && s.parent === e && void 0 !== r.raws.before) {
                            let e = r.raws.before.split("\n");
                            return t = e[e.length - 1], t = t.replace(/\S/g, ""), !1
                        }
                    })), t
                }
                rawSemicolon(e) {
                    let t;
                    return e.walk((e => {
                        if (e.nodes && e.nodes.length && "decl" === e.last.type && (t = e.raws.semicolon, void 0 !== t)) return !1
                    })), t
                }
                rawValue(e, t) {
                    let r = e[t],
                        s = e.raws[t];
                    return s && s.value === r ? s.raw : r
                }
                root(e) {
                    this.body(e), e.raws.after && this.builder(e.raws.after)
                }
                rule(e) {
                    this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end")
                }
                stringify(e, t) {
                    if (!this[e.type]) throw new Error("Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier.");
                    this[e.type](e, t)
                }
            };
            var ge = me;
            me.default = me;
            let ye = ge;

            function we(e, t) {
                new ye(t).stringify(e)
            }
            var be = we;
            we.default = we;
            let {
                isClean: Se,
                my: Ce
            } = de, ve = pe, Ie = ge, ke = be;

            function xe(e, t) {
                let r = new e.constructor;
                for (let s in e) {
                    if (!Object.prototype.hasOwnProperty.call(e, s)) continue;
                    if ("proxyCache" === s) continue;
                    let n = e[s],
                        o = typeof n;
                    "parent" === s && "object" === o ? t && (r[s] = t) : "source" === s ? r[s] = n : Array.isArray(n) ? r[s] = n.map((e => xe(e, r))) : ("object" === o && null !== n && (n = xe(n)), r[s] = n)
                }
                return r
            }
            let Oe = class {
                constructor(e = {}) {
                    this.raws = {}, this[Se] = !1, this[Ce] = !0;
                    for (let t in e)
                        if ("nodes" === t) {
                            this.nodes = [];
                            for (let r of e[t]) "function" == typeof r.clone ? this.append(r.clone()) : this.append(r)
                        } else this[t] = e[t]
                }
                addToError(e) {
                    if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
                        let t = this.source;
                        e.stack = e.stack.replace(/\n\s{4}at /, `$&${t.input.from}:${t.start.line}:${t.start.column}$&`)
                    }
                    return e
                }
                after(e) {
                    return this.parent.insertAfter(this, e), this
                }
                assign(e = {}) {
                    for (let t in e) this[t] = e[t];
                    return this
                }
                before(e) {
                    return this.parent.insertBefore(this, e), this
                }
                cleanRaws(e) {
                    delete this.raws.before, delete this.raws.after, e || delete this.raws.between
                }
                clone(e = {}) {
                    let t = xe(this);
                    for (let r in e) t[r] = e[r];
                    return t
                }
                cloneAfter(e = {}) {
                    let t = this.clone(e);
                    return this.parent.insertAfter(this, t), t
                }
                cloneBefore(e = {}) {
                    let t = this.clone(e);
                    return this.parent.insertBefore(this, t), t
                }
                error(e, t = {}) {
                    if (this.source) {
                        let {
                            end: r,
                            start: s
                        } = this.rangeBy(t);
                        return this.source.input.error(e, {
                            column: s.column,
                            line: s.line
                        }, {
                            column: r.column,
                            line: r.line
                        }, t)
                    }
                    return new ve(e)
                }
                getProxyProcessor() {
                    return {
                        get: (e, t) => "proxyOf" === t ? e : "root" === t ? () => e.root().toProxy() : e[t],
                        set: (e, t, r) => (e[t] === r || (e[t] = r, "prop" !== t && "value" !== t && "name" !== t && "params" !== t && "important" !== t && "text" !== t || e.markDirty()), !0)
                    }
                }
                markDirty() {
                    if (this[Se]) {
                        this[Se] = !1;
                        let e = this;
                        for (; e = e.parent;) e[Se] = !1
                    }
                }
                next() {
                    if (!this.parent) return;
                    let e = this.parent.index(this);
                    return this.parent.nodes[e + 1]
                }
                positionBy(e, t) {
                    let r = this.source.start;
                    if (e.index) r = this.positionInside(e.index, t);
                    else if (e.word) {
                        let s = (t = this.toString()).indexOf(e.word); - 1 !== s && (r = this.positionInside(s, t))
                    }
                    return r
                }
                positionInside(e, t) {
                    let r = t || this.toString(),
                        s = this.source.start.column,
                        n = this.source.start.line;
                    for (let t = 0; t < e; t++) "\n" === r[t] ? (s = 1, n += 1) : s += 1;
                    return {
                        column: s,
                        line: n
                    }
                }
                prev() {
                    if (!this.parent) return;
                    let e = this.parent.index(this);
                    return this.parent.nodes[e - 1]
                }
                rangeBy(e) {
                    let t = {
                            column: this.source.start.column,
                            line: this.source.start.line
                        },
                        r = this.source.end ? {
                            column: this.source.end.column + 1,
                            line: this.source.end.line
                        } : {
                            column: t.column + 1,
                            line: t.line
                        };
                    if (e.word) {
                        let s = this.toString(),
                            n = s.indexOf(e.word); - 1 !== n && (t = this.positionInside(n, s), r = this.positionInside(n + e.word.length, s))
                    } else e.start ? t = {
                        column: e.start.column,
                        line: e.start.line
                    } : e.index && (t = this.positionInside(e.index)), e.end ? r = {
                        column: e.end.column,
                        line: e.end.line
                    } : "number" == typeof e.endIndex ? r = this.positionInside(e.endIndex) : e.index && (r = this.positionInside(e.index + 1));
                    return (r.line < t.line || r.line === t.line && r.column <= t.column) && (r = {
                        column: t.column + 1,
                        line: t.line
                    }), {
                        end: r,
                        start: t
                    }
                }
                raw(e, t) {
                    return (new Ie).raw(this, e, t)
                }
                remove() {
                    return this.parent && this.parent.removeChild(this), this.parent = void 0, this
                }
                replaceWith(...e) {
                    if (this.parent) {
                        let t = this,
                            r = !1;
                        for (let s of e) s === this ? r = !0 : r ? (this.parent.insertAfter(t, s), t = s) : this.parent.insertBefore(t, s);
                        r || this.remove()
                    }
                    return this
                }
                root() {
                    let e = this;
                    for (; e.parent && "document" !== e.parent.type;) e = e.parent;
                    return e
                }
                toJSON(e, t) {
                    let r = {},
                        s = null == t;
                    t = t || new Map;
                    let n = 0;
                    for (let e in this) {
                        if (!Object.prototype.hasOwnProperty.call(this, e)) continue;
                        if ("parent" === e || "proxyCache" === e) continue;
                        let s = this[e];
                        if (Array.isArray(s)) r[e] = s.map((e => "object" == typeof e && e.toJSON ? e.toJSON(null, t) : e));
                        else if ("object" == typeof s && s.toJSON) r[e] = s.toJSON(null, t);
                        else if ("source" === e) {
                            let o = t.get(s.input);
                            null == o && (o = n, t.set(s.input, n), n++), r[e] = {
                                end: s.end,
                                inputId: o,
                                start: s.start
                            }
                        } else r[e] = s
                    }
                    return s && (r.inputs = [...t.keys()].map((e => e.toJSON()))), r
                }
                toProxy() {
                    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
                }
                toString(e = ke) {
                    e.stringify && (e = e.stringify);
                    let t = "";
                    return e(this, (e => {
                        t += e
                    })), t
                }
                warn(e, t, r) {
                    let s = {
                        node: this
                    };
                    for (let e in r) s[e] = r[e];
                    return e.warn(t, s)
                }
                get proxyOf() {
                    return this
                }
            };
            var Me = Oe;
            Oe.default = Oe;
            let Ae = Me,
                Re = class extends Ae {
                    constructor(e) {
                        e && void 0 !== e.value && "string" != typeof e.value && (e = {
                            ...e,
                            value: String(e.value)
                        }), super(e), this.type = "decl"
                    }
                    get variable() {
                        return this.prop.startsWith("--") || "$" === this.prop[0]
                    }
                };
            var Ee = Re;
            Re.default = Re;
            var Te = {
                nanoid: (e = 21) => {
                    let t = "",
                        r = e;
                    for (; r--;) t += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
                    return t
                },
                customAlphabet: (e, t = 21) => (r = t) => {
                    let s = "",
                        n = r;
                    for (; n--;) s += e[Math.random() * e.length | 0];
                    return s
                }
            };
            let {
                SourceMapConsumer: Ne,
                SourceMapGenerator: Le
            } = le, {
                existsSync: De,
                readFileSync: Pe
            } = le, {
                dirname: Fe,
                join: Be
            } = le;
            let _e = class {
                constructor(e, t) {
                    if (!1 === t.map) return;
                    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
                    let r = t.map ? t.map.prev : void 0,
                        s = this.loadMap(t.from, r);
                    !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = Fe(this.mapFile)), s && (this.text = s)
                }
                consumer() {
                    return this.consumerCache || (this.consumerCache = new Ne(this.text)), this.consumerCache
                }
                decodeInline(e) {
                    if (/^data:application\/json;charset=utf-?8,/.test(e) || /^data:application\/json,/.test(e)) return decodeURIComponent(e.substr(RegExp.lastMatch.length));
                    if (/^data:application\/json;charset=utf-?8;base64,/.test(e) || /^data:application\/json;base64,/.test(e)) return t = e.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(t, "base64").toString() : window.atob(t);
                    var t;
                    let r = e.match(/data:application\/json;([^,]+),/)[1];
                    throw new Error("Unsupported source map encoding " + r)
                }
                getAnnotationURL(e) {
                    return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
                }
                isMap(e) {
                    return "object" == typeof e && ("string" == typeof e.mappings || "string" == typeof e._mappings || Array.isArray(e.sections))
                }
                loadAnnotation(e) {
                    let t = e.match(/\/\*\s*# sourceMappingURL=/gm);
                    if (!t) return;
                    let r = e.lastIndexOf(t.pop()),
                        s = e.indexOf("*/", r);
                    r > -1 && s > -1 && (this.annotation = this.getAnnotationURL(e.substring(r, s)))
                }
                loadFile(e) {
                    if (this.root = Fe(e), De(e)) return this.mapFile = e, Pe(e, "utf-8").toString().trim()
                }
                loadMap(e, t) {
                    if (!1 === t) return !1;
                    if (t) {
                        if ("string" == typeof t) return t;
                        if ("function" != typeof t) {
                            if (t instanceof Ne) return Le.fromSourceMap(t).toString();
                            if (t instanceof Le) return t.toString();
                            if (this.isMap(t)) return JSON.stringify(t);
                            throw new Error("Unsupported previous source map format: " + t.toString())
                        } {
                            let r = t(e);
                            if (r) {
                                let e = this.loadFile(r);
                                if (!e) throw new Error("Unable to load previous source map: " + r.toString());
                                return e
                            }
                        }
                    } else {
                        if (this.inline) return this.decodeInline(this.annotation);
                        if (this.annotation) {
                            let t = this.annotation;
                            return e && (t = Be(Fe(e), t)), this.loadFile(t)
                        }
                    }
                }
                startWith(e, t) {
                    return !!e && e.substr(0, t.length) === t
                }
                withContent() {
                    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
                }
            };
            var Ue = _e;
            _e.default = _e;
            let {
                SourceMapConsumer: ze,
                SourceMapGenerator: je
            } = le, {
                fileURLToPath: We,
                pathToFileURL: Ve
            } = le, {
                isAbsolute: Ge,
                resolve: Ze
            } = le, {
                nanoid: Ye
            } = Te, Je = le, Xe = pe, He = Ue, Ke = Symbol("fromOffsetCache"), $e = Boolean(ze && je), Qe = Boolean(Ze && Ge), qe = class {
                constructor(e, t = {}) {
                    if (null == e || "object" == typeof e && !e.toString) throw new Error(`PostCSS received ${e} instead of CSS string`);
                    if (this.css = e.toString(), "﻿" === this.css[0] || "￾" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!Qe || /^\w+:\/\//.test(t.from) || Ge(t.from) ? this.file = t.from : this.file = Ze(t.from)), Qe && $e) {
                        let e = new He(this.css, t);
                        if (e.text) {
                            this.map = e;
                            let t = e.consumer().file;
                            !this.file && t && (this.file = this.mapResolve(t))
                        }
                    }
                    this.file || (this.id = "<input css " + Ye(6) + ">"), this.map && (this.map.file = this.from)
                }
                error(e, t, r, s = {}) {
                    let n, o, i;
                    if (t && "object" == typeof t) {
                        let e = t,
                            s = r;
                        if ("number" == typeof e.offset) {
                            let s = this.fromOffset(e.offset);
                            t = s.line, r = s.col
                        } else t = e.line, r = e.column;
                        if ("number" == typeof s.offset) {
                            let e = this.fromOffset(s.offset);
                            o = e.line, i = e.col
                        } else o = s.line, i = s.column
                    } else if (!r) {
                        let e = this.fromOffset(t);
                        t = e.line, r = e.col
                    }
                    let a = this.origin(t, r, o, i);
                    return n = a ? new Xe(e, void 0 === a.endLine ? a.line : {
                        column: a.column,
                        line: a.line
                    }, void 0 === a.endLine ? a.column : {
                        column: a.endColumn,
                        line: a.endLine
                    }, a.source, a.file, s.plugin) : new Xe(e, void 0 === o ? t : {
                        column: r,
                        line: t
                    }, void 0 === o ? r : {
                        column: i,
                        line: o
                    }, this.css, this.file, s.plugin), n.input = {
                        column: r,
                        endColumn: i,
                        endLine: o,
                        line: t,
                        source: this.css
                    }, this.file && (Ve && (n.input.url = Ve(this.file).toString()), n.input.file = this.file), n
                }
                fromOffset(e) {
                    let t, r;
                    if (this[Ke]) r = this[Ke];
                    else {
                        let e = this.css.split("\n");
                        r = new Array(e.length);
                        let t = 0;
                        for (let s = 0, n = e.length; s < n; s++) r[s] = t, t += e[s].length + 1;
                        this[Ke] = r
                    }
                    t = r[r.length - 1];
                    let s = 0;
                    if (e >= t) s = r.length - 1;
                    else {
                        let t, n = r.length - 2;
                        for (; s < n;)
                            if (t = s + (n - s >> 1), e < r[t]) n = t - 1;
                            else {
                                if (!(e >= r[t + 1])) {
                                    s = t;
                                    break
                                }
                                s = t + 1
                            }
                    }
                    return {
                        col: e - r[s] + 1,
                        line: s + 1
                    }
                }
                mapResolve(e) {
                    return /^\w+:\/\//.test(e) ? e : Ze(this.map.consumer().sourceRoot || this.map.root || ".", e)
                }
                origin(e, t, r, s) {
                    if (!this.map) return !1;
                    let n, o, i = this.map.consumer(),
                        a = i.originalPositionFor({
                            column: t,
                            line: e
                        });
                    if (!a.source) return !1;
                    "number" == typeof r && (n = i.originalPositionFor({
                        column: s,
                        line: r
                    })), o = Ge(a.source) ? Ve(a.source) : new URL(a.source, this.map.consumer().sourceRoot || Ve(this.map.mapFile));
                    let l = {
                        column: a.column,
                        endColumn: n && n.column,
                        endLine: n && n.line,
                        line: a.line,
                        url: o.toString()
                    };
                    if ("file:" === o.protocol) {
                        if (!We) throw new Error("file: protocol is not available in this PostCSS build");
                        l.file = We(o)
                    }
                    let c = i.sourceContentFor(a.source);
                    return c && (l.source = c), l
                }
                toJSON() {
                    let e = {};
                    for (let t of ["hasBOM", "css", "file", "id"]) null != this[t] && (e[t] = this[t]);
                    return this.map && (e.map = {
                        ...this.map
                    }, e.map.consumerCache && (e.map.consumerCache = void 0)), e
                }
                get from() {
                    return this.file || this.id
                }
            };
            var et = qe;
            qe.default = qe, Je && Je.registerInput && Je.registerInput(qe);
            let {
                SourceMapConsumer: tt,
                SourceMapGenerator: rt
            } = le, {
                dirname: st,
                relative: nt,
                resolve: ot,
                sep: it
            } = le, {
                pathToFileURL: at
            } = le, lt = et, ct = Boolean(tt && rt), ht = Boolean(st && ot && nt && it);
            var ut = class {
                constructor(e, t, r, s) {
                    this.stringify = e, this.mapOpts = r.map || {}, this.root = t, this.opts = r, this.css = s, this.originalCSS = s, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
                }
                addAnnotation() {
                    let e;
                    e = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" == typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" == typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
                    let t = "\n";
                    this.css.includes("\r\n") && (t = "\r\n"), this.css += t + "/*# sourceMappingURL=" + e + " */"
                }
                applyPrevMaps() {
                    for (let e of this.previous()) {
                        let t, r = this.toUrl(this.path(e.file)),
                            s = e.root || st(e.file);
                        !1 === this.mapOpts.sourcesContent ? (t = new tt(e.text), t.sourcesContent && (t.sourcesContent = null)) : t = e.consumer(), this.map.applySourceMap(t, r, this.toUrl(this.path(s)))
                    }
                }
                clearAnnotation() {
                    if (!1 !== this.mapOpts.annotation)
                        if (this.root) {
                            let e;
                            for (let t = this.root.nodes.length - 1; t >= 0; t--) e = this.root.nodes[t], "comment" === e.type && 0 === e.text.indexOf("# sourceMappingURL=") && this.root.removeChild(t)
                        } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
                }
                generate() {
                    if (this.clearAnnotation(), ht && ct && this.isMap()) return this.generateMap();
                    {
                        let e = "";
                        return this.stringify(this.root, (t => {
                            e += t
                        })), [e]
                    }
                }
                generateMap() {
                    if (this.root) this.generateString();
                    else if (1 === this.previous().length) {
                        let e = this.previous()[0].consumer();
                        e.file = this.outputFile(), this.map = rt.fromSourceMap(e, {
                            ignoreInvalidMapping: !0
                        })
                    } else this.map = new rt({
                        file: this.outputFile(),
                        ignoreInvalidMapping: !0
                    }), this.map.addMapping({
                        generated: {
                            column: 0,
                            line: 1
                        },
                        original: {
                            column: 0,
                            line: 1
                        },
                        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
                    });
                    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map]
                }
                generateString() {
                    this.css = "", this.map = new rt({
                        file: this.outputFile(),
                        ignoreInvalidMapping: !0
                    });
                    let e, t, r = 1,
                        s = 1,
                        n = "<no source>",
                        o = {
                            generated: {
                                column: 0,
                                line: 0
                            },
                            original: {
                                column: 0,
                                line: 0
                            },
                            source: ""
                        };
                    this.stringify(this.root, ((i, a, l) => {
                        if (this.css += i, a && "end" !== l && (o.generated.line = r, o.generated.column = s - 1, a.source && a.source.start ? (o.source = this.sourcePath(a), o.original.line = a.source.start.line, o.original.column = a.source.start.column - 1, this.map.addMapping(o)) : (o.source = n, o.original.line = 1, o.original.column = 0, this.map.addMapping(o))), e = i.match(/\n/g), e ? (r += e.length, t = i.lastIndexOf("\n"), s = i.length - t) : s += i.length, a && "start" !== l) {
                            let e = a.parent || {
                                raws: {}
                            };
                            ("decl" === a.type || "atrule" === a.type && !a.nodes) && a === e.last && !e.raws.semicolon || (a.source && a.source.end ? (o.source = this.sourcePath(a), o.original.line = a.source.end.line, o.original.column = a.source.end.column - 1, o.generated.line = r, o.generated.column = s - 2, this.map.addMapping(o)) : (o.source = n, o.original.line = 1, o.original.column = 0, o.generated.line = r, o.generated.column = s - 1, this.map.addMapping(o)))
                        }
                    }))
                }
                isAnnotation() {
                    return !!this.isInline() || (void 0 !== this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((e => e.annotation)))
                }
                isInline() {
                    if (void 0 !== this.mapOpts.inline) return this.mapOpts.inline;
                    let e = this.mapOpts.annotation;
                    return (void 0 === e || !0 === e) && (!this.previous().length || this.previous().some((e => e.inline)))
                }
                isMap() {
                    return void 0 !== this.opts.map ? !!this.opts.map : this.previous().length > 0
                }
                isSourcesContent() {
                    return void 0 !== this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((e => e.withContent()))
                }
                outputFile() {
                    return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
                }
                path(e) {
                    if (this.mapOpts.absolute) return e;
                    if (60 === e.charCodeAt(0)) return e;
                    if (/^\w+:\/\//.test(e)) return e;
                    let t = this.memoizedPaths.get(e);
                    if (t) return t;
                    let r = this.opts.to ? st(this.opts.to) : ".";
                    "string" == typeof this.mapOpts.annotation && (r = st(ot(r, this.mapOpts.annotation)));
                    let s = nt(r, e);
                    return this.memoizedPaths.set(e, s), s
                }
                previous() {
                    if (!this.previousMaps)
                        if (this.previousMaps = [], this.root) this.root.walk((e => {
                            if (e.source && e.source.input.map) {
                                let t = e.source.input.map;
                                this.previousMaps.includes(t) || this.previousMaps.push(t)
                            }
                        }));
                        else {
                            let e = new lt(this.originalCSS, this.opts);
                            e.map && this.previousMaps.push(e.map)
                        } return this.previousMaps
                }
                setSourcesContent() {
                    let e = {};
                    if (this.root) this.root.walk((t => {
                        if (t.source) {
                            let r = t.source.input.from;
                            if (r && !e[r]) {
                                e[r] = !0;
                                let s = this.usesFileUrls ? this.toFileUrl(r) : this.toUrl(this.path(r));
                                this.map.setSourceContent(s, t.source.input.css)
                            }
                        }
                    }));
                    else if (this.css) {
                        let e = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
                        this.map.setSourceContent(e, this.css)
                    }
                }
                sourcePath(e) {
                    return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from))
                }
                toBase64(e) {
                    return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)))
                }
                toFileUrl(e) {
                    let t = this.memoizedFileURLs.get(e);
                    if (t) return t;
                    if (at) {
                        let t = at(e).toString();
                        return this.memoizedFileURLs.set(e, t), t
                    }
                    throw new Error("`map.absolute` option is not available in this PostCSS build")
                }
                toUrl(e) {
                    let t = this.memoizedURLs.get(e);
                    if (t) return t;
                    "\\" === it && (e = e.replace(/\\/g, "/"));
                    let r = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
                    return this.memoizedURLs.set(e, r), r
                }
            };
            let pt = Me,
                dt = class extends pt {
                    constructor(e) {
                        super(e), this.type = "comment"
                    }
                };
            var ft = dt;
            dt.default = dt;
            let mt, gt, yt, wt, {
                    isClean: bt,
                    my: St
                } = de,
                Ct = Ee,
                vt = ft,
                It = Me;

            function kt(e) {
                return e.map((e => (e.nodes && (e.nodes = kt(e.nodes)), delete e.source, e)))
            }

            function xt(e) {
                if (e[bt] = !1, e.proxyOf.nodes)
                    for (let t of e.proxyOf.nodes) xt(t)
            }
            let Ot = class e extends It {
                append(...e) {
                    for (let t of e) {
                        let e = this.normalize(t, this.last);
                        for (let t of e) this.proxyOf.nodes.push(t)
                    }
                    return this.markDirty(), this
                }
                cleanRaws(e) {
                    if (super.cleanRaws(e), this.nodes)
                        for (let t of this.nodes) t.cleanRaws(e)
                }
                each(e) {
                    if (!this.proxyOf.nodes) return;
                    let t, r, s = this.getIterator();
                    for (; this.indexes[s] < this.proxyOf.nodes.length && (t = this.indexes[s], r = e(this.proxyOf.nodes[t], t), !1 !== r);) this.indexes[s] += 1;
                    return delete this.indexes[s], r
                }
                every(e) {
                    return this.nodes.every(e)
                }
                getIterator() {
                    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
                    let e = this.lastEach;
                    return this.indexes[e] = 0, e
                }
                getProxyProcessor() {
                    return {
                        get: (e, t) => "proxyOf" === t ? e : e[t] ? "each" === t || "string" == typeof t && t.startsWith("walk") ? (...r) => e[t](...r.map((e => "function" == typeof e ? (t, r) => e(t.toProxy(), r) : e))) : "every" === t || "some" === t ? r => e[t](((e, ...t) => r(e.toProxy(), ...t))) : "root" === t ? () => e.root().toProxy() : "nodes" === t ? e.nodes.map((e => e.toProxy())) : "first" === t || "last" === t ? e[t].toProxy() : e[t] : e[t],
                        set: (e, t, r) => (e[t] === r || (e[t] = r, "name" !== t && "params" !== t && "selector" !== t || e.markDirty()), !0)
                    }
                }
                index(e) {
                    return "number" == typeof e ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e))
                }
                insertAfter(e, t) {
                    let r, s = this.index(e),
                        n = this.normalize(t, this.proxyOf.nodes[s]).reverse();
                    s = this.index(e);
                    for (let e of n) this.proxyOf.nodes.splice(s + 1, 0, e);
                    for (let e in this.indexes) r = this.indexes[e], s < r && (this.indexes[e] = r + n.length);
                    return this.markDirty(), this
                }
                insertBefore(e, t) {
                    let r, s = this.index(e),
                        n = 0 === s && "prepend",
                        o = this.normalize(t, this.proxyOf.nodes[s], n).reverse();
                    s = this.index(e);
                    for (let e of o) this.proxyOf.nodes.splice(s, 0, e);
                    for (let e in this.indexes) r = this.indexes[e], s <= r && (this.indexes[e] = r + o.length);
                    return this.markDirty(), this
                }
                normalize(t, r) {
                    if ("string" == typeof t) t = kt(mt(t).nodes);
                    else if (void 0 === t) t = [];
                    else if (Array.isArray(t)) {
                        t = t.slice(0);
                        for (let e of t) e.parent && e.parent.removeChild(e, "ignore")
                    } else if ("root" === t.type && "document" !== this.type) {
                        t = t.nodes.slice(0);
                        for (let e of t) e.parent && e.parent.removeChild(e, "ignore")
                    } else if (t.type) t = [t];
                    else if (t.prop) {
                        if (void 0 === t.value) throw new Error("Value field is missed in node creation");
                        "string" != typeof t.value && (t.value = String(t.value)), t = [new Ct(t)]
                    } else if (t.selector) t = [new gt(t)];
                    else if (t.name) t = [new yt(t)];
                    else {
                        if (!t.text) throw new Error("Unknown node type in node creation");
                        t = [new vt(t)]
                    }
                    return t.map((t => (t[St] || e.rebuild(t), (t = t.proxyOf).parent && t.parent.removeChild(t), t[bt] && xt(t), void 0 === t.raws.before && r && void 0 !== r.raws.before && (t.raws.before = r.raws.before.replace(/\S/g, "")), t.parent = this.proxyOf, t)))
                }
                prepend(...e) {
                    e = e.reverse();
                    for (let t of e) {
                        let e = this.normalize(t, this.first, "prepend").reverse();
                        for (let t of e) this.proxyOf.nodes.unshift(t);
                        for (let t in this.indexes) this.indexes[t] = this.indexes[t] + e.length
                    }
                    return this.markDirty(), this
                }
                push(e) {
                    return e.parent = this, this.proxyOf.nodes.push(e), this
                }
                removeAll() {
                    for (let e of this.proxyOf.nodes) e.parent = void 0;
                    return this.proxyOf.nodes = [], this.markDirty(), this
                }
                removeChild(e) {
                    let t;
                    e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
                    for (let r in this.indexes) t = this.indexes[r], t >= e && (this.indexes[r] = t - 1);
                    return this.markDirty(), this
                }
                replaceValues(e, t, r) {
                    return r || (r = t, t = {}), this.walkDecls((s => {
                        t.props && !t.props.includes(s.prop) || t.fast && !s.value.includes(t.fast) || (s.value = s.value.replace(e, r))
                    })), this.markDirty(), this
                }
                some(e) {
                    return this.nodes.some(e)
                }
                walk(e) {
                    return this.each(((t, r) => {
                        let s;
                        try {
                            s = e(t, r)
                        } catch (e) {
                            throw t.addToError(e)
                        }
                        return !1 !== s && t.walk && (s = t.walk(e)), s
                    }))
                }
                walkAtRules(e, t) {
                    return t ? e instanceof RegExp ? this.walk(((r, s) => {
                        if ("atrule" === r.type && e.test(r.name)) return t(r, s)
                    })) : this.walk(((r, s) => {
                        if ("atrule" === r.type && r.name === e) return t(r, s)
                    })) : (t = e, this.walk(((e, r) => {
                        if ("atrule" === e.type) return t(e, r)
                    })))
                }
                walkComments(e) {
                    return this.walk(((t, r) => {
                        if ("comment" === t.type) return e(t, r)
                    }))
                }
                walkDecls(e, t) {
                    return t ? e instanceof RegExp ? this.walk(((r, s) => {
                        if ("decl" === r.type && e.test(r.prop)) return t(r, s)
                    })) : this.walk(((r, s) => {
                        if ("decl" === r.type && r.prop === e) return t(r, s)
                    })) : (t = e, this.walk(((e, r) => {
                        if ("decl" === e.type) return t(e, r)
                    })))
                }
                walkRules(e, t) {
                    return t ? e instanceof RegExp ? this.walk(((r, s) => {
                        if ("rule" === r.type && e.test(r.selector)) return t(r, s)
                    })) : this.walk(((r, s) => {
                        if ("rule" === r.type && r.selector === e) return t(r, s)
                    })) : (t = e, this.walk(((e, r) => {
                        if ("rule" === e.type) return t(e, r)
                    })))
                }
                get first() {
                    if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
                }
                get last() {
                    if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
                }
            };
            Ot.registerParse = e => {
                mt = e
            }, Ot.registerRule = e => {
                gt = e
            }, Ot.registerAtRule = e => {
                yt = e
            }, Ot.registerRoot = e => {
                wt = e
            };
            var Mt = Ot;
            Ot.default = Ot, Ot.rebuild = e => {
                "atrule" === e.type ? Object.setPrototypeOf(e, yt.prototype) : "rule" === e.type ? Object.setPrototypeOf(e, gt.prototype) : "decl" === e.type ? Object.setPrototypeOf(e, Ct.prototype) : "comment" === e.type ? Object.setPrototypeOf(e, vt.prototype) : "root" === e.type && Object.setPrototypeOf(e, wt.prototype), e[St] = !0, e.nodes && e.nodes.forEach((e => {
                    Ot.rebuild(e)
                }))
            };
            let At, Rt, Et = Mt,
                Tt = class extends Et {
                    constructor(e) {
                        super({
                            type: "document",
                            ...e
                        }), this.nodes || (this.nodes = [])
                    }
                    toResult(e = {}) {
                        return new At(new Rt, this, e).stringify()
                    }
                };
            Tt.registerLazyResult = e => {
                At = e
            }, Tt.registerProcessor = e => {
                Rt = e
            };
            var Nt = Tt;
            Tt.default = Tt;
            let Lt = class {
                constructor(e, t = {}) {
                    if (this.type = "warning", this.text = e, t.node && t.node.source) {
                        let e = t.node.rangeBy(t);
                        this.line = e.start.line, this.column = e.start.column, this.endLine = e.end.line, this.endColumn = e.end.column
                    }
                    for (let e in t) this[e] = t[e]
                }
                toString() {
                    return this.node ? this.node.error(this.text, {
                        index: this.index,
                        plugin: this.plugin,
                        word: this.word
                    }).message : this.plugin ? this.plugin + ": " + this.text : this.text
                }
            };
            var Dt = Lt;
            Lt.default = Lt;
            let Pt = Dt,
                Ft = class {
                    constructor(e, t, r) {
                        this.processor = e, this.messages = [], this.root = t, this.opts = r, this.css = void 0, this.map = void 0
                    }
                    toString() {
                        return this.css
                    }
                    warn(e, t = {}) {
                        t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
                        let r = new Pt(e, t);
                        return this.messages.push(r), r
                    }
                    warnings() {
                        return this.messages.filter((e => "warning" === e.type))
                    }
                    get content() {
                        return this.css
                    }
                };
            var Bt = Ft;
            Ft.default = Ft;
            const _t = "'".charCodeAt(0),
                Ut = '"'.charCodeAt(0),
                zt = "\\".charCodeAt(0),
                jt = "/".charCodeAt(0),
                Wt = "\n".charCodeAt(0),
                Vt = " ".charCodeAt(0),
                Gt = "\f".charCodeAt(0),
                Zt = "\t".charCodeAt(0),
                Yt = "\r".charCodeAt(0),
                Jt = "[".charCodeAt(0),
                Xt = "]".charCodeAt(0),
                Ht = "(".charCodeAt(0),
                Kt = ")".charCodeAt(0),
                $t = "{".charCodeAt(0),
                Qt = "}".charCodeAt(0),
                qt = ";".charCodeAt(0),
                er = "*".charCodeAt(0),
                tr = ":".charCodeAt(0),
                rr = "@".charCodeAt(0),
                sr = /[\t\n\f\r "#'()/;[\\\]{}]/g,
                nr = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
                or = /.[\r\n"'(/\\]/,
                ir = /[\da-f]/i;
            let ar = Mt,
                lr = class extends ar {
                    constructor(e) {
                        super(e), this.type = "atrule"
                    }
                    append(...e) {
                        return this.proxyOf.nodes || (this.nodes = []), super.append(...e)
                    }
                    prepend(...e) {
                        return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e)
                    }
                };
            var cr = lr;
            lr.default = lr, ar.registerAtRule(lr);
            let hr, ur, pr = Mt,
                dr = class extends pr {
                    constructor(e) {
                        super(e), this.type = "root", this.nodes || (this.nodes = [])
                    }
                    normalize(e, t, r) {
                        let s = super.normalize(e);
                        if (t)
                            if ("prepend" === r) this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;
                            else if (this.first !== t)
                            for (let e of s) e.raws.before = t.raws.before;
                        return s
                    }
                    removeChild(e, t) {
                        let r = this.index(e);
                        return !t && 0 === r && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[r].raws.before), super.removeChild(e)
                    }
                    toResult(e = {}) {
                        return new hr(new ur, this, e).stringify()
                    }
                };
            dr.registerLazyResult = e => {
                hr = e
            }, dr.registerProcessor = e => {
                ur = e
            };
            var fr = dr;
            dr.default = dr, pr.registerRoot(dr);
            let mr = {
                comma: e => mr.split(e, [","], !0),
                space: e => mr.split(e, [" ", "\n", "\t"]),
                split(e, t, r) {
                    let s = [],
                        n = "",
                        o = !1,
                        i = 0,
                        a = !1,
                        l = "",
                        c = !1;
                    for (let r of e) c ? c = !1 : "\\" === r ? c = !0 : a ? r === l && (a = !1) : '"' === r || "'" === r ? (a = !0, l = r) : "(" === r ? i += 1 : ")" === r ? i > 0 && (i -= 1) : 0 === i && t.includes(r) && (o = !0), o ? ("" !== n && s.push(n.trim()), n = "", o = !1) : n += r;
                    return (r || "" !== n) && s.push(n.trim()), s
                }
            };
            var gr = mr;
            mr.default = mr;
            let yr = Mt,
                wr = gr,
                br = class extends yr {
                    constructor(e) {
                        super(e), this.type = "rule", this.nodes || (this.nodes = [])
                    }
                    get selectors() {
                        return wr.comma(this.selector)
                    }
                    set selectors(e) {
                        let t = this.selector ? this.selector.match(/,\s*/) : null,
                            r = t ? t[0] : "," + this.raw("between", "beforeOpen");
                        this.selector = e.join(r)
                    }
                };
            var Sr = br;
            br.default = br, yr.registerRule(br);
            let Cr = Ee,
                vr = function(e, t = {}) {
                    let r, s, n, o, i, a, l, c, h, u, p = e.css.valueOf(),
                        d = t.ignoreErrors,
                        f = p.length,
                        m = 0,
                        g = [],
                        y = [];

                    function w(t) {
                        throw e.error("Unclosed " + t, m)
                    }
                    return {
                        back: function(e) {
                            y.push(e)
                        },
                        endOfFile: function() {
                            return 0 === y.length && m >= f
                        },
                        nextToken: function(e) {
                            if (y.length) return y.pop();
                            if (m >= f) return;
                            let t = !!e && e.ignoreUnclosed;
                            switch (r = p.charCodeAt(m), r) {
                                case Wt:
                                case Vt:
                                case Zt:
                                case Yt:
                                case Gt:
                                    s = m;
                                    do {
                                        s += 1, r = p.charCodeAt(s)
                                    } while (r === Vt || r === Wt || r === Zt || r === Yt || r === Gt);
                                    u = ["space", p.slice(m, s)], m = s - 1;
                                    break;
                                case Jt:
                                case Xt:
                                case $t:
                                case Qt:
                                case tr:
                                case qt:
                                case Kt: {
                                    let e = String.fromCharCode(r);
                                    u = [e, e, m];
                                    break
                                }
                                case Ht:
                                    if (c = g.length ? g.pop()[1] : "", h = p.charCodeAt(m + 1), "url" === c && h !== _t && h !== Ut && h !== Vt && h !== Wt && h !== Zt && h !== Gt && h !== Yt) {
                                        s = m;
                                        do {
                                            if (a = !1, s = p.indexOf(")", s + 1), -1 === s) {
                                                if (d || t) {
                                                    s = m;
                                                    break
                                                }
                                                w("bracket")
                                            }
                                            for (l = s; p.charCodeAt(l - 1) === zt;) l -= 1, a = !a
                                        } while (a);
                                        u = ["brackets", p.slice(m, s + 1), m, s], m = s
                                    } else s = p.indexOf(")", m + 1), o = p.slice(m, s + 1), -1 === s || or.test(o) ? u = ["(", "(", m] : (u = ["brackets", o, m, s], m = s);
                                    break;
                                case _t:
                                case Ut:
                                    n = r === _t ? "'" : '"', s = m;
                                    do {
                                        if (a = !1, s = p.indexOf(n, s + 1), -1 === s) {
                                            if (d || t) {
                                                s = m + 1;
                                                break
                                            }
                                            w("string")
                                        }
                                        for (l = s; p.charCodeAt(l - 1) === zt;) l -= 1, a = !a
                                    } while (a);
                                    u = ["string", p.slice(m, s + 1), m, s], m = s;
                                    break;
                                case rr:
                                    sr.lastIndex = m + 1, sr.test(p), s = 0 === sr.lastIndex ? p.length - 1 : sr.lastIndex - 2, u = ["at-word", p.slice(m, s + 1), m, s], m = s;
                                    break;
                                case zt:
                                    for (s = m, i = !0; p.charCodeAt(s + 1) === zt;) s += 1, i = !i;
                                    if (r = p.charCodeAt(s + 1), i && r !== jt && r !== Vt && r !== Wt && r !== Zt && r !== Yt && r !== Gt && (s += 1, ir.test(p.charAt(s)))) {
                                        for (; ir.test(p.charAt(s + 1));) s += 1;
                                        p.charCodeAt(s + 1) === Vt && (s += 1)
                                    }
                                    u = ["word", p.slice(m, s + 1), m, s], m = s;
                                    break;
                                default:
                                    r === jt && p.charCodeAt(m + 1) === er ? (s = p.indexOf("*/", m + 2) + 1, 0 === s && (d || t ? s = p.length : w("comment")), u = ["comment", p.slice(m, s + 1), m, s], m = s) : (nr.lastIndex = m + 1, nr.test(p), s = 0 === nr.lastIndex ? p.length - 1 : nr.lastIndex - 2, u = ["word", p.slice(m, s + 1), m, s], g.push(u), m = s)
                            }
                            return m++, u
                        },
                        position: function() {
                            return m
                        }
                    }
                },
                Ir = ft,
                kr = cr,
                xr = fr,
                Or = Sr;
            const Mr = {
                empty: !0,
                space: !0
            };
            let Ar = Mt,
                Rr = class {
                    constructor(e) {
                        this.input = e, this.root = new xr, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
                            input: e,
                            start: {
                                column: 1,
                                line: 1,
                                offset: 0
                            }
                        }
                    }
                    atrule(e) {
                        let t, r, s, n = new kr;
                        n.name = e[1].slice(1), "" === n.name && this.unnamedAtrule(n, e), this.init(n, e[2]);
                        let o = !1,
                            i = !1,
                            a = [],
                            l = [];
                        for (; !this.tokenizer.endOfFile();) {
                            if (t = (e = this.tokenizer.nextToken())[0], "(" === t || "[" === t ? l.push("(" === t ? ")" : "]") : "{" === t && l.length > 0 ? l.push("}") : t === l[l.length - 1] && l.pop(), 0 === l.length) {
                                if (";" === t) {
                                    n.source.end = this.getPosition(e[2]), n.source.end.offset++, this.semicolon = !0;
                                    break
                                }
                                if ("{" === t) {
                                    i = !0;
                                    break
                                }
                                if ("}" === t) {
                                    if (a.length > 0) {
                                        for (s = a.length - 1, r = a[s]; r && "space" === r[0];) r = a[--s];
                                        r && (n.source.end = this.getPosition(r[3] || r[2]), n.source.end.offset++)
                                    }
                                    this.end(e);
                                    break
                                }
                                a.push(e)
                            } else a.push(e);
                            if (this.tokenizer.endOfFile()) {
                                o = !0;
                                break
                            }
                        }
                        n.raws.between = this.spacesAndCommentsFromEnd(a), a.length ? (n.raws.afterName = this.spacesAndCommentsFromStart(a), this.raw(n, "params", a), o && (e = a[a.length - 1], n.source.end = this.getPosition(e[3] || e[2]), n.source.end.offset++, this.spaces = n.raws.between, n.raws.between = "")) : (n.raws.afterName = "", n.params = ""), i && (n.nodes = [], this.current = n)
                    }
                    checkMissedSemicolon(e) {
                        let t = this.colon(e);
                        if (!1 === t) return;
                        let r, s = 0;
                        for (let n = t - 1; n >= 0 && (r = e[n], "space" === r[0] || (s += 1, 2 !== s)); n--);
                        throw this.input.error("Missed semicolon", "word" === r[0] ? r[3] + 1 : r[2])
                    }
                    colon(e) {
                        let t, r, s, n = 0;
                        for (let [o, i] of e.entries()) {
                            if (t = i, r = t[0], "(" === r && (n += 1), ")" === r && (n -= 1), 0 === n && ":" === r) {
                                if (s) {
                                    if ("word" === s[0] && "progid" === s[1]) continue;
                                    return o
                                }
                                this.doubleColon(t)
                            }
                            s = t
                        }
                        return !1
                    }
                    comment(e) {
                        let t = new Ir;
                        this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++;
                        let r = e[1].slice(2, -2);
                        if (/^\s*$/.test(r)) t.text = "", t.raws.left = r, t.raws.right = "";
                        else {
                            let e = r.match(/^(\s*)([^]*\S)(\s*)$/);
                            t.text = e[2], t.raws.left = e[1], t.raws.right = e[3]
                        }
                    }
                    createTokenizer() {
                        this.tokenizer = vr(this.input)
                    }
                    decl(e, t) {
                        let r = new Cr;
                        this.init(r, e[0][2]);
                        let s, n = e[e.length - 1];
                        for (";" === n[0] && (this.semicolon = !0, e.pop()), r.source.end = this.getPosition(n[3] || n[2] || function(e) {
                                for (let t = e.length - 1; t >= 0; t--) {
                                    let r = e[t],
                                        s = r[3] || r[2];
                                    if (s) return s
                                }
                            }(e)), r.source.end.offset++;
                            "word" !== e[0][0];) 1 === e.length && this.unknownWord(e), r.raws.before += e.shift()[1];
                        for (r.source.start = this.getPosition(e[0][2]), r.prop = ""; e.length;) {
                            let t = e[0][0];
                            if (":" === t || "space" === t || "comment" === t) break;
                            r.prop += e.shift()[1]
                        }
                        for (r.raws.between = ""; e.length;) {
                            if (s = e.shift(), ":" === s[0]) {
                                r.raws.between += s[1];
                                break
                            }
                            "word" === s[0] && /\w/.test(s[1]) && this.unknownWord([s]), r.raws.between += s[1]
                        }
                        "_" !== r.prop[0] && "*" !== r.prop[0] || (r.raws.before += r.prop[0], r.prop = r.prop.slice(1));
                        let o, i = [];
                        for (; e.length && (o = e[0][0], "space" === o || "comment" === o);) i.push(e.shift());
                        this.precheckMissedSemicolon(e);
                        for (let t = e.length - 1; t >= 0; t--) {
                            if (s = e[t], "!important" === s[1].toLowerCase()) {
                                r.important = !0;
                                let s = this.stringFrom(e, t);
                                s = this.spacesFromEnd(e) + s, " !important" !== s && (r.raws.important = s);
                                break
                            }
                            if ("important" === s[1].toLowerCase()) {
                                let s = e.slice(0),
                                    n = "";
                                for (let e = t; e > 0; e--) {
                                    let t = s[e][0];
                                    if (0 === n.trim().indexOf("!") && "space" !== t) break;
                                    n = s.pop()[1] + n
                                }
                                0 === n.trim().indexOf("!") && (r.important = !0, r.raws.important = n, e = s)
                            }
                            if ("space" !== s[0] && "comment" !== s[0]) break
                        }
                        e.some((e => "space" !== e[0] && "comment" !== e[0])) && (r.raws.between += i.map((e => e[1])).join(""), i = []), this.raw(r, "value", i.concat(e), t), r.value.includes(":") && !t && this.checkMissedSemicolon(e)
                    }
                    doubleColon(e) {
                        throw this.input.error("Double colon", {
                            offset: e[2]
                        }, {
                            offset: e[2] + e[1].length
                        })
                    }
                    emptyRule(e) {
                        let t = new Or;
                        this.init(t, e[2]), t.selector = "", t.raws.between = "", this.current = t
                    }
                    end(e) {
                        this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e)
                    }
                    endFile() {
                        this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position())
                    }
                    freeSemicolon(e) {
                        if (this.spaces += e[1], this.current.nodes) {
                            let e = this.current.nodes[this.current.nodes.length - 1];
                            e && "rule" === e.type && !e.raws.ownSemicolon && (e.raws.ownSemicolon = this.spaces, this.spaces = "")
                        }
                    }
                    getPosition(e) {
                        let t = this.input.fromOffset(e);
                        return {
                            column: t.col,
                            line: t.line,
                            offset: e
                        }
                    }
                    init(e, t) {
                        this.current.push(e), e.source = {
                            input: this.input,
                            start: this.getPosition(t)
                        }, e.raws.before = this.spaces, this.spaces = "", "comment" !== e.type && (this.semicolon = !1)
                    }
                    other(e) {
                        let t = !1,
                            r = null,
                            s = !1,
                            n = null,
                            o = [],
                            i = e[1].startsWith("--"),
                            a = [],
                            l = e;
                        for (; l;) {
                            if (r = l[0], a.push(l), "(" === r || "[" === r) n || (n = l), o.push("(" === r ? ")" : "]");
                            else if (i && s && "{" === r) n || (n = l), o.push("}");
                            else if (0 === o.length) {
                                if (";" === r) {
                                    if (s) return void this.decl(a, i);
                                    break
                                }
                                if ("{" === r) return void this.rule(a);
                                if ("}" === r) {
                                    this.tokenizer.back(a.pop()), t = !0;
                                    break
                                }
                                ":" === r && (s = !0)
                            } else r === o[o.length - 1] && (o.pop(), 0 === o.length && (n = null));
                            l = this.tokenizer.nextToken()
                        }
                        if (this.tokenizer.endOfFile() && (t = !0), o.length > 0 && this.unclosedBracket(n), t && s) {
                            if (!i)
                                for (; a.length && (l = a[a.length - 1][0], "space" === l || "comment" === l);) this.tokenizer.back(a.pop());
                            this.decl(a, i)
                        } else this.unknownWord(a)
                    }
                    parse() {
                        let e;
                        for (; !this.tokenizer.endOfFile();) switch (e = this.tokenizer.nextToken(), e[0]) {
                            case "space":
                                this.spaces += e[1];
                                break;
                            case ";":
                                this.freeSemicolon(e);
                                break;
                            case "}":
                                this.end(e);
                                break;
                            case "comment":
                                this.comment(e);
                                break;
                            case "at-word":
                                this.atrule(e);
                                break;
                            case "{":
                                this.emptyRule(e);
                                break;
                            default:
                                this.other(e)
                        }
                        this.endFile()
                    }
                    precheckMissedSemicolon() {}
                    raw(e, t, r, s) {
                        let n, o, i, a, l = r.length,
                            c = "",
                            h = !0;
                        for (let e = 0; e < l; e += 1) n = r[e], o = n[0], "space" !== o || e !== l - 1 || s ? "comment" === o ? (a = r[e - 1] ? r[e - 1][0] : "empty", i = r[e + 1] ? r[e + 1][0] : "empty", Mr[a] || Mr[i] || "," === c.slice(-1) ? h = !1 : c += n[1]) : c += n[1] : h = !1;
                        if (!h) {
                            let s = r.reduce(((e, t) => e + t[1]), "");
                            e.raws[t] = {
                                raw: s,
                                value: c
                            }
                        }
                        e[t] = c
                    }
                    rule(e) {
                        e.pop();
                        let t = new Or;
                        this.init(t, e[0][2]), t.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(t, "selector", e), this.current = t
                    }
                    spacesAndCommentsFromEnd(e) {
                        let t, r = "";
                        for (; e.length && (t = e[e.length - 1][0], "space" === t || "comment" === t);) r = e.pop()[1] + r;
                        return r
                    }
                    spacesAndCommentsFromStart(e) {
                        let t, r = "";
                        for (; e.length && (t = e[0][0], "space" === t || "comment" === t);) r += e.shift()[1];
                        return r
                    }
                    spacesFromEnd(e) {
                        let t, r = "";
                        for (; e.length && (t = e[e.length - 1][0], "space" === t);) r = e.pop()[1] + r;
                        return r
                    }
                    stringFrom(e, t) {
                        let r = "";
                        for (let s = t; s < e.length; s++) r += e[s][1];
                        return e.splice(t, e.length - t), r
                    }
                    unclosedBlock() {
                        let e = this.current.source.start;
                        throw this.input.error("Unclosed block", e.line, e.column)
                    }
                    unclosedBracket(e) {
                        throw this.input.error("Unclosed bracket", {
                            offset: e[2]
                        }, {
                            offset: e[2] + 1
                        })
                    }
                    unexpectedClose(e) {
                        throw this.input.error("Unexpected }", {
                            offset: e[2]
                        }, {
                            offset: e[2] + 1
                        })
                    }
                    unknownWord(e) {
                        throw this.input.error("Unknown word", {
                            offset: e[0][2]
                        }, {
                            offset: e[0][2] + e[0][1].length
                        })
                    }
                    unnamedAtrule(e, t) {
                        throw this.input.error("At-rule without name", {
                            offset: t[2]
                        }, {
                            offset: t[2] + t[1].length
                        })
                    }
                },
                Er = et;

            function Tr(e, t) {
                let r = new Er(e, t),
                    s = new Rr(r);
                try {
                    s.parse()
                } catch (e) {
                    throw e
                }
                return s.root
            }
            var Nr = Tr;
            Tr.default = Tr, Ar.registerParse(Tr);
            let {
                isClean: Lr,
                my: Dr
            } = de, Pr = ut, Fr = be, Br = Mt, _r = Nt, Ur = Bt, zr = Nr, jr = fr;
            const Wr = {
                    atrule: "AtRule",
                    comment: "Comment",
                    decl: "Declaration",
                    document: "Document",
                    root: "Root",
                    rule: "Rule"
                },
                Vr = {
                    AtRule: !0,
                    AtRuleExit: !0,
                    Comment: !0,
                    CommentExit: !0,
                    Declaration: !0,
                    DeclarationExit: !0,
                    Document: !0,
                    DocumentExit: !0,
                    Once: !0,
                    OnceExit: !0,
                    postcssPlugin: !0,
                    prepare: !0,
                    Root: !0,
                    RootExit: !0,
                    Rule: !0,
                    RuleExit: !0
                },
                Gr = {
                    Once: !0,
                    postcssPlugin: !0,
                    prepare: !0
                },
                Zr = 0;

            function Yr(e) {
                return "object" == typeof e && "function" == typeof e.then
            }

            function Jr(e) {
                let t = !1,
                    r = Wr[e.type];
                return "decl" === e.type ? t = e.prop.toLowerCase() : "atrule" === e.type && (t = e.name.toLowerCase()), t && e.append ? [r, r + "-" + t, Zr, r + "Exit", r + "Exit-" + t] : t ? [r, r + "-" + t, r + "Exit", r + "Exit-" + t] : e.append ? [r, Zr, r + "Exit"] : [r, r + "Exit"]
            }

            function Xr(e) {
                let t;
                return t = "document" === e.type ? ["Document", Zr, "DocumentExit"] : "root" === e.type ? ["Root", Zr, "RootExit"] : Jr(e), {
                    eventIndex: 0,
                    events: t,
                    iterator: 0,
                    node: e,
                    visitorIndex: 0,
                    visitors: []
                }
            }

            function Hr(e) {
                return e[Lr] = !1, e.nodes && e.nodes.forEach((e => Hr(e))), e
            }
            let Kr = {},
                $r = class e {
                    constructor(t, r, s) {
                        let n;
                        if (this.stringified = !1, this.processed = !1, "object" != typeof r || null === r || "root" !== r.type && "document" !== r.type)
                            if (r instanceof e || r instanceof Ur) n = Hr(r.root), r.map && (void 0 === s.map && (s.map = {}), s.map.inline || (s.map.inline = !1), s.map.prev = r.map);
                            else {
                                let e = zr;
                                s.syntax && (e = s.syntax.parse), s.parser && (e = s.parser), e.parse && (e = e.parse);
                                try {
                                    n = e(r, s)
                                } catch (e) {
                                    this.processed = !0, this.error = e
                                }
                                n && !n[Dr] && Br.rebuild(n)
                            }
                        else n = Hr(r);
                        this.result = new Ur(t, n, s), this.helpers = {
                            ...Kr,
                            postcss: Kr,
                            result: this.result
                        }, this.plugins = this.processor.plugins.map((e => "object" == typeof e && e.prepare ? {
                            ...e,
                            ...e.prepare(this.result)
                        } : e))
                    }
                    async () {
                        return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
                    } catch (e) {
                        return this.async().catch(e)
                    } finally(e) {
                        return this.async().then(e, e)
                    }
                    getAsyncError() {
                        throw new Error("Use process(css).then(cb) to work with async plugins")
                    }
                    handleError(e, t) {
                        let r = this.result.lastPlugin;
                        try {
                            t && t.addToError(e), this.error = e, "CssSyntaxError" !== e.name || e.plugin ? r.postcssVersion : (e.plugin = r.postcssPlugin, e.setMessage())
                        } catch (e) {
                            console && console.error && console.error(e)
                        }
                        return e
                    }
                    prepareVisitors() {
                        this.listeners = {};
                        let e = (e, t, r) => {
                            this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push([e, r])
                        };
                        for (let t of this.plugins)
                            if ("object" == typeof t)
                                for (let r in t) {
                                    if (!Vr[r] && /^[A-Z]/.test(r)) throw new Error(`Unknown event ${r} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                                    if (!Gr[r])
                                        if ("object" == typeof t[r])
                                            for (let s in t[r]) e(t, "*" === s ? r : r + "-" + s.toLowerCase(), t[r][s]);
                                        else "function" == typeof t[r] && e(t, r, t[r])
                                }
                        this.hasListener = Object.keys(this.listeners).length > 0
                    }
                    async runAsync() {
                        this.plugin = 0;
                        for (let e = 0; e < this.plugins.length; e++) {
                            let t = this.plugins[e],
                                r = this.runOnRoot(t);
                            if (Yr(r)) try {
                                await r
                            } catch (e) {
                                throw this.handleError(e)
                            }
                        }
                        if (this.prepareVisitors(), this.hasListener) {
                            let e = this.result.root;
                            for (; !e[Lr];) {
                                e[Lr] = !0;
                                let t = [Xr(e)];
                                for (; t.length > 0;) {
                                    let e = this.visitTick(t);
                                    if (Yr(e)) try {
                                        await e
                                    } catch (e) {
                                        let r = t[t.length - 1].node;
                                        throw this.handleError(e, r)
                                    }
                                }
                            }
                            if (this.listeners.OnceExit)
                                for (let [t, r] of this.listeners.OnceExit) {
                                    this.result.lastPlugin = t;
                                    try {
                                        if ("document" === e.type) {
                                            let t = e.nodes.map((e => r(e, this.helpers)));
                                            await Promise.all(t)
                                        } else await r(e, this.helpers)
                                    } catch (e) {
                                        throw this.handleError(e)
                                    }
                                }
                        }
                        return this.processed = !0, this.stringify()
                    }
                    runOnRoot(e) {
                        this.result.lastPlugin = e;
                        try {
                            if ("object" == typeof e && e.Once) {
                                if ("document" === this.result.root.type) {
                                    let t = this.result.root.nodes.map((t => e.Once(t, this.helpers)));
                                    return Yr(t[0]) ? Promise.all(t) : t
                                }
                                return e.Once(this.result.root, this.helpers)
                            }
                            if ("function" == typeof e) return e(this.result.root, this.result)
                        } catch (e) {
                            throw this.handleError(e)
                        }
                    }
                    stringify() {
                        if (this.error) throw this.error;
                        if (this.stringified) return this.result;
                        this.stringified = !0, this.sync();
                        let e = this.result.opts,
                            t = Fr;
                        e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
                        let r = new Pr(t, this.result.root, this.result.opts).generate();
                        return this.result.css = r[0], this.result.map = r[1], this.result
                    }
                    sync() {
                        if (this.error) throw this.error;
                        if (this.processed) return this.result;
                        if (this.processed = !0, this.processing) throw this.getAsyncError();
                        for (let e of this.plugins) {
                            if (Yr(this.runOnRoot(e))) throw this.getAsyncError()
                        }
                        if (this.prepareVisitors(), this.hasListener) {
                            let e = this.result.root;
                            for (; !e[Lr];) e[Lr] = !0, this.walkSync(e);
                            if (this.listeners.OnceExit)
                                if ("document" === e.type)
                                    for (let t of e.nodes) this.visitSync(this.listeners.OnceExit, t);
                                else this.visitSync(this.listeners.OnceExit, e)
                        }
                        return this.result
                    }
                    then(e, t) {
                        return this.async().then(e, t)
                    }
                    toString() {
                        return this.css
                    }
                    visitSync(e, t) {
                        for (let [r, s] of e) {
                            let e;
                            this.result.lastPlugin = r;
                            try {
                                e = s(t, this.helpers)
                            } catch (e) {
                                throw this.handleError(e, t.proxyOf)
                            }
                            if ("root" !== t.type && "document" !== t.type && !t.parent) return !0;
                            if (Yr(e)) throw this.getAsyncError()
                        }
                    }
                    visitTick(e) {
                        let t = e[e.length - 1],
                            {
                                node: r,
                                visitors: s
                            } = t;
                        if ("root" !== r.type && "document" !== r.type && !r.parent) return void e.pop();
                        if (s.length > 0 && t.visitorIndex < s.length) {
                            let [e, n] = s[t.visitorIndex];
                            t.visitorIndex += 1, t.visitorIndex === s.length && (t.visitors = [], t.visitorIndex = 0), this.result.lastPlugin = e;
                            try {
                                return n(r.toProxy(), this.helpers)
                            } catch (e) {
                                throw this.handleError(e, r)
                            }
                        }
                        if (0 !== t.iterator) {
                            let s, n = t.iterator;
                            for (; s = r.nodes[r.indexes[n]];)
                                if (r.indexes[n] += 1, !s[Lr]) return s[Lr] = !0, void e.push(Xr(s));
                            t.iterator = 0, delete r.indexes[n]
                        }
                        let n = t.events;
                        for (; t.eventIndex < n.length;) {
                            let e = n[t.eventIndex];
                            if (t.eventIndex += 1, e === Zr) return void(r.nodes && r.nodes.length && (r[Lr] = !0, t.iterator = r.getIterator()));
                            if (this.listeners[e]) return void(t.visitors = this.listeners[e])
                        }
                        e.pop()
                    }
                    walkSync(e) {
                        e[Lr] = !0;
                        let t = Jr(e);
                        for (let r of t)
                            if (r === Zr) e.nodes && e.each((e => {
                                e[Lr] || this.walkSync(e)
                            }));
                            else {
                                let t = this.listeners[r];
                                if (t && this.visitSync(t, e.toProxy())) return
                            }
                    }
                    warnings() {
                        return this.sync().warnings()
                    }
                    get content() {
                        return this.stringify().content
                    }
                    get css() {
                        return this.stringify().css
                    }
                    get map() {
                        return this.stringify().map
                    }
                    get messages() {
                        return this.sync().messages
                    }
                    get opts() {
                        return this.result.opts
                    }
                    get processor() {
                        return this.result.processor
                    }
                    get root() {
                        return this.sync().root
                    }
                    get[Symbol.toStringTag]() {
                        return "LazyResult"
                    }
                };
            $r.registerPostcss = e => {
                Kr = e
            };
            var Qr = $r;
            $r.default = $r, jr.registerLazyResult($r), _r.registerLazyResult($r);
            let qr = ut,
                es = be,
                ts = Nr;
            const rs = Bt;
            let ss = class {
                constructor(e, t, r) {
                    let s;
                    t = t.toString(), this.stringified = !1, this._processor = e, this._css = t, this._opts = r, this._map = void 0;
                    let n = es;
                    this.result = new rs(this._processor, s, this._opts), this.result.css = t;
                    let o = this;
                    Object.defineProperty(this.result, "root", {
                        get: () => o.root
                    });
                    let i = new qr(n, s, this._opts, t);
                    if (i.isMap()) {
                        let [e, t] = i.generate();
                        e && (this.result.css = e), t && (this.result.map = t)
                    } else i.clearAnnotation(), this.result.css = i.css
                }
                async () {
                    return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
                } catch (e) {
                    return this.async().catch(e)
                } finally(e) {
                    return this.async().then(e, e)
                }
                sync() {
                    if (this.error) throw this.error;
                    return this.result
                }
                then(e, t) {
                    return this.async().then(e, t)
                }
                toString() {
                    return this._css
                }
                warnings() {
                    return []
                }
                get content() {
                    return this.result.css
                }
                get css() {
                    return this.result.css
                }
                get map() {
                    return this.result.map
                }
                get messages() {
                    return []
                }
                get opts() {
                    return this.result.opts
                }
                get processor() {
                    return this.result.processor
                }
                get root() {
                    if (this._root) return this._root;
                    let e, t = ts;
                    try {
                        e = t(this._css, this._opts)
                    } catch (e) {
                        this.error = e
                    }
                    if (this.error) throw this.error;
                    return this._root = e, e
                }
                get[Symbol.toStringTag]() {
                    return "NoWorkResult"
                }
            };
            var ns = ss;
            ss.default = ss;
            let os = ns,
                is = Qr,
                as = Nt,
                ls = fr,
                cs = class {
                    constructor(e = []) {
                        this.version = "8.4.38", this.plugins = this.normalize(e)
                    }
                    normalize(e) {
                        let t = [];
                        for (let r of e)
                            if (!0 === r.postcss ? r = r() : r.postcss && (r = r.postcss), "object" == typeof r && Array.isArray(r.plugins)) t = t.concat(r.plugins);
                            else if ("object" == typeof r && r.postcssPlugin) t.push(r);
                        else if ("function" == typeof r) t.push(r);
                        else {
                            if ("object" != typeof r || !r.parse && !r.stringify) throw new Error(r + " is not a PostCSS plugin")
                        }
                        return t
                    }
                    process(e, t = {}) {
                        return this.plugins.length || t.parser || t.stringifier || t.syntax ? new is(this, e, t) : new os(this, e, t)
                    }
                    use(e) {
                        return this.plugins = this.plugins.concat(this.normalize([e])), this
                    }
                };
            var hs = cs;
            cs.default = cs, ls.registerProcessor(cs), as.registerProcessor(cs);
            let us = Ee,
                ps = Ue,
                ds = ft,
                fs = cr,
                ms = et,
                gs = fr,
                ys = Sr;

            function ws(e, t) {
                if (Array.isArray(e)) return e.map((e => ws(e)));
                let {
                    inputs: r,
                    ...s
                } = e;
                if (r) {
                    t = [];
                    for (let e of r) {
                        let r = {
                            ...e,
                            __proto__: ms.prototype
                        };
                        r.map && (r.map = {
                            ...r.map,
                            __proto__: ps.prototype
                        }), t.push(r)
                    }
                }
                if (s.nodes && (s.nodes = e.nodes.map((e => ws(e, t)))), s.source) {
                    let {
                        inputId: e,
                        ...r
                    } = s.source;
                    s.source = r, null != e && (s.source.input = t[e])
                }
                if ("root" === s.type) return new gs(s);
                if ("decl" === s.type) return new us(s);
                if ("rule" === s.type) return new ys(s);
                if ("comment" === s.type) return new ds(s);
                if ("atrule" === s.type) return new fs(s);
                throw new Error("Unknown node type: " + e.type)
            }
            var bs = ws;
            ws.default = ws;
            let Ss = pe,
                Cs = Ee,
                vs = Qr,
                Is = Mt,
                ks = hs,
                xs = be,
                Os = bs,
                Ms = Nt,
                As = Dt,
                Rs = ft,
                Es = cr,
                Ts = Bt,
                Ns = et,
                Ls = Nr,
                Ds = gr,
                Ps = Sr,
                Fs = fr,
                Bs = Me;

            function _s(...e) {
                return 1 === e.length && Array.isArray(e[0]) && (e = e[0]), new ks(e)
            }
            _s.plugin = function(e, t) {
                let r, s = !1;

                function n(...r) {
                    console && console.warn && !s && (s = !0, console.warn(e + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), "MISSING_ENV_VAR".LANG && "MISSING_ENV_VAR".LANG.startsWith("cn") && console.warn(e + ": 里面 postcss.plugin 被弃用. 迁移指南:\nhttps://www.w3ctech.com/topic/2226"));
                    let n = t(...r);
                    return n.postcssPlugin = e, n.postcssVersion = (new ks).version, n
                }
                return Object.defineProperty(n, "postcss", {
                    get: () => (r || (r = n()), r)
                }), n.process = function(e, t, r) {
                    return _s([n(r)]).process(e, t)
                }, n
            }, _s.stringify = xs, _s.parse = Ls, _s.fromJSON = Os, _s.list = Ds, _s.comment = e => new Rs(e), _s.atRule = e => new Es(e), _s.decl = e => new Cs(e), _s.rule = e => new Ps(e), _s.root = e => new Fs(e), _s.document = e => new Ms(e), _s.CssSyntaxError = Ss, _s.Declaration = Cs, _s.Container = Is, _s.Processor = ks, _s.Document = Ms, _s.Comment = Rs, _s.Warning = As, _s.AtRule = Es, _s.Result = Ts, _s.Input = Ns, _s.Rule = Ps, _s.Root = Fs, _s.Node = Bs, vs.registerPostcss(_s);
            var Us = _s;
            _s.default = _s;
            const zs = re(Us);
            zs.stringify, zs.fromJSON, zs.plugin, zs.parse, zs.list, zs.document, zs.comment, zs.atRule, zs.rule, zs.decl, zs.root, zs.CssSyntaxError, zs.Declaration, zs.Container, zs.Processor, zs.Document, zs.Comment, zs.Warning, zs.AtRule, zs.Result, zs.Input, zs.Rule, zs.Root, zs.Node;
            var js = Object.defineProperty,
                Ws = (e, t, r) => ((e, t, r) => t in e ? js(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r)(e, "symbol" != typeof t ? t + "" : t, r);

            function Vs(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
            }

            function Gs(e) {
                if (e.__esModule) return e;
                var t = e.default;
                if ("function" == typeof t) {
                    var r = function e() {
                        return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
                    };
                    r.prototype = t.prototype
                } else r = {};
                return Object.defineProperty(r, "__esModule", {
                    value: !0
                }), Object.keys(e).forEach((function(t) {
                    var s = Object.getOwnPropertyDescriptor(e, t);
                    Object.defineProperty(r, t, s.get ? s : {
                        enumerable: !0,
                        get: function() {
                            return e[t]
                        }
                    })
                })), r
            }
            var Zs = {
                    exports: {}
                },
                Ys = String,
                Js = function() {
                    return {
                        isColorSupported: !1,
                        reset: Ys,
                        bold: Ys,
                        dim: Ys,
                        italic: Ys,
                        underline: Ys,
                        inverse: Ys,
                        hidden: Ys,
                        strikethrough: Ys,
                        black: Ys,
                        red: Ys,
                        green: Ys,
                        yellow: Ys,
                        blue: Ys,
                        magenta: Ys,
                        cyan: Ys,
                        white: Ys,
                        gray: Ys,
                        bgBlack: Ys,
                        bgRed: Ys,
                        bgGreen: Ys,
                        bgYellow: Ys,
                        bgBlue: Ys,
                        bgMagenta: Ys,
                        bgCyan: Ys,
                        bgWhite: Ys
                    }
                };
            Zs.exports = Js(), Zs.exports.createColors = Js;
            var Xs = Zs.exports;
            const Hs = Gs(Object.freeze(Object.defineProperty({
                __proto__: null,
                default: {}
            }, Symbol.toStringTag, {
                value: "Module"
            })));
            let Ks = Xs,
                $s = Hs,
                Qs = class e extends Error {
                    constructor(t, r, s, n, o, i) {
                        super(t), this.name = "CssSyntaxError", this.reason = t, o && (this.file = o), n && (this.source = n), i && (this.plugin = i), void 0 !== r && void 0 !== s && ("number" == typeof r ? (this.line = r, this.column = s) : (this.line = r.line, this.column = r.column, this.endLine = s.line, this.endColumn = s.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, e)
                    }
                    setMessage() {
                        this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", void 0 !== this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
                    }
                    showSourceCode(e) {
                        if (!this.source) return "";
                        let t = this.source;
                        null == e && (e = Ks.isColorSupported), $s && e && (t = $s(t));
                        let r, s, n = t.split(/\r?\n/),
                            o = Math.max(this.line - 3, 0),
                            i = Math.min(this.line + 2, n.length),
                            a = String(i).length;
                        if (e) {
                            let {
                                bold: e,
                                gray: t,
                                red: n
                            } = Ks.createColors(!0);
                            r = t => e(n(t)), s = e => t(e)
                        } else r = s = e => e;
                        return n.slice(o, i).map(((e, t) => {
                            let n = o + 1 + t,
                                i = " " + (" " + n).slice(-a) + " | ";
                            if (n === this.line) {
                                let t = s(i.replace(/\d/g, " ")) + e.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                                return r(">") + s(i) + e + "\n " + t + r("^")
                            }
                            return " " + s(i) + e
                        })).join("\n")
                    }
                    toString() {
                        let e = this.showSourceCode();
                        return e && (e = "\n\n" + e + "\n"), this.name + ": " + this.message + e
                    }
                };
            var qs = Qs;
            Qs.default = Qs;
            var en = {};
            en.isClean = Symbol("isClean"), en.my = Symbol("my");
            const tn = {
                after: "\n",
                beforeClose: "\n",
                beforeComment: "\n",
                beforeDecl: "\n",
                beforeOpen: " ",
                beforeRule: "\n",
                colon: ": ",
                commentLeft: " ",
                commentRight: " ",
                emptyBody: "",
                indent: "    ",
                semicolon: !1
            };
            let rn = class {
                constructor(e) {
                    this.builder = e
                }
                atrule(e, t) {
                    let r = "@" + e.name,
                        s = e.params ? this.rawValue(e, "params") : "";
                    if (void 0 !== e.raws.afterName ? r += e.raws.afterName : s && (r += " "), e.nodes) this.block(e, r + s);
                    else {
                        let n = (e.raws.between || "") + (t ? ";" : "");
                        this.builder(r + s + n, e)
                    }
                }
                beforeAfter(e, t) {
                    let r;
                    r = "decl" === e.type ? this.raw(e, null, "beforeDecl") : "comment" === e.type ? this.raw(e, null, "beforeComment") : "before" === t ? this.raw(e, null, "beforeRule") : this.raw(e, null, "beforeClose");
                    let s = e.parent,
                        n = 0;
                    for (; s && "root" !== s.type;) n += 1, s = s.parent;
                    if (r.includes("\n")) {
                        let t = this.raw(e, null, "indent");
                        if (t.length)
                            for (let e = 0; e < n; e++) r += t
                    }
                    return r
                }
                block(e, t) {
                    let r, s = this.raw(e, "between", "beforeOpen");
                    this.builder(t + s + "{", e, "start"), e.nodes && e.nodes.length ? (this.body(e), r = this.raw(e, "after")) : r = this.raw(e, "after", "emptyBody"), r && this.builder(r), this.builder("}", e, "end")
                }
                body(e) {
                    let t = e.nodes.length - 1;
                    for (; t > 0 && "comment" === e.nodes[t].type;) t -= 1;
                    let r = this.raw(e, "semicolon");
                    for (let s = 0; s < e.nodes.length; s++) {
                        let n = e.nodes[s],
                            o = this.raw(n, "before");
                        o && this.builder(o), this.stringify(n, t !== s || r)
                    }
                }
                comment(e) {
                    let t = this.raw(e, "left", "commentLeft"),
                        r = this.raw(e, "right", "commentRight");
                    this.builder("/*" + t + e.text + r + "*/", e)
                }
                decl(e, t) {
                    let r = this.raw(e, "between", "colon"),
                        s = e.prop + r + this.rawValue(e, "value");
                    e.important && (s += e.raws.important || " !important"), t && (s += ";"), this.builder(s, e)
                }
                document(e) {
                    this.body(e)
                }
                raw(e, t, r) {
                    let s;
                    if (r || (r = t), t && (s = e.raws[t], void 0 !== s)) return s;
                    let n = e.parent;
                    if ("before" === r) {
                        if (!n || "root" === n.type && n.first === e) return "";
                        if (n && "document" === n.type) return ""
                    }
                    if (!n) return tn[r];
                    let o = e.root();
                    if (o.rawCache || (o.rawCache = {}), void 0 !== o.rawCache[r]) return o.rawCache[r];
                    if ("before" === r || "after" === r) return this.beforeAfter(e, r);
                    {
                        let n = "raw" + ((i = r)[0].toUpperCase() + i.slice(1));
                        this[n] ? s = this[n](o, e) : o.walk((e => {
                            if (s = e.raws[t], void 0 !== s) return !1
                        }))
                    }
                    var i;
                    return void 0 === s && (s = tn[r]), o.rawCache[r] = s, s
                }
                rawBeforeClose(e) {
                    let t;
                    return e.walk((e => {
                        if (e.nodes && e.nodes.length > 0 && void 0 !== e.raws.after) return t = e.raws.after, t.includes("\n") && (t = t.replace(/[^\n]+$/, "")), !1
                    })), t && (t = t.replace(/\S/g, "")), t
                }
                rawBeforeComment(e, t) {
                    let r;
                    return e.walkComments((e => {
                        if (void 0 !== e.raws.before) return r = e.raws.before, r.includes("\n") && (r = r.replace(/[^\n]+$/, "")), !1
                    })), void 0 === r ? r = this.raw(t, null, "beforeDecl") : r && (r = r.replace(/\S/g, "")), r
                }
                rawBeforeDecl(e, t) {
                    let r;
                    return e.walkDecls((e => {
                        if (void 0 !== e.raws.before) return r = e.raws.before, r.includes("\n") && (r = r.replace(/[^\n]+$/, "")), !1
                    })), void 0 === r ? r = this.raw(t, null, "beforeRule") : r && (r = r.replace(/\S/g, "")), r
                }
                rawBeforeOpen(e) {
                    let t;
                    return e.walk((e => {
                        if ("decl" !== e.type && (t = e.raws.between, void 0 !== t)) return !1
                    })), t
                }
                rawBeforeRule(e) {
                    let t;
                    return e.walk((r => {
                        if (r.nodes && (r.parent !== e || e.first !== r) && void 0 !== r.raws.before) return t = r.raws.before, t.includes("\n") && (t = t.replace(/[^\n]+$/, "")), !1
                    })), t && (t = t.replace(/\S/g, "")), t
                }
                rawColon(e) {
                    let t;
                    return e.walkDecls((e => {
                        if (void 0 !== e.raws.between) return t = e.raws.between.replace(/[^\s:]/g, ""), !1
                    })), t
                }
                rawEmptyBody(e) {
                    let t;
                    return e.walk((e => {
                        if (e.nodes && 0 === e.nodes.length && (t = e.raws.after, void 0 !== t)) return !1
                    })), t
                }
                rawIndent(e) {
                    if (e.raws.indent) return e.raws.indent;
                    let t;
                    return e.walk((r => {
                        let s = r.parent;
                        if (s && s !== e && s.parent && s.parent === e && void 0 !== r.raws.before) {
                            let e = r.raws.before.split("\n");
                            return t = e[e.length - 1], t = t.replace(/\S/g, ""), !1
                        }
                    })), t
                }
                rawSemicolon(e) {
                    let t;
                    return e.walk((e => {
                        if (e.nodes && e.nodes.length && "decl" === e.last.type && (t = e.raws.semicolon, void 0 !== t)) return !1
                    })), t
                }
                rawValue(e, t) {
                    let r = e[t],
                        s = e.raws[t];
                    return s && s.value === r ? s.raw : r
                }
                root(e) {
                    this.body(e), e.raws.after && this.builder(e.raws.after)
                }
                rule(e) {
                    this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end")
                }
                stringify(e, t) {
                    if (!this[e.type]) throw new Error("Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier.");
                    this[e.type](e, t)
                }
            };
            var sn = rn;
            rn.default = rn;
            let nn = sn;

            function on(e, t) {
                new nn(t).stringify(e)
            }
            var an = on;
            on.default = on;
            let {
                isClean: ln,
                my: cn
            } = en, hn = qs, un = sn, pn = an;

            function dn(e, t) {
                let r = new e.constructor;
                for (let s in e) {
                    if (!Object.prototype.hasOwnProperty.call(e, s)) continue;
                    if ("proxyCache" === s) continue;
                    let n = e[s],
                        o = typeof n;
                    "parent" === s && "object" === o ? t && (r[s] = t) : "source" === s ? r[s] = n : Array.isArray(n) ? r[s] = n.map((e => dn(e, r))) : ("object" === o && null !== n && (n = dn(n)), r[s] = n)
                }
                return r
            }
            let fn = class {
                constructor(e = {}) {
                    this.raws = {}, this[ln] = !1, this[cn] = !0;
                    for (let t in e)
                        if ("nodes" === t) {
                            this.nodes = [];
                            for (let r of e[t]) "function" == typeof r.clone ? this.append(r.clone()) : this.append(r)
                        } else this[t] = e[t]
                }
                addToError(e) {
                    if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
                        let t = this.source;
                        e.stack = e.stack.replace(/\n\s{4}at /, `$&${t.input.from}:${t.start.line}:${t.start.column}$&`)
                    }
                    return e
                }
                after(e) {
                    return this.parent.insertAfter(this, e), this
                }
                assign(e = {}) {
                    for (let t in e) this[t] = e[t];
                    return this
                }
                before(e) {
                    return this.parent.insertBefore(this, e), this
                }
                cleanRaws(e) {
                    delete this.raws.before, delete this.raws.after, e || delete this.raws.between
                }
                clone(e = {}) {
                    let t = dn(this);
                    for (let r in e) t[r] = e[r];
                    return t
                }
                cloneAfter(e = {}) {
                    let t = this.clone(e);
                    return this.parent.insertAfter(this, t), t
                }
                cloneBefore(e = {}) {
                    let t = this.clone(e);
                    return this.parent.insertBefore(this, t), t
                }
                error(e, t = {}) {
                    if (this.source) {
                        let {
                            end: r,
                            start: s
                        } = this.rangeBy(t);
                        return this.source.input.error(e, {
                            column: s.column,
                            line: s.line
                        }, {
                            column: r.column,
                            line: r.line
                        }, t)
                    }
                    return new hn(e)
                }
                getProxyProcessor() {
                    return {
                        get: (e, t) => "proxyOf" === t ? e : "root" === t ? () => e.root().toProxy() : e[t],
                        set: (e, t, r) => (e[t] === r || (e[t] = r, "prop" !== t && "value" !== t && "name" !== t && "params" !== t && "important" !== t && "text" !== t || e.markDirty()), !0)
                    }
                }
                markDirty() {
                    if (this[ln]) {
                        this[ln] = !1;
                        let e = this;
                        for (; e = e.parent;) e[ln] = !1
                    }
                }
                next() {
                    if (!this.parent) return;
                    let e = this.parent.index(this);
                    return this.parent.nodes[e + 1]
                }
                positionBy(e, t) {
                    let r = this.source.start;
                    if (e.index) r = this.positionInside(e.index, t);
                    else if (e.word) {
                        let s = (t = this.toString()).indexOf(e.word); - 1 !== s && (r = this.positionInside(s, t))
                    }
                    return r
                }
                positionInside(e, t) {
                    let r = t || this.toString(),
                        s = this.source.start.column,
                        n = this.source.start.line;
                    for (let t = 0; t < e; t++) "\n" === r[t] ? (s = 1, n += 1) : s += 1;
                    return {
                        column: s,
                        line: n
                    }
                }
                prev() {
                    if (!this.parent) return;
                    let e = this.parent.index(this);
                    return this.parent.nodes[e - 1]
                }
                rangeBy(e) {
                    let t = {
                            column: this.source.start.column,
                            line: this.source.start.line
                        },
                        r = this.source.end ? {
                            column: this.source.end.column + 1,
                            line: this.source.end.line
                        } : {
                            column: t.column + 1,
                            line: t.line
                        };
                    if (e.word) {
                        let s = this.toString(),
                            n = s.indexOf(e.word); - 1 !== n && (t = this.positionInside(n, s), r = this.positionInside(n + e.word.length, s))
                    } else e.start ? t = {
                        column: e.start.column,
                        line: e.start.line
                    } : e.index && (t = this.positionInside(e.index)), e.end ? r = {
                        column: e.end.column,
                        line: e.end.line
                    } : "number" == typeof e.endIndex ? r = this.positionInside(e.endIndex) : e.index && (r = this.positionInside(e.index + 1));
                    return (r.line < t.line || r.line === t.line && r.column <= t.column) && (r = {
                        column: t.column + 1,
                        line: t.line
                    }), {
                        end: r,
                        start: t
                    }
                }
                raw(e, t) {
                    return (new un).raw(this, e, t)
                }
                remove() {
                    return this.parent && this.parent.removeChild(this), this.parent = void 0, this
                }
                replaceWith(...e) {
                    if (this.parent) {
                        let t = this,
                            r = !1;
                        for (let s of e) s === this ? r = !0 : r ? (this.parent.insertAfter(t, s), t = s) : this.parent.insertBefore(t, s);
                        r || this.remove()
                    }
                    return this
                }
                root() {
                    let e = this;
                    for (; e.parent && "document" !== e.parent.type;) e = e.parent;
                    return e
                }
                toJSON(e, t) {
                    let r = {},
                        s = null == t;
                    t = t || new Map;
                    let n = 0;
                    for (let e in this) {
                        if (!Object.prototype.hasOwnProperty.call(this, e)) continue;
                        if ("parent" === e || "proxyCache" === e) continue;
                        let s = this[e];
                        if (Array.isArray(s)) r[e] = s.map((e => "object" == typeof e && e.toJSON ? e.toJSON(null, t) : e));
                        else if ("object" == typeof s && s.toJSON) r[e] = s.toJSON(null, t);
                        else if ("source" === e) {
                            let o = t.get(s.input);
                            null == o && (o = n, t.set(s.input, n), n++), r[e] = {
                                end: s.end,
                                inputId: o,
                                start: s.start
                            }
                        } else r[e] = s
                    }
                    return s && (r.inputs = [...t.keys()].map((e => e.toJSON()))), r
                }
                toProxy() {
                    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
                }
                toString(e = pn) {
                    e.stringify && (e = e.stringify);
                    let t = "";
                    return e(this, (e => {
                        t += e
                    })), t
                }
                warn(e, t, r) {
                    let s = {
                        node: this
                    };
                    for (let e in r) s[e] = r[e];
                    return e.warn(t, s)
                }
                get proxyOf() {
                    return this
                }
            };
            var mn = fn;
            fn.default = fn;
            let gn = mn,
                yn = class extends gn {
                    constructor(e) {
                        e && void 0 !== e.value && "string" != typeof e.value && (e = {
                            ...e,
                            value: String(e.value)
                        }), super(e), this.type = "decl"
                    }
                    get variable() {
                        return this.prop.startsWith("--") || "$" === this.prop[0]
                    }
                };
            var wn = yn;
            yn.default = yn;
            var bn = {
                nanoid: (e = 21) => {
                    let t = "",
                        r = e;
                    for (; r--;) t += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
                    return t
                },
                customAlphabet: (e, t = 21) => (r = t) => {
                    let s = "",
                        n = r;
                    for (; n--;) s += e[Math.random() * e.length | 0];
                    return s
                }
            };
            let {
                SourceMapConsumer: Sn,
                SourceMapGenerator: Cn
            } = Hs, {
                existsSync: vn,
                readFileSync: In
            } = Hs, {
                dirname: kn,
                join: xn
            } = Hs;
            let On = class {
                constructor(e, t) {
                    if (!1 === t.map) return;
                    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
                    let r = t.map ? t.map.prev : void 0,
                        s = this.loadMap(t.from, r);
                    !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = kn(this.mapFile)), s && (this.text = s)
                }
                consumer() {
                    return this.consumerCache || (this.consumerCache = new Sn(this.text)), this.consumerCache
                }
                decodeInline(e) {
                    if (/^data:application\/json;charset=utf-?8,/.test(e) || /^data:application\/json,/.test(e)) return decodeURIComponent(e.substr(RegExp.lastMatch.length));
                    if (/^data:application\/json;charset=utf-?8;base64,/.test(e) || /^data:application\/json;base64,/.test(e)) return t = e.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(t, "base64").toString() : window.atob(t);
                    var t;
                    let r = e.match(/data:application\/json;([^,]+),/)[1];
                    throw new Error("Unsupported source map encoding " + r)
                }
                getAnnotationURL(e) {
                    return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
                }
                isMap(e) {
                    return "object" == typeof e && ("string" == typeof e.mappings || "string" == typeof e._mappings || Array.isArray(e.sections))
                }
                loadAnnotation(e) {
                    let t = e.match(/\/\*\s*# sourceMappingURL=/gm);
                    if (!t) return;
                    let r = e.lastIndexOf(t.pop()),
                        s = e.indexOf("*/", r);
                    r > -1 && s > -1 && (this.annotation = this.getAnnotationURL(e.substring(r, s)))
                }
                loadFile(e) {
                    if (this.root = kn(e), vn(e)) return this.mapFile = e, In(e, "utf-8").toString().trim()
                }
                loadMap(e, t) {
                    if (!1 === t) return !1;
                    if (t) {
                        if ("string" == typeof t) return t;
                        if ("function" != typeof t) {
                            if (t instanceof Sn) return Cn.fromSourceMap(t).toString();
                            if (t instanceof Cn) return t.toString();
                            if (this.isMap(t)) return JSON.stringify(t);
                            throw new Error("Unsupported previous source map format: " + t.toString())
                        } {
                            let r = t(e);
                            if (r) {
                                let e = this.loadFile(r);
                                if (!e) throw new Error("Unable to load previous source map: " + r.toString());
                                return e
                            }
                        }
                    } else {
                        if (this.inline) return this.decodeInline(this.annotation);
                        if (this.annotation) {
                            let t = this.annotation;
                            return e && (t = xn(kn(e), t)), this.loadFile(t)
                        }
                    }
                }
                startWith(e, t) {
                    return !!e && e.substr(0, t.length) === t
                }
                withContent() {
                    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
                }
            };
            var Mn = On;
            On.default = On;
            let {
                SourceMapConsumer: An,
                SourceMapGenerator: Rn
            } = Hs, {
                fileURLToPath: En,
                pathToFileURL: Tn
            } = Hs, {
                isAbsolute: Nn,
                resolve: Ln
            } = Hs, {
                nanoid: Dn
            } = bn, Pn = Hs, Fn = qs, Bn = Mn, _n = Symbol("fromOffsetCache"), Un = Boolean(An && Rn), zn = Boolean(Ln && Nn), jn = class {
                constructor(e, t = {}) {
                    if (null == e || "object" == typeof e && !e.toString) throw new Error(`PostCSS received ${e} instead of CSS string`);
                    if (this.css = e.toString(), "﻿" === this.css[0] || "￾" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!zn || /^\w+:\/\//.test(t.from) || Nn(t.from) ? this.file = t.from : this.file = Ln(t.from)), zn && Un) {
                        let e = new Bn(this.css, t);
                        if (e.text) {
                            this.map = e;
                            let t = e.consumer().file;
                            !this.file && t && (this.file = this.mapResolve(t))
                        }
                    }
                    this.file || (this.id = "<input css " + Dn(6) + ">"), this.map && (this.map.file = this.from)
                }
                error(e, t, r, s = {}) {
                    let n, o, i;
                    if (t && "object" == typeof t) {
                        let e = t,
                            s = r;
                        if ("number" == typeof e.offset) {
                            let s = this.fromOffset(e.offset);
                            t = s.line, r = s.col
                        } else t = e.line, r = e.column;
                        if ("number" == typeof s.offset) {
                            let e = this.fromOffset(s.offset);
                            o = e.line, i = e.col
                        } else o = s.line, i = s.column
                    } else if (!r) {
                        let e = this.fromOffset(t);
                        t = e.line, r = e.col
                    }
                    let a = this.origin(t, r, o, i);
                    return n = a ? new Fn(e, void 0 === a.endLine ? a.line : {
                        column: a.column,
                        line: a.line
                    }, void 0 === a.endLine ? a.column : {
                        column: a.endColumn,
                        line: a.endLine
                    }, a.source, a.file, s.plugin) : new Fn(e, void 0 === o ? t : {
                        column: r,
                        line: t
                    }, void 0 === o ? r : {
                        column: i,
                        line: o
                    }, this.css, this.file, s.plugin), n.input = {
                        column: r,
                        endColumn: i,
                        endLine: o,
                        line: t,
                        source: this.css
                    }, this.file && (Tn && (n.input.url = Tn(this.file).toString()), n.input.file = this.file), n
                }
                fromOffset(e) {
                    let t, r;
                    if (this[_n]) r = this[_n];
                    else {
                        let e = this.css.split("\n");
                        r = new Array(e.length);
                        let t = 0;
                        for (let s = 0, n = e.length; s < n; s++) r[s] = t, t += e[s].length + 1;
                        this[_n] = r
                    }
                    t = r[r.length - 1];
                    let s = 0;
                    if (e >= t) s = r.length - 1;
                    else {
                        let t, n = r.length - 2;
                        for (; s < n;)
                            if (t = s + (n - s >> 1), e < r[t]) n = t - 1;
                            else {
                                if (!(e >= r[t + 1])) {
                                    s = t;
                                    break
                                }
                                s = t + 1
                            }
                    }
                    return {
                        col: e - r[s] + 1,
                        line: s + 1
                    }
                }
                mapResolve(e) {
                    return /^\w+:\/\//.test(e) ? e : Ln(this.map.consumer().sourceRoot || this.map.root || ".", e)
                }
                origin(e, t, r, s) {
                    if (!this.map) return !1;
                    let n, o, i = this.map.consumer(),
                        a = i.originalPositionFor({
                            column: t,
                            line: e
                        });
                    if (!a.source) return !1;
                    "number" == typeof r && (n = i.originalPositionFor({
                        column: s,
                        line: r
                    })), o = Nn(a.source) ? Tn(a.source) : new URL(a.source, this.map.consumer().sourceRoot || Tn(this.map.mapFile));
                    let l = {
                        column: a.column,
                        endColumn: n && n.column,
                        endLine: n && n.line,
                        line: a.line,
                        url: o.toString()
                    };
                    if ("file:" === o.protocol) {
                        if (!En) throw new Error("file: protocol is not available in this PostCSS build");
                        l.file = En(o)
                    }
                    let c = i.sourceContentFor(a.source);
                    return c && (l.source = c), l
                }
                toJSON() {
                    let e = {};
                    for (let t of ["hasBOM", "css", "file", "id"]) null != this[t] && (e[t] = this[t]);
                    return this.map && (e.map = {
                        ...this.map
                    }, e.map.consumerCache && (e.map.consumerCache = void 0)), e
                }
                get from() {
                    return this.file || this.id
                }
            };
            var Wn = jn;
            jn.default = jn, Pn && Pn.registerInput && Pn.registerInput(jn);
            let {
                SourceMapConsumer: Vn,
                SourceMapGenerator: Gn
            } = Hs, {
                dirname: Zn,
                relative: Yn,
                resolve: Jn,
                sep: Xn
            } = Hs, {
                pathToFileURL: Hn
            } = Hs, Kn = Wn, $n = Boolean(Vn && Gn), Qn = Boolean(Zn && Jn && Yn && Xn);
            var qn = class {
                constructor(e, t, r, s) {
                    this.stringify = e, this.mapOpts = r.map || {}, this.root = t, this.opts = r, this.css = s, this.originalCSS = s, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
                }
                addAnnotation() {
                    let e;
                    e = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" == typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" == typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
                    let t = "\n";
                    this.css.includes("\r\n") && (t = "\r\n"), this.css += t + "/*# sourceMappingURL=" + e + " */"
                }
                applyPrevMaps() {
                    for (let e of this.previous()) {
                        let t, r = this.toUrl(this.path(e.file)),
                            s = e.root || Zn(e.file);
                        !1 === this.mapOpts.sourcesContent ? (t = new Vn(e.text), t.sourcesContent && (t.sourcesContent = null)) : t = e.consumer(), this.map.applySourceMap(t, r, this.toUrl(this.path(s)))
                    }
                }
                clearAnnotation() {
                    if (!1 !== this.mapOpts.annotation)
                        if (this.root) {
                            let e;
                            for (let t = this.root.nodes.length - 1; t >= 0; t--) e = this.root.nodes[t], "comment" === e.type && 0 === e.text.indexOf("# sourceMappingURL=") && this.root.removeChild(t)
                        } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
                }
                generate() {
                    if (this.clearAnnotation(), Qn && $n && this.isMap()) return this.generateMap();
                    {
                        let e = "";
                        return this.stringify(this.root, (t => {
                            e += t
                        })), [e]
                    }
                }
                generateMap() {
                    if (this.root) this.generateString();
                    else if (1 === this.previous().length) {
                        let e = this.previous()[0].consumer();
                        e.file = this.outputFile(), this.map = Gn.fromSourceMap(e, {
                            ignoreInvalidMapping: !0
                        })
                    } else this.map = new Gn({
                        file: this.outputFile(),
                        ignoreInvalidMapping: !0
                    }), this.map.addMapping({
                        generated: {
                            column: 0,
                            line: 1
                        },
                        original: {
                            column: 0,
                            line: 1
                        },
                        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
                    });
                    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map]
                }
                generateString() {
                    this.css = "", this.map = new Gn({
                        file: this.outputFile(),
                        ignoreInvalidMapping: !0
                    });
                    let e, t, r = 1,
                        s = 1,
                        n = "<no source>",
                        o = {
                            generated: {
                                column: 0,
                                line: 0
                            },
                            original: {
                                column: 0,
                                line: 0
                            },
                            source: ""
                        };
                    this.stringify(this.root, ((i, a, l) => {
                        if (this.css += i, a && "end" !== l && (o.generated.line = r, o.generated.column = s - 1, a.source && a.source.start ? (o.source = this.sourcePath(a), o.original.line = a.source.start.line, o.original.column = a.source.start.column - 1, this.map.addMapping(o)) : (o.source = n, o.original.line = 1, o.original.column = 0, this.map.addMapping(o))), e = i.match(/\n/g), e ? (r += e.length, t = i.lastIndexOf("\n"), s = i.length - t) : s += i.length, a && "start" !== l) {
                            let e = a.parent || {
                                raws: {}
                            };
                            ("decl" === a.type || "atrule" === a.type && !a.nodes) && a === e.last && !e.raws.semicolon || (a.source && a.source.end ? (o.source = this.sourcePath(a), o.original.line = a.source.end.line, o.original.column = a.source.end.column - 1, o.generated.line = r, o.generated.column = s - 2, this.map.addMapping(o)) : (o.source = n, o.original.line = 1, o.original.column = 0, o.generated.line = r, o.generated.column = s - 1, this.map.addMapping(o)))
                        }
                    }))
                }
                isAnnotation() {
                    return !!this.isInline() || (void 0 !== this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((e => e.annotation)))
                }
                isInline() {
                    if (void 0 !== this.mapOpts.inline) return this.mapOpts.inline;
                    let e = this.mapOpts.annotation;
                    return (void 0 === e || !0 === e) && (!this.previous().length || this.previous().some((e => e.inline)))
                }
                isMap() {
                    return void 0 !== this.opts.map ? !!this.opts.map : this.previous().length > 0
                }
                isSourcesContent() {
                    return void 0 !== this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((e => e.withContent()))
                }
                outputFile() {
                    return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
                }
                path(e) {
                    if (this.mapOpts.absolute) return e;
                    if (60 === e.charCodeAt(0)) return e;
                    if (/^\w+:\/\//.test(e)) return e;
                    let t = this.memoizedPaths.get(e);
                    if (t) return t;
                    let r = this.opts.to ? Zn(this.opts.to) : ".";
                    "string" == typeof this.mapOpts.annotation && (r = Zn(Jn(r, this.mapOpts.annotation)));
                    let s = Yn(r, e);
                    return this.memoizedPaths.set(e, s), s
                }
                previous() {
                    if (!this.previousMaps)
                        if (this.previousMaps = [], this.root) this.root.walk((e => {
                            if (e.source && e.source.input.map) {
                                let t = e.source.input.map;
                                this.previousMaps.includes(t) || this.previousMaps.push(t)
                            }
                        }));
                        else {
                            let e = new Kn(this.originalCSS, this.opts);
                            e.map && this.previousMaps.push(e.map)
                        } return this.previousMaps
                }
                setSourcesContent() {
                    let e = {};
                    if (this.root) this.root.walk((t => {
                        if (t.source) {
                            let r = t.source.input.from;
                            if (r && !e[r]) {
                                e[r] = !0;
                                let s = this.usesFileUrls ? this.toFileUrl(r) : this.toUrl(this.path(r));
                                this.map.setSourceContent(s, t.source.input.css)
                            }
                        }
                    }));
                    else if (this.css) {
                        let e = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
                        this.map.setSourceContent(e, this.css)
                    }
                }
                sourcePath(e) {
                    return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from))
                }
                toBase64(e) {
                    return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)))
                }
                toFileUrl(e) {
                    let t = this.memoizedFileURLs.get(e);
                    if (t) return t;
                    if (Hn) {
                        let t = Hn(e).toString();
                        return this.memoizedFileURLs.set(e, t), t
                    }
                    throw new Error("`map.absolute` option is not available in this PostCSS build")
                }
                toUrl(e) {
                    let t = this.memoizedURLs.get(e);
                    if (t) return t;
                    "\\" === Xn && (e = e.replace(/\\/g, "/"));
                    let r = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
                    return this.memoizedURLs.set(e, r), r
                }
            };
            let eo = mn,
                to = class extends eo {
                    constructor(e) {
                        super(e), this.type = "comment"
                    }
                };
            var ro = to;
            to.default = to;
            let so, no, oo, io, {
                    isClean: ao,
                    my: lo
                } = en,
                co = wn,
                ho = ro,
                uo = mn;

            function po(e) {
                return e.map((e => (e.nodes && (e.nodes = po(e.nodes)), delete e.source, e)))
            }

            function fo(e) {
                if (e[ao] = !1, e.proxyOf.nodes)
                    for (let t of e.proxyOf.nodes) fo(t)
            }
            let mo = class e extends uo {
                append(...e) {
                    for (let t of e) {
                        let e = this.normalize(t, this.last);
                        for (let t of e) this.proxyOf.nodes.push(t)
                    }
                    return this.markDirty(), this
                }
                cleanRaws(e) {
                    if (super.cleanRaws(e), this.nodes)
                        for (let t of this.nodes) t.cleanRaws(e)
                }
                each(e) {
                    if (!this.proxyOf.nodes) return;
                    let t, r, s = this.getIterator();
                    for (; this.indexes[s] < this.proxyOf.nodes.length && (t = this.indexes[s], r = e(this.proxyOf.nodes[t], t), !1 !== r);) this.indexes[s] += 1;
                    return delete this.indexes[s], r
                }
                every(e) {
                    return this.nodes.every(e)
                }
                getIterator() {
                    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
                    let e = this.lastEach;
                    return this.indexes[e] = 0, e
                }
                getProxyProcessor() {
                    return {
                        get: (e, t) => "proxyOf" === t ? e : e[t] ? "each" === t || "string" == typeof t && t.startsWith("walk") ? (...r) => e[t](...r.map((e => "function" == typeof e ? (t, r) => e(t.toProxy(), r) : e))) : "every" === t || "some" === t ? r => e[t](((e, ...t) => r(e.toProxy(), ...t))) : "root" === t ? () => e.root().toProxy() : "nodes" === t ? e.nodes.map((e => e.toProxy())) : "first" === t || "last" === t ? e[t].toProxy() : e[t] : e[t],
                        set: (e, t, r) => (e[t] === r || (e[t] = r, "name" !== t && "params" !== t && "selector" !== t || e.markDirty()), !0)
                    }
                }
                index(e) {
                    return "number" == typeof e ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e))
                }
                insertAfter(e, t) {
                    let r, s = this.index(e),
                        n = this.normalize(t, this.proxyOf.nodes[s]).reverse();
                    s = this.index(e);
                    for (let e of n) this.proxyOf.nodes.splice(s + 1, 0, e);
                    for (let e in this.indexes) r = this.indexes[e], s < r && (this.indexes[e] = r + n.length);
                    return this.markDirty(), this
                }
                insertBefore(e, t) {
                    let r, s = this.index(e),
                        n = 0 === s && "prepend",
                        o = this.normalize(t, this.proxyOf.nodes[s], n).reverse();
                    s = this.index(e);
                    for (let e of o) this.proxyOf.nodes.splice(s, 0, e);
                    for (let e in this.indexes) r = this.indexes[e], s <= r && (this.indexes[e] = r + o.length);
                    return this.markDirty(), this
                }
                normalize(t, r) {
                    if ("string" == typeof t) t = po(so(t).nodes);
                    else if (void 0 === t) t = [];
                    else if (Array.isArray(t)) {
                        t = t.slice(0);
                        for (let e of t) e.parent && e.parent.removeChild(e, "ignore")
                    } else if ("root" === t.type && "document" !== this.type) {
                        t = t.nodes.slice(0);
                        for (let e of t) e.parent && e.parent.removeChild(e, "ignore")
                    } else if (t.type) t = [t];
                    else if (t.prop) {
                        if (void 0 === t.value) throw new Error("Value field is missed in node creation");
                        "string" != typeof t.value && (t.value = String(t.value)), t = [new co(t)]
                    } else if (t.selector) t = [new no(t)];
                    else if (t.name) t = [new oo(t)];
                    else {
                        if (!t.text) throw new Error("Unknown node type in node creation");
                        t = [new ho(t)]
                    }
                    return t.map((t => (t[lo] || e.rebuild(t), (t = t.proxyOf).parent && t.parent.removeChild(t), t[ao] && fo(t), void 0 === t.raws.before && r && void 0 !== r.raws.before && (t.raws.before = r.raws.before.replace(/\S/g, "")), t.parent = this.proxyOf, t)))
                }
                prepend(...e) {
                    e = e.reverse();
                    for (let t of e) {
                        let e = this.normalize(t, this.first, "prepend").reverse();
                        for (let t of e) this.proxyOf.nodes.unshift(t);
                        for (let t in this.indexes) this.indexes[t] = this.indexes[t] + e.length
                    }
                    return this.markDirty(), this
                }
                push(e) {
                    return e.parent = this, this.proxyOf.nodes.push(e), this
                }
                removeAll() {
                    for (let e of this.proxyOf.nodes) e.parent = void 0;
                    return this.proxyOf.nodes = [], this.markDirty(), this
                }
                removeChild(e) {
                    let t;
                    e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
                    for (let r in this.indexes) t = this.indexes[r], t >= e && (this.indexes[r] = t - 1);
                    return this.markDirty(), this
                }
                replaceValues(e, t, r) {
                    return r || (r = t, t = {}), this.walkDecls((s => {
                        t.props && !t.props.includes(s.prop) || t.fast && !s.value.includes(t.fast) || (s.value = s.value.replace(e, r))
                    })), this.markDirty(), this
                }
                some(e) {
                    return this.nodes.some(e)
                }
                walk(e) {
                    return this.each(((t, r) => {
                        let s;
                        try {
                            s = e(t, r)
                        } catch (e) {
                            throw t.addToError(e)
                        }
                        return !1 !== s && t.walk && (s = t.walk(e)), s
                    }))
                }
                walkAtRules(e, t) {
                    return t ? e instanceof RegExp ? this.walk(((r, s) => {
                        if ("atrule" === r.type && e.test(r.name)) return t(r, s)
                    })) : this.walk(((r, s) => {
                        if ("atrule" === r.type && r.name === e) return t(r, s)
                    })) : (t = e, this.walk(((e, r) => {
                        if ("atrule" === e.type) return t(e, r)
                    })))
                }
                walkComments(e) {
                    return this.walk(((t, r) => {
                        if ("comment" === t.type) return e(t, r)
                    }))
                }
                walkDecls(e, t) {
                    return t ? e instanceof RegExp ? this.walk(((r, s) => {
                        if ("decl" === r.type && e.test(r.prop)) return t(r, s)
                    })) : this.walk(((r, s) => {
                        if ("decl" === r.type && r.prop === e) return t(r, s)
                    })) : (t = e, this.walk(((e, r) => {
                        if ("decl" === e.type) return t(e, r)
                    })))
                }
                walkRules(e, t) {
                    return t ? e instanceof RegExp ? this.walk(((r, s) => {
                        if ("rule" === r.type && e.test(r.selector)) return t(r, s)
                    })) : this.walk(((r, s) => {
                        if ("rule" === r.type && r.selector === e) return t(r, s)
                    })) : (t = e, this.walk(((e, r) => {
                        if ("rule" === e.type) return t(e, r)
                    })))
                }
                get first() {
                    if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
                }
                get last() {
                    if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
                }
            };
            mo.registerParse = e => {
                so = e
            }, mo.registerRule = e => {
                no = e
            }, mo.registerAtRule = e => {
                oo = e
            }, mo.registerRoot = e => {
                io = e
            };
            var go = mo;
            mo.default = mo, mo.rebuild = e => {
                "atrule" === e.type ? Object.setPrototypeOf(e, oo.prototype) : "rule" === e.type ? Object.setPrototypeOf(e, no.prototype) : "decl" === e.type ? Object.setPrototypeOf(e, co.prototype) : "comment" === e.type ? Object.setPrototypeOf(e, ho.prototype) : "root" === e.type && Object.setPrototypeOf(e, io.prototype), e[lo] = !0, e.nodes && e.nodes.forEach((e => {
                    mo.rebuild(e)
                }))
            };
            let yo, wo, bo = go,
                So = class extends bo {
                    constructor(e) {
                        super({
                            type: "document",
                            ...e
                        }), this.nodes || (this.nodes = [])
                    }
                    toResult(e = {}) {
                        return new yo(new wo, this, e).stringify()
                    }
                };
            So.registerLazyResult = e => {
                yo = e
            }, So.registerProcessor = e => {
                wo = e
            };
            var Co = So;
            So.default = So;
            let vo = class {
                constructor(e, t = {}) {
                    if (this.type = "warning", this.text = e, t.node && t.node.source) {
                        let e = t.node.rangeBy(t);
                        this.line = e.start.line, this.column = e.start.column, this.endLine = e.end.line, this.endColumn = e.end.column
                    }
                    for (let e in t) this[e] = t[e]
                }
                toString() {
                    return this.node ? this.node.error(this.text, {
                        index: this.index,
                        plugin: this.plugin,
                        word: this.word
                    }).message : this.plugin ? this.plugin + ": " + this.text : this.text
                }
            };
            var Io = vo;
            vo.default = vo;
            let ko = Io,
                xo = class {
                    constructor(e, t, r) {
                        this.processor = e, this.messages = [], this.root = t, this.opts = r, this.css = void 0, this.map = void 0
                    }
                    toString() {
                        return this.css
                    }
                    warn(e, t = {}) {
                        t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
                        let r = new ko(e, t);
                        return this.messages.push(r), r
                    }
                    warnings() {
                        return this.messages.filter((e => "warning" === e.type))
                    }
                    get content() {
                        return this.css
                    }
                };
            var Oo = xo;
            xo.default = xo;
            const Mo = "'".charCodeAt(0),
                Ao = '"'.charCodeAt(0),
                Ro = "\\".charCodeAt(0),
                Eo = "/".charCodeAt(0),
                To = "\n".charCodeAt(0),
                No = " ".charCodeAt(0),
                Lo = "\f".charCodeAt(0),
                Do = "\t".charCodeAt(0),
                Po = "\r".charCodeAt(0),
                Fo = "[".charCodeAt(0),
                Bo = "]".charCodeAt(0),
                _o = "(".charCodeAt(0),
                Uo = ")".charCodeAt(0),
                zo = "{".charCodeAt(0),
                jo = "}".charCodeAt(0),
                Wo = ";".charCodeAt(0),
                Vo = "*".charCodeAt(0),
                Go = ":".charCodeAt(0),
                Zo = "@".charCodeAt(0),
                Yo = /[\t\n\f\r "#'()/;[\\\]{}]/g,
                Jo = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
                Xo = /.[\r\n"'(/\\]/,
                Ho = /[\da-f]/i;
            let Ko = go,
                $o = class extends Ko {
                    constructor(e) {
                        super(e), this.type = "atrule"
                    }
                    append(...e) {
                        return this.proxyOf.nodes || (this.nodes = []), super.append(...e)
                    }
                    prepend(...e) {
                        return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e)
                    }
                };
            var Qo = $o;
            $o.default = $o, Ko.registerAtRule($o);
            let qo, ei, ti = go,
                ri = class extends ti {
                    constructor(e) {
                        super(e), this.type = "root", this.nodes || (this.nodes = [])
                    }
                    normalize(e, t, r) {
                        let s = super.normalize(e);
                        if (t)
                            if ("prepend" === r) this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;
                            else if (this.first !== t)
                            for (let e of s) e.raws.before = t.raws.before;
                        return s
                    }
                    removeChild(e, t) {
                        let r = this.index(e);
                        return !t && 0 === r && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[r].raws.before), super.removeChild(e)
                    }
                    toResult(e = {}) {
                        return new qo(new ei, this, e).stringify()
                    }
                };
            ri.registerLazyResult = e => {
                qo = e
            }, ri.registerProcessor = e => {
                ei = e
            };
            var si = ri;
            ri.default = ri, ti.registerRoot(ri);
            let ni = {
                comma: e => ni.split(e, [","], !0),
                space: e => ni.split(e, [" ", "\n", "\t"]),
                split(e, t, r) {
                    let s = [],
                        n = "",
                        o = !1,
                        i = 0,
                        a = !1,
                        l = "",
                        c = !1;
                    for (let r of e) c ? c = !1 : "\\" === r ? c = !0 : a ? r === l && (a = !1) : '"' === r || "'" === r ? (a = !0, l = r) : "(" === r ? i += 1 : ")" === r ? i > 0 && (i -= 1) : 0 === i && t.includes(r) && (o = !0), o ? ("" !== n && s.push(n.trim()), n = "", o = !1) : n += r;
                    return (r || "" !== n) && s.push(n.trim()), s
                }
            };
            var oi = ni;
            ni.default = ni;
            let ii = go,
                ai = oi,
                li = class extends ii {
                    constructor(e) {
                        super(e), this.type = "rule", this.nodes || (this.nodes = [])
                    }
                    get selectors() {
                        return ai.comma(this.selector)
                    }
                    set selectors(e) {
                        let t = this.selector ? this.selector.match(/,\s*/) : null,
                            r = t ? t[0] : "," + this.raw("between", "beforeOpen");
                        this.selector = e.join(r)
                    }
                };
            var ci = li;
            li.default = li, ii.registerRule(li);
            let hi = wn,
                ui = function(e, t = {}) {
                    let r, s, n, o, i, a, l, c, h, u, p = e.css.valueOf(),
                        d = t.ignoreErrors,
                        f = p.length,
                        m = 0,
                        g = [],
                        y = [];

                    function w(t) {
                        throw e.error("Unclosed " + t, m)
                    }
                    return {
                        back: function(e) {
                            y.push(e)
                        },
                        endOfFile: function() {
                            return 0 === y.length && m >= f
                        },
                        nextToken: function(e) {
                            if (y.length) return y.pop();
                            if (m >= f) return;
                            let t = !!e && e.ignoreUnclosed;
                            switch (r = p.charCodeAt(m), r) {
                                case To:
                                case No:
                                case Do:
                                case Po:
                                case Lo:
                                    s = m;
                                    do {
                                        s += 1, r = p.charCodeAt(s)
                                    } while (r === No || r === To || r === Do || r === Po || r === Lo);
                                    u = ["space", p.slice(m, s)], m = s - 1;
                                    break;
                                case Fo:
                                case Bo:
                                case zo:
                                case jo:
                                case Go:
                                case Wo:
                                case Uo: {
                                    let e = String.fromCharCode(r);
                                    u = [e, e, m];
                                    break
                                }
                                case _o:
                                    if (c = g.length ? g.pop()[1] : "", h = p.charCodeAt(m + 1), "url" === c && h !== Mo && h !== Ao && h !== No && h !== To && h !== Do && h !== Lo && h !== Po) {
                                        s = m;
                                        do {
                                            if (a = !1, s = p.indexOf(")", s + 1), -1 === s) {
                                                if (d || t) {
                                                    s = m;
                                                    break
                                                }
                                                w("bracket")
                                            }
                                            for (l = s; p.charCodeAt(l - 1) === Ro;) l -= 1, a = !a
                                        } while (a);
                                        u = ["brackets", p.slice(m, s + 1), m, s], m = s
                                    } else s = p.indexOf(")", m + 1), o = p.slice(m, s + 1), -1 === s || Xo.test(o) ? u = ["(", "(", m] : (u = ["brackets", o, m, s], m = s);
                                    break;
                                case Mo:
                                case Ao:
                                    n = r === Mo ? "'" : '"', s = m;
                                    do {
                                        if (a = !1, s = p.indexOf(n, s + 1), -1 === s) {
                                            if (d || t) {
                                                s = m + 1;
                                                break
                                            }
                                            w("string")
                                        }
                                        for (l = s; p.charCodeAt(l - 1) === Ro;) l -= 1, a = !a
                                    } while (a);
                                    u = ["string", p.slice(m, s + 1), m, s], m = s;
                                    break;
                                case Zo:
                                    Yo.lastIndex = m + 1, Yo.test(p), s = 0 === Yo.lastIndex ? p.length - 1 : Yo.lastIndex - 2, u = ["at-word", p.slice(m, s + 1), m, s], m = s;
                                    break;
                                case Ro:
                                    for (s = m, i = !0; p.charCodeAt(s + 1) === Ro;) s += 1, i = !i;
                                    if (r = p.charCodeAt(s + 1), i && r !== Eo && r !== No && r !== To && r !== Do && r !== Po && r !== Lo && (s += 1, Ho.test(p.charAt(s)))) {
                                        for (; Ho.test(p.charAt(s + 1));) s += 1;
                                        p.charCodeAt(s + 1) === No && (s += 1)
                                    }
                                    u = ["word", p.slice(m, s + 1), m, s], m = s;
                                    break;
                                default:
                                    r === Eo && p.charCodeAt(m + 1) === Vo ? (s = p.indexOf("*/", m + 2) + 1, 0 === s && (d || t ? s = p.length : w("comment")), u = ["comment", p.slice(m, s + 1), m, s], m = s) : (Jo.lastIndex = m + 1, Jo.test(p), s = 0 === Jo.lastIndex ? p.length - 1 : Jo.lastIndex - 2, u = ["word", p.slice(m, s + 1), m, s], g.push(u), m = s)
                            }
                            return m++, u
                        },
                        position: function() {
                            return m
                        }
                    }
                },
                pi = ro,
                di = Qo,
                fi = si,
                mi = ci;
            const gi = {
                empty: !0,
                space: !0
            };
            let yi = go,
                wi = class {
                    constructor(e) {
                        this.input = e, this.root = new fi, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
                            input: e,
                            start: {
                                column: 1,
                                line: 1,
                                offset: 0
                            }
                        }
                    }
                    atrule(e) {
                        let t, r, s, n = new di;
                        n.name = e[1].slice(1), "" === n.name && this.unnamedAtrule(n, e), this.init(n, e[2]);
                        let o = !1,
                            i = !1,
                            a = [],
                            l = [];
                        for (; !this.tokenizer.endOfFile();) {
                            if (t = (e = this.tokenizer.nextToken())[0], "(" === t || "[" === t ? l.push("(" === t ? ")" : "]") : "{" === t && l.length > 0 ? l.push("}") : t === l[l.length - 1] && l.pop(), 0 === l.length) {
                                if (";" === t) {
                                    n.source.end = this.getPosition(e[2]), n.source.end.offset++, this.semicolon = !0;
                                    break
                                }
                                if ("{" === t) {
                                    i = !0;
                                    break
                                }
                                if ("}" === t) {
                                    if (a.length > 0) {
                                        for (s = a.length - 1, r = a[s]; r && "space" === r[0];) r = a[--s];
                                        r && (n.source.end = this.getPosition(r[3] || r[2]), n.source.end.offset++)
                                    }
                                    this.end(e);
                                    break
                                }
                                a.push(e)
                            } else a.push(e);
                            if (this.tokenizer.endOfFile()) {
                                o = !0;
                                break
                            }
                        }
                        n.raws.between = this.spacesAndCommentsFromEnd(a), a.length ? (n.raws.afterName = this.spacesAndCommentsFromStart(a), this.raw(n, "params", a), o && (e = a[a.length - 1], n.source.end = this.getPosition(e[3] || e[2]), n.source.end.offset++, this.spaces = n.raws.between, n.raws.between = "")) : (n.raws.afterName = "", n.params = ""), i && (n.nodes = [], this.current = n)
                    }
                    checkMissedSemicolon(e) {
                        let t = this.colon(e);
                        if (!1 === t) return;
                        let r, s = 0;
                        for (let n = t - 1; n >= 0 && (r = e[n], "space" === r[0] || (s += 1, 2 !== s)); n--);
                        throw this.input.error("Missed semicolon", "word" === r[0] ? r[3] + 1 : r[2])
                    }
                    colon(e) {
                        let t, r, s, n = 0;
                        for (let [o, i] of e.entries()) {
                            if (t = i, r = t[0], "(" === r && (n += 1), ")" === r && (n -= 1), 0 === n && ":" === r) {
                                if (s) {
                                    if ("word" === s[0] && "progid" === s[1]) continue;
                                    return o
                                }
                                this.doubleColon(t)
                            }
                            s = t
                        }
                        return !1
                    }
                    comment(e) {
                        let t = new pi;
                        this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++;
                        let r = e[1].slice(2, -2);
                        if (/^\s*$/.test(r)) t.text = "", t.raws.left = r, t.raws.right = "";
                        else {
                            let e = r.match(/^(\s*)([^]*\S)(\s*)$/);
                            t.text = e[2], t.raws.left = e[1], t.raws.right = e[3]
                        }
                    }
                    createTokenizer() {
                        this.tokenizer = ui(this.input)
                    }
                    decl(e, t) {
                        let r = new hi;
                        this.init(r, e[0][2]);
                        let s, n = e[e.length - 1];
                        for (";" === n[0] && (this.semicolon = !0, e.pop()), r.source.end = this.getPosition(n[3] || n[2] || function(e) {
                                for (let t = e.length - 1; t >= 0; t--) {
                                    let r = e[t],
                                        s = r[3] || r[2];
                                    if (s) return s
                                }
                            }(e)), r.source.end.offset++;
                            "word" !== e[0][0];) 1 === e.length && this.unknownWord(e), r.raws.before += e.shift()[1];
                        for (r.source.start = this.getPosition(e[0][2]), r.prop = ""; e.length;) {
                            let t = e[0][0];
                            if (":" === t || "space" === t || "comment" === t) break;
                            r.prop += e.shift()[1]
                        }
                        for (r.raws.between = ""; e.length;) {
                            if (s = e.shift(), ":" === s[0]) {
                                r.raws.between += s[1];
                                break
                            }
                            "word" === s[0] && /\w/.test(s[1]) && this.unknownWord([s]), r.raws.between += s[1]
                        }
                        "_" !== r.prop[0] && "*" !== r.prop[0] || (r.raws.before += r.prop[0], r.prop = r.prop.slice(1));
                        let o, i = [];
                        for (; e.length && (o = e[0][0], "space" === o || "comment" === o);) i.push(e.shift());
                        this.precheckMissedSemicolon(e);
                        for (let t = e.length - 1; t >= 0; t--) {
                            if (s = e[t], "!important" === s[1].toLowerCase()) {
                                r.important = !0;
                                let s = this.stringFrom(e, t);
                                s = this.spacesFromEnd(e) + s, " !important" !== s && (r.raws.important = s);
                                break
                            }
                            if ("important" === s[1].toLowerCase()) {
                                let s = e.slice(0),
                                    n = "";
                                for (let e = t; e > 0; e--) {
                                    let t = s[e][0];
                                    if (0 === n.trim().indexOf("!") && "space" !== t) break;
                                    n = s.pop()[1] + n
                                }
                                0 === n.trim().indexOf("!") && (r.important = !0, r.raws.important = n, e = s)
                            }
                            if ("space" !== s[0] && "comment" !== s[0]) break
                        }
                        e.some((e => "space" !== e[0] && "comment" !== e[0])) && (r.raws.between += i.map((e => e[1])).join(""), i = []), this.raw(r, "value", i.concat(e), t), r.value.includes(":") && !t && this.checkMissedSemicolon(e)
                    }
                    doubleColon(e) {
                        throw this.input.error("Double colon", {
                            offset: e[2]
                        }, {
                            offset: e[2] + e[1].length
                        })
                    }
                    emptyRule(e) {
                        let t = new mi;
                        this.init(t, e[2]), t.selector = "", t.raws.between = "", this.current = t
                    }
                    end(e) {
                        this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e)
                    }
                    endFile() {
                        this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position())
                    }
                    freeSemicolon(e) {
                        if (this.spaces += e[1], this.current.nodes) {
                            let e = this.current.nodes[this.current.nodes.length - 1];
                            e && "rule" === e.type && !e.raws.ownSemicolon && (e.raws.ownSemicolon = this.spaces, this.spaces = "")
                        }
                    }
                    getPosition(e) {
                        let t = this.input.fromOffset(e);
                        return {
                            column: t.col,
                            line: t.line,
                            offset: e
                        }
                    }
                    init(e, t) {
                        this.current.push(e), e.source = {
                            input: this.input,
                            start: this.getPosition(t)
                        }, e.raws.before = this.spaces, this.spaces = "", "comment" !== e.type && (this.semicolon = !1)
                    }
                    other(e) {
                        let t = !1,
                            r = null,
                            s = !1,
                            n = null,
                            o = [],
                            i = e[1].startsWith("--"),
                            a = [],
                            l = e;
                        for (; l;) {
                            if (r = l[0], a.push(l), "(" === r || "[" === r) n || (n = l), o.push("(" === r ? ")" : "]");
                            else if (i && s && "{" === r) n || (n = l), o.push("}");
                            else if (0 === o.length) {
                                if (";" === r) {
                                    if (s) return void this.decl(a, i);
                                    break
                                }
                                if ("{" === r) return void this.rule(a);
                                if ("}" === r) {
                                    this.tokenizer.back(a.pop()), t = !0;
                                    break
                                }
                                ":" === r && (s = !0)
                            } else r === o[o.length - 1] && (o.pop(), 0 === o.length && (n = null));
                            l = this.tokenizer.nextToken()
                        }
                        if (this.tokenizer.endOfFile() && (t = !0), o.length > 0 && this.unclosedBracket(n), t && s) {
                            if (!i)
                                for (; a.length && (l = a[a.length - 1][0], "space" === l || "comment" === l);) this.tokenizer.back(a.pop());
                            this.decl(a, i)
                        } else this.unknownWord(a)
                    }
                    parse() {
                        let e;
                        for (; !this.tokenizer.endOfFile();) switch (e = this.tokenizer.nextToken(), e[0]) {
                            case "space":
                                this.spaces += e[1];
                                break;
                            case ";":
                                this.freeSemicolon(e);
                                break;
                            case "}":
                                this.end(e);
                                break;
                            case "comment":
                                this.comment(e);
                                break;
                            case "at-word":
                                this.atrule(e);
                                break;
                            case "{":
                                this.emptyRule(e);
                                break;
                            default:
                                this.other(e)
                        }
                        this.endFile()
                    }
                    precheckMissedSemicolon() {}
                    raw(e, t, r, s) {
                        let n, o, i, a, l = r.length,
                            c = "",
                            h = !0;
                        for (let e = 0; e < l; e += 1) n = r[e], o = n[0], "space" !== o || e !== l - 1 || s ? "comment" === o ? (a = r[e - 1] ? r[e - 1][0] : "empty", i = r[e + 1] ? r[e + 1][0] : "empty", gi[a] || gi[i] || "," === c.slice(-1) ? h = !1 : c += n[1]) : c += n[1] : h = !1;
                        if (!h) {
                            let s = r.reduce(((e, t) => e + t[1]), "");
                            e.raws[t] = {
                                raw: s,
                                value: c
                            }
                        }
                        e[t] = c
                    }
                    rule(e) {
                        e.pop();
                        let t = new mi;
                        this.init(t, e[0][2]), t.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(t, "selector", e), this.current = t
                    }
                    spacesAndCommentsFromEnd(e) {
                        let t, r = "";
                        for (; e.length && (t = e[e.length - 1][0], "space" === t || "comment" === t);) r = e.pop()[1] + r;
                        return r
                    }
                    spacesAndCommentsFromStart(e) {
                        let t, r = "";
                        for (; e.length && (t = e[0][0], "space" === t || "comment" === t);) r += e.shift()[1];
                        return r
                    }
                    spacesFromEnd(e) {
                        let t, r = "";
                        for (; e.length && (t = e[e.length - 1][0], "space" === t);) r = e.pop()[1] + r;
                        return r
                    }
                    stringFrom(e, t) {
                        let r = "";
                        for (let s = t; s < e.length; s++) r += e[s][1];
                        return e.splice(t, e.length - t), r
                    }
                    unclosedBlock() {
                        let e = this.current.source.start;
                        throw this.input.error("Unclosed block", e.line, e.column)
                    }
                    unclosedBracket(e) {
                        throw this.input.error("Unclosed bracket", {
                            offset: e[2]
                        }, {
                            offset: e[2] + 1
                        })
                    }
                    unexpectedClose(e) {
                        throw this.input.error("Unexpected }", {
                            offset: e[2]
                        }, {
                            offset: e[2] + 1
                        })
                    }
                    unknownWord(e) {
                        throw this.input.error("Unknown word", {
                            offset: e[0][2]
                        }, {
                            offset: e[0][2] + e[0][1].length
                        })
                    }
                    unnamedAtrule(e, t) {
                        throw this.input.error("At-rule without name", {
                            offset: t[2]
                        }, {
                            offset: t[2] + t[1].length
                        })
                    }
                },
                bi = Wn;

            function Si(e, t) {
                let r = new bi(e, t),
                    s = new wi(r);
                try {
                    s.parse()
                } catch (e) {
                    throw e
                }
                return s.root
            }
            var Ci = Si;
            Si.default = Si, yi.registerParse(Si);
            let {
                isClean: vi,
                my: Ii
            } = en, ki = qn, xi = an, Oi = go, Mi = Co, Ai = Oo, Ri = Ci, Ei = si;
            const Ti = {
                    atrule: "AtRule",
                    comment: "Comment",
                    decl: "Declaration",
                    document: "Document",
                    root: "Root",
                    rule: "Rule"
                },
                Ni = {
                    AtRule: !0,
                    AtRuleExit: !0,
                    Comment: !0,
                    CommentExit: !0,
                    Declaration: !0,
                    DeclarationExit: !0,
                    Document: !0,
                    DocumentExit: !0,
                    Once: !0,
                    OnceExit: !0,
                    postcssPlugin: !0,
                    prepare: !0,
                    Root: !0,
                    RootExit: !0,
                    Rule: !0,
                    RuleExit: !0
                },
                Li = {
                    Once: !0,
                    postcssPlugin: !0,
                    prepare: !0
                },
                Di = 0;

            function Pi(e) {
                return "object" == typeof e && "function" == typeof e.then
            }

            function Fi(e) {
                let t = !1,
                    r = Ti[e.type];
                return "decl" === e.type ? t = e.prop.toLowerCase() : "atrule" === e.type && (t = e.name.toLowerCase()), t && e.append ? [r, r + "-" + t, Di, r + "Exit", r + "Exit-" + t] : t ? [r, r + "-" + t, r + "Exit", r + "Exit-" + t] : e.append ? [r, Di, r + "Exit"] : [r, r + "Exit"]
            }

            function Bi(e) {
                let t;
                return t = "document" === e.type ? ["Document", Di, "DocumentExit"] : "root" === e.type ? ["Root", Di, "RootExit"] : Fi(e), {
                    eventIndex: 0,
                    events: t,
                    iterator: 0,
                    node: e,
                    visitorIndex: 0,
                    visitors: []
                }
            }

            function _i(e) {
                return e[vi] = !1, e.nodes && e.nodes.forEach((e => _i(e))), e
            }
            let Ui = {},
                zi = class e {
                    constructor(t, r, s) {
                        let n;
                        if (this.stringified = !1, this.processed = !1, "object" != typeof r || null === r || "root" !== r.type && "document" !== r.type)
                            if (r instanceof e || r instanceof Ai) n = _i(r.root), r.map && (void 0 === s.map && (s.map = {}), s.map.inline || (s.map.inline = !1), s.map.prev = r.map);
                            else {
                                let e = Ri;
                                s.syntax && (e = s.syntax.parse), s.parser && (e = s.parser), e.parse && (e = e.parse);
                                try {
                                    n = e(r, s)
                                } catch (e) {
                                    this.processed = !0, this.error = e
                                }
                                n && !n[Ii] && Oi.rebuild(n)
                            }
                        else n = _i(r);
                        this.result = new Ai(t, n, s), this.helpers = {
                            ...Ui,
                            postcss: Ui,
                            result: this.result
                        }, this.plugins = this.processor.plugins.map((e => "object" == typeof e && e.prepare ? {
                            ...e,
                            ...e.prepare(this.result)
                        } : e))
                    }
                    async () {
                        return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
                    } catch (e) {
                        return this.async().catch(e)
                    } finally(e) {
                        return this.async().then(e, e)
                    }
                    getAsyncError() {
                        throw new Error("Use process(css).then(cb) to work with async plugins")
                    }
                    handleError(e, t) {
                        let r = this.result.lastPlugin;
                        try {
                            t && t.addToError(e), this.error = e, "CssSyntaxError" !== e.name || e.plugin ? r.postcssVersion : (e.plugin = r.postcssPlugin, e.setMessage())
                        } catch (e) {
                            console && console.error && console.error(e)
                        }
                        return e
                    }
                    prepareVisitors() {
                        this.listeners = {};
                        let e = (e, t, r) => {
                            this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push([e, r])
                        };
                        for (let t of this.plugins)
                            if ("object" == typeof t)
                                for (let r in t) {
                                    if (!Ni[r] && /^[A-Z]/.test(r)) throw new Error(`Unknown event ${r} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                                    if (!Li[r])
                                        if ("object" == typeof t[r])
                                            for (let s in t[r]) e(t, "*" === s ? r : r + "-" + s.toLowerCase(), t[r][s]);
                                        else "function" == typeof t[r] && e(t, r, t[r])
                                }
                        this.hasListener = Object.keys(this.listeners).length > 0
                    }
                    async runAsync() {
                        this.plugin = 0;
                        for (let e = 0; e < this.plugins.length; e++) {
                            let t = this.plugins[e],
                                r = this.runOnRoot(t);
                            if (Pi(r)) try {
                                await r
                            } catch (e) {
                                throw this.handleError(e)
                            }
                        }
                        if (this.prepareVisitors(), this.hasListener) {
                            let e = this.result.root;
                            for (; !e[vi];) {
                                e[vi] = !0;
                                let t = [Bi(e)];
                                for (; t.length > 0;) {
                                    let e = this.visitTick(t);
                                    if (Pi(e)) try {
                                        await e
                                    } catch (e) {
                                        let r = t[t.length - 1].node;
                                        throw this.handleError(e, r)
                                    }
                                }
                            }
                            if (this.listeners.OnceExit)
                                for (let [t, r] of this.listeners.OnceExit) {
                                    this.result.lastPlugin = t;
                                    try {
                                        if ("document" === e.type) {
                                            let t = e.nodes.map((e => r(e, this.helpers)));
                                            await Promise.all(t)
                                        } else await r(e, this.helpers)
                                    } catch (e) {
                                        throw this.handleError(e)
                                    }
                                }
                        }
                        return this.processed = !0, this.stringify()
                    }
                    runOnRoot(e) {
                        this.result.lastPlugin = e;
                        try {
                            if ("object" == typeof e && e.Once) {
                                if ("document" === this.result.root.type) {
                                    let t = this.result.root.nodes.map((t => e.Once(t, this.helpers)));
                                    return Pi(t[0]) ? Promise.all(t) : t
                                }
                                return e.Once(this.result.root, this.helpers)
                            }
                            if ("function" == typeof e) return e(this.result.root, this.result)
                        } catch (e) {
                            throw this.handleError(e)
                        }
                    }
                    stringify() {
                        if (this.error) throw this.error;
                        if (this.stringified) return this.result;
                        this.stringified = !0, this.sync();
                        let e = this.result.opts,
                            t = xi;
                        e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
                        let r = new ki(t, this.result.root, this.result.opts).generate();
                        return this.result.css = r[0], this.result.map = r[1], this.result
                    }
                    sync() {
                        if (this.error) throw this.error;
                        if (this.processed) return this.result;
                        if (this.processed = !0, this.processing) throw this.getAsyncError();
                        for (let e of this.plugins) {
                            if (Pi(this.runOnRoot(e))) throw this.getAsyncError()
                        }
                        if (this.prepareVisitors(), this.hasListener) {
                            let e = this.result.root;
                            for (; !e[vi];) e[vi] = !0, this.walkSync(e);
                            if (this.listeners.OnceExit)
                                if ("document" === e.type)
                                    for (let t of e.nodes) this.visitSync(this.listeners.OnceExit, t);
                                else this.visitSync(this.listeners.OnceExit, e)
                        }
                        return this.result
                    }
                    then(e, t) {
                        return this.async().then(e, t)
                    }
                    toString() {
                        return this.css
                    }
                    visitSync(e, t) {
                        for (let [r, s] of e) {
                            let e;
                            this.result.lastPlugin = r;
                            try {
                                e = s(t, this.helpers)
                            } catch (e) {
                                throw this.handleError(e, t.proxyOf)
                            }
                            if ("root" !== t.type && "document" !== t.type && !t.parent) return !0;
                            if (Pi(e)) throw this.getAsyncError()
                        }
                    }
                    visitTick(e) {
                        let t = e[e.length - 1],
                            {
                                node: r,
                                visitors: s
                            } = t;
                        if ("root" !== r.type && "document" !== r.type && !r.parent) return void e.pop();
                        if (s.length > 0 && t.visitorIndex < s.length) {
                            let [e, n] = s[t.visitorIndex];
                            t.visitorIndex += 1, t.visitorIndex === s.length && (t.visitors = [], t.visitorIndex = 0), this.result.lastPlugin = e;
                            try {
                                return n(r.toProxy(), this.helpers)
                            } catch (e) {
                                throw this.handleError(e, r)
                            }
                        }
                        if (0 !== t.iterator) {
                            let s, n = t.iterator;
                            for (; s = r.nodes[r.indexes[n]];)
                                if (r.indexes[n] += 1, !s[vi]) return s[vi] = !0, void e.push(Bi(s));
                            t.iterator = 0, delete r.indexes[n]
                        }
                        let n = t.events;
                        for (; t.eventIndex < n.length;) {
                            let e = n[t.eventIndex];
                            if (t.eventIndex += 1, e === Di) return void(r.nodes && r.nodes.length && (r[vi] = !0, t.iterator = r.getIterator()));
                            if (this.listeners[e]) return void(t.visitors = this.listeners[e])
                        }
                        e.pop()
                    }
                    walkSync(e) {
                        e[vi] = !0;
                        let t = Fi(e);
                        for (let r of t)
                            if (r === Di) e.nodes && e.each((e => {
                                e[vi] || this.walkSync(e)
                            }));
                            else {
                                let t = this.listeners[r];
                                if (t && this.visitSync(t, e.toProxy())) return
                            }
                    }
                    warnings() {
                        return this.sync().warnings()
                    }
                    get content() {
                        return this.stringify().content
                    }
                    get css() {
                        return this.stringify().css
                    }
                    get map() {
                        return this.stringify().map
                    }
                    get messages() {
                        return this.sync().messages
                    }
                    get opts() {
                        return this.result.opts
                    }
                    get processor() {
                        return this.result.processor
                    }
                    get root() {
                        return this.sync().root
                    }
                    get[Symbol.toStringTag]() {
                        return "LazyResult"
                    }
                };
            zi.registerPostcss = e => {
                Ui = e
            };
            var ji = zi;
            zi.default = zi, Ei.registerLazyResult(zi), Mi.registerLazyResult(zi);
            let Wi = qn,
                Vi = an,
                Gi = Ci;
            const Zi = Oo;
            let Yi = class {
                constructor(e, t, r) {
                    let s;
                    t = t.toString(), this.stringified = !1, this._processor = e, this._css = t, this._opts = r, this._map = void 0;
                    let n = Vi;
                    this.result = new Zi(this._processor, s, this._opts), this.result.css = t;
                    let o = this;
                    Object.defineProperty(this.result, "root", {
                        get: () => o.root
                    });
                    let i = new Wi(n, s, this._opts, t);
                    if (i.isMap()) {
                        let [e, t] = i.generate();
                        e && (this.result.css = e), t && (this.result.map = t)
                    } else i.clearAnnotation(), this.result.css = i.css
                }
                async () {
                    return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
                } catch (e) {
                    return this.async().catch(e)
                } finally(e) {
                    return this.async().then(e, e)
                }
                sync() {
                    if (this.error) throw this.error;
                    return this.result
                }
                then(e, t) {
                    return this.async().then(e, t)
                }
                toString() {
                    return this._css
                }
                warnings() {
                    return []
                }
                get content() {
                    return this.result.css
                }
                get css() {
                    return this.result.css
                }
                get map() {
                    return this.result.map
                }
                get messages() {
                    return []
                }
                get opts() {
                    return this.result.opts
                }
                get processor() {
                    return this.result.processor
                }
                get root() {
                    if (this._root) return this._root;
                    let e, t = Gi;
                    try {
                        e = t(this._css, this._opts)
                    } catch (e) {
                        this.error = e
                    }
                    if (this.error) throw this.error;
                    return this._root = e, e
                }
                get[Symbol.toStringTag]() {
                    return "NoWorkResult"
                }
            };
            var Ji = Yi;
            Yi.default = Yi;
            let Xi = Ji,
                Hi = ji,
                Ki = Co,
                $i = si,
                Qi = class {
                    constructor(e = []) {
                        this.version = "8.4.38", this.plugins = this.normalize(e)
                    }
                    normalize(e) {
                        let t = [];
                        for (let r of e)
                            if (!0 === r.postcss ? r = r() : r.postcss && (r = r.postcss), "object" == typeof r && Array.isArray(r.plugins)) t = t.concat(r.plugins);
                            else if ("object" == typeof r && r.postcssPlugin) t.push(r);
                        else if ("function" == typeof r) t.push(r);
                        else {
                            if ("object" != typeof r || !r.parse && !r.stringify) throw new Error(r + " is not a PostCSS plugin")
                        }
                        return t
                    }
                    process(e, t = {}) {
                        return this.plugins.length || t.parser || t.stringifier || t.syntax ? new Hi(this, e, t) : new Xi(this, e, t)
                    }
                    use(e) {
                        return this.plugins = this.plugins.concat(this.normalize([e])), this
                    }
                };
            var qi = Qi;
            Qi.default = Qi, $i.registerProcessor(Qi), Ki.registerProcessor(Qi);
            let ea = wn,
                ta = Mn,
                ra = ro,
                sa = Qo,
                na = Wn,
                oa = si,
                ia = ci;

            function aa(e, t) {
                if (Array.isArray(e)) return e.map((e => aa(e)));
                let {
                    inputs: r,
                    ...s
                } = e;
                if (r) {
                    t = [];
                    for (let e of r) {
                        let r = {
                            ...e,
                            __proto__: na.prototype
                        };
                        r.map && (r.map = {
                            ...r.map,
                            __proto__: ta.prototype
                        }), t.push(r)
                    }
                }
                if (s.nodes && (s.nodes = e.nodes.map((e => aa(e, t)))), s.source) {
                    let {
                        inputId: e,
                        ...r
                    } = s.source;
                    s.source = r, null != e && (s.source.input = t[e])
                }
                if ("root" === s.type) return new oa(s);
                if ("decl" === s.type) return new ea(s);
                if ("rule" === s.type) return new ia(s);
                if ("comment" === s.type) return new ra(s);
                if ("atrule" === s.type) return new sa(s);
                throw new Error("Unknown node type: " + e.type)
            }
            var la = aa;
            aa.default = aa;
            let ca = qs,
                ha = wn,
                ua = ji,
                pa = go,
                da = qi,
                fa = an,
                ma = la,
                ga = Co,
                ya = Io,
                wa = ro,
                ba = Qo,
                Sa = Oo,
                Ca = Wn,
                va = Ci,
                Ia = oi,
                ka = ci,
                xa = si,
                Oa = mn;

            function Ma(...e) {
                return 1 === e.length && Array.isArray(e[0]) && (e = e[0]), new da(e)
            }
            Ma.plugin = function(e, t) {
                let r, s = !1;

                function n(...r) {
                    console && console.warn && !s && (s = !0, console.warn(e + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), "MISSING_ENV_VAR".LANG && "MISSING_ENV_VAR".LANG.startsWith("cn") && console.warn(e + ": 里面 postcss.plugin 被弃用. 迁移指南:\nhttps://www.w3ctech.com/topic/2226"));
                    let n = t(...r);
                    return n.postcssPlugin = e, n.postcssVersion = (new da).version, n
                }
                return Object.defineProperty(n, "postcss", {
                    get: () => (r || (r = n()), r)
                }), n.process = function(e, t, r) {
                    return Ma([n(r)]).process(e, t)
                }, n
            }, Ma.stringify = fa, Ma.parse = va, Ma.fromJSON = ma, Ma.list = Ia, Ma.comment = e => new wa(e), Ma.atRule = e => new ba(e), Ma.decl = e => new ha(e), Ma.rule = e => new ka(e), Ma.root = e => new xa(e), Ma.document = e => new ga(e), Ma.CssSyntaxError = ca, Ma.Declaration = ha, Ma.Container = pa, Ma.Processor = da, Ma.Document = ga, Ma.Comment = wa, Ma.Warning = ya, Ma.AtRule = ba, Ma.Result = Sa, Ma.Input = Ca, Ma.Rule = ka, Ma.Root = xa, Ma.Node = Oa, ua.registerPostcss(Ma);
            var Aa = Ma;
            Ma.default = Ma;
            const Ra = Vs(Aa);
            Ra.stringify, Ra.fromJSON, Ra.plugin, Ra.parse, Ra.list, Ra.document, Ra.comment, Ra.atRule, Ra.rule, Ra.decl, Ra.root, Ra.CssSyntaxError, Ra.Declaration, Ra.Container, Ra.Processor, Ra.Document, Ra.Comment, Ra.Warning, Ra.AtRule, Ra.Result, Ra.Input, Ra.Rule, Ra.Root, Ra.Node;
            class Ea {
                constructor(...e) {
                    Ws(this, "parentElement", null), Ws(this, "parentNode", null), Ws(this, "ownerDocument"), Ws(this, "firstChild", null), Ws(this, "lastChild", null), Ws(this, "previousSibling", null), Ws(this, "nextSibling", null), Ws(this, "ELEMENT_NODE", 1), Ws(this, "TEXT_NODE", 3), Ws(this, "nodeType"), Ws(this, "nodeName"), Ws(this, "RRNodeType")
                }
                get childNodes() {
                    const e = [];
                    let t = this.firstChild;
                    for (; t;) e.push(t), t = t.nextSibling;
                    return e
                }
                contains(e) {
                    if (!(e instanceof Ea)) return !1;
                    if (e.ownerDocument !== this.ownerDocument) return !1;
                    if (e === this) return !0;
                    for (; e.parentNode;) {
                        if (e.parentNode === this) return !0;
                        e = e.parentNode
                    }
                    return !1
                }
                appendChild(e) {
                    throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
                }
                insertBefore(e, t) {
                    throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
                }
                removeChild(e) {
                    throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
                }
                toString() {
                    return "RRNode"
                }
            }
            const Ta = {
                    Node: ["childNodes", "parentNode", "parentElement", "textContent"],
                    ShadowRoot: ["host", "styleSheets"],
                    Element: ["shadowRoot", "querySelector", "querySelectorAll"],
                    MutationObserver: []
                },
                Na = {
                    Node: ["contains", "getRootNode"],
                    ShadowRoot: ["getSelection"],
                    Element: [],
                    MutationObserver: ["constructor"]
                },
                La = {};

            function Da(e) {
                if (La[e]) return La[e];
                const t = function(e) {
                        var t, r;
                        const s = null == (r = null == (t = null == globalThis ? void 0 : globalThis.Zone) ? void 0 : t.__symbol__) ? void 0 : r.call(t, e);
                        return s && globalThis[s] ? globalThis[s] : void 0
                    }(e) || globalThis[e],
                    r = t.prototype,
                    s = e in Ta ? Ta[e] : void 0,
                    n = Boolean(s && s.every((e => {
                        var t, s;
                        return Boolean(null == (s = null == (t = Object.getOwnPropertyDescriptor(r, e)) ? void 0 : t.get) ? void 0 : s.toString().includes("[native code]"))
                    }))),
                    o = e in Na ? Na[e] : void 0,
                    i = Boolean(o && o.every((e => {
                        var t;
                        return "function" == typeof r[e] && (null == (t = r[e]) ? void 0 : t.toString().includes("[native code]"))
                    })));
                if (n && i) return La[e] = t.prototype, t.prototype;
                try {
                    const s = document.createElement("iframe");
                    document.body.appendChild(s);
                    const n = s.contentWindow;
                    if (!n) return t.prototype;
                    const o = n[e].prototype;
                    return document.body.removeChild(s), o ? La[e] = o : r
                } catch {
                    return r
                }
            }
            const Pa = {};

            function Fa(e, t, r) {
                var s;
                const n = `${e}.${String(r)}`;
                if (Pa[n]) return Pa[n].call(t);
                const o = Da(e),
                    i = null == (s = Object.getOwnPropertyDescriptor(o, r)) ? void 0 : s.get;
                return i ? (Pa[n] = i, i.call(t)) : t[r]
            }
            const Ba = {};

            function _a(e, t, r) {
                const s = `${e}.${String(r)}`;
                if (Ba[s]) return Ba[s].bind(t);
                const n = Da(e)[r];
                return "function" != typeof n ? t[r] : (Ba[s] = n, n.bind(t))
            }

            function Ua() {
                return Da("MutationObserver").constructor
            }
            const za = {
                childNodes: function(e) {
                    return Fa("Node", e, "childNodes")
                },
                parentNode: function(e) {
                    return Fa("Node", e, "parentNode")
                },
                parentElement: function(e) {
                    return Fa("Node", e, "parentElement")
                },
                textContent: function(e) {
                    return Fa("Node", e, "textContent")
                },
                contains: function(e, t) {
                    return _a("Node", e, "contains")(t)
                },
                getRootNode: function(e) {
                    return _a("Node", e, "getRootNode")()
                },
                host: function(e) {
                    return e && "host" in e ? Fa("ShadowRoot", e, "host") : null
                },
                styleSheets: function(e) {
                    return e.styleSheets
                },
                shadowRoot: function(e) {
                    return e && "shadowRoot" in e ? Fa("Element", e, "shadowRoot") : null
                },
                querySelector: function(e, t) {
                    return Fa("Element", e, "querySelector")(t)
                },
                querySelectorAll: function(e, t) {
                    return Fa("Element", e, "querySelectorAll")(t)
                },
                mutationObserver: Ua
            };

            function ja(e, t, r = document) {
                const s = {
                    capture: !0,
                    passive: !0
                };
                return r.addEventListener(e, t, s), () => r.removeEventListener(e, t, s)
            }
            const Wa = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
            let Va = {
                map: {},
                getId: () => (console.error(Wa), -1),
                getNode: () => (console.error(Wa), null),
                removeNodeFromMap() {
                    console.error(Wa)
                },
                has: () => (console.error(Wa), !1),
                reset() {
                    console.error(Wa)
                }
            };

            function Ga(e, t, r = {}) {
                let s = null,
                    n = 0;
                return function(...o) {
                    const i = Date.now();
                    n || !1 !== r.leading || (n = i);
                    const a = t - (i - n),
                        l = this;
                    a <= 0 || a > t ? (s && (clearTimeout(s), s = null), n = i, e.apply(l, o)) : s || !1 === r.trailing || (s = setTimeout((() => {
                        n = !1 === r.leading ? 0 : Date.now(), s = null, e.apply(l, o)
                    }), a))
                }
            }

            function Za(e, t, r, s, n = window) {
                const o = n.Object.getOwnPropertyDescriptor(e, t);
                return n.Object.defineProperty(e, t, s ? r : {
                    set(e) {
                        setTimeout((() => {
                            r.set.call(this, e)
                        }), 0), o && o.set && o.set.call(this, e)
                    }
                }), () => Za(e, t, o || {}, !0)
            }

            function Ya(e, t, r) {
                try {
                    if (!(t in e)) return () => {};
                    const s = e[t],
                        n = r(s);
                    return "function" == typeof n && (n.prototype = n.prototype || {}, Object.defineProperties(n, {
                        __rrweb_original__: {
                            enumerable: !1,
                            value: s
                        }
                    })), e[t] = n, () => {
                        e[t] = s
                    }
                } catch {
                    return () => {}
                }
            }
            "undefined" != typeof window && window.Proxy && window.Reflect && (Va = new Proxy(Va, {
                get: (e, t, r) => ("map" === t && console.error(Wa), Reflect.get(e, t, r))
            }));
            let Ja = Date.now;

            function Xa(e) {
                var t, r, s, n;
                const o = e.document;
                return {
                    left: o.scrollingElement ? o.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : o.documentElement.scrollLeft || (null == o ? void 0 : o.body) && (null == (t = za.parentElement(o.body)) ? void 0 : t.scrollLeft) || (null == (r = null == o ? void 0 : o.body) ? void 0 : r.scrollLeft) || 0,
                    top: o.scrollingElement ? o.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : (null == o ? void 0 : o.documentElement.scrollTop) || (null == o ? void 0 : o.body) && (null == (s = za.parentElement(o.body)) ? void 0 : s.scrollTop) || (null == (n = null == o ? void 0 : o.body) ? void 0 : n.scrollTop) || 0
                }
            }

            function Ha() {
                return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
            }

            function Ka() {
                return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
            }

            function $a(e) {
                if (!e) return null;
                return e.nodeType === e.ELEMENT_NODE ? e : za.parentElement(e)
            }

            function Qa(e, t, r, s) {
                if (!e) return !1;
                const n = $a(e);
                if (!n) return !1;
                try {
                    if ("string" == typeof t) {
                        if (n.classList.contains(t)) return !0;
                        if (s && null !== n.closest("." + t)) return !0
                    } else if ($(n, t, s)) return !0
                } catch (e) {}
                if (r) {
                    if (n.matches(r)) return !0;
                    if (s && null !== n.closest(r)) return !0
                }
                return !1
            }

            function qa(e, t, r) {
                return !("TITLE" !== e.tagName || !r.headTitleMutations) || t.getId(e) === U
            }

            function el(e, t) {
                if (b(e)) return !1;
                const r = t.getId(e);
                if (!t.has(r)) return !0;
                const s = za.parentNode(e);
                return (!s || s.nodeType !== e.DOCUMENT_NODE) && (!s || el(s, t))
            }

            function tl(e) {
                return Boolean(e.changedTouches)
            }

            function rl(e, t) {
                return Boolean("IFRAME" === e.nodeName && t.getMeta(e))
            }

            function sl(e, t) {
                return Boolean("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
            }

            function nl(e) {
                return !!e && (e instanceof Ea && "shadowRoot" in e ? Boolean(e.shadowRoot) : Boolean(za.shadowRoot(e)))
            }
            /[1-9][0-9]{12}/.test(Date.now().toString()) || (Ja = () => (new Date).getTime());
            class ol {
                constructor() {
                    o(this, "id", 1), o(this, "styleIDMap", new WeakMap), o(this, "idStyleMap", new Map)
                }
                getId(e) {
                    return this.styleIDMap.get(e) ?? -1
                }
                has(e) {
                    return this.styleIDMap.has(e)
                }
                add(e, t) {
                    if (this.has(e)) return this.getId(e);
                    let r;
                    return r = void 0 === t ? this.id++ : t, this.styleIDMap.set(e, r), this.idStyleMap.set(r, e), r
                }
                getStyle(e) {
                    return this.idStyleMap.get(e) || null
                }
                reset() {
                    this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
                }
                generateId() {
                    return this.id++
                }
            }

            function il(e) {
                var t;
                let r = null;
                return "getRootNode" in e && (null == (t = za.getRootNode(e)) ? void 0 : t.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && za.host(za.getRootNode(e)) && (r = za.host(za.getRootNode(e))), r
            }

            function al(e) {
                const t = e.ownerDocument;
                if (!t) return !1;
                const r = function(e) {
                    let t, r = e;
                    for (; t = il(r);) r = t;
                    return r
                }(e);
                return za.contains(t, r)
            }

            function ll(e) {
                const t = e.ownerDocument;
                return !!t && (za.contains(t, e) || al(e))
            }
            var cl = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", e))(cl || {}),
                hl = (e => (e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", e[e.CustomElement = 16] = "CustomElement", e))(hl || {}),
                ul = (e => (e[e.MouseUp = 0] = "MouseUp", e[e.MouseDown = 1] = "MouseDown", e[e.Click = 2] = "Click", e[e.ContextMenu = 3] = "ContextMenu", e[e.DblClick = 4] = "DblClick", e[e.Focus = 5] = "Focus", e[e.Blur = 6] = "Blur", e[e.TouchStart = 7] = "TouchStart", e[e.TouchMove_Departed = 8] = "TouchMove_Departed", e[e.TouchEnd = 9] = "TouchEnd", e[e.TouchCancel = 10] = "TouchCancel", e))(ul || {}),
                pl = (e => (e[e.Mouse = 0] = "Mouse", e[e.Pen = 1] = "Pen", e[e.Touch = 2] = "Touch", e))(pl || {}),
                dl = (e => (e[e["2D"] = 0] = "2D", e[e.WebGL = 1] = "WebGL", e[e.WebGL2 = 2] = "WebGL2", e))(dl || {}),
                fl = (e => (e[e.Play = 0] = "Play", e[e.Pause = 1] = "Pause", e[e.Seeked = 2] = "Seeked", e[e.VolumeChange = 3] = "VolumeChange", e[e.RateChange = 4] = "RateChange", e))(fl || {}),
                ml = (e => (e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment", e))(ml || {});

            function gl(e) {
                return "__ln" in e
            }
            class yl {
                constructor() {
                    o(this, "length", 0), o(this, "head", null), o(this, "tail", null)
                }
                get(e) {
                    if (e >= this.length) throw new Error("Position outside of list range");
                    let t = this.head;
                    for (let r = 0; r < e; r++) t = (null == t ? void 0 : t.next) || null;
                    return t
                }
                addNode(e) {
                    const t = {
                        value: e,
                        previous: null,
                        next: null
                    };
                    if (e.__ln = t, e.previousSibling && gl(e.previousSibling)) {
                        const r = e.previousSibling.__ln.next;
                        t.next = r, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, r && (r.previous = t)
                    } else if (e.nextSibling && gl(e.nextSibling) && e.nextSibling.__ln.previous) {
                        const r = e.nextSibling.__ln.previous;
                        t.previous = r, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, r && (r.next = t)
                    } else this.head && (this.head.previous = t), t.next = this.head, this.head = t;
                    null === t.next && (this.tail = t), this.length++
                }
                removeNode(e) {
                    const t = e.__ln;
                    this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, this.length--)
                }
            }
            const wl = (e, t) => `${e}@${t}`;
            class bl {
                constructor() {
                    o(this, "frozen", !1), o(this, "locked", !1), o(this, "texts", []), o(this, "attributes", []), o(this, "attributeMap", new WeakMap), o(this, "removes", []), o(this, "mapRemoves", []), o(this, "movedMap", {}), o(this, "addedSet", new Set), o(this, "movedSet", new Set), o(this, "droppedSet", new Set), o(this, "removesSubTreeCache", new Set), o(this, "mutationCb"), o(this, "blockClass"), o(this, "blockSelector"), o(this, "maskTextClass"), o(this, "maskTextSelector"), o(this, "inlineStylesheet"), o(this, "maskInputOptions"), o(this, "maskTextFn"), o(this, "maskInputFn"), o(this, "keepIframeSrcFn"), o(this, "recordCanvas"), o(this, "inlineImages"), o(this, "slimDOMOptions"), o(this, "dataURLOptions"), o(this, "doc"), o(this, "mirror"), o(this, "iframeManager"), o(this, "stylesheetManager"), o(this, "shadowDomManager"), o(this, "canvasManager"), o(this, "processedNodeManager"), o(this, "unattachedDoc"), o(this, "processMutations", (e => {
                        e.forEach(this.processMutation), this.emit()
                    })), o(this, "emit", (() => {
                        if (this.frozen || this.locked) return;
                        const e = [],
                            t = new Set,
                            r = new yl,
                            s = e => {
                                let t = e,
                                    r = U;
                                for (; r === U;) t = t && t.nextSibling, r = t && this.mirror.getId(t);
                                return r
                            },
                            n = n => {
                                const o = za.parentNode(n);
                                if (!o || !ll(n)) return;
                                let i = !1;
                                if (n.nodeType === Node.TEXT_NODE) {
                                    const e = o.tagName;
                                    if ("TEXTAREA" === e) return;
                                    "STYLE" === e && this.addedSet.has(o) && (i = !0)
                                }
                                const a = b(o) ? this.mirror.getId(il(n)) : this.mirror.getId(o),
                                    l = s(n);
                                if (-1 === a || -1 === l) return r.addNode(n);
                                const c = te(n, {
                                    doc: this.doc,
                                    mirror: this.mirror,
                                    blockClass: this.blockClass,
                                    blockSelector: this.blockSelector,
                                    maskTextClass: this.maskTextClass,
                                    maskTextSelector: this.maskTextSelector,
                                    skipChild: !0,
                                    newlyAddedElement: !0,
                                    inlineStylesheet: this.inlineStylesheet,
                                    maskInputOptions: this.maskInputOptions,
                                    maskTextFn: this.maskTextFn,
                                    maskInputFn: this.maskInputFn,
                                    slimDOMOptions: this.slimDOMOptions,
                                    dataURLOptions: this.dataURLOptions,
                                    recordCanvas: this.recordCanvas,
                                    inlineImages: this.inlineImages,
                                    onSerialize: e => {
                                        rl(e, this.mirror) && this.iframeManager.addIframe(e), sl(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), nl(n) && this.shadowDomManager.addShadowRoot(za.shadowRoot(n), this.doc)
                                    },
                                    onIframeLoad: (e, t) => {
                                        this.iframeManager.attachIframe(e, t), this.shadowDomManager.observeAttachShadow(e)
                                    },
                                    onStylesheetLoad: (e, t) => {
                                        this.stylesheetManager.attachLinkElement(e, t)
                                    },
                                    cssCaptured: i
                                });
                                c && (e.push({
                                    parentId: a,
                                    nextId: l,
                                    node: c
                                }), t.add(c.id))
                            };
                        for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                        for (const e of this.movedSet) Cl(this.removesSubTreeCache, e, this.mirror) && !this.movedSet.has(za.parentNode(e)) || n(e);
                        for (const e of this.addedSet) vl(this.droppedSet, e) || Cl(this.removesSubTreeCache, e, this.mirror) ? vl(this.movedSet, e) ? n(e) : this.droppedSet.add(e) : n(e);
                        let o = null;
                        for (; r.length;) {
                            let e = null;
                            if (o) {
                                const t = this.mirror.getId(za.parentNode(o.value)),
                                    r = s(o.value); - 1 !== t && -1 !== r && (e = o)
                            }
                            if (!e) {
                                let t = r.tail;
                                for (; t;) {
                                    const r = t;
                                    if (t = t.previous, r) {
                                        const t = this.mirror.getId(za.parentNode(r.value));
                                        if (-1 === s(r.value)) continue;
                                        if (-1 !== t) {
                                            e = r;
                                            break
                                        } {
                                            const t = r.value,
                                                s = za.parentNode(t);
                                            if (s && s.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                                const t = za.host(s);
                                                if (-1 !== this.mirror.getId(t)) {
                                                    e = r;
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (!e) {
                                for (; r.head;) r.removeNode(r.head.value);
                                break
                            }
                            o = e.previous, r.removeNode(e.value), n(e.value)
                        }
                        const i = {
                            texts: this.texts.map((e => {
                                const t = e.node,
                                    r = za.parentNode(t);
                                return r && "TEXTAREA" === r.tagName && this.genTextAreaValueMutation(r), {
                                    id: this.mirror.getId(t),
                                    value: e.value
                                }
                            })).filter((e => !t.has(e.id))).filter((e => this.mirror.has(e.id))),
                            attributes: this.attributes.map((e => {
                                const {
                                    attributes: t
                                } = e;
                                if ("string" == typeof t.style) {
                                    const r = JSON.stringify(e.styleDiff),
                                        s = JSON.stringify(e._unchangedStyles);
                                    r.length < t.style.length && (r + s).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                                }
                                return {
                                    id: this.mirror.getId(e.node),
                                    attributes: t
                                }
                            })).filter((e => !t.has(e.id))).filter((e => this.mirror.has(e.id))),
                            removes: this.removes,
                            adds: e
                        };
                        (i.texts.length || i.attributes.length || i.removes.length || i.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, this.mutationCb(i))
                    })), o(this, "genTextAreaValueMutation", (e => {
                        let t = this.attributeMap.get(e);
                        t || (t = {
                            node: e,
                            attributes: {},
                            styleDiff: {},
                            _unchangedStyles: {}
                        }, this.attributes.push(t), this.attributeMap.set(e, t));
                        const r = Array.from(za.childNodes(e), (e => za.textContent(e) || "")).join("");
                        t.attributes.value = k({
                            element: e,
                            maskInputOptions: this.maskInputOptions,
                            tagName: e.tagName,
                            type: M(e),
                            value: r,
                            maskInputFn: this.maskInputFn
                        })
                    })), o(this, "processMutation", (e => {
                        if (!qa(e.target, this.mirror, this.slimDOMOptions)) switch (e.type) {
                            case "characterData": {
                                const t = za.textContent(e.target);
                                Qa(e.target, this.blockClass, this.blockSelector, !1) || t === e.oldValue || this.texts.push({
                                    value: Q(e.target, this.maskTextClass, this.maskTextSelector, !0) && t ? this.maskTextFn ? this.maskTextFn(t, $a(e.target)) : t.replace(/[\S]/g, "*") : t,
                                    node: e.target
                                });
                                break
                            }
                            case "attributes": {
                                const t = e.target;
                                let r = e.attributeName,
                                    s = e.target.getAttribute(r);
                                if ("value" === r) {
                                    const e = M(t);
                                    s = k({
                                        element: t,
                                        maskInputOptions: this.maskInputOptions,
                                        tagName: t.tagName,
                                        type: e,
                                        value: s,
                                        maskInputFn: this.maskInputFn
                                    })
                                }
                                if (Qa(e.target, this.blockClass, this.blockSelector, !1) || s === e.oldValue) return;
                                let n = this.attributeMap.get(e.target);
                                if ("IFRAME" === t.tagName && "src" === r && !this.keepIframeSrcFn(s)) {
                                    if (t.contentDocument) return;
                                    r = "rr_src"
                                }
                                if (n || (n = {
                                        node: e.target,
                                        attributes: {},
                                        styleDiff: {},
                                        _unchangedStyles: {}
                                    }, this.attributes.push(n), this.attributeMap.set(e.target, n)), "type" === r && "INPUT" === t.tagName && "password" === (e.oldValue || "").toLowerCase() && t.setAttribute("data-rr-is-password", "true"), !K(t.tagName, r))
                                    if (n.attributes[r] = H(this.doc, x(t.tagName), x(r), s), "style" === r) {
                                        if (!this.unattachedDoc) try {
                                            this.unattachedDoc = document.implementation.createHTMLDocument()
                                        } catch (e) {
                                            this.unattachedDoc = this.doc
                                        }
                                        const r = this.unattachedDoc.createElement("span");
                                        e.oldValue && r.setAttribute("style", e.oldValue);
                                        for (const e of Array.from(t.style)) {
                                            const s = t.style.getPropertyValue(e),
                                                o = t.style.getPropertyPriority(e);
                                            s !== r.style.getPropertyValue(e) || o !== r.style.getPropertyPriority(e) ? n.styleDiff[e] = "" === o ? s : [s, o] : n._unchangedStyles[e] = [s, o]
                                        }
                                        for (const e of Array.from(r.style)) "" === t.style.getPropertyValue(e) && (n.styleDiff[e] = !1)
                                    } else "open" === r && "DIALOG" === t.tagName && (t.matches("dialog:modal") ? n.attributes.rr_open_mode = "modal" : n.attributes.rr_open_mode = "non-modal");
                                break
                            }
                            case "childList":
                                if (Qa(e.target, this.blockClass, this.blockSelector, !0)) return;
                                if ("TEXTAREA" === e.target.tagName) return void this.genTextAreaValueMutation(e.target);
                                e.addedNodes.forEach((t => this.genAdds(t, e.target))), e.removedNodes.forEach((t => {
                                    const r = this.mirror.getId(t),
                                        s = b(e.target) ? this.mirror.getId(za.host(e.target)) : this.mirror.getId(e.target);
                                    Qa(e.target, this.blockClass, this.blockSelector, !1) || qa(t, this.mirror, this.slimDOMOptions) || ! function(e, t) {
                                        return -1 !== t.getId(e)
                                    }(t, this.mirror) || (this.addedSet.has(t) ? (Sl(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === r || el(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[wl(r, s)] ? Sl(this.movedSet, t) : (this.removes.push({
                                        parentId: s,
                                        id: r,
                                        isShadow: !(!b(e.target) || !S(e.target)) || void 0
                                    }), function(e, t) {
                                        const r = [e];
                                        for (; r.length;) {
                                            const e = r.pop();
                                            t.has(e) || (t.add(e), za.childNodes(e).forEach((e => r.push(e))))
                                        }
                                    }(t, this.removesSubTreeCache))), this.mapRemoves.push(t))
                                }))
                        }
                    })), o(this, "genAdds", ((e, t) => {
                        if (!this.processedNodeManager.inOtherBuffer(e, this) && !this.addedSet.has(e) && !this.movedSet.has(e)) {
                            if (this.mirror.hasNode(e)) {
                                if (qa(e, this.mirror, this.slimDOMOptions)) return;
                                this.movedSet.add(e);
                                let r = null;
                                t && this.mirror.hasNode(t) && (r = this.mirror.getId(t)), r && -1 !== r && (this.movedMap[wl(this.mirror.getId(e), r)] = !0)
                            } else this.addedSet.add(e), this.droppedSet.delete(e);
                            Qa(e, this.blockClass, this.blockSelector, !1) || (za.childNodes(e).forEach((e => this.genAdds(e))), nl(e) && za.childNodes(za.shadowRoot(e)).forEach((t => {
                                this.processedNodeManager.add(t, this), this.genAdds(t, e)
                            })))
                        }
                    }))
                }
                init(e) {
                    ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((t => {
                        this[t] = e[t]
                    }))
                }
                freeze() {
                    this.frozen = !0, this.canvasManager.freeze()
                }
                unfreeze() {
                    this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
                }
                isFrozen() {
                    return this.frozen
                }
                lock() {
                    this.locked = !0, this.canvasManager.lock()
                }
                unlock() {
                    this.locked = !1, this.canvasManager.unlock(), this.emit()
                }
                reset() {
                    this.shadowDomManager.reset(), this.canvasManager.reset()
                }
            }

            function Sl(e, t) {
                e.delete(t), za.childNodes(t).forEach((t => Sl(e, t)))
            }

            function Cl(e, t, r) {
                return 0 !== e.size && function(e, t, r) {
                    const s = za.parentNode(t);
                    return !!s && e.has(s)
                }(e, t)
            }

            function vl(e, t) {
                return 0 !== e.size && Il(e, t)
            }

            function Il(e, t) {
                const r = za.parentNode(t);
                return !!r && (!!e.has(r) || Il(e, r))
            }
            let kl;
            const xl = e => {
                if (!kl) return e;
                return (...t) => {
                    try {
                        return e(...t)
                    } catch (e) {
                        if (kl && !0 === kl(e)) return;
                        throw e
                    }
                }
            };

            function Ol(e) {
                return (...t) => {
                    try {
                        return e(...t)
                    } catch (e) {
                        try {
                            e._external_ = !0
                        } catch {}
                        throw e
                    }
                }
            }
            const Ml = [];

            function Al(e) {
                try {
                    if ("composedPath" in e) {
                        const t = e.composedPath();
                        if (t.length) return t[0]
                    } else if ("path" in e && e.path.length) return e.path[0]
                } catch {}
                return e && e.target
            }

            function Rl(e, t) {
                const r = new bl;
                Ml.push(r), r.init(e);
                const s = new(Ua())(xl(r.processMutations.bind(r)));
                return s.observe(t, {
                    attributes: !0,
                    attributeOldValue: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                }), s
            }

            function El({
                mouseInteractionCb: e,
                doc: t,
                mirror: r,
                blockClass: s,
                blockSelector: n,
                sampling: o
            }) {
                if (!1 === o.mouseInteraction) return () => {};
                const i = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
                    a = [];
                let l = null;
                return Object.keys(ul).filter((e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== i[e])).forEach((o => {
                    let i = x(o);
                    const c = (t => o => {
                        const i = Al(o);
                        if (Qa(i, s, n, !0)) return;
                        let a = null,
                            c = t;
                        if ("pointerType" in o) {
                            switch (o.pointerType) {
                                case "mouse":
                                    a = pl.Mouse;
                                    break;
                                case "touch":
                                    a = pl.Touch;
                                    break;
                                case "pen":
                                    a = pl.Pen
                            }
                            a === pl.Touch ? ul[t] === ul.MouseDown ? c = "TouchStart" : ul[t] === ul.MouseUp && (c = "TouchEnd") : pl.Pen
                        } else tl(o) && (a = pl.Touch);
                        null !== a ? (l = a, (c.startsWith("Touch") && a === pl.Touch || c.startsWith("Mouse") && a === pl.Mouse) && (a = null)) : ul[t] === ul.Click && (a = l, l = null);
                        const h = tl(o) ? o.changedTouches[0] : o;
                        if (!h) return;
                        const u = r.getId(i),
                            {
                                clientX: p,
                                clientY: d
                            } = h;
                        xl(e)({
                            type: ul[c],
                            id: u,
                            x: p,
                            y: d,
                            ...null !== a && {
                                pointerType: a
                            }
                        })
                    })(o);
                    if (window.PointerEvent) switch (ul[o]) {
                        case ul.MouseDown:
                        case ul.MouseUp:
                            i = i.replace("mouse", "pointer");
                            break;
                        case ul.TouchStart:
                        case ul.TouchEnd:
                            return
                    }
                    a.push(ja(i, c, t))
                })), xl((() => {
                    a.forEach((e => e()))
                }))
            }

            function Tl({
                scrollCb: e,
                doc: t,
                mirror: r,
                blockClass: s,
                blockSelector: n,
                sampling: o
            }) {
                return ja("scroll", xl(Ga(xl((o => {
                    const i = Al(o);
                    if (!i || Qa(i, s, n, !0)) return;
                    const a = r.getId(i);
                    if (i === t && t.defaultView) {
                        const r = Xa(t.defaultView);
                        e({
                            id: a,
                            x: r.left,
                            y: r.top
                        })
                    } else e({
                        id: a,
                        x: i.scrollLeft,
                        y: i.scrollTop
                    })
                })), o.scroll || 100)), t)
            }
            const Nl = ["INPUT", "TEXTAREA", "SELECT"],
                Ll = new WeakMap;

            function Dl(e) {
                return function(e, t) {
                    if (_l("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || _l("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || _l("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || _l("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
                        const r = Array.from(e.parentRule.cssRules).indexOf(e);
                        t.unshift(r)
                    } else if (e.parentStyleSheet) {
                        const r = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
                        t.unshift(r)
                    }
                    return t
                }(e, [])
            }

            function Pl(e, t, r) {
                let s, n;
                return e ? (e.ownerNode ? s = t.getId(e.ownerNode) : n = r.getId(e), {
                    styleId: n,
                    id: s
                }) : {}
            }

            function Fl({
                mirror: e,
                stylesheetManager: t
            }, r) {
                var s, n, o;
                let i = null;
                i = "#document" === r.nodeName ? e.getId(r) : e.getId(za.host(r));
                const a = "#document" === r.nodeName ? null == (s = r.defaultView) ? void 0 : s.Document : null == (o = null == (n = r.ownerDocument) ? void 0 : n.defaultView) ? void 0 : o.ShadowRoot,
                    l = (null == a ? void 0 : a.prototype) ? Object.getOwnPropertyDescriptor(null == a ? void 0 : a.prototype, "adoptedStyleSheets") : void 0;
                return null !== i && -1 !== i && a && l ? (Object.defineProperty(r, "adoptedStyleSheets", {
                    configurable: l.configurable,
                    enumerable: l.enumerable,
                    get() {
                        var e;
                        return null == (e = l.get) ? void 0 : e.call(this)
                    },
                    set(e) {
                        var r;
                        const s = null == (r = l.set) ? void 0 : r.call(this, e);
                        if (null !== i && -1 !== i) try {
                            t.adoptStyleSheets(e, i)
                        } catch (e) {}
                        return s
                    }
                }), xl((() => {
                    Object.defineProperty(r, "adoptedStyleSheets", {
                        configurable: l.configurable,
                        enumerable: l.enumerable,
                        get: l.get,
                        set: l.set
                    })
                }))) : () => {}
            }

            function Bl(e, t = {}) {
                const r = e.doc.defaultView;
                if (!r) return () => {};
                let s;
                ! function(e, t) {
                    const {
                        mutationCb: r,
                        mousemoveCb: s,
                        mouseInteractionCb: n,
                        scrollCb: o,
                        viewportResizeCb: i,
                        inputCb: a,
                        mediaInteractionCb: l,
                        styleSheetRuleCb: c,
                        styleDeclarationCb: h,
                        canvasMutationCb: u,
                        fontCb: p,
                        selectionCb: d,
                        customElementCb: f
                    } = e;
                    e.mutationCb = (...e) => {
                        t.mutation && t.mutation(...e), r(...e)
                    }, e.mousemoveCb = (...e) => {
                        t.mousemove && t.mousemove(...e), s(...e)
                    }, e.mouseInteractionCb = (...e) => {
                        t.mouseInteraction && t.mouseInteraction(...e), n(...e)
                    }, e.scrollCb = (...e) => {
                        t.scroll && t.scroll(...e), o(...e)
                    }, e.viewportResizeCb = (...e) => {
                        t.viewportResize && t.viewportResize(...e), i(...e)
                    }, e.inputCb = (...e) => {
                        t.input && t.input(...e), a(...e)
                    }, e.mediaInteractionCb = (...e) => {
                        t.mediaInteaction && t.mediaInteaction(...e), l(...e)
                    }, e.styleSheetRuleCb = (...e) => {
                        t.styleSheetRule && t.styleSheetRule(...e), c(...e)
                    }, e.styleDeclarationCb = (...e) => {
                        t.styleDeclaration && t.styleDeclaration(...e), h(...e)
                    }, e.canvasMutationCb = (...e) => {
                        t.canvasMutation && t.canvasMutation(...e), u(...e)
                    }, e.fontCb = (...e) => {
                        t.font && t.font(...e), p(...e)
                    }, e.selectionCb = (...e) => {
                        t.selection && t.selection(...e), d(...e)
                    }, e.customElementCb = (...e) => {
                        t.customElement && t.customElement(...e), f(...e)
                    }
                }(e, t), e.recordDOM && (s = Rl(e, e.doc));
                const n = function({
                        mousemoveCb: e,
                        sampling: t,
                        doc: r,
                        mirror: s
                    }) {
                        if (!1 === t.mousemove) return () => {};
                        const n = "number" == typeof t.mousemove ? t.mousemove : 50,
                            o = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500;
                        let i, a = [];
                        const l = Ga(xl((t => {
                                const r = Date.now() - i;
                                e(a.map((e => (e.timeOffset -= r, e))), t), a = [], i = null
                            })), o),
                            c = xl(Ga(xl((e => {
                                const t = Al(e),
                                    {
                                        clientX: r,
                                        clientY: n
                                    } = tl(e) ? e.changedTouches[0] : e;
                                i || (i = Ja()), a.push({
                                    x: r,
                                    y: n,
                                    id: s.getId(t),
                                    timeOffset: Ja() - i
                                }), l("undefined" != typeof DragEvent && e instanceof DragEvent ? hl.Drag : e instanceof MouseEvent ? hl.MouseMove : hl.TouchMove)
                            })), n, {
                                trailing: !1
                            })),
                            h = [ja("mousemove", c, r), ja("touchmove", c, r), ja("drag", c, r)];
                        return xl((() => {
                            h.forEach((e => e()))
                        }))
                    }(e),
                    o = El(e),
                    i = Tl(e),
                    a = function({
                        viewportResizeCb: e
                    }, {
                        win: t
                    }) {
                        let r = -1,
                            s = -1;
                        return ja("resize", xl(Ga(xl((() => {
                            const t = Ha(),
                                n = Ka();
                            r === t && s === n || (e({
                                width: Number(n),
                                height: Number(t)
                            }), r = t, s = n)
                        })), 200)), t)
                    }(e, {
                        win: r
                    }),
                    l = function({
                        inputCb: e,
                        doc: t,
                        mirror: r,
                        blockClass: s,
                        blockSelector: n,
                        ignoreClass: o,
                        ignoreSelector: i,
                        maskInputOptions: a,
                        maskInputFn: l,
                        sampling: c,
                        userTriggeredOnInput: h
                    }) {
                        function u(e) {
                            let r = Al(e);
                            const c = e.isTrusted,
                                u = r && r.tagName;
                            if (r && "OPTION" === u && (r = za.parentElement(r)), !r || !u || Nl.indexOf(u) < 0 || Qa(r, s, n, !0)) return;
                            if (r.classList.contains(o) || i && r.matches(i)) return;
                            let d = r.value,
                                f = !1;
                            const m = M(r) || "";
                            "radio" === m || "checkbox" === m ? f = r.checked : (a[u.toLowerCase()] || a[m]) && (d = k({
                                element: r,
                                maskInputOptions: a,
                                tagName: u,
                                type: m,
                                value: d,
                                maskInputFn: l
                            })), p(r, h ? {
                                text: d,
                                isChecked: f,
                                userTriggered: c
                            } : {
                                text: d,
                                isChecked: f
                            });
                            const g = r.name;
                            "radio" === m && g && f && t.querySelectorAll(`input[type="radio"][name="${g}"]`).forEach((e => {
                                if (e !== r) {
                                    const t = e.value;
                                    p(e, h ? {
                                        text: t,
                                        isChecked: !f,
                                        userTriggered: !1
                                    } : {
                                        text: t,
                                        isChecked: !f
                                    })
                                }
                            }))
                        }

                        function p(t, s) {
                            const n = Ll.get(t);
                            if (!n || n.text !== s.text || n.isChecked !== s.isChecked) {
                                Ll.set(t, s);
                                const n = r.getId(t);
                                xl(e)({
                                    ...s,
                                    id: n
                                })
                            }
                        }
                        const d = ("last" === c.input ? ["change"] : ["input", "change"]).map((e => ja(e, xl(u), t))),
                            f = t.defaultView;
                        if (!f) return () => {
                            d.forEach((e => e()))
                        };
                        const m = f.Object.getOwnPropertyDescriptor(f.HTMLInputElement.prototype, "value"),
                            g = [
                                [f.HTMLInputElement.prototype, "value"],
                                [f.HTMLInputElement.prototype, "checked"],
                                [f.HTMLSelectElement.prototype, "value"],
                                [f.HTMLTextAreaElement.prototype, "value"],
                                [f.HTMLSelectElement.prototype, "selectedIndex"],
                                [f.HTMLOptionElement.prototype, "selected"]
                            ];
                        return m && m.set && d.push(...g.map((e => Za(e[0], e[1], {
                            set() {
                                xl(u)({
                                    target: this,
                                    isTrusted: !1
                                })
                            }
                        }, !1, f)))), xl((() => {
                            d.forEach((e => e()))
                        }))
                    }(e),
                    c = function({
                        mediaInteractionCb: e,
                        blockClass: t,
                        blockSelector: r,
                        mirror: s,
                        sampling: n,
                        doc: o
                    }) {
                        const i = xl((o => Ga(xl((n => {
                                const i = Al(n);
                                if (!i || Qa(i, t, r, !0)) return;
                                const {
                                    currentTime: a,
                                    volume: l,
                                    muted: c,
                                    playbackRate: h,
                                    loop: u
                                } = i;
                                e({
                                    type: o,
                                    id: s.getId(i),
                                    currentTime: a,
                                    volume: l,
                                    muted: c,
                                    playbackRate: h,
                                    loop: u
                                })
                            })), n.media || 500))),
                            a = [ja("play", i(fl.Play), o), ja("pause", i(fl.Pause), o), ja("seeked", i(fl.Seeked), o), ja("volumechange", i(fl.VolumeChange), o), ja("ratechange", i(fl.RateChange), o)];
                        return xl((() => {
                            a.forEach((e => e()))
                        }))
                    }(e);
                let h = () => {},
                    u = () => {},
                    p = () => {},
                    d = () => {};
                e.recordDOM && (h = function({
                    styleSheetRuleCb: e,
                    mirror: t,
                    stylesheetManager: r
                }, {
                    win: s
                }) {
                    if (!s.CSSStyleSheet || !s.CSSStyleSheet.prototype) return () => {};
                    const n = s.CSSStyleSheet.prototype.insertRule;
                    s.CSSStyleSheet.prototype.insertRule = new Proxy(n, {
                        apply: xl(((s, n, o) => {
                            const [i, a] = o, {
                                id: l,
                                styleId: c
                            } = Pl(n, t, r.styleMirror);
                            return (l && -1 !== l || c && -1 !== c) && e({
                                id: l,
                                styleId: c,
                                adds: [{
                                    rule: i,
                                    index: a
                                }]
                            }), Ol((() => s.apply(n, o)))()
                        }))
                    }), s.CSSStyleSheet.prototype.addRule = function(e, t, r = this.cssRules.length) {
                        const n = `${e} { ${t} }`;
                        return s.CSSStyleSheet.prototype.insertRule.apply(this, [n, r])
                    };
                    const o = s.CSSStyleSheet.prototype.deleteRule;
                    let i, a;
                    s.CSSStyleSheet.prototype.deleteRule = new Proxy(o, {
                        apply: xl(((s, n, o) => {
                            const [i] = o, {
                                id: a,
                                styleId: l
                            } = Pl(n, t, r.styleMirror);
                            return (a && -1 !== a || l && -1 !== l) && e({
                                id: a,
                                styleId: l,
                                removes: [{
                                    index: i
                                }]
                            }), Ol((() => s.apply(n, o)))()
                        }))
                    }), s.CSSStyleSheet.prototype.removeRule = function(e) {
                        return s.CSSStyleSheet.prototype.deleteRule.apply(this, [e])
                    }, s.CSSStyleSheet.prototype.replace && (i = s.CSSStyleSheet.prototype.replace, s.CSSStyleSheet.prototype.replace = new Proxy(i, {
                        apply: xl(((s, n, o) => {
                            const [i] = o, {
                                id: a,
                                styleId: l
                            } = Pl(n, t, r.styleMirror);
                            return (a && -1 !== a || l && -1 !== l) && e({
                                id: a,
                                styleId: l,
                                replace: i
                            }), s.apply(n, o)
                        }))
                    })), s.CSSStyleSheet.prototype.replaceSync && (a = s.CSSStyleSheet.prototype.replaceSync, s.CSSStyleSheet.prototype.replaceSync = new Proxy(a, {
                        apply: xl(((s, n, o) => {
                            const [i] = o, {
                                id: a,
                                styleId: l
                            } = Pl(n, t, r.styleMirror);
                            return (a && -1 !== a || l && -1 !== l) && e({
                                id: a,
                                styleId: l,
                                replaceSync: i
                            }), s.apply(n, o)
                        }))
                    }));
                    const l = {};
                    Ul("CSSGroupingRule") ? l.CSSGroupingRule = s.CSSGroupingRule : (Ul("CSSMediaRule") && (l.CSSMediaRule = s.CSSMediaRule), Ul("CSSConditionRule") && (l.CSSConditionRule = s.CSSConditionRule), Ul("CSSSupportsRule") && (l.CSSSupportsRule = s.CSSSupportsRule));
                    const c = {};
                    return Object.entries(l).forEach((([s, n]) => {
                        c[s] = {
                            insertRule: n.prototype.insertRule,
                            deleteRule: n.prototype.deleteRule
                        }, n.prototype.insertRule = new Proxy(c[s].insertRule, {
                            apply: xl(((s, n, o) => {
                                const [i, a] = o, {
                                    id: l,
                                    styleId: c
                                } = Pl(n.parentStyleSheet, t, r.styleMirror);
                                return (l && -1 !== l || c && -1 !== c) && e({
                                    id: l,
                                    styleId: c,
                                    adds: [{
                                        rule: i,
                                        index: [...Dl(n), a || 0]
                                    }]
                                }), s.apply(n, o)
                            }))
                        }), n.prototype.deleteRule = new Proxy(c[s].deleteRule, {
                            apply: xl(((s, n, o) => {
                                const [i] = o, {
                                    id: a,
                                    styleId: l
                                } = Pl(n.parentStyleSheet, t, r.styleMirror);
                                return (a && -1 !== a || l && -1 !== l) && e({
                                    id: a,
                                    styleId: l,
                                    removes: [{
                                        index: [...Dl(n), i]
                                    }]
                                }), s.apply(n, o)
                            }))
                        })
                    })), xl((() => {
                        s.CSSStyleSheet.prototype.insertRule = n, s.CSSStyleSheet.prototype.deleteRule = o, i && (s.CSSStyleSheet.prototype.replace = i), a && (s.CSSStyleSheet.prototype.replaceSync = a), Object.entries(l).forEach((([e, t]) => {
                            t.prototype.insertRule = c[e].insertRule, t.prototype.deleteRule = c[e].deleteRule
                        }))
                    }))
                }(e, {
                    win: r
                }), u = Fl(e, e.doc), p = function({
                    styleDeclarationCb: e,
                    mirror: t,
                    ignoreCSSAttributes: r,
                    stylesheetManager: s
                }, {
                    win: n
                }) {
                    const o = n.CSSStyleDeclaration.prototype.setProperty;
                    n.CSSStyleDeclaration.prototype.setProperty = new Proxy(o, {
                        apply: xl(((n, i, a) => {
                            var l;
                            const [c, h, u] = a;
                            if (r.has(c)) return o.apply(i, [c, h, u]);
                            const {
                                id: p,
                                styleId: d
                            } = Pl(null == (l = i.parentRule) ? void 0 : l.parentStyleSheet, t, s.styleMirror);
                            return (p && -1 !== p || d && -1 !== d) && e({
                                id: p,
                                styleId: d,
                                set: {
                                    property: c,
                                    value: h,
                                    priority: u
                                },
                                index: Dl(i.parentRule)
                            }), n.apply(i, a)
                        }))
                    });
                    const i = n.CSSStyleDeclaration.prototype.removeProperty;
                    return n.CSSStyleDeclaration.prototype.removeProperty = new Proxy(i, {
                        apply: xl(((n, o, a) => {
                            var l;
                            const [c] = a;
                            if (r.has(c)) return i.apply(o, [c]);
                            const {
                                id: h,
                                styleId: u
                            } = Pl(null == (l = o.parentRule) ? void 0 : l.parentStyleSheet, t, s.styleMirror);
                            return (h && -1 !== h || u && -1 !== u) && e({
                                id: h,
                                styleId: u,
                                remove: {
                                    property: c
                                },
                                index: Dl(o.parentRule)
                            }), n.apply(o, a)
                        }))
                    }), xl((() => {
                        n.CSSStyleDeclaration.prototype.setProperty = o, n.CSSStyleDeclaration.prototype.removeProperty = i
                    }))
                }(e, {
                    win: r
                }), e.collectFonts && (d = function({
                    fontCb: e,
                    doc: t
                }) {
                    const r = t.defaultView;
                    if (!r) return () => {};
                    const s = [],
                        n = new WeakMap,
                        o = r.FontFace;
                    r.FontFace = function(e, t, r) {
                        const s = new o(e, t, r);
                        return n.set(s, {
                            family: e,
                            buffer: "string" != typeof t,
                            descriptors: r,
                            fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                        }), s
                    };
                    const i = Ya(t.fonts, "add", (function(t) {
                        return function(r) {
                            return setTimeout(xl((() => {
                                const t = n.get(r);
                                t && (e(t), n.delete(r))
                            })), 0), t.apply(this, [r])
                        }
                    }));
                    return s.push((() => {
                        r.FontFace = o
                    })), s.push(i), xl((() => {
                        s.forEach((e => e()))
                    }))
                }(e)));
                const f = function(e) {
                        const {
                            doc: t,
                            mirror: r,
                            blockClass: s,
                            blockSelector: n,
                            selectionCb: o
                        } = e;
                        let i = !0;
                        const a = xl((() => {
                            const e = t.getSelection();
                            if (!e || i && (null == e ? void 0 : e.isCollapsed)) return;
                            i = e.isCollapsed || !1;
                            const a = [],
                                l = e.rangeCount || 0;
                            for (let t = 0; t < l; t++) {
                                const o = e.getRangeAt(t),
                                    {
                                        startContainer: i,
                                        startOffset: l,
                                        endContainer: c,
                                        endOffset: h
                                    } = o;
                                Qa(i, s, n, !0) || Qa(c, s, n, !0) || a.push({
                                    start: r.getId(i),
                                    startOffset: l,
                                    end: r.getId(c),
                                    endOffset: h
                                })
                            }
                            o({
                                ranges: a
                            })
                        }));
                        return a(), ja("selectionchange", a)
                    }(e),
                    m = function({
                        doc: e,
                        customElementCb: t
                    }) {
                        const r = e.defaultView;
                        return r && r.customElements ? Ya(r.customElements, "define", (function(e) {
                            return function(r, s, n) {
                                try {
                                    t({
                                        define: {
                                            name: r
                                        }
                                    })
                                } catch (e) {
                                    console.warn(`Custom element callback failed for ${r}`)
                                }
                                return e.apply(this, [r, s, n])
                            }
                        })) : () => {}
                    }(e),
                    g = [];
                for (const t of e.plugins) g.push(t.observer(t.callback, r, t.options));
                return xl((() => {
                    Ml.forEach((e => e.reset())), null == s || s.disconnect(), n(), o(), i(), a(), l(), c(), h(), u(), p(), d(), f(), m(), g.forEach((e => e()))
                }))
            }

            function _l(e) {
                return void 0 !== window[e]
            }

            function Ul(e) {
                return Boolean(void 0 !== window[e] && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype)
            }
            class zl {
                constructor(e) {
                    o(this, "iframeIdToRemoteIdMap", new WeakMap), o(this, "iframeRemoteIdToIdMap", new WeakMap), this.generateIdFn = e
                }
                getId(e, t, r, s) {
                    const n = r || this.getIdToRemoteIdMap(e),
                        o = s || this.getRemoteIdToIdMap(e);
                    let i = n.get(t);
                    return i || (i = this.generateIdFn(), n.set(t, i), o.set(i, t)), i
                }
                getIds(e, t) {
                    const r = this.getIdToRemoteIdMap(e),
                        s = this.getRemoteIdToIdMap(e);
                    return t.map((t => this.getId(e, t, r, s)))
                }
                getRemoteId(e, t, r) {
                    const s = r || this.getRemoteIdToIdMap(e);
                    if ("number" != typeof t) return t;
                    const n = s.get(t);
                    return n || -1
                }
                getRemoteIds(e, t) {
                    const r = this.getRemoteIdToIdMap(e);
                    return t.map((t => this.getRemoteId(e, t, r)))
                }
                reset(e) {
                    if (!e) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
                    this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e)
                }
                getIdToRemoteIdMap(e) {
                    let t = this.iframeIdToRemoteIdMap.get(e);
                    return t || (t = new Map, this.iframeIdToRemoteIdMap.set(e, t)), t
                }
                getRemoteIdToIdMap(e) {
                    let t = this.iframeRemoteIdToIdMap.get(e);
                    return t || (t = new Map, this.iframeRemoteIdToIdMap.set(e, t)), t
                }
            }
            class jl {
                constructor(e) {
                    o(this, "iframes", new WeakMap), o(this, "crossOriginIframeMap", new WeakMap), o(this, "crossOriginIframeMirror", new zl(z)), o(this, "crossOriginIframeStyleMirror"), o(this, "crossOriginIframeRootIdMap", new WeakMap), o(this, "mirror"), o(this, "mutationCb"), o(this, "wrappedEmit"), o(this, "loadListener"), o(this, "stylesheetManager"), o(this, "recordCrossOriginIframes"), this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new zl(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
                }
                addIframe(e) {
                    this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
                }
                addLoadListener(e) {
                    this.loadListener = e
                }
                attachIframe(e, t) {
                    var r, s;
                    this.mutationCb({
                        adds: [{
                            parentId: this.mirror.getId(e),
                            nextId: null,
                            node: t
                        }],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0
                    }), this.recordCrossOriginIframes && (null == (r = e.contentWindow) || r.addEventListener("message", this.handleMessage.bind(this))), null == (s = this.loadListener) || s.call(this, e), e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument))
                }
                handleMessage(e) {
                    const t = e;
                    if ("rrweb" !== t.data.type || t.origin !== t.data.origin) return;
                    if (!e.source) return;
                    const r = this.crossOriginIframeMap.get(e.source);
                    if (!r) return;
                    const s = this.transformCrossOriginEvent(r, t.data.event);
                    s && this.wrappedEmit(s, t.data.isCheckout)
                }
                transformCrossOriginEvent(e, t) {
                    var r;
                    switch (t.type) {
                        case cl.FullSnapshot: {
                            this.crossOriginIframeMirror.reset(e), this.crossOriginIframeStyleMirror.reset(e), this.replaceIdOnNode(t.data.node, e);
                            const r = t.data.node.id;
                            return this.crossOriginIframeRootIdMap.set(e, r), this.patchRootIdOnNode(t.data.node, r), {
                                timestamp: t.timestamp,
                                type: cl.IncrementalSnapshot,
                                data: {
                                    source: hl.Mutation,
                                    adds: [{
                                        parentId: this.mirror.getId(e),
                                        nextId: null,
                                        node: t.data.node
                                    }],
                                    removes: [],
                                    texts: [],
                                    attributes: [],
                                    isAttachIframe: !0
                                }
                            }
                        }
                        case cl.Meta:
                        case cl.Load:
                        case cl.DomContentLoaded:
                            return !1;
                        case cl.Plugin:
                            return t;
                        case cl.Custom:
                            return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
                        case cl.IncrementalSnapshot:
                            switch (t.data.source) {
                                case hl.Mutation:
                                    return t.data.adds.forEach((t => {
                                        this.replaceIds(t, e, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(t.node, e);
                                        const r = this.crossOriginIframeRootIdMap.get(e);
                                        r && this.patchRootIdOnNode(t.node, r)
                                    })), t.data.removes.forEach((t => {
                                        this.replaceIds(t, e, ["parentId", "id"])
                                    })), t.data.attributes.forEach((t => {
                                        this.replaceIds(t, e, ["id"])
                                    })), t.data.texts.forEach((t => {
                                        this.replaceIds(t, e, ["id"])
                                    })), t;
                                case hl.Drag:
                                case hl.TouchMove:
                                case hl.MouseMove:
                                    return t.data.positions.forEach((t => {
                                        this.replaceIds(t, e, ["id"])
                                    })), t;
                                case hl.ViewportResize:
                                    return !1;
                                case hl.MediaInteraction:
                                case hl.MouseInteraction:
                                case hl.Scroll:
                                case hl.CanvasMutation:
                                case hl.Input:
                                    return this.replaceIds(t.data, e, ["id"]), t;
                                case hl.StyleSheetRule:
                                case hl.StyleDeclaration:
                                    return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
                                case hl.Font:
                                    return t;
                                case hl.Selection:
                                    return t.data.ranges.forEach((t => {
                                        this.replaceIds(t, e, ["start", "end"])
                                    })), t;
                                case hl.AdoptedStyleSheet:
                                    return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), null == (r = t.data.styles) || r.forEach((t => {
                                        this.replaceStyleIds(t, e, ["styleId"])
                                    })), t
                            }
                    }
                    return !1
                }
                replace(e, t, r, s) {
                    for (const n of s)(Array.isArray(t[n]) || "number" == typeof t[n]) && (Array.isArray(t[n]) ? t[n] = e.getIds(r, t[n]) : t[n] = e.getId(r, t[n]));
                    return t
                }
                replaceIds(e, t, r) {
                    return this.replace(this.crossOriginIframeMirror, e, t, r)
                }
                replaceStyleIds(e, t, r) {
                    return this.replace(this.crossOriginIframeStyleMirror, e, t, r)
                }
                replaceIdOnNode(e, t) {
                    this.replaceIds(e, t, ["id", "rootId"]), "childNodes" in e && e.childNodes.forEach((e => {
                        this.replaceIdOnNode(e, t)
                    }))
                }
                patchRootIdOnNode(e, t) {
                    e.type === ml.Document || e.rootId || (e.rootId = t), "childNodes" in e && e.childNodes.forEach((e => {
                        this.patchRootIdOnNode(e, t)
                    }))
                }
            }
            class Wl {
                constructor(e) {
                    o(this, "shadowDoms", new WeakSet), o(this, "mutationCb"), o(this, "scrollCb"), o(this, "bypassOptions"), o(this, "mirror"), o(this, "restoreHandlers", []), this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init()
                }
                init() {
                    this.reset(), this.patchAttachShadow(Element, document)
                }
                addShadowRoot(e, t) {
                    if (!S(e)) return;
                    if (this.shadowDoms.has(e)) return;
                    this.shadowDoms.add(e);
                    const r = Rl({
                        ...this.bypassOptions,
                        doc: t,
                        mutationCb: this.mutationCb,
                        mirror: this.mirror,
                        shadowDomManager: this
                    }, e);
                    this.restoreHandlers.push((() => r.disconnect())), this.restoreHandlers.push(Tl({
                        ...this.bypassOptions,
                        scrollCb: this.scrollCb,
                        doc: e,
                        mirror: this.mirror
                    })), setTimeout((() => {
                        e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(za.host(e))), this.restoreHandlers.push(Fl({
                            mirror: this.mirror,
                            stylesheetManager: this.bypassOptions.stylesheetManager
                        }, e))
                    }), 0)
                }
                observeAttachShadow(e) {
                    e.contentWindow && e.contentDocument && this.patchAttachShadow(e.contentWindow.Element, e.contentDocument)
                }
                patchAttachShadow(e, t) {
                    const r = this;
                    this.restoreHandlers.push(Ya(e.prototype, "attachShadow", (function(e) {
                        return function(s) {
                            const n = e.call(this, s),
                                o = za.shadowRoot(this);
                            return o && ll(this) && r.addShadowRoot(o, t), n
                        }
                    })))
                }
                reset() {
                    this.restoreHandlers.forEach((e => {
                        try {
                            e()
                        } catch (e) {}
                    })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
                }
            }
            for (var Vl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Gl = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Zl = 0; Zl < 64; Zl++) Gl[Vl.charCodeAt(Zl)] = Zl;
            const Yl = new Map;
            const Jl = (e, t, r) => {
                if (!e || !Kl(e, t) && "object" != typeof e) return;
                const s = function(e, t) {
                    let r = Yl.get(e);
                    return r || (r = new Map, Yl.set(e, r)), r.has(t) || r.set(t, []), r.get(t)
                }(r, e.constructor.name);
                let n = s.indexOf(e);
                return -1 === n && (n = s.length, s.push(e)), n
            };

            function Xl(e, t, r) {
                if (e instanceof Array) return e.map((e => Xl(e, t, r)));
                if (null === e) return e;
                if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray) {
                    return {
                        rr_type: e.constructor.name,
                        args: [Object.values(e)]
                    }
                }
                if (e instanceof ArrayBuffer) {
                    return {
                        rr_type: e.constructor.name,
                        base64: function(e) {
                            var t, r = new Uint8Array(e),
                                s = r.length,
                                n = "";
                            for (t = 0; t < s; t += 3) n += Vl[r[t] >> 2], n += Vl[(3 & r[t]) << 4 | r[t + 1] >> 4], n += Vl[(15 & r[t + 1]) << 2 | r[t + 2] >> 6], n += Vl[63 & r[t + 2]];
                            return s % 3 == 2 ? n = n.substring(0, n.length - 1) + "=" : s % 3 == 1 && (n = n.substring(0, n.length - 2) + "=="), n
                        }(e)
                    }
                }
                if (e instanceof DataView) {
                    return {
                        rr_type: e.constructor.name,
                        args: [Xl(e.buffer, t, r), e.byteOffset, e.byteLength]
                    }
                }
                if (e instanceof HTMLImageElement) {
                    const t = e.constructor.name,
                        {
                            src: r
                        } = e;
                    return {
                        rr_type: t,
                        src: r
                    }
                }
                if (e instanceof HTMLCanvasElement) {
                    return {
                        rr_type: "HTMLImageElement",
                        src: e.toDataURL()
                    }
                }
                if (e instanceof ImageData) {
                    return {
                        rr_type: e.constructor.name,
                        args: [Xl(e.data, t, r), e.width, e.height]
                    }
                }
                if (Kl(e, t) || "object" == typeof e) {
                    return {
                        rr_type: e.constructor.name,
                        index: Jl(e, t, r)
                    }
                }
                return e
            }
            const Hl = (e, t, r) => e.map((e => Xl(e, t, r))),
                Kl = (e, t) => {
                    const r = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((e => "function" == typeof t[e]));
                    return Boolean(r.find((r => e instanceof t[r])))
                };

            function $l(e, t, r, s) {
                const n = [];
                try {
                    const o = Ya(e.HTMLCanvasElement.prototype, "getContext", (function(e) {
                        return function(n, ...o) {
                            if (!Qa(this, t, r, !0)) {
                                const e = function(e) {
                                    return "experimental-webgl" === e ? "webgl" : e
                                }(n);
                                if ("__context" in this || (this.__context = e), s && ["webgl", "webgl2"].includes(e))
                                    if (o[0] && "object" == typeof o[0]) {
                                        const e = o[0];
                                        e.preserveDrawingBuffer || (e.preserveDrawingBuffer = !0)
                                    } else o.splice(0, 1, {
                                        preserveDrawingBuffer: !0
                                    })
                            }
                            return e.apply(this, [n, ...o])
                        }
                    }));
                    n.push(o)
                } catch {
                    console.error("failed to patch HTMLCanvasElement.prototype.getContext")
                }
                return () => {
                    n.forEach((e => e()))
                }
            }

            function Ql(e, t, r, s, n, o) {
                const i = [],
                    a = Object.getOwnPropertyNames(e);
                for (const l of a)
                    if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(l)) try {
                        if ("function" != typeof e[l]) continue;
                        const a = Ya(e, l, (function(e) {
                            return function(...i) {
                                const a = e.apply(this, i);
                                if (Jl(a, o, this), "tagName" in this.canvas && !Qa(this.canvas, s, n, !0)) {
                                    const e = Hl(i, o, this),
                                        s = {
                                            type: t,
                                            property: l,
                                            args: e
                                        };
                                    r(this.canvas, s)
                                }
                                return a
                            }
                        }));
                        i.push(a)
                    } catch {
                        const s = Za(e, l, {
                            set(e) {
                                r(this.canvas, {
                                    type: t,
                                    property: l,
                                    args: [e],
                                    setter: !0
                                })
                            }
                        });
                        i.push(s)
                    }
                return i
            }
            const ql = "KGZ1bmN0aW9uKCkgewogICJ1c2Ugc3RyaWN0IjsKICB2YXIgY2hhcnMgPSAiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyI7CiAgdmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAidW5kZWZpbmVkIiA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTsKICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7CiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpOwogIH0KICB2YXIgZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHsKICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSwgaTIsIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gIiI7CiAgICBmb3IgKGkyID0gMDsgaTIgPCBsZW47IGkyICs9IDMpIHsKICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kyXSA+PiAyXTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMl0gJiAzKSA8PCA0IHwgYnl0ZXNbaTIgKyAxXSA+PiA0XTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMiArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpMiArIDJdID4+IDZdOwogICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaTIgKyAyXSAmIDYzXTsKICAgIH0KICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgIj0iOwogICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgIj09IjsKICAgIH0KICAgIHJldHVybiBiYXNlNjQ7CiAgfTsKICBjb25zdCBsYXN0QmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7CiAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKICBhc3luYyBmdW5jdGlvbiBnZXRUcmFuc3BhcmVudEJsb2JGb3Iod2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMpIHsKICAgIGNvbnN0IGlkID0gYCR7d2lkdGh9LSR7aGVpZ2h0fWA7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBpZiAodHJhbnNwYXJlbnRCbG9iTWFwLmhhcyhpZCkpIHJldHVybiB0cmFuc3BhcmVudEJsb2JNYXAuZ2V0KGlkKTsKICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsKICAgICAgb2Zmc2NyZWVuLmdldENvbnRleHQoIjJkIik7CiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBvZmZzY3JlZW4uY29udmVydFRvQmxvYihkYXRhVVJMT3B0aW9ucyk7CiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpOwogICAgICBjb25zdCBiYXNlNjQgPSBlbmNvZGUoYXJyYXlCdWZmZXIpOwogICAgICB0cmFuc3BhcmVudEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICByZXR1cm4gYmFzZTY0OwogICAgfSBlbHNlIHsKICAgICAgcmV0dXJuICIiOwogICAgfQogIH0KICBjb25zdCB3b3JrZXIgPSBzZWxmOwogIHdvcmtlci5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbihlKSB7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBjb25zdCB7IGlkLCBiaXRtYXAsIHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zIH0gPSBlLmRhdGE7CiAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKAogICAgICAgIHdpZHRoLAogICAgICAgIGhlaWdodCwKICAgICAgICBkYXRhVVJMT3B0aW9ucwogICAgICApOwogICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOwogICAgICBjb25zdCBjdHggPSBvZmZzY3JlZW4uZ2V0Q29udGV4dCgiMmQiKTsKICAgICAgY3R4LmRyYXdJbWFnZShiaXRtYXAsIDAsIDApOwogICAgICBiaXRtYXAuY2xvc2UoKTsKICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IG9mZnNjcmVlbi5jb252ZXJ0VG9CbG9iKGRhdGFVUkxPcHRpb25zKTsKICAgICAgY29uc3QgdHlwZSA9IGJsb2IudHlwZTsKICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCk7CiAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7CiAgICAgIGlmICghbGFzdEJsb2JNYXAuaGFzKGlkKSAmJiBhd2FpdCB0cmFuc3BhcmVudEJhc2U2NCA9PT0gYmFzZTY0KSB7CiAgICAgICAgbGFzdEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICAgIHJldHVybiB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZCB9KTsKICAgICAgfQogICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KSByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7CiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7CiAgICAgICAgaWQsCiAgICAgICAgdHlwZSwKICAgICAgICBiYXNlNjQsCiAgICAgICAgd2lkdGgsCiAgICAgICAgaGVpZ2h0CiAgICAgIH0pOwogICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7CiAgICB9IGVsc2UgewogICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsKICAgIH0KICB9Owp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS1iaXRtYXAtZGF0YS11cmwtd29ya2VyLUlKcEM3Z19iLmpzLm1hcAo=",
                ec = "undefined" != typeof window && window.Blob && new Blob([(tc = ql, Uint8Array.from(atob(tc), (e => e.charCodeAt(0))))], {
                    type: "text/javascript;charset=utf-8"
                });
            var tc;

            function rc(e) {
                let t;
                try {
                    if (t = ec && (window.URL || window.webkitURL).createObjectURL(ec), !t) throw "";
                    const r = new Worker(t, {
                        name: null == e ? void 0 : e.name
                    });
                    return r.addEventListener("error", (() => {
                        (window.URL || window.webkitURL).revokeObjectURL(t)
                    })), r
                } catch (t) {
                    return new Worker("data:text/javascript;base64," + ql, {
                        name: null == e ? void 0 : e.name
                    })
                } finally {
                    t && (window.URL || window.webkitURL).revokeObjectURL(t)
                }
            }
            class sc {
                constructor(e) {
                    o(this, "pendingCanvasMutations", new Map), o(this, "rafStamps", {
                        latestId: 0,
                        invokeId: null
                    }), o(this, "mirror"), o(this, "mutationCb"), o(this, "resetObservers"), o(this, "frozen", !1), o(this, "locked", !1), o(this, "processMutation", ((e, t) => {
                        !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []), this.pendingCanvasMutations.get(e).push(t)
                    }));
                    const {
                        sampling: t = "all",
                        win: r,
                        blockClass: s,
                        blockSelector: n,
                        recordCanvas: i,
                        dataURLOptions: a
                    } = e;
                    this.mutationCb = e.mutationCb, this.mirror = e.mirror, i && "all" === t && this.initCanvasMutationObserver(r, s, n), i && "number" == typeof t && this.initCanvasFPSObserver(t, r, s, n, {
                        dataURLOptions: a
                    })
                }
                reset() {
                    this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
                }
                freeze() {
                    this.frozen = !0
                }
                unfreeze() {
                    this.frozen = !1
                }
                lock() {
                    this.locked = !0
                }
                unlock() {
                    this.locked = !1
                }
                initCanvasFPSObserver(e, t, r, s, n) {
                    const o = $l(t, r, s, !0),
                        i = new Map,
                        a = new rc;
                    a.onmessage = e => {
                        const {
                            id: t
                        } = e.data;
                        if (i.set(t, !1), !("base64" in e.data)) return;
                        const {
                            base64: r,
                            type: s,
                            width: n,
                            height: o
                        } = e.data;
                        this.mutationCb({
                            id: t,
                            type: dl["2D"],
                            commands: [{
                                property: "clearRect",
                                args: [0, 0, n, o]
                            }, {
                                property: "drawImage",
                                args: [{
                                    rr_type: "ImageBitmap",
                                    args: [{
                                        rr_type: "Blob",
                                        data: [{
                                            rr_type: "ArrayBuffer",
                                            base64: r
                                        }],
                                        type: s
                                    }]
                                }, 0, 0]
                            }]
                        })
                    };
                    const l = 1e3 / e;
                    let c, h = 0;
                    const u = e => {
                        h && e - h < l || (h = e, (() => {
                            const e = [];
                            return t.document.querySelectorAll("canvas").forEach((t => {
                                Qa(t, r, s, !0) || e.push(t)
                            })), e
                        })().forEach((async e => {
                            var t;
                            const r = this.mirror.getId(e);
                            if (i.get(r)) return;
                            if (0 === e.width || 0 === e.height) return;
                            if (i.set(r, !0), ["webgl", "webgl2"].includes(e.__context)) {
                                const r = e.getContext(e.__context);
                                !1 === (null == (t = null == r ? void 0 : r.getContextAttributes()) ? void 0 : t.preserveDrawingBuffer) && r.clear(r.COLOR_BUFFER_BIT)
                            }
                            const s = await createImageBitmap(e);
                            a.postMessage({
                                id: r,
                                bitmap: s,
                                width: e.width,
                                height: e.height,
                                dataURLOptions: n.dataURLOptions
                            }, [s])
                        }))), c = requestAnimationFrame(u)
                    };
                    c = requestAnimationFrame(u), this.resetObservers = () => {
                        o(), cancelAnimationFrame(c)
                    }
                }
                initCanvasMutationObserver(e, t, r) {
                    this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
                    const s = $l(e, t, r, !1),
                        n = function(e, t, r, s) {
                            const n = [],
                                o = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);
                            for (const i of o) try {
                                if ("function" != typeof t.CanvasRenderingContext2D.prototype[i]) continue;
                                const o = Ya(t.CanvasRenderingContext2D.prototype, i, (function(n) {
                                    return function(...o) {
                                        return Qa(this.canvas, r, s, !0) || setTimeout((() => {
                                            const r = Hl(o, t, this);
                                            e(this.canvas, {
                                                type: dl["2D"],
                                                property: i,
                                                args: r
                                            })
                                        }), 0), n.apply(this, o)
                                    }
                                }));
                                n.push(o)
                            } catch {
                                const r = Za(t.CanvasRenderingContext2D.prototype, i, {
                                    set(t) {
                                        e(this.canvas, {
                                            type: dl["2D"],
                                            property: i,
                                            args: [t],
                                            setter: !0
                                        })
                                    }
                                });
                                n.push(r)
                            }
                            return () => {
                                n.forEach((e => e()))
                            }
                        }(this.processMutation.bind(this), e, t, r),
                        o = function(e, t, r, s) {
                            const n = [];
                            return n.push(...Ql(t.WebGLRenderingContext.prototype, dl.WebGL, e, r, s, t)), void 0 !== t.WebGL2RenderingContext && n.push(...Ql(t.WebGL2RenderingContext.prototype, dl.WebGL2, e, r, s, t)), () => {
                                n.forEach((e => e()))
                            }
                        }(this.processMutation.bind(this), e, t, r);
                    this.resetObservers = () => {
                        s(), n(), o()
                    }
                }
                startPendingCanvasMutationFlusher() {
                    requestAnimationFrame((() => this.flushPendingCanvasMutations()))
                }
                startRAFTimestamping() {
                    const e = t => {
                        this.rafStamps.latestId = t, requestAnimationFrame(e)
                    };
                    requestAnimationFrame(e)
                }
                flushPendingCanvasMutations() {
                    this.pendingCanvasMutations.forEach(((e, t) => {
                        const r = this.mirror.getId(t);
                        this.flushPendingCanvasMutationFor(t, r)
                    })), requestAnimationFrame((() => this.flushPendingCanvasMutations()))
                }
                flushPendingCanvasMutationFor(e, t) {
                    if (this.frozen || this.locked) return;
                    const r = this.pendingCanvasMutations.get(e);
                    if (!r || -1 === t) return;
                    const s = r.map((e => {
                            const {
                                type: t,
                                ...r
                            } = e;
                            return r
                        })),
                        {
                            type: n
                        } = r[0];
                    this.mutationCb({
                        id: t,
                        type: n,
                        commands: s
                    }), this.pendingCanvasMutations.delete(e)
                }
            }
            class nc {
                constructor(e) {
                    o(this, "trackedLinkElements", new WeakSet), o(this, "mutationCb"), o(this, "adoptedStyleSheetCb"), o(this, "styleMirror", new ol), this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
                }
                attachLinkElement(e, t) {
                    "_cssText" in t.attributes && this.mutationCb({
                        adds: [],
                        removes: [],
                        texts: [],
                        attributes: [{
                            id: t.id,
                            attributes: t.attributes
                        }]
                    }), this.trackLinkElement(e)
                }
                trackLinkElement(e) {
                    this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e))
                }
                adoptStyleSheets(e, t) {
                    if (0 === e.length) return;
                    const r = {
                            id: t,
                            styleIds: []
                        },
                        s = [];
                    for (const t of e) {
                        let e;
                        this.styleMirror.has(t) ? e = this.styleMirror.getId(t) : (e = this.styleMirror.add(t), s.push({
                            styleId: e,
                            rules: Array.from(t.rules || CSSRule, ((e, r) => ({
                                rule: v(e, t.href),
                                index: r
                            })))
                        })), r.styleIds.push(e)
                    }
                    s.length > 0 && (r.styles = s), this.adoptedStyleSheetCb(r)
                }
                reset() {
                    this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
                }
                trackStylesheetInLinkElement(e) {}
            }
            class oc {
                constructor() {
                    o(this, "nodeMap", new WeakMap), o(this, "active", !1)
                }
                inOtherBuffer(e, t) {
                    const r = this.nodeMap.get(e);
                    return r && Array.from(r).some((e => e !== t))
                }
                add(e, t) {
                    this.active || (this.active = !0, requestAnimationFrame((() => {
                        this.nodeMap = new WeakMap, this.active = !1
                    }))), this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
                }
                destroy() {}
            }
            let ic, ac, lc, cc = !1;
            try {
                if (2 !== Array.from([1], (e => 2 * e))[0]) {
                    const e = document.createElement("iframe");
                    document.body.appendChild(e), Array.from = (null == (s = e.contentWindow) ? void 0 : s.Array.from) || Array.from, document.body.removeChild(e)
                }
            } catch (e) {
                console.debug("Unable to override Array.from", e)
            }
            const hc = new I;

            function uc(e = {}) {
                const {
                    emit: t,
                    checkoutEveryNms: r,
                    checkoutEveryNth: s,
                    blockClass: n = "rr-block",
                    blockSelector: o = null,
                    ignoreClass: i = "rr-ignore",
                    ignoreSelector: a = null,
                    maskTextClass: l = "rr-mask",
                    maskTextSelector: c = null,
                    inlineStylesheet: h = !0,
                    maskAllInputs: u,
                    maskInputOptions: p,
                    slimDOMOptions: d,
                    maskInputFn: f,
                    maskTextFn: m,
                    hooks: g,
                    packFn: y,
                    sampling: w = {},
                    dataURLOptions: b = {},
                    mousemoveWait: S,
                    recordDOM: C = !0,
                    recordCanvas: v = !1,
                    recordCrossOriginIframes: k = !1,
                    recordAfter: x = ("DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load"),
                    userTriggeredOnInput: O = !1,
                    collectFonts: M = !1,
                    inlineImages: A = !1,
                    plugins: R,
                    keepIframeSrcFn: E = (() => !1),
                    ignoreCSSAttributes: T = new Set([]),
                    errorHandler: N,
                    applyBackgroundColorToBlockedElements: L = !1
                } = e;
                kl = N;
                const D = !k || window.parent === window;
                let P = !1;
                if (!D) try {
                    window.parent.document && (P = !1)
                } catch (e) {
                    P = !0
                }
                if (D && !t) throw new Error("emit function is required");
                if (!D && !P) return () => {};
                void 0 !== S && void 0 === w.mousemove && (w.mousemove = S), hc.reset();
                const F = !0 === u ? {
                        color: !0,
                        date: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0,
                        password: !0
                    } : void 0 !== p ? p : {
                        password: !0
                    },
                    B = !0 === d || "all" === d ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaVerification: !0,
                        headMetaAuthorship: "all" === d,
                        headMetaDescKeywords: "all" === d,
                        headTitleMutations: "all" === d
                    } : d || {};
                let _;
                ! function(e = window) {
                    "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach)
                }();
                let U = 0;
                const z = e => {
                    for (const t of R || []) t.eventProcessor && (e = t.eventProcessor(e));
                    return y && !P && (e = y(e)), e
                };
                ic = (e, n) => {
                    var o;
                    const i = e;
                    if (i.timestamp = Ja(), !(null == (o = Ml[0]) ? void 0 : o.isFrozen()) || i.type === cl.FullSnapshot || i.type === cl.IncrementalSnapshot && i.data.source === hl.Mutation || Ml.forEach((e => e.unfreeze())), D) null == t || t(z(i), n);
                    else if (P) {
                        const e = {
                            type: "rrweb",
                            event: z(i),
                            origin: window.location.origin,
                            isCheckout: n
                        };
                        window.parent.postMessage(e, "*")
                    }
                    if (i.type === cl.FullSnapshot) _ = i, U = 0;
                    else if (i.type === cl.IncrementalSnapshot) {
                        if (i.data.source === hl.Mutation && i.data.isAttachIframe) return;
                        U++;
                        const e = s && U >= s,
                            t = r && i.timestamp - _.timestamp > r;
                        (e || t) && ac(!0)
                    }
                };
                const j = e => {
                        ic({
                            type: cl.IncrementalSnapshot,
                            data: {
                                source: hl.Mutation,
                                ...e
                            }
                        })
                    },
                    W = e => ic({
                        type: cl.IncrementalSnapshot,
                        data: {
                            source: hl.Scroll,
                            ...e
                        }
                    }),
                    V = e => ic({
                        type: cl.IncrementalSnapshot,
                        data: {
                            source: hl.CanvasMutation,
                            ...e
                        }
                    }),
                    G = new nc({
                        mutationCb: j,
                        adoptedStyleSheetCb: e => ic({
                            type: cl.IncrementalSnapshot,
                            data: {
                                source: hl.AdoptedStyleSheet,
                                ...e
                            }
                        })
                    }),
                    Z = new jl({
                        mirror: hc,
                        mutationCb: j,
                        stylesheetManager: G,
                        recordCrossOriginIframes: k,
                        wrappedEmit: ic
                    });
                for (const e of R || []) e.getMirror && e.getMirror({
                    nodeMirror: hc,
                    crossOriginIframeMirror: Z.crossOriginIframeMirror,
                    crossOriginIframeStyleMirror: Z.crossOriginIframeStyleMirror
                });
                const Y = new oc;
                lc = new sc({
                    recordCanvas: v,
                    mutationCb: V,
                    win: window,
                    blockClass: n,
                    blockSelector: o,
                    mirror: hc,
                    sampling: w.canvas,
                    dataURLOptions: b
                });
                const J = new Wl({
                    mutationCb: j,
                    scrollCb: W,
                    bypassOptions: {
                        blockClass: n,
                        blockSelector: o,
                        maskTextClass: l,
                        maskTextSelector: c,
                        inlineStylesheet: h,
                        maskInputOptions: F,
                        dataURLOptions: b,
                        maskTextFn: m,
                        maskInputFn: f,
                        recordCanvas: v,
                        inlineImages: A,
                        sampling: w,
                        slimDOMOptions: B,
                        iframeManager: Z,
                        stylesheetManager: G,
                        canvasManager: lc,
                        keepIframeSrcFn: E,
                        processedNodeManager: Y
                    },
                    mirror: hc
                });
                ac = (e = !1) => {
                    if (!C) return;
                    ic({
                        type: cl.Meta,
                        data: {
                            href: window.location.href,
                            width: Ka(),
                            height: Ha()
                        }
                    }, e), G.reset(), J.init(), Ml.forEach((e => e.lock()));
                    const t = function(e, t) {
                        const {
                            mirror: r = new I,
                            blockClass: s = "rr-block",
                            blockSelector: n = null,
                            maskTextClass: o = "rr-mask",
                            maskTextSelector: i = null,
                            inlineStylesheet: a = !0,
                            inlineImages: l = !1,
                            recordCanvas: c = !1,
                            maskAllInputs: h = !1,
                            maskTextFn: u,
                            maskInputFn: p,
                            slimDOM: d = !1,
                            dataURLOptions: f,
                            preserveWhiteSpace: m,
                            onSerialize: g,
                            onIframeLoad: y,
                            iframeLoadTimeout: w,
                            onStylesheetLoad: b,
                            stylesheetLoadTimeout: S,
                            keepIframeSrcFn: C = (() => !1),
                            applyBackgroundColorToBlockedElements: v = !1
                        } = t || {};
                        return te(e, {
                            doc: e,
                            mirror: r,
                            blockClass: s,
                            blockSelector: n,
                            maskTextClass: o,
                            maskTextSelector: i,
                            skipChild: !1,
                            inlineStylesheet: a,
                            maskInputOptions: !0 === h ? {
                                color: !0,
                                date: !0,
                                "datetime-local": !0,
                                email: !0,
                                month: !0,
                                number: !0,
                                range: !0,
                                search: !0,
                                tel: !0,
                                text: !0,
                                time: !0,
                                url: !0,
                                week: !0,
                                textarea: !0,
                                select: !0,
                                password: !0
                            } : !1 === h ? {
                                password: !0
                            } : h,
                            maskTextFn: u,
                            maskInputFn: p,
                            slimDOMOptions: !0 === d || "all" === d ? {
                                script: !0,
                                comment: !0,
                                headFavicon: !0,
                                headWhitespace: !0,
                                headMetaDescKeywords: "all" === d,
                                headMetaSocial: !0,
                                headMetaRobots: !0,
                                headMetaHttpEquiv: !0,
                                headMetaAuthorship: !0,
                                headMetaVerification: !0
                            } : !1 === d ? {} : d,
                            dataURLOptions: f,
                            inlineImages: l,
                            recordCanvas: c,
                            preserveWhiteSpace: m,
                            onSerialize: g,
                            onIframeLoad: y,
                            iframeLoadTimeout: w,
                            onStylesheetLoad: b,
                            stylesheetLoadTimeout: S,
                            keepIframeSrcFn: C,
                            newlyAddedElement: !1,
                            applyBackgroundColorToBlockedElements: v
                        })
                    }(document, {
                        mirror: hc,
                        blockClass: n,
                        blockSelector: o,
                        maskTextClass: l,
                        maskTextSelector: c,
                        inlineStylesheet: h,
                        maskAllInputs: F,
                        maskTextFn: m,
                        maskInputFn: f,
                        slimDOM: B,
                        dataURLOptions: b,
                        recordCanvas: v,
                        inlineImages: A,
                        applyBackgroundColorToBlockedElements: L,
                        onSerialize: e => {
                            rl(e, hc) && Z.addIframe(e), sl(e, hc) && G.trackLinkElement(e), nl(e) && J.addShadowRoot(za.shadowRoot(e), document)
                        },
                        onIframeLoad: (e, t) => {
                            Z.attachIframe(e, t), J.observeAttachShadow(e)
                        },
                        onStylesheetLoad: (e, t) => {
                            G.attachLinkElement(e, t)
                        },
                        keepIframeSrcFn: E
                    });
                    if (!t) return console.warn("Failed to snapshot the document");
                    ic({
                        type: cl.FullSnapshot,
                        data: {
                            node: t,
                            initialOffset: Xa(window)
                        }
                    }, e), Ml.forEach((e => e.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && G.adoptStyleSheets(document.adoptedStyleSheets, hc.getId(document))
                };
                try {
                    const e = [],
                        t = e => {
                            var t;
                            return xl(Bl)({
                                mutationCb: j,
                                mousemoveCb: (e, t) => ic({
                                    type: cl.IncrementalSnapshot,
                                    data: {
                                        source: t,
                                        positions: e
                                    }
                                }),
                                mouseInteractionCb: e => ic({
                                    type: cl.IncrementalSnapshot,
                                    data: {
                                        source: hl.MouseInteraction,
                                        ...e
                                    }
                                }),
                                scrollCb: W,
                                viewportResizeCb: e => ic({
                                    type: cl.IncrementalSnapshot,
                                    data: {
                                        source: hl.ViewportResize,
                                        ...e
                                    }
                                }),
                                inputCb: e => ic({
                                    type: cl.IncrementalSnapshot,
                                    data: {
                                        source: hl.Input,
                                        ...e
                                    }
                                }),
                                mediaInteractionCb: e => ic({
                                    type: cl.IncrementalSnapshot,
                                    data: {
                                        source: hl.MediaInteraction,
                                        ...e
                                    }
                                }),
                                styleSheetRuleCb: e => ic({
                                    type: cl.IncrementalSnapshot,
                                    data: {
                                        source: hl.StyleSheetRule,
                                        ...e
                                    }
                                }),
                                styleDeclarationCb: e => ic({
                                    type: cl.IncrementalSnapshot,
                                    data: {
                                        source: hl.StyleDeclaration,
                                        ...e
                                    }
                                }),
                                canvasMutationCb: V,
                                fontCb: e => ic({
                                    type: cl.IncrementalSnapshot,
                                    data: {
                                        source: hl.Font,
                                        ...e
                                    }
                                }),
                                selectionCb: e => {
                                    ic({
                                        type: cl.IncrementalSnapshot,
                                        data: {
                                            source: hl.Selection,
                                            ...e
                                        }
                                    })
                                },
                                customElementCb: e => {
                                    ic({
                                        type: cl.IncrementalSnapshot,
                                        data: {
                                            source: hl.CustomElement,
                                            ...e
                                        }
                                    })
                                },
                                blockClass: n,
                                ignoreClass: i,
                                ignoreSelector: a,
                                maskTextClass: l,
                                maskTextSelector: c,
                                maskInputOptions: F,
                                inlineStylesheet: h,
                                sampling: w,
                                recordDOM: C,
                                recordCanvas: v,
                                inlineImages: A,
                                userTriggeredOnInput: O,
                                collectFonts: M,
                                doc: e,
                                maskInputFn: f,
                                maskTextFn: m,
                                keepIframeSrcFn: E,
                                blockSelector: o,
                                slimDOMOptions: B,
                                dataURLOptions: b,
                                mirror: hc,
                                iframeManager: Z,
                                stylesheetManager: G,
                                shadowDomManager: J,
                                processedNodeManager: Y,
                                canvasManager: lc,
                                ignoreCSSAttributes: T,
                                plugins: (null == (t = null == R ? void 0 : R.filter((e => e.observer))) ? void 0 : t.map((e => ({
                                    observer: e.observer,
                                    options: e.options,
                                    callback: t => ic({
                                        type: cl.Plugin,
                                        data: {
                                            plugin: e.name,
                                            payload: t
                                        }
                                    })
                                })))) || []
                            }, g)
                        };
                    Z.addLoadListener((r => {
                        try {
                            e.push(t(r.contentDocument))
                        } catch (e) {
                            console.warn(e)
                        }
                    }));
                    const r = () => {
                        ac(), e.push(t(document)), cc = !0
                    };
                    return "interactive" === document.readyState || "complete" === document.readyState ? r() : (e.push(ja("DOMContentLoaded", (() => {
                        ic({
                            type: cl.DomContentLoaded,
                            data: {}
                        }), "DOMContentLoaded" === x && r()
                    }))), e.push(ja("load", (() => {
                        ic({
                            type: cl.Load,
                            data: {}
                        }), "load" === x && r()
                    }), window))), () => {
                        e.forEach((e => e())), Y.destroy(), cc = !1, kl = void 0
                    }
                } catch (e) {
                    console.warn(e)
                }
            }
            var pc, dc;
            uc.addCustomEvent = (e, t) => {
                if (!cc) throw new Error("please add custom event after start recording");
                ic({
                    type: cl.Custom,
                    data: {
                        tag: e,
                        payload: t
                    }
                })
            }, uc.freezePage = () => {
                Ml.forEach((e => e.freeze()))
            }, uc.takeFullSnapshot = e => {
                if (!cc) throw new Error("please take full snapshot after start recording");
                ac(e)
            }, uc.mirror = hc, (dc = pc || (pc = {}))[dc.NotStarted = 0] = "NotStarted", dc[dc.Running = 1] = "Running", dc[dc.Stopped = 2] = "Stopped"
        }
    }
]);
//# sourceMappingURL=1bfd1ec7699fcc173f6891c7aada42cd65abc8c12259c29995ddb0381b92fe13.js.map