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
                c = "f15c",
                l = "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z";
            t.definition = {
                prefix: "fas",
                iconName: a,
                icon: [384, 512, n, c, l]
            }, t.faFileLines = t.definition, t.prefix = "fas", t.iconName = a, t.width = 384, t.height = 512, t.ligatures = n, t.unicode = c, t.svgPathData = l, t.aliases = n
        },
        26375: (e, t) => {
            var a = "id-card",
                n = [62147, "drivers-license"],
                c = "f2c2",
                l = "M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z";
            t.DF = {
                prefix: "fas",
                iconName: a,
                icon: [576, 512, n, c, l]
            }, t.Uk = t.DF
        },
        23598: (e, t) => {
            var a = "money-bill",
                n = [],
                c = "f0d6",
                l = "M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z";
            t.DF = {
                prefix: "fas",
                iconName: a,
                icon: [576, 512, n, c, l]
            }, t.aL = t.DF
        },
        18393: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => g
            });
            var n = a(15861),
                c = a(54546),
                l = a(23598),
                r = a(26375),
                i = a(7452),
                s = a(64687),
                o = a.n(s),
                u = a(67294),
                d = a(80873),
                m = a(34226),
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
                    H = (0, c.Z)(C, 2),
                    k = H[0],
                    z = H[1].isLoading,
                    N = (0, E.O7)(),
                    y = (0, c.Z)(N, 2),
                    w = y[0],
                    A = y[1].isLoading,
                    x = u.useState(!1),
                    M = (0, c.Z)(x, 2),
                    D = M[0],
                    V = M[1],
                    Z = u.useState("NODATA"),
                    L = (0, c.Z)(Z, 2),
                    O = L[0],
                    T = L[1],
                    F = (0, E.$2)(),
                    I = (0, c.Z)(F, 2),
                    U = I[0],
                    P = I[1],
                    J = P.isLoading,
                    R = (P.isError, P.error, P.isSuccess, (0, E.ve)()),
                    Y = (0, c.Z)(R, 2),
                    $ = Y[0],
                    _ = Y[1],
                    q = _.isLoading,
                    K = (_.isError, _.error, _.isSuccess, u.useState(100)),
                    X = (0, c.Z)(K, 2),
                    W = X[0],
                    j = X[1],
                    B = u.useState(""),
                    G = (0, c.Z)(B, 2),
                    Q = G[0],
                    ee = G[1],
                    te = u.useState("standard"),
                    ae = (0, c.Z)(te, 2),
                    ne = ae[0],
                    ce = ae[1],
                    le = u.useState("add"),
                    re = (0, c.Z)(le, 2),
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
                                    return U({
                                        toUserId: Q || a,
                                        amountTokens: W,
                                        toWalletType: ne
                                    }), e.abrupt("break", 8);
                                case 5:
                                    return $({
                                        fromUserId: Q || a,
                                        amountTokens: W
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
                var ue = z || A;
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
                        V(e.target.value)
                    },
                    disabled: ue
                }, u.createElement("option", {
                    value: !0
                }, "Accepted"), u.createElement("option", {
                    value: !1
                }, "Not Accepted")), u.createElement(m.zx, {
                    onClick: function() {
                        k({
                            userId: a,
                            accepted: D
                        })
                    },
                    disabled: ue
                }, u.createElement(m.$1, {
                    icon: i.cw
                }), " Update ToS Acceptance"), u.createElement("h3", null, "Set KYC Completion State"), u.createElement("select", {
                    className: "custom-select",
                    value: O,
                    onChange: function(e) {
                        T(e.target.value)
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
                            state: O
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
                    disabled: J || q
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
                        ce(e.target.value)
                    },
                    disabled: J || q
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
                    value: W,
                    onChange: function(e) {
                        j(e.target.value)
                    }
                })), u.createElement(m.zx, {
                    onClick: oe,
                    loading: J || q,
                    disabled: 40 !== Q.length || J || q
                }, u.createElement(m.$1, {
                    icon: l.aL
                }), " ", "add" === ie ? "Add to ".concat(ne) : "Subtract from", " wallet"))
            }
        }
    }
]);
//# sourceMappingURL=1a033ac5d2213ee70f09dc3c9433adc3f37def9f9961ef90a219eb039a955212.js.map