"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8378], {
        68378: (e, t, r) => {
            r.r(t), r.d(t, {
                PLUGIN_NAME: () => Nl,
                getRecordConsolePlugin: () => Ml
            });
            var s, n = Object.defineProperty,
                i = (e, t, r) => ((e, t, r) => t in e ? n(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r)(e, "symbol" != typeof t ? t + "" : t, r),
                o = Object.defineProperty,
                l = (e, t, r) => ((e, t, r) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r)(e, "symbol" != typeof t ? t + "" : t, r),
                a = Object.defineProperty,
                h = (e, t, r) => ((e, t, r) => t in e ? a(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r)(e, "symbol" != typeof t ? t + "" : t, r);
            const c = {
                    Node: ["childNodes", "parentNode", "parentElement", "textContent"],
                    ShadowRoot: ["host", "styleSheets"],
                    Element: ["shadowRoot", "querySelector", "querySelectorAll"],
                    MutationObserver: []
                },
                u = {
                    Node: ["contains", "getRootNode"],
                    ShadowRoot: ["getSelection"],
                    Element: [],
                    MutationObserver: ["constructor"]
                },
                p = {};

            function f(e) {
                if (p[e]) return p[e];
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
                    i = e in u ? u[e] : void 0,
                    o = Boolean(i && i.every((e => {
                        var t;
                        return "function" == typeof r[e] && (null == (t = r[e]) ? void 0 : t.toString().includes("[native code]"))
                    })));
                if (n && o) return p[e] = t.prototype, t.prototype;
                try {
                    const s = document.createElement("iframe");
                    document.body.appendChild(s);
                    const n = s.contentWindow;
                    if (!n) return t.prototype;
                    const i = n[e].prototype;
                    return document.body.removeChild(s), i ? p[e] = i : r
                } catch {
                    return r
                }
            }
            const d = {};

            function m(e, t, r) {
                var s;
                const n = `${e}.${String(r)}`;
                if (d[n]) return d[n].call(t);
                const i = f(e),
                    o = null == (s = Object.getOwnPropertyDescriptor(i, r)) ? void 0 : s.get;
                return o ? (d[n] = o, o.call(t)) : t[r]
            }
            const g = {};

            function y(e, t, r) {
                const s = `${e}.${String(r)}`;
                if (g[s]) return g[s].bind(t);
                const n = f(e)[r];
                return "function" != typeof n ? t[r] : (g[s] = n, n.bind(t))
            }
            const w = {
                childNodes: function(e) {
                    return m("Node", e, "childNodes")
                },
                parentNode: function(e) {
                    return m("Node", e, "parentNode")
                },
                parentElement: function(e) {
                    return m("Node", e, "parentElement")
                },
                textContent: function(e) {
                    return m("Node", e, "textContent")
                },
                contains: function(e, t) {
                    return y("Node", e, "contains")(t)
                },
                getRootNode: function(e) {
                    return y("Node", e, "getRootNode")()
                },
                host: function(e) {
                    return e && "host" in e ? m("ShadowRoot", e, "host") : null
                },
                styleSheets: function(e) {
                    return e.styleSheets
                },
                shadowRoot: function(e) {
                    return e && "shadowRoot" in e ? m("Element", e, "shadowRoot") : null
                },
                querySelector: function(e, t) {
                    return m("Element", e, "querySelector")(t)
                },
                querySelectorAll: function(e, t) {
                    return m("Element", e, "querySelectorAll")(t)
                },
                mutationObserver: function() {
                    return f("MutationObserver").constructor
                }
            };
            class b {
                constructor() {
                    h(this, "idNodeMap", new Map), h(this, "nodeMetaMap", new WeakMap)
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

            function v(e, t, r) {
                if (!e) return !1;
                if (e.nodeType !== e.ELEMENT_NODE) return !!r && v(w.parentNode(e), t, r);
                for (let r = e.classList.length; r--;) {
                    const s = e.classList[r];
                    if (t.test(s)) return !0
                }
                return !!r && v(w.parentNode(e), t, r)
            }

            function C(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
            }

            function x(e) {
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
            var S = {
                    exports: {}
                },
                I = String,
                O = function() {
                    return {
                        isColorSupported: !1,
                        reset: I,
                        bold: I,
                        dim: I,
                        italic: I,
                        underline: I,
                        inverse: I,
                        hidden: I,
                        strikethrough: I,
                        black: I,
                        red: I,
                        green: I,
                        yellow: I,
                        blue: I,
                        magenta: I,
                        cyan: I,
                        white: I,
                        gray: I,
                        bgBlack: I,
                        bgRed: I,
                        bgGreen: I,
                        bgYellow: I,
                        bgBlue: I,
                        bgMagenta: I,
                        bgCyan: I,
                        bgWhite: I
                    }
                };
            S.exports = O(), S.exports.createColors = O;
            var A = S.exports;
            const k = x(Object.freeze(Object.defineProperty({
                __proto__: null,
                default: {}
            }, Symbol.toStringTag, {
                value: "Module"
            })));
            let R = A,
                E = k,
                N = class e extends Error {
                    constructor(t, r, s, n, i, o) {
                        super(t), this.name = "CssSyntaxError", this.reason = t, i && (this.file = i), n && (this.source = n), o && (this.plugin = o), void 0 !== r && void 0 !== s && ("number" == typeof r ? (this.line = r, this.column = s) : (this.line = r.line, this.column = r.column, this.endLine = s.line, this.endColumn = s.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, e)
                    }
                    setMessage() {
                        this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", void 0 !== this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
                    }
                    showSourceCode(e) {
                        if (!this.source) return "";
                        let t = this.source;
                        null == e && (e = R.isColorSupported), E && e && (t = E(t));
                        let r, s, n = t.split(/\r?\n/),
                            i = Math.max(this.line - 3, 0),
                            o = Math.min(this.line + 2, n.length),
                            l = String(o).length;
                        if (e) {
                            let {
                                bold: e,
                                gray: t,
                                red: n
                            } = R.createColors(!0);
                            r = t => e(n(t)), s = e => t(e)
                        } else r = s = e => e;
                        return n.slice(i, o).map(((e, t) => {
                            let n = i + 1 + t,
                                o = " " + (" " + n).slice(-l) + " | ";
                            if (n === this.line) {
                                let t = s(o.replace(/\d/g, " ")) + e.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                                return r(">") + s(o) + e + "\n " + t + r("^")
                            }
                            return " " + s(o) + e
                        })).join("\n")
                    }
                    toString() {
                        let e = this.showSourceCode();
                        return e && (e = "\n\n" + e + "\n"), this.name + ": " + this.message + e
                    }
                };
            var M = N;
            N.default = N;
            var P = {};
            P.isClean = Symbol("isClean"), P.my = Symbol("my");
            const B = {
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
            let F = class {
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
                            i = this.raw(n, "before");
                        i && this.builder(i), this.stringify(n, t !== s || r)
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
                    if (!n) return B[r];
                    let i = e.root();
                    if (i.rawCache || (i.rawCache = {}), void 0 !== i.rawCache[r]) return i.rawCache[r];
                    if ("before" === r || "after" === r) return this.beforeAfter(e, r);
                    {
                        let n = "raw" + ((o = r)[0].toUpperCase() + o.slice(1));
                        this[n] ? s = this[n](i, e) : i.walk((e => {
                            if (s = e.raws[t], void 0 !== s) return !1
                        }))
                    }
                    var o;
                    return void 0 === s && (s = B[r]), i.rawCache[r] = s, s
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
            var L = F;
            F.default = F;
            let j = L;

            function T(e, t) {
                new j(t).stringify(e)
            }
            var U = T;
            T.default = T;
            let {
                isClean: D,
                my: z
            } = P, Z = M, V = L, Y = U;

            function G(e, t) {
                let r = new e.constructor;
                for (let s in e) {
                    if (!Object.prototype.hasOwnProperty.call(e, s)) continue;
                    if ("proxyCache" === s) continue;
                    let n = e[s],
                        i = typeof n;
                    "parent" === s && "object" === i ? t && (r[s] = t) : "source" === s ? r[s] = n : Array.isArray(n) ? r[s] = n.map((e => G(e, r))) : ("object" === i && null !== n && (n = G(n)), r[s] = n)
                }
                return r
            }
            let _ = class {
                constructor(e = {}) {
                    this.raws = {}, this[D] = !1, this[z] = !0;
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
                    let t = G(this);
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
                    return new Z(e)
                }
                getProxyProcessor() {
                    return {
                        get: (e, t) => "proxyOf" === t ? e : "root" === t ? () => e.root().toProxy() : e[t],
                        set: (e, t, r) => (e[t] === r || (e[t] = r, "prop" !== t && "value" !== t && "name" !== t && "params" !== t && "important" !== t && "text" !== t || e.markDirty()), !0)
                    }
                }
                markDirty() {
                    if (this[D]) {
                        this[D] = !1;
                        let e = this;
                        for (; e = e.parent;) e[D] = !1
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
                    return (new V).raw(this, e, t)
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
                            let i = t.get(s.input);
                            null == i && (i = n, t.set(s.input, n), n++), r[e] = {
                                end: s.end,
                                inputId: i,
                                start: s.start
                            }
                        } else r[e] = s
                    }
                    return s && (r.inputs = [...t.keys()].map((e => e.toJSON()))), r
                }
                toProxy() {
                    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
                }
                toString(e = Y) {
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
            var W = _;
            _.default = _;
            let J = W,
                X = class extends J {
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
            var K = X;
            X.default = X;
            var H = {
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
                SourceMapConsumer: $,
                SourceMapGenerator: Q
            } = k, {
                existsSync: q,
                readFileSync: ee
            } = k, {
                dirname: te,
                join: re
            } = k;
            let se = class {
                constructor(e, t) {
                    if (!1 === t.map) return;
                    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
                    let r = t.map ? t.map.prev : void 0,
                        s = this.loadMap(t.from, r);
                    !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = te(this.mapFile)), s && (this.text = s)
                }
                consumer() {
                    return this.consumerCache || (this.consumerCache = new $(this.text)), this.consumerCache
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
                    if (this.root = te(e), q(e)) return this.mapFile = e, ee(e, "utf-8").toString().trim()
                }
                loadMap(e, t) {
                    if (!1 === t) return !1;
                    if (t) {
                        if ("string" == typeof t) return t;
                        if ("function" != typeof t) {
                            if (t instanceof $) return Q.fromSourceMap(t).toString();
                            if (t instanceof Q) return t.toString();
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
                            return e && (t = re(te(e), t)), this.loadFile(t)
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
            var ne = se;
            se.default = se;
            let {
                SourceMapConsumer: ie,
                SourceMapGenerator: oe
            } = k, {
                fileURLToPath: le,
                pathToFileURL: ae
            } = k, {
                isAbsolute: he,
                resolve: ce
            } = k, {
                nanoid: ue
            } = H, pe = k, fe = M, de = ne, me = Symbol("fromOffsetCache"), ge = Boolean(ie && oe), ye = Boolean(ce && he), we = class {
                constructor(e, t = {}) {
                    if (null == e || "object" == typeof e && !e.toString) throw new Error(`PostCSS received ${e} instead of CSS string`);
                    if (this.css = e.toString(), "﻿" === this.css[0] || "￾" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!ye || /^\w+:\/\//.test(t.from) || he(t.from) ? this.file = t.from : this.file = ce(t.from)), ye && ge) {
                        let e = new de(this.css, t);
                        if (e.text) {
                            this.map = e;
                            let t = e.consumer().file;
                            !this.file && t && (this.file = this.mapResolve(t))
                        }
                    }
                    this.file || (this.id = "<input css " + ue(6) + ">"), this.map && (this.map.file = this.from)
                }
                error(e, t, r, s = {}) {
                    let n, i, o;
                    if (t && "object" == typeof t) {
                        let e = t,
                            s = r;
                        if ("number" == typeof e.offset) {
                            let s = this.fromOffset(e.offset);
                            t = s.line, r = s.col
                        } else t = e.line, r = e.column;
                        if ("number" == typeof s.offset) {
                            let e = this.fromOffset(s.offset);
                            i = e.line, o = e.col
                        } else i = s.line, o = s.column
                    } else if (!r) {
                        let e = this.fromOffset(t);
                        t = e.line, r = e.col
                    }
                    let l = this.origin(t, r, i, o);
                    return n = l ? new fe(e, void 0 === l.endLine ? l.line : {
                        column: l.column,
                        line: l.line
                    }, void 0 === l.endLine ? l.column : {
                        column: l.endColumn,
                        line: l.endLine
                    }, l.source, l.file, s.plugin) : new fe(e, void 0 === i ? t : {
                        column: r,
                        line: t
                    }, void 0 === i ? r : {
                        column: o,
                        line: i
                    }, this.css, this.file, s.plugin), n.input = {
                        column: r,
                        endColumn: o,
                        endLine: i,
                        line: t,
                        source: this.css
                    }, this.file && (ae && (n.input.url = ae(this.file).toString()), n.input.file = this.file), n
                }
                fromOffset(e) {
                    let t, r;
                    if (this[me]) r = this[me];
                    else {
                        let e = this.css.split("\n");
                        r = new Array(e.length);
                        let t = 0;
                        for (let s = 0, n = e.length; s < n; s++) r[s] = t, t += e[s].length + 1;
                        this[me] = r
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
                    return /^\w+:\/\//.test(e) ? e : ce(this.map.consumer().sourceRoot || this.map.root || ".", e)
                }
                origin(e, t, r, s) {
                    if (!this.map) return !1;
                    let n, i, o = this.map.consumer(),
                        l = o.originalPositionFor({
                            column: t,
                            line: e
                        });
                    if (!l.source) return !1;
                    "number" == typeof r && (n = o.originalPositionFor({
                        column: s,
                        line: r
                    })), i = he(l.source) ? ae(l.source) : new URL(l.source, this.map.consumer().sourceRoot || ae(this.map.mapFile));
                    let a = {
                        column: l.column,
                        endColumn: n && n.column,
                        endLine: n && n.line,
                        line: l.line,
                        url: i.toString()
                    };
                    if ("file:" === i.protocol) {
                        if (!le) throw new Error("file: protocol is not available in this PostCSS build");
                        a.file = le(i)
                    }
                    let h = o.sourceContentFor(l.source);
                    return h && (a.source = h), a
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
            var be = we;
            we.default = we, pe && pe.registerInput && pe.registerInput(we);
            let {
                SourceMapConsumer: ve,
                SourceMapGenerator: Ce
            } = k, {
                dirname: xe,
                relative: Se,
                resolve: Ie,
                sep: Oe
            } = k, {
                pathToFileURL: Ae
            } = k, ke = be, Re = Boolean(ve && Ce), Ee = Boolean(xe && Ie && Se && Oe);
            var Ne = class {
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
                            s = e.root || xe(e.file);
                        !1 === this.mapOpts.sourcesContent ? (t = new ve(e.text), t.sourcesContent && (t.sourcesContent = null)) : t = e.consumer(), this.map.applySourceMap(t, r, this.toUrl(this.path(s)))
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
                    if (this.clearAnnotation(), Ee && Re && this.isMap()) return this.generateMap();
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
                        e.file = this.outputFile(), this.map = Ce.fromSourceMap(e, {
                            ignoreInvalidMapping: !0
                        })
                    } else this.map = new Ce({
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
                    this.css = "", this.map = new Ce({
                        file: this.outputFile(),
                        ignoreInvalidMapping: !0
                    });
                    let e, t, r = 1,
                        s = 1,
                        n = "<no source>",
                        i = {
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
                    this.stringify(this.root, ((o, l, a) => {
                        if (this.css += o, l && "end" !== a && (i.generated.line = r, i.generated.column = s - 1, l.source && l.source.start ? (i.source = this.sourcePath(l), i.original.line = l.source.start.line, i.original.column = l.source.start.column - 1, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, this.map.addMapping(i))), e = o.match(/\n/g), e ? (r += e.length, t = o.lastIndexOf("\n"), s = o.length - t) : s += o.length, l && "start" !== a) {
                            let e = l.parent || {
                                raws: {}
                            };
                            ("decl" === l.type || "atrule" === l.type && !l.nodes) && l === e.last && !e.raws.semicolon || (l.source && l.source.end ? (i.source = this.sourcePath(l), i.original.line = l.source.end.line, i.original.column = l.source.end.column - 1, i.generated.line = r, i.generated.column = s - 2, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, i.generated.line = r, i.generated.column = s - 1, this.map.addMapping(i)))
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
                    let r = this.opts.to ? xe(this.opts.to) : ".";
                    "string" == typeof this.mapOpts.annotation && (r = xe(Ie(r, this.mapOpts.annotation)));
                    let s = Se(r, e);
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
                            let e = new ke(this.originalCSS, this.opts);
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
                    if (Ae) {
                        let t = Ae(e).toString();
                        return this.memoizedFileURLs.set(e, t), t
                    }
                    throw new Error("`map.absolute` option is not available in this PostCSS build")
                }
                toUrl(e) {
                    let t = this.memoizedURLs.get(e);
                    if (t) return t;
                    "\\" === Oe && (e = e.replace(/\\/g, "/"));
                    let r = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
                    return this.memoizedURLs.set(e, r), r
                }
            };
            let Me = W,
                Pe = class extends Me {
                    constructor(e) {
                        super(e), this.type = "comment"
                    }
                };
            var Be = Pe;
            Pe.default = Pe;
            let Fe, Le, je, Te, {
                    isClean: Ue,
                    my: De
                } = P,
                ze = K,
                Ze = Be,
                Ve = W;

            function Ye(e) {
                return e.map((e => (e.nodes && (e.nodes = Ye(e.nodes)), delete e.source, e)))
            }

            function Ge(e) {
                if (e[Ue] = !1, e.proxyOf.nodes)
                    for (let t of e.proxyOf.nodes) Ge(t)
            }
            let _e = class e extends Ve {
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
                        i = this.normalize(t, this.proxyOf.nodes[s], n).reverse();
                    s = this.index(e);
                    for (let e of i) this.proxyOf.nodes.splice(s, 0, e);
                    for (let e in this.indexes) r = this.indexes[e], s <= r && (this.indexes[e] = r + i.length);
                    return this.markDirty(), this
                }
                normalize(t, r) {
                    if ("string" == typeof t) t = Ye(Fe(t).nodes);
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
                        "string" != typeof t.value && (t.value = String(t.value)), t = [new ze(t)]
                    } else if (t.selector) t = [new Le(t)];
                    else if (t.name) t = [new je(t)];
                    else {
                        if (!t.text) throw new Error("Unknown node type in node creation");
                        t = [new Ze(t)]
                    }
                    return t.map((t => (t[De] || e.rebuild(t), (t = t.proxyOf).parent && t.parent.removeChild(t), t[Ue] && Ge(t), void 0 === t.raws.before && r && void 0 !== r.raws.before && (t.raws.before = r.raws.before.replace(/\S/g, "")), t.parent = this.proxyOf, t)))
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
            _e.registerParse = e => {
                Fe = e
            }, _e.registerRule = e => {
                Le = e
            }, _e.registerAtRule = e => {
                je = e
            }, _e.registerRoot = e => {
                Te = e
            };
            var We = _e;
            _e.default = _e, _e.rebuild = e => {
                "atrule" === e.type ? Object.setPrototypeOf(e, je.prototype) : "rule" === e.type ? Object.setPrototypeOf(e, Le.prototype) : "decl" === e.type ? Object.setPrototypeOf(e, ze.prototype) : "comment" === e.type ? Object.setPrototypeOf(e, Ze.prototype) : "root" === e.type && Object.setPrototypeOf(e, Te.prototype), e[De] = !0, e.nodes && e.nodes.forEach((e => {
                    _e.rebuild(e)
                }))
            };
            let Je, Xe, Ke = We,
                He = class extends Ke {
                    constructor(e) {
                        super({
                            type: "document",
                            ...e
                        }), this.nodes || (this.nodes = [])
                    }
                    toResult(e = {}) {
                        return new Je(new Xe, this, e).stringify()
                    }
                };
            He.registerLazyResult = e => {
                Je = e
            }, He.registerProcessor = e => {
                Xe = e
            };
            var $e = He;
            He.default = He;
            let Qe = class {
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
            var qe = Qe;
            Qe.default = Qe;
            let et = qe,
                tt = class {
                    constructor(e, t, r) {
                        this.processor = e, this.messages = [], this.root = t, this.opts = r, this.css = void 0, this.map = void 0
                    }
                    toString() {
                        return this.css
                    }
                    warn(e, t = {}) {
                        t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
                        let r = new et(e, t);
                        return this.messages.push(r), r
                    }
                    warnings() {
                        return this.messages.filter((e => "warning" === e.type))
                    }
                    get content() {
                        return this.css
                    }
                };
            var rt = tt;
            tt.default = tt;
            const st = "'".charCodeAt(0),
                nt = '"'.charCodeAt(0),
                it = "\\".charCodeAt(0),
                ot = "/".charCodeAt(0),
                lt = "\n".charCodeAt(0),
                at = " ".charCodeAt(0),
                ht = "\f".charCodeAt(0),
                ct = "\t".charCodeAt(0),
                ut = "\r".charCodeAt(0),
                pt = "[".charCodeAt(0),
                ft = "]".charCodeAt(0),
                dt = "(".charCodeAt(0),
                mt = ")".charCodeAt(0),
                gt = "{".charCodeAt(0),
                yt = "}".charCodeAt(0),
                wt = ";".charCodeAt(0),
                bt = "*".charCodeAt(0),
                vt = ":".charCodeAt(0),
                Ct = "@".charCodeAt(0),
                xt = /[\t\n\f\r "#'()/;[\\\]{}]/g,
                St = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
                It = /.[\r\n"'(/\\]/,
                Ot = /[\da-f]/i;
            let At = We,
                kt = class extends At {
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
            var Rt = kt;
            kt.default = kt, At.registerAtRule(kt);
            let Et, Nt, Mt = We,
                Pt = class extends Mt {
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
                        return new Et(new Nt, this, e).stringify()
                    }
                };
            Pt.registerLazyResult = e => {
                Et = e
            }, Pt.registerProcessor = e => {
                Nt = e
            };
            var Bt = Pt;
            Pt.default = Pt, Mt.registerRoot(Pt);
            let Ft = {
                comma: e => Ft.split(e, [","], !0),
                space: e => Ft.split(e, [" ", "\n", "\t"]),
                split(e, t, r) {
                    let s = [],
                        n = "",
                        i = !1,
                        o = 0,
                        l = !1,
                        a = "",
                        h = !1;
                    for (let r of e) h ? h = !1 : "\\" === r ? h = !0 : l ? r === a && (l = !1) : '"' === r || "'" === r ? (l = !0, a = r) : "(" === r ? o += 1 : ")" === r ? o > 0 && (o -= 1) : 0 === o && t.includes(r) && (i = !0), i ? ("" !== n && s.push(n.trim()), n = "", i = !1) : n += r;
                    return (r || "" !== n) && s.push(n.trim()), s
                }
            };
            var Lt = Ft;
            Ft.default = Ft;
            let jt = We,
                Tt = Lt,
                Ut = class extends jt {
                    constructor(e) {
                        super(e), this.type = "rule", this.nodes || (this.nodes = [])
                    }
                    get selectors() {
                        return Tt.comma(this.selector)
                    }
                    set selectors(e) {
                        let t = this.selector ? this.selector.match(/,\s*/) : null,
                            r = t ? t[0] : "," + this.raw("between", "beforeOpen");
                        this.selector = e.join(r)
                    }
                };
            var Dt = Ut;
            Ut.default = Ut, jt.registerRule(Ut);
            let zt = K,
                Zt = function(e, t = {}) {
                    let r, s, n, i, o, l, a, h, c, u, p = e.css.valueOf(),
                        f = t.ignoreErrors,
                        d = p.length,
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
                            return 0 === y.length && m >= d
                        },
                        nextToken: function(e) {
                            if (y.length) return y.pop();
                            if (m >= d) return;
                            let t = !!e && e.ignoreUnclosed;
                            switch (r = p.charCodeAt(m), r) {
                                case lt:
                                case at:
                                case ct:
                                case ut:
                                case ht:
                                    s = m;
                                    do {
                                        s += 1, r = p.charCodeAt(s)
                                    } while (r === at || r === lt || r === ct || r === ut || r === ht);
                                    u = ["space", p.slice(m, s)], m = s - 1;
                                    break;
                                case pt:
                                case ft:
                                case gt:
                                case yt:
                                case vt:
                                case wt:
                                case mt: {
                                    let e = String.fromCharCode(r);
                                    u = [e, e, m];
                                    break
                                }
                                case dt:
                                    if (h = g.length ? g.pop()[1] : "", c = p.charCodeAt(m + 1), "url" === h && c !== st && c !== nt && c !== at && c !== lt && c !== ct && c !== ht && c !== ut) {
                                        s = m;
                                        do {
                                            if (l = !1, s = p.indexOf(")", s + 1), -1 === s) {
                                                if (f || t) {
                                                    s = m;
                                                    break
                                                }
                                                w("bracket")
                                            }
                                            for (a = s; p.charCodeAt(a - 1) === it;) a -= 1, l = !l
                                        } while (l);
                                        u = ["brackets", p.slice(m, s + 1), m, s], m = s
                                    } else s = p.indexOf(")", m + 1), i = p.slice(m, s + 1), -1 === s || It.test(i) ? u = ["(", "(", m] : (u = ["brackets", i, m, s], m = s);
                                    break;
                                case st:
                                case nt:
                                    n = r === st ? "'" : '"', s = m;
                                    do {
                                        if (l = !1, s = p.indexOf(n, s + 1), -1 === s) {
                                            if (f || t) {
                                                s = m + 1;
                                                break
                                            }
                                            w("string")
                                        }
                                        for (a = s; p.charCodeAt(a - 1) === it;) a -= 1, l = !l
                                    } while (l);
                                    u = ["string", p.slice(m, s + 1), m, s], m = s;
                                    break;
                                case Ct:
                                    xt.lastIndex = m + 1, xt.test(p), s = 0 === xt.lastIndex ? p.length - 1 : xt.lastIndex - 2, u = ["at-word", p.slice(m, s + 1), m, s], m = s;
                                    break;
                                case it:
                                    for (s = m, o = !0; p.charCodeAt(s + 1) === it;) s += 1, o = !o;
                                    if (r = p.charCodeAt(s + 1), o && r !== ot && r !== at && r !== lt && r !== ct && r !== ut && r !== ht && (s += 1, Ot.test(p.charAt(s)))) {
                                        for (; Ot.test(p.charAt(s + 1));) s += 1;
                                        p.charCodeAt(s + 1) === at && (s += 1)
                                    }
                                    u = ["word", p.slice(m, s + 1), m, s], m = s;
                                    break;
                                default:
                                    r === ot && p.charCodeAt(m + 1) === bt ? (s = p.indexOf("*/", m + 2) + 1, 0 === s && (f || t ? s = p.length : w("comment")), u = ["comment", p.slice(m, s + 1), m, s], m = s) : (St.lastIndex = m + 1, St.test(p), s = 0 === St.lastIndex ? p.length - 1 : St.lastIndex - 2, u = ["word", p.slice(m, s + 1), m, s], g.push(u), m = s)
                            }
                            return m++, u
                        },
                        position: function() {
                            return m
                        }
                    }
                },
                Vt = Be,
                Yt = Rt,
                Gt = Bt,
                _t = Dt;
            const Wt = {
                empty: !0,
                space: !0
            };
            let Jt = We,
                Xt = class {
                    constructor(e) {
                        this.input = e, this.root = new Gt, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
                            input: e,
                            start: {
                                column: 1,
                                line: 1,
                                offset: 0
                            }
                        }
                    }
                    atrule(e) {
                        let t, r, s, n = new Yt;
                        n.name = e[1].slice(1), "" === n.name && this.unnamedAtrule(n, e), this.init(n, e[2]);
                        let i = !1,
                            o = !1,
                            l = [],
                            a = [];
                        for (; !this.tokenizer.endOfFile();) {
                            if (t = (e = this.tokenizer.nextToken())[0], "(" === t || "[" === t ? a.push("(" === t ? ")" : "]") : "{" === t && a.length > 0 ? a.push("}") : t === a[a.length - 1] && a.pop(), 0 === a.length) {
                                if (";" === t) {
                                    n.source.end = this.getPosition(e[2]), n.source.end.offset++, this.semicolon = !0;
                                    break
                                }
                                if ("{" === t) {
                                    o = !0;
                                    break
                                }
                                if ("}" === t) {
                                    if (l.length > 0) {
                                        for (s = l.length - 1, r = l[s]; r && "space" === r[0];) r = l[--s];
                                        r && (n.source.end = this.getPosition(r[3] || r[2]), n.source.end.offset++)
                                    }
                                    this.end(e);
                                    break
                                }
                                l.push(e)
                            } else l.push(e);
                            if (this.tokenizer.endOfFile()) {
                                i = !0;
                                break
                            }
                        }
                        n.raws.between = this.spacesAndCommentsFromEnd(l), l.length ? (n.raws.afterName = this.spacesAndCommentsFromStart(l), this.raw(n, "params", l), i && (e = l[l.length - 1], n.source.end = this.getPosition(e[3] || e[2]), n.source.end.offset++, this.spaces = n.raws.between, n.raws.between = "")) : (n.raws.afterName = "", n.params = ""), o && (n.nodes = [], this.current = n)
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
                        for (let [i, o] of e.entries()) {
                            if (t = o, r = t[0], "(" === r && (n += 1), ")" === r && (n -= 1), 0 === n && ":" === r) {
                                if (s) {
                                    if ("word" === s[0] && "progid" === s[1]) continue;
                                    return i
                                }
                                this.doubleColon(t)
                            }
                            s = t
                        }
                        return !1
                    }
                    comment(e) {
                        let t = new Vt;
                        this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++;
                        let r = e[1].slice(2, -2);
                        if (/^\s*$/.test(r)) t.text = "", t.raws.left = r, t.raws.right = "";
                        else {
                            let e = r.match(/^(\s*)([^]*\S)(\s*)$/);
                            t.text = e[2], t.raws.left = e[1], t.raws.right = e[3]
                        }
                    }
                    createTokenizer() {
                        this.tokenizer = Zt(this.input)
                    }
                    decl(e, t) {
                        let r = new zt;
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
                        let i, o = [];
                        for (; e.length && (i = e[0][0], "space" === i || "comment" === i);) o.push(e.shift());
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
                        e.some((e => "space" !== e[0] && "comment" !== e[0])) && (r.raws.between += o.map((e => e[1])).join(""), o = []), this.raw(r, "value", o.concat(e), t), r.value.includes(":") && !t && this.checkMissedSemicolon(e)
                    }
                    doubleColon(e) {
                        throw this.input.error("Double colon", {
                            offset: e[2]
                        }, {
                            offset: e[2] + e[1].length
                        })
                    }
                    emptyRule(e) {
                        let t = new _t;
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
                            i = [],
                            o = e[1].startsWith("--"),
                            l = [],
                            a = e;
                        for (; a;) {
                            if (r = a[0], l.push(a), "(" === r || "[" === r) n || (n = a), i.push("(" === r ? ")" : "]");
                            else if (o && s && "{" === r) n || (n = a), i.push("}");
                            else if (0 === i.length) {
                                if (";" === r) {
                                    if (s) return void this.decl(l, o);
                                    break
                                }
                                if ("{" === r) return void this.rule(l);
                                if ("}" === r) {
                                    this.tokenizer.back(l.pop()), t = !0;
                                    break
                                }
                                ":" === r && (s = !0)
                            } else r === i[i.length - 1] && (i.pop(), 0 === i.length && (n = null));
                            a = this.tokenizer.nextToken()
                        }
                        if (this.tokenizer.endOfFile() && (t = !0), i.length > 0 && this.unclosedBracket(n), t && s) {
                            if (!o)
                                for (; l.length && (a = l[l.length - 1][0], "space" === a || "comment" === a);) this.tokenizer.back(l.pop());
                            this.decl(l, o)
                        } else this.unknownWord(l)
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
                        let n, i, o, l, a = r.length,
                            h = "",
                            c = !0;
                        for (let e = 0; e < a; e += 1) n = r[e], i = n[0], "space" !== i || e !== a - 1 || s ? "comment" === i ? (l = r[e - 1] ? r[e - 1][0] : "empty", o = r[e + 1] ? r[e + 1][0] : "empty", Wt[l] || Wt[o] || "," === h.slice(-1) ? c = !1 : h += n[1]) : h += n[1] : c = !1;
                        if (!c) {
                            let s = r.reduce(((e, t) => e + t[1]), "");
                            e.raws[t] = {
                                raw: s,
                                value: h
                            }
                        }
                        e[t] = h
                    }
                    rule(e) {
                        e.pop();
                        let t = new _t;
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
                Kt = be;

            function Ht(e, t) {
                let r = new Kt(e, t),
                    s = new Xt(r);
                try {
                    s.parse()
                } catch (e) {
                    throw e
                }
                return s.root
            }
            var $t = Ht;
            Ht.default = Ht, Jt.registerParse(Ht);
            let {
                isClean: Qt,
                my: qt
            } = P, er = Ne, tr = U, rr = We, sr = $e, nr = rt, ir = $t, or = Bt;
            const lr = {
                    atrule: "AtRule",
                    comment: "Comment",
                    decl: "Declaration",
                    document: "Document",
                    root: "Root",
                    rule: "Rule"
                },
                ar = {
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
                hr = {
                    Once: !0,
                    postcssPlugin: !0,
                    prepare: !0
                },
                cr = 0;

            function ur(e) {
                return "object" == typeof e && "function" == typeof e.then
            }

            function pr(e) {
                let t = !1,
                    r = lr[e.type];
                return "decl" === e.type ? t = e.prop.toLowerCase() : "atrule" === e.type && (t = e.name.toLowerCase()), t && e.append ? [r, r + "-" + t, cr, r + "Exit", r + "Exit-" + t] : t ? [r, r + "-" + t, r + "Exit", r + "Exit-" + t] : e.append ? [r, cr, r + "Exit"] : [r, r + "Exit"]
            }

            function fr(e) {
                let t;
                return t = "document" === e.type ? ["Document", cr, "DocumentExit"] : "root" === e.type ? ["Root", cr, "RootExit"] : pr(e), {
                    eventIndex: 0,
                    events: t,
                    iterator: 0,
                    node: e,
                    visitorIndex: 0,
                    visitors: []
                }
            }

            function dr(e) {
                return e[Qt] = !1, e.nodes && e.nodes.forEach((e => dr(e))), e
            }
            let mr = {},
                gr = class e {
                    constructor(t, r, s) {
                        let n;
                        if (this.stringified = !1, this.processed = !1, "object" != typeof r || null === r || "root" !== r.type && "document" !== r.type)
                            if (r instanceof e || r instanceof nr) n = dr(r.root), r.map && (void 0 === s.map && (s.map = {}), s.map.inline || (s.map.inline = !1), s.map.prev = r.map);
                            else {
                                let e = ir;
                                s.syntax && (e = s.syntax.parse), s.parser && (e = s.parser), e.parse && (e = e.parse);
                                try {
                                    n = e(r, s)
                                } catch (e) {
                                    this.processed = !0, this.error = e
                                }
                                n && !n[qt] && rr.rebuild(n)
                            }
                        else n = dr(r);
                        this.result = new nr(t, n, s), this.helpers = {
                            ...mr,
                            postcss: mr,
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
                                    if (!ar[r] && /^[A-Z]/.test(r)) throw new Error(`Unknown event ${r} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                                    if (!hr[r])
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
                            if (ur(r)) try {
                                await r
                            } catch (e) {
                                throw this.handleError(e)
                            }
                        }
                        if (this.prepareVisitors(), this.hasListener) {
                            let e = this.result.root;
                            for (; !e[Qt];) {
                                e[Qt] = !0;
                                let t = [fr(e)];
                                for (; t.length > 0;) {
                                    let e = this.visitTick(t);
                                    if (ur(e)) try {
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
                                    return ur(t[0]) ? Promise.all(t) : t
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
                            t = tr;
                        e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
                        let r = new er(t, this.result.root, this.result.opts).generate();
                        return this.result.css = r[0], this.result.map = r[1], this.result
                    }
                    sync() {
                        if (this.error) throw this.error;
                        if (this.processed) return this.result;
                        if (this.processed = !0, this.processing) throw this.getAsyncError();
                        for (let e of this.plugins) {
                            if (ur(this.runOnRoot(e))) throw this.getAsyncError()
                        }
                        if (this.prepareVisitors(), this.hasListener) {
                            let e = this.result.root;
                            for (; !e[Qt];) e[Qt] = !0, this.walkSync(e);
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
                            if (ur(e)) throw this.getAsyncError()
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
                                if (r.indexes[n] += 1, !s[Qt]) return s[Qt] = !0, void e.push(fr(s));
                            t.iterator = 0, delete r.indexes[n]
                        }
                        let n = t.events;
                        for (; t.eventIndex < n.length;) {
                            let e = n[t.eventIndex];
                            if (t.eventIndex += 1, e === cr) return void(r.nodes && r.nodes.length && (r[Qt] = !0, t.iterator = r.getIterator()));
                            if (this.listeners[e]) return void(t.visitors = this.listeners[e])
                        }
                        e.pop()
                    }
                    walkSync(e) {
                        e[Qt] = !0;
                        let t = pr(e);
                        for (let r of t)
                            if (r === cr) e.nodes && e.each((e => {
                                e[Qt] || this.walkSync(e)
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
            gr.registerPostcss = e => {
                mr = e
            };
            var yr = gr;
            gr.default = gr, or.registerLazyResult(gr), sr.registerLazyResult(gr);
            let wr = Ne,
                br = U,
                vr = $t;
            const Cr = rt;
            let xr = class {
                constructor(e, t, r) {
                    let s;
                    t = t.toString(), this.stringified = !1, this._processor = e, this._css = t, this._opts = r, this._map = void 0;
                    let n = br;
                    this.result = new Cr(this._processor, s, this._opts), this.result.css = t;
                    let i = this;
                    Object.defineProperty(this.result, "root", {
                        get: () => i.root
                    });
                    let o = new wr(n, s, this._opts, t);
                    if (o.isMap()) {
                        let [e, t] = o.generate();
                        e && (this.result.css = e), t && (this.result.map = t)
                    } else o.clearAnnotation(), this.result.css = o.css
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
                    let e, t = vr;
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
            var Sr = xr;
            xr.default = xr;
            let Ir = Sr,
                Or = yr,
                Ar = $e,
                kr = Bt,
                Rr = class {
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
                        return this.plugins.length || t.parser || t.stringifier || t.syntax ? new Or(this, e, t) : new Ir(this, e, t)
                    }
                    use(e) {
                        return this.plugins = this.plugins.concat(this.normalize([e])), this
                    }
                };
            var Er = Rr;
            Rr.default = Rr, kr.registerProcessor(Rr), Ar.registerProcessor(Rr);
            let Nr = K,
                Mr = ne,
                Pr = Be,
                Br = Rt,
                Fr = be,
                Lr = Bt,
                jr = Dt;

            function Tr(e, t) {
                if (Array.isArray(e)) return e.map((e => Tr(e)));
                let {
                    inputs: r,
                    ...s
                } = e;
                if (r) {
                    t = [];
                    for (let e of r) {
                        let r = {
                            ...e,
                            __proto__: Fr.prototype
                        };
                        r.map && (r.map = {
                            ...r.map,
                            __proto__: Mr.prototype
                        }), t.push(r)
                    }
                }
                if (s.nodes && (s.nodes = e.nodes.map((e => Tr(e, t)))), s.source) {
                    let {
                        inputId: e,
                        ...r
                    } = s.source;
                    s.source = r, null != e && (s.source.input = t[e])
                }
                if ("root" === s.type) return new Lr(s);
                if ("decl" === s.type) return new Nr(s);
                if ("rule" === s.type) return new jr(s);
                if ("comment" === s.type) return new Pr(s);
                if ("atrule" === s.type) return new Br(s);
                throw new Error("Unknown node type: " + e.type)
            }
            var Ur = Tr;
            Tr.default = Tr;
            let Dr = M,
                zr = K,
                Zr = yr,
                Vr = We,
                Yr = Er,
                Gr = U,
                _r = Ur,
                Wr = $e,
                Jr = qe,
                Xr = Be,
                Kr = Rt,
                Hr = rt,
                $r = be,
                Qr = $t,
                qr = Lt,
                es = Dt,
                ts = Bt,
                rs = W;

            function ss(...e) {
                return 1 === e.length && Array.isArray(e[0]) && (e = e[0]), new Yr(e)
            }
            ss.plugin = function(e, t) {
                let r, s = !1;

                function n(...r) {
                    console && console.warn && !s && (s = !0, console.warn(e + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), "MISSING_ENV_VAR".LANG && "MISSING_ENV_VAR".LANG.startsWith("cn") && console.warn(e + ": 里面 postcss.plugin 被弃用. 迁移指南:\nhttps://www.w3ctech.com/topic/2226"));
                    let n = t(...r);
                    return n.postcssPlugin = e, n.postcssVersion = (new Yr).version, n
                }
                return Object.defineProperty(n, "postcss", {
                    get: () => (r || (r = n()), r)
                }), n.process = function(e, t, r) {
                    return ss([n(r)]).process(e, t)
                }, n
            }, ss.stringify = Gr, ss.parse = Qr, ss.fromJSON = _r, ss.list = qr, ss.comment = e => new Xr(e), ss.atRule = e => new Kr(e), ss.decl = e => new zr(e), ss.rule = e => new es(e), ss.root = e => new ts(e), ss.document = e => new Wr(e), ss.CssSyntaxError = Dr, ss.Declaration = zr, ss.Container = Vr, ss.Processor = Yr, ss.Document = Wr, ss.Comment = Xr, ss.Warning = Jr, ss.AtRule = Kr, ss.Result = Hr, ss.Input = $r, ss.Rule = es, ss.Root = ts, ss.Node = rs, Zr.registerPostcss(ss);
            var ns = ss;
            ss.default = ss;
            const is = C(ns);
            is.stringify, is.fromJSON, is.plugin, is.parse, is.list, is.document, is.comment, is.atRule, is.rule, is.decl, is.root, is.CssSyntaxError, is.Declaration, is.Container, is.Processor, is.Document, is.Comment, is.Warning, is.AtRule, is.Result, is.Input, is.Rule, is.Root, is.Node;
            var os = Object.defineProperty,
                ls = (e, t, r) => ((e, t, r) => t in e ? os(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r)(e, "symbol" != typeof t ? t + "" : t, r);

            function as(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
            }

            function hs(e) {
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
            var cs = {
                    exports: {}
                },
                us = String,
                ps = function() {
                    return {
                        isColorSupported: !1,
                        reset: us,
                        bold: us,
                        dim: us,
                        italic: us,
                        underline: us,
                        inverse: us,
                        hidden: us,
                        strikethrough: us,
                        black: us,
                        red: us,
                        green: us,
                        yellow: us,
                        blue: us,
                        magenta: us,
                        cyan: us,
                        white: us,
                        gray: us,
                        bgBlack: us,
                        bgRed: us,
                        bgGreen: us,
                        bgYellow: us,
                        bgBlue: us,
                        bgMagenta: us,
                        bgCyan: us,
                        bgWhite: us
                    }
                };
            cs.exports = ps(), cs.exports.createColors = ps;
            var fs = cs.exports;
            const ds = hs(Object.freeze(Object.defineProperty({
                __proto__: null,
                default: {}
            }, Symbol.toStringTag, {
                value: "Module"
            })));
            let ms = fs,
                gs = ds,
                ys = class e extends Error {
                    constructor(t, r, s, n, i, o) {
                        super(t), this.name = "CssSyntaxError", this.reason = t, i && (this.file = i), n && (this.source = n), o && (this.plugin = o), void 0 !== r && void 0 !== s && ("number" == typeof r ? (this.line = r, this.column = s) : (this.line = r.line, this.column = r.column, this.endLine = s.line, this.endColumn = s.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, e)
                    }
                    setMessage() {
                        this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", void 0 !== this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
                    }
                    showSourceCode(e) {
                        if (!this.source) return "";
                        let t = this.source;
                        null == e && (e = ms.isColorSupported), gs && e && (t = gs(t));
                        let r, s, n = t.split(/\r?\n/),
                            i = Math.max(this.line - 3, 0),
                            o = Math.min(this.line + 2, n.length),
                            l = String(o).length;
                        if (e) {
                            let {
                                bold: e,
                                gray: t,
                                red: n
                            } = ms.createColors(!0);
                            r = t => e(n(t)), s = e => t(e)
                        } else r = s = e => e;
                        return n.slice(i, o).map(((e, t) => {
                            let n = i + 1 + t,
                                o = " " + (" " + n).slice(-l) + " | ";
                            if (n === this.line) {
                                let t = s(o.replace(/\d/g, " ")) + e.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                                return r(">") + s(o) + e + "\n " + t + r("^")
                            }
                            return " " + s(o) + e
                        })).join("\n")
                    }
                    toString() {
                        let e = this.showSourceCode();
                        return e && (e = "\n\n" + e + "\n"), this.name + ": " + this.message + e
                    }
                };
            var ws = ys;
            ys.default = ys;
            var bs = {};
            bs.isClean = Symbol("isClean"), bs.my = Symbol("my");
            const vs = {
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
            let Cs = class {
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
                            i = this.raw(n, "before");
                        i && this.builder(i), this.stringify(n, t !== s || r)
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
                    if (!n) return vs[r];
                    let i = e.root();
                    if (i.rawCache || (i.rawCache = {}), void 0 !== i.rawCache[r]) return i.rawCache[r];
                    if ("before" === r || "after" === r) return this.beforeAfter(e, r);
                    {
                        let n = "raw" + ((o = r)[0].toUpperCase() + o.slice(1));
                        this[n] ? s = this[n](i, e) : i.walk((e => {
                            if (s = e.raws[t], void 0 !== s) return !1
                        }))
                    }
                    var o;
                    return void 0 === s && (s = vs[r]), i.rawCache[r] = s, s
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
            var xs = Cs;
            Cs.default = Cs;
            let Ss = xs;

            function Is(e, t) {
                new Ss(t).stringify(e)
            }
            var Os = Is;
            Is.default = Is;
            let {
                isClean: As,
                my: ks
            } = bs, Rs = ws, Es = xs, Ns = Os;

            function Ms(e, t) {
                let r = new e.constructor;
                for (let s in e) {
                    if (!Object.prototype.hasOwnProperty.call(e, s)) continue;
                    if ("proxyCache" === s) continue;
                    let n = e[s],
                        i = typeof n;
                    "parent" === s && "object" === i ? t && (r[s] = t) : "source" === s ? r[s] = n : Array.isArray(n) ? r[s] = n.map((e => Ms(e, r))) : ("object" === i && null !== n && (n = Ms(n)), r[s] = n)
                }
                return r
            }
            let Ps = class {
                constructor(e = {}) {
                    this.raws = {}, this[As] = !1, this[ks] = !0;
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
                    let t = Ms(this);
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
                    return new Rs(e)
                }
                getProxyProcessor() {
                    return {
                        get: (e, t) => "proxyOf" === t ? e : "root" === t ? () => e.root().toProxy() : e[t],
                        set: (e, t, r) => (e[t] === r || (e[t] = r, "prop" !== t && "value" !== t && "name" !== t && "params" !== t && "important" !== t && "text" !== t || e.markDirty()), !0)
                    }
                }
                markDirty() {
                    if (this[As]) {
                        this[As] = !1;
                        let e = this;
                        for (; e = e.parent;) e[As] = !1
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
                    return (new Es).raw(this, e, t)
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
                            let i = t.get(s.input);
                            null == i && (i = n, t.set(s.input, n), n++), r[e] = {
                                end: s.end,
                                inputId: i,
                                start: s.start
                            }
                        } else r[e] = s
                    }
                    return s && (r.inputs = [...t.keys()].map((e => e.toJSON()))), r
                }
                toProxy() {
                    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
                }
                toString(e = Ns) {
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
            var Bs = Ps;
            Ps.default = Ps;
            let Fs = Bs,
                Ls = class extends Fs {
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
            var js = Ls;
            Ls.default = Ls;
            var Ts = {
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
                SourceMapConsumer: Us,
                SourceMapGenerator: Ds
            } = ds, {
                existsSync: zs,
                readFileSync: Zs
            } = ds, {
                dirname: Vs,
                join: Ys
            } = ds;
            let Gs = class {
                constructor(e, t) {
                    if (!1 === t.map) return;
                    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
                    let r = t.map ? t.map.prev : void 0,
                        s = this.loadMap(t.from, r);
                    !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = Vs(this.mapFile)), s && (this.text = s)
                }
                consumer() {
                    return this.consumerCache || (this.consumerCache = new Us(this.text)), this.consumerCache
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
                    if (this.root = Vs(e), zs(e)) return this.mapFile = e, Zs(e, "utf-8").toString().trim()
                }
                loadMap(e, t) {
                    if (!1 === t) return !1;
                    if (t) {
                        if ("string" == typeof t) return t;
                        if ("function" != typeof t) {
                            if (t instanceof Us) return Ds.fromSourceMap(t).toString();
                            if (t instanceof Ds) return t.toString();
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
                            return e && (t = Ys(Vs(e), t)), this.loadFile(t)
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
            var _s = Gs;
            Gs.default = Gs;
            let {
                SourceMapConsumer: Ws,
                SourceMapGenerator: Js
            } = ds, {
                fileURLToPath: Xs,
                pathToFileURL: Ks
            } = ds, {
                isAbsolute: Hs,
                resolve: $s
            } = ds, {
                nanoid: Qs
            } = Ts, qs = ds, en = ws, tn = _s, rn = Symbol("fromOffsetCache"), sn = Boolean(Ws && Js), nn = Boolean($s && Hs), on = class {
                constructor(e, t = {}) {
                    if (null == e || "object" == typeof e && !e.toString) throw new Error(`PostCSS received ${e} instead of CSS string`);
                    if (this.css = e.toString(), "﻿" === this.css[0] || "￾" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!nn || /^\w+:\/\//.test(t.from) || Hs(t.from) ? this.file = t.from : this.file = $s(t.from)), nn && sn) {
                        let e = new tn(this.css, t);
                        if (e.text) {
                            this.map = e;
                            let t = e.consumer().file;
                            !this.file && t && (this.file = this.mapResolve(t))
                        }
                    }
                    this.file || (this.id = "<input css " + Qs(6) + ">"), this.map && (this.map.file = this.from)
                }
                error(e, t, r, s = {}) {
                    let n, i, o;
                    if (t && "object" == typeof t) {
                        let e = t,
                            s = r;
                        if ("number" == typeof e.offset) {
                            let s = this.fromOffset(e.offset);
                            t = s.line, r = s.col
                        } else t = e.line, r = e.column;
                        if ("number" == typeof s.offset) {
                            let e = this.fromOffset(s.offset);
                            i = e.line, o = e.col
                        } else i = s.line, o = s.column
                    } else if (!r) {
                        let e = this.fromOffset(t);
                        t = e.line, r = e.col
                    }
                    let l = this.origin(t, r, i, o);
                    return n = l ? new en(e, void 0 === l.endLine ? l.line : {
                        column: l.column,
                        line: l.line
                    }, void 0 === l.endLine ? l.column : {
                        column: l.endColumn,
                        line: l.endLine
                    }, l.source, l.file, s.plugin) : new en(e, void 0 === i ? t : {
                        column: r,
                        line: t
                    }, void 0 === i ? r : {
                        column: o,
                        line: i
                    }, this.css, this.file, s.plugin), n.input = {
                        column: r,
                        endColumn: o,
                        endLine: i,
                        line: t,
                        source: this.css
                    }, this.file && (Ks && (n.input.url = Ks(this.file).toString()), n.input.file = this.file), n
                }
                fromOffset(e) {
                    let t, r;
                    if (this[rn]) r = this[rn];
                    else {
                        let e = this.css.split("\n");
                        r = new Array(e.length);
                        let t = 0;
                        for (let s = 0, n = e.length; s < n; s++) r[s] = t, t += e[s].length + 1;
                        this[rn] = r
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
                    return /^\w+:\/\//.test(e) ? e : $s(this.map.consumer().sourceRoot || this.map.root || ".", e)
                }
                origin(e, t, r, s) {
                    if (!this.map) return !1;
                    let n, i, o = this.map.consumer(),
                        l = o.originalPositionFor({
                            column: t,
                            line: e
                        });
                    if (!l.source) return !1;
                    "number" == typeof r && (n = o.originalPositionFor({
                        column: s,
                        line: r
                    })), i = Hs(l.source) ? Ks(l.source) : new URL(l.source, this.map.consumer().sourceRoot || Ks(this.map.mapFile));
                    let a = {
                        column: l.column,
                        endColumn: n && n.column,
                        endLine: n && n.line,
                        line: l.line,
                        url: i.toString()
                    };
                    if ("file:" === i.protocol) {
                        if (!Xs) throw new Error("file: protocol is not available in this PostCSS build");
                        a.file = Xs(i)
                    }
                    let h = o.sourceContentFor(l.source);
                    return h && (a.source = h), a
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
            var ln = on;
            on.default = on, qs && qs.registerInput && qs.registerInput(on);
            let {
                SourceMapConsumer: an,
                SourceMapGenerator: hn
            } = ds, {
                dirname: cn,
                relative: un,
                resolve: pn,
                sep: fn
            } = ds, {
                pathToFileURL: dn
            } = ds, mn = ln, gn = Boolean(an && hn), yn = Boolean(cn && pn && un && fn);
            var wn = class {
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
                            s = e.root || cn(e.file);
                        !1 === this.mapOpts.sourcesContent ? (t = new an(e.text), t.sourcesContent && (t.sourcesContent = null)) : t = e.consumer(), this.map.applySourceMap(t, r, this.toUrl(this.path(s)))
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
                    if (this.clearAnnotation(), yn && gn && this.isMap()) return this.generateMap();
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
                        e.file = this.outputFile(), this.map = hn.fromSourceMap(e, {
                            ignoreInvalidMapping: !0
                        })
                    } else this.map = new hn({
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
                    this.css = "", this.map = new hn({
                        file: this.outputFile(),
                        ignoreInvalidMapping: !0
                    });
                    let e, t, r = 1,
                        s = 1,
                        n = "<no source>",
                        i = {
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
                    this.stringify(this.root, ((o, l, a) => {
                        if (this.css += o, l && "end" !== a && (i.generated.line = r, i.generated.column = s - 1, l.source && l.source.start ? (i.source = this.sourcePath(l), i.original.line = l.source.start.line, i.original.column = l.source.start.column - 1, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, this.map.addMapping(i))), e = o.match(/\n/g), e ? (r += e.length, t = o.lastIndexOf("\n"), s = o.length - t) : s += o.length, l && "start" !== a) {
                            let e = l.parent || {
                                raws: {}
                            };
                            ("decl" === l.type || "atrule" === l.type && !l.nodes) && l === e.last && !e.raws.semicolon || (l.source && l.source.end ? (i.source = this.sourcePath(l), i.original.line = l.source.end.line, i.original.column = l.source.end.column - 1, i.generated.line = r, i.generated.column = s - 2, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, i.generated.line = r, i.generated.column = s - 1, this.map.addMapping(i)))
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
                    let r = this.opts.to ? cn(this.opts.to) : ".";
                    "string" == typeof this.mapOpts.annotation && (r = cn(pn(r, this.mapOpts.annotation)));
                    let s = un(r, e);
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
                            let e = new mn(this.originalCSS, this.opts);
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
                    if (dn) {
                        let t = dn(e).toString();
                        return this.memoizedFileURLs.set(e, t), t
                    }
                    throw new Error("`map.absolute` option is not available in this PostCSS build")
                }
                toUrl(e) {
                    let t = this.memoizedURLs.get(e);
                    if (t) return t;
                    "\\" === fn && (e = e.replace(/\\/g, "/"));
                    let r = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
                    return this.memoizedURLs.set(e, r), r
                }
            };
            let bn = Bs,
                vn = class extends bn {
                    constructor(e) {
                        super(e), this.type = "comment"
                    }
                };
            var Cn = vn;
            vn.default = vn;
            let xn, Sn, In, On, {
                    isClean: An,
                    my: kn
                } = bs,
                Rn = js,
                En = Cn,
                Nn = Bs;

            function Mn(e) {
                return e.map((e => (e.nodes && (e.nodes = Mn(e.nodes)), delete e.source, e)))
            }

            function Pn(e) {
                if (e[An] = !1, e.proxyOf.nodes)
                    for (let t of e.proxyOf.nodes) Pn(t)
            }
            let Bn = class e extends Nn {
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
                        i = this.normalize(t, this.proxyOf.nodes[s], n).reverse();
                    s = this.index(e);
                    for (let e of i) this.proxyOf.nodes.splice(s, 0, e);
                    for (let e in this.indexes) r = this.indexes[e], s <= r && (this.indexes[e] = r + i.length);
                    return this.markDirty(), this
                }
                normalize(t, r) {
                    if ("string" == typeof t) t = Mn(xn(t).nodes);
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
                        "string" != typeof t.value && (t.value = String(t.value)), t = [new Rn(t)]
                    } else if (t.selector) t = [new Sn(t)];
                    else if (t.name) t = [new In(t)];
                    else {
                        if (!t.text) throw new Error("Unknown node type in node creation");
                        t = [new En(t)]
                    }
                    return t.map((t => (t[kn] || e.rebuild(t), (t = t.proxyOf).parent && t.parent.removeChild(t), t[An] && Pn(t), void 0 === t.raws.before && r && void 0 !== r.raws.before && (t.raws.before = r.raws.before.replace(/\S/g, "")), t.parent = this.proxyOf, t)))
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
            Bn.registerParse = e => {
                xn = e
            }, Bn.registerRule = e => {
                Sn = e
            }, Bn.registerAtRule = e => {
                In = e
            }, Bn.registerRoot = e => {
                On = e
            };
            var Fn = Bn;
            Bn.default = Bn, Bn.rebuild = e => {
                "atrule" === e.type ? Object.setPrototypeOf(e, In.prototype) : "rule" === e.type ? Object.setPrototypeOf(e, Sn.prototype) : "decl" === e.type ? Object.setPrototypeOf(e, Rn.prototype) : "comment" === e.type ? Object.setPrototypeOf(e, En.prototype) : "root" === e.type && Object.setPrototypeOf(e, On.prototype), e[kn] = !0, e.nodes && e.nodes.forEach((e => {
                    Bn.rebuild(e)
                }))
            };
            let Ln, jn, Tn = Fn,
                Un = class extends Tn {
                    constructor(e) {
                        super({
                            type: "document",
                            ...e
                        }), this.nodes || (this.nodes = [])
                    }
                    toResult(e = {}) {
                        return new Ln(new jn, this, e).stringify()
                    }
                };
            Un.registerLazyResult = e => {
                Ln = e
            }, Un.registerProcessor = e => {
                jn = e
            };
            var Dn = Un;
            Un.default = Un;
            let zn = class {
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
            var Zn = zn;
            zn.default = zn;
            let Vn = Zn,
                Yn = class {
                    constructor(e, t, r) {
                        this.processor = e, this.messages = [], this.root = t, this.opts = r, this.css = void 0, this.map = void 0
                    }
                    toString() {
                        return this.css
                    }
                    warn(e, t = {}) {
                        t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
                        let r = new Vn(e, t);
                        return this.messages.push(r), r
                    }
                    warnings() {
                        return this.messages.filter((e => "warning" === e.type))
                    }
                    get content() {
                        return this.css
                    }
                };
            var Gn = Yn;
            Yn.default = Yn;
            const _n = "'".charCodeAt(0),
                Wn = '"'.charCodeAt(0),
                Jn = "\\".charCodeAt(0),
                Xn = "/".charCodeAt(0),
                Kn = "\n".charCodeAt(0),
                Hn = " ".charCodeAt(0),
                $n = "\f".charCodeAt(0),
                Qn = "\t".charCodeAt(0),
                qn = "\r".charCodeAt(0),
                ei = "[".charCodeAt(0),
                ti = "]".charCodeAt(0),
                ri = "(".charCodeAt(0),
                si = ")".charCodeAt(0),
                ni = "{".charCodeAt(0),
                ii = "}".charCodeAt(0),
                oi = ";".charCodeAt(0),
                li = "*".charCodeAt(0),
                ai = ":".charCodeAt(0),
                hi = "@".charCodeAt(0),
                ci = /[\t\n\f\r "#'()/;[\\\]{}]/g,
                ui = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
                pi = /.[\r\n"'(/\\]/,
                fi = /[\da-f]/i;
            let di = Fn,
                mi = class extends di {
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
            var gi = mi;
            mi.default = mi, di.registerAtRule(mi);
            let yi, wi, bi = Fn,
                vi = class extends bi {
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
                        return new yi(new wi, this, e).stringify()
                    }
                };
            vi.registerLazyResult = e => {
                yi = e
            }, vi.registerProcessor = e => {
                wi = e
            };
            var Ci = vi;
            vi.default = vi, bi.registerRoot(vi);
            let xi = {
                comma: e => xi.split(e, [","], !0),
                space: e => xi.split(e, [" ", "\n", "\t"]),
                split(e, t, r) {
                    let s = [],
                        n = "",
                        i = !1,
                        o = 0,
                        l = !1,
                        a = "",
                        h = !1;
                    for (let r of e) h ? h = !1 : "\\" === r ? h = !0 : l ? r === a && (l = !1) : '"' === r || "'" === r ? (l = !0, a = r) : "(" === r ? o += 1 : ")" === r ? o > 0 && (o -= 1) : 0 === o && t.includes(r) && (i = !0), i ? ("" !== n && s.push(n.trim()), n = "", i = !1) : n += r;
                    return (r || "" !== n) && s.push(n.trim()), s
                }
            };
            var Si = xi;
            xi.default = xi;
            let Ii = Fn,
                Oi = Si,
                Ai = class extends Ii {
                    constructor(e) {
                        super(e), this.type = "rule", this.nodes || (this.nodes = [])
                    }
                    get selectors() {
                        return Oi.comma(this.selector)
                    }
                    set selectors(e) {
                        let t = this.selector ? this.selector.match(/,\s*/) : null,
                            r = t ? t[0] : "," + this.raw("between", "beforeOpen");
                        this.selector = e.join(r)
                    }
                };
            var ki = Ai;
            Ai.default = Ai, Ii.registerRule(Ai);
            let Ri = js,
                Ei = function(e, t = {}) {
                    let r, s, n, i, o, l, a, h, c, u, p = e.css.valueOf(),
                        f = t.ignoreErrors,
                        d = p.length,
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
                            return 0 === y.length && m >= d
                        },
                        nextToken: function(e) {
                            if (y.length) return y.pop();
                            if (m >= d) return;
                            let t = !!e && e.ignoreUnclosed;
                            switch (r = p.charCodeAt(m), r) {
                                case Kn:
                                case Hn:
                                case Qn:
                                case qn:
                                case $n:
                                    s = m;
                                    do {
                                        s += 1, r = p.charCodeAt(s)
                                    } while (r === Hn || r === Kn || r === Qn || r === qn || r === $n);
                                    u = ["space", p.slice(m, s)], m = s - 1;
                                    break;
                                case ei:
                                case ti:
                                case ni:
                                case ii:
                                case ai:
                                case oi:
                                case si: {
                                    let e = String.fromCharCode(r);
                                    u = [e, e, m];
                                    break
                                }
                                case ri:
                                    if (h = g.length ? g.pop()[1] : "", c = p.charCodeAt(m + 1), "url" === h && c !== _n && c !== Wn && c !== Hn && c !== Kn && c !== Qn && c !== $n && c !== qn) {
                                        s = m;
                                        do {
                                            if (l = !1, s = p.indexOf(")", s + 1), -1 === s) {
                                                if (f || t) {
                                                    s = m;
                                                    break
                                                }
                                                w("bracket")
                                            }
                                            for (a = s; p.charCodeAt(a - 1) === Jn;) a -= 1, l = !l
                                        } while (l);
                                        u = ["brackets", p.slice(m, s + 1), m, s], m = s
                                    } else s = p.indexOf(")", m + 1), i = p.slice(m, s + 1), -1 === s || pi.test(i) ? u = ["(", "(", m] : (u = ["brackets", i, m, s], m = s);
                                    break;
                                case _n:
                                case Wn:
                                    n = r === _n ? "'" : '"', s = m;
                                    do {
                                        if (l = !1, s = p.indexOf(n, s + 1), -1 === s) {
                                            if (f || t) {
                                                s = m + 1;
                                                break
                                            }
                                            w("string")
                                        }
                                        for (a = s; p.charCodeAt(a - 1) === Jn;) a -= 1, l = !l
                                    } while (l);
                                    u = ["string", p.slice(m, s + 1), m, s], m = s;
                                    break;
                                case hi:
                                    ci.lastIndex = m + 1, ci.test(p), s = 0 === ci.lastIndex ? p.length - 1 : ci.lastIndex - 2, u = ["at-word", p.slice(m, s + 1), m, s], m = s;
                                    break;
                                case Jn:
                                    for (s = m, o = !0; p.charCodeAt(s + 1) === Jn;) s += 1, o = !o;
                                    if (r = p.charCodeAt(s + 1), o && r !== Xn && r !== Hn && r !== Kn && r !== Qn && r !== qn && r !== $n && (s += 1, fi.test(p.charAt(s)))) {
                                        for (; fi.test(p.charAt(s + 1));) s += 1;
                                        p.charCodeAt(s + 1) === Hn && (s += 1)
                                    }
                                    u = ["word", p.slice(m, s + 1), m, s], m = s;
                                    break;
                                default:
                                    r === Xn && p.charCodeAt(m + 1) === li ? (s = p.indexOf("*/", m + 2) + 1, 0 === s && (f || t ? s = p.length : w("comment")), u = ["comment", p.slice(m, s + 1), m, s], m = s) : (ui.lastIndex = m + 1, ui.test(p), s = 0 === ui.lastIndex ? p.length - 1 : ui.lastIndex - 2, u = ["word", p.slice(m, s + 1), m, s], g.push(u), m = s)
                            }
                            return m++, u
                        },
                        position: function() {
                            return m
                        }
                    }
                },
                Ni = Cn,
                Mi = gi,
                Pi = Ci,
                Bi = ki;
            const Fi = {
                empty: !0,
                space: !0
            };
            let Li = Fn,
                ji = class {
                    constructor(e) {
                        this.input = e, this.root = new Pi, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
                            input: e,
                            start: {
                                column: 1,
                                line: 1,
                                offset: 0
                            }
                        }
                    }
                    atrule(e) {
                        let t, r, s, n = new Mi;
                        n.name = e[1].slice(1), "" === n.name && this.unnamedAtrule(n, e), this.init(n, e[2]);
                        let i = !1,
                            o = !1,
                            l = [],
                            a = [];
                        for (; !this.tokenizer.endOfFile();) {
                            if (t = (e = this.tokenizer.nextToken())[0], "(" === t || "[" === t ? a.push("(" === t ? ")" : "]") : "{" === t && a.length > 0 ? a.push("}") : t === a[a.length - 1] && a.pop(), 0 === a.length) {
                                if (";" === t) {
                                    n.source.end = this.getPosition(e[2]), n.source.end.offset++, this.semicolon = !0;
                                    break
                                }
                                if ("{" === t) {
                                    o = !0;
                                    break
                                }
                                if ("}" === t) {
                                    if (l.length > 0) {
                                        for (s = l.length - 1, r = l[s]; r && "space" === r[0];) r = l[--s];
                                        r && (n.source.end = this.getPosition(r[3] || r[2]), n.source.end.offset++)
                                    }
                                    this.end(e);
                                    break
                                }
                                l.push(e)
                            } else l.push(e);
                            if (this.tokenizer.endOfFile()) {
                                i = !0;
                                break
                            }
                        }
                        n.raws.between = this.spacesAndCommentsFromEnd(l), l.length ? (n.raws.afterName = this.spacesAndCommentsFromStart(l), this.raw(n, "params", l), i && (e = l[l.length - 1], n.source.end = this.getPosition(e[3] || e[2]), n.source.end.offset++, this.spaces = n.raws.between, n.raws.between = "")) : (n.raws.afterName = "", n.params = ""), o && (n.nodes = [], this.current = n)
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
                        for (let [i, o] of e.entries()) {
                            if (t = o, r = t[0], "(" === r && (n += 1), ")" === r && (n -= 1), 0 === n && ":" === r) {
                                if (s) {
                                    if ("word" === s[0] && "progid" === s[1]) continue;
                                    return i
                                }
                                this.doubleColon(t)
                            }
                            s = t
                        }
                        return !1
                    }
                    comment(e) {
                        let t = new Ni;
                        this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++;
                        let r = e[1].slice(2, -2);
                        if (/^\s*$/.test(r)) t.text = "", t.raws.left = r, t.raws.right = "";
                        else {
                            let e = r.match(/^(\s*)([^]*\S)(\s*)$/);
                            t.text = e[2], t.raws.left = e[1], t.raws.right = e[3]
                        }
                    }
                    createTokenizer() {
                        this.tokenizer = Ei(this.input)
                    }
                    decl(e, t) {
                        let r = new Ri;
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
                        let i, o = [];
                        for (; e.length && (i = e[0][0], "space" === i || "comment" === i);) o.push(e.shift());
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
                        e.some((e => "space" !== e[0] && "comment" !== e[0])) && (r.raws.between += o.map((e => e[1])).join(""), o = []), this.raw(r, "value", o.concat(e), t), r.value.includes(":") && !t && this.checkMissedSemicolon(e)
                    }
                    doubleColon(e) {
                        throw this.input.error("Double colon", {
                            offset: e[2]
                        }, {
                            offset: e[2] + e[1].length
                        })
                    }
                    emptyRule(e) {
                        let t = new Bi;
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
                            i = [],
                            o = e[1].startsWith("--"),
                            l = [],
                            a = e;
                        for (; a;) {
                            if (r = a[0], l.push(a), "(" === r || "[" === r) n || (n = a), i.push("(" === r ? ")" : "]");
                            else if (o && s && "{" === r) n || (n = a), i.push("}");
                            else if (0 === i.length) {
                                if (";" === r) {
                                    if (s) return void this.decl(l, o);
                                    break
                                }
                                if ("{" === r) return void this.rule(l);
                                if ("}" === r) {
                                    this.tokenizer.back(l.pop()), t = !0;
                                    break
                                }
                                ":" === r && (s = !0)
                            } else r === i[i.length - 1] && (i.pop(), 0 === i.length && (n = null));
                            a = this.tokenizer.nextToken()
                        }
                        if (this.tokenizer.endOfFile() && (t = !0), i.length > 0 && this.unclosedBracket(n), t && s) {
                            if (!o)
                                for (; l.length && (a = l[l.length - 1][0], "space" === a || "comment" === a);) this.tokenizer.back(l.pop());
                            this.decl(l, o)
                        } else this.unknownWord(l)
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
                        let n, i, o, l, a = r.length,
                            h = "",
                            c = !0;
                        for (let e = 0; e < a; e += 1) n = r[e], i = n[0], "space" !== i || e !== a - 1 || s ? "comment" === i ? (l = r[e - 1] ? r[e - 1][0] : "empty", o = r[e + 1] ? r[e + 1][0] : "empty", Fi[l] || Fi[o] || "," === h.slice(-1) ? c = !1 : h += n[1]) : h += n[1] : c = !1;
                        if (!c) {
                            let s = r.reduce(((e, t) => e + t[1]), "");
                            e.raws[t] = {
                                raw: s,
                                value: h
                            }
                        }
                        e[t] = h
                    }
                    rule(e) {
                        e.pop();
                        let t = new Bi;
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
                Ti = ln;

            function Ui(e, t) {
                let r = new Ti(e, t),
                    s = new ji(r);
                try {
                    s.parse()
                } catch (e) {
                    throw e
                }
                return s.root
            }
            var Di = Ui;
            Ui.default = Ui, Li.registerParse(Ui);
            let {
                isClean: zi,
                my: Zi
            } = bs, Vi = wn, Yi = Os, Gi = Fn, _i = Dn, Wi = Gn, Ji = Di, Xi = Ci;
            const Ki = {
                    atrule: "AtRule",
                    comment: "Comment",
                    decl: "Declaration",
                    document: "Document",
                    root: "Root",
                    rule: "Rule"
                },
                Hi = {
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
                $i = {
                    Once: !0,
                    postcssPlugin: !0,
                    prepare: !0
                },
                Qi = 0;

            function qi(e) {
                return "object" == typeof e && "function" == typeof e.then
            }

            function eo(e) {
                let t = !1,
                    r = Ki[e.type];
                return "decl" === e.type ? t = e.prop.toLowerCase() : "atrule" === e.type && (t = e.name.toLowerCase()), t && e.append ? [r, r + "-" + t, Qi, r + "Exit", r + "Exit-" + t] : t ? [r, r + "-" + t, r + "Exit", r + "Exit-" + t] : e.append ? [r, Qi, r + "Exit"] : [r, r + "Exit"]
            }

            function to(e) {
                let t;
                return t = "document" === e.type ? ["Document", Qi, "DocumentExit"] : "root" === e.type ? ["Root", Qi, "RootExit"] : eo(e), {
                    eventIndex: 0,
                    events: t,
                    iterator: 0,
                    node: e,
                    visitorIndex: 0,
                    visitors: []
                }
            }

            function ro(e) {
                return e[zi] = !1, e.nodes && e.nodes.forEach((e => ro(e))), e
            }
            let so = {},
                no = class e {
                    constructor(t, r, s) {
                        let n;
                        if (this.stringified = !1, this.processed = !1, "object" != typeof r || null === r || "root" !== r.type && "document" !== r.type)
                            if (r instanceof e || r instanceof Wi) n = ro(r.root), r.map && (void 0 === s.map && (s.map = {}), s.map.inline || (s.map.inline = !1), s.map.prev = r.map);
                            else {
                                let e = Ji;
                                s.syntax && (e = s.syntax.parse), s.parser && (e = s.parser), e.parse && (e = e.parse);
                                try {
                                    n = e(r, s)
                                } catch (e) {
                                    this.processed = !0, this.error = e
                                }
                                n && !n[Zi] && Gi.rebuild(n)
                            }
                        else n = ro(r);
                        this.result = new Wi(t, n, s), this.helpers = {
                            ...so,
                            postcss: so,
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
                                    if (!Hi[r] && /^[A-Z]/.test(r)) throw new Error(`Unknown event ${r} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                                    if (!$i[r])
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
                            if (qi(r)) try {
                                await r
                            } catch (e) {
                                throw this.handleError(e)
                            }
                        }
                        if (this.prepareVisitors(), this.hasListener) {
                            let e = this.result.root;
                            for (; !e[zi];) {
                                e[zi] = !0;
                                let t = [to(e)];
                                for (; t.length > 0;) {
                                    let e = this.visitTick(t);
                                    if (qi(e)) try {
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
                                    return qi(t[0]) ? Promise.all(t) : t
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
                            t = Yi;
                        e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
                        let r = new Vi(t, this.result.root, this.result.opts).generate();
                        return this.result.css = r[0], this.result.map = r[1], this.result
                    }
                    sync() {
                        if (this.error) throw this.error;
                        if (this.processed) return this.result;
                        if (this.processed = !0, this.processing) throw this.getAsyncError();
                        for (let e of this.plugins) {
                            if (qi(this.runOnRoot(e))) throw this.getAsyncError()
                        }
                        if (this.prepareVisitors(), this.hasListener) {
                            let e = this.result.root;
                            for (; !e[zi];) e[zi] = !0, this.walkSync(e);
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
                            if (qi(e)) throw this.getAsyncError()
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
                                if (r.indexes[n] += 1, !s[zi]) return s[zi] = !0, void e.push(to(s));
                            t.iterator = 0, delete r.indexes[n]
                        }
                        let n = t.events;
                        for (; t.eventIndex < n.length;) {
                            let e = n[t.eventIndex];
                            if (t.eventIndex += 1, e === Qi) return void(r.nodes && r.nodes.length && (r[zi] = !0, t.iterator = r.getIterator()));
                            if (this.listeners[e]) return void(t.visitors = this.listeners[e])
                        }
                        e.pop()
                    }
                    walkSync(e) {
                        e[zi] = !0;
                        let t = eo(e);
                        for (let r of t)
                            if (r === Qi) e.nodes && e.each((e => {
                                e[zi] || this.walkSync(e)
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
            no.registerPostcss = e => {
                so = e
            };
            var io = no;
            no.default = no, Xi.registerLazyResult(no), _i.registerLazyResult(no);
            let oo = wn,
                lo = Os,
                ao = Di;
            const ho = Gn;
            let co = class {
                constructor(e, t, r) {
                    let s;
                    t = t.toString(), this.stringified = !1, this._processor = e, this._css = t, this._opts = r, this._map = void 0;
                    let n = lo;
                    this.result = new ho(this._processor, s, this._opts), this.result.css = t;
                    let i = this;
                    Object.defineProperty(this.result, "root", {
                        get: () => i.root
                    });
                    let o = new oo(n, s, this._opts, t);
                    if (o.isMap()) {
                        let [e, t] = o.generate();
                        e && (this.result.css = e), t && (this.result.map = t)
                    } else o.clearAnnotation(), this.result.css = o.css
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
                    let e, t = ao;
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
            var uo = co;
            co.default = co;
            let po = uo,
                fo = io,
                mo = Dn,
                go = Ci,
                yo = class {
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
                        return this.plugins.length || t.parser || t.stringifier || t.syntax ? new fo(this, e, t) : new po(this, e, t)
                    }
                    use(e) {
                        return this.plugins = this.plugins.concat(this.normalize([e])), this
                    }
                };
            var wo = yo;
            yo.default = yo, go.registerProcessor(yo), mo.registerProcessor(yo);
            let bo = js,
                vo = _s,
                Co = Cn,
                xo = gi,
                So = ln,
                Io = Ci,
                Oo = ki;

            function Ao(e, t) {
                if (Array.isArray(e)) return e.map((e => Ao(e)));
                let {
                    inputs: r,
                    ...s
                } = e;
                if (r) {
                    t = [];
                    for (let e of r) {
                        let r = {
                            ...e,
                            __proto__: So.prototype
                        };
                        r.map && (r.map = {
                            ...r.map,
                            __proto__: vo.prototype
                        }), t.push(r)
                    }
                }
                if (s.nodes && (s.nodes = e.nodes.map((e => Ao(e, t)))), s.source) {
                    let {
                        inputId: e,
                        ...r
                    } = s.source;
                    s.source = r, null != e && (s.source.input = t[e])
                }
                if ("root" === s.type) return new Io(s);
                if ("decl" === s.type) return new bo(s);
                if ("rule" === s.type) return new Oo(s);
                if ("comment" === s.type) return new Co(s);
                if ("atrule" === s.type) return new xo(s);
                throw new Error("Unknown node type: " + e.type)
            }
            var ko = Ao;
            Ao.default = Ao;
            let Ro = ws,
                Eo = js,
                No = io,
                Mo = Fn,
                Po = wo,
                Bo = Os,
                Fo = ko,
                Lo = Dn,
                jo = Zn,
                To = Cn,
                Uo = gi,
                Do = Gn,
                zo = ln,
                Zo = Di,
                Vo = Si,
                Yo = ki,
                Go = Ci,
                _o = Bs;

            function Wo(...e) {
                return 1 === e.length && Array.isArray(e[0]) && (e = e[0]), new Po(e)
            }
            Wo.plugin = function(e, t) {
                let r, s = !1;

                function n(...r) {
                    console && console.warn && !s && (s = !0, console.warn(e + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), "MISSING_ENV_VAR".LANG && "MISSING_ENV_VAR".LANG.startsWith("cn") && console.warn(e + ": 里面 postcss.plugin 被弃用. 迁移指南:\nhttps://www.w3ctech.com/topic/2226"));
                    let n = t(...r);
                    return n.postcssPlugin = e, n.postcssVersion = (new Po).version, n
                }
                return Object.defineProperty(n, "postcss", {
                    get: () => (r || (r = n()), r)
                }), n.process = function(e, t, r) {
                    return Wo([n(r)]).process(e, t)
                }, n
            }, Wo.stringify = Bo, Wo.parse = Zo, Wo.fromJSON = Fo, Wo.list = Vo, Wo.comment = e => new To(e), Wo.atRule = e => new Uo(e), Wo.decl = e => new Eo(e), Wo.rule = e => new Yo(e), Wo.root = e => new Go(e), Wo.document = e => new Lo(e), Wo.CssSyntaxError = Ro, Wo.Declaration = Eo, Wo.Container = Mo, Wo.Processor = Po, Wo.Document = Lo, Wo.Comment = To, Wo.Warning = jo, Wo.AtRule = Uo, Wo.Result = Do, Wo.Input = zo, Wo.Rule = Yo, Wo.Root = Go, Wo.Node = _o, No.registerPostcss(Wo);
            var Jo = Wo;
            Wo.default = Wo;
            const Xo = as(Jo);
            Xo.stringify, Xo.fromJSON, Xo.plugin, Xo.parse, Xo.list, Xo.document, Xo.comment, Xo.atRule, Xo.rule, Xo.decl, Xo.root, Xo.CssSyntaxError, Xo.Declaration, Xo.Container, Xo.Processor, Xo.Document, Xo.Comment, Xo.Warning, Xo.AtRule, Xo.Result, Xo.Input, Xo.Rule, Xo.Root, Xo.Node;
            class Ko {
                constructor(...e) {
                    ls(this, "parentElement", null), ls(this, "parentNode", null), ls(this, "ownerDocument"), ls(this, "firstChild", null), ls(this, "lastChild", null), ls(this, "previousSibling", null), ls(this, "nextSibling", null), ls(this, "ELEMENT_NODE", 1), ls(this, "TEXT_NODE", 3), ls(this, "nodeType"), ls(this, "nodeName"), ls(this, "RRNodeType")
                }
                get childNodes() {
                    const e = [];
                    let t = this.firstChild;
                    for (; t;) e.push(t), t = t.nextSibling;
                    return e
                }
                contains(e) {
                    if (!(e instanceof Ko)) return !1;
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
            const Ho = {
                    Node: ["childNodes", "parentNode", "parentElement", "textContent"],
                    ShadowRoot: ["host", "styleSheets"],
                    Element: ["shadowRoot", "querySelector", "querySelectorAll"],
                    MutationObserver: []
                },
                $o = {
                    Node: ["contains", "getRootNode"],
                    ShadowRoot: ["getSelection"],
                    Element: [],
                    MutationObserver: ["constructor"]
                },
                Qo = {};

            function qo(e) {
                if (Qo[e]) return Qo[e];
                const t = function(e) {
                        var t, r;
                        const s = null == (r = null == (t = null == globalThis ? void 0 : globalThis.Zone) ? void 0 : t.__symbol__) ? void 0 : r.call(t, e);
                        return s && globalThis[s] ? globalThis[s] : void 0
                    }(e) || globalThis[e],
                    r = t.prototype,
                    s = e in Ho ? Ho[e] : void 0,
                    n = Boolean(s && s.every((e => {
                        var t, s;
                        return Boolean(null == (s = null == (t = Object.getOwnPropertyDescriptor(r, e)) ? void 0 : t.get) ? void 0 : s.toString().includes("[native code]"))
                    }))),
                    i = e in $o ? $o[e] : void 0,
                    o = Boolean(i && i.every((e => {
                        var t;
                        return "function" == typeof r[e] && (null == (t = r[e]) ? void 0 : t.toString().includes("[native code]"))
                    })));
                if (n && o) return Qo[e] = t.prototype, t.prototype;
                try {
                    const s = document.createElement("iframe");
                    document.body.appendChild(s);
                    const n = s.contentWindow;
                    if (!n) return t.prototype;
                    const i = n[e].prototype;
                    return document.body.removeChild(s), i ? Qo[e] = i : r
                } catch {
                    return r
                }
            }
            const el = {};

            function tl(e, t, r) {
                var s;
                const n = `${e}.${String(r)}`;
                if (el[n]) return el[n].call(t);
                const i = qo(e),
                    o = null == (s = Object.getOwnPropertyDescriptor(i, r)) ? void 0 : s.get;
                return o ? (el[n] = o, o.call(t)) : t[r]
            }
            const rl = {};

            function sl(e, t, r) {
                const s = `${e}.${String(r)}`;
                if (rl[s]) return rl[s].bind(t);
                const n = qo(e)[r];
                return "function" != typeof n ? t[r] : (rl[s] = n, n.bind(t))
            }
            const nl = {
                childNodes: function(e) {
                    return tl("Node", e, "childNodes")
                },
                parentNode: function(e) {
                    return tl("Node", e, "parentNode")
                },
                parentElement: function(e) {
                    return tl("Node", e, "parentElement")
                },
                textContent: function(e) {
                    return tl("Node", e, "textContent")
                },
                contains: function(e, t) {
                    return sl("Node", e, "contains")(t)
                },
                getRootNode: function(e) {
                    return sl("Node", e, "getRootNode")()
                },
                host: function(e) {
                    return e && "host" in e ? tl("ShadowRoot", e, "host") : null
                },
                styleSheets: function(e) {
                    return e.styleSheets
                },
                shadowRoot: function(e) {
                    return e && "shadowRoot" in e ? tl("Element", e, "shadowRoot") : null
                },
                querySelector: function(e, t) {
                    return tl("Element", e, "querySelector")(t)
                },
                querySelectorAll: function(e, t) {
                    return tl("Element", e, "querySelectorAll")(t)
                },
                mutationObserver: function() {
                    return qo("MutationObserver").constructor
                }
            };
            const il = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
            let ol = {
                map: {},
                getId: () => (console.error(il), -1),
                getNode: () => (console.error(il), null),
                removeNodeFromMap() {
                    console.error(il)
                },
                has: () => (console.error(il), !1),
                reset() {
                    console.error(il)
                }
            };
            "undefined" != typeof window && window.Proxy && window.Reflect && (ol = new Proxy(ol, {
                get: (e, t, r) => ("map" === t && console.error(il), Reflect.get(e, t, r))
            }));
            let ll = Date.now;

            function al(e) {
                if (!e) return null;
                return e.nodeType === e.ELEMENT_NODE ? e : nl.parentElement(e)
            }
            /[1-9][0-9]{12}/.test(Date.now().toString()) || (ll = () => (new Date).getTime());

            function hl(e) {
                var t;
                let r = null;
                return "getRootNode" in e && (null == (t = nl.getRootNode(e)) ? void 0 : t.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && nl.host(nl.getRootNode(e)) && (r = nl.host(nl.getRootNode(e))), r
            }

            function cl(e) {
                let t, r = e;
                for (; t = hl(r);) r = t;
                return r
            }

            function ul(e) {
                const t = e.ownerDocument;
                if (!t) return !1;
                const r = cl(e);
                return nl.contains(t, r)
            }
            const pl = Object.freeze(Object.defineProperty({
                __proto__: null,
                StyleSheetMirror: class {
                    constructor() {
                        l(this, "id", 1), l(this, "styleIDMap", new WeakMap), l(this, "idStyleMap", new Map)
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
                },
                get _mirror() {
                    return ol
                },
                closestElementOfNode: al,
                getBaseDimension: function e(t, r) {
                    var s, n;
                    const i = null == (n = null == (s = t.ownerDocument) ? void 0 : s.defaultView) ? void 0 : n.frameElement;
                    if (!i || i === r) return {
                        x: 0,
                        y: 0,
                        relativeScale: 1,
                        absoluteScale: 1
                    };
                    const o = i.getBoundingClientRect(),
                        l = e(i, r),
                        a = o.height / i.clientHeight;
                    return {
                        x: o.x * l.relativeScale + l.x,
                        y: o.y * l.relativeScale + l.y,
                        relativeScale: a,
                        absoluteScale: l.absoluteScale * a
                    }
                },
                getNestedRule: function e(t, r) {
                    const s = t[r[0]];
                    return 1 === r.length ? s : e(s.cssRules[r[1]].cssRules, r.slice(2))
                },
                getPositionsAndIndex: function(e) {
                    const t = [...e],
                        r = t.pop();
                    return {
                        positions: t,
                        index: r
                    }
                },
                getRootShadowHost: cl,
                getShadowHost: hl,
                getWindowHeight: function() {
                    return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
                },
                getWindowScroll: function(e) {
                    var t, r, s, n;
                    const i = e.document;
                    return {
                        left: i.scrollingElement ? i.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : i.documentElement.scrollLeft || (null == i ? void 0 : i.body) && (null == (t = nl.parentElement(i.body)) ? void 0 : t.scrollLeft) || (null == (r = null == i ? void 0 : i.body) ? void 0 : r.scrollLeft) || 0,
                        top: i.scrollingElement ? i.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : (null == i ? void 0 : i.documentElement.scrollTop) || (null == i ? void 0 : i.body) && (null == (s = nl.parentElement(i.body)) ? void 0 : s.scrollTop) || (null == (n = null == i ? void 0 : i.body) ? void 0 : n.scrollTop) || 0
                    }
                },
                getWindowWidth: function() {
                    return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
                },
                hasShadowRoot: function(e) {
                    return !!e && (e instanceof Ko && "shadowRoot" in e ? Boolean(e.shadowRoot) : Boolean(nl.shadowRoot(e)))
                },
                hookSetter: function e(t, r, s, n, i = window) {
                    const o = i.Object.getOwnPropertyDescriptor(t, r);
                    return i.Object.defineProperty(t, r, n ? s : {
                        set(e) {
                            setTimeout((() => {
                                s.set.call(this, e)
                            }), 0), o && o.set && o.set.call(this, e)
                        }
                    }), () => e(t, r, o || {}, !0)
                },
                inDom: function(e) {
                    const t = e.ownerDocument;
                    return !!t && (nl.contains(t, e) || ul(e))
                },
                isAncestorRemoved: function e(t, r) {
                    if (function(e) {
                            const t = e && "host" in e && "mode" in e && w.host(e) || null;
                            return Boolean(t && "shadowRoot" in t && w.shadowRoot(t) === e)
                        }(t)) return !1;
                    const s = r.getId(t);
                    if (!r.has(s)) return !0;
                    const n = nl.parentNode(t);
                    return (!n || n.nodeType !== t.DOCUMENT_NODE) && (!n || e(n, r))
                },
                isBlocked: function(e, t, r, s) {
                    if (!e) return !1;
                    const n = al(e);
                    if (!n) return !1;
                    try {
                        if ("string" == typeof t) {
                            if (n.classList.contains(t)) return !0;
                            if (s && null !== n.closest("." + t)) return !0
                        } else if (v(n, t, s)) return !0
                    } catch (e) {}
                    if (r) {
                        if (n.matches(r)) return !0;
                        if (s && null !== n.closest(r)) return !0
                    }
                    return !1
                },
                isIgnored: function(e, t, r) {
                    return !("TITLE" !== e.tagName || !r.headTitleMutations) || -2 === t.getId(e)
                },
                isSerialized: function(e, t) {
                    return -1 !== t.getId(e)
                },
                isSerializedIframe: function(e, t) {
                    return Boolean("IFRAME" === e.nodeName && t.getMeta(e))
                },
                isSerializedStylesheet: function(e, t) {
                    return Boolean("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
                },
                iterateResolveTree: function e(t, r) {
                    r(t.value);
                    for (let s = t.children.length - 1; s >= 0; s--) e(t.children[s], r)
                },
                legacy_isTouchEvent: function(e) {
                    return Boolean(e.changedTouches)
                },
                get nowTimestamp() {
                    return ll
                },
                on: function(e, t, r = document) {
                    const s = {
                        capture: !0,
                        passive: !0
                    };
                    return r.addEventListener(e, t, s), () => r.removeEventListener(e, t, s)
                },
                patch: function(e, t, r) {
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
                },
                polyfill: function(e = window) {
                    "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach)
                },
                queueToResolveTrees: function(e) {
                    const t = {},
                        r = (e, r) => {
                            const s = {
                                value: e,
                                parent: r,
                                children: []
                            };
                            return t[e.node.id] = s, s
                        },
                        s = [];
                    for (const n of e) {
                        const {
                            nextId: e,
                            parentId: i
                        } = n;
                        if (e && e in t) {
                            const i = t[e];
                            if (i.parent) {
                                const e = i.parent.children.indexOf(i);
                                i.parent.children.splice(e, 0, r(n, i.parent))
                            } else {
                                const e = s.indexOf(i);
                                s.splice(e, 0, r(n, null))
                            }
                        } else if (i in t) {
                            const e = t[i];
                            e.children.push(r(n, e))
                        } else s.push(r(n, null))
                    }
                    return s
                },
                shadowHostInDom: ul,
                throttle: function(e, t, r = {}) {
                    let s = null,
                        n = 0;
                    return function(...i) {
                        const o = Date.now();
                        n || !1 !== r.leading || (n = o);
                        const l = t - (o - n),
                            a = this;
                        l <= 0 || l > t ? (s && (clearTimeout(s), s = null), n = o, e.apply(a, i)) : s || !1 === r.trailing || (s = setTimeout((() => {
                            n = !1 === r.leading ? 0 : Date.now(), s = null, e.apply(a, i)
                        }), l))
                    }
                },
                uniqueTextMutations: function(e) {
                    const t = new Set,
                        r = [];
                    for (let s = e.length; s--;) {
                        const n = e[s];
                        t.has(n.id) || (r.push(n), t.add(n.id))
                    }
                    return r
                }
            }, Symbol.toStringTag, {
                value: "Module"
            }));
            for (var fl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", dl = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), ml = 0; ml < 64; ml++) dl[fl.charCodeAt(ml)] = ml;
            var gl, yl, wl;
            "undefined" != typeof window && window.Blob && new Blob([(gl = "KGZ1bmN0aW9uKCkgewogICJ1c2Ugc3RyaWN0IjsKICB2YXIgY2hhcnMgPSAiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyI7CiAgdmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAidW5kZWZpbmVkIiA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTsKICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7CiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpOwogIH0KICB2YXIgZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHsKICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSwgaTIsIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gIiI7CiAgICBmb3IgKGkyID0gMDsgaTIgPCBsZW47IGkyICs9IDMpIHsKICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kyXSA+PiAyXTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMl0gJiAzKSA8PCA0IHwgYnl0ZXNbaTIgKyAxXSA+PiA0XTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMiArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpMiArIDJdID4+IDZdOwogICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaTIgKyAyXSAmIDYzXTsKICAgIH0KICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgIj0iOwogICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgIj09IjsKICAgIH0KICAgIHJldHVybiBiYXNlNjQ7CiAgfTsKICBjb25zdCBsYXN0QmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7CiAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKICBhc3luYyBmdW5jdGlvbiBnZXRUcmFuc3BhcmVudEJsb2JGb3Iod2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMpIHsKICAgIGNvbnN0IGlkID0gYCR7d2lkdGh9LSR7aGVpZ2h0fWA7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBpZiAodHJhbnNwYXJlbnRCbG9iTWFwLmhhcyhpZCkpIHJldHVybiB0cmFuc3BhcmVudEJsb2JNYXAuZ2V0KGlkKTsKICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsKICAgICAgb2Zmc2NyZWVuLmdldENvbnRleHQoIjJkIik7CiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBvZmZzY3JlZW4uY29udmVydFRvQmxvYihkYXRhVVJMT3B0aW9ucyk7CiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpOwogICAgICBjb25zdCBiYXNlNjQgPSBlbmNvZGUoYXJyYXlCdWZmZXIpOwogICAgICB0cmFuc3BhcmVudEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICByZXR1cm4gYmFzZTY0OwogICAgfSBlbHNlIHsKICAgICAgcmV0dXJuICIiOwogICAgfQogIH0KICBjb25zdCB3b3JrZXIgPSBzZWxmOwogIHdvcmtlci5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbihlKSB7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBjb25zdCB7IGlkLCBiaXRtYXAsIHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zIH0gPSBlLmRhdGE7CiAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKAogICAgICAgIHdpZHRoLAogICAgICAgIGhlaWdodCwKICAgICAgICBkYXRhVVJMT3B0aW9ucwogICAgICApOwogICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOwogICAgICBjb25zdCBjdHggPSBvZmZzY3JlZW4uZ2V0Q29udGV4dCgiMmQiKTsKICAgICAgY3R4LmRyYXdJbWFnZShiaXRtYXAsIDAsIDApOwogICAgICBiaXRtYXAuY2xvc2UoKTsKICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IG9mZnNjcmVlbi5jb252ZXJ0VG9CbG9iKGRhdGFVUkxPcHRpb25zKTsKICAgICAgY29uc3QgdHlwZSA9IGJsb2IudHlwZTsKICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCk7CiAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7CiAgICAgIGlmICghbGFzdEJsb2JNYXAuaGFzKGlkKSAmJiBhd2FpdCB0cmFuc3BhcmVudEJhc2U2NCA9PT0gYmFzZTY0KSB7CiAgICAgICAgbGFzdEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICAgIHJldHVybiB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZCB9KTsKICAgICAgfQogICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KSByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7CiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7CiAgICAgICAgaWQsCiAgICAgICAgdHlwZSwKICAgICAgICBiYXNlNjQsCiAgICAgICAgd2lkdGgsCiAgICAgICAgaGVpZ2h0CiAgICAgIH0pOwogICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7CiAgICB9IGVsc2UgewogICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsKICAgIH0KICB9Owp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS1iaXRtYXAtZGF0YS11cmwtd29ya2VyLUlKcEM3Z19iLmpzLm1hcAo=", Uint8Array.from(atob(gl), (e => e.charCodeAt(0))))], {
                type: "text/javascript;charset=utf-8"
            });
            try {
                if (2 !== Array.from([1], (e => 2 * e))[0]) {
                    const e = document.createElement("iframe");
                    document.body.appendChild(e), Array.from = (null == (s = e.contentWindow) ? void 0 : s.Array.from) || Array.from, document.body.removeChild(e)
                }
            } catch (e) {
                console.debug("Unable to override Array.from", e)
            }
            new b, (wl = yl || (yl = {}))[wl.NotStarted = 0] = "NotStarted", wl[wl.Running = 1] = "Running", wl[wl.Stopped = 2] = "Stopped";
            class bl {
                constructor(e) {
                    i(this, "fileName"), i(this, "functionName"), i(this, "lineNumber"), i(this, "columnNumber"), this.fileName = e.fileName || "", this.functionName = e.functionName || "", this.lineNumber = e.lineNumber, this.columnNumber = e.columnNumber
                }
                toString() {
                    const e = this.lineNumber || "",
                        t = this.columnNumber || "";
                    return this.functionName ? `${this.functionName} (${this.fileName}:${e}:${t})` : `${this.fileName}:${e}:${t}`
                }
            }
            const vl = /(^|@)\S+:\d+/,
                Cl = /^\s*at .*(\S+:\d+|\(native\))/m,
                xl = /^(eval@)?(\[native code])?$/,
                Sl = {
                    parse: function(e) {
                        return e ? void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"] ? this.parseOpera(e) : e.stack && e.stack.match(Cl) ? this.parseV8OrIE(e) : e.stack ? this.parseFFOrSafari(e) : (console.warn("[console-record-plugin]: Failed to parse error object:", e), []) : []
                    },
                    extractLocation: function(e) {
                        if (-1 === e.indexOf(":")) return [e];
                        const t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
                        if (!t) throw new Error(`Cannot parse given url: ${e}`);
                        return [t[1], t[2] || void 0, t[3] || void 0]
                    },
                    parseV8OrIE: function(e) {
                        return e.stack.split("\n").filter((function(e) {
                            return !!e.match(Cl)
                        }), this).map((function(e) {
                            e.indexOf("(eval ") > -1 && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
                            let t = e.replace(/^\s+/, "").replace(/\(eval code/g, "(");
                            const r = t.match(/ (\((.+):(\d+):(\d+)\)$)/);
                            t = r ? t.replace(r[0], "") : t;
                            const s = t.split(/\s+/).slice(1),
                                n = this.extractLocation(r ? r[1] : s.pop()),
                                i = s.join(" ") || void 0,
                                o = ["eval", "<anonymous>"].indexOf(n[0]) > -1 ? void 0 : n[0];
                            return new bl({
                                functionName: i,
                                fileName: o,
                                lineNumber: n[1],
                                columnNumber: n[2]
                            })
                        }), this)
                    },
                    parseFFOrSafari: function(e) {
                        return e.stack.split("\n").filter((function(e) {
                            return !e.match(xl)
                        }), this).map((function(e) {
                            if (e.indexOf(" > eval") > -1 && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === e.indexOf("@") && -1 === e.indexOf(":")) return new bl({
                                functionName: e
                            });
                            {
                                const t = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                                    r = e.match(t),
                                    s = r && r[1] ? r[1] : void 0,
                                    n = this.extractLocation(e.replace(t, ""));
                                return new bl({
                                    functionName: s,
                                    fileName: n[0],
                                    lineNumber: n[1],
                                    columnNumber: n[2]
                                })
                            }
                        }), this)
                    },
                    parseOpera: function(e) {
                        return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                    },
                    parseOpera9: function(e) {
                        const t = /Line (\d+).*script (?:in )?(\S+)/i,
                            r = e.message.split("\n"),
                            s = [];
                        for (let e = 2, n = r.length; e < n; e += 2) {
                            const n = t.exec(r[e]);
                            n && s.push(new bl({
                                fileName: n[2],
                                lineNumber: parseFloat(n[1])
                            }))
                        }
                        return s
                    },
                    parseOpera10: function(e) {
                        const t = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                            r = e.stacktrace.split("\n"),
                            s = [];
                        for (let e = 0, n = r.length; e < n; e += 2) {
                            const n = t.exec(r[e]);
                            n && s.push(new bl({
                                functionName: n[3] || void 0,
                                fileName: n[2],
                                lineNumber: parseFloat(n[1])
                            }))
                        }
                        return s
                    },
                    parseOpera11: function(e) {
                        return e.stack.split("\n").filter((function(e) {
                            return !!e.match(vl) && !e.match(/^Error created at/)
                        }), this).map((function(e) {
                            const t = e.split("@"),
                                r = this.extractLocation(t.pop()),
                                s = (t.shift() || "").replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                            return new bl({
                                functionName: s,
                                fileName: r[0],
                                lineNumber: r[1],
                                columnNumber: r[2]
                            })
                        }), this)
                    }
                };

            function Il(e) {
                if (!e || !e.outerHTML) return "";
                let t = "";
                for (; e.parentElement;) {
                    let r = e.localName;
                    if (!r) break;
                    r = r.toLowerCase();
                    const s = e.parentElement,
                        n = [];
                    if (s.children && s.children.length > 0)
                        for (let e = 0; e < s.children.length; e++) {
                            const t = s.children[e];
                            t.localName && t.localName.toLowerCase && t.localName.toLowerCase() === r && n.push(t)
                        }
                    n.length > 1 && (r += `:eq(${n.indexOf(e)})`), t = r + (t ? ">" + t : ""), e = s
                }
                return t
            }

            function Ol(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function Al(e, t) {
                if (0 === t) return !0;
                const r = Object.keys(e);
                for (const s of r)
                    if (Ol(e[s]) && Al(e[s], t - 1)) return !0;
                return !1
            }

            function kl(e, t) {
                const r = {
                    numOfKeysLimit: 50,
                    depthOfLimit: 4
                };
                Object.assign(r, t);
                const s = [],
                    n = [];
                return JSON.stringify(e, (function(e, t) {
                    if (s.length > 0) {
                        const r = s.indexOf(this);
                        ~r ? s.splice(r + 1) : s.push(this), ~r ? n.splice(r, 1 / 0, e) : n.push(e), ~s.indexOf(t) && (t = s[0] === t ? "[Circular ~]" : "[Circular ~." + n.slice(0, s.indexOf(t)).join(".") + "]")
                    } else s.push(t);
                    if (null === t) return t;
                    if (void 0 === t) return "undefined";
                    if (function(e) {
                            if (Ol(e) && Object.keys(e).length > r.numOfKeysLimit) return !0;
                            if ("function" == typeof e) return !0;
                            if (Ol(e) && Al(e, r.depthOfLimit)) return !0;
                            return !1
                        }(t)) return function(e) {
                        let t = e.toString();
                        r.stringLengthLimit && t.length > r.stringLengthLimit && (t = `${t.slice(0,r.stringLengthLimit)}...`);
                        return t
                    }(t);
                    if ("bigint" == typeof t) return t.toString() + "n";
                    if (t instanceof Event) {
                        const e = {};
                        for (const r in t) {
                            const s = t[r];
                            Array.isArray(s) ? e[r] = Il(s.length ? s[0] : null) : e[r] = s
                        }
                        return e
                    }
                    return t instanceof Node ? t instanceof HTMLElement ? t ? t.outerHTML : "" : t.nodeName : t instanceof Error ? t.stack ? t.stack + "\nEnd of stack for Error object" : t.name + ": " + t.message : t
                }))
            }
            const Rl = {
                level: ["assert", "clear", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "trace", "warn"],
                lengthThreshold: 1e3,
                logger: "console"
            };

            function El(e, t, r) {
                const s = r ? Object.assign({}, Rl, r) : Rl,
                    n = s.logger;
                if (!n) return () => {};
                let i;
                i = "string" == typeof n ? t[n] : n;
                let o = 0,
                    l = !1;
                const a = [];
                if (s.level.includes("error")) {
                    const r = t => {
                        const r = t.message,
                            n = t.error,
                            i = Sl.parse(n).map((e => e.toString())),
                            o = [kl(r, s.stringifyOptions)];
                        e({
                            level: "error",
                            trace: i,
                            payload: o
                        })
                    };
                    t.addEventListener("error", r), a.push((() => {
                        t.removeEventListener("error", r)
                    }));
                    const n = t => {
                        let r, n;
                        t.reason instanceof Error ? (r = t.reason, n = [kl(`Uncaught (in promise) ${r.name}: ${r.message}`, s.stringifyOptions)]) : (r = new Error, n = [kl("Uncaught (in promise)", s.stringifyOptions), kl(t.reason, s.stringifyOptions)]);
                        const i = Sl.parse(r).map((e => e.toString()));
                        e({
                            level: "error",
                            trace: i,
                            payload: n
                        })
                    };
                    t.addEventListener("unhandledrejection", n), a.push((() => {
                        t.removeEventListener("unhandledrejection", n)
                    }))
                }
                for (const e of s.level) a.push(h(i, e));
                return () => {
                    a.forEach((e => e()))
                };

                function h(t, r) {
                    return t[r] ? pl.patch(t, r, (t => (...n) => {
                        if (t.apply(this, n), !("assert" === r && n[0] || l)) {
                            l = !0;
                            try {
                                const t = Sl.parse(new Error).map((e => e.toString())).splice(1),
                                    i = ("assert" === r ? n.slice(1) : n).map((e => kl(e, s.stringifyOptions)));
                                o++, o < s.lengthThreshold ? e({
                                    level: r,
                                    trace: t,
                                    payload: i
                                }) : o === s.lengthThreshold && e({
                                    level: "warn",
                                    trace: [],
                                    payload: [kl("The number of log records reached the threshold.")]
                                })
                            } catch (e) {
                                t("rrweb logger error:", e, ...n)
                            } finally {
                                l = !1
                            }
                        }
                    })) : () => {}
                }
            }
            const Nl = "rrweb/console@1",
                Ml = e => ({
                    name: Nl,
                    observer: El,
                    options: e
                })
        }
    }
]);
//# sourceMappingURL=3d1b671f26b4a9a4fee06b762f306636f87ebc6a2322150266c6293b5c72f5cf.js.map