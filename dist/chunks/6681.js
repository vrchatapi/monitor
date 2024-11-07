"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6681], {
        46681: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var i = n(54546),
                a = n(42619),
                o = n(59545),
                r = n(68055),
                c = n(28361),
                s = n(67294),
                l = n(25062),
                d = n(83505),
                u = n(34226),
                m = n(43862);
            const h = function(e) {
                var t = e.isAdminView,
                    n = void 0 !== t && t,
                    h = e.imageUrl,
                    p = e.fileId,
                    g = e.versionNumber,
                    f = e.onWear,
                    x = e.onDelete,
                    v = e.borderColor,
                    b = e.showWear,
                    E = (e.didClickConvertToIcon, e.imageWidth),
                    k = e.imageHeight,
                    w = e.onShouldDeleteSelf,
                    y = e.disableManagement,
                    Z = e.onSelect,
                    S = e.showSelect,
                    C = s.useState(!0),
                    N = (0, i.Z)(C, 2),
                    M = N[0],
                    L = N[1],
                    $ = s.useState(!1),
                    j = (0, i.Z)($, 2),
                    z = j[0],
                    W = j[1],
                    D = s.useState(!1),
                    I = (0, i.Z)(D, 2),
                    T = I[0],
                    _ = I[1],
                    q = s.useState(!1),
                    A = (0, i.Z)(q, 2),
                    B = A[0],
                    H = (A[1], s.useState(16 / 9)),
                    U = (0, i.Z)(H, 2),
                    V = U[0],
                    F = (U[1], s.useState(!0)),
                    G = (0, i.Z)(F, 2),
                    J = G[0],
                    K = (G[1], s.useState(!1)),
                    O = (0, i.Z)(K, 2),
                    P = O[0],
                    Q = O[1],
                    R = function() {
                        !y && J && (B || W(!0))
                    },
                    X = function() {
                        W(!1), _(!1)
                    },
                    Y = function() {
                        _(!0)
                    },
                    ee = function() {
                        _(!1)
                    },
                    te = B ? "spin-and-shrink " : "",
                    ne = P ? "jitter-but-you-drank-decaf " : "",
                    ie = v,
                    ae = null != E ? E : "auto",
                    oe = k || 135,
                    re = null != V ? V : 16 / 9;
                return s.createElement("div", {
                    className: te + ne + (0, d.iv)("width:", ae, "px;height:", oe, "px;aspect-ratio:", re, ";display:flex;z-index:1;align-items:center;justify-content:center;"),
                    onMouseLeave: X
                }, s.createElement("div", {
                    className: "image-preview ".concat((0, d.iv)("background-color:transparent;border:2px solid ", ie || "var(--bs-gray-dark)", ";width:", ae, "px!important;height:", oe, "px;padding:5px;border-radius:7px;z-index:3!important;")),
                    onMouseEnter: R
                }, s.createElement("img", {
                    src: h,
                    alt: "user",
                    className: (0, d.iv)("height:", oe - 10, "px;aspect-ratio:", re, ";border-radius:7px;"),
                    hidden: M,
                    onLoad: function(e) {
                        var t = e.target;
                        t.width, t.height;
                        L(!1)
                    }
                }), s.createElement("div", {
                    className: (0, d.iv)("height:", oe - 10, "px;max-height:", oe - 10, "px;aspect-ratio:", re, ";border-radius:100%;display:flex;align-items:center;justify-content:center;"),
                    hidden: !M
                }, s.createElement(m.Z, null))), s.createElement("div", {
                    className: "management-box ".concat("quick-visible margin-slide-out ", " ").concat((0, d.iv)("width:30px;height:", oe - 10, "px;background-color:var(--bs-gray-dark);border-radius:0 10px 10px 0;z-index:2!important;")),
                    hidden: !z,
                    onMouseEnter: R,
                    onMouseLeave: X
                }, s.createElement("div", {
                    className: (0, d.iv)({
                        name: "h7cwxi",
                        styles: "display:flex;justify-content:center;align-content:center;flex-flow:column;padding-left:80%;height:100%;.badge{margin:0.2em 0 0.5em -1.3em;border-top-right-radius:0;border-bottom-right-radius:0;z-index:10;}"
                    })
                }, !n && b && s.createElement(l.Z, {
                    color: "success",
                    onClick: function() {
                        W(!1), f(p, g)
                    }
                }, s.createElement(u.$1, {
                    icon: c.vT,
                    color: "hsl(0, 0%, 7%)"
                })), S && s.createElement(l.Z, {
                    color: "success",
                    onClick: function() {
                        W(!1), Z(p, h)
                    }
                }, s.createElement(u.$1, {
                    icon: r.LE
                })), !1, s.createElement(l.Z, {
                    color: "danger",
                    onClick: T ? null : Y,
                    onMouseLeave: ee,
                    className: (0, d.iv)({
                        name: "7yp9nl",
                        styles: "display:flex;flex-direction:column;.fa:last-child{margin-top:0.4em;}"
                    })
                }, s.createElement(u.$1, {
                    icon: T ? o.NB : a.$,
                    onClick: T ? ee : Y
                }), s.createElement(u.$1, {
                    icon: a.$,
                    hidden: !T,
                    onClick: function() {
                        W(!1), x(p), w && w(p)
                    },
                    onMouseEnter: function() {
                        Q(!0)
                    },
                    onMouseLeave: function() {
                        Q(!1)
                    }
                })))))
            }
        }
    }
]);
//# sourceMappingURL=adc0de51c9936347622180af2a8fe1ee0359fc2c05e16c91134e60b4719a895e.js.map