"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8393], {
        7452: (e, t, a) => {
            var n = a(76792);
            t.DF = {
                prefix: n.prefix,
                iconName: n.iconName,
                icon: [n.width, n.height, n.aliases, n.unicode, n.svgPathData]
            }, t.cw = t.DF, n.prefix, n.iconName, n.width, n.height, n.aliases, n.unicode, n.svgPathData, n.aliases
        },
        76792: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = "file-lines",
                n = [128441, 128462, 61686, "file-alt", "file-text"],
                l = "f15c",
                c = "M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z";
            t.definition = {
                prefix: "fas",
                iconName: a,
                icon: [384, 512, n, l, c]
            }, t.faFileLines = t.definition, t.prefix = "fas", t.iconName = a, t.width = 384, t.height = 512, t.ligatures = n, t.unicode = l, t.svgPathData = c, t.aliases = n
        },
        26375: (e, t) => {
            var a = "id-card",
                n = [62147, "drivers-license"],
                l = "f2c2",
                c = "M0 96l576 0c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm0 32L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-288L0 128zM64 405.3c0-29.5 23.9-53.3 53.3-53.3l117.3 0c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7L74.7 416c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z";
            t.DF = {
                prefix: "fas",
                iconName: a,
                icon: [576, 512, n, l, c]
            }, t.Uk = t.DF
        },
        23598: (e, t) => {
            var a = "money-bill",
                n = [],
                l = "f0d6",
                c = "M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm64 320l-64 0 0-64c35.3 0 64 28.7 64 64zM64 192l0-64 64 0c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64l0 64-64 0zm64-192c-35.3 0-64-28.7-64-64l64 0 0 64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z";
            t.DF = {
                prefix: "fas",
                iconName: a,
                icon: [576, 512, n, l, c]
            }, t.aL = t.DF
        },
        18393: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => g
            });
            var n = a(15861),
                l = a(54546),
                c = a(23598),
                r = a(26375),
                i = a(7452),
                s = a(64687),
                o = a.n(s),
                u = a(67294),
                d = a(17383),
                m = a(96985),
                p = a(43862),
                f = a(22202),
                E = a(6655);
            const g = function() {
                var e = (0, d.pc)(),
                    t = (0, f.IB)().data,
                    a = null == t ? void 0 : t.id,
                    s = (0, E.v$)({
                        userId: a
                    }, {
                        skip: !a,
                        refetchOnMountOrArgChange: !0
                    }),
                    g = s.data,
                    h = s.isLoading,
                    v = (0, E.gq)({
                        userId: a
                    }, {
                        skip: !a,
                        refetchOnMountOrArgChange: !0
                    }),
                    b = v.data,
                    S = v.isLoading,
                    C = (0, E.nT)(),
                    k = (0, l.Z)(C, 2),
                    z = k[0],
                    N = k[1].isLoading,
                    y = (0, E.O7)(),
                    L = (0, l.Z)(y, 2),
                    w = L[0],
                    A = L[1].isLoading,
                    x = u.useState(!1),
                    M = (0, l.Z)(x, 2),
                    D = M[0],
                    Z = M[1],
                    O = u.useState("NODATA"),
                    T = (0, l.Z)(O, 2),
                    F = T[0],
                    I = T[1],
                    U = (0, E.$2)(),
                    P = (0, l.Z)(U, 2),
                    J = P[0],
                    R = P[1],
                    Y = R.isLoading,
                    $ = (R.isError, R.error, R.isSuccess, (0, E.ve)()),
                    _ = (0, l.Z)($, 2),
                    q = _[0],
                    K = _[1],
                    V = K.isLoading,
                    X = (K.isError, K.error, K.isSuccess, u.useState(100)),
                    W = (0, l.Z)(X, 2),
                    j = W[0],
                    B = W[1],
                    G = u.useState(""),
                    H = (0, l.Z)(G, 2),
                    Q = H[0],
                    ee = H[1],
                    te = u.useState("standard"),
                    ae = (0, l.Z)(te, 2),
                    ne = ae[0],
                    le = ae[1],
                    ce = u.useState("add"),
                    re = (0, l.Z)(ce, 2),
                    ie = re[0],
                    se = re[1];
                u.useEffect((function() {
                    ee(t.id)
                }), [t]);
                var oe = function() {
                    var e = (0, n.Z)(o().mark((function e() {
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.t0 = ie, e.next = "add" === e.t0 ? 3 : "subtract" === e.t0 ? 5 : 7;
                                    break;
                                case 3:
                                    return J({
                                        toUserId: Q || a,
                                        amountTokens: j,
                                        toWalletType: ne
                                    }), e.abrupt("break", 8);
                                case 5:
                                    return q({
                                        fromUserId: Q || a,
                                        amountTokens: j
                                    }), e.abrupt("break", 8);
                                case 7:
                                    console.error("Unexpected tiliaTokenAction: ".concat(JSON.stringify(ie)));
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                if (!e) return null;
                var ue = N || A;
                return u.createElement(m.JX, {
                    className: "pb-5"
                }, u.createElement("h2", null, u.createElement(m.RL, {
                    to: "/home/marketplace"
                }, "Marketplace"), " - Staging Junk Drawer"), u.createElement("h3", null, "Tilia Account Status"), u.createElement(m.qX, {
                    type: "info",
                    title: "ToS Acceptance"
                }, h ? u.createElement(u.Fragment, null, u.createElement(p.Z, {
                    style: {
                        display: "inline-block"
                    }
                }), " Please wait warmly...") : u.createElement("code", null, u.createElement("pre", null, JSON.stringify(g, null, "  ")))), u.createElement(m.qX, {
                    type: "info",
                    title: "KYC Completion"
                }, S ? u.createElement(u.Fragment, null, u.createElement(p.Z, {
                    style: {
                        display: "inline-block"
                    }
                }), " Please wait warmly...") : u.createElement("code", null, u.createElement("pre", null, JSON.stringify(b, null, "  ")))), u.createElement("h3", null, "Set ToS acceptance State"), u.createElement("select", {
                    className: "custom-select",
                    value: D,
                    onChange: function(e) {
                        Z(e.target.value)
                    },
                    disabled: ue
                }, u.createElement("option", {
                    value: !0
                }, "Accepted"), u.createElement("option", {
                    value: !1
                }, "Not Accepted")), u.createElement(m.zx, {
                    onClick: function() {
                        z({
                            userId: a,
                            accepted: D
                        })
                    },
                    disabled: ue
                }, u.createElement(m.$1, {
                    icon: i.cw
                }), " Update ToS Acceptance"), u.createElement("h3", null, "Set KYC Completion State"), u.createElement("select", {
                    className: "custom-select",
                    value: F,
                    onChange: function(e) {
                        I(e.target.value)
                    },
                    disabled: ue
                }, ["ACCEPT", "DENY", "MANUAL_REVIEW", "NODATA", "PROCESSING", "REVERIFY"].map((function(e) {
                    return u.createElement("option", {
                        key: e,
                        value: e
                    }, e)
                }))), u.createElement(m.zx, {
                    onClick: function() {
                        w({
                            userId: a,
                            state: F
                        })
                    },
                    disabled: ue
                }, u.createElement(m.$1, {
                    icon: r.Uk
                }), " Update KYC Completion"), u.createElement("h3", null, u.createElement("select", {
                    className: "custom-select",
                    style: {
                        font: "inherit",
                        fontSize: "inherit"
                    },
                    value: ie,
                    onChange: function(e) {
                        se(e.target.value)
                    },
                    disabled: Y || V
                }, u.createElement("option", {
                    value: "add"
                }, "Add to"), u.createElement("option", {
                    value: "subtract"
                }, "Subtract from")), "add" === ie && u.createElement(u.Fragment, null, " ", u.createElement("select", {
                    className: "custom-select",
                    style: {
                        font: "inherit",
                        fontSize: "inherit"
                    },
                    value: ne,
                    onChange: function(e) {
                        le(e.target.value)
                    },
                    disabled: Y || V
                }, u.createElement("option", {
                    value: "standard"
                }, "standard"), u.createElement("option", {
                    value: "earnings"
                }, "earnings"))), " ", "wallet balance"), u.createElement("label", null, "User ID ", u.createElement("input", {
                    type: "text",
                    defaultValue: a,
                    value: Q,
                    onChange: function(e) {
                        ee(e.target.value)
                    }
                })), u.createElement("label", null, u.createElement(m.b5, null), u.createElement("input", {
                    type: "number",
                    value: j,
                    onChange: function(e) {
                        B(e.target.value)
                    }
                })), u.createElement(m.zx, {
                    onClick: oe,
                    loading: Y || V,
                    disabled: 40 !== Q.length || Y || V
                }, u.createElement(m.$1, {
                    icon: c.aL
                }), " ", "add" === ie ? "Add to ".concat(ne) : "Subtract from", " wallet"))
            }
        }
    }
]);
//# sourceMappingURL=378d02a4f195c1cdba127c95547c213ada87a1d47a1d7a58a70f39f998f39636.js.map